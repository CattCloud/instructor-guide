# CLASE 11 — Funciones, DOM y Eventos
## Flujo de Presentación (CAPA 2 + CAPA 3)

> **Proyecto Víctima:** `guess-number-js` — estado actual: `script.js` con los ejercicios de condicionales de Clase 10.
> **Meta de la clase:** Completar las 3 partes del Lab 11. Al final, el juego Adivina el Número funciona con interfaz visual, funciones organizadas y eventos.

---

## MOMENTO 0 — Hook: El Antes y el Después
**Tiempo:** 10 min

> **Nota táctica de inicio: {Romper la inercia del prompt/alert}**
> El alumno viene de 3 clases usando `prompt()` y `alert()`. Siente que eso es "lo normal". El objetivo de este momento no es solo motivar — es crear una disonancia cognitiva deliberada: mostrar que lo que consideran normal no es lo que se usa en el mundo real, y que la solución está exactamente al alcance de lo que ya saben.

---

### 0.1 Demo "Antes" — El estado actual

**EN PANTALLA: VSCODE — `script.js` actual del alumno.**

> **La acción guiada:**
> 1. Abrir el archivo `script.js` del proyecto. El alumno ve su código de la Clase 10: el verificador de votación, el clasificador de temperatura, el reto de descuento.
> 2. Ejecutar el verificador de votación con Live Server. El `prompt` aparece, el `alert` aparece.

> **Tu explicación teórica precisa:**
> *"Este código funciona. La lógica es correcta. Pero hay un problema — ¿cuándo fue la última vez que viste un `prompt` o un `alert` en Instagram, en YouTube, en Google?"*

> **Pregunta de calibración:**
> *"En una escala del 1 al 10, ¿qué tan profesional se ve esto?"*
>
> *(Respuesta esperada: entre 1 y 3. Dejar que el grupo lo diga. No corregir — esa es la respuesta correcta. Si alguien dice más alto, preguntar: "¿En qué app habrías visto algo así?")*

---

### 0.2 Demo "Después" — La interfaz en código

**EN PANTALLA: VSCODE — Proyecto terminado (ya preparado).**

> **La acción guiada:**
> 1. Abrir el proyecto terminado del juego (el que tiene la interfaz visual completa).
> 2. Mostrar el `index.html` y el `script.js` — no explicar el código, solo mostrar que existe.
> 3. Abrir con Live Server. La tarjeta flotante aparece centrada, con el input y el botón.
> 4. Escribir un número, presionar "Adivinar" — el mensaje aparece en la página con color.
> 5. Adivinar el número correcto — la tarjeta brilla en verde.

> **Tu explicación teórica precisa:**
> *"Vamos a crear esta interfaz. Pero no solo eso — vamos a adicionar interacción con JS. Lo que ven aquí no es solo HTML y CSS. Cada vez que hace clic, una función de JavaScript se ejecuta y actualiza la página. Eso es lo que aprenden hoy."*

---

### 0.3 Puente — El diagrama al código

**EN PANTALLA: EXCALIDRAW — Diagrama del proyecto Adivina el Número.**

> **La acción guiada:**
> 1. Abrir el diagrama de Excalidraw del proyecto (el que se mostró en clases anteriores): la computadora, el usuario, la flecha de "Número?", la flecha de interacción, los bloques "Muy alto", "Correcto", "Muy bajo".
> 2. Señalar cada elemento mientras se habla.

> **Tu explicación teórica precisa:**
> *"Este diagrama es el plano del juego. Hoy lo convertimos en una página web funcional — no solo la interfaz sino también toda la lógica que ya dominan. La tarjeta es la computadora del diagrama. El input es la flecha 'Número?'. Los mensajes con color son los bloques de respuesta. Al final de esta clase, ese diagrama existe en el navegador."*

> **Pregunta de calibración:**
> *"Mirando el diagrama — ¿qué parte del canvas creen que será más difícil de convertir en código: la interfaz visual o la lógica de comparación?"*
>
> *(Respuesta esperada: la interfaz. La lógica ya la hicieron. Confirmar: "Exacto — la lógica ya la conocen de clase 10. Lo nuevo hoy es conectar esa lógica a lo que ve el usuario en la pantalla.")*

---

### 0.4 Concepto nuevo — `null`

**EN PANTALLA: VSCODE — Consola.**

> **Tu explicación teórica precisa:**
> *"Antes de arrancar, necesito que conozcan un valor especial. En la clase anterior hablamos de `undefined` — el valor que JavaScript asigna automáticamente cuando declaran una variable pero no le guardan nada todavía.*
>
> *Hoy conocerán `null`. La diferencia es intencional: `undefined` es un descuido o un 'todavía no', mientras que `null` es una ausencia de valor **intencional**. Es como una caja que tú mismo etiquetas como 'vacía a propósito'. Se usa para indicar que buscaste algo y definitivamente no existe."*

> **La acción guiada — Demo en vivo:**

```js
// En la consola o archivo de pruebas
let puntajeJugador;
console.log(puntajeJugador); // → undefined (JS dice: no sé qué es esto aún)

let mejorPuntaje = null;
console.log(mejorPuntaje);   // → null (El programador dice: no hay mejor puntaje todavía)

// O mostrar el caso del prompt:
let respuesta = prompt("Escribe tu nombre"); 
// Si el usuario hace clic en "Cancelar":
console.log(respuesta); // → null (El navegador dice: canceló, intencionalmente no hay valor)
```

> *"Recuerden bien este valor, porque hoy cuando busquemos cosas en nuestra página web, si JavaScript no las encuentra, no nos dará un error, nos devolverá `null`."*

> **Pregunta de calibración:**
> *"Si yo declaro `let edad;` e imprimo `edad`, ¿qué sale? Y si el usuario cancela un `prompt()`, ¿qué te devuelve el navegador?"*
>
> *(Respuesta esperada: `edad` sale `undefined` porque no le asigne nada, el prompt cancelado devuelve `null` porque es una ausencia de valor reportada explícitamente por el navegador).*

---

### 🚨 Gestión de Riesgos — Momento 0

**El alumno no recuerda el diagrama de clases anteriores:**
- No hay riesgo real — el diagrama es solo contexto visual. El Code-Along no depende de haberlo memorizado.
- Respuesta: *"No importa si no lo recuerdan en detalle — lo relevante es ver que lo que dibujamos ya existe como juego funcional."*

**El alumno pregunta si tienen que escribir todo el CSS:**
- Señal: ansiedad por el volumen del código.
- Respuesta: *"El CSS viene en un template ya preparado. Su trabajo hoy es entender el JS que conecta ese HTML con la lógica. El CSS lo copiamos — el JS lo construyen paso a paso."*

---

## MOMENTO 1 — Funciones: El Bloque Reutilizable
**Tiempo:** 20 min

> **Nota táctica de inicio: {Establecer el problema antes de la solución}**
> Antes de mostrar la sintaxis, el alumno debe sentir el dolor de no tener funciones. La motivación no es "las funciones son buenas" — es "sin funciones, este código es un desastre". Partir del código del ejercicio de votación de la clase anterior para mostrar qué significa repetir lógica.

---

### 1.1 Concepto y El problema — Código que se repite

**EN PANTALLA: VSCODE — `script.js` (ejercicios de Clase 10).**

