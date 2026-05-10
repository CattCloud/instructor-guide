# FLUJO DE PRESENTACION 09

## MOMENTO 0: Apertura del Módulo 3 + Ventajas de IA + Hook (~10 min)

> **Nota táctica de inicio:** Este momento cumple tres funciones a la vez: cerrar el módulo anterior con un reconocimiento real, conectar con la IA que usaron (para que sientan que tienen algo que reportar antes de arrancar), y crear la curiosidad sobre JavaScript con una demo concreta en una página que todos conocen. No es teoría — es activación emocional. No lo cortes para ahorrar tiempo: son los 10 minutos que determinan si el grupo entra con energía o no.
> 

### **1. Reconocimiento del Módulo 2**

**EN PANTALLA: Teams con cámaras encendidas y chat activo.**

> **Tu apertura:***"Hoy arrancamos el Módulo 3 — el último del programa. Pero antes de entrar, necesito que me cuenten algo. En el Módulo 2 usaron IA para programar su página MyLinks por primera vez. Quiero saber una sola cosa: ¿qué ventaja personal sintieron al usar la IA para construir su proyecto? No lo que creen que debería ser la ventaja — lo que ustedes sintieron."*
> 

*(Lanzar al chat. Esperar 60 segundos. Leer respuestas en voz alta mientras llegan.)*

> *(Respuestas esperadas: "ahorré tiempo", "pude hacer más de lo que sabía", "entendí el código que generó", "fue más rápido que hacerlo desde cero".)*
> 

> **Tu respuesta a las participaciones:***"Exacto. Más rapidez, más automatización, menos tiempo en construir desde cero. Y lo que más me interesa de lo que dijeron: la IA como herramienta de aprendizaje — pedirle que explique lo que generó, que identifique errores, que te guíe.*
> 
> 
> *Eso tiene un nombre: programador que usa IA con responsabilidad. No el que copia y pega sin leer. El que guía, evalúa, corrige y aprende en el proceso. Eso son ustedes en este módulo.*
> 
> *Y hablando de aprender con IA: si no conocen Notebook LM, búsquenlo. Es una herramienta gratuita de Google donde subes tus apuntes y te genera videos, cuestionarios, audios, resúmenes. Yo la uso para estudiar. Se los recomiendo de programador a programador."*
> 

### **2. Módulo 3 — El Panorama**

**EN PANTALLA: Presentación con el slide de apertura del Módulo 3.**

> **Tu explicación:***"Módulo 1: construimos la estructura con HTML. Módulo 2: le dimos estilo con CSS, diseñamos en Figma y la publicamos con GitHub Pages usando IA.*
> 
> 
> *Módulo 3: hacemos que esa página deje de ser un póster bonito y empiece a pensar. Ya saben que hay 3 tecnologías para hacer una página web. Vimos las dos primeras. Hoy empieza la tercera: JavaScript.*
> 
> *Y en este módulo vamos a construir un solo proyecto en 4 clases: el juego 'Adivina el Número'. La computadora elige un número del 1 al 100. El usuario intenta adivinarlo. El juego le dice si es muy alto, muy bajo o correcto — y lleva un historial de intentos. Hoy construimos los cimientos."*
> 

> **Pregunta al chat:***"¿Qué creen que hace JavaScript que no puede hacer el HTML ni el CSS? Díganme lo primero que se les ocurra."(Esperar 30 segundos. No corregir aún — el objetivo es medir el punto de partida.)*
> 

### **3. El Hook — YouTube en Vivo**

**EN PANTALLA: Navegador abierto en YouTube — cualquier video musical o canal popular.**

> **Tu explicación:***"Miren esta página de YouTube. Digamos que fue construida con HTML, CSS y JavaScript — que sí lo fue. Ya saben identificar qué hace cada uno.*
> 
> 
> *HTML puso los elementos: los títulos, las imágenes, los botones, el video. CSS los posicionó y les dio estilo — el color de los botones, el hover, el tamaño de la fuente.*
> 
> *Pero ahora yo le doy clic a 'Suscribirse'... y pasa algo. Le doy clic al ícono de guardar... y aparece una ventana. Le doy clic al botón de me gusta... y el número sube. Yo estoy interactuando con la página — y la página me está respondiendo en tiempo real."*
> 

> **La pregunta central:***"¿Quién decidió qué iba a pasar cuando yo hago clic? ¿El HTML? ¿El CSS? ¿O alguien más?"*
> 

*(Esperar respuestas del chat. Cuando alguien diga JavaScript o "el lenguaje de programación":)*

> *"Exacto. JavaScript es el único de los tres que puede leer lo que el usuario hace, tomar una decisión basada en eso, y modificar la página en el momento exacto. Sin recargar. Sin esperar."*
> 

#### **4. La Conexión con su Proyecto MyLinks**

> *"Ahora piensen en su proyecto MyLinks que publicaron la semana pasada. Ese que está vivo en GitHub Pages y cualquiera puede ver. Cuando un visitante hace clic en uno de sus botones de redes sociales y lo lleva a Instagram — ¿quién de los tres lenguajes es el responsable de ese clic?"*
> 

*(Esperar respuesta — la respuesta correcta es HTML, el atributo href en el elemento de enlace.)*

> *"HTML — el atributo de enlace define el destino. Eso es un comportamiento predeterminado por el lenguaje, no es lógica programada. Pero si ese botón tuviera que contar cuántas veces fue clickeado, mostrar un contador en pantalla, o cambiar de color después del primer clic — eso ya necesita JavaScript.*
> 
> 
> *Eso es lo que hacemos hoy."*
> 

## MOMENTO 1: El Algoritmo del Café + JS Secuencial + Conectar JS al HTML (~25 min)

> **Nota táctica de inicio:** Este momento construye el modelo mental antes de tocar código. La dinámica del café no es un juego — es la forma más eficiente de instalar el concepto de "instrucciones precisas para una máquina". Cuando el grupo empieza a darse cuenta de que sus propias instrucciones son ambiguas, el momento de aprendizaje ya ocurrió. Después, conectar JS al HTML es el primer acto técnico de la clase — y tiene que funcionar antes de seguir. No avances al Momento 2 si hay alumnos con la consola vacía.
> 

### **1. La Dinámica del Café — ¿Qué es un Algoritmo?**

**EN PANTALLA: Excalidraw abierto en blanco — no pongas nada preparado de antemano.**

> **Tu apertura:***"Antes de escribir una sola línea de JavaScript, quiero que resolvamos un problema diferente. No les voy a pedir que programen todavía.*
> 
> 
> *Vamos a prepararle un café a una computadora. Una computadora que hace exactamente lo que le dices — ni más, ni menos. Sin sentido común. Sin suponer nada. Solo sigue la instrucción tal como se la escribiste."*
> 

**La mecánica en vivo:**

