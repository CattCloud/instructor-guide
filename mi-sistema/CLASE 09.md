# FLUJO DE PRESENTACIÓN - CLASE 09
## "JavaScript: El Lenguaje que Hace Cosas"

> **Resumen de la Clase:** En esta sesión los alumnos dan su primer paso real con JavaScript. Partiendo del HTML y CSS que ya dominan, van a conectar su primer archivo `.js`, capturar datos del usuario, declarar variables, identificar tipos de dato, operar con ellos y construir mensajes dinámicos. Todo va de la mano: cada concepto teórico se prueba en la consola o en el código inmediatamente después de explicarlo. El entregable del día es el esqueleto funcional del proyecto "Adivina el Número".

---

## MOMENTO 0: Bienvenida al Módulo 3 + Hook
**Tiempo:** 5 min

> **Nota táctica de inicio: {Romper el umbral de intimidación}**
> JavaScript tiene reputación de ser difícil. El alumno llega con ese sesgo instalado. El objetivo de este momento no es explicar nada técnico — es que el alumno entre al tema con curiosidad en lugar de miedo. Conectar lo que ya saben (HTML responde a clics) con la pregunta de "¿pero quién hace que algo pase?" crea la capa de urgencia perfecta para el resto de la clase.

---

### 0.1 Arranque del Módulo 3

**EN PANTALLA: PRESENTACIÓN CANVA — Slide de apertura del Módulo 3. Título: "Módulo 3: JavaScript". Subtítulo: "La web que ya hiciste. Ahora, la web que piensa."**

> **La acción guiada:**
> 1. Da la bienvenida al nuevo módulo con energía marcada. El cambio de módulo es un hito, no una clase más.
> 2. Reconoce el recorrido: *"Módulo 1: construimos la estructura con HTML. Módulo 2: le dimos estilo con CSS y la publicamos en internet con GitHub Pages. Y hoy, Módulo 3, hacemos que esa página deje de ser un póster bonito y empiece a pensar."*
> 3. Abre el chat de Teams por 30 segundos: "¿Quién me puede decir qué cree que hace JavaScript? Sin buscar, lo que se les ocurra."

*(Espera respuestas espontáneas. Acepta todas sin corrección aún. El objetivo es medir el punto de partida emocional e intelectual del grupo.)*

---

### 0.2 El Hook: "¿Qué hace que algo pase?"

**EN PANTALLA: NAVEGADOR — Abre una página simple que tenga un botón funcional: por ejemplo, el contador de "Me gusta" en cualquier red social, o activa el Live Server del proyecto MyLinks de la clase anterior.**

> **Tu explicación teórica precisa:**
> "Quiero que miren este botón. Con HTML puse el botón. Con CSS lo hice ver bien. Pero cuando hago clic... algo pasa. Un número sube. Un color cambia. Una ventana aparece. La pregunta es: ¿quién decidió que eso iba a suceder? ¿El HTML? No, el HTML no toma decisiones. ¿El CSS? Tampoco, el CSS no ejecuta lógica.
>
> La respuesta es **JavaScript**. JavaScript es el único lenguaje nativo de los navegadores que puede leer lo que el usuario hace, tomar decisiones basadas en eso, y modificar la página en tiempo real. Sin recargar. Sin esperar. En el momento exacto."

> **Pregunta de calibración:**
> *"En su proyecto MyLinks que publicaron la semana pasada — ese que está vivo en GitHub Pages y cualquiera puede ver — si un visitante hace clic en uno de sus botones de redes sociales... ¿quién de los tres lenguajes, HTML, CSS o JavaScript, es el responsable de que ese clic lleve a la persona a Instagram?"*
>
> *(Respuesta esperada: HTML — el atributo `href` en el `<a>` define el destino. Esta pregunta establece que JavaScript no es el único que hace cosas, pero es el único que puede reaccionar a decisiones complejas del usuario y modificar lo que se muestra.)*

---

### 0.3 El Proyecto del Módulo: "Adivina el Número"

**EN PANTALLA: PRESENTACIÓN CANVA — Slide que muestra una pantalla de juego terminada de "Adivina el Número" (captura del resultado final del Módulo 3).**

> **Tu explicación teórica precisa:**
> "Durante estas 4 clases vamos a construir juntos el juego 'Adivina el Número'. La computadora elige un número del 1 al 100. Tú ingresas tu intento. El juego te dice si tu número es muy alto, muy bajo, o correcto. Puedes intentarlo varias veces y lleva un historial de tus intentos.
>
> Hoy, Clase 9, vamos a construir los cimientos: guardar datos, capturar lo que escribe el usuario, y mostrar resultados en la consola. Al final de esta clase ya tendrán un `script.js` vivo conectado a su HTML."

> **Preguntas de Activación:**
> 1. Si el juego "Adivina el Número" tiene que comparar el intento del usuario contra el número secreto para decidir si es muy alto, muy bajo o correcto — ¿ese trabajo lo puede hacer el HTML o necesariamente necesita algo más?
>    *(Respuesta esperada: Necesita algo más — una lógica de decisión. Es el gancho perfecto hacia JavaScript como ejecutor de lógica. No esperes que digan "condicionales", solo que noten que HTML no toma decisiones.)*
> 2. Si el número secreto del juego se genera diferente cada vez que recargas la página, ¿dónde tiene que vivir ese número para que el juego pueda compararlo con el intento del usuario más adelante?
>    *(Respuesta esperada: En algún lugar de la memoria del programa — esto introduce la necesidad de las variables, que verán en el Momento 2.)*

---


---

## MOMENTO 1: El Lenguaje y el Entorno
**Tiempo:** 20 min

> **Nota táctica de inicio: {Construir el modelo mental antes del código}**
> Antes de abrir VS Code, el alumno necesita entender cómo piensa una computadora. La dinámica del café transforma el concepto abstracto de "algoritmo" en algo ridículamente concreto. Cuando después abras el `script.js`, el alumno ya tiene el modelo mental: "el código se ejecuta línea por línea, exactamente como instrucciones precisas". Haz el Excalidraw en vivo — no pongas la imagen lista. Construye el diagrama con los aportes de la clase.

---

### 1.1 La Dinámica del Café — ¿Qué es un Algoritmo?

**EN PANTALLA: PRESENTACIÓN CANVA — Slide con la pregunta: "Si tuvieras que explicarle a una computadora cómo preparar un café, ¿qué pasos le darías? ¿Cuántos necesitas?"**

> **Tu explicación teórica precisa:**
> "Antes de escribir una sola línea de JavaScript, quiero que resolvamos un problema diferente. No voy a pedirles que programen todavía. Solo quiero que me digan, paso a paso, cómo se prepara un café. Pero tienen que explicárselo a alguien que hace exactamente lo que le dices, ni más ni menos. Sin excepciones. Sin sentido común. Solo sigue la instrucción."

> **La acción guiada:**
> 1. Abre **Excalidraw** en pantalla limpia. No pongas nada preparado de antemano.
> 2. Lanza la pregunta al chat de Teams: *"¿Cuál es el primer paso para preparar un café?"*. Espera 30 segundos.
> 3. A medida que el chat responda, dibuja cada paso como un rectángulo numerado: `[1. Poner el café]` → `[2. Agregar agua]` → ...
> 4. Cuando alguien diga algo vago (ej: "poner el café"), detente en seco y pregunta: *"¿En qué recipiente? ¿Cuántos gramos? ¿El agua está fría o caliente?"*
> 5. Deja que la imprecisión del grupo sea el punto de aprendizaje. No corrijas tú — deja que el resto de la clase note que las instrucciones no son suficientemente precisas.

*(El momento "ajá" llega cuando la clase nota que sus propias instrucciones son ambiguas. Eso es exactamente el problema que tienen los programadores que escriben código vago.)*

