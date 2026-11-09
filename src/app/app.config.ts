import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { BarraFinalLocationStrategy } from './barra-final.strategy';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    { provide: LocationStrategy, useClass: BarraFinalLocationStrategy },
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })), provideClientHydration(withEventReplay())
  ]
};
