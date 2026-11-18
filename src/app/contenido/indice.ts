/**
 * Qué páginas /servicio/zona/ están publicadas. Cada zona con archivo de contenido publica sus
 * 10 servicios. Para añadir un lote: crea contenido/zonas/<zona>.ts y añádela aquí.
 *
 * Los textos se cargan con import() por zona, así cada página solo descarga los de su zona.
 */
import { SERVICIOS_LOCALES } from './servicios';
import type { ContenidoZona } from './tipos';

export const CARGADORES: Record<string, () => Promise<ContenidoZona>> = {
  chamberi: () => import('./zonas/chamberi').then((m) => m.default),
};

export const ZONAS_PUBLICADAS = Object.keys(CARGADORES);

export interface ParPublicado {
  servicio: string;
  zona: string;
}

export const PAGINAS_LOCALES: readonly ParPublicado[] = ZONAS_PUBLICADAS.flatMap((zona) =>
  SERVICIOS_LOCALES.map((s) => ({ servicio: s.slug, zona })),
);

export const estaPublicada = (servicio: string, zona: string) =>
  PAGINAS_LOCALES.some((p) => p.servicio === servicio && p.zona === zona);

export const rutaLocal = (servicio: string, zona: string) => `/${servicio}/${zona}/`;
