# Prompts de Imagen — CLASE 03: CSS Grid (esencial, intermedio y grid-template-areas)

> **Estilo canónico:** **_mi-sistema/DESARROLLO DE SLIDES.md_**.
> **Origen:** generado a partir de **_GUIA EXCALIDRAW - CLASE 03.md_** (estado: Paneles en Borrador — pendiente validación de Eric).
> **Cómo usar:**
> 1. Copiar cada prompt completo (el bloque entre las líneas `### [IMG-XX]:` y el siguiente `---`).
> 2. Pegar en la herramienta de imagen IA de elección (ChatGPT con generación de imagen, Sora, Gemini, DALL-E, Midjourney, etc.).
> 3. Descargar la imagen generada.
> 4. Abrir **_CLASE 03.excalidraw_** en excalidraw.com (cuando esté generado), arrastrar la imagen sobre el placeholder con el mismo `[IMG-XX]` ID y ajustar al rectángulo punteado.
>
> **Importante:** el bloque "Estilo visual" al final de cada prompt es INAMOVIBLE. No reescribirlo ni parafrasearlo. Si lo modificás, el estilo deja de coincidir con el resto del material visual del bootcamp.

---

## Prompts IA (15 imágenes)

---

### [IMG-01]: Flex anidado vs Grid limpio — el mismo dashboard, dos caminos

- **Panel de origen:** Momento 1 — Panel 1.1
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Comparativa X vs Y + wireframe central de referencia
- **Usado en sub-punto:** 1.1 (Hook + motivación visual de por qué existe Grid)

**Prompt:**

> Infografía educativa minimalista sobre "Flex anidado vs Grid limpio: el mismo layout de dashboard, dos formas de llegar". Estilo diagrama técnico de libro de texto. Diseño con un wireframe central de referencia arriba y debajo dos columnas paralelas separadas por proximidad espacial (sin línea divisoria central).
>
> **Título superior centrado en negro:** "MISMO LAYOUT 2D — DOS FORMAS DE LLEGAR"
>
> **Subtítulo en gris oscuro debajo del título:** "Flex puede, pero anidando contenedores. Grid lo hace con uno solo."
>
> **Wireframe central de referencia (encima de las dos columnas, centrado):**
>
> - Encabezado pequeño en negro: "El resultado visual deseado (idéntico en ambos casos):"
> - Rectángulo grande con borde gris claro y fondo blanco que representa el viewport de un dashboard. Adentro 4 áreas: una banda superior horizontal en verde claro etiquetada "HEADER" ocupando todo el ancho; debajo, una banda izquierda vertical en azul claro etiquetada "SIDEBAR" (columna estrecha) y a su derecha una banda en gris muy claro etiquetada "MAIN" ocupando el resto del ancho; abajo del todo, una banda horizontal en naranja claro etiquetada "FOOTER" ocupando todo el ancho.
>
> **Columna izquierda — FLEX ANIDADO (lo que ya conocen, pero subóptimo):**
>
> - Encabezado en rojo: "CON FLEX: 3 NIVELES DE ANIDAMIENTO"
> - Bloque de código HTML en monospace azul con borde gris claro:
>   ```
>   <div class="outer-flex">         <!-- Flex column -->
>     <header>...</header>
>     <div class="middle-row">        <!-- Flex row -->
>       <nav>...</nav>
>       <main>...</main>
>     </div>
>     <footer>...</footer>
>   </div>
>   ```
> - Anotación en rojo con flecha apuntando a las dos líneas con `<div class="...">`: "2 divs envoltorios sin valor semántico, solo para el layout"
> - Etiqueta de cierre en rojo: "HTML contaminado por el layout"
>
> **Columna derecha — GRID DIRECTO (lo que viene en M4):**
>
> - Encabezado en verde: "CON GRID: UN SOLO PADRE"
> - Bloque de código HTML en monospace azul con borde gris claro:
>   ```
>   <body class="grid-layout">       <!-- display: grid -->
>     <header>...</header>
>     <nav>...</nav>
>     <main>...</main>
>     <footer>...</footer>
>   </body>
>   ```
> - Bloque de código CSS pequeño debajo en monospace azul:
>   ```
>   .grid-layout {
>     display: grid;
>     grid-template-areas:
>       "header header"
>       "nav    main"
>       "footer footer";
>   }
>   ```
> - Anotación en verde con flecha apuntando al bloque CSS: "El layout vive en el CSS, NO en el HTML"
> - Etiqueta de cierre en verde: "HTML semántico puro"
>
> **Nota inferior al ancho completo, en negro:** "Cuando el layout es 2D (filas Y columnas a la vez), Grid es la herramienta. Flex sigue brillando para layouts 1D — navs, footers, galerías en una sola dirección."
>
> **Código de colores funcional:**
> - Lado Flex (subóptimo): rojo `#e03131` para encabezado, flechas y etiqueta de cierre.
> - Lado Grid (limpio): verde `#2f9e44` para encabezado, flechas y etiqueta de cierre.
> - Bloques de código HTML/CSS: azul `#1971c2`.
> - Wireframe central: HEADER verde claro, SIDEBAR azul claro, MAIN gris muy claro, FOOTER naranja claro.
> - Textos descriptivos y nota inferior: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-02]: El modelo Grid — contenedor, ítems y propiedades de cada lado

- **Panel de origen:** Momento 2 — Panel 2.1
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Caja de definición del modelo + wireframe de jerarquía padre-hijo + tabla lateral de propiedades
- **Usado en sub-punto:** 2.2 (Introducción al modelo Grid antes de display: grid)

**Prompt:**