1. Lanza al chat: *"¿Cuál es el primer paso para preparar un café?"*. Espera 30 segundos.
2. A medida que el grupo responda, escribe cada paso como un rectángulo numerado en Excalidraw: **[1. Poner el café]** → **[2. Agregar agua]** → ...
3. Cuando alguien diga algo vago — como "poner el café" — detente en seco y pregunta: *"¿En qué recipiente? ¿Cuántos gramos? ¿El agua está fría o caliente?"*
4. Cuando alguien diga "hervir el agua" sin especificar tiempo, pregunta: *"¿Por cuánto tiempo? La computadora no sabe cuándo está lista."*
5. Deja que la imprecisión del grupo sea el punto de aprendizaje. No corrijas tú — deja que el resto de la clase note que sus instrucciones no son suficientemente precisas.

*(El momento clave llega cuando el grupo nota que sus instrucciones tienen huecos. Eso es exactamente el problema que tienen los programadores que escriben código vago. No lo digas tú — deja que lo sientan.)*

> **Tu cierre de la dinámica:***"¿Vieron lo que pasó? Nosotros sobre-entendemos los pasos porque somos humanos. Sabemos que 'hervir el agua' implica encender la cocina, esperar, revisar. La computadora no sabe eso. Solo sabe lo que tú le escribiste — exactamente eso y nada más.*
> 
> 
> *Por eso cuando programamos tenemos que ser explícitos. No generales. No 'agregar café' — sino cuántos gramos, en qué recipiente, antes o después de qué otro paso."*
> 

### **2. El Concepto de Algoritmo**

**EN PANTALLA: Excalidraw — el diagrama del café que acaban de construir juntos.**

> **Tu explicación:***"Lo que acaban de construir tiene un nombre técnico: algoritmo. Un algoritmo es una secuencia finita, ordenada y precisa de instrucciones diseñada para resolver un problema o llegar a un resultado.*
> 
> 
> *Tres palabras clave:*
> 
> *Finita — tiene inicio y fin. No puede ser infinita.*
> 
> *Ordenada — el orden importa. Hervir el agua antes o después de echar el café no da el mismo resultado.*
> 
> *Precisa — cada paso es inequívoco. 'Agregar café' no es preciso. '10 gramos de café molido en el filtro' sí lo es.*
> 
> *Un programa de JavaScript es exactamente eso: un algoritmo escrito en un lenguaje que la computadora puede ejecutar."*
> 

> **Pregunta de calibración:***"En el diagrama del café — si olvidamos escribir el paso de encender la cocina antes de hervir el agua, ¿la computadora lo resuelve por contexto o se detiene con error?"(Respuesta esperada: se detiene — la computadora no asume pasos que no están escritos. No hay sentido común, solo instrucciones.)*
> 

### **3. JS es Secuencial — El Cursor que Baja**

**EN PANTALLA: Excalidraw — agrega una flecha vertical que atraviese todos los rectángulos del diagrama de arriba hacia abajo.**

> **Tu explicación:***"JavaScript ejecuta tu código exactamente igual que la computadora ejecuta el algoritmo del café: línea por línea, de arriba hacia abajo, sin saltarse nada. A eso se le llama ejecución secuencial.*
> 
> 
> *Consecuencia directa: si usas algo antes de declararlo, JavaScript no va a buscarlo más abajo en el archivo para resolverlo. Falla en esa línea. La secuencia no se negocia."*
> 

*(Agrega la flecha en el Excalidraw mientras lo explicas — la visualización fija el concepto.)*

### **4. Tres Formas de Escribir JS en HTML**

**EN PANTALLA: Excalidraw o slide con las 3 opciones — dibuja o escribe en vivo.**

> **Tu explicación:***"Existen tres formas de incluir JavaScript en un archivo HTML. Las tres existen, las tres las van a ver en el mundo real — pero nosotros vamos a trabajar siempre con una sola:*
> 
> 
> *Primera — En línea, dentro de atributos HTML como onclick. Funciona para casos muy simples, pero mezcla HTML con lógica y se vuelve imposible de mantener. No la usaremos.*
> 
> *Segunda — Dentro del HTML, entre etiquetas script de apertura y cierre. Útil para ejemplos pequeños, pero el código no se puede reutilizar en otras páginas.*
> 
> *Tercera — Archivo externo punto js. Nuestro método. El código vive en un archivo separado y se conecta al HTML con la etiqueta script y el atributo src. Es la práctica estándar en la industria.*
> 
> *¿Por qué preferimos el archivo externo? Por la misma razón que separamos HTML y CSS en archivos distintos: separación de responsabilidades. HTML tiene su responsabilidad, CSS tiene la suya, JS tiene la suya. Si los mezclas todos en un solo archivo, terminas con código espagueti."*
> 

### **5. Crear y Conectar el Archivo JS — CODE-ALONG**

**EN PANTALLA: VS Code — carpeta del proyecto guess-number-js abierta.**

> **Tu instrucción:***"Abran VS Code en su proyecto guess-number-js. Primero creamos los archivos, luego los conectamos."*
> 

**La secuencia exacta — dictas en vivo mientras los alumnos replican:**

**PASO 1 — Crear index.html:**

El laboratorio ya provee el HTML base. Copiarlo del lab y pegarlo en el archivo. Señalar dos cosas en voz alta:

> *"Vean que el HTML tiene el título 'Adivina el Número' en el h1. Y más abajo — justo antes del cierre del body — hay un comentario que dice 'conecta tu archivo JS aquí'. Ahí es exactamente donde vamos a trabajar."*
> 

**PASO 2 — Crear script.js:**

> *"Nuevo archivo en la misma carpeta que index.html. Lo llamamos script.js — así, todo en minúsculas, con punto js al final. Cuando aparezca el ícono de JS al lado del nombre, está creado correctamente."*
> 

**PASO 3 — Conectar con la etiqueta script:**

> *"Abrimos index.html. Buscamos el cierre del body — esa etiqueta que cierra todo. Justo encima de ahí escribimos la etiqueta script con el atributo src igual a script.js. Así:"*
> 

```html
<script src="script.js"></script>
```

> *"¿Por qué justo antes del cierre del body y no en el head? Porque el navegador lee el HTML de arriba hacia abajo. Si el script corre antes de que el HTML haya terminado de pintarse, puede intentar encontrar elementos que todavía no existen — y nada funciona.*
> 
> 
> *Primero se dibuja todo el HTML. Después, recién entonces, puede JavaScript interactuar con esos elementos. Por eso va al final."*
> 

**PASO 4 — Verificar la conexión:**

> *"Control + clic sobre el nombre del archivo en el atributo src. Si los lleva al archivo script.js, la conexión está bien hecha."*
> 

### **6. El Primer Mensaje — console.log**

**EN PANTALLA: VS Code con script.js abierto + navegador con Live Server activo.**

