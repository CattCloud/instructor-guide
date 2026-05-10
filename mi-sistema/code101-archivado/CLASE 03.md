# CLASE 03

## MOMENTOS DE LA CLASE

### MOMENTO 1: El Calentamiento (Repaso y Naturaleza HTML)

     **1. Repaso Flash: Lo que construimos hasta hoy en HTML**

- Las etiquetas semanticas
- La navegacion
- Heading,Parrafo,Listas, body,html,head,etc

**2. La Naturaleza de HTML (Bloque vs. Línea)** : Alguno se ah dado cuenta de que a pesar de que escriba un pequeño texto, el elemento siguiente se va abajo y no continua al lado?

**3. El Quiz Interactivo (Rompehielo)**

<aside>

**IDEAS-NOTAS-TAREAS:**

- Explicar el repaso usando el codigo de lab02 que tenemos hasta ahora
- Generar una imagen para el punto 2
- Definir la cantidad de preguntas y cuales serán, involucrando todos lo visto en HTML
</aside>

### **Momento 2: Bienvenida, Setup y el Puente de Comunicación**

1. **Transición a CSS : Hablar sobre CSS - Comparacion en tiempo real quitando CSS de una pagina HTML**
    
    Ver con ojos de diseñador de modas o artista, terminos UX/UI solo como introducción
    Es para dejarles en claro que tener una pagina bonito o bien diseñada se hace con la practica y conocer CSS
    
2. **Formas de conectar CSS:** Explicación de cómo HTML y CSS se comunican (etiqueta `<link>`).
3. **Sintaxis y Selectores CSS:** Reglas básicas de cómo escribir una instrucción en CSS y cómo "apuntar" a las etiquetas HTML (por etiqueta o `#id`).
4. **Code-along (Setup):** Creación del archivo `styles.css`, vinculación en el `<head>` y prueba inicial para verificar conexión(colocar una instruccion).

<aside>

**IDEAS-NOTAS-TAREAS:**

- Mostrar una pagina woaooooo para que noten la magia o lo que CSS puede llegar a hacer
(que la IA me comparta un link)
- En f**ormas de conectar CSS a HTML considero que expliquemos que ahi 3 pero considera que solo una es la recomendada, osea directo a la tercera pero tmb hablar de las otras 2 pero pq no la usaremos**
- **Sintaxis y Selectores CSS: Sobre selectores solamente por etiqueta o id(atributo clase aun no se ve)
(voy a generar una imagen sobre sintaxis para explicarlo)**
</aside>

### **Momento 3: Revelando la Matrix (Normalización)**

1. **Estilos fantasma y la herramienta Computed:** Uso de las herramientas de desarrollador del navegador para mostrar los espacios predefinidos que los alumnos no programaron.
2. **La Normalización (El lienzo en blanco):** Explicación de la necesidad de limpiar los estilos por defecto del navegador. Aplicación del reseteo universal con el selector .
3. Porque en cascada? como lee CSS y explicar como los estilos se pueden sobreescribir

<aside>

**IDEAS-NOTAS-TAREAS:**

- Punto 1:
    
    Pero porque mi NAVEGADOR ya le puso estilos por defecto a una pagina web? cual es su razón?
    
    Pregunta: Que prefieren chicos/as dibujar sobre una hoja que tiene dibujos o sobre una hoja en blanco?
    
- Tener un a la mano un codigo de normalizacion breve y sencillo para pasarselos (no quiero saturar su documento de styles de ellos porque vamos a trabajar encima o es mas no es necesario que lo peguen)
- Generar una imagen para el punto 3
</aside>

### **Momento 4: Identidad Visual (Colores, Tipografía y Texto)**

1. **Estilos de Color:** Propiedades para pintar (`background-color`, `color`) y los tipos de valores aceptados (colores predefinidos vs. códigos Hexadecimales).
2. **Dinámica de Paleta:** Búsqueda, elección y documentación de una paleta de colores personalizada.
3. **Code-along (Aplicación Visual):** Inyección de los colores elegidos en el `body`, `<header>` y `<footer>`.
4. **Tipografía y Google Fonts:** Explicación de las familias tipográficas. Importación y aplicación de fuentes externas mediante Google Fonts.
5. **Estilos de Texto Adicionales:** Propiedades para complementar la tipografía (tamaño, grosores, etc.).
6. **Code-along (Aplicación Visual):** Inyección de tipografías directamente en el `body`, `<header>` y `<footer>`.

<aside>

**IDEAS-NOTAS-TAREAS:** 

