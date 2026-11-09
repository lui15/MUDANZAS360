import { EMPRESA } from '../datos/contacto';

/** Datos de los textos legales. Son un borrador: conviene que los revise un profesional. */
export const LEGAL = {
  nombre: 'Mudanzas360',
  dominio: 'mudanzas360.es',
  actividad: 'servicios de mudanzas, portes, montaje de muebles y guardamuebles con base en Madrid',

  titular: EMPRESA.razonSocial,
  nif: EMPRESA.cif,
  domicilio: EMPRESA.domicilio,
  correo: EMPRESA.correo,
  /** Solo para sociedades: registro mercantil, tomo, folio y hoja. Déjalo vacío si no aplica. */
  registro: '',
  conservacion: EMPRESA.conservacion,

  datos:
    'nombre, teléfono, correo electrónico (opcional), municipio o barrio de origen y destino, planta y ascensor, fecha, servicios que necesitas y los detalles que nos cuentes. También guardamos la página desde la que nos escribes y, si llegas desde un anuncio, la campaña',
  proveedores: [
    'Hostinger: alojamiento de la web.',
    'Supabase: base de datos donde se guardan las solicitudes.',
    'WhatsApp (Meta): para enviarte el presupuesto y hablar contigo, y si decides escribirnos por WhatsApp.',
    'Google Analytics (Google): estadísticas de visitas a la web, solo si aceptas las cookies.',
  ],
  /** Comunicación necesaria para prestar el servicio. */
  comunicacion:
    'Si contratas la mudanza, comunicamos los datos necesarios (nombre, teléfono, direcciones, fecha y detalles del trabajo) a los transportistas y operarios que la realizan, solo para prestar el servicio.',
};
