# CAPA 0 — CLASE 02: CSS Layout con Flexbox

> **Fuentes:** **_code201/class-02/README.md_** · **_code201/class-02/lab/README.md_** · **_code201/class-02/slides/README.md_**
> **Módulo:** M1 — Clase 2 de 4
> **Proyecto víctima:** Landing page del producto (continúa desde Clase 01)

---

## BLOQUE 0 — PREREQUISITO: Normalización CSS y **_box-sizing_**

*(Este bloque es anterior a Flexbox. Sin él, los cálculos de layout rompen. Va primero en el lab y debe ir primero aquí.)*

---

### CONCEPTO: Normalización CSS (reset universal)

Cada navegador aplica un conjunto de estilos por default a los elementos HTML: márgenes en párrafos, bullets en listas, tamaños de fuente distintos según el navegador. El reset universal es un bloque CSS que elimina esos estilos antes de escribir los propios, para partir de una base predecible y uniforme en todos los navegadores.

Bloque estándar del Code 201:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

**Dependencia técnica:** Va al inicio del archivo CSS, antes de cualquier regla propia. Si va después, puede ser sobreescrito por selectores más específicos y el reset falla parcialmente.

### ANALOGÍA: El tablero en blanco

Es como limpiar la pizarra antes de empezar la clase. Si el pizarrón ya tiene texto del profesor anterior, cualquier cosa que escribas encima genera confusión. El reset elimina lo que el navegador escribió antes de que llegues tú.

### ETIMOLOGÍA / HISTORIA

El concepto popularizado por Eric Meyer en 2004 con su **_reset.css_**. La idea: navegadores como IE6, Firefox 1.x y Safari tenían estilos default radicalmente distintos entre sí. El reset fue la solución práctica de la industria antes de que existieran los estándares modernos.

### ESTRATEGIA VISUAL: VS Code en vivo

Mostrar un **_<h1>_** y un **_<p>_** con el CSS vacío. Inspeccionar en DevTools el margen por default del navegador. Agregar el bloque de reset. Recargar. El margen desaparece. El alumno ve el efecto antes y después sin teoría extra.

---

### CONCEPTO: **_box-sizing: border-box_**

Por default el navegador usa **_content-box_**: el **_width_** declarado mide solo el contenido. El **_padding_** y el **_border_** se suman al ancho real, lo que hace que el elemento mida más de lo que se le dijo.

Con **_border-box_**: el **_width_** declarado incluye contenido + padding + border. El elemento mide exactamente lo que se le dice, sin desbordamientos inesperados.

**Fórmula comparativa:**

- **_content-box_**: Ancho real = **_width_** + **_padding-left_** + **_padding-right_** + **_border-left_** + **_border-right_**
- **_border-box_**: Ancho real = **_width_** (el padding y el border se restan del contenido internamente)

**Dependencia:** Es prerequisito para que los **_calc()_** de las media queries sean exactos. Si el contenedor usa **_content-box_**, el padding rompe el cálculo de columnas.

### ANALOGÍA: La maleta con medidas

Cuando la aerolínea dice que la maleta de mano no puede superar 55cm, mide la maleta completa: carcasa, ruedas y asa incluidos. **_content-box_** sería medir solo la ropa adentro, ignorando la carcasa. **_border-box_** es el modo de la aerolínea: lo que declaras es lo que ocupa en el espacio real.

### ESTRATEGIA VISUAL: Excalidraw preparado

Dos cajas una al lado de la otra, ambas con **_width: 200px_** declarado. La de **_content-box_** muestra el desbordamiento del padding en rojo. La de **_border-box_** está contenida exactamente en 200px. Rotular las zonas: contenido / padding / border.

---

## BLOQUE 1 — EL MODELO FLEXBOX

---

### CONCEPTO: CSS Flexbox (Flexible Box Layout)

CSS Flexbox es un modelo de diseño unidimensional: organiza y alinea elementos dentro de un contenedor en una sola dirección a la vez, horizontal o vertical. Se activa en el contenedor con **_display: flex_**. A partir de ese momento, todos los hijos directos del contenedor se convierten en **flex items** y quedan bajo las reglas del modelo.

**Dependencia técnica:** El modelo opera sobre la relación padre–hijo directa. Un contenedor **_display: flex_** controla solo a sus hijos inmediatos. Los nietos no se ven afectados.

**Unidimensional vs bidimensional:** Flexbox trabaja en un eje a la vez. CSS Grid trabaja en dos ejes simultáneamente. Para la Clase 02, el foco es Flexbox.