- Para los puntos Dinamica de Paleta y paginas de colores hexadecimal presentar algunas paginas que brinden colores.
- Explicar las fuentes de familia con Word(la opcion de Fuentes para texto) , de echo noto que las diversos estilos para texto que veremos se pueden explicar con Word
- Porque considere poner Box Model despues? porque considere que las propiedades anteriores no estan tan ligados como padding,margin, alineacion,etc
Aunque la alineacion lo voy a dejar despues porque primero necesitar explicar el contenido de la caja
</aside>

### **Momento 5: Controlando el Espacio (Box Model Aplicado)**

1. **El Box Model (Diagnóstico visual):** Concepto de que todo elemento en HTML es una caja rectangular. Aplicación del "borde rojo" global para visualizar las cajas ocultas.
2. **Dimensiones de la Caja:** Explicando `padding` , `margin`  y `border`
    1. Tambien los lados
3. **Code-along (Respiración del Diseño):** Aplicación de `padding` a las secciones y encabezados para darles aire.
4. **Centrado de Contenedores:** Uso de anchos máximos y márgenes automáticos para centrar el contenido de la página en pantallas grandes.

<aside>

**IDEAS-NOTAS-TAREAS:** 

- generar una imagen para el punto 1
- generar una imagen sintaxis para padding, margin y border
</aside>

### **Momento 6: Detalles Finales y Cierre**

1. **Estilos para Imágenes:** Propiedades para controlar el tamaño y la forma (bordes redondeados para hacer fotos circulares).
2. **Estilos para Enlaces (Interactividad):** Quitar subrayados por defecto y uso del estado `:hover` para cambiar colores al pasar el mouse.
3. **Reflexión Final:** Repaso de los logros visuales y la importancia de la coherencia en el diseño.
4. **Preview Clase 04 y Entrega:** Anticipación del tema de Flexbox y recordatorio de los screenshots requeridos para la tarea.

## MANEJO DEL TIEMPO

### Distribución de Tiempos (El Reloj de la Clase)

## FLUJO DE PRESENTACION

<aside>

## Tu Lista de Propiedades CSS (Clase 03)

- **Color (Momento 4):**
    - `background-color` (Color de fondo)
    - `color` (Color del texto)
- **Tipografía y Texto (Momento 4):**
    - `font-family` (Tipo de letra)
    - `font-size` (Tamaño de la letra)
    - `font-weight` (Grosor / Negrita)
- **Box Model y Espaciado (Momento 5):**
    - `padding` (Espacio interno)
    - `margin` (Espacio externo)
    - `border` (Línea límite)
    - `max-width` (Ancho máximo del contenedor)
- **Detalles y Modificadores (Momento 6):**
    - `border-radius` (Redondear esquinas)
    - `text-decoration` (Subrayados en enlaces)
    - `:hover` (Pseudo-clase de interactividad)
</aside>

### MOMENTO 1: El Calentamiento (Repaso y Naturaleza HTML)

**1. Repaso Flash: Lo que construimos hasta hoy en HTML**

**EN PANTALLA:** PANTALLA DIVIDIDA (A la izquierda tu VS Code con el código final del `Lab02`, a la derecha el Navegador mostrando la página sin estilos).

- Aqui harás un repaso de HTML usando el codigo que construiste hasta ahora en el lab02, indica cada parte

> **Guion/Pautas:** * "¡Hola a todos! Bienvenidos a la Clase 03 …
> 
> - *(Señalas el código en VS Code)*: "En estas dos clases pasamos de no saber nada, a tener una estructura profesional. Tenemos nuestro cascarón principal con `<html>`, `<head>` y `<body>`. Aprendimos a poner títulos de diferentes pesos (`<h1>` al `<h3>`), agrupamos nuestros hobbies con listas (`<ul>` y `<li>`) y pusimos imágenes."
> - *(Haces scroll a las etiquetas semánticas)*: "Pero lo más importante: dejamos de usar cajas vacías y le dimos significado a nuestra web usando HTML Semántico: `<header>`, `<main>`, `<section>` y `<footer>`. Además, le pusimos un 'DNI' (`id`) a cada sección para conectar nuestra navegación (`<nav>`). Hoy, todo este orden nos va a salvar la vida al momento de diseñar."

**2. La Naturaleza de HTML (Bloque vs. Línea)**

**EN PANTALLA:** PRESENTACIÓN CANVA (Imagen generada mostrando Bloque vs. Línea).

- Aqui hablaras del concepto HTML en Linea y en Bloque usando la imagen pero luego explicando como se ven en nuestro lab02

