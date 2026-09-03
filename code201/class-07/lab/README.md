# Laboratorio 07: Objetos + POO con `class` — el modelo del Gestor

En C05/C06 tu modelo eran **2 arrays paralelos** (`nombres` + `valores`), y el **tipo** se codificaba con el **signo**. Hoy cada movimiento pasa a ser **un objeto** y aprendes a crear "moldes" de objetos con **`class`**, paso a paso. Al terminar, la lógica del **Gestor de Presupuesto** queda completa y probada en **consola**.

> ⏱️ **Checkpoints**: 4 momentos de validación grupal (~15 min, ~50 min, ~90 min, ~120 min).
>
> 🧠 Hoy trabajas en **consola** (F12). No tocas HTML/CSS — la interfaz visual es C08.

## 🎯 Objetivos de Aprendizaje

1. **Manipular objetos** literales: acceder, modificar y array de objetos.
2. **Refactorizar** el modelo: de 2 arrays paralelos (tipo por signo) a UN array de objetos (tipo explícito).
3. **Construir una clase por capas**: propiedades → constructor → métodos (`this`, `new`).
4. **Encapsular** datos + métodos en una clase `Presupuesto`.

## 🔑 Conceptos Clave

| Concepto | Definición |
|---|---|
| **Objeto literal** | Pares `key: value` dentro de `{}`. `let p = { nombre: 'Ana' }` |
| **Acceso a propiedad** | `obj.prop` para leer o escribir. `p.nombre` → `'Ana'` |
| **Array de objetos** | Lista de objetos: `[{...}, {...}]`. Orden + nombres descriptivos. |
| **`class`** | Molde para crear muchos objetos con la misma forma y comportamiento. |
| **Instancia / `new`** | Objeto concreto creado desde una clase con `new Clase()`. |
| **Propiedad de instancia** | Dato guardado en el objeto con `this.prop = ...`. |
| **`constructor()`** | Método que corre al hacer `new`; pone las propiedades iniciales. |
| **Método** | Función dentro de la clase que usa las propiedades (`this.x`). |
| **Encapsulación** | Agrupar datos + métodos relacionados dentro de un mismo objeto. |

## ⚙️ Setup Inicial

Seguimos en `personal-budget`. Estructura:

```
personal-budget/
├── index.html
├── app.js                 (de C05/C06 — lo adaptamos)
├── functional-utils.js    (de C06 — lo adaptamos)
├── oop-objects.js         (NUEVO — aquí van las clases)
└── README.md
```

En `index.html`, orden de scripts:

```html
<script src="oop-objects.js"></script>
<script src="functional-utils.js"></script>
<script src="app.js"></script>
```

---

## Parte 0 — Objetos: lo básico (~15 min)

> **Objetivo:** declarar objetos, acceder y modificar propiedades. La base antes de las clases.

### 0.1 ¿Qué es un objeto?

Un objeto agrupa datos relacionados como pares `key: value`:

```javascript
const persona = {
  nombre: 'Ana',
  edad: 30,
  pais: 'Perú'
};

console.log(persona.nombre);   // 'Ana'  → acceso con punto
console.log(persona.edad);     // 30
```

* `{}` declara un objeto · cada propiedad es `key: value` separada por **coma** · se accede con `.` y el nombre.

### 0.2 Leer, modificar y agregar propiedades

```javascript
persona.edad = 31;              // modificar
persona.email = 'a@mail.com';   // agregar propiedad nueva
```

> 💡 En arrays accedes por **índice** (`arr[0]`); en objetos por **nombre** (`obj.nombre`).

### 0.3 Array de objetos

```javascript
const personas = [
  { nombre: 'Ana', edad: 30 },
  { nombre: 'Carlos', edad: 25 }
];

console.log(personas[0].nombre);   // 'Ana'
```

> 💡 Un **array de objetos** = orden + nombres descriptivos. **Esto reemplaza los arrays paralelos.**

✅ **Checkpoint 0 (~15 min):** declaras objetos, accedes/modificas con `.` y lees un array de objetos.

---

## Parte 1 — Refactor del modelo: arrays paralelos → array de objetos (~35 min)

> **Objetivo:** migrar TODO el código de C06 al nuevo modelo. Aquí corriges `registrarMovimiento`, las funciones de `functional-utils.js` e `imprimirReporte`.

### 1.1 El antes y el después

