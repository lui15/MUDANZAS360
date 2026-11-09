import { REVISION } from '../datos/contacto';
import { PRECIO_M3, TARIFAS, TIPOS_VIVIENDA, rangoNacional } from '../datos/precios';
import { PaginaSeo } from './pagina-seo';
import { RUTAS_GUIAS } from './rutas';

const V = TIPOS_VIVIENDA;
const T = TARIFAS;
const NAC = rangoNacional('piso-1-2');
const eur = (n: number) => n.toLocaleString('es-ES');

/** Fecha de publicación de las guías (la misma constante de revisión de toda la web). */
const PUBLICADO = REVISION.iso;

/**
 * Guías prácticas. Las cifras de precio salen de datos/precios.ts, la misma fuente que /precios/. Los trámites enlazan a las sedes oficiales y no afirman plazos.
 */
export const PAGINAS_GUIAS: PaginaSeo[] = [
  /* ---------------------------- ÍNDICE ---------------------------- */
  {
    path: 'guias',
    tipo: 'hub',
    padre: '',
    title: 'Guías para tu mudanza en Madrid | Mudanzas360',
    description:
      'Guías para preparar una mudanza en Madrid: cuánto cuesta, checklist de 4 semanas, cómo calcular los m³ y trámites de padrón y suministros.',
    etiqueta: 'Guías',
    resumen: 'Todo lo que conviene saber antes de mudarte, explicado paso a paso.',
    h1: { antes: 'Guías para preparar tu', resaltado: 'mudanza', despues: 'en Madrid' },
    kicker: 'GUÍAS PRÁCTICAS',
    intro:
      'Hemos reunido en estas guías las dudas que más nos plantean antes de una mudanza: qué influye en el precio, cómo organizar las semanas previas, cómo calcular el volumen de tu casa y qué trámites hacer al llegar.',
    foto: 'embalaje-material',
    fotoAlt: 'Material de embalaje preparado para una mudanza',
    fotoContenido: 'salon-cajas',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza',
    fichas: [
      { etiqueta: 'Guías', valor: 'Precio, organización, volumen y trámites' },
      { etiqueta: 'Escritas por', valor: 'El equipo de Mudanzas360' },
      { etiqueta: 'Trámites', valor: 'Con enlaces a fuentes oficiales' },
      { etiqueta: 'Presupuesto', valor: 'Gratis y sin compromiso' },
    ],
    secciones: [
      {
        titulo: 'Para qué sirven estas guías',
        parrafos: [
          'Una mudanza tiene muchas piezas que encajar: fechas, cajas, muebles que no caben, el permiso para que el camión pueda parar, el contrato de la luz o el cambio de domicilio en el padrón. Casi nadie se muda con frecuencia, así que es normal no saber por dónde empezar ni qué se suele olvidar.',
          'Estas guías recogen lo que explicamos a diario a quienes nos piden presupuesto. No sustituyen a una conversación sobre tu caso, pero te ayudan a llegar a ella con las ideas claras y a tomar decisiones con más información.',
        ],
      },
      {
        titulo: 'Qué vas a encontrar',
        parrafos: [
          'La guía de precios explica qué partidas componen el coste de una mudanza en Madrid y por qué dos pisos parecidos pueden tener presupuestos muy distintos. La checklist de cuatro semanas ordena las tareas en el tiempo para que nada se acumule en los últimos días.',
          'La guía de metros cúbicos te enseña a estimar el volumen de tu vivienda, que es el dato que más pesa en el precio. Y la guía de trámites resume lo que conviene gestionar al cambiar de casa en Madrid, con enlaces a las sedes oficiales donde se tramita cada cosa.',
        ],
        lista: [
          'Cuánto cuesta una mudanza en Madrid y qué la encarece.',
          'Qué hacer cuatro semanas, dos semanas y una semana antes.',
          'Cómo calcular los m³ de tu casa habitación por habitación.',
          'Empadronamiento, suministros y otros cambios de domicilio.',
        ],
      },
      {
        titulo: 'Cómo usarlas',
        parrafos: [
          'Si aún no tienes fecha, empieza por la guía de precios y la de metros cúbicos: te darán una idea del tamaño de la mudanza y del rango de coste. Después, prueba la calculadora de mudanza para ver una estimación con tus datos.',
          'Cuando ya tengas fecha, sigue la checklist semana a semana. Y en cuanto tengas las llaves de la nueva vivienda, repasa la guía de trámites. Si en algún punto tienes dudas, escríbenos: hablas directamente con quien hace tu mudanza, sin intermediarios.',
        ],
      },
      {
        titulo: 'Información revisada',
        parrafos: [
          'Revisamos estas guías periódicamente y en cada una indicamos la fecha de la última actualización. En los trámites administrativos no damos plazos ni requisitos cerrados, porque cambian con el tiempo y dependen de cada caso: enlazamos siempre a la fuente oficial para que consultes la información vigente.',
        ],
      },
    ],
    grupos: [{ titulo: 'Guías de mudanza', rutas: RUTAS_GUIAS.filter((r) => r !== 'guias') }],
    faqs: [
      {
        pregunta: '¿Las guías sirven también fuera de Madrid?',
        respuesta:
          'Gran parte sí, como la checklist o el cálculo de metros cúbicos. Los trámites y los permisos de carga, en cambio, dependen de cada ayuntamiento.',
      },
      {
        pregunta: '¿Quién escribe las guías?',
        respuesta: 'El equipo de Mudanzas360, a partir de las dudas que nos plantean al pedir presupuesto. Cada guía indica su fecha de revisión.',
      },
      {
        pregunta: '¿Puedo pedir presupuesto sin haber leído las guías?',
        respuesta: 'Claro. Rellena el formulario con lo que sepas y te ayudamos a concretar el resto. El presupuesto es gratis y sin compromiso.',
      },
      {
        pregunta: '¿Dónde consulto los trámites oficiales?',
        respuesta:
          'En la sede electrónica de cada administración. La guía de trámites enlaza a las del Ayuntamiento de Madrid, la Comunidad de Madrid, la DGT, la Agencia Tributaria y la Seguridad Social.',
      },
      {
        pregunta: "¿Cada cuánto actualizáis las guías?",
        respuesta: "Las revisamos periódicamente y siempre que cambia algo relevante, como nuestras tarifas. La fecha de la última revisión aparece en cada guía.",
      },
      {
        pregunta: "¿Las guías incluyen precios?",
        respuesta: "No directamente: remiten a nuestra página de precios, que es la única fuente de tarifas de la web, para que nunca haya cifras distintas en dos sitios.",
      },
      {
        pregunta: "¿Qué guía leo primero?",
        respuesta: "Si todavía no tienes fecha, empieza por la de precios y la de metros cúbicos. Si ya la tienes, sigue la checklist semana a semana.",
      },
    ],
    relacionadas: ['precios', 'mudanzas-pisos-madrid', 'mudanzas-madrid', 'preguntas-frecuentes'],
  },

  /* ---------------------------- CUÁNTO CUESTA ---------------------------- */
  {
    path: 'guias/cuanto-cuesta-una-mudanza-en-madrid',
    tipo: 'guia',
    padre: 'guias',
    title: 'Cuánto cuesta una mudanza en Madrid en 2026',
    description:
      'Qué partidas componen el precio de una mudanza en Madrid en 2026, qué la encarece y cómo comparar presupuestos sin sorpresas. Guía de Mudanzas360.',
    etiqueta: 'Cuánto cuesta una mudanza en Madrid en 2026',
    resumen: 'Las partidas del precio, lo que lo encarece y cómo comparar presupuestos.',
    h1: { antes: 'Cuánto cuesta una', resaltado: 'mudanza en Madrid', despues: 'en 2026' },
    kicker: 'GUÍA DE PRECIOS',
    intro:
      'El precio de una mudanza no sale de una tarifa fija, sino de unas pocas variables que se pueden medir. En esta guía te explicamos cuáles son, cuánto pesa cada una y cómo leer un presupuesto para compararlo con otro.',
    foto: 'cajas-apiladas',
    fotoAlt: 'Cajas de cartón apiladas sobre palés',
    fotoContenido: 'furgoneta-carretera',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza',
    fichas: [
      { etiqueta: 'Lo que más pesa', valor: 'Volumen y horas de trabajo' },
      { etiqueta: 'También cuenta', valor: 'Plantas, accesos, distancia y fecha' },
      { etiqueta: 'Precios de referencia', valor: 'En nuestra página de precios' },
      { etiqueta: 'Lectura', valor: 'Unos 7 minutos' },
    ],
    secciones: [
      {
        titulo: 'Por qué no hay un precio único',
        parrafos: [
          'Cuando alguien pregunta cuánto cuesta una mudanza en Madrid, la respuesta honesta es que depende, pero no de forma arbitraria. Dos pisos de tres habitaciones pueden tener presupuestos muy distintos porque uno está en un quinto sin ascensor en Lavapiés y el otro en un edificio con garaje en Valdebebas. Lo que se paga es el trabajo necesario para mover tus cosas, y ese trabajo cambia con cada vivienda.',
          'Por eso, además de las cifras, aquí te explicamos de qué se compone el precio. Todas las tablas, por tipo de vivienda, por metro cúbico, de los servicios extra y de las rutas nacionales, están en nuestra página de precios, que actualizamos con nuestras tarifas vigentes.',
        ],
      },
      {
        titulo: 'Precios de referencia en 2026',
        parrafos: [
          `Con nuestras tarifas de 2026, IVA incluido, una mudanza dentro de Madrid cuesta ${V[0].precio.min}-${V[0].precio.max} € para un estudio, ${V[1].precio.min}-${V[1].precio.max} € para un piso de 1-2 habitaciones, ${V[2].precio.min}-${eur(V[2].precio.max)} € para uno de 3 habitaciones, ${V[3].precio.min}-${eur(V[3].precio.max)} € para uno de 4 o más y ${eur(V[4].precio.min)}-${eur(V[4].precio.max)} € para un chalet. Por metro cúbico, ${PRECIO_M3.min}-${PRECIO_M3.max} €.`,
          `A esa base se suman los extras: ${T.plantaSinAscensor.min}-${T.plantaSinAscensor.max} € por cada planta sin ascensor, desde ${T.montajeMueble.min} € por mueble que haya que desmontar y montar, y ${T.embalaje.min}-${T.embalaje.max} € si quieres que lo embalemos todo. Fuera de Madrid, un piso de 1-2 habitaciones cuesta entre ${eur(NAC.min)} y ${eur(NAC.max)} € según el destino. Tienes todas las tablas y tres ejemplos calculados en nuestra página de precios.`,
        ],
      },
      {
        titulo: 'Las partidas de un presupuesto de mudanza',
        parrafos: [
          'Casi todos los presupuestos se construyen sumando las mismas piezas. Conocerlas te permite entender por qué sube o baja una propuesta y detectar si falta algo.',
        ],
        subsecciones: [
          {
            titulo: 'Personal y horas',
            texto:
              'Es la partida principal. Depende del volumen, de las plantas, de la distancia entre el vehículo y el portal y de cuántos muebles hay que desmontar. Un equipo más grande termina antes, y el equilibrio entre personas y horas lo ajusta quien organiza la mudanza.',
          },
          {
            titulo: 'Vehículo',
            texto:
              'El tamaño del camión o la furgoneta se elige según los metros cúbicos. Si el volumen no cabe en un viaje, habrá que hacer dos, o usar un vehículo mayor si la calle lo permite.',
          },
          {
            titulo: 'Material de embalaje',
            texto:
              'Cajas, papel, plástico de burbujas, mantas y film para proteger muebles. Puedes comprarlo tú o incluirlo en el presupuesto, y lo mismo con el trabajo de embalar.',
          },
          {
            titulo: 'Servicios añadidos',
            texto:
              'Desmontaje y montaje de muebles, elevador exterior, guardamuebles o la gestión del espacio para el camión. Cada uno se presupuesta aparte.',
          },
          {
            titulo: 'Desplazamiento',
            texto:
              'En mudanzas dentro de Madrid pesa poco. En las nacionales, el combustible, los peajes, las horas de conducción y, en su caso, las dietas y la pernocta del equipo.',
          },
        ],
      },
      {
        titulo: 'Qué encarece una mudanza en Madrid',
        parrafos: [
          'Madrid tiene particularidades que influyen en el precio más que en otras ciudades. El centro y los distritos del ensanche, como Chamberí o Salamanca, combinan calles estrechas, aparcamiento regulado y fincas antiguas con ascensores pequeños. En esos casos, el tiempo de carga crece aunque el volumen sea moderado.',
          'También pesa la zona de bajas emisiones, que condiciona qué vehículos pueden circular por determinadas áreas, y la necesidad de reservar espacio en la vía pública para que el camión pueda detenerse junto al portal. Es un trámite municipal que conviene consultar con antelación en el Ayuntamiento de Madrid o en el de tu municipio.',
        ],
        lista: [
          'Plantas sin ascensor, o ascensores en los que no cabe un armario.',
          'Calles estrechas o peatonales que obligan a caminar con cada caja.',
          'Muebles grandes que hay que desmontar y volver a montar.',
          'Objetos frágiles o valiosos que requieren un embalaje especial.',
          'Fechas de mucha demanda: finales de mes, verano y septiembre.',
        ],
      },
      {
        titulo: 'Cómo estimar tu propio caso',
        parrafos: [
          'El primer paso es conocer el volumen. Nuestra guía para calcular los metros cúbicos te enseña a hacerlo habitación por habitación, y la calculadora de mudanza aplica nuestras tarifas a ese volumen, a las plantas y a los extras que elijas. El resultado es una estimación, no una oferta, pero te da una idea razonable antes de pedir presupuesto.',
          'Después, lo que afina el precio son los detalles: las dos direcciones, la planta y el ascensor en cada una, los muebles más voluminosos y si hay algo que requiera un cuidado especial. Cuanto más concreta sea esa información, menos margen de error tendrá la propuesta.',
        ],
      },
      {
        titulo: 'Cómo comparar presupuestos',
        parrafos: [
          'Comparar precios es sensato, siempre que compares lo mismo. Un presupuesto muy bajo puede no incluir el desmontaje, los materiales o las plantas sin ascensor, y acabar subiendo el mismo día de la mudanza. Antes de decidir, revisa qué incluye cada propuesta y qué ocurriría si el volumen cambia.',
          'Pregunta también quién va a hacer el trabajo. En algunas plataformas, la empresa que te da el precio no es la que se presenta en tu casa. Con nosotros hablas directamente con quien hace tu mudanza, lo que facilita resolver dudas y ajustar detalles sin intermediarios.',
        ],
        lista: [
          '¿Incluye desmontaje y montaje de muebles?',
          '¿Incluye el material de embalaje, o solo el transporte?',
          '¿Se han tenido en cuenta las plantas y los accesos?',
          '¿Qué pasa si hay más volumen del previsto?',
          '¿Están incluidos los peajes en una mudanza nacional?',
        ],
      },
      {
        titulo: 'Cómo ahorrar sin llevarte sorpresas',
        parrafos: [
          'La forma más eficaz de ahorrar es reducir el volumen: vende, dona o recicla lo que no vayas a usar antes de pedir presupuesto, no después. También puedes embalar tú la ropa, los libros y los objetos que no sean frágiles, y dejar para el equipo solo lo delicado.',
          'Si tienes flexibilidad, elige un día entre semana a mitad de mes. Y si las fechas de salida y entrada no coinciden, compara el coste de un guardamuebles temporal con el de hacer dos mudanzas. Para mudanzas muy pequeñas, un porte o una furgoneta con conductor pueden ser suficientes.',
        ],
      },
      {
        titulo: "Ejemplos de lo que cambia el precio",
        parrafos: [
          "Imagina dos pisos de dos habitaciones con un volumen parecido. El primero está en un tercero con ascensor amplio en un barrio de calles anchas, con sitio para el camión en la puerta. El segundo está en un cuarto sin ascensor en una finca antigua del centro, en una calle donde hay que reservar espacio. Aunque se mueva lo mismo, el segundo requiere más personas o más horas, y quizá desmontar muebles que en el primero bajan enteros.",
          "Otro ejemplo: una mudanza de Madrid a Valencia y otra dentro de Madrid con el mismo volumen. En la nacional, además del trabajo de carga y descarga, entran el combustible, los peajes y las horas de conducción, y la entrega puede no ser el mismo día. Por eso las rutas tienen su propia tabla en la página de precios.",
          "Un tercer caso habitual es el del trastero. Un piso pequeño con un trastero lleno puede tener el volumen de uno bastante mayor. Revisarlo antes de pedir presupuesto evita sorpresas y te permite decidir qué merece la pena trasladar.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuál es la variable que más influye en el precio?',
        respuesta:
          'El volumen, porque determina el vehículo y las horas de trabajo. Le siguen las plantas sin ascensor, los accesos y los servicios añadidos.',
      },
      {
        pregunta: '¿Es más cara una mudanza en el centro de Madrid?',
        respuesta:
          'Suele requerir más tiempo por las calles estrechas, el aparcamiento y los ascensores pequeños, lo que puede encarecerla aunque el volumen sea el mismo.',
      },
      {
        pregunta: '¿La calculadora da un precio cerrado?',
        respuesta:
          'No. Es una estimación con nuestras tarifas de referencia. El precio final se confirma en una propuesta personalizada con tus datos.',
      },
      {
        pregunta: '¿Dónde veo los precios de referencia?',
        respuesta:
          'En nuestra página de precios, con tablas por tipo de vivienda, por metro cúbico, de los servicios extra y de las rutas nacionales.',
      },
      {
        pregunta: "¿Por qué me piden fotos para el presupuesto?",
        respuesta: "Porque permiten estimar mejor el volumen y ver qué muebles hay que desmontar. Cuanto más ajustada sea la información, más fiable será el precio.",
      },
    ],
    relacionadas: ['precios', 'mudanzas-pisos-madrid', 'guias/como-calcular-m3-mudanza', 'mudanzas-baratas-madrid'],
    articulo: { publicado: PUBLICADO },
  },

  /* ---------------------------- CHECKLIST ---------------------------- */
  {
    path: 'guias/checklist-mudanza-4-semanas',
    tipo: 'guia',
    padre: 'guias',
    title: 'Checklist de mudanza: qué hacer 4 semanas antes',
    description:
      'Checklist de mudanza semana a semana: qué hacer cuatro semanas antes, a dos semanas, la última semana y el mismo día. Para no olvidar nada al mudarte.',
    etiqueta: 'Checklist de mudanza: 4 semanas antes',
    resumen: 'Las tareas ordenadas semana a semana para que nada se acumule al final.',
    h1: { antes: 'Checklist de', resaltado: 'mudanza', despues: ': qué hacer 4 semanas antes' },
    kicker: 'ORGANIZACIÓN',
    intro:
      'La mayoría de los problemas de una mudanza vienen de dejarlo todo para la última semana. Esta checklist reparte las tareas en cuatro semanas para que llegues al día del traslado con todo preparado.',
    foto: 'salon-cajas',
    fotoAlt: 'Salón con cajas de cartón apiladas y plantas',
    fotoContenido: 'embalaje-material',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza',
    fichas: [
      { etiqueta: 'Empieza', valor: 'Cuatro semanas antes' },
      { etiqueta: 'Clave', valor: 'Reducir volumen y reservar fecha' },
      { etiqueta: 'No olvides', valor: 'Permiso para el camión y suministros' },
      { etiqueta: 'Lectura', valor: 'Unos 8 minutos' },
    ],
    secciones: [
      {
        titulo: 'Cuatro semanas antes: decidir y reservar',
        parrafos: [
          'Un mes antes es el momento de tomar las decisiones grandes. La primera es qué te vas a llevar. Recorre la casa habitación por habitación y separa lo que quieres conservar, lo que vas a vender o regalar y lo que vas a tirar. Cada mueble que no se mueve es volumen que no pagas y espacio que ganas en la nueva vivienda.',
          'Con esa lista ya puedes pedir presupuesto. Cuanto antes lo hagas, más fácil será conseguir la fecha que prefieres, sobre todo si coincide con final de mes, verano o septiembre, que son las épocas de más demanda. Indica las dos direcciones, las plantas, si hay ascensor y los muebles más grandes.',
        ],
        lista: [
          'Haz inventario y decide qué te llevas.',
          'Pide presupuesto y reserva la fecha.',
          'Si es un piso de alquiler, revisa el preaviso que exige tu contrato.',
          'Si las fechas no encajan, valora un guardamuebles temporal.',
          'Consulta en tu ayuntamiento cómo reservar espacio para el camión.',
        ],
      },
      {
        titulo: 'Tres semanas antes: vaciar y conseguir material',
        parrafos: [
          'Es la semana de deshacerse de lo que no viaja. Publica los anuncios de lo que vas a vender, organiza la recogida de lo que vas a donar y averigua cómo funciona en tu municipio la retirada de muebles y enseres, que en muchos casos requiere cita previa. Si se acumula mucho, un servicio de vaciado puede ahorrarte tiempo.',
          'Consigue también el material: cajas de varios tamaños, cinta de embalar, papel, plástico de burbujas y rotuladores. Las cajas pequeñas son para libros y objetos pesados; las grandes, para ropa, cojines y cosas ligeras. Si prefieres no embalar tú, este es buen momento para confirmar ese servicio.',
        ],
        lista: [
          'Vende, dona o recicla lo que no te llevas.',
          'Pide cita para la retirada de muebles viejos.',
          'Compra o encarga el material de embalaje.',
          'Empieza por lo que no usas: trasteros, altillos y libros.',
        ],
      },
      {
        titulo: 'Dos semanas antes: avisos y suministros',
        parrafos: [
          'Con la fecha cerrada, toca avisar. Comunica el cambio a las compañías de luz, gas, agua e internet: indica la fecha de baja o de cambio de titular en la vivienda que dejas y gestiona el alta o el traslado en la nueva. La instalación de la fibra puede requerir una visita técnica, así que conviene pedirla con margen.',
          'Si te mudas dentro de Madrid y vas a necesitar que el camión ocupe plazas en la calle, comprueba que la solicitud está en marcha. Habla también con la comunidad de vecinos de ambos edificios: algunas tienen horarios para mudanzas o piden proteger el ascensor y las zonas comunes.',
        ],
        lista: [
          'Gestiona bajas, altas o cambios de titular de los suministros.',
          'Pide el traslado o el alta de internet.',
          'Avisa a las dos comunidades de vecinos.',
          'Sigue embalando por habitaciones, de la menos usada a la más usada.',
        ],
      },
      {
        titulo: 'La última semana: embalar y preparar',
        parrafos: [
          'En los últimos días se embala casi todo. Etiqueta cada caja con la habitación de destino y un resumen de su contenido, y marca las frágiles. Prepara una caja «de primera necesidad» con lo que vas a usar el primer día: cargadores, documentos, medicamentos, una muda, artículos de aseo y algo de menaje.',
          'Vacía y descongela el frigorífico con uno o dos días de antelación. Desconecta y vacía la lavadora. Fotografía la parte trasera de los aparatos con muchos cables antes de desconectarlos, y guarda en bolsas los tornillos de los muebles que se desmonten, pegadas a la pieza a la que pertenecen.',
        ],
        lista: [
          'Etiqueta todas las cajas por habitación de destino.',
          'Prepara la caja de primera necesidad.',
          'Descongela el frigorífico y vacía la lavadora.',
          'Separa documentos, joyas y objetos de valor para llevarlos tú.',
          'Confirma la hora de llegada del equipo.',
        ],
      },
      {
        titulo: 'El día de la mudanza',
        parrafos: [
          'Sé tú quien abra la casa y esté disponible para indicar qué va y qué no va. Haz un último recorrido por armarios, cajones, trastero y terraza antes de que se vaya el camión. Anota las lecturas de los contadores de la vivienda que dejas y haz fotos del estado en que la entregas, sobre todo si es de alquiler.',
          'En la nueva casa, indica dónde va cada mueble grande antes de que entre, para no moverlo dos veces. Revisa el estado de las cosas al descargar y, si algo no está bien, coméntalo en ese momento. Deja las cajas en la habitación que indica su etiqueta y empieza por montar las camas.',
        ],
      },
      {
        titulo: 'Después de la mudanza',
        parrafos: [
          'Con las llaves de la nueva casa empiezan los cambios de domicilio. El más importante es el padrón municipal, y a partir de él otros como la tarjeta sanitaria, la dirección fiscal o la del permiso de conducir. Los resumimos en nuestra guía de trámites al mudarte en Madrid, con enlaces a las sedes oficiales.',
          'Recuerda actualizar también la dirección en tu banco, tus seguros, tu empresa y las tiendas en las que compras por internet. Y si hay algo que no te ha convencido de la mudanza, cuéntanoslo: hablas directamente con quien la ha hecho.',
        ],
      },
      {
        titulo: "Errores frecuentes en la organización",
        parrafos: [
          "El error más común es empezar a embalar por la cocina o el baño, que se usan a diario. Lo mejor es empezar por lo que menos se usa, como trasteros, libros, ropa de otra temporada y decoración, y dejar para el final lo imprescindible. Otro error habitual es comprar pocas cajas y acabar improvisando con bolsas en el último momento.",
          "También suele olvidarse avisar a la comunidad de vecinos o pedir con tiempo el espacio para el camión, y eso puede retrasar la carga el mismo día. Y muchas personas no separan los objetos de valor y los documentos, que acaban dentro de una caja cualquiera.",
          "Por último, no subestimes el cansancio. Una mudanza es físicamente exigente aunque la haga un equipo profesional: reserva el día siguiente para descansar y montar lo básico, y no planifiques compromisos importantes para ese fin de semana.",
        ],
        lista: [
          "Empezar a embalar por lo que se usa a diario.",
          "Quedarse sin cajas ni cinta.",
          "No avisar a la comunidad.",
          "Mezclar documentos y objetos de valor con el resto.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Con cuánta antelación debo reservar la mudanza?',
        respuesta:
          'Lo recomendable es pedir presupuesto en cuanto tengas una fecha aproximada, idealmente unas cuatro semanas antes, y con más margen en verano o a final de mes.',
      },
      {
        pregunta: '¿Qué va en la caja de primera necesidad?',
        respuesta:
          'Documentos, cargadores, medicamentos, una muda, artículos de aseo, papel higiénico, algo de menaje, herramientas básicas y sábanas para la primera noche.',
      },
      {
        pregunta: '¿Cuándo hay que descongelar el frigorífico?',
        respuesta: 'Uno o dos días antes, para que esté seco al transportarlo. Déjalo con la puerta entreabierta y limpia el agua.',
      },
      {
        pregunta: '¿Puedo dejar los muebles montados?',
        respuesta:
          'Los que pasen enteros por puertas, escaleras y ascensor, sí. Los armarios grandes y algunas camas suelen tener que desmontarse.',
      },
      {
        pregunta: "¿Por qué habitación empiezo a embalar?",
        respuesta: "Por la que menos uses: trastero, altillos, habitación de invitados o estanterías de libros. La cocina y el baño, al final.",
      },
      {
        pregunta: "¿Qué hago con las plantas?",
        respuesta: "Riégalas un par de días antes, no el mismo día, y transpórtalas en cajas abiertas. Las más delicadas, mejor en tu coche.",
      },
    ],
    relacionadas: ['mudanzas-pisos-madrid', 'precios', 'embalaje-mudanzas-madrid', 'guias/tramites-mudanza-madrid'],
    articulo: { publicado: PUBLICADO },
  },

  /* ---------------------------- METROS CÚBICOS ---------------------------- */
  {
    path: 'guias/como-calcular-m3-mudanza',
    tipo: 'guia',
    padre: 'guias',
    title: 'Cómo calcular los m³ de tu casa para la mudanza',
    description:
      'Aprende a calcular los metros cúbicos de tu mudanza: medidas de muebles, cajas y electrodomésticos, habitación por habitación, y errores habituales.',
    etiqueta: 'Cómo calcular los m³ de tu casa',
    resumen: 'El volumen es lo que más pesa en el precio: así se calcula.',
    h1: { antes: 'Cómo calcular los', resaltado: 'm³', despues: 'de tu casa' },
    kicker: 'VOLUMEN DE LA MUDANZA',
    intro:
      'El volumen, medido en metros cúbicos, es el dato que más influye en el precio de una mudanza: decide el vehículo, el número de viajes y las horas de trabajo. Te explicamos cómo estimarlo sin complicarte.',
    foto: 'embalaje-material',
    fotoAlt: 'Material de embalaje preparado para una mudanza',
    fotoContenido: 'cajas-apiladas',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza',
    fichas: [
      { etiqueta: 'Fórmula', valor: 'Largo × ancho × alto, en metros' },
      { etiqueta: 'Método', valor: 'Habitación por habitación' },
      { etiqueta: 'Margen', valor: 'Añade un 10-15 % por seguridad' },
      { etiqueta: 'Lectura', valor: 'Unos 7 minutos' },
    ],
    secciones: [
      {
        titulo: 'Qué es un metro cúbico en una mudanza',
        parrafos: [
          'Un metro cúbico es el volumen de un cubo de un metro de lado. En una mudanza no se mide el espacio de la casa, sino el que ocupan los objetos que se van a transportar una vez cargados en el camión. Un sofá de tres plazas, por ejemplo, puede ocupar alrededor de dos metros cúbicos, y una caja estándar de mudanza, una pequeña fracción de uno.',
          'Saber el volumen sirve para elegir el vehículo adecuado y para comparar presupuestos con la misma base. Si una empresa calcula 20 m³ y otra 35 m³ para la misma casa, una de las dos se ha equivocado, y es mejor saberlo antes que el día de la mudanza.',
        ],
      },
      {
        titulo: 'La fórmula básica',
        parrafos: [
          'Para cualquier objeto, el volumen se calcula multiplicando largo por ancho por alto, con las tres medidas en metros. Un armario de 1,80 m de ancho, 0,60 m de fondo y 2,00 m de alto ocupa 1,80 × 0,60 × 2,00 = 2,16 m³. Si se desmonta, sus piezas apiladas ocupan algo menos, pero conviene calcular con la medida montada para no quedarse corto.',
          'No hace falta medir todo con precisión. Basta con hacerlo con los muebles grandes y estimar el resto por número de cajas. Lo importante es no olvidar nada, y para eso funciona mejor ir habitación por habitación.',
        ],
      },
      {
        titulo: 'Paso a paso, habitación por habitación',
        parrafos: [
          'Coge papel o una hoja de cálculo y recorre la casa en orden: entrada, salón, cocina, cada dormitorio, baños, terraza, trastero y garaje. En cada estancia, anota los muebles y electrodomésticos con sus medidas y calcula cuántas cajas llenarás con el contenido de armarios y estanterías.',
        ],
        lista: [
          'Mide los muebles grandes: armarios, sofás, camas, mesas, aparadores y estanterías.',
          'Anota los electrodomésticos: frigorífico, lavadora, lavavajillas, secadora y televisores.',
          'Cuenta las cajas que llenarán libros, ropa, menaje y objetos pequeños.',
          'No olvides trastero, garaje, terraza y altillos.',
          'Suma todo y añade un margen de seguridad.',
        ],
        subsecciones: [
          {
            titulo: 'Las cajas',
            texto:
              'Una caja de mudanza estándar ocupa un volumen pequeño, pero en una vivienda se llenan decenas. Calcula su volumen con sus medidas reales y multiplícalo por el número de cajas previsto.',
          },
          {
            titulo: 'Los huecos',
            texto:
              'Las sillas, lámparas o plantas no se pueden apilar bien y ocupan más de lo que parece. Calcula su volumen como si fueran un bloque.',
          },
        ],
      },
      {
        titulo: 'Volúmenes orientativos por tipo de vivienda',
        parrafos: [
          'Como referencia general, un estudio suele moverse en un rango bajo, un piso de una o dos habitaciones en un rango medio y un piso de tres o más habitaciones o un chalet en rangos claramente mayores. En nuestra página de precios publicamos los rangos de metros cúbicos que usamos para cada tipo de vivienda.',
          'Estos rangos son solo una aproximación y sirven para comprobar que tu cálculo es razonable. Dos pisos con las mismas habitaciones pueden tener volúmenes muy distintos según lo amueblados que estén, y lo que más se desvía suele ser el contenido de trasteros, garajes y altillos.',
        ],
      },
      {
        titulo: 'Errores habituales al calcular el volumen',
        parrafos: [
          'El error más común es olvidarse del trastero y del garaje. Le sigue subestimar el número de cajas: los libros, la ropa de temporada y el menaje ocupan mucho más de lo que parece cuando están guardados. También es frecuente no contar los electrodomésticos o las cosas de la terraza.',
          'Otro error es calcular con los muebles que tienes pensado tirar. Si vas a deshacerte de algo, hazlo antes de pedir presupuesto o indícalo claramente para que no se cuente en el volumen.',
        ],
        lista: [
          'Olvidar el trastero, el garaje o la terraza.',
          'Quedarse corto con el número de cajas.',
          'No incluir los electrodomésticos.',
          'Contar muebles que no van a viajar.',
        ],
      },
      {
        titulo: 'Qué hacer con el resultado',
        parrafos: [
          'Con el volumen estimado puedes usar nuestra calculadora de mudanza, que aplica las tarifas de referencia al tamaño de tu vivienda, a las plantas y a los extras. Después, pide presupuesto indicando el volumen calculado y los muebles más grandes: nos ayuda a preparar una propuesta ajustada.',
          'Si tienes dudas, podemos revisar tu estimación con fotos o con una lista de muebles. Hablas directamente con quien hace tu mudanza, y es quien mejor sabe qué cabe en cada vehículo.',
        ],
      },
      {
        titulo: "Un ejemplo completo",
        parrafos: [
          "Supongamos un salón con un sofá de tres plazas, una mesa de comedor con seis sillas, un mueble de televisión y una estantería. Medimos cada mueble y multiplicamos sus tres medidas. Al sofá le asignamos su volumen como bloque; a la mesa, el volumen de su tablero con las patas; a las sillas, el de un bloque por silla, porque no se apilan bien. Sumamos el mueble de televisión y la estantería y añadimos las cajas que llenarán los libros y los objetos.",
          "Hacemos lo mismo en cada habitación y sumamos los resultados. Al total le añadimos un margen de seguridad de entre un 10 y un 15 %, porque siempre aparece algo que no se había contado. Ese número final es el que conviene comunicar al pedir presupuesto, junto con la lista de muebles grandes.",
          "Si no quieres medir, también puedes enviarnos fotos de cada estancia con los armarios abiertos. A partir de ellas podemos hacer una estimación, aunque siempre será menos precisa que una lista con medidas.",
        ],
      },
      {
        titulo: "Medidas de referencia de muebles habituales",
        parrafos: [
          "Las medidas cambian mucho de un modelo a otro, por lo que lo mejor es medir los tuyos. Aun así, ayuda saber qué piezas suelen ocupar más: los armarios de varias puertas, los sofás grandes y los rinconeras, las camas de matrimonio con canapé, los frigoríficos de dos puertas y las mesas de comedor extensibles. Son los primeros que conviene medir, porque son también los que deciden si hace falta un vehículo mayor.",
          "Los electrodomésticos pequeños, la vajilla, la ropa y los libros se calculan mejor por número de cajas que pieza a pieza. Una forma práctica es contar cuántas baldas o cajones tienes llenos y estimar cuántas cajas ocupará cada uno.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cómo se calculan los m³ de un mueble?',
        respuesta: 'Multiplicando largo por ancho por alto, en metros. Un mueble de 2 × 0,5 × 1 m ocupa 1 m³.',
      },
      {
        pregunta: '¿Hay que medir cada caja?',
        respuesta: 'No. Basta con saber el volumen de una caja estándar y multiplicarlo por el número de cajas previsto.',
      },
      {
        pregunta: '¿Por qué añadir un margen de seguridad?',
        respuesta:
          'Porque casi siempre aparecen cosas que no se habían contado. Un margen del 10-15 % evita quedarse corto con el vehículo.',
      },
      {
        pregunta: '¿Desmontar los muebles reduce el volumen?',
        respuesta: 'Algo, porque las piezas se apilan mejor, y además facilita el paso por puertas y escaleras.',
      },
      {
        pregunta: "¿Puedo calcular el volumen con fotos?",
        respuesta: "Sí, enviándonos fotos de cada estancia con los armarios abiertos podemos estimarlo, aunque una lista con medidas es más precisa.",
      },
      {
        pregunta: "¿Qué pasa si me equivoco en el cálculo?",
        respuesta: "Avísanos en cuanto lo detectes para revisar la propuesta. Un volumen mayor puede requerir otro vehículo o más tiempo, y es mejor saberlo antes.",
      },
      {
        pregunta: "¿El volumen incluye el trastero y el garaje?",
        respuesta: "Debe incluirlos. Son las zonas que más se olvidan y las que más desvían el cálculo final.",
      },
    ],
    relacionadas: ['mudanzas-pisos-madrid', 'precios', 'guias/cuanto-cuesta-una-mudanza-en-madrid', 'mudanzas-pequenas-madrid'],
    articulo: { publicado: PUBLICADO },
  },

  /* ---------------------------- TRÁMITES ---------------------------- */
  {
    path: 'guias/tramites-mudanza-madrid',
    tipo: 'guia',
    padre: 'guias',
    title: 'Trámites al mudarte en Madrid: padrón y suministros',
    description:
      'Trámites al mudarte en Madrid: empadronamiento, suministros, tarjeta sanitaria, DGT, Hacienda y Seguridad Social, con enlaces oficiales.',
    etiqueta: 'Trámites al mudarte en Madrid',
    resumen: 'Empadronamiento, suministros y cambios de domicilio, con fuentes oficiales.',
    h1: { antes: 'Trámites al', resaltado: 'mudarte en Madrid', despues: '' },
    kicker: 'TRÁMITES',
    intro:
      'Cambiar de casa implica también cambiar de domicilio ante varias administraciones y compañías. Te resumimos qué conviene gestionar y dónde se hace, con enlaces a las sedes oficiales para que consultes los requisitos vigentes.',
    foto: 'oficinas',
    fotoAlt: 'Oficina con mesas y documentos',
    fotoContenido: 'caja-mesa',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza',
    fichas: [
      { etiqueta: 'Primero', valor: 'Empadronamiento en el nuevo domicilio' },
      { etiqueta: 'Después', valor: 'Sanidad, DGT, Hacienda y Seguridad Social' },
      { etiqueta: 'Suministros', valor: 'Luz, gas, agua e internet' },
      { etiqueta: 'Fuentes', valor: 'Sedes electrónicas oficiales' },
    ],
    secciones: [
      {
        titulo: 'Antes de empezar: una advertencia',
        parrafos: [
          'Los trámites administrativos cambian con el tiempo: cambian los formularios, la documentación que se pide y la forma de solicitar cita. Por eso, en esta guía no indicamos plazos ni requisitos cerrados, sino qué trámites existen y dónde se gestionan. Antes de hacer cada uno, consulta la sede electrónica oficial que enlazamos al final de la página.',
          'Ten en cuenta también que cada municipio tiene su propio ayuntamiento. Si te mudas a Getafe, Alcalá de Henares o Las Rozas, el empadronamiento y los permisos se tramitan allí, no en el Ayuntamiento de Madrid.',
        ],
      },
      {
        titulo: 'Empadronamiento: el primer trámite',
        parrafos: [
          'El padrón municipal es el registro de los vecinos de cada municipio. Empadronarte en tu nuevo domicilio es importante porque muchos otros trámites dependen de él: el centro de salud que te corresponde, la escolarización de los hijos o algunas ayudas y servicios municipales.',
          'En la ciudad de Madrid, el alta y el cambio de domicilio en el padrón se gestionan a través del Ayuntamiento, que ofrece información y tramitación en su sede electrónica y atención presencial con cita previa. Lo habitual es que se pida un documento de identidad y otro que acredite el derecho a usar la vivienda, como la escritura o el contrato de alquiler, pero consulta en la sede la documentación exacta para tu caso.',
        ],
        subsecciones: [
          {
            titulo: 'Si te mudas dentro de Madrid',
            texto:
              'Se trata de un cambio de domicilio dentro del mismo municipio. Consulta en la sede del Ayuntamiento la forma de solicitarlo.',
          },
          {
            titulo: 'Si llegas de otro municipio',
            texto:
              'Al darte de alta en el nuevo padrón, el cambio se comunica al municipio anterior. Confirma en la sede cómo se hace en tu caso.',
          },
        ],
      },
      {
        titulo: 'Suministros: luz, gas, agua e internet',
        parrafos: [
          'Los suministros no dependen de la administración, sino de las compañías con las que tengas contrato. En la vivienda que dejas, decide si das de baja los contratos o si se hace un cambio de titular al nuevo inquilino o propietario. En la nueva, comprueba qué contratos hay activos y si te conviene mantenerlos a tu nombre o cambiar de comercializadora.',
          'Anota las lecturas de los contadores el día que dejas la vivienda y el día que entras en la nueva, y haz una foto de cada uno. Para la fibra o el ADSL, pide el traslado o el alta con margen, porque puede requerir una visita técnica. Si tienes dudas sobre tus derechos como consumidor de energía o telecomunicaciones, la Comisión Nacional de los Mercados y la Competencia publica información al respecto.',
        ],
        lista: [
          'Luz y gas: baja, cambio de titular o alta, con tu comercializadora.',
          'Agua: con la empresa que gestiona el suministro en tu municipio.',
          'Internet y teléfono: traslado o nueva alta con tu operador.',
          'Lecturas de contadores: anótalas y fotografíalas.',
        ],
      },
      {
        titulo: 'Tarjeta sanitaria y centro de salud',
        parrafos: [
          'En la Comunidad de Madrid, la asistencia sanitaria pública se organiza por centros de salud según el domicilio. Al mudarte, puede que te corresponda un centro distinto. La Comunidad de Madrid explica en su web cómo actualizar los datos de la tarjeta sanitaria y cómo cambiar de centro o de médico.',
          'Si llegas desde otra comunidad autónoma, el procedimiento es distinto al de un simple cambio de domicilio dentro de la región. Consulta la página oficial de la tarjeta sanitaria para conocer los pasos de tu caso.',
        ],
      },
      {
        titulo: 'Permiso de conducir y vehículos: DGT',
        parrafos: [
          'La Dirección General de Tráfico necesita conocer tu domicilio para enviarte notificaciones, y el del vehículo afecta, entre otras cosas, a dónde se paga el impuesto de circulación. La DGT permite comunicar el cambio de domicilio del conductor y de los vehículos a través de su sede electrónica.',
          'Si te mudas a Madrid capital con un vehículo, ten en cuenta además las normas de la zona de bajas emisiones y del estacionamiento regulado, que dependen del Ayuntamiento.',
        ],
      },
      {
        titulo: 'Hacienda y Seguridad Social',
        parrafos: [
          'La Agencia Tributaria utiliza tu domicilio fiscal para comunicaciones y notificaciones. Puedes consultarlo y modificarlo en su sede electrónica. Si trabajas por cuenta propia o tienes una empresa, revisa también si el cambio afecta a tu actividad.',
          'En la Seguridad Social, la sede electrónica permite comunicar la variación de datos del domicilio. Es útil para recibir correctamente las comunicaciones sobre prestaciones, vida laboral o asistencia sanitaria.',
        ],
      },
      {
        titulo: 'Otros cambios que se suelen olvidar',
        parrafos: [
          'Además de las administraciones, conviene avisar a tu banco, a las aseguradoras (el seguro de hogar, en particular, va ligado a la vivienda), a tu empresa, al colegio de los niños y a los servicios de suscripción. Si te preocupa que se pierda correspondencia en las primeras semanas, Correos ofrece servicios de reenvío de correo a la nueva dirección.',
          'Y si necesitas que el camión de la mudanza ocupe espacio en la calle, recuerda consultar con tu ayuntamiento el procedimiento para reservarlo. Nosotros te ayudamos a valorar si en tu caso compensa hacerlo.',
        ],
        lista: ['Banco y tarjetas.', 'Seguro de hogar y otros seguros.', 'Empresa y nóminas.', 'Colegio y actividades.', 'Suscripciones y compras por internet.'],
      },
      {
        titulo: "Si te mudas a un municipio de la Comunidad de Madrid",
        parrafos: [
          "Cada municipio gestiona su propio padrón, su estacionamiento y los permisos para ocupar la vía pública. Si te mudas de Madrid capital a Getafe, Alcobendas o Pozuelo, por ejemplo, el empadronamiento se tramita en el ayuntamiento de destino, que tiene su propia sede electrónica y sus propias oficinas de atención. Busca en su web el apartado de padrón y el de ocupación de la vía pública.",
          "Lo mismo ocurre con el impuesto de vehículos y con las zonas de aparcamiento regulado, que cambian de un municipio a otro. Si tienes coche, revisa si en tu nueva calle hay zona regulada y cómo se obtiene la autorización de residente, si existe.",
          "En cuanto a la sanidad, al cambiar de municipio dentro de la Comunidad de Madrid te puede corresponder otro centro de salud. Consulta en la web de la Comunidad cómo actualizar tus datos y elegir centro o médico.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Qué trámite debo hacer primero al mudarme?',
        respuesta:
          'El empadronamiento en el nuevo domicilio, porque otros trámites, como el cambio de centro de salud, dependen de él. Consulta la documentación en la sede de tu ayuntamiento.',
      },
      {
        pregunta: '¿Dónde me empadrono si me mudo a otro municipio de la Comunidad?',
        respuesta: 'En el ayuntamiento del municipio al que te mudas. Cada uno tiene su sede electrónica y su procedimiento.',
      },
      {
        pregunta: '¿Tengo que dar de baja la luz al irme?',
        respuesta:
          'Depende de si dejas de pagar la vivienda o si otra persona asume el contrato. Puedes dar de baja el suministro o hacer un cambio de titular con la comercializadora.',
      },
      {
        pregunta: '¿Hay que comunicar el cambio de domicilio a Tráfico?',
        respuesta:
          'Es lo recomendable, para el permiso de conducir y para los vehículos. La DGT lo permite a través de su sede electrónica.',
      },
      {
        pregunta: "¿El permiso para el camión lo pido en mi municipio?",
        respuesta: "Sí, la ocupación de la vía pública depende del ayuntamiento donde se hace la carga o la descarga. Si son dos municipios distintos, consúltalo en ambos.",
      },
      {
        pregunta: "¿Hay que cambiar la dirección en el banco?",
        respuesta: "Es recomendable, para recibir correctamente la correspondencia y las comunicaciones. Suele poder hacerse desde la banca en línea.",
      },
    ],
    fuentes: [
      { texto: 'Ayuntamiento de Madrid: sede electrónica (padrón y trámites municipales)', url: 'https://sede.madrid.es/' },
      { texto: 'Ayuntamiento de Madrid: portal municipal', url: 'https://www.madrid.es/' },
      { texto: 'Comunidad de Madrid: tarjeta sanitaria', url: 'https://www.comunidad.madrid/servicios/salud/tarjeta-sanitaria' },
      { texto: 'Dirección General de Tráfico: sede electrónica', url: 'https://sede.dgt.gob.es/' },
      { texto: 'Agencia Tributaria: sede electrónica', url: 'https://sede.agenciatributaria.gob.es/' },
      { texto: 'Seguridad Social: sede electrónica', url: 'https://sede.seg-social.gob.es/' },
      { texto: 'Comisión Nacional de los Mercados y la Competencia (CNMC)', url: 'https://www.cnmc.es/' },
      { texto: 'Correos', url: 'https://www.correos.es/' },
    ],
    relacionadas: ['mudanzas-madrid', 'precios', 'guias/checklist-mudanza-4-semanas', 'mudanzas-pisos-madrid'],
    articulo: { publicado: PUBLICADO },
  },
];
