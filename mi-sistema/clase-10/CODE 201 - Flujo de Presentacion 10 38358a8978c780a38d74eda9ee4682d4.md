# CODE 201 - Flujo de Presentacion 10

## MOMENTO 1 — Asincronía

### 1.1 Dinámica de apertura — pedir una pizza

**EN PANTALLA: NADA — dinámica conversada con el grupo (la pantalla entra recién en 1.3).**

> **Tu apertura:***"Antes de tocar una sola línea de código, quiero que pensemos en algo cotidiano: **pedir una pizza**. Lo hacemos todos.*
> 

> **Tu desarrollo de la dinámica (paso a paso, preguntando al grupo):**
*"Paso 1: abro la app y hago el pedido. Listo, la pizzería ya lo recibió."*
> 
> 
> *"Paso 2 — y acá va la pregunta clave: mientras la pizza se prepara y espera el pedido , ¿qué haces? ¿Me quedo parado en la puerta treinta minutos hasta que llegue?"(Dejar que respondan. La respuesta natural: "no, sigo con mis cosas".)*
> 
> *"Exacto. Pongo la mesa, sigo viendo la serie, contesto un mensaje. Hago otras cosas. No congelo mi vida esperando."*
> 
> *"Paso 3: suena el timbre. Recién AHÍ dejo lo que estaba haciendo y bajo a recibir la pizza. El timbre es mi señal de que el pedido ya está."*
> 

> **Tu cierre de la dinámica (nombrar el concepto):***"Eso que acaban de describir tiene nombre en programación. Pedir algo que tarda, NO quedarse congelado esperándolo, seguir trabajando, y reaccionar cuando por fin llega: eso es la **asincronía**.."*
> 

### 1.2 Qué es asincronía + situaciones asíncronas usuales

**EN PANTALLA: Excalidraw**

> **Tu explicación teórica precisa:***"La **asincronía** es la capacidad de ejecutar una tarea  que **tarda** sin **bloquear** el resto del programa. 
Lanzo la tarea que tarda, sigo ejecutando las líneas siguientes, y vuelvo a ocuparme del resultado cuando esté listo."*
> 

> **Tu explicación — por qué JavaScript la necesita (single-thread):***"Hay un dato técnico que lo explica todo: JavaScript es **single-thread**, hace **una sola cosa a la vez , RECUERDA  LA LINEA DE EJECUCION a eso me refiero**. No tiene varias lineas de ejecucion en paralelo: tiene uno solo."*
> 
> - *"Si esa unica linea de actividad se quedara congelado esperando a que llegue la pizza —digo, los datos— toda la página se traba: no responde un clic, no se desplaza, nada. Se congela entera."*
> 
> **Ejemplo de tarea bloqueante (sincrónica):**
> 
> ```jsx
> while (true) {
>   // bloquea todo el programa
> }
> ```
> 
> - *"Con ASINCRONIA:  JavaScript NO espera parado. ejecuta lo que tarda, sigue atendiendo todo lo demás, y reacciona cuando el resultado llega. La asincronía es lo que mantiene la página fluida."*

### **Las situaciones asíncronas usuales:**

*En programación hay varias situaciones que son asíncronas por naturaleza, y a algunas ya se enfrentaron sin saber el nombre:"*

| Situación asíncrona | Qué es | ¿Ya la usaron? |
| --- | --- | --- |
| **Temporizadores** (setTimeout, setInterval) | Ejecutar algo *después* de un tiempo | La vemos en un minuto |
| **Eventos del DOM** (click, input) | El código "espera" una acción del usuario sin congelarse | Sí — el buscador con input de C09 |
| **Peticiones de red** (pedir datos a un servidor) | Traer datos que viven en internet | Es lo central de hoy (M3) |
| **Lectura de archivos / base de datos** | Operaciones de disco que tardan | Más adelante |

> • *"Todas comparten lo mismo: algo que tarda y que NO detiene el programa. Hoy nos enfocamos en las **peticiones de red** — pero el mecanismo que vamos a aprender sirve para todas."*
> 

### 1.3 setTimeout — la herramienta para "algo que tarda"

**EN PANTALLA: VS CODE - EXCALIDRAW — escribir un ejemplo mínimo de setTimeout.**

> **Tu apertura:***"Para probar la asincronía en vivo necesito una tarea que tarde un tiempo, pero **controlado** —ESO SON LOS TEMPORIZADORES—. JavaScript tiene una funcion perfecta para eso: setTimeout."*
> 

> **Tu explicación teórica precisa:***"
setTimeout*  es una función de temporización que *ejecuta una función **una sola vez, después de un tiempo de espera**. Recibe dos cosas:"*
> 
> 
> ```jsx
> setTimeout(función, milisegundos);
> //          ↑          ↑
> //   qué ejecutar   cuánto esperar antes (1000 ms = 1 segundo)
> ```
> 
> - *"Primer parámetro: la **función** que quiero ejecutar más tarde."*
> - *"Segundo parámetro: **cuántos milisegundos** espera antes de correrla. Ojo: en milisegundos, así que 3 segundos son 3000."*
- No bloquea el hilo principal: otras instrucciones se siguen ejecutando mientras setTimeout espera.

