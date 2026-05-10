# CLASE 01 v2 — Setup y Web Moderna
## Flujo de Presentación (CAPA 2 + CAPA 3)

> **Proyecto del Módulo:** `mi-perfil` — tu primera página web. Se construye en 4 clases. Hoy se levanta la base: HTML válido con nombre, foto, bio y hobbies. Al terminar esta clase, el alumno tiene algo en el navegador que puede mostrar a alguien.
> **Meta de la clase:** El 100% del grupo tiene Live Server activo, el boilerplate de HTML5 escrito y al menos `<h1>` con su nombre visible en el navegador.

> **Contexto de arranque:** Gabriela (coordinadora) condujo el Slide 00 completo antes de que el instructor entrara — presentación de Canvas, estructura del curso, sistema de evaluación y herramientas. El instructor toma el control a partir de aquí. No repetir esos temas.

---

## MOMENTO 1 — Arranque: Presentaciones y Puente al Código
**Tiempo:** 15 min

> **Nota táctica de inicio: {Tono de trabajo desde el primer minuto}**
> Gabriela acaba de terminar. El grupo lleva 10-15 minutos en la sesión y ya hubo información administrativa. El instructor entra con energía diferente — más directo, más técnico. El objetivo de este momento es: conocerse lo suficiente, verificar acceso a Canvas, y mostrar adónde va esto. No es motivacional — es orientación táctica.

---

### 1.1 Presentación del instructor

**EN PANTALLA: TEAMS — Tu cámara.**

> **La acción guiada:**
> 1. Tomar el control de la pantalla. Encender cámara si no estaba encendida.
> 2. Presentación personal en 2 minutos máximo: nombre, background técnico (qué construyes, dónde trabajas o trabajaste), por qué estás acá como instructor.

> **Tu explicación teórica precisa:**
> *"Mi nombre es [nombre]. Soy desarrollador web — trabajo con HTML, CSS y JavaScript en el día a día. Estuve exactamente donde están ustedes cuando empecé. Eso me hace un mejor instructor: sé exactamente dónde se complica porque yo lo viví. Durante estas 12 clases vamos a trabajar codo a codo. Pregunten sin miedo — una pregunta 'tonta' en esta clase les ahorra 3 horas de confusión después."*

---

### 1.2 Ronda de presentaciones del grupo

**EN PANTALLA: TEAMS — Chat abierto.**

> **La acción guiada:**
> 1. Pedir que en el chat escriban con esta estructura exacta: *Nombre — ¿A qué te dedicas? — ¿Qué te trajo aquí?*
> 2. Mientras llegan los mensajes, leer 3 o 4 en voz alta. Comentar brevemente lo que conecta con el camino que van a hacer.
> 3. Si el grupo es pequeño (menos de 10), dar el pase por micrófono a 2 o 3 personas máximo.

> **Pregunta de calibración:**
> *"Sin que sea una evaluación — a mano alzada o en el chat: ¿quién de ustedes ya ha visto código HTML aunque sea una vez en su vida?"*
>
> *(Usar la respuesta para calibrar el ritmo. Si más del 50% levanta la mano, el ritmo puede ser un poco más rápido en los conceptos básicos. Si la mayoría no lo ha visto, hay que ser más deliberado en el Momento 4.)*

---

### 1.3 Verificar acceso a Canvas

**EN PANTALLA: NAVEGADOR — Canvas del curso.**

> **La acción guiada:**
> 1. Pedir que todos abran Canvas en paralelo: Módulo 1 → Clase 01 → Laboratorio.
> 2. Preguntar en el chat: *"¿Alguien no puede ver el laboratorio? Escriban 'sin acceso'."*
> 3. Quien no tenga acceso: que le escriba a Gabriela por WhatsApp ahora mismo. No esperar — el laboratorio lo van a necesitar en el Momento 3.

> **Tu explicación teórica precisa:**
> *"Canvas va a ser su referencia durante todo el módulo. Cada clase tiene ahí: el resumen de lo que van a aprender, el laboratorio con instrucciones paso a paso, y el espacio para entregar. Van a tener el laboratorio abierto al mismo tiempo que trabajan en VS Code — así programamos hoy."*

---

### 1.4 El objetivo del día — El wireframe del módulo

**EN PANTALLA: EXCALIDRAW — Wireframe del perfil personal terminado (ya preparado).**

> **La acción guiada:**
> 1. Abrir el canvas de Excalidraw con el wireframe del proyecto final del módulo (la página de perfil personal con foto, nombre, bio, hobbies, y secciones adicionales de las Clases 02, 03 y 04).
> 2. Señalar con el cursor las partes del wireframe mientras se habla.

> **Tu explicación teórica precisa:**
> *"Esto es el destino del Módulo 1. Una página web completa con tu nombre, tu foto, tu información, tu diseño. No es un ejercicio de práctica — es un proyecto real que al final del módulo va a estar publicado en Internet y va a tener tu nombre en el URL.*
>
> *Hoy construimos esto de aquí — señalar la parte superior del wireframe: el título con el nombre, la foto y el párrafo de bio. Las siguientes 3 clases construimos el resto. Progresivo, paso a paso, sin saltar etapas.*
>
> *Al final de HOY, este wireframe existe en tu computadora y se puede ver en el navegador. Ese es el único criterio que vale."*

> **Pregunta de calibración:**
> *"Mirando el wireframe — ¿qué parte creen que vamos a construir primero hoy, y por qué?"*
>
> *(Respuesta esperada: el texto, el nombre, la estructura. Porque el HTML es la base antes del estilo. Confirmar: "Exacto. Hoy trabajan con los huesos. En la Clase 02 llega el CSS — la ropa.")*

---

### 🚨 Gestión de Riesgos — Momento 1

**Alguien no tiene acceso a Canvas:**
- No detener el avance de todo el grupo.
- Respuesta: *"Escríbele a Gabriela por WhatsApp ahora mismo con tu nombre completo. Ella lo resuelve en minutos. Mientras tanto, sígueme a mí en pantalla."*

**Las presentaciones se extienden:**
- El límite es 8 minutos para el grupo entero. Si alguien se lanza a hablar mucho, resumir: *"Genial, bienvenido. Vamos a hablar de esto más en el camino."*

**Alguien pregunta sobre el contenido de Gabriela (notas, reglas, etc.):**
- Redirigir: *"Gabriela te puede resolver eso por WhatsApp. Nosotros en esta hora nos enfocamos en el código."*

