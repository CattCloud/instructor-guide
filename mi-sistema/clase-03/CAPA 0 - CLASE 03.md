# CAPA 0 — CLASE 03: CSS Grid (esencial, intermedio y `grid-template-areas`)

> **Fuentes:** **_code201/class-03/README.md_** · **_code201/class-03/lab/README.md_** · **_code201/class-03/slides/README.md_**
> **Módulo:** M1 — Clase 3 de 4
> **Proyecto víctima:** Landing page del producto — pasa de **_index.html_** único a 3 páginas (**_index.html_**, **_precios.html_**, **_faq.html_**). El nav del **_index.html_** se actualiza para apuntar a las 3 páginas reales y el último enlace (FAQ) se reemplaza por un **icono SVG con _aria-label_** (patrón moderno para enlaces utilitarios).
> **Continuidad con C02:** se hereda normalización CSS, **_box-sizing: border-box_**, breakpoints mobile-first 640/1024, estilos del nav y footer. Hoy se agrega solo CSS nuevo de Grid.

---

## BLOQUE 0 — PREREQUISITO: ENLACES MULTI-PÁGINA Y RUTAS RELATIVAS

*(Antes de Grid: el alumno hoy convierte su landing de 1 archivo a 3 páginas. Necesita entender cómo se enlazan archivos HTML entre sí dentro de un mismo proyecto.)*

---

### CONCEPTO: Ruta relativa

