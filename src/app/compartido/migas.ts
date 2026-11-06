import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Migas de pan visibles. Sus datos coinciden con el BreadcrumbList de la página. */
@Component({
  selector: 'app-migas',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="migas" [class.oscuras]="oscuras()" aria-label="Migas de pan">
      <ol>
        @for (m of migas(); track m.ruta; let ultima = $last) {
          <li>
            @if (ultima) {
              <span aria-current="page">{{ m.etiqueta }}</span>
            } @else {
              <a [routerLink]="m.ruta">{{ m.etiqueta }}</a>
            }
          </li>
        }
      </ol>
    </nav>
  `,
  styles: `
    :host {
      display: block;
    }
    ol {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 0;
      margin: 0;
      padding: 0;
      list-style: none;
      color: var(--muted);
      font-size: 13px;
    }
    li:not(:last-child)::after {
      content: '/';
      margin: 0 8px;
      opacity: 0.6;
    }
    a {
      text-decoration: underline;
      text-underline-offset: 3px;
    }
    a:hover {
      color: var(--blue);
    }
    span {
      font-weight: 700;
    }
    .oscuras ol {
      color: rgba(255, 255, 255, 0.82);
    }
    .oscuras a:hover {
      color: #fff;
    }
  `,
})
export class Migas {
  readonly migas = input.required<readonly { etiqueta: string; ruta: string }[]>();
  /** Para colocarlas sobre un fondo oscuro. */
  readonly oscuras = input(false);
}
