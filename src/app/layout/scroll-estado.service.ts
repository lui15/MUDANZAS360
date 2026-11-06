import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

/** Estado de scroll de la página, compartido con la cabecera. */
@Injectable({ providedIn: 'root' })
export class ScrollEstado {
  /** La página se ha desplazado: la cabecera muestra su sombra. */
  readonly desplazado = signal(false);

  constructor() {
    if (!isPlatformBrowser(inject(PLATFORM_ID))) {
      return;
    }

    const medir = () => this.desplazado.set(window.scrollY > 12);
    window.addEventListener('scroll', medir, { passive: true });
    medir();
  }
}