---

### 1.2 TEORÍA: El Concepto de Algoritmo

**EN PANTALLA: EXCALIDRAW — El diagrama del café que acaban de construir juntos.**

> **Tu explicación teórica precisa:**
> "Lo que acaban de construir juntos tiene un nombre técnico: **algoritmo**. Un algoritmo es una secuencia finita, ordenada y precisa de instrucciones diseñada para resolver un problema o llegar a un resultado.
>
> Tres palabras clave que todo buen algoritmo cumple:
> - **Finita:** Tiene inicio y fin. No puede ser infinito.
> - **Ordenada:** El orden importa. Hervir el agua antes o después de echar el café no da el mismo resultado.
> - **Precisa:** Cada paso es inequívoco. 'Agregar café' no es preciso. 'Agregar 10 gramos de café molido al filtro' sí lo es.
>
> Un programa de JavaScript es exactamente eso: un algoritmo escrito en un lenguaje que la computadora puede ejecutar."

> **Preguntas de Activación:**
> 1. En el diagrama del café — si olvidas escribir el paso "conectar la cafetera" antes de "hervir el agua", ¿el algoritmo produce un error o simplemente lo resuelve por contexto?
>    *(Respuesta esperada: Error — la computadora no puede asumir pasos que no están escritos. No hay contexto, no hay sentido común. Solo instrucciones.)*
> 2. Si el paso del algoritmo dice "agregar el café" sin especificar cantidad, ¿cuál sería el equivalente directo de esa instrucción vaga en JavaScript?
>    *(Respuesta esperada: Usar una variable que no ha sido declarada, o llamar algo que no existe aún. La imprecisión en código produce errores. No se espera que lo sepan — se busca que razonen.)*

---

### 1.3 JS es Secuencial — El Cursor que Baja

**EN PANTALLA: EXCALIDRAW — Agrega una flecha vertical que atraviese todos los rectángulos del diagrama del café de arriba hacia abajo.**

> **Tu explicación teórica precisa:**
> "JavaScript ejecuta tu código exactamente igual que la computadora ejecuta el algoritmo del café: **línea por línea, de arriba hacia abajo, sin saltarse nada**. A eso se le llama ejecución secuencial.
>
> Consecuencia directa: si usas algo antes de declararlo, JavaScript no buscará más abajo en el archivo para resolverlo. Fallará en esa línea. La secuencia nunca se negocia."

---

### 1.4 TEORÍA: Tres Formas de Escribir JS en HTML

**EN PANTALLA: PRESENTACIÓN CANVA — Slide con las 3 opciones de incrustar JS en HTML.**

> **Tu explicación teórica precisa:**
> "Existen tres formas de incluir JavaScript en un archivo HTML. Las conocemos para que las reconozcan cuando las vean en el mundo real, pero vamos a trabajar siempre con una sola:
>
> 1. **En línea** — Dentro de atributos HTML como `onclick="..."`. Funciona para casos muy simples, pero mezcla HTML con lógica y se vuelve inmanejable rápido. No la usaremos.
> 2. **Dentro del HTML** — Entre etiquetas `<script>...</script>` directamente en el HTML. Es útil para ejemplos pequeños, pero el código no se puede reutilizar en otras páginas.
> 3. **Archivo externo `.js`** ✅ — Nuestro método. El código vive en un archivo separado y se enlaza al HTML con `<script src="script.js"></script>`. Es la práctica estándar en la industria: código organizado, reutilizable y fácil de mantener."

---

### 1.5 El Entorno: Conectar HTML con JS (CODE-ALONG)

**EN PANTALLA: VSCODE — Carpeta `guess-number-js` abierta con `index.html` visible.**

> **La acción guiada (CODE-ALONG — dictado en vivo):**
> 1. Crea el archivo `script.js` en la misma carpeta que `index.html`. (*"Nuevo archivo → lo llamamos `script.js`"*)
> 2. Abre `index.html`. Ubica la etiqueta `</body>`.
> 3. Dictado: *"Justo antes del cierre del body — no en el head, siempre antes del closing body — escribimos: `<script src="script.js"></script>`"*
> 4. Guarda con `Ctrl+S`.

> **Tu explicación teórica precisa:**
> "Este tag `<script>` es el cable que une los dos archivos. El atributo `src` le dice al navegador: 'cuando llegues aquí, descarga y ejecuta este archivo JS'.
>
> ¿Por qué antes del `</body>` y no en el `<head>`? Porque el navegador lee el HTML de arriba hacia abajo. Si el script corre antes de que el HTML haya terminado de pintarse, puede intentar encontrar elementos que todavía no existen — y nada funciona."

---

### 1.6 TEORÍA: `console.log()` — Primera Herramienta de Salida

**EN PANTALLA: VSCODE dividido con NAVEGADOR — Live Server activo, página en blanco.**

> **Tu explicación teórica precisa:**
> "**Salida significa mostrar datos.** Pero antes de hablar de `console.log()`, una palabra rápida: ¿qué es una función?
>
> Una **función** es un bloque de instrucciones con nombre que realiza una tarea específica. Le pasas datos, hace algo con ellos, y opcionalmente te devuelve un resultado. No vamos a profundizar en funciones hoy — hay una clase completa dedicada a eso más adelante — pero conviene que sepan que `console.log()`, `prompt()` y `alert()` son funciones que JavaScript ya incluye por defecto. No las inventa el programador: el navegador las proporciona y están listas para usar.
>
> `console.log()` es la función que imprime valores en la **Consola del Navegador** (`F12 → pestaña Console`). Ves los paréntesis: todo lo que pongas ahí adentro es lo que vas a querer ver. No modifica nada en la página visible para el usuario — es nuestra ventana de diagnóstico para ver qué está pasando dentro del código mientras lo construimos."

> **La acción guiada (CODE-ALONG):**
> 1. En `script.js`, escribe en vivo: `console.log("Hola Mundo");`
> 2. Guarda con `Ctrl+S`.
> 3. Abre el navegador con Live Server. Presiona `F12` → pestaña **Console**.
> 4. Señala el mensaje impreso: *"La página está en blanco para el usuario — pero nosotros vemos el mensaje aquí. Esto es lo que vamos a usar durante toda la clase para confirmar que el código funciona."*

> **Pregunta de calibración:**
> *"Estoy viendo 'Hola Mundo' en la consola. Si ahora entro al `index.html`, borro el tag `<script src="script.js">` y recargo la página — ¿qué aparece en la consola?"*
>
> *(Respuesta esperada: Nada — sin el script tag el navegador nunca ejecuta el JS. El link no es automático, es explícito. Si nadie responde, pregunta: "¿El navegador sabe que existe script.js si nadie se lo dijo?")*

> **Preguntas de Activación:**
> 1. Si escribo `console.log(42)` en la línea 1 y `console.log("42")` en la línea 2, ¿el log va a mostrar exactamente lo mismo o hay alguna diferencia que podría importarme cuando opere con esos valores?
>    *(Respuesta esperada: Hay diferencia — son tipos de dato distintos. `42` es `number` (azul en Chrome), `"42"` es `string` (negro). Cuando intentemos hacer matemáticas con `"42"`, el resultado no será el esperado. Esta distinción es el puente directo al Momento 3.)*
> 2. Si tu `script.js` tiene un error de sintaxis en la línea 3 pero el `console.log` está en la línea 1 — ¿ese log se imprime antes de que el error detenga todo, o el error impide que corra el archivo entero?
>    *(Respuesta esperada: Un error de sintaxis detiene el archivo antes de que corra ninguna línea. Un error en tiempo de ejecución (runtime) sí permite que las líneas anteriores corran. No se espera que lo sepan — el objetivo es que queden con la pregunta instalada.)*

