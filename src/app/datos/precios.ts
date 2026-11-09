/**
 * ÚNICA fuente de precios de la web: la usan /precios/, la calculadora, la etiqueta «Desde X €»
 * de las páginas y las ofertas de los datos estructurados.
 *
 * Ningún precio está inventado: todos están como PENDIENTE hasta que los rellenes.
 * Para rellenar un rango, sustituye la llamada PENDIENTE_RANGO por { min: 250, max: 450 }.
 */
import { PENDIENTE, PENDIENTE_RANGO, Rango } from './pendiente';

export type { Rango } from './pendiente';

export type TipoViviendaId = 'estudio' | 'piso-1-2' | 'piso-3' | 'piso-4' | 'chalet';

export interface TipoVivienda {
  id: TipoViviendaId;
  nombre: string;
  /** Volumen orientativo en m³. Es una referencia general del sector, no una medición. */
  m3: Rango;
  /** Valores con los que se rellena el formulario de presupuesto. */
  formulario: { tipoVivienda: string; habitaciones: string };
}

export const TIPOS_VIVIENDA: readonly TipoVivienda[] = [
  {
    id: 'estudio',
    nombre: 'Estudio',
    m3: PENDIENTE('Revisar m³ orientativos de un estudio', { min: 10, max: 15 }) as Rango,
    formulario: { tipoVivienda: 'Estudio', habitaciones: 'Estudio o 1 habitación' },
  },
  {
    id: 'piso-1-2',
    nombre: 'Piso de 1-2 habitaciones',
    m3: PENDIENTE('Revisar m³ orientativos de un piso de 1-2 habitaciones', { min: 20, max: 30 }) as Rango,
    formulario: { tipoVivienda: 'Piso', habitaciones: '2 habitaciones' },
  },
  {
    id: 'piso-3',
    nombre: 'Piso de 3 habitaciones',
    m3: PENDIENTE('Revisar m³ orientativos de un piso de 3 habitaciones', { min: 35, max: 45 }) as Rango,
    formulario: { tipoVivienda: 'Piso', habitaciones: '3 habitaciones' },
  },
  {
    id: 'piso-4',
    nombre: 'Piso de 4 o más habitaciones',
    m3: PENDIENTE('Revisar m³ orientativos de un piso de 4 o más habitaciones', { min: 50, max: 65 }) as Rango,
    formulario: { tipoVivienda: 'Piso', habitaciones: '4 o más habitaciones' },
  },
  {
    id: 'chalet',
    nombre: 'Chalet o casa',
    m3: PENDIENTE('Revisar m³ orientativos de un chalet', { min: 60, max: 90 }) as Rango,
    formulario: { tipoVivienda: 'Casa / chalet', habitaciones: '4 o más habitaciones' },
  },
];

/** Mudanza dentro de la Comunidad de Madrid, por tipo de vivienda. */
export const PRECIO_LOCAL: Record<TipoViviendaId, Rango> = {
  estudio: PENDIENTE_RANGO('Precio de una mudanza de estudio dentro de Madrid'),
  'piso-1-2': PENDIENTE_RANGO('Precio de una mudanza de piso de 1-2 habitaciones dentro de Madrid'),
  'piso-3': PENDIENTE_RANGO('Precio de una mudanza de piso de 3 habitaciones dentro de Madrid'),
  'piso-4': PENDIENTE_RANGO('Precio de una mudanza de piso de 4+ habitaciones dentro de Madrid'),
  chalet: PENDIENTE_RANGO('Precio de una mudanza de chalet dentro de Madrid'),
};

/** Precio por metro cúbico transportado. */
export const PRECIO_M3: Rango = PENDIENTE_RANGO('Precio por m³ en mudanzas locales');

export type ExtraId = 'embalaje' | 'montaje' | 'elevador' | 'guardamuebles' | 'sin-ascensor';

export interface Extra {
  id: ExtraId;
  nombre: string;
  unidad: string;
  precio: Rango;
}

export const EXTRAS: readonly Extra[] = [
  { id: 'embalaje', nombre: 'Embalaje completo', unidad: 'por mudanza', precio: PENDIENTE_RANGO('Precio del embalaje completo') },
  { id: 'montaje', nombre: 'Desmontaje y montaje de muebles', unidad: 'por mudanza', precio: PENDIENTE_RANGO('Precio de desmontaje y montaje de muebles') },
  { id: 'elevador', nombre: 'Elevador exterior', unidad: 'por servicio', precio: PENDIENTE_RANGO('Precio del elevador exterior (y confirmar si se ofrece)') },
  { id: 'guardamuebles', nombre: 'Guardamuebles', unidad: 'al mes', precio: PENDIENTE_RANGO('Precio mensual del guardamuebles') },
  { id: 'sin-ascensor', nombre: 'Sin ascensor', unidad: 'por planta', precio: PENDIENTE_RANGO('Recargo por planta sin ascensor') },
];

export interface RutaPrecio {
  /** Página de la ruta. */
  path: string;
  destino: string;
  /** Distancia aproximada por carretera y tiempo de conducción en turismo. */
  km: number;
  conduccion: string;
  /** Plazo habitual de entrega de la empresa. */
  plazo: string | null;
  /** Si la empresa ofrece carga compartida (grupaje) en esta ruta. */
  grupaje: string | null;
  precios: Record<TipoViviendaId, Rango>;
}

