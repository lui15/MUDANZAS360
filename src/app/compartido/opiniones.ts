import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { PERFIL_GOOGLE } from '../datos/contacto';
import { NOTA_OPINIONES, OPINIONES, Opinion, nombreVisible, resumenOpiniones } from '../datos/opiniones';

/** Cinco estrellas en SVG con su texto accesible («4 de 5 estrellas»). */
@Component({
  selector: 'app-estrellas',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="estrellas" role="img" [attr.aria-label]="etiqueta()">
      @for (i of cinco; track i) {
        <svg viewBox="0 0 20 20" aria-hidden="true" [class.llena]="i <= valor()">
          <path d="M10 1.8l2.5 5.2 5.7.8-4.1 4 1 5.6L10 14.7l-5.1 2.7 1-5.6-4.1-4 5.7-.8z" />
        </svg>
      }
    </span>
  `,
  styles: `
    .estrellas {
      display: inline-flex;
      gap: 2px;
    }
    svg {
      inline-size: var(--estrella, 18px);
      block-size: var(--estrella, 18px);
      fill: #d5dde8;
    }
    svg.llena {
      fill: #f5a623;
    }
  `,
})
export class Estrellas {
  readonly valor = input.required<number>();
  readonly etiqueta = computed(() => `${this.valor()} de 5 estrellas`);
  readonly cinco = [1, 2, 3, 4, 5];
}

/**
 * Bloque de opiniones de clientes. Va en el HTML prerenderizado (texto indexable) y sin marcado
 * Review ni AggregateRating: Google no muestra estrellas de opiniones que la empresa publica sobre
 * sí misma. Los botones de Google aparecen solos cuando PERFIL_GOOGLE tenga URL.
 */
@Component({
  selector: 'app-opiniones',
  standalone: true,
  imports: [RouterLink, Estrellas],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section op-seccion" [class.op-compacta]="compacta()" [attr.aria-labelledby]="idTitulo()">
      <div class="page-container">
        <div class="op-cabecera">
          <div>
            <div class="eyebrow"><span class="eyebrow-dot"></span> OPINIONES DE CLIENTES</div>
            <h2 [id]="idTitulo()">{{ titulo() }} <span>{{ resaltado() }}</span></h2>
          </div>
          <p class="op-resumen">
            <app-estrellas [valor]="5" />
            <strong>{{ resumen.media }} de 5</strong> · {{ resumen.total }} opiniones de clientes
          </p>
        </div>

        <ul
          #lista
          class="op-lista"
          [class.op-carrusel]="carrusel()"
          [attr.aria-label]="'Opiniones: ' + opiniones().length"
          (pointerenter)="encima.set(true)"
          (pointerleave)="encima.set(false)"
          (focusin)="encima.set(true)"
          (focusout)="encima.set(false)"
          (touchstart)="tocado()"
        >
          @for (o of opiniones(); track o.nombre) {
            <li class="op-tarjeta">
              <app-estrellas [valor]="o.estrellas" />
              <blockquote>«{{ o.texto }}»</blockquote>
              <p class="op-autor">
                <strong>{{ nombre(o) }}</strong>
                <span>{{ o.servicio }}@if (o.fecha) { · {{ o.fecha }} }</span>
              </p>
            </li>
          }
        </ul>

        @if (carrusel()) {
          <div class="op-controles">
            <button type="button" class="op-control" aria-label="Opinión anterior" (click)="mover(-1)">‹</button>
            <button
              type="button"
              class="op-control op-pausa"
              [attr.aria-pressed]="pausado()"
              (click)="pausado.set(!pausado())"
            >
              {{ pausado() ? '▶ Reanudar' : '❚❚ Pausar' }}
            </button>
            <button type="button" class="op-control" aria-label="Opinión siguiente" (click)="mover(1)">›</button>
          </div>
        }

        <p class="op-nota">{{ nota }}</p>

        @if (verTodas() || perfilGoogle) {
          <div class="op-acciones">
            @if (verTodas()) {
              <a class="button button-primary" routerLink="/opiniones/">Ver todas las opiniones <span>↗</span></a>
            }
            @if (perfilGoogle) {
              <a class="button op-google" [href]="perfilGoogle" target="_blank" rel="noopener">Ver opiniones en Google</a>
              <a class="button op-google" [href]="perfilGoogle" target="_blank" rel="noopener">Escribir mi opinión</a>
            }
          </div>
        }
      </div>
    </section>
  `,
  styleUrl: './opiniones.css',
})
export class Opiniones {
  readonly opiniones = input<readonly Opinion[]>(OPINIONES);
  readonly titulo = input('Lo que dicen');
  readonly resaltado = input('nuestros clientes');
  /** Carrusel con desplazamiento táctil (portada) o rejilla. */
  readonly carrusel = input(false);
  readonly verTodas = input(true);
  readonly compacta = input(false);
  readonly idTitulo = input('titulo-opiniones');

  /** Siempre sobre todas las opiniones, calculado del archivo de datos. */
  readonly resumen = resumenOpiniones();
  readonly nota = NOTA_OPINIONES;
  readonly perfilGoogle: string | null = PERFIL_GOOGLE;
  readonly nombre = (o: Opinion) => nombreVisible(o.nombre);

  /** Avance automático del carrusel: se para al pasar el ratón, al tocar, con el foco y fuera de pantalla. */
  readonly pausado = signal(false);
  readonly encima = signal(false);
  private readonly lista = viewChild<ElementRef<HTMLUListElement>>('lista');
  private visible = false;
  private tocadoHasta = 0;

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const el = this.lista()?.nativeElement;
      if (!this.carrusel() || !el) return;
      // Quien pide menos movimiento empieza con el carrusel parado; puede reanudarlo con el botón.
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) this.pausado.set(true);
      const observador = new IntersectionObserver(([e]) => (this.visible = e.isIntersecting), { threshold: 0.4 });
      observador.observe(el);
      const reloj = setInterval(() => {
        if (this.pausado() || this.encima() || !this.visible || document.hidden || Date.now() < this.tocadoHasta) return;
        this.mover(1);
      }, 5000);
      destroyRef.onDestroy(() => {
        clearInterval(reloj);
        observador.disconnect();
      });
    });
  }

  /** Tras tocar el carrusel, espera un rato antes de seguir moviéndolo solo. */
  tocado(): void {
    this.tocadoHasta = Date.now() + 8000;
  }

  /** Avanza o retrocede una tarjeta; al llegar al final vuelve al principio. */
  mover(sentido: 1 | -1): void {
    const el = this.lista()?.nativeElement;
    const tarjeta = el?.querySelector('li');
    if (!el || !tarjeta) return;
    const paso = tarjeta.getBoundingClientRect().width + 16;
    const fin = el.scrollWidth - el.clientWidth - 4;
    if (sentido === 1 && el.scrollLeft >= fin) el.scrollTo({ left: 0, behavior: 'smooth' });
    else if (sentido === -1 && el.scrollLeft <= 4) el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
    else el.scrollBy({ left: paso * sentido, behavior: 'smooth' });
  }
}
