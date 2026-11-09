import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PERFIL_GOOGLE } from '../datos/contacto';
import { RevealDirective } from './animaciones';

/**
 * Opiniones: no se publican reseñas escritas por la empresa. El bloque lleva a la ficha de
 * Google, donde los clientes dejan opiniones verificables. Sin AggregateRating propio.
 */
@Component({
  selector: 'app-opiniones',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section reviews-section" id="opiniones">
      <div class="page-container">
        <div appReveal class="center-heading reveal">
          <div class="eyebrow"><span class="eyebrow-dot"></span> OPINIONES DE CLIENTES EN GOOGLE</div>
          <h2>¿Ya te hemos hecho la mudanza?<br /><span>Cuéntanos qué tal.</span></h2>
        </div>

        <div appReveal class="opiniones-google reveal">
          <p>
            Publicamos las opiniones solo en nuestra ficha de Google, donde las escriben los propios
            clientes. Si ya nos has confiado tu mudanza, tu opinión ayuda a otras personas a decidir.
          </p>
          @if (perfilGoogle) {
            <div class="opiniones-acciones">
              <a class="button button-primary" [href]="perfilGoogle" target="_blank" rel="noopener">
                Ver opiniones en Google <span>↗</span>
              </a>
              <a class="button opiniones-escribir" [href]="perfilGoogle" target="_blank" rel="noopener">
                Escribir mi opinión
              </a>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './opiniones.css',
})
export class Opiniones {
  readonly perfilGoogle = PERFIL_GOOGLE;
}
