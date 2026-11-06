import { PaginaSeo } from './pagina-seo';
import { PAGINAS_HUB } from './paginas-hub';
import { PAGINAS_RUTAS } from './paginas-rutas';
import { PAGINAS_SERVICIOS } from './paginas-servicios';
import { PAGINAS_ZONAS } from './paginas-zonas';

export type { PaginaSeo } from './pagina-seo';

/** Reúne el contenido de todas las páginas. Lo cargan solo las páginas que lo necesitan. */
export const PAGINAS: PaginaSeo[] = [
  ...PAGINAS_HUB,
  ...PAGINAS_SERVICIOS,
  ...PAGINAS_RUTAS,
  ...PAGINAS_ZONAS,
];

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
    cadena.unshift({ etiqueta: actual.etiqueta, ruta: '/' + actual.path });
    actual = actual.padre ? buscarPagina(actual.padre) : undefined;
  }
  return [{ etiqueta: 'Inicio', ruta: '/' }, ...cadena];
}
