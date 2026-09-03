# Guía Excalidraw — CLASE 02: CSS Layout con Flexbox

> **Estado del archivo:** En construcción
> **Layout sugerido:** Timeline horizontal (la clase tiene 5 momentos secuenciales; M2 es el primero con Paneles Excalidraw)
> **Paneles totales (esperados):** 7 al cerrar M4 — 3 en M2 (box-sizing, modelo Flexbox, anatomía 4 verbos), 3 en M3 (flex-grow, flex-wrap, flex-basis, uno por cada propiedad), 1 en M4 (anatomía @media + 3 breakpoints). M5 es cierre + commit, no requiere Excalidraw.
> **Última actualización:** Momento 4 cerrado (Capa 2+3 — pendiente revisión de Eric) — M3.2 reestructurado por separación de **_flex-wrap_** y **_flex-basis_** en sub-puntos independientes con Panel propio

---

## Momento 2: Normalización + Flexbox completo aplicado al landing

> **Estado:** Borrador
> **Paneles del Momento:** 3

---

### Panel 2.1 — **_box-sizing_**: **_content-box_** vs **_border-box_**

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Patrón 3 (Comparativa X vs Y): box-sizing en sus dos modos lado a lado. A la izquierda content-box (default), a la derecha border-box. Misma declaración en ambos: width: 200px + padding: 20px + border: 5px. Lado izquierdo: el ancho real es 250px (todo se suma por fuera). Lado derecho: el ancho real es 200px exactos (padding y border van por dentro). Fórmulas visibles arriba de cada caja.**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón canónico de referencia:** Patrón 3 (Comparativa X vs Y) — dos columnas paralelas sin divisor central, separación por proximidad espacial
- **Concepto pedagógico que visualiza:** la diferencia de cálculo de ancho real entre los dos modos de **_box-sizing_**, mostrando el mismo conjunto de declaraciones CSS y los dos resultados distintos en pantalla. Eric usa este Panel justo antes del code-along del reset universal — el alumno entra al **_box-sizing: border-box_** del lab habiendo visto por qué importa.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro `#1e1e1e`, 36px): "BOX-SIZING: CONTENT-BOX vs BORDER-BOX"
- **Subtítulo** (gris oscuro, 20px): "Mismo CSS declarado, dos formas distintas de calcular el ancho real."
- **Dos columnas paralelas, sin línea divisoria entre ellas (separación por proximidad espacial):**

  **Columna izquierda — CONTENT-BOX (default del navegador):**
  - Encabezado (rojo `#e03131`, 28px): "CONTENT-BOX (default)"
  - Bloque de CSS declarado (monospace, azul `#1971c2`, fondo blanco con borde gris claro):
    ```css
    width: 200px;
    padding: 20px;
    border: 5px solid;
    ```
  - Diagrama de la caja (debajo del CSS):
    - Rectángulo exterior (borde rojo `#e03131`, strokeWidth 3) — representa el ancho REAL del elemento.
    - Rectángulo intermedio (relleno suave `#ffd8a8`, padding) — representa el padding.
    - Rectángulo interior (relleno gris muy claro, contenido) — representa el espacio del contenido (200px).
    - Anotaciones laterales con líneas/llaves indicando: borde 5px, padding 20px, contenido 200px.
  - Fórmula visible debajo (negro `#1e1e1e`, 20px, monospace para los números):
    ```
    Ancho real = 200 + 20 + 20 + 5 + 5 = 250 px
                 (contenido + padding L+R + border L+R)
    ```
  - Etiqueta de cierre (rojo `#e03131`, 18px): "El padding y el border SE SUMAN por fuera"

  **Columna derecha — BORDER-BOX:**
  - Encabezado (verde `#2f9e44`, 28px): "BORDER-BOX (lo que usamos)"
  - Bloque de CSS declarado (monospace, azul `#1971c2`, fondo blanco con borde gris claro):
    ```css
    width: 200px;
    padding: 20px;
    border: 5px solid;
    box-sizing: border-box;
    ```
  - Diagrama de la caja (debajo del CSS) — del MISMO tamaño exterior que el de content-box pero etiquetado distinto:
    - Rectángulo exterior (borde verde `#2f9e44`, strokeWidth 3) — representa el ancho REAL del elemento (200px exactos).
    - Rectángulo intermedio (relleno suave `#b2f2bb`, padding) — adentro del exterior.
    - Rectángulo interior (relleno gris muy claro, contenido) — más pequeño que el de content-box porque el padding y border le restan.
    - Anotaciones laterales con líneas/llaves indicando: borde 5px (adentro), padding 20px (adentro), contenido 150px (lo que sobra).
  - Fórmula visible debajo (negro `#1e1e1e`, 20px, monospace para los números):
    ```
    Ancho real = 200 px (declarado)
    Contenido interno = 200 − 20 − 20 − 5 − 5 = 150 px
    ```
  - Etiqueta de cierre (verde `#2f9e44`, 18px): "El padding y el border SE INCLUYEN por dentro"

