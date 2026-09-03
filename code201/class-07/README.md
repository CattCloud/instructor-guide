> 📦 **Módulo 2:** Clase 3 de 4

# Clase 07: Objetos + POO con `class`

## Resumen

En esta clase resuelves el dolor de los **2 arrays paralelos** de C05/C06 y dejas **terminada la lógica** del proyecto **Gestor de Presupuesto Personal**. Primero conoces lo básico de los **objetos** (declarar, acceder, modificar, array de objetos); luego **refactorizas** el modelo: cada movimiento pasa de dos entradas sueltas en `nombres[]` y `valores[]` a UN objeto `{ nombre, tipo, valor }` con el **tipo explícito** (ya no codificado con el signo). Sobre esa base aprendes **Programación Orientada a Objetos con `class`**, construida **por capas**: primero las **propiedades**, luego el **constructor** que las inicializa, y al final los **métodos** que les dan comportamiento. Cierras con la clase `Presupuesto`, que **encapsula** el array de movimientos junto a sus métodos. Todo se prueba en **consola** — la interfaz visual llega en C08.

## Estructura sugerida

| **Fase** | **Duración** | **Descripción** |
|---|---|---|
| **1. Introducción y Contexto** | 15 min | El dolor de los arrays paralelos + motivación: ¿y si cada movimiento fuera un objeto? |
| **2. Demo Técnica** | 20 min | Objeto literal → array de objetos → `class` por capas (propiedad → constructor → método). |
| **3. Laboratorio (4 partes)** | 120 min | P0 Objetos básicos (~15) · P1 Refactor del modelo (~35) · P2 `class` paso a paso (~40) · P3 `class Presupuesto` (~30). |
| **4. Cierre y Síntesis** | 15 min | ¿Qué ganamos con objetos + `class`? + semilla C08 (interfaz con Tailwind). |

## 🎯 Objetivos de aprendizaje

Al finalizar esta clase, serás capaz de:

1. **Manipular objetos** literales: acceder y modificar propiedades con `obj.prop` y leer un array de objetos.
2. **Refactorizar** el modelo de 2 arrays paralelos a UN array de objetos, adaptando el código de C06.
3. **Construir una clase por capas** con `class`, `constructor`, `this` y `new`: propiedades → constructor → métodos.
4. **Encapsular** datos + métodos en una clase `Presupuesto` que gestiona todo el estado del Gestor.

---

## 📌 Preparación para la clase

> Antes de llegar a clase, investiga y prepárate:

#### 🔍 Misión de Investigación

**1. Objetos en JavaScript:**
- Investiga: ¿Cómo se declara un objeto con `{}` y cómo se accede/modifica una propiedad con `.`?
- Encuentra: 3 ejemplos de datos del mundo real modelados como objeto (persona, libro, producto).
- Prepárate para explicar: ¿Cuál es la diferencia entre un array y un objeto?

**2. La palabra clave `class`:**
- Investiga: ¿Qué es una `class` en JavaScript y para qué sirve `new`?
- Encuentra: Un ejemplo simple de `class` con `constructor` en MDN o JavaScript.info.
- Prepárate para explicar: ¿Qué diferencia hay entre la **clase** (el molde) y una **instancia** (un objeto creado con `new`)?

**3. `constructor` y `this`:**
- Investiga: ¿Qué hace el método `constructor` cuando creas una instancia con `new`?
- Encuentra: Qué representa `this` dentro de una clase.
- Prepárate para explicar: ¿Por qué `this.nombre = nombre` "guarda" un dato en el objeto?

**4. Métodos dentro de una clase:**
- Investiga: ¿Cómo se define un método dentro de una `class` y cómo se invoca (`obj.metodo()`)?
- Encuentra: Un método que use una propiedad del propio objeto con `this`.
- Prepárate para explicar: ¿Por qué agrupar datos + métodos en un objeto (encapsulación) es útil?

#### 📚 Recursos sugeridos

1. **MDN — Trabajando con objetos**
   [https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics){:target="_blank"}

2. **MDN — Classes (JavaScript)**
   [https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes){:target="_blank"}

3. **JavaScript.info — Class basic syntax**
   [https://javascript.info/class](https://javascript.info/class){:target="_blank"}

---

## Resultados esperados

### Podrán hacer
1. **Declarar objetos** y leer/modificar sus propiedades con `.`.
2. **Refactorizar** el proyecto: de 2 arrays paralelos a un array de objetos (corrigiendo `registrarMovimiento`, las funciones de filtro/total e `imprimirReporte`).
3. **Definir clases** con `class`, `constructor`, `this` y crear instancias con `new`.

### Podrán explicar
1. **Diferencia entre array y objeto** — orden por índice vs. acceso por nombre de propiedad.
2. **Por qué objetos resuelven el dolor de arrays paralelos** — los datos viajan juntos, imposible desincronizar.
3. **Qué hace el `constructor`** — inicializa las propiedades de cada instancia al hacer `new`.

### Podrán implementar
1. **`class Movimiento`** con propiedades + métodos (`esIngreso`, `esGasto`, `formatear`).
2. **`class Presupuesto`** que encapsula el array de movimientos y sus métodos (`agregar`, `eliminar`, `saldo`, `resumen`, ...).
3. **El modelo completo del Gestor** funcionando y probado en consola.

> 📝 **Nota:** En esta clase NO se escribe HTML/CSS ni se conecta a la página — todo es lógica en consola. La **interfaz visual** del Gestor se construye en C08 (Tailwind), y la conexión real UI↔lógica (clicks, formularios en vivo) llega en **M3** con el DOM.

---

## Glosario de Nuevos Términos

- **Objeto literal:** Colección de pares `key: value` declarada con `{}`. Ej. `{ nombre: 'Ana', edad: 30 }`.
- **Propiedad:** Cada par `key: value` de un objeto. Se accede con `obj.key`.
- **Array de objetos:** Lista de objetos (`[{...}, {...}]`); combina orden + nombres descriptivos.
- **`class`:** Molde para crear muchos objetos con la misma forma y comportamiento.
- **Instancia:** Objeto concreto creado a partir de una clase con `new`. Ej. `new Movimiento(...)`.
- **`new`:** Operador que crea una instancia y ejecuta el `constructor` de la clase.
- **`constructor`:** Método especial que corre al hacer `new` e inicializa las propiedades con `this`.
- **`this`:** Dentro de una clase, apunta al objeto que se está creando/usando.
- **Método:** Función dentro de una clase que usa las propiedades del objeto (`this.x`).
- **Encapsulación:** Agrupar datos (propiedades) + comportamientos (métodos) relacionados dentro de un mismo objeto.
