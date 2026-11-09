import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ConsentimientoService } from '../compartido/consentimiento.service';
import { TelefonoLink, WhatsappLink } from '../compartido/enlaces-contacto';
import { EMPRESA, TELEFONO_VISIBLE } from '../datos/contacto';
import {
  ETIQUETAS,
  RUTAS_NACIONALES,
  RUTAS_SERVICIOS,
  RUTAS_ZONAS,
  RutaLanding,
} from '../landing/rutas';

const enlaces = (rutas: readonly RutaLanding[]) =>
  rutas.map((path) => ({ ruta: '/' + path, etiqueta: ETIQUETAS[path] }));

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink, WhatsappLink, TelefonoLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
})
export class SiteFooter {
  readonly anio = new Date().getFullYear();
  readonly telefonoVisible = TELEFONO_VISIBLE;
  readonly datosFiscales = EMPRESA;
  readonly consentimiento = inject(ConsentimientoService);

  readonly servicios = enlaces(RUTAS_SERVICIOS);
  readonly rutas = enlaces(RUTAS_NACIONALES);
  readonly zonas = enlaces(RUTAS_ZONAS);
  readonly empresa = [
    { ruta: '/como-trabajamos', etiqueta: 'Cómo trabajamos' },
    { ruta: '/precios', etiqueta: 'Precios' },
    { ruta: '/preguntas-frecuentes', etiqueta: 'Preguntas frecuentes' },
    { ruta: '/aviso-legal/', etiqueta: 'Aviso legal' },
    { ruta: '/politica-privacidad/', etiqueta: 'Política de privacidad' },
    { ruta: '/politica-cookies/', etiqueta: 'Política de cookies' },
  ];
}
