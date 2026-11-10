import { TELEFONO_VISIBLE } from '../datos/contacto';
import { PRECIO_M3, RUTAS_PRECIO, TARIFAS, TIPOS_VIVIENDA, rangoNacional } from '../datos/precios';
import { COMO_PEDIR_TEXTO, GrupoFaq, PaginaSeo } from './pagina-seo';
import { RUTAS_NACIONALES, RUTAS_SERVICIOS, RUTAS_ZONAS } from './rutas';

/* Cifras de la página de precios: salen todas de datos/precios.ts. */
const V = TIPOS_VIVIENDA;
const T = TARIFAS;
const VAL = RUTAS_PRECIO.find((r) => r.destino === 'Valencia')!.precios;
const NAC = rangoNacional('piso-1-2');
const eur = (n: number) => n.toLocaleString('es-ES');
/** Ejemplo 1: piso de 1-2 hab. + 3 plantas a pie + 2 muebles (montaje a su precio de partida). */
const ej1 = {
  min: V[1].precio.min + 3 * T.plantaSinAscensor.min + 2 * T.montajeMueble.min,
  max: V[1].precio.max + 3 * T.plantaSinAscensor.max + 2 * T.montajeMueble.min,
};

const GRUPOS_FAQ: GrupoFaq[] = [
  {
    titulo: 'Precios',
    faqs: [
      { pregunta: '¿Cuánto cuesta una mudanza?', respuesta: 'Depende del volumen, los accesos, el recorrido y los servicios que necesites. En nuestra página de precios encontrarás los factores que más influyen.' },
      { pregunta: '¿El presupuesto tiene algún coste?', respuesta: 'No. Pedir presupuesto es gratis y no supone ningún compromiso. Podrás decidir con calma cuando recibas la propuesta.' },
      { pregunta: '¿Por qué necesitáis tantos datos para darme un precio?', respuesta: 'Porque la planta, el ascensor, los muebles grandes y el acceso del camión cambian mucho el trabajo. Con datos reales, la propuesta se ajusta mejor y se evitan sorpresas el día de la mudanza.' },
      { pregunta: '¿Sale más barato según el día?', respuesta: 'Los finales de mes, el verano y los fines de semana tienen más demanda. Si tienes flexibilidad con la fecha, indícalo en el formulario y lo tendremos en cuenta.' },
    ],
  },
  {
    titulo: 'Qué incluye',
    faqs: [
      { pregunta: '¿Qué incluye el precio cerrado?', respuesta: 'El personal, el vehículo, la carga, el transporte, la descarga y los servicios que pidas, como el embalaje o el montaje. Te lo damos por escrito antes de la mudanza.' },
      { pregunta: '¿Tengo que embalarlo todo yo?', respuesta: 'No. Puedes hacerlo por tu cuenta, encargarnos solo lo más delicado o pedirnos que nos ocupemos de todo. Indícalo en los detalles de tu solicitud.' },
      { pregunta: '¿Desmontáis y montáis los muebles?', respuesta: 'Sí, podemos desmontar los muebles que lo requieran y volver a montarlos en destino. Indica en la solicitud cuáles son para calcular el tiempo necesario.' },
      { pregunta: '¿Podéis guardar mis muebles durante un tiempo?', respuesta: 'Sí, podemos valorar un guardamuebles temporal si tus fechas no coinciden o estás de obras. Indica una previsión de tiempo y lo incluimos en la propuesta.' },
      { pregunta: '¿Puedo solicitar solo el transporte de un mueble?', respuesta: 'Sí. Selecciona «Porte / transporte» y explícanos qué necesitas trasladar, dónde hay que recogerlo y dónde entregarlo.' },
    ],
  },
  {
    titulo: 'Mudanzas nacionales',
    faqs: [
      { pregunta: '¿Hacéis mudanzas a cualquier punto de España?', respuesta: 'Estamos en Madrid y podemos desplazarnos a cualquier punto de España. La disponibilidad y las condiciones dependerán del servicio y del recorrido.' },
      { pregunta: '¿Cuánto tarda una mudanza a otra ciudad?', respuesta: 'Depende de la distancia, del volumen y de cómo se organice el transporte. En nuestras páginas de rutas encontrarás tiempos orientativos, y el plazo concreto se indica en tu propuesta.' },
      { pregunta: '¿Tengo que estar presente en la entrega?', respuesta: 'Lo recomendable es que haya alguien para abrir, indicar dónde va cada cosa y revisar la entrega. Si no vas a poder estar, cuéntanoslo y buscamos una forma de coordinarlo.' },
      { pregunta: '¿Qué no conviene llevar en el camión?', respuesta: 'Documentación, dinero, joyas y medicamentos es mejor que viajen contigo. Tampoco deben cargarse productos inflamables, bombonas ni alimentos perecederos.' },
    ],
  },
  {
    titulo: 'Zonas y presupuesto',
    faqs: [
      { pregunta: '¿En qué zonas trabajáis?', respuesta: 'Trabajamos en Madrid capital y en los municipios de la Comunidad, y podemos desplazarnos a cualquier punto de España. Si tu zona no aparece, elige «Otra localidad» en el formulario.' },
      { pregunta: '¿Cómo puedo solicitar un presupuesto?', respuesta: 'Rellena nuestro formulario paso a paso, escríbenos por WhatsApp o llámanos al ' + TELEFONO_VISIBLE + '. Revisaremos la información y hablaremos contigo sobre tu mudanza.' },
      { pregunta: '¿Enviar la solicitud me compromete a contratar?', respuesta: 'No. La solicitud sirve para conocer tu necesidad y preparar una propuesta. No supone ningún compromiso, y podrás decidir con calma cuando la recibas.' },
      { pregunta: '¿Quién se encarga del permiso para aparcar el camión?', respuesta: 'Depende de la calle y del municipio. Revisamos contigo las direcciones para saber si hace falta una autorización y acordar cómo gestionarla antes del día de la mudanza.' },
      { pregunta: '¿Cuándo recibiré respuesta?', respuesta: 'Revisaremos tu solicitud y contactaremos contigo utilizando el medio que hayas indicado.' },
    ],
  },
];

