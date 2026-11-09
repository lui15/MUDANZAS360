/**
 * Marca un dato que todavía no tenemos y que no se debe inventar (precios, cifras, datos de la empresa…).
 *
 *   precio: PENDIENTE('Precio de partida de un porte en Madrid')
 *   texto: PENDIENTE('Confirmar que el seguro está incluido', 'texto provisional')
 *
 * Sin valor provisional devuelve null, y la web oculta el dato o muestra «A consultar».
 * Con valor provisional, se usa ese valor hasta que lo confirmes.
 * Lista completa de lo que falta: npm run pendientes
 */
export function PENDIENTE<T = null>(descripcion: string, provisional?: T): T | null {
  void descripcion;
  return provisional ?? null;
}
