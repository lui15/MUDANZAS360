import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  computed,
  effect,
  inject,
  signal,
  untracked,
} from '@angular/core';

import { AnaliticaService } from '../compartido/analitica.service';
import { AsiTrabajamosCorto } from '../compartido/asi-trabajamos';
import { Icono, IconoId } from '../compartido/iconos';
import { PASOS_PRESUPUESTO, SERVICIOS_FORMULARIO, Servicio } from '../datos/catalogo-servicios';
import { enlaceWhatsApp } from '../datos/contacto';
import { normalizar } from '../datos/precios';
import {
  ASCENSORES_FORM,
  AscensorForm,
  CUANDO,
  Cuando,
  DatosPrevios,
  EXTRAS_FORM,
  EstadoPresupuesto,
  ExtraForm,
  PLANTAS_FORM,
  SUGERENCIAS_LUGAR,
  TEXTO_ASCENSOR,
  TIPOS_LUGAR,
  TipoLugar,
  acceso,
  adaptarPrevios,
  cifrasTelefono,
  errorEmail,
  errorTelefono,
  estadoVacio,
  lineasResumen,
  mensajeWhatsApp,
  nombreTamano,
  opcionesTamano,
  pideDestino,
  precioOrientativo,
  preguntaAscensor,
  preguntaPlanta,
  telefonoVisible,
  textoTipo,
  textoCuando,
} from './modelo';

import { CLAVE_ESTADO, PresupuestoService, almacen } from './presupuesto.service';

/* =====================================================
   CENTRAL DE SOLICITUDES (Supabase)
   Solo clave pública (publishable). Nunca la service_role.
   La seguridad la aplican las políticas RLS de public.requests.
===================================================== */
const SUPABASE_URL = 'https://obdetimymgchgqnlxbew.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_vGYxgkMKDNJr1G0aq7vBMQ_lLUQfJqn';
const SUPABASE_REQUESTS_URL = `${SUPABASE_URL}/rest/v1/requests`;

/** Identificador de esta web en la columna `source` de la Central. */
const FUENTE_CENTRAL = 'mudanzas360';
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

type Campo =
  | 'servicio'
  | 'tamano'
  | 'origen'
  | 'tipoOrigen'
  | 'plantaOrigen'
  | 'ascensorOrigen'
  | 'destino'
  | 'tipoDestino'
  | 'plantaDestino'
  | 'ascensorDestino'
  | 'cuando'
  | 'fecha'
  | 'nombre'
  | 'telefono'
  | 'email'
  | 'privacidad';

/** Campos de cada paso, en el orden en que se muestran. */
const CAMPOS_PASO: Campo[][] = [
  ['servicio'],
  ['tamano'],
  ['origen', 'tipoOrigen', 'plantaOrigen', 'ascensorOrigen', 'destino', 'tipoDestino', 'plantaDestino', 'ascensorDestino'],
  ['cuando', 'fecha'],
  ['nombre', 'telefono', 'email', 'privacidad'],
];

