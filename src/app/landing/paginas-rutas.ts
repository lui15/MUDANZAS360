import { PaginaSeo } from './pagina-seo';

/** Distancias y tiempos de conducción son aproximados, por autovía y en condiciones normales. */
export const PAGINAS_RUTAS: PaginaSeo[] = [
  /* ---------------------------- BARCELONA ---------------------------- */
  {
    path: 'mudanzas-madrid-barcelona',
    tipo: 'ruta',
    padre: 'mudanzas-nacionales',
    title: 'Mudanzas Madrid - Barcelona | Mudanzas360',
    description:
      'Mudanzas de Madrid a Barcelona: unos 620 km por la A-2, tiempos orientativos y qué influye en el precio. Pide tu presupuesto gratis y sin compromiso.',
    etiqueta: 'Mudanzas Madrid - Barcelona',
    resumen: 'Unos 620 km por la A-2 y AP-7, con accesos urbanos exigentes en Barcelona.',
    h1: { antes: 'Mudanzas de Madrid', resaltado: 'a Barcelona', despues: '' },
    kicker: 'RUTA MADRID - BARCELONA',
    intro:
      'Es una de las rutas más transitadas de España: dos grandes ciudades, muchas personas que cambian de trabajo y un destino con calles exigentes para los vehículos grandes. Te contamos cómo se organiza.',
    foto: 'camion-autovia',
    fotoAlt: 'Camión blanco en carretera, como en una mudanza de Madrid a Barcelona',
    fotoContenido: 'nacionales',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza de Madrid a Barcelona',
    destino: 'Barcelona',
    fichas: [
      { etiqueta: 'Distancia aproximada', valor: '620 km' },
      { etiqueta: 'Conducción', valor: 'Unas 6-7 horas en turismo; más en camión' },
      { etiqueta: 'Vía principal', valor: 'A-2 / AP-2 / AP-7' },
      { etiqueta: 'Duración', valor: 'Entrega orientativa: 1-2 días' },
    ],
    secciones: [
      {
        titulo: 'Cómo es el recorrido',
        parrafos: [
          'El camino más directo sale de Madrid por la A-2 en dirección a Guadalajara, Zaragoza y Lleida, para continuar hacia Barcelona. Son unos 620 kilómetros de autovía bien comunicada, aunque con tramos de la meseta aragonesa expuestos al viento y, en invierno, a posibles nieves en la zona de Medinaceli y el puerto de Alcolea.',
          'Un camión de mudanzas circula más despacio que un coche y su conductor debe respetar los tiempos obligatorios de descanso. Por eso, las 6 o 7 horas de un turismo se convierten en bastantes más en un vehículo de carga, algo que conviene tener en cuenta para fijar la entrega.',
        ],
      },
      {
        titulo: 'Tiempos orientativos',
        parrafos: [
          'Con un transporte dedicado, una vivienda completa puede cargarse un día y entregarse al siguiente, aunque depende del volumen y de lo que tarde la carga. Las mudanzas pequeñas organizadas como carga compartida pueden tardar varios días, porque el camión ajusta su ruta a otros clientes.',
          'Son solo plazos de referencia: la fecha concreta se confirma en la propuesta, según la disponibilidad y lo que necesites. Si tienes una fecha límite por la entrega de llaves o el inicio de un trabajo, indícanoslo desde el principio.',
        ],
      },
      {
        titulo: 'Qué influye en el precio de esta ruta',
        parrafos: [
          'La distancia pesa, pero el coste depende de más factores. Estos son los que más afectan al presupuesto en el trayecto entre Madrid y Barcelona:',
        ],
        lista: [
          'Volumen: determina el tamaño del vehículo y si tiene sentido compartir la carga.',
          'Peajes y combustible: varían según la ruta elegida y el tipo de vehículo.',
          'Accesos en Barcelona: en muchas zonas el camión no llega hasta la puerta, y el acarreo extra suma tiempo.',
          'Plantas y ascensor: tanto en Madrid como en la vivienda de destino.',
          'Servicios añadidos: embalaje, desmontaje, montaje o guardamuebles.',
          'Fecha: los finales de mes y el verano son los momentos con mayor demanda.',
        ],
      },
      {
        titulo: 'Entrar en Barcelona con una mudanza',
        parrafos: [
          'Barcelona exige prever el último tramo. Casi toda la ciudad está dentro de la Zona de Bajas Emisiones del Ámbito de las Rondas, de modo que el vehículo debe cumplir sus requisitos. En Ciutat Vella, Gràcia o Sants, las calles son estrechas o peatonales, y es frecuente que haya que parar lejos del portal o usar un vehículo más pequeño para el último tramo.',
          'Para reservar espacio en la calle, suele haber que tramitar un permiso municipal con antelación. El Eixample es más ancho, pero las fincas antiguas suelen tener ascensores muy pequeños. Por eso conviene que nos facilites la dirección exacta: nos ayuda a valorar el acceso antes de prepararte la propuesta.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuántos kilómetros hay entre Madrid y Barcelona?',
        respuesta:
          'Unos 620 kilómetros por carretera, según el punto exacto de salida y de llegada. El trayecto en camión dura más que en coche por la velocidad y las pausas obligatorias de los conductores.',
      },
      {
        pregunta: '¿Cuánto tarda una mudanza de Madrid a Barcelona?',
        respuesta:
          'Con un transporte dedicado, la entrega puede hacerse normalmente al día siguiente de la carga. Si la mudanza va en carga compartida, puede tardar varios días. La fecha se confirma en tu propuesta.',
      },
      {
        pregunta: '¿Quién gestiona el permiso de aparcamiento en Barcelona?',
        respuesta:
          'Lo acordamos contigo al preparar la mudanza. Necesitamos saber la dirección exacta para comprobar qué hace falta y con cuánta antelación debe solicitarse.',
      },
      {
        pregunta: '¿Podéis guardar mis muebles si la vivienda de Barcelona no está lista?',
        respuesta:
          'Sí, podemos valorar un guardamuebles temporal hasta que tengas las llaves. Indica tus fechas en la solicitud y lo incluimos en la propuesta.',
      },
    ],
    relacionadas: ['mudanzas-nacionales', 'mudanzas-madrid-valencia', 'embalaje-mudanzas-madrid', 'guardamuebles-madrid'],
    servicio: {
      nombre: 'Mudanzas de Madrid a Barcelona',
      descripcion: 'Mudanzas de viviendas y oficinas entre Madrid y Barcelona, en transporte dedicado o carga compartida.',
      area: 'Barcelona',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza de vivienda',
  },

  /* ---------------------------- VALENCIA ---------------------------- */
  {
    path: 'mudanzas-madrid-valencia',
    tipo: 'ruta',
    padre: 'mudanzas-nacionales',
    title: 'Mudanzas Madrid - Valencia | Mudanzas360',
    description:
      'Mudanzas de Madrid a Valencia: unos 355 km por la A-3, tiempos orientativos y factores del precio. Pide tu presupuesto gratis y sin ningún compromiso.',
    etiqueta: 'Mudanzas Madrid - Valencia',
    resumen: 'Unos 355 km por la A-3, una ruta corta que a menudo permite cargar y entregar en poco tiempo.',
    h1: { antes: 'Mudanzas de Madrid', resaltado: 'a Valencia', despues: '' },
    kicker: 'RUTA MADRID - VALENCIA',
    intro:
      'Menos de cuatro horas de autovía separan las dos ciudades, lo que convierte a esta ruta en una de las más cómodas de planificar. Lo importante es organizar bien los accesos en cada extremo.',
    foto: 'furgoneta-carretera',
    fotoAlt: 'Furgoneta blanca en carretera, como en una mudanza de Madrid a Valencia',
    fotoContenido: 'nacionales',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza de Madrid a Valencia',
    destino: 'Valencia',
    fichas: [
      { etiqueta: 'Distancia aproximada', valor: '355 km' },
      { etiqueta: 'Conducción', valor: 'Unas 3,5 horas en turismo; más en camión' },
      { etiqueta: 'Vía principal', valor: 'A-3' },
      { etiqueta: 'Duración', valor: 'Entrega orientativa: 1-2 días' },
    ],
    secciones: [
      {
        titulo: 'Cómo es el recorrido',
        parrafos: [
          'La A-3, la autovía del Este, une Madrid y Valencia de forma casi directa, pasando por Tarancón, Motilla del Palancar y Requena. Es una carretera sin peajes en el tramo principal y con buen firme, aunque atraviesa la meseta conquense y el puerto de Contreras, donde en invierno a veces hay niebla o hielo.',
          'Con unos 355 kilómetros, es una distancia que a menudo permite plantear el traslado en una o dos jornadas. Para un camión, el tiempo real es superior al de un coche, pero sigue siendo una de las rutas más ágiles desde Madrid.',
        ],
      },
      {
        titulo: 'Tiempos orientativos',
        parrafos: [
          'Si la mudanza es pequeña o mediana y los accesos son buenos, a veces se puede cargar por la mañana y descargar el mismo día o al siguiente a primera hora. En una vivienda grande, lo razonable es contar con dos jornadas. Si tu mudanza viaja en carga compartida, los plazos dependerán de otros clientes en ruta.',
          'Te confirmaremos los plazos concretos en la propuesta. Si necesitas entrar a tu nuevo piso un día determinado, comunícanoslo pronto: en verano, cuando más gente se muda hacia la costa, conviene reservar con mayor antelación.',
        ],
      },
      {
        titulo: 'Qué influye en el precio de esta ruta',
        parrafos: [
          'Como el trayecto es relativamente corto, el peso de la carretera en el coste total es menor que en otras rutas, y los accesos ganan importancia.',
        ],
        lista: [
          'Volumen y número de muebles grandes de la vivienda.',
          'Horas de carga y descarga, según plantas y ascensor.',
          'Si conviene un vehículo más pequeño para llegar al portal en Valencia.',
          'Temporada: en verano y a final de mes hay más demanda en esta ruta.',
          'Embalaje, montaje de muebles o almacenaje temporal.',
          'Si la vivienda de destino está en el área metropolitana o en la costa.',
        ],
      },
      {
        titulo: 'Llegar a Valencia y su área metropolitana',
        parrafos: [
          'En Ciutat Vella, sobre todo en barrios como El Carme, las calles son estrechas y parte del tráfico está restringido, por lo que la descarga exige prever bien dónde se detiene el vehículo. El Ensanche y Ruzafa tienen más anchura, pero mucha actividad y poco espacio libre para aparcar, así que conviene revisar los horarios y la necesidad de reservar la vía pública.',
          'Si te mudas a la costa o a poblaciones cercanas, como Paterna, Torrent o Gandía, la situación cambia. En urbanizaciones y fincas de playa, los accesos son más amplios, pero algunas comunidades ponen límites al uso de los ascensores o a los horarios de obra y mudanza en temporada alta. Es mejor preguntar con tiempo al administrador.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Se puede hacer una mudanza de Madrid a Valencia en un día?',
        respuesta:
          'En mudanzas pequeñas o medianas con buenos accesos puede ser posible, aunque depende de la jornada de trabajo y de la disponibilidad. Te indicaremos el plazo realista en tu propuesta.',
      },
      {
        pregunta: '¿Hay peajes en la ruta entre Madrid y Valencia?',
        respuesta:
          'El recorrido principal por la A-3 es una autovía sin peaje. El tipo de vehículo y la ruta final se concretan al preparar el traslado, según las direcciones de origen y destino.',
      },
      {
        pregunta: '¿También vais a pueblos de la provincia de Valencia?',
        respuesta:
          'Podemos estudiar destinos en toda la provincia y la costa. Indica la dirección en el formulario para comprobar los accesos y preparar la propuesta.',
      },
      {
        pregunta: '¿Cuándo debo reservar si me mudo en verano?',
        respuesta:
          'Cuanto antes, especialmente para finales de mes o agosto. Puedes enviarnos la solicitud aunque aún no tengas todos los detalles, y lo vamos concretando contigo.',
      },
    ],
    relacionadas: ['mudanzas-nacionales', 'mudanzas-madrid-alicante', 'mudanzas-madrid-barcelona', 'mudanzas-pisos-madrid'],
    servicio: {
      nombre: 'Mudanzas de Madrid a Valencia',
      descripcion: 'Mudanzas de viviendas y oficinas entre Madrid, Valencia y su área metropolitana.',
      area: 'Valencia',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza de vivienda',
  },

  /* ---------------------------- SEVILLA ---------------------------- */
  {
    path: 'mudanzas-madrid-sevilla',
    tipo: 'ruta',
    padre: 'mudanzas-nacionales',
    title: 'Mudanzas Madrid - Sevilla | Mudanzas360',
    description:
      'Mudanzas de Madrid a Sevilla: unos 530 km por la A-4, tiempos orientativos y qué influye en el precio. Pide ahora tu presupuesto gratis y sin compromiso.',
    etiqueta: 'Mudanzas Madrid - Sevilla',
    resumen: 'Unos 530 km por la A-4, con un casco histórico sevillano que requiere planificar la descarga.',
    h1: { antes: 'Mudanzas de Madrid', resaltado: 'a Sevilla', despues: '' },
    kicker: 'RUTA MADRID - SEVILLA',
    intro:
      'De la meseta al Guadalquivir por Despeñaperros. Una ruta directa que requiere tener en cuenta el calor del verano y las estrechas calles de Sevilla al planificar el último tramo.',
    foto: 'nacionales',
    fotoAlt: 'Furgoneta cargada de cajas preparada para una mudanza de Madrid a Sevilla',
    fotoContenido: 'camion-autovia',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza de Madrid a Sevilla',
    destino: 'Sevilla',
    fichas: [
      { etiqueta: 'Distancia aproximada', valor: '530 km' },
      { etiqueta: 'Conducción', valor: 'Unas 5-5,5 horas en turismo; más en camión' },
      { etiqueta: 'Vía principal', valor: 'A-4 (autovía del Sur)' },
      { etiqueta: 'Duración', valor: 'Entrega orientativa: 1-2 días' },
    ],
    secciones: [
      {
        titulo: 'Cómo es el recorrido',
        parrafos: [
          'El trayecto sale de Madrid por la A-4 en dirección a Aranjuez, Valdepeñas y Bailén, y cruza Despeñaperros antes de seguir por Andújar, Córdoba y Écija. El paso de Sierra Morena es el tramo con más curvas, aunque la autovía actual lo ha hecho mucho más cómodo. A partir de allí, el camino es largo y bastante llano hasta Sevilla.',
          'Con un camión, hay que prever los descansos obligatorios y un ritmo más pausado, por lo que no suele ser lógico plantear la carga completa y la entrega en una sola jornada, salvo en mudanzas muy pequeñas. Salir temprano de Madrid ayuda a evitar el tráfico de la A-4 en la zona de Getafe y Pinto.',
        ],
      },
      {
        titulo: 'Tiempos orientativos',
        parrafos: [
          'Una mudanza con transporte dedicado suele organizarse para cargar en Madrid y entregar en Sevilla al día siguiente. Cuando viaja con otras cargas en el mismo recorrido, el plazo puede alargarse varios días, algo a lo que debes atender si dependes de una fecha de entrada.',
          'Estos plazos son orientativos y se concretan en tu propuesta. Dinos con antelación si te coincide con fechas de mucha actividad en la ciudad, como Semana Santa o la Feria: las restricciones de tráfico en el centro pueden condicionar por completo una mudanza.',
        ],
      },
      {
        titulo: 'Qué influye en el precio de esta ruta',
        parrafos: [
          'Además de los kilómetros, hay varios aspectos que marcan el coste del trayecto Madrid-Sevilla:',
        ],
        lista: [
          'Volumen total y si es posible organizar una carga compartida.',
          'Tiempo de carga y descarga, según plantas y ascensor.',
          'Acceso en Sevilla: en el casco antiguo puede requerirse un vehículo pequeño o un acarreo.',
          'Fechas: festividades locales y los meses de verano condicionan la planificación.',
          'Protección de objetos sensibles al calor, cuando se viaja en pleno verano.',
          'Embalaje, montaje y guardamuebles, si los necesitas.',
        ],
      },
      {
        titulo: 'Llegar a Sevilla sin contratiempos',
        parrafos: [
          'El casco histórico sevillano, uno de los más extensos de Europa, tiene calles estrechas y zonas de acceso restringido en barrios como Santa Cruz, San Lorenzo o La Macarena. Lo normal aquí es que un camión grande no pueda entrar, por lo que hay que estudiar antes la dirección y, en su caso, combinar con un vehículo de menor tamaño. Triana, Los Remedios o Nervión son más sencillos, aunque también tienen sus propias normas de carga y descarga.',
          'En cuanto al clima, con temperaturas muy altas en verano, conviene empezar pronto y evitar dejar en el vehículo objetos que no toleren bien el calor, como velas, ciertos productos o instrumentos delicados. Lleva contigo los medicamentos y lo que no deba quedarse en la carga durante horas.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto tarda la mudanza de Madrid a Sevilla?',
        respuesta:
          'Lo habitual en transporte dedicado es la entrega al día siguiente de la carga, y más tiempo en carga compartida. Es orientativo: el plazo definitivo se incluye en tu propuesta.',
      },
      {
        pregunta: '¿Qué pasa si vivo en el casco antiguo de Sevilla?',
        respuesta:
          'Revisamos tu dirección para saber si un camión puede acceder o si hay que usar un vehículo más pequeño o hacer un tramo a pie. Por eso es importante darnos la dirección exacta.',
      },
      {
        pregunta: '¿Se puede hacer la mudanza en Semana Santa o Feria?',
        respuesta:
          'Puede ser complicado por los cortes de tráfico. Si tu fecha coincide con estas celebraciones, indícalo en la solicitud para revisar qué opciones hay y si es mejor cambiar de día.',
      },
      {
        pregunta: '¿Hacéis también mudanzas a otras ciudades de Andalucía?',
        respuesta:
          'Sí, podemos estudiar cualquier destino, como Córdoba, Cádiz o Huelva. Indícanos tu dirección en el formulario y prepararemos una propuesta para ese recorrido.',
      },
    ],
    relacionadas: ['mudanzas-nacionales', 'mudanzas-madrid-malaga', 'montaje-desmontaje-muebles-mudanza', 'precios'],
    servicio: {
      nombre: 'Mudanzas de Madrid a Sevilla',
      descripcion: 'Mudanzas de viviendas y oficinas entre Madrid, Sevilla y su provincia.',
      area: 'Sevilla',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza de vivienda',
  },

  /* ---------------------------- MÁLAGA ---------------------------- */
  {
    path: 'mudanzas-madrid-malaga',
    tipo: 'ruta',
    padre: 'mudanzas-nacionales',
    title: 'Mudanzas Madrid - Málaga | Mudanzas360',
    description:
      'Mudanzas de Madrid a Málaga y la Costa del Sol: unos 530 km por la A-4 y A-45, tiempos orientativos y factores del precio. Pide presupuesto sin compromiso.',
    etiqueta: 'Mudanzas Madrid - Málaga',
    resumen: 'Unos 530 km hasta la capital, con destinos muy variados por la Costa del Sol.',
    h1: { antes: 'Mudanzas de Madrid', resaltado: 'a Málaga', despues: '' },
    kicker: 'RUTA MADRID - MÁLAGA',
    intro:
      'Nuevos trabajos, teletrabajo o una jubilación junto al mar: cada vez más madrileños se mudan a Málaga y la Costa del Sol. Te explicamos qué tener en cuenta en este trayecto.',
    foto: 'furgoneta-calle',
    fotoAlt: 'Camión pequeño en una calle arbolada, preparado para una mudanza de Madrid a Málaga',
    fotoContenido: 'furgoneta-carretera',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza de Madrid a Málaga',
    destino: 'Málaga',
    fichas: [
      { etiqueta: 'Distancia aproximada', valor: '530 km' },
      { etiqueta: 'Conducción', valor: 'Unas 5-5,5 horas en turismo; más en camión' },
      { etiqueta: 'Vía principal', valor: 'A-4 y A-45' },
      { etiqueta: 'Duración', valor: 'Entrega orientativa: 1-2 días' },
    ],
    secciones: [
      {
        titulo: 'Cómo es el recorrido',
        parrafos: [
          'La ruta sale de Madrid por la A-4 hasta Córdoba, donde toma la A-45 en dirección a Antequera y Málaga. La última parte, con el descenso desde Las Pedrizas, tiene pendientes pronunciadas y curvas que un camión debe afrontar con calma, sobre todo en días de lluvia.',
          'Si tu destino está en la Costa del Sol, hay que añadir el tramo por la A-7 o la AP-7, según el municipio. No es lo mismo terminar en el centro de Málaga que seguir hasta Marbella o Estepona, tanto por los kilómetros como por el tráfico de la temporada alta.',
        ],
      },
      {
        titulo: 'Tiempos orientativos',
        parrafos: [
          'En transporte dedicado es habitual cargar en Madrid y entregar en Málaga al día siguiente, aunque el tamaño de la mudanza puede requerir ajustar el calendario. Con carga compartida, el plazo es más amplio y depende de la ruta del vehículo.',
          'Para las viviendas de costa, conviene evitar las semanas de mayor afluencia, si tus fechas lo permiten. En julio y agosto hay más tráfico y más limitaciones en las urbanizaciones. El plazo concreto te lo confirmaremos al preparar la propuesta.',
        ],
      },
      {
        titulo: 'Qué influye en el precio de esta ruta',
        parrafos: [
          'Cada mudanza es distinta, pero en este recorrido estos son los factores que más hacen variar el presupuesto:',
        ],
        lista: [
          'Municipio exacto de destino y kilómetros adicionales por la costa.',
          'Volumen y organización del transporte: dedicado o compartido.',
          'Tipo de vivienda: pisos del centro, urbanizaciones o casas en zonas con pendientes.',
          'Normas de cada comunidad o urbanización para mudanzas.',
          'Temporada: el verano suele ser la época con mayor demanda.',
          'Servicios como embalaje, montaje o almacenaje temporal.',
        ],
      },
      {
        titulo: 'Acceso a Málaga y la Costa del Sol',
        parrafos: [
          'En el centro histórico de Málaga, con muchas calles peatonales alrededor de Larios y La Merced, la entrada de vehículos está muy limitada y habrá que estudiar el punto de descarga. Otras zonas, como Teatinos, Pedregalejo o El Palo, presentan situaciones distintas: desde avenidas amplias a calles estrechas cerca del paseo marítimo.',
          'En la costa son habituales las urbanizaciones con control de acceso, calles en cuesta y piscinas o jardines que limitan la llegada del camión a la puerta. Algunas comunidades solo permiten mudanzas en ciertos horarios o exigen avisar con antelación. Antes de la fecha, confirma con el administrador las condiciones y comprueba cómo y por dónde se llega.',
          'Si vas a una vivienda en alquiler vacacional o recién comprada, comprueba también que los suministros estén dados de alta para el día de la entrega y que tengas las llaves o el código de acceso. Y si la casa todavía no está disponible, un almacenaje temporal evita tener que adelantar el viaje.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta una mudanza de Madrid a Málaga?',
        respuesta:
          'Depende del volumen, los accesos, el municipio de destino y los servicios añadidos. Consulta los qué influye en el precio en nuestra página de precios y pídenos una propuesta para tu caso.',
      },
      {
        pregunta: '¿Llegáis a toda la Costa del Sol?',
        respuesta:
          'Podemos estudiar destinos como Torremolinos, Benalmádena, Fuengirola, Marbella o Estepona. Indica la dirección exacta para comprobar el acceso y calcular el trayecto real.',
      },
      {
        pregunta: '¿Mi urbanización puede poner limitaciones a la mudanza?',
        respuesta:
          'Sí. Algunas urbanizaciones y comunidades limitan los horarios o el uso de los ascensores. Pregunta al administrador y cuéntanoslo en tu solicitud para organizarlo con tiempo.',
      },
      {
        pregunta: '¿Podéis trasladar solo unos muebles a una segunda vivienda en la costa?',
        respuesta:
          'Sí, podemos valorarlo como un porte de larga distancia o en carga compartida si tienes flexibilidad con las fechas. Dinos qué quieres llevar y lo estudiamos.',
      },
    ],
    relacionadas: ['mudanzas-nacionales', 'mudanzas-madrid-sevilla', 'portes-madrid', 'guardamuebles-madrid'],
    servicio: {
      nombre: 'Mudanzas de Madrid a Málaga',
      descripcion: 'Mudanzas de viviendas y oficinas entre Madrid, Málaga y la Costa del Sol.',
      area: 'Málaga',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza de vivienda',
  },

  /* ---------------------------- ALICANTE ---------------------------- */
  {
    path: 'mudanzas-madrid-alicante',
    tipo: 'ruta',
    padre: 'mudanzas-nacionales',
    title: 'Mudanzas Madrid - Alicante | Mudanzas360',
    description:
      'Mudanzas de Madrid a Alicante y la Costa Blanca: unos 420 km por la A-3 y A-31, tiempos orientativos y factores del precio. Presupuesto gratis.',
    etiqueta: 'Mudanzas Madrid - Alicante',
    resumen: 'Unos 420 km por la A-3 y la A-31, una ruta habitual hacia viviendas de costa.',
    h1: { antes: 'Mudanzas de Madrid', resaltado: 'a Alicante', despues: '' },
    kicker: 'RUTA MADRID - ALICANTE',
    intro:
      'Muchas familias madrileñas tienen un vínculo con la Costa Blanca, ya sea para mudarse de forma definitiva o por una segunda residencia. Te contamos cómo organizar este traslado.',
    foto: 'furgoneta-blanca',
    fotoAlt: 'Furgoneta blanca preparada para una mudanza de Madrid a Alicante',
    fotoContenido: 'camion-autovia',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza de Madrid a Alicante',
    destino: 'Alicante',
    fichas: [
      { etiqueta: 'Distancia aproximada', valor: '420 km' },
      { etiqueta: 'Conducción', valor: 'Unas 4 horas en turismo; más en camión' },
      { etiqueta: 'Vía principal', valor: 'A-3 y A-31' },
      { etiqueta: 'Duración', valor: 'Entrega orientativa: 1-2 días' },
    ],
    secciones: [
      {
        titulo: 'Cómo es el recorrido',
        parrafos: [
          'Se sale de Madrid por la A-3 y, a la altura de Atalaya del Cañavate, la ruta se desvía hacia la A-31 para pasar por Albacete, Almansa y Villena hasta Alicante. Es una vía cómoda y sin peajes en la mayor parte de su recorrido, con unos 420 kilómetros que transcurren principalmente por la llanura manchega.',
          'Su trazado facilita los camiones, aunque la zona de Albacete y Almansa a veces sufre viento y, en invierno, heladas puntuales. Si tu destino es Benidorm, Torrevieja, Dénia o Elche, habrá que sumar el tramo correspondiente y revisar la vía más adecuada.',
        ],
      },
      {
        titulo: 'Tiempos orientativos',
        parrafos: [
          'Las mudanzas de tamaño pequeño o medio pueden llegar a organizarse para entregar el mismo día de la carga o a la mañana siguiente, dependiendo de los accesos y de la jornada. En las viviendas grandes o con muchos servicios adicionales, es más realista contar con dos jornadas.',
          'Si la mudanza viaja junto con otras en carga compartida, el plazo puede ser más largo. Si solo llevas parte de tus cosas a una segunda residencia, esta alternativa puede encajar bien y salir más a cuenta, siempre que tengas margen con las fechas.',
        ],
      },
      {
        titulo: 'Qué influye en el precio de esta ruta',
        parrafos: [
          'Para calcular el presupuesto de un traslado entre Madrid y la provincia de Alicante, hay que considerar sobre todo:',
        ],
        lista: [
          'Municipio de destino, ya que la Costa Blanca es muy extensa.',
          'Volumen y número de piezas voluminosas de la mudanza.',
          'Tipo de edificio: torres de apartamentos, urbanizaciones o casco urbano.',
          'Disponibilidad de los ascensores y normas de la comunidad.',
          'Fechas: en temporada alta hay más demanda y más tráfico en la costa.',
          'Si necesitas embalar, desmontar o guardar temporalmente tus muebles.',
        ],
      },
      {
        titulo: 'Llegar a la ciudad y a la Costa Blanca',
        parrafos: [
          'En Alicante capital, el Barrio de Santa Cruz y el casco antiguo tienen calles empinadas y muy estrechas, a las que no llegan los camiones de mudanzas. Otros barrios, como San Juan Playa o el Ensanche, presentan menos complicaciones de acceso, aunque es frecuente que haya poco sitio libre para aparcar en la zona del paseo y en temporada alta.',
          'Benidorm y Torrevieja tienen una particularidad: muchas torres y urbanizaciones con administradores que regulan las mudanzas, con horarios establecidos y, a veces, ascensores reservados. Si te mudas a una vivienda vacacional, comprueba con tiempo las normas y quién podrá abrir la puerta. Si no vas a poder estar ese día, dínoslo para coordinar la entrega de otra forma.',
          'En edificios altos, conviene medir el ascensor antes de decidir qué muebles llevarte: un sofá o un armario grandes pueden no caber, y subirlos por la escalera a una planta elevada no siempre es viable. Si tienes dudas, envíanos las medidas al pedir presupuesto.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuántos kilómetros hay entre Madrid y Alicante?',
        respuesta:
          'Unos 420 kilómetros por carretera hasta Alicante capital. Dependiendo del municipio de la Costa Blanca al que vayas, el recorrido puede ser sensiblemente mayor.',
      },
      {
        pregunta: '¿Se puede llevar solo parte de los muebles a una segunda residencia?',
        respuesta:
          'Sí. Puede organizarse como un porte de larga distancia o una carga compartida, según lo que quieras trasladar. Cuéntanos el volumen y tu margen de fechas en la solicitud.',
      },
      {
        pregunta: '¿Hacéis mudanzas a Benidorm y Torrevieja?',
        respuesta:
          'Podemos estudiar destinos en toda la provincia de Alicante. Indica en el formulario la dirección y las normas que conozcas de la comunidad para preparar la propuesta.',
      },
      {
        pregunta: '¿Tengo que estar presente en la entrega?',
        respuesta:
          'Lo recomendable es que haya alguien para abrir, indicar dónde va cada cosa y revisar la entrega. Si no vas a poder estar, cuéntanoslo y buscamos una forma de coordinarlo.',
      },
    ],
    relacionadas: ['mudanzas-nacionales', 'mudanzas-madrid-valencia', 'portes-madrid', 'embalaje-mudanzas-madrid'],
    servicio: {
      nombre: 'Mudanzas de Madrid a Alicante',
      descripcion: 'Mudanzas de viviendas y oficinas entre Madrid, Alicante y la Costa Blanca.',
      area: 'Alicante',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza de vivienda',
  },
];
