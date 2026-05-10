# PRÁCTICA DE CLASE 09 (EXAMEN ANTI-IMPOSTOR)

> Este archivo es tu simulador previo a dictar la Clase 09. Contiene la resolución de las preguntas anti-impostor de la CAPA 0 y 3 escenarios de debugging tipo Vibe Coding orientados a esta clase. Resuélvelos en tu cabeza o ejecútalos antes de clase.

---

## SECCIÓN 1: RESOLUCIÓN DE PREGUNTAS ANTI-IMPOSTOR

### 1. ¿Cuál es la diferencia entre `let`, `const` y `var`, y cuándo usarías cada uno hoy en 2025?
**Respuesta Directa:**
- `var`: Alcance de función o global, permite redeclaración, sufre de hoisting problemático. **No se usa.**
- `let`: Alcance de bloque (`{}`), permite reasignación. **Se usa para valores que mutan (ej. contadores, resultados de cálculos iterativos).**
- `const`: Alcance de bloque, no permite reasignación (pero sí permite modificar los elementos internos si es un objeto/array). **Se usa SIEMPRE por defecto a menos que sepas que el valor cambiará.**

### 2. ¿Por qué `'5' + 3` da `'53'` pero `'5' - 3` da `2`? ¿Qué mecanismo interno de JS lo explica?
**Respuesta Directa:**
Por la **coerción implícita**. El operador `+` está sobrecargado: sirve para sumar números y concatenar strings. Si detecta al menos un string, prioriza la concatenación y convierte el otro a string. En cambio, el operador `-` (y `*`, `/`) solo sirve para matemáticas; obliga al motor a convertir el string a número primero.

### 3. Si hago `prompt()` y el usuario escribe `"5"`, ¿qué devuelve `Number("5")`? ¿Y `Number("5px")`? ¿Y `Number("")`?
**Respuesta Directa:**
- `Number("5")` → `5` (número).
- `Number("5px")` → `NaN` (Not a Number, ya que no puede parsear la cadena entera). *Nota: `parseInt("5px")` sí devolvería `5`.*
- `Number("")` → `0` (Un string vacío es coerciado a 0 por el comportamiento de `Number`, esto es un "gotcha" famoso en JS).

### 4. ¿Por qué el tag `<script>` va antes de `</body>` y no en el `<head>`?
**Respuesta Directa:**
El navegador lee el HTML de arriba hacia abajo de forma síncrona. Si el `<script>` está en el `<head>` y no tiene el atributo `defer`, el JS se ejecutará inmediatamente e intentará buscar elementos del DOM que aún no han sido creados/pintados, causando errores de `null`. Ponerlo antes de `</body>` asegura que todo el HTML ya haya cargado.

### 5. ¿Qué diferencia hay entre `console.log(42)` y `console.log('42')`? ¿Se ve diferente en la consola?
**Respuesta Directa:**
Sí se ve diferente. En la consola de Chrome, los tipos de dato `number` y `boolean` se imprimen en color azul/púrpura, mientras que los `strings` se imprimen en color gris/negro (y ocasionalmente con comillas). Esta es la forma visual más rápida de hacer debugging sobre el tipo de dato subyacente.

---

## SECCIÓN 2: ESCENARIOS DE DEBUGGING EN VIVO (VIBE CODING)

> Si un alumno comete estos errores, así debes abordarlo.

### Bug 1: La Suma que Pega
**Código del alumno:**
```javascript
let numeroSecreto = 10;
let intento = prompt("Adivina el número"); // Usuario escribe 10
let suma = intento + 5;
console.log(suma); // Imprime "105"
```
**Tu diagnóstico (Instructor):** El alumno olvidó que `prompt` retorna SIEMPRE un string. El operador `+` concatenó `"10"` con `5`.
**La pista pedagógica:** "Inspecciona la variable 'intento' con `typeof intento` y veamos qué color tiene en la consola. ¿Qué hace falta para que JS sepa que es un número real?" (Respuesta: Convertir con `Number()`).

### Bug 2: El Scope Fugaz
**Código del alumno:**
```javascript
let puntos = 0;
if (true) {
    let puntos = 5;
    console.log("Ganaste", puntos); // Imprime 5
}
console.log("Puntaje final:", puntos); // Imprime 0
```
**Tu diagnóstico (Instructor):** El alumno usó `let` de nuevo dentro del bloque `if`, declarando una *nueva* variable local que sombrea a la global, en lugar de reasignar la original.
**La pista pedagógica:** "La palabra `let` es como presentar a alguien nuevo. Si dices 'este es mi amigo puntos' dentro de la casa (bloque if), la variable se queda en la casa. Para actualizar el puntaje global, solo llámalo por su nombre sin presentarlo de nuevo: elimina el `let` de adentro."

### Bug 3: Igualdad Misteriosa
**Código del alumno:**
```javascript
let edad = prompt("Ingresa edad");
if (edad === 18) {
    alert("Ya tienes 18!");
}
```
**Tu diagnóstico (Instructor):** El alumno no convirtió el valor del prompt. `edad` es el string `"18"`. Al usar igualdad estricta `===`, JS nota que `"18"` (string) no es igual a `18` (number) y el código `if` nunca se ejecuta. Si usara `==`, funcionaría, PERO es mala práctica.
**La pista pedagógica:** "¿Recuerdas la diferencia entre los operadores == y ===? El triple igual no se deja engañar, exige que el tipo sea el mismo. Si pusiste Number() al prompt, solucionas el problema de base y respetas el ===."
