# Funciones como expresión

## Las Funciones son Tipos de Datos

> En JavaScript, las funciones son tipos de datos ,  lo que significa que:
> 
> 
> ✔️ Se pueden asignar a variables.
> 
> ✔️ Se pueden pasar como argumentos a otras funciones.
> 
> ✔️ Se pueden retornar desde otras funciones.
> 

## Expresiones de Funcion

> Es una funcion que se define dentro de una expresion.
> 

### Caracteristicas

- **Opcional** : Pueden asignarse a una variable
- **Opcional :** Puede tener nombre
- **No puede ser invocadas antes de su declaracion**

### **Expresion de funcion asignada a una variable**

> Usamos la variable para reutilizar la funcion o referenciarla mas de una vez, **la variable actua como referencia de la funcion**
> 

<aside>
💡

**Sintaxis**

```jsx
let variable = function nombre_opcional(parametros) {
  /*Codigo funcion*/
};
```

</aside>

### Invocacion de una e**xpresion de funcion asignada a una variable**

> Básicamente, llamas a la variable como si fuera una función.
> 

<aside>
💡

**Sintaxis**

```jsx
let variable = function nombre_opcional(parametros) {
  /*Codigo funcion*/
};

/*Invocacion*/
variable(argumentos de la expresion de funcion);
```

</aside>

### **Expresion de funcion nombrada**

> Se define un nombre de funcion **cuando necesitas que la función se refiera a sí misma internamente**, como en casos de recursividad.
Su uso no es tan comun y usualmente se asignan a una variable para reutilizarlas
> 

<aside>
💡

**Sintaxis**

```jsx
function nombre_funcion(parametros) {
  /*Codigo funcion*/
};

/*Asignando a una variable*/
let variable=function nombre_funcion(parametros) {
  /*Codigo funcion*/
};
```

</aside>

### **Expresion de funcion anonima o sin nombre**

> Se define cuando deseas definir rápidamente una función que **se usará una sola vez o de manera temporal.**
> 
> - Las expresiones de funciones anónimas son **frecuentemente utilizadas como argumentos en otras funciones.**

<aside>
💡

**Sintaxis**

```jsx
function (parametros) {
  /*Codigo funcion*/
};
```

</aside>

## Funciones Flecha : Arrow Functions

> Las funciones flecha (arrow functions) son, de hecho, **son expresión de funciones anónimas.**
> 
> - No tienen nombre propio
> - **Opcional** : Se pueden asignar a una variable
> - **Se definen dentro de expresiones**, como cuando se almacenan en variables o se pasan como argumentos.

<aside>
💡

**Uso**
Una buena práctica es utilizar funciones tradicionales como las funciones de primer nivel y, luego, en su interior o en metodos como `map`, `filter`, y `reduce`, utilizar funciones flecha.

</aside>

### Sintaxis

> La sintaxis de las funciones flecha varía ligeramente **según la cantidad de argumentos que reciben  y el cuerpo de la función**.
Básicamente, se trata de **reemplazar eliminar la palabra function y añadir => antes de abrir las llaves.**
> 
> 
> ![image.png](image.png)
> 

### Cuerpo de la funcion flecha sin importar la cantidad de argumentos

- **Una linea  () => expresion**
    
    > Si solo hay una linea, no es necesario usar `{}`
    Si dicha unica linea es un valor de retorno (`return`) , se omite el return y se sobreentiende que la expresión después del `=>` se considera el valor de retorno de la función
    > 
    
    ```jsx
     ****Definicion segun la cantidad de parametro **=> expresion ;**
    ```
    
- **Multiples lineas**
    
    > Si hay más de una línea en el cuerpo, se usan `{}` y `return` si se necesita devolver un valor.
    > 
    
    ```jsx
    Definicion segun la cantidad de parametro **=> {
    		cuerpo de la funcion
    };**
    ```
    

### Sin argumentos

> **Los paréntesis son obligatorios.**
> 

```jsx
**() => cuerpo de la funcion sgn la cantidad de lineas

const saludar = () => console.log("¡Hola, mundo!");

const obtenerMensaje = () => {
    let mensaje = "Hola desde una función flecha";
    return mensaje;
};**
```

### Con un solo parámetro (`param => {}`)

> Si hay un solo parámetro, **los paréntesis alrededor del argumento son opcionales.**
> 

```jsx
**argumento => cuerpo de la funcion sgn la cantidad de lineas
 
const alCuadrado = n => n * n;

const mostrarMensaje = mensaje => {
    console.log("Mensaje recibido:");
    console.log(mensaje);
};**
```

### Con 2 o mas parámetros (`(param1, param2) => {}`)

> Cuando hay más de un parámetro, **los paréntesis son obligatorios**.
> 

```jsx
**(argumentos) => cuerpo de la funcion sgn la cantidad de lineas

 
const sumar = (a, b) => a + b;

const multiplicar = (a, b) => {
    let resultado = a * b;
    return resultado;
};**
```

### Caso excepcion: Cuando la funcion retorna un objeto implicito (`() => ({objeto})`)

> Si la función retorna un **objeto literal**, se deben usar paréntesis alrededor de `{}` para evitar confusión con el cuerpo de la función.
> 

```jsx
Definicion segun la cantidad de parametro **=> ({objeto}) ;**

const crearUsuario = (nombre, edad) => { nombre: nombre, edad: edad }; 

```

## **¿Cómo llamar a una función dentro de otra función?**

> Puedes declarar una función dentro de otra y luego **invocarla dentro del cuerpo de la función principal**.
> 

<aside>
💡

**Ejemplo: Función dentro de otra función**

```jsx
function saludar(nombre) {
	function mensaje() {
		return Hola, ${nombre}!;
	}
	return mensaje(); // Se invoca dentro de la función principal
}

console.log(saludar("Erick")); // "Hola, Erick!"
```

💡 **Conclusión:** Puedes llamar la función interna dentro de la función principal. También puedes retornarla y usarla externamente.

</aside>