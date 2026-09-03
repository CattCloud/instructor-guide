# Funciones de Array

## Introduccion y Sintaxis

> Básicamente, son métodos para trabajar con arrays, permite realizar una operación con todos los elementos de dicho array (o parte de ellos) para conseguir un objetivo concreto, dependiendo del método. 
En general, a dichos métodos se les pasa por parámetro una **función callbacks** y unos parámetros opcionales.
> 

<aside>
💡

**Funciones de Orden Superior**
Funciones que reciben otras funciones como parámetros o retornan funciones como resultado (**`map`**, **`filter`**, **`find`**).

</aside>

### **Estructura de los Callbacks para los Métodos de Array**

<aside>
💡

La mayoría de estos métodos de array siguen la misma estructura en sus callbacks (funciones como argumento) 

```jsx
array.metodo((elemento, indice, array) => {
    // Código
});
```

**La forma como se ordenan esos parámetros siguen una regla y esto aplica para todos los arrays function**

- **elemento:** Si se le pasa un **primer parámetro**, este será el elemento actual del array que esta siendo procesado.
- **indice (Opcional)**: Si se le pasa un **segundo parámetro**, este será la posición del elemento actual en el array.
- **array (Opcional):** Si se le pasa un **tercer parámetro**, este será el array en cuestión
</aside>

## **Método** `forEach` : Iteración sobre los elementos de un array

> **Propósito** : Ejecuta una función proporcionada una vez por cada elemento del array. Se utiliza para recorrer el array y realizar una acción en cada elemento.
> 
> 
> <aside>
> 💡
> 
> El método `forEach` no modifica el array original. 
> **Modificación explícita**: Para modificar el array original dentro de `forEach`, debes hacerlo **explícitamente dentro del callback (haciendo referencia al array)**
> 
> ```jsx
> const numeros = [5, 8, 12, 20, 7];
> 
> numeros.forEach((num, index, arr) => {
>     arr[index] = num * 2; // Modificando explícitamente el array
> });
> 
> console.log(numeros); 
> // [10, 16, 24, 40, 14] 
> ```
> 
> </aside>
> 
> **Retorna** :
> 
> - No retorna ningún valor.
> - Su propósito es ejecutar el callback en cada elemento del array, sin modificar el array original. No está diseñado para modificar el array, sino simplemente para ejecutar efectos secundarios (como modificar variables externas, registrar valores en la consola, etc.) para cada elemento.
> - **forEach**() es otra forma de hacer un bucle (sobre un array), sin tener que recurrir a bucles tradicionales como **for** o **while**.

<aside>
💡

**Sintaxis e Interpretación**

`forEach()` recibe una función de callback que se ejecuta en cada elemento del array.

```jsx
array.forEach((elemento, indice, array) => {
    // Cuerpo del callback
});
```

</aside>

<aside>
💡

**Ejemplo explicativo**

```jsx
const numeros = [5, 8, 12, 20, 7];

numeros.forEach(num => {
    num = num * 2; // ❌ Esto NO modifica el array original
});

console.log(numeros); 
// [5, 8, 12, 20, 7]  (No cambió)

```

`forEach()` recorre **todos los elementos** del array, sin importar si cumplen o no con una condición.

`num` es solo una **copia del valor**, modificarla no afecta el array original.

**Ejemplo mas avanzado**

```jsx
const eventos = [
  { tipo: 'click', elemento: 'botón-enviar' },
  { tipo: 'scroll', elemento: 'sección-contacto' },
  { tipo: 'click', elemento: 'botón-cerrar' },
];

eventos.forEach(evento => {
  console.log(`Evento: ${evento.tipo} en ${evento.elemento}`);
});
```

</aside>

## **Método** `map` : Transformación de un array en un nuevo array

> **Propósito** : Crea un nuevo array aplicando una transformación a cada elemento del array original (aplica el callback a cada uno de sus elementos).
> 
> 
> **Retorna** :
> 
> - Retorna un **nuevo array** con los elementos transformados.
> - El array original **no se modifica**.

<aside>
💡

**Sintaxis**

