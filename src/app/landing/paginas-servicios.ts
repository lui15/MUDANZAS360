import { COMO_PEDIR_TEXTO, PaginaSeo } from './pagina-seo';
import { RUTAS_NACIONALES } from './rutas';

export const PAGINAS_SERVICIOS: PaginaSeo[] = [
  /* ---------------------------- MUDANZAS EN MADRID ---------------------------- */
  {
    path: 'mudanzas-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Empresa de mudanzas en Madrid | Mudanzas360',
    description:
      'Mudanzas en Madrid capital y municipios: pisos, casas y oficinas. Te ayudamos con permisos, accesos y fechas. Presupuesto gratis y sin compromiso.',
    etiqueta: 'Mudanzas en Madrid',
    resumen: 'Traslados dentro de la capital y entre municipios de la Comunidad de Madrid.',
    h1: { antes: 'Empresa de mudanzas', resaltado: 'en Madrid', despues: '' },
    kicker: 'MUDANZAS EN MADRID',
    intro:
      'Mudarse en Madrid tiene sus propias reglas: calles estrechas, zonas de bajas emisiones, edificios sin ascensor y aparcamiento escaso. Las tenemos en cuenta desde el primer momento para que el día del traslado no haya sorpresas.',
    foto: 'madrid',
    fotoAlt: 'Camión de mudanzas con cajas y muebles embalados en un barrio residencial',
    fotoContenido: 'furgoneta-calle',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza en Madrid',
    fichas: [
      { etiqueta: 'Zona de trabajo', valor: 'Madrid capital y Comunidad' },
      { etiqueta: 'Tipo de traslado', valor: 'Pisos, casas y oficinas' },
      { etiqueta: 'Presupuesto', valor: 'Gratis y sin compromiso' },
      { etiqueta: 'Cómo pedirlo', valor: 'Formulario, WhatsApp o teléfono' },
    ],
    secciones: [
      {
        titulo: 'Lo que hace distinta una mudanza en Madrid',
        parrafos: [
          'Una mudanza de pocos kilómetros puede ser más compleja que un viaje largo. En Madrid, lo que marca el trabajo no suele ser la distancia, sino lo que ocurre en la puerta: dónde se detiene el camión, cuánta distancia hay hasta el portal, si el ascensor admite un armario y a qué hora se puede cortar un carril o reservar un hueco.',
          'Por eso, antes de darte una propuesta te preguntamos por la planta, el ascensor y los accesos de las dos viviendas. Con esos datos se puede decidir qué vehículo conviene, cuántas personas hacen falta y cuánto tiempo hay que reservar, en lugar de descubrirlo el mismo día.',
        ],
      },
      {
        titulo: 'Permisos, carga y descarga en la capital',
        parrafos: [
          'En muchas calles de Madrid, ocupar la vía pública para una mudanza requiere autorización municipal, y conviene solicitarla con antelación. Además, parte del centro está dentro de la Zona de Bajas Emisiones de Especial Protección, y algunos barrios tienen calles de acceso restringido o con horarios de carga y descarga muy concretos.',
          'Revisamos contigo la dirección de recogida y de entrega para saber si hace falta alguna gestión y quién debe encargarse. Si tu comunidad de vecinos pide avisar con tiempo o proteger los ascensores, cuéntanoslo también: es mejor tenerlo previsto.',
        ],
        lista: [
          'Centro, Chamberí y Salamanca: calles con poco espacio y restricciones de acceso.',
          'Ensanches como Sanchinarro, Valdebebas o El Cañaveral: más espacio en calle, pero garajes y conserjerías con normas propias.',
          'Barrios de bloque abierto, como Carabanchel, Vallecas o San Blas: muchos edificios antiguos con ascensor pequeño o sin él.',
        ],
      },
      {
        titulo: 'Qué podemos hacer por ti',
        parrafos: [
          'Puedes contratar solo el transporte o sumar los servicios que te falten. Lo habitual es combinar el traslado con el desmontaje de los muebles grandes, porque rara vez pasan por las escaleras tal como están, y con material de protección para lo más delicado.',
          'Si las fechas de salida y de entrada no coinciden, también podemos valorar un guardamuebles temporal. Y si solo tienes que mover unas pocas piezas, un porte suele salir más a cuenta que una mudanza completa.',
        ],
        subsecciones: [
          {
            titulo: 'Mudanzas entre barrios',
            texto:
              'Son los traslados más frecuentes: distancias cortas, pero con dos accesos urbanos que coordinar. Elegir bien la franja horaria ayuda a evitar los momentos de más tráfico.',
          },
          {
            titulo: 'De la capital a los municipios',
            texto:
              'Si sales de Madrid hacia el sur, el corredor del Henares o la sierra, cambian las carreteras y a menudo también el tipo de vivienda. Consulta nuestras zonas para ver qué tener en cuenta en cada municipio.',
          },
        ],
      },
      {
        titulo: 'Cómo preparar tu mudanza con tiempo',
        parrafos: [
          'Cuanta más antelación tengas, más fácil será conseguir la fecha que quieres, sobre todo a final de mes, en los meses de verano y en septiembre, cuando coinciden más traslados. Empieza por deshacerte de lo que no vayas a usar: cada mueble que se queda atrás reduce el volumen y, normalmente, el coste.',
          'Haz una lista por habitaciones, anota lo que sea frágil o especialmente pesado y mide los muebles grandes y los huecos de paso de la vivienda nueva. Si nos envías esa información con la solicitud, la propuesta será mucho más ajustada a lo que necesitas de verdad.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta una mudanza dentro de Madrid?',
        respuesta:
          'Depende sobre todo del volumen, de los accesos y de los servicios adicionales. La distancia influye menos que en un viaje largo. Puedes ver qué influye en el precio en nuestra página de precios y pedirnos una propuesta para tu caso.',
      },
      {
        pregunta: '¿Hace falta permiso para aparcar el camión en la calle?',
        respuesta:
          'Depende de la calle y del municipio. En muchos casos hay que solicitar autorización al ayuntamiento con antelación. Revisamos contigo las direcciones para saber si es necesario en tu mudanza.',
      },
      {
        pregunta: '¿Podéis hacer la mudanza si el edificio no tiene ascensor?',
        respuesta:
          'Sí, solo tienes que indicarlo en el formulario junto con la planta. Es un dato importante porque cambia el tiempo de trabajo y el número de personas necesario, así que lo tenemos en cuenta en la propuesta.',
      },
      { pregunta: '¿Cómo pido presupuesto?', respuesta: COMO_PEDIR_TEXTO },
    ],
    relacionadas: ['mudanzas-pisos-madrid', 'zonas', 'precios', 'guardamuebles-madrid'],
    servicio: {
      nombre: 'Mudanzas en Madrid',
      descripcion: 'Mudanzas de viviendas y oficinas en Madrid capital y en los municipios de la Comunidad de Madrid.',
      area: 'Madrid',
      tipoArea: 'City',
    },
    servicioFormulario: 'Mudanza completa',
  },

  /* ---------------------------- PISOS ---------------------------- */
  {
    path: 'mudanzas-pisos-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Mudanzas de pisos en Madrid | Mudanzas360',
    description:
      'Mudanzas de pisos y casas en Madrid: desmontaje, embalaje y traslado adaptados a la planta, el ascensor y el tamaño de tu vivienda. Presupuesto gratis.',
    etiqueta: 'Mudanzas de pisos en Madrid',
    resumen: 'Traslado de pisos, estudios y casas, con la ayuda que necesites en cada vivienda.',
    h1: { antes: 'Mudanzas de pisos', resaltado: 'y casas en Madrid', despues: '' },
    kicker: 'MUDANZAS DE VIVIENDAS',
    intro:
      'Estudio, piso familiar o chalet: cada vivienda pide una organización distinta. Te ayudamos a calcular lo que hace falta según las habitaciones, la planta y lo que quieras que hagamos por ti.',
    foto: 'salon-cajas',
    fotoAlt: 'Salón de una vivienda con cajas de cartón apiladas para la mudanza',
    fotoContenido: 'viviendas',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza',
    fichas: [
      { etiqueta: 'Viviendas', valor: 'Estudios, pisos y chalets' },
      { etiqueta: 'A tu medida', valor: 'Solo transporte o servicio completo' },
      { etiqueta: 'Sin ascensor', valor: 'Lo valoramos en tu propuesta' },
      { etiqueta: 'Presupuesto', valor: 'Gratis y sin compromiso' },
    ],
    secciones: [
      {
        titulo: 'Tres datos que definen tu mudanza',
        parrafos: [
          'Antes de hablar de precio, hay que entender el trabajo. El primer dato es el volumen, que no depende solo de los metros: un piso pequeño con mucho almacenaje puede llenar más que uno grande con pocos muebles. El segundo son los accesos, tanto en la vivienda de salida como en la de llegada. El tercero es lo que quieras delegar.',
          'Con esa información, nuestro formulario te permite indicar el tamaño aproximado, la planta y si hay ascensor en cada dirección. Si no lo tienes claro, marca «No lo sé todavía» y lo vemos contigo.',
        ],
      },
      {
        titulo: 'Según el tamaño de tu vivienda',
        parrafos: [
          'No es lo mismo vaciar un estudio en una mañana que coordinar una casa con varias habitaciones, trastero y garaje. Estas son las diferencias que solemos encontrar:',
        ],
        subsecciones: [
          {
            titulo: 'Estudios y pisos de una habitación',
            texto:
              'Suelen resolverse con un vehículo y poco tiempo, sobre todo si ya tienes las cajas hechas. Lo que más pesa aquí es el acceso: una cuarta planta sin ascensor cambia bastante el trabajo.',
          },
          {
            titulo: 'Pisos de dos y tres habitaciones',
            texto:
              'Son las mudanzas más habituales. Aparecen armarios y camas que hay que desmontar, y conviene planificar el orden de carga para que todo salga en la secuencia correcta al llegar.',
          },
          {
            titulo: 'Viviendas grandes y chalets',
            texto:
              'Más estancias, más piezas voluminosas y a veces varias plantas, trastero o jardín. Aquí compensa revisar el inventario con calma e incluso repartir el trabajo si es necesario.',
          },
        ],
      },
      {
        titulo: 'Qué puedes dejar en nuestras manos',
        parrafos: [
          'Tú decides hasta dónde llegamos. Hay quien prefiere embalar sus cosas y encargarnos solo los muebles y el transporte, y quien quiere olvidarse de casi todo. Cuéntanos tu caso en el último paso del formulario y prepararemos la propuesta según lo que nos pidas.',
        ],
        lista: [
          'Desmontaje y montaje de armarios, camas y otros muebles.',
          'Cajas y material de protección para objetos frágiles.',
          'Traslado desde y hasta el interior de la vivienda.',
          'Almacenaje temporal si tus fechas no coinciden.',
        ],
      },
      {
        titulo: 'Consejos para el día de la mudanza',
        parrafos: [
          'Deja a mano una bolsa con lo imprescindible de las primeras horas: documentación, cargadores, medicación, ropa y productos de aseo. Las joyas, el dinero y los documentos importantes es mejor que viajen contigo. Etiqueta las cajas por habitación y marca las que contengan objetos frágiles: ahorrarás tiempo al colocarlas.',
          'Vacía y descongela el frigorífico con un día de margen, y comprueba que los ascensores y los accesos estén disponibles en las dos direcciones. Si necesitas avisar a la comunidad de vecinos, hazlo unos días antes. Son gestos sencillos que evitan la mayoría de los imprevistos.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Tengo que vaciar los armarios antes de la mudanza?',
        respuesta:
          'En general, sí: los muebles viajan mejor vacíos y sin peso, y si hay que desmontarlos es imprescindible. Si necesitas ayuda para embalar el contenido, indícalo en la solicitud y lo tendremos en cuenta.',
      },
      {
        pregunta: '¿Y si no sé cuánto volumen tengo?',
        respuesta:
          'No pasa nada. Indica en el formulario el número de habitaciones y describe lo más voluminoso. Al revisar tu solicitud nos pondremos en contacto contigo para concretar lo que falte.',
      },
      {
        pregunta: '¿Podéis trasladar electrodomésticos?',
        respuesta:
          'Sí. Dinos cuáles son en los detalles de la solicitud y si hay que desconectarlos o instalarlos, porque algunos trabajos, como las conexiones de gas, deben hacerlos instaladores autorizados.',
      },
      { pregunta: '¿Cómo pido presupuesto?', respuesta: COMO_PEDIR_TEXTO },
    ],
    relacionadas: ['mudanzas-madrid', 'embalaje-mudanzas-madrid', 'montaje-desmontaje-muebles-mudanza', 'precios'],
    servicio: {
      nombre: 'Mudanzas de pisos y casas',
      descripcion: 'Traslado de pisos, estudios y casas en Madrid, con desmontaje de muebles y embalaje opcionales.',
      area: 'Comunidad de Madrid',
      tipoArea: 'AdministrativeArea',
    },
    servicioFormulario: 'Mudanza completa',
  },

  /* ---------------------------- OFICINAS ---------------------------- */
  {
    path: 'mudanzas-oficinas-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Mudanzas de oficinas en Madrid | Mudanzas360',
    description:
      'Traslado de oficinas, locales y negocios en Madrid con planificación por fases para interrumpir lo mínimo tu actividad. Pide tu presupuesto sin compromiso.',
    etiqueta: 'Mudanzas de oficinas en Madrid',
    resumen: 'Traslados de oficinas y locales, planificados para reducir el tiempo sin actividad.',
    h1: { antes: 'Mudanzas de oficinas', resaltado: 'y locales en Madrid', despues: '' },
    kicker: 'MUDANZAS DE EMPRESA',
    intro:
      'En un traslado de empresa, cada hora parada cuesta. Planificamos contigo el orden, los horarios y los accesos para que tu equipo vuelva a trabajar con normalidad cuanto antes.',
    foto: 'oficina-diafana',
    fotoAlt: 'Oficina diáfana con puestos de trabajo, preparada para un traslado de empresa',
    fotoContenido: 'oficinas',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza',
    fichas: [
      { etiqueta: 'Para', valor: 'Oficinas, locales y negocios' },
      { etiqueta: 'Planificación', valor: 'Por fases y fuera de horario si hace falta' },
      { etiqueta: 'Presupuesto', valor: 'Según inventario y accesos' },
      { etiqueta: 'Cómo pedirlo', valor: 'Formulario, WhatsApp o teléfono' },
    ],
    secciones: [
      {
        titulo: 'Un traslado de empresa se decide antes del primer bulto',
        parrafos: [
          'La mudanza de una oficina no consiste solo en mover mesas. Hay puestos de trabajo que deben volver a funcionar, archivos que no pueden perderse y personas que necesitan saber dónde estará su sitio el primer día. Lo más importante es tener un plan que todos conozcan.',
          'Empezamos por entender cómo funciona tu actividad: cuántos puestos hay, qué no puede parar, de qué margen dispones y qué normas tienen los dos edificios. Con eso se puede proponer un calendario realista y detectar con tiempo los puntos delicados.',
        ],
      },
      {
        titulo: 'Cómo reducir el tiempo sin actividad',
        parrafos: [
          'Lo más habitual es trabajar en fines de semana, por la tarde o por fases, de modo que los departamentos se trasladen por turnos. Cuál conviene depende del tamaño de la oficina y de lo que permita cada edificio.',
          'Si cada caja y cada equipo llevan una etiqueta con su destino, la colocación en la nueva oficina es mucho más rápida. Un plano sencillo del nuevo espacio con los puestos numerados suele ahorrar horas de dudas el día del traslado.',
        ],
        subsecciones: [
          {
            titulo: 'Oficinas pequeñas y despachos',
            texto:
              'A menudo se pueden trasladar en una jornada, si se prepara todo con antelación. Lo importante es dejar para el final lo que se usa a diario y tener claro qué llega primero.',
          },
          {
            titulo: 'Empresas con varias áreas',
            texto:
              'Un traslado por fases permite mantener la actividad mientras se mueven los departamentos por turnos. Exige más coordinación, pero evita que toda la empresa pare a la vez.',
          },
          {
            titulo: 'Locales y comercios',
            texto:
              'Los mostradores, las estanterías y el género piden otra organización. Cuéntanos qué tienes y si hay que mantener el local abierto hasta el último momento.',
          },
        ],
      },
      {
        titulo: 'Qué conviene revisar con los edificios',
        parrafos: [
          'Los edificios de oficinas y los parques empresariales suelen tener normas propias: reserva de muelles de carga, ascensores de servicio, horarios limitados, documentación exigida o registro de los trabajadores. Pregunta por ellas cuanto antes a la administración de los dos edificios, tanto el que dejas como el nuevo, y cuéntanoslas al pedir presupuesto.',
        ],
        lista: [
          'Acceso de vehículos, altura del garaje y muelles de carga.',
          'Ascensores: medidas, peso admitido y posibilidad de reservarlos.',
          'Horarios permitidos y personal de seguridad o conserjería.',
          'Documentación que te soliciten para autorizar la entrada.',
        ],
      },
      {
        titulo: 'Equipos informáticos y documentación',
        parrafos: [
          'Haz una copia de seguridad antes de apagar nada y pide a tu responsable de sistemas que se encargue de desconectar y volver a conectar servidores y redes, porque es un trabajo especializado. Nosotros nos ocupamos de la parte física: proteger, trasladar y dejar cada equipo en su sitio.',
          'Si manejas documentación con datos personales o confidenciales, decide quién la custodia durante el traslado. Lo más sencillo suele ser utilizar cajas cerradas y precintadas, con una lista de lo que contiene cada una. Es también un buen momento para archivar o destruir lo que ya no sea necesario conservar.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Podéis hacer el traslado fuera del horario laboral?',
        respuesta:
          'Coméntanoslo en tu solicitud. Los trabajos por la tarde o en fin de semana son una opción habitual en mudanzas de oficina, siempre que los permitan los edificios, y los tendremos en cuenta en la propuesta.',
      },
      {
        pregunta: '¿Qué información necesitáis para el presupuesto de una oficina?',
        respuesta:
          'Número aproximado de puestos, mobiliario y archivos, direcciones, accesos de los dos edificios y fechas posibles. Un listado o unas fotos ayudan mucho a preparar una propuesta ajustada.',
      },
      {
        pregunta: '¿Os encargáis de desconectar los ordenadores?',
        respuesta:
          'Podemos proteger y trasladar los equipos. La desconexión de servidores y redes, y la copia de seguridad previa, conviene que las gestione tu responsable de sistemas o tu proveedor informático.',
      },
      {
        pregunta: '¿Trasladáis oficinas fuera de Madrid?',
        respuesta:
          'Sí, podemos valorar traslados de empresa a otros puntos de España. Indica el destino en el formulario y lo estudiamos junto con el calendario que necesites.',
      },
    ],
    relacionadas: ['mudanzas-alcobendas', 'embalaje-mudanzas-madrid', 'guardamuebles-madrid', 'mudanzas-nacionales'],
    servicio: {
      nombre: 'Mudanzas de oficinas y locales',
      descripcion: 'Traslado de oficinas, despachos, locales y negocios en Madrid, con planificación por fases.',
      area: 'Comunidad de Madrid',
      tipoArea: 'AdministrativeArea',
    },
    servicioFormulario: 'Mudanza de oficina',
  },

  /* ---------------------------- PORTES ---------------------------- */
  {
    path: 'portes-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Portes y transporte de muebles en Madrid | Mudanzas360',
    description:
      'Portes en Madrid para mover un sofá, un armario o un electrodoméstico sin contratar una mudanza completa. Cuéntanos qué llevar y dónde. Presupuesto gratis.',
    etiqueta: 'Portes en Madrid',
    resumen: 'Para mover un mueble, un electrodoméstico o unas pocas cajas sin una mudanza completa.',
    h1: { antes: 'Portes y transporte', resaltado: 'de muebles en Madrid', despues: '' },
    kicker: 'PORTES Y TRANSPORTES',
    intro:
      '¿Te has comprado un sofá que no cabe en el coche o tienes que llevar unas pocas cosas a otra casa? Un porte es la solución cuando no necesitas una mudanza completa.',
    foto: 'portes',
    fotoAlt: 'Camión cargado con un sillón protegido, cajas y plantas frente a una casa',
    fotoContenido: 'furgoneta-blanca',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza',
    fichas: [
      { etiqueta: 'Ideal para', valor: 'Pocas piezas o compras en tienda' },
      { etiqueta: 'Recorrido', valor: 'Madrid y resto de España' },
      { etiqueta: 'Qué nos cuentas', valor: 'Qué llevar, de dónde y a dónde' },
      { etiqueta: 'Presupuesto', valor: 'Gratis y sin compromiso' },
    ],
    secciones: [
      {
        titulo: 'Cuándo te basta con un porte',
        parrafos: [
          'La diferencia con una mudanza es sencilla: el porte se centra en pocas piezas y en un trabajo corto. Si puedes contar con los dedos de las manos lo que hay que mover, probablemente no necesites contratar una mudanza. Es lo más práctico para compras en tiendas, muebles heredados o traslados pequeños de estudiantes.',
          'Si, en cambio, tienes que vaciar una vivienda entera o hay muchas cajas y muebles que desmontar, es mejor valorarlo como mudanza de piso, porque la organización y el tiempo necesario son distintos.',
        ],
        lista: [
          'Sofás, colchones, armarios, mesas y estanterías.',
          'Lavadoras, frigoríficos y otros electrodomésticos.',
          'Compras de segunda mano o recogidas en tienda.',
          'Unas cuantas cajas o el contenido de un trastero pequeño.',
          'Material y mobiliario de un negocio o de una feria.',
        ],
      },
      {
        titulo: 'Qué datos nos ayudan a responderte rápido',
        parrafos: [
          'Elige «Porte / transporte» en el formulario y cuéntanos en los detalles qué hay que mover. No hace falta una descripción perfecta, pero sí lo que determina el trabajo: el tamaño y el peso aproximados, si la pieza sale entera, la planta de cada dirección y si el ascensor es lo bastante grande.',
          'Mide lo voluminoso antes de pedirlo: el alto, el ancho y el fondo, además del hueco del ascensor y de los giros de la escalera. Muchos sustos con los sofás se evitan con una cinta métrica. Si tienes fotos, coméntanoslo y te indicaremos cómo enviarlas cuando nos pongamos en contacto contigo.',
        ],
      },
      {
        titulo: 'Con ayuda o solo transporte',
        parrafos: [
          'No todos los portes piden lo mismo. Puede que tú y un amigo podáis cargar sin problema y solo necesites el vehículo, o que necesites que suban un armario a un quinto. Indícanos qué esperas para que la propuesta refleje lo que realmente hace falta.',
        ],
        subsecciones: [
          {
            titulo: 'Recogidas en tienda',
            texto:
              'Si compras en una gran superficie o en una tienda de muebles, ten a mano el comprobante y comprueba el horario de recogida. Los paquetes planos pesan más de lo que parece y conviene saber cuántos bultos son.',
          },
          {
            titulo: 'Muebles de segunda mano',
            texto:
              'Antes de cerrar la compra, pregunta al vendedor si el mueble está en un piso alto y si se puede desmontar. Es lo que más varía el trabajo de un porte entre particulares.',
          },
          {
            titulo: 'Si además hay que montarlo',
            texto:
              'Podemos valorar el desmontaje y el montaje junto con el transporte. Indícalo en la solicitud y evita buscar a otra persona para terminar el trabajo.',
          },
        ],
      },
      {
        titulo: 'Qué influye en el precio de un porte',
        parrafos: [
          'Los portes son los servicios con precios más bajos de los que ofrecemos, pero varían mucho según el caso. Mover un colchón entre dos barrios cercanos no es comparable con subir un armario macizo a un edificio sin ascensor. Los factores principales son el tamaño y el peso, el número de personas necesarias, las plantas, la distancia y el tiempo de espera.',
          'También influye el aparcamiento: en el centro de Madrid puede haber que estacionar lejos del portal, lo que alarga el trabajo. En nuestra página de precios encontrarás qué influye en el precio, y la cifra para tu caso te la confirmaremos cuando conozcamos los detalles.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Hacéis portes de un solo mueble?',
        respuesta:
          'Sí. Selecciona «Porte / transporte» y explícanos qué hay que trasladar, dónde hay que recogerlo y dónde entregarlo. Revisamos la solicitud y te contactamos para concretarlo.',
      },
      {
        pregunta: '¿Subís los muebles al piso o solo los dejáis en el portal?',
        respuesta:
          'Depende de lo que necesites y lo que acordemos. Indica la planta y si hay ascensor, y dinos si esperas que se suba hasta la vivienda para incluirlo en la propuesta.',
      },
      {
        pregunta: '¿Puedo acompañar el transporte en la furgoneta?',
        respuesta:
          'Coméntalo en tu solicitud y lo revisamos, porque depende del vehículo asignado. En cualquier caso, debe haber alguien en cada punto para entregar y recibir el mueble.',
      },
      {
        pregunta: '¿Hacéis portes fuera de Madrid?',
        respuesta:
          'Sí. Podemos valorar envíos a otras provincias desde Madrid. Indica las dos direcciones en el formulario y lo estudiamos, ya que el recorrido influye bastante en el precio.',
      },
    ],
    relacionadas: ['montaje-desmontaje-muebles-mudanza', 'mudanzas-madrid', 'precios', 'embalaje-mudanzas-madrid'],
    servicio: {
      nombre: 'Portes y transporte de muebles',
      descripcion: 'Transporte de muebles, electrodomésticos y objetos voluminosos con recogida y entrega en Madrid.',
      area: 'Comunidad de Madrid',
      tipoArea: 'AdministrativeArea',
    },
    servicioFormulario: 'Portes o pocos muebles',
  },

  /* ---------------------------- GUARDAMUEBLES ---------------------------- */
  {
    path: 'guardamuebles-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Guardamuebles en Madrid | Mudanzas360',
    description:
      'Guardamuebles en Madrid para obras, mudanzas con fechas distintas o falta de espacio. Almacenaje temporal con traslado incluido en tu propuesta.',
    etiqueta: 'Guardamuebles en Madrid',
    resumen: 'Almacenaje temporal para obras, mudanzas con fechas distintas o falta de espacio.',
    h1: { antes: 'Guardamuebles', resaltado: 'en Madrid', despues: '' },
    kicker: 'ALMACENAJE TEMPORAL',
    intro:
      '¿Dejas tu casa antes de poder entrar en la nueva? ¿Estás de obras o te falta espacio? Te ayudamos a guardar tus muebles el tiempo que haga falta y a traerlos de vuelta cuando estés listo.',
    foto: 'guardamuebles-pasillo',
    fotoAlt: 'Pasillo de trasteros de un guardamuebles con puertas metálicas',
    fotoContenido: 'guardamuebles',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza',
    fichas: [
      { etiqueta: 'Para qué sirve', valor: 'Obras, entre dos casas o falta de espacio' },
      { etiqueta: 'Junto con', valor: 'Recogida y entrega de tus muebles' },
      { etiqueta: 'Duración', valor: 'Según lo que necesites' },
      { etiqueta: 'Presupuesto', valor: 'Gratis y sin compromiso' },
    ],
    secciones: [
      {
        titulo: 'Cuándo merece la pena un guardamuebles',
        parrafos: [
          'Es una solución para una etapa concreta. La situación más común es la de quien vende o deja su piso antes de que la casa nueva esté lista: en vez de hacer dos mudanzas apresuradas o amontonar todo en casa de la familia, los muebles esperan protegidos hasta que llega el momento.',
          'También resulta útil durante una reforma, para que el polvo y las obras no afecten a los muebles; al volver de un traslado temporal al extranjero, o si has heredado objetos que aún no sabes dónde colocar. Los negocios lo usan para guardar mobiliario o material que no necesitan a diario.',
        ],
      },
      {
        titulo: 'Guardamuebles o trastero: en qué se diferencian',
        parrafos: [
          'Un trastero de alquiler suele estar pensado para que tú mismo lleves tus cosas y entres cuando quieras. Un servicio de guardamuebles vinculado a una mudanza se ocupa también del transporte y de que todo quede en condiciones. Lo que más te conviene depende de cuánto tiempo y de cuántas veces necesites acceder.',
          'Si vas a tener que coger cosas con frecuencia, dínoslo antes de empezar para que lo tengamos en cuenta al colocarlas y para aclararte las condiciones de acceso. Si no vas a necesitarlas, puedes dejar embaladas por más tiempo las piezas de temporada o las que no utilizas.',
        ],
      },
      {
        titulo: 'Cómo preparar tus muebles para guardarlos',
        parrafos: [
          'Lo que entra limpio y seco se conserva mejor. Unos cuidados sencillos antes de la recogida marcan la diferencia al recuperar tus cosas meses después.',
        ],
        lista: [
          'Limpia los muebles y deja secar bien tapicerías y colchones.',
          'Vacía y seca los electrodomésticos, y deja abiertas las puertas de frigoríficos y lavadoras.',
          'No guardes alimentos, plantas, líquidos inflamables ni productos perecederos.',
          'Etiqueta cada caja con su contenido y haz una lista general que conservarás tú.',
          'Guarda los objetos de valor y los documentos importantes contigo, no en el almacén.',
        ],
      },
      {
        titulo: 'Qué preguntar antes de contratar',
        parrafos: [
          'Comparar solo el precio al mes puede llevarte a equivocarte. Es importante saber qué incluye: si el transporte de ida y vuelta se suma aparte, cómo se calcula el espacio y qué ocurre si necesitas ampliar o acortar el plazo. Te aclaramos estas condiciones por escrito al preparar tu propuesta.',
        ],
        subsecciones: [
          {
            titulo: 'Transporte de ida y vuelta',
            texto:
              'Pregunta si la recogida y la entrega van incluidas y con cuánta antelación hay que avisar para sacar tus cosas. Te lo dejamos claro en el precio cerrado por escrito.',
          },
          {
            titulo: 'Acceso a tus cosas',
            texto:
              'Aclara si podrás recoger algo durante el periodo de almacenaje, con cuánto aviso y si tiene algún coste. Es uno de los puntos que más dudas genera luego.',
          },
          {
            titulo: 'Duración',
            texto:
              'Si no sabes cuánto tiempo lo vas a necesitar, cuéntanoslo igualmente. Con una previsión aproximada ya se puede preparar una propuesta y revisarla si tus planes cambian.',
          },
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta un guardamuebles en Madrid?',
        respuesta:
          'Depende del espacio que ocupen tus cosas, del tiempo y del transporte de ida y vuelta. Puedes ver qué influye en el precio en la página de precios y pedirnos una propuesta con tu caso concreto.',
      },
      {
        pregunta: '¿Por cuánto tiempo puedo guardar mis muebles?',
        respuesta:
          'El tiempo que necesites, desde periodos cortos entre dos viviendas hasta temporadas largas. Dinos una previsión al pedir presupuesto y lo tendremos en cuenta en las condiciones.',
      },
      {
        pregunta: '¿Podéis recoger los muebles y llevarlos después a mi casa nueva?',
        respuesta:
          'Sí, es lo más habitual. Indica la dirección de recogida y, si ya la conoces, la de entrega. Si todavía no la tienes, la concretamos cuando llegue el momento.',
      },
      {
        pregunta: '¿Hay cosas que no se pueden guardar?',
        respuesta:
          'Sí: por seguridad y conservación no deben guardarse alimentos, plantas, productos inflamables o peligrosos, ni dinero o documentos de valor. Si tienes dudas sobre algún objeto, pregúntanos antes.',
      },
    ],
    relacionadas: ['mudanzas-pisos-madrid', 'embalaje-mudanzas-madrid', 'mudanzas-oficinas-madrid', 'precios'],
    servicio: {
      nombre: 'Guardamuebles',
      descripcion: 'Almacenaje temporal de muebles y enseres en Madrid, combinado con su recogida y entrega.',
      area: 'Comunidad de Madrid',
      tipoArea: 'AdministrativeArea',
    },
    servicioFormulario: 'Guardamuebles',
  },

  /* ---------------------------- EMBALAJE ---------------------------- */
  {
    path: 'embalaje-mudanzas-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Embalaje para mudanzas en Madrid | Mudanzas360',
    description:
      'Embalaje para mudanzas en Madrid: cajas, protección de muebles y objetos frágiles como vajillas, cuadros o televisores. Pide presupuesto gratis.',
    etiqueta: 'Embalaje para mudanzas',
    resumen: 'Cajas y protección de muebles y objetos frágiles, solo lo que no quieras hacer tú.',
    h1: { antes: 'Embalaje y protección', resaltado: 'para tu mudanza', despues: '' },
    kicker: 'EMBALAJE PROFESIONAL',
    intro:
      'La mayoría de los daños de una mudanza se evitan antes de cargar el camión. Protegemos lo que necesites, desde una vajilla delicada hasta todo el contenido de tu casa.',
    foto: 'embalaje-material',
    fotoAlt: 'Cajas y material de embalaje preparados para una mudanza',
    fotoContenido: 'caja-mesa',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza',
    fichas: [
      { etiqueta: 'Qué protegemos', valor: 'Muebles, cajas y objetos frágiles' },
      { etiqueta: 'Alcance', valor: 'Toda la casa o solo lo delicado' },
      { etiqueta: 'Junto con', valor: 'Tu mudanza o porte' },
      { etiqueta: 'Presupuesto', valor: 'Gratis y sin compromiso' },
    ],
    secciones: [
      {
        titulo: 'Por qué el embalaje importa tanto',
        parrafos: [
          'Durante una mudanza, cada objeto se levanta, se apila, baja por escaleras y viaja con las vibraciones de la carretera. Una caja demasiado pesada se rompe, una mal llena se aplasta y un mueble sin proteger se roza con el primer marco de puerta. Por eso vale la pena dedicar tiempo a esta parte.',
          'No tienes por qué dejarlo todo en nuestras manos. Muchos clientes guardan la ropa y los libros por su cuenta y nos dejan las piezas más delicadas. Cuéntanos qué prefieres hacer y lo tendremos en cuenta en la propuesta.',
        ],
      },
      {
        titulo: 'Cómo se protege cada cosa',
        parrafos: ['Cada tipo de objeto requiere una técnica. Estos son los que más cuidado necesitan:'],
        subsecciones: [
          {
            titulo: 'Vajillas y cristal',
            texto:
              'Cada pieza se envuelve por separado. Los platos viajan de canto, no apilados, en cajas pequeñas y con los huecos rellenos para evitar el movimiento. Marcamos la caja como frágil e indicamos la posición en que debe ir.',
          },
          {
            titulo: 'Cuadros y espejos',
            texto:
              'Se protegen las esquinas y las superficies con cartón, y se transportan en vertical. Nunca conviene colocar peso encima ni dejarlos sueltos entre otros muebles.',
          },
          {
            titulo: 'Televisores y electrónica',
            texto:
              'Lo mejor es usar el embalaje original si lo conservas. Si no, se protege la pantalla con material acolchado y siempre se traslada en vertical. Antes, haz una foto de las conexiones para reinstalarla fácilmente.',
          },
          {
            titulo: 'Muebles y tapicerías',
            texto:
              'Las mantas y fundas protegen de roces y de la suciedad. Los colchones y sofás se cubren para evitar manchas, y los muebles con cristales o partes salientes reciben protección adicional.',
          },
        ],
      },
      {
        titulo: 'Si prefieres embalar tú: reglas sencillas',
        parrafos: [
          'Una mudanza bien hecha empieza con cajas de buena calidad y unas pocas costumbres. Empieza con lo que menos usas: los libros de la estantería, la ropa de otra temporada o los adornos, y deja la cocina y el baño para los últimos días.',
        ],
        lista: [
          'Lo pesado, en cajas pequeñas; lo ligero, en las grandes.',
          'Llena los huecos para que nada se mueva y comprueba que la caja cierre recta.',
          'Refuerza el fondo con cinta adhesiva y no superes el peso que se pueda levantar con comodidad.',
          'Escribe en cada caja la habitación y el contenido, en un lateral y no solo arriba.',
          'Mantén juntos los tornillos de cada mueble en una bolsa pegada a él o bien identificada.',
        ],
      },
      {
        titulo: 'Protección también en el edificio',
        parrafos: [
          'El cuidado no es solo para tus cosas. Las paredes de la escalera, el ascensor y los suelos del portal también pueden sufrir, y algunas comunidades de vecinos piden que se protejan expresamente durante una mudanza. Si es tu caso o si tienes un suelo o un mueble especialmente delicado en casa, indícalo en los detalles de la solicitud.',
          'Y si tienes piezas muy valiosas o de gran tamaño, como obras de arte, pianos o antigüedades, avísanos desde el principio. Algunos objetos necesitan una protección a medida, y conviene valorarlos por separado para encontrar la solución adecuada en lugar de improvisar el día de la mudanza.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Puedo contratar el embalaje solo para algunas cosas?',
        respuesta:
          'Sí. Es muy habitual encargar solo lo frágil o lo que te cuesta más embalar. Indica en los detalles de la solicitud qué quieres que protejamos y tú te ocupas del resto.',
      },
      {
        pregunta: '¿Lleváis vosotros las cajas y el material?',
        respuesta:
          'Podemos incluir el material que necesites en la propuesta. Dinos cuántas habitaciones hay y qué parte quieres embalar para calcular lo necesario.',
      },
      {
        pregunta: '¿Cuántas cajas necesito para mudarme?',
        respuesta:
          'Depende mucho de cuánto guardes, no solo de los metros. Una buena referencia es contar por armarios y estanterías; si nos das esos datos, te ayudamos a calcularlo.',
      },
      {
        pregunta: '¿Hay que vaciar los cajones de los muebles?',
        respuesta:
          'Sí. Es lo más recomendable: un cajón lleno añade peso, puede dañar el mueble al moverlo y se puede abrir durante el trayecto. Su contenido viaja mejor en cajas.',
      },
    ],
    relacionadas: ['mudanzas-pisos-madrid', 'montaje-desmontaje-muebles-mudanza', 'guardamuebles-madrid', 'portes-madrid'],
    servicio: {
      nombre: 'Embalaje para mudanzas',
      descripcion: 'Embalaje y protección de muebles, cajas y objetos frágiles para mudanzas y traslados en Madrid.',
      area: 'Comunidad de Madrid',
      tipoArea: 'AdministrativeArea',
    },
    servicioFormulario: 'Mudanza completa',
  },

  /* ---------------------------- MONTAJE ---------------------------- */
  {
    path: 'montaje-desmontaje-muebles-mudanza',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Montaje y desmontaje de muebles en mudanzas | Mudanzas360',
    description:
      'Desmontamos los muebles antes de la mudanza y los volvemos a montar en tu nueva casa: armarios, camas y mobiliario modular. Presupuesto gratis.',
    etiqueta: 'Montaje y desmontaje de muebles',
    resumen: 'Armarios, camas y mobiliario que deben desmontarse para el traslado y volver a montarse.',
    h1: { antes: 'Montaje y desmontaje', resaltado: 'de muebles en tu mudanza', despues: '' },
    kicker: 'MONTAJE DE MUEBLES',
    intro:
      'Un armario que entró por piezas no sale por la puerta de una pieza. Desmontamos lo necesario, lo trasladamos ordenado y lo dejamos de nuevo montado en tu casa.',
    foto: 'muebles',
    fotoAlt: 'Montador con taladro y herramientas montando un armario blanco en una vivienda',
    fotoContenido: 'salon-cajas',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza',
    fichas: [
      { etiqueta: 'Muebles típicos', valor: 'Armarios, camas y estanterías' },
      { etiqueta: 'Cuándo', valor: 'Antes y después del traslado' },
      { etiqueta: 'Qué necesitamos', valor: 'Lista de piezas y fotos' },
      { etiqueta: 'Presupuesto', valor: 'Gratis y sin compromiso' },
    ],
    secciones: [
      {
        titulo: 'Qué muebles suele ser necesario desmontar',
        parrafos: [
          'No todo hay que desmontarlo, y hacerlo sin motivo también tiene riesgos. Lo decidimos en función del tamaño del mueble, de las puertas, escaleras y ascensores de cada vivienda y de su estado. La regla práctica es simple: si no pasa entero con holgura, hay que desmontarlo.',
        ],
        lista: [
          'Armarios grandes, de puertas abatibles o correderas.',
          'Camas de matrimonio, canapés y literas.',
          'Estanterías altas y muebles de salón modulares.',
          'Mesas de comedor y escritorios de gran tamaño.',
          'Sofás cuyos respaldos o patas se pueden separar.',
        ],
      },
      {
        titulo: 'Del desmontaje al último tornillo',
        parrafos: [
          'Lo más delicado de este trabajo no es quitar los tornillos, sino que todo vuelva a encajar. Por eso, antes de separar piezas conviene identificar cada parte y conservar los herrajes de cada mueble juntos. Así el montaje en destino resulta mucho más sencillo.',
          'Si conservas las instrucciones de un mueble, déjalas a mano, aunque no sean imprescindibles. Y si algún mueble ya tenía holguras o reparaciones, avísanos: los muebles de tablero aglomerado pierden resistencia cada vez que se desmontan, y algunos no quedan igual o incluso conviene sustituirlos.',
        ],
        subsecciones: [
          {
            titulo: 'Armarios empotrados y a medida',
            texto:
              'Las piezas hechas a medida para un hueco concreto pueden no encajar en otra vivienda. Mide el espacio de destino antes de decidir si merece la pena trasladarlas.',
          },
          {
            titulo: 'Muebles de cocina',
            texto:
              'Una cocina requiere trabajos de fontanería, electricidad o gas que pueden necesitar instaladores autorizados. Si quieres trasladar la tuya, explícanos qué tienes para valorarlo correctamente.',
          },
          {
            titulo: 'Muebles anclados a la pared',
            texto:
              'En la vivienda nueva, algunos muebles altos deben volver a fijarse a la pared. Consulta qué tipo de tabique hay y si puedes taladrar, sobre todo si vas de alquiler.',
          },
        ],
      },
      {
        titulo: 'Cuéntanoslo bien al pedir presupuesto',
        parrafos: [
          'Selecciona «Montaje de muebles» si es lo único que necesitas, o indícalo en los detalles si forma parte de una mudanza. Lo más útil es que nos digas cuántos muebles hay, de qué tipo son y en qué vivienda hay que hacer cada trabajo. Un armario de seis puertas no se monta en el mismo tiempo que una cama de 90 cm.',
          'Con esa información podemos calcular el tiempo necesario y decidir si conviene hacer el trabajo el mismo día que el traslado. Si en la vivienda nueva todavía están pintando o colocando el suelo, tal vez convenga dejar el montaje para más adelante.',
        ],
      },
      {
        titulo: 'Si acabas de comprar muebles nuevos',
        parrafos: [
          'Un cambio de casa suele ser el momento de renovar parte del mobiliario. Si has comprado muebles nuevos para la vivienda de destino, cuéntanoslo para organizar el orden de los trabajos: normalmente interesa que lleguen antes, o a la vez, y que el resto de los muebles no estorben.',
          'Comprueba las medidas de los paquetes, además de las del mueble montado: algunos paquetes planos son muy largos y no caben en todos los ascensores. También conviene decidir de antemano dónde irá cada pieza, porque es mucho más fácil colocar un armario grande antes de que la habitación se llene de cajas.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Hacéis el montaje sin contratar la mudanza?',
        respuesta:
          'Sí, puedes pedirnos el servicio de montaje de muebles por separado. Selecciona esa opción en el formulario y detalla qué muebles hay y dónde están.',
      },
      {
        pregunta: '¿Se pierden las piezas durante el traslado?',
        respuesta:
          'Se evita manteniendo juntos los herrajes de cada mueble, bien identificados, y etiquetando las piezas. Si te falta alguna pieza original de un mueble antiguo, avísanos antes de empezar.',
      },
      {
        pregunta: '¿Se puede desmontar cualquier mueble?',
        respuesta:
          'No siempre. Algunos muebles antiguos, encolados o muy deteriorados no admiten bien el desmontaje. Si nos mandas fotos cuando contactemos contigo, podremos valorarlo con más seguridad.',
      },
      {
        pregunta: '¿Colgáis lámparas, cuadros o instaláis electrodomésticos?',
        respuesta:
          'Coméntanos qué necesitas en los detalles de tu solicitud y te diremos si lo podemos incluir. Las instalaciones de gas o eléctricas deben realizarlas profesionales autorizados.',
      },
    ],
    relacionadas: ['mudanzas-pisos-madrid', 'embalaje-mudanzas-madrid', 'portes-madrid', 'como-trabajamos'],
    servicio: {
      nombre: 'Montaje y desmontaje de muebles',
      descripcion: 'Desmontaje, traslado y montaje de armarios, camas y mobiliario durante una mudanza.',
      area: 'Comunidad de Madrid',
      tipoArea: 'AdministrativeArea',
    },
    servicioFormulario: 'Mudanza completa',
  },

  /* ---------------------------- NACIONALES ---------------------------- */
  {
    path: 'mudanzas-nacionales',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Mudanzas nacionales desde Madrid | Mudanzas360',
    description:
      'Mudanzas nacionales desde Madrid a cualquier punto de España: rutas, tiempos y factores que influyen en el precio. Pide tu presupuesto gratis.',
    etiqueta: 'Mudanzas nacionales',
    resumen: 'Traslados desde Madrid a cualquier punto de España, con un recorrido bien planificado.',
    h1: { antes: 'Mudanzas nacionales', resaltado: 'desde Madrid a toda España', despues: '' },
    kicker: 'MUDANZAS NACIONALES',
    intro:
      'Cambiar de ciudad ya es bastante cambio. Planificamos el recorrido, las fechas de carga y entrega y lo que necesites en cada extremo para que solo tengas que preocuparte de empezar.',
    foto: 'camion-autovia',
    fotoAlt: 'Camión blanco circulando por una carretera entre campos',
    fotoContenido: 'nacionales',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza',
    fichas: [
      { etiqueta: 'Origen principal', valor: 'Madrid' },
      { etiqueta: 'Destino', valor: 'Cualquier punto de España' },
      { etiqueta: 'Clave', valor: 'Volumen, distancia y fechas' },
      { etiqueta: 'Presupuesto', valor: 'Gratis y sin compromiso' },
    ],
    secciones: [
      {
        titulo: 'Qué cambia en una mudanza de larga distancia',
        parrafos: [
          'En un traslado dentro de Madrid, un olvido se soluciona con un segundo viaje. En una mudanza a otra ciudad, todo tiene que salir bien a la primera: lo que no se carga se queda atrás, y las cosas pasan horas en carretera. Por eso el inventario y el embalaje cobran aún más importancia.',
          'También hay que coordinar dos momentos distintos. La carga y la entrega no siempre pueden ser el mismo día, sobre todo en los recorridos más largos, por lo que necesitarás saber cuándo tienes que estar en cada vivienda y con qué margen se organiza la entrega.',
        ],
      },
      {
        titulo: 'Camión exclusivo o carga compartida',
        parrafos: [
          'Hay dos formas habituales de organizar el transporte de larga distancia, y la adecuada depende de tus fechas y tu presupuesto. Cuéntanos qué necesitas y te diremos qué podemos ofrecerte para tu recorrido.',
        ],
        subsecciones: [
          {
            titulo: 'Transporte dedicado',
            texto:
              'El vehículo se destina solo a tu mudanza. Tiene la ventaja de que las fechas de carga y entrega son más claras. Es la opción lógica cuando tienes prisa o una fecha concreta que no se puede mover.',
          },
          {
            titulo: 'Carga compartida',
            texto:
              'Tu mudanza viaja con otras en el mismo recorrido. Puede reducir el coste, sobre todo con poco volumen, a cambio de flexibilidad con las fechas. Tiene sentido cuando no te urge recibirlo todo un día concreto.',
          },
        ],
      },
      {
        titulo: 'Las rutas que más nos consultan',
        parrafos: [
          'Madrid está en el centro de la red de autovías, algo que facilita llegar a todas partes. Hemos preparado una guía con distancias, tiempos orientativos y consideraciones para las rutas más frecuentes. Si tu destino no está en la lista, también podemos estudiarlo: indícalo en el formulario.',
        ],
      },
      {
        titulo: 'Cómo preparar un traslado a otra ciudad',
        parrafos: [
          'Aprovecha la mudanza para reducir lo que te llevas. Un mueble viejo puede costar más de trasladar que de sustituir, especialmente en trayectos largos. Revisa también si los muebles grandes caben en la nueva casa, antes de pagar por llevarlos a varios cientos de kilómetros.',
          'En la ciudad de destino, comprueba cómo funciona la carga y descarga en tu calle y si tu ayuntamiento exige una autorización. Avisa a la comunidad de vecinos, prepara el cambio de suministros y de empadronamiento y lleva contigo la documentación, la medicación y los objetos de valor.',
        ],
        lista: [
          'Empieza a organizarlo con varias semanas de margen.',
          'Haz el inventario por habitaciones y destaca lo frágil o muy pesado.',
          'Confirma las fechas de salida y de llegada con todas las partes implicadas.',
          'Mide las piezas grandes y los accesos de la vivienda de destino.',
        ],
      },
    ],
    grupos: [{ titulo: 'Rutas desde Madrid', rutas: RUTAS_NACIONALES }],
    faqs: [
      {
        pregunta: '¿Hacéis mudanzas a cualquier provincia de España?',
        respuesta:
          'Trabajamos desde Madrid y podemos desplazarnos a cualquier punto de España. La disponibilidad y las condiciones dependen del servicio y del recorrido, así que indícanos tu destino y lo estudiamos.',
      },
      {
        pregunta: '¿Cuánto tarda una mudanza nacional?',
        respuesta:
          'Depende de la distancia, del tipo de transporte y del volumen. En las páginas de cada ruta encontrarás tiempos orientativos. Las fechas de carga y entrega se concretan en tu propuesta.',
      },
      {
        pregunta: '¿Y si el destino no es Madrid sino que salgo de otra ciudad?',
        respuesta:
          'Cuéntanoslo igualmente en el formulario. Madrid es nuestro punto de salida principal, pero podemos valorar otros recorridos según la disponibilidad.',
      },
      {
        pregunta: '¿Hacéis mudanzas a Baleares, Canarias o al extranjero?',
        respuesta:
          'Los traslados a las islas y al extranjero tienen una logística distinta, con transporte marítimo o trámites adicionales. Indica tu destino en la solicitud y te diremos si podemos ayudarte en ese caso.',
      },
    ],
    relacionadas: ['mudanzas-madrid-barcelona', 'mudanzas-madrid-valencia', 'guardamuebles-madrid', 'precios'],
    servicio: {
      nombre: 'Mudanzas nacionales',
      descripcion: 'Mudanzas de viviendas y oficinas desde Madrid a cualquier punto de España.',
      area: 'España',
      tipoArea: 'Country',
    },
    servicioFormulario: 'Mudanza nacional',
  },
];
