> 📦 **Módulo 2:** Clase 2 de 4

# Clase 06: Programación Funcional + Arrow Functions

## Resumen

En esta clase **refactorizas el proyecto C05** con el paradigma funcional. El `for` clásico que escribiste para calcular el saldo va a **desaparecer** — vas a sustituirlo por métodos funcionales sobre arrays: `.map()`, `.filter()`, `.find()`, `.reduce()` y `.forEach()`. Antes de tocar esos métodos, aprendes la sintaxis nueva que vas a ver en TODO código JS moderno: las **arrow functions** (`valor => valor * 2`). Comprendes qué es una **función pura** y por qué son fáciles de testear y razonar. El modelo de datos sigue siendo los **2 arrays paralelos** de C05 — los métodos funcionales operan sobre `valores[]` (array de números puros), ideal para demos limpias del paradigma.

## Estructura sugerida

| **Fase** | **Duración** | **Descripción** |
|---|---|---|
| **1. Introducción y Contexto** | 15 min | Repaso C05 (imperativo + arrays + for) + motivación: ¿qué tal si el `for` fuera UNA línea? |
| **2. Demo Técnica** | 20 min | Demo en vivo: `function` → arrow function, luego `.map`/`.filter`/`.reduce` sobre array de números. |
| **3. Laboratorio (4 partes)** | 120 min | P0 Arrow + funciones puras (~15 min) · P1 map/filter/find (~35 min) · P2 reduce/forEach (~40 min) · P3 composición + DRY (~30 min). |
| **4. Cierre y Síntesis** | 15 min | Discusión: ¿qué funciones puras te resultaron más útiles? + semilla C07. |

## 🎯 Objetivos de aprendizaje

Al finalizar esta clase, serás capaz de:

1. **Escribir arrow functions** y reconocer su equivalencia con `function`.
2. **Aplicar métodos funcionales** de Array — `.map()`, `.filter()`, `.find()`, `.reduce()`, `.forEach()`.
3. **Identificar funciones puras** y separarlas de funciones con efectos secundarios.
4. **Refactorizar `for` clásico** a métodos funcionales que no mutan el array original.

---

## 📌 Preparación para la clase

> Antes de llegar a clase, investiga y prepárate:

#### 🔍 Misión de Investigación

**1. Arrow functions:**
- Investiga: ¿Cómo se escribe `function suma(valorA, valorB) { return valorA + valorB }` como arrow function?
- Encuentra: 3 ejemplos donde arrow function es más legible que `function`.
- Prepárate para explicar: ¿Cuándo arrow function NO es buena idea?

**2. Funciones puras:**
- Investiga: ¿Qué características debe cumplir una función para ser considerada "pura"?
- Encuentra: Un ejemplo de función pura vs una función impura en JavaScript.
- Prepárate para explicar: ¿Por qué las funciones puras facilitan el testing?

**3. Método `.map()` vs `for`:**
- Investiga: ¿Qué retorna `.map()`? ¿Muta el array original?
- Encuentra: Un ejemplo donde `.map()` reemplaza un `for` clásico en 1 línea.
- Prepárate para explicar: ¿Cuándo usar `.map()` vs `.forEach()`?

**4. Método `.reduce()`:**
- Investiga: ¿Qué son el "acumulador" y el "valor inicial" en `.reduce`?
- Encuentra: Un ejemplo de `.reduce` sumando los números de un array.
- Prepárate para explicar: ¿Por qué `.reduce` se considera "el más poderoso" de los métodos funcionales?

#### 📚 Recursos previos sugeridos

* [Arrow functions — MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions){:target="_blank"}
* [Array.prototype.map() — MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map){:target="_blank"}
* [Array.prototype.reduce() — MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce){:target="_blank"}
* [Functional Programming in JS — FreeCodeCamp](https://www.freecodecamp.org/news/functional-programming-in-javascript/){:target="_blank"}

---

## Glosario de Nuevos Términos

* **Arrow function**: Sintaxis corta para funciones. `valor => valor * 2` equivale a `function(valor) { return valor * 2 }`.
* **Función pura**: Función que (1) misma entrada → misma salida, y (2) no produce efectos secundarios.
* **Efecto secundario**: Cualquier acción de una función fuera de su retorno — `console.log`, mutar variable externa, hacer fetch, etc.
* **Inmutabilidad**: Principio de no modificar datos existentes; crear nuevas versiones transformadas.
* **`.map(fn)`**: Transforma cada elemento del array. Devuelve nuevo array del mismo tamaño.
* **`.filter(fn)`**: Conserva solo los elementos que cumplen la condición. Devuelve nuevo array.
* **`.find(fn)`**: Retorna el primer elemento que cumple la condición (o `undefined`).
* **`.reduce(fn, inicial)`**: Acumula todos los elementos en un solo valor (suma, máximo, agrupación, etc.).
* **`.forEach(fn)`**: Ejecuta una acción por cada elemento. No retorna nada — solo efecto.
* **Composición de funciones**: Combinar funciones pequeñas para resolver problemas grandes.
* **Principio DRY** (Don't Repeat Yourself): Evitar repetir código; reusar funciones existentes.
