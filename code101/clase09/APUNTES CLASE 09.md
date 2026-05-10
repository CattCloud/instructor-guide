#  ENTRADA Y SALIDA DE DATOS

## Introduccion

> JavaScript ofrece varias maneras de manejar la entrada y salida de datos
**Las más comunes  y basicas** para entornos de desarrollo y aprendizaje son `console.log()` para la **salida** y `prompt()` para la **entrada**
> 

## **Salida:** console.log()

> Salida **significa mostrar datos**  
**console.log()** es una **función** muy útil en JavaScript **para mostrar información en la consola del navegador** (o en un entorno de Node.js).
> 

<aside>
💡

**Sintaxis** 

```jsx
**console.log(lo que desea visualizar en consola);**
```

</aside>

## Entrada : prompt()

> Entrada: **significa ingresar datos**
`prompt()` es una **funcion** que **muestra un cuadro de diálogo al usuario solicitando que introduzca un valor.**
> 
> 
> **Retorna** : El valor ingresado por el usuario se retorna como una **cadena de texto.**  
> 
> <aside>
> 💡
> 
> **Sintaxis** 
> Una variable recibe el valor de la funcion
> `mensaje` es una cadena de texto que se mostrará al usuario en el cuadro de diálogo.
> 
> ```jsx
> let entrada = prompt(mensaje);
> ```
> 
> **Ejemplo** 
> 
> ```jsx
> let nombre = prompt("Por favor, introduce tu nombre:");
> console.log("Hola, " + nombre + "!");
> ```
> 
> </aside>
> 

## Mostrar mensajes: funcion alert()

> `alert()` es una función que **muestra un cuadro de diálogo modal con un mensaje al usuario.** 
Este cuadro de diálogo bloquea la interacción con el resto de la página web hasta que el usuario lo cierra haciendo clic en el botón "Aceptar".
**Sintaxis**
> 
> 
> ```jsx
> alert(mensaje que deseas mostrar);
> ```
> 

---
# CONCATENACION

## Objetivo de la concatenacion de variables

> Unir cadenas de texto (strings) y/o variables para formar una cadena de texto única.
> 

## Metodo de concatenacion : Usando **Operador de concatenación `+`**

> Esta es la forma más básica y tradicional de concatenar. 
Requiere concatenar explícitamente cada parte de la cadena, textos y/o las variables, usando el operador `+`
> 

<aside>
💡

**Sintaxis Ejemplo**

```jsx
let texto1 = "Hola";
let texto2 = " mundo";
let textoCompleto = texto1 + texto2 + "de Dios";  // textoCompleto será "Hola mundo"
```

</aside>

## Metodo de concatenacion : Uso de plantillas literales