### ANALOGÍA: La caja de herramientas con divisores

Una caja de herramientas con divisores internos: el dueño decide si los compartimentos van en fila horizontal o en columna vertical, cuánto espacio hay entre ellos, y si los compartimentos que no caben en la primera fila se crean en una segunda fila. El dueño no le dice a cada compartimento dónde ir — le da instrucciones a la caja.

### ETIMOLOGÍA / HISTORIA

"Flex" del latín *flectere*: doblar, adaptar. "Box" del modelo de cajas de CSS. El nombre indica que las cajas se adaptan al espacio disponible. El módulo Flexbox se formalizó en la especificación CSS3 entre 2009 y 2012, con soporte amplio en navegadores a partir de 2014.

### ESTRATEGIA VISUAL: Excalidraw en vivo

Contenedor con borde grueso. Adentro, 4 rectángulos (flex items) distribuidos en fila. Flechas que indican el eje de distribución. Comparar con el mismo HTML sin **_display: flex_**: los hijos apilados en columna (comportamiento block por default).

---

### CONCEPTO: Contenedor flex vs ítem flex

Todo en Flexbox opera sobre una relación jerárquica de dos niveles:

- **Flex container:** el elemento padre que tiene **_display: flex_**. Aquí van las propiedades de distribución y alineación.
- **Flex item:** cada hijo directo del contenedor. Aquí van las propiedades de crecimiento, encogimiento y tamaño base.

Las propiedades del contenedor (**_justify-content_**, **_align-items_**, **_flex-wrap_**, **_flex-direction_**, **_gap_**) controlan cómo se distribuyen los ítems. Las propiedades del ítem (**_flex-grow_**, **_flex-shrink_**, **_flex-basis_**, **_align-self_**) controlan cómo se comporta cada ítem individualmente.

**Dependencia:** Una propiedad del contenedor puesta en el ítem no tiene efecto. Una propiedad del ítem puesta en el contenedor no tiene efecto. Son roles distintos.

### ESTRATEGIA VISUAL: Excalidraw preparado

Diagrama de dos columnas: izquierda = propiedades del contenedor, derecha = propiedades del ítem. Flecha indicando en qué elemento van. Resaltar con color diferente el contenedor (azul) y los ítems (verde).

---

## BLOQUE 2 — EJES Y DIRECCIÓN

---

### CONCEPTO: Main axis y Cross axis

Todo contenedor flex tiene dos ejes perpendiculares entre sí:

- **Main axis:** la dirección en la que se colocan los flex items. La define **_flex-direction_**.
- **Cross axis:** el eje perpendicular al main axis.

**Fórmula:**
- **_flex-direction: row_** (default) → main axis = horizontal (izquierda a derecha); cross axis = vertical
- **_flex-direction: column_** → main axis = vertical (arriba a abajo); cross axis = horizontal

**Dependencia:** El significado de **_justify-content_** y **_align-items_** depende de cuál sea el main axis. Cambiar **_flex-direction_** cambia qué propiedad controla qué eje.

### ANALOGÍA: La carretera

El main axis es el carril por donde avanzan los autos en fila. El cross axis es el ancho de la carretera, de orilla a orilla. Cambiar **_flex-direction_** es girar la carretera 90°: lo que antes era largo, ahora es ancho.

### ESTRATEGIA VISUAL: Excalidraw en vivo

Dos contenedores idénticos. En el primero: flecha horizontal (main axis) y flecha vertical (cross axis), ítems distribuidos en fila. En el segundo: flechas invertidas, ítems en columna. Rotular cada eje.

---

### CONCEPTO: **_flex-direction_**

Propiedad del contenedor que define la dirección del main axis y, en consecuencia, el orden visual de los ítems. No modifica el orden en el DOM, solo el orden visible en pantalla.

**Valores:**
- **_row_** (default): izquierda a derecha
- **_row-reverse_**: derecha a izquierda
- **_column_**: arriba a abajo
- **_column-reverse_**: abajo a arriba

**Uso en la clase:** El hero del landing usa **_flex-direction: column_** como estado base (móvil): texto e imagen apilados. Al llegar al breakpoint de escritorio (1024px), una media query lo cambia a **_flex-direction: row_**: texto a la izquierda, imagen a la derecha.

### ESTRATEGIA VISUAL: Código aislado en navegador

