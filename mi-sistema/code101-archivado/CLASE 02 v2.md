# CLASE 02 v2 — HTML Semántico y Navegación Interna
## Flujo de Presentación (CAPA 2 + CAPA 3)

> **Proyecto del Módulo:** `mi-perfil` — estado actual: boilerplate + `<h1>` con nombre. Faltan los elementos visuales del Lab 01 (párrafo, imagen, listas). Al final de esta clase: Lab 01 cerrado + estructura semántica + navegación interna funcionando.
> **Meta de la clase:** El alumno tiene su Lab 01 entregado, su página reorganizada con etiquetas semánticas y un menú de navegación que salta entre secciones.

> **Contexto de arranque:** La clase anterior terminó con el boilerplate explicado y el `<h1>` con el nombre del alumno. Las etiquetas `<p>`, `<img>` y `<ul>` no se explicaron. Esa es la deuda técnica que cierra este primer momento — con metodología concepto → laboratorio en cada sub-momento.

---

## MOMENTO 1 — Cierre del Lab 01: Las Etiquetas que Quedaron
**Tiempo:** 25 min



### 1.1 `<p>` — El párrafo: concepto

**EN PANTALLA: EXCALIDRAW — Anatomía del `<p>` (ya preparada en el canvas).**

> **La acción guiada:**
> 1. Abrir el canvas de Excalidraw con la anatomía de la etiqueta `<p>`. Señalar apertura, contenido y cierre.
> 2. Mostrar VS Code con el `index.html` del alumno: el `<h1>` ya está. El `<p>` va debajo.

> **Tu explicación teórica precisa:**
> *"La clase pasada vimos los headings — etiquetas para títulos con jerarquía. Hoy empezamos con la etiqueta de texto corriente: `<p>`, que viene de 'paragraph'. Es la etiqueta que contiene cualquier texto que no sea un título.*
>
> *La diferencia entre un `<h1>` y un `<p>` no es el tamaño — eso es CSS. Es el significado. El `<h1>` le dice al navegador 'esto es el título principal'. El `<p>` le dice 'esto es texto de lectura'. Google, los lectores de pantalla y el navegador usan ese significado para interpretar tu página. Por eso no se deben usar headings para hacer texto grande — se usan para indicar jerarquía real.*
>
> *Sintaxis: apertura `<p>`, contenido, cierre `</p>`. El contenido va entre las dos etiquetas."*

> **Pregunta de calibración:**
> *"¿Cuántos `<p>` puede tener una página web?"*
>
> *(Respuesta esperada: los que sean necesarios. A diferencia del `<h1>`, no hay límite. Confirmar: "Exacto — puedes tener tantos párrafos como necesites. El único que tiene límite de uno por página es el `<h1>`.")*

---

### 1.2 Lab 01 — Punto 2.3: Tu Bio

**EN PANTALLA: PANTALLA DIVIDIDA — Canvas (Lab 01, punto 2.3) a la izquierda, VS Code a la derecha.**

> **La acción guiada:**
> 1. Abrir Canvas → Módulo 1 → Lab 01 → Parte 2, punto 2.3. Mostrar las instrucciones.
> 2. Codificar en vivo debajo de la imagen (que aún no está — va debajo del `<h1>` por ahora):

```html
<h1>Eric Verde</h1>
<p>
    Soy desarrollador web con 5 años de experiencia construyendo
    aplicaciones para empresas en Lima. Me apasiona la educación
    tecnológica y el código limpio.
</p>
```

> **Tu explicación teórica precisa:**
> *"El contenido del `<p>` tiene que ser real — no lorem. Es su perfil personal. Si no saben qué escribir, respondan esto en 2 o 3 oraciones: ¿a qué se dedican?, ¿de dónde son?, ¿qué los trajo aquí? Eso es una bio."*

> **Checkpoint 1.2:**
> *"Tienen 3 minutos para escribir su `<p>` con su bio real debajo del `<h1>`. Cuando lo tengan en el navegador — screenshot al WhatsApp."*
>
> *(Iniciar temporizador. El instructor no codifica durante estos 3 minutos — revisa el WhatsApp y confirma con 👍.)*

---

### 1.3 `<img>` — Imagen y accesibilidad: concepto completo

**EN PANTALLA: EXCALIDRAW — Anatomía de `<img>` con `src` y `alt` señalados (ya preparada).**

> **La acción guiada:**
> 1. Mostrar en el canvas la anatomía: `<img src="foto.jpg" alt="Descripción de la foto">`. Señalar que no tiene etiqueta de cierre y que los atributos `src` y `alt` son ambos obligatorios.

> **Tu explicación teórica precisa:**
> *"`<img>` es especial por dos razones. Primera: no tiene etiqueta de cierre — no existe `</img>`. Es lo que se llama una etiqueta vacía: no tiene contenido de texto adentro, obtiene su 'contenido' a través de sus atributos.*
>
> *El atributo `src` — source — le dice al navegador dónde está la imagen. Puede ser una URL de internet (`https://...`) o una ruta relativa a tu propia carpeta (`./foto.jpg`). Hoy usamos ruta relativa porque la imagen vive en la misma carpeta del proyecto.*
>
> *El atributo `alt` — y aquí viene algo importante."*