---

## MOMENTO 2 — La Web: ¿Qué construimos y cómo funciona?
**Tiempo:** 20 min

> **Nota táctica de inicio: {Despertar al programador que tienen adentro}**
> El alumno acaba de escuchar 15-20 minutos de orientación administrativa. Necesita una sacudida intelectual. Este momento no es para dar definiciones — es para que el alumno se haga preguntas que nunca se había hecho sobre algo que usa todos los días. Si termina este momento sin que alguien haya dicho "ah, nunca lo había pensado así", no cumplió su función.

---

### 2.1 Quiz Pre-Lab — Activación de pensamiento

**EN PANTALLA: EXCALIDRAW — Las dos preguntas como texto en el canvas.**

> **La acción guiada:**
> 1. Mostrar la Pregunta 1 en el canvas. Dejar 30 segundos de silencio para que lean y piensen.
> 2. Pedir respuestas por chat o micrófono. No corregir aún — escuchar y anotar las ideas en el canvas si quieres.
> 3. Mostrar la Pregunta 2 y repetir el proceso.

> **Tu explicación teórica precisa:**
> *"No es una evaluación. No existe respuesta incorrecta aquí. Lo que quiero es que activen el análisis — que empiecen a pensar como alguien que construye la web, no como alguien que la consume."*

**Pregunta 1:** *¿Qué crees que pasa técnicamente cuando escribes `google.com` y presionas Enter?*

*(Respuesta esperada: "va al buscador", "busca la página", "envía una solicitud". Dejar que lleguen cerca. No spoilear el DNS todavía — eso viene en 2.2.)*

**Pregunta 2:** *¿Alguna vez has visto el código HTML de una página web? ¿Cómo?*

*(Si nadie lo ha visto: "En un minuto van a ver el código de una página famosa en tiempo real. Si lo han visto antes — genial, van a verlo con otros ojos.")*

---

### 2.2 Diagrama cliente-servidor en Excalidraw

**EN PANTALLA: EXCALIDRAW — Diagrama cliente-servidor (ya preparado o dibujado en vivo).**

> **La acción guiada:**
> 1. Abrir el diagrama del canvas (ya preparado) o dibujarlo en 90 segundos en vivo. Elementos: un ícono de computadora (Cliente/Navegador) — flecha de solicitud → Servidor — flecha de respuesta → documento HTML/CSS/JS → el navegador lo interpreta y muestra la página.
> 2. Señalar el flujo mientras se explica.
> 3. Agregar el DNS como bloque intermedio entre el cliente y el servidor.

> **Tu explicación teórica precisa:**
> *"Esto pasa cada vez que abren una página web. Su navegador, Chrome o Edge — es el cliente. Hace una solicitud: 'oye, dame Google'. Esa solicitud primero pasa por un sistema llamado DNS, que funciona como una guía telefónica: traduce el nombre 'google.com' a una dirección numérica que los servidores entienden — algo como 142.250.80.46.*
>
> *El servidor busca ese documento, lo encuentra, y lo manda de vuelta. Su navegador recibe un archivo de texto — código HTML, CSS y JavaScript — y lo interpreta. Lo que ustedes ven en pantalla no es el archivo crudo — es el resultado de esa interpretación.*
>
> *La frase que se llevan de esta parte: el cliente pide, el servidor sirve. Dos actores, una conversación."*

> **Pregunta de calibración:**
> *"Si el servidor manda un archivo de texto con código, y el navegador lo convierte en la página visual — ¿quién hace el trabajo de la interpretación: el servidor o el navegador?"*
>
> *(Respuesta esperada: el navegador. Confirmar: "Exacto. El servidor solo entrega el paquete. El navegador es el que sabe cómo leerlo y renderizarlo. Eso va a importar cuando hablemos de velocidad de carga más adelante.")*

---

### 2.3 DevTools en vivo — Ver el código de una página real

**EN PANTALLA: NAVEGADOR — Página web de una marca conocida.**

> **La acción guiada:**
> 1. Abrir una página conocida y visualmente llamativa: Apple, Netflix o Coca-Cola.
> 2. Decir: *"Esta página que ven la construyó alguien con exactamente lo que van a aprender. Vamos a ver por debajo."*
> 3. Clic derecho → Inspeccionar (o F12). Dejar que el panel de DevTools aparezca.
> 4. Señalar el HTML en el panel: etiquetas, estructura, anidamiento.
> 5. Ir a la pestaña Elements, seleccionar el `<body>`. Mostrar cómo está todo ahí.
> 6. **El truco de magia:** En la consola, ejecutar `document.body.style.display = 'none'` — toda la página desaparece. Devolverla con `document.body.style.display = ''`.

> **Tu explicación teórica precisa:**
> *"Esto que acaban de ver es HTML. El mismo código que van a escribir hoy. No en esta escala todavía — pero exactamente la misma sintaxis, exactamente el mismo lenguaje.*
>
> *La diferencia entre ustedes ahora mismo y quien construyó esta página no es magia. Es tiempo, práctica y saber exactamente por dónde empezar. Hoy empiezan por el principio correcto."*

> **Pregunta de calibración:**
> *"Si abro DevTools en cualquier página web del mundo — ¿voy a encontrar HTML adentro?"*
>
> *(Respuesta esperada: sí, siempre. Confirmar: "Siempre. Sin excepción. No importa si fue construido con React, con WordPress, con cualquier tecnología. Al final, el navegador recibe HTML. Es el único lenguaje que el navegador sabe leer directamente.")*

---

### 2.4 La Trinidad: HTML, CSS y JavaScript

**EN PANTALLA: EXCALIDRAW — Imagen de la trinidad (ya importada como imagen en el canvas).**

> **La acción guiada:**
> 1. Mostrar la imagen comparativa de las 3 tecnologías. Si tienes la imagen del "antes y después" del CSS (página con estilos vs página sin estilos), usarla aquí.
> 2. Volver a la página que tenías en DevTools. Ir a la pestaña Styles y deshabilitar el CSS visual o buscar el archivo `.css` en Sources. Mostrar cómo la página queda solo con HTML: texto plano hacia abajo, sin color, sin layout.

