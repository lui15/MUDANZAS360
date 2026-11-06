import { ChangeDetectionStrategy, Component } from '@angular/core';

import { OPINIONES } from '../datos/portada';
import { RevealDirective } from './animaciones';

@Component({
  selector: 'app-opiniones',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section reviews-section" id="opiniones">
      <div class="page-container">
        <div appReveal class="center-heading reveal">
          <div class="eyebrow"><span class="eyebrow-dot"></span> LO QUE DICEN NUESTROS CLIENTES</div>
          <h2>Mudanzas que acaban<br /><span>con buenas palabras.</span></h2>
        </div>

        <div class="reviews-grid">
          @for (o of opiniones; track o.nombre; let i = $index) {
            <article appReveal class="review-card reveal" [style.--d]="i * 0.1 + 's'">
              <div class="review-stars" role="img" [attr.aria-label]="o.estrellas + ' de 5 estrellas'">
                {{ estrellas(o.estrellas) }}
              </div>
              <p>“{{ o.texto }}”</p>
              <div class="review-author">
                <span class="review-avatar">{{ o.nombre.charAt(0) }}</span>
                <div>
                  <strong>{{ o.nombre }}</strong>
                  <small>{{ o.zona }}</small>
                </div>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './opiniones.css',
})
export class Opiniones {
  readonly opiniones = OPINIONES;

  estrellas(cantidad: number): string {
    const llenas = Math.max(0, Math.min(5, cantidad));
    return '★'.repeat(llenas) + '☆'.repeat(5 - llenas);
  }
}
