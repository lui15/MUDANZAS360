/**
 * Imágenes de la web. `src` es la versión grande (cabeceras) y `tarjeta` la ligera (listados).
 * Las dimensiones son las reales del archivo, para reservar su espacio al cargar.
 * Procedencia de las fotos descargadas: public/images/CREDITOS.md
 */
export interface Imagen {
  src: string;
  ancho: number;
  alto: number;
  tarjeta: string;
  anchoTarjeta: number;
  altoTarjeta: number;
  alt: string;
}

function propia(archivo: string, ancho: number, alto: number, alt: string): Imagen {
  const src = `/images/${archivo}.webp`;
  return { src, ancho, alto, tarjeta: src, anchoTarjeta: ancho, altoTarjeta: alto, alt };
}

function descargada(archivo: string, alt: string): Imagen {
  return {
    src: `/images/${archivo}.webp`,
    ancho: 1200,
    alto: 900,
    tarjeta: `/images/${archivo}-800.webp`,
    anchoTarjeta: 800,
    altoTarjeta: 600,
    alt,
  };
}

export const IMAGENES = {
  viviendas: propia('mudanzas-viviendas', 735, 490, 'Camión de mudanzas con cajas a la puerta de una vivienda'),
  oficinas: propia('mudanzas-oficinas', 735, 951, 'Oficina con puestos de trabajo y cajas preparadas'),
  portes: propia('portes', 735, 490, 'Camión cargado con un sillón protegido y cajas'),
  muebles: propia('muebles', 735, 490, 'Montador fijando un armario blanco con un taladro'),
  embalaje: propia('embalaje', 736, 736, 'Salón amueblado de una vivienda'),
  guardamuebles: propia('guardamuebles', 800, 1067, 'Almacén con estanterías llenas de muebles embalados'),
  nacionales: propia('nacionales', 800, 800, 'Furgoneta de mudanzas abierta con cajas apiladas'),
  madrid: propia('madrid', 800, 800, 'Camión de mudanzas con cajas frente a un bloque de viviendas'),
  'salon-cajas': descargada('salon-cajas', 'Salón con cajas de cartón apiladas y plantas'),
  'embalaje-material': descargada('embalaje-material', 'Cajas y material de embalaje preparados'),
  'cajas-apiladas': descargada('cajas-apiladas', 'Cajas de cartón apiladas sobre palés'),
  'furgoneta-blanca': descargada('furgoneta-blanca', 'Furgoneta blanca aparcada en la calle'),
  'furgoneta-carretera': descargada('furgoneta-carretera', 'Furgoneta blanca circulando por carretera'),
  'camion-autovia': descargada('camion-autovia', 'Camión blanco en una carretera entre campos'),
  'furgoneta-calle': descargada('furgoneta-calle', 'Camión pequeño en una calle arbolada'),
  'oficina-diafana': descargada('oficina-diafana', 'Oficina diáfana con puestos de trabajo'),
  'guardamuebles-pasillo': descargada('guardamuebles-pasillo', 'Pasillo de trasteros de un guardamuebles'),
  'caja-mesa': descargada('caja-mesa', 'Persona preparando una caja sobre una mesa'),
} as const satisfies Record<string, Imagen>;

export type ImagenId = keyof typeof IMAGENES;