---

> **🚨 ERRORES COMUNES - MOMENTO 1**
> | Error | Causa probable | Solución inmediata |
> |---|---|---|
> | Consola vacía, sin mensaje | El tag `<script>` no está en el HTML o `src` tiene el nombre errado | Verificar ortografía exacta: `"script.js"` debe coincidir con el nombre del archivo |
> | Error `Cannot find file` | `index.html` y `script.js` no están en la misma carpeta | Mover los archivos para que estén al mismo nivel |
> | El Live Server no actualiza | Archivo no guardado | `Ctrl+S` antes de revisar |

---

> **Nota táctica de transición:**
> Ya tienen el entorno vivo: HTML y JS conectados, consola funcionando, y el modelo mental del algoritmo instalado. El siguiente problema es concreto: necesitamos guardar el número secreto del juego para poder compararlo después. Necesitamos un lugar en la memoria donde vivir ese dato. Eso son las variables.

---

## MOMENTO 2: Variables — `let` y `const`
**Tiempo:** 20 min

> **Nota táctica de inicio: {El error como maestro}**
> En este momento la herramienta pedagógica más poderosa es el `TypeError` en vivo. No lo esquives — provócalo. Cuando el alumno ve que la computadora se niega a seguir y muestra un error rojo, y luego entiende por qué, el concepto de `const` se graba distinto a cualquier definición escrita. Usa el error como un aliado, no como algo a evitar.

---

### 2.1 TEORÍA: ¿Qué es una Variable?

**EN PANTALLA: EXCALIDRAW — Dibuja en vivo una caja con una etiqueta pegada y un objeto adentro.**

> **Tu explicación teórica precisa:**
> "Imagina una caja física con una etiqueta pegada en el frente. La **etiqueta** es el nombre de la variable — lo que tú decides llamarla. El **contenido** de la caja es el valor que guarda. Eso es exactamente una variable: un espacio en la memoria del programa con un nombre y un dato adentro.


> "Una **variable** es un espacio en la memoria del programa con un nombre, que guarda un dato. La declaración es el momento en que le dices a JavaScript: 'reserva este espacio y llámalo así'. La inicialización es cuando le asignas el primer valor.

>
> La **declaración** es el momento en que le dices al programa 'reserva esta caja y llámala así'. La **inicialización** es cuando pones el primer objeto adentro. Normalmente hacemos ambas cosas en una sola línea:
>
> `let edad = 25;` → crea la caja llamada `edad` y mete el número `25` adentro."

---

### 2.2 TEORÍA: Palabras Reservadas en JavaScript

**EN PANTALLA: PRESENTACIÓN CANVA — Slide con ejemplos de palabras reservadas.**

> **Tu explicación teórica precisa:**
> "Para declarar una variable, usamos palabras especiales que JavaScript ya reconoce: `let`, `const`. Estas se llaman **palabras reservadas** (o palabras clave). Son instrucciones del lenguaje que tienen un significado fijo — no puedes usarlas como nombres de tus variables ni de tus archivos.
>
> Algunos ejemplos de palabras reservadas que usaremos en este módulo:
>
> `let`, `const`, `if`, `else`, `true`, `false`, `return`, `function`
>
> Si alguna vez intentas llamar a tu variable `let` o `const`, JavaScript te dará un error de sintaxis. No porque seas malo en programación — sino porque ya están tomadas por el lenguaje."

---

### 2.3 TEORÍA: `let` vs `const` — Las Dos Cajas

**EN PANTALLA: EXCALIDRAW — Dibuja dos cajas en paralelo: una abierta (let) y una sellada/cerrada con candado (const).**

> **La acción guiada:**
> 1. Dibuja en Excalidraw dos cajas lado a lado.
> 2. A la caja de la izquierda ponle la etiqueta **`let`** y dibuja la tapa abierta. Adentro escribe `0`. Tacha ese número y escribe `1` con flecha de reemplazo. Dice: *"Con `let`, puedes abrir la caja y cambiar lo que hay dentro. El contenido es reemplazable."*
> 3. A la caja de la derecha ponle la etiqueta **`const`** y dibujala sellada con una X visible en la tapa. Adentro escribe `42`. Dice: *"Con `const`, la caja vino sellada de fábrica. Puedes ver el contenido, pero no reemplazarlo. Si lo intentas, JavaScript te detiene."*

> **Tu explicación teórica precisa:**
> "La regla de hoy para elegir entre ellas es simple:
>
> - **`const`** es la opción por defecto. Si el dato no va a cambiar durante la ejecución del programa — úsalo.
> - **`let`** lo usas cuando sabes de antemano que el dato sí va a cambiar — por ejemplo, un contador de intentos.
>
> En el proyecto de hoy: el número secreto nunca cambia → `const`. Los intentos aumentan con cada fallo → `let`."

*(Mencionar brevemente: `var` existe pero es antigua. No la usaremos.)*

---

### 2.4 TEORÍA: Declaración e Inicialización — Anatomía de una Línea

**EN PANTALLA: VSCODE — Escribe en vivo en `script.js`.**

> **La acción guiada (CODE-ALONG — dictado en vivo):**
> 1. Escribe línea por línea dictando cada parte:
> ```javascript
> const NUMERO_SECRETO = 42;
> let intentos = 0;
> let nombreJugador = "Jugador";
>
> console.log(NUMERO_SECRETO);
> console.log(intentos);
> console.log(nombreJugador);
> ```
> 2. Guarda con `Ctrl+S`. Verifica en consola: los tres valores aparecen.
> 3. Señala: *"La convención: `const` con nombre en MAYÚSCULAS para valores fijos, `let` con camelCase para los que cambian. No es una regla del lenguaje — es una convención del equipo que hace el código más legible al instante."*

> **Tu explicación teórica precisa:**
> "Anatomía de una declaración: `const NUMERO_SECRETO = 42;`
>
> - `const` → la palabra clave
> - `NUMERO_SECRETO` → el nombre que tú eliges
> - `=` → el operador de asignación. No es 'igual que'. Es 'recibe el valor de'
> - `42` → el valor inicial
> - `;` → punto final de la instrucción
>
> JavaScript es de **tipado dinámico**: no escribimos el tipo del dato en la variable. El motor lo deduce del valor que le asignamos. Si ponemos `42`, sabe que es número. Si ponemos `\"Jugador\"`, sabe que es texto."

> **Preguntas de Activación:**
> 1. En el lab declaran una variable `edad` con `let`. Si después intentan hacer `edad = edad + 1`, ¿eso funciona con `let`? ¿Y si hubieran usado `const` desde el inicio?
>    *(Respuesta esperada: Con `let` sí funciona — esa es su naturaleza, el valor puede reasignarse. Con `const` daría `TypeError` porque la caja está sellada. La pregunta ancla la diferencia en el contexto real del lab que van a hacer.)*
> 2. En el lab declaran `const maxIntentos = 10`. Si la lógica del juego necesita que ese límite nunca cambie durante una partida, ¿por qué es mejor declararlo con `const` que con `let`, aunque los dos compilen sin error al inicio?
>    *(Respuesta esperada: `const` comunica la intención al equipo y al propio compilador: "este valor no debe cambiar". Si alguien más trabaja en el código y accidentalmente intenta modificarlo, JavaScript les avisa de inmediato en lugar de generar un bug silencioso.)*

---

### 2.3 Demo en Vivo: El Error de `const`

**EN PANTALLA: VSCODE — `script.js` con el código del paso anterior.**