> **Tu explicación teórica precisa:**
> *"Hay exactamente 3 tecnologías que construyen cualquier página web. Siempre estas 3, nunca menos:*
>
> *HTML es la estructura — los huesos. Define qué existe: un título, una imagen, un párrafo, un botón. Sin HTML no hay nada.*
>
> *CSS es la apariencia — la ropa. Define cómo se ve: colores, tamaños, posiciones, animaciones. Sin CSS, la página se ve como lo que acaban de ver: texto plano.*
>
> *JavaScript es el comportamiento — el cerebro. Define qué hace: reacciona a clics, mueve cosas, trae datos del servidor. Sin JS, la página es una foto estática.*
>
> *Los tres son necesarios. Los tres se aprenden en este módulo. Hoy empezamos con HTML porque sin estructura, no hay nada sobre qué poner estilo ni comportamiento."*

> **Pregunta de calibración:**
> *"Un diseñador gráfico que sabe Photoshop quiere crear una página web. ¿Con cuál de las 3 tecnologías tiene más sentido que empiece a conectarse?"*
>
> *(Respuesta esperada: CSS — porque se encarga de la apariencia y el diseño visual. Confirmar: "Exacto. Pero incluso un diseñador que aprende CSS, si no sabe HTML, no tiene dónde aplicar esos estilos. Por eso HTML siempre va primero.")*

---

> **Nota táctica de transición:**
> En este punto el alumno sabe qué es la web, cómo funciona el ciclo cliente-servidor, y por qué existen HTML, CSS y JavaScript. No sabe nada de sintaxis todavía. En el siguiente momento eso cambia — abrimos VS Code y empezamos a instalar las herramientas con las que van a escribir código durante todo el módulo.

---

### 🚨 Gestión de Riesgos — Momento 2

**El diagrama cliente-servidor genera muchas preguntas:**
- Es una señal de que el grupo está activo. Aceptar 2 preguntas espontáneas máximo.
- Si se genera un hilo largo: *"Esa es una pregunta muy buena para explorar después del receso. Sigamos — en el código esto va a quedar mucho más claro de lo que parece en el diagrama."*

**Alguien dice que ya sabe HTML y que esto es básico:**
- No es problema — es un aliado.
- Respuesta: *"Perfecto, entonces mientras avanzamos vas a ser el primero en confirmarnos en el chat que el código funciona. Necesito ese feedback."*

**DevTools no abre o la página está en caché:**
- Tener una página de backup lista (puede ser una local servida con Live Server).
- Si el problema es del alumno: *"No se preocupen si en su computadora no les abre — me siguen a mí en pantalla. Lo van a probar solos en el Momento 3."*

**Alguien pregunta si van a aprender React o algún framework:**
- Respuesta directa: *"React está en el horizonte, pero React está construido sobre JavaScript. JavaScript está construido sobre HTML. Hoy construimos la base sin la que ningún framework funciona. Saltarse esto es como querer correr sin saber pararse."*

---

## MOMENTO 3 — Setup: El Entorno Listo para Codificar
**Tiempo:** 20 min

> **Nota táctica de inicio: {El entorno no es un trámite — es el primer logro}**
> Este es el momento más logístico de la clase, pero también el que más retrasos puede generar. El riesgo número uno es que alguien no tiene VS Code descargado y el instructor pierde 10 minutos atendiendo eso. La regla: los checkpoints de screenshot son obligatorios antes de avanzar al siguiente sub-momento. Si el 80% del grupo confirmó, se sigue — la minoría los alcanza. No esperar al 100%.

---

### 3.1 VS Code + Extensiones

**EN PANTALLA: NAVEGADOR (descarga) → VSCODE (extensiones).**

