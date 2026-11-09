/** Lista todos los datos marcados como PENDIENTE en el código. Uso: npm run pendientes */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const encontrados = [];

function recorrer(dir) {
  for (const nombre of readdirSync(dir)) {
    const ruta = join(dir, nombre);
    if (statSync(ruta).isDirectory()) {
      recorrer(ruta);
      continue;
    }
    if (!/\.(ts|html)$/.test(nombre) || nombre === 'pendiente.ts') continue;

    const lineas = readFileSync(ruta, 'utf8').split(/\r?\n/);
    lineas.forEach((linea, i) => {
      // Textos de respaldo de un PENDIENTE que ya aparece en otro archivo.
      if (/\?\?\s*'\[PENDIENTE/.test(linea)) return;
      // Llamadas repartidas en varias líneas: la descripción va en la siguiente.
      const completa = /PENDIENTE(<[^>]*>)?\(\s*$/.test(linea) ? linea + (lineas[i + 1] ?? '') : linea;
      for (const m of completa.matchAll(/PENDIENTE(?:<[^>]*>)?\(\s*(['"`])((?:(?!\1).)+)\1/g)) {
        encontrados.push(`${relative(RAIZ, ruta).replace(/\\/g, '/')}:${i + 1}  ${m[2]}`);
      }
      const marca = completa.match(/\[PENDIENTE: ([^\]]+)\]/);
      if (marca) encontrados.push(`${relative(RAIZ, ruta).replace(/\\/g, '/')}:${i + 1}  ${marca[1]}`);
    });
  }
}

recorrer(join(RAIZ, 'src'));
console.log(`${encontrados.length} datos pendientes:\n`);
for (const e of encontrados) console.log('  ' + e);