> **Guion/Pautas:** * "Antes de ir a nuestro juego de calentamiento, quiero hacerles una pregunta de observadores: **¿Alguno se ha dado cuenta de que, a pesar de que escriban un texto pequeñito en un `<h1>`, el elemento que sigue siempre se va para abajo y no se pone a su lado?** *(Dejas que asientan o respondan en el chat)*."
> 
> 
> > Dentro de la pagina web, **todos los elementos HTML se organizan y comportan visualmente de una forma (en bloques o en linea)**
> Basándonos en **como se organizan visualmente dentro de una pagina web** , los elementos HTML se clasifican en 2 categorías principales
> > 
> > - **Elementos en linea**
> > - **Elementos en bloque**
> > 
> > Esta clasificación se refiere a **como se comportan las etiquetas visualmente(alineacion,espacio y relacion con otros elementos)**
> > 
> - **Elementos en Bloque (Egoístas):** "Miren el lado izquierdo de la imagen. Etiquetas como `<h1>`, `<p>`, o `<section>`. No importa si tienen una sola palabra, exigen ocupar el 100% del ancho de la pantalla y empujan a los demás a la línea de abajo"
> - **Elementos en Línea (Amigables):** "Miren el lado derecho. Etiquetas como `<a>` (enlaces) o `<img>`. Solo ocupan el espacio exacto de su contenido.  y no generan un salto de linea."
- **El Gancho:** "Entender esto es importante en diseño"

**3. El Quiz Interactivo (Rompehielo - Kahoot)**

**EN PANTALLA:** NAVEGADOR (Pantalla de Kahoot esperando jugadores con el PIN gigante y la música de fondo).

> **Guion/Pautas:** * "¡Abran sus celulares o una nueva pestaña! Entren a `kahoot.it` y pongan el PIN que está en pantalla. Vamos a ver quién prestó atención en las clases pasadas. Son 5 preguntas rápidas."
> 

### **MOMENTO 2: Bienvenida, Setup y el Puente de Comunicación**

**1. Transición a CSS y el Efecto "Wow" (Magia en vivo)**

**EN PANTALLA:** NAVEGADOR WEB (Abre `apple.com` o `stripe.com`).

- Aqui quiero que hables sobre
    - Que es CSS?
    - Vamos a pasar a ver con ojos de diseñador de modas o artista, quienes de aquí tiene
    - Terminos UX/UI solo como introducción
    - Hacerles recordar que la practica los mejorara en diseñae y construir paginas esteticamente mas bellas

> **Guion/Pautas:** * "¡Acabamos de calentar motores! Hasta ahora hemos construido el esqueleto de nuestra página. Funciona, pero... seamos honestos, se ve aburrida. Hoy vamos a ponernos los lentes de diseñadores."
> 
> - **UX (User Experience):** Es **cómo se siente** el usuario al usar el producto (si es fácil, útil, lógico y resuelve su problema).
> - **UI (User Interface):** Es **cómo se ve** el producto (el diseño visual de los botones, colores, tipografías y espacios que el usuario toca o ve).
>     - Un título debe ser notablemente más grande y grueso (`font-weight: bold`) que el cuerpo de texto. Si todo tiene el mismo tamaño, el usuario no sabe qué leer primero.
> - *(Muestras la página web WOOO)*: "Miren esta página. Se ve increíble, ¿verdad? Los colores, los espacios, cómo llama la atención.
>     - *(El truco de magia)*: "Pero quiero mostrarles un secreto. El esqueleto de esta página millonaria es igual al de ustedes." -> *Abres el inspector de elementos (F12), buscas la etiqueta `<head>` y la borras (ahí están los estilos).*
> - *(Al ver la página rota)*: "¡Pum! Sin CSS, la página de Apple es solo texto negro de los años 90. Hoy vamos a aprender esa magia."

**2. Sintaxis y Selectores CSS**

**EN PANTALLA:** PRESENTACIÓN CANVA (Imagen de sintaxis generada).

- Explica la estructura de una regla CSS , cada una de las partes
- Respecto a los selectores, usa excalidraw para dar la sintaxis

> **Guion/Pautas:** * "Escribir CSS es como darle órdenes directas a nuestra página. La sintaxis tiene dos partes clave:"
> 
> - "**El Selector:** Es a quién le hablamos. Hoy usaremos dos: Por *Etiqueta* (si pongo `h1`, le hablo a todos los h1 de la página) o por *ID* (si pongo `#peliculas`, le hablo solo a esa sección específica)."
> - "**La Declaración:** Es la orden que le damos. Se pone entre llaves `{ }` y está formada por la *Propiedad* (ej. `color`) y el *Valor* (ej. `blue`)."

**3. Formas de conectar CSS (El Puente)**

**EN PANTALLA:** PRESENTACIÓN CANVA o TEAMS (Tu cámara explicando el concepto).

