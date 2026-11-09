/**
 * ÚNICA fuente de precios de la web. La usan /precios/, la calculadora, el formulario de
 * presupuesto (precio en vivo), los bloques «Precio orientativo» de cada página y las ofertas
 * de los datos estructurados. Si cambias una cifra aquí, cambia en toda la web.
 *
 * Precios orientativos para Madrid en 2026, IVA incluido.
 */

export interface Rango {
  min: number;
  max: number;
}

export const NOTA_PRECIOS =
  'Precios orientativos para Madrid en 2026, IVA incluido. Te damos un precio cerrado por escrito cuando conocemos tu caso.';

/* ------------------------------------------------------------------ */
/* Viviendas                                                          */
/* ------------------------------------------------------------------ */

export type TipoViviendaId = 'estudio' | 'piso-1-2' | 'piso-3' | 'piso-4' | 'chalet';

export interface TipoVivienda {
  id: TipoViviendaId;
  nombre: string;
  /** Texto corto para botones y tarjetas. */
  corto: string;
  /** Volumen orientativo en m³. */
  m3: Rango;
  /** Mudanza dentro de Madrid. */
  precio: Rango;
}

export const TIPOS_VIVIENDA: readonly TipoVivienda[] = [
  { id: 'estudio', nombre: 'Estudio', corto: 'Estudio', m3: { min: 10, max: 15 }, precio: { min: 250, max: 450 } },
  { id: 'piso-1-2', nombre: 'Piso de 1-2 habitaciones', corto: '1-2 hab.', m3: { min: 20, max: 30 }, precio: { min: 400, max: 750 } },
  { id: 'piso-3', nombre: 'Piso de 3 habitaciones', corto: '3 hab.', m3: { min: 35, max: 45 }, precio: { min: 650, max: 1100 } },
  { id: 'piso-4', nombre: 'Piso de 4 o más habitaciones', corto: '4+ hab.', m3: { min: 50, max: 65 }, precio: { min: 900, max: 1500 } },
  { id: 'chalet', nombre: 'Chalet o casa grande', corto: 'Chalet', m3: { min: 70, max: 100 }, precio: { min: 1300, max: 2500 } },
];

export const vivienda = (id: TipoViviendaId): TipoVivienda => TIPOS_VIVIENDA.find((t) => t.id === id)!;

/** Precio por m³ en una mudanza dentro de Madrid. */
export const PRECIO_M3: Rango = { min: 20, max: 30 };

/** Precio mínimo de una mudanza completa dentro de Madrid. */
export const MUDANZA_DESDE = TIPOS_VIVIENDA[0].precio.min;
export const MUDANZA_HASTA = TIPOS_VIVIENDA[TIPOS_VIVIENDA.length - 1].precio.max;

/* ------------------------------------------------------------------ */
/* Tarifas sueltas                                                    */
/* ------------------------------------------------------------------ */

export const TARIFAS = {
  /** Furgoneta con conductor y 1 operario, hasta 2 horas. */
  portes: { min: 60 },
  furgonetaHora: { min: 35, max: 50 },
  operarioHora: { min: 20, max: 25 },
  embalaje: { min: 150, max: 450 },
  caja: { min: 2, max: 4 },
  montajeMueble: { min: 40 },
  elevador: { min: 150, max: 300 },
  guardamueblesMes: { min: 40, max: 120 },
  plantaSinAscensor: { min: 20, max: 40 },
  /** Recargo en porcentaje sobre el precio de la mudanza (24-48 h). */
  urgentePct: { min: 15, max: 25 },
  pianoVertical: { min: 180, max: 350 },
  pianoCola: { min: 400, max: 900 },
  vaciado: { min: 300, max: 1200 },
  oficinaPuesto: { min: 80, max: 150 },
} as const;

/** Filas de la tabla de servicios extra y otras tarifas. */
export interface FilaTarifa {
  id: string;
  nombre: string;
  precio: string;
  detalle?: string;
}

const eur = (n: number) => n.toLocaleString('es-ES');

export const TABLA_EXTRAS: readonly FilaTarifa[] = [
  { id: 'embalaje', nombre: 'Embalaje completo', precio: `${eur(150)}-${eur(450)} €`, detalle: 'Materiales y mano de obra, según volumen' },
  { id: 'caja', nombre: 'Caja de cartón reforzada', precio: '2-4 €', detalle: 'Por caja' },
  { id: 'montaje', nombre: 'Desmontaje y montaje de muebles', precio: 'desde 40 €', detalle: 'Por mueble' },
  { id: 'elevador', nombre: 'Elevador exterior', precio: '150-300 €', detalle: 'Por servicio, sujeto a permiso municipal' },
  { id: 'guardamuebles', nombre: 'Guardamuebles', precio: '40-120 €/mes', detalle: 'Según tamaño' },
  { id: 'sin-ascensor', nombre: 'Planta sin ascensor', precio: '20-40 €', detalle: 'Recargo por planta' },
  { id: 'urgente', nombre: 'Mudanza urgente (24-48 h)', precio: '+15-25 %', detalle: 'Recargo sobre el precio' },
];

