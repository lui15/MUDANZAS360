import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../seo.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="nf">
      <p class="nf-code">404</p>
      <h1>No encontramos esta página</h1>
      <p>
        La dirección que buscas no existe o ha cambiado. Puedes volver al inicio y pedir tu
        presupuesto de mudanza.
      </p>
      <a routerLink="/">Volver al inicio</a>
    </main>
  `,
  styles: `
    :host {
      display: block;
      min-height: 100vh;
      background: #fff;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
    }
    .nf {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      padding: 24px;
      text-align: center;
      color: #10233f;
    }
    .nf-code {
      margin: 0;
      font-size: 4rem;
      font-weight: 800;
      color: #0789e8;
    }
    h1 {
      margin: 0;
      font-size: 1.6rem;
    }
    p {
      margin: 0;
      max-width: 460px;
      line-height: 1.6;
    }
    a {
      margin-top: 12px;
      padding: 12px 22px;
      border-radius: 999px;
      background: #0789e8;
      color: #fff;
      font-weight: 700;
      text-decoration: none;
    }
  `,
})
export class NotFoundPage {
  constructor() {
    inject(SeoService).update({
      title: 'Página no encontrada | Mudanzas360',
      description: 'La página que buscas no existe. Vuelve al inicio de Mudanzas360.',
      path: '/',
      noindex: true,
    });
  }
}
