# FLUJO DE PRESENTACIÓN - CLASE 10
## "Decisiones y Lógica Condicional"

> **Resumen de la Clase:** En esta sesión los alumnos le dan al programa la capacidad de tomar decisiones. Partiendo del `script.js` de la Clase 09 — que ya captura datos del usuario pero no los compara — van a aprender los operadores de comparación, los operadores lógicos y la estructura `if/else if/else`. Todo se aplica primero en código-along sobre problemas cotidianos (votación, temperatura), luego en dos retos autónomos, y finalmente en la integración con el número aleatorio del juego. El entregable del día es el `script.js` del lab con número secreto aleatorio, pistas alto/bajo/correcto y validación de entrada.

---

## MOMENTO 0: Hook — "El programa que no puede decidir"
**Tiempo:** 5 min

> **Nota táctica de inicio: {Crear la necesidad antes de dar la solución}**
> El alumno llega con el `script.js` de la Clase 09 funcionando — pregunta nombre, edad, calcula el año de nacimiento. Es un buen programa. El objetivo de este momento es que el alumno SIENTA que le falta algo, no que se lo digan. La pregunta de enganche hace ese trabajo: cuando el alumno intenta responderla y no puede, la necesidad de los condicionales se instala sola antes de que el instructor enseñe una sola línea de sintaxis.

---

### 0.1 Recap de Clase 09

**EN PANTALLA: CÁMARAS Y CHAT DE TEAMS**

> **La acción guiada:**
> 1. Sin abrir VS Code aún. Cámaras encendidas, chat activo.
> 2. Lanzar al chat: *"¿Qué recuerdan de la clase pasada? Díganme un concepto, el que sea."* Esperar 30 segundos.
> 3. A medida que llegan respuestas, nombrarlas en voz alta: *"Variables — sí. `prompt()` — exacto. Template literals — correcto."*
> 4. Cerrar el recap con un resumen de una línea: *"La clase pasada el programa aprendió a guardar datos y a pedirlos al usuario. Hoy le vamos a enseñar a tomar decisiones con esos datos."*

---

### 0.2 La Pregunta de Enganche

**EN PANTALLA: VSCODE — `script.js` del Lab 09 abierto (el que tiene `prompt()` de nombre y edad).**

> **Tu explicación teórica precisa:**
> "Miren este código que hicieron la clase pasada. Le pide el nombre al usuario, le pide la edad, calcula el año de nacimiento y lo muestra. Todo lineal, de arriba hacia abajo.
>
> Pero, ¿qué pasa si yo ingreso mi edad y quiero que el programa **detecte** si soy mayor o menor de edad? Es decir, quiero que si escribo '25' me muestre un mensaje que diga 'Eres mayor de edad', y si escribo '15' me diga otra cosa. Ahora mismo el programa no puede hacer eso. Hace exactamente lo mismo sin importar la edad que reciba.
>
> ¿Cómo le diríamos al programa que evalúe la edad que ingresó el usuario y responda con un mensaje distinto según el caso?"

> **Pregunta de calibración:**
> *"Sin buscar, sin código — solo pensando: ¿cómo se lo explicarían al programa en palabras? ¿Qué capacidad le falta?"*
>
> *(Esperar 30 segundos. Aceptar respuestas como "una condición", "un filtro", "que compare", "que tome decisiones". No corregir — el objetivo es que verbalicen la necesidad de una estructura de decisión.)*

---

### 0.3 Preview del Objetivo del Día

**EN PANTALLA: EXCALIDRAW / PRESENTACIÓN CANVA — Diagrama de flujo del juego "Adivina el Número" cruzado.**

> **Tu explicación teórica precisa:**
> "Para esto sirve la clase de hoy. Vamos a darle a nuestro programa la capacidad de tomar decisiones bajo ciertas condiciones.
>
> Y esto lo necesitamos para nuestro proyecto principal del módulo: el juego de 'Adivina el Número'. En este juego, la computadora genera un número secreto, y el usuario intenta adivinarlo. Si observan el diagrama en pantalla, el comportamiento del juego **depende** del valor que envíe el usuario:
>
> - Si el intento es igual al número secreto → dice '¡Correcto!'
> - Si el intento es mayor → dice 'Muy alto'
> - Si es menor → dice 'Muy bajo'
>
> El juego completo con diseño y todo lo entregarán en la Clase 12, pero hoy construiremos aquí mismo los cimientos de la lógica. Nuestro código va a aprender a evaluar condiciones y elegir un camino."

> **Preguntas de Activación:**
> 1. Observando el diagrama del juego, ¿qué tiene que hacer el programa primero antes de decidir qué mensaje mostrar?
>    *(Respuesta esperada: tiene que comparar el número del usuario con el número secreto).*
> 2. ¿Cuántas posibilidades (o caminos) ven en este diagrama?
>    *(Respuesta esperada: tres posibilidades. Correcto, alto, bajo.)*

> **Nota táctica de transición:**
> Ya está planteado el problema. El alumno comprende la necesidad de una estructura de decisión y entiende que el programa debe evaluar casos. Sin embargo, para evaluar casos necesitamos **comparar** datos. Antes de armar la decisión completa, el alumno necesita las herramientas para comparar: los operadores. Eso es el Momento 1.

---

## MOMENTO 1: Operadores de Comparación
**Tiempo:** 15 min

> **Nota táctica de inicio: {Los operadores primero, el `if` después — no al revés}**
> Un error frecuente en la enseñanza de condicionales es mostrar el `if` antes de que el alumno entienda qué hay adentro. Los operadores de comparación son independientes: producen `true` o `false` son importar si están dentro de un `if` o no. Enseñarlos solos primero, en la consola, le da al alumno la herramienta antes de ver la estructura que la usa. Cuando llegue el `if` en el Momento 3, el alumno ya reconoce la condición y no tiene que aprender dos cosas al mismo tiempo.