- **Nota inferior (cierre del panel, ancho completo, negro `#1e1e1e`, 16px):**
  > "Por eso el reset universal usa **_box-sizing: border-box_**: lo que declaras es lo que ocupa en pantalla. Sin **_border-box_**, los **_gap_** de Flexbox y los porcentajes en breakpoints desbordan el contenedor."

**Anchor pedagógico:** Patrón 3 (Comparativa) es el patrón natural cuando hay que mostrar la misma declaración produciendo dos resultados distintos. Imagen-slide en lugar de hand-drawn porque (1) el contenido es estático y denso, (2) requiere precisión visual en las cajas y fórmulas, (3) la calidad tipográfica de una infografía IA supera al hand-drawn para mostrar bloques de código + diagramas geométricos en paralelo.

**Notas para Eric:** este Panel se proyecta justo después de la teoría del reset (bloque "Tu explicación teórica precisa") y antes del code-along en VS Code. El alumno lo mira mientras Eric narra la diferencia. Sin este Panel, la diferencia se queda en palabras — el alumno no la ve. Si en M3.2 (grilla de tarjetas con **_flex-basis_** + porcentajes) algún alumno tiene desbordamientos, este Panel se puede volver a referenciar como ancla: "¿se acuerdan del Panel del **_box-sizing_** en M2.1? Esto es exactamente eso."

---

### Panel 2.2 — El modelo Flexbox: contenedor, ítems y ejes

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Patrón 2 (Caja de definición) + Patrón 1 (Anatomía de sintaxis): el modelo Flexbox dibujado en dos paneles. Panel A muestra un contenedor con 3 cajas adentro + flechas rotuladas main axis (horizontal) y cross axis (vertical). Panel B muestra el bloque CSS de los 4 verbos con flechas a etiquetas: "activa el modelo", "separa ítems", "distribuye en main axis", "alinea en cross axis".**`
- **Tipo:** Hand-drawn
- **Patrón canónico:** Patrón 2 (Caja de definición) extendido con diagrama visual de contenedor + ejes
- **Concepto pedagógico que visualiza:** Eric introduce el modelo Flexbox por primera vez en la clase. El Panel resuelve tres preguntas que el alumno debe responderse en los próximos 60 minutos: (1) ¿qué es un flex container vs un flex item? (2) ¿qué son main axis y cross axis y cómo se relacionan? (3) ¿qué propiedad cambia la dirección del main axis (**_flex-direction_**)?

**Contenido del panel:**

- **Título** (rojo `#e03131`, 36px): "EL MODELO FLEXBOX"
- **Subtítulo / definición** (negro `#1e1e1e`, 20px): "Distribuye elementos en una sola dirección a la vez — horizontal o vertical."
- **Diagrama central — contenedor con ítems:**
  - Rectángulo grande (contenedor): stroke `#1971c2` (azul = sintaxis/estructura), fill transparente, ~600×200 px, roundness 3.
  - Etiqueta arriba del rectángulo (azul `#1971c2`, 20px): `display: flex` (escrito en monoespacio).
  - Etiqueta abajo del rectángulo (azul `#1971c2`, 16px): "Flex container (padre)".
  - 3 rectángulos adentro (flex items): stroke `#2f9e44` (verde = ítem/hijo), fill transparente, ~120×100 px cada uno, separados con espacio uniforme.
  - Etiquetas en cada ítem (verde `#2f9e44`, 16px): "ítem 1", "ítem 2", "ítem 3".
  - Etiqueta abajo de la fila de ítems (verde `#2f9e44`, 16px): "Flex items (hijos directos)".
