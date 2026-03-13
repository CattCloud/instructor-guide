# CLASE 02

## MOMENTOS DE LA CLASE

<aside>
💡

**'Code-along'** (o programación en vivo guiada). 
- Con ayuda del laboratorio(porque ellos tambien tendran ese archivo en el CANVAS) yo avanzare y ellos a la par iran haciendo codigo conmigo paso a paso, claro pidiendo un screen o confirmacion de que estan conmigo , la idea es que todos o la mayoria lleguemos al final juntos al laboratorio , en lugar darles conceptos y dejarlos codificar por su cuenta

</aside>

<aside>
💡

Solo el momento con una lista enumerada(progresiva) y descripción breve y precisa de cada uno 

**QUE NO DEFINIR ACA**

- No definir la herramienta a usar , ni lo que diras ni lo que usaras , eso despues, solo algo general como una guia general
- Durante estos momentos obviamente habran preguntas , situaciones, etc pero eso despues, tranqui
</aside>

**Momento 1: Reforzamiento y Cierre del Lab 01 (Deuda Técnica)**

1. **Revisión de Entregas:** Mostrar Canvas, felicitar a los que entregaron y dar tranquilidad a los que faltan.
2. **Repaso Flash:** Cómo el navegador lee de arriba hacia abajo y el orden de la estructura base (`<html>`, `<head>`, `<body>`, `h1`, `p`, `img`).
3. **Deuda 1 - Accesibilidad (El atributo `alt`):** Explicar brevemente qué pasa si una persona ciega usa la web y cómo el `alt` soluciona eso.
4. **Deuda 2 - Listas (`<ul>`, `<ol>`, `<li>`):** Explicar la diferencia y enseñar el truco de Emmet (`ul>li*3`). Con esto todos terminan el Lab 01 en vivo.

**Momento 2: Introducción a Clase 02 y Wireframes**

1. **Transición y Quiz Pre-Lab:** Conectar lo anterior con la nueva clase usando la analogía del arquitecto (plano vs ladrillos).
2. **Concepto de Wireframe:** Explicar qué es un wireframe visualmente y por qué los profesionales no codean sin uno.
3. **Presentar Excalidraw y presentales como usarlo(grafica en vivo presentando cada herramienta, el circulo, el cuadrado, etc)**
4. **Dinámica (Lab Parte 1):** Reto de 5 minutos en Excalidraw para que dibujen la estructura básica de su perfil (Header, 3 Secciones, Footer).

**Momento 3: HTML Semántico (Dando significado)**

1. **Etiqueta `<div>`** : Explicar sobre la etiqueta y que funciona como una caja
2. **El Problema del `<div>` y que es HTML SEMANTICO :** La analogía de las cajas de mudanza sin etiqueta vs etiquetadas.
3. **Las 5 etiquetas semanticas:** Presentar `<header>`, `<nav>`, `<main>`, `<section>`, y `<footer>`.
    - Nota presentaremos cada uno por separado armando nuestra web
    - Es decir presento una etiqueta semantica ,luego voy al código para crearlo progresivamente y añadirle adentro algo explicándole que contenido tiene usualmente .

**Momento 4: Navegación Interna (El Teletransportador)**

1. **Concepto del atributo `id`:** Explicar que el `id` es el "DNI" único e irrepetible de un elemento en HTML 
2. **Concepto de navegacion y la etiqueta de enlaces <a> para navegar en una pagina**

Listo aqui empiezas la parte 3 del lab02

1. **El Enlace Ancla (`href="#"`):** Explicar cómo el enlace en nav se conecta con el DNI de la sección usando el símbolo hashtag `#`.
2. **Implementación (Lab Parte 3 - Code-along):** Realizalo para una seccion - agrega el ID a la seccion, crear los enlaces en el Nav y probar que la página salte correctamente.

**Momento 5: Cierre y Reflexión**