> **Guion/Pautas:** * "Para que nuestro HTML (el esqueleto) se vista con CSS (la ropa), necesitamos conectarlos. Existen 3 formas de hacerlo:"
> 
> - "1. **En línea:** Poner el estilo directo en la etiqueta HTML (ej. `<h1 style='color:red'>`). Es como tatuarle la ropa al esqueleto. *Mala práctica, evítenlo.*"
> - "2. **Interna:** Poner una etiqueta `<style>` en el `<head>`. Es mejor, pero ensucia nuestro documento."
> - "3. **Externa:** Crear un archivo `.css` totalmente separado y conectarlo como si fuera un puente. Esta es la forma profesional, mantiene todo ordenado. Hoy usaremos esta."

**4. Code-along (Setup y Prueba de Conexión)**

**EN PANTALLA:** PANTALLA DIVIDIDA (VS Code + Navegador).

- Aqui vamos a revisar parte del laboratorio

> **Guion/Pautas:** * "¡Manos a la obra! Vamos a crear nuestro puente."
> 
> - **Paso 1:** "En la misma carpeta de su proyecto, creen un archivo nuevo llamado `styles.css`."
> - **Paso 2:** "Vayan a su `index.html`. Dentro de la etiqueta `<head>`, escriban la etiqueta `<link>`. Asegúrense de que en `href` diga el nombre exacto de su archivo: `styles.css`."
> - **Paso 3 (La Prueba):** "Vayan a `styles.css` y escriban una regla de prueba: `body { background-color: lightblue; }`. Guarden todo. Si su página se vuelve celeste, ¡nuestro puente funciona! *(Avisen que borren esta prueba después de confirmar)*."

### MOMENTO 3: Revelando la Matrix (Normalización y Cascada)

**1. Estilos fantasma y la herramienta Computed**

**EN PANTALLA:** PANTALLA DIVIDIDA (Tu página web en el navegador con el Inspector de Elementos abierto en la pestaña "Computed").

- Explicar que el navegadores ya pone estilos por defecto usando el lab02
- Explicar porque lo hace

> **Guion/Pautas:** * "**¿Se han dado cuenta de que nuestra página tiene espacios en blanco a los lados y entre los textos, aunque nosotros no escribimos ninguna línea de código para eso?** 
Abran su navegador, hagan clic derecho, seleccionen 'Inspeccionar' y vayan a la pestaña 'Computed' (o 'Calculado')."
> 
> - *(Señalas el gráfico de cajitas de colores en DevTools)*: "Miren esto. Si paso el mouse por el `<body>` o un `<h1>`, el navegador me pinta márgenes naranjas que yo jamás programé. Son **Estilos Fantasma**."
> - *(Respondiendo a tu nota)*: "¿Pero por qué mi navegador le puso estilos por defecto a una página web? ¿Cuál es su razón? La respuesta es histórica. En los años 90, la web no era para diseñar cosas bonitas, era para leer documentos científicos universitarios. El navegador les ponía esos márgenes para que el texto puro no se pegara a los bordes del monitor y fuera legible. Pero hoy en día, esos márgenes automáticos nos arruinan el diseño."

**2. La Normalización (El lienzo en blanco)**

**EN PANTALLA:** VS CODE (Mostrando el archivo `styles.css` vacío).

- Explicar la normalizacion y porque es mejor empezar en blanco

> **Guion/Pautas:** * "Aquí les hago una pregunta: **¿Qué prefieren ustedes, dibujar sobre una hoja que ya tiene rayones y dibujos de otra persona, o empezar sobre una hoja totalmente en blanco?** *(Dejas que respondan 'en blanco')*."
> 
> - "Exacto. Para tener esa hoja en blanco, necesitamos 'limpiar' la mesa y borrar esos estilos del navegador. A esto se le llama **Normalización**."
> - *(Code-along rápido)*: "Vamos a usar un selector mágico. El asterisco  significa 'Selecciona absolutamente TODAS las etiquetas de mi página'. Escriban esto en la línea 1 de su `styles.css`:"
- **El efecto visual:** "Guarden y miren su página. ¡Bum! Todo el contenido se acaba de estrellar contra los bordes. Se ve aplastado, pero es perfecto. Ahora nosotros tenemos el control absoluto. Les paso este bloque de código por el chat para que lo tengan a la mano."

**3. ¿Por qué en Cascada? (La regla del último en hablar)**

**EN PANTALLA:** PRESENTACIÓN CANVA (Imagen generada de la Cascada CSS).

