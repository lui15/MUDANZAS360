import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RevealDirective } from './animaciones';

@Component({
  selector: 'app-proceso-pasos',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section process-section" id="proceso">
      <div class="page-container">
        <div appReveal class="section-heading reveal">
          <div>
            <div class="eyebrow"><span class="eyebrow-dot"></span> ASÍ DE FÁCIL</div>
            <h2>De tu solicitud<br /><span>a tu nuevo destino.</span></h2>
          </div>
          <p>
            Solo tienes que contarnos qué necesitas. Revisaremos la información y nos pondremos en
            contacto contigo para concretar los detalles.
          </p>
        </div>
        <div class="process-line">
          @for (paso of pasos; track paso.numero; let i = $index) {
            <article appReveal class="reveal" [style.--d]="i * 0.12 + 's'">
              <span class="process-number">{{ paso.numero }}</span>
              <h3>{{ paso.titulo }}</h3>
              <p>{{ paso.texto }}</p>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './proceso-pasos.css',
})
export class ProcesoPasos {
  readonly pasos = [
    {
      numero: '01',
      titulo: 'Nos cuentas',
      texto: 'Rellenas el formulario con los datos básicos de tu mudanza.',
    },
    {
      numero: '02',
      titulo: 'Lo revisamos',
      texto: 'Estudiamos el recorrido, el volumen y tus necesidades.',
    },
    {
      numero: '03',
      titulo: 'Te contactamos',
      texto: 'Te respondemos para preparar una propuesta personalizada.',
    },
    {
      numero: '04',
      titulo: 'Lo organizamos',
      texto: 'Confirmamos contigo los detalles y la fecha del servicio.',
    },
  ];
}
