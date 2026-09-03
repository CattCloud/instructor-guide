# GUÍA EXCALIDRAW — CLASE 14: Interacción y Datos Derivados

> **Curso:** Code 201
> **Módulo:** M4 — Clase 2 de 4
> **Estado:** Paneles documentados — pendiente validación de Eric
> **Total Paneles:** 4 — **2 Imagen-slide** (delegación/bubbling · mutar vs no-mutar) + **2 Hand-drawn nativos** (tabla "¿muta o no muta?" · mapa del día + arco M4)
> **Fecha:** 2026-07-02
> **Fuente del guion:** `mi-sistema/clase-14/CLASE 14.md`
> **Generador (nativo):** `mi-sistema/clase-14/gen.js` — `node gen.js "CLASE 14.excalidraw"`. Genera los 2 paneles nativos + los 2 placeholders de imagen.
> **Decisión de complejidad:** Guía SIMPLE (misma línea que C13). Solo 2 conceptos invisibles llevan imagen (la propagación de eventos y la inmutabilidad). Un panel nativo de tabla para el hilo del día (¿qué método muta?). **Las HU NO llevan marco LIBRE:** hoy se construyen paso a paso en VS Code (formato interlazado paso → código → porqué), no con un plan socrático que se escriba en vivo.
>
> **Convención de colores** (igual que C09-C13): código/sintaxis = azul **_#1971c2_**; aciertos/no-muta = verde **_#2f9e44_**; problema/muta/advertencia = rojo **_#e03131_**; etiquetas/flechas = naranja **_#f08c00_**; títulos = negro **_#1e1e1e_**. **Sin emojis. Sin dibujos de metáfora ilustrada.**
>
> **Sub-puntos SIN panel Excalidraw** (VS Code / navegador / consola): 1.1, 1.2 (dentro de HU1), 1.4 (HU1), 2.1, 2.2 (spread, consola), 2.4 (HU2), 3.1, 3.2 (HU3), 4.1, 4.2 (HU4), 5.1, 5.2 (sort, consola), 5.3 (HU5).

---

## Momento 1 — Delegación de eventos

### Panel 1.3 — Delegación de eventos: propagación (bubbling) [IMG-01]

- **Trigger en el guion:** 1.3, bloque *"cómo se propaga un evento en el árbol DOM"*.
- **Tipo:** Imagen-slide (infografía IA). **General — el mecanismo del DOM, no el proyecto.**
- **Concepto que visualiza:** por qué un listener en el padre atiende clics de los hijos (el evento burbujea hacia arriba).
- **Contenido (para el prompt IA):**
  - **Título:** "DELEGACIÓN DE EVENTOS — el clic 'burbujea' hacia arriba".
  - Árbol DOM vertical: **_&lt;ul&gt;_** (arriba) → **_&lt;li&gt;_** → **_&lt;button&gt;_** (abajo), como cajas anidadas.
  - Un **clic** marcado en el **_&lt;button&gt;_** (el más profundo), y una **flecha naranja** que SUBE atravesando `li` y `ul` (el bubbling).
  - En el **_&lt;ul&gt;_**: un ícono de "oído"/listener (verde) con la etiqueta "1 listener acá escucha a todos".
  - Aside al pie: "Actuamos en el hijo (button), pero escuchamos en el padre (ul). Por eso un solo listener basta."
- **Anchor pedagógico:** la flecha que sube es el porqué de la delegación.

---

## Momento 2 — Inmutabilidad

### Panel 2.3-A — Mutar vs No-mutar [IMG-02]

