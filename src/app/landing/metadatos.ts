/**
 * Título y descripción de cada página.
 *
 * Títulos: 60 caracteres como máximo, únicos y sin precio (salvo /precios/, la calculadora y
 * la guía de precios). Si con la marca pasan de 60, van sin ella.
 *
 * Descripciones: «⭐ {NOTA_GOOGLE} en Google · ✓ ventaja · ✓ ventaja · ✓ ventaja. {Frase}.»,
 * de 140 a 158 caracteres. La nota sale de NOTA_GOOGLE (datos/contacto.ts). `conEstrella` elige
 * tres ventajas de la lista permitida para que la descripción quede dentro del límite.
 * El generador del sitemap lo comprueba.
 */
import { NOTA_GOOGLE } from '../datos/contacto';
import { MUDANZA_DESDE } from '../datos/precios';

/** Las únicas ventajas que pueden aparecer en las descripciones. */
export const VENTAJAS = {
  cerrado: 'Presupuesto cerrado',
  visita: 'Visita sin compromiso',
  solo: 'Te atendemos solo nosotros',
  llamadas: 'Sin llamadas de 5 empresas',
  contacto: 'Una sola persona de contacto',
  trato: 'Trato cercano y ordenado',
  whatsapp: 'Respuesta por WhatsApp',
} as const;

type Ventaja = keyof typeof VENTAJAS;

export const DESCRIPCION_MIN = 140;
export const DESCRIPCION_MAX = 158;

const ORDEN: Ventaja[] = ['cerrado', 'visita', 'solo', 'llamadas', 'contacto', 'trato', 'whatsapp'];

/** Todas las combinaciones de tres, respetando el orden de preferencia. */
function combinaciones(lista: Ventaja[]): Ventaja[][] {
  const res: Ventaja[][] = [];
  for (let i = 0; i < lista.length; i++)
    for (let j = i + 1; j < lista.length; j++)
      for (let k = j + 1; k < lista.length; k++) res.push([lista[i], lista[j], lista[k]]);
  return res;
}

const montar = (v: Ventaja[], frase: string) =>
  `⭐ ${NOTA_GOOGLE} en Google · ${v.map((x) => `✓ ${VENTAJAS[x]}`).join(' · ')}. ${frase}`;

/**
 * Descripción con estrella. `frases`: la frase propia de la página (o varias, de la preferida a
 * la más corta). `preferidas`: ventajas que conviene que salgan primero.
 */
export function conEstrella(frases: string | string[], preferidas: Ventaja[] = []): string {
  const lista = [...preferidas, ...ORDEN.filter((v) => !preferidas.includes(v))];
  for (const frase of Array.isArray(frases) ? frases : [frases]) {
    for (const v of combinaciones(lista)) {
      const d = montar(v, frase);
      if (d.length >= DESCRIPCION_MIN && d.length <= DESCRIPCION_MAX) return d;
    }
  }
  // Si nada encaja, se devuelve igualmente: el generador del sitemap avisa del problema.
  return montar(lista.slice(0, 3), Array.isArray(frases) ? frases[0] : frases);
}

/* ------------------------------------------------------------------ */

const D = MUDANZA_DESDE;
const conMarca = (titulo: string) => (`${titulo} | Mudanzas360`.length <= 60 ? `${titulo} | Mudanzas360` : titulo);

/** «Mudanzas en {Zona} con presupuesto cerrado»; si pasa de 60, la variante corta. */
const tituloZona = (lugar: string) =>
  [`Mudanzas en ${lugar} con presupuesto cerrado`, `Mudanzas en ${lugar} | Presupuesto cerrado`, `Mudanzas en ${lugar}`].find(
    (t) => t.length <= 60,
  )!;

const metaRuta = (destino: string, detalle: string) => ({
  title: `Mudanzas Madrid ${destino} con presupuesto cerrado`,
  description: conEstrella(
    [`Mudanza de Madrid a ${destino}: ${detalle}`, `De Madrid a ${destino}: ${detalle}`, `Mudanzas de Madrid a ${destino}.`],
    ['cerrado', 'contacto'],
  ),
});

const metaZona = (lugar: string, gancho: string) => ({
  title: tituloZona(lugar),
  description: conEstrella([`Mudanzas en ${lugar}: ${gancho}`, `En ${lugar}: ${gancho}`, gancho], ['cerrado', 'visita']),
});

