import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  effect,
  inject,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { ConsentimientoService } from './consentimiento.service';

/** Aceptar y rechazar tienen el mismo aspecto y el mismo número de clics, como pide la AEPD. */
@Component({
  selector: 'app-aviso-cookies',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (consentimiento.avisoVisible()) {
      <section #caja class="aviso" aria-label="Aviso de cookies" tabindex="-1">
        <p>
          <strong>¿Nos dejas medir las visitas?</strong>
          Usamos cookies de Google Analytics para saber qué páginas interesan más. Solo se activan
          si las aceptas.
          <a routerLink="/politica-cookies">Política de cookies</a>
        </p>
        <div class="aviso-botones">
          <button type="button" (click)="consentimiento.rechazar()">Rechazar</button>
          <button type="button" (click)="consentimiento.aceptar()">Aceptar</button>
        </div>
      </section>
    }
  `,
  styles: `
    .aviso {
      position: fixed;
      left: 20px;
      bottom: calc(20px + env(safe-area-inset-bottom));
      z-index: 95;
      width: min(25rem, calc(100vw - 40px));
      padding: 18px 20px;
      border: 1px solid #e4eaf1;
      border-radius: 14px;
      background: #fff;
      box-shadow: 0 24px 60px -30px rgba(7, 26, 53, 0.5);
      color: #46566c;
      font-size: 14px;
      line-height: 1.5;
    }
    .aviso:focus {
      outline: none;
    }
    p {
      margin: 0;
    }
    strong {
      display: block;
      margin-bottom: 4px;
      color: var(--navy-dark);
      font-size: 15px;
    }
    a {
      color: var(--blue-deep);
      font-weight: 700;
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    .aviso-botones {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8px;
      margin-top: 14px;
    }
    button {
      min-height: 44px;
      padding: 0 16px;
      border: 0;
      border-radius: 8px;
      background: var(--navy);
      color: #fff;
      font-weight: 700;
      transition: background 0.3s;
    }
    button:hover {
      background: var(--navy-dark);
    }
    /* En ordenador, franja baja: no tapa el botón flotante de WhatsApp de la derecha. */
    @media (min-width: 1081px) {
      .aviso {
        display: flex;
        align-items: center;
        gap: 24px;
        width: min(60rem, calc(100vw - 140px));
        padding: 12px 16px 12px 20px;
      }
      p {
        flex: 1;
      }
      strong {
        margin-bottom: 0;
      }
      .aviso-botones {
        flex: none;
        width: 15rem;
        margin-top: 0;
      }
    }
    @media (max-width: 768px) {
      .aviso {
        left: 10px;
        /* Queda justo encima de la barra de acción móvil. */
        bottom: calc(82px + env(safe-area-inset-bottom));
        width: calc(100vw - 20px);
        padding: 16px;
      }
    }
  `,
})
export class AvisoCookies {
  readonly consentimiento = inject(ConsentimientoService);
  private readonly caja = viewChild<ElementRef<HTMLElement>>('caja');

  constructor() {
    effect(() => {
      if (this.consentimiento.reabierto()) {
        this.caja()?.nativeElement.focus({ preventScroll: true });
      }
    });
  }
}
