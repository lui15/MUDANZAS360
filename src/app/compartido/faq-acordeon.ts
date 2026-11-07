import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { Servicio } from '../datos/catalogo-servicios';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { RevealDirective } from './animaciones';

export interface Faq {
  pregunta: string;
  respuesta: string;
}

/** Sección de preguntas frecuentes. Su texto es el mismo que se publica en el FAQPage. */
@Component({
  selector: 'app-faq-acordeon',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section faq-section" id="preguntas">
      <div class="page-container faq-layout">
        <div appReveal class="reveal">
          <div class="eyebrow"><span class="eyebrow-dot"></span> {{ eyebrow() }}</div>
          <h2>{{ linea() }}<br /><span>{{ resaltado() }}</span></h2>
          <p>{{ texto() }}</p>
          <a class="text-link" href="#presupuesto" (click)="pedir($event)"
            >Consultar mi mudanza <span>↗</span></a
          >
        </div>
        <div appReveal class="faq-list reveal" style="--d: 0.12s">
          @for (faq of faqs(); track faq.pregunta) {
            <details>
              <summary>{{ faq.pregunta }}<span>＋</span></summary>
              <p>{{ faq.respuesta }}</p>
            </details>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './faq-acordeon.css',
})
export class FaqAcordeon {
  readonly eyebrow = input('¿TIENES DUDAS?');
  readonly linea = input.required<string>();
  readonly resaltado = input.required<string>();
  readonly texto = input.required<string>();
  readonly faqs = input.required<readonly Faq[]>();
  readonly servicio = input<Servicio | undefined>();

  private readonly presupuesto = inject(PresupuestoService);

  pedir(evento: Event): void {
    evento.preventDefault();
    this.presupuesto.abrir(this.servicio());
  }
}
