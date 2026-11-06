import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs';

import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { ScrollEstado } from './scroll-estado.service';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
})
export class SiteHeader {
  readonly scroll = inject(ScrollEstado);
  readonly menuAbierto = signal(false);

  private readonly presupuesto = inject(PresupuestoService);
  private readonly doc = inject(DOCUMENT);

  /**
   * En la portada el menú se desplaza por sus secciones; en el resto, lleva a las páginas.
   * El valor inicial sale de la URL real para que coincida con el HTML prerenderizado.
   */
  readonly enPortada = toSignal(
    inject(Router).events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects.split(/[?#]/)[0] === '/'),
    ),
    { initialValue: this.doc.location.pathname === '/' },
  );

  readonly enlaces = [
    { texto: 'Servicios', ancla: '#servicios', ruta: '/servicios', fragmento: undefined },
    { texto: 'Por qué elegirnos', ancla: '#nosotros', ruta: '/', fragmento: 'nosotros' },
    { texto: 'Cómo trabajamos', ancla: '#proceso', ruta: '/como-trabajamos', fragmento: undefined },
    {
      texto: 'Preguntas frecuentes',
      ancla: '#preguntas',
      ruta: '/preguntas-frecuentes',
      fragmento: undefined,
    },
  ];

  alternarMenu(): void {
    this.menuAbierto.update((abierto) => !abierto);
  }

  cerrarMenu(): void {
    this.menuAbierto.set(false);
  }

  pedirPresupuesto(evento: Event): void {
    evento.preventDefault();
    this.cerrarMenu();
    this.presupuesto.abrir();
  }

  /** En la portada, el logotipo vuelve arriba sin navegar. */
  alPulsarLogo(): void {
    this.cerrarMenu();
    if (this.enPortada()) {
      this.doc.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.cerrarMenu();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 1100) {
      this.cerrarMenu();
    }
  }
}