> **Tu explicación:***"Antes de hablar de console.log, una palabra rápida sobre qué es una función.*
> 
> 
> *Una función es un bloque de instrucciones con nombre que realiza una tarea específica. No vamos a profundizar en funciones hoy — hay una clase dedicada a eso. Pero console.log, prompt y alert son funciones que JavaScript ya incluye por defecto. El navegador las proporciona — no las inventa el programador.*
> 
> *console.log le ordena a la computadora que escriba un mensaje en la Consola del Navegador. Esa consola se abre con F12 y la pestaña Console. No es la pantalla que ve el usuario — es nuestra ventana de diagnóstico para ver qué está pasando dentro del código mientras lo construimos.*
> 
> *El mensaje que quieres mostrar va dentro de los paréntesis."*
> 

**CODE-ALONG — dictas mientras escribes:**

```jsx
console.log("Hola Mundo");
```

> *"Guardamos con Control + S. Abrimos el navegador con Live Server. F12 — pestaña Console. Ahí está el mensaje. La página está en blanco para el usuario — pero nosotros vemos el resultado aquí. Esto es lo que vamos a usar durante toda la clase para confirmar que el código funciona."*
> 

> **Pregunta de calibración:***"Si entro al index.html, borro la etiqueta script y recargo la página — ¿qué aparece en la consola?"(Respuesta esperada: nada — sin la etiqueta script el navegador nunca ejecuta el JS. El vínculo no es automático, es explícito.)*
> 

> **Dato adicional — el orden importa en la consola:***"JavaScript ejecuta línea por línea de arriba hacia abajo — igual que el algoritmo del café. Prueben poner dos console.log seguidos:"*
> 

```jsx
console.log("Hola Mundo");
console.log("Este es mi primer programa");
```

> *"Vean el orden en la consola — aparecen exactamente en el orden en que los escribieron. Si invierten las líneas, el orden se invierte. La secuencia no se negocia."*
> 

> **🚨 Errores Comunes — Momento 1**
> 

| Error | Causa probable | Solución inmediata |
| --- | --- | --- |
| Consola vacía, sin mensaje | La etiqueta script no está en el HTML o src tiene el nombre mal escrito | Verificar ortografía exacta: script.js debe coincidir con el nombre del archivo |
| No encuentra el archivo | index.html y script.js no están en la misma carpeta | Mover los archivos para que estén al mismo nivel |
| Live Server no actualiza | Archivo no guardado | Control + S antes de revisar |

## MOMENTO 2: Variables — let, const y Palabras Reservadas (~25 min)

> **Nota táctica de inicio:** La herramienta pedagógica más poderosa de este momento es el error en vivo. No lo esquives — provócalo. Cuando el alumno ve que la computadora se niega a seguir porque intentaste reasignar una constante, el concepto se graba distinto a cualquier definición escrita. Usa la caja sellada como imagen mental durante todo el momento — es la que usaste en clase y la que más les quedó.
> 

### **1. La Analogía de la Caja**

**EN PANTALLA: Excalidraw — dibuja en vivo una caja con una etiqueta pegada y un contenido adentro.**

> **Tu explicación:***"Imagina una caja física con una etiqueta pegada en el frente. La etiqueta es el nombre de la variable — lo que tú decides llamarla. El contenido de la caja es el valor que guarda. Eso es exactamente una variable: un espacio en la memoria del programa con un nombre y un dato adentro.*
> 
> 
> *Se llaman variables porque el contenido varía — puedes cambiar lo que hay adentro. Hoy la caja tiene un 5. Mañana puede tener un 10. La etiqueta no cambia, el contenido sí.*
> 
> *La declaración es el momento en que le dices al programa: reserva esta caja y llámala así. La inicialización es cuando pones el primer valor adentro. Normalmente hacemos ambas cosas en una sola línea."*
> 

### **2. Palabras Reservadas**

**EN PANTALLA: Excalidraw o slide con ejemplos de palabras reservadas.**

> **Tu explicación:***"Para declarar una variable usamos palabras especiales que JavaScript ya reconoce: let y const. Estas se llaman palabras reservadas o palabras clave. Son instrucciones del lenguaje que tienen un significado fijo — no puedes usarlas como nombres de tus variables.*
> 
> 
> *Algunas palabras reservadas que vamos a usar en este módulo: let, const, if, else, true, false, return, function.*
> 
> *Si intentas llamar a tu variable 'let' o 'const', JavaScript te da un error de sintaxis — no porque hayas hecho algo mal en general, sino porque esas palabras ya están tomadas por el lenguaje."*
> 

### **3. let — La Caja Abierta**

**EN PANTALLA: VS Code — script.js abierto. Excalidraw con la caja de let visible al lado.**

> **Tu explicación:***"Let es la primera forma de declarar una variable. Con let, la caja tiene tapa abierta — puedes cambiar el contenido cuando quieras."*
> 

**CODE-ALONG — dictas mientras escribes:**

```jsx
let nombre = "Eric";
let edad   = 25;
let estaAprendiendo = true;

console.log(nombre);
console.log(edad);
console.log(estaAprendiendo);
```

> *"Anatomía de esa primera línea: let es la palabra clave — le dice a JS que vas a declarar una variable. nombre es el identificador — el nombre que tú eliges para la caja. El signo igual es el operador de asignación — no significa 'es igual a', significa 'recibe el valor de'. Y 'Eric' entre comillas es el valor inicial. El punto y coma cierra la instrucción.*
> 
> 
> *Guardamos, recargamos, verificamos en consola. Los tres valores tienen que aparecer en orden."*
> 

> **Demo — reasignación con let:***"Ahora cambio el contenido de la caja. Nombre pasa de Eric a Jugador:"*
> 

```jsx
nombre = "Jugador";
console.log(nombre);
```

> *"Nota algo importante: la segunda vez no escribo let de nuevo. Let solo se usa cuando creas la variable por primera vez. A partir de ahí, para cambiar el valor, escribes solo el nombre y el nuevo valor. Si pones let dos veces con el mismo nombre, JavaScript te avisa que ese identificador ya existe."*
> 

> **Pregunta de calibración:***"Si al inicio del programa nombre tiene el valor 'Eric', y después escribo nombre igual a 'Jugador', y después console.log de nombre — ¿qué valor aparece en la consola?"(Respuesta esperada: Jugador — la variable guardó el último valor que se le asignó. La caja solo puede tener un valor a la vez; el nuevo reemplaza al anterior.)*
> 

### **4. const — La Caja Sellada**

**EN PANTALLA: Excalidraw — dibuja una segunda caja con candado. Pon el valor adentro y sella la tapa.**

> **Tu explicación:***"Const es la segunda forma. Con const, la caja viene sellada de fábrica. Puedes ver el contenido, usarlo en cualquier parte del código, pero no puedes reemplazarlo. Si lo intentas, JavaScript te detiene — con un error — antes de que el problema llegue más lejos.*
> 
> 
> *Una regla práctica para elegir entre las dos: si el dato no va a cambiar durante la ejecución del programa, usa const. Si sabes que va a cambiar, usa let.*
> 
> *En el proyecto de hoy: el nombre del curso no cambia — const. La cantidad de intentos del jugador sube con cada turno — let."*
> 

