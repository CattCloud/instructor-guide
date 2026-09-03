## **Método `sort()` : Ordenamiento de Arrays**

> **Propósito**: **Organiza** los elementos del array **según un criterio definido en el callback**. 
Por defecto, convierte los elementos a strings y los ordena alfabéticamente.
✅ **Modifica el array original**.
> 

<aside>

**Sintaxis basica:**

```jsx
array.sort(comparadorOpcional);
```

</aside>

- **comparadorOpcional**: es un callback y fine el criterio de ordenamiento.

### **Ordenamiento predeterminado (`sort()`)**

> Por defecto, `sort()` convierte los elementos a **cadenas de texto y los ordena alfabéticamente**.
> 

📌 **Caso de uso:** Ordenamiento **alfabético** de palabras o nombres asi que no lo apliques en valores numericos.

<aside>

**Ejemplo explicativo**

```jsx
const frutas = ['manzana', 'pera', 'uva', 'mango', 'sandía'];
frutas.sort();

console.log(frutas);
// ['mango', 'manzana', 'pera', 'sandía', 'uva']
```

</aside>

### **Ordenamiento numérico usando función de comparación**

> **Uso de una función personalizada:**
> 
- ✅ **Orden ascendente:** `a - b`
    
    <aside>
    
    **Sintaxis**
    
    ```jsx
    array.sort((a, b) => a - b);
    ```
    
    </aside>
    
    - `a` y `b` son los elementos que se comparan entre sí.
    - Si `a - b` es **negativo**, `a` se coloca antes que `b`.
    - Si `a - b` es **positivo**, `a` se coloca después de `b`.
    - Si `a - b` es **0**, no se cambia el orden.
    
    <aside>
    
    **Ejemplo de orden ascendente (menor a mayor)**
    
    ```jsx
    const numeros = [10, 5, 20, 1, 100];
    
    numeros.sort((a, b) => a - b);
    
    console.log(numeros);
    // [1, 5, 10, 20, 100]
    ```
    
    </aside>
    
- ✅ **Orden descendente:** `b - a`
    
    <aside>
    
    **Sintaxis**
    
    ```jsx
    array.sort((a, b) => b - a);
    ```
    
    </aside>
    
    - `a` y `b` son los elementos que se comparan entre sí.
    - Si **`b - a` es negativo**, `b` se coloca antes que `a`.
    - Si **`b - a` es positivo**, `b` se coloca después de `a`.
    - Si **`b - a` es 0**, no se cambia el orden.
    
    <aside>
    
    **Ejemplo de orden descendente (mayor a menor)**
    
    - Si `b` es mayor que `a`, `b - a` es **positivo**, por lo que `b` va antes que `a`.
    - Si `b` es menor que `a`, `b - a` es **negativo**, por lo que `a` va antes que `b`.
    
    ```jsx
    const numeros = [10, 5, 20, 1, 100];
    
    numeros.sort((a, b) => b - a);
    
    console.log(numeros);
    // [100, 20, 10, 5, 1]
    ```
    
    </aside>
    

### **Ordenamiento de objetos**

> Cuando los elementos son objetos, se debe ordenar por una propiedad específica.
🔹 **Usa `sort(a, b => a.propiedad - b.propiedad)`** para ordenar **objetos por atributos específicos**.
> 

📌 **Caso de uso:** **Organizar elementos por atributos numéricos** (precios, edades, puntuaciones).

<aside>

**Ejemplo: Ordenar productos por precio**

```jsx
const productos = [
  { nombre: 'Laptop', precio: 1200 },
  { nombre: 'Mouse', precio: 25 },
  { nombre: 'Teclado', precio: 45 },
];

productos.sort((a, b) => a.precio - b.precio);

console.log(productos);

```

</aside>

---

# MODULOS 
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