- **Trigger en el guion:** 2.3, EN PANTALLA de *"Inmutabilidad — qué es y por qué"*.
- **Tipo:** Imagen-slide (infografía IA). **General — el concepto, no el proyecto.**
- **Concepto que visualiza:** el Principio de Inmutabilidad — no se toca el original, se crea una versión nueva.
- **Contenido (para el prompt IA):**
  - **Título:** "PRINCIPIO DE INMUTABILIDAD — nueva versión, no modificar el original".
  - **Columna izquierda "MUTAR" (rojo):** un objeto/caja que se **tacha y reescribe encima** (queda sucio); código `obj.titulo = "nuevo"` / `arr.push(x)`. Etiqueta: "modifica el original — imposible saber qué cambió".
  - **Columna derecha "NO MUTAR" (verde):** el original intacto + una **copia nueva** con el cambio; código `{ ...obj, titulo: "nuevo" }` / `[...arr, x]`. Etiqueta: "nueva versión; el original queda intacto".
  - Aside al pie: "El estado se vuelve predecible: cada cambio es una versión nueva y comparable."
- **Anchor pedagógico:** el contraste visual "tachar encima" vs "copia nueva".

### Panel 2.3-B — Métodos de array: ¿muta o no muta? (NATIVO)

- **Trigger en el guion:** apoyo en 2.3 (tabla de referencia del día).
- **Tipo:** Hand-drawn NATIVO (gen.js) — tabla técnica. Referencia para todo el día.
- **Contenido (para gen.js):**
  - **Título:** "MÉTODOS DE ARRAY — ¿muta o no muta?".
  - **Tabla 3 columnas × 8 filas** (header + 7):

  | Método | Qué devuelve | ¿Muta el original? |
  |---|---|---|
  | **_.filter(cond)_** | array nuevo con los que cumplen | NO — devuelve nuevo |
  | **_.map(fn)_** | array nuevo transformado | NO — devuelve nuevo |
  | **_.find(cond)_** | el primer elemento que cumple | NO |
  | **_.reduce(fn, init)_** | un solo valor acumulado | NO |
  | **_[...arr]_** (spread) | una copia nueva | NO |
  | **_.sort(comp)_** | el MISMO array, ordenado | **SÍ MUTA** → copiar con `[...]` |
  | **_.push(x)_** | la nueva longitud (agrega) | **SÍ MUTA** |

  - Filas "NO" en verde, filas "SÍ MUTA" en rojo.
  - **Aside destacado:** "Para no romper el estado: usá los que devuelven algo NUEVO; y para `sort`, copiá con `[...]` ANTES."
- **Anchor pedagógico:** el mapa mental del día — qué método respeta la inmutabilidad.

---

## Momento 5 — Cierre

### Panel 5.4 — Mapa del día + arco del M4 (NATIVO)

- **Trigger en el guion:** 5.4, cierre de la clase.
- **Tipo:** Hand-drawn NATIVO (gen.js) — cajas + flechas simples.
- **Contenido (para gen.js):**
  - **Título:** "C14 — lo que se llevan".
  - **Dos tesis** (cajas): (1) "Se actualiza el estado generando uno NUEVO (inmutabilidad)"; (2) "La UI entera es un dato DERIVADO del estado".
  - **CRUD completo:** C·R (C13) + U·D (hoy).
  - **Arco del M4** (línea): C13 → **C14 (hoy)** → C15 (localStorage / persistencia) → C16 (lab calificado).
- **Anchor pedagógico:** cierre visual del CRUD completo y qué viene.

---

## Tabla resumen de paneles

| Panel | Momento | Tipo | Contenido | Generación |
|---|---|---|---|---|
| 1.3 [IMG-01] | M1 | Imagen | Delegación / bubbling (general) | Prompt IA |
| 2.3-A [IMG-02] | M2 | Imagen | Mutar vs no-mutar (general) | Prompt IA |
| 2.3-B | M2 | Nativo | Tabla ¿muta o no muta? | gen.js |
| 5.4 | M5 | Nativo | Mapa del día + arco M4 | gen.js |

## Próximos pasos

1. **Eric valida** esta Guía (paneles y complejidad).
2. **Prompts IA** para las 2 imágenes → `CLASE 14 - PROMPTS DE IMAGEN.md`.
3. **`gen.js`** genera los 2 paneles nativos + los 2 placeholders → `CLASE 14.excalidraw`.
