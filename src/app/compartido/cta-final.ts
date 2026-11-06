import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { Servicio } from '../datos/servicios';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { RevealDirective } from './animaciones';

@Component({
  selector: 'app-cta-final',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="final-cta">
      <div appReveal class="page-container final-cta-inner reveal">
        <div>
          <div class="eyebrow light">
            <span class="eyebrow-dot"></span> EL PRIMER PASO ES MUY FÁCIL
          </div>
          <h2>¿Preparamos tu<br /><span>próxima mudanza?</span></h2>
        </div>
        <a class="button button-white" href="#presupuesto" (click)="pedir($event)"
          >Solicitar presupuesto <span>↗</span></a
        >
      </div>
    </section>
  `,
  styleUrl: './cta-final.css',
})
export class CtaFinal {
  readonly servicio = input<Servicio | undefined>();

  private readonly presupuesto = inject(PresupuestoService);

  pedir(evento: Event): void {
    evento.preventDefault();
    this.presupuesto.abrir(this.servicio());
  }
}
