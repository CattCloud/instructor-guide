# CLASE 03 v_03 — A partir del MOMENTO 2
> **Nota:** Este documento cubre desde el Momento 2 en adelante.
> El Momento 1 se mantiene desde `CLASE 03 v2.md`.
> Esta versión refleja los temas y el orden real de la clase dictada.

---

## MOMENTO 2: Bienvenida, Setup y el Puente de Comunicación
**Tiempo:** ~40 min

---

### 2.1 Transición a CSS y Conceptos UX/UI

> **La Bienvenida:**
> *\"¡Hola a todos! En la clase anterior y al principio de esta construimos el esqueleto de nuestra página web con HTML. Funciona, sí, pero se ve... como un documento antiguo. Hoy nos vamos a poner los lentes de diseñadores de moda, porque vamos a aprender CSS.*
>
> *Pero antes de escribir código, hablemos de diseño puro. Hay dos términos cruciales en esta industria: UX y UI.\"*

> **Tu explicación teórica precisa:**
> *\"UX significa User Experience (Experiencia de Usuario). El diseñador UX investiga qué necesita la página para ser útil. Por ejemplo, en una tienda online, UX decide que debe haber un buscador, filtros por precio y un carrito de compras.*
>
> *UI significa User Interface (Interfaz de Usuario). El diseñador UI toma esos requisitos y usa la psicología del consumidor para diseñarlos. Decide de qué color es el botón, qué tamaño tiene la imagen, qué tan grande es el título. Por regla de UI, sabemos que un título debe ser más grande que un párrafo para guiar la lectura. Eso es UI.*
>
> *En este bootcamp los preparamos como Full Stack — es decir, entenderán tanto el Frontend (la parte visual y el diseño UI/UX) como el Backend (bases de datos y lógica invisible). Hoy somos Frontend.\"*

---

### 2.2 El Efecto WOW — La inspiración

**EN PANTALLA: NAVEGADOR — Abre páginas web de alto impacto (ej. páginas ganadoras en Awwwards, Apple.com, etc.).**

> **La acción guiada:**
> 1. Mostrar una página con alto nivel de interacción, animaciones o scroll dinámico. Navegar un poco.
> 2. Abrir las herramientas de desarrollador (`F12`), inspeccionar elementos y borrar temporalmente el nodo `<head>` (o el `<link>` de CSS) para romper la página.
> 3. Mostrar cómo la página "millonaria" se convierte instantáneamente en puro texto negro en fondo blanco.

> **Tu explicación teórica precisa:**
> *\"Miren esta página. Parece un videojuego, ¿verdad? Animaciones increíbles, colores, dinámica. Cualquiera pensaría que está hecha con tecnología alienígena.*
>
> *Pero miren el inspector. Es HTML. Exactamente el mismo esqueleto que ustedes acaban de escribir en su Lab 2. ¿Qué hace la diferencia? El CSS.*
>
> *Si yo le quito el CSS a esta página, esto es lo que queda: texto plano.*
> *CSS les da ese poder. Las personas que construyeron esta página web empezaron aprendiendo exactamente lo mismo que les voy a enseñar ahora. El límite a partir de hoy ya no es el código, es su propia creatividad.\"*

---

### 2.3 Sintaxis y Reglas CSS

**EN PANTALLA: EXCALIDRAW o VS Code (archivo en blanco) — Mostrando la anatomía de una regla CSS.**

> **Tu explicación teórica precisa:**
> *\"En CSS escribimos 'reglas'. Cada regla tiene tres partes fundamentales:*
>
> *1. El Selector: ¿A quién le vamos a aplicar el diseño? (Ej. `h1`)*
> *2. La Propiedad: ¿Qué le queremos cambiar? (Ej. `color`)*
> *3. El Valor: ¿Cómo lo queremos dejar? (Ej. `red`)*
>
> *Todo se envuelve en llaves `{ }`. Queda así:\"*
> ```css
> selector {
>     propiedad: valor;
> }
> ```
> *\"Existen varias formas de seleccionar elementos, pero hoy empezaremos con dos:*
> *— Por Etiqueta: Pongo el nombre de la etiqueta (`h1`, `p`). Esto afecta a TODOS los elementos de ese tipo en la página.*
> *— Por ID: Pongo un michi seguido del ID (`#sobre-mi`). Esto afecta a UN SOLO elemento específico, usando su 'DNI'.\"*

