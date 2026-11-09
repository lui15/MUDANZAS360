import { conBarra } from '../datos/contacto';
import { PaginaSeo } from './pagina-seo';
import { PAGINAS_HUB } from './paginas-hub';
import { PAGINAS_RUTAS } from './paginas-rutas';
import { PAGINAS_SERVICIOS } from './paginas-servicios';
import { PAGINAS_GUIAS } from './paginas-guias';
import { PAGINAS_SERVICIOS_NUEVOS } from './paginas-servicios-nuevos';
import { PAGINAS_ZONAS } from './paginas-zonas';
import { PAGINAS_ZONAS_NUEVAS } from './paginas-zonas-nuevas';
import { RUTAS_ZONAS, SERVICIOS_PRINCIPALES } from './rutas';

export type { PaginaSeo } from './pagina-seo';

/** Reúne el contenido de todas las páginas. Lo cargan solo las páginas que lo necesitan. */
export const PAGINAS: PaginaSeo[] = [
  ...PAGINAS_HUB,
  ...PAGINAS_SERVICIOS,
  ...PAGINAS_RUTAS,
  ...PAGINAS_SERVICIOS_NUEVOS,
  ...PAGINAS_ZONAS,
  ...PAGINAS_ZONAS_NUEVAS,
  ...PAGINAS_GUIAS,
];

/**
 * Enlazado interno automático: cada servicio enlaza a cuatro zonas (repartidas para que todas
 * reciban enlaces) y cada zona a los servicios principales.
 */
export function enlacesAutomaticos(p: PaginaSeo): { titulo: string; paginas: PaginaSeo[] } | null {
  if (p.tipo === 'servicio') {
    const servicios = PAGINAS.filter((x) => x.tipo === 'servicio');
    const i = Math.max(0, servicios.indexOf(p));
    const zonas = [0, 1, 2, 3].map((k) => RUTAS_ZONAS[(i * 4 + k) % RUTAS_ZONAS.length]);
    return { titulo: 'Zonas donde trabajamos', paginas: zonas.map((z) => buscarPagina(z)) };
  }
  if (p.tipo === 'zona') {
    return {
      titulo: 'Servicios en ' + (p.servicio?.area ?? 'tu zona'),
      paginas: SERVICIOS_PRINCIPALES.map((s) => buscarPagina(s)),
    };
  }
  return null;
}

export function buscarPagina(slug: unknown): PaginaSeo {
  return PAGINAS.find((p) => p.path === slug) ?? PAGINAS[0];
}

export interface Miga {
  etiqueta: string;
  ruta: string;
}

/** Cadena desde el inicio hasta la página, para las migas de pan. */
export function migasDe(p: PaginaSeo): Miga[] {
  const cadena: Miga[] = [];
  let actual: PaginaSeo | undefined = p;
  while (actual) {
    cadena.unshift({ etiqueta: actual.etiqueta, ruta: conBarra(actual.path) });
    actual = actual.padre ? buscarPagina(actual.padre) : undefined;
  }
  return [{ etiqueta: 'Inicio', ruta: '/' }, ...cadena];
}