<aside>

### **Casos de uso comunes**

- Simular operaciones asincrónicas.
- Crear retrasos intencionales.
</aside>

> **Code-along — ejemplo mínimo:**
> 
> 
> ```jsx
> setTimeout(() => {
>   console.log("Pasaron 3 segundos");
> }, 3000);
> ```
> 
> *(Correr y esperar: el mensaje aparece recién a los 3 segundos.)*
> 

> **Tu explicación — por qué es la herramienta ideal para hoy (el puente a la demo):**
> 
> - *"Lo importante de setTimeout no es solo que espera: es que **NO bloquea**. Programa la función para más tarde y deja que el programa siga ejecutando lo de abajo. Es asíncrono de manual."*
> - *"Por eso es ideal para demostrar la asincronía: yo controlo cuánto 'tarda', y vemos qué hace JavaScript mientras tanto."*

### 1.4 Demo determinística — el orden de ejecución

**EN PANTALLA: VS CODE** 

> **Tu apertura:***"Ya sabemos qué hace setTimeout. Ahora lo usamos para ver la asincronía en acción: voy a rodear el setTimeout con mensajes que cuenten la historia de la pizza —no un '1, 2, 3' pelado— y vemos en qué orden salen."*
> 

> **Code-along / demo en vivo:**
> 
> 1. Escribir en app.js (o directo en la consola):
> 
> ```jsx
> console.log("1. Hago el pedido: pido la pizza por la app");
> 
> setTimeout(() => {
>   console.log("3. ¡Suena el timbre! La pizza llegó (pasaron 2 segundos)");
> }, 2000);
> 
> console.log("2. Mientras espero: pongo la mesa y sigo con lo mío");
> ```
> 
> 1. Correr y leer la consola **en voz alta**, en el orden en que aparece:
> 
> ```
> 1. Hago el pedido: pido la pizza por la app
> 2. Mientras espero: pongo la mesa y sigo con lo mío
> 3. ¡Suena el timbre! La pizza llegó (pasaron 2 segundos)
> ```
> 

> **Tu explicación teórica precisa (el punto que más cuesta):***"Miren bien: el mensaje **3** está escrito ANTES que el **2** en el código… pero en la consola sale ÚLTIMO. ¿Por qué?"*
> 
> - *"Porque setTimeout es asíncrono: JavaScript no se queda esperando los 2 segundos. Lanza el temporizador, sigue de largo, ejecuta el 2, y recién cuando el tiempo se cumple ejecuta el 3."*
> - *"El 3 es el timbre de la pizza: corre cuando el pedido está listo, no cuando lo escribimos."*
> 
> ### *"Conclusión: **el código no siempre se ejecuta en el orden en que se lee.** Porque , porque ahi tareas que tardan y lo que tarda se aparta y se resuelve después."*
> 

## MOMENTO 2 — MANEJAMOS LA ASINCRONIA - Promesas

### 2.1 Qué es una Promesa + sus estados

**EN PANTALLA: VS CODE — el editor a la vista. (Apoyo: EXCALIDRAW — los tres estados de la Promesa.)**

> **Tu apertura (engancha con M1):***"Cuando una operación asíncrona arranca, todavía no tenemos el resultado porque tarda, pero tenemos la garantía de que llegará. Ese 'pedido en camino' es un objeto real de JavaScript, con nombre: la **Promesa**."*
> 

> **Tu explicación teórica precisa:**
*"Una **Promesa** es un objeto que representa el **resultado futuro** de una operación asíncrona: un 'vale' por un valor que **todavía no está, pero va a llegar** (o va a fallar). No te entrega el resultado de la operacion inmediatamente; te entrega el compromiso de ese dato"*
> 

> Piensa en las promesas como un "**compromiso**" que eventualmente se cumple... o no.
Es algo que en principio esperamos que se cumpla en el futuro, pero pueden ocurrir varias cosas en el proceso de cumplimiento de esa promesa.
> 

> **Tu explicación — 
los tres estados:** *"Una promesa pasa por tres estados, y solo se define una vez:"
Pedido de la pizza: cuando lo hacés por la app, te dan un comprobante con tu número de pedido. Ese comprobante NO es la pizza —es la promesa de que va a llegar*
> 
> - **pending (pendiente):** **La promesa **aún no se ha resuelto ni rechazado**.
>     - *Mientras la pizzería la prepara y la manda, el pedido está pending*
> - **fulfilled (cumplida):** *salió bien  →* La promesa **se resolvió correctamente**.
>     - *Si llega a tu puerta, fulfilled.*
> - **rejected (rechazada):** *salió mal →* La promesa **fue rechazada** por un error
>     - *Si la pizzería te avisa que no puede entregarla, rejected*
> - *"Una vez que pasa a cumplida o rechazada, queda fija: una promesa se resuelve **una sola vez**."*

