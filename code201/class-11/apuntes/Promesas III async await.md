# Promesas III : async/await

## Que es async/await?

> Son palabras claves para **trabajar con promesas** en JavaScript.
> 
> - Es una forma moderna y mas entendible que **then/catch**
> - Permite escribir **código asincrónico como si fuera síncrono(en linea) pero sin bloquear el hilo principal**, lo que facilita su comprensión y mantenimiento.

# Flujo paso a paso con `async/await`

## **1. Tienes una promesa (creada o importada)**

> Puede ser una promesa que tú hayas creado con new Promise(...), o una que venga de una función que devuelve una promesa (como fetch() o cualquier API asincrónica).
> 

<aside>

**Sintaxis**

```jsx
// Una promesa que ya existe
const promesa = fetch("https://api.example.com/datos");

// O una que tú mismo creas
const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("🎉 Resultado correcto");
  }, 2000);
});
```

</aside>

## 2. **Creas una función `async` : Consumidor de promesas**

> **El propósito de `async` es facilitar el manejo de promesas dentro de una función**.
> 
> - Creas una **función `async`** para poder usar `await` dentro de ella.
> - Cualquier función marcada como `async` **siempre devolverá una promesa**.
>     
>     El valor que **retorna una función async es una promesa automáticamente**, incluso si usas `return` directo.
>     

<aside>

## ¿Qué es `async`?

- Se coloca delante de una **función**.
- Convierte la función en una función **asincrónica**.
- Esto hace que **devuelva una promesa automáticamente**, incluso si tú no la creas manualmente.
</aside>

<aside>

**Sintaxis**

```jsx
async function nombreFuncion() {
  // aquí puedes usar await
}
```

</aside>

## **3. Usas `await` para esperar el resultado de la promesa**

> El `await` **detiene** temporalmente la ejecución **solo dentro de la función async**, no bloquea todo el programa.
> 

<aside>

### ¿Qué es `await`?

- Solo se puede usar **dentro de una función `async`**.
- Se pone delante de una **Promesa**
- Hace que JavaScript **espere** a que una promesa se resuelva antes de continuar.
- Permite **asignar el resultado directamente a una variable**.
</aside>

<aside>

**Porque detiene temporalmente la ejecución dentro de la funcion async?**
Porque necesita esperar la resolución de la promesa antes de continuar con el siguiente paso.

- Si la promesa **se cumple**, el valor que devuelve `await` es el resultado de `resolve(...)`.
    
    > **`resolve(valor)`** → El valor pasa a `await`, y **se asigna directamente** a la variable donde lo uses.
    > 
- Si la promesa **falla**, se lanza un error que puedes atrapar con `try/catch`.
    
    > **`reject(error)`** → El error se captura en `catch(error)`, permitiéndote manejarlo.
    > 
</aside>

<aside>

**Sintaxis**

```jsx
async function nombreFuncion() {
  // aquí puedes usar await
  const resultado = await promesa;
	...
}
```

</aside>

> Puedes usar múltiples `await` uno tras otro, como si fueran instrucciones síncronas.
> 

<aside>

Ejemplo

```jsx
async function procesoSecuencial() {
  console.log("📌 Iniciando proceso...");

  const paso1 = await new Promise(resolve => setTimeout(() => resolve("✅ Paso 1 completado"), 1000));
  //Se detiene el codigo esperando el resultado de la promesa (paso 1)
  console.log(paso1);

  const paso2 = await new Promise(resolve => setTimeout(() => resolve("✅ Paso 2 completado"), 1000));
  //Se detiene el codigo denuevo esperando el resultado de la promesa (paso 2)
  console.log(paso2);

  const paso3 = await new Promise(resolve => setTimeout(() => resolve("✅ Paso 3 completado"), 1000));
    //Se detiene el codigo denuevo esperando el resultado de la promesa (paso 3)
  console.log(paso3);

  console.log("🎉 Todos los pasos completados!");
}

procesoSecuencial();
```

</aside>

## 4. Usas `try` / `catch` para **manejar errores** (como `.then()`/`.catch()`)

> Para el  manejo de errores se usa el bloque `try` / `catch`
> 
- `try` → bloque donde se ejecuta **el código asincrónico**.
- `catch` → bloque donde se captura y maneja cualquier error que ocurra en el código asincrónico.

