# CLASE 11 v_02 — Funciones, DOM y Eventos

> **Resumen de la Clase:** Los alumnos conectan la lógica de condicionales de la Clase 10 con una interfaz visual real. Aprenden funciones (declaración, parámetros, return, scope), el DOM (selección y modificación de elementos) y eventos (addEventListener, click, Enter), y construyen el juego "Adivina el Número" completo en código. Es la última clase con teoría del módulo — el miércoles es presentación de proyectos.

---

## Tabla de Tiempos

| Momento | Contenido | Tiempo |
|---|---|---|
| 0 | Recap + Hook "prompt/alert no es el mundo real" + null | 10 min |
| 1 | Funciones — declaración, parámetros, return, scope | 20 min |
| 2 | DOM — árbol de nodos, getElementById, textContent, style | 15 min |
| 3 | CODE-ALONG LAB Parte 1 — HTML + conexión DOM + mostrarMensaje | 25 min |
| ⏸ | Receso | 30 min |
| 4 | Eventos — addEventListener, la regla de los paréntesis, Enter | 10 min |
| 5 | CODE-ALONG LAB Parte 2 — verificarIntento + reiniciarJuego | 30 min |
| 6 | Commit Final + Preview Presentación | 10 min |
| | **Total** | **~150 min** |

---

## MOMENTO 0: Recap + Hook "Esto No Es El Mundo Real" + null (~10 min)

> **Nota táctica de inicio:** Este momento tiene tres capas. La primera es el recap — activar lo que el grupo ya sabe antes de construir sobre eso. La segunda es el hook — crear la disonancia entre el código que hicieron la clase pasada y la forma en que funciona una app real. Cuando el alumno dice "nunca vi un prompt en YouTube", ya hay motivación genuina para aprender el DOM. La tercera capa es introducir null — sin ella, el alumno no va a entender por qué getElementById puede devolver algo que parece un error aunque el código esté bien escrito.

---

**1. Recap Conversacional — "¿Qué recuerdan?"**

**EN PANTALLA:** Whiteboard o VS Code en blanco.

> **Tu apertura:**
> *"Antes de arrancar — ¿qué vimos la clase pasada? Necesito que me digan los temas. Sin buscar apuntes. Solo lo que quedó.*
>
> *Díganme por el chat: una palabra, un concepto, lo que sea que les vino a la mente al entrar a la clase hoy."*

*(Esperar 30 segundos. Leer en voz alta lo que llegue al chat.)*

La lista que debería reconstruirse entre todos:

| Concepto que sale del chat | Lo que tú confirmas o completas |
|---|---|
| operadores de comparación | Los 6: mayor, menor, igual, diferente — siempre triple igual para no comparar tipos distintos |
| AND, OR, NOT | Combinar condiciones — AND exige ambas, OR con una alcanza, NOT invierte |
| if / else if / else | El flujo de decisión — solo entra un bloque, el orden importa |
| Math.random / Math.floor | El número secreto del juego — decimal entre 0 y 1, multiplicado, redondeado, más 1 |
| null | Si alguien lo menciona: "exacto, ese lo vemos hoy con más profundidad porque lo van a ver en el lab" |

*(Si nadie menciona Math.random: girar el concepto en la ruleta o mencionarlo tú como cierre del recap. Es el puente directo con el código de esta clase.)*

---

**2. El Hook — "¿Han Visto Esto en YouTube?"**

**EN PANTALLA:** VS Code — script.js del proyecto con el código de la Clase 10 (el verificador de votación o el clasificador de temperatura).

> **Tu acción:**
> Ejecutar el código de la clase pasada en Live Server. El prompt aparece — el cuadro gris del navegador pide un número.

> **Tu pregunta al chat:**
> *"Díganme honestamente — ¿han visto algo así alguna vez en Instagram, en Google, en YouTube, en TikTok? Una ventana gris que aparece y les pide que escriban algo. ¿Sí o no?"*

*(Esperar respuestas. La respuesta va a ser no — y esa es la respuesta correcta.)*

> *"Exacto. No existe. Nadie usa esto en producción. Prompt y alert nos sirvieron para practicar — para entender cómo funciona pedir datos y mostrar resultados sin tener que construir nada visual. Esa es su única función. La misión ya está cumplida.*
>
> *El mundo real usa la propia página. El usuario escribe en un input que ya existe en el HTML. El resultado aparece en un párrafo que ya existe en el HTML. Sin ventanas. Sin interrupciones. Sin fealdad.*
>
> *Hoy aprendemos a hacer eso. Lo que tienen que entender es que la lógica que ya dominan — los condicionales, el número secreto, la comparación — no va a cambiar. Lo que cambia es cómo se conecta con la pantalla."*

---

**3. El "Después" — El Juego Terminado**

**EN PANTALLA:** VS Code — proyecto terminado del juego con la interfaz visual.

> **Tu acción:**
> 1. Mostrar el index.html y el script.js brevemente — no explicar el código, solo mostrar que existe.
> 2. Abrir en Live Server. La tarjeta del juego aparece centrada — el título, el input, el botón "Adivinar", el área de mensajes.
> 3. Escribir un número y presionar "Adivinar" — el mensaje aparece en la página en color.
> 4. Adivinar el número correcto — la tarjeta brilla en verde y aparece el botón "Jugar de Nuevo".

> *"Eso es lo que van a tener al final de esta clase. Toda la lógica que ya escribieron la semana pasada vive ahí adentro — verificar si el número es mayor, menor o igual, incrementar el contador de intentos, registrar el historial. Lo que es nuevo hoy es lo que une esa lógica con lo que el usuario ve."*

> **Pregunta de calibración:**
> *"Mirando esto — ¿qué parte les parece que fue más difícil de hacer: la interfaz visual o la lógica de comparación?"*
>
> *(Respuesta esperada: la interfaz. Confirmar: "Exacto — la lógica ya la conocen. Lo nuevo hoy es conectarla con los elementos de la pantalla. A eso se le llama manipular el DOM.")*

---

**4. El Puente — Del Excalidraw al HTML**

**EN PANTALLA:** Excalidraw — el diagrama del juego "Adivina el Número".

> **Tu acción:**
> Abrir el diagrama de Excalidraw que ya conocen — el que tiene a la computadora eligiendo el número, la flecha de interacción del usuario, y los tres bloques de resultado: "Muy alto", "Correcto!", "Muy bajo".

> *"Este diagrama lo vieron en clases anteriores. Miren cómo vive en el HTML.*
>
> *El bloque de la computadora que elige el número — eso es el número secreto que genera Math.random en el script.*
> *El bloque de 'Número?' donde el usuario interactúa — eso es el input con el ID inputIntento.*
> *Los tres bloques de resultado — Correcto, Muy alto, Muy bajo — esos son los mensajes que cambia JavaScript dentro del párrafo con ID mensaje.*
> *El contador de intentos — eso es el elemento con ID contador.*
>
> *Cada rectángulo del canvas existe en el HTML con un ID. Y esos IDs son las direcciones exactas que JavaScript va a usar para encontrarlos. A eso vamos hoy."*

---

**5. Concepto de null — El Valor Intencional**

**EN PANTALLA:** VS Code — consola de Chrome.

> **Tu explicación:**
> *"Antes de arrancar, necesito que conozcan un valor que van a ver aparecer hoy en el lab. Lo conocen del pasado: undefined.*
>
> *Undefined aparece cuando una variable existe pero no tiene ningún valor asignado todavía — JavaScript dice: 'esta caja está declarada pero está vacía y yo no la llené'.*
>
> *Hoy van a conocer null. La diferencia es la intención. Undefined es un descuido o un todavía-no. Null es una ausencia de valor deliberada — el programador dice: 'esta caja está vacía a propósito, o el dato que buscaba definitivamente no existe'.*
>
> *¿Por qué les digo esto ahora? Porque cuando hoy busquen un elemento del HTML con getElementById y cometan un error de tipeo en el ID — la función no va a dar error. Va a devolver null. Y si intentan modificar algo en null, ahí sí va a explotar todo. Saber reconocer un null a tiempo les va a ahorrar mucho tiempo de diagnóstico."*

**Demo rápida en consola:**

