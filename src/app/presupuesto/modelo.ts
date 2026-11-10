/**
 * Modelo del formulario de presupuesto: opciones de cada paso, precio orientativo (solo para la
 * Central y Analytics, nunca se muestra al cliente) y textos de resumen. No depende de Angular, así que lo pueden usar otras páginas (calculadora).
 */
import { Servicio } from '../datos/catalogo-servicios';
import {
  Rango,
  RUTAS_PRECIO,
  TARIFAS,
  TIPOS_VIVIENDA,
  TipoViviendaId,
  medio,
  rangoNacional,
  rutaPorDestino,
  tamanoRuta,
  textoRango,
  vivienda,
} from '../datos/precios';
import { ETIQUETAS, RUTAS_ZONAS } from '../landing/rutas';

/** Acceso de la calculadora (ella sigue usando estos valores). */
export type Ascensor = 'ascensor' | 'sin-ascensor' | 'bajo' | '';
/** Ascensor en el formulario. «no-aplica» en casas y en planta baja. */
export type AscensorForm = 'no' | 'pequeno' | 'grande' | 'no-aplica' | '';
/** Qué hay en cada dirección. */
export type TipoLugar = 'piso' | 'casa' | 'local' | 'trastero' | '';
export type Cuando = 'pronto' | 'semana' | 'mes' | 'fecha' | '';
export type ExtraForm = 'embalaje' | 'montaje' | 'guardamuebles';

export interface EstadoPresupuesto {
  servicio: Servicio | '';
  tamano: string;
  origen: string;
  destino: string;
  tipoOrigen: TipoLugar;
  tipoDestino: TipoLugar;
  ascensorOrigen: AscensorForm;
  plantaOrigen: string;
  ascensorDestino: AscensorForm;
  plantaDestino: string;
  cuando: Cuando;
  fecha: string;
  extras: ExtraForm[];
  nombre: string;
  /** Solo las cifras nacionales, sin el prefijo +34. */
  telefono: string;
  email: string;
  notas: string;
  privacidad: boolean;
}

/**
 * Lo que otra página puede dejar relleno al abrir el formulario. La calculadora todavía envía
 * su propio formato de ascensor; `adaptarPrevios` lo traduce al del formulario.
 */
export type DatosPrevios = Partial<Omit<EstadoPresupuesto, 'privacidad' | 'ascensorOrigen' | 'ascensorDestino'>> & {
  ascensorOrigen?: AscensorForm | Ascensor;
  ascensorDestino?: AscensorForm | Ascensor;
};

export const estadoVacio = (): EstadoPresupuesto => ({
  servicio: '',
  tamano: '',
  origen: '',
  destino: '',
  tipoOrigen: '',
  tipoDestino: '',
  ascensorOrigen: '',
  plantaOrigen: '',
  ascensorDestino: '',
  plantaDestino: '',
  cuando: '',
  fecha: '',
  extras: [],
  nombre: '',
  telefono: '',
  email: '',
  notas: '',
  privacidad: false,
});

/* ----------------------------- Paso 2: tamaño ----------------------------- */

export interface OpcionTamano {
  id: string;
  nombre: string;
}

const TAMANOS_VIVIENDA: OpcionTamano[] = TIPOS_VIVIENDA.map((t) => ({ id: t.id, nombre: t.corto }));
const NO_LO_SE: OpcionTamano = { id: 'no-lo-se', nombre: 'No lo sé' };

const TAMANOS_PORTES: OpcionTamano[] = [
  { id: 'muebles-1-3', nombre: '1-3 muebles' },
  { id: 'muebles-4-10', nombre: '4-10 muebles' },
  { id: 'furgoneta-llena', nombre: 'Furgoneta llena' },
];

/** Puestos de oficina: [mínimo, máximo] de cada opción (null: sin máximo). */
const PUESTOS: Record<string, [number, number | null]> = {
  'puestos-1-5': [1, 5],
  'puestos-6-15': [6, 15],
  'puestos-16-30': [16, 30],
  'puestos-31': [31, null],
};

