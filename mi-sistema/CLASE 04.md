# CLASE 04

## MOMENTOS DE LA CLASE

### **Momento 1: El Calentamiento y las Reglas del Juego (Selectores y Especificidad)**

- **Selectores de Agrupación:** Cómo aplicar estilos a varios elementos a la vez usando comas.
- **Selectores Descendientes:** Sintaxis `padre descendiente {}`. Ejercicio práctico usando el `<h2>` de VS Code y alternando entre etiquetas, clases e IDs.
- **Especificidad (El Sistema de Puntos):** La jerarquía de CSS (Inline > ID > Clase > Etiqueta). La regla de la Cascada.
    - *Dinámica de choque:* Poner a competir un ID vs una Clase en vivo para ver quién gana.
- **El verdadero `:hover`:** Desmitificar que solo sirve para enlaces. Aplicarlo a un `<section>` para demostrar interactividad universal.

### **Momento 2: Pensando en el Espacio (El Layout y las Cards)**

- **Concepto de Layout:** La distribución del espacio disponible.
- *Visual:* Diagrama en Excalidraw (el rectángulo en blanco vs. las piezas sueltas).
- **La Propiedad `display`:** El rey de las cajas. Cómo esta propiedad decide el comportamiento y relación entre los elementos.
- **El Concepto de Card:** Introducción a este patrón de diseño UI antes de alinearlo.

### **Momento 3: La Magia de Flexbox (Fundamentos y Ejes)**

- **¿Qué es Flexbox?:** El sistema moderno para manejar el Layout. (El rectángulo de Excalidraw cobra sentido aquí).
- **Activación:** `display: flex` como la llave mágica.
- **Anatomía Flex:** Identificar al *Flex Container* (padre) y a los *Flex Items* (hijos).
- **Los Ejes:** *Main Axis* (Principal) y *Cross Axis* (Secundario).
- **Dirección:** Introducción rápida a `flex-direction`.

### **Momento 4: El Poder del Contenedor (Alineación y Distribución)**

- `justify-content`: Controlando el flujo en el Eje Principal.
- `align-items`: Controlando el flujo en el Eje Secundario.
- `gap`: El respiro perfecto entre elementos sin usar márgenes complicados.

### **Momento 5: Flexbox Avanzado (Multilínea y Proporciones)**

- **Contenedor Multilineal:** El uso de `flex-wrap: wrap` para que las Cards bajen orgánicamente de línea.
- `align-content`: Cómo se comporta el Eje Secundario cuando hay múltiples líneas.
- **El poder de `flex: 1`:** La analogía de la "rebanada de pastel". Cómo lograr que los elementos se estiren y se repartan el espacio sobrante equitativamente.

### **Momento 6: Efectos Visuales y UI Moderna (Profundidad y Movimiento)**

- `box-shadow`: Proyectando sombras para crear profundidad. Explicación de sus valores (X, Y, Blur, Spread, Color). *Recurso:* Uso de generadores online.
- `transition`: Creando animaciones suaves entre el "Estado de Reposo" y el "Estado Final". Explicación de sintaxis (property, duration, timing, delay).
- `transform`: La plastilina de CSS (modifica sin empujar al vecino).
    - `translate(x, y)`: Para mover el elemento.
    - `scale(n)`: Para agrandar o achicar.
- *Code-Along Final:* Aplicar estas transiciones y transformaciones al proyecto "Mi Perfil" en vivo.

## FLUJO DE PRESENTACION

### Momento 1: El Calentamiento y las Reglas del Juego (Selectores y Especificidad)

**1. Selectores de Agrupación (Comas)**

**EN PANTALLA:** PANTALLA DIVIDIDA (VS Code con el archivo `styles.css` del Lab 02 a la izquierda, y el Navegador a la derecha).

**Descripción:** Mostrarás cómo optimizar el código evitando escribir la misma regla dos veces para elementos que comparten el mismo estilo (como el header y el footer).

> 
> 
> 
> **Guion/Pautas:**
> 
> - "Para calentar motores, vamos a limpiar nuestro código. Si miran nuestro CSS, se darán cuenta de que queremos que tanto el `<header>` como el `<footer>` tengan el mismo color de fondo oscuro."
> - "No tiene sentido escribir la regla completa para el header y luego copiarla y pegarla para el footer. En CSS podemos agrupar selectores usando una simple coma `,`."
> - (Escribes en vivo): "Si yo escribo `header, footer { background-color: #2D3E40; }`, le estoy diciendo al navegador: 'Oye, aplícale esto al header Y TAMBIÉN al footer'. Nos ahorramos líneas de código y somos más profesionales."

**2. Selectores Combinadores (Descendientes)**

**EN PANTALLA:** PANTALLA DIVIDIDA (VS Code mostrando el HTML de la sección de Hobbies y el CSS).

**Descripción:** Explicarás cómo apuntar a un elemento específico que vive dentro de otro, usando la sintaxis `padre descendiente {}`, para no afectar a otros elementos iguales en la página.