Un contenedor con 3 ítems numerados (1, 2, 3). Cambiar **_flex-direction_** en vivo y mostrar cómo el orden visual cambia sin tocar el HTML.

---

## BLOQUE 3 — DISTRIBUCIÓN Y ALINEACIÓN

---

### CONCEPTO: **_justify-content_**

Propiedad del contenedor que controla cómo se distribuyen los flex items a lo largo del **main axis** cuando hay espacio libre sobrante. No saca los ítems del contenedor; redistribuye el espacio libre dentro de él.

**Valores canónicos:**
- **_flex-start_** (default): todos al inicio del main axis
- **_flex-end_**: todos al final
- **_center_**: centrados en el main axis
- **_space-between_**: primer ítem al inicio, último al final, espacio igual entre los intermedios
- **_space-around_**: espacio igual alrededor de cada ítem (la mitad en los bordes)
- **_space-evenly_**: espacio exactamente igual en todos los intervalos, incluidos los bordes

**Dependencia:** Opera sobre el main axis. Si **_flex-direction: column_**, controla la distribución vertical.

### ANALOGÍA: La foto del anuario

El fotógrafo distribuye a los estudiantes en la fila. Puede agruparlos a la izquierda, al centro, o dejar espacio igual entre ellos. Los estudiantes no cambian de fila. Solo cambia cómo se distribuyen dentro de la misma fila.

### ESTRATEGIA VISUAL: Excalidraw preparado

Cinco contenedores idénticos en columna, cada uno con 3 ítems adentro. Cada contenedor rotulado con el valor de **_justify-content_** que aplica. Las 3 cajas adentro posicionadas según ese valor. Eric puede mostrar este panel mientras explica cada valor.

---

### CONCEPTO: **_align-items_**

Propiedad del contenedor que controla la alineación de los flex items a lo largo del **cross axis**. Opera perpendicular a **_justify-content_**.

**Valores canónicos:**
- **_stretch_** (default): los ítems se estiran para llenar el alto del contenedor
- **_flex-start_**: alineados al inicio del cross axis
- **_flex-end_**: alineados al final
- **_center_**: centrados en el cross axis

**Dependencia:** Afecta a todos los hijos del contenedor a la vez. Para sobrescribir un ítem individual, usar **_align-self_** en ese hijo específico.

### ANALOGÍA: Las perchas del armario

**_justify-content_** decide cuánto espacio hay entre las perchas a lo largo de la barra. **_align-items_** decide si la ropa cuelga pegada arriba de la barra, centrada, o estirada hasta el suelo. Son dos decisiones independientes sobre dos dimensiones distintas.

### ESTRATEGIA VISUAL: Excalidraw preparado

Un contenedor con 3 rectángulos de alturas distintas (para que el efecto de **_align-items_** sea evidente). Cuatro paneles: uno por cada valor principal. El ítem más alto sirve de referencia visual para entender la alineación.

---

### CONCEPTO: **_align-self_**

Propiedad del **ítem** (no del contenedor) que sobrescribe el **_align-items_** del contenedor para ese ítem específico. Acepta los mismos valores que **_align-items_** más **_auto_** (que hereda el valor del contenedor).

**Uso:** Cuando 4 de 5 tarjetas deben alinearse con **_align-items: center_** pero una necesita **_flex-start_**, se pone **_align-self: flex-start_** en esa tarjeta específica sin tocar el contenedor.

**Fuente:** Cubierto en slides. No aplicado directamente en el lab — concepto de referencia.

### ESTRATEGIA VISUAL: Código aislado en navegador

Contenedor con **_align-items: center_** y 4 ítems. Uno de los ítems tiene **_align-self: flex-start_**. Mostrar cómo ese ítem se comporta diferente al resto.

---

## BLOQUE 4 — ESPACIADO Y DESBORDAMIENTO

---

### CONCEPTO: **_gap_**

Propiedad del contenedor que agrega espacio fijo entre los flex items. Reemplaza el patrón antiguo de **_margin_** en los hijos. Acepta uno o dos valores:

- Un valor: aplica igual entre filas y entre columnas → **_gap: 1rem_**
- Dos valores: primero para filas, segundo para columnas → **_gap: 1rem 2rem_**

**Fórmula:** **_gap: [row-gap] [column-gap]_**

**Dependencia:** El gap aplica entre ítems, no entre el ítem y el borde del contenedor. Para espacio exterior, usar **_padding_** en el contenedor.

