/**
 * Bloques de confianza de la portada. Solo compromisos que son la forma de trabajar del negocio
 * y hechos que salen del propio catálogo de la web, así nunca quedan desfasados.
 */
import { RUTAS_SERVICIOS, RUTAS_ZONAS } from '../landing/rutas';
import { MUDANZA_DESDE } from './precios';

export interface Garantia {
  icono: string;
  titulo: string;
  texto: string;
}

export interface Hecho {
  valor: string;
  etiqueta: string;
}

export const GARANTIAS: readonly Garantia[] = [
  {
    icono: '✓',
    titulo: 'Precio cerrado por escrito',
    texto: 'Antes de la mudanza te damos el precio por escrito. Si cambia algo, te avisamos y lo apruebas antes.',
  },
  {
    icono: '◎',
    titulo: 'Un solo interlocutor',
    texto: 'Hablas siempre con la misma persona, por WhatsApp o por teléfono, de la solicitud al último mueble.',
  },
  {
    icono: '◷',
    titulo: 'Respuesta por WhatsApp',
    texto: 'Te enviamos el presupuesto por WhatsApp, donde puedes mandarnos fotos y resolver dudas al momento.',
  },
  {
    icono: '◇',
    titulo: 'Sin compromiso',
    texto: 'Pedir presupuesto es gratis y no te obliga a contratar. Decides con calma cuando tengas el precio.',
  },
];

/** Hechos del catálogo: se calculan de las listas de la web. */
export const HECHOS: readonly Hecho[] = [
  { valor: `Desde ${MUDANZA_DESDE} €`, etiqueta: 'Mudanzas en Madrid' },
  { valor: String(RUTAS_ZONAS.length), etiqueta: 'Zonas de Madrid con página propia' },
  { valor: String(RUTAS_SERVICIOS.length), etiqueta: 'Servicios de mudanza' },
  { valor: 'Por escrito', etiqueta: 'Presupuesto cerrado' },
];
