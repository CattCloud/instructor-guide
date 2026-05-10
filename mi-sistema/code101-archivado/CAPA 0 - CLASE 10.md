# CAPA 0 — CLASE 10: Decisiones y Lógica Condicional

> Documento de uso exclusivo del instructor. Contiene los conceptos puros, analogías (solo donde son necesarias) y estrategia visual de cada bloque. Leer y practicar ANTES de planificar la clase.

---

## CONCEPTOS DEL BLOQUE 1: Flujo de Control y Condicionales

---

### CONCEPTO: Flujo de Control
El flujo de control es el orden en que el computador ejecuta las instrucciones de un programa. Por defecto, ese orden es **secuencial**: línea 1, línea 2, línea 3... de arriba hacia abajo, sin saltarse nada. El programa no toma decisiones — simplemente sigue la fila.

El problema de ese modelo es que la vida real no funciona así. Un semáforo no siempre hace lo mismo: evalúa el color de la luz y elige la acción. Un cajero automático no siempre entrega dinero: primero verifica el saldo. Para representar esa realidad en código, necesitamos poder **cambiar el flujo** — hacer que el programa elija qué camino seguir.

**Dependencia técnica:** El flujo de control existe en todos los lenguajes de programación. En JavaScript, las estructuras que permiten cambiarlo son: condicionales (`if/else`), bucles (`for`, `while`) y llamadas a funciones. En esta clase nos enfocamos en los condicionales.

### ANALOGÍA: El semáforo
Un semáforo es el ejemplo más limpio de flujo de control: evalúa el color actual y ejecuta una acción diferente según ese valor. Verde → avanzar. Rojo → detenerse. Amarillo → precaución. Es una máquina que toma decisiones simples basadas en condiciones. Un programa `if/else` funciona exactamente igual.

### ESTRATEGIA VISUAL: Diagrama en Excalidraw (en vivo)
Dibujar dos versiones lado a lado: izquierda — un flujo lineal de cajas numeradas (sin decisión). Derecha — el mismo flujo pero con un rombo (diamante) en el medio: una flecha "SÍ" baja a un bloque, una flecha "NO" la rodea. Mostrar cómo ambos caminos se vuelven a unir al final. Construirlo en vivo mientras se habla.

---

### CONCEPTO: La Sentencia `if`
`if` es la instrucción que permite cambiar el flujo de control: le dice al programa "ejecuta este bloque de código **solo si** esta condición es verdadera". Si la condición no se cumple, el bloque se salta por completo y el programa continúa con lo que sigue.

**Dependencia técnica:**
```js
if (condición) {
  // Este bloque se ejecuta SOLO si condición es true
}
```
- La `condición` entre paréntesis es cualquier expresión que el motor convierte a `true` o `false`.
- Las llaves `{ }` definen dónde empieza y termina el bloque. Sin llaves, JavaScript asume que solo la siguiente línea pertenece al `if` — fuente frecuente de bugs.
- El `if` puede existir solo, sin `else`. El `else` es opcional.

### ESTRATEGIA VISUAL: Agregar al diagrama de Excalidraw
Etiqueta el rombo con una condición concreta del juego: `intento === numeroSecreto`. Señala la flecha "SÍ" (true) y la flecha "NO" (false). Mostrar que solo uno de los dos caminos se ejecuta por vez.

---

### CONCEPTO: `if / else` y `if / else if / else`
**`else`** define el bloque que se ejecuta cuando la condición del `if` es `false`. Cubre todos los casos que el `if` no atrapó.

**`else if`** permite evaluar múltiples condiciones en secuencia. El programa las revisa de arriba a abajo y ejecuta **el primer bloque cuya condición sea verdadera**. Una vez que encuentra uno, ignora el resto, aunque otras también sean verdaderas.

**Dependencia técnica:**
```js
if (condición1) {
  // Si condición1 es true
} else if (condición2) {
  // Si condición1 es false Y condición2 es true
} else {
  // Si ninguna condición anterior fue true
}
```

