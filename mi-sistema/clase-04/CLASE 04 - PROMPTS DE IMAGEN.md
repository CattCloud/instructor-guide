# Prompts de Imagen — CLASE 04: CSS Variables + Forms Validados + Git Workflow

> **Estilo canónico:** **_mi-sistema/DESARROLLO DE SLIDES.md_**.
> **Origen:** generado a partir de **_GUIA EXCALIDRAW - CLASE 04.md_** (estado: Paneles en Borrador — pendiente validación de Eric).
> **Cómo usar:**
> 1. Copiar cada prompt completo (el bloque entre las líneas `### [IMG-XX]:` y el siguiente `---`).
> 2. Pegar en la herramienta de imagen IA de elección (ChatGPT con generación de imagen, Sora, Gemini, DALL-E, Midjourney, etc.).
> 3. Descargar la imagen generada.
> 4. Abrir **_CLASE 04.excalidraw_** en excalidraw.com (cuando esté generado), arrastrar la imagen sobre el placeholder con el mismo `[IMG-XX]` ID y ajustar al rectángulo punteado.
>
> **Importante:** el bloque "Estilo visual" al final de cada prompt es INAMOVIBLE. No reescribirlo ni parafrasearlo. Si lo modificás, el estilo deja de coincidir con el resto del material visual del bootcamp.

---

## Prompts IA (16 imágenes)

---

### [IMG-01]: Anatomía de una CSS Custom Property — declaración y uso

- **Panel de origen:** Momento 1 — Panel 1.1
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón pedagógico:** Anatomía de sintaxis con flechas + Comparativa lado a lado conectada por flecha curva central
- **Usado en sub-punto:** 1.2 (¿Qué es una CSS Variable?)

**Prompt:**

> Infografía educativa minimalista sobre "CSS Custom Property — declaración y uso". Estilo diagrama técnico de libro de texto. Diseño en dos columnas paralelas conectadas por una flecha curva central que cruza el panel.
>
> **Título superior centrado en negro:** "CSS CUSTOM PROPERTY — DECLARACIÓN Y USO"
>
> **Subtítulo en gris oscuro debajo del título:** "Una variable nativa de CSS: se declara una vez, se usa en todas las reglas que la necesiten."
>
> **Columna izquierda — DECLARACIÓN:**
>
> - Encabezado grande en azul: "DECLARACIÓN"
> - Bloque de código en monospace azul con borde gris claro:
>   ```
>   :root {
>     --color-accent: #0066cc;
>   }
>   ```
> - Anotación con flecha verde desde `--color-accent` hacia una etiqueta a la izquierda: "Nombre del token — siempre arranca con `--`"
> - Anotación con flecha naranja desde `#0066cc` hacia una etiqueta a la izquierda: "Valor que vas a reutilizar"
> - Etiqueta lateral en gris oscuro: "Vive en :root (el siguiente Panel)"
>
> **Columna derecha — USO:**
>
> - Encabezado grande en verde: "USO"
> - Bloque de código en monospace azul con borde gris claro:
>   ```
>   nav a:hover {
>     color: var(--color-accent);
>   }
>   ```
> - Anotación con flecha azul desde `var(--color-accent)` hacia una etiqueta a la derecha: "`var()` recupera el valor del token"
> - Etiqueta lateral en gris oscuro: "El navegador lee el token y reemplaza por su valor al pintar"
>
> **Flecha curva grande en el centro del Panel, gruesa, en negro:**
>
> - Va desde el token declarado en la izquierda hacia el `var()` de la derecha.
> - Etiqueta sobre la flecha en negro: "MISMO NOMBRE — el navegador hace el match"
>
> **Recuadro inferior con borde gris claro — fallback opcional:**
>
> - Encabezado en gris oscuro: "Con fallback opcional:"
> - Bloque de código pequeño en monospace azul: `color: var(--color-accent, #000);`
> - Texto al lado en negro: "Si el token no existe, usa el segundo valor como respaldo."
>
> **Nota inferior en negro:** "Case-sensitive. El doble `--` es obligatorio. Distinto de `let` / `const` / `var` de JS — esto vive en el CSS, no en JavaScript."
>
> **Código de colores funcional:**
> - Encabezado de la columna izquierda (DECLARACIÓN): azul `#1971c2`.
> - Encabezado de la columna derecha (USO): verde `#2f9e44`.
> - Flecha y etiqueta del nombre del token: verde `#2f9e44`.
> - Flecha y etiqueta del valor: naranja `#f08c00`.
> - Flecha y etiqueta del `var()`: azul `#1971c2`.
> - Flecha curva central de conexión: negro `#1e1e1e`.
> - Bloques de código: azul `#1971c2`.
> - Textos descriptivos y notas: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-02]: `:root` apunta a `<html>` + cascada del DOM

- **Panel de origen:** Momento 1 — Panel 1.2
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón pedagógico:** Wireframe del DOM en árbol + Anatomía de la pseudo-clase con flecha al nodo apuntado
- **Usado en sub-punto:** 1.3 (`:root` — el selector raíz del documento)

**Prompt:**

> Infografía educativa minimalista sobre "`:root` — el selector raíz del documento". Estilo diagrama técnico de libro de texto. Diseño en dos secciones lado a lado: árbol del DOM a la izquierda, sintaxis y reglas a la derecha.
>
> **Título superior centrado en negro:** "`:root` — EL SELECTOR RAÍZ DEL DOCUMENTO"
>
> **Subtítulo en gris oscuro debajo del título:** "Apunta al `<html>`. Las variables declaradas acá caen en cascada hacia TODO el documento."
>
> **Sección izquierda — Árbol del DOM:**
>
> - Encabezado pequeño en gris oscuro: "El árbol del documento"
> - Diagrama vertical de nodos conectados por líneas grises representando la jerarquía del HTML:
>   - Nodo raíz `<html>` arriba, rectángulo grande con borde azul grueso y fondo blanco. Etiqueta lateral con flecha roja apuntando al nodo: "`:root` apunta ACÁ"
>   - Debajo, dos nodos hermanos en el mismo nivel: `<head>` (rectángulo gris claro con etiqueta neutra) y `<body>` (rectángulo más grande con fondo blanco y borde azul fino).
>   - Dentro de `<body>`, tres nodos hijos: `<header>`, `<main>`, `<footer>` (rectángulos pequeños con bordes grises).
>   - Dentro de `<main>`, dos nodos más chicos: `<section>` y `<article>`.
> - Líneas verdes punteadas saliendo del nodo `<html>` y atravesando hacia abajo a TODOS los descendientes, etiquetadas en verde: "cascada de variables"
>
> **Sección derecha — La sintaxis y la regla:**
>
> - Encabezado en azul: "Declaración global"
> - Bloque de código en monospace azul con borde gris claro:
>   ```
>   :root {
>     --color-primary: #1a1a1a;
>     --color-accent: #0066cc;
>     --space-md: 16px;
>     /* ...todos los tokens globales... */
>   }
>   ```
> - Recuadro debajo con borde verde:
>   - Encabezado en verde: "Por qué `:root` y no `body`:"
>   - Bullets en negro:
>     - "`:root` es `<html>` — un nivel más arriba que `body`"
>     - "Mayor especificidad si hay colisión con `html { }`"
>     - "Convención universal de la industria (Material, Tailwind, Bootstrap)"
>
> **Comparativa al pie en recuadro con borde rojo — qué NO hacer:**
>
> - Encabezado en rojo: "Si declarás los tokens en `.contenedor` en lugar de `:root`"
> - Texto en negro: "Los tokens solo viven dentro de `.contenedor`. El resto del documento NO los ve. La regla queda atada a una sección del CSS y deja de servir como variable global."
>
> **Nota inferior en negro:** "El nombre `:root` significa literalmente 'raíz del documento'. En HTML es siempre `<html>`. En otros formatos (XML, SVG) puede ser otro elemento — pero en HTML, es `<html>`."
>
> **Código de colores funcional:**
> - Borde del nodo `<html>` (raíz): azul `#1971c2` grueso.
> - Flecha y etiqueta señalando `:root` apuntando al nodo: rojo `#e03131`.
> - Líneas punteadas de cascada hacia los descendientes: verde `#2f9e44`.
> - Recuadro inferior de "qué NO hacer": borde rojo `#e03131`.
> - Recuadro de "por qué `:root` y no `body`": borde verde `#2f9e44`.
> - Bloque de código CSS: azul `#1971c2`.
> - Textos descriptivos y bullets: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-03]: Sistema de tokens — 4 categorías y nombrado semántico

- **Panel de origen:** Momento 1 — Panel 1.3
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Tabla taxonómica de 4 columnas + Comparativa de buen vs mal nombrado al pie
- **Usado en sub-punto:** 1.5 (Sistema de tokens — nombrado semántico)

**Prompt:**