const meta = (title: string, frases: string | string[], preferidas: Ventaja[] = []) => ({
  title: conMarca(title),
  description: conEstrella(frases, preferidas),
});

/** Portada (la usa pagina-inicio.ts). */
export const META_INICIO = {
  title: 'Mudanzas en Madrid con presupuesto cerrado | Mudanzas360',
  description: `⭐ ${NOTA_GOOGLE} en Google · ✓ Presupuesto cerrado · ✓ Visita sin compromiso · ✓ Te atendemos solo nosotros, sin llamadas de 5 empresas. Mudanzas en Madrid y España.`,
};

export const METADATOS: Record<string, { title: string; description: string }> = {
  /* ------------------------------ Índices ------------------------------ */
  servicios: meta('Servicios de mudanzas en Madrid', 'Pisos, oficinas, portes, embalaje y guardamuebles en Madrid.'),
  zonas: meta('Zonas de mudanzas en Madrid y alrededores', 'Madrid capital, sus distritos y la Comunidad de Madrid.', ['visita']),
  'como-trabajamos': {
    title: 'Cómo trabajamos: un solo contacto y trato cercano',
    description: conEstrella('Así es tu mudanza con nosotros, del primer mensaje al final.', ['solo', 'llamadas', 'contacto']),
  },
  'preguntas-frecuentes': meta('Preguntas frecuentes sobre mudanzas', 'Respuestas claras a las dudas más comunes sobre mudanzas.'),
  guias: meta('Guías para preparar tu mudanza en Madrid', 'Guías prácticas para preparar tu mudanza en Madrid.', ['trato']),
  precios: {
    title: 'Precios de mudanzas en Madrid 2026 | Mudanzas360',
    description: conEstrella(
      [`Precios de mudanza 2026 con IVA: desde ${D} € un estudio.`, `Precios 2026 con IVA, desde ${D} €.`],
      ['cerrado', 'visita'],
    ),
  },

  /* ------------------------------ Servicios ------------------------------ */
  'mudanzas-madrid': {
    title: 'Empresa de mudanzas en Madrid | Visita sin compromiso',
    description: conEstrella('Empresa de mudanzas en Madrid para pisos y oficinas.', ['cerrado', 'visita', 'solo']),
  },
  'mudanzas-pisos-madrid': {
    title: 'Mudanzas de pisos en Madrid con visita sin compromiso',
    description: conEstrella('Mudanzas de pisos en Madrid, del estudio al chalet.', ['visita', 'cerrado']),
  },
  'mudanzas-oficinas-madrid': meta('Mudanzas de oficinas en Madrid', 'Traslado de oficinas en Madrid sin parar tu actividad.', ['visita', 'contacto']),
  'portes-madrid': {
    title: 'Portes en Madrid con trato cercano | Mudanzas360',
    description: conEstrella('Portes en Madrid para un sofá, una cama o unas cajas.', ['trato', 'whatsapp']),
  },
  'guardamuebles-madrid': meta('Guardamuebles en Madrid', 'Guarda tus muebles en Madrid entre una casa y otra.', ['cerrado', 'contacto']),
  'embalaje-mudanzas-madrid': meta('Embalaje para mudanzas en Madrid', 'Embalamos lo frágil para que llegue intacto a tu casa.', ['cerrado', 'trato']),
  'montaje-desmontaje-muebles-mudanza': {
    title: 'Desmontaje y montaje de muebles en tu mudanza',
    description: conEstrella('Desmontamos y montamos tus muebles el mismo día.', ['cerrado', 'trato']),
  },
  'mudanzas-nacionales': meta('Mudanzas nacionales desde Madrid', 'Mudanzas desde Madrid a cualquier provincia de España.', ['cerrado', 'contacto']),
  'mudanzas-baratas-madrid': {
    title: 'Mudanzas baratas en Madrid con presupuesto ajustado',
    description: conEstrella('Mudanzas baratas en Madrid, ajustadas a lo que mueves.', ['cerrado', 'visita']),
  },
  'mudanzas-pequenas-madrid': meta('Mudanzas pequeñas en Madrid', 'Mudanzas pequeñas en Madrid con el vehículo justo.', ['whatsapp', 'cerrado']),
  'mudanzas-urgentes-madrid': meta('Mudanzas urgentes en Madrid', 'Mudanzas urgentes en Madrid cuando el tiempo aprieta.', ['whatsapp', 'contacto']),
  'mudanzas-estudiantes-madrid': meta('Mudanzas de estudiantes en Madrid', 'Mudanzas de estudiantes en Madrid, de piso o de residencia.', ['whatsapp', 'cerrado']),
  'furgoneta-con-conductor-madrid': meta('Furgoneta con conductor en Madrid', 'Furgoneta con conductor en Madrid para traslados y compras.', ['whatsapp', 'trato']),
  'mudanza-pianos-madrid': meta('Mudanza de pianos en Madrid', 'Traslado de pianos en Madrid con protección a medida.', ['visita', 'cerrado']),
  'vaciado-pisos-madrid': meta('Vaciado de pisos en Madrid', 'Vaciado de pisos en Madrid por herencia, venta o alquiler.', ['visita', 'contacto']),
  'mudanzas-locales-comerciales-madrid': meta('Mudanzas de locales comerciales en Madrid', 'Mudanzas de tiendas, bares y locales comerciales en Madrid.', ['visita', 'contacto']),
  'subida-muebles-elevador-madrid': meta('Subida de muebles con elevador en Madrid', 'Subimos muebles por la fachada con elevador en Madrid.', ['visita', 'cerrado']),
  'mudanzas-personas-mayores-madrid': meta('Mudanzas para personas mayores en Madrid', 'Mudanzas para personas mayores en Madrid, con calma.', ['trato', 'contacto', 'visita']),

  /* ------------------------------ Rutas ------------------------------ */
  'mudanzas-madrid-barcelona': metaRuta('Barcelona', 'unos 620 km por la A-2.'),
  'mudanzas-madrid-valencia': metaRuta('Valencia', 'unos 355 km por la A-3.'),
  'mudanzas-madrid-sevilla': metaRuta('Sevilla', 'unos 530 km por la A-4.'),
  'mudanzas-madrid-malaga': metaRuta('Málaga', 'unos 530 km por la A-4 y la A-45.'),
  'mudanzas-madrid-alicante': metaRuta('Alicante', 'unos 420 km por la A-31.'),
  'mudanzas-madrid-zaragoza': metaRuta('Zaragoza', 'unos 315 km por la A-2.'),
  'mudanzas-madrid-valladolid': metaRuta('Valladolid', 'unos 200 km por la A-6.'),
  'mudanzas-madrid-bilbao': metaRuta('Bilbao', 'unos 400 km por la A-1.'),
  'mudanzas-madrid-murcia': metaRuta('Murcia', 'unos 400 km pasando por Albacete.'),
  'mudanzas-madrid-granada': metaRuta('Granada', 'unos 420 km por la A-4 y la A-44.'),
  'mudanzas-madrid-a-coruna': metaRuta('A Coruña', 'unos 590 km por la A-6.'),

  /* ------------------------------ Zonas ------------------------------ */
  'mudanzas-alcala-de-henares': metaZona('Alcalá de Henares', 'casco histórico, Espartales y El Ensanche.'),
  'mudanzas-getafe': metaZona('Getafe', 'Centro, Sector III, El Bercial y Los Molinos.'),
  'mudanzas-mostoles': metaZona('Móstoles', 'Centro, Parque Coimbra, Estoril y Móstoles Sur.'),
  'mudanzas-alcobendas': metaZona('Alcobendas', 'Centro, Valdelasfuentes y La Moraleja.'),
  'mudanzas-las-rozas': metaZona('Las Rozas', 'chalets, adosados y pisos en El Burgo.'),
  'mudanzas-leganes': metaZona('Leganés', 'Zarzaquemada, San Nicasio y Arroyo Culebro.'),
  'mudanzas-fuenlabrada': metaZona('Fuenlabrada', 'Loranca, El Naranjo y el centro.'),
  'mudanzas-alcorcon': metaZona('Alcorcón', 'Parque Lisboa, Ensanche Sur y el centro.'),
  'mudanzas-torrejon-de-ardoz': metaZona('Torrejón de Ardoz', 'Soto del Henares, Fresnos y el centro.'),
  'mudanzas-parla': metaZona('Parla', 'centro y Parla Este, pisos y adosados.'),
  'mudanzas-pozuelo-de-alarcon': metaZona('Pozuelo de Alarcón', 'chalets y pisos amplios.'),
  'mudanzas-majadahonda': metaZona('Majadahonda', 'casco, Gran Vía y urbanizaciones.'),
  'mudanzas-rivas-vaciamadrid': metaZona('Rivas-Vaciamadrid', 'urbanizaciones y Covibar.'),
  'mudanzas-san-sebastian-de-los-reyes': metaZona('San Sebastián de los Reyes', 'Centro, Dehesa Vieja y Tempranales.'),
  'mudanzas-boadilla-del-monte': metaZona('Boadilla del Monte', 'chalets y pisos nuevos.'),
  'mudanzas-chamberi': metaZona('Chamberí', 'fincas antiguas y ascensores pequeños.'),
  'mudanzas-salamanca': metaZona('el barrio de Salamanca', 'pisos señoriales y muebles delicados.'),
  'mudanzas-retiro': metaZona('Retiro', 'Ibiza, Pacífico, Estrella y Jerónimos.'),
  'mudanzas-carabanchel': metaZona('Carabanchel', 'bloques sin ascensor y el PAU.'),
  'mudanzas-vallecas': metaZona('Vallecas', 'Puente, Villa y el Ensanche de Vallecas.'),
  'mudanzas-tetuan': metaZona('Tetuán', 'Bravo Murillo, Cuatro Caminos y Castillejos.'),
  'mudanzas-moncloa': metaZona('Moncloa', 'Argüelles, Ciudad Universitaria y Aravaca.'),
  'mudanzas-chamartin': metaZona('Chamartín', 'El Viso, Prosperidad e Hispanoamérica.'),
  'mudanzas-arganzuela': metaZona('Arganzuela', 'Delicias, Legazpi, Acacias y Madrid Río.'),
  'mudanzas-latina': metaZona('Latina', 'Aluche, Lucero, Los Cármenes y Puerta del Ángel.'),
  'mudanzas-ciudad-lineal': metaZona('Ciudad Lineal', 'Pueblo Nuevo, Quintana, Concepción y Arturo Soria.'),
  'mudanzas-hortaleza': metaZona('Hortaleza', 'Sanchinarro, Valdebebas, Canillas y Pinar del Rey.'),
  'mudanzas-fuencarral': metaZona('Fuencarral', 'Barrio del Pilar, Las Tablas y Montecarmelo.'),
  'mudanzas-usera': metaZona('Usera', 'Almendrales, Moscardó, Pradolongo y Zofío.'),
  'mudanzas-moratalaz': metaZona('Moratalaz', 'bloques de los setenta, Vinateros y Fontarrón.'),

  /* ------------------------------ Guías ------------------------------ */
  'guias/cuanto-cuesta-una-mudanza-en-madrid': meta('Cuánto cuesta una mudanza en Madrid en 2026', `Cuánto cuesta una mudanza en Madrid en 2026: desde ${D} €.`, ['cerrado', 'visita']),
  'guias/checklist-mudanza-4-semanas': meta('Checklist de mudanza: qué hacer 4 semanas antes', 'Qué hacer cada semana antes de tu mudanza, paso a paso.', ['trato']),
  'guias/como-calcular-m3-mudanza': meta('Cómo calcular los m³ de tu casa para la mudanza', 'Calcula los metros cúbicos de tu casa habitación a habitación.', ['visita']),
  'guias/tramites-mudanza-madrid': meta('Trámites al mudarte en Madrid: padrón y suministros', 'Padrón, suministros y cambios de domicilio al mudarte.', ['trato']),
  'guias/como-embalar-para-una-mudanza': meta('Cómo embalar para una mudanza: guía paso a paso', 'Cómo embalar cada cosa de casa para que llegue intacta.', ['cerrado', 'trato']),
  'guias/mudanza-sin-ascensor-que-tener-en-cuenta': meta('Mudanza sin ascensor: qué tener en cuenta', 'Qué cambia en una mudanza sin ascensor y cómo prepararla.', ['visita']),
  'guias/mejor-epoca-para-mudarse-en-madrid': meta('Mejor época para mudarse en Madrid', 'Qué meses y días salen mejor para mudarse en Madrid.', ['cerrado']),
  'guias/como-elegir-empresa-de-mudanzas': meta('Cómo elegir empresa de mudanzas', 'Qué comprobar antes de contratar una empresa de mudanzas.', ['llamadas', 'solo']),
  'guias/reservar-espacio-aparcamiento-mudanza-madrid': meta('Reservar aparcamiento para tu mudanza en Madrid', 'Cuándo hace falta permiso para aparcar el camión en Madrid.', ['trato']),
};
