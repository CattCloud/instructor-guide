# Guía Excalidraw — CLASE 03: CSS Grid (esencial, intermedio y `grid-template-areas`)

> **Estado del archivo:** En construcción
> **Layout sugerido:** Timeline horizontal (la clase tiene 5 momentos secuenciales)
> **Paneles totales:** 14 (1 en M1 + 6 en M2 + 4 en M3 + 3 en M4). M5 es cierre + commit, no requiere Excalidraw.
> **Última actualización:** Momento 4 cerrado (Capa 2+3 — pendiente revisión de Eric) — se agregaron Paneles 4.1 (**_grid-template-areas_**), 4.2 (**_grid-area_**) y 4.3 (reorganización entre breakpoints).
> **Patrón visual de los Paneles 2.X:** estilo "anatomía visual" tipo samanthaming.com — cajas numeradas (1, 2, 3...) con colores funcionales (verde **_#2f9e44_**, naranja **_#f08c00_**, azul **_#1971c2_**, rojo **_#e03131_**), contenedores con borde claro, etiquetas/flechas para indicar conceptos. Todos son Imagen-slide porque requieren precisión geométrica.

---

## Momento 1: Hook + Prerequisito multi-página

> **Estado:** Borrador
> **Paneles del Momento:** 1

---

### Panel 1.1 — Flex anidado vs Grid limpio: el mismo dashboard, dos formas de llegar

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel comparativo "Flex anidado vs Grid limpio" para el mismo layout de dashboard. A la izquierda, el HTML/wireframe que Flex necesita (3 niveles de anidamiento de divs envoltorios). A la derecha, el HTML/wireframe que Grid permite (un solo contenedor padre con 4 hijos directos). En el centro, el wireframe del resultado visual idéntico en ambos casos.**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para acomodar 2 columnas de HTML + wireframe central)
- **Patrón canónico de referencia:** Patrón 3 (Comparativa X vs Y) + wireframe central de referencia (Patrón 7) — dos columnas paralelas mostrando el código HTML/CSS de cada enfoque y un wireframe en el medio del resultado visual común
- **Concepto pedagógico que visualiza:** la motivación visual de **POR QUÉ existe Grid**. El alumno viene de C02 dominando Flex; necesita ver claramente por qué Flex anidado (la opción que ya conoce) es subóptimo para layouts 2D. La imagen muestra que ambas formas producen el MISMO resultado en pantalla, pero el costo en HTML es muy distinto: Flex requiere 3 divs envoltorios sin valor semántico; Grid resuelve con 1 solo padre + hijos directos. Este Panel es el "anchor pedagógico" de toda la Clase 03 — establece la motivación antes de que se enseñe Grid.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro `#1e1e1e`, 36px): "MISMO LAYOUT 2D — DOS FORMAS DE LLEGAR"
- **Subtítulo** (gris oscuro, 20px): "Flex puede, pero anidando contenedores. Grid lo hace con uno solo."
- **Wireframe central de referencia (encima de las dos columnas, centrado):**
  - Encabezado pequeño (negro 16px): "El resultado visual deseado (idéntico en ambos casos):"
  - Rectángulo grande (borde gris claro, fondo blanco) representando el viewport del dashboard, conteniendo 4 áreas:
    - Banda superior horizontal (verde claro suave) etiquetada "HEADER" — ocupa todo el ancho.
    - Banda izquierda vertical (azul claro suave) etiquetada "SIDEBAR" — debajo del header, columna estrecha.
    - Banda derecha vertical (gris muy claro) etiquetada "MAIN" — debajo del header, ocupa el resto del ancho.
    - Banda inferior horizontal (naranja claro suave) etiquetada "FOOTER" — debajo, ocupa todo el ancho.

- **Layout en dos columnas paralelas debajo del wireframe (sin línea divisoria central):**

  **Columna izquierda — FLEX ANIDADO (lo que ya conocen, pero subóptimo):**
  - Encabezado en rojo `#e03131` (28px): "CON FLEX: 3 NIVELES DE ANIDAMIENTO"
  - Bloque de código HTML (monospace, azul `#1971c2`, fondo blanco con borde gris claro):
    ```html
    <div class="outer-flex">         <!-- Flex column -->
      <header>...</header>
      <div class="middle-row">        <!-- Flex row -->
        <nav>...</nav>
        <main>...</main>
      </div>
      <footer>...</footer>
    </div>
    ```
  - Anotación en rojo `#e03131` con flecha apuntando a las dos líneas `<div class="...">`:
    "← 2 divs envoltorios sin valor semántico, solo para el layout"
  - Etiqueta de cierre en rojo: "HTML contaminado por el layout"

  **Columna derecha — GRID DIRECTO (lo que viene en M4):**
  - Encabezado en verde `#2f9e44` (28px): "CON GRID: UN SOLO PADRE"
  - Bloque de código HTML (monospace, azul `#1971c2`, fondo blanco con borde gris claro):
    ```html
    <body class="grid-layout">       <!-- display: grid -->
      <header>...</header>
      <nav>...</nav>
      <main>...</main>
      <footer>...</footer>
    </body>
    ```
  - Bloque de código CSS pequeño debajo (monospace, azul `#1971c2`):
    ```css
    .grid-layout {
      display: grid;
      grid-template-areas:
        "header header"
        "nav    main"
        "footer footer";
    }
    ```
  - Anotación en verde `#2f9e44` con flecha apuntando al bloque CSS:
    "← El layout vive en el CSS, NO en el HTML"
  - Etiqueta de cierre en verde: "HTML semántico puro"

- **Nota inferior al ancho completo** (negro `#1e1e1e`, 18px): "Cuando el layout es 2D (filas Y columnas a la vez), Grid es la herramienta. Flex sigue brillando para layouts 1D — navs, footers, galerías en una sola dirección."

**Anchor pedagógico:** Patrón 3 (Comparativa) reforzado con un wireframe central de referencia (Patrón 7). El alumno ve simultáneamente: (a) el resultado visual idéntico que se quiere lograr, (b) el costo en HTML de la solución que ya conoce (Flex anidado), (c) el HTML limpio que Grid permite. Sin este Panel, la motivación de "por qué necesitamos Grid si Flex ya funciona" se queda en palabras — el alumno no internaliza el costo del anidamiento hasta que lo ve lado a lado.

**Notas para Eric:** este Panel es el **único Excalidraw del M1** y funciona como el "anchor pedagógico" de toda la Clase 03 — establece la motivación de por qué Grid antes de enseñar Grid. Se proyecta después de la demo en navegador del sitio real (Notion/GitHub/etc.) y antes del cierre de 1.1 que anuncia el code-along del nav. El bloque CSS de la columna derecha es un **sneak peek de M4** (**_grid-template-areas_**) — el alumno no necesita entenderlo todavía, solo verlo como "esto que viene" para tener un mapa mental de hacia dónde va la clase.

---

## Momento 2: **_precios.html_** con Grid básico mobile-first

> **Estado:** Borrador
> **Paneles del Momento:** 6 (Panel 2.1 introduce el modelo y sus elementos antes de las 5 propiedades; después uno por cada concepto en orden de enseñanza: **_display: grid_** → **_gap_** → **_grid-template-columns_** → **_fr_** → **_repeat()_**)
> **Estilo visual común:** todas las imágenes de M2 siguen el mismo patrón "anatomía visual" — contenedor con borde claro, cajas numeradas (1, 2, 3...) con colores funcionales de la paleta canónica, etiquetas con flechas para anotar conceptos. Diseño limpio tipo libro técnico, fondo blanco. Eric muestra cada Panel mientras explica la teoría y antes del demo en **_apoyo-clase03.html_** (cuando aplica — Panel 2.1 no tiene demo asociado porque es puramente conceptual).

---

### Panel 2.1 — El modelo Grid: contenedor, ítems y propiedades de cada lado

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 2.1 (anatomía del modelo Grid): un contenedor grande con borde definido, 6 cajas hijas numeradas (1-6) distribuidas en una grilla 3×2 con líneas punteadas marcando filas Y columnas. Etiqueta "Grid Container" apuntando al contenedor exterior, etiqueta "Grid Items" apuntando a las cajas hijas. Al lado, dos columnas listando las propiedades que viven en cada uno (CONTENEDOR: display:grid, grid-template-columns, gap, grid-template-areas / ÍTEM: grid-area).**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para acomodar diagrama + dos columnas de propiedades + leyenda)
- **Patrón canónico de referencia:** Patrón 2 (Caja de definición del modelo) + Patrón 7 (Wireframe miniatura de la jerarquía padre-hijo) + tabla lateral con propiedades. Análogo al Panel del modelo Flexbox que se usó en C02.
- **Concepto pedagógico que visualiza:** **antes de mostrar `display: grid`** (que es la propiedad que activa el modelo), el alumno necesita ver el modelo completo en una imagen — qué es Grid, quiénes son sus participantes (container y items), y qué propiedades viven en cada uno. Este Panel es el **mapa conceptual** que estructura todo M2: cuando después se vea cada propiedad por separado, el alumno sabe dónde se ubica cada una en el modelo. Sin este Panel, los alumnos tienden a confundir qué propiedades van en el padre y cuáles en el hijo — el error más común al empezar con Grid.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "CSS GRID — EL MODELO Y SUS ELEMENTOS"
- **Subtítulo** (gris oscuro, 20px): "Layout bidimensional: filas Y columnas al mismo tiempo. Container ↔ Items, igual jerarquía que Flex."

