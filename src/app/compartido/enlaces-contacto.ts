import { Directive, inject, input } from '@angular/core';

import { MENSAJE_WHATSAPP, whatsappUrl } from '../datos/contacto';
import { PresupuestoService } from '../presupuesto/presupuesto.service';

/**
 * Convierte un enlace en un acceso a WhatsApp: <a appWhatsapp="footer">.
 * El valor indica dónde está el botón. Sin un número real, el enlace abre el formulario.
 */
@Directive({
  selector: 'a[appWhatsapp]',
  standalone: true,
  host: {
    '[attr.href]': 'url ?? "#presupuesto"',
    '[attr.target]': 'url ? "_blank" : null',
    '[attr.rel]': 'url ? "noopener noreferrer" : null',
    '(click)': 'alPulsar($event)',
  },
})
export class WhatsappLink {
  readonly appWhatsapp = input.required<string>();

  readonly url = whatsappUrl(MENSAJE_WHATSAPP);

  private readonly presupuesto = inject(PresupuestoService);

  alPulsar(evento: Event): void {
    if (!this.url) {
      evento.preventDefault();
      this.presupuesto.abrir();
    }
  }
}