1. **Reflexión Final:** 
    1. Por qué el HTML Semántico ayuda al SEO (Google) y a la Accesibilidad (Lectores de pantalla).
    2. Accesibilidad 
2. **Preview Clase 03:** El "gancho" visual. Hoy hay estructura perfecta, en la siguiente clase le daremos belleza con CSS (colores y letras).
3. **Instrucciones de Entrega:** Recordar los 2 screenshots necesarios (Wireframe + Web con navegación).

## MANEJO DEL TIEMPO

### Distribución de Tiempos (El Reloj de la Clase)

| **Momento** | **Foco Principal** | **Tiempo Estimado** |
| --- | --- | --- |
| **Momento 1** | Cerrar Lab 01 (Repaso, Listas y Atributo `alt`) | 25 min |
| **Momento 2** | Intro Clase 02 y Dinámica de Wireframe (Excalidraw) | 20 min |
| **Momento 3** | HTML Semántico y reorganización de código | 30 min |
| **RECESO** | **Descanso para todos (y para ti, toma agua)** | **20 min** |
| **Momento 4** | Enlaces ancla, IDs y pruebas de navegación | 30 min |
| **Momento 5** | Reflexión, Preview CSS y Entregables | 10 min |
| **Colchón** | *Tiempo de rescate para bugs, dudas o retrasos* | *15 min* |

## FLUJO DE PRESENTACION

### **Momento 1: Reforzamiento y Cierre del Lab 01**

**1. Revisión de Entregas (Calmando las aguas)**

**EN PANTALLA:** PLATAFORMA CANVAS (Vista de entregas o calificaciones del Lab 01).

> **Guion/Pautas:** "¡Hola a todos! Quiero arrancar felicitando a los que ya subieron su Laboratorio 01. He visto perfiles geniales. Ahora, si todavía no lo han subido, *respiren*. Sé que quedaron dos temas pendientes en la clase pasada. Justamente en estos primeros 20 minutos vamos a cerrarlos juntos. Nadie se queda atrás, hoy todos terminan ese Lab."
> 

**2. Repaso Flash: Cómo lee el Navegador**

**EN PANTALLA:** PRESENTACIÓN CANVA (Imagen generada para explicar flujo de lectura) -> VS CODE.

> **Guion/Pautas:** "Antes de escribir código nuevo, hay una regla de oro que deben entender: **El navegador es obediente, pero no es adivino**. 
Lee su documento chicos como ustedes leen un libro, asi de sencillo , 
Lee su documento exactamente de arriba hacia abajo, línea por línea.LEE Y DIBUJA
 Si en su código ponen la etiqueta `<img>` en la línea 10, y su `<h1>` en la línea 20... en la pantalla web aparecerá primero la foto y debajo el título. El orden de sus etiquetas dicta el orden visual en la página."
> 

**3. Deuda 1 - Accesibilidad y el Atributo `alt` (El momento "Wow")**

**EN PANTALLA:** NAVEGADOR WEB (Página del perfil abierta) + LECTOR DE PANTALLA ACTIVO.

> **Guion/Pautas:** "¿Se acuerdan que les pregunté cómo navega una persona ciega por internet? Usan Lectores de Pantalla. Vamos a hacer una prueba real."
> 
- **Dinámica en vivo:**
1. Ve a tu código en VS Code 
2. Activa el Lector de Pantalla de tu sistema (*Windows: `Win + Ctrl + Enter` para Narrador | Mac: `Cmd + F5` para VoiceOver*).
3. Pasa el mouse o tabula hacia tu imagen. Deja que los alumnos escuchen cómo la voz robótica dice simplemente *"Imagen"* o lee el nombre feo del archivo *"foto-perfil-123.jpg"*.
4. **Diles:** "Si yo soy ciego, acabo de perderme de la experiencia. No sé qué hay ahí". NO TENGO IDEA
5. Vuelve al código, escribe `alt="Foto de Erick sonriendo con una laptop"`. Guarda.
6. Vuelve al navegador y deja que el lector lea la nueva descripción.
7. **Mensaje de impacto:** "Un programador novato solo pone imágenes. Un programador profesional entiende que su código puede incluir o excluir a millones de personas. Siempre, *siempre* usen el atributo `alt`."
8. EXPLICA QUE ES SEO Y PORQUE NO SOLO ES IMPORTANTE COLOCAR ALT PORQUE UN CIEGO VAYA A LEER TU PAGINA