> 
> 
> 
> **Guion/Pautas:**
> 
> - "Ahora, ¿qué pasa si yo quiero cambiar el color de mi título `<h2>`, pero solo el que está dentro de la sección de Mis Hobbies, y dejar intactos los demás `<h2>` de mi página?"
> - "Aquí usamos los selectores descendientes. La sintaxis es simple: primero escribimos al padre, damos un espacio, y luego al hijo."
> - (Escribes en vivo): "Vamos a poner `section h2 { color: orange; }`. Miren la pantalla. Pintó todos los h2 que están dentro de un section."
> - (El cambio dinámico): "Pero podemos ser más exactos. En vez de la etiqueta padre, usemos su ID. Cambiemos `section h2` por `#hobbies h2`. ¡Pum! Ahora solo se pinta el título de los hobbies. El espacio en blanco entre ellos significa 'adentro de'."

**3. Concepto de Especificidad (El choque de reglas)**

**EN PANTALLA:** PRESENTACIÓN CANVA (Mostrando la imagen generada de Especificidad) -> Luego pasas a VS CODE.

**Descripción:** Explicarás el sistema de puntos de CSS y cómo el navegador decide quién gana cuando hay reglas contradictorias, culminando con una demostración en vivo.

> 
> 
> 
> **Guion/Pautas:**
> 
> - (Con la imagen en pantalla): "¿Qué significa ser 'específico'? Les hago una pregunta lógica: Si estamos buscando a una persona, ¿qué instrucción es más precisa: 'Busca al papá de tu papá' o 'Busca a tu abuelo'? 'Abuelo' es directo, es específico. Lo opuesto es ser general."
> - "En CSS, la especificidad es el conjunto de reglas que usa el navegador cuando dos estilos se contradicen. Es un sistema de puntaje de 4 niveles `(0, 0, 0, 0)`. Quien tiene más puntos, gana y pinta el elemento."
>     1. **Estilos en línea (`style="..."`):** (1,0,0,0) - Tienen la prioridad máxima.
>     2. **IDs (`#mi-id`):** (0,1,0,0) - Son muy específicos porque solo existe uno por página.
>     3. **Clases (`.mi-clase`) y Pseudoclases (`:hover`):** (0,0,1,0) - Peso medio.
>     4. **Etiquetas (`h1`, `p`):** (0,0,0,1) - Son los menos específicos, los más débiles.
> - "Regla de oro: La Cascada. Si hay empate de puntos, gana el que esté escrito más abajo en tu archivo CSS."
> - (El choque en vivo en VS Code): "Vamos a probarlo. A nuestro `<section id="hobbies" class="caja-hobbies">` le voy a dar dos órdenes contradictorias. En la línea 10 diré `#hobbies { background-color: red; }` y en la línea 11 diré `.caja-hobbies { background-color: blue; }`. Pregunta para el chat: ¿De qué color creen que se pintará el fondo?"
> - (Esperas respuestas y guardas el archivo): "¡Se pintó rojo! Aunque el azul estaba más abajo (cascada), el ID tiene más 'peso' o puntos que la clase. El ID mandó."

**4. El Verdadero `:hover`**

**EN PANTALLA:** PANTALLA DIVIDIDA (VS Code y Navegador).

**Descripción:** Romperás el mito de que el estado hover es exclusivo para cambiar de color los links del menú, aplicándolo a una caja entera (section).

> 
> 
> 
> **Guion/Pautas:**
> 
> - "Para cerrar este calentamiento, hablemos de interactividad. La clase pasada usamos la pseudoclase `:hover` en nuestros enlaces del menú para que brillaran. Muchos creen que esto solo sirve para textos o botones."
> - "Falso. `:hover` **significa literalmente 'cuando el puntero del ratón está encima realiza lo siguiente'.** Se lo podemos poner a absolutamente cualquier elemento que el usuario pueda tocar."
>     - **OBJETIVO**: Indica que un elemento es interactivo.
> - (Escribes en vivo): "Vamos a ponérselo a toda nuestra sección de películas. Escriban `#peliculas:hover { background-color: #387373; }`."
> - (Pasas el mouse en el navegador): "Miren cómo toda la caja reacciona al usuario. Esto le indica al cerebro de quien navega que esa área es interactiva. Lo usaremos muchísimo hoy cuando construyamos nuestras Cards."

### Momento 2: Pensando en el Espacio (El Layout y las Cards)

**1. El Concepto de Layout (El mapa de la pantalla)**

**EN PANTALLA:** PRESENTACIÓN CANVA (Mostrando la imagen de "Tipos de Layout").

**Descripción:** Introducirás la definición de Layout mostrando esquemas visuales que ellos consumen todos los días sin darse cuenta, preparando el terreno mental para Flexbox.

