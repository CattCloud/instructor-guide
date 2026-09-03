# Prompts de Imagen — CLASE 16: Módulos (ESM) y Cierre del Proyecto

> **Estilo canónico:** **_mi-sistema/DESARROLLO DE SLIDES.md_**.
> **Origen:** paneles definidos por Eric para **_CLASE 16.excalidraw_** (generado por **_gen.js_**).
> **Cómo usar:** copiar cada prompt → pegarlo en la herramienta de imagen IA → descargar → abrir **_CLASE 16.excalidraw_** en excalidraw.com y arrastrar cada imagen sobre el placeholder con el mismo `[IMG-XX]`.
> **Las dos imágenes son DIAGRAMAS CONCEPTUALES/TÉCNICOS — no analogías ilustradas.**
> **El bloque "Estilo visual" al final de cada prompt es INAMOVIBLE.**

---

### [IMG-01]: ¿Qué es un módulo? — archivo con ámbito propio

- **Panel de origen:** Momento 3 — Panel 3.2
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Usado en sub-punto:** 3.2 A (¿Qué es un módulo?)

**Prompt:**

> Infografía educativa minimalista sobre "Qué es un módulo: un archivo de JavaScript con su propio ámbito, que comparte solo lo que exporta". Estilo diagrama técnico de libro de texto. Concepto real/técnico, NO una analogía ilustrada.
>
> **Título superior centrado en negro:** "¿QUÉ ES UN MÓDULO? — un archivo con su propio ámbito"
>
> **Elemento central — una caja grande que representa un archivo `.js`** (con una pestaña/etiqueta arriba tipo pestaña de archivo: `matematica.js`), borde azul `#1971c2`. Dentro de la caja, dos zonas claramente separadas:
>
> **Zona PÚBLICA (arriba, con un pequeño ícono de puerta/ventanilla abierta hacia afuera):**
> - Encabezado verde `#2f9e44`: "EXPORTADO (público)".
> - Dos elementos en monospace: `export const PI` y `export function sumar()`.
> - Una flecha verde saliendo de la caja hacia afuera, etiquetada: "disponible para otros módulos".
>
> **Zona PRIVADA (abajo, con un pequeño ícono de candado):**
> - Encabezado gris oscuro: "PRIVADO (no exportado)".
> - Un elemento en monospace atenuado: `const SECRETO = 42`.
> - Etiqueta roja `#e03131`: "queda encerrado en el archivo; nadie de afuera lo ve".
>
> **Etiqueta lateral sobre la caja completa:** "cada módulo tiene su propio ámbito (scope)".
>
> **Aside inferior centrado en gris oscuro:** "Un módulo es un archivo JS: comparte solo lo que exporta, el resto queda privado. Un archivo se vuelve módulo en cuanto usa `export`."
>
> **Código de colores funcional:**
> - Azul `#1971c2`: el archivo/módulo (borde de la caja).
> - Verde `#2f9e44`: lo exportado / público, la flecha de salida.
> - Rojo `#e03131`: lo privado que no puede salir.
> - Negro `#1e1e1e` y gris oscuro: títulos, código y textos.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-02]: Interacción entre dos archivos — `export` → `import`

- **Panel de origen:** Momento 3 — Panel 3.4
- **Dimensiones objetivo:** 1300×900 px (ratio ~13:9 — dos archivos lado a lado)
- **Usado en sub-punto:** 3.2 D–E (exportar e importar entre dos módulos)

**Prompt:**

> Infografía educativa minimalista sobre "Cómo se comunican dos archivos con export e import". Estilo diagrama técnico de libro de texto. Dos archivos lado a lado conectados por una flecha. Concepto real/técnico, NO una analogía ilustrada.
>
> **Título superior centrado en negro:** "export → import — cómo se comunican dos módulos"
>
> **Dos cajas de archivo lado a lado, cada una con su pestaña de nombre arriba:**
>
> **Archivo izquierdo — `matematica.js` (el que EXPORTA), borde verde `#2f9e44`:**
> - Encabezado: "MÓDULO DE EXPORTACIÓN".
> - En monospace, con la palabra `export` resaltada en verde:
>   - `export const PI = 3.1416;`
>   - `export function sumar(a, b) { ... }`
> - Etiqueta pequeña: "pone estos elementos en el 'mostrador'".
>
> **Archivo derecho — `principal.js` (el que IMPORTA), borde azul `#1971c2`:**
> - Encabezado: "MÓDULO DE IMPORTACIÓN".
> - En monospace, con `import` resaltado en azul, en la parte SUPERIOR del archivo:
>   - `import { PI, sumar } from "./matematica.js";`
>   - `console.log(sumar(2, 3)); // 5`
> - Etiqueta pequeña: "trae por nombre lo que necesita".
>
> **Flecha central grande de izquierda a derecha (naranja `#f08c00`)**, etiquetada: "los nombres deben COINCIDIR". Sobre la flecha, un rótulo pequeño: `{ PI, sumar }`.
>
> **Banda inferior — el HTML que los activa (caja gris con monospace):** `<script type="module" src="principal.js"></script>`, con una etiqueta: "type=module activa los módulos + orden automático".
>
> **Aside inferior centrado en gris oscuro:** "export comparte; import trae de ese archivo por su ruta. Solo se puede importar lo que se exportó."
>
> **Código de colores funcional:**
> - Verde `#2f9e44`: el archivo que exporta y la palabra `export`.
> - Azul `#1971c2`: el archivo que importa y la palabra `import`.
> - Naranja `#f08c00`: la flecha de conexión entre ambos.
> - Gris: la banda del `<script type="module">`.
> - Negro `#1e1e1e` y gris oscuro: títulos, código y textos.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

## Notas finales

- Los 2 prompts generan los paneles **3.2 [IMG-01]** (¿Qué es un módulo?) y **3.4 [IMG-02]** (interacción export→import).
- El panel **1.3** es una **imagen propia de Eric** (captura de un modal en vivo) — sin prompt IA, solo dejar el espacio.
- Los paneles **1.4, 2.2, 4.0** son **marcos LIBRE** por HU y salen de **_gen.js_**; los paneles **3.3** (tabla 4 razones) y **3.5** (tabla archivo/responsabilidad/exporta) son **nativos** de Excalidraw, también desde **_gen.js_**.
- Con las imágenes: abrir `CLASE 16.excalidraw`, localizar los rectángulos punteados `[IMG-01]` y `[IMG-02]` y arrastrar cada imagen a su marco.
