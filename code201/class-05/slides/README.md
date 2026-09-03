# Clase 05 — Programación Imperativa + Arrays
### Code 201 · Módulo 2

---

## 🎯 Objetivo de la Clase

- Comprender el **paradigma imperativo** (cómo hacer las cosas paso a paso).
- Manejar **arrays** por primera vez en JavaScript.
- Construir un **Gestor de Presupuesto Personal** con funciones imperativas.

---

## 📖 Repaso de Code 101

- **Variables** (`let`, `const`) y tipos primitivos.
- **Condicionales** `if`/`else` y ternarios.
- **Funciones** con `function`, parámetros y `return`.
- **`console.log`** para depurar.

> Hoy agregamos **arrays + bucles + APIs del navegador**.

---

## 🧱 ¿Qué es un Array?

Una **lista ordenada** de valores. Se declara con corchetes `[]`.

```javascript
let frutas = ['manzana', 'pera', 'uva'];

console.log(frutas.length);   // 3
console.log(frutas[0]);        // 'manzana'
frutas.push('mango');          // agrega al final
console.log(frutas.length);    // 4
```

* `arr[i]` accede por **índice** (arranca en `0`).
* `arr.length` devuelve cuántos elementos hay.
* `arr.push(x)` agrega al final.

---

## 🧠 El índice arranca en 0

```
   ┌───────┬──────┬─────┬───────┐
   │manzana│ pera │ uva │ mango │
   └───────┴──────┴─────┴───────┘
       0      1     2      3
```

* `frutas[0]` → `'manzana'`
* `frutas[frutas.length - 1]` → `'mango'`
* Confundirse con esto es el **bug #1** al empezar.

---

## 🧬 Modelo del Proyecto: Arrays Paralelos

Para el Gestor de Presupuesto usamos **2 arrays paralelos**:

```javascript
let nombres = [];    // qué fue ("Salario", "Cena")
let valores = [];    // cuánto fue, con signo
```

**Convención de signos:**
- Positivo → ingreso (`3000`)
- Negativo → gasto (`-45.50`)

> Calcular el saldo = sumar todo `valores`.

---

## ⚠️ "Paralelos" significa SINCRONIZADOS

`nombres[i]` y `valores[i]` describen el **mismo** movimiento.

```javascript
nombres.push('Salario');   nombres = ['Salario']
valores.push(3000);         valores = [3000]

nombres.push('Cena');      nombres = ['Salario', 'Cena']
valores.push(-45.50);       valores = [3000, -45.50]
```

> Si olvidas un `push`, **todo se descalibra**. Lo veremos resuelto en C07.

---

## 🗣️ APIs del Navegador

```javascript
const nombre = prompt('Nombre:');           // pide input
const monto = parseFloat(prompt('Monto:')); // string → número
if (!nombre || isNaN(monto)) {
  alert('Datos inválidos.');                // muestra aviso
}
```

* **`prompt(mensaje)`** → siempre devuelve string.
* **`parseFloat(texto)`** → convierte a número decimal. Devuelve `NaN` si no se puede.
* **`isNaN(valor)`** → `true` si no es número válido.
* **`alert(mensaje)`** → cuadro de aviso.

---

## 🔁 Bucle `while`

Repite **mientras** la condición sea verdadera.

```javascript
let continuar = 'si';
while (continuar === 'si') {
  registrarMovimiento();
  continuar = prompt('¿Otro? (si/no):');
}
```

> Útil cuando NO sabes cuántas iteraciones harás (depende del usuario).

---

## 🔢 Bucle `for` sobre un Array

Recorre cada elemento del array.

```javascript
let saldo = 0;
for (let i = 0; i < valores.length; i++) {
  saldo = saldo + valores[i];
}
console.log('Saldo: $' + saldo.toFixed(2));
```

* `let i = 0` → contador desde 0.
* `i < valores.length` → mientras haya elementos.
* `i++` → avanza a la siguiente posición.

> Ingresos suman (+), gastos restan (-). El signo hace el trabajo.

---

## 🧪 Validación con Falsy

```javascript
if (!nombre || isNaN(monto) || monto <= 0) {
  alert('Datos inválidos.');
}
```

**Valores falsy** (se tratan como `false`):
- `""` (string vacío)
- `0`
- `null`, `undefined`
- `NaN`

> Por eso `!nombre` detecta cuando el usuario dejó el campo vacío.

---

## ⚙️ Estructura del Lab

| Parte | Tiempo | Contenido |
|---|---|---|
| **P1** | ~30 min | Arrays + `prompt` + validación → registrar 1 movimiento |
| **P2** | ~35 min | `while` para repetir + `for` para calcular saldo |
| **P3** | ~40 min | 3 funciones imperativas + reporte |

---

## 🛠️ Las 3 Funciones del Proyecto

```javascript
function registrarMovimiento() {
  // prompt → if → push paralelo
}

function calcularSaldo() {
  // for sobre valores → suma con signo
  return saldo;
}

function mostrarResumen() {
  // console.log de cantidad + saldo total
}
```

> Las 3 **modifican o leen variables globales** (`nombres`, `valores`). Eso las hace **imperativas**.

---

## 📊 Trade-offs del Paradigma Imperativo

### ✅ Ventajas
- Fácil de entender y enseñar.
- Ideal para scripts pequeños.

### ⚠️ Limitaciones
- Estado global compartido → bugs sutiles.
- **Arrays paralelos = fragilidad** (olvidar un `push` rompe todo).
- Difícil de testear (funciones acopladas al estado).

---

## 🔮 Lo que viene

**C06 — Programación Funcional:**
- El `for` que escribiste hoy → DESAPARECE.
- `.map()`, `.filter()`, `.reduce()` lo hacen en una línea.
- Conocerás **arrow functions**.

**C07 — POO:**
- Los 2 arrays paralelos → **UN solo array de objetos**.
- `{ nombre, tipo, valor }` resuelve el dolor de la sincronización.

---

## 🤔 Discusión Final

- ¿Qué pasa si olvido un `push` en uno de los arrays paralelos?
- ¿Es fácil detectar ese error?
- ¿Qué te imaginas que haría una "función pura" en este proyecto?

> **Reflexión:** la programación imperativa nos enseña a pensar paso a paso. Pero el código que escribes hoy **vas a refactorizarlo** en C06 y C07 — el dolor de hoy es la motivación de mañana.

---

## ¡Gracias! 🙌
### Code 201 · Enter Tech School