> **Guion/Pautas:** * "CSS significa *Cascading Style Sheets* (Hojas de Estilo en Cascada). ¿Pero qué rayos significa 'en Cascada'?"
> 
> - "Significa que el navegador lee nuestro código de arriba hacia abajo, como el agua cayendo por una escalera. Si yo en la línea 10 le digo a mi `<h1>` que sea rojo, pero en la línea 50 le digo al mismo `<h1>` que sea azul... ¿de qué color creen que se pinta? *(Esperas respuesta)*."
> - "¡Azul! En la cascada, **la última regla siempre gana y sobrescribe a las anteriores**. Por eso pusimos nuestro reseteo universal  en la línea 1, bien arriba, para que nuestros colores y diseños que pongamos más abajo tengan la última palabra y sobrescriban esa limpieza."

### MOMENTO 4: Identidad Visual (Colores, Tipografía y Texto)

**1. Estilos de Color (Pintando la web)**

**EN PANTALLA:** EN EXCALIDRAW o tu VS Code.

- Dibuja en excalidraw un sencillo diagrama sobre las dos propiedades

> **Guion/Pautas:**
> 
> - "Ya tenemos nuestro lienzo limpio. Ahora vamos a pintarlo. En CSS usamos dos propiedades clave para el color: `background-color` (para pintar el fondo de la caja) y `color` (para pintar el texto que está adentro)."
>     - Color de Fondo: Pinta el interior de la caja
>     - Color de texto: Pinta el texto dentro de la caja
> - "Los navegadores entienden nombres en inglés como `red`, `blue` o `tomato`, pero los profesionales no usamos eso porque es muy limitado. Usamos **Códigos Hexadecimales**. Son códigos de 6 letras y números que empiezan con un `#` (ej. `#2D3436`). Representan millones de colores exactos."

**2. Dinámica de Paleta (Los colores de su marca)**

**EN PANTALLA:** NAVEGADOR WEB (Páginas: *Coolors.co*, *Color Hunt*).

- Aqui detallas las paginas de colores que encontraste

> **Guion/Pautas:**
> 
> - "No quiero que pongan colores al azar que lastimen la vista."
> - *(Haces la demostración)*: "Esta página es como una máquina tragamonedas de diseño. Presionen la barra espaciadora para generar paletas que combinan perfectamente. Cuando vean un color que les guste para su fondo o su menú, le dan al candado para bloquearlo y siguen buscando."
> - "Tienen 5 minutos. Encuentren 3 colores: Uno oscuro, uno claro, y uno llamativo. Cópienlos y péguenlos en la parte de arriba de su `styles.css` como un comentario para no perderlos."

**3. Code-along (Aplicación de Color)**

**EN PANTALLA:** PANTALLA DIVIDIDA (VS Code + Navegador Live Server).

> **Guion/Pautas:**
> 
> - "¡Hora de inyectar sus colores! Vamos a apuntar a las etiquetas más grandes de su HTML."
> - **REGLA UI : Si el fondo es oscuro, el texto debe ser muy claro (y viceversa), para que la lectura sea natural y no canse la vista.**
> - "Al `body` pónganle su color de fondo más suave: `body { background-color: #f5f6fa; }`."
> - "A su cabecera y a su pie de página pónganle su color más fuerte: `header, footer { background-color: #2d3436; color: white; }`."
> - *Resultado visible:* La página ahora tiene bloques de color sólido arriba, abajo y en el fondo.

**4. Tipografía y Google Fonts (La analogía de MS Word)**

**EN PANTALLA:** MICROSOFT WORD abierto -> Luego pasas a Google Fonts.

> **Guion/Pautas:**
> 
> - *(Abres Word y escribes un texto)*: "Chicos, cambiar estilos de texto en CSS es exactamente lo mismo que usar Microsoft Word. ¿Ven esta barrita de arriba en Word? Cuando eligen 'Arial' o 'Times New Roman', en CSS eso se llama `font-family`."
> - "El problema es que si yo uso una fuente muy rara que solo está instalada en mi computadora, cuando otra persona abra mi página no la va a ver. Para evitar eso, usamos **Google Fonts**."
>     - No todos los usuarios tienen las mismas fuentes instaladas en su computadora. Si tú usas una fuente rara que solo tú tienes, el resto del mundo verá una letra genérica y fea. Google Fonts asegura que **todos vean exactamente lo mismo**.
> - *(Abres fonts.google.com)*: "Es una biblioteca mundial gratuita. Busquemos una fuente moderna como 'Poppins' o 'Montserrat'. Copiamos la etiqueta `<link>` que nos da Google y la pegamos en nuestro HTML, justo **arriba** de nuestro propio `<link>` de CSS."

**5. Estilos de Texto Adicionales (Siguiendo con Word)**

**EN PANTALLA:** Sigues alternando entre la barra de Word y tu VS Code.