```javascript
// Undefined — la variable existe pero está vacía
let puntaje;
console.log(puntaje);         // undefined — JavaScript no sabe qué hay ahí

// Null — vacío intencional
let mejorPuntaje = null;
console.log(mejorPuntaje);   // null — el programador dice: no hay mejor puntaje todavía

// El caso del DOM — getElementById que no encuentra nada
let elemento = document.getElementById('idQueNoExiste');
console.log(elemento);       // null — JavaScript buscó y definitivamente no lo encontró
```

> *"Grábense el último caso. Cuando su código diga que no puede leer propiedades de null, el problema siempre está en el getElementById — el ID que pusieron en el script no coincide con el que tiene el elemento en el HTML."*

> **Pregunta de calibración:**
> *"Si declaro una variable con let y no le asigno nada, ¿qué sale? ¿Y si getElementById no encuentra el elemento?"*
>
> *(Respuesta esperada: undefined en el primer caso — la variable existe pero está vacía. Null en el segundo — getElementById buscó y no encontró nada, y lo reporta explícitamente.)*

---

> **Nota táctica de transición:** Ya reactivaron lo de la Clase 10, ya saben por qué dejan el prompt/alert, ya tienen el mapa visual del proyecto en la cabeza y ya conocen null. La siguiente pregunta natural es: ¿cómo organizo toda esta lógica? La respuesta es funciones. Eso es el Momento 1.

> **✅ Checkpoint:** El alumno recuerda los conceptos clave de la Clase 10 con sus propias palabras, entiende que prompt y alert no son la forma real de interactuar con el usuario, puede leer el Excalidraw y asociar cada rectángulo con un elemento HTML del proyecto, y distingue undefined de null. Listo para el Momento 1.

---

## MOMENTO 1: Funciones — El Bloque Reutilizable (~20 min)

> **Nota táctica de inicio:** El alumno ya usó funciones sin saberlo — console.log, prompt y alert son funciones del navegador. El punto de entrada más natural es esa conexión: "ya las han usado, hoy aprenden a crear las propias". El otro eje de este momento es el problema de la repetición: mostrar concretamente qué significa editar la misma lógica en cinco lugares diferentes vs. cambiarla en uno solo. Cuando el alumno ve ese dolor, la función deja de ser un concepto abstracto y se convierte en una solución obvia. El mini-reto al final no es opcional — es la única forma de verificar que el grupo puede escribir una función con return antes de entrar al lab.

---

**1. El Problema — Código que se Repite**

**EN PANTALLA:** VS Code — script.js con el código de la Clase 10 (verificador de votar, clasificador de temperatura, reto de tienda).

> **Tu explicación:**
> *"Miren el código que tienen. Si el dueño del proyecto dice: 'quiero que cada mensaje de resultado lleve un emoji al inicio', ¿qué tienen que hacer?*
>
> *Buscar cada alert o cada console.log por separado — el de votar, el de temperatura, el de la tienda — y editarlos a mano uno por uno. Si se les pasa uno, el juego queda inconsistente.*
>
> *Eso escala mal. Cuantas más funcionalidades tiene el proyecto, más lugares hay que actualizar. Y más lugar para errores.*
>
> *La solución se llama función. Escriben la lógica una vez, le dan un nombre descriptivo, y la llaman desde cualquier parte. Si mañana cambia algo, lo cambian en un solo lugar y se actualiza en todo el código."*

> **Pregunta de activación:**
> *"Antes de que yo les muestre cómo crear una función — ¿qué funciones ya conocen y han usado en este curso?"*
>
> *(Respuesta esperada: console.log, prompt, alert, Number, Math.random, Math.floor. Confirmar: "Exacto. Todas esas son funciones que JavaScript ya trae. Hoy crean las propias.")*

---

**2. Anatomía de una Función — Dos Fases**

**EN PANTALLA:** VS Code — archivo limpio o espacio en blanco.

> **Tu explicación:**
> *"Una función tiene dos momentos de vida, igual que una variable.*
>
> *El primero es la declaración — donde le dices al programa qué hace esa función, cómo se llama y qué datos necesita. En este momento la función no se ejecuta — solo existe.*
>
> *El segundo es la invocación o llamada — donde ejecutas esa función y le pasas los datos reales. Solo en este momento el código de adentro se corre.*
>
> *La sintaxis tiene cuatro partes: la palabra clave function, el nombre que describe exactamente qué hace, los paréntesis con los parámetros — los datos que recibe — y las llaves con el cuerpo — las instrucciones que ejecuta."*

**Code-along progresivo — escribe línea por línea, el alumno replica:**

```javascript
// FASE 1: Declaración — la función existe pero no se ejecuta todavía
function saludar() {
  console.log("Hola, bienvenido al curso.");
}

// FASE 2: Invocación — ahora sí se ejecuta
saludar();   // Hola, bienvenido al curso.
saludar();   // Hola, bienvenido al curso. — misma línea, mismo resultado
saludar();   // Hola, bienvenido al curso. — eso es reutilizable
```

> *"Tres llamadas, una sola función. Si mañana el mensaje cambia, lo cambian en un lugar — en la declaración. Las tres llamadas se actualizan solas."*

---

**3. Parámetros y Argumentos — Lo que la Función Recibe**

**EN PANTALLA:** VS Code — continuando el code-along.

> **Tu explicación:**
> *"Los parámetros son variables que viven dentro de la función — están ahí para recibir los datos que le mandan al llamarla. Se declaran en los paréntesis, solo con el nombre — JavaScript no exige que digan el tipo.*
>
> *Cuando llaman la función y le pasan un valor concreto, ese valor se llama argumento. El argumento se asigna al parámetro de uno a uno, en el orden en que aparecen.*
>
> *Una función sin parámetros no pide datos — los paréntesis van vacíos al llamarla. Una función con parámetros sí los necesita — si no se los dan, el parámetro queda como undefined."*

```javascript
// Función con parámetro
function saludarA(nombre) {
  console.log("Hola, " + nombre + ".");
}

saludarA("Ana");     // Hola, Ana.
saludarA("Carlos");  // Hola, Carlos.
saludarA(123);       // Hola, 123. — JS no exige el tipo, lo acepta igual

// ¿Qué pasa si no se pasa el argumento?
saludarA();          // Hola, undefined. — el parámetro quedó vacío
```

> **Predecir antes de ejecutar:**
> *"Antes de correr la última línea — ¿qué creen que imprime saludarA sin argumentos?"*
>
> *(Esperar respuestas. Ejecutar. Confirmar: "undefined — porque el parámetro nombre quedó declarado pero sin valor. Exactamente igual que una variable declarada sin asignación.")*

---

**4. Return — Dos Roles en Uno**

**EN PANTALLA:** VS Code — continuando el code-along.

> **Tu explicación:**
> *"Return hace dos cosas al mismo tiempo y es importante que entiendan las dos.*
>
> *Primera: devuelve un valor — le da a quien llamó la función un resultado que puede guardarse en una variable y usarse después. Eso es lo que hace prompt: no imprime nada en consola, te devuelve lo que escribió el usuario y tú lo guardas.*
>
> *Segunda: detiene la ejecución — todo lo que esté después del return dentro de la función no se ejecuta. El return es la puerta de salida."*

**Demo contrastada — sin return vs con return:**

```javascript
// Sin return: la función hace algo, pero no exporta el resultado
function mostrarDoble(numero) {
  console.log(numero * 2);
}

let resultado = mostrarDoble(5);  // Imprime 10 en consola...
console.log(resultado);           // undefined — nadie exportó el valor

// Con return: la función calcula y devuelve
function calcularDoble(numero) {
  return numero * 2;
}

let doble = calcularDoble(5);    // No imprime nada...
console.log(doble);              // 10 — el valor está guardado y disponible
```

> *"La regla práctica: si necesitan usar el resultado de la función en otro lugar del código, necesitan return. Si solo necesitan un efecto — mostrar algo, cambiar algo — no necesariamente."*

**Demo del return como salida anticipada — el patrón de validación:**

```javascript
function verificarEdad(edad) {
  if (edad < 0) {
    return false;   // Sale aquí — nada de abajo se ejecuta
  }
  if (edad < 18) {
    return false;
  }
  return true;
}

console.log(verificarEdad(-5));  // false — salió en la primera condición
console.log(verificarEdad(15));  // false — salió en la segunda
console.log(verificarEdad(20));  // true
```