> **La acción guiada:**
> 1. En `script.js` escribe en vivo esta declaración y luego intenta reasignarla:
> ```javascript
> const curso = 'Code 101';
> curso = 'otro curso'; // ← esta línea provoca el error
> ```
> 2. Guarda `Ctrl+S`. Recarga el navegador. Abre la consola `F12`.
> 3. Lee el error en rojo en voz alta: `TypeError: Assignment to constant variable.`
> 4. Di: *"JavaScript no nos dejó. `curso` fue declarado con `const` — su caja está sellada. Si en algún punto del programa alguien intentara sobreescribir ese valor por error, el lenguaje lo detiene aquí, no en producción."*
> 5. Comenta la línea del error. Verifica que todo vuelve a funcionar normal.

> **Pregunta de calibración:**
> *"Si este error aparece en la página publicada en GitHub Pages — la que usan jugadores reales — ¿el juego sigue corriendo y el error solo lo ven ustedes en su consola, o el juego se rompe para el usuario también?"*
>
> *(Respuesta esperada: Un error de JavaScript no capturado detiene la ejecución del script completo — el usuario ve el juego roto o sin respuesta. Esto plantea la importancia del debugging sin profundizar. Plantar la pregunta, no resolver todo ahora.)*

---

### 2.4 LAB Parte 1: Setup + Variables (Lab Class 09 — Partes 1 y 2.1/2.2)

**EN PANTALLA: VSCODE — Repo `guess-number-js` clonado, `index.html` y `script.js` abiertos.**

> **La acción guiada (LAB AUTÓNOMO — 10 min):**
> Dictado del criterio de éxito: *"El éxito de estos 10 minutos se mide cuando tengan en su consola el nombre, la edad y el tipo de dato de cada variable. Eso y nada más."*
>
> Los alumnos siguen el **LAB_CLASS_09, Partes 1 + 2.1/2.2**:
>
> 1. **Parte 1 — Setup:** Clonar `guess-number-js`, crear `index.html` (con el `<script>` correcto) y `script.js` con el primer `console.log`. Verificar en consola. Hacer commit.
>
> 2. **Parte 2.1 — Variables con `let`:** Declarar `nombre`, `edad`, `estaAprendiendo`. Imprimir con `console.log()`. Verificar tipos con `typeof`. Comentar en el código qué tipo esperan antes de ejecutar.
>
> 3. **Parte 2.2 — Variables con `const`:** Declarar `curso = 'Code 101'` y `maxIntentos = 10`. Intentar reasignar `maxIntentos = 20` (descomentando la línea indicada). Observar el error en la consola.

*(Circular por pantallas compartidas o pedir por chat: "¿Qué tipo devuelve `typeof estaAprendiendo`?" Verificar que nadie tenga errores de setup antes de avanzar.)*

---

> **🚨 ERRORES COMUNES - MOMENTO 2**
> | Error | Causa probable | Solución inmediata |
> |---|---|---|
> | `SyntaxError: Identifier 'X' has already been declared` | Variable declarada dos veces con `let` o `const` | Cada nombre se declara solo una vez; las siguientes veces asignar sin la palabra clave |
> | `TypeError: Assignment to constant variable` | Se intentó reasignar un `const` | Cambiar a `let` si el valor necesita mutar, o eliminar la reasignación si fue un error |
> | `ReferenceError: X is not defined` | Variable usada antes de declararla | Revisar el orden del código — la declaración va antes del uso |

---

> **Nota táctica de transición:**
> Las cajas ya tienen nombre. Ahora el siguiente problema es concreto: `nombre` guarda texto, `edad` guarda un número, `estaAprendiendo` guarda verdadero o falso. Esos contenidos no son intercambiables — operar entre ellos sin cuidado produce resultados inesperados. El siguiente momento define qué son exactamente esos tipos y por qué el tipo de un dato es tan importante como su valor.

---

## MOMENTO 3: Tipos de Dato — `string`, `number`, `boolean`
**Tiempo:** 20 min

> **Nota táctica de inicio: {Hacer visible lo invisible}**
> Los tipos de dato son invisibles a simple vista — el alumno escribe `"25"` y `25` y no nota la diferencia hasta que algo falla. El objetivo de este momento es hacer esa diferencia visible usando dos herramientas: el operador `typeof` y el código de color de la consola de Chrome. Una vez que el alumno ve con sus propios ojos que `42` es azul y `"42"` es negro en la consola, el concepto se graba de forma visual e irreversible.

---

### 3.1 TEORÍA: Los Tres Tipos Primitivos Principales

**EN PANTALLA: PRESENTACIÓN CANVA — Slide con los tres tipos y sus ejemplos.**

> **Tu explicación teórica precisa:**
> "Cada valor en JavaScript tiene un tipo. El tipo define qué operaciones son válidas sobre ese dato y cómo se comporta cuando interactúa con otros.
>
> Los tres tipos primitivos que usamos hoy:
>
> - **`string`** — Texto. Se define con comillas simples, dobles o backticks. Ejemplos: `'Carlos'`, `"Code 101"`, `` `Hola` ``
> - **`number`** — Números. Enteros y decimales son el mismo tipo. Ejemplos: `42`, `3.14`, `-7`
> - **`boolean`** — Lógico. Solo dos valores posibles: `true` o `false`. Sin comillas — con comillas sería un string.
>
> Hay más tipos (`undefined`, `null`, `object`, `function`), pero estos tres son el núcleo de esta clase."

---

### 3.2 TEORÍA: La Regla de las Comillas — `42` vs `"42"`

**EN PANTALLA: VSCODE — `script.js` abierto.**

> **Tu explicación teórica precisa:**
> "Aquí está la regla más importante del día: **las comillas definen el tipo, no el contenido**.
>
> `42` → número. Puedes hacer matemáticas con él.
> `'42'` → texto. Para JavaScript eso es una cadena de dos caracteres: el cuatro y el dos. No es un número.
>
> El valor parece idéntico, pero el tipo es completamente distinto — y esa diferencia cambia el resultado de cualquier operación que hagas con él."

> **La acción guiada (Demo en vivo — consola de Chrome):**
> 1. Abre la consola de Chrome (`F12`).
> 2. Escribe y ejecuta línea por línea. Pide a los alumnos que predigan el color antes de presionar Enter:
> ```javascript
> 42           // ← ¿de qué color aparece?
> "42"         // ← ¿y este?
> true         // ← ¿y este?
> "true"       // ← ¿igual que el anterior?
> ```
> 3. Señala los colores: números y booleanos en azul/morado, strings en negro. Di: *"La consola de Chrome codifica el tipo con color. Si ven negro, están ante un string. Si ven azul, es un número o booleano. Este detalle visual les va a salvar de muchos bugs."*

> **Preguntas de Activación:**
> 1. Si quiero guardar el código postal `"01000"` de una ciudad, ¿debería declararlo como `number` o como `string`? ¿Qué problema concreto causaría elegir el tipo equivocado?
>    *(Respuesta esperada: Como `string`. Si lo guardan como `number`, el cero inicial desaparece — `01000` se convierte en `1000`. Además, nunca se hace aritmética con códigos postales. El tipo correcto depende de para qué usarás el dato, no solo del contenido visible.)*
> 2. Declaro `let activo = "true"`. ¿Eso es lo mismo que `let activo = true`? ¿Qué diferencia práctica tendría eso cuando en Clase 10 lo use en un `if`?
>    *(Respuesta esperada: No es lo mismo. `"true"` es un string — en un `if`, cualquier string no vacío se evalúa como truthy, pero no es el booleano correcto ni es intencional. `true` es el booleano real. No profundizar en `if` ahora — solo plantar que importa el tipo.)*

---

### 3.3 TEORÍA: `typeof` — El Detective de Tipos

**EN PANTALLA: NAVEGADOR — Consola de Chrome abierta.**

> **Tu explicación teórica precisa:**
> "Para saber el tipo de un valor en cualquier momento, JavaScript tiene el operador `typeof`. Escríbelo antes de cualquier valor o variable y te devuelve un string con el nombre del tipo."

