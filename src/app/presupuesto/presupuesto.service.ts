import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

import { Servicio } from '../datos/catalogo-servicios';
import { DatosPrevios } from './modelo';

export type { DatosPrevios } from './modelo';

export interface PeticionPresupuesto {
  servicio?: Servicio;
  datos?: DatosPrevios;
  /** Reapertura tras recargar la página: no cuenta como una apertura nueva. */
  reanudar?: boolean;
}

/** Claves de sessionStorage del formulario. */
export const CLAVE_ESTADO = 'm360-presupuesto';
export const CLAVE_ABIERTO = 'm360-presupuesto-abierto';
const CLAVE_UTM = 'm360-utm';

export type Utm = Partial<Record<'utm_source' | 'utm_medium' | 'utm_campaign', string>>;

/** sessionStorage puede fallar (modo privado, bloqueos): nunca rompe la página. */
export const almacen = {
  leer(clave: string): string | null {
    try {
      return sessionStorage.getItem(clave);
    } catch {
      return null;
    }
  },
  guardar(clave: string, valor: string): void {
    try {
      sessionStorage.setItem(clave, valor);
    } catch {
      /* sin almacenamiento: el formulario funciona igual, solo no recuerda el progreso */
    }
  },
  borrar(clave: string): void {
    try {
      sessionStorage.removeItem(clave);
    } catch {
      /* nada que borrar */
    }
  },
};

/** Abre el formulario de presupuesto desde cualquier página o componente. */
@Injectable({ providedIn: 'root' })
export class PresupuestoService {
  private readonly esNavegador = isPlatformBrowser(inject(PLATFORM_ID));

  readonly abierto = signal(false);
  /** Última petición; cada apertura crea un objeto nuevo y el formulario reacciona a él. */
  readonly peticion = signal<PeticionPresupuesto | null>(null);
  /** Lo que la página actual deja elegido (servicio, zona, ruta) para cualquier botón de presupuesto. */
  readonly preseleccion = signal<PeticionPresupuesto | null>(null);

  constructor() {
    if (!this.esNavegador) return;
    this.guardarUtm();
    // Si recargó con el formulario abierto, se vuelve a abrir donde estaba.
    if (almacen.leer(CLAVE_ABIERTO) === '1' && almacen.leer(CLAVE_ESTADO)) {
      setTimeout(() => {
        this.peticion.set({ reanudar: true });
        this.abierto.set(true);
      }, 0);
    }
  }

  /** Abre el formulario. Sin argumentos, usa lo que haya dejado elegido la página actual. */
  abrir(servicioPreseleccionado?: Servicio, datos?: DatosPrevios): void {
    const pre = this.preseleccion();
    const servicio = servicioPreseleccionado ?? pre?.servicio;
    const mismoServicio = !servicioPreseleccionado || servicioPreseleccionado === pre?.servicio;
    this.peticion.set({ servicio, datos: datos ?? (mismoServicio ? pre?.datos : undefined) });
    this.abierto.set(true);
    if (this.esNavegador) almacen.guardar(CLAVE_ABIERTO, '1');
  }

  cerrar(): void {
    this.abierto.set(false);
    if (this.esNavegador) almacen.borrar(CLAVE_ABIERTO);
  }

  /** UTM de la URL de entrada: se guardan para la sesión, porque al navegar desaparecen. */
  utm(): Utm {
    try {
      return JSON.parse(almacen.leer(CLAVE_UTM) ?? '{}') as Utm;
    } catch {
      return {};
    }
  }

  private guardarUtm(): void {
    const params = new URLSearchParams(location.search);
    const utm: Utm = {};
    for (const clave of ['utm_source', 'utm_medium', 'utm_campaign'] as const) {
      const valor = params.get(clave);
      if (valor) utm[clave] = valor.slice(0, 120);
    }
    if (Object.keys(utm).length) almacen.guardar(CLAVE_UTM, JSON.stringify(utm));
  }
}