Forma de declarar un enlace **_&lt;a href="..."&gt;_** que apunta a un archivo del mismo proyecto, sin URL completa (sin **_http://..._**, sin dominio). El navegador resuelve la ruta tomando como referencia la ubicación del archivo HTML actual.

**Sintaxis general:**
```html
<a href="<ruta-al-archivo>">Texto visible del enlace</a>
```

**Fórmula:**
- **_href="precios.html"_** → archivo en la **misma carpeta** que el HTML actual.
- **_href="../index.html"_** → archivo en la carpeta **padre**.
- **_href="img/logo.svg"_** → archivo en la sub-carpeta **_img/_** dentro de la carpeta actual.

**Dependencia técnica:** la ruta se calcula desde la posición física del archivo HTML que contiene el enlace, no desde la raíz del proyecto. Si el archivo se mueve a otra carpeta, los enlaces relativos se rompen.

### ANALOGÍA: Direcciones dentro de un edificio

Una ruta relativa es como decir "el departamento de al lado" o "el piso de arriba". Tiene sentido solo si conocés tu propia posición de partida. Una URL completa con dominio sería "Av. Larco 123, Lima, Perú" — funciona desde cualquier lado.

### ESTRATEGIA VISUAL: VS Code con árbol de archivos visible

Mostrar el panel Explorer de VS Code con el árbol del proyecto (**_index.html_**, **_precios.html_**, **_faq.html_** al mismo nivel, sub-carpeta **_img/_** adentro). Recorrer los 3 enlaces del nav y mostrar a qué archivo del árbol apunta cada uno.

---

### CONCEPTO: Anchor / Ancla (**_href="#id"_**)

Tipo de enlace que **no carga otra página** sino que hace scroll a una sección de la página actual, identificada por el **_id_** que se le pasa después del **_#_**.

**Sintaxis general:**
```html
<!-- Destino: cualquier elemento con id -->
<elemento id="<nombre-id>"> ... </elemento>

<!-- Enlace que apunta al destino -->
<a href="#<nombre-id>">Texto del enlace</a>
```

**Fórmula:**
- **_&lt;section id="contacto"&gt;_** en el HTML → define el anclaje destino.
- **_&lt;a href="#contacto"&gt;_** → al hacer click, scrollea hasta esa sección.

**Dependencia técnica:** el **_id_** debe ser único en la página y coincidir exactamente con el valor después del **_#_** (sensible a mayúsculas).

### ESTRATEGIA VISUAL: Demo en vivo en el navegador

Mostrar el landing del alumno con su sección **_#contacto_** al final. Hacer click en el enlace del nav y mostrar el scroll automático hasta la sección. Si está, mostrar también que la URL del navegador agrega **_#contacto_** al final — eso es lo que permite compartir un link directo a la sección.

---

### CONCEPTO: Ruta relativa + anchor combinados (**_href="archivo.html#id"_**)

Forma de enlazar a una sección específica de **otra página** del proyecto. El navegador primero carga el archivo, después hace scroll a la sección con el **_id_** indicado.

**Sintaxis general:**
```html
<a href="<archivo>.html#<nombre-id>">Texto del enlace</a>
```

**Fórmula:** **_href="index.html#contacto"_** → carga **_index.html_** y scrollea a la sección **_&lt;section id="contacto"&gt;_**.

**Uso en la clase:** desde **_precios.html_** o **_faq.html_**, el enlace "Contacto" del nav puede ser **_href="index.html#contacto"_** para volver al landing y bajar directo a la sección.

### ESTRATEGIA VISUAL: Demo en vivo desde una página secundaria

Estar parado en **_precios.html_**, hacer click en un enlace **_href="index.html#contacto"_**, mostrar que el navegador cambia de archivo Y scrollea automáticamente.

---

### CONCEPTO: Enlace utilitario con icono SVG + **_aria-label_**

Patrón moderno para enlaces de navegación cuyo significado se comunica con un icono en lugar de texto (FAQ, ayuda, perfil, búsqueda, configuración). El **_&lt;a&gt;_** contiene un **_&lt;img&gt;_** del icono SVG, y se le agrega **_aria-label_** al **_&lt;a&gt;_** para que los lectores de pantalla anuncien qué hace el enlace.

**Sintaxis general:**
```html
<a href="<ruta>" aria-label="<descripción-textual>">
  <img src="<ruta-al-icono>.svg" alt="" width="<px>" height="<px>">
</a>
```

**Fórmula del lab:**
```html
<a href="faq.html" id="icono-faq" aria-label="Preguntas frecuentes">
  <img src="img/faq.svg" alt="" width="24" height="24">
</a>
```

**Regla clave de accesibilidad:** cuando el **_&lt;a&gt;_** ya tiene **_aria-label_** descriptivo, el **_&lt;img&gt;_** adentro lleva **_alt=""_** (vacío). De lo contrario, el lector de pantalla lee el contenido dos veces ("Preguntas frecuentes, Preguntas frecuentes").

**Dependencia técnica:** sin **_aria-label_**, un lector de pantalla solo anuncia "imagen, enlace" — el usuario no sabe a dónde lleva. Con icono visual + **_aria-label_**, el enlace es accesible y compacto al mismo tiempo.

### ETIMOLOGÍA / HISTORIA

**_aria-label_** viene de WAI-ARIA (Web Accessibility Initiative — Accessible Rich Internet Applications), un estándar del W3C para hacer contenido web dinámico accesible a usuarios con discapacidad. Los atributos **_aria-*_** se estandarizaron en 2014 y son el complemento estándar de HTML semántico para casos donde la semántica nativa no alcanza.

### ESTRATEGIA VISUAL: Demo en vivo en DevTools

Inspeccionar el enlace del icono en el navegador. Abrir la pestaña Accessibility de DevTools y mostrar cómo el lector de pantalla anuncia "Preguntas frecuentes, enlace" — no "imagen, enlace". Borrar temporalmente el **_aria-label_**, recargar, mostrar el cambio en la pestaña Accessibility para que el alumno vea el impacto real.

---

## BLOQUE 1 — EL MODELO GRID

---

### CONCEPTO: CSS Grid (Grid Layout)

CSS Grid es un modelo de diseño **bidimensional**: organiza elementos dentro de un contenedor en **filas y columnas simultáneamente**. Se activa en el contenedor con **_display: grid_**. A partir de ese momento, todos los hijos directos del contenedor se convierten en **grid items** y se acomodan según las celdas que el contenedor define.

**Diferencia clave con Flexbox:**
- Flexbox trabaja en **una sola dirección a la vez** (fila o columna). Es unidimensional.
- Grid trabaja en **dos direcciones a la vez** (filas Y columnas). Es bidimensional.

**Dependencia técnica:** la relación padre–hijo es directa, igual que Flexbox. Un contenedor **_display: grid_** controla solo a sus hijos inmediatos; los nietos no se ven afectados (a menos que sean también contenedores grid anidados).

### ANALOGÍA: La hoja cuadriculada del cuaderno

Flexbox es una hoja con renglones horizontales: podés escribir una palabra al lado de otra en la misma línea, o saltar de línea, pero siempre en una sola dirección a la vez. Grid es una hoja **cuadriculada** — definís de antemano cuántas filas y cuántas columnas hay, y colocás cada cosa en la celda que quieras. Podés ocupar una sola celda o varias adyacentes.

### ETIMOLOGÍA / HISTORIA

"Grid" significa rejilla o cuadrícula. CSS Grid Layout se estandarizó en 2017 (Chrome 57, Firefox 52). Fue diseñado para resolver layouts 2D que Flexbox no podía resolver limpio — antes de Grid, los desarrolladores usaban hacks con **_float_** o tablas HTML para forzar layouts en grilla.

### ESTRATEGIA VISUAL: Excalidraw + comparativa Flex vs Grid

Excalidraw que muestre el mismo conjunto de elementos (header, sidebar, main, footer) intentado con Flex (requiere anidar contenedores) vs hecho con Grid (un solo contenedor padre con áreas nombradas). El alumno ve por qué Grid es la herramienta natural cuando el layout es 2D.

---

### CONCEPTO: Grid Container vs Grid Item

Todo en Grid opera sobre la misma jerarquía de dos niveles que Flexbox:

- **Grid Container:** el elemento padre que tiene **_display: grid_**. Aquí van las propiedades que definen la grilla (cuántas columnas, cuántas filas, cómo se llaman las áreas, cuánto espacio entre celdas).
- **Grid Item:** cada hijo directo del contenedor. Hereda el comportamiento del modelo. Opcionalmente, cada ítem puede declarar a qué área de la grilla pertenece (con **_grid-area_**) o saltarse celdas (con **_grid-column-start/end_**, fuera del alcance de hoy).

**Sintaxis general (dónde va cada propiedad):**
```css
.contenedor {
  display: grid;
  /* propiedades del CONTENEDOR */
  grid-template-columns: <valores>;
  grid-template-areas: <strings>;
  gap: <valor>;
}

.contenedor > .hijo {
  /* propiedades del ÍTEM (en cada hijo directo) */
  grid-area: <nombre-area>;
}
```

**Propiedades del contenedor cubiertas hoy:** **_display: grid_**, **_grid-template-columns_**, **_grid-template-areas_**, **_grid-template-rows_**, **_gap_**.

**Propiedades del ítem cubiertas hoy:** **_grid-area_** (asigna el ítem a un área nombrada).

### ESTRATEGIA VISUAL: Excalidraw

Diagrama de dos columnas: izquierda lista las propiedades del **contenedor**, derecha las propiedades del **ítem**. Resaltar con color distinto (azul = contenedor, verde = ítem) cuál propiedad va en qué elemento. Mismo patrón visual que usaron en C02 para el contenedor Flex vs ítem Flex.

---

## BLOQUE 2 — GRID ESENCIAL: COLUMNAS EXPLÍCITAS

---

### CONCEPTO: **_display: grid_**

Propiedad que activa el modelo Grid en un elemento. Después de declararla, los hijos directos del elemento se vuelven **grid items** y empiezan a obedecer las reglas de la grilla que se definan en el contenedor.

**Sintaxis general:**
```css
.contenedor {
  display: grid;
}
```

**Comportamiento por default (sin declarar nada más):**

- Grid crea una **grilla implícita de 1 sola columna** que ocupa el 100% del ancho del contenedor.
- Cada hijo se acomoda en su **propia fila** — Grid genera automáticamente tantas filas implícitas como hijos haya.
- El alto de cada fila se ajusta al contenido del hijo (default **_grid-auto-rows: auto_**).
- Visualmente los hijos quedan **apilados verticalmente**, parecido al flujo normal block — la diferencia se nota recién al agregar **_grid-template-columns_** o **_grid-auto-flow_**.

**Comparativa con _display: flex_ por default (útil para no confundirlos):**

| Modelo | Dirección default | Distribución de hijos |
|---|---|---|
| **_display: flex_** | **_flex-direction: row_** (horizontal) | Hijos en una fila, uno al lado del otro |
| **_display: grid_** | 1 columna implícita | Hijos en columna, uno debajo del otro |

Para que los hijos se vean distribuidos en columnas, hay que declarar **_grid-template-columns_** (siguiente concepto).

**Mobile-first con Grid — un patrón potente:** porque el default es 1 columna, **en móvil basta con declarar _display: grid_** (más **_gap_** para separar las cards). NO hace falta escribir **_grid-template-columns_** en el CSS base. Las media queries de tablet y desktop agregan columnas con **_grid-template-columns_**. Esto hace que Grid sea más natural para mobile-first que Flexbox (que requiere **_flex-direction: column_** explícito en móvil).

### ESTRATEGIA VISUAL: Demo en vivo en navegador

Abrir DevTools modo responsive a ~400px. Mostrar **_.planes_** con solo **_display: grid_** + **_gap_** aplicados (sin **_grid-template-columns_**): las 4 cards apiladas verticalmente, una debajo de otra. Click en el badge "grid" que aparece al lado de **_display: grid_** en el panel Styles para ver las líneas de la grilla: 1 sola columna, 4 filas implícitas. Recién después arrastrar el viewport a 640px+ y agregar **_grid-template-columns: 1fr 1fr_** dentro de un media query para mostrar la transición a 2 columnas.

---

### CONCEPTO: **_grid-template-columns_**

Propiedad del contenedor que declara las **columnas** de la grilla de forma explícita. Recibe una lista de valores separados por espacio — un valor por cada columna que se quiera definir.

**Sintaxis general:**
```css
.contenedor {
  display: grid;
  grid-template-columns: <valor-col1> <valor-col2> ... <valor-colN>;
}
```
Cada `<valor-colN>` puede ser una longitud (`px`, `rem`, `%`), una unidad **_fr_**, o una función (**_minmax()_**, **_repeat()_**).

**Fórmula:**
- **_grid-template-columns: 1fr 1fr_** → 2 columnas iguales (cada una ocupa la mitad). Caso de uso en la clase: tablet de los planes.
- **_grid-template-columns: 1fr 1fr 1fr 1fr_** → 4 columnas iguales (cada una ocupa un cuarto). Caso de uso en la clase: desktop de los planes (4 cards Free/Starter/Pro/Enterprise).
- **_grid-template-columns: 200px 1fr_** → primera columna fija de 200px, segunda toma el resto. Caso de uso en la clase: layout T invertida del FAQ.

**Dependencia técnica:** la cantidad de columnas la decide el número de valores que se pase, no una propiedad aparte. Para 5 columnas iguales, hay que escribir 5 valores **_1fr_** (o usar **_repeat()_**, ver abajo).

### ESTRATEGIA VISUAL: Excalidraw

Diagrama de 3 estados del mismo contenedor con **_grid-template-columns_** distintos:
- **_200px 1fr 1fr_** → primera columna fija, resto se reparte.
- **_1fr 1fr 1fr_** → 3 columnas iguales.
- **_2fr 1fr_** → primera columna doble del ancho de la segunda.

---

### CONCEPTO: Unidad **_fr_** (fraction)

Unidad de Grid que representa **una fracción del espacio disponible** después de haber asignado las dimensiones fijas (px, rem, etc.) y los **_gap_**. Es exclusiva de Grid — no funciona fuera del modelo.

**Sintaxis general:**
```css
grid-template-columns: <N>fr;          /* una sola columna que toma todo el espacio */
grid-template-columns: <N1>fr <N2>fr;  /* dos columnas en proporción N1:N2 */
```
Cualquier número positivo es válido (**_1fr_**, **_2fr_**, **_0.5fr_**, etc.). Lo que importa es la proporción entre los valores, no el número absoluto.

**Fórmula:**
- **_1fr 1fr_** → dos columnas iguales (cada una toma 1/2 del espacio).
- **_2fr 1fr_** → dos columnas en proporción 2:1 (la primera toma 2/3, la segunda 1/3).
- **_200px 1fr_** → primera columna fija de 200px; **_1fr_** toma todo el espacio restante.

**Diferencia con porcentajes:** los **_%_** se calculan sobre el contenedor SIN restar los **_gap_** ni columnas fijas — por eso pueden desbordar. La unidad **_fr_** se calcula sobre el espacio que **realmente queda libre** — nunca desborda.

### ANALOGÍA: Rebanar una pizza

Pensá en cortar una pizza en porciones. Si decís "córtala en 3 partes iguales", cada porción es **_1fr_** — una fracción de la pizza disponible. Si una persona quiere doble porción, le das **_2fr_** y al resto **_1fr_**. La pizza nunca se desborda del plato porque las porciones se reparten lo que hay.

### ETIMOLOGÍA / HISTORIA

**_fr_** viene del inglés **fraction**. Es una unidad introducida específicamente con CSS Grid en 2017 — no existía antes en CSS porque no había un sistema bidimensional que la necesitara.

### ESTRATEGIA VISUAL: Código aislado en navegador

Un contenedor de 900px con tres botones de demostración: **_1fr 1fr 1fr_**, **_2fr 1fr 1fr_**, **_200px 1fr_**. Cambiar entre ellos en vivo y mostrar cómo se reparte el espacio.

---

### CONCEPTO: **_repeat(N, valor)_** — azúcar sintáctica

Función CSS que **repite el mismo valor N veces** en una declaración de **_grid-template-columns_** (o **_grid-template-rows_**). No agrega ninguna funcionalidad nueva — solo evita escribir lo mismo muchas veces.

**Sintaxis general:**
```css
grid-template-columns: repeat(<cantidad>, <valor-o-patrón>);
```
`<cantidad>` puede ser un número entero (**_3_**, **_10_**), o una palabra clave (**_auto-fit_**, **_auto-fill_** — ver siguiente bloque). `<valor-o-patrón>` puede ser una unidad simple (**_1fr_**, **_250px_**) o un patrón compuesto (**_200px 1fr_**).

**Fórmula:**
- **_repeat(4, 1fr)_** equivale exactamente a **_1fr 1fr 1fr 1fr_**.
- **_repeat(10, 1fr)_** equivale a 10 **_1fr_** seguidos (ilegible sin **_repeat_**).
- **_repeat(2, 200px 1fr)_** repite el patrón entero **_200px 1fr_** dos veces → equivale a **_200px 1fr 200px 1fr_** (4 columnas).

**Uso en la clase:** **_grid-template-columns: repeat(4, 1fr)_** para los 4 planes de **_precios.html_** en desktop. La forma larga **_1fr 1fr 1fr 1fr_** es válida también — **_repeat()_** es el atajo que el alumno se va a encontrar en código real.

### ETIMOLOGÍA / HISTORIA

"Azúcar sintáctica" es un término clásico en programación: significa una forma de escribir código más corta o más legible que produce **exactamente el mismo resultado** que la forma larga. No cambia lo que hace el código — solo cómo se ve. El término lo acuñó el matemático Peter Landin en 1964.

### ESTRATEGIA VISUAL: VS Code en vivo

Escribir primero **_1fr 1fr 1fr_** y mostrar el resultado. Reemplazar por **_repeat(3, 1fr)_** y mostrar que el resultado es idéntico. Después aumentar a **_repeat(10, 1fr)_** y mostrar lo que pasaría escribiendo 10 **_1fr_** a mano — la motivación de **_repeat()_** se entiende sola.

---

### CONCEPTO: **_gap_** en Grid

Mismo concepto que en Flexbox (de C02): agrega espacio fijo entre las celdas de la grilla, sin necesidad de poner **_margin_** en cada ítem.

**Sintaxis general:**
```css
.contenedor {
  display: grid;
  gap: <valor>;                  /* un valor: misma medida entre filas y entre columnas */
  gap: <valor-filas> <valor-cols>;  /* dos valores */
}
```

**Diferencia con Flex:** en Grid, **_gap_** separa tanto filas como columnas. Acepta uno o dos valores:
- **_gap: 16px_** → 16px entre filas y entre columnas.
- **_gap: 16px 24px_** → 16px entre filas, 24px entre columnas.

**Equivalente verbose:** **_gap_** es el atajo de **_row-gap_** + **_column-gap_**.

### ESTRATEGIA VISUAL: VS Code en vivo

Aplicar **_gap: 24px_** al **_.planes_**, mostrar la separación entre las 3 cards. Cambiar a **_gap: 0_** y mostrar cómo se pegan.

---

## BLOQUE 3 — GRID INTERMEDIO: COLUMNAS QUE SE ADAPTAN SOLAS

*(Caso de uso en la clase: sección "Marcas que confían en nosotros" de **_precios.html_** — una grilla de logos donde la cantidad puede variar (hoy 6 logos, mañana 12). NO se aplica a los planes, que tienen cantidad fija y por eso usan media queries explícitas. Esta distinción es la lección clave del bloque.)*

---

### CONCEPTO: **_auto-fit_**

Palabra clave que se usa **dentro de _repeat()_** en lugar de un número de columnas fijo. Le dice a Grid "ajustá automáticamente cuántas columnas caben en el ancho disponible del contenedor" — el navegador calcula la cantidad en cada momento.

**Sintaxis general:**
```css
grid-template-columns: repeat(auto-fit, <ancho-de-columna>);
```

**Comparación con valor numérico:**
- **_repeat(3, 1fr)_** → siempre 3 columnas, sin importar el ancho.
- **_repeat(auto-fit, 250px)_** → tantas columnas de 250px como quepan.

**Por sí sola no es suficiente:** **_auto-fit_** necesita un ancho de columna como segundo argumento. Si se pasa **_250px_** fijo, las columnas siempre miden 250px y el sobrante queda como espacio vacío. Para que las columnas se estiren al espacio sobrante hay que combinarlo con **_minmax_** (ver abajo).

### ESTRATEGIA VISUAL: Excalidraw

Diagrama mostrando el mismo contenedor en 3 anchos distintos (1200px, 800px, 400px) con **_repeat(auto-fit, 150px)_**: en 1200px caben 6 logos, en 800px caben 4, en 400px caben 2. Sin tocar el CSS, sin media queries.

---

### CONCEPTO: **_minmax(min, max)_**

Función CSS que define un **rango de tamaño** para una columna (o fila): un valor mínimo que la columna nunca puede ser menor, y un valor máximo que nunca puede superar. Grid acomoda la columna dentro de ese rango según el espacio disponible.

**Sintaxis general:**
```css
grid-template-columns: minmax(<min>, <max>);
```
`<min>` y `<max>` pueden ser cualquier longitud (`px`, `rem`, `%`) o **_1fr_**. El primer argumento siempre es el menor; el segundo el mayor.

**Fórmula:**
- **_minmax(150px, 1fr)_** → mínimo 150px, máximo 1 fracción del espacio sobrante. Caso de uso en la clase: logos de marcas.
- **_minmax(250px, 1fr)_** → mínimo 250px (más grande, típico para cards).
- **_minmax(100px, 300px)_** → mínimo 100px, máximo 300px (rango cerrado en ambos extremos).
- **_minmax(0, 1fr)_** → mínimo 0 (puede colapsar), máximo 1 fracción.

**Dependencia técnica:** se usa habitualmente dentro de **_repeat()_** combinada con **_auto-fit_** para grids responsivos automáticos.

### ESTRATEGIA VISUAL: Código aislado en navegador

Contenedor de 900px con 6 logos usando **_repeat(auto-fit, minmax(150px, 1fr))_**. Achicar el ancho del contenedor en vivo: cuando 6 columnas no caben (6 × 150 > ancho), Grid baja a 5, luego 4, luego 3, etc., y las estira hasta **_1fr_** para llenar el espacio sin huecos.

---

### CONCEPTO: **_repeat(auto-fit, minmax(...))_** — responsive sin media queries

Combinación canónica que produce un layout que **se adapta automáticamente al ancho disponible** sin necesidad de escribir media queries. La grilla recalcula cuántas columnas caben cada vez que el viewport cambia de tamaño.

**Sintaxis general:**
```css
.contenedor {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(<min>, <max>));
  gap: <valor>;
}
```

**Fórmula del lab:** **_grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))_** aplicado a la sección "Marcas que confían" de **_precios.html_**.