function preciosRuta(destino: string): Record<TipoViviendaId, Rango> {
  return {
    estudio: PENDIENTE_RANGO(`Precio de una mudanza de estudio de Madrid a ${destino}`),
    'piso-1-2': PENDIENTE_RANGO(`Precio de una mudanza de piso de 1-2 habitaciones de Madrid a ${destino}`),
    'piso-3': PENDIENTE_RANGO(`Precio de una mudanza de piso de 3 habitaciones de Madrid a ${destino}`),
    'piso-4': PENDIENTE_RANGO(`Precio de una mudanza de piso de 4+ habitaciones de Madrid a ${destino}`),
    chalet: PENDIENTE_RANGO(`Precio de una mudanza de chalet de Madrid a ${destino}`),
  };
}

export const RUTAS_PRECIO: readonly RutaPrecio[] = [
  {
    path: 'mudanzas-madrid-barcelona',
    destino: 'Barcelona',
    km: 620,
    conduccion: 'unas 6-7 horas',
    plazo: PENDIENTE<string>('Plazo habitual de entrega Madrid-Barcelona'),
    grupaje: PENDIENTE<string>('¿Ofrecéis grupaje en la ruta Madrid-Barcelona? (camión exclusivo / compartido)'),
    precios: preciosRuta('Barcelona'),
  },
  {
    path: 'mudanzas-madrid-valencia',
    destino: 'Valencia',
    km: 355,
    conduccion: 'unas 3,5-4 horas',
    plazo: PENDIENTE<string>('Plazo habitual de entrega Madrid-Valencia'),
    grupaje: PENDIENTE<string>('¿Ofrecéis grupaje en la ruta Madrid-Valencia?'),
    precios: preciosRuta('Valencia'),
  },
  {
    path: 'mudanzas-madrid-sevilla',
    destino: 'Sevilla',
    km: 530,
    conduccion: 'unas 5-5,5 horas',
    plazo: PENDIENTE<string>('Plazo habitual de entrega Madrid-Sevilla'),
    grupaje: PENDIENTE<string>('¿Ofrecéis grupaje en la ruta Madrid-Sevilla?'),
    precios: preciosRuta('Sevilla'),
  },
  {
    path: 'mudanzas-madrid-malaga',
    destino: 'Málaga',
    km: 530,
    conduccion: 'unas 5-5,5 horas',
    plazo: PENDIENTE<string>('Plazo habitual de entrega Madrid-Málaga'),
    grupaje: PENDIENTE<string>('¿Ofrecéis grupaje en la ruta Madrid-Málaga?'),
    precios: preciosRuta('Málaga'),
  },
  {
    path: 'mudanzas-madrid-alicante',
    destino: 'Alicante',
    km: 420,
    conduccion: 'unas 4 horas',
    plazo: PENDIENTE<string>('Plazo habitual de entrega Madrid-Alicante'),
    grupaje: PENDIENTE<string>('¿Ofrecéis grupaje en la ruta Madrid-Alicante?'),
    precios: preciosRuta('Alicante'),
  },
];

/** Precio de partida («Desde X €») de cada página de servicio. */
export const DESDE_SERVICIO: Record<string, number | null> = {
  'mudanzas-pisos-madrid': PENDIENTE<number>('Precio desde: mudanza de pisos en Madrid'),
  'mudanzas-oficinas-madrid': PENDIENTE<number>('Precio desde: mudanza de oficinas'),
  'portes-madrid': PENDIENTE<number>('Precio desde: portes en Madrid'),
  'guardamuebles-madrid': PENDIENTE<number>('Precio desde: guardamuebles (al mes)'),
  'embalaje-mudanzas-madrid': PENDIENTE<number>('Precio desde: embalaje'),
  'montaje-desmontaje-muebles-mudanza': PENDIENTE<number>('Precio desde: montaje y desmontaje de muebles'),
  'mudanzas-baratas-madrid': PENDIENTE<number>('Precio desde: mudanzas baratas'),
  'mudanzas-pequenas-madrid': PENDIENTE<number>('Precio desde: mudanzas pequeñas'),
  'mudanzas-urgentes-madrid': PENDIENTE<number>('Precio desde: mudanzas urgentes'),
  'mudanzas-estudiantes-madrid': PENDIENTE<number>('Precio desde: mudanzas de estudiantes'),
  'furgoneta-con-conductor-madrid': PENDIENTE<number>('Precio desde: furgoneta con conductor (por hora o servicio)'),
  'mudanza-pianos-madrid': PENDIENTE<number>('Precio desde: mudanza de pianos'),
  'vaciado-pisos-madrid': PENDIENTE<number>('Precio desde: vaciado de pisos'),
};

/** Precio de partida de una página, o null si no hay precio publicado. */
export function precioDesde(path: string): number | null {
  if (path in DESDE_SERVICIO) {
    return DESDE_SERVICIO[path];
  }
  const ruta = RUTAS_PRECIO.find((r) => r.path === path);
  if (ruta) {
    const minimos = Object.values(ruta.precios)
      .map((r) => r.min)
      .filter((n): n is number => typeof n === 'number');
    return minimos.length ? Math.min(...minimos) : null;
  }
  return null;
}

/** Texto de un rango: «250-450 €», «desde 250 €» o «A consultar». */
export function textoRango(r: Rango, unidad = '€'): string {
  const f = (n: number) => n.toLocaleString('es-ES');
  if (r.min !== null && r.max !== null) return `${f(r.min)}-${f(r.max)} ${unidad}`;
  if (r.min !== null) return `desde ${f(r.min)} ${unidad}`;
  return 'A consultar';
}