**4. Deuda 2 - Agrupación de datos: Listas (Lab 2.4)**

**EN PANTALLA:** PRESENTACIÓN CANVA (Imagen de listas) -> VS CODE.

> **Guion/Pautas:** "La diferencia entre listas (`<ul>` vs `<ol>`): En HTML tenemos dos tipos de listas principales. Las desordenadas (`<ul>` o *Unordered List*), que nos ponen los clásicos puntitos y sirven para agrupar cosas sin orden específico, como los enlaces de un menú o sus hobbies. Y las ordenadas (`<ol>` o *Ordered List*), que enumeran automáticamente y sirven para pasos a seguir, como una receta de cocina o un Top 3 de películas."
> 

LUEGO DE EXPLICAR LA DIFERENCIA ENTRE LISTA ORDENADA O DESORDENADA PASAS A PREGUNTARR

- **Interacción (Pregunta al chat):** "A ver, pónganme en el chat:
    - *Caso 1:* Una lista de alumnos para verificar la asistencia en orden alfabético. ¿Ordenada o desordenada? (Esperas que digan Ordenada).
    - *Caso 2:* Las herramientas que necesitan para armar un mueble que acaban de comprar. ¿Ordenada o desordenada? (Esperas que digan Desordenada, porque el orden de las herramientas no importa, a diferencia de los *pasos* para armarlo)."
- **Muestras el Visual:** Vuelves a tomar el control y muestras tu slide comparativo. Explicas que ambas usan la etiqueta `<li>` (*List Item*) por dentro. **Y LO EXPLICAS CODIFICANDO**
- **El Hack de Productividad (Emmet):** Pasas a VS Code para resolver el Lab 2.4 (Lista de Hobbies). *"Antes de que escriban etiqueta por etiqueta, les voy a enseñar un truco mágico. Escriban `ul>li*3` y presionen Enter"*.
- **Cierre del bloque:** "¡Listo! Con esto, todos tienen las herramientas para terminar y entregar su Lab 01. Guarden y suban su captura."

### **Momento 2: Introducción a Clase 02 y Wireframes**

**1. Transición y la Pregunta del Arquitecto**

**EN PANTALLA:** PRESENTACION DEL SLIDE DE LA CLASE 02

- **Nos movemos al slide TRANSICIÓN: Clase 01 → Clase 02 y comentamos leyendo**

**EN PANTALLA:**   PRESENTANCION CANVA CON LA PREGUNTA : 

> **Guion/Pautas:** "Cerramos la clase 01 y pasamos oficialmente a la Clase 02. Quiero hacerles una pregunta de sentido común: Si deciden construir la casa de sus sueños y ya tienen el terreno, ¿qué es lo primero que harían? ¿Ir a comprar ladrillos y cemento para empezar a apilarlos hoy mismo? *(Esperas que respondan en el chat o por micro: 'Hacer un plano', 'Buscar un arquitecto')*. 
Exacto. En el desarrollo web, el código es tu material de construccion. Los profesionales jamás empiezan a codear sin tener un plano primero."
> 

**2. Concepto de Wireframe (Tu imagen visual)**

**EN PANTALLA:** PRESENTACIÓN CANVA (Mostrando tu imagen de Wireframe -> Mockup -> Prototipo).

> **Guion/Pautas:** "Ese plano en nuestro mundo se llama **Wireframe**. Como ven en la pantalla, es un boceto de estructura básica y baja fidelidad. No nos importan los colores ni las fotos bonitas todavía, solo nos importa responder: **¿Qué va a ir en la página y en qué orden?** Hacer esto en un proyecto real te ahorra horas de escribir código basura que luego tendrás que borrar porque no encajaba."
> 

