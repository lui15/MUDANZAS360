import { Injectable, signal } from '@angular/core';

import { Servicio } from '../datos/catalogo-servicios';

/** Campos del formulario que otra página puede dejar rellenos (por ejemplo, la calculadora). */
export interface DatosPrevios {
  tipoVivienda?: string;
  habitaciones?: string;
  origenPlanta?: string;
  ascensorOrigen?: string;
  destinoPlanta?: string;
  ascensorDestino?: string;
  localidad?: string;
  detalles?: string;
}

export interface PeticionPresupuesto {
  servicio?: Servicio;
  datos?: DatosPrevios;
}

/** Abre el formulario de presupuesto desde cualquier página o componente. */
@Injectable({ providedIn: 'root' })
export class PresupuestoService {
  readonly abierto = signal(false);
  /** Última petición; cada apertura crea un objeto nuevo y el formulario reacciona a él. */
  readonly peticion = signal<PeticionPresupuesto | null>(null);

  abrir(servicioPreseleccionado?: Servicio, datos?: DatosPrevios): void {
    this.peticion.set({ servicio: servicioPreseleccionado, datos });
    this.abierto.set(true);
  }

  cerrar(): void {
    this.abierto.set(false);
  }
}
