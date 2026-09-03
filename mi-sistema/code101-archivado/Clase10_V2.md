
# Flujo de Presentacion 10

## MOMENTO 0: Recap con Ruleta + Hook "El Programa que No Puede Decidir"

### **1. El Hook — "El Programa que No Puede Decidir"**

**EN PANTALLA: VS Code — script.js del proyecto de la Clase 09 abierto (el que tiene prompt de nombre y edad).**

> **Tu explicación:***"Miren este código que hicieron la clase pasada. Le pide el nombre al usuario, le pide la edad, convierte la edad con Number, calcula el año de nacimiento y lo muestra con un Template Literal. Todo de arriba hacia abajo — línea por línea. Lineal."*
> 

*(Ejecutar el programa en vivo — escribir un nombre y una edad — para que el grupo vea el resultado.)*

> ***"Ahora quiero hacerle algo más. Quiero que cuando ingrese mi edad, el programa detecte si soy mayor o menor de edad. Si escribo 25, que me diga 'eres mayor de edad'. Si escribo 15, que me diga algo diferente.***
> 
> 
> *Ahora mismo el programa no puede hacer eso. Hace exactamente lo mismo sin importar la edad que reciba. No distingue. No evalúa. No decide.*
> 
> ***¿Cómo le diríamos al programa que evalúe la edad y responda con un mensaje distinto según el caso?"***
> 

> **Al chat:***"Sin buscar, sin código — solo piensen: ¿qué capacidad le falta a este programa?"*
> 

*(Esperar 30 segundos. Aceptar respuestas como "una condición", "que compare", "que tome decisiones", "un filtro". No corregir — el objetivo es que verbalicen la necesidad antes de que el instructor dé la solución.)*

### **2. El Diagrama del Proyecto — "Adivina el Número"**

**EN PANTALLA: Excalidraw — diagrama de flujo del juego "Adivina el Número" con los 3 caminos.**

> **Tu explicación:***"Esa capacidad que le falta es lo que vamos a aprender hoy.*
> 
> 
> *Y la vamos a necesitar para el proyecto del módulo: el juego de Adivina el Número. Miren el diagrama. La computadora elige un número secreto. El usuario intenta adivinarlo**. ¿Pero qué tiene que hacer el programa después de recibir el intento del usuario?***
> 
> *Tiene que compararlos — el número del usuario con el número secreto. Y según ese resultado, tomar uno de tres caminos:*
> 
> *Si el intento es igual al número secreto — ¡Correcto!Si el intento es mayor — Muy alto, intenta de nuevo.Si el intento es menor — Muy bajo, intenta de nuevo.*
> 
> *El programa no puede seguir siendo lineal. Tiene que decidir."*
> 

> **Preguntas de activación al chat:**
> 
> 1. *"¿Qué tiene que hacer el programa primero — antes de decidir qué mensaje mostrar?"(Respuesta esperada: tiene que comparar los dos números)*
> 2. *"¿Cuántos caminos posibles ven en el diagrama?"(Respuesta esperada: tres — correcto, muy alto, muy bajo)*

> **Tu cierre del momento:***"Exacto. Para tomar una decisión, primero hay que comparar. Y para comparar tenemos herramientas específicas en JavaScript: los operadores de comparación. Eso es lo primero que vamos a ver."*
> 

## MOMENTO 1: Operadores de Comparación

### **1. Qué es un Operador de Comparación**

**EN PANTALLA: Excalidraw — escribe en vivo mientras explicas.**

> **Tu explicación:***"En la Clase 09 vieron los operadores aritméticos: más, menos, por, dividido. Esos operan sobre números y producen un número.*
> 
> 
> *Los operadores de comparación hacen algo diferente. Como su nombre lo dice, comparan. Toman dos valores, los comparan, y producen siempre un booleano — true o false. Solo dos posibles resultados.*
> 
> *Son la herramienta que le permite al programa responder preguntas de sí o no: ¿este número es mayor que ese? ¿estos dos valores son iguales? ¿esta cantidad supera el límite?*
> 
> *La sintaxis es simple: valor uno, operador de comparación en el medio, valor dos."*
> 

*(Escribir en Excalidraw mientras lo dices: VALOR 1 — OPERADOR — VALOR 2 → true / false)*

> **Pregunta de activación:***"**¿Cuántos resultados posibles puede tener una comparación?**"(Respuesta esperada: dos — verdadero o falso. Nunca un número, nunca un texto.)*
> 

### **2. Los Seis Operadores**

**EN PANTALLA: Slide o Excalidraw con tabla de operadores.**

> **Tu explicación:***"Hay seis operadores de comparación. Cuatro ya los conocen de matemáticas — los de mayor, menor, mayor o igual, menor o igual. Los otros dos son propios de JavaScript."*
> 

| Operador | Significado | Ejemplo | Resultado |
| --- | --- | --- | --- |
| === | Igual estricto | 5 === 5 | true |
| !== | Diferente estricto | 5 !== 3 | true |
| > | Mayor que | 10 > 5 | true |
| < | Menor que | 3 < 1 | false |
| >= | Mayor o igual | 10 >= 10 | true |
| <= | Menor o igual | 7 <= 6 | false |

