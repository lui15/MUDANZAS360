import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  PLATFORM_ID,
  effect,
  inject,
  signal,
} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { REDUCIR_MOVIMIENTO } from '../compartido/animaciones';
import { TelefonoLink } from '../compartido/enlaces-contacto';
import { TELEFONO_VISIBLE } from '../datos/contacto';
import {
  ETIQUETAS,
  RUTAS_NACIONALES,
  RUTAS_SERVICIOS,
  RUTAS_ZONAS,
  RutaLanding,
} from '../landing/rutas';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { ScrollEstado } from './scroll-estado.service';

const enlaces = (rutas: readonly RutaLanding[]) =>
  rutas.map((path) => ({ ruta: '/' + path, etiqueta: ETIQUETAS[path] }));

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TelefonoLink],
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeader {
  readonly scroll = inject(ScrollEstado);
  private readonly presupuesto = inject(PresupuestoService);
  private readonly router = inject(Router);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly doc = inject(DOCUMENT);
  private readonly esNavegador = isPlatformBrowser(inject(PLATFORM_ID));

  readonly telefonoVisible = TELEFONO_VISIBLE;

  readonly servicios = enlaces(RUTAS_SERVICIOS);
  readonly rutas = enlaces(RUTAS_NACIONALES);
  readonly zonas = enlaces(RUTAS_ZONAS);

  readonly secciones = [
    { ruta: '/precios', texto: 'Precios' },
    { ruta: '/zonas', texto: 'Zonas' },
    { ruta: '/como-trabajamos', texto: 'Cómo trabajamos' },
    { ruta: '/preguntas-frecuentes', texto: 'Preguntas' },
  ];

  readonly megaAbierto = signal(false);
  readonly menuAbierto = signal(false);

  constructor() {
    effect(() => {
      const abierto = this.menuAbierto();
      if (this.esNavegador) {
        this.doc.documentElement.style.overflow = abierto ? 'hidden' : '';
      }
    });
  }

  /** Con teclado alterna; con ratón o táctil solo abre, porque pasar por encima ya lo abrió. */
  alPulsarServicios(evento: MouseEvent): void {
    this.megaAbierto.set(evento.detail === 0 ? !this.megaAbierto() : true);
  }

  /** Al salir del mega menú con el tabulador, se cierra. */
  alPerderFoco(evento: FocusEvent): void {
    const zona = evento.currentTarget as HTMLElement;
    const destino = evento.relatedTarget as Node | null;
    if (destino && !zona.contains(destino)) {
      this.megaAbierto.set(false);
    }
  }

  cerrarTodo(): void {
    this.megaAbierto.set(false);
    this.menuAbierto.set(false);
  }

  pedirPresupuesto(): void {
    this.cerrarTodo();
    this.presupuesto.abrir();
  }

  /** En la portada, el logotipo vuelve arriba sin navegar. */
  alPulsarLogo(): void {
    this.cerrarTodo();
    if (this.router.url.split(/[?#]/)[0] === '/') {
      this.doc.defaultView?.scrollTo({ top: 0, behavior: REDUCIR_MOVIMIENTO ? 'auto' : 'smooth' });
    }
  }

  @HostListener('document:keydown.escape')
  alPulsarEscape(): void {
    if (this.megaAbierto()) {
      this.host.querySelector<HTMLElement>('.nav-servicios > button')?.focus();
    }
    this.cerrarTodo();
  }

  @HostListener('document:click', ['$event'])
  alPulsarFuera(evento: MouseEvent): void {
    if (this.megaAbierto() && !this.host.contains(evento.target as Node)) {
      this.megaAbierto.set(false);
    }
  }
}
