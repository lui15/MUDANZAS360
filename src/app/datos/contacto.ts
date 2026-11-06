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
  /** Horario para los datos estructurados. Confírmalo o déjalo vacío para que no se publique. */
  horario: {
    dias: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    abre: '08:00',
    cierra: '20:00',
  },
  /** Perfiles sociales reales, con URL completa. Se publican en los datos estructurados. */
  redes: [] as string[],
} as const;

/**
 * PENDIENTE: sustituye por el WhatsApp real, en formato internacional y sin espacios ni «+».
 * Mientras tenga la «X», los enlaces llevan al formulario y no se registra click_whatsapp.
 */
const WHATSAPP = '34XXXXXXXXX';

/**
 * PENDIENTE: teléfono real en formato +34XXXXXXXXX. Mientras esté vacío no se muestra
 * ningún enlace tel: ni se publica el teléfono en los datos estructurados.
 */
export const TELEFONO = '';

export const WHATSAPP_CONFIGURADO = /^\d{9,15}$/.test(WHATSAPP);

/** Mensaje con el que se abre WhatsApp desde los botones generales. */
export const MENSAJE_WHATSAPP = '¡Hola! Quiero información sobre una mudanza con Mudanzas360.';

/** Enlace de WhatsApp con el texto indicado, o null si aún no hay un número real. */
export function whatsappUrl(texto: string = MENSAJE_WHATSAPP): string | null {
  return WHATSAPP_CONFIGURADO ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}` : null;
}