> *"Los primeros dos — el triple igual y el signo de admiración más doble igual — los vamos a ver con más detalle en un momento porque tienen una particularidad importante. Los otros cuatro son exactamente como en matemáticas."*
> 

### **3. Demo Predictiva — Predecir Antes de Ejecutar**

**EN PANTALLA:** Consola de Chrome (F12) abierta — también puede ser el archivo de práctica.

> **Tu instrucción:***"Antes de que yo ejecute cada línea, díganme en el chat qué creen que va a devolver: true o false. Tienen 20 segundos."*
> 

**Ejecutar una por una, esperando respuestas del chat antes de presionar Enter:**

```jsx
5 > 3           // Predecir primero
10 < 2          // Predecir
7 >= 7          // Predecir — el igual incluye el caso exacto
4 <= 3          // Predecir
10 !== 10       // Predecir — son iguales, entonces "diferente" es false
5 !== 3         // Predecir
```

> *(Para cada resultado correcto del chat: "Exacto." Para los que se equivocan: ejecutar sin corregir verbalmente — dejar que el resultado en pantalla haga el trabajo.)*
> 

> **Pregunta de calibración:***"**¿Qué tienen en común todos los resultados que acaban de ver?** Sin importar qué números comparamos ni qué operador usamos — ¿qué produce siempre una comparación?"(Respuesta esperada: siempre produce true o false. Consolidar: "Siempre un booleano. Eso es lo que va a entrar adentro del if más adelante.")*
> 

### **4. La Igualdad Estricta — Por qué Tres Iguales**

**EN PANTALLA: Consola de Chrome — comparar en vivo.**

> **Tu explicación:***"El operador de igualdad en JavaScript usa tres signos de igual — no uno, no dos. Tres. ¿Por qué? Porque el de un solo igual ya está reservado para la asignación — recuerdan que let nombre igual 'Carlos' le da un valor a la variable. Ese no es comparación, es asignación.*
> 
> 
> *Y el de dos iguales existe pero no lo vamos a usar. Se llama igualdad no estricta y solo compara el valor, ignorando el tipo de dato.*
> 
> *El triple igual es igualdad estricta. Compara dos cosas al mismo tiempo: el valor y el tipo de dato. Por eso se llama estricto."*
> 

**Demo en consola — predecir antes de ejecutar:**

```jsx
console.log("IGUALDAD ESTRICTA");
console.log(5 === 5);    // mismo valor, mismo tipo — predecir
console.log("5" === 5);  // mismo valor visual, distinto tipo — predecir
```

*(Pausa antes de ejecutar la segunda línea. Dejar que el grupo prediga.)*

> *"¿Vieron? El 5 entre comillas es un string. El 5 sin comillas es un número. Para la igualdad estricta son cosas distintas — devuelve false. Recuerdan de la Clase 09: las comillas definen el tipo. El triple igual no se deja engañar por el contenido visual."*
> 

**Demo de la igualdad no estricta — para mostrar la diferencia:**

```jsx
console.log("5" == 5);   // igualdad no estricta — solo compara valor
```

> *"El doble igual dice 'sí, ambos tienen el valor 5' y devuelve true — ignoró los tipos. Eso es peligroso porque puede ocultar bugs. Por eso la regla es simple: siempre triple igual para comparar igualdad en JavaScript. Siempre."*
> 

> **Pregunta de calibración:***"Si usamos prompt para pedir la edad y el usuario escribe 18, ¿qué tipo tiene ese dato cuando llega?"(Respuesta esperada: string — prompt siempre devuelve string. Entonces si comparamos con triple igual contra el número 18 sin convertir, va a dar false aunque el valor sea 18. Eso es por qué Number() antes de comparar es importante.)*
> 

### **5. Comparación en Textos**

**EN PANTALLA: Consola de Chrome.**

> **Tu explicación:***"Los operadores de comparación también funcionan con texto — pero con una restricción. Solo dos operadores tienen sentido con strings: el de igualdad y el de diferencia. No puedes preguntar si una palabra es mayor o menor que otra en el sentido matemático.*
> 
> 
> *Y hay un detalle importante: la comparación de textos es sensible a mayúsculas y minúsculas."*
> 

**Demo en consola:**

```jsx
console.log("COMPARACION EN TEXTOS");
console.log("HOLA" === "adios");   // predecir
console.log("HOLA" === "HOLA");    // predecir
console.log("HOLA" === "hola");    // predecir — sensible a mayúsculas
console.log("Hola" !== "HOLA");    // son diferentes — predecir
```

> *"Vean el último: 'Hola' con H mayúscula y 'HOLA' todo en mayúscula — para JavaScript son strings diferentes. Es sensible al caso. Si en el juego el usuario escribe 'si' en minúscula y el programa compara con 'SI' en mayúscula, no van a coincidir. Ese es un bug que van a ver en la vida real."*
> 

> **🚨 Errores Comunes — Momento 1**
> 