> **La pregunta de impacto:**
> *"¿Cómo navega una persona con ceguera total por internet?"*
>
> *(Dejar 15 segundos. Escuchar respuestas del chat.)*
>
> *"Con un lector de pantalla — software que lee el código HTML en voz alta. Cuando llega a un `<img>`, lee el contenido del atributo `alt`. Si el `alt` está vacío, dice: 'imagen'. Sin contexto, sin información. Para esa persona, la imagen no existe.*
>
> *Pero hay algo más: Google tampoco ve imágenes. El buscador es ciego para las fotos. Lo único que lee de una imagen es el `alt`. Si el `alt` describe bien la imagen, Google lo indexa. Si está vacío, esa imagen es invisible para los buscadores — lo que se llama mala práctica de SEO.*
>
> *El `alt` no es opcional aunque técnicamente HTML lo permita. Un desarrollador junior pone imágenes. Un desarrollador profesional escribe `alt` descriptivos porque sabe que construye para todos — y para Google."*

---

### 1.4 Lab 01 — Punto 2.2: Tu Foto

**EN PANTALLA: PANTALLA DIVIDIDA — Canvas (Lab 01, punto 2.2) a la izquierda, VS Code a la derecha.**

> **La acción guiada:**
> 1. Mostrar Canvas → Lab 01 → Parte 2, punto 2.2.
> 2. Demostrar en vivo: abrir carpeta `mi-perfil`, copiar una imagen personal (o avatar desde Unsplash), renombrarla `foto.jpg`.
> 3. En VS Code, agregar la etiqueta debajo del `<h1>` y encima del `<p>`:

```html
<h1>Eric Verde</h1>
<img src="foto.jpg" alt="Foto de perfil de Eric Verde, instructor de desarrollo web">
<p>
    Soy desarrollador web...
</p>
```

> **Tu explicación teórica precisa:**
> *"El nombre del archivo en `src` tiene que coincidir exactamente con el nombre real del archivo — incluyendo la extensión y las mayúsculas. `foto.jpg` y `Foto.JPG` son archivos diferentes para el navegador en algunos sistemas. Si la imagen no carga y ven el ícono roto, ese es el primer lugar donde revisar."*

> **Checkpoint 1.4:**
> *"Quiero ver la imagen cargando en el navegador. Screenshot al WhatsApp — quiero ver la foto en la página y la URL de `localhost` arriba."*

---

### 1.5 `<ul>`, `<ol>` y `<li>` — Listas: concepto

**EN PANTALLA: EXCALIDRAW — Imagen comparativa de lista desordenada vs ordenada (ya preparada).**

> **La acción guiada:**
> 1. Mostrar el canvas comparativo: izquierda `<ul>` con viñetas — hobbies, menú de navegación; derecha `<ol>` con números — pasos de una receta, ranking.
> 2. Antes de ir al código, lanzar la pregunta de participación.

> **Pregunta de participación:**
> *"Dos escenarios — díganme en el chat cuál usarían: Una lista de verificación de asistencia de alumnos, ¿ordenada o desordenada? ¿Y los pasos para armar un mueble de IKEA?"*
>
> *(Respuesta esperada: asistencia → desordenada, no importa el orden de los nombres; mueble → ordenada, el orden de los pasos es crítico. Confirmar y agregar: "Menú de navegación → desordenada. Top 5 películas favoritas → ordenada. La pregunta siempre es: ¿importa el orden de los elementos?")*

> **Tu explicación teórica precisa:**
> *"`<ul>` es 'Unordered List' — lista sin orden, con viñetas. `<ol>` es 'Ordered List' — lista con números. Las dos usan la misma etiqueta para cada elemento: `<li>`, de 'List Item'. Un `<li>` suelto fuera de una lista no tiene sentido — siempre va dentro de su padre.*
>
> *Truco de productividad que van a usar siempre: en VS Code, en lugar de escribir `<ul>`, luego `<li>`, luego `<li>`, luego `<li>`, luego cerrar — escriban esto y presionen Enter:*"

```
ul>li*3
```

> *"Emmet — el sistema de abreviaciones de VS Code — genera los 5 elementos en 1 segundo. `ul>` significa 'un `<ul>` padre', `li*3` significa 'tres `<li>` hijos'. El símbolo `>` es 'hijo de', el `*3` es 'repetir 3 veces'."*

---

### 1.6 Lab 01 — Punto 2.4: Tu Lista de Hobbies

**EN PANTALLA: PANTALLA DIVIDIDA — Canvas (Lab 01, punto 2.4) a la izquierda, VS Code a la derecha.**

> **La acción guiada:**
> 1. Mostrar Canvas → Lab 01 → Parte 2, punto 2.4.
> 2. Codificar en vivo debajo del `<p>` de bio. Usar el truco Emmet en pantalla:

```html
<h2>Mis Hobbies</h2>
<ul>
    <li>Fotografía urbana</li>
    <li>Senderismo</li>
    <li>Tocar guitarra</li>
</ul>
```

