import { RenderMode, ServerRoute } from '@angular/ssr';

import { PAGINAS_LOCALES } from './contenido/indice';
import { RUTAS_HERRAMIENTAS, RUTAS_LANDING, RUTAS_LEGALES } from './landing/rutas';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  ...RUTAS_LANDING.map((path): ServerRoute => ({ path, renderMode: RenderMode.Prerender })),
  ...RUTAS_HERRAMIENTAS.map((path): ServerRoute => ({ path, renderMode: RenderMode.Prerender })),
  ...RUTAS_LEGALES.map(({ path }): ServerRoute => ({ path, renderMode: RenderMode.Prerender })),
  {
    path: ':servicio/:zona',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => PAGINAS_LOCALES.map((p) => ({ servicio: p.servicio, zona: p.zona })),
  },
  // Página 404 estática: el .htaccess la sirve para cualquier dirección que no exista.
  { path: '404', renderMode: RenderMode.Prerender },
  // Sin servidor Node: lo que no está prerenderizado lo resuelve el navegador.
  { path: '**', renderMode: RenderMode.Client },
];
