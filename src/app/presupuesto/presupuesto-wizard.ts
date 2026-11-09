import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  effect,
  inject,
  untracked,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AnaliticaService } from '../compartido/analitica.service';
import { enlaceWhatsApp } from '../datos/contacto';
import { PASOS_PRESUPUESTO, Servicio, SERVICIOS_FORMULARIO } from '../datos/catalogo-servicios';
import { DatosPrevios, PresupuestoService } from './presupuesto.service';

/* =====================================================
   CONFIGURACIÓN · CENTRAL DE SOLICITUDES (Supabase)
   Solo clave pública (publishable). Nunca la service_role.
   La seguridad la aplican las políticas RLS de public.requests.
===================================================== */

const SUPABASE_URL = 'https://obdetimymgchgqnlxbew.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_vGYxgkMKDNJr1G0aq7vBMQ_lLUQfJqn';
const SUPABASE_REQUESTS_URL = `${SUPABASE_URL}/rest/v1/requests`;

/** Identificador de esta web en la columna `source` de la Central. */
const FUENTE_CENTRAL = 'mudanzas360';

/** Tiempo máximo de espera al guardar la solicitud. */
const TIEMPO_MAX_ENVIO_MS = 12000;

interface SolicitudCentral {
  source: string;
  name: string;
  phone: string;
  email: string | null;
  service: string;
  description: string | null;
  details: Record<string, unknown>;
}

