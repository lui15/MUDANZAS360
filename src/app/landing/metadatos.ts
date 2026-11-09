/**
 * Título y descripción de cada página, con el precio sacado de datos/precios.ts para que nunca
 * quede desfasado. Título: servicio + Madrid + gancho, menos de 60 caracteres. Descripción:
 * 140-155 caracteres con precio y llamada a la acción. El generador del sitemap lo comprueba.
 */
import { MUDANZA_DESDE, PRECIO_PAGINA, RUTAS_PRECIO, TARIFAS, TIPOS_VIVIENDA } from '../datos/precios';

const T = TARIFAS;
const V = TIPOS_VIVIENDA;
const D = MUDANZA_DESDE;
const eur = (n: number) => n.toLocaleString('es-ES');
const desde = (path: string) => PRECIO_PAGINA[path].min;
const urgenteDesde = Math.round((D * (100 + T.urgentePct.min)) / 1000) * 10;
/** Llamadas a la acción, de la más larga a la más corta: se usa la que deja la descripción en 140-155. */
const LLAMADAS = [
  'Un solo interlocutor de principio a fin. Pide tu presupuesto gratis.',
  'Un solo interlocutor. Pide tu presupuesto gratis por WhatsApp.',
  'Te respondemos por WhatsApp. Pide tu presupuesto gratis.',
  'Pide tu presupuesto gratis por WhatsApp.',
  'Pide tu presupuesto gratis.',
  'Pide presupuesto gratis.',
  'Pide presupuesto.',
];
function conLlamada(base: string): string {
  return LLAMADAS.map((l) => `${base} ${l}`).find((d) => d.length <= 155) ?? base;
}

/** Con la marca si cabe en 60 caracteres; si no, sin ella. */
const conMarca = (titulo: string) => (`${titulo} | Mudanzas360`.length <= 60 ? `${titulo} | Mudanzas360` : titulo);

const ruta = (destino: string) => RUTAS_PRECIO.find((r) => r.destino === destino)!;

const metaRuta = (destino: string) => {
  const r = ruta(destino);
  return {
    title: conMarca(`Mudanzas Madrid ${destino} desde ${eur(r.precios.estudio.min)} €`),
    description: conLlamada(
      `Mudanza de Madrid a ${destino} (${r.km} km): estudio desde ${eur(r.precios.estudio.min)} € y piso de 1-2 habitaciones ${eur(r.precios['piso-1-2'].min)}-${eur(r.precios['piso-1-2'].max)} €, con IVA.`,
    ),
  };
};

const metaZona = (lugar: string, gancho: string) => ({
  title: conMarca(`Mudanzas en ${lugar} desde ${D} €`),
  description: conLlamada(`Mudanzas en ${lugar} desde ${D} €, con precio cerrado por escrito. ${gancho}`),
});

