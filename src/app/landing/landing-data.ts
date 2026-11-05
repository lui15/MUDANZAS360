import { NEGOCIO, SITE_URL } from '../seo.service';

/** Valores válidos del selector de servicio del formulario. */
export type ServicioFormulario =
  | 'Mudanza de vivienda'
  | 'Mudanza de oficina'
  | 'Porte / transporte'
  | 'Guardamuebles';

export interface PaginaSeo {
  /** Ruta sin barra inicial. '' es la página de inicio. */
  path: string;
  title: string;
  description: string;
  /** Texto del enlace interno hacia esta página. */
  etiqueta: string;
  h1: { linea: string; resaltado: string };
  kicker: string;
  h2: string;
  intro: string;
  puntos: string[];
  bloques: { titulo: string; texto: string }[];
  faqs: { pregunta: string; respuesta: string }[];
  servicio: { nombre: string; descripcion: string };
  /** Servicio que se preselecciona al abrir el formulario. */
  servicioFormulario?: ServicioFormulario;
  zona?: string;
}

const LOCALIDADES_TEXTO =
  'Madrid capital y municipios como Getafe, Alcorcón, Leganés, Móstoles, Fuenlabrada, Alcalá de Henares, Pozuelo de Alarcón y Rivas-Vaciamadrid. Si tu localidad no aparece, elige «Otra localidad» en el formulario y escríbela.';

const SOLICITUD_TEXTO =
  'Rellena nuestro formulario paso a paso. Revisaremos la información y nos pondremos en contacto contigo para hablar de tu mudanza. Enviar la solicitud no supone ningún compromiso.';

const PRECIO_TEXTO =
  'Depende del volumen, los accesos, el recorrido y los servicios que necesites. Cuéntanoslo en el formulario y te preparamos una propuesta a medida, sin compromiso.';

function paginaDeZona(zona: string, barrios: string, cercanos: string): Omit<PaginaSeo, 'path'> {
  return {
    title: `Mudanzas en ${zona}, Madrid | Presupuesto gratis | Mudanzas360`,
    description: `Mudanzas en ${zona} (Madrid): viviendas, oficinas, portes y guardamuebles. Pide tu presupuesto gratis y sin compromiso con Mudanzas360.`,
    etiqueta: `Mudanzas en ${zona}`,
    zona,
    h1: { linea: `¡Tu mudanza en ${zona},`, resaltado: 'más fácil y económica!' },
    kicker: `MUDANZAS EN ${zona.toUpperCase()}`,
    h2: `Empresa de mudanzas y portes en ${zona}`,
    intro: `Trasladamos pisos, casas, oficinas y muebles sueltos desde o hacia ${zona} (${barrios}). Dinos dónde hay que recoger y dónde entregar, y preparamos una propuesta a tu medida.`,
    puntos: [
      `Servicio en ${zona}`,
      'Viviendas y oficinas',
      'Portes y guardamuebles',
      'Presupuesto sin compromiso',
    ],
    bloques: [
      {
        titulo: `Mudanzas en ${zona}`,
        texto:
          'Organizamos el traslado de tu vivienda u oficina, cuidando tus pertenencias en cada etapa. Si lo necesitas, desmontamos y volvemos a montar los muebles.',
      },
      {
        titulo: 'Portes de muebles',
        texto:
          'Si solo necesitas mover un sofá, un armario o un electrodoméstico, selecciona Porte / transporte e indica los puntos de recogida y entrega.',
      },
      {
        titulo: 'Zonas cercanas',
        texto: `Si estás cerca de ${zona}, en ${cercanos}, también puedes pedir presupuesto.`,
      },
    ],
    faqs: [
      {
        pregunta: `¿Cuánto cuesta una mudanza en ${zona}?`,
        respuesta: PRECIO_TEXTO,
      },
      {
        pregunta: `¿Hacéis portes de un solo mueble en ${zona}?`,
        respuesta:
          'Sí. Selecciona Porte / transporte y explícanos qué necesitas trasladar, dónde hay que recogerlo y dónde entregarlo.',
      },
      { pregunta: '¿Cómo pido presupuesto?', respuesta: SOLICITUD_TEXTO },
    ],
    servicio: {
      nombre: `Mudanzas en ${zona}`,
      descripcion: `Mudanzas de viviendas y oficinas, portes y guardamuebles en ${zona}, Comunidad de Madrid.`,
    },
  };
}

