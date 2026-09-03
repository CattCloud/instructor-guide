### Estado (State)

> **Representa**: **Los datos o información actual** que **describe la aplicación en un momento dado.**
El estado en este caso encapsula toda la información que la aplicación necesita en un instante específico.
> 

<aside>

**Ejemplo** 
Aquí el objeto **state**  contiene datos descriptivos, este describe e**l estado actual de la aplicación en ese momento.**

```jsx
const state = {
  user: {
    name: 'Juan',
    age: 30,
    isLoggedIn: true
  },
  notifications: [
    { message: 'Bienvenido, Juan!', timestamp: '2025-04-08T11:00:00' }
  ],
};
```

La información almacenada en el estado está diseñada para ser compartida entre diferentes partes de la aplicación.

</aside>

> Representa **toda la información actual de la aplicación** que **debe ser compartida entre múltiples partes de la aplicacion.**
El estado en este caso **centraliza información que debe ser accesible y compartida por diferentes componentes de la aplicación**. 
Se utiliza para evitar que cada componente gestione su propio estado aislado.
> 

## Como identificar el estado de mi proyecto software?

<aside>

### Que es un estado?

> Es la representación de los datos o informacion actuales de una **aplicación** o **componente de la aplicación** en **un momento específico**, que puede cambiar en **respuesta** a **interacciones o eventos.**
> 
</aside>

### Tipos de estado

<aside>

### Estado global

- El estado global es **compartido por múltiples componentes** en la app.
    - Este tipo de estado representa los **datos que deben estar disponibles en toda la aplicación o en varias secciones.**
- Se puede acceder al estado desde **cualquier parte de la app.**
- En el Patron Store se encuentra en la Store Centralizada

**Ejemplo**

- Usuario autenticado (login).
- Tema oscuro/claro.
- Carrito de compras (necesitado en varias secciones, como la página de productos y el resumen de compra).
- Preferencias generales.
</aside>

<aside>

### Estado local

- Es el estado que **solo importa dentro de un componente específico**.
    - Este tipo de dato representa la información que **solo afecta a un componente particular y que no necesita compartirse**.
- No necesita ser compartido.
- Cambia y afecta **solo ese componente de la app**.

**Ejemplo**

- Campo de búsqueda en la barra superior (solo relevante para la barra).
- Si un modal de detalles del producto está abierto o cerrado (local al componente del producto).
- Temporizador de una animación.
</aside>

### Identificacion de estados de la app

<aside>

### **Preguntas para identificar los estado de mi app
1.  Identificar los estados en general —> ¿Qué información o datos maneja mi aplicación? (Lluvia de ideas)**

> Haz una lista de todos los datos importantes que son relevantes para tu aplicación, sin preocuparte inicialmente por su alcance.
> 

**Ejemplo**
Por ejemplo, para una tienda en línea

- Información del usuario (nombre, correo, si está autenticado o no).
- Lista de productos disponibles (catálogo).
- Detalles de un producto específico (nombre, precio, descripción).
- Carrito de compras (productos seleccionados por el usuario).
- Preferencias de usuario (idioma, tema oscuro o claro).

### 2. Clasificar si son globales o locales. —> ¿La información será usada en diversas paginas de la app o solo en una vista específica?

> Ahora analiza cada elemento de tu lista y determina si es global o local.
> 

**Ejemplo**

!image.png

</aside>

# MODULOS ES
## Contexto

> Uno de los principales problemas que ha ido arrastrando JavaScript desde sus inicios es la **dificultad de organizar de una forma adecuada una aplicación grande, con muchas líneas de código.**
En muchos lenguajes de programación, cuando un programa crece, se comienza a estructurar en **funciones**. Posteriormente, se traslada a **clases**, que contienen variables (propiedades) y funciones (métodos). De esta forma organizamos de forma más lógica el código de nuestro programa.
Sin embargo, no será suficiente. Tener el código en un solo fichero es confuso y complejo.
> 
> 
> !image.png
> 

### **¿Cuál es la solución?**

> En la mayoría de los lenguajes de programación, **el código se divide en ficheros diferentes**
Asi cada clase, funcion esta organizado en un fichero especifico
> 

!image.png

<aside>

A medida que nuestra aplicación crece, queremos dividirla en múltiples archivos, llamados “**módulos**”, **los módulos permiten dividir el código en partes más pequeñas y manejables**, lo que facilita la mantenibilidad y la
legibilidad del código.

</aside>

## **¿Qué es un módulo?**