> **Guion/Pautas:**
> 
> - "Ya tenemos la familia de la letra. ¿Qué más hacemos en Word? Cambiar el tamaño. En CSS eso es el número de la fuente en Word, y se llama `font-size`."
> - *(El Paréntesis del Pixel)*: "Pero ojo aquí. Si en Word ponemos '20', ¿20 qué? En CSS tenemos que ser específicos con la unidad de medida. Hoy vamos a usar el rey de las medidas digitales: **El Pixel (`px`)**."
> - "¿Qué es un pixel? Imaginen que su pantalla es un mosaico gigante. Un pixel es un cuadradito diminuto de luz, un solo puntito en su monitor.
>     - *¿Han visto que en Minecraft todo está hecho de cubos y si te acercas mucho a una montaña solo ves cuadrados? Bueno, tu pantalla es exactamente igual, solo que los cubos son microscópicos*
>     - "No podemos decir que 1px es igual a 1cm porque **el pixel no tiene un tamaño físico fijo**, depende de qué tan apretados estén los 'focos' de tu pantalla".
>     - "Los dispositivos mas pequeños suelen tener mas pixeles que los grandes.
>     Un móvil necesita más píxeles porque lo vemos **muy cerca de la cara**. Si tuviera pocos píxeles (como un monitor de lejos), veríamos "cuadraditos" todo el tiempo"
>     **grande no significa tener más píxeles**
>     - Si yo le digo a mi CSS `font-size: 20px;`, le estoy diciendo que quiero que mi letra mida exactamente 20 pinte 20 de esos cuadraditos"
> - "¿Y si queremos poner negritas (la letra 'N' en Word)? Usamos `font-weight`. Podemos ponerle `bold` o números como `700`."
> `font-weight` es la que define el **grosor** (lo "gordita" o "flaca") que se verá la letra.
>     
>     **A. Por Palabras (Las más comunes)**
>     
>     - `normal`: El grosor estándar (equivale a `400`).
>     - `bold`: Negrita clásica (equivale a `700`).
>     - `lighter`: Más delgada que la actual.
>     
>     **B. Por Números (Escala de 100 en 100)**
>     
>     Es una escala del **100 al 900**. Entre más alto el número, más pesada es la letra:
>     
>     - **100 - 300:** Letra tipo "Thin" o "Light" (muy fina).
>     - **400:** Es el estándar (`normal`).
>     - **700:** Es la negrita estándar (`bold`).
> - `text-align` es la propiedad que le dice al navegador **hacia qué lado de su "caja"** debe empujar el contenido.
> **EXPLICA CON UN DIAGRAMA EXCALIDRAW**
>     
>     
>     | **`left`** | Texto pegado a la izquierda (por defecto). |
>     | --- | --- |
>     | **`right`** | Texto pegado a la derecha. |
>     | **`center`** | Texto en el puro medio de la caja. |
>     | **`justify`** | El texto se estira para tocar ambos bordes. |
>     - Solo funciona en elementos de **bloque** (como `<div>`, `<h1>`, `<p>`). ¿Por qué? Porque un elemento de línea (`inline`) solo mide lo que mide su texto, ¡no tiene espacio extra hacia donde moverse!

*(Recuerda tu nota)*: "Ojo, no les voy a enseñar a alinear el texto hoy (`text-align`), porque primero necesitamos entender qué tamaño tiene la caja donde vive ese texto. Eso lo veremos en unos minutos con el Box Model."

**6. Code-along (Aplicación Tipográfica)**

**EN PANTALLA:** PANTALLA DIVIDIDA (VS Code + Navegador).

> **Guion/Pautas:**
> 
> - "Vayan a su `styles.css`. Dentro de la regla del `body` que hicimos hace un rato, agreguen su nueva fuente: `font-family: 'Poppins', sans-serif;`."
> - "Miren su navegador. Inmediatamente toda la página, desde los títulos hasta los párrafos, cambia su voz y se ve mucho más elegante."

### **MOMENTO 5: Controlando el Espacio (Box Model Aplicado)**

**1. El Box Model (Diagnóstico visual de cajas)**

**EN PANTALLA:** PRESENTACIÓN CANVA (Imagen generada del diagnóstico visual) -> Luego VS Code.

- YA HABLAMOS DE QUE HTML SE REPRESENTA COMO UNA CAJA PERO AHORA VEREMOS CON MAS DETALLE ESA CAJA

