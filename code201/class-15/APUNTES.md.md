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
## ¿Qué es LocalStorage?

> **LocalStorage** es una API de **almacenamiento web** proporcionada por JavaScript que permite guardar informacion en el navegador del usuario.
Permite almacenar datos en el navegador de forma **persistente**, es decir, los datos **no se eliminan cuando se recarga la página o se cierra el navegador**.
> 
- Persistencia en el lado del navegador
- La base de datos es persistencia del lado del servidor
- No guardes datos críticos en el LocalStorage

## Informacion importante

- **Almacena solo datos tipo string** (texto).
- Capacidad máxima aproximada: **5-10MB** por origen (depende del navegador).
- Los datos se guardan en pares **clave → valor**.
- Es **sincrónico** (bloquea el hilo principal).
- Solo se puede acceder desde el mismo **origen (dominio + protocolo + puerto)**.

## Métodos principales

| Método | Descripción |
| --- | --- |
| `setItem(clave, valor)` | Guarda un dato con clave y valor. |
| `getItem(clave)` | Obtiene el valor asociado a la clave. |
| `removeItem(clave)` | Elimina un valor almacenado. |
| `clear()` | Borra todos los datos del LocalStorage. |
| `key(indice)` | Devuelve la clave en la posición dada. |
| `length` | Propiedad que indica cuántos elementos hay. |

## Objeto localStorage

> Es un objeto global, osea que estara disponible en cualquier parte del codigo
**No necesita una instancia:** Este objeto es parte de la API de almacenamiento web de JavaScript y está disponible automáticamente en el entorno del navegador. No necesitas importarlo ni declararlo; simplemente puedes usarlo directamente en tu código.
**Se usa para acceder a los metodos de almacenamiento LocalStorage**
> 

## Guardar dato :  Metodo `setItem(clave,valor)`

> Almacena un valor en LocalStorage bajo una clave específica
> 
> 
> ```jsx
> localStorage.setItem("nombre", "Erick");
> ```
> 

## Recuperar dato almacenado:  Metodo `getItem(clave)`

> Obtiene el valor almacenado en LocalStorage  asociado a una clave.
> 
> 
> ```jsx
> const valor = localStorage.getItem("clave");
> ```
> 

## Eliminar un dato en especifico:  Metodo `removeItem(clave)`

> Elimina un valor específico almacenado en LocalStorage utilizando su clave
> 
> 
> ```jsx
> localStorage.removeItem("clave"); 
> ```
> 

## Eliminar todo:  Metodo `clear()`

> Limpia todos los datos almacenados en LocalStorage.
> 
> 
> ```jsx
> localStorage.clear();
> ```
>

