import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FondoDiferidoDirective, RevealDirective } from '../compartido/animaciones';
import { Cifras } from '../compartido/cifras';
import { TelefonoLink, WhatsappLink } from '../compartido/enlaces-contacto';
import { FaqAcordeon } from '../compartido/faq-acordeon';
import { Garantias } from '../compartido/garantias';
import { Opiniones } from '../compartido/opiniones';
import { ProcesoPasos } from '../compartido/proceso-pasos';
import { TarjetaServicio } from '../compartido/tarjeta-servicio';
import { PASOS_PRESUPUESTO, Servicio, SERVICIOS_WEB } from '../datos/catalogo-servicios';
import { TELEFONO_VISIBLE } from '../datos/contacto';
import { IMAGENES } from '../datos/imagenes';
import { jsonLdPortada } from '../landing/json-ld';
import { PAGINA_INICIO } from '../landing/pagina-inicio';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, RevealDirective, FondoDiferidoDirective, TarjetaServicio, Garantias, Cifras, ProcesoPasos, Opiniones, FaqAcordeon, WhatsappLink, TelefonoLink],
  templateUrl: './inicio-page.html',
  styleUrl: './inicio-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioPage {
  readonly pagina = PAGINA_INICIO;
  readonly servicios = SERVICIOS_WEB;
  readonly pasos = PASOS_PRESUPUESTO;
  readonly telefono = TELEFONO_VISIBLE;
  readonly fotoHero = IMAGENES.madrid;
  /** Accesos directos del hero: abren el formulario con el servicio ya elegido. */
  readonly opcionesRapidas: readonly { nombre: Servicio; texto: string; icono: string }[] = [
    { nombre: 'Mudanza de vivienda', texto: 'Una vivienda', icono: '⌂' },
    { nombre: 'Mudanza de oficina', texto: 'Una oficina', icono: '▤' },
    { nombre: 'Porte / transporte', texto: 'Unos muebles', icono: '▰' },
    { nombre: 'Guardamuebles', texto: 'Guardar mis cosas', icono: '▦' },
  ];
  readonly rutas = [
    { ruta: '/mudanzas-madrid-barcelona', titulo: 'Madrid - Barcelona', texto: 'Unos 620 km por la A-2', imagen: IMAGENES['camion-autovia'] },
    { ruta: '/mudanzas-madrid-valencia', titulo: 'Madrid - Valencia', texto: 'Unos 355 km por la A-3', imagen: IMAGENES['furgoneta-carretera'] },
    { ruta: '/mudanzas-madrid-sevilla', titulo: 'Madrid - Sevilla', texto: 'Unos 530 km por la A-4', imagen: IMAGENES.nacionales },
    { ruta: '/mudanzas-madrid-malaga', titulo: 'Madrid - Málaga', texto: 'Unos 530 km por la A-4 y la A-45', imagen: IMAGENES['furgoneta-calle'] },
    { ruta: '/mudanzas-madrid-alicante', titulo: 'Madrid - Alicante', texto: 'Unos 420 km por la A-3 y la A-31', imagen: IMAGENES['furgoneta-blanca'] },
  ];
  readonly zonas = [
    { ruta: '/mudanzas-alcala-de-henares', titulo: 'Alcalá de Henares', texto: 'Del casco histórico a Espartales', imagen: IMAGENES.madrid },
    { ruta: '/mudanzas-getafe', titulo: 'Getafe', texto: 'Entre la A-4 y la A-42', imagen: IMAGENES['furgoneta-blanca'] },
    { ruta: '/mudanzas-mostoles', titulo: 'Móstoles', texto: 'Del centro a Parque Coimbra', imagen: IMAGENES.portes },
    { ruta: '/mudanzas-alcobendas', titulo: 'Alcobendas', texto: 'Pisos, chalets y oficinas', imagen: IMAGENES['oficina-diafana'] },
    { ruta: '/mudanzas-las-rozas', titulo: 'Las Rozas', texto: 'Chalets y urbanizaciones', imagen: IMAGENES.viviendas },
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

  constructor() {
    inject(SeoService).update({
      title: this.pagina.title,
      description: this.pagina.description,
      path: '/',
      jsonLd: jsonLdPortada(this.pagina.faqs),
    });
  }

  pedirServicio(servicio: Servicio): void {
    this.presupuesto.abrir(servicio);
  }

  abrir(evento?: Event): void {
    evento?.preventDefault();
    this.presupuesto.abrir();
  }
}