### 2.1.1 Certeza vs promesa,

**EN PANTALLA: Excalidraw.**

> **Tu explicación teórica precisa:***"Hay que tener claro cuándo un valor es una **certeza** y cuándo es una **promesa**:"*
> 
> 
> **1. Las Certezas (Código Sincrónico) : Tienes la seguridad absoluta de lo que pasa y obtienes el resultado de inmediato ,** 
> No hay esperas, no hay dudas. El navegador tiene el **100% de certeza** de que ese dato existe en ese preciso milisegundo.
> 
> ```jsx
> const numero = 5;            // CERTEZA: el valor ya está, lo uso directo
> ```
> 
>  ***promesas: Si hay espera y no hay seguridad absoluta del resultado de la tarea porque*** **depende de factores externos** fuera del control de tu código (como el servidor, la velocidad del internet del usuario o si el servidor está caído).
> 
> Pero tienes el compromiso de que sucedera algo(bueno o malo)
> 

### 2.2 FASE DE UNA PROMESA → Creación de una Promesa

**EN PANTALLA: VS CODE -EXCALIDRAW**

### **Fases de una promesa**

| Concepto | ¿Qué significa? |
| --- | --- |
| 🛠️ **Creación - Obtencion** | En el desarrollo diario con JavaScript, siempre te vas a encontrar con esos dos escenarios.
1. Llega de forma externa →  Una librería, el navegador o una API externa hacen el trabajo pesado, y a ti **te entregan una promesa ya hecha**.
2. Tu mismo crea la promesa  |
| 🍽️ **Consumo** | Es cuando usas .then(), .catch() o await para **trabajar con el resultado** de una promesa. |

> **Tu apertura:***" vamos a CREAR una promesa nosotros, con un ejemplo que ya nos resulta familiar: pedir comida a un restaurante. 
En el lab no van a crear promesas a mano —vamos a obtener una promesa externamente—, pero crear una hoy para que comprenda como funciona."*
> 

> **Tu explicación teórica precisa: 
Recuerda que una promesa es un objeto y JS ya tiene una clase para Promesas , la clase Promise**
> 
> 
> <aside>
> 
> **Sintaxis**
> 
> - *"Una promesa se crea con el constructor new Promise(...),"*
> - **El Constructor (`new Promise`):** Recibe una función con dos parámetros obligatorios que son funciones internas de JavaScript: `resolve` y `reject`
>     - **resolve(valor)** → *se llama cuando la operación sale bien , le pasas el resultados exitoso*
>     - **reject(error)** → *se llama cuando algo falla , le pasas el resultado fallido*
> - *Dentro va el código asíncrono (lo que tarda), y al final tu decides cuando llamás a resolve o a reject."*
> 
> > **resolve y reject son funciones que JavaScript, tu no las defines(osea no las creas y no pones codigo en su cuerpo) simplementes las usas, invocandolas**
> > 
> 
> ```jsx
> const promesa = new Promise((resolve, reject) => {
>   // Lógica asincrónica
>   // Operación que tardará cierto tiempo
>   resolve(valor);  // Éxito
>   reject(error);   // Fallo
> });
> ```
> 
> </aside>
> 

> **Code-along — construir pedirComida (en un archivo de prueba, no en el proyecto):**
> 
> 
> ```jsx
> // 1. CREACIÓN DE LA PROMESA (El repartidor toma el pedido)
> const prepararPizza = new Promise((resolve, reject) => {
>   console.log("🍕 Pedido recibido: El chef está preparando la pizza...");
> 
>   // Simulamos que la cocina tarda 3 segundos en cocinar
>   setTimeout(() => {
>     const hayIngredientes = true; // Cambiar a 'false' para simular el error
> 
>     if (hayIngredientes) {
>       // Si todo sale bien, ejecutamos resolve() y pasamos los datos
>       resolve("¡Pizza lista y recien echa! Disfruta tu comida. 😋");
>     } else {
>       // Si algo falla, ejecutamos reject() y pasamos el motivo del error
>       reject("Lo sentimos, se nos acabó el queso. Pedido cancelado. ❌");
>     }
>   }, 3000); // 3000 milisegundos = 3 segundos
> });
> ```
> 

> **Demo del estado pendiente para demostrar que retorna una promesa**
> 
> 
> ```jsx
> console.log(prepararPizza);
> // → Promise { <pending> }   ← el comprobante: todavía no hay plato, solo la promesa
> ```
> 
> - *"Fíjense: imprime Promise { <pending> }, no el plato. Creamos la promesa, pero el resultado todavía no está. Para usarlo, hay que **consumirla** — y eso es lo que sigue."*

### 2.3 Consumo — .then / .catch / .finally

**EN PANTALLA: VS CODE + EXCALIDRAW**

> **Tu apertura:***"Ya tenemos la promesa creada. 
Pero como vieron , no se obtiene el resultado de la promesa simplemente llamandola 
**Porque nota algo → HACIA DONDE FUE LO QUE LE MANDO a* resolve o a reject?** *AHORA VEAMOS COMO CONSUMIR UNA PROMESA ,es decir obtener esos resultados*
> 