**CODE-ALONG:**

```jsx
const NUMERO_SECRETO = 42;
const MAX_INTENTOS   = 10;
const CURSO          = "Code 101";

console.log(NUMERO_SECRETO);
console.log(MAX_INTENTOS);
console.log(CURSO);
```

> *"Convención de escritura: const con nombre en MAYÚSCULAS para valores fijos que no cambian. let con camelCase — primera palabra en minúscula, siguiente palabra empieza en mayúscula — para los que sí cambian. No es una regla del lenguaje, es una convención del equipo que hace el código más legible a primera vista.*
> 
> 
> *Y una regla de const que no tiene let: tienes que crear e inicializar a la vez. No puedes poner const NUMERO y dejarlo vacío para después — te da error inmediatamente. Si no sabes el valor todavía, usa let."*
> 

### **5. El Error en Vivo — La Demostración más Importante del Momento**

**EN PANTALLA: VS Code — script.js.**

> **La acción guiada:***"Ahora vamos a hacer algo a propósito: vamos a intentar cambiar el valor de una constante."*
> 

```jsx
const CURSO = "Code 101";
CURSO = "otro curso";
```

> *"Guardamos. Recargamos. F12 — miren la consola."*
> 

*(Esperar a que aparezca el error en rojo: TypeError: Assignment to constant variable.)*

> *"Ahí está. JavaScript no nos dejó. Lean el error en voz alta: TypeError: Assignment to constant variable.*
> 
> 
> *La caja estaba sellada. No hay forma de abrir esa tapa una vez que la cerraste con const. Si en algún punto del programa alguien — tú mismo o un compañero de equipo — intentara sobreescribir ese valor por error, el lenguaje lo detecta aquí, antes de que el bug llegue a producción.*
> 
> *Ahora comento esa línea del error — con doble barra al inicio — y verifico que todo vuelve a funcionar."*
> 

```jsx
const CURSO = "Code 101";
// CURSO = "otro curso";  ← línea comentada, ya no causa error
console.log(CURSO);
```

> **Pregunta de calibración:***"Si declaro una constante MAX_INTENTOS con valor 10 al inicio del programa, y después en otra parte del código alguien escribe MAX_INTENTOS igual a 20 por accidente — ¿el programa sigue corriendo silenciosamente con 20 o JavaScript lo detiene?"(Respuesta esperada: JavaScript lo detiene con TypeError. Eso es exactamente el valor de const — protege valores que no deben cambiar, aunque alguien lo intente.)*
> 

### **6. LAB Autónomo — Parte 2.1 y 2.2 (10 min)**

**EN PANTALLA: VS Code — script.js del proyecto guess-number-js.**

> **Criterio de éxito antes de soltarlos:***"El éxito de estos 10 minutos se mide cuando en su consola aparezcan su nombre, su edad y si están aprendiendo — usando variables let. Y también aparezcan el nombre del curso y el máximo de intentos — usando constantes const. Eso y nada más."*
> 

Los alumnos completan las Partes 2.1 y 2.2 del lab:

**Parte 2.1 — Variables con let:**
Declarar nombre, edad y estaAprendiendo con valores reales del alumno. Imprimir los tres con console.log. Verificar que aparecen en la consola.

**Parte 2.2 — Variables con const:**
Declarar CURSO con valor "Code 101" y MAX_INTENTOS con valor 10. Intentar reasignar MAX_INTENTOS a 20 (la línea ya está en el lab, solo hay que descomentarla). Observar el error en consola. Volver a comentarla.

*(Circular por pantallas compartidas o preguntar al chat: "¿Quién ya tiene los 5 valores en consola?" — ese es el indicador para avanzar.)*

> **Nota táctica:** Si alguien declara la misma variable dos veces con let, verá el error "Identifier has already been declared". Ese es el momento para reforzar que cada nombre se declara una sola vez — las veces siguientes se asigna sin la palabra clave.
> 

> **🚨 Errores Comunes — Momento 2**
> 

| Error | Causa probable | Solución inmediata |
| --- | --- | --- |
| SyntaxError: Identifier already declared | Variable declarada dos veces con let o const | Cada nombre se declara solo una vez; las veces siguientes se asigna sin la palabra clave |
| TypeError: Assignment to constant variable | Se intentó reasignar un const | Cambiar a let si el valor necesita mutar, o eliminar la reasignación si fue un error |
| ReferenceError: X is not defined | Variable usada antes de declararla | Revisar el orden del código — la declaración va antes del primer uso |
| Missing initializer in const declaration | Se declaró un const sin asignarle valor | Con const hay que declarar e inicializar en la misma línea siempre |

> **Nota táctica de transición:** Las cajas ya tienen nombre y valor. Ahora el siguiente problema es concreto: nombre guarda texto, edad guarda un número, estaAprendiendo guarda verdadero o falso. Esos contenidos no son intercambiables — operar entre ellos sin cuidado produce resultados inesperados. El siguiente momento define qué son exactamente esos tipos y por qué el tipo de un dato es tan importante como su valor.
> 

## MOMENTO 3: Tipos de Dato — string, number, boolean, typeof (~20 min)

> **Nota táctica de inicio:** Los tipos de dato son invisibles a simple vista — el alumno escribe "25" y 25 y no nota la diferencia hasta que algo falla. El objetivo de este momento es hacer esa diferencia visible con dos herramientas: el operador typeof y el código de color de la consola de Chrome. Una vez que el alumno ve con sus propios ojos que 42 es azul y "42" es negro en la consola, el concepto se graba de forma visual. Ese detalle no lo olvidan.
> 

### **1. Los Tres Tipos Primitivos Principales**

**EN PANTALLA: Slide o Excalidraw con los tres tipos y sus ejemplos.**

> **Tu explicación:***"Cada valor en JavaScript tiene un tipo. El tipo define qué operaciones son válidas sobre ese dato y cómo se comporta cuando interactúa con otros.*
> 
> 
> *Los tres tipos primitivos que usamos hoy:*
> 
> *String — texto. Se define con comillas simples, dobles o backticks. Ejemplos: 'Carlos', "Code 101", cualquier cadena de caracteres entre comillas.*
> 
> *Number — números. Enteros y decimales son el mismo tipo. Ejemplos: 42, 3.14, -7. Los decimales van con punto, no con coma.*
> 
> *Boolean — lógico. Solo dos valores posibles: true o false. Sin comillas — si les pones comillas ya es un string, no un booleano.*
> 
> *Hay más tipos — undefined, null, object, function — pero estos tres son el núcleo de hoy."*
> 

### **2. La Regla más Importante del Día — Las Comillas Definen el Tipo**

**EN PANTALLA: Consola de Chrome (F12) abierta — pantalla dividida VS Code y navegador.**