> Infografía educativa minimalista sobre "Sistema de tokens CSS — 4 categorías y nombrado semántico". Estilo diagrama técnico de libro de texto. Diseño en 4 columnas paralelas con encabezados de colores funcionales distintos, más una caja al pie con la regla de nombrado.
>
> **Título superior centrado en negro:** "SISTEMA DE TOKENS — 4 CATEGORÍAS, NOMBRADO SEMÁNTICO"
>
> **Subtítulo en gris oscuro debajo del título:** "El nombre del token dice el PROPÓSITO, no la APARIENCIA. Eso es lo que lo hace profesional."
>
> **Columna 1 — COLORES (encabezado verde):**
>
> - Encabezado en verde: "1. COLORES"
> - Sub-etiqueta en gris oscuro: "Paleta del producto"
> - Lista de tokens en monospace azul:
>   - `--color-primary: #1a1a1a`
>   - `--color-accent: #0066cc`
>   - `--color-text: #333`
>   - `--color-bg: #fff`
>   - `--color-bg-soft: #f5f5f5`
>   - `--color-border: #e0e0e0`
>
> **Columna 2 — TIPOGRAFÍA (encabezado naranja):**
>
> - Encabezado en naranja: "2. TIPOGRAFÍA"
> - Sub-etiqueta en gris oscuro: "Familia + tamaños"
> - Lista de tokens en monospace azul:
>   - `--font-text: 'Inter', sans-serif`
>   - `--font-size: 16px`
>   - `--font-size-title: 28px`
>
> **Columna 3 — ESPACIOS (encabezado azul):**
>
> - Encabezado en azul: "3. ESPACIOS"
> - Sub-etiqueta en gris oscuro: "Escala de spacing"
> - Lista de tokens en monospace azul:
>   - `--space-sm: 8px`
>   - `--space-md: 16px`
>   - `--space-lg: 32px`
>
> **Columna 4 — ESTÉTICA (encabezado rojo):**
>
> - Encabezado en rojo: "4. ESTÉTICA"
> - Sub-etiqueta en gris oscuro: "Radius + sombras"
> - Lista de tokens en monospace azul:
>   - `--radius: 8px`
>   - `--shadow-sm: 0 1px 3px rgba(0,0,0,0.08)`
>   - `--shadow-md: 0 4px 12px rgba(0,0,0,0.12)`
>
> **Caja destacada al pie en recuadro con borde rojo grueso, ancho completo — comparativa de nombrado:**
>
> - Encabezado en rojo: "REGLA DE NOMBRADO — propósito, NO apariencia"
> - 3 sub-columnas internas con la comparativa:
>   - Sub-columna A (verde): `--color-accent` ✅ — "sobrevive cualquier cambio futuro de color"
>   - Sub-columna B (rojo): `--azul` ❌ — "muere apenas el cliente diga 'ya no es azul, es verde'"
>   - Sub-columna C (rojo): `--c2` ❌ — "no dice nada — ni vos en 6 meses sabés qué es"
>
> **Nota inferior en negro:** "Esta estructura es la mínima profesional. Design systems grandes (Material, Tailwind) tienen 200-300 tokens — misma lógica, más categorías. Lo aprenden hoy, lo aplican toda su carrera."
>
> **Código de colores funcional:**
> - Encabezado columna 1 (Colores): verde `#2f9e44`.
> - Encabezado columna 2 (Tipografía): naranja `#f08c00`.
> - Encabezado columna 3 (Espacios): azul `#1971c2`.
> - Encabezado columna 4 (Estética): rojo `#e03131`.
> - Bloques de código de tokens: azul `#1971c2`.
> - Caja al pie con la regla de nombrado: borde rojo `#e03131`.
> - Ejemplo `--color-accent` ✅: verde `#2f9e44`.
> - Ejemplos `--azul` y `--c2` ❌: rojo `#e03131`.
> - Textos descriptivos y bullets: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-04]: Anatomía de `box-shadow` — 4 partes + comparativa sin/con sombra

- **Panel de origen:** Momento 1 — Panel 1.4
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Anatomía de sintaxis con 4 flechas + Comparativa visual sin sombra / con sombra
- **Usado en sub-punto:** 1.7 (`box-shadow` — agregar profundidad)

**Prompt:**

> Infografía educativa minimalista sobre "box-shadow — anatomía del valor". Estilo diagrama técnico de libro de texto. Diseño vertical: anatomía del valor con 4 flechas arriba, comparativa visual sin/con sombra en el medio, tabla de las 2 sombras del lab al pie.
>
> **Título superior centrado en negro:** "BOX-SHADOW — ANATOMÍA DEL VALOR"
>
> **Subtítulo en gris oscuro debajo del título:** "4 partes en orden: offset-x · offset-y · blur · color. Cada una controla algo distinto."
>
> **Sección 1 — Anatomía del valor (arriba, centrada):**
>
> - Bloque de código grande en monospace azul: `box-shadow: 0 4px 12px rgba(0,0,0,0.12);`
> - 4 flechas con anotaciones, cada una de su color funcional:
>   - Flecha verde desde `0` → etiqueta: "OFFSET-X — desplazamiento horizontal (0 = centrada)"
>   - Flecha naranja desde `4px` → etiqueta: "OFFSET-Y — desplazamiento vertical (positivo = abajo)"
>   - Flecha azul desde `12px` → etiqueta: "BLUR — difuminado del borde de la sombra"
>   - Flecha roja desde `rgba(0,0,0,0.12)` → etiqueta: "COLOR + ALPHA — negro al 12% de opacidad"
>
> **Sección 2 — Comparativa visual (debajo de la anatomía, dos columnas):**
>
> **Columna izquierda — SIN sombra:**
> - Encabezado en gris oscuro: "Sin `box-shadow`"
> - Card de muestra: rectángulo plano blanco con borde gris muy fino. Adentro: título "Card" + 3 líneas grises de placeholder.
> - Etiqueta lateral en gris oscuro: "Plana — no se siente como objeto físico."
>
> **Columna derecha — CON sombra:**
> - Encabezado en verde: "Con `box-shadow: var(--shadow-sm)`"
> - Card idéntica en contenido y dimensiones, pero con una sombra discreta cayendo 1px hacia abajo, blur de 3px, opacidad 8%.
> - Etiqueta lateral en gris oscuro: "Tiene profundidad — se siente apoyada sobre la página."
>
> **Sección 3 — Tabla al pie con las 2 sombras del lab, en recuadro con borde gris claro:**
>
> - Fila 1 — `--shadow-sm: 0 1px 3px rgba(0,0,0,0.08)` — "Estado base (card apoyada)"
> - Fila 2 — `--shadow-md: 0 4px 12px rgba(0,0,0,0.12)` — "Estado hover (card levantada)"
>
> **Nota inferior en negro:** "box-shadow NO afecta el layout — no empuja a los vecinos. Solo pinta encima/debajo. Por eso animarlo es barato y combina perfecto con `transition` (siguiente Panel)."
>
> **Código de colores funcional:**
> - Flecha y etiqueta del offset-x: verde `#2f9e44`.
> - Flecha y etiqueta del offset-y: naranja `#f08c00`.
> - Flecha y etiqueta del blur: azul `#1971c2`.
> - Flecha y etiqueta del color + alpha: rojo `#e03131`.
> - Encabezado de la columna "Sin box-shadow": gris oscuro.
> - Encabezado de la columna "Con box-shadow": verde `#2f9e44`.
> - Bloque de código central: azul `#1971c2`.
> - Bordes de cards de muestra: gris claro.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-05]: Anatomía de `transition` — 3 partes + 0s vs 0.2s + regla base

- **Panel de origen:** Momento 1 — Panel 1.5
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Anatomía de sintaxis + Secuencia temporal de frames + Regla técnica destacada
- **Usado en sub-punto:** 1.8 (`transition` — suavizar el cambio)

**Prompt:**

