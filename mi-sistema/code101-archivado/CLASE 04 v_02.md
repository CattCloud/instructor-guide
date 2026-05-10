# CLASE 04 v_02 — A partir del MOMENTO 2
> **Nota:** Este documento cubre desde el Momento 2 en adelante.
> El Momento 1 (Selectores + Especificidad + Hover) se mantiene desde `CLASE 04.md`.
> Esta versión refleja el orden y los temas reales de la clase dictada.

---

## MOMENTO 2: Pensando en el Espacio (Layout y `display`)
**Tiempo:** ~35 min

---

### 2.1 El Concepto de Layout — Comparación de páginas reales

**EN PANTALLA: NAVEGADOR — Dos páginas web abiertas en pestañas (ej. Canva y Stripe), mostradas lado a lado o alternando.**

> **La pregunta de arranque:**
> *"Quiero que vean estas dos páginas web. Olvídense de los colores y las imágenes por un momento. Fíjense solo en cómo están posicionados los elementos: el header, los bloques, las tarjetas. ¿Se ven iguales o ven diferencias?"*
>
> *(Dejar que el chat responda. Esperar 3-4 respuestas antes de continuar.)*

> **Tu explicación teórica precisa:**
> *"Exacto — son distintas. Eso que acaban de notar tiene un nombre: Layout. El Layout es la forma exacta en que distribuimos los elementos en el espacio disponible de una pantalla.*
>
> *No existe un único Layout válido. YouTube usa uno, Airbnb usa otro, los portafolios usan otro. Son diferentes porque cada uno responde a una necesidad del usuario.*
>
> *¿Por qué les hablo de esto hoy? Porque para lograr estas estructuras necesitamos una herramienta CSS que se llama Flexbox. Pero antes de encenderla, necesitamos entender la propiedad que la activa."*

---

### 2.2 La Propiedad `display` — Cambiando la naturaleza de la caja

**EN PANTALLA: PANTALLA DIVIDIDA — VS Code (`styles.css` del Lab abierto) + Navegador con Live Server.**

> **Tu explicación teórica precisa:**
> *"Recuerdan que vimos que hay elementos en bloque (que ocupan toda la línea y empujan hacia abajo) y elementos en línea (que solo ocupan su espacio). ¿Quién decide eso? Una propiedad CSS que ya está trabajando sin que ustedes la hayan escrito: `display`.*
>
> *El navegador ya le asignó un valor de `display` a cada etiqueta HTML desde el inicio. No es magia — lo podemos comprobar."*

> **Demo en DevTools (30 seg):**
> 1. *"Abran DevTools (`F12`), seleccionen el `h1` con la herramienta de elemento."*
> 2. *"En el panel Styles (o Computed), busquen la propiedad `display`. ¿Qué dice?"*
> 3. *"Dice `block`. El navegador lo puso. No lo escribí yo. A los `<a>` les puse `inline`. A las imágenes les pone `inline-block`."*

> **Demo en vivo — Contradiciendo la naturaleza:**
> ```css
> /* Un <a> es inline por naturaleza — hacerlo block */
> a {
>     display: block;
> }
> ```
> *"Guardé. Miren el navegador. Los enlaces que estaban uno al lado del otro ahora cada uno ocupa toda la línea — porque se comportan como block. CSS nos da el poder de reescribir la naturaleza HTML. Borramos eso, era solo una demostración.*
>
> *Y esta misma propiedad es la que encenderá Flexbox. En lugar de `block` o `inline`, le pondremos el valor `flex` — y eso lo cambia todo."*

> **Nota táctica:** Borrar los cambios de demostración antes de continuar. No dejar el CSS sucio.

---

## MOMENTO 3: La Magia de Flexbox (Fundamentos y Ejes)
**Tiempo:** ~35 min

---

### 3.1 ¿Qué es Flexbox? — La analogía del anticucho

**EN PANTALLA: EXCALIDRAW — Dibuja en vivo: un palo horizontal con círculos ensartados (anticucho/brocheta). Luego girar el palo verticalmente.**