**3. Presentación de Excalidraw (El Pro-Tip de VS Code)**

**EN PANTALLA:** NAVEGADOR (excalidraw.com) -> VS CODE (Pestaña de Extensiones).

> **Guion/Pautas:** "Para hacer estos planos usamos herramientas de pizarra virtual. Existe la versión web en `excalidraw.com`, pero les voy a dar mi opción favorita como desarrollador: tenerlo directamente en nuestro editor.
Pero yo recomiendo de forma personal la version extension en VSCODE
Vas a la sección de extensiones en VS Code, buscas "Excalidraw" y muestras cómo instalarla.
Creas un archivo llamado `boceto.excalidraw` en tu proyecto.
Aclaras: “Ustedes pueden usar la versión que deseen, no hay problema, la herramienta es la misma en WEB o en EXTENSION”
> 
- **Dinámica en vivo (Demostración rápida):**
    1. Haces una demostración de 30 segundos: dibujas un rectángulo grande (la página) y un círculo adentro (una foto).
    2. "Como ven, es súper intuitivo. Arrastrar y soltar."

**4. Dinámica / Lab Parte 1: El Reto de 5 Minutos**

**EN PANTALLA:** TU DIAGRAMA EXCALIDRAW (Ya listo) + PLATAFORMA CANVAS (Punto 1.3).

> **Guion/Pautas:** "Ahora les toca a ustedes. Yo ya tengo mi wireframe de ejemplo en pantalla para que les sirva de guía. Su reto de 5 minutos es dibujar su propio perfil.
> 
> - Debe tener: Un Header (con su nombre), un Footer abajo, y **al menos 3 secciones temáticas** en el medio.
> - Si no saben de qué hacer sus secciones, vayan al Lab en Canvas, punto 1.3. Ahí tienen ideas: Películas, Series, Música, Deportes.
> - ¡El tiempo empieza ahora! En web o extension, dibujen esos rectángulos y manden captura cuando terminen."

### Momento 3: HTML Semántico (Dando Significado)

**1. La Etiqueta `<div>`: La Caja de Cartón Genérica**

**EN PANTALLA:** PRESENTACIÓN CANVA (Imagen de 2 columnas: Caja física con etiquetas vs Código `<div>`).

> **Guion/Pautas:** "Hasta ahora hemos visto etiquetas que tienen un propósito visual directo: la `<img>` pone una foto, la `<h1>` pone un título grande. Pero en el desarrollo web necesitamos organizar todo eso. Les presento a la etiqueta `<div>` (división). Un `<div>` es literalmente una caja de cartón invisible. Es una etiqueta 'contenedora' o 'agrupadora'. Su único trabajo es abrazar a otras etiquetas por dentro para mantenerlas juntas."
 Y es que es mejor agrupar que tratarlo de forma simple , LE DA UN CONCEPTO
> 

**2. El Problema del `<div>` y la Analogía de la Mudanza**

**EN PANTALLA:** PRESENTACIÓN CANVA (Imagen  Cajas sin etiqueta vs Cajas etiquetadas).

> **Guion/Pautas:** "Los desarrolladores amaban tanto el `<div>` que empezaron a construir páginas web *enteras* usando solo ESTA ETIQUETA
Y aquí viene la pregunta: Imaginen que se están mudando a una casa nueva. Al llegar, ¿qué prefieren? ¿Encontrarse con 50 cajas idénticas y sin etiqueta donde tienen que adivinar qué hay adentro, o cajas que claramente dicen 'Cocina', 'Baño' y 'Dormitorio'?"
> 
- **Interacción:** Pides que respondan por el chat y que te digan *por qué* prefieren la segunda opción.
- **Cierre de la analogía:** "Exacto. La clave es **ORDEN Y PROPÓSITO**. Las cajas etiquetadas nos dicen qué hay dentro sin tener que abrirlas."

