/** Catálogo de servicios. Las tarjetas y el formulario se alimentan de aquí. */

export type Servicio =
  | 'Mudanza de vivienda'
  | 'Mudanza de oficina'
  | 'Porte / transporte'
  | 'Montaje de muebles'
  | 'Guardamuebles'
  | 'Otro';

export interface PasoPresupuesto {
  numero: string;
  titulo: string;
  subtitulo: string;
}

export const PASOS_PRESUPUESTO: readonly PasoPresupuesto[] = [
  { numero: '01', titulo: 'El servicio', subtitulo: 'Cuéntanos qué necesitas' },
  { numero: '02', titulo: 'El recorrido', subtitulo: '¿De dónde y hacia dónde?' },
  { numero: '03', titulo: 'Tu mudanza', subtitulo: 'Algunos detalles importantes' },
  { numero: '04', titulo: 'Detalles', subtitulo: 'Añade lo que debamos saber' },
  { numero: '05', titulo: 'Tus datos', subtitulo: '¿Cómo podemos responderte?' },
];

export const SERVICIOS_FORMULARIO: readonly {
  nombre: Servicio;
  descripcion: string;
  icono: string;
}[] = [
  { nombre: 'Mudanza de vivienda', descripcion: 'Pisos, casas y traslados completos', icono: '⌂' },
  { nombre: 'Mudanza de oficina', descripcion: 'Traslados de negocios y empresas', icono: '▤' },
  { nombre: 'Porte / transporte', descripcion: 'Muebles, electrodomésticos y bultos', icono: '▰' },
  { nombre: 'Montaje de muebles', descripcion: 'Desmontaje y montaje de mobiliario', icono: '⚒' },
  { nombre: 'Guardamuebles', descripcion: 'Almacenamiento temporal', icono: '▦' },
  { nombre: 'Otro', descripcion: 'Explícanos qué necesitas', icono: '＋' },
];

export interface ServicioWeb {
  nombre: string;
  descripcion: string;
  icono: string;
  imagen: string;
  /** Dimensiones reales del archivo, para reservar su espacio y evitar saltos de página. */
  ancho: number;
  alto: number;
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
    imagen: '/images/mudanzas-viviendas.jpg',
    ancho: 735,
    alto: 490,
    formulario: 'Mudanza de vivienda',
    ruta: '/mudanzas-pisos-madrid',
  },
  {
    nombre: 'Mudanzas de oficinas',
    descripcion: 'Trasladamos espacios de trabajo con planificación y atención a cada elemento.',
    icono: '▤',
    imagen: '/images/mudanzas-oficinas.jpg',
    ancho: 735,
    alto: 951,
    formulario: 'Mudanza de oficina',
    ruta: '/mudanzas-oficinas-madrid',
  },
  {
    nombre: 'Portes y transportes',
    descripcion: 'Recogida y entrega de muebles, electrodomésticos y objetos voluminosos.',
    icono: '▰',
    imagen: '/images/portes.jpg',
    ancho: 735,
    alto: 490,
    formulario: 'Porte / transporte',
    ruta: '/portes-madrid',
  },
  {
    nombre: 'Montaje de muebles',
    descripcion: 'Desmontaje, transporte y montaje para que todo vuelva a estar en su sitio.',
    icono: '⚒',
    imagen: '/images/muebles.jpg',
    ancho: 735,
    alto: 490,
    formulario: 'Montaje de muebles',
    ruta: '/montaje-desmontaje-muebles-mudanza',
  },
  {
    nombre: 'Embalaje y protección',
    descripcion: 'Cajas, protecciones y embalaje cuidadoso para objetos frágiles y delicados.',
    icono: '▣',
    imagen: '/images/embalaje.jpg',
    ancho: 736,
    alto: 736,
    formulario: 'Otro',
    ruta: '/embalaje-mudanzas-madrid',
  },
  {
    nombre: 'Guardamuebles',
    descripcion: 'Almacenamiento temporal y seguro para tus muebles mientras lo necesites.',
    icono: '▦',
    imagen: '/images/guardamuebles.avif',
    ancho: 800,
    alto: 1067,
    formulario: 'Guardamuebles',
    ruta: '/guardamuebles-madrid',
  },
  {
    nombre: 'Mudanzas nacionales',
    descripcion: 'Desde Madrid hasta cualquier punto de España, con un recorrido bien planificado.',
    icono: '↗',
    imagen: '/images/nacionales.jpg',
    ancho: 1024,
    alto: 1024,
    formulario: 'Mudanza de vivienda',
    ruta: '/mudanzas-nacionales',
  },
  {
    nombre: 'Mudanzas en Madrid',
    descripcion: 'Traslados locales dentro de Madrid y alrededores, rápidos y sin complicaciones.',
    icono: '◎',
    imagen: '/images/madrid.jpg',
    ancho: 1024,
    alto: 1024,
    formulario: 'Mudanza de vivienda',
    ruta: '/mudanzas-madrid',
  },
];
