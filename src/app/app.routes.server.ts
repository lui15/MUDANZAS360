import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'aviso-legal', renderMode: RenderMode.Prerender },
  { path: 'politica-privacidad', renderMode: RenderMode.Prerender },
  // Un comodín no se puede prerenderizar: se renderiza al vuelo con un 404 real.
  { path: '**', renderMode: RenderMode.Server, status: 404 },
];