- **Diagrama de ejes (debajo del diagrama del contenedor):**
  - Flecha horizontal larga (negra `#1e1e1e`, strokeWidth 2): de izquierda a derecha, paralela a la fila de ítems.
  - Etiqueta sobre la flecha (naranja `#f08c00`, 20px): "main axis (horizontal por default — **_flex-direction: row_**)".
  - Flecha vertical corta (negra `#1e1e1e`, strokeWidth 2): de arriba hacia abajo, perpendicular a la flecha horizontal.
  - Etiqueta a la derecha de la flecha vertical (naranja `#f08c00`, 20px): "cross axis (perpendicular)".
- **Anotación lateral derecha (negro `#1e1e1e`, 16px):**
  - "Si **_flex-direction: column_** → ejes intercambian:"
  - "main axis = vertical"
  - "cross axis = horizontal"
- **Flechas / relaciones:** las flechas de ejes salen del centro del contenedor y se proyectan hacia afuera; sin binding (flotantes intencionales para no chocar con los ítems).
- **Snippets de código:** ninguno en este Panel (el bloque CSS va en el Panel 2.2).

**Anchor pedagógico:** Patrón 2 modificado porque el alumno necesita ver simultáneamente la relación padre-hijo Y los dos ejes — son dos conceptos que se aprenden juntos. Una caja de definición pura (Patrón 2 estándar) no muestra los ejes; un Patrón 5 (flujo) no aplica porque no es decisión. Mixto entre Patrón 2 y un diagrama de ejes propio.

**Notas para Eric:** la dinámica de M2.2 sugiere que este Panel se proyecta al inicio del sub-punto (antes del code-along), se narra durante la teoría, y queda visible en pantalla durante la pregunta de calibración ("Si tengo un header → nav → 3 enlaces…"). Eric puede señalar el padre vs los hijos con el cursor en vivo. Si Eric prefiere dibujar los ejes en vivo en lugar de pre-dibujarlos, cambiar Tipo a "Hand-drawn en vivo" y dejar solo el contenedor + ítems pre-dibujados.

---

### Panel 2.3 — Anatomía de los 4 verbos esenciales de Flexbox

- **Trigger en el guion:** mismo bloque EN PANTALLA del Panel 2.2 (los dos Paneles aparecen en el mismo bloque del guion en sub-punto 2.2). En la práctica, Eric proyecta primero el Panel 2.2 (el modelo) y después navega/scrollea al Panel 2.3 (los 4 verbos en sintaxis).
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de sintaxis) — código central con flechas a etiquetas descriptivas a la derecha
- **Concepto pedagógico que visualiza:** los 4 verbos esenciales que el alumno va a usar todo el resto de la clase, mostrados como un bloque CSS real con flechas que apuntan a cada propiedad y la describen en una frase. Es la "tabla de referencia" visual del momento — el alumno la mira mientras hace el code-along en 2.2, 2.3, 2.4, 2.5 y 2.6.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro `#1e1e1e`, 36px): "LOS 4 VERBOS ESENCIALES DE FLEXBOX"
- **Subtítulo** (gris oscuro, 20px): "Las únicas 4 propiedades que vas a usar hoy en cada code-along."
- **Bloque de código central** (monospace, tipografía técnica, fondo blanco con leve borde gris):
  ```css
  header nav {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
  }
  ```
