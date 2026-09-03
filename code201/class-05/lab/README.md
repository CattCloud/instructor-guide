# Laboratorio 05: Programación Imperativa + Arrays

¡Bienvenido al primer laboratorio del proyecto **Gestor de Presupuesto Personal**! Vas a aplicar **programación imperativa** — variables, condicionales, bucles y funciones — para registrar movimientos y calcular un saldo. Por primera vez vas a manejar **arrays** en JavaScript: la estructura más usada del lenguaje.

> ⏱️ **Checkpoints**: 3 momentos de validación grupal (~30 min, ~65 min, ~105 min).

## 🎯 Objetivos de Aprendizaje

1. **Declarar y manipular arrays** con `[]`, `.push()`, `.length` e indexación `arr[i]`.
2. **Aplicar condicionales** (`if/else`) para validar entradas del usuario.
3. **Aplicar bucles** — `while` para repetir captura y `for` para recorrer un array.
4. **Organizar el código en funciones imperativas** que modifican estado global.

## 🔑 Conceptos Clave

| Concepto | Definición |
|---|---|
| **Array** | Lista ordenada de valores. Se declara con `[]` y se accede por **índice** que arranca en `0`. |
| **`.push()` / `.length`** | Método para **agregar** al final del array · propiedad que dice **cuántos elementos** tiene. |
| **Indexación** `arr[i]` | Lee el valor en la posición `i`. `arr[0]` es el primero, `arr[arr.length - 1]` el último. |
| **`for` para recorrer arrays** | Bucle clásico `for (let i = 0; i < arr.length; i++)` para procesar cada elemento. |
| **`while`** | Bucle que repite mientras una condición sea verdadera. Útil cuando no sabes cuántas iteraciones harás. |
| **Función imperativa** | Función que modifica estado externo (variables globales) o usa efectos como `prompt`/`console.log`. |
| **Falsy** | Valores que en un `if` se tratan como `false`: `""`, `0`, `null`, `undefined`, `NaN`. Por eso `if (!nombre)` detecta string vacío. |

## ⚙️ Setup Inicial

1. Crea un repositorio nuevo: `personal-budget`. Clónalo en local.
2. Estructura mínima:

```
personal-budget/
├── index.html
└── app.js
```

3. En `index.html` enlaza `app.js` antes del cierre de `</body>`:

```html
<body>
  <h1>Gestor de Presupuesto Personal</h1>
  <p>Abre la consola del navegador (F12 → Console) para interactuar.</p>
  <script src="app.js"></script>
</body>
```

> 💡 **`<script src="app.js">`** carga tu código JavaScript. Va al **final del `<body>`** para que el HTML ya exista cuando JS empiece a ejecutarse.

---

## Parte 1 – Variables, arrays y captura con `prompt()` (~30 min)

> **Objetivo:** entender qué es un array, declarar el estado global con **2 arrays paralelos**, y capturar el primer movimiento desde `prompt()`.

### 1.1 ¿Qué es un array?

Un **array** es una lista ordenada de valores. En JavaScript se declara con corchetes `[]`:

```javascript
let frutas = ['manzana', 'pera', 'uva'];

console.log(frutas.length);   // 3 — cuántos elementos hay
console.log(frutas[0]);        // 'manzana' — el PRIMER elemento (índice 0)
console.log(frutas[2]);        // 'uva' — el TERCER elemento

frutas.push('mango');          // agrega al final
console.log(frutas);           // ['manzana', 'pera', 'uva', 'mango']
console.log(frutas.length);    // 4
```

**Lo esencial de los arrays en este lab:**

| Acción | Sintaxis |
|---|---|
| Crear array vacío | `let arr = [];` |
| Agregar al final | `arr.push(valor)` |
| Tamaño del array | `arr.length` |
| Leer por posición | `arr[i]` — `i` arranca en `0` |

> ⚠️ **El índice arranca en 0.** El primer elemento es `arr[0]`, el último es `arr[arr.length - 1]`. Confundirse con esto es el bug #1 al empezar con arrays.

### 1.2 Modelo de datos del proyecto: 2 arrays paralelos