> **Tu explicación teórica precisa:**
> *"Flexbox es el sistema moderno de CSS para posicionar elementos dentro de un contenedor. Y tiene una regla de oro que no pueden olvidar: es unidimensional.*
>
> *¿Qué significa unidimensional? Miren este palo — una brocheta. Puedo ensartar los trozos de carne en una sola dirección: en fila horizontal así, o parado en columna así. No hay forma de poner un trozo a la izquierda-arriba y otro a la derecha-abajo con un solo palo. Solo una dimensión a la vez.*
>
> *Flexbox funciona exactamente igual. Organiza elementos en una fila — o en una columna. Nunca los dos al mismo tiempo con una misma propiedad. Para las dos dimensiones a la vez existe otro sistema: CSS Grid, que veremos más adelante."*

---

### 3.2 Anatomía Flex — El Padre y los Hijos

**EN PANTALLA: PRESENTACIÓN CANVA (imagen de anatomía Flexbox: contenedor azul con ítems verdes adentro) → luego VS Code.**

> **Tu explicación teórica precisa:**
> *"Para hablar el idioma de los profesionales: la caja grande que contiene a todos es el Flex Container (el Padre). Los elementos que viven directamente adentro son los Flex Items (los Hijos).*
>
> *El secreto más importante de Flexbox: las órdenes se le dan casi siempre al Padre, no a los hijos. Tú le dices al contenedor cómo debe organizar a sus hijos.*
>
> *Para encender el motor, seleccionamos el Padre en CSS y le ponemos una sola línea:*"
> ```css
> nav {
>     display: flex;
> }
> ```
> *"Guarden y miren el navegador. ¿Qué pasó con los enlaces del menú?"*
>
> *(Respuesta esperada: se pusieron en fila horizontal.)*
>
> *"Exacto — automáticamente en fila. Ese es el comportamiento por defecto de Flexbox."*

---

### 3.3 Los Ejes — La Brújula Invisible

**EN PANTALLA: PRESENTACIÓN CANVA (imagen de los dos ejes: Main Axis horizontal y Cross Axis vertical).**

> **Tu explicación teórica precisa:**
> *"En el momento exacto en que escriben `display: flex`, el navegador dibuja imaginariamente una brújula con dos líneas dentro del contenedor:*
>
> *— El Eje Principal (Main Axis): donde se alinean los elementos. Por defecto, va de izquierda a derecha.*
> *— El Eje Secundario (Cross Axis): siempre perpendicular al principal. Por defecto, va de arriba a abajo.*
>
> **Regla crítica:** el eje principal no siempre es horizontal. Los ejes dependen de la dirección que ustedes definan. Si cambian la dirección, los ejes rotan con ella. Memoricen esto porque es el error número uno de los programadores junior."*

---

### 3.4 `flex-direction` — Rotando el Eje

**EN PANTALLA: PANTALLA DIVIDIDA — VS Code + Navegador. Con el `nav` ya en `display: flex`.**

> **La acción guiada:**
> ```css
> nav {
>     display: flex;
>     flex-direction: row;     /* fila — es el valor POR DEFECTO */
> }
> ```
> *"No necesitan escribir `row` porque ya es el por defecto. Pero quiero que lo vean explícito."*
>
> *"Ahora cambiemos a column:"*
> ```css
> nav {
>     display: flex;
>     flex-direction: column;
> }
> ```
> *"Los enlaces bajaron y se pusieron uno debajo del otro. El eje principal ahora es vertical.*
>
> *Dato real: en páginas web de escritorio el menú casi siempre está en fila (`row`). En móviles, el menú desplegable suele estar en `column` porque aprovecha el espacio vertical. Vamos a dejarlo en `row` por ahora."*
>
> ```css
> nav {
>     display: flex;
>     flex-direction: row;
> }
> ```