const TAMANOS_OFICINA: OpcionTamano[] = [
  { id: 'puestos-1-5', nombre: 'Hasta 5 puestos' },
  { id: 'puestos-6-15', nombre: '6-15 puestos' },
  { id: 'puestos-16-30', nombre: '16-30 puestos' },
  { id: 'puestos-31', nombre: 'Más de 30 puestos' },
];

export function opcionesTamano(servicio: Servicio | ''): OpcionTamano[] {
  switch (servicio) {
    case 'Portes o pocos muebles':
      return TAMANOS_PORTES;
    case 'Mudanza de oficina':
      return TAMANOS_OFICINA;
    default:
      return [...TAMANOS_VIVIENDA, NO_LO_SE];
  }
}

export const nombreTamano = (servicio: Servicio | '', id: string): string =>
  opcionesTamano(servicio).find((o) => o.id === id)?.nombre ?? '';

const esVivienda = (id: string): id is TipoViviendaId => TIPOS_VIVIENDA.some((t) => t.id === id);

/* ----------------------------- Precio en vivo ----------------------------- */

export interface PrecioOrientativo {
  /** Frase para el cliente: «Una mudanza así suele costar entre 400 y 750 €». */
  frase: string;
  /** Texto corto para el resumen y para la Central: «400-750 €». */
  texto: string;
  /** Rango en euros, si lo hay. */
  rango: Rango | null;
  /** Valor de la conversión: el punto medio del rango o el precio de partida. */
  valor: number | null;
}

const entre = (r: Rango, unidad = '€') =>
  `entre ${r.min.toLocaleString('es-ES')} y ${r.max.toLocaleString('es-ES')} ${unidad}`;

const a50 = (n: number) => Math.round(n / 50) * 50;

export function precioOrientativo(e: Pick<EstadoPresupuesto, 'servicio' | 'tamano' | 'destino'>): PrecioOrientativo | null {
  const { servicio, tamano } = e;
  if (!servicio || !tamano || tamano === NO_LO_SE.id) return null;

  if (servicio === 'Portes o pocos muebles') {
    if (tamano === 'muebles-1-3') {
      return {
        frase: `Un porte así suele costar desde ${TARIFAS.portes.min} € (furgoneta con conductor y 1 operario, hasta 2 horas).`,
        texto: `desde ${TARIFAS.portes.min} €`,
        rango: null,
        valor: TARIFAS.portes.min,
      };
    }
    const f = TARIFAS.furgonetaHora;
    const o = TARIFAS.operarioHora;
    return {
      frase: `Se calcula por horas: furgoneta con conductor ${f.min}-${f.max} €/h y cada operario extra ${o.min}-${o.max} €/h.`,
      texto: `${f.min}-${f.max} €/h + ${o.min}-${o.max} €/h por operario`,
      rango: null,
      valor: null,
    };
  }

  if (servicio === 'Mudanza de oficina') {
    const [desde, hasta] = PUESTOS[tamano] ?? [0, null];
    const p = TARIFAS.oficinaPuesto;
    if (hasta === null) {
      return { frase: `Una oficina así suele costar ${entre(p)} por puesto de trabajo.`, texto: `${p.min}-${p.max} € por puesto`, rango: null, valor: null };
    }
    const r = { min: a50(desde * p.min), max: a50(hasta * p.max) };
    return { frase: `Una oficina así suele costar ${entre(r)} (${p.min}-${p.max} € por puesto).`, texto: textoRango(r), rango: r, valor: medio(r) };
  }

  if (!esVivienda(tamano)) return null;

  if (servicio === 'Guardamuebles') {
    const g = TARIFAS.guardamueblesMes;
    return { frase: `El guardamuebles suele costar ${entre(g, '€ al mes')}, según el espacio.`, texto: `${g.min}-${g.max} €/mes`, rango: g, valor: medio(g) };
  }

  if (servicio === 'Mudanza nacional') {
    const t = tamanoRuta(tamano);
    const ruta = rutaPorDestino(e.destino);
    if (ruta) {
      const r = ruta.precios[t];
      return { frase: `Una mudanza así de Madrid a ${ruta.destino} suele costar ${entre(r)}.`, texto: textoRango(r), rango: r, valor: medio(r) };
    }
    const r = rangoNacional(t);
    return {
      frase: `A las ciudades más pedidas desde Madrid, una mudanza así suele costar ${entre(r)}.`,
      texto: textoRango(r),
      rango: r,
      valor: medio(r),
    };
  }

  const r = vivienda(tamano).precio;
  return { frase: `Una mudanza así suele costar ${entre(r)}.`, texto: textoRango(r), rango: r, valor: medio(r) };
}

