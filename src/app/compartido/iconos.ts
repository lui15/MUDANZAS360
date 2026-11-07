import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

const TRAZOS = {
  solicitud: 'M6 3h9l4 4v14H6zM14 3v5h5M9 12h7M9 16h7',
  presupuesto: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM15.5 8.5A4 4 0 0 0 9 12a4 4 0 0 0 6.5 3.5M7.5 11h5M7.5 13.5h5',
  fecha: 'M4 6h16v15H4zM4 10h16M8 3v5M16 3v5M8 14h3',
  embalaje: 'M3 8l9-5 9 5v9l-9 5-9-5zM3 8l9 5 9-5M12 13v9',
  transporte: 'M2 6h12v11H2zM14 10h4l4 4v3h-8zM6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  montaje: 'M14 6a4 4 0 0 0 5 5l-8 9-4-4zM5 5l3 3M3 9l2-2 4 4-2 2z',
  telefono: 'M6.6 3.5 9 3l2 4.6-1.9 1.5a11 11 0 0 0 5.8 5.8l1.5-1.9L21 15l-.5 2.4a2.6 2.6 0 0 1-2.8 2.1C10 19 5 14 4.5 6.3a2.6 2.6 0 0 1 2.1-2.8Z',
  whatsapp: 'M4 20l1.3-4.2A8 8 0 1 1 8.4 19L4 20Z',
} as const;

export type IconoId = keyof typeof TRAZOS;

@Component({
  selector: 'app-icono',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg viewBox="0 0 24 24" aria-hidden="true"><path [attr.d]="trazo()" /></svg>`,
  styles: `
    :host {
      display: inline-grid;
      place-items: center;
    }
    svg {
      width: var(--icono, 22px);
      height: var(--icono, 22px);
      fill: none;
      stroke: currentColor;
      stroke-width: 1.8;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `,
})
export class Icono {
  readonly nombre = input.required<IconoId>();
  readonly trazo = computed(() => TRAZOS[this.nombre()]);
}
