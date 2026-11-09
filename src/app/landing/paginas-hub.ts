import { TELEFONO_VISIBLE } from '../datos/contacto';
import { COMO_PEDIR_TEXTO, GrupoFaq, PaginaSeo } from './pagina-seo';
import { RUTAS_NACIONALES, RUTAS_SERVICIOS, RUTAS_ZONAS } from './rutas';

const GRUPOS_FAQ: GrupoFaq[] = [
  {
    titulo: 'Precios',
    faqs: [
      { pregunta: '¿Cuánto cuesta una mudanza?', respuesta: 'Depende del volumen, los accesos, el recorrido y los servicios que necesites. En nuestra página de precios encontrarás los factores que más influyen.' },
      { pregunta: '¿El presupuesto tiene algún coste?', respuesta: 'No. Pedir presupuesto es gratis y no supone ningún compromiso. Podrás decidir con calma cuando recibas la propuesta.' },
      { pregunta: '¿Por qué necesitáis tantos datos para darme un precio?', respuesta: 'Porque la planta, el ascensor, los muebles grandes y el acceso del camión cambian mucho el trabajo. Con datos reales, la propuesta se ajusta mejor y se evitan sorpresas el día de la mudanza.' },
      { pregunta: '¿Sale más barato según el día?', respuesta: 'Los finales de mes, el verano y los fines de semana tienen más demanda. Si tienes flexibilidad con la fecha, indícalo en el formulario y lo tendremos en cuenta.' },
    ],
  },
  {
    titulo: 'Qué incluye',
    faqs: [
      { pregunta: '¿Mis cosas van aseguradas?', respuesta: 'Tu mudanza puede ir cubierta por un seguro. Te indicamos la cobertura incluida al preparar tu presupuesto, para que sepas exactamente qué está protegido.' },
      { pregunta: '¿Tengo que embalarlo todo yo?', respuesta: 'No. Puedes hacerlo por tu cuenta, encargarnos solo lo más delicado o pedirnos que nos ocupemos de todo. Indícalo en los detalles de tu solicitud.' },
      { pregunta: '¿Desmontáis y montáis los muebles?', respuesta: 'Sí, podemos desmontar los muebles que lo requieran y volver a montarlos en destino. Indica en la solicitud cuáles son para calcular el tiempo necesario.' },
      { pregunta: '¿Podéis guardar mis muebles durante un tiempo?', respuesta: 'Sí, podemos valorar un guardamuebles temporal si tus fechas no coinciden o estás de obras. Indica una previsión de tiempo y lo incluimos en la propuesta.' },
      { pregunta: '¿Puedo solicitar solo el transporte de un mueble?', respuesta: 'Sí. Selecciona «Porte / transporte» y explícanos qué necesitas trasladar, dónde hay que recogerlo y dónde entregarlo.' },
    ],
  },
  {
    titulo: 'Mudanzas nacionales',
    faqs: [
      { pregunta: '¿Hacéis mudanzas a cualquier punto de España?', respuesta: 'Estamos en Madrid y podemos desplazarnos a cualquier punto de España. La disponibilidad y las condiciones dependerán del servicio y del recorrido.' },
      { pregunta: '¿Cuánto tarda una mudanza a otra ciudad?', respuesta: 'Depende de la distancia, del volumen y de cómo se organice el transporte. En nuestras páginas de rutas encontrarás tiempos orientativos, y el plazo concreto se indica en tu propuesta.' },
      { pregunta: '¿Tengo que estar presente en la entrega?', respuesta: 'Lo recomendable es que haya alguien para abrir, indicar dónde va cada cosa y revisar la entrega. Si no vas a poder estar, cuéntanoslo y buscamos una forma de coordinarlo.' },
      { pregunta: '¿Qué no conviene llevar en el camión?', respuesta: 'Documentación, dinero, joyas y medicamentos es mejor que viajen contigo. Tampoco deben cargarse productos inflamables, bombonas ni alimentos perecederos.' },
    ],
  },
  {
    titulo: 'Zonas y presupuesto',
    faqs: [
      { pregunta: '¿En qué zonas trabajáis?', respuesta: 'Trabajamos en Madrid capital y en los municipios de la Comunidad, y podemos desplazarnos a cualquier punto de España. Si tu zona no aparece, elige «Otra localidad» en el formulario.' },
      { pregunta: '¿Cómo puedo solicitar un presupuesto?', respuesta: 'Rellena nuestro formulario paso a paso, escríbenos por WhatsApp o llámanos al ' + TELEFONO_VISIBLE + '. Revisaremos la información y hablaremos contigo sobre tu mudanza.' },
      { pregunta: '¿Enviar la solicitud me compromete a contratar?', respuesta: 'No. La solicitud sirve para conocer tu necesidad y preparar una propuesta. No supone ningún compromiso, y podrás decidir con calma cuando la recibas.' },
      { pregunta: '¿Quién se encarga del permiso para aparcar el camión?', respuesta: 'Depende de la calle y del municipio. Revisamos contigo las direcciones para saber si hace falta una autorización y acordar cómo gestionarla antes del día de la mudanza.' },
      { pregunta: '¿Cuándo recibiré respuesta?', respuesta: 'Revisaremos tu solicitud y contactaremos contigo utilizando el medio que hayas indicado.' },
    ],
  },
];

