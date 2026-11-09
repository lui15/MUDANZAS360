import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';

import { CIFRAS, Cifra } from '../datos/portada';
import { REDUCIR_MOVIMIENTO, RevealDirective } from './animaciones';

const DURACION_MS = 1800;

/** Franja de cifras con contadores que arrancan al entrar en pantalla. */
@Component({
  selector: 'app-cifras',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (cifras.length) {
    <section class="stats-band" aria-label="Cifras de Mudanzas360">
      <div class="page-container">
        <div class="stats-grid">
          @for (c of cifras; track c.etiqueta; let i = $index) {
            <div appReveal class="stat-item reveal" [style.--d]="i * 0.1 + 's'">
              <strong class="stat-number"
                >{{ formatear(c.valor * avance()) }}<em>{{ c.sufijo }}</em></strong
              >
              <span class="stat-label">{{ c.etiqueta }}</span>
            </div>
          }
        </div>
      </div>
    </section>
    }
  `,
  styleUrl: './cifras.css',
})
export class Cifras implements OnDestroy {
  readonly cifras = CIFRAS.filter((c): c is Cifra & { valor: number } => c.valor !== null);
  /** De 0 a 1: la parte del valor final que muestran los contadores. */
  readonly avance = signal(0);

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private observador?: IntersectionObserver;
  private rafId = 0;

  constructor() {
    afterNextRender(() => this.observar());
  }

  formatear(valor: number): string {
    return Math.round(valor).toLocaleString('es-ES');
  }

  private observar(): void {
    if (REDUCIR_MOVIMIENTO || !('IntersectionObserver' in window)) {
      this.avance.set(1);
      return;
    }

    const banda = this.host.nativeElement.querySelector('.stats-band');
    if (!banda) {
      return;
    }

    this.observador = new IntersectionObserver(
      (entradas) => {
        if (entradas.some((e) => e.isIntersecting)) {
          this.observador?.disconnect();
          this.animar();
        }
      },
      { threshold: 0.35 },
    );
    this.observador.observe(banda);
  }

  private animar(): void {
    const inicio = performance.now();
    const paso = (ahora: number) => {
      const progreso = Math.min((ahora - inicio) / DURACION_MS, 1);
      this.avance.set(1 - Math.pow(1 - progreso, 3));
      if (progreso < 1) {
        this.rafId = requestAnimationFrame(paso);
      }
    };
    this.rafId = requestAnimationFrame(paso);
  }

  ngOnDestroy(): void {
    this.observador?.disconnect();
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }
}