> **Tu explicación:***"Aquí está la regla más importante del momento: las comillas definen el tipo, no el contenido.*
> 
> 
> *42 — número. Puedes hacer matemáticas con él.*
> '42' — texto. Para JavaScript eso es una cadena de dos caracteres: el cuatro y el dos. No es un número.*
> 
> *El valor parece idéntico. El tipo es completamente distinto — y esa diferencia cambia el resultado de cualquier operación que hagas con él."*
> 

**Demo en vivo — consola de Chrome:**

> *"Antes de ejecutar cada línea, predigan el color que va a aparecer. La consola de Chrome codifica el tipo con color: números y booleanos aparecen en azul, strings en negro."*
> 

```jsx
42           // ← ¿de qué color aparece?
"42"         // ← ¿y este?
true         // ← ¿y este?
"true"       // ← ¿igual que el anterior?
```

> *"¿Vieron? El mismo contenido visible — 42, true — pero colores distintos según el tipo. Este detalle visual les va a salvar de muchos bugs. Si ven negro donde esperaban azul, hay un string donde debería haber un número."*
> 

### **3. typeof — El Detective de Tipos**

**EN PANTALLA: VS Code — script.js abierto.**

> **Tu explicación:***"Para saber el tipo de un valor en cualquier momento, JavaScript tiene el operador typeof. Se escribe antes de cualquier valor o variable y devuelve un string con el nombre del tipo. Es el diagnóstico más rápido que existe."*
> 

**Demo en consola — dictas y ejecutas:**

```jsx
typeof 42            // → "number"
typeof "42"          // → "string"
typeof true          // → "boolean"
typeof "true"        // → "string"
typeof undefined     // → "undefined"
```

> *"Cada vez que tengan duda sobre qué tipo tiene una variable, typeof es su primer recurso. Antes de operar con un dato, typeof les confirma con qué están trabajando."*
> 

**Ahora en script.js — las variables que ya tienen:**

```jsx
let nombre = "Carlos";
let edad   = 25;
let estaAprendiendo = true;

console.log(typeof nombre);           // "string"
console.log(typeof edad);             // "number"
console.log(typeof estaAprendiendo);  // "boolean"
```

> *"Vean que agregué un comentario en cada línea con el tipo que espero antes de ejecutar. Eso es un hábito importante: predecir antes de correr. Si el resultado no coincide con lo que esperaban, ahí está el bug."*
> 

> **Pregunta de calibración:***"En su lab declararon la variable estaAprendiendo con valor true. ¿Qué diferencia habría si en lugar de escribir true sin comillas, hubieran escrito 'true' entre comillas?"(Respuesta esperada: con comillas sería un string, no un booleano real. typeof devolvería "string". Cuando en la Clase 10 usen ese valor en un if, el comportamiento sería diferente al esperado. Plantar la pregunta — no profundizar aún en if.)*
> 

### **4. El Gotcha — "25" no es 25**

**EN PANTALLA: Consola de Chrome.**

> **Tu explicación:***"Les voy a mostrar el caso que más bugs produce en principiantes. Miremos esto:"*
> 

```jsx
let a = 25;
let b = "25";

console.log(typeof a);   // "number"
console.log(typeof b);   // "string"
```

> *"A simple vista parecen lo mismo. Pero si intentaran hacer a + b, el resultado no sería 50. Les adelanto por qué — lo vemos en detalle en el Momento 4, que es exactamente la trampa que produce ese problema. Por ahora se quedan con esto: mismos caracteres, tipo diferente, comportamiento diferente."*
> 

### **5. undefined y null — Dos Casos Especiales**

**EN PANTALLA: Consola de Chrome.**

> **Tu explicación:***"Dos casos que van a ver frecuentemente:*
> 
> 
> *undefined — variable declarada pero sin valor asignado todavía. JavaScript la crea pero no sabe qué poner adentro. Es una sorpresa — olvidaste asignar algo.*
> 
> *null — ausencia intencional de valor. El programador dice explícitamente 'esta caja está vacía a propósito'. Es una decisión, no un olvido.*
> 
> *La diferencia en una frase: undefined es accidental, null es intencional."*
> 

**Demo rápida — 60 segundos:**

```jsx
let sinValor;
console.log(sinValor);           // undefined
console.log(typeof sinValor);    // "undefined"

let vacioPropósito = null;
console.log(vacioPropósito);     // null
console.log(typeof vacioPropósito); // "object"
```

> *"Ahí hay un dato curioso: typeof null devuelve 'object'. Eso es un bug histórico de JavaScript — existe desde 1995 y no lo han corregido porque cambiaría el comportamiento de millones de páginas web. No es un error de ustedes. Es un dato de cultura que cada programador JavaScript conoce."*
> 

### **6. LAB Autónomo — Parte 2.1 continuación (5 min)**

**EN PANTALLA: VS Code — script.js del proyecto guess-number-js.**

> **Criterio de éxito:***"El éxito de estos 5 minutos se mide cuando en su consola aparezcan los tipos de las tres variables que declararon en el lab anterior — y puedan explicar por qué typeof de su variable edad NO devuelve 'string'."*
> 

Los alumnos agregan typeof para verificar el tipo de nombre, edad y estaAprendiendo. La mecánica es siempre la misma: predecir en un comentario antes de ejecutar, luego verificar.

```jsx
// ¿Qué tipo espero?   string
console.log(typeof nombre);

// ¿Qué tipo espero?   number
console.log(typeof edad);

// ¿Qué tipo espero?   boolean
console.log(typeof estaAprendiendo);
```

> **Pregunta de cierre al chat:***"¿Alguien obtuvo un tipo diferente al que esperaba? ¿Cuál variable y qué tipo le salió?"*
> 
> 
> *(Ese caso es el más valioso del momento — compartir pantalla y diagnosticar juntos. Si el resultado fue "string" en una variable que debería ser number, casi siempre es porque el valor fue declarado entre comillas.)*
> 

> **🚨 Errores Comunes — Momento 3**
> 

| Error | Causa probable | Solución inmediata |
| --- | --- | --- |
| typeof devuelve "string" en una variable numérica | El valor fue asignado con comillas: let edad = "25" | Quitar las comillas si es un número real: let edad = 25 |
| typeof null devuelve "object" | Bug histórico de JavaScript — no es error del alumno | Aclarar que null es null, el typeof de null es conocidamente incorrecto |
| Variable aparece como undefined en consola | Se declaró la variable pero nunca se le asignó valor | Asegurarse de inicializar: let nombre = "Carlos", no solo let nombre |
| true entre comillas no funciona como esperaban en lógica | Se declaró como string en lugar de booleano | Booleanos van sin comillas — true, false, nunca "true", "false" |

---

> **Nota táctica de transición:** Ahora ya saben qué tipo tiene cada caja. El siguiente problema es operar entre ellas — sumar, restar, concatenar. Y ahí aparece la trampa más famosa de JavaScript: el operador + que no se comporta igual con números que con texto. Eso es el Momento 4.
> 