| Error | Causa probable | Solución inmediata |
| --- | --- | --- |
| Un solo igual dentro de una condición | Confusión entre asignación y comparación | El igual simple asigna — el triple igual pregunta. Si el if siempre entra sin importar el valor, revisar si hay un igual simple donde debería haber triple |
| El triple igual devuelve false con prompt | Se comparó el string de prompt con un número sin convertir | Usar Number() antes de comparar — "5" === 5 es false, pero Number("5") === 5 es true |
| Sensibilidad a mayúsculas en texto | Se compara "SI" con "si" y da false | Unificar el texto antes de comparar — convertir todo a minúscula o mayúscula si el caso no importa |

## MOMENTO 2: Operadores Lógicos

### **1. Por qué Necesitamos Combinar Condiciones**

**EN PANTALLA: Excalidraw — escribe los ejemplos mientras los explicas.**

> **Tu explicación:***"Los operadores de comparación que vieron recién comparan dos valores — y producen un booleano. Pero en la vida real las decisiones dependen de más de una condición al mismo tiempo.*
> 
> 
> *Por ejemplo: para conducir un auto necesitas tener 18 años y tener licencia. No basta con una sola condición — las dos deben cumplirse al mismo tiempo.*
> 
> *O pensemos en el día libre: si es feriado o si es domingo o si es sábado, no trabajas. Con que una de las tres se cumpla, es suficiente.*
> 
> *¿Ya ven el patrón? Hay situaciones donde todas las condiciones deben cumplirse — y hay situaciones donde basta con que una sola cumpla. Para eso existen los operadores lógicos."*
> 

*(Escribir en Excalidraw mientras lo explicas: las dos situaciones — el carro con Y, el día libre con O)*

> **Al chat:***"Denme un ejemplo de la vida cotidiana donde usen el 'y' — donde dos cosas tienen que cumplirse juntas para que algo pase."(Esperar 30 segundos. Aceptar: "te compro un helado si sacas buena nota y te portas bien", "llevas las llaves y el candado", etc.)*
> 

### **2. Los Tres Operadores Lógicos**

**EN PANTALLA: Excalidraw — dibuja los tres con su símbolo y su analogía.**

**AND — el doble ampersand:**

> *"El AND en JavaScript se escribe con dos ampersand seguidos — ese símbolo que en inglés le dicen 'and'. El AND es como la Y en español. Exige que ambas condiciones sean verdaderas para que el resultado sea verdadero. Si una falla, todo falla.*
> 
> 
> *Como el carro: necesitas 18 años Y licencia. Si uno solo falla, no te lo presto."*
> 

```jsx
let edad = 20;
let tieneLicencia = true;

console.log(edad >= 18 && tieneLicencia);   // predecir — ambas son true
console.log(edad >= 18 && false);           // predecir — una es false
```

*(Pedir al chat que prediga antes de ejecutar cada línea.)*

**OR — los dos palitos verticales:**

> *"El OR se escribe con dos palitos verticales — están debajo de la tecla Escape o encima de Enter según el teclado. El OR es como la O en español. Basta con que una sola condición sea verdadera para que el resultado sea verdadero. Solo es falso si las dos fallan.*
> 
> 
> *Como el día libre: si es feriado O si es domingo, no trabajas. No tienen que cumplirse las dos."*
> 

```jsx
let esFeriado = false;
let esDomingo = true;

console.log(esFeriado || esDomingo);   // predecir — al menos una es true
console.log(false || false);           // predecir — las dos son false
```

**NOT — el signo de admiración:**

> *"El NOT es más sencillo. Se escribe con un solo signo de admiración antes de un valor o expresión. Lo que hace es invertir: si algo es verdadero, lo convierte en falso. Si algo es falso, lo convierte en verdadero.*
> 
> 
> *Como decir 'no está lloviendo' — si está lloviendo es true, pero el NOT lo invierte a false. Si no está lloviendo es false, y el NOT lo convierte a true."*
> 

```jsx
let lloviendo = false;

console.log(!lloviendo);   // predecir — invierte false a true
console.log(!true);        // predecir — invierte true a false
```

> **Pregunta de calibración:***"¿Cuándo usarían el AND y cuándo el OR? Sin mirar — díganmelo con sus palabras."(Respuesta esperada: AND cuando necesitan que se cumplan TODAS las condiciones. OR cuando basta con que se cumpla UNA. Si no llega: "¿cuál es más exigente, el AND o el OR?" — más exigente el AND porque requiere que todas sean verdaderas.)*
> 

### **3. Demo Predictiva Combinada**

**EN PANTALLA: Consola de Chrome o archivo de práctica.**

> **Tu instrucción:***"Igual que antes — predigan el resultado antes de que yo ejecute."*
> 

```jsx
18 >= 18 && true        // predecir
15 >= 18 && true        // predecir — primera falla, AND es false
false || true           // predecir — OR basta con una
false || false          // predecir — OR con las dos falsas
!false                  // predecir — invierte
!true                   // predecir — invierte
```