---

### 1.1 ¿Qué es un Operador de Comparación?

**EN PANTALLA: PRESENTACIÓN CANVA — Slide de intro con la pregunta "¿Qué producen estas expresiones?"**

> **Tu explicación teórica precisa:**
> "En la Clase 09 vieron los operadores aritméticos: `+`, `-`, `*`, `/`. Esos operan sobre números y producen un número.
>
> Los operadores de comparación hacen algo diferente: Como indica su nombre "comparacion" , comparan , toman dos valores, los **comparan**, y producen siempre un booleano — `true` o `false`. Solo dos posibles resultados.
>
> Son la herramienta que le permite al programa responder preguntas de tipo sí o no: ¿Este número es mayor que ese? ¿Estos dos valores son iguales? ¿Esta cantidad supera el límite?
>
>  Puedo usarlos en cualquier lugar: en una variable, en un `console.log`, o como ingrediente dentro de una condición. Primero los van a ver solos."

- SINTAXIS: **Valor1 + Operador de Comparación + Valor2**
---

### 1.2 Los Seis Operadores de Comparación

**EN PANTALLA: PRESENTACIÓN CANVA — Tabla de operadores con símbolo, nombre y ejemplo.**

> **Tu explicación teórica precisa:**
> "Tienen seis operadores de comparación disponibles en JavaScript:"

| Operador | Significado | Ejemplo | Resultado |
|---|---|---|---|
| `===` | Igual estricto | `5 === 5` | `true` |
| `!==` | Diferente estricto | `5 !== 3` | `true` |
| `>` | Mayor que | `10 > 5` | `true` |
| `<` | Menor que | `3 < 1` | `false` |
| `>=` | Mayor o igual | `10 >= 10` | `true` |
| `<=` | Menor o igual | `7 <= 6` | `false` |

>  Devuelve true cuando la condicion es cierta y false cuando no es cierta, asi de simple


> "Los primeros dos — `===` y `!==` — los veremos con más detalle en un momento porque tienen una particularidad importante."

---

### 1.3 Demo en codigo — Predecir Antes de Ejecutar

**EN PANTALLA: GOOGLE CHROME — Consola del navegador (F12).**

> **La acción guiada:**
> 1. Abrir tu proyecto practica. Decirle al chat: *"Antes de que yo ejecute cada línea, díganme en el chat qué creen que va a devolver: `true` o `false`."*
> 2. Escribir y ejecutar una por una, esperando respuestas antes de presionar Enter:

```js
5 > 3           // Predecir primero → true
10 < 2          // Predecir → false
7 >= 7          // Predecir → true  (el = incluye el caso exacto)
4 <= 3          // Predecir → false
10 !== 10       // Predecir → false (sí son iguales → "diferente" es false)
5 !== 3         // Predecir → true
```

> 3. Para cada resultado correcto del chat: *"Exacto."* Para los que se equivocan: ejecutar sin corregir verbalmente — dejar que el resultado en pantalla haga el trabajo.

> **Pregunta de calibración:**
> *"¿Qué tienen en común todos los resultados que acaban de ver? No importa qué números comparamos ni qué operador usamos — ¿qué produce siempre una comparación?"*
>
> *(Respuesta esperada: siempre produce `true` o `false`. Si no llega: mostrar los resultados en consola y preguntar "¿Qué valores vemos ahí?" Consolidar: "Siempre un booleano. Eso es lo que va a entrar adentro del `if` más adelante.")*

---

### 1.4 El Operador `===` — Igual Estricto

**EN PANTALLA: GOOGLE CHROME — Consola del navegador.**

> **Tu explicación teórica precisa:**
> "El `===` es el operador de igualdad en JavaScript. Pero tiene una particularidad: es **estricto**. Compara dos cosas al mismo tiempo — el valor **y** el tipo de dato.
>
> Vean esto en la consola:"

> **La acción guiada:**

```js
5 === 5      // → true   (mismo valor, mismo tipo: number)
5 === '5'    // → false  (mismo valor "5", pero tipos distintos: number vs string)
```

> "¿Por qué devuelve `false` el segundo? Porque `5` es un número y `'5'` es un string — aunque se vean igual, para JavaScript son tipos diferentes.
>
> Recuerdan de la Clase 09: las comillas definen el tipo. `'5'` no es el número 5 — es el carácter '5'. El `===` no se deja engañar por eso."

> **Pregunta de calibración:**
> *"¿Por qué creen que esto importa? Piensen en qué pasa si el usuario escribe un número en un `prompt()`: ¿qué tipo llega?"*
>
> *(Respuesta esperada: `prompt()` siempre devuelve string. Si comparamos ese string con `===` contra un número, va a devolver `false` aunque el valor sea "igual". Por eso en el lab vamos a usar `Number()` para convertir antes de comparar. Este punto conecta con la Clase 09 y prepara para el lab.)*

> **La regla permanente:**
> *"Siempre van a usar `===`. Es el operador correcto para comparar igualdad en JavaScript. Punto."*

---

### 🚨 Gestión de Riesgos — Momento 1

**Error frecuente:** El alumno escribe `=` dentro de una condición pensando que compara.
- Señal: el código no produce un error visible, pero el comportamiento es incorrecto.
- Causa: `=` es asignación, no comparación. `if (x = 5)` asigna 5 a `x` y siempre ejecuta el bloque.
- Respuesta: *"El `=` solo asigna — es como ponerle una etiqueta a una caja. El `===` pregunta — es como preguntar '¿esta caja tiene esta etiqueta?'. Si ven que su `if` siempre entra al mismo bloque sin importar el valor, revisen si tienen un `=` donde debería haber `===`."*