Lectura literal:
1. **_repeat_** + **_auto-fit_** → "tantas columnas como quepan".
2. **_minmax(150px, 1fr)_** → "cada columna mide al menos 150px y como mucho una fracción del espacio sobrante".

**Resultado:** una grilla que cambia el número de columnas según el ancho del contenedor sin que el desarrollador escriba media queries.

### CONCEPTO CLAVE DEL BLOQUE: cuándo usar media queries explícitas vs **_auto-fit + minmax_**

Esta es la **lección pedagógica central** que el alumno debe llevarse del bloque. Ambas técnicas hacen layouts responsivos, pero la elección depende de si la cantidad de ítems es **fija** o **variable**:

| Caso | Técnica correcta | Por qué |
|---|---|---|
| **Cantidad fija** (4 planes Free/Starter/Pro/Enterprise) | Media queries explícitas con **_grid-template-columns: 1fr 1fr_** → **_1fr 1fr 1fr 1fr_** | El diseñador controla EXACTAMENTE cuántas columnas hay en cada breakpoint. 4 planes → 2×2 en tablet, 4×1 en desktop, no se quiere otra cosa. |
| **Cantidad variable** (logos de marcas, items de DB, tags) | **_repeat(auto-fit, minmax(<min>, 1fr))_** sin media queries | Hoy son 6 logos, mañana 12, después 4. El layout debe adaptarse SOLO sin que el dev vuelva a tocar el CSS cada vez que cambia el contenido. |