**3. La Solución: ¿Qué es HTML Semántico?**

**EN PANTALLA:** PRESENTACIÓN CANVA(Imagen  Ambiguous Sections vs Clear Sections).

> **Guion/Pautas:** "Y justamente así puede estar formada nuestra interfaz web. Miren esta segunda imagen. Durante muchos años, los desarrolladores hacían páginas enteras usando solo `<div>`. Miren el lado izquierdo. ¿Pueden identificar dónde está el encabezado o el menú? No, es ambiguo y caótico.
> 
- "Ahora miren el lado derecho. En 2014, HTML5 revolucionó esto y nos trajo las cajas con etiquetas: `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`. Esto es el **HTML Semántico**."
- **Concepto Técnico:** "HTML Semántico es escribir código basándose en el *significado* de las etiquetas y no en su apariencia visual. Es usar una etiqueta que le diga al mundo (navegadores, buscadores, lectores de pantalla) *qué es* ese contenido.
    - **No Semántico:** `<div class='cabecera'>` — Para el navegador es solo una caja más.  Para el navegador es solo una pila de cajas genéricas."
    - **Semántico:** `<header>` — El navegador y Google saben intrínsecamente que aquí está la cabecera."

**4. El Mapa Semántico (Visión Global)**

**EN PANTALLA:** PRESENTACIÓN CANVA (Tu imagen de la página web real con los 5 cuadros rojos).

> **Guion/Pautas:** "Antes de tocar el código, miren este mapa. Así se ve una página profesional por radiografía. Vamos a agarrar el código desordenado que hicimos en el Laboratorio 01 y lo vamos a meter en estas 5 cajas semánticas exactas. Lo haremos una por una. Abran su VS Code."
> 

**5. Transformación en Vivo (Code-along Progresivo)**

**EN PANTALLA:** PANTALLA DIVIDIDA (Tu VS Code a la izquierda, Navegador a la derecha).

> **Guion/Pautas (Etiqueta por Etiqueta):**
> 
> - **Caja 1: `<header>` (El Encabezado)**
>     - *Teoría:* "La primera caja es el `<header>`. Como su nombre lo dice, es la cabecera. Usualmente contiene el logo, el nombre del sitio y el menú principal. Va en la parte más alta de nuestra estructura."
>     - *Práctica:* "Vayan a su código. Agarren el `<h1>` que tiene su nombre y envuélvanlo dentro de una etiqueta `<header>`. Así le decimos a Google: 'Este es el título principal de todo el sitio'."
> - **Caja 2: `<nav>` (La Navegación)**
>     - *Teoría:* "Dentro del encabezado suele ir el menú para viajar por la página. COMO EL MENU DE UN VIDEJUEGOS , ESA PANTALLA INICIAL CON OPCIONES
>     Esa caja se llama `<nav>` (Navegation). Es exclusiva para agrupar enlaces."
>     - *Práctica:* "Justo debajo de su `<h1>`, pero todavía dentro del `<header>`, creen la etiqueta `<nav>`. Por ahora déjenla vacía, en el siguiente bloque le pondremos los botones 'teletransportadores'."
> - **Caja 3: `<main>` (El Contenido Principal)**
>     - *Teoría:* "Esta es la caja más importante. El `<main>` envuelve todo el contenido que es único y central en su perfil. **Regla de oro: Solo puede haber UN `<main>` por página**. No pueden tener dos."
>     - *Práctica:* "Abran la etiqueta `<main>` debajo del `<header>`, y ciérrenla hasta el final, justo antes de que termine el `<body>`. Todo lo demás (su foto, bio y hobbies) va a quedar allá adentro."
> - **Caja 4: `<section>` (Las Secciones Temáticas)**
>     - *Teoría:* "Ahora, dentro del `<main>`, tenemos diferentes temas. Su biografía es un tema, sus hobbies son otro. Para separar temas usamos `<section>`. 
>     **REGLA:** Si a un bloque de información le puedes poner un subtítulo (`<h2>`), entonces merece ser un `<section>`."
>     - *Práctica:* "Vamos a envolver la foto y la biografía en nuestro primer `<section>`. Luego, envuelvan la lista de hobbies (`<h2>`, `<ul>`, `<li>`) en un segundo `<section>`. Así mantenemos los temas aislados y ordenados."
> - **Caja 5: `<footer>` (El Pie de Página)**
>     - *Teoría:* "Finalmente, la caja que cierra la página. El `<footer>`. Aquí suele ir información legal, derechos de autor, el año o enlaces a redes sociales secundarias. Va *fuera* y debajo del `<main>`."
>     - *Práctica:* "Vayan hasta abajo, fuera del `<main>`, y creen la etiqueta `<footer>`. Adentro pongan un párrafo `<p>` que diga: *'Hecho por [Su Nombre] - 2026'*. Guarden los cambios."

