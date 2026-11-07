import { Injectable, signal } from '@angular/core';

import { MENSAJE_WHATSAPP } from '../datos/contacto';

/** Lo que cada página aporta a los elementos comunes: de momento, su mensaje de WhatsApp. */
@Injectable({ providedIn: 'root' })
export class ContextoPagina {
  readonly mensajeWhatsapp = signal(MENSAJE_WHATSAPP);

  restablecer(): void {
    this.mensajeWhatsapp.set(MENSAJE_WHATSAPP);
  }
}
