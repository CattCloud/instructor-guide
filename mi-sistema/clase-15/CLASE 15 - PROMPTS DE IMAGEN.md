# Prompts de Imagen — CLASE 15: JSON y LocalStorage

> **Estilo canónico:** **_mi-sistema/DESARROLLO DE SLIDES.md_**.
> **Origen:** generado a partir de **_GUIA EXCALIDRAW - CLASE 15.md_** (paneles en Borrador).
> **Cómo usar:** copiar cada prompt → pegarlo en la herramienta de imagen IA → descargar → abrir **_CLASE 15.excalidraw_** en excalidraw.com y arrastrar cada imagen sobre el placeholder con el mismo `[IMG-XX]`.
> **Las cuatro imágenes son DIAGRAMAS CONCEPTUALES/REALES — no analogías ilustradas.**
> **El bloque "Estilo visual" al final de cada prompt es INAMOVIBLE.**

---

### [IMG-01]: Persistencia — memoria vs almacenamiento

- **Panel de origen:** Momento 1 — Panel 1.2
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Usado en sub-punto:** 1.2 (Persistencia, la META)

**Prompt:**

> Infografía educativa minimalista sobre "Persistencia: por qué los datos sobreviven (o no) a la recarga". Estilo diagrama técnico de libro de texto. Concepto real/técnico, NO una analogía ilustrada.
>
> **Título superior centrado en negro:** "PERSISTENCIA — datos que sobreviven a la recarga"
>
> **Dos bloques comparativos separados por una flecha central etiquetada "RECARGAR / CERRAR":**
>
> **Bloque izquierdo — EN MEMORIA (volátil):**
> - Borde rojo `#e03131`. Encabezado: "EN MEMORIA (RAM)".
> - Un ícono de chip de memoria/RAM con un objeto de datos adentro (ej. una lista `[ plantillas ]`).
> - Etiqueta: "vive solo mientras la pestaña está abierta".
> - Debajo, tras la flecha "recargar": la memoria **vacía** y el dato tachado/desvanecido, etiqueta roja: "se PIERDE".
>
> **Bloque derecho — EN ALMACENAMIENTO (persistente):**
> - Borde verde `#2f9e44`. Encabezado: "EN ALMACENAMIENTO (localStorage)".
> - Un ícono de disco/almacén con una copia del mismo dato adentro.
> - Etiqueta: "guardado en el navegador".
> - Debajo, tras la flecha "recargar": el dato **sigue ahí** y se recupera, etiqueta verde: "SOBREVIVE".
>
> **Aside inferior centrado en gris oscuro:** "Persistir = guardar el estado en un lugar que no se vacíe al recargar o cerrar."
>
> **Código de colores funcional:**
> - Rojo `#e03131`: memoria volátil, dato que se pierde.
> - Verde `#2f9e44`: almacenamiento persistente, dato que sobrevive.
> - Naranja `#f08c00`: la flecha "recargar/cerrar".
> - Negro `#1e1e1e` y gris oscuro: títulos y textos.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-02]: Dentro de localStorage — clave → valor (texto)

- **Panel de origen:** Momento 1 — Panel 1.3
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Usado en sub-punto:** 1.3 (localStorage, el MEDIO)

**Prompt:**

> Infografía educativa minimalista sobre "Cómo es por dentro localStorage: el almacén clave-valor del navegador". Estilo diagrama técnico de libro de texto.
>
> **Título superior centrado en negro:** "DENTRO DE localStorage — clave → valor (texto)"
>
> **Elemento central — una caja grande etiquetada "localStorage"** (con una etiqueta pequeña arriba: "parte del navegador, por sitio"), y adentro una **tabla de dos columnas** (CLAVE | VALOR), con 2-3 filas, TODOS los valores mostrados como texto entre comillas (monospace gris):
> - `whatsapp-templates`  |  `[{"titulo":"Saludo",...}]`
> - `whatsapp-templates-filtro`  |  `vent`
> - Un rótulo grande sobre la columna VALOR: "siempre TEXTO".
>
> **A la izquierda, la app (una ventana simple)** con dos flechas hacia/desde la caja localStorage:
> - Flecha hacia la caja (naranja `#f08c00`), etiquetada en monospace azul `#1971c2`: `setItem(clave, texto)` — "guardar".
> - Flecha desde la caja (naranja), etiquetada: `getItem(clave)` — "leer".
>
> **Aside inferior centrado en gris oscuro:** "Persiste al recargar o cerrar. Guarda pares clave → valor, y el valor SIEMPRE es texto."
>
> **Código de colores funcional:**
> - Verde `#2f9e44`: la persistencia (borde de la caja localStorage).
> - Azul `#1971c2`: los métodos en monospace (setItem/getItem).
> - Naranja `#f08c00`: las flechas de entrada/salida.
> - Negro `#1e1e1e` y gris oscuro: títulos, tabla y textos.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-03]: JSON — el traductor entre objetos y texto

