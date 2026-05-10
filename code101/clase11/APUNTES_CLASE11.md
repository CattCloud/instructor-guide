## Que es una funcion?

> Las **funciones** en JavaScript **son bloques de código reutilizables que ejecutan una tarea específica.**
> 

## Declaracion o Creacion de una funcion

> Usamos la palabra clave : f**unction
Sintaxis**
> 
> 
> ```jsx
> function nombreDeLaFuncion(parametro1, parametro2) {
>   // Código de la función
> }
> ```
> 
> ![image.png](attachment:373f8ace-9134-4675-86d7-8c6ff3edec2d:image.png)
> 

### Parametros

> **Actúan como "entradas" de la función.**
Son **variables que se declaran dentro de los paréntesis de la definición de la función.**
> 
> 
> ![image.png](attachment:67af9ed3-5d53-4778-a36c-1ed3c501102b:dee686f1-0b24-4260-bc65-f5717b990fcf.png)
> 
> <aside>
> 💡
> 
> JavaScript es un lenguaje de tipado dinámico, **lo que significa que no necesitas indicar el tipo de dato de los parámetros de una función.
> -** El tipo de dato se infiere en tiempo de ejecución según el valor que se le pase como argumento.
> 
> </aside>
> 

## Invocacion o llamada de una funcion

> Significa ejecutar el código que contiene la función
> 
> 
> **Sintaxis para invocar una funcion**
> 
> Para invocar una función, se escribe el nombre de la función seguido de paréntesis `()`, y se pueden pasar los argumentos necesarios dentro de los paréntesis.
> 
> ```jsx
> nombre_Funcion(argumentos);
> ```
> 
> ### Argumentos
> 
> > Son los **valores que se pasan a la función cuando se llama.**
> > 

<aside>
💡

**Ejemplo**

```jsx
function mostrarMensaje(nombre) {
  console.log("Hola, " + nombre + "!");
}

mostrarMensaje("Ana"); // El argumento es una cadena
mostrarMensaje(123);  // El argumento es un número
mostrarMensaje(true); // El argumento es un booleano
```

</aside>

## Palabra clave return : Funciones que retornan valor

> La palabra clave `return` en JavaScript **es fundamental para que las funciones puedan devolver un valor cuando son ejecutadas.
Este valor retornado puede utilizarse en otras partes del código**
> 

<aside>
💡

**Sintaxis**
• `valorDeRetorno`: Puede ser cualquier tipo de dato válido en JavaScript, como un número, una cadena, un booleano, un array, un objeto, etc.

```jsx
function nombreDeLaFuncion(parametro1, parametro2) {
  // Código de la función
  return valorDeRetorno; 
}
```

**Ejemplo**

```jsx
function sumar(a, b) {
  return a + b;
}

let resultado = sumar(5, 3); // Invoca la función sumar y guarda el valor retornado en la variable resultado
console.log(resultado); // Imprime 8
```

</aside>

<aside>
💡

**Nota**

- La palabra clave `return` no solo sirve para devolver un valor, sino que también **controla el flujo de ejecución de una función**, deteniendo su ejecución y evitando que el código que se encuentre después de la instrucción `return` se ejecute.
- Una función en JavaScript puede tener múltiples instrucciones `return`. **Sin embargo, solo se ejecutará una de ellas en cada llamada a la función.** La ejecución de la función se detendrá en la primera instrucción `return` que se encuentre.

**Ejemplo**

```jsx
function validarEdad(edad) {
  if (edad < 18) {
    return false; // Devuelve false si la edad es menor que 18 y termina la función
  }
  return true; // Devuelve true si la edad es mayor o igual a 18
}
```

</aside>

## **Parámetros por defecto**

> Los parámetros por defecto permiten definir un valor predeterminado para un parámetro de una función, de modo que si no se pasa un valor al llamarla, se usará automáticamente ese valor.
> 
- Evitan que los parámetros queden como `undefined`.
- Hacen tu función **más robusta y flexible**, porque funciona bien aunque el usuario no proporcione todos los argumentos.

## **Sintaxis**

> Se asigna el valor por defecto directamente en la definición de parámetros de la funcion, usando el signo =.
> 

### **Cómo funciona**

- Si **se pasa un argumento**, se usa ese valor.
- Si **no se pasa nada** o se pasa `undefined`, se usa el valor por defecto.
- Si se pasa `null`, **NO se usa el valor por defecto**, porque `null` es un valor válido.

```jsx
function nombreFuncion(param1 = valorPorDefecto) {
  // cuerpo de la función
}

```

<aside>

### **Ejemplo**

```jsx
function sumar(a, b = 10) {
  return a + b;
}

console.log(sumar(5, 2));   // 7  (usa 2)
console.log(sumar(5));      // 15 (usa valor por defecto 10)
console.log(sumar(5, null)); // 5  (null NO activa el valor por defecto)

```

</aside>


## Porque necesitamos el DOM?

