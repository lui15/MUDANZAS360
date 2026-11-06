import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { RevealDirective } from '../compartido/animaciones';
import { CtaFinal } from '../compartido/cta-final';
import { TelefonoLink, WhatsappLink } from '../compartido/enlaces-contacto';
import { FaqAcordeon } from '../compartido/faq-acordeon';
import { Migas } from '../compartido/migas';
import { ProcesoPasos } from '../compartido/proceso-pasos';
import { TELEFONO, WHATSAPP_CONFIGURADO } from '../datos/contacto';
import { IMAGENES } from '../datos/imagenes';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { SeoService } from '../seo.service';
import { jsonLdPagina } from './json-ld';
import { buscarPagina, migasDe } from './landing-data';

/** Plantilla de todas las URL de contenido. Cada una se define con un objeto de datos. */
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    RevealDirective,
    Migas,
    WhatsappLink,
    TelefonoLink,
    ProcesoPasos,
    FaqAcordeon,
    CtaFinal,
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPage implements OnDestroy {
  readonly pagina = buscarPagina(inject(ActivatedRoute).snapshot.data['slug']);
  readonly migas = migasDe(this.pagina);
  readonly imagen = IMAGENES[this.pagina.imagen];
  readonly relacionadas = this.pagina.relacionadas.map(buscarPagina);
  readonly grupos = (this.pagina.grupos ?? []).map((g) => ({
    titulo: g.titulo,
    paginas: g.rutas.map(buscarPagina),
  }));
  readonly whatsappConfigurado = WHATSAPP_CONFIGURADO;
  readonly telefono = TELEFONO;

  private readonly presupuesto = inject(PresupuestoService);

  constructor() {
    this.presupuesto.destinoPagina.set(this.pagina.destino ?? null);

    inject(SeoService).update({
      title: this.pagina.title,
      description: this.pagina.description,
      path: '/' + this.pagina.path,
      imagen: this.imagen.src,
      jsonLd: jsonLdPagina({ ...this.pagina, migas: this.migas }),
    });
  }

  pedirPresupuesto(): void {
    this.presupuesto.abrir(this.pagina.servicioFormulario);
  }

  ngOnDestroy(): void {
    this.presupuesto.destinoPagina.set(null);
  }
}