`map()` recibe una función de callback que se ejecuta en cada elemento del array y devuelve el valor modificado.

```jsx
const nuevoArray = array.map((elemento, indice, array) => {
    // Cuerpo del callback, debe retornar el nuevo valor
});
```

**Importante**: El callback debe retornar un valor que sera la transformacion del elemento actual del array original

</aside>

<aside>
💡

**Diferencia con `forEach()`**

- `map()` **devuelve un nuevo array** con los valores transformados.
- `forEach()` solo **itera sobre el array**, pero **no devuelve nada**.
</aside>

<aside>
💡

**Ejemplo explicativo**

```jsx
const numeros = [5, 8, 12, 20, 7];

const duplicados = numeros.map(num => num * 2);

console.log(duplicados);
// [10, 16, 24, 40, 14]

```

- `map()` recorre cada número y **retorna el valor multiplicado por 2**, creando un **nuevo array** con los resultados.
- **El array original `numeros` no cambia**.

**Ejemplos mas avanzado:**

```jsx
const productos = [
  { nombre: 'Laptop', precio: 1200 },
  { nombre: 'Mouse', precio: 25 },
  { nombre: 'Teclado', precio: 45 },
];

const preciosFormateados = productos.map(producto => ({
  ...producto,
  precio: `$${producto.precio.toFixed(2)} USD`
}));

console.log(preciosFormateados);
```

</aside>

## **Método** `filter` : Filtrado de elementos en un array

> **Propósito** : Crea un nuevo array con los elementos del array original que cumplan con la condición especificada en la función callback.
> 
> 
> **Retorna** :
> 
> - Retorna un **nuevo array** con los elementos que cumplen la condición.
> - Si ningún elemento cumple la condición, retorna un **array vacío `[]`**.
> - **El array original no se modifica**.

<aside>
💡

**Sintaxis e Interpretación**
Usualmente **se coloca la condición que debe cumplir el elemento buscado** en lo que el callback **retorna (return)**.

`filter()` recibe una función de callback que **debe retornar un valor booleano (`true` o `false`)**. 

- Si el callback retorna `true`, significa que el elemento cumple la condición y se agrega al nuevo array.
- Si retorna `false`, no cumplio la condicion y no se agrega al nuevo array.

```jsx
const nuevoArray = array.filter((elemento, indice, array) => {
    // Cuerpo del callback, debe retornar true o false
});
```

</aside>

<aside>
💡

**Diferencia con `map()` y `forEach()`**

- `map()` **transforma** cada elemento y devuelve un nuevo array.
- `forEach()` **itera** sobre los elementos sin devolver un nuevo array.
- `filter()` **filtra** los elementos que cumplen la condición y devuelve un nuevo array.
</aside>

<aside>
💡

**Ejemplo explicativo**

```jsx
const numeros = [5, 8, 12, 20, 7];

const mayoresADiez = numeros.filter(num => num > 10);

console.log(mayoresADiez);
// [12, 20]

```

- `filter()` evalúa cada número:
    - `5 > 10` → ❌ `false`, no se incluye.
    - `8 > 10` → ❌ `false`, no se incluye.
    - `12 > 10` → ✅ `true`, se incluye.
    - `20 > 10` → ✅ `true`, se incluye.
    - `7 > 10` → ❌ `false`, no se incluye.
- Retorna un **nuevo array** con los valores `[12, 20]`.
- **El array original `numeros` no cambia**

**Ejemplo mas avanzado :**

```jsx
const usuarios = [
  { nombre: 'Ana', activo: true },
  { nombre: 'Carlos', activo: false },
  { nombre: 'María', activo: true },
];

const usuariosActivos = usuarios.filter(usuario => usuario.activo);

console.log(usuariosActivos);
```

</aside>

## **Método** `reduce` : Reducción de un array a un solo valor