> *"Este patrón es el que van a usar hoy en el juego: si el usuario no escribió un número válido, el return sale de la función antes de comparar con el número secreto. Limpio y sin contaminar el código de abajo."*

> **Pregunta de calibración:**
> *"Si verificarEdad(15) sale con return false en la segunda condición, ¿la tercera línea — return true — se ejecuta?"*
>
> *(Respuesta esperada: no — la función ya terminó en el segundo return. Solo un return se ejecuta por llamada.)*

---

**5. Scope Local vs Global — Dónde Vive la Variable**

**EN PANTALLA:** VS Code — demo en consola.

> **Tu explicación:**
> *"Esto es algo que van a ver en el lab y necesito que lo entiendan antes.*
>
> *Cuando declaran una variable dentro de una función — con let o const dentro de las llaves — esa variable solo existe dentro de esa función. En el momento que la función termina, la variable desaparece. A eso se le llama alcance local.*
>
> *Cuando declaran una variable fuera de todas las funciones — en la parte de arriba del archivo — esa variable existe en cualquier parte del código, incluyendo dentro de las funciones. A eso se le llama alcance global.*
>
> *¿Por qué importa esto hoy? Porque las variables del juego — el número secreto, los intentos, el historial — van a vivir afuera de las funciones. Si las pusieran adentro, cada vez que el usuario hiciera clic el juego generaría un número nuevo y resetearía los intentos. Ganar sería imposible."*

**Demo en consola — el error en vivo:**

```javascript
function prueba() {
  let resultado = 50;
  console.log("Adentro:", resultado);  // 50 — funciona
}

prueba();
console.log("Afuera:", resultado);     // ReferenceError: resultado is not defined
```

> *"Vean el error: 'resultado is not defined'. Pero si lo definimos, ¿por qué dice eso? Porque lo definimos adentro de la función — y afuera ya no existe. Ya murió junto con la función.*
>
> *La solución: declarar las variables que necesitan sobrevivir entre llamadas fuera de las funciones — en el scope global del archivo."*

---

**6. Mini-Reto — evaluarRango (5 min)**

**EN PANTALLA:** Enunciado en chat de Teams o en pantalla.

> **Tu instrucción:**
> *"Solo trabajo. Tienen 5 minutos. Lean el enunciado, escriban la función en su script limpio y me mandan el resultado por WhatsApp o por el chat. Empezamos a contar."*

**Enunciado — pegar en el chat:**

> Crea una función llamada evaluarRango que reciba un parámetro llamado puntos.
>
> Reglas:
> - Si los puntos son menores a 1000: return "Bronce"
> - Si los puntos están entre 1000 y 3000 (incluidos ambos): return "Plata"
> - Si los puntos son mayores a 3000: return "Leyenda"
>
> Pruébenla con tres valores y muestren el resultado en consola.

*(Iniciar el conteo. Observar. Si alguien termina antes, pedirle que pruebe con un valor límite exacto — 1000 y 3000.)*

**Revisión colectiva al terminar el tiempo — escribir la solución en vivo:**

```javascript
function evaluarRango(puntos) {
  if (puntos < 1000) {
    return "Bronce";
  } else if (puntos <= 3000) {
    return "Plata";
  } else {
    return "Leyenda";
  }
}

console.log(evaluarRango(500));   // Bronce
console.log(evaluarRango(2000));  // Plata
console.log(evaluarRango(5000));  // Leyenda
```

> **Pregunta de diagnóstico post-reto:**
> *"Si alguien puso console.log dentro de la función en lugar de return — ¿qué pasa si intento guardar el resultado en una variable? ¿Qué valor tiene esa variable?"*
>
> *(Respuesta esperada: undefined — la función imprimió en consola pero no exportó nada. La variable queda vacía. Solo return saca el valor hacia afuera.)*

---

> **🚨 Errores Comunes — Momento 1**

| Error | Causa probable | Solución inmediata |
|---|---|---|
| La función se ejecuta sola al cargar la página | Se escribió saludar() en el código principal — la invocación está fuera de un evento | Verificar que la llamada esté dentro de un listener o en un lugar intencional |
| El resultado de la función es undefined aunque tiene lógica | Se usó console.log dentro en lugar de return | Las funciones que calculan o deciden necesitan return para que el resultado salga hacia afuera |
| El parámetro da undefined al llamar la función | Se invocó la función sin pasar el argumento | Verificar la cantidad de parámetros que pide la función y pasarlos todos |
| Variable declarada adentro no se puede usar afuera | Scope local — la variable murió con la función | Declarar la variable afuera de la función si necesita sobrevivir entre llamadas |

---

> **Nota táctica de transición:** Ya saben crear funciones, usar parámetros, exportar resultados con return y entender por qué las variables del juego van en scope global. La siguiente pregunta es: ¿a dónde va ese resultado si ya no usamos alert? La respuesta es el DOM. Eso es el Momento 2.

> **✅ Checkpoint:** El alumno puede declarar e invocar una función con parámetros y return, entiende la diferencia entre console.log y return dentro de una función, completó el mini-reto de evaluarRango con los tres casos correctos, y sabe por qué las variables del estado del juego van afuera de las funciones. Listo para el Momento 2.

---

## MOMENTO 2: DOM — JavaScript Controla la Página (~15 min)

> **Nota táctica de inicio:** Este momento es puro concepto y demo — todavía no hay lab. El alumno viene de entender funciones y tiene la pregunta natural en la cabeza: ¿dónde aparece el resultado si ya no usamos alert? Este momento responde eso con ejemplos visuales inmediatos. La clave es hacer el cambio en pantalla durante la demo: modificar el título de la pestaña, cambiar el texto de un elemento y pintarlo de color sin recargar la página. Cuando el alumno ve que JavaScript cambia la pantalla en tiempo real con una sola línea, el concepto deja de ser abstracto.

> **Nota de laboratorio:** Este momento es preparación conceptual para el LAB Parte 1 (Momento 3). El alumno no toca su proyecto todavía — todo se practica en la consola del navegador o en un archivo de pruebas temporal. El lab empieza en el Momento 3.

---

**1. El Problema — JS No Ve la Página**

**EN PANTALLA:** VS Code — script.js y navegador abiertos en paralelo.

> **Tu explicación:**
> *"Hasta ahora JavaScript 'vivió' en la consola o en ventanas emergentes. Las funciones que escribieron calculan, comparan, devuelven valores — pero el usuario de la página no ve absolutamente nada de eso.*
>
> *El HTML que tienen en index.html existe en el navegador como una pantalla estática. JavaScript necesita un puente para leerla y modificarla en tiempo real. A ese puente se le llama DOM — Document Object Model."*

> **Pregunta de activación:**
> *"Cuando ustedes entran a una página y le hacen clic a algo — el menú se despliega, el botón cambia de color, aparece un mensaje — ¿creen que la página se está recargando cada vez que eso pasa?"*
>
> *(Respuesta esperada: no. Confirmar: "Exacto. JavaScript está modificando el DOM en tiempo real — sin recargar. Eso es lo que aprenden hoy.")*

---

**2. ¿Qué Es el DOM?**

**EN PANTALLA:** Imagen o whiteboard con el árbol HTML → árbol DOM.

> **Tu explicación:**
> *"Cuando el navegador carga un archivo HTML, no lo lee como texto plano — lo convierte en una estructura de objetos organizada como un árbol. Cada etiqueta se convierte en un nodo del árbol. Cada nodo es un objeto de JavaScript con propiedades y funciones.*
>
> *Miren la imagen. A la izquierda: el HTML con etiquetas. A la derecha: el mismo HTML representado como un árbol jerárquico — html es la raíz, adentro están head y body, luego los divs y los párrafos. Padre e hijo. Eso es el DOM.*
>
> *¿Por qué importa? Porque si JavaScript puede acceder a cualquier nodo de ese árbol como un objeto, puede cambiar sus propiedades. Si cambia una propiedad, el navegador refleja el cambio en pantalla al instante. Sin recargar."*