> Infografía educativa minimalista sobre "CSS Grid: el modelo y sus elementos". Estilo diagrama técnico de libro de texto. Diseño en dos mitades: izquierda diagrama visual del modelo, derecha tabla con las propiedades que viven en cada participante.
>
> **Título superior centrado en negro:** "CSS GRID — EL MODELO Y SUS ELEMENTOS"
>
> **Subtítulo en gris oscuro debajo del título:** "Layout bidimensional: filas Y columnas al mismo tiempo. Container y items, igual jerarquía que Flex."
>
> **Mitad izquierda — Diagrama del modelo:**
>
> - Rectángulo grande con borde azul grueso y fondo blanco, etiquetado en su borde superior como "Grid Container" en texto azul.
> - Adentro: una grilla de 3 columnas por 2 filas (3×2) con líneas punteadas en rojo claro marcando explícitamente las divisiones de columnas y filas.
> - 6 cajas hijas ocupando una celda cada una, numeradas 1 a 6, cada una con un color funcional distinto: caja 1 verde claro con borde verde, caja 2 naranja claro con borde naranja, caja 3 azul claro con borde azul, caja 4 rojo claro con borde rojo, caja 5 lila claro con borde lila, caja 6 amarillo claro con borde naranja oscuro.
> - Flecha verde apuntando a la caja 3 con etiqueta "Grid Items (hijos directos)".
> - Llave vertical a la izquierda del diagrama con etiqueta "filas" en gris oscuro.
> - Llave horizontal arriba del diagrama con etiqueta "columnas" en gris oscuro.
>
> **Mitad derecha — Tabla con dos columnas:**
>
> **Columna A — Propiedades del CONTENEDOR (encabezado azul):**
> - `display: grid` — activa el modelo
> - `grid-template-columns` — declara columnas
> - `grid-template-rows` — declara filas
> - `gap` — separa celdas
> - `grid-template-areas` — layout 2D con áreas nombradas (M4)
> - Nota debajo en gris oscuro: "Viven en el PADRE. Definen las reglas de la grilla."
>
> **Columna B — Propiedades del ÍTEM (encabezado verde):**
> - `grid-area` — asigna el ítem a un área nombrada (M4)
> - `grid-column-start/end` — posicionamiento manual
> - `grid-row-start/end` — posicionamiento manual
> - Nota debajo en gris oscuro: "Viven en cada HIJO. Controlan a ese ítem en particular."
>
> **Recuadro inferior al ancho completo (con borde gris claro) — comparativa con Flex:**
> - Encabezado en negro: "Recordando Flex (C02):"
> - Tres líneas: "Flex es 1D — una dirección a la vez (fila O columna)." / "Grid es 2D — filas Y columnas al mismo tiempo." / "Ambos: padre define reglas + hijos directos obedecen."
>
> **Nota inferior en negro:** "Hoy en M2 y M3 vamos a usar las propiedades del CONTENEDOR. En M4 introducimos las propiedades del ÍTEM con grid-area."
>
> **Código de colores funcional:**
> - Borde del Grid Container y encabezado de la columna A: azul `#1971c2`.
> - Líneas punteadas de la grilla interior: rojo claro.
> - Cajas numeradas: verde `#2f9e44`, naranja `#f08c00`, azul `#1971c2`, rojo `#e03131`, lila, naranja oscuro `#e8590c` (rotativos por número).
> - Encabezado de la columna B y flecha hacia "Grid Items": verde `#2f9e44`.
> - Textos descriptivos, notas y comparativa con Flex: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-03]: display: grid — el modelo se activa

- **Panel de origen:** Momento 2 — Panel 2.2
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón pedagógico:** Comparativa antes/después de dos contenedores idénticos
- **Usado en sub-punto:** 2.3 (display: grid en móvil)

**Prompt:**

> Infografía educativa minimalista sobre "display: grid — el modelo se activa". Estilo diagrama técnico de libro de texto. Diseño en dos columnas lado a lado, sin línea divisoria central, separadas por proximidad espacial.
>
> **Título superior centrado en negro:** "DISPLAY: GRID — EL MODELO SE ACTIVA"
>
> **Subtítulo en gris oscuro debajo del título:** "Por default: 1 columna que ocupa el 100% del ancho. Perfecto para móvil."
>
> **Columna izquierda — SIN display: grid (flujo normal):**
>
> - Encabezado pequeño en gris oscuro: "Sin Grid (block normal):"
> - Contenedor rectangular con borde gris claro y fondo blanco. Adentro 3 cajas apiladas verticalmente: Item 1 con relleno verde claro y borde verde, Item 2 con relleno naranja claro y borde naranja, Item 3 con relleno azul claro y borde azul. Cada caja ocupa todo el ancho del contenedor.
> - Etiqueta lateral en gris oscuro: "Cada hijo ocupa toda la fila — flujo block normal."
>
> **Columna derecha — CON display: grid:**
>
> - Encabezado pequeño en rojo: "Con `display: grid` (sin nada más):"
> - Contenedor idéntico al de la izquierda en tamaño y bordes, con las mismas 3 cajas verde / naranja / azul en la misma distribución visual (1 columna).
> - Anotación con flecha roja apuntando al contenedor: "Visualmente idéntico — PERO ahora es un grid container."
> - Líneas punteadas rojas finas a la izquierda del contenedor marcando las filas implícitas, etiquetadas 1, 2, 3.
>
> **Bloque de código CSS centrado debajo de las dos columnas, en monospace azul con borde gris claro:**
>
> ```
> .contenedor {
>   display: grid;
> }
> ```
>
> **Nota inferior en negro:** "Grid en móvil = una línea de CSS. El default es 1 columna — exactamente lo que se quiere en pantalla pequeña. Las media queries agregan columnas al crecer."
>
> **Código de colores funcional:**
> - Cajas internas: verde `#2f9e44`, naranja `#f08c00`, azul `#1971c2` (rotativos).
> - Encabezado de la columna derecha, líneas punteadas de filas implícitas y flecha de anotación: rojo `#e03131`.
> - Bloque de código CSS: azul `#1971c2`.
> - Bordes de contenedores: gris claro.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-04]: gap en Grid — separar celdas sin margin

- **Panel de origen:** Momento 2 — Panel 2.3
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón pedagógico:** Comparativa de dos grillas idénticas (gap 0 vs gap 24px)
- **Usado en sub-punto:** 2.4 (gap en Grid)

**Prompt:**

> Infografía educativa minimalista sobre "gap en Grid — separar celdas sin margin". Estilo diagrama técnico de libro de texto. Diseño en dos columnas lado a lado mostrando la misma grilla 3×2 sin gap y con gap.
>
> **Título superior centrado en negro:** "GAP EN GRID — SEPARA FILAS Y COLUMNAS"
>
> **Subtítulo en gris oscuro debajo del título:** "Reemplaza el viejo margin en hijos. Una sola propiedad, dos dimensiones."
>
> **Columna izquierda — gap: 0 (default):**
>
> - Encabezado pequeño en rojo: "Sin gap (default): celdas pegadas"
> - Grilla de 3 columnas por 2 filas con 6 cajas numeradas 1 a 6, todas pegadas entre sí sin espacio. Colores rotativos: 1 verde, 2 naranja, 3 azul, 4 rojo, 5 lila, 6 amarillo.
> - Etiqueta lateral en gris oscuro: "Las celdas se tocan — incómodo de leer."
>
> **Columna derecha — gap: 24px:**
>
> - Encabezado pequeño en verde: "Con `gap: 24px`: celdas separadas uniformemente"
> - Misma grilla 3×2 con las mismas 6 cajas y colores, pero con espacio uniforme de 24px entre filas y entre columnas.
> - 4 flechas rojas con anotación "24px" señalando los espacios entre celdas (2 horizontales, 2 verticales).
> - Etiqueta lateral en gris oscuro: "Espacio uniforme en ambas dimensiones — un solo valor."
>
> **Bloque de código CSS centrado debajo en monospace azul con borde gris claro:**
>
> ```
> .contenedor {
>   display: grid;
>   grid-template-columns: 1fr 1fr 1fr;
>   gap: 24px;
> }
> ```
>
> **Nota inferior en negro:** "También admite dos valores: gap: 8px 32px → 8px entre filas, 32px entre columnas. Sin margin en ningún hijo. El espacio lo decide el contenedor."
>
> **Código de colores funcional:**
> - Encabezado de la columna izquierda (gap 0): rojo `#e03131`.
> - Encabezado de la columna derecha (gap 24px): verde `#2f9e44`.
> - Cajas numeradas (1-6): verde, naranja, azul, rojo, lila, amarillo (colores rotativos).
> - Flechas de anotación "24px": rojo `#e03131`.
> - Bloque de código CSS: azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-05]: grid-template-columns — declarar columnas explícitas

- **Panel de origen:** Momento 2 — Panel 2.4
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Secuencia de estados (mismo contenedor con distintos valores)
- **Usado en sub-punto:** 2.5 (grid-template-columns)