- **Panel de origen:** Momento 1 — Panel 1.4
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3 — tres zonas horizontales)
- **Usado en sub-punto:** 1.4 (el rol de JSON)

**Prompt:**

> Infografía educativa minimalista sobre "JSON como traductor entre los objetos de tu app y el texto de localStorage". Estilo diagrama técnico de libro de texto. Layout en tres zonas horizontales conectadas por flechas.
>
> **Título superior centrado en negro:** "JSON — el traductor entre tus OBJETOS y el TEXTO de localStorage"
>
> **Zona izquierda — OBJETO / ARRAY de datos:**
> - Una caja con borde azul `#1971c2` que muestra un objeto/array de JavaScript (con colores de sintaxis, claves sin comillas): `[{ titulo: "Saludo", fecha: Date }]`.
> - Etiqueta: "tus datos en la app (objetos)".
>
> **Zona central — JSON (el traductor):**
> - Una caja/engranaje etiquetada grande "JSON" en el medio.
> - Dos flechas horizontales cruzando el centro:
>   - Flecha hacia la DERECHA (verde `#2f9e44`), etiquetada en monospace: `JSON.stringify` — "objeto → texto".
>   - Flecha hacia la IZQUIERDA (naranja `#f08c00`), etiquetada en monospace: `JSON.parse` — "texto → objeto".
>
> **Zona derecha — localStorage (texto):**
> - Una caja con borde gris que muestra el texto JSON: `'[{"titulo":"Saludo",...}]'` (monospace, entre comillas).
> - Etiqueta: "lo que localStorage puede guardar (texto)".
>
> **Aside inferior centrado en gris oscuro:** "localStorage solo guarda texto. JSON traduce en las dos direcciones: stringify para guardar, parse para leer."
>
> **Código de colores funcional:**
> - Azul `#1971c2`: los objetos/datos de la app.
> - Verde `#2f9e44`: stringify (guardar).
> - Naranja `#f08c00`: parse (leer).
> - Negro `#1e1e1e` y gris oscuro: títulos, el texto JSON y descripciones.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-04]: Deserialización — de texto a objeto (y qué se reconstruye)

- **Panel de origen:** Momento 2 — Panel 2.2
- **Dimensiones objetivo:** 1400×800 px (ratio 7:4 — flujo horizontal)
- **Usado en sub-punto:** 2.2 (`JSON.parse` + el objeto genérico)

**Prompt:**

> Infografía educativa minimalista sobre "Deserialización: el flujo de texto JSON a objeto, y qué se pierde en el camino". Estilo diagrama de flujo técnico de libro de texto. Layout horizontal de etapas conectadas por flechas.
>
> **Título superior centrado en negro:** "DESERIALIZACIÓN — de texto a objeto (y qué se reconstruye)"
>
> **Flujo horizontal de 4 etapas conectadas por flechas naranjas `#f08c00`:**
>
> 1. **[TEXTO JSON]** (caja gris, monospace): `'[{"titulo":"Saludo","fecha":"2026-06-29T..."}]'`. Etiqueta: "lo guardado (texto)".
> 2. Flecha etiquetada en monospace azul `#1971c2`: **`JSON.parse`**.
> 3. **[OBJETO GENÉRICO]** (caja azul): `{ titulo: "Saludo", fecha: "2026-..." }`. Etiqueta destacada en rojo `#e03131`: "los DATOS sí; la clase y los tipos NO (la fecha volvió como TEXTO)".
> 4. Flecha etiquetada: **reconstruir** — `new Date(...)` / `new Clase(...)`.
> 5. **[OBJETO COMPLETO]** (caja verde `#2f9e44`): la fecha ya es un `Date` de nuevo, utilizable. Etiqueta: "tipo reconstruido, listo para usar".
>
> **Aside inferior centrado en gris oscuro:** "JSON.parse devuelve un objeto plano: los tipos complejos (como Date) hay que reconstruirlos después."
>
> **Código de colores funcional:**
> - Gris: el texto JSON de entrada.
> - Azul `#1971c2`: los métodos (JSON.parse) y el objeto genérico.
> - Rojo `#e03131`: lo que se pierde (la clase/los tipos).
> - Verde `#2f9e44`: el objeto ya reconstruido y utilizable.
> - Naranja `#f08c00`: las flechas del flujo.
> - Negro `#1e1e1e` y gris oscuro: títulos y textos.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

## Notas finales

- Los 4 prompts generan los paneles **1.2 [IMG-01]**, **1.3 [IMG-02]**, **1.4 [IMG-03]** y **2.2 [IMG-04]**.
- Los otros 5 paneles (1.5, 2.3, 3.2, 4.2, 5.2) son **marcos LIBRE** por HU y salen de **_gen.js_**.
- Con las imágenes: abrir `CLASE 15.excalidraw`, localizar los rectángulos punteados `[IMG-01..04]` y arrastrar cada imagen a su marco.
