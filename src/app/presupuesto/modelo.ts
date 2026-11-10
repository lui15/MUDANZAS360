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
/** Ascensor en el formulario. «no-aplica» cuando la planta es Bajo o Casa o chalet. */
export type AscensorForm = 'no' | 'pequeno' | 'grande' | 'no-aplica' | '';
export type Cuando = 'pronto' | 'semana' | 'mes' | 'fecha' | '';
export type ExtraForm = 'embalaje' | 'montaje' | 'guardamuebles';

export interface EstadoPresupuesto {
  servicio: Servicio | '';
  tamano: string;
  origen: string;
  destino: string;
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

/** Plantas del formulario, en botones. Bajo y Casa o chalet no preguntan por el ascensor. */
export const PLANTAS_FORM: readonly string[] = ['Bajo', '1ª', '2ª', '3ª', '4ª', '5ª', '6ª o más', 'Casa o chalet'];
const SIN_PREGUNTA_ASCENSOR = new Set(['Bajo', 'Casa o chalet']);
export const preguntaAscensor = (planta: string): boolean => !!planta && !SIN_PREGUNTA_ASCENSOR.has(planta);

export const ASCENSORES_FORM: readonly { id: Exclude<AscensorForm, '' | 'no-aplica'>; nombre: string }[] = [
  { id: 'no', nombre: 'No hay' },
  { id: 'pequeno', nombre: 'Sí, pequeño' },
  { id: 'grande', nombre: 'Sí, grande (caben muebles)' },
];

/** Texto del ascensor para el resumen y para `details`. */
export const TEXTO_ASCENSOR: Record<Exclude<AscensorForm, ''>, string> = {
  no: 'sin ascensor',
  pequeno: 'ascensor pequeño',
  grande: 'ascensor grande',
  'no-aplica': 'no aplica',
};

/** Ascensor y planta coherentes: planta sin pregunta → «no aplica»; con pregunta → nunca «no aplica». */
function ajustarAcceso(planta: string, ascensor: AscensorForm | Ascensor | undefined): { planta: string; ascensor: AscensorForm } {
  // Formato de la calculadora: «sin-ascensor» trae planta; «bajo» es planta baja; «ascensor» no dice el tamaño.
  let a: AscensorForm =
    ascensor === 'sin-ascensor' ? 'no' : ascensor === 'ascensor' || ascensor === 'bajo' || !ascensor ? '' : ascensor;
  let p = PLANTAS_FORM.includes(planta) ? planta : '';
  if (ascensor === 'bajo') p = 'Bajo';
  if (p && !preguntaAscensor(p)) a = 'no-aplica';
  else if (a === 'no-aplica') a = '';
  return { planta: p, ascensor: a };
}

/** Traduce lo que llega de otras páginas o de una sesión antigua al formato del formulario. */
export function adaptarPrevios(datos: DatosPrevios): Partial<EstadoPresupuesto> {
  const { ascensorOrigen, ascensorDestino, plantaOrigen, plantaDestino, ...resto } = datos;
  const fuera: Partial<EstadoPresupuesto> = { ...resto };
  if (ascensorOrigen !== undefined || plantaOrigen !== undefined) {
    const o = ajustarAcceso(plantaOrigen ?? '', ascensorOrigen);
    fuera.plantaOrigen = o.planta;
    fuera.ascensorOrigen = o.ascensor;
  }
  if (ascensorDestino !== undefined || plantaDestino !== undefined) {
    const d = ajustarAcceso(plantaDestino ?? '', ascensorDestino);
    fuera.plantaDestino = d.planta;
    fuera.ascensorDestino = d.ascensor;
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

/** «Chamberí, 4ª, sin ascensor» · «Getafe, Bajo» · «Las Rozas, Casa o chalet». */
export function textoLugar(lugar: string, planta: string, ascensor: AscensorForm): string {
  if (!lugar.trim()) return '';
  const acceso = ascensor && ascensor !== 'no-aplica' ? TEXTO_ASCENSOR[ascensor] : '';
  return [lugar.trim(), planta, acceso].filter(Boolean).join(', ');
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
  const origen = textoLugar(e.origen, e.plantaOrigen, e.ascensorOrigen);
  const destino = pideDestino(e.servicio) ? textoLugar(e.destino, e.plantaDestino, e.ascensorDestino) : '';
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