> Un módulo es un **archivo JavaScript** que contiene código reutilizable (funciones, variables, clases) que se puede exportar e importar en otros archivos.
> 

<aside>

**Objetivo de uso:**
**Encapsula una funcionalidad específica y se puede reutilizar en otros archivos del programa.** 
Un módulo puede contener una clase o una biblioteca de funciones para un propósito específico.

</aside>

!image.png

## **¿Por qué usar módulos?**

- **Organización:** Mantiene tu proyecto estructurado, separando funcionalidades.
    
    > Un modulo es una **unidad de organización**: divide tu proyecto grande en piezas pequeñas, cada una con una responsabilidad clara.
    > 
- **Reutilización:** Puedes usar el mismo módulo en varios lugares del proyecto.
- **Encapsulamiento:** Evita conflictos de nombres (variables o funciones con el mismo nombre en archivos diferentes).
    
    > Cada módulo tiene su **propio scope (ámbito)**: las variables dentro de un módulo **no contaminan el scope global**.
    > 
- **Mantenibilidad:** Hace que el código sea más fácil de leer, depurar y escalar.

## Historia sobre los modulos en JS

> Durante mucho tiempo, JavaScript existió sin una sintaxis de módulo a nivel de lenguaje. A partir de ECMAScript ES2015 **se introduce una característica nativa denominada Módulos ES (ESM), que permite la importación y exportación de fragmentos de datos entre diferentes archivos JavaScript.
Antes se usaba Modularizacion tradicional**
> 

### Modularizacion tradicional

> Se basa en el uso de archivos **JS externos** vinculados según el orden en el html
> 

<aside>

**Cómo funcionaba este método:**

- Cada **archivo JavaScript** era independiente y debía ser cargado manualmente en el head del HTML.
- El orden de los `<script>` en HTML afectaba la ejecución ya que los archivos se cargaban **secuencialmente**.
- Para compartir datos entre archivos, se usaban **variables globales** o se aseguraba que un script se ejecutara **después** del otro.

```jsx

<!DOCTYPE html>
<html lang="es">
<head>
  <script src="utils.js"></script> <!-- Se carga primero -->
  <script src="main.js"></script> <!-- Se carga después y usa lo anterior -->
</head>
<body>
</body>
</html>

//Si utils.js no se carga antes que main.js, el script de main.js fallará, porque la función saludar() aún no existe.
```

</aside>

<aside>

**¿Qué limitaciones tenía este método?**

1. **No había encapsulación:** Todas las variables y funciones quedaban en el ámbito **global**, aumentando el riesgo de conflictos.
2. **El orden de carga era crucial:** Si un script dependía de otro, **debía asegurarse** que fuera cargado antes.
3. **Falta de eficiencia:** Todos los archivos eran **descargados** al inicio, incluso si no se usaban, afectando el rendimiento
</aside>

## Modularizacion tradicional vs ES Modules

> Hoy en día, ES Modules es la forma recomendada para proyectos JavaScript modernos.
> 

**Tabla comparativa de ambas formas de modularizacíon**

| **Aspecto** | **Método Tradicional (`<script>`)** | **Módulos ES6 (`import/export`)** |
| --- | --- | --- |
| **Encapsulación** | Variables y funciones quedan en el **ámbito global**, causando posibles conflictos.
**Ejemplo:** si dos archivos usan una variable con el mismo nombre, pueden sobrescribirse accidentalmente, causando errores inesperados.
 | Cada módulo tiene su propio **ámbito** y evita contaminación global.
**Ejemplo:** las variables definidas en un módulo no afectan a otros módulos.
 |
| **Orden de carga** | El orden de `<script>` en el HTML **afecta** la ejecución. | `import` maneja la carga automáticamente, sin preocuparnos por el orden. |
| **Dependencias** | Se deben gestionar manualmente asegurando que un script **se cargue antes** que otro. | Se pueden importar solo las funciones necesarias sin cargar todo un archivo. |
| **Uso en navegadores** | Funciona en cualquier navegador sin configuraciones especiales. | Se debe usar `type="module"` en `<script>` o configurar el servidor. |
| **Carga dinámica** | Todos los scripts se descargan desde el inicio. | `import()` permite **cargar módulos solo cuando sean necesarios**, mejorando el rendimiento. |
| **Uso en Node.js** | Usa `require()` y `module.exports`. | Usa `import/export`, pero requiere configuraciones adicionales en Node.js. |
| **Facilidad de mantenimiento** | Código más propenso a problemas si hay muchos archivos globales. | **Modularidad clara**, facilita proyectos grandes y colaborativos. |