**Cuándo NO reemplaza media queries (aún siendo cantidad variable):** cuando el cambio responsive no es "más o menos columnas iguales" sino una **reorganización del layout** (ej: mover un sidebar a debajo en móvil, cambiar el orden de bloques, mostrar/ocultar elementos). Para esos casos siguen siendo necesarias las media queries — y ahí entra **_grid-template-areas_** del bloque siguiente.

### ANALOGÍA: La regla de embalaje de cajas

Imaginá que tenés que acomodar cajas de 250cm de ancho dentro de una habitación. La regla es: "metan tantas cajas como quepan, no menos de 250cm cada una, y si sobra espacio repártalo entre las cajas para que no queden huecos." Si la habitación es chica entra 1 caja, si es grande entran 4. Nadie tiene que recalcular cada vez.

### ESTRATEGIA VISUAL: Demo en vivo en navegador con DevTools modo responsive

Aplicar la regla a **_.logos_** de la sección "Marcas que confían", abrir DevTools modo responsive, arrastrar el ancho del viewport lentamente desde ~400px hasta ancho completo. Mostrar la transición de 2 → 3 → 4 → 6 columnas sin scroll horizontal. **Cero media queries en el CSS.** Después comparar con **_.planes_** (que sí tiene 2 media queries explícitas para 1 → 2 → 4 columnas) para que el alumno vea las dos técnicas conviviendo en la misma página.

