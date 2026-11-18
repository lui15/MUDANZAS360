/**
 * Revisa las páginas /servicio/zona/:
 *   - que cada zona publicada tenga los 10 servicios y entre 5 y 8 preguntas por página;
 *   - que cada página tenga al menos MIN_PALABRAS palabras propias;
 *   - que no haya párrafos repetidos ni casi iguales entre páginas (ni dentro de una zona ni
 *     entre zonas).
 *
 *   node scripts/revisar-locales.mjs              Informe completo.
 *   node scripts/revisar-locales.mjs --resumen    Solo los problemas.
 *
 * También lo usa generar-sitemap.mjs para añadir las páginas al sitemap.
 */
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export const MIN_PALABRAS = 800;
const SIMILITUD_MAX = 0.5;

/** Carga servicios, zonas y todos los textos publicados. */
export async function cargarLocales() {
  const { build } = await import('esbuild');
  const carpeta = mkdtempSync(join(tmpdir(), 'locales-'));
  const salida = join(carpeta, 'locales.mjs');
  await build({
    stdin: {
      contents: `
        import { CARGADORES, PAGINAS_LOCALES } from './src/app/contenido/indice';
        export { SERVICIOS_LOCALES } from './src/app/contenido/servicios';
        export { ZONAS_LOCALES } from './src/app/contenido/zonas';
        export { descripcionLocal, tituloLocal } from './src/app/contenido/meta-local';
        export { PAGINAS_LOCALES };
        export async function textos() {
          const res = {};
          for (const [zona, cargar] of Object.entries(CARGADORES)) res[zona] = await cargar();
          return res;
        }
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
  const m = await import(pathToFileURL(salida).href);
  const textos = await m.textos();
  rmSync(carpeta, { recursive: true, force: true });
  return { SERVICIOS: m.SERVICIOS_LOCALES, ZONAS: m.ZONAS_LOCALES, PAGINAS: m.PAGINAS_LOCALES, textos, titulo: m.tituloLocal, descripcion: m.descripcionLocal };
}

const palabras = (t) => t.split(/\s+/).filter(Boolean).length;

/** Todos los textos visibles propios de una página, en párrafos. */
export function parrafosDe(c) {
  return [
    ...c.intro,
    ...c.zona.flatMap((a) => a.parrafos),
    ...c.proceso.map((p) => p.texto),
    ...c.incluye,
    ...c.precio,
    ...c.faqs.map((f) => f.respuesta),
  ];
}

export function contarPalabras(c, servicio) {
  return [
    ...parrafosDe(c),
    ...c.zona.map((a) => a.titulo),
    ...c.proceso.map((p) => p.titulo),
    ...c.faqs.map((f) => f.pregunta),
    ...servicio.incluye,
    servicio.precio,
  ].reduce((s, t) => s + palabras(t), 0);
}

const normalizar = (t) =>
  t
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9ñ ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

/** Conjunto de grupos de 4 palabras seguidas, para medir parecido entre párrafos. */
function tejas(t) {
  const w = normalizar(t).split(' ');
  const s = new Set();
  for (let i = 0; i + 3 < w.length; i++) s.add(w.slice(i, i + 4).join(' '));
  return s;
}

function parecido(a, b) {
  if (!a.size || !b.size) return 0;
  let comun = 0;
  for (const x of a) if (b.has(x)) comun++;
  return comun / Math.min(a.size, b.size);
}

export function revisar({ SERVICIOS, ZONAS, PAGINAS, textos, titulo, descripcion }) {
  const problemas = [];
  const filas = [];
  const todos = [];

  for (const { servicio, zona } of PAGINAS) {
    const s = SERVICIOS.find((x) => x.slug === servicio);
    const z = ZONAS.find((x) => x.slug === zona);
    const c = textos[zona]?.paginas?.[servicio];
    const id = `/${servicio}/${zona}/`;
    if (!s || !z) {
      problemas.push(`${id}: servicio o zona sin definir`);
      continue;
    }
    if (!c) {
      problemas.push(`${id}: falta su texto en contenido/zonas/${zona}.ts`);
      continue;
    }
    const n = contarPalabras(c, s);
    const t = titulo(s.nombre, z.nombre);
    const d = descripcion(s.nombre, z.nombre, c.gancho);
    filas.push({ id, n, t, d });
    if (t.length > 60) problemas.push(`${id}: title de ${t.length} caracteres`);
    if (d.length < 140 || d.length > 158) problemas.push(`${id}: description de ${d.length} caracteres`);
    if (n < MIN_PALABRAS) problemas.push(`${id}: ${n} palabras (mínimo ${MIN_PALABRAS})`);
    if (c.faqs.length < 5 || c.faqs.length > 8) problemas.push(`${id}: ${c.faqs.length} preguntas (de 5 a 8)`);
    if (c.gancho.length > 64) problemas.push(`${id}: gancho de ${c.gancho.length} caracteres`);
    for (const p of parrafosDe(c)) if (palabras(p) >= 12) todos.push({ id, p, t: tejas(p) });
  }

  for (const campo of ['t', 'd']) {
    const vistos = new Map();
    for (const f of filas) {
      if (vistos.has(f[campo])) problemas.push(`${f.id}: ${campo === 't' ? 'title' : 'description'} repetida con ${vistos.get(f[campo])}`);
      vistos.set(f[campo], f.id);
    }
  }

  // Párrafos repetidos o casi iguales entre páginas distintas.
  for (let i = 0; i < todos.length; i++) {
    for (let j = i + 1; j < todos.length; j++) {
      if (todos[i].id === todos[j].id) continue;
      const sim = parecido(todos[i].t, todos[j].t);
      if (sim >= SIMILITUD_MAX) {
        problemas.push(
          `Párrafo parecido (${Math.round(sim * 100)} %) en ${todos[i].id} y ${todos[j].id}:
     A: «${todos[i].p}»
     B: «${todos[j].p}»`,
        );
      }
    }
  }
  return { problemas, filas };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const datos = await cargarLocales();
  const { problemas, filas } = revisar(datos);
  if (!process.argv.includes('--resumen')) {
    for (const f of filas) console.log(`${String(f.n).padStart(5)}  ${f.id}`);
    const total = filas.reduce((s, f) => s + f.n, 0);
    console.log(`\n${filas.length} páginas, ${total} palabras, media ${Math.round(total / (filas.length || 1))}.`);
  }
  if (problemas.length) {
    console.log(`\n${problemas.length} problemas:`);
    for (const p of problemas) console.log(' - ' + p);
    process.exitCode = 1;
  } else console.log('Sin problemas: ninguna página corta y ningún párrafo repetido.');
}