> Infografía educativa minimalista sobre "transition — suavizar el cambio". Estilo diagrama técnico de libro de texto. Diseño vertical: anatomía del valor con 3 flechas arriba, diagrama temporal 0s vs 0.2s en el medio, regla inamovible "vive en base" al pie con sub-bloques correcto/incorrecto.
>
> **Título superior centrado en negro:** "TRANSITION — SUAVIZAR EL CAMBIO"
>
> **Subtítulo en gris oscuro debajo del título:** "Hace que el cambio de A a B se reparta sobre un período de tiempo. Sin esto, el cambio es instantáneo."
>
> **Sección 1 — Anatomía del valor (arriba, centrada):**
>
> - Bloque de código grande en monospace azul: `transition: box-shadow 0.2s, transform 0.2s;`
> - 3 flechas con anotaciones:
>   - Flecha verde desde `box-shadow, transform` → etiqueta: "PROPIEDADES a animar (lista separada por coma)"
>   - Flecha naranja desde `0.2s` → etiqueta: "DURACIÓN — 200 milisegundos"
>   - Flecha azul desde el final del valor → etiqueta: "TIMING — default `ease` (acelera al inicio, desacelera al final)"
>
> **Sección 2 — Diagrama temporal 0s vs 0.2s (debajo, dos columnas):**
>
> **Columna izquierda — Sin transition (0s):**
> - Encabezado en rojo: "Sin `transition` (0s)"
> - Línea de tiempo horizontal con 2 estados: estado A (caja gris claro) en t=0ms, salto vertical brusco a estado B (caja gris oscuro) en t=0ms+1 frame.
> - Anotación en gris oscuro: "1 frame único — el ojo lo percibe como salto"
>
> **Columna derecha — Con `transition: 0.2s`:**
> - Encabezado en verde: "Con `transition: 0.2s`"
> - Línea de tiempo horizontal con aproximadamente 12-13 puntos intermedios entre estado A y estado B, cada uno con un gradiente intermedio de color (interpolación visual).
> - Etiquetas debajo de la línea: "0ms" — "100ms" — "200ms"
> - Anotación en gris oscuro: "12 frames a 60fps — el ojo percibe un cambio fluido"
>
> **Sección 3 — Regla inamovible (recuadro destacado al pie, borde rojo grueso):**
>
> - Encabezado en rojo: "REGLA: `transition` vive en la regla BASE, NO en `:hover`"
> - Dos sub-bloques en paralelo:
>
>   **Sub-bloque correcto (borde verde):**
>   - Bloque de código en monospace azul:
>     ```
>     .card { transition: box-shadow 0.2s; }
>     .card:hover { box-shadow: var(--shadow-md); }
>     ```
>   - Etiqueta verde: "Anima al ENTRAR y al SALIR del mouse"
>
>   **Sub-bloque incorrecto (borde rojo):**
>   - Bloque de código en monospace azul:
>     ```
>     .card:hover { transition: box-shadow 0.2s; ... }
>     ```
>   - Etiqueta roja: "Solo anima al entrar. Al salir, salto instantáneo — parece roto."
>
> **Nota inferior en negro:** "Pensá la transition como un seguro permanente — 'cualquier cambio que sufra esta propiedad, anímalo'. Si la ponés en :hover, el seguro solo está activo cuando el mouse está encima."
>
> **Código de colores funcional:**
> - Flecha y etiqueta de propiedades: verde `#2f9e44`.
> - Flecha y etiqueta de duración: naranja `#f08c00`.
> - Flecha y etiqueta de timing: azul `#1971c2`.
> - Encabezado "Sin transition" y borde del sub-bloque incorrecto: rojo `#e03131`.
> - Encabezado "Con transition" y borde del sub-bloque correcto: verde `#2f9e44`.
> - Recuadro de la regla inamovible al pie: borde rojo `#e03131` grueso.
> - Bloques de código: azul `#1971c2`.
> - Bordes de los estados en el diagrama temporal: gris claro.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-06]: Microinteracción `:hover` + `translateY(-4px)` — estados base vs hover

- **Panel de origen:** Momento 1 — Panel 1.6
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Comparativa de 2 estados del mismo elemento + Anatomía CSS del patrón canónico + Caja "por qué transform y no margin"
- **Usado en sub-punto:** 1.9 (Microinteracción `:hover` + `transform: translateY`)

**Prompt:**

> Infografía educativa minimalista sobre "Microinteracción — la card flota al hover". Estilo diagrama técnico de libro de texto. Diseño en dos mitades: comparativa visual de 2 estados a la izquierda conectados por flecha curva, CSS completo con anotaciones a la derecha. Caja al pie sobre "por qué transform y no margin".
>
> **Título superior centrado en negro:** "MICROINTERACCIÓN — LA CARD FLOTA AL HOVER"
>
> **Subtítulo en gris oscuro debajo del título:** "El patrón canónico de UI moderna en 4 líneas de CSS. Sin JavaScript."
>
> **Mitad izquierda — Comparativa visual de los 2 estados:**
>
> Layout vertical con la card base ABAJO y la card hover ARRIBA (separadas por unos 4px de desplazamiento visual entre ellas para mostrar el efecto translateY):
>
> **Estado base (abajo):**
> - Card rectangular blanca con esquinas redondeadas y sombra discreta (`--shadow-sm`).
> - Adentro: título "Característica" + 3 líneas grises de placeholder de contenido.
> - Etiqueta lateral en gris oscuro: "Estado base · `--shadow-sm` · sin transform"
>
> **Estado hover (arriba, desplazada 4px hacia arriba respecto al estado base):**
> - Card idéntica en contenido al estado base, pero con sombra más marcada (`--shadow-md`, blur mayor, opacidad mayor) y posición desplazada 4px hacia arriba.
> - Etiqueta lateral en verde: "Estado `:hover` · `--shadow-md` · `translateY(-4px)`"
>
> **Flecha curva grande azul conectando el estado base con el estado hover**, con etiqueta sobre la flecha: "Mouse encima → la card sube 4px Y la sombra se intensifica"
>
> **Mitad derecha — El CSS completo:**
>
> - Bloque de código grande en monospace azul con borde gris claro:
>   ```
>   .card {
>     box-shadow: var(--shadow-sm);
>     transition: box-shadow 0.2s, transform 0.2s;
>   }
>
>   .card:hover {
>     box-shadow: var(--shadow-md);
>     transform: translateY(-4px);
>   }
>   ```
> - 4 anotaciones con flechas de colores funcionales saliendo de líneas específicas del código:
>   - Flecha verde → `box-shadow: var(--shadow-sm)` → "Estado base: sombra discreta"
>   - Flecha naranja → `transition: ...` → "Vive en base (Panel anterior)"
>   - Flecha azul → `box-shadow: var(--shadow-md)` → "Hover: sombra marcada"
>   - Flecha roja → `transform: translateY(-4px)` → "Sube 4px (negativo = arriba)"
>
> **Caja al pie con borde naranja — Por qué `transform` y NO `margin`:**
>
> - Encabezado en naranja: "Por qué `transform: translateY` y NO `margin-top: -4px`"
> - Dos sub-bloques en paralelo:
>   - `transform: translateY(-4px)` ✅ — "NO afecta el layout. Los vecinos no se enteran. La grilla queda intacta."
>   - `margin-top: -4px` ❌ — "SÍ afecta el layout. Los vecinos se mueven también. La grilla salta."
>
> **Nota inferior en negro:** "Este patrón lo ven cientos de veces al día sin saber qué era — Stripe, Notion, Linear, Vercel, Mercado Libre, Spotify. Todas las cards modernas 'flotan' al pasar el mouse. Hoy se lo agregan al suyo."
>
> **Código de colores funcional:**
> - Card en estado base (abajo): sombra discreta, bordes neutros.
> - Card en estado hover (arriba, levantada 4px): sombra más marcada, etiqueta en verde `#2f9e44`.
> - Flecha curva central conectando los 2 estados: azul `#1971c2`.
> - Flecha y etiqueta del box-shadow base: verde `#2f9e44`.
> - Flecha y etiqueta del transition: naranja `#f08c00`.
> - Flecha y etiqueta del box-shadow hover: azul `#1971c2`.
> - Flecha y etiqueta del transform translateY: rojo `#e03131`.
> - Bloque de código CSS: azul `#1971c2`.
> - Caja al pie sobre transform vs margin: borde naranja `#f08c00`.
> - Sub-bloque ✅ (transform): verde `#2f9e44`.
> - Sub-bloque ❌ (margin): rojo `#e03131`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-07]: Líneas del tiempo paralelas — main + feature/form-validado + merge

- **Panel de origen:** Momento 2 — Panel 2.1
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9)
- **Patrón pedagógico:** Secuencia temporal de commits + Diagrama de bifurcación y unión
- **Usado en sub-punto:** 2.2 (¿Qué es una rama? — La analogía de las líneas del tiempo)

**Prompt:**