> **Tu explicación teórica precisa:
Para consumir una promesa, toda promesa nativa en JavaScript tiene acceso a esos tres métodos (.then, .catch y .finally).** 
*****Consumirla es responder tres preguntas: ¿qué hago cuando sale bien?, ¿qué hago si falla?, y ¿qué hago siempre, pase lo que pase?"*
> 

<aside>

**Sintaxis** 

- **.then(callback)** → metodo que se ejecuta *cuando la promesa se **cumple** (resolve); recibe el valor del resolve.*
- **.catch(callback)** → metodo que se ejecuta *cuando se **rechaza** (reject); recibe el error del reject.*
- **.finally(callback)** → metodo que se ejecuta ***siempre**, se haya cumplido o rechazado. Ideal para lo que va sí o sí (cerrar un "Cargando…", por ejemplo).*

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

> **Code-along — consumir `pedirComida`:**
> 
> 
> ```jsx
> // 2. CONSUMO DE LA PROMESA (El cliente espera el resultado)
> prepararPizza
>   .then((mensajeExito) => {
>     // Se ejecuta solo si llamamos a resolve()
>     console.log(mensajeExito);
>   })
>   .catch((mensajeError) => {
>     // Se ejecuta solo si llamamos a reject()
>     console.error("🚨 Error:", mensajeError);
>   }).finally(() => console.log("Pedido finalizado. ¡Gracias por su visita!"));   // siempre
> ```
> 

## MOMENTO 3 — API + fetch + Response + JSON: pedir datos de verdad

### 3.1 ¿Qué es una API? (modelo cliente-servidor)

**EN PANTALLA: EXCALIDRAW — cliente → petición (URL) → servidor → respuesta (datos). (Apoyo: NAVEGADOR para abrir PokeAPI en 3.4.)**

> **Tu apertura (post-receso):***"Hasta ahora trabajamos con DATOS LOCALES que nosotros mismos definiamos dentro de nuestro codigo o los pediamos via UI, pero existe otra forma, una donde los datos no salen de nuestro código: salen de un servidor, por internet. A ese servidor que nos entrega datos se le llama **API**."*
> 

> **Tu explicación teórica precisa:**
*"Una **API** es un servidor que expone datos para que otros **programas** se los pidan. No es una página con interfaz: es un 'canal' pensado para que otro programa le haga **pida** datos y reciba **datos**."*
> 
> - *"El modelo de comunicacion es el modelo **cliente-servidor**: tu app es el **cliente**, hace una **petición** a una **URL** (que se llama **endpoint**), y el **servidor** (la API) responde con los datos."*
> - Un **endpoint** (punto final) es la **URL específica** dentro de una API que está programada para resolver una tarea o entregar un dato concreto.
> - *"Hoy usamos la **PokeAPI**:  [ENTRA A LA PAGINA DE POKE API y lee su informacion inicial]*
>     - *una API gratuita, de solo lectura, sin registro ni clave. Le pedís un Pokémon por su URL y te devuelve sus datos."*
>     
>     > Pero entonces, ¿cómo sabemos los desarrolladores a qué URLs conectarnos o qué datos nos va a devolver? Ahí es donde entra la **documentación de la API**. La documentación es, literalmente, el manual de instrucciones que los creadores de la API nos dejan. Es una página web donde nos listan ordenadamente cada una de las URLs (los endpoints), nos explican exactamente qué hace cada una, qué datos específicos tenemos que mandarle y qué formato de respuesta debemos esperar.
>     > 
> 
>  - Cada URL (cada **endpoint**) de la PokeAPI está programado para hacer una sola cosa específica y devolver datos  concretos.
> 
> - **Para traer un solo Pokémon específico (por nombre o ID):**https://pokeapi.co/api/v2/pokemon/ditto ó .../pokemon/132*El servidor ignora el resto del mundo y te devuelve la ficha técnica ultra detallada de Ditto (sus tipos, habilidades, estadísticas y las URLs de sus imágenes).*
> - **Para traer la lista general:** https://pokeapi.co/api/v2/pokemon*El servidor te devuelve un listado con los nombres de los primeros Pokémon.*

### 3.2 JSON — el formato en que viajan los datos

**EN PANTALLA: VS CODE — un ejemplo genérico de JSON.**

> **Tu apertura:***"LA API no entrega informacion que es esto pero ¿en qué formato nos los entrega? Acaso es PDF,Excel,… Porque no nos manda un objeto JavaScript listo para usar — nos manda **texto**, en un formato estándar que se llama **JSON**."*
> 