**El proceso por detrás — en orden:**
1. El navegador renderiza el HTML.
2. Lo transforma en el árbol DOM.
3. Aplica los estilos CSS a cada nodo.
4. JavaScript entra al final — espera que todo esté listo y entonces puede actuar sobre los nodos.

---

**3. document — La Puerta de Entrada**

**EN PANTALLA:** Consola de Chrome — DevTools abierta.

> **Tu explicación:**
> *"Para interactuar con el DOM desde JavaScript, todo empieza por el objeto document. Es el nodo raíz del árbol — el que está por encima de html, de head, de body, de todo. Todos los métodos para buscar o modificar elementos parten de aquí.*
>
> *document no es una variable que ustedes declaran — ya existe. El navegador lo crea automáticamente cuando carga la página."*

**Demo en vivo — escribir directamente en la consola del navegador:**

```javascript
// Mostrar el objeto document completo
console.log(document);

// Acceder a una propiedad — el título de la pestaña
console.log(document.title);

// Modificar esa propiedad en tiempo real
document.title = "Clase 11 — DOM";
```

*(Ejecutar la última línea y señalar cómo el título de la pestaña cambia en tiempo real sin recargar la página.)*

> *"Una línea. Sin recargar. Sin tocar el HTML. JavaScript modificó el DOM y el navegador lo reflejó de inmediato. Así funciona todo lo que ven en las apps web modernas."*

---

**4. getElementById — Capturar un Elemento**

**EN PANTALLA:** VS Code — index.html del proyecto abierto junto con la consola.

> **Tu explicación:**
> *"Para modificar un elemento específico de la página, primero hay que capturarlo — obtener una referencia en JavaScript al nodo que representa ese elemento en el árbol DOM.*
>
> *El método más directo es getElementById. Le pasan el ID del elemento como string y retorna el nodo — el objeto completo con todas sus propiedades. Si el ID no existe en el HTML, retorna null. Por eso es importante que el ID que escriben en el script coincida exactamente con el del HTML — incluyendo mayúsculas y minúsculas."*

**Demo en consola — usando el HTML del proyecto:**

```javascript
// Capturar el elemento por su ID
const inputIntento = document.getElementById("inputIntento");
console.log(inputIntento);   // muestra el objeto del elemento — no null

// ¿Qué pasa si el ID está mal escrito?
const malo = document.getElementById("inputintento");  // minúscula
console.log(malo);           // null — el ID no coincide
```

> **Predecir antes de ejecutar la segunda línea:**
> *"¿Qué van a ver si escribo el ID con la i minúscula — inputintento en lugar de inputIntento?"*
>
> *(Respuesta esperada: null. Ejecutar y confirmar. "Este es el error número uno del lab. El ID en el script tiene que ser letra por letra igual al que está en el HTML.")*

---

**5. textContent y style — Modificar el Elemento**

**EN PANTALLA:** Consola de Chrome — con el proyecto abierto en Live Server.

> **Tu explicación:**
> *"Una vez capturado el elemento, lo manipulamos con sus propiedades. Las dos más importantes hoy son:*
>
> *textContent — lee o reemplaza el texto visible del elemento. Solo texto plano, no interpreta etiquetas HTML.*
>
> *style — un objeto que tiene todas las propiedades CSS del elemento. Se acceden en camelCase: background-color se convierte en backgroundColor, font-size en fontSize. El guión en JavaScript es el operador de resta — no puede ser parte de un nombre de propiedad. Los valores siempre van como string: 'red', '#e94560', '24px'."*

**Demo "wow" en vivo — modificar el párrafo de mensaje del proyecto:**

```javascript
// Capturar el elemento de mensaje
const mensaje = document.getElementById("mensaje");

// Leer su contenido actual
console.log(mensaje.textContent);

// Cambiar el texto
mensaje.textContent = "¡JavaScript tomó el control!";

// Cambiar el color
mensaje.style.color = "#e94560";

// Cambiar el tamaño de fuente
mensaje.style.fontSize = "24px";
```

*(Ejecutar línea por línea. Señalar cada cambio en el navegador antes de ejecutar la siguiente.)*

> *"Ven — sin recargar, sin tocar el HTML, sin tocar el CSS. Solo JavaScript modificando el DOM. Esto es exactamente lo que va a hacer la función mostrarMensaje que van a escribir en el lab: capturar el elemento mensaje y cambiar su texto y color según el resultado del juego."*

> **Pregunta de calibración:**
> *"Si escribo mensaje.style.font-size = '24px' — exactamente así, con guión — ¿funciona?"*
>
> *(Respuesta esperada: no — el guión es el operador de resta, no puede ser parte de un nombre de propiedad en JavaScript. La forma correcta es fontSize en camelCase.)*

---

**6. Conexión con el Proyecto — El Mapa de IDs**

**EN PANTALLA:** VS Code — index.html del proyecto con los IDs resaltados.

> **Tu explicación:**
> *"Miren el HTML del proyecto. Cada elemento interactivo tiene un ID. Esos IDs son exactamente las direcciones que el script va a usar con getElementById para capturarlos.*
>
> *Ahora que entienden el DOM, el HTML del lab deja de ser solo etiquetas — cada ID es un punto de control que JavaScript puede leer y modificar."*

| ID en el HTML | Qué es en la interfaz | Para qué lo va a usar JavaScript |
|---|---|---|
| inputIntento | El campo donde el usuario escribe el número | Leer el valor con .value al hacer clic en Adivinar |
| btnAdivinar | El botón "Adivinar" | Escucharle el evento click |
| mensaje | El párrafo de mensajes de resultado | Cambiar texto y color con textContent y style.color |
| contador | El texto que muestra los intentos | Actualizar con textContent cada intento |
| historial | El área donde se listan los números intentados | Actualizar con textContent después de cada push al array |
| btnReiniciar | El botón "Jugar de Nuevo" | Mostrarlo con style.display cuando el juego termina |
| game-card | La tarjeta principal del juego | Cambiarle el borde y el glow al ganar |

> *"Este mapa es su referencia para el lab. Si un elemento no aparece en la tabla, no es un elemento con el que el script va a interactuar hoy."*

---

> **🚨 Errores Comunes — Momento 2**

| Error | Causa probable | Solución inmediata |
|---|---|---|
| getElementById retorna null | El ID en el script no coincide con el del HTML — typo o diferencia de mayúsculas | Copiar y pegar el ID directamente del HTML para evitar errores de tipeo |
| El cambio no se ve en la página | El elemento capturado es null y el error silencioso no modifica nada | Hacer console.log del elemento antes de modificarlo — si es null, el problema está en el ID |
| La propiedad CSS no cambia con style | Se usó el nombre CSS con guión en lugar de camelCase | Convertir font-size a fontSize, background-color a backgroundColor |
| El script tag está antes del HTML | El script se ejecuta antes de que los elementos existan en el DOM — getElementById encuentra nada | Mover el script al final del body o agregar el atributo defer al link del script |

---

> **Nota táctica de transición:** Ya conocen el DOM — saben capturar elementos y modificarlos. Ahora es momento de aplicarlo al proyecto real. Borran el script de la Clase 10, pegan el HTML del lab, conectan los elementos con getElementById y escriben la primera función que usa el DOM: mostrarMensaje. Eso es el Momento 3 — LAB Parte 1.

> **✅ Checkpoint:** El alumno entiende qué es el DOM y por qué existe, sabe usar document.getElementById para capturar un elemento, puede modificar textContent y style de un elemento capturado, y conoce el mapa de IDs del proyecto. Listo para el Momento 3.

---

## MOMENTO 3: CODE-ALONG LAB Parte 1 — HTML + DOM + mostrarMensaje (~25 min)

> **Nota táctica de inicio:** Este es el primer contacto del alumno con el proyecto real de la clase. Velocidad lenta y verificación alta — si alguien llega al receso sin el mensaje de bienvenida visible en su pantalla, no puede empezar el Momento 4 porque no tendrá los elementos del DOM conectados para agregarles eventos. El criterio de calidad del code-along no es terminar rápido: es que nadie tenga un null en su consola.

> **Referencia de lab:** Este momento cubre el **LAB Parte 1 — Pasos 1.1, 1.2 y 1.3** (interfaz HTML, conexión DOM, función mostrarMensaje).