*(Ejecutar una por una. Para los que se equivocan: no corregir verbalmente — dejar que el resultado en pantalla lo haga.)*

### **4. Paréntesis para Agrupar Condiciones Múltiples**

**EN PANTALLA: Excalidraw — el ejemplo de la discoteca.**

> **Tu explicación:***"A veces van a tener más de dos condiciones que combinar. Cuando mezclan AND y OR en la misma expresión, JavaScript tiene un orden de evaluación — igual que en matemáticas donde el por va antes que el más. Pero dejarlo al azar es una mala práctica.*
> 
> 
> *La solución es la misma que en matemáticas: paréntesis. Los paréntesis agrupan y le dicen al programa qué evaluar primero.*
> 
> *Miren este ejemplo: para entrar gratis a una discoteca la regla es 'mujeres mayores de 18 años, o cualquier persona en la lista VIP'. Hay un grupo que tiene que evaluarse junto — ser mujer Y ser mayor de 18 — y luego eso se combina con la lista VIP."*
> 

```jsx
let edad   = 20;
let genero = "femenino";
let esVIP  = false;

// Con paréntesis — claro y explícito
console.log((genero === "femenino" && edad >= 18) || esVIP);
```

> *"Los paréntesis le dicen al programa: primero evalúa si es mujer Y mayor de 18. Si eso da true, con eso es suficiente para entrar — el OR lo permite. Si da false, entonces evalúa si es VIP.*
> 
> 
> *Regla práctica: siempre que combinen AND y OR en la misma expresión, usen paréntesis para hacer explícito el orden. El código que se lee de corrido sin tener que pensar en precedencia es código que no tiene bugs escondidos."*
> 

> **🚨 Errores Comunes — Momento 2**
> 

| Error | Causa probable | Solución inmediata |
| --- | --- | --- |
| AND cuando querían OR | Confusión entre "y" y "o" en la condición | Leer la condición en voz alta con "y" y "o" — si en el enunciado dice "o", usar OR |
| NOT aplicado en el lugar incorrecto | El signo de admiración se pone lejos de lo que quiere invertir | El NOT va pegado a lo que invierte — si es una expresión, envolverla en paréntesis |
| Mezcla de AND y OR sin paréntesis | Confianza en el orden de precedencia | Siempre agrupar con paréntesis cuando hay más de un operador lógico |

> **Nota táctica de transición:** Ya tienen las dos herramientas — comparar y combinar comparaciones. Ahora viene la estructura que usa esas herramientas para cambiar el flujo del programa: el if, el else if y el else. Eso es el Momento 3.
> 

## MOMENTO 3: Flujo de Control — if / else if / else

### **1. El Problema del Flujo Lineal**

**EN PANTALLA: Excalidraw — diagrama de flujo lineal (flecha recta hacia abajo).**

> **Tu explicación:***"Hasta ahora el programa funciona así — de arriba hacia abajo, línea por línea, sin detenerse ni desviarse. Eso se llama flujo lineal o flujo secuencial. El programa no toma decisiones: ejecuta todo en orden y ya.*
> 
> 
> *Pero en la vida real nada funciona así. Piensen en un semáforo. El semáforo no hace siempre lo mismo — evalúa el color y actúa diferente según el resultado:*
> 
> *Si el color es verde — pasa.Si el color es amarillo — precaución.Si el color es rojo — detente.*
> 
> *Eso es lo que vamos a agregarle al programa hoy: la capacidad de evaluar una condición y elegir qué bloque de código ejecutar según el resultado. A partir de hoy el flujo deja de ser lineal — va a ser condicional."*
> 

***(Dibujar en Excalidraw el rombo de decisión con dos caminos saliendo — uno para true, uno para false)***

### **2. El if — Solo la Rama Verdadera**

**EN PANTALLA: Excalidraw — sintaxis del if dibujada en vivo.**

> **Tu explicación:***"El primer bloque es el if. Tiene dos reglas de sintaxis que tienen que respetarse siempre:*
> 
> 
> *Regla uno — la condición va entre paréntesis.Regla dos — el código que se ejecuta si la condición cumple va entre llaves.*
> 
> *Si la condición es verdadera, el programa entra a las llaves y ejecuta lo que hay adentro. Si es falsa, lo salta completamente y sigue hacia abajo. El flujo continúa — no se detiene en el if."*
> 

**CODE-ALONG — dictas y escribes en el archivo de práctica:**

```jsx
const PUNTAJE = Number(prompt("Ingresa tu nota del 0 al 20"));

if (PUNTAJE >= 18) {
  alert("Excelente nota");
}

console.log("Debajo del if — esto siempre se ejecuta");
```

> *"Guardamos. Recargamos. Yo le voy a dar 17.*
> 
> 
> *¿Qué esperan que pase?"*
> 

*(Esperar respuesta del chat antes de ejecutar.)*

> *"No apareció el alert. ¿Por qué? Porque 17 no es mayor o igual a 18 — la condición es falsa. El bloque de las llaves se saltó completamente. Pero vean que el console.log de abajo sí se ejecutó — el flujo continúa después del if sin importar si entró o no.*
> 
> 
> *Ahora le doy 20."*
> 