> 
> 
> 
> **Guion/Pautas:**
> 
> - "Hasta ahora hemos maquillado los colores y tipografías, pero todo sigue apilado hacia abajo. Es hora de hablar de **Layout**. ¿Qué es un Layout? **Es la forma exacta en que distribuimos todos los elementos en el espacio disponible de la pantalla."**
> - (Señalas la imagen en pantalla): "No existe una única forma de acomodar una web. Miren estas opciones. Seguro reconocen el 'Two-column' (como un blog), el 'Card Layout' (como Pinterest o Netflix) o el de navegación fija. Ustedes consumen estos layouts todos los días."
> - "¿Por qué les hablo de esto hoy? Porque para lograr estas estructuras profesionales, CSS nos ofrece una herramienta maestra llamada **FLEX**. Flexbox es el motor que nos permitirá posicionar nuestras piezas exactamente donde queramos."

**2. El Reto del Contenedor (Las piezas vs. La Caja)**

**EN PANTALLA:** EXCALIDRAW (Mostrando tu diagrama con los elementos sueltos a la izquierda y el contenedor rojo a la derecha).

**Descripción:** Usarás una metáfora visual muy clara para que entiendan qué hace exactamente un contenedor Flex.

> 
> 
> 
> **Guion/Pautas:**
> 
> - "Miren este lienzo. En el lado izquierdo tenemos nuestros elementos HTML puros: párrafos, enlaces, una imagen. Así es como se ven por defecto, sueltos y uno debajo del otro."
> - "A la derecha tenemos una caja vacía, un contenedor. El Layout es el arte de tomar esas piezas de la izquierda y organizarlas intencionalmente dentro de la caja de la derecha."
> - "Cuando aprendamos Flexbox en unos minutos, ese contenedor rojo será nuestro 'Contenedor Flex', y las piezas serán nuestros 'Flex Items'. Quédense con esta imagen mental."

**3. La Propiedad `display` (Hackeando la naturaleza HTML)**

**EN PANTALLA:** PANTALLA DIVIDIDA (VS Code y Navegador).

**Descripción:** Repasarás el concepto de elementos en bloque vs. en línea, pero esta vez les demostrarás que con CSS tienen el poder absoluto de cambiar esa naturaleza.

> 
> 
> 
> **Guion/Pautas:**
> 
> - "Antes de usar Flexbox, debemos entender a la propiedad que lo activa: `display`. En el mundo del desarrollo, cada elemento HTML es una caja, y `display` **decide cómo se comporta esa caja y cómo se relaciona con sus vecinos."**
> - "¿Recuerdan que hablamos de etiquetas en bloque (que ocupan toda la línea) y en línea (que solo ocupan su espacio)? Vamos a contradecir a la naturaleza."
> - (Escribes en vivo): "Un enlace `<a>` es un elemento en línea, por eso en nuestro menú están uno al lado del otro. Vamos a nuestro CSS y pongámosle `display: block;`. ¡Miren el navegador! Ahora cada enlace exige toda la pantalla y rompió la fila."
> - (Borras el código anterior y haces otra prueba): "Una imagen también es en línea. Si le ponemos `display: block;`, empuja a todo lo demás. Con `display` nosotros mandamos sobre el HTML. Y esta misma propiedad será la que encenderá el motor de Flexbox."

### Momento 3: La Magia de Flexbox (Fundamentos y Ejes)

**1. ¿Qué es Flexbox y su Naturaleza Unidimensional?**

**EN PANTALLA:** EXCALIDRAW (Tu diagrama de los elementos sueltos y el contenedor rojo).

**Descripción:** Conectarás la metáfora visual anterior con la teoría de Flexbox, estableciendo la regla de oro más importante: es un sistema de una sola dimensión.

> 
> 
> 
> **Guion/Pautas:**
> 
> - "¿Recuerdan nuestra caja roja y las piezas sueltas? Flexbox es la herramienta que nos permite tomar esas piezas y acomodarlas perfectamente dentro de la caja."
> - "Pero atención aquí, porque esta es la regla de oro de Flexbox: es un sistema **Unidimensional**."
> - **FLEX** permite controlar el tamaño, el espacio y la alineación de los elementos dentro de un contenedor.
> **Diseño Unidimensional** : Flexbox está diseñado principalmente para organizar elementos en **una sola dirección a la vez**: **horizontalmente o verticalmente**
> - *(La Analogía):* "Imaginen un palo de brocheta (o la vía de un tren). Solo pueden insertar los pedazos de carne en una sola línea recta. Pueden poner la brocheta echada (horizontal) o parada (vertical), pero no pueden hacer un cuadrado de carne con un solo palo. Flexbox funciona igual: alinea cosas en fila O en columna, pero no ambas a la vez."

**2. Activación y Anatomía (El Padre y los Hijos)**

**EN PANTALLA:** PRESENTACIÓN CANVA (Mostrando la imagen de la anatomía de Flexbox) -> Luego VS CODE.

**Descripción:** Presentarás el vocabulario oficial (*Flex Container* y *Flex Items*) y les enseñarás cómo encender el motor con `display: flex`.

> 
> 
> 
> **Guion/Pautas:**
> 
> - (Muestras la imagen): "Para hablar el mismo idioma que los profesionales, conozcamos a la familia. La caja grande exterior es el **Flex Container** (el Padre) y los elementos que viven directamente adentro son los **Flex Items** (los Hijos)."
> - "**El secreto más grande de Flexbox es este: las órdenes de diseño casi siempre se le dan al Padre, no a los hijos. Tú le dices al Padre cómo debe organizar a sus hijos.**"
> - "Para encender el superpoder, seleccionamos al contenedor padre en nuestro CSS y le agregamos la propiedad mágica: `display: flex;`."

