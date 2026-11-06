import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ConsentimientoService } from '../compartido/consentimiento.service';
import { TelefonoLink, WhatsappLink } from '../compartido/enlaces-contacto';
import { TELEFONO } from '../datos/contacto';
import { PresupuestoService } from '../presupuesto/presupuesto.service';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink, WhatsappLink, TelefonoLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
})
export class SiteFooter {
  readonly anio = new Date().getFullYear();
  readonly telefono = TELEFONO;
  readonly consentimiento = inject(ConsentimientoService);

  private readonly presupuesto = inject(PresupuestoService);

  pedirPresupuesto(evento: Event): void {
    evento.preventDefault();
    this.presupuesto.abrir();
  }
}
