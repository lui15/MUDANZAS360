import { PaginaSeo } from './pagina-seo';

/**
 * Páginas por municipio. Para añadir otro, copia el esquema, escribe contenido local propio
 * (accesos, carga y descarga, tipo de vivienda) y regístralo en rutas.ts.
 */
export const PAGINAS_ZONAS: PaginaSeo[] = [
  /* ---------------------------- ALCALÁ DE HENARES ---------------------------- */
  {
    path: 'mudanzas-alcala-de-henares',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Mudanzas en Alcalá de Henares | Mudanzas360',
    description:
      'Mudanzas en Alcalá de Henares: casco histórico, Espartales o El Ensanche. Tenemos en cuenta accesos y carga y descarga. Presupuesto gratis.',
    etiqueta: 'Mudanzas en Alcalá de Henares',
    resumen: 'Del casco histórico a El Ensanche y Espartales, conectados por la A-2.',
    h1: { linea: 'Mudanzas en', resaltado: 'Alcalá de Henares' },
    kicker: 'MUDANZAS EN ALCALÁ DE HENARES',
    intro:
      'Ciudad universitaria, Patrimonio de la Humanidad y con barrios muy distintos entre sí. Mudarse en Alcalá puede ser muy sencillo o muy complicado, según tu calle. Lo valoramos contigo.',
    imagen: 'madrid',
    imagenAlt: 'Camión de mudanzas junto a un bloque de pisos, preparado para un traslado en Alcalá de Henares',
    fichas: [
      { etiqueta: 'Conexión con Madrid', valor: 'A-2 y M-300' },
      { etiqueta: 'A vigilar', valor: 'Casco histórico peatonal' },
      { etiqueta: 'Vivienda habitual', valor: 'Bloques y pisos de nueva construcción' },
    ],
    secciones: [
      {
        titulo: 'Accesos: la A-2 y las entradas a la ciudad',
        parrafos: [
          'Desde Madrid, el camino natural es la A-2, una de las autovías con más tráfico de la región, sobre todo en hora punta y en el tramo que atraviesa el corredor del Henares. Elegir bien la hora de salida puede ahorrar bastante tiempo. Desde el sur de la Comunidad se llega por la M-300, que pasa por Arganda y Loeches.',
          'Una vez en Alcalá, la Vía Complutense funciona como eje principal y facilita el paso hacia muchos barrios. Los pasos bajo la vía del tren y algunas calles residenciales condicionan por dónde conviene que entre un vehículo grande. Por eso tiene sentido revisar la dirección concreta antes de fijar el recorrido.',
        ],
      },
      {
        titulo: 'Aparcamiento y carga y descarga por zonas',
        parrafos: [
          'La situación cambia mucho de un barrio a otro. Antes de la mudanza, conviene consultar en el ayuntamiento si necesitas reservar espacio en la vía pública, ya que es el que puede indicarte el trámite y los plazos en cada caso.',
        ],
        subsecciones: [
          {
            titulo: 'Casco histórico',
            texto:
              'La Calle Mayor y buena parte del entorno de la Plaza de Cervantes son peatonales o de acceso restringido. Aquí lo más probable es parar lo más cerca posible y hacer un tramo a pie, lo que hay que prever en tiempo y personal.',
          },
          {
            titulo: 'Reyes Católicos, Juan de Austria y barrios consolidados',
            texto:
              'Son zonas muy pobladas, con mucha demanda de aparcamiento durante el día. La carga suele ir mejor a primera hora, y en muchos edificios hay que comprobar el tamaño de ascensores y escaleras.',
          },
          {
            titulo: 'Espartales y El Ensanche',
            texto:
              'Calles más amplias y edificios recientes hacen más fácil acercar el camión. A cambio, suele haber garajes y normas de comunidad; pregunta si los ascensores deben protegerse.',
          },
        ],
      },
      {
        titulo: 'Tipo de vivienda habitual en Alcalá',
        parrafos: [
          'Alcalá tiene un poco de todo. En el centro hay edificios antiguos con escaleras estrechas, algunos protegidos. En los barrios construidos en las décadas de los 60 y 70 predominan los bloques de cuatro o cinco plantas, muchos de ellos sin ascensor o con uno pequeño añadido más tarde, algo que condiciona mover armarios y sofás grandes.',
          'En Espartales, El Ensanche o La Garena hay más pisos modernos con ascensor y plaza de garaje, además de algunos adosados. Y al ser una ciudad universitaria, también es habitual el traslado de estudiantes y de pequeños pisos compartidos, que a menudo se resuelve con un porte.',
        ],
      },
      {
        titulo: 'Mudanzas habituales desde y hacia Alcalá',
        parrafos: [
          'Muchos de los traslados que nos consultan aquí son hacia Madrid capital o hacia otras ciudades del corredor, como Torrejón de Ardoz, Guadalajara o Azuqueca de Henares. También hay familias que salen de la capital buscando una vivienda más amplia. Si la tuya es una mudanza entre dos municipios, solo tienes que indicar las dos direcciones en el formulario.',
          'Si estudias o trabajas en la universidad y solo necesitas llevar lo de tu habitación, o si compras un mueble en una zona comercial cercana, puedes pedir un porte en lugar de una mudanza completa. Te ahorras lo que no necesitas y sigues contando con ayuda para las piezas más pesadas.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Podéis hacer una mudanza en el casco histórico de Alcalá?',
        respuesta:
          'Sí, aunque hay que estudiar el acceso. En las calles peatonales habrá que encontrar el punto más cercano para el vehículo y contar con ese tramo a pie al preparar el trabajo.',
      },
      {
        pregunta: '¿Necesito permiso para que aparque el camión en Alcalá?',
        respuesta:
          'Depende de la calle y de cómo vaya a ocuparse la vía. Lo mejor es consultarlo con el ayuntamiento con antelación; revisamos contigo la dirección para ver si hace falta.',
      },
      {
        pregunta: '¿Hacéis portes para estudiantes en Alcalá?',
        respuesta:
          'Sí, puedes solicitar un porte si solo tienes unas cuantas cajas y algún mueble. Selecciona «Porte / transporte» en el formulario y cuéntanos lo que hay que trasladar.',
      },
      {
        pregunta: '¿Cuánto cuesta una mudanza en Alcalá de Henares?',
        respuesta:
          'Depende del volumen, de los accesos y de los servicios. Encontrarás rangos orientativos en la página de precios, y te prepararemos una propuesta en cuanto nos cuentes tu caso.',
      },
    ],
    relacionadas: ['zonas', 'mudanzas-madrid', 'portes-madrid', 'mudanzas-pisos-madrid'],
    servicio: {
      nombre: 'Mudanzas en Alcalá de Henares',
      descripcion: 'Mudanzas de viviendas y oficinas y portes en Alcalá de Henares, Comunidad de Madrid.',
      area: 'Alcalá de Henares',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza de vivienda',
  },

  /* ---------------------------- GETAFE ---------------------------- */
  {
    path: 'mudanzas-getafe',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Mudanzas en Getafe | Mudanzas360',
    description:
      'Mudanzas en Getafe: Sector III, El Bercial, Los Molinos o Perales del Río. Tenemos en cuenta accesos, plantas y ascensor. Presupuesto gratis.',
    etiqueta: 'Mudanzas en Getafe',
    resumen: 'Del centro y Sector III a los nuevos desarrollos, entre la A-4 y la A-42.',
    h1: { linea: 'Mudanzas', resaltado: 'en Getafe' },
    kicker: 'MUDANZAS EN GETAFE',
    intro:
      'Getafe combina barrios con edificios de varias décadas y desarrollos recientes, con accesos directos a Madrid por dos autovías. Preparamos tu traslado según lo que haya en tu calle.',
    imagen: 'madrid',
    imagenAlt: 'Camión de mudanzas con cajas en la calle, preparado para un traslado en Getafe',
    fichas: [
      { etiqueta: 'Conexión con Madrid', valor: 'A-4 y A-42' },
      { etiqueta: 'Circunvalaciones', valor: 'M-45 y M-50' },
      { etiqueta: 'Vivienda habitual', valor: 'Bloques y pisos de nueva construcción' },
    ],
    secciones: [
      {
        titulo: 'Accesos: entre la A-4 y la A-42',
        parrafos: [
          'Getafe tiene una posición muy favorable para una mudanza. La A-42 lo une directamente con Madrid por el oeste y la A-4 por el este, y la M-45 y la M-50 dan salida hacia otros municipios del sur sin tener que entrar en la capital. Eso permite elegir la ruta en función del tráfico y del barrio de destino.',
          'Las horas punta de la mañana son las más densas, sobre todo con la entrada a Madrid por la A-42 y el tráfico de los polígonos industriales. Barrios como Perales del Río tienen una conexión particular, separados del núcleo principal por la A-4 y más cerca de la M-301. Te conviene indicar el barrio al pedir presupuesto.',
        ],
      },
      {
        titulo: 'Aparcamiento y carga y descarga por barrios',
        parrafos: [
          'Encontrar un hueco para un camión es muy distinto en el centro de la ciudad que en un barrio de calles anchas. Si la calle es estrecha o está muy ocupada, consulta en el ayuntamiento si hace falta tramitar una reserva de espacio para el día de la mudanza.',
        ],
        subsecciones: [
          {
            titulo: 'Centro, San Isidro y Las Margaritas',
            texto:
              'Barrios muy consolidados, con mucha densidad y aparcamiento limitado. Suele ser mejor trabajar temprano y prever que el vehículo no pueda parar justo en la puerta.',
          },
          {
            titulo: 'Sector III y Juan de la Cierva',
            texto:
              'Urbanismo de bloques abiertos con más espacio entre edificios, aunque en algunas zonas hay que recorrer zonas interiores hasta el portal. Conviene tenerlo en cuenta al calcular los tiempos.',
          },
          {
            titulo: 'El Bercial, Los Molinos y Buenavista',
            texto:
              'Desarrollos más recientes, con calles amplias y edificios con garaje. La llegada del camión suele ser más sencilla, aunque las comunidades pueden tener normas para usar los ascensores.',
          },
        ],
      },
      {
        titulo: 'Tipo de vivienda habitual en Getafe',
        parrafos: [
          'Gran parte del parque de viviendas se construyó en las décadas de los 60 y 70, con bloques de ladrillo de cuatro o cinco plantas. Muchos edificios no tenían ascensor, y aunque varios lo han instalado después, suele ser estrecho. Para las piezas más grandes, puede que sea necesario desmontarlas o bajar por las escaleras. Por eso te preguntamos por la planta y el ascensor en el formulario.',
          'En El Bercial, Los Molinos o las zonas más nuevas de Buenavista, en cambio, abundan los pisos de tres y cuatro habitaciones con ascensor. También hay adosados, con escaleras interiores que dificultan mover muebles entre plantas. Cuanto mejor conozcamos tu vivienda, más ajustada será la propuesta.',
        ],
      },
      {
        titulo: 'Otros traslados habituales en Getafe',
        parrafos: [
          'La cercanía con la Universidad Carlos III hace que también haya traslados pequeños de estudiantes, que habitualmente se resuelven con un porte. La concentración de empresas y polígonos, como Los Ángeles o San Marcos, genera además traslados de oficinas, talleres o pequeños negocios, en los que suele importar sobre todo interrumpir lo mínimo la actividad.',
          'Y si estás haciendo una reforma, algo frecuente en viviendas de los años 70, puedes guardar los muebles temporalmente mientras duran las obras. Podemos valorar el traslado de ida y vuelta para tu casa. Cuéntanos qué necesitas y lo incluiremos en una única propuesta.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Hacéis mudanzas en todos los barrios de Getafe?',
        respuesta:
          'Sí, atendemos solicitudes en Getafe, incluidos el centro, Sector III, Juan de la Cierva, El Bercial, Los Molinos, Buenavista y Perales del Río. Indica la dirección en el formulario.',
      },
      {
        pregunta: '¿Qué pasa si mi bloque de Getafe no tiene ascensor?',
        respuesta:
          'Se puede hacer sin problema; solo hay que tenerlo previsto. Indica la planta en el formulario para calcular el tiempo y las personas necesarias, y qué muebles conviene desmontar.',
      },
      {
        pregunta: '¿Podéis trasladar un negocio de un polígono de Getafe?',
        respuesta:
          'Sí, podemos valorar traslados de oficinas, talleres y pequeños negocios. Selecciona «Mudanza de oficina» y cuéntanos qué tienes y qué plazo manejas.',
      },
      {
        pregunta: '¿Cuánto cuesta una mudanza en Getafe?',
        respuesta:
          'Depende del tamaño de la vivienda, las plantas y los servicios que necesites. Consulta los rangos orientativos en nuestra página de precios y pídenos una propuesta para tu caso.',
      },
    ],
    relacionadas: ['zonas', 'mudanzas-mostoles', 'guardamuebles-madrid', 'mudanzas-oficinas-madrid'],
    servicio: {
      nombre: 'Mudanzas en Getafe',
      descripcion: 'Mudanzas de viviendas y oficinas y portes en Getafe, Comunidad de Madrid.',
      area: 'Getafe',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza de vivienda',
  },

  /* ---------------------------- MÓSTOLES ---------------------------- */
  {
    path: 'mudanzas-mostoles',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Mudanzas en Móstoles | Mudanzas360',
    description:
      'Mudanzas en Móstoles: centro, Parque Coimbra, Estoril o Móstoles Sur. Tenemos en cuenta accesos, plantas y aparcamiento. Presupuesto gratis.',
    etiqueta: 'Mudanzas en Móstoles',
    resumen: 'De los bloques del centro a Parque Coimbra y Móstoles Sur, junto a la A-5.',
    h1: { linea: 'Mudanzas', resaltado: 'en Móstoles' },
    kicker: 'MUDANZAS EN MÓSTOLES',
    intro:
      'Con más de doscientos mil habitantes, Móstoles reúne barrios densos de varios pisos y urbanizaciones de chalets. Cada uno pide planificar la mudanza de una forma diferente.',
    imagen: 'portes',
    imagenAlt: 'Camión de mudanzas cargado con cajas y muebles, preparado para un traslado en Móstoles',
    fichas: [
      { etiqueta: 'Conexión con Madrid', valor: 'A-5 y R-5' },
      { etiqueta: 'Circunvalaciones', valor: 'M-50 y M-506' },
      { etiqueta: 'Vivienda habitual', valor: 'Pisos en bloque y chalets' },
    ],
    secciones: [
      {
        titulo: 'Accesos: la A-5 y las conexiones del sur',
        parrafos: [
          'La entrada natural desde Madrid es la A-5, la autovía de Extremadura, que suele ir cargada en las horas punta, sobre todo cerca de Alcorcón. La R-5, de peaje, puede ser una alternativa en días complicados. La M-50 facilita el enlace con otras autovías, y la M-506 conecta directamente con Fuenlabrada y Pinto.',
          'Dentro de la ciudad hay avenidas amplias que facilitan el tránsito, pero también calles estrechas en el centro. Si tu mudanza une Móstoles con municipios como Alcorcón, Fuenlabrada o Navalcarnero, puede ser mejor evitar el centro de Madrid y mirar qué ruta nos conviene según el día.',
        ],
      },
      {
        titulo: 'Aparcamiento y carga y descarga por zonas',
        parrafos: [
          'Lo que más tiempo puede consumir en una mudanza es la distancia entre el vehículo y el portal. Por eso es tan importante informarse con tiempo sobre las condiciones de tu calle y comprobar, en caso de duda, si necesitas una autorización municipal para reservar espacio.',
        ],
        subsecciones: [
          {
            titulo: 'Centro y barrios tradicionales',
            texto:
              'Las calles cercanas a la Plaza del Pradillo y al casco antiguo pueden ser estrechas, con más densidad y con el aparcamiento muy ocupado. Lo recomendable es trabajar en la primera franja de la mañana.',
          },
          {
            titulo: 'Estoril, Villafontana y bloques abiertos',
            texto:
              'Hay más espacio alrededor de los edificios, pero a veces los accesos interiores no permiten llegar directamente a cada portal. Conviene prever ese recorrido a pie.',
          },
          {
            titulo: 'Móstoles Sur y Parque Coimbra',
            texto:
              'Calles más anchas y viviendas más recientes en Móstoles Sur. En las urbanizaciones de chalets de Parque Coimbra hay que comprobar el ancho de las calles y los accesos a cada parcela.',
          },
        ],
      },
      {
        titulo: 'Tipo de vivienda habitual en Móstoles',
        parrafos: [
          'Móstoles creció muy rápido desde los años 70, y gran parte de sus viviendas son pisos en bloques de varias alturas. En los más antiguos, los ascensores pueden ser reducidos o no llegar a todas las plantas, y las escaleras tienen giros cerrados. Esto puede hacer necesario desmontar armarios y bajar colchones y sofás con cuidado.',
          'En cambio, Parque Coimbra y otras zonas de chalets y adosados presentan otros retos: varias plantas con escaleras interiores, sótanos o trasteros y jardines que hay que atravesar hasta llegar a la calle. Si tu mudanza es de este tipo, indícalo porque suele haber bastante más volumen del que parece a primera vista.',
        ],
      },
      {
        titulo: 'Traslados frecuentes en el sur de Madrid',
        parrafos: [
          'Muchas mudanzas se producen dentro de la misma ciudad o hacia municipios cercanos como Alcorcón, Villaviciosa de Odón o Arroyomolinos. Al ser recorridos cortos, lo que más cuenta en estos casos es el tiempo de carga y descarga, por lo que la información sobre plantas y accesos tiene una gran influencia en el resultado.',
          'También hay quienes aprovechan su zona universitaria para trasladar sus cosas al terminar el curso, o quienes reciben muebles nuevos de los grandes centros comerciales de la zona. En esos casos, un porte puede ser más que suficiente. Consulta también nuestro servicio de montaje si quieres que te dejemos el mueble listo.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Podéis acceder a una urbanización de chalets en Móstoles?',
        respuesta:
          'Sí, solo hay que comprobar el ancho de la calle y si existe control de acceso. Indica la dirección y las particularidades de la parcela para prepararlo correctamente.',
      },
      {
        pregunta: '¿Hacéis mudanzas entre Móstoles y otros municipios?',
        respuesta:
          'Sí, atendemos traslados desde Móstoles hacia otros municipios de la Comunidad de Madrid y el resto de España. Indica las dos direcciones en el formulario.',
      },
      {
        pregunta: '¿Qué hago si mi sofá no cabe en el ascensor?',
        respuesta:
          'Dínoslo en la solicitud, con las medidas si las tienes. Valoraremos si se puede desmontar o si hay que bajarlo por la escalera, para evitar sorpresas ese día.',
      },
      {
        pregunta: '¿Cuánto cuesta una mudanza en Móstoles?',
        respuesta:
          'Depende del volumen, de las plantas y de los servicios. En nuestra página de precios verás rangos orientativos, y te prepararemos una propuesta personalizada sin compromiso.',
      },
    ],
    relacionadas: ['zonas', 'mudanzas-getafe', 'montaje-desmontaje-muebles-mudanza', 'portes-madrid'],
    servicio: {
      nombre: 'Mudanzas en Móstoles',
      descripcion: 'Mudanzas de viviendas y oficinas y portes en Móstoles, Comunidad de Madrid.',
      area: 'Móstoles',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza de vivienda',
  },

  /* ---------------------------- ALCOBENDAS ---------------------------- */
  {
    path: 'mudanzas-alcobendas',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Mudanzas en Alcobendas | Mudanzas360',
    description:
      'Mudanzas en Alcobendas y La Moraleja: viviendas, chalets y oficinas. Tenemos en cuenta controles de acceso y garajes. Presupuesto gratis y sin compromiso.',
    etiqueta: 'Mudanzas en Alcobendas',
    resumen: 'Viviendas, chalets de La Moraleja y oficinas de los parques empresariales junto a la A-1.',
    h1: { linea: 'Mudanzas', resaltado: 'en Alcobendas' },
    kicker: 'MUDANZAS EN ALCOBENDAS',
    intro:
      'Alcobendas es residencial y empresarial a la vez: pisos en el centro, chalets en La Moraleja y grandes oficinas en Arroyo de la Vega. Te ayudamos a planificar el traslado según tu caso.',
    imagen: 'oficinas',
    imagenAlt: 'Oficina con puestos de trabajo y cajas, preparada para un traslado en Alcobendas',
    fichas: [
      { etiqueta: 'Conexión con Madrid', valor: 'A-1' },
      { etiqueta: 'Circunvalación', valor: 'M-40 y M-50 cercanas' },
      { etiqueta: 'Vivienda habitual', valor: 'Pisos, chalets y oficinas' },
    ],
    secciones: [
      {
        titulo: 'Accesos: la A-1 y las salidas a la ciudad',
        parrafos: [
          'La A-1, la autovía del Norte, es la entrada principal desde Madrid y una de las más concurridas de la región en hora punta, especialmente por la mañana en dirección a la capital y por la tarde de vuelta. La R-2 y la M-50 ofrecen opciones para enlazar con otros corredores si vas o vienes de Alcalá o del noroeste.',
          'Alcobendas y San Sebastián de los Reyes forman en la práctica una sola zona urbana, unidas por la A-1, y a menudo el traslado va de un municipio a otro. Si haces una mudanza de este tipo, es mejor evitar los días de mayor afluencia al centro comercial o al entorno de los parques empresariales.',
        ],
      },
      {
        titulo: 'Aparcamiento y carga y descarga por zonas',
        parrafos: [
          'Los retos son muy distintos si te mudas a un piso del centro, a un chalet de una urbanización privada o a una oficina con muelle de carga. Si la calle está muy ocupada, consulta al ayuntamiento si hay que reservar espacio para el camión.',
        ],
        subsecciones: [
          {
            titulo: 'Distrito Centro y Fuentelucha',
            texto:
              'Mucha actividad comercial y bloques de pisos, por lo que el aparcamiento está más concurrido. La franja más temprana suele resultar la mejor para detener un camión cerca del portal.',
          },
          {
            titulo: 'Valdelasfuentes',
            texto:
              'Calles anchas y edificios modernos, generalmente con ascensor y garaje. Pregunta en tu comunidad si hay que reservar el ascensor o proteger las zonas comunes antes de empezar.',
          },
          {
            titulo: 'La Moraleja y El Soto',
            texto:
              'Urbanizaciones de grandes parcelas con vigilancia y control de entrada. Avisa con antelación de la fecha y de los datos del vehículo, y comprueba por dónde se accede a la vivienda.',
          },
        ],
      },
      {
        titulo: 'Tipo de vivienda habitual en Alcobendas',
        parrafos: [
          'En el centro, muchos edificios tienen ya unas décadas, con ascensores justos para según qué piezas. Las zonas más recientes, como Valdelasfuentes, cuentan con pisos amplios con garaje y trastero. Y en las urbanizaciones de La Moraleja y El Soto hay viviendas de gran tamaño con varias plantas, sótanos, habitaciones de servicio y objetos delicados, que suponen un volumen de trabajo muy diferente.',
          'Una vivienda grande suele necesitar un inventario detallado, varios días de preparación y atención especial a piezas como obras de arte, lámparas de techo o pianos. Si tu caso es este, cuéntanos lo que tienes y lo revisaremos con calma para preparar la solución adecuada.',
        ],
      },
      {
        titulo: 'Mudanzas de empresa en Arroyo de la Vega',
        parrafos: [
          'Arroyo de la Vega concentra sedes de empresas y parques empresariales, con edificios de oficinas que suelen tener normas de acceso muy concretas: muelles de carga reservables, ascensores de servicio, horarios limitados y seguridad que pide los datos con antelación. Un traslado aquí empieza hablando con la administración de los dos inmuebles.',
          'Podemos estudiar un plan para mudar la oficina fuera del horario laboral o por fases, con el fin de reducir el tiempo sin actividad. Si quieres saber más sobre cómo lo hacemos, consulta nuestra página de mudanzas de oficinas y envíanos los datos básicos de tu traslado.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Trabajáis en La Moraleja y El Soto de la Moraleja?',
        respuesta:
          'Sí. Indica la dirección y las condiciones de acceso de tu urbanización en la solicitud, para que organicemos con tiempo los datos del vehículo y el horario de entrada.',
      },
      {
        pregunta: '¿Podéis hacer el traslado de una oficina en Arroyo de la Vega?',
        respuesta:
          'Sí, podemos valorarlo. Cuéntanos el número de puestos, las normas de los dos edificios y las fechas disponibles. Podemos plantear fases o trabajar fuera del horario habitual.',
      },
      {
        pregunta: '¿Hacéis mudanzas entre Alcobendas y San Sebastián de los Reyes?',
        respuesta:
          'Sí. Son recorridos muy cortos, en los que el tiempo de trabajo depende sobre todo de los accesos y las plantas. Indica las dos direcciones en el formulario.',
      },
      {
        pregunta: '¿Podéis trasladar objetos delicados o de mucho valor?',
        respuesta:
          'Dínoslo desde el principio y descríbenos las piezas. Algunos objetos, como pianos o arte, necesitan una protección o un transporte a medida, y lo valoramos de forma individual.',
      },
    ],
    relacionadas: ['zonas', 'mudanzas-oficinas-madrid', 'embalaje-mudanzas-madrid', 'mudanzas-las-rozas'],
    servicio: {
      nombre: 'Mudanzas en Alcobendas',
      descripcion: 'Mudanzas de viviendas y oficinas y portes en Alcobendas y La Moraleja, Comunidad de Madrid.',
      area: 'Alcobendas',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza de vivienda',
  },

  /* ---------------------------- LAS ROZAS ---------------------------- */
  {
    path: 'mudanzas-las-rozas',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Mudanzas en Las Rozas | Mudanzas360',
    description:
      'Mudanzas en Las Rozas: chalets, adosados y pisos en Las Matas, El Burgo o Monterrozas. Comprobamos accesos y parcelas. Presupuesto gratis y sin compromiso.',
    etiqueta: 'Mudanzas en Las Rozas',
    resumen: 'Chalets y adosados en urbanizaciones, y pisos en El Burgo y Európolis, junto a la A-6.',
    h1: { linea: 'Mudanzas', resaltado: 'en Las Rozas' },
    kicker: 'MUDANZAS EN LAS ROZAS',
    intro:
      'En el noroeste de Madrid, mudarse suele significar chalets y adosados con varias plantas, jardín y accesos que hay que mirar con calma. Lo organizamos teniendo en cuenta cómo es tu casa.',
    imagen: 'viviendas',
    imagenAlt: 'Camión de mudanzas junto a un chalet con cajas apiladas, en un traslado en Las Rozas',
    fichas: [
      { etiqueta: 'Conexión con Madrid', valor: 'A-6' },
      { etiqueta: 'Circunvalación', valor: 'M-50 y M-505' },
      { etiqueta: 'Vivienda habitual', valor: 'Chalets, adosados y pisos' },
    ],
    secciones: [
      {
        titulo: 'Accesos: la A-6 y las urbanizaciones',
        parrafos: [
          'La A-6, la autovía del Noroeste, es la conexión directa con Madrid, y suele saturarse a primera hora en dirección a la capital y por la tarde al regreso. La M-50 enlaza con Majadahonda, Boadilla y Pozuelo, mientras la M-505 lleva hacia El Escorial y la sierra. Salir fuera de esas horas ayuda a que un camión llegue con margen.',
          'Las Rozas tiene varios núcleos separados entre sí, como El Burgo, Las Matas, El Pinar o Molino de la Hoz, y no siempre están bien conectados. Dentro de cada uno, hay calles residenciales estrechas, con curvas y algunas pendientes. Por eso resulta muy útil comprobar la dirección antes de elegir el vehículo.',
        ],
      },
      {
        titulo: 'Aparcamiento y carga y descarga por zonas',
        parrafos: [
          'A diferencia de lo que ocurre en otros municipios, en muchas urbanizaciones hay poco problema de aparcamiento, pero sí de maniobra. En cualquier zona, si vas a ocupar parte de la calzada, es recomendable consultar al ayuntamiento qué trámite es necesario.',
        ],
        subsecciones: [
          {
            titulo: 'El Burgo y centro urbano',
            texto:
              'Es donde más pisos y comercio se concentran, con calles concurridas durante el día. La primera franja de la mañana permite acercar el camión con más facilidad.',
          },
          {
            titulo: 'Las Matas, El Pinar y Molino de la Hoz',
            texto:
              'Calles estrechas o con arbolado que pueden dificultar el paso de vehículos altos. A veces conviene un vehículo más pequeño o un acarreo para llegar hasta la parcela.',
          },
          {
            titulo: 'Monterrozas y Európolis',
            texto:
              'Mezcla de viviendas y actividad empresarial, con vías más anchas. En urbanizaciones con control de acceso, avisa antes del horario y de los datos del vehículo.',
          },
        ],
      },
      {
        titulo: 'Tipo de vivienda habitual en Las Rozas',
        parrafos: [
          'Es muy habitual el chalet o el adosado de varias plantas, a menudo con sótano o buhardilla. Las escaleras interiores, en especial las que tienen giros, determinan si un armario o un sofá pasa entero o hay que desmontarlo. Además, los jardines y las rampas de garaje pueden hacer más largo el camino hasta el camión.',
          'No olvides lo que queda fuera de la vista: el trastero, el garaje y el jardín suelen acumular herramientas, bicicletas, muebles de exterior y maceteros. Al revisar el inventario, recórrelos también. Es frecuente subestimar el volumen de una vivienda unifamiliar y descubrir el problema el último día.',
        ],
      },
      {
        titulo: 'Cuando te mudas por más espacio… o por menos',
        parrafos: [
          'Muchas familias llegan a Las Rozas desde Madrid en busca de una casa más amplia, y otras dejan un chalet que se les ha quedado grande para irse a un piso más pequeño. En el segundo caso es normal que no quepan todos los muebles: antes de la mudanza hay que decidir qué conservar, y un guardamuebles puede ayudar a tomar esa decisión con tiempo.',
          'Si has comprado muebles para la nueva casa, puedes coordinar su montaje junto con el traslado. Y si vas a hacer alguna reforma antes de entrar, podemos planificar la mudanza por fases. Cuéntanos todo esto en los detalles de tu solicitud para encontrar la mejor manera de organizarlo.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Podéis hacer una mudanza de un chalet con varias plantas?',
        respuesta:
          'Sí. Dinos cuántas plantas hay, si tiene sótano o garaje y qué muebles grandes hay en cada una. Con eso calculamos el tiempo y las personas necesarias.',
      },
      {
        pregunta: '¿Cabe un camión en todas las calles de Las Rozas?',
        respuesta:
          'No siempre. En algunas calles estrechas o con arbolado puede ser mejor usar un vehículo menor o hacer un tramo a pie. Revisamos tu dirección al preparar la propuesta.',
      },
      {
        pregunta: '¿Hacéis mudanzas a pueblos de la sierra desde Las Rozas?',
        respuesta:
          'Sí, puedes solicitar un traslado hacia Torrelodones, Galapagar, El Escorial u otros municipios. Indica las dos direcciones en el formulario para estudiar el recorrido.',
      },
      {
        pregunta: '¿Cuánto cuesta una mudanza en Las Rozas?',
        respuesta:
          'Depende del volumen, de las plantas y de los accesos, especialmente si es un chalet. Consulta los rangos orientativos en la página de precios y pídenos tu propuesta sin compromiso.',
      },
    ],
    relacionadas: ['zonas', 'mudanzas-alcobendas', 'montaje-desmontaje-muebles-mudanza', 'guardamuebles-madrid'],
    servicio: {
      nombre: 'Mudanzas en Las Rozas',
      descripcion: 'Mudanzas de viviendas y oficinas y portes en Las Rozas de Madrid, Comunidad de Madrid.',
      area: 'Las Rozas de Madrid',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza de vivienda',
  },
];
