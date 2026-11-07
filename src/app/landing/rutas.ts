/**
 * Registro de todas las URL de contenido. Vive separado de los textos para que las rutas
 * de Angular no arrastren el contenido de cada página a la carga inicial.
 *
 * Para añadir una página:
 *   1. Añade su ruta a la lista que le corresponda.
 *   2. Añade su objeto en paginas-servicios.ts, paginas-rutas.ts, paginas-zonas.ts o paginas-hub.ts.
 *   3. Ejecuta `npm run sitemap`: regenera el sitemap y avisa si falta algo.
 */
export const RUTAS_SERVICIOS = [
  'mudanzas-madrid',
  'mudanzas-pisos-madrid',
  'mudanzas-oficinas-madrid',
  'portes-madrid',
  'guardamuebles-madrid',
  'embalaje-mudanzas-madrid',
  'montaje-desmontaje-muebles-mudanza',
  'mudanzas-nacionales',
] as const;

export const RUTAS_NACIONALES = [
  'mudanzas-madrid-barcelona',
  'mudanzas-madrid-valencia',
  'mudanzas-madrid-sevilla',
  'mudanzas-madrid-malaga',
  'mudanzas-madrid-alicante',
] as const;

export const RUTAS_ZONAS = [
  'mudanzas-alcala-de-henares',
  'mudanzas-getafe',
  'mudanzas-mostoles',
  'mudanzas-alcobendas',
  'mudanzas-las-rozas',
] as const;

export const RUTAS_HUB = [
  'servicios',
  'precios',
  'zonas',
  'como-trabajamos',
  'preguntas-frecuentes',
] as const;

export const RUTAS_LEGALES = [
  { path: 'aviso-legal', tipo: 'aviso' },
  { path: 'politica-privacidad', tipo: 'privacidad' },
  { path: 'politica-cookies', tipo: 'cookies' },
] as const;

export type RutaLanding =
  | (typeof RUTAS_SERVICIOS)[number]
  | (typeof RUTAS_NACIONALES)[number]
  | (typeof RUTAS_ZONAS)[number]
  | (typeof RUTAS_HUB)[number];

/** Textos de los menús y el pie. El generador del sitemap comprueba que coinciden con las páginas. */
export const ETIQUETAS: Record<RutaLanding, string> = {
  servicios: 'Servicios',
  precios: 'Precios',
  zonas: 'Zonas',
  'como-trabajamos': 'Cómo trabajamos',
  'preguntas-frecuentes': 'Preguntas frecuentes',
  'mudanzas-madrid': 'Mudanzas en Madrid',
  'mudanzas-pisos-madrid': 'Mudanzas de pisos en Madrid',
  'mudanzas-oficinas-madrid': 'Mudanzas de oficinas en Madrid',
  'portes-madrid': 'Portes en Madrid',
  'guardamuebles-madrid': 'Guardamuebles en Madrid',
  'embalaje-mudanzas-madrid': 'Embalaje para mudanzas',
  'montaje-desmontaje-muebles-mudanza': 'Montaje y desmontaje de muebles',
  'mudanzas-nacionales': 'Mudanzas nacionales',
  'mudanzas-madrid-barcelona': 'Mudanzas Madrid - Barcelona',
  'mudanzas-madrid-valencia': 'Mudanzas Madrid - Valencia',
  'mudanzas-madrid-sevilla': 'Mudanzas Madrid - Sevilla',
  'mudanzas-madrid-malaga': 'Mudanzas Madrid - Málaga',
  'mudanzas-madrid-alicante': 'Mudanzas Madrid - Alicante',
  'mudanzas-alcala-de-henares': 'Mudanzas en Alcalá de Henares',
  'mudanzas-getafe': 'Mudanzas en Getafe',
  'mudanzas-mostoles': 'Mudanzas en Móstoles',
  'mudanzas-alcobendas': 'Mudanzas en Alcobendas',
  'mudanzas-las-rozas': 'Mudanzas en Las Rozas',
};

export const RUTAS_LANDING: readonly RutaLanding[] = [
  ...RUTAS_HUB,
  ...RUTAS_SERVICIOS,
  ...RUTAS_NACIONALES,
  ...RUTAS_ZONAS,
];
