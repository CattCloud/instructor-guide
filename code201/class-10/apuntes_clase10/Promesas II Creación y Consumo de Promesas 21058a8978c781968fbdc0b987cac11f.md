# Promesas II : Creación y Consumo de Promesas

## FASES DE PROMESAS

| Concepto | ¿Qué significa? |
| --- | --- |
| 🛠️ **Creación** | Es cuando tú defines una promesa. Usas el constructor `new Promise(...)`. |
| 🍽️ **Consumo** | Es cuando usas `.then()`, `.catch()` o `await` para **trabajar con el resultado** de una promesa. |
- Crear una promesa **es como pedir comida a domicilio**.
- En caso de éxito de la promesa **`(resolve)`**: Consumir la promesa **es recibir el pedido y comerlo**.
- En caso de fallo de la promesa `(reject)`: Consumir la promesa **es pedir otra cosa por ejemplo**.

> Puedes consumir promesas que tú mismo creas o que vienen de librerías/Apis (como fetch()).
> 

# Flujo para trabajar con Promesas

## 1. Creación de una promesa

> Recuerda que las promesas son **objetos.**
> 
1. Creamos el objeto Promesa, se usa el constructor `new Promise()`.
2. **Parámetro del Constructor:** El constructor recibe una **función** con `resolve` y `reject` como parametros.
    - `resolve(valor)` → Resuelve la promesa con un **resultado exitoso**.
    - `reject(error)` → Rechaza la promesa con un **motivo o error**.
- Esta funcion que recibe el constructor es la que determinara el estado final de la promesa
- Debe contener **código asincrónico** dentro.

<aside>

**Sintaxis**

```jsx
const promesa = new Promise((resolve, reject) => {
  // Lógica asincrónica
  // Operación que tardará cierto tiempo
  resolve(valor);  // Éxito
  reject(error);   // Fallo
});
```

</aside>

### **Inicio de la operación asincrónica : Resolución o Rechazo de la promesa**

- **Se ejecuta el código dentro de la promesa**
    
    > En este punto, la promesa está en **estado `pending`** (pendiente) y, en algún momento, se tomará una decisión.
    > 
    - **La promesa paso a estado cumplida :** Se llama a la funcion `resolve` si todo está bien.
        
        > Indica que la operación fue exitosa y se devuelve un valor.
        > 
    - **La promesa paso a estado rechazada:** Se llama a `reject` si hay un error.
        
        > Indica que ocurrió un error y se devuelve una razón del fallo.
        > 
    
    Una vez se llama a uno de ambos, termina la ejecución de la funcion de la promesa.Y se obtiene el resultado
    

<aside>

**Ejemplo** 

```jsx
new Promise((resolve, reject) => {

    // Obtenemos un número del 1 al 6
    const number = 1 + Math.floor(Math.random() * 6);

    // Si el número es 6, cumplimos la promesa
    if (number === 6) {
      resolve(number)
    }

    // Si no es 6, rechazamos la promesa
    reject(number);
  });
```

</aside>

## `reject` y `resolve` no se definen manualmente

> **`resolve` y `reject` son funciones que JavaScript proporciona automáticamente dentro del constructor `Promise()`**, por lo que **no necesitas definirlas manualmente**. 
Estas funciones sirven para **finalizar la promesa** y pasar un valor al consumidor (`.then()` o `.catch()`)
> 

### **¿Dónde se usan los valores de `resolve` y `reject`?**

> Los parámetros que reciben `resolve()` y `reject()` **se pasan automáticamente a los métodos de consumo (`.then()` o `.catch()`)**.
> 
- **`resolve(valor)` → Se ejecuta cuando la operación es exitosa.**
    
    > El valor que envíes en `resolve(...)` **se recibe en `.then()`**.
    > 
- **`reject(error)` → Se ejecuta cuando la operación falla.**
    
    > El valor que envíes en `reject(...)` **se recibe en `.catch()`**.
    > 

<aside>

**Ejemplo** 

- `resolve("✅ Acceso permitido")` → El mensaje pasa a `.then(mensaje)`.
- `reject("🚫 Acceso denegado")` → El mensaje pasa a `.catch(error)`

```jsx
const verificarEdad = new Promise((resolve, reject) => {
  const edad = 17;

  if (edad >= 18) {
    resolve("✅ Acceso permitido");
  } else {
    reject("🚫 Acceso denegado");
  }
});

verificarEdad
  .then(mensaje => console.log(mensaje))   // Recibe el valor de `resolve`
  .catch(error => console.error(error));  // Recibe el valor de `reject`
```

</aside>

## 2. Consumir una promesa

> Esperar y **usar el resultado** (o manejar el error) de una operación asincrónica una vez que la promesa se ha resuelto o rechazado.
> 
- `resolve(valor)` o `reject(error)` **solo envían o generan el resultado**, no lo procesan.
    
    > Cuando creas una promesa, **su resultado no se obtiene inmediatamente**, sino que se entrega en el futuro. Por eso, **aunque el código de la operación ya se ejecutó, tú todavía debes recibir su resultado** y decidir qué hacer con él.
    > 
- Si no consumes una promesa, **nunca usas su resultado**, y tu código se vuelve incompleto o ineficaz.

> Existen 2 formas de consumir promesas:
> 
> - Con `.then()` / `.catch()` / `.finally()`
> - Con `async` / `await` (dentro de funciones `async`)

## Consumo de promesas con `.then()` , `.catch()` y `.finally()`

> Son **métodos** del objeto **Promesa.**
> 

Se ejecutan **automáticamente** dependiendo del estado de la promesa.

- **`.then()`** → Se ejecuta cuando la promesa **se resuelve (`resolve()`) correctamente**. Se usa `.then()` para manejar el éxito.
- **`.catch()`** → Se ejecuta cuando la promesa **falla (`reject()`)**.Se usa `.catch()` para manejar errores.
- **`.finally()`** → Se ejecuta **siempre luego de then o catch**, se ejecuta sin importar si la promesa se resolvió o rechazó.

<aside>

**Sintaxis** 

```jsx
promesa
  .then((resultado) => {
    // aquí consumes el resultado exitoso : promesa cumplida
  })
  .catch((error) => {
    // aquí consumes el error si algo falló : promesa rechazada
  })
  .finally(() => {
    // aquí haces algo sin importar el resultado
  });
```

</aside>

<aside>

**Ejemplo**

```jsx
function pedirComida(plato) {
  return new Promise((resolve, reject) => {
    console.log(`🍽️ Pedido recibido: ${plato}`);

    setTimeout(() => {
      const exitoso = Math.random() > 0.3; // 70% de éxito

      if (exitoso) {
        resolve(`✅ Tu plato "${plato}" está listo! 🍲`);
      } else {
        reject(`❌ Lo sentimos, no tenemos ingredientes para "${plato}".`);
      }
    }, 2000);
  });
}

// 📌 Consumimos la promesa:
pedirComida("Pasta Alfredo")
  .then(respuesta => console.log(respuesta))  // Se ejecuta si todo salió bien
  .catch(error => console.error(error))      // Se ejecuta si hay un fallo
  .finally(() => console.log("🔚 Pedido finalizado, gracias por su visita!"));
```

</aside>