> Infografía educativa minimalista sobre "Rama Git — una línea del tiempo paralela". Estilo diagrama técnico de libro de texto. Diseño horizontal denso con dos líneas del tiempo (principal arriba, paralela abajo) que se bifurcan y se vuelven a fusionar.
>
> **Título superior centrado en negro:** "RAMA GIT — UNA LÍNEA DEL TIEMPO PARALELA"
>
> **Subtítulo en gris oscuro debajo del título:** "Como el multiverso de Marvel: dos realidades que arrancan del mismo punto, evolucionan separadas, y se fusionan al final."
>
> **Sección central — Diagrama de dos líneas del tiempo:**
>
> **Línea principal (arriba):**
>
> - Línea horizontal gruesa en azul que atraviesa todo el ancho del panel.
> - Etiqueta sobre la línea en azul: "`main` — LÍNEA DEL TIEMPO PRINCIPAL"
> - Sub-etiqueta en gris oscuro: "Lo que el cliente ve. Lo desplegado. La realidad oficial."
> - 5 commits representados como círculos azules numerados a lo largo de la línea:
>   - Commit A — etiquetado debajo: "C01 — HTML"
>   - Commit B — etiquetado: "C02 — Flex"
>   - Commit C — punto de bifurcación, círculo más grande, anotación con flecha: "Acá creamos la rama"
>   - (Línea continúa sin commits intermedios)
>   - Commit M — punto de fusión, círculo más grande con borde verde, anotación con flecha: "Acá las líneas se fusionan"
>
> **Línea paralela (debajo):**
>
> - Línea horizontal gruesa en naranja que arranca desde el commit C de la línea principal (bifurcación visual con curva descendente desde la principal) y termina en el commit M (curva ascendente uniéndose a la principal).
> - Etiqueta sobre la línea en naranja: "`feature` — LÍNEA DEL TIEMPO PARALELA"
> - Sub-etiqueta en gris oscuro: "Universo alternativo. Acá experimentás sin romper la realidad oficial."
> - 3 commits representados como círculos naranjas sobre la línea paralela:
>   - Commit D — etiquetado: "cambio 1"
>   - Commit E — etiquetado: "cambio 2"
>   - Commit F — etiquetado: "cambio 3"
>
> **Anotaciones laterales:**
>
> - Recuadro a la izquierda de la línea paralela con borde naranja:
>   - Encabezado en naranja: "Aislamiento"
>   - Texto en negro: "Si algo sale mal acá abajo, la línea principal NO se entera. El cliente sigue viendo la versión estable."
> - Recuadro a la derecha del punto de fusión con borde verde:
>   - Encabezado en verde: "Merge — la fusión"
>   - Texto en negro: "Lo que probaste en la paralela y funcionó, se vuelve oficial. La paralela se reabsorbe en la principal."
>
> **Caja informativa al pie con borde gris claro:**
>
> - Encabezado en gris oscuro: "Dato técnico importante:"
> - Texto en negro: "Una rama NO es una copia del código. Es solo un puntero a un commit. Crear una rama es instantáneo (gratis). Por eso los equipos crean ramas para CUALQUIER cosa — features, fixes, experimentos de 5 minutos."
>
> **Código de colores funcional:**
> - Línea principal y commits A, B, C, M: azul `#1971c2`.
> - Línea paralela y commits D, E, F: naranja `#f08c00`.
> - Punto de fusión (commit M) con borde extra: verde `#2f9e44`.
> - Recuadro de "Aislamiento" lateral: borde naranja `#f08c00`.
> - Recuadro de "Merge — la fusión": borde verde `#2f9e44`.
> - Caja informativa al pie: borde gris claro.
> - Textos descriptivos y etiquetas: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-08]: Las 4 reglas de GitFlow básico + loop del ciclo

- **Panel de origen:** Momento 2 — Panel 2.2
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón pedagógico:** Algoritmo numerado + Loop visual con flecha de retorno
- **Usado en sub-punto:** 2.3 (GitFlow básico — las 4 reglas del flujo profesional)

**Prompt:**

> Infografía educativa minimalista sobre "GitFlow básico — las 4 reglas del flujo profesional". Estilo diagrama técnico de libro de texto. Diseño vertical con 4 reglas numeradas en columna y una flecha curva de loop al pie que vuelve a la regla 1.
>
> **Título superior centrado en negro:** "GITFLOW BÁSICO — LAS 4 REGLAS DEL FLUJO PROFESIONAL"
>
> **Subtítulo en gris oscuro debajo del título:** "No es una ley física. Es una convención del equipo. Pero TODOS los equipos arrancan con estas 4 reglas."
>
> **Sección central — 4 reglas numeradas en columna vertical:**
>
> **Regla 1 (numerador en círculo verde):**
> - Numerador grande "1" dentro de un círculo verde a la izquierda.
> - Texto principal en negro: "`main` siempre tiene código estable y desplegado"
> - Sub-texto en gris oscuro: "Por qué — el cliente lo ve. Si está roto, hay un incidente."
>
> **Regla 2 (numerador en círculo naranja):**
> - Numerador grande "2" dentro de un círculo naranja.
> - Texto principal en negro: "Cada feature se desarrolla en su propia rama (`feature/<descripción>`)"
> - Sub-texto en gris oscuro: "Por qué — aislamiento. Un dev no rompe el trabajo de otro."
>
> **Regla 3 (numerador en círculo azul):**
> - Numerador grande "3" dentro de un círculo azul.
> - Texto principal en negro: "Cuando el feature está listo, se abre un Pull Request en GitHub"
> - Sub-texto en gris oscuro: "Por qué — pide revisión antes de integrar. Otra persona mira el código."
>
> **Regla 4 (numerador en círculo rojo):**
> - Numerador grande "4" dentro de un círculo rojo.
> - Texto principal en negro: "El PR se mergea a `main` solo después de revisión"
> - Sub-texto en gris oscuro: "Por qué — el código que entra a la realidad oficial pasó por al menos 2 pares de ojos."
>
> **Sección inferior — Loop visual del ciclo:**
>
> - Una flecha curva grande en gris oscuro, gruesa, que sale de la regla 4 y vuelve a la regla 1.
> - Etiqueta sobre la flecha en negro: "Y vuelve a empezar — por cada feature nuevo"
> - Sub-etiqueta en gris oscuro: "Una rama nace, vive mientras se desarrolla el feature, muere cuando se mergea. main nunca muere — es el río principal."
>
> **Caja informativa al pie con borde gris claro:**
>
> - Encabezado en gris oscuro: "Variantes que vas a encontrar en tu carrera:"
> - Texto en negro: "GitFlow completo (con ramas develop/release/hotfix), trunk-based development, GitHub Flow. Todas arrancan con estas mismas 4 reglas. Aprenderlas hoy te sirve para cualquier equipo del mundo."
>
> **Código de colores funcional:**
> - Numerador de la Regla 1: verde `#2f9e44`.
> - Numerador de la Regla 2: naranja `#f08c00`.
> - Numerador de la Regla 3: azul `#1971c2`.
> - Numerador de la Regla 4: rojo `#e03131`.
> - Flecha de loop al pie: gris oscuro.
> - Caja informativa al pie: borde gris claro.
> - Textos principales y sub-textos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-09]: 3 capas de validación (nativa / JS / servidor) + 4 capas internas de la nativa

- **Panel de origen:** Momento 3 — Panel 3.1
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Secuencia de 3 capas verticales con flujo de datos + Sub-tabla de las 4 sub-capas internas de la nativa
- **Usado en sub-punto:** 3.1 (¿Qué es la validación nativa HTML5? — Concepto + las 3 capas)

**Prompt:**

> Infografía educativa minimalista sobre "3 capas de validación — la nativa es la primera, no la única". Estilo diagrama técnico de libro de texto. Diseño en dos secciones: 3 cajas verticales apiladas a la izquierda (las 3 capas con flujo de datos), tabla lateral con las 4 sub-capas internas de la nativa a la derecha, caja roja destacada al pie.
>
> **Título superior centrado en negro:** "3 CAPAS DE VALIDACIÓN — LA NATIVA ES LA PRIMERA, NO LA ÚNICA"
>
> **Subtítulo en gris oscuro debajo del título:** "Un formulario profesional valida en 3 lugares distintos. Hoy aprendés la primera."
>
> **Sección central — Las 3 capas verticales con flujo de datos:**
>
> Una flecha vertical gruesa en gris atraviesa las 3 cajas de arriba hacia abajo etiquetada "FLUJO DEL DATO al hacer submit".
>
> **Caja 1 (arriba) — NAVEGADOR · HTML NATIVO:**
> - Fondo verde claro con borde verde grueso.
> - Encabezado en verde: "1. NAVEGADOR — HTML nativo"
> - Sub-etiqueta en gris oscuro: "Hoy"
> - Texto en negro: "El navegador valida formato, obligatoriedad, longitud y patrón usando atributos HTML. Si falla, bloquea el submit y muestra tooltip de error."
> - Etiqueta a la derecha de la caja: "HOY"
>
> **Caja 2 (medio) — NAVEGADOR · JS DEL CLIENTE:**
> - Fondo amarillo claro con borde naranja grueso.
> - Encabezado en naranja: "2. NAVEGADOR — JavaScript del cliente"
> - Sub-etiqueta en gris oscuro: "M2 del curso"
> - Texto en negro: "JS valida reglas de negocio del front — ej: 'la fecha de fin debe ser después de la fecha de inicio'. Se ejecuta después de la nativa, antes de mandar al servidor."
> - Etiqueta a la derecha: "M2 (más adelante)"
>
> **Caja 3 (abajo) — SERVIDOR · BACKEND:**
> - Fondo rojo claro con borde rojo grueso.
> - Encabezado en rojo: "3. SERVIDOR — Backend"
> - Sub-etiqueta en gris oscuro: "Otro curso"
> - Texto en negro: "El backend valida seguridad real — sanitización, anti-inyección SQL, '¿este email ya existe en la DB?'. Es la última línea de defensa y la única que el atacante NO puede saltar."
> - Etiqueta a la derecha: "Seguridad real"
>
> **Sección derecha — Sub-lista de las 4 sub-capas internas de la nativa (recuadro lateral con borde verde):**
>
> - Encabezado en verde: "Adentro de la capa nativa hay 4 sub-capas:"
> - Tabla con 4 filas:
>   - Fila 1: "Obligatoriedad" → `required`
>   - Fila 2: "Formato del valor" → `type="email" / "tel" / "number" / "url" / "date"`
>   - Fila 3: "Longitud" → `minlength / maxlength`
>   - Fila 4: "Patrón custom" → `pattern` (regex)
> - Nota al pie en gris oscuro: "Las 4 que vamos a usar hoy en el form del lab."
>
> **Caja destacada al pie con borde rojo, ancho completo:**
>
> - Encabezado en rojo: "REGLA CRÍTICA — la nativa es UX, no SEGURIDAD"
> - Texto en negro: "Cualquier atacante puede saltar la validación nativa deshabilitando JavaScript o editando el HTML con DevTools. La nativa ayuda al usuario honesto a no cometer errores de tipeo. La seguridad real vive SIEMPRE en el backend."
>
> **Código de colores funcional:**
> - Caja 1 (nativa): fondo verde claro con borde verde `#2f9e44` grueso.
> - Caja 2 (JS cliente): fondo amarillo claro con borde naranja `#f08c00` grueso.
> - Caja 3 (servidor): fondo rojo claro con borde rojo `#e03131` grueso.
> - Flecha vertical de flujo del dato: gris oscuro.
> - Recuadro lateral de las 4 sub-capas: borde verde `#2f9e44`.
> - Caja al pie de regla crítica: borde rojo `#e03131`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-10]: Anatomía del form del lab con los 6 atributos resaltados