export const TABLA_OTROS: readonly FilaTarifa[] = [
  { id: 'portes', nombre: 'Portes', precio: 'desde 60 €', detalle: 'Furgoneta con conductor y 1 operario, hasta 2 h' },
  { id: 'furgoneta', nombre: 'Furgoneta con conductor', precio: '35-50 €/h' },
  { id: 'operario', nombre: 'Operario extra', precio: '20-25 €/h' },
  { id: 'piano-vertical', nombre: 'Piano vertical', precio: '180-350 €' },
  { id: 'piano-cola', nombre: 'Piano de cola', precio: '400-900 €' },
  { id: 'vaciado', nombre: 'Vaciado de piso', precio: `300-${eur(1200)} €`, detalle: 'Según volumen' },
  { id: 'oficina', nombre: 'Mudanza de oficina', precio: '80-150 €', detalle: 'Por puesto de trabajo' },
];

/* ------------------------------------------------------------------ */
/* Rutas nacionales                                                   */
/* ------------------------------------------------------------------ */

/** Tamaños de la tabla de rutas: el de referencia es el piso de 1-2 habitaciones. */
export type TamanoRuta = 'estudio' | 'piso-1-2' | 'piso-3-mas';

export const TAMANOS_RUTA: readonly { id: TamanoRuta; nombre: string }[] = [
  { id: 'estudio', nombre: 'Estudio' },
  { id: 'piso-1-2', nombre: '1-2 habitaciones' },
  { id: 'piso-3-mas', nombre: '3 o más habitaciones' },
];

export const tamanoRuta = (id: TipoViviendaId): TamanoRuta =>
  id === 'estudio' ? 'estudio' : id === 'piso-1-2' ? 'piso-1-2' : 'piso-3-mas';

const a50 = (n: number) => Math.round(n / 50) * 50;

/** Estudio: 55-65 % del precio de 1-2 habitaciones. 3 o más: 140-180 %. Redondeado a 50 €. */
function preciosRuta(base: Rango): Record<TamanoRuta, Rango> {
  return {
    estudio: { min: a50(base.min * 0.55), max: a50(base.max * 0.65) },
    'piso-1-2': base,
    'piso-3-mas': { min: a50(base.min * 1.4), max: a50(base.max * 1.8) },
  };
}

export interface RutaPrecio {
  path: string;
  destino: string;
  /** Distancia aproximada por carretera y tiempo de conducción en turismo. */
  km: number;
  conduccion: string;
  precios: Record<TamanoRuta, Rango>;
}

export const RUTAS_PRECIO: readonly RutaPrecio[] = [
  { path: 'mudanzas-madrid-barcelona', destino: 'Barcelona', km: 620, conduccion: 'unas 6-7 horas', precios: preciosRuta({ min: 900, max: 1600 }) },
  { path: 'mudanzas-madrid-valencia', destino: 'Valencia', km: 355, conduccion: 'unas 3,5-4 horas', precios: preciosRuta({ min: 800, max: 1400 }) },
  { path: 'mudanzas-madrid-sevilla', destino: 'Sevilla', km: 530, conduccion: 'unas 5-5,5 horas', precios: preciosRuta({ min: 1000, max: 1800 }) },
  { path: 'mudanzas-madrid-malaga', destino: 'Málaga', km: 530, conduccion: 'unas 5-5,5 horas', precios: preciosRuta({ min: 1100, max: 1900 }) },
  { path: 'mudanzas-madrid-alicante', destino: 'Alicante', km: 420, conduccion: 'unas 4 horas', precios: preciosRuta({ min: 900, max: 1500 }) },
];

const todasRutas = (t: TamanoRuta) => RUTAS_PRECIO.map((r) => r.precios[t]);

/** Rango de las rutas nacionales para un tamaño (el más barato y el más caro de la tabla). */
export function rangoNacional(t: TamanoRuta): Rango {
  const r = todasRutas(t);
  return { min: Math.min(...r.map((x) => x.min)), max: Math.max(...r.map((x) => x.max)) };
}

