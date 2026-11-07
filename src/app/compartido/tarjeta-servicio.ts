import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IMAGENES } from '../datos/imagenes';
import { ServicioWeb } from '../datos/catalogo-servicios';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { RevealDirective } from './animaciones';

@Component({
  selector: 'app-tarjeta-servicio',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div appReveal class="service-item reveal" [style.--d]="(indice() % 4) * 0.08 + 's'">
      <article class="service-card">
        <div class="service-media">
          <img
            [ngSrc]="imagen().tarjeta"
            [width]="imagen().anchoTarjeta"
            [height]="imagen().altoTarjeta"
            [alt]="servicio().nombre + ' en Madrid y toda España'"
            (error)="$any($event.target).style.display = 'none'"
          />
          <span class="service-icon">{{ servicio().icono }}</span>
        </div>
        <div class="service-body">
          <span class="service-number"
            >{{ (indice() + 1).toString().padStart(2, '0') }} / SERVICIO</span
          >
          <h3>
            <a class="service-title" [routerLink]="servicio().ruta">{{ servicio().nombre }}</a>
          </h3>
          <p>{{ servicio().descripcion }}</p>
          <a href="#presupuesto" (click)="pedir($event)">
            Quiero mi presupuesto <span>↗</span>
          </a>
        </div>
      </article>
    </div>
  `,
  styleUrl: './tarjeta-servicio.css',
})
export class TarjetaServicio {
  readonly servicio = input.required<ServicioWeb>();
  readonly indice = input.required<number>();
  readonly imagen = computed(() => IMAGENES[this.servicio().imagen]);

  private readonly presupuesto = inject(PresupuestoService);

  pedir(evento: Event): void {
    evento.preventDefault();
    this.presupuesto.abrir(this.servicio().formulario);
  }
}
