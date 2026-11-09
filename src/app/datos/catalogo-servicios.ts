/** Catálogo de servicios. Las tarjetas y el formulario se alimentan de aquí. */
import { ImagenId } from './imagenes';

export type Servicio =
  | 'Mudanza completa'
  | 'Portes o pocos muebles'
  | 'Mudanza de oficina'
  | 'Guardamuebles'
  | 'Mudanza nacional'
  | 'Otro';

export interface PasoPresupuesto {
  numero: string;
  /** Nombre corto del paso (también se envía a Analytics). */
  id: 'servicio' | 'tamano' | 'recorrido' | 'fecha' | 'contacto';
  titulo: string;
  subtitulo: string;
}

export const PASOS_PRESUPUESTO: readonly PasoPresupuesto[] = [
  { numero: '01', id: 'servicio', titulo: '¿Qué necesitas?', subtitulo: 'Elige el tipo de servicio' },
  { numero: '02', id: 'tamano', titulo: '¿Qué tamaño tiene?', subtitulo: 'Y te decimos cuánto suele costar' },
  { numero: '03', id: 'recorrido', titulo: '¿De dónde a dónde?', subtitulo: 'Municipio o barrio, y si hay ascensor' },
  { numero: '04', id: 'fecha', titulo: '¿Cuándo?', subtitulo: 'Y si necesitas algo más' },
  { numero: '05', id: 'contacto', titulo: '¿A quién enviamos el presupuesto?', subtitulo: 'Te escribimos por WhatsApp' },
];

export const SERVICIOS_FORMULARIO: readonly {
  nombre: Servicio;
  descripcion: string;
  icono: 'casa' | 'transporte' | 'oficina' | 'almacen' | 'ruta' | 'mas';
}[] = [
  { nombre: 'Mudanza completa', descripcion: 'Piso o casa dentro de Madrid', icono: 'casa' },
  { nombre: 'Portes o pocos muebles', descripcion: 'Un sofá, una cama, unas cajas…', icono: 'transporte' },
  { nombre: 'Mudanza de oficina', descripcion: 'Negocios, despachos y locales', icono: 'oficina' },
  { nombre: 'Guardamuebles', descripcion: 'Guardamos tus cosas el tiempo que necesites', icono: 'almacen' },
  { nombre: 'Mudanza nacional', descripcion: 'De Madrid a otra provincia', icono: 'ruta' },
  { nombre: 'Otro', descripcion: 'Cuéntanos qué necesitas', icono: 'mas' },
];

export interface ServicioWeb {
  nombre: string;
  descripcion: string;
  icono: string;
  imagen: ImagenId;
  /** Servicio que se deja elegido al pedir presupuesto desde la tarjeta. */
  formulario: Servicio;
  /** Página de la web con la información de este servicio. */
  ruta: string;
}

export const SERVICIOS_WEB: readonly ServicioWeb[] = [
  {
    nombre: 'Mudanzas de viviendas',
    descripcion: 'Organizamos el traslado de pisos y casas cuidando tus pertenencias en cada etapa.',
    icono: '⌂',
    imagen: 'viviendas',
    formulario: 'Mudanza completa',
    ruta: '/mudanzas-pisos-madrid',
  },
  {
    nombre: 'Mudanzas de oficinas',
    descripcion: 'Trasladamos espacios de trabajo con planificación y atención a cada elemento.',
    icono: '▤',
    imagen: 'oficinas',
    formulario: 'Mudanza de oficina',
    ruta: '/mudanzas-oficinas-madrid',
  },
  {
    nombre: 'Portes y transportes',
    descripcion: 'Recogida y entrega de muebles, electrodomésticos y objetos voluminosos.',
    icono: '▰',
    imagen: 'portes',
    formulario: 'Portes o pocos muebles',
    ruta: '/portes-madrid',
  },
  {
    nombre: 'Montaje de muebles',
    descripcion: 'Desmontaje, transporte y montaje para que todo vuelva a estar en su sitio.',
    icono: '⚒',
    imagen: 'muebles',
    formulario: 'Mudanza completa',
    ruta: '/montaje-desmontaje-muebles-mudanza',
  },
  {
    nombre: 'Embalaje y protección',
    descripcion: 'Cajas, protecciones y embalaje cuidadoso para objetos frágiles y delicados.',
    icono: '▣',
    imagen: 'embalaje',
    formulario: 'Mudanza completa',
    ruta: '/embalaje-mudanzas-madrid',
  },
  {
    nombre: 'Guardamuebles',
    descripcion: 'Almacenamiento temporal para tus muebles mientras lo necesites, con recogida y entrega.',
    icono: '▦',
    imagen: 'guardamuebles',
    formulario: 'Guardamuebles',
    ruta: '/guardamuebles-madrid',
  },
  {
    nombre: 'Mudanzas nacionales',
    descripcion: 'Desde Madrid hasta cualquier punto de España, con un recorrido bien planificado.',
    icono: '↗',
    imagen: 'nacionales',
    formulario: 'Mudanza nacional',
    ruta: '/mudanzas-nacionales',
  },
  {
    nombre: 'Mudanzas en Madrid',
    descripcion: 'Traslados locales dentro de Madrid y alrededores, rápidos y sin complicaciones.',
    icono: '◎',
    imagen: 'madrid',
    formulario: 'Mudanza completa',
    ruta: '/mudanzas-madrid',
  },
];