> **Tu explicación teórica precisa:**
*"**JSON** (JavaScript Object Notation) es un formato de **texto** para representar datos. Es la forma universal en que los datos viajan por internet entre cualquier cliente y cualquier servidor, sin importar en qué lenguaje esté programado cada uno."*
> 
> - *"Se PARECE a un objeto JavaScript —llaves, claves, valores— pero es **texto**, y tiene dos reglas propias: las claves van **siempre con comillas dobles**, y suele venir **anidado** (objetos y arrays dentro de otros)."*
> 
> ```json
> {
>   "nombre": "texto entre comillas dobles",
>   "edad": 25,
>   "activo": true,
>   "direccion": { "ciudad": "Lima" },
>   "hobbies": ["leer", "correr"]
> }
> ```
> 
> - Los valores internos de un elemento JSON pueden ser:
>     - Números
>     - Cadenas de texto
>     - Booleanos (true / false)
>     - Arreglos ([])
>     - Objetos ({})
>     - null
> 
> **ENTRA A UNA URL de PokeApi y mira como la informacion que manda es JSON**
> 

### Demostración — el JSON real de PokeAPI

**EN PANTALLA: NAVEGADOR — abrir la URL y leer el JSON crudo. (Apoyo: EXCALIDRAW — JSON anidado vs forma limpia de C09.)**

> **Demostración en vivo:**
> 
> 1. Abrir en el navegador: https://pokeapi.co/api/v2/pokemon/pikachu
> 2. Leer el JSON real y señalar las **tres diferencias** con la forma limpia de C09:

> **Tu explicación teórica precisa (sobre el JSON en pantalla):**
> 
> - *"El nombre está en **name**, no en nombre — la API está en inglés."*
> - *"La imagen no está suelta: está escondida adentro de **sprites.front_default**."*
> - *"Y los tipos están doblemente anidados: **types** es un array de objetos, y el nombre del tipo está en types[].type.name."*
> 
> ```
>  API (anidado)                          C09 (forma limpia)
>  name: "pikachu"                        nombre: "pikachu"
>  sprites.front_default: "...25.png"     imagen: "...25.png"
>  types[].type.name: "electric"          tipos: ["electric"]
> ```
> 
> - *"Nuestra `crearTarjeta` de C09 espera la columna de la derecha. La API nos da la de la izquierda. Esa distancia la vamos a salvar en el próximo momento — por ahora, retengan que **la API dicta su forma y nosotros nos adaptamos**."*

### 3.3 fetch(url) — la herramienta para llamar una API

**EN PANTALLA: VS CODE -EXCALIDRAW**

> **Tu explicación teórica precisa:***"Para hacer esa llamada a una PAI, JavaScript tiene fetch. **fetch(url)** hace la petición a la URL* 
fetch() es una función nativa de JavaScript que permite **realizar peticiones HTTP** a servidores(internos o externos) como APIs.
> 

**SINTAXIS**

```jsx
fetch("URL_DEL_ENDPOINT", {
  method: "HTTP_VERB", // GET, POST, PUT, etc.
})
```

- *"Con solo pasarle la URL, **fetch** asume que querés **leer** datos (el método HTTP por defecto es **GET**)."*

```jsx
fetch("<https://pokeapi.co/api/v2/pokemon/pikachu>");
// devuelve una Promesa (la respuesta llegará después)
```

Te comento, con una API no solamente puedes obtener datos ,sino puedes hacer otras cosas , las APIs son de doble vía: sirven para crear, actualizar y borrar información en el servidor.

| **Método HTTP** | **Acción en la API** | **Ejemplo del Mundo Real** |
| --- | --- | --- |
| **GET** | **Leer** / Obtener información | Traer la lista de Pokémon o el perfil de un usuario. |
| **POST** | **Crear** / Enviar información nueva | Crear un nuevo usuario, registrar un post o iniciar sesión. |
| **PUT / PATCH** | **Actualizar** / Modificar información existente | Cambiar tu foto de perfil o editar el precio de un producto. |
| **DELETE** | **Borrar** / Eliminar información | Eliminar una canción de tus favoritos o borrar una cuenta. |

> **Tu explicación — contexto (mención, no se practica hoy):** *"fetch puede hacer más que leer: con un segundo argumento { method, headers, body } se usa para **crear** (POST), **modificar** (PUT/PATCH) o **borrar** (DELETE) datos en  el servidor. Hoy solo leemos —GET—, pero quería que sepan que existe todo ese mundo."*
> 

**RELACION CON ASINCRONIA**

> **Reconexión con M1 (por qué esto es asíncrono):***"Y acá se cierra el círculo de hoy:el servidor de la API esta **en internet**. Una llamada no es inmedita, la respuesta **tarda**  y ademas depende de factores externos (una llamada a la API se peude interrumpir por caida de internet o incluso del servidor )—y por eso pedir datos a una API es una operación **asíncrona**, 
Y por eso fetch retorna una **PROMESA asiq ue usaremos los metodos then,catch para manejarlos**"*
> 

### 3.4 El objeto Response + por qué hacen falta DOS .then

**EN PANTALLA: VS CODE — el patrón de los dos .then.**

> **Tu explicación teórica precisa (el punto técnico clave de M3):**
fetch() solo retorna una promesa que resuelve en un objeto Response, pero ese objeto **no contiene directamente los datos JSON que querés usar sino la respuesta HTTP de si la conexion fue exitosa o no**
> 

