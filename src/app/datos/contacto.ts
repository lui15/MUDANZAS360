/**
 * Datos de contacto y de la empresa: la única fuente para toda la web.
 * Este archivo no importa nada de Angular porque también lo usa el generador del sitemap.
 */
/** Dominio final, sin barra al final. Debe coincidir con public/robots.txt. */
export const SITE_URL = 'https://mudanzas360.es';

export const NEGOCIO = {
  nombre: 'Mudanzas360',
  nombreAlternativo: 'Mudanzas 360',
  /** Rango de precios del negocio para los datos estructurados. */
  rangoPrecios: '€€',
  logo: '/images/logo.png',
  /** Perfiles sociales reales, con URL completa. Se publican en los datos estructurados. */
  redes: [] as string[],
} as const;

/** Datos del titular (los mismos que en el aviso legal de ArmaMuebles). */
export const EMPRESA = {
  razonSocial: 'Luis Pichardo',
  cif: '61850512Q',
  domicilio: 'San Mariano 90, Madrid',
  correo: 'lpichardosanchez2@gmail.com',
  conservacion:
    'Conservamos tus datos durante 12 meses si la solicitud no llega a contratarse. Si se contrata, los guardamos el tiempo que exija la ley.',
} as const;

/**
 * Ficha de Google Business Profile. Mientras sea null, los botones «Ver opiniones en Google» y
 * «Escribir mi opinión» no se muestran. Pega aquí la URL de la ficha y aparecerán solos.
 */
export const PERFIL_GOOGLE: string | null = null;

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