## **MOMENTO 4: Operadores Aritméticos + La Trampa del + (~15 min)**

> **Nota táctica de inicio:** El orden de este momento importa. Empieza con la demo de '5' + 3 ANTES de explicar nada. Deja que el resultado los sorprenda — ese momento de confusión activa la atención mejor que cualquier slide. El cerebro recuerda las cosas que no entendió antes de que se las explicaran, mucho más que las que se explican de antemano. Provoca la sorpresa, luego explicas por qué.
> 

### **1. La Demo Sorpresa — Sin Introducción**

**EN PANTALLA: Consola de Chrome (F12) abierta.**

> **La acción:**
Sin introducción, sin contexto, escribe en la consola y pide que predigan el resultado:
> 

```jsx
5 + 3
```

> *(Respuesta obvia: 8)*
> 

> *"Bien. Ahora miren esto:"*
> 

```jsx
"5" + 3
```

*(Pausa de 3 segundos. Deja que el resultado — "53" — aparezca. No lo expliques todavía.)*

> **Al chat:***"¿Por qué? Tómense 30 segundos y díganme."*
> 

*(Esperar en silencio. El silencio trabaja a favor. No interrumpas con la respuesta.)*

### **2. Los Operadores Aritméticos — Repaso Rápido**

**EN PANTALLA: Consola de Chrome.**

> **Tu explicación:***"Antes de responder el por qué del 53, veamos los operadores disponibles. Son cinco — los van a usar en cada proyecto del módulo:"*
> 

**Demo en consola — ejecutar rápido sin detenerse mucho:**

```jsx
20 + 7     // → 27   suma
20 - 7     // → 13   resta
20 * 7     // → 140  multiplicación
20 / 4     // → 5    división
20 % 7     // → 6    módulo
```

> *"Cuatro operadores los conocen de la matemática de toda la vida. El quinto — el signo de porcentaje — puede ser nuevo. Se llama módulo y devuelve el residuo de una división.*
> 
> 
> *20 dividido 7 da 2 con residuo 6. El módulo devuelve ese 6. ¿Para qué sirve? Por ejemplo, para saber si un número es par: si número módulo 2 da 0, el número es par. Si da 1, es impar. Lo van a usar en el proyecto.*"
> 

> **Pregunta rápida al chat:***"Sin ejecutar — ¿cuánto da 15 módulo 4? Tómense 10 segundos."(Respuesta esperada: 3 — porque 4 cabe 3 veces en 15 y sobran 3. Verificar en consola después de que respondan.)*
> 

### **3. La Trampa del + — Ahora sí la Explicación**

**EN PANTALLA: Consola de Chrome.**

> **Tu explicación:***"Volvemos al misterio del 53. El operador + tiene dos trabajos completamente distintos:*
> 
> 
> *Trabajo 1 — Suma matemática. Cuando ambos valores son números: 5 + 3 da 8.*
> 
> *Trabajo 2 — Concatenación de texto. Cuando al menos uno de los valores es string: '5' + 3 da '53'.*
> 
> *JavaScript revisa los tipos de los dos valores. Si detecta al menos un string, abandona las matemáticas y empieza a pegar cadenas — como si fueran piezas de lego. No te avisa. No te pregunta. Simplemente lo hace.*
> 
> *El resultado no es el número 53 — es el texto '53'. Una cadena formada por el carácter 5 y el carácter 3, pegados.*"
> 

**Demo comparativa — la asimetría del +:**

```jsx
"5" + 3    // → "53"   concatena — el + vio un string
"5" - 3    // →  2     resta — convierte '5' a número automáticamente
"5" * 2    // → 10     multiplica — igual
"5" / 1    // →  5     divide — igual
```

> *"Noten la asimetría: el + concatena cuando hay strings. Los otros cuatro operadores intentan convertir el string a número automáticamente. Solo el + tiene ese doble comportamiento.*
> 
> 
> *¿Por qué solo el +? Porque la suma y la concatenación comparten el mismo símbolo — y JavaScript tuvo que elegir. Cuando hay texto de por medio, decidió que el + significa pegar, no sumar.*
> 
> *Esto no es un bug — es una decisión de diseño del lenguaje. Conocerla les ahorra horas de debugging."*
> 

### **4. NaN — Not a Number**

**EN PANTALLA: Consola de Chrome.**

> **Tu explicación:***"Un caso más antes del lab. ¿Qué pasa si intentas hacer matemáticas con algo que definitivamente no se puede convertir a número?"*
> 

```jsx
"abc" * 2          // → NaN
Number("87abc")    // → NaN
```

> *"NaN significa Not a Number — no es un número. Aparece cuando una operación matemática recibe un dato que no puede interpretar como número.*
> 
> 
> *Lo curioso: si hacen typeof de NaN, JavaScript dice 'number'. Sí, NaN es de tipo number — es el número que representa la ausencia de un número válido. Otro dato de cultura.*
> 
> *Cuando en el Momento 5 pidan la edad con prompt y el usuario escriba letras en lugar de números, el resultado de convertirlo será NaN. Ya saben qué es cuando lo vean."*
> 

### **5. LAB Autónomo — Parte 3.1 y 3.2 (5 min)**

**EN PANTALLA: VS Code — script.js del proyecto guess-number-js.**

> **Criterio de éxito:***"El éxito de estos 5 minutos se mide cuando hayan ejecutado los cinco operadores con sus propios valores y — más importante — cuando puedan predecir y explicar qué dan '5' + 3 versus '5' - 3 sin equivocarse."*
> 

Los alumnos completan las Partes 3.1 y 3.2 del lab:

**Parte 3.1 — Operadores con variables propias:**
Declarar dos variables numéricas con valores que elijan. Ejecutar los cinco operadores y observar el resultado de cada uno. Completar los que faltan en el lab.

**Parte 3.2 — La trampa del +:**
Ejecutar en consola las tres combinaciones del lab — '5' + 3, 5 + 3 y '5' - 3 — y anotar en un comentario el resultado y el tipo antes de ejecutar, luego verificar.

> **Pregunta de cierre al chat:***"¿Alguien obtuvo algo diferente a lo que esperaba con el +? ¿Qué pasó exactamente?"*
> 
> 
> *(El alumno que se confundió es el ejemplo pedagógico del momento — pedir pantalla compartida y diagnosticar en vivo. Ese es el cierre más potente de este bloque.)*
> 

> **🚨 Errores Comunes — Momento 4**
> 

| Error | Causa probable | Solución inmediata |
| --- | --- | --- |
| El + concatena cuando debería sumar | Un operando es string sin darse cuenta | Usar typeof antes de operar para verificar el tipo |
| '5' + 3 da "53" en lugar de 8 | Un operando es string — el + concatena | Convertir a número primero con Number() — lo vemos en el Momento 5 |
| NaN en una operación aritmética | Se intentó hacer matemáticas con texto no numérico | Verificar el tipo del dato; si viene de prompt, hay que convertirlo |
| El módulo no da el resultado esperado | Confusión entre división y residuo | El módulo no da el cociente — da lo que sobra después de dividir |