> **Tu explicación teórica precisa:**
> *"Una función en JavaScript es un bloque de código reutilizable diseñado para realizar una tarea específica. Miren el código que tienen: si el dueño del juego dice 'quiero agregar un emoji al mensaje de alerta' — ¿qué pasa? Tienen un `alert` en la votación, otro en la temperatura, cuatro en el reto de notas... Tienen que editar cada uno de ellos a mano. Eso escala mal y genera errores.*
>
> *Las funciones resuelven eso. Escribimos la lógica una sola vez, le damos un nombre, y la llamamos desde cualquier parte. Si el día de mañana queremos cambiar algo, lo cambiamos en un solo lugar y se actualiza en todo el proyecto.*
>
> *Lo que vamos a hacer durante esta clase se llama **refactorización**: tomar un código que ya funciona (nuestra lógica del juego) y reorganizarlo para que sea mejor, más escalable y reutilizable, sin cambiar su resultado. Vamos a meter esa lógica dentro de funciones."*

> **Pregunta de calibración:**
> *"Refactorizar es algo que harán todos los días como programadores. Si refactorizamos bien nuestro juego, al final de la jornada... ¿el usuario final notará la diferencia en cómo funciona la lógica?"*
>
> *(Respuesta esperada: No en la lógica. La refactorización es un cambio interno para los desarrolladores — el código queda más ordenado, pero hace exactamente lo mismo. Confirmar: "Exacto. Funciona igual por fuera, pero por dentro es profesional.")*

---

### 1.2 Anatomía de una función

**EN PANTALLA: VSCODE — Archivo nuevo o espacio limpio.**

> **Tu explicación teórica precisa:**

>Fases 
- Declaración (Creación): Donde defines el nombre, los parámetros y la lógica que ejecutará.
- Llamada (Invocación): Donde ejecutas ese código pasando los argumentos necesarios para obtener un resultado.
> *"Una función en JavaScript tiene cuatro partes:*
- *La palabra clave `function`. 
- El nombre — que describe exactamente qué hace. 
- Los paréntesis con los parámetros — lo que la función recibe para trabajar. 
- Y las llaves con el cuerpo — las instrucciones que ejecuta."*
>
> *"JavaScript tiene tipado dinámico: no declaran el tipo del parámetro como en otros lenguajes. Solo el nombre. El tipo se determina en el momento que se llama la función con los argumentos reales."*

> **La acción guiada — Demo en vivo progresivo:**

```js
// 1. Función sin parámetros — solo ejecuta algo
function saludar() {
  console.log('¡Hola!');
}

saludar(); // → ¡Hola!
saludar(); // → ¡Hola! (misma línea, mismo resultado — eso es reutilizable)

// 2. Función con parámetro — recibe datos
function saludarA(nombre) {
  console.log('¡Hola, ' + nombre + '!');
}

saludarA('Ana');   // → ¡Hola, Ana!
saludarA('Carlos'); // → ¡Hola, Carlos!
saludarA(123);     // → ¡Hola, 123! (JS no obliga el tipo — tipado dinámico)
```

> *"Observen: la función es la misma. Los argumentos cambian. El código se ejecuta con cada llamada — no al declararlo."*

> **Pregunta de calibración:**
> *"Si llamo `saludarA()` sin pasarle ningún argumento, ¿qué imprime?"*
>
> *(Respuesta esperada: `'¡Hola, undefined!'` — porque el parámetro `nombre` queda sin valor. Ejecutar en vivo para confirmarlo.)*

---

### 1.3 `return` — Dos roles en uno

**EN PANTALLA: VSCODE — Continuando demo.**

> **Tu explicación teórica precisa:**
> *"`return` hace dos cosas. Primera: detiene la ejecución de la función — lo que esté después del `return` no se ejecuta. Segunda: devuelve un valor al código que llamó la función, un valor que puede guardarse en una variable y usarse después."*

> **La acción guiada — Demo contrastado:**

```js
// Sin return: la función hace algo, pero no devuelve nada
function mostrarDoble(numero) {
  console.log(numero * 2);
}

let resultado = mostrarDoble(5); // Imprime 10 en consola...
console.log(resultado);          // → undefined (no había return)

// Con return: la función devuelve un valor que podemos usar
function calcularDoble(numero) {
  return numero * 2;
}

let doble = calcularDoble(5);    // No imprime nada...
console.log(doble);              // → 10 (el valor está guardado)
```

> *"La diferencia práctica: si necesitan usar el resultado de la función en otro lugar del código, necesitan `return`. Si solo necesitan un efecto (mostrar algo, cambiar algo), no necesariamente."*

> **Segundo rol — `return` como salida anticipada:**

```js
// return detiene la función inmediatamente
function verificarEdad(edad) {
  if (edad < 0) {
    return false; // Sale aquí — lo de abajo no se ejecuta
  }
  if (edad < 18) {
    return false;
  }
  return true;
}

console.log(verificarEdad(-5)); // → false (salió en la primera condición)
console.log(verificarEdad(15)); // → false (salió en la segunda)
console.log(verificarEdad(20)); // → true
```

> *"Este patrón lo usarán en el juego: si la entrada del usuario no es válida, `return` sale de la función sin ejecutar la comparación. Es la forma más limpia de validar."*

> **Pregunta de calibración:**
> *"Si `verificarEdad(15)` sale con `return false` en la segunda condición, ¿la tercera línea `return true` se ejecuta?"*
>
> *(Respuesta esperada: No — la función ya terminó en el segundo `return`. Solo ejecuta uno por llamada.)*

---

### 1.4 Reto Práctico Rápido (4 min)

**EN PANTALLA: PRESENTACIÓN — Enunciado del reto.**

> **Tu explicación teórica precisa:**
> *"Ustedes solos. Tienen 3 minutos para convertir una de sus lógicas de condicionales a una función reutilizable. Yo pondré el enunciado en pantalla, ustedes escriben el código y me pegan el resultado en el chat."*

> **La acción guiada:**
> 1. Proyectar el enunciado: *"Crea una función llamada `evaluarRango` que reciba un parámetro llamado `puntos`. Si los puntos son menores a 1000, la función debe hacer `return 'Bronce'`. Si los puntos están entre 1000 y 3000 (incluido), `return 'Plata'`. Si son mayores a 3000, `return 'Leyenda'`. ¡Apliquen la lógica condicional que ya saben, pero empaquetada en una herramienta reutilizable!"*
> 2. Iniciar reloj. Observar a los alumnos trabajar.
> 3. Al terminar el tiempo, verificar las respuestas en el chat.
> 4. Escribir rápidamente en vivo la solución correcta.

```js
// Solución esperada
function evaluarRango(puntos) {
  if (puntos < 1000) {
    return 'Bronce';
  } else if (puntos <= 3000) {
    return 'Plata';
  } else {
    return 'Leyenda';
  }
}

// Extra - mostrar cómo probarla
console.log(evaluarRango(500));  // 'Bronce'
console.log(evaluarRango(2000)); // 'Plata'
console.log(evaluarRango(5000)); // 'Leyenda'
```

> **Pregunta de calibración:**
> *(Revisando el código de los alumnos en el chat)*
> *"Si en mi función, en lugar de poner `return 'Bronce'` puse un simple `console.log('Bronce')`, ¿qué devolverá la función si intento guardarla en una variable: `let miRango = evaluarRango(500);`?"*
>
> *(Respuesta esperada: Devolverá `undefined`. Imprimirá 'Bronce' en la consola, pero la caja (variable) quedará vacía porque no hubo un `return` que exportara el valor. Confirmar: "Exacto. Las funciones que calculan o deciden algo siempre deben tener `return` para que otros fragmentos de código puedan usar ese valor final.")*

---

### 1.5 Parámetros por defecto

**EN PANTALLA: VSCODE — Continuando demo.**

