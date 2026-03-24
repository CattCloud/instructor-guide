# Guía del Facilitador - Clase 09: Fundamentos de JavaScript

> Tiempo de lectura: 10 minutos | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Algoritmo**: Secuencia ordenada de pasos para resolver un problema. La base del pensamiento computacional.
- **Variable**: Espacio con nombre para guardar un dato. `let` para valores que cambian, `const` para constantes.
- **Tipo de dato**: La naturaleza de un valor: `string` (texto), `number` (número), `boolean` (verdadero/falso).
- **Operador**: Símbolo que realiza operaciones. Aritméticos (`+`, `-`, `*`, `/`, `%`) y de concatenación (`+` con strings).
- **console.log()**: La herramienta de depuración más usada. Imprime valores en la consola del navegador.

---

## 🔗 Analogías Útiles

**Variable <> Caja con etiqueta:**
Una variable es como una caja donde guardas algo. La etiqueta es el nombre (`edad`), y el contenido es el valor (`25`). Puedes cambiar lo que hay dentro de la caja (`let`), o sellar la caja para que no cambie (`const`).

**Tipos de dato <> Tipos de contenedor:**
No es lo mismo una caja de zapatos que una botella de agua. Cada contenedor está diseñado para un tipo de contenido. `string` es para texto, `number` para números, `boolean` para sí/no. Si mezclas contenedores, las cosas se rompen—como cuando `'5' + 3` da `'53'` en lugar de `8`.

**console.log() <> Ventana de rayos X:**
Cuando no sabes qué hay dentro de una variable, `console.log()` te permite "ver a través" del código. Es como una radiografía que muestra qué valor tiene cada variable en cada momento.

**Algoritmo <> Receta de cocina:**
Una receta tiene ingredientes (variables/datos) y pasos en orden (instrucciones). Si cambias el orden de los pasos, el resultado cambia. Si omites un ingrediente, falla. Un programa funciona igual.

---

## 📚 Contexto Histórico

### JavaScript: El lenguaje creado en 10 días

En mayo de 1995, **Brendan Eich** recibió un encargo imposible en Netscape: crear un lenguaje de programación para el navegador en solo 10 días. La web era joven, las páginas eran completamente estáticas, y Marc Andreessen (cofundador de Netscape) quería que los usuarios pudieran interactuar con las páginas.

El lenguaje pasó por tres nombres: primero **Mocha**, luego **LiveScript**, y finalmente **JavaScript**—un nombre elegido por marketing para aprovechar la popularidad de Java de Sun Microsystems, aunque los dos lenguajes tienen muy poco en común.

Hoy JavaScript es el lenguaje más usado del mundo. Según la encuesta de Stack Overflow, lleva más de una década como #1. Corre en cada navegador, en servidores (Node.js), en apps móviles (React Native), y hasta en dispositivos IoT.

> **Para contar en clase:** "JavaScript fue creado en 10 días por una sola persona. Hoy lo usan más de 17 millones de desarrolladores. Lo que van a aprender hoy es la base del lenguaje más importante de la web."

### La consola del navegador: De herramienta interna a estándar

La consola del navegador no existió siempre. En los primeros años de JavaScript, los desarrolladores depuraban con `alert()` — ventanas emergentes que detenían todo el programa. Era extremadamente tedioso.

En 2006, **Joe Hewitt** creó **Firebug**, una extensión para Firefox que revolucionó el desarrollo web. Por primera vez, los desarrolladores podían inspeccionar el DOM, ver errores, y ejecutar código en una consola integrada. Google Chrome adoptó la idea en 2008 con sus DevTools, que hoy son el estándar de la industria.

> **Para contar en clase:** "Antes de la consola, los desarrolladores usaban `alert()` para depurar. Imaginen poner un `alert()` después de cada línea para saber qué valor tiene una variable. Por eso `console.log()` fue una revolución."