---

### 2.4 El Puente de Comunicación (Code-along)

**EN PANTALLA: PANTALLA DIVIDIDA — VS Code (con `index.html`) + Navegador con Live Server.**

> **Tu explicación teórica precisa:**
> *\"Nuestro archivo HTML no tiene idea de que vamos a escribir estilos. Necesitamos conectarlos. Hay 3 formas de hacerlo, pero solo una es profesional:*
>
> *1. Estilos en línea (`<h1 style=\"color: red;\">`): Mezclas CSS dentro del HTML. Causa código espagueti. Solo afecta a un elemento.*
> *2. Etiqueta `<style>` en el `<head>`: Mejor, pero engorda tu archivo HTML si tienes muchas reglas.*
> *3. Archivo Externo: Se crea un archivo `.css` aparte y se conecta como un puente. Es la forma correcta porque centraliza y separa responsabilidades.\"*

> **La acción guiada:**
> 1. *\"Creen un archivo nuevo y llámenlo exactamente `styles.css`.\"*
> 2. *\"Vayan a `index.html`. Dentro del `<head>`, escriban la etiqueta `<link>`. Asegúrense de que el atributo `href` tenga exactamente el mismo nombre: `styles.css`.\"*
> ```html
> <link rel="stylesheet" href="styles.css">
> ```
> 3. *\"Vamos a probar el puente. Vayan a su `styles.css` y escribamos una regla directa al `body`:\"*
> ```css
> body {
>     background-color: aqua;
> }
> ```
> 4. *\"Abran su navegador. Si la página se pintó de color aqua, ¡nuestro CSS está conectado! *(Si no aparece, revisen letra por letra el nombre del archivo y el href)*.\"*

> **Nota táctica:** Pedir conformidades en el chat (“manden su pantallazo” o “digan check”) antes de continuar, para asegurar que todos tienen el CSS vinculado. Borrar la regla `aqua` después de comprobar.

---

## MOMENTO 3: Revelando la Matrix (Normalización, Cascada y Herencia)
**Tiempo:** ~35 min

---

### 3.1 Estilos Fantasma — La pregunta de los espacios

**EN PANTALLA: NAVEGADOR — La página del alumno abierta, sin CSS todavía. Inspector de Elementos abierto (`F12`).**

> **La pregunta de arranque:**
> *\"Tengo una pregunta para los curiosos. Al momento de ver su página web, ¿se han dado cuenta de que ya tiene espacios entre los textos, un tamaño de letra más grande para el `h1`, el enlace subrayado y azul... y ustedes no escribieron ninguna línea de CSS para eso? ¿Por qué?\"*
>
> *(Dejar que respondan en el chat. Luego:)*
>
> *\"Vamos a comprobarlo. Abran su inspector `F12`, seleccionen, por ejemplo, el `h1` con la herramienta de selección de elementos. Miren en la columna de Styles del lado derecho — ven una lista de estilos que ya están ahí. El navegador ya le puso un `font-size` grande, un `font-weight: bold`, un margen arriba y abajo. Ustedes no pusieron nada. Lo puso el navegador por defecto.\"*

> **Tu explicación teórica precisa:**
> *\"¿Por qué el navegador le pone estilos a tu página? La respuesta está en la historia. Cuando HTML fue creado, su objetivo no era diseñar páginas bonitas — era mostrar documentos científicos universitarios en texto plano. Para que esos documentos fueran legibles, el navegador les aplicó márgenes, tamaños de título, subrayados en enlaces. Esos estilos por defecto se quedaron hasta hoy.*
>
> *El problema es que cada navegador — Chrome, Edge, Safari — aplica estilos ligeramente distintos. Tu página puede verse diferente dependiendo del navegador. Por eso necesitamos resetearlos.\"*

> **Pregunta de calibración:**
> *\"Si el `a` ya tiene color azul y subrayado por defecto — y yo quiero que mis enlaces sean blancos sin subrayado — ¿basta con que yo no escriba nada en mi CSS?\"*
>
> *(Respuesta esperada: No — tengo que sobrescribirlo activamente. El navegador ya tiene esa regla puesta; si yo no pongo la mía, se aplica la suya.)*

