import { PaginaSeo } from './pagina-seo';

/**
 * Municipios y distritos añadidos. Los tiempos desde el centro son orientativos, en coche y sin
 * atascos. No se afirman trámites municipales concretos: solo se recuerda consultar el permiso
 * de reserva de espacio para carga y descarga.
 */
export const PAGINAS_ZONAS_NUEVAS: PaginaSeo[] = [
  /* ---------------------------- LEGANÉS ---------------------------- */
  {
    path: 'mudanzas-leganes',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Mudanzas en Leganés | Mudanzas360',
    description:
      'Mudanzas en Leganés: Zarzaquemada, San Nicasio, El Carrascal o Arroyo Culebro. Tenemos en cuenta bloques sin ascensor y aparcamiento. Presupuesto gratis.',
    etiqueta: 'Mudanzas en Leganés',
    resumen: 'De los bloques de Zarzaquemada a los nuevos barrios de Arroyo Culebro.',
    h1: { antes: 'Mudanzas', resaltado: 'en Leganés', despues: '' },
    kicker: 'MUDANZAS EN LEGANÉS',
    intro:
      'Leganés concentra miles de pisos en bloques de los años sesenta y setenta junto a barrios nuevos con garaje. Te preguntamos por tu calle y tu portal para preparar el traslado sin sorpresas.',
    foto: 'madrid',
    fotoAlt: 'Camión de mudanzas con cajas frente a un bloque de viviendas',
    fotoContenido: 'cajas-apiladas',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza en Leganés',
    fichas: [
      { etiqueta: 'Desde Madrid centro', valor: 'Unos 20-25 min en coche, sin atascos' },
      { etiqueta: 'Accesos', valor: 'A-42, M-40, M-45 y M-406' },
      { etiqueta: 'Vivienda habitual', valor: 'Pisos en bloque de 4-5 alturas' },
      { etiqueta: 'Cerca', valor: 'Getafe, Alcorcón y Fuenlabrada' },
    ],
    secciones: [
      {
        titulo: 'Cómo se llega a Leganés con un camión',
        parrafos: [
          'Desde la capital, la A-42 en dirección a Toledo es la vía directa, y la M-40 y la M-45 permiten enlazar con Getafe, Alcorcón o la A-5 sin cruzar Madrid. La M-406 atraviesa el municipio y conecta con Alcorcón. A primera hora de la mañana la A-42 suele ir cargada hacia Madrid, así que para mudanzas que salen de Leganés conviene empezar temprano.',
          'Dentro de la ciudad, las grandes avenidas de Zarzaquemada y de Leganés Norte facilitan el paso, mientras que el casco antiguo, alrededor de la plaza de España y la calle Juan Muñoz, tiene calles más estrechas en las que hay que prever dónde se detiene el vehículo.',
        ],
      },
      {
        titulo: 'Aparcamiento y espacio para cargar',
        parrafos: [
          'En Zarzaquemada y San Nicasio los bloques se disponen alrededor de zonas peatonales y aparcamientos interiores, y a veces el portal queda lejos de la calzada. Ese recorrido a pie con cada caja suma tiempo, y lo tenemos en cuenta al preparar la propuesta.',
          'Si necesitas ocupar plazas en la vía pública el día del traslado, pregunta en el Ayuntamiento de Leganés qué hay que solicitar y con cuánta antelación. Así evitas que el camión tenga que quedarse lejos o en doble fila.',
        ],
      },
      {
        titulo: 'Tipo de vivienda habitual',
        parrafos: [
          'Buena parte de Leganés se levantó en las décadas de los sesenta y setenta: bloques de cuatro o cinco plantas, escaleras con rellanos estrechos y ascensores pequeños o instalados a posteriori. Un armario de tres puertas casi siempre hay que desmontarlo, y los colchones de matrimonio pasan justos por algunos tramos.',
          'En Arroyo Culebro, Leganés Norte o Valdepelayo predominan edificios más recientes con ascensor amplio y garaje, donde la carga es más ágil. Cuando la mudanza une un barrio antiguo con uno nuevo, el trabajo se concentra en el primero.',
        ],
        subsecciones: [
          {
            titulo: 'Estudiantes del campus',
            texto: 'El campus de la Universidad Carlos III genera mudanzas pequeñas al inicio y al final de cada curso, a menudo de habitaciones en pisos compartidos.',
          },
        ],
      },
      {
        titulo: 'Mudanzas frecuentes desde Leganés',
        parrafos: [
          'Muchos traslados son dentro del propio municipio o hacia Getafe, Fuenlabrada y Alcorcón, con recorridos cortos en los que pesan más las plantas que los kilómetros. También es habitual la mudanza a Madrid capital o, al revés, la de quien busca en Leganés un piso más grande a menor precio.',
          'Si te mudas por una reforma, un guardamuebles temporal evita tener que trasladar dos veces todos los muebles.',
        ],
      },
      {
        titulo: "Cómo preparar tu mudanza en Leganés",
        parrafos: [
          "Si vives en uno de los bloques sin ascensor de Zarzaquemada o San Nicasio, habla con los vecinos unos días antes: un rellano despejado y el portal abierto durante la carga ahorran mucho tiempo. Retira también macetas, bicicletas o felpudos de la escalera, porque en tramos estrechos cualquier obstáculo obliga a maniobrar con los muebles.",
          "En los edificios nuevos de Arroyo Culebro o Valdepelayo, lo que más ayuda es reservar el ascensor y avisar al conserje o al administrador. Si el garaje tiene altura suficiente para una furgoneta, cuéntanoslo y valoramos cargar desde allí.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Podéis hacer una mudanza en un bloque sin ascensor de Zarzaquemada?',
        respuesta: 'Sí. Indica la planta en el formulario: con ese dato calculamos el tiempo y decidimos qué muebles conviene desmontar antes de bajarlos por la escalera.',
      },
      {
        pregunta: '¿Trabajáis en Arroyo Culebro y Leganés Norte?',
        respuesta: 'Sí, en todos los barrios de Leganés. Danos la dirección exacta para revisar el acceso del vehículo y el garaje, si lo hay.',
      },
      {
        pregunta: '¿Hace falta permiso para aparcar el camión en Leganés?',
        respuesta: 'Depende de la calle. Consulta en el ayuntamiento si necesitas reservar espacio y cuéntanoslo para ajustar la hora de llegada.',
      },
      {
        pregunta: '¿Hacéis mudanzas de estudiantes cerca del campus?',
        respuesta: 'Sí, también mudanzas pequeñas de una habitación. Elige «Estudio o 1 habitación» en el formulario y detalla lo que hay que mover.',
      },
      {
        pregunta: "¿Se puede cargar desde el garaje en Arroyo Culebro?",
        respuesta: "Si la altura de la rampa lo permite y la comunidad lo autoriza, sí. Indícanos la altura máxima y lo comprobamos antes del día.",
      },
    ],
    relacionadas: ['zonas', 'mudanzas-getafe', 'mudanzas-fuenlabrada', 'mudanzas-estudiantes-madrid'],
    servicio: {
      nombre: 'Mudanzas en Leganés',
      descripcion: 'Mudanzas de viviendas y oficinas y portes en Leganés, Comunidad de Madrid.',
      area: 'Leganés',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza completa',
  },

  /* ---------------------------- FUENLABRADA ---------------------------- */
  {
    path: 'mudanzas-fuenlabrada',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Mudanzas en Fuenlabrada | Mudanzas360',
    description:
      'Mudanzas en Fuenlabrada: Loranca, El Naranjo, La Serna o el centro. Viviendas, negocios y portes con presupuesto gratis y trato directo.',
    etiqueta: 'Mudanzas en Fuenlabrada',
    resumen: 'Del centro y El Naranjo a Loranca, con mucho movimiento de negocios.',
    h1: { antes: 'Mudanzas', resaltado: 'en Fuenlabrada', despues: '' },
    kicker: 'MUDANZAS EN FUENLABRADA',
    intro:
      'Fuenlabrada combina barrios densos de bloques con desarrollos como Loranca y una gran actividad comercial e industrial. Movemos viviendas y negocios ajustando el trabajo a cada calle.',
    foto: 'portes',
    fotoAlt: 'Camión cargado con un sillón protegido, cajas y plantas',
    fotoContenido: 'oficina-diafana',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza en Fuenlabrada',
    fichas: [
      { etiqueta: 'Desde Madrid centro', valor: 'Unos 25-35 min en coche, sin atascos' },
      { etiqueta: 'Accesos', valor: 'A-42, M-506, M-407 y M-50' },
      { etiqueta: 'Vivienda habitual', valor: 'Pisos en bloque y adosados' },
      { etiqueta: 'Cerca', valor: 'Leganés, Getafe, Móstoles y Parla' },
    ],
    secciones: [
      {
        titulo: 'Accesos por carretera',
        parrafos: [
          'La A-42 y la M-407 comunican Fuenlabrada con Madrid y Leganés, y la M-506 la une con Móstoles hacia el oeste y con Pinto hacia el este. La M-50 pasa cerca y permite enlazar con la A-4 o la A-5 sin pasar por la capital, algo útil si la mudanza va a otro municipio del sur.',
          'El tráfico de entrada y salida de los polígonos industriales, sobre todo en la zona de Cobo Calleja, se nota en hora punta. Si tu mudanza es entre semana, conviene evitar las primeras horas de la tarde en las salidas hacia esas áreas.',
        ],
      },
      {
        titulo: 'Dónde para el camión',
        parrafos: [
          'En el centro y en barrios como El Naranjo o La Avanzada, las calles residenciales están muy ocupadas durante el día y no siempre hay hueco junto al portal. Loranca, en cambio, tiene avenidas más anchas y edificios con garaje, lo que facilita acercar el vehículo.',
          'Si la calle es estrecha o está saturada, infórmate en el Ayuntamiento de Fuenlabrada sobre cómo reservar espacio para la carga. Cuéntanos lo que te digan y planificamos la mudanza para que el vehículo tenga sitio.',
        ],
      },
      {
        titulo: 'Viviendas y negocios',
        parrafos: [
          'El crecimiento de Fuenlabrada en los años setenta y ochenta dejó muchos pisos de tres habitaciones en bloques de varias alturas, con ascensores que no siempre admiten un armario o un sofá grandes. En Loranca y otras zonas recientes hay más viviendas con ascensor amplio, trastero y garaje, y también adosados de dos plantas.',
          'Además de viviendas, en Fuenlabrada son frecuentes los traslados de comercios, almacenes y oficinas pequeñas. En esos casos importa sobre todo interrumpir lo mínimo la actividad, y podemos plantear el trabajo por fases.',
        ],
        subsecciones: [
          {
            titulo: 'Campus universitario',
            texto: 'El campus de la Universidad Rey Juan Carlos genera mudanzas pequeñas de estudiantes, sobre todo en septiembre y al terminar el curso.',
          },
        ],
      },
      {
        titulo: 'Traslados habituales',
        parrafos: [
          'Los recorridos más comunes son dentro del municipio y hacia Móstoles, Leganés, Getafe o Parla. También hay muchas familias que salen de Fuenlabrada hacia otras provincias, sobre todo hacia Andalucía y Castilla-La Mancha: si es tu caso, consulta nuestras mudanzas nacionales.',
          'Para hacerte una idea del volumen y del rango de precio, puedes probar la calculadora de mudanza antes de pedir presupuesto.',
        ],
      },
      {
        titulo: "Consejos para una mudanza en Fuenlabrada",
        parrafos: [
          "En los barrios de bloques del centro, el mejor momento para cargar suele ser la primera hora de la mañana, cuando todavía quedan huecos en la calle y la actividad de los comercios es menor. Si tu portal da a una calle peatonal o a una plaza interior, dinos por dónde se llega en vehículo para planificar el recorrido a pie.",
          "Si trasladas un negocio, prepara un inventario por zonas, como almacén, mostrador u oficina, y etiqueta cada caja con su destino. Así la descarga se hace en orden y puedes reabrir antes. También podemos dejar el mobiliario montado para que no tengas que ocuparte de ello.",
        ],
        lista: [
          "Elige una hora temprana en las calles más concurridas.",
          "Indica si hay plaza interior o calle peatonal.",
          "En negocios, etiqueta por zonas de destino.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Trasladáis negocios y almacenes en Fuenlabrada?',
        respuesta: 'Sí, podemos valorar traslados de comercios, almacenes y oficinas. Cuéntanos qué tienes y qué margen de tiempo hay para planificarlo por fases si hace falta.',
      },
      {
        pregunta: '¿Llegáis a Loranca?',
        respuesta: 'Sí. Indica la dirección y si hay garaje o zona de carga en el edificio, para organizar el acceso del vehículo.',
      },
      {
        pregunta: '¿Puedo mudarme de Fuenlabrada a otra provincia con vosotros?',
        respuesta: 'Sí, podemos estudiarlo. Consulta nuestras mudanzas nacionales e indica el destino en el formulario.',
      },
      {
        pregunta: '¿Qué hago si mi calle tiene poco aparcamiento?',
        respuesta: 'Pregunta en el ayuntamiento si puedes reservar espacio para la carga y cuéntanoslo. Si no es posible, lo tenemos en cuenta para calcular el tiempo de trabajo.',
      },
      {
        pregunta: "¿Podéis trabajar en fin de semana para no cerrar el negocio?",
        respuesta: "Podemos valorarlo según disponibilidad. Indica en la solicitud qué días y horarios te vienen mejor para no interrumpir la actividad.",
      },
    ],
    relacionadas: ['zonas', 'mudanzas-leganes', 'mudanzas-parla', 'mudanzas-oficinas-madrid'],
    servicio: {
      nombre: 'Mudanzas en Fuenlabrada',
      descripcion: 'Mudanzas de viviendas y negocios y portes en Fuenlabrada, Comunidad de Madrid.',
      area: 'Fuenlabrada',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza completa',
  },

  /* ---------------------------- ALCORCÓN ---------------------------- */
  {
    path: 'mudanzas-alcorcon',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Mudanzas en Alcorcón | Mudanzas360',
    description:
      'Mudanzas en Alcorcón: Parque Lisboa, Ensanche Sur, Fuente Cisneros o el centro. Pisos, chalets y portes con presupuesto gratis y trato directo.',
    etiqueta: 'Mudanzas en Alcorcón',
    resumen: 'Bloques del centro, Parque Lisboa y los pisos nuevos del Ensanche Sur.',
    h1: { antes: 'Mudanzas', resaltado: 'en Alcorcón', despues: '' },
    kicker: 'MUDANZAS EN ALCORCÓN',
    intro:
      'Alcorcón está a un paso de Madrid por la A-5 y tiene barrios muy distintos: bloques del centro, grandes conjuntos como Parque Lisboa y pisos recientes en el Ensanche Sur. Adaptamos la mudanza a cada uno.',
    foto: 'viviendas',
    fotoAlt: 'Camión de mudanzas con cajas a la puerta de una vivienda',
    fotoContenido: 'salon-cajas',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza en Alcorcón',
    fichas: [
      { etiqueta: 'Desde Madrid centro', valor: 'Unos 20-25 min en coche, sin atascos' },
      { etiqueta: 'Accesos', valor: 'A-5, M-40, M-50 y M-406' },
      { etiqueta: 'Vivienda habitual', valor: 'Pisos en bloque y urbanizaciones' },
      { etiqueta: 'Cerca', valor: 'Móstoles, Leganés y Madrid' },
    ],
    secciones: [
      {
        titulo: 'Carreteras y entradas al municipio',
        parrafos: [
          'La A-5, la autovía de Extremadura, conecta Alcorcón con Madrid en pocos kilómetros, aunque se congestiona a menudo en los accesos a la capital. La M-40 y la M-50 dan salida hacia el norte y el sur, y la M-406 enlaza con Leganés y Getafe.',
          'Si tu mudanza va a Madrid capital, merece la pena salir a primera hora o a media mañana: el tramo de la A-5 entre Alcorcón y la M-40 es de los más cargados en hora punta.',
        ],
      },
      {
        titulo: 'Carga y descarga en cada barrio',
        parrafos: [
          'En el centro histórico y alrededor de la calle Mayor, las calles son estrechas y de mucho comercio, y encontrar sitio para el vehículo es lo más complicado. Parque Lisboa y Parque Oeste se organizan en grandes manzanas con zonas interiores, así que a veces hay que recorrer un trecho hasta el portal.',
          'El Ensanche Sur tiene calles anchas y edificios recientes con garaje, lo que facilita mucho la carga. Si en tu calle el aparcamiento es complicado, infórmate en el ayuntamiento de si conviene solicitar una reserva de espacio para el día de la mudanza.',
        ],
      },
      {
        titulo: 'Qué viviendas encontramos',
        parrafos: [
          'Alcorcón creció muy deprisa en los años sesenta y setenta, y muchos pisos de esa época tienen tres habitaciones y escaleras estrechas. En Fuente Cisneros y Valderas hay conjuntos con más zonas verdes, y en Los Castillos y el Ensanche Sur abundan los pisos nuevos con ascensor amplio.',
          'También hay urbanizaciones de chalets y adosados en los límites del municipio, con varias plantas y trastero, donde el volumen suele ser mayor del que parece.',
        ],
        subsecciones: [
          {
            titulo: 'Junto al campus',
            texto: 'El campus de la Universidad Rey Juan Carlos atrae a estudiantes que se mudan en septiembre o al terminar el curso, a menudo con muy poco volumen.',
          },
        ],
      },
      {
        titulo: 'Recorridos más habituales',
        parrafos: [
          'Es frecuente el traslado entre Alcorcón y Móstoles, dos municipios prácticamente unidos, o hacia barrios del sur y el oeste de Madrid como Carabanchel o Latina. Son recorridos cortos en los que lo que cuenta es la carga y la descarga.',
          'Si vas a cambiar de muebles al mudarte, podemos coordinar el montaje de los nuevos en la vivienda de destino.',
        ],
      },
      {
        titulo: "Antes del día de la mudanza en Alcorcón",
        parrafos: [
          "En Parque Lisboa y Parque Oeste, pregunta a la comunidad si hay un acceso para vehículos hasta las zonas interiores o si la carga debe hacerse desde la calle exterior. Esa diferencia puede suponer decenas de metros por cada viaje, y es lo que más cambia el tiempo de trabajo en esos conjuntos.",
          "Si te mudas al Ensanche Sur o a Los Castillos, comprueba las normas de la nueva comunidad sobre horarios y protección del ascensor, que en promociones recientes suelen estar por escrito. Con esa información, el equipo llega con el material de protección adecuado y la descarga no se retrasa.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Hacéis mudanzas entre Alcorcón y Móstoles?',
        respuesta: 'Sí, es uno de los recorridos más habituales. Con trayectos tan cortos, lo que más influye en el trabajo son las plantas y los accesos de cada vivienda.',
      },
      {
        pregunta: '¿Podéis cargar en el centro de Alcorcón?',
        respuesta: 'Sí. Danos la dirección exacta y revisaremos dónde puede detenerse el vehículo, porque algunas calles del centro son estrechas y comerciales.',
      },
      {
        pregunta: '¿Trabajáis en el Ensanche Sur?',
        respuesta: 'Sí. Si el edificio tiene garaje o zona de carga, indícalo: suele hacer la mudanza más rápida.',
      },
      {
        pregunta: '¿Cuánto cuesta una mudanza en Alcorcón?',
        respuesta: 'Depende del volumen, las plantas y los servicios. Consulta la guía de precios o la calculadora y pídenos una propuesta para tu caso.',
      },
      {
        pregunta: "¿Tardáis más en Parque Lisboa por las zonas interiores?",
        respuesta: "Puede ser, si el portal queda lejos de la calle. Por eso te preguntamos por el acceso: así el tiempo previsto se ajusta a la realidad.",
      },
    ],
    relacionadas: ['zonas', 'mudanzas-mostoles', 'mudanzas-leganes', 'mudanzas-carabanchel'],
    servicio: {
      nombre: 'Mudanzas en Alcorcón',
      descripcion: 'Mudanzas de viviendas y oficinas y portes en Alcorcón, Comunidad de Madrid.',
      area: 'Alcorcón',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza completa',
  },

  /* ---------------------------- TORREJÓN DE ARDOZ ---------------------------- */
  {
    path: 'mudanzas-torrejon-de-ardoz',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Mudanzas en Torrejón de Ardoz | Mudanzas360',
    description:
      'Mudanzas en Torrejón de Ardoz: Soto del Henares, Fresnos, Parque Granada o el centro. Pisos y portes con presupuesto gratis y un solo interlocutor.',
    etiqueta: 'Mudanzas en Torrejón de Ardoz',
    resumen: 'Corredor del Henares: del centro a Soto del Henares, junto a la A-2.',
    h1: { antes: 'Mudanzas en', resaltado: 'Torrejón de Ardoz', despues: '' },
    kicker: 'MUDANZAS EN TORREJÓN',
    intro:
      'En pleno corredor del Henares, Torrejón une barrios tradicionales con desarrollos amplios como Soto del Henares. Preparamos cada traslado según la calle, el portal y la planta.',
    foto: 'furgoneta-blanca',
    fotoAlt: 'Furgoneta blanca aparcada en la calle',
    fotoContenido: 'viviendas',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza en Torrejón de Ardoz',
    fichas: [
      { etiqueta: 'Desde Madrid centro', valor: 'Unos 25-30 min en coche, sin atascos' },
      { etiqueta: 'Accesos', valor: 'A-2, M-50 y M-206' },
      { etiqueta: 'Vivienda habitual', valor: 'Pisos en bloque y urbanizaciones' },
      { etiqueta: 'Cerca', valor: 'Alcalá de Henares, San Fernando y Ajalvir' },
    ],
    secciones: [
      {
        titulo: 'La A-2 y las salidas de Torrejón',
        parrafos: [
          'La A-2 es la conexión con Madrid y con el resto del corredor del Henares, y su tramo hasta la capital es de los que más tráfico soportan en hora punta. La M-50 permite rodear Madrid hacia el norte o el sur, y la M-206 enlaza con Loeches y San Fernando.',
          'Para mudanzas hacia Madrid o hacia Alcalá, conviene elegir la franja horaria con calma: a media mañana el trayecto suele ser bastante más rápido que a primera hora.',
        ],
      },
      {
        titulo: 'Aparcar y cargar',
        parrafos: [
          'El centro de Torrejón, en torno a la plaza Mayor y las calles comerciales, tiene poco espacio libre y algunas vías de sentido único. En Fresnos, Parque Granada o Las Veredillas los edificios se agrupan en manzanas con aparcamientos propios, y a veces el portal queda separado de la calle.',
          'Soto del Henares, de construcción reciente, tiene calles anchas y garajes, lo que suele facilitar mucho la carga. Si hace falta reservar sitio en la calzada, consúltalo en el ayuntamiento con antelación.',
        ],
      },
      {
        titulo: 'Tipo de vivienda',
        parrafos: [
          'En los barrios tradicionales abundan los pisos de los años setenta y ochenta, con tres habitaciones y ascensores de tamaño justo. En Soto del Henares predominan los pisos nuevos con trastero y garaje, y en los alrededores hay también urbanizaciones de adosados.',
          'Torrejón tiene además una base aérea, y entre las familias vinculadas a ella hay traslados frecuentes a otras provincias, con calendarios marcados por la fecha de incorporación.',
        ],
        subsecciones: [
          {
            titulo: 'Mudanzas con fecha fija',
            texto: 'Si tu traslado depende de una fecha de incorporación o de la entrega de llaves, indícalo desde el principio para reservar el día con tiempo.',
          },
        ],
      },
      {
        titulo: 'Traslados frecuentes',
        parrafos: [
          'Son habituales las mudanzas hacia Alcalá de Henares, Madrid capital y otros municipios del corredor, así como las nacionales hacia cualquier punto de España. Si las fechas de salida y entrada no coinciden, un guardamuebles temporal puede resolver el hueco.',
          'Cuéntanos tu caso en el formulario y te responde tu único interlocutor de Mudanzas360.',
        ],
      },
      {
        titulo: "Organizar una mudanza en Torrejón",
        parrafos: [
          "Si tu traslado está ligado a un destino laboral, como ocurre a menudo en el entorno de la base aérea, reserva la fecha en cuanto conozcas el día de incorporación. Cuando el calendario es ajustado, conviene dejar embalado con antelación todo lo que no uses a diario y concentrar en el último día solo los muebles y lo imprescindible.",
          "En Fresnos, Parque Granada o Las Veredillas, averigua si el aparcamiento del conjunto es privado y si el vehículo puede entrar en él. En el centro, donde hay calles de sentido único, indícanos por qué calle se llega mejor al portal para planificar la ruta de entrada y salida.",
          "Si la mudanza es desde Torrejón a otra provincia, piensa también en qué necesitarás los primeros días en destino y llévalo contigo, aparte de la carga principal.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Hacéis mudanzas en Soto del Henares?',
        respuesta: 'Sí. Indica si el edificio tiene garaje o zona de carga, porque en los edificios nuevos suele agilizar mucho el trabajo.',
      },
      {
        pregunta: '¿Podéis hacer un traslado a otra provincia desde Torrejón?',
        respuesta: 'Sí, podemos estudiarlo. Indica el destino y la fecha en la que tienes que estar allí para organizar el calendario.',
      },
      {
        pregunta: '¿Cuál es la mejor hora para una mudanza hacia Madrid?',
        respuesta: 'Suele ser preferible evitar la primera hora de la mañana, cuando la A-2 está más cargada hacia la capital. Lo acordamos contigo.',
      },
      {
        pregunta: '¿Necesito permiso para el camión en el centro?',
        respuesta: 'Puede ser necesario según la calle. Consúltalo en el ayuntamiento y cuéntanoslo para ajustar el horario.',
      },
      {
        pregunta: "¿Podéis cargar dentro de los aparcamientos de las manzanas?",
        respuesta: "Si son accesibles para el vehículo y la comunidad lo permite, sí. Pregúntalo antes y cuéntanos qué te dicen.",
      },
    ],
    relacionadas: ['zonas', 'mudanzas-alcala-de-henares', 'mudanzas-nacionales', 'guardamuebles-madrid'],
    servicio: {
      nombre: 'Mudanzas en Torrejón de Ardoz',
      descripcion: 'Mudanzas de viviendas y oficinas y portes en Torrejón de Ardoz, Comunidad de Madrid.',
      area: 'Torrejón de Ardoz',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza completa',
  },

  /* ---------------------------- PARLA ---------------------------- */
  {
    path: 'mudanzas-parla',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Mudanzas en Parla | Mudanzas360',
    description:
      'Mudanzas en Parla: centro, Parla Este y barrios residenciales. Pisos, adosados y portes con presupuesto gratis y un solo interlocutor.',
    etiqueta: 'Mudanzas en Parla',
    resumen: 'Del centro a Parla Este, con conexión por la A-42.',
    h1: { antes: 'Mudanzas', resaltado: 'en Parla', despues: '' },
    kicker: 'MUDANZAS EN PARLA',
    intro:
      'Parla mezcla un centro denso de bloques con barrios nuevos como Parla Este, de calles anchas. Planificamos el traslado según el tipo de edificio y el espacio que haya para el vehículo.',
    foto: 'salon-cajas',
    fotoAlt: 'Salón con cajas de cartón apiladas y plantas',
    fotoContenido: 'furgoneta-blanca',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza en Parla',
    fichas: [
      { etiqueta: 'Desde Madrid centro', valor: 'Unos 25-35 min en coche, sin atascos' },
      { etiqueta: 'Accesos', valor: 'A-42, R-4, M-408 y M-410' },
      { etiqueta: 'Vivienda habitual', valor: 'Pisos en bloque y adosados' },
      { etiqueta: 'Cerca', valor: 'Pinto, Fuenlabrada y Getafe' },
    ],
    secciones: [
      {
        titulo: 'Llegar a Parla',
        parrafos: [
          'La A-42 es la conexión principal con Madrid, Getafe y Fuenlabrada. La R-4, de peaje, puede ser una alternativa los días de tráfico denso, y la M-408 y la M-410 enlazan con Pinto, Valdemoro y el resto del sur de la Comunidad.',
          'El tranvía recorre la ciudad y en algunos tramos condiciona por dónde se puede circular y parar. Si tu calle está en su recorrido, cuéntanoslo para revisar el punto de carga más adecuado.',
        ],
      },
      {
        titulo: 'Espacio para el camión',
        parrafos: [
          'En el casco urbano tradicional las calles son más estrechas y el aparcamiento está muy demandado, sobre todo por la tarde. Parla Este, en cambio, tiene avenidas amplias y edificios con garaje, y allí suele ser sencillo situar el vehículo cerca del portal.',
          'Antes de la fecha, averigua en el ayuntamiento si tu calle requiere reservar espacio para la carga y descarga. Una plaza libre junto al portal ahorra muchos viajes a pie con cajas y muebles.',
        ],
      },
      {
        titulo: 'Las viviendas de Parla',
        parrafos: [
          'Gran parte de la ciudad se construyó entre los años setenta y los noventa, con pisos de tres habitaciones en bloques de varias alturas. En Parla Este predominan los edificios nuevos, a menudo con piscina comunitaria, garaje y trastero, y en otras zonas hay urbanizaciones de adosados de dos o tres plantas.',
          'En los adosados, la escalera interior suele ser el punto crítico para subir camas y armarios, y es frecuente tener que desmontar piezas que entraron en paquete plano.',
        ],
        subsecciones: [
          {
            titulo: 'Trasteros y garajes',
            texto: 'Si tu vivienda tiene trastero o plaza de garaje con cosas guardadas, inclúyelos en la descripción: es volumen que a menudo se olvida.',
          },
        ],
      },
      {
        titulo: 'Recorridos frecuentes',
        parrafos: [
          'Abundan los traslados dentro de Parla y hacia Pinto, Fuenlabrada, Getafe o Madrid capital. También muchas familias se mudan desde Parla a otras comunidades: consulta nuestras rutas nacionales si es tu caso.',
          'Con la calculadora de mudanza puedes hacerte una idea del volumen antes de pedir tu presupuesto gratuito.',
        ],
      },
      {
        titulo: "Detalles que ayudan en Parla",
        parrafos: [
          "Si vives junto al recorrido del tranvía, no intentes guardar sitio con tu coche en una zona donde no se puede parar: es mejor que nos des la dirección y busquemos juntos una calle lateral o un espacio reservado. En el casco tradicional, la mañana temprano suele ser el mejor momento para encontrar hueco.",
          "En Parla Este, muchas comunidades tienen piscina y zonas ajardinadas entre bloques, y a veces el acceso de vehículos al recinto está restringido. Pregunta al administrador por dónde se puede descargar y si hace falta avisar al conserje. En los adosados, despeja la escalera interior y el recibidor antes de que llegue el equipo.",
        ],
        lista: [
          "Evita parar en zonas reservadas al tranvía.",
          "Pregunta por el acceso de vehículos al recinto.",
          "Despeja escaleras interiores y recibidor.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Trabajáis en Parla Este?',
        respuesta: 'Sí. Indica si hay garaje o normas de la comunidad sobre el uso de ascensores y zonas comunes, para organizarlo antes.',
      },
      {
        pregunta: '¿El tranvía afecta a la mudanza?',
        respuesta: 'En las calles por las que pasa puede condicionar dónde para el vehículo. Danos la dirección exacta y lo revisamos.',
      },
      {
        pregunta: '¿Hacéis mudanzas de adosados con varias plantas?',
        respuesta: 'Sí. Cuéntanos cuántas plantas hay y qué muebles grandes hay en cada una para calcular el tiempo y las personas necesarias.',
      },
      {
        pregunta: '¿Cómo pido presupuesto para una mudanza en Parla?',
        respuesta: 'Rellena el formulario o escríbenos por WhatsApp con las direcciones, plantas y fecha. Te responde tu único interlocutor de Mudanzas360.',
      },
      {
        pregunta: "¿Cuánto se tarda en una mudanza dentro de Parla?",
        respuesta: "Depende del volumen y de las plantas, más que del trayecto, que es corto. En la propuesta te indicamos el tiempo previsto para tu caso.",
      },
    ],
    relacionadas: ['zonas', 'mudanzas-fuenlabrada', 'mudanzas-getafe', 'montaje-desmontaje-muebles-mudanza'],
    servicio: {
      nombre: 'Mudanzas en Parla',
      descripcion: 'Mudanzas de viviendas y oficinas y portes en Parla, Comunidad de Madrid.',
      area: 'Parla',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza completa',
  },

  /* ---------------------------- POZUELO ---------------------------- */
  {
    path: 'mudanzas-pozuelo-de-alarcon',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Mudanzas en Pozuelo de Alarcón | Mudanzas360',
    description:
      'Mudanzas en Pozuelo de Alarcón: Pueblo, Estación, Somosaguas, La Cabaña o Monteclaro. Chalets y pisos amplios con presupuesto gratis y trato directo.',
    etiqueta: 'Mudanzas en Pozuelo de Alarcón',
    resumen: 'Chalets en urbanizaciones y pisos amplios, junto a la M-503.',
    h1: { antes: 'Mudanzas en', resaltado: 'Pozuelo de Alarcón', despues: '' },
    kicker: 'MUDANZAS EN POZUELO',
    intro:
      'En Pozuelo predominan las viviendas grandes: chalets en urbanizaciones cerradas y pisos amplios. Son mudanzas con mucho volumen y objetos delicados, que conviene planificar con calma.',
    foto: 'viviendas',
    fotoAlt: 'Camión de mudanzas junto a una vivienda con cajas en la entrada',
    fotoContenido: 'embalaje-material',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza en Pozuelo de Alarcón',
    fichas: [
      { etiqueta: 'Desde Madrid centro', valor: 'Unos 20-25 min en coche, sin atascos' },
      { etiqueta: 'Accesos', valor: 'M-503, M-508, M-40 y A-6' },
      { etiqueta: 'Vivienda habitual', valor: 'Chalets y pisos amplios' },
      { etiqueta: 'Cerca', valor: 'Majadahonda, Boadilla y Aravaca' },
    ],
    secciones: [
      {
        titulo: 'Carreteras y urbanizaciones',
        parrafos: [
          'La M-503 es el eje principal hacia Madrid y hacia Majadahonda, la M-508 conecta con Boadilla y la M-40 y la A-6 quedan muy cerca. El Metro Ligero recorre parte del municipio, y en sus tramos hay cruces y carriles que conviene tener en cuenta al circular con un camión.',
          'Muchas urbanizaciones de Pozuelo tienen viales privados, curvas y pendientes, y algunas cuentan con control de acceso en la entrada. Antes del día de la mudanza, avisa a la seguridad o a la administración con los datos del vehículo y el horario previsto.',
        ],
      },
      {
        titulo: 'Acceso a cada casa',
        parrafos: [
          'En Somosaguas, Monteclaro o La Cabaña, las parcelas son grandes y el camino desde la verja hasta la puerta puede ser largo, con jardín, escalones o una rampa de garaje. En Pozuelo Pueblo y Pozuelo Estación, en cambio, hay calles más estrechas y aparcamiento limitado, donde puede convenir reservar espacio en la calle tras consultarlo con el ayuntamiento.',
          'Cuanto mejor conozcamos el recorrido entre el vehículo y la vivienda, más ajustado será el tiempo de trabajo que te proponemos.',
        ],
      },
      {
        titulo: 'Viviendas grandes, mudanzas largas',
        parrafos: [
          'Un chalet de Pozuelo puede tener tres o cuatro plantas, sótano, buhardilla y zonas exteriores con mobiliario de jardín. El volumen suele superar con creces el de un piso, y a menudo incluye obras de arte, lámparas, espejos grandes o instrumentos que piden un embalaje específico.',
          'Para estas mudanzas, lo más útil es un inventario por estancias y fotos de las piezas especiales. Con eso podemos plantear el embalaje, el número de personas y, si hace falta, repartir el trabajo en varios días.',
        ],
        subsecciones: [
          {
            titulo: 'Objetos delicados',
            texto: 'Indica las piezas valiosas o frágiles desde el principio: algunas necesitan una protección a medida que conviene preparar con antelación.',
          },
        ],
      },
      {
        titulo: 'Cuando la casa nueva es más pequeña',
        parrafos: [
          'También es frecuente la mudanza inversa: dejar un chalet por un piso en Madrid o en el propio Pozuelo. En esos casos, no todo cabe en la nueva vivienda, y un guardamuebles temporal da tiempo para decidir qué conservar.',
          'Un solo interlocutor te ayuda a ordenar todo el trabajo.',
        ],
      },
      {
        titulo: "Cómo planificar una mudanza grande en Pozuelo",
        parrafos: [
          "En un chalet, lo práctico es dividir la casa en zonas y decidir el orden: primero sótano, garaje y exteriores, que son lo que menos se usa; después dormitorios secundarios y, al final, cocina, salón y dormitorio principal. Ese orden permite seguir viviendo con normalidad hasta el último día.",
          "Si hay piezas de mucho valor, como obras de arte o antigüedades, cuéntanoslo al pedir presupuesto. Haz también fotos del estado de cada pieza antes de embalarla. En Pozuelo Estación y Pozuelo Pueblo, donde las calles son más estrechas, indícanos si el portal tiene escalones o si hay un acceso alternativo por un patio o un garaje.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Podéis entrar en urbanizaciones con control de acceso?',
        respuesta: 'Sí, siempre que la urbanización lo autorice. Avisa con antelación a la seguridad con los datos del vehículo y cuéntanos sus normas.',
      },
      {
        pregunta: '¿Hacéis mudanzas de chalets con varias plantas?',
        respuesta: 'Sí. Para valorarlas bien necesitamos saber cuántas plantas hay, si hay sótano o buhardilla y qué muebles grandes hay en cada una.',
      },
      {
        pregunta: '¿Podéis embalar obras de arte o espejos grandes?',
        respuesta: 'Cuéntanoslo con fotos y medidas. Algunas piezas requieren una protección específica y la incluimos en la propuesta.',
      },
      {
        pregunta: '¿Se puede hacer la mudanza en varios días?',
        respuesta: 'Sí, en viviendas grandes a veces es lo más sensato. Lo valoramos contigo según el volumen y tus fechas.',
      },
      {
        pregunta: "¿Qué orden seguís en una mudanza de chalet?",
        respuesta: "Lo acordamos contigo, pero lo habitual es empezar por sótano, garaje y exteriores y dejar para el final las estancias de uso diario.",
      },
    ],
    relacionadas: ['zonas', 'mudanzas-majadahonda', 'mudanzas-boadilla-del-monte', 'embalaje-mudanzas-madrid'],
    servicio: {
      nombre: 'Mudanzas en Pozuelo de Alarcón',
      descripcion: 'Mudanzas de chalets, pisos y oficinas en Pozuelo de Alarcón, Comunidad de Madrid.',
      area: 'Pozuelo de Alarcón',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza completa',
  },

  /* ---------------------------- MAJADAHONDA ---------------------------- */
  {
    path: 'mudanzas-majadahonda',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Mudanzas en Majadahonda | Mudanzas360',
    description:
      'Mudanzas en Majadahonda: casco, Gran Vía, Roza Martín o el Monte del Pilar. Pisos, adosados y chalets con presupuesto gratis y trato directo.',
    etiqueta: 'Mudanzas en Majadahonda',
    resumen: 'Del casco y la Gran Vía a las urbanizaciones del noroeste.',
    h1: { antes: 'Mudanzas', resaltado: 'en Majadahonda', despues: '' },
    kicker: 'MUDANZAS EN MAJADAHONDA',
    intro:
      'Majadahonda combina un casco con mucha vida comercial y urbanizaciones de chalets y adosados. Te preguntamos por tu calle y tu casa para que el traslado se adapte a ella.',
    foto: 'furgoneta-calle',
    fotoAlt: 'Camión pequeño de mudanzas en una calle arbolada',
    fotoContenido: 'muebles',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza en Majadahonda',
    fichas: [
      { etiqueta: 'Desde Madrid centro', valor: 'Unos 25 min en coche, sin atascos' },
      { etiqueta: 'Accesos', valor: 'A-6, M-50, M-503 y M-509' },
      { etiqueta: 'Vivienda habitual', valor: 'Pisos, adosados y chalets' },
      { etiqueta: 'Cerca', valor: 'Las Rozas, Pozuelo y Boadilla' },
    ],
    secciones: [
      {
        titulo: 'Rutas de entrada y salida',
        parrafos: [
          'La A-6 y la M-503 son las conexiones habituales con Madrid, y la M-50 rodea el municipio para enlazar con Boadilla, Las Rozas o el sur. La M-509 lleva hacia Villanueva del Pardillo. Los accesos a la A-6 se saturan en hora punta, por lo que conviene elegir bien la hora si el destino es la capital.',
          'Dentro del casco, el entorno de la Gran Vía de Majadahonda concentra comercios y terrazas, con mucha actividad durante todo el día.',
        ],
      },
      {
        titulo: 'Parar el vehículo cerca del portal',
        parrafos: [
          'En el casco y la Gran Vía el aparcamiento es escaso y hay zonas peatonales, así que puede ser necesario detener el vehículo a cierta distancia. Si es tu caso, consulta con el ayuntamiento si puedes reservar un espacio para la carga y avísanos de lo que te indiquen.',
          'En las urbanizaciones de Roza Martín o del entorno del Monte del Pilar hay más sitio, aunque los viales pueden ser estrechos o con curvas. Dinos si hay control de acceso para avisar con tiempo.',
        ],
      },
      {
        titulo: 'Las viviendas de Majadahonda',
        parrafos: [
          'En el centro hay pisos de varias épocas, desde edificios de los años setenta hasta promociones recientes con garaje. En la periferia abundan los adosados de dos o tres plantas y los chalets independientes con jardín y sótano.',
          'Los adosados tienen escaleras interiores con giros que obligan a desmontar camas y armarios, y los chalets suelen acumular volumen en el garaje y el trastero.',
        ],
        subsecciones: [
          {
            titulo: 'Cerca del hospital',
            texto: 'El Hospital Universitario Puerta de Hierro atrae a profesionales sanitarios que se trasladan a Majadahonda, a menudo con fechas de incorporación fijas.',
          },
        ],
      },
      {
        titulo: 'Mudanzas frecuentes',
        parrafos: [
          'Los traslados más comunes son dentro del noroeste de Madrid, entre Majadahonda, Las Rozas, Pozuelo y Boadilla, y desde Madrid capital hacia una vivienda más grande. También hay mudanzas hacia la sierra.',
          'Si cambias de muebles, podemos montar los nuevos en destino y desmontar los que te llevas.',
        ],
      },
      {
        titulo: "Preparar la mudanza en Majadahonda",
        parrafos: [
          "Si tu vivienda está en el casco o cerca de la Gran Vía, piensa en la hora: las mañanas de diario, antes de que abran los comercios y se llenen las terrazas, suelen ser más tranquilas para cargar. Retira el coche de delante del portal si tienes plaza propia, para dejar ese hueco libre.",
          "En los adosados, mide la escalera interior y los giros antes de comprar muebles nuevos para la casa de destino: muchos sofás y cabeceros no pasan a la planta de arriba. Si ya tienes los muebles nuevos encargados, podemos coordinar su montaje el mismo día de la mudanza. Y si vienes desde Madrid capital, recuerda que el trayecto por la A-6 cambia mucho de hora punta a media mañana.",
          "En las urbanizaciones con control de acceso, deja en la entrada los datos del vehículo y la hora prevista para que el equipo no tenga que esperar.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Podéis cargar en el centro de Majadahonda?',
        respuesta: 'Sí. Indica la dirección exacta para revisar dónde puede detenerse el vehículo, porque en el centro hay zonas peatonales y poco aparcamiento.',
      },
      {
        pregunta: '¿Hacéis mudanzas de adosados?',
        respuesta: 'Sí. Cuéntanos cuántas plantas tiene y qué muebles grandes hay arriba: las escaleras interiores son el punto clave.',
      },
      {
        pregunta: '¿Trabajáis con fechas de incorporación fijas?',
        respuesta: 'Sí, indícala desde el principio para reservar el día y, si hace falta, prever un guardamuebles temporal.',
      },
      {
        pregunta: '¿Cuánto tarda una mudanza dentro del noroeste de Madrid?',
        respuesta: 'Depende sobre todo del volumen y de las plantas, más que de la distancia. Te lo concretamos en la propuesta.',
      },
      {
        pregunta: "¿Podéis montar los muebles nuevos el mismo día?",
        respuesta: "Sí, podemos valorarlo. Indica qué muebles son y cuándo te los entregan para encajarlo en la mudanza.",
      },
    ],
    relacionadas: ['zonas', 'mudanzas-las-rozas', 'mudanzas-pozuelo-de-alarcon', 'montaje-desmontaje-muebles-mudanza'],
    servicio: {
      nombre: 'Mudanzas en Majadahonda',
      descripcion: 'Mudanzas de viviendas y oficinas y portes en Majadahonda, Comunidad de Madrid.',
      area: 'Majadahonda',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza completa',
  },

  /* ---------------------------- RIVAS ---------------------------- */
  {
    path: 'mudanzas-rivas-vaciamadrid',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Mudanzas en Rivas-Vaciamadrid | Mudanzas360',
    description:
      'Mudanzas en Rivas-Vaciamadrid: Rivas Urbanizaciones, Covibar, La Luna o el casco. Pisos y adosados con presupuesto gratis y trato directo.',
    etiqueta: 'Mudanzas en Rivas-Vaciamadrid',
    resumen: 'Urbanizaciones, cooperativas y casco antiguo junto a la A-3.',
    h1: { antes: 'Mudanzas en', resaltado: 'Rivas-Vaciamadrid', despues: '' },
    kicker: 'MUDANZAS EN RIVAS',
    intro:
      'Rivas creció muy rápido con urbanizaciones de adosados, cooperativas de pisos y un pequeño casco antiguo. Ajustamos cada mudanza al tipo de vivienda y al acceso de tu calle.',
    foto: 'viviendas',
    fotoAlt: 'Camión de mudanzas con cajas a la puerta de una vivienda unifamiliar',
    fotoContenido: 'cajas-apiladas',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza en Rivas-Vaciamadrid',
    fichas: [
      { etiqueta: 'Desde Madrid centro', valor: 'Unos 20-25 min en coche, sin atascos' },
      { etiqueta: 'Accesos', valor: 'A-3, M-50 y M-823' },
      { etiqueta: 'Vivienda habitual', valor: 'Adosados y pisos en cooperativa' },
      { etiqueta: 'Cerca', valor: 'Vallecas, Arganda y San Fernando' },
    ],
    secciones: [
      {
        titulo: 'Cómo se entra en Rivas',
        parrafos: [
          'La A-3, la autovía de Valencia, conecta Rivas con Madrid y es la vía de entrada más directa, aunque se carga mucho en hora punta a la altura de Vallecas. La M-50 permite enlazar con la A-2 o la A-4 sin pasar por la capital, y la M-823 lleva hacia San Martín de la Vega.',
          'La línea 9 de metro tiene varias estaciones en el municipio, lo que facilita la vida diaria pero no cambia el planteamiento de una mudanza: la carga se hace por carretera.',
        ],
      },
      {
        titulo: 'Calles y zonas de carga',
        parrafos: [
          'Las urbanizaciones de adosados tienen calles residenciales con aparcamiento en batería, y en muchas el vehículo puede situarse cerca de la parcela. En las cooperativas de pisos, como las de Covibar, los bloques se organizan alrededor de zonas comunes y el portal puede quedar algo retirado.',
          'El casco antiguo de Rivas-Vaciamadrid tiene calles más estrechas. Allí, y en cualquier calle con poco espacio, conviene preguntar en el ayuntamiento cómo reservar sitio para cargar el día de la mudanza.',
        ],
      },
      {
        titulo: 'Qué tipo de vivienda es habitual',
        parrafos: [
          'Rivas tiene una proporción alta de adosados de dos o tres plantas, a menudo con garaje y buhardilla, y de pisos en cooperativa con piscina y zonas comunes. En los adosados, el volumen se reparte en varias plantas y el trabajo depende mucho de la escalera interior.',
          'En los pisos de cooperativa, los ascensores suelen ser estándar y las normas de la comunidad sobre su uso durante una mudanza conviene consultarlas antes.',
        ],
        subsecciones: [
          {
            titulo: 'Buhardillas y garajes',
            texto: 'Suelen guardar más de lo que parece. Revísalos al hacer el inventario para que el volumen del presupuesto sea el real.',
          },
        ],
      },
      {
        titulo: 'Recorridos habituales',
        parrafos: [
          'Muchas familias llegan a Rivas desde Madrid, especialmente desde Vallecas, Moratalaz o el centro, buscando más espacio. También hay traslados hacia Arganda del Rey y otros municipios del sureste, y mudanzas nacionales hacia Levante por la propia A-3.',
          'Pide presupuesto con las dos direcciones y te responde tu único interlocutor de Mudanzas360.',
        ],
      },
      {
        titulo: "Consejos prácticos para mudarte en Rivas",
        parrafos: [
          "Rivas es un municipio de mucho movimiento de familias, y los fines de semana son los días más demandados. Si puedes mudarte entre semana, te resultará más sencillo encontrar fecha y la carga será más tranquila, con menos coches en las calles de las urbanizaciones.",
          "Antes del día, recorre la buhardilla, el garaje y el trastero y decide qué viaja y qué no: en los adosados de Rivas es donde más se acumula. En los pisos de cooperativa, pregunta si la comunidad pide un depósito o un aviso previo para usar el ascensor durante la mudanza. Y si vienes de Madrid por la A-3, la salida a media mañana suele evitar los atascos de Vallecas.",
          "En el casco antiguo de Vaciamadrid, con calles más estrechas, avísanos para valorar un vehículo más pequeño.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Hacéis mudanzas en las urbanizaciones de Rivas?',
        respuesta: 'Sí. Indica la dirección y si hay garaje o buhardilla, porque cambian bastante el volumen y el tiempo de trabajo.',
      },
      {
        pregunta: '¿Podéis hacer una mudanza de Rivas a Valencia?',
        respuesta: 'Sí. La A-3 conecta directamente con Valencia; consulta nuestra página de esa ruta o indica el destino en el formulario.',
      },
      {
        pregunta: '¿La comunidad puede poner normas a la mudanza?',
        respuesta: 'Sí, algunas cooperativas regulan horarios y uso de ascensores. Pregúntalo y cuéntanoslo para organizarlo.',
      },
      {
        pregunta: '¿Cuánto cuesta una mudanza en Rivas-Vaciamadrid?',
        respuesta: 'Depende del volumen, de las plantas y de los servicios. Puedes orientarte con la calculadora y pedirnos una propuesta concreta.',
      },
      {
        pregunta: "¿Es mejor mudarse entre semana en Rivas?",
        respuesta: "Si puedes elegir, sí: suele haber más disponibilidad y menos tráfico en las calles residenciales.",
      },
    ],
    relacionadas: ['zonas', 'mudanzas-vallecas', 'mudanzas-madrid-valencia', 'guardamuebles-madrid'],
    servicio: {
      nombre: 'Mudanzas en Rivas-Vaciamadrid',
      descripcion: 'Mudanzas de viviendas y oficinas y portes en Rivas-Vaciamadrid, Comunidad de Madrid.',
      area: 'Rivas-Vaciamadrid',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza completa',
  },

  /* ---------------------------- SAN SEBASTIÁN DE LOS REYES ---------------------------- */
  {
    path: 'mudanzas-san-sebastian-de-los-reyes',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Mudanzas en San Sebastián de los Reyes | Mudanzas360',
    description:
      'Mudanzas en San Sebastián de los Reyes: centro, Dehesa Vieja, Tempranales o Moscatelares. Pisos y adosados con presupuesto gratis y trato directo.',
    etiqueta: 'Mudanzas en San Sebastián de los Reyes',
    resumen: 'Del centro a Tempranales, pegado a Alcobendas por la A-1.',
    h1: { antes: 'Mudanzas en', resaltado: 'San Sebastián de los Reyes', despues: '' },
    kicker: 'MUDANZAS EN SANSE',
    intro:
      'Sanse forma con Alcobendas una sola área urbana junto a la A-1, con barrios tradicionales y desarrollos nuevos como Tempranales. Organizamos tu traslado según tu calle y tu edificio.',
    foto: 'furgoneta-blanca',
    fotoAlt: 'Furgoneta blanca aparcada en la calle',
    fotoContenido: 'salon-cajas',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza en San Sebastián de los Reyes',
    fichas: [
      { etiqueta: 'Desde Madrid centro', valor: 'Unos 25 min en coche, sin atascos' },
      { etiqueta: 'Accesos', valor: 'A-1, M-12 y M-100' },
      { etiqueta: 'Vivienda habitual', valor: 'Pisos y adosados' },
      { etiqueta: 'Cerca', valor: 'Alcobendas, Algete y Tres Cantos' },
    ],
    secciones: [
      {
        titulo: 'Accesos y tráfico',
        parrafos: [
          'La A-1 es la vía de entrada desde Madrid y la que comparte con Alcobendas. La M-12 enlaza con el aeropuerto y la M-40, y la M-100 conecta con Alcalá por el norte. Los centros comerciales de la zona generan mucho tráfico los fines de semana, algo a tener en cuenta si la mudanza es en sábado.',
          'Dentro del municipio, el centro tiene calles estrechas y de un solo sentido, mientras que barrios como Dehesa Vieja o Tempranales tienen avenidas amplias.',
        ],
      },
      {
        titulo: 'Fiestas, calles y aparcamiento',
        parrafos: [
          'A finales de agosto, las fiestas del Cristo de los Remedios incluyen encierros y cortes de calles en el centro. Si tu mudanza cae en esas fechas y tu calle está en el recorrido, conviene elegir otro día o confirmar antes qué calles estarán cerradas.',
          'El resto del año, en el centro el aparcamiento es limitado; en Tempranales y Moscatelares hay más sitio y garajes. Si necesitas reservar espacio en la calle, pregunta en el ayuntamiento con antelación.',
        ],
      },
      {
        titulo: 'Las viviendas de Sanse',
        parrafos: [
          'En el centro y en barrios como Rosa Luxemburgo predominan los pisos de los años setenta y ochenta en bloques medianos. Dehesa Vieja y Tempranales son desarrollos más recientes, con pisos amplios, trasteros, piscinas comunitarias y garajes, además de urbanizaciones de adosados.',
          'Cerca está el Hospital Universitario Infanta Sofía, y entre sus profesionales hay traslados con fechas de incorporación concretas.',
        ],
        subsecciones: [
          {
            titulo: 'Normas de la comunidad',
            texto: 'En las promociones nuevas, algunas comunidades piden avisar de la mudanza y proteger ascensores y zonas comunes. Pregúntalo antes del día.',
          },
        ],
      },
      {
        titulo: 'Mudanzas habituales',
        parrafos: [
          'Lo más frecuente son los traslados dentro de Sanse, hacia Alcobendas o desde Madrid capital. También hay mudanzas hacia Algete, Tres Cantos o la sierra norte. En todos los casos, los accesos de cada vivienda pesan más que los kilómetros.',
          'Pide presupuesto y te responde tu único interlocutor de Mudanzas360.',
        ],
      },
      {
        titulo: "Qué preparar antes de mudarte en Sanse",
        parrafos: [
          "Si tu nueva vivienda está en Tempranales o Dehesa Vieja, pide a la administración de la comunidad las normas para mudanzas: horarios, protección de ascensores y si hay que reservar un espacio en el garaje para la descarga. En las promociones nuevas, estas normas suelen estar muy definidas y conviene conocerlas con tiempo.",
          "En el centro de Sanse, con calles de un solo sentido y aparcamiento limitado, dinos por qué calle se accede mejor al portal y si hay alguna calle peatonal cerca. Evita, si puedes, las fechas de las fiestas de agosto. Y si te mudas desde Madrid capital por la A-1, ten en cuenta que los accesos a los centros comerciales se cargan mucho los sábados.",
          "Para mudanzas entre Sanse y Alcobendas, donde los trayectos son de pocos minutos, el tiempo de trabajo depende casi solo de la carga y la descarga.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Se puede hacer una mudanza durante las fiestas de Sanse?',
        respuesta: 'Depende de la calle. Durante los encierros hay cortes en el centro, así que conviene confirmar el recorrido o elegir otra fecha.',
      },
      {
        pregunta: '¿Hacéis mudanzas entre Sanse y Alcobendas?',
        respuesta: 'Sí. Son recorridos muy cortos en los que el tiempo depende sobre todo de las plantas y de los accesos.',
      },
      {
        pregunta: '¿Trabajáis en Tempranales y Dehesa Vieja?',
        respuesta: 'Sí. Indica si hay garaje y normas de la comunidad para organizar el acceso del vehículo.',
      },
      {
        pregunta: '¿Necesito permiso para aparcar el camión en el centro?',
        respuesta: 'Puede hacer falta según la calle. Consúltalo en el ayuntamiento y avísanos de la respuesta.',
      },
      {
        pregunta: "¿Hay días peores para una mudanza en Sanse?",
        respuesta: "Los sábados por el tráfico de los centros comerciales y, en el centro, los días de encierros de las fiestas. Lo tenemos en cuenta al proponerte fecha.",
      },
    ],
    relacionadas: ['zonas', 'mudanzas-alcobendas', 'mudanzas-madrid', 'mudanzas-pisos-madrid'],
    servicio: {
      nombre: 'Mudanzas en San Sebastián de los Reyes',
      descripcion: 'Mudanzas de viviendas y oficinas y portes en San Sebastián de los Reyes, Comunidad de Madrid.',
      area: 'San Sebastián de los Reyes',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza completa',
  },

  /* ---------------------------- BOADILLA ---------------------------- */
  {
    path: 'mudanzas-boadilla-del-monte',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Mudanzas en Boadilla del Monte | Mudanzas360',
    description:
      'Mudanzas en Boadilla del Monte: Las Lomas, Parque Boadilla, Valdecabañas o el casco. Chalets y pisos con presupuesto gratis y un solo interlocutor.',
    etiqueta: 'Mudanzas en Boadilla del Monte',
    resumen: 'Urbanizaciones de chalets y pisos nuevos al oeste de Madrid.',
    h1: { antes: 'Mudanzas en', resaltado: 'Boadilla del Monte', despues: '' },
    kicker: 'MUDANZAS EN BOADILLA',
    intro:
      'Boadilla está formada en gran parte por urbanizaciones de chalets y por promociones recientes de pisos. Son mudanzas con mucho volumen y accesos que conviene conocer de antemano.',
    foto: 'camion-autovia',
    fotoAlt: 'Camión blanco en una carretera entre campos',
    fotoContenido: 'viviendas',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza en Boadilla del Monte',
    fichas: [
      { etiqueta: 'Desde Madrid centro', valor: 'Unos 25-30 min en coche, sin atascos' },
      { etiqueta: 'Accesos', valor: 'M-50, M-513 y M-516' },
      { etiqueta: 'Vivienda habitual', valor: 'Chalets y pisos nuevos' },
      { etiqueta: 'Cerca', valor: 'Pozuelo, Majadahonda y Villaviciosa' },
    ],
    secciones: [
      {
        titulo: 'Cómo llegar con un camión',
        parrafos: [
          'La M-50 rodea Boadilla y la conecta con la A-5 y la A-6, mientras que la M-513 y la M-516 enlazan con Pozuelo y con Madrid. El Metro Ligero recorre parte del municipio, con cruces que hay que respetar al circular con un vehículo grande.',
          'El acceso por la M-513 hacia Madrid suele cargarse a primera hora. Para mudanzas hacia la capital, una salida a media mañana suele ser más fluida.',
        ],
      },
      {
        titulo: 'Urbanizaciones y accesos',
        parrafos: [
          'Las Lomas, Valdecabañas, Bonanza o Parque Boadilla son urbanizaciones con viales amplios pero a menudo con pendientes, curvas y, en algunos casos, control de acceso. Conviene avisar con antelación a la seguridad y comprobar por dónde se entra a la parcela.',
          'En el casco histórico, junto al Palacio del Infante Don Luis, las calles son más estrechas y hay menos sitio para detenerse. Si tu vivienda está allí, pregunta al ayuntamiento si debes solicitar una reserva de espacio para cargar.',
        ],
      },
      {
        titulo: 'Qué tipo de vivienda predomina',
        parrafos: [
          'Abundan los chalets independientes con jardín, sótano y garaje, y también los pareados y adosados. En las zonas más recientes hay muchas promociones de pisos con piscina y garaje, con ascensores amplios que facilitan la carga.',
          'Los chalets suelen implicar mucho volumen, mobiliario de exterior y objetos delicados. Para planificarlos bien, lo mejor es un inventario por plantas.',
        ],
        subsecciones: [
          {
            titulo: 'Oficinas cercanas',
            texto: 'En el entorno de Boadilla hay grandes sedes empresariales. Si trasladas una oficina, consulta nuestras mudanzas de empresa.',
          },
        ],
      },
      {
        titulo: 'Traslados habituales',
        parrafos: [
          'Muchas familias llegan a Boadilla desde Madrid capital o desde Pozuelo, y también hay quien deja un chalet por una vivienda más pequeña. En ese segundo caso, un guardamuebles temporal ayuda a no decidirlo todo con prisa.',
          'Si cambias de muebles, podemos montar los nuevos en la casa de destino. Te responde tu único interlocutor de Mudanzas360.',
        ],
      },
      {
        titulo: "Planificar una mudanza en Boadilla",
        parrafos: [
          "En las urbanizaciones de Boadilla, las parcelas suelen tener un camino de acceso desde la calle hasta la vivienda. Antes del día, comprueba si el vehículo puede entrar en la parcela o si tiene que quedarse fuera, y si hay escalones, rampas o grava en el recorrido. Retira coches y objetos que puedan estorbar.",
          "Si el chalet tiene mobiliario de jardín, barbacoas o maceteros grandes, inclúyelos en el inventario: es volumen que a menudo se olvida y que cambia el tamaño del vehículo. Vacía y seca el frigorífico, la lavadora y cualquier fuente o equipo de piscina que vaya a viajar. En los pisos nuevos de la zona, reserva el ascensor con la comunidad.",
          "Para quien llega a Boadilla desde Madrid capital, la M-513 a primera hora suele estar cargada: la media mañana es mejor momento para el trayecto.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Podéis acceder a urbanizaciones con vigilancia?',
        respuesta: 'Sí, si la urbanización lo autoriza. Avisa a la seguridad con antelación con los datos del vehículo y el horario.',
      },
      {
        pregunta: '¿Hacéis mudanzas de chalets grandes?',
        respuesta: 'Sí. Cuéntanos cuántas plantas hay y qué contiene cada una, incluidos sótano, garaje y jardín, para valorar el trabajo.',
      },
      {
        pregunta: '¿Trasladáis oficinas en la zona?',
        respuesta: 'Sí, podemos valorarlo. Indica el número de puestos y las normas del edificio para planificarlo.',
      },
      {
        pregunta: '¿Cuánto cuesta una mudanza en Boadilla del Monte?',
        respuesta: 'Depende del volumen y de los accesos, especialmente en los chalets. Consulta la guía de precios y pídenos tu propuesta.',
      },
      {
        pregunta: "¿Trasladáis muebles de jardín y maceteros?",
        respuesta: "Sí, inclúyelos en el inventario con su tamaño aproximado para que los tengamos en cuenta al elegir el vehículo.",
      },
      {
        pregunta: "¿Hacéis mudanzas desde Madrid capital a Boadilla?",
        respuesta: "Sí, es uno de los recorridos más habituales. Indica las dos direcciones y te proponemos la mejor hora para el trayecto.",
      },
    ],
    relacionadas: ['zonas', 'mudanzas-pozuelo-de-alarcon', 'mudanzas-majadahonda', 'mudanzas-oficinas-madrid'],
    servicio: {
      nombre: 'Mudanzas en Boadilla del Monte',
      descripcion: 'Mudanzas de chalets, pisos y oficinas en Boadilla del Monte, Comunidad de Madrid.',
      area: 'Boadilla del Monte',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza completa',
  },

  /* ---------------------------- CHAMBERÍ ---------------------------- */
  {
    path: 'mudanzas-chamberi',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Mudanzas en Chamberí, Madrid | Mudanzas360',
    description:
      'Mudanzas en Chamberí: Trafalgar, Almagro, Gaztambide, Arapiles o Ríos Rosas. Fincas antiguas y ascensores pequeños, bien planificados. Presupuesto gratis.',
    etiqueta: 'Mudanzas en Chamberí',
    resumen: 'Fincas de principios del siglo XX con ascensores pequeños y calles con poco sitio.',
    h1: { antes: 'Mudanzas en', resaltado: 'Chamberí', despues: '' },
    kicker: 'DISTRITO DE CHAMBERÍ',
    intro:
      'Chamberí es uno de los distritos más castizos de Madrid: fincas de finales del XIX y principios del XX, patios interiores y ascensores estrechos. Aquí una mudanza se gana planificando.',
    foto: 'madrid',
    fotoAlt: 'Camión de mudanzas con cajas frente a un edificio de viviendas',
    fotoContenido: 'embalaje-material',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza en Chamberí',
    fichas: [
      { etiqueta: 'Desde Sol', valor: 'Unos 10-15 min en coche, sin atascos' },
      { etiqueta: 'Barrios', valor: 'Trafalgar, Almagro, Gaztambide…' },
      { etiqueta: 'Vivienda habitual', valor: 'Fincas antiguas con ascensor pequeño' },
      { etiqueta: 'Cerca', valor: 'Centro, Salamanca y Tetuán' },
    ],
    secciones: [
      {
        titulo: 'Calles con poco margen',
        parrafos: [
          'Chamberí combina ejes amplios como Santa Engracia, Alberto Aguilera o Eloy Gonzalo con calles interiores estrechas, de un solo carril y con aparcamiento en ambos lados. Ponzano, Fernández de los Ríos o las calles de Trafalgar tienen mucha actividad comercial y de hostelería, y detener un camión sin entorpecer el tráfico requiere previsión.',
          'Todo el distrito tiene estacionamiento regulado, y Madrid aplica restricciones de circulación por zona de bajas emisiones según la etiqueta del vehículo. Lo tenemos en cuenta al elegir el vehículo y la hora.',
        ],
      },
      {
        titulo: 'Reserva de espacio para la carga',
        parrafos: [
          'En la mayoría de calles de Chamberí no hay sitio libre junto al portal a media mañana. Por eso, antes de la mudanza conviene consultar al Ayuntamiento de Madrid qué hay que solicitar para reservar espacio en la vía pública, y con cuánta antelación. Te ayudamos a valorar si en tu caso compensa hacerlo.',
          'Si no se reserva, puede ocurrir que el vehículo tenga que quedarse lejos, y cada viaje con cajas se alarga.',
        ],
      },
      {
        titulo: 'Fincas antiguas',
        parrafos: [
          'Muchas viviendas están en fincas con escaleras de madera, techos altos, puertas de doble hoja y ascensores muy pequeños, a veces añadidos en el hueco de la escalera. En ellos solo caben cajas y piezas medianas: los armarios, cabeceros y sofás grandes suelen bajar por la escalera o desmontados.',
          'Es frecuente encontrar portería con horarios y normas para mudanzas, y suelos o barandillas que hay que proteger. Pregunta en tu comunidad antes de la fecha.',
        ],
        subsecciones: [
          {
            titulo: 'Pisos interiores',
            texto: 'Si tu piso da a un patio interior, el recorrido desde el portal puede incluir pasillos y escaleras de servicio. Cuéntanoslo para calcular bien el tiempo.',
          },
        ],
      },
      {
        titulo: 'Quién se muda en Chamberí',
        parrafos: [
          'Además de familias, en Chamberí hay muchos estudiantes y jóvenes profesionales en pisos compartidos, lo que se traduce en mudanzas pequeñas con mucha frecuencia. También son habituales las mudanzas de pisos grandes con muebles antiguos y objetos delicados.',
          'Para cualquiera de ellas, tienes un solo interlocutor de principio a fin.',
        ],
      },
      {
        titulo: "Preparar una mudanza en una finca de Chamberí",
        parrafos: [
          "Mide el ascensor y la anchura de la escalera antes de pedir presupuesto: con esos datos sabemos qué muebles hay que desmontar y cuáles bajan enteros. En muchas fincas del distrito, el hueco de la escalera tiene giros cerrados, y un sofá o un cabecero grande solo pasa en vertical o desmontado.",
          "Habla con el portero o la administración con antelación. Pregunta en qué horario se permiten mudanzas, si hay que proteger el suelo del portal o las paredes del ascensor, y si existe un acceso de servicio. Si las puertas del portal son de doble hoja, pide que se puedan abrir las dos durante la carga.",
          "En los barrios con más vida nocturna, como Trafalgar o el entorno de Ponzano, la mañana temprano es el momento más despejado para cargar.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cabe un armario en los ascensores de las fincas antiguas?',
        respuesta: 'Casi nunca. Lo habitual es desmontarlo o bajarlo por la escalera. Indícanos la planta y el tamaño del ascensor para planificarlo.',
      },
      {
        pregunta: '¿Hay que reservar espacio para el camión en Chamberí?',
        respuesta: 'En muchas calles es muy recomendable. Consulta al Ayuntamiento de Madrid el trámite y la antelación, y lo coordinamos contigo.',
      },
      {
        pregunta: '¿Podéis trabajar con las normas de la portería?',
        respuesta: 'Sí. Pregunta los horarios permitidos y si hay que proteger zonas comunes, y lo tenemos en cuenta al organizar el día.',
      },
      {
        pregunta: '¿Hacéis mudanzas pequeñas en pisos compartidos?',
        respuesta: 'Sí, también trasladamos habitaciones o pocos muebles. Consulta nuestras mudanzas pequeñas.',
      },
      {
        pregunta: "¿Qué datos del edificio necesitáis?",
        respuesta: "La planta, el tamaño del ascensor, la anchura de la escalera y las normas de la portería. Con eso preparamos la mudanza sin sorpresas.",
      },
    ],
    relacionadas: ['zonas', 'mudanzas-salamanca', 'mudanzas-tetuan', 'mudanzas-pequenas-madrid'],
    servicio: {
      nombre: 'Mudanzas en Chamberí',
      descripcion: 'Mudanzas de viviendas y oficinas en el distrito de Chamberí, Madrid.',
      area: 'Madrid',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza completa',
  },

  /* ---------------------------- SALAMANCA ---------------------------- */
  {
    path: 'mudanzas-salamanca',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Mudanzas en el barrio de Salamanca | Mudanzas360',
    description:
      'Mudanzas en el distrito de Salamanca: Goya, Recoletos, Lista, Castellana o Guindalera. Pisos señoriales y muebles delicados, con presupuesto gratis.',
    etiqueta: 'Mudanzas en el barrio de Salamanca',
    resumen: 'Pisos señoriales, portería y muebles delicados en una cuadrícula muy transitada.',
    h1: { antes: 'Mudanzas en el barrio de', resaltado: 'Salamanca', despues: '' },
    kicker: 'DISTRITO DE SALAMANCA',
    intro:
      'El ensanche de Salamanca tiene calles en cuadrícula, pisos amplios con portería y mucho comercio. Las mudanzas aquí piden cuidado con los muebles y coordinación con la comunidad.',
    foto: 'embalaje',
    fotoAlt: 'Salón amueblado de una vivienda',
    fotoContenido: 'embalaje-material',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza en el barrio de Salamanca',
    fichas: [
      { etiqueta: 'Desde Sol', valor: 'Unos 10-15 min en coche, sin atascos' },
      { etiqueta: 'Barrios', valor: 'Recoletos, Goya, Lista, Castellana…' },
      { etiqueta: 'Vivienda habitual', valor: 'Pisos señoriales con portería' },
      { etiqueta: 'Cerca', valor: 'Retiro, Chamberí y Chamartín' },
    ],
    secciones: [
      {
        titulo: 'Una cuadrícula con mucho tráfico',
        parrafos: [
          'El distrito se organiza en una retícula de calles rectas como Serrano, Velázquez, Príncipe de Vergara, Goya u Ortega y Gasset. Son vías con mucho tráfico, comercios y carriles de autobús, donde detener un vehículo para cargar exige elegir bien la calle lateral y la hora.',
          'Las calles transversales, más tranquilas, suelen ser mejores para situar el camión. En Guindalera y Fuente del Berro, al este, el ambiente es más residencial y hay algo más de margen.',
        ],
      },
      {
        titulo: 'Reservar sitio para cargar',
        parrafos: [
          'Con el estacionamiento regulado y la alta ocupación de las calles, en Salamanca es muy recomendable prever dónde se cargará. Infórmate en el Ayuntamiento de Madrid sobre el procedimiento para reservar espacio en la vía pública y su antelación.',
          'Si el edificio tiene garaje con altura suficiente o patio de carga, cuéntanoslo: puede simplificar mucho el trabajo.',
        ],
      },
      {
        titulo: 'Pisos señoriales y muebles valiosos',
        parrafos: [
          'Muchas viviendas son pisos amplios en edificios de principios del siglo XX o de mediados de siglo, con portería, escalera principal y, en ocasiones, ascensor de servicio o montacargas. Las comunidades suelen tener normas claras sobre horarios, uso de ascensores y protección de zonas comunes.',
          'Es habitual encontrar muebles antiguos, cuadros, lámparas de araña, alfombras y piezas delicadas que requieren un embalaje específico. Indícalas desde el principio para preparar la protección adecuada.',
        ],
        subsecciones: [
          {
            titulo: 'Ascensor de servicio',
            texto: 'Si el edificio lo tiene, pregunta si puede reservarse para la mudanza: suele ser más amplio y evita usar el principal.',
          },
        ],
      },
      {
        titulo: 'Traslados frecuentes',
        parrafos: [
          'Además de mudanzas dentro del distrito y hacia Chamartín o Retiro, son habituales los traslados de despachos y oficinas en la zona de Castellana y Recoletos. Para ellos podemos plantear el trabajo fuera del horario laboral.',
          'Pide presupuesto y te responde tu único interlocutor de Mudanzas360.',
        ],
      },
      {
        titulo: "Antes de la mudanza en Salamanca",
        parrafos: [
          "En un piso señorial, lo más útil es un inventario con fotos de los muebles antiguos, las lámparas y los cuadros, con sus medidas. Así podemos preparar el embalaje específico de cada pieza y llevar el material necesario. Si hay piezas de mucho valor, indícalo al pedir presupuesto para prever su protección.",
          "Las porterías del barrio suelen tener normas precisas: horarios de mudanza, uso del ascensor de servicio y protección de suelos y paredes. Habla con el portero con antelación y, si es posible, reserva el ascensor de servicio para todo el día. Si en tu calle hay carril bus o mucho tráfico, el camión deberá situarse en una transversal o en un espacio reservado.",
          "Para despachos y oficinas en la zona de Castellana, un inventario por puestos facilita montar todo en destino en el orden correcto.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Podéis embalar muebles antiguos y cuadros?',
        respuesta: 'Sí. Cuéntanos qué piezas son, con fotos y medidas, y prepararemos una protección adecuada para cada una.',
      },
      {
        pregunta: '¿Trasladáis despachos en el barrio de Salamanca?',
        respuesta: 'Sí, podemos valorarlo, también fuera del horario de oficina. Indica el número de puestos y las normas del edificio.',
      },
      {
        pregunta: '¿Hay que coordinar la mudanza con la portería?',
        respuesta: 'Es lo recomendable. Pregunta horarios y normas, y si se puede reservar el ascensor de servicio, si lo hay.',
      },
      {
        pregunta: '¿Dónde para el camión en una calle como Goya?',
        respuesta: 'Normalmente en una transversal más tranquila o en un espacio reservado. Danos la dirección y lo estudiamos.',
      },
      {
        pregunta: "¿Lleváis material para proteger suelos y ascensores?",
        respuesta: "Sí, protegemos las zonas comunes según lo que pida la comunidad. Cuéntanos sus normas para llevar lo necesario.",
      },
      {
        pregunta: "¿Trabajáis también en Guindalera y Fuente del Berro?",
        respuesta: "Sí, en todos los barrios del distrito. En esa zona más residencial suele haber algo más de margen para situar el vehículo.",
      },
    ],
    relacionadas: ['zonas', 'mudanzas-retiro', 'mudanzas-chamberi', 'embalaje-mudanzas-madrid'],
    servicio: {
      nombre: 'Mudanzas en el barrio de Salamanca',
      descripcion: 'Mudanzas de viviendas y despachos en el distrito de Salamanca, Madrid.',
      area: 'Madrid',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza completa',
  },

  /* ---------------------------- RETIRO ---------------------------- */
  {
    path: 'mudanzas-retiro',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Mudanzas en Retiro, Madrid | Mudanzas360',
    description:
      'Mudanzas en el distrito de Retiro: Pacífico, Ibiza, Niño Jesús, Estrella o Jerónimos. Pisos de varias épocas y calles concurridas. Presupuesto gratis.',
    etiqueta: 'Mudanzas en Retiro',
    resumen: 'Alrededor del parque: Ibiza, Pacífico, Estrella y Jerónimos.',
    h1: { antes: 'Mudanzas en', resaltado: 'Retiro', despues: '' },
    kicker: 'DISTRITO DE RETIRO',
    intro:
      'Retiro rodea el parque con barrios muy distintos: Jerónimos y sus edificios nobles, Ibiza y Niño Jesús junto al parque, y Pacífico o Estrella, más residenciales. Planificamos según cada uno.',
    foto: 'madrid',
    fotoAlt: 'Camión de mudanzas con cajas frente a un bloque de viviendas',
    fotoContenido: 'salon-cajas',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza en Retiro',
    fichas: [
      { etiqueta: 'Desde Sol', valor: 'Unos 10-15 min en coche, sin atascos' },
      { etiqueta: 'Barrios', valor: 'Pacífico, Ibiza, Estrella, Jerónimos…' },
      { etiqueta: 'Vivienda habitual', valor: 'Pisos de varias épocas' },
      { etiqueta: 'Cerca', valor: 'Salamanca, Moratalaz y Arganzuela' },
    ],
    secciones: [
      {
        titulo: 'Cómo moverse por el distrito',
        parrafos: [
          'Los ejes principales son Menéndez Pelayo, O’Donnell, Doctor Esquerdo y la avenida de Ciudad de Barcelona, con mucho tráfico en horas punta. Junto al parque, calles como Ibiza o Sainz de Baranda tienen comercio y vida de barrio, mientras que en Estrella y Adelfas el trazado es más amplio y residencial.',
          'Jerónimos, junto al Prado y al Retiro, es una zona de calles señoriales y tráfico turístico, donde detenerse exige especial cuidado.',
        ],
      },
      {
        titulo: 'Aparcamiento y permiso de carga',
        parrafos: [
          'Todo el distrito tiene estacionamiento regulado y alta ocupación. Para que el camión pueda situarse junto al portal, consulta en el Ayuntamiento de Madrid cómo reservar espacio en la vía pública y con qué antelación conviene pedirlo.',
          'En Estrella y Niño Jesús muchos edificios tienen garaje; si el tuyo permite la entrada de un vehículo de carga, puede ahorrar tiempo.',
        ],
      },
      {
        titulo: 'Qué viviendas hay',
        parrafos: [
          'En Jerónimos e Ibiza abundan los pisos amplios en edificios de principios y mediados del siglo XX, con portería y escaleras nobles. Pacífico y Adelfas tienen bloques de distintas épocas, algunos sin ascensor o con uno pequeño. Estrella y Niño Jesús reúnen edificios de los años sesenta y setenta con garaje y zonas ajardinadas.',
          'Cada tipo plantea retos diferentes: muebles delicados en las fincas antiguas, escaleras en los bloques sin ascensor y normas de comunidad en los conjuntos con zonas comunes.',
        ],
        subsecciones: [
          {
            titulo: 'Patios de manzana',
            texto: 'En los conjuntos con jardín interior, el portal puede estar dentro de la manzana. Cuéntanoslo para prever el recorrido a pie.',
          },
        ],
      },
      {
        titulo: 'Mudanzas habituales',
        parrafos: [
          'Además de los traslados dentro de Retiro, son frecuentes las mudanzas hacia Moratalaz, Salamanca o Arganzuela, y la llegada de familias que buscan la cercanía del parque. También hay muchos pisos de alquiler con cambios frecuentes de inquilinos.',
          'Si tu nueva casa aún no está lista, un guardamuebles temporal cubre el hueco entre fechas.',
        ],
      },
      {
        titulo: "Cómo organizar tu mudanza en Retiro",
        parrafos: [
          "Las calles que rodean el parque tienen mucho movimiento los fines de semana, cuando se llenan de paseantes y corredores. Si tu vivienda está en Ibiza, Niño Jesús o junto a Menéndez Pelayo, una mudanza entre semana suele ser más sencilla. En Jerónimos, con tráfico turístico durante todo el día, la primera hora de la mañana es la más despejada.",
          "En los edificios de Estrella y Niño Jesús con garaje, pregunta a la comunidad si el vehículo puede entrar y cuál es la altura máxima. En Pacífico y Adelfas, donde hay edificios sin ascensor, indica la planta exacta para calcular el tiempo. Y si dejas un piso de alquiler, haz fotos de su estado antes de que salga el último mueble.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Hacéis mudanzas en Jerónimos?',
        respuesta: 'Sí. Danos la dirección exacta para revisar el acceso, porque es una zona con mucho tráfico y normas de comunidad exigentes.',
      },
      {
        pregunta: '¿Podéis usar el garaje del edificio para cargar?',
        respuesta: 'Si la altura y las normas lo permiten, sí. Indícalo en la solicitud y lo revisamos contigo.',
      },
      {
        pregunta: '¿Necesito reservar espacio en la calle en Retiro?',
        respuesta: 'Suele ser recomendable por la alta ocupación. Consulta el trámite al Ayuntamiento de Madrid y lo coordinamos.',
      },
      {
        pregunta: '¿Trabajáis en Pacífico y Adelfas?',
        respuesta: 'Sí. Indica la planta y si hay ascensor, porque en esos barrios hay edificios sin él.',
      },
      {
        pregunta: "¿Es mejor mudarse entre semana en Retiro?",
        respuesta: "Si vives cerca del parque, sí: los fines de semana hay mucha gente en la calle y la carga es más lenta.",
      },
      {
        pregunta: "¿Hacéis mudanzas desde Retiro a Moratalaz o Arganzuela?",
        respuesta: "Sí, son recorridos cortos y frecuentes. El tiempo depende sobre todo de las plantas y de dónde pueda parar el vehículo.",
      },
    ],
    relacionadas: ['zonas', 'mudanzas-salamanca', 'mudanzas-vallecas', 'guardamuebles-madrid'],
    servicio: {
      nombre: 'Mudanzas en Retiro',
      descripcion: 'Mudanzas de viviendas y oficinas en el distrito de Retiro, Madrid.',
      area: 'Madrid',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza completa',
  },

  /* ---------------------------- CARABANCHEL ---------------------------- */
  {
    path: 'mudanzas-carabanchel',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Mudanzas en Carabanchel, Madrid | Mudanzas360',
    description:
      'Mudanzas en Carabanchel: Opañel, Vista Alegre, Comillas, San Isidro o el PAU. Bloques sin ascensor y pisos nuevos, con presupuesto gratis y trato directo.',
    etiqueta: 'Mudanzas en Carabanchel',
    resumen: 'Bloques sin ascensor en los barrios clásicos y pisos nuevos en el PAU.',
    h1: { antes: 'Mudanzas en', resaltado: 'Carabanchel', despues: '' },
    kicker: 'DISTRITO DE CARABANCHEL',
    intro:
      'Carabanchel es uno de los distritos más poblados de Madrid, con bloques de los años cincuenta y sesenta y un PAU moderno. Te preguntamos por tu edificio para planificar bien la mudanza.',
    foto: 'cajas-apiladas',
    fotoAlt: 'Cajas de cartón apiladas sobre palés',
    fotoContenido: 'madrid',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza en Carabanchel',
    fichas: [
      { etiqueta: 'Desde Sol', valor: 'Unos 15-20 min en coche, sin atascos' },
      { etiqueta: 'Accesos', valor: 'M-30, M-40, A-42 y General Ricardos' },
      { etiqueta: 'Vivienda habitual', valor: 'Bloques sin ascensor y pisos nuevos' },
      { etiqueta: 'Cerca', valor: 'Latina, Usera y Leganés' },
    ],
    secciones: [
      {
        titulo: 'Accesos y calles principales',
        parrafos: [
          'General Ricardos, Eugenia de Montijo, Vía Carpetana y la calle Oca vertebran el distrito, con mucho tráfico y comercio. La M-30 y la M-40 lo rodean, y la A-42 sale hacia Leganés y Toledo. En barrios como Comillas, Opañel o San Isidro, las calles interiores son estrechas, a veces en cuesta, y con aparcamiento muy ocupado.',
          'El PAU de Carabanchel, en Buenavista, tiene avenidas anchas y una trama mucho más fácil para circular con un camión.',
        ],
      },
      {
        titulo: 'Dónde cargar',
        parrafos: [
          'En los barrios tradicionales del distrito es difícil encontrar hueco junto al portal, sobre todo por la tarde. Si quieres que el vehículo pueda situarse cerca, consulta al Ayuntamiento de Madrid el procedimiento para reservar espacio en la calle y con qué antelación pedirlo.',
          'En el PAU, muchos edificios tienen garaje y zonas amplias de acceso, aunque las comunidades suelen pedir aviso previo.',
        ],
      },
      {
        titulo: 'Bloques antiguos y pisos nuevos',
        parrafos: [
          'Buena parte de Carabanchel se construyó entre los años cincuenta y setenta, con bloques de tres a cinco plantas, a menudo sin ascensor o con uno muy pequeño. Subir y bajar muebles por escaleras estrechas es lo que más tiempo consume, y casi siempre hay que desmontar camas y armarios.',
          'En el PAU predominan pisos recientes con ascensor amplio, trastero y garaje, con mudanzas mucho más ágiles.',
        ],
        subsecciones: [
          {
            titulo: 'Reformas',
            texto: 'Muchos pisos antiguos se reforman al cambiar de dueño. Si te mudas para hacer obra, un guardamuebles evita trasladar los muebles dos veces.',
          },
        ],
      },
      {
        titulo: 'Recorridos frecuentes',
        parrafos: [
          'Son muy habituales las mudanzas dentro del distrito, hacia Latina o Usera, y hacia municipios del sur como Leganés, Alcorcón o Getafe. En distancias tan cortas, el precio depende sobre todo de las plantas y de los accesos.',
          'Pide presupuesto y te responde tu único interlocutor de Mudanzas360.',
        ],
      },
      {
        titulo: "Consejos para mudarte en Carabanchel",
        parrafos: [
          "En los bloques sin ascensor de Opañel, Comillas o San Isidro, el desmontaje previo es clave: si puedes, vacía los armarios y retira las baldas el día anterior, y deja los cajones vacíos o fijados. Los muebles bajan más ligeros y el equipo puede concentrarse en lo que realmente pesa.",
          "Si la calle está en cuesta o es muy estrecha, indícalo en la solicitud: a veces conviene una furgoneta más pequeña que pueda acercarse al portal. En el PAU de Buenavista, en cambio, lo importante es coordinar con la comunidad el uso del garaje y del ascensor. Y si vas a reformar el piso que dejas o el que recibes, decide antes qué se queda en guardamuebles.",
          "Muchos vecinos se mudan dentro del propio distrito, de un bloque antiguo a una vivienda con ascensor: en esos casos el trabajo se concentra casi todo en la salida.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Podéis hacer una mudanza en un quinto sin ascensor?',
        respuesta: 'Sí. Indica la planta en el formulario: con ese dato calculamos el tiempo y el número de personas necesarias.',
      },
      {
        pregunta: '¿Trabajáis en el PAU de Carabanchel?',
        respuesta: 'Sí. Indica si hay garaje o normas de comunidad, para organizar el acceso del vehículo.',
      },
      {
        pregunta: '¿Me guardáis los muebles mientras reformo el piso?',
        respuesta: 'Sí, podemos valorar un guardamuebles temporal con recogida y entrega. Indica una previsión de tiempo.',
      },
      {
        pregunta: '¿Hace falta permiso para el camión en Carabanchel?',
        respuesta: 'En muchas calles conviene reservar espacio. Consulta el trámite al Ayuntamiento de Madrid y lo coordinamos contigo.',
      },
      {
        pregunta: "¿Tengo que vaciar los armarios antes de la mudanza?",
        respuesta: "Es lo recomendable, sobre todo si no hay ascensor: un armario vacío se desmonta y se baja mucho más rápido.",
      },
    ],
    relacionadas: ['zonas', 'mudanzas-alcorcon', 'mudanzas-leganes', 'guardamuebles-madrid'],
    servicio: {
      nombre: 'Mudanzas en Carabanchel',
      descripcion: 'Mudanzas de viviendas y portes en el distrito de Carabanchel, Madrid.',
      area: 'Madrid',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza completa',
  },

  /* ---------------------------- VALLECAS ---------------------------- */
  {
    path: 'mudanzas-vallecas',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Mudanzas en Vallecas, Madrid | Mudanzas360',
    description:
      'Mudanzas en Puente y Villa de Vallecas: Entrevías, Numancia, Portazgo, Santa Eugenia o el Ensanche. Pisos y portes con presupuesto gratis y trato directo.',
    etiqueta: 'Mudanzas en Vallecas',
    resumen: 'Puente y Villa de Vallecas: de los bloques de Numancia al Ensanche.',
    h1: { antes: 'Mudanzas en', resaltado: 'Vallecas', despues: '' },
    kicker: 'PUENTE Y VILLA DE VALLECAS',
    intro:
      'Vallecas son dos distritos: Puente de Vallecas, denso y con mucha vida de barrio, y Villa de Vallecas, con su casco histórico, Santa Eugenia y el Ensanche. Cada uno pide un planteamiento distinto.',
    foto: 'furgoneta-calle',
    fotoAlt: 'Camión pequeño de mudanzas en una calle arbolada',
    fotoContenido: 'cajas-apiladas',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza en Vallecas',
    fichas: [
      { etiqueta: 'Desde Sol', valor: 'Unos 15-25 min en coche, sin atascos' },
      { etiqueta: 'Accesos', valor: 'A-3, M-30, M-40 y M-45' },
      { etiqueta: 'Vivienda habitual', valor: 'Bloques y pisos del Ensanche' },
      { etiqueta: 'Cerca', valor: 'Retiro, Moratalaz y Rivas' },
    ],
    secciones: [
      {
        titulo: 'Puente de Vallecas',
        parrafos: [
          'La avenida de la Albufera es la arteria principal, con mucho tráfico, comercio y paradas de autobús. En barrios como Numancia, Portazgo, San Diego o Palomeras, las calles interiores son estrechas y a menudo en pendiente, con coches aparcados en ambos lados. Encontrar dónde detener un camión es la parte más delicada de la mudanza.',
          'Muchos edificios son bloques de los años cincuenta a setenta, con escaleras estrechas y ascensores pequeños o inexistentes. Lo habitual es desmontar armarios y camas antes de bajarlos.',
        ],
      },
      {
        titulo: 'Villa de Vallecas',
        parrafos: [
          'El casco histórico de Villa de Vallecas conserva calles más estrechas, mientras que Santa Eugenia es un conjunto de bloques de los años setenta y ochenta organizados alrededor de zonas comunes. El Ensanche de Vallecas, mucho más reciente, tiene avenidas anchas, edificios con garaje y piscinas comunitarias.',
          'En el Ensanche la carga suele ser sencilla; en el casco y Santa Eugenia conviene prever el recorrido entre la calle y el portal.',
        ],
        subsecciones: [
          {
            titulo: 'Reserva de espacio',
            texto: 'En las calles más estrechas de ambos distritos, consulta al Ayuntamiento de Madrid cómo solicitar espacio para la carga el día de la mudanza.',
          },
        ],
      },
      {
        titulo: 'Accesos por carretera',
        parrafos: [
          'La A-3 cruza la zona hacia Rivas y Valencia, la M-30 y la M-40 conectan con el resto de Madrid, y la M-45 da servicio al Ensanche y a Santa Eugenia. A primera hora, la A-3 y la M-40 se cargan mucho; para mudanzas hacia otros municipios conviene elegir bien la hora.',
          'Si te mudas a Levante, la propia A-3 es el camino natural: consulta nuestra ruta Madrid-Valencia.',
        ],
      },
      {
        titulo: 'Mudanzas frecuentes',
        parrafos: [
          'Muchas familias se trasladan dentro de Vallecas, del Puente a la Villa o al Ensanche, buscando un piso más grande o con ascensor. También son habituales los traslados hacia Rivas, Moratalaz o Retiro.',
          'Te responde tu único interlocutor de Mudanzas360.',
        ],
      },
      {
        titulo: "Preparar una mudanza en Vallecas",
        parrafos: [
          "En Puente de Vallecas, las calles en pendiente y estrechas de barrios como Palomeras o Numancia hacen importante elegir bien dónde se detiene el vehículo. Dinos si tu portal está en una cuesta, si hay escalones de acceso y si hay una calle más llana cerca. Con esa información decidimos el tamaño del vehículo y el punto de carga.",
          "Si te mudas al Ensanche, revisa con la nueva comunidad el uso del ascensor, del garaje y de las zonas comunes, y pregunta si hay horario para mudanzas. En Santa Eugenia, averigua si los vehículos pueden acercarse a los portales interiores. Y si el traslado es desde el Puente a la Villa, recuerda que la M-40 a primera hora suele ir muy cargada.",
          "En pisos sin ascensor, vacía los armarios y desmonta lo que puedas con antelación para acortar el día de la mudanza.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Trabajáis en Puente y en Villa de Vallecas?',
        respuesta: 'Sí, en ambos distritos. Indica la dirección exacta para revisar el acceso, que cambia mucho de un barrio a otro.',
      },
      {
        pregunta: '¿Podéis cargar en una calle en cuesta de Numancia?',
        respuesta: 'Sí, revisando antes dónde puede detenerse el vehículo con seguridad. Danos la dirección y lo estudiamos.',
      },
      {
        pregunta: '¿Hacéis mudanzas al Ensanche de Vallecas?',
        respuesta: 'Sí. Indica si hay garaje y normas de la comunidad sobre ascensores y zonas comunes.',
      },
      {
        pregunta: '¿Cuánto cuesta una mudanza dentro de Vallecas?',
        respuesta: 'Depende del volumen y de las plantas más que de la distancia. Consulta la calculadora o pídenos tu propuesta.',
      },
      {
        pregunta: "¿Podéis usar una furgoneta pequeña en calles estrechas?",
        respuesta: "Sí, cuando la calle lo pide valoramos un vehículo más pequeño, aunque pueda suponer más de un viaje.",
      },
    ],
    relacionadas: ['zonas', 'mudanzas-rivas-vaciamadrid', 'mudanzas-retiro', 'mudanzas-pisos-madrid'],
    servicio: {
      nombre: 'Mudanzas en Vallecas',
      descripcion: 'Mudanzas de viviendas y portes en Puente de Vallecas y Villa de Vallecas, Madrid.',
      area: 'Madrid',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza completa',
  },

  /* ---------------------------- TETUÁN ---------------------------- */
  {
    path: 'mudanzas-tetuan',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Mudanzas en Tetuán, Madrid | Mudanzas360',
    description:
      'Mudanzas en Tetuán: Cuatro Caminos, Bellas Vistas, Castillejos, Berruguete o Valdeacederas. Calles estrechas junto a Bravo Murillo. Presupuesto gratis.',
    etiqueta: 'Mudanzas en Tetuán',
    resumen: 'Calles estrechas junto a Bravo Murillo y edificios modernos cerca de Castellana.',
    h1: { antes: 'Mudanzas en', resaltado: 'Tetuán', despues: '' },
    kicker: 'DISTRITO DE TETUÁN',
    intro:
      'Tetuán es un distrito de contrastes: casas bajas y calles estrechas alrededor de Bravo Murillo, y torres de oficinas junto a la Castellana. Te ayudamos a planificar la mudanza en cualquiera de ellos.',
    foto: 'oficina-diafana',
    fotoAlt: 'Oficina diáfana con puestos de trabajo',
    fotoContenido: 'furgoneta-blanca',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza en Tetuán',
    fichas: [
      { etiqueta: 'Desde Sol', valor: 'Unos 15 min en coche, sin atascos' },
      { etiqueta: 'Barrios', valor: 'Cuatro Caminos, Bellas Vistas, Berruguete…' },
      { etiqueta: 'Vivienda habitual', valor: 'Edificios antiguos y obra nueva' },
      { etiqueta: 'Cerca', valor: 'Chamberí, Chamartín y Fuencarral' },
    ],
    secciones: [
      {
        titulo: 'Bravo Murillo y sus calles',
        parrafos: [
          'Bravo Murillo recorre el distrito de sur a norte con comercio, autobuses y mucho tráfico. A su alrededor, en Bellas Vistas, Berruguete o Valdeacederas, hay un entramado de calles estrechas, algunas de un solo carril, con edificios bajos y otros de varias alturas.',
          'En esas calles detenerse sin bloquear el paso es complicado, y a menudo conviene usar un vehículo más pequeño o prever un tramo a pie hasta el portal.',
        ],
      },
      {
        titulo: 'Castillejos y la Castellana',
        parrafos: [
          'Al este del distrito, en Castillejos y Cuatro Caminos, conviven bloques residenciales con edificios de oficinas cercanos a la Castellana y al complejo de AZCA. Allí son habituales los traslados de despachos y pequeñas empresas, con normas de acceso propias de cada edificio.',
          'Para mudanzas de oficina podemos plantear horarios fuera de la jornada laboral si el edificio lo permite.',
        ],
      },
      {
        titulo: 'Tipo de vivienda y permiso de carga',
        parrafos: [
          'Tetuán mezcla edificios antiguos sin ascensor, bloques de los años sesenta y setenta y promociones nuevas que han sustituido a casas bajas. En los edificios antiguos, las escaleras estrechas obligan a desmontar muchos muebles.',
          'Por la densidad del distrito, es muy recomendable consultar al Ayuntamiento de Madrid cómo reservar espacio en la vía pública para la carga, y hacerlo con antelación.',
        ],
        subsecciones: [
          {
            titulo: 'Pisos pequeños',
            texto: 'Hay muchos estudios y pisos pequeños, sobre todo de alquiler. Para ellos, una mudanza pequeña o un porte suelen ser suficientes.',
          },
        ],
      },
      {
        titulo: 'Traslados frecuentes',
        parrafos: [
          'Abundan las mudanzas dentro del distrito y hacia Chamberí, Chamartín o Fuencarral, así como los traslados de despachos. En recorridos tan cortos, el precio depende sobre todo del volumen, las plantas y la distancia entre el vehículo y el portal.',
          'Pide presupuesto y te responde tu único interlocutor de Mudanzas360.',
        ],
      },
      {
        titulo: "Consejos para una mudanza en Tetuán",
        parrafos: [
          "En las calles estrechas alrededor de Bravo Murillo, lo que más ayuda es saber de antemano por dónde se llega al portal y si hay una calle más ancha cerca donde el vehículo pueda detenerse. Indícanos también si el edificio tiene escalones en el portal o un pasillo largo hasta el ascensor.",
          "En las promociones nuevas que han sustituido a casas bajas, los ascensores suelen ser amplios, pero las comunidades a menudo piden aviso previo y protección de las zonas comunes. Si trasladas un despacho cerca de la Castellana, consulta con el edificio los horarios de carga y si hay un muelle o una entrada de servicio.",
          "Para estudios y pisos pequeños de alquiler, muy habituales en el distrito, a menudo basta con una furgoneta y dos personas, y la mudanza se hace en pocas horas.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Podéis hacer una mudanza en una calle estrecha de Bellas Vistas?',
        respuesta: 'Sí. A veces conviene un vehículo más pequeño o un tramo a pie. Danos la dirección y te proponemos la mejor opción.',
      },
      {
        pregunta: '¿Trasladáis oficinas cerca de la Castellana?',
        respuesta: 'Sí, podemos valorarlo. Indica las normas de acceso del edificio y si prefieres trabajar fuera del horario laboral.',
      },
      {
        pregunta: '¿Hacéis mudanzas de estudios pequeños?',
        respuesta: 'Sí. Para poco volumen, consulta nuestras mudanzas pequeñas o los portes.',
      },
      {
        pregunta: '¿Necesito reservar sitio para el camión en Tetuán?',
        respuesta: 'Es muy recomendable por la densidad del distrito. Consulta el trámite al Ayuntamiento de Madrid y lo coordinamos.',
      },
      {
        pregunta: "¿Cuánto dura una mudanza de un estudio en Tetuán?",
        respuesta: "Suele ser cuestión de pocas horas, aunque depende de la planta y del acceso. Te damos el tiempo previsto en la propuesta.",
      },
      {
        pregunta: "¿Trabajáis en Valdeacederas y Berruguete?",
        respuesta: "Sí, en todos los barrios de Tetuán. Danos la dirección para revisar el acceso, porque muchas calles son estrechas.",
      },
    ],
    relacionadas: ['zonas', 'mudanzas-chamberi', 'mudanzas-oficinas-madrid', 'mudanzas-pequenas-madrid'],
    servicio: {
      nombre: 'Mudanzas en Tetuán',
      descripcion: 'Mudanzas de viviendas y oficinas en el distrito de Tetuán, Madrid.',
      area: 'Madrid',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza completa',
  },
];