> **Nota táctica:** Agregar un `border: 3px solid black;` al `nav` mientras se explican los ejes para que el contenedor sea visible. Retirarlo al terminar.

---

## MOMENTO 4: El Poder del Contenedor (Alineación)
**Tiempo:** ~35 min

---

### 4.1 `justify-content` — Distribución en el Eje Principal

**EN PANTALLA: PRESENTACIÓN CANVA (imagen con los 6 valores de `justify-content` visualmente) → PANTALLA DIVIDIDA (VS Code + Navegador).**

> **Tu explicación teórica precisa:**
> *"`justify-content` mueve y distribuye los hijos a lo largo del Eje Principal. Solo funciona si hay espacio sobrante en el contenedor después de acomodar a los hijos.*
>
> *Tiene 6 valores:"*

| Valor | Qué hace |
|---|---|
| `flex-start` | Al inicio del eje (comportamiento por defecto) |
| `center` | Al centro |
| `flex-end` | Al final |
| `space-between` | Espacio solo **entre** elementos. Los extremos tocan el borde |
| `space-around` | Espacio alrededor de cada elemento. Los bordes tienen la mitad |
| `space-evenly` | Simetría pura — todos los espacios son iguales |

> **La acción guiada (demo en el `nav`):**
> ```css
> nav {
>     display: flex;
>     justify-content: center;
> }
> ```
> *"Vean el menú — se fue al centro. Ahora cambien a `space-between`. Ahora a `space-evenly`. ¿Notan la diferencia entre esos dos últimos?"*

> **La prueba de fuego — evidencia de que el eje importa:**
> *"Ahora les voy a demostrar algo. Si cambio a `flex-direction: column` y mantengo `justify-content: center`..."*
>
> ```css
> nav {
>     display: flex;
>     flex-direction: column;
>     height: 300px;    /* necesario para tener espacio vertical */
>     justify-content: center;
> }
> ```
> *"¿Ven? Ahora `justify-content` los centró verticalmente porque el eje principal es vertical. La propiedad persigue al eje, no a la pantalla.*
>
> *Devolvemos el `flex-direction: row` y quitamos el `height` de prueba."*

> **🚨 Gestión de Riesgos:**
> - **Error frecuente:** El alumno pone `flex-direction: column` y `justify-content: center` pero no ve cambio. **Causa:** el contenedor no tiene altura (`height`) suficiente — el navegador le pone `height: auto` que se ajusta al contenido, no hay espacio para mover nada. **Solución en vivo:** *"¿No te mueve nada? Dale al contenedor una `height` fija o un `min-height`. Sin espacio no hay donde moverse."*

---

### 4.2 `align-items` — Distribución en el Eje Secundario

**EN PANTALLA: PRESENTACIÓN CANVA (imagen de `align-items`) → PANTALLA DIVIDIDA.**

> **Tu explicación teórica precisa:**
> *"Si `justify-content` controla el eje principal, `align-items` controla el eje secundario — el que cruza.*
>
> *Sus valores principales:"*

| Valor | Qué hace |
|---|---|
| `stretch` | **Por defecto** — los hijos se estiran para llenar la altura del contenedor |
| `flex-start` | Al inicio del eje secundario (arriba, si el eje principal es `row`) |
| `center` | Al centro del eje secundario |
| `flex-end` | Al final del eje secundario |
| `baseline` | Alinea por la línea base del texto (para texto de diferente tamaño) |

> **La acción guiada (demo en el `header`):**
> ```css
> header {
>     display: flex;
>     height: 100px;          /* para que haya espacio visible */
>     align-items: center;    /* centrar verticalmente */
> }
> ```
> *"Miren el header. El título y el menú se centraron verticalmente dentro de la franja. Sin matemáticas, sin `padding` calculado a ojo. Una línea."*

---

### 4.3 `gap` — El Separador Inteligente

**EN PANTALLA: PANTALLA DIVIDIDA — VS Code + Navegador. Los enlaces del `nav` están pegados.**