> **Guion/Pautas:**
> 
> - **"Chicos, el secreto más grande del diseño web es este: absolutamente todo en HTML es una caja rectangular. Miren este diagrama en pantalla; así es como el navegador ve sus páginas:**
>     - **Content (El centro blanco):** Es su contenido real. Aquí es donde viven su texto, sus títulos o sus imágenes.
>     - **Padding (La zona verde claro):** Es el espacio **INTERNO**. Imaginen que es el relleno del colchón. Le da "aire" o respiro a su texto para que no se asfixie chocando contra la pared de la caja.
>     - **Border (La zona azul oscura):** Es la pared física de la caja. El límite exacto de su elemento.
>     - **Margin (La zona exterior turquesa):** Es el espacio **EXTERNO**. Es su "burbuja de espacio personal", la distancia que empuja a las otras cajas vecinas (como otros botones o párrafos) para que no se peguen a la nuestra.
> 
> **Regla de oro para no olvidarlo:** *El Padding da aire por dentro, el Margin empuja a los vecinos por fuera."*
> 
> - *(El truco del borde rojo)*: "Para demostrarlo, vamos a hacer un diagnóstico de rayos X. Vayan a CSS y coloquen agreguen temporalmente esta línea: `border: 1px solid red;` Guarden y miren su navegador."
> - "¡Sorpresa! Su página ahora parece un plano arquitectónico lleno de rectángulos rojos. Ahora podemos ver las cajas invisibles que contienen nuestro texto e imágenes."

**2. Dimensiones de la Caja (Padding, Border y Margin)**

**EN PANTALLA:** PRESENTACIÓN CANVA (Imagen generada de sintaxis del Box Model).

> **Guion/Pautas:**
> 
> - "Cada una de estas cajas tiene 3 capas de espacio que nosotros podemos controlar.
> - Estas tres propiedades tienen 4 lados (Top, Right, Bottom, Left).
> 
> **Border (El combo 3 en 1)**
> 
>  Para que se vea en pantalla, siempre necesita tres ingredientes obligatorios en la misma línea: grosor, estilo y color.
> 
> **border: grosor estilo color**
> 
> - **Sintaxis universal (Atajo):** `border: 2px solid black;`
> - **Los 3 estilos clave:** Menciónales que en lugar de `solid` (línea continua), también pueden jugar usando `dashed` (línea de guiones) o `dotted` (línea de puntitos).
> - Hay border-top , border-bottom , border-right , border-left
> 
> **Padding y Margin** 
> 
> Explícales que ambas propiedades tienen 4 lados (arriba, derecha, abajo, izquierda) y que hay varias formas de darles medidas.
> 
> - **Lado específico (El camino largo):** Se usa cuando solo quieres afectar una dirección específica.
> `margin-top: 50px;` (Solo empuja hacia arriba).
> `padding-left: 20px;` (Solo da aire por la izquierda).
> - **Atajo de 1 valor (Todos iguales):** Aplica la misma medida a los 4 lados al mismo tiempo.
> `padding: 20px;`
> - **Atajo de 2 valores (El favorito de la industria):** El primer número controla Arriba/Abajo, el segundo número controla Derecha/Izquierda. Es el que más usarán para botones y secciones.
> `margin: 40px 20px;`
> - **Atajo de 4 valores (Las manecillas del reloj):** Empieza siempre por arriba y gira a la derecha (Top, Right, Bottom, Left).
> `padding: 10px 20px 15px 5px;`

**3. Code-along (Respiración del Diseño)**

**EN PANTALLA:** PANTALLA DIVIDIDA (VS Code + Navegador Live Server).

> **Guion/Pautas:**
> 
> - "¡Vamos a darle aire a nuestra página! Primero, borren el `border: 1px solid red;` que pusimos de prueba, ya no lo necesitamos."
> - "Vayan a la regla de su `<header>` y `<footer>` y agreguen un espacio interno: `padding: 40px 20px;`."
> - "Ahora vayan a sus secciones (`<section>`) y hagan lo mismo: `padding: 40px 20px;`. Guarden y miren."
> - *(Efecto Wow)*: "Miren cómo respira el texto. Ya no choca con los bordes de los colores. Pasó de verse amateur a verse profesional con una sola línea de código."

**4. Centrado de Contenedores (El truco mágico)**

**EN PANTALLA:** PANTALLA DIVIDIDA (Enfocándose en maximizar la ventana del navegador).

> **Guion/Pautas:**
> 
> - "Nuestra página se ve bien en una pantalla pequeña, pero si maximizan su navegador, las líneas de texto se vuelven larguísimas y difíciles de leer. El ojo humano se cansa de leer de extremo a extremo."
> - "Vamos a usar el truco más clásico de CSS para centrar contenedores."
> - "En sus `<section>`, agreguen un límite de ancho: `max-width: 800px;`. Esto le dice a la caja que nunca crezca más de 800 píxeles."
> - "Y para que esa caja se quede en el mismísimo centro de la pantalla, le damos márgenes automáticos a los lados: `margin: 0 auto;`."
> - "Guarden y estiren su navegador. ¡Magia! El contenido está perfectamente centrado y agrupado."