> **La acción guiada (Demo en vivo — consola de Chrome):**
> 1. Ejecutar en la consola, línea por línea:
> ```javascript
> typeof 42            // → "number"
> typeof "42"          // → "string"
> typeof true          // → "boolean"
> typeof "true"        // → "string"
> typeof undefined     // → "undefined"
> ```
> 2. Dictar: *"Cada vez que tengan duda sobre qué tipo tiene una variable, `typeof` es su primer recurso. Es el diagnóstico más rápido que existe en JavaScript."*
> 3. Abrir `script.js`. Agregar en vivo:
> ```javascript
> let nombre = 'Carlos';
> let edad = 25;
> let estaAprendiendo = true;
>
> console.log(typeof nombre);          // "string"
> console.log(typeof edad);            // "number"
> console.log(typeof estaAprendiendo); // "boolean"
> ```

> **Pregunta de calibración:**
> *"En el lab de hace un rato declararon `let edadUsuario = prompt('¿Cuántos años tienes?')`. Sin ejecutar nada, solo pensando: ¿qué devolvería `typeof edadUsuario` si el usuario escribe 25?"*
>
> *(Respuesta esperada: `"string"` — porque `prompt()` siempre devuelve un string, sin importar qué escriba el usuario. Esta es la conexión directa a la trampa del `+` que verán en el Momento 4 y a la conversión con `Number()` en el Momento 5.)*

---

### 3.4 `undefined` y `null` — Una Distinción Rápida

**EN PANTALLA: NAVEGADOR — Consola de Chrome.**

> **Tu explicación teórica precisa:**
> "Dos casos especiales que van a ver frecuentemente:
>
> - **`undefined`**: Variable declarada pero sin valor asignado todavía. JavaScript la crea pero no sabe qué poner adentro.
> - **`null`**: Ausencia intencional de valor. El programador explícitamente dice 'esta caja está vacía a propósito'.
>
> La diferencia: `undefined` es una sorpresa (olvidaste asignar algo). `null` es una decisión."

> **La acción guiada (Demo rápida — 60 segundos en consola):**
> ```javascript
> let sinValor;
> console.log(sinValor);          // undefined
> console.log(typeof sinValor);   // "undefined"
>
> let vacioPropósito = null;
> console.log(vacioPropósito);    // null
> console.log(typeof vacioPropósito); // "object" ← bug histórico de JS, no es error tuyo
> ```
> Señalar: *"`typeof null` devuelve `'object'` — es un bug histórico de JavaScript que no pudieron corregir sin romper millones de sitios web. No se los explico como una regla — se los explico como un dato de cultura."*

---

### 3.5 LAB: Tipos en el Proyecto (Lab Class 09 — Parte 2.1 continuación)

**EN PANTALLA: VSCODE — `script.js` del lab `guess-number-js`.**

> **La acción guiada (LAB AUTÓNOMO — 5 min):**
> Dictado del criterio de éxito: *"El éxito de estos 5 minutos se mide cuando en su consola aparezcan los tipos de cada variable que declararon, y puedan explicar por qué `typeof edadUsuario` NO devuelve 'number'."*
>
> Los alumnos completan el ejercicio de `typeof` del **LAB_CLASS_09, Parte 2.1**:
>
> 1. Agregar `typeof` para verificar el tipo de `nombre`, `edad` y `estaAprendiendo`.
> 2. Antes de ejecutar, escribir en un comentario qué tipo esperan:
> ```javascript
> // ¿Qué tipo espero?   string
> console.log(typeof nombre);
> // ¿Qué tipo espero?   number
> console.log(typeof edad);
> // ¿Qué tipo espero?   boolean
> console.log(typeof estaAprendiendo);
> ```
> 3. Verificar que el resultado coincide con lo que predijeron.

*(Pregunta de cierre al chat: "¿Alguien obtuvo un tipo diferente al que esperaba? ¿Cuál?". Ese caso es oro pedagógico — compartir pantalla y diagnosticar juntos.)*

---

> **🚨 ERRORES COMUNES - MOMENTO 3**
> | Error | Causa probable | Solución inmediata |
> |---|---|---|
> | `typeof` devuelve `"string"` en una variable numérica | El valor fue asignado con comillas: `let edad = "25"` | Quitar las comillas si es un número real: `let edad = 25` |
> | `typeof null` devuelve `"object"` | Bug histórico de JavaScript — no es un error del alumno | Explicar que `null` es `null`, no un objeto; el `typeof` de null es conocidamente incorrecto |
> | Variable aparece como `undefined` en consola | Se declaró la variable pero nunca se le asignó un valor | Asegurarse de inicializar: `let nombre = 'Carlos'` no solo `let nombre` |

---

> **Nota táctica de transición:**
> Ahora ya saben qué tipo tiene cada caja. El siguiente problema es operar entre ellas — sumar, restar, concatenar. Y ahí aparece la trampa más famosa de JavaScript: el operador `+` que no se comporta igual con números que con texto. Eso es el Momento 4.

---

## MOMENTO 4: Operadores y la Trampa del `+`
**Tiempo:** 15 min

> **Nota táctica de inicio: {Provocar la sorpresa primero, explicar después}**
> En este momento el orden importa. Empieza con la demo de `'5' + 3` ANTES de explicar nada. Deja que el resultado los sorprenda. Ese momento de confusión activa la atención mejor que cualquier slide. Solo entonces explicas por qué pasó. El cerebro recuerda las cosas que no entendió antes de que le explicaran, mucho más que las que se explican de antemano.

---

### 4.1 Operadores Aritméticos — El Repaso Rápido

**EN PANTALLA: NAVEGADOR — Consola de Chrome abierta (F12).**

> **La acción guiada (Demo en consola — 2 min):**
> Ejecutar rápidamente para referencia visual, sin detenerse a explicar mucho:
> ```javascript
> 20 + 7     // → 27   suma
> 20 - 7     // → 13   resta
> 20 * 7     // → 140  multiplicación
> 20 / 4     // → 5    división
> 20 % 7     // → 6    módulo (residuo)
> ```
> Señalar el módulo: *"El `%` devuelve el residuo de la división. `20 % 7` da 6 porque 7 cabe dos veces en 20 y sobran 6. Lo usarán para saber si un número es par: si `numero % 2` da 0, es par, si da 1, es impar."*

> **Pregunta de calibración:**
> *"Sin ejecutar: ¿cuánto da `15 % 4`? Tómense 10 segundos y pónganlo en el chat."*
>
> *(Respuesta esperada: 3 — porque 4 cabe 3 veces en 15 y sobran 3. Si nadie responde, dictarlo: "¿Cuántas veces cabe 4 en 15? 3 veces. ¿Cuánto sobre? 3". Luego verificar en consola.)*

---

### 4.2 La Trampa del `+` — Demo Primero

**EN PANTALLA: NAVEGADOR — Consola de Chrome.**

> **La acción guiada:**
> 1. Sin introducción, escribe en la consola y pide que predigan el resultado:
> ```javascript
> 5 + 3
> ```
> *(Respuesta obvia: 8)*
>
> 2. Ahora escribe:
> ```javascript
> '5' + 3
> ```
> 3. Pausa de 3 segundos. Que procesen el resultado: `"53"`.
> 4. Pregunta al chat: *"¿Por qué?"*. Espera 30 segundos sin responder. Deja que el silencio trabaje.

*(El momento de confusión es el objetivo. No lo interrumpas con la respuesta inmediata.)*

---

### 4.3 TEORÍA: El `+` Bilingüe

**EN PANTALLA: NAVEGADOR — Consola de Chrome.**