- **Diagrama central (mitad izquierda del Panel):**
  - Rectángulo grande con borde claro grueso (**_#1971c2_** azul), fondo blanco, etiquetado arriba como "Grid Container" (texto azul grande sobre el borde superior).
  - Adentro: una grilla 3×2 (3 columnas × 2 filas) con líneas punteadas rojas claras (**_#fa5252_**) marcando explícitamente las divisiones de columnas y filas.
  - 6 cajas hijas (Grid Items) ocupando cada una su celda:
    - Caja 1 (verde claro **_#b2f2bb_** con borde verde **_#2f9e44_**, label "1")
    - Caja 2 (naranja claro **_#ffd8a8_** con borde naranja **_#f08c00_**, label "2")
    - Caja 3 (azul claro **_#a5d8ff_** con borde azul **_#1971c2_**, label "3")
    - Caja 4 (rojo claro **_#ffc9c9_** con borde rojo **_#e03131_**, label "4")
    - Caja 5 (lila claro **_#d0bfff_** con borde lila **_#6741d9_**, label "5")
    - Caja 6 (amarillo claro **_#ffec99_** con borde naranja secundario **_#e8590c_**, label "6")
  - Flecha verde **_#2f9e44_** apuntando a una de las cajas (por ejemplo la #3), con etiqueta "Grid Items (hijos directos)".
  - Etiqueta lateral indicando "filas" (con una llave **_⎬_** vertical a la izquierda del diagrama) y "columnas" (con una llave **_⎯_** horizontal arriba del diagrama), ambas en gris oscuro 14px.

- **Tabla lateral (mitad derecha del Panel) — dos columnas:**

  **Columna A — Propiedades del CONTENEDOR (encabezado azul `#1971c2`):**
  - **_display: grid_** — activa el modelo
  - **_grid-template-columns_** — declara columnas
  - **_grid-template-rows_** — declara filas
  - **_gap_** — separa celdas
  - **_grid-template-areas_** — layout 2D con áreas nombradas (M4)
  - Nota debajo (gris oscuro 14px): "Viven en el PADRE. Definen las reglas de la grilla."

  **Columna B — Propiedades del ÍTEM (encabezado verde `#2f9e44`):**
  - **_grid-area_** — asigna el ítem a un área nombrada (M4)
  - **_grid-column-start/end_** — posicionamiento manual (C301)
  - **_grid-row-start/end_** — posicionamiento manual (C301)
  - Nota debajo (gris oscuro 14px): "Viven en cada HIJO. Controlan a ese ítem en particular."

- **Comparativa con Flex (recuadro pequeño abajo, ancho completo):**
  - Encabezado (negro 16px, recuadro con borde gris): "Recordando Flex (C02):"
  - Tres líneas cortas:
    - "Flex es **1D** — una dirección a la vez (fila O columna)."
    - "Grid es **2D** — filas Y columnas al mismo tiempo."
    - "Ambos: padre define reglas + hijos directos obedecen."

- **Nota inferior** (negro **_#1e1e1e_**, 16px): "Hoy en M2 y M3 vamos a usar las propiedades del CONTENEDOR. En M4 introducimos las propiedades del ÍTEM con **_grid-area_**."

**Anchor pedagógico:** sin este Panel inicial, el alumno entra a `display: grid` (sub-punto 2.3) sin un mapa mental claro del modelo. Es análogo al Panel del modelo Flexbox que usamos en C02 — primero presentamos el "qué es" y "quiénes participan", después las propiedades concretas. La división visual entre las propiedades del contenedor (columna izquierda con borde azul) y las del ítem (columna derecha con borde verde) ancla la jerarquía padre-hijo para todo lo que viene en M2, M3 y M4.

**Notas para Eric:** este Panel **no tiene demo asociado en _apoyo-clase03.html_** — es puramente conceptual. Después de este Panel se pasa directo a sub-punto 2.3 (display: grid), que sí tiene Panel + demo. Si en M4 (cuando se introduce **_grid-area_**) algún alumno pregunta dónde va esa propiedad, referenciar este Panel — está en la columna B (propiedades del ítem) y eso queda visualmente claro.

---

### Panel 2.2 — **_display: grid_**: el modelo se activa (1 columna por default)

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 2.2 (anatomía visual de display: grid): comparativa de un contenedor sin Grid (3 cajas como bloques apilados, estilo flujo normal) vs el mismo contenedor con display: grid sin más declaraciones (3 cajas apiladas en 1 columna por default, ancho 100%). Cajas numeradas 1, 2, 3 con colores funcionales.**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón canónico de referencia:** Patrón 3 (Comparativa antes/después) — dos contenedores idénticos lado a lado, uno sin Grid y otro con **_display: grid_**, mostrando que el resultado visual es prácticamente el mismo (cajas apiladas en 1 columna), pero el modelo activado tiene capacidades distintas.
- **Concepto pedagógico que visualiza:** **_display: grid_** activa el modelo pero por sí solo no cambia la apariencia inicial — los hijos siguen apilados en 1 columna. La diferencia se nota cuando se agregan otras propiedades. Este Panel sirve para que el alumno entienda que "Grid en móvil es la cosa más simple del mundo: una línea de CSS". Pedagógicamente importante porque rompe el sesgo de "Grid debe ser complicado".

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "DISPLAY: GRID — EL MODELO SE ACTIVA"
- **Subtítulo** (gris oscuro, 20px): "Por default: 1 columna que ocupa el 100% del ancho. Perfecto para móvil."
- **Layout en dos columnas lado a lado (sin línea divisoria, separados por proximidad):**

  **Columna izquierda — SIN display: grid (flujo normal):**
  - Encabezado pequeño (gris oscuro, 16px): "Sin Grid (block normal):"
  - Contenedor (rectángulo con borde gris claro, fondo blanco): adentro 3 cajas apiladas verticalmente.
    - Caja 1 (verde claro **_#b2f2bb_** con borde verde **_#2f9e44_**, label "Item 1").
    - Caja 2 (naranja claro **_#ffd8a8_** con borde naranja **_#f08c00_**, label "Item 2").
    - Caja 3 (azul claro **_#a5d8ff_** con borde azul **_#1971c2_**, label "Item 3").
  - Etiqueta lateral (gris oscuro, 14px): "Cada hijo ocupa toda la fila — flujo block normal."

  **Columna derecha — CON display: grid:**
  - Encabezado pequeño (rojo **_#e03131_**, 16px): "Con `display: grid` (sin nada más):"
  - Contenedor idéntico al de la izquierda: mismas 3 cajas, misma distribución visual (1 columna).
  - Anotación con flecha roja apuntando al contenedor: "Visualmente idéntico — PERO ahora es un grid container."
  - Encima del contenedor, líneas punteadas rojas finas marcando las "filas implícitas" que Grid generó automáticamente (1, 2, 3 en el lateral).

- **Bloque de código CSS debajo, centrado:**
  ```css
  .contenedor {
    display: grid;
  }
  ```

- **Nota inferior** (negro **_#1e1e1e_**, 16px): "**Grid en móvil = una línea de CSS.** El default es 1 columna — exactamente lo que se quiere en pantalla pequeña. Las media queries agregan columnas al crecer."

**Anchor pedagógico:** romper el sesgo "Grid es complicado". El Panel demuestra que activar el modelo no cambia nada visualmente — la complejidad llega cuando se agregan **_grid-template-columns_** y otras propiedades. Imagen-slide porque la comparativa lado a lado de dos contenedores idénticos requiere precisión geométrica.

**Notas para Eric:** este es el primero de 5 Paneles del M2, todos siguiendo el mismo patrón visual. Después del Panel se pasa al demo en **_apoyo-clase03.html_** sección **_DEMO M2.3_** donde se muestra lo mismo en código real. El alumno entiende primero el concepto en imagen, después lo ve en código.

---

### Panel 2.3 — **_gap_** en Grid: separar celdas sin **_margin_**

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 2.3 (anatomía visual de gap en Grid): contenedor de 3×2 con cajas numeradas pegadas (gap 0), al lado el mismo contenedor con gap: 24px mostrando la separación uniforme entre filas y columnas. Anotaciones rojas marcando dónde aplica el gap.**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón canónico de referencia:** Patrón 3 (Comparativa) — dos grillas idénticas (3 columnas × 2 filas con 6 cajas numeradas) una al lado de la otra, una sin **_gap_** y otra con **_gap: 24px_**, mostrando el efecto del espacio entre celdas.
- **Concepto pedagógico que visualiza:** **_gap_** separa filas Y columnas a la vez (diferencia clave con Flex). El alumno ya conoce **_gap_** de Flex pero necesita verlo en el contexto bidimensional de Grid para internalizar la diferencia.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "GAP EN GRID — SEPARA FILAS Y COLUMNAS"
- **Subtítulo** (gris oscuro, 20px): "Reemplaza el viejo `margin` en hijos. Una sola propiedad, dos dimensiones."
- **Layout en dos columnas lado a lado:**

  **Columna izquierda — gap: 0 (default):**
  - Encabezado (rojo **_#e03131_**, 16px): "Sin gap (default): celdas pegadas"
  - Grilla 3×2 (6 cajas numeradas 1-6 con colores funcionales rotativos: 1 verde, 2 naranja, 3 azul, 4 rojo, 5 lila, 6 amarillo), TODAS PEGADAS sin espacio entre ellas.
  - Etiqueta lateral: "Las celdas se tocan — incómodo de leer."

  **Columna derecha — gap: 24px:**
  - Encabezado (verde **_#2f9e44_**, 16px): "Con `gap: 24px`: celdas separadas uniformemente"
  - Grilla 3×2 idéntica con las mismas cajas, pero con espacio uniforme de 24px entre filas y entre columnas.
  - 4 flechas rojas con anotación "24px" señalando los espacios entre celdas (2 horizontales, 2 verticales).
  - Etiqueta lateral: "Espacio uniforme en ambas dimensiones — un solo valor."

- **Bloque de código CSS debajo, centrado:**
  ```css
  .contenedor {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
  }
  ```

- **Nota inferior** (negro **_#1e1e1e_**, 16px): "También admite dos valores: `gap: 8px 32px` → 8px entre filas, 32px entre columnas. Sin `margin` en ningún hijo. El espacio lo decide el contenedor."

**Anchor pedagógico:** mostrar que **_gap_** en Grid actúa en dos dimensiones simultáneamente (diferencia con Flex que solo actúa en una). El contraste visual entre el "antes pegado" y el "después separado" hace el concepto inmediatamente claro.

**Notas para Eric:** **_gap_** ya es familiar desde C02. El Panel no introduce el concepto desde cero — lo recontextualiza para Grid. Si el grupo está fluido, este Panel puede recorrerse rápido (2 min) y pasar directo al demo.

---

### Panel 2.4 — **_grid-template-columns_**: declarar columnas explícitas

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 2.4 (anatomía visual de grid-template-columns): mismo contenedor en 3 estados apilados — 1fr 1fr 1fr (3 columnas iguales) / 200px 1fr 1fr (primera fija, dos comparten el resto) / 2fr 1fr (proporción 2:1). Cajas numeradas con tamaños proporcionales al valor de cada columna.**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, más denso para acomodar 3 estados apilados con anotaciones)
- **Patrón canónico de referencia:** Patrón 4 (Secuencia de estados) — el mismo contenedor con distintos valores de **_grid-template-columns_** apilados verticalmente, cada uno con su declaración CSS al lado.
- **Concepto pedagógico que visualiza:** **_grid-template-columns_** declara columnas explícitamente — un valor por cada columna. La cantidad de columnas la decide cuántos valores se pasen. El alumno debe internalizar la lectura visual: "3 valores = 3 columnas".

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "GRID-TEMPLATE-COLUMNS — DECLARAR COLUMNAS EXPLÍCITAS"
- **Subtítulo** (gris oscuro, 20px): "Un valor por cada columna. La cantidad de valores = la cantidad de columnas."
- **Tres estados apilados verticalmente, cada uno con su contenedor + bloque CSS al lado:**

  **Estado 1 — `1fr 1fr 1fr`:**
  - Etiqueta (verde **_#2f9e44_**, 18px): "3 columnas iguales (cada una 1/3 del ancho)"
  - Contenedor con 3 cajas (1 verde, 2 naranja, 3 azul) del mismo ancho.
  - A la derecha: bloque CSS pequeño `grid-template-columns: 1fr 1fr 1fr;` con anotación "3 valores → 3 columnas".

  **Estado 2 — `200px 1fr 1fr`:**
  - Etiqueta (naranja **_#f08c00_**, 18px): "Primera fija de 200px, las otras dos comparten el resto"
  - Contenedor con 3 cajas: la primera (verde) más angosta (200px exactos, etiquetada "200px"), las otras dos (naranja y azul) más anchas y del mismo tamaño entre sí.
  - A la derecha: bloque CSS `grid-template-columns: 200px 1fr 1fr;` con anotación "1 valor fijo + 2 valores fr".

  **Estado 3 — `2fr 1fr`:**
  - Etiqueta (azul **_#1971c2_**, 18px): "2 columnas en proporción 2:1"
  - Contenedor con 2 cajas: la primera (verde) ocupa 2/3 del ancho, la segunda (naranja) ocupa 1/3.
  - A la derecha: bloque CSS `grid-template-columns: 2fr 1fr;` con anotación "2 valores → 2 columnas, proporción 2:1".

- **Bloque CSS general debajo (sintaxis con placeholders):**
  ```css
  grid-template-columns: <valor-col1> <valor-col2> ... <valor-colN>;
  ```

- **Nota inferior** (negro **_#1e1e1e_**, 16px): "Cada valor puede ser longitud (`px`, `rem`, `%`), unidad `fr` (siguiente concepto), o función (`minmax()`, `repeat()`)."

**Anchor pedagógico:** que el alumno **vea** que el número de valores = número de columnas. Sin la imagen, este punto requiere repetirlo varias veces. Con la imagen, la regla se internaliza en una mirada.

**Notas para Eric:** este Panel introduce visualmente la unidad **_fr_** (sin profundizar todavía — eso es el siguiente Panel). Si algún alumno pregunta "qué es **_1fr_**?", responder "lo vemos completo en 2 minutos en el siguiente concepto" y seguir adelante.

---

### Panel 2.5 — Unidad **_fr_**: la fracción del espacio disponible

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 2.5 (anatomía visual de la unidad fr): una barra horizontal de 900px etiquetada como "espacio disponible". Debajo, 3 ejemplos visualizando la repartición: 1fr 1fr (dos cajas mitad y mitad) / 2fr 1fr (caja grande ocupa 2/3, chica 1/3) / 200px 1fr (caja fija de 200px + el resto en una sola caja fr). Cada caja con su proporción anotada arriba.**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para acomodar barra + 3 ejemplos + nota sobre %)
- **Patrón canónico de referencia:** Patrón 4 (Secuencia de estados) + Patrón 1 (Anatomía: barra base con dimensión etiquetada arriba).
- **Concepto pedagógico que visualiza:** **_fr_** se reparte el espacio **disponible** (después de restar fijos y gaps), no el ancho total. Por eso nunca desborda — mientras los porcentajes sí pueden desbordar al sumarles **_gap_**. Este Panel ancla la regla matemática del modelo.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "UNIDAD FR — FRACCIÓN DEL ESPACIO DISPONIBLE"
- **Subtítulo** (gris oscuro, 20px): "1fr = 1 parte del espacio que queda libre. Se reparte siempre lo que sobra — nunca desborda."
- **Barra superior de referencia (centrada, ancho 900px representado):**
  - Etiqueta arriba: "Ancho del contenedor: 900px"
  - Barra horizontal gris claro de borde definido.
- **Tres estados apilados verticalmente debajo de la barra de referencia:**

  **Estado 1 — `1fr 1fr` (dos iguales):**
  - Etiqueta (verde **_#2f9e44_**, 18px): "Dos columnas iguales — cada una mitad del espacio"
  - Barra de 900px dividida en 2 cajas iguales (verde y naranja).
  - Cálculo arriba de las cajas: "450px | 450px" (proporción 1:1).
  - Anotación lateral: "1+1 = 2 partes. Cada parte = 1/2 del espacio."

  **Estado 2 — `2fr 1fr` (proporción 2:1):**
  - Etiqueta (naranja **_#f08c00_**, 18px): "Una columna doble, otra simple — proporción 2:1"
  - Barra de 900px dividida en 2 cajas asimétricas (verde grande, naranja chica).
  - Cálculo arriba: "600px (2fr) | 300px (1fr)" (proporción 2:1 del espacio total).
  - Anotación lateral: "2+1 = 3 partes. Caja grande = 2/3. Caja chica = 1/3."

  **Estado 3 — `200px 1fr` (mezcla fijo + fr):**
  - Etiqueta (azul **_#1971c2_**, 18px): "Primera fija de 200px + segunda toma TODO el resto"
  - Barra de 900px dividida en 2 cajas: la primera (verde) de 200px exactos, la segunda (naranja) de 700px.
  - Cálculo arriba: "200px (fijo) | 700px (1fr toma todo lo que queda)".
  - Anotación lateral: "Primero se descuenta lo fijo. Después fr se reparte el resto. **1fr aquí ≠ 1fr arriba** — depende de lo que sobre."

- **Bloque inferior — diferencia con porcentajes (importante):**
  - Recuadro con borde rojo **_#e03131_**: encabezado en rojo "⚠ Cuidado con los porcentajes:"
  - Texto en negro: "Con `gap: 16px` y `grid-template-columns: 50% 50%` — la segunda columna desborda (50%+50%+16px > 100%). Con `1fr 1fr` no — `fr` se reparte solo lo que queda libre después de los gaps."

**Anchor pedagógico:** la regla matemática de **_fr_** es lo que confunde al alumno principiante ("¿por qué **_1fr_** en un ejemplo es 450px y en otro es 700px?"). El Panel muestra los 3 escenarios con cálculo explícito — el alumno entiende que **_fr_** es **dinámico**, depende del contexto.

**Notas para Eric:** este Panel es el más denso conceptualmente de M2. Si el grupo está perdido al final, dejar 30 segundos extra antes de pasar al demo. El bloque inferior sobre porcentajes es importante para el momento M3 (cuando se aplica **_auto-fit + minmax_** con porcentajes).

---

### Panel 2.6 — **_repeat(N, valor)_**: azúcar sintáctica

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 2.6 (anatomía visual de repeat()): comparativa "antes/después" mostrando que repeat(4, 1fr) y 1fr 1fr 1fr 1fr producen exactamente la misma grilla de 4 columnas iguales. Flecha de equivalencia entre las dos sintaxis. Debajo, un ejemplo extremo con repeat(10, 1fr) mostrando que la forma larga sería ilegible.**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón canónico de referencia:** Patrón 3 (Comparativa de equivalencia) con flecha de igualdad entre las dos sintaxis.
- **Concepto pedagógico que visualiza:** **_repeat()_** es solo una forma corta de escribir — no agrega funcionalidad. La equivalencia se ve mejor lado a lado: misma grilla resultante, dos formas de escribirla.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "REPEAT() — AZÚCAR SINTÁCTICA"
- **Subtítulo** (gris oscuro, 20px): "Forma corta de escribir el mismo valor N veces. No cambia nada — solo el código se ve más limpio."
- **Layout en dos columnas con flecha de equivalencia central (signo = grande, gris):**

  **Columna izquierda — FORMA LARGA:**
  - Encabezado (gris oscuro, 18px): "Forma larga (4 valores):"
  - Bloque CSS:
    ```css
    grid-template-columns:
      1fr 1fr 1fr 1fr;
    ```
  - Grilla de 4 cajas iguales (1 verde, 2 naranja, 3 azul, 4 rojo).

  **Centro — Signo de equivalencia:**
  - Símbolo "=" muy grande (negro **_#1e1e1e_**, 80px) centrado entre las dos columnas.
  - Debajo del signo, etiqueta (gris oscuro, 14px): "exactamente lo mismo"

  **Columna derecha — ATAJO repeat():**
  - Encabezado (verde **_#2f9e44_**, 18px): "Atajo (`repeat()`):"
  - Bloque CSS:
    ```css
    grid-template-columns:
      repeat(4, 1fr);
    ```
  - Grilla de 4 cajas idénticas a las de la izquierda (mismas posiciones, mismos colores).

- **Bloque inferior — caso extremo (donde repeat() brilla):**
  - Encabezado (rojo **_#e03131_**, 18px): "Con 10 columnas — la diferencia se hace evidente:"
  - Comparativa de 2 bloques de código pequeños, lado a lado:
    - Forma larga (ilegible): `1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr`
    - Atajo (limpio): `repeat(10, 1fr)`
  - Grilla muy angosta de 10 cajas en una fila debajo (mostrando que ambas producen el mismo resultado visual).

- **Nota inferior** (negro **_#1e1e1e_**, 16px): "**Azúcar sintáctica** = forma más corta o legible que produce el mismo resultado. Lo van a ver en TODO el código real de Grid. Adelantamos el patrón ahora."

**Anchor pedagógico:** quitar el misterio de **_repeat()_** — no es algo "nuevo" que el alumno deba aprender de fondo, es solo una forma corta de escribir lo mismo. El Panel hace explícita la equivalencia con un signo "=" grande.

---

## Momento 3: Grid intermedio — "Marcas que confían" con **_auto-fit + minmax_**

> **Estado:** Borrador
> **Paneles del Momento:** 4 (Panel 3.1 establece el problema visual con ejemplos del mundo real — cantidad fija vs variable; después uno por cada concepto técnico: **_auto-fit_**, **_minmax_**, y la combinación canónica).
> **Estilo visual común:** mismo patrón que M2 — contenedor con borde claro, cajas numeradas con colores funcionales, etiquetas con flechas, fondo blanco. Imagen-slide para todos.

---

### Panel 3.1 — Cantidad fija vs cantidad variable: el problema en la vida real

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 3.1 (cantidad fija vs cantidad variable): comparativa lateral. Lado izquierdo verde = cantidad fija (Planes Free/Starter/Pro/Enterprise — 4 cards alineadas). Lado derecho rojo = cantidad variable (tienda online, blog, dashboard — wireframes mostrando que la cantidad cambia con cada filtro/búsqueda/contenido). Texto inferior con la regla.**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para acomodar 2 columnas con ejemplos del mundo real + regla inferior)
- **Patrón canónico de referencia:** Patrón 3 (Comparativa X vs Y) con énfasis pedagógico — cada lado tiene un ejemplo visual concreto + una etiqueta de regla técnica.
- **Concepto pedagógico que visualiza:** **el problema motivacional de M3** — antes de enseñar **_auto-fit + minmax_**, el alumno debe entender POR QUÉ existe esta herramienta. El Panel contrasta dos escenarios reales del mundo del internet: cantidad fija (controlable por el dev, media queries explícitas sirven) vs cantidad variable (la determina el contenido / el usuario / la base de datos / la API, las media queries no alcanzan). Sin este Panel, el alumno puede pensar que **_auto-fit_** es "otra forma de hacer lo mismo" — con el Panel, entiende que es la **única forma** de resolver el problema de cantidad variable.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "¿LA CANTIDAD DE ITEMS ES FIJA O VARIABLE?"
- **Subtítulo** (gris oscuro, 20px): "Esa pregunta decide qué herramienta de Grid responsive usás."
- **Layout en dos columnas paralelas (separadas por proximidad espacial, sin línea divisoria central):**

  **Columna izquierda — CANTIDAD FIJA (verde — la conocen):**
  - Encabezado en verde **_#2f9e44_** (28px): "CANTIDAD FIJA"
  - Sub-etiqueta: "El dev sabe cuántos van a ser. Punto."
  - **Ejemplo visual:** wireframe de la sección de planes — 4 cards verdes alineadas etiquetadas "Free / Starter / Pro / Enterprise", como las que el alumno construyó en M2.
  - **Lista debajo del wireframe** (texto negro 16px):
    - "Planes de un producto (4 fijos)"
    - "Categorías de un menú (5 fijas)"
    - "Pasos de un onboarding (3 fijos)"
    - "Pestañas de un dashboard (4 fijas)"
  - **Etiqueta de cierre** (verde, 18px, recuadro suave): "**Solución:** media queries explícitas. **_grid-template-columns: repeat(4, 1fr)_** en desktop. Cada breakpoint controlado a mano."

  **Columna derecha — CANTIDAD VARIABLE (rojo — el problema):**
  - Encabezado en rojo **_#e03131_** (28px): "CANTIDAD VARIABLE"
  - Sub-etiqueta: "El dev NO controla cuántos van a ser. Cambia con el contenido."
  - **Ejemplo visual:** wireframe simplificado de una tienda online tipo Mercado Libre — un grid de productos. Tres "estados" mini lado a lado en miniatura:
    - "Búsqueda 1: 47 productos" (grid denso)
    - "Filtro aplicado: 12 productos" (grid más vacío)
    - "Otra búsqueda: 200+ productos" (grid extenso con scroll)
  - **Lista debajo del wireframe** (texto negro 16px):
    - "Productos en una tienda online (cambian con filtros y stock)"
    - "Posts en una red social (los que el usuario sube)"
    - "Resultados de búsqueda en YouTube / Google"
    - "Items que vienen de una base de datos o API"
    - "Logos de marcas en una página corporativa (hoy 6, mañana 15)"
  - **Etiqueta de cierre** (rojo, 18px, recuadro suave): "**Problema:** media queries explícitas NO sirven — no podés anticipar todos los casos. **Solución:** la próxima clase del momento (**_auto-fit + minmax_**)."

- **Nota inferior al ancho completo (recuadro neutro con borde gris claro):**
  - Texto principal (negro **_#1e1e1e_**, 18px): "**Regla:** la pregunta que te tenés que hacer en cada layout responsive de tu carrera es '¿quién controla la cantidad de items?'. Si lo controla el dev (cantidad fija), media queries. Si lo controla el contenido (cantidad variable), **_auto-fit + minmax_**."
  - Texto secundario (gris oscuro, 14px): "En el lab de hoy aplicamos esto a logos de marcas. Pero la misma regla sirve para cualquier grid que cargue contenido dinámico."

**Anchor pedagógico:** Patrón 3 (Comparativa X vs Y) reforzado con ejemplos del mundo real (no solo del lab). El alumno entiende que la lección no es "para los logos" sino "para todo el internet". Sin este Panel, M3 puede leerse como "una forma alternativa de hacer un grid de logos" — con el Panel, M3 es "la forma de hacer grids donde el dev no controla la cantidad", lo cual cubre el 60%+ de los layouts reales de producción.

**Notas para Eric:** este Panel es el **hook pedagógico de M3**. Se proyecta DESPUÉS de la demo en navegador real (Mercado Libre con búsquedas y filtros) y ANTES del Panel 3.2 (**_auto-fit_** concepto técnico). El propósito del Panel es responder la pregunta "¿por qué necesitamos esto?" antes de mostrar el "cómo". El alumno entra a los sub-puntos siguientes (3.2 a 3.4) sabiendo qué problema están resolviendo, no solo qué propiedades están aprendiendo. Si el grupo está distraído al volver del receso, este Panel es lo que los recaptura.

---

### Panel 3.2 — **_auto-fit_**: el grid decide cuántas columnas caben (pero rígidas)

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 3.2 (anatomía visual de auto-fit): mismo contenedor en 3 anchos distintos (1200px, 800px, 400px) con repeat(auto-fit, 200px). En 1200px caben 6 cajas; en 800px caben 4; en 400px caben 2. Espacio vacío visible al final de cada fila (porque solo auto-fit, sin minmax, no estira las cajas). Cajas numeradas con colores funcionales.**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para acomodar 3 viewports apilados + anotaciones del espacio vacío)
- **Patrón canónico de referencia:** Patrón 4 (Secuencia de estados) — mismo contenedor con el mismo CSS en 3 anchos distintos, mostrando cómo cambia el número de columnas.
- **Concepto pedagógico que visualiza:** **_auto-fit_** es el primer concepto donde el navegador "decide solo" — pero sin **_minmax_**, las columnas quedan rígidas y queda espacio vacío. Este Panel muestra esa limitación claramente para motivar el siguiente sub-punto (**_minmax_**).

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "AUTO-FIT — EL GRID DECIDE CUÁNTAS COLUMNAS CABEN"
- **Subtítulo** (gris oscuro, 20px): "Sin minmax, las columnas son rígidas. Mirar el espacio vacío al final de cada fila."
- **Tres estados apilados verticalmente, cada uno con su viewport etiquetado:**

  **Estado 1 — Contenedor de 1200px:**
  - Etiqueta arriba (negro 18px): "Ancho del contenedor: 1200px"
  - Rectángulo contenedor ancho (borde gris claro grueso) representando 1200px.
  - Adentro: 6 cajas verdes/naranjas/azules/rojas/lilas/amarillas de **exactamente 200px cada una**, en una sola fila.
  - Al final de la fila (lado derecho del contenedor): franja de espacio VACÍO marcada en rojo claro **_#ffc9c9_** con etiqueta "espacio vacío" (los 1200 - 6×200 = 0px no cubiertos por las 6 cajas si caben 6; ajustar a 5 cajas si el cálculo lo requiere — el punto visual es mostrar que hay espacio sin usar).
  - Anotación lateral: "Caben 6 columnas de 200px. Las cajas NO se estiran."

  **Estado 2 — Contenedor de 800px:**
  - Etiqueta arriba: "Ancho del contenedor: 800px"
  - Rectángulo más estrecho.
  - Adentro: 4 cajas de 200px en una fila + franja de espacio vacío al final (rojo claro).
  - Anotación lateral: "Caben 4. Sobran ~200px de espacio vacío."

  **Estado 3 — Contenedor de 400px:**
  - Etiqueta arriba: "Ancho del contenedor: 400px"
  - Rectángulo angosto.
  - Adentro: 2 cajas de 200px en una fila — sin espacio vacío visible (caben justo).
  - Anotación lateral: "Caben 2 (2 × 200 = 400)."

- **Bloque CSS de referencia, centrado debajo de los 3 estados:**
  ```css
  grid-template-columns: repeat(auto-fit, 200px);
  ```

- **Nota inferior (recuadro rojo claro):** "⚠ **Limitación:** sin minmax, las columnas son rígidas de 200px. El sobrante queda vacío. Para que se estiren al ancho disponible, necesitamos minmax (siguiente Panel)."

**Anchor pedagógico:** mostrar **_auto-fit_** en su forma "incompleta" (sin **_minmax_**) crea la motivación pedagógica para el siguiente concepto. Sin este contraste, **_minmax_** parece arbitrario — con el contraste, el alumno entiende exactamente qué problema resuelve.

**Notas para Eric:** este Panel termina con una "promesa pedagógica" — "esto está incompleto, lo arreglamos en el siguiente Panel". Mantener ese ritmo en la transición a 3.3.

---

### Panel 3.3 — **_minmax(min, max)_**: un rango de tamaño para la columna

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 3.3 (anatomía visual de minmax): tres ejemplos apilados mostrando el mismo contenedor con una sola columna en 3 anchos distintos. Estado 1: minmax(150px, 1fr) → la columna mide 150px en pantalla angosta, 1fr (todo el ancho) en pantalla amplia. Estado 2: minmax(100px, 300px) → rango cerrado, la columna nunca pasa de 300px aunque sobre espacio. Estado 3: explicación visual de "mínimo / máximo / rango permitido".**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón canónico de referencia:** Patrón 4 (Secuencia de estados) + Patrón 1 (Anatomía de la sintaxis con flechas al **_min_** y al **_max_**).
- **Concepto pedagógico que visualiza:** **_minmax_** define un rango — no un tamaño fijo. La columna se acomoda dentro de ese rango según el espacio disponible. Si el **_max_** es **_1fr_**, la columna se estira al ancho disponible (lo que resuelve el problema del Panel 3.2).

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "MINMAX(MIN, MAX) — UN RANGO DE TAMAÑO PARA LA COLUMNA"
- **Subtítulo** (gris oscuro, 20px): "Un mínimo que nunca baja, un máximo que nunca sube. La columna se acomoda en el medio."
- **Anatomía de la sintaxis (arriba del Panel, en bloque destacado):**
  - Bloque de código central (monospace azul **_#1971c2_**, fondo blanco): `minmax(150px, 1fr)`
  - Flecha verde **_#2f9e44_** desde `150px` → etiqueta "MÍNIMO — la columna nunca baja de esto"
  - Flecha naranja **_#f08c00_** desde `1fr` → etiqueta "MÁXIMO — la columna nunca pasa de esto"

- **Dos casos apilados verticalmente:**

  **Caso 1 — `minmax(150px, 1fr)` (la combinación que vamos a usar con auto-fit):**
  - Etiqueta (verde **_#2f9e44_**, 18px): "Caso 1: minmax(150px, 1fr) → se estira al ancho disponible, mínimo 150px"
  - Tres viewports lado a lado:
    - Ancho 800px: caja verde estirada a 800px (todo el ancho, porque 1fr).
    - Ancho 400px: caja verde estirada a 400px (todo el ancho).
    - Ancho 100px: caja verde de 150px (mínimo, genera scroll horizontal visible).
  - Anotación: "1fr = se estira hasta llenar. 150px = nunca baja."

  **Caso 2 — `minmax(100px, 300px)` (rango cerrado en ambos extremos):**
  - Etiqueta (naranja **_#f08c00_**, 18px): "Caso 2: minmax(100px, 300px) → rango cerrado, nunca pasa de 300px"
  - Tres viewports lado a lado:
    - Ancho 1200px: caja naranja de **300px** (no se estira más, sobra espacio).
    - Ancho 400px: caja naranja de **300px** (el máximo aplica).
    - Ancho 80px: caja naranja de **100px** (el mínimo aplica, scroll horizontal).
  - Anotación: "300px = tope absoluto. Aunque sobre espacio, NO se estira más."

- **Nota inferior** (negro **_#1e1e1e_**, 16px): "**La combinación que vamos a usar con _auto-fit_ es _minmax(150px, 1fr)_** — mínimo en píxeles para que las columnas no se aplasten, máximo en _1fr_ para que se estiren cuando sobra espacio."

**Anchor pedagógico:** la diferencia entre los dos casos (max:1fr vs max:300px) muestra que **_minmax_** es una herramienta general — el alumno entiende que **_1fr_** en el segundo argumento es UNA opción, no la única. Pero también queda claro que **_minmax(<min>, 1fr)_** es la fórmula canónica que va con **_auto-fit_**.

**Notas para Eric:** este Panel cierra el "loop" del problema del Panel 3.2. Si algún alumno pregunta "¿por qué siempre 1fr en el max?", la respuesta es: "porque queremos que se estiren al ancho disponible. Si quisiéramos un tope fijo, usaríamos px o rem".

---

### Panel 3.4 — **_repeat(auto-fit, minmax(150px, 1fr))_**: el patrón canónico que junta todo

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 3.4 (anatomía visual de la combinación): la fórmula canónica repeat(auto-fit, minmax(150px, 1fr)) descompuesta visualmente. Arriba, la fórmula con flechas anotadas señalando cada parte (auto-fit = "tantas como quepan" / 150px = "mínimo de cada columna" / 1fr = "se estira al sobrar espacio"). Abajo, el comportamiento en 3 viewports apilados (400px → 2 cols / 700px → 4 cols / 1200px → 6 cols). 6 cajas numeradas que se reorganizan SIN media queries.**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para acomodar anatomía + 3 viewports + nota inferior)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de sintaxis con flechas) + Patrón 4 (Secuencia de estados) — la fórmula descompuesta arriba, el comportamiento en 3 viewports abajo.
- **Concepto pedagógico que visualiza:** la combinación de los dos conceptos anteriores produce el patrón estrella de Grid intermedio. Este Panel es la "respuesta final" al problema del logos — el alumno ve la fórmula completa con su efecto visual en 3 escenarios.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "EL PATRÓN CANÓNICO DE GRID INTERMEDIO"
- **Subtítulo** (gris oscuro, 20px): "Cero media queries. La grilla se adapta sola al ancho disponible."

- **Sección 1 — Anatomía de la fórmula (arriba, en bloque destacado):**
  - Bloque de código grande (monospace azul **_#1971c2_**, 28px):
    ```
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    ```
  - Tres flechas con anotaciones (colores funcionales, fontSize 16):
    - Flecha verde **_#2f9e44_** desde `auto-fit` → "tantas columnas como quepan"
    - Flecha naranja **_#f08c00_** desde `150px` → "mínimo de cada columna"
    - Flecha azul **_#1971c2_** desde `1fr` → "se estira al ancho disponible"

- **Sección 2 — Comportamiento en 3 viewports (3 estados apilados):**

  **Viewport 1200px (desktop):**
  - Etiqueta (negro 16px): "Pantalla ancha — caben 6 columnas estiradas"
  - Contenedor con 6 cajas numeradas (1-6, colores funcionales rotativos), todas del mismo ancho, llenando el contenedor sin huecos.

  **Viewport 700px (tablet):**
  - Etiqueta (negro 16px): "Pantalla media — caben 4 columnas estiradas"
  - Contenedor más estrecho con las MISMAS 6 cajas, ahora en 2 filas de 4+2. Las 4 de arriba se estiran al ancho; las 2 de abajo se estiran al ancho disponible.

  **Viewport 400px (móvil):**
  - Etiqueta (negro 16px): "Pantalla angosta — caben 2 columnas estiradas"
  - Contenedor angosto con las MISMAS 6 cajas, ahora en 3 filas de 2. Todas se estiran al ancho.

- **Nota inferior al ancho completo (recuadro verde claro):** "✓ **Cero `@media` en el CSS.** La fórmula maneja TODOS los anchos automáticamente. Esta es la diferencia con el caso de los planes (M2) — ahí los breakpoints son explícitos porque la cantidad es fija."

**Anchor pedagógico:** este Panel es la "imagen-resumen" del momento — el alumno la mira mientras escribe el CSS del lab y la usa como referencia visual de lo que debería pasar en su navegador. La conexión con la lección clave (vs M2 con media queries) prepara el cierre del momento.

**Notas para Eric:** después de este Panel se pasa directo al code-along del lab (sub-punto 3.5). El alumno escribe la fórmula completa de una sola vez porque ya entendió cada parte por separado. La transición es natural — el Panel es el "antes" y el lab es el "después" en el proyecto víctima.

**Notas para Eric:** después de este Panel y su demo, el alumno tiene todos los 5 conceptos de Grid básico aprendidos por separado. M2.7 (la aplicación al lab) los une — el alumno ya no se sorprende de ver **_repeat(4, 1fr)_** en el code-along del lab porque lo acaba de ver en el demo de **_apoyo-clase03.html_**.

---

## Momento 4: **_faq.html_** con **_grid-template-areas_** (el feature distintivo de Grid)

> **Estado:** Borrador
> **Paneles del Momento:** 3 (uno por cada concepto técnico: **_grid-template-areas_**, **_grid-area_**, reorganización entre breakpoints). El setup HTML (sub-punto 4.1) y la aplicación al lab (sub-punto 4.5) no requieren Panel propio.
> **Estilo visual común:** mismo patrón que M2 y M3 — contenedor con borde claro, cajas/áreas con colores funcionales, etiquetas con flechas, fondo blanco. Imagen-slide para todos. Diferencia con M2/M3: estos Paneles muestran áreas RECTANGULARES NOMBRADAS (no cajas numeradas) porque el concepto de `grid-template-areas` se trata de regiones del layout, no de items secuenciales.

---

### Panel 4.1 — **_grid-template-areas_**: dibujar el layout con texto

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 4.1 (anatomía visual de grid-template-areas): a la izquierda, el bloque CSS con 3 strings entre comillas (header, nav main, footer footer). A la derecha, el wireframe resultado del layout 2D con cada área etiquetada y coloreada. Flechas que conectan cada palabra del CSS con su área visual.**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para acomodar CSS + wireframe + flechas conectoras)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de sintaxis) + Patrón 7 (Wireframe miniatura del layout resultante) — el CSS y el resultado visual en una sola imagen, conectados por flechas funcionales.
- **Concepto pedagógico que visualiza:** la **dualidad entre el código y el layout resultante**. El alumno necesita ver simultáneamente cómo se escriben las strings del `grid-template-areas` y qué layout producen — sin esa conexión visual, la sintaxis se ve como "un mapa abstracto que no llego a entender".

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "GRID-TEMPLATE-AREAS — DIBUJAR EL LAYOUT CON TEXTO"
- **Subtítulo** (gris oscuro, 20px): "Cada string = una fila. Cada palabra = una columna. El nombre = el área."
- **Layout en dos columnas paralelas conectadas por flechas:**

  **Columna izquierda — EL CSS (sintaxis del grid-template-areas):**
  - Encabezado (azul **_#1971c2_**, 20px): "El CSS:"
  - Bloque de código (monospace azul **_#1971c2_**, fondo blanco con borde gris claro):
    ```css
    .faq-layout {
      display: grid;
      grid-template-areas:
        "header header"
        "nav    main"
        "footer footer";
      grid-template-columns: 200px 1fr;
    }
    ```
  - Anotaciones laterales (gris oscuro, 14px) señalando con llaves a la izquierda:
    - `{` "Fila 1: 2 columnas, ambas 'header'"
    - `{` "Fila 2: 'nav' a la izquierda + 'main' a la derecha"
    - `{` "Fila 3: 2 columnas, ambas 'footer'"

  **Columna derecha — EL LAYOUT VISUAL (wireframe resultante):**
  - Encabezado (verde **_#2f9e44_**, 20px): "El resultado:"
  - Wireframe T invertida del layout:
    - Banda superior (verde claro **_#b2f2bb_** con borde verde **_#2f9e44_**) etiquetada "HEADER" — ocupa las 2 columnas.
    - Fila central dividida:
      - Banda izquierda (azul claro **_#a5d8ff_** con borde azul **_#1971c2_**) etiquetada "NAV" — 200px de ancho, columna estrecha.
      - Banda derecha (naranja claro **_#ffd8a8_** con borde naranja **_#f08c00_**) etiquetada "MAIN" — ocupa el resto del ancho.
    - Banda inferior (rojo claro **_#ffc9c9_** con borde rojo **_#e03131_**) etiquetada "FOOTER" — ocupa las 2 columnas.

- **Flechas conectoras** (entre las dos columnas, atravesando el centro del Panel):
  - Flecha verde desde la palabra "header" (línea 4 del CSS) → al área HEADER del wireframe.
  - Flecha azul desde "nav" (línea 5) → al área NAV del wireframe.
  - Flecha naranja desde "main" (línea 5) → al área MAIN del wireframe.
  - Flecha roja desde "footer" (línea 6) → al área FOOTER del wireframe.

- **Regla destacada al pie del Panel (recuadro con borde rojo `#e03131`):**
  - "⚠ **Regla obligatoria:** cada área debe formar un RECTÁNGULO. No se pueden hacer formas en L o T. Si una palabra aparece en 2 celdas no adyacentes, el CSS es inválido y el navegador ignora la regla."

- **Nota inferior** (negro **_#1e1e1e_**, 16px): "Para dejar una celda VACÍA, usar `.` (un punto solo) en lugar de un nombre de área. Ejemplo: `\". header .\"` → primera y tercera celda vacías, segunda con área 'header'."

**Anchor pedagógico:** la conexión visual entre el código y el resultado es crítica para internalizar `grid-template-areas`. Sin las flechas que conectan cada palabra del CSS con su área visual, el alumno no entiende la correspondencia 1-a-1. Imagen-slide porque la geometría de las áreas (proporciones, alineaciones, bordes coloreados) requiere precisión que dibujado a mano se pierde.

**Notas para Eric:** este Panel es el corazón pedagógico de M4. Se proyecta antes del demo en `apoyo-clase03.html` sección DEMO M4.2. Junto con el Panel 4.2 (grid-area), conforman el par teórico que el alumno necesita antes de la reorganización entre breakpoints (Panel 4.3). El sneak peek de Panel 1.1 (que mostraba `grid-template-areas` brevemente) ahora se completa con este Panel.

---

### Panel 4.2 — **_grid-area_**: asignar cada elemento a su área nombrada

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 4.2 (anatomía visual de grid-area): a la izquierda, lista de elementos HTML (header, .faq-nav, .faq-main, footer). En el centro, las áreas nombradas del grid (rectángulos coloreados con el nombre dentro). A la derecha, las reglas CSS de grid-area conectando cada elemento HTML con su área del grid. Flechas que muestran "este elemento → esta área".**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía) — 3 columnas en paralelo (elementos HTML / grid con áreas / reglas CSS) conectadas por flechas funcionales que muestran las asignaciones 1-a-1.
- **Concepto pedagógico que visualiza:** **la jerarquía padre/hijo en `grid-template-areas`** — el padre define las áreas, los hijos se asignan a ellas. Además, el **poder declarativo**: el orden visual depende del padre, NO del orden del HTML. Este es el "wow pedagógico" del momento — el alumno puede tener el footer primero en el HTML y aparecer último en pantalla.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "GRID-AREA — ASIGNAR CADA ELEMENTO A SU ÁREA"
- **Subtítulo** (gris oscuro, 20px): "El padre define las áreas. El hijo dice a cuál pertenece. El orden visual lo decide el padre — no el HTML."
- **Layout en 3 columnas paralelas conectadas por flechas funcionales:**

  **Columna izquierda — ELEMENTOS HTML (en el orden del DOM):**
  - Encabezado (gris oscuro, 18px): "HTML (estructura del documento)"
  - Lista vertical de 4 etiquetas en orden:
    1. `<header>` (recuadro con borde gris claro, monospace azul)
    2. `<nav class="faq-nav">`
    3. `<main class="faq-main">`
    4. `<footer>`

  **Columna central — EL GRID CON ÁREAS NOMBRADAS (wireframe de la T invertida):**
  - Encabezado (gris oscuro, 18px): "El grid (definido por el padre)"
  - Mismo wireframe T invertida del Panel 4.1, con las 4 áreas coloreadas y etiquetadas (HEADER, NAV, MAIN, FOOTER).

  **Columna derecha — REGLAS CSS DE GRID-AREA:**
  - Encabezado (verde **_#2f9e44_**, 18px): "CSS (asignación de cada hijo)"
  - 4 reglas CSS, una debajo de la otra, en monospace azul **_#1971c2_**:
    ```css
    .faq-layout header { grid-area: header; }
    .faq-nav           { grid-area: nav; }
    .faq-main          { grid-area: main; }
    .faq-layout footer { grid-area: footer; }
    ```

- **Flechas conectoras (cruzando las 3 columnas):**
  - Flecha verde: `<header>` (HTML) → área HEADER (wireframe) → regla `.faq-layout header { grid-area: header }`.
  - Flecha azul: `<nav class="faq-nav">` → área NAV → regla `.faq-nav { grid-area: nav }`.
  - Flecha naranja: `<main class="faq-main">` → área MAIN → regla `.faq-main { grid-area: main }`.
  - Flecha roja: `<footer>` → área FOOTER → regla `.faq-layout footer { grid-area: footer }`.

- **Caja destacada al pie del Panel (recuadro amarillo `#ffec99` con borde naranja `#f08c00`):**
  - Encabezado (naranja `#f08c00`, 18px): "💡 El poder declarativo de Grid"
  - Texto (negro `#1e1e1e`, 16px): "**El orden visual en pantalla NO depende del orden del HTML.** Si en el HTML el `<footer>` está PRIMERO, va a aparecer ABAJO en pantalla mientras el padre diga que `footer` va en la última fila. Esto es lo que permite reorganizar el layout entre breakpoints sin tocar el HTML."

**Anchor pedagógico:** la triple conexión (HTML → grid áreas → reglas CSS) muestra la jerarquía completa. El alumno entiende dónde vive cada cosa: la estructura semántica en el HTML, las áreas en el padre, la asignación en cada hijo. La caja del poder declarativo al pie es el "wow pedagógico" que diferencia Grid de Flex.

**Notas para Eric:** este Panel se proyecta inmediatamente después del Panel 4.1. La transición es natural: 4.1 muestra "el padre define las áreas con strings", 4.2 muestra "los hijos se asignan a las áreas con `grid-area`". En el demo en `apoyo-clase03.html` (DEMO M4.3), Eric puede mover físicamente el `<footer>` al principio del HTML para demostrar el "wow" — el footer sigue apareciendo abajo. Eso confirma visualmente la caja destacada del Panel.

---

### Panel 4.3 — Reorganización entre breakpoints: el poder declarativo mobile-first

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 4.3 (reorganización entre breakpoints): dos estados lado a lado del mismo contenedor con los mismos 4 elementos HTML. Estado A (móvil ~400px): grid-template-areas de 4 filas × 1 columna — header / nav / main / footer apilados. Estado B (tablet ≥640px): grid-template-areas de 3 filas × 2 columnas con T invertida — "header header" / "nav main" / "footer footer". Misma cantidad de elementos HTML, layouts completamente distintos por el cambio de la regla dentro de un media query.**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para acomodar 2 estados completos + el media query que los conecta)
- **Patrón canónico de referencia:** Patrón 3 (Comparativa de 2 estados del mismo grid) + Patrón 1 (Anatomía: el CSS con `@media` arriba que conecta los dos estados).
- **Concepto pedagógico que visualiza:** **el patrón mobile-first declarativo aplicado a `grid-template-areas`**. El alumno ya conoce los breakpoints (de C02) y `grid-template-areas` (de M4.1/4.2). Este Panel los une: cambiar el layout entre breakpoints es REDIBUJAR el mapa con texto, no recalcular anchos a mano.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "REORGANIZACIÓN ENTRE BREAKPOINTS — REDIBUJAR EL MAPA"
- **Subtítulo** (gris oscuro, 20px): "Mismo HTML. Mismo `grid-area` de cada hijo. Lo único que cambia entre móvil y desktop son las strings."
- **Sección 1 — El CSS con los dos breakpoints (arriba, ancho completo):**
  - Bloque de código central (monospace azul **_#1971c2_**, fondo blanco con borde gris claro):
    ```css
    /* MÓVIL (base) */
    .faq-layout {
      display: grid;
      grid-template-areas:
        "header"
        "nav"
        "main"
        "footer";
      grid-template-columns: 1fr;
    }

    /* TABLET+ (≥640px) */
    @media (min-width: 640px) {
      .faq-layout {
        grid-template-areas:
          "header header"
          "nav    main"
          "footer footer";
        grid-template-columns: 200px 1fr;
      }
    }
    ```
  - Anotación lateral (rojo **_#e03131_**, 14px): "Lo único que cambia entre los dos breakpoints son las strings del `grid-template-areas` y la cantidad de columnas. **Nada más.**"

- **Sección 2 — Los dos resultados visuales lado a lado (debajo del CSS):**

  **Estado A — Móvil (<640px):**
  - Etiqueta arriba (negro 16px): "Móvil (~400px): apilado en 1 columna"
  - Wireframe estrecho con 4 áreas apiladas verticalmente:
    - HEADER (verde claro)
    - NAV (azul claro)
    - MAIN (naranja claro)
    - FOOTER (rojo claro)

  **Estado B — Tablet+ (≥640px):**
  - Etiqueta arriba (negro 16px): "Tablet+ (≥640px): T invertida con sidebar"
  - Wireframe ancho con la T invertida:
    - HEADER ocupa las 2 columnas arriba.
    - NAV (sidebar 200px) + MAIN (resto) en la fila del medio.
    - FOOTER ocupa las 2 columnas abajo.

- **Flecha curva en el centro entre los 2 estados** (azul **_#1971c2_**, gruesa, con texto): "Al cruzar 640px, el navegador reorganiza solo →"

- **Nota inferior al ancho completo (recuadro verde claro):**
  - Encabezado (verde **_#2f9e44_**, 18px): "✓ Esto es lo que Flex NO puede hacer limpio"
  - Texto (negro 16px): "Con Flex, reorganizar el layout entre breakpoints requeriría cambiar la estructura del HTML, agregar clases nuevas o calcular `flex-basis` a mano para cada elemento. Con `grid-template-areas`, REDEFINÍS 4 STRINGS y listo. **El layout es declarativo.**"

**Anchor pedagógico:** mostrar los dos estados COMPLETOS lado a lado, con el `@media` arriba conectándolos, es lo que ancla el patrón mobile-first declarativo en la memoria del alumno. Sin este Panel, el alumno podría pensar que la reorganización entre breakpoints es "complicada" — con el Panel ve que es literalmente cambiar el dibujo del mapa.

**Notas para Eric:** este es el último Panel del momento. Después se pasa al sub-punto 4.5 (aplicación al lab) donde el alumno escribe exactamente este CSS en el proyecto víctima. El demo en `apoyo-clase03.html` sección DEMO M4.4 deja ver el cambio en vivo al arrastrar el ancho del navegador. Cerrar el momento conectando con el Panel 1.1 ("este es el feature distintivo que les anunciamos al principio del día — ahora lo aplicaron").

---

## Momento 5: Cierre — Criterio Grid vs Flex + commit + GitHub Pages

> **Estado:** Borrador
> **Paneles del Momento:** 1 (el cierre interactivo "Grid o Flex — ¿cuál usás?" necesita soporte visual; los sub-puntos 5.2 logros y 5.3 commit/GitHub Pages no requieren Panel).

---

### Panel 5.1 — Grid o Flex: 4 situaciones cotidianas para que el alumno decida

- **Trigger en el guion:** `**EN PANTALLA: PRESENTACIÓN / EXCALIDRAW — Diapositiva con el título "GRID O FLEX — ¿CUÁL USÁS?" y 4 cajas numeradas 1-4 con una IMAGEN reconocible de cada situación adentro (no jerga, no nombres técnicos — la imagen lo dice todo). Las 4 cajas son visibles desde el inicio.**`
- **Tipo:** Imagen-slide (**carga visual alta — éste es el caso donde la imagen reemplaza la palabra**)
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9, espacioso para acomodar título + 4 mockups grandes y reconocibles)
- **Patrón canónico de referencia:** Patrón 4 (Algoritmo numerado) — 4 escenarios visibles con su número y un mockup tan reconocible que el alumno identifique el producto sin leer texto. **Dinámica de aula tipo "Verdad o Mito"** (referencia: Clase 08 de C101) — el alumno responde primero en el chat, después Eric valida y revela la respuesta correcta verbalmente.
- **Concepto pedagógico que visualiza:** el cierre de la clase — fijar el criterio "Grid vs Flex" mediante **práctica interactiva**, no por dictado de tabla. Las 4 situaciones cubren exactamente las 4 herramientas enseñadas hoy (Flex 1D, Grid básico fija, Grid intermedio variable, Grid avanzado areas).

> **Regla de oro de este panel — escribirlo así en el prompt IA:** el alumno NO maneja jerga ("modal", "toolbar", "sidebar", "navbar") porque recién está empezando. Cada caja tiene que comunicar la situación **únicamente con la imagen**. No depender de etiquetas técnicas. Usar logos, colores de marca y mockups lo más fieles posibles al producto real para que el alumno reconozca de un vistazo de qué se trata. Los títulos en castellano simple ("Cuadro de confirmación", "Pantalla de planes", "Catálogo de productos", "Pantalla de Gmail") refuerzan la imagen, no la reemplazan.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior centrado** (negro **_#1e1e1e_**, 40px): "GRID O FLEX — ¿CUÁL USÁS?"
- **Subtítulo** (gris oscuro, 18px): "Mirá la imagen y respondé en el chat — después validamos juntos."
- **Grid de 4 escenarios numerados (2 columnas × 2 filas, cada uno en su caja):**

  **Caja 1 — Numerador "01" grande arriba (rojo **_#e03131_**, 48px):**
  - Título corto en castellano simple (negro, 20px): "Cuadro de confirmación"
  - Mockup principal (debe verse claramente como un diálogo emergente sobre un fondo apenas grisado): rectángulo blanco con sombra, esquinas redondeadas. Arriba un ícono de papelera roja, debajo el texto "¿Eliminar archivo?" en negrita grande, debajo "Esta acción no se puede deshacer" en gris pequeño. **Abajo del cuadro, los 2 botones bien visibles**: "Cancelar" (rectángulo gris claro con texto oscuro) a la izquierda + "Aceptar" (rectángulo azul **_#1971c2_** con texto blanco) a la derecha, ambos alineados al borde derecho del cuadro con un gap entre ellos.
  - Flecha pequeña apuntando a los 2 botones con anotación "👉 ¿estos 2?"

  **Caja 2 — Numerador "02" (azul **_#1971c2_**, 48px):**
  - Título corto: "Pantalla de planes de Spotify"
  - Mockup principal: arriba el **logo de Spotify** (círculo verde **_#1ed760_** con las 3 líneas curvas blancas — reconocible al instante) + texto "Premium" al lado. Debajo, 3 cards lado a lado, cada una con: nombre del plan grande arriba ("Free" / "Premium" / "Familiar"), precio simulado ("$0 / mes", "$5.99 / mes", "$8.99 / mes"), 3-4 líneas grises debajo simulando features, y un botón verde abajo ("Empezar" / "Suscribirse" / "Probar gratis"). Las 3 cards visualmente idénticas en tamaño y estilo.
  - Anotación pequeña al pie: "Siempre 3 planes — nunca cambia"

  **Caja 3 — Numerador "03" (verde **_#2f9e44_**, 48px):**
  - Título corto: "Catálogo de productos — Mercado Libre"
  - Mockup principal: arriba el **logo de Mercado Libre** (rectángulo amarillo **_#fff159_** con apretón de manos en azul — reconocible al instante) + una barra de búsqueda simulada con texto "celular". Debajo, una grilla de ~9 cards de producto pequeñas en formato 3×3: cada card con un cuadrito gris arriba (imagen), un precio en verde abajo ("$ 1.299"), una línea de título y un envío "Llega gratis". Cards uniformes en tamaño.
  - Anotación pequeña: "Hoy 24 productos · mañana 200 · pasado mañana 5"

  **Caja 4 — Numerador "04" (naranja **_#f08c00_**, 48px):**
  - Título corto: "Pantalla de Gmail"
  - Mockup principal: arriba una barra blanca con el **logo de Gmail** (la M de colores rojo/amarillo/verde/azul — reconocible al instante) + barra de búsqueda al medio + un avatar circular a la derecha. A la izquierda, una columna angosta con: botón rojo "Redactar" arriba, después lista vertical de carpetas ("Recibidos 24", "Destacados", "Enviados", "Borradores"). Al centro-derecha, área grande con lista de correos (4-5 filas, cada una con avatar circular pequeño + nombre del remitente + asunto + fecha a la derecha). Las 4 zonas (barra arriba, columna izquierda, lista al centro, ancho completo abajo) visualmente delimitadas.
  - Anotación pequeña apuntando a las zonas: "4 zonas, todas visibles al mismo tiempo"

- **Nota inferior al ancho completo** (gris oscuro, 16px): "💬 Mirá la imagen, no hay respuesta mala — razonen con criterio. Después de cada caja, validamos juntos."

**Anchor pedagógico:** el formato "Verdad o Mito" aplicado a Grid vs Flex. **La regla fundamental del panel es que la imagen reemplaza la palabra técnica** — el alumno no necesita saber qué es un "modal" o un "sidebar" para responder; mira el mockup, reconoce el producto (Spotify, Mercado Libre, Gmail son universales) y razona. Eric apunta físicamente al wireframe correspondiente al presentar cada situación. Las 4 situaciones cubren exactamente las 4 herramientas enseñadas, en orden de complejidad creciente (Flex → Grid básico → Grid auto-fit → Grid areas). Ninguna es del lab del día — el alumno tiene que **transferir** el criterio aprendido a contextos nuevos.

**Notas para Eric:** este Panel es el **único Excalidraw del M5** y el cierre interactivo de la clase. Los sub-puntos 5.2 (logros adicionales) y 5.3 (commit + GitHub Pages + puente a C04) son rápidos y no requieren Excalidraw. **Patrón importado de Clase 08 V2 de C101** ("5 mitos de la IA") adaptado a Grid vs Flex: en lugar de presentar una tabla, presentás situaciones y el alumno aplica criterio. Más memorable que una tabla dictada. La tabla resumen aparece en el guion (markdown) al final como referencia visual, pero no es el centro pedagógico — el centro es la discusión interactiva.