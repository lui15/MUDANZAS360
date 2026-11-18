/**
 * Tipos del contenido «servicio × zona». Cada zona tiene su propio archivo en contenido/zonas/
 * con los textos de cada servicio, escritos para esa zona. Nada se genera cambiando el nombre.
 */
import type { Faq } from '../compartido/faq-acordeon';

/** Un apartado de la sección sobre la zona (se pinta como H3). */
export interface ApartadoZona {
  titulo: string;
  parrafos: string[];
}

export interface PasoLocal {
  titulo: string;
  texto: string;
}

/** Todo lo que es propio de una página /servicio/zona/. */
export interface ContenidoServicioZona {
  /** Frase corta y propia para la descripción (40-60 caracteres, termina en punto). */
  gancho: string;
  /** Introducción: el servicio en esa zona. */
  intro: string[];
  /** La zona vista desde este servicio: viviendas, épocas, calles, aparcamiento, dificultades y consejos. */
  zona: ApartadoZona[];
  /** Proceso de trabajo paso a paso, adaptado a la zona. */
  proceso: PasoLocal[];
  /** Qué incluye el servicio aquí y qué cambia en esta zona. */
  incluye: string[];
  /** Orientación de precio para esta zona (las cifras salen de datos/precios.ts). */
  precio: string[];
  /** De 5 a 8 preguntas propias del servicio y la zona. */
  faqs: Faq[];
}

export interface ContenidoZona {
  /** Fecha de la última revisión de los textos (AAAA-MM-DD). */
  revisado: string;
  /** Fuentes oficiales consultadas para los datos de la zona. */
  fuentes: { texto: string; url: string }[];
  paginas: Partial<Record<string, ContenidoServicioZona>>;
}
