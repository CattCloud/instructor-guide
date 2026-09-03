# GUÍA EXCALIDRAW — CLASE 13: Modelado de Datos y Manipulación de Texto

> **Curso:** Code 201
> **Módulo:** M4 — Clase 1 de 4 (ARRANQUE del Módulo 4)
> **Estado:** Paneles documentados — pendiente validación de Eric
> **Total Paneles:** 8 — **3 Imagen-slide** (estado · tipos de estado · CRUD, todos en 1.4) + **1 Hand-drawn nativo** (M3: texto es objeto + tabla de métodos) + **4 LIBRE en vivo** (HU1 en 1.5 · HU2 en 2.4 · HU3 en 3.4 · HU4 en 4.2)
> **Fecha:** 2026-06-30
> **Fuente del guion:** `mi-sistema/clase-13/CLASE 13.md`
> **Generador (nativo):** `mi-sistema/clase-13/gen.js` (a crear) — solo genera el Panel 3 (nativo) y los marcos de los 4 paneles LIBRE. Las 3 imágenes se pegan en sus placeholders.
> **Decisión de complejidad (Eric, 2026-06-30):** Guía deliberadamente SIMPLE. Solo 3 conceptos llevan imagen (estado / tipos de estado / CRUD), **planteados de forma GENERAL, no atados al proyecto de plantillas**. Las HU se definen en paneles LIBRE (el instructor escribe los pasos en vivo). Un único panel nativo de tablas para los métodos de String.
>
> **Convención semántica de colores** (igual que C09-C12): código/sintaxis = azul **_#1971c2_**; criterios/aciertos = verde **_#2f9e44_**; problema/advertencia = rojo **_#e03131_**; etiquetas de proceso/flechas = naranja **_#f08c00_**; títulos = negro **_#1e1e1e_**. Código siempre monospace azul, extraído LITERAL del guion/lab. **Sin emojis. Sin dibujos de metáfora ilustrada.**
>
> **Sub-puntos SIN panel Excalidraw** (van en VS Code, navegador o solo voz — NO llevan panel):
> - **1.1** Apertura del M4 (mapa del módulo dicho en voz / slide simple).
> - **1.2** Setup + lectura guiada del `index.html` (VS CODE).
> - **1.3** El problema (NAVEGADOR — el form que no hace nada).
> - **2.1 / 2.2 / 2.3** Problema, patrón render y `Date` (VS CODE / consola).
> - **3.1** El problema del texto sucio (NAVEGADOR).
> - **3.3** Limpiar con `trim`/`toLowerCase` (VS CODE / consola).
> - **4.1** El problema del `{nombre}` literal (NAVEGADOR).
> - **4.3** Cierre (voz / slide simple).
>
> ⚠ **Pendiente de alineación con el guion:** el `CLASE 13.md` todavía menciona algunos paneles Excalidraw que esta Guía NO incluye (mapa M4, árbol de archivos, ciclo render, cinta de limpieza, tubería split). Hay que reescribir esos bloques **EN PANTALLA** del guion para que coincidan con esta Guía (Eric confirma antes de tocar el guion).

---

## Momento 1: Apertura M4 + setup + modelar + estado (HU1)

> **Estado:** Borrador
> **Paneles del Momento:** 4 — 3 Imagen-slide (estado · tipos de estado · CRUD, las tres en 1.4) + 1 LIBRE (HU1 en 1.5).

---

### Panel 1.4-A — ¿Qué es el ESTADO? (imagen conceptual, general)

- **Trigger en el guion:** 1.4, bloque *"Tu explicación teórica precisa (qué es el estado, a fondo)"*.
- **Tipo:** Imagen-slide (infografía IA). **General — NO usa el proyecto de plantillas.**
- **Concepto que visualiza:** el estado como el "único lugar de la verdad" del que se deriva la pantalla.
- **Contenido (alimenta el prompt IA):**
  - **Título** (negro): "EL ESTADO — la fuente de verdad de una app".
  - Centro: una caja grande etiquetada **_state_** (objeto genérico, con datos abstractos adentro: 2-3 ítems tipo lista, sin nombres de plantillas).
  - Flecha etiquetada **_render_** (naranja) saliendo de la caja hacia una pantalla/dispositivo a la derecha que MUESTRA esos datos.
  - Tres etiquetas alrededor (en sus colores): "fuente de verdad" · "se comparte" · "cambia con cada acción".
  - Aside al pie (gris): "Si un dato no está en el estado, no existe en la pantalla."
- **Anchor pedagógico:** imprime "estado → pantalla", la dirección única del flujo.

---

### Panel 1.4-B — Tipos de estado: GLOBAL vs LOCAL (imagen conceptual, general)

