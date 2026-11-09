import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { RevealDirective } from '../compartido/animaciones';
import { ContextoPagina } from '../compartido/contexto-pagina.service';
import { CtaFinal } from '../compartido/cta-final';
import { WhatsappLink } from '../compartido/enlaces-contacto';
import { FaqAcordeon } from '../compartido/faq-acordeon';
import { Icono } from '../compartido/iconos';
import { Migas } from '../compartido/migas';
import { Opiniones } from '../compartido/opiniones';
import { opinionesDe } from '../datos/opiniones';
import { Servicio } from '../datos/catalogo-servicios';
import { REVISION } from '../datos/contacto';
import { IMAGENES } from '../datos/imagenes';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { SeoService } from '../seo.service';
import { jsonLdPagina } from './json-ld';
import { buscarPagina, enlacesAutomaticos, migasDe } from './landing-data';
import { NOTAS_PRECIO_ZONA } from './notas-precio-zonas';
import {
  NOTA_PRECIOS,
  PRECIO_M3,
  PRECIO_PAGINA,
  PRECIO_ZONA,
  RUTAS_PRECIO,
  TABLA_EXTRAS,
  TARIFAS,
  TABLA_OTROS,
  TAMANOS_RUTA,
  TIPOS_VIVIENDA,
  precioDesde,
  textoPrecio,
  textoRango,
} from '../datos/precios';
import { DatosPrevios, nombreZona } from '../presupuesto/modelo';