Para el **Gestor de Presupuesto** vamos a guardar cada movimiento en **dos arrays paralelos**:
- `nombres[]` — qué fue el movimiento (`"Salario"`, `"Cena"`, etc.)
- `valores[]` — cuánto fue, **con signo**: positivo = ingreso, negativo = gasto.

Crea `app.js` y al inicio declara:

```javascript
let nombres = [];
let valores = [];
```

**Convención de signos:**
- `3000` → ingreso de 3000
- `-45.50` → gasto de 45.50

Así calcular el saldo final es solo sumar todo el array `valores`.

> ⚠️ **"Paralelos" significa que `nombres[i]` y `valores[i]` describen el MISMO movimiento.** Si `nombres[0]` es `"Salario"`, entonces `valores[0]` debe ser su monto. Mantenerlos sincronizados es nuestra responsabilidad (en C07 veremos cómo los objetos resuelven esto elegantemente).

### 1.3 Captura inicial con `prompt`

```javascript
const nombre = prompt('Nombre del movimiento:');
const tipo = prompt('Tipo (ingreso / gasto):');
const monto = parseFloat(prompt('Monto:'));
```

**Conceptos nuevos:**
- **`prompt(mensaje)`**: API del navegador que abre una ventana pidiendo input. Devuelve **siempre un string** (o `null` si el usuario cancela).
- **`parseFloat(texto)`**: convierte un string a número decimal. `parseFloat("45.50")` → `45.5`. Si el texto no es número, devuelve `NaN`.

### 1.4 Validar con `if`

`prompt` siempre devuelve string, así que `monto` puede no ser un número válido. Y `nombre` puede ser string vacío. Validamos antes de guardar:

```javascript
if (!nombre || (tipo !== 'ingreso' && tipo !== 'gasto') || isNaN(monto) || monto <= 0) {
  alert('Datos inválidos. Intenta de nuevo.');
} else {
  // calcular el valor con signo
    let valor;
  if(tipo==='ingreso'){
    valor = monto;
  }
  else{
    valor = -monto;
  }

  // guardar en AMBOS arrays — siempre juntos
  nombres.push(nombre);
  valores.push(valor);

  console.log('Movimiento registrado.');
  console.log('Nombres:', nombres);
  console.log('Valores:', valores);
}
```

**Conceptos nuevos:**
- **`!nombre` (falsy)**: si `nombre` es string vacío `""`, JS lo trata como `false`. `!""` es `true`. Así detectamos campos vacíos.
- **`isNaN(monto)`**: `true` si `monto` no es un número válido. Necesario porque `parseFloat("abc")` no falla — devuelve `NaN`.
- **`alert(mensaje)`**: API del navegador que muestra un cuadro de aviso. Útil para feedback de errores.

### 1.5 Prueba el flujo

Recarga la página. Acepta el `prompt` con valores válidos (`Cena`, `gasto`, `45.50`) y revisa la consola.

✅ **Checkpoint 1 (~30 min):** al completar el `prompt` con datos válidos, ves en consola los dos arrays con 1 elemento cada uno. Si pones tipo inválido o monto cero, ves el `alert` y los arrays quedan vacíos.

---

## Parte 2 – Repetir con `while` + recorrer con `for` (~35 min)

> **Objetivo:** permitir múltiples movimientos en una ejecución (con `while`) y recorrer los arrays para calcular el saldo (con `for`).

### 2.1 Repetir captura con `while`

`while (condicion)` repite el bloque **mientras la condición sea verdadera**. Envuelve la captura de P1 en un `while`:

```javascript
let continuar = 'si';

while (continuar === 'si') {
  //Coloca aqui la captura de movimientos(nombre,tipo,monto) y el bloque if-else de validacion anterior

  continuar = prompt('¿Registrar otro movimiento? (si/no):');
}

console.log('Registro completado. Total movimientos:', nombres.length);
```

> 💡 **`while` vs `for`**: usamos `while` cuando NO sabemos cuántas iteraciones haremos (depende del usuario). Usamos `for` cuando sí lo sabemos (ej. recorrer un array de N elementos).

