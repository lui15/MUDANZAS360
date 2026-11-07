import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { TELEFONO_VISIBLE } from '../datos/contacto';
import { Servicio } from '../datos/catalogo-servicios';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { RevealDirective } from './animaciones';
import { TelefonoLink, WhatsappLink } from './enlaces-contacto';

@Component({
  selector: 'app-cta-final',
  standalone: true,
  imports: [RevealDirective, WhatsappLink, TelefonoLink],
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
        <div class="final-cta-acciones">
          <a class="button button-white" href="#presupuesto" (click)="pedir($event)"
            >Solicitar presupuesto <span>↗</span></a
          >
          @if (conContacto()) {
            <a class="button button-ghost" appWhatsapp="cta_final">WhatsApp</a>
            <a class="button button-ghost" appTelefono="cta_final">Llamar al {{ telefono }}</a>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './cta-final.css',
})
export class CtaFinal {
  readonly servicio = input<Servicio | undefined>();
  /** Añade los botones de WhatsApp y teléfono (páginas internas). */
  readonly conContacto = input(false);
  readonly telefono = TELEFONO_VISIBLE;

  private readonly presupuesto = inject(PresupuestoService);

  pedir(evento: Event): void {
    evento.preventDefault();
    this.presupuesto.abrir(this.servicio());
  }
}