> **Tu explicación teórica precisa:**
> *"Hay situaciones donde quieren que un parámetro tenga un valor predeterminado si no se pasa ninguno. Se asigna directamente en la declaración con `=`. Pero ojo — el valor por defecto solo activa si no se pasa argumento o si se pasa `undefined`. Si se pasa `null`, JavaScript toma `null` como valor válido y el default no activa."*

> **La acción guiada:**

```js
function saludarCon(nombre, saludo = 'Hola') {
  console.log(saludo + ', ' + nombre + '!');
}

saludarCon('Ana');              // → Hola, Ana!       (usa default)
saludarCon('Ana', 'Buenas');   // → Buenas, Ana!      (usa el argumento)
saludarCon('Ana', undefined);  // → Hola, Ana!        (undefined activa el default)
saludarCon('Ana', null);       // → null, Ana!        (null NO activa el default ⚠️)
```

> **Pregunta de calibración:**
> *"Si tengo `function calcular(valor, descuento = 0.10)` y la llamo con `calcular(100, null)`, ¿qué porcentaje de descuento aplica?"*
>
> *(Respuesta esperada: `null` — porque null es un valor válido y no activa el default. El cálculo sería `100 * null = 0`, lo que daría un resultado incorrecto. Es la trampa de los defaults.)*

---

> **Nota táctica de transición:**
> El alumno ya sabe declarar funciones, usar parámetros, entender `return` y los defaults. Ahora viene la pregunta natural: *"¿A dónde van esos resultados si ya no usamos `alert()`?"* — La respuesta es el DOM. Ese es el siguiente momento.

---

### 🚨 Gestión de Riesgos — Momento 1

**El alumno invoca la función al declararla:**
- Error: escribe `saludarA('Ana')` dentro de la declaración de otra función.
- Respuesta: *"La declaración solo define qué va a hacer. Para que se ejecute, necesitan invocarla fuera de las llaves del cuerpo."*

**El alumno confunde parámetro con argumento:**
- No es un error crítico, pero generar confusión en terminología frena el aprendizaje posterior.
- Respuesta: *"Parámetro es el nombre que aparece en la declaración. Argumento es el valor concreto al llamarla. `function saludarA(nombre)` → `nombre` es parámetro. `saludarA('Ana')` → `'Ana'` es argumento."*

**El alumno espera que `return` imprima en la consola:**
- Error: declaran la función con `return` pero se preguntan por qué no ven nada.
- Respuesta: *"`return` le da el valor a quien llamó la función. Si nadie guarda ese valor ni lo imprime, desaparece. Deben guardarlo en variable o envolverlo en `console.log(calcularDoble(5))`."*

---

## MOMENTO 2 — DOM: JavaScript Controla la Página
**Tiempo:** 15 min

> **Nota táctica de inicio: {Del resultado invisible al resultado visible}**
> El alumno acaba de hacer funciones que devuelven valores con `return`. La pregunta que tiene en la cabeza ahora mismo es: "¿Y dónde aparece ese resultado si ya no uso `alert()`?" Este momento responde exactamente eso. El DOM es el puente entre la lógica de JavaScript y lo que el usuario ve en la pantalla.

---

### 2.1 El problema — JS no ve la página

**EN PANTALLA: VSCODE — `script.js` abierto junto al navegador.**

> **Tu explicación teórica precisa:**
> *"Hasta ahora JavaScript 'vivía' solo en la consola o en ventanas emergentes. Nuestras funciones calculan, comparan, devuelven valores — pero el usuario de la página no ve nada de eso. El HTML que tienen en `index.html` existe en el navegador como una pantalla estática. JavaScript necesita un puente para leerla y modificarla en tiempo real. Ese puente es el DOM."*


> Cuando trabajamos con **HTML y CSS**, nuestras páginas web son **estáticas**, lo que significa q**ue su contenido y estructura no cambian sin intervención del usuario.** Sin embargo, al agregar **JavaScript**, podemos hacerlas **dinámicas**, permitiendo:
> 
> - Modificar contenido(HTML y CSS) en tiempo real.
> - Responder a acciones del usuario.
> - Manipular elementos, atributos y estilos.
> - Crear interacciones avanzadas.

<aside>
💡

 **JavaScript utiliza el DOM** como puente o conexión entre el código JS y la estructura HTML. 

</aside>

---

### 2.2 ¿Qué es el DOM?

**EN PANTALLA: PRESENTACIÓN CANVA — Imagen HTML → Árbol DOM (imagen compartida).**

> **Tu explicación teórica precisa:**
> *"Cuando el navegador carga un archivo HTML, no lo lee como texto plano — lo convierte en una estructura de objetos organizada como un árbol. A esa estructura se le llama DOM: Document Object Model. Es una **representación** del documento HTML en forma de un **árbol de nodos**.
> 
> ¿Por qué necesitamos esto? Porque HTML y CSS son HTML y CSS estáticos. Si queremos hacer la página dinámica, modificar su contenido en tiempo real o responder al usuario, el navegador necesita transformar el HTML en un DOM. JavaScript usa este DOM como puente para conectarse con la estructura visual.
>
> *Miren la imagen. A la izquierda: código HTML con etiquetas. A la derecha: el mismo código representado como un árbol jerárquico — `html` es la raíz, adentro están `head` y `body`, luego los `div` y los `p`. Padre-hijo. Eso es el DOM.*
>
> *Lo importante: cada nodo de ese árbol es un objeto de JavaScript. Si cambian una propiedad en JavaScript, la página se actualiza en tiempo real en la pantalla."*

**Que pasa por detras?**
- El navegador transforma el HTML en un "árbol" estructurado (DOM) 
- Le aplica estilos CSS para determinar el aspecto final de cada elemento (Render Tree). 
- Posteriormente, JavaScript puede modificar la estructura, finalizando con el "dibujado" de la página en pantalla.

---

### 2.3 `document` — La puerta de entrada

**EN PANTALLA: NAVEGADOR — Consola de DevTools abierta.**

> **Tu explicación teórica precisa:**
> *"Para interactuar con el DOM desde JavaScript, todo empieza por el objeto `document`. Es el nodo raíz del árbol del DOM y representa el documento HTML en su conjunto. Todos los métodos para buscar o modificar elementos parten de aquí."*

> **La acción guiada — Demo en vivo desde la consola:**

```js
// En la consola del navegador
console.log(document);         // → el objeto que representa toda la página
console.log(document.title);   // → el título de la pestaña
document.title = 'Clase 11';   // → cambia el título de la pestaña en tiempo real
```

> *"Ven eso — cambiamos el título de la pestaña con una sola línea. No recargamos la página, no tocamos el HTML. JavaScript modificó el DOM y el navegador lo reflejó de inmediato. Así funciona todo lo que hacen las apps web."*

---

### 2.4 Métodos de selección — Capturar un elemento

**EN PANTALLA: VSCODE — dividido con el navegador.**

> **Tu explicación teórica precisa:**
> *"Para modificar un elemento, primero hay que capturarlo — obtener una referencia en JavaScript a ese nodo del DOM. El método más común es `getElementById()`, que busca un nodo por su atributo `id` y lo retorna como objeto. Si no lo encuentra, retorna `null` — ahí el concepto del momento 0 entra en juego.*
>
> *Existen otros métodos:* 
> *- `getElementsByClassName()` para buscar por clase (retorna una colección de elementos).*
> *- `getElementsByTagName()` para buscar por tipo de etiqueta.*
> *- En el lab solo usaremos `getElementById()`, pero es importante conocer los otros para entender que el DOM es completo y flexible."*