**Error frecuente:** Comparar el resultado de `prompt()` directamente con `===` contra un número sin convertir.
- Señal: `'25' === 25` → `false`. El `if` nunca entra al bloque correcto.
- Respuesta: Ejecutar en consola y mostrar el tipo con `typeof`. Recordar: `Number()` antes de comparar.

> **Nota táctica de transición:**
> El alumno ya sabe qué produce una comparación (`true`/`false`) y conoce los seis operadores. Ahora vamos a ver cómo combinar múltiples condiciones en una sola expresión — los operadores lógicos. Eso es el Momento 2.

---

## MOMENTO 2: Operadores Lógicos
**Tiempo:** 10 min

> **Nota táctica de inicio: {No saturar — tres operadores, ejemplos concretos, y a conectar con el `if`}**
> Este momento es corto e intencionalmente enfocado. Los operadores lógicos se enseñan aquí porque, al igual que los de comparación, son independientes del `if` — producen un booleano. La tentación es ir muy profundo con tablas de verdad y combinaciones complejas. Resistirla. El objetivo es que el alumno lea y escriba `edad >= 18 && tieneLicencia` sin confundirse, y que entienda cuándo usar `&&` vs `||`. Las combinaciones anidadas llegan solas cuando los necesiten en el lab.

---

### 2.1 ¿Para qué Sirven los Operadores Lógicos?

**EN PANTALLA: PRESENTACIÓN CANVA — Slide con ejemplo de la vida cotidiana.**

> **Tu explicación teórica precisa:**
> "Los operadores de comparación que vieron recién comparan dos valores. Pero en la vida real las decisiones suelen depender de más de una condición al mismo tiempo.
>
> Por ejemplo: para conducir un auto necesito tener 18 años **y** tener licencia. No basta con una sola condición — las dos deben cumplirse.
>
> O pensemos en un día libre: si es feriado **o** si es domingo, no trabajo. Con que una de las dos se cumpla, es suficiente.
>
> Son los encargados de combinar respuestas de 'sí' o 'no' para resolver situaciones más complejas y producen, igual que los de comparación, un solo resultado: `true` o `false`."

---

### 2.2 Los Tres Operadores Lógicos

**EN PANTALLA: PRESENTACIÓN CANVA — Slide con los tres operadores, símbolo, nombre y regla.**

> **Tu explicación teórica precisa:**
> "Tienen tres operadores lógicos:"

**`&&` — AND (Y):** El resultado es `true` **solo si ambas condiciones son `true`**. Si una falla, el resultado es `false`.

```js
let edad = 20;
let tieneLicencia = true;

console.log(edad >= 18 && tieneLicencia);  // true (ambas son true)
console.log(edad >= 18 && false);           // false (una es false)
```

**`||` — OR (O):** El resultado es `true` si **al menos una condición es `true`**. Solo es `false` si las dos fallan.

```js
let esFeriado = false;
let esDomingo = true;

console.log(esFeriado || esDomingo);  // true (al menos una es true)
console.log(false || false);           // false (las dos son false)
```

**`!` — NOT (NO):** Invierte el resultado. `!true` → `false`. `!false` → `true`. Sirve para preguntar "¿esto NO se cumple?".

```js
let lloviendo = false;

console.log(!lloviendo);   // true (NO está lloviendo → verdadero)
console.log(!true);        // false
```

---

### 2.3 Demo en Proyecto — Predecir Antes de Ejecutar

**EN PANTALLA: VSCODE / PROYECTO — Ejecutar en el archivo de práctica.**

> **La acción guiada:**
> 1. Abrir el proyecto de práctica. Decirle al chat: *"Los mismos de antes: díganme qué va a devolver antes de que yo ejecute."*
> 2. Ejecutar una por una:

```js
18 >= 18 && true       // Predecir → true  (ambas cumplen)
15 >= 18 && true       // Predecir → false (primera falla)
false || true          // Predecir → true  (segunda cumple)
false || false         // Predecir → false (ninguna cumple)
!false                 // Predecir → true  (invierte)
!true                  // Predecir → false (invierte)
```

> **Pregunta de calibración:**
> *"¿Cuándo usarían `&&` y cuándo `||`? Sin mirar — díganmelo en sus palabras."*
>
> *(Respuesta esperada: `&&` cuando necesitan que se cumplan TODAS las condiciones. `||` cuando basta con que se cumpla UNA. Si no llega la respuesta, reformular: "¿`&&` es más exigente o menos exigente que `||`?" → más exigente, porque requiere que todas sean verdaderas.)*

---

### 2.4 Combinando Múltiples Expresiones y el uso de `()`

**EN PANTALLA: VSCODE / PROYECTO — Mostrar un ejemplo de condición combinada.**

> **Tu explicación teórica precisa:**
> "No siempre van a evaluar solo dos cosas. A veces las reglas de negocio exigen tres o más condiciones al mismo tiempo. Cuando mezclan `&&` y `||` en la misma frase, JavaScript necesita saber qué evaluar primero.
>
> Imaginen que para entrar a una discoteca gratis la regla es: 'Mujeres mayores de 18 años, **o** cualquier persona en la lista VIP'."

```js
let edad = 20;
let genero = 'femenino';
let esVIP = false;

// Opción 1 (Sin paréntesis — peligroso)
console.log(edad >= 18 && genero === 'femenino' || esVIP); 
```

> "JavaScript tiene un orden de precedencia (el `&&` se evalúa antes que el `||`), pero dejarlo al azar o a la memoria es una mala práctica. Se vuelve difícil de leer y propenso a errores.
>
> La regla de oro: **Usen paréntesis `()` para agrupar**. Los paréntesis obligan a JavaScript a resolver primero ese bloque, igual que en las matemáticas."

