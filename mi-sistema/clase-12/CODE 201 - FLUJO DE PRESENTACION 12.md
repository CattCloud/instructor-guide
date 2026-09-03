# CODE 201 - FLUJO DE PRESENTACION 12

## MOMENTO 1 — El fallo de C11 + ¿qué es un error? + tipos nativos JS

### 1.1 Demo en vivo del fallo de C11

**EN PANTALLA: NAVEGADOR + DEVTOOLS — abrir la Pokédex de C11 (deployada en GitHub Pages o corriendo en Live Server local). DevTools abierto en la pestaña *Console*.**

> **Tu apertura:***"Antes de entrar al tema del día, abramos la Pokédex que dejamos al final de C11. La vamos a usar para notar algo que dejamos pendiente"*
> 

> **Tu demostración en vivo (paso a paso):**
> 
> 1. Abrir la Pokédex de C11 en el navegador.
> 2. Abrir DevTools (F12 o clic derecho → Inspeccionar) y pasar a la pestaña ***Console***.
> 3. En el buscador de la Pokédex, escribir ***pikachuu*** (con doble ***u*** — un nombre que NO existe en la PokeAPI).
> 4. Pulsar **Buscar** (o Enter).
> 5. Observar: la consola muestra un error rojo grande, la rejilla queda vacía o congelada, y la app deja de responder.

> **Tu lectura del error (en voz alta, señalando la consola):***"Vean el texto en rojo. Dice algo así:"*
> 
> - *"Tres cosas para fijar la mirada: la palabra **Uncaught** (no atrapado), la palabra **SyntaxError** (acá hay un tipo de error con nombre), y el archivo + función donde pasó (**obtenerPokemon**, justo en el **response.json()** porque el cuerpo que recibió NO era un JSON válido — **era el texto plano 'Not Found'** que devuelve la API cuando el Pokémon no existe)."*
> 
> ```
> Uncaught (in promise) SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON
>     at JSON.parse (<anonymous>)
>     at obtenerPokemon (app.js:18:21)
>     at async buscarPokemon (app.js:35:16)
>     ...
> ```
> 

> **Tu cierre del sub-punto:***"Eso que ven en rojo se llama un **error** de JavaScript. Hoy le vamos a poner nombre exacto, ver qué tipos hay, y —lo más importante— aprender a evitar que mate la app entera. Pero antes de tocar código, vocabulario."*
> 

### 1.2 ¿Qué es un error en programación?

**EN PANTALLA: EXCALIDRAW — flujo "SIN error" (3 líneas verdes consecutivas, todo OK) vs flujo "CON error sin manejo" (línea 1 verde, línea 2 roja con explosión, líneas 3-N atenuadas en gris con etiqueta "nunca se ejecuta").**

> **Tu explicación teórica precisa:***"Un **error** es una situación que **interrumpe la ejecución normal** de un programa porque algo no se puede completar. Cuando JavaScript detecta un error, **detiene la ejecución del bloque actual**; si nadie lo atrapa, **muere el script** y queda colgado en la consola del navegador."*
> 

> *"Las situaciones más comunes donde aparece un 'no se puede completar':"*
> 
> - *"**Sintaxis inválida** — escribiste **console.log("Hola"** y te olvidaste el paréntesis de cierre."*
> - *"**Variable que no existe** — usás **nombre** sin haberla declarado."*
> - *"**Operación inválida para el tipo de dato** — hacés **.push** sobre un string, cuando solo los arrays tienen **.push**."*
> - *"**Conexión a internet que falla** — el WiFi se cayó mientras hacés un **fetch**."*
> - *"**Datos del usuario en formato equivocado** — esperabas un número, el usuario tipeó letras."*

> **Tu explicación — qué pasa SIN manejo (señalando el panel de Excalidraw):**
> 
> - *"Mirá la columna izquierda — flujo SIN error. Línea 1 corre, línea 2 corre, línea 3 corre, todo OK."*
> - *"Mirá la columna derecha — flujo CON error sin manejo. Línea 1 corre. Línea 2 dispara un error → JavaScript DETIENE TODO en ese punto. Líneas 3 en adelante, atenuadas, nunca se ejecutan. El error sube por el código hasta llegar al tope, y todo el script muere."*
> - *"Eso fue lo que pasó hace 2 minutos cuando buscaron **pikachuu**: el error subió, mató el script entero, y por eso ni siquiera **pikachu** bien escrito vuelve a funcionar sin recargar."*

### 1.3 Tipos de errores nativos en JavaScript

**EN PANTALLA: EXCALIDRAW**

> **Tu apertura:***"JavaScript no genera 'un error' genérico — clasifica los errores en **categorías**, y cada categoría te dice qué tipo de problema hubo. Conocerlas permite leer los mensajes de consola con velocidad."*
> 

> **Tu explicación teórica precisa:***"Hay 7 tipos nativos en total, pero en desarrollo web nos cruzamos con 4 principales más una categoría adicional para problemas de red. Los 4 primeros vienen del lenguaje; el último depende de internet."*
> 