export const PAGINAS_HUB: PaginaSeo[] = [
  /* ---------------------------- SERVICIOS ---------------------------- */
  {
    path: 'servicios',
    tipo: 'hub',
    padre: '',
    title: 'Servicios de mudanzas y portes en Madrid | Mudanzas360',
    description:
      'Mudanzas de viviendas y oficinas, portes, embalaje, montaje de muebles y guardamuebles en Madrid y toda España. Elige lo que necesitas y pide presupuesto.',
    etiqueta: 'Servicios',
    resumen: 'Todo lo que podemos hacer por ti, por separado o combinado.',
    h1: { antes: 'Servicios de', resaltado: 'mudanzas', despues: 'en Madrid' },
    kicker: 'QUÉ PODEMOS HACER POR TI',
    intro:
      'Desde trasladar una vivienda completa hasta llevar ese mueble que no cabe en el coche. Elige solo lo que necesitas y combínalo como prefieras: una única propuesta para toda tu mudanza.',
    foto: 'salon-cajas',
    fotoAlt: 'Salón con cajas de cartón apiladas y plantas, preparado para una mudanza',
    fotoContenido: 'cajas-apiladas',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza',
    fichas: [
      { etiqueta: 'Servicios', valor: 'Mudanzas, portes, embalaje y más' },
      { etiqueta: 'Clientes', valor: 'Particulares y empresas' },
      { etiqueta: 'Zona', valor: 'Madrid y toda España' },
      { etiqueta: 'Presupuesto', valor: 'Gratis y sin compromiso' },
    ],
    secciones: [
      {
        titulo: 'Qué servicio necesitas según tu situación',
        parrafos: [
          'No siempre es evidente por dónde empezar. Una forma sencilla de decidirlo es partir de lo que tienes que mover y de cuánta ayuda quieres. Si tienes que vaciar una casa entera, lo tuyo es una mudanza; si solo son unas pocas piezas, un porte suele ser suficiente y más económico.',
          'A partir de ahí, puedes añadir lo que no quieras hacer por tu cuenta. Hay quien prefiere embalar sus cosas y dejarnos los muebles, y quien nos pide que nos encarguemos de casi todo. Cada servicio tiene su página con más detalles, para que puedas decidir con información.',
        ],
        lista: [
          'Te cambias de piso o de casa: mudanza de vivienda.',
          'Trasladas tu empresa o tu negocio: mudanza de oficina.',
          'Solo tienes uno o varios muebles: porte.',
          'Te vas a otra ciudad: mudanza nacional.',
          'No coinciden las fechas o estás de obras: guardamuebles.',
          'Necesitas proteger objetos delicados: embalaje.',
          'Hay muebles que deben desmontarse: montaje y desmontaje.',
        ],
      },
      {
        titulo: 'Combina los servicios en una sola propuesta',
        parrafos: [
          'Lo más habitual es que una mudanza no sea una sola cosa. Una familia que se traslada a otra ciudad mientras termina la reforma de su nueva casa puede necesitar embalaje, desmontaje, transporte, unos meses de guardamuebles y el montaje final. Organizarlo todo con un mismo equipo evita tener que coordinar a varios proveedores.',
          'En el formulario de presupuesto puedes elegir el servicio principal y añadir en los detalles todo lo demás. Con esa información prepararemos una propuesta que refleje lo que has pedido, y podrás ajustarla antes de decidir. Enviar la solicitud no te compromete a contratar nada.',
        ],
      },
      {
        titulo: 'Dónde trabajamos',
        parrafos: [
          'Nuestra base está en Madrid, y desde aquí atendemos tanto la capital como los municipios de la Comunidad. También hacemos mudanzas a cualquier punto de España, y las condiciones de cada servicio dependen del recorrido. Si quieres saber qué tener en cuenta en tu municipio o en tu ruta, encontrarás guías en nuestras páginas de zonas y de rutas nacionales.',
          'Las rutas más solicitadas son las que unen Madrid con Barcelona, Valencia, Sevilla, Málaga y Alicante. En cada una te contamos las distancias y los tiempos orientativos, los factores que influyen en el precio y los problemas de acceso más habituales al llegar.',
        ],
      },
      {
        titulo: 'Por qué pedir presupuesto con antelación',
        parrafos: [
          'El presupuesto es gratuito y no supone ningún compromiso, y cuanto antes lo solicites, más fácil será conseguir la fecha que prefieres. Los finales de mes, el verano y septiembre son las temporadas de mayor actividad. Además, algunos trámites, como las reservas de espacio en la calle, requieren cierto plazo.',
          'No hace falta tenerlo todo decidido. Rellena lo que sepas: si todavía no conoces la fecha exacta o el tamaño, indícalo y lo vamos concretando. Una descripción sincera de lo que hay que mover es lo que más nos ayuda a darte una propuesta ajustada y a evitar sorpresas.',
        ],
      },
    ],
    grupos: [
      { titulo: 'Nuestros servicios', rutas: RUTAS_SERVICIOS },
      { titulo: 'Rutas nacionales desde Madrid', rutas: RUTAS_NACIONALES },
    ],
    faqs: [
      {
        pregunta: '¿Puedo contratar solo una parte de los servicios?',
        respuesta:
          'Sí. Cada servicio se puede contratar por separado o combinado con otros. Indica en la solicitud qué necesitas y qué prefieres hacer por tu cuenta.',
      },
      {
        pregunta: '¿Qué diferencia hay entre un porte y una mudanza?',
        respuesta:
          'Un porte es un transporte de pocas piezas, como un sofá o unos electrodomésticos. Una mudanza implica vaciar una vivienda u oficina, con más volumen y organización.',
      },
      {
        pregunta: '¿Trabajáis con particulares y con empresas?',
        respuesta:
          'Sí. Atendemos mudanzas de particulares y traslados de oficinas, locales y negocios. Selecciona en el formulario la opción que corresponda a tu caso.',
      },
      { pregunta: '¿Cómo pido presupuesto?', respuesta: COMO_PEDIR_TEXTO },
    ],
    relacionadas: ['precios', 'zonas', 'como-trabajamos', 'preguntas-frecuentes'],
  },

  /* ---------------------------- PRECIOS ---------------------------- */
  // Todas las cifras salen de datos/precios.ts: si cambias una tarifa allí, cambia aquí.
  {
    path: 'precios',
    tipo: 'hub',
    padre: '',
    title: `Precios de mudanzas en Madrid 2026: desde ${V[0].precio.min} €`,
    description: `Precios de mudanzas en Madrid en 2026: de ${V[0].precio.min} € un estudio a ${eur(V[4].precio.max)} € un chalet, con IVA. Extras, rutas y ejemplos. Pide tu precio cerrado gratis.`,
    etiqueta: 'Precios',
    resumen: 'Tablas de precios 2026 por vivienda, extras y rutas, con ejemplos de cálculo.',
    h1: { antes: 'Precios de', resaltado: 'mudanzas', despues: 'en Madrid 2026' },
    kicker: 'PRECIOS 2026 CON IVA',
    intro: `Una mudanza dentro de Madrid cuesta entre ${V[0].precio.min} € para un estudio y ${eur(V[4].precio.max)} € para un chalet. Aquí tienes todas nuestras tarifas de 2026, qué hace subir o bajar el precio y tres ejemplos calculados paso a paso. Cuando conocemos tu caso, te damos un precio cerrado por escrito.`,
    foto: 'cajas-apiladas',
    fotoAlt: 'Cajas de cartón apiladas sobre palés, listas para calcular el volumen de una mudanza',
    fotoContenido: 'embalaje-material',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza',
    fichas: [
      { etiqueta: 'Estudio en Madrid', valor: `${V[0].precio.min}-${V[0].precio.max} €` },
      { etiqueta: 'Piso de 1-2 habitaciones', valor: `${V[1].precio.min}-${V[1].precio.max} €` },
      { etiqueta: 'Por metro cúbico', valor: `${PRECIO_M3.min}-${PRECIO_M3.max} €/m³` },
      { etiqueta: 'Precios', valor: 'Con IVA · precio cerrado por escrito' },
    ],
    secciones: [
      {
        titulo: 'Cómo leer estas tablas',
        parrafos: [
          `Las tablas de arriba son nuestras tarifas de referencia para 2026, con IVA incluido. La primera es la más útil para empezar: el precio de una mudanza dentro de Madrid según el tamaño de la vivienda, con el volumen orientativo de cada una. Un estudio suele ocupar ${V[0].m3.min}-${V[0].m3.max} m³ y un piso de tres habitaciones, ${V[2].m3.min}-${V[2].m3.max} m³. Si ya sabes cuántos metros cúbicos tienes, el precio por metro cúbico, ${PRECIO_M3.min}-${PRECIO_M3.max} €/m³, te da una cifra más ajustada.`,
          'Los precios por vivienda suponen accesos normales: ascensor en el que caben las cajas y el camión cerca del portal. Si tu caso se sale de lo habitual, el precio se ajusta con los servicios extra de la segunda tabla. Así puedes calcular tu mudanza sumando piezas, igual que hacemos nosotros al preparar el presupuesto.',
          'La tabla de rutas nacionales indica la distancia por carretera y el precio por tamaño para los destinos que más nos piden desde Madrid. El tiempo de conducción de un camión es mayor que el de un turismo, y en trayectos largos hay que sumar los descansos obligatorios del conductor.',
        ],
      },
      {
        titulo: 'Qué sube y qué baja el precio',
        parrafos: [
          'Casi todo lo que influye en el precio se reduce a dos preguntas: cuánto hay que mover y cuánto cuesta moverlo. Estos son los factores que más pesan en una mudanza en Madrid, cada uno con su cifra.',
        ],
        subsecciones: [
          {
            titulo: 'El volumen',
            texto: `Es lo que más pesa. Cada metro cúbico cuesta ${PRECIO_M3.min}-${PRECIO_M3.max} € en una mudanza local, así que deshacerte de 5 m³ que no vas a usar puede ahorrarte entre ${5 * PRECIO_M3.min} y ${5 * PRECIO_M3.max} €.`,
          },
          {
            titulo: 'La distancia',
            texto: `Dentro de Madrid apenas cambia el precio: el tiempo se va en cargar y descargar. Fuera de Madrid, sí. Un piso de 1-2 habitaciones cuesta ${V[1].precio.min}-${V[1].precio.max} € dentro de Madrid y ${eur(VAL['piso-1-2'].min)}-${eur(VAL['piso-1-2'].max)} € si va a Valencia.`,
          },
          {
            titulo: 'Las plantas sin ascensor',
            texto: `Cada planta que hay que subir o bajar a pie suma ${T.plantaSinAscensor.min}-${T.plantaSinAscensor.max} €. Un cuarto sin ascensor añade entre ${4 * T.plantaSinAscensor.min} y ${4 * T.plantaSinAscensor.max} € frente a un bajo.`,
          },
          {
            titulo: 'Los accesos y el aparcamiento',
            texto: `Si el camión no puede parar cerca del portal, cada viaje con cajas se alarga. Cuando los muebles no caben por la escalera, un elevador exterior cuesta ${T.elevador.min}-${T.elevador.max} € por servicio y necesita permiso municipal. Reservar espacio en la calle, que también se pide al ayuntamiento, suele evitar horas de más.`,
          },
          {
            titulo: 'La fecha',
            texto: `Los finales de mes y el verano son las épocas con más demanda, y es más difícil conseguir la fecha que quieres. Si la mudanza es urgente, en 24-48 horas, se aplica un recargo del ${T.urgentePct.min}-${T.urgentePct.max} %.`,
          },
          {
            titulo: 'El embalaje',
            texto: `El embalaje completo, con materiales y mano de obra, cuesta ${T.embalaje.min}-${T.embalaje.max} € según el volumen. Si prefieres embalar tú, cada caja de cartón reforzada cuesta ${T.caja.min}-${T.caja.max} €.`,
          },
          {
            titulo: 'Los objetos especiales',
            texto: `Algunas piezas tienen su propio precio: un piano vertical cuesta ${T.pianoVertical.min}-${T.pianoVertical.max} € y uno de cola, ${T.pianoCola.min}-${T.pianoCola.max} €. Desmontar y montar un mueble cuesta desde ${T.montajeMueble.min} € por mueble.`,
          },
        ],
      },
      {
        titulo: 'Tres ejemplos de cálculo paso a paso',
        parrafos: [
          'Para que veas cómo se combinan las tablas, aquí tienes tres mudanzas habituales calculadas con nuestras tarifas. Son orientativas: el precio cerrado depende del volumen real, de los accesos y de la fecha.',
        ],
        subsecciones: [
          {
            titulo: 'Piso de 2 habitaciones de Chamberí a Getafe, 3.º sin ascensor en origen',
            texto: `Base de un piso de 1-2 habitaciones dentro de Madrid: ${V[1].precio.min}-${V[1].precio.max} €. Más 3 plantas a pie × ${T.plantaSinAscensor.min}-${T.plantaSinAscensor.max} € = ${3 * T.plantaSinAscensor.min}-${3 * T.plantaSinAscensor.max} €. Más el desmontaje y montaje de 2 armarios, desde ${2 * T.montajeMueble.min} €. Total orientativo: desde ${ej1.min} €, y unos ${ej1.max} € en la parte alta del rango.`,
          },
          {
            titulo: 'Estudio en Tetuán con todo embalado por nosotros',
            texto: `Base de un estudio dentro de Madrid: ${V[0].precio.min}-${V[0].precio.max} €. Más el embalaje completo, que para un estudio suele quedarse en la parte baja de ${T.embalaje.min}-${T.embalaje.max} €. Total orientativo: entre ${V[0].precio.min + T.embalaje.min} y ${V[0].precio.max + T.embalaje.max} €, sin preocuparte de cajas ni de material.`,
          },
          {
            titulo: 'Piso de 3 habitaciones de Madrid a Valencia, 2.º sin ascensor en destino',
            texto: `Base de la ruta Madrid-Valencia para 3 o más habitaciones: ${eur(VAL['piso-3-mas'].min)}-${eur(VAL['piso-3-mas'].max)} €. Más 2 plantas a pie × ${T.plantaSinAscensor.min}-${T.plantaSinAscensor.max} € = ${2 * T.plantaSinAscensor.min}-${2 * T.plantaSinAscensor.max} €. Total orientativo: entre ${eur(VAL['piso-3-mas'].min + 2 * T.plantaSinAscensor.min)} y ${eur(VAL['piso-3-mas'].max + 2 * T.plantaSinAscensor.max)} €. Si las fechas de salida y entrada no coinciden, el guardamuebles cuesta ${T.guardamueblesMes.min}-${T.guardamueblesMes.max} € al mes.`,
          },
        ],
      },
      {
        titulo: 'Cómo ahorrar en tu mudanza',
        parrafos: [
          'Estos seis consejos son los que más dinero ahorran a nuestros clientes. Ninguno requiere renunciar a que la mudanza salga bien.',
        ],
        lista: [
          `Haz limpieza antes de pedir precio: cada metro cúbico que no viaja son ${PRECIO_M3.min}-${PRECIO_M3.max} € menos.`,
          `Embala tú lo que no es frágil, como ropa, libros y juguetes: evitas parte de los ${T.embalaje.min}-${T.embalaje.max} € del embalaje completo y solo pagas las cajas, a ${T.caja.min}-${T.caja.max} € cada una.`,
          `Desmonta tú las camas y las estanterías sencillas: el montaje cuesta desde ${T.montajeMueble.min} € por mueble.`,
          `Si solo mueves unos pocos muebles, pide un porte en lugar de una mudanza: desde ${T.portes.min} € con conductor y un operario, hasta 2 horas.`,
          `Reserva con tiempo: una mudanza urgente lleva un recargo del ${T.urgentePct.min}-${T.urgentePct.max} %, y a fin de mes y en verano hay menos fechas libres.`,
          'Pide el permiso para que el camión pueda parar junto al portal: cada viaje a pie desde lejos suma tiempo de trabajo.',
        ],
      },
      {
        titulo: 'Precios de otros servicios',
        parrafos: [
          `No todas las mudanzas son un piso completo. Si solo tienes que mover un sofá, una cama o unas cajas, un porte cuesta desde ${T.portes.min} €, con furgoneta, conductor y un operario durante un máximo de 2 horas. Para trabajos más largos, la furgoneta con conductor cuesta ${T.furgonetaHora.min}-${T.furgonetaHora.max} € la hora, y cada operario extra, ${T.operarioHora.min}-${T.operarioHora.max} € la hora. Es la opción más habitual para estudiantes, compras grandes o mudanzas de una habitación.`,
          `Las mudanzas de oficina se calculan por puesto de trabajo: ${T.oficinaPuesto.min}-${T.oficinaPuesto.max} € por puesto, según el mobiliario, los archivos y los equipos que haya que mover. Una oficina de 10 puestos se mueve, de forma orientativa, entre ${eur(10 * T.oficinaPuesto.min)} y ${eur(10 * T.oficinaPuesto.max)} €. Podemos trabajar fuera del horario laboral para que no pierdas días de actividad.`,
          `El guardamuebles cuesta ${T.guardamueblesMes.min}-${T.guardamueblesMes.max} € al mes según el espacio que ocupen tus cosas, y el vaciado de un piso, ${T.vaciado.min}-${eur(T.vaciado.max)} € según el volumen. Es habitual combinar los dos cuando se vacía una vivienda por una herencia o una reforma.`,
        ],
      },
      {
        titulo: 'Precios de mudanzas nacionales desde Madrid',
        parrafos: [
          `Para un piso de 1-2 habitaciones, una mudanza desde Madrid a las ciudades que más nos piden cuesta entre ${eur(NAC.min)} y ${eur(NAC.max)} €. Valencia, a ${RUTAS_PRECIO.find((r) => r.destino === 'Valencia')!.km} km, es la más económica de la tabla, y Málaga, la más cara. Un estudio cuesta aproximadamente entre el 55 y el 65 % de esos precios, y un piso de 3 habitaciones o más, entre el 140 y el 180 %.`,
          'En una mudanza nacional entran en juego el combustible, los peajes, las horas de conducción y los descansos obligatorios del conductor. Por eso el precio depende más de la distancia que en una mudanza dentro de Madrid, donde casi todo el tiempo se va en cargar y descargar. Si tu destino no aparece en la tabla, pídenos el precio indicando la ciudad: lo calculamos con los mismos criterios.',
        ],
      },
      {
        titulo: 'Cuándo sale más barato mudarse',
        parrafos: [
          'Los días entre semana a mitad de mes son los más tranquilos, y es más fácil conseguir la fecha y la hora que prefieres. Los finales de mes, cuando terminan y empiezan los contratos de alquiler, y los meses de verano concentran la mayoría de las mudanzas.',
          `Si tu fecha es flexible, dínoslo al pedir presupuesto: podemos proponerte un día con menos demanda. Y si necesitas mudarte en 24-48 horas, también es posible, con un recargo del ${T.urgentePct.min}-${T.urgentePct.max} % sobre el precio normal.`,
        ],
      },
      {
        titulo: 'Por qué publicamos precios orientativos',
        parrafos: [
          'Muchas empresas de mudanzas no publican ningún precio y te piden que rellenes un formulario para saber si te lo puedes permitir. Nosotros preferimos que tengas una referencia antes de escribirnos: si sabes que tu piso de dos habitaciones se mueve dentro de Madrid por una cifra concreta, puedes decidir con calma y comparar con criterio.',
          'Los precios son orientativos porque ninguna tabla ve tu casa. Dos pisos con las mismas habitaciones pueden tener volúmenes muy distintos, y un mismo volumen cuesta más en un quinto sin ascensor de una calle estrecha que en un edificio con garaje. Por eso, cuando conocemos tu caso, el rango se convierte en un precio cerrado por escrito, que es el que pagas.',
          'Para que ese paso sea rápido, nuestro formulario te pide solo lo que cambia el precio: el tipo de servicio, el tamaño, el origen y el destino con sus plantas, la fecha y los extras. Con eso, y si hace falta alguna foto por WhatsApp, te enviamos tu precio cerrado.',
        ],
      },
      {
        titulo: 'Qué incluye nuestro precio',
        parrafos: [
          'Antes de la mudanza te damos un precio cerrado y por escrito. En él aparece lo que incluye: el personal, el vehículo, la carga, el transporte, la descarga y los servicios que hayas pedido, como el embalaje, el montaje o el guardamuebles. Lo que no hayas pedido no aparece, y si lo necesitas se suma antes, nunca el mismo día.',
          'Si cambia algo durante la preparación, porque aparece más volumen o cambia la planta de destino, te avisamos y lo apruebas antes de la mudanza. Durante todo el proceso tienes un solo interlocutor, por WhatsApp o por teléfono, que coordina a los transportistas y operarios que hacen tu mudanza.',
        ],
      },
      {
        titulo: 'Cómo comparar precios de mudanzas',
        parrafos: [
          'Comparar presupuestos es sensato, siempre que compares lo mismo. Antes de quedarte con el más barato, comprueba si incluye las plantas sin ascensor, el desmontaje y el montaje, el material de embalaje y, en las mudanzas nacionales, los peajes. Pregunta también qué ocurre si el volumen real es mayor que el previsto.',
          'Desconfía de un precio que se da sin preguntar nada. Un presupuesto serio necesita saber al menos el tamaño de la vivienda, las dos direcciones, las plantas y la fecha. Nuestro formulario te pide esos datos en cinco pasos y, con ellos, te enviamos el precio cerrado por WhatsApp.',
        ],
      },
      {
        titulo: 'Cómo obtener tu precio cerrado',
        parrafos: [
          'Si quieres una primera estimación, prueba la calculadora de mudanza: eliges el tamaño, el destino, las plantas y los extras, y ves el rango con estas mismas tarifas. Desde la calculadora puedes pedir tu precio cerrado con esos datos ya puestos.',
          'También puedes pedirlo directamente con el formulario: son cinco pasos cortos y te respondemos por WhatsApp. Pedir presupuesto es gratis y no te obliga a contratar.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta una mudanza en Madrid en 2026?',
        respuesta: `Entre ${V[0].precio.min} € para un estudio y ${eur(V[4].precio.max)} € para un chalet, dentro de Madrid. Un piso de 1-2 habitaciones cuesta ${V[1].precio.min}-${V[1].precio.max} € y uno de 3 habitaciones, ${V[2].precio.min}-${eur(V[2].precio.max)} €.`,
      },
      {
        pregunta: '¿Los precios incluyen IVA?',
        respuesta: 'Sí. Todos los precios orientativos de esta página son para Madrid en 2026 e incluyen el IVA.',
      },
      {
        pregunta: '¿Cuánto cuesta el metro cúbico en una mudanza?',
        respuesta: `En una mudanza dentro de Madrid, entre ${PRECIO_M3.min} y ${PRECIO_M3.max} € por metro cúbico. Un piso de 1-2 habitaciones suele ocupar ${V[1].m3.min}-${V[1].m3.max} m³.`,
      },
      {
        pregunta: '¿Cuánto cuesta una mudanza de Madrid a otra ciudad?',
        respuesta: `Para un piso de 1-2 habitaciones, entre ${eur(NAC.min)} y ${eur(NAC.max)} € según el destino. En la tabla de rutas tienes Barcelona, Valencia, Sevilla, Málaga y Alicante.`,
      },
      {
        pregunta: '¿Cuánto más cuesta si no hay ascensor?',
        respuesta: `Entre ${T.plantaSinAscensor.min} y ${T.plantaSinAscensor.max} € por cada planta que haya que subir o bajar a pie, en origen o en destino.`,
      },
      {
        pregunta: '¿El precio puede cambiar el día de la mudanza?',
        respuesta:
          'No sin tu aprobación. Te damos un precio cerrado por escrito antes de la mudanza. Si cambia algo, te avisamos y lo apruebas antes.',
      },
      {
        pregunta: '¿Cuánto cuesta un porte en Madrid?',
        respuesta: `Desde ${T.portes.min} €, con furgoneta, conductor y un operario, hasta 2 horas. Si necesitas más tiempo, la furgoneta con conductor cuesta ${T.furgonetaHora.min}-${T.furgonetaHora.max} €/h y cada operario extra, ${T.operarioHora.min}-${T.operarioHora.max} €/h.`,
      },
      {
        pregunta: '¿Pedir presupuesto tiene algún coste?',
        respuesta: 'No. Es gratis y no te obliga a contratar. Te respondemos por WhatsApp con tu precio cerrado.',
      },
    ],
    relacionadas: ['guias/cuanto-cuesta-una-mudanza-en-madrid', 'guias/como-calcular-m3-mudanza', 'mudanzas-pisos-madrid', 'mudanzas-nacionales'],
  },

  /* ---------------------------- ZONAS ---------------------------- */
  {
    path: 'zonas',
    tipo: 'hub',
    padre: '',
    title: 'Zonas de trabajo: Madrid y toda España | Mudanzas360',
    description:
      'Mudanzas en Madrid capital, Alcalá de Henares, Getafe, Móstoles, Alcobendas, Las Rozas y el resto de la Comunidad, y rutas nacionales a toda España.',
    etiqueta: 'Zonas',
    resumen: 'Municipios de Madrid y rutas nacionales, con lo que hay que saber en cada caso.',
    h1: { antes: 'Zonas donde hacemos', resaltado: 'mudanzas', despues: '' },
    kicker: 'MADRID Y TODA ESPAÑA',
    intro:
      'Estamos en Madrid, y trabajamos tanto en la capital y sus municipios como en cualquier punto de España. Consulta aquí qué tener en cuenta en cada zona antes de tu mudanza.',
    foto: 'madrid',
    fotoAlt: 'Camión de mudanzas descargando cajas en una zona residencial al atardecer',
    fotoContenido: 'furgoneta-calle',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza',
    fichas: [
      { etiqueta: 'Base', valor: 'Madrid' },
      { etiqueta: 'Comunidad', valor: 'Capital y municipios' },
      { etiqueta: 'Nacional', valor: 'Cualquier punto de España' },
      { etiqueta: 'Presupuesto', valor: 'Gratis y sin compromiso' },
    ],
    secciones: [
      {
        titulo: 'Por qué importa la zona en una mudanza',
        parrafos: [
          'Dos pisos idénticos pueden requerir trabajos muy distintos por el simple hecho de estar en lugares diferentes. Una calle peatonal, un edificio sin ascensor o una urbanización con vigilancia cambian la forma de organizar la carga, el vehículo más adecuado y el tiempo que hay que reservar.',
          'Por eso hemos preparado páginas sobre los municipios y rutas que más nos consultan, con información sobre sus accesos, el aparcamiento y el tipo de vivienda habitual. No sustituyen a una revisión de tu dirección, pero sí te ayudan a anticipar lo que conviene prever.',
        ],
      },
      {
        titulo: 'Madrid capital y Comunidad de Madrid',
        parrafos: [
          'Atendemos la capital y los municipios de la Comunidad. La zona norte, con Alcobendas y San Sebastián de los Reyes, combina viviendas y grandes oficinas junto a la A-1. El oeste, con Las Rozas, Majadahonda o Pozuelo, tiene muchos chalets y urbanizaciones. El sur, con Getafe, Móstoles, Alcorcón, Leganés o Fuenlabrada, reúne barrios muy poblados y bloques de varias alturas, y el corredor del Henares, con Alcalá, Torrejón y Coslada, está muy ligado a la A-2.',
          'Si tu municipio no aparece todavía entre nuestras guías, no significa que no podamos ir. Elige «Otra localidad» en el formulario, escribe el nombre y estudiaremos tu caso sin compromiso. Lo mismo ocurre con los pueblos más alejados de la sierra o del sur de la región, donde conviene mirar el acceso con algo más de calma.',
        ],
      },
      {
        titulo: 'Rutas nacionales desde Madrid',
        parrafos: [
          'Madrid es un punto de partida excelente para una mudanza nacional, ya que las principales autovías del país salen de la capital. Eso permite llegar a todas las provincias con trayectos bien conectados. Tenemos guías sobre las rutas más frecuentes: Barcelona, Valencia, Sevilla, Málaga y Alicante.',
          'En cada una encontrarás la distancia aproximada, los tiempos orientativos, los factores que influyen en el precio y los problemas de acceso más habituales al llegar a la ciudad. Si tu destino es otro, cuéntanoslo en el formulario y buscaremos la manera de organizarlo.',
        ],
      },
      {
        titulo: 'Qué nos ayuda a valorar tu zona',
        parrafos: [
          'Para decirte algo útil, necesitamos conocer las dos direcciones. Con ellas podemos revisar la anchura de la calle, las posibles restricciones de acceso y las rutas posibles. También nos sirve que nos cuentes lo que ya sepas de tu edificio, como si tiene garaje, muelle o conserjería.',
        ],
        lista: [
          'Calle y número de las direcciones de recogida y entrega.',
          'Planta y disponibilidad de ascensor en cada una.',
          'Normas de la comunidad o de la urbanización, si las conoces.',
          'Si el vehículo puede parar en la puerta o hay que caminar un tramo.',
          'Cualquier limitación de horarios o de fechas.',
        ],
      },
    ],
    grupos: [
      { titulo: 'Municipios y distritos de Madrid', rutas: ['mudanzas-madrid', ...RUTAS_ZONAS] },
      { titulo: 'Rutas nacionales desde Madrid', rutas: RUTAS_NACIONALES },
    ],
    faqs: [
      {
        pregunta: '¿En qué zonas trabajáis?',
        respuesta:
          'Estamos en Madrid y trabajamos en la capital y en los municipios de la Comunidad. También podemos desplazarnos a cualquier punto de España, según el servicio y el recorrido.',
      },
      {
        pregunta: '¿Podéis venir a mi municipio si no aparece en la lista?',
        respuesta:
          'Probablemente sí. Elige «Otra localidad» en el formulario, escribe el nombre de tu municipio y estudiaremos el servicio sin ningún compromiso.',
      },
      {
        pregunta: '¿Hacéis mudanzas que empiezan fuera de Madrid?',
        respuesta:
          'Madrid es nuestro punto de salida principal, aunque podemos valorar otros recorridos. Indica las direcciones de recogida y de entrega en tu solicitud para que lo revisemos.',
      },
      {
        pregunta: '¿La zona influye en el precio de la mudanza?',
        respuesta:
          'Sí, sobre todo por los accesos y las distancias. Una calle con difícil aparcamiento puede alargar el trabajo, igual que un trayecto más largo. Lo tenemos en cuenta en tu propuesta.',
      },
    ],
    relacionadas: ['servicios', 'mudanzas-nacionales', 'precios', 'como-trabajamos'],
  },

  /* ---------------------------- CÓMO TRABAJAMOS ---------------------------- */
  {
    path: 'como-trabajamos',
    tipo: 'hub',
    padre: '',
    title: 'Cómo trabajamos: tu mudanza paso a paso | Mudanzas360',
    description:
      'Así organizamos tu mudanza en Mudanzas360: de la solicitud y la revisión a la propuesta y el día del traslado. Pide tu presupuesto gratis y sin compromiso.',
    etiqueta: 'Cómo trabajamos',
    resumen: 'De la solicitud al día de la mudanza: qué ocurre en cada momento.',
    h1: { antes: 'Así funciona tu', resaltado: 'mudanza', despues: 'con Mudanzas360' },
    kicker: 'ASÍ DE FÁCIL',
    intro:
      'Una mudanza genera muchas dudas, y gran parte del estrés viene de no saber qué ocurrirá después. Por eso te explicamos qué pasa desde que nos escribes hasta que todo está en su sitio.',
    foto: 'furgoneta-calle',
    fotoAlt: 'Camión pequeño de mudanzas en una calle arbolada',
    fotoContenido: 'salon-cajas',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza',
    fichas: [
      { etiqueta: 'Solicitud', valor: 'En menos de un minuto' },
      { etiqueta: 'Presupuesto', valor: 'Por teléfono o WhatsApp' },
      { etiqueta: 'Día y hora', valor: 'Coordinados contigo' },
      { etiqueta: 'Al terminar', valor: 'Todo revisado' },
    ],
    pasos: [
      { titulo: 'Solicitud', texto: 'Rellenas el formulario de cinco pasos o nos escribes por WhatsApp. Nos cuentas el servicio, el recorrido, el tamaño de la vivienda y la fecha.', icono: 'solicitud', foto: 'caja-mesa' },
      { titulo: 'Presupuesto', texto: 'Revisamos tu caso y te damos una propuesta personalizada por teléfono o WhatsApp, en la que te explicamos qué incluye.', icono: 'presupuesto', foto: 'cajas-apiladas' },
      { titulo: 'Fecha', texto: 'Si la propuesta te encaja, coordinamos contigo el día y la franja horaria, y revisamos los accesos y los permisos que puedan hacer falta.', icono: 'fecha', foto: 'furgoneta-blanca' },
      { titulo: 'Embalaje y carga', texto: 'Protegemos lo acordado, desmontamos los muebles que lo requieran y cargamos todo en el orden adecuado para la descarga.', icono: 'embalaje', foto: 'embalaje-material' },
      { titulo: 'Transporte', texto: 'Trasladamos tus pertenencias hasta el destino, con la carga protegida y ordenada para que la descarga sea rápida.', icono: 'transporte', foto: 'camion-autovia' },
      { titulo: 'Descarga y montaje', texto: 'Dejamos cada cosa en su sitio según tus indicaciones, montamos los muebles acordados y revisamos contigo que todo esté correcto.', icono: 'montaje', foto: 'muebles' },
    ],
    secciones: [
      {
        titulo: 'Antes de nada: nos cuentas tu mudanza',
        parrafos: [
          'Todo empieza con un formulario de cinco pasos que puedes abrir desde cualquier página. Primero nos dices qué servicio necesitas; luego, el recorrido; después, el tipo de vivienda, las plantas, el ascensor y la fecha; a continuación, cualquier detalle importante, y por último, tus datos para que podamos contactarte.',
          'No tienes que ser un experto ni tener resuelto cada detalle. Si te falta un dato, cuéntanos lo que sepas y lo concretamos más tarde. Enviar la solicitud no te compromete, y tus datos solo se utilizan para gestionar el presupuesto.',
        ],
      },
      {
        titulo: 'Revisamos tu caso y preparamos la propuesta',
        parrafos: [
          'Con la información recibida revisamos el volumen, el recorrido y los accesos. Es el momento de detectar lo que puede complicar el día de la mudanza, como un armario que no pasa por la escalera o una calle en la que el camión no puede detenerse. Si hace falta algún dato más, te contactamos para aclararlo.',
          'Después recibirás una propuesta adaptada a lo que has pedido, en la que te explicamos qué incluye, para que sepas qué esperar y puedas comparar con tranquilidad. Si cambia algo por tu parte, se puede ajustar antes de que decidas.',
        ],
      },
      {
        titulo: 'Lo que puedes ir haciendo en las semanas previas',
        parrafos: [
          'Una vez fijada la fecha, una organización sencilla marca la diferencia. Estas tareas te ayudan a llegar tranquilo al día de la mudanza y a que el trabajo fluya desde el primer momento:',
        ],
        lista: [
          'Revisa lo que no vas a llevarte y deshazte de ello con tiempo.',
          'Si embalas por tu cuenta, empieza por lo que menos usas y etiqueta cada caja.',
          'Comunica la fecha a las dos comunidades de vecinos y pregunta por sus normas.',
          'Comprueba si necesitas un permiso para reservar espacio en la calle.',
          'Gestiona el cambio de suministros y el de tu dirección en los servicios que uses.',
          'Prepara una bolsa con lo imprescindible para las primeras horas.',
        ],
      },
      {
        titulo: 'El día de la mudanza y la entrega',
        parrafos: [
          'Te avisaremos de cualquier cambio de horario. Al llegar, repasamos contigo lo acordado y empezamos por lo que corresponda: protección, desmontaje y carga, en el orden que permita que todo salga bien ordenado. Conviene que estés presente o haya alguien que pueda responder a las dudas durante el trabajo.',
          'En la vivienda de destino, cada cosa se deja en su sitio siguiendo tus indicaciones, y los muebles que hayas contratado se vuelven a montar. Antes de terminar, repasa con nosotros la entrega y dinos si hay algo que comentar: es mejor resolver las dudas en ese momento, con todo a la vista.',
          'Un consejo final: antes de que empiece la descarga, decide dónde irán los muebles grandes de cada habitación. Mover un armario una vez montado cuesta mucho más que colocarlo bien a la primera.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto tiempo se tarda en rellenar el formulario?',
        respuesta:
          'Son cinco pasos rápidos. Solo tienes que tener a mano las dos direcciones, las plantas, el tamaño aproximado de la vivienda y la fecha que te interesa.',
      },
      {
        pregunta: '¿Cuándo recibiré respuesta?',
        respuesta:
          'Revisaremos tu solicitud y contactaremos contigo utilizando el medio que hayas indicado para resolver lo que falte y prepararte una propuesta.',
      },
      {
        pregunta: '¿Puedo cambiar la fecha después de confirmar la mudanza?',
        respuesta:
          'Avísanos en cuanto lo sepas y revisaremos la disponibilidad. Cuanta más antelación tengamos, más fácil será encontrar otra fecha que te venga bien.',
      },
    ],
    relacionadas: ['servicios', 'preguntas-frecuentes', 'precios', 'mudanzas-pisos-madrid'],
  },

  /* ---------------------------- PREGUNTAS FRECUENTES ---------------------------- */
  {
    path: 'preguntas-frecuentes',
    tipo: 'hub',
    padre: '',
    title: 'Preguntas frecuentes sobre mudanzas | Mudanzas360',
    description:
      'Resolvemos tus dudas sobre mudanzas: presupuesto, precios, embalaje, fechas, permisos y guardamuebles. Si no encuentras la tuya, pregúntanos.',
    etiqueta: 'Preguntas frecuentes',
    resumen: 'Respuestas a las dudas más habituales antes de una mudanza.',
    h1: { antes: 'Preguntas', resaltado: 'frecuentes', despues: 'sobre mudanzas' },
    kicker: '¿TIENES DUDAS?',
    intro:
      'Hemos reunido las dudas que surgen más a menudo antes de una mudanza. Si la tuya no aparece aquí, escríbela en el último paso del formulario y te responderemos.',
    foto: 'caja-mesa',
    fotoAlt: 'Persona preparando una caja de cartón sobre una mesa',
    fotoContenido: 'cajas-apiladas',
    mensaje: 'Hola, quiero pedir presupuesto para una mudanza',
    fichas: [
      { etiqueta: 'Temas', valor: 'Precios, servicios, rutas y zonas' },
      { etiqueta: 'Si falta tu duda', valor: 'Pregúntanos por WhatsApp' },
      { etiqueta: 'Teléfono', valor: TELEFONO_VISIBLE },
      { etiqueta: 'Presupuesto', valor: 'Gratis y sin compromiso' },
    ],
    secciones: [
      {
        titulo: 'Antes de pedir presupuesto',
        parrafos: [
          'Lo más útil es tener claro qué vas a llevarte. Date un paseo por tu casa con una libreta, incluyendo el trastero y el garaje, y anota los muebles grandes y cualquier objeto que merezca un cuidado especial. Con eso, las dos direcciones y las plantas de cada vivienda, ya tienes lo necesario para enviar la solicitud.',
          'Si estás comparando empresas, pide a todas el mismo servicio: las diferencias de precio muchas veces se explican porque una incluye desmontaje y embalaje y otra no. Y si tus fechas pueden moverse un poco, indícalo; puede darte más opciones.',
        ],
      },
      {
        titulo: 'Cuánta antelación necesito',
        parrafos: [
          'No hay un plazo mínimo universal, pero cuanto antes, mejor. Para una mudanza local habitual suele ser suficiente con un par de semanas, si no coincide con un final de mes o la temporada alta. En una mudanza nacional, de oficina o en verano, conviene empezar antes para tener margen con los permisos y los accesos.',
          'Si te corre prisa, escríbenos de todos modos e indica la fecha. Revisaremos si hay disponibilidad y te lo diremos sin compromiso. Lo importante es que seamos realistas con el tiempo necesario para hacerlo bien.',
        ],
      },
      {
        titulo: 'Qué no conviene meter en el camión',
        parrafos: [
          'Hay cosas que deben viajar contigo o buscar otra solución. No solo se trata de seguridad: algunos objetos son insustituibles y no merece la pena exponerlos a un traslado sin necesidad. Ten esta lista en cuenta cuando prepares las cajas:',
        ],
        lista: [
          'Documentación, dinero, joyas y otros objetos de valor.',
          'Medicamentos y lo que necesites a diario durante esos días.',
          'Productos inflamables, gases o bombonas y productos químicos peligrosos.',
          'Alimentos perecederos y plantas en trayectos largos.',
          'Dispositivos y discos duros con datos importantes, mejor contigo.',
        ],
      },
      {
        titulo: 'Si tienes más dudas',
        parrafos: [
          'Cada mudanza tiene sus particularidades, y es normal que te surjan preguntas que no aparecen aquí. Para saber más sobre un aspecto concreto, puedes visitar nuestras páginas de servicios, de precios y de cómo trabajamos, o las guías sobre tu municipio o tu ruta nacional, donde detallamos lo que conviene prever en cada caso.',
          'Y si prefieres resolverlo directamente, abre el formulario y utiliza el apartado de detalles para explicarnos tu situación, por poco común que te parezca. Revisaremos lo que nos cuentes y te responderemos para aclarar tus dudas. Solicitar información no te compromete a contratar.',
        ],
      },
    ],
    faqs: GRUPOS_FAQ.flatMap((g) => g.faqs),
    gruposFaq: GRUPOS_FAQ,
    relacionadas: ['servicios', 'precios', 'como-trabajamos', 'zonas'],
  },
];