**Aqui habra dos bloques THEN a la vez, porque?**

### Primer bloque then: Manejar el `Response`

```jsx
.then(respuesta => {
  return respuesta.json();
})
```

- respuesta es un **objeto Response** de la API Fetch.
- Aquí debes:
    - Validar si la respuesta fue exitosa (respuesta.ok)
    - Ver el código HTTP (respuesta.status)
    - Leer encabezados (respuesta.headers)
- **¡Pero todavía no tienes los datos reales sino un JSON**
    
    respuesta.json() es un **método asíncrono** que:
    
    - Lee el body de la respuesta.
    - Lo convierte en un objeto JavaScript.
    - Devuelve una **Promesa** que resuelve en esos datos.

> **Tu explicación — buena práctica (teoría):***"Un detalle importante para el mundo real: fetch **no falla** automáticamente si el servidor responde 404 o 500 — la promesa se cumple igual. Por eso en producción se valida if (response.ok) para detectar esos casos."*
> 
> - *"Hoy, en el lab, usamos un .catch simple para no recargar. El manejo serio de errores —res.ok, códigos HTTP, reintentos— lo trabajamos a fondo en C12."*

### Segundo bloque then: **Manejar el body del Response, los datos reales**

```jsx
.then(data => {
  console.log("Datos recibidos:", data);
})
```

- Este bloque es el resultado de que `respuesta.json()` se haya **resuelto correctamente**.
- Aquí ya accedes a los **datos reales que devolvió la API**, como un objeto, array , string ,….
- Se puede usar en la UI, consola, lógica de negocio.

### SINTAXIS FINAL

```jsx
fetch("URL_DEL_ENDPOINT")
  .then(respuesta => {
    if (respuesta.ok)
    return respuesta.json(); // Convierte la respuesta (body) en objeto JS
  })
  .then(data => {
    console.log("Datos recibidos:", data); // Acceso final a los datos
  })
  .catch(error => {
    console.error("Ocurrió un error:", error); // Manejo de errores de red o status
  });
```

- *"Por eso el patrón tiene **dos `.then`**: el primero recibe la `response` y la convierte; el segundo recibe ya los datos listos."*
- *"Para sacar los datos de adentro, se usa **`response.json()`**, que lee el contenido y lo convierte de texto JSON a objeto JavaScript. Y como leer también puede tardar, `response.json()` **devuelve otra promesa**."*

### 3.5 Lab HU1 + HU2 — del experimento al primer dato real

**EN PANTALLA: VS CODE + NAVEGADOR (Live Server) — code-along sobre el proyecto.**

> **Setup:**
> 
> 1. Sobre el repo pokedex de C09, crear la rama **lab10-api**.
> 2. Conservar index.html (la rejilla #resultado y el #buscador) y las funciones crearTarjeta() y render() de C09 **sin tocar**.
> 3. Dejar el array pokemonLocal **comentado** como referencia — desde hoy los datos vienen de la API.

> **Code-along — HU1 (el experimento, ahora con fetch):***"Es el mismo 1 → 2 → 3 que vimos con setTimeout en M1, pero ahora con un fetch real. La diferencia: ya entendemos que fetch devuelve una promesa y que el .then reacciona cuando llega."*
> 
> 
> ```jsx
> console.log("1. Pido los datos a la PokeAPI…");
> 
> fetch("<https://pokeapi.co/api/v2/pokemon/pikachu>")
>   .then(function (response) {
>     console.log("3. ¡Los datos llegaron! (esto corre al final)");
>   });
> 
> console.log("2. Sigo trabajando sin esperar a que lleguen");
> ```
> 
> - *"Consola: 1 → 2 → 3. El 3 corre al final porque la red tarda y JavaScript no se queda esperando — igualito a la pizza."*
> - **Checkpoint 1 (~15 min):** *la consola muestra 1 → 2 → 3; el alumno explica por qué el 3 sale último.*

> **Code-along — HU2 (traer un Pokémon de verdad):***"Ahora leemos los datos en serio: estado 'Cargando…' mientras llegan, los dos `.then` para convertir y usar, y un `.catch` por si falla."*
> 
> 
> ```jsx
> // `contenedor` (#resultado) ya existe desde C09 — solo lo usamos
> contenedor.innerHTML = `<p class="col-span-full text-center text-slate-500">Cargando…</p>`;
> 
> fetch("<https://pokeapi.co/api/v2/pokemon/pikachu>")
>   .then(function (response) {
>     return response.json();   // respuesta → objeto JS (también devuelve promesa)
>   })
>   .then(function (data) {
>     console.log(data);        // los datos reales (estructura anidada de la API)
>   })
>   .catch(function () {
>     contenedor.innerHTML = `<p class="col-span-full text-center text-red-600">No se pudo cargar.</p>`;
>   });
> ```
> 
> - *"Para comprobar que es asíncrono: pongan un console.log("sigo trabajando") justo debajo del fetch — se imprime ANTES que los datos."*
> - **Checkpoint 2 (~45 min):** *se ve "Cargando…" y, un momento después, el objeto real de pikachu en consola (con name, sprites, types). Los datos vienen de la web y tardan.*

> **Cierre del Momento + puente al siguiente:***"Ya traemos un Pokémon real de internet. Pero miren la consola: ese objeto tiene `name`, `sprites`, `types` anidados — NO es la forma limpia que `crearTarjeta` sabe pintar. Si se lo paso tal cual, la tarjeta no se arma. Necesitamos un **traductor** entre la forma de la API y la nuestra: la función adaptadora. Eso es lo primero del próximo momento."*
> 

## MOMENTO 4 — Adaptar y mostrar + varios en paralelo

### 4.1 Función adaptadora (concepto)

**EN PANTALLA: VS CODE — Apoyo: EXCALIDRAW — API anidada → adapter → objeto limpio → tarjeta.)**