<aside>

**Sintaxis**

```jsx
async function consumirPromesa() {
  try {
    const resultado = await promesa;
    // La promesa fue resuelta exitosamente (como then)
  } catch (error) {
    // La promesa fue rechazada (como catch)
  } finally {
    // Opcional: se ejecuta siempre
  }
}
```

</aside>

## Ejemplo con async/await

```jsx
// 🔹 Función que simula la preparación de café y retorna una Promesa
function prepararCafe() {
  return new Promise((resolve, reject) => {
    setTimeout(() => { // Simula un retraso de 1.5 segundos 
      const exito = Math.random() > 0.2; // Genera un número aleatorio
      if (exito) {
        resolve("☕ Tu café está listo!"); // Si el proceso tuvo éxito, resuelve la promesa con un mensaje
      } else {
        reject("⚠️ La cafetera falló."); // Si falla, la promesa se rechaza con un mensaje de error
      }
    }, 1500);
  });
}

// 🔹 Función asincrónica que usa `await` para esperar la promesa
async function servirCafe() {
  try {
    console.log("🕒 Preparando café..."); // Mensaje inicial antes de la espera
    const mensaje = await prepararCafe(); // Se espera el resultado de la promesa antes de continuar
    console.log(mensaje); // Si la promesa se cumple, se imprime el mensaje recibido de `resolve()`
  } catch (error) {
    console.error(error); // Si la promesa falla (`reject()`), el error se captura y se muestra en consola
  } finally {
    console.log("🔚 Fin del proceso de café."); // Se ejecuta siempre, sin importar si hubo éxito o fallo
  }
}

// 🔹 Ejecutamos la función que simula el servicio de café
servirCafe();
```

## ¿Qué retorna una función `async`?

> Una función declarada con async **siempre retorna una promesa**, incluso si tú no usas await ni retornas explícitamente una promesa.
> 
- Lo que sea que retorne será envuelto automáticamente como una Promesa.

### Tabla: Retornos posibles en una función `async`

| Retorno dentro de la función async | Retorno real | ¿Qué puedes hacer con eso? |
| --- | --- | --- |
| `return 42` | `Promise<number>` | Esperar `await`, o `.then(valor => ...)` |
| `return 'texto'` | `Promise<string>` | Puedes tratarlo como string tras `await` |
| `return { ok: true }` | `Promise<Object>` | Manipularlo como objeto |
| `throw new Error('Ups')` | ❌ Rechaza promesa | Capturable con `catch()` o `try/catch` |
| `return await otraPromesa` | ✅ Se encadena | Flujo continuo, sin nesting |

## ¿Cómo invocar correctamente una función `async`?

> Recordemos: **una función `async` siempre devuelve una promesa**, así que no importa cómo la invoques, siempre obtendrás eso. Lo que cambia es **dónde y cómo la consumes**.
> 

### 1. Desde otra función `async` → usando `await`

> Aunque cada función `async` retorna una promesa, **no es una cadena infinita**, porque en algún punto esa promesa **se consume(No hay `return`)** y el flujo **se detiene para operar con el resultado**.
> 

Ejemplo explicativo

```jsx
async function obtenerDatos() {
  const datos = await getUser();
  return datos;
}

// Esta también debe ser async para poder usar await
async function main() {
  const resultado = await obtenerDatos();
  console.log(resultado);
}

```

### 2. Desde código que no puede usar `await` → usando `.then()`

```jsx
async function obtenerDatos() {
  return { usuario: 'Erick' };
}

obtenerDatos().then(res => {
  console.log(res);
});

```

🔹 Ideal para scripts donde no puedes usar `await` directamente (como funciones no marcadas como `async` o código global).

### Que pasa si no uso await o una consumidor de promesas al ejecutar una funcion async que retorna un valor?

> Si la funcion async retorna un valor y no usas await, **obtienes una promesa en lugar del resultado de la promesa**
> 

Ejemplo

- Obtienes una promesa, no el valor 42

```jsx
async function obtenerDato() {
  return 42;
}

const resultado = obtenerDato(); // 🔸 Esto es una promesa
console.log(resultado);          // → Promise { 42 }
```