import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { RevealDirective } from '../compartido/animaciones';
import { Cifras } from '../compartido/cifras';
import { CtaFinal } from '../compartido/cta-final';
import { FaqAcordeon } from '../compartido/faq-acordeon';
import { Garantias } from '../compartido/garantias';
import { Opiniones } from '../compartido/opiniones';
import { ProcesoPasos } from '../compartido/proceso-pasos';
import { TarjetaServicio } from '../compartido/tarjeta-servicio';
import { PASOS_PRESUPUESTO, SERVICIOS_WEB } from '../datos/servicios';
import { PAGINA_INICIO } from '../landing/pagina-inicio';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RevealDirective, TarjetaServicio, Garantias, Cifras, ProcesoPasos, Opiniones, FaqAcordeon, CtaFinal],
  templateUrl: './inicio-page.html',
  styleUrl: './inicio-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioPage {
  readonly pagina = PAGINA_INICIO;
  readonly servicios = SERVICIOS_WEB;
  readonly pasos = PASOS_PRESUPUESTO;

  private readonly presupuesto = inject(PresupuestoService);

  constructor() {
    inject(SeoService).update({
      title: this.pagina.title,
      description: this.pagina.description,
      path: '/',
    });
  }

  abrir(evento?: Event): void {
    evento?.preventDefault();
    this.presupuesto.abrir();
  }
}