**Historia:** El término "gap" viene del módulo CSS Grid. Se incorporó a Flexbox en 2020 como propiedad equivalente. Antes de 2020, la alternativa era agregar **_margin_** a cada ítem y compensar en los bordes — un hack.

### ANALOGÍA: Las baldosas del piso

El instalador no le agrega margen a cada baldosa. Le dice al plano cuánto espacio dejar entre ellas. Si se agregan más baldosas, el espacio entre ellas se mantiene uniforme sin recalcular nada. Eso es **_gap_**.

### ESTRATEGIA VISUAL: Excalidraw en vivo

Tres paneles: contenedor sin **_gap_** (ítems pegados), con **_gap: 1rem_**, con **_gap: 2rem_**. El espacio entre ítems es lo único que cambia.

---

### CONCEPTO: **_flex-wrap_**

Propiedad del contenedor que controla qué pasa cuando los flex items no caben en una sola línea del main axis.

- **_nowrap_** (default): todos en una sola línea. Si no caben, se comprimen.
- **_wrap_**: los ítems que no caben bajan a una nueva línea en el cross axis.
- **_wrap-reverse_**: igual que **_wrap_** pero las nuevas líneas se forman en dirección inversa del cross axis.

**Dependencia técnica:** Con **_flex-wrap: wrap_**, cada nueva fila es tratada como una unidad independiente del cross axis. **_align-items_** alinea los ítems dentro de su fila. **_align-content_** (no cubierto en esta clase) distribuye las filas entre sí cuando hay varias.

**Uso en la clase:** Las tarjetas de características y las imágenes de la galería usan **_flex-wrap: wrap_** combinado con **_flex-basis_** para reorganizarse en 3 → 2 → 1 columna al achicar el viewport, sin media queries adicionales para esas secciones.

### ANALOGÍA: La fila en el cine

Sin **_flex-wrap_** (**_nowrap_**): las personas se aprietan en la fila hasta que alguna queda con medio cuerpo afuera. Con **_flex-wrap: wrap_**: los que no caben en la primera fila forman una segunda fila detrás.

### ESTRATEGIA VISUAL: Código aislado en navegador

Contenedor con ancho fijo, 6 ítems de tamaño fijo. Cambiar **_flex-wrap_** entre **_nowrap_** y **_wrap_** en vivo para mostrar el comportamiento. El alumno redimensiona la ventana y ve cómo los ítems bajan de línea.

---

## BLOQUE 5 — CONTROL DEL ÍTEM: LA TRÍADA

---

### CONCEPTO: **_flex-grow_**

Propiedad del **ítem** que define con qué proporción ese ítem absorbe el espacio libre dentro del contenedor, después de que todos los ítems ocuparon su tamaño base. Acepta un número sin unidades (factor de crecimiento).

**Fórmula:**
- **_flex-grow: 0_** (default): el ítem no crece. Ocupa solo su tamaño base.
- **_flex-grow: 1_** en un solo ítem, **_0_** en el resto: ese ítem absorbe todo el espacio libre.
- **_flex-grow: 1_** en dos ítems: se reparten el espacio libre en partes iguales.
- **_flex-grow: 2_** y **_flex-grow: 1_** en dos ítems: el primero absorbe el doble del espacio libre que el segundo.

**Dos usos en la clase:**

1. El logo del navbar: **_flex-grow: 1_** para que ocupe todo el espacio sobrante y empuje los enlaces del menú al borde derecho. Es el patrón estándar de navbars en producción.
2. Las tarjetas de características: **_flex-grow: 1_** para que cuando las tarjetas no llenan la última fila, se expandan para no dejar hueco al borde derecho.

### ANALOGÍA: El pasajero en el asiento del avión

En clase turista, los 3 asientos tienen el mismo tamaño base. Si el asiento del medio queda vacío y el de la ventana tiene **_flex-grow: 1_**, ese pasajero se expande al espacio vacío. Si todos tienen **_flex-grow: 1_**, se reparten el espacio vacío por partes iguales.

### ESTRATEGIA VISUAL: Excalidraw en vivo

Panel 1: contenedor con 4 ítems, el tercero con **_flex-grow: 1_**. Mostrar cómo absorbe el espacio libre. Panel 2: logo del navbar con **_flex-grow: 1_** empujando los 3 enlaces al borde derecho.

---

### CONCEPTO: **_flex-basis_**