/** UUID para identificar cada envío; permite reintentar sin duplicar registros. */
function nuevoId(): string {
  const c = (globalThis as { crypto?: Crypto }).crypto;

  if (c?.randomUUID) {
    return c.randomUUID();
  }

  const bytes = new Uint8Array(16);

  if (c?.getRandomValues) {
    c.getRandomValues(bytes);
  } else {
    for (let i = 0; i < 16; i++) bytes[i] = Math.floor(Math.random() * 256);
  }

  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');

  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

interface PresupuestoMudanza {
  servicio: Servicio | '';
  puntosRecogida: string[];
  direccionRecogida: string;
  direccionEntrega: string;
  localidad: string;
  localidadOtra: string;
  tipoVivienda: string;
  habitaciones: string;
  origenPlanta: string;
  destinoPlanta: string;
  ascensorOrigen: string;
  ascensorDestino: string;
  fecha: string;
  flexibilidad: string;
  detalles: string;
  nombre: string;
  telefono: string;
  email: string;
}

/** Formulario de presupuesto de 5 pasos. Se abre desde cualquier página con PresupuestoService. */
@Component({
  selector: 'app-presupuesto-wizard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './presupuesto-wizard.html',
  styleUrl: './presupuesto-wizard.css',
})
export class PresupuestoWizard implements OnDestroy {
  private readonly servicio = inject(PresupuestoService);
  private readonly analitica = inject(AnaliticaService);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly cdr = inject(ChangeDetectorRef);

  pasoActual = 0;
  enviado = false;
  intentoContinuar = false;

  // Paso más avanzado ya registrado en Analytics: volver atrás y avanzar no lo repite
  private pasoRegistrado = 0;

  // Ventana modal del formulario (pantalla completa)
  formAbierto = false;

  // Estado del envío a Supabase
  enviando = false;
  errorEnvio = false;
  // Detalle técnico del último error
  detalleError = '';

  // Elemento que tenía el foco antes de abrir el formulario (para devolvérselo al cerrar)
  private ultimoFoco: HTMLElement | null = null;

  /**
   * Identificador del último envío. Si el guardado se corta por la red y el cliente
   * reintenta con los mismos datos, se reutiliza el mismo id y no se duplica el registro.
   */
  private ultimoEnvio: { id: string; firma: string } | null = null;

  readonly pasos = PASOS_PRESUPUESTO;

  // Localidades de recogida (la última permite escribir otra)
  readonly localidades: string[] = [
    'Madrid',
    'Getafe',
    'Alcorcón',
    'Leganés',
    'Móstoles',
    'Fuenlabrada',
    'Alcalá de Henares',
    'Pozuelo de Alarcón',
    'Rivas-Vaciamadrid',
    'Otra localidad',
  ];

  /** Localidad real: la elegida, o la escrita si marcó "Otra localidad". */
  localidadFinal(p: PresupuestoMudanza = this.presupuesto): string {
    return p.localidad === 'Otra localidad' ? p.localidadOtra.trim() : p.localidad;
  }

  // Opciones de "¿Dónde empieza tu mudanza?" (selección múltiple)
  readonly tiposRecogida: string[] = [
    'Mi vivienda',
    'Oficina o local',
    'Tienda o almacén',
    'Guardamuebles',
    'Otro lugar',
  ];

  readonly servicios = SERVICIOS_FORMULARIO;

  presupuesto: PresupuestoMudanza = this.nuevoPresupuesto();

  constructor() {
    // Cada petición del servicio es un objeto nuevo: abre el formulario aunque repita servicio.
    effect(() => {
      const peticion = this.servicio.peticion();
      if (peticion) {
        untracked(() => this.abrirFormulario(peticion.servicio, peticion.datos));
      }
    });
  }

  get progreso(): number {
    return ((this.pasoActual + 1) / this.pasos.length) * 100;
  }

  get fechaMinima(): string {
    const hoy = new Date();
    const local = new Date(hoy.getTime() - hoy.getTimezoneOffset() * 60000);

    return local.toISOString().slice(0, 10);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.formAbierto) {
      this.cerrarFormulario();
    }
  }

  // Mantiene el foco dentro de la ventana modal mientras está abierta
  @HostListener('document:keydown', ['$event'])
  onKeydown(evento: KeyboardEvent): void {
    if (!this.formAbierto || evento.key !== 'Tab') {
      return;
    }

    const contenedor = this.host.nativeElement.querySelector<HTMLElement>('.wizard-dialog');

    if (!contenedor) {
      return;
    }

    const enfocables = Array.from(
      contenedor.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((el) => el.offsetParent !== null);

    if (enfocables.length === 0) {
      return;
    }

    const primero = enfocables[0];
    const ultimo = enfocables[enfocables.length - 1];
    const activo = document.activeElement;

    if (evento.shiftKey && (activo === primero || activo === contenedor)) {
      evento.preventDefault();
      ultimo.focus();
    } else if (!evento.shiftKey && activo === ultimo) {
      evento.preventDefault();
      primero.focus();
    }
  }

  ngOnDestroy(): void {
    // Por si el componente se destruye con el formulario abierto
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  // =====================================================
  // VENTANA MODAL DEL FORMULARIO
  // =====================================================

  /** Abre el formulario. Si llega un servicio, lo deja elegido y salta al paso 2. */
  private abrirFormulario(servicio?: Servicio, datos?: DatosPrevios): void {
    if (typeof document === 'undefined') {
      return;
    }

    this.ultimoFoco = document.activeElement as HTMLElement | null;
    this.analitica.evento('form_open');

    // Si la solicitud anterior ya se envió, se empieza de cero
    if (this.enviado) {
      this.reiniciarFormulario();
    }

    this.errorEnvio = false;
    this.intentoContinuar = false;

    // Datos que llegan rellenos desde otra página (por ejemplo, la calculadora)
    if (datos) {
      for (const [campo, valor] of Object.entries(datos)) {
        if (valor) {
          (this.presupuesto as unknown as Record<string, string>)[campo] = valor;
        }
      }
    }

    if (servicio) {
      this.presupuesto.servicio = servicio;
      this.pasoActual = 1;
      this.registrarAvance();
    }

    this.formAbierto = true;
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      this.host.nativeElement.querySelector<HTMLElement>('.wizard-dialog')?.focus();
    }, 60);

    this.cdr.markForCheck();
  }

  cerrarFormulario(): void {
    // No se cierra mientras se está guardando la solicitud
    if (this.enviando) {
      return;
    }

    const habiaTerminado = this.enviado;

    this.formAbierto = false;
    this.servicio.cerrar();

    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }

    if (habiaTerminado) {
      this.reiniciarFormulario();
    }

    setTimeout(() => this.ultimoFoco?.focus?.(), 0);
  }

  // =====================================================
  // SELECCIONAR SERVICIO
  // =====================================================

  seleccionarServicio(servicio: Servicio): void {
    this.presupuesto.servicio = servicio;
    this.intentoContinuar = false;
  }

  // =====================================================
  // SELECCIÓN MÚLTIPLE: DÓNDE EMPIEZA LA MUDANZA
  // =====================================================

  alternarPuntoRecogida(punto: string): void {
    const actuales = this.presupuesto.puntosRecogida;

    this.presupuesto.puntosRecogida = actuales.includes(punto)
      ? actuales.filter((p) => p !== punto)
      : [...actuales, punto];
  }

  // =====================================================
  // SIGUIENTE PASO
  // =====================================================

  siguiente(): void {
    this.intentoContinuar = true;

    if (!this.pasoValido()) {
      return;
    }

    this.intentoContinuar = false;

    if (this.pasoActual < this.pasos.length - 1) {
      this.pasoActual++;
      this.registrarAvance();
      this.scrollFormulario();
    }
  }

  // =====================================================
  // PASO ANTERIOR
  // =====================================================

  anterior(): void {
    this.intentoContinuar = false;
    this.errorEnvio = false;

    if (this.pasoActual > 0) {
      this.pasoActual--;
      this.scrollFormulario();
    }
  }

  // =====================================================
  // IR A UN PASO ANTERIOR
  // =====================================================

  irAPaso(indice: number): void {
    if (indice >= 0 && indice < this.pasoActual) {
      this.pasoActual = indice;
      this.intentoContinuar = false;
      this.errorEnvio = false;
      this.scrollFormulario();
    }
  }

  // =====================================================
  // DESPLAZAMIENTO AL PRINCIPIO DEL FORMULARIO
  // =====================================================

  private scrollFormulario(): void {
    setTimeout(() => {
      this.host.nativeElement.querySelector<HTMLElement>('.wizard-body')?.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 50);
  }

  // =====================================================
  // VALIDACIONES
  // =====================================================

  pasoValido(indice: number = this.pasoActual): boolean {
    const p = this.presupuesto;

    switch (indice) {
      case 0:
        return !!p.servicio;

      case 1:
        return (
          !!this.localidadFinal(p) &&
          p.puntosRecogida.length > 0 &&
          !!p.direccionRecogida.trim() &&
          !!p.direccionEntrega.trim()
        );

      case 2:
        return (
          !!p.tipoVivienda &&
          !!p.habitaciones &&
          !!p.origenPlanta &&
          !!p.ascensorOrigen &&
          !!p.destinoPlanta &&
          !!p.ascensorDestino &&
          !!p.fecha &&
          p.fecha >= this.fechaMinima &&
          !!p.flexibilidad
        );

      case 3:
        // La descripción ahora es obligatoria
        return !!p.detalles.trim();

      case 4:
        return (
          !!p.nombre.trim() &&
          this.telefonoValido(p.telefono) &&
          (!p.email.trim() || this.emailValido(p.email))
        );

      default:
        return false;
    }
  }

  // =====================================================
  // VALIDAR TELÉFONO
  // =====================================================

  telefonoValido(telefono: string): boolean {
    return /^[+]?[\d\s().-]{9,16}$/.test(telefono.trim());
  }

  // =====================================================
  // VALIDAR EMAIL
  // =====================================================

  emailValido(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  // =====================================================
  // ENVÍO A LA CENTRAL DE SOLICITUDES (SUPABASE)
  // =====================================================

  /** Construye el registro tal y como lo espera la tabla public.requests. */
  private crearSolicitud(): SolicitudCentral {
    const p = this.presupuesto;

    return {
      source: FUENTE_CENTRAL,
      name: p.nombre.trim(),
      phone: p.telefono.trim(),
      email: p.email.trim() || null,
      service: p.servicio,
      // Los detalles escritos por el cliente se guardan aquí.
      description: p.detalles.trim() || null,
      details: {
        localidad: this.localidadFinal(p),
        puntos_recogida: [...p.puntosRecogida],
        direccion_recogida: p.direccionRecogida.trim(),
        direccion_entrega: p.direccionEntrega.trim(),
        tipo_vivienda: p.tipoVivienda || null,
        tamano: p.habitaciones || null,
        planta_origen: p.origenPlanta || null,
        ascensor_origen: p.ascensorOrigen || null,
        planta_destino: p.destinoPlanta || null,
        ascensor_destino: p.ascensorDestino || null,
        fecha: p.fecha,
        flexibilidad: p.flexibilidad,
      },
    };
  }

  /**
   * Guarda la solicitud en Supabase con una llamada directa a su API (sin librería).
   * - Cabecera "Prefer: return=minimal": no se lee nada de vuelta (los visitantes
   *   pueden insertar pero no leer, por las políticas RLS).
   * - Si un reintento llega con un id ya guardado (error 23505), la solicitud ya
   *   existe y se considera guardada, sin duplicarla.
   * - Cualquier otro error, o pasar el tiempo máximo, lanza una excepción.
   */
  private async guardarEnCentral(solicitud: SolicitudCentral): Promise<void> {
    const firma = JSON.stringify(solicitud);

    if (!this.ultimoEnvio || this.ultimoEnvio.firma !== firma) {
      this.ultimoEnvio = { id: nuevoId(), firma };
    }

    const registro = { id: this.ultimoEnvio.id, ...solicitud };

    const controlador = new AbortController();
    const temporizador = setTimeout(() => controlador.abort(), TIEMPO_MAX_ENVIO_MS);

    try {
      const respuesta = await fetch(SUPABASE_REQUESTS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: SUPABASE_ANON_KEY,
          Prefer: 'return=minimal',
        },
        body: JSON.stringify(registro),
        signal: controlador.signal,
      });

      if (respuesta.ok) {
        return;
      }

      const texto = await respuesta.text();

      // 23505 = ese id ya existe: la solicitud ya estaba guardada
      if (respuesta.status === 409 && texto.includes('23505')) {
        return;
      }

      throw new Error(`HTTP ${respuesta.status} ${texto}`);
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        throw new Error('TIMEOUT_ENVIO');
      }

      throw error;
    } finally {
      clearTimeout(temporizador);
    }
  }

  /** Texto corto con la causa del error, para mostrarlo bajo el aviso. */
  private describirError(error: unknown): string {
    const mensaje = error instanceof Error ? error.message : String(error);

    if (mensaje === 'TIMEOUT_ENVIO') {
      return 'tiempo de espera agotado';
    }

    return mensaje.slice(0, 140);
  }

  // =====================================================
  // ENVIAR SOLICITUD
  // =====================================================

  async enviarSolicitud(): Promise<void> {
    // Evita envíos dobles mientras se está procesando.
    if (this.enviando) {
      return;
    }

    this.intentoContinuar = true;

    // Se comprueban todos los pasos, no solo el último.
    const pasoInvalido = this.pasos.findIndex((_, i) => !this.pasoValido(i));

    if (pasoInvalido !== -1) {
      this.pasoActual = pasoInvalido;
      this.scrollFormulario();
      this.cdr.detectChanges();
      return;
    }

    this.errorEnvio = false;
    this.detalleError = '';
    this.enviando = true;
    this.cdr.detectChanges(); // muestra "Enviando…" al instante

    try {
      await this.guardarEnCentral(this.crearSolicitud());

      // Solo se llega aquí cuando Supabase ha confirmado el guardado.
      this.enviado = true;
      this.registrarSolicitud();
      this.intentoContinuar = false;
      this.scrollFormulario();
    } catch (error) {
      console.error('No se pudo guardar la solicitud en la Central', error);
      this.detalleError = this.describirError(error);
      this.errorEnvio = true;
    } finally {
      this.enviando = false;
      this.cdr.detectChanges(); // muestra éxito o error al instante
    }
  }

  // =====================================================
  // ALTERNATIVA: ENVIAR POR WHATSAPP (si falla el guardado)
  // =====================================================

  enviarWhatsApp(): void {
    if (!this.pasos.every((_, i) => this.pasoValido(i))) {
      return;
    }

    const p = this.presupuesto;

    const mensaje = [
      '¡Hola! Quiero solicitar un presupuesto para Mudanzas360.',
      '',
      '==============================',
      'DATOS DE LA MUDANZA',
      '==============================',
      `SERVICIO: ${p.servicio}`,
      `LOCALIDAD: ${this.localidadFinal(p)}`,
      `LA MUDANZA EMPIEZA EN: ${p.puntosRecogida.join(', ')}`,
      `DIRECCIÓN DE RECOGIDA: ${p.direccionRecogida}`,
      `DIRECCIÓN DE ENTREGA: ${p.direccionEntrega}`,
      '',
      'DETALLES DEL TRASLADO',
      `TIPO DE VIVIENDA: ${p.tipoVivienda || 'No indicado'}`,
      `TAMAÑO: ${p.habitaciones || 'No indicado'}`,
      `PLANTA ORIGEN: ${p.origenPlanta || 'No indicado'}`,
      `ASCENSOR ORIGEN: ${p.ascensorOrigen || 'No indicado'}`,
      `PLANTA DESTINO: ${p.destinoPlanta || 'No indicado'}`,
      `ASCENSOR DESTINO: ${p.ascensorDestino || 'No indicado'}`,
      `FECHA: ${p.fecha}`,
      `FLEXIBILIDAD: ${p.flexibilidad}`,
      '',
      'INFORMACIÓN ADICIONAL',
      `DETALLES: ${p.detalles || 'Sin detalles adicionales'}`,
      '',
      'DATOS DEL CLIENTE',
      `NOMBRE: ${p.nombre}`,
      `TELÉFONO: ${p.telefono}`,
      `EMAIL: ${p.email || 'No indicado'}`,
      '',
      'SOLICITUD WEB MUDANZAS360',
    ].join('\n');

    const url = enlaceWhatsApp(mensaje);

    this.analitica.evento('click_whatsapp', { ubicacion: 'formulario' });
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  // =====================================================
  // REINICIAR FORMULARIO
  // =====================================================

  reiniciarFormulario(): void {
    this.presupuesto = this.nuevoPresupuesto();
    this.pasoActual = 0;
    this.enviado = false;
    this.enviando = false;
    this.errorEnvio = false;
    this.detalleError = '';
    this.intentoContinuar = false;
    this.ultimoEnvio = null;
    this.pasoRegistrado = 0;

    this.scrollFormulario();
  }

  // =====================================================
  // ANALÍTICA (sin datos personales)
  // =====================================================

  /** form_step cada vez que se llega a un paso nuevo. */
  private registrarAvance(): void {
    if (this.pasoActual <= this.pasoRegistrado) {
      return;
    }

    this.pasoRegistrado = this.pasoActual;
    this.analitica.evento('form_step', { paso: this.pasoActual + 1 });
  }

  private registrarSolicitud(): void {
    this.analitica.evento('generate_lead', {
      servicio: this.presupuesto.servicio,
      pagina: location.pathname,
    });
  }

  // =====================================================
  // DATOS INICIALES
  // =====================================================

  private nuevoPresupuesto(): PresupuestoMudanza {
    return {
      servicio: '',
      puntosRecogida: [],
      direccionRecogida: '',
      direccionEntrega: '',
      localidad: '',
      localidadOtra: '',
      tipoVivienda: '',
      habitaciones: '',
      origenPlanta: '',
      destinoPlanta: '',
      ascensorOrigen: '',
      ascensorDestino: '',
      fecha: '',
      flexibilidad: '',
      detalles: '',
      nombre: '',
      telefono: '',
      email: '',
    };
  }
}
