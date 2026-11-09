import type { Faq } from '../compartido/faq-acordeon';
import { NEGOCIO, REVISION, SITE_URL, TELEFONO, urlCanonica } from '../datos/contacto';

/**
 * Datos estructurados. Importante: las opiniones de la portada son textos de ejemplo, así que
 * no se marcan con Review ni AggregateRating. Añádelos solo con reseñas reales y verificables.
 */

const ID_EMPRESA = SITE_URL + '/#empresa';
const CONTEXTO = 'https://schema.org';

/** Referencia a la empresa desde los nodos de las páginas internas. */
const REFERENCIA_EMPRESA = {
  '@type': 'MovingCompany',
  '@id': ID_EMPRESA,
  name: NEGOCIO.nombre,
  url: SITE_URL + '/',
};

function nodoFaq(faqs: readonly Faq[]): object {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.pregunta,
      acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
    })),
  };
}

function nodoMigas(migas: readonly { etiqueta: string; ruta: string }[]): object {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: migas.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: m.etiqueta,
      item: urlCanonica(m.ruta),
    })),
  };
}

function nodoServicio(s: PaginaConServicio['servicio'], ruta: string): object {
  return {
    '@type': 'Service',
    name: s.nombre,
    description: s.descripcion,
    serviceType: s.nombre,
    url: urlCanonica(ruta),
    provider: REFERENCIA_EMPRESA,
    areaServed: { '@type': s.tipoArea, name: s.area },
  };
}

interface PaginaConServicio {
  servicio: {
    nombre: string;
    descripcion: string;
    area: string;
    tipoArea: 'City' | 'Country' | 'AdministrativeArea';
  };
}

/** Portada: la empresa, el sitio web y las preguntas visibles. */
export function jsonLdPortada(faqs: readonly Faq[]): object {
  const logo = SITE_URL + NEGOCIO.logo;

  return {
    '@context': CONTEXTO,
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': SITE_URL + '/#website',
        url: SITE_URL + '/',
        name: NEGOCIO.nombre,
        inLanguage: 'es-ES',
        publisher: { '@id': ID_EMPRESA },
      },
      {
        '@type': 'MovingCompany',
        '@id': ID_EMPRESA,
        name: NEGOCIO.nombre,
        alternateName: NEGOCIO.nombreAlternativo,
        url: SITE_URL + '/',
        logo,
        image: logo,
        priceRange: NEGOCIO.rangoPrecios,
        telephone: TELEFONO,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Madrid',
          addressRegion: 'Comunidad de Madrid',
          addressCountry: 'ES',
        },
        areaServed: [
          { '@type': 'City', name: 'Madrid' },
          { '@type': 'AdministrativeArea', name: 'Comunidad de Madrid' },
          { '@type': 'Country', name: 'España' },
        ],
        // TODO: añadir openingHoursSpecification cuando el horario esté confirmado.
        ...(NEGOCIO.redes.length ? { sameAs: NEGOCIO.redes } : {}),
      },
      nodoFaq(faqs),
    ],
  };
}

/** Datos de la página como documento: fecha de revisión y autor (el equipo de la empresa). */
function nodoPagina(ruta: string, titulo: string): object {
  return {
    '@type': 'WebPage',
    '@id': urlCanonica(ruta) + '#pagina',
    url: urlCanonica(ruta),
    name: titulo,
    inLanguage: 'es-ES',
    dateModified: REVISION.iso,
    author: REFERENCIA_EMPRESA,
    publisher: REFERENCIA_EMPRESA,
    isPartOf: { '@id': SITE_URL + '/#website' },
  };
}

export interface PrecioJsonLd {
  /** Precio de partida; si es null no se publica ninguna oferta. */
  desde: number | null;
}

/** Páginas internas: página y migas siempre; Service, oferta, FAQPage y Article cuando procede. */
export function jsonLdPagina(pagina: {
  path: string;
  title?: string;
  migas: readonly { etiqueta: string; ruta: string }[];
  faqs?: readonly Faq[];
  servicio?: PaginaConServicio['servicio'];
  precioDesde?: number | null;
  articulo?: { titulo: string; descripcion: string; publicado: string; imagen: string };
}): object {
  const ruta = '/' + pagina.path;
  const servicio = pagina.servicio ? (nodoServicio(pagina.servicio, ruta) as Record<string, unknown>) : null;
  if (servicio && typeof pagina.precioDesde === 'number') {
    servicio['offers'] = {
      '@type': 'Offer',
      url: urlCanonica(ruta),
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: pagina.precioDesde,
        priceCurrency: 'EUR',
      },
    };
  }

  return {
    '@context': CONTEXTO,
    '@graph': [
      nodoPagina(ruta, pagina.title ?? pagina.migas[pagina.migas.length - 1].etiqueta),
      nodoMigas(pagina.migas),
      ...(servicio ? [servicio] : []),
      ...(pagina.articulo
        ? [
            {
              '@type': 'Article',
              headline: pagina.articulo.titulo,
              description: pagina.articulo.descripcion,
              image: SITE_URL + pagina.articulo.imagen,
              datePublished: pagina.articulo.publicado,
              dateModified: REVISION.iso,
              inLanguage: 'es-ES',
              mainEntityOfPage: { '@id': urlCanonica(ruta) + '#pagina' },
              author: { '@type': 'Organization', name: 'Equipo de ' + NEGOCIO.nombre, url: SITE_URL + '/' },
              publisher: { ...REFERENCIA_EMPRESA, logo: SITE_URL + NEGOCIO.logo },
            },
          ]
        : []),
      ...(pagina.faqs?.length ? [nodoFaq(pagina.faqs)] : []),
    ],
  };
}