> **Tu explicación teórica precisa:**
> *"Antes de Flexbox, separar 3 botones significaba ponerle `margin-right` al primero, al segundo, y luego crear una excepción CSS para quitarle el margen al último. Era tedioso.*
>
> *Flexbox nos regala `gap`. Es un separador inteligente que solo pone espacio entre elementos — nunca entre el primer elemento y el borde izquierdo, ni entre el último y el borde derecho.*"

> **La acción guiada:**
> ```css
> nav {
>     display: flex;
>     gap: 20px;
> }
> ```
> *"Borren los `margin` que le habían puesto a los `<a>`. Ahora usen solo `gap` en el padre. Una sola línea reemplazó todo ese código.*
>
> *Diferencia clave con `padding` y `margin`: el gap es una propiedad del contenedor Flex que opera en el espacio entre hijos. No añade espacio dentro de las cajas hijas ni fuera del contenedor."*

---

## MOMENTO 5: Flexbox Avanzado + Cards
**Tiempo:** ~30 min (incluye receso si aplica)

---

### 5.1 El Desbordamiento — El pie en el zapato equivocado

**EN PANTALLA: VS Code — Contenedor `<div>` con varias `<section>` adentro. Mostrar el desbordamiento en vivo.**

> **La situación en código:**
> 1. Poner un `<div id="container-cards">` en el HTML que envuelva las 3 secciones (hobbies, series, comidas).
> 2. Darle al contenedor un `height` fijo y `display: flex`.
> 3. Mostrar cómo los hijos se salen del borde.

> **Tu explicación teórica precisa:**
> *"¿Qué pasó? El contenedor tiene un tamaño fijo y los elementos no caben en una sola línea. A eso se le llama Desbordamiento (Overflow en inglés) — el contenido se sale de los límites de la caja.*
>
> *Es como meter un pie talla 42 en un zapato talla 38. El pie se sale. Lo mismo hicieron los elementos."*

---

### 5.2 `flex-wrap` — El Contenedor Multilineal

> **Tu explicación teórica precisa:**
> *"Flexbox tiene una propiedad para manejar el desbordamiento: `flex-wrap`. Por defecto está en `nowrap` — no envuelvas, aguanta todo en una sola línea aunque se salga.*
>
> *Si cambiamos a `wrap`, le decimos: si tus hijos ya no caben en una sola línea, crea otra línea abajo y continúa. Es como texto que hace salto de línea cuando no cabe."*

> **La acción guiada:**
> ```css
> #container-cards {
>     display: flex;
>     flex-wrap: wrap;
> }
> ```
> *"Ajusten el ancho del navegador. Vean cómo las secciones bajan orgánicamente a una segunda fila cuando ya no caben. A esto se le llama Contenedor Multilineal."*

---

### 5.3 El `<div>` como Contenedor Flex — Por qué no usamos `<main>`

**EN PANTALLA: VS Code — `index.html` con la estructura visible.**

> **La pregunta de calibración:**
> *"Pregunta: si quiero que las 3 secciones (hobbies, series, comidas) estén en fila, ¿puedo agregarle `display: flex` directamente al `<main>`?"*
>
> *(Dejar que respondan. La respuesta esperada: parece que sí, pero hay un problema.)*

> **Demo del problema:**
> ```css
> main {
>     display: flex;
> }
> ```
> *"Vean lo que pasó. Las 3 secciones se pusieron en fila — que era lo que queríamos — pero la sección `#sobre-mi` también se alineó con ellas. Yo no quería tocar `#sobre-mi`.*
>
> *Eso ocurre porque cuando le dices a `<main>` que sea un Flex Container, todos sus hijos directos se convierten en Flex Items. Y `<main>` tiene más hijos de los que yo quiero alinear.*

