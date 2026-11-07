import type { Faq } from '../compartido/faq-acordeon';
import { NEGOCIO, SITE_URL, TELEFONO } from '../datos/contacto';

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
      item: SITE_URL + m.ruta,
    })),
  };
}

function nodoServicio(s: PaginaConServicio['servicio'], ruta: string): object {
  return {
    '@type': 'Service',
    name: s.nombre,
    description: s.descripcion,
    serviceType: s.nombre,
    url: SITE_URL + ruta,
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

/** Páginas internas: migas siempre; Service y FAQPage cuando la página los tiene. */
export function jsonLdPagina(pagina: {
  path: string;
  migas: readonly { etiqueta: string; ruta: string }[];
  faqs?: readonly Faq[];
  servicio?: PaginaConServicio['servicio'];
}): object {
  const ruta = '/' + pagina.path;

  return {
    '@context': CONTEXTO,
    '@graph': [
      nodoMigas(pagina.migas),
      ...(pagina.servicio ? [nodoServicio(pagina.servicio, ruta)] : []),
      ...(pagina.faqs?.length ? [nodoFaq(pagina.faqs)] : []),
    ],
  };
}
