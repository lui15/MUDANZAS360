import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  afterNextRender,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { REDUCIR_MOVIMIENTO } from './compartido/animaciones';
import { AvisoCookies } from './compartido/aviso-cookies';
import { ConsentimientoService } from './compartido/consentimiento.service';
import { TelefonoLink, WhatsappLink } from './compartido/enlaces-contacto';
import { Icono } from './compartido/iconos';
import { WhatsappFlotante } from './compartido/whatsapp-flotante';
import { ScrollEstado } from './layout/scroll-estado.service';
import { SiteFooter } from './layout/site-footer';
import { SiteHeader } from './layout/site-header';
import { PresupuestoWizard } from './presupuesto/presupuesto-wizard';
import { PresupuestoService } from './presupuesto/presupuesto.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SiteHeader,
    SiteFooter,
    WhatsappFlotante,
    AvisoCookies,
    PresupuestoWizard,
    Icono,
    TelefonoLink,
    WhatsappLink,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly presupuesto = inject(PresupuestoService);
  readonly scroll = inject(ScrollEstado);

  private readonly doc = inject(DOCUMENT);

  constructor() {
    const consentimiento = inject(ConsentimientoService);
    afterNextRender(() => consentimiento.iniciar());
  }

  /**
   * Con <base href="/">, un enlace "#seccion" llevaría a la portada desde otra URL.
   * Aquí se mantiene al usuario en la página actual y se desplaza hasta la sección.
   */
  @HostListener('click', ['$event'])
  alPulsarAncla(evento: MouseEvent): void {
    if (evento.defaultPrevented || evento.button !== 0) {
      return;
    }
    if (evento.ctrlKey || evento.metaKey || evento.shiftKey || evento.altKey) {
      return;
    }

    const enlace = (evento.target as Element | null)?.closest?.('a[href^="#"]');
    const id = enlace?.getAttribute('href')?.slice(1);
    if (!id) {
      return;
    }

    evento.preventDefault();
    const behavior = REDUCIR_MOVIMIENTO ? 'auto' : 'smooth';
    const destino = this.doc.getElementById(id);

    if (destino) {
      destino.scrollIntoView({ behavior });
    } else if (id === 'presupuesto') {
      this.presupuesto.abrir();
    } else {
      this.doc.defaultView?.scrollTo({ top: 0, behavior });
    }
  }

  /** "Saltar al contenido" está fuera del componente anfitrión: se trata aparte. */
  saltarAlContenido(evento: Event): void {
    evento.preventDefault();
    this.doc.getElementById('contenido')?.focus();
  }
}