> **La solución — `<div>` con fines de estilo:**
> *"Para estos casos existe el `<div>`. Hemos dicho que el `<div>` no tiene significado semántico — no representa nada en el HTML. Pero tiene un caso de uso muy concreto: **actuar como contenedor con fines puramente de estilo**.*
>
> *Lo que hago es crear un `<div>` que envuelva solo las 3 secciones que quiero alinear:"*
>
> En `index.html`:
> ```html
> <div id="container-cards">
>     <section id="hobbies">...</section>
>     <section id="series">...</section>
>     <section id="comidas">...</section>
> </div>
> ```
>
> En `styles.css`:
> ```css
> #container-cards {
>     display: flex;
>     justify-content: center;
>     gap: 20px;
> }
> ```
>
> *"Ahora sí. Solo esas 3 secciones están en fila. `#sobre-mi` no se ve afectada. Ese es exactamente el papel del `<div>`: agrupar para darle estilo, sin romper la semántica del documento."*

---

### 5.4 El Concepto de Card — El patrón UI más usado

**EN PANTALLA: NAVEGADOR — YouTube, Airbnb, Mercado Libre. Luego iFrame o screenshot de Stripe.**

> **La acción guiada (observación):**
> 1. *"Miren YouTube. Cada video es una caja que tiene: imagen miniatura, título, nombre del canal y duración. Esa estructura se repite para cada video."*
> 2. *"Miren Airbnb. Cada departamento es una caja: foto, precio, ciudad."*
> 3. *"Miren Mercado Libre. Cada producto es una caja: imagen, nombre, precio, calificación."*

> **Tu explicación teórica precisa:**
> *"A ese patrón se le llama Card (Tarjeta). Una Card es un contenedor que agrupa información relacionada sobre un mismo tema, y cuyo diseño se repite para representar múltiples ítems similares.*
>
> *Nuestra página de perfil ya tiene Cards — aunque no las habíamos llamado así. Cada `<section>` de hobbies, series y comidas agrupa información de una misma temática y tienen la misma estructura: título + lista.*
>
> *Para convertirlas en Cards visualmente, les vamos a agregar una clase:"*

> **La acción guiada (Code-along):**
>
> En `index.html` — agregar `class="card"` a cada sección:
> ```html
> <section id="hobbies" class="card">...</section>
> <section id="series" class="card">...</section>
> <section id="comidas" class="card">...</section>
> ```
>
> En `styles.css`:
> ```css
> .card {
>     background-color: white;
>     padding: 20px;
>     border-radius: 10px;
> }
> ```
> *"Guarden y miren. Ahora cada sección se ve como una tarjeta con fondo blanco y esquinas redondeadas. Ya son Cards."*

---

## MOMENTO 6: Efectos Visuales y UI Moderna
**Tiempo:** ~25 min

---

### 6.1 `box-shadow` — Profundidad y tarjetas flotantes

**EN PANTALLA: NAVEGADOR — Abrir herramienta generadora de box-shadow (ej. CSSmatic, getcssscan). → VS Code.**

> **Tu explicación teórica precisa:**
> *"`box-shadow` le agrega una sombra a cualquier elemento CSS. Esa sombra crea la ilusión de profundidad — como si la Card estuviera flotando sobre el fondo.*
>
> *Su sintaxis tiene 5 componentes: eje X, eje Y, Blur (difuminado), Spread (expansión) y Color. Seamos honestos: nadie se memoriza estos 5 valores. Los profesionales usan generadores."*

> **La acción guiada — Herramienta 1 (generador):**
> 1. Abrir el generador de box-shadow.
> 2. Mover el slider de **Blur** — mostrar cómo la sombra se hace más difusa.
> 3. Mover el slider de **Offset Y** — mostrar cómo baja la sombra.
> 4. Copiar el código generado.
>
> *"Copien este código y péguenlo en su regla `.card`."*
>
> ```css
> .card {
>     background-color: white;
>     padding: 20px;
>     border-radius: 10px;
>     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
> }
> ```

> **La acción guiada — Herramienta 2 (estilos predefinidos):**
> *"También existe una página que funciona como un mercado de sombras ya creadas. Tú ves cuál te gusta, le das clic y el código ya está copiado en tu portapapeles. Es rapidísimo."*
>
> *(Mostrar la página, elegir una sombra visualmente, pegar el código.)*