> **Tu explicación teórica precisa:**
> "El operador `+` tiene dos trabajos completamente distintos:
>
> 1. **Suma matemática** — cuando ambos operandos son números: `5 + 3` → `8`
> 2. **Concatenación de texto** — cuando al menos uno es string: `'5' + 3` → `'53'`
>
> JavaScript revisa los tipos de los dos operandos. Si detecta al menos un string, abandona las matemáticas y empieza a pegar cadenas. No te avisa. No te pregunta. Simplemente lo hace.
>
> Los demás operadores aritméticos (`-`, `*`, `/`, `%`) no tienen ese doble comportamiento — solo trabajan con números y convierten automáticamente si pueden. Por eso `'5' - 3` sí da `2`."

> **La acción guiada (Demo comparativa en consola):**
> ```javascript
> '5' + 3    // → "53"  (concatenación — el + vio un string)
> '5' - 3    // → 2     (resta — convierte '5' a number automáticamente)
> '5' * 2    // → 10    (igual)
> '5' / 1    // → 5     (igual)
> ```
> Señalar: *"Noten la asimetría: `+` concatena cuando hay strings, los otros operadores intentan convertir a número. Esto no es un bug — es una decisión de diseño del lenguaje. Conocerla les ahorra horas de debugging."*

> **Preguntas de Activación:**
> 1. El usuario escribe `"10"` en un `prompt()`. Si luego escriben `"10" + "5"` en el código, ¿qué resultado esperan y por qué?
>    *(Respuesta esperada: `"105"` — ambos operandos son strings, así que `+` concatena ambas cadenas. La suma numérica que el programador quería no ocurre. Esto es exactamente el bug que resuelven en el Momento 5 con `Number()`.)*
> 2. Tienen `let a = 5` y `let b = "3"`. Sin convertir nada, ¿qué dan `a + b`, `a - b` y `a * b`? ¿Por qué los tres resultados son distintos?
>    *(Respuesta esperada: `a + b` → `"53"` (concatena), `a - b` → `2` (resta numérica, coerciona `b`), `a * b` → `15` (multiplica, coerciona `b`). Los tres dan distinto porque `+` es el único que tiene doble comportamiento.)*

---

### 4.4 LAB: Operadores (Lab Class 09 — Parte 3.1 y 3.2)

**EN PANTALLA: VSCODE — `script.js` del lab `guess-number-js`.**

> **La acción guiada (LAB AUTÓNOMO — 5 min):**
> Dictado del criterio de éxito: *"El éxito de estos 5 minutos se mide cuando hayan ejecutado las 5 operaciones aritméticas en consola y, más importante, cuando puedan predecir y explicar qué dan `'5' + 3` vs `'5' - 3` sin equivocarse."*
>
> Los alumnos completan **LAB_CLASS_09, Parte 3.1 y 3.2**:
>
> 1. **Parte 3.1** — Operadores con `a = 20` y `b = 7`: suma, resta, multiplicación, división y módulo. Completar los 3 que faltan.
> 2. **Parte 3.2** — Ejecutar `'5' + 3`, `5 + 3` y `'5' - 3`. Anotar el resultado y el tipo en un comentario antes de ejecutar.

*(Pregunta al chat al cierre: "¿Alguien obtuvo algo diferente a lo que esperaba en el `+`? ¿Qué pasó?". El caso de quien se confundió es el ejemplo pedagógico del momento.)*

---

> **🚨 ERRORES COMUNES - MOMENTO 4**
> | Error | Causa probable | Solución inmediata |
> |---|---|---|
> | `+` suma cuando debería concatenar o viceversa | No se tiene claro el tipo del operando | Usar `typeof` para verificar antes de operar |
> | `'5' + 3` da `"53"` en lugar de `8` | Un operando es string — el `+` concatena | Convertir con `Number()` antes de operar: `Number('5') + 3` |
> | `NaN` en una operación aritmética | Se intentó hacer matemáticas con un string no numérico | Verificar el tipo del dato; si viene de `prompt()`, debe convertirse primero |

---

> **Nota táctica de transición:**
> Ahora tienen el problema perfectamente planteado: `prompt()` siempre devuelve un string, y el `+` concatena en lugar de sumar si no se convierte. ¿Cómo se convierte? El Momento 5 resuelve exactamente eso: `Number()`, `parseInt()`, y la forma moderna de construir mensajes sin usar `+` para unir texto.

---

## MOMENTO 5: `prompt()`, Conversión de Tipos y Template Literals
**Tiempo:** 25 min

> **Nota táctica de inicio: {Cerrar el ciclo — problema planteado en M4, solución entregada aquí}**
> Este es el momento donde todo el trabajo anterior converge. El alumno ya sabe que `prompt()` devuelve un string y que el `+` concatena. Ahora tiene las herramientas para resolverlo. El deliverable concreto del lab de este momento — pedir nombre y edad, mostrar un saludo armado con template literals — es el resultado más visible de toda la clase. Que quede claro cuándo termina el momento: cuando el alumno haya hecho commit del checkpoint del lab.

---

### 5.1 TEORÍA: `prompt()` — Entrada del Usuario

**EN PANTALLA: VSCODE — `script.js` abierto.**

> **Tu explicación teórica precisa:**
> "`prompt()` es una función que abre un cuadro de diálogo en el navegador y espera que el usuario escriba algo. Cuando el usuario presiona Aceptar, devuelve lo que escribió como un **string**, sin importar si escribió números, letras o emojis.
>
> Si el usuario presiona Cancelar o cierra el cuadro, devuelve `null`.
>
> Sintaxis: `let valor = prompt('Mensaje para el usuario');`
>
> El mensaje entre comillas es lo que aparece en el cuadro de diálogo. El dato que el usuario escribe queda guardado en la variable."

> **La acción guiada (Demo en vivo — CODE-ALONG):**
> 1. En `script.js` escribir en vivo:
> ```javascript
> let nombreUsuario = prompt('¿Cómo te llamas?');
> console.log('El usuario dijo:', nombreUsuario);
> console.log('Tipo:', typeof nombreUsuario);
> ```
> 2. Guardar `Ctrl+S`. Recargar el navegador. El cuadro aparece.
> 3. Escribir un nombre y presionar Aceptar.
> 4. Mostrar en consola el nombre y el tipo (`string`).
> 5. Preguntar: *"¿Y si ahora les pido que escriban su edad con `prompt()` — qué tipo devuelve?"* Ejecutarlo y confirmarlo.

> **Preguntas de Activación:**
> 1. Si un usuario cierra el cuadro de `prompt()` sin escribir nada y sin presionar Aceptar, ¿qué valor guarda la variable y qué tipo tiene?
>    *(Respuesta esperada: `null` — y `typeof null` devuelve `"object"` (el bug histórico que vieron). Eso significa que si su código intenta hacer algo con ese valor, probablemente falle. Este es el punto de entrada a la validación de inputs, que verán más adelante.)*
> 2. Si uso `prompt()` para pedir la edad y luego intento calcular `edadUsuario + 5` para mostrar en cuántos años cumplirán 30, ¿qué resultado obtendrían sin hacer nada más?
>    *(Respuesta esperada: Concatenación — si `edadUsuario` es `"25"`, el resultado sería `"255"` en lugar de `30`. Esto cierra el ciclo del Momento 4 y abre la necesidad de conversión.)*

---

### 5.2 TEORÍA: Conversión Explícita — `Number()`, `parseInt()`, `parseFloat()`

**EN PANTALLA: VSCODE dividido con NAVEGADOR — Consola visible.**