> **Tu explicación teórica precisa:**
> *"El `<h2>` antes de la lista le da jerarquía y contexto: le dice al navegador 'esto es una sección de segundo nivel con título'. La lista va siempre después de su título, nunca suelta. En el lab dice 'al menos 3 hobbies' — pongan los reales, no inventados. Este es su perfil."*

> **Checkpoint 1.6:**
> *"Para cerrar este momento necesito ver en el navegador: foto cargando, párrafo de bio real, y lista con al menos 3 hobbies. Screenshot final al WhatsApp. El que lo tenga completo está listo para entregar el Lab 01."*

---

### 1.7 Entrega del Lab 01 — Instrucciones en Canvas

**EN PANTALLA: NAVEGADOR — Canvas del curso, sección de entrega del Lab 01.**

> **La acción guiada:**
> 1. Abrir Canvas. Navegar en vivo: Módulo 1 → Lab 01 → sección de Entrega.
> 2. Mostrar físicamente el botón de entrega. Leer el entregable en voz alta.

> **Tu explicación teórica precisa:**
> *"El entregable del Lab 01 es un screenshot. Necesita mostrar dos cosas: su nombre real visible en la página — en el `<h1>` — y la URL de `localhost` en la barra del navegador. Esas dos cosas confirman que es su trabajo y que están usando Live Server.*
>
> *Fecha límite: antes de la Clase 03. Los que ya tienen la página completa en este momento pueden entregar hoy mismo. Si falta algo, el laboratorio en Canvas tiene todas las instrucciones paso a paso para terminar en casa.*
>
> *Quien tenga una duda sobre la entrega, me escribe por WhatsApp — no esperen a la siguiente clase para preguntar."*

> **Pregunta de calibración — transición:**
> *"Levanten la mano o escriban 'sí' en el chat: ¿quién tiene en este momento foto, bio y lista en el navegador?"*
>
> *(Esta respuesta le dice al instructor cuántos están listos para avanzar al contenido nuevo. Los que no: tienen el lab para terminar en casa. No detener la clase.)*

> **Nota táctica de transición:**
> El Lab 01 está cerrado. A partir de aquí comienza el contenido propio de la Clase 02. Cambiar el tono — lo que viene no es deuda, es terreno nuevo. Usar el quiz de wireframe como bisagra entre los dos mundos.

---

## MOMENTO 2 — Wireframe: El Plano Antes del Código
**Tiempo:** 20 min

---

### 2.1 Quiz de transición — La pregunta del arquitecto

**EN PANTALLA: EXCALIDRAW — Slide de transición Clase 01 → Clase 02 (ya preparado).**

> **La acción guiada:**
> 1. Mostrar el slide de transición. Leerlo brevemente — no más de 30 segundos.
> 2. Lanzar la pregunta al chat antes de avanzar.

> **Tu explicación teórica precisa:**
> *"Cerramos la Clase 01 y entramos oficialmente a la Clase 02. Antes de tocar código nuevo, una pregunta de sentido común: si deciden construir la casa de sus sueños y ya tienen el terreno, ¿cuál es lo primero que hacen? ¿Van a comprar ladrillos y empiezan a apilarlos hoy mismo?"*

> **Pregunta de participación:**
> *(Esperar respuestas en el chat. Respuestas esperadas: "contratar un arquitecto", "hacer un plano", "diseñar primero".)*
>
> *"Exacto. En el desarrollo web, el código es el ladrillo. El plano es lo que viene primero. Los profesionales nunca empiezan a codificar sin tener la estructura pensada — porque el código construido sin plano se borra y se rehace. Y rehacer código cuesta tiempo."*

---

### 2.2 Concepto de Wireframe

**EN PANTALLA: EXCALIDRAW — Imagen de Wireframe → Mockup → Prototipo (ya preparada en el canvas).**

> **La acción guiada:**
> 1. Mostrar el canvas con los 3 niveles: Wireframe (boceto en blanco y negro) → Mockup (diseño con colores) → Prototipo (interactivo).
> 2. Señalar el wireframe — el único que nos importa hoy.

> **Tu explicación teórica precisa:**
> *"Ese plano en nuestro mundo se llama Wireframe. Es un boceto de baja fidelidad — sin colores, sin tipografías, sin fotos reales. Solo cajas y texto. ¿Por qué baja fidelidad? Porque en esta etapa no nos importa cómo se va a ver. Solo nos importa responder una pregunta: ¿qué va a ir en la página y en qué orden?*
>
> *Vean los 3 niveles en pantalla. El Wireframe es el primero — la estructura. El Mockup es el diseño visual con colores reales. El Prototipo es interactivo y navegable. En proyectos profesionales esto puede tomar semanas. Nosotros hoy hacemos el wireframe en 5 minutos porque nuestro proyecto es conocido: es su perfil personal.*
>
> *Hacer esto antes de codificar tiene un valor concreto: te ahorra borrrar código. Si la estructura está pensada en papel — o en pantalla — el código que escribes va directo al objetivo."*

> **Pregunta de calibración:**
> *"¿Qué diferencia a un wireframe de un mockup en una sola frase?"*
>
> *(Respuesta esperada: el wireframe es solo estructura/esqueleto; el mockup tiene diseño visual real. Confirmar: "Exacto — el wireframe no tiene colores ni fuentes reales. Solo posición y contenido.")*