> **La acción guiada:**
> 1. Abrir [code.visualstudio.com](https://code.visualstudio.com) en el navegador. Mostrar el botón de descarga. Si alguien aún no lo tiene, que lo descargue ahora. Los que ya lo tienen se adelantan al paso 2.
> 2. Abrir VS Code. Ir al panel de Extensiones (ícono de cuadrados en la barra lateral izquierda, o `Ctrl+Shift+X`).
> 3. Instalar en este orden:

**Extensión 1: Live Server**

> **Tu explicación teórica precisa:**
> *"Live Server convierte tu computadora en un servidor local temporal. ¿Recuerdan el diagrama cliente-servidor? Cuando activemos Live Server, su computadora va a actuar exactamente como ese servidor — va a servir su página web al navegador. La diferencia es que va a detectar cada vez que guardan el archivo y va a actualizar el navegador automáticamente. No tienen que presionar F5 nunca."*

**Extensión 2: Auto Rename Tag**

> **Tu explicación teórica precisa:**
> *"HTML trabaja con etiquetas que se abren y se cierran. Si cambian el nombre de la etiqueta de apertura, Auto Rename Tag cambia la de cierre al mismo tiempo. Son 2 segundos que se ahorran cada vez que editan una etiqueta — y van a editar muchas."*

**Extensión 3: Prettier**

> **Tu explicación teórica precisa:**
> *"Prettier es un formateador automático de código. Cada vez que guarden, organiza los espacios, las indentaciones y las comillas para que el código sea legible. En un equipo de trabajo real, todos usan Prettier para que el código de cualquier persona se vea consistente. Lo adoptamos desde el día 1."*

> **Checkpoint obligatorio 3.1:**
> *"Cuando tengan el botón `Go Live` visible en la barra inferior de VS Code — el que dice exactamente 'Go Live' — mándenme un screenshot al WhatsApp del grupo. Yo lo confirmo ahí."*
>
> *(No avanzar al 3.2 hasta que la mayoría haya enviado el screenshot. Mientras llegan: revisar el chat de WhatsApp en vivo y confirmar con un 👍 a cada uno.)*

---

### 3.2 Crear la carpeta del proyecto y el archivo `index.html`

**EN PANTALLA: EXPLORADOR DE ARCHIVOS → VSCODE.**

> **La acción guiada:**
> 1. Abrir el laboratorio en Canvas: Parte 1 → punto 1.1. Mostrar la instrucción en el lab mientras se ejecuta en vivo.
> 2. Crear la carpeta `mi-perfil` en el disco (recomendado: en `Documentos` o en una carpeta `Proyectos`). No en el Escritorio ni en `Descargas` — esos lugares se llenan de archivos sueltos.
> 3. Abrir la carpeta en VS Code: `File → Open Folder` o arrastrarla directamente al editor.
> 4. Crear un nuevo archivo con el ícono de nuevo archivo en el explorador lateral. Nombrarlo exactamente `index.html`.

> **Tu explicación teórica precisa:**
> *"El nombre `index.html` no es arbitrario — es un estándar de la web. Cuando un servidor recibe una solicitud sin especificar qué archivo quiere, busca automáticamente un archivo llamado `index`. Es el punto de entrada, la puerta principal de toda página web. Tener este nombre correcto es la diferencia entre una página que funciona y una que da error 404."*

> **Checkpoint obligatorio 3.2:**
> *"Quien tenga VS Code abierto con la carpeta `mi-perfil` y el archivo `index.html` creado — levanten la mano en Teams o escriban 'listo' en el chat."*

---

### 3.3 Hola Mundo con Live Server

**EN PANTALLA: PANTALLA DIVIDIDA — VS Code a la izquierda, Navegador a la derecha.**

> **La acción guiada:**
> 1. Con el archivo `index.html` abierto y vacío, escribir solo esto en la línea 1:

```
Hola Mundo
```

> 2. Guardar con `Ctrl+S` (Windows) o `Cmd+S` (Mac).
> 3. Hacer clic en el botón `Go Live` en la barra inferior. El navegador se abre automáticamente en `localhost:5500`.
> 4. El navegador muestra el texto "Hola Mundo" en la página en blanco.
> 5. Volver a VS Code. Cambiar el texto a algo diferente — *"Mi primera página web"* — y guardar. Ver cómo el navegador se actualiza **sin que el alumno haga nada**.

> **Tu explicación teórica precisa:**
> *"Lo que acaben de hacer tiene un nombre en la historia de la programación: el 'Hola Mundo'. Es la tradición de todo programador al configurar un entorno nuevo — escribir la mínima expresión de código que confirma que el entorno funciona.*
>
> *Pero hay algo más importante: noten que cuando guardan, el navegador se actualiza solo. Eso es Live Server en acción. Su computadora está sirviendo ese archivo al navegador en tiempo real. Ahora mismo están usando exactamente el mismo ciclo cliente-servidor que dibujamos antes — solo que el servidor eres tú: tu propia computadora."*

> **Pregunta de calibración:**
> *"Si el texto dice 'Hola Mundo' en el archivo y 'Hola Mundo' en el navegador — y yo cambio el texto en el archivo pero NO guardo — ¿el navegador se actualiza?"*
>
> *(Respuesta esperada: no. Confirmar: "Exacto. Live Server detecta el guardado. No la escritura — el guardado. `Ctrl+S` va a ser el atajo más usado de su vida como desarrolladores.")*

> **Checkpoint obligatorio 3.3 — El corte del receso:**
> *"Para pasar al receso necesito el screenshot de su 'Hola Mundo' en el navegador. Quiero ver el texto en la página Y la URL de `localhost` arriba. Mándenlo al WhatsApp ahora."*
>
> *(Este checkpoint es el criterio de corte para el receso. Quien no lo tenga, el instructor o Gabriela lo atiende en el break por WhatsApp. No se devuelve a instalaciones después del receso.)*

---

### 🚨 Gestión de Riesgos — Momento 3

**Alguien no tiene VS Code descargado todavía:**
- No detener al grupo. Decirle que descargue mientras el instructor continúa.
- Si la descarga tarda: *"Sígueme en mi pantalla mientras descarga. Cuando se instale, me avisas por WhatsApp y te pongo al día."*

**Live Server no muestra el botón `Go Live`:**
- Verificar que la extensión esté instalada (panel de extensiones → instaladas).
- Si está instalada pero el botón no aparece: cerrar y reabrir VS Code.
- Respuesta alternativa: clic derecho sobre `index.html` en el explorador → *"Open with Live Server"*.

**El navegador abre en una URL diferente a `localhost:5500`:**
- Es normal. El puerto puede variar (5501, 5502). Lo importante es que diga `localhost:XXXX` — eso confirma que el servidor local está corriendo.

**Alguien tiene Mac y los atajos son diferentes:**
- Anticipar: *"Para Mac, `Ctrl` siempre se reemplaza por `Cmd`. Todos los atajos que diga aplican igual — solo cambia esa tecla."*

**VS Code pide permiso para confiar en la carpeta:**
- Decirles que acepten. *"Es su propia carpeta, no hay ningún riesgo. VS Code solo pregunta por seguridad cuando abres una carpeta nueva por primera vez."*

---

## ⏸ RECESO — 30 min

> **Criterio de corte:**
> El alumno debe tener, antes de irse al receso:
> - ✅ VS Code abierto con la carpeta `mi-perfil`
> - ✅ El archivo `index.html` creado
> - ✅ Live Server activo — algo visible en el navegador
>
> Si alguien no tiene esto, el receso es el momento de resolverlo por WhatsApp — no después.

> **Qué hacer durante el receso:**
> 1. Revisar los screenshots del WhatsApp. Confirmar con 👍 a cada uno.
> 2. Atender los casos bloqueados directamente por chat privado.
> 3. Tomar agua. Este es el único descanso real antes del code-along de HTML.
> 4. Preparar VS Code con el boilerplate listo para el Momento 4.

> **Mensaje para despedir el receso:**
> *"Tienen 30 minutos. Cuando regresemos, empezamos HTML — el lenguaje que construye todo lo que ven en la web. Si todavía tienen algún problema con Live Server, escríbanme ahora para resolverlo antes de que retomemos."*

---

## MOMENTO 4 — HTML I: Estructura Base y Primeras Etiquetas
**Tiempo:** 30 min

> **Nota táctica de inicio: {El código empieza aquí — velocidad media, confirmaciones frecuentes}**
> El alumno regresa del receso. Ya tiene el entorno listo. Ahora entra el código real. Este momento es el más denso en conceptos nuevos: boilerplate, 8 líneas que explicar, etiquetas, reglas. El riesgo es ir demasiado rápido y perder a la mitad del grupo en las primeras etiquetas. La cadencia correcta: explico → escribo → pido confirmación. No avanzar al siguiente bloque sin ver respuesta en el chat.

---

### 4.1 ¿Qué es una etiqueta? — Concepto y anatomía

**EN PANTALLA: EXCALIDRAW — Imagen de anatomía de una etiqueta HTML (ya preparada).**

> **La acción guiada:**
> 1. Mostrar la imagen de la anatomía de una etiqueta en Excalidraw: `<etiqueta atributo="valor">contenido</etiqueta>`
> 2. Señalar cada parte mientras se habla: apertura, nombre, atributo, valor, contenido, cierre.

> **Tu explicación teórica precisa:**
> *"HTML se escribe con etiquetas. Una etiqueta es la unidad básica de HTML — es la instrucción que le mandamos al navegador para decirle qué existe en la página.*
>
> *Toda etiqueta tiene 3 partes: apertura, contenido y cierre. La apertura es el nombre entre ángulos — `<nombre>`. El cierre es lo mismo pero con una barra — `</nombre>`. En el medio va el contenido que el usuario ve. Nombre de apertura y cierre tienen que coincidir.*
>
> *Los atributos van dentro de la etiqueta de apertura. Modifican el comportamiento — no la función. Una etiqueta de imagen siempre muestra una imagen; un atributo de ancho solo le dice qué tan grande.*
>
> *Dos reglas de oro que no cambian nunca: los nombres de etiqueta siempre en minúsculas, y no se inventan nombres — los nombres ya existen, yo les voy a ir mostrando cuál hace qué."*

> **Interacción con IA en vivo:**
> Abrir ChatGPT o Gemini en pantalla. Escribir el prompt:
> *"Hola, soy instructor. Responde solo el número: ¿cuántas etiquetas tiene HTML5?"*
>
> *(La IA responde: ~114. Hacer pausa dramática. Luego segunda pregunta:)*
> *"¿Cuántas etiquetas necesita dominar un desarrollador web en el mundo laboral real? Solo el número."*
>
> *(La IA responde: entre 20 y 30.)*

> **Tu explicación teórica precisa después de la IA:**
> *"114 etiquetas. Eso escuché yo también cuando empecé, y me pareció imposible. La buena noticia que acaba de dar la IA: con 20 o 30 construyes el 90% de cualquier página web que vas a ver trabajando. Hoy aprenden las primeras 5. Con esas 5, al final de esta clase tienen una página personal funcionando."*

---

### 4.2 El boilerplate HTML5 — Línea por línea

**EN PANTALLA: PANTALLA DIVIDIDA — VS Code a la izquierda, Navegador con Live Server a la derecha.**

> **La acción guiada:**
> 1. Borrar el "Hola Mundo" del `index.html`. El archivo queda vacío.
> 2. Escribir `!` y presionar `Enter` para generar el boilerplate automático con Emmet.
> 3. Mostrar el resultado. Decir: *"Todo esto lo generó VS Code solo. Pero vamos línea por línea para que entiendan qué hace cada una — porque van a escribirla muchas veces."*
> 4. Agregar un comentario `<!-- -->` explicativo al lado de cada línea mientras se explica.

```html
<!DOCTYPE html>
<html lang="es">  <!-- Cambiar "en" por "es" — nuestra página es en español -->
<head>
    <meta charset="UTF-8">         <!-- Permite tildes y la ñ -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  <!-- Se ve bien en celular -->
    <title>Mi Perfil - [Tu nombre]</title>  <!-- Nombre en la pestaña del navegador -->
</head>
<body>
    <!-- Aquí va TODO lo que el usuario ve -->
</body>
</html>
```

> **Tu explicación teórica precisa — línea por línea:**
> *"`<!DOCTYPE html>` — No es una etiqueta, es una declaración. Le dice al navegador: 'este archivo usa HTML5 moderno'. Sin esto, el navegador puede interpretar la página como si fuera HTML antiguo y mostrar cosas raras.*
>
> *`<html lang="es">` — La etiqueta raíz. Contiene absolutamente todo. El atributo `lang` le dice al traductor automático del navegador en qué idioma está la página — lo cambiamos a 'es' porque la nuestra es en español.*
>
> *`<head>` — El cerebro de la página. Todo lo que va aquí es configuración que el usuario no ve directamente, pero que el navegador necesita saber antes de mostrar nada.*
>
> *`<meta charset="UTF-8">` — El traductor de caracteres. Sin esta línea, la ñ, las tildes y cualquier símbolo especial puede aparecer como símbolos extraños. Si alguna vez han visto una página con texto dañado, faltaba esta línea.*
>
> *`<meta name="viewport">` — La línea de responsividad. Le dice al navegador que adapte la página al ancho del dispositivo. Sin esto, en el celular la página se ve miniaturizada como si fuera la versión de escritorio reducida.*
>
> *`<title>` — El texto que aparece en la pestaña del navegador. También es lo que Google muestra como título en los resultados de búsqueda. Cámbienlo a su nombre.*
>
> *`<body>` — El cuerpo. Todo lo que escriban aquí es lo que el usuario va a ver, leer, hacer clic y tocar. De aquí en adelante, todo va adentro del `<body>`."*

> **Checkpoint obligatorio 4.2:**
> *"Quiero ver el boilerplate completo en sus pantallas y el título de la pestaña del navegador con su nombre. Screenshot al WhatsApp."*

---

### 4.3 `<h1>` — El título principal

**EN PANTALLA: PANTALLA DIVIDIDA — VS Code + Navegador.**

> **La acción guiada:**
> 1. Dentro del `<body>`, escribir `<h1>` con el nombre del instructor como contenido.
> 2. Guardar. Mostrar cómo el texto aparece grande en el navegador.
> 3. Escribir `<h2>` debajo con un subtítulo. Luego `<h3>`. Mostrar la jerarquía visual.

```html
<body>
    <h1>Eric Verde</h1>
    <h2>Desarrollador Web</h2>
    <h3>Lima, Perú</h3>
</body>
```

> **Tu explicación teórica precisa:**
> *"Los headings van del `<h1>` al `<h6>`. Pero no son para hacer la letra grande — eso es trabajo del CSS. Son para definir jerarquía: el nivel de importancia de cada título en la estructura del documento.*
>
> *La regla de oro que no se rompe: solo puede existir un `<h1>` por página. Uno. No dos, no tres — uno. El `<h1>` es el título principal. Google y los lectores de pantalla para personas con discapacidad visual lo usan para entender de qué trata la página. Si tienen dos `<h1>`, están diciéndole a Google 'hay dos temas principales' — y eso daña el posicionamiento en búsqueda.*
>
> *En el mundo laboral real, el 95% del tiempo solo van a usar h1, h2 y h3. El h4, h5 y h6 son para estructuras muy profundas — si los necesitan, probablemente hay que rediseñar la estructura."*

> **Pregunta de calibración:**
> *"Si una página de noticias tiene 10 artículos en la misma pantalla, cada uno con su título — ¿cuántos `<h1>` debería tener la página?"*
>
> *(Respuesta esperada: uno solo — el título de la página o sección principal. Los 10 artículos usan `<h2>` o `<h3>`. Confirmar: "Exacto. El `<h1>` es de la página, no de cada contenido dentro de la página.")*

---

### 4.4 `<p>` — Párrafos y el truco Lorem

**EN PANTALLA: VS CODE.**

> **La acción guiada:**
> 1. Debajo del `<h2>`, escribir `<p>` y luego escribir `lorem` dentro. Presionar `Enter`.
> 2. Mostrar cómo VS Code genera automáticamente un párrafo de texto de relleno en latín.
> 3. Guardar. Ver el resultado en el navegador.

```html
<h2>Desarrollador Web</h2>
<p>lorem</p>  ← escribir esto y presionar Enter dentro del <p>
```

> **Tu explicación teórica precisa:**
> *"La etiqueta `<p>` es 'párrafo'. Es el contenedor de texto corriente — el que los usuarios leen, no el que titula.*
>
> *El truco de Lorem Ipsum: en el mundo laboral, cuando estás construyendo la estructura de una página, no pierdes tiempo inventando texto. Usas Lorem Ipsum — texto de relleno en latín que existe desde el siglo XVI para exactamente esto: llenar espacio sin distraerse con el contenido. VS Code lo genera al instante con ese atajo.*
>
> *Esto van a usar mucho al prototipar. Cuando llegue el contenido real, simplemente reemplazan el lorem. Por ahora, hay que reemplazar el lorem por su bio real — eso es parte del laboratorio que van a completar después de clase."*

> **Checkpoint obligatorio 4.4:**
> *"Quiero ver en el chat: `<h1>` con su nombre real, `<h2>` con lo que hacen, y un `<p>` debajo. El texto puede ser Lorem por ahora. Screenshot."*

---

### 🚨 Gestión de Riesgos — Momento 4

**Alguien borra accidentalmente una etiqueta del boilerplate:**
- Es el error más común en este momento.
- Respuesta: *"Sin pánico. Borren todo el contenido del archivo. Escriban `!` y Enter. Vuelve a aparecer limpio. Desde ahí siguen conmigo."*

**Alguien pregunta por qué `<head>` y `<body>` tienen que estar en ese orden:**
- Respuesta técnica simple: *"El navegador lee el archivo de arriba hacia abajo. Si encuentra el `<body>` antes de las instrucciones del `<head>`, puede empezar a renderizar sin tener toda la configuración. HTML5 define ese orden como estándar — lo respetamos siempre."*

**Alguien usa `<H1>` en mayúsculas en lugar de `<h1>`:**
- Funciona, pero es mala práctica.
- Respuesta: *"Técnicamente el navegador lo acepta, pero el estándar es minúsculas siempre. En un equipo de trabajo, código en mayúsculas se rechaza en el code review. Desde hoy: todo en minúsculas."*

**Alguien pregunta dónde está el CSS para que se vea bonito:**
- Respuesta: *"CSS llega en la Clase 02. Lo que ven ahora son los huesos. Ya en la próxima clase le ponemos la ropa. Hoy la meta es que la estructura sea correcta — el estilo después."*

---

## MOMENTO 5 — HTML II: Imagen, Accesibilidad y Listas
**Tiempo:** 25 min

> **Nota táctica de inicio: {Dejar que el alumno tome el volante al menos una vez}**
> Este momento tiene un reto independiente de 5 minutos donde el instructor suelta el control y el alumno trabaja solo. Es intencional. El alumno necesita experimentar hacer algo sin guía paso a paso. El instructor observa, toma agua, y felicita los screenshots que llegan al chat. Resistir la tentación de anticiparse.

---

### 5.1 `<img>` — Imágenes y el atributo `alt`

**EN PANTALLA: EXCALIDRAW — Imagen de anatomía de `<img>` (ya preparada en el canvas).**

> **La acción guiada:**
> 1. Mostrar la anatomía en Excalidraw: `<img src="foto.jpg" alt="Descripción de la foto" width="200">`. Señalar que no tiene etiqueta de cierre.
> 2. Ir al navegador. Abrir Unsplash (`unsplash.com`) o Pexels. Buscar una foto de perfil o avatar genérico.
> 3. Guardar la imagen en la carpeta `mi-perfil` con un nombre simple: `foto.jpg`.
> 4. En VS Code, dentro del `<body>` debajo del `<h1>`, escribir la etiqueta con la ruta relativa.

```html
<h1>Eric Verde</h1>
<img src="foto.jpg" alt="Foto de perfil de Eric Verde" width="200">
```

> **Tu explicación teórica precisa:**
> *"`<img>` es especial por dos razones: primero, no tiene etiqueta de cierre — no existe `</img>`. Segundo, sin sus atributos no funciona.*
>
> *El atributo `src` es 'source' — la fuente, el origen de la imagen. Hay dos tipos de ruta: absoluta (una URL de internet que empieza con `https://`) y relativa (buscar en la carpeta del proyecto con `./foto.jpg`). Hoy usamos ruta relativa porque la imagen está en nuestra propia carpeta.*
>
> *El atributo `alt` es accesibilidad — y no es opcional aunque HTML no lo exija técnicamente."*

> **La pregunta de impacto:**
> *"¿Cómo navega por internet una persona con ceguera total?"*
>
> *(Dejar que el grupo responda. Algunos dirán 'con voz', 'con software especial'. Confirmar:)*
>
> *"Usan software llamado 'lector de pantalla'. Este software lee el código HTML en voz alta. Cuando llega a una imagen, lee el contenido del atributo `alt`. Si el `alt` está vacío, dice: 'imagen'. Sin descripción, sin contexto. El usuario ciego se pierde de esa información.*
>
> *Escribir un `alt` descriptivo — `alt='Foto de perfil de Eric Verde'` — es la diferencia entre un desarrollador que piensa solo en quien ve la pantalla, y uno que construye para todos. En el mundo laboral, un `<img>` sin `alt` es un error de accesibilidad que se puede transformar en demanda legal en algunos países. Lo hacemos bien desde el principio."*

> **Checkpoint 5.1:**
> *"Quiero ver la imagen en el navegador. Mándenme screenshot al WhatsApp — quiero ver la foto cargando en la página."*

---

### 5.2 Reto Independiente — Bio con `<p>`

**EN PANTALLA: CANVAS — Laboratorio, Parte 2, punto 2.3.**

> **La acción guiada:**
> 1. Mostrar las instrucciones del punto 2.3 del laboratorio en Canvas.
> 2. Decir: *"Tienen 5 minutos. Solos. Usen la etiqueta de párrafo que vimos y escriban 2 o 3 oraciones sobre ustedes debajo de la foto — quién son, a qué se dedican, por qué están aquí. Cuando terminen, mandan screenshot al chat."*
> 3. Iniciar temporizador visible. El instructor **no codifica durante estos 5 minutos** — solo observa el WhatsApp y felicita los que llegan.

> **Tu explicación teórica precisa (antes de soltar el volante):**
> *"Este es el primer momento en que escriben sin que yo les dicte el código. No es un examen — no hay forma de hacerlo mal si usan `<p>` como contenedor. La única regla: el contenido tiene que ser real, no Lorem. Es su perfil personal."*

> **Pregunta de calibración (al retomar después del reto):**
> *"Alguien que lo quiera compartir — ¿cómo quedó su `<p>` de bio? Léanlo en voz alta o péguenlo en el chat."*
>
> *(Leer 2 o 3 respuestas y comentarlas brevemente. Esto valida el trabajo y da energía al grupo antes del último bloque de código.)*

---

### 5.3 Listas: `<ul>` vs `<ol>` y el truco Emmet

**EN PANTALLA: EXCALIDRAW — Imagen comparativa de lista desordenada vs ordenada (ya preparada).**

> **La acción guiada:**
> 1. Mostrar la imagen en Excalidraw: izquierda `<ul>` con viñetas (hobbies, menú de navegación), derecha `<ol>` con números (pasos de receta, top 3).
> 2. Antes de ir a VS Code, hacer la pregunta de participación.

> **Pregunta de participación:**
> *"Dos escenarios — me dicen qué tipo de lista usarían: Una lista de asistencia de alumnos, ¿ordenada o desordenada? ¿Y los pasos para armar un mueble de IKEA?"*
>
> *(Respuesta esperada: asistencia → desordenada, no importa el orden de los nombres; mueble → ordenada, el orden de los pasos es crítico. Confirmar y agregar: "Menú de navegación de una página web → desordenada. Top 5 películas → ordenada. La pregunta siempre es: ¿importa el orden?")*

> **La acción guiada — VS Code:**
> 1. En el `<body>`, debajo del `<p>` de bio, escribir `<h2>Mis Hobbies</h2>`.
> 2. Demostrar el truco Emmet en vivo: escribir `ul>li*3` y presionar `Enter`.
> 3. Mostrar cómo se genera la estructura completa de golpe.

```html
<h2>Mis Hobbies</h2>
<ul>
    <li>Tocar guitarra</li>
    <li>Senderismo</li>
    <li>Fotografía urbana</li>
</ul>
```

> **Tu explicación teórica precisa:**
> *"`<ul>` es 'Unordered List' — lista sin orden. `<ol>` es 'Ordered List' — lista con orden numérico. Ambas usan la misma etiqueta de ítem adentro: `<li>`, que viene de 'List Item'.*
>
> *El truco que acaban de ver se llama Emmet. Es un sistema de abreviaciones que VS Code entiende. `ul>li*3` se lee como: 'dame un `<ul>` con tres `<li>` adentro'. El símbolo `>` significa 'hijo de', el `*3` significa 'repite 3 veces'. Lo van a usar constantemente — les acaba de ahorrar 6 líneas de escritura en 2 segundos."*

> **Checkpoint obligatorio 5.3:**
> *"Para cerrar este momento necesito ver en sus páginas: foto cargando, párrafo con bio real, y lista de al menos 3 hobbies. Screenshot final al WhatsApp."*

---

### 🚨 Gestión de Riesgos — Momento 5

**La imagen no carga — aparece el ícono de imagen rota:**
- Primera verificación: el nombre del archivo en `src` tiene que coincidir exactamente con el nombre real del archivo, incluyendo la extensión (`foto.jpg` vs `foto.JPG` vs `foto.jpeg` — no es lo mismo en sistemas Mac/Linux).
- Segunda verificación: la imagen debe estar dentro de la carpeta `mi-perfil`, no en otra carpeta.
- Respuesta: *"Revisen que el nombre en el `src` sea exactamente igual al nombre real del archivo. Las mayúsculas importan."*

**Alguien pone la URL de internet en el `src` en lugar de la ruta relativa:**
- Funciona si la URL es válida, pero no es la práctica del laboratorio.
- Respuesta: *"Puede quedar así por ahora para continuar. Pero la tarea es descargar la imagen a la carpeta del proyecto y usar la ruta relativa — así funciona en el mundo real cuando subes la página a internet."*

**Alguien escribe `</img>` como etiqueta de cierre:**
- Es un error muy común que no rompe la página pero es incorrecto.
- Respuesta: *"`<img>` es una etiqueta vacía — no tiene etiqueta de cierre. Si le ponen `</img>`, el navegador lo ignora, pero en un code review lo van a rechazar. Quítenlo."*

**El reto independiente termina y alguien no hizo nada:**
- Sin presión. No es evaluación.
- Respuesta: *"No hay problema — el laboratorio tienen hasta después de clase para terminarlo completo. Los que no lo terminaron hoy lo hacen en casa siguiendo el Canvas. La entrega es el screenshot."*

**Alguien pregunta cómo hacer que la lista se vea distinta (bullets de colores, sin bullets, etc.):**
- Señal positiva — quieren mejorar el diseño.
- Respuesta: *"Eso es CSS y llega en la Clase 02. Lo que hicieron hoy es correcto en HTML — la apariencia se trabaja en la siguiente capa."*

---

## MOMENTO 6 — Cierre
**Tiempo:** 10 min

> **Nota táctica de inicio: {Anclar, no resumir}**
> El cierre no es un resumen de todo lo que se vio — eso aburre y ya lo saben. El cierre tiene 4 trabajos exactos: 1) anclar los 2 o 3 conceptos que más van a necesitar mañana, 2) mostrar físicamente dónde entregar el lab, 3) darles intriga por la Clase 02, y 4) terminar con conexión humana. El orden importa.