> **Tu explicación teórica precisa:**
> "Cuando necesitamos trabajar matemáticamente con un dato que llegó como string (por ejemplo, desde `prompt()`), hacemos una **conversión explícita** — le decimos al motor de JS exactamente qué tipo queremos.
>
> Tres funciones para convertir a número:
>
> - **`Number(valor)`** — Conversión general. Si no puede convertir todo el string, devuelve `NaN` (Not a Number). Maneja enteros y decimales.
> - **`parseInt(valor)`** — Lee la parte entera del string hasta que encuentra algo no numérico. `parseInt('5px')` → `5`. Si el string no empieza con número, devuelve `NaN`.
> - **`parseFloat(valor)`** — Igual que `parseInt` pero respeta los decimales. `parseFloat('3.14abc')` → `3.14`.
>
> **Regla práctica:** Para datos de `prompt()`, usar `Number()` como primera opción. Si necesitas garantizar un entero, usa `parseInt()`."

> **La acción guiada (Demo en vivo — consola de Chrome):**
> ```javascript
> Number('25')        // → 25
> Number('3.14')      // → 3.14
> Number('25px')      // → NaN  ← no puede convertir
> Number('')          // → 0    ← string vacío da 0, ¡gotcha!
>
> parseInt('25px')    // → 25   ← lee hasta donde puede
> parseInt('abc')     // → NaN  ← no empieza con número
>
> parseFloat('3.14abc') // → 3.14
> ```
> Señalar el gotcha: *"`Number('')` devuelve `0`, no `NaN`. Eso significa que si un usuario deja el prompt vacío y aplican `Number()`, el resultado es `0` — un valor silencioso que puede crear bugs difíciles de detectar."*

> **Preguntas de Activación:**
> 1. El usuario escribe `"  25  "` (con espacios al inicio y al final) en el `prompt()`. ¿`Number("  25  ")` devuelve `25`, `NaN`, o `0`?
>    *(Respuesta esperada: `25` — `Number()` ignora los espacios en blanco al inicio y al final automáticamente. Es un comportamiento útil para inputs de usuario que suelen tener espacios accidentales.)*
> 2. Quiero convertir la edad a número entero. ¿En qué caso importaría la diferencia entre usar `parseInt()` vs `Number()` si el usuario escribe `"25.8"` en el prompt?
>    *(Respuesta esperada: `Number("25.8")` → `25.8` (preserva el decimal), `parseInt("25.8")` → `25` (trunca el decimal sin redondear). Si necesitan el entero estricto, `parseInt` hace la conversión y el truncado en un paso.)*

---

### 5.3 TEORÍA: Template Literals — La Forma Moderna de Construir Texto

**EN PANTALLA: VSCODE — `script.js`.**

