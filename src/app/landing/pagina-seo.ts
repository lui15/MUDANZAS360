import type { Faq } from '../compartido/faq-acordeon';
import type { ImagenId } from '../datos/imagenes';
import type { Servicio } from '../datos/servicios';
import type { RutaLanding } from './rutas';

export type TipoPagina = 'hub' | 'servicio' | 'ruta' | 'zona';

export interface Seccion {
  /** Se pinta como H2. */
  titulo: string;
  parrafos: string[];
  /** Lista opcional bajo los párrafos. */
  lista?: string[];
  /** Subapartados opcionales, pintados como H3. */
  subsecciones?: { titulo: string; texto: string }[];
}

export interface TablaPrecios {
  titulo: string;
  columnas: [string, string, string];
  filas: [string, string, string][];
}

export interface GrupoEnlaces {
  titulo: string;
  rutas: readonly RutaLanding[];
}

export interface PaginaSeo {
  /** Ruta sin barra inicial. */
  path: RutaLanding;
  tipo: TipoPagina;
  /** Página de la que cuelga en las migas de pan. Vacío: directamente de la portada. */
  padre: RutaLanding | '';
  /** Máximo 60 caracteres. */
  title: string;
  /** Máximo 155 caracteres. */
  description: string;
  /** Texto de los enlaces internos y de las migas de pan. */
  etiqueta: string;
  /** Frase breve que acompaña a los enlaces desde las páginas índice. */
  resumen: string;
  h1: { linea: string; resaltado: string };
  kicker: string;
  intro: string;
  imagen: ImagenId;
  imagenAlt: string;
  /** Datos destacados bajo la cabecera: distancia, accesos, etc. */
  fichas?: { etiqueta: string; valor: string }[];
  secciones: Seccion[];
  tablas?: TablaPrecios[];
  /** Enlaces a las páginas hijas (páginas índice). */
  grupos?: GrupoEnlaces[];
  /** Muestra el bloque de los cuatro pasos de trabajo. */
  conProceso?: boolean;
  faqs: Faq[];
  relacionadas: RutaLanding[];
  /** Genera el nodo Service de los datos estructurados. */
  servicio?: { nombre: string; descripcion: string; area: string; tipoArea: 'City' | 'Country' | 'AdministrativeArea' };
  /** Servicio que se deja elegido al abrir el formulario desde esta página. */
  servicioFormulario?: Servicio;
  /** Ciudad de destino de las rutas nacionales, para la analítica. */
  destino?: string;
}

export const COMO_PEDIR_TEXTO =
  'Rellena el formulario de cinco pasos con el recorrido, el tamaño de la mudanza y la fecha. Revisamos la información y nos ponemos en contacto contigo para preparar la propuesta. Enviar la solicitud no te compromete a nada.';