- **Flechas con etiquetas (cada una en color distinto, sale del término correspondiente del código hacia la derecha):**
  - Flecha azul `#1971c2` desde `display: flex` → "Activa el modelo en el contenedor. Sin esto, **_gap_** y **_justify-content_** no funcionan."
  - Flecha naranja `#f08c00` desde `gap: 1rem` → "Separa los ítems entre sí. Reemplaza el viejo **_margin_** en hijos."
  - Flecha verde `#2f9e44` desde `justify-content: space-between` → "Distribuye sobre el **main axis** (horizontal por default). Otros valores: `flex-start`, `center`, `space-around`."
  - Flecha roja `#e03131` desde `align-items: center` → "Alinea sobre el **cross axis** (perpendicular). Otros valores: `flex-start`, `flex-end`, `stretch`."
- **Recordatorio inferior** (negro `#1e1e1e`, 16px): "Las 4 propiedades viven en el **contenedor**, no en los ítems. Los hijos heredan el comportamiento del padre."
- **Activos visuales adicionales:** ninguno (Panel autocontenido).

**Anchor pedagógico:** este Panel es referencia visual estable — el alumno lo mira en el screen mientras escribe el CSS del nav. Imagen-slide en lugar de hand-drawn porque (1) el contenido es estático y denso, (2) Eric no lo construye en vivo — lo proyecta como referencia, (3) la calidad tipográfica de una infografía IA supera al hand-drawn para anatomía de sintaxis.

**Notas para Eric:** el bloque de código del Panel debe ser EXACTAMENTE el que va a escribir en el code-along (selector **_header nav_** + las 4 propiedades del lab) — eso ancla visualmente lo que Eric escribe con lo que el alumno ve en pantalla. Si el lab cambia su selector o sus valores, este Panel se regenera. El prompt IA que `excalidraw-system` produzca debe respetar las 4 etiquetas literalmente entre comillas.

---

## Momento 3: La tríada del ítem — **_flex-grow_**, **_flex-basis_**, **_flex-wrap_**

> **Estado:** Borrador
> **Paneles del Momento:** 3 (uno por cada propiedad, explicadas por separado)

---

### Panel 3.1 — **_flex-grow_** en acción: el ítem que absorbe el espacio sobrante

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Patrón 2 + visualización de flex-grow en acción: un contenedor con 4 ítems donde el primero (logo) tiene flex-grow: 1 y los otros tienen el default 0. Visualmente el logo absorbe todo el espacio sobrante; los otros tres quedan pegados al borde derecho.**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón canónico de referencia:** Patrón 2 (Caja de definición) + visualización del comportamiento — caja con definición arriba, diagrama con el efecto visual abajo
- **Concepto pedagógico que visualiza:** **_flex-grow_** es la primera propiedad del **ítem** (no del contenedor) que el alumno aprende. El Panel muestra simultáneamente la regla y su consecuencia visual: con un solo ítem en **_flex-grow: 1_**, ese ítem absorbe todo el espacio libre y empuja a los demás al borde opuesto. Es el patrón de navbar estándar (logo a la izquierda, menú a la derecha).

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro `#1e1e1e`, 36px): "FLEX-GROW: EL ÍTEM QUE SE ESTIRA"
- **Subtítulo / definición** (negro `#1e1e1e`, 20px): "Propiedad del **ítem**. Define cuánto del espacio sobrante absorbe ese ítem."
- **Bloque de regla** (centrado, recuadro con borde naranja `#f08c00`):
  - "Default: **_flex-grow: 0_** (no crece)"
  - "Si solo UN ítem tiene **_flex-grow: 1_** → absorbe TODO el espacio libre"
  - "Si DOS ítems tienen **_flex-grow: 1_** → se reparten el espacio en partes iguales"