---

### 2.3 Excalidraw — Herramienta preparada

**EN PANTALLA: EXCALIDRAW — Canvas del instructor abierto con el wireframe de ejemplo ya construido.**

> **La acción guiada:**
> 1. Abrir Excalidraw — ya sea la extensión en VS Code o excalidraw.com, la que el instructor use.
> 2. Mostrar el wireframe de ejemplo del perfil ya construido. Señalar cada bloque en 30 segundos.
> 3. No hacer demostración de herramientas básicas — el grupo ya la conoce de la Clase 01.

> **Tu explicación teórica precisa:**
> *"Ya conocen Excalidraw de la clase anterior — la usamos para los diagramas de cliente-servidor y el diagrama HTML/CSS/JS. En este momento la usamos para diseñar, no para explicar conceptos. Yo ya tengo mi wireframe de referencia en pantalla — se los muestro como guía visual para el reto.*
>
> *El wireframe que ven tiene la estructura básica de un perfil personal: un bloque arriba que es el encabezado con el nombre, bloques en el medio que son las secciones de contenido, y un bloque abajo que es el pie de página. Esa es la base. El reto es que lo hagan con sus datos — sus secciones, sus temas."*

---

### 2.4 Lab 02 — Parte 1: Reto de Wireframe (5 minutos)

**EN PANTALLA: PANTALLA DIVIDIDA — Excalidraw del instructor (wireframe de referencia) a la izquierda, Canvas Lab 02 Parte 1 a la derecha.**

> **La acción guiada:**
> 1. Abrir Canvas → Lab 02 → Parte 1. Leer las instrucciones en voz alta.
> 2. Mostrar el wireframe de referencia del instructor en pantalla.
> 3. Iniciar temporizador de 5 minutos. El instructor no habla durante el reto.

> **Tu explicación teórica precisa (antes de iniciar el temporizador):**
> *"Tienen 5 minutos para dibujar el wireframe de su perfil en Excalidraw — extensión o web, el que prefieran. Las reglas son tres:*
> *Uno: tiene que tener unHeader arriba con su nombre.*
> *Dos: tiene que tener al menos 3 secciones en el medio — cada sección con un nombre de tema. Si no saben qué temas, el Lab tiene sugerencias: películas, series, música, deportes, libros.*
> *Tres: tiene que tener un Footer abajo.*
>
> *No se preocupen por que se vea bonito — es un boceto. Los rectángulos no tienen que ser perfectos. Lo importante es que la estructura esté pensada. Cuando terminen, screenshot al WhatsApp. Tiempo: ahora."*

> **Checkpoint 2.4:**
> *(Durante los 5 minutos: revisar el WhatsApp. Al terminar, mostrar 1 o 2 wireframes de alumnos en pantalla — pedir permiso antes. Resaltar las decisiones de estructura, no la prolijidad visual.)*
>
> *"Bien. Antes de cerrar esto — ¿alguien puso más de 3 secciones? ¿Alguien ya pensó en el nombre de sus secciones? Porque esos nombres que pusieron en el wireframe son exactamente los que van a aparecer en el menú de navegación que construimos hoy. El wireframe que acaban de hacer es el plano de lo que vamos a codificar."*

---

## MOMENTO 3 — HTML Semántico: Dando Significado al Código
**Tiempo:** 30 min

---

### 3.1 La etiqueta `<div>` — La caja genérica

**EN PANTALLA: EXCALIDRAW — Imagen de `<div>` como caja de cartón vacía sin etiqueta (ya preparada).**

> **La acción guiada:**
> 1. Mostrar el canvas con la analogía visual: un `<div>` representado como caja de cartón sin rotular.
> 2. Codificar en vivo un `<div>` simple en el `index.html` para mostrar que es invisible — solo agrupa.

```html
<div>
    <h1>Eric Verde</h1>
    <p>Soy desarrollador web...</p>
</div>
```

> **Tu explicación teórica precisa:**
> *"Hasta ahora vimos etiquetas con propósito visual claro: `<h1>` pone un título grande, `<img>` muestra una foto, `<p>` pone texto. Pero en el desarrollo web necesitamos organizar y agrupar elementos — y para eso existe `<div>`.*
>
> *`<div>` significa 'division'. Es una caja de cartón invisible sin propósito propio. No dice qué hay adentro, no le da estilo por sí solo, no tiene significado para el navegador ni para Google. Su único trabajo es abrazar a otras etiquetas y mantenerlas juntas.*
>
> *Ahora miren el código — si refrescan el navegador no pasa nada visible. El `<div>` no deja rastro visual. Existe para que nosotros organicemos el código, no para que el usuario lo vea."*

> **Pregunta de calibración:**
> *"¿Si un `<div>` no cambia nada visualmente, para qué existe?"*
>
> *(Respuesta esperada: para agrupar y organizar elementos. Confirmar y anotar: "Exacto — es un contenedor. Lo vamos a ver con más sentido en el siguiente punto.")*

---

### 3.2 El problema del `<div>` — La analogía de la mudanza