/** Plantilla de todas las URL de contenido. Cada una se define con un objeto de datos. */
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    RevealDirective,
    Migas,
    Icono,
    WhatsappLink,
    FaqAcordeon,
    CtaFinal,
    Opiniones,
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPage implements OnDestroy {
  readonly pagina = buscarPagina(inject(ActivatedRoute).snapshot.data['slug']);
  readonly migas = migasDe(this.pagina);
  readonly revision = REVISION.texto;
  readonly desde = precioDesde(this.pagina.path) ?? (this.pagina.tipo === 'zona' ? PRECIO_ZONA.min : null);
  readonly desdeDe = precioDesde;
  readonly rutaPrecio = RUTAS_PRECIO.find((r) => r.path === this.pagina.path) ?? null;
  readonly esPrecios = this.pagina.path === 'precios';
  readonly tipos = TIPOS_VIVIENDA;
  readonly precioM3 = PRECIO_M3;
  readonly tablaExtras = TABLA_EXTRAS;
  readonly tablaOtros = TABLA_OTROS;
  readonly tamanosRuta = TAMANOS_RUTA;
  readonly rutasPrecio = RUTAS_PRECIO;
  readonly notaPrecios = NOTA_PRECIOS;
  readonly texto = textoRango;
  /** Precio orientativo de la página (servicios, rutas y zonas). */
  readonly precio = PRECIO_PAGINA[this.pagina.path] ?? (this.pagina.tipo === 'zona' ? PRECIO_ZONA : null);
  readonly textoPrecio = this.precio ? textoPrecio(this.precio) : '';
  /** Bloque «Precio orientativo» en servicios y zonas (las rutas y /precios/ tienen el suyo). */
  readonly bloquePrecio = !!this.precio && (this.pagina.tipo === 'servicio' || this.pagina.tipo === 'zona');
  readonly notaZona = NOTAS_PRECIO_ZONA[this.pagina.path] ?? null;
  /** Desglose del precio en las páginas donde ayuda a decidir. */
  readonly filasPrecio = this.desglose();
  readonly automaticos = enlacesAutomaticos(this.pagina);
  /** Los cuatro pasos de cualquier servicio: solo compromisos que son la forma de trabajar. */
  readonly comoFunciona = [
    { titulo: 'Pides presupuesto', texto: 'Con el formulario de cinco pasos o por WhatsApp. Te mostramos al momento el precio orientativo.' },
    { titulo: 'Te damos el precio cerrado', texto: 'Por escrito y por WhatsApp, con lo que incluye. Pedirlo es gratis y no te obliga a contratar.' },
    { titulo: 'Confirmas la fecha', texto: 'Si algo cambia antes de la mudanza, te avisamos y lo apruebas antes. Nada de sorpresas el día.' },
    { titulo: 'Hacemos tu mudanza', texto: 'Tu único interlocutor coordina a los transportistas y operarios de confianza que hacen el trabajo.' },
  ];
  /** Opiniones de la página (o dos generales) en servicios, rutas, zonas y precios. */
  readonly opiniones =
    this.pagina.tipo === 'servicio' || this.pagina.tipo === 'ruta' || this.pagina.tipo === 'zona' || this.pagina.path === 'precios'
      ? opinionesDe('/' + this.pagina.path + '/')
      : [];
  readonly fotos = IMAGENES;
  readonly foto = IMAGENES[this.pagina.foto];
  readonly fotoContenido = IMAGENES[this.pagina.fotoContenido];
  readonly relacionadas = this.pagina.relacionadas.map(buscarPagina);
  readonly grupos = (this.pagina.grupos ?? []).map((g) => ({
    titulo: g.titulo,
    paginas: g.rutas.map(buscarPagina),
  }));

  private readonly presupuesto = inject(PresupuestoService);
  private readonly contexto = inject(ContextoPagina);

  constructor() {
    this.contexto.mensajeWhatsapp.set(this.pagina.mensaje);
    // Cualquier botón de presupuesto de esta página (también la barra del móvil) abre el
    // formulario con el servicio, la zona o la ruta ya puestos.
    this.presupuesto.preseleccion.set({ servicio: this.pagina.servicioFormulario, datos: this.datosPrevios() });

    inject(SeoService).update({
      title: this.pagina.title,
      description: this.pagina.description,
      path: '/' + this.pagina.path,
      imagen: this.foto.src,
      jsonLd: jsonLdPagina({
        ...this.pagina,
        migas: this.migas,
        // Solo importes en euros por servicio (no porcentajes ni precios por hora o por mes).
        precio: this.precio && this.precio.unidad === '€' ? { min: this.precio.min, max: this.precio.max } : null,
        articulo: this.pagina.articulo
          ? {
              titulo: this.pagina.etiqueta,
              descripcion: this.pagina.description,
              publicado: this.pagina.articulo.publicado,
              imagen: this.foto.src,
            }
          : undefined,
      }),
    });
  }

  pedirPresupuesto(servicio?: Servicio): void {
    this.presupuesto.abrir(servicio);
  }

  private desglose(): { nombre: string; precio: string }[] {
    const t = TARIFAS;
    switch (this.pagina.path) {
      case 'mudanzas-madrid':
      case 'mudanzas-pisos-madrid':
      case 'mudanzas-baratas-madrid':
        return TIPOS_VIVIENDA.filter((v) => this.pagina.path !== 'mudanzas-pisos-madrid' || v.id !== 'chalet').map((v) => ({
          nombre: v.nombre,
          precio: textoRango(v.precio),
        }));
      case 'mudanzas-nacionales':
        return RUTAS_PRECIO.map((r) => ({ nombre: 'Madrid → ' + r.destino, precio: textoRango(r.precios['piso-1-2']) }));
      case 'mudanza-pianos-madrid':
        return [
          { nombre: 'Piano vertical', precio: textoRango(t.pianoVertical) },
          { nombre: 'Piano de cola', precio: textoRango(t.pianoCola) },
        ];
      case 'portes-madrid':
      case 'furgoneta-con-conductor-madrid':
      case 'mudanzas-pequenas-madrid':
      case 'mudanzas-estudiantes-madrid':
        return [
          { nombre: 'Porte (hasta 2 h, conductor y 1 operario)', precio: textoRango(t.portes) },
          { nombre: 'Furgoneta con conductor', precio: textoRango(t.furgonetaHora, '€/h') },
          { nombre: 'Operario extra', precio: textoRango(t.operarioHora, '€/h') },
          { nombre: 'Estudio completo dentro de Madrid', precio: textoRango(TIPOS_VIVIENDA[0].precio) },
        ];
      case 'embalaje-mudanzas-madrid':
        return [
          { nombre: 'Embalaje completo (materiales y mano de obra)', precio: textoRango(t.embalaje) },
          { nombre: 'Caja de cartón reforzada', precio: textoRango(t.caja, '€/caja') },
        ];
      case 'montaje-desmontaje-muebles-mudanza':
        return [
          { nombre: 'Desmontaje y montaje, por mueble', precio: textoRango(t.montajeMueble) },
          { nombre: 'Elevador exterior (con permiso municipal)', precio: textoRango(t.elevador) },
        ];
      case 'mudanzas-urgentes-madrid':
        return [
          { nombre: 'Recargo por urgencia (24-48 h)', precio: `+${t.urgentePct.min}-${t.urgentePct.max} %` },
          { nombre: 'Ejemplo: piso de 1-2 habitaciones', precio: textoRango({ min: Math.round((TIPOS_VIVIENDA[1].precio.min * (100 + t.urgentePct.min)) / 1000) * 10, max: Math.round((TIPOS_VIVIENDA[1].precio.max * (100 + t.urgentePct.max)) / 1000) * 10 }) },
        ];
      default:
        return [];
    }
  }

  /** Datos que esta página deja puestos en el formulario. */
  private datosPrevios(): DatosPrevios | undefined {
    const p = this.pagina;
    if (p.tipo === 'zona') return { origen: nombreZona(p.path) };
    if (this.rutaPrecio) return { origen: 'Madrid', destino: this.rutaPrecio.destino };
    switch (p.path) {
      case 'montaje-desmontaje-muebles-mudanza':
        return { extras: ['montaje'] };
      case 'embalaje-mudanzas-madrid':
        return { extras: ['embalaje'] };
      case 'mudanzas-urgentes-madrid':
        return { cuando: 'pronto' };
      case 'mudanza-pianos-madrid':
        return { notas: 'Traslado de piano.' };
      case 'vaciado-pisos-madrid':
        return { notas: 'Vaciado de piso.' };
      default:
        return undefined;
    }
  }

  ngOnDestroy(): void {
    this.contexto.restablecer();
    this.presupuesto.preseleccion.set(null);
  }
}