- **Diagrama central — antes/después aplicado al nav del lab:**

  **Estado 1 — Sin flex-grow (default):**
  - Encabezado pequeño (gris oscuro, 16px): "Sin **_flex-grow_** — los 4 enlaces al mismo nivel:"
  - Rectángulo contenedor (borde gris claro): 4 sub-rectángulos del MISMO tamaño etiquetados "Mi Producto" (logo), "Inicio", "Producto", "Contacto", distribuidos por **_space-between_**.

  **Estado 2 — Con flex-grow: 1 en el logo:**
  - Encabezado pequeño (gris oscuro, 16px): "Con **_flex-grow: 1_** solo en **_.logo_** — el logo empuja al menú:"
  - Rectángulo contenedor (borde gris claro): mismo ancho que arriba. El primer rectángulo (logo) es ANCHO — ocupa más de la mitad del contenedor. Los otros tres ("Inicio", "Producto", "Contacto") quedan apretados al borde derecho, todos pequeños.
  - Flecha curva o anotación apuntando al logo (naranja `#f08c00`, 16px): "**_flex-grow: 1_** → absorbe todo el espacio libre"

- **Bloque CSS de referencia** (debajo del diagrama, monospace, azul `#1971c2`):
  ```css
  header nav .logo {
    flex-grow: 1;
  }
  ```
- **Nota inferior** (negro `#1e1e1e`, 16px): "Patrón estándar de navbars en producción: GitHub, Notion, Spotify. Logo a la izquierda, menú a la derecha — siempre con **_flex-grow_** en el logo."

**Anchor pedagógico:** la regla **_flex-grow_** es conceptualmente simple pero su efecto solo se entiende viendo el "antes/después". Patrón 2 (definición) por sí solo no muestra el efecto; un Patrón 3 (comparativa) puro no muestra la regla. La combinación definición arriba + comparativa visual abajo es lo que fija el concepto. Imagen-slide en lugar de hand-drawn por la precisión geométrica que requiere mostrar dos contenedores idénticos con distribuciones distintas.

**Notas para Eric:** este Panel se proyecta antes del code-along de 3.1. El alumno lo mira mientras Eric narra la teoría. Después, en el code-along, el alumno escribe **_flex-grow: 1_** en su CSS y ve en su navegador exactamente lo que el Panel mostró. Si en M3.2 (grilla de tarjetas) algún alumno pregunta "¿por qué les puse **_flex-grow: 1_** también a las tarjetas?", referenciar este Panel — la respuesta es la misma: que las tarjetas absorban el espacio sobrante de su fila.

---

### Panel 3.2 — **_flex-wrap_**: una sola línea vs varias líneas

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Patrón 2 (Caja de definición) + visualización antes/después: un contenedor angosto con 5 ítems. Estado A — flex-wrap: nowrap (default): los 5 ítems se aplastan en una sola línea, comprimiéndose. Estado B — flex-wrap: wrap: los ítems que no caben bajan a una nueva línea (3 arriba, 2 abajo).**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón canónico de referencia:** Patrón 2 (Caja de definición) + visualización antes/después — definición arriba, dos estados visuales abajo
- **Concepto pedagógico que visualiza:** **_flex-wrap_** es la propiedad que el alumno NO usó en M2 (porque el nav siempre cabía). Ahora la necesita para que las tarjetas puedan bajar de línea cuando la pantalla se achica. El Panel muestra el "antes y después" de cambiar **_nowrap_** a **_wrap_** con un mismo contenedor angosto y los mismos 5 ítems — visualmente clarísimo el efecto.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro `#1e1e1e`, 36px): "FLEX-WRAP: ¿LOS ÍTEMS PUEDEN BAJAR A LÍNEA NUEVA?"
- **Subtítulo / definición** (negro `#1e1e1e`, 20px): "Propiedad del **contenedor**. Decide si los ítems se acomodan en una sola línea o saltan a una nueva cuando no caben."
- **Bloque de valores** (centrado, recuadro con borde naranja `#f08c00`):
  - "**_nowrap_** (default) → una sola línea, los ítems se aplastan si no caben"
  - "**_wrap_** → los ítems que no caben bajan a una nueva línea"
  - "**_wrap-reverse_** → igual que **_wrap_**, en dirección inversa (raro)"