---

## BLOQUE 4 — GRID AVANZADO: **_grid-template-areas_**

---

### CONCEPTO: **_grid-template-areas_** (el feature distintivo de Grid)

Propiedad del contenedor que define la estructura del layout 2D usando **nombres de regiones** en lugar de coordenadas numéricas. Cada string entre comillas es una fila de la grilla; cada palabra dentro del string es una columna. Las palabras nombran las áreas; los ítems se asignan a áreas con **_grid-area_** (ver abajo).

**Sintaxis general:**
```css
.contenedor {
  display: grid;
  grid-template-areas:
    "<area-f1c1> <area-f1c2> ... <area-f1cN>"
    "<area-f2c1> <area-f2c2> ... <area-f2cN>"
    ...
    "<area-fMc1> <area-fMc2> ... <area-fMcN>";
  grid-template-columns: <col1> <col2> ... <colN>;
  grid-template-rows: <fila1> <fila2> ... <filaM>;  /* opcional, default auto */
}
```
Las áreas pueden repetir su nombre en celdas adyacentes para ocupar más de una columna o fila (forman un rectángulo). Usar **_._** (un punto solo) para dejar una celda vacía.

**Fórmula del lab para tablet+:**
```css
grid-template-areas:
  "header header"
  "nav    main"
  "footer footer";
```
Lectura: 3 filas × 2 columnas. La fila 1 es una sola área llamada **_header_** que ocupa las 2 columnas. La fila 2 tiene **_nav_** a la izquierda y **_main_** a la derecha. La fila 3 es una sola área **_footer_** que ocupa las 2 columnas.