**3. Los Ejes de Flexbox (La brújula)**

**EN PANTALLA:** PRESENTACIÓN CANVA (Mantienes la imagen anterior, señalando las líneas de los ejes).

**Descripción:** Introducirás la "brújula" invisible que aparece al usar Flexbox, clave para entender cómo centrar elementos más adelante.

> 
> 
> 
> **Guion/Pautas:**
> 
> - "En el momento exacto en que ustedes escriben `display: flex;`, el navegador dibuja una brújula invisible dentro del contenedor con dos líneas."
> - "1. El **Eje Principal (Main Axis)**: Por defecto, va de izquierda a derecha de forma horizontal."
> - "2. El **Eje Secundario (Cross Axis)**: Cruza el eje principal de arriba hacia abajo de forma vertical."
> 
> **Pero un eje principal no siempre es horizontal y un eje secundario no siempre es vertical**
> 
> 1. **Eje Principal (Main Axis):** Es el eje que sigue la dirección definida por `flex-direction`.
>     - Si es `row` (por defecto), el eje principal es **horizontal**.
>     - Si es `column`, el eje principal es **vertical**.
> 2. **Eje Secundario (Cross Axis):** Es el eje **perpendicular** al principal (el que lo corta en 90 grados).
>     - Si el principal es horizontal, el secundario es **vertical**.
>     - Si el principal es vertical, el secundario es **horizonta**
> - "Memoricen estos ejes, porque las siguientes propiedades que aprenderemos usan estas líneas como rieles para mover los elementos."

**4. La Dirección: `flex-direction` (Cambiando las vías del tren)**

**EN PANTALLA:** PRESENTACIÓN CANVA (Imagen de flechas y cajas `row` y `column`) -> PANTALLA DIVIDIDA (VS Code y Navegador).

**Descripción:** Explicarás visualmente cómo rotar el eje principal y luego lo demostrarás en vivo usando los enlaces de navegación (`<nav>`).

> 
> 
> 
> **Guion/Pautas:**
> 
> - (Con la imagen en Canva): "Por defecto, la brocheta está en horizontal (`row`), por eso las cosas se ponen una al lado de la otra. Pero podemos girar todo el eje con la propiedad `flex-direction`. Podemos ponerlo en columna (`column`), e incluso invertirlos (`row-reverse` o `column-reverse`) para que el último elemento pase a ser el primero."
> - (Cambias a VS Code): "Vamos a probarlo en vivo. Miren mi menú de navegación. La etiqueta `<nav>` será mi Flex Container (Padre), y los enlaces `<a>` serán mis Flex Items (Hijos)."
> - (Escribes en vivo): "Le pongo `display: flex;` al `nav`. ¡Automáticamente los enlaces se ponen en fila horizontal (`row`)! Ahora agregaré `flex-direction: column;`. ¡Pum! Se apilan hacia abajo. Ahora probaré `flex-direction: row-reverse;`. ¡Miren cómo se fueron a la derecha y el orden de los links se invirtió! Es pura magia."

### **Momento 4: El Poder del Contenedor (Alineación y Distribución)**

**1. La Regla de Oro de los Ejes (Rompiendo el mito)**

**EN PANTALLA:** TU CÁMARA (O tu diagrama de Excalidraw).

**Descripción:** Antes de alinear nada, vas a tatuarles en la mente que el eje principal no siempre es horizontal.

> 
> 
> 
> **Guion/Pautas:**
> 
> - "Antes de empezar a mover nuestras cajas mágicamente, escúchenme bien porque este es el error número uno de los programadores junior: **Un eje principal NO siempre es horizontal, y un eje secundario NO siempre es vertical.**"
> - "Los ejes no son X o Y. Los ejes dependen 100% de la dirección que ustedes le dieron al tren (`flex-direction`). Si el tren va en fila, el eje principal es horizontal. Si el tren va en columna, el eje principal es vertical. ¡Las propiedades que veremos ahora persiguen al eje, no a la pantalla!"

> **AHORA SI ENTRAMOS A LAS PROPIEDADES QUE NOS BRINDA FLEX PARA ALINEAR O POSICIONAR NUESTROS ELEMENTOS PERO IMPORTANTE**
> 
> 
> **CASI TODAS ESTAS PROPIEDADES SE DEFINEN EN EL CONTENEDOR FLEX**
> 

**2. `justify-content` (Controlando el Eje Principal)**

**EN PANTALLA:** PRESENTACIÓN CANVA (Mostrando las imágenes `image_d69747.jpg` e `image_d645aa.jpg`) -> PANTALLA DIVIDIDA (VS Code y Navegador).

**Descripción:** Explicarás cómo distribuir los elementos a lo largo de la línea principal y la diferencia clave entre los espacios, para luego demostrarlo en el menú de navegación.

