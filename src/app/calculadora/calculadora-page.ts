import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FaqAcordeon, Faq } from '../compartido/faq-acordeon';
import { Migas } from '../compartido/migas';
import { REVISION } from '../datos/contacto';
import {
  NOTA_PRECIOS,
  RUTAS_PRECIO,
  Rango,
  TARIFAS,
  TIPOS_VIVIENDA,
  TipoViviendaId,
  tamanoRuta,
  textoRango,
  vivienda,
} from '../datos/precios';
import { jsonLdPagina } from '../landing/json-ld';
import { conEstrella } from '../landing/metadatos';
import { ASCENSORES, Ascensor, ExtraForm, PLANTAS } from '../presupuesto/modelo';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { SeoService } from '../seo.service';

const FAQS: Faq[] = [
  {
    pregunta: '¿El resultado de la calculadora es un presupuesto?',
    respuesta:
      'No. Es un rango orientativo con nuestros precios de referencia de 2026. El precio cerrado te lo damos por escrito cuando conocemos tu caso: volumen real, accesos y fecha.',
  },
  {
    pregunta: '¿Los precios incluyen IVA?',
    respuesta: 'Sí. Todos los precios orientativos de la web son para Madrid en 2026 e incluyen el IVA.',
  },
  {
    pregunta: '¿De dónde salen los metros cúbicos?',
    respuesta:
      'Son volúmenes orientativos según el tamaño habitual de cada tipo de vivienda. Si tienes muchos muebles o muy pocos, el volumen real puede ser distinto; en nuestra guía te explicamos cómo calcularlo.',
  },
  {
    pregunta: '¿Por qué el montaje aparece aparte?',
    respuesta:
      'Porque se cobra por mueble, desde 40 € cada uno, y depende de lo complicado que sea. Te lo concretamos en el precio cerrado.',
  },
];

/** Planta numérica para el recargo: «6ª o más» cuenta como 6. */
const numeroPlanta = (p: string) => Number.parseInt(p, 10) || 0;

interface Partida {
  nombre: string;
  rango: Rango;
}

