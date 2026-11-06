import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { WhatsappLink } from '../compartido/enlaces-contacto';
import { PresupuestoService } from '../presupuesto/presupuesto.service';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink, WhatsappLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
})
export class SiteFooter {
  readonly anio = new Date().getFullYear();

  private readonly presupuesto = inject(PresupuestoService);

  pedirPresupuesto(evento: Event): void {
    evento.preventDefault();
    this.presupuesto.abrir();
  }
}