- **Panel de origen:** Momento 3 — Panel 3.2
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Anatomía de un form compuesto con flechas a cada campo + atributos resaltados
- **Usado en sub-punto:** 3.2 (Los 6 atributos del lab — vista panorámica del form)

**Prompt:**

> Infografía educativa minimalista sobre "El form del lab — 6 campos, 6 atributos". Estilo diagrama técnico de libro de texto. Diseño con un mockup vertical del form a la izquierda y flechas laterales a la derecha apuntando a cada campo con su atributo de validación.
>
> **Título superior centrado en negro:** "EL FORM DEL LAB — 6 CAMPOS, 6 ATRIBUTOS"
>
> **Subtítulo en gris oscuro debajo del título:** "La vista panorámica antes del code-along. 4 atributos son intuitivos; 2 requieren explicación (Paneles siguientes)."
>
> **Sección central — Mockup vertical del form (lado izquierdo del panel):**
>
> Rectángulo grande con borde gris claro representando el formulario completo. Adentro, 6 campos apilados verticalmente con su label arriba y su elemento de entrada debajo:
>
> **Campo 1 — Nombre:**
> - Label: "Nombre (mín. 3 caracteres)"
> - Input de texto vacío
> - Flecha verde lateral hacia la derecha → etiqueta: "`required` + `minlength=\"3\"`"
> - Descripción debajo de la etiqueta en gris oscuro: "No vacío + mínimo 3 caracteres"
>
> **Campo 2 — Email:**
> - Label: "Correo electrónico"
> - Input de tipo email
> - Flecha azul lateral → etiqueta: "`type=\"email\"` + `required`"
> - Descripción: "Formato de email obligatorio + no vacío"
>
> **Campo 3 — Teléfono:**
> - Label: "Teléfono (9 dígitos)"
> - Input de tipo tel
> - Flecha roja lateral → etiqueta: "`type=\"tel\"` + `pattern=\"[0-9]{9}\"` + `required`"
> - Descripción: "Pattern — ver Panel siguiente"
> - **El atributo `pattern="[0-9]{9}"` resaltado en fondo rojo claro** para indicar que requiere explicación adicional.
>
> **Campo 4 — Motivo:**
> - Label: "Motivo del contacto"
> - Select con 4 opciones visibles (placeholder + Consulta + Reclamo + Sugerencia)
> - Flecha roja lateral → etiqueta: "`<select>` con primera opción `value=\"\"` + `required`"
> - Descripción: "El truco del `value=\"\"` — ver Panel siguiente"
> - **El atributo `value=""` resaltado en fondo rojo claro** para indicar que requiere explicación adicional.
>
> **Campo 5 — Mensaje:**
> - Label: "Mensaje"
> - Textarea de 4 filas
> - Flecha verde lateral → etiqueta: "`required` + `minlength=\"10\"`"
> - Descripción: "No vacío + mínimo 10 caracteres"
>
> **Campo 6 — Checkbox de términos:**
> - Label envolvente con checkbox: "[ ] Acepto los términos y condiciones"
> - Flecha verde lateral → etiqueta: "`<input type=\"checkbox\" required>`"
> - Descripción: "Obliga a marcar la casilla"
>
> **Botón submit al pie del form:** rectángulo azul oscuro con texto blanco "Enviar".
>
> **Caja al pie con borde naranja — bonus mobile:**
>
> - Encabezado en naranja: "Bonus mobile gratis"
> - Texto en negro: "En celular, `type=\"email\"` abre el teclado con la tecla `@` visible. `type=\"tel\"` abre el teclado numérico. Mismo HTML, mejor UX para mobile — sin escribir una línea extra."
>
> **Nota inferior en negro:** "De los 6 atributos: 4 son intuitivos (verde + azul). Los 2 en rojo (`pattern` y el truco del `<select>`) los explicamos en los siguientes 2 Paneles, antes del code-along."
>
> **Código de colores funcional:**
> - Flechas y etiquetas de campos intuitivos (nombre, mensaje, checkbox): verde `#2f9e44`.
> - Flecha y etiqueta del campo email (`type="email"`): azul `#1971c2`.
> - Flechas y etiquetas de los campos que requieren explicación (teléfono, motivo): rojo `#e03131`.
> - Atributos resaltados (`pattern="[0-9]{9}"` y `value=""`): fondo rojo claro con subrayado rojo `#e03131`.
> - Botón submit: fondo azul `#1971c2` con texto blanco.
> - Caja del bonus mobile: borde naranja `#f08c00`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-11]: Anatomía de `pattern="[0-9]{9}"` + 4 valores de prueba

- **Panel de origen:** Momento 3 — Panel 3.3
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón pedagógico:** Anatomía de sintaxis con flechas a cada parte del regex + Comparativa de 4 valores de prueba con ✅/❌
- **Usado en sub-punto:** 3.3 (`pattern` — regex en HTML nativo)

**Prompt:**

> Infografía educativa minimalista sobre "pattern — regex en HTML nativo". Estilo diagrama técnico de libro de texto. Diseño vertical: anatomía del pattern con 2 flechas arriba, lectura completa en recuadro, tabla de 4 valores de prueba con resultados, combinación canónica con `type="tel"` al pie.
>
> **Título superior centrado en negro:** "PATTERN — REGEX EN HTML NATIVO"
>
> **Subtítulo en gris oscuro debajo del título:** "Una expresión regular que el navegador valida en cada input. El valor entero del input debe matchear."
>
> **Sección 1 — Anatomía del pattern (arriba, centrada):**
>
> - Bloque de código grande en monospace azul: `pattern="[0-9]{9}"`
> - 2 flechas con anotaciones:
>   - Flecha verde desde `[0-9]` → etiqueta: "RANGO de caracteres permitidos — cualquier dígito del 0 al 9 (equivale a `\d`)"
>   - Flecha naranja desde `{9}` → etiqueta: "REPETICIÓN exacta — exactamente 9 veces, ni más ni menos"
>
> **Sección 2 — Lectura completa (recuadro con borde gris claro debajo de la anatomía):**
>
> - Texto en negro: "Resultado: 9 dígitos numéricos seguidos. Sin letras, sin espacios, sin guiones, sin paréntesis."
> - Sub-texto en gris oscuro: "El navegador ancla automáticamente al inicio y fin del valor (como si tuviera `^...$` invisibles). El input ENTERO debe matchear, no solo una parte."
>
> **Sección 3 — 4 valores de prueba (tabla al pie con resultados):**
>
> - Encabezado en negro: "Probemos 4 valores:"
> - Tabla con 4 filas, cada una con: valor (monospace) + resultado (✅/❌) + razón:
>   - Fila 1: `987654321` ✅ (fondo verde claro) — "9 dígitos exactos"
>   - Fila 2: `12345` ❌ (fondo rojo claro) — "Solo 5 dígitos — falta repetición"
>   - Fila 3: `9876543210` ❌ (fondo rojo claro) — "10 dígitos — sobra 1"
>   - Fila 4: `abc123456` ❌ (fondo rojo claro) — "Tiene letras — rango `[0-9]` no acepta letras"
>
> **Sección 4 — Combinación canónica en el lab (caja al pie con borde azul):**
>
> - Encabezado en azul: "Combinación canónica en el lab"
> - Bloque de código en monospace azul:
>   ```
>   <input type="tel" pattern="[0-9]{9}" required>
>   ```
> - Anotaciones en negro:
>   - "`type=\"tel\"` → abre teclado numérico en mobile (pero NO valida formato)"
>   - "`pattern=\"[0-9]{9}\"` → es lo que pone la regla real de validación"
>   - "`required` → no vacío"
>
> **Nota inferior — etimología en gris oscuro:** "Las expresiones regulares las inventó el matemático Stephen Kleene en los años 50. Llegaron a la programación en los 70 con Unix. Hoy las hablan Python, JS, HTML, todos los editores. El que aprende regex, lo usa toda la carrera."
>
> **Código de colores funcional:**
> - Flecha y etiqueta del rango `[0-9]`: verde `#2f9e44`.
> - Flecha y etiqueta de la repetición `{9}`: naranja `#f08c00`.
> - Bloque de código central: azul `#1971c2`.
> - Fila de valor válido (`987654321 ✅`): fondo verde claro con borde verde `#2f9e44`.
> - Filas de valores inválidos (`12345`, `9876543210`, `abc123456` ❌): fondo rojo claro con borde rojo `#e03131`.
> - Caja de combinación canónica al pie: borde azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-12]: Comparativa `<select>` con `value=""` vs sin — el truco del placeholder