---

### 3.2 La Normalización — El lienzo en blanco

**EN PANTALLA: VS CODE — `styles.css` abierto (vacío o con solo el puente `link`).**

> **La pregunta conectora:**
> *\"Entonces, ¿qué prefieren? ¿Dibujar sobre una hoja que ya tiene rayones y marcas que no pusieron ustedes — o empezar sobre una hoja en blanco donde todo lo que aparece fue decisión suya?\"*
>
> *(Esperar respuesta. Respuesta esperada: hoja en blanco.)*

> **Tu explicación teórica precisa:**
> *\"A eso se le llama Normalización — resetear los estilos por defecto del navegador para empezar desde cero con control total.*
>
> *Para hacerlo usamos el selector más poderoso que existe en CSS: el asterisco `*`. El asterisco significa 'selecciona absolutamente todos los elementos de la página'. Ninguna excepción.*
>
> *Les voy a compartir por el chat un bloque de normalización básica — cópienselo en la línea 1 de su `styles.css`:\"*

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

> *\"Lo que hace cada línea:*
> *— `margin: 0` y `padding: 0`: quita todos los espaciados que el navegador había puesto por defecto.*
> *— `box-sizing: border-box`: esto lo vamos a ver con detalle en el Box Model, pero por ahora quédense con que hace que las cajas se comporten de forma más predecible.*
>
> *Guarden y miren su página. Todo el contenido se aplastó contra los bordes. Se ve feo ahora — pero eso es lo correcto. Ahora nosotros tenemos el control absoluto.\"*

---

### 3.3 La Cascada — Cómo lee CSS el navegador

**EN PANTALLA: VS CODE — `styles.css` con la normalización ya puesta.**

> **Tu explicación teórica precisa:**
> *\"CSS significa Cascading Style Sheets — Hojas de Estilo en Cascada. ¿Por qué 'en cascada'?*
>
> *Porque el navegador lee el CSS exactamente igual que una cascada de agua: de arriba hacia abajo, línea por línea. Y la última regla que encuentra para un elemento es la que gana.*
>
> *Por eso pusimos el reseteo universal en la línea 1, bien arriba — para que las reglas específicas que definimos más abajo las sobrescriban y tengan la última palabra.\"*

> **Demo en vivo — sobreescritura intencional:**
>
> Escribe temporalmente esto en el CSS para mostrar el comportamiento:
> ```css
> body {
>     background-color: green;
> }
>
> body {
>     background-color: red;
> }
> ```
> *\"¿De qué color quedó el fondo? Rojo — porque el segundo `body` es el último que leyó. Lo borramos ahora — era solo para mostrar la cascada en acción.\"*

---

### 3.4 La Herencia — Los estilos que bajan solos

**EN PANTALLA: VS CODE — `styles.css`. Agrega al `body` una propiedad de color de texto.**

> **La pregunta de setup:**
> *\"Ahora quiero que me expliquen esto. Voy a poner al `body` un color de texto — digamos un tono oscuro.\"*
>
> ```css
> body {
>     color: #2d3436;
> }
> ```
>
> *\"El `body` no tiene texto directamente adentro — tiene etiquetas. ¿Por qué el `h1`, el `p` y los `li` cambiaron de color si yo no les puse nada directamente?\"*
>
> *(Dejar que razonen. Tomar respuestas del chat.)*

> **Tu explicación teórica precisa:**
> *\"Eso se llama Herencia. En CSS, hay propiedades que un elemento padre les transmite automáticamente a sus hijos y descendientes.*
>
> *Recuerden que el HTML se organiza como un árbol genealógico: el `body` es el padre de todo — del `header`, del `main`, del `footer`. El `header` es padre del `h1` y del `nav`. El `nav` es padre de los `a`. Y así sucesivamente.*
>
> *Cuando yo le pongo `color` al `body`, ese estilo 'cae' hacia todos sus descendientes hasta encontrar texto puro. Como el `h1` tiene texto adentro, hereda ese color y lo aplica.*
>
> *La herencia nos ahorra trabajo. En lugar de ponerle `color` a cada uno de los 20 elementos que tienen texto en nuestra página, se lo ponemos una vez al `body` y todos lo heredan.\"*