> **Nota táctica de transición:** Ahora tienen el problema perfectamente planteado — prompt siempre devuelve un string, y el + concatena en lugar de sumar si no se convierte. ¿Cómo se convierte? El Momento 5 resuelve exactamente eso: Number(), parseInt(), y la forma moderna de construir mensajes sin usar el + para unir texto.
> 

## MOMENTO 5: prompt(), Conversión de Tipos y Template Literals (~25 min)

> **Nota táctica de inicio:** Este es el momento donde todo converge. El alumno ya sabe que prompt devuelve un string y que el + concatena cuando hay strings. Ahora tiene las herramientas para resolverlo. El entregable concreto — pedir nombre y edad, mostrar un saludo con Template Literal y calcular el año de nacimiento correctamente — es el resultado más visible de toda la clase. Cuando el alumno ve que el año de nacimiento sale bien en lugar de concatenarse, entiende en el acto por qué Number() importa.
> 

### **1. prompt() — La Entrada del Usuario**

**EN PANTALLA: VS Code — script.js abierto.**

> **Tu explicación:***"Hasta ahora pusimos los datos directamente en el código — let nombre = 'Carlos'. Pero en el proyecto real, el dato lo pone el usuario. Para eso existe prompt.*
> 
> 
> *prompt es una función que abre un cuadro de diálogo en el navegador y espera que el usuario escriba algo. Cuando el usuario presiona Aceptar, devuelve lo que escribió.*
> 
> *Y aquí está el dato más importante del momento: prompt siempre devuelve un string. Sin importar si el usuario escribió números, letras o emojis — el resultado es siempre texto. Siempre.*
> 
> *Si el usuario presiona Cancelar o cierra el cuadro sin escribir nada, prompt devuelve null.*
> 
> *La sintaxis: let valor = prompt('Mensaje para el usuario') — el mensaje entre comillas es lo que aparece en el cuadro."*
> 

**CODE-ALONG — dictas mientras escribes:**

```jsx
let nombreUsuario = prompt("¿Cómo te llamas?");
console.log("El usuario dijo:", nombreUsuario);
console.log("Tipo:", typeof nombreUsuario);
```

> *"Guardamos, recargamos. El cuadro aparece. Escriben su nombre, presionan Aceptar. Miren la consola — el nombre y el tipo. typeof va a decir 'string'. Siempre.*
> 
> 
> *Ahora hagamos lo mismo con la edad:"*
> 

```jsx
let edadUsuario = prompt("¿Cuántos años tienes?");
console.log("Edad:", edadUsuario, "| Tipo:", typeof edadUsuario);
```

> *"El usuario escribe 25 — un número. ¿Qué devuelve typeof? String. No number. La función prompt no distingue — devuelve todo como texto. Si ahora intentaran calcular edadUsuario más 5 para saber en cuántos años cumplirán 30, ¿qué resultado obtienen?"*
> 

> **Pregunta de calibración:***"Sin ejecutar — si edadUsuario es el string '25', ¿qué da edadUsuario + 5?"(Respuesta esperada: '255' — concatena. La solución es la conversión que verán a continuación.)*
> 

### **2. Conversión Explícita — Number() y parseInt()**

**EN PANTALLA: VS Code y consola de Chrome divididos.**

> **Tu explicación:***"Cuando necesitamos trabajar matemáticamente con un dato que llegó como string — por ejemplo, desde prompt — hacemos una conversión explícita: le decimos al motor de JS exactamente qué tipo queremos.*
> 
> 
> *Tres funciones para convertir a número:*
> 
> *Number() — conversión general. Si no puede convertir todo el string, devuelve NaN. Maneja enteros y decimales. Es la opción por defecto para datos de prompt.*
> 
> *parseInt() — lee la parte entera del string hasta que encuentra algo no numérico. parseInt de '25px' devuelve 25. Si el string no empieza con número, devuelve NaN.*
> 
> *parseFloat() — igual que parseInt pero respeta los decimales. parseFloat de '3.14abc' devuelve 3.14.*
> 
> *Regla práctica: para datos de prompt, usar Number() primero. Si necesitas garantizar un entero, usar parseInt()."*
> 

**Demo en consola:**

```jsx
Number("25")        // → 25
Number("3.14")      // → 3.14
Number("25px")      // → NaN   no puede convertir todo
Number("")          // → 0     string vacío da 0, ojo con esto

parseInt("25px")    // → 25    lee hasta donde puede
parseInt("abc")     // → NaN   no empieza con número

parseFloat("3.14abc") // → 3.14
```

> *"Señalo el gotcha de Number vacío: Number de string vacío devuelve 0, no NaN. Eso significa que si el usuario presiona Aceptar sin escribir nada y aplican Number(), el resultado es 0 — un valor silencioso que puede generar bugs difíciles de detectar. Tenganlo en cuenta."*
> 

> **Pregunta de calibración:***"El usuario escribe '  25  ' con espacios al inicio y al final en el prompt. ¿Number de eso devuelve 25, NaN o 0?"(Respuesta esperada: 25 — Number ignora los espacios en blanco al inicio y al final automáticamente. Útil para inputs de usuario que suelen tener espacios accidentales.)*
> 

### **3. Template Literals — La Forma Moderna de Construir Texto**

**EN PANTALLA: VS Code — script.js.**

> **Tu explicación:***"Para armar mensajes combinando texto y variables, hasta ahora usaríamos concatenación con el + — y ya saben que el + entre texto es una trampa constante. La forma moderna resuelve ese problema:*
> 
> 
> *Un Template Literal se escribe con backticks — esa tilde invertida que está arriba de la tecla Tab — en lugar de comillas. Dentro, las variables o expresiones se insertan usando el símbolo de dólar seguido de llaves.*
> 
> *Dentro de esas llaves puede ir cualquier expresión JavaScript válida: variables, operaciones, llamadas a funciones, comparaciones."*
> 

**CODE-ALONG — comparativa en vivo:**

```jsx
let nombre = "Carlos";
let edad   = 25;

// Forma antigua — concatenación con +
let saludo1 = "Hola " + nombre + ", tienes " + edad + " años.";

// Forma moderna — Template Literal
let saludo2 = `Hola ${nombre}, tienes ${edad} años.`;

// Expresión dentro de ${}
let saludo3 = `Hola ${nombre}, el próximo año tendrás ${edad + 1} años.`;

console.log(saludo1);
console.log(saludo2);
console.log(saludo3);
```

> *"Guardamos y verificamos. Los tres muestran el resultado correcto — pero saludo3 calculó edad + 1 antes de insertarlo. El + dentro de las llaves es matemático, no concatenación — el contexto cambia todo.*
> 
> 
> *¿Por qué preferir Template Literals? Menos símbolos, menos posibilidad de perder un espacio o una comilla, y el código se lee de corrido como una oración."*
> 