export const PAGINAS_HUB: PaginaSeo[] = [
  /* ---------------------------- SERVICIOS ---------------------------- */
  {
    path: 'servicios',
    tipo: 'hub',
    padre: '',
    title: 'Servicios de mudanzas y portes en Madrid | Mudanzas360',
    description:
      'Mudanzas de viviendas y oficinas, portes, embalaje, montaje de muebles y guardamuebles en Madrid y toda España. Elige lo que necesitas y pide presupuesto.',
    etiqueta: 'Servicios',
    resumen: 'Todo lo que podemos hacer por ti, por separado o combinado.',
    h1: { antes: 'Servicios de', resaltado: 'mudanzas', despues: 'en Madrid' },
    kicker: 'QUÉ PODEMOS HACER POR TI',
    intro:
      'Desde trasladar una vivienda completa hasta llevar ese mueble que no cabe en el coche. Elige solo lo que necesitas y combínalo como prefieras: una única propuesta para toda tu mudanza.',
    foto: 'salon-cajas',
    fotoAlt: 'Salón con cajas de cartón apiladas y plantas, preparado para una mudanza',
    fotoContenido: 'cajas-apiladas',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza',
    fichas: [
      { etiqueta: 'Servicios', valor: 'Mudanzas, portes, embalaje y más' },
      { etiqueta: 'Clientes', valor: 'Particulares y empresas' },
      { etiqueta: 'Zona', valor: 'Madrid y toda España' },
      { etiqueta: 'Presupuesto', valor: 'Gratis y sin compromiso' },
    ],
    secciones: [
      {
        titulo: 'Qué servicio necesitas según tu situación',
        parrafos: [
          'No siempre es evidente por dónde empezar. Una forma sencilla de decidirlo es partir de lo que tienes que mover y de cuánta ayuda quieres. Si tienes que vaciar una casa entera, lo tuyo es una mudanza; si solo son unas pocas piezas, un porte suele ser suficiente y más económico.',
          'A partir de ahí, puedes añadir lo que no quieras hacer por tu cuenta. Hay quien prefiere embalar sus cosas y dejarnos los muebles, y quien nos pide que nos encarguemos de casi todo. Cada servicio tiene su página con más detalles, para que puedas decidir con información.',
        ],
        lista: [
          'Te cambias de piso o de casa: mudanza de vivienda.',
          'Trasladas tu empresa o tu negocio: mudanza de oficina.',
          'Solo tienes uno o varios muebles: porte.',
          'Te vas a otra ciudad: mudanza nacional.',
          'No coinciden las fechas o estás de obras: guardamuebles.',
          'Necesitas proteger objetos delicados: embalaje.',
          'Hay muebles que deben desmontarse: montaje y desmontaje.',
        ],
      },
      {
        titulo: 'Combina los servicios en una sola propuesta',
        parrafos: [
          'Lo más habitual es que una mudanza no sea una sola cosa. Una familia que se traslada a otra ciudad mientras termina la reforma de su nueva casa puede necesitar embalaje, desmontaje, transporte, unos meses de guardamuebles y el montaje final. Organizarlo todo con un mismo equipo evita tener que coordinar a varios proveedores.',
          'En el formulario de presupuesto puedes elegir el servicio principal y añadir en los detalles todo lo demás. Con esa información prepararemos una propuesta que refleje lo que has pedido, y podrás ajustarla antes de decidir. Enviar la solicitud no te compromete a contratar nada.',
        ],
      },
      {
        titulo: 'Dónde trabajamos',
        parrafos: [
          'Nuestra base está en Madrid, y desde aquí atendemos tanto la capital como los municipios de la Comunidad. También hacemos mudanzas a cualquier punto de España, y las condiciones de cada servicio dependen del recorrido. Si quieres saber qué tener en cuenta en tu municipio o en tu ruta, encontrarás guías en nuestras páginas de zonas y de rutas nacionales.',
          'Las rutas más solicitadas son las que unen Madrid con Barcelona, Valencia, Sevilla, Málaga y Alicante. En cada una te contamos las distancias y los tiempos orientativos, los factores que influyen en el precio y los problemas de acceso más habituales al llegar.',
        ],
      },
      {
        titulo: 'Por qué pedir presupuesto con antelación',
        parrafos: [
          'El presupuesto es gratuito y no supone ningún compromiso, y cuanto antes lo solicites, más fácil será conseguir la fecha que prefieres. Los finales de mes, el verano y septiembre son las temporadas de mayor actividad. Además, algunos trámites, como las reservas de espacio en la calle, requieren cierto plazo.',
          'No hace falta tenerlo todo decidido. Rellena lo que sepas: si todavía no conoces la fecha exacta o el tamaño, indícalo y lo vamos concretando. Una descripción sincera de lo que hay que mover es lo que más nos ayuda a darte una propuesta ajustada y a evitar sorpresas.',
        ],
      },
    ],
    grupos: [
      { titulo: 'Nuestros servicios', rutas: RUTAS_SERVICIOS },
      { titulo: 'Rutas nacionales desde Madrid', rutas: RUTAS_NACIONALES },
    ],
    faqs: [
      {
        pregunta: '¿Puedo contratar solo una parte de los servicios?',
        respuesta:
          'Sí. Cada servicio se puede contratar por separado o combinado con otros. Indica en la solicitud qué necesitas y qué prefieres hacer por tu cuenta.',
      },
      {
        pregunta: '¿Qué diferencia hay entre un porte y una mudanza?',
        respuesta:
          'Un porte es un transporte de pocas piezas, como un sofá o unos electrodomésticos. Una mudanza implica vaciar una vivienda u oficina, con más volumen y organización.',
      },
      {
        pregunta: '¿Trabajáis con particulares y con empresas?',
        respuesta:
          'Sí. Atendemos mudanzas de particulares y traslados de oficinas, locales y negocios. Selecciona en el formulario la opción que corresponda a tu caso.',
      },
      { pregunta: '¿Cómo pido presupuesto?', respuesta: COMO_PEDIR_TEXTO },
    ],
    relacionadas: ['precios', 'zonas', 'como-trabajamos', 'preguntas-frecuentes'],
  },

  /* ---------------------------- PRECIOS ---------------------------- */
  // Las tablas (vivienda, m³, extras y rutas) salen de datos/precios.ts, la única fuente de precios.
  {
    path: 'precios',
    tipo: 'hub',
    padre: '',
    title: 'Precios de mudanzas en Madrid 2026 | Mudanzas360',
    description:
      'Precios de mudanzas en Madrid en 2026: por tipo de vivienda, por m³, servicios extra y rutas nacionales. Qué encarece una mudanza y cómo ahorrar.',
    etiqueta: 'Precios',
    resumen: 'Tablas de precios por vivienda, m³, extras y rutas, y qué influye en el coste.',
    h1: { antes: 'Precios de', resaltado: 'mudanzas', despues: 'en Madrid 2026' },
    kicker: 'PRECIOS 2026',
    intro:
      'Aquí tienes nuestras tablas de precios de referencia para 2026: por tipo de vivienda, por metro cúbico, de los servicios extra y de las rutas nacionales más habituales. Debajo te explicamos de dónde salen y qué hace que una mudanza cueste más o menos.',
    foto: 'cajas-apiladas',
    fotoAlt: 'Cajas de cartón apiladas sobre palés, listas para calcular el volumen de una mudanza',
    fotoContenido: 'embalaje-material',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza',
    fichas: [
      { etiqueta: 'Precios', valor: 'De referencia, orientativos' },
      { etiqueta: 'Depende de', valor: 'Volumen, accesos, distancia y fecha' },
      { etiqueta: 'Calculadora', valor: 'Estimación con tus datos' },
      { etiqueta: 'Presupuesto', valor: 'Gratis y sin compromiso' },
    ],
    secciones: [
      {
        titulo: 'De dónde salen estos precios',
        parrafos: [
          'Los precios de esta página son nuestras tarifas de referencia para 2026. Salen de lo que realmente cuesta hacer una mudanza en Madrid: las horas de trabajo del equipo, el vehículo necesario para el volumen, el material de embalaje y, en las rutas nacionales, el combustible, los peajes y el tiempo de conducción. No son precios de captación que luego cambian, sino los que usamos para preparar los presupuestos.',
          'Las tablas se organizan como se suele plantear una mudanza. Primero, el tipo de vivienda, con el rango de metros cúbicos que solemos encontrar en cada una. Después, el precio por metro cúbico, útil cuando ya conoces tu volumen. Luego, los servicios extra que se suman al traslado, como el embalaje, el montaje o el elevador. Por último, las rutas desde Madrid a las ciudades a las que más nos piden ir.',
          'Son precios orientativos, no una oferta cerrada. El precio de tu mudanza se confirma en una propuesta personalizada, que tiene en cuenta tus direcciones, tus plantas y lo que hay que mover. Si en alguna tabla ves «A consultar», significa que ese precio depende tanto de cada caso que preferimos dártelo en el presupuesto en lugar de publicar una cifra que no te sirva.',
        ],
      },
      {
        titulo: 'Cómo leer las tablas',
        parrafos: [
          'El precio por tipo de vivienda es el punto de partida para una mudanza dentro de Madrid y su área metropolitana, con accesos normales: ascensor en el que caben las cajas y el vehículo cerca del portal. Si tu caso se sale de lo habitual, porque hay muchas plantas sin ascensor o la calle no permite parar, el precio se ajusta con los extras.',
          'El precio por metro cúbico sirve para afinar cuando tu vivienda tiene más o menos cosas de lo normal. Un piso de tres habitaciones con poco mobiliario puede ocupar el volumen de uno de dos, y un piso de dos con trastero lleno puede acercarse al de uno de cuatro. Si quieres estimar tu volumen, sigue nuestra guía para calcular los metros cúbicos de tu casa.',
          'Las rutas nacionales indican la distancia por carretera, el tiempo de conducción orientativo y el precio según el tamaño de la mudanza. Al tiempo de conducción hay que sumar la carga y la descarga, y en distancias largas, los descansos obligatorios del conductor.',
        ],
      },
      {
        titulo: 'Qué encarece una mudanza en Madrid',
        parrafos: [
          'Casi todo lo que influye en el precio se reduce a dos cosas: cuánto hay que mover y cuánto cuesta moverlo. Estos son los factores que más pesan en una mudanza en Madrid, de mayor a menor importancia en la mayoría de los casos.',
        ],
        subsecciones: [
          {
            titulo: 'El volumen',
            texto:
              'Es el factor principal. Determina el tamaño del vehículo, el número de viajes y las horas del equipo. Cada metro cúbico que no se mueve es dinero que no pagas, por eso la forma más sencilla de ahorrar es llevarse menos.',
          },
          {
            titulo: 'La distancia',
            texto:
              'Dentro de Madrid pesa poco, porque el tiempo se va en cargar y descargar. En una mudanza nacional entran en juego el combustible, los peajes, las horas de conducción y, si el viaje no se hace en el día, la pernocta del equipo.',
          },
          {
            titulo: 'Los accesos y la planta',
            texto:
              'Un quinto sin ascensor puede duplicar el tiempo de carga frente a un bajo. Un ascensor pequeño ayuda con las cajas, pero no con un armario o un sofá. También cuenta la distancia entre el portal y el vehículo: en calles peatonales o con poco sitio, cada viaje se alarga.',
          },
          {
            titulo: 'La fecha',
            texto:
              'Los finales de mes, el verano, septiembre y los fines de semana concentran la demanda. Si puedes elegir un día entre semana a mitad de mes, tendrás más disponibilidad.',
          },
          {
            titulo: 'El permiso de carga y descarga',
            texto:
              'En muchas calles de Madrid el camión solo puede parar junto al portal si se ha reservado espacio en la vía pública. Es un trámite municipal: consulta en el Ayuntamiento de Madrid, o en el de tu municipio, cómo solicitarlo y con qué antelación. Sin reserva, el vehículo puede tener que quedarse lejos y la mudanza dura más.',
          },
        ],
      },
      {
        titulo: 'Otros factores que conviene tener en cuenta',
        parrafos: [
          'El desmontaje y el montaje de muebles suman tiempo: un armario de tres puertas o una cama con canapé requieren desmontarse para pasar por puertas y escaleras, y volver a montarse en destino. Si nos lo encargas, se incluye en la propuesta como un servicio más.',
          'El embalaje también cuenta. Puedes hacerlo tú, encargarnos solo lo frágil o pedirnos que lo embalemos todo. El material, cajas, papel, burbuja y mantas, se puede incluir o comprar por tu cuenta. Los objetos especiales, como pianos, obras de arte o muebles antiguos, piden una protección específica que valoramos aparte.',
          'Por último, la zona de bajas emisiones de Madrid condiciona qué vehículos pueden circular por determinadas áreas, y las comunidades de vecinos pueden tener horarios o normas para mudanzas. No suelen encarecer mucho, pero sí obligan a planificar mejor.',
        ],
        lista: [
          'Muebles que hay que desmontar y montar.',
          'Embalaje total, parcial o por tu cuenta.',
          'Objetos frágiles, valiosos o muy pesados.',
          'Elevador exterior si los muebles no caben por la escalera.',
          'Guardamuebles si las fechas de salida y entrada no coinciden.',
        ],
      },
      {
        titulo: 'Consejos para ahorrar en tu mudanza',
        parrafos: [
          'El ahorro más grande está antes de pedir el presupuesto: deshazte de lo que no vayas a usar. Vende, regala o recicla muebles, ropa y objetos que llevas años sin tocar. Además de pagar menos por la mudanza, llegarás a una casa más ordenada.',
          'Si tienes tiempo, embala tú las cosas que no son frágiles: ropa, libros, juguetes, ropa de cama. Deja para el equipo lo delicado y los muebles. Y si puedes elegir la fecha, evita el último día del mes y los fines de semana de verano.',
          'Da información exacta. Un presupuesto basado en datos incompletos puede cambiar el mismo día, cuando aparece el trastero lleno que nadie había mencionado. Indica las plantas, el ascensor, los muebles más grandes y si hay algo especial. Cuanto más precisa sea la solicitud, más ajustado será el precio.',
          'Para mudanzas muy pequeñas, valora si te basta con un porte o con una furgoneta con conductor. Y si te mudas por una reforma, compara el coste de un guardamuebles temporal con el de hacer dos mudanzas completas.',
        ],
        lista: [
          'Haz limpieza antes de pedir precio, no después.',
          'Embala tú lo que no es frágil.',
          'Elige un día entre semana a mitad de mes si puedes.',
          'Pide la reserva de espacio para el camión con antelación.',
          'Pregunta qué está incluido y qué se cobraría aparte.',
        ],
      },
      {
        titulo: 'Cómo comparar precios de mudanzas',
        parrafos: [
          'Comparar presupuestos es sensato, siempre que compares lo mismo. Antes de quedarte con el más barato, comprueba si incluye las plantas sin ascensor, el desmontaje y el montaje, el material de embalaje y, en las mudanzas nacionales, los peajes. Pregunta también qué ocurre si el volumen real es mayor que el previsto.',
          'Fíjate en quién hace el trabajo. Algunas plataformas te dan un precio y luego subcontratan la mudanza a otra empresa. Con nosotros hablas directamente con quien hace tu mudanza, sin intermediarios: quien te da el presupuesto es quien organiza el día y responde de él.',
        ],
      },
      {
        titulo: 'Cómo obtener tu precio exacto',
        parrafos: [
          'Si quieres una primera estimación, prueba nuestra calculadora de mudanza: elige el tipo de vivienda, el destino, las plantas y los extras, y verás un rango de precio con las tarifas de esta página. Desde la propia calculadora puedes pedir presupuesto con esos datos ya rellenados.',
          'Para el precio definitivo, rellena el formulario de presupuesto. Te pedimos el recorrido, el tamaño aproximado, las plantas y el ascensor, y la fecha. Revisamos tu solicitud y te enviamos una propuesta con todo lo que incluye. Pedir presupuesto es gratis y no te compromete a nada.',
        ],
      },
      {
        titulo: "Precios por tipo de servicio",
        parrafos: [
          "Además de la mudanza completa de una vivienda, tenemos servicios para casos más pequeños o más específicos. Los portes sirven para mover un mueble, un electrodoméstico o unas pocas cajas, y la furgoneta con conductor para compras grandes o traslados en los que tú ayudas a cargar. Las mudanzas pequeñas están pensadas para estudios, habitaciones o pisos con pocos muebles.",
          "Para empresas, las mudanzas de oficina se presupuestan según el número de puestos, el mobiliario y los horarios en los que se puede trabajar. El guardamuebles se paga al mes según el espacio que ocupen tus cosas, y puede combinarse con la recogida y la entrega. Cada página de servicio muestra su precio de partida cuando está disponible.",
        ],
      },
      {
        titulo: "Precios de mudanzas nacionales desde Madrid",
        parrafos: [
          "En una mudanza a otra provincia, el precio depende del volumen y de la distancia, pero también de cómo se organiza el transporte. En un servicio exclusivo, el vehículo va directo de tu casa a la nueva, con fechas más cerradas. En un servicio de grupaje, tu carga comparte vehículo con la de otros clientes que van en la misma dirección, lo que puede abaratar el precio a cambio de un plazo de entrega más flexible.",
          "En la tabla de rutas tienes las distancias y los tiempos de conducción orientativos desde Madrid a Barcelona, Valencia, Sevilla, Málaga y Alicante, y el precio por tamaño de mudanza. Si tu destino es otro, pídenos presupuesto indicando la ciudad: lo calculamos con los mismos criterios.",
          "Ten en cuenta que el tiempo de conducción de un camión es mayor que el de un turismo, y que en trayectos largos el conductor debe hacer los descansos que marca la normativa. Por eso el plazo de entrega se confirma siempre en el presupuesto.",
        ],
      },
      {
        titulo: "Qué incluye y qué no incluye un precio de mudanza",
        parrafos: [
          "En cada propuesta detallamos qué está incluido: el personal, el vehículo, el traslado, la carga y la descarga, y los servicios que hayas pedido, como el embalaje o el montaje. Lo que no se haya pedido, como un elevador exterior o un guardamuebles, no aparece, y si lo necesitas se suma como extra.",
          "Si durante la preparación cambia algo, porque aparece más volumen o cambia la planta de destino, revisamos la propuesta contigo antes del día de la mudanza. El objetivo es que el precio que aceptas sea el que pagas, sin sorpresas el mismo día.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta una mudanza en Madrid en 2026?',
        respuesta:
          'Depende sobre todo del volumen, de las plantas y de los servicios. En las tablas de esta página tienes nuestros precios de referencia por tipo de vivienda, y la calculadora te da una estimación con tus datos.',
      },
      {
        pregunta: '¿Estos precios son definitivos?',
        respuesta:
          'No. Son orientativos. El precio de tu mudanza se calcula con tus datos y se confirma en una propuesta personalizada.',
      },
      {
        pregunta: '¿Qué significa «A consultar» en una tabla?',
        respuesta:
          'Que ese precio depende tanto de cada caso que preferimos dártelo en el presupuesto en lugar de publicar una cifra que no te sirva.',
      },
      {
        pregunta: '¿Cuánto cuesta una mudanza de Madrid a otra ciudad?',
        respuesta:
          'Depende de la distancia y del volumen. En la tabla de rutas tienes la distancia, el tiempo de conducción y el precio por tamaño para los destinos más habituales.',
      },
      {
        pregunta: '¿Es más cara una mudanza sin ascensor?',
        respuesta:
          'Sí, porque requiere más tiempo y esfuerzo. En la tabla de extras verás cómo se suma el recargo por planta sin ascensor.',
      },
      {
        pregunta: '¿El presupuesto tiene algún coste?',
        respuesta:
          'No. Pedir presupuesto es gratis y no te compromete a contratar. Rellena el formulario y nos pondremos en contacto contigo.',
      },
      {
        pregunta: '¿Qué ocurre si el volumen cambia con respecto a lo que indiqué?',
        respuesta:
          'Avísanos en cuanto lo sepas para revisar la propuesta. Cuanto más exactos sean los datos del principio, menos probable será que haya que modificarla.',
      },
      {
        pregunta: '¿Necesito permiso para aparcar el camión de la mudanza?',
        respuesta:
          'En muchas calles conviene reservar espacio en la vía pública. Consulta el trámite en tu ayuntamiento y lo coordinamos contigo.',
      },
      {
        pregunta: "¿Puedo pedir presupuesto solo para una parte de la mudanza?",
        respuesta: "Sí. Puedes pedir solo el transporte, solo el embalaje o solo el montaje, y combinar servicios como prefieras. Indícalo en la solicitud.",
      },
    ],
    relacionadas: ['guias/cuanto-cuesta-una-mudanza-en-madrid', 'guias/como-calcular-m3-mudanza', 'mudanzas-pisos-madrid', 'mudanzas-nacionales'],
  },

  /* ---------------------------- ZONAS ---------------------------- */
  {
    path: 'zonas',
    tipo: 'hub',
    padre: '',
    title: 'Zonas de trabajo: Madrid y toda España | Mudanzas360',
    description:
      'Mudanzas en Madrid capital, Alcalá de Henares, Getafe, Móstoles, Alcobendas, Las Rozas y el resto de la Comunidad, y rutas nacionales a toda España.',
    etiqueta: 'Zonas',
    resumen: 'Municipios de Madrid y rutas nacionales, con lo que hay que saber en cada caso.',
    h1: { antes: 'Zonas donde hacemos', resaltado: 'mudanzas', despues: '' },
    kicker: 'MADRID Y TODA ESPAÑA',
    intro:
      'Estamos en Madrid, y trabajamos tanto en la capital y sus municipios como en cualquier punto de España. Consulta aquí qué tener en cuenta en cada zona antes de tu mudanza.',
    foto: 'madrid',
    fotoAlt: 'Camión de mudanzas descargando cajas en una zona residencial al atardecer',
    fotoContenido: 'furgoneta-calle',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza',
    fichas: [
      { etiqueta: 'Base', valor: 'Madrid' },
      { etiqueta: 'Comunidad', valor: 'Capital y municipios' },
      { etiqueta: 'Nacional', valor: 'Cualquier punto de España' },
      { etiqueta: 'Presupuesto', valor: 'Gratis y sin compromiso' },
    ],
    secciones: [
      {
        titulo: 'Por qué importa la zona en una mudanza',
        parrafos: [
          'Dos pisos idénticos pueden requerir trabajos muy distintos por el simple hecho de estar en lugares diferentes. Una calle peatonal, un edificio sin ascensor o una urbanización con vigilancia cambian la forma de organizar la carga, el vehículo más adecuado y el tiempo que hay que reservar.',
          'Por eso hemos preparado páginas sobre los municipios y rutas que más nos consultan, con información sobre sus accesos, el aparcamiento y el tipo de vivienda habitual. No sustituyen a una revisión de tu dirección, pero sí te ayudan a anticipar lo que conviene prever.',
        ],
      },
      {
        titulo: 'Madrid capital y Comunidad de Madrid',
        parrafos: [
          'Atendemos la capital y los municipios de la Comunidad. La zona norte, con Alcobendas y San Sebastián de los Reyes, combina viviendas y grandes oficinas junto a la A-1. El oeste, con Las Rozas, Majadahonda o Pozuelo, tiene muchos chalets y urbanizaciones. El sur, con Getafe, Móstoles, Alcorcón, Leganés o Fuenlabrada, reúne barrios muy poblados y bloques de varias alturas, y el corredor del Henares, con Alcalá, Torrejón y Coslada, está muy ligado a la A-2.',
          'Si tu municipio no aparece todavía entre nuestras guías, no significa que no podamos ir. Elige «Otra localidad» en el formulario, escribe el nombre y estudiaremos tu caso sin compromiso. Lo mismo ocurre con los pueblos más alejados de la sierra o del sur de la región, donde conviene mirar el acceso con algo más de calma.',
        ],
      },
      {
        titulo: 'Rutas nacionales desde Madrid',
        parrafos: [
          'Madrid es un punto de partida excelente para una mudanza nacional, ya que las principales autovías del país salen de la capital. Eso permite llegar a todas las provincias con trayectos bien conectados. Tenemos guías sobre las rutas más frecuentes: Barcelona, Valencia, Sevilla, Málaga y Alicante.',
          'En cada una encontrarás la distancia aproximada, los tiempos orientativos, los factores que influyen en el precio y los problemas de acceso más habituales al llegar a la ciudad. Si tu destino es otro, cuéntanoslo en el formulario y buscaremos la manera de organizarlo.',
        ],
      },
      {
        titulo: 'Qué nos ayuda a valorar tu zona',
        parrafos: [
          'Para decirte algo útil, necesitamos conocer las dos direcciones. Con ellas podemos revisar la anchura de la calle, las posibles restricciones de acceso y las rutas posibles. También nos sirve que nos cuentes lo que ya sepas de tu edificio, como si tiene garaje, muelle o conserjería.',
        ],
        lista: [
          'Calle y número de las direcciones de recogida y entrega.',
          'Planta y disponibilidad de ascensor en cada una.',
          'Normas de la comunidad o de la urbanización, si las conoces.',
          'Si el vehículo puede parar en la puerta o hay que caminar un tramo.',
          'Cualquier limitación de horarios o de fechas.',
        ],
      },
    ],
    grupos: [
      { titulo: 'Municipios y distritos de Madrid', rutas: ['mudanzas-madrid', ...RUTAS_ZONAS] },
      { titulo: 'Rutas nacionales desde Madrid', rutas: RUTAS_NACIONALES },
    ],
    faqs: [
      {
        pregunta: '¿En qué zonas trabajáis?',
        respuesta:
          'Estamos en Madrid y trabajamos en la capital y en los municipios de la Comunidad. También podemos desplazarnos a cualquier punto de España, según el servicio y el recorrido.',
      },
      {
        pregunta: '¿Podéis venir a mi municipio si no aparece en la lista?',
        respuesta:
          'Probablemente sí. Elige «Otra localidad» en el formulario, escribe el nombre de tu municipio y estudiaremos el servicio sin ningún compromiso.',
      },
      {
        pregunta: '¿Hacéis mudanzas que empiezan fuera de Madrid?',
        respuesta:
          'Madrid es nuestro punto de salida principal, aunque podemos valorar otros recorridos. Indica las direcciones de recogida y de entrega en tu solicitud para que lo revisemos.',
      },
      {
        pregunta: '¿La zona influye en el precio de la mudanza?',
        respuesta:
          'Sí, sobre todo por los accesos y las distancias. Una calle con difícil aparcamiento puede alargar el trabajo, igual que un trayecto más largo. Lo tenemos en cuenta en tu propuesta.',
      },
    ],
    relacionadas: ['servicios', 'mudanzas-nacionales', 'precios', 'como-trabajamos'],
  },

  /* ---------------------------- CÓMO TRABAJAMOS ---------------------------- */
  {
    path: 'como-trabajamos',
    tipo: 'hub',
    padre: '',
    title: 'Cómo trabajamos: tu mudanza paso a paso | Mudanzas360',
    description:
      'Así organizamos tu mudanza en Mudanzas360: de la solicitud y la revisión a la propuesta y el día del traslado. Pide tu presupuesto gratis y sin compromiso.',
    etiqueta: 'Cómo trabajamos',
    resumen: 'De la solicitud al día de la mudanza: qué ocurre en cada momento.',
    h1: { antes: 'Así funciona tu', resaltado: 'mudanza', despues: 'con Mudanzas360' },
    kicker: 'ASÍ DE FÁCIL',
    intro:
      'Una mudanza genera muchas dudas, y gran parte del estrés viene de no saber qué ocurrirá después. Por eso te explicamos qué pasa desde que nos escribes hasta que todo está en su sitio.',
    foto: 'furgoneta-calle',
    fotoAlt: 'Camión pequeño de mudanzas en una calle arbolada',
    fotoContenido: 'salon-cajas',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza',
    fichas: [
      { etiqueta: 'Solicitud', valor: 'En menos de un minuto' },
      { etiqueta: 'Presupuesto', valor: 'Por teléfono o WhatsApp' },
      { etiqueta: 'Día y hora', valor: 'Coordinados contigo' },
      { etiqueta: 'Al terminar', valor: 'Todo revisado' },
    ],
    pasos: [
      { titulo: 'Solicitud', texto: 'Rellenas el formulario de cinco pasos o nos escribes por WhatsApp. Nos cuentas el servicio, el recorrido, el tamaño de la vivienda y la fecha.', icono: 'solicitud', foto: 'caja-mesa' },
      { titulo: 'Presupuesto', texto: 'Revisamos tu caso y te damos una propuesta personalizada por teléfono o WhatsApp, en la que te explicamos qué incluye.', icono: 'presupuesto', foto: 'cajas-apiladas' },
      { titulo: 'Fecha', texto: 'Si la propuesta te encaja, coordinamos contigo el día y la franja horaria, y revisamos los accesos y los permisos que puedan hacer falta.', icono: 'fecha', foto: 'furgoneta-blanca' },
      { titulo: 'Embalaje y carga', texto: 'Protegemos lo acordado, desmontamos los muebles que lo requieran y cargamos todo en el orden adecuado para la descarga.', icono: 'embalaje', foto: 'embalaje-material' },
      { titulo: 'Transporte con seguro', texto: 'Trasladamos tus pertenencias hasta el destino. Te indicamos la cobertura del seguro al preparar tu presupuesto, para que sepas qué está protegido.', icono: 'transporte', foto: 'camion-autovia' },
      { titulo: 'Descarga y montaje', texto: 'Dejamos cada cosa en su sitio según tus indicaciones, montamos los muebles acordados y revisamos contigo que todo esté correcto.', icono: 'montaje', foto: 'muebles' },
    ],
    secciones: [
      {
        titulo: 'Antes de nada: nos cuentas tu mudanza',
        parrafos: [
          'Todo empieza con un formulario de cinco pasos que puedes abrir desde cualquier página. Primero nos dices qué servicio necesitas; luego, el recorrido; después, el tipo de vivienda, las plantas, el ascensor y la fecha; a continuación, cualquier detalle importante, y por último, tus datos para que podamos contactarte.',
          'No tienes que ser un experto ni tener resuelto cada detalle. Si te falta un dato, cuéntanos lo que sepas y lo concretamos más tarde. Enviar la solicitud no te compromete, y tus datos solo se utilizan para gestionar el presupuesto.',
        ],
      },
      {
        titulo: 'Revisamos tu caso y preparamos la propuesta',
        parrafos: [
          'Con la información recibida revisamos el volumen, el recorrido y los accesos. Es el momento de detectar lo que puede complicar el día de la mudanza, como un armario que no pasa por la escalera o una calle en la que el camión no puede detenerse. Si hace falta algún dato más, te contactamos para aclararlo.',
          'Después recibirás una propuesta adaptada a lo que has pedido, en la que te explicamos qué incluye, para que sepas qué esperar y puedas comparar con tranquilidad. Si cambia algo por tu parte, se puede ajustar antes de que decidas.',
        ],
      },
      {
        titulo: 'Lo que puedes ir haciendo en las semanas previas',
        parrafos: [
          'Una vez fijada la fecha, una organización sencilla marca la diferencia. Estas tareas te ayudan a llegar tranquilo al día de la mudanza y a que el trabajo fluya desde el primer momento:',
        ],
        lista: [
          'Revisa lo que no vas a llevarte y deshazte de ello con tiempo.',
          'Si embalas por tu cuenta, empieza por lo que menos usas y etiqueta cada caja.',
          'Comunica la fecha a las dos comunidades de vecinos y pregunta por sus normas.',
          'Comprueba si necesitas un permiso para reservar espacio en la calle.',
          'Gestiona el cambio de suministros y el de tu dirección en los servicios que uses.',
          'Prepara una bolsa con lo imprescindible para las primeras horas.',
        ],
      },
      {
        titulo: 'El día de la mudanza y la entrega',
        parrafos: [
          'Te avisaremos de cualquier cambio de horario. Al llegar, repasamos contigo lo acordado y empezamos por lo que corresponda: protección, desmontaje y carga, en el orden que permita que todo salga bien ordenado. Conviene que estés presente o haya alguien que pueda responder a las dudas durante el trabajo.',
          'En la vivienda de destino, cada cosa se deja en su sitio siguiendo tus indicaciones, y los muebles que hayas contratado se vuelven a montar. Antes de terminar, repasa con nosotros la entrega y dinos si hay algo que comentar: es mejor resolver las dudas en ese momento, con todo a la vista.',
          'Un consejo final: antes de que empiece la descarga, decide dónde irán los muebles grandes de cada habitación. Mover un armario una vez montado cuesta mucho más que colocarlo bien a la primera.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto tiempo se tarda en rellenar el formulario?',
        respuesta:
          'Son cinco pasos rápidos. Solo tienes que tener a mano las dos direcciones, las plantas, el tamaño aproximado de la vivienda y la fecha que te interesa.',
      },
      {
        pregunta: '¿Cuándo recibiré respuesta?',
        respuesta:
          'Revisaremos tu solicitud y contactaremos contigo utilizando el medio que hayas indicado para resolver lo que falte y prepararte una propuesta.',
      },
      {
        pregunta: '¿Mis pertenencias están aseguradas?',
        respuesta:
          'Tu mudanza puede ir cubierta por un seguro. Te indicamos la cobertura incluida al preparar tu presupuesto, para que puedas valorar si necesitas algo más.',
      },
      {
        pregunta: '¿Puedo cambiar la fecha después de confirmar la mudanza?',
        respuesta:
          'Avísanos en cuanto lo sepas y revisaremos la disponibilidad. Cuanta más antelación tengamos, más fácil será encontrar otra fecha que te venga bien.',
      },
    ],
    relacionadas: ['servicios', 'preguntas-frecuentes', 'precios', 'mudanzas-pisos-madrid'],
  },

  /* ---------------------------- PREGUNTAS FRECUENTES ---------------------------- */
  {
    path: 'preguntas-frecuentes',
    tipo: 'hub',
    padre: '',
    title: 'Preguntas frecuentes sobre mudanzas | Mudanzas360',
    description:
      'Resolvemos tus dudas sobre mudanzas: presupuesto, precios, seguro, embalaje, fechas, permisos y guardamuebles. Si no encuentras la tuya, pregúntanos.',
    etiqueta: 'Preguntas frecuentes',
    resumen: 'Respuestas a las dudas más habituales antes de una mudanza.',
    h1: { antes: 'Preguntas', resaltado: 'frecuentes', despues: 'sobre mudanzas' },
    kicker: '¿TIENES DUDAS?',
    intro:
      'Hemos reunido las dudas que surgen más a menudo antes de una mudanza. Si la tuya no aparece aquí, escríbela en el último paso del formulario y te responderemos.',
    foto: 'caja-mesa',
    fotoAlt: 'Persona preparando una caja de cartón sobre una mesa',
    fotoContenido: 'cajas-apiladas',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza',
    fichas: [
      { etiqueta: 'Temas', valor: 'Precios, servicios, rutas y zonas' },
      { etiqueta: 'Si falta tu duda', valor: 'Pregúntanos por WhatsApp' },
      { etiqueta: 'Teléfono', valor: TELEFONO_VISIBLE },
      { etiqueta: 'Presupuesto', valor: 'Gratis y sin compromiso' },
    ],
    secciones: [
      {
        titulo: 'Antes de pedir presupuesto',
        parrafos: [
          'Lo más útil es tener claro qué vas a llevarte. Date un paseo por tu casa con una libreta, incluyendo el trastero y el garaje, y anota los muebles grandes y cualquier objeto que merezca un cuidado especial. Con eso, las dos direcciones y las plantas de cada vivienda, ya tienes lo necesario para enviar la solicitud.',
          'Si estás comparando empresas, pide a todas el mismo servicio: las diferencias de precio muchas veces se explican porque una incluye desmontaje y embalaje y otra no. Y si tus fechas pueden moverse un poco, indícalo; puede darte más opciones.',
        ],
      },
      {
        titulo: 'Cuánta antelación necesito',
        parrafos: [
          'No hay un plazo mínimo universal, pero cuanto antes, mejor. Para una mudanza local habitual suele ser suficiente con un par de semanas, si no coincide con un final de mes o la temporada alta. En una mudanza nacional, de oficina o en verano, conviene empezar antes para tener margen con los permisos y los accesos.',
          'Si te corre prisa, escríbenos de todos modos e indica la fecha. Revisaremos si hay disponibilidad y te lo diremos sin compromiso. Lo importante es que seamos realistas con el tiempo necesario para hacerlo bien.',
        ],
      },
      {
        titulo: 'Qué no conviene meter en el camión',
        parrafos: [
          'Hay cosas que deben viajar contigo o buscar otra solución. No solo se trata de seguridad: algunos objetos son insustituibles y no merece la pena exponerlos a un traslado sin necesidad. Ten esta lista en cuenta cuando prepares las cajas:',
        ],
        lista: [
          'Documentación, dinero, joyas y otros objetos de valor.',
          'Medicamentos y lo que necesites a diario durante esos días.',
          'Productos inflamables, gases o bombonas y productos químicos peligrosos.',
          'Alimentos perecederos y plantas en trayectos largos.',
          'Dispositivos y discos duros con datos importantes, mejor contigo.',
        ],
      },
      {
        titulo: 'Si tienes más dudas',
        parrafos: [
          'Cada mudanza tiene sus particularidades, y es normal que te surjan preguntas que no aparecen aquí. Para saber más sobre un aspecto concreto, puedes visitar nuestras páginas de servicios, de precios y de cómo trabajamos, o las guías sobre tu municipio o tu ruta nacional, donde detallamos lo que conviene prever en cada caso.',
          'Y si prefieres resolverlo directamente, abre el formulario y utiliza el apartado de detalles para explicarnos tu situación, por poco común que te parezca. Revisaremos lo que nos cuentes y te responderemos para aclarar tus dudas. Solicitar información no te compromete a contratar.',
        ],
      },
    ],
    faqs: GRUPOS_FAQ.flatMap((g) => g.faqs),
    gruposFaq: GRUPOS_FAQ,
    relacionadas: ['servicios', 'precios', 'como-trabajamos', 'zonas'],
  },
];