> **La acción guiada:**

```js
// Opción 2 (Con paréntesis — seguro y claro)
console.log( (edad >= 18 && genero === 'femenino') || esVIP );
```

> "Aquí queda clarísimo, tanto para la máquina como para otro programador que lea su código: o se cumple el grupo de la izquierda entero (tiene la edad y es el género correcto), o se cumple la condición de la derecha (es VIP).
>
> Ahora sí tienen todas las herramientas de evaluación. Con eso estamos listos para construir la estructura que usa estas respuestas booleanas para cambiar el rumbo del programa — el flujo condicional."

---

### 🚨 Gestión de Riesgos — Momento 2

**Confusión entre `&&` y `||`:** El alumno los invierte — usa `&&` donde necesitaba `||`.
- Señal: la condición nunca entra al bloque esperado, o entra siempre.
- Respuesta: *"Pregúntense: ¿necesito que se cumplan TODAS o basta con UNA? Si necesito todas → `&&`. Si basta una → `||`."* Dibujarlo si hace falta.

**Confusión entre `!` y `!==`:** El alumno los confunde.
- Señal: usa `!edad` queriendo decir "edad diferente de algo".
- Respuesta: Aclarar: "`!` invierte un booleano completo. `!==` compara dos valores y devuelve `true` si son diferentes. No son lo mismo."

> **Nota táctica de transición:**
> Con los operadores de comparación y lógicos ya dominados, el alumno tiene todos los ingredientes. El Momento 3 arma la estructura completa: el flujo de control y el `if / else if / else`.

---

## MOMENTO 3: Flujo de Control — `if / else if / else` + Code-Along Lab
**Tiempo:** 20 min

> **Nota táctica de inicio: {Primero el concepto, luego la sintaxis, luego el código real}**
> El alumno ya sabe evaluar condiciones — ahora aprende a usarlas para alterar el camino del programa. La secuencia en este momento es deliberada: primero el concepto visual (flujo de control), luego la sintaxis paso a paso, luego el diagrama para pensar antes de escribir, y finalmente el code-along donde el alumno replica en su archivo real. No saltar directamente al código.

---

### 3.1 El Concepto: Flujo de Control

**EN PANTALLA: EXCALIDRAW — Diagrama en construcción en vivo.**

> **Tu explicación teórica precisa:**
> El flujo de control es el orden en que el computador ejecuta las instrucciones de un programa. Por defecto, ese orden es **secuencial**: línea 1, línea 2, línea 3... de arriba hacia abajo, sin saltarse nada. El programa no toma decisiones — simplemente sigue la fila.

>El problema de ese modelo es que la vida real no funciona así. Un semáforo no siempre hace lo mismo: evalúa el color de la luz y elige la acción. Un cajero automático no siempre entrega dinero: primero verifica el saldo. Para representar esa realidad en código, necesitamos poder **cambiar el flujo** — hacer que el programa elija qué camino seguir.

> Lo que haremos sera cambiar el flujo de control secuencial,  permitir al programa **tomar un camino u otro** dependiendo de una condición. Ya no es una línea recta — es una bifurcación: si la condición es `true`, el programa va por aquí; si no, va por allá.
>
> Esto es lo que diferencia a un programa útil de uno que solo repite siempre lo mismo."

> **La acción guiada — Dibujar en Excalidraw en vivo:**
> 1. Dibujar una flecha vertical que baja (flujo normal).
> 2. Agregar un rombo con la pregunta `¿condición?`.
> 3. Desde el rombo: una flecha a la derecha con `true` → bloque de código A.
> 4. Desde el rombo: una flecha abajo con `false` → bloque de código B.
> 5. Ambas flechas se vuelven a unir y continúan hacia abajo.
>
- APLICA EL DIAGRAMA CON SI ERES MAYOR O NO PARA VOTAR

> *"Este rombo es exactamente el `if`. Eso es todo lo que hace: evalúa una condición y decide cuál camino tomar."*

---

### 3.2 La Sintaxis del `if / else / else if`

**EN PANTALLA: VSCODE — Archivo de práctica, código nuevo.**

> **Tu explicación teórica precisa:**
> "La estructura básica tiene tres partes. Las vamos a ver de a una."

---

**`if` — la condición mínima:**

>`if` es la instrucción que permite cambiar el flujo de control: le dice al programa "ejecuta este bloque de código **solo si** esta condición es verdadera". Si la condición no se cumple, el bloque se salta por completo y el programa continúa con lo que sigue.

```js
if (condición) {
  // Solo se ejecuta si la condición es true
}
```

> "Las llaves `{ }` delimitan el bloque que pertenece a este `if`. Todo lo que esté adentro solo corre cuando la condición es `true`. Si es `false`, JavaScript lo ignora completamente y sigue adelante."

>- La `condición` entre paréntesis es cualquier expresión que el programa evalúa y produce `true` o `false`.

> "Dos reglas que deben memorizar antes de escribir cualquier `if`:"
> 1. **Las llaves siempre.** Técnicamente JavaScript permite omitirlas si el bloque es de una sola línea, pero es una trampa. Siempre escriban las llaves — evita errores silenciosos y el código es más fácil de mantener.
> 2. **La condición va entre paréntesis.** `if condición { }` es un error de sintaxis. Siempre: `if (condición) { }`.

> 📐 **En el diagrama del 3.1:** El `if` es el **rombo de decisión**. Si la condición es `true`, el programa toma la flecha de la derecha (bloque A) y la ejecuta. Si es `false`, el programa salta ese bloque y continúa hacia abajo — no hay camino alternativo todavía.

**FASE 1 — Solo `if`:** El programa responde únicamente si se cumple la condición. Si no, no dice nada.