**Regla crítica — el orden importa:** Las condiciones se evalúan en secuencia. La primera que resulta `true` gana. Las demás no se evalúan. Si el número es correcto, no tiene sentido preguntarle si es alto o bajo — la cadena se detiene ahí.

En el juego `guess-number-js` la cadena es:
1. ¿Es correcto? → Ganaste
2. ¿Es mayor que el secreto? → Muy alto
3. (implícito) Es menor → Muy bajo

### ESTRATEGIA VISUAL: Extensión del diagrama
Agregar un segundo rombo saliendo de la flecha "NO" del primero. Mostrar que el `else if` es simplemente otro punto de decisión en cascada. El `else` final es la caja que recibe todo lo que no entró por ninguna rama anterior.

---

## CONCEPTOS DEL BLOQUE 2: Operadores de Comparación y Lógicos

---

### CONCEPTO: Operadores de Comparación
Para que un `if` pueda tomar una decisión, necesita una expresión que devuelva `true` o `false`. Los operadores de comparación hacen exactamente eso: comparan dos valores y producen un booleano como resultado.

**Dependencia técnica:**
| Operador | Significado | Ejemplo | Resultado |
|---|---|---|---|
| `===` | Igual estricto (valor Y tipo) | `5 === 5` | `true` |
| `!==` | Diferente estricto | `5 !== 3` | `true` |
| `>` | Mayor que | `10 > 5` | `true` |
| `<` | Menor que | `3 < 1` | `false` |
| `>=` | Mayor o igual | `10 >= 10` | `true` |
| `<=` | Menor o igual | `7 <= 6` | `false` |

**`===` (igualdad estricta):** Compara valor Y tipo al mismo tiempo. Es el operador correcto para todas las comparaciones de igualdad. El resultado es `false` si los tipos son distintos aunque los valores se vean iguales: `5 === '5'` → `false`, porque uno es `number` y el otro es `string`.

**Nota:** Existe un operador `==` (doble igual) que intenta convertir tipos antes de comparar y produce resultados inesperados. No lo usaremos ni lo presentaremos en clase. La regla es simple: siempre `===`.

### ESTRATEGIA VISUAL: Demo en consola de Chrome
No se necesita imagen. Ejecutar en vivo en la consola, línea por línea, pidiendo a los alumnos que predigan el resultado antes de presionar Enter:
```js
5 === 5        // → true
5 === '5'      // → false  (mismo valor, tipo diferente)
10 > 5         // → true
3 < 1          // → false
10 >= 10       // → true
```

---

### CONCEPTO: Operadores Lógicos (`&&`, `||`, `!`)
Los operadores lógicos permiten combinar múltiples condiciones en una sola expresión. Sirven para casos donde la decisión depende de más de un factor al mismo tiempo.

**Dependencia técnica:**

**`&&` (AND — "y"):** La expresión completa es `true` **solo si ambas condiciones son `true`**. Si la primera es `false`, JavaScript no evalúa la segunda (cortocircuito — ya sabe que el resultado será `false`).
```js
edad >= 18 && tieneLicencia   // true solo si las dos son true
```

**`||` (OR — "o"):** La expresión completa es `true` si **al menos una condición es `true`**. Si la primera es `true`, JavaScript no evalúa la segunda.
```js
esFeriado || esDomingo        // true si cualquiera de las dos es true
```

**`!` (NOT — "no"):** Invierte el valor booleano. `!true` → `false`. `!false` → `true`. Muy usado para verificar el caso opuesto de una condición.
```js
!lloviendo                    // true si NO está lloviendo
```

**Uso en el juego — validación combinada:**
```js
if (isNaN(intento) || intento < 1 || intento > 100) {
  // Entrada inválida: no es número, o está fuera del rango permitido
}
```
Aquí `||` encadena tres condiciones: si cualquiera es verdadera, la entrada es inválida.