**6. El Checkpoint Invisible**

**EN PANTALLA:** NAVEGADOR WEB (Live Server).

> **Guion/Pautas:** "Miren su navegador. Visualmente... no cambió absolutamente nada. La página se ve igual que hace 15 minutos. Pero por detrás, acaban de pasar de escribir código amateur a escribir código profesional que los motores de búsqueda y lectores de pantalla van a amar."
> 
> 
> ¿Por qué es tan importante usar las cajas correctas en lugar de puros `<div>`? Por tres grandes razones:
> 
> 1. **Para ustedes:** Leer y mantener su propio código será mucho más fácil.
> 2. **Para Google (SEO):** Google no entiende qué es un `<div>`, pero si ve un `<header>` o un `<main>`, entiende perfectamente la estructura y hace que su página aparezca en los buscadores.
> 3. **Para la Accesibilidad:** Hay más de mil millones de personas en el mundo con alguna discapacidad visual. Ellos navegan por internet usando programas que les leen la pantalla en voz alta. Si usan puros divs, el lector solo dirá 'grupo, grupo, grupo'. Si usan HTML semántico, el lector les dirá 'Navegación, Sección de películas'. Escribir código semántico es incluir a todos."

### Momento 4: Navegación Interna (El Teletransportador)

**1. Concepto de Navegación y la Etiqueta `<a>`**

**EN PANTALLA:** NAVEGADOR WEB (Página real, ej: Wikipedia o Apple) -> PRESENTACIÓN CANVA (Imagen de una etiqueta enlace).

> **Guion/Pautas:** * *Demostración en vivo:* Entras a una página web real. "Chicos, hasta ahora nuestra página es estática. Pero la web se llama 'web' (telaraña) porque todo está conectado. Miren esta página real. Si hago clic en este texto, me lleva a otra página. Eso es la navegación."
La navegacion es movernos entre paginas webs o movernos de una seccion a otra en una misma pagina web
> 
> - *Explicación visual:* Cambias a tu slide con la imagen de tu etiqueta a. "Para lograr esto en HTML, usamos la etiqueta de enlace o 'Anchor': la etiqueta `<a>`. Como ven en pantalla, tiene un atributo obligatorio llamado `href` (Hypertext Reference) donde pegamos la URL de destino, y en el medio ponemos el texto visible que el usuario va a clickear."
> - En codigo muestro la etiqueta a, que el navegador lo lee y como al hacer click en eso , navegamos a una URL

**2. La Transición y el Concepto del Atributo `id`**

**EN PANTALLA:** PRESENTACIÓN CANVA (Imagen  - Before/After cajas).

