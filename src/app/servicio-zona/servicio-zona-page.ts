import { ChangeDetectionStrategy, Component, OnDestroy, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { AsiTrabajamos } from '../compartido/asi-trabajamos';
import { ContextoPagina } from '../compartido/contexto-pagina.service';
import { CtaFinal } from '../compartido/cta-final';
import { WhatsappLink } from '../compartido/enlaces-contacto';
import { FaqAcordeon } from '../compartido/faq-acordeon';
import { Migas } from '../compartido/migas';
import { estaPublicada, rutaLocal } from '../contenido/indice';
import { descripcionLocal, tituloLocal } from '../contenido/meta-local';
import { SERVICIOS_LOCALES, servicioLocal } from '../contenido/servicios';
import { zonaLocal } from '../contenido/zonas';
import { REVISION, conBarra } from '../datos/contacto';
import { NOTA_PRECIOS } from '../datos/precios';
import { jsonLdPagina } from '../landing/json-ld';
import { ETIQUETAS } from '../landing/rutas';
import { NotFoundPage } from '../not-found/not-found-page';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { SeoService } from '../seo.service';
import { DatosServicioZona } from './servicio-zona.resolver';

/** «Chamberí (Madrid)» para los distritos, como en el resto del formulario. */
const lugarFormulario = (d: DatosServicioZona) => (d.zona.tipo === 'distrito' ? `${d.zona.nombre} (Madrid)` : d.zona.nombre);

/**
 * Página /servicio/zona/: un servicio contado para una zona concreta. Los textos salen de
 * contenido/zonas/<zona>.ts; las cifras de precio, de datos/precios.ts.
 */
@Component({
  selector: 'app-servicio-zona-page',
  standalone: true,
  imports: [RouterLink, Migas, WhatsappLink, AsiTrabajamos, FaqAcordeon, CtaFinal, NotFoundPage],
  templateUrl: './servicio-zona-page.html',
  styleUrl: './servicio-zona-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicioZonaPage implements OnDestroy {
  private readonly presupuesto = inject(PresupuestoService);
  private readonly contexto = inject(ContextoPagina);
  private readonly seo = inject(SeoService);

  readonly revision = REVISION.texto;
  readonly notaPrecios = NOTA_PRECIOS;

  readonly datos = toSignal(inject(ActivatedRoute).data.pipe(map((d) => (d['datos'] ?? null) as DatosServicioZona | null)), {
    initialValue: null,
  });

  readonly h1 = computed(() => {
    const d = this.datos();
    return d ? { servicio: d.servicio.nombre, zona: d.zona.nombre } : null;
  });

  readonly migas = computed(() => {
    const d = this.datos();
    if (!d) return [];
    const general = d.servicio.pagina;
    return [
      { etiqueta: 'Inicio', ruta: '/' },
      ...(general ? [{ etiqueta: ETIQUETAS[general], ruta: conBarra(general) }] : []),
      { etiqueta: `${d.servicio.nombre} en ${d.zona.nombre}`, ruta: rutaLocal(d.servicio.slug, d.zona.slug) },
    ];
  });

  /** El mismo servicio en las zonas vecinas que ya están publicadas. */
  readonly cercanas = computed(() => {
    const d = this.datos();
    if (!d) return [];
    return d.zona.cercanas
      .filter((z) => estaPublicada(d.servicio.slug, z))
      .map((z) => ({ ruta: rutaLocal(d.servicio.slug, z), texto: `${d.servicio.nombre} en ${zonaLocal(z)!.nombre}` }));
  });

  /** Los servicios relacionados primero y después el resto, en la misma zona. */
  readonly otros = computed(() => {
    const d = this.datos();
    if (!d) return [];
    const orden = [...d.servicio.relacionados, ...SERVICIOS_LOCALES.map((s) => s.slug)];
    return [...new Set(orden)]
      .filter((s) => s !== d.servicio.slug && estaPublicada(s, d.zona.slug))
      .map((s) => ({ ruta: rutaLocal(s, d.zona.slug), texto: `${servicioLocal(s)!.nombre} en ${d.zona.nombre}` }));
  });

  readonly paginaZona = computed(() => {
    const p = this.datos()?.zona.pagina;
    return p ? { ruta: conBarra(p), texto: ETIQUETAS[p] } : null;
  });

  readonly paginaServicio = computed(() => {
    const p = this.datos()?.servicio.pagina;
    return p ? { ruta: conBarra(p), texto: ETIQUETAS[p] } : null;
  });

  constructor() {
    // La misma instancia sirve para varias páginas: todo se recalcula al cambiar de ruta.
    effect(() => {
      const d = this.datos();
      if (!d) {
        this.seo.update({ title: 'Página no encontrada | Mudanzas360', description: 'Esta página no existe.', path: '/404', noindex: true });
        return;
      }
      const { servicio, zona, contenido } = d;
      const path = `${servicio.slug}/${zona.slug}`;
      const mensaje = `Hola, quiero pedir presupuesto: ${servicio.nombre.toLowerCase()} en ${zona.nombre}`;
      this.contexto.mensajeWhatsapp.set(mensaje);
      this.presupuesto.preseleccion.set({ servicio: servicio.formulario, datos: { ...servicio.datos, origen: lugarFormulario(d) } });
      this.seo.update({
        title: tituloLocal(servicio.nombre, zona.nombre),
        description: descripcionLocal(servicio.nombre, zona.nombre, contenido.gancho),
        path: '/' + path,
        jsonLd: jsonLdPagina({
          path,
          title: `${servicio.nombre} en ${zona.nombre}`,
          migas: this.migas(),
          faqs: contenido.faqs,
          servicio: {
            nombre: `${servicio.nombre} en ${zona.nombre}`,
            descripcion: contenido.gancho,
            area: zona.tipo === 'distrito' ? `${zona.nombre}, Madrid` : zona.nombre,
            tipoArea: zona.tipo === 'distrito' ? 'AdministrativeArea' : 'City',
          },
        }),
      });
    });
  }

  pedirPresupuesto(): void {
    this.presupuesto.abrir(this.datos()?.servicio.formulario);
  }

  ngOnDestroy(): void {
    this.contexto.restablecer();
    this.presupuesto.preseleccion.set(null);
  }
}
