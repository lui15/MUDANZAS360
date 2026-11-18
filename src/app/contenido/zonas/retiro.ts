import type { ContenidoZona } from '../tipos';

/**
 * Retiro (distrito 3). Barrios: Pacífico, Adelfas, Estrella, Ibiza, Jerónimos y Niño Jesús,
 * todos dentro del SER según el Ayuntamiento de Madrid (consultado el 10/11/2026).
 */
const retiro: ContenidoZona = {
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
      gancho: 'De los pisos señoriales de Jerónimos a las torres de Estrella.',
      intro: [
        'Retiro es un distrito de contrastes a pocos minutos a pie. Junto al parque y al Prado están las fincas señoriales de Jerónimos, con portales de mármol y techos altos. Hacia el este, Ibiza y Niño Jesús reúnen edificios de distintas épocas con mucho comercio de barrio, y más allá, en Estrella, aparecen los bloques altos de los años sesenta y setenta, con jardines interiores y garaje. Pacífico y Adelfas completan el distrito hacia Atocha y la M-30.',
        'Cada uno de esos barrios pide una mudanza distinta. En esta página te explicamos qué cambia en cada caso, cómo la organizamos y qué conviene preparar si te mudas desde o hacia el distrito de Retiro.',
      ],
      zona: [
        {
          titulo: 'Jerónimos: pisos grandes y calles tranquilas',
          parrafos: [
            'Entre el paseo del Prado y el parque se levantan edificios de finales del siglo XIX y principios del XX, muchos con pisos amplios, dormitorios de servicio y muebles de gran tamaño. Las calles son tranquilas, con poco tráfico, pero el aparcamiento escasea y muchos portales tienen escalones de entrada. Los ascensores suelen ser de época, con puertas de reja o de madera y cabinas justas, de modo que los muebles grandes bajan por la escalera principal.',
          ],
        },
        {
          titulo: 'Ibiza y Niño Jesús: fincas de barrio con vida comercial',
          parrafos: [
            'Alrededor de las calles Ibiza, Narváez, Menéndez Pelayo o Doctor Castelo conviven fincas de principios del siglo XX con edificios de mediados de siglo, casi todos con ascensor. Son pisos medianos y bien distribuidos, muy buscados por familias. Las calles tienen tiendas, bares y colegios, así que la carga y descarga está muy demandada por la mañana y a la salida de clase. Elegir bien la hora marca la diferencia.',
          ],
        },
        {
          titulo: 'Estrella, Pacífico y Adelfas',
          parrafos: [
            'Estrella se construyó en su mayor parte en los años sesenta y setenta: bloques altos separados por zonas verdes, con ascensores más amplios y garajes en muchos edificios. Allí el reto no es la escalera, sino la distancia entre la calle y el portal, que a veces queda en el interior de la urbanización. Pacífico tiene edificios más antiguos y calles algo más estrechas, y Adelfas, junto a la M-30 y la avenida de la Ciudad de Barcelona, mezcla construcciones de distintas décadas.',
          ],
        },
        {
          titulo: 'Aparcamiento regulado y grandes avenidas',
          parrafos: [
            'Todo el distrito está dentro del Servicio de Estacionamiento Regulado. Las grandes vías, como O’Donnell, Doctor Esquerdo, Menéndez Pelayo, Sainz de Baranda o la avenida de la Ciudad de Barcelona, permiten detener un camión con más facilidad que las calles interiores, aunque con tráfico intenso en hora punta. Si el vehículo supera los 3.500 kilos o lleva elevador, el Ayuntamiento exige autorización para ocupar la vía pública, que se pide con antelación.',
          ],
        },
        {
          titulo: 'Dificultades habituales',
          parrafos: [
            'En Jerónimos, el ascensor pequeño y los escalones del portal. En Ibiza, la competencia por la carga y descarga. En Estrella, el recorrido por zonas ajardinadas hasta el portal y, a veces, la autorización de la comunidad para entrar por el garaje. Conocer cuál de las tres situaciones es la tuya nos permite calcular el tiempo con precisión y evitar que el presupuesto cambie el día de la mudanza.',
          ],
        },
        {
          titulo: 'Consejos para vecinos de Retiro',
          parrafos: [
            'Si vives en una urbanización de Estrella, pregunta a la comunidad si el camión puede entrar al garaje o si hay que cargar desde la calle. En Jerónimos, mide el ascensor y el portal. En Ibiza y Niño Jesús, evita la hora de entrada y salida de los colegios. Y en cualquier caso, avisa a los vecinos del día: en las fincas con portero, suele ser él quien reserva el ascensor.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Qué barrio y qué edificio', texto: 'Nos dices dirección, planta, ascensor y si hay garaje o zona ajardinada hasta el portal. Si lo vemos necesario, hacemos una visita sin compromiso.' },
        { titulo: 'Vehículo y hora', texto: 'Elegimos camión o furgoneta según la calle y fijamos la franja que menos choque con colegios y comercios.' },
        { titulo: 'Autorización si hace falta', texto: 'Con camión grande o elevador, te indicamos cómo y cuándo pedir la ocupación de la vía pública.' },
        { titulo: 'Carga cuidada', texto: 'Protegemos portal, ascensor y escalera, desmontamos lo necesario y cargamos por habitaciones.' },
        { titulo: 'Entrega y montaje', texto: 'Descargamos en el nuevo piso, montamos y colocamos cada mueble en su sitio.' },
      ],
      incluye: [
        'En los pisos de Jerónimos con ascensor de época protegemos especialmente las puertas de reja y las paredes de la cabina, que se rayan con facilidad. En las urbanizaciones de Estrella incluimos el tramo a pie desde la calle hasta el portal en la planificación del equipo.',
      ],
      precio: [
        'Un piso de dos habitaciones en Ibiza con buen ascensor y parada cerca del portal suele quedarse en la parte baja del rango. El mismo piso en Jerónimos, con muebles grandes que bajan por la escalera, o en una torre de Estrella con un recorrido largo hasta el camión, puede subir. Te lo explicamos en el presupuesto.',
      ],
      faqs: [
        { pregunta: '¿Hacéis mudanzas en todo el distrito de Retiro?', respuesta: 'Sí, en los seis barrios: Pacífico, Adelfas, Estrella, Ibiza, Jerónimos y Niño Jesús, y desde allí a cualquier punto de Madrid o de España.' },
        { pregunta: '¿Puede entrar el camión al garaje de mi urbanización en Estrella?', respuesta: 'Depende de la altura del acceso y de la comunidad. Pregúntalo antes: si no es posible, cargamos desde la calle y lo tenemos en cuenta en el equipo.' },
        { pregunta: '¿Los ascensores antiguos de Jerónimos admiten muebles?', respuesta: 'Suelen ser pequeños, así que los muebles grandes bajan por la escalera. Lo pequeño sí puede ir en ascensor, protegido.' },
        { pregunta: '¿Necesito autorización para aparcar en Retiro?', respuesta: 'Si el vehículo pesa más de 3.500 kilos o usa elevador, sí. Para mudanzas pequeñas con furgoneta, normalmente no.' },
        { pregunta: '¿A qué hora conviene mudarse en Ibiza o Niño Jesús?', respuesta: 'Evitando la entrada y salida de colegios y las horas de más movimiento comercial. A media mañana suele ir bien.' },
        { pregunta: '¿Podéis mudar un piso de Retiro a una casa fuera de Madrid?', respuesta: 'Sí. Nos ocupamos de la mudanza completa, también a municipios de la Comunidad o a otras provincias.' },
        { pregunta: '¿Cuánto tarda una mudanza de un piso de tres habitaciones?', respuesta: 'Con buen acceso, una jornada. Si hay escalera, recorrido largo hasta el portal o muchos muebles por desmontar, puede alargarse.' },
        { pregunta: '¿Tengo que estar presente todo el día?', respuesta: 'Conviene que estés al principio y en la descarga, para indicar dónde va cada cosa. Entre medias, podemos trabajar con las llaves.' },
      ],
    },

    /* ============================ PORTES ============================ */
    portes: {
      gancho: 'Muebles de tiendas de Ibiza y traslados cortos en el distrito.',
      intro: [
        'En Retiro hay mucho comercio de barrio: tiendas de muebles y decoración en las calles Ibiza y Narváez, colchonerías, tiendas de electrodomésticos y anticuarios cerca de Jerónimos. Cuando compras algo que no cabe en el coche, o cuando mueves unos pocos muebles de un piso a otro, lo que necesitas es un porte con furgoneta y operario.',
        'Te contamos cómo los hacemos en el distrito y qué tener en cuenta en cada barrio para que la entrega sea rápida.',
      ],
      zona: [
        {
          titulo: 'Compras en el comercio del barrio',
          parrafos: [
            'Muchos portes del distrito empiezan en una tienda de Ibiza o de Menéndez Pelayo. Antes de recogerlo conviene confirmar con la tienda si el mueble sale montado o en caja, si hay que recogerlo en un almacén distinto y a qué hora. Con esos datos elegimos la furgoneta y el número de operarios, y evitamos esperas a la puerta del comercio en calles donde parar no es sencillo.',
          ],
        },
        {
          titulo: 'Edificios con ascensor, pero no siempre amplio',
          parrafos: [
            'La mayoría de los edificios de Ibiza, Niño Jesús y Estrella tienen ascensor, y en los bloques de los sesenta y setenta suele ser lo bastante amplio para muebles medianos. En las fincas antiguas de Jerónimos, en cambio, el ascensor es pequeño y muchos muebles suben por la escalera. Saber en qué tipo de edificio termina el porte nos dice si hacen falta una o dos personas.',
          ],
        },
        {
          titulo: 'Dónde parar la furgoneta',
          parrafos: [
            'Todo Retiro tiene estacionamiento regulado. Para un porte se usan las zonas de carga y descarga, que en calles comerciales se ocupan por la mañana. En Estrella, muchos portales están dentro de urbanizaciones con jardines, y la furgoneta se queda en la calle más cercana. Ese tramo a pie lo hacemos nosotros, pero conviene que lo sepamos al dar el precio.',
          ],
        },
        {
          titulo: 'Portes con el parque de por medio',
          parrafos: [
            'El parque del Retiro divide el distrito de la zona de Salamanca y del centro, y rodearlo en hora punta lleva tiempo. Si el porte va de Jerónimos a Ibiza o a Estrella, el trayecto en furgoneta es corto, pero hay que contar con el tráfico de O’Donnell, Menéndez Pelayo o Doctor Esquerdo. Por eso los programamos fuera de las horas de más circulación.',
          ],
        },
        {
          titulo: 'Electrodomésticos y colchones',
          parrafos: [
            'Además de muebles, en el distrito movemos muchos electrodomésticos y colchones nuevos. Si el aparato sustituye a otro, dinos si hay que retirar el viejo y si la tienda ya se ocupa de ello. La conexión de lavadoras, lavavajillas o frigoríficos con toma de agua la hace la tienda o un técnico; nosotros lo dejamos en su sitio.',
          ],
        },
        {
          titulo: 'Portes al trastero o desde él',
          parrafos: [
            'En Estrella y en muchos edificios de Ibiza el trastero está en el sótano o junto al garaje, con un acceso por rampa o por un ascensor de servicio. Llevar allí una bicicleta, cajas de temporada o un mueble que ya no cabe en casa también es un porte, y suele ser de los más rápidos si nos dices de antemano cómo se baja y si hace falta una llave especial.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Qué y dónde', texto: 'Foto del mueble, medidas aproximadas, dirección de recogida y de entrega.' },
        { titulo: 'Tienda y horario', texto: 'Confirmamos con la tienda la hora de recogida y si el mueble va montado.' },
        { titulo: 'Furgoneta y equipo', texto: 'Furgoneta con conductor y uno o dos operarios según el peso y el ascensor.' },
        { titulo: 'Trayecto', texto: 'Evitamos las horas de más tráfico en las avenidas que rodean el parque.' },
        { titulo: 'Colocación', texto: 'Subimos la pieza y la dejamos en la habitación que nos digas.' },
      ],
      incluye: [
        'Si el porte termina en una urbanización de Estrella con portal interior, el tramo desde la calle va incluido. Solo necesitamos saberlo para enviar a la persona adecuada.',
      ],
      precio: [
        'Un porte de uno a tres muebles dentro del distrito, con ascensor, suele cubrirse con la tarifa de partida. Si hay escalera en una finca de Jerónimos, varias recogidas o mucha espera en tienda, pasa a calcularse por horas.',
      ],
      faqs: [
        { pregunta: '¿Recogéis compras en tiendas de la calle Ibiza?', respuesta: 'Sí. Coordinamos con la tienda la hora y el punto de recogida y lo llevamos a tu domicilio.' },
        { pregunta: '¿Subís el mueble aunque no quepa en el ascensor?', respuesta: 'Sí, por la escalera y protegido. En fincas antiguas de Jerónimos es lo habitual.' },
        { pregunta: '¿Retiráis el electrodoméstico viejo?', respuesta: 'Si nos lo dices antes, podemos llevarlo. Confirma si la tienda ya ofrece la retirada.' },
        { pregunta: '¿Conectáis la lavadora?', respuesta: 'La dejamos en su sitio. La conexión a la toma de agua la hace la tienda o un técnico.' },
        { pregunta: '¿Cuánto dura un porte en Retiro?', respuesta: 'Muchos se hacen en menos de dos horas. Depende del tráfico alrededor del parque y de las escaleras.' },
        { pregunta: '¿Puedo mover cajas a un trastero del garaje?', respuesta: 'Sí. Es un porte habitual en las urbanizaciones de Estrella.' },
        { pregunta: '¿Necesito estar en la recogida?', respuesta: 'No siempre. Si la tienda nos entrega el mueble, basta con que estés en la entrega.' },
      ],
    },

    /* ============================ OFICINAS ============================ */
    'mudanzas-oficinas': {
      gancho: 'Despachos, clínicas y oficinas en torno a O’Donnell y el Prado.',
      intro: [
        'Retiro no es un distrito de grandes torres de oficinas, pero tiene mucha actividad profesional: clínicas y consultas en torno al hospital del Niño Jesús y a las calles O’Donnell y Doctor Esquerdo, despachos en pisos de Jerónimos e Ibiza y pequeñas empresas en locales y entreplantas. Cada traslado tiene que respetar a pacientes, clientes y vecinos.',
        'Te explicamos cómo organizamos una mudanza de oficina o de consulta en el distrito, de la visita al primer día de trabajo en la nueva sede.',
      ],
      zona: [
        {
          titulo: 'Consultas y clínicas',
          parrafos: [
            'Las consultas médicas, dentales o de fisioterapia del distrito ocupan pisos o locales adaptados, con aparatos delicados, camillas y mobiliario clínico. El traslado de equipos sanitarios especiales lo coordina el fabricante o el servicio técnico, pero el resto, como archivo, mobiliario, sala de espera o material de oficina, lo trasladamos nosotros, embalado y etiquetado por sala.',
          ],
        },
        {
          titulo: 'Despachos en edificios residenciales',
          parrafos: [
            'En Jerónimos e Ibiza hay despachos de abogados, gestorías y estudios en pisos de fincas de viviendas. Comparten portal y ascensor con los vecinos, así que el traslado se hace en horarios que molesten poco y con las zonas comunes protegidas. Los archivadores y las mesas grandes suelen bajar por la escalera, sobre todo en las fincas de ascensor pequeño.',
          ],
        },
        {
          titulo: 'Locales y entreplantas',
          parrafos: [
            'Muchas pequeñas empresas del distrito están en locales a pie de calle o en entreplantas. La salida es más sencilla, pero las calles comerciales tienen la carga y descarga muy ocupada. Planificar el traslado al cierre del negocio o en fin de semana suele resolverlo.',
          ],
        },
        {
          titulo: 'Tráfico en las grandes vías',
          parrafos: [
            'Las arterias del distrito se cargan de coches de lunes a viernes, y un camión parado en doble fila en plena mañana es mala idea para todos. Para oficinas medianas proponemos empezar cuando cierra la sede y terminar antes de la noche, o reservar un sábado. Con vehículos pesados hay que tramitar antes la ocupación de la calzada.',
          ],
        },
        {
          titulo: 'Preparar al equipo',
          parrafos: [
            'Designa a una persona responsable, reparte cajas y etiquetas con tiempo y pide que cada uno vacíe su puesto. En una consulta, decide qué material clínico va aparte y avisa a los pacientes del cambio de dirección con antelación: es lo que más cuesta corregir después.',
          ],
        },
        {
          titulo: 'Oficinas cerca de Atocha',
          parrafos: [
            'En Pacífico y en el borde de Jerónimos, junto a la estación de Atocha, hay oficinas de empresas que valoran la conexión con el tren y el metro. Son edificios con más tránsito de personas y, a menudo, con conserje que controla accesos y horarios. Pedimos sus normas con tiempo y coordinamos con él la llegada del vehículo y el uso del ascensor, para que el traslado no coincida con la hora de más entradas y salidas.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Visita a la sede', texto: 'Vemos puestos, archivo, equipos y accesos de origen y destino.' },
        { titulo: 'Calendario', texto: 'Proponemos fecha y horario para no interrumpir consultas ni atención al público.' },
        { titulo: 'Embalaje por sala', texto: 'Cajas y etiquetas por puesto o por sala, incluida la de espera.' },
        { titulo: 'Traslado en franja tranquila', texto: 'Cuando no hay pacientes ni clientes esperando, con portal y ascensor cubiertos.' },
        { titulo: 'Montaje y orden', texto: 'Montamos el mobiliario y dejamos cada caja en su sala.' },
      ],
      incluye: [
        'En consultas y clínicas separamos el material clínico de uso diario en cajas propias, marcadas para abrirse primero, de forma que la actividad pueda reanudarse cuanto antes.',
      ],
      precio: [
        'Un despacho en un piso con ascensor pequeño cuesta más por puesto que un local a pie de calle, porque el archivo y los muebles bajan por la escalera. Tras la visita te damos un precio cerrado.',
      ],
      faqs: [
        { pregunta: '¿Trasladáis consultas médicas?', respuesta: 'Sí, el mobiliario, el archivo y el material de oficina. Los equipos sanitarios especiales los mueve su servicio técnico o el fabricante.' },
        { pregunta: '¿Podéis hacerlo en fin de semana?', respuesta: 'Sí. En Retiro es lo más práctico para no interrumpir la atención y encontrar menos tráfico.' },
        { pregunta: '¿Qué hacéis con el archivo?', respuesta: 'Se embala en cajas numeradas por estantería y se coloca en el mismo orden en la nueva sede.' },
        { pregunta: '¿Necesitamos avisar a la comunidad?', respuesta: 'Si el despacho está en un edificio de viviendas, conviene avisar del día y la hora para reservar el ascensor.' },
        { pregunta: '¿Se puede guardar mobiliario que sobra?', respuesta: 'Sí, en un guardamuebles hasta que decidáis qué hacer con él.' },
        { pregunta: '¿Desmontáis mamparas o separadores?', respuesta: 'Los separadores móviles sí. Las mamparas fijas, si están ancladas, requieren valorarlo antes.' },
        { pregunta: '¿Cuánto dura un traslado de una consulta pequeña?', respuesta: 'Con el embalaje hecho, suele resolverse en una jornada.' },
        { pregunta: '¿Podéis trasladar solo el archivo a otra ubicación?', respuesta: 'Sí. Si el archivo histórico va a un almacén o a otra sede, lo embalamos aparte con su inventario y lo llevamos en un viaje independiente del resto de la oficina.' },
      ],
    },

    /* ============================ GUARDAMUEBLES ============================ */
    guardamuebles: {
      gancho: 'Reformas, herencias y cambios de casa con fechas que no encajan.',
      intro: [
        'En Retiro se reforma mucho: pisos de Jerónimos que se actualizan sin perder sus techos altos, viviendas de Ibiza que se renuevan para una familia y pisos de los sesenta en Estrella que necesitan instalaciones nuevas. Durante la obra, los muebles estorban. Y en cada cambio de casa hay un momento en que las fechas de salida y entrada no coinciden.',
        'El guardamuebles resuelve ese hueco. Te contamos cómo funciona desde el distrito.',
      ],
      zona: [
        {
          titulo: 'Reformas por barrio',
          parrafos: [
            'En las fincas antiguas de Jerónimos las reformas suelen ser profundas y largas, porque afectan a suelos, instalaciones y carpintería. En Estrella son frecuentes las reformas de cocinas y baños en pisos de los sesenta y setenta. En ambos casos, vaciar el piso antes de empezar protege los muebles del polvo y deja trabajar mejor a los operarios.',
          ],
        },
        {
          titulo: 'Recogida según el edificio',
          parrafos: [
            'En un bloque de Estrella con ascensor amplio, la recogida es rápida. En una finca de Jerónimos con ascensor de época, los muebles grandes bajan por la escalera y la recogida lleva más tiempo. Lo calculamos según el edificio para que el presupuesto refleje lo que realmente cuesta sacar tus cosas.',
          ],
        },
        {
          titulo: 'Trasteros y garajes',
          parrafos: [
            'Muchos edificios de Estrella e Ibiza tienen trastero. Aun así, durante una reforma o una mudanza escalonada no suele bastar. Si quieres, recogemos también del trastero lo que vaya a guardarse y te dejamos el espacio libre.',
          ],
        },
        {
          titulo: 'Aparcamiento para la recogida',
          parrafos: [
            'El distrito tiene estacionamiento regulado. Para recoger el contenido de un piso entero solemos necesitar un camión, y si supera los 3.500 kilos hay que pedir autorización para ocupar la vía pública. Para recogidas parciales, una furgoneta suele bastar y no necesita reserva.',
          ],
        },
        {
          titulo: 'Qué guardar y qué no',
          parrafos: [
            'Guarda lo que vas a querer recuperar. Lo que no, aprovecha para venderlo, donarlo o retirarlo antes: pagar por almacenar algo que no vas a usar no tiene sentido. Alimentos, productos inflamables y plantas no deben guardarse.',
          ],
        },
        {
          titulo: 'Ventas y compras que no coinciden',
          parrafos: [
            'En el distrito se venden muchos pisos familiares para comprar otro más adecuado, y lo normal es que entre la firma de la venta y la entrega del nuevo pase un tiempo. Durante esas semanas, muchas familias se alojan con parientes o en un alquiler corto, donde no caben sus muebles. Guardarlos permite entregar el piso vendido vacío, como suele exigir el comprador, sin precipitar la compra del siguiente.',
          ],
        },
        {
          titulo: 'Lo que más se guarda en Retiro',
          parrafos: [
            'En los guardamuebles que preparamos desde el distrito predominan los dormitorios completos, las bibliotecas y los muebles de salón de pisos familiares, además de bicicletas y material deportivo de los trasteros. Todo se embala y se coloca de forma que los objetos más pesados queden abajo y lo que vayas a necesitar antes quede accesible.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Volumen', texto: 'Nos dices qué y durante cuánto tiempo; si hay dudas, lo vemos en casa.' },
        { titulo: 'Recogida', texto: 'Furgoneta o camión según el volumen y la calle.' },
        { titulo: 'Embalaje para guardar', texto: 'Cada pieza protegida para semanas o meses.' },
        { titulo: 'Inventario', texto: 'Lista de cajas y muebles, numerados.' },
        { titulo: 'Entrega', texto: 'Al mismo piso o a la nueva casa, con montaje.' },
      ],
      incluye: [
        'Si la reforma se alarga, el almacenaje se prolonga sin necesidad de mover nada. Solo tienes que avisarnos de la nueva fecha de entrega.',
      ],
      precio: [
        'Pagas una cuota mensual según los metros que ocupen tus cosas. Aparte va el transporte de ida y vuelta, que en Retiro depende sobre todo de si tu edificio tiene un ascensor donde entren los muebles o de si hay que bajarlos a mano.',
      ],
      faqs: [
        { pregunta: '¿Podéis guardar mis muebles durante la reforma?', respuesta: 'Es de los encargos más comunes en el distrito: vaciamos el piso unos días antes de que entren los albañiles y volvemos a montarlo todo cuando el constructor da la obra por terminada.' },
        { pregunta: '¿Recogéis del trastero?', respuesta: 'Sí, si nos lo indicas. Es habitual en edificios de Estrella e Ibiza.' },
        { pregunta: '¿Puedo pedir algo concreto mientras está guardado?', respuesta: 'Sí, con el inventario. Ese viaje se presupuesta aparte.' },
        { pregunta: '¿Qué no se puede guardar?', respuesta: 'Alimentos, productos inflamables, plantas y materiales peligrosos.' },
        { pregunta: '¿La entrega puede ser en otra vivienda?', respuesta: 'Sí, en Madrid o en otra provincia.' },
        { pregunta: '¿Cuánto cuesta al mes?', respuesta: 'Depende del espacio, con un rango orientativo de 40 a 120 euros al mes.' },
        { pregunta: '¿Hay que embalar antes?', respuesta: 'No es necesario: si lo contratas, embalamos nosotros para que todo aguante el tiempo de almacenaje.' },
        { pregunta: '¿Guardáis las cosas de un trastero que hay que dejar libre?', respuesta: 'Sí. Si tu comunidad de Estrella o Ibiza va a hacer obras en los trasteros, o si vendes la plaza de garaje con trastero, recogemos el contenido y lo guardamos el tiempo que haga falta.' },
      ],
    },

    /* ============================ EMBALAJE ============================ */
    embalaje: {
      gancho: 'Lo frágil bien protegido, de Jerónimos a Estrella.',
      intro: [
        'Las casas de Retiro guardan de todo: bibliotecas y cuadros en los pisos señoriales de Jerónimos, cocinas completas de familia en Ibiza y Niño Jesús y trasteros llenos en las urbanizaciones de Estrella. Embalar bien es lo que más tiempo lleva en una mudanza y lo que más protege lo que tiene valor.',
        'Te contamos cómo lo hacemos en el distrito y qué preparar para que el embalaje sea rápido.',
      ],
      zona: [
        {
          titulo: 'Pisos señoriales con piezas delicadas',
          parrafos: [
            'En Jerónimos es habitual encontrar porcelana, cristalería antigua, cuadros de buen tamaño y lámparas de techo. Cada pieza delicada se envuelve por separado, se acolcha y se señala en la caja. Los cuadros van con cantoneras y cartón rígido, y las lámparas se desmontan cuando es posible para viajar sin tensión en los brazos.',
          ],
        },
        {
          titulo: 'Familias con mucha vida en casa',
          parrafos: [
            'En Ibiza, Niño Jesús o Estrella abundan los pisos de familia: juguetes, ropa de varias tallas, libros escolares, cocina completa y algún electrodoméstico pequeño por cada armario. Aquí el reto es el volumen y el orden. Etiquetamos por habitación y por persona, de modo que en la nueva casa cada miembro de la familia sepa qué cajas son suyas.',
          ],
        },
        {
          titulo: 'Trasteros y garajes',
          parrafos: [
            'Las urbanizaciones de Estrella y muchos edificios de Ibiza tienen trastero, y suele estar lleno: herramientas, bicicletas, maletas y cajas de mudanzas anteriores. Lo revisamos contigo antes de embalarlo, porque a menudo es el lugar donde más cosas se pueden quedar en lugar de viajar.',
          ],
        },
        {
          titulo: 'Embalar sin bloquear el ascensor',
          parrafos: [
            'En las fincas con ascensor pequeño conviene que las cajas estén preparadas y cerradas antes de que llegue el camión, para bajarlas de forma continua sin ocupar el ascensor más tiempo del necesario. Por eso solemos embalar uno o dos días antes en los pisos con mucho contenido.',
          ],
        },
        {
          titulo: 'Tu parte',
          parrafos: [
            'Aparta lo que no se va a llevar, vacía la nevera y el congelador un día antes y guarda en una bolsa aparte los documentos, la medicación y los cargadores. Si tienes niños, deja preparada una caja con sus cosas favoritas para la primera noche en la casa nueva.',
          ],
        },
        {
          titulo: 'Colecciones y bibliotecas',
          parrafos: [
            'En los pisos cercanos al Prado y al parque no es raro encontrar colecciones de libros de arte, discos o figuras. Para ellas usamos cajas pequeñas y resistentes, rellenamos los huecos para que nada se mueva y numeramos cada caja según la estantería de origen. Así, en la nueva casa, se pueden colocar en el mismo orden en el que estaban, sin tener que volver a clasificar.',
          ],
        },
        {
          titulo: 'Electrodomésticos pequeños y televisores',
          parrafos: [
            'Los televisores de pantalla plana viajan en su caja original si la conservas; si no, los protegemos con mantas y cartón rígido y siempre de pie. Microondas, cafeteras y robots de cocina van en cajas propias con relleno. Si un aparato tiene depósito de agua, conviene vaciarlo y secarlo el día anterior.',
          ],
        },
        {
          titulo: 'Ropa de varias temporadas',
          parrafos: [
            'En los pisos familiares del distrito los armarios guardan ropa de invierno y de verano, a menudo de toda la familia. Para la ropa colgada podemos usar cajas armario con barra, que permiten que llegue sin arrugas; la doblada va en cajas grandes y ligeras. Separar antes lo que vas a donar ahorra cajas y tiempo.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Valoración', texto: 'Calculamos cajas y materiales por fotos o en una visita.' },
        { titulo: 'Materiales', texto: 'Cajas de varios tamaños, papel, burbujas, mantas y cantoneras.' },
        { titulo: 'Por habitación y persona', texto: 'Etiquetas que dicen dónde va cada caja y de quién es.' },
        { titulo: 'Frágil aparte', texto: 'Porcelana, cuadros y lámparas con protección individual.' },
        { titulo: 'Desembalaje opcional', texto: 'Abrimos y colocamos en destino si lo pides.' },
      ],
      incluye: [
        'Para la cocina de una familia preparamos una caja de primeros días con platos, vasos, cubiertos y lo básico para cocinar, que se abre nada más llegar.',
      ],
      precio: [
        'El precio depende del volumen y de la cantidad de frágil. Un piso señorial con muchas piezas delicadas está en la parte alta del rango; un piso de familia con poco frágil, en la media. También puedes pedir solo el material.',
      ],
      faqs: [
        { pregunta: '¿Embaláis porcelana y cristalería antigua?', respuesta: 'Sí, pieza a pieza, con papel y burbujas, y la caja señalada como frágil.' },
        { pregunta: '¿Embaláis también el trastero?', respuesta: 'Sí, si nos lo indicas. Antes lo revisamos contigo para decidir qué viaja.' },
        { pregunta: '¿Cuántos días antes embaláis?', respuesta: 'Para pisos grandes, uno o dos días antes. Para pisos pequeños, el mismo día puede bastar.' },
        { pregunta: '¿Podéis embalar solo lo frágil?', respuesta: 'Sí. Es una opción habitual: tú preparas la ropa y los libros y nosotros lo delicado.' },
        { pregunta: '¿Desmontáis lámparas?', respuesta: 'Las desmontamos y embalamos. Si hay que tocar la instalación eléctrica, lo hace un electricista.' },
        { pregunta: '¿Qué precio tienen las cajas sueltas?', respuesta: 'Un precio orientativo de 2 a 4 euros por caja reforzada.' },
        { pregunta: '¿Retiráis el material al acabar?', respuesta: 'Si contratas el desembalaje, sí.' },
      ],
    },

    /* ============================ MONTAJE ============================ */
    'montaje-muebles': {
      gancho: 'Armarios de familia, literas y muebles de techos altos.',
      intro: [
        'En Retiro conviven muebles de todas las épocas: armarios macizos en los pisos de Jerónimos, dormitorios juveniles con literas y escritorios en los pisos de familia de Ibiza y Estrella, y muebles modulares en los pisos reformados. Desmontarlos bien es la diferencia entre que lleguen enteros y estables o que lleguen con holguras y piezas de menos.',
        'Te explicamos cómo trabajamos en el distrito.',
      ],
      zona: [
        {
          titulo: 'Dormitorios infantiles y juveniles',
          parrafos: [
            'En los barrios más familiares del distrito se desmontan muchas literas, camas nido, escritorios con estanterías y armarios con módulos. Son muebles con muchas piezas pequeñas y herrajes específicos. Los desmontamos guardando cada juego de tornillos en su bolsa y montamos en la nueva habitación siguiendo la distribución que nos indiques.',
          ],
        },
        {
          titulo: 'Muebles grandes en techos altos',
          parrafos: [
            'Los pisos de Jerónimos e Ibiza tienen techos altos y armarios de gran altura. En fincas con ascensor pequeño, desmontar es casi obligatorio para bajarlos por la escalera, y conviene comprobar antes que en el piso nuevo haya altura suficiente para montarlos de nuevo.',
          ],
        },
        {
          titulo: 'Edificios de los sesenta y setenta',
          parrafos: [
            'En Estrella los ascensores son más amplios y muchos muebles medianos bajan enteros, pero los armarios grandes siguen necesitando desmontarse. Las paredes de estos edificios suelen ser de ladrillo y admiten bien los anclajes, algo útil para estanterías y muebles altos que deben fijarse.',
          ],
        },
        {
          titulo: 'Montaje en la nueva casa',
          parrafos: [
            'Montamos en la habitación definitiva, nivelamos y comprobamos puertas, cajones y mecanismos. Si un mueble necesita anclaje, revisamos el tipo de pared antes de taladrar. Las cajas de herrajes que sobren se quedan contigo, por si hacen falta más adelante.',
          ],
        },
        {
          titulo: 'Consejos',
          parrafos: [
            'Vacía armarios y cajones, conserva las instrucciones de los muebles modulares y dinos si en la nueva casa cambia la distribución. Si vas a comprar muebles nuevos para el piso de destino, podemos montarlos el mismo día de la mudanza.',
          ],
        },
        {
          titulo: 'Armarios empotrados y vestidores',
          parrafos: [
            'Muchos pisos de Estrella e Ibiza tienen armarios empotrados de obra, que se quedan en la vivienda, y vestidores modulares añadidos después, que sí se pueden llevar. Te ayudamos a distinguirlos: los módulos con estructura propia se desmontan y se montan en la nueva casa, mientras que los interiores fijados al armario de obra suelen ser parte del piso y conviene dejarlos.',
          ],
        },
        {
          titulo: 'Mesas extensibles y muebles de salón',
          parrafos: [
            'Las mesas extensibles, los aparadores con vitrina y los muebles de salón de pared son frecuentes en los pisos de familia del distrito. Las vitrinas se vacían y sus cristales se retiran y embalan aparte; las mesas se separan de sus patas o de su mecanismo de extensión para que viajen sin tensiones. En destino, lo montamos y ajustamos para que las puertas y los cajones cierren como antes.',
          ],
        },
        {
          titulo: 'Muebles de baño y cocina',
          parrafos: [
            'En las reformas que se hacen en Ibiza y Estrella a veces el propietario quiere llevarse muebles auxiliares de baño, columnas de cocina independientes o estanterías del lavadero. Si no están fijados a la obra, se desmontan como cualquier otro mueble. Si están anclados o tienen tomas de agua, conviene que antes los desconecte un fontanero, y después nosotros los retiramos y montamos.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Lista de muebles', texto: 'Con fotos, para saber qué piezas y herramientas hacen falta.' },
        { titulo: 'Medidas', texto: 'Ascensor, escalera y altura del piso de destino.' },
        { titulo: 'Desmontaje marcado', texto: 'Cada mueble con sus piezas y herrajes identificados.' },
        { titulo: 'Traslado protegido', texto: 'Tableros de canto y envueltos para no deformarse.' },
        { titulo: 'Montaje y ajuste', texto: 'Nivelado, puertas ajustadas y, si hace falta, anclaje.' },
      ],
      incluye: [
        'En dormitorios infantiles revisamos especialmente la estabilidad de literas y estanterías y recomendamos anclarlas a la pared cuando el fabricante lo indica, sobre todo si hay niños pequeños que trepan.',
      ],
      precio: [
        'Cada mueble se presupuesta según su complejidad: una litera con escalera y cajones lleva más tiempo que una cama sencilla. En fincas con ascensor pequeño, desmontar suele abaratar la mudanza porque las piezas bajan más rápido.',
      ],
      faqs: [
        { pregunta: '¿Desmontáis literas y camas nido?', respuesta: 'Sí. Son de los muebles que más desmontamos en los barrios familiares del distrito.' },
        { pregunta: '¿Anclais estanterías a la pared?', respuesta: 'Sí, si la pared lo permite. Lo recomendamos en dormitorios infantiles.' },
        { pregunta: '¿Montáis muebles nuevos?', respuesta: 'Sí, también fuera de una mudanza.' },
        { pregunta: '¿Y si el armario no cabe en el nuevo piso?', respuesta: 'Lo comprobamos antes por altura y anchura, y si no cabe te proponemos alternativas.' },
        { pregunta: '¿Desmontáis muebles antiguos?', respuesta: 'Sí, con cuidado de no forzar ensamblajes.' },
        { pregunta: '¿Hace falta que tenga herramientas?', respuesta: 'No, llevamos las nuestras.' },
        { pregunta: '¿Montáis el mismo día?', respuesta: 'Sí, normalmente al descargar.' },
        { pregunta: '¿Desmontáis un vestidor modular?', respuesta: 'Sí. Marcamos cada módulo y sus baldas y lo montamos en la nueva casa, adaptándolo al espacio si tiene piezas regulables.' },
      ],
    },

    /* ============================ URGENTES ============================ */
    'mudanzas-urgentes': {
      gancho: 'Cambios de casa con prisa en un distrito con mucho tráfico.',
      intro: [
        'Una mudanza urgente en Retiro suele llegar por una venta rápida, un traslado laboral o un alquiler que termina antes de lo previsto. Con poco margen hay que elegir bien el vehículo, la hora y el equipo, porque en las avenidas que rodean el parque el tráfico no espera a nadie.',
        'Te contamos cómo la organizamos para cumplir la fecha sin improvisar.',
      ],
      zona: [
        {
          titulo: 'Sin tiempo para el permiso',
          parrafos: [
            'La autorización para ocupar la vía pública con un camión grande o un elevador se solicita con antelación. En una mudanza urgente rara vez da tiempo, así que solemos usar furgonetas que pueden detenerse en la carga y descarga sin reserva. Supone más viajes, pero evita depender de un trámite.',
          ],
        },
        {
          titulo: 'Elegir la hora',
          parrafos: [
            'En Ibiza y Niño Jesús, la entrada y salida de los colegios llena las calles; en O’Donnell y Doctor Esquerdo, la hora punta complica cada trayecto. Programar la carga a media mañana o a primera hora de la tarde reduce esperas, algo que en una mudanza con prisa vale oro.',
          ],
        },
        {
          titulo: 'Edificios con ascensor amplio',
          parrafos: [
            'En los bloques de Estrella y en muchos edificios de Ibiza, el ascensor permite bajar muebles medianos, y eso acelera mucho. En las fincas antiguas de Jerónimos, en cambio, la escalera marca el ritmo, y con prisa compensamos con más personas en el equipo.',
          ],
        },
        {
          titulo: 'Guardamuebles puente',
          parrafos: [
            'Si tienes que dejar tu piso de Retiro antes de tener el siguiente, podemos llevar todo a un guardamuebles y entregarlo cuando tengas las llaves. Así no tienes que buscar soluciones de última hora.',
          ],
        },
        {
          titulo: 'Decisiones rápidas',
          parrafos: [
            'Cuanto antes nos confirmes la fecha, las dos direcciones, la planta y si hay ascensor, antes podremos asegurar vehículo y equipo. Si no sabes el volumen, unas fotos de cada habitación por WhatsApp son suficientes para empezar.',
          ],
        },
        {
          titulo: 'Traslados por trabajo',
          parrafos: [
            'Retiro tiene muchas familias que llegan o se van por motivos laborales, a veces con un aviso de pocas semanas o incluso días. En esos casos solemos dividir la mudanza: primero lo que hace falta para vivir en la nueva ciudad o casa, y después, con calma, el resto. Si el destino está fuera de Madrid, podemos guardar temporalmente lo que no viaja en el primer envío.',
          ],
        },
        {
          titulo: 'Embalar con prisa sin romper nada',
          parrafos: [
            'La urgencia no puede ser excusa para embalar mal. Cuando hay poco tiempo, nos centramos primero en lo frágil y en la cocina, que es lo que más se rompe si se embala deprisa, y dejamos la ropa y los textiles para el final, porque se pueden meter en bolsas y cajas sin riesgo. Así el equipo avanza rápido sin poner en peligro lo delicado.',
          ],
        },
        {
          titulo: 'Fin de semana y festivos',
          parrafos: [
            'Muchas urgencias caen en viernes o justo antes de un puente. En Retiro, los fines de semana las calles residenciales están más tranquilas y es más fácil encontrar sitio para la furgoneta, aunque los alrededores del parque se llenan de gente. Si la fecha lo permite, una mañana de sábado suele ser buena opción para cargar sin prisas añadidas.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Datos por WhatsApp', texto: 'Fecha, direcciones, plantas y fotos.' },
        { titulo: 'Plan sin trámites', texto: 'Furgonetas que no necesitan autorización si no hay tiempo.' },
        { titulo: 'Hora adecuada', texto: 'Fuera de colegios y horas punta.' },
        { titulo: 'Equipo reforzado', texto: 'Más personas cuando la escalera marca el ritmo.' },
        { titulo: 'Entrega o almacenaje', texto: 'Al destino o a un guardamuebles temporal.' },
      ],
      incluye: [
        'Si el destino no está listo a la hora prevista, podemos esperar con la carga hecha o llevarla al guardamuebles ese mismo día, sin cobrar una segunda carga.',
      ],
      precio: [
        'La urgencia añade un recargo al precio normal. En Retiro influyen también el tipo de edificio y el tráfico: un piso con ascensor amplio en Estrella se mueve más rápido que una finca de Jerónimos.',
      ],
      faqs: [
        { pregunta: '¿Podéis hacer una mudanza en Retiro con dos días de aviso?', respuesta: 'Depende de la disponibilidad y del volumen. Escríbenos y te respondemos con una propuesta.' },
        { pregunta: '¿Tengo que pedir autorización para el camión?', respuesta: 'Si no da tiempo, usamos vehículos que no la necesitan.' },
        { pregunta: '¿Embaláis vosotros?', respuesta: 'Sí, llevamos material y embalamos lo que falte.' },
        { pregunta: '¿Podéis guardar mis cosas unos días?', respuesta: 'Sí, en un guardamuebles hasta que tengas casa.' },
        { pregunta: '¿Cuál es el recargo?', respuesta: 'Entre un 15 y un 25 % sobre el precio normal, según el plazo.' },
        { pregunta: '¿Trabajáis por la tarde?', respuesta: 'Podemos valorarlo. En el distrito, la primera hora de la tarde suele tener menos tráfico.' },
        { pregunta: '¿Y si se retrasan las llaves del nuevo piso?', respuesta: 'Esperamos con la carga hecha o la llevamos al guardamuebles.' },
        { pregunta: '¿Podéis dividir la mudanza en dos viajes?', respuesta: 'Sí. Lo imprescindible primero y el resto unos días después, incluso desde un guardamuebles.' },
      ],
    },

    /* ============================ VACIADO ============================ */
    'vaciado-pisos': {
      gancho: 'Pisos de familia, herencias y trasteros en urbanizaciones.',
      intro: [
        'Muchos pisos de Retiro han sido vivienda de la misma familia durante décadas, sobre todo en Ibiza, Niño Jesús y las urbanizaciones de Estrella, que se poblaron en los años sesenta y setenta. Cuando toca venderlos, alquilarlos o repartir la herencia, hay que vaciarlos, y a menudo con un trastero lleno incluido.',
        'Te explicamos cómo lo hacemos para que sea ordenado y no se pierda nada importante.',
      ],
      zona: [
        {
          titulo: 'Pisos de los sesenta y setenta',
          parrafos: [
            'En Estrella los pisos suelen tener tres o cuatro dormitorios, terraza y trastero. Tras décadas de uso acumulan muebles de varias generaciones, electrodomésticos y objetos guardados en altillos y armarios empotrados. El ascensor amplio ayuda, pero el volumen suele ser mayor de lo que parece a primera vista.',
          ],
        },
        {
          titulo: 'Fincas antiguas',
          parrafos: [
            'En Jerónimos y en parte de Ibiza los pisos son grandes, con habitaciones interiores y cuartos de servicio. Los muebles son pesados y el ascensor, pequeño, así que el vaciado requiere más tiempo y desmontar lo que no pasa por la escalera.',
          ],
        },
        {
          titulo: 'Separar antes de retirar',
          parrafos: [
            'Recorremos el piso con quien decida y separamos lo que se conserva, lo que se traslada y lo que se retira. En herencias, conviene que todos los implicados estén de acuerdo antes de que empecemos, para no tener que recuperar después algo que ya ha salido.',
          ],
        },
        {
          titulo: 'Acceso y vehículo',
          parrafos: [
            'Para un piso entero suele hacer falta un camión, y si supera los 3.500 kilos hay que pedir autorización para ocupar la vía pública. En urbanizaciones con portal interior, contamos el tramo desde la calle. Si el vaciado se hace en varias furgonetas, no suele necesitarse permiso.',
          ],
        },
        {
          titulo: 'Consejos',
          parrafos: [
            'Revisad cajones, libros y bolsillos. Buscad documentos importantes antes del vaciado. Si hay muebles en buen estado, valorad donarlos. Y si el piso se va a vender, dejarlo vacío ayuda a que se aprecie su tamaño real.',
          ],
        },
        {
          titulo: 'Terrazas cerradas y altillos',
          parrafos: [
            'Los pisos de los sesenta y setenta del distrito suelen tener terrazas que con el tiempo se cerraron y se usaron como cuarto de plancha o trastero, además de altillos sobre los armarios del pasillo. Es donde más se acumula y donde menos se mira. Los revisamos con la familia uno por uno antes del vaciado, porque a menudo guardan álbumes, papeles o recuerdos que alguien querrá conservar.',
          ],
        },
        {
          titulo: 'Coordinación con la comunidad',
          parrafos: [
            'En las urbanizaciones de Estrella las comunidades suelen tener normas sobre el uso de ascensores, el horario de ruido y la entrada de vehículos. Antes del vaciado conviene avisar al administrador o al conserje. Si hace falta proteger la cabina o reservar el ascensor, lo hacemos el mismo día.',
          ],
        },
        {
          titulo: 'Plazos de entrega del piso',
          parrafos: [
            'Cuando el piso se vende, el comprador suele exigir recibirlo vacío el día de la firma, y si se devuelve un alquiler, el propietario quiere comprobarlo antes. Conviene fijar el vaciado con unos días de margen sobre esa fecha, por si aparece algo inesperado en un altillo o en el trastero. Así nadie trabaja contra el reloj el último día.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Visita', texto: 'Volumen, trastero, acceso y lo que se conserva.' },
        { titulo: 'Acuerdo de la familia', texto: 'Se marca qué se queda cada uno antes de empezar.' },
        { titulo: 'Traslados', texto: 'Lo que se conserva va a su destino o a un guardamuebles.' },
        { titulo: 'Retirada', texto: 'El resto sale protegiendo portal y ascensor.' },
        { titulo: 'Piso vacío', texto: 'Queda barrido y listo para entregar o enseñar.' },
      ],
      incluye: [
        'El trastero y la terraza se incluyen si nos lo indicas desde el principio. En los pisos de Estrella suelen guardar más volumen que una habitación.',
      ],
      precio: [
        'En Retiro manda el tamaño: los pisos de Estrella, con tres o cuatro dormitorios, terraza y trastero, suelen superar la media aunque tengan buen ascensor. Lo que se conserve y haya que llevar a otra casa se presupuesta como un traslado aparte.',
      ],
      faqs: [
        { pregunta: '¿Vaciáis pisos por herencia en Retiro?', respuesta: 'Es habitual en el distrito, sobre todo en pisos que la familia ocupó durante décadas. Antes de sacar nada, acordamos con los herederos qué se queda cada uno.' },
        { pregunta: '¿Incluye el trastero?', respuesta: 'Sí, si lo indicas al pedir presupuesto.' },
        { pregunta: '¿Podéis llevar muebles a casa de varios familiares?', respuesta: 'Sí, organizamos varias entregas.' },
        { pregunta: '¿Dejáis el piso limpio?', respuesta: 'Al terminar no queda nada dentro y el suelo queda barrido. Si necesitáis una limpieza profunda para la venta, conviene contratarla aparte.' },
        { pregunta: '¿Cuánto tarda?', respuesta: 'Un piso mediano, una o dos jornadas.' },
        { pregunta: '¿Hay que estar presente?', respuesta: 'Al principio, para confirmar qué se conserva.' },
        { pregunta: '¿Qué pasa con los electrodomésticos?', respuesta: 'Se retiran o trasladan. Si hay que desconectar agua o gas, debe hacerlo un profesional.' },
        { pregunta: '¿Podéis vaciar solo el trastero?', respuesta: 'Sí. También vaciamos solo trasteros o garajes, por ejemplo cuando se vende la plaza o se reorganiza la comunidad.' },
      ],
    },

    /* ============================ PERSONAS MAYORES ============================ */
    'mudanzas-personas-mayores': {
      gancho: 'Del piso familiar a una casa más pequeña o accesible.',
      intro: [
        'En Retiro vive mucha gente mayor que llegó al distrito hace décadas, sobre todo en Ibiza, Niño Jesús y Estrella. Con los años, un piso de cuatro dormitorios se vuelve grande, o el ascensor que no llega a la planta de calle se convierte en un obstáculo. Mudarse a una vivienda más cómoda, cerca de los hijos o a una residencia es una decisión importante.',
        'Te contamos cómo organizamos estas mudanzas con calma y con una sola persona de contacto para la familia.',
      ],
      zona: [
        {
          titulo: 'Pisos grandes, mudanzas a menos espacio',
          parrafos: [
            'Pasar de un piso familiar a uno más pequeño obliga a elegir. Recomendamos hacerlo antes de la mudanza, con la persona y la familia, y medir el espacio de destino para saber qué cabe. Así el día de la mudanza solo viaja lo que va a usarse.',
          ],
        },
        {
          titulo: 'Accesos en el distrito',
          parrafos: [
            'En algunos edificios de los sesenta el ascensor no llega a nivel de calle y hay unos escalones en el portal. En las fincas antiguas de Jerónimos, el ascensor es pequeño. Organizamos la mudanza para que la persona no tenga que moverse por el edificio durante la carga.',
          ],
        },
        {
          titulo: 'Quedarse cerca',
          parrafos: [
            'Muchas personas prefieren seguir en el distrito, cerca del parque, de su centro de salud y de sus vecinos. Si la mudanza es dentro de Retiro, el trayecto es corto y podemos dejar lo básico montado en pocas horas.',
          ],
        },
        {
          titulo: 'Residencias y viviendas tuteladas',
          parrafos: [
            'Si el destino es una residencia, preguntamos el horario de entrada de muebles y qué está permitido en la habitación: suele caber una butaca, una cómoda pequeña, la televisión y objetos personales. Llevamos solo eso y lo colocamos como la persona prefiera.',
          ],
        },
        {
          titulo: 'Consejos para la familia',
          parrafos: [
            'Preparad una bolsa con medicación, gafas, documentación y lo necesario para los primeros días. Haced fotos de cómo estaban colocados los muebles y los cuadros: reproducir algo de ese orden ayuda a que la nueva casa se sienta propia.',
          ],
        },
        {
          titulo: 'Cuando la mudanza va a casa de un hijo',
          parrafos: [
            'Muchas mudanzas de personas mayores del distrito acaban en casa de un hijo o una hija, en Madrid o en otro municipio. Allí el espacio suele ser una habitación. Ayuda llevar la cama propia, su butaca y algunos objetos de siempre, y guardar o repartir el resto. Coordinamos con ambas casas el día y la hora para que la persona llegue cuando su habitación ya esté preparada.',
          ],
        },
        {
          titulo: 'Documentos, medicación y objetos personales',
          parrafos: [
            'Antes de embalar, la familia debería apartar la documentación, la medicación, las gafas, los audífonos y las llaves en una bolsa que viaje con la persona, nunca en el camión. También los objetos de valor sentimental que no quiera perder de vista. Nosotros nos ocupamos del resto y marcamos las cajas con lo que contienen, para que en la nueva casa sea fácil encontrar cada cosa.',
          ],
        },
        {
          titulo: 'Los primeros días en la nueva casa',
          parrafos: [
            'Que la casa esté lista no termina con la descarga. Si la familia lo prefiere, podemos volver unos días después para colgar algún cuadro que faltó, mover un mueble que no quedó a gusto de la persona o recoger cajas vacías. Son detalles pequeños que ayudan a que la mudanza se viva como un cambio a mejor y no como una pérdida.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Visita tranquila', texto: 'Con la persona y la familia, para entender qué se necesita.' },
        { titulo: 'Elegir qué viaja', texto: 'Según el espacio de la nueva vivienda.' },
        { titulo: 'Embalaje completo', texto: 'Para que nadie tenga que cargar nada.' },
        { titulo: 'Carga sin presencia', texto: 'Con la persona acompañada fuera del piso.' },
        { titulo: 'Casa lista', texto: 'Cama, armario y objetos personales colocados.' },
      ],
      incluye: [
        'Si lo que no cabe se reparte entre varios familiares o va a un guardamuebles, lo organizamos en el mismo día cuando es posible.',
      ],
      precio: [
        'Se calcula como una mudanza de piso, con el embalaje completo, que en estos casos casi siempre conviene. El tipo de edificio en Retiro influye en el tiempo de carga.',
      ],
      faqs: [
        { pregunta: '¿Coordináis la mudanza con los hijos?', respuesta: 'Sí. Una sola persona de contacto habla con quien prefiráis.' },
        { pregunta: '¿Tiene que estar la persona presente?', respuesta: 'No es necesario durante la carga. Recomendamos que esté acompañada fuera.' },
        { pregunta: '¿Lleváis muebles a residencias?', respuesta: 'Sí, preguntando antes el espacio y el horario de entrada.' },
        { pregunta: '¿Qué pasa con lo que no cabe?', respuesta: 'Va a familiares, a un guardamuebles o se retira, como decidáis.' },
        { pregunta: '¿Montáis la cama el mismo día?', respuesta: 'Sí, la cama y lo básico quedan listos.' },
        { pregunta: '¿Trasladáis un sillón relax o una cama articulada?', respuesta: 'Sí, protegidos y, si hace falta, desmontados.' },
        { pregunta: '¿Podéis colgar cuadros?', respuesta: 'Podemos valorarlo para que la nueva casa se sienta propia.' },
      ],
    },

    /* ============================ ELEVADOR ============================ */
    'subida-muebles-elevador': {
      gancho: 'Muebles por la fachada en avenidas anchas y fincas antiguas.',
      intro: [
        'En Retiro hay dos situaciones en las que el elevador exterior resuelve una mudanza: las fincas antiguas de Jerónimos e Ibiza, con ascensores pequeños y escaleras que no dejan pasar muebles grandes, y los pisos altos con terraza donde un sofá o un armario no entran por la puerta. El distrito tiene, además, avenidas anchas que facilitan colocar el equipo.',
        'Te explicamos cuándo conviene y qué hace falta.',
      ],
      zona: [
        {
          titulo: 'Fachadas con balcón o terraza',
          parrafos: [
            'Muchas fincas de Jerónimos e Ibiza tienen balcones con puertas amplias, y bastantes pisos de Estrella tienen terrazas. Son buenos puntos de entrada para muebles grandes si el hueco es suficiente y la fachada da a una calle donde pueda colocarse el elevador.',
          ],
        },
        {
          titulo: 'Avenidas y calles interiores',
          parrafos: [
            'En O’Donnell, Menéndez Pelayo o Doctor Esquerdo hay espacio, pero también mucho tráfico. En las calles interiores de Ibiza o Jerónimos el espacio es más justo, con coches aparcados a ambos lados. En las urbanizaciones de Estrella, la fachada puede quedar lejos de la calle. Lo valoramos con fotos antes de proponerte nada.',
          ],
        },
        {
          titulo: 'Autorización',
          parrafos: [
            'En Madrid, el uso de elevadores para mudanzas requiere autorización para ocupar la vía pública. Se solicita con antelación y lleva tasas por el documento y por metro lineal y día. Consulta la ficha oficial de la sede electrónica antes de solicitarla, porque las cifras se actualizan cada año.',
          ],
        },
        {
          titulo: 'Urbanizaciones privadas',
          parrafos: [
            'Si la fachada da a una zona interior de la urbanización, el elevador tendría que colocarse en suelo privado. En ese caso hace falta el permiso de la comunidad, y a veces el acceso del equipo no es posible. Pregunta al administrador antes de contar con esta opción.',
          ],
        },
        {
          titulo: 'Qué preparar',
          parrafos: [
            'Mide el mueble y el hueco de entrada, haz una foto de la fachada y de la calle y retira del balcón o la terraza todo lo que estorbe. Avisa a los vecinos del día, porque la acera frente al portal quedará ocupada durante la maniobra.',
          ],
        },
        {
          titulo: 'Pisos altos con terraza en Estrella',
          parrafos: [
            'En las torres de Estrella hay pisos altos con terrazas amplias. Cuando un sofá o un armario no caben en el ascensor ni giran en la escalera, la terraza es la entrada natural, pero la altura de estos edificios limita qué equipos pueden llegar. Por encima de ciertas plantas, el elevador convencional no alcanza y hay que valorar otras soluciones, como desmontar más el mueble.',
          ],
        },
        {
          titulo: 'Mudanzas completas con elevador',
          parrafos: [
            'En fincas antiguas con ascensor diminuto, a veces compensa hacer toda la mudanza con elevador en lugar de solo un mueble: las cajas y los muebles bajan por fuera a un ritmo constante y la escalera queda libre para los vecinos. Es más caro que una mudanza normal, pero puede ahorrar muchas horas. Te lo planteamos si vemos que es tu caso, con los dos precios a la vista para que compares.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Fotos y medidas', texto: 'Del mueble, del hueco de entrada, de la fachada y de la calle.' },
        { titulo: 'Viabilidad', texto: 'Comprobamos si hay sitio y si el acceso es público o privado.' },
        { titulo: 'Permisos', texto: 'Te indicamos la autorización municipal o de la comunidad que hace falta.' },
        { titulo: 'Subida', texto: 'El mueble sube protegido y sujeto, con el balcón cubierto.' },
        { titulo: 'Colocación', texto: 'Lo situamos en su habitación y retiramos protecciones.' },
      ],
      incluye: [
        'Si hay varias piezas que no pasan por la escalera, las subimos en la misma maniobra para usar el elevador y la autorización una sola vez y no ocupar la calle dos días.',
      ],
      precio: [
        'Al precio del elevador se suman las tasas municipales cuando hacen falta. Si el mueble puede desmontarse y subir por la escalera, a veces sale más económico, y te lo diremos.',
      ],
      faqs: [
        { pregunta: '¿Se puede subir un sofá a un piso de Jerónimos con elevador?', respuesta: 'A menudo sí, si el balcón da a la calle y hay espacio para colocar el equipo.' },
        { pregunta: '¿Hace falta permiso?', respuesta: 'Sí, del Ayuntamiento para ocupar la vía pública. Si es suelo privado, de la comunidad.' },
        { pregunta: '¿Se puede usar en una urbanización de Estrella?', respuesta: 'Si la fachada da a zona privada, necesitas permiso de la comunidad y que el equipo pueda acceder.' },
        { pregunta: '¿Cuánto cuesta?', respuesta: 'La plataforma en sí suele costar entre 150 y 300 euros según altura y duración; a eso se añade lo que cobre el Ayuntamiento por ocupar la calle, si es vía pública.' },
        { pregunta: '¿Hasta qué altura llega?', respuesta: 'Depende del equipo y de la fachada. Lo concretamos al valorar.' },
        { pregunta: '¿Y si no es posible?', respuesta: 'Valoramos desmontar el mueble o subirlo por la escalera con más personas.' },
        { pregunta: '¿Podéis subir varios muebles a la vez?', respuesta: 'Sí. Conviene agruparlos en una misma maniobra.' },
      ],
    },
  },
};

export default retiro;
