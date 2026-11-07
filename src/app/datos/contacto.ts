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
  // TODO: añadir el horario cuando esté confirmado, aquí y en json-ld.ts.
  /** Perfiles sociales reales, con URL completa. Se publican en los datos estructurados. */
  redes: [] as string[],
} as const;

export const TELEFONO = '+34624671374';
export const TELEFONO_VISIBLE = '624 67 13 74';
export const WHATSAPP = '34624671374';

/** Mensaje de WhatsApp en las páginas que no definen uno propio. */
export const MENSAJE_WHATSAPP = 'Hola, quiero información sobre una mudanza con Mudanzas360.';

/** Enlace que abre el chat de la empresa con el mensaje ya escrito. */
export function enlaceWhatsApp(mensaje: string = MENSAJE_WHATSAPP): string {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}