**Prompt:**

> Infografía educativa minimalista sobre "grid-template-columns — declarar columnas explícitas". Estilo diagrama técnico de libro de texto. Diseño vertical con 3 estados apilados, cada uno con su contenedor a la izquierda y su bloque CSS con anotación a la derecha.
>
> **Título superior centrado en negro:** "GRID-TEMPLATE-COLUMNS — DECLARAR COLUMNAS EXPLÍCITAS"
>
> **Subtítulo en gris oscuro debajo del título:** "Un valor por cada columna. La cantidad de valores = la cantidad de columnas."
>
> **Estado 1 — `1fr 1fr 1fr`:**
>
> - Etiqueta en verde: "3 columnas iguales (cada una 1/3 del ancho)"
> - Contenedor con 3 cajas del mismo ancho: la primera verde, la segunda naranja, la tercera azul.
> - A la derecha del contenedor: bloque CSS pequeño en monospace azul `grid-template-columns: 1fr 1fr 1fr;` con anotación "3 valores → 3 columnas".
>
> **Estado 2 — `200px 1fr 1fr`:**
>
> - Etiqueta en naranja: "Primera fija de 200px, las otras dos comparten el resto"
> - Contenedor con 3 cajas: la primera (verde) más angosta, etiquetada "200px"; las otras dos (naranja y azul) más anchas y del mismo tamaño entre sí.
> - A la derecha: bloque CSS `grid-template-columns: 200px 1fr 1fr;` con anotación "1 valor fijo + 2 valores fr".
>
> **Estado 3 — `2fr 1fr`:**
>
> - Etiqueta en azul: "2 columnas en proporción 2:1"
> - Contenedor con 2 cajas: la primera (verde) ocupa 2/3 del ancho, la segunda (naranja) ocupa 1/3.
> - A la derecha: bloque CSS `grid-template-columns: 2fr 1fr;` con anotación "2 valores → 2 columnas, proporción 2:1".
>
> **Bloque CSS general debajo de los 3 estados, centrado, en monospace azul:**
>
> ```
> grid-template-columns: <valor-col1> <valor-col2> ... <valor-colN>;
> ```
>
> **Nota inferior en negro:** "Cada valor puede ser longitud (px, rem, %), unidad fr (siguiente concepto), o función (minmax(), repeat())."
>
> **Código de colores funcional:**
> - Etiqueta y borde acentuado del Estado 1: verde `#2f9e44`.
> - Etiqueta y borde acentuado del Estado 2: naranja `#f08c00`.
> - Etiqueta y borde acentuado del Estado 3: azul `#1971c2`.
> - Cajas dentro de los contenedores: verde, naranja, azul (rotativos en cada estado).
> - Bloques de código CSS: azul `#1971c2`.
> - Textos descriptivos y anotaciones: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-06]: Unidad fr — fracción del espacio disponible

- **Panel de origen:** Momento 2 — Panel 2.5
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Anatomía (barra base con dimensión etiquetada) + Secuencia de 3 estados
- **Usado en sub-punto:** 2.6 (Unidad fr)

**Prompt:**

> Infografía educativa minimalista sobre "Unidad fr — fracción del espacio disponible". Estilo diagrama técnico de libro de texto. Diseño vertical: barra de referencia arriba, 3 estados apilados debajo, recuadro de advertencia al pie.
>
> **Título superior centrado en negro:** "UNIDAD FR — FRACCIÓN DEL ESPACIO DISPONIBLE"
>
> **Subtítulo en gris oscuro debajo del título:** "1fr = 1 parte del espacio que queda libre. Se reparte siempre lo que sobra — nunca desborda."
>
> **Barra superior de referencia (centrada):**
>
> - Etiqueta arriba en negro: "Ancho del contenedor: 900px"
> - Barra horizontal en gris claro con borde definido, ocupando 900px de ancho referencial.
>
> **Estado 1 — `1fr 1fr` (dos iguales):**
>
> - Etiqueta en verde: "Dos columnas iguales — cada una mitad del espacio"
> - Barra de 900px dividida en 2 cajas iguales: la izquierda verde, la derecha naranja.
> - Cálculo arriba de las cajas en monospace: "450px | 450px" (proporción 1:1).
> - Anotación lateral en gris oscuro: "1+1 = 2 partes. Cada parte = 1/2 del espacio."
>
> **Estado 2 — `2fr 1fr` (proporción 2:1):**
>
> - Etiqueta en naranja: "Una columna doble, otra simple — proporción 2:1"
> - Barra de 900px dividida en 2 cajas asimétricas: la izquierda verde grande, la derecha naranja chica.
> - Cálculo arriba en monospace: "600px (2fr) | 300px (1fr)".
> - Anotación lateral: "2+1 = 3 partes. Caja grande = 2/3. Caja chica = 1/3."
>
> **Estado 3 — `200px 1fr` (mezcla fijo + fr):**
>
> - Etiqueta en azul: "Primera fija de 200px + segunda toma TODO el resto"
> - Barra de 900px dividida en 2 cajas: la primera (verde) de 200px exactos, la segunda (naranja) de 700px.
> - Cálculo arriba en monospace: "200px (fijo) | 700px (1fr toma todo lo que queda)".
> - Anotación lateral: "Primero se descuenta lo fijo. Después fr se reparte el resto. 1fr aquí ≠ 1fr arriba — depende de lo que sobre."
>
> **Recuadro inferior — diferencia con porcentajes, con borde rojo:**
>
> - Encabezado en rojo: "Cuidado con los porcentajes:"
> - Texto en negro: "Con gap: 16px y grid-template-columns: 50% 50% — la segunda columna desborda (50% + 50% + 16px > 100%). Con 1fr 1fr no — fr se reparte solo lo que queda libre después de los gaps."
>
> **Código de colores funcional:**
> - Etiqueta del Estado 1: verde `#2f9e44`.
> - Etiqueta del Estado 2: naranja `#f08c00`.
> - Etiqueta del Estado 3: azul `#1971c2`.
> - Cajas dentro de las barras: verde y naranja (rotativos).
> - Recuadro de advertencia y encabezado al pie: rojo `#e03131`.
> - Cálculos y textos en monospace: negro `#1e1e1e`.
> - Barras de referencia y bordes neutros: gris claro y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-07]: repeat(N, valor) — azúcar sintáctica

- **Panel de origen:** Momento 2 — Panel 2.6
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón pedagógico:** Comparativa de equivalencia (forma larga = atajo)
- **Usado en sub-punto:** 2.7 (repeat())

**Prompt:**