## **Antes De Usar Módulos (ES Modules)**

> Para trabajar con **módulos** tenemos a nuestra disposición las siguientes palabras clave:
> 

| **Método** | **Descripción** |
| --- | --- |
| **export** | Permite compartir funciones, variables u objetos desde un archivo para que otros módulos los utilicen.  |
| **import** | Permite traer elementos desde otro módulo y utilizarlos en el código actual.  |

> Antes de empezar, recuerda que para poder utilizar **export** o **import** en nuestro código Javascript que se ejecuta directamente en el navegador, debemos decirle al navegador que un **script** debe tratarse como un **módulo**, utilizando el atributo `type=”module”`
> 

```html
<script type =" module ">
```

<aside>

**Cuando indicar el type =”module”?**

> Debes indicar `type="module"` en la etiqueta `<script>` cuando estés utilizando **módulos** en JavaScript y necesites cargar un archivo JavaScript como un módulo en un archivo HTML.
Al haces esto estaremos avisando al navegador que estamos cargando un módulo en el que
podemos utilizar **import** y **export**
> 

```html
<script type="module" src="app.js"></script>
```

</aside>

## **¿Qué significa exportar?**

> Exportar es **hacer que parte de su contenido sea accesible** (función, variable, clase) para que otros módulos puedan usarla.
> 
- Todo lo que **no se exporta, permanece privado** dentro del archivo.
- Permite **compartir solo lo necesario**, manteniendo encapsulamiento.

### Palabra clave: `export`

> En **ES Modules**, un archivo JavaScript **no es un módulo** hasta que se usa la palabra clave `export`.
Cuando se usa `export`, el archivo JS se convierte en un **módulo de exportación(lo que se exportara)** y puede compartir datos con otros módulos.
> 
> - Estos datos pueden ser **variables, funciones, clases u objetos**.
> - Cuando otro archivo importa el módulo, solo puede acceder a los elementos que han sido **explícitamente exportados**.

## **¿Qué significa importar?**

> Importar es **traer a tu archivo lo que otro módulo exportó para poder usarlo**.
> 
> - Permite **reutilizar código** sin reescribirlo.
> - Solo puedes importar **lo que el otro archivo exportó explícitamente**.
> - Organiza tu proyecto dividiéndolo en partes pequeñas y reutilizables.

### **Palabra clave: `import`**

> En ES Modules, la palabra clave `import` activa el sistema de módulos de importación.
> 
> 
> Usas `import` para **traer funciones, variables, clases u objetos** desde otro archivo JavaScript. 
> 
> - El módulo de importaciones se conforma por los elementos que se traen desde otros archivos mediante `import`.

<aside>

**Importante**
Cuando un archivo utiliza `import`, el **motor de JavaScript analiza** todas las importaciones antes de ejecutar el código.
**Las importaciones ocurren antes de** la ejecución del código del script.

Por lo tanto: **Deben estar en la parte superior del archivo**, porque no pueden aparecer dentro de funciones, condicionales o bloques de código.

</aside>

## **Tipos de exportación - importación**

| **Tipo** | **Descripción** | **Uso principal** |
| --- | --- | --- |
| **Exportación - Importación Nombrada** | Permite exportar/importar **varios elementos** específicos. Se usan **llaves `{}`** y los nombres deben coincidir (o usar `as`). | Cuando el módulo tiene **múltiples funciones, variables o clases** útiles. |
| **Exportación - Importación por Defecto** | Permite exportar/importar **un solo elemento principal**. No usa llaves y el nombre al importar es **libre**. | Cuando el módulo tiene **un único propósito principal** que quieres compartir. |
| **Exportación - Importación Mixta** | Permite exportar/importar **un elemento por defecto y varios elementos nombrados al mismo tiempo**. Combina ambos tipos en una sola línea. | Cuando el módulo tiene **un valor principal y varios secundarios**. |

## **Exportación-**Importación **nombrada (`named export` - `named import`)**

- Permite exportar varios elementos con nombre específico desde un módulo.
- Se importan usando exactamente el mismo nombre, debe coincidir exactamente con el nombre exportado (o usar `as` para cambiarlo).

### **Flujo paso a paso**

### 1. Exportación nombrada de elementos: Creación del modulo de exportación

> Dos formas
> 

### **Exportación Directa : Exportación individual**

> Colocas `export`  en cada elemento que deseas exportar
Cada elemento que tenga `export` se convierte parte del **módulo de exportación**
> 

