# Función setTimeout

## **¿Qué es `setTimeout`?**

> **Función para ejecutar código después de un tiempo**
setTimeout es una función de temporización que retrasa la ejecución de una función o fragmento de código por un periodo de tiempo determinado (en milisegundos).
> 
- Es una forma **sencilla de programar tareas asincrónicas** sin usar promesas.
- Es **nativa de JavaScript** y se ejecuta en el **Event Loop no en el hilo principal**, no bloquea el resto del código.
- No bloquea el hilo principal: otras instrucciones se siguen ejecutando mientras `setTimeout` espera.
- El tiempo no es exacto: depende de la carga del navegador y el Event Loop.
    
    <aside>
    
    ## **Casos de uso comunes**
    
    - Simular operaciones asincrónicas.
    - Crear retrasos intencionales.
    - Ejecutar tareas después de animaciones o interacciones.
    - Probar manejo de código asincrónico.
    </aside>
    

## **Sintaxis basica**

```jsx
setTimeout(funcion flecha, tiempoEnMilisegundos);
```

| Parámetro | Descripción |
| --- | --- |
| **funcion** | Código o función que se ejecutará una vez pasado el tiempo. |
| **tiempoEnMilisegundos** | Cantidad de milisegundos a esperar antes de ejecutar la función. |

> El código dentro de `setTimeout` se ejecuta **una sola vez** después del tiempo indicado.
> 

<aside>

**Ejemplo**
Flujo:
****1️⃣ Se imprime "⏱️ Esperando 3 segundos..."

2️⃣ Se programa la función para que se ejecute en 3000 ms (3 s).

3️⃣ Se imprime "📌 Esto se muestra inmediatamente" **sin esperar**.

4️⃣ Después de 3 s, se ejecuta el `console.log` dentro de `setTimeout`.

```jsx
console.log("⏱️ Esperando 3 segundos...");

setTimeout(() => {
  console.log("🎉 Han pasado 3 segundos!");
}, 3000);

console.log("📌 Esto se muestra inmediatamente.");

```

</aside>

<aside>

**Sintaxis con parámetros : Para funciones estandar que se pasan como parametro de setTimeout**

> Puedes pasar argumentos adicionales a la función ejecutada
> 

| **parametros *(opcional)*** | Argumentos que se pasarán a la función cuando se ejecute. |
| --- | --- |

```jsx
setTimeout(funcion, tiempoEnMilisegundos, parametro1, parametro2, ...);
```

**Ejemplo**

```jsx
function saludar(nombre) {
  console.log(`👋 Hola, ${nombre}!`);
}

setTimeout(saludar, 2000, "Erick");
// Después de 2 segundos → "👋 Hola, Erick!"

```

</aside>

## **Cancelar un `setTimeout`**

> Puedes cancelar un setTimeout antes de que se ejecute usando **`clearTimeout`**.
La funcion `setTimeout` retorna **un ID de temporizador** (un número), que sirve para **cancelarlo si es necesario**.
> 

```jsx
const temporizador = setTimeout(() => {
  console.log("Esto no debería verse 😅");
}, 5000);

clearTimeout(temporizador);
console.log("🚫 Temporizador cancelado.");

```