- **Diagrama central — antes/después (dos contenedores idénticos lado a lado):**

  **Estado A — flex-wrap: nowrap (default):**
  - Encabezado pequeño (rojo `#e03131`, 16px): "Sin **_flex-wrap_** — los 5 ítems aplastados en una línea:"
  - Contenedor rectangular angosto (borde gris). Adentro 5 sub-rectángulos comprimidos en una sola fila — angostos, casi tocándose. Etiqueta lateral: "Los ítems pierden ancho mínimo, el contenido se aplasta."

  **Estado B — flex-wrap: wrap:**
  - Encabezado pequeño (verde `#2f9e44`, 16px): "Con **_flex-wrap: wrap_** — los que no caben bajan:"
  - Contenedor rectangular angosto del MISMO ancho que el de la izquierda. Adentro 3 sub-rectángulos en la primera fila (a su tamaño cómodo), 2 sub-rectángulos en la segunda fila. Etiqueta lateral: "Cada ítem mantiene su tamaño; la fila se reorganiza sola."

- **Bloque CSS de referencia** (debajo de los dos estados, monospace, azul `#1971c2`):
  ```css
  .cards {
    display: flex;
    flex-wrap: wrap;
  }
  ```
- **Nota inferior** (negro `#1e1e1e`, 16px): "Por default es **_nowrap_**. Para responsividad, casi siempre lo cambias a **_wrap_**."

**Anchor pedagógico:** Patrón 2 (definición) combinado con comparativa visual (Patrón 3) porque la propiedad solo tiene sentido viendo el "antes" (aplastado) y el "después" (acomodado en varias líneas). Imagen-slide en lugar de hand-drawn por la precisión geométrica de mostrar dos contenedores idénticos con distribuciones distintas.

**Notas para Eric:** este Panel se proyecta antes del code-along de 3.4 (la grilla combinada). Junto al Panel 3.3 (**_flex-basis_**), forman el par teórico que el alumno necesita antes de combinar las propiedades. Si Eric quiere reforzar la separación entre "propiedad del contenedor" y "propiedad del ítem", remarcar verbalmente que **_flex-wrap_** es la única de la tríada que va en el contenedor — las otras dos viven en el ítem.

---

### Panel 3.3 — **_flex-basis_**: el tamaño base del ítem

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Patrón 2 (Caja de definición) + visualización del comportamiento: 3 ítems con flex-basis: 280px dentro de un contenedor de 900px de ancho (caben los 3); el mismo contenedor a 600px de ancho (caben 2, el tercero baja gracias a flex-wrap: wrap); el mismo contenedor a 320px (cabe 1 por fila).**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón canónico de referencia:** Patrón 2 (Caja de definición) + visualización del comportamiento en 3 anchos de contenedor — definición arriba, 3 mini-diagramas abajo
- **Concepto pedagógico que visualiza:** **_flex-basis_** es la propiedad que el alumno necesita para fijar el "tamaño deseado" de cada tarjeta. Combinado con **_flex-wrap: wrap_** (Panel 3.2), produce el comportamiento responsivo natural — la grilla cambia el número de columnas según el ancho del contenedor. El Panel muestra el efecto numérico explícito: a 900px caben 3 ítems de 280px; a 600px caben 2; a 320px cabe 1.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro `#1e1e1e`, 36px): "FLEX-BASIS: EL TAMAÑO BASE DEL ÍTEM"
- **Subtítulo / definición** (negro `#1e1e1e`, 20px): "Propiedad del **ítem**. Define el tamaño inicial del ítem ANTES de que **_flex-grow_** lo estire o **_flex-wrap_** lo mueva de línea."
- **Bloque de regla** (centrado, recuadro con borde verde `#2f9e44`):
  - "Funciona como **_width_** dentro del flex container."
  - "Ejemplo: **_flex-basis: 280px_** → el ítem arranca midiendo 280px."
  - "Si el contenedor no tiene espacio para todos los ítems a su **_flex-basis_**, **_flex-wrap_** decide qué hacer."