**EN PANTALLA: EXCALIDRAW — Imagen comparativa: 50 cajas sin etiqueta vs cajas rotuladas "Cocina", "Baño", "Dormitorio" (ya preparada).**

> **La acción guiada:**
> 1. Mostrar la imagen comparativa en el canvas.
> 2. Lanzar la pregunta antes de explicar — dejar que respondan.

> **Pregunta de participación:**
> *"Escenario real: se están mudando a una casa nueva. Al llegar encuentran 50 cajas apiladas — todas idénticas, sin ninguna etiqueta. Para saber qué hay adentro tienen que abrirlas una por una. Frente a eso, ¿qué prefieren?"*
>
> *(Esperar respuestas del chat. Respuesta esperada: "cajas con etiqueta", "que digan qué hay adentro".)*

> **Tu explicación teórica precisa:**
> *"Exacto. Y aquí viene el problema real del desarrollo web: durante muchos años los desarrolladores amaron tanto el `<div>` que construyeron páginas enteras usando solo esa etiqueta. El resultado era código así:*"

```html
<div>
    <div>
        <div>Eric Verde</div>
        <div>
            <div>Inicio</div>
            <div>Sobre mí</div>
        </div>
    </div>
    <div>
        <div>Bienvenidos a mi perfil</div>
    </div>
</div>
```

> *"Esto se llama 'div soup' — sopa de divs. Si tú o un compañero abren ese código dos semanas después, no pueden saber qué es cada caja sin leer todo el contenido.*
>
> *Pero el problema más serio no es que sea difícil de leer para un humano. El problema es que Google tampoco lo entiende. El buscador lee el código para indexar su página. Si todo son `<div>`, Google no sabe qué es el encabezado, qué es el menú, qué es el contenido principal. Su página queda invisible en los buscadores.*
>
> *En 2014, HTML5 solucionó esto. Les trajo las cajas con etiqueta."*

---

### 3.3 HTML Semántico — Qué es y por qué existe

**EN PANTALLA: EXCALIDRAW — Imagen comparativa: `<div>` soup (izquierda) vs etiquetas semánticas claras (derecha), ya preparada.**

> **La acción guiada:**
> 1. Mostrar el canvas comparativo — izquierda ambiguo, derecha semántico.
> 2. Señalar la diferencia: los nombres de las etiquetas son auto-descriptivos.

> **Tu explicación teórica precisa:**
> *"HTML Semántico es escribir código donde la etiqueta le dice al mundo — navegadores, Google, lectores de pantalla — qué es ese contenido, no solo dónde está visualmente.*
>
> *Comparación directa:*
> *No semántico: `<div class='cabecera'>` — para el navegador, esto es una caja genérica con un nombre en el código. El nombre `cabecera` solo lo entienden los humanos que lean el código.*
> *Semántico: `<header>` — el navegador, Google y el lector de pantalla saben de inmediato que esto es el encabezado de la página. No necesitan leer el contenido para entenderlo.*
>
> *Son 5 las etiquetas semánticas que vamos a usar hoy. Y las vamos a poner una por una en el código."*

> **Pregunta de calibración:**
> *"¿En qué se diferencia `<div class='menu'>` de `<nav>`?"*
>
> *(Respuesta esperada: semánticamente nada, visualmente nada — pero `<nav>` le comunica significado al navegador y a Google de forma nativa, sin que nadie tenga que leer el class. Confirmar: "Exacto. El `<nav>` no necesita explicarse — su nombre lo dice todo.")*

---

### 3.4 Lab 02 — Parte 2: Las 5 Etiquetas Semánticas (Code-along progresivo)

**EN PANTALLA: PANTALLA DIVIDIDA — VS Code a la izquierda, Navegador con Live Server a la derecha.**

> **La acción guiada:**
> Abrir el `index.html` que el alumno tiene con el contenido del Lab 01 ya escrito. El instructor lo hace en su propia pantalla — los alumnos lo siguen en paralelo. Se trabaja etiqueta por etiqueta: primero el concepto de la etiqueta, luego el código, luego la siguiente.

---

**Etiqueta 1: `<header>` — El Encabezado**

> **Tu explicación teórica precisa:**
> *"`<header>` es el encabezado de la página. Como su nombre lo indica, va en la parte más alta de la estructura. Contiene lo que identifica al sitio de un vistazo: el nombre, el logo si hubiera, y el menú de navegación.*
>
> *Regla práctica: el `<h1>` con su nombre va dentro del `<header>`. Todo lo que representa la identidad principal de la página vive aquí."*

```html
<body>
    <header>
        <h1>Eric Verde</h1>
        <!-- El nav lo agregamos en el siguiente paso -->
    </header>

    <!-- El resto del contenido sigue aquí -->
    <img src="foto.jpg" alt="Foto de perfil de Eric Verde">
    <p>Soy desarrollador web...</p>
    <h2>Mis Hobbies</h2>
    <ul>
        <li>Fotografía urbana</li>
    </ul>
</body>
```

> *(Checkpoint rápido: "Refresquen el navegador. ¿Cambió algo visualmente? No — y eso es correcto. El `<header>` es invisible para el ojo, pero Google ya sabe dónde empieza la cabecera.")*