### 2.2 Recorrer un array con `for`

Después del `while`, calculamos el saldo total recorriendo `valores`:

```javascript
let saldo = 0;
for (let i = 0; i < valores.length; i++) {
  saldo = saldo + valores[i];
}

console.log('Saldo total: $' + saldo.toFixed(2));
```

**Disección del `for`:**
- `let i = 0` — empieza el contador en 0 (primer índice del array).
- `i < valores.length` — sigue mientras el contador sea menor que el tamaño.
- `i++` — incrementa el contador en cada vuelta.
- `valores[i]` — accede al elemento de la posición `i`.

Como ingresos son positivos y gastos negativos, **sumarlos da el saldo neto** automáticamente.

> 💡 **`.toFixed(2)`** redondea a 2 decimales y devuelve un string. `saldo.toFixed(2)` formatea `104.5` como `"104.50"`.

### 2.3 Prueba con 3 movimientos

Registra: 
- `Salario` ingreso 3000
- `Cena` gasto 45.50
- `Freelance` ingreso 50

Al responder `no`, deberías ver `Saldo total: $3454.50`.

✅ **Checkpoint 2 (~65 min):** registras 3 movimientos seguidos, el bucle termina al responder distinto a `si`, y la consola muestra el saldo correcto.

🏆 **Reto autónomo:** acepta también `sí` con tilde y respuestas en mayúscula (`SI`, `Si`). Pista: `.toLowerCase()` y comparar con varios valores válidos.

---

## Parte 3 – Funciones imperativas + reporte (~40 min)

> **Objetivo:** organizar lo de P1+P2 en 3 funciones imperativas que modifican el estado global.

> ⚠️ **Importante:** en esta parte vas a **refactorizar** lo que escribiste en P2. Eso significa **mover código** de adentro del `while` y del `for` hacia funciones nuevas. Al final, el `while` y el `for` viejos **dejan de existir** — los reemplaza el nuevo flujo de 3.5. No dupliques el código.

### 3.1 Declara las 3 funciones vacías

Tu `app.js` actualmente tiene:
1. Los 2 arrays globales (de P1.2).
2. Un `while` con captura inline (de P2.1).
3. Un `for` + `console.log` del saldo (de P2.2).

Vamos a transformarlo en esta estructura final:

```
1) Globales: let nombres, let valores
2) Funciones: registrarMovimiento, calcularSaldo, mostrarResumen
3) Flujo de ejecución: while + mostrarResumen()
```

**Justo después de los `let nombres = []` y `let valores = []`**, agrega las 3 funciones vacías:

```javascript
function registrarMovimiento() {
  // 3.2 — moverás aquí la lógica de captura+validación
}

function calcularSaldo() {
  // 3.3 — moverás aquí el for de P2.2
}

function mostrarResumen() {
  // 3.4 — imprime cantidad + saldo
}
```

> 💡 **Función imperativa**: estas 3 funciones NO reciben parámetros y modifican (o leen) las variables globales `nombres` y `valores`. Eso las hace "acopladas" al estado global — es el sello del estilo imperativo.

### 3.2 Implementa `registrarMovimiento()`

**Corta y pega** la lógica de captura+validación que tienes adentro del `while` de P2.1 y ponla dentro de la función. **Al terminar, el cuerpo del while de P2.1 debe quedar vacío** — lo arreglaremos en 3.5.

```javascript
function registrarMovimiento() {
  const nombre = prompt("Nombre del movimiento:");
  const tipo = prompt("Tipo (ingreso / gasto):");
  const monto = parseFloat(prompt("Monto:"));

  if (!nombre || (tipo !== "ingreso" && tipo !== "gasto") || isNaN(monto) ||monto <= 0) {
    alert("Datos inválidos. Intenta de nuevo.");
    return; // sale de la función sin guardar
  }

  // calcular el valor con signo
  let valor;
  if (tipo === "ingreso") {
    valor = monto;
  } else {
    valor = -monto;
  }

  // guardar en AMBOS arrays — siempre juntos
  nombres.push(nombre);
  valores.push(valor);
}

```