> Cuando trabajamos con **HTML y CSS**, nuestras páginas web son **estáticas**, lo que significa q**ue su contenido y estructura no cambian sin intervención del usuario.** Sin embargo, al agregar **JavaScript**, podemos hacerlas **dinámicas**, permitiendo:
> 
> - Modificar contenido(HTML y CSS) en tiempo real.
> - Responder a acciones del usuario.
> - Manipular elementos, atributos y estilos.
> - Crear interacciones avanzadas.

<aside>
💡

 **JavaScript utiliza el DOM** como puente o conexión entre el código JS y la estructura HTML. 

</aside>

## Que es DOM?

> Es una **representación estructurada y jerárquica** de un documento HTML en forma de un **árbol de nodos**.
> 

![image.png](attachment:7b9090c8-72c1-4917-9275-0bcb8c4dbc6a:image.png)

- **Cada elemento del HTML es un nodo del DOM:**
    
    > Se **visualiza el documento de HTML como un árbol de nodos.
    Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol de nodos relacionados entre si (padre-hijo).**
    > 
    
    <aside>
    💡
    
    **Ejemplo** 
    
    Representaremos este codigo a version DOM
    
    ```jsx
    <!DOCTYPE html>
    <html>
    <head>
        <title>Ejemplo DOM</title>
    </head>
    <body>
        <h1>Hola, DOM</h1>
        <p>Este es un párrafo.</p>
    </body>
    </html>
    ```
    
    ![image.png](attachment:b366c530-48ec-4bf9-b479-cd8fd32a6d47:image.png)
    
    </aside>
    
- **El DOM es un arbol de objetos**
    
    > **Cada nodo es un objeto, por eso es un árbol de objetos**
    > 
    
    <aside>
    💡
    
    **Ejemplo 
    Los nodos elemento** es un nodo objeto que representa un elemento HTML, como objetos tendrán sus propiedades y métodos.
    
    </aside>

## El objeto `document`: La puerta de entrada al DOM

> Es el nodo raíz del árbol del DOM y **representa el documento HTML en su conjunto**.
> 

![image.png](attachment:cfbe2621-6f92-4522-87f3-f611246d1b84:image.png)

<aside>

### Porque que usamos el DOM?

La forma de acceder al DOM es a través del objeto `document` , que representa el árbol DOM de la página o, más concretamente, **la página de la pestaña del navegador donde nos encontramos.**  
**Porque?**
Porque todos los demás nodos se encuentran dentro del nodo de documento `document` . En el interior de `document` podemos acceder a los demas elementos del **DOM**

</aside>

## Objeto **`document`**: Punto de partida

> Para interactuar con el DOM partiremos usando el objeto **document** para realizar diversas acciones, como buscar elementos, crear nuevos elementos, modificar el contenido existente, agregar eventos y muchas otras operaciones.
> 
> 
> <aside>
> 💡
> 
> Usaremos los métodos y propiedades del objeto `document` para **manipular y controlar el DOM** (Document Object Model).
> 
> </aside>
> 

## Introducción

> Para interactuar con un elemento, primero debemos **buscarlo y** **capturarlo** en JavaScript.
**Capturar un elemento del DOM** significa obtener una **referencia en JavaScript a un elemento HTML** para poder **leer o modificar su contenido, atributos o estilos.**
> 
> 
> <aside>
> 💡
> 
> Los mas común es capturar el nodo elemento y almacenarlo en una variable para su uso(recuerda que es un objeto) 
> 
> </aside>
> 
> Para lograr existen diferentes método de `document`.
> 

## 1. Como seleccionar o capturar Elementos del DOM

> 
> 
> 
> 

<aside>
💡

Ejemplo

**HTML**

```jsx
<h1 id="titulo">Hola, DOM</h1>
<p class="parrafo">Este es un párrafo.</p>
<p class="parrafo">Este es otro párrafo.</p>
```

**Javascript : Seleccion** 

```jsx
let titulo = document.getElementById("titulo");
let parrafos = document.getElementsByClassName("parrafo");

console.log(titulo); // <h1 id="titulo">Hola, DOM</h1>
console.log(parrafos); // HTMLCollection con los párrafos
```

</aside>

## `getElementById(”id”)` : Capturar un elemento usando su id

> Busca un elemento único usando su **ID y lo retorna**  
**Retorna**: Un solo elemento (o **null** si no se encuentra).
> 

<aside>

**Sintaxis** 

El id se pasa como un string

```jsx
document.getElementById("id_dentro_de_comillas")	
```

</aside>

## **`getElementsByClassName(”class”)` : Capturar un elemento usando la clase**

> Busca todos los elementos **con la clase especificada y los retorna
Retorna:**  Una colección **HTMLCollection** de elementos encontrados
> 

<aside>

**Sintaxis** 

La clase se pasa como un string

```jsx
document.getElementsByClassName("clase")	
```

</aside>

## `getElementsByTagName()` : Capturar un elemento segun la etiqueta HTML