- **Diagrama central — el mismo CSS en 3 anchos de contenedor:**

  **Estado A — Contenedor de 900px:**
  - Rectángulo contenedor ancho (borde gris claro) con label de ancho "900px".
  - Adentro: 3 ítems verdes de 280px cada uno, equiespaciados en una fila.
  - Cálculo visible debajo (monospace, 16px): "3 × 280px = 840px + gaps → CABEN los 3 en una fila."

  **Estado B — Contenedor de 600px:**
  - Rectángulo contenedor medio (borde gris claro) con label de ancho "600px".
  - Adentro: 2 ítems verdes de 280px en la primera fila, 1 ítem verde estirado en la segunda fila.
  - Cálculo visible debajo (monospace, 16px): "2 × 280px = 560px + gap → caben 2; el tercero baja por **_flex-wrap_**."

  **Estado C — Contenedor de 320px:**
  - Rectángulo contenedor angosto (borde gris claro) con label de ancho "320px".
  - Adentro: 3 ítems verdes apilados verticalmente, cada uno al ancho del contenedor.
  - Cálculo visible debajo (monospace, 16px): "1 × 280px = 280px → cabe solo 1 por fila."

- **Bloque CSS de referencia** (debajo de los 3 estados, monospace, azul `#1971c2`):
  ```css
  .card {
    flex-basis: 280px;
  }
  ```
- **Nota inferior** (negro `#1e1e1e`, 16px): "**_flex-basis_** marca el tamaño deseado. **_flex-wrap_** decide si los que no caben bajan. **_flex-grow_** estira los que quedan."

**Anchor pedagógico:** **_flex-basis_** se entiende viendo cómo el MISMO valor (280px) produce 3 layouts distintos según el ancho del contenedor. Sin la visualización numérica explícita (3, 2, 1 ítems por fila), el alumno tarda en conectar el "tamaño base" con el comportamiento responsivo. Imagen-slide por la precisión que requiere mostrar 3 contenedores a escala con el mismo CSS adentro.

**Notas para Eric:** este Panel cierra la teoría de la tríada — al pasar a 3.4, el alumno ya entiende los 3 ingredientes y solo le falta combinarlos en el code-along del lab. El bloque CSS del Panel (**_flex-basis: 280px_**) es exactamente el valor que va a escribir en el code-along; eso ancla el ejemplo del Panel con la práctica.

---

## Momento 4: Galería + responsividad mobile-first

> **Estado:** Borrador
> **Paneles del Momento:** 1

---