export const PAGINAS: PaginaSeo[] = [
  /* ---------------------------- INICIO ---------------------------- */
  {
    path: '',
    title: 'Mudanzas en Madrid | Económicas y con presupuesto gratis | Mudanzas360',
    description:
      'Mudanzas económicas en Madrid: viviendas, oficinas, portes, montaje de muebles y guardamuebles. También a toda España. Presupuesto gratis y sin compromiso.',
    etiqueta: 'Mudanzas en Madrid',
    h1: { linea: '¡Tu mudanza en Madrid,', resaltado: 'más fácil y económica!' },
    kicker: 'MUDANZAS ECONÓMICAS EN MADRID',
    h2: 'Tu empresa de mudanzas en Madrid capital y la Comunidad',
    intro:
      'Mudanzas360 está en Madrid. Trasladamos viviendas y oficinas, hacemos portes de muebles y nos ocupamos del montaje y del guardamuebles, ajustándonos a lo que necesitas.',
    puntos: [
      'Madrid capital y municipios',
      'Viviendas y oficinas',
      'Portes y guardamuebles',
      'Presupuesto sin compromiso',
    ],
    bloques: [
      {
        titulo: 'Mudanzas de viviendas',
        texto:
          'Organizamos el traslado de pisos y casas cuidando tus pertenencias en cada etapa.',
      },
      {
        titulo: 'Oficinas y locales',
        texto:
          'Trasladamos espacios de trabajo con planificación, para interrumpir lo mínimo posible tu actividad.',
      },
      {
        titulo: 'Portes y guardamuebles',
        texto:
          'Recogida y entrega de muebles, electrodomésticos y objetos voluminosos, y almacenamiento temporal si lo necesitas.',
      },
    ],
    faqs: [
      { pregunta: '¿En qué zonas de Madrid hacéis mudanzas?', respuesta: LOCALIDADES_TEXTO },
      { pregunta: '¿Cuánto cuesta una mudanza en Madrid?', respuesta: PRECIO_TEXTO },
      { pregunta: '¿Cómo pido presupuesto?', respuesta: SOLICITUD_TEXTO },
    ],
    servicio: {
      nombre: 'Mudanzas en Madrid',
      descripcion:
        'Mudanzas de viviendas y oficinas, portes, montaje de muebles y guardamuebles en Madrid.',
    },
  },

  /* ---------------------------- SERVICIOS ---------------------------- */
  {
    path: 'mudanzas-viviendas-madrid',
    title: 'Mudanzas de Pisos y Casas en Madrid | Presupuesto gratis | Mudanzas360',
    description:
      'Mudanzas de pisos y casas en Madrid: desmontaje y montaje de muebles y traslado de tus pertenencias. Presupuesto gratis y sin compromiso.',
    etiqueta: 'Mudanzas de viviendas en Madrid',
    h1: { linea: 'Mudanzas de pisos', resaltado: 'y casas en Madrid' },
    kicker: 'MUDANZAS DE VIVIENDAS',
    h2: 'Traslada tu piso o tu casa en Madrid sin complicaciones',
    intro:
      'Nos cuentas de dónde sales, a dónde vas y qué hay que mover. Organizamos el traslado cuidando tus pertenencias en cada etapa.',
    puntos: [
      'Pisos y casas',
      'Desmontaje y montaje de muebles',
      'Traslado por toda la Comunidad',
      'Presupuesto sin compromiso',
    ],
    bloques: [
      {
        titulo: 'Muebles listos en tu nueva casa',
        texto:
          'Podemos desmontar tus muebles antes del traslado y montarlos de nuevo en tu nuevo domicilio.',
      },
      {
        titulo: 'Qué nos ayuda a preparar la propuesta',
        texto:
          'Los puntos de recogida y entrega, el tipo de vivienda, los accesos, lo que hay que trasladar y la fecha que prefieres.',
      },
    ],
    faqs: [
      { pregunta: '¿Cuánto cuesta la mudanza de un piso en Madrid?', respuesta: PRECIO_TEXTO },
      {
        pregunta: '¿Montáis y desmontáis los muebles?',
        respuesta:
          'Sí. Podemos desmontar tus muebles antes del traslado y montarlos de nuevo en tu nuevo domicilio.',
      },
      { pregunta: '¿Cómo pido presupuesto?', respuesta: SOLICITUD_TEXTO },
    ],
    servicio: {
      nombre: 'Mudanzas de viviendas',
      descripcion: 'Traslado de pisos y casas en Madrid.',
    },
    servicioFormulario: 'Mudanza de vivienda',
  },
  {
    path: 'mudanzas-oficinas-madrid',
    title: 'Mudanzas de Oficinas y Locales en Madrid | Mudanzas360',
    description:
      'Mudanzas de oficinas y locales en Madrid, planificadas para interrumpir lo mínimo posible tu actividad. Presupuesto gratis y sin compromiso.',
    etiqueta: 'Mudanzas de oficinas en Madrid',
    h1: { linea: 'Mudanzas de oficinas', resaltado: 'y locales en Madrid' },
    kicker: 'MUDANZAS DE OFICINAS',
    h2: 'Traslada tu oficina o tu negocio en Madrid con planificación',
    intro:
      'Trasladamos espacios de trabajo con planificación y atención a cada elemento, organizando el traslado para interrumpir lo mínimo posible tu actividad.',
    puntos: [
      'Oficinas y locales',
      'Traslado planificado',
      'Montaje del mobiliario',
      'Presupuesto sin compromiso',
    ],
    bloques: [
      {
        titulo: 'Mínima interrupción',
        texto:
          'Cuéntanos tus horarios y buscamos la forma de organizar el traslado afectando lo menos posible al trabajo de tu equipo.',
      },
      {
        titulo: 'Mobiliario de oficina',
        texto:
          'Desmontamos, trasladamos y volvemos a montar el mobiliario para que todo vuelva a estar en su sitio.',
      },
    ],
    faqs: [
      { pregunta: '¿Cuánto cuesta mudar una oficina en Madrid?', respuesta: PRECIO_TEXTO },
      {
        pregunta: '¿Hacéis mudanzas de locales comerciales?',
        respuesta:
          'Sí. Realizamos mudanzas de oficinas y locales en Madrid, y también fuera de la Comunidad si tu traslado lo requiere.',
      },
      { pregunta: '¿Cómo pido presupuesto?', respuesta: SOLICITUD_TEXTO },
    ],
    servicio: {
      nombre: 'Mudanzas de oficinas',
      descripcion: 'Traslado de oficinas y locales en Madrid.',
    },
    servicioFormulario: 'Mudanza de oficina',
  },
  {
    path: 'portes-madrid',
    title: 'Portes y Transportes en Madrid | Muebles y bultos | Mudanzas360',
    description:
      'Portes en Madrid: recogida y entrega de muebles, electrodomésticos y objetos voluminosos. Cuéntanos qué trasladar y pide presupuesto sin compromiso.',
    etiqueta: 'Portes en Madrid',
    h1: { linea: 'Portes y transportes', resaltado: 'en Madrid' },
    kicker: 'PORTES Y TRANSPORTES',
    h2: 'Transporte de muebles y objetos voluminosos en Madrid',
    intro:
      'Para lo que no cabe en tu coche: recogemos y entregamos muebles, electrodomésticos y bultos, sin necesidad de contratar una mudanza completa.',
    puntos: [
      'Muebles sueltos',
      'Electrodomésticos',
      'Objetos voluminosos',
      'Presupuesto sin compromiso',
    ],
    bloques: [
      {
        titulo: 'Cuando solo es un mueble',
        texto:
          'Selecciona Porte / transporte y explícanos qué necesitas trasladar, dónde hay que recogerlo y dónde entregarlo.',
      },
      {
        titulo: 'Compras y traslados puntuales',
        texto:
          'Un sofá recién comprado, un armario que cambia de casa o un electrodoméstico: indica los accesos y si hay ascensor para valorarlo mejor.',
      },
    ],
    faqs: [
      { pregunta: '¿Cuánto cuesta un porte en Madrid?', respuesta: PRECIO_TEXTO },
      {
        pregunta: '¿Puedo solicitar solo el transporte de un mueble?',
        respuesta:
          'Sí. Selecciona Porte / transporte y explícanos qué necesitas trasladar, dónde hay que recogerlo y dónde entregarlo.',
      },
      { pregunta: '¿Cómo pido presupuesto?', respuesta: SOLICITUD_TEXTO },
    ],
    servicio: {
      nombre: 'Portes y transportes',
      descripcion: 'Recogida y entrega de muebles, electrodomésticos y objetos voluminosos en Madrid.',
    },
    servicioFormulario: 'Porte / transporte',
  },
  {
    path: 'guardamuebles-madrid',
    title: 'Guardamuebles en Madrid | Almacenamiento temporal | Mudanzas360',
    description:
      'Guardamuebles en Madrid: almacenamiento temporal de tus muebles y pertenencias durante una mudanza o una reforma. Pide presupuesto sin compromiso.',
    etiqueta: 'Guardamuebles en Madrid',
    h1: { linea: 'Guardamuebles', resaltado: 'en Madrid' },
    kicker: 'GUARDAMUEBLES',
    h2: 'Almacenamiento temporal para tus muebles en Madrid',
    intro:
      'Si tu nueva casa todavía no está lista o estás de reforma, consulta el almacenamiento temporal de tus muebles y pertenencias.',
    puntos: [
      'Almacenamiento temporal',
      'Combinable con tu mudanza',
      'Durante mudanzas o reformas',
      'Presupuesto sin compromiso',
    ],
    bloques: [
      {
        titulo: 'Entre una casa y otra',
        texto:
          'Selecciona Guardamuebles en el formulario e indícanos qué quieres guardar y durante cuánto tiempo aproximado.',
      },
      {
        titulo: 'Junto con el traslado',
        texto:
          'Si además necesitas la mudanza, cuéntanoslo en la misma solicitud para valorarlo todo a la vez.',
      },
    ],
    faqs: [
      { pregunta: '¿Cuánto cuesta un guardamuebles en Madrid?', respuesta: PRECIO_TEXTO },
      { pregunta: '¿Cómo pido presupuesto?', respuesta: SOLICITUD_TEXTO },
    ],
    servicio: {
      nombre: 'Guardamuebles',
      descripcion: 'Almacenamiento temporal de muebles y pertenencias en Madrid.',
    },
    servicioFormulario: 'Guardamuebles',
  },
  {
    path: 'mudanzas-desde-madrid-toda-espana',
    title: 'Mudanzas desde Madrid a toda España | Mudanzas360',
    description:
      'Mudanzas desde Madrid a Barcelona, Valencia, Sevilla, Málaga, Zaragoza, Bilbao y el resto de España. Consulta tu ruta sin compromiso.',
    etiqueta: 'Mudanzas desde Madrid a toda España',
    h1: { linea: 'Mudanzas desde Madrid', resaltado: 'a toda España' },
    kicker: 'MUDANZAS NACIONALES',
    h2: '¿Te vas de Madrid o vienes a Madrid? Consulta tu ruta',
    intro:
      'Nuestra salida principal está en Madrid y podemos desplazarnos a cualquier punto de España. La disponibilidad y las condiciones dependen del servicio y del recorrido.',
    puntos: [
      'Salida principal: Madrid',
      'Barcelona, Valencia, Sevilla y más',
      'Viviendas y oficinas',
      'Presupuesto sin compromiso',
    ],
    bloques: [
      {
        titulo: 'Algunas rutas',
        texto:
          'Madrid con Barcelona, Valencia, Sevilla, Málaga, Zaragoza, Bilbao o Santiago, entre otros destinos.',
      },
      {
        titulo: 'Qué necesitamos saber',
        texto:
          'Los puntos de recogida y entrega, lo que hay que trasladar y la fecha que prefieres, para confirmarte la disponibilidad de tu ruta.',
      },
    ],
    faqs: [
      { pregunta: '¿Cuánto cuesta una mudanza desde Madrid a otra ciudad?', respuesta: PRECIO_TEXTO },
      {
        pregunta: '¿Llegáis a cualquier punto de España?',
        respuesta:
          'Estamos en Madrid y podemos desplazarnos a cualquier punto de España. La disponibilidad y las condiciones dependerán del servicio y del recorrido.',
      },
      { pregunta: '¿Cómo pido presupuesto?', respuesta: SOLICITUD_TEXTO },
    ],
    servicio: {
      nombre: 'Mudanzas nacionales desde Madrid',
      descripcion: 'Mudanzas de viviendas y oficinas desde Madrid a cualquier punto de España.',
    },
  },

  /* ---------------------------- ZONAS ---------------------------- */
  {
    path: 'mudanzas-getafe',
    ...paginaDeZona(
      'Getafe',
      'Getafe Norte, Sector III, El Bercial, Perales del Río…',
      'Leganés o Fuenlabrada',
    ),
  },
  {
    path: 'mudanzas-alcorcon',
    ...paginaDeZona(
      'Alcorcón',
      'Parque Lisboa, Ensanche Sur, Parque Oeste…',
      'Móstoles o Leganés',
    ),
  },
  {
    path: 'mudanzas-leganes',
    ...paginaDeZona(
      'Leganés',
      'Zarzaquemada, Leganés Norte, Arroyo Culebro…',
      'Getafe o Alcorcón',
    ),
  },
];