*(Ejecutar de nuevo con 20 — el alert aparece.)*

> *"Ahora sí. 20 es mayor o igual a 18 — la condición es verdadera — entra al bloque — ejecuta el alert. Y después continúa igual."*
> 

> **Pregunta de calibración:***"Si le doy exactamente 18 — ¿entra al bloque o no?"(Respuesta esperada: sí entra — el operador mayor o igual incluye el caso exacto. Ejecutar con 18 para confirmar.)*
> 

### **3. El else — La Rama Alternativa**

**EN PANTALLA: VS Code — mismo archivo, agregar el else al código existente.**

> **Tu explicación:***"El if solo cubre un camino — el de cuando la condición cumple. Pero ¿qué pasa cuando no cumple? Ahora mismo simplemente lo salta y sigue. El else le da al programa un camino alternativo para ese caso.*
> 
> 
> *El else va pegado al if. No tiene condición propia — su condición ya está en el if. El else dice: 'si el if no se cumplió, entonces ejecuta esto'."*
> 

**CODE-ALONG — agrega el else al código anterior:**

```jsx
const PUNTAJE = Number(prompt("Ingresa tu nota del 0 al 20"));

if (PUNTAJE > 10) {
  alert("Aprobado");
} else {
  alert("Desaprobado");
}
```

> *"Ahora el programa tiene dos caminos. Le doy 8."*
> 

*(Ejecutar con 8 — aparece "Desaprobado".)*

> *"El if evalúa si 8 es mayor que 10 — es falso. Salta el bloque del if. Entra al else. Muestra el mensaje de desaprobado.*
> 
> 
> *Le doy 14."*
> 

*(Ejecutar con 14 — aparece "Aprobado".)*

> *"14 es mayor que 10 — verdadero. Entra al if. Muestra aprobado. El else lo ignora completamente — si uno entra, el otro no."*
> 

> **Pregunta de calibración:***"¿El else puede tener su propia condición entre paréntesis?"(Respuesta esperada: no — el else no tiene condición. Su condición está implícita: se ejecuta cuando ninguna condición anterior se cumplió. Si pusieran una condición en el else, JavaScript les daría un error de sintaxis.)*
> 

### **4. El else if — Múltiples Condiciones**

**EN PANTALLA: VS Code — mismo archivo, expandir la estructura.**

> **Tu explicación:***"Hasta ahora tenemos dos caminos: cumple o no cumple. Pero en el juego de notas hay tres casos reales: excelente, regular y desaprobado. Para agregar más caminos se usa el else if.*
> 
> 
> *El else if va entre el if y el else. Tiene su propia condición entre paréntesis — igual que el if. Puede haber varios else if seguidos. El programa los evalúa uno por uno de arriba hacia abajo. En cuanto uno cumple, ejecuta ese bloque y salta todos los demás.*
> 
> *El orden importa: la condición más específica o más restrictiva va primero."*
> 

**CODE-ALONG — expandir a tres ramas:**

```jsx
const PUNTAJE = Number(prompt("Ingresa tu nota del 0 al 20"));

if (PUNTAJE >= 18) {
  alert("Excelente nota");
} else if (PUNTAJE >= 11) {
  alert("Nota regular");
} else {
  alert("Nota desaprobatoria");
}
```

> *"Ahora hay tres caminos. Vean el orden — primero el mayor o igual a 18, luego el mayor o igual a 11, luego el else para todo lo demás. ¿Por qué ese orden?*
> 
> 
> *Porque el programa evalúa de arriba hacia abajo. Si pongo primero el de 11, un alumno con 19 entraría ahí — porque 19 también es mayor o igual a 11. Entraría en el primer bloque que cumpla y nunca llegaría al de 18.*
> 
> *El orden de los else if no es decorativo — define qué bloque se ejecuta."*
> 

**Demo en vivo con tres valores:**

*(Ejecutar con 20 → excelente. Con 13 → regular. Con 8 → desaprobado.)*

> *"¿Qué pasa si le doy 13? El if evalúa 13 mayor o igual a 18 — falso, lo salta. El else if evalúa 13 mayor o igual a 11 — verdadero, entra, muestra 'regular', y salta el else. Ya no lo evalúa."*
> 

> **Pregunta de calibración:***"Si tengo if — else if — else if — else, ¿puede entrar a más de uno de esos bloques en la misma ejecución?"(Respuesta esperada: no — en cuanto uno cumple, el resto se ignora. Solo uno de los bloques se ejecuta por ejecución. Si quieren que varios bloques corran siempre, tienen que usar if independientes — pero eso lo verán cuando lo necesiten.)*
> 

### **5. LAB — Paso 1: ¿Puedes Votar? (10 min)**

**EN PANTALLA: VS Code — el lab de la clase (LAB_CLASE_10).**

> **Criterio de éxito antes de soltarlos:***"El éxito de estos 10 minutos se mide cuando al ingresar 26 el programa les diga que pueden votar, y al ingresar 15 les diga que aún no pueden. Dos pruebas, dos mensajes diferentes, ningún error en consola."*
> 

