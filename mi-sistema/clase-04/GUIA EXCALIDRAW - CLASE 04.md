# GUÍA EXCALIDRAW — CLASE 04: CSS Variables + Forms Validados + Git Workflow

> **Curso:** Code 201
> **Módulo:** M1 — Clase 4 de 4 (Lab CALIFICADO)
> **Estado:** Paneles documentados — pendiente validación de Eric
> **Total Paneles:** 16 (6 M1 + 2 M2 + 4 M3 + 4 M4)
> **Fecha:** 2026-05-28
> **Fuente del guion:** mi-sistema/clase-04/CLASE 04.md
> **Patrón visual común:** estilo "anatomía visual" tipo samanthaming.com — bloques con borde claro, etiquetas con flechas funcionales, código en monospace azul **_#1971c2_**, paleta canónica restringida a `#1e1e1e` negro / `#e03131` rojo / `#1971c2` azul / `#f08c00` naranja / `#2f9e44` verde / `#e8590c` naranja oscuro. Todos son Imagen-slide porque requieren precisión geométrica.

---

## Momento 1: Apertura + CSS Variables + Estética nueva

> **Estado:** Borrador
> **Paneles del Momento:** 6 (uno por concepto teórico nuevo: Custom Property, **_:root_**, sistema de tokens, **_box-shadow_**, **_transition_**, microinteracción **_:hover_**). Los code-along intermedios (sub-puntos 1.4, 1.6, 1.10, 1.11) no requieren Panel — son ejecución sobre VS Code.

---

