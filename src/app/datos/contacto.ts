/**
 * Datos de contacto y de la empresa: la única fuente para toda la web.
 * Este archivo no importa nada de Angular porque también lo usa el generador del sitemap.
 */
import { PENDIENTE } from './pendiente';

/** Dominio final, sin barra al final. Debe coincidir con public/robots.txt. */
export const SITE_URL = 'https://mudanzas360.es';

export const NEGOCIO = {
  nombre: 'Mudanzas360',
  nombreAlternativo: 'Mudanzas 360',
  /** Rango de precios del negocio para los datos estructurados. */
  rangoPrecios: '€€',
  logo: '/images/logo.png',
  // PENDIENTE: el horario no está confirmado; cuando lo esté, añádelo aquí y en json-ld.ts.
  horario: PENDIENTE('Horario de atención (días y horas)'),
  /** Perfiles sociales reales, con URL completa. Se publican en los datos estructurados. */
  redes: [] as string[],
} as const;

/** Datos fiscales. Se muestran en el pie y en el aviso legal en cuanto estén rellenos. */
export const EMPRESA = {
  razonSocial: PENDIENTE<string>('Razón social o nombre completo del titular'),
  cif: PENDIENTE<string>('CIF o NIF del titular'),
  domicilio: PENDIENTE<string>('Domicilio del titular'),
  correo: PENDIENTE<string>('Correo electrónico de contacto'),
  conservacion: PENDIENTE<string>('Plazo de conservación de las solicitudes de presupuesto'),
};

/** Ficha de Google de la empresa, para el bloque de opiniones. */
export const PERFIL_GOOGLE = PENDIENTE<string>('URL de la ficha de Google Business Profile (opiniones)');

/** Teléfono único de la empresa: todas las llamadas y WhatsApp salen de aquí. */
export const TELEFONO = '+34642325136';
export const TELEFONO_VISIBLE = '642 325 136';
export const WHATSAPP = TELEFONO.replace('+', '');

/** Mensaje de WhatsApp por defecto. */
export const MENSAJE_WHATSAPP = 'Hola, quiero pedir presupuesto para una mudanza';

/** Enlace que abre el chat de la empresa con el mensaje ya escrito. */
export function enlaceWhatsApp(mensaje: string = MENSAJE_WHATSAPP): string {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}

/** Fecha de la última revisión del contenido: línea «Actualizado», dateModified y lastmod del sitemap. */
export const REVISION = { texto: 'noviembre 2026', iso: '2026-11-09' } as const;

/**
 * Ruta pública de una página. Hostinger redirige /ruta a /ruta/, así que todas las URL
 * canónicas llevan barra final (menos la portada y los archivos).
 */
export function conBarra(ruta: string): string {
  const limpia = ruta.startsWith('/') ? ruta : '/' + ruta;
  if (limpia === '/' || limpia.endsWith('/') || /\.[a-z0-9]+$/i.test(limpia)) {
    return limpia;
  }
  return limpia + '/';
}

/** URL absoluta y canónica de una página. */
export function urlCanonica(ruta: string): string {
  return SITE_URL + conBarra(ruta);
}
