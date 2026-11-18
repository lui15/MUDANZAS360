import type { ContenidoZona } from '../tipos';

/**
 * Salamanca (distrito 4). Barrios: Recoletos, Goya, Fuente del Berro, Guindalera, Lista y
 * Castellana, todos dentro del SER según el Ayuntamiento de Madrid (consultado el 10/11/2026).
 */
const salamanca: ContenidoZona = {
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
      gancho: 'Pisos señoriales con portero y calles de comercio intenso.',
      intro: [
        'El distrito de Salamanca nació como ensanche residencial en la segunda mitad del siglo XIX y conserva esa trama de calles rectas, manzanas cerradas y fincas de cinco a siete alturas. En Recoletos, Castellana y Goya predominan los pisos señoriales, amplios y de techos altos; Lista mezcla fincas clásicas con edificios de mediados del siglo XX; Guindalera y Fuente del Berro, más al este, tienen bloques de distintas épocas y una vida de barrio más tranquila.',
        'Mudarse aquí tiene sus propias reglas: porteros que organizan el portal, ascensores que no siempre admiten muebles, calles comerciales con poco hueco para parar y muebles de mucho valor. Te contamos cómo lo hacemos.',
      ],
      zona: [
        {
          titulo: 'Fincas del ensanche',
          parrafos: [
            'Las fincas de Recoletos, Castellana y Goya suelen tener portal amplio, escalera principal de buena anchura y, a menudo, escalera de servicio. Los ascensores se instalaron en muchos casos a principios del siglo XX o se renovaron después, con cabinas que admiten personas y cajas pero no muebles grandes. Un sofá, un armario o una mesa de comedor de las que abundan en el distrito bajan por la escalera, protegida de arriba abajo.',
            'La escalera de servicio, cuando existe, es estrecha y empinada, y no siempre conviene usarla para muebles. Te diremos cuál es mejor en tu edificio.',
          ],
        },
        {
          titulo: 'Porteros y normas de comunidad',
          parrafos: [
            'En buena parte del distrito hay portería. El portero suele indicar en qué horario se pueden hacer mudanzas, si hay que proteger el ascensor y por dónde deben entrar los muebles. Hablar con él antes del día ahorra muchos problemas: es quien sabe si el ascensor se puede bloquear, dónde está el cuarto de basuras o si la comunidad exige una fianza por posibles daños.',
          ],
        },
        {
          titulo: 'Lista, Guindalera y Fuente del Berro',
          parrafos: [
            'Hacia el este y el norte del distrito cambian los edificios. En Lista conviven fincas clásicas con bloques de los años cincuenta a setenta, más regulares por dentro. En Guindalera y Fuente del Berro hay de todo: casas antiguas de pocas plantas, bloques con ascensor amplio y algunos edificios recientes con garaje. Allí las mudanzas suelen ser más sencillas, aunque las calles interiores son estrechas y con coches aparcados a ambos lados.',
          ],
        },
        {
          titulo: 'Calles comerciales y aparcamiento',
          parrafos: [
            'Serrano, Velázquez, Goya, Ortega y Gasset, Claudio Coello o Jorge Juan concentran comercio y oficinas, con mucho movimiento de reparto durante el día. Las zonas de carga y descarga se ocupan pronto y las calles son de sentido único. Todo el distrito está dentro del Servicio de Estacionamiento Regulado. Para camiones de más de 3.500 kilos o con elevador, el Ayuntamiento exige autorización para ocupar la vía pública, que hay que solicitar con antelación.',
          ],
        },
        {
          titulo: 'Muebles de valor',
          parrafos: [
            'En los pisos del distrito es frecuente encontrar muebles antiguos, piezas de diseño, alfombras, obras de arte y lámparas delicadas. Cada una pide su protección: mantas y cartón para las superficies, cantoneras para los marcos, embalaje a medida para las piezas singulares. Si hay algo de gran valor, dínoslo al pedir presupuesto para valorar un embalaje especial.',
          ],
        },
        {
          titulo: 'Dificultades más habituales',
          parrafos: [
            'Las tres que más vemos son el ascensor que no admite muebles, el horario que marca la comunidad y la dificultad para parar el camión en calles comerciales a media mañana. Con las tres resueltas de antemano, una mudanza en el distrito es tan predecible como en cualquier otro barrio.',
          ],
        },
        {
          titulo: 'Consejos para vecinos de Salamanca',
          parrafos: [
            'Habla con el portero una semana antes y pregúntale por el horario y las normas. Mide el ascensor si tienes muebles medianos que podrían caber. Fotografía las piezas de valor antes de la mudanza. Y si tu calle es muy comercial, plantea la mudanza a primera hora o en sábado por la tarde, cuando el reparto ha terminado.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Visita o fotos', texto: 'Vemos el piso, los muebles de valor y el acceso; si hace falta, vamos sin compromiso.' },
        { titulo: 'Normas del edificio', texto: 'Hablamos contigo de lo que haya indicado el portero: horario, ascensor y protecciones.' },
        { titulo: 'Vehículo y permiso', texto: 'Camión o furgoneta según la calle, y autorización municipal cuando el vehículo la necesita.' },
        { titulo: 'Protección y carga', texto: 'Cubrimos portal, ascensor y escalera, embalamos lo delicado y cargamos por estancias.' },
        { titulo: 'Entrega y montaje', texto: 'Montamos y colocamos cada pieza, con especial cuidado en las de valor.' },
      ],
      incluye: [
        'En las fincas con portero dejamos el portal y la escalera como los encontramos: retiramos las protecciones al terminar y revisamos con él que no haya ningún desperfecto en las zonas comunes.',
      ],
      precio: [
        'En el distrito, el precio depende mucho de la cantidad de piezas delicadas y de si los muebles bajan por la escalera. Un piso de tres habitaciones en Guindalera con ascensor amplio puede quedarse en la media; uno similar en Recoletos, con muebles antiguos y sin ascensor útil para ellos, sube.',
      ],
      faqs: [
        { pregunta: '¿Hacéis mudanzas en el barrio de Salamanca con portero?', respuesta: 'Sí. Hablamos contigo de las normas que indique el portero y adaptamos horario y protecciones a ellas.' },
        { pregunta: '¿Podéis bajar muebles por la escalera de servicio?', respuesta: 'Si es lo bastante ancha, sí. A menudo es estrecha y empinada, así que valoramos si conviene más la principal.' },
        { pregunta: '¿Hace falta autorización para el camión?', respuesta: 'Para vehículos de más de 3.500 kilos o con elevador, sí, del Ayuntamiento, con antelación. Las mudanzas pequeñas con furgoneta no suelen necesitarla.' },
        { pregunta: '¿Trasladáis muebles antiguos y obras de arte?', respuesta: 'Sí, con embalaje a medida. Si alguna pieza tiene un valor especial, dínoslo para prepararla aparte.' },
        { pregunta: '¿Cuál es la mejor hora para mudarse en Serrano o Velázquez?', respuesta: 'A primera hora, antes de que se llene la carga y descarga, o el sábado por la tarde.' },
        { pregunta: '¿Me pedirán una fianza en la comunidad?', respuesta: 'Algunas comunidades del distrito lo hacen. Pregúntalo al portero o al administrador antes del día.' },
        { pregunta: '¿Cuánto tarda una mudanza de un piso grande?', respuesta: 'Un piso de cuatro o cinco habitaciones con muebles grandes puede necesitar más de una jornada, sobre todo si se embala todo.' },
        { pregunta: '¿Os ocupáis de colgar cuadros y lámparas?', respuesta: 'Podemos valorarlo. Para lámparas que requieran tocar la instalación eléctrica, debe intervenir un electricista.' },
      ],
    },

    /* ============================ PORTES ============================ */
    portes: {
      gancho: 'Compras de diseño y antigüedades entregadas dentro de casa.',
      intro: [
        'El distrito de Salamanca concentra tiendas de mobiliario, decoración, iluminación y antigüedades, sobre todo en torno a Serrano, Claudio Coello, Jorge Juan, Lagasca y Hermosilla. Cuando una compra es demasiado grande para el coche, o cuando hay que llevar una pieza de una casa a otra, un porte con furgoneta, conductor y operario es la forma más práctica de hacerlo.',
        'Te explicamos cómo hacemos los portes en el distrito, de la recogida en tienda a la entrega en el salón.',
      ],
      zona: [
        {
          titulo: 'Recoger en tiendas del distrito',
          parrafos: [
            'Muchas tiendas del barrio tienen el almacén en otra dirección o entregan en la trastienda. Antes de ir confirmamos dónde está la pieza, si sale montada o en caja y quién la entrega. Para muebles de diseño o antigüedades, pedimos que nos indiquen si hay alguna parte frágil, como un tablero de cristal o mármol, que deba viajar por separado.',
          ],
        },
        {
          titulo: 'Piezas delicadas',
          parrafos: [
            'En los portes del distrito abundan las piezas que no admiten golpes: mesas con sobre de mármol, lámparas de cristal, espejos grandes, cómodas antiguas con marquetería. Viajan envueltas en mantas, con cantoneras y bien sujetas, nunca con otros objetos encima. Si la tienda proporciona un embalaje original, lo conservamos.',
          ],
        },
        {
          titulo: 'Subir sin dañar zonas comunes',
          parrafos: [
            'Muchas fincas del distrito tienen portero y normas sobre la entrada de muebles. Aunque sea una sola pieza, conviene avisarle: puede pedir que se proteja el ascensor o que se use una entrada concreta. En los edificios con ascensor pequeño, la pieza sube por la escalera con dos personas.',
          ],
        },
        {
          titulo: 'Parar en calles comerciales',
          parrafos: [
            'En Serrano, Velázquez o Goya el tráfico y el reparto ocupan la carga y descarga durante buena parte del día. Una furgoneta encuentra hueco con más facilidad que un camión, y para un porte es lo adecuado. En las calles más tranquilas de Guindalera o Fuente del Berro, parar suele ser más sencillo.',
          ],
        },
        {
          titulo: 'Portes entre casas',
          parrafos: [
            'No todos los portes son compras. Muchos son una cómoda que pasa a casa de un hijo, unas sillas que se prestan para una celebración o los muebles de un despacho que se reorganiza. En esos casos el trayecto es corto y lo que cuenta es la carga y la descarga en cada edificio.',
          ],
        },
        {
          titulo: 'Electrodomésticos y colchones',
          parrafos: [
            'También llevamos electrodomésticos, colchones y somieres. Si sustituyen a otros, dinos si hay que retirar los viejos. La instalación de aparatos con conexión de agua o gas corresponde a la tienda o a un técnico; nosotros los dejamos en su sitio.',
          ],
        },
        {
          titulo: 'Qué necesitamos saber',
          parrafos: [
            'Una foto de la pieza, sus medidas, las direcciones de recogida y entrega, la planta y si el ascensor admite la pieza. Si la entrega es en un edificio con portero, el horario en el que se permite. Con eso podemos darte el precio sin sorpresas.',
          ],
        },
        {
          titulo: 'Alfombras y textiles grandes',
          parrafos: [
            'En el distrito se mueven muchas alfombras de buen tamaño, a menudo de lana o de seda, que vuelven de una limpieza o una restauración o pasan de una casa a otra. No se doblan: viajan enrolladas sobre un tubo o con el pelo hacia dentro y envueltas para que no se ensucien. Si es muy pesada, enviamos dos personas aunque sea una sola pieza.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Datos y foto', texto: 'Qué pieza es, sus medidas y dónde se recoge y entrega.' },
        { titulo: 'Coordinación con la tienda', texto: 'Hora, almacén y piezas frágiles que viajen aparte.' },
        { titulo: 'Protección', texto: 'Mantas, cantoneras y sujeción en la furgoneta.' },
        { titulo: 'Entrega con portero', texto: 'Respetamos el horario y protegemos ascensor o escalera.' },
        { titulo: 'Colocación', texto: 'Dejamos la pieza en su sitio y retiramos el embalaje si lo pides.' },
      ],
      incluye: [
        'Si la pieza llega con cristal o mármol separado, lo montamos en destino con cuidado y comprobamos que asienta bien antes de irnos.',
      ],
      precio: [
        'Un porte de una o dos piezas dentro del distrito suele quedarse en la tarifa de partida. Las piezas muy pesadas o delicadas, la escalera sin ascensor útil o las esperas en tienda hacen que se calcule por horas.',
      ],
      faqs: [
        { pregunta: '¿Recogéis compras en tiendas de Serrano o Claudio Coello?', respuesta: 'Sí. Coordinamos la recogida con la tienda y lo llevamos a tu domicilio.' },
        { pregunta: '¿Lleváis antigüedades?', respuesta: 'Sí, protegidas con mantas y cantoneras. Si la pieza es muy valiosa, conviene que lo indiques antes.' },
        { pregunta: '¿Subís el mueble hasta el piso?', respuesta: 'Sí, siempre hasta dentro de la vivienda.' },
        { pregunta: '¿Necesito avisar al portero?', respuesta: 'Es recomendable. Muchas fincas tienen horarios y normas para la entrada de muebles.' },
        { pregunta: '¿Montáis la pieza si viene en partes?', respuesta: 'Sí. Montamos tableros, patas o estructuras sencillas en destino.' },
        { pregunta: '¿Retiráis el embalaje?', respuesta: 'Si lo pides, nos lo llevamos al terminar.' },
        { pregunta: '¿Cuánto tarda?', respuesta: 'Con la pieza lista en tienda y ascensor útil en destino, lo normal es terminar antes de que pase la franja incluida en la tarifa básica.' },
        { pregunta: '¿Hacéis portes a otras zonas de Madrid?', respuesta: 'Sí, desde Salamanca a cualquier punto de la ciudad o de la Comunidad.' },
      ],
    },

    /* ============================ OFICINAS ============================ */
    'mudanzas-oficinas': {
      gancho: 'Sedes junto a la Castellana y despachos en pisos clásicos.',
      intro: [
        'El distrito de Salamanca es uno de los grandes centros de oficinas de Madrid. En el eje de la Castellana y en calles como Serrano, Velázquez o Ortega y Gasset hay sedes de empresas, despachos de abogados, consultoras, gestoras de patrimonio y estudios profesionales, muchos en pisos de fincas clásicas reconvertidos. Trasladar una oficina aquí exige respetar normas de edificio, horarios y, a menudo, una imagen ante clientes.',
        'Así es como lo organizamos.',
      ],
      zona: [
        {
          titulo: 'Edificios de oficinas en la Castellana',
          parrafos: [
            'Los edificios de oficinas del eje de la Castellana y de las calles cercanas suelen tener muelle o acceso por garaje, montacargas y normas estrictas de la propiedad: horarios permitidos, protección obligatoria de ascensores y zonas comunes, seguro de responsabilidad civil y, a veces, presencia de personal de seguridad. Pedimos esas normas con antelación para preparar el plan.',
          ],
        },
        {
          titulo: 'Despachos en fincas residenciales',
          parrafos: [
            'Muchos despachos ocupan pisos señoriales de Recoletos, Castellana o Goya. Por dentro son oficinas, pero por fuera son edificios de viviendas, con portero, vecinos y un ascensor que no admite muebles grandes. Las mesas de dirección, los armarios de archivo y las librerías se desmontan y bajan por la escalera, y el traslado se hace cuando menos molesta a los vecinos.',
          ],
        },
        {
          titulo: 'Archivo y confidencialidad',
          parrafos: [
            'En despachos de abogados, asesorías o gestoras de patrimonio, el archivo es documentación sensible. Lo embalamos en cajas cerradas y numeradas, con un inventario que entregamos a la persona responsable, y viaja en el mismo vehículo que el resto sin quedar en ningún momento sin vigilancia.',
          ],
        },
        {
          titulo: 'Horario del traslado',
          parrafos: [
            'Para no interrumpir la actividad ni coincidir con clientes, solemos plantear el traslado en viernes por la tarde y sábado, o en varias tardes por departamentos. En calles muy comerciales, el sábado por la tarde y el domingo son los momentos con menos reparto.',
          ],
        },
        {
          titulo: 'Tráfico y permisos',
          parrafos: [
            'El distrito tiene estacionamiento regulado y mucho tráfico en horario laboral. Para camiones de más de 3.500 kilos hay que pedir autorización para ocupar la vía pública. En edificios con muelle o garaje, el vehículo puede entrar y la autorización no siempre es necesaria.',
          ],
        },
        {
          titulo: 'Mobiliario de dirección y salas de reuniones',
          parrafos: [
            'Las mesas de juntas de madera maciza, las sillas de dirección y las piezas de decoración de recepciones requieren embalaje cuidadoso. Las mesas grandes se desmontan cuando su estructura lo permite y los tableros viajan de canto con protección completa.',
          ],
        },
        {
          titulo: 'Preparar a la empresa',
          parrafos: [
            'Nombra a un responsable de la mudanza, define el archivo que se traslada y el que se destruye, y contrata con antelación las comunicaciones de la nueva sede. Pide a cada persona que vacíe su puesto y se lleve lo personal. El día del traslado, todo debería estar en cajas.',
          ],
        },
        {
          titulo: 'Recepciones y espacios de imagen',
          parrafos: [
            'En muchas sedes del distrito la recepción y las salas de reuniones forman parte de la imagen ante los clientes. Conviene que sean lo primero en quedar montado en la nueva oficina, aunque el resto se coloque después. Lo planificamos así: mobiliario de recepción, rótulos móviles, plantas y decoración llegan en el primer viaje y se dejan en su sitio antes de abrir.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Visita y normas', texto: 'Vemos la oficina y pedimos las normas de ambos edificios.' },
        { titulo: 'Plan por departamentos', texto: 'Orden de traslado y horario que menos interrumpa.' },
        { titulo: 'Embalaje e inventario', texto: 'Cajas numeradas por puesto y archivo con su lista.' },
        { titulo: 'Traslado fuera de horario', texto: 'Viernes por la tarde, sábado o por fases.' },
        { titulo: 'Montaje y comprobación', texto: 'Puestos montados y cajas en su sitio para el lunes.' },
      ],
      incluye: [
        'Entregamos a la empresa la lista de cajas con su destino, de forma que cualquiera pueda comprobar que ha llegado todo.',
      ],
      precio: [
        'Un despacho en un piso señorial puede costar más por puesto que una planta de oficinas con montacargas, por la escalera y el embalaje del mobiliario de dirección. Tras la visita te damos un precio cerrado.',
      ],
      faqs: [
        { pregunta: '¿Trasladáis despachos de abogados con archivo confidencial?', respuesta: 'Sí. El archivo va en cajas cerradas y numeradas con inventario, y viaja siempre con el resto de la carga.' },
        { pregunta: '¿Podéis cumplir las normas del edificio de oficinas?', respuesta: 'Sí. Pedimos las normas con antelación y adaptamos horario, protecciones y documentación.' },
        { pregunta: '¿Trabajáis en fin de semana?', respuesta: 'Sí, es lo más habitual en el distrito para no interrumpir la actividad.' },
        { pregunta: '¿Desmontáis mesas de juntas?', respuesta: 'Sí, cuando la estructura lo permite. Si no, la bajamos protegida por la vía más amplia.' },
        { pregunta: '¿Hace falta permiso para el camión?', respuesta: 'Solo cuando el camión pesado se queda en la calzada; si el edificio de destino tiene muelle de carga o un garaje donde quepa, normalmente se evita el trámite municipal.' },
        { pregunta: '¿Lleváis el mobiliario sobrante a un guardamuebles?', respuesta: 'Sí, hasta que decidáis qué hacer con él.' },
        { pregunta: '¿Trasladáis por fases?', respuesta: 'Sí, por departamentos o por plantas, para mantener la actividad.' },
        { pregunta: '¿Cuánto tarda una oficina de veinte puestos?', respuesta: 'Con el embalaje hecho, suele resolverse en un fin de semana. Lo concretamos tras la visita.' },
      ],
    },

    /* ============================ GUARDAMUEBLES ============================ */
    guardamuebles: {
      gancho: 'Para reformas integrales y muebles que no conviene vender.',
      intro: [
        'En el distrito de Salamanca las reformas suelen ser integrales: se abren espacios, se cambian suelos y se renuevan instalaciones en pisos de más de un siglo. Durante meses, el piso no puede habitarse ni guardar muebles. Además, muchas familias tienen piezas heredadas que no quieren vender aunque no les quepan, y obras de arte o alfombras que necesitan un sitio seguro.',
        'El guardamuebles resuelve ambas cosas. Te explicamos cómo lo hacemos desde el distrito.',
      ],
      zona: [
        {
          titulo: 'Reformas largas en fincas antiguas',
          parrafos: [
            'Una reforma integral en una finca de Recoletos o Goya puede durar varios meses. Las comunidades suelen fijar horarios para la obra y para la salida de escombros, y piden que la entrada y salida de muebles se coordine con el portero. Vaciamos el piso antes de que entren los operarios y lo devolvemos cuando la obra termina.',
          ],
        },
        {
          titulo: 'Piezas de valor',
          parrafos: [
            'Para muebles antiguos, cuadros y alfombras, el embalaje de almacenaje es tan importante como el espacio. Las superficies de madera se protegen sin plásticos que retengan humedad directamente sobre ellas, los cuadros van de pie y con cartón rígido, y las alfombras se enrollan, no se doblan. Si alguna pieza tiene un valor especial, conviene comentarlo para valorar condiciones específicas.',
          ],
        },
        {
          titulo: 'Recogida en el distrito',
          parrafos: [
            'Sacar los muebles para guardarlos es, en la práctica, una mudanza más: el portero marca el horario, lo voluminoso baja por la escalera principal y en calles como Velázquez o Goya hay que elegir bien el momento de parar. Cuando el volumen obliga a usar un camión pesado, tramitamos antes con el cliente la ocupación de la calzada.',
          ],
        },
        {
          titulo: 'Guardar mientras se vende o se compra',
          parrafos: [
            'En el distrito también es frecuente vender un piso para comprar otro, y que las fechas no coincidan. El comprador quiere el piso vacío el día de la firma, y la nueva casa aún no está disponible. El guardamuebles cubre ese tiempo.',
          ],
        },
        {
          titulo: 'Inventario y acceso',
          parrafos: [
            'Hacemos inventario de lo que se guarda, con referencia de cada caja y cada mueble. Si durante el almacenaje necesitas una pieza concreta, la localizamos y te la llevamos. Las condiciones de acceso se explican en el presupuesto.',
          ],
        },
        {
          titulo: 'Qué no conviene guardar',
          parrafos: [
            'Alimentos, productos inflamables, plantas, objetos de valor monetario como joyas o dinero, y documentación imprescindible. Lo demás, desde un dormitorio completo hasta una biblioteca, puede guardarse con seguridad.',
          ],
        },
        {
          titulo: 'Consejos',
          parrafos: [
            'Haz fotos de las piezas de valor antes de la recogida. Decide qué necesitarás durante el almacenaje y llévalo contigo. Y si la reforma cambia la distribución del piso, piensa dónde irá cada mueble a la vuelta: así lo montamos directamente en su sitio.',
          ],
        },
        {
          titulo: 'Guardar mientras se vive fuera',
          parrafos: [
            'Hay familias del distrito que pasan una temporada en el extranjero por trabajo y alquilan su piso amueblado solo en parte. Lo más valioso, lo más personal y lo que el inquilino no necesita se queda guardado. En esos casos preparamos un inventario detallado y embalamos pensando en un almacenaje largo, de forma que al volver todo esté como se dejó.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Qué y cuánto tiempo', texto: 'Volumen, piezas especiales y duración estimada.' },
        { titulo: 'Coordinación con el portero', texto: 'Horario de recogida y protección de zonas comunes.' },
        { titulo: 'Embalaje de almacenaje', texto: 'Protección adecuada a cada pieza y al tiempo de guarda.' },
        { titulo: 'Inventario', texto: 'Cada caja y mueble identificado.' },
        { titulo: 'Entrega y montaje', texto: 'Al piso reformado o a la nueva vivienda.' },
      ],
      incluye: [
        'Si la reforma termina por partes, podemos devolver primero lo necesario para habitar el piso y el resto cuando acabe la obra. Es frecuente en reformas largas en las que el dormitorio se termina antes que el salón.',
      ],
      precio: [
        'El almacenaje se paga por meses según el espacio. La recogida y la entrega se calculan como una mudanza, con el tiempo que supone la escalera y el embalaje de las piezas delicadas.',
      ],
      faqs: [
        { pregunta: '¿Guardáis los muebles durante una reforma integral?', respuesta: 'Sí. Vaciamos el piso antes de la obra y lo devolvemos al terminar, montado.' },
        { pregunta: '¿Cómo se guardan los cuadros?', respuesta: 'De pie, con cartón rígido y cantoneras, sin peso encima.' },
        { pregunta: '¿Y las alfombras?', respuesta: 'Enrolladas, nunca dobladas, y protegidas.' },
        { pregunta: '¿Puedo pedir un mueble concreto durante el almacenaje?', respuesta: 'Sí, con el inventario lo localizamos. Ese viaje se presupuesta aparte.' },
        { pregunta: '¿Necesito autorización para la recogida?', respuesta: 'Depende del tamaño de lo que guardes: unas cuantas piezas caben en una furgoneta sin trámite; para vaciar un piso entero en un solo viaje sí suele hacer falta pedirla.' },
        { pregunta: '¿Puedo devolver por partes?', respuesta: 'Sí. Lo necesario primero y el resto después.' },
        { pregunta: '¿Hay un mínimo de tiempo?', respuesta: 'Se contrata por meses. Te lo concretamos en el presupuesto.' },
        { pregunta: '¿Lleváis después a otra ciudad?', respuesta: 'Sí. La entrega puede ser en cualquier punto de España.' },
      ],
    },

    /* ============================ EMBALAJE ============================ */
    embalaje: {
      gancho: 'Porcelana, arte y lámparas embaladas pieza a pieza.',
      intro: [
        'En el distrito de Salamanca el embalaje suele ser la parte más delicada de la mudanza. Vajillas completas, cristalería, porcelana, cuadros, esculturas, lámparas de cristal y bibliotecas extensas son habituales en los pisos señoriales de Recoletos, Castellana y Goya. Embalarlos bien protege su valor y su historia.',
        'Te contamos cómo lo hacemos y cómo puedes ayudar a que el proceso sea rápido.',
      ],
      zona: [
        {
          titulo: 'Vajillas y cristalería',
          parrafos: [
            'Cada plato, copa y fuente se envuelve por separado. Los platos viajan de canto, no apilados, y las copas, en cajas con separadores o con relleno suficiente para que no se toquen. Las cajas de cristalería no llevan nada encima y se señalan en todas sus caras. Es un trabajo lento, pero es lo que evita roturas.',
          ],
        },
        {
          titulo: 'Arte y objetos decorativos',
          parrafos: [
            'Los cuadros con marco se protegen con cantoneras, cartón rígido y mantas; los lienzos sin cristal, sin presión sobre la superficie pintada. Las esculturas y figuras se acolchan y se inmovilizan dentro de su caja. Si alguna obra necesita un embalaje profesional de arte, con caja de madera, te lo diremos.',
          ],
        },
        {
          titulo: 'Lámparas y espejos',
          parrafos: [
            'Las lámparas de cristal con piezas colgantes se desmontan cuando es posible y cada pieza se envuelve aparte. Los espejos grandes viajan de pie, con cartón y cantoneras. La desconexión de lámparas de techo con instalación eléctrica la hace un electricista.',
          ],
        },
        {
          titulo: 'Bibliotecas',
          parrafos: [
            'Las bibliotecas se embalan en cajas pequeñas que no pesen demasiado, numeradas según la estantería y el orden de los libros. Así se pueden colocar en la nueva casa igual que estaban. Los libros antiguos o encuadernados con valor van envueltos y sin presión.',
          ],
        },
        {
          titulo: 'Ropa y armarios',
          parrafos: [
            'Para ropa de calidad usamos cajas armario con barra, que permiten trasladar la ropa colgada sin arrugas ni dobleces. La ropa doblada va en cajas grandes y ligeras. Los zapatos, en cajas propias.',
          ],
        },
        {
          titulo: 'Embalar sin bloquear la finca',
          parrafos: [
            'En los edificios con portero y horarios, conviene embalar uno o dos días antes y dejar el día de la mudanza solo para cargar. Así el ascensor y el portal están ocupados el menor tiempo posible.',
          ],
        },
        {
          titulo: 'Tu parte',
          parrafos: [
            'Aparta joyas, documentos, dinero y objetos de gran valor económico, que conviene que lleves tú. Señálanos las piezas con valor sentimental. Y si hay algo que no quieres que se embale, márcalo o ponlo en una habitación aparte.',
          ],
        },
        {
          titulo: 'Plata, cubertería y objetos de mesa',
          parrafos: [
            'Las cuberterías de plata, las bandejas y los candelabros se embalan en papel que no deje marcas ni restos, y nunca en contacto directo con plástico durante mucho tiempo. Si tienen estuche, viajan en él. Las piezas pequeñas se agrupan en cajas propias y señaladas, porque son las más fáciles de extraviar entre el resto del menaje.',
          ],
        },
        {
          titulo: 'Despachos y estudios en casa',
          parrafos: [
            'Muchas viviendas del distrito tienen un despacho con archivo personal, escritorio y equipos. Embalamos los papeles en cajas cerradas en el mismo orden en que estaban, con la etiqueta del cajón o la carpeta de origen, y los equipos informáticos con su cableado en una bolsa unida a cada aparato. Así el despacho se vuelve a montar en minutos.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Valoración', texto: 'Recorremos el piso para calcular materiales y tiempo.' },
        { titulo: 'Material adecuado', texto: 'Cajas de varios tamaños, cajas armario, separadores y cantoneras.' },
        { titulo: 'Frágil primero', texto: 'Vajilla, cristal, arte y lámparas con embalaje individual.' },
        { titulo: 'Etiquetado', texto: 'Cada caja con estancia de destino y aviso de frágil.' },
        { titulo: 'Desembalaje', texto: 'En destino, si lo contratas, abrimos y colocamos.' },
      ],
      incluye: [
        'Para vajillas y colecciones, podemos hacer un listado de lo que contiene cada caja, útil cuando se trata de piezas que quieres localizar enseguida en la nueva casa o revisar al desembalar.',
      ],
      precio: [
        'En el distrito, el embalaje suele estar en la parte alta del rango por la cantidad de piezas delicadas. Cuanto más frágil y más arte, más horas de trabajo. Lo valoramos tras ver el piso.',
      ],
      faqs: [
        { pregunta: '¿Embaláis vajillas y cristalería de valor?', respuesta: 'Sí, pieza a pieza y con cajas que no llevan peso encima.' },
        { pregunta: '¿Embaláis cuadros?', respuesta: 'Sí, con cantoneras y cartón rígido. Para obras que lo requieran, te indicamos si conviene un embalaje profesional de arte.' },
        { pregunta: '¿Desmontáis lámparas de cristal?', respuesta: 'Desmontamos y embalamos sus piezas. La desconexión eléctrica la hace un electricista.' },
        { pregunta: '¿Tenéis cajas para ropa colgada?', respuesta: 'Sí, cajas armario con barra.' },
        { pregunta: '¿Podéis hacer un listado del contenido de cada caja?', respuesta: 'Sí, para vajillas, colecciones o lo que necesites localizar rápido.' },
        { pregunta: '¿Embaláis el día antes?', respuesta: 'En pisos grandes, uno o dos días antes.' },
        { pregunta: '¿Qué precio tiene?', respuesta: 'El embalaje completo tiene un rango orientativo de 150 a 450 euros según volumen; en pisos con mucho frágil puede necesitar más tiempo.' },
        { pregunta: '¿Retiráis el material?', respuesta: 'Si contratas el desembalaje, sí.' },
      ],
    },

    /* ============================ MONTAJE ============================ */
    'montaje-muebles': {
      gancho: 'Muebles clásicos, librerías y armarios de gran altura.',
      intro: [
        'Los pisos del distrito de Salamanca tienen techos altos y muebles a su escala: librerías de suelo a techo, armarios de gran altura, aparadores con vitrinas y camas con dosel o cabecero de madera. Muchos no pasan enteros por ascensores pensados para personas. Desmontarlos y montarlos bien es imprescindible.',
        'Te explicamos cómo trabajamos con los muebles del distrito.',
      ],
      zona: [
        {
          titulo: 'Muebles antiguos',
          parrafos: [
            'Los muebles antiguos tienen ensamblajes de espiga, cola y tornillería que no conviene forzar. Desmontamos solo lo que está pensado para desmontarse, como cornisas, puertas, baldas o patas atornilladas, y protegemos el resto para que viaje entero. Si una pieza está frágil o tiene juntas abiertas, te lo comentamos antes de moverla.',
          ],
        },
        {
          titulo: 'Librerías y vitrinas',
          parrafos: [
            'Las librerías de gran altura se vacían, se desmontan por módulos y se marcan para volver a montarlas en el mismo orden. Las vitrinas se vacían, sus cristales se retiran y se embalan aparte, y sus estructuras viajan protegidas. En destino, nivelamos para que las puertas cierren como antes.',
          ],
        },
        {
          titulo: 'Muebles de diseño',
          parrafos: [
            'En pisos reformados del distrito abundan los muebles de diseño con herrajes ocultos y sistemas de montaje propios. Si tienes las instrucciones, guárdalas. Si no, fotografiamos cada paso del desmontaje para montarlos sin dudas.',
          ],
        },
        {
          titulo: 'Paso por ascensor y escalera',
          parrafos: [
            'Antes de desmontar comprobamos el ascensor, la escalera principal y, si existe, la de servicio. Muchas piezas que no caben en el ascensor pasan por la escalera si se retiran puertas o cornisas. Las que no pasan de ninguna forma pueden requerir elevador por fachada.',
          ],
        },
        {
          titulo: 'Montaje en paredes antiguas',
          parrafos: [
            'Las paredes de las fincas del ensanche pueden ser gruesas y de ladrillo macizo, o tabiques más ligeros en reformas. Antes de anclar un mueble alto comprobamos qué tipo de pared es y usamos la fijación adecuada. Si no es seguro anclar, te lo decimos.',
          ],
        },
        {
          titulo: 'Montar muebles nuevos',
          parrafos: [
            'También montamos muebles nuevos que lleguen en caja, aunque no formen parte de una mudanza. En el distrito es frecuente que alguien amueble un piso reformado con piezas de distintas tiendas y necesite montarlo todo en uno o dos días.',
          ],
        },
        {
          titulo: 'Consejos',
          parrafos: [
            'Vacía armarios y vitrinas, conserva instrucciones y herrajes originales, y dinos dónde irá cada mueble en el nuevo piso. Si cambian las alturas de techo, comprueba que tus librerías y armarios caben.',
          ],
        },
        {
          titulo: 'Camas de matrimonio y cabeceros grandes',
          parrafos: [
            'Las camas de los pisos señoriales suelen tener cabeceros de madera tallada o tapizados de gran tamaño, a veces fijados a la pared. Se desmontan separando cabecero, piecero y largueros, y el somier y el colchón viajan aparte, el colchón en funda. En destino montamos la cama en su posición definitiva y, si el cabecero va anclado, revisamos antes la pared.',
          ],
        },
        {
          titulo: 'Mesas de comedor grandes',
          parrafos: [
            'Las mesas de comedor del distrito suelen ser de madera maciza o con sobre de mármol o cristal, y no siempre caben por la puerta del salón ni giran en la escalera. Cuando el sobre se separa de la estructura, ambas partes viajan protegidas por separado y se unen de nuevo en el piso de destino, comprobando que la mesa quede estable y nivelada.',
          ],
        },
        {
          titulo: 'Muebles de exterior en áticos',
          parrafos: [
            'En los áticos y pisos con terraza del distrito también movemos muebles de exterior: mesas, tumbonas, jardineras y pérgolas desmontables. Se limpian lo justo para no ensuciar el interior del camión y se desmontan cuando su estructura lo permite. Las jardineras grandes con tierra conviene vaciarlas antes.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Lista y fotos', texto: 'Qué muebles hay que desmontar y montar.' },
        { titulo: 'Paso', texto: 'Medidas de ascensor, escalera y puertas.' },
        { titulo: 'Desmontaje cuidadoso', texto: 'Solo lo desmontable, con cada pieza marcada.' },
        { titulo: 'Traslado protegido', texto: 'Cristales aparte, estructuras envueltas.' },
        { titulo: 'Montaje y ajuste', texto: 'Nivelado, puertas ajustadas y anclaje si procede.' },
      ],
      incluye: [
        'Fotografiamos los muebles complejos antes de desmontarlos y usamos esas fotos como guía para montarlos exactamente igual.',
      ],
      precio: [
        'Cada mueble se presupuesta según su complejidad. Las librerías modulares y las vitrinas con cristales llevan más tiempo que un armario sencillo, y en pisos sin ascensor útil desmontar suele compensar.',
      ],
      faqs: [
        { pregunta: '¿Desmontáis muebles antiguos?', respuesta: 'Sí, solo lo que está pensado para desmontarse y sin forzar ensamblajes.' },
        { pregunta: '¿Y las vitrinas?', respuesta: 'Se vacían, se retiran sus cristales y se embalan aparte.' },
        { pregunta: '¿Montáis muebles de diseño?', respuesta: 'Sí, con sus instrucciones o fotografiando el desmontaje.' },
        { pregunta: '¿Anclais librerías altas?', respuesta: 'Sí, si la pared lo permite y con la fijación adecuada.' },
        { pregunta: '¿Montáis muebles nuevos en caja?', respuesta: 'Sí, también fuera de una mudanza.' },
        { pregunta: '¿Y si un mueble no pasa?', respuesta: 'Valoramos retirar más piezas o subirlo con elevador por fachada.' },
        { pregunta: '¿Lleváis herramientas?', respuesta: 'Sí, todas las necesarias.' },
        { pregunta: '¿Montáis el mismo día?', respuesta: 'Normalmente sí, al descargar.' },
      ],
    },

    /* ============================ URGENTES ============================ */
    'mudanzas-urgentes': {
      gancho: 'Ventas rápidas y cambios de destino con poco margen.',
      intro: [
        'En el distrito de Salamanca las urgencias suelen venir de operaciones inmobiliarias que se aceleran, traslados profesionales y alquileres que terminan antes de lo previsto. Con poco tiempo, las normas de las comunidades con portero y la dificultad para parar en calles comerciales pesan más que nunca.',
        'Te explicamos cómo organizamos una mudanza urgente en el distrito sin dejar nada al azar.',
      ],
      zona: [
        {
          titulo: 'Normas de comunidad con prisa',
          parrafos: [
            'Muchas comunidades del distrito tienen horarios para mudanzas y exigen proteger zonas comunes. Con una mudanza urgente, lo primero es hablar con el portero para saber cuándo podemos trabajar. A veces el horario disponible condiciona más que el volumen.',
          ],
        },
        {
          titulo: 'Vehículos sin autorización previa',
          parrafos: [
            'La autorización para ocupar la vía pública con un camión grande se pide con antelación. Si no hay margen, trabajamos con furgonetas que pueden usar la carga y descarga. En las calles comerciales, eso implica elegir bien la hora.',
          ],
        },
        {
          titulo: 'Embalaje rápido de piezas delicadas',
          parrafos: [
            'La prisa no puede poner en riesgo la porcelana, el cristal o el arte. Cuando el tiempo es corto, reforzamos el equipo de embalaje y empezamos por lo más frágil, dejando la ropa y los textiles para el final.',
          ],
        },
        {
          titulo: 'Guardamuebles para ganar tiempo',
          parrafos: [
            'Si la urgencia es salir y aún no hay destino, llevamos todo a un guardamuebles. Es la forma más rápida de liberar un piso vendido sin tener que decidir con prisas dónde irá cada cosa.',
          ],
        },
        {
          titulo: 'Mudanzas por fases',
          parrafos: [
            'Otra opción es dividir la mudanza: primero lo imprescindible a la nueva casa y, en días posteriores, el resto. Así se cumple la fecha de entrega sin renunciar a hacer bien la parte más delicada.',
          ],
        },
        {
          titulo: 'Coordinación con la operación',
          parrafos: [
            'Si la mudanza depende de la firma de una venta o de la entrega de llaves, conviene que nos digas la fecha y la hora en cuanto las sepas. Podemos tener todo cargado esperando la confirmación, o empezar justo después.',
          ],
        },
        {
          titulo: 'Lo que necesitamos ya',
          parrafos: [
            'Direcciones, plantas, si el ascensor admite muebles, normas de la comunidad, fotos de las estancias y la fecha límite. Con eso confirmamos rápidamente si llegamos y con qué equipo.',
          ],
        },
        {
          titulo: 'Traslados profesionales',
          parrafos: [
            'En el distrito viven muchos directivos y profesionales que cambian de destino con poco aviso. A veces la empresa cubre la mudanza y pide un presupuesto detallado en muy poco tiempo. Te lo enviamos por escrito, con lo que incluye y lo que no, para que puedas presentarlo sin esperar.',
          ],
        },
        {
          titulo: 'Lo que no puede esperar y lo que sí',
          parrafos: [
            'No todo tiene que salir el mismo día. Lo que necesitas para vivir, trabajar y dormir va primero; las colecciones, los libros y los muebles de salón pueden ir en un segundo viaje o pasar unas semanas en un guardamuebles. Separarlo al principio reduce mucho el equipo que hace falta el día de la urgencia.',
          ],
        },
        {
          titulo: 'Cuando la casa nueva está a medio terminar',
          parrafos: [
            'A veces la urgencia es entrar en un piso que aún tiene obra pendiente: pintores que no han acabado o una cocina sin montar. Podemos descargar solo en las habitaciones terminadas, dejar el resto embalado y protegido en una estancia cerrada y volver a colocarlo cuando los operarios terminen. Así se cumple la fecha de salida sin estropear muebles con polvo o pintura.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Contacto por WhatsApp', texto: 'Datos, fotos y fecha límite.' },
        { titulo: 'Horario con el portero', texto: 'Cuándo podemos trabajar en cada edificio.' },
        { titulo: 'Equipo reforzado', texto: 'Más personas para embalar y cargar.' },
        { titulo: 'Furgonetas si no hay permiso', texto: 'Sin depender de trámites largos.' },
        { titulo: 'Destino, fases o guardamuebles', texto: 'Según lo que necesites para cumplir la fecha.' },
      ],
      incluye: [
        'Aunque la mudanza sea urgente, entregamos un presupuesto por escrito y protegemos las zonas comunes como en cualquier otra.',
      ],
      precio: [
        'La urgencia añade un recargo sobre el precio normal. En el distrito, el embalaje de piezas delicadas y el horario de la comunidad influyen tanto como el volumen.',
      ],
      faqs: [
        { pregunta: '¿Podéis hacer una mudanza urgente en Salamanca?', respuesta: 'Sí, según disponibilidad. Escríbenos y te confirmamos.' },
        { pregunta: '¿Y si la comunidad solo permite mudanzas por la mañana?', respuesta: 'Nos adaptamos a ese horario y reforzamos el equipo si hace falta.' },
        { pregunta: '¿Embaláis la porcelana aunque haya prisa?', respuesta: 'Sí, con más personas y empezando por lo frágil.' },
        { pregunta: '¿Podéis guardar todo mientras busco casa?', respuesta: 'Sí, en un guardamuebles.' },
        { pregunta: '¿Hacéis la mudanza en varias fases?', respuesta: 'Sí, lo imprescindible primero y el resto después.' },
        { pregunta: '¿Cuánto cuesta la urgencia?', respuesta: 'Sube el presupuesto en una horquilla del quince al veinticinco por ciento, en función de los días que falten y del refuerzo de personal.' },
        { pregunta: '¿Podéis esperar a la firma de la venta?', respuesta: 'Sí, con la carga preparada para salir en cuanto se confirme.' },
        { pregunta: '¿Necesito permiso para el camión?', respuesta: 'Si no da tiempo a tramitarlo, usamos vehículos que no lo necesitan.' },
      ],
    },

    /* ============================ VACIADO ============================ */
    'vaciado-pisos': {
      gancho: 'Herencias de pisos señoriales con muebles de valor.',
      intro: [
        'Vaciar un piso en el distrito de Salamanca suele significar trabajar con muebles de valor, obras de arte, bibliotecas y objetos de familia acumulados durante generaciones. Es habitual en herencias, en ventas de pisos señoriales y antes de reformas integrales. Hacerlo bien requiere tiempo, criterio y cuidado.',
        'Te explicamos cómo lo hacemos.',
      ],
      zona: [
        {
          titulo: 'Antes de retirar, valorar',
          parrafos: [
            'En los pisos del distrito es frecuente que haya piezas con valor de mercado: muebles antiguos, cuadros, alfombras, lámparas o libros. Antes del vaciado recomendamos a la familia que valore si alguna pieza merece una tasación o una venta. Nosotros no tasamos, pero sí te avisamos cuando algo parece merecer una revisión.',
          ],
        },
        {
          titulo: 'Repartir entre herederos',
          parrafos: [
            'En las herencias, el contenido suele repartirse entre varios familiares. Marcamos cada pieza con su destinatario, embalamos y organizamos entregas a varias direcciones, en Madrid o fuera. Lo que nadie quiere se retira; lo que se quiere conservar sin destino claro, puede ir a un guardamuebles.',
          ],
        },
        {
          titulo: 'Pisos con escalera de servicio',
          parrafos: [
            'Muchas fincas del distrito tienen escalera de servicio y cuartos en la parte trasera o en la buhardilla. Los revisamos durante la visita, porque a menudo guardan muebles, baúles y cajas olvidados durante años.',
          ],
        },
        {
          titulo: 'Coordinación con el portero',
          parrafos: [
            'Un vaciado supone muchas horas de entradas y salidas. Lo coordinamos con el portero para respetar los horarios de la comunidad, proteger ascensor y escalera, y no bloquear el portal más de lo necesario.',
          ],
        },
        {
          titulo: 'Vehículo y calle',
          parrafos: [
            'Los pisos señoriales del distrito llenan con facilidad un camión de gran tonelaje, y eso implica tramitar antes la reserva de calzada. Donde hay tiendas a pie de calle, empezamos a cargar antes de que abran y llegue el reparto.',
          ],
        },
        {
          titulo: 'Documentos y recuerdos',
          parrafos: [
            'Revisad cajones, escritorios, libros y bolsillos antes del vaciado. En pisos con muchos años de historia aparecen escrituras, cartas, fotografías y joyas en lugares inesperados. Mejor encontrarlas antes que después.',
          ],
        },
        {
          titulo: 'Piso listo para vender o reformar',
          parrafos: [
            'Al terminar, el piso queda vacío y barrido. Si va a reformarse, podemos retirar también muebles de cocina y armarios que la obra vaya a sustituir, de modo que el constructor encuentre el espacio libre desde el primer día y no tenga que cobrar por desalojarlo.',
          ],
        },
        {
          titulo: 'Bibliotecas y archivos familiares',
          parrafos: [
            'En muchas herencias del distrito hay bibliotecas de miles de libros y archivos familiares con cartas, escrituras y fotografías. No se retiran sin revisarlos. Si la familia no tiene tiempo de hacerlo antes, podemos embalarlos en cajas numeradas y llevarlos a un guardamuebles o a casa de un familiar, para revisarlos con calma más adelante.',
          ],
        },
        {
          titulo: 'Muebles que merecen otra vida',
          parrafos: [
            'Antes de retirar muebles en buen estado, te comentamos si podrían donarse o venderse. Hay piezas clásicas que siguen teniendo demanda y otras que, aunque no tengan valor económico, pueden ser útiles para alguien. La decisión es de la familia, y nosotros nos ocupamos del traslado que haga falta.',
          ],
        },
        {
          titulo: 'Plazos con la venta',
          parrafos: [
            'Si el piso está vendido, la fecha de entrega manda. Recomendamos fijar el vaciado con margen sobre la firma, porque en pisos grandes con zonas de servicio y buhardilla siempre aparece algo más de lo previsto, y es mejor descubrirlo con tiempo.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Visita detallada', texto: 'Todo el piso, incluidas zonas de servicio y buhardilla.' },
        { titulo: 'Reparto', texto: 'Cada pieza marcada con su destinatario o su destino.' },
        { titulo: 'Embalaje', texto: 'Lo que se conserva se embala con cuidado.' },
        { titulo: 'Entregas y retirada', texto: 'Varias direcciones si hace falta, y retirada del resto.' },
        { titulo: 'Piso vacío', texto: 'Listo para vender, alquilar o reformar.' },
      ],
      incluye: [
        'Entregamos a la familia un resumen de qué ha ido a cada dirección, útil cuando hay varios herederos. Si alguna pieza ha ido a un guardamuebles, figura en el mismo documento con su referencia, para que cualquiera de ellos pueda pedirla después.',
      ],
      precio: [
        'Un vaciado en el distrito suele estar en la parte alta del rango por el volumen, el embalaje de piezas delicadas y las entregas a varias direcciones. Lo concretamos tras la visita.',
      ],
      faqs: [
        { pregunta: '¿Vaciáis pisos por herencia en Salamanca?', respuesta: 'Sí. Organizamos el reparto entre herederos y la retirada de lo que no se conserva.' },
        { pregunta: '¿Tasáis los muebles?', respuesta: 'No, pero te avisamos cuando una pieza parece merecer una tasación.' },
        { pregunta: '¿Entregáis a varias direcciones?', respuesta: 'Sí, en Madrid o en otras provincias.' },
        { pregunta: '¿Revisáis las zonas de servicio?', respuesta: 'Sí, incluidas buhardillas y cuartos traseros.' },
        { pregunta: '¿Coordináis con el portero?', respuesta: 'Sí, para respetar horarios y proteger zonas comunes.' },
        { pregunta: '¿Retiráis la cocina antes de una reforma?', respuesta: 'Sí, si nos lo indicáis. La desconexión de agua o gas la hace un profesional.' },
        { pregunta: '¿Cuánto tarda?', respuesta: 'Un piso grande puede necesitar varios días entre clasificación, embalaje y retirada.' },
        { pregunta: '¿Hay que estar presente?', respuesta: 'Al menos durante la clasificación. Después podemos trabajar con las llaves.' },
      ],
    },

    /* ============================ PERSONAS MAYORES ============================ */
    'mudanzas-personas-mayores': {
      gancho: 'Cambiar de casa sin renunciar a los muebles de siempre.',
      intro: [
        'Muchas personas mayores del distrito de Salamanca viven en pisos grandes, con muebles de toda una vida y, a menudo, con personal de servicio o portero que forma parte de su rutina. Mudarse a una vivienda más pequeña, a casa de un familiar o a una residencia es un cambio que hay que preparar con cuidado y sin prisas.',
        'Te contamos cómo lo organizamos para que la persona se sienta acompañada en todo momento.',
      ],
      zona: [
        {
          titulo: 'Elegir qué se lleva',
          parrafos: [
            'Pasar de un piso de cinco habitaciones a uno de dos obliga a elegir entre muebles queridos. Recomendamos hacerlo con la persona y la familia antes de la mudanza, midiendo el espacio de destino. Lo que no cabe puede repartirse entre familiares, guardarse o venderse con calma.',
          ],
        },
        {
          titulo: 'Reproducir el hogar',
          parrafos: [
            'Llevar los muebles de siempre a la nueva casa y colocarlos de forma parecida ayuda mucho a adaptarse. Fotografiamos la disposición del dormitorio y del salón para reproducirla, en la medida de lo posible, en el nuevo espacio.',
          ],
        },
        {
          titulo: 'Sin esperas ni escaleras',
          parrafos: [
            'Si la finca tiene ascensor pequeño o el portal tiene escalones, organizamos la mudanza para que la persona no tenga que estar presente durante la carga. Un familiar puede acompañarla y llegar a la nueva vivienda cuando ya esté preparada.',
          ],
        },
        {
          titulo: 'Residencias y viviendas con servicios',
          parrafos: [
            'Si el destino es una residencia o una vivienda con servicios, preguntamos antes el espacio disponible, el horario de entrada y qué muebles admiten. Lo habitual es llevar una butaca, una cómoda, la televisión, cuadros y objetos personales.',
          ],
        },
        {
          titulo: 'Coordinación con la familia',
          parrafos: [
            'Una sola persona de contacto de nuestra parte habla con quien la familia elija. Así nadie recibe mensajes contradictorios y la persona mayor no tiene que gestionar nada si no quiere.',
          ],
        },
        {
          titulo: 'Objetos de valor y documentación',
          parrafos: [
            'Las joyas, los documentos, la medicación y los objetos de valor económico deberían viajar con la persona o con un familiar, no en el camión. Nosotros nos ocupamos del resto con el cuidado que merecen las piezas delicadas.',
          ],
        },
        {
          titulo: 'Consejos',
          parrafos: [
            'Preparad con antelación la habitación de destino, haced una lista de lo imprescindible para la primera noche y respetad el ritmo de la persona. Una mudanza bien hecha es la que la persona recuerda como un cambio tranquilo.',
          ],
        },
        {
          titulo: 'Cuando hay personal de servicio',
          parrafos: [
            'En algunos hogares del distrito trabaja una persona de servicio que conoce cada armario mejor que nadie. Si la familia lo considera oportuno, contar con ella durante el embalaje ayuda mucho: sabe dónde está cada cosa, qué usa la persona a diario y cómo le gusta tenerlo colocado. En la nueva casa, su ayuda también facilita reproducir el orden de siempre.',
          ],
        },
        {
          titulo: 'Mudanzas dentro del mismo distrito',
          parrafos: [
            'No es raro que la mudanza sea a pocas calles: de un piso grande de Recoletos a uno más pequeño con ascensor en Lista o en Guindalera, para seguir cerca de la parroquia, el médico y los amigos. El trayecto es corto y podemos dejar el dormitorio y el salón montados en una mañana.',
          ],
        },
        {
          titulo: 'Una butaca, una lámpara, una mesita',
          parrafos: [
            'En las mudanzas a espacios pequeños solemos recomendar llevar tres o cuatro piezas que la persona usa cada día y con las que se identifica: su butaca, la lámpara de lectura, la mesita con sus fotos. Colocarlas igual que en el piso anterior, con la misma luz y la misma orientación, hace que la nueva habitación se sienta conocida desde el primer día.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Conversación y visita', texto: 'Con la persona y la familia, sin prisas.' },
        { titulo: 'Selección con medidas', texto: 'Lo que cabe y lo que no en el nuevo espacio.' },
        { titulo: 'Embalaje completo', texto: 'Incluidas piezas delicadas y recuerdos.' },
        { titulo: 'Mudanza sin presencia', texto: 'La persona llega cuando todo está listo.' },
        { titulo: 'Hogar reproducido', texto: 'Muebles colocados como estaban, en lo posible.' },
      ],
      incluye: [
        'Si hay piezas que van a varios familiares, organizamos las entregas el mismo día o en días cercanos.',
      ],
      precio: [
        'Se calcula como una mudanza de piso con embalaje completo. Las piezas delicadas y el tamaño del piso de origen son lo que más influye en el distrito.',
      ],
      faqs: [
        { pregunta: '¿Tratáis con la familia en lugar de con la persona mayor?', respuesta: 'Sí, una sola persona de contacto habla con quien prefiráis.' },
        { pregunta: '¿Podéis colocar los muebles como estaban?', respuesta: 'Sí, fotografiamos la disposición y la reproducimos en lo posible.' },
        { pregunta: '¿Lleváis muebles a residencias?', respuesta: 'Sí, tras confirmar espacio y horario.' },
        { pregunta: '¿Qué pasa con lo que no cabe?', respuesta: 'Va a familiares, a un guardamuebles o se retira.' },
        { pregunta: '¿Embaláis todo?', respuesta: 'Sí, si lo contratáis, incluidas las piezas delicadas.' },
        { pregunta: '¿La persona debe estar presente?', respuesta: 'No es necesario durante la carga.' },
        { pregunta: '¿Colgáis cuadros?', respuesta: 'Podemos valorarlo.' },
        { pregunta: '¿Cuánto dura?', respuesta: 'Depende del tamaño del piso; una vivienda grande puede necesitar más de una jornada.' },
      ],
    },

    /* ============================ ELEVADOR ============================ */
    'subida-muebles-elevador': {
      gancho: 'Sofás y piezas grandes por balcones de fincas clásicas.',
      intro: [
        'En el distrito de Salamanca hay muchos muebles que no caben en los ascensores de las fincas clásicas ni giran en sus escaleras: sofás de una pieza, pianos, armarios antiguos que no se desmontan, mesas de mármol. Las fachadas con balcones amplios permiten, en muchos casos, subirlos por fuera con un elevador.',
        'Te explicamos cuándo es posible y qué hace falta.',
      ],
      zona: [
        {
          titulo: 'Balcones del ensanche',
          parrafos: [
            'Las fincas de Recoletos, Castellana y Goya suelen tener balcones con puertas de gran altura que facilitan la entrada de piezas grandes. Hay que comprobar el ancho libre, la altura y si la barandilla puede quedar intacta durante la maniobra.',
          ],
        },
        {
          titulo: 'Calles anchas y calles comerciales',
          parrafos: [
            'Las calles del distrito son rectas y, muchas, de buena anchura, lo que facilita colocar el elevador. Pero en las más comerciales el tráfico, el reparto y los peatones obligan a elegir la hora con cuidado. A primera hora o en fin de semana es más sencillo.',
          ],
        },
        {
          titulo: 'Autorización municipal',
          parrafos: [
            'Montar una plataforma elevadora en la acera o la calzada obliga a tener permiso municipal. La sede electrónica de la ciudad explica cómo pedirlo para una mudanza puntual, con cuánto margen y qué tasas se pagan; como esas tasas cambian cada ejercicio, revisa la ficha justo antes de presentar la solicitud.',
          ],
        },
        {
          titulo: 'Normas de la comunidad',
          parrafos: [
            'Aunque el elevador se coloque en la calle, la comunidad debe saberlo: la acera frente al portal queda ocupada y, a veces, hay que pasar por un balcón comunitario o usar el portal. Avisa al portero o al administrador con tiempo.',
          ],
        },
        {
          titulo: 'Piezas que más suben por fuera',
          parrafos: [
            'Sofás de una pieza, pianos verticales, armarios antiguos, mesas con sobre de mármol y colchones grandes. Para piezas muy pesadas, como algunos pianos o muebles macizos, valoramos si el equipo puede soportarlas.',
          ],
        },
        {
          titulo: 'Alternativas',
          parrafos: [
            'Si el elevador no es viable, estudiamos desmontar parcialmente la pieza, usar la escalera principal con más personas o, en edificios con patio accesible, entrar por otro lado. Si no hay forma segura, te lo decimos antes de cerrar el presupuesto.',
          ],
        },
        {
          titulo: 'Qué preparar',
          parrafos: [
            'Con el ancho, el alto y el fondo de la pieza, el tamaño del hueco del balcón y un par de imágenes de la acera, la mayoría de las veces sabemos si la plataforma encaja sin tener que desplazarnos. El día de la subida, el balcón debe estar libre de macetas y muebles.',
          ],
        },
        {
          titulo: 'Pisos con portería y patios de manzana',
          parrafos: [
            'Algunas fincas del distrito tienen fachadas a la calle y también a un patio de manzana amplio. Si la pieza tiene que entrar por una habitación interior, el patio no sirve para el elevador desde la calle, y hay que buscar otra entrada. El portero suele saber qué balcones se han usado antes para subir muebles: merece la pena preguntarle.',
          ],
        },
        {
          titulo: 'Combinar con la mudanza',
          parrafos: [
            'Si la subida forma parte de una mudanza completa, organizamos el día para que el elevador trabaje solo con las piezas que lo necesitan y el resto vaya por el ascensor y la escalera. Así la calle se ocupa el tiempo mínimo y la autorización cubre una franja corta.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Fotos y medidas', texto: 'Pieza, balcón, fachada y calle.' },
        { titulo: 'Viabilidad', texto: 'Si hay espacio, altura y hueco suficiente.' },
        { titulo: 'Autorización', texto: 'Te indicamos el trámite y la antelación.' },
        { titulo: 'Maniobra', texto: 'Pieza protegida y balcón cubierto.' },
        { titulo: 'Colocación', texto: 'La dejamos en su sitio y retiramos protecciones.' },
      ],
      incluye: [
        'Si hay varias piezas difíciles, las subimos en la misma maniobra para que la autorización cubra una sola franja.',
      ],
      precio: [
        'Al coste del elevador se suman las tasas municipales cuando hace falta autorización. Si desmontar la pieza permite subirla por la escalera, puede ser más económico; te lo diremos antes de pedir ningún permiso, para que no pagues tasas que no hacían falta.',
      ],
      faqs: [
        { pregunta: '¿Se puede subir un sofá por el balcón en el barrio de Salamanca?', respuesta: 'A menudo sí, si el hueco es suficiente y hay espacio en la calle.' },
        { pregunta: '¿Hace falta autorización?', respuesta: 'Sí, del Ayuntamiento para ocupar la vía pública, con antelación.' },
        { pregunta: '¿Podéis subir un piano?', respuesta: 'Depende del piano, del balcón y del equipo. Lo valoramos con fotos y medidas.' },
        { pregunta: '¿Qué cuesta?', respuesta: 'El elevador tiene un rango orientativo de 150 a 300 euros, más las tasas cuando hacen falta.' },
        { pregunta: '¿Hay que avisar a la comunidad?', respuesta: 'Sí, porque se ocupa la acera frente al portal.' },
        { pregunta: '¿Se puede hacer en fin de semana?', respuesta: 'Podemos valorarlo; en calles comerciales suele ser más sencillo.' },
        { pregunta: '¿Y si el balcón es pequeño?', respuesta: 'Medimos el hueco y, si no pasa, buscamos otra opción.' },
        { pregunta: '¿Subís varias piezas a la vez?', respuesta: 'Sí, en la misma maniobra.' },
      ],
    },
  },
};

export default salamanca;