- **Panel de origen:** Momento 3 — Panel 3.4
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9)
- **Patrón pedagógico:** Comparativa ❌ vs ✅ del mismo elemento HTML con resultados distintos al submit
- **Usado en sub-punto:** 3.4 (El truco del `<select>` con `value=""` + `required`)

**Prompt:**

> Infografía educativa minimalista sobre "El truco del `<select>` con `value=\"\"`". Estilo diagrama técnico de libro de texto. Diseño horizontal en dos columnas paralelas separadas por proximidad espacial: ❌ a la izquierda, ✅ a la derecha, con código + simulación del comportamiento al submit en cada lado.
>
> **Título superior centrado en negro:** "EL TRUCO DEL `<SELECT>` CON `VALUE=\"\"`"
>
> **Subtítulo en gris oscuro debajo del título:** "2 caracteres invisibles que activan toda la validación. Sin ellos, `required` no sirve."
>
> **Columna izquierda — SIN `value=""` (lo INCORRECTO):**
>
> - Encabezado grande en rojo: "SIN `value=\"\"`"
> - Sub-etiqueta en gris oscuro: "Lo que escribe el alumno por intuición"
> - Bloque de código en monospace azul con borde gris claro:
>   ```
>   <select required>
>     <option>Selecciona un motivo</option>
>     <option value="consulta">Consulta</option>
>     <option value="reclamo">Reclamo</option>
>     <option value="sugerencia">Sugerencia</option>
>   </select>
>   ```
> - Sub-caja debajo del código con borde rojo y fondo rojo claro:
>   - Etiqueta arriba en rojo: "Qué pasa al hacer submit:"
>   - Mockup de un objeto JSON o un POST mostrando que el dato enviado es: `motivo: "Selecciona un motivo"`
>   - Texto en negro: "El navegador acepta 'Selecciona un motivo' como motivo válido. La basura llega al servidor."
> - Etiqueta de cierre en rojo: "El `required` NO se dispara — la primera opción tiene texto, no es vacía."
>
> **Columna derecha — CON `value=""` (lo CORRECTO):**
>
> - Encabezado grande en verde: "CON `value=\"\"`"
> - Sub-etiqueta en gris oscuro: "Lo correcto — el primer item es placeholder"
> - Bloque de código en monospace azul con borde gris claro:
>   ```
>   <select required>
>     <option value="">Selecciona un motivo</option>
>     <option value="consulta">Consulta</option>
>     <option value="reclamo">Reclamo</option>
>     <option value="sugerencia">Sugerencia</option>
>   </select>
>   ```
> - **Los 2 caracteres `=""` de la primera línea de option resaltados con fondo rojo claro y subrayado rojo grueso** para que sean lo primero que el ojo capture.
> - Sub-caja debajo del código con borde verde y fondo verde claro:
>   - Etiqueta arriba en verde: "Qué pasa al hacer submit sin elegir:"
>   - Mockup de un tooltip del navegador apareciendo sobre el select con el texto: "Selecciona un elemento de la lista."
>   - Texto en negro: "El navegador bloquea el submit. El usuario debe elegir una opción real antes de continuar."
> - Etiqueta de cierre en verde: "El `required` SÍ se dispara — la primera opción tiene `value=\"\"` y eso cuenta como 'no elegido'."
>
> **Caja al pie ancho completo con borde naranja:**
>
> - Encabezado en naranja: "Por qué funciona así"
> - Texto en negro: "`required` en un `<select>` chequea si la opción elegida tiene un `value` distinto de `\"\"` (vacío). Por default, un `<select>` siempre tiene una opción 'elegida' — la primera. Si esa primera opción tiene texto sin `value=\"\"`, el navegador la considera una opción válida y `required` nunca falla. El truco es declarar la primera opción como placeholder visual (con texto 'Selecciona...') pero `value=\"\"` (vacío para el navegador)."
>
> **Nota inferior en negro:** "Mismo truco para CUALQUIER dropdown obligatorio: país, día de nacimiento, categoría, departamento. 2 caracteres — `=\"\"` — son la diferencia entre 'valida' y 'no valida'."
>
> **Código de colores funcional:**
> - Encabezado columna izquierda (SIN value=""): rojo `#e03131`.
> - Encabezado columna derecha (CON value=""): verde `#2f9e44`.
> - Caracteres `=""` resaltados en la columna derecha: fondo rojo claro con subrayado rojo `#e03131` grueso.
> - Sub-caja "Qué pasa al submit" lado incorrecto: borde rojo `#e03131` con fondo rojo claro.
> - Sub-caja "Qué pasa al submit" lado correcto: borde verde `#2f9e44` con fondo verde claro.
> - Caja al pie "Por qué funciona así": borde naranja `#f08c00`.
> - Bloques de código HTML: azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-13]: Anatomía de un Pull Request — 3 zonas de GitHub

- **Panel de origen:** Momento 4 — Panel 4.1
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Anatomía de un objeto compuesto con 3 zonas resaltadas en colores funcionales + mockup fiel a la UI de GitHub
- **Usado en sub-punto:** 4.3 (¿Qué es un Pull Request? — Concepto + analogía)

**Prompt:**

> Infografía educativa minimalista sobre "Pull Request — anatomía de una página de GitHub". Estilo diagrama técnico de libro de texto. Diseño con un mockup grande de la UI real de GitHub dividido en 3 zonas resaltadas con colores funcionales, más una etiqueta destacada al pie.
>
> **Título superior centrado en negro:** "PULL REQUEST — ANATOMÍA DE UNA PÁGINA DE GITHUB"
>
> **Subtítulo en gris oscuro debajo del título:** "El PR no es un botón de merge. Es DONDE el equipo se reúne a revisar antes de mergear."
>
> **Sección central — Mockup de un PR de GitHub:**
>
> Rectángulo grande con borde gris claro representando una ventana de navegador. Barra superior gris claro con tabs simulados visibles: "Conversation · Commits · Checks · Files changed".
>
> Adentro, 3 zonas resaltadas verticalmente:
>
> **Zona 1 (arriba) — TÍTULO + DESCRIPCIÓN (borde verde grueso):**
> - Mockup interno: título grande en negro "Agrega validación nativa al formulario de contacto" + un badge etiquetado "feature/form-validado → main".
> - Debajo: descripción multilínea simulada con 3-4 bullets visibles: "- Nombre: required + minlength..." (etc).
> - Etiqueta lateral con flecha verde: "ZONA 1 — Título + descripción · qué se cambió y por qué"
> - Sub-etiqueta en verde: "Es la documentación del PR — en 6 meses alguien la va a leer."
>
> **Zona 2 (medio) — CONVERSATION (borde azul grueso):**
> - Mockup interno: 2-3 burbujas de comentarios simuladas, cada una con avatar circular + nombre de usuario + texto del comentario. Una de las burbujas con texto visible: "Considerar agregar maxlength también..."
> - Banner inferior con un check verde y texto: "All checks have passed"
> - Botón verde grande al pie de la zona: "Merge pull request"
> - Etiqueta lateral con flecha azul: "ZONA 2 — Conversation · comentarios, aprobaciones, checks de CI"
> - Sub-etiqueta en azul: "Acá el equipo discute. Acá se aprueba. Acá se mergea."
>
> **Zona 3 (abajo) — FILES CHANGED (borde naranja grueso):**
> - Mockup interno: header con "1 file changed · 27 insertions · 3 deletions" + nombre de archivo "index.html".
> - Debajo, líneas de código simuladas en formato diff:
>   - 2-3 líneas con `-` y fondo rojo claro (eliminadas)
>   - 4-5 líneas con `+` y fondo verde claro (agregadas)
>   - 1-2 líneas en blanco (contexto)
> - Etiqueta lateral con flecha naranja: "ZONA 3 — Files changed · el diff completo línea por línea (Panel siguiente)"
> - Sub-etiqueta en naranja: "Acá vive el código real. Acá se comenta cada línea."
>
> **Caja informativa al pie con borde gris claro, ancho completo:**
>
> - Encabezado en negro: "Dato técnico clave:"
> - Texto en gris oscuro: "'Pull Request' es terminología de GitHub y Bitbucket. Git nativo no tiene PRs — son una capa de colaboración construida encima de Git. GitLab los llama 'Merge Requests' — es exactamente lo mismo."
>
> **Etiqueta destacada al pie ancho completo con borde rojo:**
>
> - Texto centrado en rojo grande: "EL PR ES DONDE EL EQUIPO SE REÚNE A REVISAR ANTES DE MERGEAR"
>
> **Código de colores funcional:**
> - Borde Zona 1 (Título + descripción): verde `#2f9e44` grueso.
> - Borde Zona 2 (Conversation): azul `#1971c2` grueso.
> - Borde Zona 3 (Files changed): naranja `#f08c00` grueso.
> - Botón "Merge pull request" en la Zona 2: verde `#2f9e44` con texto blanco.
> - Líneas eliminadas en el diff de la Zona 3: fondo rojo claro con texto en rojo `#e03131`.
> - Líneas agregadas en el diff: fondo verde claro con texto en verde `#2f9e44`.
> - Etiqueta destacada al pie: borde rojo `#e03131`.
> - Caja informativa de dato técnico: borde gris claro.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-14]: Anatomía del diff de GitHub — verde / rojo / contexto + comentario inline