Propiedad del **ítem** que establece el tamaño base del ítem en el main axis, antes de que Flexbox distribuya el espacio libre. Funciona como el **_width_** del ítem dentro del contenedor flex.

**Fórmula de uso en la clase:**

- **_flex-basis: 280px_** en las tarjetas: si el contenedor tiene 900px, caben 3 tarjetas (3 × 280 = 840, más gaps). Si tiene 600px, caben 2 (la tercera baja de línea gracias a **_flex-wrap: wrap_**). Si tiene 320px, cabe 1.
- En breakpoints: **_flex-basis: calc(50% - 0.5rem)_** fuerza exactamente 2 columnas. **_flex-basis: calc(33.33% - 0.66rem)_** fuerza exactamente 3 columnas.

**Relación con la tríada:**
- **_flex-basis_**: tamaño inicial
- **_flex-grow_**: cuánto puede crecer desde ese tamaño
- **_flex-shrink_**: cuánto puede reducirse desde ese tamaño

### ESTRATEGIA VISUAL: Código aislado en navegador

Contenedor con 4 tarjetas, **_flex-basis: 280px_**, **_flex-wrap: wrap_**. Redimensionar la ventana del navegador. Las tarjetas se reorganizan automáticamente: 4 → 3 → 2 → 1 columna según el espacio disponible.

---

### CONCEPTO: **_flex-shrink_**

Propiedad del **ítem** que define con qué proporción ese ítem se reduce cuando el espacio del contenedor es insuficiente para mostrar todos los ítems a su tamaño base. Es el inverso de **_flex-grow_**.

**Valores:**
- **_flex-shrink: 1_** (default): el ítem puede reducirse proporcionalmente.
- **_flex-shrink: 0_**: el ítem no se reduce. Si no hay espacio, desborda el contenedor.
- Valores > 1: el ítem se reduce más rápido que sus hermanos en la misma proporción.

**Uso en la clase:** No se aplica directamente en el lab, pero entra en juego automáticamente con el valor default. Concepto de referencia para entender por qué los ítems se comprimen en contenedores angostos con **_flex-wrap: nowrap_**.

**Fuente:** Cubierto en slides.

### ESTRATEGIA VISUAL: Código aislado en navegador

Contenedor angosto con 3 ítems de tamaño base grande (**_flex-wrap: nowrap_**). Uno de ellos con **_flex-shrink: 0_** para mostrar el desbordamiento. Los otros dos con el valor default se comprimen.

---

## BLOQUE 6 — VARIANTE: **_display: inline-flex_**

---

### CONCEPTO: **_display: inline-flex_**

Variante de Flexbox que hace que el contenedor se comporte como un elemento inline en el flujo del documento (no ocupa toda la línea), pero internamente aplica el modelo Flexbox para alinear sus hijos.

**Diferencia con **_display: flex_**:** Un contenedor con **_display: flex_** es un bloque: ocupa todo el ancho disponible de su línea. Con **_display: inline-flex_**, el contenedor se ajusta al tamaño de su contenido y convive en línea con otros elementos.

**Uso en la clase:** Los enlaces del footer que contienen íconos SVG usan **_display: inline-flex_** para alinear internamente el ícono con cualquier texto, sin que el enlace ocupe toda la línea.

### ESTRATEGIA VISUAL: Código aislado en navegador

Dos **_<a>_** con ícono adentro: uno sin Flexbox (ícono y texto desalineados), otro con **_display: inline-flex_** y **_align-items: center_** (alineados). El efecto es inmediatamente visible.

---

## BLOQUE 7 — PROPIEDADES DE ESTILO DE ENLACES Y FORMULARIO

*(Conceptos que el lab aplica pero no son Flexbox puro. Necesarios para que el landing se vea limpio y profesional.)*

---

### CONCEPTO: **_text-decoration: none_**

Propiedad CSS que controla decoraciones de línea sobre el texto: subrayado, sobrelineado, tachado. El navegador, por default, subraya los enlaces **_<a>_**. **_text-decoration: none_** elimina ese subrayado.

**Dependencia:** Es una propiedad heredada por los hijos de texto, pero los enlaces tienen su propio valor por default — hay que sobrescribirlo explícitamente.

**Uso en la clase:** Los enlaces del nav (**_nav a_**) quitan el subrayado para verse como elementos de menú clickeables, no como hipervínculos clásicos.

### ANALOGÍA: El subrayado del texto en Word

Cuando escribes en Word y pegas un link, automáticamente sale subrayado en azul. Eso es el comportamiento default del HTML. **_text-decoration: none_** es seleccionar el texto y quitarle el subrayado manualmente.

