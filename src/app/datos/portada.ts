/** Contenido de los bloques de confianza de la portada. */

export interface Garantia {
  icono: string;
  titulo: string;
  texto: string;
}

export interface Cifra {
  valor: number;
  sufijo: string;
  etiqueta: string;
}

export interface Opinion {
  nombre: string;
  zona: string;
  texto: string;
  estrellas: number;
}

/** Revisa estos textos y deja solo lo que realmente ofreces. */
export const GARANTIAS: readonly Garantia[] = [
  {
    icono: '◈',
    titulo: 'Seguro de mercancías',
    texto:
      'Tu mudanza puede ir cubierta por un seguro. Te indicamos la cobertura incluida al preparar tu presupuesto.',
  },
  {
    icono: '◷',
    titulo: 'Puntualidad',
    texto:
      'Acordamos contigo la fecha y la franja horaria del servicio, y te avisamos de cualquier cambio.',
  },
  {
    icono: '◇',
    titulo: 'Cuidado de tus muebles',
    texto:
      'Protegemos, embalamos y manipulamos cada pieza con atención, de la recogida a la entrega.',
  },
  {
    icono: '✓',
    titulo: 'Presupuesto claro',
    texto: 'Te explicamos qué incluye tu presupuesto antes de empezar, para que sepas qué esperar.',
  },
];

/** VALORES DE EJEMPLO: sustitúyelos por tus datos reales. */
export const CIFRAS: readonly Cifra[] = [
  { valor: 1500, sufijo: '+', etiqueta: 'Mudanzas realizadas' },
  { valor: 10, sufijo: '', etiqueta: 'Años de experiencia' },
  { valor: 40, sufijo: '+', etiqueta: 'Ciudades cubiertas' },
  { valor: 100, sufijo: '%', etiqueta: 'Presupuestos sin compromiso' },
];

/**
 * TEXTOS DE EJEMPLO: sustitúyelos por reseñas reales de tus clientes.
 * No se marcan con datos estructurados (Review / AggregateRating) porque no son verificables.
 */
export const OPINIONES: readonly Opinion[] = [
  {
    nombre: 'Carlos Mendoza',
    zona: 'Chamberí, Madrid',
    texto:
      'Puntuales, rápidos y con un trato exquisito. Se encargaron del desmontaje y montaje de los muebles del salón sin un solo rasguño. Repetiría sin dudarlo.',
    estrellas: 5,
  },
  {
    nombre: 'Lucía Fernández',
    zona: 'Valencia, Valencia',
    texto:
      'Excelente servicio en nuestro traslado desde Madrid a Valencia. La carga llegó en perfecto estado y en la hora acordada. Todo muy bien protegido.',
    estrellas: 5,
  },
  {
    nombre: 'Javier Gómez',
    zona: 'San Blas, Madrid',
    texto:
      'Nos ayudaron a transportar un sofá modular y un armario grande bastante difícil de subir. Super profesionales, limpios y muy eficaces.',
    estrellas: 5,
  },
  {
    nombre: 'Elena Ramos',
    zona: 'Alcobendas, Madrid',
    texto:
      'Organizaron la mudanza de nuestra oficina sin interrumpir nuestro horario laboral. Un equipo súper coordinado y atento a cada detalle.',
    estrellas: 5,
  },
];
