/**
 * Las 50 zonas de las páginas /servicio/zona/: los 21 distritos de Madrid y 29 municipios
 * cercanos. `cercanas` alimenta los enlaces a zonas vecinas (solo se enlazan las publicadas).
 */
import type { RutaLanding } from '../landing/rutas';

export interface ZonaLocal {
  slug: string;
  nombre: string;
  tipo: 'distrito' | 'municipio';
  /** Zonas vecinas, de la más cercana a la más lejana. */
  cercanas: string[];
  /** Página de zona que ya existe, si la hay. */
  pagina?: RutaLanding;
}

export const ZONAS_LOCALES: readonly ZonaLocal[] = [
  /* ---------------------- Distritos de Madrid ---------------------- */
  { slug: 'centro', nombre: 'Centro', tipo: 'distrito', cercanas: ['chamberi', 'salamanca', 'retiro', 'arganzuela', 'moncloa-aravaca', 'latina'] },
  { slug: 'arganzuela', nombre: 'Arganzuela', tipo: 'distrito', cercanas: ['centro', 'retiro', 'usera', 'carabanchel', 'puente-de-vallecas', 'latina'] },
  { slug: 'retiro', nombre: 'Retiro', tipo: 'distrito', cercanas: ['salamanca', 'centro', 'arganzuela', 'moratalaz', 'puente-de-vallecas'], pagina: 'mudanzas-retiro' },
  { slug: 'salamanca', nombre: 'Salamanca', tipo: 'distrito', cercanas: ['retiro', 'chamartin', 'chamberi', 'centro', 'ciudad-lineal'], pagina: 'mudanzas-salamanca' },
  { slug: 'chamartin', nombre: 'Chamartín', tipo: 'distrito', cercanas: ['salamanca', 'tetuan', 'chamberi', 'ciudad-lineal', 'hortaleza'] },
  { slug: 'tetuan', nombre: 'Tetuán', tipo: 'distrito', cercanas: ['chamberi', 'chamartin', 'fuencarral-el-pardo', 'moncloa-aravaca'], pagina: 'mudanzas-tetuan' },
  { slug: 'chamberi', nombre: 'Chamberí', tipo: 'distrito', cercanas: ['centro', 'salamanca', 'tetuan', 'moncloa-aravaca', 'chamartin'], pagina: 'mudanzas-chamberi' },
  { slug: 'fuencarral-el-pardo', nombre: 'Fuencarral-El Pardo', tipo: 'distrito', cercanas: ['tetuan', 'hortaleza', 'chamartin', 'moncloa-aravaca', 'alcobendas', 'tres-cantos'] },
  { slug: 'moncloa-aravaca', nombre: 'Moncloa-Aravaca', tipo: 'distrito', cercanas: ['chamberi', 'centro', 'latina', 'tetuan', 'pozuelo-de-alarcon'] },
  { slug: 'latina', nombre: 'Latina', tipo: 'distrito', cercanas: ['carabanchel', 'centro', 'moncloa-aravaca', 'arganzuela', 'alcorcon'] },
  { slug: 'carabanchel', nombre: 'Carabanchel', tipo: 'distrito', cercanas: ['latina', 'usera', 'arganzuela', 'villaverde', 'leganes'], pagina: 'mudanzas-carabanchel' },
  { slug: 'usera', nombre: 'Usera', tipo: 'distrito', cercanas: ['arganzuela', 'carabanchel', 'villaverde', 'puente-de-vallecas'] },
  { slug: 'puente-de-vallecas', nombre: 'Puente de Vallecas', tipo: 'distrito', cercanas: ['retiro', 'moratalaz', 'villa-de-vallecas', 'usera', 'arganzuela'], pagina: 'mudanzas-vallecas' },
  { slug: 'moratalaz', nombre: 'Moratalaz', tipo: 'distrito', cercanas: ['retiro', 'puente-de-vallecas', 'vicalvaro', 'ciudad-lineal', 'san-blas-canillejas'] },
  { slug: 'ciudad-lineal', nombre: 'Ciudad Lineal', tipo: 'distrito', cercanas: ['salamanca', 'chamartin', 'hortaleza', 'san-blas-canillejas', 'moratalaz'] },
  { slug: 'hortaleza', nombre: 'Hortaleza', tipo: 'distrito', cercanas: ['ciudad-lineal', 'chamartin', 'barajas', 'fuencarral-el-pardo', 'alcobendas'] },
  { slug: 'villaverde', nombre: 'Villaverde', tipo: 'distrito', cercanas: ['usera', 'carabanchel', 'villa-de-vallecas', 'getafe'] },
  { slug: 'villa-de-vallecas', nombre: 'Villa de Vallecas', tipo: 'distrito', cercanas: ['puente-de-vallecas', 'vicalvaro', 'villaverde', 'rivas-vaciamadrid'] },
  { slug: 'vicalvaro', nombre: 'Vicálvaro', tipo: 'distrito', cercanas: ['moratalaz', 'san-blas-canillejas', 'villa-de-vallecas', 'coslada'] },
  { slug: 'san-blas-canillejas', nombre: 'San Blas-Canillejas', tipo: 'distrito', cercanas: ['ciudad-lineal', 'barajas', 'vicalvaro', 'coslada'] },
  { slug: 'barajas', nombre: 'Barajas', tipo: 'distrito', cercanas: ['hortaleza', 'san-blas-canillejas', 'paracuellos-de-jarama', 'alcobendas'] },

  /* ---------------------- Municipios cercanos ---------------------- */
  { slug: 'alcala-de-henares', nombre: 'Alcalá de Henares', tipo: 'municipio', cercanas: ['torrejon-de-ardoz', 'san-fernando-de-henares', 'coslada'], pagina: 'mudanzas-alcala-de-henares' },
  { slug: 'getafe', nombre: 'Getafe', tipo: 'municipio', cercanas: ['leganes', 'villaverde', 'fuenlabrada', 'pinto', 'parla'], pagina: 'mudanzas-getafe' },
  { slug: 'mostoles', nombre: 'Móstoles', tipo: 'municipio', cercanas: ['alcorcon', 'fuenlabrada', 'navalcarnero', 'villaviciosa-de-odon'], pagina: 'mudanzas-mostoles' },
  { slug: 'alcobendas', nombre: 'Alcobendas', tipo: 'municipio', cercanas: ['san-sebastian-de-los-reyes', 'fuencarral-el-pardo', 'hortaleza', 'tres-cantos'], pagina: 'mudanzas-alcobendas' },
  { slug: 'las-rozas', nombre: 'Las Rozas', tipo: 'municipio', cercanas: ['majadahonda', 'pozuelo-de-alarcon', 'torrelodones', 'collado-villalba'], pagina: 'mudanzas-las-rozas' },
  { slug: 'leganes', nombre: 'Leganés', tipo: 'municipio', cercanas: ['getafe', 'alcorcon', 'fuenlabrada', 'carabanchel'], pagina: 'mudanzas-leganes' },
  { slug: 'fuenlabrada', nombre: 'Fuenlabrada', tipo: 'municipio', cercanas: ['leganes', 'mostoles', 'getafe', 'parla'], pagina: 'mudanzas-fuenlabrada' },
  { slug: 'alcorcon', nombre: 'Alcorcón', tipo: 'municipio', cercanas: ['mostoles', 'leganes', 'latina', 'villaviciosa-de-odon'], pagina: 'mudanzas-alcorcon' },
  { slug: 'torrejon-de-ardoz', nombre: 'Torrejón de Ardoz', tipo: 'municipio', cercanas: ['alcala-de-henares', 'san-fernando-de-henares', 'coslada', 'paracuellos-de-jarama'], pagina: 'mudanzas-torrejon-de-ardoz' },
  { slug: 'parla', nombre: 'Parla', tipo: 'municipio', cercanas: ['pinto', 'fuenlabrada', 'getafe', 'valdemoro'], pagina: 'mudanzas-parla' },
  { slug: 'pozuelo-de-alarcon', nombre: 'Pozuelo de Alarcón', tipo: 'municipio', cercanas: ['majadahonda', 'moncloa-aravaca', 'las-rozas', 'boadilla-del-monte'], pagina: 'mudanzas-pozuelo-de-alarcon' },
  { slug: 'majadahonda', nombre: 'Majadahonda', tipo: 'municipio', cercanas: ['las-rozas', 'pozuelo-de-alarcon', 'boadilla-del-monte', 'villaviciosa-de-odon'], pagina: 'mudanzas-majadahonda' },
  { slug: 'rivas-vaciamadrid', nombre: 'Rivas-Vaciamadrid', tipo: 'municipio', cercanas: ['arganda-del-rey', 'villa-de-vallecas', 'vicalvaro', 'coslada'], pagina: 'mudanzas-rivas-vaciamadrid' },
  { slug: 'san-sebastian-de-los-reyes', nombre: 'San Sebastián de los Reyes', tipo: 'municipio', cercanas: ['alcobendas', 'tres-cantos', 'paracuellos-de-jarama', 'colmenar-viejo'], pagina: 'mudanzas-san-sebastian-de-los-reyes' },
  { slug: 'boadilla-del-monte', nombre: 'Boadilla del Monte', tipo: 'municipio', cercanas: ['majadahonda', 'pozuelo-de-alarcon', 'villaviciosa-de-odon', 'alcorcon'], pagina: 'mudanzas-boadilla-del-monte' },
  { slug: 'coslada', nombre: 'Coslada', tipo: 'municipio', cercanas: ['san-fernando-de-henares', 'vicalvaro', 'san-blas-canillejas', 'torrejon-de-ardoz'] },
  { slug: 'san-fernando-de-henares', nombre: 'San Fernando de Henares', tipo: 'municipio', cercanas: ['coslada', 'torrejon-de-ardoz', 'rivas-vaciamadrid', 'alcala-de-henares'] },
  { slug: 'tres-cantos', nombre: 'Tres Cantos', tipo: 'municipio', cercanas: ['colmenar-viejo', 'alcobendas', 'san-sebastian-de-los-reyes', 'fuencarral-el-pardo'] },
  { slug: 'valdemoro', nombre: 'Valdemoro', tipo: 'municipio', cercanas: ['pinto', 'parla', 'ciempozuelos', 'aranjuez'] },
  { slug: 'pinto', nombre: 'Pinto', tipo: 'municipio', cercanas: ['valdemoro', 'parla', 'getafe', 'ciempozuelos'] },
  { slug: 'arganda-del-rey', nombre: 'Arganda del Rey', tipo: 'municipio', cercanas: ['rivas-vaciamadrid', 'san-fernando-de-henares', 'coslada'] },
  { slug: 'collado-villalba', nombre: 'Collado Villalba', tipo: 'municipio', cercanas: ['torrelodones', 'galapagar', 'las-rozas'] },
  { slug: 'aranjuez', nombre: 'Aranjuez', tipo: 'municipio', cercanas: ['ciempozuelos', 'valdemoro', 'pinto'] },
  { slug: 'colmenar-viejo', nombre: 'Colmenar Viejo', tipo: 'municipio', cercanas: ['tres-cantos', 'san-sebastian-de-los-reyes', 'alcobendas'] },
  { slug: 'villaviciosa-de-odon', nombre: 'Villaviciosa de Odón', tipo: 'municipio', cercanas: ['boadilla-del-monte', 'mostoles', 'alcorcon', 'majadahonda'] },
  { slug: 'torrelodones', nombre: 'Torrelodones', tipo: 'municipio', cercanas: ['las-rozas', 'galapagar', 'collado-villalba'] },
  { slug: 'galapagar', nombre: 'Galapagar', tipo: 'municipio', cercanas: ['torrelodones', 'collado-villalba', 'las-rozas'] },
  { slug: 'navalcarnero', nombre: 'Navalcarnero', tipo: 'municipio', cercanas: ['mostoles', 'villaviciosa-de-odon', 'fuenlabrada'] },
  { slug: 'ciempozuelos', nombre: 'Ciempozuelos', tipo: 'municipio', cercanas: ['valdemoro', 'pinto', 'aranjuez'] },
  { slug: 'paracuellos-de-jarama', nombre: 'Paracuellos de Jarama', tipo: 'municipio', cercanas: ['barajas', 'torrejon-de-ardoz', 'san-sebastian-de-los-reyes', 'alcobendas'] },
];

export const zonaLocal = (slug: string) => ZONAS_LOCALES.find((z) => z.slug === slug);
