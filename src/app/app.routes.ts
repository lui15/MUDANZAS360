import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./inicio/inicio-page').then((m) => m.InicioPage),
  },
  {
    path: 'aviso-legal',
    loadComponent: () => import('./legal/legal-page').then((m) => m.LegalPage),
    data: { tipo: 'aviso' },
  },
  {
    path: 'politica-privacidad',
    loadComponent: () => import('./legal/legal-page').then((m) => m.LegalPage),
    data: { tipo: 'privacidad' },
  },
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found-page').then((m) => m.NotFoundPage),
  },
];