> **¿Por qué los enlaces ignoraron la herencia?**
> *\"¿Notaron que el enlace `a` no heredó el color — sigue azul? Eso pasa porque el navegador ya tenía una regla más específica para `a`. Y CSS prioriza la regla más específica sobre la heredada. A eso se le llama Especificidad — se los dejo como concepto a investigar y lo veremos más adelante.\"*

> **Preguntas de Activación:**
> 1. *\"Si yo le pongo `font-family: 'Poppins'` al `body`, ¿necesito repetirlo en el `h1`, el `p` y el `footer`?\"*
>    *(Respuesta esperada: No — se hereda hacia abajo automáticamente. Por eso siempre ponemos la fuente en `body`.)*
> 2. *\"¿El `margin` o el `padding` también se heredan?\"*
>    *(Respuesta esperada: No — el espaciado no se hereda. Solo propiedades relacionadas con el texto como `color`, `font-family`, `font-size`, `font-weight`. Eso es por diseño del lenguaje.)*

---

## MOMENTO 4: Identidad Visual (Color, Tipografía y Texto)
**Tiempo:** ~45 min (incluye receso)

---

### 4.1 Las dos propiedades de color

**EN PANTALLA: EXCALIDRAW — Dibuja en vivo una caja con fondo coloreado y texto adentro. Señala las dos áreas.**

> **Tu explicación teórica precisa:**
> *\"Ya tenemos el lienzo limpio. Ahora pintamos. Para color en CSS hay exactamente dos propiedades:*
>
> *— `background-color`: pinta el fondo de la caja — ese interior del rectángulo.*
> *— `color`: pinta el texto que está dentro de esa caja.*
>
> *Dos propiedades, dos trabajos distintos. No se confundan.\"*

> **Demo en VS Code (30 segundos):**
> ```css
> header {
>     background-color: #2d3436;
>     color: white;
> }
> ```
> *\"Noten: fondo oscuro, texto blanco. ¿Por qué? Porque si el fondo es oscuro, el texto tiene que ser claro — y viceversa. Eso es una regla de UI básica.\"*

---

### 4.2 Valores de color — Nombres e Hexadecimales

> **Tu explicación teórica precisa:**
> *\"Hay dos formas de escribir colores en CSS:*
>
> *1. Nombres en inglés: `red`, `blue`, `green`, `white`, `black`. Son fáciles de recordar pero muy limitados — son colores básicos y saturados que rara vez se ven bien en un diseño real.*
>
> *2. Códigos hexadecimales: `#2d3436`. Son 6 caracteres después del `#` que representan millones de colores exactos. Es el estándar que usan los diseñadores y lo que tenemos que usar nosotros.\"*

---

### 4.3 Herramienta de contraste — Regla de UI

**EN PANTALLA: NAVEGADOR — Abre la herramienta de verificación de contraste (ej. `webaim.org/resources/contrastchecker`).**

> **Tu explicación teórica precisa:**
> *\"Aquí viene una regla de UI que muchos programadores ignoran: el color de fondo y el color de texto tienen que contrastar suficientemente para que el usuario pueda leerlo.*
>
> *Miren esto en my página — si pongo un fondo oscuro y un texto de un tono también oscuro, ¿pueden leerlo? A las justas. Eso es mala práctica porque hay personas con baja visión que definitivamente no podrían.*
>
> *Esta herramienta que les muestro recibe el color de fondo y el color de texto y les dice si el contraste es suficiente o no. Si falla, cambien uno de los dos colores hasta que pase.*
>
> *Regla práctica: fondo oscuro → texto blanco o muy claro. Fondo claro → texto oscuro.\"*

---

### 4.4 Dinámica de Paleta — Construcción del sistema de colores

**EN PANTALLA: NAVEGADOR — Abre `coolors.co` y/o `Adobe Color`.**

> **La acción guiada:**
> *\"Ahora tienen entre 5 y 8 minutos para encontrar su paleta de colores personal. Tres colores: uno que irá en el header/footer, uno para el fondo del body y uno que representa el acento o tono llamativo.*
>
> *Cuando los tengan, los documentan en la parte de arriba de su `styles.css` con un comentario — así no los pierden:\"*

