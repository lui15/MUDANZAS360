import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
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

        @if (carrusel()) {
          <!-- Marquesina: las opiniones pasan solas en bucle. La segunda copia solo sirve para
               que el bucle no tenga corte y queda oculta a lectores de pantalla. -->
          <div class="op-marquesina">
            <ul class="op-pista" [style.--duracion]="opiniones().length * 7 + 's'" [attr.aria-label]="'Opiniones: ' + opiniones().length">
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
              @for (o of opiniones(); track o.nombre) {
                <li class="op-tarjeta op-copia" aria-hidden="true">
                  <app-estrellas [valor]="o.estrellas" />
                  <p class="op-texto">«{{ o.texto }}»</p>
                  <p class="op-autor">
                    <strong>{{ nombre(o) }}</strong>
                    <span>{{ o.servicio }}@if (o.fecha) { · {{ o.fecha }} }</span>
                  </p>
                </li>
              }
            </ul>
          </div>
        } @else {
          <ul class="op-lista" [attr.aria-label]="'Opiniones: ' + opiniones().length">
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

}