> Infografía educativa minimalista sobre "repeat() — azúcar sintáctica en Grid". Estilo diagrama técnico de libro de texto. Diseño en dos columnas con un signo "=" grande centrado, y un caso extremo debajo.
>
> **Título superior centrado en negro:** "REPEAT() — AZÚCAR SINTÁCTICA"
>
> **Subtítulo en gris oscuro debajo del título:** "Forma corta de escribir el mismo valor N veces. No cambia nada — solo el código se ve más limpio."
>
> **Columna izquierda — FORMA LARGA:**
>
> - Encabezado en gris oscuro: "Forma larga (4 valores):"
> - Bloque CSS en monospace azul:
>   ```
>   grid-template-columns:
>     1fr 1fr 1fr 1fr;
>   ```
> - Grilla debajo del CSS con 4 cajas iguales: 1 verde, 2 naranja, 3 azul, 4 rojo.
>
> **Centro — Signo de equivalencia:**
>
> - Símbolo "=" muy grande (negro, aproximadamente 80px) centrado entre las dos columnas.
> - Debajo del signo, etiqueta pequeña en gris oscuro: "exactamente lo mismo"
>
> **Columna derecha — ATAJO repeat():**
>
> - Encabezado en verde: "Atajo (repeat()):"
> - Bloque CSS en monospace azul:
>   ```
>   grid-template-columns:
>     repeat(4, 1fr);
>   ```
> - Grilla debajo idéntica a la de la izquierda: 4 cajas iguales con los mismos colores y posiciones.
>
> **Bloque inferior — caso extremo donde repeat() brilla:**
>
> - Encabezado en rojo: "Con 10 columnas — la diferencia se hace evidente:"
> - Dos bloques de código pequeños lado a lado:
>   - Forma larga (ilegible): `1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr`
>   - Atajo (limpio): `repeat(10, 1fr)`
> - Grilla angosta de 10 cajas en una fila debajo, mostrando que ambas producen el mismo resultado visual.
>
> **Nota inferior en negro:** "Azúcar sintáctica = forma más corta o legible que produce el mismo resultado. Lo van a ver en TODO el código real de Grid. Adelantamos el patrón ahora."
>
> **Código de colores funcional:**
> - Cajas de las grillas: verde `#2f9e44`, naranja `#f08c00`, azul `#1971c2`, rojo `#e03131` (rotativos).
> - Encabezado de la columna derecha: verde `#2f9e44`.
> - Encabezado del caso extremo: rojo `#e03131`.
> - Bloques de código CSS: azul `#1971c2`.
> - Signo "=" central: negro `#1e1e1e` grande.
> - Textos descriptivos: negro y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-08]: Cantidad fija vs cantidad variable — el problema en la vida real

- **Panel de origen:** Momento 3 — Panel 3.1
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Comparativa X vs Y con ejemplos del mundo real
- **Usado en sub-punto:** 3.1 (Hook pedagógico de M3 — motivación para auto-fit + minmax)

**Prompt:**

> Infografía educativa minimalista sobre "¿La cantidad de items es fija o variable? — el problema motivacional de Grid intermedio". Estilo diagrama técnico de libro de texto. Diseño en dos columnas paralelas separadas por proximidad espacial (sin línea divisoria), cada una con un wireframe ejemplo, una lista de escenarios reales y una etiqueta de cierre.
>
> **Título superior centrado en negro:** "¿LA CANTIDAD DE ITEMS ES FIJA O VARIABLE?"
>
> **Subtítulo en gris oscuro debajo del título:** "Esa pregunta decide qué herramienta de Grid responsive usás."
>
> **Columna izquierda — CANTIDAD FIJA (verde — la conocen):**
>
> - Encabezado en verde grande: "CANTIDAD FIJA"
> - Sub-etiqueta en gris oscuro: "El dev sabe cuántos van a ser. Punto."
> - Wireframe: 4 cards rectangulares verde claro alineadas horizontalmente, etiquetadas "Free", "Starter", "Pro", "Enterprise". Mismas dimensiones, dispuestas en una sola fila.
> - Lista debajo del wireframe, en negro:
>   - "Planes de un producto (4 fijos)"
>   - "Categorías de un menú (5 fijas)"
>   - "Pasos de un onboarding (3 fijos)"
>   - "Pestañas de un dashboard (4 fijas)"
> - Etiqueta de cierre en verde, dentro de un recuadro suave: "Solución: media queries explícitas. grid-template-columns: repeat(4, 1fr) en desktop. Cada breakpoint controlado a mano."
>
> **Columna derecha — CANTIDAD VARIABLE (rojo — el problema):**
>
> - Encabezado en rojo grande: "CANTIDAD VARIABLE"
> - Sub-etiqueta en gris oscuro: "El dev NO controla cuántos van a ser. Cambia con el contenido."
> - Wireframe simplificado de una tienda online: 3 miniaturas lado a lado mostrando estados distintos de la misma página:
>   - "Búsqueda 1: 47 productos" — grid denso con muchos cuadritos pequeños.
>   - "Filtro aplicado: 12 productos" — grid con menos cuadritos, más vacío.
>   - "Otra búsqueda: 200+ productos" — grid extenso con scroll insinuado.
> - Lista debajo del wireframe, en negro:
>   - "Productos en una tienda online (cambian con filtros y stock)"
>   - "Posts en una red social (los que el usuario sube)"
>   - "Resultados de búsqueda en YouTube / Google"
>   - "Items que vienen de una base de datos o API"
>   - "Logos de marcas en una página corporativa (hoy 6, mañana 15)"
> - Etiqueta de cierre en rojo, dentro de un recuadro suave: "Problema: media queries explícitas NO sirven — no podés anticipar todos los casos. Solución: la próxima clase del momento (auto-fit + minmax)."
>
> **Nota inferior al ancho completo, en recuadro neutro con borde gris claro:**
>
> - Texto principal en negro: "Regla: la pregunta que te tenés que hacer en cada layout responsive de tu carrera es '¿quién controla la cantidad de items?'. Si lo controla el dev (cantidad fija), media queries. Si lo controla el contenido (cantidad variable), auto-fit + minmax."
> - Texto secundario en gris oscuro: "En el lab de hoy aplicamos esto a logos de marcas. Pero la misma regla sirve para cualquier grid que cargue contenido dinámico."
>
> **Código de colores funcional:**
> - Columna izquierda (cantidad fija): verde `#2f9e44` para encabezado, wireframe y etiqueta de cierre.
> - Columna derecha (cantidad variable): rojo `#e03131` para encabezado, anotaciones y etiqueta de cierre.
> - Wireframes y cuadritos de producto: gris claro con acentos verdes y rojos según la columna.
> - Recuadro de la regla inferior: borde gris claro, texto negro `#1e1e1e`.
> - Textos descriptivos: negro y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-09]: auto-fit — el grid decide cuántas columnas caben (pero rígidas)

- **Panel de origen:** Momento 3 — Panel 3.2
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Secuencia de estados (mismo CSS en 3 viewports)
- **Usado en sub-punto:** 3.2 (auto-fit concepto técnico)

**Prompt:**

