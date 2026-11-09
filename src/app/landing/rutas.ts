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
  'mudanzas-baratas-madrid',
  'mudanzas-pequenas-madrid',
  'mudanzas-urgentes-madrid',
  'mudanzas-estudiantes-madrid',
  'furgoneta-con-conductor-madrid',
  'mudanza-pianos-madrid',
  'vaciado-pisos-madrid',
] as const;

/** Servicios principales: los que se enlazan desde las páginas de zona. */
export const SERVICIOS_PRINCIPALES = [
  'mudanzas-pisos-madrid',
  'portes-madrid',
  'guardamuebles-madrid',
  'montaje-desmontaje-muebles-mudanza',
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
  'mudanzas-leganes',
  'mudanzas-fuenlabrada',
  'mudanzas-alcorcon',
  'mudanzas-torrejon-de-ardoz',
  'mudanzas-parla',
  'mudanzas-pozuelo-de-alarcon',
  'mudanzas-majadahonda',
  'mudanzas-rivas-vaciamadrid',
  'mudanzas-san-sebastian-de-los-reyes',
  'mudanzas-boadilla-del-monte',
  'mudanzas-chamberi',
  'mudanzas-salamanca',
  'mudanzas-retiro',
  'mudanzas-carabanchel',
  'mudanzas-vallecas',
  'mudanzas-tetuan',
] as const;

export const RUTAS_GUIAS = [
  'guias',
  'guias/cuanto-cuesta-una-mudanza-en-madrid',
  'guias/checklist-mudanza-4-semanas',
  'guias/como-calcular-m3-mudanza',
  'guias/tramites-mudanza-madrid',
] as const;

/** Herramientas con componente propio (no salen de los datos de páginas). */
export const RUTAS_HERRAMIENTAS = ['calculadora-mudanza', 'opiniones'] as const;

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
  | (typeof RUTAS_HUB)[number]
  | (typeof RUTAS_GUIAS)[number];

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
  'mudanzas-baratas-madrid': 'Mudanzas baratas en Madrid',
  'mudanzas-pequenas-madrid': 'Mudanzas pequeñas en Madrid',
  'mudanzas-urgentes-madrid': 'Mudanzas urgentes en Madrid',
  'mudanzas-estudiantes-madrid': 'Mudanzas de estudiantes en Madrid',
  'furgoneta-con-conductor-madrid': 'Furgoneta con conductor en Madrid',
  'mudanza-pianos-madrid': 'Mudanza de pianos en Madrid',
  'vaciado-pisos-madrid': 'Vaciado de pisos en Madrid',
  'mudanzas-leganes': 'Mudanzas en Leganés',
  'mudanzas-fuenlabrada': 'Mudanzas en Fuenlabrada',
  'mudanzas-alcorcon': 'Mudanzas en Alcorcón',
  'mudanzas-torrejon-de-ardoz': 'Mudanzas en Torrejón de Ardoz',
  'mudanzas-parla': 'Mudanzas en Parla',
  'mudanzas-pozuelo-de-alarcon': 'Mudanzas en Pozuelo de Alarcón',
  'mudanzas-majadahonda': 'Mudanzas en Majadahonda',
  'mudanzas-rivas-vaciamadrid': 'Mudanzas en Rivas-Vaciamadrid',
  'mudanzas-san-sebastian-de-los-reyes': 'Mudanzas en San Sebastián de los Reyes',
  'mudanzas-boadilla-del-monte': 'Mudanzas en Boadilla del Monte',
  'mudanzas-chamberi': 'Mudanzas en Chamberí',
  'mudanzas-salamanca': 'Mudanzas en el barrio de Salamanca',
  'mudanzas-retiro': 'Mudanzas en Retiro',
  'mudanzas-carabanchel': 'Mudanzas en Carabanchel',
  'mudanzas-vallecas': 'Mudanzas en Vallecas',
  'mudanzas-tetuan': 'Mudanzas en Tetuán',
  guias: 'Guías',
  'guias/cuanto-cuesta-una-mudanza-en-madrid': 'Cuánto cuesta una mudanza en Madrid en 2026',
  'guias/checklist-mudanza-4-semanas': 'Checklist de mudanza: 4 semanas antes',
  'guias/como-calcular-m3-mudanza': 'Cómo calcular los m³ de tu casa',
  'guias/tramites-mudanza-madrid': 'Trámites al mudarte en Madrid',
};

export const RUTAS_LANDING: readonly RutaLanding[] = [
  ...RUTAS_HUB,
  ...RUTAS_SERVICIOS,
  ...RUTAS_NACIONALES,
  ...RUTAS_ZONAS,
  ...RUTAS_GUIAS,
];
