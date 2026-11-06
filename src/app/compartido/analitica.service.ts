import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { ConsentimientoService } from './consentimiento.service';

type ParametrosEvento = Record<string, string | number>;

/**
 * Único punto de envío a Google Analytics. Si no hay consentimiento, no hace nada.
 * Nunca debe recibir datos personales: ni nombre, ni teléfono, ni correo, ni direcciones.
 */
@Injectable({ providedIn: 'root' })
export class AnaliticaService {
  private readonly consentimiento = inject(ConsentimientoService);
  private readonly doc = inject(DOCUMENT);
  private ultimaVisita = '';

  constructor() {
    // Visita de cada navegación. El título ya está actualizado: lo pone la página al crearse.
    inject(Router)
      .events.pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.registrarVisita());

    // Visita de la página en la que está el visitante cuando da su consentimiento.
    effect(() => {
      if (this.consentimiento.analiticaActiva()) {
        this.registrarVisita();
      }
    });
  }

  evento(nombre: string, parametros: ParametrosEvento = {}): void {
    if (!this.consentimiento.analiticaActiva()) {
      return;
    }

    const ventana = this.doc.defaultView as (Window & { gtag?: (...args: unknown[]) => void }) | null;
    ventana?.gtag?.('event', nombre, parametros);
  }

  private registrarVisita(): void {
    const { pathname, search, href } = this.doc.location;
    const pagina = pathname + search;

    // Moverse a una sección de la misma página (#nosotros) no cuenta como otra visita.
    if (pagina === this.ultimaVisita || !this.consentimiento.analiticaActiva()) {
      return;
    }

    this.ultimaVisita = pagina;
    this.evento('page_view', { page_location: href, page_title: this.doc.title });
  }
}