> Infografía educativa minimalista sobre "auto-fit — el grid decide cuántas columnas caben (pero rígidas)". Estilo diagrama técnico de libro de texto. Diseño vertical con 3 viewports apilados mostrando el mismo CSS en distintos anchos de contenedor.
>
> **Título superior centrado en negro:** "AUTO-FIT — EL GRID DECIDE CUÁNTAS COLUMNAS CABEN"
>
> **Subtítulo en gris oscuro debajo del título:** "Sin minmax, las columnas son rígidas. Mirar el espacio vacío al final de cada fila."
>
> **Estado 1 — Contenedor de 1200px:**
>
> - Etiqueta arriba en negro: "Ancho del contenedor: 1200px"
> - Rectángulo contenedor ancho con borde gris claro grueso.
> - Adentro: 6 cajas de exactamente 200px cada una, en una sola fila, con colores rotativos (verde, naranja, azul, rojo, lila, amarillo).
> - Franja de espacio vacío al final de la fila marcada en rojo claro con etiqueta "espacio vacío".
> - Anotación lateral: "Caben 6 columnas de 200px. Las cajas NO se estiran."
>
> **Estado 2 — Contenedor de 800px:**
>
> - Etiqueta arriba: "Ancho del contenedor: 800px"
> - Rectángulo más estrecho.
> - Adentro: 4 cajas de 200px en una fila + franja de espacio vacío al final marcada en rojo claro.
> - Anotación lateral: "Caben 4. Sobran ~200px de espacio vacío."
>
> **Estado 3 — Contenedor de 400px:**
>
> - Etiqueta arriba: "Ancho del contenedor: 400px"
> - Rectángulo angosto.
> - Adentro: 2 cajas de 200px en una fila — sin espacio vacío visible (caben justo).
> - Anotación lateral: "Caben 2 (2 × 200 = 400)."
>
> **Bloque CSS de referencia centrado debajo de los 3 estados, en monospace azul:**
>
> ```
> grid-template-columns: repeat(auto-fit, 200px);
> ```
>
> **Recuadro inferior con borde rojo claro:**
>
> - Texto en negro: "Limitación: sin minmax, las columnas son rígidas de 200px. El sobrante queda vacío. Para que se estiren al ancho disponible, necesitamos minmax (siguiente Panel)."
>
> **Código de colores funcional:**
> - Cajas dentro de los viewports: verde `#2f9e44`, naranja `#f08c00`, azul `#1971c2`, rojo `#e03131`, lila, amarillo (rotativos).
> - Franjas de "espacio vacío" y recuadro inferior de limitación: rojo claro con borde rojo `#e03131`.
> - Bloque de código CSS: azul `#1971c2`.
> - Bordes de contenedores: gris claro.
> - Textos descriptivos y anotaciones: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-10]: minmax(min, max) — un rango de tamaño para la columna

- **Panel de origen:** Momento 3 — Panel 3.3
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Anatomía de sintaxis con flechas + Secuencia de estados en 2 casos
- **Usado en sub-punto:** 3.3 (minmax concepto)

**Prompt:**

> Infografía educativa minimalista sobre "minmax(min, max) — un rango de tamaño para la columna". Estilo diagrama técnico de libro de texto. Diseño vertical: anatomía arriba con flechas hacia las etiquetas, dos casos apilados debajo cada uno con 3 viewports.
>
> **Título superior centrado en negro:** "MINMAX(MIN, MAX) — UN RANGO DE TAMAÑO PARA LA COLUMNA"
>
> **Subtítulo en gris oscuro debajo del título:** "Un mínimo que nunca baja, un máximo que nunca sube. La columna se acomoda en el medio."
>
> **Anatomía de la sintaxis (arriba, en bloque destacado):**
>
> - Bloque de código central grande en monospace azul, fondo blanco: `minmax(150px, 1fr)`
> - Flecha verde desde `150px` hacia una etiqueta a la izquierda: "MÍNIMO — la columna nunca baja de esto"
> - Flecha naranja desde `1fr` hacia una etiqueta a la derecha: "MÁXIMO — la columna nunca pasa de esto"
>
> **Caso 1 — `minmax(150px, 1fr)` (la combinación que se usa con auto-fit):**
>
> - Etiqueta en verde: "Caso 1: minmax(150px, 1fr) → se estira al ancho disponible, mínimo 150px"
> - Tres viewports lado a lado:
>   - Ancho 800px: caja verde estirada a 800px (todo el ancho, porque 1fr).
>   - Ancho 400px: caja verde estirada a 400px (todo el ancho).
>   - Ancho 100px: caja verde de 150px (mínimo, genera scroll horizontal visible).
> - Anotación: "1fr = se estira hasta llenar. 150px = nunca baja."
>
> **Caso 2 — `minmax(100px, 300px)` (rango cerrado en ambos extremos):**
>
> - Etiqueta en naranja: "Caso 2: minmax(100px, 300px) → rango cerrado, nunca pasa de 300px"
> - Tres viewports lado a lado:
>   - Ancho 1200px: caja naranja de 300px (no se estira más, sobra espacio).
>   - Ancho 400px: caja naranja de 300px (el máximo aplica).
>   - Ancho 80px: caja naranja de 100px (el mínimo aplica, scroll horizontal).
> - Anotación: "300px = tope absoluto. Aunque sobre espacio, NO se estira más."
>
> **Nota inferior en negro:** "La combinación que se usa con auto-fit es minmax(150px, 1fr) — mínimo en píxeles para que las columnas no se aplasten, máximo en 1fr para que se estiren cuando sobra espacio."
>
> **Código de colores funcional:**
> - Flecha y etiqueta del MÍNIMO: verde `#2f9e44`.
> - Flecha y etiqueta del MÁXIMO: naranja `#f08c00`.
> - Etiqueta y caja del Caso 1: verde `#2f9e44`.
> - Etiqueta y caja del Caso 2: naranja `#f08c00`.
> - Bloque de código central: azul `#1971c2`.
> - Bordes de viewports: gris claro.
> - Textos descriptivos y anotaciones: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-11]: repeat(auto-fit, minmax(150px, 1fr)) — el patrón canónico

- **Panel de origen:** Momento 3 — Panel 3.4
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Anatomía de sintaxis con flechas + Secuencia de estados en 3 viewports
- **Usado en sub-punto:** 3.4 (Patrón canónico de Grid intermedio)

**Prompt:**

> Infografía educativa minimalista sobre "repeat(auto-fit, minmax(150px, 1fr)) — el patrón canónico de Grid intermedio". Estilo diagrama técnico de libro de texto. Diseño vertical: anatomía de la fórmula arriba con flechas anotadas, comportamiento en 3 viewports debajo.
>
> **Título superior centrado en negro:** "EL PATRÓN CANÓNICO DE GRID INTERMEDIO"
>
> **Subtítulo en gris oscuro debajo del título:** "Cero media queries. La grilla se adapta sola al ancho disponible."
>
> **Sección 1 — Anatomía de la fórmula (arriba, en bloque destacado):**
>
> - Bloque de código grande en monospace azul:
>   ```
>   grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
>   ```
> - Tres flechas con anotaciones, cada una de su color funcional, partiendo del término correspondiente del código:
>   - Flecha verde desde `auto-fit` → etiqueta "tantas columnas como quepan"
>   - Flecha naranja desde `150px` → etiqueta "mínimo de cada columna"
>   - Flecha azul desde `1fr` → etiqueta "se estira al ancho disponible"
>
> **Sección 2 — Comportamiento en 3 viewports apilados verticalmente:**
>
> **Viewport 1200px (desktop):**
>
> - Etiqueta arriba en negro: "Pantalla ancha — caben 6 columnas estiradas"
> - Contenedor con 6 cajas numeradas 1 a 6 con colores funcionales rotativos (verde, naranja, azul, rojo, lila, amarillo), todas del mismo ancho, llenando el contenedor sin huecos.
>
> **Viewport 700px (tablet):**
>
> - Etiqueta arriba: "Pantalla media — caben 4 columnas estiradas"
> - Contenedor más estrecho con las MISMAS 6 cajas, ahora en 2 filas: 4 arriba estiradas al ancho, 2 abajo también estiradas al ancho disponible.
>
> **Viewport 400px (móvil):**
>
> - Etiqueta arriba: "Pantalla angosta — caben 2 columnas estiradas"
> - Contenedor angosto con las MISMAS 6 cajas, ahora en 3 filas de 2. Todas se estiran al ancho.
>
> **Nota inferior al ancho completo, en recuadro verde claro:**
>
> - "Cero @media en el CSS. La fórmula maneja TODOS los anchos automáticamente. Esta es la diferencia con el caso de los planes (M2) — ahí los breakpoints son explícitos porque la cantidad es fija."
>
> **Código de colores funcional:**
> - Flecha y etiqueta de auto-fit: verde `#2f9e44`.
> - Flecha y etiqueta de 150px: naranja `#f08c00`.
> - Flecha y etiqueta de 1fr: azul `#1971c2`.
> - Cajas numeradas dentro de los viewports: verde, naranja, azul, rojo, lila, amarillo (rotativos).
> - Bloque de código central: azul `#1971c2`.
> - Recuadro inferior: verde claro con borde verde `#2f9e44`.
> - Bordes de viewports: gris claro.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-12]: grid-template-areas — dibujar el layout con texto

