/** Imágenes de la web con sus dimensiones reales, para reservar su espacio al cargar. */
export const IMAGENES = {
  viviendas: { src: '/images/mudanzas-viviendas.webp', ancho: 735, alto: 490 },
  oficinas: { src: '/images/mudanzas-oficinas.webp', ancho: 735, alto: 951 },
  portes: { src: '/images/portes.webp', ancho: 735, alto: 490 },
  muebles: { src: '/images/muebles.webp', ancho: 735, alto: 490 },
  embalaje: { src: '/images/embalaje.webp', ancho: 736, alto: 736 },
  guardamuebles: { src: '/images/guardamuebles.webp', ancho: 800, alto: 1067 },
  nacionales: { src: '/images/nacionales.webp', ancho: 800, alto: 800 },
  madrid: { src: '/images/madrid.webp', ancho: 800, alto: 800 },
} as const;

export type ImagenId = keyof typeof IMAGENES;