* **`return` sin valor** sale de la función antes de llegar al final. Útil para "validación temprana".

### 3.3 Implementa `calcularSaldo()`

**Corta y pega** el `let saldo = 0;` y el `for` que tenías en P2.2 dentro de la función. Agrega `return saldo;` al final.

```javascript
function calcularSaldo() {
  let saldo = 0;
  for (let i = 0; i < valores.length; i++) {
    saldo = saldo + valores[i];
  }
  return saldo;
}
```

> 💡 El `console.log('Saldo total: ...')` que tenías al final de P2.2 **ya no va aquí** — vivirá adentro de `mostrarResumen()` en el siguiente sub-paso.

### 3.4 Implementa `mostrarResumen()`

```javascript
function mostrarResumen() {
  console.log('--- Resumen Final ---');
  console.log('Total de movimientos:', nombres.length);
  console.log('Saldo total: $' + calcularSaldo().toFixed(2));
}
```

* `mostrarResumen` **llama a `calcularSaldo()`** — las funciones se pueden componer así, una llamando a otra.

### 3.5 Conecta el flujo final

**Reemplaza** el `while` viejo de P2.1 (cuyo cuerpo quedó vacío en 3.2) por este flujo nuevo. **No declares `let continuar` dos veces** — usa el que ya tenías de P2.1, solo cambia el contenido del bucle.

```javascript
let continuar = 'si';
while (continuar === 'si') {
  registrarMovimiento();
  continuar = prompt('¿Registrar otro movimiento? (si/no):');
}
mostrarResumen();
```

**Tu `app.js` final debe verse así, en este orden:**

```javascript
// 1) Globales (de P1.2)
let nombres = [];
let valores = [];

// 2) Funciones (de P3.1-3.4)
function registrarMovimiento() { /* ... */ }
function calcularSaldo() { /* ... */ }
function mostrarResumen() { /* ... */ }

// 3) Flujo de ejecución (de P3.5)
let continuar = 'si';
while (continuar === 'si') {
  registrarMovimiento();
  continuar = prompt('¿Registrar otro movimiento? (si/no):');
}
mostrarResumen();
```

> ⚠️ **Verifica:** NO debe haber código de captura/validación **fuera** de las funciones. NO debe haber `for` ni `console.log('Saldo...')` **fuera** de `calcularSaldo` / `mostrarResumen`. Si los dejaste sueltos en P2, **bórralos ahora** — su lógica ya vive dentro de las funciones.

✅ **Checkpoint 3 (~105 min):** ejecutas el flujo, registras 2 movimientos (1 ingreso de 150, 1 gasto de 45.50) y al cerrar el bucle ves en consola:
```
Total de movimientos: 2
Saldo total: $104.50
```

🏆 **Reto autónomo:** agrega un desglose por tipo dentro de `mostrarResumen()`. Suma ingresos (`valores[i] > 0`) y gastos (`valores[i] < 0`) por separado e imprime ambos. Pista: dos variables acumuladoras dentro del mismo `for`.

---

## 🌟 Logros Adicionales

- **Logro 1:** Mostrar el ingreso más alto y el gasto más bajo (más negativo) registrados.
- **Logro 2:** Validar que los nombres no se repitan al registrar.

---

## 📝 Instrucciones de Entrega

1. **Entrega Final:**
   - URL del repositorio en GitHub.
   - Captura de pantalla de la ejecución en consola con al menos 3 movimientos y el resumen final.

---

## 🧑‍💻 Ejemplo de Flujo Esperado (en consola)

```
Nombre del movimiento: Salario
Tipo: ingreso
Monto: 3000

¿Registrar otro movimiento? (si/no): si
Nombre del movimiento: Cena
Tipo: gasto
Monto: 45.50

¿Registrar otro movimiento? (si/no): si
Nombre del movimiento: Freelance
Tipo: ingreso
Monto: 500

¿Registrar otro movimiento? (si/no): no

--- Resumen Final ---
Total de movimientos: 3
Saldo total: $3454.50
```

---