> Son una forma más flexible y legible de concatenar cadenas de texto en JavaScript. 
**Se usan backticks o comillas invertidas (`)** **en lugar de comillas simples o dobles **para formar la cadena unica.**
> 
> - **Como insertar una variable dentro de la cadena unica?**
>     
>     > Para insertar una variable dentro de la cadena, puedes usar la sintaxis **${variables}**
>     > 
>     > 
>     > <aside>
>     > 💡
>     > 
>     > Puedes insertar cualquier expresión válida de JavaScript dentro de las llaves `${}`. Esto incluye variables, operaciones aritméticas, funciones, etc.
>     > 
>     > </aside>
>     > 
> 
> **Ejemplo**
> 
> ```jsx
> let nombre = "Ana";
> let edad = 25;
> 
> let saludo2 = `Hola, ${nombre}! Tienes ${edad} años.`;
> console.log(saludo2); // Imprime: Hola, Ana! Tienes 25 años.
> ```
>


---
# Variables y Constantes en JS

## JS un lenguaje Dinámico

> JavaScript es un lenguaje de programación de **tipado dinámico**, lo que significa que **las variables no están limitadas a un tipo de dato específico cuando se declaran.**
> 

<aside>
💡

En otras palabras, **una misma variable puede almacenar diferentes tipos de datos a lo largo del programa.
Ejemplo**

```jsx
let dato = 42;       // Inicialmente un número
dato = "Hola";       // Ahora una cadena de texto
dato = true;         // Ahora un booleano|
```

</aside>

## **Tipos de Variables en JavaScript**

> Existen **tres formas principales** de declarar variables en JavaScript:
> 
> - **var**
> - **let**
> - **const**
> 
> Cada una de estas tienen diferencias importantes en su **alcance** (scope) y **comportamiento**.
> 

| **Característica** | **var** | **let** | **const** |
| --- | --- | --- | --- |
| **Ámbito (Scope)** | Función (function scope) | Bloque (`{}`) | Bloque (`{}`) |
| **Redeclarable** | ✅ Sí | ❌ No | ❌ No |
| **Reasignable** | ✅ Sí | ✅ Sí | ❌ No |
| **Hoisting** | ✅ Se eleva pero con `undefined` | ✅ Se eleva pero sin inicialización | ✅ Se eleva pero sin inicialización |
| **Uso recomendado** | ❌ No recomendado (puede causar errores sutiles) | ✅ Uso flexible en variables cambiantes | ✅ Ideal para valores constantes e inmutables |

<aside>

<aside>
💡

### No es recomendable usar var , debes usar let y const

> No se recomienda usar **var** porque su ambito es impredecible y la redeclaracion pueden generar errores sutiles.
> 
</aside>

**¿Por qué evitar `var`?**

- Puede generar **comportamientos inesperados** debido al **hoisting**.
- La **redeclaración sin restricciones** puede causar **errores difíciles de rastrear**.
- **Mejor usar `let` y `const`** según el caso.
</aside>

### var

- **Redeclaración**
    
    > Permite **redeclarar la misma variable varias veces dentro del mismo alcance.**
    > 
    > 
    > ![image.png](image.png)
    > 
- **Reasignable**
    
    > Permite **reasignar su valor después de la declaración.**
    > 

### let

- **No Redeclaración :** No permite redeclarar la misma variable `let` dentro del mismo bloque de código.
- **Reasignación:** Permite reasignar el valor de la variable

### const

> Se utiliza para declarar constantes.
> 
> 
> <aside>
> 💡
> 
> **Importante:** Deben ser inicializadas en el momento de su declaración y su valor no puede cambiar después de su inicialización
> 
> </aside>
> 
> <aside>
> 💡
> 
> Una buena práctica es **escribir el nombre de la constante en mayúsculas, para identificar rápidamente que se trata de una constante** y no una variable.
> 
> </aside>
> 
- **Alcance:** Igual que `let`, `const` tiene **alcance de bloque.**
- **No redeclarable , ni reasignable : Error en caso le reasignemos un nuevo valor**

## Que es un Ambito de Variable (Scope)

> El **ámbito** de una variable es la **zona del código en la que dicha variable es accesible o existe**
> 

### **Tabla de los tipos de Scope y las variables que los siguen**

| **Tipo de Scope** | **Descripción** | **Se aplica a...** |
| --- | --- | --- |
| **Global Scope** | Variable accesible en cualquier parte del código. | `var`, `let`, `const` (si se declaran fuera de funciones o bloques) |
| **Function Scope** | Variable solo accesible dentro de la función donde se declara. | `var`, `let`, `const` |
| **Block Scope** | Variable solo accesible dentro del bloque `{}` donde se declara. | `let`, `const` (⚠️ `var` **NO respeta** el bloque) |

### **Ambito Global**

> **Accesible desde cualquier parte del código.**
Son las variables que están **declaradas en el ámbito más amplio o externo posible**, que en Javascript es la pagina web.
Variables con este ambito **son declaradas fuera de cualquier función o bloque de codigo definidos con llaves** {}
> 

<aside>

**Ejemplo**

```jsx
let globalVar = "Soy accesible en todo el script";

function ejemplo() {
  console.log(globalVar); // ✅ Accede sin problemas
}
console.log(globalVar); // ✅ Funciona fuera de la función
```

</aside>

<aside>
💡

**Una variable con ámbito global *no* puede ser *declarada* dentro de una función.** 
Si una variable  está declarada dentro de una función, pasa a ser de ambito local a esa función , es decir la variable local *sombrea* (oculta) a la variable global dentro del cuerpo de la función.

```jsx
let variableGlobal = "Soy global";

function miFuncion() {
  let variableGlobal = "Soy local (y oculto a la global)"; // variable local que SOMBREA la global
  console.log(variableGlobal); // Imprime "Soy local (y oculto a la global)"
}

miFuncion();
console.log(variableGlobal); // Imprime "Soy global" , vuelve a ser de ambito global
```

</aside>

### **Ambito local**

> Estas variables son **declaradas dentro de una función o bloque  y solo puede ser usada dentro de ese contexto**
> 

<aside>
💡

Cuando se declaren variables locales **sólo podremos acceder a ellas dentro del lugar donde se ha declarado**, es decir, **si la habíamos declarado en una función solo podremos acceder a ella cuando estemos en esa función.**

</aside>

### Ambito de funcion

> La variable solo **existe dentro de la función** en la que fue declarada
Se crean al iniciar una función y se eliminan automáticamente al finalizarla.
> 

<aside>

**Ejemplo**

```jsx
function ejemplo() {
  let funcionVar = "Solo existo aquí";
  console.log(funcionVar); // ✅ Accesible dentro de la función
}
console.log(funcionVar); // ❌ Error: No existe fuera de la función
```

</aside>

### Ambito de bloque

> La variable **solo existe dentro del bloque `{}` en el que fue declarada**.
> 

<aside>

**Ejemplo**

```jsx
if (true) {
  let bloqueVar = "Soy local al bloque";
  console.log(bloqueVar); // ✅ Accesible dentro del bloque
}
console.log(bloqueVar); // ❌ Error: No existe fuera del bloque
```

</aside>

## **Declaracion e Inicializacion de variables**

> Para usar variables en JavaScript, primero debemos **crearlas**, es decir, **declararlas**. Para ello, usamos las palabras claves `var`, `let`, o `const`.
**Inicializacion** es asignar un valor a la variable por primera vez.
> 

![image.png](image%201.png)

## **Explicación sobre `const` en arrays y objetos**

> En estos casos `const` **no impide modificar el contenido**, solo **evita que la referencia del array u objeto cambie**.
> 
> 
> ✅ Puedes **agregar, eliminar o modificar elementos** de un array o propiedades de un objeto, pero **no reasignar el array u objeto completamente**.
> 

**Ejemplo con Arrays:**

```jsx
const numeros = [1, 2, 3];
numeros.push(4); // ✅ Se permite modificar contenido
numeros[0] = 10; // ✅ Se puede cambiar un elemento específico
numeros = [5, 6, 7]; // ❌ Error: No se puede reasignar un nuevo array

```

**Ejemplo con Objetos:**

```jsx
const persona = { nombre: "Erick", edad: 25 };
persona.edad = 26; // ✅ Modificación permitida
persona.pais = "Perú"; // ✅ Se pueden agregar nuevas propiedades
persona = { nombre: "Carlos" }; // ❌ Error: No se puede reasignar un nuevo objeto
```

---
# Tipos de Datos Primitivos

## Sintaxis para crear una variable

<aside>
💡

**Variable sin definir el valor**

```jsx
	var nombreVariable; 
```

**Variable definiendo el valor**

```jsx
var nombreVariable = valor;
const NOMBREVARIABLE = valor;
```

</aside>

<aside>
💡

**JS es un lenguaje dinamico**
Cuando creamos una variable, **no es necesario indicarle el tipo de dato que va a contener.** **El lenguaje de programación se encargará de deducir el tipo de dato (*dependiendo del valor que le hayamos asignado*).**   

</aside>

## **Datos primitivos de JavaScript**

> Los datos primitivos **son los tipos de datos más básicos que no tienen métodos ni propiedades**.
> 

### number

> Representa valores numéricos, ya sean enteros o de punto flotante. Ejemplo: 42, 3.14
> 

### string

> Valores de texto o cadenas de caracteres , **Se puede escribir utilizando comillas simples o dobles.** Ejemplo: 'Hola', "Mundo".
> 

### boolean

> Representa un valor verdadero o falso. **Los dos posibles valores son true (verdadero) y false (falso).**
> 

### Diferencia entre undefined y null

### undefined

> **Es un tipo de dato
Significa:** "No se ha asignado ningún valor a esta variable".
Una variable declarada pero sin asignarle un valor explícito tendrá el valor `undefined`.
> 
> 
> ```jsx
> let miVariable; // miVariable tiene el valor undefined
> console.log(miVariable); // Imprime undefined
> ```
> 

### null

> **Es un valor que se puede asignar a una variable, no es un tipo de dato
Significa:** "La variable representa intencionalmente la ausencia de un valor".
 Se usa para indicar explícitamente que **una variable no apunta a ningún objeto.**
> 
> 
> ```jsx
> let persona = null; // persona no apunta a ningún objeto
> console.log(persona); // Imprime null
> ```
> 

## **Operador typeof : Conocer el tipo de dato de una variable**

<aside>
💡

**El operador typeof solo funciona para tipos de datos primitivos**

</aside>

<aside>
💡

**Sintaxis
Retorna:** El operador typeof **devuelve una cadena de texto** que indica el tipo de dato de la variable. 

```jsx
typeof variable;
```

</aside>

![image.png](image%202.png)
---
# Operadores JS

## **Estructura basica operadores**

![image.png](image%203.png)

## Operadores Aritmeticos

| **Nombre** | **Operador** | **Descripción** |
| --- | --- | --- |
| **Suma** | `a + b` | Suma el valor de `a` al valor de `b`. |
| **Resta** | `a - b` | Resta el valor de `b` del valor de `a`. |
| **Multiplicación** | `a * b` | Multiplica `a` por `b`. |
| **División** | `a / b` | Divide `a` entre `b`. |
| **Módulo** | `a % b` | Devuelve el resto de la división de `a` entre `b`. |
| **Exponenciación** | `a ** b` | Eleva `a` a la potencia de `b`. Equivalente a `Math.pow(a, b)`. |

## **Operadores de Asignación**

### Operador de asignacion basica: Operador =

<aside>
💡

**Sintaxis**

**Funcion: Asigna el valor a la variable**

```jsx
variable = valor;
```

</aside>

### Tabla de operadores de asignacion

| **Nombre** | **Operador** | **Descripción** |
| --- | --- | --- |
| **Asignación** | `c = a + b` | Asigna el valor de la parte derecha (en este ejemplo, una suma) a `c`. |
| **Suma y asignación** | `a += b` | Es equivalente a `a = a + b`. |
| **Resta y asignación** | `a -= b` | Es equivalente a `a = a - b`. |
| **Multiplicación y asignación** | `a *= b` | Es equivalente a `a = a * b`. |
| **División y asignación** | `a /= b` | Es equivalente a `a = a / b`. |
| **Módulo y asignación** | `a %= b` | Es equivalente a `a = a % b`. |
| **Exponenciación y asignación** | `a **= b` | Es equivalente a `a = a ** b`. |

## **Operadores de Comparación**

> **Usados para comparar valores .**
 Estas expresiones de comparación **devuelven o retornan un booleano con un valor de true o false.**
> 

| **Operador** | **Descripción** | **Ejemplo** |
| --- | --- | --- |
| `==` | Compara si dos valores son iguales (sin verificar tipo). | `5 == "5"` → `true` |
| `===` | Compara si dos valores son estrictamente iguales (incluyendo tipo). | `5 === "5"` → `false` |
| `!=` | Compara si dos valores son diferentes (sin verificar tipo). | `5 != "5"` → `false` |
| `!==` | Compara si dos valores son estrictamente diferentes (incluyendo tipo). | `5 !== "5"` → `true` |
| `>` | Compara si el valor de la izquierda es mayor que el de la derecha. | `10 > 5` → `true` |
| `<` | Compara si el valor de la izquierda es menor que el de la derecha. | `2 < 8` → `true` |
| `>=` | Compara si el valor de la izquierda es mayor o igual que el de la derecha. | `7 >= 7` → `true` |
| `<=` | Compara si el valor de la izquierda es menor o igual que el de la derecha. | `4 <= 4` → `true` |

## **Operadores Lógicos**

> Se utilizan para **combinar y evaluar expresiones lógicas. Retornan un  booleano con un valor de true o false.**
> 

![image.png](image%204.png)

<aside>
💡

### En JavaScript, se consideran valores false (falsos) los siguientes:

- `false`: El valor booleano `false`.
- `0`: El número cero.
- `""`: La cadena vacía.
- `null`: El valor nulo.
- `undefined`: El valor indefinido.
- `NaN`: Not a Number.
</aside>

### Evaluacion de la operacion logica

> Se **evalua la expresion desde el lado del primer operador**,**si es necesario analiza el segundo operador** sino no lo analiza 
Esto significa que **la segunda expresión solo se evalúa si es necesario para determinar el resultado.**
> 
- **`&&`:** Si la primera expresión es `false`, la segunda no se evalúa ya se sabe que el **resultado total es false.**
- **`||`:** Si la primera expresión es `true`, la segunda no se evalúa , el **resultado total es true.**

### AND logico

> **Condición:**
> 
> 
> Si ambos operandos son verdaderos, **se devuelve el segundo valor.** 
> **Si el primer valor es false, devuelve ese valor.** 
> 
> <aside>
> 💡
> 
> **Ejemplos**

> ![image.png](image%205.png)
> 
> </aside>
> 

### OR logico

> **Condicion:** 
Devuelve el primer valor si es verdadero. Si ambos operandos son falsos, devuelve el segundo operando.
> 

<aside>
💡

### Valores por defecto a las variables

> **Los operadores OR puede ser útil para asignar valores por defecto(En este aspecto es mas usado que el AND)** 
Usando la condicion de OR podemos establacer valores por defecto a una variable
> 

**Ejemplos** 

```jsx
let name = null;
let userName = name || "Unknown name"; //El primer valor es null osea falso, evalua el segundo y como es true recibe ese valor
console.log(userName); // Imprime "Unknown name"
```

</aside>

## Expresiones JS

> **Una expresión *produce* un valor**
En JavaScript, es **una combinación de valores, variables, operadores y llamadas a funciones que produce un resultado**.
> 

<aside>

📌 **Tipos de expresiones en JavaScript:**

✅ **Expresiones aritméticas** → Operaciones matemáticas (`2 + 2`, `a * b`).

✅ **Expresiones de asignación** → Asignan valores a variables (`let x = 10`).

✅ **Expresiones lógicas** → Devuelven `true` o `false` (`a > b`, `x === y`).

✅ **Expresiones de función** → Funciones que devuelven un resultado (`const sumar = (a, b) => a + b`).

✅ **Expresiones de cadena (string)** → Concatenación (`'Hola' + ' Mundo'`).

</aside>

---
# 📜 Formas de Incrustar JavaScript en HTML

## **¿Dónde se puede escribir JavaScript en HTML?**

Existen tres formas principales:

1. **Directamente en una etiqueta HTML** (no recomendado).
2. **Dentro de una etiqueta `<script>` en el HTML** (muy utilizado).
3. **En un archivo externo `.js`** (la mejor práctica).

<aside>
💡

Siempre que sea posible, usar archivos externos `.js` es la mejor práctica para organizar, mantener y reutilizar el código JavaScript. Solo se recomienda usar las etiquetas `<script>` directamente en el HTML para código muy pequeño y simple, y nunca usar JavaScript directamente en atributos HTML.

</aside>

## Método 1: Código en línea (dentro de atributos HTML)

> **Se usa directamente dentro de un atributo `onclick`, `onmouseover`, etc.
Cuándo usarlo:** Para pruebas rápidas o eventos simples.
> 
> 
> ```jsx
> //Ejemplo
> <button onclick="alert('¡Hola desde una etiqueta!')">Haz clic aquí</button>
> ```
> 

## Metodo 2:  **Dentro de una etiqueta `<script>` en el HTML**

> Se escribe el código JavaScript entre las etiquetas `<script>` y `</script>`. 
**Buena práctica:** Colocar `<script>` al **final del** `</body>`
> 
> 
> ```jsx
> <body>
>     <h1>Bienvenido</h1>
>     
>     <script>
>         console.log("Este código se ejecuta cuando el HTML ya está cargado.");
>     </script>
> </body>
> ```
> 
> <aside>
> 💡
> 
> - 
>     - **Dificultad para reutilizar el código en otras páginas:** Se debe copiar el código `<script>` a cada página donde se necesite.
> </aside>
> 

## **Flujo de ejecucion**

**Script síncrono:**

1. **Análisis detenido:** Cuando el navegador encuentra una etiqueta `<script>`  sin el atributo `src` (es decir, con código JavaScript incrustado), **el análisis del HTML se detiene.**
2. **Ejecución inmediata:** El navegador ejecuta inmediatamente el código JavaScript dentro de la etiqueta `<script>`.
3. **Continuación del análisis:** Una vez que se completa la ejecución del código JavaScript, el navegador continúa analizando el resto del HTML.
4. **Importancia de la posición:** La posición de la etiqueta `<script>` en el documento HTML importa en este caso. Si se coloca antes de elementos HTML que el script necesita manipular, el script podría intentar acceder a esos elementos antes de que estén disponibles en el DOM (Document Object Model), lo que resultará en errores.

## Método 3: Código en un archivo externo (`.js`) - Recomendacion

> Considerado el mejor metodo, los pasos para lograrlo son:
> 
> 1. Se crea un archivo separado con extensión `.js` que contiene el código JavaScript.
> 2. Luego, se incluye este archivo en el HTML usando la etiqueta `<script>` con el atributo `src`.
> 
> ![image.png](image%206.png)
> 

### **Atributo src**

> Especifica la URL del archivo JavaScript externo que se debe cargar. Es el atributo **obligatorio** cuando se carga un script desde un archivo externo
> 

### **Flujo de ejecucion**

**Script síncrono:**

1. **Descarga y análisis detenido:** Cuando el navegador encuentra una etiqueta `<script>` con el atributo `src` , el análisis del HTML se detiene. El navegador comienza a descargar el archivo JavaScript especificado por la URL en el atributo `src`.
2. **Ejecución tras la descarga:** Una vez que el archivo JavaScript se ha descargado completamente, el navegador lo analiza y ejecuta el código. **Este paso también bloquea el análisis del HTML.**
3. **Continuación del análisis:** Después de que se haya completado la ejecución del script, el navegador continúa analizando el resto del documento HTML.
4. **Importancia de la posición:** La posición de la etiqueta `<script>` sigue siendo crucial. **Si el script necesita acceder a elementos HTML que aparecen más adelante en el documento, podría fallar porque esos elementos aún no existirían en el DOM cuando se ejecuta el script.**

## Que pasa si incrusto 2 o mas archivos externos js?

> **El orden importa**
Cuando **tienes varios archivos JavaScript externos que quieres incluir en tu HTML**, **el orden en que los incluyes es crucial**, ya que determina el orden de ejecución del código. 
HTML ejecuta el código JavaScript en el orden en que aparecen las etiquetas `<script>` en el documento.
> 

### Importancia de orden

El orden es importante porque:

- **Dependencias:** Si un script depende de variables o funciones definidas en otro script, debe incluirse *después* del script que define esas dependencias. Si se invierte el orden, se producirá un error.
- **Variables globales:** Si un script define variables globales que son utilizadas por otro script, debe incluirse *antes* del script que las usa.
- **Funciones:** Si un script usa funciones definidas en otro script, este último debe ser incluido primero.

<aside>
💡

**Ejemplo**
Supongamos que tienes tres archivos JavaScript: `script1.js`, `script2.js`, y `script3.js`. Si los incluyes en tu archivo HTML de la siguiente manera: 

**Resultado:** 

El navegador cargará y ejecutará los scripts en este orden: primero `script1.js`, luego `script2.js`, y finalmente `script3.js`.

```jsx
<!DOCTYPE html>
<html>
<head>
  <title>Múltiples archivos JS</title>
</head>
<body>

  <script src="script1.js"></script>
  <script src="script2.js"></script>
  <script src="script3.js"></script>

</body>
</html>
```

</aside>

## Atributos de carga de script : Solo para scripts externos .js

> Cuando cargamos un archivo externo con `<script>`, podemos mejorar su rendimiento con estos atributos
> 

### Atributo defer (Recomendado)

> **Atributo booleano
Cuando se inserta en la etiqueta script , e**l script se descarga en paralelo pero **espera hasta que el HTML esté completamente cargado** antes de ejecutarse.
> 
- **Flujo con defer**
    1. **Descarga en segundo plano:** El navegador descarga el script especificado en el atributo `src` en segundo plano **sin bloquear el análisis del HTML.**
    2. **Análisis completo:** El navegador continúa analizando el resto del HTML hasta que toda la página HTML ha sido analizada.
    3. **Ejecución en orden: Una vez que se ha analizado todo el HTML**, el navegador ejecuta los scripts con el atributo `defer` en el orden en que aparecen en el documento.
    4. **Importancia de la posición:** La posición de las etiquetas `<script>` con `defer` importa en cuanto al orden de ejecución, pero no bloquea el análisis del HTML.

### Atributo async

> **Atributo booleno
Cuando se inserta en la etiqueta script, e**l script se descarga y **se ejecuta en cuanto termina de descargarse**, sin esperar que el HTML cargue completamente.
> 

<aside>
💡

El atributo `async` en una etiqueta `<script>` generalmente no es recomendado si el script necesita acceder al DOM (Document Object Model).

- **"Acceder al DOM" en JavaScript se refiere a la interacción con la estructura, el contenido y el estilo de una página web.**

**Porque?**

 **Ejecución impredecible:** Con `async`, el script se descarga y ejecuta de forma asíncrona. Esto significa que no se puede garantizar cuándo se ejecutará el script en relación con el análisis y la construcción del DOM. Podría ejecutarse antes de que el DOM esté completamente cargado, lo que resultaría en errores si el script intenta manipular elementos que aún no existen.

</aside>

- **Flujo con async**
    1. **Descarga en segundo plano:** El navegador descarga el script especificado en el atributo `src` en segundo plano sin bloquear el análisis del HTML.
    2. **Análisis simultáneo:** El análisis del HTML y la descarga del script ocurren simultáneamente.
    3. **Ejecución inmediata:** Una vez que se descarga el script, el navegador lo ejecuta inmediatamente, sin esperar a que se complete el análisis del HTML.
    4. **Orden no garantizado:** El orden de ejecución de los scripts con el atributo `async` no está garantizado. Pueden ejecutarse en cualquier orden, incluso antes de otros scripts con `defer` o sin `defer` ni `async`.
    5. **Importancia de la posición:** La posición de las etiquetas `<script>` con `async` no afecta al orden de análisis del HTML, pero sí puede afectar el orden de ejecución respecto a otros scripts.
---

# Casting: Conversión de Tipos

## Concepto

> El **casting** o **conversión de tipos** se refiere a la **transformación de un valor de un tipo de dato a otro.**
> 

### **Tipos de Conversión en JavaScript**

Hay dos formas principales de conversión:

🔹 **Conversión implícita (coerción de tipo)**: JavaScript convierte automáticamente un tipo a otro.

🔹 **Conversión explícita (casting manual)**: Usamos funciones para convertir valores manualmente.

## **Conversión Explícita: Conversión a String**

### **Metodo toString()**

> La mayoría de los tipos de datos en JavaScript tienen un **método** `toString()` que **devuelve una representación de cadena del valor.**
> 
> 
> <aside>
> 💡
> 
> **Cuidado con `null` y `undefined` en `toString()` , estos no tienen el metodo toString()**
> 
> </aside>
> 
> <aside>
> 💡
> 
> **Sintaxis
> Retorna un string**
> 
> ```jsx
> variable.toString();
> 
> //Ejemplo
> let numero = 10;
> let cadenaNumero = numero.toString();       // cadenaNumero será "10" (base 10, por defecto)
> let binario = numero.toString(2);
> ```
> 
> </aside>
> 

## **Conversión Explícita:** Conversion a numero

> Usualmente convertimos cadenas de texto a numeros
> 

**Recomendaciones:**

✅ **Usa `Number()`** para conversiones generales.

✅ **Usa `parseInt()`** cuando trabajes con **números enteros** en strings.

✅ **Usa `parseFloat()`** si necesitas **mantener decimales** en la conversión.

### Funcion Number()

> Si la cadena no se puede convertir a un número, devuelve `NaN` (Not a Number). 
Maneja tanto números enteros como de punto flotante.
> 
> 
> **Sintaxis**
> 
> ```jsx
> Number(valor que deseas convertir)
> 
> //Ejemplo
> let numero = Number("123");       // numero será 123
> let numero2 = Number("3.14");     // numero2 será 3.14
> let numero3 = Number("123abc");   // numero3 será NaN
> ```
> 

### **Funcion parseInt()**

> Convierte una cadena a un número entero.
> 
> - Ignora cualquier carácter que no sea un número después del primer carácter numérico.
> - Si la cadena no comienza con un carácter numérico, devuelve `NaN`
> 
> **Sintaxis**
> 
> ```jsx
> parseInt(valor que deseas convertir a entero)
> 
> //Ejemplo
> let entero = parseInt("123");       // entero será 123
> let entero2 = parseInt("123abc");   // entero2 será 123
> let entero3 = parseInt("abc123");   // entero3 será NaN
> ```
> 

### **Funcion parseFloat()**

> Convierte una cadena a un número de punto flotante.   D
> 
> - Similar a `parseInt`, ignora los caracteres no numéricos después del primer carácter numérico, pero admite números de punto flotante.
> - Devuelve `NaN` si no se puede convertir.
> 
> **Sintaxis**
> 
> ```jsx
> parseFloat(valor que deseas convertir a decimal);
> 
> //Ejemplo
> let flotante = parseFloat("3.14");     // flotante será 3.14
> let flotante2 = parseFloat("3.14abc"); // flotante2 será 3.14
> ```
> 

## **Diferencia entre `==` y `===` en Conversión de Tipos**

> Cuando usamos `==`, JavaScript **intenta convertir los tipos antes de comparar**.
Cuando usamos `===`, **compara sin conversión**.
> 

<aside>
💡

**Operador de identidad ===**
Comprueba si el valor y el tipo de dato de “a” y “b” son iguales

```jsx
a === b
```

```jsx
console.log(5 == "5");  // true  → Solo compara el valor
console.log(5 === "5"); // false → Compara el valor y el tipo
```

</aside>