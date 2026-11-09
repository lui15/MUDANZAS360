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
import { Servicio } from '../datos/catalogo-servicios';
import { REVISION } from '../datos/contacto';
import { IMAGENES } from '../datos/imagenes';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { SeoService } from '../seo.service';
import { jsonLdPagina } from './json-ld';
import { buscarPagina, enlacesAutomaticos, migasDe } from './landing-data';
import {
  EXTRAS,
  PRECIO_LOCAL,
  PRECIO_M3,
  RUTAS_PRECIO,
  TIPOS_VIVIENDA,
  precioDesde,
  textoRango,
} from '../datos/precios';

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
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPage implements OnDestroy {
  readonly pagina = buscarPagina(inject(ActivatedRoute).snapshot.data['slug']);
  readonly migas = migasDe(this.pagina);
  readonly revision = REVISION.texto;
  readonly desde = precioDesde(this.pagina.path);
  readonly desdeDe = precioDesde;
  readonly rutaPrecio = RUTAS_PRECIO.find((r) => r.path === this.pagina.path) ?? null;
  readonly esPrecios = this.pagina.path === 'precios';
  readonly tipos = TIPOS_VIVIENDA;
  readonly precioLocal = PRECIO_LOCAL;
  readonly precioM3 = PRECIO_M3;
  readonly extras = EXTRAS;
  readonly rutasPrecio = RUTAS_PRECIO;
  readonly texto = textoRango;
  readonly automaticos = enlacesAutomaticos(this.pagina);
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

    inject(SeoService).update({
      title: this.pagina.title,
      description: this.pagina.description,
      path: '/' + this.pagina.path,
      imagen: this.foto.src,
      jsonLd: jsonLdPagina({
        ...this.pagina,
        migas: this.migas,
        precioDesde: this.desde,
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

  pedirPresupuesto(servicio: Servicio | undefined = this.pagina.servicioFormulario): void {
    this.presupuesto.abrir(servicio);
  }

  ngOnDestroy(): void {
    this.contexto.restablecer();
  }
}