> **Propósito** : Aplica una función callback a cada elemento del array **para reducirlo a un único valor, que puede ser un número, un array, un objeto, una cadena de texto, etc.**
> 
> 
> **Retorna** :
> 
> - Retorna **un único valor** que resulta de aplicar la función acumuladora a todos los elementos del array.
> - Si el array está vacío y no se proporciona un valor inicial, genera un error.
> - **No modifica el array original**.
> 
> <aside>
> 💡
> 
> El método `reduce`además del callback, puede tomar un segundo argumento opcional conocido como el **valor inicial.**
> 
> </aside>
> 

<aside>
💡

**Sintaxis e Interpretación**

`reduce()` recibe una función de callback que se ejecuta en cada elemento del array y acumula un resultado.

El callback tiene acceso a los siguientes parámetros:

- `acumulador` → El valor acumulado en cada iteración.
- `elemento` → El elemento actual del array.
- `índice` → (Opcional) La posición del elemento en el array.
- `array` → (Opcional) El array completo.

**Importante:** En el método `reduce`, el callback debe retornar el acumulador después de aplicar la operación de reducción a cada elemento del array. Esto es esencial para que `reduce` pueda seguir acumulando los valores a medida que itera sobre el array.

```jsx
const resultado = array.reduce((acumulador, elemento, indice, array) => {
    // Cuerpo del callback
}, valorInicial);
```

### **Segundo Argumento Opcional:** `valorInicial`

> El segundo argumento opcional es el valor inicial que **se usa en la primera iteración**.
> 
- Si se proporciona, **el acumulador se inicializa con este valor**.
- Si no se proporciona, el acumulador se inicializa con el primer valor del array, y **la iteración comienza desde el segundo valor.**
</aside>

<aside>
💡

**Ejemplo explicativo: Suma de elementos**

```jsx
const numeros = [5, 8, 12, 20, 7];

const sumaTotal = numeros.reduce((acumulador, num) => acumulador + num, 0);

console.log(sumaTotal);
// 52

```

**Explicación de las iteraciones:**

1. Inicio: `acumulador = 0` (valor inicial).
2. `0 + 5 = 5`
3. `5 + 8 = 13`
4. `13 + 12 = 25`
5. `25 + 20 = 45`
6. `45 + 7 = 52` → **Devuelve 52**.
</aside>

## **Método** `some` : Validación parcial de elementos en un array

> Propósito : Verifica si al menos un elemento del array cumple con una condición dada.
> 
> 
> Devuelve `true` si **algún elemento** pasa la prueba; `false` si **ninguno** la pasa.
> 

<aside>

**Sintaxis e Interpretación**

```jsx
array.some((elemento, indice, array) => {
    // Condición que se evalúa para cada elemento
});
```

**Retorna** :

- Un booleano: `true` si **algún** elemento cumple la condición, `false` si **ninguno** lo hace.
- Ideal para validaciones rápidas como: “¿Existe al menos un campo vacío?”, “¿Hay algún valor duplicado?”
</aside>

<aside>

**Evaluación corta:** `some()` se detiene en la primera coincidencia que retorne `true`.  
No sigue evaluando el resto del array si ya encontró una válida.

```jsx
const edades = [12, 15, 18, 20];  
const hayAdulto = edades.some(edad => edad >= 18);  
// true (porque hay al menos un 18 o más)
```

</aside>

## **Método** `every` : Validación total de elementos en un array

> Propósito : Verifica si todos los elementos del array cumplen con una condición dada.
> 
> 
> Devuelve `true` solo si **cada uno** pasa la prueba.
> 

<aside>

```jsx
**Sintaxis e Interpretación**
array.every((elemento, indice, array) => {
    // Condición que se evalúa para cada elemento
});
```

**Retorna** :

- Un booleano: `true` si **todos** cumplen la condición, `false` si **al menos uno** no lo hace.
- Útil en formularios o chequeos como: “¿Todos los inputs están completos?”, “¿Todos los valores son numéricos?”
</aside>

<aside>

Evaluación corta: `every()` se detiene en cuanto encuentra el primer `false`.  
No evalúa el resto si ya hay uno que no cumple.

```jsx
const edades = [18, 20, 25];  
const todosMayores = edades.every(edad => edad >= 18);  
// true (porque todos son mayores o iguales a 18)
```

</aside>