---

### 6.1 Repaso ancla — Las 2 preguntas de cierre

**EN PANTALLA: EXCALIDRAW — Canvas con las 2 preguntas de cierre (preparadas).**

> **La acción guiada:**
> 1. Mostrar las preguntas en el canvas. Pedir respuestas por chat.
> 2. Leer 2-3 respuestas en voz alta. Confirmar o corregir brevemente.

**Pregunta 1:** *"Si el atributo `alt` de una imagen está vacío, ¿qué escucha una persona con ceguera cuando su lector de pantalla llega a esa imagen?"*

*(Respuesta esperada: escucha "imagen" o nada — sin descripción, sin contexto. Confirmar: "Por eso el `alt` no es decorativo. Es la voz de la imagen para quien no la ve.")*

**Pregunta 2:** *"¿Cuántos `<h1>` puede tener una página web? ¿Y cuántos `<h2>`?"*

*(Respuesta esperada: un solo `<h1>`, tantos `<h2>` como sean necesarios. Confirmar: "El `<h1>` es único — como el título de un libro. Los `<h2>` son los capítulos — pueden ser varios.")*

---

### 6.2 Instrucciones de entrega — Canvas en vivo

**EN PANTALLA: NAVEGADOR — Canvas del curso, sección de entrega del Lab 01.**