> **Tu apertura (engancha con el cierre de M3):**
*"Quedamos en que los datos llegan, pero con la forma de la API: **name, sprites.front_default, types[].type.name.**
 Nuestra crearTarjeta de C09 espera otra cosa: { nombre, imagen, tipos }. 
Tenemos dos caminos: 
- reescribir crearTarjeta para que entienda la forma de la API… 
- o poner un traductor en el medio. La recomendacion es por el traductor, y ya van a ver por qué."*
> 

> **Tu explicación teórica precisa:***"
Una **función adaptadora** recibe el dato como viene de la API y **devuelve** un objeto nuevo con la forma limpia que la app ya sabe usar. 
Concentra la traducción en un solo lugar: el resto del código —render, crearTarjeta— ni se entera de cómo viene la API."*
> 
> - *"Esto tiene nombre en la industria: el **patrón Adapter**. Es lo que hace un dev real cada vez que conecta su app con una API que no controla."*

> **Tu explicación — qué reusa de C09:**
> 
> - *"?. y ??: si a un Pokémon le falta la imagen, en vez de romperse pone una imagen de respaldo."*
> - *".map: para aplanar los tipos, que vienen doblemente anidados, a un array simple de textos."*

### 4.2 Lab HU3 — adaptar y mostrar la tarjeta

**EN PANTALLA: VS CODE + NAVEGADOR (Live Server) — code-along.**

> **Code-along — escribir el adaptador:**
> 
> 
> ```jsx
> function adaptarPokemon(data) {
>   return {
>     nombre: data.name,
>     imagen: data.sprites?.front_default ?? "<https://via.placeholder.com/96?text=?">,
>     tipos:  data.types.map(t => t.type.name)   // [{type:{name:"electric"}}] → ["electric"]
>   };
> }
> ```
> 
> - *"Línea por línea: data.name va a nombre. La imagen, escondida en sprites.front_default, con ?? un respaldo por si falta. Y los tipos: .map recorre el array anidado y se queda solo con el nombre de cada tipo."*

> **Code-along — usar el adaptador antes de renderizar:**
> 
> 
> ```jsx
> fetch("<https://pokeapi.co/api/v2/pokemon/pikachu>")
>   .then(function (response) { return response.json(); })
>   .then(function (data) {
>     render([adaptarPokemon(data)]);   // adapta y reusa el render de C09 (espera una lista)
>   })
>   .catch(function () {
>     contenedor.innerHTML = `<p class="col-span-full text-center text-red-600">No se pudo cargar.</p>`;
>   });
> ```
> 
> - *"Fíjense que render espera una **lista**, por eso va entre corchetes: [adaptarPokemon(data)]. Y crearTarjeta NO la tocamos: recibe la forma limpia y arma la tarjeta como siempre."*

> **Checkpoint 3 (~70 min):** *la tarjeta de un Pokémon real aparece en la rejilla, **idéntica en apariencia** a las de C09 — pero los datos vinieron de la web y pasaron por el adaptador.*
> 

### 4.3 Promise.all — traer varios a la vez (concepto clave)

**EN PANTALLA: VS CODE. (Apoyo: EXCALIDRAW — 6 pedidos en paralelo vs 6 en fila, con barra de tiempo.)**

> **Tu apertura (plantear el problema antes de la solución):***"Ya traemos UN Pokémon. Pero una Pokédex tiene muchos: queremos 6 en la rejilla. Y acá aparece un problema nuevo de verdad, así que vamos despacio."*
> 

> **Analogía (continúa el hilo de los pedidos):***"**SI QUIERES PEDIR 6 PIZZAS DIME HACES UN SOLO PEDIDO Y PIDES LAS SEIS PIZZAS  O HACES 6 PEDIDOS UNA PARA CADA PIZZA?'."***
> 

> **Tu explicación — el problema, paso a paso:**
> 
> - *"Cada Pokémon es **un fetch** independiente. Para 6 Pokémon, 6 fetch. Hasta ahí bien."*
> - *"Pero recuerden: cada fetch es **asíncrono** y devuelve una **promesa** — un pedido que llega 'más tarde'. Entonces, ¿cómo sé yo en qué momento llegaron **los 6** para recién ahí pintar la rejilla completa? Si pinto cuando llegó el primero, me faltan cinco. Necesito esperar a que **todos** terminen."*

