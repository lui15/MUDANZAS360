import { Directive, computed, inject, input } from '@angular/core';

import { TELEFONO, enlaceWhatsApp } from '../datos/contacto';
import { AnaliticaService } from './analitica.service';
import { ContextoPagina } from './contexto-pagina.service';

/**
 * Convierte un enlace en un acceso a WhatsApp: <a appWhatsapp="footer">.
 * El valor indica dónde está el botón y se envía a Analytics como "ubicacion".
 * El mensaje es el de la página en la que está el visitante.
 */
@Directive({
  selector: 'a[appWhatsapp]',
  standalone: true,
  host: {
    '[attr.href]': 'url()',
    target: '_blank',
    rel: 'noopener',
    '(click)': 'alPulsar()',
  },
})
export class WhatsappLink {
  readonly appWhatsapp = input.required<string>();

  private readonly contexto = inject(ContextoPagina);
  private readonly analitica = inject(AnaliticaService);

  readonly url = computed(() => enlaceWhatsApp(this.contexto.mensajeWhatsapp()));

  alPulsar(): void {
    this.analitica.evento('click_whatsapp', { ubicacion: this.appWhatsapp() });
  }
}

/** Convierte un enlace en una llamada: <a appTelefono="footer">. */
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