> **La acción guiada:**
> 1. Abrir Canvas. Navegar en vivo: Módulo 1 → Clase 01 → Laboratorio → sección de Entrega.
> 2. Mostrar físicamente el botón de entrega. Hacer clic para que vean dónde está.
> 3. Leer en voz alta los requisitos exactos del entregable.

> **Tu explicación teórica precisa:**
> *"El entregable es un screenshot. No código, no archivo — una captura de pantalla de su página en el navegador. Ese screenshot tiene que mostrar dos cosas obligatorias: su nombre real en el `<h1>` visible en la página, y la URL de `localhost` en la barra de direcciones arriba.*
>
> *¿Por qué esas dos? El nombre confirma que es su trabajo. La URL de `localhost` confirma que está corriendo con Live Server — no es solo una página guardada como archivo.*
>
> *Tienen hasta la Clase 02 para entregar. Los que ya tienen su página funcionando, pueden entregar esta noche. Los que no terminaron el laboratorio en clase, lo completan en casa siguiendo el Canvas — está todo explicado ahí paso a paso."*

> **Checkpoint final:**
> *"Levanten la mano — o escriban 'sí' en el chat — los que ya tienen su nombre en el `<h1>` y su página abierta en el navegador ahora mismo."*
>
> *(Esto da al instructor una última lectura del estado real del grupo antes de cerrar. Los que dicen que no: recordarles que el lab en Canvas los guía a completarlo.)*

