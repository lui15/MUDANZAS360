import { conBarra } from '../datos/contacto';
import { METADATOS } from './metadatos';
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
/** Todas las páginas, con su título y descripción finales (con precio) de metadatos.ts. */
export const PAGINAS: PaginaSeo[] = [
  ...PAGINAS_HUB,
  ...PAGINAS_SERVICIOS,
  ...PAGINAS_RUTAS,
  ...PAGINAS_SERVICIOS_NUEVOS,
  ...PAGINAS_ZONAS,
  ...PAGINAS_ZONAS_NUEVAS,
  ...PAGINAS_GUIAS,
].map((p) => ({ ...p, ...METADATOS[p.path] }));

export interface GrupoAutomatico {
  titulo: string;
  paginas: PaginaSeo[];
}

/**
 * Enlazado interno automático. Cada servicio enlaza a 3 servicios relacionados y a 3 zonas
 * (repartidas para que todas reciban enlaces); cada zona, a los servicios más pedidos. La
 * plantilla añade siempre el enlace a /precios/.
 */
export function enlacesAutomaticos(p: PaginaSeo): GrupoAutomatico[] {
  if (p.tipo === 'servicio') {
    const servicios = PAGINAS.filter((x) => x.tipo === 'servicio');
    const i = Math.max(0, servicios.indexOf(p));
    const propios = p.relacionadas.map(buscarPagina).filter((x) => x.tipo === 'servicio' && x !== p);
    const relleno = servicios.slice(i + 1).concat(servicios.slice(0, i)).filter((x) => x !== p && !propios.includes(x));
    const relacionados = [...propios, ...relleno].slice(0, 3);
    const zonas = [0, 1, 2].map((k) => RUTAS_ZONAS[(i * 3 + k) % RUTAS_ZONAS.length]);
    return [
      { titulo: 'Servicios relacionados', paginas: relacionados },
      { titulo: 'Zonas donde trabajamos', paginas: zonas.map((z) => buscarPagina(z)) },
    ];
  }
  if (p.tipo === 'zona') {
    return [{ titulo: 'Servicios más pedidos en ' + (p.servicio?.area === 'Madrid' ? p.etiqueta.replace(/^Mudanzas en (el barrio de )?/, '') : (p.servicio?.area ?? 'tu zona')), paginas: SERVICIOS_PRINCIPALES.map((s) => buscarPagina(s)) }];
  }
  return [];
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
