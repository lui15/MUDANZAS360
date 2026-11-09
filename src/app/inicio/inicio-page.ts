import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { FondoDiferidoDirective, REDUCIR_MOVIMIENTO, RevealDirective } from '../compartido/animaciones';
import { Cifras } from '../compartido/cifras';
import { TelefonoLink, WhatsappLink } from '../compartido/enlaces-contacto';
import { FaqAcordeon } from '../compartido/faq-acordeon';
import { Garantias } from '../compartido/garantias';
import { Opiniones } from '../compartido/opiniones';
import { OPINIONES } from '../datos/opiniones';
import { ProcesoPasos } from '../compartido/proceso-pasos';
import { TarjetaServicio } from '../compartido/tarjeta-servicio';
import { PASOS_PRESUPUESTO, SERVICIOS_WEB } from '../datos/catalogo-servicios';
import { TELEFONO_VISIBLE } from '../datos/contacto';
import { IMAGENES } from '../datos/imagenes';
import { jsonLdPortada } from '../landing/json-ld';
import { PAGINA_INICIO } from '../landing/pagina-inicio';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { SeoService } from '../seo.service';
import { MudanzaScene } from './mudanza-scene';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MudanzaScene, NgOptimizedImage, RouterLink, RevealDirective, FondoDiferidoDirective, TarjetaServicio, Garantias, Cifras, ProcesoPasos, Opiniones, FaqAcordeon, WhatsappLink, TelefonoLink],
  templateUrl: './inicio-page.html',
  styleUrl: './inicio-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioPage {
  readonly pagina = PAGINA_INICIO;
  readonly servicios = SERVICIOS_WEB;
  readonly pasos = PASOS_PRESUPUESTO;
  /** Carrusel de la portada: las opiniones marcadas para la portada. */
  readonly opinionesPortada = OPINIONES.filter((o) => o.paginas.includes('/'));
  readonly telefono = TELEFONO_VISIBLE;
  /** Palabras que van rotando bajo el titular. */
  readonly extras = ['portes', 'embalajes', 'montajes de muebles', 'guardamuebles'];
  readonly extra = signal(0);
  readonly rutas = [
    { ruta: '/mudanzas-madrid-barcelona', titulo: 'Madrid - Barcelona', texto: 'Unos 620 km por la A-2', foto: IMAGENES['camion-autovia'] },
    { ruta: '/mudanzas-madrid-valencia', titulo: 'Madrid - Valencia', texto: 'Unos 355 km por la A-3', foto: IMAGENES['furgoneta-carretera'] },
    { ruta: '/mudanzas-madrid-sevilla', titulo: 'Madrid - Sevilla', texto: 'Unos 530 km por la A-4', foto: IMAGENES.nacionales },
    { ruta: '/mudanzas-madrid-malaga', titulo: 'Madrid - Málaga', texto: 'Unos 530 km por la A-4 y la A-45', foto: IMAGENES['furgoneta-calle'] },
    { ruta: '/mudanzas-madrid-alicante', titulo: 'Madrid - Alicante', texto: 'Unos 420 km por la A-3 y la A-31', foto: IMAGENES['furgoneta-blanca'] },
  ];
  readonly zonas = [
    { ruta: '/mudanzas-alcala-de-henares', titulo: 'Alcalá de Henares', texto: 'Del casco histórico a Espartales', foto: IMAGENES.madrid },
    { ruta: '/mudanzas-getafe', titulo: 'Getafe', texto: 'Entre la A-4 y la A-42', foto: IMAGENES['furgoneta-blanca'] },
    { ruta: '/mudanzas-mostoles', titulo: 'Móstoles', texto: 'Del centro a Parque Coimbra', foto: IMAGENES.portes },
    { ruta: '/mudanzas-alcobendas', titulo: 'Alcobendas', texto: 'Pisos, chalets y oficinas', foto: IMAGENES['oficina-diafana'] },
    { ruta: '/mudanzas-las-rozas', titulo: 'Las Rozas', texto: 'Chalets y urbanizaciones', foto: IMAGENES.viviendas },
  ];
  readonly hubs = [
    { ruta: '/servicios', titulo: 'Servicios', texto: 'Todo lo que podemos hacer por ti.' },
    { ruta: '/precios', titulo: 'Precios', texto: 'Precios de partida y qué influye en el coste.' },
    { ruta: '/zonas', titulo: 'Zonas', texto: 'Municipios de Madrid y rutas nacionales.' },
    { ruta: '/como-trabajamos', titulo: 'Cómo trabajamos', texto: 'Tu mudanza, paso a paso.' },
    {
      ruta: '/preguntas-frecuentes',
      titulo: 'Preguntas frecuentes',
      texto: 'Las dudas más habituales.',
    },
  ];

  private readonly presupuesto = inject(PresupuestoService);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      if (REDUCIR_MOVIMIENTO) {
        return;
      }
      const reloj = setInterval(() => {
        if (!document.hidden) {
          this.extra.update((i) => (i + 1) % this.extras.length);
        }
      }, 2400);
      this.destroyRef.onDestroy(() => clearInterval(reloj));
    });

    inject(SeoService).update({
      title: this.pagina.title,
      description: this.pagina.description,
      path: '/',
      jsonLd: jsonLdPortada(this.pagina.faqs),
    });
  }

  abrir(evento?: Event): void {
    evento?.preventDefault();
    this.presupuesto.abrir();
  }
}