> **La acción guiada:**

```js
// HTML de referencia:
// <h1 id="titulo">Hola, DOM</h1>
// <p class="parrafo">Párrafo 1</p>
// <p class="parrafo">Párrafo 2</p>

// Por ID (retorna UN elemento o null)
let titulo = document.getElementById('titulo');
console.log(titulo); // → objeto del <h1>

// Por clase (retorna HTMLCollection — múltiples)
let parrafos = document.getElementsByClassName('parrafo');
console.log(parrafos); // → HTMLCollection con los 2 <p>

// Por etiqueta (retorna HTMLCollection — múltiples)
let todosLosP = document.getElementsByTagName('p');
console.log(todosLosP); // → HTMLCollection con los 2 <p>
```

> **Pregunta de calibración:**
> *"`document.getElementById('titulo')` — si escribo el `id` con mayúsculas distintas al HTML, por ejemplo `'Titulo'` en lugar de `'titulo'`, ¿qué devuelve?"*
>
> *(Respuesta esperada: `null`. Los `id` son case-sensitive — `'titulo'` y `'Titulo'` son distintos. Este es el error más frecuente en el lab.)*

---

### 2.5 `textContent` y `style` — Modificar el elemento

**EN PANTALLA: NAVEGADOR — Consola de DevTools.**

> **Tu explicación teórica precisa:**
> *"Una vez capturado el elemento, lo manipulamos con sus propiedades. Las dos más usadas hoy son:*
>
> *`textContent`: lee o reemplaza el texto visible del elemento. Solo texto plano — no interpreta HTML.*
>
> *`style`: objeto con todas las propiedades CSS del elemento. Se acceden en camelCase → `background-color` se convierte en `backgroundColor`. Los valores siempre son strings, incluyendo las unidades: `'24px'`, `'red'`, `'none'`."*

> **La acción guiada — Demo "wow" en vivo desde la consola:**
> 1. Abrir cualquier página en el navegador (puede ser el HTML básico del proyecto).
> 2. Ejecutar en la consola:

```js
// Capturar
const h1 = document.querySelector('h1'); // querySelector también funciona por selector CSS

// Leer texto
console.log(h1.textContent); // → muestra el texto actual

// Cambiar texto
h1.textContent = '¡JavaScript controló esto!';

// Cambiar estilos
h1.style.color = '#e94560';
h1.style.fontSize = '48px';
h1.style.backgroundColor = '#0f0c29';
```

> *"Escribieron tres líneas y el elemento se transformó en pantalla. Sin recargar. Sin tocar el HTML. Eso es el DOM. Eso es lo que conectará las funciones que ya saben escribir con la página visual del juego."*

> **Pregunta de calibración:**
> *"Si escribo `h1.style.font-size = '24px'` — exactamente así, con guión — ¿funciona?"*
>
> *(Respuesta esperada: No. Las propiedades CSS con guión se convierten a camelCase en el DOM: `font-size` → `fontSize`, `background-color` → `backgroundColor`. El guión en JavaScript es el operador de resta, no parte de un nombre de propiedad.)*

---

> **Nota táctica de transición:**
> Ya tienen funciones que organizan lógica y saben seleccionar y modificar elementos del DOM. El paso que falta: conectar ambos mundos en el proyecto real. En el siguiente momento empezamos el Code-Along del Lab.

---

### 🚨 Gestión de Riesgos — Momento 2

**`getElementById()` devuelve `null`:**
- Señal: el alumno hace `console.log(elemento)` y ve `null`.
- Hay exactamente 3 causas posibles: el `id` está mal escrito (case-sensitive), el elemento no existe en el HTML, o el `<script>` está cargando antes del HTML (en el `<head>` sin `defer`).
- Respuesta: *"Revisen las tres: ¿el id existe en el HTML? ¿Está escrito exactamente igual? ¿El `<script>` está al final del `<body>`?"*

**El alumno escribe `h1.style.font-size` con guión:**
- Error clásico de confusión entre CSS y JS.
- Respuesta: *"En el DOM las propiedades CSS se escriben en camelCase. El guión es el operador de resta en JS. `font-size` → `fontSize`, `background-color` → `backgroundColor`."*

**El alumno modifica `textContent` pero no ve el cambio:**
- Causa: capturó el elemento equivocado (el `getElementById` apuntaba a otro `id`).
- Respuesta: *"Hagan `console.log(elemento)` para verificar que tienen el objeto correcto antes de modificarlo. Si imprime `null`, el problema está en el `getElementById`."*

---

## MOMENTO 3 — CODE-ALONG Lab Parte 1: HTML + DOM en el Proyecto
**Tiempo:** 25 min

> **Nota táctica de inicio: {Sincronización de entorno}**
> Pasamos de la consola abstracta al proyecto en código. En este bloque el alumno borra el código viejo de la Clase 10 y planta los cimientos del Adivina el Número: HTML en su lugar y JS capturando los elementos. Si alguien se pierde aquí con un `null`, arrastrará el error el resto de la clase. Velocidad lenta, verificación alta.

---

### 3.1 Preparación y Borrón y cuenta nueva

**EN PANTALLA: VSCODE — Repositorio `guess-number-js`.**

> **La acción guiada:**
> 1. Asegurarse que todos tengan el repositorio abierto y Live Server corriendo (la pantalla debería mostrar una página vacía o el HTML básico original).
> 2. Abrir `script.js`.
> 3. Borrar TODO el código que probaron en la clase 10 (variables sueltas, prompts, funciones de reto).
> 4. Guardar archivo.

> **Tu explicación teórica precisa:**
> *"Archivo en blanco. Las lógicas que practicaron antes ya las dominan y quedan guardadas en sus repositorios pasados. Hoy empezamos la refactorización final de nuestro juego en código limpio y profesional."*

---

### 3.2 HTML a la cancha — La Interfaz y su Diagrama

**EN PANTALLA: VSCODE (`index.html`) + NAVEGADOR (`Live Server`).**

> **La acción guiada:**
> 1. Abrir `index.html`.
> 2. Copiar y pegar el bloque `<main class="game-card">...</main>` (proporcionado por el facilitador en el chat o recurso adjunto) dentro del `<body>`.
> 3. Verificar en el navegador que aparece la tarjeta del juego centrada y estilizada.

> **Tu explicación teórica precisa:**
> *"Esta es la cara de nuestro proyecto. Recuerden el diagrama de Excalidraw del principio de la clase:
> - El bloque 'Número?' que le preguntaba al usuario, ahora es el `<input id="valorUsuario">`.
> - La flecha de interacción roja, ahora es nuestro `<button id="btnAdivinar">`.
> - Las cajas verde y azul de 'Correcto' o 'Muy alto', ahora van a vivir dentro del `<p id="mensaje">`.
> 
> A eso me refería con plasmar el diagrama al código. Esos `id` son la dirección exacta que JavaScript buscará para conectar la lógica con los ojos del usuario."*

---

### 3.3 Conectar el DOM en JS

**EN PANTALLA: VSCODE (`script.js`) + NAVEGADOR (Consola abierta).**

> **La acción guiada:**
> 1. Declarar las tres variables globales usando `getElementById`.
> 2. Hacer un `console.log()` de las tres variables juntas para comprobar que no hay `null`.

```js
// Conexión con el HTML (DOM)
const inputIntento = document.getElementById('inputIntento');
const btnAdivinar = document.getElementById('btnAdivinar');
const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');
const historial = document.getElementById('historial');
const btnReiniciar = document.getElementById('btnReiniciar');
const tarjeta = document.getElementById('game-card');

console.log(inputIntento, btnAdivinar, mensaje, contador, historial);
```

