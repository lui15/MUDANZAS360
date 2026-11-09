import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { FaqAcordeon, Faq } from '../compartido/faq-acordeon';
import { Migas } from '../compartido/migas';
import { REVISION } from '../datos/contacto';
import {
  EXTRAS,
  ExtraId,
  PRECIO_LOCAL,
  RUTAS_PRECIO,
  Rango,
  TIPOS_VIVIENDA,
  TipoViviendaId,
  textoRango,
} from '../datos/precios';
import { jsonLdPagina } from '../landing/json-ld';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { SeoService } from '../seo.service';

const PLANTAS = [
  { valor: 'Bajo', numero: 0 },
  { valor: '1ª planta', numero: 1 },
  { valor: '2ª planta', numero: 2 },
  { valor: '3ª planta', numero: 3 },
  { valor: '4ª o superior', numero: 4 },
] as const;

const FAQS: Faq[] = [
  {
    pregunta: '¿El resultado de la calculadora es un presupuesto?',
    respuesta:
      'No. Es un rango orientativo calculado con nuestros precios de referencia. El precio definitivo se confirma en tu presupuesto, cuando conocemos el volumen real, los accesos y la fecha.',
  },
  {
    pregunta: '¿Por qué a veces no aparece una cifra?',
    respuesta:
      'Porque todavía no publicamos precio de referencia para esa combinación. En ese caso te damos el precio en tu presupuesto, que es gratuito y no te compromete.',
  },
  {
    pregunta: '¿De dónde salen los metros cúbicos?',
    respuesta:
      'Son volúmenes orientativos según el tamaño habitual de cada tipo de vivienda. Si tienes muchos muebles o muy pocos, el volumen real puede ser distinto; en nuestra guía te explicamos cómo calcularlo.',
  },
];

/** Calculadora orientativa. Usa los mismos datos que la página de precios (datos/precios.ts). */
@Component({
  selector: 'app-calculadora-page',
  standalone: true,
  imports: [FormsModule, RouterLink, Migas, FaqAcordeon],
  templateUrl: './calculadora-page.html',
  styleUrl: './calculadora-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculadoraPage {
  private readonly presupuesto = inject(PresupuestoService);

  readonly revision = REVISION.texto;
  readonly faqs = FAQS;
  readonly migas = [
    { etiqueta: 'Inicio', ruta: '/' },
    { etiqueta: 'Precios', ruta: '/precios/' },
    { etiqueta: 'Calculadora de mudanza', ruta: '/calculadora-mudanza/' },
  ];

  readonly tipos = TIPOS_VIVIENDA;
  readonly plantas = PLANTAS;
  readonly extras = EXTRAS.filter((e) => e.id !== 'sin-ascensor');
  readonly destinos = ['Madrid', ...RUTAS_PRECIO.map((r) => r.destino)];
  readonly origenes = ['Madrid capital', 'Otro municipio de la Comunidad de Madrid'];

  readonly tipo = signal<TipoViviendaId>('piso-1-2');
  readonly origen = signal(this.origenes[0]);
  readonly destino = signal('Madrid');
  readonly plantaOrigen = signal<string>('Bajo');
  readonly ascensorOrigen = signal<'Sí' | 'No'>('Sí');
  readonly plantaDestino = signal<string>('Bajo');
  readonly ascensorDestino = signal<'Sí' | 'No'>('Sí');
  readonly extrasElegidos = signal<ReadonlySet<ExtraId>>(new Set());

  readonly vivienda = computed(() => TIPOS_VIVIENDA.find((t) => t.id === this.tipo())!);
  readonly volumen = computed(() => textoRango(this.vivienda().m3, 'm³'));

  /** Plantas que hay que subir o bajar a pie, sumando origen y destino. */
  readonly plantasSinAscensor = computed(() => {
    const n = (valor: string) => PLANTAS.find((p) => p.valor === valor)?.numero ?? 0;
    return (
      (this.ascensorOrigen() === 'No' ? n(this.plantaOrigen()) : 0) +
      (this.ascensorDestino() === 'No' ? n(this.plantaDestino()) : 0)
    );
  });

  /** Partidas que forman el precio, con su rango (o sin cifra si aún no está publicado). */
  readonly partidas = computed(() => {
    const destino = this.destino();
    const base =
      destino === 'Madrid'
        ? PRECIO_LOCAL[this.tipo()]
        : RUTAS_PRECIO.find((r) => r.destino === destino)!.precios[this.tipo()];
    const lista: { nombre: string; rango: Rango }[] = [
      { nombre: destino === 'Madrid' ? 'Mudanza en Madrid' : `Mudanza Madrid - ${destino}`, rango: base },
    ];

    for (const extra of this.extras) {
      if (this.extrasElegidos().has(extra.id)) {
        lista.push({ nombre: extra.nombre, rango: extra.precio });
      }
    }

    const plantas = this.plantasSinAscensor();
    if (plantas > 0) {
      const r = EXTRAS.find((e) => e.id === 'sin-ascensor')!.precio;
      lista.push({
        nombre: `Sin ascensor (${plantas} ${plantas === 1 ? 'planta' : 'plantas'})`,
        rango: { min: r.min === null ? null : r.min * plantas, max: r.max === null ? null : r.max * plantas },
      });
    }
    return lista;
  });

  /** Total orientativo, solo si todas las partidas tienen cifra. */
  readonly total = computed<Rango | null>(() => {
    const p = this.partidas();
    if (p.some((x) => x.rango.min === null || x.rango.max === null)) {
      return null;
    }
    return {
      min: p.reduce((s, x) => s + (x.rango.min ?? 0), 0),
      max: p.reduce((s, x) => s + (x.rango.max ?? 0), 0),
    };
  });

  readonly textoTotal = computed(() => {
    const t = this.total();
    return t ? textoRango(t) : null;
  });

  readonly texto = textoRango;

  constructor() {
    inject(SeoService).update({
      title: 'Calculadora de mudanza en Madrid | Mudanzas360',
      description:
        'Calcula el volumen y un rango orientativo para tu mudanza en Madrid o a otra ciudad según vivienda, plantas y extras. Después pide tu presupuesto gratis.',
      path: '/calculadora-mudanza',
      jsonLd: jsonLdPagina({
        path: 'calculadora-mudanza',
        title: 'Calculadora de mudanza en Madrid',
        migas: this.migas,
        faqs: FAQS,
      }),
    });
  }

  alternarExtra(id: ExtraId): void {
    this.extrasElegidos.update((actual) => {
      const nuevo = new Set(actual);
      if (nuevo.has(id)) nuevo.delete(id);
      else nuevo.add(id);
      return nuevo;
    });
  }

  /** Abre el formulario con lo elegido aquí ya rellenado. */
  pedirPresupuesto(): void {
    const v = this.vivienda();
    const extras = this.extras.filter((e) => this.extrasElegidos().has(e.id)).map((e) => e.nombre);
    const detalles = [
      `Datos de la calculadora: ${v.nombre}, de ${this.origen()} a ${this.destino()}.`,
      extras.length ? `Extras: ${extras.join(', ')}.` : '',
    ]
      .filter(Boolean)
      .join(' ');

    this.presupuesto.abrir('Mudanza de vivienda', {
      tipoVivienda: v.formulario.tipoVivienda,
      habitaciones: v.formulario.habitaciones,
      origenPlanta: this.plantaOrigen(),
      ascensorOrigen: this.ascensorOrigen(),
      destinoPlanta: this.plantaDestino(),
      ascensorDestino: this.ascensorDestino(),
      localidad: this.origen() === 'Madrid capital' ? 'Madrid' : '',
      detalles,
    });
  }
}