**Regla de validez:** cada área nombrada debe formar un **rectángulo**. No se pueden hacer formas en L o T. Si una palabra aparece en dos celdas no adyacentes, el CSS es inválido.

**Por qué es el feature distintivo:** Flexbox **no puede** hacer esto. Flex es 1D — solo controla una dirección. Para conseguir un layout 2D con Flex hay que anidar contenedores y calcular anchos manualmente. Con **_grid-template-areas_** el layout es **declarativo**: literalmente se dibuja con texto.

### ANALOGÍA: El plano arquitectónico de una casa

**_grid-template-areas_** es como dibujar el plano de una casa en una hoja cuadriculada con etiquetas: "cocina", "comedor", "dormitorio". Cada nombre ocupa varias celdas adyacentes formando un rectángulo. Cuando construís la casa, el albañil mira el plano y sabe dónde va cada cosa — no necesita medidas exactas para entender la organización.

### ESTRATEGIA VISUAL: Excalidraw

Diagrama lado a lado: izquierda el bloque CSS con **_grid-template-areas_** mostrando las strings, derecha el layout renderizado con las áreas rotuladas (header arriba ocupando 2 columnas, nav y main al medio, footer abajo). Conectar visualmente cada palabra del CSS con su área en el layout.

---

### CONCEPTO: **_grid-area_** (asignación de ítem a área)

Propiedad del **ítem** (no del contenedor) que asigna ese elemento a una de las áreas nombradas en **_grid-template-areas_** del padre. El valor de **_grid-area_** debe coincidir exactamente con uno de los nombres usados en las strings del padre.

**Sintaxis general:**
```css
.elemento-hijo {
  grid-area: <nombre-area>;
}
```
El `<nombre-area>` debe coincidir literalmente con alguna palabra usada en el **_grid-template-areas_** del contenedor padre.

**Fórmula del lab:**
```css
.faq-layout header  { grid-area: header; }
.faq-nav            { grid-area: nav; }
.faq-main           { grid-area: main; }
.faq-layout footer  { grid-area: footer; }
```