### MOMENTO 6: Detalles Finales y Cierre

**1. Estilos para Imágenes (De cuadradas a circulares)**

**EN PANTALLA:** PANTALLA DIVIDIDA (VS Code + Navegador Live Server).

> **Guion/Pautas:**
> 
> - "Ya controlamos las cajas de texto y los fondos, pero ¿qué pasa con nuestra foto de perfil? Probablemente esté gigante o tenga esquinas muy duras."
> - "Para controlar que no se desborde, le ponemos un límite con `max-width` (ej. `max-width: 200px;`)."
> - **`width` y `height`**: Definen el ancho y el alto de la imagen. Se recomienda usar `auto` en una de ellas para mantener la relación de aspecto.
> - "Y aquí viene el truco favorito para modernizar cualquier diseño: `border-radius`. **Esta propiedad redondea las esquinas de nuestras cajas."**
> - "Si le ponemos `border-radius: 10px;`, las esquinas se suavizan sutilmente. Pero si queremos una foto perfectamente circular (como en Instagram o sus perfiles de WhatsApp), usamos magia matemática y le ponemos `border-radius: 50%;`."

**2. Estilos para Enlaces y Pseudo-estados (La Interactividad)**

**EN PANTALLA:** EXCALIDRAW (Dibuja un botón simple con un cursor apuntándolo).

> **Guion/Pautas:**
> 
> - "Miren los enlaces de nuestro menú. Funcionan, pero el navegador los pone azules y subrayados por defecto. Parecen de 1995. Vamos a quitarles ese subrayado con la propiedad `text-decoration: none;`."
> - **`font-weight`**: Para hacer el enlace más grueso (`bold`) y que destaque entre el texto normal
> - *(La Magia de los Estados)*: "Como pedagogos y diseñadores, tenemos que enseñarle al usuario que ese texto es cliqueable. El CSS no es estático; puede reaccionar a lo que haga el usuario usando **Pseudo-estados**:"
> - `:link`: El estado normal del enlace.
> - `:visited`: "Cambia el estilo si el usuario ya hizo clic en ese link anteriormente (importante para la usabilidad, así el usuario sabe qué páginas ya visitó)."
> - `:hover`: "¡La estrella del show! Cambia el estilo cuando el ratón pasa por encima (ej. cambiar el color o poner un subrayado sutil). Es como si el botón 'despertara'."
> - `:active`: "El estilo justo en el micromomento en que hacen el clic (da el efecto de que el botón se está hundiendo)."

**3. Code-along (El Efecto Wow Final)**

**EN PANTALLA:** PANTALLA DIVIDIDA (VS Code + Navegador Live Server).

> **Guion/Pautas:**
> 
> - "Vamos a aplicar esta interactividad. Vayan a la regla de su imagen (`img`) y pónganle `max-width: 200px;` y `border-radius: 50%;`. ¡Miren cómo se hace circular!"
> - "Ahora al menú. Apunten a los enlaces dentro del nav: `nav a { text-decoration: none; color: white; }`."
> - "Y agreguen una nueva regla debajo para la magia interactiva: `nav a:hover { color: orange; }`. Guarden, vayan a su navegador y pasen el mouse por su menú. ¿Sienten cómo la página ahora está viva?"

**4. Reflexión Final**

**EN PANTALLA:** NAVEGADOR maximizado (Mostrando la página finalizada y haciendo scroll).

> **Guion/Pautas:**
> 
> - "Hagan un poco de scroll en su página. Mírenla bien y compárenla mentalmente con el esqueleto en blanco y negro que teníamos al inicio."
> - "Esto es el poder de la coherencia en el diseño. Usamos una paleta de colores, una tipografía legible y, sobre todo, le dimos *respiro* al contenido controlando el Box Model. Acaban de hacer exactamente el mismo proceso que hace un diseñador UI profesional."

**5. Preview Clase 04 y Entrega**

**EN PANTALLA:** Diapositiva de cierre o Presentación Canva.

> **Guion/Pautas:**
> 
> - "Para la entrega de su laboratorio de hoy, necesito que le tomen un screenshot a su página terminada. Tiene que verse la aplicación de su paleta de colores, y muy importante: su nombre debe estar visible en el `<header>` para validar que es su trabajo."
> - "¿Qué sigue? Hoy aprendimos a maquillar las cajas y darles espacio, pero todavía están obligadas a estar una debajo de otra. En la próxima clase conoceremos a un titán del layout moderno: **Flexbox**. Les enseñaré a poner cajas una al lado de la otra para crear un menú horizontal real y tarjetas de proyectos increíbles. ¡Nos vemos la próxima clase!"