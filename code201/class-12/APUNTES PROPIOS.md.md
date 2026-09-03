# MANEJO DE ERRORES
## ¿Por qué ocurren errores en JavaScript?

### **Tipos de errores en JavaScript y sus causas**

| **Tipo de Error** | **Descripción** | **Ejemplo** | **Cómo prevenirlo** |
| --- | --- | --- | --- |
| **SyntaxError** | 📌 Se produce cuando el código tiene un error de sintaxis. JavaScript no puede entenderlo. | `console.log("Hola"` ❌ (Falta el cierre de `)` ) | ✅ Revisa bien la sintaxis antes de ejecutar el código. Usa linters como ESLint. |
| **ReferenceError** | 📌 Ocurre cuando intentamos acceder a una variable que no está definida. | `console.log(noExiste);` ❌ (La variable `noExiste` no está declarada) | ✅ Asegúrate de que todas las variables estén declaradas antes de usarlas. |
| **TypeError** | 📌 Sucede cuando se intenta ejecutar una operación sobre un tipo de dato inválido. | `"Hola".push("Mundo");` ❌ (`push()` solo funciona en arrays, no en strings) | ✅ Verifica el tipo de dato antes de llamar métodos (`typeof`, `instanceof`). |
| **RangeError** | 📌 Se genera cuando un número está fuera del rango permitido, como en un bucle infinito o un array demasiado grande. | `new Array(10**10);` ❌ (Intentar crear un array demasiado grande) | ✅ Limita valores y revisa que los cálculos sean razonables. |
| **URIError** | 📌 Se produce cuando se usa mal una función de codificación de URI, como `decodeURIComponent()`. | `decodeURIComponent("%")` ❌ (El `%` no es válido solo) | ✅ Revisa que las URLs estén correctamente codificadas antes de decodificarlas. |
| **Errores en API y red** | 📌 Se generan cuando una conexión falla o la respuesta de un servidor es inválida. | `fetch("https://api.invalida.com")` ❌ (La API no existe) | ✅ Maneja errores con `try...catch` y `fetch().catch(error => {...})`. |
| **Entrada de datos inesperada** | 📌 Ocurre cuando los datos ingresados no tienen el formato esperado. | `parseInt("Hola")` ❌ (No puede convertir `"Hola"` en número) | ✅ Valida entradas de usuario antes de procesarlas (`isNaN()`, `typeof`). |

## ¿Qué pasa si no manejamos errores?

> Sin manejo de errores, el script **se detiene inmediatamente** y muestra el error en la consola.
> 
- El programa se **detiene abruptamente**
- Se interrumpe la ejecución del código siguiente
    
    ```jsx
    console.log("Inicio del script");
    console.log(nombre); // ❌ Error: `nombre` no está definido
    console.log("Este código nunca se ejecutará");
    ```
    
- Puede provocar una **mala experiencia de usuario**

## Manejo de errores: Uso de `try...catch`

> Para manejar errores en JavaScript se usan los bloques `try-catch`
**`try...catch` en JavaScript funciona como un mecanismo de control de errores**
> 

| Fase | Acción |
| --- | --- |
| `try` | Bloque que contiene el código que se desea manejar, se ejecuta el código, si hay error, **salta al `catch`** |
| `catch (error)` | Recibe el objeto de error y permite manejarlo o mostrarlo |
| `finally` | **Siempre** se ejecuta(hay errores o no), ideal para limpieza o mensajes finales |

<aside>

### Sintaxis básica:

**error**: Es el objeto `Error`

El error se pasa como argumento para `catch`

```jsx
try {
  // Código que puede lanzar un error
} catch (error) {
  // Código para manejar el error
} finally {
  // (Opcional) Código que se ejecuta siempre, ocurra o no un error
}
```

```jsx
function proceso() {
  try {
    console.log("Inicio del proceso...");
    let data = JSON.parse("{ dato incorrecto }"); // ❌ Esto causa un error
    console.log("Fin del proceso"); // 🚫 Nunca se ejecuta

  } catch (err) {
    console.log("¡Error detectado!");
    console.log("Nombre del error:", err.name);  // "SyntaxError"
    console.log("Mensaje:", err.message); // "Unexpected token d in JSON at position 2"

  } finally {
    console.log("Finalizando el proceso..."); // ✅ Siempre se ejecuta
  }
}

proceso();
```

</aside>

## Flujo de ejecución: Como funciona internamente el manejo de errores

!image.png