> **Tu explicación teórica precisa:**
> "Hasta ahora, para unir texto y variables usábamos concatenación con `+`:
>
> ```javascript
> 'Hola ' + nombre + ', tienes ' + edad + ' años.'
> ```
>
> Eso funciona, pero es fácil olvidarse un espacio, perder una comilla o confundir el orden. Hoy conocen la forma moderna: **Template Literals**.
>
> Un Template Literal se escribe con **backticks** (`` ` ``) en lugar de comillas. Dentro, se insertan variables o expresiones usando `${}`:
>
> ```javascript
> `Hola ${nombre}, tienes ${edad} años.`
> ```
>
> Dentro de `${}` puede ir cualquier expresión JavaScript válida — no solo variables. Puedes poner operaciones, llamadas a funciones, comparaciones."

> **La acción guiada (CODE-ALONG comparativa):**
> 1. Abrir `script.js`. Escribir en vivo ambas versiones:
> ```javascript
> let nombre = 'Carlos';
> let edad = 25;
>
> // Forma antigua — concatenación con +
> let saludo1 = 'Hola ' + nombre + ', tienes ' + edad + ' años.';
>
> // Forma moderna — Template Literal
> let saludo2 = `Hola ${nombre}, tienes ${edad} años.`;
>
> // Expresiones dentro de ${}
> let saludo3 = `Hola ${nombre}, el próximo año tendrás ${edad + 1} años.`;
>
> console.log(saludo1);
> console.log(saludo2);
> console.log(saludo3);
> ```
> 2. Guardar y verificar en consola que los tres muestran el mismo resultado (excepto `saludo3` que calcula `edad + 1`).
> 3. Destacar: *"El `${edad + 1}` dentro del template literal ejecuta la suma antes de insertar el texto. El `+` dentro de `${}` es matemático, no concatenación. El contexto cambia."*

> **Pregunta de calibración:**
> *"Si escribo `` `El resultado es ${3 + '5'}` `` — ¿qué aparece en el string resultante? ¿`8` o `35`?"*
>
> *(Respuesta esperada: `"35"` — dentro de `${}` JavaScript evalúa `3 + '5'` y como hay un string, concatena. El template literal no protege de la trampa del `+`, solo la hace más legible. La conversión sigue siendo responsabilidad del programador.)*

> **Preguntas de Activación:**
> 1. Tengo un template literal: `` `Tu número de la suerte es ${numero * 7}` ``. Si `numero` es el string `"4"` (vino de un prompt sin convertir), ¿qué resultado aparece en el mensaje y por qué es diferente al caso del `+`?
>    *(Respuesta esperada: `28` — porque `*` convierte el string a número automáticamente. El template literal simplemente tomó ese resultado. Diferente al `+` que hubiera concatenado. La coerción del `*` aquí trabaja a favor.)*
> 2. ¿En qué caso específico prefieren la concatenación con `+` sobre un Template Literal, si es que existe alguno?
>    *(Respuesta esperada: En la práctica moderna casi siempre se prefiere Template Literals. Algunos casos donde podría aparecer concatenación son código heredado (legacy), o concatenación de una sola variable sin texto extra. La respuesta honesta es "casi nunca necesitas preferir `+`".)*

---

### 5.4 LAB Principal: Interacción + Conversión + Template Literals

**EN PANTALLA: VSCODE — `script.js` del lab `guess-number-js`.**

> **La acción guiada (LAB AUTÓNOMO — 10 min):**
> Dictado del criterio de éxito: *"El éxito de estos 10 minutos se mide cuando su programa haga tres cosas: pedir nombre y edad con `prompt()`, mostrar un `alert()` con el saludo armado como Template Literal, y en la consola mostrar la edad como número — no como string."*
>
> Los alumnos completan **LAB_CLASS_09, Partes 2.3 y 3.3/3.4**:
>
> 1. **Parte 2.3 — Interacción:** Declarar `nombreUsuario` y `edadUsuario` con `prompt()`. Mostrar en consola con `typeof` para verificar que son strings.
> ```javascript
> let nombreUsuario = prompt('¿Cómo te llamas?');
> let edadUsuario = prompt('¿Cuántos años tienes?');
>
> console.log('Nombre:', nombreUsuario, '| Tipo:', typeof nombreUsuario);
> console.log('Edad:', edadUsuario, '| Tipo:', typeof edadUsuario);
> ```
>
> 2. **Parte 3.3 — Template Literals:** Construir el saludo con backticks y mostrar con `alert()`:
> ```javascript
> alert(`Hola ${nombreUsuario}, tienes ${edadUsuario} años.`);
> ```
>
> 3. **Parte 3.4 — Calculadora:** Convertir la edad con `Number()` y calcular el año de nacimiento:
> ```javascript
> let anioActual = 2026;
> let anioNacimiento = anioActual - Number(edadUsuario);
> console.log(`Hola ${nombreUsuario}, naciste aproximadamente en ${anioNacimiento}`);
> ```
>
> 4. Commit sugerido: `"feat: interacción, conversión y template literals"`

*(Pedir al chat: "¿Alguien tuvo un año de nacimiento extraño?" — Si el resultado es un número raro como `2026NaN`, encontraron el bug de no haber convertido correctamente. Oro pedagógico en tiempo real.)*

---

> **🚨 ERRORES COMUNES - MOMENTO 5**
> | Error | Causa probable | Solución inmediata |
> |---|---|---|
> | El saludo concatena en lugar de calcular: `"Paris202625"` | `prompt()` no se convirtió antes de operar | Envolver el valor en `Number()` antes de la resta: `Number(edadUsuario)` |
> | `NaN` en el resultado del año de nacimiento | El usuario dejó el cuadro vacío o escribió texto | `Number('')` → `0`, `Number('abc')` → `NaN`; validar el input antes de operar |
> | Error de sintaxis en el template literal | Se usaron comillas en lugar de backticks | El backtick es `` ` `` — está arriba del Tab en el teclado, no es una comilla normal |
> | `prompt()` no aparece en el navegador | El navegador tiene pop-ups bloqueados | Habilitarlos en la barra de dirección (icono de escudo o configuración de sitio) |

---

> **Nota táctica de transición:**
> El alumno ya puede capturar datos del usuario, convertirlos al tipo correcto y armar mensajes dinámicos. El Momento 6 cierra la clase: verificar el estado final del código, conectar lo de hoy con lo que viene en Clase 10, y hacer el commit final del lab.

---

## MOMENTO 6: Cierre — Verificación, Commit Final y Preview
**Tiempo:** 10 min

> **Nota táctica de inicio: {El cierre es tan importante como la apertura}**
> Un cierre bien ejecutado convierte lo que parece un conjunto de ejercicios aislados en una estructura coherente que el alumno puede nombrar y recordar. No corras este momento. Los 10 minutos que inviertes aquí determinan cuánto retienen hasta la próxima clase.

---

### 6.1 Verificación del Estado del Lab

**EN PANTALLA: VSCODE — `script.js` del alumno o el tuyo propio como modelo.**

> **La acción guiada:**
> 1. Pedir que compartan su pantalla o peguen en el chat el output de su consola.
> 2. Verificar que cada alumno tiene en su `script.js` al menos:
>    - Variables declaradas con `let` y `const`
>    - `prompt()` para capturar nombre y edad
>    - `Number()` aplicado a la edad antes de operar
>    - Un Template Literal con el saludo en `alert()` o `console.log()`
>    - El cálculo del año de nacimiento con resultado numérico correcto
> 3. Si alguien tiene `NaN` o un resultado extraño, diagnosticar en vivo — ese es el ejercicio real de debugging.

*(Nota táctica: No pasar a 6.2 hasta que al menos el 80% tenga el output correcto en consola. Si hay muchos bloqueados, hacer el ejemplo de referencia en pantalla antes del commit.)*

---

### 6.2 Commit Final del Lab

**EN PANTALLA: VSCODE — Terminal integrada.**

> **La acción guiada (CODE-ALONG — dictado):**
> ```bash
> git add index.html script.js
> git commit -m "feat: fundamentos JS — variables, tipos, operadores, prompt y template literals"
> git push
> ```
> Verificar que el commit aparece en GitHub. Pedir pantalla compartida o screenshot del repositorio en GitHub.

> **Pregunta de calibración:**
> *"Si mañana necesitan volver a este código y quieren entender qué hace sin leerlo línea por línea, ¿el mensaje de commit que acaban de escribir les ayuda? ¿O es demasiado genérico?"*
>
> *(No hay una sola respuesta correcta — el objetivo es que comiencen a pensar en los commits como documentación. Un mensaje como `"feat: prompt + Number() para captura y conversión de edad"` es más informativo. Plantar el hábito, no juzgarlo.)*

---

### 6.3 Revisión: Lo que Aprendieron Hoy

**EN PANTALLA: PRESENTACIÓN CANVA — Slide de resumen con los conceptos clave.**

> **Tu explicación teórica precisa:**
> "En esta clase establecieron los fundamentos sobre los que se construye todo en JavaScript. En resumen:
>
> - **Algoritmo y secuencialidad**: JS lee tu código línea por línea, de arriba hacia abajo, sin excepciones.
> - **Variables**: `const` para valores que no cambian, `let` para los que sí. Nunca `var`.
> - **Palabras reservadas**: `let`, `const`, `if`, `else`, `true`, `false` — el lenguaje ya las usa, no son tuyas para nombrar variables.
> - **Tipos primitivos**: `string`, `number`, `boolean`. Las comillas definen el tipo, no el contenido.
> - **`typeof`**: El primer diagnóstico cuando no saben qué tipo tiene un valor.
> - **Operadores**: `+`, `-`, `*`, `/`, `%`. El `+` es bilingüe — suma o concatena según el tipo.
> - **`prompt()`**: Siempre devuelve un string. Siempre.
> - **`Number()`**: Convierte un string a número antes de operar matemáticamente.
> - **Template Literals**: Backticks + `${}` para mensajes dinámicos sin perder la cabeza con el `+`."

---

### 6.4 Preview: ¿Qué Viene en la Clase 10?

**EN PANTALLA: PRESENTACIÓN CANVA — Slide de preview con código de if/else.**

> **Tu explicación teórica precisa:**
> "Hasta hoy, el programa ejecuta todas las instrucciones en orden, sin excepción. En la Clase 10 le van a dar a JavaScript la capacidad de tomar decisiones — de elegir qué bloque de código ejecutar según una condición.
>
> Eso se hace con `if` y `else`. El juego de 'Adivina el Número' necesita exactamente eso: si el número que ingresó el usuario es igual al número secreto, mostrar '¡Ganaste!'; si no, mostrar 'Intenta de nuevo'. Esa lógica es la Clase 10."

> *Mostrar un fragmento breve sin explicar, solo para generar expectativa:*
> ```javascript
> if (intento === NUMERO_SECRETO) {
>   alert('¡Ganaste!');
> } else {
>   alert('Intenta de nuevo');
> }
> ```
> *"Este código en 5 días va a ser suyo y van a entender cada parte."*

---

### 6.5 Logros Adicionales del Lab (Para quien terminó antes)

**EN PANTALLA: LAB_CLASS_09 — Sección "Logros Adicionales".**

> **Nota táctica:**
> Si algún alumno terminó todo el lab antes del cierre, redirigirlos a los logros adicionales del `LAB_CLASS_09`:
>
> - 🟢 **Agregar una tercera variable** — Pedir `ciudad` con `prompt()` y armar un mensaje completo con nombre, edad y ciudad usando template literals.
> - 🟡 **Conversión avanzada** — Investigar `parseInt()` y calcular el año en que el usuario cumplirá 100 años.
> - 🔴 **Preview de condicionales** — Investigar `if/else` e intentar mostrar un mensaje diferente si la edad es mayor o menor a 18.

---

> **🎯 CHECKLIST DE CIERRE — Verificar antes de terminar la sesión**
> | ✓ | Item |
> |---|---|
> | ☐ | `index.html` y `script.js` enlazados correctamente (sin errores en consola) |
> | ☐ | Al menos 3 variables declaradas: una `const`, dos `let` |
> | ☐ | `prompt()` captura nombre y edad del usuario |
> | ☐ | `Number()` convierte la edad antes de la operación aritmética |
> | ☐ | `alert()` muestra un saludo con Template Literal |
> | ☐ | La consola muestra el año de nacimiento como número (no `NaN`) |
> | ☐ | Al menos 3 commits descriptivos en el repositorio de GitHub |

---

> **Nota final del instructor:**
> Esta clase es la primera del Módulo 3. Todo lo que verán en las próximas clases — condicionales, bucles, funciones, DOM — usa variables, tipos y operadores como base. Si un alumno salió de hoy sin entender por qué `prompt()` devuelve un string, eso va a generar bugs en cada clase siguiente. Si alguien quedó con dudas, el lab de los logros adicionales y la sección de "Logros Opcionales" del LAB_CLASS_09 son el espacio idóneo para reforzar antes de la Clase 10.






