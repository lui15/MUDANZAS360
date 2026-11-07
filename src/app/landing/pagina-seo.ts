import type { Faq } from '../compartido/faq-acordeon';
import type { IconoId } from '../compartido/iconos';
import type { Servicio } from '../datos/catalogo-servicios';
import type { ImagenId } from '../datos/imagenes';
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

export interface FilaPrecio {
  nombre: string;
  descripcion: string;
  imagen: ImagenId;
  /** Precio de partida en euros. null: aún no hay un precio confirmado (TODO). */
  precio: number | null;
  unidad?: string;
  servicio: Servicio;
}

export interface PasoDetalle {
  titulo: string;
  texto: string;
  icono: IconoId;
  imagen: ImagenId;
}

export interface GrupoFaq {
  titulo: string;
  faqs: Faq[];
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
  /** La parte resaltada se pinta en el color de marca. */
  h1: { antes: string; resaltado: string; despues: string };
  kicker: string;
  intro: string;
  imagen: ImagenId;
  imagenAlt: string;
  /** Imagen de apoyo dentro del texto. */
  imagenContenido: ImagenId;
  /** Precio de partida que se muestra sobre la foto. null o vacío: no se muestra (TODO). */
  precioDesde?: number | null;
  /** Mensaje con el que se abre WhatsApp desde esta página. */
  mensaje: string;
  /** Franja de cuatro datos bajo la cabecera. */
  fichas: { etiqueta: string; valor: string }[];
  secciones: Seccion[];
  filasPrecio?: FilaPrecio[];
  pasos?: PasoDetalle[];
  /** Enlaces a las páginas hijas (páginas índice). */
  grupos?: GrupoEnlaces[];
  /** Todas las preguntas: son las que se publican en el FAQPage. */
  faqs: Faq[];
  /** Si existe, las preguntas se muestran agrupadas por temas. */
  gruposFaq?: GrupoFaq[];
  relacionadas: RutaLanding[];
  /** Genera el nodo Service de los datos estructurados. */
  servicio?: { nombre: string; descripcion: string; area: string; tipoArea: 'City' | 'Country' | 'AdministrativeArea' };
  /** Servicio que se deja elegido al abrir el formulario desde esta página. */
  servicioFormulario?: Servicio;
  /** Ciudad de destino de las rutas nacionales. */
  destino?: string;
}

export const COMO_PEDIR_TEXTO =
  'Rellena el formulario de cinco pasos con el recorrido, el tamaño de la mudanza y la fecha. Revisamos la información y nos ponemos en contacto contigo para preparar la propuesta. Enviar la solicitud no te compromete a nada.';