```js
const puntaje = Number(prompt('Ingresa tu puntaje:'));

if (puntaje >= 90) {
  alert('Excelente trabajo.');
}
// Si el puntaje es menor a 90 → silencio total. El programa no hace nada más.
```

> *"Ejecuten con 95 → aparece el mensaje. Ejecuten con 70 → no pasa nada. Ese silencio es el comportamiento del `if` sin `else`. Hay solo un camino activo."*

---

**`else` — el camino alternativo:**

>**`else`** define el bloque que se ejecuta cuando la condición del `if` es `false`. Cubre todos los casos que el `if` no atrapó.

```js
if (condición) {
  // Se ejecuta si la condición es true
} else {
  // Se ejecuta si la condición es false
}
```

> "El `else` no tiene condición propia — simplemente captura el caso contrario. Si la condición fue `false`, el `else` entra."

> 📐 **En el diagrama del 3.1:** El `else` es la **flecha que baja cuando la condición es `false`** (flecha del lado NO del rombo). Ahora el diagrama tiene dos caminos completos: si la condición es `true` → bloque A; si es `false` → bloque B. Ambos se reúnen y el programa continúa.


**FASE 2 — Agregamos `else`:** Ahora el programa siempre responde — un camino u otro.

```js
const puntaje = Number(prompt('Ingresa tu puntaje:'));

if (puntaje >= 90) {
  alert('Excelente trabajo.');
} else {
  alert('Sigue practicando.');
}
// Ahora siempre hay respuesta — pase lo que pase.
```

> *"Ejecuten con 95 → 'Excelente'. Con 70 → 'Sigue practicando'. Con 0 → también 'Sigue practicando'. El `else` captura todo lo que el `if` no capturó."*


---

**`else if` — múltiples caminos:**

>**`else if`** permite evaluar múltiples condiciones en secuencia. El programa las revisa de arriba a abajo y ejecuta **el primer bloque cuya condición sea verdadera**. Una vez que encuentra uno, ignora el resto, aunque otras también sean verdaderas.

```js
if (condición1) {
  // Caso 1
} else if (condición2) {
  // Caso 2
} else {
  // Si ninguna de las anteriores fue true
}
```

> "El orden importa. JavaScript evalúa de arriba hacia abajo. En cuanto una condición es `true`, ejecuta ese bloque y sale del `if` completo — no evalúa las que siguen."

> 📐 **En el diagrama del 3.1:** El `else if` es un **segundo rombo** encadenado. Si el primer rombo dice `false`, en lugar de ir directo al bloque B, el programa pasa a evaluar un nuevo rombo. Si ese segundo rombo dice `true` → bloque B; si también dice `false` → el `else` captura todo lo que queda.


**FASE 3 — Agregamos `else if`:** Ahora el programa distingue tres niveles.

```js
const puntaje = Number(prompt('Ingresa tu puntaje:'));

if (puntaje >= 90) {
  alert('Excelente trabajo.');
} else if (puntaje >= 60) {
  alert('Aprobado.');
} else {
  alert('Necesitas repasar el tema.');
}
```

> *"Ejecuten con 95 → 'Excelente'. Con 75 → 'Aprobado'. Con 40 → 'Necesitas repasar'. Noten que el `else` ya no dice 'Sigue practicando' — ahora es más específico porque el `else if` ya tomó los casos intermedios."*


> **Pregunta de calibración:**
> *"¿Qué pasaría si alguien saca 90 exacto — entra al `if` o al `else if`?"*
>
> *(Respuesta esperada: entra al `if`, porque la condición es `>= 90` y 90 cumple esa condición. El `else if` nunca se evalúa porque la primera condición ya fue `true`.)*


---


### 3.3 CODE-ALONG Lab Parte 1 — El Verificador de Votación

**EN PANTALLA: VSCODE + NAVEGADOR divididos. Archivo nuevo: `votacion.js` conectado a un `votacion.html`.**

> **La acción guiada — el instructor codifica, los alumnos replican:**

> *"Vamos paso a paso. Primero pienso la lógica en voz alta antes de escribir una sola línea."*
>
> - ¿Qué necesita el programa? → La edad del usuario.
> - ¿Cómo la obtiene? → `prompt()` + conversión con `Number()`.
> - ¿Qué condición evalúa? → Si la edad es mayor o igual a 18.
> - ¿Cuántos caminos? → Dos: habilitado / no habilitado.
> - ¿Estructura? → `if / else` simple.

```js
const edad = Number(prompt('¿Cuántos años tienes?'));

if (edad >= 18) {
  alert('Estás habilitado para votar.');
} else {
  const aFaltar = 18 - edad;
  alert(`Aún no puedes votar. Te faltan ${aFaltar} años.`);
}
```

> **La acción guiada — después de codificar:**
> 1. Ejecutar con edad `25` → verificar que muestre el mensaje de habilitado.
> 2. Ejecutar con edad `15` → verificar que calcule y muestre los años que faltan.
> 3. Ejecutar con edad exacta `18` → confirmar que el `>=` incluye el caso exacto.
>
> *"¿Por qué `Number()` antes de comparar? El `prompt()` devuelve string. Si comparamos `'25' >= 18` en JavaScript funciona por coerción, pero `'25' === 18` devolvería `false`. El hábito correcto es siempre convertir."*

> **Pregunta de calibración post code-along:**
> *"¿Qué pasaría si el usuario escribiera `'hola'` en el `prompt()`? ¿Qué devolvería `Number('hola')`?"*
>
> *(Respuesta esperada: `NaN`. No se entra a ningún `if` porque `NaN >= 18` es `false` y `NaN < 18` también es `false`. Este bug queda anotado — lo resolveremos en el Momento 4 con `isNaN()`.)*