1. **Inicio de ejecución**
    
    ✅ El código comienza a ejecutarse dentro del bloque `try`.
    
    ✅ Si todo funciona correctamente, **se ignora `catch`** y el programa continúa su ejecución.(Flujo sin errores)
    
2. **Creación del objeto de error (`Error`)**
    
    ✅ Si ocurre un **error dentro de `try`**, **JavaScript crea automáticamente un objeto de error** (Ejemplo: `new Error("Mensaje del error")`).
    
    ✅ El flujo de ejecución **se detiene inmediatamente** dentro de `try`.Se ignora el resto de codigo de `try`
    
    ✅ **El error es capturado por `catch`**, que recibe el objeto de error como parámetro (`catch(err)`).
    
3. **Ejecutar código dentro de `catch`**
    
    ✅ Se ejecuta el bloque `catch`, donde el programador **decide cómo manejar el error**.
    
    ✅ Se puede:
    
    - Mostrar un mensaje (`console.error(err.message)`).
    
    - Relanzar (`throw err`) si no es manejable.
    
    - Corregir datos y continuar la ejecución.
    
4. **Ejecución de `finally` (Siempre se ejecuta)**
    
    ✅ Después de `try` y `catch`, el bloque `finally` se ejecuta **sin importar si hubo error o no.**
    
    ✅ Se usa para limpiar datos, cerrar conexiones o asegurar que ciertos procesos se completen.
    
5. **Propagación de errores (Si no hay `try...catch`)**
    
    ✅ Si no existe `try...catch`, el error se **propaga** al nivel superior y puede **romper todo el programa**.
    
    ✅ En el navegador, los errores sin manejar aparecen en la consola.
    

## Objeto `Error`

<aside>

**Todos los errores en JavaScript se basan en la clase `Error`**, que actúa como la clase **base** para los errores.
Cuando JavaScript genera un error dentro de un bloque `try`, **crea una instancia de la clase `Error` o de alguna de sus subclases** (como `ReferenceError`, `TypeError`, `SyntaxError`, etc.).

</aside>

> Es un objeto que **JavaScript genera automáticamente** cuando ocurre un error en el código.
Contiene **propiedades importantes** para ayudar en la identificación del problema.
> 

### Propiedades del objeto Error

| **Propiedad** | **Descripción** |
| --- | --- |
| **name** | Tipo de error (ej. `ReferenceError`, `SyntaxError`) |
| **message** | Contiene un texto explicativo sobre el error.
Es útil para mostrar información al usuario o registrar logs. |
| **stack** | Contiene la pila de ejecución, indicando **dónde** ocurrió el error.
**Muestra la secuencia de llamadas** que llevaron al error. |

<aside>

**Ejemplo**

```jsx
try {
  noExiste();
} catch (err) {
  console.log(err.name);     // ReferenceError
  console.log(err.message);  // noExiste is not defined
  console.log(err.stack);    // Traza completa del error
}
```

</aside>

## Mejores prácticas

- No ocultes errores silenciosamente: muestra mensajes útiles.
- Usa `finally` para liberar recursos o dejar mensajes.
- No pongas toda tu app dentro de un solo `try...catch`.
- Puedes lanzar errores personalizados con `throw`.
---
# ERRORES PERSONALIZADOS
## Introducción

> JavaScript permite generar **errores personalizados** para manejar condiciones específicas dentro del código.
> 

### **Casos Usuales de Errores Personalizados en JavaScript**

| **Caso** | **Descripción** |
| --- | --- |
| **Validación de datos** | 📌 Se ingresan datos incompletos o incorrectos. |
| **Errores en APIs** | 📌 La API devuelve un código de estado incorrecto. |
| **Restricciones de acceso** | 📌 Se intenta realizar una acción sin permisos adecuados. |
| **Procesos asíncronos (`async/await`)** | 📌 Un proceso asíncrono falla y detiene la ejecución. |
| **Errores en estructuras de datos** | 📌 El formato de datos recibidos no es válido. |

## Como crear un error personalizado?

> La **forma más común y recomendada** es usar la clase `Error`
El parámetro que se le pasa al constructor de `Error` es el valor del mensaje del error(.msg)
> 

**Sintaxis**

```jsx
new Error("Mensaje del error personalizado.");

//Usado con una variable
let error = new Error(message);
```

### Error personalizado enriquecido (con propiedades propias)

> Para que un error lleve más contexto (no solo un string mensaje sino mas tipos de datos), podemos extender la clase Error y agregar nuestras propias propiedades.
> 