```javascript
// ANTES (C05/C06) — 2 arrays paralelos; el TIPO se codifica con el SIGNO
let nombres = ['Salario', 'Cena'];
let valores = [3000, -45.50];          // +ingreso / -gasto

// AHORA (C07) — 1 array de objetos; tipo EXPLÍCITO, valor SIEMPRE positivo
let movimientos = [
  { nombre: 'Salario', tipo: 'ingreso', valor: 3000 },
  { nombre: 'Cena',    tipo: 'gasto',   valor: 45.50 }
];
```

> ⚠️ **Cambio clave:** ya no usamos el signo. `valor` es siempre positivo y `tipo` dice qué es. Esto obliga a **corregir varias funciones** (¡ojo con `calcularSaldo`!).

### 1.2 Adaptar `registrarMovimiento` (en `app.js`)

De **2 push con signo** → **1 push de un objeto**:

```javascript
let movimientos = [];

function registrarMovimiento() {
  const nombre = prompt('Nombre del movimiento:');
  const tipo = prompt('Tipo (ingreso / gasto):');
  const valor = parseFloat(prompt('Monto:'));

  if (!nombre || (tipo !== 'ingreso' && tipo !== 'gasto') || isNaN(valor) || valor <= 0) {
    alert('Datos inválidos. Intenta de nuevo.');
    return;
  }

  // 1 solo push de un objeto. valor SIEMPRE positivo.
  movimientos.push({ nombre: nombre, tipo: tipo, valor: valor });
}
```

> 💡 Adiós a la conversión de signo (`valor = -monto`). El `tipo` ya guarda esa información.

### 1.3 Corregir las funciones de `functional-utils.js`

Ahora filtran/operan **por propiedad** (`movimiento.tipo`, `movimiento.valor`):

```javascript
const obtenerIngresos = movimientos =>
  movimientos.filter(movimiento => movimiento.tipo === 'ingreso');

const obtenerGastos = movimientos =>
  movimientos.filter(movimiento => movimiento.tipo === 'gasto');

const totalIngresos = movimientos =>
  obtenerIngresos(movimientos).reduce((acumulador, movimiento) => acumulador + movimiento.valor, 0);

const totalGastos = movimientos =>
  obtenerGastos(movimientos).reduce((acumulador, movimiento) => acumulador + movimiento.valor, 0);

// ⚠️ CAMBIA DE LÓGICA: antes valores tenían signo y bastaba SUMAR todo.
// Ahora valor es positivo y el tipo es explícito → saldo = ingresos - gastos.
const calcularSaldo = movimientos =>
  totalIngresos(movimientos) - totalGastos(movimientos);

// ⚠️ EL SIGNO SE INVIERTE: antes buscaba valor < -monto; ahora valor > monto.
const buscarPrimerGastoMayor = (movimientos, monto) =>
  obtenerGastos(movimientos).find(movimiento => movimiento.valor > monto);

// Retorna: [cantidad, totalIngresos, totalGastos, saldo]
const generarValoresReporte = movimientos => [
  movimientos.length,
  totalIngresos(movimientos),
  totalGastos(movimientos),
  calcularSaldo(movimientos)
];
```

> 🗑️ **`montosAbsolutos` queda obsoleta:** existía para quitar el signo con `Math.abs`. Como ahora `valor` ya es positivo, no se necesita — **bórrala**. (Buen ejemplo de cómo un mejor modelo elimina código.)

### 1.4 Corregir `imprimirReporte` — de 2 arrays a 1

```javascript
// ANTES: imprimirReporte(nombres, valores)  → necesitaba 2 arrays paralelos
// AHORA: imprimirReporte(movimientos)        → un solo array; cada objeto trae nombre y tipo
const imprimirReporte = movimientos => {
  console.log('--- Resumen Final ---');

  movimientos.forEach((movimiento, indice) => {
    console.log(`  ${indice + 1}. ${movimiento.nombre} (${movimiento.tipo}): $${movimiento.valor.toFixed(2)}`);
  });

  const reporte = generarValoresReporte(movimientos);
  console.log('Total movimientos:', reporte[0]);
  console.log('Total ingresos: $' + reporte[1].toFixed(2));
  console.log('Total gastos: $' + reporte[2].toFixed(2));   // ya es positivo: sin Math.abs
  console.log('Saldo: $' + reporte[3].toFixed(2));
};
```

> 💡 Antes `imprimirReporte` cruzaba `nombres[indice]` con `valores[indice]` (frágil). Ahora cada `movimiento` trae su propio nombre y tipo — **imposible desincronizar**.

### 1.5 Flujo final en `app.js`

