import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  PLATFORM_ID,
  afterNextRender,
  computed,
  inject,
  signal,
} from '@angular/core';

import { REDUCIR_MOVIMIENTO } from '../compartido/animaciones';
import { PresupuestoService } from '../presupuesto/presupuesto.service';

/** Fases de la mudanza animada. */
const ETAPAS = [
  { nombre: 'Llegada', texto: 'Llegamos a tu casa' },
  { nombre: 'Embalaje', texto: 'Protegemos y embalamos tus cosas' },
  { nombre: 'Carga', texto: 'Cargamos el camión' },
  { nombre: 'Salida', texto: 'Salimos desde Madrid' },
  { nombre: 'Ruta', texto: 'De camino a tu destino' },
  { nombre: 'Destino', texto: 'Llegamos a tu nueva casa' },
  { nombre: 'Descarga', texto: 'Descargamos y colocamos todo' },
  { nombre: '¡Lista!', texto: '¡Mudanza terminada!' },
] as const;

const MS_ETAPA = 2800;
const MS_RUTA = 3800;
const MS_FINAL = 4600;
const ETAPA_RUTA = 4;

@Component({
  selector: 'app-mudanza-scene',
  standalone: true,
  templateUrl: './mudanza-scene.html',
  styleUrl: './mudanza-scene.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MudanzaScene {
  private readonly destroyRef = inject(DestroyRef);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly esNavegador = isPlatformBrowser(inject(PLATFORM_ID));
  readonly presupuesto = inject(PresupuestoService);

  readonly etapas = ETAPAS;
  readonly etapa = signal(0);
  readonly reproduciendo = signal(true);
  readonly enPantalla = signal(true);

  readonly lista = computed(() => this.etapa() === ETAPAS.length - 1);
  readonly progreso = computed(() => (this.etapa() + 1) / ETAPAS.length);
  /** El camión está en marcha: la carretera y el paisaje se mueven. */
  readonly conduciendo = computed(() => [3, 4, 5].includes(this.etapa()));
  readonly msEtapa = computed(() => {
    const e = this.etapa();
    return this.lista() ? MS_FINAL : e === ETAPA_RUTA ? MS_RUTA : MS_ETAPA;
  });
  readonly clases = computed(
    () =>
      `escena e${this.etapa()}` +
      (this.conduciendo() ? ' conduciendo' : '') +
      (this.reproduciendo() && this.enPantalla() ? '' : ' pausada'),
  );

  private temporizador?: ReturnType<typeof setTimeout>;

  constructor() {
    afterNextRender(() => {
      if (REDUCIR_MOVIMIENTO) {
        this.etapa.set(ETAPAS.length - 1);
        this.reproduciendo.set(false);
        return;
      }
      this.vigilarVisibilidad();
      this.seguirPuntero();
      this.programar();
    });

    this.destroyRef.onDestroy(() => clearTimeout(this.temporizador));
  }

  /** No consume recursos mientras la escena está fuera de pantalla. */
  private vigilarVisibilidad(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }
    const io = new IntersectionObserver(([e]) => this.enPantalla.set(e.isIntersecting), {
      threshold: 0.1,
    });
    io.observe(this.host);
    this.destroyRef.onDestroy(() => io.disconnect());
  }

  /** Profundidad: las capas de la escena y la tarjeta siguen ligeramente al cursor. */
  private seguirPuntero(): void {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    let pendiente = 0;
    const mover = (e: PointerEvent) => {
      if (pendiente) {
        return;
      }
      pendiente = requestAnimationFrame(() => {
        pendiente = 0;
        const caja = this.host.getBoundingClientRect();
        this.host.style.setProperty('--px', ((e.clientX - caja.left) / caja.width - 0.5).toFixed(3));
        this.host.style.setProperty('--py', ((e.clientY - caja.top) / caja.height - 0.5).toFixed(3));
      });
    };
    const salir = () => {
      this.host.style.setProperty('--px', '0');
      this.host.style.setProperty('--py', '0');
    };

    this.host.addEventListener('pointermove', mover, { passive: true });
    this.host.addEventListener('pointerleave', salir, { passive: true });
    this.destroyRef.onDestroy(() => {
      this.host.removeEventListener('pointermove', mover);
      this.host.removeEventListener('pointerleave', salir);
      cancelAnimationFrame(pendiente);
    });
  }

  private programar(): void {
    clearTimeout(this.temporizador);
    if (!this.esNavegador || REDUCIR_MOVIMIENTO || !this.reproduciendo()) {
      return;
    }

    this.temporizador = setTimeout(() => {
      if (this.enPantalla() && !document.hidden) {
        this.etapa.update((e) => (e + 1) % ETAPAS.length);
      }
      this.programar();
    }, this.msEtapa());
  }

  irAEtapa(indice: number): void {
    this.etapa.set(indice);
    this.programar();
  }

  alternarReproduccion(): void {
    this.reproduciendo.update((v) => !v);
    this.programar();
  }
}