### Panel 1.1 — Anatomía de una CSS Custom Property: declaración + uso con flecha conectora

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 1.1 (anatomía de una Custom Property): diagrama lado a lado. Izquierda con título "DECLARACIÓN": un selector (:root resaltado) y adentro --color-accent: #0066cc; con etiquetas "nombre del token (siempre `--`)" y "valor". Derecha con título "USO": otra regla con color: var(--color-accent); y la palabra var resaltada. Flecha curva conectando el token de la izquierda con el var() de la derecha.**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de sintaxis con flechas) + Patrón 3 (Comparativa lado a lado: declaración vs uso) — el primer Panel del día establece el modelo conceptual antes de cualquier code-along.
- **Concepto pedagógico que visualiza:** la **dualidad declaración/uso** de las Custom Properties. El alumno necesita ver simultáneamente cómo se DECLARA un token (con `--` al inicio dentro de un selector) y cómo se USA (con `var()` en cualquier propiedad). Sin la flecha conectora, el alumno no asocia que el nombre escrito a la izquierda es el mismo que se referencia a la derecha.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "CSS CUSTOM PROPERTY — DECLARACIÓN Y USO"
- **Subtítulo** (gris oscuro, 20px): "Una variable nativa de CSS: se declara una vez, se usa en todas las reglas que la necesiten."
- **Layout en dos columnas paralelas conectadas por una flecha curva central:**

  **Columna izquierda — DECLARACIÓN:**
  - Encabezado (azul **_#1971c2_**, 24px): "DECLARACIÓN"
  - Bloque de código (monospace azul **_#1971c2_**, fondo blanco con borde gris claro):
    ```css
    :root {
      --color-accent: #0066cc;
    }
    ```
  - Anotación con flecha verde **_#2f9e44_** desde `--color-accent` → etiqueta: "Nombre del token — siempre arranca con `--`"
  - Anotación con flecha naranja **_#f08c00_** desde `#0066cc` → etiqueta: "Valor que vas a reutilizar"
  - Etiqueta lateral (gris oscuro 14px): "Vive en :root (el siguiente Panel)"

  **Columna derecha — USO:**
  - Encabezado (verde **_#2f9e44_**, 24px): "USO"
  - Bloque de código (monospace azul **_#1971c2_**):
    ```css
    nav a:hover {
      color: var(--color-accent);
    }
    ```
  - Anotación con flecha azul **_#1971c2_** desde `var(--color-accent)` → etiqueta: "`var()` recupera el valor del token"
  - Etiqueta lateral (gris oscuro 14px): "El navegador lee el token y reemplaza por su valor al pintar"

- **Flecha curva grande en el centro** (negro **_#1e1e1e_**, gruesa) desde el token declarado en la izquierda hacia el `var()` de la derecha, con etiqueta sobre la flecha: "MISMO NOMBRE — el navegador hace el match"

- **Recuadro inferior — fallback opcional** (borde gris claro):
  - Encabezado (gris oscuro 14px): "Con fallback opcional:"
  - Bloque de código pequeño (monospace azul): `color: var(--color-accent, #000);`
  - Texto al lado: "Si el token no existe, usa el segundo valor como respaldo."

- **Nota inferior** (negro **_#1e1e1e_**, 16px): "Case-sensitive. El doble `--` es obligatorio. Distinto de `let` / `const` / `var` de JS — esto vive en el CSS, no en JavaScript."

**Anchor pedagógico:** la flecha conectora central es lo que sostiene el Panel — sin ella, las dos columnas se ven como ejemplos sueltos. Con la flecha, el alumno entiende visualmente que declaración y uso son la misma cosa vista desde dos lados. Imagen-slide porque la geometría de las flechas curvas y la alineación de los dos bloques de código requieren precisión.

**Notas para Eric:** este es el primer Panel del día. Se proyecta inmediatamente después del hook visual (1.1) donde se mostró el problema del CSS hardcoded en VS Code. La flecha curva es la pieza que hace clic — Eric puede señalar la flecha mientras dice "el nombre es el puente".

---

### Panel 1.2 — `:root` apunta a `<html>` + cascada del DOM hacia los descendientes

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 1.2 (anatomía de :root): esquema del DOM en árbol. <html> como nodo raíz arriba, <body> debajo, dentro del body el contenido habitual (header, main, footer). Anotación resaltada ":root apunta acá → <html>". Flecha mostrando cómo las variables declaradas en :root caen en cascada hacia TODOS los descendientes.**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón canónico de referencia:** Patrón 7 (Wireframe del DOM en árbol) + Patrón 1 (Anatomía de la pseudo-clase con flecha resaltada al nodo apuntado).
- **Concepto pedagógico que visualiza:** **por qué `:root` y no `body`** — el alumno necesita ver el árbol del DOM con `<html>` como nodo raíz, ver que `:root` apunta a ese nodo específico, y entender que las variables declaradas ahí caen en cascada hacia TODOS los descendientes. Sin ver el árbol, "es la convención" suena arbitrario.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "`:root` — EL SELECTOR RAÍZ DEL DOCUMENTO"
- **Subtítulo** (gris oscuro, 20px): "Apunta al `<html>`. Las variables declaradas acá caen en cascada hacia TODO el documento."
- **Layout en dos secciones lado a lado:**

  **Sección izquierda — Árbol del DOM:**
  - Encabezado (gris oscuro, 16px): "El árbol del documento"
  - Diagrama vertical de nodos conectados por líneas grises:
    - Nodo raíz `<html>` arriba (rectángulo grande, borde azul **_#1971c2_** grueso, fondo blanco). Etiqueta lateral con flecha roja **_#e03131_** apuntando al nodo: "`:root` apunta ACÁ"
    - Debajo `<head>` (rectángulo gris claro, etiqueta neutra) y `<body>` (rectángulo más grande, fondo blanco, borde azul fino) en el mismo nivel.
    - Dentro de `<body>`: 3 nodos hijos `<header>`, `<main>`, `<footer>` (rectángulos pequeños con bordes grises).
    - Dentro de `<main>`: 2 nodos más `<section>` y `<article>` (rectángulos chicos).
  - Líneas verdes **_#2f9e44_** punteadas saliendo del nodo `<html>` y atravesando hacia abajo a TODOS los descendientes, etiquetadas "cascada de variables"

  **Sección derecha — La sintaxis y la regla:**
  - Encabezado (azul **_#1971c2_**, 18px): "Declaración global"
  - Bloque de código (monospace azul **_#1971c2_**, fondo blanco con borde gris claro):
    ```css
    :root {
      --color-primary: #1a1a1a;
      --color-accent: #0066cc;
      --space-md: 16px;
      /* ...todos los tokens globales... */
    }
    ```
  - Recuadro inferior (borde verde **_#2f9e44_**):
    - Encabezado (verde **_#2f9e44_**, 16px): "Por qué `:root` y no `body`:"
    - Bullets en negro **_#1e1e1e_** (14px):
      - "`:root` es `<html>` — un nivel más arriba que `body`"
      - "Mayor especificidad si hay colisión con `html { }`"
      - "Convención universal de la industria (Material, Tailwind, Bootstrap)"

- **Comparativa al pie — qué NO hacer** (recuadro borde rojo **_#e03131_**):
  - Encabezado (rojo **_#e03131_**, 16px): "❌ Si declarás los tokens en `.contenedor` en lugar de `:root`"
  - Texto (negro 14px): "Los tokens solo viven dentro de `.contenedor`. El resto del documento NO los ve. La regla queda atada a una sección del CSS y deja de servir como variable global."

- **Nota inferior** (negro **_#1e1e1e_**, 16px): "El nombre `:root` significa literalmente \"raíz del documento\". En HTML es siempre `<html>`. En otros formatos (XML, SVG) puede ser otro elemento — pero en HTML, es `<html>`."

**Anchor pedagógico:** la imagen del árbol con las líneas verdes saliendo del nodo raíz y bañando todos los descendientes es lo que ancla "cascada" como concepto visual. Sin la imagen, "cascada" es una palabra abstracta. Con la imagen, el alumno entiende que los tokens fluyen hacia abajo automáticamente.

**Notas para Eric:** este Panel cierra el "¿por qué `:root`?" y abre el code-along de la Parte 1.1 (declarar la paleta). Después del Panel, el alumno escribe los 13 tokens en `:root` con seguridad de saber QUÉ es el selector que está usando.

---

### Panel 1.3 — Sistema de tokens: 4 categorías + regla de nombrado semántico

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 1.3 (sistema de tokens, 4 categorías): tabla visual de 4 columnas. Columna 1 "Colores" con los 6 tokens del lab. Columna 2 "Tipografía" con 3 tokens. Columna 3 "Espacios" con 3 tokens. Columna 4 "Estética" con 3 tokens. Cada columna con un color funcional distinto. Al pie, una caja destacada en rojo con la comparativa "--color-accent ✅ vs --azul ❌ vs --c2 ❌".**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para acomodar 4 columnas de tokens + comparativa al pie)
- **Patrón canónico de referencia:** Patrón 2 (Tabla taxonómica) + Patrón 3 (Comparativa de buen vs mal nombrado) al pie.
- **Concepto pedagógico que visualiza:** la **organización profesional** de los tokens en categorías semánticas + la regla de nombrado (propósito, no apariencia). Sin este Panel, el alumno declara los 13 tokens sin entender por qué están en ese orden ni por qué se nombran así. Con el Panel, entiende que el sistema de tokens es un mini-design-system.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "SISTEMA DE TOKENS — 4 CATEGORÍAS, NOMBRADO SEMÁNTICO"
- **Subtítulo** (gris oscuro, 20px): "El nombre del token dice el PROPÓSITO, no la APARIENCIA. Eso es lo que lo hace profesional."
- **Layout en 4 columnas paralelas (cada una con su color funcional de encabezado):**

  **Columna 1 — COLORES (verde **_#2f9e44_**):**
  - Encabezado verde: "1. COLORES"
  - Sub-etiqueta (gris oscuro 12px): "Paleta del producto"
  - Lista de tokens (monospace azul **_#1971c2_** 14px):
    - `--color-primary: #1a1a1a`
    - `--color-accent: #0066cc`
    - `--color-text: #333`
    - `--color-bg: #fff`
    - `--color-bg-soft: #f5f5f5`
    - `--color-border: #e0e0e0`

  **Columna 2 — TIPOGRAFÍA (naranja **_#f08c00_**):**
  - Encabezado naranja: "2. TIPOGRAFÍA"
  - Sub-etiqueta: "Familia + tamaños"
  - Lista de tokens:
    - `--font-text: 'Inter', sans-serif`
    - `--font-size: 16px`
    - `--font-size-title: 28px`

  **Columna 3 — ESPACIOS (azul **_#1971c2_**):**
  - Encabezado azul: "3. ESPACIOS"
  - Sub-etiqueta: "Escala de spacing"
  - Lista de tokens:
    - `--space-sm: 8px`
    - `--space-md: 16px`
    - `--space-lg: 32px`

  **Columna 4 — ESTÉTICA (rojo **_#e03131_**):**
  - Encabezado rojo: "4. ESTÉTICA"
  - Sub-etiqueta: "Radius + sombras"
  - Lista de tokens:
    - `--radius: 8px`
    - `--shadow-sm: 0 1px 3px rgba(0,0,0,0.08)`
    - `--shadow-md: 0 4px 12px rgba(0,0,0,0.12)`

- **Caja destacada al pie — comparativa de nombrado** (recuadro con borde rojo **_#e03131_** ancho completo):
  - Encabezado (rojo **_#e03131_**, 18px): "REGLA DE NOMBRADO — propósito, NO apariencia"
  - 3 columnas internas mostrando comparativa:
    - Columna A (verde **_#2f9e44_**): `--color-accent` ✅ — "sobrevive cualquier cambio futuro de color"
    - Columna B (rojo **_#e03131_**): `--azul` ❌ — "muere apenas el cliente diga 'ya no es azul, es verde'"
    - Columna C (rojo **_#e03131_**): `--c2` ❌ — "no dice nada — ni vos en 6 meses sabés qué es"

- **Nota inferior** (negro **_#1e1e1e_**, 16px): "Esta estructura es la mínima profesional. Design systems grandes (Material, Tailwind) tienen 200-300 tokens — misma lógica, más categorías. Lo aprenden hoy, lo aplican toda su carrera."

**Anchor pedagógico:** las 4 columnas paralelas con su color funcional de encabezado convierten 13 tokens dispersos en un mapa visual organizado. La caja al pie cierra el concepto pedagógico con la regla inamovible — propósito, no apariencia — que decide TODA decisión de nombrado futura.

**Notas para Eric:** este Panel se proyecta justo antes del code-along 1.6 (refactor aditivo del CSS de C01-C03). El alumno mira el Panel mientras escribe `var(--color-primary)` en cada regla — la imagen sirve de cheat sheet visual durante toda la Parte 1.2/1.3 del lab.

---

### Panel 1.4 — Anatomía de `box-shadow`: 4 partes + comparativa sin/con sombra

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 1.4 (anatomía de box-shadow): bloque grande con el valor 0 4px 12px rgba(0,0,0,0.12) y 4 flechas saliendo de cada parte hacia etiquetas: "offset-x: desplazamiento horizontal", "offset-y: desplazamiento vertical", "blur: difuminado del borde", "color con alpha: color + opacidad". Al lado, dos cards de muestra: una sin sombra (rectángulo plano) vs otra con --shadow-sm aplicado, mostrando la profundidad sutil.**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para anatomía + cards de muestra + tabla de shadows)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de sintaxis con 4 flechas a cada parte del valor) + Patrón 3 (Comparativa visual sin sombra / con sombra).
- **Concepto pedagógico que visualiza:** la **descomposición** del valor de `box-shadow` en sus 4 partes — sin esta visualización, el alumno copia el valor del lab y lo aplica sin entender qué hace cada número. Con la anatomía, entiende que `1px 3px` no es magia: es desplazamiento + blur explícitos.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "BOX-SHADOW — ANATOMÍA DEL VALOR"
- **Subtítulo** (gris oscuro, 20px): "4 partes en orden: offset-x · offset-y · blur · color. Cada una controla algo distinto."
- **Sección 1 — Anatomía del valor (arriba, centrada):**
  - Bloque de código grande (monospace azul **_#1971c2_**, 32px): `box-shadow: 0 4px 12px rgba(0,0,0,0.12);`
  - 4 flechas con anotaciones (colores funcionales):
    - Flecha verde **_#2f9e44_** desde `0` → etiqueta: "OFFSET-X — desplazamiento horizontal (0 = centrada)"
    - Flecha naranja **_#f08c00_** desde `4px` → etiqueta: "OFFSET-Y — desplazamiento vertical (positivo = abajo)"
    - Flecha azul **_#1971c2_** desde `12px` → etiqueta: "BLUR — difuminado del borde de la sombra"
    - Flecha roja **_#e03131_** desde `rgba(0,0,0,0.12)` → etiqueta: "COLOR + ALPHA — negro al 12% de opacidad"

- **Sección 2 — Comparativa visual (debajo de la anatomía, dos columnas):**

  **Columna izquierda — SIN sombra:**
  - Encabezado (gris oscuro 16px): "Sin `box-shadow`"
  - Card de muestra: rectángulo plano blanco con borde gris muy fino. Adentro: título "Card" + 2 líneas grises de placeholder.
  - Etiqueta lateral: "Plana — no se siente como objeto físico."

  **Columna derecha — CON sombra:**
  - Encabezado (verde **_#2f9e44_** 16px): "Con `box-shadow: var(--shadow-sm)`"
  - Card idéntica a la izquierda, mismo contenido, pero con sombra discreta cayendo 1px hacia abajo, blur de 3px, opacidad 8%.
  - Etiqueta lateral: "Tiene profundidad — se siente apoyada sobre la página."

- **Sección 3 — Las 2 sombras del lab (tabla al pie):**
  - Recuadro con borde gris claro:
    - Fila 1 — `--shadow-sm`: `0 1px 3px rgba(0,0,0,0.08)` — "Estado base (card apoyada)"
    - Fila 2 — `--shadow-md`: `0 4px 12px rgba(0,0,0,0.12)` — "Estado hover (card levantada)"

- **Nota inferior** (negro **_#1e1e1e_**, 16px): "`box-shadow` NO afecta el layout — no empuja a los vecinos. Solo pinta encima/debajo. Por eso animarlo es barato y combina perfecto con `transition` (siguiente Panel)."

**Anchor pedagógico:** las 4 flechas con colores funcionales descomponen un valor que de otra forma se ve como "una cadena mágica de 4 números". La comparativa visual sin/con sombra demuestra que la diferencia entre "plano" y "moderno" son 4 valores explícitos, no un truco de diseñador.

**Notas para Eric:** este Panel se proyecta antes del code-along 1.10 (donde se aplica `--shadow-sm` a `.card` y `.plan`). La analogía del "vaso apoyado / levantado" del guion se ancla en la comparativa visual del Panel — Eric puede señalar las dos cards mientras dice la frase.

---

### Panel 1.5 — Anatomía de `transition`: 3 partes + 0s vs 0.2s + regla "vive en base"

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 1.5 (anatomía de transition): bloque con el valor transition: box-shadow 0.2s, transform 0.2s y 3 flechas a etiquetas: "propiedades a animar (lista separada por coma)", "duración (200 milisegundos)", "timing (default: ease)". Al lado, diagrama de la diferencia entre 0s (cambio instantáneo, frame único) vs 0.2s (cambio gradual sobre 12 frames a 60fps). Anotación destacada en rojo: "transition vive en la regla BASE, NO en :hover".**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para anatomía + diagrama temporal + regla destacada)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de sintaxis) + Patrón 4 (Secuencia temporal — frames instantáneos vs frames distribuidos).
- **Concepto pedagógico que visualiza:** la **diferencia entre cambio instantáneo y cambio animado** + la regla técnica inamovible de dónde poner `transition`. Sin el diagrama de frames, "200ms" es un número abstracto. Con el diagrama, el alumno ve que 0.2s = 12 frames a 60fps, un cambio percibido como suave.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "TRANSITION — SUAVIZAR EL CAMBIO"
- **Subtítulo** (gris oscuro, 20px): "Hace que el cambio de A a B se reparta sobre un período de tiempo. Sin esto, el cambio es instantáneo."

- **Sección 1 — Anatomía del valor (arriba, centrada):**
  - Bloque de código grande (monospace azul **_#1971c2_**, 28px): `transition: box-shadow 0.2s, transform 0.2s;`
  - 3 flechas con anotaciones:
    - Flecha verde **_#2f9e44_** desde `box-shadow, transform` → etiqueta: "PROPIEDADES a animar (lista separada por coma)"
    - Flecha naranja **_#f08c00_** desde `0.2s` → etiqueta: "DURACIÓN — 200 milisegundos"
    - Flecha azul **_#1971c2_** desde el final del valor → etiqueta: "TIMING — default `ease` (acelera al inicio, desacelera al final)"

- **Sección 2 — Diagrama temporal: 0s vs 0.2s (debajo, dos columnas):**

  **Columna izquierda — Sin transition (cambio instantáneo):**
  - Encabezado (rojo **_#e03131_** 16px): "Sin `transition` (0s)"
  - Línea de tiempo horizontal con 2 estados: estado A (gris claro) en t=0ms, salto vertical brusco al estado B (gris oscuro) en t=0ms+1 frame.
  - Anotación: "1 frame único — el ojo lo percibe como salto"

  **Columna derecha — Con `transition: 0.2s`:**
  - Encabezado (verde **_#2f9e44_** 16px): "Con `transition: 0.2s`"
  - Línea de tiempo con 12-13 puntos intermedios entre estado A y estado B, cada uno con un gradiente intermedio de color.
  - Etiquetas debajo: "0ms" — "100ms" — "200ms"
  - Anotación: "12 frames a 60fps — el ojo percibe un cambio fluido"

- **Sección 3 — Regla inamovible (recuadro destacado al pie, borde rojo **_#e03131_** grueso):**
  - Encabezado (rojo **_#e03131_** 20px): "⚠ REGLA: `transition` vive en la regla BASE, NO en `:hover`"
  - Dos sub-bloques en paralelo:
    - **Correcto** (borde verde **_#2f9e44_**):
      ```css
      .card { transition: box-shadow 0.2s; }
      .card:hover { box-shadow: var(--shadow-md); }
      ```
      Etiqueta verde: "Anima al ENTRAR y al SALIR del mouse"
    - **Incorrecto** (borde rojo **_#e03131_**):
      ```css
      .card:hover { transition: box-shadow 0.2s; ... }
      ```
      Etiqueta roja: "Solo anima al entrar. Al salir, salto instantáneo — parece roto."

- **Nota inferior** (negro **_#1e1e1e_**, 16px): "Pensá la `transition` como un seguro permanente — 'cualquier cambio que sufra esta propiedad, anímalo'. Si la ponés en `:hover`, el seguro solo está activo cuando el mouse está encima."

**Anchor pedagógico:** el diagrama temporal con frames explícitos hace tangible la diferencia entre 0s y 0.2s. La regla del recuadro al pie con sus dos sub-bloques (correcto/incorrecto) ancla la convención técnica que el alumno NO debe equivocarse — error típico de principiante.

**Notas para Eric:** este Panel cierra la teoría de `transition` antes del Panel 1.6 (microinteracción completa). En el code-along 1.10, Eric apunta físicamente al Panel mientras señala "la transition va acá, en `.card`, no en `.card:hover`".

---

### Panel 1.6 — Microinteracción `:hover` + `transform: translateY(-4px)` — estados base vs hover

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 1.6 (anatomía de la microinteracción): card de muestra en estado base abajo (con --shadow-sm) y la misma card en estado hover arriba (con --shadow-md + desplazada 4px hacia arriba). Flecha curva conectando los dos estados etiquetada ":hover dispara → transform: translateY(-4px) + box-shadow más marcada". Recuadro destacado al pie: "Patrón estándar de UI moderna — Stripe, Notion, Linear, Vercel".**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para 2 estados + CSS + caja de "por qué transform y no margin")
- **Patrón canónico de referencia:** Patrón 3 (Comparativa de 2 estados del mismo elemento) + Patrón 1 (Anatomía CSS del patrón canónico).
- **Concepto pedagógico que visualiza:** la **microinteracción completa** — cómo se combinan `box-shadow` + `transition` + `transform: translateY` para producir el efecto "flotación al hover" que el alumno ve cientos de veces al día sin saber cómo se hace. Sin este Panel, los 3 conceptos previos se quedan separados. Con el Panel, el alumno ve el resultado final integrado.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "MICROINTERACCIÓN — LA CARD FLOTA AL HOVER"
- **Subtítulo** (gris oscuro, 20px): "El patrón canónico de UI moderna en 4 líneas de CSS. Sin JavaScript."

- **Sección 1 — Comparativa visual de los 2 estados (mitad izquierda):**
  - Layout vertical con la card base ABAJO y la card hover ARRIBA, separadas por 4px de desplazamiento (para mostrar el efecto translateY):

  **Estado base (abajo):**
  - Card rectangular blanca, esquinas redondeadas, con `--shadow-sm` (sombra discreta).
  - Adentro: título "Característica" + 3 líneas grises de placeholder.
  - Etiqueta lateral (gris oscuro 14px): "Estado base · `--shadow-sm` · sin transform"

  **Estado hover (arriba, desplazada 4px hacia arriba):**
  - Card idéntica en contenido, pero con `--shadow-md` (sombra más marcada, blur mayor) y posición desplazada 4px hacia arriba.
  - Etiqueta lateral (verde **_#2f9e44_** 14px): "Estado `:hover` · `--shadow-md` · `translateY(-4px)`"

  **Flecha curva grande** (azul **_#1971c2_**) conectando el estado base con el estado hover, con etiqueta sobre la flecha: "Mouse encima → la card sube 4px Y la sombra se intensifica"

- **Sección 2 — El CSS completo (mitad derecha):**
  - Bloque de código grande (monospace azul **_#1971c2_**, fondo blanco con borde gris claro):
    ```css
    .card {
      box-shadow: var(--shadow-sm);
      transition: box-shadow 0.2s, transform 0.2s;
    }

    .card:hover {
      box-shadow: var(--shadow-md);
      transform: translateY(-4px);
    }
    ```
  - 4 anotaciones con flechas de colores funcionales:
    - Verde **_#2f9e44_** → `box-shadow: var(--shadow-sm)` → "Estado base: sombra discreta"
    - Naranja **_#f08c00_** → `transition: ...` → "Vive en base (Panel 1.5)"
    - Azul **_#1971c2_** → `box-shadow: var(--shadow-md)` → "Hover: sombra marcada"
    - Rojo **_#e03131_** → `transform: translateY(-4px)` → "Sube 4px (negativo = arriba)"

- **Sección 3 — Por qué `transform` y NO `margin` (recuadro al pie, borde naranja **_#f08c00_**):**
  - Encabezado (naranja **_#f08c00_** 16px): "Por qué `transform: translateY` y NO `margin-top: -4px`"
  - Dos sub-bloques en paralelo:
    - `transform: translateY(-4px)` ✅ — "NO afecta el layout. Los vecinos no se enteran. La grilla queda intacta."
    - `margin-top: -4px` ❌ — "SÍ afecta el layout. Los vecinos se mueven también. La grilla salta."

- **Nota inferior — referencia cultural** (negro **_#1e1e1e_**, 16px): "Este patrón lo ven cientos de veces al día sin saber qué era — Stripe, Notion, Linear, Vercel, Mercado Libre, Spotify. Todas las cards modernas 'flotan' al pasar el mouse. Hoy se lo agregan al suyo."

**Anchor pedagógico:** la comparativa visual de los 2 estados con la flecha curva conectando hace tangible el efecto "flotación" antes del code-along. Las 4 anotaciones de colores funcionales en el CSS le dan al alumno el mapa exacto de qué línea hace qué — no copia ciegamente.

**Notas para Eric:** este es el último Panel del M1. Cierra los 3 conceptos previos (shadow, transition, microinteracción) en una sola imagen. Después del Panel, el alumno ejecuta el code-along 1.10 con seguridad de saber qué pasa. La referencia a Stripe/Notion/Linear/Vercel al pie es lo que hace que el alumno vea el patrón como "lo que usan las apps que conoce".

---

## Momento 2: Crear rama feature

> **Estado:** Borrador
> **Paneles del Momento:** 2 (Panel 2.1 introduce la analogía de líneas del tiempo paralelas; Panel 2.2 establece las 4 reglas del GitFlow básico). Los sub-puntos 2.1 (¿qué es main?), 2.4 (git branch) y 2.5 (code-along) no requieren Panel — son terminal pura.

---

### Panel 2.1 — Líneas del tiempo paralelas: main + feature/form-validado + merge

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 2.1 (líneas del tiempo paralelas): dos líneas horizontales. Arriba, etiquetada "main — LÍNEA DEL TIEMPO PRINCIPAL", con commits A → B → C → ... → M (donde M es un punto de merge). Desde el commit C, una segunda línea se ramifica hacia abajo etiquetada "feature/form-validado — LÍNEA DEL TIEMPO PARALELA" con commits D → E → F, que vuelve a unirse a la principal en el punto M. Anotaciones: "Si algo sale mal acá abajo, la línea principal NO se entera"; "El merge fusiona las dos líneas: lo que aprendimos en la paralela se vuelve oficial en la principal".**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9, horizontal denso para acomodar las dos líneas con todos sus commits + anotaciones)
- **Patrón canónico de referencia:** Patrón 4 (Secuencia temporal de commits) + Patrón 7 (Diagrama de bifurcación y unión).
- **Concepto pedagógico que visualiza:** la **analogía del multiverso de Marvel** aplicada a las ramas Git — el alumno necesita ver físicamente las dos líneas del tiempo separadas, con el momento de bifurcación y el momento de fusión claramente marcados. Sin esta imagen, "rama paralela" es una palabra abstracta. Con la imagen, el alumno entiende que las ramas son universos separados que comparten un origen y pueden fusionarse de vuelta.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "RAMA GIT — UNA LÍNEA DEL TIEMPO PARALELA"
- **Subtítulo** (gris oscuro, 20px): "Como el multiverso de Marvel: dos realidades que arrancan del mismo punto, evolucionan separadas, y se fusionan al final."
- **Sección central — Diagrama de dos líneas del tiempo:**

  **Línea principal (arriba):**
  - Línea horizontal gruesa azul **_#1971c2_** que atraviesa todo el ancho del Panel.
  - Etiqueta sobre la línea (azul 18px): "`main` — LÍNEA DEL TIEMPO PRINCIPAL"
  - Sub-etiqueta (gris oscuro 12px): "Lo que el cliente ve. Lo desplegado. La realidad oficial."
  - 5 commits sobre la línea, representados como círculos azules numerados:
    - Commit A (etiquetado debajo: "C01 — HTML")
    - Commit B ("C02 — Flex")
    - Commit C ("C03 — Grid") ← **punto de bifurcación**, círculo más grande, anotación con flecha "← Acá creamos la rama"
    - Punto en blanco / línea continúa
    - Commit M ("Merge feature/form-validado") ← **punto de fusión**, círculo más grande con borde verde **_#2f9e44_**, anotación con flecha "← Acá las líneas se fusionan"

  **Línea paralela (debajo):**
  - Línea horizontal gruesa naranja **_#f08c00_** que arranca desde el commit C de la línea principal (bifurcación visual con curva descendente) y termina en el commit M (curva ascendente que se une a la principal).
  - Etiqueta sobre la línea (naranja 18px): "`feature/form-validado` — LÍNEA DEL TIEMPO PARALELA"
  - Sub-etiqueta (gris oscuro 12px): "Universo alternativo. Acá experimentás sin romper la realidad oficial."
  - 3 commits sobre la línea paralela, representados como círculos naranjas:
    - Commit D ("agrega validación nombre + email")
    - Commit E ("agrega validación teléfono + select")
    - Commit F ("agrega checkbox + commit final del feature")

- **Anotaciones laterales:**
  - Recuadro a la izquierda de la línea paralela (borde naranja **_#f08c00_**):
    - Encabezado (naranja **_#f08c00_** 14px): "Aislamiento"
    - Texto (negro 13px): "Si algo sale mal acá abajo, la línea principal NO se entera. El cliente sigue viendo la versión estable."
  - Recuadro a la derecha del punto de fusión (borde verde **_#2f9e44_**):
    - Encabezado (verde **_#2f9e44_** 14px): "Merge — la fusión"
    - Texto (negro 13px): "Lo que probaste en la paralela y funcionó, se vuelve oficial. La paralela se reabsorbe en la principal."

- **Caja informativa al pie** (borde gris claro):
  - Encabezado (gris oscuro 14px): "Dato técnico importante:"
  - Texto (negro 13px): "Una rama NO es una copia del código. Es solo un **puntero a un commit**. Crear una rama es instantáneo (gratis). Por eso los equipos crean ramas para CUALQUIER cosa — features, fixes, experimentos de 5 minutos."

**Anchor pedagógico:** las dos líneas con colores funcionales distintos (azul = main, naranja = feature) hacen tangible que son universos separados. El punto de bifurcación y el punto de fusión, marcados con círculos más grandes, son los momentos críticos del modelo mental. Sin este Panel, el alumno no internaliza qué significa "trabajar en una rama paralela" — con el Panel, lo ve.

**Notas para Eric:** este Panel se proyecta justo después del cierre del sub-punto 2.1 (donde se respondió "qué es main"). La analogía del multiverso de Marvel del guion se ancla en el Panel — Eric puede señalar el commit C diciendo "acá Tony Stark hizo algo distinto" y señalar el punto M diciendo "acá las dos realidades se fusionan".

---

### Panel 2.2 — Las 4 reglas de GitFlow básico + loop del ciclo

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 2.2 (las 4 reglas de GitFlow básico): caja grande con título "GITFLOW BÁSICO", 4 reglas numeradas en columna vertical: (1) main siempre tiene código estable y desplegado, (2) Para cada feature creás una rama aparte (feature/...), (3) Cuando el feature está listo, abrís un Pull Request (PR) en GitHub, (4) El PR se mergea a main después de revisión. Al pie, un loop visual con flecha que indica que el ciclo se repite por cada feature nueva.**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón canónico de referencia:** Patrón 4 (Algoritmo numerado) + Patrón 7 (Loop visual con flecha de retorno).
- **Concepto pedagógico que visualiza:** las **4 reglas mínimas del GitFlow profesional** que se aplican en cualquier equipo del mundo. Sin este Panel, "GitFlow" suena a procedimiento opcional. Con el Panel, el alumno ve que son 4 reglas concretas que se repiten en bucle para CADA feature.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "GITFLOW BÁSICO — LAS 4 REGLAS DEL FLUJO PROFESIONAL"
- **Subtítulo** (gris oscuro, 20px): "No es una ley física. Es una convención del equipo. Pero TODOS los equipos arrancan con estas 4 reglas."

- **Sección central — 4 reglas numeradas en columna vertical (cada una con su color funcional):**

  **Regla 1 (verde **_#2f9e44_**):**
  - Numerador grande "1" en un círculo verde a la izquierda.
  - Texto principal (negro 20px): "`main` siempre tiene código estable y desplegado"
  - Sub-texto (gris oscuro 14px): "Por qué — el cliente lo ve. Si está roto, hay un incidente."

  **Regla 2 (naranja **_#f08c00_**):**
  - Numerador "2" en círculo naranja.
  - Texto principal: "Cada feature se desarrolla en su propia rama (`feature/<descripción>`)"
  - Sub-texto: "Por qué — aislamiento. Un dev no rompe el trabajo de otro."

  **Regla 3 (azul **_#1971c2_**):**
  - Numerador "3" en círculo azul.
  - Texto principal: "Cuando el feature está listo, se abre un **Pull Request** en GitHub"
  - Sub-texto: "Por qué — pide revisión antes de integrar. Otra persona mira el código."

  **Regla 4 (rojo **_#e03131_**):**
  - Numerador "4" en círculo rojo.
  - Texto principal: "El PR se mergea a `main` solo después de revisión"
  - Sub-texto: "Por qué — el código que entra a la realidad oficial pasó por al menos 2 pares de ojos."

- **Sección inferior — Loop visual del ciclo:**
  - Una flecha curva grande (gris oscuro, gruesa) que sale de la regla 4 y vuelve a la regla 1.
  - Etiqueta sobre la flecha (negro 16px): "Y vuelve a empezar — por cada feature nuevo"
  - Sub-etiqueta (gris oscuro 12px): "Una rama nace, vive mientras se desarrolla el feature, muere cuando se mergea. `main` nunca muere — es el río principal."

- **Caja informativa al pie** (borde gris claro):
  - Encabezado (gris oscuro 14px): "Variantes que vas a encontrar en tu carrera:"
  - Texto (negro 13px): "GitFlow completo (con ramas develop/release/hotfix), trunk-based development, GitHub Flow. Todas arrancan con estas mismas 4 reglas. Aprenderlas hoy te sirve para cualquier equipo del mundo."

**Anchor pedagógico:** la numeración 1-2-3-4 con colores funcionales distintos hace que las reglas se memoricen como secuencia. El loop visual al pie ancla que el GitFlow es un ciclo, no un procedimiento de una sola vez — cada feature pasa por el mismo loop.

**Notas para Eric:** este Panel se proyecta antes del code-along 2.4/2.5 (donde el alumno ejecuta los comandos para crear la rama). El alumno entra al code-along sabiendo en qué regla del GitFlow está parado.

---

## Momento 3: Formulario validado en la rama

> **Estado:** Borrador
> **Paneles del Momento:** 4 (Panel 3.1 introduce el panorama de las 3 capas de validación; Panel 3.2 da la vista panorámica del form del lab; Paneles 3.3 y 3.4 cubren los 2 atributos que requieren explicación técnica adicional — `pattern` y el truco del `<select>` con `value=""`). El code-along 3.5 y la demo 3.6 no requieren Panel.

---

### Panel 3.1 — 3 capas de validación (nativa/JS/servidor) + 4 capas internas de la nativa

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 3.1 (las 3 capas de validación + las 4 capas de la nativa): diagrama de 3 cajas verticales — NAVEGADOR (HTML nativo) arriba con fondo verde, NAVEGADOR (JS del cliente) en el medio con fondo amarillo, SERVIDOR (backend) abajo con fondo rojo. Flechas mostrando que el dato pasa por las 3 capas en orden. Al lado de la caja nativa, una sub-lista con las 4 capas internas de la validación HTML: (1) Obligatoriedad → required, (2) Formato → type="email" / "tel" / "url" / "date", (3) Longitud → minlength / maxlength, (4) Patrón → pattern.**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para acomodar las 3 capas verticales + sub-lista lateral)
- **Patrón canónico de referencia:** Patrón 4 (Secuencia de 3 capas con flujo de datos) + Patrón 2 (Sub-tabla de las 4 capas internas de la nativa).
- **Concepto pedagógico que visualiza:** el **panorama completo** de la validación profesional + la ubicación exacta de la validación nativa dentro de ese panorama. Sin este Panel, el alumno puede creer que la validación nativa reemplaza al backend (error de seguridad grave). Con el Panel, entiende que la nativa es la PRIMERA capa, no la ÚNICA.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "3 CAPAS DE VALIDACIÓN — LA NATIVA ES LA PRIMERA, NO LA ÚNICA"
- **Subtítulo** (gris oscuro, 20px): "Un formulario profesional valida en 3 lugares distintos. Hoy aprendés la primera."

- **Sección central — Las 3 capas verticales con flechas de flujo:**
  - Una flecha vertical gruesa gris atraviesa las 3 cajas de arriba hacia abajo etiquetada "FLUJO DEL DATO al hacer submit"
  - 3 cajas apiladas:

  **Caja 1 (arriba) — NAVEGADOR · HTML NATIVO:**
  - Fondo verde claro **_#b2f2bb_** con borde verde **_#2f9e44_** grueso.
  - Encabezado (verde **_#2f9e44_** 22px): "1. NAVEGADOR — HTML nativo"
  - Sub-etiqueta (gris oscuro 14px): "Hoy"
  - Texto (negro 14px): "El navegador valida formato, obligatoriedad, longitud y patrón usando atributos HTML. Si falla, bloquea el submit y muestra tooltip de error."
  - Etiqueta a la derecha: "✅ HOY"

  **Caja 2 (medio) — NAVEGADOR · JS DEL CLIENTE:**
  - Fondo amarillo claro **_#ffec99_** con borde naranja **_#f08c00_** grueso.
  - Encabezado (naranja **_#f08c00_** 22px): "2. NAVEGADOR — JavaScript del cliente"
  - Sub-etiqueta (gris oscuro 14px): "M2 del curso"
  - Texto (negro 14px): "JS valida reglas de negocio del front — ej: 'la fecha de fin debe ser después de la fecha de inicio'. Se ejecuta después de la nativa, antes de mandar al servidor."
  - Etiqueta a la derecha: "→ M2 (más adelante)"

  **Caja 3 (abajo) — SERVIDOR · BACKEND:**
  - Fondo rojo claro **_#ffc9c9_** con borde rojo **_#e03131_** grueso.
  - Encabezado (rojo **_#e03131_** 22px): "3. SERVIDOR — Backend"
  - Sub-etiqueta (gris oscuro 14px): "Otro curso"
  - Texto (negro 14px): "El backend valida seguridad real — sanitización, anti-inyección SQL, '¿este email ya existe en la DB?'. Es la última línea de defensa y la única que el atacante NO puede saltar."
  - Etiqueta a la derecha: "🔒 Seguridad real"

- **Sección derecha — Sub-lista de las 4 capas internas de la nativa (recuadro lateral, borde verde **_#2f9e44_**):**
  - Encabezado (verde **_#2f9e44_** 18px): "Adentro de la capa nativa hay 4 sub-capas:"
  - Tabla con 4 filas:
    - Fila 1: "Obligatoriedad" → `required`
    - Fila 2: "Formato del valor" → `type="email" / "tel" / "number" / "url" / "date"`
    - Fila 3: "Longitud" → `minlength / maxlength`
    - Fila 4: "Patrón custom" → `pattern` (regex)
  - Nota al pie (gris oscuro 12px): "Las 4 que vamos a usar hoy en el form del lab."

- **Caja destacada al pie (recuadro con borde rojo **_#e03131_**, ancho completo):**
  - Encabezado (rojo **_#e03131_** 16px): "⚠ REGLA CRÍTICA — la nativa es UX, no SEGURIDAD"
  - Texto (negro 14px): "Cualquier atacante puede saltar la validación nativa deshabilitando JavaScript o editando el HTML con DevTools. La nativa ayuda al usuario honesto a no cometer errores de tipeo. La seguridad real vive SIEMPRE en el backend."

**Anchor pedagógico:** las 3 cajas con colores funcionales graduados (verde → amarillo → rojo) anclan visualmente que hay un orden y una responsabilidad por capa. La sub-lista lateral muestra que la primera capa, por sí sola, tiene 4 sub-capas — el alumno entra a los siguientes sub-puntos sabiendo en cuál de las 4 sub-capas está cada concepto.

**Notas para Eric:** este Panel se proyecta al inicio del M3, antes del Panel 3.2 (vista panorámica del form). La caja roja al pie es la que el alumno tiene que internalizar — sin ella, podría creer que "validación nativa" es suficiente para producción. Eric puede apuntar al recuadro mientras dice la frase del guion: "la nativa es UX, no seguridad".

---

### Panel 3.2 — Anatomía del form del lab con los 6 atributos resaltados

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 3.2 (anatomía del form del lab): mockup del form con 6 campos en columna vertical (nombre, email, teléfono, motivo, mensaje, checkbox), cada campo con una flecha lateral apuntando al atributo de validación que aplica + breve descripción. Colores funcionales: verde para los atributos del lado del lab, azul para los tipos de input, rojo para el pattern y el value="" (los 2 que requieren explicación técnica adicional).**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para mockup completo + flechas laterales con descripciones)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de un objeto compuesto con flechas a cada parte) + wireframe del form del lab.
- **Concepto pedagógico que visualiza:** la **vista panorámica** del form que el alumno va a construir — los 6 campos + los 6 atributos clave + qué hace cada uno. Sin este Panel, el alumno entra al code-along 3.5 sin un mapa mental del producto final. Con el Panel, sabe exactamente qué está construyendo antes de tipear la primera línea.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "EL FORM DEL LAB — 6 CAMPOS, 6 ATRIBUTOS"
- **Subtítulo** (gris oscuro, 20px): "La vista panorámica antes del code-along. 4 atributos son intuitivos; 2 requieren explicación (Paneles 3.3 y 3.4)."

- **Sección central — Mockup vertical del form (lado izquierdo del Panel):**
  - Rectángulo grande con borde gris claro representando el formulario.
  - 6 campos apilados verticalmente, cada uno con su label arriba y su input/select/textarea/checkbox debajo:

  **Campo 1 — Nombre:**
  - Label: "Nombre (mín. 3 caracteres)"
  - Input de texto vacío
  - Flecha verde **_#2f9e44_** lateral → etiqueta a la derecha: "`required` + `minlength=\"3\"`"
  - Descripción debajo de la etiqueta (gris oscuro 12px): "No vacío + mínimo 3 caracteres"

  **Campo 2 — Email:**
  - Label: "Correo electrónico"
  - Input de tipo email
  - Flecha azul **_#1971c2_** → etiqueta: "`type=\"email\"` + `required`"
  - Descripción: "Formato de email obligatorio + no vacío"

  **Campo 3 — Teléfono:**
  - Label: "Teléfono (9 dígitos)"
  - Input de tipo tel
  - Flecha roja **_#e03131_** → etiqueta: "`type=\"tel\"` + `pattern=\"[0-9]{9}\"` + `required`"
  - Descripción: "⚠ Pattern — ver Panel 3.3"
  - El `pattern` resaltado en rojo (fondo rojo claro **_#ffc9c9_**) para indicar que es el atributo del Panel siguiente.

  **Campo 4 — Motivo:**
  - Label: "Motivo del contacto"
  - Select con 4 opciones visibles
  - Flecha roja **_#e03131_** → etiqueta: "`<select>` con primera opción `value=\"\"` + `required`"
  - Descripción: "⚠ El truco del `value=\"\"` — ver Panel 3.4"
  - El `value=""` resaltado en rojo (fondo rojo claro) para indicar que es el atributo del Panel siguiente.

  **Campo 5 — Mensaje:**
  - Label: "Mensaje"
  - Textarea de 4 filas
  - Flecha verde **_#2f9e44_** → etiqueta: "`required` + `minlength=\"10\"`"
  - Descripción: "No vacío + mínimo 10 caracteres"

  **Campo 6 — Checkbox de términos:**
  - Label envolvente: "[ ] Acepto los términos y condiciones"
  - Input de tipo checkbox
  - Flecha verde **_#2f9e44_** → etiqueta: "`<input type=\"checkbox\" required>`"
  - Descripción: "Obliga a marcar la casilla"

- **Caja al pie — bonus mobile (recuadro borde naranja **_#f08c00_**):**
  - Encabezado (naranja **_#f08c00_** 16px): "💡 Bonus mobile gratis"
  - Texto (negro 14px): "En celular, `type=\"email\"` abre el teclado con la tecla `@` visible. `type=\"tel\"` abre el teclado numérico. Mismo HTML, mejor UX para mobile — sin escribir una línea extra."

- **Nota inferior** (negro **_#1e1e1e_**, 16px): "De los 6 atributos: 4 son intuitivos (verde + azul). Los 2 en rojo (`pattern` y el truco del `<select>`) los explicamos en los siguientes 2 Paneles, antes del code-along."

**Anchor pedagógico:** el mockup vertical con flechas laterales convierte una lista de 6 reglas en un mapa visual. Los 2 atributos en rojo (pattern y value="") señalan al alumno "atento — esto necesita explicación adicional" antes de los Paneles 3.3/3.4. Sin esa señalización, el alumno podría pensar que los 6 atributos son del mismo nivel de complejidad.

**Notas para Eric:** este Panel se proyecta justo después del Panel 3.1. Le da al alumno la "tabla del lab" en forma visual — la misma información que la tabla del guion, pero anclada a un mockup del form que el alumno reconoce.

---

### Panel 3.3 — Anatomía de `pattern="[0-9]{9}"` + 4 valores de prueba con resultados

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 3.3 (anatomía del pattern="[0-9]{9}"): bloque grande con el valor descompuesto. Flechas a 2 partes: [0-9] etiquetado "rango de caracteres permitidos: cualquier dígito del 0 al 9", {9} etiquetado "repetición exacta: exactamente 9 veces, ni más ni menos". Al pie, comparativa de 4 valores de prueba: 987654321 ✅ (válido), 12345 ❌ (5 dígitos), 9876543210 ❌ (10 dígitos), abc123456 ❌ (tiene letras).**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de sintaxis con flechas a cada parte) + Patrón 3 (Comparativa de valores válidos vs inválidos).
- **Concepto pedagógico que visualiza:** la **descomposición** de un valor regex en sus 2 partes principales + ejemplos concretos de qué pasa con cada tipo de input. Sin este Panel, el alumno copia `[0-9]{9}` como cadena mágica. Con el Panel, entiende que es `[rango]` + `{repetición}`, lo cual le permite construir patterns para otros casos (DNI, código postal, placa).

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "PATTERN — REGEX EN HTML NATIVO"
- **Subtítulo** (gris oscuro, 20px): "Una expresión regular que el navegador valida en cada input. El valor entero del input debe matchear."

- **Sección 1 — Anatomía del pattern (arriba, centrada):**
  - Bloque de código grande (monospace azul **_#1971c2_**, 32px): `pattern="[0-9]{9}"`
  - 2 flechas con anotaciones:
    - Flecha verde **_#2f9e44_** desde `[0-9]` → etiqueta: "RANGO de caracteres permitidos — cualquier dígito del 0 al 9 (equivale a `\d`)"
    - Flecha naranja **_#f08c00_** desde `{9}` → etiqueta: "REPETICIÓN exacta — exactamente 9 veces, ni más ni menos"

- **Sección 2 — Lectura completa (debajo de la anatomía):**
  - Recuadro con borde gris claro:
    - Texto (negro 16px): "**Resultado:** 9 dígitos numéricos seguidos. Sin letras, sin espacios, sin guiones, sin paréntesis."
    - Sub-texto (gris oscuro 14px): "El navegador ancla automáticamente al inicio y fin del valor (como si tuviera `^...$` invisibles). El input ENTERO debe matchear, no solo una parte."

- **Sección 3 — 4 valores de prueba (tabla al pie con resultados):**
  - Encabezado (negro 18px): "Probemos 4 valores:"
  - Tabla con 4 filas, cada una con: valor (monospace) + resultado (✅/❌) + razón:

    | Valor | Resultado | Razón |
    |---|---|---|
    | `987654321` | ✅ verde **_#2f9e44_** | "9 dígitos exactos" |
    | `12345` | ❌ rojo **_#e03131_** | "Solo 5 dígitos — falta repetición" |
    | `9876543210` | ❌ rojo **_#e03131_** | "10 dígitos — sobra 1" |
    | `abc123456` | ❌ rojo **_#e03131_** | "Tiene letras — rango `[0-9]` no acepta letras" |

  - Cada valor con un fondo de color suave (verde claro para válido, rojo claro para inválidos).

- **Sección 4 — Combinación con `type="tel"` (caja al pie, borde azul **_#1971c2_**):**
  - Encabezado (azul **_#1971c2_** 16px): "Combinación canónica en el lab"
  - Bloque de código (monospace azul):
    ```html
    <input type="tel" pattern="[0-9]{9}" required>
    ```
  - Anotaciones:
    - "`type=\"tel\"` → abre teclado numérico en mobile (pero NO valida formato)"
    - "`pattern=\"[0-9]{9}\"` → es lo que pone la regla real de validación"
    - "`required` → no vacío"

- **Nota inferior — etimología** (gris oscuro 12px): "Las expresiones regulares las inventó el matemático Stephen Kleene en los años 50. Llegaron a la programación en los 70 con Unix. Hoy las hablan Python, JS, HTML, todos los editores. El que aprende regex, lo usa toda la carrera."

**Anchor pedagógico:** la descomposición en `[rango]` + `{repetición}` con flechas de colores hace que el regex deje de ser "cadena mágica" y se convierta en un patrón replicable. Los 4 valores de prueba con ✅/❌ y razón anclan visualmente cuándo el navegador acepta y cuándo rechaza — el alumno entiende el comportamiento antes de la demo en vivo del 3.6.

**Notas para Eric:** este Panel se proyecta antes del code-along del campo 3 del form (teléfono). Después del Panel, el alumno escribe `pattern="[0-9]{9}"` entendiendo por qué funciona, no copiando ciegamente.

---

### Panel 3.4 — Comparativa `<select>` con `value=""` vs sin: el truco del placeholder

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 3.4 (comparativa <select> con vs sin value=""): dos columnas. Izquierda "❌ SIN value=\"\"": código del select con la primera opción <option>Selecciona</option>, debajo una caja con el form submiteado pasando el valor "Selecciona" como motivo (texto basura). Derecha "✅ CON value=\"\"": mismo select pero con <option value="">Selecciona</option>, debajo el navegador bloqueando el submit con tooltip "Selecciona un elemento de la lista". Resaltar visualmente en rojo los 2 caracteres ="" en el lado correcto.**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9, horizontal para comparativa lado a lado con código + simulación del navegador)
- **Patrón canónico de referencia:** Patrón 3 (Comparativa ❌ vs ✅ del mismo elemento HTML con resultados distintos).
- **Concepto pedagógico que visualiza:** el **truco invisible** del `value=""` en la primera opción del `<select>`. Sin este Panel, el alumno escribe `<option>Selecciona</option>` por intuición y el `required` no funciona — el form acepta "Selecciona" como motivo válido. Con el Panel, el alumno entiende que 2 caracteres (`=""`) son lo que activa toda la validación.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "EL TRUCO DEL `<SELECT>` CON `VALUE=\"\"`"
- **Subtítulo** (gris oscuro, 20px): "2 caracteres invisibles que activan toda la validación. Sin ellos, `required` no sirve."

- **Layout en dos columnas paralelas (sin línea divisoria, separadas por proximidad):**

  **Columna izquierda — ❌ SIN `value=""`:**
  - Encabezado (rojo **_#e03131_** 28px): "❌ SIN `value=\"\"`"
  - Sub-etiqueta (gris oscuro 14px): "Lo que escribe el alumno por intuición"
  - Bloque de código (monospace azul **_#1971c2_**, fondo blanco con borde gris):
    ```html
    <select required>
      <option>Selecciona un motivo</option>
      <option value="consulta">Consulta</option>
      <option value="reclamo">Reclamo</option>
      <option value="sugerencia">Sugerencia</option>
    </select>
    ```
  - Sub-caja debajo (borde rojo **_#e03131_**, fondo rojo claro **_#ffc9c9_**):
    - Etiqueta arriba (rojo **_#e03131_** 16px): "Qué pasa al hacer submit:"
    - Mockup de un objeto JSON o un POST: `motivo: "Selecciona un motivo"`
    - Texto (negro 14px): "El navegador acepta 'Selecciona un motivo' como motivo válido. La basura llega al servidor."
  - Etiqueta de cierre (rojo **_#e03131_** 16px): "El `required` NO se dispara — la primera opción tiene texto, no es vacía."

  **Columna derecha — ✅ CON `value=""`:**
  - Encabezado (verde **_#2f9e44_** 28px): "✅ CON `value=\"\"`"
  - Sub-etiqueta (gris oscuro 14px): "Lo correcto — el primer item es placeholder"
  - Bloque de código (monospace azul **_#1971c2_**):
    ```html
    <select required>
      <option value="">Selecciona un motivo</option>
      <option value="consulta">Consulta</option>
      <option value="reclamo">Reclamo</option>
      <option value="sugerencia">Sugerencia</option>
    </select>
    ```
  - **Los 2 caracteres `=""` de la primera línea resaltados con fondo rojo claro **_#ffc9c9_**** y subrayado rojo grueso para que sean lo primero que el ojo capture.
  - Sub-caja debajo (borde verde **_#2f9e44_**, fondo verde claro **_#b2f2bb_**):
    - Etiqueta arriba (verde **_#2f9e44_** 16px): "Qué pasa al hacer submit sin elegir:"
    - Mockup de tooltip del navegador sobre el select: "Selecciona un elemento de la lista."
    - Texto (negro 14px): "El navegador bloquea el submit. El usuario debe elegir una opción real antes de continuar."
  - Etiqueta de cierre (verde **_#2f9e44_** 16px): "El `required` SÍ se dispara — la primera opción tiene `value=\"\"` y eso cuenta como 'no elegido'."

- **Caja al pie ancho completo (borde naranja **_#f08c00_**):**
  - Encabezado (naranja **_#f08c00_** 18px): "💡 Por qué funciona así"
  - Texto (negro 14px): "`required` en un `<select>` chequea si la opción elegida tiene un `value` distinto de `\"\"` (vacío). Por default, un `<select>` siempre tiene una opción 'elegida' — la primera. Si esa primera opción tiene texto sin `value=\"\"`, el navegador la considera una opción válida y `required` nunca falla. El truco es declarar la primera opción como placeholder visual (con texto 'Selecciona...') pero `value=\"\"` (vacío para el navegador)."

- **Nota inferior** (negro **_#1e1e1e_**, 16px): "Mismo truco para CUALQUIER dropdown obligatorio: país, día de nacimiento, categoría, departamento. 2 caracteres — `=\"\"` — son la diferencia entre 'valida' y 'no valida'."

**Anchor pedagógico:** la comparativa lado a lado con el mismo HTML y el detalle de los 2 caracteres `=""` resaltados en rojo hace tangible el cambio mínimo que activa toda la validación. La sub-caja con el "qué pasa al submit" en cada lado muestra el resultado en términos del usuario final — no solo del código.

**Notas para Eric:** este Panel se proyecta antes del code-along del campo 4 del form (motivo). Después del Panel, cuando el alumno escribe `<option value="">Selecciona un motivo</option>`, Eric puede señalar el Panel diciendo "estos 2 caracteres son los que activan la validación".

---

## Momento 4: Cerrar el flujo Git

> **Estado:** Borrador
> **Paneles del Momento:** 4 (Panel 4.1 introduce la anatomía de un PR; Panel 4.2 muestra la anatomía del diff de GitHub; Panel 4.3 visualiza la desincronización local vs remota antes y después de `git pull`; Panel 4.4 cierra con el loop visual del GitFlow de 6 pasos como cheat sheet del curso). Los code-along 4.2, 4.4, 4.6 y 4.8 no requieren Panel.

---

### Panel 4.1 — Anatomía de un Pull Request en GitHub (3 zonas)

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 4.1 (anatomía de un Pull Request en GitHub): captura/mockup de la página de un PR con 3 zonas resaltadas con colores funcionales. (1) Zona superior verde — título + descripción del PR (qué se cambió y por qué). (2) Zona media azul — Conversation (comentarios, aprobaciones, checks de CI). (3) Zona inferior naranja — Files changed (el diff completo línea por línea). Etiqueta destacada al pie: "El PR es DONDE el equipo se reúne a revisar antes de mergear".**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para mockup de PR completo con 3 zonas + etiquetas)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de un objeto compuesto con zonas resaltadas) + mockup fiel a la UI real de GitHub.
- **Concepto pedagógico que visualiza:** las **3 zonas de un PR** y qué función cumple cada una. Sin este Panel, "Pull Request" suena a botón de merge. Con el Panel, el alumno entiende que es un ESPACIO de revisión — con descripción, comentarios y diff.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "PULL REQUEST — ANATOMÍA DE UNA PÁGINA DE GITHUB"
- **Subtítulo** (gris oscuro, 20px): "El PR no es un botón de merge. Es DONDE el equipo se reúne a revisar antes de mergear."

- **Sección central — Mockup de un PR de GitHub (rectángulo grande con borde gris representando una ventana del navegador):**
  - Barra superior gris claro con tabs simulados: "Conversation · Commits · Checks · Files changed"
  - Adentro, 3 zonas resaltadas verticalmente con colores funcionales:

  **Zona 1 (arriba) — TÍTULO + DESCRIPCIÓN (verde **_#2f9e44_**):**
  - Borde verde grueso alrededor de la zona.
  - Mockup interno: título grande en negro "Agrega validación nativa al formulario de contacto" + un badge "feature/form-validado → main".
  - Debajo: descripción multilínea simulada con bullets: "- Nombre: required + minlength..." (3-4 líneas)
  - Etiqueta lateral con flecha verde → "ZONA 1 — Título + descripción · qué se cambió y por qué"
  - Sub-etiqueta (verde **_#2f9e44_** 14px): "Es la documentación del PR — en 6 meses alguien la va a leer."

  **Zona 2 (medio) — CONVERSATION (azul **_#1971c2_**):**
  - Borde azul grueso alrededor de la zona.
  - Mockup interno: 2-3 burbujas de comentarios simuladas (avatar circular + nombre de usuario + texto del comentario). Una con texto "Considerar agregar maxlength también..."
  - Checks de CI verde abajo: "✓ All checks have passed"
  - Botón verde grande "Merge pull request" al pie de la zona.
  - Etiqueta lateral con flecha azul → "ZONA 2 — Conversation · comentarios, aprobaciones, checks de CI"
  - Sub-etiqueta (azul **_#1971c2_** 14px): "Acá el equipo discute. Acá se aprueba. Acá se mergea."

  **Zona 3 (abajo) — FILES CHANGED (naranja **_#f08c00_**):**
  - Borde naranja grueso alrededor de la zona.
  - Mockup interno: header con "1 file changed · 27 insertions · 3 deletions" + nombre de archivo "index.html".
  - Debajo, líneas de código simuladas en formato diff:
    - 2-3 líneas con `-` y fondo rojo claro **_#ffc9c9_** (eliminadas).
    - 4-5 líneas con `+` y fondo verde claro **_#b2f2bb_** (agregadas).
    - 1-2 líneas blancas (contexto).
  - Etiqueta lateral con flecha naranja → "ZONA 3 — Files changed · el diff completo línea por línea (Panel siguiente)"
  - Sub-etiqueta (naranja **_#f08c00_** 14px): "Acá vive el código real. Acá se comenta cada línea."

- **Caja informativa al pie (borde gris claro, ancho completo):**
  - Encabezado (negro **_#1e1e1e_** 16px): "Dato técnico clave:"
  - Texto (gris oscuro 14px): "'Pull Request' es terminología de GitHub y Bitbucket. Git nativo no tiene PRs — son una capa de colaboración construida encima de Git. GitLab los llama 'Merge Requests' — es exactamente lo mismo."

- **Etiqueta destacada al pie (recuadro con borde rojo **_#e03131_** ancho completo):**
  - Texto centrado (rojo **_#e03131_** 18px): "EL PR ES DONDE EL EQUIPO SE REÚNE A REVISAR ANTES DE MERGEAR"

**Anchor pedagógico:** el mockup fiel a la UI de GitHub con las 3 zonas resaltadas en colores funcionales convierte una página web abstracta en un mapa con 3 propósitos diferenciados. La etiqueta al pie ancla el "para qué" del PR como concepto pedagógico.

**Notas para Eric:** este Panel se proyecta antes del code-along 4.4 (abrir el PR en GitHub). Cuando el alumno entre a la pestaña del PR en su navegador, va a reconocer las 3 zonas porque las acaba de ver en el Panel.

---

### Panel 4.2 — Anatomía del diff de GitHub: verde/rojo/contexto + comentario inline

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 4.2 (anatomía de un diff de GitHub): bloque grande mostrando 6 líneas de código en formato diff. Líneas con + y fondo verde claro etiquetadas "AGREGADAS". Líneas con - y fondo rojo claro etiquetadas "ELIMINADAS". Líneas en blanco etiquetadas "CONTEXTO (no cambió)". Anotación lateral: "Click en cualquier línea → comentario inline atado a esa línea específica".**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para mockup del diff + tabla de las 3 categorías + comentario inline simulado)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de una vista de UI) + Patrón 2 (Tabla de las 3 categorías de línea).
- **Concepto pedagógico que visualiza:** las **3 categorías de línea** del diff de GitHub + la capacidad de comentar inline. Sin este Panel, el alumno entra a "Files changed" sin saber qué está mirando. Con el Panel, lee el diff con criterio profesional desde el primer PR.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "EL DIFF DE GITHUB — VERDE / ROJO / CONTEXTO"
- **Subtítulo** (gris oscuro, 20px): "Leer el diff es EL skill profesional de Git. Hoy es la primera práctica."

- **Sección central — Mockup del diff (mitad izquierda del Panel):**
  - Rectángulo grande con borde gris claro representando la pestaña "Files changed" de GitHub.
  - Header del archivo: "📄 index.html · 30 ++++++++++++++++---" (verde + rojo simulados)
  - Bloque de código en formato diff (monospace, fontSize 14):
    ```
       <section id="contacto">
         <h2>Contáctanos</h2>
    -    <form>
    -      <input name="nombre">
    -      <input name="email">
    +    <form>
    +      <label for="nombre">Nombre (mín. 3 caracteres)</label>
    +      <input type="text" id="nombre" required minlength="3">
    +      <label for="email">Correo electrónico</label>
    +      <input type="email" id="email" required>
    +      <input type="tel" pattern="[0-9]{9}" required>
         </form>
       </section>
    ```
  - Cada tipo de línea con su fondo:
    - Líneas con `+`: fondo verde claro **_#b2f2bb_**
    - Líneas con `-`: fondo rojo claro **_#ffc9c9_**
    - Líneas sin símbolo: fondo blanco (contexto)
  - Número de línea a la izquierda (gris claro) para cada línea.

- **Anotación de comentario inline** (overlay sobre una de las líneas verdes, ej. la del `pattern="[0-9]{9}"`):
  - Burbuja amarilla **_#ffec99_** con borde naranja **_#f08c00_** que sale de la línea hacia la derecha.
  - Avatar circular pequeño + nombre "eric-verde"
  - Texto del comentario: "Considerar agregar `maxlength=\"9\"` también para evitar que el usuario escriba 15 dígitos."
  - Flecha desde la burbuja a la línea verde.

- **Sección derecha — Tabla de las 3 categorías de línea:**
  - Encabezado (gris oscuro 18px): "Las 3 categorías de línea"
  - Tabla con 3 filas:

    | Color | Símbolo | Significado |
    |---|---|---|
    | Verde **_#2f9e44_** | `+` al inicio | Línea AGREGADA en este PR |
    | Rojo **_#e03131_** | `-` al inicio | Línea ELIMINADA en este PR |
    | Blanco | (sin símbolo) | CONTEXTO — no cambió, está para situar |

- **Caja al pie — Capacidades extra de GitHub (borde gris claro):**
  - Encabezado (negro 16px): "Capacidades del diff de GitHub (no presentes en `git diff` de terminal):"
  - Bullets (negro 14px):
    - "**Comentario inline** — click en cualquier línea → cuadro de texto atado a esa línea específica."
    - "**Vista unificada o lado a lado** — botón arriba del diff. Lado a lado es más natural para revisiones largas."
    - "**Marcar archivos como revisados** — checkbox arriba de cada archivo. Útil cuando el PR toca 20 archivos."

- **Etiqueta destacada al pie** (negro **_#1e1e1e_** 16px): "Leer el diff es lo que separa al junior que entiende lo que hace su equipo del que está perdido. En tus primeros 6 meses como dev vas a leer diffs todos los días."

**Anchor pedagógico:** el mockup del diff con las 3 categorías visualizadas en sus fondos de color hace que el alumno reconozca cada tipo de línea de un vistazo. La burbuja de comentario inline anclada a una línea específica visualiza la capacidad clave de GitHub que diferencia un PR de "mandar el código por Slack".

**Notas para Eric:** este Panel se proyecta cuando el alumno entra a la pestaña "Files changed" del PR (sub-punto 4.5). La demo del comentario inline del guion se corresponde 1-a-1 con la burbuja del Panel — Eric puede señalar la burbuja antes de hacer el demo en vivo.

---

### Panel 4.3 — Desincronización local vs remota antes de `git pull` + efecto del pull

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 4.3 (qué pasa después del merge — desincronización local vs remota): dos cajas. REMOTO (GitHub) a la izquierda con etiqueta "main contiene: commit estética + commit form validado (merge)". LOCAL (PC) a la derecha con etiqueta "main contiene: commit estética solamente (FALTA EL MERGE)". Flecha roja gigante en el medio etiquetada "DESINCRONIZADO". Debajo, segunda escena: comando git pull ejecutándose → ambas cajas iguales con commit de merge → etiqueta verde "SINCRONIZADO".**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para 2 escenas apiladas — antes del pull / después del pull)
- **Patrón canónico de referencia:** Patrón 3 (Comparativa de 2 estados con desincronización visible) + Patrón 4 (Secuencia temporal: escena ANTES → escena DESPUÉS).
- **Concepto pedagógico que visualiza:** la **diferencia entre el repo remoto (GitHub) y el repo local (PC)** después de un merge en GitHub. Sin este Panel, el alumno no entiende por qué su `main` local sigue sin los cambios después de mergear el PR. Con el Panel, ve las dos cajas desincronizadas y el efecto exacto de `git pull`.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "DESPUÉS DEL MERGE — `MAIN` LOCAL QUEDA VIEJO"
- **Subtítulo** (gris oscuro, 20px): "Mergear el PR en GitHub NO actualiza tu PC. Necesitás `git pull` para sincronizar."

- **Sección 1 — Escena ANTES de `git pull` (mitad superior del Panel):**
  - Etiqueta arriba (rojo **_#e03131_** 22px): "ANTES de `git pull` — DESINCRONIZADO"
  - Dos cajas paralelas:

  **Caja izquierda — REMOTO (GitHub):**
  - Encabezado (azul **_#1971c2_** 18px): "🌐 REMOTO (GitHub)"
  - Icono pequeño de nube o de GitHub.
  - Lista de commits en main (orden cronológico, el más reciente arriba):
    - Commit M (verde) — "Merge pull request #1 — feat: agrega validación al form" (resaltado, fondo verde claro)
    - Commit B — "feat: agrega paleta de tokens CSS"
    - Commit A — "...commits viejos de C01-C03..."

  **Caja derecha — LOCAL (PC del alumno):**
  - Encabezado (naranja **_#f08c00_** 18px): "💻 LOCAL (PC del alumno)"
  - Icono pequeño de laptop.
  - Lista de commits en main:
    - Commit B — "feat: agrega paleta de tokens CSS"
    - Commit A — "...commits viejos de C01-C03..."
  - **FALTA el Commit M** — espacio vacío arriba con etiqueta roja "(NO existe acá todavía)"

  **Flecha roja gigante en el medio entre las dos cajas:**
  - Flecha bidireccional roja **_#e03131_** gruesa con etiqueta sobre la flecha: "DESINCRONIZADO — el merge sucedió en el servidor, no en tu PC"

- **Separador horizontal en el medio del Panel:**
  - Comando central destacado (monospace azul **_#1971c2_** 24px, fondo amarillo claro **_#ffec99_** con borde naranja): `git pull`
  - Etiqueta debajo (negro 14px): "Ejecuta esto desde tu rama main local"

- **Sección 2 — Escena DESPUÉS de `git pull` (mitad inferior del Panel):**
  - Etiqueta arriba (verde **_#2f9e44_** 22px): "DESPUÉS de `git pull` — SINCRONIZADO"
  - Dos cajas paralelas idénticas a las de arriba pero con el mismo contenido:

  **Caja izquierda — REMOTO (GitHub):** misma lista que en la escena 1.

  **Caja derecha — LOCAL (PC):** ahora con el Commit M presente arriba, resaltado en verde claro.

  **Flecha verde gigante en el medio:**
  - Etiqueta sobre la flecha: "SINCRONIZADO — ambos lados tienen el mismo historial"

- **Caja al pie — Equivalencia técnica (recuadro borde gris claro):**
  - Encabezado (negro 16px): "Equivalencia técnica:"
  - Texto (gris oscuro 14px): "`git pull` = `git fetch` + `git merge` en una sola operación. `git fetch` descarga los commits del remoto pero no los aplica; `git merge` los aplica a tu rama actual. Para el alumno de hoy, `git pull` alcanza."

- **Caja final destacada (recuadro borde rojo **_#e03131_** ancho completo):**
  - Encabezado (rojo **_#e03131_** 16px): "⚠ EL ERROR MÁS COMÚN DEL PRINCIPIANTE"
  - Texto (negro 14px): "Olvidar `git pull` después de mergear el PR. Si no lo hacés, tu `main` local queda viejo. El próximo `git checkout -b feature/proximo` parte de un main desactualizado, y al mergear ese feature va a haber conflictos. **Regla simple:** cada vez que mergeás un PR, hacés `git pull` inmediatamente."

**Anchor pedagógico:** las 2 escenas apiladas (antes/después) con las mismas dos cajas (remoto/local) y la flecha cambiando de roja a verde anclan visualmente lo que `git pull` hace y por qué es necesario. Sin este Panel, "sincronizar local con remoto" es lenguaje abstracto. Con el Panel, el alumno ve las dos máquinas desincronizadas y el comando que las iguala.

**Notas para Eric:** este Panel se proyecta antes del code-along 4.8 (`git checkout main` + `git pull`). El alumno ya hizo el merge en 4.6, así que está en la escena 1 del Panel (desincronizado). Después de ejecutar `git pull`, está en la escena 2. Es el Panel que más se siente "antes/después" del día.

---

### Panel 4.4 — Loop visual del GitFlow de 6 pasos (cheat sheet del curso)

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 4.4 (loop visual del GitFlow): diagrama circular de 6 pasos con flechas que vuelven al paso 1 después del 6. Cada paso con su comando exacto debajo y un ícono distintivo. Colores funcionales por paso. Etiqueta destacada al pie: "CHEAT SHEET PARA EL RESTO DEL CURSO".**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para 6 pasos en círculo + comandos exactos debajo de cada uno + advertencia de saltos)
- **Patrón canónico de referencia:** Patrón 7 (Loop circular de N pasos) + Patrón 4 (Algoritmo numerado con orden inviolable).
- **Concepto pedagógico que visualiza:** el **ciclo completo** del GitFlow de 6 pasos como cheat sheet visual que el alumno puede tener pegada al lado del monitor durante el resto del curso. Sin este Panel, los 6 pasos quedan dispersos en el guion. Con el Panel, el alumno los ve como un ciclo completo en una sola imagen.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "GITFLOW BÁSICO — EL CICLO COMPLETO DE 6 PASOS"
- **Subtítulo** (gris oscuro, 20px): "Lo que cualquier equipo profesional te va a pedir desde el primer día. Cheat sheet para el resto del curso."

- **Sección central — Diagrama circular de 6 pasos:**
  - 6 cajas grandes dispuestas en un círculo (12, 2, 4, 6, 8, 10 en el reloj), conectadas por flechas curvas en sentido horario.
  - Cada caja con un color funcional rotativo y contiene: numerador grande + título corto + comando exacto en monospace:

  **Paso 1 (12 del reloj, verde **_#2f9e44_**):**
  - Numerador "1"
  - Título: "Arrancar la rama"
  - Comando: `git checkout -b feature/x`
  - Sub-etiqueta: "Línea del tiempo paralela"

  **Paso 2 (2 del reloj, naranja **_#f08c00_**):**
  - Numerador "2"
  - Título: "Desarrollar el feature"
  - Comando: `<cambiá código>`
  - Sub-etiqueta: "Modifica archivos en VS Code"

  **Paso 3 (4 del reloj, azul **_#1971c2_**):**
  - Numerador "3"
  - Título: "Commitear dentro de la rama"
  - Comando: `git add + git commit`
  - Sub-etiqueta: "Commits atómicos con mensaje claro"

  **Paso 4 (6 del reloj, rojo **_#e03131_**):**
  - Numerador "4"
  - Título: "Subir la rama al remoto"
  - Comando: `git push -u origin feature/x`
  - Sub-etiqueta: "`-u` la primera vez para vincular"

  **Paso 5 (8 del reloj, naranja oscuro **_#e8590c_**):**
  - Numerador "5"
  - Título: "Abrir PR → review → merge"
  - Comando: `<botones de GitHub>`
  - Sub-etiqueta: "Integrar a main (revisión incluida)"

  **Paso 6 (10 del reloj, verde **_#2f9e44_**):**
  - Numerador "6"
  - Título: "Sincronizar main local"
  - Comando: `git checkout main && git pull`
  - Sub-etiqueta: "El error más común es saltarse este paso"

  - **Flecha grande curva** que sale del paso 6 y vuelve al paso 1, con etiqueta sobre la flecha: "Y vuelve a empezar — por cada feature nuevo"

- **Sección lateral — Paso 7 opcional (recuadro pequeño al lado del círculo, borde gris claro):**
  - Numerador "7 (opcional)"
  - Título: "Limpiar la rama mergeada"
  - Comando: `git branch -d feature/x`
  - Sub-etiqueta: "Borra la rama local ya mergeada"

- **Sección al pie — Por qué este orden NO es negociable (recuadro borde rojo **_#e03131_**):**
  - Encabezado (rojo **_#e03131_** 18px): "⚠ Por qué este orden NO es negociable"
  - 3 sub-bloques en paralelo:
    - "Si saltás el paso 1 → todos los commits van a main directo, rompés el aislamiento."
    - "Si saltás el paso 4 → el feature vive solo en tu PC, nadie del equipo lo ve."
    - "Si saltás el paso 6 → tu main local queda viejo, el próximo feature parte desactualizado, conflictos garantizados."

- **Etiqueta destacada al pie ancho completo (recuadro borde verde **_#2f9e44_** grueso):**
  - Texto centrado (verde **_#2f9e44_** 22px): "CHEAT SHEET PARA EL RESTO DEL CURSO"
  - Sub-texto (gris oscuro 14px): "Recortala. Pegala al lado del monitor. Vas a ejecutar este ciclo cientos de veces en tu carrera."

**Anchor pedagógico:** el diagrama circular con 6 colores funcionales convierte una lista de comandos en un ciclo visualmente memorable. La sección de "por qué no es negociable" al pie ancla las 3 reglas más típicas que el principiante rompe — el alumno entra al M5 sabiendo exactamente qué NO hacer.

**Notas para Eric:** este es el último Panel del día. Se proyecta al cierre del M4 como síntesis. Eric lo deja proyectado durante el M5 también — sirve como cheat sheet de referencia mientras el alumno verifica GitHub Pages y actualiza el README.

---

## Resumen — Mapeo Paneles ↔ Momentos ↔ Sub-puntos

| Panel | Momento | Sub-punto | Concepto principal |
|---|---|---|---|
| Panel 1.1 | M1 | 1.2 | Anatomía CSS Custom Property (declaración + uso) |
| Panel 1.2 | M1 | 1.3 | `:root` apunta a `<html>` + cascada del DOM |
| Panel 1.3 | M1 | 1.5 | Sistema de tokens — 4 categorías + nombrado semántico |
| Panel 1.4 | M1 | 1.7 | Anatomía `box-shadow` — 4 partes + comparativa sin/con sombra |
| Panel 1.5 | M1 | 1.8 | Anatomía `transition` — 3 partes + 0s vs 0.2s + regla base |
| Panel 1.6 | M1 | 1.9 | Microinteracción `:hover` + `translateY(-4px)` — base vs hover |
| Panel 2.1 | M2 | 2.2 | Líneas del tiempo paralelas — main + feature + merge |
| Panel 2.2 | M2 | 2.3 | Las 4 reglas de GitFlow básico + loop |
| Panel 3.1 | M3 | 3.1 | 3 capas de validación (nativa/JS/servidor) + 4 sub-capas internas |
| Panel 3.2 | M3 | 3.2 | Anatomía del form del lab con 6 atributos resaltados |
| Panel 3.3 | M3 | 3.3 | Anatomía `pattern="[0-9]{9}"` + 4 valores de prueba |
| Panel 3.4 | M3 | 3.4 | Comparativa `<select>` con `value=""` vs sin |
| Panel 4.1 | M4 | 4.3 | Anatomía de un PR — 3 zonas de GitHub |
| Panel 4.2 | M4 | 4.5 | Anatomía del diff de GitHub — verde/rojo/contexto + inline |
| Panel 4.3 | M4 | 4.7 | Desincronización local vs remota antes y después de `git pull` |
| Panel 4.4 | M4 | 4.9 | Loop visual del GitFlow de 6 pasos (cheat sheet) |

---

## Notas globales para Eric

- **Paleta canónica restringida** a 6 colores funcionales (`#1e1e1e`, `#e03131`, `#1971c2`, `#f08c00`, `#2f9e44`, `#e8590c`). Cada color significa lo mismo en TODOS los Paneles — verde = correcto/válido/activado, rojo = error/regla crítica/eliminado, azul = código/concepto técnico neutral, naranja = atención/categoría secundaria, naranja oscuro = paso 5 del GitFlow específicamente.
- **Todos los Paneles son Imagen-slide** porque la geometría (cajas con bordes precisos, flechas con anclajes específicos, bloques de código alineados) no se sostiene dibujada a mano en clase. Los Paneles se generan con IA + se importan al .excalidraw como placeholders.
- **El M5 no tiene Paneles** — el cierre (verificación de GitHub Pages, actualización del README, revisión de la rúbrica) se resuelve con la presentación de los criterios y la discusión final. Eric ya tiene resuelta esa parte aparte.
- **Patrón de uso pedagógico:** cada Panel se proyecta JUSTO ANTES del code-along correspondiente. El alumno ve el concepto en imagen, después lo aplica en código. Sin este orden, el alumno copia sin entender.