> **Pregunta de calibración:***"Si dentro de las llaves escribo 3 + '5' — ¿qué aparece en el string resultante: 8 o 35?"(Respuesta esperada: 35 — dentro de las llaves JavaScript evalúa la expresión y como hay un string, el + concatena. El Template Literal no protege de la trampa del + — solo hace el texto más legible. La conversión sigue siendo responsabilidad del programador.)*
> 

### **4. LAB Principal — Interacción + Conversión + Template Literals (10 min)**

**EN PANTALLA: VS Code — script.js del proyecto guess-number-js.**

> **Criterio de éxito antes de soltarlos:***"El éxito de estos 10 minutos se mide cuando su programa haga tres cosas: pedir nombre y edad con prompt, mostrar un alert con el saludo armado como Template Literal, y en la consola mostrar el año de nacimiento como número — no como texto concatenado. Si el año de nacimiento sale algo como '202625', el Number() no se aplicó."*
> 

Los alumnos completan las Partes 2.3, 3.3 y 3.4 del lab:

**Parte 2.3 — Interacción con prompt:**

```jsx
let nombreUsuario = prompt("¿Cómo te llamas?");
let edadUsuario   = prompt("¿Cuántos años tienes?");

console.log("Nombre:", nombreUsuario, "| Tipo:", typeof nombreUsuario);
console.log("Edad:",   edadUsuario,   "| Tipo:", typeof edadUsuario);
```

**Parte 3.3 — Saludo con Template Literal:**

```jsx
alert(`Hola ${nombreUsuario}, tienes ${edadUsuario} años.`);
```

**Parte 3.4 — Calculadora con conversión:**

```jsx
let anioActual     = 2026;
let anioNacimiento = anioActual - Number(edadUsuario);

console.log(`${nombreUsuario}, naciste aproximadamente en ${anioNacimiento}.`);
```

> **Commit sugerido al terminar:***"feat: interacción con prompt, conversión con Number y Template Literals"*
> 

> **Pregunta de cierre al chat:***"¿Alguien tuvo un año de nacimiento extraño — un número muy raro o NaN? ¿Qué creen que pasó?"*
> 
> 
> *(Si el resultado fue algo como '2026NaN' o un número imposible, el bug es que Number no se aplicó correctamente o el usuario canceló el prompt devolviendo null. Ese caso en vivo es el cierre pedagógico más potente del momento.)*
> 

> **🚨 Errores Comunes — Momento 5**
> 

| Error | Causa probable | Solución inmediata |
| --- | --- | --- |
| El año de nacimiento sale como "202625" | edadUsuario no se convirtió antes de restar | Envolver el valor en Number() antes de la resta |
| NaN en el resultado del año | El usuario canceló el prompt o escribió texto | Number de null o texto no numérico da NaN; verificar que el usuario complete el campo |
| El alert no aparece | El navegador tiene pop-ups bloqueados | Habilitar en la barra de dirección — ícono de escudo o configuración de sitio |
| Error de sintaxis en el Template Literal | Se usaron comillas normales en lugar de backticks | El backtick está arriba de la tecla Tab — no es una comilla normal ni un apóstrofe |

> **Nota táctica de transición:** El alumno ya puede capturar datos del usuario, convertirlos al tipo correcto y armar mensajes dinámicos. El Momento 6 cierra la clase: verificar el estado del código, hacer el commit final y conectar lo de hoy con lo que viene en la Clase 10.
> 

## MOMENTO 6: Verificación del Lab + Commit Final (~10 min)

### **1. Verificación Colectiva del Lab**

**EN PANTALLA: Teams — pedir pantallas compartidas o screenshots al chat.**

> **Tu instrucción:***"Antes de cerrar, necesito ver evidencia. No de palabra — en pantalla. Compartan su consola o manden un screenshot al chat con dos cosas visibles: el año de nacimiento en la consola y el alert funcionando."*
> 

*(Esperar 60-90 segundos mientras llegan las capturas o comparten pantalla.)*

**Lo que debes verificar en cada pantalla:**

| Indicador | Estado esperado | Bug frecuente |
| --- | --- | --- |
| Año de nacimiento | Número de 4 dígitos — ejemplo: 2001 | Sale como "202625" → Number() no se aplicó |
| Alert con saludo | Cuadro visible con nombre real del alumno | No aparece → pop-ups bloqueados |
| Consola sin errores en rojo | Ningún error visible | Error rojo → revisar sintaxis del Template Literal o nombre de variable |
| Tipo de edadUsuario antes de convertir | "string" | "number" antes de Number() → el alumno ya convirtió antes de tiempo |

> **Si alguien tiene el año concatenado — diagnóstico en vivo:***"¿Me pueden mostrar la línea donde calculan el año de nacimiento? Quiero ver si Number() está envolviendo a edadUsuario o si está afuera.*
> 
> 
> *Si sale '202625', la resta nunca ocurrió — el + pegó los strings. La línea correcta es: anioActual menos Number de edadUsuario, no anioActual menos edadUsuario directo."*
> 

> **Si alguien tiene NaN:***"NaN en el año de nacimiento casi siempre significa una de dos cosas: el usuario canceló el prompt — lo que devuelve null — o escribió texto en lugar de un número. Number de null y Number de texto no numérico ambos dan NaN. Para hoy es suficiente con saber de dónde viene — la validación de inputs la veremos más adelante."*
> 

> **Nota táctica:** No pasar al commit hasta que al menos el 80% tenga el año de nacimiento correcto en consola. Si hay muchos bloqueados, hacer el ejemplo de referencia en pantalla antes de avanzar.
> 

### **2. Commit Final**

**EN PANTALLA: VS Code — terminal integrada.**

> **Tu instrucción:***"Bien. Todo verificado. Ahora guardamos el trabajo de hoy de forma permanente en el repositorio."*
> 

**CODE-ALONG — dictas mientras ejecutas:**

```bash
git add index.html script.js
git commit -m "feat: fundamentos JS — variables, tipos, operadores, prompt y template literals"
git push
```

> *"Abran GitHub en el navegador y refresquen su repositorio. El commit tiene que aparecer ahí con el mensaje que escribieron. Si el mensaje dice solo 'update' o 'cambios', no es descriptivo — un buen mensaje le dice a cualquier persona qué se hizo en ese commit sin tener que abrir el código."*
> 

> **Pregunta de calibración:***"Si en tres semanas necesitan volver a este commit para recordar qué aprendieron hoy, ¿el mensaje 'feat: fundamentos JS — variables, tipos, operadores, prompt y template literals' les dice algo útil? ¿O preferirían leer 'update'?"*
> 
> 
> *(No hay una sola respuesta correcta — el objetivo es que empiecen a pensar en el commit como documentación, no como un trámite. Un mensaje específico vale más que un mensaje genérico, siempre.)*
>