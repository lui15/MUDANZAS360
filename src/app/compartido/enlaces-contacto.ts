import { Directive, inject, input } from '@angular/core';

import { MENSAJE_WHATSAPP, TELEFONO, whatsappUrl } from '../datos/contacto';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { AnaliticaService } from './analitica.service';

/**
 * Convierte un enlace en un acceso a WhatsApp: <a appWhatsapp="footer">.
 * El valor indica dónde está el botón y se envía a Analytics como "ubicacion".
 * Sin un número real, el enlace abre el formulario y no registra ningún evento.
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
  private readonly analitica = inject(AnaliticaService);

  alPulsar(evento: Event): void {
    if (this.url) {
      this.analitica.evento('click_whatsapp', { ubicacion: this.appWhatsapp() });
      return;
    }

    evento.preventDefault();
    this.presupuesto.abrir();
  }
}

/** Convierte un enlace en una llamada: <a appTelefono="footer">. Solo debe pintarse si hay teléfono. */
@Directive({
  selector: 'a[appTelefono]',
  standalone: true,
  host: {
    '[attr.href]': '"tel:" + telefono',
    '(click)': 'alPulsar()',
  },
})
export class TelefonoLink {
  readonly appTelefono = input.required<string>();

  readonly telefono = TELEFONO;

  private readonly analitica = inject(AnaliticaService);

  alPulsar(): void {
    this.analitica.evento('click_telefono', { ubicacion: this.appTelefono() });
  }
}