> **Tabla de tipos de error nativos (proyectar en el panel):**
> 
> 
> 
> | Tipo | Cuándo aparece | Ejemplo que lo dispara |
> | --- | --- | --- |
> | ***SyntaxError*** | El parser no puede leer el texto recibido (código JS, JSON, etc.) | ***console.log("Hola"*** *(falta el paréntesis)* · ***JSON.parse("Hola")*** *(no es JSON válido)* |
> | ***ReferenceError*** | Se usa una variable que NO está declarada | ***console.log(noExiste)*** |
> | ***TypeError*** | Operación inválida para el tipo del dato | ***"Hola".push("Mundo")*** *(strings no tienen `.push`)* |
> | ***RangeError*** | Un número fuera del rango permitido | const precio = 19.99;
> precio.toFixed(200);
> **Por qué pasa:** Le estás pidiendo 200 decimales, un número que está totalmente fuera del rango operativo del método ,solo permite entre 0-100 |
> | **Errores de red / API** | La conexión falla o el servidor responde mal | ***fetch("[https://api.invalida.com](https://api.invalida.com/)")*** sin red |

> **Tu explicación — la conexión con el SyntaxError de la demo:***"Vuelvan al error que vimos al principio. Decía **SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON**. Sabiendo la tabla, eso dice **SyntaxError** — el parser de JavaScript se encontró con texto que NO tiene la sintaxis esperada. Acá hay un detalle importante: **SyntaxError** NO solo aparece cuando escribís código JavaScript mal. También aparece cuando una función como **response.json()** o **JSON.parse()** intenta parsear texto que NO es JSON válido. 
En la demostracion, la API respondió a 'pikachuu' con la cadena 'Not Found' —texto plano, no JSON—; cuando **response.json()** intentó parsearlo, falló con SyntaxError porque la letra 'N' no es un inicio válido para un JSON. Ese detalle lo cerramos después del receso."*
> 

> **Tu explicación — la distinción crítica (señalando las etiquetas verde/roja del panel):**
> 
> - *"**ReferenceError**, **TypeError** y **RangeError** son típicamente errores de **CÓDIGO** que disparás vos solo y se **atajan ANTES de correr** con un buen editor: VS Code marca cosas en rojo mientras tipeás; un linter detecta variables no definidas antes de ejecutar."*
> - *"**SyntaxError** tiene una **DUALIDAD** que importa hoy. Aparece por código mal escrito (un paréntesis faltante — eso se ataja en VS Code) **PERO TAMBIÉN** cuando una función como **response.json()** o **JSON.parse()** recibe texto que NO es JSON válido — como pasó en la demo del principio con 'Not Found'. En ese segundo caso, el error aparece EN TIEMPO DE EJECUCIÓN y depende de qué nos respondió el servidor."*
> - *"Los **errores de red / API** dependen de **factores externos**: el WiFi del alumno, el servidor de PokeAPI, una URL mal escrita. NO se pueden atajar en VS Code — son del mundo de afuera."*

> ***"La regla pedagógica del día:"***
> 
> - *"Para los errores típicos de código (ReferenceError, TypeError, RangeError, SyntaxError por código mal escrito), la herramienta es **VS Code + un linter** — los atajamos ANTES de correr."*
>     - Piensa en un linter como el **corrector ortográfico y gramatical  pero para programadores**. →  Ves el error directamente en tu editor de código un milisegundo después de haberlo tipeado. Lo corriges antes de que llegue al navegador → VSCODE tiene un linter integrado pero existe otro llamado ESLint
> - *"Para los errores que **dependen de datos o respuestas externas** —los de red, y también el SyntaxError de **response.json()** que vimos en la demo— hay una herramienta del lenguaje que aparece **EN TIEMPO DE EJECUCIÓN** para manejarlos. Esa herramienta es lo que veremos hoy."*

### 1.4 El objeto Error con sus 3 propiedades

**EN PANTALLA: VS CODE — archivo de demo con el código de abajo + terminal de VS Code mostrando el output al ejecutarlo con Node.**

> **Tu apertura:***"
Cuando ocurre un error en nuestro codigo, JAVASCRIPT genera un objeto , este objeto viene de la clase **Error**.  Tiene 3 propiedades estándar que vale la pena conocer porque vamos a usar una de ellas en el lab hoy."*
> 

> **Tu explicación teórica precisa:***"Todo error en JavaScript —el SyntaxError de la demo del principio, un ReferenceError cualquiera, o un error que vos mismo creés con **new Error(...)**— es un objeto con 3 propiedades: **name**, **message** y **stack**."*
> 

> **Tabla de propiedades del objeto *Error*:**
> 
> 
> 
> | Propiedad | Qué tiene | Para qué sirve hoy |
> | --- | --- | --- |
> | [***error.name***](http://error.name/) | El nombre del **TIPO** del error (***"SyntaxError"***, ***"TypeError"***, ***"ReferenceError"***, ***"Error"***...) | Decidir el manejo según el tipo. **Hoy en el lab NO se usa** — se asume que cualquier fallo es de red o de parsear datos externos. |
> | ***error.message*** | El **TEXTO descriptivo** del error | **LO QUE MOSTRAMOS AL USUARIO** en la UI. Es la propiedad más usada del objeto. |
> | ***error.stack*** | La **pila de llamadas**: archivo, línea, función | Debug en consola del navegador. **NO se muestra al usuario** — es información para devs. |

> **Cierre del Momento + puente al siguiente:***"Listo, ya tenemos el vocabulario completo. Saben qué es un error, qué tipos hay, y qué propiedades trae el objeto **Error** cuando viaja por el código. Pero seguimos SIN saber cómo evitar que mate la app. Recuerden el SyntaxError de la demo del principio: en C11 lo dejamos suelto a propósito —se lo permitimos—; hoy lo vamos a ATRAPAR. La herramienta del lenguaje para hacerlo se llama **try/catch/finally**, y es lo que vemos enseguida. Vamos."*
> 

## MOMENTO 2 — try/catch/finally + HU1: atrapar errores

### 2.1 try / catch / finally — la estructura de control para errores

**EN PANTALLA: EXCALIDRAW** 

> **Tu apertura:***"Acaban de ver qué es un error y qué partes tiene el objeto. Ahora la herramienta del lenguaje que nos deja **atrapar** ese error antes de que detenga la app: **try/catch/finally**. Tres palabras clave que forman UNA sola estructura — análoga a **if/else** pero para errores."*
> 

**Sintaxis general:**

> **Tu explicación teórica precisa:**
*"**try** es un bloque que **vigila** un fragmento de código que podría fallar. **catch** es el bloque al que JavaScript **SALTA AUTOMÁTICAMENTE** si algún error se dispara dentro del try — interrumpe lo que estaba ejecutando y empieza a correr el catch, pasándole el objeto **Error** que vimos antes como argumento. **finally** es un bloque que **SIEMPRE corre**, haya error o no."*
> 

```jsx
try {
  // 1. Código que podría fallar
} catch (error) {
  // 2. Si algo en (1) falla, JS salta acá. 'error' es la instancia de Error.
} finally {
  // 3. SIEMPRE corre — al final de (1) sin error, O al final de (2).
}
```

> **Tu desarrollo — las 3 fases una por una (señalando el panel):**
> 
> - *"**Fase 1 — try:** ponés adentro el código que podría fallar. Una llamada a la red,  una operación que asume que algo existe. JavaScript lo ejecuta normalmente."*
> - *"**Fase 2 — catch:** se ejecuta SOLO si hubo error dentro del try. Recibe como parámetro el objeto **Error** —el mismo objeto con `name`, `message` y `stack` que vimos en 1.4—. Acá decidís qué hacer: mostrar un mensaje, volver a intentar, logear en consola, lo que sea."*
> - *"**Fase 3 — finally:** corre SIEMPRE. Hubo error → corre después del catch. NO hubo error → corre después del try. Es para limpieza: ocultar un spinner, restaurar el cursor, cerrar un modal."*

### DEMO CODIGO

```jsx
try {
  // 🚨 Forzamos un error intencional: una variable que contiene un número NO se puede ejecutar ()
  const edad = 26;
  edad(); 

} catch (error) {
  console.log("❌ ¡Un error ha sido capturado!\n");

  // 1. .name -> El tipo de error
  console.log("1. Propiedad NAME:", error.name); 
  // → "TypeError"

  // 2. .message -> El mensaje humano que explica qué falló
  console.log("2. Propiedad MESSAGE:", error.message); 
  // → "edad is not a function"

  // 3. .stack -> El historial o "mapa" que muestra exactamente en qué línea y archivo explotó
  console.log("3. Propiedad STACK:\n", error.stack);
  // → Muestra el tipo, el mensaje y la ruta exacta del archivo con la línea y columna
}
```

### Demo en vivo en VS Code — try/catch mínimo

**EN PANTALLA: VS CODE — dos archivos de demo (sin try/catch y con try/catch) + terminal de VS Code mostrando el output de cada uno al ejecutarlos con Node.**

> **Tu apertura:***"Antes de meternos al lab, hagamos el try/catch más chico posible — solo para ver el cambio entre 'el script muere' y 'el script sobrevive'."*
> 

> **Código de demo 1 — SIN try/catch:**
> 
> 
> ```jsx
> console.log("antes del error");
> noExiste();
> console.log("DESPUÉS del error");   // ← esto NUNCA se ejecuta
> ```
> 
> **Output esperado:** aparece "antes del error", después el ReferenceError: noExiste is not defined en rojo, y "DESPUÉS del error" **NO sale**. El script murió.
> 

> **Código de demo 2 — CON try/catch:**
> 
> 
> ```jsx
> console.log("antes del error");
> try {
>   noExiste();
> } catch (error) {
>   console.log("atrapé el error:", error.message);
> }
> console.log("DESPUÉS del error");   // ← ahora SÍ se ejecuta
> ```
> 
> **Output esperado:**
> 
> ```
> antes del error
> atrapé el error: noExiste is not defined
> DESPUÉS del error
> ```
> 

> **Tu explicación — lo que cambió:**
> 
> - *"Sin try/catch: el error subió hasta el tope y mató el script. La línea de abajo nunca corrió."*
> - *"Con try/catch: el catch lo agarró, **error.message** —el mismo error.message del objeto Error que vimos antes— se imprimió, y la ejecución continuó normalmente. El script siguió vivo."*
> - *"Esa diferencia —de 'la app muere' a 'la app sigue'— es exactamente lo que vamos a aplicar al **mostrarBusqueda** de C11. Vamos al lab."*

### 2.4 Setup del lab — rama nueva + HTML del #spinner y #mensaje

**EN PANTALLA: VS CODE + Terminal integrada — sobre el repo *pokedex*.**

> **Tu apertura:***"Antes de tocar el JavaScript, dos cosas de Setup: una rama nueva y agregamos en el HTML las zonas donde van a aparecer los mensajes y el spinner."*
> 

> **Code-along — Setup paso a paso:**
> 
> 1. En la terminal del proyecto:
>     
>     ```bash
>     git checkout -b lab12-errores
>     ```
>     
> 2. En ***index.html***, debajo del ***<input id="buscador">*** y encima del ***<div id="resultado">***, agregar las dos zonas de estado:
>     
>     ```html
>     <div id="spinner" class="hidden text-center text-slate-500 my-4">Cargando…</div>
>     <div id="mensaje" class="hidden text-center text-red-600 font-medium my-4"></div>
>     ```
>     

> **Tu explicación — qué hace cada zona:**
> 
> - *"**#mensaje** es donde vamos a pintar errores en rojo cuando la app NO pueda resolver la búsqueda. Empieza con la clase **hidden** de Tailwind (no se ve) hasta que el JS le saque la clase."*
> - *"**#spinner** es donde mostraremos 'Cargando…' mientras la búsqueda está en curso. **HOY lo agregamos al HTML pero NO lo usamos todavía** — lo prendemos más adelante cuando aprendamos finally. Lo dejamos preparado para no tocar el HTML dos veces."*

> **Tu nota — la convención del proyecto:***"Las dos zonas usan la clase **hidden** de Tailwind para ocultarse. El JS las muestra con **classList.remove("hidden")** y las oculta con **classList.add("hidden")**. Es el patrón estándar para 'mostrar/ocultar' en Tailwind sin tocar estilos inline."*
> 

### 2.5 Lab HU1 — envolver la búsqueda con try/catch

**EN PANTALLA: EXCALIDRAW** 

**LECTURA DE LA HU1**

> 
> 
> 
> **Paso 1 · EL USUARIO ya tiene la búsqueda de C11 funcionando con red OK**
> 
> Punto de partida — sin pregunta socrática. El alumno acaba de hacer el Setup. La búsqueda de C11 (***mostrarBusqueda***) sigue tal cual.
> 
> ---
> 
> **Paso 2 · Algo puede fallar adentro de la búsqueda**
> 
> > 🔎 *Veamos la HU 1 textual: **"si algo falla al buscar, quiero ver un mensaje claro en vez de que la app se rompa"**. La HU está describiendo el problema que VIMOS al principio del día con el SyntaxError de C11 — el script muere. ¿Qué herramienta del lenguaje vimos hace un rato que sirve para evitar que ese error mate la app?*
> > 
> 
> > ✅ **Respuesta esperada:** ***try/catch***. La estructura del lenguaje que **atrapa** un error antes de que mate el script. Es la red de seguridad que vimos hace un rato.
> > 
> 
> ---
> 
> **Paso 3 · EL PROGRAMA implementa un mecanismo de manejo de errores →  decide QUÉ código va adentro del try**
> 
> > 🔎 *La función **mostrarBusqueda** de C11 tiene varias líneas. ¿Envolvemos toda la función entera, o solo la parte que puede fallar?*
> > 
> 
> > ✅ **Respuesta esperada:** solo la parte que puede fallar — la llamada await buscarPokemon(nombre) y el render del resultado. **El resto NO puede fallar** (asignar variables, manipular el DOM con .classList) y queda afuera del try.
> **Principio:** el try es lo más pequeño posible — solo lo que realmente puede explotar.
> > 
> 
> ---
> 
> **Paso 4 · EL PROGRAMA muestra un mensaje cuando hay error**
> 
> > 🔎 *La HU dice criterio textual: **"aparece un mensaje claro en vez de una pantalla rota"**. Tenemos el div **#mensaje** del Setup. ¿Qué dos cosas hacemos adentro del catch para que aparezca?*
> > 
> 
> > ✅ **Respuesta esperada:** dos líneas.
> (a) ***mensaje.textContent = "..."*** — pintar el texto.
> (b) ***mensaje.classList.remove("hidden")*** — quitarle la clase que lo ocultaba.
> Para HOY el texto es genérico: ***"Algo salió mal. Revisa tu conexión."***. En HU2 vamos a hacer mensajes específicos usando ***error.message***.
> > 
> 
> ---
> 
> **Paso 5 · EL PROGRAMA limpia el mensaje viejo al empezar una nueva búsqueda**
> 
> > 🔎 *La HU dice criterio textual: **"la app sigue viva tras el fallo: puedes volver a buscar sin recargar"**. Si dejamos el **#mensaje** del fallo anterior visible cuando el usuario busca de nuevo, ¿qué pasa? ¿Dónde lo limpiamos y cuándo?*
> > 
> 
> > ✅ **Respuesta esperada:** lo limpiamos al INICIO de ***mostrarBusqueda***, ANTES del try. Con ***mensaje.classList.add("hidden")*** lo volvemos a ocultar para que el intento nuevo no arrastre el error viejo.
> **Ubicación:** primera línea de la función, antes del try.
> > 
> 
> ---
> 
> **Paso 6 · EL PROGRAMA RECIBE el objeto *Error* en el catch**
> 
> > 🔎 *Al principio del día vimos que un error es un OBJETO con name, message, stack. ¿Cómo lo recibimos en el catch?*
> > 
> 
> > ✅ **Respuesta esperada:** ***catch (error) { ... }***. El parámetro entre paréntesis (lo llamamos `error` por convención) es la instancia del objeto ***Error*** que se disparó adentro del try.
> **Para HOY no lo usamos** — el texto que pintamos es genérico. Pero ya lo tenemos disponible para más adelante, donde sí vamos a leer ***error.message***.
> > 
> 
> ---
> 
> **Paso 7 · EL PROGRAMA cumple ambos criterios — verificación**
> 
> > 🔎 *La HU exige dos cosas: (a) mensaje claro en vez de pantalla rota; (b) la app sigue viva. ¿Cómo probamos las dos en vivo?*
> > 
> 
> > ✅ **Respuesta esperada:** desactivar el WiFi (o usar DevTools → Network → Offline) y buscar un Pokémon. Tiene que aparecer el mensaje rojo, ***NO*** el error en consola que mataba C11.
> Después, reactivar el WiFi y buscar de nuevo (sin recargar la página) — la búsqueda funciona normal. Eso prueba que la app sigue viva.
> > 

> **Cierre del Momento + puente al siguiente:***"Listo: con 4 líneas de try/catch la app pasó de 'muere ante cualquier fallo' a 'sobrevive con un mensaje'. Pero noten una cosa: el mensaje dice **'Algo salió mal'** — genérico. Si el usuario buscó 'pikachuu' mal escrito, ese mensaje le dice MENOS de lo que necesita. Para diferenciar un 'mal escrito' de un 'sin red' tenemos que mirar QUÉ STATUS nos devolvió la API. Eso es lo que vemos después del receso — y va a aparecer una palabrita nueva: 404."*
> 

## MOMENTO 3 — Códigos HTTP + response.ok + throw

### 3.1 Demo en VS Code — ¿qué status nos devolvió la API?

**EN PANTALLA: VS CODE — archivo de demo con el código de abajo + terminal de VS Code mostrando el output al ejecutarlo con Node (versión 18+ para *fetch* nativo).**

> **Tu apertura (post-receso):***"Ahora vamos a mirar QUÉ nos respondió el servidor exactamente cuando buscamos 'pikachu' bien escrito vs  mal escrito. Para eso un script chico que pide a la API las dos URLs y nos imprime lo que viene."*
> 

> **Código de demo:**
> 
> 
> ```jsx
> async function ver(url) {
>   const response = await fetch(url);
>   console.log("URL:    ", url);
>   console.log("status: ", response.status);
>   console.log("ok:     ", response.ok);
>   console.log("---");
> }
> 
> await ver("<https://pokeapi.co/api/v2/pokemon/pikachu>");    // existe
> await ver("<https://pokeapi.co/api/v2/pokemon/pikachuu>");   // NO existe
> ```
> 
> **Output esperado al ejecutarlo:**
> 
> ```
> URL:     <https://pokeapi.co/api/v2/pokemon/pikachu>
> status:  200
> ok:      true
> ---
> URL:     <https://pokeapi.co/api/v2/pokemon/pikachuu>
> status:  404
> ok:      false
> ---
> ```
> 

> **Tu lectura — el dato clave:***"Miren los dos bloques lado a lado. El **fetch** del nombre bien escrito devolvió **status: 200** y **ok: true**; el del nombre mal escrito devolvió **status: 404** y **ok: false**. PERO el segundo NO disparó ningún error — el fetch se resolvió tranquilo, llegó al **console.log**, y el script siguió. La app de C11 no se rompía por el fetch — se rompía cuando **response.json()** intentaba parsear el body que vino con el 404 (la cadena 'Not Found'), porque eso NO es JSON válido — ese es el SyntaxError que vieron al principio."*
> 

> **Tu pregunta de gancho:***"Dos cosas que vamos a entender ahora: ¿qué es esa palabra **'404'**? ¿Y cómo usamos esa propiedad **ok**'?"*
> 

### 3.2 Códigos HTTP — el "estado" de cada respuesta

**EN PANTALLA: EXCALIDRAW** 

> **Tu apertura:***"Esos números de 3 dígitos —**200**, **404**, **500**— son los **códigos de estado HTTP**. El servidor SIEMPRE devuelve uno con cada respuesta. Te dicen si la cosa salió bien o falló, y si falló, qué tipo de falla fue."*
> 

> **Tu explicación teórica precisa:***"Hay decenas de códigos posibles, pero NO hace falta memorizarlos. Solo hace falta saber leer la **PRIMERA cifra** — la familia."*
> 

> **Tabla de familias HTTP (señalando el panel):**
> 
> 
> 
> | Familia | Significado | Ejemplos | ¿`response.ok`? |
> | --- | --- | --- | --- |
> | **2xx** | **Éxito** — la respuesta salió bien | ***200 OK***, ***201 Created*** | ***true*** |
> | **4xx** | **Error del CLIENTE** — nuestro código pidió mal | ***400*** Bad Request, ***401*** Unauthorized, ***403*** Forbidden, ***404*** Not Found | ***false*** |
> | **5xx** | **Error del SERVIDOR** — el servidor falló | ***500*** Internal Server Error, ***503*** Service Unavailable | ***false*** |
> 
> | Código | Familia | Significado | Cuándo aparece en la Pokédex |
> | --- | --- | --- | --- |
> | **200** | 2xx — Éxito | OK — la respuesta fue exitosa | ***/pokemon/pikachu*** existe → 200 + JSON de pikachu |
> | **201** | 2xx — Éxito | Created — recurso creado (típico de POST) | No aparece hoy (la Pokédex solo lee, no crea) |
> | **301 / 302** | 3xx — Redirección | Redirección permanente / temporal | No aparece hoy |
> | **400** | 4xx — Error del cliente | Bad Request — la petición está mal armada | URL mal formada (ej: `/pokemon/` sin nombre) |
> | **401** | 4xx — Error del cliente | Unauthorized — falta autenticarse | APIs con clave (PokeAPI NO la necesita) |
> | **403** | 4xx — Error del cliente | Forbidden — sí autenticado pero sin permiso | APIs con permisos por rol |
> | **404** | 4xx — Error del cliente | **Not Found — el recurso NO existe** | ***/pokemon/pikachuu*** mal escrito → 404 |
> | **500** | 5xx — Error del servidor | Internal Server Error — el servidor se rompió | El servidor de PokeAPI tiene un bug interno |
> | **503** | 5xx — Error del servidor | Service Unavailable — el servidor está caído | Mantenimiento o sobrecarga del servidor |

> **Tu explicación — el 404 específicamente:**
> 
> - *"**404 Not Found** es de la familia 4xx — **error del cliente**. Significa: 'el recurso que pediste NO existe en este servidor'."*
> - *"En la Pokédex, cuando buscamos **pikachuu** (mal escrito), la API nos respondió: 'esa URL apunta a un recurso que no tengo'. Por eso el status fue 404."*
> - *"Otros 4xx que pueden aparecer en otras APIs: **401** (no autenticaste), **403** (autenticaste pero no tenés permiso), **400** (la petición estaba mal armada). HOY nos enfocamos en **404** porque es el que aparece en el lab — pero la lógica es la misma para todos los 4xx."*

> **Pregunta de activación:***"Si la PokeAPI estuviera caída por mantenimiento, ¿qué familia de código nos devolvería? ¿Y si nos olvidamos de poner el nombre y mandamos solo **/pokemon/**?"(Respuesta esperada: si está caída, **5xx** —tipicamente 503—; si la URL está mal armada, **4xx** —tipicamente 400 Bad Request—. Refuerza la lectura por familia.)*
> 

### 3.3 response.ok — el checkpoint entre el fetch y el .json()

**EN PANTALLA: EXCALIDRAW** 

> **Tu apertura:***"OK, ya sabemos qué son los códigos HTTP. ¿Cómo le decimos al código que ANTES de leer el body, chequee si el status fue 2xx o no? "*
> 

> **Tu explicación teórica precisa:***"**response.ok** es un **booleano** del objeto que **fetch** te devuelve. Es **true** si el status está en el rango 200-299 (familia 2xx); **false** en cualquier otro caso (3xx, 4xx, 5xx). Una sola línea de código resuelve la distinción.
**response.status** te da el número exacto (404, 500, etc.). Para 'sí/no es éxito' usamos **response.ok**; para 'qué número exacto' usamos **response.status**.*
> 

**Sintaxis general:**

```jsx
const response = await fetch(url);
console.log(response.status);   // → 200 (o 404, o 500, etc.)
console.log(response.ok);       // → true si status está en 200-299; false en cualquier otro
if (!response.ok) {
  // status NO fue 2xx — algo salió mal
}
const data = await response.json();   // SOLO si llegó OK
```

> **Tu explicación — la trampa del fetch:***"Acá viene el detalle que rompió C11. Para **fetch**, 'éxito' significa: 'logré HABLAR con el servidor'. NO significa 'obtuve los datos que quería'. Por eso el fetch de **pikachuu** se resolvió OK aunque el status fuese 404: el servidor SÍ contestó, solo que contestó 'no hay'. **fetch** entrega ESA respuesta sin distinguir si era buena o mala. Distinguir es nuestro trabajo, no del fetch."*
> 

> **Tu explicación — el patrón idiomático:**
> 
> - *"Inmediatamente DESPUÉS del **fetch**, antes de cualquier **.json()**, va el chequeo **if (!response.ok)**."*
> - *"Si **response.ok** es **false**, hay que reaccionar. Si es **true**, sigue todo normal."*
> - *"En C11 NO chequeábamos esto — leíamos el body directamente con **.json()**. Por eso cuando llegaba un 404 con body 'Not Found' (texto plano, no JSON), **.json()** explotaba con SyntaxError ANTES de poder seguir hacia **adaptarPokemon**. Hoy lo atajamos en la fuente."*

### 3.4 throw new Error(...) — lanzar errores propios

**EN PANTALLA: EXCALIDRAW** 

> **Tu apertura:***"Tenemos el chequeo. Falta saber CÓMO lanzar un error propio cuando el chequeo dice 'esto está mal'. La palabra clave es **throw**."*
> 

> **Tu explicación teórica precisa:***" **throw** dispara un error desde tu propio código. Hasta ahora los errores los disparaba  JavaScript (un ReferenceError, un TypeError); con **throw** somos NOSOTROS los que decidimos: 'esto es un problema, hay que lanzar un error'.*
> 

**Sintaxis general:**

```jsx
throw new Error("Mensaje descriptivo del error");
```

> **Tu explicación — el detalle clave (el string es lo que el usuario va a ver):**
> 
> - *"El string que va dentro de **new Error("...")** es **error.message** del objeto que recibe el catch. **Es exactamente la propiedad que vimos al principio del día.**"*
> - *"Por eso un buen mensaje cuenta: si pongo **throw new Error("Algo salió mal")**, el usuario ve 'Algo salió mal'. Si pongo **throw new Error(No se encontró "${nombre}")**, el usuario ve 'No se encontró "pikachuu"'. La diferencia es HUGE — y la rúbrica lo evalúa."*

> **Tu explicación — cómo se comporta dentro del try:**
> 
> - *"Cuando **throw** dispara dentro de un try, JS **INTERRUMPE INMEDIATAMENTE** el resto del try. Es como un **return** que se va al catch en vez de irse al caller. Las líneas que vienen abajo del throw NUNCA se ejecutan."*

### 3.5 Propagación de errores — cómo el throw sube por la pila

**EN PANTALLA: EXCALIDRAW**

> **Tu apertura:***"Frená un segundo antes del lab. Ya sabemos hacer **throw**, ya sabemos atrapar con **try/catch**. Pero cuando hagamos el lab vamos a hacer una cosa rarísima — el **throw** lo vamos a poner adentro de **obtenerPokemon**, y el **try/catch** que lo atrapa está en **mostrarBusqueda**. Son DOS funciones distintas, dos niveles separados de la pila. **¿Por qué eso funciona?** Por una idea que está abajo de todo lo que hicimos hoy: la **propagación**."*
> 

> **Tu explicación teórica precisa:***"Cada vez que una función llama a otra función, JavaScript va **apilando** un registro de quién llamó a quién. Eso se llama la **PILA DE LLAMADAS**. Es la misma pila que aparece en **error.stack** —la que vimos al principio del día—. Cuando un error se dispara dentro de una función (sea por el motor o por un **throw** nuestro), JS NO lo deja ahí: lo hace **SUBIR** por esa pila, función por función, buscando un **catch** que lo atrape."*
> 

> **Las 2 reglas de la propagación:**
> 
> - *"**Si encuentra un catch en algún nivel superior** → se DETIENE ahí. El catch lo agarra, hace lo que tenga que hacer, y la ejecución continúa después del bloque **try/catch** como si nada hubiera pasado."*
> - *"**Si NO encuentra ningún catch en toda la pila** → llega al tope del script y el script **MUERE**.*

> **El término técnico:***"Este 'subir por la pila buscando un catch' tiene dos nombres en el mundo del software: **propagación** y **burbujeo**. La idea de 'burbuja' viene de imaginar al error como una burbuja en agua —siempre sube hasta encontrar la superficie—. Las dos palabras se usan; son intercambiables."*
> 

### **Demo 1 propagación a través de 3 niveles de funciones— SIN try/catch, el throw sube hasta el tope y mata el script:**

> 
> 
> 
> ```jsx
> function nivelTres() {
>   throw new Error("explosión adentro del nivel más bajo");
> }
> 
> function nivelDos() {
>   nivelTres();   // no tiene try/catch — el error sigue subiendo
> }
> 
> function nivelUno() {
>   nivelDos();    // tampoco tiene try/catch — el error sigue subiendo
> }
> 
> console.log("antes");
> nivelUno();
> console.log("DESPUÉS");   // ← NUNCA se ejecuta
> ```
> 
> **Output esperado:**
> 
> *"Tres cosas importantes en ese output: (a) el mensaje del error fue el que pusimos en el throw adentro de nivelTres; (b) el stack muestra los 3 niveles que el error atravesó subiendo; (c) DESPUÉS NUNCA se imprime — el script murió."*
> 
> ```
> antes
> Error: explosión adentro del nivel más bajo
>     at nivelTres (...)
>     at nivelDos (...)
>     at nivelUno (...)
> ```
> 

### **Demo 2 — CON `try/catch` en el nivel MÁS ARRIBA (nivelUno), atrapa el error que nació 2 niveles más abajo:**

```jsx
function nivelTres() {
  throw new Error("explosión adentro del nivel más bajo");
}

function nivelDos() {
  nivelTres();   // sigue sin try/catch
}

function nivelUno() {
  try {
    nivelDos();   // el error sube de nivelTres → nivelDos y CAE acá
  } catch (error) {
    console.log("atrapé en nivelUno:", error.message);
  }
}

console.log("antes");
nivelUno();
console.log("DESPUÉS");   // ← ahora SÍ se ejecuta
```

**Output esperado:**

> *"Acá está la propagación en acción: el throw se disparó en nivelTres, no había catch ahí, subió a nivelDos, tampoco había catch, subió a nivelUno y AHÍ se topó con el catch. Lo atrapó. El script siguió. **El catch NO TIENE QUE ESTAR EN LA MISMA FUNCIÓN DONDE NACE EL ERROR** — puede estar varios niveles más arriba. Esto es exactamente la arquitectura que vamos a montar en el lab: **throw** en **obtenerPokemon**, **catch** en **mostrarBusqueda**."*
> 

```
antes
atrapé en nivelUno: explosión adentro del nivel más bajo
DESPUÉS
```

> **Tu cierre del sub-punto + puente al lab:***"Con esta idea en la mano, el plan del lab se vuelve obvio: el throw va donde detectamos el problema (donde tenemos el **response.ok** falso, o sea **obtenerPokemon**) y el catch va donde la app necesita seguir viva (donde el usuario espera ver el resultado, o sea **mostrarBusqueda**). Bajamos al plan socrático."*
> 

### 3.6 Lab HU2 — refactor de obtenerPokemon con response.ok + throw

**EN PANTALLA: EXCALIDRAW** 

> **Tu desarrollo — el caso concreto que vamos a hacer en el lab (señalando la pila derecha del panel):***"En el lab vamos a hacer **throw**  adentro de **obtenerPokemon** —cuando el **response.ok** sea **false**—. Sigamos su recorrido:"*
> 
> - *"Nace en **obtenerPokemon**, donde escribimos el throw."*
> - *"**obtenerPokemon** no tiene try/catch propio — el error sube a **buscarPokemon**."*
> - *"**buscarPokemon** tampoco tiene try/catch — sube a **mostrarBusqueda**."*
> - *"Y AHÍ encuentra el try/catch que pusimos en la primera actividad. Lo agarra. La línea **mensaje.textContent = error.message** del catch lee el string que pusimos en el throw 3 niveles abajo y lo pinta en pantalla."*

> **Tu apertura:***"Vamos al lab. La HU 2 tiene 3 criterios y el plan socrático tiene 8 pasos. Mismo patrón: hablamos los pasos, después bajamos a código."*
> 

> 
> 
> 
> **Paso 1 · EL USUARIO ya tiene la búsqueda funcionando con mensaje genérico**
> 
> Punto de partida — sin pregunta socrática. Con la HU 1 lista, una búsqueda fallida muestra "Algo salió mal." en rojo.
> 
> ---
> 
> **Paso 2 · EL USUARIO busca un nombre que NO existe (ej. "pikachuu")**
> 
> > 🔎 *Veamos la HU 2 textual: **"si escribo un nombre que no existe, quiero un mensaje que diga exactamente eso"**. La demo de DevTools de hace un rato nos mostró QUÉ devuelve la API en este caso. ¿Qué status devolvió?*
> > 
> 
> > ✅ **Respuesta esperada:** ***404 Not Found***. La familia 4xx — el servidor entendió la URL pero NO tiene el recurso pedido.
> > 
> 
> ---
> 
> **Paso 3 · EL PROGRAMA detecta que el fetch trajo un status que NO es 2xx**
> 
> > 🔎 *El **fetch** se resolvió OK aunque el status sea 404 — eso lo vimos. ¿Con qué propiedad del objeto **response** chequeamos rápido si el status fue 2xx o no?*
> > 
> 
> > ✅ **Respuesta esperada:** ***response.ok*** — booleano. ***true*** si el status es 2xx; ***false*** en cualquier otro caso.
> El chequeo idiomático: ***if (!response.ok) { ... }*** justo después del ***fetch***, ANTES del ***.json()***.
> > 
> 
> ---
> 
> **Paso 4 · EL PROGRAMA reacciona al !response.ok lanzando un error propio**
> 
> > 🔎 *La HU criterio textual: **"El mensaje es específico (nombra lo que se buscó), no genérico"**. ¿Con qué palabra clave del lenguaje lanzamos un error propio desde nuestro código?*
> > 
> 
> > ✅ **Respuesta esperada:** ***throw new Error("...")***. El string que va adentro del paréntesis termina en ***error.message*** del catch que ya tenemos de la primera actividad.
> > 
> 
> ---
> 
> **Paso 5 · EL PROGRAMA arma el string específico con el nombre buscado**
> 
> > 🔎 *La HU dice: **"muestra el mensaje 'No se encontró pikachuu'"** — el nombre escrito tiene que aparecer EN el mensaje. ¿Cómo metemos el valor de la variable **idONombre** adentro del string?*
> > 
> 
> > ✅ **Respuesta esperada:** template literal (backticks + ***${...}***).
> **Sintaxis:** ***throw new Error(No se encontró "${idONombre}")***.
> Las comillas dobles adentro hacen que el usuario vea literalmente: ***No se encontró "pikachuu"*** — más claro que sin comillas.
> > 
> 
> ---
> 
> **Paso 6 · EL PROGRAMA captura ese error en el catch que YA EXISTE**
> 
> > 🔎 *El **throw** sube por la pila igual que un error nativo. ¿Dónde lo va a atrapar? Y una vez atrapado, ¿qué cambiamos en el catch para que el mensaje específico aparezca en pantalla en lugar del genérico?*
> > 
> 
> > ✅ **Respuesta esperada:** lo atrapa el ***catch (error)*** que ya pusimos en ***mostrarBusqueda*** en la actividad anterior — sube de ***obtenerPokemon*** → ***buscarPokemon*** → ***mostrarBusqueda*** y ahí lo agarra.
> **El cambio:** en lugar de ***mensaje.textContent = "Algo salió mal..."***, usamos ***mensaje.textContent = error.message***.
> Lo demás del catch queda igual.
> > 
> 
> ---
> 
> **Paso 7 · EL USUARIO con nombre VÁLIDO sigue viendo la tarjeta normal**
> 
> > 🔎 *La HU criterio textual: **"Un nombre válido sigue mostrándose con normalidad"**. ¿Qué garantiza que con "charizard" la app siga funcionando igual?*
> > 
> 
> > ✅ **Respuesta esperada:** el chequeo ***if (!response.ok)*** SOLO dispara el throw cuando ***response.ok*** es ***false***. Con "charizard" el status es 200, ***response.ok*** es ***true***, el throw NO se ejecuta, y el código sigue al ***return response.json()*** normalmente.
> > 

> **Code-along (HU2):**
> 
> 
> **Cambio 1: refactor de obtenerPokemon**
> 
> ```jsx
> async function obtenerPokemon(idONombre) {
>   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idONombre}`);
> 
>   if (!response.ok) {                                       // ← Paso 3: chequeo idiomático
>     throw new Error(`No se encontró "${idONombre}"`);       // ← Paso 4 + 5: lanzar con mensaje específico
>   }
> 
>   return response.json();                                    // ← solo si response.ok fue true (Paso 7)
> }
> ```
> 
> **Cambio 2: en mostrarBusqueda, usar error.message en lugar del texto fijo**
> 
> ```jsx
> } catch (error) {
>   mensaje.textContent = error.message;                       // ← Paso 6: el string del throw aparece acá
>   mensaje.classList.remove("hidden");
> }
> ```
> 
> - *"Dos cambios chiquitos: en **obtenerPokemon** agregamos el chequeo + el throw; en el catch, cambiamos el texto genérico por **error.message**. Total: 3 líneas nuevas, 1 línea modificada."*
> - *"Lo que NO cambia: la estructura del **try/catch** sigue igual; **buscarPokemon** no se toca; **mostrarResultado** no se toca; el HTML del **#mensaje** no se toca."*

> **Checkpoint 2 (~50 min):** *(a) buscar "charizard" → la tarjeta sale normal con su botón Capturar; (b) buscar "pikachuu" → aparece el mensaje **No se encontró "pikachuu"** en rojo (NO el genérico anterior); (c) buscar "mewtwoo" → aparece **No se encontró "mewtwoo"** (mensaje específico cambia según el nombre); (d) verificar en DevTools → Console: NO hay error rojo, todo se atrapó limpiamente.*
> 

> **Cierre del Momento + puente al siguiente:***"Listo: el mensaje pasó de 'Algo salió mal' a 'No se encontró pikachuu'. La app comunica EXACTAMENTE qué pasó. Pero noten una cosa más sutil: cuando el usuario pulsa Buscar, ¿qué ve durante el tiempo que tarda la API? **Nada.** La pantalla se queda quieta y de repente aparece el resultado (o el mensaje). Si el WiFi está lento, parece que la app se colgó. Necesitamos un **'Cargando…'** que se vea mientras espera — y que SIEMPRE desaparezca al terminar, haya éxito o error. Eso es lo siguiente, y trae la tercera palabra de **try/catch/finally** que dejamos guardada."*
> 

## MOMENTO 4 —  estado de carga + HU3: spinner garantizado

### 4.1 ESTADO CARGANDO

**EN PANTALLA: EXCALIDRAW** 

> **Tu apertura:***"El mensaje pasó de genérico a específico — la app comunica QUÉ pasó cuando hay error. Pero falta una cosa: feedback DURANTE la espera. Hoy, cuando el alumno pulsa Buscar, la pantalla se queda quieta hasta que aparece el resultado o el error. Si el WiFi está lento, parece que la app se colgó. Estamos a punto de activar el siguiente estado del mapa: **CARGANDO**.*
> 

> **Tu definición teórica precisa del estado CARGANDO:***"El **estado CARGANDO** es la pantalla que mostramos **mientras** la app está esperando una respuesta del servidor (o de cualquier operación asíncrona). No es éxito —todavía no llegaron los datos—; no es error —todavía no falló nada—; es 'pedí, estoy esperando, no te vayas'. Es el estado **transitorio** por definición: dura solo lo que dura la espera."*
> 

> **Propósito:** Mostrar que la app está trabajando, no congelada
> 
> - Indicar al usuario que algo está ocurriendo (para que no piense que la app está congelada).
> - Cancelar solicitudes si el componente se desmonta (en apps reactivas como React).
> - Evitar que el usuario interactúe con contenido incompleto.

> **Sus 3 propiedades visuales (las del lab): MUESTRA LA WEB CON LAS FORMAS DE CARGA**
> 
> - *"**Color neutro / gris** — convención de la industria: el ojo lee 'esto es información de estado, no resultado'. En el HTML usamos **text-slate-500** de Tailwind, NO rojo (sería confundirlo con ERROR) ni verde (sería confundirlo con ÉXITO)."*
> - *"**Texto puramente informativo** — el contenido habitual es 'Cargando…' (con los 3 puntos suspensivos sugiriendo continuidad). NO comunica decisión —no dice 'esperá' ni 'no toques'—; solo describe lo que está pasando."*
> - *"**Las demás zonas se ocultan o conviven** — al encender CARGANDO, el ERROR del intento anterior se oculta (limpieza). El ÉXITO anterior puede quedarse abajo o irse, depende del UX; en nuestra Pokédex se queda."*

> **Cuándo se enciende y cuándo se apaga:**
> 
> - *"**Se enciende** al INICIO de la función asíncrona, ANTES del **try** — porque el 'estoy esperando' empieza apenas el usuario pulsa Buscar."*
> - *"**Se apaga SIEMPRE** al terminar la operación, en cualquier camino — éxito O error. Por eso necesitamos **finally**: porque es el único bloque que el lenguaje GARANTIZA que va a correr en todos los caminos."*

### 4.2 Lab HU3 — spinner garantizado + robustecer carga inicial

**EN PANTALLA: EXCALIDRAW** 

> 
> 
> 
> **Paso 1 · EL USUARIO ya tiene la búsqueda funcionando con mensajes específicos**
> 
> Punto de partida — sin pregunta socrática. Con la actividad anterior cerrada, la búsqueda funciona con red y muestra "No se encontró 'X'" sin red.
> 
> ---
> 
> **Paso 2 · EL USUARIO pulsa Buscar y mientras espera, NO VE NADA**
> 
> > 🔎 *Veamos la HU 3 textual: **"quiero ver 'Cargando…' mientras espera"**. Tenemos el **<div id="spinner">Cargando…</div>** que agregamos en el HTML al principio del lab. ¿Cómo lo mostramos? ¿Y cuándo exactamente?*
> > 
> 
> > ✅ **Respuesta esperada:** lo mostramos con ***spinner.classList.remove("hidden")***. **Cuándo:** al PRINCIPIO de ***mostrarBusqueda***, ANTES del try — porque el "espera" empieza ahí.
> > 
> 
> ---
> 
> **Paso 3 · EL PROGRAMA intenta ocultar el spinner al final del try — y falla en vivo**
> 
> > 🔎 *La HU dice criterio textual: **"El indicador SIEMPRE desaparece al terminar, haya éxito o error"**. La palabra **SIEMPRE** está en mayúscula a propósito. La intuición natural sería poner el ocultar AL FINAL del try, después de **mostrarResultado(pokemon)**. Hagámoslo así PRIMERO — antes de probar, ¿qué predicen que va a pasar con el spinner cuando busquen "pikachuu" (nombre que dispara error)?*
> > 
> 
> > 🛠️ **Code-along intermedio (versión MAL a propósito):** agregar ***spinner.classList.remove("hidden")*** ANTES del try y ***spinner.classList.add("hidden")*** AL FINAL del try (después de ***mostrarResultado(pokemon)***). Guardar y probar buscando **"pikachuu"**.
> > 
> 
> > ✅ **Observación empírica:** aparece "Cargando…", después el mensaje rojo "No se encontró 'pikachuu'" sale, **PERO el 'Cargando…' queda PEGADO en pantalla**. El catch corrió —vemos el mensaje— pero ***spinner.classList.add("hidden")*** nunca corrió porque el try se interrumpió antes de llegar a esa línea.
> **Conclusión:** poner el ocultar dentro del try NO garantiza que corra en el camino con error. Necesitamos un mecanismo que corra SIEMPRE, en los dos caminos.
> > 
> 
> ---
> 
> **Paso 4 · EL PROGRAMA mueve el ocultar a finally y verifica el fix**
> 
> > 🔎 *Ya vimos el dolor empíricamente. ¿Qué bloque de la estructura **try/catch/finally** garantiza que una operación corra EN AMBOS CAMINOS — éxito y error?*
> > 
> 
> > ✅ **Respuesta esperada:** ***finally***. **Mover** la línea ***spinner.classList.add("hidden")*** del final del try a un nuevo bloque ***finally { ... }*** al final de la estructura. El try queda con SOLO el código que puede fallar; el catch queda igual; el finally queda con UNA línea: el ocultar.
> **Verificación en vivo:** buscar "pikachuu" de nuevo → aparece el spinner, después el mensaje rojo, **Y el spinner DESAPARECE**. Buscar "charizard" → aparece el spinner, después la tarjeta, Y el spinner desaparece también. Los dos caminos cumplen.
> > 
> 
> ---
> 
> **Paso 5 · EL PROGRAMA limpia el mensaje rojo anterior al empezar nueva búsqueda**
> 
> > 🔎 *Esto ya lo teníamos en la actividad anterior. Ahora con el spinner aparece una pregunta: ¿el **mensaje.classList.add("hidden")** del inicio se queda donde estaba, o lo movemos?*
> > 
> 
> > ✅ **Respuesta esperada:** se queda donde estaba — ANTES del try, al principio de la función. Junto con la línea de mostrar spinner. Las dos operaciones de limpieza inicial van juntas: ocultar mensaje viejo + mostrar spinner.
> > 
> 
> ---
> 
> **Paso 6 · EL USUARIO abre la página con la red caída**
> 
> > 🔎 *La HU dice criterio textual: **"Si la carga inicial de la rejilla falla, también se ve un mensaje (no una página en blanco)"**. ¿Qué función carga la rejilla al abrir? ¿Tiene try/catch hoy?*
> > 
> 
> > ✅ **Respuesta esperada:** ***cargarPokedex*** (de C11). NO tiene try/catch hoy — si falla, mata el script igual que pasaba en la búsqueda antes. Hay que envolverla con try/catch/finally también.
> > 
> 
> ---
> 
> **Paso 7 · EL PROGRAMA aplica el MISMO patrón a cargarPokedex**
> 
> > 🔎 *Mismo esqueleto que **mostrarBusqueda**. ¿Qué va en el try? ¿qué va en el catch? ¿qué va en el finally?*
> > 
> 
> > ✅ **Respuesta esperada:**
> > 
> > - **try:** el cuerpo actual de ***cargarPokedex*** (el array de nombres + ***Promise.all*** + ***render***).
> > - **catch:** mostrar mensaje en ***#mensaje*** ("No se pudo cargar la Pokédex." — texto genérico porque no hay un nombre buscado para personalizar).
> > - **finally:** ***spinner.classList.add("hidden")*** — mismo patrón.
> > Antes del try, también ***spinner.classList.remove("hidden")*** para que se vea mientras carga.
> 
> ---
> 
> **Paso 8 · Verificación — los 3 criterios de la HU en vivo**
> 
> > 🔎 *¿Cómo probamos los 3 criterios en la app?*
> > 
> 
> > ✅ **Respuesta esperada:**
> (a) Recargar la página con red OK → el spinner aparece un instante mientras carga la rejilla y se va (criterio 1 + criterio 2).
> (b) Buscar "charizard" → el spinner aparece durante el fetch y se va al pintar la tarjeta (criterios 1 y 2 en búsqueda).
> (c) Buscar "pikachuu" → el spinner aparece y se va al mostrar el mensaje "No se encontró" (criterio 2 — el SIEMPRE desaparecer también funciona con error).
> (d) Desactivar WiFi y recargar la página → el spinner aparece, se va, y aparece "No se pudo cargar la Pokédex." (criterio 3).
> > 

> **Cierre del Momento + puente al siguiente:***"Listo: la app comunica EN TODO MOMENTO en qué estado está. Cargando, éxito, error específico, error de carga inicial — los cuatro escenarios cubiertos, y el spinner nunca queda pegado. Pero noten una cosa más sutil: cuando alguien escribe 'pikachuu' mal escrito, ve un mensaje **ROJO** de error. Como si fuera grave. Y técnicamente... no es tan grave — el usuario solo escribió mal. La app está PERFECTA, el servidor también — solo que el Pokémon no existe. Vale la pena distinguir 'algo se rompió de verdad' de 'no hay resultado'. Eso es lo que ajustamos a continuación."*
> 

## MOMENTO 5 — "No encontrado ≠ error" + 4 estados de UI + HU4: refactor del 404

### 5.1 "No encontrado ≠ error" — el principio + el estado VACÍO

**EN PANTALLA: EXCALIDRAW** 

> **Tu apertura:***"Vamos a hacer algo que en el código se ve como un cambio chico pero en el SIGNIFICADO es enorme. Hoy buscamos 'pikachuu' mal escrito y el alumno ve un mensaje **ROJO** de error. La app comunica 'algo se rompió'. Pero técnicamente NADA se rompió — el servidor respondió perfecto, la red funcionó perfecto, el fetch llegó perfecto. Solo que el Pokémon no existe. Es como si Google, cuando buscás algo raro, te mostrara una pantalla con FUEGO. Sería absurdo. Vamos a arreglar ese matiz."*
> 

> **Tu explicación teórica precisa — el principio "exceptions are for exceptions":**
una regla de oro en la arquitectura de software que dicta que **los bloques try...catch solo deben usarse para manejar situaciones verdaderamente inesperadas, anómalas o fuera del control de tu código**, y nunca para controlar el flujo normal y predecible de tu aplicación.
> 
> - *"**throw / catch** es la herramienta del lenguaje para situaciones que NO deberían pasar en operación normal: el servidor se cayó, la red se cortó, el archivo se corrompió. Cosas excepcionales — fallos genuinos."*
> - *"Buscar un nombre mal escrito **NO es excepcional**. Pasa todos los días, cientos de veces por usuario. Es ESPERADO. Tratar lo esperado como excepción es usar la herramienta equivocada."*

> 
> 
> 
> ### ❌ El error conceptual: Usar try...catch como un if...else encubierto
> 
> Un error común cuando se descubre el poder del try...catch es usarlo para validar datos comunes.
> 
> Por ejemplo, si estás buscando un usuario en un arreglo, que el usuario no exista **no es un desastre informático, es una posibilidad totalmente normal** 
> 
> ```jsx
> // 👥 Nuestra base de datos simulada (un array simple de nombres)
> const listaUsuarios = ["Erick", "Mhitzy", "Gefferson", "Carlos"];
> 
> // 🔍 La función con lógica limpia (sin try-catch innecesarios)
> function buscarUsuarioEnArray(nombreBuscado) {
>   // El método .find() devuelve el nombre si lo encuentra, o 'undefined' si no existe
>   return listaUsuarios.find(usuario => usuario === nombreBuscado);
> }
> 
> // ❌ MAL USO: Controlar lógica común con excepciones
> try {
>   const usuario = buscarUsuarioEnArray("Erick");
> 
>   if (!usuario) {
>     throw new Error("No existe"); // 👈 Forzar un error para saltar al catch
>   }
> 
>   console.log("Usuario encontrado:", usuario);
> } catch (error) {
>   console.log("El usuario no existe, mostremos el formulario de registro.");
> }
> ```
> 
> ### ✅ El uso correcto: Resolver con lógica y dejar el catch para lo impredecible
> 
> El caso anterior se resuelve limpiamente con una estructura de control nativa (if), dejando el código más rápido y fácil de leer:
> 
> ```jsx
> // ✅ BUEN USO: Lógica para lo predecible, try...catch para lo impredecible
> const usuario = buscarUsuarioEnArray("Erick");
> 
> if (usuario) {
>   console.log("Usuario encontrado:", usuario);
> } else {
>   // Manejo del flujo normal y predecible
>   console.log("El usuario no existe, mostremos el formulario de registro.");
> }
> ```
> 

### 5.2 Lab HU4 — refactor del 404: del throw al estado VACÍO

**EN PANTALLA: EXCALIDRAW Panel 5.2 LIBRE** 

> 
> 
> 
> **Paso 1 · EL USUARIO ya tiene la búsqueda mostrando "No se encontró..." en rojo**
> 
> Punto de partida — sin pregunta socrática. Con la actividad anterior cerrada, buscar "pikachuu" pinta el mensaje rojo de error, el spinner aparece y se va, todo funcional.
> 
> ---
> 
> **Paso 2 · EL PROGRAMA distingue un 404 de OTRO error HTTP**
> 
> > 🔎 *Veamos la HU 4 textual: **"si busco un Pokémon que no existe, quiero un aviso de 'no se encontró', no un error rojo"**. ¿Cómo distinguimos un 404 (no encontrado) de otros fallos HTTP (500, red caída) ANTES de decidir si lanzar o no?*
> > 
> 
> > ✅ **Respuesta esperada:** chequear ***response.status === 404*** ANTES del chequeo general ***!response.ok***. El 404 deja de lanzar; los OTROS fallos HTTP siguen lanzando (con un mensaje genérico ahora — "La API respondió con un error" — porque ya no nombran el Pokémon buscado, ese caso ya no es error).
> > 
> 
> ---
> 
> **Paso 3 · EL PROGRAMA devuelve *null* ante un 404 — el valor estándar de "no hay nada"**
> 
> > 🔎 *Si el 404 ya no lanza, ¿qué tiene que devolver **obtenerPokemon** para que las funciones de arriba sepan 'no hay resultado'? ¿Y por qué null y no undefined u otra cosa?*
> > 
> 
> > ✅ **Respuesta esperada:** ***return null***. El ***null*** es la convención de JS para "valor vacío explícito" — distinto de ***undefined*** (que es "no se asignó"). Cualquier función puede chequear con ***=== null*** y saber que es el caso "no hay datos".
> **Modificación:** en ***obtenerPokemon***, agregar if (response.status === 404) return null; ANTES del if (!response.ok).
> > 
> 
> ```jsx
> // HU2 — versión actual: TODO 4xx/5xx es error
> if (!response.ok) {
>   throw new Error(`No se encontró "${idONombre}"`);
> }
> 
> // HU4 — versión refactorizada: 404 ya NO es error
> if (response.status === 404) {
>   return null;                                       // ← "no existe" = valor vacío, NO error
> }
> if (!response.ok) {
>   throw new Error("La API respondió con un error");  // ← otros fallos HTTP SÍ son error
> }
> ```
> 
> ---
> 
> **Paso 4 · EL PROGRAMA propaga ese null hacia arriba en buscarPokemon**
> 
> > 🔎 *Hoy **buscarPokemon** llama a **obtenerPokemon** y devuelve **adaptarPokemon(data)**. Si **data** es **null**, ¿qué pasa si lo pasamos por **adaptarPokemon**?*
> > 
> 
> > ✅ **Respuesta esperada:** explota — ***adaptarPokemon*** asume ***data.types***, ***data.sprites***, etc., y un ***null*** no tiene esas propiedades. Es exactamente el TypeError de C11.
> **Modificación:** en ***buscarPokemon***, ANTES del ***adaptarPokemon***, agregar if (data === null) return null;. El null sigue subiendo. La función pasa a tener dos retornos posibles: el objeto adaptado, o null.
> > 
> 
> ---
> 
> **Paso 5 · EL PROGRAMA chequea null en mostrarBusqueda ANTES del render normal**
> 
> > 🔎 *Cuando **mostrarBusqueda** recibe el resultado de **buscarPokemon**, ¿qué tiene que chequear primero, antes de llamar a **mostrarResultado**?*
> > 
> 
> > ✅ **Respuesta esperada:** chequear ***if (pokemon === null)***. Si es null → activar el estado VACÍO y salir limpio con ***return***. Si NO es null → seguir con ***mostrarResultado(pokemon)*** como siempre.
> **Ubicación:** ADENTRO del ***try***, después del ***await buscarPokemon(nombre)*** y ANTES del ***mostrarResultado***.
> > 
> 
> ---
> 
> **Paso 6 · EL PROGRAMA activa el estado VACÍO — pinta el aviso neutro en #resultado**
> 
> > 🔎 *La HU criterio textual: **"el aviso menciona el nombre que se buscó"**. La HU dice "no se encontró ese Pokémon". ¿Dónde pintamos ese aviso —en **#mensaje** o en otro lugar—? ¿Por qué?*
> > 
> 
> > **Tu definición teórica precisa del estado VACÍO:***"El **estado VACÍO** es la pantalla que mostramos cuando la operación **terminó con éxito técnico** —la red OK, el servidor OK, el fetch OK— pero **el resultado no contiene datos**. No es éxito (no hay tarjeta que pintar); no es error (nada se rompió); es 'todo funcionó perfecto, simplemente no hay nada para mostrar'. Es el estado que confunde a los principiantes porque PARECE error pero técnicamente NO LO ES."*
> > 
> 
> > ✅ **Respuesta esperada:** NO en ***#mensaje*** —ese es rojo, es para errores reales—. Lo pintamos REEMPLAZANDO el contenido de ***#resultado*** (el grid donde van las tarjetas). El estado VACÍO se siente como un resultado de búsqueda, no como un error.
> **Modificación:** ***contenedor.innerHTML = <p class="col-span-full text-center text-slate-500 py-8">No se encontró ningún Pokémon llamado "${nombre}" 🔍</p>***. Color gris (text-slate-500), emoji 🔍 que comunica "búsqueda" y NO alarma.
> > 
> 
> ---
> 
> **Paso 7 · EL PROGRAMA hace return después de pintar el VACÍO — Y el spinner se oculta igual**
> 
> > 🔎 *Después de pintar el aviso, hacemos **return** para no caer en el **mostrarResultado** de abajo. Pero hay un punto técnico que muchos olvidan: ese **return** está adentro del **try**. ¿El **finally** se ejecuta o NO porque ya hubo return?*
> > 
> 
> > ✅ **Respuesta esperada:** SÍ se ejecuta. ***finally*** corre SIEMPRE — incluso después de un ***return*** adentro del ***try*** o del ***catch***. JS lo corre ANTES de devolver el control. Por eso el spinner se oculta en los TRES caminos: éxito (return implícito), VACÍO (return explícito), error (catch). Sin esta propiedad, tendríamos que duplicar el ***spinner.classList.add("hidden")*** en cada rama. Esa pregunta de activación que dejamos al principio del Momento 4 — recién acá toma sentido pleno.
> > 
> 
> ---
> 
> **Paso 8 · Verificación — los 3 criterios de la HU + el estado VACÍO funcionando**
> 
> > 🔎 *¿Cómo probamos los 3 criterios + el efecto visual del VACÍO?*
> > 
> 
> > ✅ **Respuesta esperada:**
> (a) Buscar **"pikachuu"** → spinner aparece, se va, aparece el aviso GRIS ***'No se encontró ningún Pokémon llamado "pikachuu" 🔍'*** en el grid. **NO** mensaje rojo. **NO** se rompe la app. (criterios 1 y 2).
> (b) Buscar **"pikachu"** → spinner, después la tarjeta con su botón Capturar — normal, como en M3/M4 (criterio 3 + verificación de que no rompimos lo anterior).
> (c) Cortar el WiFi y buscar **"charizard"** → spinner, se va, aparece el mensaje ROJO "Algo salió mal..." en ***#mensaje*** — el error de verdad sigue funcionando, no lo rompimos.
> **Tres situaciones, tres respuestas distintas, una app robusta.**
> > 

> **Cierre del Momento + puente al siguiente:***"Acabamos de cerrar técnicamente el día. La Pokédex de hoy puede estar en 4 caras posibles: **CARGANDO** mientras pide datos, **ÉXITO** cuando los pinta, **ERROR** cuando algo se rompe de verdad, **VACÍO** cuando funcionó perfecto pero no hay nada que mostrar. Cada una con su propia zona en el HTML, su propio disparador en el JS, y su propia voz visual. Lo logramos sin reescribir nada de C09/C10/C11 — todo lo que tenían sigue ahí, ahora envuelto en una capa robusta. **Pero falta una cosa última:** el repositorio no sabe contar qué hace este proyecto. Si yo abro tu GitHub mañana, veo carpetas y archivos, pero no entiendo qué es esta Pokédex, cómo se usa, ni dónde está deployada. Eso lo arreglamos en el cierre — con la primera doc del curso: el [**README.md**](http://readme.md/)."*
> 

## MOMENTO 6 — Markdown + README + cierre del módulo + apertura al test

### 6.1 Markdown — el formato de la documentación técnica

**EN PANTALLA: EXCALIDRAW** 

> **Tu apertura:***"Última pieza del día. Tu Pokédex funciona perfecto y es robusta — pero si yo abro tu repositorio en GitHub mañana sin conocerte, veo carpetas y archivos, no entiendo qué es. Necesitás una **descripcion del proyecto** que diga 'esto es una Pokédex, así se usa, acá está el sitio'. Eso es el **README**. Y el formato en que se escribe se llama **Markdown**."*
> 

> **Tu explicación teórica precisa:***"
**Markdown** es un formato de **texto plano con sintaxis mínima** que se renderiza automáticamente como texto formateado: títulos, listas, links, código. Lo lee GitHub, GitLab, Notion, Obsidian, VS Code, Discord, Slack — es **el formato estándar de documentación técnica del software libre**. La idea clave: el archivo se ve **legible incluso sin renderizar**, porque es texto plano, pero al renderizarlo se ve estructurado y bonito."*
> 

> **Las 5 sintaxis que vas a usar HOY (señalando el panel):**
> 
> 
> 
> | Sintaxis | Resultado |
> | --- | --- |
> | ***# Título*** / ***## Subtítulo*** | Encabezados (H1, H2, H3...) |
> | ***\\negrita\\*** · ***\cursiva\*** | Énfasis |
> | ***- item*** | Lista con viñetas |
> | ***\`código\`*** | Código en línea (monospace) |
> | [***texto***](https://www.notion.so/url) | Enlace clickeable |

> **Tu nota técnica:***"GitHub **renderiza automáticamente** cualquier [**README.md**](http://readme.md/) que esté en la raíz del repo — lo muestra como página principal cuando alguien abre el repo. Esa es la razón por la que TODO repo profesional tiene README: es la **primera impresión** del proyecto. La rúbrica del lab de hoy lo evalúa en el criterio 5 — 20 puntos."*
> 

### 6.2 Code-along express — el README.md del proyecto Pokédex

**EN PANTALLA: VS CODE — archivo nuevo [*README.md*](http://readme.md/) en la raíz del repo (al mismo nivel que *index.html* y *app.js*).** 

> **Tu apertura:***"Vamos a escribir el README en 5 minutos. Cinco secciones, una por elemento de la rúbrica: título, descripción, cómo usarlo, tecnologías, enlace al deploy. Es texto, no lógica — lo dictamos rápido."*
> 

> **Code-along — paso a paso:**
> 
> 1. En la raíz del repo (al mismo nivel de ***index.html***), crear un archivo nuevo llamado [***README.md***](http://readme.md/) (con mayúsculas en README, extensión ***.md*** en minúsculas — convención universal).
> 2. Dictar las 5 secciones una por una:
> 
> ```markdown
> # Pokédex
> 
> Buscador de Pokémon que consume la PokeAPI. Permite buscar por nombre, capturar Pokémon al estado local y explorar tarjetas con stats e imágenes.
> 
> ## Cómo usarlo
> 
> 1. Abre el sitio desplegado.
> 2. Escribe el nombre de un Pokémon en el buscador y presiona **Buscar**.
> 3. Cuando aparezca la tarjeta, presiona **Capturar** para agregarlo a tu Pokédex local.
> 4. Usa el botón **Cargar más** para seguir explorando la rejilla inicial.
> 
> ## Tecnologías
> 
> - JavaScript moderno: `fetch`, `async/await`, `Promise.all`, `try/catch/finally`
> - HTML semántico + Tailwind CSS para estilos
> - [PokeAPI](<https://pokeapi.co/>) como fuente de datos
> 
> ## Demo
> 
> 🔗 [Ver en GitHub Pages](<https://tu-usuario.github.io/pokedex/>)
> ```
> 

> **Tu lectura — qué hace cada sección y por qué (señalando):**
> 
> - *"**# Pokédex** — el H1 grande. Es el título principal del repo. GitHub lo muestra al tope."*
> - *"**Descripción** (párrafo suelto) — UNA o DOS frases que digan QUÉ ES y QUÉ HACE. No empieces con 'este proyecto es...'; empezá con la cosa directamente: 'Buscador de Pokémon...'."*
> - *"**## Cómo usarlo** — lista numerada. Pasos concretos de USUARIO, no de programador. Quien lee esto quiere saber 'qué hago para verlo funcionar'."*
> - *"**## Tecnologías** — lista con bullets. Acá usás backticks (**\`código\`**) para nombres de funciones/herramientas — se ve en monospace. Y un link a la API externa con [**texto**](https://www.notion.so/url)."*
> - *"**## Demo** — el enlace al sitio desplegado en GitHub Pages. **Este es el más importante para la rúbrica.** Reemplazá **tu-usuario** por tu username real de GitHub."*

> **Tu nota tras dictarlo:***"Cinco minutos, cinco secciones, los 5 puntos de la rúbrica cubiertos. Después de guardar y pushear, abrí tu repo en [GitHub.com](http://github.com/) y refrescá — vas a ver el README renderizado bonito en la portada del proyecto. Esa página renderizada **es** la primera impresión que cualquiera va a tener de tu trabajo."*
> 

> **Checkpoint final del lab (~5 min):***(a) El archivo [**README.md**](http://readme.md/) existe en la raíz del repo, junto a **index.html** y **app.js**; (b) abierto en [GitHub.com](http://github.com/) se ve renderizado con título grande, secciones, lista, links clickeables; (c) el enlace al deploy funciona y abre la Pokédex en GitHub Pages; (d) Pull Request **lab12-errores** → **main** fusionado.*
>