### ESTRATEGIA VISUAL: Tabla de verdad en Canva
Imagen con tres tablas simplificadas (una por operador), solo las combinaciones relevantes. Valores `true` en verde, `false` en rojo. Sin texto pesado — solo los símbolos y los resultados.

---

## CONCEPTOS DEL BLOQUE 3: El Objeto `Math` y Números Aleatorios

---

### CONCEPTO: ¿Qué es un Objeto?
En JavaScript, un **objeto** es una colección de funcionalidad relacionada agrupada bajo un mismo nombre. En lugar de tener decenas de funciones matemáticas sueltas (`random`, `floor`, `round`, `abs`...), JavaScript las agrupa todas dentro de un objeto llamado `Math`. Así se accede a ellas con el punto: `Math.random()`, `Math.floor()`.

Un objeto es simplemente una forma de organizar y agrupar cosas que pertenecen juntas, de la misma manera que una caja de herramientas agrupa destornilladores, martillos y llaves bajo un mismo contenedor porque todos son herramientas.

**Dependencia técnica:** En clases futuras verán objetos con datos y funciones propias en detalle. Por ahora, lo importante es que `Math` es un objeto nativo — ya existe en el motor del navegador, no hay que crearlo ni importarlo. Se usa directamente.

---

### CONCEPTO: `Math.random()` y `Math.floor()`
**`Math.random()`** genera un número decimal pseudoaleatorio entre `0` (inclusive) y `1` (exclusive). Cada vez que se llama, produce un número diferente. El resultado es siempre un decimal: `0.4823...`, `0.9102...`, `0.0034...`.

**`Math.floor(número)`** redondea cualquier número decimal hacia abajo hasta el entero más cercano. `Math.floor(4.9)` → `4`. `Math.floor(4.01)` → `4`. Nunca sube — siempre baja o se queda igual.

**Fórmula para generar entero entre 1 y 100 — paso a paso:**
```
Math.random()                       → 0.734...   (decimal entre 0 y 0.999...)
Math.random() * 100                 → 73.4...    (decimal entre 0 y 99.999...)
Math.floor(Math.random() * 100)     → 73         (entero entre 0 y 99)
Math.floor(Math.random() * 100) + 1 → 74         (entero entre 1 y 100) ✅
```

**Dependencia técnica — pseudoaleatorio:** Las computadoras son máquinas deterministas: siguen instrucciones exactas y no pueden generar aleatoriedad real. `Math.random()` usa un algoritmo generador pseudoaleatorio — produce secuencias que parecen aleatorias pero son matemáticamente predecibles. Para juegos y aplicaciones comunes es perfectamente suficiente.

### ESTRATEGIA VISUAL: Tubería paso a paso en Excalidraw/Consola
Mostrar la "tubería" de transformaciones en Excalidraw (4 cajas en secuencia con los valores intermedios), y ejecutar en paralelo cada paso en la Consola de Chrome para que los alumnos vean los números reales cambiando en cada recarga.

---

## CONCEPTOS DEL BLOQUE 4: Validación con `isNaN()`

---

### CONCEPTO: `isNaN()` — Verificar si un Valor No es Número
`isNaN()` es una función global de JavaScript que devuelve `true` si el valor recibido **no es un número válido** (Not a Number). Es el primer filtro de validación: antes de comparar un valor del usuario con el número secreto, verificamos que sea realmente un número.

**Dependencia técnica:**
```js
isNaN(NaN)       // true  (NaN definitivamente no es número)
isNaN('hola')    // true  (no se puede convertir a número)
isNaN(42)        // false (sí es número)
isNaN('42')      // false (convierte '42' → 42 → false: cuenta como número)
```

**Gotcha — el string vacío:** `isNaN('')` devuelve `false` porque JavaScript convierte el string vacío a `0`, y `0` sí es número. Por eso la validación completa combina `isNaN()` con verificación de rango:

```js
if (isNaN(intento) || intento < 1 || intento > 100) {
  alert('Por favor ingresa un número entre 1 y 100.');
}
```

**Por qué validar primero:** Si se pasa un valor `NaN` a una comparación `>` o `<`, el resultado siempre es `false`. Eso puede hacer que el código llegue al bloque `else` ("muy bajo") con un dato completamente inválido. Validar con `isNaN()` antes de entrar a la lógica del juego corta ese problema desde el inicio.

### ESTRATEGIA VISUAL: Demo en vivo — Consola de Chrome
Ejecutar los casos en la consola, incluyendo el gotcha del string vacío. El contraste entre lo que se espera (`isNaN('')` → `true`) y lo que devuelve (`false`) es el punto de aprendizaje que se graba solo con verlo en pantalla.

---

## CONCEPTOS DEL BLOQUE 5: El Operador Ternario

---

### CONCEPTO: Operador Ternario (`? :`)
El operador ternario es una forma compacta de escribir un `if/else` simple cuando el único objetivo es **asignar un valor según una condición**. A diferencia de `if/else` (que ejecuta bloques de código), el ternario produce un valor que puede guardarse directamente en una variable.

**Dependencia técnica:**
```js
// Sintaxis
condición ? valorSiTrue : valorSiFalse

// Ejemplo del juego: elegir la palabra de la pista
let pista = intento > numeroSecreto ? 'alto' : 'bajo';
alert(`Tu número es muy ${pista}.`);
```

Lo anterior equivale a:
```js
let pista;
if (intento > numeroSecreto) {
  pista = 'alto';
} else {
  pista = 'bajo';
}
```

**Cuándo usarlo:**
- ✅ Para asignar una de dos opciones simples según una condición.
- ✅ Dentro de template literals para insertar palabras o valores condicionales.
- ❌ Si hay más de dos opciones → usar `if/else if/else`.
- ❌ Si la lógica dentro de cada rama es compleja → usar `if/else` para que sea legible.

### ESTRATEGIA VISUAL: Comparativa lado a lado en VS Code
Mostrar en VS Code las dos versiones del mismo código (el `if/else` largo y el ternario en una línea) y señalar cuándo uno es más claro que el otro.

---

## RESUMEN DE DEPENDENCIAS TÉCNICAS

| Concepto | Depende de |
|---|---|
| Que `if` ejecute su bloque | Que la condición entre `()` evalúe a `true` |
| Que `else if` se evalúe | Que TODAS las condiciones anteriores hayan sido `false` |
| Que `===` devuelva `true` | Que valor Y tipo sean idénticos en ambos operandos |
| Que `&&` sea `true` | Que ambas condiciones sean `true` (si la primera es `false`, la segunda no se evalúa) |
| Que `Math.random() * 100 + 1` dé rango 1-100 | El `Math.floor()` antes de `+1` (sin él el `+1` desplazaría el decimal) |
| Que `isNaN('')` devuelva `false` | La conversión implícita: `''` → `0`, que sí es número |
| El ternario | Que la condición sea estrictamente binaria: dos posibles valores, sin ramas intermedias |

---

## PREGUNTAS ANTI-IMPOSTOR (Para el instructor antes de la clase)

1. Si tengo `if (a > 10) { } else if (a > 5) { } else { }` y `a = 7` — ¿qué bloque se ejecuta? ¿Cuál se salta y por qué?
2. ¿Qué devuelve `5 === '5'`? ¿Por qué es diferente de `5 === 5`?
3. ¿Cuál es el resultado de `Math.floor(Math.random() * 100) + 1`? ¿Puede dar 0? ¿Puede dar 100? ¿Puede dar 101?
4. El usuario escribe texto vacío en el `prompt()` y presiona OK. ¿Qué devuelve `isNaN(Number(''))` y por qué es un problema en el juego?
5. ¿Cuándo elegirías el ternario sobre un `if/else`? Da un ejemplo de cada caso.
