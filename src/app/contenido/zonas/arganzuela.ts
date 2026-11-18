import type { ContenidoZona } from '../tipos';

/**
 * Arganzuela (distrito 2). Barrios: Imperial, Acacias, Chopera, Legazpi, Delicias, Palos de
 * Moguer y Atocha, todos dentro del SER según el Ayuntamiento de Madrid (consultado el 10/11/2026).
 */
const arganzuela: ContenidoZona = {
  revisado: '2026-11-18',
  fuentes: [
    {
      texto: 'Ayuntamiento de Madrid: distritos y barrios del Servicio de Estacionamiento Regulado',
      url: 'https://www.madrid.es/portales/munimadrid/es/SER/Distritos-y-barrios/?vgnextfmt=default&vgnextoid=5a86befb3fd31810VgnVCM2000001f4a900aRCRD&vgnextchannel=4947b5793cba4410VgnVCM2000000c205a0aRCRD',
    },
    {
      texto: 'Sede electrónica del Ayuntamiento de Madrid: ocupación temporal de la vía pública para mudanzas puntuales',
      url: 'https://sede.madrid.es/portal/site/tramites/menuitem.62876cb64654a55e2dbd7003a8a409a0/?vgnextoid=aeb4b43be2ef6510VgnVCM1000001d4a900aRCRD&vgnextchannel=bf3aa38813180210VgnVCM100000c90da8c0RCRD&vgnextfmt=default',
    },
  ],
  paginas: {
    /* ============================ MUDANZAS DE PISOS ============================ */
    'mudanzas-pisos': {
      gancho: 'Junto a Madrid Río, de las corralas a los bloques nuevos.',
      intro: [
        'Arganzuela es un distrito que ha cambiado mucho en pocas décadas. Donde había industria, vías de tren y almacenes, hoy hay viviendas, el parque de Madrid Río y el centro cultural de Matadero. Conviven edificios de principios del siglo XX en Imperial, Acacias y Embajadores, bloques de mediados de siglo en Delicias y Legazpi, y promociones recientes con garaje en torno a Méndez Álvaro y Atocha.',
        'Esa mezcla hace que no haya dos mudanzas iguales en el distrito. Te explicamos qué cambia de un barrio a otro, cómo trabajamos y qué conviene preparar.',
      ],
      zona: [
        {
          titulo: 'Siete barrios, tres épocas',
          parrafos: [
            'Imperial y Acacias, junto a la ronda de Toledo y la glorieta de Embajadores, conservan casas de vecinos y fincas antiguas, algunas sin ascensor y con escaleras estrechas. Delicias, Palos de Moguer y Chopera reúnen bloques de los años cuarenta a setenta, la mayoría con ascensor, aunque no siempre amplio. Legazpi y Atocha, con el desarrollo de antiguos suelos industriales y ferroviarios, suman edificios nuevos con garaje, portales accesibles y ascensores grandes.',
            'Saber en cuál de esos tres tipos de edificio está tu piso es lo primero que nos dice cómo será la mudanza.',
          ],
        },
        {
          titulo: 'Corralas y casas antiguas',
          parrafos: [
            'En la parte más cercana al centro todavía quedan corralas y casas de corredor, con un único portal, patio interior y escaleras que dan a galerías. Los pisos son pequeños y los muebles grandes no siempre pasan por la escalera. En estos edificios desmontamos casi todo, protegemos las barandillas de los corredores y organizamos la salida para no bloquear un portal que comparten muchos vecinos.',
          ],
        },
        {
          titulo: 'Bloques de mediados de siglo',
          parrafos: [
            'En Delicias y Palos de Moguer predominan los bloques de seis a diez plantas con ascensor. Las cabinas de los más antiguos son estrechas y obligan a bajar sofás y armarios por la escalera; los renovados admiten más. Los portales suelen estar a pie de calle y las calles, como Ferrocarril, Batalla del Salado o Tomás Bretón, tienen aparcamiento a ambos lados.',
          ],
        },
        {
          titulo: 'Promociones nuevas y garajes',
          parrafos: [
            'En torno a Méndez Álvaro, la estación de Atocha y la parte de Legazpi más cercana a Madrid Río, los edificios recientes tienen garaje y ascensores amplios. A veces el camión puede entrar en el garaje y cargar sin pisar la calle; otras, la altura del acceso no lo permite. Merece la pena preguntarlo a la comunidad antes del día.',
          ],
        },
        {
          titulo: 'Calles, avenidas y aparcamiento',
          parrafos: [
            'El paseo de las Delicias, el de Santa María de la Cabeza, el paseo Imperial o la calle de Méndez Álvaro son vías amplias donde parar es relativamente sencillo, aunque con mucho tráfico en hora punta. Las calles interiores son más estrechas. Todo el distrito está dentro del Servicio de Estacionamiento Regulado, y para un camión de más de 3.500 kilos o con elevador hay que pedir autorización al Ayuntamiento para ocupar la vía pública, con antelación.',
          ],
        },
        {
          titulo: 'Dificultades más habituales',
          parrafos: [
            'En las casas antiguas, la escalera. En los bloques de mediados de siglo, el ascensor estrecho y la carga y descarga ocupada en calles con mucho comercio de barrio. En las promociones nuevas, la altura del garaje y las normas de la comunidad sobre el uso de ascensores y zonas comunes. Con esos datos claros, el día de la mudanza se cumple el horario.',
          ],
        },
        {
          titulo: 'Consejos para vecinos de Arganzuela',
          parrafos: [
            'Si vives cerca de Madrid Río o de Matadero, ten en cuenta los días de actividades y eventos, que llenan los alrededores. En las promociones nuevas, pregunta si el camión cabe en el garaje y si hay que reservar el ascensor. En las casas antiguas, mide el primer tramo de escalera. Y si te mudas en fin de semana, evita las horas en que el parque tiene más afluencia.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Tipo de edificio', texto: 'Nos dices si es casa antigua, bloque con ascensor o promoción con garaje, y la planta. Si hace falta, lo vemos en persona sin compromiso.' },
        { titulo: 'Vehículo y acceso', texto: 'Elegimos camión o furgoneta según la calle y comprobamos si se puede cargar desde el garaje.' },
        { titulo: 'Autorización si es necesaria', texto: 'Si el garaje no sirve y el camión es pesado, preparamos contigo la solicitud de reserva de calzada con margen suficiente.' },
        { titulo: 'Protección y carga', texto: 'Cubrimos corredores, cabinas y rampas de garaje, separamos en piezas lo que no gira y cargamos estancia por estancia.' },
        { titulo: 'Entrega y montaje', texto: 'Descargamos, montamos lo desmontado y colocamos cada cosa en su sitio.' },
      ],
      incluye: [
        'En los edificios con garaje coordinamos con la comunidad el acceso del vehículo y protegemos el ascensor del garaje, que suele ser el que se usa para bajar la carga. En las corralas, incluimos la protección de las barandillas de los corredores.',
      ],
      precio: [
        'Un piso de dos habitaciones en una promoción nueva con garaje accesible suele estar en la parte baja del rango. El mismo tamaño en una casa antigua de Imperial sin ascensor, o en un bloque de Delicias con ascensor estrecho, sube por el tiempo de escalera.',
      ],
      faqs: [
        { pregunta: '¿Hacéis mudanzas en todos los barrios de Arganzuela?', respuesta: 'Sí: Imperial, Acacias, Chopera, Legazpi, Delicias, Palos de Moguer y Atocha. Y desde allí a cualquier otro distrito, municipio o provincia.' },
        { pregunta: '¿Puede cargar el camión desde el garaje de mi edificio?', respuesta: 'Si la altura del acceso lo permite y la comunidad lo autoriza, sí. Es una gran ventaja en las promociones nuevas, porque evita ocupar la calle.' },
        { pregunta: '¿Necesito autorización para aparcar en Arganzuela?', respuesta: 'Solo si el vehículo pesa más de 3.500 kilos o monta plataforma elevadora y además tiene que quedarse en la calle. Cargando desde el garaje de una promoción nueva, o con furgoneta, casi nunca hace falta.' },
        { pregunta: '¿Podéis mudar un piso de una corrala?', respuesta: 'Sí. Desmontamos lo voluminoso, protegemos corredores y barandillas y organizamos la salida para no bloquear el portal compartido.' },
        { pregunta: '¿Afectan los eventos de Matadero o Madrid Río?', respuesta: 'En días de mucha afluencia, los alrededores se llenan. Si tu mudanza coincide, ajustamos la hora para evitar las horas de más gente.' },
        { pregunta: '¿Cuánto tarda una mudanza de un piso de tres habitaciones?', respuesta: 'Con ascensor amplio, una jornada. En casas antiguas o con ascensor estrecho puede alargarse; te damos una estimación con el presupuesto.' },
        { pregunta: '¿Embaláis vosotros?', respuesta: 'Si lo contratas, sí, todo o solo lo frágil. También podemos dejarte las cajas para que embales tú.' },
        { pregunta: '¿Tengo que estar presente?', respuesta: 'Basta con que nos recibas y estés cuando lleguemos al piso nuevo; si a mitad de mañana tienes que irte, nos quedamos con las llaves y te avisamos por WhatsApp de cada paso.' },
      ],
    },

    /* ============================ PORTES ============================ */
    portes: {
      gancho: 'Muebles, electrodomésticos y cajas entre Delicias y Legazpi.',
      intro: [
        'En Arganzuela los portes son de lo más variado: el sofá que llega de una tienda de muebles del paseo de las Delicias, la nevera nueva de un piso de Legazpi, las cajas que una pareja lleva de un estudio de Acacias a un piso más grande en Méndez Álvaro. Para todos ellos basta una furgoneta con conductor y un operario, y lo importante es conocer el edificio de destino.',
        'Te contamos cómo los hacemos en el distrito para que sean rápidos y sin sorpresas en el precio.',
      ],
      zona: [
        {
          titulo: 'Tres tipos de edificio, tres portes distintos',
          parrafos: [
            'Un porte a una promoción nueva con ascensor amplio y portal a pie de calle se resuelve en muy poco tiempo. Si el destino es un bloque de mediados de siglo con ascensor estrecho, los muebles medianos suben por la escalera. Y si es una casa antigua de Imperial o Acacias, casi todo sube a pulso. Por eso te preguntamos siempre la planta y el ascensor antes de dar precio.',
          ],
        },
        {
          titulo: 'Compras en el distrito y alrededores',
          parrafos: [
            'Muchos portes empiezan en tiendas del propio distrito o en las grandes superficies cercanas. Confirmamos con la tienda si el mueble sale montado o en caja y en qué punto se recoge. Si es un electrodoméstico que sustituye a otro, dinos si hay que retirar el viejo y si la tienda ya se encarga de ello.',
          ],
        },
        {
          titulo: 'Dónde para la furgoneta',
          parrafos: [
            'En las avenidas grandes, como Delicias o Santa María de la Cabeza, hay más espacio pero también más tráfico. En las calles interiores, la carga y descarga se ocupa por la mañana. El distrito entero tiene estacionamiento regulado, así que para un porte usamos las zonas de carga y descarga o paramos el tiempo justo.',
          ],
        },
        {
          titulo: 'Trasteros y garajes',
          parrafos: [
            'En las promociones nuevas es frecuente llevar cosas al trastero del sótano. Ese porte suele ser rápido si nos dices cómo se baja, si hay montacargas o ascensor hasta el garaje y quién tiene la llave del trastero.',
          ],
        },
        {
          titulo: 'Bicicletas y objetos voluminosos',
          parrafos: [
            'Cerca de Madrid Río hay mucha gente que se mueve en bicicleta y que, al cambiar de casa, necesita trasladar varias. También movemos tablas, material deportivo y muebles de terraza. Todo viaja sujeto y protegido para que no se raye ni dañe otras piezas.',
          ],
        },
        {
          titulo: 'Lo que necesitamos saber',
          parrafos: [
            'Una foto o una lista de lo que se mueve, las direcciones, la planta y si hay ascensor en cada punto, y la hora que te viene bien. Si la recogida es en tienda, el nombre de la persona que entrega. Con eso te damos un precio cerrado.',
          ],
        },
        {
          titulo: 'Recogidas en Matadero y ferias del barrio',
          parrafos: [
            'En el entorno de Matadero y del parque se celebran mercados de diseño, ferias y eventos donde se compran piezas de mobiliario y decoración. Recogerlas el mismo día suele ser complicado por la afluencia de público y los cortes de tráfico. Lo práctico es acordar con el vendedor una recogida al terminar el evento o al día siguiente, en un punto donde la furgoneta pueda parar sin problemas.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Qué se mueve', texto: 'Foto o lista, con medidas aproximadas de lo más grande.' },
        { titulo: 'Edificios', texto: 'Planta y ascensor en origen y destino, y si hay trastero o garaje.' },
        { titulo: 'Furgoneta y equipo', texto: 'Uno o dos operarios según el peso y la escalera.' },
        { titulo: 'Carga protegida', texto: 'Mantas, sujeción y cuidado del portal y el ascensor.' },
        { titulo: 'Entrega dentro de casa', texto: 'Hasta la habitación, el trastero o donde nos indiques.' },
      ],
      incluye: [
        'Si el porte termina en el trastero de un garaje, el recorrido por rampas o pasillos del sótano va incluido. Solo necesitamos saberlo para llevar una carretilla adecuada.',
      ],
      precio: [
        'Un porte de pocos muebles dentro del distrito, con ascensor, suele cubrirse con la tarifa de partida. Si hay varias plantas sin ascensor, paradas en varias tiendas o esperas, se calcula por horas.',
      ],
      faqs: [
        { pregunta: '¿Hacéis portes de un solo mueble en Arganzuela?', respuesta: 'Sí. Un sofá, una cama o un electrodoméstico también son un porte. Te damos precio con una foto y la dirección.' },
        { pregunta: '¿Lleváis cosas al trastero del garaje?', respuesta: 'Sí. Es un encargo habitual en las promociones nuevas del distrito. Dinos cómo se baja y si hay que pedir una llave.' },
        { pregunta: '¿Subís sin ascensor?', respuesta: 'Sí, por la escalera y protegiendo paredes y barandillas. Lo contamos desde el principio para que el precio no cambie.' },
        { pregunta: '¿Retiráis el electrodoméstico viejo?', respuesta: 'Si nos lo dices antes, sí. Confirma también si la tienda ofrece la retirada, porque a veces está incluida en la compra.' },
        { pregunta: '¿Trasladáis bicicletas?', respuesta: 'Sí, sujetas y protegidas. Si son varias, dínoslo para dejar espacio en la furgoneta.' },
        { pregunta: '¿Cuánto tarda un porte?', respuesta: 'Muchos se hacen en menos de dos horas. Depende de las escaleras y del tráfico en las avenidas del distrito.' },
        { pregunta: '¿Hacéis portes en fin de semana?', respuesta: 'Podemos valorarlo según disponibilidad. Cerca de Madrid Río conviene evitar las horas de más afluencia.' },
      ],
    },

    /* ============================ OFICINAS ============================ */
    'mudanzas-oficinas': {
      gancho: 'Oficinas en Méndez Álvaro, estudios y locales reconvertidos.',
      intro: [
        'Arganzuela tiene un tejido de oficinas muy particular. En torno a Méndez Álvaro y la estación de Atocha hay edificios terciarios modernos, sedes de empresas y oficinas de servicios; en Legazpi y Delicias, estudios creativos y pequeñas empresas instaladas en antiguos locales y naves rehabilitadas; y en todo el distrito, despachos en pisos de viviendas. Cada uno necesita un plan de traslado distinto.',
        'Te explicamos cómo lo organizamos.',
      ],
      zona: [
        {
          titulo: 'Edificios terciarios modernos',
          parrafos: [
            'Los edificios de oficinas de la zona de Méndez Álvaro suelen tener muelle o acceso por garaje, montacargas y normas de la propiedad sobre horarios, seguros y protección de zonas comunes. Pedimos esas normas con tiempo, porque pueden obligar a hacer el traslado fuera del horario laboral o con personal de seguridad presente.',
          ],
        },
        {
          titulo: 'Estudios y espacios rehabilitados',
          parrafos: [
            'En Legazpi, Delicias y alrededores de Matadero hay estudios de arquitectura, diseño, producción audiovisual y fotografía en espacios a pie de calle o en plantas diáfanas de edificios reconvertidos. Suelen tener equipos delicados, mesas grandes, focos, maquetas y archivo de proyectos. Lo embalamos por separado, marcando lo frágil, y montamos las mesas y estanterías en destino.',
          ],
        },
        {
          titulo: 'Despachos en pisos',
          parrafos: [
            'Gestorías, consultas y pequeños despachos ocupan pisos de bloques residenciales. Comparten portal y ascensor con los vecinos, así que el traslado se hace con las zonas comunes protegidas y en franjas que no molesten. En los bloques de ascensor estrecho, el mobiliario baja por la escalera.',
          ],
        },
        {
          titulo: 'Tráfico y accesos',
          parrafos: [
            'Méndez Álvaro y los paseos de Delicias y Santa María de la Cabeza tienen mucho tráfico laborable. En los alrededores de la estación de Atocha, además, hay muchos taxis, autobuses y peatones. Para un traslado mediano conviene cargar a última hora de la tarde o en sábado. Si el camión supera los 3.500 kilos y para en la calle, hay que pedir autorización para ocupar la vía pública.',
          ],
        },
        {
          titulo: 'Equipos técnicos',
          parrafos: [
            'Ordenadores, pantallas, impresoras de gran formato, servidores y equipos de grabación viajan embalados uno a uno, con su cableado identificado. La desconexión y la configuración las hace el equipo técnico de la empresa o su proveedor; nosotros nos ocupamos del transporte seguro.',
          ],
        },
        {
          titulo: 'Preparación del traslado',
          parrafos: [
            'Nombra a un responsable, reparte cajas y etiquetas por puesto, separa el archivo que se traslada del que se destruye y contrata con antelación las comunicaciones de la nueva sede. Si la mudanza es por fases, define qué equipo se mueve primero para que el resto siga trabajando.',
          ],
        },
        {
          titulo: 'Naves y locales con persiana',
          parrafos: [
            'Algunas empresas del distrito ocupan antiguos talleres o locales con persiana metálica y acceso a nivel de calle. Son fáciles de cargar, pero suelen tener material voluminoso: estanterías industriales, mesas de trabajo pesadas, maquinaria ligera o stock en cajas. Desmontamos las estanterías por módulos, paletizamos lo que conviene y, si hay piezas que exigen transpaleta, lo planificamos antes para llevar el equipo adecuado.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Visita y normas', texto: 'Vemos la oficina y pedimos las normas de los dos edificios.' },
        { titulo: 'Plan por fases', texto: 'Orden y horario del traslado para no parar la actividad.' },
        { titulo: 'Embalaje por puesto', texto: 'Cajas y equipos etiquetados con su destino.' },
        { titulo: 'Traslado fuera de horas', texto: 'Tarde, fin de semana o por fases, según convenga.' },
        { titulo: 'Montaje', texto: 'Mesas, estanterías y archivo listos en la nueva sede.' },
      ],
      incluye: [
        'Para estudios creativos preparamos cajas específicas para maquetas, focos y material de rodaje, que viajan aparte y se descargan primero.',
      ],
      precio: [
        'Una planta de oficinas con montacargas en un edificio terciario suele salir más económica por puesto que un despacho en un bloque con ascensor estrecho. Tras la visita te damos un precio cerrado.',
      ],
      faqs: [
        { pregunta: '¿Trasladáis oficinas en edificios de Méndez Álvaro?', respuesta: 'Sí. Pedimos las normas del edificio y adaptamos horario, protecciones y documentación a lo que exija la propiedad.' },
        { pregunta: '¿Movéis equipos de estudio y producción?', respuesta: 'Sí, embalados uno a uno. La desconexión y configuración técnica corresponde a vuestro equipo o proveedor.' },
        { pregunta: '¿Trabajáis en fin de semana?', respuesta: 'Lo proponemos a menudo: un sábado la zona de Méndez Álvaro se vacía de coches de empresa y los edificios terciarios suelen tener más flexibilidad para usar el muelle.' },
        { pregunta: '¿Hace falta permiso para el camión?', respuesta: 'Si supera los 3.500 kilos y debe parar en la calle, sí. En edificios con muelle o garaje accesible no siempre es necesario.' },
        { pregunta: '¿Desmontáis mesas grandes de estudio?', respuesta: 'Sí, y las montamos en destino niveladas. Si tienen tablero de vidrio, viaja protegido aparte.' },
        { pregunta: '¿Podéis guardar mobiliario sobrante?', respuesta: 'Sí, en un guardamuebles hasta que decidáis qué hacer con él.' },
        { pregunta: '¿Cuánto tarda un traslado de diez puestos?', respuesta: 'Con el embalaje hecho, normalmente una jornada. Lo confirmamos tras la visita.' },
      ],
    },

    /* ============================ GUARDAMUEBLES ============================ */
    guardamuebles: {
      gancho: 'Entre un estudio antiguo y un piso nuevo con garaje.',
      intro: [
        'En Arganzuela es frecuente cambiar de un piso pequeño en una casa antigua a una vivienda más grande en una promoción nueva, o al revés. Entre una y otra, las fechas rara vez encajan. También hay muchas reformas en pisos de los años cincuenta y sesenta que necesitan quedarse vacíos durante la obra. Un guardamuebles resuelve esos huecos sin tener que deshacerte de nada.',
        'Así lo gestionamos desde el distrito.',
      ],
      zona: [
        {
          titulo: 'Reformas en bloques de mediados de siglo',
          parrafos: [
            'Los pisos de Delicias, Palos de Moguer y Chopera tienen ya muchas décadas y es habitual reformarlos: cocinas, baños, suelos e instalaciones. Durante la obra no conviene dejar los muebles dentro, porque el polvo y los golpes los estropean. Los recogemos antes de que empiece y los devolvemos cuando termina.',
          ],
        },
        {
          titulo: 'Fechas que no coinciden',
          parrafos: [
            'Las promociones nuevas del distrito se entregan con fechas que a veces se retrasan. Si ya has dejado tu piso anterior, el guardamuebles cubre ese tiempo. Cuando tengas las llaves, lo llevamos todo a la nueva vivienda y lo montamos.',
          ],
        },
        {
          titulo: 'Recogida según el edificio',
          parrafos: [
            'En casas antiguas sin ascensor, la recogida lleva más tiempo. En bloques con ascensor estrecho, los muebles grandes bajan por la escalera. En promociones con garaje, a veces podemos cargar desde el sótano. Todo eso se refleja en el presupuesto de la recogida.',
          ],
        },
        {
          titulo: 'Embalaje para guardar',
          parrafos: [
            'Lo que se almacena semanas o meses necesita un embalaje más completo que el de una mudanza de un día: muebles envueltos por completo, colchones en funda, cajas cerradas y numeradas. Hacemos inventario para que sepas dónde está cada cosa.',
          ],
        },
        {
          titulo: 'Guardar en lugar de un trastero',
          parrafos: [
            'Muchos pisos antiguos del distrito no tienen trastero, y en los nuevos el trastero suele ser pequeño. El guardamuebles es una alternativa para la ropa de temporada, el material deportivo o los muebles que no caben, sin ocupar una habitación.',
          ],
        },
        {
          titulo: 'Qué no se puede guardar',
          parrafos: [
            'Alimentos, productos inflamables, plantas y materiales peligrosos. La documentación importante y los objetos de valor monetario es mejor que los conserves tú.',
          ],
        },
        {
          titulo: 'Parejas que juntan dos casas',
          parrafos: [
            'Arganzuela atrae a muchas parejas jóvenes que dejan dos pisos pequeños para irse a uno más grande. Al juntar dos casas sobran sofás, camas, electrodomésticos y menaje duplicado. Guardar lo repetido unos meses permite decidir con calma qué se queda, en lugar de deshacerse de cosas con prisa el mismo día de la mudanza.',
          ],
        },
        {
          titulo: 'Material deportivo y de temporada',
          parrafos: [
            'La cercanía de Madrid Río hace que muchas casas del distrito tengan bicicletas, patinetes, tablas o material de acampada que ocupa espacio buena parte del año. También árboles de Navidad, ropa de esquí o muebles de terraza. Para estas cosas un guardamuebles pequeño puede ser más práctico que un trastero, sobre todo en pisos antiguos que no lo tienen.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Volumen y plazo', texto: 'Qué guardas y durante cuánto tiempo aproximado.' },
        { titulo: 'Recogida', texto: 'Furgoneta o camión, desde la calle o el garaje.' },
        { titulo: 'Embalaje completo', texto: 'Protección pensada para el tiempo de almacenaje.' },
        { titulo: 'Inventario', texto: 'Lista de cajas y muebles numerados.' },
        { titulo: 'Entrega y montaje', texto: 'En la nueva vivienda o en el piso reformado.' },
      ],
      incluye: [
        'Si la entrega de tu promoción nueva se retrasa, ampliamos el almacenaje sin mover nada. Solo tienes que avisarnos de la nueva fecha.',
      ],
      precio: [
        'Lo mensual depende de los metros que ocupen tus cosas. El transporte de ida y vuelta va aparte y cambia mucho de un edificio a otro del distrito: sacar los muebles de una corrala de Imperial lleva bastante más que bajarlos desde un sótano con montacargas en Méndez Álvaro.',
      ],
      faqs: [
        { pregunta: '¿Podéis guardar mis muebles hasta que me entreguen el piso nuevo?', respuesta: 'Sí. Es de lo más habitual en el distrito. Si la entrega se retrasa, ampliamos el almacenaje sin mover nada.' },
        { pregunta: '¿Recogéis desde el garaje?', respuesta: 'Si el vehículo cabe y la comunidad lo permite, sí. Ahorra tiempo y evita ocupar la calle.' },
        { pregunta: '¿Puedo sacar algo durante el almacenaje?', respuesta: 'Sí, con el inventario lo localizamos y te lo llevamos. Ese viaje se presupuesta aparte.' },
        { pregunta: '¿Cuánto cuesta al mes?', respuesta: 'Para hacerte una idea, la horquilla habitual va de cuarenta euros al mes por unas cajas y pocos muebles a ciento veinte por el contenido de un piso familiar.' },
        { pregunta: '¿Embaláis vosotros?', respuesta: 'Sí, si lo contratas, pensando en el tiempo que va a estar guardado.' },
        { pregunta: '¿Hay tiempo mínimo?', respuesta: 'Se contrata por meses. Te lo concretamos en el presupuesto.' },
        { pregunta: '¿La entrega puede ser en otro municipio?', respuesta: 'Sí, en cualquier punto de la Comunidad de Madrid o de España.' },
        { pregunta: '¿Podéis recoger de dos pisos distintos para guardarlo todo junto?', respuesta: 'Sí. Si una pareja junta dos casas, recogemos en ambas direcciones el mismo día y lo guardamos en un único espacio, con el inventario separado por origen para que sepáis de quién es cada cosa.' },
      ],
    },

    /* ============================ EMBALAJE ============================ */
    embalaje: {
      gancho: 'De estudios compactos a pisos familiares con trastero.',
      intro: [
        'En Arganzuela hay pisos de todos los tamaños: estudios en casas antiguas de Imperial y Acacias, pisos familiares de tres dormitorios en Delicias y viviendas nuevas con trastero en Legazpi y Atocha. El embalaje se adapta a cada uno, pero siempre con el mismo objetivo: que todo llegue entero y que en la nueva casa sea fácil encontrar cada cosa.',
        'Te contamos cómo lo hacemos.',
      ],
      zona: [
        {
          titulo: 'Estudios y pisos pequeños',
          parrafos: [
            'En los pisos pequeños del distrito hay poco volumen, pero muy aprovechado: estanterías hasta el techo, altillos y cocinas pequeñas llenas. Embalamos por zonas, empezando por la cocina y lo frágil, y dejamos la ropa para el final. Las cajas son de tamaño medio, fáciles de llevar por escaleras estrechas.',
          ],
        },
        {
          titulo: 'Pisos familiares',
          parrafos: [
            'En los pisos de tres o cuatro dormitorios de Delicias o Chopera el reto es el orden. Etiquetamos cada caja con la habitación y, si lo prefieres, con el nombre de quien la va a abrir. Preparamos una caja de primeros días con lo básico de cocina y baño, que se abre nada más llegar.',
          ],
        },
        {
          titulo: 'Trasteros de las promociones nuevas',
          parrafos: [
            'Los trasteros de los edificios nuevos suelen estar llenos de cajas que nunca se abrieron tras la mudanza anterior. Antes de embalarlos, revísalos: es el mejor momento para decidir qué no merece la pena llevar.',
          ],
        },
        {
          titulo: 'Objetos frágiles',
          parrafos: [
            'Vajilla, cristal, cuadros, espejos y pantallas se embalan pieza a pieza. Los platos van de canto, las copas con separadores y los cuadros con cantoneras y cartón. Las cajas frágiles se señalan en todas sus caras y nunca llevan peso encima.',
          ],
        },
        {
          titulo: 'Embalar antes del día',
          parrafos: [
            'En pisos con mucho contenido embalamos uno o dos días antes. Así el día de la mudanza solo se carga, el ascensor está ocupado menos tiempo y el camión pasa menos rato parado en una calle con estacionamiento regulado.',
          ],
        },
        {
          titulo: 'Lo que puedes hacer tú',
          parrafos: [
            'Aparta lo que no se va a llevar, vacía la nevera un día antes, separa documentos y medicación en una bolsa que lleves tú y deja preparada una muda para los primeros días. Si tienes plantas, decide cuáles viajan.',
          ],
        },
        {
          titulo: 'Galerías y terrazas cerradas',
          parrafos: [
            'En los bloques de mediados de siglo del distrito, la galería o la terraza cerrada suele hacer de lavadero, despensa y trastero a la vez. Ahí se acumulan productos de limpieza, herramientas, botes y cajas. Los productos líquidos y corrosivos no viajan con el resto: conviene usarlos o desecharlos antes. Lo demás lo embalamos en cajas propias, separadas de la ropa y la comida.',
          ],
        },
        {
          titulo: 'Electrónica y pantallas',
          parrafos: [
            'Las pantallas, consolas y equipos de sonido son frecuentes en los pisos jóvenes del distrito. Las pantallas planas viajan de pie, en su caja original si la conservas o con cartón rígido y mantas si no. Los cables de cada aparato van en una bolsa unida a él, para que en la nueva casa todo se conecte sin buscar.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Recuento', texto: 'Calculamos cajas y material con fotos o una visita.' },
        { titulo: 'Material', texto: 'Cajas de varios tamaños, papel, burbujas, mantas y cantoneras.' },
        { titulo: 'Por estancias', texto: 'Cada caja con su habitación y aviso si es frágil.' },
        { titulo: 'Caja de primeros días', texto: 'Lo básico de cocina y baño, a mano.' },
        { titulo: 'Desembalaje opcional', texto: 'Abrimos y colocamos en destino si lo pides.' },
      ],
      incluye: [
        'Si te mudas a una promoción nueva con trastero, podemos dejar directamente en él las cajas que no vas a abrir enseguida, para que la vivienda no se llene de bultos.',
      ],
      precio: [
        'El embalaje depende del volumen y de la cantidad de frágil. Un estudio puede estar en la parte baja del rango; un piso familiar con trastero lleno, más arriba. También puedes pedir solo el material.',
      ],
      faqs: [
        { pregunta: '¿Embaláis estudios pequeños?', respuesta: 'Sí. Suelen hacerse en pocas horas, pero con mucho orden porque cada hueco está aprovechado.' },
        { pregunta: '¿Podéis dejar cajas en el trastero del nuevo edificio?', respuesta: 'Sí. Las que no vas a abrir enseguida pueden ir directamente al trastero.' },
        { pregunta: '¿Embaláis el trastero de origen?', respuesta: 'Sí, si lo indicas. Antes conviene revisarlo para decidir qué viaja y qué no.' },
        { pregunta: '¿Qué es la caja de primeros días?', respuesta: 'Una caja con platos, vasos, cubiertos, lo básico de baño y cargadores, que se abre nada más llegar.' },
        { pregunta: '¿Cuánto cuestan las cajas sueltas?', respuesta: 'Un precio orientativo de 2 a 4 euros por caja reforzada.' },
        { pregunta: '¿Embaláis el mismo día?', respuesta: 'En pisos pequeños puede bastar. En pisos grandes, mejor uno o dos días antes.' },
        { pregunta: '¿Retiráis el material?', respuesta: 'Si contratas el desembalaje, sí. Si no, puedes reciclarlo o pedirnos que lo recojamos.' },
        { pregunta: '¿Qué hago con los productos de limpieza de la galería?', respuesta: 'Los líquidos corrosivos, inflamables o abiertos no deberían viajar con el resto de la carga. Lo mejor es gastarlos o desecharlos antes; los envases cerrados que quieras llevar los embalamos aparte, de pie y bien sellados, lejos de la ropa y los alimentos.' },
      ],
    },

    /* ============================ MONTAJE ============================ */
    'montaje-muebles': {
      gancho: 'De ascensores estrechos a pisos nuevos con otra distribución.',
      intro: [
        'En Arganzuela es muy común mudarse de un bloque antiguo con ascensor estrecho a un piso nuevo con ascensor amplio. Al salir, muchos muebles tienen que desmontarse; al llegar, se montan en habitaciones con otra distribución. Hacerlo bien evita que lleguen con holguras, piezas de menos o que no encajen en el nuevo espacio.',
        'Te contamos cómo lo hacemos.',
      ],
      zona: [
        {
          titulo: 'Salir de un bloque de mediados de siglo',
          parrafos: [
            'Los ascensores de los bloques más antiguos de Delicias y Palos de Moguer admiten pocas cosas de gran tamaño, y las escaleras tienen tramos cortos con descansillos estrechos. Armarios, camas, estanterías y mesas grandes casi siempre se desmontan para bajar.',
          ],
        },
        {
          titulo: 'Entrar en un piso nuevo',
          parrafos: [
            'En las promociones recientes del distrito los ascensores son amplios, pero las habitaciones suelen tener otra forma: más armarios empotrados, menos paredes libres, ventanales grandes. Antes de montar, decidimos contigo dónde va cada mueble para no tener que moverlo después.',
          ],
        },
        {
          titulo: 'Casas antiguas',
          parrafos: [
            'En Imperial y Acacias, las escaleras estrechas obligan a desmontar casi todo. Las paredes pueden ser antiguas y frágiles, así que al desmontar muebles anclados tenemos cuidado de no dañar el yeso.',
          ],
        },
        {
          titulo: 'Muebles de cadena y modulares',
          parrafos: [
            'Muchos pisos del distrito están amueblados con muebles de cadena y modulares. Se desmontan y montan bien, pero sus tableros no aguantan demasiados montajes: por eso marcamos cada pieza y usamos sus herrajes originales, y si alguno está dañado te lo decimos.',
          ],
        },
        {
          titulo: 'Anclajes en pisos nuevos',
          parrafos: [
            'En los edificios nuevos muchas paredes son de placa de yeso laminado. Para anclar estanterías o muebles altos hacen falta tacos específicos, y no todas las paredes admiten peso. Lo revisamos antes de taladrar.',
          ],
        },
        {
          titulo: 'Consejos',
          parrafos: [
            'Vacía armarios y cajones, guarda instrucciones y dinos qué muebles van a cada habitación. Si compras muebles nuevos para el piso, podemos montarlos el mismo día de la mudanza.',
          ],
        },
        {
          titulo: 'Armarios empotrados en pisos nuevos',
          parrafos: [
            'Las promociones recientes del distrito suelen venir con armarios empotrados en los dormitorios. Eso hace que muchos armarios exentos del piso anterior sobren o tengan que ir a otra habitación. Antes de montar, revisamos contigo qué muebles tiene sentido montar y cuáles conviene guardar, vender o retirar, para no llenar el piso nuevo de muebles que no se usan.',
          ],
        },
        {
          titulo: 'Cocinas y muebles auxiliares',
          parrafos: [
            'En las reformas de pisos de Delicias y Chopera a veces el propietario quiere conservar muebles auxiliares de cocina o de baño que no van fijados a la obra, como columnas, carros o estanterías. Se desmontan como cualquier otro mueble. Si hay tomas de agua o electricidad, antes debe desconectarlas un profesional, y después nosotros los retiramos y montamos en el nuevo espacio.',
          ],
        },
        {
          titulo: 'Muebles infantiles',
          parrafos: [
            'Muchas familias jóvenes del distrito tienen cunas convertibles, cambiadores, literas y armarios infantiles. Son muebles con muchas piezas y tornillería específica. Los desmontamos guardando cada juego en su bolsa marcada y, al montarlos, revisamos su estabilidad y recomendamos anclar a la pared los que el fabricante indique.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Inventario de muebles', texto: 'Con fotos, para llevar las herramientas adecuadas.' },
        { titulo: 'Medidas', texto: 'Ascensor y escalera de origen, y espacios de destino.' },
        { titulo: 'Desmontaje marcado', texto: 'Piezas y herrajes identificados por mueble.' },
        { titulo: 'Traslado protegido', texto: 'Tableros de canto y envueltos.' },
        { titulo: 'Montaje y anclaje', texto: 'En su sitio definitivo, nivelado y fijado si procede.' },
      ],
      incluye: [
        'Si un mueble no encaja en la nueva distribución, te proponemos alternativas antes de montarlo: otra pared, sin altillo o con una configuración distinta de sus módulos. Preferimos perder diez minutos en decidirlo que montar un armario dos veces.',
      ],
      precio: [
        'Cada mueble se presupuesta según su complejidad. Salir de un bloque con ascensor estrecho obliga a desmontar más piezas, pero ahorra tiempo de escalera.',
      ],
      faqs: [
        { pregunta: '¿Desmontáis los muebles para sacarlos de un ascensor estrecho?', respuesta: 'Sí. Es lo más habitual en los bloques antiguos del distrito.' },
        { pregunta: '¿Anclais estanterías en paredes de pladur?', respuesta: 'Sí, con tacos específicos y comprobando antes cuánto peso admite la pared.' },
        { pregunta: '¿Montáis muebles nuevos?', respuesta: 'Sí, también fuera de una mudanza o el mismo día.' },
        { pregunta: '¿Qué pasa si un tablero está dañado?', respuesta: 'Te lo enseñamos antes de montarlo para que decidas si se sustituye.' },
        { pregunta: '¿Lleváis herramientas?', respuesta: 'Sí, todas las necesarias para desmontar y montar.' },
        { pregunta: '¿Montáis el mismo día?', respuesta: 'Normalmente sí, al descargar.' },
        { pregunta: '¿Desmontáis armarios de casas antiguas?', respuesta: 'Sí, con cuidado de no dañar paredes de yeso al retirar anclajes.' },
        { pregunta: '¿Podéis montar una cuna o un cambiador?', respuesta: 'Sí. Las cunas convertibles y los cambiadores tienen tornillería específica que guardamos aparte. Al montarlos revisamos que no queden holguras, porque en muebles infantiles la estabilidad es lo primero, y te avisamos si alguna pieza se ha deteriorado con el uso y conviene cambiarla antes de volver a usar el mueble.' },
      ],
    },

    /* ============================ URGENTES ============================ */
    'mudanzas-urgentes': {
      gancho: 'Salir con prisa sin perder tiempo en trámites.',
      intro: [
        'Las mudanzas urgentes en Arganzuela suelen llegar por entregas de llaves que se adelantan, alquileres que terminan antes de lo previsto o cambios de trabajo. Con poco margen, lo que cuenta es elegir el vehículo adecuado, el horario que evite el tráfico de las grandes avenidas y un equipo suficiente.',
        'Te contamos cómo lo hacemos.',
      ],
      zona: [
        {
          titulo: 'Sin autorización previa',
          parrafos: [
            'El permiso municipal para dejar un camión pesado en la calzada no se resuelve en un día ni en dos. Con una fecha encima en Arganzuela, la alternativa es repartir la carga en vehículos ligeros que paran en los huecos de carga y descarga del paseo de las Delicias o de las calles laterales, aunque eso suponga hacer algún trayecto más.',
          ],
        },
        {
          titulo: 'Cargar desde el garaje',
          parrafos: [
            'En las promociones nuevas, si la comunidad lo permite y el vehículo cabe, cargar desde el garaje ahorra tiempo y evita buscar sitio en la calle. Con prisa, es una de las primeras cosas que conviene preguntar.',
          ],
        },
        {
          titulo: 'Tráfico en las avenidas',
          parrafos: [
            'El paseo de las Delicias, Santa María de la Cabeza y Méndez Álvaro tienen mucho tráfico en hora punta. Programar la carga a media mañana o a primera hora de la tarde acorta los trayectos, algo decisivo cuando el tiempo es limitado.',
          ],
        },
        {
          titulo: 'Más personas, no más vehículo',
          parrafos: [
            'En casas antiguas y bloques con ascensor estrecho, el cuello de botella es la escalera. Con prisa, añadimos personas al equipo para bajar a la vez que otras cargan.',
          ],
        },
        {
          titulo: 'Guardamuebles puente',
          parrafos: [
            'Si tienes que salir antes de tener la nueva casa, llevamos todo a un guardamuebles y lo entregamos cuando tengas las llaves. Es la forma más sencilla de cumplir una fecha de salida sin decidirlo todo con prisas.',
          ],
        },
        {
          titulo: 'Entregas de llaves que se adelantan',
          parrafos: [
            'En las promociones nuevas del distrito no es raro que la entrega de llaves se confirme con pocos días de aviso, a veces coincidiendo con el final del alquiler anterior. En ese escenario conviene reservar la fecha cuanto antes, aunque el volumen no esté claro todavía: con unas fotos de las habitaciones podemos asegurar vehículo y equipo y ajustar los detalles después.',
          ],
        },
        {
          titulo: 'Mudanzas en dos tiempos',
          parrafos: [
            'Si la urgencia es dejar libre el piso de origen, una opción es mover el mismo día lo imprescindible para vivir y dejar el resto embalado en un guardamuebles. Unos días o semanas después, con calma, lo llevamos a la nueva casa. Así la mudanza urgente se limita a lo que de verdad no puede esperar.',
          ],
        },
        {
          titulo: 'Fines de semana con eventos',
          parrafos: [
            'Los fines de semana con actividades en Matadero o en Madrid Río, los alrededores se llenan de gente y aparcar se complica. Si la urgencia cae en esos días, programamos la carga a primera hora de la mañana, antes de que empiece la afluencia.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Datos por WhatsApp', texto: 'Direcciones, plantas, fotos y fecha límite.' },
        { titulo: 'Vehículo sin trámites', texto: 'Furgonetas o carga desde garaje si es posible.' },
        { titulo: 'Horario', texto: 'Fuera de las horas punta de las avenidas.' },
        { titulo: 'Equipo reforzado', texto: 'Más personas cuando hay escalera.' },
        { titulo: 'Destino o almacenaje', texto: 'Entrega en la nueva casa o en un guardamuebles.' },
      ],
      incluye: [
        'Aunque haya prisa, te enviamos el presupuesto por escrito y protegemos portal y ascensor como en cualquier otra mudanza.',
      ],
      precio: [
        'La urgencia añade un recargo al precio normal. En el distrito, el tipo de edificio pesa: un piso nuevo con garaje se mueve mucho más rápido que una casa antigua sin ascensor.',
      ],
      faqs: [
        { pregunta: '¿Podéis hacer una mudanza urgente en Arganzuela?', respuesta: 'Según disponibilidad, sí. Escríbenos con los datos y te respondemos con una propuesta.' },
        { pregunta: '¿Necesito autorización para el vehículo?', respuesta: 'Si no da tiempo a pedirla, usamos vehículos que no la necesitan o cargamos desde el garaje.' },
        { pregunta: '¿Embaláis vosotros?', respuesta: 'Claro. Traemos cajas y protecciones el mismo día y nos repartimos: unos embalan la cocina y la vitrina mientras otros van bajando lo que ya está cerrado.' },
        { pregunta: '¿Podéis guardar mis cosas?', respuesta: 'Sí, en un guardamuebles hasta que tengas la nueva casa.' },
        { pregunta: '¿Cuánto es el recargo?', respuesta: 'Calcula un incremento de quince a veinticinco puntos porcentuales sobre lo que costaría con fecha cómoda; cuanto menos margen y más personas hagan falta, más cerca del máximo.' },
        { pregunta: '¿Y si me retrasan las llaves?', respuesta: 'Esperamos con la carga hecha o la llevamos al guardamuebles ese mismo día.' },
        { pregunta: '¿Trabajáis en fin de semana?', respuesta: 'Podemos valorarlo según disponibilidad.' },
        { pregunta: '¿Cuánto antes debo avisar para que lleguéis?', respuesta: 'Cuanto antes, mejor, pero hemos resuelto mudanzas con muy pocos días. Lo que más ayuda es mandarnos ya las fotos, las dos direcciones con su planta y la hora límite: con eso reservamos equipo y vehículo y afinamos el resto sobre la marcha.' },
      ],
    },

    /* ============================ VACIADO ============================ */
    'vaciado-pisos': {
      gancho: 'Pisos de toda la vida en Delicias, Acacias e Imperial.',
      intro: [
        'En los barrios más antiguos de Arganzuela, como Delicias, Acacias, Imperial o Palos de Moguer, muchos pisos han sido el hogar de la misma familia durante décadas. Cuando se heredan, se venden o se van a reformar, hay que vaciarlos por completo, a menudo con trastero o cuarto en la azotea incluido.',
        'Así trabajamos en el distrito, desde la primera visita hasta que la vivienda queda lista para el siguiente paso.',
      ],
      zona: [
        {
          titulo: 'Pisos con muchos años',
          parrafos: [
            'Los pisos de los bloques de mediados de siglo suelen tener tres dormitorios, cocina independiente y una galería o terraza cerrada. Tras décadas de uso acumulan muebles de varias épocas, electrodomésticos, ropa, papeles y objetos de familia. El volumen real suele ser mayor de lo que parece.',
          ],
        },
        {
          titulo: 'Separar antes de retirar',
          parrafos: [
            'Antes de retirar nada, recorremos el piso con la familia para separar lo que se conserva, lo que se traslada y lo que se retira. En herencias con varios herederos, conviene que todos estén de acuerdo antes de empezar.',
          ],
        },
        {
          titulo: 'Acceso y vehículo',
          parrafos: [
            'Los bloques de Delicias con cabinas mínimas obligan a separar en piezas aparadores y armarios; en las casas de Imperial y Acacias, la escalera es el único camino. Cuando el contenido da para un camión pesado, tramitamos antes la reserva de calzada; si se reparte en varias furgonetas ligeras, podemos ahorrarnos ese paso.',
          ],
        },
        {
          titulo: 'Trasteros y azoteas',
          parrafos: [
            'Muchos edificios antiguos del distrito tienen trasteros en el sótano o cuartos en la azotea. Los incluimos si nos lo indicas al principio, porque a menudo guardan tanto como una habitación.',
          ],
        },
        {
          titulo: 'Dar una segunda vida',
          parrafos: [
            'Si hay muebles o electrodomésticos en buen estado, te comentamos si pueden donarse antes de retirarlos. La decisión es de la familia, y nosotros hacemos el traslado que haga falta.',
          ],
        },
        {
          titulo: 'Consejos',
          parrafos: [
            'Revisad cajones, libros y bolsillos; buscad documentos importantes antes del vaciado. Si el piso se va a vender, dejarlo vacío y barrido ayuda en las visitas. Y si se va a reformar, decidid qué muebles de cocina o armarios se retiran.',
          ],
        },
        {
          titulo: 'Pisos que se reforman para alquilar',
          parrafos: [
            'En el distrito muchos pisos heredados se reforman para alquilarlos o venderlos, porque la zona ha ganado demanda con Madrid Río. Si ese es el plan, conviene vaciar también los muebles de cocina, los armarios viejos y las lámparas que la obra va a sustituir. Dejar el piso completamente libre facilita el trabajo del constructor y evita que cobre por retirarlo.',
          ],
        },
        {
          titulo: 'Recuerdos que aparecen al vaciar',
          parrafos: [
            'En los pisos de toda la vida aparecen fotografías, cartas, documentos de la familia y pequeños objetos con valor sentimental en lugares inesperados: dentro de libros, en el fondo de cajones, en cajas de zapatos en el altillo. Cuando encontramos algo así lo apartamos y se lo entregamos a la familia, aunque nos hayan dicho que todo se retira.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Visita', texto: 'Volumen, trastero, acceso y lo que se conserva.' },
        { titulo: 'Acuerdo', texto: 'La familia decide qué se queda cada uno.' },
        { titulo: 'Traslados', texto: 'Las piezas que alguien quiere quedarse salen primero, bien embaladas, hacia su nueva casa.' },
        { titulo: 'Retirada', texto: 'El resto sale protegiendo zonas comunes.' },
        { titulo: 'Piso vacío', texto: 'Barrido y listo para entregar, vender o reformar.' },
      ],
      incluye: [
        'La galería o terraza cerrada y el trastero se incluyen si nos lo dices desde el principio. En los pisos de mediados de siglo del distrito suelen esconder bastante volumen.',
      ],
      precio: [
        'El precio depende del volumen y del acceso. Un piso de tres dormitorios con trastero en un bloque con ascensor estrecho está en la parte media o alta del rango.',
      ],
      faqs: [
        { pregunta: '¿Vaciáis pisos por herencia en Arganzuela?', respuesta: 'Muchas de nuestras salidas en Arganzuela son eso: pisos heredados en bloques de los años cincuenta o sesenta. Primero marcamos con la familia lo que cada uno quiere, y solo después empezamos a sacar.' },
        { pregunta: '¿Incluye el trastero o la azotea?', respuesta: 'Sí, si nos lo indicas al pedir presupuesto.' },
        { pregunta: '¿Podéis llevar parte a casa de un familiar?', respuesta: 'Sí, a la dirección que nos digáis o a un guardamuebles.' },
        { pregunta: '¿Dejáis el piso limpio?', respuesta: 'Vacío y barrido. La limpieza a fondo es un servicio aparte.' },
        { pregunta: '¿Cuánto tarda?', respuesta: 'Para un tres dormitorios con galería y trastero, cuenta con una jornada larga o dos, dependiendo sobre todo de si el ascensor admite muebles.' },
        { pregunta: '¿Retiráis electrodomésticos?', respuesta: 'Los sacamos junto con el resto. La lavadora, el lavavajillas o la cocina de gas tienen que estar desconectados por un técnico antes de nuestra llegada; si no lo están, te lo recordamos al fijar la fecha.' },
        { pregunta: '¿Hay que estar presente?', respuesta: 'Lo ideal es que alguien de la familia pase por el piso el primer día. Una vez claro qué no se toca, podéis dejarnos las llaves y os mandamos fotos al terminar.' },
      ],
    },

    /* ============================ PERSONAS MAYORES ============================ */
    'mudanzas-personas-mayores': {
      gancho: 'De un bloque sin ascensor a una casa más cómoda.',
      intro: [
        'En Arganzuela viven muchas personas mayores en pisos de bloques de mediados de siglo, algunos con ascensores que no llegan a la planta de calle o con escalones en el portal. Cuando llega el momento de mudarse a una vivienda accesible, a casa de un familiar o a una residencia, la mudanza debe hacerse a su ritmo.',
        'Te contamos cómo la organizamos.',
      ],
      zona: [
        {
          titulo: 'Pisos de toda una vida',
          parrafos: [
            'Muchos vecinos de Delicias, Chopera o Palos de Moguer llevan décadas en el mismo piso. Elegir qué se lleva a una vivienda más pequeña es la parte más delicada. Recomendamos hacerlo antes de la mudanza, con la persona y la familia, y medir el espacio de destino.',
          ],
        },
        {
          titulo: 'Accesos difíciles',
          parrafos: [
            'En muchos bloques del distrito el ascensor arranca en una entreplanta y el portal tiene varios peldaños. Para que la persona no tenga que subirlos y bajarlos durante horas, proponemos que pase la mañana con un familiar, quizá dando un paseo por Madrid Río, y que vea su nueva casa ya con la cama y el sillón en su sitio.',
          ],
        },
        {
          titulo: 'Quedarse en el distrito',
          parrafos: [
            'Muchas personas prefieren seguir cerca de Madrid Río, de su centro de salud y de sus vecinos. Las promociones nuevas del distrito, con ascensor y portal accesible, son un destino frecuente. El trayecto es corto y lo básico puede quedar montado en pocas horas.',
          ],
        },
        {
          titulo: 'Residencias',
          parrafos: [
            'Las residencias marcan cuándo pueden entrar muebles y qué medidas tiene la habitación. Con esa información elegimos con la familia unas pocas piezas significativas y las colocamos para que la persona reconozca su espacio desde el primer día.',
          ],
        },
        {
          titulo: 'Consejos para la familia',
          parrafos: [
            'Preparad una bolsa con medicación, documentación, gafas y lo necesario para los primeros días. Fotografiad cómo estaban los muebles y los cuadros para reproducir algo de ese orden en la nueva casa.',
          ],
        },
        {
          titulo: 'Viviendas nuevas con ascensor en el mismo barrio',
          parrafos: [
            'Las promociones de Legazpi y Atocha, con portales a nivel de calle y ascensores amplios, son un destino habitual para vecinos mayores que no quieren alejarse de su barrio. Mantienen el médico, la farmacia y los vecinos de siempre, pero sin escaleras. En estos casos el trayecto es de minutos y podemos dejar la casa nueva prácticamente lista en una mañana.',
          ],
        },
        {
          titulo: 'Elegir con calma',
          parrafos: [
            'Recomendamos empezar a decidir qué se lleva semanas antes, no el día de la mudanza. Un recorrido por la casa con la persona, habitación por habitación, ayuda a separar lo que quiere conservar, lo que pueden quedarse los hijos o los nietos y lo que puede donarse. Si ayuda, podemos llevar etiquetas de colores para marcar cada grupo.',
          ],
        },
        {
          titulo: 'Después de la mudanza',
          parrafos: [
            'Si la familia lo prefiere, podemos volver unos días después para colgar cuadros, cambiar un mueble de sitio o recoger las cajas vacías. Son detalles que ayudan a que la persona se sienta en su casa y no en un lugar a medio montar.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Visita tranquila', texto: 'Con la persona y la familia, sin prisas.' },
        { titulo: 'Elegir qué viaja', texto: 'Según el espacio de la nueva vivienda.' },
        { titulo: 'Embalaje completo', texto: 'Para que nadie tenga que cargar nada.' },
        { titulo: 'Carga sin presencia', texto: 'La persona está acompañada fuera.' },
        { titulo: 'Casa lista', texto: 'Cama, armario y objetos personales colocados.' },
      ],
      incluye: [
        'Si parte de los muebles van a casa de un familiar o a un guardamuebles, lo organizamos en el mismo viaje cuando es posible.',
      ],
      precio: [
        'Se calcula como una mudanza de piso más el embalaje completo. Un bloque con ascensor estrecho alarga la carga; una residencia o un piso nuevo con buen acceso la acorta.',
      ],
      faqs: [
        { pregunta: '¿Coordináis con los hijos?', respuesta: 'Sí. Una sola persona de contacto habla con quien prefiráis.' },
        { pregunta: '¿La persona tiene que estar presente?', respuesta: 'Puede, pero no lo recomendamos durante las horas de carga, que son las más ruidosas. Es mejor que llegue al final, cuando su habitación ya está montada.' },
        { pregunta: '¿Lleváis muebles a residencias?', respuesta: 'Sí, tras confirmar el espacio y el horario de entrada.' },
        { pregunta: '¿Qué pasa con lo que no cabe?', respuesta: 'Va a familiares, a un guardamuebles o se retira, como decidáis.' },
        { pregunta: '¿Montáis la cama el mismo día?', respuesta: 'Es lo primero que montamos al llegar: la cama hecha, la mesilla con la lámpara y el armario con algo de ropa colgada.' },
        { pregunta: '¿Trasladáis una cama articulada?', respuesta: 'Sí, protegida y, si hace falta, desmontada.' },
        { pregunta: '¿Podéis colgar cuadros?', respuesta: 'Podemos valorarlo para que la nueva casa se sienta propia.' },
        { pregunta: '¿Podéis ayudar a decidir qué se lleva?', respuesta: 'Podemos acompañar a la persona y a la familia en un recorrido por la casa y marcar con etiquetas de colores lo que viaja, lo que se quedan los familiares y lo que se dona. La decisión es siempre suya; nosotros ayudamos a ordenarla.' },
      ],
    },

    /* ============================ ELEVADOR ============================ */
    'subida-muebles-elevador': {
      gancho: 'Por la fachada en avenidas amplias y pisos con terraza.',
      intro: [
        'En Arganzuela el elevador exterior resuelve dos situaciones frecuentes: los muebles grandes que no caben en los ascensores estrechos de los bloques de mediados de siglo, y los sofás o armarios que hay que subir a áticos y pisos con terraza de las promociones nuevas. Las avenidas amplias del distrito ayudan a colocar el equipo.',
        'Te explicamos cuándo conviene y qué hace falta.',
      ],
      zona: [
        {
          titulo: 'Bloques con balcón',
          parrafos: [
            'Muchos bloques de Delicias y Palos de Moguer tienen balcones o terrazas a la calle. Si el hueco es suficiente y la fachada da a una calle donde pueda colocarse el elevador, es una buena alternativa al ascensor estrecho.',
          ],
        },
        {
          titulo: 'Áticos de promociones nuevas',
          parrafos: [
            'En las promociones de Legazpi y Atocha hay áticos con terrazas amplias. Los ascensores son grandes, pero un sofá de una pieza o un armario alto pueden no girar en el pasillo. La terraza es la entrada natural, siempre que la altura esté al alcance del equipo.',
          ],
        },
        {
          titulo: 'Avenidas y calles interiores',
          parrafos: [
            'En el paseo de las Delicias, Santa María de la Cabeza o el paseo Imperial hay espacio para el elevador, pero también mucho tráfico. En calles interiores, los coches aparcados limitan el sitio. Lo valoramos con fotos antes de proponerte nada.',
          ],
        },
        {
          titulo: 'Permiso municipal',
          parrafos: [
            'En la capital, para montar un elevador de mudanza en la vía pública hace falta autorización del Ayuntamiento, que se tramita con antelación y tiene sus tasas. La ficha de la sede electrónica explica el procedimiento; revísala antes de solicitarla, porque los importes cambian cada año.',
          ],
        },
        {
          titulo: 'Fachadas a zonas privadas',
          parrafos: [
            'En algunas promociones la terraza da a una zona interior de la urbanización. Allí el elevador se colocaría en suelo privado y hace falta permiso de la comunidad, además de que el equipo pueda acceder.',
          ],
        },
        {
          titulo: 'Qué preparar',
          parrafos: [
            'Con el tamaño de la pieza, el del hueco de la terraza y dos fotos, una de la fachada desde la acera y otra de la calle, solemos poder confirmar la viabilidad a distancia. El día de la maniobra, retira macetas y toldos que estorben.',
          ],
        },
        {
          titulo: 'Torres altas y límites del equipo',
          parrafos: [
            'Algunos edificios recientes del distrito tienen muchas plantas. Los elevadores de mudanza tienen un alcance limitado, y por encima de cierta altura no llegan. Si tu piso está muy alto, el elevador probablemente no sea la solución, y habrá que valorar desmontar más el mueble o, en casos excepcionales, otro tipo de equipo con su propia autorización.',
          ],
        },
        {
          titulo: 'Combinar con la entrega de una tienda',
          parrafos: [
            'A menudo la necesidad de elevador aparece cuando la tienda llega con un sofá que no cabe. Para evitarlo, mide antes el ascensor, la puerta del piso y el pasillo, y compáralos con las medidas del mueble embalado. Si no pasa, podemos coordinar con la tienda la entrega para el día del elevador y subirlo directamente por la terraza.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Fotos y medidas', texto: 'Mueble, hueco, fachada y calle.' },
        { titulo: 'Viabilidad', texto: 'Espacio, altura y si el suelo es público o privado.' },
        { titulo: 'Permisos', texto: 'Municipal o de la comunidad, con su antelación.' },
        { titulo: 'Subida', texto: 'Pieza protegida y sujeta, balcón cubierto.' },
        { titulo: 'Colocación', texto: 'En su habitación, montada si viene en piezas.' },
      ],
      incluye: [
        'Si además del sofá hay un colchón o una mesa que tampoco entran, aprovechamos la misma plataforma para todo y se paga una única reserva de calzada.',
      ],
      precio: [
        'Al precio del elevador se suman las tasas municipales cuando hacen falta. Si desmontar el mueble permite subirlo en el ascensor, puede salir más económico.',
      ],
      faqs: [
        { pregunta: '¿Se puede subir un sofá por la terraza en Arganzuela?', respuesta: 'A menudo sí, si la terraza da a la calle, el hueco es suficiente y el elevador alcanza esa altura.' },
        { pregunta: '¿Hace falta permiso?', respuesta: 'Sí, del Ayuntamiento si se ocupa la vía pública, o de la comunidad si es suelo privado.' },
        { pregunta: '¿Cuánto cuesta?', respuesta: 'La plataforma suele moverse entre ciento cincuenta y trescientos euros según altura y tiempo, y aparte va lo que cobra el Ayuntamiento si se usa la vía pública.' },
        { pregunta: '¿Hasta qué planta llega?', respuesta: 'Depende del equipo y de la fachada; en edificios altos puede no alcanzar los últimos pisos.' },
        { pregunta: '¿Y si no es posible?', respuesta: 'En las promociones nuevas a veces basta con quitar las patas o el respaldo para que entre por el ascensor amplio; si no, estudiamos subirlo a pulso por la escalera de emergencia con más personas.' },
        { pregunta: '¿Subís varias piezas a la vez?', respuesta: 'Sí, conviene agruparlas en una misma maniobra.' },
        { pregunta: '¿Hay que avisar a los vecinos?', respuesta: 'Conviene: la plataforma ocupa la acera y parte de la entrada, y en las comunidades grandes de Legazpi o Méndez Álvaro es mejor que el administrador lo sepa con antelación.' },
      ],
    },
  },
};

export default arganzuela;