<aside>

**Ejemplo explicativo** 

```jsx
export const PI = 3.1416;
export function sumar(a, b) { return a + b; }
export class Calculadora { constructor() { console.log("Instancia creada"); } }
```

</aside>

### **Exportación Agrupada**

> Se definen las variables y funciones sin `export`.
Luego, **se agrupan todas las exportaciones** en una sola línea al final del archivo.
El módulo de exportación será la agrupación con `export { ... }` al final del archivo.
> 

<aside>

**Ejemplo explicativo** 

```jsx
const PI = 3.1416;
function sumar(a, b) { return a + b; }
class Calculadora { constructor() { console.log("Instancia creada"); } }

export { PI, sumar, Calculadora }; // <- Modulo  de exportacion
```

</aside>

### 2. Importación nombrada de elementos: Traer los elementos del modulo de exportación

> Usas **llaves `{}`** para indicar qué elementos específicos del modulo de exportación quieres traer.
> 

<aside>

**Sintaxis**

Los nombres deben coincidir con los nombres exportados

```jsx
//Modulo de exportacion
export nombre1;
export nombre2;
...

//Modulo de importacion
import { nombre1, nombre2 ...} from './archivo.js';
```

</aside>

<aside>

**Ejemplos explicativo** 

```jsx
// ➤ archivo.js
export const PI = 3.1416;
export function sumar(a, b) { return a + b; }

// ➤ otroArchivo.js
import { PI, sumar } from './archivo.js';

console.log(PI);          // 3.1416
console.log(sumar(2, 3)); // 5
```

</aside>

### Opcional: Importación con alias: Renombrar los elementos importados usando `as`

> Permite cambiar el nombre del elemento importado para evitar conflictos o mejorar la claridad del código local.
> 
> 
> Se sigue usando `{}`, pero se aplica `as` para establecer un alias.
> 

<aside>

**Sintaxis general**

```jsx
// Módulo de exportación
export nombre1;
export nombre2;

// Módulo de importación 
import { nombre1 as nuevoNombre,nombre2} from './archivo.js';

console.log(nuevoNombre); // 100
```

</aside>

## **Exportación-**Importación **por defecto (`default export`- `default import`)**

> Permite exportar **un único valor principal** del módulo. 
El nombre al importar es **libre** (lo eliges tú).
> 
- **Se usa cuando el módulo solo tiene un elemento principal** que queremos exportar.

<aside>

**Importante
Solo puede haber un `export default` por módulo**

</aside>

### **Flujo paso a paso**

### 1. Exportación por defecto de elementos: Creación del modulo de exportación

> Colocas `export default` sobre el elemento que quieres exportaras
Ese elemento formara parte del modulo de exportación
> 

**Sintaxis**

```jsx
export default elemento_que_exportaras;
```

<aside>

**Ejemplos explicativos**

```jsx
//Exportacion de una funcion
export default function saludo(nombre) {
    return `¡Hola, ${nombre}!`;
}
```

```jsx
//Exportacion de una clase
export default class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
```

</aside>

### 2. Importación por defecto de elementos: Traer los elementos del modulo de exportación

> No se usa llaves.
> 

<aside>

**Sintaxis**

Puedes **darle cualquier nombre al importarlo** porque es **único**.

```jsx
//Modulo de exportacion
export default nombre;

//Modulo de importacion
import nombreLibre from './archivo.js';
```

</aside>

<aside>

**Ejemplos explicativo** 

```jsx
// ➤ archivo.js
export default function saludo() {
  console.log("¡Hola, Erick!");
}

// ➤ otroArchivo.js
import saludar from './archivo.js';
saludar(); // ¡Hola, Erick!

```

</aside>

## Exportacion-Importacion mixta

> Permite **combinar** un **export por defecto** con uno o más **exports nombrados** en el mismo archivo y traerlos juntos.
> 

### **Flujo paso a paso**

### 1. Creación del módulo de exportación mixto

> Combina export default con export (nombrado) en el mismo archivo.
> 

<aside>

**Ejemplo explicativo**

```jsx
// ➤ archivo.js

// Exportación por defecto
export default function saludo(nombre) {
  return `¡Hola, ${nombre}!`;
}

// Exportación nombrada
export const PI = 3.1416;
export function sumar(a, b) {
  return a + b;
}
```

</aside>

### 2. Importación mixta: traer ambos tipos juntos

> Usa **nombre libre** para el **default** y **llaves** {} para los **nombrados**.
> 

<aside>