---

### 6.2 `transition` — La animación suave

**EN PANTALLA: PANTALLA DIVIDIDA — VS Code + Navegador. Con `.card:hover` ya presente que cambia el fondo.**

> **El problema visible:**
> *"Ya tenemos un `:hover` en las Cards que cambia el color de fondo. Pero pasen el mouse sobre una Card y vean — el cambio es instantáneo. Brusco. Robótico.*
>
> *`transition` convierte ese salto brusco en un movimiento suave y gradual."*

> **Tu explicación teórica precisa:**
> *"Para que exista una transición necesitan dos cosas:*
> *1. Un Estado Inicial (reposo) — cómo se ve el elemento sin interacción.*
> *2. Un Estado Final (evento) — cómo se ve después del cambio, casi siempre con `:hover`.*
>
> **Regla crítica:** `transition` siempre se escribe en el Estado Inicial. Nunca dentro del `:hover`. Así el navegador sabe tanto cómo entrar al estado final como cómo volver al estado inicial."*
>
> **Su sintaxis:**
> ```css
> transition: [propiedad] [duracion] [ritmo] [retardo-opcional];
> /* Ejemplo: */
> transition: background-color 0.3s ease;
> ```
>
> | Componente | Qué define |
> |---|---|
> | Propiedad | Qué animar (`background-color`, `transform`, `all`) |
> | Duración | Cuánto tarda (`0.3s`, `500ms`) |
> | Ritmo | `linear` (constante), `ease` (natural: lento-rápido-lento), `ease-in`, `ease-out` |
> | Retardo | Cuánto espera antes de iniciar (opcional) |

> **La acción guiada:**
> ```css
> /* Estado inicial */
> .card {
>     background-color: white;
>     padding: 20px;
>     border-radius: 10px;
>     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
>     transition: background-color 0.3s ease;
> }
>
> /* Estado final */
> .card:hover {
>     background-color: #f0f4ff;
> }
> ```
> *"Pasen el mouse ahora. ¿Notan la diferencia? El cambio de color se desliza suavemente. Eso es una transición."*

> **Para animar múltiples propiedades — separar con coma:**
> ```css
> transition: transform 0.3s ease, box-shadow 0.3s ease;
> ```
> *"Cuando quieren animar dos propiedades al mismo tiempo, las separan con coma. Cada una tiene su propia duración y ritmo si lo necesitan."*

---

### 6.3 `transform` — La plastilina CSS

**EN PANTALLA: PRESENTACIÓN CANVA (imagen de `translate` y `scale`) → NAVEGADOR (Stripe.com) → VS Code.**

> **Tu explicación teórica precisa:**
> *"Si quiero que mi Card crezca al hacer hover, podría cambiarle el `width` o el `padding`. **No lo hagan.** Cambiar esas propiedades en hover desplaza a las Cards vecinas y rompe el layout.*
>
> *`transform` es diferente. Modifica visualmente un elemento sin afectar el espacio que ocupa en el layout. Es como manipular plastilina en el aire — el elemento se mueve o crece, pero el 'hueco' original permanece intacto y los vecinos no se enteran.*
>
> *Vamos a ver dos funciones de `transform`:"*

> **Función 1 — `translate(x, y)` (Mover):**
> *"Desplaza el elemento de su posición original. Los ejes son como el plano cartesiano: X positivo = derecha, X negativo = izquierda, Y positivo = abajo, Y negativo = arriba."*
> ```css
> transform: translateY(-5px);   /* sube 5px */
> transform: translate(10px, 0); /* mueve 10px a la derecha */
> ```

> **Función 2 — `scale(n)` (Zoom):**
> *"Cambia el tamaño visualmente. `1` es el tamaño normal. `1.05` lo agranda un 5%. `0.9` lo achica un 10%."*
> ```css
> transform: scale(1.05);   /* crece 5% */
> ```