> **Tu explicación teórica precisa:**
> *"Las declaramos como `const` porque las etiquetas del HTML que estamos referenciando no van a cambiar a lo largo del juego: el input siempre será ese mismo pedazo de memoria. Si se fijan en la consola, ahora nuestro JS tiene poder absoluto sobre esos pedazos de la pantalla."*

> **Pregunta de calibración:**
> *(Revisando consolas de los alumnos)* *"Si a alguien el `console.log(mensaje)` le imprimió `null`, ¿qué es lo primero que debe revisar en su código?"*
>
> *(Respuesta esperada: Que el ID escrito `'mensaje'` coincida exactamente con el de la etiqueta `<p>` en HTML, y que el script esté vinculado correctamente. Confirmar: "Exacto. El navegador no adivina, busca coincidencias literales.")*

---

### 3.4 Primera función: Refactorización a `mostrarMensaje`

**EN PANTALLA: VSCODE (`script.js`).**

> **La acción guiada:**
> 1. Declarar la función que controlará el `<p id="mensaje">`.

```js
// Función genérica para mostrar mensajes en pantalla
function mostrarMensaje(texto, color = '#333') {
  mensaje.textContent = texto;
  mensaje.style.color = color;
}

// Probarla: Mismo efecto que si usáramos solo if/else repetido, pero escalable
mostrarMensaje('¡Bienvenido al juego!', 'blue');
```

> **Tu explicación teórica precisa:**
> *"Miren esto: antes hacían `alert()`. Luego aprendimos condicionales y había que imprimirlos a mano. Si escribimos un juego con puro `if`, la lógica de cambiar textos y colores se repetiría diez veces a lo largo del archivo. 
> 
> En vez de eso, escribimos esta sola función genérica. ¿Recuerdan los parámetros por defecto de hace un rato? Si llamamos a la función y no le mandamos color, usará `#333` (gris oscuro), pero si le mandamos `'blue'`, reescribirá el DOM y pintará la pantalla al instante.
> 
> *Acaban de refactorizar su primera acción del juego. Con esto preparan un bloque limpio para lo que venga después. El `mostrarMensaje` reemplazará a todos los alerts de aquí en adelante."*

---

### 3.5 Commit inicial

**EN PANTALLA: TERMINAL (Git Bash).**

> **La acción guiada:**
> 1. Comandos de versionamiento para cerrar el bloque.

```bash
git add .
git commit -m "feat: interfaz visual HTML y primera funcion mostrarMensaje conectada al DOM"
```

> *"Primer checkpoint del día. Interfaz visual lista, cableado del DOM listo y probado. En el siguiente bloque vamos a hacer que el código reaccione por fin a nuestros clics e interacciones."*

---

## ⏸ RECESO — 30 min

> **Nota táctica de receso:** Exigir que antes de irse a descansar, todos tengan Live Server funcionando con la tarjeta y el mensaje `¡Bienvenido al juego!` pintado de color azul en la web. Alguien sin esto no puede empezar el Momento 4 (Eventos), porque no tendrá elementos para darle clic o leer datos.

---

## MOMENTO 4 — Eventos: El Código Escucha al Usuario
**Tiempo:** 10 min

> **Nota táctica de inicio: {El código está ciego y sordo}**
> Tienen funciones, tienen el DOM conectado, pero si tocan el botón "Adivinar" en su pantalla, no pasa absolutamente nada. El código en `script.js` corre una sola vez al cargar la página y muere. Necesitan decirle a JavaScript: "Quédate despierto y espera a que el usuario haga esto". Esa es la naturaleza de los eventos.

---

### 4.1 ¿Qué es un evento?

**EN PANTALLA: PRESENTACIÓN / PIZARRA.**

> **Tu explicación teórica precisa:**
> *"Un evento es una señal de que algo ocurrió en la página. Un clic, pasar el mouse, teclear, hacer scroll. El navegador detecta todo eso, pero si no le decimos a JavaScript que 'escuche' esas señales, las ignora por completo. Para que reaccione, necesitamos configurar un sistema de eventos."*

> **Pregunta de calibración:**
> *(Analogía de eventos)* *"Si su celular recibe un mensaje pero no tiene el timbre activado, no vibra, ni enciende la pantalla, ¿cómo saben que llegó el mensaje? Tendrían que estar mirando la pantalla todo el tiempo. ¿Qué característica del celular cambia eso?"*
>
> *(Respuesta esperada: Las notificaciones/alarmas activas. Confirmar: "Exacto. Su celular funciona por reacción, te avisa en el momento justo que la acción ocurrió para que actúes, no está con la pantalla encendida eternamente. JavaScript necesita ese mismo sistema de notificaciones.")*

---

### 4.2 Componentes de un Evento

**EN PANTALLA: PRESENTACIÓN / PIZARRA — Diagrama de los 3 componentes del Evento.**

> **Tu explicación teórica precisa:**
> *"Miren el diagrama en pantalla. Todo sistema de eventos en JavaScript funciona como ese timbre del celular y necesita obligatoriamente 3 piezas encadenadas para existir:*
> 
> *1. **Elemento Destino (Target)**: ¿A quién le va a pasar la acción? Puede ser un botón específico, un input de texto, o la página entera.*
> *2. **Tipo de Evento**: ¿Qué acción exacta debe ocurrir? (Pulsar el botón izquierdo del mouse `'click'`, bajar una tecla `'keydown'`, etc.).*
> *3. **Escuchador de Eventos (Event Listener / Manejador)**: ¿Qué bloque de código o función vamos a disparar como respuesta cuando las otras dos cosas ocurran?*
> 
> *Solo uniendo estas tres capas le daremos vida al botón de Adivinar de nuestro juego."*

---

### 4.3 `addEventListener` y la regla de oro de los paréntesis

**EN PANTALLA: VSCODE (`script.js`) + NAVEGADOR.**

> **Tu explicación teórica precisa:**
> *"Ya sabemos cuáles son las 3 piezas. El pegamento que las une en código es un método que tienen todos los elementos del DOM llamado `addEventListener()`. Literalmente: 'Añadir un escuchador de eventos'.*
> 
> *Como vimos en el diagrama, recibe dos cosas obligatorias adentro:*
> *1. El **tipo de evento** en formato string: `'click'`.*
> *2. La **función escuchadora** que debe ejecutarse.*
> 
> *Y aquí viene el error número uno de todo desarrollador junior: la forma en que le pasan la función. Escriban esto conmigo."*

> **La acción guiada — Demo en vivo del error forzado:**
> Debajo del código existente del Momento 3:

```js
function testEvento() {
  console.log('¡El click funcionó!');
}

// MAL: Ejecutándola de inmediato de forma equivocada
btnAdivinar.addEventListener('click', testEvento());
```

> *"Guarden y miren la consola sin tocar el botón. ¿Qué pasó?"*
> *(El texto se imprime instantáneamente al cargar la página)*
> 
> *"¡Se ejecutó sin hacer click! ¿Por qué? Porque en JavaScript, cuando le ponen paréntesis a una función `()`, le están dando la orden: 'ejecuta esto AHORA MISMO'.*
> 
> *La regla de oro: Al manejador del evento se le entrega el **nombre** de la función, como una referencia, **SIN** los paréntesis. Le estamos diciendo: 'Toma la receta de lo que tienes que hacer, pero ejecútala tú más tarde, solo cuando te hagan click'."*