**Paso a paso**

### 1. Crear clase personalizada extendiendo `Error`

> Creando tus propias propiedades
> 

```jsx
class ErrorPersonalizado extends Error {
  constructor({ mensaje,propiedad,propiedad2, ...}) {
    super(mensaje);         // mensaje visible en error.message
    this.propiedad= propiedad;       // propiedad extra..
    this.propiedad2=propiedad2;
    ...
  }
}

```

### 2. Lanzar el error personalizado

> Al lanzar el error, pasamos los valores de la propiedades definidas
> 

```jsx
throw new ErrorPersonalizado ({
  propiedad: valor_propiedad,
  mensaje: "No tienes permiso para acceder a estos contactos"
});

```

> Se puede lanzar desde cualquier lugar: funciones, fetch, validaciones, etc.
> 

### 3. Capturarlo con `try...catch`

```jsx
try {
  //Aca lanzamos el error
} catch (error) {
  if (error instanceof ErrorPersonalizado ) {
    //Que haras con ese error?
    renderError({ codigo: error.codigo, descripcion: error.message });
  } else {
    // Error desconocido (puede ser TypeError, ReferenceError, etc.)
    console.error("Error inesperado:", error);
  }
}

```

## Operador throw: Generar o lanzar errores manualmente

> Se usa `throw` para generar un error manualmente. Usualmente errores personalizados.
Es como un indicador al sistema que dice “Ocurrio un error aqui”
> 

**Sintaxis**

```jsx
throw objetoError
```

<aside>

Cuando usamos `throw` para lanzar errores personalizados en JavaScript, es **obligatorio** manejarlos con `try...catch`.

- Sin `try...catch`, el error se propagará y puede romper todo el programa
</aside>

<aside>

El sistema **ya genera automáticamente los errores estándar** (`ReferenceError`, `TypeError`, `SyntaxError`, etc.), por lo que **usamos `throw` para generar errores personalizados** cuando queremos manejar condiciones específicas en nuestro código.

```jsx
throw new Error("Esto es un error personalizado");
```

</aside>

<aside>

**Ejemplo manejo de un error personalizado** 

```jsx
function validarEdad(edad) {
  if (edad < 0) {
    throw new Error("La e dad no puede ser negativa.");
  }
  return "Edad válida";
}

try {
  validarEdad(-5); // ❌ Genera un error personalizado
} catch (err) {
  console.log("Error detectado:", err.message); // "La edad no puede ser negativa."
}
```

</aside>

---
# Estados UI Fundamentales

<aside>

**Contexto:**
Los usuarios esperan que las aplicaciones sean **responsivas**, y si no reciben feedback al interactuar con la app, pueden asumir que algo salió mal. 
Por eso necesitamos manejar estos estados

</aside>

> Cuando la interfaz depende de datos externos (como los que vienen de una API), debe **reflejar su estado actual** para brindar una experiencia de usuario clara, fluida y profesional. Los estados más comunes son:
> 

## 1. Loading State (Cargando)

> Es el estado que aparece **mientras los datos aún no han llegado**. Representa la espera mientras se completa la petición a la API.
> 

**Cuándo sucede:** Durante peticiones HTTP activas (Justo **después de iniciar** la petición HTTP, y **antes** de recibir una respuesta.)
**Propósito:** Mostrar que la app está trabajando, no congelada

- Indicar al usuario que algo está ocurriendo (para que no piense que la app está congelada).
- Cancelar solicitudes si el componente se desmonta (en apps reactivas como React).
- Evitar que el usuario interactúe con contenido incompleto.

## 2. Error State (Error)

> Estado que indica que **algo falló durante la solicitud** de datos.
> 

**Cuándo:** Fallan las peticiones o hay problemas

- Cuando ocurre un **error de red** (no hay conexión, timeout).
- Cuando el servidor **responde con error HTTP** (como 404, 500).
- Cuando ocurre un error en el **código del frontend** al interpretar la respuesta

**Propósito:** Informar qué pasó y cómo solucionarlo

- Mensaje: `"Lo sentimos, ocurrió un error."`
- Botón de **Reintentar (Retry)**
- Mostrar el **código de estado HTTP**

**Buenas prácticas:**

- Diferenciar entre error de red y error del servidor.
- No exponer detalles técnicos innecesarios al usuario.
- Incluir una acción correctiva (botón de reintentar, contacto de soporte, etc.).

## 3. Empty State (Vacío)

> El servidor respondió correctamente, pero **no hay datos para mostrar**.
> 