### Panel 4.1 — **_@media (min-width)_**: anatomía + comportamiento en los 3 breakpoints

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Patrón 1 (Anatomía de sintaxis) + secuencia de 3 estados: anatomía de @media (min-width) con flechas a sus partes, y al lado el comportamiento de la galería en los 3 breakpoints (móvil 1 columna, tablet 2 columnas, desktop 4 columnas).**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para acomodar anatomía + 3 viewports + sus reglas)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de sintaxis) en la mitad izquierda + secuencia visual de 3 estados (Patrón 4 / dispositivos) en la mitad derecha
- **Concepto pedagógico que visualiza:** las **_@media queries_** son la primera vez que el alumno escribe CSS condicional. El Panel resuelve dos preguntas en un solo lienzo: (1) ¿cómo se escribe una **_@media query_** y qué significa cada parte de su sintaxis? (2) ¿qué se ve en pantalla en cada uno de los 3 breakpoints del lab? Sin este Panel, la sintaxis se ve abstracta y el comportamiento se ve solo al redimensionar la ventana en 4.3 — el Panel los conecta antes de escribir código.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro `#1e1e1e`, 36px): "MEDIA QUERIES MOBILE-FIRST: @MEDIA (MIN-WIDTH)"
- **Subtítulo** (gris oscuro, 20px): "CSS condicional: estos estilos aplican solo cuando la pantalla cumple la condición."
- **Layout en dos columnas:**

  **Columna izquierda — Anatomía de la sintaxis (Patrón 1):**
  - Bloque de código central (monospace, azul `#1971c2`, fondo blanco con borde gris):
    ```css
    @media (min-width: 640px) {
      .galeria img {
        width: 48%;
      }
    }
    ```
  - Flechas con etiquetas (cada una en color funcional, sale del término del código hacia la derecha):
    - Flecha roja `#e03131` desde **_@media_** → "Palabra clave que abre un bloque de CSS condicional."
    - Flecha naranja `#f08c00` desde **_(min-width: 640px)_** → "Condición: aplica los estilos de adentro cuando el viewport mide AL MENOS 640px."
    - Flecha azul `#1971c2` desde el bloque **_{ ... }_** → "Estilos que se aplican solo si la condición se cumple. Aquí dentro: cualquier regla CSS normal."
  - Nota debajo (negro `#1e1e1e`, 16px): "**Mobile-first siempre usa **_min-width_**.** Nunca **_max-width_** (eso es desktop-first)."

  **Columna derecha — Los 3 breakpoints del lab (secuencia visual):**

  **Estado A — Móvil (<640px):**
  - Pequeño dispositivo móvil (rectángulo angosto con marco gris).
  - Adentro: 4 imágenes verdes APILADAS verticalmente (1 columna).
  - Etiqueta lateral (negro 16px): "**1 columna** — solo CSS base. Ninguna media query aplica."

  **Estado B — Tablet (640–1023px):**
  - Dispositivo tablet (rectángulo medio con marco gris).
  - Adentro: 4 imágenes verdes en 2 filas de 2 columnas.
  - Etiqueta lateral (negro 16px): "**2 columnas** — primer **_@media_** activo: **_.galeria img { width: 48% }_**."

  **Estado C — Escritorio (≥1024px):**
  - Dispositivo desktop (rectángulo ancho con marco gris).
  - Adentro: 4 imágenes verdes en 1 fila de 4 columnas. Arriba del rectángulo: indicador de hero LADO A LADO (texto a la izquierda, imagen a la derecha).
  - Etiqueta lateral (negro 16px): "**4 columnas** + hero horizontal — segundo **_@media_** activo: **_.galeria img { width: 23% }_** + **_#hero { flex-direction: row }_**."

- **Nota inferior** (negro `#1e1e1e`, 16px): "Los estilos base son móvil. Las **_@media queries_** **agregan** cosas al crecer la pantalla. Nunca **quitan**."

**Anchor pedagógico:** la primera vez que el alumno escribe CSS condicional. Si solo se enseña la sintaxis (Patrón 1 puro), el alumno entiende cómo se escribe pero no qué pasa en pantalla. Si solo se enseña el comportamiento (3 viewports), el alumno ve qué pasa pero no por qué. La combinación de ambos en un Panel le permite escribir el code-along de 4.2 con la regla de cada **_@media_** ya conectada a su efecto visual. Imagen-slide porque la precisión geométrica (3 dispositivos a escala, anatomía con flechas) requiere render limpio.

**Notas para Eric:** este Panel se proyecta antes del code-along de 4.2 y queda visible durante toda la escritura del code-along. En 4.3 (verificación en DevTools), el alumno compara lo que ve en su navegador con los 3 estados del Panel — funciona como tabla de respuesta esperada. Si en una clase futura Eric agrega más breakpoints (ej: smartwatch, large desktop), el Panel se expande con más estados manteniendo la misma estructura visual.