```js
// BIEN: Pasando solo la referencia de la función (el paso 3 del diagrama)
btnAdivinar.addEventListener('click', testEvento); 
```

---

### 4.4 Funciones anónimas y el objeto `event`

**EN PANTALLA: VSCODE (`script.js`).**

> **Tu explicación teórica precisa:**
> *"A veces no queremos crear toda una función externa e inventarle un nombre si la vamos a usar solo para un trabajo rápido de una línea asociado a un botón. Para eso, JavaScript permite usar 'funciones anónimas'. Se declaran literalmente en el argumento."*

> **La acción guiada — Demo en vivo:**

```js
btnAdivinar.addEventListener('click', function() {
  console.log('Botón clickeado mediante función anónima');
});
```

> **Tu explicación teórica precisa:**
> *"Un último detalle. Dentro de estas funciones de los eventos, el navegador nos hace un regalo automáticamente: inyecta un objeto llamado `event` (o `e`). Este objeto contiene toda la información de lo que acaba de pasar: coordenadas exactas del mouse, tiempo exacto, o si fue un evento de teclado, qué tecla apretó el usuario."*

```js
// Escuchamos a TODO EL DOCUMENTO por teclas
document.addEventListener('keydown', function(event) {
  console.log('El objeto evento:', event);
  console.log('Tecla presionada:', event.key);
});
```

> **Pregunta de calibración:**
> *"Hagan click en la página en vivo en el navegador, y presionen la tecla principal que usan siempre para mandar formularios o chatear. ¿Qué valor exacto les escupe `event.key` en la consola?"*
>
> *(Respuesta esperada: La palabra `'Enter'` literal, con 'E' mayúscula. Confirmar: "Grábensela en la cabeza, porque en el siguiente bloque vamos a usarla para que no tengan que usar siempre el mouse para adivinar el número.")*

---

> **Nota táctica de transición:**
> Todo está sembrado. Saben funciones, saben usar el DOM, saben escuchar eventos y capturar el Enter. El siguiente momento es el corazón técnico puro de la clase: fusionarlo todo para darle vida al código del Lab Parte 2.

---

### 🚨 Gestión de Riesgos — Momento 4

**El alumno le pone `()` a la función en el `addEventListener`:**
- Este error ocurrirá, incluso habiendo hecho la demo de recién.
- Error: `btn.addEventListener('click', verificarIntento())`
- Consecuencia: El juego se juega solo automáticamente al cargar la web y el botón queda inútil (porque recibe el `return` en vez de la función).
- Respuesta: *"Borra los paréntesis del listener. Estás ordenando que se ejecute al mismo tiempo que el navegador lee esa línea en milisegundos."*

**Falta de comillas en el nombre del evento:**
- Error: `addEventListener(click, funcion)` en vez de `'click'`.
- Respuesta: *"JavaScript cree que `click` es una variable porque no tiene comillas. Necesita saber que es un String."*

---

## MOMENTO 5 — CODE-ALONG Lab Parte 2: El Cerebro del Juego
**Tiempo:** 30 min

> **Nota táctica de inicio: {Ensamblaje}**
> Este es el clímax técnico de la clase. Los alumnos van a tomar la lógica de condicionales que aprendieron ayer y la van a encerrar dentro de una función grande que sirve como controlador principal interactivo. Velocidad media, asegurándose de que la consola no tire errores en cada paso.

---

### 5.1 El Estado del Juego (Variables Globales)

**EN PANTALLA: VSCODE (`script.js`).**

> **La acción guiada:**
> 1. Declarar las variables que guardarán los datos del juego arriba del todo, justo debajo de las variables del DOM.

```js
// Estado del juego
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let historialIntentos = [];
```

> **Tu explicación teórica precisa:**
> *"¿Por qué declaramos `numeroSecreto`, los `intentos` y el arreglo `historialIntentos` afuera y no adentro de la función que vamos a crear ahora? Porque si los declaramos adentro de una función asociada a un evento, cada vez que hagamos clic el juego generaría un número secreto nuevo, los intentos volverían a 0 y el arreglo borraría nuestra memoria de jugadas previas. Ganar sería estadística y mecánicamente imposible. 
> 
> A estas variables creadas afuera de todas las funciones se les llama de 'scope global'. Su trabajo es actuar como la memoria a largo plazo del juego, recordando la información viva mientras el usuario sigue interactuando sin recargar la página."*

---

### 5.2 La Función Principal: `verificarIntento`

**EN PANTALLA: VSCODE (`script.js`).**

> **La acción guiada:**
> 1. Crear el cascarón de la función `verificarIntento()`.
> 2. Leer el valor del input usando la propiedad `.value` y castearlo a Number.
> 3. Borrar el input para el siguiente turno.
> 4. Hacer un `console.log` para probar.

```js
// Función principal del juego
function verificarIntento() {
  // 1. Capturar lo que el usuario escribió (.value saca el texto del input)
  let adivinanza = Number(inputIntento.value);
  
  // Validación de entrada para evitar cálculos fantasma
  if (isNaN(adivinanza) || adivinanza < 1 || adivinanza > 100) {
    mostrarMensaje('⚠️ Ingresa un número del 1 al 100', 'orange');
    return; // Sale de la función, bloquea la ejecución de lo de abajo
  }

  // 2. Limpiar la caja automáticamente para el siguiente intento
  inputIntento.value = '';
  inputIntento.focus(); // Retorna el puntero
  
  console.log("El usuario intentó con:", adivinanza);
}
```

> **Tu explicación teórica precisa:**
> *"Hay dos cosas críticas que acaban de escribir y que los separan de un junior que solo copia sintaxis:*
> 
> *1. **Lectura de Inputs:** A diferencia de un párrafo donde usan `textContent`, a los `<input>` se les lee la propiedad `.value`. Como es texto, lo convertimos en número envolviéndolo en `Number()`.
> *2. **El patrón 'Early Return' (Salida Anticipada):** Miren el bloque `if (isNaN(...))`. Si el usuario apretó 'Adivinar' sin escribir nada o puso una letra, `isNaN` detecta que es un cálculo inválido. En ese instante ordenamos un `return;` vacío. ¿Para qué? Para actuar como un muro de contención. La función se aborta inmediatamente y el código de abajo (que aumentaría el contador y dañaría el historial) jamás llega a ejecutarse."*

---

### 5.3 Conectar el clic (Evento principal)

**EN PANTALLA: VSCODE (`script.js`) + NAVEGADOR.**

> **La acción guiada:**
> 1. Ir al final del archivo.
> 2. Poner el `addEventListener` pasándole como referencia la nueva función.

```js
// Eventos: Las alarmas del juego
btnAdivinar.addEventListener('click', verificarIntento);
```

> **Tu explicación teórica precisa:**
> *"Ahora prueben en su propio navegador en vivo. Escriban un número en la cajita y hagan click en el botón 'Adivinar'. ¿Se limpió la caja sola? ¿Apareció el console.log con el número exacto que escribieron? 
> 
> *Si esto les funcionó, felicidades. Acaban de cerrar el ciclo central de cualquier aplicación web: El usuario interactúa (Evento) → JavaScript captura datos (DOM) → La función se dispara (Lógica).*

---

### 5.4 Agregar el condicional adentro del Cerebro

**EN PANTALLA: VSCODE (`script.js`).**

> **La acción guiada:**
> 1. Meter la lógica de `if/else` (la que conocen del momento de condicionales) dentro de la función.
> 2. En lugar de usar `alert()`, llamar a la función utilitaria `mostrarMensaje(texto, color)`.