- **Trigger en el guion:** 1.4, bloque del estado global/local (de los apuntes).
- **Tipo:** Imagen-slide (infografía IA). **General — ejemplos de cualquier app, no plantillas.**
- **Concepto que visualiza:** que hay datos compartidos por toda la app (global) y datos que solo importan a una parte (local).
- **Contenido (para el prompt IA):**
  - **Título** (negro): "TIPOS DE ESTADO".
  - **Dos columnas:**
    - **GLOBAL** (verde): icono de app entera; ejemplos genéricos: "usuario logueado", "tema claro/oscuro", "carrito". Etiqueta: "lo usa toda la app".
    - **LOCAL** (azul): icono de un componente aislado; ejemplos: "menú abierto/cerrado", "texto del buscador". Etiqueta: "solo le importa a una parte".
  - Aside al pie: "La app de hoy tiene UN estado global: la lista de plantillas."
- **Anchor pedagógico:** distingue alcance — clave para identificar el estado.

---

### Panel 1.4-C — ¿Qué es CRUD? (imagen conceptual, general)

- **Trigger en el guion:** 1.4, bloque *"Nombrar CRUD"*.
- **Tipo:** Imagen-slide (infografía IA). **General — cualquier app que maneja datos.**
- **Concepto que visualiza:** las 4 operaciones sobre los datos; hoy se hacen C y R.
- **Contenido (para el prompt IA):**
  - **Título** (negro): "CRUD — las 4 operaciones sobre los datos".
  - Cuadrante 2×2, cada celda con la letra + verbo + icono genérico:
    - **C**reate (Crear) · **R**ead (Leer) → resaltadas en **verde**, etiqueta "HOY (C13)".
    - **U**pdate (Actualizar) · **D**elete (Borrar) → atenuadas en **gris**, etiqueta "C14".
  - Al centro del cuadrante: una caja **_estado_** (las 4 operan sobre el mismo estado).
  - Aside al pie: "Toda app de datos hace estas 4. Hoy construimos las dos primeras."
- **Anchor pedagógico:** mapa de hacia dónde va el módulo.

---

### Panel 1.5 — LIBRE para definir la HU1 (Lab — modelar + estado + agregar)

- **Trigger en el guion:** 1.5, bloque *"Plan de la solución"* de la HU1.
- **Tipo:** LIBRE en vivo — marco vacío; el instructor escribe los pasos a medida que el grupo responde.
- **Patrón:** "Plan socrático LIBRE" (marco con título + caja HU + caja CRITERIOS + líneas numeradas vacías).
- **Marco mínimo a renderizar antes de clase:**
  - **Título** (rojo): "PLAN — HU1: MODELAR + ESTADO + AGREGAR".
  - **Caja HU** (borde gris): *"Como desarrollador, quiero representar cada plantilla como un objeto y guardarlas todas en una única lista."*
  - **Caja CRITERIOS** (borde gris): título, mensaje y hashtag · registra su fecha automáticamente · una única lista central · agregar la suma a la lista.
  - **5 líneas numeradas** vacías (1.–5.), punteadas grises, espaciado generoso.
  - Aside al pie: "Cada paso se responde leyendo la HU y sus criterios."

---

## Momento 2: Del estado a la pantalla — render + Date (HU2)

> **Estado:** Borrador
> **Paneles del Momento:** 1 — LIBRE (HU2). El render y el `Date` se muestran en VS Code/consola, sin panel.

---

### Panel 2 — LIBRE para definir la HU2 (Lab — render + conectar el formulario)

- **Trigger en el guion:** 2.4, bloque *"Plan de la solución"* de la HU2.
- **Tipo:** LIBRE en vivo — marco vacío.
- **Patrón:** "Plan socrático LIBRE".
- **Marco mínimo:**
  - **Título** (rojo): "PLAN — HU2: MOSTRAR + CONECTAR EL FORM".
  - **Caja HU:** *"Como usuario, quiero ver mis plantillas y que aparezca la nueva apenas la agrego, sin recargar."*
  - **Caja CRITERIOS:** aparecen en pantalla · la nueva aparece al instante · fecha legible · refleja exactamente el estado (sin duplicados).
  - **6 líneas numeradas** vacías.
  - Aside al pie: "Regla de oro: cambias el estado → render()."

---

## Momento 3: Texto es un objeto — limpiar, normalizar, validar (HU3)

> **Estado:** Borrador
> **Paneles del Momento:** 2 — 1 nativo (texto es objeto + tabla de métodos) en 3.2 + 1 LIBRE (HU3).

---

### Panel 3 — Texto es un objeto + tabla de métodos (NATIVO, herramientas de Excalidraw)

