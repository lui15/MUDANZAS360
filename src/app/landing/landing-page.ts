import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { SeoService } from '../seo.service';
import { PAGINAS, buscarPagina, crearJsonLd, urlDePagina } from './landing-data';

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

type Servicio =
  | 'Mudanza de vivienda'
  | 'Mudanza de oficina'
  | 'Porte / transporte'
  | 'Montaje de muebles'
  | 'Guardamuebles'
  | 'Otro';

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

interface ServicioWeb {
  nombre: string;
  descripcion: string;
  icono: string;
  imagen: string;
  formulario: Servicio;
}

interface Cifra {
  valor: number;
  actual: number;
  sufijo: string;
  etiqueta: string;
}

interface Opinion {
  nombre: string;
  zona: string;
  texto: string;
  estrellas: number;
}

interface Garantia {
  icono: string;
  titulo: string;
  texto: string;
}

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.css'],
})
export class LandingPage implements AfterViewInit, OnDestroy {
  /** Contenido SEO de la URL actual. */
  readonly pagina = buscarPagina(inject(ActivatedRoute).snapshot.data['slug']);
  readonly otrasPaginas = PAGINAS.filter((p) => p !== this.pagina);

  private readonly seoAplicado = inject(SeoService).update({
    title: this.pagina.title,
    description: this.pagina.description,
    path: urlDePagina(this.pagina),
    jsonLd: crearJsonLd(this.pagina),
  });

