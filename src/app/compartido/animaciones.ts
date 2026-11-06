import { AfterViewInit, Directive, ElementRef, OnDestroy, inject } from '@angular/core';

export const REDUCIR_MOVIMIENTO =
  typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

let observadorCompartido: IntersectionObserver | null = null;

function observador(): IntersectionObserver {
  observadorCompartido ??= new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('is-visible');
          observadorCompartido?.unobserve(entrada.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  );
  return observadorCompartido;
}

/**
 * Añade la clase "cargado" cuando el elemento se acerca a la pantalla. Sirve para no descargar
 * imágenes de fondo hasta que hacen falta, porque el navegador no puede diferirlas por sí solo.
 */
@Directive({ selector: '[appFondoDiferido]', standalone: true })
export class FondoDiferidoDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private observador?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const nodo = this.el.nativeElement;
    if (!('IntersectionObserver' in window)) {
      nodo.classList.add('cargado');
      return;
    }

    this.observador = new IntersectionObserver(
      (entradas) => {
        if (entradas.some((e) => e.isIntersecting)) {
          nodo.classList.add('cargado');
          this.observador?.disconnect();
        }
      },
      { rootMargin: '800px 0px' },
    );
    this.observador.observe(nodo);
  }

  ngOnDestroy(): void {
    this.observador?.disconnect();
  }
}

/**
 * Hace aparecer el elemento al entrar en pantalla. El elemento lleva además la clase
 * "reveal" y, si quiere retraso, la variable --d: <div appReveal class="reveal" style="--d: .1s">
 */
@Directive({ selector: '[appReveal]', standalone: true })
export class RevealDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    if (REDUCIR_MOVIMIENTO || !('IntersectionObserver' in window)) {
      this.el.nativeElement.classList.add('is-visible');
      return;
    }

    observador().observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    observadorCompartido?.unobserve(this.el.nativeElement);
  }
}