**Cuándo:** La petición fue exitosa pero no hay datos

- Cuando el `array` de datos está vacío: `[]`
- Cuando el contenido esperado aún no existe (por ejemplo, un usuario nuevo que aún no tiene publicaciones)

**Propósito:** Explicar por qué no hay contenido y qué hacer

- Mensaje: `"Aún no tienes elementos."`
- Ilustración simpática o icono informativo
- Botón para **crear o agregar** contenido

**Buenas prácticas:**

- No tratarlo como un error: **es un estado válido.**
- Aprovecha para guiar al usuario a su siguiente acción ("Agrega tu primer item", "Sube tu primera foto", etc.).

## Estados combinados y dinámicos

- Algunos componentes pueden pasar por estos estados **en secuencia** (Loading → Error, o Loading → Empty).
- Otros pueden mantenerse en uno solo (por ejemplo, un componente de lista puede iniciar directamente en Empty si no hay datos).

## **Patrones de UX para Estados de UI**

> Son **buenas prácticas de diseño de experiencia de usuario (UX)** para manejar **Loading, Error y Empty States** en la interfaz de manera **más humana, intuitiva y útil para el usuario**.
No solo se trata de mostrar un mensaje, sino de **cómo se muestra**, **qué comunica** y **cómo mejora la interacción**.
> 

### **Loading States (Estados de Carga)**

Cuando una acción o componente está esperando datos o finalizando un proceso.

- **Skeleton Screens**
    - Se muestran **bloques grises animados** con la forma del contenido real (textos, imágenes, cards).
        - Muestran la **estructura** del contenido que va a aparecer
    - Son **mejores que spinners** cuando el usuario ya sabe qué esperar (ej: una lista de productos).
    
    > **Ventaja UX**: reduce la percepción de espera. Da la sensación de que “ya está cargando algo”.
    > 
- **Progress Indicators**
    - Barras de progreso o pasos numerados.
    - Son ideales cuando el proceso tiene pasos:
        - Se usan en procesos largos como formularios por pasos, cargas o instalaciones.
        - Subir archivo: 0% → 50% → 100%
        - Registro: Datos personales → Verificación → Completado
    
    > **Ventaja UX**: da **control y previsibilidad**, el usuario sabe cuánto falta.
    > 
- **Optimistic Updates**
    - Se muestra el cambio **antes de recibir la confirmación del servidor**.
    - Ejemplo: al darle "like" a una publicación, se actualiza de inmediato en pantalla, aunque el servidor aún no haya respondido.
        - Cuando el usuario da "like", lo muestras inmediatamente
        - Si falla la petición, entonces lo reviertes
    
    > **Ventaja UX**: **experiencia instantánea**, parece que la app responde rápido.
    > 

### **Error States (Estados de Error)**

> Cuando algo falla (red, validación, permisos, etc.).
> 
- **Errores Contextuales**
    - El error se muestra **cerca del elemento que falló**.
        - Aparecen exactamente donde ocurrió el problema
    - Ejemplo: si un campo de un formulario está vacío, el mensaje va **debajo del campo**, no arriba de todo.
    
    > **Ventaja UX**: ayuda al usuario a saber **dónde actuar**.
    > 
- **Acciones de Recuperación**
    - Botones como "Reintentar", "Recargar", "Contactar soporte" ,”Ir atras”.
    
    > **Ventaja UX**: el error **no es una pared**, se convierte en una oportunidad de acción.
    > 
- **Mensajes Claros**
    - Mensajes que **explican qué pasó y qué puede hacer el usuario**.
    - Evitar cosas como `"Error 500"` o `"Algo salió mal"` sin más detalle.
    
    > **Ventaja UX**: reduce la frustración y da claridad.
    > 

### **Empty States (Estados Vacíos)**

> Cuando no hay datos para mostrar.
> 
- **Mensajes Útiles**
    - Explican **por qué** no hay contenido.
    - Ejemplo: “Aún no has agregado ningún producto”,"No encontramos resultados para 'pizza'”
- **Llamadas a la Acción**
    - Botones que guían el siguiente paso
    - Botones como “Agregar producto”, “Sube tu primera foto”.
    
    > **Ventaja UX**: ayuda al usuario a **comenzar** o saber el **siguiente paso**.
    > 
- **Ilustraciones**
    - Dibujos simpáticos o íconos informativos (con estilo amigable).
    
    > **Ventaja UX**: hace el vacío **menos incómodo o frustrante**, y más humano.
    >