```css
/*
    PALETA DE COLORES
    Primario (header/footer): #2d3436
    Fondo (body): #f5f6fa
    Acento: #6c5ce7
    Texto: #ffffff (sobre primario) / #2d3436 (sobre fondo)
*/
```

> **Herramientas que puedes mostrar:**
> - `coolors.co` — genera paletas aleatorias armónicas. Barra espaciadora para nueva propuesta. Candado para fijar un color.
> - `Adobe Color` — paletas basadas en armonías de color (triada, monocromático, etc.)
> - Referencia real: BCP, Coca-Cola — usar el color del logo como color primario y completar con neutros (blanco, gris, negro).

> **Nota táctica:** Después del receso los alumnos vuelven con su paleta definida. Verificar que cada uno pasó la prueba de contraste antes de avanzar.

---

### 4.5 Aplicación de colores — Code-along

**EN PANTALLA: PANTALLA DIVIDIDA — VS Code + Navegador con Live Server.**

> **La acción guiada:**
> 1. *\"Al `body` le ponemos el color de fondo claro:\"*
> ```css
> body {
>     background-color: #f5f6fa;
>     color: #2d3436;
> }
> ```
> 2. *\"Al `header` y `footer` les ponemos el color primario. Dos selectores separados por coma — es la forma de aplicar el mismo estilo a dos elementos a la vez:\"*
> ```css
> header, footer {
>     background-color: #2d3436;
>     color: white;
> }
> ```
> 3. Verificar en navegador. *\"¿Pueden leer el texto del header? Si no, cambien alguno de los dos colores hasta que contrase bien.\"*

---

### 4.6 Tipografía — Google Fonts y `font-family`

**EN PANTALLA: MICROSOFT WORD abierto → luego `fonts.google.com`.**

> **La conexión con Word:**
> *\"Cambiar la fuente en CSS es exactamente lo que hacen en Word cuando abren el menú de fuentes arriba y eligen 'Arial' o 'Times New Roman'. En CSS eso se llama `font-family`.*
>
> *El problema es que si yo uso una fuente que solo está instalada en mi computadora, el usuario que abra mi página desde otra máquina no la va a ver — verá la fuente genérica del sistema. Para resolver eso usamos Google Fonts, que es una biblioteca mundial de fuentes gratuitas accesibles desde cualquier dispositivo.\"*

> **La acción guiada — Google Fonts:**
> 1. Ir a `fonts.google.com`.
> 2. Buscar **Poppins** (o la fuente del alumno).
> 3. Darle a `Get Font` → `Get embed code` → copiar la etiqueta `<link>` que da Google.
> 4. Pegar esa etiqueta en el `<head>` del `index.html`, **justo arriba** del `<link rel="stylesheet" href="styles.css">`.
> 5. En `styles.css`, agregar dentro de la regla del `body`:
> ```css
> body {
>     font-family: 'Poppins', sans-serif;
> }
> ```
> *\"¿Por qué ponemos la fuente en el `body`? Por herencia — así se aplica a toda la página de un solo golpe.*
>
> *El `sans-serif` al final es la fuente de respaldo: si Poppins no carga, el navegador usa la fuente genérica del sistema para que al menos haya algo legible.\"*

---

### 4.7 Tamaño y grosor de letra — `font-size` y `font-weight`

**EN PANTALLA: MICROSOFT WORD → luego VS Code.**

> **`font-size` — El tamaño:**
> *\"En Word, el número que cambia el tamaño de la letra — aquí eso es `font-size`, y usa píxeles como unidad de medida.*
>
> *¿Qué es un píxel? Su pantalla es un mosaico de millones de cuadraditos de luz microscópicos — esos son los píxeles. Un `font-size: 16px` le dice al navegador que esa letra tenga 16 cuadraditos de alto.*
>
> *No tiene sentido compararlo con centímetros porque el tamaño de un píxel depende de la densidad de la pantalla — un celular tiene más píxeles por centímetro que un monitor grande porque lo vemos de cerca. Lo que importa es que sea intuitivo: 16px es texto normal, 24px es título mediano, 40px es título grande.\"*

