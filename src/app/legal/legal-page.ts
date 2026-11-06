import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Migas } from '../compartido/migas';
import { SeoService } from '../seo.service';
import { LEGAL } from './legal-data';

type TipoLegal = 'aviso' | 'privacidad' | 'cookies';

const TITULOS: Record<TipoLegal, { titulo: string; ruta: string }> = {
  aviso: { titulo: 'Aviso legal', ruta: '/aviso-legal' },
  privacidad: { titulo: 'Política de privacidad', ruta: '/politica-privacidad' },
  cookies: { titulo: 'Política de cookies', ruta: '/politica-cookies' },
};

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [Migas],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './legal-page.html',
  styleUrl: './legal-page.css',
})
export class LegalPage {
  readonly legal = LEGAL;
  readonly tipo = inject(ActivatedRoute).snapshot.data['tipo'] as TipoLegal;
  readonly datos = TITULOS[this.tipo];
  readonly migas = [
    { etiqueta: 'Inicio', ruta: '/' },
    { etiqueta: this.datos.titulo, ruta: this.datos.ruta },
  ];

  constructor() {
    inject(SeoService).update({
      title: `${this.datos.titulo} | ${LEGAL.nombre}`,
      description: `${this.datos.titulo} de ${LEGAL.dominio}: información sobre el titular de la web, el tratamiento de tus datos y las cookies.`,
      path: this.datos.ruta,
    });
  }
}
