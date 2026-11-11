import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CtaFinal } from '../compartido/cta-final';
import { Migas } from '../compartido/migas';
import { Estrellas } from '../compartido/opiniones';
import { PERFIL_GOOGLE, REVISION } from '../datos/contacto';
import {
  CATEGORIAS_OPINION,
  CategoriaOpinion,
  NOTA_OPINIONES,
  OPINIONES,
  Opinion,
  nombreVisible,
  resumenOpiniones,
} from '../datos/opiniones';
import { jsonLdPagina } from '../landing/json-ld';
import { conEstrella } from '../landing/metadatos';
import { SeoService } from '../seo.service';

/**
 * /opiniones/: todas las opiniones, prerenderizadas como texto. El filtro solo oculta tarjetas
 * en el navegador; el HTML inicial las incluye todas. Sin Review ni AggregateRating en el schema.
 */
@Component({
  selector: 'app-opiniones-page',
  standalone: true,
  imports: [RouterLink, Migas, Estrellas, CtaFinal],
  templateUrl: './opiniones-page.html',
  styleUrl: './opiniones-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpinionesPage {
  readonly migas = [
    { etiqueta: 'Inicio', ruta: '/' },
    { etiqueta: 'Opiniones', ruta: '/opiniones/' },
  ];
  readonly revision = REVISION.texto;
  readonly resumen = resumenOpiniones();
  readonly nota = NOTA_OPINIONES;
  readonly perfilGoogle: string | null = PERFIL_GOOGLE;
  readonly categorias = CATEGORIAS_OPINION.filter((c) => c.id === 'todas' || OPINIONES.some((o) => o.categoria === c.id));

  readonly filtro = signal<CategoriaOpinion | 'todas'>('todas');
  readonly visibles = computed(() => {
    const f = this.filtro();
    return f === 'todas' ? OPINIONES : OPINIONES.filter((o) => o.categoria === f);
  });

  readonly nombre = (o: Opinion) => nombreVisible(o.nombre);
  readonly cuantas = (id: CategoriaOpinion | 'todas') =>
    id === 'todas' ? OPINIONES.length : OPINIONES.filter((o) => o.categoria === id).length;

  constructor() {
    inject(SeoService).update({
      title: 'Opiniones de clientes | Mudanzas360',
      description: conEstrella('Lee las opiniones de nuestros clientes en Madrid.', ['trato', 'contacto']),
      path: '/opiniones',
      jsonLd: jsonLdPagina({ path: 'opiniones', title: 'Opiniones de clientes de Mudanzas360', migas: this.migas }),
    });
  }
}