---

### 6.3 Preview Clase 02 — La intriga del CSS

**EN PANTALLA: EXCALIDRAW — Mostrar el wireframe del módulo y señalar la capa de estilo.**

> **La acción guiada:**
> 1. Volver al wireframe del perfil personal que mostraron al inicio.
> 2. Señalar la versión sin estilo (lo que construyeron hoy) y la versión con diseño completo.

> **Tu explicación teórica precisa:**
> *"Lo que tienen ahora es el esqueleto correcto. Texto plano, sin color, sin layout — exactamente como tenía que quedar hoy.*
>
> *En la Clase 02 llega CSS. Con CSS van a agregarle colores, tipografía, márgenes y una primera forma de organizar los elementos en pantalla. La misma página que hoy se ve como un documento de Word de los 90 — en la Clase 02 va a empezar a parecer una página web real.*
>
> *Una sola cosa que les adelanto: hay una línea de CSS que cambia el fondo de toda la página. Se escribe en 30 segundos y la transformación es inmediata. Esa va a ser la primera cosa que escribamos juntos en la Clase 02."*

---

### 6.4 Cierre humano

**EN PANTALLA: TEAMS — Tu cámara. Dejar de compartir pantalla.**

> **La acción guiada:**
> 1. Dejar de compartir pantalla. Solo la cámara.
> 2. Mirar al chat y las cámaras del grupo por 15-20 segundos antes de hablar.
> 3. Despedirse brevemente.