> 
> 
> 
> **Guion/Pautas:**
> 
> - (Muestras las diapositivas de `justify-content`): "La primera herramienta es `justify-content`. Su único trabajo es mover a los hijos a lo largo del **Eje Principal**."
> - "Tenemos valores para agrupar: `flex-start` (al inicio), `center` (al centro) y `flex-end` (al final)."
> - "Y valores para distribuir: `space-between` **empuja a los extremos.** Pero ojo a la diferencia entre estos dos: `space-around` deja espacio alrededor, pero los bordes tienen la mitad de espacio que el centro. En cambio, `space-evenly` asegura que el espacio sea matemáticamente idéntico en todos los huecos."
>     - **`space-between`:** Distribuye el espacio **uniformemente** entre los elementos flexibles, **con el primer elemento al inicio del Eje Principal y el último elemento al final del Eje Principal.(NO DA ESPACIO NI AL INICIO NI AL FINAL)**
>     - **`space-around`:** Distribuye el espacio **uniformemente** **alrededor** de los elementos flexibles
>     - **`space-evenly`:** Distribuye el espacio **uniformemente** **entre** todos los elementos flexibles, **los elementos tienen el mismo espacio entre ellos** **y entre los bordes del contenedor**
> - *(Code-Along)*: "Vamos al código. En nuestro `<nav>` que ya tiene `display: flex`, escriban `justify-content: center;`. ¡Miren cómo los enlaces se van al medio! Ahora cambien a `justify-content: space-between;`."
> - *(La prueba de fuego)*: "Ahora la magia: ¿Qué pasa si le pongo a mi nav `flex-direction: column`? ¡Pum! `justify-content` ahora los separa de arriba hacia abajo, porque el eje principal rotó."

**3. `align-items` (Controlando el Eje Secundario)**

**EN PANTALLA:** PRESENTACIÓN CANVA (Mostrando las imágenes align-items ) -> PANTALLA DIVIDIDA.

**Descripción:** Introducirás la alineación transversal y explicarás el valor `baseline` antes de probarlo en el código.

> 
> 
> 
> **Guion/Pautas:**
> 
> - (Muestras las diapositivas de `align-items`): "Si `justify-content` es la pista principal, `align-items` controla el movimiento en el **Eje Secundario** (el que cruza)."
> - "Por defecto viene en `stretch` (estirarse para llenar la caja). Pero también tenemos `center`, `flex-start` y `flex-end`."
>     - **`start`:** Alinea los elementos flexibles al **inicio** del Eje Secundario. Si el Eje Secundario es vertical, los elementos se alinean a la **parte superior**. Si el Eje Secundario es horizontal, los elementos se alinean a la izquierda.
>     - **`end`:** Alinea los elementos flexibles al **final** del Eje Secundario. Si el Eje Secundario es vertical, los elementos se alinean a la parte inferior. Si el Eje Secundario es horizontal, los elementos se alinean a la derecha.
>     - **`center`:** Alinea los elementos flexibles al **centro** del Eje Secundario.
> - "Hay uno especial llamado `baseline`. ¿Para qué sirve? Si tienen un botón con letra gigante y un botón con letra chiquita, `center` los alinearía por sus cajas, viéndose disparejo. `baseline` **usa la línea base del texto (donde se apoyan las letras) para que la lectura sea recta y perfecta**, sin importar el tamaño de la caja."
>     - Este valor solo funciona si los elementos flexibles contienen texto.
> - *(Code-Along)*: "Vamos a nuestro `<header>`. Vamos a darle un `height: 100px;` para que la caja sea alta y podamos ver el movimiento. Le ponemos `display: flex`. Noten que el título y el menú se pegan arriba. Ahora escriban `align-items: center;`. ¡Miren cómo bajan y se centran perfectamente a lo alto de la franja azul! Adiós a las matemáticas complicadas."

**4. `gap` (ESPACIADO ENTRE ELEMENTOS)**

**EN PANTALLA:** PANTALLA DIVIDIDA (VS Code y Navegador).

**Descripción:** Resolverás el antiguo problema de los márgenes usando la propiedad más moderna de Flexbox.

> 
> 
> 
> **Guion/Pautas:**
> 
> - "Antes, si queríamos separar tres botones, teníamos que ponerle `margin-right` al primero, al segundo, y luego crear un código raro para quitarle el margen al último para que no empujara la pared. Era un dolor de cabeza."
> - "Flexbox nos regala la propiedad `gap`. Es literalmente un separador inteligente. Solo pone espacio **entre** los elementos, no por fuera."
>     - La propiedad `gap` define el **espacio de separación directo** entre los elementos hijos de un contenedor flexible
>     
>     ATENTOS CON LA PALABRA **ENTRE**
>     
> - *(Code-Along)*: "Vayan a la regla de su `<nav>`. Borren los márgenes que le habíamos puesto a los enlaces en la clase anterior. Se van a pegar todos. Ahora en el `<nav>` (el padre), escriban `gap: 20px;`. ¡Perfecto! Una separación limpia y uniforme con una sola línea de código."

### **Momento 5: Flexbox Avanzado (Multilínea y Proporciones)**