/** Calculadora orientativa. Usa exactamente los mismos datos que /precios/ (datos/precios.ts). */
@Component({
  selector: 'app-calculadora-page',
  standalone: true,
  imports: [RouterLink, Migas, FaqAcordeon],
  templateUrl: './calculadora-page.html',
  styleUrl: './calculadora-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculadoraPage {
  private readonly presupuesto = inject(PresupuestoService);

  readonly revision = REVISION.texto;
  readonly nota = NOTA_PRECIOS;
  readonly faqs = FAQS;
  readonly migas = [
    { etiqueta: 'Inicio', ruta: '/' },
    { etiqueta: 'Precios', ruta: '/precios/' },
    { etiqueta: 'Calculadora de mudanza', ruta: '/calculadora-mudanza/' },
  ];

  readonly tipos = TIPOS_VIVIENDA;
  readonly ascensores = ASCENSORES;
  readonly plantas = PLANTAS;
  readonly destinos = ['Madrid', ...RUTAS_PRECIO.map((r) => r.destino)];
  readonly t = TARIFAS;

  readonly tipo = signal<TipoViviendaId>('piso-1-2');
  readonly destino = signal('Madrid');
  readonly ascensorOrigen = signal<Ascensor>('ascensor');
  readonly plantaOrigen = signal('1ª');
  readonly ascensorDestino = signal<Ascensor>('ascensor');
  readonly plantaDestino = signal('1ª');
  readonly embalaje = signal(false);
  readonly muebles = signal(0);
  readonly elevador = signal(false);
  readonly urgente = signal(false);
  readonly guardamuebles = signal(false);

  readonly vivienda = computed(() => vivienda(this.tipo()));
  readonly volumen = computed(() => textoRango(this.vivienda().m3, 'm³'));

  /** Plantas que hay que subir o bajar a pie, sumando origen y destino. */
  readonly plantasSinAscensor = computed(
    () =>
      (this.ascensorOrigen() === 'sin-ascensor' ? numeroPlanta(this.plantaOrigen()) : 0) +
      (this.ascensorDestino() === 'sin-ascensor' ? numeroPlanta(this.plantaDestino()) : 0),
  );

  readonly base = computed<Rango>(() => {
    const destino = this.destino();
    if (destino === 'Madrid') return this.vivienda().precio;
    return RUTAS_PRECIO.find((r) => r.destino === destino)!.precios[tamanoRuta(this.tipo())];
  });

  /** Partidas con rango cerrado que forman el total. */
  readonly partidas = computed<Partida[]>(() => {
    const destino = this.destino();
    const base = this.base();
    const lista: Partida[] = [{ nombre: destino === 'Madrid' ? 'Mudanza dentro de Madrid' : `Madrid → ${destino}`, rango: base }];
    const plantas = this.plantasSinAscensor();
    if (plantas > 0) {
      const p = TARIFAS.plantaSinAscensor;
      lista.push({ nombre: `${plantas} ${plantas === 1 ? 'planta' : 'plantas'} sin ascensor`, rango: { min: p.min * plantas, max: p.max * plantas } });
    }
    if (this.embalaje()) lista.push({ nombre: 'Embalaje completo', rango: TARIFAS.embalaje });
    if (this.elevador()) lista.push({ nombre: 'Elevador exterior', rango: TARIFAS.elevador });
    if (this.urgente()) {
      const u = TARIFAS.urgentePct;
      lista.push({ nombre: `Urgente (+${u.min}-${u.max} %)`, rango: { min: Math.round((base.min * u.min) / 100), max: Math.round((base.max * u.max) / 100) } });
    }
    return lista;
  });

  readonly total = computed<Rango>(() => ({
    min: this.partidas().reduce((s, x) => s + x.rango.min, 0),
    max: this.partidas().reduce((s, x) => s + x.rango.max, 0),
  }));

  /** El montaje solo tiene precio de partida: se muestra aparte del total. */
  readonly montajeDesde = computed(() => this.muebles() * TARIFAS.montajeMueble.min);

  readonly texto = textoRango;

  constructor() {
    inject(SeoService).update({
      title: 'Calculadora de mudanza en Madrid 2026 | Mudanzas360',
      description: conEstrella('Calcula tu mudanza en Madrid con los precios de 2026.', ['cerrado', 'visita']),
      path: '/calculadora-mudanza',
      jsonLd: jsonLdPagina({
        path: 'calculadora-mudanza',
        title: 'Calculadora de mudanza en Madrid',
        migas: this.migas,
        faqs: FAQS,
      }),
    });
  }

  numero(evento: Event): number {
    return Math.max(0, Math.min(20, Number((evento.target as HTMLInputElement).value) || 0));
  }

  valor(evento: Event): string {
    return (evento.target as HTMLSelectElement).value;
  }

  /** Abre el formulario con lo elegido aquí ya puesto. */
  pedirPresupuesto(): void {
    const destino = this.destino();
    const extras: ExtraForm[] = [];
    if (this.embalaje()) extras.push('embalaje');
    if (this.muebles() > 0) extras.push('montaje');
    if (this.guardamuebles()) extras.push('guardamuebles');
    const notas = [
      this.muebles() > 0 ? `${this.muebles()} muebles para desmontar y montar.` : '',
      this.elevador() ? 'Puede hacer falta elevador exterior.' : '',
    ]
      .filter(Boolean)
      .join(' ');

    this.presupuesto.abrir(destino === 'Madrid' ? 'Mudanza completa' : 'Mudanza nacional', {
      tamano: this.tipo(),
      destino: destino === 'Madrid' ? '' : destino,
      ascensorOrigen: this.ascensorOrigen(),
      plantaOrigen: this.ascensorOrigen() === 'sin-ascensor' ? this.plantaOrigen() : '',
      ascensorDestino: this.ascensorDestino(),
      plantaDestino: this.ascensorDestino() === 'sin-ascensor' ? this.plantaDestino() : '',
      extras,
      ...(this.urgente() ? { cuando: 'pronto' as const } : {}),
      ...(notas ? { notas } : {}),
    });
  }
}
