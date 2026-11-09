import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HECHOS } from '../datos/portada';
import { RevealDirective } from './animaciones';

/** Franja de hechos del catálogo (precio de partida, zonas, servicios y presupuesto cerrado). */
@Component({
  selector: 'app-cifras',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="stats-band" aria-label="Mudanzas360 en datos">
      <div class="page-container">
        <ul class="stats-grid">
          @for (h of hechos; track h.etiqueta; let i = $index) {
            <li appReveal class="stat-item reveal" [style.--d]="i * 0.1 + 's'">
              <strong class="stat-number">{{ h.valor }}</strong>
              <span class="stat-label">{{ h.etiqueta }}</span>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styleUrl: './cifras.css',
})
export class Cifras {
  readonly hechos = HECHOS;
}