```js
function verificarIntento() {
  let adivinanza = Number(inputIntento.value);
  
  if (isNaN(adivinanza) || adivinanza < 1 || adivinanza > 100) {
    mostrarMensaje('⚠️ Ingresa un número del 1 al 100', 'orange');
    return;
  }

  inputIntento.value = '';
  inputIntento.focus();
  
  // Aumentar contador de intentos y actualizar la pantalla
  intentos++;
  contador.textContent = 'Intentos: ' + intentos;

  // Agregar al historial de memoria y pintar arreglo
  historialIntentos.push(adivinanza);
  historial.textContent = 'Historial: ' + historialIntentos.join(', ');

  // Lógica del juego refactorizada conectada al visualizador
  if (adivinanza === numeroSecreto) {
    mostrarMensaje(`🎉 ¡Ganaste en ${intentos} intentos! Era el ${numeroSecreto}`, '#00ff88');
    btnAdivinar.disabled = true;
    btnReiniciar.style.display = 'inline-block'; // Mostramos botón reset
    
    // Celebración visual en la tarjeta
    tarjeta.style.borderColor = '#00ff88';
    tarjeta.style.boxShadow = '0 0 40px rgba(0, 255, 136, 0.3)';
    
  } else if (adivinanza > numeroSecreto) {
    mostrarMensaje('Muy alto, intenta con algo más bajo', '#ff6b6b');
    
  } else {
    mostrarMensaje('Muy bajo, intenta con algo más alto', '#4ecdc4');
  }
}
```

> **Tu explicación teórica precisa:**
> *"Ahora su lógica está completa, pero fíjense cómo estamos manipulando agresivamente el DOM para generar toda esta experiencia de juego:*
> *- **Manejo de Arreglos Interactivo:** Guardamos cada número en su lista global de `historialIntentos` usando el método `.push()`. Y en vez de imprimirlo con la sintaxis cruda del arreglo, usamos `.join(', ')` para pasarlo al `textContent` como una serie de comas legible para humanos.
> *- **Control Visual:** Y el detalle de fina coquetería: Si el usuario gana, usamos propiedades del DOM para inutilizar el botón `btnAdivinar.disabled = true` (así no sigue haciendo calculos absurdos). Además, atacamos los estilos en línea con `boxShadow` para crear en la tarjeta esa celebración de color verde neón propia del HTML dinámico."*

> **Pregunta de calibración:**
> *"Jueguen una partida. Cuando ganan, todo cambia. Pero miren en su código el inmenso bloque ganador: ¿En cuántos de esos pasos tuvimos que escribir manualmente `document.getElementById('mensaje').style.color = '...'`?"*
>
> *(Respuesta esperada: En ninguno directo. Ya teníamos nuestra minimáquina genérica `mostrarMensaje()` armada. Confirmar: "Ese es el superpoder de crear mini-funciones genéricas primero: el cerebro principal del juego queda súper fácil de leer porque abstrajimos todo el trabajo aburrido del DOM allá arriba.")*

---

### 5.5 Usabilidad pro: Poder jugar apretando Enter

**EN PANTALLA: VSCODE (`script.js`).**

> **La acción guiada:**
> 1. Agregar el evento de teclado global debajo del evento del click, usando una función anónima.

```js
// Poder jugar apretando Enter en cualquier lado sin usar el mouse
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    verificarIntento();
  }
});
```

> **Tu explicación teórica precisa:**
> *"Como vimos en la teoría, el evento del teclado inyecta en nuestra función anónima toda la información de la tecla recién pulsada dentro del objeto `event`. Si detectamos que se apretó 'Enter', entonces simplemente invocamos manualmente nuestra función principal `verificarIntento()`. De repente, su juego se dejó de sentir como una tarea universitaria y se siente como una interfaz profesional."*

---

### 5.6 Commit de lógica MVP

**EN PANTALLA: TERMINAL (Git Bash).**

```bash
git add .
git commit -m "feat: lógica condicional completa y eventos click/enter para jugar"
```

> *"Festejo rápido: ya tienen un juego funcional en sus manos. Si esto fuera una startup, este sería su Producto Mínimo Viable (MVP). Ya es jugable. Sin embargo, en programación los usuarios siempre van a intentar romper las cosas. En el próximo y último bloque vamos a pulir los detalles: qué pasa si no escriben nada, si ponen letras, o si quieren volver a jugar tras ganar."*

---

### 🚨 Gestión de Riesgos — Momento 5

**Comparar string con número falla silenciosamente:**
- Causa: El alumno se olvidó de poner `Number(inputUsuario.value)` y dejó solo `inputUsuario.value`.
- Síntoma: Pone el número correcto, pero le dice siempre "Muy alto" o "Muy bajo" porque la comparación estricta de `adivinanza === numeroSecreto` (`'50' === 50`) siempre da `false`.
- Respuesta: *"Verifica tu primera línea de la función. El `value` del input **siempre** te devuelve texto. Acostúmbrate a pasarlo por el colador de `Number()` antes de comparar con triple igual."*

**Se declaran variables globales dentro de la función:**
- Síntoma: El jugador adivina (haciendo trampa y viendo la consola), y le dice *"¡Ganaste en 1 intentos!"* de forma perpetua. Intenta cien veces, gana, y le sigue diciendo 1 intentos. Y nunca adivina porque el número cambia cada turno.
- Causa: Puso `let intentos = 0` o `let numeroSecreto = ...` adentro del cuerpo de `verificarIntento()`. Con cada click o enter, se resetean ambos valores.
- Respuesta: *"Las variables que necesitan tener memoria histórica a largo plazo entre turno y turno tienen que vivir en el scope global, fuera de los brackets de la función de evento."*

---

## MOMENTO 6 — CODE-ALONG Lab Parte 3: Profesionalizando el Juego (Reinicio y Return)
**Tiempo:** 20 min

> **Nota táctica de inicio: {El pulido final}**
> Un juego que solo se puede jugar una vez dando F5 al navegador no es una app, es un script crudo. Y un juego que solo te dice "muy alto" o "muy bajo" es aburrido. En este bloque construyen la función de reinicio completo del estado sin recargar la página, y aplican el concepto de `return` en un caso de uso puro.

---

### 6.1 `obtenerPista()`: El poder del `return` aislando responsabilidades

**EN PANTALLA: VSCODE (`script.js`).**

> **Tu explicación teórica precisa:**
> *"De momento nuestro juego dice 'Muy alto' o 'Muy bajo'. Queremos darle emoción añadiendo un sistema de temperatura: si está muy caliente, muy frío, tibio, etc.
> 
> Podríamos meter toda la matemática dentro del gran bloque gigantesco `if/else` en `verificarIntento()`, pero ensuciaría nuestra función principal. En su lugar, vamos a crear una función separada cuyo **único y exclusivo trabajo** sea calcular la diferencia matemática entre dos números, y `retornar` un texto de la temperatura. Nada de DOM, pura matemática de datos. Así escriben código los desarrolladores experimentados."*

> **La acción guiada:**
> 1. Crear la función pura `obtenerPista(intento, secreto)` arribita de `verificarIntento()`.
> 2. Calcular la diferencia absoluta usando el objeto nativo `Math.abs()` (el mismo que usan en las calculadoras lógicas).
> 3. Usar el `return` en lugar de imprimir a consola o pantalla.