```javascript
let continuar = 'si';
while (continuar === 'si') {
  registrarMovimiento();
  continuar = prompt('¿Registrar otro movimiento? (si/no):');
}

imprimirReporte(movimientos);   // un solo argumento
```

✅ **Checkpoint 1 (~50 min):** registras 3 movimientos; `imprimirReporte(movimientos)` muestra el desglose y un saldo correcto. `calcularSaldo` resta gastos (no suma signos) y `buscarPrimerGastoMayor` usa `valor > monto`.

🏆 **Reto autónomo:** `agruparPorTipo(movimientos)` → `{ ingresos: [...], gastos: [...] }` con `.reduce`.

---

## Parte 2 — POO con `class`, paso a paso (~40 min)

> **Objetivo:** construir la clase `Movimiento` **por capas** — primero las propiedades, luego el constructor, luego los métodos. Nada de golpe.

### 2.1 ¿Por qué una clase?

En la P1 escribiste `{ nombre, tipo, valor }` a mano por cada movimiento. Una **clase** es un **molde** que crea objetos con la misma forma — y, además, con **comportamiento** propio. La vamos a construir en 3 capas.

### 2.2 Capa 1 — Propiedades (los datos de cada objeto)

Una clase vacía ya sirve de molde. Con `new` creas una **instancia** y le pones **propiedades**:

```javascript
class Movimiento {}              // molde vacío

const m = new Movimiento();      // 'new' crea una INSTANCIA (objeto a partir del molde)
m.nombre = 'Cena';               // le agregas PROPIEDADES
m.tipo = 'gasto';
m.valor = 45.5;

console.log(m.nombre);           // 'Cena'
```

* **Propiedad** = un dato del objeto (`nombre`, `tipo`, `valor`).
* **`new Movimiento()`** crea un objeto vacío a partir del molde.

> ⚠️ Pero asignar las 3 propiedades **a mano cada vez** que creas un movimiento es tedioso y fácil de olvidar. Vamos a automatizarlo → eso hace el **constructor**.

### 2.3 Capa 2 — Constructor (pon las propiedades automáticamente)

El **`constructor`** es un método especial que corre al hacer `new`. Su trabajo: **recibir los datos y guardarlos como propiedades** usando `this`:

```javascript
class Movimiento {
  constructor(nombre, tipo, valor) {
    this.nombre = nombre;   // "guarda en ESTE objeto la propiedad nombre"
    this.tipo = tipo;
    this.valor = valor;
  }
}

const cena = new Movimiento('Cena', 'gasto', 45.5);   // 1 sola línea
console.log(cena.nombre);   // 'Cena'
console.log(cena.valor);    // 45.5
```

* **`this`** = el objeto que se está creando.
* **`new Movimiento('Cena', 'gasto', 45.5)`** llama al constructor y te devuelve el objeto **ya con sus propiedades**.

> 💡 Son las **mismas propiedades** de la capa 1 (`nombre`, `tipo`, `valor`), pero ahora se ponen **solas** al crear. Eso es el constructor: "cada vez que nace un `Movimiento`, ponle estas propiedades".
>
> ⚠️ Si olvidas `new`, `class` lanza un error claro: `Class constructor Movimiento cannot be invoked without 'new'`.

### 2.4 Capa 3 — Métodos (comportamiento que usa las propiedades)

Un **método** es una función dentro de la clase que **usa las propiedades** (`this.x`):

```javascript
class Movimiento {
  constructor(nombre, tipo, valor) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.valor = valor;
    this.fecha = new Date().toLocaleDateString();
  }

  esIngreso() {
    return this.tipo === 'ingreso';   // usa la propiedad 'tipo'
  }

  esGasto() {
    return this.tipo === 'gasto';
  }

  formatear() {
    const signo = this.esIngreso() ? '+' : '-';
    return `${this.nombre}: ${signo}$${this.valor.toFixed(2)}`;
  }
}
```

```javascript
const salario = new Movimiento('Salario', 'ingreso', 3000);
console.log(salario.esIngreso());  // true
console.log(salario.formatear());  // 'Salario: +$3000.00'
```

> 💡 Un objeto literal también puede tener métodos (`{ formatear() {} }`); en `class` se escriben **igual**, solo que el molde se los da a **todas** las instancias.

### 2.5 Usa la clase en el proyecto

`registrarMovimiento` ahora crea **instancias** en vez de objetos literales:

```javascript
movimientos.push(new Movimiento(nombre, tipo, valor));
```

Y como cada movimiento es un `Movimiento`, `imprimirReporte` puede usar `movimiento.formatear()`:

```javascript
movimientos.forEach((movimiento, indice) => {
  console.log(`  ${indice + 1}. ${movimiento.formatear()}`);
});
```

✅ **Checkpoint 2 (~90 min):** construiste `Movimiento` por capas (propiedades → constructor → métodos); registras movimientos como instancias y el reporte usa `formatear()`.

🏆 **Reto autónomo:** método `antiguedadEnDias()` que calcule días desde `this.fecha` hasta hoy.

---

## Parte 3 — `class Presupuesto`: encapsulación (~30 min)

> **Objetivo:** aplicar el mismo patrón (propiedad → constructor → métodos) a una segunda clase que **contiene y gestiona** los movimientos. Aquí **cierras la lógica** del Gestor.

### 3.1 El molde con estado + comportamiento

Ya conoces el patrón. `Presupuesto` tiene **una propiedad** (un array) y **varios métodos**:

```javascript
class Presupuesto {
  constructor() {
    this.movimientos = [];          // propiedad: el array de movimientos
  }

  agregar(movimiento) {
    this.movimientos.push(movimiento);
  }

  eliminar(nombre) {
    this.movimientos = this.movimientos.filter(movimiento => movimiento.nombre !== nombre);
  }

  totalIngresos() {
    return this.movimientos
      .filter(movimiento => movimiento.esIngreso())
      .reduce((acumulador, movimiento) => acumulador + movimiento.valor, 0);
  }

  totalGastos() {
    return this.movimientos
      .filter(movimiento => movimiento.esGasto())
      .reduce((acumulador, movimiento) => acumulador + movimiento.valor, 0);
  }

  saldo() {
    return this.totalIngresos() - this.totalGastos();
  }

  buscarPorNombre(texto) {
    return this.movimientos.find(movimiento =>
      movimiento.nombre.toLowerCase().includes(texto.toLowerCase()));
  }

  resumen() {
    return {
      cantidad: this.movimientos.length,
      ingresos: this.totalIngresos(),
      gastos: this.totalGastos(),
      saldo: this.saldo()
    };
  }
}
```

> 💡 **Encapsulación:** el array vivía suelto en una global y las funciones estaban aparte en `functional-utils.js`. Ahora **datos + métodos viven juntos** dentro de `Presupuesto`. Las funciones sueltas de la P1 quedan absorbidas como **métodos** → puedes borrarlas de `functional-utils.js`.
>
> 🆙 **Mejora del reporte:** `resumen()` devuelve un **objeto con nombres** (`.cantidad`, `.saldo`) en vez del array posicional `generarValoresReporte` (`reporte[0]`, `reporte[1]`…). Mismo salto "posicional → nombrado" que hiciste con el modelo.

### 3.2 Prueba el modelo completo en consola

```javascript
const miPresupuesto = new Presupuesto();
miPresupuesto.agregar(new Movimiento('Salario', 'ingreso', 3000));
miPresupuesto.agregar(new Movimiento('Cena', 'gasto', 45.50));
miPresupuesto.agregar(new Movimiento('Freelance', 'ingreso', 500));

console.log(miPresupuesto.resumen());
// { cantidad: 3, ingresos: 3500, gastos: 45.5, saldo: 3454.5 }

miPresupuesto.eliminar('Cena');
console.log(miPresupuesto.saldo());                              // 3500
console.log(miPresupuesto.buscarPorNombre('free').formatear());  // 'Freelance: +$500.00'
```

✅ **Checkpoint 3 (~120 min):** `miPresupuesto.resumen()` devuelve cantidad/ingresos/gastos/saldo correctos; `eliminar` y `buscarPorNombre` funcionan. **El Gestor está completo en lógica.**

🏆 **Reto autónomo:** método `topGastos(n)` que devuelva los `n` gastos más grandes (filtra gastos → ordena por `valor` desc → corta).

---

## ⭐ Logros Adicionales

- **Logro 1 — `formatearTodos()`:** método en `Presupuesto` que devuelva un array de strings (`movimiento.formatear()` de cada uno). Lo reusaremos en C08 para pintar la lista.
- **Logro 2 — `verificarLimites()`:** método que avise cuando los gastos superen el 80% de los ingresos.
- **Logro 3 — Validación en `Movimiento`:** método `esValido()` que verifique nombre, tipo y valor; úsalo en `agregar` antes de aceptar el movimiento.

---

## 📝 Instrucciones de Entrega

1. **`oop-objects.js`** con `class Movimiento` y `class Presupuesto`.
2. **Entrega:** URL del repo + captura de consola con el `resumen()` de 3 movimientos.