---

**Etiqueta 2: `<nav>` — La Navegación**

> **Tu explicación teórica precisa:**
> *"`<nav>` es exclusiva para agrupar enlaces de navegación. Va dentro del `<header>`, debajo del `<h1>`. Piénsenlo como el menú inicial de un videojuego — esa pantalla con opciones: 'Nueva partida', 'Continuar', 'Ajustes'. El `<nav>` es esa pantalla en la web.*
>
> *Por ahora lo creamos vacío — en el Momento 4 le ponemos los enlaces que van a saltar a cada sección."*

```html
<header>
    <h1>Eric Verde</h1>
    <nav>
        <!-- Los enlaces van aquí en el Momento 4 -->
    </nav>
</header>
```

---

**Etiqueta 3: `<main>` — El Contenido Principal**

> **Tu explicación teórica precisa:**
> *"`<main>` envuelve todo el contenido único y central de la página — lo que la hace diferente a cualquier otra. Regla de oro: solo puede haber un `<main>` por página. No dos. Si ponen dos, el navegador no sabe cuál es el contenido principal.*
>
> *Todo lo que es el perfil en sí — la foto, la bio, los hobbies, las secciones — va dentro del `<main>`. Va debajo del `<header>`, fuera de él."*

```html
<header>
    <h1>Eric Verde</h1>
    <nav></nav>
</header>

<main>
    <img src="foto.jpg" alt="Foto de perfil de Eric Verde">
    <p>Soy desarrollador web...</p>
    <h2>Mis Hobbies</h2>
    <ul>
        <li>Fotografía urbana</li>
    </ul>
</main>
```

---

**Etiqueta 4: `<section>` — Las Secciones Temáticas**

> **Tu explicación teórica precisa:**
> *"Dentro del `<main>` hay diferentes temas. La bio es un tema — habla sobre quién son. Los hobbies son otro tema — habla sobre qué les gusta. Para separar temas usamos `<section>`.*
>
> *Regla para saber si algo merece un `<section>`: si a ese bloque de contenido le puedes poner un subtítulo `<h2>`, entonces merece ser una sección. Eso ya lo están haciendo — el `<h2>Mis Hobbies</h2>` que pusieron en el Lab 01 ya era un indicador de que ahí había una sección.*
>
> *Vamos a crear dos secciones: una para la foto y la bio, otra para los hobbies."*

```html
<main>
    <section>
        <img src="foto.jpg" alt="Foto de perfil de Eric Verde">
        <p>Soy desarrollador web...</p>
    </section>

    <section>
        <h2>Mis Hobbies</h2>
        <ul>
            <li>Fotografía urbana</li>
            <li>Senderismo</li>
            <li>Tocar guitarra</li>
        </ul>
    </section>
</main>
```

> *(Checkpoint rápido: "Refresquen. ¿Cambió algo? No. El código está más organizado pero visualmente igual — lo que cambia es el significado que el navegador y Google leen por detrás.")*

---

**Etiqueta 5: `<footer>` — El Pie de Página**

> **Tu explicación teórica precisa:**
> *"`<footer>` cierra la página. Va fuera del `<main>`, debajo de él. Aquí va información de cierre: derechos de autor, año, créditos, o enlaces secundarios como redes sociales. Es la última caja — la que le dice al navegador 'aquí termina esta página'."*

```html
<main>
    <!-- secciones aquí -->
</main>

<footer>
    <p>Hecho por Eric Verde — 2026</p>
</footer>
```

---

### 3.5 El Checkpoint Invisible

**EN PANTALLA: NAVEGADOR — Live Server mostrando la página sin cambios visuales.**

> **Tu explicación teórica precisa:**
> *"Miren su navegador. La página se ve idéntica a hace 15 minutos. Sin colores nuevos, sin elementos nuevos. Y eso es exactamente lo que tenía que pasar.*
>
> *Lo que cambiaron no fue la apariencia — fue el significado. Pasaron de escribir código que solo un humano puede interpretar, a escribir código que el navegador, Google y los lectores de pantalla entienden de forma nativa. Esa diferencia no se ve con los ojos — se mide en posicionamiento en buscadores y en cuántas personas pueden usar su página.*
>
> *Tres razones por las que esto importa:*
> *Una — para ustedes: su código ahora se puede leer y mantener. Abren el `index.html` en tres semanas y saben de un vistazo qué es el `<header>`, qué es el `<main>`, qué es el `<footer>`.*
> *Dos — para Google: los buscadores premian el HTML semántico con mejor posicionamiento. Un `<main>` le grita a Google dónde está lo importante de su página.*
> *Tres — para los usuarios: hay más de mil millones de personas con alguna discapacidad visual. Los lectores de pantalla navegan por sus etiquetas semánticas para anunciar 'Encabezado', 'Navegación', 'Contenido principal'. Un `<div>` solo dice 'grupo' — un `<header>` dice exactamente dónde están."*

> **Pregunta de calibración — transición:**
> *"El `<nav>` que crearon está vacío. ¿Qué le falta para que sea un menú real?"*
>
> *(Respuesta esperada: enlaces, botones, algo en qué hacer clic. Confirmar: "Exacto — y el Momento 4 es exactamente eso: los enlaces que van a conectar el menú con las secciones que acaban de crear.")*

