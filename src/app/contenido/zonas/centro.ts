import type { ContenidoZona } from '../tipos';

/**
 * Centro (distrito 1). Barrios: Palacio, Embajadores, Cortes, Justicia, Universidad y Sol,
 * todos dentro del SER según el Ayuntamiento de Madrid (consultado el 10/11/2026). El distrito
 * es además Zona de Bajas Emisiones de Especial Protección: el acceso de vehículos está limitado.
 */
const centro: ContenidoZona = {
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
      gancho: 'Corralas, buhardillas y calles donde no entra un camión.',
      intro: [
        'El distrito Centro es el Madrid más antiguo, y eso se nota el día de la mudanza. Lavapiés, La Latina, Malasaña, Chueca, el barrio de las Letras o los Austrias tienen calles estrechas, muchas peatonales o de prioridad peatonal, y edificios de dos y tres siglos con escaleras de madera, patios de corredor y pisos altos sin ascensor.',
        'Una mudanza aquí se gana en la preparación: saber por dónde puede llegar el vehículo, cuánto hay que caminar con cada caja y qué muebles no van a pasar por una escalera de vecinos. Te contamos cómo lo planteamos.',
      ],
      zona: [
        {
          titulo: 'Seis barrios muy distintos',
          parrafos: [
            'Palacio y Embajadores concentran el caserío más antiguo, con corralas y casas de vecinos de pisos pequeños. Universidad, que incluye Malasaña, y Justicia, que incluye Chueca, mezclan fincas del siglo XIX con edificios rehabilitados para alquiler. Cortes reúne las calles del barrio de las Letras, y Sol es el más comercial, con mucho edificio de oficinas y pocos vecinos.',
            'Cada barrio cambia la logística: no es lo mismo una buhardilla junto a la plaza de la Paja que un piso reformado en la calle del Pez o un ático junto a la Gran Vía.',
          ],
        },
        {
          titulo: 'Edificios antiguos por dentro',
          parrafos: [
            'Muchas casas del distrito se levantaron entre los siglos XVIII y XIX y conservan escaleras estrechas, con peldaños desgastados y giros cerrados. Las corralas tienen corredores abiertos al patio y accesos por un único portal. Algunas fincas han incorporado ascensor en rehabilitaciones recientes, pero suele ser pequeño. En la Gran Vía y su entorno, en cambio, hay edificios del siglo XX más amplios y con ascensores mayores.',
          ],
        },
        {
          titulo: 'Acceso de vehículos restringido',
          parrafos: [
            'Todo el distrito es Zona de Bajas Emisiones de Especial Protección, así que el acceso de vehículos de quien no reside está limitado y el camión de la mudanza tiene que cumplir las condiciones de entrada. A eso se suman las calles peatonales, como Preciados, Arenal o el tramo peatonal de Fuencarral, y las de prioridad peatonal, donde parar a cargar no siempre es posible.',
            'Además, todo Centro está dentro del Servicio de Estacionamiento Regulado. Para una mudanza con camión de más de 3.500 kilos o con elevador hay que pedir autorización para ocupar la vía pública, y en muchas calles solo cabe una furgoneta.',
          ],
        },
        {
          titulo: 'El tramo a pie',
          parrafos: [
            'En buena parte de Lavapiés, La Latina o el barrio de las Letras el vehículo se queda en la calle transitable más cercana y la carga se lleva a mano o con carretilla hasta el portal. Ese recorrido, de unos metros o de una manzana, es lo que más alarga una mudanza en el distrito, por encima del número de plantas.',
          ],
        },
        {
          titulo: 'Consejos para vecinos del Centro',
          parrafos: [
            'Mira si tu calle tiene acceso restringido o es peatonal y dinos la calle transitable más cercana. Mide la escalera en el punto más estrecho, normalmente el primer giro, y piensa qué muebles grandes merece la pena llevar: en muchos pisos del distrito es más práctico vender o donar un sofá voluminoso que bajarlo por una escalera del siglo XIX.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Dirección exacta', texto: 'Con la calle y el número comprobamos si el vehículo puede llegar al portal o dónde tendría que quedarse.' },
        { titulo: 'Vehículo pequeño', texto: 'En Centro solemos trabajar con furgonetas, que maniobran mejor y pueden detenerse en más puntos.' },
        { titulo: 'Equipo para el tramo a pie', texto: 'Si hay que caminar desde el vehículo, sumamos personas y carretillas para que el ritmo no decaiga.' },
        { titulo: 'Escalera protegida', texto: 'Cubrimos barandillas y peldaños de madera y desmontamos lo que no gira en los descansillos.' },
        { titulo: 'Montaje en el nuevo piso', texto: 'Colocamos y montamos lo desmontado, habitación por habitación.' },
      ],
      incluye: [
        'En el distrito incluimos siempre el recorrido entre el vehículo y el portal en el cálculo del tiempo, porque es la parte que más varía de una calle a otra. Te lo explicamos en el presupuesto para que sepas de dónde sale cada hora.',
      ],
      precio: [
        'Un estudio o un piso pequeño en Centro puede requerir más tiempo que uno mayor en un barrio con aparcamiento fácil. Lo que más pesa aquí es el tramo a pie, la escalera sin ascensor y, si hay que usar camión, la tramitación del permiso.',
      ],
      faqs: [
        { pregunta: '¿Puede entrar el camión de la mudanza en el distrito Centro?', respuesta: 'El acceso está limitado por la Zona de Bajas Emisiones de Especial Protección y por las calles peatonales. Comprobamos la dirección y planteamos el vehículo y el punto de parada más adecuados.' },
        { pregunta: '¿Qué pasa si mi calle es peatonal?', respuesta: 'El vehículo para en la calle transitable más próxima y llevamos la carga a pie. Lo tenemos en cuenta en el tiempo y en el número de personas.' },
        { pregunta: '¿Podéis mudar una buhardilla sin ascensor?', respuesta: 'Sí. Es habitual en el distrito. Desmontamos lo voluminoso y bajamos todo por la escalera, protegida.' },
        { pregunta: '¿Hace falta permiso para aparcar?', respuesta: 'Solo cuando el vehículo pesa más de 3.500 kilos o lleva plataforma elevadora; en el distrito casi siempre trabajamos con furgonetas, que no lo necesitan, y así evitamos esperar a un trámite.' },
        { pregunta: '¿Mi sofá cabe por la escalera de una corrala?', respuesta: 'Depende del sofá y del primer giro de la escalera. Con las medidas de ambos te decimos si cabe, si se desmonta o si conviene otra opción.' },
        { pregunta: '¿Cuál es el mejor horario para mudarse en Centro?', respuesta: 'A primera hora hay menos gente en las calles peatonales y es más fácil parar. Evitar las tardes de fin de semana en las zonas de ocio ayuda mucho.' },
        { pregunta: '¿Me mudáis de Centro a otro barrio de Madrid?', respuesta: 'Sí, a cualquier distrito o municipio. La salida desde Centro es lo que más hay que preparar; el resto del trayecto es sencillo.' },
      ],
    },

    /* ============================ PORTES ============================ */
    portes: {
      gancho: 'Pequeños traslados entre calles peatonales y casas antiguas.',
      intro: [
        'En el centro de Madrid se compran muebles en el Rastro, en tiendas de decoración de Malasaña o en anticuarios de La Latina, y se mueven cosas entre pisos pequeños que comparten calle. Para esos encargos el porte es la solución natural: una furgoneta con conductor y un operario que llegan hasta donde se puede y hacen el resto a pie.',
        'Te explicamos cómo resolvemos un porte en un distrito con acceso de vehículos limitado y aceras estrechas.',
      ],
      zona: [
        {
          titulo: 'Compras con historia',
          parrafos: [
            'Una cómoda antigua comprada en el entorno de la Ribera de Curtidores, una lámpara de un anticuario o una mesa restaurada son piezas frecuentes en los portes del distrito. Suelen ser delicadas y no siempre caben en una caja, así que viajan envueltas en mantas y sujetas en la furgoneta. Si la tienda está en una calle peatonal, acordamos con ella el punto de entrega.',
          ],
        },
        {
          titulo: 'Por qué la furgoneta es casi obligatoria',
          parrafos: [
            'Las calles de Lavapiés, La Latina o el barrio de las Letras son estrechas y en muchas el acceso está limitado. Una furgoneta puede acercarse más y detenerse en una zona de carga y descarga sin bloquear la circulación. Además, en el distrito no tiene sentido mover un camión grande para dos o tres muebles.',
          ],
        },
        {
          titulo: 'Escaleras de vecinos',
          parrafos: [
            'La mayoría de los portes terminan en un piso sin ascensor o con un ascensor diminuto. Para una pieza pesada, como un aparador de madera o un electrodoméstico, enviamos dos personas en lugar de una, porque en una escalera estrecha no es seguro que suba una sola. Te preguntamos la planta antes de cerrar el precio para no tener que cambiarlo después.',
          ],
        },
        {
          titulo: 'Zona de Bajas Emisiones y horarios',
          parrafos: [
            'El distrito tiene acceso restringido a vehículos por su Zona de Bajas Emisiones de Especial Protección, y la carga y descarga tiene horarios en muchas calles. Planificamos el porte para entrar y salir dentro de esas condiciones, normalmente por la mañana.',
          ],
        },
        {
          titulo: 'Qué nos ayuda a hacerlo rápido',
          parrafos: [
            'Una foto del mueble, sus medidas, la dirección exacta de recogida y entrega y la planta de cada punto. Si la recogida es en una tienda, el nombre de la persona que lo entrega. Con eso, el porte se resuelve en una mañana sin sorpresas.',
          ],
        },
        {
          titulo: 'Portes entre vecinos del mismo barrio',
          parrafos: [
            'Muchos portes del distrito son mudanzas en miniatura: alguien que se cambia de un piso a otro de la misma calle y solo necesita mover la cama, un par de estanterías y unas cajas, o una pareja que junta sus cosas en un solo piso de Malasaña. En esos casos el trayecto dura minutos y casi todo el tiempo se va en bajar y subir, así que lo que más importa es saber las dos plantas y si hay ascensor en alguna.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Foto y medidas', texto: 'Nos mandas una foto del mueble por WhatsApp con sus medidas aproximadas.' },
        { titulo: 'Punto de parada', texto: 'Miramos dónde puede detenerse la furgoneta en la recogida y en la entrega.' },
        { titulo: 'Equipo justo', texto: 'Uno o dos operarios según el peso de la pieza y la escalera.' },
        { titulo: 'Traslado envuelto', texto: 'La pieza viaja protegida con mantas y bien sujeta.' },
        { titulo: 'Dentro de casa', texto: 'La subimos hasta la habitación, aunque no haya ascensor.' },
      ],
      incluye: [
        'Si el porte incluye llevar la pieza desde una calle peatonal hasta la furgoneta, ese tramo forma parte del servicio. Solo necesitamos saberlo antes para calcular bien el tiempo.',
      ],
      precio: [
        'Los portes cortos dentro del distrito suelen entrar en la tarifa de partida. Si hay escaleras de varias plantas sin ascensor, dos operarios o varias paradas entre tiendas, pasa a calcularse por horas.',
      ],
      faqs: [
        { pregunta: '¿Podéis recoger un mueble comprado en el Rastro?', respuesta: 'Sí. Acordamos con el vendedor el punto y la hora de recogida, porque los días de mercado el acceso es muy complicado.' },
        { pregunta: '¿Llegáis hasta calles peatonales?', respuesta: 'La furgoneta se queda en la calle transitable más cercana y llevamos el mueble a pie hasta el portal.' },
        { pregunta: '¿Hace falta que haya ascensor?', respuesta: 'No. La mayoría de portes en el distrito se hacen por escalera. Solo necesitamos saber la planta.' },
        { pregunta: '¿Podéis trasladar una pieza antigua delicada?', respuesta: 'Sí, envuelta en mantas y con cuidado especial en esquinas y patas. Si es muy valiosa, conviene que nos lo digas antes.' },
        { pregunta: '¿Hacéis portes en fin de semana?', respuesta: 'Podemos valorarlo según disponibilidad. En zonas de ocio y mercado, la mañana temprano es lo más práctico.' },
        { pregunta: '¿Cuántas personas vienen a un porte?', respuesta: 'Normalmente el conductor y un operario. Si la pieza pesa mucho o la escalera es estrecha, enviamos una persona más.' },
        { pregunta: '¿Puedo llevar varias compras de distintas tiendas en el mismo porte?', respuesta: 'Sí, con varias paradas. Se calcula por horas según el recorrido.' },
      ],
    },

    /* ============================ OFICINAS ============================ */
    'mudanzas-oficinas': {
      gancho: 'Estudios, agencias y despachos en edificios del casco antiguo.',
      intro: [
        'En Centro las oficinas rara vez son plantas diáfanas. Son estudios de arquitectura en un piso de la calle Huertas, agencias en un edificio de la Gran Vía, coworkings en Malasaña o despachos en fincas rehabilitadas de Sol. El traslado tiene que encajar con un acceso limitado para vehículos y con edificios que no se pensaron para mover mobiliario de oficina.',
        'Así es como organizamos una mudanza de oficina en el distrito.',
      ],
      zona: [
        {
          titulo: 'Tipos de oficina en el distrito',
          parrafos: [
            'Entre Sol y la Gran Vía hay edificios de oficinas de principios del siglo XX con portería, ascensores de cabina mediana y normas propias de la propiedad. En Universidad, Justicia y Cortes predominan los estudios y despachos en pisos de fincas antiguas, y en los últimos años han proliferado los espacios compartidos en locales y plantas bajas.',
          ],
        },
        {
          titulo: 'Accesos que mandan',
          parrafos: [
            'El distrito tiene restricciones de acceso para vehículos y calles peatonales en el eje comercial. Por eso el traslado se organiza alrededor del punto donde puede detenerse el vehículo, con horario de carga y descarga, y del trayecto a pie hasta el portal. En un edificio con muelle o garaje la operación es sencilla; en un piso de una calle peatonal, se planifica más.',
          ],
        },
        {
          titulo: 'Mobiliario y equipos',
          parrafos: [
            'Las mesas de estudio grandes, las cajoneras con ruedas y los armarios de archivo suelen bajar desmontados si el edificio es antiguo. Los ordenadores, pantallas y equipos de imagen o sonido, frecuentes en agencias y productoras del distrito, viajan embalados uno a uno y etiquetados por puesto.',
          ],
        },
        {
          titulo: 'Horario del traslado',
          parrafos: [
            'Trasladar al final de la jornada o en fin de semana suele ser lo más práctico en Centro: hay menos gente en la calle y la actividad no se interrumpe. Si el edificio tiene normas de horario para mudanzas, hay que respetarlas y conocerlas con tiempo.',
          ],
        },
        {
          titulo: 'Preparación del equipo',
          parrafos: [
            'Antes del traslado, cada persona debería vaciar su puesto y llevarse a casa lo personal. El responsable de la mudanza confirma con la propiedad los horarios y con el proveedor de comunicaciones el alta en la nueva sede. Con eso, el traslado del material es lo más fácil del proceso.',
          ],
        },
        {
          titulo: 'Locales a pie de calle',
          parrafos: [
            'Además de las oficinas en planta, el distrito tiene muchos estudios y pequeñas empresas en bajos comerciales: agencias de diseño, productoras, academias o despachos con escaparate. Su ventaja es que no hay escalera; su dificultad, que muchas veces están en calles peatonales o con horario de carga limitado. Para ellos trabajamos por la mañana temprano o al cerrar, con la furgoneta en el punto transitable más próximo y carretillas para el último tramo.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Visita y normas', texto: 'Vemos la oficina y preguntamos por las normas del edificio de origen y de destino.' },
        { titulo: 'Punto de carga', texto: 'Definimos dónde se detiene el vehículo y el trayecto hasta el portal.' },
        { titulo: 'Embalaje por puesto', texto: 'Etiquetamos cada caja y cada equipo con el puesto de destino.' },
        { titulo: 'Traslado fuera de horas', texto: 'Cargamos y llevamos todo cuando menos afecta a tu trabajo.' },
        { titulo: 'Puesta en marcha', texto: 'Montamos mesas y archivo y dejamos cada caja en su sitio.' },
      ],
      incluye: [
        'Para estudios con planos, maquetas o material delicado, preparamos un embalaje específico y lo cargamos al final para que sea lo primero en salir.',
      ],
      precio: [
        'Una oficina pequeña en un edificio antiguo del Centro puede costar más por puesto que una mayor con montacargas, porque el acceso y el tramo a pie suman horas. Lo concretamos tras la visita.',
      ],
      faqs: [
        { pregunta: '¿Podéis trasladar una oficina situada en una calle peatonal?', respuesta: 'Sí. El vehículo para en la calle transitable más cercana y el material se lleva a pie con carretillas.' },
        { pregunta: '¿Trabajáis por la noche?', respuesta: 'Podemos plantear traslados al final del día o en fin de semana. El horario se ajusta a las normas del edificio.' },
        { pregunta: '¿Embaláis maquetas o material de estudio?', respuesta: 'Sí, con embalaje específico y señalado como frágil.' },
        { pregunta: '¿Necesitamos permiso para el vehículo?', respuesta: 'Depende del vehículo y de la calle. Con camión grande o elevador, hay que pedir autorización para ocupar la vía pública; lo valoramos contigo.' },
        { pregunta: '¿Podéis mudar un coworking?', respuesta: 'Sí. Etiquetamos el material de cada usuario por separado para que nadie pierda nada.' },
        { pregunta: '¿Lo que sobra puede ir a un guardamuebles?', respuesta: 'Sí, si la nueva oficina es más pequeña, guardamos el excedente.' },
        { pregunta: '¿Cuánto dura el traslado de un estudio pequeño?', respuesta: 'Con el embalaje hecho, normalmente una jornada. Depende del acceso y del material.' },
        { pregunta: '¿Qué pasa con las llaves y alarmas del local antiguo?', respuesta: 'Antes del traslado acordamos quién abre y cierra cada sede. Si la oficina tiene alarma, conviene que alguien de tu empresa la gestione ese día para que el equipo no quede esperando en la puerta.' },
      ],
    },

    /* ============================ GUARDAMUEBLES ============================ */
    guardamuebles: {
      gancho: 'Para pisos pequeños, rehabilitaciones y estancias temporales.',
      intro: [
        'Los pisos del distrito Centro suelen ser pequeños y con poco espacio de almacenaje: sin trastero, sin garaje y con armarios justos. Por eso el guardamuebles se usa mucho aquí, para despejar durante una obra, para guardar lo que no cabe en un piso de alquiler o para quien vive en el centro una temporada y no quiere deshacerse de sus cosas.',
        'Te explicamos cómo lo gestionamos desde un barrio donde sacar cada caja ya es parte del trabajo.',
      ],
      zona: [
        {
          titulo: 'Rehabilitaciones de edificios',
          parrafos: [
            'Muchas fincas antiguas del distrito pasan por rehabilitaciones de fachada, cubierta o instalación de ascensor, y algunas obras obligan a vaciar pisos durante un tiempo. También son frecuentes las reformas de pisos antiguos para ponerlos al día. En ambos casos, guardar los muebles fuera evita polvo, golpes y la incomodidad de vivir entre cajas.',
          ],
        },
        {
          titulo: 'Pisos sin trastero',
          parrafos: [
            'En Embajadores, Universidad o Palacio pocos pisos tienen trastero. La bicicleta, las maletas, la ropa de otra temporada o los muebles heredados que no caben se acumulan en casa. Un guardamuebles permite tenerlos a mano sin ocupar una habitación entera.',
          ],
        },
        {
          titulo: 'Sacar las cosas del piso',
          parrafos: [
            'La recogida tiene las mismas condiciones que cualquier mudanza en Centro: acceso de vehículos restringido, calles peatonales y escaleras estrechas. Para un guardamuebles parcial, una furgoneta y dos personas suelen bastar; para vaciar un piso entero, se planifica como una mudanza.',
          ],
        },
        {
          titulo: 'Embalaje para guardar',
          parrafos: [
            'Lo que se va a almacenar semanas o meses se embala distinto: cajas cerradas y numeradas, muebles envueltos por completo y nada apoyado de forma que se deforme. Hacemos inventario para que sepas qué hay en cada caja y puedas pedir algo concreto.',
          ],
        },
        {
          titulo: 'Consejos',
          parrafos: [
            'Antes de guardar, separa lo que vas a necesitar pronto y lo que no. Fotografía los muebles desmontados y dinos si en algún momento vas a querer retirar solo una parte, para dejar esas cajas accesibles.',
          ],
        },
        {
          titulo: 'Alquileres de temporada y estudiantes',
          parrafos: [
            'El centro concentra muchos alquileres por meses: profesionales desplazados, estudiantes de máster y personas que viven en Madrid durante un proyecto. Cuando termina el contrato y no tienen claro dónde irán después, guardar muebles y cajas evita cargar con todo de un piso temporal a otro. También ocurre al revés: llegar al centro con más cosas de las que caben en un apartamento pequeño y necesitar un sitio para el resto.',
          ],
        },
        {
          titulo: 'Objetos que conviene guardar bien',
          parrafos: [
            'En los guardamuebles del distrito es frecuente encontrar colecciones de libros, cuadros, instrumentos y muebles heredados que el dueño no quiere vender. Para ese tipo de piezas el embalaje cuenta más que el espacio: cartón rígido para lo plano, cajas pequeñas para lo pesado y nada apilado encima de un mueble de madera. Si alguna pieza tiene valor especial, señálala al hacer el inventario.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Volumen y plazo', texto: 'Nos dices qué guardar y por cuánto tiempo aproximado.' },
        { titulo: 'Recogida adaptada', texto: 'Furgoneta o camión según el volumen y la calle, con tramo a pie si hace falta.' },
        { titulo: 'Embalaje de larga duración', texto: 'Protegemos cada pieza para el tiempo de almacenaje.' },
        { titulo: 'Inventario', texto: 'Cada caja y mueble queda anotado y numerado.' },
        { titulo: 'Entrega cuando digas', texto: 'Lo devolvemos al mismo piso o a otra dirección.' },
      ],
      incluye: [
        'Podemos hacer entregas parciales: si solo necesitas la ropa de invierno o una cómoda, la sacamos del guardamuebles sin mover el resto.',
      ],
      precio: [
        'El alquiler del espacio depende del volumen. La recogida y la entrega en Centro suelen llevar más tiempo que en otros distritos por el acceso y el tramo a pie, y eso se refleja en esa parte del presupuesto.',
      ],
      faqs: [
        { pregunta: '¿Podéis recoger pocas cosas de un piso del centro?', respuesta: 'Sí. Para unas cajas y algunos muebles basta una furgoneta, que llega mejor a las calles del distrito.' },
        { pregunta: '¿Cuánto tiempo puedo tener mis cosas guardadas?', respuesta: 'El tiempo que necesites, normalmente por meses. Te lo concretamos en el presupuesto.' },
        { pregunta: '¿Puedo pedir una sola caja?', respuesta: 'Sí. Con el inventario localizamos la caja y te la llevamos; ese viaje se presupuesta aparte.' },
        { pregunta: '¿Sirve mientras rehabilitan mi edificio?', respuesta: 'Sí. Es uno de los motivos más habituales en el distrito. Recogemos antes de la obra y entregamos al terminar.' },
        { pregunta: '¿Cómo se protegen los muebles antiguos?', respuesta: 'Se envuelven completos, sin peso encima, y se protegen esquinas y patas.' },
        { pregunta: '¿Puedo guardar una bicicleta o una moto?', respuesta: 'Bicicletas sí. Para vehículos a motor, consúltanos antes las condiciones.' },
        { pregunta: '¿La entrega puede ser en otra ciudad?', respuesta: 'Sí. Podemos llevar lo guardado a otra vivienda en Madrid o en otra provincia.' },
        { pregunta: '¿Puedo visitar mis cosas mientras están guardadas?', respuesta: 'Las condiciones de acceso dependen del espacio contratado. Te las explicamos en el presupuesto; si prevés que vas a necesitar sacar cosas a menudo, lo tenemos en cuenta al colocar las cajas para que las más usadas queden delante.' },
      ],
    },

    /* ============================ EMBALAJE ============================ */
    embalaje: {
      gancho: 'Cajas manejables para escaleras estrechas y tramos a pie.',
      intro: [
        'En Centro, cada caja hace un camino largo: baja por una escalera estrecha, atraviesa un portal antiguo y a veces recorre media calle peatonal hasta el vehículo. Por eso el embalaje no es solo proteger: es preparar bultos que se puedan llevar con seguridad en ese recorrido.',
        'Estas son las pautas que seguimos en el distrito y lo que puedes adelantar por tu cuenta antes de que lleguemos.',
      ],
      zona: [
        {
          titulo: 'Pisos pequeños y muy aprovechados',
          parrafos: [
            'En Lavapiés, Malasaña o La Latina abundan los estudios y pisos de uno o dos dormitorios en los que cada hueco está ocupado: altillos, estanterías hasta el techo y cocinas mínimas. Hay menos volumen que en una vivienda grande, pero más objetos pequeños, y eso exige orden.',
          ],
        },
        {
          titulo: 'Cajas pensadas para el recorrido',
          parrafos: [
            'Hacemos cajas de tamaño medio y peso moderado, que una persona pueda llevar escaleras abajo y luego a lo largo de un tramo a pie. Las cajas muy grandes o muy pesadas ralentizan la mudanza y aumentan el riesgo en peldaños desgastados.',
          ],
        },
        {
          titulo: 'Objetos que se ven mucho en el distrito',
          parrafos: [
            'Láminas y cuadros, instrumentos musicales, discos y libros, plantas de balcón, piezas compradas en el Rastro o en anticuarios. Cada uno pide su embalaje: cartón y cantoneras para lo plano, cajas pequeñas para los discos, fundas rígidas para los instrumentos cuando las hay.',
          ],
        },
        {
          titulo: 'Embalar antes del día',
          parrafos: [
            'Con el acceso de vehículos limitado, conviene que el día de la mudanza el vehículo esté el menor tiempo posible parado. Por eso solemos embalar el día anterior y dejar las cajas preparadas cerca de la puerta.',
          ],
        },
        {
          titulo: 'Lo que puedes hacer tú',
          parrafos: [
            'Retira de las paredes lo que no vas a llevar, vacía la nevera un día antes y separa en una bolsa lo que necesitarás la primera noche. Si tienes plantas, decide cuáles viajan: no todas soportan bien el traslado.',
          ],
        },
        {
          titulo: 'Cocinas mínimas, mucho menaje',
          parrafos: [
            'En los pisos del casco antiguo la cocina suele ser estrecha, a veces poco más que un pasillo, pero con armarios llenos de vajilla, tarros y pequeños electrodomésticos. Es la estancia que más tiempo lleva embalar y la que más se tarda en abrir después. Por eso la empezamos la primera, envolvemos cada pieza de cristal por separado y marcamos en la caja qué contiene, para que en el piso nuevo sepas qué abrir primero sin revolver todo.',
          ],
        },
        {
          titulo: 'Altillos y espacios escondidos',
          parrafos: [
            'Los pisos pequeños del distrito aprovechan cada hueco: altillos sobre la puerta, armarios bajo la escalera interior de un dúplex o cajones bajo la cama. Al embalar los revisamos uno por uno, porque es ahí donde se queda olvidado algo el día de la mudanza. Si hay altillos muy altos, llevamos una escalera para vaciarlos con seguridad.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Recuento', texto: 'Por fotos o en persona, calculamos cuántas cajas y qué material hace falta.' },
        { titulo: 'Material al piso', texto: 'Llevamos cajas de tamaño manejable, papel, burbujas y mantas.' },
        { titulo: 'Embalaje ordenado', texto: 'Cada caja con su habitación y una marca si es frágil.' },
        { titulo: 'Piezas especiales', texto: 'Cuadros, discos, instrumentos y plantas con su protección.' },
        { titulo: 'Cajas junto a la puerta', texto: 'Dejamos todo listo para que la carga sea rápida.' },
      ],
      incluye: [
        'Si una caja va a viajar por un tramo a pie, la cerramos con cinta reforzada y evitamos que sobresalga nada que pueda engancharse en portales o barandillas. Las cajas con libros nunca pasan de un tamaño medio, aunque quepan más.',
      ],
      precio: [
        'En pisos pequeños del distrito el embalaje suele quedarse en la parte baja del rango; sube si hay mucho frágil, colecciones o instrumentos. Si prefieres hacerlo tú, te dejamos las cajas.',
      ],
      faqs: [
        { pregunta: '¿Qué tamaño de caja usáis en el centro?', respuesta: 'Sobre todo medianas, que una persona puede llevar bien por escaleras estrechas y en tramos a pie.' },
        { pregunta: '¿Embaláis discos de vinilo?', respuesta: 'Sí, en cajas pequeñas, de pie y sin holgura, para que no se deformen.' },
        { pregunta: '¿Y un instrumento musical?', respuesta: 'Si tiene funda rígida, viaja en ella y protegido; si no, preparamos una protección a medida.' },
        { pregunta: '¿Embaláis el día antes?', respuesta: 'Normalmente sí, para que el día de la mudanza el vehículo esté parado el menor tiempo posible.' },
        { pregunta: '¿Podéis desembalar en el nuevo piso?', respuesta: 'Sí, si lo contratas. Abrimos las cajas, colocamos lo básico y retiramos el material.' },
        { pregunta: '¿Lleváis las plantas?', respuesta: 'Las trasladamos protegidas si caben en el vehículo. Las muy grandes o delicadas conviene valorarlas antes.' },
        { pregunta: '¿Puedo comprar solo cajas?', respuesta: 'Sí. Te llevamos cajas reforzadas y material para que embales tú.' },
        { pregunta: '¿Cuántas cajas necesita un estudio del centro?', respuesta: 'Depende de lo que tengas, pero un estudio aprovechado suele llenar más cajas de las que parece por la cantidad de objetos pequeños. Con unas fotos de armarios y estanterías te damos una cifra aproximada y llevamos algunas de reserva.' },
      ],
    },

    /* ============================ MONTAJE ============================ */
    'montaje-muebles': {
      gancho: 'Escaleras de otro siglo que obligan a desmontar casi todo.',
      intro: [
        'Las escaleras del distrito Centro son el gran filtro de cualquier mudanza: estrechas, con giros cerrados y, a veces, con peldaños de madera que no conviene castigar. Muchos muebles solo salen desmontados, y muchos otros solo entran en el piso nuevo por piezas.',
        'Te explicamos cómo desmontamos y montamos en el distrito para que todo llegue entero y quede firme.',
      ],
      zona: [
        {
          titulo: 'El primer giro de la escalera',
          parrafos: [
            'En las casas de vecinos antiguas la escalera suele estrecharse en el primer tramo o en el giro de cada descansillo. Un armario o una estantería que pasa por la puerta del piso puede atascarse ahí. Por eso medimos ese punto antes de decidir.',
          ],
        },
        {
          titulo: 'Muebles de pisos pequeños',
          parrafos: [
            'En los pisos reducidos del distrito se usan muchas camas abatibles, literas, armarios a medida y estanterías modulares. Algunos están anclados a la pared o encajados en un hueco concreto. Desmontarlos requiere cuidado para no dañar paredes antiguas, a menudo de yeso.',
          ],
        },
        {
          titulo: 'Muebles comprados por piezas',
          parrafos: [
            'Mucha gente del distrito compra muebles en caja precisamente porque sabe que no pasarían montados. También montamos esos muebles nuevos, en el piso, con su herramienta y siguiendo sus instrucciones.',
          ],
        },
        {
          titulo: 'Paredes y techos antiguos',
          parrafos: [
            'En casas de dos siglos los techos pueden tener vigas de madera y las paredes, tabiques de ladrillo hueco o yeso. Antes de anclar un mueble alto revisamos qué tipo de pared es. Si no admite un anclaje seguro, te lo decimos.',
          ],
        },
        {
          titulo: 'Consejos',
          parrafos: [
            'Guarda las instrucciones de tus muebles, vacía armarios y cajones y despeja el espacio de trabajo. Si en el nuevo piso el techo es más bajo, comprueba la altura del armario: es un caso frecuente al pasar de un piso alto a una buhardilla.',
          ],
        },
        {
          titulo: 'Dúplex y buhardillas con escalera interior',
          parrafos: [
            'En algunas casas del distrito los áticos se han convertido en dúplex con una escalera interior muy estrecha, a veces de caracol. Subir una cama o un armario a la planta de arriba solo es posible por piezas, y montarlo allí exige trabajar en espacios con techo inclinado. Medimos la altura libre en la zona donde irá cada mueble para no montar un armario que luego no quepa bajo la pendiente del techo.',
          ],
        },
        {
          titulo: 'Muebles a medida y de carpintero',
          parrafos: [
            'Los pisos antiguos suelen tener estanterías o armarios hechos a medida para un hueco concreto, a veces por un carpintero hace décadas. No siempre se pueden desmontar sin dañarlos, y en el piso nuevo casi nunca encajan igual. Antes de tocarlos te decimos si es viable trasladarlos o si conviene dejarlos, algo importante si el propietario quiere que se queden en la vivienda.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Lista y fotos', texto: 'Nos dices qué muebles hay que desmontar y montar.' },
        { titulo: 'Medida del paso', texto: 'Comprobamos el punto más estrecho de la escalera.' },
        { titulo: 'Desmontaje marcado', texto: 'Cada pieza marcada y sus herrajes en bolsa con nombre.' },
        { titulo: 'Traslado por piezas', texto: 'Las piezas bajan protegidas por la escalera y viajan de canto.' },
        { titulo: 'Montaje y anclaje', texto: 'Montamos, nivelamos y, si la pared lo permite, anclamos.' },
      ],
      incluye: [
        'Si un mueble anclado deja marcas en una pared antigua al desmontarlo, te lo enseñamos antes de irnos para que puedas valorarlo con el propietario. Los tacos y tornillos de pared que retiramos se quedan en una bolsa aparte, por si los necesitas al entregar el piso o al colgar algo en la nueva casa.',
      ],
      precio: [
        'En Centro, desmontar suele ahorrar tiempo de escalera y por eso compensa. El precio por mueble depende de su complejidad: una litera o un armario a medida llevan más que una mesa.',
      ],
      faqs: [
        { pregunta: '¿Podéis desmontar una cama abatible?', respuesta: 'Sí. Suelen ir ancladas a la pared y con mecanismos que hay que tratar con cuidado. Las desmontamos y montamos en el nuevo piso si hay espacio.' },
        { pregunta: '¿Montáis muebles nuevos en caja?', respuesta: 'Sí, en tu piso, aunque no formen parte de una mudanza.' },
        { pregunta: '¿Y si el armario no cabe en la buhardilla?', respuesta: 'Te avisamos antes de montarlo. A veces se puede montar sin altillo o con otra disposición.' },
        { pregunta: '¿Anclais estanterías a paredes antiguas?', respuesta: 'Si la pared lo permite, sí. Antes revisamos el tipo de tabique.' },
        { pregunta: '¿Se pierden tornillos?', respuesta: 'No: cada mueble lleva su bolsa de herrajes marcada.' },
        { pregunta: '¿Desmontáis literas?', respuesta: 'Sí, y también camas nido y muebles juveniles con módulos.' },
        { pregunta: '¿Hay que estar en casa?', respuesta: 'Conviene que alguien esté al principio para indicar dónde va cada mueble.' },
        { pregunta: '¿Podéis montar muebles en un ático con el techo inclinado?', respuesta: 'Sí. Medimos la altura libre en el punto donde irá cada mueble y, si un armario no cabe bajo la pendiente, te proponemos alternativas como montarlo sin altillo o colocarlo en otra pared. Lo decidimos contigo antes de apretar el último tornillo, para no tener que desmontarlo de nuevo.' },
      ],
    },

    /* ============================ URGENTES ============================ */
    'mudanzas-urgentes': {
      gancho: 'Salir deprisa de un piso céntrico sin tiempo para permisos.',
      intro: [
        'Las mudanzas urgentes son frecuentes en el centro: alquileres de temporada que terminan, pisos que cambian de uso, contratos que no se renuevan. El problema es que el distrito es el más difícil para improvisar, con acceso de vehículos restringido y calles peatonales.',
        'Te contamos cómo hacemos una mudanza rápida aquí sin depender de trámites que no da tiempo a hacer.',
      ],
      zona: [
        {
          titulo: 'Sin margen para tramitar',
          parrafos: [
            'El permiso para ocupar la vía pública con un camión grande o un elevador requiere solicitarse con antelación. En una mudanza urgente casi nunca hay ese margen, así que la planteamos con furgonetas, que pueden usar la carga y descarga y acercarse más a los portales.',
          ],
        },
        {
          titulo: 'Más manos, no más vehículo',
          parrafos: [
            'Cuando el tiempo aprieta, lo que acelera una mudanza en Centro es el número de personas, porque el cuello de botella está en la escalera y en el tramo a pie. Dos personas bajando y otras dos llevando hasta la furgoneta multiplican el ritmo.',
          ],
        },
        {
          titulo: 'Restricciones de acceso',
          parrafos: [
            'El distrito es Zona de Bajas Emisiones de Especial Protección. Los vehículos que usamos tienen que poder entrar, y la hora de llegada se elige pensando en la carga y descarga y en el movimiento de peatones.',
          ],
        },
        {
          titulo: 'Si aún no tienes dónde ir',
          parrafos: [
            'Es habitual tener que dejar un piso del centro antes de poder entrar en el siguiente. Llevamos todo a un guardamuebles y lo entregamos cuando tengas casa, sin que tengas que buscar un almacén por tu cuenta.',
          ],
        },
        {
          titulo: 'Lo primero que necesitamos',
          parrafos: [
            'La dirección exacta, la planta, si hay ascensor, una idea del volumen con fotos y la hora límite de salida. Con eso podemos confirmarte rápido si llegamos y con qué equipo.',
          ],
        },
        {
          titulo: 'Fines de contrato y pisos turísticos',
          parrafos: [
            'Una parte de las urgencias del distrito tiene que ver con cambios de uso: pisos de alquiler que pasan a otro destino, contratos de temporada que no se prorrogan o viviendas que se ponen a la venta con poco aviso. En esos casos el inquilino suele tener muchas cosas en poco espacio y poco tiempo para decidir. Ayuda priorizar: primero lo que se lleva sí o sí, después lo dudoso, que puede ir a un guardamuebles mientras decides.',
          ],
        },
        {
          titulo: 'Coordinar llaves y portero',
          parrafos: [
            'En muchas fincas del centro hay portero o una persona de la comunidad que custodia llaves y controla el portal. Con prisa, avisarle a tiempo evita que la mudanza se pare porque el portal está cerrado o el ascensor reservado para otra cosa. Si el piso de destino también está en el distrito, conviene hacer lo mismo allí y confirmar a qué hora se puede entrar.',
          ],
        },
      ],
      proceso: [
        { titulo: 'WhatsApp con fotos', texto: 'Nos mandas fotos y datos y te respondemos para cerrar el plan.' },
        { titulo: 'Furgonetas sin reserva', texto: 'Evitamos depender de permisos que no da tiempo a pedir.' },
        { titulo: 'Equipo amplio', texto: 'Más personas para la escalera y el tramo a pie.' },
        { titulo: 'Embalaje rápido', texto: 'Cerramos lo que falte el mismo día.' },
        { titulo: 'Destino o guardamuebles', texto: 'Entregamos en la nueva casa o guardamos hasta que esté lista.' },
      ],
      incluye: [
        'Aunque la mudanza sea urgente, protegemos escalera y portal. En fincas antiguas, un golpe en la barandilla puede acabar costando más que la mudanza. Por eso cubrimos los puntos delicados antes de bajar el primer bulto, aunque haya prisa.',
      ],
      precio: [
        'Al precio normal se suma el recargo por urgencia. En Centro, además, el número de personas y de viajes pesa más que el volumen; te explicamos el cálculo.',
      ],
      faqs: [
        { pregunta: '¿Hacéis mudanzas urgentes en el centro de Madrid?', respuesta: 'Sí, según disponibilidad. Escríbenos con los datos y te confirmamos si es posible.' },
        { pregunta: '¿Necesito permiso si es urgente?', respuesta: 'Con furgonetas normalmente no. Por eso es el vehículo que usamos cuando no hay tiempo para tramitar.' },
        { pregunta: '¿Y si mi calle es peatonal?', respuesta: 'No es un impedimento: con una mudanza urgente trabajamos con más personas para cubrir esa distancia sin perder ritmo.' },
        { pregunta: '¿Podéis embalar por mí?', respuesta: 'Sí. Llevamos material y embalamos lo que falte.' },
        { pregunta: '¿Guardáis mis cosas si no tengo casa todavía?', respuesta: 'Sí, en un guardamuebles hasta que nos digas dónde entregarlas.' },
        { pregunta: '¿Cuánto cuesta la urgencia?', respuesta: 'Entre un 15 y un 25 % más que una mudanza con fecha cómoda, según cuánto margen haya y cuánta gente haga falta.' },
        { pregunta: '¿Podéis hacer la mudanza en dos viajes?', respuesta: 'Sí. A veces conviene llevar primero lo imprescindible y el resto después.' },
        { pregunta: '¿Qué hago con los muebles que no tengo claro si llevar?', respuesta: 'Con prisa no conviene decidirlo todo de golpe. Lo dudoso puede ir a un guardamuebles unos meses y, cuando estés instalado, eliges con calma qué traer a la nueva casa y qué vender o donar. Así la mudanza urgente no te obliga a desprenderte de nada.' },
      ],
    },

    /* ============================ VACIADO ============================ */
    'vaciado-pisos': {
      gancho: 'Pisos antiguos llenos, buhardillas y locales del casco.',
      intro: [
        'En el centro hay muchos pisos que cambian de manos: herencias de viviendas que llevan generaciones en la familia, pisos que se reforman para vender y viviendas que dejan de alquilarse. Vaciarlos es un trabajo físico en edificios exigentes y, a menudo, una tarea delicada para quien lo encarga.',
        'Te explicamos cómo hacemos un vaciado en el distrito, de la primera visita al piso vacío.',
      ],
      zona: [
        {
          titulo: 'Casas con mucha historia',
          parrafos: [
            'Las viviendas antiguas de Palacio, Embajadores o Cortes pueden guardar muebles de varias épocas, objetos de familia, libros y papeles de décadas. Antes de retirar nada conviene revisar con calma, porque en estos pisos aparecen documentos, fotografías y piezas que alguien de la familia querrá conservar.',
          ],
        },
        {
          titulo: 'Sacar volumen por escaleras estrechas',
          parrafos: [
            'Vaciar un piso entero por una escalera de casa de vecinos lleva tiempo. Desmontamos lo voluminoso, hacemos bultos manejables y organizamos la salida para no bloquear el portal más de lo necesario. Si hay un tramo a pie hasta el vehículo, se incluye en la planificación.',
          ],
        },
        {
          titulo: 'Locales y bajos comerciales',
          parrafos: [
            'En el distrito también vaciamos locales y bajos: tiendas que cierran, talleres o almacenes. Suelen tener acceso directo a la calle, lo que facilita la salida, pero a veces están en calles peatonales con horario de carga.',
          ],
        },
        {
          titulo: 'Qué hacer con cada cosa',
          parrafos: [
            'Separamos lo que se queda la familia, lo que se traslada a otra vivienda o a un guardamuebles y lo que se retira. Si hay muebles en buen estado, te comentamos si pueden tener una segunda vida antes de retirarlos.',
          ],
        },
        {
          titulo: 'Consejos',
          parrafos: [
            'Revisad cajones, libros y bolsillos antes del día del vaciado. Si el piso va a venderse, dejarlo vacío ayuda a que se vea su tamaño real, algo importante en pisos pequeños y antiguos.',
          ],
        },
        {
          titulo: 'Pisos con renta antigua',
          parrafos: [
            'En el distrito quedan viviendas que han estado alquiladas durante décadas con contratos antiguos. Cuando el inquilino fallece o deja el piso, el propietario o la familia se encuentran con una casa llena de muebles y enseres de muchos años. Vaciarlas requiere paciencia: hay armarios empotrados, cuartos interiores y, a menudo, objetos que alguien de la familia del inquilino querrá recuperar antes de que se retire nada.',
          ],
        },
        {
          titulo: 'El portal y los vecinos',
          parrafos: [
            'Un vaciado en una casa de vecinos del centro supone muchos viajes por la misma escalera durante horas. Para no molestar más de lo necesario, organizamos la salida por tandas, mantenemos el portal despejado y protegemos paredes y barandillas. Avisar a la comunidad del día y la franja horaria ayuda a que nadie se encuentre la escalera ocupada sin esperarlo.',
          ],
        },
        {
          titulo: 'Después del vaciado',
          parrafos: [
            'Si el piso va a reformarse, a menudo es el momento de retirar también muebles de cocina viejos o armarios que la obra va a sustituir. Dinos qué quiere conservar el propietario y qué se va a cambiar, y lo incluimos en el mismo trabajo.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Visita', texto: 'Vemos el volumen, el acceso y lo que se conserva.' },
        { titulo: 'Clasificación', texto: 'Separamos qué se guarda, qué se traslada y qué se retira.' },
        { titulo: 'Traslados', texto: 'Llevamos lo que se conserva a su destino.' },
        { titulo: 'Retirada', texto: 'Sacamos el resto por la escalera, desmontando lo necesario.' },
        { titulo: 'Entrega del piso', texto: 'Queda vacío y barrido.' },
      ],
      incluye: [
        'Si hay una buhardilla o un cuarto trastero en la azotea, lo incluimos en el vaciado siempre que nos lo indiques al principio. En muchas casas del distrito esos espacios llevan años sin abrirse y esconden más volumen que una habitación.',
      ],
      precio: [
        'En Centro el precio depende tanto del volumen como del acceso: la escalera sin ascensor y el tramo a pie pueden pesar más que los metros del piso.',
      ],
      faqs: [
        { pregunta: '¿Vaciáis pisos antiguos del centro?', respuesta: 'Sí. Es habitual en el distrito, sobre todo por herencias y ventas.' },
        { pregunta: '¿Vaciáis locales comerciales?', respuesta: 'Sí, también bajos y locales, con o sin traslado del mobiliario.' },
        { pregunta: '¿Podéis guardar parte del contenido?', respuesta: 'Sí, en un guardamuebles o en la dirección que nos indiquéis.' },
        { pregunta: '¿Cuánto se tarda?', respuesta: 'Depende del volumen y de la escalera. Un piso pequeño puede hacerse en una jornada.' },
        { pregunta: '¿Dejáis el piso barrido?', respuesta: 'Sí. La limpieza a fondo es otro servicio.' },
        { pregunta: '¿Tengo que estar presente?', respuesta: 'Basta con que alguien nos acompañe la primera hora y marque lo que no debe salir; luego podemos seguir solos si nos dejáis las llaves.' },
        { pregunta: '¿Qué pasa con los muebles que valen algo?', respuesta: 'Te lo comentamos antes de retirarlos, por si preferís venderlos o donarlos.' },
        { pregunta: '¿Retiráis también los muebles de cocina y electrodomésticos?', respuesta: 'Sí, si nos lo indicáis. Es habitual cuando el piso va a reformarse. Los electrodomésticos se desconectan antes; si hay que cortar el agua o el gas para retirarlos, debe hacerlo un profesional autorizado, y te lo avisamos para que esté resuelto el día del vaciado.' },
      ],
    },

    /* ============================ PERSONAS MAYORES ============================ */
    'mudanzas-personas-mayores': {
      gancho: 'Dejar un piso sin ascensor del casco antiguo, con calma.',
      intro: [
        'Muchas personas mayores del distrito Centro viven en pisos altos sin ascensor, en edificios donde subir cada día se ha vuelto difícil. Cuando deciden mudarse a una vivienda accesible, a casa de un familiar o a una residencia, la mudanza tiene que respetar su ritmo y su apego al barrio.',
        'Te contamos cómo la organizamos para que sea tranquila y ordenada.',
      ],
      zona: [
        {
          titulo: 'Vidas en el barrio',
          parrafos: [
            'En La Latina, Lavapiés o los Austrias hay vecinos que llevan toda la vida en la misma casa. Dejarla no es solo un cambio de vivienda. Por eso dedicamos tiempo a decidir con la persona qué se lleva, sin prisas, y a que los objetos importantes viajen con un cuidado especial.',
          ],
        },
        {
          titulo: 'Que no tenga que subir ni bajar',
          parrafos: [
            'Si el piso no tiene ascensor, lo ideal es que la persona salga antes de que empiece la carga y no tenga que estar en la escalera mientras se trabaja. Un familiar puede acompañarla y llegar a la nueva casa cuando ya esté preparada.',
          ],
        },
        {
          titulo: 'Si el destino es una residencia',
          parrafos: [
            'Las residencias tienen horarios de entrada de muebles y habitaciones con espacio limitado. Preguntamos antes qué cabe y qué está permitido, para llevar solo lo útil: la butaca de siempre, una cómoda, fotos y objetos personales.',
          ],
        },
        {
          titulo: 'El vehículo y la calle',
          parrafos: [
            'En Centro, el acceso de vehículos está limitado y muchas calles son peatonales. Para una mudanza reducida usamos una furgoneta que pueda acercarse lo máximo posible, y si hay tramo a pie lo cubre el equipo.',
          ],
        },
        {
          titulo: 'Consejos para la familia',
          parrafos: [
            'Preparad una bolsa con medicación, documentación y lo necesario para los primeros días. Hablad con la persona sobre qué quiere conservar y respetad sus decisiones: los objetos de siempre ayudan mucho a adaptarse.',
          ],
        },
        {
          titulo: 'Mudarse sin dejar el barrio',
          parrafos: [
            'No todas las mudanzas de personas mayores del distrito son para irse lejos. Muchas son para quedarse cerca: un piso con ascensor en una calle vecina, un bajo accesible o una vivienda tutelada en el mismo barrio. Mantener el entorno, la farmacia, el mercado y los vecinos de siempre ayuda mucho. En esos casos el trayecto es corto y podemos hacer la mudanza en una mañana, con la nueva casa preparada a mediodía.',
          ],
        },
        {
          titulo: 'Muebles de toda la vida en una casa más pequeña',
          parrafos: [
            'Los muebles de un piso antiguo del centro suelen ser grandes y pesados: aparadores, armarios de luna, mesas camilla. En una vivienda nueva quizá solo quepan algunos. Medimos con la familia el espacio disponible para elegir qué piezas merecen el viaje, y el resto puede repartirse entre familiares o guardarse hasta decidir.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Conversación previa', texto: 'Hablamos con la persona y con la familia sobre lo que se lleva.' },
        { titulo: 'Selección', texto: 'Ayudamos a elegir qué viaja a la nueva casa y marcamos lo que repartirá la familia.' },
        { titulo: 'Embalaje completo', texto: 'Lo embalamos todo para que nadie tenga que cargar.' },
        { titulo: 'Mudanza sin presencia', texto: 'Trabajamos mientras la persona está acompañada fuera.' },
        { titulo: 'Casa preparada', texto: 'La cama, el armario y sus cosas quedan listos.' },
      ],
      incluye: [
        'Si lo que no cabe en la nueva vivienda va a casa de varios familiares, organizamos las entregas en el mismo día siempre que sea posible. Cada caja lleva el nombre de la persona que la recibe, para que no haya confusiones.',
      ],
      precio: [
        'Se calcula como una mudanza de piso, con embalaje completo. En el distrito, la escalera sin ascensor y el tramo a pie suelen ser lo que más influye en el tiempo.',
      ],
      faqs: [
        { pregunta: '¿Podéis hablar con los hijos para organizarlo todo?', respuesta: 'Sí. Una sola persona de contacto se coordina con quien prefiráis.' },
        { pregunta: '¿La persona mayor tiene que estar durante la mudanza?', respuesta: 'No es necesario. Recomendamos que esté acompañada fuera mientras se carga.' },
        { pregunta: '¿Lleváis muebles a residencias?', respuesta: 'Sí. Preguntamos antes el espacio y el horario de entrada.' },
        { pregunta: '¿Qué hacéis con lo que no se lleva?', respuesta: 'Puede ir a familiares, a un guardamuebles o retirarse, según decidáis.' },
        { pregunta: '¿Montáis la cama el mismo día?', respuesta: 'Sí, la cama y lo básico quedan montados para la primera noche.' },
        { pregunta: '¿Podéis colgar fotos y cuadros?', respuesta: 'Podemos valorarlo. Ayuda a que la nueva casa se sienta propia.' },
        { pregunta: '¿Cuánto dura la mudanza?', respuesta: 'Una vivienda pequeña suele hacerse en una jornada, según el acceso.' },
        { pregunta: '¿Podéis hacer la mudanza en varias visitas cortas?', respuesta: 'Sí. Para algunas personas es más llevadero mudarse por partes: primero lo esencial para empezar a vivir en la nueva casa y, unos días después, el resto. Lo planificamos así si os parece mejor, aunque el total sale algo más caro que hacerlo todo en un día.' },
      ],
    },

    /* ============================ ELEVADOR ============================ */
    'subida-muebles-elevador': {
      gancho: 'Cuando la escalera no deja pasar y la calle lo permite.',
      intro: [
        'En el distrito Centro hay muchos muebles que no pasan por la escalera. La opción de subirlos por la fachada con un elevador existe, pero aquí más que en ningún otro sitio depende de la calle: anchura, si es peatonal, si hay balcones accesibles y si se puede ocupar la vía pública.',
        'Te explicamos cuándo es viable y qué alternativas hay cuando no lo es.',
      ],
      zona: [
        {
          titulo: 'Balcones del casco antiguo',
          parrafos: [
            'Muchas fachadas del distrito tienen balcones con puertas altas que permiten entrar muebles grandes. Otras tienen balcones estrechos o barandillas que no se pueden retirar. Lo primero es comprobar el hueco libre y si da a una calle donde pueda colocarse el elevador.',
          ],
        },
        {
          titulo: 'Calles demasiado estrechas',
          parrafos: [
            'En buena parte de Lavapiés, La Latina o el barrio de las Letras las calles son tan estrechas que el elevador no tiene sitio sin cortar el paso. En calles peatonales o con restricciones de acceso, la operación necesita autorización específica y no siempre es posible.',
          ],
        },
        {
          titulo: 'Autorización municipal',
          parrafos: [
            'En Madrid, las mudanzas con elevadores o vehículos montamuebles requieren autorización para ocupar la vía pública, que se solicita con antelación y lleva tasas. En el distrito Centro, además, el vehículo debe poder acceder dentro de la Zona de Bajas Emisiones de Especial Protección.',
          ],
        },
        {
          titulo: 'Alternativas al elevador',
          parrafos: [
            'Cuando la calle no deja montar el elevador, quedan otras salidas: separar el mueble en piezas, reforzar el equipo para subirlo a pulso por la escalera o, si la finca tiene un acceso secundario, entrar por ahí. Y si ninguna sirve, preferimos decírtelo claro desde el principio que darte un precio que luego no podamos cumplir.',
          ],
        },
        {
          titulo: 'Qué comprobar tú',
          parrafos: [
            'Las medidas del mueble, el hueco del balcón o la ventana y una foto de la calle frente al edificio. Con eso podemos descartar o confirmar el elevador sin necesidad de visita en muchos casos.',
          ],
        },
        {
          titulo: 'Gran Vía y calles anchas',
          parrafos: [
            'No todo el distrito es estrecho. En la Gran Vía, la calle de Alcalá, la de Atocha o la de Toledo hay aceras amplias y edificios del siglo XX con balcones grandes. Ahí el elevador suele ser viable, aunque la autorización y la coordinación con el tráfico y los peatones pesan más que en una calle residencial. Conviene hacer la maniobra a primera hora, cuando hay menos gente.',
          ],
        },
        {
          titulo: 'Muebles que más se suben por fuera en Centro',
          parrafos: [
            'En el distrito lo más habitual son sofás y colchones para áticos y buhardillas, pianos verticales y muebles antiguos que no se pueden desmontar sin dañarlos. Antes de decidir, piensa si el mueble tiene alternativa: muchas veces un sofá modular o una cama desmontable resuelven el problema sin necesidad de ocupar la calle.',
          ],
        },
      ],
      proceso: [
        { titulo: 'Fotos de calle y fachada', texto: 'Comprobamos si hay espacio y balcón accesible.' },
        { titulo: 'Viabilidad', texto: 'Te decimos si el elevador es posible o qué alternativa hay.' },
        { titulo: 'Trámites', texto: 'Te indicamos la autorización necesaria y la antelación.' },
        { titulo: 'Maniobra', texto: 'Subimos la pieza protegida y cuidamos el balcón.' },
        { titulo: 'Montaje y retirada', texto: 'Colocamos el mueble y recogemos protecciones.' },
      ],
      incluye: [
        'Cuando el elevador es viable, combinamos su uso con el resto de la mudanza para ocupar la calle el menor tiempo posible. Así la autorización cubre una franja corta y los vecinos apenas notan la maniobra.',
      ],
      precio: [
        'Al coste del elevador se suman las tasas municipales si hace falta autorización. En Centro conviene valorar antes si desmontar el mueble sale más sencillo y económico.',
      ],
      faqs: [
        { pregunta: '¿Se puede usar elevador en el centro de Madrid?', respuesta: 'Depende de la calle. En calles anchas con balcón accesible suele ser posible; en calles estrechas o peatonales, a menudo no.' },
        { pregunta: '¿Necesito autorización?', respuesta: 'Sí, para ocupar la vía pública con el elevador. Se pide con antelación y lleva tasas.' },
        { pregunta: '¿Qué pasa si mi calle es peatonal?', respuesta: 'Requiere una autorización específica y no siempre es viable. Valoramos alternativas.' },
        { pregunta: '¿Y si el balcón es pequeño?', respuesta: 'Medimos el hueco. Si el mueble no pasa, buscamos otra opción.' },
        { pregunta: '¿Cuánto cuesta el elevador?', respuesta: 'Tiene un precio orientativo de 150 a 300 euros, más las tasas municipales si hacen falta.' },
        { pregunta: '¿Se puede subir un piano?', respuesta: 'Depende del piano, la fachada y la calle. Lo valoramos con fotos y medidas.' },
        { pregunta: '¿Hay alternativa sin elevador?', respuesta: 'Desmontar, subir por la escalera con más personas o buscar otro acceso del edificio.' },
        { pregunta: '¿Cuánto tiempo se ocupa la calle con el elevador?', respuesta: 'Para uno o dos muebles, la maniobra suele resolverse en poco tiempo una vez montado el equipo, pero el montaje y la recogida también cuentan. Por eso la autorización se pide por el tiempo total previsto y conviene agrupar en una misma subida todas las piezas que no pasen por la escalera.' },
      ],
    },
  },
};

export default centro;
