import { ResolveFn } from '@angular/router';

import { CARGADORES, estaPublicada } from '../contenido/indice';
import { ServicioLocal, servicioLocal } from '../contenido/servicios';
import type { ContenidoServicioZona, ContenidoZona } from '../contenido/tipos';
import { ZonaLocal, zonaLocal } from '../contenido/zonas';

export interface DatosServicioZona {
  servicio: ServicioLocal;
  zona: ZonaLocal;
  contenido: ContenidoServicioZona;
  archivo: ContenidoZona;
}

/**
 * Carga el texto de la zona antes de pintar la página, para que el HTML prerenderizado ya lo
 * lleve completo. Si la combinación no existe, devuelve null y la página muestra el 404.
 */
export const resolverServicioZona: ResolveFn<DatosServicioZona | null> = async (ruta) => {
  const s = servicioLocal(ruta.paramMap.get('servicio') ?? '');
  const z = zonaLocal(ruta.paramMap.get('zona') ?? '');
  if (!s || !z || !estaPublicada(s.slug, z.slug)) return null;
  const archivo = await CARGADORES[z.slug]();
  const contenido = archivo.paginas[s.slug];
  return contenido ? { servicio: s, zona: z, contenido, archivo } : null;
};