**Dependencia técnica:** los nombres son arbitrarios — pueden ser cualquier identificador válido (sin espacios). Lo que importa es la consistencia entre **_grid-template-areas_** y **_grid-area_** de cada hijo.

**Consecuencia visual importante:** el orden visual del layout depende de **_grid-template-areas_**, **NO** del orden del HTML. Si en el HTML el footer aparece antes que el main, **_grid-area_** los reubica donde diga el padre. Esto es poderoso para responsive: en móvil podés tener un orden, en desktop otro completamente distinto, sin tocar el HTML.

### ESTRATEGIA VISUAL: Demo en vivo

Aplicar el bloque del lab. Mover el **_&lt;footer&gt;_** del HTML antes del **_&lt;main&gt;_** y mostrar que el orden visual NO cambia — sigue dibujándose según **_grid-template-areas_**. Esa independencia entre orden DOM y orden visual es lo que hace a Grid declarativo.

---

### CONCEPTO: Reorganización de áreas entre breakpoints

Patrón canónico mobile-first con **_grid-template-areas_**: definir el layout **móvil** en el CSS base (todo apilado en 1 columna), y dentro de una media query **_@media (min-width: ...)_** redefinir **_grid-template-areas_** y **_grid-template-columns_** para reorganizar el layout en pantallas grandes.

**Fórmula del lab:**
```css
/* BASE (móvil) — apilado */
.faq-layout {
  grid-template-areas:
    "header"
    "nav"
    "main"
    "footer";
  grid-template-columns: 1fr;
}

/* TABLET+ (≥640px) — T invertida */
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

**Resultado:** cambiar el layout entero al cruzar el breakpoint es **declarativo** — se redibuja con texto. Sin **_grid-template-areas_** habría que recalcular **_grid-column-start/end_** en cada hijo.

### ESTRATEGIA VISUAL: DevTools modo responsive en vivo

Cruzar el breakpoint 640px arrastrando el ancho del viewport y mostrar la reorganización completa del layout sin parpadeos. Los mismos 4 elementos HTML aparecen en posiciones distintas.

---

## BLOQUE 5 — HTML COMPLEMENTARIO

---

### CONCEPTO: **_&lt;details&gt;_** y **_&lt;summary&gt;_** (expandible nativo, sin JavaScript)

Elementos HTML que producen un comportamiento de "click para expandir / colapsar" sin necesidad de JavaScript. El navegador lo implementa nativamente.

**Estructura:**
```html
<details>
  <summary>Texto visible siempre (el "título" que se clickea)</summary>
  <p>Contenido oculto que aparece al hacer click en summary.</p>