---

### 3.5 CODE-ALONG Lab Parte 2 — El Clasificador de Temperatura

**EN PANTALLA: VSCODE + NAVEGADOR. Mismo flujo: pensar en voz alta, luego codificar.**

> *"Ahora tres caminos. El `else if` entra en escena."*
>
> - ¿Qué necesita el programa? → La temperatura en °C.
> - ¿Cuántos caminos? → Tres: frío / agradable / calor.
> - ¿Estructura? → `if / else if / else`.

```js
const temp = Number(prompt('Ingresa la temperatura en °C:'));

if (temp < 10) {
  alert('Hace frío. Lleva abrigo.');
} else if (temp <= 25) {
  alert('Temperatura agradable.');
} else {
  alert('Hace calor. Lleva agua.');
}
```

> **La acción guiada — después de codificar:**
> 1. Probar con `5` → frío.
> 2. Probar con `18` → agradable.
> 3. Probar con `30` → calor.
> 4. Probar con exactamente `10` → agradable (el `<` del primer bloque lo descarta; el `<= 25` del segundo lo captura).

> *"Noten que el `else` del final no tiene condición — no necesita. Si llegó hasta ahí es porque `temp` no era menor a 10 ni menor o igual a 25, o sea que forzosamente es mayor a 25."*

---

### 🚨 Gestión de Riesgos — Momento 3

**Error frecuente:** Usar `=` en lugar de `===` dentro de la condición del `if`.
- Señal: VS Code puede lanzar una advertencia. El bloque siempre ejecuta.
- Respuesta: Recordar del Momento 1: `=` asigna, `===` pregunta. Mostrarlo en consola.

**Error frecuente:** Olvidar las llaves `{ }` y anidar dos líneas sin darse cuenta.
- Señal: Solo la primera línea del "bloque" está bajo el `if`; la segunda siempre corre.
- Respuesta: *"Siempre llaves. Aunque sea una línea, siempre llaves."*

**Error frecuente:** El orden incorrecto en los `else if` produce resultados inesperados.
- Señal: el programa entra al bloque equivocado o nunca entra al correcto.
- Respuesta: Leer el `if` en voz alta de arriba a abajo: *"¿La primera condición captura casos que debería capturar el segundo?"*

> **Nota táctica de transición:**
> El alumno ya puede escribir `if / else if / else` con condiciones reales. Lo que falta es el número secreto — sin él, el juego no puede comparar nada. El Momento 4 introduce el objeto `Math` y cómo generar ese número aleatorio.

---

## MOMENTO 4: El Objeto `Math` — Números Aleatorios y Validación
**Tiempo:** 20 min

> **Nota táctica de inicio: {Dos herramientas nuevas, una motivación clara}**
> Este momento tiene dos objetivos: que el alumno pueda generar el número secreto del juego (`Math.random` + `Math.floor`) y que pueda validar que la entrada del usuario sea realmente un número (`isNaN`). La conexión con el juego es la principal motivación. Antes del código, definir brevemente qué es `Math` como objeto nativo.

---

### 4.1 ¿Qué es `Math`?

**EN PANTALLA: VSCODE — Escribir `Math.` en el editor y mostrar el autocompletado.**

> **Tu explicación teórica precisa:**
> "En JavaScript existe algo llamado objeto. Un objeto es una estructura que agrupa datos y funcionalidades relacionadas bajo un mismo nombre. Los verán en detalle más adelante — por ahora solo necesitan saber que existen.
>
> `Math` es un objeto que viene incluido en JavaScript. No hay que importarlo ni instalarlo — ya está disponible en cualquier archivo `.js`. Agrupa constantes matemáticas y funciones útiles. Se accede a sus funciones usando el punto: `Math.nombreDeLaFunción()`.
>
> Hoy van a usar dos de ellas: `Math.random()` y `Math.floor()`."

> *"Escriban `Math.` en VS Code y pausamos para ver el autocompletado — ahí están todas las funciones disponibles."*

---

### 4.2 `Math.random()` — El Generador de Números

**EN PANTALLA: VSCODE / PROYECTO — Ejecutar en el archivo de práctica.**

> **Tu explicación teórica precisa:**
> "`Math.random()` genera un número decimal aleatorio entre 0 (incluido) y 1 (excluido). Cada vez que se llama, devuelve un valor diferente."

> **La acción guiada — Ejecutar en el proyecto:**

```js
console.log(Math.random()); // 0.473829...
console.log(Math.random()); // 0.912034...
console.log(Math.random()); // 0.001928...
```

> *"Ejecuten tres veces seguidas. Cada ejecución devuelve un número diferente. Eso es lo que hace al juego impredecible."*

> **Pregunta de calibración:**
> *"¿Ven algún problema con este número para usarlo en el juego? El juego necesita un número entero entre 1 y 100."*
>
> *(Respuesta esperada: dos problemas — es decimal, y está entre 0 y 1, no entre 1 y 100. La solución viene en el siguiente punto.)*

---

### 4.3 `Math.floor()` — El Redondeador

**EN PANTALLA: VSCODE / PROYECTO.**

> **Tu explicación teórica precisa:**
> "`Math.floor()` redondea un número decimal **hacia abajo**, al entero más cercano. No importa cuántos decimales tenga — siempre baja."

> **La acción guiada:**

```js
console.log(Math.floor(4.9));  // → 4
console.log(Math.floor(4.1));  // → 4
console.log(Math.floor(4.0));  // → 4
console.log(Math.floor(0.99)); // → 0
```

> *"Sin importar qué tan cerca esté del siguiente entero — `Math.floor` siempre baja. El 4.9 sigue siendo 4."*

---

### 4.4 Combinados — El Número Secreto del Juego

