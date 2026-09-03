# CLASE 02: CSS Layout con Flexbox

> **Módulo:** M1 — Clase 2 de 4
> **Curso:** Code 201
> **Proyecto Víctima:** Product Landing Page (continúa desde C01)
> **Estado:** Capa 2+3 cerrada (M1–M5) — pendiente revisión final de Eric. Guía Excalidraw con 7 Paneles listos para `excalidraw-system`.
> **Fecha:** 2026-05-19
> **Base teórica:** **_mi-sistema/clase-02/CAPA 0 - CLASE 02.md_**

---

## Metadatos de la clase

| | |
|---|---|
| Duración real de clase | 3h (180 min) |
| Tiempo preparado | 2h 30min (150 min) |
| Receso | 10 min (entre M2 y M3) |
| Colchón invisible | 20 min |
| Total Momentos | 5 |
| Herramientas nuevas | Flexbox + DevTools modo responsive |
| Conceptos Flexbox | **_display: flex_**, **_flex-direction_**, **_justify-content_**, **_align-items_**, **_gap_**, **_inline-flex_**, **_flex-grow_**, **_flex-basis_**, **_flex-wrap_**, **_@media (min-width)_** |
| Conceptos de estilo (complementarios) | **_box-sizing_**, **_text-decoration_**, **_color_**, **_font-weight_**, **_font: inherit_**, **_cursor: pointer_**, **_border-radius_** |
| Continuidad con C01 | El alumno llega con HTML semántico listo: **_&lt;header&gt;_**, **_&lt;nav&gt;_**, **_&lt;main&gt;_**, **_&lt;section&gt;_**, **_&lt;footer&gt;_**, hero con imagen, 3 iconos SVG en footer, sección Características como **_&lt;ul&gt;_**, formulario de contacto con **_&lt;label&gt;_**/**_&lt;input&gt;_** |

---

## Tabla de tiempos

| # | Momento | Foco principal | Tiempo | Parte del lab |
|---|---|---|---|---|
| **M1** | Repaso C01 + El problema del layout | El landing de C01 se ve como documento plano — adelanto de Flexbox + por dónde arrancamos | **10 min** | — (hook) |
| **M2** | Normalización + Flexbox completo aplicado al landing | Reset, modelo Flexbox + 4 verbos en nav, estilos de enlace, hero, footer y formulario | **60 min** | Parte 1 (6 sub-pasos) |
| | **RECESO** | | **10 min** | — |
| **M3** | La tríada del ítem: **_flex-grow_**, **_flex-basis_**, **_flex-wrap_** | Logo del nav + grilla de tarjetas en Características | **40 min** | Parte 2 |
| **M4** | Galería + responsividad mobile-first | Galería con **_flex-wrap_** + 2 breakpoints **_@media (min-width)_** | **25 min** | Parte 3 |
| **M5** | Cierre + commit + GitHub Pages | Logros adicionales, commit final, entrega | **15 min** | Logros + Entrega |
| | **Colchón** | Preguntas, retrasos, retos extendidos | **20 min** | — |
| | **Total preparado** | | **150 min** | |

---

## Cadena problema → solución

```
M1: "El landing de C01 tiene estructura HTML correcta,
     pero sin CSS de layout es un documento de texto plano."
          ↓ (adelanto: el modelo se llama Flexbox; antes de meterse en él, el CSS base necesita limpieza)
M2: "Limpiamos el CSS base (reset + box-sizing) y entramos
     a Flexbox completo aplicado al landing: nav, estilos
     de enlace, hero, footer y formulario."
          ↓ (reset + modelo Flexbox + 4 verbos + estilos limpios de enlace + flex-direction:column + inline-flex + patrón form con gap)
RECESO
M3: "El nav distribuye sus enlaces, pero el logo convive
     con ellos como un ítem más — sin jerarquía visual.
     La sección Características sigue siendo una lista plana."
          ↓ (flex-grow empuja el menú; flex-basis + flex-wrap crean la grilla)
M4: "El landing funciona en desktop, pero en móvil la
     galería colapsa en una sola columna que no se ve bien."
          ↓ (galería con flex-wrap base + breakpoints 640px y 1024px)
M5: "Tienen un layout funcional y responsivo — falta versionar y publicar."
          ↓ (commit final + GitHub Pages + logros adicionales opcionales)
```

Cadena natural: cada problema es demostrable en vivo, la solución del siguiente momento responde directamente al dolor que acaban de ver. Pasa el test de §5.3.

---

## Estructura de Momentos

---

### MOMENTO 1 — Repaso C01 + El problema del layout

**Tiempo:** ~10 min
**Parte del lab:** — (no viene del lab — es el hook de apertura)

> **OBJETIVO:** El alumno conecta lo que construyó en C01 (HTML semántico) con el problema que van a resolver hoy: ese HTML sin layout CSS es un documento plano. Al cerrar M1, el alumno sabe que existe un modelo de layout llamado Flexbox que verá completo en M2, y entiende por qué arrancamos por una limpieza del CSS base antes de entrar al modelo.

> **Nota táctica de inicio: llegar con el repo de C01 abierto y sin estilos de layout**
> El punto de partida visual es un landing que funciona semánticamente pero se ve sin estructura. No describir el problema — mostrarlo. Abrir la página de un alumno al azar (o la demo del instructor) y dejar que el grupo lo vea primero antes de decir una palabra. Si el grupo llega tarde, no esperar — arrancar puntual con quienes estén conectados.

---

#### 1.1 Repaso de C01 — qué tiene el landing hoy

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — **_index.html_** del Product Landing Page de C01 abierto a la izquierda, Live Server a la derecha mostrando la página tal como quedó al cierre de la semana pasada (HTML completo, sin reglas de layout CSS).**

> **Tu apertura:**
> *"Buenos días. La entrega de C01 ya está cerrada. Antes de meterle CSS de layout al landing, recordemos qué tenemos sobre la mesa. En el editor está el **_index.html_** que escribieron la semana pasada. En el navegador, la página tal cual la dejaron. Vamos a recorrerla."*

> **La acción guiada:**
> 1. Abrir el repo del Product Landing Page de C01 en VS Code.
> 2. Mostrar **_index.html_** en pantalla completa. Live Server al lado.
> 3. Recorrer el HTML señalando en voz alta: **_&lt;header&gt;_** con **_&lt;nav&gt;_** de enlaces, **_&lt;main&gt;_** con la sección hero (imagen + título), Características como **_&lt;ul&gt;_**, **_&lt;footer&gt;_** con contacto y 3 iconos SVG, formulario de contacto al final.
> 4. *"Cinco bloques semánticos. HTML válido. **_alt_** en las imágenes, **_aria-label_** en los iconos. Eso no se toca hoy."*

> **Pregunta de activación:**
> *Que producto o servicio escogieron para su product landing page?*

---

#### 1.2 El problema visible — layout sin CSS

**EN PANTALLA: NAVEGADOR a pantalla completa — la página del landing scrolleando de arriba a abajo, mostrando el desorden visual: nav apilado, hero sin distribución, footer caótico, formulario suelto.**

> **Tu explicación teórica precisa:**
> *"El HTML está correcto. Le comunica al navegador y al lector de pantalla todo lo que tiene que comunicar. Pero visualmente — miren — los elementos están apilados de arriba a abajo, sin distribución. El nav son 4 enlaces uno debajo del otro. El hero tiene el título arriba, el párrafo en medio, la imagen abajo, sin orden. El footer es una columna de información mezclada con iconos. El formulario flota. Eso pasa porque el HTML estructura, pero no decide layout. 
> QUE ES EL LAYOUT? distribución y organización visual de los elementos en una página web.
> El layout lo decide CSS. Hoy le damos a CSS el modelo que necesita para que esto se vea como una página real."*

> **Demo en vivo en el navegador:**
> 1. Scrollear el landing de arriba a abajo, pausando 2 segundos en cada bloque.
> 2. Señalar con el cursor el nav: *"Cuatro enlaces uno debajo del otro. ¿Así se ve un nav real?"*
> 3. Señalar el hero: *"Título, párrafo, imagen — apilados. La imagen ocupa todo el ancho, sin lugar al lado del texto."*
> 4. Señalar el footer: *"Contacto, iconos, todo en columna. Sin balance."*
> 5. Señalar el formulario: *"Labels e inputs sin alineación, el botón pegado al input."*

> **Pregunta de calibración:**
> *"Si le mandaran este landing tal cual a un cliente real — no le pregunten al cliente "¿está bonito?". Pregúntense ustedes: ¿lo cobrarían?"*
> *(Respuesta esperada: no. El objetivo es que el alumno verbalice el dolor visual en voz alta antes de recibir la solución. Si responden "sí", repreguntar: "¿lo subirían a su portafolio como muestra de su trabajo?" — la respuesta honesta cambia.)*

> **Tu cierre:**
> *"Bien. Ese problema lo resuelve un modelo de CSS que se llama **Flexbox**. Vamos a verlo completo en M2. Antes, una cosa que el lab pone como primer paso y que vale la pena entender."*

---

#### 1.3 Por dónde arrancamos — limpieza primero, Flexbox después

**EN PANTALLA: VS CODE — **_styles.css_** del proyecto, abierto vacío o con las pocas líneas residuales que el alumno haya escrito en C01.**

> **Tu explicación teórica precisa:**
> *"Antes de tocar Flexbox, el CSS necesita una limpieza. Cada navegador trae estilos por default. Chrome los pone distintos a Firefox. Safari distinto a los dos. Los **_&lt;h1&gt;_** vienen con margen. Los **_&lt;ul&gt;_** con padding interno. Los **_&lt;a&gt;_** con subrayado azul. Si meto Flexbox encima de esos defaults, los cálculos de espacio salen raros — cada navegador parte de un valor distinto. Por eso el primer paso del lab de hoy es una normalización: un bloque de CSS que borra los defaults para que partamos de cero. Cinco minutos. Después entramos a Flexbox completo. No es ritual — es la condición que el modelo necesita para funcionar igual en todos los navegadores. Punto."*

> **Pregunta de activación:**
> *"Si dos navegadores ponen márgenes distintos por default — Chrome 8px, Firefox 12px — y yo aplico **_display: flex_** con **_gap: 16px_** sin normalizar antes, ¿qué pasa con el espacio total entre los ítems?"*
> *(Respuesta esperada: en Chrome veo 8+16+8 = 32px de separación, en Firefox 12+16+12 = 40px. El layout deja de verse igual en los dos. Si el alumno responde "no sé", repreguntar: "¿el gap reemplaza al margin o se suma?" — la respuesta correcta es "se suma", lo que justifica el reset.)*

> **Nota táctica de transición:**
> Cierran M1 con el "por qué" del orden del lab claro. M2 abre directamente con el bloque de normalización (sub-punto 2.1), sin volver a explicar de fondo — el alumno ya viene con la justificación.

---

### MOMENTO 2 — Normalización + Flexbox completo aplicado al landing

**Tiempo:** ~60 min
**Parte del lab:** Parte 1 (sub-pasos 1.1 → 1.6)

> **OBJETIVO:** El alumno aplica el reset universal, entiende **_box-sizing: border-box_**, recibe la teoría completa del modelo Flexbox (contenedor vs ítem, main axis vs cross axis) y aplica los 4 verbos esenciales en el nav. Luego escala el modelo a los demás bloques del landing: estilos limpios de enlace, hero con **_flex-direction: column_**, footer con **_inline-flex_** y formulario con patrón Flexbox vertical. Al cerrar M2, el landing se ve ordenado de extremo a extremo.

> **Nota táctica de inicio: la teoría de Flexbox se enseña en 2.2, no antes**
> M2 arranca con normalización (sub-punto 2.1) para no romper la continuidad de Flexbox después. Una vez limpio el CSS base, todo el resto del momento es Flexbox — la teoría del modelo se enseña en 2.2 junto con su primera aplicación al nav, y a partir de ahí cada sub-punto agrega un verbo o un patrón. Antes del code-along de 2.1, hacer la demo en vivo de los defaults del navegador en DevTools — eso justifica el reset.

---

#### 2.1 Reset universal y **_box-sizing: border-box_** — Parte 1.1

**EN PANTALLA: NAVEGADOR CON DEVTOOLS ABIERTO — la página del landing del alumno; F12 abierto en la pestaña Elements, inspeccionando un **_&lt;h1&gt;_** y un **_&lt;a&gt;_** para ver los estilos por default que aplica el navegador.**

> **Tu apertura:**
> *"Antes de escribir Flexbox, demostramos por qué el lab nos pide normalizar primero. Inspeccionemos el **_&lt;h1&gt;_** y el **_&lt;a&gt;_** que ya tienen en su landing."*

> **Demo del problema en vivo:**
> 1. Abrir el landing con Live Server.
> 2. F12 → Elements → seleccionar el **_&lt;h1&gt;_**.
> 3. En la pestaña Computed (o Styles), mostrar **_margin-block-start: 0.67em_** que viene de **_user-agent stylesheet_**.
> 4. *"Eso no lo escribí yo. Eso es Chrome. Firefox pone otro valor. Safari otro."*
> 5. Seleccionar un **_&lt;a&gt;_** del nav. Mostrar **_text-decoration: underline_** y **_color: -webkit-link_** — también del user-agent.
> 6. *"Si meto Flexbox encima de esto, cada navegador hace los cálculos partiendo de un margen distinto. Por eso normalizamos antes."*

> **Tu explicación teórica precisa:**
> *"La normalización es un bloque corto que va al inicio del CSS y borra los defaults del navegador. Lo escribimos con el selector universal — el asterisco — para que aplique a todos los elementos. Le metemos margin y padding en cero, y le metemos **_box-sizing: border-box_**. Eso último cambia cómo se calcula el ancho del elemento: por default, si declaras **_width: 200px_** con **_padding: 20px_**, el elemento mide 240px reales — el padding se suma. Con **_border-box_**, los 200px declarados incluyen padding y border adentro. Ya no se suma nada por fuera. Es el estándar moderno. Sin esto, los porcentajes y los **_gap_** que vamos a usar después se rompen."*

**EN PANTALLA: VS CODE — **_styles.css_** del proyecto, abierto al inicio del archivo (vacío o con líneas residuales de C01).**

> **Code-along del lab — Parte 1.1 (Normalización CSS):**
> 1. Abrir **_styles.css_**.
> 2. Escribir al inicio del archivo el bloque del lab:
> ```css
> * {
>   margin: 0;
>   padding: 0;
>   box-sizing: border-box;
> }
>
> body {
>   font-family: system-ui, sans-serif;
>   line-height: 1.5;
>   color: #1a1a1a;
> }
> ```
> 3. Guardar. Live Server recarga.
> 4. Verificar en el navegador: el **_&lt;h1&gt;_** ya no tiene margen superior; los **_&lt;ul&gt;_** ya no tienen padding a la izquierda. El landing arranca pegado al borde superior de la pantalla.
> 5. *"Bien. Limpieza hecha. Ahora sí entramos al modelo."*

> **Pregunta de calibración:**
> *"Sin esa última propiedad — **_box-sizing: border-box_** — si declaro **_width: 200px_** con **_padding: 20px_**, ¿cuánto mide el elemento en pantalla?"*
> *(Respuesta esperada: 240px (200 + 20 + 20). El padding se suma al ancho. Con **_border-box_**, mide 200px exactos. Si el alumno responde 200px, repreguntar: "¿qué default usa el navegador, **_content-box_** o **_border-box_**?" — la respuesta es **_content-box_**, que es donde el padding se suma.)*

> **Checkpoint obligatorio 2.1:**
> *"Manden en el chat un screenshot de su navegador después de guardar el reset. Espero 60 segundos."*
> *(Avanzar cuando ≥80% del grupo haya enviado. La señal de éxito: el landing pegado al borde sin margen superior.)*

---

#### 2.2 Modelo Flexbox + 4 verbos aplicados al **_&lt;nav&gt;_** — Parte 1.2

> Bloque conceptual integrado (teoría + aplicación inmediata). Es el corazón pedagógico de la clase. Dos pantallas: Excalidraw para la teoría, VS Code para el code-along.

**EN PANTALLA: EXCALIDRAW — Patrón 2 (Caja de definición) + Patrón 1 (Anatomía de sintaxis): el modelo Flexbox dibujado en dos paneles. Panel A muestra un contenedor con 3 cajas adentro + flechas rotuladas main axis (horizontal) y cross axis (vertical). Panel B muestra el bloque CSS de los 4 verbos con flechas a etiquetas: "activa el modelo", "separa ítems", "distribuye en main axis", "alinea en cross axis".**

> **Tu explicación teórica precisa:**
> *"Flexbox es un modelo de CSS para distribuir elementos en una sola dirección a la vez: horizontal o vertical. Le pongo **_display: flex_** al contenedor y todos sus hijos directos se vuelven flex items — quedan bajo el modelo. Los nietos no. Solo los hijos directos. Esa es la regla 1: padre con **_display: flex_**, hijos como ítems."*
>
> *"Cada contenedor tiene dos ejes perpendiculares: el **main axis** y el **cross axis**. La dirección del main axis la decide la propiedad **_flex-direction_**. Por default es **_row_** — horizontal, izquierda a derecha. Si la cambio a **_column_**, el main axis se vuelve vertical. Eso lo van a ver en 2.4 con el hero."*
>
> *"Y los 4 verbos que vamos a usar todo el día son estos. **_display: flex_** activa el modelo. **_gap_** separa los ítems sin tener que meterle margin a cada hijo. **_justify-content_** decide cómo se distribuyen los ítems en el main axis — pegados al inicio, al centro, separados con espacio igual. **_align-items_** decide cómo se alinean en el cross axis. Esos 4. No hay quinto verbo esencial. Lo que viene después de M3 son refinamientos de estos 4."*

> **Pregunta de calibración:**
> *"Si tengo un **_&lt;header&gt;_** y adentro hay un **_&lt;nav&gt;_** y adentro del nav hay 3 **_&lt;a&gt;_**. Le pongo **_display: flex_** al **_&lt;header&gt;_**. ¿Quién se vuelve flex item — el nav o los enlaces?"*
> *(Respuesta esperada: el **_&lt;nav&gt;_**, porque es el hijo directo del header. Los enlaces son nietos del header — no se ven afectados. Si quiero que los enlaces sean flex items, **_display: flex_** va en el **_&lt;nav&gt;_**, que es su padre directo. Si el alumno responde "los enlaces", repreguntar: "¿quién es el hijo directo del header?" para corregir.)*

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — **_styles.css_** a la izquierda; navegador con el nav del landing visible a la derecha.**

> **Code-along del lab — Parte 1.2 (Flexbox básico en el nav):**
> 1. Bajar en **_styles.css_** debajo del bloque de reset.
> 2. Escribir el selector y los 4 verbos del lab:
> ```css
> header nav {
>   display: flex;
>   gap: 1rem;
>   justify-content: space-between;
>   align-items: center;
>   padding: 1rem;
> }
> ```
> 3. Escribir **_display: flex_** primero. Guardar. *"Los enlaces ya están en fila horizontal — eso lo activó **_display: flex_** solo. El default de **_flex-direction_** es **_row_**."*
> 4. Agregar **_gap: 1rem_**. Guardar. *"Aparece espacio entre los enlaces. No usamos margin — usamos **_gap_**."*
> 5. Agregar **_justify-content: space-between_**. Guardar. *"El primer enlace se va al borde izquierdo, el último al borde derecho, el resto distribuido. Eso es el main axis."*
> 6. Agregar **_align-items: center_** y **_padding: 1rem_**. Guardar. *"Todo verticalmente al centro, con respiro arriba y abajo."*

> **Predecir antes de ejecutar:**
> *"Antes de cambiar **_space-between_** por **_center_** — díganme en el chat: ¿qué creen que va a pasar con los enlaces? ¿Dónde van a quedar?"*
> *(Esperar 30 segundos. Esperar respuestas en el chat. Respuesta esperada: los enlaces se agrupan al centro del nav, todos juntos, sin pegarse a los bordes. Después cambiar el valor en vivo, mostrar el resultado, devolver el valor a **_space-between_**.)*

> **Preguntas de Activación:**
> 1. *"Si saco **_align-items: center_** del bloque, ¿qué pasa con la alineación vertical de los enlaces?"*
>    *(Respuesta esperada: queda en **_stretch_** que es el default — los enlaces se estiran a la altura del contenedor. Visible si el contenedor tiene altura distinta a la del texto. En este caso el padding crea esa altura.)*
> 2. *"Si cambio **_gap: 1rem_** por **_gap: 0_**, ¿los enlaces se pegan o se solapan?"*
>    *(Respuesta esperada: se pegan, pero no se solapan. Cada uno ocupa su propio espacio — el gap solo controla la separación visible entre ellos, no la posición.)*

> **Checkpoint obligatorio 2.2:**
> *"Verificamos en pantalla. Los 4 enlaces del nav distribuidos en fila horizontal, con espacio entre ellos, centrados verticalmente, con padding arriba y abajo. Manden screenshot al chat si coincide."*
> *(Avanzar cuando ≥80% del grupo confirme. Si alguien ve los enlaces apilados verticalmente, lo más probable es que escribió la regla en el selector equivocado — repreguntar: "¿el selector dice **_header nav_** o solo **_nav_**?")*

---

#### 2.3 Estilos limpios a los enlaces del nav — Parte 1.3

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — el nav del landing visible, los enlaces todavía azules y subrayados (estilo default del navegador).**

> **Tu explicación teórica precisa:**
> *"El layout del nav ya está. Pero los enlaces se siguen viendo como hipervínculos clásicos — azules, subrayados. Eso es el default del navegador. En un nav real, los enlaces se ven como elementos de menú: sin subrayado, en el color del tema, con un peso de letra que destaque. Tres propiedades resuelven eso. **_text-decoration: none_** quita el subrayado. **_color_** define el color del texto. **_font-weight: 700_** es el peso bold."*

> **Code-along del lab — Parte 1.3 (Estilos a los enlaces del nav):**
> 1. Debajo del bloque **_header nav_**, escribir:
> ```css
> nav a {
>   text-decoration: none;
>   color: #1a1a1a;
>   font-weight: 700;
> }
> ```
> 2. Guardar. Verificar en navegador: los enlaces ya no están subrayados, son negros y bold.
> 3. *"Ya no parecen hipervínculos clásicos. Parecen elementos de menú. Eso es lo que queremos."*

> **Pregunta de activación:**
> *"Si quitan **_text-decoration: none_** pero dejan **_color: #1a1a1a_** y **_font-weight: 700_**, ¿qué cambia en el enlace?"*
> *(Respuesta esperada: vuelve el subrayado azul por default — bueno, en este caso el subrayado vuelve en el color del texto (#1a1a1a) porque **_text-decoration_** hereda el color del elemento. El enlace se ve bold negro pero subrayado. La conclusión: las tres propiedades trabajan juntas para el look "elemento de menú".)*

---

#### 2.4 **_flex-direction: column_** en el hero — primera aparición de mobile-first — Parte 1.4

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — el hero del landing visible, con título, párrafo e imagen apilados sin orden.**

> **Tu explicación teórica precisa:**
> *"Hasta ahora **_flex-direction_** estuvo en su default **_row_** — horizontal. Le voy a poner **_column_** al hero para que el main axis sea vertical. Eso significa que ahora **_justify-content_** controla el eje vertical y **_align-items_** controla el horizontal. Los ejes se invierten cuando cambio **_flex-direction_**."*

> **Declarar la metodología en voz alta (importante — primera vez):**
> *"Antes de escribir el código, una cosa que vale la pena que se les pegue para toda la clase y para todos los proyectos: estamos construyendo este landing con la estrategia **mobile-first**. ¿Qué significa eso? Que el CSS base — el que escribimos sin envolver en media queries — lo pensamos para pantalla pequeña primero. Para móvil. Es nuestro estado por default. Después, en M4, vamos a agregar media queries que **agregan** estilos cuando la pantalla crece. Nunca al revés. El hero es la primera aplicación visible de esto: lo dejamos apilado por default (estado móvil), y en M4 lo haremos lado a lado en desktop con un media query. Footer, formulario, galería — todo lo demás sigue la misma lógica."*

> **Pregunta de calibración:**
> *"En tres frases — ¿por qué mobile-first y no desktop-first? ¿Qué se gana?"*
> *(Respuesta esperada: porque el tráfico web es mayoritariamente móvil; porque es más simple agregar estilos al crecer la pantalla que quitarlos al achicar; porque el estado base — el más simple — corresponde al dispositivo más limitado, lo que obliga a priorizar lo esencial. Si el alumno solo responde "porque es estándar", repreguntar: "¿qué pasa con la cascada CSS si escribo desktop primero y media queries para móvil?" — la cascada se llena de sobrescrituras.)*

> **Code-along del lab — Parte 1.4 (Hero con flex-direction: column):**
> 1. Debajo de la regla **_nav a_**, escribir:
> ```css
> #hero {
>   display: flex;
>   flex-direction: column;
>   align-items: center;
>   gap: 2rem;
>   padding: 2rem;
>   text-align: center;
> }
>
> #hero img {
>   max-width: 100%;
>   height: auto;
> }
> ```
> 2. Guardar. El hero ahora apila título, párrafo e imagen centrados.
> 3. *"Fíjense que la imagen ocupa el ancho completo del padre. Eso es por **_max-width: 100%_** — la imagen puede medir hasta su tamaño nativo, pero su tope es el 100% del padre. **_height: auto_** mantiene la proporción."*

> **Pregunta de activación:**
> *"Si saco **_max-width: 100%_** y la imagen original mide 2400px de ancho, ¿qué pasa con el layout en una pantalla de 1366px?"*
> *(Respuesta esperada: la imagen se sale del contenedor — desborda el viewport hacia la derecha, generando scroll horizontal en toda la página. **_max-width: 100%_** es la regla defensiva estándar para cualquier imagen dentro de un contenedor.)*

---

#### 2.5 **_display: inline-flex_** en el **_&lt;footer&gt;_** — Parte 1.5

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — el footer del landing visible con el contacto a la izquierda y los 3 iconos sociales sueltos.**

> **Tu explicación teórica precisa:**
> *"Dos cosas en el footer. La primera es Flexbox al footer mismo — **_display: flex_** + **_justify-content: space-between_** + **_align-items: center_** — eso ya lo conocen, igual que el nav. La segunda es nueva: los **_&lt;a&gt;_** del footer tienen un icono SVG adentro, y queremos que cada enlace alinee bien su icono sin que el enlace ocupe todo el ancho. Para eso existe **_display: inline-flex_** — un Flexbox que se comporta como inline en el flujo del documento, no como bloque. El **_&lt;a&gt;_** se queda en línea con su contexto, pero internamente alinea su contenido con Flexbox."*

> **Code-along del lab — Parte 1.5 (Flexbox en el footer):**
> 1. Debajo de la regla **_#hero img_**, escribir:
> ```css
> footer {
>   display: flex;
>   justify-content: space-between;
>   align-items: center;
>   padding: 1rem 2rem;
>   gap: 1rem;
>   background: #f5f5f5;
> }
>
> footer a {
>   display: inline-flex;
>   align-items: center;
> }
> ```
> 2. Guardar. Verificar: el contacto está a la izquierda del footer, los iconos a la derecha. Cada icono está bien centrado verticalmente dentro de su enlace.
> 3. *"El footer se ve balanceado. Si pasáramos esto a **_display: flex_** en vez de **_inline-flex_**, cada **_&lt;a&gt;_** ocuparía toda su línea — los iconos se apilarían verticalmente. Por eso es **_inline-flex_**."*

> **Pregunta de calibración:**
> *"En una línea — ¿cuál es la diferencia entre **_display: flex_** y **_display: inline-flex_** desde afuera del contenedor?"*
> *(Respuesta esperada: **_display: flex_** se comporta como bloque (ocupa toda la línea de su contexto); **_display: inline-flex_** se comporta como inline (se ajusta al tamaño de su contenido y convive en línea con otros elementos). Adentro, ambos aplican el modelo Flexbox a sus hijos.)*

---

#### 2.6 Flexbox aplicado al formulario de contacto — Parte 1.6

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — el formulario de contacto del landing visible con labels e inputs desalineados, sin estructura.**

> **Tu explicación teórica precisa:**
> *"Último bloque del momento: el formulario. Aplicamos el mismo patrón de Flexbox vertical que usamos en el hero, pero esta vez con detalles que mejoran el look del form. La sección padre **_#contacto_** se vuelve flex container vertical para centrar el form en la página. El **_&lt;form&gt;_** adentro también es flex vertical — apila los labels y los inputs con un **_gap_** uniforme. Eso reemplaza el viejo hack de meter **_margin-bottom_** a cada hijo. Después aplicamos detalles puntuales: **_font: inherit_** al input para que use la tipografía del body en vez de la default del navegador; **_cursor: pointer_** al botón para que se sienta clickeable al pasar el mouse; **_border-radius_** para esquinas suaves; padding y background al botón para que se vea como botón."*

> **Code-along del lab — Parte 1.6 (Formulario con Flexbox):**
> 1. Debajo de la regla **_footer a_**, escribir el bloque completo del lab:
> ```css
> #contacto {
>   display: flex;
>   flex-direction: column;
>   align-items: center;
>   padding: 2rem;
> }
>
> #contacto form {
>   display: flex;
>   flex-direction: column;
>   gap: 0.5rem;
>   width: 100%;
> }
>
> #contacto label {
>   font-weight: 600;
> }
>
> #contacto input {
>   padding: 0.5rem;
>   border: 1px solid #e0e0e0;
>   border-radius: 4px;
>   font: inherit;
> }
>
> #contacto button {
>   margin-top: 1rem;
>   padding: 0.75rem;
>   background: #1a1a1a;
>   color: #fff;
>   border: none;
>   border-radius: 4px;
>   font-weight: 600;
>   cursor: pointer;
> }
> ```
> 2. Guardar después de cada bloque. Verificar en vivo:
>    - Después de **_#contacto_**: la sección se centra horizontalmente en la página.
>    - Después de **_#contacto form_**: labels e inputs apilados verticalmente con espacio uniforme.
>    - Después de **_#contacto input_**: el input deja de verse como input genérico — usa la fuente del body, tiene borde gris claro, esquinas suaves.
>    - Después de **_#contacto button_**: el botón se ve sólido, negro, con texto blanco. Al pasar el mouse encima — la flecha del cursor cambia a manita.

> **Predecir antes de ejecutar:**
> *"Antes de agregar **_cursor: pointer_** al botón — ¿qué cursor sale cuando paso el mouse encima por default? ¿Manita, flecha o algo más?"*
> *(Esperar respuestas. Resultado real: flecha — los **_&lt;button&gt;_** vienen con **_cursor: default_**, no manita. Por eso hay que ponerlo explícito. Después demostrar: agregar **_cursor: pointer_**, guardar, pasar el mouse — la manita aparece.)*

> **Pregunta de activación:**
> *"Si saco **_font: inherit_** del input, ¿con qué fuente queda escribiendo el usuario?"*
> *(Respuesta esperada: con la fuente default del navegador para inputs — usualmente Arial o Times New Roman dependiendo del sistema operativo. No coincide con la tipografía del body. **_font: inherit_** hereda la fuente del padre, manteniendo coherencia visual.)*

> **Reto autónomo al cerrar M2:**
> Agregar una segunda fila al footer con dos enlaces — "Términos y Condiciones" y "Política de Privacidad" — usando Flexbox interno. Pista: dos opciones — (a) convertir el footer en **_flex-direction: column_** y reorganizar adentro; (b) agregar una **_&lt;div&gt;_** debajo del footer actual con su propio Flexbox horizontal. Criterio: los dos enlaces aparecen en una sola fila separada del contacto y los iconos.

> **Criterio de éxito público:**
> *"M2 se cierra cuando: el nav tiene los 4 enlaces distribuidos sin subrayado, el hero apilado y centrado, el footer con contacto a la izquierda e iconos a la derecha, y el formulario centrado con inputs limpios y botón con manita. Si llegan a ese estado, ganaron el momento. Si quedó algo a medias, el receso es para terminar."*

---

### 🚨 Errores Comunes — Momento 2

| Error | Causa probable | Solución inmediata |
|---|---|---|
| Los enlaces del nav siguen apilados verticalmente | La regla CSS está en el selector equivocado (ej. **_nav_** en vez de **_header nav_**, o **_#nav_** cuando el elemento no tiene id) | Verificar el selector exacto del lab. El HTML usa **_&lt;header&gt;&lt;nav&gt;_** — el selector correcto es **_header nav_** |
| El landing tiene scroll horizontal después del reset | Alguna imagen del hero o galería sin **_max-width: 100%_** desborda el padre | Buscar la imagen culpable en DevTools (Elements → buscar el elemento con overflow); agregar **_max-width: 100%_** + **_height: auto_** |
| El **_gap_** no se aplica | El contenedor no tiene **_display: flex_** todavía | **_gap_** solo funciona en flex containers (y grid). Verificar que la línea **_display: flex_** está antes de **_gap_** y guardada |
| Los enlaces del nav siguen azules subrayados | La regla **_nav a_** no aplica porque está en un selector más específico, o el orden de cascada falla | Inspeccionar el **_&lt;a&gt;_** en DevTools → Computed → ver de qué regla viene el color azul. Subir la especificidad si hace falta (**_header nav a_** en vez de **_nav a_**) |
| Los iconos del footer se apilan verticalmente en vez de quedar en línea | El selector **_footer a_** tiene **_display: flex_** en vez de **_display: inline-flex_** | Reemplazar por **_inline-flex_**. La diferencia: **_flex_** se comporta como block (ocupa toda la línea), **_inline-flex_** se queda en línea con el contexto |
| El botón Enviar no muestra manita al pasar el mouse | Falta **_cursor: pointer_** o la regla está en el selector equivocado | El selector del lab es **_#contacto button_**. Verificar que está dentro de ese bloque y guardado |

---

> **Commit sugerido al cerrar M2:**
> ```bash
> git add styles.css
> git commit -m "feat: normalización CSS + Flexbox básico en nav, hero, footer y form"
> git push
> ```

> **Nota táctica de transición a M3:**
> Cierran M2 con el landing ordenado de extremo a extremo — nav, hero, footer y form usando Flexbox básico. Después del receso (10 min) entramos a las propiedades del **ítem** (no del contenedor). Eso resuelve dos cosas que el M2 deja abiertas: el logo del nav que todavía convive al mismo nivel que los demás enlaces, y la sección Características que sigue siendo una lista plana.

---

### RECESO — 10 min

---

### MOMENTO 3 — La tríada del ítem: **_flex-grow_**, **_flex-basis_**, **_flex-wrap_**

**Tiempo:** ~40 min
**Parte del lab:** Parte 2 (sub-pasos 2.1 → 2.2)

> **OBJETIVO:** El alumno distingue las propiedades del contenedor (M2) de las propiedades del ítem (M3). Aplica **_flex-grow_** para el patrón estándar del navbar, y **_flex-basis_** + **_flex-wrap_** + **_flex-grow_** para transformar la sección Características en una grilla de tarjetas naturalmente responsiva — sin media queries.

---

#### 3.1 **_flex-grow_** — el logo empuja al menú — Parte 2.1 del lab

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — el nav del landing actual con 4 enlaces distribuidos por **_space-between_** desde M2 (sin logo todavía).**

> **Tu apertura:**
> *"En M2 el nav distribuyó 4 enlaces al mismo nivel. Pero un nav real tiene un logo a la izquierda y el menú a la derecha — no 4 cosas al mismo nivel. Vamos a agregar el logo y resolver eso con una sola propiedad nueva: **_flex-grow_**."*

**EN PANTALLA: EXCALIDRAW — Patrón 2 + visualización de **_flex-grow_** en acción: un contenedor con 4 ítems donde el primero (logo) tiene **_flex-grow: 1_** y los otros tienen el default 0. Visualmente el logo absorbe todo el espacio sobrante; los otros tres quedan pegados al borde derecho.**

> **Tu explicación teórica precisa:**
> *"**_flex-grow_** es una propiedad del **ítem**, no del contenedor. Las 4 propiedades de M2 — **_display: flex_**, **_gap_**, **_justify-content_**, **_align-items_** — viven en el contenedor padre. **_flex-grow_** vive en cada hijo."*
>
> **¿Qué es **_flex-grow_**?** Propiedad que define cuánto del espacio sobrante absorbe un ítem. Valor default: **_0_** (no crece).
>
> - Un solo ítem con **_flex-grow: 1_** y los demás en **_0_** → ese ítem absorbe TODO el espacio libre.
> - Dos ítems con **_flex-grow: 1_** cada uno → se reparten el espacio libre por partes iguales.
> - Uno con **_flex-grow: 2_** y otro con **_flex-grow: 1_** → el primero absorbe el doble del espacio.

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — **_index.html_** a la izquierda (en el bloque del nav), navegador a la derecha.**

> **Code-along del lab — Parte 2.1 (flex-grow en el logo):**
> 1. En **_index.html_**, agregar el logo como **primer** enlace del nav:
> ```html
> <nav>
>   <a href="#" class="logo">Mi Producto</a>
>   <a href="#">Inicio</a>
>   <a href="#">Producto</a>
>   <a href="#">Contacto</a>
> </nav>
> ```
> 2. En **_styles.css_**, debajo de la regla **_nav a_**, escribir:
> ```css
> header nav .logo {
>   flex-grow: 1;
> }
> ```
> 3. Guardar. Verificar en navegador: el logo absorbe todo el espacio sobrante, los demás enlaces se alinean al borde derecho.
> 4. *"Este es el patrón estándar de navbars en producción. Cualquier sitio que abran — GitHub, Notion, Spotify — el logo a la izquierda, el menú a la derecha. Lo decide **_flex-grow_**."*

> **Pregunta de activación:**
> *"Si pongo **_flex-grow: 1_** a TODOS los enlaces del nav (incluido el logo), ¿qué pasa en pantalla?"*
> *(Respuesta esperada: el espacio sobrante se reparte entre los 4 enlaces por partes iguales. El logo deja de "empujar" — cada enlace se estira al mismo ancho. El efecto de jerarquía visual se pierde.)*

---

#### 3.2 **_flex-wrap_** — desbordar a una nueva línea

**EN PANTALLA: EXCALIDRAW — Patrón 2 (Caja de definición) + visualización antes/después: un contenedor angosto con 5 ítems. Estado A — **_flex-wrap: nowrap_** (default): los 5 ítems se aplastan en una sola línea, comprimiéndose. Estado B — **_flex-wrap: wrap_**: los ítems que no caben bajan a una nueva línea (3 arriba, 2 abajo).**

> **Tu explicación teórica precisa:**
> **¿Qué es **_flex-wrap_**?** Propiedad del **contenedor**. Decide si los flex items se acomodan en una sola línea o pueden saltar a una nueva cuando no caben.
>
> - **_nowrap_** (default) → todos en una sola línea. Si no caben, se aplastan unos contra otros.
> - **_wrap_** → los ítems que no caben bajan a una nueva línea.
> - **_wrap-reverse_** → igual que **_wrap_**, pero las nuevas líneas se forman hacia arriba (uso muy raro).
>
> *"En el nav del momento 2 nunca tocamos **_flex-wrap_** porque solo había 4 enlaces, siempre cabían. Pero en una grilla de tarjetas, en pantalla angosta, las tarjetas necesitan poder bajar de línea. Sin **_flex-wrap: wrap_**, se aplastan o desbordan. Con **_wrap_**, se reorganizan solas."*

---

#### 3.3 **_flex-basis_** — el tamaño base del ítem

**EN PANTALLA: EXCALIDRAW — Patrón 2 (Caja de definición) + visualización del comportamiento: 3 ítems con **_flex-basis: 280px_** dentro de un contenedor de 900px de ancho (caben los 3); el mismo contenedor a 600px de ancho (caben 2, el tercero baja gracias a **_flex-wrap: wrap_**); el mismo contenedor a 320px (cabe 1 por fila).**

> **Tu explicación teórica precisa:**
> **¿Qué es **_flex-basis_**?** Propiedad del **ítem**. Define el tamaño inicial del ítem en el main axis ANTES de que **_flex-grow_** lo estire o **_flex-wrap_** lo mueva a otra línea.
>
> - Funciona como **_width_** dentro del flex container.
> - Ejemplo: **_flex-basis: 280px_** le dice al ítem "arrancas midiendo 280px".
> - Si el contenedor no tiene espacio para todos los ítems a su **_flex-basis_**, ahí entra **_flex-wrap_** a decidir si se aplastan (default) o bajan de línea.
>
> *"Combinen **_flex-basis_** con **_flex-wrap_** y obtienen el truco más útil de Flexbox: una grilla que cambia el número de columnas según el ancho de la pantalla, sin escribir una sola media query."*

---

#### 3.4 Grilla de tarjetas — la tríada combinada — Parte 2.2 del lab

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — la sección Características del landing actual (todavía como **_&lt;ul&gt;_** con **_&lt;li&gt;_** plana, sin estructura visual).**

> **Tu apertura:**
> *"Ya conocen las 3 propiedades por separado: **_flex-grow_** del logo en 3.1, **_flex-wrap_** y **_flex-basis_** que acabamos de ver. Ahora las combinamos para transformar la sección Características en una grilla de tarjetas con iconos — patrón que van a usar en cada landing page profesional."*

> **Code-along del lab — Parte 2.2 (Grilla de tarjetas):**
>
> **Paso A — HTML.** Reemplazar el **_&lt;ul&gt;_** con **_&lt;li&gt;_** de C01 por un **_&lt;div class="cards"&gt;_** con 3 **_&lt;article class="card"&gt;_**:
> ```html
> <section id="caracteristicas">
>   <h2>Características</h2>
>   <div class="cards">
>     <article class="card">
>       <img src="img/icono-1.svg" alt="" width="48" height="48">
>       <h3>Título de característica 1</h3>
>       <p>Descripción breve adaptada a tu producto.</p>
>     </article>
>     <article class="card">
>       <img src="img/icono-2.svg" alt="" width="48" height="48">
>       <h3>Título de característica 2</h3>
>       <p>Descripción breve adaptada a tu producto.</p>
>     </article>
>     <article class="card">
>       <img src="img/icono-3.svg" alt="" width="48" height="48">
>       <h3>Título de característica 3</h3>
>       <p>Descripción breve adaptada a tu producto.</p>
>     </article>
>   </div>
> </section>
> ```
>
> **Paso B — Iconos.** Entrar a **_svgrepo.com_**, descargar 3 iconos SVG relevantes al producto. Guardar como **_img/icono-1.svg_**, **_img/icono-2.svg_**, **_img/icono-3.svg_**.
>
> **Paso C — CSS.** En **_styles.css_**, debajo de las reglas anteriores:
> ```css
> #caracteristicas {
>   padding: 2rem;
> }
>
> .cards {
>   display: flex;
>   flex-wrap: wrap;
>   gap: 16px;
>   margin-top: 16px;
> }
>
> .card {
>   flex-basis: 280px;
>   flex-grow: 1;
>   padding: 1rem;
>   border: 1px solid #e0e0e0;
>   border-radius: 8px;
>   background: #fff;
> }
> ```
>
> Explicar mientras se aplica cada propiedad — ya conocen el qué de cada una, ahora ven el cómo juntas:
> - **_flex-wrap: wrap_** en **_.cards_** → habilita que las tarjetas bajen de línea.
> - **_flex-basis: 280px_** en **_.card_** → cada tarjeta arranca con 280px. En 900px caben 3 (3 × 280 = 840 + gaps). En 600px caben 2 (la tercera baja sola).
> - **_flex-grow: 1_** en **_.card_** → si sobra espacio en la fila, se estiran para llenarlo. No quedan huecos al borde derecho.

---

#### 3.5 Checkpoint visual — responsividad sin media queries

**EN PANTALLA: NAVEGADOR a pantalla completa, redimensionando la ventana arrastrando el borde derecho lentamente.**

> **Demo en vivo:**
> 1. Pantalla ancha (≥900px): 3 tarjetas en fila, equiespaciadas.
> 2. Arrastrar el borde derecho hacia adentro lentamente. Cuando el ancho cae por debajo del umbral, la tercera tarjeta baja sola a una segunda fila.
> 3. Pantalla media (~600px): 2 tarjetas arriba, 1 abajo. La de abajo se estira al ancho completo (por **_flex-grow: 1_**).
> 4. Pantalla angosta (~320px): 1 tarjeta por fila.
> 5. *"Sin escribir una sola media query. La tríada **_flex-basis_** + **_flex-wrap_** + **_flex-grow_** lo hace solo. Esto es lo que hace que Flexbox sea el modelo estándar de layouts modernos."*

> **Pregunta de activación:**
> *"Si saco **_flex-wrap: wrap_** del contenedor (lo dejo en default **_nowrap_**), ¿qué pasa cuando achico la pantalla a 320px?"*
> *(Respuesta esperada: las 3 tarjetas se aprietan en una sola fila — el contenido se aplasta o desborda. **_flex-wrap: wrap_** es la propiedad que habilita el comportamiento responsivo natural. Sin ella, la grilla deja de adaptarse.)*

> **Reto autónomo al cerrar M3:**
> Efecto hover en las tarjetas: **_transform: translateY(-4px)_** + **_box-shadow_** + **_transition_**. Pista: usar el selector **_.card:hover_**. Criterio: la tarjeta se eleva ligeramente con una sombra suave al pasar el cursor.

> **Commit sugerido al cerrar M3:**
> ```bash
> git add .
> git commit -m "feat: logo en el nav + grilla de Características con flex-wrap"
> git push
> ```

---

### MOMENTO 4 — Galería + responsividad mobile-first

**Tiempo:** ~25 min
**Parte del lab:** Parte 3 (sub-pasos 3.1 → 3.3)

> **OBJETIVO:** El alumno agrega la sección galería y escribe sus primeras media queries con estrategia mobile-first. Al cerrar M4, el landing tiene layout responsivo verificado en DevTools en los 3 breakpoints: móvil (<640px), tablet (640–1023px) y escritorio (≥1024px).

---

#### 4.1 Galería con **_flex-wrap: wrap_** + **_flex-grow_** como base móvil — Parte 3.1 del lab

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — **_index.html_** al final del **_&lt;main&gt;_** y **_styles.css_** abierto, listos para agregar la sección galería.**

> **Tu apertura:**
> *"En M3 hicieron la grilla de Características responsiva sin media queries — con la tríada del ítem. Ahora vamos a agregar la galería de imágenes del producto. La base móvil va a usar el mismo patrón: **_flex-wrap: wrap_** + **_flex-grow_**. Después, en 4.2, agregamos media queries para controlar exactamente cuántas imágenes por fila queremos en cada tamaño de pantalla."*

> **Code-along del lab — Parte 3.1 (Galería base móvil):**
>
> **Paso A — HTML.** Al final del **_&lt;main&gt;_**, agregar:
> ```html
> <section id="galeria">
>   <h2>Galería</h2>
>   <div class="galeria">
>     <img src="img/g1.jpg" alt="Vista 1 del producto">
>     <img src="img/g2.jpg" alt="Vista 2 del producto">
>     <img src="img/g3.jpg" alt="Vista 3 del producto">
>     <img src="img/g4.jpg" alt="Vista 4 del producto">
>   </div>
> </section>
> ```
>
> **Paso B — CSS base (móvil).** En **_styles.css_**, debajo de las reglas del formulario:
> ```css
> #galeria {
>   padding: 2rem;
> }
>
> .galeria {
>   display: flex;
>   flex-wrap: wrap;
>   gap: 0.5rem;
>   margin-top: 1rem;
> }
>
> .galeria img {
>   max-width: 100%;
>   flex-grow: 1;
>   height: auto;
>   border-radius: 4px;
> }
> ```
>
> Explicación de cada propiedad:
> - **_display: flex_** + **_flex-wrap: wrap_** en el contenedor → las imágenes pueden bajar a nueva línea.
> - **_max-width: 100%_** en las imágenes → no desbordan el contenedor en pantalla angosta.
> - **_flex-grow: 1_** en las imágenes → cuando queden menos imágenes en una fila, se estiran para llenar el espacio sin dejar huecos.
>
> Guardar. Verificar en navegador a tamaño actual: las 4 imágenes se reorganizan según el ancho disponible. En el viewport ancho actual probablemente se ven todas en una fila o dos.

---

#### 4.2 **_@media (min-width)_** — breakpoints 640px y 1024px — Parte 3.2 del lab

**EN PANTALLA: EXCALIDRAW — Patrón 1 (Anatomía de sintaxis) + secuencia de 3 estados: anatomía de **_@media (min-width)_** con flechas a sus partes, y al lado el comportamiento de la galería en los 3 breakpoints (móvil 1 columna, tablet 2 columnas, desktop 4 columnas).**

> **Tu explicación teórica precisa:**
> *"Hasta ahora todo el CSS que escribimos aplica siempre, sin importar el tamaño de la pantalla. Las **_@media queries_** son bloques de CSS condicionales: 'aplica estos estilos SOLO cuando se cumple esta condición'."*
>
> **¿Qué es **_@media (min-width: 640px)_**?** Regla CSS que dice "aplicá los estilos de adentro de este bloque CUANDO el viewport mida al menos 640px de ancho".
>
> - **_min-width_** → "desde este ancho hacia arriba" (mobile-first, lo que usamos).
> - **_max-width_** → "desde este ancho hacia abajo" (desktop-first, lo que NO usamos).
>
> *"Recordemos la metodología que declaramos en 2.4: estamos construyendo mobile-first. Eso significa que nuestro CSS base — el que ya tenemos escrito — es el estado móvil. Las **_@media queries_** que vamos a agregar AHORA solo van a **agregar o cambiar** estilos cuando la pantalla crece. Es aditivo, no restrictivo. Por eso siempre **_min-width_**, nunca **_max-width_**."*
>
> **Breakpoints del lab:**
> - **_640px_** → tablet. La galería pasa de 1 columna a 2 columnas (**_width: 48%_** por imagen).
> - **_1024px_** → escritorio. El hero pasa de apilado a lado a lado (**_flex-direction: row_**); la galería pasa a 4 columnas (**_width: 23%_** por imagen).

**EN PANTALLA: VS CODE — **_styles.css_** abierto al final del archivo.**

> **Code-along del lab — Parte 3.2 (Las dos media queries):**
> Al **final** de **_styles.css_** (después de todas las reglas base), agregar:
> ```css
> /* ===== TABLET (640px en adelante) ===== */
> @media (min-width: 640px) {
>   .galeria img {
>     width: 48%;
>   }
> }
>
> /* ===== ESCRITORIO (1024px en adelante) ===== */
> @media (min-width: 1024px) {
>   #hero {
>     flex-direction: row;
>     text-align: left;
>   }
>   #hero img {
>     max-width: 50%;
>   }
>   .galeria img {
>     width: 23%;
>   }
> }
> ```
>
> Guardar. Comentar mientras se escribe:
> - *"**_width: 48%_** y no 50% — el 2% restante es el espacio que necesitan los **_gap_** entre las imágenes. Si pongo 50% justo, la segunda imagen no cabe en la fila por culpa del gap y baja."*
> - *"**_width: 23%_** para 4 columnas — 4 × 23 = 92%, el 8% restante absorbe los 3 gaps entre imágenes."*
> - *"En el bloque de 1024px también cambio el **_#hero_** a **_flex-direction: row_**. Eso es lo que dije en 2.4: el hero se queda apilado en móvil y tablet, y solo en desktop pasa a lado a lado. Ahí lo concretamos."*

---

#### 4.3 Verificación en DevTools — los 3 niveles — Parte 3.3 del lab

**EN PANTALLA: NAVEGADOR CON DEVTOOLS — F12 abierto, modo responsive activado (icono de móvil arriba a la izquierda de DevTools), barra de ancho del viewport visible arriba.**

> **Demo en vivo:**
> 1. F12 → activar modo responsive (toggle device toolbar, atajo **_Ctrl+Shift+M_**).
> 2. Arrastrar el ancho del viewport desde la derecha, lentamente, mientras se cruzan los 2 breakpoints.
> 3. Verificar la tabla del lab en cada nivel:
>
> | Viewport | Qué debe verse |
> |---|---|
> | **<640px (móvil)** | Hero apilado, galería en 1 columna |
> | **640–1023px (tablet)** | Hero apilado todavía, galería en 2 columnas |
> | **≥1024px (escritorio)** | Hero lado a lado, galería en 4 columnas |
>
> 4. *"Sin scroll horizontal en ningún tamaño. Si aparece scroll horizontal, es señal de que alguna propiedad está desbordando el viewport — usualmente una imagen sin **_max-width: 100%_** o un cálculo de porcentajes que se pasa de 100% con el gap."*

> **Pregunta de activación:**
> *"Si abro mi landing en un iPhone real con pantalla de 390px, ¿qué bloque de media queries aplica?"*
> *(Respuesta esperada: ninguno — 390px está por debajo del primer breakpoint de 640px. Aplica solo el CSS base, que es el estado móvil. Esa es la prueba de que mobile-first funciona: el dispositivo más limitado recibe el estilo más simple, sin necesidad de cargar reglas extra que no usa.)*

> **Reto autónomo al cerrar M4:**
> Agregar **_&lt;figcaption&gt;_** o **_&lt;p&gt;_** debajo de cada imagen de la galería con una descripción corta. Cada imagen + su texto deben mantenerse agrupados como una "tarjetita" usando Flexbox interno. Pista: envolver cada **_&lt;img&gt;_** en una **_&lt;figure&gt;_** con **_display: flex_** + **_flex-direction: column_**.

> **Commit sugerido al cerrar M4:**
> ```bash
> git add .
> git commit -m "feat: galería responsiva con 2 breakpoints mobile-first"
> git push
> ```

---

### MOMENTO 5 — Cierre + commit + GitHub Pages

**Tiempo:** ~15 min
**Parte del lab:** Logros adicionales + Entrega

> **OBJETIVO:** El alumno cierra la sesión con el código versionado en GitHub y publicado en GitHub Pages. Los logros adicionales quedan como trabajo asíncrono para quienes terminen antes o quieran extender. El alumno sale con un puente claro hacia Clase 03 — sabe qué problema queda abierto que Flexbox no resuelve.

---

#### 5.1 Logros adicionales — opcionales para alumnos que terminen antes

**EN PANTALLA: NAVEGADOR — la sección "⭐️ Logros adicionales" del lab abierta para mostrar.**

> **Tu apertura:**
> *"Antes de cerrar, dos logros opcionales del lab. No los vamos a hacer juntos — son para quienes terminen antes, quieran practicar más, o quieran que su landing destaque en su portafolio. Los menciono rápido y dejo el código de pista."*

> **Logros del lab:**
>
> - **🏆 Logro 1 — Sección Testimonios.** Agregar una sección Testimonios con 2-3 opiniones en tarjetas. Misma estructura que la grilla de Características: **_display: flex_** + **_flex-wrap: wrap_** + **_flex-basis_** + **_flex-grow_**. En desktop los testimonios van en fila, en móvil en columna. Sin media queries.
> - **🏆 Logro 2 — Microinteracciones con CSS.** Transiciones suaves en botones e imágenes con **_transform_**, **_transition_** y **_:hover_**. Patrón típico: botón que se eleva al pasar el mouse, imagen que crece sutilmente. Pista: **_transition: all 0.2s ease_** + **_transform: translateY(-2px)_** + **_box-shadow_** en el estado **_:hover_**.

> *"Los dos están en la sección Logros del lab. Los suben con un commit aparte si los hacen."*

---

#### 5.2 Commit final + publicación en GitHub Pages

**EN PANTALLA: TERMINAL / GIT BASH — terminal abierta en el directorio del proyecto, lista para los comandos.**

> **Tu apertura:**
> *"Cerramos con el flujo de entrega. Un commit que junte todo el trabajo del día, push al remoto, y verificación de que GitHub Pages actualizó la página publicada."*

> **Acción guiada:**
> 1. En terminal, verificar el estado actual:
> ```bash
> git status
> ```
> 2. Agregar los cambios y hacer el commit final del día:
> ```bash
> git add .
> git commit -m "feat: layout completo con Flexbox + responsividad mobile-first"
> git push
> ```
> 3. Esperar 30-60 segundos a que GitHub Pages procese el deploy.

**EN PANTALLA: NAVEGADOR — la URL de GitHub Pages del proyecto del alumno (formato **_https://{usuario}.github.io/{repo}/_**).**

> **Verificación de deploy:**
> 1. Abrir la URL de GitHub Pages del proyecto.
> 2. Forzar recarga sin caché: **_Ctrl+Shift+R_** (Windows) o **_Cmd+Shift+R_** (Mac).
> 3. Verificar que se ve la misma página que tienen en Live Server local.
> 4. Cruzar los 3 breakpoints en DevTools modo responsive directamente sobre la URL publicada — confirmar que la responsividad funciona igual que en local.

> **Criterio de entrega del lab:**
> En el canal de Teams del curso, pegar:
> - URL del repositorio en GitHub.
> - URL del deploy en GitHub Pages.

---

#### 5.3 Puente a Clase 03 — el problema que Flexbox no resuelve

**EN PANTALLA: NAVEGADOR — la página del landing terminada, scroll arriba para que se vea el nav + hero.**

> **Tu cierre:**
> *"Tienen el landing completo: layout, estilos limpios, responsivo en 3 breakpoints, publicado en GitHub Pages. Eso es CSS moderno bien hecho. Antes de cerrar, una cosa que vale la pena que quede picando para la próxima."*
>
> *"Flexbox es **unidimensional**. Trabaja en una sola dirección a la vez — fila O columna. Eso es perfecto para grillas simples como la que armamos hoy, para navs, para footers, para cualquier cosa que sea 'una fila de cosas' o 'una columna de cosas'."*
>
> *"Pero cuando el layout tiene que ser **bidimensional** — un header arriba, un sidebar a la izquierda, contenido principal al centro, footer abajo, TODO al mismo tiempo en una grilla 2D — Flexbox empieza a quedar corto. Tienen que anidar contenedores y la cosa se vuelve compleja."*
>
> *"Para eso existe el otro modelo de layout de CSS: **CSS Grid**. Funciona en dos ejes a la vez. Te permite dibujar una tabla bidimensional en el CSS y colocar cada bloque en una celda específica. Eso es Clase 03."*
>
> *"Por ahora, lo que armamos hoy les alcanza para CUALQUIER landing page que les pidan. Cierren con el deploy verificado y los suba al canal de Teams. Nos vemos en C03."*

---

## Mapeo Momentos ↔ Lab ↔ Conceptos de Capa 0

| Momento | Parte del lab | Conceptos de Capa 0 que toca |
|---|---|---|
| M1 | — (hook) | Repaso C01 + mención de Flexbox como solución que viene en M2 (sin teoría) |
| M2 | Parte 1 (1.1–1.6) | Normalización CSS, **_box-sizing: border-box_**, **Flexbox como modelo + contenedor vs ítem + main axis / cross axis** (teoría completa), **_display: flex_**, **_gap_**, **_justify-content_**, **_align-items_**, **_text-decoration: none_**, **_color_**, **_font-weight_**, **_flex-direction_** (incluye **_column_** en hero), **_display: inline-flex_**, **_font: inherit_**, **_cursor: pointer_**, **_border-radius_**, patrón form con Flexbox column |
| M3 | Parte 2 (2.1–2.2) | **_flex-grow_**, **_flex-basis_**, **_flex-wrap_** |
| M4 | Parte 3 (3.1–3.3) | Mobile-first, **_@media (min-width)_**, porcentajes en breakpoints, **_flex-grow_** en imágenes de galería |
| M5 | Logros + Entrega | Microinteracciones (**_:hover_**, **_transition_**, **_transform_**) — opcionales |

**Validación de paridad Momento ↔ Parte del lab:**
- ✅ Cada Momento de code-along (M2, M3, M4) cita una Parte específica del lab cuyos sub-pasos **_X.Y_** Eric puede leer verbatim.
- ✅ Cada concepto de Capa 0 tiene su aplicación al proyecto víctima en alguna Parte del lab.
- ✅ Sin conceptos huérfanos de aplicación (**_flex-shrink_** y **_align-self_** son referencia de slides, no se aplican en código).
- ✅ La grilla de tarjetas (M3) es naturalmente responsiva sin media queries — ese es el punto de sorpresa pedagógica del momento.