**1. El Desbordamiento y el Contenedor Multilineal (`flex-wrap`)**

**EN PANTALLA:** PRESENTACIÓN CANVA (Mostrando la imagen `image_cbd042.jpg`) -> PANTALLA DIVIDIDA (VS Code y Navegador).

**Descripción:** Explicarás el concepto de desbordamiento (cuando los elementos no caben) y cómo convertir un contenedor de una sola línea en uno multilineal usando `flex-wrap`.

> 
> 
> 
> **Guion/Pautas:**
> 
> - "Vamos a la sección de nuestras películas. Tenemos varias Cards. Si a su contenedor le ponemos `display: flex;`, por defecto Flexbox intentará meter todas las Cards en una sola fila horizontal."
> - "¿Qué pasa si hay demasiadas Cards y la pantalla es pequeña? Ocurre un **Desbordamiento**. Las Cards se van a aplastar deformándose, o se saldrán de la pantalla obligando al usuario a hacer scroll horizontal."
>     
>     > El **desbordamiento** (u *overflow*) **ocurre cuando el contenido de una caja es más grande que los límites (ancho o alto) de su contenedor** [1, 2, 4].
>     > 
>     
>     > Imagina que intentas meter un pie talla 42 en un zapato talla 38: el contenido "se sale" visualmente de los bordes del elemento padre [4].
>     > 
> - (Muestras la diapositiva): "Para evitar esto, usamos la propiedad `flex-wrap`. Por defecto está en `nowrap` (no envolver). Si la cambiamos a `wrap`, le estamos diciendo al padre: 'Si tus hijos ya no caben, dales permiso de saltar y formar una nueva línea abajo'."
> - *(Code-Along)*: "Vamos a la clase `.cards` de nuestro CSS. Ya tiene `display: flex;`. Agreguen `flex-wrap: wrap;`. ¡Ajusten el tamaño de su navegador! Vean cómo las Cards fluyen orgánicamente hacia abajo creando un **Contenedor Multilineal**. Es un diseño 100% adaptable."

**2. `align-content` (Alineación para Múltiples Líneas)**

**EN PANTALLA:** PRESENTACIÓN CANVA (Mostrando la imagen `image_cbcd5b.jpg`).

**Descripción:** Mostrarás cómo controlar el Eje Secundario específicamente cuando hay más de una fila creada por el `flex-wrap`.

> 
> 
> 
> **Guion/Pautas:**
> 
> > Se utiliza en un **contenedor flex** para controlar cómo se distribuyen **múltiples filas de elementos flexibles** a lo largo del **eje Secundario 
> Determina cómo se distribuye el espacio libre entre las líneas de flexbox.**
> > 
> - "Hace un momento aprendimos `align-items`. Esa propiedad alinea los elementos dentro de su propia fila. Pero ahora que tenemos un Contenedor Multilineal (varias filas de Cards), necesitamos una nueva herramienta para mover *todos los bloques enteros*."
> - (Señalas la diapositiva): "Esa herramienta es `align-content`. Decide cómo se distribuyen todas esas líneas de Cards en el Eje Secundario."
> - "Podemos empujar todos los bloques hacia arriba (`flex-start`), centrarlos como un solo gran grupo (`center`), o separarlos equitativamente en toda la altura de la página usando `space-between` o `space-around`."

**3. El Poder de `flex: 1` (La rebanada de pastel)**

**EN PANTALLA:** EXCALIDRAW (Dibujas 3 cajas en vivo) -> PRESENTACIÓN CANVA (Muestras la diapositiva de las cajas con texto "flex: 1" y "flex: 2") -> PANTALLA DIVIDIDA.

**Descripción:** Explicarás cómo hacer que los elementos se repartan el espacio inteligentemente usando proporciones, clave para construir el *footer* de 3 columnas de tu Lab.

> 
> 
> 
> **Guion/Pautas:**
> 
> - "A veces no queremos centrar cajas rígidas, sino que queremos que los elementos se estiren como chicle para rellenar todo el espacio vacío que sobra en la pantalla."
> - "Ojo aquí: esta es la primera propiedad de Flexbox de la clase que **no se le pone al Padre, se le pone directamente al Hijo (Flex Item)**."
> - (Vas a Excalidraw y dibujas un contenedor con 3 cajas): "Si yo le digo a estas tres cajas que tengan `flex: 1`, les estoy ordenando: 'Estírense todo lo que puedan'. Como las tres tienen el número 1, las tres medirán exactamente lo mismo (33.3% cada una), sin importar si una caja tiene una palabra y la otra tiene diez párrafos adentro."
>     - PERO PARA QUE FUNCIONES  DEBE HABER ESPACIO RESTANTE EN EL CONTENEDOR FLEX
> - *(La Analogía en Canva)*: "Mírenlo como rebanadas de un pastel. El número representa la cantidad de rebanadas del espacio sobrante que te vas a llevar. Si tengo dos cajas, y a la verde le pongo `flex: 1` y a la naranja `flex: 2`, la segunda caja será exactamente el doble de grande, porque se lleva dos rebanadas del espacio sobrante."
> - *(Code-Along Final)*: "Esto es súper útil para nuestro Footer. Tenemos 3 secciones (Sobre mí, Contacto, Enlaces). Vamos a nuestro CSS, seleccionamos la clase `.footer-section` y le ponemos `flex: 1;`. ¡Pum! Ahora tenemos un pie de página profesional, dividido en 3 columnas perfectas y matemáticamente exactas."