> **`font-weight` — El grosor:**
> *\"En Word es la 'N' de negrita. En CSS es `font-weight`. Acepta dos tipos de valores:*
>
> *— Palabras clave: `normal` (igual a 400) o `bold` (igual a 700).*
> *— Números de 100 a 900, en escalones de 100: 100 es finísima, 400 es normal, 700 es negrita estándar, 900 es la más gruesa.*
>
> *Para títulos, recomendable 700 o `bold`. Para párrafos, déjenlo en el valor por defecto — no necesita cambio.\"*

> **`text-align` — La alineación:**
> *\"Posiciona el contenido de texto dentro de la caja. Solo funciona en elementos en bloque — tiene que haber espacio dentro de la caja para que el texto se mueva.*
>
> *Cuatro valores: `left` (por defecto), `center`, `right`, `justify`.*
>
> *Nota importante: no funciona en elementos en línea como `<a>`. Para centrar los enlaces del `<nav>`, no le ponen `text-align` al `a` — se lo ponen al `nav`, que sí es un elemento en bloque con espacio para mover el contenido.\"*

---

## MOMENTO 5: Controlando el Espacio (Box Model)
**Tiempo:** ~30 min

---

### 5.1 El concepto — Todo es una caja

**EN PANTALLA: PRESENTACIÓN / EXCALIDRAW — Diagrama del Box Model.**

> **La pregunta de arranque:**
> *\"Recuerden que desde HTML les dijimos que cada elemento HTML se representa como un rectángulo — una caja. Ahora vamos a ver esa caja en detalle, porque tiene cuatro capas.*
>
> *Vamos al inspector. Seleccionen, por ejemplo, el `h1`. Vayan a la pestaña 'Computed' o busquen el diagrama de cajas que aparece abajo del panel de estilos. Ven un rectángulo adentro de otro adentro de otro.\"*

> **Tu explicación teórica precisa:**
> *\"Cada caja en CSS está compuesta por cuatro áreas:*
>
> *— **Content**: el contenido real — el texto o la imagen dentro de la etiqueta.*
> *— **Padding**: el espacio interno — entre el contenido y el borde. Como el relleno de una caja de envío que protege al objeto del cartón.*
> *— **Border**: el borde físico — la línea que delimita la caja.*
> *— **Margin**: el espacio externo — fuera del borde. Es la burbuja de espacio personal que separa esta caja de las cajas vecinas.*
>
> *Regla de oro: Padding da aire por dentro. Margin empuja a los vecinos por fuera.\"*

---

### 5.2 Demo visual — El borde rojo de rayos X

**EN PANTALLA: VS CODE → NAVEGADOR.**

> **La acción guiada:**
> 1. Agregar temporalmente al CSS:
> ```css
> * {
>     border: 1px solid red;
> }
> ```
> 2. Guardar y mostrar el navegador.
> *\"Su página ahora parece un plano arquitectónico. Ven todos los rectángulos — esas son las cajas que el navegador dibuja para cada elemento. Hasta los enlaces y las imágenes son rectángulos.*
>
> *Esto es una herramienta de diagnóstico. Siempre que no entiendas por qué algo está donde está, pongan este borde y verán exactamente los límites de cada caja.*
>
> *Lo quitamos — era solo para que lo vieran.\"*

---

### 5.3 Border — El borde de la caja

> **Tu explicación teórica precisa:**
> *\"La propiedad `border` necesita tres valores separados por espacio: grosor, estilo y color.*\"*

```css
h1 {
    border: 2px solid #2d3436;
}
```

> *\"El grosor es una unidad de medida — píxeles. El estilo es la palabra que define cómo se dibuja: `solid` (línea continua), `dashed` (guiones), `dotted` (puntitos), `none` (ninguno). El color ya saben cómo escribirlo.*
>
> *También se puede aplicar a un solo lado: `border-top`, `border-bottom`, `border-left`, `border-right`.\"*

---

### 5.4 Los lados — Top, Right, Bottom, Left

> **Tu explicación teórica precisa:**
> *\"Antes de ver padding y margin, aprendan los nombres de los cuatro lados de la caja — porque los van a usar en casi todo:*
> *— `top`: arriba*
> *— `right`: derecha*
> *— `bottom`: abajo*
> *— `left`: izquierda*
>
> *Se escriben exactamente así, en minúsculas. Son anglicismos que necesitan memorizar porque el CSS los usa textualmente.\"*