**EN PANTALLA: VSCODE / PROYECTO.**

> **Tu explicación teórica precisa:**
> "Ahora combinamos los dos para resolver el problema que encontraron: necesitamos un número entero entre 1 y 100.
>
> La fórmula es esta:"

```js
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
console.log(numeroSecreto);
```

> "Desglosen el cálculo de adentro hacia afuera:
>
> 1. `Math.random()` → da un decimal entre 0 y 0.999...
> 2. `* 100` → lo escala a un rango entre 0 y 99.999...
> 3. `Math.floor(...)` → lo convierte en entero: entre 0 y 99
> 4. `+ 1` → lo desplaza: entre 1 y 100"

> **La acción guiada:**

```js
// Ejecutar varias veces para ver que el rango es correcto
console.log(Math.floor(Math.random() * 100) + 1); // un número entre 1 y 100
console.log(Math.floor(Math.random() * 100) + 1);
console.log(Math.floor(Math.random() * 100) + 1);
```

> **Pregunta de calibración:**
> *"¿Por qué el `+ 1` va afuera del `Math.floor()` y no adentro?"*
>
> *(Respuesta esperada: porque primero quiero redondear el número scales entre 0 y 99, y luego sumarle 1. Si lo pusiera adentro, el `Math.floor` redondearía el resultado de sumar 1, y el comportamiento es equivalente en muchos casos, pero explícitamente sumar afuera deja más clara la intención. Si nadie responde: ejecutar con ambas variantes y mostrar que el rango cambia sutilmente.)*

---

### 4.5 `NaN` e `isNaN()` — Entradas que no son números

**EN PANTALLA: VSCODE / PROYECTO.**

> **Tu explicación teórica precisa:**
> "Hasta ahora cuando hablamos de tipos de dato vieron números, strings y booleanos. Hay un valor especial que no encaja en ninguna categoría normal: `NaN`, que significa **Not a Number** — literalmente, 'no es un número'.
>
> `NaN` aparece cuando JavaScript intenta hacer una operación matemática con algo que no puede convertir. Por ejemplo:"

> **La acción guiada — Primero: ¿cuándo aparece NaN?**

```js
console.log(Number('hola'));   // → NaN   (no se puede convertir texto a número)
console.log(Number(''));       // → 0     (cadena vacía se convierte a 0 ⚠️)
console.log(Number('3abc'));   // → NaN   (mezcla de texto y número)
console.log(Number('25'));     // → 25    (esto sí funciona)
```

> *"Vean que `Number('hola')` no lanza un error — simplemente devuelve `NaN`. El programa sigue ejecutándose, pero ese valor es inútil para comparar. Si luego comparamos `NaN === 50`, el resultado es siempre `false`, aunque intentemos cualquier comparación con `NaN`."*

> **La acción guiada — Lo extraño de NaN:**

```js
console.log(NaN === NaN);   // → false ⚠️ NaN no es igual a sí mismo
console.log(NaN > 5);       // → false
console.log(NaN < 5);       // → false
```

> *"Esto es importante: no pueden detectar un `NaN` comparándolo con `===`. Para eso existe `isNaN()`."*

> **Tu explicación teórica precisa:**
> "`isNaN()` es una función que recibe un valor y devuelve `true` si ese valor **no es un número válido**, y `false` si sí lo es."

> **La acción guiada — Uso de isNaN():**

```js
console.log(isNaN(42));        // → false (42 sí es un número)
console.log(isNaN('hola'));    // → true  ('hola' no es un número)
console.log(isNaN(NaN));       // → true  (NaN definitivamente no es número)
console.log(isNaN(''));        // → false ⚠️ cadena vacía se convierte a 0
```

> *"Noten el caso de la cadena vacía — esa es la trampa. `isNaN('')` devuelve `false` porque JavaScript convierte `''` a `0` antes de evaluar. En el lab vamos a combinar `isNaN` con otra condición para cubrir ese caso también."*

> **Pregunta de calibración:**
> *"¿Por qué no podemos usar `intento === NaN` para detectar una entrada inválida?"*
>
> *(Respuesta esperada: porque `NaN === NaN` siempre devuelve `false` — NaN no es igual a sí mismo. Por eso existe `isNaN()`, que detecta específicamente ese caso.)*

---

### 🚨 Gestión de Riesgos — Momento 4

**Confusión con el valor de `Math.random()`:**
- El alumno cree que puede devolver exactamente 1. No puede — el rango es [0, 1).
- Respuesta: *"El 1 no está incluido. Por eso multiplicamos por 100 y obtenemos máximo 99.999..., que al redondearse hacia abajo da 99. El +1 lo sube a 100 como máximo."*

**Confusión con `isNaN('')`:**
- Señal: el alumno espera que la cadena vacía sea inválida, pero `isNaN('')` devuelve `false`.
- Respuesta: *"JavaScript convierte `''` a `0` antes de evaluar `isNaN`. Si quieren rechazar también la cadena vacía, combinen: `valor === '' || isNaN(valor)`."*

> **Nota táctica de transición:**
> Con `Math.random()`, `Math.floor()` e `isNaN()` en mano, el alumno tiene todas las herramientas del lab. Es hora del receso. Al volver, los retos autónomos los harán aplicar lo aprendido solos.

---

## ⏸ RECESO — 30 min

> **Nota táctica de receso:**
> Aprovechar el receso para revisar quién quedó con errores no resueltos en los code-alongs. Tener el código de referencia listo para apoyar rápido al volver. No abrir temas nuevos ni responder dudas de concepto — eso va después.

---

## MOMENTO 5: Retos Autónomos — Aplicación sin Andamiaje
**Tiempo:** 20 min