> Busca todos los elementos del **tipo de etiqueta específico** (`p`, `div`, `h1`, etc.) y los retorna.
**Retorna**: Una colección **HTMLCollection** de elementos encontrados
> 

<aside>

**Sintaxis** 

La clase se pasa como un string

```jsx
document.getElementsByTagName("nombre_etiqueta");	
```

</aside>


## `textContent`:Acceso al contenido de texto del elemento

> Propiedad que **hace referencia al texto del elemento** 
Accedemos al texto para **leer o modificarlo**
> 

<aside>

**Sintaxis** 

Luego de capturar el elemento

```jsx
//1. Capturo el elemento
let miElemento= document.getElementById("elemento");  
//2. Accedo al texto 
miElemento.textContent= "nuevo valor del texto";	
```

</aside>

<aside>

**Ejemplo**

```html
<p id="miParrafo">Este es un párrafo.</p>
```

```jsx
const parrafo = document.getElementById("miParrafo");
console.log(parrafo.textContent); //Imprime el contenido de texto del elemento
parrafo.textContent = "Este texto reemplaza el conteniPdo anterior";//Esto automaticamente modifica el texto

```

</aside>

## Que es un evento?

<aside>
📌

**Introducción**
Hay situaciones en las que necesitamos realizar una determinada acción cuando ocurra un determinado caso.

</aside>

> Un **evento** es una señal de que algo ha ocurrido en la página web
Son **acciones** o **sucesos** que **ocurren en el navegador**
> 
> 
> → Un clic, el paso del mouse, una tecla presionada, una carga de página, un envío de formulario, etc.
> 

<aside>
📌

**Estos eventos pueden ser generados por:**

- **Eventos generados por el usuario :** como hacer clic en un elemento, mover el cursor del ratón o presionar una tecla
- **Eventos generados por el propio navegador :** como cargar una página o cambiar el tamaño de la ventana.
</aside>

## Componentes clave de un evento

| Componente | Explicación |
| --- | --- |
| **Evento** | Acción que ocurre (click, keydown, submit, etc.) |
| **Manejador (handler)** | Función que se ejecuta **cuando el evento ocurre** |
| **Elemento (Target)** | El **nodo del DOM donde ocurre el evento.**
Elemento al que se le asigna el evento (como un botón, input, etc.) |
| **Objeto del evento** | Información adicional sobre el evento (tipo, coordenadas, tecla, etc.) |

## Event Listeners o Escuchador de Eventos

> Un escuchador de eventos permite a un elemento **"escuchar"** un evento específico y **ejecutar** una función cuando ese evento ocurre.
> 

<aside>
📌

### Porque usamos Escuchadores de Eventos?

> El objetivo es preparar nuestro código para que **cuando ocurra un determinado evento**, se lleve a cabo una **funcionalidad asociada**.
> 
1. El código se dedica a esperar a que el usuario *"**haga algo**"* (que pulse una tecla, que mueva el ratón, que cierre la ventana del navegador). 
2. A continuación, el código responde a la acción del usuario normalmente procesando esa información y ejecuta una funcion para producir un resultado.

![image.png](attachment:6582204e-e815-4648-b94c-18188ea9b33c:image.png)

</aside>

## Método addEventListener : Forma recomendable de asignar un escuchador de eventos

> Es la forma mas común de asignar Event Listeners a un elemento del DOM
> 
> - **Permite múltiples escuchadores de eventos en un mismo elemento**, sin sobrescribir anteriores.
> - **Mayor flexibilidad**, ya que puedes usar diferentes tipos de eventos (`click`, `mousemove`, `keydown`, etc.).
> - Permite especificar qué función o código se ejecutará cuando ocurra el evento.

<aside>

**Sintaxis** 

```jsx
elemento.addEventListener("evento", manejador);
```

- **evento**: tipo de evento, como "click", es el tipo de evento que escuchara el event listener
- **elemento**: Elemento HTML al cual se le asigna el escuchador de eventos
- **manejador(handler)**: función que se ejecuta cuando ocurre el evento

Usualmente los manejadores son funciones flechas.

**Ejemplo** 

```jsx
<button id="miBoton">Haz clic</button>

const boton = document.getElementById("miBoton");

boton.addEventListener("click", function () {
    alert("¡Hiciste clic!");
});
```

</aside>

## Objeto evento

<aside>

La función que se ejecuta cuando ocurre un evento en JavaScript puede recibir por defecto un parámetro llamado ***event***  (o simplemente **e**, si lo prefieres abreviar)

```jsx
elemento.addEventListener("evento", function(event) {
    // Código para manejar el evento
});
```

> **El objeto event** contiene información sobre el evento que ocurrió, lo que te permite interactuar con él y manejarlo de manera más precisa.
> 
- El objeto  representa al evento que se produjo y **ofrece una serie de propiedades y métodos** que brindan detalles y control sobre el evento. 
Es muy útil para:
    - Saber qué elemento desencadenó el evento, etc.
    - Implementarle metodos de propagacion.
</aside>

### **Funcion anonima o sin nombre**

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