export const METADATOS: Record<string, { title: string; description: string }> = {
  /* ------------------------------ Índices ------------------------------ */
  servicios: {
    title: `Servicios de mudanzas en Madrid desde ${T.portes.min} € | Mudanzas360`,
    description: `Mudanzas de pisos y oficinas, portes desde ${T.portes.min} €, embalaje, montaje, guardamuebles y mudanzas nacionales en Madrid. Pide tu precio cerrado gratis.`,
  },
  zonas: {
    title: `Mudanzas en Madrid y alrededores desde ${D} € | Mudanzas360`,
    description: `Mudanzas en Madrid capital, sus distritos y los municipios de la Comunidad desde ${D} €, y rutas a toda España. Consulta tu zona y pide presupuesto gratis.`,
  },
  'como-trabajamos': {
    title: 'Cómo trabajamos: precio cerrado por escrito | Mudanzas360',
    description: `Así es una mudanza con Mudanzas360: pides presupuesto, te damos un precio cerrado por escrito (desde ${D} €) y un solo interlocutor lo coordina todo.`,
  },
  'preguntas-frecuentes': {
    title: 'Preguntas frecuentes sobre mudanzas | Mudanzas360',
    description: `Dudas sobre precios (desde ${D} € con IVA), presupuesto cerrado, embalaje, fechas, permisos y guardamuebles en Madrid. Si no está tu pregunta, escríbenos.`,
  },
  guias: {
    title: 'Guías para preparar tu mudanza en Madrid | Mudanzas360',
    description: `Guías para tu mudanza en Madrid: cuánto cuesta (desde ${D} €), checklist de 4 semanas, cómo calcular los m³ y trámites. Después, pide tu precio cerrado.`,
  },

  /* ------------------------------ Servicios ------------------------------ */
  'mudanzas-madrid': {
    title: `Empresa de mudanzas en Madrid desde ${D} € | Mudanzas360`,
    description: conLlamada(`Mudanzas en Madrid desde ${D} € (estudio) hasta ${eur(V[4].precio.max)} € (chalet), IVA incluido y con precio cerrado por escrito.`),
  },
  'mudanzas-pisos-madrid': {
    title: `Mudanzas de pisos en Madrid desde ${D} € | Mudanzas360`,
    description: conLlamada(`Mudanza de pisos en Madrid: estudio ${V[0].precio.min}-${V[0].precio.max} €, 1-2 habitaciones ${V[1].precio.min}-${V[1].precio.max} € y 3 habitaciones desde ${V[2].precio.min} €.`),
  },
  'mudanzas-oficinas-madrid': {
    title: `Mudanzas de oficinas en Madrid: ${T.oficinaPuesto.min}-${T.oficinaPuesto.max} €/puesto`,
    description: conLlamada(`Traslado de oficinas y locales en Madrid por ${T.oficinaPuesto.min}-${T.oficinaPuesto.max} € por puesto, también fuera del horario laboral, con precio cerrado por escrito.`),
  },
  'portes-madrid': {
    title: `Portes en Madrid desde ${T.portes.min} € | Mudanzas360`,
    description: `Portes en Madrid desde ${T.portes.min} €: furgoneta con conductor y un operario hasta 2 horas para un sofá, una cama o unas cajas. Pide precio por WhatsApp.`,
  },
  'guardamuebles-madrid': {
    title: `Guardamuebles en Madrid desde ${T.guardamueblesMes.min} €/mes | Mudanzas360`,
    description: `Guardamuebles en Madrid por ${T.guardamueblesMes.min}-${T.guardamueblesMes.max} € al mes según el espacio, con recogida y entrega si lo necesitas. Ideal en reformas o entre pisos. Pide presupuesto.`,
  },
  'embalaje-mudanzas-madrid': {
    title: `Embalaje para mudanzas en Madrid desde ${T.embalaje.min} €`,
    description: `Embalaje completo para tu mudanza en Madrid por ${T.embalaje.min}-${T.embalaje.max} € con materiales, o cajas reforzadas a ${T.caja.min}-${T.caja.max} €. Lo frágil, bien protegido. Pide presupuesto.`,
  },
  'montaje-desmontaje-muebles-mudanza': {
    title: `Montaje y desmontaje de muebles desde ${T.montajeMueble.min} €`,
    description: `Desmontaje y montaje de muebles en tu mudanza en Madrid desde ${T.montajeMueble.min} € por mueble: armarios, camas y estanterías listos en tu nueva casa. Pide presupuesto.`,
  },
  'mudanzas-nacionales': {
    title: `Mudanzas nacionales desde Madrid desde ${eur(desde('mudanzas-nacionales'))} €`,
    description: conLlamada(`Mudanzas de Madrid a toda España: piso de 1-2 habitaciones entre ${eur(PRECIO_PAGINA['mudanzas-nacionales'].min)} y ${eur(PRECIO_PAGINA['mudanzas-nacionales'].max!)} € según destino, con precio cerrado por escrito.`),
  },
  'mudanzas-baratas-madrid': {
    title: `Mudanzas baratas en Madrid desde ${D} € | Mudanzas360`,
    description: `Mudanzas baratas en Madrid desde ${D} € con IVA: te ayudamos a ajustar el precio sin perder cuidado y te lo damos cerrado por escrito. Pide presupuesto.`,
  },
  'mudanzas-pequenas-madrid': {
    title: `Mudanzas pequeñas en Madrid desde ${T.portes.min} € | Mudanzas360`,
    description: conLlamada(`Mudanzas pequeñas en Madrid: portes desde ${T.portes.min} € y estudios completos por ${V[0].precio.min}-${V[0].precio.max} €. El vehículo justo para lo que mueves.`),
  },
  'mudanzas-urgentes-madrid': {
    title: `Mudanzas urgentes en Madrid en 24-48 h | Mudanzas360`,
    description: conLlamada(`Mudanzas urgentes en Madrid en 24-48 horas, desde ${urgenteDesde} € (recargo del ${T.urgentePct.min}-${T.urgentePct.max} %), con precio cerrado por escrito.`),
  },
  'mudanzas-estudiantes-madrid': {
    title: `Mudanzas de estudiantes en Madrid desde ${T.portes.min} €`,
    description: `Mudanzas de estudiantes en Madrid: portes desde ${T.portes.min} € para una habitación y estudios por ${V[0].precio.min}-${V[0].precio.max} €. Precio cerrado y sin sorpresas. Pide presupuesto.`,
  },
  'furgoneta-con-conductor-madrid': {
    title: `Furgoneta con conductor en Madrid: ${T.furgonetaHora.min}-${T.furgonetaHora.max} €/h`,
    description: conLlamada(`Furgoneta con conductor en Madrid por ${T.furgonetaHora.min}-${T.furgonetaHora.max} € la hora, y operario extra a ${T.operarioHora.min}-${T.operarioHora.max} €/h, para compras grandes y traslados.`),
  },
  'mudanza-pianos-madrid': {
    title: `Mudanza de pianos en Madrid desde ${T.pianoVertical.min} € | Mudanzas360`,
    description: conLlamada(`Traslado de pianos en Madrid: vertical ${T.pianoVertical.min}-${T.pianoVertical.max} € y de cola ${T.pianoCola.min}-${T.pianoCola.max} €, con protección a medida y precio cerrado.`),
  },
  'vaciado-pisos-madrid': {
    title: `Vaciado de pisos en Madrid desde ${T.vaciado.min} € | Mudanzas360`,
    description: `Vaciado de pisos en Madrid por ${T.vaciado.min}-${eur(T.vaciado.max)} € según volumen: herencias, ventas o fin de alquiler. Lo que guardas, lo trasladamos. Pide presupuesto.`,
  },

  /* ------------------------------ Rutas ------------------------------ */
  'mudanzas-madrid-barcelona': metaRuta('Barcelona'),
  'mudanzas-madrid-valencia': metaRuta('Valencia'),
  'mudanzas-madrid-sevilla': metaRuta('Sevilla'),
  'mudanzas-madrid-malaga': metaRuta('Málaga'),
  'mudanzas-madrid-alicante': metaRuta('Alicante'),

  /* ------------------------------ Zonas ------------------------------ */
  'mudanzas-alcala-de-henares': metaZona('Alcalá de Henares', 'Casco histórico, Espartales y El Ensanche.'),
  'mudanzas-getafe': metaZona('Getafe', 'Centro, Sector III, El Bercial y Los Molinos.'),
  'mudanzas-mostoles': metaZona('Móstoles', 'Centro, Parque Coimbra, Estoril y Móstoles Sur.'),
  'mudanzas-alcobendas': metaZona('Alcobendas', 'Centro, Valdelasfuentes y La Moraleja.'),
  'mudanzas-las-rozas': metaZona('Las Rozas', 'Chalets, adosados y pisos en El Burgo.'),
  'mudanzas-leganes': metaZona('Leganés', 'Zarzaquemada, San Nicasio y Arroyo Culebro.'),
  'mudanzas-fuenlabrada': metaZona('Fuenlabrada', 'Loranca, El Naranjo y el centro.'),
  'mudanzas-alcorcon': metaZona('Alcorcón', 'Parque Lisboa, Ensanche Sur y el centro.'),
  'mudanzas-torrejon-de-ardoz': metaZona('Torrejón de Ardoz', 'Soto del Henares, Fresnos y el centro.'),
  'mudanzas-parla': metaZona('Parla', 'Centro y Parla Este, pisos y adosados.'),
  'mudanzas-pozuelo-de-alarcon': metaZona('Pozuelo de Alarcón', 'Chalets y pisos amplios.'),
  'mudanzas-majadahonda': metaZona('Majadahonda', 'Casco, Gran Vía y urbanizaciones.'),
  'mudanzas-rivas-vaciamadrid': metaZona('Rivas-Vaciamadrid', 'Urbanizaciones y Covibar.'),
  'mudanzas-san-sebastian-de-los-reyes': metaZona('Sanse', 'Centro, Dehesa Vieja y Tempranales.'),
  'mudanzas-boadilla-del-monte': metaZona('Boadilla del Monte', 'Chalets y pisos nuevos.'),
  'mudanzas-chamberi': metaZona('Chamberí', 'Fincas antiguas y ascensores pequeños.'),
  'mudanzas-salamanca': metaZona('el barrio de Salamanca', 'Pisos señoriales y muebles delicados.'),
  'mudanzas-retiro': metaZona('Retiro', 'Ibiza, Pacífico, Estrella y Jerónimos.'),
  'mudanzas-carabanchel': metaZona('Carabanchel', 'Bloques sin ascensor y el PAU.'),
  'mudanzas-vallecas': metaZona('Vallecas', 'Puente, Villa y el Ensanche de Vallecas.'),
  'mudanzas-tetuan': metaZona('Tetuán', 'Bravo Murillo, Cuatro Caminos y Castillejos.'),
};