/* ----------------------------- Paso 3: recorrido ----------------------------- */

const DISTRITOS = new Set(['mudanzas-chamberi', 'mudanzas-salamanca', 'mudanzas-retiro', 'mudanzas-carabanchel', 'mudanzas-vallecas', 'mudanzas-tetuan']);

/** Nombre de la zona de una página: «Leganés», «Chamberí (Madrid)». */
export function nombreZona(path: string): string {
  const base = (ETIQUETAS as Record<string, string>)[path]?.replace(/^Mudanzas en (el barrio de )?/, '') ?? '';
  return DISTRITOS.has(path) ? `${base} (Madrid)` : base;
}

/** Sugerencias para origen y destino: Madrid, las zonas con página y los destinos nacionales. */
export const SUGERENCIAS_LUGAR: readonly string[] = [
  'Madrid',
  ...RUTAS_ZONAS.map(nombreZona),
  ...RUTAS_PRECIO.map((r) => r.destino),
];

/** Opciones de la calculadora (no se usan en el formulario). */
export const ASCENSORES: readonly { id: Exclude<Ascensor, ''>; nombre: string }[] = [
  { id: 'ascensor', nombre: 'Hay ascensor' },
  { id: 'sin-ascensor', nombre: 'Sin ascensor' },
  { id: 'bajo', nombre: 'Bajo / casa' },
];

export const PLANTAS: readonly string[] = ['1ª', '2ª', '3ª', '4ª', '5ª', '6ª o más'];

/*
 * Cada dirección se pide en este orden, y cada pregunta aparece cuando hace falta:
 *   1. municipio o barrio → 2. tipo de inmueble → 3. planta (no en casas) → 4. ascensor (no en el bajo).
 */
export const TIPOS_LUGAR: readonly { id: Exclude<TipoLugar, ''>; nombre: string; texto: string }[] = [
  { id: 'piso', nombre: 'Piso', texto: 'piso' },
  { id: 'casa', nombre: 'Casa o chalet', texto: 'casa o chalet' },
  { id: 'local', nombre: 'Local u oficina', texto: 'local u oficina' },
  { id: 'trastero', nombre: 'Trastero o garaje', texto: 'trastero o garaje' },
];

export const PLANTAS_FORM: readonly string[] = ['Sótano', 'Bajo', '1ª', '2ª', '3ª', '4ª', '5ª', '6ª o más'];

/** En una casa no se pregunta la planta. */
export const preguntaPlanta = (tipo: TipoLugar): boolean => !!tipo && tipo !== 'casa';
/** Ni en una casa ni en un bajo se pregunta el ascensor. */
export const preguntaAscensor = (tipo: TipoLugar, planta: string): boolean =>
  preguntaPlanta(tipo) && !!planta && planta !== 'Bajo';

export const ASCENSORES_FORM: readonly { id: Exclude<AscensorForm, '' | 'no-aplica'>; nombre: string }[] = [
  { id: 'no', nombre: 'No tiene' },
  { id: 'pequeno', nombre: 'Sí, pequeño' },
  { id: 'grande', nombre: 'Sí, amplio (caben muebles)' },
];