---

**LAB Parte 1 — Paso 1.1: Limpiar el script y pegar el HTML**

**EN PANTALLA:** VS Code — repositorio guess-number-js con el script de la Clase 10 abierto.

> **Tu instrucción:**
> *"Primer paso: borrar todo el código que está en el script. Los condicionales de la Clase 10 ya están guardados en Git — no los pierden. Hoy construimos encima de un archivo limpio.*
>
> *Segundo paso: abrir el index.html. El lab ya les da el bloque completo de HTML del juego — lo copian del paso 1.1 del lab y lo pegan dentro del body de su index. Nada más que eso por ahora."*

> **Tu acción:**
> 1. Borrar todo el contenido de script.js.
> 2. Abrir index.html.
> 3. Copiar el bloque del lab (el main con clase game-card y todos sus elementos internos) y pegarlo dentro del body.
> 4. Guardar y verificar en Live Server que la tarjeta aparece centrada con el título, el input y el botón Adivinar visibles.

**Criterio de verificación antes de continuar:**

> *"Todos tienen que ver la tarjeta del juego en el navegador. Si alguien ve una página en blanco o un error, párense ahí — no avancen sin tener la interfaz visible."*

*(Esperar confirmación del grupo. Resolver cualquier bloqueo de HTML antes de continuar.)*

---

**LAB Parte 1 — Paso 1.2: Conectar el DOM en JavaScript**

**EN PANTALLA:** VS Code — script.js limpio.

> **Tu explicación:**
> *"Ahora le decimos a JavaScript dónde están los elementos con los que va a trabajar. Vamos a capturarlos todos con getElementById al inicio del script — en la parte global, antes de cualquier función. Los capturamos con const porque las etiquetas del HTML no cambian — siempre van a ser esos mismos elementos."*

> **Tu instrucción:**
> *"Escriban esto conmigo — yo dicto, ustedes teclean:"*

```javascript
// === CONEXIÓN CON EL DOM ===
const inputIntento  = document.getElementById("inputIntento");
const btnAdivinar   = document.getElementById("btnAdivinar");
const mensaje       = document.getElementById("mensaje");
const contador      = document.getElementById("contador");
const historial     = document.getElementById("historial");
const btnReiniciar  = document.getElementById("btnReiniciar");
const tarjeta       = document.getElementById("game-card");

// Verificación — ninguno debe mostrar null
console.log(inputIntento, btnAdivinar, mensaje, contador, historial);
```

*(Guardar y abrir la consola del navegador.)*

> **Predicción antes de ejecutar:**
> *"Antes de recargar — si en el HTML el ID de un elemento dice 'mensajeResultado' pero en el script escribimos 'mensaje', ¿qué va a mostrar la consola para ese elemento?"*
>
> *(Respuesta esperada: null. Luego ejecutar y verificar que todos los elementos muestren el objeto — no null.)*

> *"Si alguno de ustedes ve null en la consola, ese es el elemento que tiene el ID mal escrito. Comparen letra por letra con el HTML del lab antes de continuar."*

**Criterio de verificación antes de continuar:**

> *"Necesito que todos me confirmen en el chat: ningún null en la consola. Cinco objetos, cero nulos. Con eso seguimos."*

---

**LAB Parte 1 — Paso 1.3: Primera Función — mostrarMensaje**

**EN PANTALLA:** VS Code — script.js debajo de las constantes del DOM.

> **Tu explicación:**
> *"Esta es la primera función que vamos a escribir para el proyecto. Su trabajo es sencillo: recibir un texto y un color, y ponerlos en el elemento mensaje del DOM. Va a reemplazar todos los alerts que usaban antes para mostrar resultados.*
>
> *Fíjense en lo que está pasando aquí: la variable mensaje que declaramos arriba — la del scope global — se puede usar directamente dentro de la función. Eso es el scope global en acción."*

```javascript
// === FUNCIONES ===

// Muestra un mensaje en pantalla con el color indicado
function mostrarMensaje(texto, color) {
  mensaje.textContent = texto;
  mensaje.style.color = color;
}

// Prueba de la función — verificar que funciona antes de seguir
mostrarMensaje("Bienvenido al juego — adivina el número.", "#ffffff");
```

*(Guardar y verificar en el navegador que el mensaje aparece con el texto correcto y en blanco.)*

> *"¿Ven lo que pasó? Sin alert. Sin prompt. El texto apareció directamente en la tarjeta. Esa función va a ser el megáfono del juego — cada mensaje que muestre al usuario va a pasar por ahí."*

> **Pregunta de calibración:**
> *"Si llamo a mostrarMensaje sin pasarle el parámetro de color — ¿qué color va a tener el texto?"*
>
> *(Respuesta esperada: el color quedaría como undefined — la propiedad style.color recibiría un valor inválido y el texto probablemente no cambiaría de color o mantendría el anterior. En el Momento 4 se puede agregar un parámetro por defecto si hay tiempo.)*

---

**Commit de Cierre — LAB Parte 1**

**EN PANTALLA:** Terminal integrada de VS Code.

> **Tu instrucción — dictar el comando:**
> *"Antes del receso, commit. Dicten conmigo:"*

```bash
git add .
git commit -m "feat: interfaz HTML del juego y función mostrarMensaje conectada al DOM"
git push
```

> *"Ese commit dice exactamente qué hicieron: la interfaz visual y la primera función que conecta JavaScript con la pantalla. Si mañana tienen que explicarle a alguien qué cambió en ese commit, ese mensaje lo dice todo."*

**Verificación colectiva pre-receso:**

> *"Antes de irse al receso necesito que todos tengan:*
> *1. La tarjeta del juego visible en el navegador con Live Server corriendo.*
> *2. El mensaje 'Bienvenido al juego' visible dentro de la tarjeta.*
> *3. Ningún null en la consola.*
> *4. El commit hecho y el push enviado.*
>
> *Si falta alguno de esos cuatro, este es el momento de resolverlo — después del receso arrancamos con los eventos y necesito que todos estén en el mismo punto."*

*(Dar 3 minutos de check colectivo. Resolver bloqueos en vivo si los hay.)*

---

## ⏸ RECESO — 30 min

> **Nota táctica de receso:** El criterio de salida al receso es claro: tarjeta visible + mensaje en pantalla + sin null + commit hecho. Alguien que no tiene eso al salir al receso va a perderse el inicio del Momento 4 porque va a estar todavía resolviendo la conexión del DOM mientras los demás ya están agregando eventos. Mejor resolver uno o dos casos en los tres minutos previos que perder a alguien en el regreso.

---

> **🚨 Errores Comunes — Momento 3**

| Error | Causa probable | Solución inmediata |
|---|---|---|
| La tarjeta no aparece en el navegador | El HTML fue pegado fuera del body, o el Live Server no está corriendo | Verificar que el main.game-card esté dentro del body y que el servidor esté activo |
| El console.log muestra null para algún elemento | El ID en el script no coincide con el del HTML — case sensitive | Copiar el ID directamente del HTML del lab para evitar typos |
| El mensaje de bienvenida no aparece | La llamada a mostrarMensaje está antes de la declaración del elemento mensaje | Verificar que las constantes del DOM estén en las primeras líneas del script, antes de la función |
| El script tag no está conectado al index | El index.html no tiene el link al script o tiene la ruta mal | Verificar que el body tenga el script tag con el src correcto antes del cierre |

---

> **Nota táctica de transición:** Al regreso del receso el grupo tiene la interfaz conectada al DOM y la primera función funcionando. Lo que falta es que el código reaccione al usuario — el botón Adivinar todavía no hace nada al presionarlo. Eso lo resuelve el Momento 4: eventos.

> **✅ Checkpoint LAB Parte 1:** El alumno tiene la tarjeta del juego visible en el navegador, los siete elementos capturados con getElementById sin ningún null en consola, la función mostrarMensaje mostrando el mensaje de bienvenida con color en pantalla, y el commit de la Parte 1 pusheado. Listo para el Momento 4.

---

## MOMENTO 4: Eventos — El Código Escucha al Usuario (~10 min)

