import { Route, Routes } from '@angular/router';

import { RUTAS_LANDING, RUTAS_LEGALES } from './landing/rutas';

const rutaCalculadora: Route = {
  path: 'calculadora-mudanza',
  pathMatch: 'full',
  loadComponent: () => import('./calculadora/calculadora-page').then((m) => m.CalculadoraPage),
};

const rutaOpiniones: Route = {
  path: 'opiniones',
  pathMatch: 'full',
  loadComponent: () => import('./opiniones/opiniones-page').then((m) => m.OpinionesPage),
};

const rutasLanding: Routes = RUTAS_LANDING.map(
  (path): Route => ({
    path,
    pathMatch: 'full',
    loadComponent: () => import('./landing/landing-page').then((m) => m.LandingPage),
    data: { slug: path },
  }),
);

const rutasLegales: Routes = RUTAS_LEGALES.map(
  ({ path, tipo }): Route => ({
    path,
    pathMatch: 'full',
    loadComponent: () => import('./legal/legal-page').then((m) => m.LegalPage),
    data: { tipo },
  }),
);

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./inicio/inicio-page').then((m) => m.InicioPage),
  },
  ...rutasLanding,
  rutaCalculadora,
  rutaOpiniones,
  ...rutasLegales,
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found-page').then((m) => m.NotFoundPage),
  },
];