/** Texto del ascensor para el resumen y para `details`. */
export const TEXTO_ASCENSOR: Record<Exclude<AscensorForm, ''>, string> = {
  no: 'sin ascensor',
  pequeno: 'ascensor pequeño',
  grande: 'ascensor amplio',
  'no-aplica': 'no aplica',
};

export const textoTipo = (tipo: TipoLugar): string => TIPOS_LUGAR.find((t) => t.id === tipo)?.texto ?? '';

/** Deja planta y ascensor coherentes con el tipo de inmueble. */
export function acceso(tipo: TipoLugar, planta: string, ascensor: AscensorForm): { planta: string; ascensor: AscensorForm } {
  const p = preguntaPlanta(tipo) && PLANTAS_FORM.includes(planta) ? planta : '';
  if (!preguntaAscensor(tipo, p)) return { planta: p, ascensor: tipo && (p || tipo === 'casa') ? 'no-aplica' : '' };
  return { planta: p, ascensor: ascensor === 'no-aplica' ? '' : ascensor };
}

type Lugar = 'Origen' | 'Destino';

/** Formato de la calculadora («ascensor», «sin-ascensor», «bajo») traducido al del formulario. */
function desdeCalculadora(datos: DatosPrevios, lugar: Lugar): Partial<EstadoPresupuesto> {
  const a = datos[`ascensor${lugar}`];
  const planta = datos[`planta${lugar}`] ?? '';
  const tipo: TipoLugar = datos[`tipo${lugar}`] ?? (a === 'ascensor' || a === 'sin-ascensor' ? 'piso' : '');
  const ascensor: AscensorForm = a === 'sin-ascensor' ? 'no' : a === 'ascensor' || a === 'bajo' || !a ? '' : a;
  const r = acceso(tipo, planta, ascensor);
  return { [`tipo${lugar}`]: tipo, [`planta${lugar}`]: r.planta, [`ascensor${lugar}`]: r.ascensor };
}

/** Traduce lo que llega de otras páginas o de una sesión antigua al formato del formulario. */
export function adaptarPrevios(datos: DatosPrevios): Partial<EstadoPresupuesto> {
  const { ascensorOrigen, ascensorDestino, plantaOrigen, plantaDestino, tipoOrigen, tipoDestino, ...resto } = datos;
  const fuera: Partial<EstadoPresupuesto> = { ...resto };
  if (ascensorOrigen !== undefined || plantaOrigen !== undefined || tipoOrigen !== undefined) {
    Object.assign(fuera, desdeCalculadora(datos, 'Origen'));
  }
  if (ascensorDestino !== undefined || plantaDestino !== undefined || tipoDestino !== undefined) {
    Object.assign(fuera, desdeCalculadora(datos, 'Destino'));
  }
  return fuera;
}

/** El guardamuebles no tiene destino: lo guardamos nosotros. */
export const pideDestino = (servicio: Servicio | '') => servicio !== 'Guardamuebles';

/* ----------------------------- Paso 4: cuándo ----------------------------- */

export const CUANDO: readonly { id: Exclude<Cuando, ''>; nombre: string }[] = [
  { id: 'pronto', nombre: 'Lo antes posible' },
  { id: 'semana', nombre: 'Esta semana' },
  { id: 'mes', nombre: 'Este mes' },
  { id: 'fecha', nombre: 'Tengo fecha' },
];

export const EXTRAS_FORM: readonly { id: ExtraForm; nombre: string }[] = [
  { id: 'embalaje', nombre: 'Necesito embalaje' },
  { id: 'montaje', nombre: 'Desmontar y montar muebles' },
  { id: 'guardamuebles', nombre: 'Guardamuebles' },
];

/* ----------------------------- Validación ----------------------------- */

/** Cifras de un teléfono español sin prefijo. Acepta que peguen «+34» o «0034». */
export function cifrasTelefono(texto: string): string {
  return texto.replace(/\D/g, '').replace(/^(0034|34)(?=\d{9}$)/, '');
}