> **Nota táctica de inicio:** El alumno regresa del receso con la tarjeta conectada pero estática — el botón Adivinar no hace absolutamente nada al presionarlo. Ese es el problema perfecto para abrir el momento: mostrarlo en vivo, presionar el botón, no pasar nada, y preguntar por qué. La respuesta lleva directo al concepto de eventos. Este momento es concepto + demo — la aplicación al proyecto va en el Momento 5.

> **Nota de laboratorio:** Este momento no incluye pasos del lab todavía. Es la base conceptual que necesitan para el **LAB Parte 2** (Momento 5), donde conectan todo al proyecto real.

---

**1. El Problema — El Código Está Sordo**

**EN PANTALLA:** Navegador — el juego del LAB Parte 1 con el botón Adivinar visible.

> **Tu acción:**
> Presionar el botón "Adivinar" en el navegador. No pasa nada. Presionarlo varias veces. Nada.

> **Tu pregunta al chat:**
> *"El botón está ahí. Le doy clic. No pasa nada. ¿Por qué creen que no reacciona?"*

*(Esperar respuestas. Aceptar: "no tiene función asignada", "no está conectado a nada", "JS no sabe qué hacer".)*

> *"Exacto. El script.js corre una sola vez cuando el navegador carga la página — ejecuta las constantes del DOM, ejecuta la función mostrarMensaje con el mensaje de bienvenida, y muere. A partir de ahí el código está quieto. No escucha nada.*
>
> *Para que JavaScript reaccione a lo que hace el usuario — un clic, una tecla, un scroll — necesitamos configurar un sistema que le diga: 'quédate activo y espera a que pase esto'. A ese sistema se le llama sistema de eventos."*

---

**2. ¿Qué Es un Evento?**

**EN PANTALLA:** Whiteboard o presentación — la analogía del celular.

> **Tu explicación:**
> *"Un evento es una señal de que algo ocurrió en la página. Un clic en el botón. Una tecla presionada. El usuario haciendo scroll. El navegador detecta todo eso automáticamente — pero si no le decimos a JavaScript que 'escuche' esas señales, las ignora por completo.*
>
> *Piensen en el celular. El celular recibe mensajes todo el tiempo, pero ustedes no están siempre mirando la pantalla. ¿Cómo saben que llegó un mensaje? La notificación. El celular tiene un sistema que está esperando ese evento — el mensaje entrante — y cuando ocurre, activa la alerta.*
>
> *JavaScript necesita ese mismo sistema. Nosotros lo construimos."*

---

**3. Los Tres Componentes de un Evento**

**EN PANTALLA:** Presentación o whiteboard — diagrama de los tres elementos.

> **Tu explicación:**
> *"Todo sistema de eventos en JavaScript tiene exactamente tres piezas:*
>
> *Primera — el elemento destino: ¿a quién le va a pasar la acción? El botón Adivinar, el input, la tarjeta completa.*
>
> *Segunda — el tipo de evento: ¿qué acción exacta debe ocurrir? Un clic del mouse — 'click'. Una tecla presionada — 'keydown'. El texto del input cambiando — 'input'. Cada tipo de evento tiene un nombre en string.*
>
> *Tercera — la función escuchadora: ¿qué bloque de código se ejecuta como respuesta cuando las otras dos cosas ocurren? Esta función es la que hace el trabajo.*
>
> *Solo uniendo estas tres piezas el botón cobra vida."*

---

**4. addEventListener — La Regla de los Paréntesis**

**EN PANTALLA:** VS Code — script.js debajo del código del LAB Parte 1.

> **Tu explicación:**
> *"El pegamento que une las tres piezas es un método que todos los elementos del DOM tienen: addEventListener. Le pasamos el tipo de evento como string y la función que debe ejecutarse.*
>
> *Y aquí viene el error número uno de todo desarrollador junior. Escríbanlo conmigo."*

**Demo del error forzado — primero el mal, luego el bien:**

```javascript
// Función de prueba
function testEvento() {
  console.log("¡El clic funcionó!");
}

// MAL — con paréntesis: la función se ejecuta AHORA, no al hacer clic
btnAdivinar.addEventListener("click", testEvento());
```

*(Guardar. Abrir la consola sin presionar el botón.)*

> *"Miren la consola — sin haber presionado el botón, el mensaje ya apareció. ¿Por qué? Porque los paréntesis en JavaScript son la orden 'ejecuta esto ahora mismo'. Al escribir testEvento() dentro del addEventListener, le están diciendo: ejecuta la función en este instante, y el resultado de esa ejecución — que es undefined — es lo que le pasan al listener. El listener no tiene función esperando, tiene undefined."*

```javascript
// BIEN — sin paréntesis: se pasa la referencia, no la ejecución
btnAdivinar.addEventListener("click", testEvento);
```

*(Guardar. Recargar. Presionar el botón.)*

> *"Ahora sí — el mensaje aparece solo cuando hago clic. ¿Cuál es la diferencia?*
>
> *Con paréntesis: 'ejecuta esto ahora'.*
> *Sin paréntesis: 'toma esta receta y ejecútala tú cuando ocurra el evento'.*
>
> *Al listener siempre se le pasa el nombre de la función — la referencia. Nunca la invocación."*

> **Pregunta de calibración:**
> *"Si tengo una función llamada verificarIntento — ¿cómo la paso correctamente al addEventListener del botón?"*
>
> *(Respuesta esperada: btnAdivinar.addEventListener("click", verificarIntento) — sin paréntesis. Confirmar.)*

---

**5. Funciones Anónimas — La Alternativa Directa**

**EN PANTALLA:** VS Code — continuando.

> **Tu explicación:**
> *"Hay una segunda forma de pasar el comportamiento al listener — sin crear una función con nombre aparte. Se llama función anónima: se declara directamente como argumento del addEventListener, en el mismo lugar donde iría la referencia. Sin nombre porque no la van a llamar desde ningún otro lado — solo vive ahí."*

```javascript
btnAdivinar.addEventListener("click", function() {
  console.log("Clic mediante función anónima");
});
```

> *"El resultado es idéntico. La diferencia es organizacional: si la lógica es corta y no se reutiliza en otro lugar, la función anónima mantiene el código más compacto. Si la lógica es extensa — como la función verificarIntento que van a escribir en el lab — conviene declararla aparte y pasarle la referencia. Es más fácil de leer y de mantener."*

---

**6. El Objeto event y el Enter**

**EN PANTALLA:** VS Code + Consola de Chrome.

> **Tu explicación:**
> *"Un último detalle antes del lab. Cuando el navegador detecta un evento, crea automáticamente un objeto con información de todo lo que pasó: qué tipo de evento fue, en qué coordenadas ocurrió, cuánto tiempo después del clic anterior. Ese objeto se llama event — o simplemente e por convención.*
>
> *Cuando la función escuchadora lo necesita, lo declara como parámetro y el navegador se lo inyecta solo."*

```javascript
// El navegador escucha CUALQUIER tecla en todo el documento
document.addEventListener("keydown", function(event) {
  console.log("Tecla presionada:", event.key);
});
```

*(Guardar. En el navegador, presionar varias teclas — letras, números, Enter.)*

> *"¿Ven lo que aparece cuando presionan Enter? La palabra 'Enter' — con E mayúscula. Eso es lo que vamos a usar en el lab para que el usuario pueda adivinar presionando Enter además del botón. Sin eso, tendría que siempre hacer clic con el mouse."*

> **Pregunta de calibración:**
> *"Si el usuario presiona la tecla 'A' — ¿qué imprime event.key?"*
>
> *(Respuesta esperada: 'a' con minúscula — JavaScript distingue mayúsculas de minúsculas en el valor de las teclas. Enter es 'Enter' con E mayúscula, las letras son minúsculas.)*

> *"Grábense ese 'Enter' con E mayúscula — lo van a necesitar en el lab para la condición que detecta si el usuario presionó esa tecla."*

---

> **🚨 Errores Comunes — Momento 4**