> **Nota táctica de inicio: {Silencio productivo — el instructor no codifica}**
> Estos retos son el primer momento de la clase donde el alumno trabaja solo. No hay code-along, no hay código en pantalla del instructor. El objetivo es que el alumno traduzca un problema en lenguaje natural a código usando lo que aprendió hoy. El instructor circula (o monitorea el chat en remoto), observa y solo interviene si alguien está completamente bloqueado — no si está equivocado. Equivocarse y corregirse es parte del reto.

---

### Instrucciones de Lanzamiento

**EN PANTALLA: PRESENTACIÓN — Enunciado del Reto 1 visible.**

> **La acción guiada:**
> 1. Compartir pantalla con el enunciado del Reto 1 escrito (o dictarlo al chat).
> 2. Decir en voz alta: *"Tienen 8 minutos. Trabajen solos. El criterio de éxito está en el enunciado — cuando cumplan los tres casos de prueba, el reto está listo. Cualquier duda sobre el enunciado me preguntan, dudas sobre el código las resuelven ustedes primero."*
> 3. Iniciar el temporizador visible en pantalla.

---

### RETO 1 — La Calculadora de Descuento (8 min)

**EN PANTALLA: ENUNCIADO visible en presentación o chat.**

> Una tienda online aplica descuentos según el total de la compra. El usuario ingresa el precio total con `prompt()`. El programa calcula el precio final con `alert()`:
> - Si el total es **mayor a $100**: aplica **20% de descuento**.
> - Si el total está **entre $50 y $100** (ambos incluidos): aplica **10% de descuento**.
> - Si el total es **menor a $50**: sin descuento.
>
> Mostrar el precio final con un mensaje como: `"Tu precio final es: $XX"`

**Criterio de éxito público — leer en voz alta antes de empezar:**
> *"El éxito se mide en tres casos: al ingresar 120 deben ver 96, al ingresar 80 deben ver 72, al ingresar 30 deben ver 30. Sin eso, no está listo."*

> **Notas de observación para el instructor:**
> - Señal de buen progreso: el alumno ya tiene el `prompt()` y el `Number()` y está escribiendo el primer `if`.
> - Señal de bloqueo: el alumno no sabe cómo calcular el precio con descuento. Pista mínima: *"¿Cuánto es el 20% de un número? Si tengo `precio`, ¿cómo calculo el 20%?"*
> - Error frecuente: el alumno usa `precio - 20` en lugar de `precio * 0.20`. Dejar que lo descubra comparando el resultado con el criterio de éxito.
> - La condición `precio >= 50 && precio <= 100` para el rango intermedio es la parte más difícil — el alumno puede intentarlo con dos `if` anidados primero. No corregirlo hasta que vea el resultado.

---

### Entre Retos — Revisión Rápida (2 min)

**EN PANTALLA: PANTALLA DEL INSTRUCTOR — Solución del Reto 1.**

> **La acción guiada:**
> 1. Pedir que levanten la mano (o reaccionen en el chat) los que llegaron al criterio de éxito.
> 2. Mostrar la solución referencial en pantalla sin explicarla completamente — solo correr los tres casos.
> 3. Si alguien no llegó: *"Copien esta referencia, entiendan la diferencia con la suya, y después del reto 2 lo discutimos."*

```js
const precio = Number(prompt('¿Cuál es el total de tu compra?'));
let precioFinal;

if (precio > 100) {
  precioFinal = precio - (precio * 0.20);
} else if (precio >= 50) {
  precioFinal = precio - (precio * 0.10);
} else {
  precioFinal = precio;
}

alert(`Tu precio final es: $${precioFinal}`);
```

---

### RETO 2 — El Clasificador de Nota (8 min)

**EN PANTALLA: ENUNCIADO visible en presentación o chat.**

> Un sistema escolar clasifica las notas de sus estudiantes. El usuario ingresa una nota entre 0 y 100 con `prompt()`. El programa responde con `alert()`:
> - **90 o más**: `"Excelente"`
> - **Entre 70 y 89**: `"Aprobado"`
> - **Entre 50 y 69**: `"Regular"`
> - **Menos de 50**: `"Reprobado"`

**Criterio de éxito público — leer en voz alta antes de empezar:**
> *"El éxito se mide cuando al ingresar 95, 75, 60 y 40 obtengan los cuatro mensajes distintos. Sin eso, no está listo."*

> **Notas de observación para el instructor:**
> - Este reto es más directo que el primero — cuatro ramas de `else if` en cascada, sin cálculos.
> - Error frecuente: el alumno pone las condiciones en orden incorrecto (por ejemplo, arranca con `>= 50` antes que `>= 90`). El resultado: un 95 cae en "Regular". Dejar que lo descubra probando con el criterio de éxito.
> - Señal de buen progreso: el alumno completó el Reto 1 y está copiando la estructura, solo cambiando las condiciones y los mensajes.

---

### Cierre de Retos — Revisión Rápida (2 min)

**EN PANTALLA: PANTALLA DEL INSTRUCTOR — Solución del Reto 2.**

> **La acción guiada:**
> 1. Correr los cuatro casos de prueba en pantalla.
> 2. Señalar en voz alta el punto clave: *"El orden de las condiciones importa. Si ponen `>= 50` primero, un 95 cae ahí y nunca llega a 'Excelente'. El `if` va de más restrictivo a menos restrictivo."*

```js
const nota = Number(prompt('Ingresa tu nota (0-100):'));

if (nota >= 90) {
  alert('Excelente');
} else if (nota >= 70) {
  alert('Aprobado');
} else if (nota >= 50) {
  alert('Regular');
} else {
  alert('Reprobado');
}
```

> **Nota táctica de transición:**
> Los retos confirmaron que el alumno puede escribir condicionales solo. El momento 6 cierra la clase: repaso, commit y preview del entregable.