- **Panel de origen:** Momento 4 — Panel 4.1
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Anatomía de sintaxis + Wireframe del layout resultante con flechas conectoras
- **Usado en sub-punto:** 4.2 (grid-template-areas concepto)

**Prompt:**

> Infografía educativa minimalista sobre "grid-template-areas — dibujar el layout con texto". Estilo diagrama técnico de libro de texto. Diseño en dos columnas paralelas conectadas por flechas funcionales que cruzan el centro del Panel.
>
> **Título superior centrado en negro:** "GRID-TEMPLATE-AREAS — DIBUJAR EL LAYOUT CON TEXTO"
>
> **Subtítulo en gris oscuro debajo del título:** "Cada string = una fila. Cada palabra = una columna. El nombre = el área."
>
> **Columna izquierda — EL CSS (sintaxis del grid-template-areas):**
>
> - Encabezado en azul: "El CSS:"
> - Bloque de código en monospace azul, fondo blanco con borde gris claro:
>   ```
>   .faq-layout {
>     display: grid;
>     grid-template-areas:
>       "header header"
>       "nav    main"
>       "footer footer";
>     grid-template-columns: 200px 1fr;
>   }
>   ```
> - Llaves laterales en gris oscuro anotando cada fila del grid-template-areas:
>   - Fila 1: "2 columnas, ambas 'header'"
>   - Fila 2: "'nav' a la izquierda + 'main' a la derecha"
>   - Fila 3: "2 columnas, ambas 'footer'"
>
> **Columna derecha — EL LAYOUT VISUAL (wireframe resultante):**
>
> - Encabezado en verde: "El resultado:"
> - Wireframe en forma de "T invertida":
>   - Banda superior en verde claro con borde verde etiquetada "HEADER", ocupando las 2 columnas.
>   - Fila central dividida: banda izquierda en azul claro con borde azul etiquetada "NAV" (200px de ancho, columna estrecha) + banda derecha en naranja claro con borde naranja etiquetada "MAIN" (ocupando el resto del ancho).
>   - Banda inferior en rojo claro con borde rojo etiquetada "FOOTER", ocupando las 2 columnas.
>
> **Flechas conectoras (cruzando el centro del Panel entre las dos columnas):**
>
> - Flecha verde desde la palabra `header` en el CSS → al área HEADER del wireframe.
> - Flecha azul desde `nav` → al área NAV.
> - Flecha naranja desde `main` → al área MAIN.
> - Flecha roja desde `footer` → al área FOOTER.
>
> **Regla destacada al pie en recuadro con borde rojo:**
>
> - "Regla obligatoria: cada área debe formar un RECTÁNGULO. No se pueden hacer formas en L o T. Si una palabra aparece en 2 celdas no adyacentes, el CSS es inválido y el navegador ignora la regla."
>
> **Nota inferior en negro:** "Para dejar una celda VACÍA, usar `.` (un punto solo) en lugar de un nombre de área. Ejemplo: `\". header .\"` → primera y tercera celda vacías, segunda con área 'header'."
>
> **Código de colores funcional:**
> - Bloque CSS y encabezado de la columna izquierda: azul `#1971c2`.
> - Encabezado de la columna derecha: verde `#2f9e44`.
> - Área HEADER y flecha asociada: verde `#2f9e44`.
> - Área NAV y flecha asociada: azul `#1971c2`.
> - Área MAIN y flecha asociada: naranja `#f08c00`.
> - Área FOOTER y flecha asociada: rojo `#e03131`.
> - Recuadro de la regla obligatoria al pie: borde rojo `#e03131`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-13]: grid-area — asignar cada elemento a su área nombrada

- **Panel de origen:** Momento 4 — Panel 4.2
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Anatomía de 3 columnas (HTML / wireframe / CSS) conectadas por flechas funcionales
- **Usado en sub-punto:** 4.3 (grid-area + poder declarativo)

**Prompt:**

> Infografía educativa minimalista sobre "grid-area — asignar cada elemento a su área nombrada". Estilo diagrama técnico de libro de texto. Diseño en 3 columnas paralelas conectadas por flechas funcionales que muestran las asignaciones 1-a-1.
>
> **Título superior centrado en negro:** "GRID-AREA — ASIGNAR CADA ELEMENTO A SU ÁREA"
>
> **Subtítulo en gris oscuro debajo del título:** "El padre define las áreas. El hijo dice a cuál pertenece. El orden visual lo decide el padre — no el HTML."
>
> **Columna izquierda — ELEMENTOS HTML (en el orden del DOM):**
>
> - Encabezado en gris oscuro: "HTML (estructura del documento)"
> - Lista vertical de 4 etiquetas en orden, cada una en su recuadro con borde gris claro, en monospace azul:
>   1. `<header>`
>   2. `<nav>`
>   3. `<main>`
>   4. `<footer>`
>
> **Columna central — EL GRID CON ÁREAS NOMBRADAS (wireframe T invertida):**
>
> - Encabezado en gris oscuro: "El grid (definido por el padre)"
> - Mismo wireframe en T invertida del prompt anterior, con las 4 áreas coloreadas y etiquetadas: HEADER (verde claro arriba ocupando 2 columnas), NAV (azul claro a la izquierda en la fila del medio), MAIN (naranja claro a la derecha en la fila del medio), FOOTER (rojo claro abajo ocupando 2 columnas).
>
> **Columna derecha — REGLAS CSS DE GRID-AREA:**
>
> - Encabezado en verde: "CSS (asignación de cada hijo)"
> - 4 reglas CSS, una debajo de la otra, en monospace azul:
>   ```
>   .faq-layout header { grid-area: header; }
>   .faq-nav           { grid-area: nav; }
>   .faq-main          { grid-area: main; }
>   .faq-layout footer { grid-area: footer; }
>   ```
>
> **Flechas conectoras cruzando las 3 columnas (una por elemento):**
>
> - Flecha verde: `<header>` (HTML) → área HEADER (wireframe) → regla `.faq-layout header { grid-area: header }`.
> - Flecha azul: `<nav class="faq-nav">` → área NAV → regla `.faq-nav { grid-area: nav }`.
> - Flecha naranja: `<main class="faq-main">` → área MAIN → regla `.faq-main { grid-area: main }`.
> - Flecha roja: `<footer>` → área FOOTER → regla `.faq-layout footer { grid-area: footer }`.
>
> **Caja destacada al pie en amarillo claro con borde naranja:**
>
> - Encabezado en naranja: "El poder declarativo de Grid"
> - Texto en negro: "El orden visual en pantalla NO depende del orden del HTML. Si en el HTML el <footer> está PRIMERO, va a aparecer ABAJO en pantalla mientras el padre diga que footer va en la última fila. Esto es lo que permite reorganizar el layout entre breakpoints sin tocar el HTML."
>
> **Código de colores funcional:**
> - Encabezado de la columna derecha: verde `#2f9e44`.
> - Área HEADER y flecha asociada: verde `#2f9e44`.
> - Área NAV y flecha asociada: azul `#1971c2`.
> - Área MAIN y flecha asociada: naranja `#f08c00`.
> - Área FOOTER y flecha asociada: rojo `#e03131`.
> - Bloques de código HTML y CSS: azul `#1971c2`.
> - Caja del poder declarativo al pie: amarillo claro con borde naranja `#f08c00` y encabezado en naranja.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-14]: Reorganización entre breakpoints — redibujar el mapa