/** UUID para identificar cada envío; permite reintentar sin duplicar registros. */
function nuevoId(): string {
  const c = (globalThis as { crypto?: Crypto }).crypto;
  if (c?.randomUUID) return c.randomUUID();
  const bytes = new Uint8Array(16);
  if (c?.getRandomValues) c.getRandomValues(bytes);
  else for (let i = 0; i < 16; i++) bytes[i] = Math.floor(Math.random() * 256);
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

/** Subtítulos propios del formulario: sin promesas de precio en pantalla. */
const SUBTITULOS: Partial<Record<string, string>> = {
  tamano: 'Aproximado: nos ayuda a preparar tu presupuesto',
  recorrido: 'Primero la recogida y después la entrega',
};

function hoyISO(): string {
  const hoy = new Date();
  return new Date(hoy.getTime() - hoy.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

/**
 * Formulario de presupuesto en 5 pantallas, pensado para el pulgar. Guarda el progreso en
 * sessionStorage y envía a la Central de solicitudes (misma tabla y columnas de siempre).
 */
@Component({
  selector: 'app-presupuesto-wizard',
  standalone: true,
  imports: [Icono, AsiTrabajamosCorto],
  templateUrl: './presupuesto-wizard.html',
  styleUrl: './presupuesto-wizard.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresupuestoWizard implements OnDestroy {
  private readonly servicioPresupuesto = inject(PresupuestoService);
  private readonly analitica = inject(AnaliticaService);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly doc = inject(DOCUMENT);

  readonly pasos = PASOS_PRESUPUESTO;
  readonly servicios = SERVICIOS_FORMULARIO;
  readonly ascensores = ASCENSORES_FORM;
  readonly plantas = PLANTAS_FORM;
  readonly tiposLugar = TIPOS_LUGAR;
  readonly preguntaPlanta = preguntaPlanta;
  readonly preguntaAscensor = preguntaAscensor;
  readonly cuandoOpciones = CUANDO;
  readonly extrasOpciones = EXTRAS_FORM;
  readonly fechaMinima = hoyISO();

  readonly abierto = signal(false);
  readonly paso = signal(0);
  readonly estado = signal<EstadoPresupuesto>(estadoVacio());
  readonly enviando = signal(false);
  readonly enviado = signal(false);
  readonly errorEnvio = signal(false);
  /** Campos que ya ha tocado (los errores se muestran al salir de ellos o al intentar avanzar). */
  readonly tocados = signal<ReadonlySet<Campo>>(new Set());
  /** Campo de lugar con las sugerencias abiertas. */
  readonly sugerenciasDe = signal<'origen' | 'destino' | null>(null);

  readonly pasoInfo = computed(() => {
    const p = this.pasos[this.paso()];
    return { ...p, subtitulo: SUBTITULOS[p.id] ?? p.subtitulo };
  });
  readonly tamanos = computed(() => opcionesTamano(this.estado().servicio));
  readonly conDestino = computed(() => pideDestino(this.estado().servicio));
  readonly esNacional = computed(() => this.estado().servicio === 'Mudanza nacional');
  /** Icono de cada tarjeta de servicio, ya con su tipo para la plantilla. */
  readonly icono = (id: IconoId): IconoId => id;
  readonly resumen = computed(() => lineasResumen(this.estado()));
  readonly enlaceWhatsApp = computed(() =>
    enlaceWhatsApp(
      mensajeWhatsApp(this.estado(), this.paso() === 4 || this.enviado() || this.errorEnvio()),
    ),
  );
  readonly errores = computed(() => this.calcularErrores(this.estado()));
  readonly telefonoFinal = computed(() => telefonoVisible(this.estado().telefono));
  readonly primerNombre = computed(() => this.estado().nombre.trim().split(/\s+/)[0] ?? '');

  /** Paso más avanzado ya registrado en Analytics: volver atrás y avanzar no lo repite. */
  private pasoRegistrado = -1;
  private ultimoFoco: HTMLElement | null = null;
  /** Mismo id si reintenta con los mismos datos: no se duplica el registro. */
  private ultimoEnvio: { id: string; firma: string } | null = null;

  constructor() {
    this.restaurar();

    effect(() => {
      const peticion = this.servicioPresupuesto.peticion();
      if (peticion)
        untracked(() => this.abrir(peticion.servicio, peticion.datos, peticion.reanudar));
    });

    // El progreso se guarda en cada cambio, para no perder nada al recargar o volver.
    effect(() => {
      const datos = {
        estado: this.estado(),
        paso: this.paso(),
        registrado: Math.max(this.pasoRegistrado, this.paso()),
      };
      if (!this.enviado()) almacen.guardar(CLAVE_ESTADO, JSON.stringify(datos));
    });
  }

  ngOnDestroy(): void {
    this.doc.body.style.overflow = '';
  }

  /* ----------------------------- Abrir y cerrar ----------------------------- */

  private abrir(servicio?: Servicio, datos?: DatosPrevios, reanudar = false): void {
    this.ultimoFoco = this.doc.activeElement as HTMLElement | null;
    if (!reanudar) this.analitica.evento('form_open', servicio ? { servicio } : {});

    if (this.enviado()) this.empezarDeNuevo(false);
    this.errorEnvio.set(false);

    if (servicio || datos) {
      const actual = this.estado();
      const cambiaServicio = !!servicio && servicio !== actual.servicio;
      this.estado.set({
        ...actual,
        ...(cambiaServicio ? { tamano: '' } : {}),
        ...adaptarPrevios(datos ?? {}),
        ...(servicio ? { servicio } : {}),
      });
      // Empieza en el primer paso que falta por completar.
      const pendiente = CAMPOS_PASO.findIndex((_, i) => !this.pasoValido(i));
      this.paso.set(pendiente === -1 ? 4 : pendiente);
    }

    this.abierto.set(true);
    this.doc.body.style.overflow = 'hidden';
    this.registrarPaso();
    this.enfocarPaso();
  }

  cerrar(): void {
    if (this.enviando()) return;
    const terminado = this.enviado();
    this.abierto.set(false);
    this.servicioPresupuesto.cerrar();
    this.doc.body.style.overflow = '';
    if (terminado) this.empezarDeNuevo(false);
    setTimeout(() => this.ultimoFoco?.focus?.(), 0);
  }

  /** Un toque fuera de la ventana la cierra (sin devolver nada: un false cancelaría los clics). */
  alPulsarFondo(evento: MouseEvent): void {
    if (evento.target === evento.currentTarget) this.cerrar();
  }

  @HostListener('document:keydown.escape')
  alPulsarEscape(): void {
    if (this.abierto()) this.cerrar();
  }

  /** Mantiene el foco dentro de la ventana mientras está abierta. */
  @HostListener('document:keydown', ['$event'])
  alPulsarTecla(evento: KeyboardEvent): void {
    if (!this.abierto() || evento.key !== 'Tab') return;
    const enfocables = Array.from(
      this.host.querySelectorAll<HTMLElement>(
        '.fp-dialogo button:not([disabled]), .fp-dialogo input, .fp-dialogo select, .fp-dialogo textarea, .fp-dialogo a[href]',
      ),
    ).filter((el) => el.offsetParent !== null);
    if (!enfocables.length) return;
    const primero = enfocables[0];
    const ultimo = enfocables[enfocables.length - 1];
    if (evento.shiftKey && this.doc.activeElement === primero) {
      evento.preventDefault();
      ultimo.focus();
    } else if (!evento.shiftKey && this.doc.activeElement === ultimo) {
      evento.preventDefault();
      primero.focus();
    }
  }

  /* ----------------------------- Cambios de datos ----------------------------- */

  poner<K extends keyof EstadoPresupuesto>(campo: K, valor: EstadoPresupuesto[K]): void {
    this.estado.update((e) => ({ ...e, [campo]: valor }));
    this.errorEnvio.set(false);
  }

  /** Paso 1: al tocar una tarjeta se pasa al siguiente. */
  elegirServicio(servicio: Servicio): void {
    const cambia = servicio !== this.estado().servicio;
    this.estado.update((e) => ({ ...e, servicio, ...(cambia ? { tamano: '' } : {}) }));
    this.avanzar();
  }

  /** Paso 2: se marca la opción y se avanza con «Continuar». */
  elegirTamano(id: string): void {
    this.poner('tamano', id);
  }

  /** Tipo de inmueble: en una casa no hay planta ni ascensor que preguntar. */
  elegirTipo(lugar: 'Origen' | 'Destino', tipo: TipoLugar): void {
    this.estado.update((e) => {
      const r = acceso(tipo, e[`planta${lugar}`], e[`ascensor${lugar}`]);
      return { ...e, [`tipo${lugar}`]: tipo, [`planta${lugar}`]: r.planta, [`ascensor${lugar}`]: r.ascensor };
    });
    this.errorEnvio.set(false);
    this.tocar(`tipo${lugar}` as Campo);
  }

  /** Planta: en el bajo no se pregunta el ascensor y se guarda «no aplica». */
  elegirPlanta(lugar: 'Origen' | 'Destino', planta: string): void {
    this.estado.update((e) => {
      const r = acceso(e[`tipo${lugar}`], planta, e[`ascensor${lugar}`]);
      return { ...e, [`planta${lugar}`]: r.planta, [`ascensor${lugar}`]: r.ascensor };
    });
    this.errorEnvio.set(false);
    this.tocar(`planta${lugar}` as Campo);
  }

  elegirAscensor(lugar: 'Origen' | 'Destino', valor: AscensorForm): void {
    this.poner(`ascensor${lugar}`, valor);
    this.tocar(`ascensor${lugar}` as Campo);
  }

  elegirCuando(valor: Cuando): void {
    this.estado.update((e) => ({
      ...e,
      cuando: valor,
      ...(valor !== 'fecha' ? { fecha: '' } : {}),
    }));
    this.tocar('cuando');
    if (valor === 'fecha') {
      setTimeout(
        () =>
          this.host.querySelector<HTMLInputElement>('#fp-fecha')?.focus({ preventScroll: true }),
        30,
      );
    }
  }

  alternarExtra(id: ExtraForm): void {
    const extras = this.estado().extras;
    this.poner('extras', extras.includes(id) ? extras.filter((x) => x !== id) : [...extras, id]);
  }

  texto(evento: Event): string {
    return (evento.target as HTMLInputElement).value;
  }

  /* ----------------------------- Sugerencias de lugar ----------------------------- */

  sugerencias(campo: 'origen' | 'destino'): string[] {
    const t = normalizar(this.estado()[campo]);
    if (this.sugerenciasDe() !== campo || t.length < 1) return [];
    return SUGERENCIAS_LUGAR.filter((s) => normalizar(s).includes(t) && normalizar(s) !== t).slice(
      0,
      4,
    );
  }

  elegirSugerencia(campo: 'origen' | 'destino', valor: string): void {
    this.poner(campo, valor);
    this.sugerenciasDe.set(null);
  }

  /** Al salir del campo se cierran las sugerencias (con margen para que el toque llegue). */
  salirDeLugar(campo: 'origen' | 'destino'): void {
    this.tocar(campo);
    setTimeout(() => {
      if (this.sugerenciasDe() === campo) this.sugerenciasDe.set(null);
    }, 150);
  }

  /* ----------------------------- Navegación ----------------------------- */

  avanzar(): void {
    const paso = this.paso();
    if (!this.pasoValido(paso)) {
      this.marcarPaso(paso);
      for (const campo of CAMPOS_PASO[paso]) {
        if (this.errores()[campo])
          this.analitica.evento('form_error', { campo, paso: this.pasos[paso].id });
      }
      this.enfocarError();
      return;
    }
    if (paso === this.pasos.length - 1) {
      void this.enviar();
      return;
    }
    this.paso.set(paso + 1);
    this.registrarPaso();
    this.enfocarPaso();
  }

  atras(): void {
    if (this.paso() === 0) {
      this.cerrar();
      return;
    }
    this.errorEnvio.set(false);
    this.paso.update((p) => p - 1);
    this.enfocarPaso();
  }

  tocar(campo: Campo): void {
    this.tocados.update((t) => new Set(t).add(campo));
  }

  private marcarPaso(paso: number): void {
    this.tocados.update((t) => {
      const n = new Set(t);
      CAMPOS_PASO[paso].forEach((c) => n.add(c));
      return n;
    });
  }

  /** Error visible de un campo: solo si ya lo ha tocado. */
  error(campo: Campo): string {
    return this.tocados().has(campo) ? (this.errores()[campo] ?? '') : '';
  }

  pasoValido(paso: number): boolean {
    const errores = this.errores();
    return CAMPOS_PASO[paso].every((c) => !errores[c]);
  }

  private calcularErrores(e: EstadoPresupuesto): Partial<Record<Campo, string>> {
    const err: Partial<Record<Campo, string>> = {};
    if (!e.servicio) err.servicio = 'Elige qué necesitas.';
    if (!e.tamano) err.tamano = 'Elige el tamaño, aunque sea aproximado.';
    const lugar = (l: 'Origen' | 'Destino', donde: string) => {
      const tipo = e[`tipo${l}`];
      const planta = e[`planta${l}`];
      const asc = e[`ascensor${l}`];
      if (!e[l === 'Origen' ? 'origen' : 'destino'].trim())
        err[l === 'Origen' ? 'origen' : 'destino'] = `Escribe el municipio o barrio ${donde}.`;
      if (!tipo) err[`tipo${l}`] = `Elige qué tipo de inmueble es ${donde}.`;
      else if (preguntaPlanta(tipo) && !planta) err[`planta${l}`] = `Falta la planta ${donde}.`;
      else if (preguntaAscensor(tipo, planta) && (!asc || asc === 'no-aplica'))
        err[`ascensor${l}`] = `Falta saber si hay ascensor ${donde.replace(/^de /, 'en ')}.`;
    };
    lugar('Origen', pideDestino(e.servicio) ? 'de la recogida' : 'donde recogemos');
    if (pideDestino(e.servicio)) lugar('Destino', 'de la entrega');
    if (!e.cuando) err.cuando = 'Elige cuándo te vendría bien.';
    if (e.cuando === 'fecha') {
      if (!e.fecha) err.fecha = 'Elige la fecha.';
      else if (e.fecha < this.fechaMinima) err.fecha = 'La fecha ya ha pasado: elige otra.';
    }
    if (!e.nombre.trim()) err.nombre = 'Escribe tu nombre.';
    const tel = errorTelefono(e.telefono);
    if (tel) err.telefono = tel;
    const email = errorEmail(e.email);
    if (email) err.email = email;
    if (!e.privacidad) err.privacidad = 'Necesitamos tu permiso para responderte.';
    return err;
  }

  /* ----------------------------- Envío ----------------------------- */

  private crearSolicitud(): SolicitudCentral {
    const e = this.estado();
    const precio = precioOrientativo(e);
    const destino = pideDestino(e.servicio);
    const ascensor = (a: AscensorForm) => (a ? TEXTO_ASCENSOR[a] : null);
    const descripcion = lineasResumen(e)
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n');

    return {
      source: FUENTE_CENTRAL,
      name: e.nombre.trim(),
      phone: telefonoVisible(e.telefono),
      email: e.email.trim() || null,
      service: e.servicio,
      description: descripcion || null,
      details: {
        servicio: e.servicio,
        tamano: nombreTamano(e.servicio, e.tamano),
        origen: e.origen.trim(),
        destino: destino ? e.destino.trim() : null,
        tipoOrigen: textoTipo(e.tipoOrigen) || null,
        plantaOrigen: e.plantaOrigen || (e.tipoOrigen ? 'no aplica' : null),
        ascensorOrigen: ascensor(e.ascensorOrigen),
        tipoDestino: destino ? textoTipo(e.tipoDestino) || null : null,
        plantaDestino: destino ? e.plantaDestino || (e.tipoDestino ? 'no aplica' : null) : null,
        ascensorDestino: destino ? ascensor(e.ascensorDestino) : null,
        cuando: textoCuando({ cuando: e.cuando, fecha: '' }),
        fecha: e.cuando === 'fecha' ? e.fecha : null,
        extras: e.extras.map((x) => EXTRAS_FORM.find((o) => o.id === x)?.nombre ?? x),
        notas: e.notas.trim() || null,
        // Solo para el panel: el cliente no ve ningún precio en el formulario.
        precioOrientativo: precio?.texto ?? null,
        paginaOrigen: location.href.split('#')[0],
        utm: this.servicioPresupuesto.utm(),
      },
    };
  }

  /**
   * Guarda en Supabase con su API REST (sin librería). «Prefer: return=minimal» porque los
   * visitantes pueden insertar pero no leer (RLS). Un id repetido (23505) ya está guardado.
   */
  private async guardarEnCentral(solicitud: SolicitudCentral): Promise<void> {
    const firma = JSON.stringify(solicitud);
    if (!this.ultimoEnvio || this.ultimoEnvio.firma !== firma) {
      this.ultimoEnvio = { id: nuevoId(), firma };
    }
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
        body: JSON.stringify({ id: this.ultimoEnvio.id, ...solicitud }),
        signal: controlador.signal,
      });
      if (respuesta.ok) return;
      const texto = await respuesta.text();
      if (respuesta.status === 409 && texto.includes('23505')) return;
      throw new Error(`HTTP ${respuesta.status} ${texto.slice(0, 140)}`);
    } finally {
      clearTimeout(temporizador);
    }
  }

  private async enviar(): Promise<void> {
    if (this.enviando()) return;
    const invalido = CAMPOS_PASO.findIndex((_, i) => !this.pasoValido(i));
    if (invalido !== -1) {
      this.paso.set(invalido);
      this.marcarPaso(invalido);
      this.enfocarError();
      return;
    }

    this.errorEnvio.set(false);
    this.enviando.set(true);
    try {
      await this.guardarEnCentral(this.crearSolicitud());
      // Solo se llega aquí cuando Supabase ha confirmado el guardado.
      const precio = precioOrientativo(this.estado());
      this.analitica.evento('generate_lead', {
        servicio: this.estado().servicio,
        pagina: location.pathname,
        currency: 'EUR',
        ...(precio?.valor ? { value: precio.valor } : {}),
      });
      this.enviado.set(true);
      almacen.borrar(CLAVE_ESTADO);
      this.enfocarPaso();
    } catch (error) {
      console.error('No se pudo guardar la solicitud en la Central', error);
      this.errorEnvio.set(true);
      setTimeout(
        () => this.host.querySelector<HTMLElement>('.fp-fallo a')?.focus({ preventScroll: false }),
        30,
      );
    } finally {
      this.enviando.set(false);
    }
  }

  abrirWhatsApp(ubicacion: string): void {
    this.analitica.evento('click_whatsapp', { ubicacion });
  }

  empezarDeNuevo(enfocar = true): void {
    this.estado.set(estadoVacio());
    this.paso.set(0);
    this.enviado.set(false);
    this.errorEnvio.set(false);
    this.tocados.set(new Set());
    this.ultimoEnvio = null;
    this.pasoRegistrado = -1;
    almacen.borrar(CLAVE_ESTADO);
    if (enfocar) this.enfocarPaso();
  }

  /* ----------------------------- Utilidades ----------------------------- */

  private restaurar(): void {
    const guardado = almacen.leer(CLAVE_ESTADO);
    if (!guardado) return;
    try {
      const { estado, paso, registrado } = JSON.parse(guardado) as {
        estado: Partial<EstadoPresupuesto>;
        paso: number;
        registrado?: number;
      };
      this.pasoRegistrado = Number(registrado ?? -1);
      this.estado.set({
        ...estadoVacio(),
        ...adaptarPrevios(estado as Parameters<typeof adaptarPrevios>[0]),
        privacidad: false,
      });
      this.paso.set(Math.min(Math.max(Number(paso) || 0, 0), this.pasos.length - 1));
    } catch {
      almacen.borrar(CLAVE_ESTADO);
    }
  }

  private registrarPaso(): void {
    const paso = this.paso();
    if (paso <= this.pasoRegistrado) return;
    this.pasoRegistrado = paso;
    this.analitica.evento('form_step', { paso: paso + 1, nombre_paso: this.pasos[paso].id });
  }

  /** Foco en el primer control del paso, sin mover la página. */
  private enfocarPaso(): void {
    setTimeout(() => {
      const cuerpo = this.host.querySelector<HTMLElement>('.fp-cuerpo');
      cuerpo?.scrollTo({ top: 0 });
      const destino =
        this.host.querySelector<HTMLElement>('.fp-paso .fp-elegida') ??
        this.host.querySelector<HTMLElement>(
          '.fp-paso input:not([type=checkbox]), .fp-paso button, .fp-hecho h2',
        );
      destino?.focus({ preventScroll: true });
    }, 40);
  }

  private enfocarError(): void {
    setTimeout(() => {
      const campo = this.host.querySelector<HTMLElement>(
        '[aria-invalid="true"], .fp-grupo-error button, .fp-grupo-error input',
      );
      campo?.focus({ preventScroll: true });
      campo?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }, 30);
  }

  readonly cifras = cifrasTelefono;
}