**Fuentes:** [The New Stack - Brendan Eich](https://thenewstack.io/brendan-eich-on-creating-javascript-in-10-days-and-what-hed-do-differently-today/){:target="_blank"}, [Wikipedia - JavaScript](https://en.wikipedia.org/wiki/JavaScript){:target="_blank"}

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "El Algoritmo del Café"

Esta es la actividad de apertura. Conecta con las preguntas de reflexión pre-clase.

**Dinámica sugerida:**
```
Facilitador: "¿Quién tomó café esta mañana? ¿Quién puede explicarme cómo se prepara?"
(Alguien responde algo como "pones agua, café, calientas...")
Facilitador: "Ok, si yo fuera una computadora y sigo tus instrucciones..."
Facilitador: (Actúa literalmente: intenta "poner agua" sin taza, "calentar" sin encender nada)
Facilitador: "¿Qué falló? Las computadoras no asumen nada. Necesitan CADA paso."
Facilitador: "Eso que acabamos de hacer—descomponer una tarea en pasos precisos—se llama ALGORITMO."
```

> Esta dinámica siempre genera risas y establece la idea central: la computadora es literal.

### Dinámica 2: "¿Qué tipo soy?"

Después de explicar tipos de datos, haz un juego rápido.

**Dinámica sugerida:**
```
Facilitador: "Voy a decir un valor. Ustedes me dicen el tipo."
Facilitador: "42"            → (Grupo: "number!")
Facilitador: "'42'"          → (Grupo: "string!" — algunos dirán number)
Facilitador: "true"          → (Grupo: "boolean!")
Facilitador: "'Hola mundo'"  → (Grupo: "string!")
Facilitador: "3.14"          → (Grupo: "number!")
Facilitador: "'false'"       → (Trampa! Es string porque tiene comillas)
```

> La trampa de `'false'` vs `false` es un momento excelente para reforzar que las comillas definen el tipo.

### Dinámica 3: "La Trampa del +"

Antes de la Parte 3 del lab, haz esta demostración en vivo.

**Dinámica sugerida:**
```
Facilitador: (Escribe en la consola) "¿Cuánto es 5 + 3?"
(Grupo: "8")
Facilitador: (Escribe '5' + 3) "¿Y esto?"
(Algunos: "8", otros: "53")
Facilitador: (Ejecuta, muestra '53')
Facilitador: "¡El + es un operador CONFUSO! Con strings concatena, con numbers suma."
Facilitador: "Esto es MUY importante para el juego. prompt() SIEMPRE devuelve string."
```

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: Primer Script

**Cuándo usarlo:** Demo en vivo antes de la Parte 1 del lab.

```js
// script.js - Tu primer programa
console.log('¡Hola desde JavaScript!');
console.log('Mi nombre es [tu nombre]');
console.log(2 + 2);
console.log('2' + '2');
```

**Tip de facilitación:** Escribe el código línea por línea. Después de cada `console.log()`, guarda y muestra el resultado en la consola. El contraste entre `2 + 2` (da 4) y `'2' + '2'` (da '22') es un momento revelador.

### Ejemplo 2: Variables y typeof

**Cuándo usarlo:** Demo antes de la Parte 2 del lab.

```js
let nombre = 'Ada';
let edad = 28;
let programadora = true;

console.log(nombre, typeof nombre);     // Ada string
console.log(edad, typeof edad);         // 28 number
console.log(programadora, typeof programadora); // true boolean
```

**Tip de facilitación:** Pregunta "¿Qué tipo creen que tiene cada variable?" ANTES de ejecutar. Déjalos predecir.

### Ejemplo 3: prompt() y la Trampa del String

**Cuándo usarlo:** Después de que usen prompt() por primera vez.

```js
let numero = prompt('Dame un número:');
console.log(numero);           // "5"
console.log(typeof numero);    // "string" ← ¡SORPRESA!
console.log(numero + 10);      // "510" ← concatena, no suma
console.log(Number(numero) + 10); // 15 ← ahora sí suma
```

**Tip de facilitación:** Este es el momento "ajá" más importante de la clase. `prompt()` SIEMPRE devuelve string. Esto será crucial para el juego "Adivina el Número" donde compararán números.

### Ejemplo 4: Template Literals

**Cuándo usarlo:** Al final de la Parte 3, como "upgrade".

```js
// Forma vieja (concatenación)
let msg1 = 'Hola ' + nombre + ', tienes ' + edad + ' años.';

// Forma moderna (template literals)
let msg2 = `Hola ${nombre}, tienes ${edad} años.`;

// Ambas producen el mismo resultado
console.log(msg1);
console.log(msg2);
```

**Tip de facilitación:** Muestra ambas formas y pregunta cuál prefieren. Template literals son más legibles, especialmente con muchas variables.

---

## ⚠️ Errores Comunes

| Señal | Qué está pasando | Qué hacer |
|-------|------------------|-----------|
| Consola vacía, sin errores | `<script>` no está en el HTML o apunta al archivo equivocado | Verificar `<script src="script.js">` justo antes de `</body>` |
| `Uncaught ReferenceError: x is not defined` | Variable no declarada o typo en el nombre | Verificar que usaron `let` o `const` y que el nombre coincide |
| `Uncaught TypeError: Assignment to constant variable` | Intentaron cambiar un `const` | Cambiar a `let` si necesita cambiar |
| `NaN` en consola | Operación matemática con un valor que no es número | Usar `Number()` para convertir el string de `prompt()` |
| `undefined` en consola | Variable declarada pero sin valor asignado | Asignar un valor: `let x = 0;` en vez de `let x;` |
| La página muestra alert() infinito | El script tiene un loop no intencional o se ejecuta múltiples veces | Revisar que no haya `<script>` duplicados. Cerrar pestaña si es necesario |

### Troubleshooting Rápido

**Si Live Server no actualiza:**
- Verificar que guardaron el archivo (`Ctrl+S` / `Cmd+S`)
- Hacer hard refresh (`Ctrl+Shift+R` / `Cmd+Shift+R`)

**Si la consola muestra errores de archivos anteriores:**
- Hacer "Clear Console" (ícono 🚫 en DevTools)
- O `Ctrl+L` dentro de la consola

---

## 🎯 Checkpoints de Validación

| Minuto | Checkpoint | Cómo validar |
|--------|------------|--------------|
| 0-15 | Intro + Transición M2→M3 + Algoritmo del café | Quiz pre-lab respondido, grupo activado |
| 15-40 | Setup completado | Consola muestra "¡Hola desde JavaScript!" |
| 40-75 | Variables y tipos de datos | `prompt()` pide datos, `alert()` muestra saludo, `typeof` funciona |
| 75-110 | Operadores y template literals | Operaciones aritméticas correctas, sabe la diferencia entre `'5'+3` y `5+3` |
| 110-130 | Logros adicionales + commit final | Al menos 3 commits en GitHub |
| 130-150 | Cierre + reflexión + preview Clase 10 | Preguntas de cierre respondidas |

---

## 🚨 Plan de Contingencia

### Si la consola no muestra nada:

**Causa más probable:** La etiqueta `<script>` no está bien escrita.

**Solución:**
1. Abrir `index.html` y verificar `<script src="script.js"></script>` antes de `</body>`
2. Verificar que el archivo se llama exactamente `script.js` (case-sensitive)
3. Verificar que ambos archivos están en la MISMA carpeta

### Si muchos estudiantes no entienden tipos de datos:

**Solución:** Usar la analogía de contenedores físicos.
1. Dibujar tres cajas en el pizarrón: una para texto, una para números, una para sí/no
2. Pedir que clasifiquen valores: "¿En qué caja va `'hola'`? ¿Y `42`? ¿Y `true`?"
3. Pregunta trampa: "¿Y `'42'`?" (es string porque tiene comillas)

### Si `prompt()` genera confusión:

Algunos estudiantes pueden sentirse perdidos con las ventanas emergentes. **Alternativa temporal:** trabajar solo con variables hardcodeadas y `console.log()`, y agregar `prompt()` después.

---

## 🔗 Conexión con el Resto del Módulo

### Clase 10: Decisiones y Lógica Condicional
Las variables y tipos de datos de hoy son la base para `if/else`. El descubrimiento de que `prompt()` devuelve string es crucial—necesitarán `Number()` para comparar el número del usuario con el número secreto del juego.

### Clase 11: Funciones
Los scripts lineales de hoy se convertirán en funciones reutilizables. Las variables se convertirán en parámetros y valores de retorno.

### Clase 12: Proyecto Final
Todo culmina en "Adivina el Número": variables para guardar el número secreto y los intentos, condicionales para las pistas, funciones para organizar la lógica.

---

## 💬 Frases para Usar

**Al inicio:**
> "En el Módulo 1 crearon páginas bonitas. En el Módulo 2 aprendieron las herramientas profesionales. En el Módulo 3, le van a dar VIDA a sus páginas. JavaScript es lo que hace que la web sea interactiva."

**Cuando descubren que prompt() devuelve string:**
> "Este 'bug' que acaban de descubrir es tan común que hay memes sobre ello. El 90% de los errores de principiantes en JavaScript vienen de confundir strings con numbers."

**Cuando alguien se frustra con la consola:**
> "La consola es tu mejor amiga. Cada vez que algo no funcione, pon un `console.log()` para ver qué valor tiene tu variable. Así trabajan los profesionales—no adivinan, verifican."

**Al cerrar:**
> "Hoy escribieron su primer programa real. La próxima clase le enseñaremos a su programa a TOMAR DECISIONES. Imaginen: 'Si el número es correcto, celebra. Si no, da una pista.' Eso es programar."