---

### 5.5 Padding — El espacio interno

**EN PANTALLA: VS CODE + NAVEGADOR — con el border del h1 visible para ver el efecto.**

> **Formas de escribir padding:**

| Sintaxis | Comportamiento |
|---|---|
| `padding: 20px;` | 20px en los 4 lados |
| `padding: 10px 20px;` | 10px arriba/abajo — 20px izquierda/derecha |
| `padding: 10px 20px 30px 40px;` | Top → Right → Bottom → Left (sentido horario) |
| `padding-top: 10px;` | Solo al lado indicado |

> **Demo en vivo:**
> ```css
> h1 {
>     border: 2px solid red;  /* para ver la caja */
>     padding: 10px;
> }
> ```
> *\"Ven el espacio verde en el inspector — eso es el padding. Está adentro del borde. El contenido (azul) tiene aire alrededor.\"*
>
> *Probar con `padding: 10px 40px` para mostrar que el horizontal es mayor.*

---

### 5.6 Margin — El espacio externo

> **Tu explicación teórica precisa:**
> *\"Margin tiene exactamente la misma sintaxis que padding — un valor, dos valores, cuatro valores o por lado específico. La única diferencia es que el espacio está fuera del borde, separando esta caja de otras cajas.*
>
> *Usualmente lo usamos para separar secciones entre sí o para centrar contenedores.\"*

```css
section {
    padding: 40px 20px;
    margin: 0 auto;        /* para centrar horizontalmente */
    max-width: 800px;      /* limitar el ancho en pantallas grandes */
}
```

> *\"El truco `margin: 0 auto` centra el contenedor horizontalmente. `0` arriba y abajo, `auto` a los lados — el navegador calcula igual espacio izquierda y derecha. Pero tiene que haber un `max-width` definido para que funcione, porque una caja que ocupa el 100% no tiene espacio para moverse.\"*

---

## MOMENTO 6: Detalles Finales y Cierre
**Tiempo:** ~25 min

---

### 6.1 Imágenes — Dimensiones y `border-radius`

**EN PANTALLA: VS CODE + NAVEGADOR.**

> **Dimensiones con `auto`:**
> *\"Las imágenes tienen un `aspect ratio` — una proporción entre ancho y alto. Si yo le pongo el mismo valor a ambos lados y la imagen no es cuadrada, se va a distorsionar.*
>
> *El truco: definir solo una dimensión y poner `auto` en la otra. El navegador calcula la segunda dimensión respetando la proporción original de la imagen.\"*

```css
img {
    width: 200px;
    height: auto;    /* el navegador calcula la altura manteniendo proporción */
}
```

> **`border-radius` — Esquinas redondeadas:**
> *\"`border-radius` redondea las esquinas de cualquier caja — incluyendo imágenes.*
>
> *Mientras más valor le pongan, más redondo. Si quieren un círculo perfecto, pongan `50%` — pero solo si la imagen es cuadrada (mismo ancho y alto), porque si no, quedará como un óvalo.\"*

```css
img {
    width: 200px;
    height: 200px;
    border-radius: 50%;    /* círculo perfecto — solo si width == height */
}
```

---

### 6.2 Enlaces — Quitar el subrayado y aplicar estilos

**EN PANTALLA: VS Code + Navegador.**

> **Tu explicación teórica precisa:**
> *\"Los enlaces vienen con subrayado azul por defecto desde el navegador — como lo vemos en páginas de los años 90. Para una página moderna necesitamos quitarlo y rediseñarlo.*
>
> *`text-decoration: none` quita el subrayado. Luego le podemos poner color propio, un `font-weight` una negrita para que se note que es cliqueable.\"*

```css
nav a {
    text-decoration: none;
    color: white;
    font-weight: 500;
}
```

> **Notar el selector `nav a`:** *\"Estamos siendo específicos: no a todos los `a` de la página, sino solo a los que están dentro de un `nav`. Así no afectamos si hay enlaces en el cuerpo del texto.\"*

---

### 6.3 Selectores — Por Clase (`.clase`)

**EN PANTALLA: VS Code — Index.html + styles.css.**

