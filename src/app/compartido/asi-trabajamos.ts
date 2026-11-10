import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ASI_TRABAJAMOS, ASI_TRABAJAMOS_CORTO } from '../datos/asi-trabajamos';
import { Icono } from './iconos';

/**
 * «Así trabajamos»: cuatro pasos con número e icono. En vertical en el móvil y en cuatro
 * columnas en el ordenador. Va en el HTML prerenderizado.
 */
@Component({
  selector: 'app-asi-trabajamos',
  standalone: true,
  imports: [Icono],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="at" [class.at-claro]="claro()" [attr.aria-labelledby]="idTitulo()">
      <div class="page-container">
        <div class="eyebrow"><span class="eyebrow-dot"></span> CÓMO TE ATENDEMOS</div>
        <h2 class="at-titulo" [id]="idTitulo()">{{ datos.titulo }}</h2>
        <p class="at-subtitulo">{{ datos.subtitulo }}</p>
        <ol class="at-pasos">
          @for (p of datos.pasos; track p.titulo; let i = $index) {
            <li class="at-paso">
              <span class="at-marca" aria-hidden="true">
                <span class="at-num">{{ i + 1 }}</span>
                <app-icono [nombre]="p.icono" />
              </span>
              <div>
                <h3>{{ p.titulo }}</h3>
                <p>{{ p.texto }}</p>
              </div>
            </li>
          }
        </ol>
        <ng-content />
      </div>
    </section>
  `,
  styleUrl: './asi-trabajamos.css',
})
export class AsiTrabajamos {
  readonly datos = ASI_TRABAJAMOS;
  readonly idTitulo = input('titulo-asi-trabajamos');
  /** Fondo blanco en lugar del azul pálido. */
  readonly claro = input(false);
}

/** Versión corta para ir junto al formulario: tres compromisos con su check. */
@Component({
  selector: 'app-asi-trabajamos-corto',
  standalone: true,
  imports: [Icono],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="atc" aria-label="Así trabajamos">
      @for (t of textos; track t) {
        <li><app-icono nombre="check" /> {{ t }}</li>
      }
    </ul>
  `,
  styles: `
    .atc {
      display: flex;
      flex-wrap: wrap;
      gap: 6px 14px;
      margin: 0;
      padding: 0;
      list-style: none;
      color: var(--navy-dark);
      font-size: 14px;
      font-weight: 700;
    }
    .atc li {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .atc app-icono {
      --icono: 16px;
      color: #1a9b5a;
    }
  `,
})
export class AsiTrabajamosCorto {
  readonly textos = ASI_TRABAJAMOS_CORTO;
}