| Error | Causa probable | Solución inmediata |
|---|---|---|
| La función se ejecuta sola al cargar la página sin ningún clic | Se pasó la función con paréntesis al addEventListener — testEvento() en lugar de testEvento | Quitar los paréntesis — al listener se le pasa la referencia, no la ejecución |
| El tipo de evento va sin comillas y da error | Se escribió addEventListener(click, funcion) — click sin comillas | El nombre del evento es un string — siempre entre comillas: "click", "keydown" |
| El botón no responde aunque el listener está bien | La variable btnAdivinar es null — el getElementById falló | Verificar que el ID en el script coincida exactamente con el del HTML |
| El evento Enter no se detecta | Se comparó event.key con "enter" en minúscula | El valor correcto es "Enter" con E mayúscula — JavaScript es case sensitive en los nombres de teclas |

---

> **Nota táctica de transición:** Ya tienen el sistema de eventos entendido y probado. Ahora viene el ensamblaje final: la función verificarIntento que conecta el input del usuario con el número secreto, el DOM con los resultados, y los eventos con el botón y el Enter. Eso es el Momento 5 — el LAB Parte 2.

> **✅ Checkpoint:** El alumno entiende qué es un evento y los tres componentes necesarios para crearlo, puede agregar un addEventListener con la referencia correcta de la función (sin paréntesis), sabe la diferencia entre función con nombre y función anónima en el contexto de un listener, y conoce el objeto event y el valor exacto de la tecla Enter. Listo para el Momento 5.

---

## MOMENTO 5: CODE-ALONG LAB Parte 2 — El Cerebro del Juego (~30 min)

> **Nota táctica de inicio:** Este es el bloque más denso del día — todo lo aprendido converge aquí. La clave para no perder a nadie es la velocidad: lento, paso a paso, con verificación visual entre cada bloque. Cada vez que un alumno puede probar en su navegador que algo funciona, la motivación sube. Priorizar las partes 2.1 y 2.2 — con eso el juego ya funciona. Las partes 2.3 y 2.4 (reinicio y Enter) son mejoras que se pueden completar si el tiempo lo permite, o dejar como entregable.

> **Referencia de lab:** Este momento cubre el **LAB Parte 2 — Pasos 2.1 al 2.4** (variables de estado, función verificarIntento, función reiniciarJuego, evento de Enter).

---

**LAB Parte 2 — Paso 2.1: Variables de Estado del Juego**

**EN PANTALLA:** VS Code — script.js, debajo de las constantes del DOM y antes de las funciones.

> **Tu explicación:**
> *"Antes de escribir la lógica del juego, necesitamos las variables que van a guardar el estado: qué número eligió el programa, cuántos intentos lleva el usuario, y qué números ha propuesto hasta ahora. Estas variables tienen que vivir en el scope global — fuera de cualquier función — para que sobrevivan entre un clic y el siguiente."*

> **Conexión con el Momento 1:**
> *"¿Recuerdan el error de scope que vimos antes del receso? Si poníamos numeroSecreto dentro de verificarIntento, cada clic generaría un número nuevo — ganar sería imposible. Por eso van aquí, afuera."*

```javascript
// === ESTADO DEL JUEGO ===
let numeroSecreto  = Math.floor(Math.random() * 100) + 1;
let intentos       = 0;
let historialArr   = [];   // array vacío — va a almacenar los números intentados

// Solo para desarrollo — borrar antes de presentar el proyecto
console.log("Número secreto:", numeroSecreto);
```

> *"El console.log del número secreto no es trampa — es una herramienta de desarrollo para verificar que el juego funcione sin estar adivinando a ciegas. Cuando el proyecto esté listo para presentarse, ese console.log se borra."*

> **Pregunta de calibración:**
> *"¿Por qué historialArr empieza con corchetes vacíos y no con un cero o una cadena vacía?"*
>
> *(Respuesta esperada: porque es un array — el tipo de dato que almacena múltiples valores ordenados. Un cero sería un número y solo guarda uno. El array puede crecer con cada intento.)*

---

**LAB Parte 2 — Paso 2.2: La Función verificarIntento**

**EN PANTALLA:** VS Code — continuando debajo del estado del juego.

> **Tu instrucción:**
> *"Esta es la función principal del proyecto. La van a construir conmigo bloque por bloque — no la copien completa todavía. Cada bloque tiene una función específica y necesito que entiendan qué hace antes de seguir al siguiente."*

**Bloque 1 — Capturar y convertir el valor del input:**

```javascript
function verificarIntento() {
  let valor = Number(inputIntento.value);
```

> *"inputIntento.value lee lo que hay escrito en el campo de texto — pero como todo lo que viene de un input es string, lo convertimos a número con Number() antes de operar. Sin esa conversión, comparar '5' con 50 daría resultados extraños."*

**Bloque 2 — Validar la entrada con return temprano:**

```javascript
  // Validar: si no es número válido o está fuera del rango 1-100
  if (isNaN(valor) || valor < 1 || valor > 100) {
    mostrarMensaje("Ingresa un número entre 1 y 100.", "#e74c3c");
    return;   // sale de la función — nada de lo que sigue se ejecuta
  }
```

> *"isNaN retorna true si el valor no es un número — undefined, texto vacío, letras. El OR evalúa también si el número está fuera del rango del juego. Si alguna de esas tres condiciones es verdadera, mostramos el mensaje de error y salimos con return. Ese return vacío no exporta ningún valor — solo termina la función ahí. Es el patrón de salida anticipada que vimos en el Momento 1."*

**Bloque 3 — Incrementar intentos y actualizar el DOM:**

```javascript
  // Sumar un intento y mostrarlo
  intentos++;
  contador.textContent = intentos;

  // Registrar el número en el historial
  historialArr.push(valor);
  historial.textContent = historialArr.join(", ");
```

> *"intentos++ es el operador de incremento — equivale a intentos = intentos + 1. Luego actualizamos el DOM directamente: contador.textContent con el número nuevo, e historial.textContent con todos los valores del array unidos por coma usando el método join."*

**Bloque 4 — La comparación principal:**

```javascript
  // Comparar el intento con el número secreto
  if (valor === numeroSecreto) {
    mostrarMensaje("¡Correcto! Era el " + numeroSecreto + ". Lo lograste en " + intentos + " intentos.", "#2ecc71");
    btnAdivinar.disabled = true;
    btnReiniciar.style.display = "inline-block";
    tarjeta.style.border = "2px solid #2ecc71";
    tarjeta.style.boxShadow = "0 0 20px #2ecc71";
  } else if (valor > numeroSecreto) {
    mostrarMensaje("Muy alto — intenta con un número menor.", "#e67e22");
  } else {
    mostrarMensaje("Muy bajo — intenta con un número mayor.", "#e67e22");
  }

  // Limpiar el input y enfocar para el siguiente intento
  inputIntento.value = "";
  inputIntento.focus();
}
```

> *"Tres caminos — igual, mayor, menor. Cuando el usuario acierta: mostramos el mensaje de victoria con el total de intentos, desactivamos el botón con disabled = true para que no siga jugando, mostramos el botón de reinicio y pintamos la tarjeta de verde con borde y glow. Si no acertó: el mensaje orienta al usuario con la dirección correcta. Al final de la función siempre limpiamos el campo y le devolvemos el foco para que el usuario pueda escribir de inmediato."*

**Asignar el evento al botón — conectar todo:**

```javascript
// === EVENTOS ===
btnAdivinar.addEventListener("click", verificarIntento);
```

*(Guardar. Abrir el navegador. Verificar en consola el número secreto. Probar el juego en vivo — intentar con un número, ver el mensaje, ver el historial crecer, ver el contador subir. Adivinar el número correcto para verificar la victoria.)*

> **Criterio de verificación de la parte 2.2:**
> *"Necesito que todos prueben el juego y me digan en el chat:*
> *¿El mensaje de 'Muy alto' o 'Muy bajo' aparece en la tarjeta?*
> *¿El contador sube con cada intento?*
> *¿El historial muestra los números separados por coma?*
> *¿Al adivinar la tarjeta se pone verde y aparece el botón Jugar de Nuevo?"*

*(Esperar confirmación. Si alguien tiene NaN en el mensaje o un número raro en el contador, diagnosticar en vivo — el problema casi siempre está en Number() faltante o en el ID del input.)*

---

**LAB Parte 2 — Paso 2.3: La Función reiniciarJuego**

**EN PANTALLA:** VS Code — continuando debajo de verificarIntento.

