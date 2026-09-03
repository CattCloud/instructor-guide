# Promesas I : Introduccion

## Que son las promesas?

> Una **Promesa** es un objeto que **representa el resultado (éxito o error)** de una **operación asincrónica**.
> 

<aside>

**Recuerda**: Una promesa se aplica en **operaciones asincrónicas**, lo que significa que necesita tiempo para resolverse o finalizar . **No entrega el resultado inmediatamente**

</aside>

<aside>

### **Uso**

Se usa para manejar **código asincrónico** (como peticiones a una API, timers, lectura de archivos, etc.) de manera **más legible** que las funciones callbacks.

</aside>

## Estados de una promesa

> Piensa en las promesas como un "**compromiso**" que eventualmente se cumple... o no.
Es algo que en principio esperamos que se cumpla en el futuro, pero pueden ocurrir varias cosas en el proceso de cumplimiento de esa promesa.
> 

**Tabla de estados de una promesa**

| Estado | Descripción |
| --- | --- |
| **Promesa pendiente: pending** | La promesa **aún no se ha resuelto ni rechazado**. |
| **Promesa cumplida: fulfilled** | La promesa **se resolvió correctamente** (`resolve`). |
| **Promesa rechazada: rejected** | La promesa **fue rechazada** por un error (`reject`). |

![image.png](image.png)

<aside>

**Analogía ejemplo**

Haces un **pedido por internet** (como pedir una pizza 🍕).

1. **Haces el pedido:**
Llamas o usas la app → esto es cuando creas una **promesa**.
2. **Esperas el resultado:**
No sabes exactamente cuándo llegará, pero sabes que eventualmente **sucederá** (o algo saldrá mal).
El pedido está en **estado `pending`**.
3. **Llega la pizza:**
Si llega bien, estás feliz y comes → esto es un **`resolve()`**.
4. **Ocurre un problema:**
El repartidor se perdió o no llega → esto es un **`reject()`**.

Pedir una pizza es una operación asíncrona porque mientras esperas la pizza, puedes seguir viendo tu serie. No detienes tu vida (ni el código).

</aside>

## ¿Pero que son las promesas?

> En JavaScript, cuando trabajamos con operaciones asíncronas, el código no devuelve directamente o inmediatamente el valor esperado. En su lugar, se devuelve una promesa que representa la eventual entrega del valor en el futuro.
Las promesas son objetos que estarán en uno de los estados mencionados anteriormente.
El objeto **Promise** en JavaScript representa una operación asíncrona (y su valor resultante) que eventualmente se completará (o fallará).
> 
> - Mientras un objeto Promise está "pendiente" (funcionando), el resultado no está definido.
> - Cuando un objeto Promise se "cumple", el resultado es un valor.
> - Cuando un objeto Promise es "rechazado", el resultado es un objeto error.

<aside>

Debes tener en claro cuando en tu codigo cuando algo es un promesa y cuando es una certeza

Asi entenderas muy claro cuando usar las promesas
Por ejemplo

const minumero=5;

Aca es una certeza, que la variable minumero es 5 si o si, esto es una certeza 

Una Promesa puede ser
const datos = fetch("/api") // devuelve una Promise
datos.then(res => console.log(res)); // debes esperar el resultado

</aside>