> **Tu explicación teórica precisa:**
> *"El primer día siempre es el más difícil. Hay muchas herramientas nuevas, muchos conceptos nuevos, muchos atajos nuevos — y todo al mismo tiempo. Eso es normal. Si hoy salieron con Live Server funcionando y algo visible en el navegador, hicieron exactamente lo que tenían que hacer.*
>
> *La semana que viene construimos encima de esto. No van a empezar desde cero — van a abrir la misma carpeta `mi-perfil` y seguir de donde dejaron. Así se construye una página web: progresivo, capa por capa.*
>
> *Gracias por el tiempo y la energía. Cualquier duda del laboratorio — me escriben por WhatsApp. Nos vemos en la Clase 02."*

---

### 🚨 Gestión de Riesgos — Momento 6

**El tiempo se agotó y no se llegó al cierre:**
- Si el Momento 5 se extendió, comprimir el cierre a: instrucciones de entrega rápidas (2 min) + preview en 1 frase + despedida.
- Lo que NUNCA se puede omitir: mostrar físicamente dónde entregar en Canvas. Sin eso, habrá confusión masiva en las entregas.

**Alguien pregunta si el lab se puede entregar tarde:**
- No es decisión del instructor — es política del curso.
- Respuesta: *"Eso lo coordinas directamente con Gabriela — escríbele por WhatsApp. Ella maneja las fechas y excepciones."*

**Alguien pide ver el código completo de la clase antes de salir:**
- Positivo — quieren comparar su trabajo.
- Respuesta: *"El Canvas tiene la estructura completa que tendrían que tener al final del lab. Lo que hice en pantalla hoy es exactamente lo mismo — solo con mis datos en lugar de los de ustedes."*

---

## Tabla de Tiempos — CLASE 01 v2

| Momento | Foco Principal | Tiempo |
|---------|----------------|--------|
| 1 | Presentaciones + Canvas + wireframe del módulo | 15 min |
| 2 | Cliente-servidor + DevTools + trinidad HTML/CSS/JS | 20 min |
| 3 | Setup: VS Code + extensiones + Hola Mundo | 20 min |
| ⏸ | Receso | 30 min |
| 4 | HTML I: etiquetas + boilerplate + `h1` + `p` | 30 min |
| 5 | HTML II: `<img>` + accesibilidad + bio reto + listas | 25 min |
| 6 | Cierre: repaso ancla + entrega + preview Clase 02 | 10 min |
| _Colchón_ | _Instalaciones tardías, errores de imagen, preguntas_ | _10 min_ |
| **Total** | | **160 min + 20 colchón** |