</details>
```

**Comportamiento:** por default el **_&lt;details&gt;_** arranca cerrado (solo se ve el **_&lt;summary&gt;_**). Al hacer click en el **_&lt;summary&gt;_**, el resto del contenido se expande. Click de nuevo, se colapsa.

**Atributo opcional:** **_&lt;details open&gt;_** arranca expandido por default.

**Uso en la clase:** la sección FAQ de **_faq.html_** usa **_&lt;details&gt;_** para cada pregunta — el alumno obtiene la funcionalidad típica de accordion sin escribir una línea de JavaScript.

### ETIMOLOGÍA / HISTORIA

**_&lt;details&gt;_** y **_&lt;summary&gt;_** entraron al estándar HTML5 (2014). Antes, los accordions se hacían con JavaScript + CSS — un patrón común con cientos de implementaciones distintas. HTML5 los nativizó.

### ESTRATEGIA VISUAL: Demo en vivo en navegador

Mostrar el comportamiento de **_&lt;details&gt;_** clickeando en un **_&lt;summary&gt;_** del FAQ. Inspeccionar en DevTools — sin JavaScript adjunto. El navegador lo maneja solo.

---

## BLOQUE 6 — CRITERIO GRID vs FLEX

---

### CONCEPTO: Heurística "Grid 2D, Flex 1D"

Regla mental simple para decidir cuándo usar Grid y cuándo usar Flexbox en cualquier proyecto futuro:

- **Si el layout es unidimensional** (una fila de elementos, o una columna de elementos) → **Flex**.
- **Si el layout es bidimensional** (filas Y columnas controladas juntas) → **Grid**.

Esta heurística cubre el 90% de los casos en la práctica. Para el 10% restante, hay una tabla de casos típicos (ver concepto siguiente).

**Convivencia:** Grid y Flex se complementan, no se reemplazan. Es común usar Grid para el layout macro de la página y Flex adentro de cada celda para alinear contenido interno.

### ESTRATEGIA VISUAL: Canva estático

Imagen-slide con dos columnas: **Flex 1D** (con un ejemplo de nav horizontal) | **Grid 2D** (con un ejemplo de FAQ con sidebar). Debajo, la heurística "Grid 2D, Flex 1D" en grande.

---

### CONCEPTO: Tabla de casos Grid vs Flex

Tabla práctica del lab para decidir la herramienta correcta en casos típicos:

| Caso de uso | Herramienta |
|---|---|
| Navegación horizontal (logo + enlaces) | **Flex** (1D) |
| Galería de imágenes que envuelven | **Flex con _flex-wrap_** o **Grid con _auto-fit_** |
| Grilla de cards con **cantidad fija** (4 planes) | **Grid básico** con media queries (**_1fr 1fr_** → **_repeat(4, 1fr)_**) |
| Grilla con **cantidad variable** (logos, items de DB) | **Grid intermedio** (**_auto-fit + minmax_**) — sin media queries |
| Layout 2D con regiones nombradas (FAQ, dashboard) | **Grid avanzado** (**_grid-template-areas_**) |
| Alinear UN elemento distinto al resto | **Flex** (**_align-self_**) |

**Distinción clave (la lección pedagógica de la clase):** entre los dos casos de Grid, la elección depende de la cantidad de ítems:
- **Cantidad fija** (4 planes Free/Starter/Pro/Enterprise) → media queries explícitas. El diseñador controla exactamente cuántas columnas hay en cada breakpoint.
- **Cantidad variable** (6 logos hoy, 12 mañana) → **_auto-fit + minmax_**. El grid se adapta solo sin que el dev tenga que volver a tocar el CSS.

**Caso ambiguo:** "Galería de imágenes que envuelven" — Flex con **_flex-wrap_** funciona (lo hicieron en C02 con la galería del landing); Grid con **_auto-fit_** también funciona y es más declarativo. Para galerías de cards iguales con tamaño mínimo definido, Grid suele ser más limpio.

### ESTRATEGIA VISUAL: Imagen-slide con la tabla

Tabla rotulada visualmente — cada caso de uso con un mini-icono o esquema que lo representa, y la herramienta en color (azul para Flex, verde para Grid).

---

## ALERTA DE CONCEPTOS: Cruce clase → lab

| Concepto | ¿Está en clase README? | ¿Está en lab? | Nota |
|---|---|---|---|
| Rutas relativas + anchor | Sí (glosario) | Sí — Parte 1.1 | Prerequisito antes de Grid. Va primero. |
| **Icono SVG + _aria-label_** en nav | Sí (Resultados esperados + glosario) | Sí — Parte 1.1 (Paso A + Paso B) | Patrón moderno de accesibilidad para enlaces utilitarios (FAQ). Se enseña junto con las rutas relativas. |
| Mobile-first con Grid (1 col por default) | Sí (Tips finales) | Sí — Parte 1.3 | Lección estratégica: en móvil basta **_display: grid_** sin **_grid-template-columns_**. |
| Distinción media queries vs **_auto-fit + minmax_** | Sí (Resultados esperados, punto 3) | Sí — Parte 1.5 | Lección clave del bloque intermedio. Cantidad fija → media queries; cantidad variable → **_auto-fit_**. |
| **_&lt;details&gt;_** / **_&lt;summary&gt;_** | No (mencionado en el HTML del lab) | Sí — Parte 2.1 | HTML puro, sin JS. Es secundario al tema central de la clase pero el alumno lo aplica. |
| Tabla Grid vs Flex | Sí (cierre) | Sí — Parte 3 | Cierre de la clase, fija el criterio para futuros proyectos. |
| Atributo **_&lt;details open&gt;_** | No | No usado en el lab | Concepto de referencia. No profundizar. |
| **_subgrid_**, **_grid-auto-flow: dense_**, **_grid-column-start/end_** | Sí (Logros adicionales) | Sí — Logro 2 | Mencionar como "existe, lo verán en Code 301". Sin aplicación hoy. |

---

## SECUENCIA PEDAGÓGICA SUGERIDA PARA CAPA 1

Orden lógico de momentos basado en dependencias técnicas y los tiempos del README de clase:

1. **Hook + Prerequisito** (~15 min) — el problema del layout 2D que Flex no resuelve limpio + rutas relativas para enlaces multi-página + el patrón nuevo de icono SVG con **_aria-label_** para FAQ (Parte 1.1 del lab).
2. **Grid básico mobile-first** (~25 min) — **_display: grid_** + **_gap_** aplicados a **_.planes_** en móvil (1 columna por default, sin **_grid-template-columns_**), después media queries explícitas en 640px (**_1fr 1fr_**) y 1024px (**_repeat(4, 1fr)_**) para los 4 planes Free/Starter/Pro/Enterprise (Parte 1.2 + 1.3 + 1.4).
3. **Grid intermedio aplicado a logos** (~15 min) — **_repeat(auto-fit, minmax(150px, 1fr))_** sobre la sección "Marcas que confían" de **_precios.html_**. Cierre con la **lección pedagógica clave**: cuándo media queries explícitas (cantidad fija) vs **_auto-fit + minmax_** (cantidad variable) (Parte 1.5).
4. **Grid avanzado** (~35 min) — **_grid-template-areas_** + **_grid-area_** aplicado a **_faq.html_** mobile-first, con reorganización al breakpoint 640px (Parte 2).
5. **Criterio Grid vs Flex + cierre** (~30 min combinando Parte 3 + Cierre) — tabla de casos con la distinción "cantidad fija vs variable" + heurística "Grid 2D, Flex 1D" + commit + GitHub Pages.

**Total:** ~2h en código + ~25 min de teoría/cierre/transiciones + 30 min de receso = ~3h. Coincide con la estructura sugerida del README: 15 + 50 + 35 + 15 + 15 = 130 min de contenido + 30 min de colchón.
