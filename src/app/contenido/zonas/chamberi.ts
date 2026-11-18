import type { ContenidoZona } from '../tipos';

/**
 * Chamberí (distrito 7). Barrios: Gaztambide, Arapiles, Trafalgar, Almagro, Ríos Rosas y
 * Vallehermoso, todos dentro del SER según el Ayuntamiento de Madrid (consultado el 10/11/2026).
 */
const chamberi: ContenidoZona = {
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
      gancho: 'Fincas antiguas, ascensores justos y calles estrechas.',
      intro: [
        'Mudarse en Chamberí casi nunca es solo cargar un camión. Es un distrito de fincas con historia, portales con escalera señorial y ascensores que se instalaron décadas después de construir el edificio, a menudo en el hueco que quedaba libre. Eso condiciona cómo se saca un sofá, cuánto se tarda en bajar un armario y dónde puede esperar el vehículo.',
        'En esta página te contamos qué tiene de particular una mudanza de piso en Gaztambide, Arapiles, Trafalgar, Almagro, Ríos Rosas o Vallehermoso, cómo la organizamos y qué conviene preparar para que el día salga redondo.',
      ],
      zona: [
        {
          titulo: 'Un distrito del Ensanche',
          parrafos: [
            'Chamberí creció como parte del Ensanche de Madrid a partir de la segunda mitad del siglo XIX, y la mayor parte de lo que ves hoy se levantó entre finales de ese siglo y mediados del XX. Por eso domina la manzana cerrada con patio interior, la fachada de ladrillo o revoco y la finca de cinco a siete alturas, mezclada con algunos bloques más recientes que sustituyeron a edificios antiguos.',
            'Dentro del distrito hay contrastes. Almagro reúne pisos amplios de techos altos, muchos con dormitorios de servicio y muebles grandes. En Trafalgar y Arapiles abundan los pisos medianos, a veces reformados para alquilar. Vallehermoso y Ríos Rosas combinan fincas clásicas con edificios de mediados del siglo XX, más regulares por dentro.',
          ],
        },
        {
          titulo: 'Ascensores y escaleras: lo que más pesa',
          parrafos: [
            'En muchas fincas el ascensor llegó después, encajado en el ojo de la escalera, y su cabina admite a dos personas y poco más. Un colchón de matrimonio o un sofá de tres plazas no caben, así que bajan por la escalera, que suele ser amplia pero con descansillos y barandillas que hay que proteger. En los edificios que todavía no tienen ascensor, cada planta a pie se nota en el tiempo y en el precio.',
            'También es habitual encontrar portales con un par de escalones o un pequeño desnivel hasta la acera, y patios interiores por los que no pasa nada voluminoso. Saber esto antes evita sorpresas: por eso te preguntamos la planta, el tamaño del ascensor y si hay escalones en el portal.',
          ],
        },
        {
          titulo: 'Calles, accesos y aparcamiento',
          parrafos: [
            'Las vías anchas como Bravo Murillo, Santa Engracia, Alberto Aguilera o José Abascal facilitan la parada, pero el interior de los barrios está hecho de calles de un carril, a menudo con aparcamiento a ambos lados. Todo el distrito está dentro del Servicio de Estacionamiento Regulado, con plazas para residentes y plazas de rotación, y las zonas de carga y descarga se ocupan pronto por la mañana.',
            'Cuando la mudanza necesita un camión de más de 3.500 kilos o un elevador, el Ayuntamiento exige autorización para ocupar la vía pública, y conviene pedirla con antelación. Para pisos pequeños, una furgoneta permite parar más cerca y moverse mejor por calles como Ponzano, Fernández de los Ríos o Galileo.',
          ],
        },
        {
          titulo: 'Consejos si te mudas en Chamberí',
          parrafos: [
            'Avisa a la comunidad o al portero del día y la franja horaria: en muchas fincas hay que reservar el ascensor o proteger el portal. Mide el hueco de la escalera y el del ascensor si tienes muebles grandes, y decide antes qué se desmonta. Si el piso de destino también es antiguo, cuéntanoslo: mover dos fincas clásicas el mismo día cambia el plan de trabajo.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Nos cuentas el piso', texto: 'Planta, ascensor, escalones del portal y muebles grandes. Si hay dudas sobre el volumen o el acceso, vamos a verlo sin compromiso.' },
        { titulo: 'Plan para la finca', texto: 'Decidimos qué baja por el ascensor, qué va por la escalera y qué conviene desmontar, y elegimos furgoneta o camión según la calle.' },
        { titulo: 'Permiso y horario', texto: 'Si el vehículo lo requiere, te indicamos cómo pedir la reserva de espacio. Fijamos la hora pensando en la carga y descarga de la zona.' },
        { titulo: 'Protección y carga', texto: 'Protegemos portal, barandillas y esquinas, embalamos lo acordado y cargamos por habitaciones para descargar en orden.' },
        { titulo: 'Entrega y montaje', texto: 'Colocamos cada cosa en su sitio, montamos lo desmontado y revisamos contigo que no falte nada.' },
      ],
      incluye: [
        'En Chamberí dedicamos más tiempo a proteger zonas comunes que en un edificio moderno: suelos de mármol o madera en el portal, barandillas de forja y esquinas de escalera estrechas. Va incluido en la mudanza y lo hacemos antes de sacar el primer mueble.',
      ],
      precio: [
        'Lo que más mueve el precio aquí no es la distancia, sino el acceso: un cuarto sin ascensor o con un ascensor en el que no cabe casi nada alarga la carga. Un piso de dos habitaciones con buen ascensor puede quedarse en la parte baja del rango; el mismo piso en una finca sin ascensor sube.',
      ],
      faqs: [
        { pregunta: '¿Cabe un sofá en los ascensores de las fincas antiguas de Chamberí?', respuesta: 'Casi nunca. Los ascensores añadidos en el hueco de la escalera suelen ser pequeños, así que los sofás, colchones y armarios bajan por la escalera, protegidos. Lo tenemos en cuenta al calcular el tiempo.' },
        { pregunta: '¿Hace falta permiso para aparcar el camión?', respuesta: 'Para vehículos de más de 3.500 kilos o con elevador, el Ayuntamiento de Madrid pide autorización para ocupar la vía pública. Con una furgoneta más pequeña normalmente no hace falta. Te lo indicamos al preparar la mudanza.' },
        { pregunta: '¿A qué hora conviene hacer la mudanza?', respuesta: 'A primera hora suele ser más fácil encontrar sitio cerca del portal. En calles comerciales, evitar el mediodía ayuda a que la carga sea más fluida.' },
        { pregunta: '¿Podéis desmontar los muebles que no pasan por la escalera?', respuesta: 'Sí. Desmontamos armarios, camas y estanterías en el piso de origen y los montamos en el de destino el mismo día. Si algo no se puede desmontar y no pasa, buscamos otra opción, como un elevador por fachada.' },
        { pregunta: '¿Tengo que avisar a la comunidad?', respuesta: 'Es recomendable. En muchas fincas hay que reservar el ascensor o avisar al portero para proteger el portal. Así se evitan esperas el mismo día.' },
        { pregunta: '¿Cuánto se tarda en una mudanza de un piso de dos habitaciones?', respuesta: 'Depende sobre todo de la planta y del ascensor. Con buen acceso puede hacerse en una mañana; en un cuarto sin ascensor, la carga lleva bastante más. Te damos una estimación con el presupuesto.' },
      ],
    },

    /* ============================ PORTES ============================ */
    portes: {
      gancho: 'Un sofá o unas cajas, con parada cerca del portal.',
      intro: [
        'Un porte en Chamberí suele ser algo concreto: el sofá que compraste en una tienda de la calle Fuencarral, la cómoda de una abuela que pasa de Almagro a Arapiles o unas cuantas cajas que van al trastero. Para encargos así basta una furgoneta con conductor y un operario, y lo importante es poder parar cerca y subir sin atascos.',
        'Aquí te explicamos cómo lo planteamos en un distrito de calles estrechas, aparcamiento regulado y fincas con ascensores pequeños.',
      ],
      zona: [
        {
          titulo: 'Por qué en Chamberí conviene la furgoneta',
          parrafos: [
            'Las calles interiores de Trafalgar, Gaztambide o Arapiles son de un solo carril y tienen coches aparcados a ambos lados. Un camión grande lo tiene difícil para detenerse sin cortar el tráfico, mientras que una furgoneta encuentra hueco en una zona de carga y descarga o en un vado con permiso del propietario. Para un porte, el vehículo pequeño ahorra tiempo de maniobra.',
          ],
        },
        {
          titulo: 'Qué edificios vas a encontrar',
          parrafos: [
            'La mayoría son fincas de finales del siglo XIX y primera mitad del XX, con escalera central y ascensor añadido después. Eso significa que un mueble mediano, como una mesa de comedor o una estantería, suele subir por la escalera. En los edificios más modernos de Vallehermoso o Ríos Rosas los ascensores son algo mayores, pero rara vez caben muebles largos de pie.',
            'Si el porte va a un piso alto sin ascensor, cuéntanoslo. No es un problema, pero cambia cuántas personas hacen falta y cuánto dura.',
          ],
        },
        {
          titulo: 'Aparcamiento regulado y horarios',
          parrafos: [
            'Todo Chamberí está dentro del Servicio de Estacionamiento Regulado. Para un porte no se reserva espacio: se aprovechan las plazas de carga y descarga, que tienen más rotación a media mañana. En calles con mucho comercio, como Fuencarral o Bravo Murillo, la primera hora del día y el principio de la tarde suelen ser los momentos con más hueco.',
          ],
        },
        {
          titulo: 'Recogidas en tiendas del distrito',
          parrafos: [
            'Si recoges una compra en una tienda, confirma antes si te la entregan en la puerta o hay que sacarla de un almacén interior, y si el mueble viene montado o en caja. Un aparador montado necesita mantas y dos personas; en caja, se carga en un momento. Con ese dato elegimos el vehículo y el número de operarios.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Nos dices qué mueves', texto: 'Una foto o una lista basta: medidas aproximadas, origen, destino y si hay ascensor en cada punto.' },
        { titulo: 'Elegimos vehículo y equipo', texto: 'Furgoneta con conductor y un operario para la mayoría de portes; uno más si hay escaleras o piezas pesadas.' },
        { titulo: 'Hora con margen', texto: 'Acordamos una franja que aproveche los momentos con más hueco en la carga y descarga de tu calle.' },
        { titulo: 'Carga protegida', texto: 'Envolvemos el mueble con mantas, lo sujetamos en la furgoneta y cuidamos portal y escalera.' },
        { titulo: 'Entrega en su sitio', texto: 'Lo dejamos en la habitación que nos digas, no en el portal.' },
      ],
      incluye: [
        'El porte incluye subirlo hasta la vivienda, no dejarlo en la acera. En las fincas de Chamberí eso suele significar escalera, así que lo contamos desde el principio para que el precio no cambie el día del porte.',
      ],
      precio: [
        'Un porte de pocos muebles dentro del distrito, con buen acceso, suele quedarse en la tarifa de partida. Lo que alarga el tiempo es esperar a que quede libre un hueco para parar o subir varias plantas a pie; por eso te preguntamos ambas cosas antes de darte el precio.',
      ],
      faqs: [
        { pregunta: '¿Podéis recoger un mueble en una tienda de Chamberí y llevarlo a mi casa?', respuesta: 'Sí. Recogemos en la tienda o en su almacén y lo llevamos a tu domicilio, dentro o fuera del distrito. Confírmanos la dirección de recogida y si el mueble va montado o en caja.' },
        { pregunta: '¿El porte incluye subirlo al piso?', respuesta: 'Sí, lo dejamos dentro de la vivienda, en la habitación que nos indiques. Si no hay ascensor o el mueble no cabe, sube por la escalera protegido.' },
        { pregunta: '¿Necesito reservar sitio para aparcar?', respuesta: 'Para un porte con furgoneta normalmente no. Usamos las zonas de carga y descarga o paramos el tiempo justo. La reserva de espacio se plantea con vehículos grandes o elevadores.' },
        { pregunta: '¿Qué pasa si el mueble no entra por la puerta?', respuesta: 'Antes de forzar nada, valoramos si se puede desmontar. Si no es posible, te lo decimos y buscamos una alternativa, como subirlo por fachada con elevador.' },
        { pregunta: '¿Hacéis portes de una sola caja o un electrodoméstico?', respuesta: 'Sí. Un frigorífico, una lavadora o unas cajas también son un porte. Indícanos si hay que retirar el aparato viejo.' },
        { pregunta: '¿Cuánto dura un porte normal en Chamberí?', respuesta: 'Muchos se hacen en menos de dos horas, que es lo que cubre la tarifa de partida. Si hay varias paradas o pisos altos sin ascensor, se calcula por horas.' },
      ],
    },

    /* ============================ OFICINAS ============================ */
    'mudanzas-oficinas': {
      gancho: 'Despachos en pisos antiguos y oficinas junto a la Castellana.',
      intro: [
        'En Chamberí conviven dos tipos de oficina muy distintos: los despachos profesionales instalados en pisos de fincas clásicas, sobre todo en Almagro y alrededor de la Castellana, y las oficinas en edificios de uso terciario de Ríos Rosas y el entorno de Nuevos Ministerios. Cada uno pide una forma de trabajar diferente.',
        'Te explicamos cómo organizamos un traslado de oficina en el distrito sin que tu equipo pierda más tiempo del necesario.',
      ],
      zona: [
        {
          titulo: 'Despachos en viviendas reconvertidas',
          parrafos: [
            'Muchos abogados, arquitectos, consultas médicas y gestorías ocupan pisos amplios de fincas del Ensanche. Por dentro tienen pasillos largos, puertas de altura generosa y, a veces, archivos pesados en habitaciones interiores. La salida, en cambio, es la de una vivienda: portal con escalera y ascensor pequeño. Los archivadores metálicos y las mesas grandes se desmontan o bajan por la escalera.',
          ],
        },
        {
          titulo: 'Edificios de oficinas',
          parrafos: [
            'En los edificios terciarios cercanos a la Castellana y Raimundo Fernández Villaverde suele haber montacargas, muelle o garaje, y normas de la propiedad sobre horarios de mudanza y protección de ascensores. Conviene pedir esas normas al administrador con tiempo: a veces solo permiten traslados por la tarde o en fin de semana.',
          ],
        },
        {
          titulo: 'Tráfico y horarios en el distrito',
          parrafos: [
            'Las calles principales tienen mucho tráfico en horario laboral y el distrito entero está en zona de estacionamiento regulado. Para una oficina mediana, cargar al final de la tarde o en sábado reduce esperas y permite usar el vehículo adecuado. Si el camión supera los 3.500 kilos, hay que pedir al Ayuntamiento la autorización para ocupar la vía pública.',
            'Si el traslado es entre dos puntos del distrito, la distancia es corta, pero el tiempo se va en cargar y descargar, no en el trayecto.',
          ],
        },
        {
          titulo: 'Consejos para que el lunes funcione',
          parrafos: [
            'Nombra a una persona de tu equipo como contacto, pide que cada puesto vacíe cajones y etiquete su material, y separa el archivo que se traslada del que se destruye. Avisa al proveedor de internet con antelación: lo que más retrasa la vuelta al trabajo no suele ser la mudanza, sino la conexión.',
          ],
        },
        {
          titulo: 'Dónde están las oficinas del distrito',
          parrafos: [
            'Almagro y las calles que bajan hacia la Castellana reúnen buena parte de los despachos profesionales, muchos en el primer o segundo piso de fincas residenciales. Ríos Rosas, en el límite con Nuevos Ministerios, tiene más edificios de oficinas propiamente dichos. Vallehermoso y Arapiles, en cambio, son sobre todo residenciales, con consultas y pequeños estudios a pie de calle. Saber en cuál de estos tres casos está tu oficina nos dice casi todo sobre el acceso.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Visita a la oficina', texto: 'Vemos puestos, archivo, equipos y accesos en origen y destino, y las normas de cada edificio.' },
        { titulo: 'Plan por fases', texto: 'Proponemos el orden del traslado y el horario, para que la actividad se interrumpa lo mínimo.' },
        { titulo: 'Embalaje y etiquetas', texto: 'Cada puesto recibe cajas y etiquetas; embalamos equipos y archivo y desmontamos el mobiliario.' },
        { titulo: 'Traslado fuera de horas', texto: 'Si lo prefieres, cargamos por la tarde o en fin de semana, cuando las calles de Chamberí están más despejadas.' },
        { titulo: 'Montaje por puestos', texto: 'Montamos mesas y estanterías y dejamos cada caja en el puesto que le corresponde.' },
      ],
      incluye: [
        'El etiquetado por puesto es la diferencia entre una oficina que funciona al día siguiente y una semana de cajas sin abrir. En los despachos de pisos antiguos, además, marcamos qué pieza va a cada sala, porque las distribuciones suelen ser irregulares.',
      ],
      precio: [
        'Un despacho de pocos puestos en un piso con ascensor pequeño puede costar más por puesto que una oficina diáfana con montacargas, porque el archivo y los muebles bajan por la escalera. Con la visita lo concretamos.',
      ],
      faqs: [
        { pregunta: '¿Podéis trasladar la oficina un fin de semana?', respuesta: 'Sí. En Chamberí es habitual hacerlo en sábado o al final de la tarde para no interrumpir la actividad y encontrar menos tráfico.' },
        { pregunta: '¿Qué hacéis con los archivadores metálicos?', respuesta: 'Se vacían en cajas numeradas y el mueble se baja vacío, protegido. Si el ascensor es pequeño, por la escalera. Luego se vuelve a llenar en el mismo orden.' },
        { pregunta: '¿Necesito permiso del edificio de oficinas?', respuesta: 'Muchos edificios terciarios tienen normas sobre horarios, uso del montacargas y protección de zonas comunes. Pídelas al administrador: con ellas preparamos el plan.' },
        { pregunta: '¿Trasladáis ordenadores y servidores?', respuesta: 'Embalamos y trasladamos los equipos. La desconexión y la configuración informática corren a cargo de tu proveedor o tu equipo técnico.' },
        { pregunta: '¿Se puede guardar parte del mobiliario?', respuesta: 'Sí. Si la nueva oficina es más pequeña, podemos llevar lo que sobra a un guardamuebles hasta que decidas qué hacer con ello.' },
        { pregunta: '¿Cuánto dura el traslado de un despacho de cinco personas?', respuesta: 'Con el embalaje hecho, suele resolverse en una jornada. Depende del archivo y del acceso; lo concretamos tras la visita.' },
        { pregunta: '¿Podéis trasladar solo una parte de la oficina?', respuesta: 'Sí. Si os mudáis por fases o solo cambia un departamento, planificamos cada traslado por separado y dejamos etiquetado lo que se queda.' },
      ],
    },

    /* ============================ GUARDAMUEBLES ============================ */
    guardamuebles: {
      gancho: 'Para reformas de fincas y mudanzas sin fecha cerrada.',
      intro: [
        'En Chamberí se reforman muchos pisos: instalaciones antiguas, cocinas de otra época y baños que piden obra. Mientras dura la reforma, los muebles estorban y se llenan de polvo. Un guardamuebles resuelve ese hueco, igual que cuando vendes un piso antes de tener las llaves del siguiente.',
        'Te explicamos cómo funciona el servicio desde el distrito: recogida en tu finca, almacenaje y vuelta cuando la obra termine.',
      ],
      zona: [
        {
          titulo: 'Reformas en fincas del Ensanche',
          parrafos: [
            'Las fincas de finales del XIX y principios del XX suelen necesitar reformas profundas: suelos, electricidad, fontanería. Son obras que duran semanas o meses y en las que es mejor que el piso esté vacío. Además, muchas comunidades piden que los materiales y escombros entren y salgan en horarios concretos, y conviene coordinar la salida de los muebles antes de que llegue la obra.',
          ],
        },
        {
          titulo: 'Cómo sacamos los muebles de un piso antiguo',
          parrafos: [
            'La recogida tiene las mismas condiciones que una mudanza: ascensor pequeño, escalera amplia y portal que hay que proteger. Para guardar, además, embalamos pensando en el tiempo: los sofás se envuelven completos, los colchones van en funda y las piezas de madera se protegen de roces.',
            'Si en tu finca no hay ascensor o el ascensor es estrecho, lo contamos al preparar el presupuesto, porque afecta a cuánto se tarda en vaciar el piso.',
          ],
        },
        {
          titulo: 'Aparcamiento y horario de recogida',
          parrafos: [
            'El distrito está dentro del estacionamiento regulado y la carga y descarga se llena pronto. Para recoger el contenido de un piso entero solemos necesitar un camión, y si supera los 3.500 kilos el Ayuntamiento pide autorización para ocupar la vía. Para una parte de los muebles, una furgoneta basta.',
          ],
        },
        {
          titulo: 'Consejos antes de guardar',
          parrafos: [
            'Separa lo que vas a necesitar durante la obra, como ropa de temporada o documentación, porque sacarlo del guardamuebles a mitad de la reforma es posible pero cuesta un viaje. Haz fotos de los muebles que se desmontan y guarda los tornillos en bolsas marcadas: nosotros lo hacemos, pero viene bien tener tu propia referencia.',
          ],
        },
        {
          titulo: 'Cuándo tiene sentido en Chamberí',
          parrafos: [
            'Además de las reformas, hay otros casos frecuentes en el distrito: pisos de alquiler que se entregan antes de tener la siguiente casa, herencias en las que la familia aún no ha decidido qué hacer con los muebles y personas que se van una temporada fuera de Madrid. En todos ellos, guardar lo que tiene valor o uso evita deshacerse de cosas con prisas y permite tomar decisiones con calma, sin pagar un piso más grande solo para almacenar.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Cuánto vas a guardar', texto: 'Nos dices qué muebles y cuántas cajas, y durante cuánto tiempo aproximado. Si hay duda, lo vemos en el piso.' },
        { titulo: 'Recogida en tu finca', texto: 'Protegemos el portal, desmontamos lo necesario y cargamos en el vehículo adecuado para tu calle.' },
        { titulo: 'Embalaje para el tiempo', texto: 'Envolvemos cada pieza pensando en semanas o meses de almacenaje, no solo en el trayecto.' },
        { titulo: 'Inventario', texto: 'Te damos la lista de lo que se guarda, para que sepas qué hay y puedas pedir algo concreto.' },
        { titulo: 'Entrega al terminar', texto: 'Cuando acaba la obra, lo llevamos de vuelta y montamos lo que se desmontó.' },
      ],
      incluye: [
        'La entrega puede hacerse en el mismo piso reformado o en otra dirección. Si cambias de casa durante la reforma, solo tienes que decirnos el nuevo destino.',
      ],
      precio: [
        'El alquiler del espacio depende del volumen que guardes, y la recogida y la entrega se calculan como una mudanza, con las condiciones de acceso de tu finca. Un piso con ascensor amplio sale más económico de vaciar que uno sin ascensor.',
      ],
      faqs: [
        { pregunta: '¿Puedo guardar los muebles mientras reformo mi piso en Chamberí?', respuesta: 'Sí, es uno de los usos más habituales. Recogemos antes de que empiece la obra y los devolvemos cuando termina.' },
        { pregunta: '¿Puedo sacar algo del guardamuebles a mitad de la reforma?', respuesta: 'Sí. Con el inventario puedes pedir piezas concretas. Ese viaje se presupuesta aparte.' },
        { pregunta: '¿Cómo se protegen los muebles durante meses?', respuesta: 'Se embalan completos, se apoyan sin peso encima y los colchones van en funda. Las piezas de madera se protegen de roces.' },
        { pregunta: '¿Hace falta camión para recoger?', respuesta: 'Para un piso completo, normalmente sí; para algunos muebles, basta una furgoneta. Si el camión necesita reservar espacio en la calle, te lo indicamos.' },
        { pregunta: '¿Lo podéis llevar luego a otra dirección?', respuesta: 'Sí. La entrega puede ser en tu piso de Chamberí o en la nueva vivienda, dentro o fuera de Madrid.' },
        { pregunta: '¿Hay un tiempo mínimo de almacenaje?', respuesta: 'Te lo indicamos al presupuestar según el espacio. Lo habitual es contratar por meses.' },
        { pregunta: '¿Puedo guardar solo unas cajas y algunos muebles?', respuesta: 'Sí. El espacio se ajusta a lo que guardas, desde unas pocas piezas hasta el contenido de un piso entero.' },
      ],
    },

    /* ============================ EMBALAJE ============================ */
    embalaje: {
      gancho: 'Vajillas, libros y lámparas de pisos con historia.',
      intro: [
        'Los pisos de Chamberí suelen guardar más cosas de las que parece: bibliotecas que ocupan pasillos enteros, vajillas heredadas, lámparas de techo antiguas y cuadros. Embalarlo bien es lo que hace que todo llegue igual que salió, y es también lo que más tiempo le quita a quien se muda por su cuenta.',
        'Te contamos cómo embalamos en el distrito y por qué en una finca antigua conviene pensar el embalaje junto con el acceso.',
      ],
      zona: [
        {
          titulo: 'Lo que suele haber en un piso del distrito',
          parrafos: [
            'En Almagro, Trafalgar o Gaztambide es habitual encontrar libros por cientos, muebles de madera maciza con vitrinas, espejos grandes y lámparas de varios brazos. También hay muchos pisos de alquiler más pequeños, con menos volumen pero muy aprovechados, donde cada armario va lleno hasta arriba.',
          ],
        },
        {
          titulo: 'Embalar pensando en la escalera',
          parrafos: [
            'Cuando el ascensor es pequeño, buena parte de las cajas baja a mano por la escalera. Por eso hacemos cajas que una persona pueda llevar con seguridad: los libros van en cajas pequeñas aunque quepan más en una grande, y lo frágil nunca va en una caja que tenga que soportar peso encima.',
            'Los cuadros y espejos se protegen con cantoneras y cartón, porque en los giros de los descansillos es donde se dan los golpes.',
          ],
        },
        {
          titulo: 'Tiempo y espacio en la calle',
          parrafos: [
            'Un embalaje bien hecho acorta el día de la mudanza: el camión pasa menos tiempo parado, algo importante en un distrito con aparcamiento regulado y calles de un carril. Por eso solemos embalar uno o dos días antes y dejar el día de la mudanza solo para cargar.',
          ],
        },
        {
          titulo: 'Qué puedes hacer tú',
          parrafos: [
            'Aparta lo que no vas a llevar y decide qué ropa usarás esos días. Si tienes documentos importantes, joyas o medicación, llévalos tú. Y si hay piezas con valor sentimental, señálanoslas: les damos un embalaje aparte y van en un lugar seguro del vehículo.',
          ],
        },
        {
          titulo: 'Pisos pequeños de alquiler',
          parrafos: [
            'No todo en Chamberí son pisos señoriales. En Trafalgar, Arapiles y Gaztambide hay muchos pisos de una o dos habitaciones, reformados para alquilar, con armarios empotrados llenos y cocinas muy aprovechadas. Ahí el embalaje es más rápido, pero hay que ser ordenado: cada caja con su habitación y lo de uso diario en una caja aparte, que se abre la primera noche. Para estos pisos solemos proponer embalar solo la cocina y lo frágil, y que tú prepares la ropa y los libros.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Cuánto hay que embalar', texto: 'Recorremos el piso, en persona o por fotos, para calcular cajas y materiales.' },
        { titulo: 'Materiales al piso', texto: 'Llevamos cajas reforzadas de varios tamaños, papel, burbujas, mantas y cantoneras.' },
        { titulo: 'Embalaje por habitaciones', texto: 'Cada caja lleva la habitación de destino y si contiene algo frágil.' },
        { titulo: 'Piezas especiales', texto: 'Cuadros, espejos, lámparas y vajillas reciben protección a medida.' },
        { titulo: 'Desembalaje si lo pides', texto: 'En destino podemos abrir las cajas y retirar el material.' },
      ],
      incluye: [
        'En los pisos con lámparas antiguas de techo, las desmontamos y embalamos con cuidado; si hay que manipular la instalación eléctrica, lo hace un electricista, no el equipo de mudanza.',
      ],
      precio: [
        'El precio del embalaje depende sobre todo del volumen y de cuánto frágil haya. Una biblioteca grande o una vajilla completa suman más horas que un piso con pocos objetos. Si prefieres embalar tú, también podemos llevarte solo las cajas.',
      ],
      faqs: [
        { pregunta: '¿Cuándo embaláis, el mismo día o antes?', respuesta: 'Para pisos con mucho contenido, uno o dos días antes. Así el día de la mudanza el camión está menos tiempo parado en la calle.' },
        { pregunta: '¿Cómo embaláis una biblioteca grande?', respuesta: 'En cajas pequeñas que una persona pueda bajar por la escalera sin riesgo, numeradas en el orden de las estanterías para que sea fácil colocarla después.' },
        { pregunta: '¿Desmontáis lámparas de techo?', respuesta: 'Desmontamos y embalamos la lámpara. Si hay que tocar la instalación eléctrica, debe hacerlo un electricista.' },
        { pregunta: '¿Puedo comprar solo las cajas?', respuesta: 'Sí. Te llevamos cajas reforzadas y material y tú embalas. Cada caja tiene un precio orientativo de 2 a 4 euros.' },
        { pregunta: '¿Qué pasa con los objetos de valor?', respuesta: 'Te recomendamos llevar tú joyas, documentos y dinero. Las piezas con valor sentimental se embalan aparte y se señalan.' },
        { pregunta: '¿Retiráis el material al terminar?', respuesta: 'Si contratas el desembalaje, sí. Si desembalas tú, puedes reciclar las cajas o pedirnos que las recojamos.' },
        { pregunta: '¿Podéis embalar solo la cocina y lo frágil?', respuesta: 'Sí. Es una opción habitual en pisos pequeños: embalamos menaje, cristalería y objetos delicados, y tú preparas la ropa y los libros.' },
        { pregunta: '¿Qué cajas usáis para la ropa de los armarios?', respuesta: 'Podemos llevar cajas grandes para ropa doblada. Si prefieres que la ropa colgada viaje en percha, dínoslo y lo preparamos.' },
      ],
    },

    /* ============================ MONTAJE ============================ */
    'montaje-muebles': {
      gancho: 'Armarios que no pasan por escaleras de fincas antiguas.',
      intro: [
        'En Chamberí el desmontaje no es un extra opcional: muchas veces es la única forma de sacar un armario o una cama de un piso antiguo. Las escaleras tienen giros cerrados y los ascensores son pequeños, así que lo que no se desmonta, a menudo no sale.',
        'Te contamos qué muebles desmontamos, cómo cuidamos los herrajes y cómo los dejamos montados en la nueva casa el mismo día.',
      ],
      zona: [
        {
          titulo: 'Muebles grandes en pisos de techos altos',
          parrafos: [
            'Los pisos del Ensanche tienen techos altos, y eso invita a armarios de gran altura, librerías de suelo a techo y camarotes. Se montaron dentro y casi nunca salen enteros. Lo mismo pasa con muchos muebles de cadena que se montaron en el propio dormitorio.',
          ],
        },
        {
          titulo: 'Escaleras con giros y descansillos',
          parrafos: [
            'La escalera central típica de una finca del distrito es amplia en los tramos rectos, pero en los descansillos gira y la barandilla limita. Un armario de dos metros puede no girar aunque pase por la puerta del piso. Por eso medimos los puntos críticos antes de decidir qué se desmonta.',
            'En edificios con ascensor pequeño, desmontar permite además bajar más piezas en ascensor y menos por la escalera.',
          ],
        },
        {
          titulo: 'Muebles antiguos y de diseño',
          parrafos: [
            'En el distrito abundan los muebles de madera maciza con ensamblajes antiguos y también los de diseño actual con herrajes ocultos. Los primeros se desmontan con cuidado para no forzar espigas ni colas; los segundos necesitan herramientas concretas. Si tienes las instrucciones de montaje, guárdalas.',
          ],
        },
        {
          titulo: 'Consejos',
          parrafos: [
            'Vacía armarios y cajones antes del día de la mudanza y despeja el espacio alrededor de los muebles grandes. Si en el piso nuevo vas a cambiar la distribución, dinos dónde va cada mueble: montarlo en su sitio definitivo evita moverlo dos veces.',
          ],
        },
        {
          titulo: 'Cuando el piso de destino también es antiguo',
          parrafos: [
            'Es frecuente mudarse de una finca del distrito a otra de la misma época, en Chamberí o en barrios vecinos como Salamanca o Malasaña. Entonces el montaje tiene sus propias dificultades: paredes que no están a escuadra, suelos de madera con desnivel y rodapiés altos que obligan a separar los muebles de la pared. Nivelamos cada pieza con calma y, si un armario alto no entra en la habitación nueva por el ángulo de la puerta, lo montamos dentro, igual que estaba en el piso de origen.',
          ],
        },
        {
          titulo: 'Herramientas y piezas',
          parrafos: [
            'No necesitas tener nada en casa: llevamos herramientas y la tornillería habitual. Lo que sí ayuda es conservar las piezas originales de cada mueble. Si un armario de cadena ha perdido algún herraje con los años, algo común en pisos que se han amueblado poco a poco, te lo decimos antes de montarlo para buscar una pieza equivalente.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Lista de muebles', texto: 'Nos dices qué muebles hay que desmontar y montar, con una foto de cada uno si es posible.' },
        { titulo: 'Medidas de paso', texto: 'Comprobamos puertas, giros de escalera y ascensor para decidir qué sale entero.' },
        { titulo: 'Desmontaje ordenado', texto: 'Cada mueble se desmonta con sus piezas marcadas y sus herrajes en una bolsa con nombre.' },
        { titulo: 'Traslado protegido', texto: 'Tableros y puertas viajan envueltos y apoyados de canto para no deformarse.' },
        { titulo: 'Montaje en destino', texto: 'Montamos en la habitación definitiva, nivelamos y comprobamos puertas y cajones.' },
      ],
      incluye: [
        'Si un mueble necesita anclarse a la pared, lo dejamos indicado. En pisos con tabiques antiguos de ladrillo o yeso conviene revisar el tipo de pared antes de taladrar.',
      ],
      precio: [
        'Cada mueble se presupuesta según su complejidad: una cama sencilla no es lo mismo que un armario de seis puertas con altillo. En pisos sin ascensor, desmontar suele abaratar el total, porque las piezas bajan más rápido que un mueble entero.',
      ],
      faqs: [
        { pregunta: '¿Podéis desmontar un armario que se montó dentro del dormitorio?', respuesta: 'Sí. Es lo más habitual en Chamberí: muchos armarios se montaron en la habitación y no salen enteros por la escalera.' },
        { pregunta: '¿Se pierden piezas al desmontar?', respuesta: 'Marcamos cada pieza y guardamos los herrajes en bolsas con el nombre del mueble. Así el montaje es exacto.' },
        { pregunta: '¿Montáis muebles nuevos que aún están en caja?', respuesta: 'Sí, también montamos muebles nuevos en tu vivienda, aunque no formen parte de una mudanza.' },
        { pregunta: '¿Desmontáis muebles antiguos de madera maciza?', respuesta: 'Sí, con cuidado de no forzar ensamblajes. Si una pieza es delicada, te lo comentamos antes de tocarla.' },
        { pregunta: '¿Colgáis cuadros o anclamos estanterías?', respuesta: 'Podemos valorarlo. En tabiques antiguos hay que revisar primero el tipo de pared.' },
        { pregunta: '¿El montaje es el mismo día de la mudanza?', respuesta: 'Sí, normalmente montamos todo al descargar. Si el piso de destino aún no está listo, se puede programar otro día.' },
        { pregunta: '¿Podéis montar un armario en una habitación con el suelo desnivelado?', respuesta: 'Sí. Usamos calzos y regulamos las patas para que quede nivelado y las puertas cierren bien.' },
        { pregunta: '¿Desmontáis también somieres y canapés?', respuesta: 'Sí. Los canapés abatibles y los somieres de láminas se desmontan para pasar por la escalera y se montan en la nueva habitación.' },
      ],
    },

    /* ============================ URGENTES ============================ */
    'mudanzas-urgentes': {
      gancho: 'Cuando la fecha aprieta en un distrito con poco hueco.',
      intro: [
        'Una mudanza urgente en Chamberí suele llegar por un contrato de alquiler que termina antes de lo previsto, una venta que se firma deprisa o una obra que obliga a salir. Con poco margen, lo que más importa es resolver bien el acceso a la finca y el aparcamiento, porque no hay tiempo para pedir permisos largos.',
        'Aquí te explicamos cómo organizamos una mudanza con prisa en el distrito y qué decisiones conviene tomar rápido.',
      ],
      zona: [
        {
          titulo: 'El permiso no espera',
          parrafos: [
            'Para una mudanza puntual con camión grande o elevador, el Ayuntamiento de Madrid pide solicitar la ocupación de la vía pública con antelación. Si la fecha no da para tramitarlo, la solución suele ser cambiar de vehículo: una o dos furgonetas que no necesitan reserva y pueden parar en carga y descarga. Más viajes, pero sin depender del permiso.',
          ],
        },
        {
          titulo: 'Fincas antiguas y poco tiempo',
          parrafos: [
            'En un piso con ascensor pequeño o sin ascensor, la carga es más lenta, y con prisa se compensa con más personas en el equipo. Lo que no conviene acelerar es la protección del portal y de las barandillas: un desperfecto en zonas comunes complica la salida más que media hora de trabajo.',
            'Si no da tiempo a embalar, embalamos nosotros lo imprescindible y el resto va en cajas que preparamos sobre la marcha.',
          ],
        },
        {
          titulo: 'Dónde aparcar con prisa',
          parrafos: [
            'Todo el distrito tiene estacionamiento regulado. Sin reserva, la carga y descarga a primera hora es la mejor opción. En calles muy comerciales, como Fuencarral o Bravo Murillo, conviene evitar las horas de reparto.',
          ],
        },
        {
          titulo: 'Si la nueva casa no está lista',
          parrafos: [
            'Es frecuente tener que salir antes de poder entrar. Un guardamuebles temporal resuelve ese desfase: sacamos todo de tu piso de Chamberí y lo entregamos cuando tengas las llaves.',
          ],
        },
        {
          titulo: 'Lo que conviene decidir en la primera hora',
          parrafos: [
            'Con una fecha encima, cada decisión retrasada se nota. Lo más útil es tener claro cuanto antes tres cosas: si el destino está disponible el mismo día, qué muebles grandes van y cuáles no, y si alguien de la comunidad debe saberlo para dejar libre el ascensor o el portal. Con esas respuestas podemos cerrar el número de vehículos y de personas, que es lo que más cuesta conseguir con poco margen en un distrito tan céntrico.',
          ],
        },
        {
          titulo: 'Si la entrega de llaves se retrasa',
          parrafos: [
            'Con prisa es habitual que la hora de las llaves se mueva. Si ocurre, avísanos en cuanto lo sepas: podemos esperar con la carga hecha o llevarla ese mismo día a un guardamuebles y entregarla en cuanto tengas acceso, sin repetir el trabajo de carga en Chamberí.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Escríbenos por WhatsApp', texto: 'Con fecha, direcciones, plantas y una idea del volumen te respondemos para cerrar el plan.' },
        { titulo: 'Vehículo sin esperas', texto: 'Si no hay tiempo para permisos, usamos furgonetas que no necesitan reserva.' },
        { titulo: 'Equipo reforzado', texto: 'Más operarios para compensar las escaleras y el ascensor pequeño.' },
        { titulo: 'Embalaje exprés', texto: 'Embalamos lo que falte el mismo día, priorizando lo frágil.' },
        { titulo: 'Entrega o guardamuebles', texto: 'Llevamos todo al destino o, si no está listo, a un guardamuebles.' },
      ],
      incluye: [
        'En una mudanza urgente dejamos por escrito qué se hace y a qué hora, aunque el plazo sea corto. Con prisa es cuando más falta hace tener las cosas claras.',
      ],
      precio: [
        'La urgencia suma un porcentaje al precio normal, y en Chamberí el acceso pesa tanto como el volumen. Hacer más viajes en furgoneta en lugar de un camión con permiso puede cambiar el total; te explicamos las dos opciones si las hay.',
      ],
      faqs: [
        { pregunta: '¿Podéis hacer una mudanza en Chamberí en 24 o 48 horas?', respuesta: 'Depende de la disponibilidad y del volumen. Escríbenos por WhatsApp con los datos y te decimos si es posible y cómo.' },
        { pregunta: '¿Da tiempo a pedir el permiso de aparcamiento?', respuesta: 'Normalmente no, porque el trámite pide antelación. Por eso en mudanzas urgentes solemos usar vehículos que no necesitan reserva.' },
        { pregunta: '¿Embaláis vosotros si no me da tiempo?', respuesta: 'Sí. Llevamos material y embalamos lo que falte, empezando por lo frágil.' },
        { pregunta: '¿Y si no tengo todavía la nueva casa?', respuesta: 'Podemos guardar tus cosas en un guardamuebles y entregarlas cuando tengas las llaves.' },
        { pregunta: '¿Cuánto más cuesta una mudanza urgente?', respuesta: 'Un recargo sobre el precio normal, que te indicamos en el presupuesto. Depende del plazo y del equipo que haga falta.' },
        { pregunta: '¿Trabajáis en fin de semana?', respuesta: 'Podemos valorarlo según la disponibilidad. En Chamberí, el fin de semana suele haber menos tráfico.' },
        { pregunta: '¿Qué necesitáis saber para darme precio rápido?', respuesta: 'Las dos direcciones, la planta y si hay ascensor en cada una, una idea del volumen o unas fotos y la fecha límite.' },
        { pregunta: '¿Podéis mover solo lo imprescindible primero y el resto otro día?', respuesta: 'Sí. A veces es la mejor opción: un primer viaje con lo necesario para vivir y un segundo, con calma, con lo demás.' },
      ],
    },

    /* ============================ VACIADO ============================ */
    'vaciado-pisos': {
      gancho: 'Herencias, ventas y pisos de renta antigua por vaciar.',
      intro: [
        'Muchos pisos de Chamberí han sido el hogar de una misma familia durante décadas. Cuando toca venderlo, alquilarlo o devolverlo, hay que vaciar armarios llenos, trasteros, cuartos de servicio y a veces un altillo que nadie abría. Es un trabajo físico y también emocional.',
        'Te explicamos cómo hacemos un vaciado en el distrito: qué se guarda, qué se traslada y qué se retira, con calma y sin dejar nada a medias.',
      ],
      zona: [
        {
          titulo: 'Pisos con décadas de vida',
          parrafos: [
            'En las fincas del Ensanche es habitual encontrar pisos amplios con habitaciones interiores, despensas y cuartos de servicio llenos de muebles y objetos acumulados durante años. También hay trasteros en sótanos o buhardillas, a los que se llega por escaleras estrechas. Todo eso cuenta en el volumen real.',
          ],
        },
        {
          titulo: 'Separar antes de sacar',
          parrafos: [
            'Antes de retirar nada, recorremos el piso contigo o con quien decida la familia y separamos tres grupos: lo que se queda alguien, lo que se traslada a otra vivienda o a un guardamuebles y lo que se retira. En un vaciado por herencia, esta parte necesita su tiempo y no conviene hacerla con el camión en la puerta.',
          ],
        },
        {
          titulo: 'Acceso y calle',
          parrafos: [
            'La salida es la de cualquier mudanza del distrito: escalera central, ascensor pequeño y calle con aparcamiento regulado. Si el vaciado necesita un camión grande, se plantea la autorización para ocupar la vía pública; si se hace en varias furgonetas, no suele hacer falta.',
            'Para muebles muy voluminosos que no pasan por la escalera, a veces es más sencillo desmontarlos en piezas.',
          ],
        },
        {
          titulo: 'Consejos para las familias',
          parrafos: [
            'Revisad bolsillos, cajones y libros antes de dar algo por retirado: es donde aparecen documentos y fotos. Si hay muebles con posible valor, consultadlo antes. Y si el piso se va a vender, dejarlo vacío y barrido ayuda en las visitas.',
          ],
        },
        {
          titulo: 'Pisos que llevan tiempo cerrados',
          parrafos: [
            'En el distrito no es raro vaciar un piso que lleva meses o años sin habitar. Conviene revisar antes si la luz sigue dada de alta, porque trabajar en habitaciones interiores sin iluminación alarga mucho la tarea, y si hay humedades o muebles deteriorados que no aguantan un traslado. También es buen momento para recoger el correo acumulado y comprobar si la comunidad tiene normas sobre el uso del ascensor para sacar muebles.',
          ],
        },
        {
          titulo: 'Buhardillas, cuartos de servicio y constancia por escrito',
          parrafos: [
            'En las fincas antiguas los cuartos de servicio y las buhardillas suelen estar en la última planta o en el sótano, con escaleras estrechas, y los incluimos en el cálculo de tiempo. Al terminar, te dejamos por escrito qué se ha retirado y adónde ha ido lo que se conserva, algo útil cuando varios herederos necesitan estar al tanto.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Visita al piso', texto: 'Vemos volumen, trastero, accesos y lo que la familia quiere conservar.' },
        { titulo: 'Tres grupos', texto: 'Se marca qué se guarda, qué se traslada y qué se retira.' },
        { titulo: 'Traslado de lo que se conserva', texto: 'Lo que se queda alguien va a su casa o a un guardamuebles.' },
        { titulo: 'Retirada del resto', texto: 'Sacamos muebles y enseres protegiendo portal y escalera.' },
        { titulo: 'Piso listo', texto: 'Dejamos el piso vacío y barrido para entregarlo o enseñarlo.' },
      ],
      incluye: [
        'El trastero y el cuarto de servicio se incluyen si nos lo dices desde el principio. En muchas fincas del distrito son lo que más volumen esconde.',
      ],
      precio: [
        'El precio depende del volumen y del acceso: un piso de cuatro habitaciones con trastero en una finca sin ascensor está en la parte alta del rango. Si parte de lo que hay se traslada, se suma como una mudanza.',
      ],
      faqs: [
        { pregunta: '¿Vaciáis pisos por herencia en Chamberí?', respuesta: 'Sí. Es uno de los encargos más habituales en el distrito. Trabajamos con la familia para separar lo que se conserva antes de retirar nada.' },
        { pregunta: '¿Podéis llevar parte de los muebles a casa de un familiar?', respuesta: 'Sí. Lo que se conserva se traslada a la dirección que nos digáis o a un guardamuebles.' },
        { pregunta: '¿Incluye el trastero?', respuesta: 'Sí, si nos lo indicas al pedir presupuesto. En muchas fincas el trastero está en el sótano o en la buhardilla y lo tenemos en cuenta.' },
        { pregunta: '¿Dejáis el piso limpio?', respuesta: 'Lo dejamos vacío y barrido. Una limpieza a fondo es otro servicio.' },
        { pregunta: '¿Cuánto tarda un vaciado?', respuesta: 'Un piso mediano suele hacerse en una o dos jornadas, según el volumen y la planta.' },
        { pregunta: '¿Tengo que estar presente?', respuesta: 'Conviene que alguien de la familia esté al principio, para confirmar qué se conserva. Después podemos trabajar con las llaves.' },
        { pregunta: '¿Podéis vaciar un piso que lleva años cerrado?', respuesta: 'Sí. Recomendamos comprobar antes que haya luz en la vivienda y avisar a la comunidad del día en que se hará.' },
        { pregunta: '¿Qué hacéis con los muebles que nadie quiere?', respuesta: 'Los retiramos del piso. Si alguno puede tener una segunda vida, te lo comentamos antes por si prefieres donarlo o venderlo.' },
      ],
    },

    /* ============================ PERSONAS MAYORES ============================ */
    'mudanzas-personas-mayores': {
      gancho: 'Del piso de toda la vida a una casa más cómoda.',
      intro: [
        'En Chamberí vive mucha gente que lleva décadas en el mismo piso, a menudo en fincas sin ascensor o con un ascensor que se queda corto. Cuando llega el momento de mudarse a una vivienda más accesible, a casa de un hijo o a una residencia, la mudanza tiene que ir al ritmo de la persona, no del camión.',
        'Te contamos cómo la organizamos para que sea tranquila, ordenada y con una sola persona de contacto para la familia.',
      ],
      zona: [
        {
          titulo: 'Pisos grandes, vidas largas',
          parrafos: [
            'Los pisos del Ensanche suelen ser amplios y guardan muchos años de recuerdos. Elegir qué se lleva a una casa más pequeña es la parte más delicada, y conviene hacerlo antes del día de la mudanza, sin prisas y con la familia presente si la persona lo desea.',
          ],
        },
        {
          titulo: 'Escaleras y accesos pensados para la persona',
          parrafos: [
            'Si la finca no tiene ascensor o es pequeño, organizamos la mudanza para que la persona no tenga que subir y bajar ni esperar en el portal. Lo ideal es que esté fuera durante la carga, con un familiar, y llegue a la nueva casa cuando ya esté lo básico montado.',
            'En el destino, si es una residencia, preguntamos antes el horario de entrada de muebles y el espacio disponible en la habitación.',
          ],
        },
        {
          titulo: 'La calle y el vehículo',
          parrafos: [
            'En el distrito el aparcamiento está regulado y las calles son estrechas. Para una mudanza a una vivienda pequeña o a una residencia, una furgoneta suele bastar y puede parar cerca del portal, lo que acorta los tiempos.',
          ],
        },
        {
          titulo: 'Consejos para la familia',
          parrafos: [
            'Haced una lista de lo imprescindible para la primera noche: medicación, gafas, ropa, objetos personales y la cama. Fotografiad cómo estaban los muebles y los cuadros en el piso antiguo: reproducir algo de ese orden ayuda a sentirse en casa.',
          ],
        },
        {
          titulo: 'El día de la mudanza, paso a paso para la persona',
          parrafos: [
            'Funciona bien que la persona mayor deje el piso por la mañana, acompañada, y vuelva a ver la nueva casa por la tarde, cuando ya están la cama hecha, la ropa en el armario y sus objetos de siempre a la vista. Así no vive las horas de carga, que en una finca de Chamberí sin ascensor pueden ser largas y ruidosas. Si prefiere quedarse, le reservamos una habitación tranquila que se vacía la última.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Visita sin prisas', texto: 'Hablamos con la persona y la familia, vemos el piso y lo que se quiere llevar.' },
        { titulo: 'Qué se lleva y qué no', texto: 'Separamos lo que va a la nueva casa, lo que se queda la familia y lo que se retira.' },
        { titulo: 'Embalaje completo', texto: 'Embalamos nosotros, para que la persona no tenga que cargar nada.' },
        { titulo: 'Mudanza sin esperas', texto: 'Cargamos mientras la persona está acompañada fuera del piso.' },
        { titulo: 'Lo básico montado', texto: 'La cama, el armario y sus objetos personales quedan colocados el mismo día.' },
      ],
      incluye: [
        'Si parte de los muebles no caben en la nueva vivienda, podemos llevarlos a casa de un familiar o a un guardamuebles en el mismo viaje.',
      ],
      precio: [
        'El precio se calcula como una mudanza de piso más el embalaje completo, que en estas mudanzas casi siempre conviene. Una finca sin ascensor en Chamberí sube el tiempo de carga; una residencia con buen acceso lo baja.',
      ],
      faqs: [
        { pregunta: '¿Podéis tratar con los hijos en lugar de con la persona mayor?', respuesta: 'Sí. Una sola persona de contacto de nuestra parte habla con quien prefiráis, y la persona mayor participa en lo que quiera.' },
        { pregunta: '¿Lleváis muebles a una residencia?', respuesta: 'Sí. Antes preguntamos a la residencia el horario de entrada y el espacio de la habitación.' },
        { pregunta: '¿Tiene que estar la persona presente?', respuesta: 'No es necesario durante la carga. Recomendamos que esté acompañada fuera y llegue cuando lo básico esté montado.' },
        { pregunta: '¿Qué pasa con lo que no cabe en la nueva casa?', respuesta: 'Puede ir a casa de un familiar, a un guardamuebles o retirarse. Lo decidís vosotros.' },
        { pregunta: '¿Embaláis todo?', respuesta: 'Sí, si lo contratáis. Es lo que recomendamos para que la persona no tenga que cargar ni ordenar cajas.' },
        { pregunta: '¿Podéis colgar los cuadros en la nueva casa?', respuesta: 'Podemos valorarlo. Ayuda mucho a que la nueva vivienda se sienta propia desde el primer día.' },
        { pregunta: '¿Podéis dejar la cama hecha en la nueva casa?', respuesta: 'Podemos montarla y dejarla preparada con la ropa de cama que nos indiquéis, para que la primera noche sea cómoda.' },
        { pregunta: '¿Podéis llevar un sillón o una cama articulada?', respuesta: 'Sí. Los sillones relax y las camas articuladas se protegen y, si hace falta, se desmontan para pasar por la escalera de la finca. Dinos el modelo para preparar el traslado.' },
      ],
    },

    /* ============================ ELEVADOR ============================ */
    'subida-muebles-elevador': {
      gancho: 'Por el balcón cuando la escalera no deja pasar.',
      intro: [
        'Hay muebles que no entran en un piso de Chamberí por la escalera: un sofá de una pieza, un piano, un armario que no se desmonta. Las escaleras de las fincas antiguas giran en los descansillos y los ascensores son pequeños, así que la alternativa es subir por fuera, con un elevador apoyado en la fachada hasta un balcón o una ventana.',
        'Te explicamos cuándo tiene sentido, qué hace falta en el distrito y qué conviene comprobar antes.',
      ],
      zona: [
        {
          titulo: 'Fachadas con balcones',
          parrafos: [
            'Muchas fincas del Ensanche tienen balcones a la calle con puertas de altura generosa, lo que facilita entrar piezas grandes. Antes hay que comprobar el ancho del hueco, si hay barandilla fija y si el balcón da a la calle o a un patio interior, porque por un patio cerrado no se puede subir con elevador.',
          ],
        },
        {
          titulo: 'La calle manda',
          parrafos: [
            'El elevador necesita espacio en la acera o en la calzada, y en muchas calles del distrito hay coches aparcados a ambos lados, árboles y farolas. Lo valoramos antes: si no hay sitio para colocarlo con seguridad, buscamos otra opción.',
            'Todo Chamberí está dentro del estacionamiento regulado, así que el espacio no se improvisa.',
          ],
        },
        {
          titulo: 'Permiso municipal',
          parrafos: [
            'En Madrid, las mudanzas con vehículos montamuebles o elevadores necesitan autorización para ocupar la vía pública. Según la sede electrónica del Ayuntamiento, la solicitud de una mudanza puntual se presenta con antelación y lleva una tasa por el documento y otra por metro lineal y día ocupado. Consulta la ficha oficial antes de solicitarlo, porque las cifras se actualizan cada año.',
          ],
        },
        {
          titulo: 'Consejos antes de pedirlo',
          parrafos: [
            'Mide el mueble y el hueco del balcón o la ventana, incluida la altura libre. Avisa a la comunidad, porque durante la maniobra se ocupa la acera frente al portal. Y retira del balcón macetas y objetos que estorben.',
          ],
        },
        {
          titulo: 'Qué muebles suelen subir por fuera en el distrito',
          parrafos: [
            'En Chamberí lo más habitual es subir sofás de una pieza, colchones grandes, armarios que no se desmontan, mesas de comedor de madera maciza y algún piano. También electrodomésticos grandes cuando la cocina está al fondo de un pasillo estrecho. Si el mueble es nuevo, pregunta en la tienda si viene montado: muchos sofás modulares se pueden separar y subir por la escalera sin necesidad de elevador.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Fotos y medidas', texto: 'Del mueble, del hueco de entrada y de la calle frente al edificio.' },
        { titulo: 'Valoración de la fachada', texto: 'Comprobamos si el elevador puede colocarse con seguridad y a qué altura llega.' },
        { titulo: 'Permiso', texto: 'Te indicamos cuándo hace falta la autorización y con cuánta antelación pedirla.' },
        { titulo: 'Subida protegida', texto: 'El mueble sube envuelto y sujeto; protegemos el balcón y el suelo de entrada.' },
        { titulo: 'Colocación', texto: 'Una vez dentro, retiramos protecciones, montamos lo que venga en piezas y recogemos el material.' },
      ],
      incluye: [
        'En Chamberí a veces combinamos el elevador con una mudanza normal: lo pequeño va por la escalera y solo lo que no pasa sube por fuera, para usar el elevador el menor tiempo posible.',
      ],
      precio: [
        'Al precio del elevador se suma la tasa municipal cuando hace falta permiso, que depende de los metros y los días de ocupación. Si el mueble puede desmontarse y subir por la escalera, puede salir más económico; te lo decimos si es el caso.',
      ],
      faqs: [
        { pregunta: '¿Se puede subir un sofá por el balcón en Chamberí?', respuesta: 'Muchas veces sí, si el balcón da a la calle, el hueco es suficiente y hay sitio para colocar el elevador. Lo comprobamos con fotos o en una visita.' },
        { pregunta: '¿Hace falta permiso del Ayuntamiento?', respuesta: 'Para elevadores y vehículos montamuebles, sí: hay que pedir autorización para ocupar la vía pública, con antelación.' },
        { pregunta: '¿Cuánto cuesta el permiso?', respuesta: 'Lleva una tasa por el documento y otra por metro lineal y día. Consulta la ficha de la sede electrónica del Ayuntamiento de Madrid, porque se actualiza cada año.' },
        { pregunta: '¿Se puede subir por un patio interior?', respuesta: 'Normalmente no, porque el elevador necesita apoyarse desde la calle. Por un patio cerrado no es viable.' },
        { pregunta: '¿Hasta qué planta llega el elevador?', respuesta: 'Depende del equipo y de la fachada. Lo concretamos al valorar el edificio.' },
        { pregunta: '¿Y si no se puede usar elevador?', respuesta: 'Buscamos alternativas: desmontar el mueble, subirlo por la escalera con más personas o valorar si cabe por otra entrada.' },
        { pregunta: '¿Se puede usar el elevador en una calle peatonal?', respuesta: 'Depende de la calle y del permiso. En calles peatonales o con restricciones de acceso hay que valorarlo caso por caso con el Ayuntamiento.' },
        { pregunta: '¿Puedo pedir el elevador solo para un mueble?', respuesta: 'Sí, aunque el coste del elevador y del permiso es el mismo para uno que para varios. Si tienes más piezas difíciles, conviene subirlas todas en la misma maniobra.' },
      ],
    },
  },
};

export default chamberi;