> **Demo visual con Stripe:**
> *"Miren esta página de Stripe. Pasen el mouse sobre una Card. ¿Lo ven? La Card sube ligeramente y la sombra se hace más pronunciada. Eso es `translateY` + `box-shadow` en hover. Es exactamente lo que vamos a hacer nosotros."*

---

### 6.4 Code-Along Final — El Efecto Elevación

**EN PANTALLA: PANTALLA DIVIDIDA — VS Code + Navegador con Live Server.**

> **La acción guiada (paso a paso):**
>
> **Paso 1 — Declarar la transición en el estado inicial:**
> ```css
> .card {
>     background-color: white;
>     padding: 20px;
>     border-radius: 10px;
>     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
>     transition: transform 0.3s ease, box-shadow 0.3s ease;
> }
> ```
>
> **Paso 2 — Definir el estado final en hover:**
> ```css
> .card:hover {
>     transform: translateY(-5px);
>     box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
> }
> ```
>
> *"Guarden. Pasen el mouse sobre una Card. Hagan una pausa dramatic... ¿Lo sienten? La Card sube 5 píxeles y la sombra se vuelve más pronunciada — el efecto de que está flotando más alto.*
>
> *Eso es `transform` + `transition` + `box-shadow` trabajando juntos. Una interfaz de nivel profesional con 8 líneas de CSS."*

> **Opcional — El efecto lupa en la imagen de perfil:**
> ```css
> /* Estado inicial */
> img {
>     transition: transform 0.3s ease;
> }
>
> /* Estado final */
> img:hover {
>     transform: scale(1.05);
> }
> ```
> *"Si quieren, aplíquenlo también a su foto de perfil. Al pasar el mouse, crece un 5% sin romper el layout."*

---

### 6.5 Cierre y Entregable del Lab 04

**EN PANTALLA: CANVAS LMS — Sección de entrega del Lab 04.**

> **Tu explicación teórica precisa:**
> *"Hemos terminado el Módulo 1 completo. En estas 4 clases pasaron de un documento en blanco a una página de perfil con HTML semántico, CSS con paleta de colores, Flexbox para el layout y animaciones hover.*
>
> *Eso no es básico — es el stack visual de la industria."*

> **Instrucciones de entrega:**
> 1. **Código fuente:** Comprimir la carpeta del proyecto en un `.zip` o `.rar` y subirla.
> 2. **Screenshot:** Un pantallazo de cómo se ve la página en el navegador.
> 3. **Fecha límite:** Sábado hasta las 23:59.
>
> *"Si tienen duda durante la semana, me escriben al WhatsApp con un screenshot del código y del resultado. No esperen al viernes."*

> **Juego de práctica (recurso extra):**
> *"Les dejo también este juego — Flexbox Froggy. Son 24 niveles para practicar Flexbox acomodando ranitas sobre hojas de lirio. Es serio, te enseña de verdad. Disponible en flexboxfroggy.com."*

---

## APÉNDICE: Resumen de propiedades vistas en Clase 04

| Propiedad | Se aplica en | Qué hace |
|---|---|---|
| `display: flex` | Padre (Flex Container) | Activa Flexbox |
| `flex-direction` | Padre | Define la dirección del eje principal (`row`, `column`) |
| `justify-content` | Padre | Distribuye hijos en el **eje principal** |
| `align-items` | Padre | Alinea hijos en el **eje secundario** |
| `gap` | Padre | Espacio entre hijos (no en los bordes) |
| `flex-wrap` | Padre | Permite que los hijos formen múltiples líneas |
| `box-shadow` | Cualquier elemento | Agrega sombra para efecto de profundidad |
| `transition` | Estado inicial del elemento | Anima el cambio entre estados (Estado Inicial → Hover) |
| `transform: translateY()` | Estado hover | Mueve el elemento verticalmente sin afectar el layout |
| `transform: scale()` | Estado hover | Agranda o achica el elemento visualmente |