- **Trigger en el guion:** 3.2, *"Un texto es un objeto con métodos"* (panorama).
- **Tipo:** Hand-drawn NATIVO (gen.js) — caja conceptual + tabla técnica. **No imagen** (es tabla, mejor control nativo).
- **Contenido (para gen.js):**
  - **Título** (negro 32px): "UN TEXTO ES UN OBJETO — trae métodos".
  - **Caja-idea** arriba (borde azul): *"Un string no es solo letras: es un objeto con métodos (como un array). No mutan — devuelven un valor nuevo — y se encadenan."*
  - **Tabla 3 columnas × 8 filas** (header + 7), bordes grises:

  | Método (azul mono) | Devuelve | Para qué |
  |---|---|---|
  | **_.trim()_** | texto sin espacios en las puntas | limpiar la entrada |
  | **_.toLowerCase()_** | texto en minúsculas | unificar mayúsculas |
  | **_.startsWith("x")_** | true / false | asegurar el `#` del hashtag |
  | **_.replaceAll("a","b")_** | texto con todas cambiadas | sustituir variables (M4) |
  | **_.slice(ini, fin)_** | un pedazo del texto | recortar (logro) |
  | **_.split("sep")_** | un **array** | separar hashtags (M4) |
  | **_.length_** | número (propiedad, sin `()`) | validar campos vacíos |

  - **Aside destacado** (naranja): "`.trim()` lleva paréntesis; `.length` NO — es propiedad, no método."
- **Anchor pedagógico:** catálogo de referencia que el alumno mira durante todo el día.

---

### Panel 3.4 — LIBRE para definir la HU3 (Lab — normalizar + validar)

- **Trigger en el guion:** 3.4, bloque *"Plan de la solución"* de la HU3. *(Eric lo referenció como "3.1 LIBRE para HU3".)*
- **Tipo:** LIBRE en vivo — marco vacío.
- **Patrón:** "Plan socrático LIBRE".
- **Marco mínimo:**
  - **Título** (rojo): "PLAN — HU3: LIMPIAR, NORMALIZAR, VALIDAR".
  - **Caja HU:** *"Como usuario, quiero que mis plantillas se guarden limpias y con hashtags consistentes."*
  - **Caja CRITERIOS:** se eliminan espacios sobrantes · el hashtag siempre igual (minúscula + `#`) · no se guarda con título o mensaje vacío.
  - **6 líneas numeradas** vacías.
  - Aside al pie: "Normalizar la entrada es trabajo de la app, no del usuario."

---

## Momento 4: Usar la plantilla — generar y copiar (HU4)

> **Estado:** Borrador
> **Paneles del Momento:** 1 — LIBRE (HU4). El generador (replaceAll/select/clipboard/etiquetas) se muestra en VS Code, sin panel.

---

### Panel 4.2 — LIBRE para definir la HU4 (Lab — generar + copiar)

- **Trigger en el guion:** 4.2, bloque *"Plan de la solución"* de la HU4. *(Eric lo referenció como "4.1 LIBRE para HU4".)*
- **Tipo:** LIBRE en vivo — marco vacío.
- **Patrón:** "Plan socrático LIBRE".
- **Marco mínimo:**
  - **Título** (rojo): "PLAN — HU4: GENERAR + COPIAR EL MENSAJE".
  - **Caja HU:** *"Como usuario, quiero elegir una plantilla, escribir un nombre real y obtener el mensaje final listo para copiar."*
  - **Caja CRITERIOS:** elegir plantilla + nombre real · mensaje completo con `{nombre}` reemplazado · botón Copiar al portapapeles · hashtags como etiquetas separadas.
  - **6 líneas numeradas** vacías.
  - Aside al pie: "Una zona para USAR las plantillas, aparte de la lista que las muestra."

---

## Tabla resumen de paneles

| Panel | Momento | Tipo | Contenido | Acción de generación |
|---|---|---|---|---|
| 1.4-A | M1 | Imagen-slide | ¿Qué es el estado? (general) | Prompt IA |
| 1.4-B | M1 | Imagen-slide | Tipos de estado: global vs local (general) | Prompt IA |
| 1.4-C | M1 | Imagen-slide | ¿Qué es CRUD? (general) | Prompt IA |
| 1.5 | M1 | LIBRE | Plan socrático HU1 | gen.js (solo marco) |
| 2 | M2 | LIBRE | Plan socrático HU2 | gen.js (solo marco) |
| 3 | M3 | Nativo | Texto es objeto + tabla de métodos | gen.js (tabla) |
| 3.4 | M3 | LIBRE | Plan socrático HU3 | gen.js (solo marco) |
| 4.2 | M4 | LIBRE | Plan socrático HU4 | gen.js (solo marco) |

## Próximos pasos

1. **Eric valida** esta Guía (paneles y decisión de complejidad).
2. **Prompts IA** para los 3 paneles imagen (estado / tipos / CRUD) → `CLASE 13 - PROMPTS DE IMAGEN.md`.
3. **`gen.js`** genera el Panel 3 (tabla nativa) + los 5 marcos LIBRE → `CLASE 13.excalidraw`.
4. **Alinear el guion**: reescribir los bloques EN PANTALLA del `CLASE 13.md` que mencionan paneles ya descartados (ver ⚠ en el header).
