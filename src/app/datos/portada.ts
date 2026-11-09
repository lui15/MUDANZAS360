import { PENDIENTE } from './pendiente';

/** Contenido de los bloques de confianza de la portada. */

export interface Garantia {
  icono: string;
  titulo: string;
  texto: string;
}

export interface Cifra {
  valor: number | null;
  sufijo: string;
  etiqueta: string;
}


/** Revisa estos textos y deja solo lo que realmente ofreces. */
export const GARANTIAS: readonly Garantia[] = [
  {
    icono: '◈',
    titulo: 'Seguro de mercancías',
    texto: PENDIENTE(
      'Confirmar que ofrecéis seguro de mercancías y cómo es la cobertura',
      'Tu mudanza puede ir cubierta por un seguro. Te indicamos la cobertura incluida al preparar tu presupuesto.',
    ) as string,
  },
  {
    icono: '◷',
    titulo: 'Puntualidad',
    texto:
      'Acordamos contigo la fecha y la franja horaria del servicio, y te avisamos de cualquier cambio.',
  },
  {
    icono: '◇',
    titulo: 'Cuidado de tus muebles',
    texto:
      'Protegemos, embalamos y manipulamos cada pieza con atención, de la recogida a la entrega.',
  },
  {
    icono: '✓',
    titulo: 'Presupuesto claro',
    texto: 'Te explicamos qué incluye tu presupuesto antes de empezar, para que sepas qué esperar.',
  },
];

/** Cifras de la empresa. El bloque solo se muestra con las cifras que estén rellenas. */
export const CIFRAS: readonly Cifra[] = [
  { valor: PENDIENTE('Número real de mudanzas realizadas'), sufijo: '+', etiqueta: 'Mudanzas realizadas' },
  { valor: PENDIENTE('Años reales de experiencia'), sufijo: '', etiqueta: 'Años de experiencia' },
  { valor: PENDIENTE('Número real de ciudades a las que habéis hecho mudanzas'), sufijo: '+', etiqueta: 'Ciudades cubiertas' },
];

