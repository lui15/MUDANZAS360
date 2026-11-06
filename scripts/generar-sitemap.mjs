/**
 * Genera public/sitemap.xml a partir de los datos de las páginas y comprueba su contenido.
 *
 *   npm run sitemap            Genera el sitemap y lista los problemas sin detener el proceso.
 *   npm run sitemap -- --estricto   Además, termina con error si hay algún problema.
 *
 * Se ejecuta antes de cada `npm run build`. Si algo falla al generarlo, se conserva el sitemap
 * del repositorio y se avisa, para que un fallo aquí nunca impida publicar la web.
 */
import { writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const estricto = process.argv.includes('--estricto');

/**
 * Fecha de la última revisión del contenido. Cámbiala cuando actualices los textos: Google solo
 * tiene en cuenta lastmod si refleja cambios reales, así que no se pone la fecha de cada compilación.
 */
const ULTIMA_REVISION = '2026-11-06';

const MAX_TITLE = 60;
const MAX_DESCRIPTION = 155;
const MIN_PALABRAS = 600;

async function cargarDatos() {
  // esbuild ya viene instalado con @angular/build: convierte los datos en TypeScript a un módulo.
  const { build } = await import('esbuild');
  const carpeta = mkdtempSync(join(tmpdir(), 'sitemap-'));
  const salida = join(carpeta, 'datos.mjs');
  await build({
    stdin: {
      contents: `
        export { PAGINAS } from './src/app/landing/landing-data';
        export { PAGINA_INICIO } from './src/app/landing/pagina-inicio';
        export { RUTAS_LANDING, RUTAS_LEGALES } from './src/app/landing/rutas';
        export { SITE_URL } from './src/app/datos/contacto';
      `,
      resolveDir: RAIZ,
      loader: 'ts',
    },
    bundle: true,
    format: 'esm',
    platform: 'node',
    outfile: salida,
    logLevel: 'silent',
  });
  const datos = await import(pathToFileURL(salida).href);
  rmSync(carpeta, { recursive: true, force: true });
  return datos;
}

function contarPalabras(p) {
  const textos = [
    p.intro,
    ...p.secciones.flatMap((s) => [
      s.titulo,
      ...s.parrafos,
      ...(s.lista ?? []),
      ...(s.subsecciones ?? []).flatMap((x) => [x.titulo, x.texto]),
    ]),
    ...p.faqs.flatMap((f) => [f.pregunta, f.respuesta]),
  ];
  return textos.join(' ').split(/\s+/).filter(Boolean).length;
}

function validar({ PAGINAS, PAGINA_INICIO, RUTAS_LANDING }) {
  const problemas = [];
  const rutas = new Set(PAGINAS.map((p) => p.path));
  const vistos = { title: new Map(), description: new Map(), h1: new Map() };

  for (const ruta of RUTAS_LANDING) {
    if (!rutas.has(ruta)) problemas.push(`Ruta registrada sin contenido: /${ruta}`);
  }
  for (const ruta of rutas) {
    if (!RUTAS_LANDING.includes(ruta)) problemas.push(`Contenido sin ruta registrada: /${ruta}`);
  }

  for (const p of [PAGINA_INICIO, ...PAGINAS]) {
    const id = `/${p.path}`;
    if (p.title.length > MAX_TITLE) problemas.push(`${id}: title de ${p.title.length} caracteres`);
    if (p.description.length > MAX_DESCRIPTION) {
      problemas.push(`${id}: description de ${p.description.length} caracteres`);
    }
    if (vistos.title.has(p.title)) problemas.push(`${id}: title repetido`);
    if (vistos.description.has(p.description)) problemas.push(`${id}: description repetida`);
    vistos.title.set(p.title, id);
    vistos.description.set(p.description, id);
  }

  for (const p of PAGINAS) {
    const id = `/${p.path}`;
    const h1 = `${p.h1.linea} ${p.h1.resaltado}`;
    if (vistos.h1.has(h1)) problemas.push(`${id}: H1 repetido`);
    vistos.h1.set(h1, id);

    const palabras = contarPalabras(p);
    if (palabras < MIN_PALABRAS) problemas.push(`${id}: ${palabras} palabras (mínimo ${MIN_PALABRAS})`);

    const enlaces = [...p.relacionadas, ...(p.grupos ?? []).flatMap((g) => g.rutas), p.padre].filter(Boolean);
    for (const destino of enlaces) {
      if (!rutas.has(destino)) problemas.push(`${id}: enlace a una página que no existe (/${destino})`);
    }
    if (p.relacionadas.includes(p.path)) problemas.push(`${id}: se enlaza a sí misma`);
  }

  // Todas las páginas deben tener al menos un enlace interno desde un índice o desde otra página.
  const enlazadas = new Set(PAGINAS.flatMap((p) => [...p.relacionadas, ...(p.grupos ?? []).flatMap((g) => g.rutas)]));
  for (const p of PAGINAS) {
    if (p.tipo !== 'hub' && !enlazadas.has(p.path)) problemas.push(`/${p.path}: ninguna página la enlaza`);
  }

  return problemas;
}

function crearSitemap({ RUTAS_LANDING, RUTAS_LEGALES, SITE_URL }) {
  const urls = [
    { loc: `${SITE_URL}/` },
    ...RUTAS_LANDING.map((path) => ({ loc: `${SITE_URL}/${path}` })),
    // Indexables, pero sin prioridad frente al contenido comercial.
    ...RUTAS_LEGALES.map(({ path }) => ({ loc: `${SITE_URL}/${path}`, prioridad: '0.2' })),
  ];
  const entradas = urls.map(
    ({ loc, prioridad }) =>
      `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${ULTIMA_REVISION}</lastmod>${
        prioridad ? `\n    <priority>${prioridad}</priority>` : ''
      }\n  </url>`,
  );
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entradas.join('\n')}\n</urlset>\n`;
}

try {
  const datos = await cargarDatos();
  writeFileSync(resolve(RAIZ, 'public/sitemap.xml'), crearSitemap(datos));
  const total = 1 + datos.RUTAS_LANDING.length + datos.RUTAS_LEGALES.length;
  console.log(`Sitemap generado con ${total} URL.`);

  const problemas = validar(datos);
  if (problemas.length) {
    console.warn(`\nRevisa estos ${problemas.length} problemas de contenido:`);
    for (const problema of problemas) console.warn(`  - ${problema}`);
    if (estricto) process.exit(1);
  } else {
    console.log('Contenido correcto: títulos, descripciones, palabras y enlaces.');
  }
} catch (error) {
  if (estricto) throw error;
  console.warn('No se ha podido regenerar el sitemap; se mantiene el existente.', error.message);
}