/** Ruta de la tabla cuyo destino aparece en un texto («Valencia centro» → Valencia). */
export function rutaPorDestino(texto: string): RutaPrecio | null {
  const n = normalizar(texto);
  return RUTAS_PRECIO.find((r) => n.includes(normalizar(r.destino))) ?? null;
}

export function normalizar(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .trim();
}

/* ------------------------------------------------------------------ */
/* Precio de cada página                                              */
/* ------------------------------------------------------------------ */

export interface PrecioPagina {
  /** Rango o precio de partida (max ausente). */
  min: number;
  max?: number;
  /** Unidad tras la cifra: «€», «€/mes», «€/h»… */
  unidad: string;
  /** Qué incluye o a qué se refiere la cifra. */
  nota: string;
}

const nacional12 = rangoNacional('piso-1-2');

export const PRECIO_PAGINA: Record<string, PrecioPagina> = {
  'mudanzas-madrid': { min: MUDANZA_DESDE, max: MUDANZA_HASTA, unidad: '€', nota: 'Dentro de Madrid, de un estudio a un chalet' },
  'mudanzas-pisos-madrid': { min: 250, max: 1500, unidad: '€', nota: 'De un estudio a un piso de 4 o más habitaciones' },
  'mudanzas-oficinas-madrid': { min: 80, max: 150, unidad: '€ por puesto', nota: 'Por puesto de trabajo' },
  'portes-madrid': { min: 60, unidad: '€', nota: 'Furgoneta con conductor y 1 operario, hasta 2 horas' },
  'guardamuebles-madrid': { min: 40, max: 120, unidad: '€/mes', nota: 'Según el tamaño del espacio' },
  'embalaje-mudanzas-madrid': { min: 150, max: 450, unidad: '€', nota: 'Embalaje completo con materiales, según volumen' },
  'montaje-desmontaje-muebles-mudanza': { min: 40, unidad: '€ por mueble', nota: 'Desmontaje y montaje, por mueble' },
  'mudanzas-nacionales': { min: nacional12.min, max: nacional12.max, unidad: '€', nota: 'Piso de 1-2 habitaciones desde Madrid' },
  'mudanzas-baratas-madrid': { min: 250, max: 450, unidad: '€', nota: 'Mudanza de un estudio dentro de Madrid' },
  'mudanzas-pequenas-madrid': { min: 60, max: 450, unidad: '€', nota: 'De un porte de pocos muebles a un estudio completo' },
  'mudanzas-urgentes-madrid': { min: 15, max: 25, unidad: '% de recargo', nota: 'Sobre el precio normal, para mudanzas en 24-48 horas' },
  'mudanzas-estudiantes-madrid': { min: 60, max: 450, unidad: '€', nota: 'De un porte de una habitación a un estudio completo' },
  'furgoneta-con-conductor-madrid': { min: 35, max: 50, unidad: '€/h', nota: 'Furgoneta con conductor, por hora' },
  'mudanza-pianos-madrid': { min: 180, max: 900, unidad: '€', nota: 'Piano vertical 180-350 €; de cola 400-900 €' },
  'vaciado-pisos-madrid': { min: 300, max: 1200, unidad: '€', nota: 'Según el volumen del piso' },
};

for (const r of RUTAS_PRECIO) {
  PRECIO_PAGINA[r.path] = { min: r.precios['piso-1-2'].min, max: r.precios['piso-1-2'].max, unidad: '€', nota: 'Piso de 1-2 habitaciones' };
}

/** Las páginas de zona: mudanza dentro de Madrid desde el precio de un estudio. */
export const PRECIO_ZONA: PrecioPagina = { min: MUDANZA_DESDE, unidad: '€', nota: 'Mudanza de un estudio dentro de Madrid' };

/** Si la cifra de una página es un importe en euros (y no un porcentaje). */
export const esImporte = (p: PrecioPagina) => p.unidad.startsWith('€');

/** «Desde X €» de una página, o null si su precio no es un importe. */
export function precioDesde(path: string): number | null {
  const p = PRECIO_PAGINA[path];
  return p && esImporte(p) ? p.min : null;
}

/** Texto de un rango: «400-750 €». Sin máximo: «desde 60 €». */
export function textoRango(r: { min: number; max?: number }, unidad = '€'): string {
  return r.max !== undefined ? `${eur(r.min)}-${eur(r.max)} ${unidad}` : `desde ${eur(r.min)} ${unidad}`;
}

export const textoPrecio = (p: PrecioPagina): string =>
  p.unidad.startsWith('%') ? `+${p.min}-${p.max} %` : textoRango(p, p.unidad);

export const medio = (r: Rango): number => Math.round((r.min + r.max) / 2);
