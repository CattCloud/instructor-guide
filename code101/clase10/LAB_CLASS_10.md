# Lab 10: Decisiones y Lógica Condicional

> 🚀 **Proyecto del Módulo:** Adivina el Número - Juego Interactivo
>
> 📌 **Este lab:** Agregar lógica de decisión al juego con condicionales, números aleatorios y validación.

## 🎯 Objetivos del Lab

1. Generar números aleatorios dentro de un rango usando `Math.random()` y `Math.floor()`
2. Implementar `if/else if/else` para dar pistas al jugador (alto, bajo, correcto)
3. Validar la entrada del usuario con `isNaN()` y operadores lógicos

---

## 🔑 Conceptos Clave

- **Math.random()** - Genera un número aleatorio entre 0 y 1. Combinado con `Math.floor()`, crea números enteros en un rango
- **Operadores de comparación** - Comparan valores: `===` (igual), `!==` (diferente), `>`, `<`, `>=`, `<=`
- **if/else if/else** - Estructura que elige un camino según condiciones evaluadas en orden
- **Operadores lógicos** - Combinan condiciones: `&&` (ambas), `||` (al menos una), `!` (invierte)
- **isNaN()** - Devuelve `true` si un valor NO es un número válido

---

## ⚙️ Tu Proyecto Hasta Ahora

Antes de comenzar, verifica que tienes del Lab 09:

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | Repositorio `guess-number-js` | Existe en tu GitHub |
| ☐ | `index.html` y `script.js` enlazados | La consola muestra mensajes |
| ☐ | Variables con `let` y `const` | Declaradas en `script.js` |
| ☐ | `prompt()` y `alert()` funcionando | Pide datos y muestra mensajes |

---

## Parte 1: El Número Secreto (25 min)

### 1.1 Limpia tu Archivo

Abre `script.js` en tu repositorio `guess-number-js`. Vamos a empezar fresco para la lógica del juego. Reemplaza el contenido con:

```js
// === ADIVINA EL NÚMERO ===
// El programa genera un número secreto entre 1 y 100
// El jugador intenta adivinarlo

console.log('=== Adivina el Número ===');
```

### 1.2 Genera el Número Secreto

Agrega después:

```js
// --- Generar número secreto ---
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Temporal: ver el número para probar (lo quitaremos después)
console.log('(DEBUG) Número secreto:', numeroSecreto);
```

Guarda y recarga la página varias veces. El número debe cambiar cada vez.

> 💡 **¿Cómo funciona?** `Math.random()` genera un decimal entre 0 y 0.999... Multiplicar por 100 da un rango de 0 a 99.999... `Math.floor()` lo redondea hacia abajo (0-99). Sumar 1 da el rango final: 1-100.

### 1.3 Pide el Primer Intento

```js
// --- Pedir intento al jugador ---
let intento = prompt('Adivina el número (1-100):');
intento = Number(intento);

console.log('Intento del jugador:', intento);
console.log('Tipo:', typeof intento);
```

> 💡 **Recuerda:** `prompt()` devuelve un `string`. Por eso usamos `Number()` para convertirlo a número antes de comparar.

### 1.4 Primera Comparación

Agrega tu primer condicional:

```js
// --- Comparar intento con número secreto ---
if (intento === numeroSecreto) {
  alert('🎉 ¡Correcto! El número era ' + numeroSecreto);
} else {
  alert('❌ Incorrecto. El número era ' + numeroSecreto);
}
```

Prueba tu código: recarga la página, mira el número secreto en la consola (DEBUG), e ingresa ese número. Debería decir "¡Correcto!".

### 1.5 Commit

```bash
git add script.js
git commit -m "feat: número aleatorio y primera comparación if/else"
git push
```

✅ **Checkpoint:** El programa genera un número aleatorio entre 1 y 100 (verificable en consola), pide un intento con `prompt()`, y dice "Correcto" o "Incorrecto" con `if/else`.

---

## Parte 2: Pistas Alto/Bajo (35 min)

### 2.1 Mejora las Pistas

Reemplaza el bloque `if/else` anterior con `if/else if/else`:

```js
// --- Pistas alto/bajo/correcto ---
if (intento === numeroSecreto) {
  alert('🎉 ¡Correcto! El número era ' + numeroSecreto);
  console.log('Resultado: ¡GANÓ!');
} else if (intento > numeroSecreto) {
  alert('📈 Muy alto. Intenta un número más bajo.');
  console.log('Resultado: muy alto');
} else {
  alert('📉 Muy bajo. Intenta un número más alto.');
  console.log('Resultado: muy bajo');
}
```

Prueba con diferentes números:
- El número secreto exacto → "¡Correcto!"
- Un número mayor → "Muy alto"
- Un número menor → "Muy bajo"

### 2.2 Agrega un Segundo Intento

Después del primer `if/else if/else`, agrega otro intento:

```js
// --- Segundo intento ---
if (intento !== numeroSecreto) {
  let intento2 = prompt('Intenta de nuevo (1-100):');
  intento2 = Number(intento2);

  if (intento2 === numeroSecreto) {
    alert('🎉 ¡Correcto en el segundo intento!');
  } else if (intento2 > numeroSecreto) {
    alert('📈 Muy alto. El número era ' + numeroSecreto);
  } else {
    alert('📉 Muy bajo. El número era ' + numeroSecreto);
  }
}
```

> 💡 **Nota:** Estamos repitiendo código. En la Clase 11 aprenderás a usar **funciones** para evitar esta repetición. Por ahora, la repetición es intencional para practicar `if/else`.

### 2.3 Operadores de Comparación

Experimenta con los operadores en la consola (F12):

```js
// Prueba estos directamente en la consola:
5 === 5      // true  (estrictamente igual)
5 === '5'    // false (diferente tipo)
5 == '5'     // true  (convierte tipo) ← ¡EVITAR!
5 !== 3      // true  (diferente)
10 > 5       // true
10 >= 10     // true
3 < 1        // false
```

> ⚠️ **Regla importante:** Siempre usa `===` (igualdad estricta), nunca `==` (igualdad flexible). `===` compara valor Y tipo. `==` intenta convertir tipos y puede dar resultados inesperados.

### 2.4 Operadores Lógicos

Prueba combinar condiciones en la consola:

```js
// AND (&&): ambas deben ser true
let edad = 25;
let tieneLicencia = true;
console.log(edad >= 18 && tieneLicencia);  // true

// OR (||): al menos una debe ser true
let esFeriado = false;
let esDomingo = true;
console.log(esFeriado || esDomingo);  // true (domingo es true)

// NOT (!): invierte el valor
let lloviendo = false;
console.log(!lloviendo);  // true (NO está lloviendo)
```

### 2.5 Commit

```bash
git add script.js
git commit -m "feat: pistas alto/bajo con if/else if/else y segundo intento"
git push
```

✅ **Checkpoint:** El juego da pistas "Muy alto" / "Muy bajo" / "¡Correcto!" con `if/else if/else`. Permite dos intentos. Sabes la diferencia entre `===` y `==`.

---

## Parte 3: Validación y Ternario (30 min)

### 3.1 Valida la Entrada del Usuario

¿Qué pasa si el jugador escribe "hola" en lugar de un número? Agrega validación **antes** de la comparación. Modifica tu código para que quede así:

```js
// === ADIVINA EL NÚMERO ===
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
console.log('(DEBUG) Número secreto:', numeroSecreto);

// --- Pedir intento ---
let intento = prompt('Adivina el número (1-100):');
intento = Number(intento);

// --- Validar entrada ---
if (isNaN(intento)) {
  alert('⚠️ Eso no es un número. Por favor ingresa un número del 1 al 100.');
} else if (intento < 1 || intento > 100) {
  alert('⚠️ El número debe estar entre 1 y 100.');
} else if (intento === numeroSecreto) {
  alert('🎉 ¡Correcto! El número era ' + numeroSecreto);
} else if (intento > numeroSecreto) {
  alert('📈 Muy alto. Intenta un número más bajo.');
} else {
  alert('📉 Muy bajo. Intenta un número más alto.');
}
```