**Sintaxis general**

```jsx
import nombreLibre, { nombre1, nombre2 } from './archivo.js';

```

</aside>

<aside>

**Ejemplo explicativo**

```jsx
// ➤ otroArchivo.js

// Importa el default con cualquier nombre y los nombrados entre llaves
import saludar, { PI, sumar } from './archivo.js';

console.log(saludar("Erick")); // ¡Hola, Erick!
console.log(PI);               // 3.1416
console.log(sumar(2, 3));      // 5

```

</aside>

# JSON

## ¿Qué es JSON?

> **JSON** es un formato ligero para el intercambio de datos. 
Se basa en una **sintaxis muy similar a los objetos literales de JavaScript (clave: valor)** 
Es ****ampliamente utilizado para comunicar información entre **cliente y servidor**.
> 

<aside>

### Características principales

- Formato **de texto** y **entendible para humanos**.
- Basado en estructuras de **clave-valor**.
- Compatible con casi todos los lenguajes de programación.
- Ideal para APIs REST.
</aside>

## Reglas de sintaxis

> Se encierra entre **llaves `{}`**.
Basado en estructuras de **clave-valor:**  Cada elemento tiene una **clave entre comillas dobles** y un **valor**.
> 

```jsx
{
	"clave1": valor1
	"clave2": valor2
}
```

Los valores internos de un elemento JSON pueden ser:

- Números
- Cadenas de texto
- Booleanos (`true` / `false`)
- Arreglos (`[]`)
- Objetos (`{}`)
- `null`

Los demas tipos (function,date,…) no es posible almacenarlo en un JSON

<aside>
📌

**En JavaScript**
JSON se representa como **texto**, cuando lo utilizas en tu código.

</aside>

<aside>

**Ejemplo**

```json
{
  "nombre": "Erick",
  "edad": 25,
  "activo": true,
  "hobbies": ["piano", "desarrollo web", "lectura"]
}
```

</aside>

!image.png

## Serializacion : Metodo `JSON.stringify()`

> Proceso de convertir un objeto,array,etc (estructura de datos) en una cadena de texto JSON
`JSON.stringify()` convierte estructuras JS a texto JSON.
> 
- 🧱 **Arreglos** se convierten en `[...]`
- 🔑 **Objetos** se convierten en `{ "clave": "valor" }`
- 💬 **Strings** van entre comillas
- ❌ No serializa funciones ni valores `undefined` dentro de objetos

```jsx
const textoJSON = JSON.stringify(estructuraJS);
```

### Usos Comunes

- Almacenar datos en archivos (como en una base de datos o localStorage).
- Enviar datos a un servidor mediante una petición HTTP.

## Deserializacion : Metodo `JSON.parse()`

> Proceso de convertir una cadena de texto JSON en un objeto que pueda ser utilizado en el código.
`JSON.stringify()` transforma una cadena JSON válida en un objeto JavaScript.
> 

```jsx
const objeto = JSON.parse(textoJSON);
```

### Usos Comunes

- Recibir datos desde un servidor y transformarlos en objetos para manipularlos
- Leer datos almacenados en localStorage o archivos JSON.

## Solucion: Deserializar retorna un objeto generico

> Al serializar un objeto en JSON y luego **deserializarlo**, el resultado será **un objeto genérico de JavaScript** y perderá la información sobre la clase original a la que pertenecía.
> 

**Porque?**
Esto ocurre porque JSON es simplemente un formato de texto que almacena datos estructurados como texto plano, pero no incluye información sobre las clases o prototipos de los objetos que almacena.

<aside>

**Ejemplo** 

```jsx
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
}

const erick = new Persona("Erick");
const json = JSON.stringify(erick);
const obj = JSON.parse(json);

console.log(obj.saludar()); // ❌ Error: obj.saludar is not a function
```

`obj` ya no es una instancia de `Persona`, sino un objeto plano.

</aside>

### Solución para preservar la clase

> La solucion es **restaurar manualmente el objeto a la clase a la que pertenece** luego de deserializar
Crear una nueva instancia de la clase y asignarle las propiedades del objeto deserializado.
> 

**Ejemplo** 

```jsx
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

// JSON deserializado (objeto genérico)
const objetoDeserializado = { nombre: "Juan", edad: 25 };

// Crear una nueva instancia de la clase
const nuevaInstancia = new Persona(objetoDeserializado.nombre,objetoDeserializado.edad);

//Compruebo
console.log(nuevaInstancia instanceof Persona); // Resultado: true
```