> **Tu explicación — la salida lenta (para que valoren la buena):**
> 
> - *"Una opción sería pedirlos **de a uno**: pido el 1, espero a que llegue, pido el 2, espero, pido el 3… Funciona, pero es **lento**: si cada pedido tarda 1 segundo, seis pedidos en fila son ~6 segundos. Y el código se vuelve una pila de .then adentro de .then."*

> *Para esto existe **Promise.all**.* 
**Promise.all** es una herramienta de JavaScript que sirve para **ejecutar múltiples promesas al mismo tiempo (en paralelo) y esperar a que todas terminen** antes de continuar con tu código.
*Le pasás un **array de promesas** y te devuelve **UNA sola promesa**, que se resuelve cuando **TODAS** las de adentro terminaron — y te entrega **un array con todos los resultados juntos**, en el mismo orden en que las pusiste."*
> 
> 
> ```jsx
> Promise.all([promesaA, promesaB, promesaC])
>   .then(function (resultados) {
>     // resultados = [resultadoA, resultadoB, resultadoC]  ← todos juntos, en orden
>   });
> ```
> 
> - *"La clave: **array de promesas entra → array de resultados sale.** Y .then corre una sola vez, cuando ya llegaron todas. No tenés que andar contando cuántas terminaron: Promise.all lo hace por ti"*

> **Tu explicación — por qué es más rápido (paralelo vs secuencial):**
> 
> - *"Promise.all **dispara los 6 fetch al mismo tiempo** y los deja viajar en paralelo. Como salen todos juntos, el total tarda lo que tarda **el más lento** —~1 segundo—, no la suma de los seis."*
> - *"De a uno: ~6 segundos. En paralelo con Promise.all: ~1 segundo. Misma cantidad de pedidos, muchísimo menos tiempo."*

> **Tu nota (honesta, sin abrir tema nuevo):***"Un detalle para tener en el radar: si **una** de las promesas falla, Promise.all falla entero —es todo o nada.*
> 

### 4.4 Lab HU4 — rejilla con Promise.all + reconectar buscador

**EN PANTALLA: VS CODE + NAVEGADOR (Live Server) — code-along.**

> **Code-along — armar el array de promesas y esperarlas todas:**
> 
> - *"Miren cómo se encadena todo lo del día: .map arma las 6 promesas, Promise.all las espera juntas, .map adapta los 6 crudos a la forma limpia, y render (intacto desde C09) los pinta."*
> 
> ```jsx
> const nombres = ["bulbasaur", "charmander", "squirtle", "pikachu", "jigglypuff", "gengar"];
> let pokedex = [];   // aquí guardamos la rejilla cargada
> 
> // un fetch por cada nombre → un array de promesas
> const promesas = nombres.map(function (nombre) {
>   return fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`).then(r => r.json());
> });
> 
> Promise.all(promesas)
>   .then(function (datos) {                 // datos = array con los 6 Pokémon crudos
>     pokedex = datos.map(adaptarPokemon);   // adapta todos a la forma limpia
>     render(pokedex);
>   })
>   .catch(function () {
>     contenedor.innerHTML = `<p class="col-span-full text-center text-red-600">No se pudo cargar la Pokédex.</p>`;
>   });
> ```
> 

> **Code-along — reconectar el buscador de C09 (no escribir uno nuevo):**
> 
> - *"El buscador de C09 sigue vivo: lo ÚNICO que cambia es la fuente —antes filtraba pokemonLocal, ahora pokedex—. No agreguen un listener nuevo ni vuelvan a declarar buscador o pokedex."*
> 
> ```jsx
> buscador.addEventListener("input", function () {
>   const texto = buscador.value.toLowerCase();
>   const filtrados = pokedex.filter(p => p.nombre.includes(texto));   // antes: pokemonLocal
>   render(filtrados);
> });
> ```
> 

> **Checkpoint 4 (~95 min) — cierra el lab:** *la rejilla muestra los 6 Pokémon reales de la API; al escribir en el buscador, filtra esa rejilla. **La Pokédex ya vive de la web.***
> 

## MOMENTO 5 — Cierre: lo que se llevan + puente a C11

### 5.1 Recapitulación — lo que se construyó hoy

- **Qué quedó resuelto:** la Pokédex carga sus datos de internet, maneja la espera sin congelarse, adapta la forma de la API a la propia y reusa `render`/`crearTarjeta`/buscador de C09 **sin tocarlos**.
- **Tabla resumen del día:** asincronía · Promesa (estados/new Promise/consumo) · API + JSON · fetch/Response/dos .then · función adaptadora · Promise.all.

### 5.2 Logros opcionales (ventana para quienes terminaron)

- **Logro 1 — Spinner animado:** reemplazar el texto "Cargando…" por un spinner  de Tailwind. → MUESTRA LA PAGINA CON COMPONENTES TAILWIND GRATIS