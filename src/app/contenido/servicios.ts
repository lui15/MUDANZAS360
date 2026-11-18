/**
 * Los 10 servicios de las páginas /servicio/zona/. Cada uno dice qué incluye, de dónde sale su
 * precio orientativo (datos/precios.ts) y cómo se abre el formulario desde sus páginas.
 */
import type { Servicio } from '../datos/catalogo-servicios';
import { TARIFAS, TIPOS_VIVIENDA, textoRango } from '../datos/precios';
import type { RutaLanding } from '../landing/rutas';
import type { DatosPrevios } from '../presupuesto/modelo';

export interface ServicioLocal {
  slug: string;
  /** «Mudanzas de pisos»: sirve para el H1 y el título. */
  nombre: string;
  /** «mudanza de piso»: en minúscula, dentro de frases. */
  enFrase: string;
  /** Servicio que queda elegido en el formulario. */
  formulario: Servicio;
  /** Lo que se deja rellenado en el formulario (la zona se añade como origen). */
  datos?: DatosPrevios;
  /** Página general del servicio, si existe. */
  pagina?: RutaLanding;
  /** Qué incluye el servicio, en todas las zonas. */
  incluye: string[];
  /** Precio orientativo con las cifras de datos/precios.ts. */
  precio: string;
  /** Servicios que se enlazan desde sus páginas. */
  relacionados: string[];
}

const T = TARIFAS;
const V = TIPOS_VIVIENDA;