- **Panel de origen:** Momento 4 — Panel 4.2
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Anatomía de una vista de UI con líneas categorizadas + Tabla lateral con las 3 categorías + Burbuja de comentario inline
- **Usado en sub-punto:** 4.5 (Leer el diff — el skill profesional de Git)

**Prompt:**

> Infografía educativa minimalista sobre "El diff de GitHub — verde / rojo / contexto". Estilo diagrama técnico de libro de texto. Diseño con un mockup grande del diff a la izquierda (con una burbuja de comentario inline sobresaliendo), tabla lateral con las 3 categorías de línea a la derecha, caja con capacidades extras al pie.
>
> **Título superior centrado en negro:** "EL DIFF DE GITHUB — VERDE / ROJO / CONTEXTO"
>
> **Subtítulo en gris oscuro debajo del título:** "Leer el diff es EL skill profesional de Git. Hoy es la primera práctica."
>
> **Sección central — Mockup del diff (mitad izquierda del panel):**
>
> Rectángulo grande con borde gris claro representando la pestaña "Files changed" de GitHub. Header del archivo en la parte superior: "index.html · 30 insertions / deletions"
>
> Bloque de código en formato diff (monospace), con cada tipo de línea en su fondo:
>
> ```
>    <section id="contacto">
>      <h2>Contáctanos</h2>
> -    <form>
> -      <input name="nombre">
> -      <input name="email">
> +    <form>
> +      <label for="nombre">Nombre (mín. 3 caracteres)</label>
> +      <input type="text" id="nombre" required minlength="3">
> +      <label for="email">Correo electrónico</label>
> +      <input type="email" id="email" required>
> +      <input type="tel" pattern="[0-9]{9}" required>
>      </form>
>    </section>
> ```
>
> - Cada línea con su fondo según el tipo:
>   - Líneas con `+`: fondo verde claro
>   - Líneas con `-`: fondo rojo claro
>   - Líneas sin símbolo: fondo blanco (contexto)
> - Número de línea a la izquierda en gris claro para cada línea.
>
> **Anotación de comentario inline (overlay sobre una de las líneas verdes, por ejemplo la del `pattern="[0-9]{9}"`):**
>
> - Burbuja en amarillo claro con borde naranja saliendo de la línea hacia la derecha del panel.
> - Avatar circular pequeño + nombre de usuario simulado "eric-verde"
> - Texto del comentario en negro: "Considerar agregar `maxlength=\"9\"` también para evitar que el usuario escriba 15 dígitos."
> - Flecha desde la burbuja hacia la línea verde resaltada.
>
> **Sección derecha — Tabla de las 3 categorías de línea:**
>
> - Encabezado en gris oscuro: "Las 3 categorías de línea"
> - Tabla con 3 filas:
>   - Verde con símbolo `+` al inicio → "Línea AGREGADA en este PR"
>   - Rojo con símbolo `-` al inicio → "Línea ELIMINADA en este PR"
>   - Blanco sin símbolo → "CONTEXTO — no cambió, está para situar"
>
> **Caja al pie con borde gris claro — Capacidades extra de GitHub:**
>
> - Encabezado en negro: "Capacidades del diff de GitHub (no presentes en `git diff` de terminal):"
> - Bullets en negro:
>   - "Comentario inline — click en cualquier línea → cuadro de texto atado a esa línea específica."
>   - "Vista unificada o lado a lado — botón arriba del diff. Lado a lado es más natural para revisiones largas."
>   - "Marcar archivos como revisados — checkbox arriba de cada archivo. Útil cuando el PR toca 20 archivos."
>
> **Etiqueta destacada al pie en negro:** "Leer el diff es lo que separa al junior que entiende lo que hace su equipo del que está perdido. En tus primeros 6 meses como dev vas a leer diffs todos los días."
>
> **Código de colores funcional:**
> - Líneas agregadas en el diff: fondo verde claro con texto en verde `#2f9e44` y símbolo `+` verde.
> - Líneas eliminadas en el diff: fondo rojo claro con texto en rojo `#e03131` y símbolo `-` rojo.
> - Líneas de contexto: fondo blanco con texto en negro `#1e1e1e`.
> - Burbuja de comentario inline: fondo amarillo claro con borde naranja `#f08c00`.
> - Flecha desde la burbuja hacia la línea comentada: naranja `#f08c00`.
> - Tabla lateral con las 3 categorías: cada fila con el color correspondiente (verde, rojo, blanco/gris).
> - Caja de capacidades extras al pie: borde gris claro.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-15]: Desincronización local vs remota antes de `git pull` + efecto del pull

- **Panel de origen:** Momento 4 — Panel 4.3
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Comparativa de 2 estados (antes/después) + Secuencia temporal con comando central que produce el cambio
- **Usado en sub-punto:** 4.7 (`git pull` — sincronizar `main` local con el remoto)

**Prompt:**

> Infografía educativa minimalista sobre "Después del merge — `main` local queda viejo". Estilo diagrama técnico de libro de texto. Diseño vertical con 2 escenas apiladas: arriba la escena ANTES de git pull (desincronizado), abajo la escena DESPUÉS de git pull (sincronizado). En el medio, el comando que produce el cambio.
>
> **Título superior centrado en negro:** "DESPUÉS DEL MERGE — `MAIN` LOCAL QUEDA VIEJO"
>
> **Subtítulo en gris oscuro debajo del título:** "Mergear el PR en GitHub NO actualiza tu PC. Necesitás `git pull` para sincronizar."
>
> **Sección 1 — Escena ANTES de `git pull` (mitad superior del panel):**
>
> - Etiqueta arriba en rojo: "ANTES de `git pull` — DESINCRONIZADO"
> - Dos cajas paralelas:
>
> **Caja izquierda — REMOTO (GitHub):**
> - Encabezado en azul con icono pequeño de nube o de GitHub: "REMOTO (GitHub)"
> - Lista de commits en main (orden cronológico, el más reciente arriba):
>   - Commit M en fondo verde claro: "Merge pull request #1 — feat: agrega validación al form" (resaltado)
>   - Commit B: "feat: agrega paleta de tokens CSS"
>   - Commit A: "...commits viejos de C01-C03..."
>
> **Caja derecha — LOCAL (PC del alumno):**
> - Encabezado en naranja con icono pequeño de laptop: "LOCAL (PC del alumno)"
> - Lista de commits en main:
>   - Espacio vacío arriba con etiqueta roja: "(NO existe acá todavía)"
>   - Commit B: "feat: agrega paleta de tokens CSS"
>   - Commit A: "...commits viejos de C01-C03..."
> - FALTA el Commit M (visualizar el hueco arriba).
>
> **Flecha roja bidireccional gigante en el medio entre las dos cajas**, gruesa, con etiqueta sobre la flecha: "DESINCRONIZADO — el merge sucedió en el servidor, no en tu PC"
>
> **Separador horizontal en el medio del panel — Comando central:**
>
> - Comando destacado en monospace azul grande, con fondo amarillo claro y borde naranja: `git pull`
> - Etiqueta debajo en negro: "Ejecuta esto desde tu rama main local"
>
> **Sección 2 — Escena DESPUÉS de `git pull` (mitad inferior del panel):**
>
> - Etiqueta arriba en verde: "DESPUÉS de `git pull` — SINCRONIZADO"
> - Dos cajas paralelas idénticas a las de arriba en formato pero con el mismo contenido en ambas:
>
> **Caja izquierda — REMOTO (GitHub):** misma lista de commits que en la escena 1.
>
> **Caja derecha — LOCAL (PC):** ahora con el Commit M presente arriba, resaltado en verde claro, igual que la caja remota.
>
> **Flecha verde gigante en el medio entre las dos cajas**, con etiqueta sobre la flecha: "SINCRONIZADO — ambos lados tienen el mismo historial"
>
> **Caja al pie con borde gris claro — Equivalencia técnica:**
>
> - Encabezado en negro: "Equivalencia técnica:"
> - Texto en gris oscuro: "`git pull` = `git fetch` + `git merge` en una sola operación. `git fetch` descarga los commits del remoto pero no los aplica; `git merge` los aplica a tu rama actual. Para el alumno de hoy, `git pull` alcanza."
>
> **Caja final destacada al pie con borde rojo, ancho completo:**
>
> - Encabezado en rojo: "EL ERROR MÁS COMÚN DEL PRINCIPIANTE"
> - Texto en negro: "Olvidar `git pull` después de mergear el PR. Si no lo hacés, tu main local queda viejo. El próximo `git checkout -b feature/proximo` parte de un main desactualizado, y al mergear ese feature va a haber conflictos. Regla simple: cada vez que mergeás un PR, hacés `git pull` inmediatamente."
>
> **Código de colores funcional:**
> - Etiqueta "ANTES de git pull": rojo `#e03131`.
> - Etiqueta "DESPUÉS de git pull": verde `#2f9e44`.
> - Encabezados de cajas REMOTO: azul `#1971c2`.
> - Encabezados de cajas LOCAL: naranja `#f08c00`.
> - Commit M de merge (resaltado): fondo verde claro con borde verde `#2f9e44`.
> - Flecha grande entre cajas (escena 1, desincronizado): rojo `#e03131` grueso.
> - Flecha grande entre cajas (escena 2, sincronizado): verde `#2f9e44` grueso.
> - Comando `git pull` central: fondo amarillo claro con borde naranja `#f08c00` y texto en azul `#1971c2`.
> - Caja al pie del error más común: borde rojo `#e03131`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-16]: Loop visual del GitFlow de 6 pasos (cheat sheet del curso)

