/** Imágenes de la web con sus dimensiones reales, para reservar su espacio al cargar. */
export const IMAGENES = {
  viviendas: { src: '/images/mudanzas-viviendas.jpg', ancho: 735, alto: 490 },
  oficinas: { src: '/images/mudanzas-oficinas.jpg', ancho: 735, alto: 951 },
  portes: { src: '/images/portes.jpg', ancho: 735, alto: 490 },
  muebles: { src: '/images/muebles.jpg', ancho: 735, alto: 490 },
  embalaje: { src: '/images/embalaje.jpg', ancho: 736, alto: 736 },
  guardamuebles: { src: '/images/guardamuebles.avif', ancho: 800, alto: 1067 },
  nacionales: { src: '/images/nacionales.jpg', ancho: 1024, alto: 1024 },
  madrid: { src: '/images/madrid.jpg', ancho: 1024, alto: 1024 },
} as const;

export type ImagenId = keyof typeof IMAGENES;