> **La situación:** El alumno ya conoce seleccionar por nombre de etiqueta (`h1`) y por ID (`#sobre-mi`). Ahora aparece la clase.

> **Tu explicación teórica precisa:**
> *\"Hasta ahora conocemos dos selectores:*
> *— Por etiqueta: `h1` selecciona todos los `h1` de la página.*
> *— Por ID: `#sobre-mi` selecciona el elemento único con ese ID.*
>
> *Hay un tercero: por clase. La clase es como una etiqueta pegable que puedes poner en varios elementos para agruparlos bajo un mismo nombre.*
>
> *En HTML se agrega con el atributo `class`. En CSS se selecciona con un punto `.` antes del nombre.*
>
> *La diferencia clave con el ID: el ID es único — solo un elemento puede tener ese ID. La clase sí se puede repetir — múltiples elementos pueden tener la misma clase y todos reciben el mismo estilo.\"*

> **Demo en vivo:**
>
> En `index.html`:
> ```html
> <li class="lista-roja">Item 1</li>
> <li class="lista-roja">Item 2</li>
> <li>Item 3</li>   <!-- este NO tiene la clase -->
> ```
>
> En `styles.css`:
> ```css
> .lista-roja {
>     color: red;
> }
> ```
>
> *\"Solo los dos `li` que tienen `class='lista-roja'` se pintaron de rojo. El tercero no — porque no está en el grupo.*
>
> *Eso es el poder de la clase: agrupar elementos que quieres tratar igual, sin importar en qué etiqueta están.\"*

> **Resumen de los tres selectores:**

| Selector | Sintaxis CSS | Selecciona |
|---|---|---|
| Por etiqueta | `h1 { }` | Todos los `h1` de la página |
| Por ID | `#sobre-mi { }` | El elemento único con `id="sobre-mi"` |
| Por clase | `.lista-roja { }` | Todos los elementos con `class="lista-roja"` |

---

### 6.4 Hover — El estado interactivo del enlace

**EN PANTALLA: VS Code + Navegador — con el `nav a` ya estilizado.**

> **Tu explicación teórica precisa:**
> *\"Los elementos interactivos como los enlaces tienen estados — el estado normal, el estado cuando el usuario lo tiene debajo del cursor, el estado cuando hace clic.*
>
> *A estos estados se les llama pseudo-clases. Se escriben con dos puntos `:` después del selector.*
>
> *La más importante para comenzar es `:hover` — aplica los estilos solo cuando el cursor pasa sobre el elemento.\"*

```css
nav a:hover {
    color: #6c5ce7;     /* cambia el color al pasar el mouse */
}
```

> *\"Vayan a su navegador y pasen el mouse sobre los enlaces del menú. ¿Sienten cómo la página reacciona? Eso es lo que le da vida a una página. Sin JavaScript, sin librerías — solo CSS.*
>
> *Pueden cambiar `color`, `background-color`, `text-decoration`, lo que quieran. El comportamiento es: estos estilos solo se aplican mientras el cursor está encima.\"*

---

### 6.5 Reflexión y Preview

**EN PANTALLA: NAVEGADOR — Página del alumno o demo del instructor mostrando el resultado final.**

> **Tu explicación teórica precisa:**
> *\"Hagan scroll en su página. Compárenla mentalmente con el esqueleto en blanco que teníamos hace 90 minutos.*
>
> *Aplicaron una paleta de colores, una tipografía, kontrolaron el espaciado con Box Model y le dieron vida a sus enlaces con hover. Eso es exactamente el flujo de trabajo de un diseñador UI — no cambia si es un portafolio personal o la página de una empresa.*
>
> *¿Qué queda? Hasta ahora todas sus cajas están obligadas a ir una debajo de la otra. En la Clase 04 veremos Flexbox — la herramienta que les permite poner cajas lado a lado para construir menús horizontales reales, tarjetas en columnas y layouts completos.\"*

> **Entregable del Lab 03:**
> *\"Necesito dos cosas: un screenshot de su código en VS Code y un screenshot de cómo se ve la página en el navegador. Las dos juntas confirman que el CSS está escrito por ustedes y aplicado correctamente.*
>
> *Fecha límite: antes de la Clase 04.\"*