Prueba con diferentes entradas:
- Un texto ("hola") → Mensaje de error
- Un número fuera de rango (0, 150) → Mensaje de rango
- Un número válido → Pista normal

> 💡 **¿Cómo funciona `isNaN()`?** `isNaN` significa "is Not a Number". `Number('hola')` devuelve `NaN`, y `isNaN(NaN)` devuelve `true`. Así sabemos que el usuario no escribió un número válido.

### 3.2 El Operador Ternario

El ternario es una forma corta de escribir un `if/else` simple:

```js
// if/else normal
let mensaje;
if (intento === numeroSecreto) {
  mensaje = '¡Ganaste!';
} else {
  mensaje = 'Sigue intentando';
}

// Lo mismo con ternario
let mensaje2 = intento === numeroSecreto ? '¡Ganaste!' : 'Sigue intentando';

console.log(mensaje2);
```

Agrega un ternario útil al juego:

```js
// --- Pista de cercanía ---
let diferencia = Math.abs(intento - numeroSecreto);
let cercanía = diferencia <= 10 ? '🔥 ¡Estás cerca!' : '❄️ Estás lejos';
console.log(cercanía);
```

> 💡 **`Math.abs()`** devuelve el valor absoluto (siempre positivo). `Math.abs(-7)` es `7`. Útil para medir "distancia" sin importar la dirección.

### 3.3 Segundo Intento con Validación

Agrega un segundo intento que también valida:

```js
// --- Segundo intento (si no acertó) ---
if (!isNaN(intento) && intento >= 1 && intento <= 100 && intento !== numeroSecreto) {
  let intento2 = prompt('Intenta de nuevo (1-100):');
  intento2 = Number(intento2);

  if (isNaN(intento2) || intento2 < 1 || intento2 > 100) {
    alert('⚠️ Entrada inválida. El número era ' + numeroSecreto);
  } else if (intento2 === numeroSecreto) {
    alert('🎉 ¡Correcto en el segundo intento! El número era ' + numeroSecreto);
  } else {
    let pista = intento2 > numeroSecreto ? 'alto' : 'bajo';
    alert(`Muy ${pista}. El número era ${numeroSecreto}`);
  }
}
```

> 💡 **Observa:** `intento2 > numeroSecreto ? 'alto' : 'bajo'` usa el ternario para elegir la palabra de la pista en una sola línea.

### 3.4 Commit Final

```bash
git add script.js
git commit -m "feat: validación con isNaN, rango 1-100 y operador ternario"
git push
```

✅ **Checkpoint:** El juego valida que la entrada sea un número entre 1 y 100, rechaza texto y números fuera de rango, usa operadores lógicos (`&&`, `||`) y el operador ternario.

---

## Logros Adicionales (Opcional)

### 🟢 Pista de Temperatura

Agrega más niveles de cercanía: "hirviendo" (diferencia ≤ 5), "caliente" (≤ 15), "tibio" (≤ 30), "frío" (> 30). Usa `if/else if/else` para determinarlo.

### 🟡 Tercer Intento

Agrega un tercer intento con las mismas validaciones. Nota cómo el código se repite cada vez más. En la Clase 11 resolveremos esto con funciones.

### 🔴 Números Enteros

Investiga `Number.isInteger()`. Agrega validación para que solo se acepten números enteros (rechazar 3.5 o 99.9).

---

## 📝 Entrega

### Checklist

- [ ] `Math.random()` genera número secreto entre 1 y 100
- [ ] `if/else if/else` da pistas "muy alto" / "muy bajo" / "correcto"
- [ ] Validación con `isNaN()` rechaza texto no numérico
- [ ] Validación de rango rechaza números fuera de 1-100
- [ ] Operador ternario usado al menos una vez
- [ ] Al menos 3 commits descriptivos

### Entregable

📸 **Screenshot** de tu consola del navegador mostrando:
- El número secreto (DEBUG)
- Un intento con pista "Muy alto" o "Muy bajo"
- Un intento con validación (texto o fuera de rango)

> ⚠️ Tu consola debe mostrar los mensajes de log que confirman que la lógica funciona.
