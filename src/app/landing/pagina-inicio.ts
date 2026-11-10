import { Faq } from '../compartido/faq-acordeon';
import { MUDANZA_DESDE } from '../datos/precios';

/** Datos SEO de la portada. Sus preguntas son las que se ven en la propia página. */
export const PAGINA_INICIO: {
  path: '';
  title: string;
  description: string;
  etiqueta: string;
  faqs: readonly Faq[];
} = {
  path: '',
  title: 'Mudanzas en Madrid con presupuesto cerrado | Mudanzas360',
  description: `Mudanzas en Madrid desde ${MUDANZA_DESDE} € con precio cerrado por escrito: pisos, oficinas, portes y mudanzas nacionales con un solo interlocutor. Pide presupuesto.`,
  etiqueta: 'Inicio',
  faqs: [
    {
      pregunta: '¿En qué zonas trabajáis?',
      respuesta:
        'Estamos en Madrid y podemos desplazarnos a cualquier punto de España. La disponibilidad y las condiciones dependerán del servicio y del recorrido.',
    },
    {
      pregunta: '¿Cómo puedo solicitar un presupuesto?',
      respuesta:
        'Rellena nuestro formulario paso a paso. Revisaremos la información y nos pondremos en contacto contigo para hablar de tu mudanza.',
    },
    {
      pregunta: '¿Enviar la solicitud me compromete a contratar?',
      respuesta:
        'No. La solicitud sirve para conocer tu necesidad y preparar una propuesta. No supone ningún compromiso.',
    },
    {
      pregunta: '¿Puedo solicitar solo el transporte de un mueble?',
      respuesta:
        'Sí. Selecciona “Porte / transporte” y explícanos qué necesitas trasladar, dónde hay que recogerlo y dónde entregarlo.',
    },
    {
      pregunta: '¿Cuándo recibiré respuesta?',
      respuesta:
        'Revisaremos tu solicitud y contactaremos contigo utilizando el medio que hayas indicado.',
    },
  ],
};