- **Panel de origen:** Momento 4 — Panel 4.3
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Comparativa de 2 estados + Anatomía del CSS con @media que conecta los estados
- **Usado en sub-punto:** 4.4 (Reorganización mobile-first declarativa)

**Prompt:**

> Infografía educativa minimalista sobre "Reorganización entre breakpoints — redibujar el mapa". Estilo diagrama técnico de libro de texto. Diseño vertical: el CSS con los dos breakpoints arriba (ancho completo), los dos resultados visuales lado a lado debajo conectados por una flecha curva central.
>
> **Título superior centrado en negro:** "REORGANIZACIÓN ENTRE BREAKPOINTS — REDIBUJAR EL MAPA"
>
> **Subtítulo en gris oscuro debajo del título:** "Mismo HTML. Mismo grid-area de cada hijo. Lo único que cambia entre móvil y desktop son las strings."
>
> **Sección 1 — El CSS con los dos breakpoints (arriba, ancho completo):**
>
> - Bloque de código en monospace azul con borde gris claro:
>   ```
>   /* MÓVIL (base) */
>   .faq-layout {
>     display: grid;
>     grid-template-areas:
>       "header"
>       "nav"
>       "main"
>       "footer";
>     grid-template-columns: 1fr;
>   }
>
>   /* TABLET+ (≥640px) */
>   @media (min-width: 640px) {
>     .faq-layout {
>       grid-template-areas:
>         "header header"
>         "nav    main"
>         "footer footer";
>       grid-template-columns: 200px 1fr;
>     }
>   }
>   ```
> - Anotación lateral en rojo: "Lo único que cambia entre los dos breakpoints son las strings del grid-template-areas y la cantidad de columnas. Nada más."
>
> **Sección 2 — Los dos resultados visuales lado a lado, debajo del CSS:**
>
> **Estado A — Móvil (<640px):**
>
> - Etiqueta arriba en negro: "Móvil (~400px): apilado en 1 columna"
> - Wireframe estrecho con 4 áreas apiladas verticalmente:
>   - HEADER en verde claro
>   - NAV en azul claro
>   - MAIN en naranja claro
>   - FOOTER en rojo claro
>
> **Estado B — Tablet+ (≥640px):**
>
> - Etiqueta arriba en negro: "Tablet+ (≥640px): T invertida con sidebar"
> - Wireframe ancho con la T invertida:
>   - HEADER en verde claro ocupando las 2 columnas arriba.
>   - NAV en azul claro (sidebar estrecho de 200px) + MAIN en naranja claro (resto del ancho) en la fila del medio.
>   - FOOTER en rojo claro ocupando las 2 columnas abajo.
>
> **Flecha curva azul gruesa en el centro entre los 2 estados:** "Al cruzar 640px, el navegador reorganiza solo →"
>
> **Nota inferior al ancho completo, en recuadro verde claro:**
>
> - Encabezado en verde: "Esto es lo que Flex NO puede hacer limpio"
> - Texto en negro: "Con Flex, reorganizar el layout entre breakpoints requeriría cambiar la estructura del HTML, agregar clases nuevas o calcular flex-basis a mano para cada elemento. Con grid-template-areas, REDEFINÍS 4 STRINGS y listo. El layout es declarativo."
>
> **Código de colores funcional:**
> - Bloque CSS arriba: azul `#1971c2`.
> - Anotación lateral del CSS: rojo `#e03131`.
> - Área HEADER en los dos wireframes: verde claro con borde verde `#2f9e44`.
> - Área NAV: azul claro con borde azul `#1971c2`.
> - Área MAIN: naranja claro con borde naranja `#f08c00`.
> - Área FOOTER: rojo claro con borde rojo `#e03131`.
> - Flecha curva central entre estados: azul `#1971c2`.
> - Recuadro inferior: verde claro con borde verde `#2f9e44` y encabezado en verde.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-15]: Grid o Flex — 4 situaciones cotidianas

- **Panel de origen:** Momento 5 — Panel 5.1
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9)
- **Patrón pedagógico:** Algoritmo numerado (4 escenarios reconocibles con mockups fieles a productos reales)
- **Usado en sub-punto:** 5.1 (Cierre interactivo "Grid o Flex — ¿cuál usás?")

**Prompt:**