### Momento 6: Efectos Visuales y UI Moderna (Profundidad y Movimiento)

- USAR LAS SECCIONES COMO CARDS , PONLE EN VIVO ALGUNOS ESTILOS MIENTRAS EXPLICAS

**0. El Concepto de Card (El patrón UI moderno)**

**EN PANTALLA:** NAVEGADOR WEB (Pestañas abiertas en YouTube, Airbnb o Netflix) -> Luego pasas a tu VS Code.

**Descripción:** Antes de alinear las cosas, debes explicarles *qué* van a alinear. Introducirás la "Tarjeta" (Card) como un estándar de la industria.

> 
> 
> 
> **Guion/Pautas:**
> 
> - "Hoy vamos a construir 'Cards' o Tarjetas. ¿Qué es una Card? Es un contenedor (una cajita) que agrupa información relacionada sobre un mismo tema. Por ejemplo, la foto de una película, su título y su descripción."
> - (Muestras las páginas reales): "Miren YouTube: cada video es una Card. Miren Airbnb: cada departamento es una Card. Tienen diferentes diseños, sombras y tamaños, pero el concepto es exactamente el mismo."
> - "En nuestro proyecto, vamos a convertir nuestra lista de películas favoritas en un grupo de Cards profesionales. ¡Ahora sí, estamos listos para encender Flexbox!"

**1. `box-shadow` (Creando profundidad y tarjetas flotantes)**

**EN PANTALLA:** PRESENTACIÓN CANVA -> NAVEGADOR (Generador online tipo CSSmatic o GetCSSScan) -> VS CODE.

**Descripción:** Introducirás la propiedad para crear sombras, explicarás sus valores y usarás una herramienta visual para que vean cómo se comporta la luz antes de pegarlo en el proyecto.

> 
> 
> 
> **Guion/Pautas:**
> 
> - "Para que nuestro diseño deje de verse plano y parezca una aplicación moderna, necesitamos darle profundidad. ¿Cómo hacemos que algo parezca que está flotando? Con una sombra."
> - (Muestras la imagen): "La propiedad se llama `box-shadow`. Tiene 5 ingredientes: El eje X (derecha/izquierda), el eje Y (arriba/abajo), el Blur (qué tan borrosa es), el Spread (qué tanto crece) y el Color (casi siempre negro transparente con `rgba`)."
> - (Abres el generador online): "Pero seamos honestos, nadie adivina estos números mentalmente. Los profesionales usamos herramientas visuales. Miren esta página. Si yo muevo este control (slider) del Blur, miren cómo la sombra se suaviza al instante. Si muevo el eje Y, la sombra baja."
> - *(Code-Along)*: "Acomodemos una sombra suave para nuestras cards. Cópienme este código o saquen uno del generador. Vamos a la clase `.card` en VS Code y pegamos: `box-shadow: 0 2px 8px rgba(0,0,0,0.1);`. ¡Miren su navegador! Sus tarjetas ahora tienen volumen y parecen separadas del fondo."

**2. `transition` (La magia de la animación suave)**

**EN PANTALLA:** PRESENTACIÓN CANVA (Imagen `image_ca6b63.png`) -> NAVEGADOR (Página para probar transiciones o un botón de ejemplo) -> VS CODE.

**Descripción:** Explicarás que los cambios bruscos en la web son molestos y cómo `transition` actúa como un puente suave entre dos estados.

> 
> 
> 
> **Guion/Pautas:**
> 
> - "Ya tenemos `:hover` en nuestros botones, pero el color cambia de golpe. Se siente robótico. Queremos que el cambio sea elegante y natural."
> - "Para eso usamos `transition`. Para que exista, necesitamos dos puntos: Un Estado Inicial (el reposo) y un Estado Final (el evento, casi siempre `:hover`). ¡OJO! La transición SIEMPRE se escribe en el estado inicial, para que el navegador sepa cómo ir y cómo regresar suavemente."
>     
>     > 
>     > 
>     > 
>     > La propiedad transition es la herramienta de CSS que permite que los cambios en los estilos ocurran de forma suave y gradual en lugar de ser instantáneos
>     > 
>     > - Usa un boton ejemplo para demostrarlo
>     > - para que una transición exista,necesitas estados, el navegador necesita saber de qué punto a qué punto se va a mover.
>     > - Generar una imagen de la sintaxis de la propiedad
>     > En el 99% de los casos, esos "estados" se definen así:
>     > Estado Inicial (Reposo): Es el estilo que tiene el elemento normalmente. Aquí es donde escribes la propiedad transition.
>     > Estado Final (Evento): Es el cambio que ocurre tras una acción. Casi siempre se usa con pseudoclases.
>     > **SINTAXIS**
>     > Los 4 componentes:
>     > - Propiedad (property): Qué quieres animar (ej: background-color, width, transform, opacity). Si quieres que afecte a todo, usa all.
>     > - Duración (duration): Cuánto tiempo tarda el cambio (ej: 0.3s o 300ms).
>     > - Curva de tiempo (timing-function): El "ritmo" de la animación.
>     > - linear: Velocidad constante.
>     > - ease: Empieza lento, acelera y termina lento (el más natural).
>     > - ease-in: Empieza lento.
>     > - ease-out: Termina lento.
>     > - Retardo (delay): (Opcional) Cuánto tiempo espera antes de empezar a moverse.
> - (Muestras la imagen): "Su sintaxis pide 4 cosas: La propiedad que vamos a animar, cuánto va a durar (ej. `0.3s`), el ritmo (usaremos `ease` que es el más natural porque empieza lento, acelera y frena lento) y un retardo opcional."
> - *(La demostración en la herramienta online)*: "Miren este botón de prueba. Le quito el tiempo y salta bruscamente. Le pongo `0.5s` y miren cómo se funde el color de forma hermosa."

