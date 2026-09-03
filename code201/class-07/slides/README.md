# Clase 07 — Objetos + POO con `class`
### Code 201 · Módulo 2

---

## 🎯 Objetivo de la Clase

- Conocer lo **básico de objetos** (acceder, modificar, array de objetos).
- **Refactorizar** el modelo: arrays paralelos → array de objetos.
- Construir una **clase por capas**: propiedades → constructor → métodos.
- **Encapsular** todo en `class Presupuesto`.

---

## 📖 El dolor de C05/C06

```javascript
let nombres = ['Salario', 'Cena'];
let valores = [3000, -45.50];   // el TIPO va en el signo
```

**Problemas:**
- 2 arrays que mantener sincronizados.
- Borrar de uno y no del otro → desastre silencioso.
- `tipo` codificado con el signo (poco explícito).

> Hoy lo resolvemos con objetos.

---

## 🧱 Objeto literal

Una colección de pares `key: value` dentro de `{}`:

```javascript
let persona = { nombre: 'Ana', edad: 30 };

console.log(persona.nombre);   // 'Ana'  (acceso con punto)
persona.edad = 31;             // modificar
persona.email = 'a@mail.com';  // agregar
```

* Se accede con `.` y el nombre de la propiedad.

---

## ⚡ Array vs Objeto

| Estructura | Acceso | Cuándo |
|---|---|---|
| **Array** `[a, b, c]` | Por índice `arr[0]` | Orden + colección homogénea |
| **Objeto** `{ k: v }` | Por nombre `obj.k` | Datos con nombres descriptivos |

> Y se combinan: **array de objetos** = lo mejor de ambos.

---

## 🔥 El Refactor del Modelo

```javascript
// ANTES — 2 arrays paralelos (tipo por signo)
let nombres = ['Salario', 'Cena'];
let valores = [3000, -45.50];

// AHORA — 1 array de objetos (tipo explícito, valor positivo)
let movimientos = [
  { nombre: 'Salario', tipo: 'ingreso', valor: 3000 },
  { nombre: 'Cena',    tipo: 'gasto',   valor: 45.50 }
];
```

* 1 push en vez de 2 · `tipo` explícito · datos que viajan juntos.

---

## ⚠️ Ojo: funciones que cambian

Con el tipo explícito y `valor` positivo, hay que **corregir** lógica:

```javascript
// Antes el signo bastaba para sumar; ahora NO:
const calcularSaldo = movimientos =>
  totalIngresos(movimientos) - totalGastos(movimientos);

// imprimirReporte: de 2 arrays a 1
imprimirReporte(movimientos);   // ya no (nombres, valores)
```

> Mejor modelo → menos trucos de signo.

---

## 🧩 `class`: el molde, por capas

Vamos a construir `Movimiento` en **3 capas**:

1. **Propiedades** — los datos.
2. **Constructor** — los pone automáticamente.
3. **Métodos** — comportamiento sobre esos datos.

> Nada de golpe: una capa motiva la siguiente.

---

## 🧱 Capa 1 — Propiedades

```javascript
class Movimiento {}            // molde vacío

const m = new Movimiento();    // 'new' crea una INSTANCIA
m.nombre = 'Cena';             // le pones PROPIEDADES
m.valor = 45.5;
```

* **Propiedad** = un dato del objeto.
* Pero ponerlas a mano cada vez es tedioso → **constructor**.

---

## 🏗️ Capa 2 — Constructor

```javascript
class Movimiento {
  constructor(nombre, tipo, valor) {
    this.nombre = nombre;   // guarda en ESTE objeto
    this.tipo = tipo;
    this.valor = valor;
  }
}

const cena = new Movimiento('Cena', 'gasto', 45.5);
```

* **`this`** = el objeto que se crea.
* Las **mismas** propiedades, ahora puestas **solas** al hacer `new`.

---

## ⚙️ Capa 3 — Métodos

```javascript
class Movimiento {
  constructor(nombre, tipo, valor) { /* ... */ }

  esIngreso() { return this.tipo === 'ingreso'; }

  formatear() {
    const signo = this.esIngreso() ? '+' : '-';
    return `${this.nombre}: ${signo}$${this.valor.toFixed(2)}`;
  }
}

new Movimiento('Salario', 'ingreso', 3000).formatear();  // 'Salario: +$3000.00'
```

* Un **método** usa las propiedades con `this.x`.

---

## ⚠️ Cuidado con `new`

```javascript
// Correcto
const m = new Movimiento('Cena', 'gasto', 45);

// Sin new → ERROR claro:
// "Class constructor Movimiento cannot be invoked without 'new'"
```

> `class` te avisa con un error explícito (más seguro).

---

## 🏛️ `class Presupuesto` (encapsulación)

```javascript
class Presupuesto {
  constructor() {
    this.movimientos = [];          // propiedad
  }
  agregar(movimiento) { this.movimientos.push(movimiento); }
  saldo() { return this.totalIngresos() - this.totalGastos(); }
  resumen() { return { /* cantidad, ingresos, gastos, saldo */ }; }
}
```

* **Encapsulación**: el array + sus métodos JUNTOS en un objeto.

---

## ⚙️ Estructura del Lab

| Parte | Tiempo | Contenido |
|---|---|---|
| **P0** | ~15 min | Objetos básicos |
| **P1** | ~35 min | Refactor: arrays paralelos → array de objetos |
| **P2** | ~40 min | `class` por capas (propiedades → constructor → métodos) |
| **P3** | ~30 min | `class Presupuesto` (encapsulación) |

> Todo en **consola**. La interfaz visual es C08.

---

## 📊 ¿Qué Ganamos?

| Antes (C05/C06) | Ahora (C07) |
|---|---|
| 2 arrays paralelos | 1 array de objetos |
| Tipo como signo | Tipo explícito |
| Funciones sueltas | Métodos en el objeto |
| Estado en globales | Estado encapsulado |
| Fragilidad sincronizada | Integridad garantizada |

---

## 🔮 Lo que viene en C08

El modelo del Gestor está **listo**, pero solo en consola.

En **C08** aprendes **Tailwind CSS** para darle una **interfaz visual** moderna y responsiva — el Gestor por fin tendrá cara.

> Conectar esa UI a estas clases (clicks, formulario en vivo) es **M3** (DOM).

---

## 🧭 Más adelante

Hoy pusiste la base de POO: **propiedades, constructor, métodos, encapsulación**.

En una unidad de POO posterior:

```javascript
class Ingreso extends Movimiento { /* ... */ }   // herencia
```

`extends`/`super`, polimorfismo y los **prototipos** que `class` usa por debajo.

---

## 🤔 Discusión Final

- ¿Qué cambió al pasar de arrays paralelos a array de objetos?
- ¿Por qué `tipo: 'ingreso'` es mejor que codificar con el signo?
- ¿Notas cómo el constructor "pone" las propiedades y los métodos las "usan"?

> **Reflexión:** OOP no es "lo siguiente" — es **otra forma de organizar lo mismo**. Imperativo, funcional y OOP coexisten en código real.

---

## ¡Gracias! 🙌
### Code 201 · Enter Tech School