> Infografía educativa interactiva sobre "Grid o Flex — ¿cuál usás?". Estilo diagrama técnico de libro de texto. Diseño con título grande arriba y una grilla de 4 cajas (2 columnas × 2 filas), cada caja con un mockup ALTAMENTE RECONOCIBLE de un producto real adentro.
>
> **REGLA DE ORO DE ESTE PANEL — LEER CON ATENCIÓN:** el alumno NO maneja jerga técnica ("modal", "toolbar", "sidebar", "navbar") porque recién está empezando. Cada caja tiene que comunicar la situación ÚNICAMENTE CON LA IMAGEN — no depende de etiquetas técnicas. Es OBLIGATORIO usar logos reales reconocibles, colores de marca exactos y mockups lo más fieles posibles a los productos reales (Spotify, Mercado Libre, Gmail) para que el alumno reconozca de un vistazo de qué se trata. Los títulos en castellano simple refuerzan la imagen, no la reemplazan.
>
> **Título superior centrado en negro grande:** "GRID O FLEX — ¿CUÁL USÁS?"
>
> **Subtítulo en gris oscuro:** "Mirá la imagen y respondé en el chat — después validamos juntos."
>
> **Grid de 4 escenarios numerados (2 columnas × 2 filas, cada uno en su caja):**
>
> **Caja 1 — Numerador "01" grande arriba en rojo:**
>
> - Título corto en castellano simple, en negro: "Cuadro de confirmación"
> - Mockup principal: rectángulo blanco con sombra suave y esquinas redondeadas, sobre fondo apenas grisado, representando un diálogo emergente. Arriba dentro del cuadro: un ícono de papelera roja. Debajo el texto en negrita grande: "¿Eliminar archivo?". Más abajo en gris pequeño: "Esta acción no se puede deshacer." Abajo del cuadro, 2 botones bien visibles alineados al borde derecho con un gap entre ellos: "Cancelar" (rectángulo gris claro con texto oscuro) a la izquierda + "Aceptar" (rectángulo azul `#1971c2` con texto blanco) a la derecha.
> - Flecha pequeña apuntando a los 2 botones con anotación: "estos 2?"
>
> **Caja 2 — Numerador "02" grande arriba en azul:**
>
> - Título corto: "Pantalla de planes de Spotify"
> - Mockup principal con LOGO DE SPOTIFY REAL Y RECONOCIBLE: en la parte superior, el logo oficial de Spotify (círculo verde `#1ed760` con las 3 líneas curvas blancas características — fundamental que se vea como el logo real de Spotify, no una aproximación genérica) acompañado del texto "Premium" al lado. Debajo del header, 3 cards lado a lado, todas visualmente idénticas en tamaño y estilo, cada una con: nombre del plan grande arriba ("Free" / "Premium" / "Familiar"), precio simulado ("$0 / mes", "$5.99 / mes", "$8.99 / mes"), 3-4 líneas grises debajo simulando features, y un botón verde abajo ("Empezar" / "Suscribirse" / "Probar gratis").
> - Anotación pequeña al pie: "Siempre 3 planes — nunca cambia"
>
> **Caja 3 — Numerador "03" grande arriba en verde:**
>
> - Título corto: "Catálogo de productos — Mercado Libre"
> - Mockup principal con LOGO DE MERCADO LIBRE REAL Y RECONOCIBLE: en la parte superior, el logo oficial de Mercado Libre (rectángulo amarillo `#fff159` con el ícono del apretón de manos en azul — fundamental que se vea como el logo real de Mercado Libre, no una aproximación genérica) acompañado de una barra de búsqueda simulada con texto "celular" adentro. Debajo del header, una grilla densa de aproximadamente 9 cards de producto pequeñas en formato 3×3: cada card con un cuadrito gris arriba (representando la imagen del producto), un precio en verde abajo (por ejemplo "$ 1.299"), una línea de título corta y la leyenda "Llega gratis". Las cards uniformes en tamaño.
> - Anotación pequeña: "Hoy 24 productos · mañana 200 · pasado mañana 5"
>
> **Caja 4 — Numerador "04" grande arriba en naranja:**
>
> - Título corto: "Pantalla de Gmail"
> - Mockup principal con LOGO DE GMAIL REAL Y RECONOCIBLE: en la barra superior, el logo oficial de Gmail (la M de colores rojo / amarillo / verde / azul característica — fundamental que se vea como el logo real de Gmail, no una aproximación genérica) acompañado de una barra de búsqueda al medio y un avatar circular a la derecha. A la izquierda, una columna angosta con: botón rojo grande "Redactar" arriba, después una lista vertical de carpetas ("Recibidos 24", "Destacados", "Enviados", "Borradores"). Al centro-derecha, área grande con lista de correos (4-5 filas, cada una con avatar circular pequeño + nombre del remitente + asunto + fecha a la derecha). Las 4 zonas (barra arriba, columna izquierda, lista al centro, ancho completo abajo) visualmente delimitadas para que el alumno perciba el layout 2D.
> - Anotación pequeña apuntando a las zonas: "4 zonas, todas visibles al mismo tiempo"
>
> **Nota inferior al ancho completo en gris oscuro:** "Mirá la imagen, no hay respuesta mala — razonen con criterio. Después de cada caja, validamos juntos."
>
> **Código de colores funcional:**
> - Numerador de la Caja 1: rojo `#e03131`.
> - Numerador de la Caja 2: azul `#1971c2`.
> - Numerador de la Caja 3: verde `#2f9e44`.
> - Numerador de la Caja 4: naranja `#f08c00`.
> - Logo de Spotify (Caja 2): verde Spotify `#1ed760` exacto con líneas curvas blancas.
> - Logo de Mercado Libre (Caja 3): amarillo `#fff159` exacto con apretón de manos azul.
> - Logo de Gmail (Caja 4): los 4 colores característicos rojo/amarillo/verde/azul de Google.
> - Botón "Aceptar" del cuadro de confirmación (Caja 1): azul `#1971c2`.
> - Textos descriptivos y títulos de las cajas: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

## Capturas manuales

> Sin capturas manuales en esta clase. Todas las imágenes se generan con IA.

---

## Tabla resumen — mapeo IMG → Panel → Sub-punto del guion

| ID | Panel | Momento | Sub-punto | Dimensiones |
|---|---|---|---|---|
| `[IMG-01]` | Panel 1.1 — Flex anidado vs Grid limpio | M1 | 1.1 | 1400×1050 |
| `[IMG-02]` | Panel 2.1 — Modelo Grid (contenedor + ítems) | M2 | 2.2 | 1400×1050 |
| `[IMG-03]` | Panel 2.2 — display: grid activa el modelo | M2 | 2.3 | 1200×900 |
| `[IMG-04]` | Panel 2.3 — gap en Grid | M2 | 2.4 | 1200×900 |
| `[IMG-05]` | Panel 2.4 — grid-template-columns | M2 | 2.5 | 1400×1050 |
| `[IMG-06]` | Panel 2.5 — Unidad fr | M2 | 2.6 | 1400×1050 |
| `[IMG-07]` | Panel 2.6 — repeat() azúcar sintáctica | M2 | 2.7 | 1200×900 |
| `[IMG-08]` | Panel 3.1 — Cantidad fija vs variable | M3 | 3.1 | 1400×1050 |
| `[IMG-09]` | Panel 3.2 — auto-fit rígido | M3 | 3.2 | 1400×1050 |
| `[IMG-10]` | Panel 3.3 — minmax(min, max) | M3 | 3.3 | 1400×1050 |
| `[IMG-11]` | Panel 3.4 — repeat(auto-fit, minmax) canónico | M3 | 3.4 | 1400×1050 |
| `[IMG-12]` | Panel 4.1 — grid-template-areas | M4 | 4.2 | 1400×1050 |
| `[IMG-13]` | Panel 4.2 — grid-area + poder declarativo | M4 | 4.3 | 1400×1050 |
| `[IMG-14]` | Panel 4.3 — Reorganización entre breakpoints | M4 | 4.4 | 1400×1050 |
| `[IMG-15]` | Panel 5.1 — Grid o Flex (4 situaciones) | M5 | 5.1 | 1400×900 |

---

## Checklist de generación

- [ ] Las 15 imágenes IA se generaron y descargaron en una carpeta accesible.
- [ ] Cada imagen revisada visualmente — el texto en pantalla coincide con lo que pidió el prompt (ojo: las IAs frecuentemente deforman textos largos o números; si una imagen sale con texto mal escrito, re-generar el prompt enfatizando la cita literal entre comillas).
- [ ] **IMG-15 verificada con atención especial:** los logos de Spotify, Mercado Libre y Gmail aparecen reconocibles al instante (no aproximaciones genéricas). Si alguno sale ambiguo, re-generar reforzando "logo oficial real de [marca]" en el prompt.
- [ ] Las 15 imágenes están guardadas con nombres claros (ej: **_img-01-flex-vs-grid.png_**, **_img-02-modelo-grid.png_**...).
- [ ] El **_CLASE 03.excalidraw_** está listo (con los 15 placeholders) → arrastrar cada imagen sobre su placeholder.
