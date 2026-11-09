/**
 * Opiniones de clientes, publicadas completas y sin editar (texto y estrellas tal cual).
 * Solo se muestra el nombre y la inicial del apellido. No se marcan como Review en el schema.
 * `fecha` (mes y año) solo se muestra si se rellena; no se inventan fechas.
 */

export type CategoriaOpinion = 'pisos' | 'oficinas' | 'embalaje' | 'montaje' | 'portes';

export interface Opinion {
  estrellas: 1 | 2 | 3 | 4 | 5;
  /** Nombre completo, tal y como lo dio el cliente. En la web se muestra abreviado. */
  nombre: string;
  texto: string;
  /** Servicio que contrató, tal y como se muestra en la tarjeta. */
  servicio: string;
  /** Filtro de /opiniones/. Sin categoría: solo aparece en «Todas». */
  categoria?: CategoriaOpinion;
  /** Páginas donde se publica ('/' es la portada). */
  paginas: string[];
  fecha?: string;
}

export const OPINIONES: readonly Opinion[] = [
  {
    estrellas: 5,
    nombre: 'Diego Castillo',
    texto: 'Mudanza perfecta de un piso 4º sin ascensor. Trataron todos los muebles y cajas con un cuidado extremo.',
    servicio: 'Mudanza de piso',
    categoria: 'pisos',
    paginas: ['/mudanzas-pisos-madrid/'],
  },
  {
    estrellas: 5,
    nombre: 'Ana Belén Rosa',
    texto: 'Súper organizados. Embalaron todo el menaje y los objetos frágiles sin que se rompiera absolutamente nada.',
    servicio: 'Embalaje',
    categoria: 'embalaje',
    paginas: ['/embalaje-mudanzas-madrid/'],
  },
  {
    estrellas: 5,
    nombre: 'Marcos Gil',
    texto: 'La mejor experiencia de mudanza que he tenido. Rápidos, amables y muy eficaces en todo momento.',
    servicio: 'Mudanza en Madrid',
    paginas: ['/mudanzas-madrid/'],
  },
  {
    estrellas: 5,
    nombre: 'Cristina Ortiz',
    texto: 'Desmontaron los muebles en la casa antigua y los dejaron montados en la nueva el mismo día. Un alivio total.',
    servicio: 'Montaje y desmontaje',
    categoria: 'montaje',
    paginas: ['/montaje-desmontaje-muebles-mudanza/'],
  },
  {
    estrellas: 5,
    nombre: 'Pablo Montero',
    texto: 'Puntualidad británica. Llegaron a la hora acordada con el camión listo y en un par de horas ya tenían todo cargado.',
    servicio: 'Mudanza en Madrid',
    paginas: ['/mudanzas-madrid/', '/'],
  },
  {
    estrellas: 5,
    nombre: 'Sara Giménez',
    texto: 'Excelente relación calidad-precio. El equipo fue superatento y facilitó muchísimo un día que suele ser de mucho estrés.',
    servicio: 'Mudanza en Madrid',
    paginas: ['/precios/', '/mudanzas-baratas-madrid/'],
  },
  {
    estrellas: 4,
    nombre: 'Víctor M.',
    texto: 'Muy buen servicio. Protegieron muy bien la televisión y los electrodomésticos. Todo llegó en perfecto estado.',
    servicio: 'Embalaje',
    categoria: 'embalaje',
    paginas: ['/embalaje-mudanzas-madrid/'],
  },
  {
    estrellas: 5,
    nombre: 'Rocío Hidalgo',
    texto: 'Nos hicieron una mudanza de oficina de un día para otro sin interrumpir nuestro trabajo. De 10.',
    servicio: 'Mudanza de oficina',
    categoria: 'oficinas',
    paginas: ['/mudanzas-oficinas-madrid/', '/mudanzas-urgentes-madrid/'],
  },
  {
    estrellas: 5,
    nombre: 'Alejandro Cano',
    texto: 'Chicos muy educados, rápidos y fuertes. Cargaron con todo sin una sola queja. Volveré a contar con ellos.',
    servicio: 'Portes',
    categoria: 'portes',
    paginas: ['/portes-madrid/', '/'],
  },
  {
    estrellas: 5,
    nombre: 'Valeria Núñez',
    texto: 'Servicio completo 360 como bien dice su nombre. Nos quitaron un peso de encima organizando todo el traslado.',
    servicio: 'Mudanza completa',
    paginas: ['/'],
  },
];

export const CATEGORIAS_OPINION: readonly { id: CategoriaOpinion | 'todas'; nombre: string }[] = [
  { id: 'todas', nombre: 'Todas' },
  { id: 'pisos', nombre: 'Pisos' },
  { id: 'oficinas', nombre: 'Oficinas' },
  { id: 'embalaje', nombre: 'Embalaje' },
  { id: 'montaje', nombre: 'Montaje' },
  { id: 'portes', nombre: 'Portes' },
];

export const NOTA_OPINIONES =
  'Opiniones enviadas por clientes que contrataron el servicio. Las publicamos completas, sin editar.';

/** «Ana Belén Rosa» → «Ana Belén R.»; «Víctor M.» se queda igual. */
export function nombreVisible(nombre: string): string {
  const partes = nombre.trim().split(/\s+/);
  if (partes.length < 2 || partes[partes.length - 1].endsWith('.')) return nombre.trim();
  const apellido = partes.pop()!;
  return `${partes.join(' ')} ${apellido.charAt(0).toUpperCase()}.`;
}

/** Media y número de opiniones, calculados siempre a partir de la lista. */
export function resumenOpiniones(lista: readonly Opinion[] = OPINIONES): { media: string; total: number } {
  const total = lista.length;
  const media = total ? lista.reduce((s, o) => s + o.estrellas, 0) / total : 0;
  return { media: media.toLocaleString('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 1 }), total };
}

/** Opiniones de una página ('/ruta/'). Si no tiene propias, las generales de la portada. */
export function opinionesDe(ruta: string, generales = 2): Opinion[] {
  const propias = OPINIONES.filter((o) => o.paginas.includes(ruta));
  return propias.length ? propias : OPINIONES.filter((o) => o.paginas.includes('/')).slice(-generales).reverse();
}