> **Guion/Pautas:** * *El Gancho (Tu frase):* "Pero hoy no queremos ir a Google ni a Wikipedia. Queremos viajar dentro de nuestra propia página web... vamos a viajar a las distintas secciones de nuestra web, pero tenemos un problema: ¿cómo sabemos cuál es cuál?"
> 
> - *Explicando el ID:* Muestras la imagen . "Miren el lado izquierdo: 'Confusión'. Tenemos tres etiquetas `<section>`, son tres cajas idénticas por fuera. Si le digo a mi botón 'llévame a la sección', el navegador me va a preguntar '¿A cuál de las tres?'. Para solucionar esto, pasamos al lado derecho: 'Identificación'. Le agregamos el atributo `id`. El `id` es el **DNI único e irrepetible** de un elemento en HTML. Le da un nombre exacto a cada caja para que el navegador sepa a dónde ir."
> - *Regla vital:* Recuerda mencionar que los IDs no llevan espacios (ej: `id="mis-peliculas"`) y no se pueden repetir.

**3. El Enlace Ancla (`href="#"`) y Code-along (Lab Parte 3)**

- **EN PANTALLA:** PANTALLA DIVIDIDA (VS Code + Navegador Live Server).

> **Guion/Pautas:** * "Vamos a empezar la Parte 3 de nuestro Laboratorio y hacer que esto funcione."
> 
> - *Paso 1 (Dando el DNI):* "Vayan a su primera `<section>` (por ejemplo, la de películas) y agréguenle su DNI: `<section id="peliculas">`."
> - *Paso 2 (El Teletransportador):* "Ahora suban a su etiqueta `<nav>` que dejamos vacía hace un rato. Vamos a crear la etiqueta `<a>`. Pero en el `href`, en lugar de poner 'google.com', vamos a usar un símbolo mágico: el hashtag o numeral `#`. El `#` le dice al navegador: *'No te vayas a otra página, busca este DNI aquí mismo'*."
> - *Paso 3 (La Prueba):* "Guarden los cambios, vayan a su navegador, hagan clic en el botón de su menú y vean cómo la página hace scroll solita hasta esa sección."

### Momento 5: Cierre y Reflexión

**1. Reflexión Final: El verdadero poder del HTML Semántico**

- **EN PANTALLA:** SLIDE DE REFLEXIÓN (O tu cámara en pantalla completa para conectar con ellos).

> **Guion/Pautas:**
> 
> 1. **SEO (Google):** Google lee su página como un robot. Si su código no tiene estructura semántica, su sitio será invisible para los buscadores. Un `<main>` le grita a Google: *'¡Aquí está lo importante!'*.
> 2. **Accesibilidad:** Como vimos con el lector de pantalla, millones de personas dependen de que ustedes etiqueten bien las cosas para poder navegar. Escribir HTML semántico no es un 'extra', es nuestra responsabilidad para no excluir a nadie."

**2. Preview Clase 03: El "Gancho" Visual**

- **EN PANTALLA:** SLIDE PREVIEW CLASE 03.

> **Guion/Pautas:** "Quiero felicitarlos. Ahora tienen la estructura perfecta: es semántica, está organizada y es navegable. Tienen el esqueleto completo. Pero seamos honestos... se ve muy básica, parece una página de 1995. La próxima clase vamos a agregar la magia visual con **CSS**. Verán cómo un solo archivo transforma colores, tipografías y diseños enteros. Es la diferencia entre un trabajo 'amateur' y uno 'profesional'."
> 

**3. Instrucciones de Entrega (Claras y directas)**

- **EN PANTALLA:** PLATAFORMA CANVAS (Vista de la tarea).
- **Guion/Pautas:** "Para cerrar, hablemos de su entregable de hoy. Necesito que suban exactamente 2 capturas de pantalla a Canvas:
    - **Screenshot 1:** Su Wireframe en Excalidraw, donde se vea claramente su nombre y al menos 3 secciones.
    - **Screenshot 2:** Su página en el navegador. Se debe ver su nombre en el título grande (`<h1>`) y la navegación funcionando.
    - Si tienen alguna duda extra, estaré respondiendo por el grupo. ¡Excelente trabajo el de hoy, nos vemos la próxima clase!"