- **Panel de origen:** Momento 4 — Panel 4.4
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Loop circular de 6 pasos + Algoritmo numerado con orden inviolable + Advertencias de saltos
- **Usado en sub-punto:** 4.9 (GitFlow básico — el ciclo completo de 6 pasos)

**Prompt:**

> Infografía educativa minimalista sobre "GitFlow básico — el ciclo completo de 6 pasos". Estilo diagrama técnico de libro de texto. Diseño con un diagrama circular de 6 cajas dispuestas en círculo conectadas por flechas curvas, paso 7 opcional al costado, advertencias al pie y etiqueta destacada de cheat sheet.
>
> **Título superior centrado en negro:** "GITFLOW BÁSICO — EL CICLO COMPLETO DE 6 PASOS"
>
> **Subtítulo en gris oscuro debajo del título:** "Lo que cualquier equipo profesional te va a pedir desde el primer día. Cheat sheet para el resto del curso."
>
> **Sección central — Diagrama circular de 6 pasos:**
>
> 6 cajas grandes dispuestas en círculo (posiciones del reloj: 12, 2, 4, 6, 8, 10), conectadas por flechas curvas en sentido horario. Cada caja contiene: numerador grande dentro de un círculo de su color funcional + título corto + comando exacto en monospace + sub-etiqueta:
>
> **Paso 1 (posición 12, verde):**
> - Numerador "1" en círculo verde.
> - Título: "Arrancar la rama"
> - Comando: `git checkout -b feature/x`
> - Sub-etiqueta: "Línea del tiempo paralela"
>
> **Paso 2 (posición 2, naranja):**
> - Numerador "2" en círculo naranja.
> - Título: "Desarrollar el feature"
> - Comando: `<cambiá código>`
> - Sub-etiqueta: "Modifica archivos en VS Code"
>
> **Paso 3 (posición 4, azul):**
> - Numerador "3" en círculo azul.
> - Título: "Commitear dentro de la rama"
> - Comando: `git add + git commit`
> - Sub-etiqueta: "Commits atómicos con mensaje claro"
>
> **Paso 4 (posición 6, rojo):**
> - Numerador "4" en círculo rojo.
> - Título: "Subir la rama al remoto"
> - Comando: `git push -u origin feature/x`
> - Sub-etiqueta: "`-u` la primera vez para vincular"
>
> **Paso 5 (posición 8, naranja oscuro):**
> - Numerador "5" en círculo naranja oscuro.
> - Título: "Abrir PR → review → merge"
> - Comando: `<botones de GitHub>`
> - Sub-etiqueta: "Integrar a main (revisión incluida)"
>
> **Paso 6 (posición 10, verde):**
> - Numerador "6" en círculo verde.
> - Título: "Sincronizar main local"
> - Comando: `git checkout main && git pull`
> - Sub-etiqueta: "El error más común es saltarse este paso"
>
> **Flecha grande curva** que sale del paso 6 (posición 10) y vuelve al paso 1 (posición 12), con etiqueta sobre la flecha: "Y vuelve a empezar — por cada feature nuevo"
>
> **Sección lateral — Paso 7 opcional (recuadro pequeño al costado del círculo, con borde gris claro):**
>
> - Numerador "7 (opcional)" en círculo gris.
> - Título: "Limpiar la rama mergeada"
> - Comando: `git branch -d feature/x`
> - Sub-etiqueta: "Borra la rama local ya mergeada"
>
> **Sección al pie — Por qué este orden NO es negociable (recuadro con borde rojo):**
>
> - Encabezado en rojo: "Por qué este orden NO es negociable"
> - 3 sub-bloques en paralelo:
>   - "Si saltás el paso 1 → todos los commits van a main directo, rompés el aislamiento."
>   - "Si saltás el paso 4 → el feature vive solo en tu PC, nadie del equipo lo ve."
>   - "Si saltás el paso 6 → tu main local queda viejo, el próximo feature parte desactualizado, conflictos garantizados."
>
> **Etiqueta destacada al pie ancho completo con borde verde grueso:**
>
> - Texto centrado en verde grande: "CHEAT SHEET PARA EL RESTO DEL CURSO"
> - Sub-texto en gris oscuro: "Recortala. Pegala al lado del monitor. Vas a ejecutar este ciclo cientos de veces en tu carrera."
>
> **Código de colores funcional:**
> - Paso 1 (numerador y borde): verde `#2f9e44`.
> - Paso 2 (numerador y borde): naranja `#f08c00`.
> - Paso 3 (numerador y borde): azul `#1971c2`.
> - Paso 4 (numerador y borde): rojo `#e03131`.
> - Paso 5 (numerador y borde): naranja oscuro `#e8590c`.
> - Paso 6 (numerador y borde): verde `#2f9e44`.
> - Paso 7 opcional (lateral): borde gris claro.
> - Flecha de loop volviendo al paso 1: gris oscuro grueso.
> - Sección "Por qué este orden no es negociable": borde rojo `#e03131`.
> - Etiqueta destacada al pie "CHEAT SHEET": borde verde `#2f9e44` grueso con texto verde.
> - Comandos en monospace: azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

## Capturas manuales

> Sin capturas manuales en esta clase. Todas las imágenes se generan con IA.

---

## Tabla resumen — mapeo IMG → Panel → Sub-punto del guion

| ID | Panel | Momento | Sub-punto | Dimensiones |
|---|---|---|---|---|
| `[IMG-01]` | Panel 1.1 — Anatomía CSS Custom Property | M1 | 1.2 | 1200×900 |
| `[IMG-02]` | Panel 1.2 — `:root` apunta a `<html>` + cascada | M1 | 1.3 | 1200×900 |
| `[IMG-03]` | Panel 1.3 — Sistema de tokens (4 categorías) | M1 | 1.5 | 1400×1050 |
| `[IMG-04]` | Panel 1.4 — Anatomía `box-shadow` | M1 | 1.7 | 1400×1050 |
| `[IMG-05]` | Panel 1.5 — Anatomía `transition` + regla base | M1 | 1.8 | 1400×1050 |
| `[IMG-06]` | Panel 1.6 — Microinteracción `:hover` + `translateY` | M1 | 1.9 | 1400×1050 |
| `[IMG-07]` | Panel 2.1 — Líneas del tiempo paralelas | M2 | 2.2 | 1400×900 |
| `[IMG-08]` | Panel 2.2 — Las 4 reglas de GitFlow básico | M2 | 2.3 | 1200×900 |
| `[IMG-09]` | Panel 3.1 — 3 capas de validación + 4 sub-capas | M3 | 3.1 | 1400×1050 |
| `[IMG-10]` | Panel 3.2 — Anatomía del form del lab | M3 | 3.2 | 1400×1050 |
| `[IMG-11]` | Panel 3.3 — Anatomía `pattern="[0-9]{9}"` | M3 | 3.3 | 1200×900 |
| `[IMG-12]` | Panel 3.4 — `<select>` con `value=""` vs sin | M3 | 3.4 | 1400×900 |
| `[IMG-13]` | Panel 4.1 — Anatomía de un Pull Request | M4 | 4.3 | 1400×1050 |
| `[IMG-14]` | Panel 4.2 — Anatomía del diff de GitHub | M4 | 4.5 | 1400×1050 |
| `[IMG-15]` | Panel 4.3 — Desincronización local vs remota | M4 | 4.7 | 1400×1050 |
| `[IMG-16]` | Panel 4.4 — Loop GitFlow 6 pasos (cheat sheet) | M4 | 4.9 | 1400×1050 |

---

## Checklist de generación

- [ ] Las 16 imágenes IA se generaron y descargaron en una carpeta accesible.
- [ ] Cada imagen revisada visualmente — el texto en pantalla coincide con lo que pidió el prompt (ojo: las IAs frecuentemente deforman textos largos o números; si una imagen sale con texto mal escrito, re-generar el prompt enfatizando la cita literal entre comillas).
- [ ] Las 16 imágenes están guardadas con nombres claros (ej: **_img-01-custom-property.png_**, **_img-02-root-cascada.png_**, etc).
- [ ] El **_CLASE 04.excalidraw_** está listo (con los 16 placeholders) → arrastrar cada imagen sobre su placeholder.