**Parte 1 del lab — if / else para votar:**

Los alumnos trabajan en el proyecto guess-number-js. La estructura del ejercicio:

```jsx
const EDAD = Number(prompt("¿Cuántos años tienes?"));

if (EDAD >= 18) {
  alert("Puedes votar");
} else {
  alert("Aún no puedes votar");
}
```

*(Circular por pantallas compartidas o pedir screenshot al chat del resultado. Verificar que Number() está aplicado antes de la comparación — ese es el error más frecuente en este punto.)*

> **Al chat cuando tengan el resultado:***"¿Qué pasa si le dan exactamente 18? ¿Qué mensaje sale? Pruébenlo."(El mayor o igual incluye el 18 — tiene que salir "Puedes votar". Si alguien puso solo mayor que — sin el igual — van a ver el bug en vivo.)*
> 

> **Nota táctica de transición:** Ya tienen la estructura completa de decisión. El siguiente problema es el proyecto: el juego "Adivina el Número" necesita un número secreto generado aleatoriamente. Para eso vamos a ver una herramienta que trae JavaScript por defecto — el objeto Math con sus funciones random y floor.
> 

## **MOMENTO 4: Math.random + Math.floor — Derivación en 3 Pasos (~15 min)**

### **1. Qué es el Objeto Math**

**EN PANTALLA: Consola de Chrome — escribe Math. y deja que el autocompletado muestre las opciones.**

> **Tu explicación:***"JavaScript tiene herramientas matemáticas integradas — funciones y constantes que no tenemos que crear nosotros porque el lenguaje ya las trae. Todas están agrupadas en un objeto que se llama Math, con M mayúscula.*
> 
> 
> *Un objeto en JavaScript es como un estuche de herramientas: agrupa cosas relacionadas bajo un mismo nombre. Para acceder a cualquier herramienta dentro de Math, se escribe Math punto y el nombre de lo que quieres.*
> 
> *Vean lo que aparece cuando escribo Math punto en la consola — ahí están todas las funciones matemáticas disponibles: seno, coseno, raíz cuadrada, potencia, logaritmo, redondeo, y muchas más. Nosotros vamos a usar solo dos: random y floor."*
> 

*(Escribir Math. en la consola y mostrar la lista de autocompletado brevemente. No detenerse a explicar cada función — solo mostrar que hay muchas.)*

> **Pregunta de activación:***"¿Para qué creen que vamos a necesitar un número aleatorio en el juego de Adivina el Número?"(Respuesta esperada: para el número secreto que la computadora elige y el usuario tiene que adivinar. Sin aleatoriedad, el número sería siempre el mismo.)*
> 

### **2. Paso 1 — Math.random: de 0 a 1**

**EN PANTALLA: Consola de Chrome.**

> **Tu explicación:***"La primera función es Math.random. Genera un número decimal aleatorio — diferente cada vez que se llama. El rango es entre 0 y 1, sin incluir el 1.*
> 
> 
> *Las funciones siempre tienen paréntesis — a diferencia de los datos y las constantes que no los tienen. Esos paréntesis son donde le pasarías información a la función si la necesitara. Math.random no necesita información adicional, así que los paréntesis van vacíos."*
> 

**Demo en consola — ejecutar varias veces:**

```jsx
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
```

> *"Vean — cada llamada da un número diferente. Todos están entre 0 y 1: 0.34, 0.87, 0.12. Decimales, aleatorios, siempre en ese rango.*
> 
> 
> *El problema es que yo no quiero números entre 0 y 1. Quiero números entre 1 y 100. ¿Qué tengo que hacerle a este resultado para ampliar ese rango?"*
> 

> **Al chat:***"Si tengo un número entre 0 y 1, ¿qué operación matemática le haría para llevarlo a un rango de 0 a 100?"(Respuesta esperada: multiplicar por 100. Aceptar y confirmar.)*
> 

### **3. Paso 2 — Multiplicar por 100: de 0 a 100 (decimales)**

**EN PANTALLA: Consola de Chrome.**

```jsx
console.log(Math.random() * 100);
console.log(Math.random() * 100);
console.log(Math.random() * 100);
```

> *"Ahora sí estamos en el rango de 0 a 100. Pero vean — siguen siendo decimales: 34.72, 87.45, 12.09. Yo necesito enteros para el juego. No puedo pedirle al usuario que adivine el 34.72.*
> 
> 
> *¿Qué falta ahora?"*
> 

> **Al chat:***"Tengo decimales entre 0 y 100. ¿Qué necesito hacer para convertirlos en enteros?"(Respuesta esperada: redondear. Confirmar: "Exacto. Y para eso existe Math.floor.")*
> 

### **4. Paso 3 — Math.floor: eliminar los decimales**

**EN PANTALLA: Consola de Chrome.**

> **Tu explicación:***"Math.floor redondea un decimal hacia abajo — siempre hacia el entero menor más cercano. No redondea al más cercano como en matemáticas — siempre hacia abajo. Por eso se llama floor, que en inglés significa piso.*
> 
> 
> *Para usarlo, se envuelve el número decimal entre los paréntesis de Math.floor."*
> 