### ESTRATEGIA VISUAL: Código aislado en navegador

Dos enlaces lado a lado: uno con default (azul subrayado), otro con **_text-decoration: none_** + **_color_** + **_font-weight_** (negro, bold, sin subrayado). El alumno ve que un enlace "limpio" sigue siendo clickeable aunque no parezca un link tradicional.

---

### CONCEPTO: **_color_** y **_font-weight_** aplicados a enlaces

**_color_** define el color del texto del elemento. **_font-weight_** define el peso (grosor) de la fuente. Los valores comunes son **_400_** (normal) y **_700_** (bold). Valores intermedios: **_500_**, **_600_** (semibold).

**Dependencia:** **_color_** es heredada — un valor en el body se propaga a sus hijos. **_font-weight_** también es heredada, pero los enlaces tienen un peso por default que puede ser distinto al body.

**Uso en la clase:** **_nav a_** recibe **_color: #1a1a1a_** (mismo que el body) y **_font-weight: 700_** para destacar como elementos de menú sin perder el contraste del tema.

### ESTRATEGIA VISUAL: VS Code dividido con navegador

Mostrar los enlaces del nav con cada propiedad agregada en vivo: primero **_text-decoration: none_**, luego **_color_**, luego **_font-weight: 700_**. El alumno ve la evolución del estilo en cada paso.

---

### CONCEPTO: **_font: inherit_**

Propiedad CSS que fuerza al elemento a heredar la fuente del padre. Los **_<input>_** y **_<button>_** por default usan una fuente del sistema (Times New Roman o Arial según el navegador), que no coincide con el resto de la página.

**Fórmula:** **_font: inherit_** equivale a **_font-family: inherit; font-size: inherit; font-weight: inherit; line-height: inherit_** en una sola línea.

**Dependencia:** Solo tiene sentido cuando el padre tiene un **_font-family_** definido (el lab define **_font-family: system-ui, sans-serif_** en el body).

**Uso en la clase:** El **_<input>_** del formulario de contacto usa **_font: inherit_** para que el texto que escribe el usuario coincida con la tipografía del resto del landing.

### ANALOGÍA: El uniforme del colegio

Sin **_font: inherit_**, el **_<input>_** llega vestido con su uniforme de fábrica (la fuente del sistema). Con **_font: inherit_**, lo cambias por el uniforme oficial del colegio (la fuente del body). El estudiante encaja con el grupo.

### ESTRATEGIA VISUAL: Código aislado en navegador

Dos **_<input>_** lado a lado con el mismo placeholder: uno sin **_font: inherit_** (fuente del sistema, distinta), otro con **_font: inherit_** (heredada del body). El alumno ve el contraste tipográfico de inmediato.

---

### CONCEPTO: **_cursor: pointer_**

Propiedad CSS que cambia el cursor del mouse al pasar sobre el elemento. **_pointer_** es la manita (la que aparece sobre los enlaces). Los **_<button>_** por default usan **_cursor: default_** (la flecha), lo que rompe la expectativa del usuario.

**Dependencia:** No es heredada — se aplica al elemento que la declara.

**Uso en la clase:** El **_<button>_** Enviar del formulario recibe **_cursor: pointer_** para que el usuario sepa que es clickeable al pasar el mouse encima.

### ESTRATEGIA VISUAL: Demostración en vivo

Pasar el mouse sobre un **_<button>_** sin **_cursor: pointer_** y otro con la propiedad. El cambio de flecha a manita es inmediatamente visible.

---

### CONCEPTO: **_border-radius_**

Propiedad CSS que redondea las esquinas de un elemento. Acepta valores en píxeles, em, rem o porcentaje. Cero (default) son esquinas en ángulo recto; valores positivos las redondean progresivamente.

**Fórmula:**
- **_border-radius: 4px_** — esquinas ligeramente redondeadas (botones, inputs)
- **_border-radius: 8px_** — esquinas más redondeadas (tarjetas, contenedores)
- **_border-radius: 50%_** — círculo perfecto (cuando el elemento es cuadrado)

**Uso en la clase:** Las tarjetas de Características (**_border-radius: 8px_**), los inputs del formulario (**_border-radius: 4px_**), el botón Enviar (**_border-radius: 4px_**), las imágenes de la galería (**_border-radius: 4px_**).

### ESTRATEGIA VISUAL: Excalidraw preparado