> **Tu explicación:**
> *"El botón Jugar de Nuevo ya aparece al ganar — pero si lo presionas, no hace nada todavía. Necesita su propia función que limpie todo el estado y la interfaz para un juego nuevo."*

```javascript
function reiniciarJuego() {
  // Resetear el estado interno
  numeroSecreto  = Math.floor(Math.random() * 100) + 1;
  intentos       = 0;
  historialArr   = [];

  // Resetear la interfaz visual
  mostrarMensaje("Nuevo juego — adivina el número.", "#ffffff");
  contador.textContent  = "0";
  historial.textContent = "";

  // Restaurar el estado de los botones
  btnAdivinar.disabled          = false;
  btnReiniciar.style.display    = "none";

  // Quitar los estilos de victoria de la tarjeta
  tarjeta.style.border     = "";
  tarjeta.style.boxShadow  = "";

  // Limpiar el input y enfocar
  inputIntento.value = "";
  inputIntento.focus();

  console.log("Nuevo número secreto:", numeroSecreto);
}

// Asignar el evento al botón de reinicio
btnReiniciar.addEventListener("click", reiniciarJuego);
```

> *"Fíjense en qué está limpiando esta función — primero el estado interno (genera un número nuevo, resetea intentos e historial), luego la interfaz visual (mensajes, contador, historial en pantalla), luego los controles (habilita el botón Adivinar, oculta el botón Reiniciar) y finalmente quita los estilos de victoria de la tarjeta. Nada de esto requiere recargar la página."*

*(Probar el ciclo completo: adivinar → victoria → presionar Jugar de Nuevo → verificar que todo volvió al estado inicial.)*

---

**LAB Parte 2 — Paso 2.4: El Enter como Alternativa al Botón**

**EN PANTALLA:** VS Code — al final de la sección de eventos.

> **Tu explicación:**
> *"El juego ya funciona con el botón. Pero en los formularios web la convención es que el usuario también puede presionar Enter. Vamos a agregar ese comportamiento con un segundo listener — esta vez en el input, detectando keydown."*

```javascript
// El usuario puede adivinar presionando Enter en lugar de hacer clic
inputIntento.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    verificarIntento();
  }
});
```

> *"Dos cosas a notar: usamos keydown en lugar de click porque es el evento de teclado. Y verificarIntento() ahora sí lleva paréntesis — porque no lo estamos pasando como referencia, lo estamos invocando nosotros dentro de la función anónima cuando la condición se cumple. La función anónima es la que recibe el evento; verificarIntento es la que ejecutamos nosotros desde adentro."*

> **Pregunta de calibración:**
> *"¿Por qué el 'Enter' en event.key lleva E mayúscula?"*
>
> *(Respuesta esperada: porque JavaScript es case sensitive en los nombres de teclas — 'enter' en minúscula no coincide y la condición nunca sería verdadera.)*

*(Probar: escribir un número en el input y presionar Enter sin tocar el botón. Verificar que funciona igual que el clic.)*

---

> **🚨 Errores Comunes — Momento 5**

| Error | Causa probable | Solución inmediata |
|---|---|---|
| El mensaje muestra "NaN" después de hacer clic | El valor del input no se convirtió con Number() — se comparó un string con un número | Verificar que la primera línea de verificarIntento tenga Number(inputIntento.value) |
| El contador siempre muestra 1 | La variable intentos está declarada con let dentro de verificarIntento en lugar del scope global | Mover la declaración de intentos afuera de la función |
| El historial siempre muestra solo el último número | historialArr está declarado dentro de verificarIntento — se reinicia en cada llamada | Mover historialArr al scope global junto con las otras variables de estado |
| El botón Jugar de Nuevo no aparece al ganar | El ID en el script dice 'btnReiniciar' pero en el HTML dice algo diferente | Copiar el ID directamente del HTML del lab |
| Enter no funciona aunque el listener está | Se escribió "enter" en minúscula en la condición | Cambiar a "Enter" con E mayúscula |
| verificarIntento se llama solo al cargar la página | Dentro del keydown listener se pasó verificarIntento sin paréntesis como referencia en lugar de invocarlo | Dentro de la función anónima debe ser verificarIntento() con paréntesis — aquí sí los necesita |

---

> **Nota táctica de transición:** El juego está funcionando de punta a punta — adivinar, ganar, reiniciar, y también con el Enter. Solo falta el commit final y el cierre de la clase. Eso es el Momento 6.

> **✅ Checkpoint LAB Parte 2:** El alumno tiene el juego completo funcionando — el número secreto generado, el contador y el historial actualizándose en el DOM con cada intento, los mensajes de resultado apareciendo con color, la tarjeta verde al ganar, el reinicio funcional y el Enter respondiendo. Listo para el Momento 6.

---

## MOMENTO 6: Cierre — Verificación + Commit Final + Preview del Miércoles (~10 min)

---

**1. Verificación Colectiva del Lab**

**EN PANTALLA:** Navegador — el juego del alumno.

> **Tu instrucción:**
> *"Antes de cerrar, checklist rápido. Respóndanme por el chat con sí o no:*
>
> *¿El mensaje de bienvenida aparece en la tarjeta al cargar?*
> *¿El mensaje cambia a 'Muy alto' o 'Muy bajo' según el número?*
> *¿El contador sube con cada intento?*
> *¿El historial muestra todos los números separados por coma?*
> *¿Al adivinar la tarjeta se pone verde y aparece el botón Jugar de Nuevo?*
> *¿El botón Jugar de Nuevo reinicia todo sin recargar la página?*
> *¿El Enter funciona igual que el botón?"*

*(Si alguien reporta NaN o un número raro en el contador — resolver en vivo. El diagnóstico rápido: NaN casi siempre es Number() faltante. Contador siempre en 1 casi siempre es scope local — la variable intentos está adentro de la función.)*

---

**2. Commit Final — Dictado**

**EN PANTALLA:** Terminal integrada de VS Code.

> **Tu instrucción:**
> *"Commit final de la clase. Dicten conmigo:"*

```bash
git add .
git commit -m "feat: juego adivina el número completo con DOM, eventos y reinicio"
git push
```

> *"Ese mensaje describe exactamente el estado del proyecto: DOM conectado, eventos funcionando, reinicio implementado. Si alguien revisa el historial de commits mañana, sabe qué hay en ese punto sin abrir el código."*

---

**3. Preview del Miércoles — La Presentación**

> *"Esta fue la última clase de teoría del módulo. El miércoles presentan el proyecto.*
>
> *¿Qué tienen que presentar? El juego funcionando en vivo — escriben un número, el juego responde, lo ganan, lo reinician. No necesitan explicar el código línea por línea — yo lo reviso directamente en el repositorio. Lo que sí tienen que mostrar es que entienden qué hace cada parte: la función que muestra mensajes, la lógica de comparación, el contador, el historial.*
>
> *Mi recomendación antes del miércoles: personalícenlo. Cambien los colores, los mensajes, el tema visual. Todos tenemos el mismo proyecto base — lo que diferencia el suyo es la identidad. Si quieren apoyo de IA para los estilos, úsenla — pásenle el código y díganle 'quiero un estilo moderno en tonos oscuros' o lo que ustedes quieran. Eso está permitido y bien visto."*

**Logros adicionales opcionales — para quien quiera ir más lejos:**

| Logro | Descripción |
|---|---|
| Pista de cercanía | Agregar una función que dé una pista más específica: "muy cerca", "cerca", "lejos" según la diferencia entre el intento y el número secreto |
| CSS separado | Mover los estilos del HTML a un archivo style.css externo y linkearlo desde el index |
| Deploy | Subir el proyecto a GitHub Pages para tener una URL pública para compartir |

> *"Cualquiera de esos tres logros suma en la evaluación. Con solo el proyecto base ya tienen lo necesario para aprobar — los logros son para quienes quieran llevar el proyecto al siguiente nivel.*
>
> *Cualquier duda antes del miércoles me escriben por WhatsApp. Gracias por quedarse hasta el final. Los veo el miércoles."*

---

> **✅ Cierre de Clase:** El alumno tiene el juego completo funcionando, el commit final pusheado al repositorio, y claridad sobre qué se espera en la presentación del miércoles. El módulo de JavaScript está cerrado desde el punto de vista de contenido.
