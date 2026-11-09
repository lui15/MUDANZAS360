/**
 * Marca un dato que todavía no tenemos y que no se debe inventar (precios, cifras, datos de la empresa…).
 *
 *   precio: PENDIENTE('Precio de partida de un porte en Madrid')
 *   texto: PENDIENTE('Confirmar que el seguro está incluido', 'texto provisional')
 *   rango: PENDIENTE_RANGO('Precio de una mudanza de estudio')
 *
 * Sin valor provisional devuelve null, y la web oculta el dato o muestra «A consultar».
 * Con valor provisional, se usa ese valor hasta que lo confirmes.
 * Lista completa de lo que falta: npm run pendientes
 */
export function PENDIENTE<T = null>(descripcion: string, provisional?: T): T | null {
  void descripcion;
  return provisional ?? null;
}

/** Rango de precios o de volumen. Un extremo a null significa «sin dato». */
export interface Rango {
  min: number | null;
  max: number | null;
}

/** Rango todavía sin cifras: se muestra como «A consultar». */
export function PENDIENTE_RANGO(descripcion: string): Rango {
  void descripcion;
  return { min: null, max: null };
}
