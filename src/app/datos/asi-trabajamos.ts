/** Texto del apartado «Así trabajamos», tal y como lo dio el dueño. Una sola fuente para toda la web. */
import type { IconoId } from '../compartido/iconos';

export interface PasoTrabajo {
  titulo: string;
  texto: string;
  icono: IconoId;
}

export const ASI_TRABAJAMOS = {
  titulo: 'Así trabajamos',
  subtitulo: 'Sin llamadas de cinco empresas a la vez. Te atendemos nosotros.',
  pasos: [
    {
      titulo: 'Pides presupuesto',
      texto: 'Nos cuentas tu mudanza en un minuto, por el formulario o por WhatsApp.',
      icono: 'solicitud',
    },
    {
      titulo: 'Te respondemos nosotros',
      texto:
        'Tu solicitud nos llega solo a nosotros. No la repartimos entre varias empresas, así que nadie más te va a llamar ni escribir.',
      icono: 'whatsapp',
    },
    {
      titulo: 'Visita sin compromiso y presupuesto ajustado',
      texto:
        'Si hace falta, vamos a ver la mudanza sin compromiso, te orientamos sobre cómo organizarla y te damos un presupuesto ajustado y claro.',
      icono: 'casa',
    },
    {
      titulo: 'Contigo en cada paso',
      texto:
        'Trato cercano y ordenado, con una sola persona de contacto desde el primer mensaje hasta que la última caja está en tu nueva casa.',
      icono: 'persona',
    },
  ] satisfies PasoTrabajo[],
} as const;

/** Versión corta, junto al formulario. */
export const ASI_TRABAJAMOS_CORTO = [
  'Te atendemos solo nosotros',
  'Visita sin compromiso',
  'Una sola persona de contacto',
] as const;