---

## MOMENTO 4 — Navegación Interna: El Teletransportador
**Tiempo:** 30 min

---

### 4.1 Concepto de navegación — qué significa moverse en la web

**EN PANTALLA: NAVEGADOR — Página real con navegación (Wikipedia o Apple.com).**

> **La acción guiada:**
> 1. Abrir una página real con menú de navegación. Hacer clic en un enlace del menú en vivo — mostrar cómo la página salta o navega.
> 2. Volver a VS Code. Conectar lo que acaban de ver con el `<nav>` vacío de su código.

> **Tu explicación teórica precisa:**
> *"La web se llama 'web' — telaraña — porque todo está conectado. Miren esta página: si hago clic aquí, me lleva a otra sección. Si hago clic acá, a otra página completamente distinta. Eso es navegación.*
>
> *Hay dos tipos de navegación que vamos a ver. La primera es navegación externa: ir de una página a otra — de su perfil a Google, por ejemplo. La segunda, y la que construimos hoy, es navegación interna: moverse entre secciones dentro de la misma página. El usuario hace clic en el menú y la página le lleva directo a esa sección sin cargar nada nuevo.*
>
> *Para lograr ambas, HTML usa una sola etiqueta: `<a>`. La etiqueta de enlace."*

---

### 4.2 La etiqueta `<a>` — El enlace

**EN PANTALLA: EXCALIDRAW — Anatomía de la etiqueta `<a>` con `href` señalado (ya preparada).**

> **La acción guiada:**
> 1. Mostrar el canvas con la anatomía: `<a href="URL">Texto visible</a>`.
> 2. Señalar las 3 partes: apertura con `href`, texto entre las etiquetas, cierre.
> 3. Codificar un enlace externo rápido en vivo para que vean el comportamiento.

> **Tu explicación teórica precisa:**
> *"La etiqueta `<a>` viene de 'Anchor' — ancla. Es la etiqueta de enlace de HTML. Tiene un atributo obligatorio: `href`, que significa 'Hypertext Reference' — la referencia a donde apunta el enlace.*
>
> *El texto que va entre la apertura y el cierre es lo que el usuario ve y puede hacer clic. El `href` es el destino — a dónde va cuando hace clic.*
>
> *Ejemplo con enlace externo:*"

```html
<a href="https://google.com">Ir a Google</a>
```

> *"Si pongo esto en el navegador, aparece el texto 'Ir a Google' subrayado y azul — así el navegador representa los enlaces por defecto. Y al hacer clic, el navegador va a google.com.*
>
> *Pero hoy no queremos ir a Google. Queremos viajar dentro de nuestra propia página — de la cabecera a la sección de hobbies, por ejemplo. Y para eso necesitamos algo más."*

> **Pregunta de calibración:**
> *"Si tengo tres secciones en mi página y quiero que el enlace del menú vaya a la segunda, ¿cómo sabe el navegador cuál de las tres es la segunda?"*
>
> *(Dejar que respondan. El objetivo es que lleguen solos al problema: las secciones no tienen nombre. Confirmar: "Exacto — el navegador no puede adivinar. Necesitamos darle un nombre único a cada sección. Eso es lo que hacemos ahora.")*

---

### 4.3 El atributo `id` — El DNI del elemento

**EN PANTALLA: EXCALIDRAW — Imagen comparativa: secciones sin id (confusión) vs secciones con id (identificación clara), ya preparada.**

> **La acción guiada:**
> 1. Mostrar el canvas con las dos columnas: izquierda "Confusión" (3 `<section>` idénticos), derecha "Identificación" (cada sección con su `id` único).
> 2. Hacer la analogía del DNI antes de ir al código.

> **Tu explicación teórica precisa:**
> *"El atributo `id` es el DNI de un elemento HTML. Así como en Perú cada persona tiene un número de DNI único — ningún peruano tiene el mismo — cada elemento con `id` tiene un nombre irrepetible en la página.*
>
> *Dos reglas irrompibles del `id`: primera, no puede repetirse — si dos elementos tienen el mismo `id`, el navegador entra en conflicto y el comportamiento es impredecible. Segunda, no puede tener espacios — si el nombre tiene más de una palabra, se unen con guion: `id=\"mis-hobbies\"`, no `id=\"mis hobbies\"`.*
>
> *El `id` no hace nada visual por sí solo. No cambia cómo se ve el elemento. Su único trabajo es ponerle un nombre que otros puedan referenciar — como el navegador cuando tiene que ir a una sección específica."*

```html
<!-- Sin id: el navegador no puede distinguirlas -->
<section>...</section>
<section>...</section>
<section>...</section>

<!-- Con id: cada sección tiene su DNI -->
<section id="sobre-mi">...</section>
<section id="mis-hobbies">...</section>
<section id="mis-peliculas">...</section>
```

