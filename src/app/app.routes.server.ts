import { RenderMode, ServerRoute } from '@angular/ssr';

import { RUTAS_LANDING, RUTAS_LEGALES } from './landing/rutas';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  ...RUTAS_LANDING.map((path): ServerRoute => ({ path, renderMode: RenderMode.Prerender })),
  ...RUTAS_LEGALES.map(({ path }): ServerRoute => ({ path, renderMode: RenderMode.Prerender })),
  // Un comodín no se puede prerenderizar: se renderiza al vuelo con un 404 real.
  { path: '**', renderMode: RenderMode.Server, status: 404 },
];