```js
// Función pura: Solo calcula y devuelve un valor String, no toca visuales ni lee el DOM exterior
function obtenerPista(intento, secreto) {
  let diferencia = Math.abs(intento - secreto); // Diferencia sin importar negativo/positivo
  
  if (diferencia <= 5) {
    return '🔥 ¡Haciendo fuego! Estás a 5 o menos números.';
  } else if (diferencia <= 15) {
    return '♨️ Caliente. Estás cerca.';
  } else if (diferencia <= 30) {
    return '🌤️ Tibio. Te aclimatas.';
  } else {
    return '❄️ Congelado. Estás muy lejos.';
  }
}
```

> **Pregunta de calibración:**
> *"Miren el código de `obtenerPista`. Si yo llamo internamente a `obtenerPista(10, 50)` desde la consola, ¿al usuario que está jugando le va a aparecer el emoji de copo de nieve en la interfaz HTML del juego?"*
>
> *(Respuesta esperada: No, porque esta función solo retorna un String hacia el lugar del código desde donde se llamó. No tiene código tocando el DOM o modificando el `<p>`. Confirmar: "Exactamente, esa es la diferencia maestra entre usar `return` y modificar el DOM. Ahora tenemos que invocarla, capturar ese string que 'escupe', y mandarlo a pintar nosotros mismos".)*

---

### 6.2 Integramos la pista 

**EN PANTALLA: VSCODE (`script.js`).**

> **La acción guiada:**
> 1. Bajar a la función `verificarIntento()` y reemplazar los textos quemados ('Muy alto, intenta bajo') por la invocación de nuestra nueva función.

```js
  // Reemplazando las dos ramas del else if dentro de verificarIntento():
  } else if (adivinanza > numeroSecreto) {
    let pista = obtenerPista(adivinanza, numeroSecreto); // Capturamos el return
    mostrarMensaje('Muy alto. ' + pista, 'red'); // Concatenamos y pintamos
    
  } else {
    let pista = obtenerPista(adivinanza, numeroSecreto); // Capturamos el return
    mostrarMensaje('Muy bajo. ' + pista, '#ff8c00'); // Concatenamos y pintamos
  }
```

---

### 6.3 `reiniciarJuego()`: Reseteando el estado sin F5

**EN PANTALLA: VSCODE (`script.js`) + NAVEGADOR (`index.html`).**

> **Tu explicación teórica precisa:**
> *"La partida acaba cuando adivinan. Si quisieran volver a jugar, en este momento el usuario tendría que presionar F5 para forzar la recarga del navegador. En las aplicaciones web profesionales que ustedes usan (como Netflix o WhatsApp Web) la página nunca se recarga: somos los programadores quienes limpiamos la memoria a mano. Vamos a crear una función que actúe como un limpiaparabrisas absoluto:*
> 
> *Vamos a sobreescribir las variables `numeroSecreto`, los `intentos` y vaciaremos ese arreglo global del historial dándole un Array nativo en blanco `[]`. Sumado a esto, revertiremos todos los bloqueos que creamos en el DOM: vamos a revivir el botón bloqueado quitando su `disabled = false`, y borraremos el color verde fluorescente que tenía la tarjeta resturándole los estilos grisáceos de fábrica."*

> **La acción guiada:**
> 1. Activar un segundo botón de "Reiniciar" en el HTML. `<button id="btnReiniciar">Reiniciar Juego</button>`
> 2. Capturarlo al principio del archivo JS junto al resto: `const btnReiniciar = document.getElementById('btnReiniciar');`
> 3. Al final del código, debajo del evento del teclado, declarar la función de reset.

```js
function reiniciarJuego() {
  // 1. Resetear el estado global (sobreescribir memoria)
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  intentos = 0;
  historialIntentos = [];
  
  // 2. Limpiar el DOM visual
  mostrarMensaje('🎯 ¡Nuevo juego! Adivina el número...', '#e94560');
  contador.textContent = 'Intentos: 0';
  historial.textContent = 'Historial: ';
  
  // 3. Restaurar interacciones
  btnAdivinar.disabled = false;
  btnReiniciar.style.display = 'none';
  inputIntento.value = '';
  inputIntento.focus();

  // 4. Reset visual de la tarjeta
  tarjeta.style.borderColor = 'rgba(233, 69, 96, 0.3)';
  tarjeta.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
}

// 3. Conectar al botón nuevo con su propio escuchador de 'click'
btnReiniciar.addEventListener('click', reiniciarJuego);
```

> **Pregunta de calibración rápida:**
> *"¿Notan por qué dentro de la función de reiniciar puse `numeroSecreto = Math...` directo sin ponerle la palabra reservada `let` delante?"*
>
> *(Respuesta esperada: Si se pusiera `let`, estaría creando una variable fantasma local nueva llamada igual, y no estaría actualizando el valor de la variable global que creamos al principio de todo el juego. Confirmar: "Excelente. La palabra `let` solo se usa cuando la caja nace por primera vez. Aquí solo queríamos cambiar el contenido que la global ya tenía".)*

---

### 6.4 Verificación en DevTools y Confirmación QA

**EN PANTALLA: NAVEGADOR (`Live Server` -> DevTools -> Mobile View).**

> **La acción guiada:**
> 1. Jugar una partida completa fallando a propósito para ver todos los emojis de termómetro cambiar en vivo.
> 2. Ganar la partida (imprimiendo el número secreto con consola trampa `console.log(numeroSecreto)` para no tardar).
> 3. Apretar el botón 'Reiniciar'.
> 4. Volver a ganar, y verificar que los intentos arrancaron desde 0 puramente.
> 5. Clic derecho en el navegador -> Inspeccionar -> Ocultar la consola y darle al botón de Dispositivo Móvil (Toggle Device Toolbar). Apuntar a que el proyecto no se deforma en tamaño celular.

> **Tu explicación teórica precisa:**
> *"Este flujo que acabamos de hacer de pruebas de QA (Quality Assurance) es lo que valida un ticket en las empresas tecnológicas del mundo real. Su aplicación soporta el 'flujo feliz' (ganar), el 'flujo de error' (fallar), se resetea la memoria de manera pura, e implementa funciones reutilizables. Este código ya no es escolar, está bajo estándares listos para presentarse."*

---

### 6.5 Commit Final MVP+

**EN PANTALLA: TERMINAL (Git Bash).**

```bash
git add .
git commit -m "feat: funcion pura para pista termica y lógica de reseteo total del juego"
```

> *"Impecable trabajo. Proyecto subido."*

---

### 🚨 Gestión de Riesgos — Momento 6

**Olvidarse del `return` en `obtenerPista`:**
- Síntoma: Aparece "Muy alto. undefined" en pantalla.
- Causa: Puso `console.log()` en las condiciones nuevas o directamente el String sin el retorno explícito. La función no retorna nada y JS asume automáticamente `undefined`, y se lo concatena al texto visual.
- Respuesta: *"Una función sin `return` devuelve `undefined`. Y nosotros no estamos imprimiendo nada adentro de esa función, le construimos un tubo para capturar su resultado con `pista` y pegárselo al párrafo."*

**Redeclarar variables con `let` en `reiniciarJuego()`:**
- Síntoma: Al jugar y luego pulsar reiniciar, la función principal `verificarIntento` sigue usando obstinadamente el número secreto VIEJO y da respuestas mezcladas. El reseteo jamás pasó a los ojos de esa función.
- Causa: Escribieron `let numeroSecreto = ...` dentro de la función del botón. 
- Respuesta: *"Borren velozmente la palabra `let` dentro de la función de reactivación. Estás cometiendo un error crítico arquitectónico creando copias locales que mueren bajo sus propias llaves en vez de actualizar el estado absoluto."*