**3. `transform` (La plastilina de CSS: Mover y Escalar)**

**EN PANTALLA:** PRESENTACIÓN CANVA (Imágenes `image_ca68a3.png` e `image_ca689c.png`) -> NAVEGADOR (Herramienta CSS Transform) -> VS CODE.

**Descripción:** Presentarás `transform` como una herramienta segura que no rompe el layout, enfocándote en las funciones de traslación y escala para el estado hover.

> 
> 
> 
> **Guion/Pautas:**
> 
> - "Si queremos agrandar una caja cuando pasamos el mouse, podríamos cambiarle el `width` o el `padding`. ¡No lo hagan! Eso empujaría a las cajas vecinas y rompería nuestro layout."
> - "Aquí entra `transform`. Modifica la forma o posición de un elemento, pero el 'hueco' original que ocupa se respeta. Es como manipular plastilina en el aire."
>     
>     > 
>     > 
>     > 
>     > **transform es la propiedad de CSS que te permite modificar la forma, posición, tamaño o rotación de un elemento** sin alterar el flujo normal del documento (es decir, sin empujar a los vecinos).
>     > Es como si el elemento fuera de plastilina: puedes estirarlo, moverlo o girarlo, pero el "hueco" que ocupaba originalmente en el layout se queda exactamente igual.
>     > 
>     > Pero solo vamos a ver dos : 
>     > 
>     > - **translate(x, y) (Mover): Desplaza el elemento de su sitio original.**
>     > transform: translate(20px, -10px); (20px a la derecha, 10px arriba).
>     > - **scale(n) (Escalar): Cambia el tamaño (1 es el tamaño original).**
>     > transform: scale(1.2); (Lo agranda un 20%).
>     > transform: scale(0.5); (Lo reduce a la mitad)
> - (Muestras la imagen de Translate): "Función 1: `translate(x, y)`. Desplaza el elemento. Si usamos valores negativos en la 'Y', el elemento sube."
> - (Muestras la imagen de Scale): "Función 2: `scale(n)`. Cambia el tamaño. `1` es el tamaño original. Si ponemos `1.05`, crece un 5% sutilmente."
> - (Muestras el generador): "Miren cómo muevo esta cajita en el simulador. Se estira, se mueve, gira, y la caja que tiene al lado ni se entera. Es un truco puramente visual."

**4. Code-Along Final (Implementando todo en el proyecto)**

**EN PANTALLA:** PANTALLA DIVIDIDA (VS Code y Navegador Live Server).

**Descripción:** Unirás los tres conceptos (`box-shadow`, `transition` y `transform`) para crear el efecto "Wow" definitivo en las cards y la imagen de perfil de su laboratorio.

> 
> 
> 
> **Guion/Pautas:**
> 
> - "¡Llegó la hora de la verdad! Vamos a hacer que nuestro perfil se sienta de clase mundial."
> - "Paso 1: Vayan a la regla de su `.card`. Le diremos al navegador que esté preparado para animar dos cosas. Escriban: `transition: transform 0.3s ease, box-shadow 0.3s ease;`."
> - "Paso 2: Creamos el evento. Escriban abajo una nueva regla: `.card:hover { ... }`."
> - "Paso 3: Dentro del hover, metemos la magia. Queremos que la tarjeta se eleve y que la sombra se haga más grande: `transform: translateY(-5px); box-shadow: 0 8px 16px rgba(0,0,0,0.2);`."
> - "Guarden y pasen el ratón por sus tarjetas. (Haces una pausa dramática mientras ellos lo prueban). ¿Sienten la diferencia? Acaban de pasar de una web amateur a una interfaz interactiva profesional."
> - *(Opcional rápido)*: "Aplíquenle el efecto de 'lupa' a su imagen de perfil: `img { transition: transform 0.3s ease; }` e `img:hover { transform: scale(1.05); }`. ¡Listo! Ya tienen un perfil digno de mostrar."