/**
 * Datos de los textos legales. Sustituye cada [PENDIENTE] antes de publicar.
 * Son un borrador: conviene que los revise un profesional.
 */
export const LEGAL = {
  nombre: 'Mudanzas360',
  dominio: 'mudanzas360.es',
  actividad: 'servicios de mudanzas, portes, montaje de muebles y guardamuebles con base en Madrid',

  titular: '[PENDIENTE: nombre completo o razón social]',
  nif: '[PENDIENTE: NIF o CIF]',
  domicilio: '[PENDIENTE: domicilio]',
  correo: '[PENDIENTE: correo de contacto]',
  /** Solo para sociedades: registro mercantil, tomo, folio y hoja. Déjalo vacío si no aplica. */
  registro: '',
  conservacion: '[PENDIENTE: plazo de conservación de las solicitudes]',

  datos: 'nombre, teléfono, correo electrónico (opcional), direcciones de recogida y entrega, localidad y los detalles de la mudanza que nos cuentes',
  proveedores: [
    'Hostinger: alojamiento de la web.',
    'Supabase: base de datos donde se guardan las solicitudes.',
    'WhatsApp (Meta): solo si decides contactarnos o enviar tu solicitud por WhatsApp.',
    'Google Analytics (Google): estadísticas de visitas a la web.',
    'Google Fonts y Unsplash: tipografías e imágenes que tu navegador descarga al visitar la web, lo que les comunica tu dirección IP.',
  ],
};