Cuatro rectángulos idénticos con **_border-radius_** de 0, 4px, 8px, 50%. El alumno ve la progresión visual de "duro" a "suave" a "circular".

---

### CONCEPTO: Patrón de formulario con Flexbox column

Combinación de propiedades Flexbox que organiza un formulario verticalmente con espaciado consistente, sin recurrir a **_margin_** en cada hijo. El contenedor del form recibe **_display: flex_** + **_flex-direction: column_** + **_gap_**, lo que apila los **_<label>_**, **_<input>_** y el **_<button>_** con separación uniforme.

**Fórmula de uso en la clase:**

```css
#contacto form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
```

**Por qué no usar **_margin-bottom_**:** El patrón antiguo requiere cambiar el margen de cada hijo y compensar el último para no dejar espacio sobrante. Con **_gap_**, el contenedor decide el espacio una sola vez y se mantiene consistente al agregar o quitar campos.

**Dependencia:** Funciona porque cada **_<label>_** y **_<input>_** se comporta como un flex item. El **_gap_** aplica entre ellos, sin importar el orden o la cantidad.

### ESTRATEGIA VISUAL: VS Code dividido con navegador

Mostrar el form sin Flexbox (todo pegado, sin espaciado consistente) y luego aplicar el bloque de Flexbox. El alumno ve la diferencia de orden visual en una sola línea de cambio.

---

## BLOQUE 8 — RESPONSIVIDAD

---

### CONCEPTO: Estrategia Mobile-first

Los estilos CSS base están escritos para pantallas móviles (las más pequeñas). Las media queries agregan o modifican estilos conforme la pantalla crece. La estrategia opuesta (desktop-first) escribe los estilos base para pantallas grandes y usa media queries para reducirlos, lo que genera más sobrescrituras y más conflictos.

**Por qué mobile-first:**
- El tráfico web actual es mayoritariamente móvil.
- Agregar estilos al crecer es aditivo. Quitarlos al achicar requiere sobrescribir, lo que genera conflictos en cascada.

**Cómo se reconoce en el CSS:** Todas las media queries usan **_min-width_** (no **_max-width_**). Cuando el viewport alcanza ese ancho mínimo, se aplican los estilos adicionales.

**Ejemplo en la clase:** El hero usa **_flex-direction: column_** como estado base (móvil: texto e imagen apilados). La media query de 1024px cambia a **_flex-direction: row_** (escritorio: lado a lado). El estado móvil se escribió primero, sin media query.

### ANALOGÍA: El menú del restaurante

El cocinero diseña primero el menú básico (lo que se puede hacer con una cocina pequeña). Para el restaurante más grande, agrega platos. No diseña el menú completo del restaurante grande y luego intenta eliminar platos para adaptarlo al puesto de comida chico.

### ESTRATEGIA VISUAL: Excalidraw preparado

Dos columnas: izquierda = mobile-first (CSS base + media queries con **_min-width_** que agregan), derecha = desktop-first (CSS base + media queries con **_max-width_** que sobrescriben). Marcar con rojo las líneas de sobrescritura en desktop-first para que se vea la diferencia de complejidad.

---

### CONCEPTO: **_@media (min-width)_** — Breakpoints

Las media queries son reglas CSS que aplican un bloque de estilos condicionalmente según las características del viewport. Con **_min-width_**, los estilos del bloque aplican cuando el viewport tiene al menos ese ancho.

**Breakpoints del Code 201:**
- **_640px_**: tablet — 2 columnas de tarjetas, 2 imágenes por fila
- **_1024px_**: escritorio — hero lado a lado, 3 tarjetas, 4 imágenes por fila

**Sintaxis:**

```css
@media (min-width: 640px) {
  /* Estilos que aplican solo cuando el viewport >= 640px */
}
```

**Dependencia:** Las media queries van al final del archivo CSS. Si van antes de los estilos base, los estilos base los sobrescriben en todos los viewports, y las media queries no tienen efecto.

**Etimología:** "Media" en CSS viene de "media type": el tipo de medio de salida (pantalla, impresora, lector de pantalla). Las media queries son consultas que interrogan las características del medio donde se renderiza el documento. El término se formalizó en CSS2 (1998) y se extendió con condiciones de ancho en CSS3 (2012).

### ESTRATEGIA VISUAL: VS Code dividido con navegador

Escribir la media query de 640px en vivo. Redimensionar la ventana del navegador. El alumno ve el cambio de estilos exactamente en el breakpoint definido.

