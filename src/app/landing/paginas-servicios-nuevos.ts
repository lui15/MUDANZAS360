import { PaginaSeo } from './pagina-seo';

/**
 * Servicios añadidos para competir en búsquedas concretas.
 * Confirmados: cada uno tiene su tarifa en datos/precios.ts. Si alguno deja de ofrecerse, quita su
 * ruta de rutas.ts y su objeto de esta lista.
 */
export const PAGINAS_SERVICIOS_NUEVOS: PaginaSeo[] = [
  /* ---------------------------- MUDANZAS BARATAS ---------------------------- */
  {
    path: 'mudanzas-baratas-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    confirmado: true,
    title: 'Mudanzas baratas en Madrid con precio cerrado | Mudanzas360',
    description:
      'Mudanzas baratas en Madrid: cómo ajustar el precio sin perder cuidado, qué puedes hacer tú y qué nos dejas. Trato directo y presupuesto gratis.',
    etiqueta: 'Mudanzas baratas en Madrid',
    resumen: 'Cómo pagar menos por tu mudanza sin renunciar a que salga bien.',
    h1: { antes: 'Mudanzas', resaltado: 'baratas', despues: 'en Madrid, sin sorpresas' },
    kicker: 'MUDANZAS ECONÓMICAS',
    intro:
      'Una mudanza barata no es la que da el número más bajo en una web, sino la que no cambia el día del traslado. Te ayudamos a recortar lo que sobra y tienes un solo interlocutor.',
    foto: 'cajas-apiladas',
    fotoAlt: 'Cajas de cartón apiladas sobre palés, preparadas para una mudanza económica',
    fotoContenido: 'salon-cajas',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza económica en Madrid',
    fichas: [
      { etiqueta: 'Trato', valor: 'Un solo interlocutor' },
      { etiqueta: 'Ahorro', valor: 'Eliges qué haces tú' },
      { etiqueta: 'Fechas', valor: 'Más flexibles, más opciones' },
      { etiqueta: 'Presupuesto', valor: 'Gratis y sin compromiso' },
    ],
    secciones: [
      {
        titulo: 'Barato de verdad: precio cerrado con datos reales',
        parrafos: [
          'Muchas comparativas compiten por quién enseña la cifra más baja, y esa cifra se calcula con datos incompletos. Cuando el día de la mudanza aparece un armario que nadie había contado o una cuarta planta sin ascensor, el precio sube. Lo realmente económico es un presupuesto ajustado a lo que hay que mover.',
          'Con nosotros no hay un comparador en medio: tu solicitud llega a quien va a hacer la mudanza, que puede preguntarte lo que falte y darte una propuesta realista. Así no pagas la comisión de una plataforma ni descubres condiciones nuevas el último día.',
        ],
      },
      {
        titulo: 'Lo que más abarata una mudanza',
        parrafos: ['El volumen y las horas de trabajo son la base del precio. Todo lo que reduzca uno de los dos se nota en el presupuesto:'],
        lista: [
          'Llevarte menos: vende, regala o recicla antes de pedir precio.',
          'Embalar tú las cajas de ropa, libros y objetos que no son frágiles.',
          'Desmontar los muebles sencillos que sepas desmontar con seguridad.',
          'Elegir un día entre semana a mitad de mes, si tus fechas lo permiten.',
          'Tener los accesos preparados: ascensor reservado y permiso de carga, si hace falta.',
        ],
      },
      {
        titulo: 'Dónde no conviene recortar',
        parrafos: [
          'Hay ahorros que salen caros. Los muebles de tablero que se arrastran por la escalera se rompen, las cajas demasiado pesadas se abren y una tele mal protegida no sobrevive al trayecto. Lo frágil y lo voluminoso merece la protección adecuada, aunque el resto lo prepares tú.',
          'Tampoco compensa contratar «a ojo» sin explicar bien la mudanza. Cuanto más exacta sea la información que nos das, más fácil es ajustar el precio a la baja sin riesgo de que cambie después.',
        ],
        subsecciones: [
          {
            titulo: 'Mudanza con poco volumen',
            texto: 'Si solo tienes unas cuantas cajas y pocos muebles, quizá te baste un porte o una mudanza pequeña, que suelen ser más económicos que una mudanza completa.',
          },
          {
            titulo: 'Fechas flexibles',
            texto: 'Si puedes moverte unos días, dínoslo en el formulario. Tener margen ayuda a encajar tu mudanza en el momento que menos coste supone.',
          },
        ],
      },
      {
        titulo: 'Cómo pedir un presupuesto ajustado',
        parrafos: [
          'Rellena el formulario con el tamaño de la vivienda, las plantas y si hay ascensor en origen y destino. En el último paso, anota lo que vas a hacer por tu cuenta y los muebles grandes. Si quieres hacerte una idea antes, prueba nuestra calculadora de mudanza o consulta la guía de precios.',
          'Te responderemos con una propuesta que indica qué incluye. Si algo no te encaja, se puede ajustar antes de decidir: quitar el embalaje, dejar el montaje para otro día o cambiar la fecha.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuál es la mudanza más barata en Madrid?',
        respuesta:
          'La que se ajusta a lo que realmente tienes que mover. Llevarte menos, embalar tú y elegir una fecha con margen son las formas más eficaces de bajar el precio sin perder calidad.',
      },
      {
        pregunta: '¿Por qué contratar directamente y no por un comparador?',
        respuesta:
          'Porque tienes un solo interlocutor de principio a fin. Puedes resolver dudas con quien conoce el trabajo y la propuesta se prepara con tus datos reales.',
      },
      {
        pregunta: '¿Puedo ahorrar si embalo yo las cajas?',
        respuesta:
          'Sí. El embalaje es mano de obra y material: si preparas tú lo que no es frágil, la propuesta lo refleja. Indica en el formulario qué parte vas a hacer por tu cuenta.',
      },
      {
        pregunta: '¿Tenéis precios publicados?',
        respuesta:
          'En nuestra guía de precios y en la calculadora tienes las referencias que publicamos. Donde aún no hay cifra, te la damos en el presupuesto, que es gratuito.',
      },
    ],
    relacionadas: ['precios', 'mudanzas-pequenas-madrid', 'portes-madrid', 'mudanzas-pisos-madrid'],
    servicio: {
      nombre: 'Mudanzas económicas en Madrid',
      descripcion: 'Mudanzas ajustadas al volumen real y a lo que el cliente prepara por su cuenta.',
      area: 'Comunidad de Madrid',
      tipoArea: 'AdministrativeArea',
    },
    servicioFormulario: 'Mudanza completa',
  },

  /* ---------------------------- MUDANZAS PEQUEÑAS ---------------------------- */
  {
    path: 'mudanzas-pequenas-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    confirmado: true,
    title: 'Mudanzas pequeñas en Madrid | Mudanzas360',
    description:
      'Mudanzas pequeñas en Madrid: estudios, habitaciones y pocos muebles con un equipo reducido y el vehículo adecuado. Presupuesto gratis y un solo interlocutor.',
    etiqueta: 'Mudanzas pequeñas en Madrid',
    resumen: 'Estudios, habitaciones y pocos muebles con un equipo a la medida.',
    h1: { antes: 'Mudanzas', resaltado: 'pequeñas', despues: 'en Madrid' },
    kicker: 'POCO VOLUMEN',
    intro:
      'Una habitación compartida, un estudio o los muebles que te llevas a la casa de tu pareja. Para mudanzas con poco volumen planteamos un equipo y un vehículo a la medida, sin pagar por lo que no necesitas.',
    foto: 'furgoneta-blanca',
    fotoAlt: 'Furgoneta blanca aparcada en la calle, adecuada para una mudanza pequeña',
    fotoContenido: 'caja-mesa',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza pequeña en Madrid',
    fichas: [
      { etiqueta: 'Ideal para', valor: 'Estudios y habitaciones' },
      { etiqueta: 'Vehículo', valor: 'A la medida del volumen' },
      { etiqueta: 'Trato', valor: 'Un solo interlocutor' },
      { etiqueta: 'Presupuesto', valor: 'Gratis y sin compromiso' },
    ],
    secciones: [
      {
        titulo: 'Qué entendemos por mudanza pequeña',
        parrafos: [
          'Una mudanza pequeña es la que cabe en un vehículo ligero o mediano y no exige un equipo grande: el contenido de un estudio, de una habitación o de un piso con muy pocos muebles. Es distinta de un porte, que suele limitarse a una o dos piezas, y de una mudanza completa de vivienda.',
          'La frontera no siempre está clara, y no hace falta que la conozcas. Descríbenos lo que tienes y te diremos qué formato encaja mejor y cuál te sale más a cuenta.',
        ],
        lista: [
          'Habitación en piso compartido: cama, armario pequeño, escritorio y cajas.',
          'Estudio amueblado de forma sencilla.',
          'Traslado parcial: lo que te llevas a otra vivienda.',
          'Pocos muebles y bastantes cajas.',
        ],
      },
      {
        titulo: 'Cómo la organizamos',
        parrafos: [
          'Con poco volumen, lo importante es no sobredimensionar: un vehículo enorme y un equipo numeroso encarecen sin aportar nada. Ajustamos ambas cosas a tu caso, y cuidamos lo de siempre: proteger lo frágil, desmontar lo que no pasa entero y colocar cada cosa en su sitio.',
          'Muchas mudanzas pequeñas se hacen en pisos antiguos del centro, con escaleras estrechas y sin ascensor. Por eso te preguntamos la planta y los accesos aunque el volumen sea poco: es lo que más cambia el tiempo de trabajo.',
        ],
      },
      {
        titulo: 'Consejos para que salga rápida',
        parrafos: ['En una mudanza pequeña, cada minuto cuenta en el precio. Estos detalles la agilizan:'],
        lista: [
          'Ten todo embalado y las cajas cerradas antes de que lleguemos.',
          'Agrupa las cajas cerca de la puerta, sin bloquear el paso.',
          'Avisa a los compañeros de piso o a la comunidad de la hora.',
          'Mide la cama y el armario si dudas de que pasen por la escalera.',
        ],
        subsecciones: [
          {
            titulo: 'Si además necesitas guardar algo',
            texto: 'Si entre una casa y otra hay unos días de diferencia, podemos valorar guardar tus cosas temporalmente en lugar de hacer dos viajes.',
          },
        ],
      },
      {
        titulo: 'Pide tu presupuesto',
        parrafos: [
          'Indica en el formulario «Estudio o 1 habitación» o «Habitación / pocos objetos» y escribe en los detalles qué muebles hay. Te respondemos por WhatsApp con una propuesta para tu caso.',
          'Si quieres una referencia antes, la calculadora de mudanza te da el volumen aproximado según el tipo de vivienda.',
        ],
      },
      {
        titulo: "Cómo preparar una mudanza pequeña",
        parrafos: [
          "En una mudanza pequeña, cada minuto cuenta, porque el trabajo es corto y cualquier espera pesa en proporción. Ten todo embalado y junto en una sola estancia, cerca de la puerta, y los muebles desmontados si es posible. Así el equipo carga en poco tiempo y el precio se ajusta a lo que realmente se mueve.",
          "Haz una lista con los muebles y el número de cajas y envíanosla con la solicitud, si puedes con alguna foto. Con eso elegimos el vehículo adecuado, sin pagar por un camión más grande del necesario.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Qué diferencia hay entre una mudanza pequeña y un porte?',
        respuesta:
          'El porte suele limitarse a una o pocas piezas. Una mudanza pequeña incluye el contenido de un estudio o una habitación, con cajas, desmontaje y colocación si hace falta.',
      },
      {
        pregunta: '¿Hacéis mudanzas de una sola habitación?',
        respuesta:
          'Sí, podemos valorarlas. Cuéntanos qué muebles hay, cuántas cajas aproximadas y la planta de cada vivienda para ajustar la propuesta.',
      },
      {
        pregunta: '¿Necesito estar presente?',
        respuesta:
          'Conviene que haya alguien en la recogida y en la entrega para abrir y decir dónde va cada cosa. Si no puedes, cuéntanoslo y lo coordinamos.',
      },
      {
        pregunta: '¿Puedo pedirla con poca antelación?',
        respuesta:
          'Puedes pedirla y te diremos la disponibilidad. Con poco volumen suele ser más fácil encontrar hueco, aunque depende de la fecha.',
      },
    ],
    relacionadas: ['portes-madrid', 'mudanzas-estudiantes-madrid', 'mudanzas-baratas-madrid', 'precios'],
    servicio: {
      nombre: 'Mudanzas pequeñas en Madrid',
      descripcion: 'Mudanzas de estudios, habitaciones y pocos muebles con equipo y vehículo ajustados al volumen.',
      area: 'Comunidad de Madrid',
      tipoArea: 'AdministrativeArea',
    },
    servicioFormulario: 'Mudanza completa',
  },

  /* ---------------------------- MUDANZAS URGENTES ---------------------------- */
  {
    path: 'mudanzas-urgentes-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    confirmado: true,
    title: 'Mudanzas urgentes en Madrid | Mudanzas360',
    description:
      'Mudanzas urgentes en Madrid: cómo pedirlas para que podamos responder rápido y qué preparar si tienes poco tiempo. Contacto directo y WhatsApp.',
    etiqueta: 'Mudanzas urgentes en Madrid',
    resumen: 'Qué hacer cuando la mudanza no puede esperar.',
    h1: { antes: 'Mudanzas', resaltado: 'urgentes', despues: 'en Madrid' },
    kicker: 'POCO TIEMPO',
    intro:
      'Una entrega de llaves adelantada, un piso que hay que dejar ya o una obra que empieza antes de lo previsto. Si te falta tiempo, cuéntanoslo directamente y te decimos con claridad qué podemos hacer y cuándo.',
    foto: 'furgoneta-calle',
    fotoAlt: 'Camión pequeño de mudanzas en una calle arbolada',
    fotoContenido: 'cajas-apiladas',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza urgente en Madrid',
    fichas: [
      { etiqueta: 'Contacto', valor: 'Teléfono o WhatsApp' },
      { etiqueta: 'Respuesta', valor: 'Clara sobre disponibilidad' },
      { etiqueta: 'Trato', valor: 'Un solo interlocutor' },
      { etiqueta: 'Presupuesto', valor: 'Gratis y sin compromiso' },
    ],
    secciones: [
      {
        titulo: 'Urgente, pero bien hecha',
        parrafos: [
          'Las prisas son el enemigo de una mudanza: se embala peor, se olvidan cosas y los accesos no están preparados. Nuestro trabajo cuando hay poco tiempo es ser claros desde el primer momento: si podemos hacerla en la fecha que necesitas, te lo decimos; si no, también, para que no pierdas tiempo esperando.',
          'La disponibilidad depende del calendario y del volumen, así que no prometemos plazos que no podamos cumplir. Con un solo interlocutor, las respuestas llegan rápido.',
        ],
      },
      {
        titulo: 'Cómo pedirla para ganar tiempo',
        parrafos: ['Cuanto más completa sea tu primera solicitud, antes podremos confirmar. Para una mudanza urgente, lo ideal es:'],
        lista: [
          'Escribirnos por WhatsApp o llamarnos, además de rellenar el formulario.',
          'Indicar la fecha límite y si hay otras fechas posibles.',
          'Dar la planta, el ascensor y la dirección exacta de ambas viviendas.',
          'Enviar fotos de los muebles grandes y de cómo está la casa.',
        ],
      },
      {
        titulo: 'Qué hacer mientras tanto',
        parrafos: [
          'Aunque falte poco, hay tareas que puedes adelantar y que ahorran mucho tiempo el día del traslado. Empieza por lo que no vas a usar: libros, ropa de otra temporada, adornos. Separa lo que no te llevas para que no se cargue por error.',
          'Pregunta en tu comunidad y en el ayuntamiento si hace falta reservar espacio para el camión: en algunas calles el permiso requiere antelación, y en una mudanza urgente puede condicionar la hora o el tipo de vehículo.',
        ],
        subsecciones: [
          {
            titulo: 'Si no da tiempo a embalar',
            texto: 'Podemos valorar encargarnos del embalaje. Indícalo en la solicitud, porque cambia el tiempo de trabajo y el número de personas necesarias.',
          },
          {
            titulo: 'Si la otra vivienda aún no está lista',
            texto: 'Un guardamuebles temporal puede resolver el problema: sacas tus cosas a tiempo y las llevas a la nueva casa cuando esté disponible.',
          },
        ],
      },
      {
        titulo: 'Cuándo una mudanza urgente cuesta más',
        parrafos: [
          'Puede encarecerse si obliga a reorganizar el calendario, a trabajar fuera del horario habitual o a añadir personas para terminar a tiempo. Te lo explicamos en la propuesta antes de que decidas, para que no haya sorpresas. Si tienes algo de margen, compensa indicarlo.',
          'Si quieres una referencia de precio, consulta nuestra guía de precios o la calculadora; para urgencias, lo más rápido es contactar directamente.',
        ],
      },
      {
        titulo: "Qué preparar si tienes poco tiempo",
        parrafos: [
          "Si la mudanza es urgente, centra tus esfuerzos en lo que nadie puede hacer por ti: separar documentos, objetos de valor y lo que vas a necesitar los primeros días. El resto se puede embalar con nuestra ayuda si nos lo pides. Vacía los armarios en bolsas o cajas, aunque no estén perfectamente ordenadas.",
          "Ten a mano las dos direcciones exactas, la planta y si hay ascensor en cada una, y una idea del volumen. Con esos datos podemos decirte rápido si llegamos en la fecha que necesitas.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Hacéis mudanzas para el mismo día?',
        respuesta:
          'Depende de la disponibilidad y del volumen. Escríbenos o llámanos cuanto antes con los datos de la mudanza y te diremos con claridad si es posible.',
      },
      {
        pregunta: '¿Una mudanza urgente cuesta más?',
        respuesta:
          'Puede costar más si obliga a reorganizar el calendario o a reforzar el equipo. Si es así, te lo indicamos en la propuesta antes de que confirmes.',
      },
      {
        pregunta: '¿Qué datos necesitáis para responder rápido?',
        respuesta:
          'Fecha límite, direcciones exactas, plantas, ascensores, tamaño de la vivienda y fotos de lo más voluminoso. Con eso podemos valorar la mudanza sin idas y venidas.',
      },
      {
        pregunta: '¿Y si no me da tiempo a embalar?',
        respuesta:
          'Podemos valorar hacerlo nosotros. Indícalo al pedir presupuesto, porque influye en el tiempo de trabajo y en la propuesta.',
      },
    ],
    relacionadas: ['mudanzas-madrid', 'embalaje-mudanzas-madrid', 'guardamuebles-madrid', 'precios'],
    servicio: {
      nombre: 'Mudanzas urgentes en Madrid',
      descripcion: 'Mudanzas con poco tiempo de preparación en Madrid, según disponibilidad.',
      area: 'Comunidad de Madrid',
      tipoArea: 'AdministrativeArea',
    },
    servicioFormulario: 'Mudanza completa',
  },

  /* ---------------------------- ESTUDIANTES ---------------------------- */
  {
    path: 'mudanzas-estudiantes-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    confirmado: true,
    title: 'Mudanzas de estudiantes en Madrid | Mudanzas360',
    description:
      'Mudanzas de estudiantes en Madrid: habitaciones, pisos compartidos y residencias, con lo justo y al precio ajustado. Presupuesto gratis y trato directo.',
    etiqueta: 'Mudanzas de estudiantes en Madrid',
    resumen: 'Habitaciones, pisos compartidos y residencias al empezar o terminar el curso.',
    h1: { antes: 'Mudanzas de', resaltado: 'estudiantes', despues: 'en Madrid' },
    kicker: 'INICIO Y FIN DE CURSO',
    intro:
      'Llegas a Madrid para estudiar, cambias de piso compartido o vuelves a casa al terminar el curso. Movemos lo que tengas, aunque sea poco, sin que pagues por una mudanza que no necesitas.',
    foto: 'caja-mesa',
    fotoAlt: 'Persona preparando una caja de cartón sobre una mesa',
    fotoContenido: 'furgoneta-blanca',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza de estudiante en Madrid',
    fichas: [
      { etiqueta: 'Ideal para', valor: 'Habitaciones y residencias' },
      { etiqueta: 'Volumen', valor: 'Poco: equipo a la medida' },
      { etiqueta: 'Temporada', valor: 'Septiembre y junio' },
      { etiqueta: 'Presupuesto', valor: 'Gratis y sin compromiso' },
    ],
    secciones: [
      {
        titulo: 'Mudanzas con poco volumen y mucha prisa',
        parrafos: [
          'La mudanza de un estudiante suele tener dos rasgos: poco volumen y fechas muy concretas. Las entregas de habitaciones se concentran a principios de septiembre y al final del curso, y los contratos de alquiler no siempre dejan margen entre una casa y otra.',
          'Por eso conviene pedir presupuesto con tiempo. En temporada alta, muchas mudanzas pequeñas coinciden en los mismos días, y reservar pronto te da más opciones de horario.',
        ],
      },
      {
        titulo: 'Qué solemos trasladar',
        parrafos: ['Cada caso es distinto, pero lo habitual en una mudanza de estudiante es:'],
        lista: [
          'Cajas con libros, apuntes, ropa y objetos personales.',
          'Algún mueble propio: escritorio, silla, estantería o colchón.',
          'Ordenador, pantalla y otros aparatos que conviene proteger bien.',
          'Bicicleta, maleta grande o instrumentos musicales.',
        ],
        subsecciones: [
          {
            titulo: 'Residencias y colegios mayores',
            texto: 'Suelen tener normas de entrada, horarios y zonas de carga. Pregunta en recepción antes de la fecha y cuéntanoslo para organizarnos.',
          },
          {
            titulo: 'Pisos compartidos',
            texto: 'Avisa a tus compañeros de la hora y separa bien tus cosas de las comunes, para que no se cargue nada por error.',
          },
        ],
      },
      {
        titulo: 'Fin de curso: guardar o llevar a casa',
        parrafos: [
          'Al terminar el curso hay dos opciones habituales: llevarlo todo a casa de la familia, aunque esté en otra provincia, o guardarlo durante el verano en Madrid si vas a volver. Si tu ciudad está en una de nuestras rutas, podemos valorar el envío; si no, cuéntanos el destino.',
          'Guardar unas cajas y un par de muebles durante el verano puede salir más a cuenta que llevarlos y traerlos. Consulta nuestro servicio de guardamuebles para valorarlo.',
        ],
      },
      {
        titulo: 'Cómo pedir presupuesto',
        parrafos: [
          'Elige «Estudio o 1 habitación» o «Habitación / pocos objetos» en el formulario y detalla qué hay que mover. Si tu familia va a pagar o a gestionar la mudanza, puede escribirnos directamente: tendréis un solo interlocutor.',
          'Para hacerte una idea del volumen, prueba la calculadora de mudanza.',
        ],
      },
      {
        titulo: "Consejos para estudiantes que se mudan",
        parrafos: [
          "Si compartes piso, coordina la fecha con tus compañeros: a veces varios os mudáis a la vez y compartir el vehículo sale más a cuenta. Habla también con el casero sobre la entrega de llaves y el estado de la habitación, y haz fotos el día que te vas.",
          "Antes de pedir presupuesto, piensa qué merece la pena llevar. Muchos muebles baratos cuestan más de trasladar que de volver a comprar, mientras que un buen colchón, un escritorio o una estantería sí compensa moverlos. Usa maletas y bolsas de deporte para la ropa y reserva las cajas para libros y apuntes.",
          "Si te vas en verano y vuelves en septiembre, valora dejar tus cosas en un guardamuebles en lugar de llevarlas a casa de tus padres y traerlas de vuelta.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Hacéis descuentos para estudiantes?',
        respuesta:
          'Ajustamos la propuesta al volumen real, que en estos casos suele ser poco. Cuéntanos qué hay que mover y te daremos un precio para tu caso.',
      },
      {
        pregunta: '¿Podéis recoger en una residencia universitaria?',
        respuesta:
          'Sí, siempre que la residencia lo permita. Pregunta por sus normas de entrada y carga y cuéntanoslas al pedir presupuesto.',
      },
      {
        pregunta: '¿Podéis llevar mis cosas a otra provincia al acabar el curso?',
        respuesta:
          'Podemos valorarlo, sobre todo si el destino está en nuestras rutas habituales. Indica la dirección de destino en el formulario.',
      },
      {
        pregunta: '¿Cuándo debo reservar?',
        respuesta:
          'Lo antes posible si te mudas a principios de septiembre o al final del curso, porque son las fechas con más demanda de mudanzas pequeñas.',
      },
      {
        pregunta: "¿Podemos compartir la mudanza varios compañeros de piso?",
        respuesta: "Sí, si vais al mismo destino o a destinos cercanos. Indícalo en la solicitud con las direcciones y lo valoramos.",
      },
    ],
    relacionadas: ['mudanzas-pequenas-madrid', 'guardamuebles-madrid', 'portes-madrid', 'precios'],
    servicio: {
      nombre: 'Mudanzas de estudiantes en Madrid',
      descripcion: 'Mudanzas de habitaciones, pisos compartidos y residencias de estudiantes en Madrid.',
      area: 'Comunidad de Madrid',
      tipoArea: 'AdministrativeArea',
    },
    servicioFormulario: 'Mudanza completa',
  },

  /* ---------------------------- FURGONETA CON CONDUCTOR ---------------------------- */
  {
    path: 'furgoneta-con-conductor-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    confirmado: true,
    title: 'Furgoneta con conductor en Madrid | Mudanzas360',
    description:
      'Furgoneta con conductor en Madrid para portes, compras grandes y pequeños traslados. Tú cargas o te ayudamos. Precio cerrado por escrito.',
    etiqueta: 'Furgoneta con conductor en Madrid',
    resumen: 'Un vehículo con conductor para portes, compras y traslados cortos.',
    h1: { antes: 'Furgoneta', resaltado: 'con conductor', despues: 'en Madrid' },
    kicker: 'TRANSPORTE A MEDIDA',
    intro:
      'A veces no necesitas una mudanza, sino un vehículo grande y alguien que lo conduzca. Ponemos la furgoneta y el conductor; tú decides si cargas por tu cuenta o si necesitas ayuda.',
    foto: 'furgoneta-carretera',
    fotoAlt: 'Furgoneta blanca circulando por carretera',
    fotoContenido: 'portes',
    mensaje: 'Hola, quiero pedir presupuesto para una furgoneta con conductor en Madrid',
    fichas: [
      { etiqueta: 'Para', valor: 'Portes, compras y traslados' },
      { etiqueta: 'Carga', valor: 'Tú o con nuestra ayuda' },
      { etiqueta: 'Zona', valor: 'Madrid y alrededores' },
      { etiqueta: 'Presupuesto', valor: 'Gratis y sin compromiso' },
    ],
    secciones: [
      {
        titulo: 'Cuándo te conviene una furgoneta con conductor',
        parrafos: [
          'Es la opción práctica cuando lo que te falta es el vehículo, no el equipo de mudanza. Alquilar una furgoneta tú mismo implica recogerla, conducirla por Madrid, aparcar y devolverla. Con conductor te olvidas de todo eso y solo te ocupas de lo que hay que mover.',
          'Es habitual para compras en grandes superficies, recogida de muebles de segunda mano, traslados de material de un negocio o pequeñas mudanzas en las que tú y tus amigos podéis cargar.',
        ],
        lista: [
          'Recoger un mueble grande en una tienda o en casa de un particular.',
          'Llevar material a una feria, un evento o un local.',
          'Trasladar cajas y pocos muebles entre dos viviendas.',
          'Vaciar un trastero pequeño.',
        ],
      },
      {
        titulo: 'Con carga o solo transporte',
        parrafos: [
          'Puedes contratar solo el vehículo con conductor y encargarte tú de cargar, o pedir que el conductor ayude o que vaya otra persona para las piezas pesadas. La diferencia está en el tiempo y en las manos necesarias, y se refleja en la propuesta.',
          'Ten en cuenta que el conductor no puede cargar solo un sofá o un armario grande: para piezas pesadas, lo seguro es que haya al menos dos personas.',
        ],
        subsecciones: [
          {
            titulo: 'Recorridos dentro de Madrid',
            texto: 'Indica las direcciones y una franja horaria. En el centro, prevé dónde puede detenerse el vehículo para cargar.',
          },
          {
            titulo: 'Recorridos fuera de Madrid',
            texto: 'Para destinos más lejanos, cuéntanos el recorrido completo y te diremos si conviene un porte o una mudanza.',
          },
        ],
      },
      {
        titulo: 'Qué nos tienes que contar',
        parrafos: [
          'Elige «Porte / transporte» en el formulario. En los detalles, indica qué hay que mover, si vas a cargar tú, cuántas paradas hay y si algún objeto es muy pesado o voluminoso. Las medidas de las piezas grandes ayudan a saber si caben y cómo protegerlas.',
          'Te respondemos por WhatsApp con una propuesta ajustada a lo que necesitas.',
        ],
      },
      {
        titulo: 'Furgoneta, porte o mudanza',
        parrafos: [
          'Si tienes que vaciar una vivienda completa, una mudanza es más eficiente: el equipo, el embalaje y la organización están pensados para ello. Si solo son una o dos piezas con ayuda incluida, un porte es lo natural. La furgoneta con conductor queda entre ambos, para cuando quieres flexibilidad.',
          'Si dudas, descríbenos el caso y te recomendamos la opción más sensata, aunque sea la más sencilla.',
        ],
      },
      {
        titulo: "Qué conviene saber antes de reservar",
        parrafos: [
          "Ten claras las medidas de lo que vas a transportar, sobre todo si es un mueble grande o un electrodoméstico: con ellas confirmamos que cabe en la furgoneta y por las puertas y escaleras de destino. Si recoges una compra en una tienda, comprueba el horario de recogida y si el personal ayuda a cargar.",
          "Indica si vas a ayudar con la carga o si necesitas que lo hagamos nosotros, y si hay plantas sin ascensor. Con esa información sabemos cuántas personas hacen falta y cuánto tiempo reservar.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿El conductor ayuda a cargar?',
        respuesta:
          'Depende de lo que contrates. Puedes pedir solo transporte o ayuda con la carga. Para piezas pesadas, hacen falta al menos dos personas.',
      },
      {
        pregunta: '¿Se cobra por horas o por servicio?',
        respuesta:
          'Te lo indicamos en la propuesta según el recorrido y lo que haya que hacer. Cuéntanos el caso y te damos un precio concreto.',
      },
      {
        pregunta: '¿Puedo ir en la furgoneta?',
        respuesta:
          'Coméntalo en tu solicitud y lo revisamos, porque depende del vehículo asignado. En cualquier caso, debe haber alguien en la recogida y en la entrega.',
      },
      {
        pregunta: '¿Podéis recoger en una tienda?',
        respuesta:
          'Sí. Ten a mano el comprobante de compra y comprueba el horario de recogida de la tienda para coordinar la hora.',
      },
    ],
    relacionadas: ['portes-madrid', 'mudanzas-pequenas-madrid', 'montaje-desmontaje-muebles-mudanza', 'precios'],
    servicio: {
      nombre: 'Furgoneta con conductor en Madrid',
      descripcion: 'Vehículo con conductor para portes, compras y pequeños traslados en Madrid.',
      area: 'Comunidad de Madrid',
      tipoArea: 'AdministrativeArea',
    },
    servicioFormulario: 'Portes o pocos muebles',
  },

  /* ---------------------------- PIANOS ---------------------------- */
  {
    path: 'mudanza-pianos-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    confirmado: true,
    title: 'Mudanza de pianos en Madrid | Mudanzas360',
    description:
      'Traslado de pianos en Madrid: qué hay que valorar antes, cómo se protege el instrumento y por qué conviene afinarlo después. Presupuesto gratis.',
    etiqueta: 'Mudanza de pianos en Madrid',
    resumen: 'Pianos y objetos muy pesados que piden una valoración propia.',
    h1: { antes: 'Mudanza de', resaltado: 'pianos', despues: 'en Madrid' },
    kicker: 'OBJETOS PESADOS Y DELICADOS',
    intro:
      'Un piano no es un mueble más: pesa mucho, es delicado y tiene el centro de gravedad alto. Antes de moverlo, lo valoramos con calma para decidir cómo hacerlo con seguridad.',
    foto: 'embalaje',
    fotoAlt: 'Salón amueblado de una vivienda',
    fotoContenido: 'embalaje-material',
    mensaje: 'Hola, quiero pedir presupuesto para trasladar un piano en Madrid',
    fichas: [
      { etiqueta: 'Valoración', valor: 'Caso por caso' },
      { etiqueta: 'Clave', valor: 'Accesos y escaleras' },
      { etiqueta: 'Después', valor: 'Afinación recomendada' },
      { etiqueta: 'Presupuesto', valor: 'Gratis y sin compromiso' },
    ],
    secciones: [
      {
        titulo: 'Por qué un piano necesita una valoración propia',
        parrafos: [
          'El peso de un piano y la forma en que está repartido hacen que las escaleras, los giros y los umbrales sean los puntos críticos. Un error no solo daña el instrumento: también puede dañar la vivienda o poner en riesgo a quienes lo mueven. Por eso no damos un precio a ciegas.',
          'Necesitamos saber qué tipo de piano es, en qué planta está, cómo son las escaleras y el ascensor de ambas viviendas y si hay escalones en la entrada. Con fotos de los accesos podemos decir con más seguridad cómo planteamos el traslado o si requiere medios especiales.',
        ],
      },
      {
        titulo: 'Qué datos necesitamos',
        parrafos: ['Para valorar el traslado de un piano, cuéntanos en la solicitud:'],
        lista: [
          'Tipo de piano: vertical, de cola o digital, y marca si la conoces.',
          'Planta de origen y de destino, y si hay ascensor y de qué tamaño.',
          'Escaleras: anchura, número de tramos y giros.',
          'Escalones o desniveles en el portal y en la puerta de casa.',
          'Fotos del piano y de los accesos.',
        ],
      },
      {
        titulo: 'Cómo se protege durante el traslado',
        parrafos: [
          'El instrumento se protege con mantas y material acolchado, se cierran tapas y se aseguran las partes móviles. Durante el transporte va sujeto para que no se desplace con las curvas o las frenadas.',
          'Si en la valoración vemos que el acceso requiere medios especiales, como subirlo por fachada, te lo diremos antes de confirmar y te explicaremos las opciones. Si algún traslado no podemos hacerlo con garantías, también te lo diremos.',
        ],
        subsecciones: [
          {
            titulo: 'Pianos digitales',
            texto: 'Pesan mucho menos y se trasladan como un aparato electrónico delicado: embalaje acolchado y transporte en la posición adecuada.',
          },
          {
            titulo: 'Afinación después de la mudanza',
            texto: 'Los cambios de temperatura y humedad afectan a la afinación. Es habitual esperar unos días a que el piano se adapte a la nueva casa antes de llamar al afinador.',
          },
        ],
      },
      {
        titulo: 'Dentro de una mudanza o por separado',
        parrafos: [
          'Puedes incluir el piano en una mudanza completa o trasladarlo solo. Si forma parte de una mudanza, conviene planificar el orden: a veces es mejor que sea lo primero en llegar a la casa nueva, para colocarlo antes de que se llene de cajas.',
          'Pide presupuesto con los datos y fotos que puedas: te responde tu único interlocutor de Mudanzas360.',
        ],
      },
      {
        titulo: "Cómo preparar el traslado del piano",
        parrafos: [
          "Antes del día, mide el piano y el recorrido completo: puertas, pasillos, giros de la escalera y el ascensor, si lo hay. Despeja el camino de alfombras y obstáculos, y retira del instrumento partituras, metrónomos y objetos decorativos. Cierra la tapa del teclado con llave si la tiene.",
          " Si el piano tiene valor sentimental o económico, haz fotos de su estado antes del traslado. Y recuerda que conviene dejarlo reposar unos días en su nueva ubicación antes de llamar al afinador.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Trasladáis pianos de cola?',
        respuesta:
          'Cuéntanos el tipo y los accesos y lo valoramos. Algunos traslados requieren medios especiales; si es el caso, te lo explicamos antes de confirmar.',
      },
      {
        pregunta: '¿Hay que afinar el piano después?',
        respuesta:
          'Es lo recomendable. Los cambios de temperatura y humedad afectan a la afinación, así que conviene esperar unos días y llamar a un afinador.',
      },
      {
        pregunta: '¿Podéis subir un piano sin ascensor?',
        respuesta:
          'Depende de la escalera, de la planta y del piano. Con fotos y medidas de los accesos podemos decirte cómo plantearlo con seguridad.',
      },
      {
        pregunta: '¿El piano puede ir con el resto de la mudanza?',
        respuesta:
          'Sí, podemos incluirlo en una mudanza completa. Conviene planificar el orden para colocarlo antes de que lleguen las cajas.',
      },
    ],
    relacionadas: ['mudanzas-pisos-madrid', 'embalaje-mudanzas-madrid', 'portes-madrid', 'precios'],
    servicio: {
      nombre: 'Mudanza de pianos en Madrid',
      descripcion: 'Traslado de pianos y objetos muy pesados en Madrid, con valoración previa de los accesos.',
      area: 'Comunidad de Madrid',
      tipoArea: 'AdministrativeArea',
    },
    servicioFormulario: 'Portes o pocos muebles',
  },

  /* ---------------------------- VACIADO DE PISOS ---------------------------- */
  {
    path: 'vaciado-pisos-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    confirmado: true,
    title: 'Vaciado de pisos en Madrid | Mudanzas360',
    description:
      'Vaciado de pisos en Madrid por herencia, venta o fin de alquiler: qué se conserva, qué se traslada y qué se retira. Presupuesto gratis y trato directo.',
    etiqueta: 'Vaciado de pisos en Madrid',
    resumen: 'Vaciar una vivienda por herencia, venta o fin de alquiler.',
    h1: { antes: 'Vaciado de', resaltado: 'pisos', despues: 'en Madrid' },
    kicker: 'VACIADOS',
    intro:
      'Una herencia, la venta de una casa o el final de un alquiler. Vaciar un piso suele mezclar mudanza y retirada de enseres, y a menudo llega en un momento delicado. Lo organizamos contigo paso a paso.',
    foto: 'salon-cajas',
    fotoAlt: 'Salón con cajas de cartón apiladas y plantas',
    fotoContenido: 'guardamuebles-pasillo',
    mensaje: 'Hola, quiero pedir presupuesto para vaciar un piso en Madrid',
    fichas: [
      { etiqueta: 'Motivos', valor: 'Herencia, venta o alquiler' },
      { etiqueta: 'Qué hacemos', valor: 'Trasladar, guardar o retirar' },
      { etiqueta: 'Trato', valor: 'Un solo interlocutor' },
      { etiqueta: 'Presupuesto', valor: 'Gratis y sin compromiso' },
    ],
    secciones: [
      {
        titulo: 'Qué incluye un vaciado',
        parrafos: [
          'Vaciar un piso no es solo sacar muebles: hay que decidir qué se conserva, qué se reparte entre la familia, qué se guarda y qué se retira. Cada destino implica un trabajo distinto, y conviene tenerlo claro antes de empezar para no mover dos veces las mismas cosas.',
          'Te ayudamos a organizarlo. Lo que quieras conservar lo trasladamos a la dirección que nos indiques o a un guardamuebles; lo demás lo retiramos. Qué ocurre con lo que se retira lo concretamos contigo al preparar el presupuesto.',
        ],
        lista: [
          'Trasladar muebles y objetos a una o varias viviendas.',
          'Guardar temporalmente lo que aún no tiene destino.',
          'Retirar lo que no se va a aprovechar.',
          'Dejar el piso despejado para su venta o entrega.',
        ],
      },
      {
        titulo: 'Cómo prepararlo',
        parrafos: [
          'Antes del vaciado, recorre la vivienda con calma y separa documentos, fotos y objetos de valor, que siempre conviene que se queden contigo. Si el piso es de una herencia, ponedlo en común entre los herederos para que el día del vaciado nadie eche nada de menos.',
          'Marca con etiquetas de colores qué va a cada sitio: una dirección, el guardamuebles o la retirada. Es la forma más sencilla de que todo llegue a donde debe.',
        ],
        subsecciones: [
          {
            titulo: 'Trasteros y garajes',
            texto: 'Suelen acumular más de lo que parece. Inclúyelos al describir el vaciado para que el presupuesto refleje el volumen real.',
          },
          {
            titulo: 'Electrodomésticos',
            texto: 'Indica cuáles hay y si funcionan. Algunos tienen un tratamiento específico al retirarlos, y lo tenemos en cuenta al preparar la propuesta.',
          },
        ],
      },
      {
        titulo: 'Un momento delicado',
        parrafos: [
          'Muchos vaciados llegan tras la pérdida de un familiar o en medio de un cambio importante. Entendemos que no siempre es fácil decidir qué hacer con cada cosa, y por eso trabajamos al ritmo que necesites: puedes estar presente o dejarnos indicaciones claras.',
          'Tendrás un solo interlocutor para resolver cualquier duda antes y durante el vaciado.',
        ],
      },
      {
        titulo: 'Pide tu presupuesto',
        parrafos: [
          'Selecciona «Otro» en el formulario y explica que se trata de un vaciado. Indica la planta, si hay ascensor, el tamaño de la vivienda y qué parte se traslada y qué se retira. Las fotos de cada estancia ayudan mucho a calcular el volumen.',
          'Con esa información te preparamos una propuesta que detalla cada parte del trabajo.',
        ],
      },
      {
        titulo: "Cómo organizar el vaciado de un piso",
        parrafos: [
          "Antes de empezar, recorre la vivienda con todas las personas implicadas y decidid qué se conserva, qué se reparte entre familiares y qué se dona o se retira. Marca lo que se queda con etiquetas de colores. Así el día del vaciado no hay dudas y cada cosa va a su destino.",
          "Separa los documentos, fotografías y objetos de valor antes de que llegue el equipo, y revisa cajones, altillos y bolsillos. Si el piso se va a vender o alquilar, pregunta al ayuntamiento por la retirada de muebles y enseres, que en muchos casos requiere cita previa.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Qué hacéis con lo que no se aprovecha?',
        respuesta:
          'Lo concretamos contigo al preparar el presupuesto, según lo que haya que retirar. Indícanos qué muebles y enseres no vas a conservar.',
      },
      {
        pregunta: '¿Podéis llevar parte de las cosas a varias casas?',
        respuesta:
          'Sí. Indica cada dirección y qué va a cada una. Lo organizamos para hacerlo en el menor número de viajes posible.',
      },
      {
        pregunta: '¿Tengo que estar presente durante el vaciado?',
        respuesta:
          'No es imprescindible si nos dejas indicaciones claras y acceso a la vivienda, aunque conviene que estés al principio para revisar juntos qué va a cada sitio.',
      },
      {
        pregunta: '¿Podéis guardar los muebles mientras se reparte la herencia?',
        respuesta:
          'Sí, podemos valorar un guardamuebles temporal hasta que decidáis el destino de cada cosa.',
      },
    ],
    relacionadas: ['guardamuebles-madrid', 'mudanzas-pisos-madrid', 'portes-madrid', 'precios'],
    servicio: {
      nombre: 'Vaciado de pisos en Madrid',
      descripcion: 'Vaciado de viviendas por herencia, venta o fin de alquiler: traslado, guardamuebles y retirada.',
      area: 'Comunidad de Madrid',
      tipoArea: 'AdministrativeArea',
    },
    servicioFormulario: 'Otro',
  },
];