export function errorTelefono(texto: string): string {
  const c = cifrasTelefono(texto);
  if (!c) return 'Escribe tu teléfono para poder enviarte el presupuesto.';
  if (c.length < 9) return 'Revisa el teléfono: faltan cifras.';
  if (c.length > 9) return 'Revisa el teléfono: sobran cifras.';
  if (!/^[6789]/.test(c)) return 'Revisa el teléfono: debe empezar por 6, 7, 8 o 9.';
  return '';
}

export const telefonoVisible = (texto: string): string => {
  const c = cifrasTelefono(texto);
  return `+34 ${c.slice(0, 3)} ${c.slice(3, 6)} ${c.slice(6)}`.trim();
};

export function errorEmail(texto: string): string {
  const t = texto.trim();
  return !t || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t) ? '' : 'Revisa el correo: parece incompleto.';
}

/* ----------------------------- Resúmenes ----------------------------- */

/** «Chamberí, piso, 4ª, sin ascensor» · «Getafe, local u oficina, Bajo» · «Las Rozas, casa o chalet». */
export function textoLugar(lugar: string, tipo: TipoLugar, planta: string, ascensor: AscensorForm): string {
  if (!lugar.trim()) return '';
  const elevador = ascensor && ascensor !== 'no-aplica' ? TEXTO_ASCENSOR[ascensor] : '';
  return [lugar.trim(), textoTipo(tipo), planta, elevador].filter(Boolean).join(', ');
}

export function textoCuando(e: Pick<EstadoPresupuesto, 'cuando' | 'fecha'>): string {
  if (e.cuando === 'fecha' && e.fecha) {
    const [a, m, d] = e.fecha.split('-');
    return `El ${d}/${m}/${a}`;
  }
  return CUANDO.find((c) => c.id === e.cuando)?.nombre ?? '';
}

export const textoExtras = (extras: readonly ExtraForm[]): string =>
  extras.map((x) => EXTRAS_FORM.find((e) => e.id === x)?.nombre ?? x).join(', ');

/**
 * Líneas «Etiqueta: valor» con todo lo rellenado (vacías fuera). Sin precio: el cliente lo ve en
 * la pantalla de éxito y en el mensaje de WhatsApp. Una línea por dirección.
 */
export function lineasResumen(e: EstadoPresupuesto): [string, string][] {
  const origen = textoLugar(e.origen, e.tipoOrigen, e.plantaOrigen, e.ascensorOrigen);
  const destino = pideDestino(e.servicio) ? textoLugar(e.destino, e.tipoDestino, e.plantaDestino, e.ascensorDestino) : '';
  const lineas: [string, string][] = [
    ['Servicio', e.servicio],
    ['Tamaño', nombreTamano(e.servicio, e.tamano)],
    ['Origen', origen],
    ['Destino', destino],
    ['Cuándo', textoCuando(e)],
    ['Extras', textoExtras(e.extras)],
    ['Notas', e.notas.trim()],
  ];
  return lineas.filter(([, v]) => !!v);
}

/** Mensaje de WhatsApp con lo que haya rellenado hasta ahora. */
export function mensajeWhatsApp(e: EstadoPresupuesto, completo = false): string {
  const lineas = lineasResumen(e).map(([k, v]) => `${k}: ${v}`);
  const contacto = completo
    ? [
        e.nombre.trim() ? `Nombre: ${e.nombre.trim()}` : '',
        cifrasTelefono(e.telefono) ? `Teléfono: ${telefonoVisible(e.telefono)}` : '',
        e.email.trim() ? `Correo: ${e.email.trim()}` : '',
      ].filter(Boolean)
    : [];
  return ['Hola, quiero pedir presupuesto para una mudanza.', ...(lineas.length ? ['', ...lineas] : []), ...(contacto.length ? ['', ...contacto] : [])].join('\n');
}