> **Pregunta de participación:**
> *"¿Cuál de estos `id` tiene un error? — `id=\"sobre mi\"` / `id=\"sobre-mi\"` / `id=\"SobreMi\"`"*
>
> *(Respuesta: el primero tiene espacio, que es inválido. Los otros dos son correctos técnicamente — pero la convención más usada es todo en minúsculas con guion. Confirmar: "Los espacios rompen el `id`. Guion medio o guion bajo — nunca espacio.")*

---

### 4.4 El enlace ancla `href="#"` — Conectando el menú con las secciones

**EN PANTALLA: EXCALIDRAW — Diagrama de conexión: `<a href="#hobbies">` → `<section id="hobbies">` (ya preparado).**

> **La acción guiada:**
> 1. Mostrar el diagrama de conexión en el canvas. Señalar la flecha entre el `href` y el `id`.
> 2. Explicar el símbolo `#` antes de codificar.

> **Tu explicación teórica precisa:**
> *"Ya tenemos las dos piezas del mecanismo: el enlace `<a>` que es el botón, y el `id` que es el destino. La conexión entre los dos la hace un símbolo: el hashtag o numeral `#`.*
>
> *La regla es simple: el `href` del enlace tiene que ser `#` seguido exactamente del `id` de la sección de destino. Sin espacios entre el `#` y el nombre. Sin diferencias de mayúsculas o minúsculas — tiene que ser idéntico.*"

```html
<!-- El botón en el nav -->
<a href="#mis-hobbies">Hobbies</a>

<!-- El destino en el main -->
<section id="mis-hobbies">
    <h2>Mis Hobbies</h2>
    ...
</section>
```

> *"Cuando el usuario hace clic en 'Hobbies', el navegador busca en la página el elemento que tenga `id=\"mis-hobbies\"` y hace scroll hasta él. Si el `id` no existe, no pasa nada — el navegador llega al tope de la página. Por eso la coincidencia exacta es crítica."*

---

### 4.5 Lab 02 — Parte 3: Code-along completo (navegación funcional)

**EN PANTALLA: PANTALLA DIVIDIDA — VS Code a la izquierda, Navegador Live Server a la derecha.**

> **La acción guiada:**
> El instructor codifica paso a paso. Los alumnos replican en su propio `index.html`. Tres pasos exactos:

**Paso 1 — Dar el DNI a cada sección:**

> *"Primero, vamos a las secciones dentro del `<main>` y les agregamos su `id`. Usen el nombre del tema que pusieron en el wireframe — esos nombres ya los pensaron hace 20 minutos."*

```html
<main>
    <section id="sobre-mi">
        <img src="foto.jpg" alt="Foto de perfil de Eric Verde">
        <p>Soy desarrollador web...</p>
    </section>

    <section id="mis-hobbies">
        <h2>Mis Hobbies</h2>
        <ul>
            <li>Fotografía urbana</li>
            <li>Senderismo</li>
            <li>Tocar guitarra</li>
        </ul>
    </section>
</main>
```

> *(Checkpoint rápido: "¿Los `id` están en las etiquetas de apertura del `<section>`? Bien — ahora el navegador ya sabe dónde está cada sección.")*

---

**Paso 2 — Crear los enlaces en el `<nav>`:**

> *"Ahora subimos al `<nav>` que dejamos vacío en el Momento 3. Aquí ponemos un `<a>` por cada sección — usando el `#` más el `id` exacto que acabamos de escribir."*

```html
<nav>
    <a href="#sobre-mi">Sobre mí</a>
    <a href="#mis-hobbies">Hobbies</a>
</nav>
```

> *"El texto visible — lo que va entre `<a>` y `</a>` — puede ser cualquier cosa legible: 'Sobre mí', 'Hobbies', 'Inicio'. No tiene que coincidir con el `id`. Lo que tiene que coincidir exactamente es el `href` con el `id` de la sección."*

---

**Paso 3 — Probar en el navegador:**

> **La acción guiada:**
> 1. Guardar el archivo (Auto Save debe estar activo).
> 2. Ir al navegador — debe aparecer el texto de los enlaces en la parte superior.
> 3. Hacer clic en cada enlace en vivo. Mostrar cómo la página hace scroll a la sección correspondiente.
> 4. Si la página es corta y no hay scroll visible — agregar temporalmente `margin-top: 500px` para forzar desplazamiento, o aclarar que el salto se nota mejor cuando la página tiene más contenido.

> **Tu explicación teórica precisa:**
> *"Hagan clic. Si la página se desplaza a la sección correcta, el navegador encontró el `id` — el mecanismo funciona. Si no pasa nada o van al tope de la página, hay una diferencia entre el `href` y el `id`. Revisen que sean idénticos: mismas letras, mismo guion, mismo orden.*
>
> *Lo que acaban de construir se llama navegación interna o 'anchor navigation'. Es el mismo mecanismo que usan Wikipedia, las landing pages de productos, la documentación técnica — cualquier página larga con menú lateral o de salto. Un concepto de HTML puro, sin JavaScript, sin CSS."*

> **Checkpoint 4.5 — Screenshot final:**
> *"Screenshot al WhatsApp: quiero ver la página en el navegador con los enlaces del menú visibles en la parte superior. Eso confirma que el `<nav>` tiene contenido y que la estructura semántica está completa."*