export const SERVICIOS_LOCALES: readonly ServicioLocal[] = [
  {
    slug: 'mudanzas-pisos',
    nombre: 'Mudanzas de pisos',
    enFrase: 'mudanza de piso',
    formulario: 'Mudanza completa',
    pagina: 'mudanzas-pisos-madrid',
    incluye: [
      'Visita sin compromiso si hace falta, para ver volumen y accesos',
      'Protección de muebles y carga ordenada por habitaciones',
      'Desmontaje y montaje de los muebles acordados',
      'Transporte y colocación de cada cosa en su sitio',
      'Una sola persona de contacto de principio a fin',
    ],
    precio: `Estudio ${textoRango(V[0].precio)}, piso de 1-2 habitaciones ${textoRango(V[1].precio)}, de 3 habitaciones ${textoRango(V[2].precio)} y de 4 o más ${textoRango(V[3].precio)}, con IVA. Cada planta sin ascensor suma ${textoRango(T.plantaSinAscensor)}.`,
    relacionados: ['embalaje', 'montaje-muebles', 'guardamuebles'],
  },
  {
    slug: 'portes',
    nombre: 'Portes',
    enFrase: 'porte',
    formulario: 'Portes o pocos muebles',
    pagina: 'portes-madrid',
    incluye: [
      'Furgoneta con conductor y un operario',
      'Carga, sujeción y descarga de los muebles',
      'Mantas y protecciones para lo que se mueve',
      'Recogida en tienda, punto de venta o domicilio',
    ],
    precio: `Desde ${T.portes.min} € con furgoneta, conductor y un operario hasta 2 horas. Por horas: furgoneta ${textoRango(T.furgonetaHora, '€/h')} y cada operario extra ${textoRango(T.operarioHora, '€/h')}.`,
    relacionados: ['montaje-muebles', 'subida-muebles-elevador', 'mudanzas-pisos'],
  },
  {
    slug: 'mudanzas-oficinas',
    nombre: 'Mudanzas de oficinas',
    enFrase: 'mudanza de oficina',
    formulario: 'Mudanza de oficina',
    pagina: 'mudanzas-oficinas-madrid',
    incluye: [
      'Visita previa y plan por fases o por departamentos',
      'Embalaje de archivo y equipos con etiquetado por puesto',
      'Desmontaje y montaje de mobiliario de oficina',
      'Traslado fuera del horario laboral si lo necesitas',
      'Una sola persona de contacto para tu empresa',
    ],
    precio: `${textoRango(T.oficinaPuesto)} por puesto de trabajo, con IVA, según el mobiliario, el archivo y los accesos.`,
    relacionados: ['embalaje', 'guardamuebles', 'montaje-muebles'],
  },
  {
    slug: 'guardamuebles',
    nombre: 'Guardamuebles',
    enFrase: 'guardamuebles',
    formulario: 'Guardamuebles',
    pagina: 'guardamuebles-madrid',
    incluye: [
      'Recogida en tu casa y entrega cuando la pidas',
      'Embalaje y protección para el tiempo que esté guardado',
      'Inventario de lo que se guarda',
      'Espacio ajustado a tu volumen',
    ],
    precio: `${textoRango(T.guardamueblesMes, '€ al mes')} según el espacio, con IVA. La recogida y la entrega se presupuestan aparte.`,
    relacionados: ['mudanzas-pisos', 'embalaje', 'vaciado-pisos'],
  },
  {
    slug: 'embalaje',
    nombre: 'Embalaje para mudanzas',
    enFrase: 'embalaje',
    formulario: 'Mudanza completa',
    datos: { extras: ['embalaje'] },
    pagina: 'embalaje-mudanzas-madrid',
    incluye: [
      'Cajas reforzadas, papel, plástico de burbujas y mantas',
      'Embalaje de menaje, libros, ropa y objetos frágiles',
      'Protección especial para televisores, cuadros y espejos',
      'Cajas etiquetadas por habitación',
    ],
    precio: `Embalaje completo ${textoRango(T.embalaje)} con materiales, según el volumen; cajas sueltas a ${textoRango(T.caja)} cada una, con IVA.`,
    relacionados: ['mudanzas-pisos', 'montaje-muebles', 'guardamuebles'],
  },
  {
    slug: 'montaje-muebles',
    nombre: 'Desmontaje y montaje de muebles',
    enFrase: 'desmontaje y montaje de muebles',
    formulario: 'Mudanza completa',
    datos: { extras: ['montaje'] },
    pagina: 'montaje-desmontaje-muebles-mudanza',
    incluye: [
      'Desmontaje de armarios, camas, estanterías y mesas',
      'Herrajes y tornillos guardados y marcados por mueble',
      'Montaje en la nueva casa el mismo día de la mudanza',
      'Revisión de que cada mueble queda firme y nivelado',
    ],
    precio: `Desde ${T.montajeMueble.min} € por mueble, con IVA; lo concretamos según el tipo de mueble y su complejidad.`,
    relacionados: ['mudanzas-pisos', 'portes', 'embalaje'],
  },
  {
    slug: 'mudanzas-urgentes',
    nombre: 'Mudanzas urgentes',
    enFrase: 'mudanza urgente',
    formulario: 'Mudanza completa',
    datos: { cuando: 'pronto' },
    pagina: 'mudanzas-urgentes-madrid',
    incluye: [
      'Respuesta por WhatsApp para cerrar fecha cuanto antes',
      'Equipo y vehículo ajustados al volumen real',
      'Embalaje rápido de lo imprescindible si hace falta',
      'Guardamuebles temporal si aún no tienes la nueva casa',
    ],
    precio: `El precio normal de la mudanza más un recargo del ${T.urgentePct.min}-${T.urgentePct.max} % por la urgencia, con IVA.`,
    relacionados: ['mudanzas-pisos', 'portes', 'guardamuebles'],
  },
  {
    slug: 'vaciado-pisos',
    nombre: 'Vaciado de pisos',
    enFrase: 'vaciado de piso',
    formulario: 'Otro',
    datos: { notas: 'Vaciado de piso.' },
    pagina: 'vaciado-pisos-madrid',
    incluye: [
      'Visita para separar lo que se guarda, se traslada o se retira',
      'Retirada de muebles, enseres y trastos',
      'Traslado de lo que quieras conservar',
      'Piso vacío y barrido, listo para entregar',
    ],
    precio: `${textoRango(T.vaciado)} según el volumen del piso, con IVA.`,
    relacionados: ['guardamuebles', 'portes', 'mudanzas-pisos'],
  },
  {
    slug: 'mudanzas-personas-mayores',
    nombre: 'Mudanzas para personas mayores',
    enFrase: 'mudanza de una persona mayor',
    formulario: 'Mudanza completa',
    pagina: 'mudanzas-madrid',
    incluye: [
      'Visita sin prisas para decidir qué se lleva y qué no',
      'Embalaje completo para que no tenga que cargar nada',
      'Montaje de la cama y lo básico el mismo día',
      'Trato con la familia si lo preferís, con una sola persona de contacto',
    ],
    precio: `Como una mudanza de piso: estudio ${textoRango(V[0].precio)} y piso de 1-2 habitaciones ${textoRango(V[1].precio)}, con IVA; el embalaje completo suma ${textoRango(T.embalaje)}.`,
    relacionados: ['embalaje', 'vaciado-pisos', 'montaje-muebles'],
  },
  {
    slug: 'subida-muebles-elevador',
    nombre: 'Subida de muebles con elevador',
    enFrase: 'subida de muebles con elevador',
    formulario: 'Otro',
    datos: { notas: 'Subida de muebles con elevador exterior.' },
    pagina: 'mudanzas-madrid',
    incluye: [
      'Valoración de la fachada, el balcón o la ventana de entrada',
      'Elevador exterior con su operario',
      'Te indicamos si hace falta permiso de ocupación de la vía pública',
      'Protección del mueble y del hueco de entrada',
    ],
    precio: `El elevador exterior cuesta ${textoRango(T.elevador)}, con IVA, más la tasa municipal de ocupación de la vía pública cuando se necesita permiso.`,
    relacionados: ['portes', 'mudanzas-pisos', 'montaje-muebles'],
  },
];

export const servicioLocal = (slug: string) => SERVICIOS_LOCALES.find((s) => s.slug === slug);
