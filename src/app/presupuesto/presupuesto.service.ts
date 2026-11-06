import { Injectable, signal } from '@angular/core';

import { Servicio } from '../datos/servicios';

export interface PeticionPresupuesto {
  servicio?: Servicio;
}

/** Abre el formulario de presupuesto desde cualquier página o componente. */
@Injectable({ providedIn: 'root' })
export class PresupuestoService {
  readonly abierto = signal(false);
  /** Última petición; cada apertura crea un objeto nuevo y el formulario reacciona a él. */
  readonly peticion = signal<PeticionPresupuesto | null>(null);

  abrir(servicio?: Servicio): void {
    this.peticion.set({ servicio });
    this.abierto.set(true);
  }

  cerrar(): void {
    this.abierto.set(false);
  }
}