  /**
   * Con <base href="/">, un enlace "#seccion" llevaría a la portada desde otra URL.
   * Aquí se mantiene al usuario en la página actual y se desplaza hasta la sección.
   */
  @HostListener('click', ['$event'])
  alHacerClicEnAncla(evento: Event): void {
    if (evento.defaultPrevented) {
      return;
    }

    const enlace = (evento.target as Element | null)?.closest?.('a[href^="#"]');
    const id = enlace?.getAttribute('href')?.slice(1);

    if (!id) {
      return;
    }

    evento.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  pasoActual = 0;
  enviado = false;
  intentoContinuar = false;

  // Ventana modal del formulario (pantalla completa)
  formAbierto = false;

  // Estado del envío a Supabase
  enviando = false;
  errorEnvio = false;
  // Detalle técnico del último error (puedes quitarlo del HTML cuando todo funcione)
  detalleError = '';

  // Estado del header (sombra y tamaño al hacer scroll)
  headerScrolled = false;

  // Menú desplegable (tablet y móvil)
  menuAbierto = false;

  // Año del pie de página
  readonly anio = new Date().getFullYear();

  private observer?: IntersectionObserver;
  private cifrasObserver?: IntersectionObserver;
  private rafId = 0;

  // Elemento que tenía el foco antes de abrir el formulario (para devolvérselo al cerrar)
  private ultimoFoco: HTMLElement | null = null;

  /**
   * Identificador del último envío. Si el guardado se corta por la red y el cliente
   * reintenta con los mismos datos, se reutiliza el mismo id y no se duplica el registro.
   */
  private ultimoEnvio: { id: string; firma: string } | null = null;

  // IMPORTANTE: sustituye este número por tu WhatsApp.
  // Formato internacional, sin espacios ni el símbolo +.
  // Ejemplo: 34624671374
  readonly whatsappEmpresa = '34XXXXXXXXX';

  // =====================================================
  // DATOS DE EJEMPLO
  // Mientras sea true se muestran avisos amarillos en las secciones
  // de cifras, opiniones y garantías. Cuando hayas puesto tus datos
  // reales, cámbialo a false y los avisos desaparecen.
  // =====================================================
  readonly datosDeEjemplo = true;

  readonly pasos = [
    {
      numero: '01',
      titulo: 'El servicio',
      subtitulo: 'Cuéntanos qué necesitas',
    },
    {
      numero: '02',
      titulo: 'El recorrido',
      subtitulo: '¿De dónde y hacia dónde?',
    },
    {
      numero: '03',
      titulo: 'Tu mudanza',
      subtitulo: 'Algunos detalles importantes',
    },
    {
      numero: '04',
      titulo: 'Detalles',
      subtitulo: 'Añade lo que debamos saber',
    },
    {
      numero: '05',
      titulo: 'Tus datos',
      subtitulo: '¿Cómo podemos responderte?',
    },
  ];

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

  // Servicios del formulario (sin cambios)
  readonly servicios: {
    nombre: Servicio;
    descripcion: string;
    icono: string;
  }[] = [
    {
      nombre: 'Mudanza de vivienda',
      descripcion: 'Pisos, casas y traslados completos',
      icono: '⌂',
    },
    {
      nombre: 'Mudanza de oficina',
      descripcion: 'Traslados de negocios y empresas',
      icono: '▤',
    },
    {
      nombre: 'Porte / transporte',
      descripcion: 'Muebles, electrodomésticos y bultos',
      icono: '▰',
    },
    {
      nombre: 'Montaje de muebles',
      descripcion: 'Desmontaje y montaje de mobiliario',
      icono: '⚒',
    },
    {
      nombre: 'Guardamuebles',
      descripcion: 'Almacenamiento temporal',
      icono: '▦',
    },
    {
      nombre: 'Otro',
      descripcion: 'Explícanos qué necesitas',
      icono: '＋',
    },
  ];

  // Servicios que se muestran en la web (con imagen).
  // Puedes cambiar cada "imagen" por una tuya, por ejemplo:
  // 'assets/images/servicios/viviendas.jpg'
  readonly serviciosWeb: ServicioWeb[] = [
    {
      nombre: 'Mudanzas de viviendas',
      descripcion:
        'Organizamos el traslado de pisos y casas cuidando tus pertenencias en cada etapa.',
      icono: '⌂',
      imagen: '/images/mudanzas-viviendas.jpg',
      formulario: 'Mudanza de vivienda',
    },
    {
      nombre: 'Mudanzas de oficinas',
      descripcion: 'Trasladamos espacios de trabajo con planificación y atención a cada elemento.',
      icono: '▤',
      imagen: '/images/mudanzas-oficinas.jpg',
      formulario: 'Mudanza de oficina',
    },
    {
      nombre: 'Portes y transportes',
      descripcion: 'Recogida y entrega de muebles, electrodomésticos y objetos voluminosos.',
      icono: '▰',
      imagen: '/images/portes.jpg',
      formulario: 'Porte / transporte',
    },
    {
      nombre: 'Montaje de muebles',
      descripcion: 'Desmontaje, transporte y montaje para que todo vuelva a estar en su sitio.',
      icono: '⚒',
      imagen: '/images/muebles.jpg',
      formulario: 'Montaje de muebles',
    },
    {
      nombre: 'Embalaje y protección',
      descripcion: 'Cajas, protecciones y embalaje cuidadoso para objetos frágiles y delicados.',
      icono: '▣',
      imagen: '/images/embalaje.jpg',
      formulario: 'Otro',
    },
    {
      nombre: 'Guardamuebles',
      descripcion: 'Almacenamiento temporal y seguro para tus muebles mientras lo necesites.',
      icono: '▦',
      imagen: '/images/guardamuebles.avif',
      formulario: 'Guardamuebles',
    },
    {
      nombre: 'Mudanzas nacionales',
      descripcion:
        'Desde Madrid hasta cualquier punto de España, con un recorrido bien planificado.',
      icono: '↗',
      imagen: '/images/nacionales.jpg',
      formulario: 'Mudanza de vivienda',
    },
    {
      nombre: 'Mudanzas en Madrid',
      descripcion:
        'Traslados locales dentro de Madrid y alrededores, rápidos y sin complicaciones.',
      icono: '◎',
      imagen: '/images/madrid.jpg',
      formulario: 'Mudanza de vivienda',
    },
  ];

  // =====================================================
  // GARANTÍAS Y SEGURO
  // Revisa estos textos y deja solo lo que realmente ofreces.
  // =====================================================
  readonly garantias: Garantia[] = [
    {
      icono: '◈',
      titulo: 'Seguro de mercancías',
      texto:
        'Tu mudanza puede ir cubierta por un seguro. Te indicamos la cobertura incluida al preparar tu presupuesto.',
    },
    {
      icono: '◷',
      titulo: 'Puntualidad',
      texto:
        'Acordamos contigo la fecha y la franja horaria del servicio, y te avisamos de cualquier cambio.',
    },
    {
      icono: '◇',
      titulo: 'Cuidado de tus muebles',
      texto:
        'Protegemos, embalamos y manipulamos cada pieza con atención, de la recogida a la entrega.',
    },
    {
      icono: '✓',
      titulo: 'Presupuesto claro',
      texto:
        'Te explicamos qué incluye tu presupuesto antes de empezar, para que sepas qué esperar.',
    },
  ];

  // =====================================================
  // CIFRAS DE CONFIANZA (VALORES DE EJEMPLO)
  // Sustituye "valor" por tus datos reales. "actual" siempre en 0.
  // =====================================================
  readonly cifras: Cifra[] = [
    { valor: 1500, actual: 0, sufijo: '+', etiqueta: 'Mudanzas realizadas' },
    { valor: 10, actual: 0, sufijo: '', etiqueta: 'Años de experiencia' },
    { valor: 40, actual: 0, sufijo: '+', etiqueta: 'Ciudades cubiertas' },
    { valor: 100, actual: 0, sufijo: '%', etiqueta: 'Presupuestos sin compromiso' },
  ];

  // =====================================================
  // OPINIONES DE CLIENTES (TEXTOS DE EJEMPLO)
  // Sustitúyelas por reseñas reales de tus clientes.
  // No publiques estos textos como si fueran reales.
  // =====================================================
  readonly opiniones: Opinion[] = [
    {
      nombre: 'Carlos Mendoza',
      zona: 'Chamberí, Madrid',
      texto:
        'Puntuales, rápidos y con un trato exquisito. Se encargaron del desmontaje y montaje de los muebles del salón sin un solo rasguño. Repetiría sin dudarlo.',
      estrellas: 5,
    },
    {
      nombre: 'Lucía Fernández',
      zona: 'Valencia, Valencia',
      texto:
        'Excelente servicio en nuestro traslado desde Madrid a Valencia. La carga llegó en perfecto estado y en la hora acordada. Todo muy bien protegido.',
      estrellas: 5,
    },
    {
      nombre: 'Javier Gómez',
      zona: 'San Blas, Madrid',
      texto:
        'Nos ayudaron a transportar un sofá modular y un armario grande bastante difícil de subir. Super profesionales, limpios y muy eficaces.',
      estrellas: 5,
    },
    {
      nombre: 'Elena Ramos',
      zona: 'Alcobendas, Madrid',
      texto:
        'Organizaron la mudanza de nuestra oficina sin interrumpir nuestro horario laboral. Un equipo súper coordinado y atento a cada detalle.',
      estrellas: 5,
    },
  ];

  presupuesto: PresupuestoMudanza = this.nuevoPresupuesto();

  constructor(
    private readonly host: ElementRef<HTMLElement>,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  get progreso(): number {
    return ((this.pasoActual + 1) / this.pasos.length) * 100;
  }

  get fechaMinima(): string {
    const hoy = new Date();
    const local = new Date(hoy.getTime() - hoy.getTimezoneOffset() * 60000);

    return local.toISOString().slice(0, 10);
  }

  // Enlace del botón flotante de WhatsApp.
  // Si todavía no has puesto tu número, el botón lleva al formulario.
  get whatsappUrl(): string {
    const numero = this.whatsappEmpresa.replace(/\D/g, '');

    if (!numero || this.whatsappEmpresa.includes('X')) {
      return '#presupuesto';
    }

    const texto = encodeURIComponent(
      '¡Hola! Quiero información sobre una mudanza con Mudanzas360.',
    );

    return `https://wa.me/${numero}?text=${texto}`;
  }

  // =====================================================
  // UTILIDADES DE LAS NUEVAS SECCIONES
  // =====================================================

  estrellas(cantidad: number): string {
    const llenas = Math.max(0, Math.min(5, cantidad));

    return '★'.repeat(llenas) + '☆'.repeat(5 - llenas);
  }

  formatearCifra(valor: number): string {
    return valor.toLocaleString('es-ES');
  }

  // =====================================================
  // MENÚ DESPLEGABLE
  // =====================================================

  alternarMenu(): void {
    this.menuAbierto = !this.menuAbierto;
  }

  cerrarMenu(): void {
    this.menuAbierto = false;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.formAbierto) {
      this.cerrarFormulario();
      return;
    }

    this.cerrarMenu();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (typeof window !== 'undefined' && window.innerWidth > 1100) {
      this.cerrarMenu();
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

  // =====================================================
  // ANIMACIONES AL HACER SCROLL
  // =====================================================

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    // Desplazamiento suave entre secciones
    document.documentElement.style.scrollBehavior = 'smooth';

    this.observarReveal();
    this.observarCifras();
  }

  private observarReveal(): void {
    const elementos = this.host.nativeElement.querySelectorAll<HTMLElement>('.reveal');

    if (!('IntersectionObserver' in window)) {
      elementos.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    this.observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('is-visible');
            this.observer?.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );

    elementos.forEach((el) => this.observer?.observe(el));
  }

  // Contadores animados: arrancan cuando la franja entra en pantalla
  private observarCifras(): void {
    const banda = this.host.nativeElement.querySelector('.stats-band');

    if (!banda) {
      return;
    }

    const sinMovimiento =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (sinMovimiento || !('IntersectionObserver' in window)) {
      this.cifras.forEach((c) => (c.actual = c.valor));
      this.cdr.markForCheck();
      return;
    }

    this.cifrasObserver = new IntersectionObserver(
      (entradas) => {
        if (entradas.some((e) => e.isIntersecting)) {
          this.animarCifras();
          this.cifrasObserver?.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    this.cifrasObserver.observe(banda);
  }

  private animarCifras(): void {
    const duracion = 1800;
    const inicio = performance.now();

    const paso = (ahora: number) => {
      const progreso = Math.min((ahora - inicio) / duracion, 1);
      const suavizado = 1 - Math.pow(1 - progreso, 3);

      this.cifras.forEach((c) => {
        c.actual = Math.round(c.valor * suavizado);
      });

      // Avisa a Angular de que hay cambios (necesario sin zone.js)
      this.cdr.markForCheck();

      if (progreso < 1) {
        this.rafId = requestAnimationFrame(paso);
      }
    };

    this.rafId = requestAnimationFrame(paso);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.cifrasObserver?.disconnect();

    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }

    // Por si el componente se destruye con el formulario abierto
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.headerScrolled = window.scrollY > 12;
  }

  // =====================================================
  // VENTANA MODAL DEL FORMULARIO
  // =====================================================

  /** Abre el formulario. Si llega un servicio, lo deja elegido y salta al paso 2. */
  abrirFormulario(evento?: Event, servicio?: Servicio): void {
    evento?.preventDefault();

    if (typeof document === 'undefined') {
      return;
    }

    this.ultimoFoco = document.activeElement as HTMLElement | null;
    this.cerrarMenu();

    // Si la solicitud anterior ya se envió, se empieza de cero
    if (this.enviado) {
      this.reiniciarFormulario();
    }

    this.errorEnvio = false;
    this.intentoContinuar = false;

    if (servicio) {
      this.presupuesto.servicio = servicio;
      this.pasoActual = 1;
    }

    this.formAbierto = true;
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      this.host.nativeElement.querySelector<HTMLElement>('.wizard-dialog')?.focus();
    }, 60);
  }

  cerrarFormulario(): void {
    // No se cierra mientras se está guardando la solicitud
    if (this.enviando) {
      return;
    }

    const habiaTerminado = this.enviado;

    this.formAbierto = false;

    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }

    if (habiaTerminado) {
      this.reiniciarFormulario();
    }

    setTimeout(() => this.ultimoFoco?.focus?.(), 0);
  }

  // =====================================================
  // SOLICITAR UN SERVICIO DESDE LAS TARJETAS
  // =====================================================

  solicitarServicio(servicio: Servicio, evento?: Event): void {
    this.abrirFormulario(evento, servicio);
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

    const numeroWhatsApp = this.whatsappEmpresa.replace(/\D/g, '');

    if (!numeroWhatsApp || this.whatsappEmpresa.includes('X')) {
      console.error('Debes configurar el número de WhatsApp en la propiedad whatsappEmpresa.');
      return;
    }

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

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

    this.scrollFormulario();
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
