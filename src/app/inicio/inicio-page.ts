import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

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
  imports: [RouterLink, RevealDirective, TarjetaServicio, Garantias, Cifras, ProcesoPasos, Opiniones, FaqAcordeon, CtaFinal],
  templateUrl: './inicio-page.html',
  styleUrl: './inicio-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioPage {
  readonly pagina = PAGINA_INICIO;
  readonly servicios = SERVICIOS_WEB;
  readonly pasos = PASOS_PRESUPUESTO;
  readonly hubs = [
    { ruta: '/servicios', titulo: 'Servicios', texto: 'Todo lo que podemos hacer por ti.' },
    { ruta: '/precios', titulo: 'Precios', texto: 'Rangos orientativos y qué influye en el coste.' },
    { ruta: '/zonas', titulo: 'Zonas', texto: 'Municipios de Madrid y rutas nacionales.' },
    { ruta: '/como-trabajamos', titulo: 'Cómo trabajamos', texto: 'Tu mudanza, paso a paso.' },
    {
      ruta: '/preguntas-frecuentes',
      titulo: 'Preguntas frecuentes',
      texto: 'Las dudas más habituales.',
    },
  ];

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