**Demo de Math.floor solo — para entender su comportamiento:**

```jsx
console.log(Math.floor(4.9));    // predecir — siempre hacia abajo
console.log(Math.floor(4.1));    // predecir
console.log(Math.floor(4.0));    // predecir
```

*(Pedir al chat que prediga antes de ejecutar. La respuesta es 4 en los tres casos.)*

> *"4.9, 4.1, 4.0 — los tres dan 4. Siempre hacia abajo. Nunca sube.*
> 
> 
> *Ahora envolvemos el Math.random por 100 dentro del Math.floor:"*
> 

```jsx
console.log(Math.floor(Math.random() * 100));
console.log(Math.floor(Math.random() * 100));
console.log(Math.floor(Math.random() * 100));
```

> *"Vean — ya son enteros. Pero hay un problema: vean si aparece un cero. Math.random puede dar 0.003, multiplicado por 100 da 0.3, redondeado hacia abajo da 0. Y yo quiero que el mínimo sea 1, no 0."*
> 

> **Al chat:***"Tengo enteros entre 0 y 99. Quiero enteros entre 1 y 100. ¿Qué le sumo?"(Respuesta esperada: sumar 1. Aceptar y confirmar.)*
> 

### **5. La Fórmula Final — Enteros del 1 al 100**

**EN PANTALLA: VS Code — el archivo del proyecto.**

```jsx
const NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1;
console.log("Número secreto:", NUMERO_SECRETO);
```

> *"Esta es la fórmula completa. Léanla de adentro hacia afuera:*
> 
> 
> *Math.random genera un decimal entre 0 y 1.Multiplicado por 100 lo lleva a un decimal entre 0 y 100.Math.floor lo convierte en entero entre 0 y 99.Más 1 lo mueve a entero entre 1 y 100.*
> 
> *Esa constante es el número secreto del juego. Cada vez que recarguen la página, la computadora elige uno diferente.*
> 
> *La pongo en una constante porque el número secreto no debe cambiar durante la partida — el jugador tiene que adivinar este número, no uno que vaya cambiando solo."*
> 

**Demo en consola — ejecutar múltiples veces recargando:**

*(Recargar la página tres veces seguidas. El número secreto cambia en cada recarga. Eso es lo que el alumno va a ver en el proyecto.)*

> **Pregunta de calibración:***"¿Por qué usamos const en lugar de let para el número secreto?"(Respuesta esperada: porque el número no cambia durante la partida — una vez generado, se mantiene igual hasta que el usuario acierta o recarga. Con let podría ser reasignado accidentalmente.)*
> 

> **Nota táctica de transición:** Ya tienen la fórmula del número secreto. Ahora el lab conecta todo lo del día: el else if para detectar si el intento es mayor, menor o igual al número secreto. Eso es el Momento 5.
> 

## MOMENTO 5: LAB Principal — Paso 2 + Reto Tienda (~20 min)

### **1. Apertura del Momento — Repaso Rápido del Lab**

**EN PANTALLA: VS Code — el lab de la clase con el Paso 1 ya completado.**

> **Tu instrucción:***"Ya tienen el Paso 1 funcionando. Antes de seguir, quiero que todos me manden un screenshot al chat con el resultado de su Paso 1 — el mensaje de 'puedes votar' o 'aún no puedes votar' según la edad que ingresaron. Si alguien todavía no llegó ahí, este es el momento de ponerse al día — tienen 2 minutos."*
> 

*(Esperar 2 minutos. Verificar screenshots. Resolver un bloqueo rápido si alguien está atascado en el Paso 1 antes de avanzar.)*

### **2. LAB Paso 2 — Detector de Temperatura (8 min)**

**EN PANTALLA: VS Code — el lab de la clase, sección del Paso 2.**

> **Criterio de éxito antes de soltarlos:***"El Paso 2 tiene éxito cuando al ingresar una temperatura el programa responda con exactamente uno de estos tres mensajes: 'Hace frío — ponte el abrigo' si la temperatura es menor o igual a 15, 'Temperatura agradable' si está entre 16 y 25, o 'Hace calor' si supera los 25. Tres casos, tres mensajes, ningún caso sin respuesta."*
> 

La estructura del Paso 2 que los alumnos implementan:

```jsx
const TEMPERATURA = Number(prompt("¿Cuál es la temperatura de hoy?"));

if (TEMPERATURA <= 15) {
  alert("Hace frío — ponte el abrigo");
} else if (TEMPERATURA <= 25) {
  alert("Temperatura agradable");
} else {
  alert("Hace calor");
}
```

> **Mientras trabajan, señalar este punto clave:***"Noten el orden de las condiciones. Primero menor o igual a 15, luego menor o igual a 25. Si invierten el orden y ponen primero el de 25, cualquier temperatura — incluyendo 5 grados — entraría ahí porque 5 también es menor o igual a 25. El orden en el else if no es decorativo."*
> 

