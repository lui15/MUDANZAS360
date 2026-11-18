/** Título y descripción de las páginas /servicio/zona/. Los usan la página y el validador. */
import { conEstrella } from '../landing/metadatos';

/** «Portes en Chamberí | Mudanzas360»; sin la marca si pasa de 60 caracteres. */
export const tituloLocal = (servicio: string, zona: string) => {
  const base = `${servicio} en ${zona}`;
  return `${base} | Mudanzas360`.length <= 60 ? `${base} | Mudanzas360` : base;
};

/** Descripción con estrella y la frase propia de la página (su «gancho»). */
export const descripcionLocal = (servicio: string, zona: string, gancho: string) =>
  conEstrella([gancho, `${servicio} en ${zona}.`], ['cerrado', 'visita']);