export function buscarPagina(slug: unknown): PaginaSeo {
  return PAGINAS.find((p) => p.path === slug) ?? PAGINAS[0];
}

/** Ruta canónica de la página, con barra inicial. */
export function urlDePagina(p: PaginaSeo): string {
  return '/' + p.path;
}

export function crearJsonLd(p: PaginaSeo): object {
  const url = SITE_URL + urlDePagina(p);
  const idNegocio = SITE_URL + '/#organization';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': SITE_URL + '/#website',
        url: SITE_URL + '/',
        name: NEGOCIO.nombre,
        inLanguage: 'es-ES',
        publisher: { '@id': idNegocio },
      },
      {
        '@type': ['MovingCompany', 'LocalBusiness'],
        '@id': idNegocio,
        name: NEGOCIO.nombre,
        alternateName: 'Mudanzas 360',
        url: SITE_URL + '/',
        logo: SITE_URL + '/images/logo.png',
        image: SITE_URL + '/images/logo.png',
        priceRange: '€€',
        // TODO: añadir telephone, streetAddress y postalCode cuando estén confirmados.
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Madrid',
          addressRegion: 'Comunidad de Madrid',
          addressCountry: 'ES',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 40.4168, longitude: -3.7038 },
        areaServed: [
          { '@type': 'City', name: 'Madrid' },
          { '@type': 'AdministrativeArea', name: 'Comunidad de Madrid' },
          { '@type': 'Country', name: 'España' },
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '08:00',
            closes: '20:00',
          },
        ],
      },
      {
        '@type': 'Service',
        name: p.servicio.nombre,
        description: p.servicio.descripcion,
        serviceType: p.servicio.nombre,
        url,
        provider: { '@id': idNegocio },
        areaServed: { '@type': 'Place', name: p.zona ?? 'Madrid' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: p.faqs.map((f) => ({
          '@type': 'Question',
          name: f.pregunta,
          acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
        })),
      },
    ],
  };
}