**Pruebas de validación que deben hacer:**

- Temperatura 10 → "Hace frío"
- Temperatura 20 → "Temperatura agradable"
- Temperatura 35 → "Hace calor"
- Temperatura exactamente 15 → "Hace frío" (límite incluido)
- Temperatura exactamente 25 → "Temperatura agradable" (límite incluido en la segunda condición)

> **Al chat cuando tengan el resultado:***"¿Qué pasa con exactamente 15 grados? ¿Y con exactamente 25? Pruébenlos."*
> 

**Commit sugerido al terminar el Paso 2:**

> *"feat: condicional else if — detector de temperatura"*
> 

### **3. Reto del Instructor — Tienda con Descuentos**

**EN PANTALLA: VS Code — nuevo bloque en el mismo archivo, debajo del Paso 2.**

> **Tu instrucción:***"Ahora les voy a dar mi reto. Este ya no está en el lab oficial — lo van a leer en el chat y lo escriben por su cuenta. Eso es como trabajan en la vida real: alguien les cuenta el problema en texto y ustedes tienen que traducirlo a código.*
> 
> 
> *Léanlo:"*
> 

*(Dictar el enunciado o pegarlo en el chat de Teams:)*

**Reto — Tienda Online con Descuentos:**

> Una tienda online aplica descuentos según el total de compra. El usuario ingresa el precio total con prompt. El programa muestra el precio final con alert.
> 
> 
> Las reglas son:
> 
> - Si el total es mayor a 100 — aplicar 20% de descuento
> - Si el total está entre 50 y 100 (ambos incluidos) — aplicar 10% de descuento
> - Si el total es menor a 50 — sin descuento, el precio final es el mismo
> 
> El éxito se mide probando con tres valores:
> 
> - Si ingresan 120, el precio final tiene que dar 96
> - Si ingresan 75, el precio final tiene que dar 67.5
> - Si ingresan 30, el precio final tiene que dar 30

> *"Antes de codificar — ¿cuántos caminos tiene este problema?"(Respuesta esperada: tres — descuento del 20%, descuento del 10%, sin descuento.)*
> 

> *"¿El caso del 'entre 50 y 100' necesita un solo operador o dos condiciones combinadas?"(Respuesta esperada: dos condiciones combinadas con AND — mayor o igual a 50 Y menor o igual a 100. Pero si usan bien el else if y el else, en realidad el else if solo necesita mayor o igual a 50 porque el else if ya sabe que los menores a 100 no pasaron el primer filtro.)*
> 

La solución de referencia para el instructor:

```jsx
const TOTAL = Number(prompt("¿Cuál es el total de tu compra?"));
let precioFinal;

if (TOTAL > 100) {
  precioFinal = TOTAL * 0.80;
} else if (TOTAL >= 50) {
  precioFinal = TOTAL * 0.90;
} else {
  precioFinal = TOTAL;
}

alert(`Tu precio final es: ${precioFinal}`);
```

> *(Esta solución es la referencia — no mostrarla antes de que el alumno intente. Mostrarla solo para diagnosticar si alguien está bloqueado después de 5 minutos.)*
> 

**Pruebas de validación del reto:**

- 120 → 96 (120 × 0.80)
- 75 → 67.5 (75 × 0.90)
- 30 → 30 (sin descuento)

> **Al chat cuando tengan el resultado correcto:***"¿Para qué valor usaron AND y para cuál no? ¿Alguien lo resolvió sin necesitar AND en ninguna condición? ¿Por qué funciona sin AND con el else if?"*
> 

**Commit sugerido al terminar el Reto:**

> *"feat: reto else if — tienda con descuentos por tramos"*
> 

> **🚨 Errores Comunes — Momento 5**
> 

| Error | Causa probable | Solución inmediata |
| --- | --- | --- |
| El precio final da NaN | Number() no está aplicado al resultado de prompt | Verificar que TOTAL esté convertido antes de la operación de descuento |
| El descuento siempre es el mismo sin importar el total | Orden incorrecto de los else if o condición demasiado amplia en el primer bloque | Revisar el orden — condición más restrictiva primero. La condición mayor a 100 tiene que estar antes que mayor o igual a 50 |
| El reto muestra el total sin descuento cuando sí debería descontar | Se asignó precioFinal al total sin la operación de descuento dentro del bloque | Verificar que dentro de cada bloque esté la multiplicación — no solo la asignación directa |
| La temperatura exactamente en el límite da el mensaje incorrecto | El operador es mayor que en lugar de mayor o igual que (o viceversa) | Verificar si el límite debe ser incluido o excluido y ajustar el operador accordingly |

> **Nota táctica de transición:** El lab del día está completo. Ahora cierre: verificar commits, push al repositorio, y preview de lo que viene en la Clase 11.
> 

> **✅ Checkpoint:** El alumno tiene los Pasos 1 y 2 del lab funcionando con los tres valores de prueba correctos, y el reto de la tienda muestra 96, 67.5 y 30 respectivamente. Al menos un commit descriptivo por parte. Listo para el Momento 6.
>