---

### CONCEPTO: Porcentajes como unidad de ancho en media queries

En los breakpoints de la galería, el lab usa porcentajes simples en lugar de fórmulas: **_width: 48%_** para 2 imágenes por fila, **_width: 23%_** para 4 imágenes por fila. El porcentaje restante (4% y 5% aproximadamente) absorbe el gap entre imágenes.

**Por qué funciona:** El contenedor tiene **_box-sizing: border-box_**, por lo que el **_width_** declarado no crece con el padding. Los gaps de **_0.5rem_** entre imágenes son pequeños y el porcentaje sobrante los absorbe sin desbordamiento.

**Dos tipos de responsividad en el lab:**

1. **Tarjetas (sin breakpoints explícitos):** responden solas gracias a **_flex-basis: 280px_** + **_flex-wrap: wrap_**. Si el contenedor tiene 900px caben 3, si tiene 600px caben 2, si tiene 320px cabe 1 — sin escribir ninguna media query para ellas.
2. **Galería (con breakpoints explícitos):** usa **_width: 100%_** como base (móvil), **_width: 48%_** en 640px (tablet) y **_width: 23%_** en 1024px (escritorio).

**Dependencia:** Los porcentajes de la galería son del contenedor inmediato (el **_div.galeria_**). Funcionan correctamente porque el contenedor no tiene padding que distorsione el cálculo.

### ESTRATEGIA VISUAL: Código aislado en navegador

Galería con 4 imágenes. Mostrar el cambio de **_width_** al cruzar cada breakpoint en DevTools modo responsive.

---

## ALERTA DE CONCEPTOS: Cruce clase → lab

| Concepto | ¿Está en clase README? | ¿Está en lab? | Nota |
|---|---|---|---|
| **_box-sizing: border-box_** | No (mencionado implícitamente) | Sí — Parte 1.1 | Es prerequisito estructural. Va primero. |
| **_text-decoration: none_** + **_color_** + **_font-weight_** | No | Sí — Parte 1.3 (estilos del nav) | Sub-paso nuevo. Concepto de estilo de enlaces, no Flexbox. |
| **_display: inline-flex_** | No | Sí — Parte 1.5 (footer) | Variante menor. Incluir pero no expandir. |
| **_font: inherit_**, **_cursor: pointer_**, **_border-radius_** | No | Sí — Parte 1.6 (formulario) | Sub-paso nuevo. Conceptos de detalle UX. |
| Patrón form con **_flex-direction: column_** + **_gap_** | No | Sí — Parte 1.6 (formulario) | Aplicación de Flexbox a un patrón nuevo (form vertical). |
| Galería con **_max-width: 100%_** + **_flex-grow: 1_** | No | Sí — Parte 3.1 | El **_flex-grow_** evita huecos cuando wrap deja menos imágenes en la última fila. |
| Porcentajes en breakpoints (**_width: 48%_**, **_width: 23%_**) | No | Sí — Parte 3.2 (galería) | Sin **_calc()_**. El gap lo absorbe el porcentaje sobrante. |
| **_overflow_** | Mencionado en slides | No aparece en lab actualizado | Concepto antiguo de C01. No enseñar en C02. |
| **_flex-shrink_** | Sí (slides) | No aplicado directamente | Parte de la tríada. Concepto de referencia. |
| **_align-self_** | Sí (slides) | No aplicado directamente | Concepto de referencia. No profundizar en clase. |

---

## SECUENCIA PEDAGÓGICA SUGERIDA PARA CAPA 1

Orden lógico de momentos basado en dependencias técnicas:

1. **Prerequisito** — Normalización + **_box-sizing_** (debe ir antes de cualquier Flexbox)
2. **El modelo** — Qué es Flexbox, contenedor vs ítem, main axis / cross axis
3. **Flexbox básico aplicado al landing** — **_display: flex_** + 4 verbos en nav; estilos limpios de enlace; **_flex-direction: column_** en hero; **_inline-flex_** en footer; patrón de form vertical (Parte 1 — 6 sub-pasos)
4. **Flexbox avanzado** — **_flex-grow_**, **_flex-basis_**, **_flex-wrap_** aplicados a la grilla de tarjetas (Parte 2)
5. **Responsividad** — Mobile-first, galería con **_flex-grow_**, **_@media (min-width)_** con porcentajes (Parte 3)
6. **Cierre** — Logros adicionales + commit final
