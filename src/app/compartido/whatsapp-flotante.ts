import { ChangeDetectionStrategy, Component } from '@angular/core';

import { WhatsappLink } from './enlaces-contacto';

@Component({
  selector: 'app-whatsapp-flotante',
  standalone: true,
  imports: [WhatsappLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="whatsapp-float" appWhatsapp="flotante" aria-label="Escríbenos por WhatsApp">
      <span class="whatsapp-label">¿Hablamos por WhatsApp?</span>
      <svg viewBox="0 0 32 32" width="30" height="30" fill="#fff" aria-hidden="true">
        <path
          d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.8 2 6.8L3.5 28.5l6.1-1.6c1.9 1 4 1.6 6.4 1.6 7.2 0 13-5.7 13-12.8S23.2 3 16 3zm0 23.2c-2.1 0-4.1-.6-5.8-1.7l-.4-.2-3.6.9 1-3.5-.3-.4c-1.2-1.8-1.8-3.8-1.8-5.9C5.1 9.9 10 5.2 16 5.2s10.9 4.7 10.9 10.6S22 26.2 16 26.2z"
        />
        <path
          d="M21.8 18.6c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1c-1.9-.9-3.1-1.7-4.4-3.8-.3-.6.3-.5 1-1.7.1-.2.1-.4 0-.5l-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.8s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.8 5.1 2.1.9 2.9 1 3.9.8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z"
        />
      </svg>
    </a>
  `,
  styleUrl: './whatsapp-flotante.css',
})
export class WhatsappFlotante {}
