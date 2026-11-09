import { ChangeDetectionStrategy, Component } from '@angular/core';

import { GARANTIAS } from '../datos/portada';
import { RevealDirective } from './animaciones';

@Component({
  selector: 'app-garantias',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="guarantees-section" id="garantias">
      <div class="page-container">
        <div appReveal class="guarantees-head reveal">
          <div class="eyebrow"><span class="eyebrow-dot"></span> NUESTRA FORMA DE TRABAJAR</div>
          <h2>Un precio claro<br /><span>y una sola persona al otro lado.</span></h2>
        </div>

        <div class="guarantees-grid">
          @for (g of garantias; track g.titulo; let i = $index) {
            <article appReveal class="guarantee-card reveal" [style.--d]="i * 0.09 + 's'">
              <span class="guarantee-icon">{{ g.icono }}</span>
              <h3>{{ g.titulo }}</h3>
              <p>{{ g.texto }}</p>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './garantias.css',
})
export class Garantias {
  readonly garantias = GARANTIAS;
}
