# Mejoras «máximo nivel»: auditoría y plan

Rama: `mejora-maximo-nivel` (sale de `mejoras-competencia`). Un commit por fase, sin push.

## 1. Auditoría (estado de partida)

### Pendientes (`npm run pendientes`): 62
| Grupo | Pendientes | Cómo se resuelven |
|---|---|---|
| `contacto.ts` · `EMPRESA` | razón social, CIF, domicilio, correo, conservación | Datos de `../ARMAMUEBLES/src/app/legal/legal-data.ts` y texto de conservación del encargo |
| `contacto.ts` · `NEGOCIO.horario` | 1 | Se elimina de la web y del JSON-LD (sin `openingHours`) |
| `contacto.ts` · `PERFIL_GOOGLE` | 1 | Pasa a `null` sin marcador: los botones de Google se ocultan solos hasta que haya URL |
| `portada.ts` | seguro + 3 cifras | Se elimina el seguro (y toda mención a seguros) y las cifras pasan a hechos del catálogo |
| `precios.ts` | 48 | Tablas de precios 2026 del encargo. Plazo y grupaje de las rutas se eliminan (no hay dato) |
| `paginas-servicios-nuevos.ts` | 7 confirmaciones | Confirmados por el encargo (precios propios de cada servicio) |

### Formulario actual (`src/app/presupuesto/`)
- 5 pasos: servicio → recorrido (localidad, puntos de recogida, dos direcciones) → vivienda, plantas, ascensores, fecha y flexibilidad → descripción **obligatoria** → datos.
- Demasiados campos para el móvil: dos `select` por vivienda, dirección completa y descripción obligatoria.
- Envío: `POST https://obdetimymgchgqnlxbew.supabase.co/rest/v1/requests` con clave publicable, `Prefer: return=minimal`, `id` UUID propio para reintentos sin duplicar (23505).
- Columnas: `id`, `source` (`mudanzas360`), `name`, `phone`, `email`, `service`, `description` (texto libre del cliente), `details` (JSON con `localidad`, `puntos_recogida`, `direccion_recogida`, `direccion_entrega`, `tipo_vivienda`, `tamano`, `planta_origen`, `ascensor_origen`, `planta_destino`, `ascensor_destino`, `fecha`, `flexibilidad`).
- No hay EmailJS en esta web: el aviso lo gestiona la Central. No se añade.
- Si falla, ofrece WhatsApp con el resumen (solo cuando todos los pasos son válidos).
- No guarda el progreso: al recargar se pierde todo.

### Panel (`../GESTION-TRABAJO/src/app/app.ts`)
- Lee `id`, `source`, `name`, `phone`, `email`, `service`, `description`, `details`, `created_at`.
- `details` se pinta de forma **genérica**: cada clave se convierte en etiqueta (`camelCase` y `snake_case` → «Ascensor origen»), las listas se unen con comas y los objetos se muestran como JSON. Oculta `is_test` y `test_batch`.
- Conclusión: los campos nuevos dentro de `details` se verán sin tocar el panel. El objeto `utm` se verá como JSON en crudo (se anota, no se toca el panel).

### Recorrido de la web
- 56 URL prerenderizadas, verificadas en la fase anterior (200, canonical con barra, JSON-LD válido).
- Móvil: barra inferior con teléfono, WhatsApp y «Pedir presupuesto»; el aviso de cookies queda encima de la barra, sin taparla.
- Las tablas de `/precios/` tienen scroll horizontal en el móvil (rutas con 8 columnas).
- Los textos repiten «hablas directamente con quien hace tu mudanza, sin intermediarios». Con el modelo real (Mudanzas360 coordina a transportistas y operarios de confianza) es engañoso: se cambia por «un solo interlocutor».

## 2. Plan por fases
1. **Auditoría** (este documento).
2. **Formulario**: 5 pantallas de una pregunta (servicio → tamaño con precio en vivo → origen/destino con ascensor → cuándo y extras → contacto). Botón fijo abajo, progreso, Atrás, `sessionStorage`, errores junto al campo, WhatsApp en cada paso y si falla el envío, éxito con resumen. Mismo destino y columnas; lo nuevo en `details`. Eventos `form_step` (con nombre), `form_error`, `generate_lead` con `value` y `currency`. UTM capturados al entrar.
3. **Opiniones**: `datos/opiniones.ts`, página `/opiniones/` con filtro, carrusel en portada, bloque por página de servicio, resumen calculado, nota legal. Sin `Review` ni `AggregateRating`.
4. **Precios**: `precios.ts` con las tablas 2026, `/precios/` rehecha (respuesta directa, tarjetas en móvil, extras, rutas, qué sube y baja, 3 ejemplos, ahorro, FAQ, opinión, calculadora), bloque de precio en servicios, rutas y zonas, `PriceSpecification` con `minPrice`/`maxPrice`.
5. **Captación y SEO**: titular de portada con precio, títulos y descripciones con precio, estructura de servicio, enlazado, eliminación de pendientes, sin seguros.
6. **Verificación**: build, 0 pendientes, formulario a 375/414 px con red bloqueada, capturas, Lighthouse y JSON-LD.
