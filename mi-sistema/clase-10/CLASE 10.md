# CLASE 10 — Datos desde la web: fetch, Promesas y JSON (Módulo 3)

> **Curso:** Code 201 · **Módulo 3** — Clase 2 de 4
> **Proyecto víctima:** **Pokédex** (repo `pokedex`, rama `lab10-api`) — la MISMA app de C09. Hoy deja el array local y trae sus datos de la **PokeAPI** real.
> **NO es lab calificado** (el calificado del M3 es C12) · **no pide README** todavía (C12, con Markdown).
> **Fuente de inputs:** `code201/class-10/README.md` + `lab/README.md` + **apuntes del instructor** (`apuntes_clase10/`: asincronía, `setTimeout`, Promesas I/II, FETCH).
> **Requiere internet:** PokeAPI es gratuita, sin registro ni clave.
> **Duración:** 3h reales · se prepara para 2h30 (≈150 min) · colchón 30 min · receso 10 min entre M2 y M3.

---

## Idea fuerza de la clase

**Los datos ya no viven en tu código: viven en internet, y tardan en llegar.** Pedirlos no es leer una variable —es hacer un pedido por delivery: lo pedís, no te congelás esperando en la puerta, seguís con tu vida y reaccionás cuando llega. Esa es la **asincronía**. Alrededor de esa idea se ordenan las herramientas: una **API** que entrega los datos (PokeAPI), el formato **JSON** en que viajan, las **Promesas** (`fetch` + `.then`/`.catch`/`.finally`) para manejar la espera, y una **función adaptadora** que traduce la forma de la API a la forma limpia que la app de C09 ya sabe pintar. El `render`, las tarjetas y el buscador de C09 **no se reescriben**: solo cambia de dónde vienen los datos.

> **Enfoque de la clase (2 capas que no hay que mezclar):** la **conceptual** (qué es una API, qué es la asincronía, qué es una Promesa) y la **técnica** (`fetch`, `.then`, `json()`, `Promise.all`). La primera mitad (M1-M2) es el modelo mental + demos en consola; la segunda (M3-M5) lo aplica al lab de la Pokédex. El alumno puede teclear `fetch` sin entender por qué el `console.log` de abajo se imprime ANTES — por eso primero el porqué, después la sintaxis.

---

## Tabla de tiempos (preparado para 2h 30min)

| Momento    | Tema                                                                       | Parte del lab        | Tiempo  |
| ---------- | -------------------------------------------------------------------------- | -------------------- | ------- |
| **M1**     | Asincronía (concepto): dinámica de la pizza + situaciones asíncronas usuales + `setTimeout` + demo del orden | — (concepto)         | ~30 min |
| **M2**     | Promesas: estados + creación (`new Promise`) + consumo (`.then`/`.catch`/`.finally`) | — (teoría/demo)      | ~30 min |
| **RECESO** | —                                                                          | —                    | 10 min  |
| **M3**     | API (cliente-servidor) + `fetch` + objeto `Response` + JSON + demo PokeAPI | Setup + HU1 + HU2 (CP1, CP2) | ~45 min |
| **M4**     | Función adaptadora (HU3) + `Promise.all` (HU4, por nombres) + reconectar buscador | HU3 + HU4 (CP3, CP4) | ~30 min |
| **M5**     | Cierre: resumen + puente a C11 (`async/await`)                             | — (cierre)           | ~15 min |

> Total preparado: ~150 min (sin contar el receso). El colchón de 30 min absorbe el trabajo autónomo en cada Checkpoint del lab (el lab tiene **4 HU**: CP1 ~15', CP2 ~45', CP3 ~70', CP4 ~95' de reloj de lab).
>
> **Orden conceptual decidido:** Asincronía (M1) → Promesa (M2) → API + `fetch` (M3). La asincronía es el modelo mental y se explica sin APIs (pizza, `setTimeout`, eventos); la API entra recién en M3 como la fuente concreta de datos asíncronos. **El código del lab no aparece hasta M3** — recién cuando `fetch` y Promesa ya están explicados.

---

## Cadena Problema → Solución de la clase

```
M1: "hay tareas que TARDAN y no podemos congelar el programa esperándolas" (pedir una pizza)
     → Asincronía: JS es single-thread y no se bloquea (situaciones asíncronas usuales + demo setTimeout 1→2→3)
     ↓ (una operación asíncrona te devuelve "algo" que todavía no es el dato — ¿qué es ese algo?)
M2: "ese algo es una Promesa" → qué es, sus estados, cómo se crea (new Promise) y cómo se consume (.then/.catch/.finally)
     ↓ (ya entendemos la Promesa en abstracto — ¿de dónde sacamos datos reales que vengan como promesa?)
M3: "de una API: pidámosle un Pokémon real a la PokeAPI" → API + fetch + Response + dos .then + JSON anidado (HU1 + HU2)
     ↓ (llegan los datos, pero su forma NO es la de C09 y la tarjeta no se arma)
M4: "traduzcamos la forma de la API a la nuestra y traigamos varios a la vez"
     → función adaptadora (HU3) + Promise.all en paralelo + reconectar el buscador (HU4)
     ↓ (la Pokédex ya vive de la web… pero la consumimos con .then encadenados, y la cadena se hace larga)
M5 (cierre): "¿y si el código asíncrono se leyera como código normal?" → puente a C11 (async/await)
```

---

## MOMENTO 1 — Asincronía: el código que no se congela

**Tiempo:** ~30 min
**Parte del lab:** — (momento conceptual; el proyecto no se toca todavía)

> **OBJETIVO:** El alumno entiende qué es la **asincronía** —ejecutar algo que tarda sin bloquear el resto del programa— a partir de una **dinámica cotidiana (pedir una pizza)**, reconoce las **situaciones asíncronas usuales en programación** (timers, eventos, peticiones de red, lectura de archivos), aprende **`setTimeout`** como herramienta de espera controlada y lo ve demostrado en el orden de ejecución. Al cerrar M1 puede explicar por qué "lo que tarda" se ejecuta al final, **sin haber visto todavía ni API ni `fetch`**.

> **Patrón pedagógico de M1:** momento **100% conceptual**, sin código del proyecto. Se abre con una **dinámica interactiva** (la pizza) para que el alumno descubra la idea antes de la definición técnica. Antes de la demo se **enseña `setTimeout`** (1.3) como herramienta de retraso **determinístico** —sin red—, porque es la pieza que hace visible la asincronía sin la imprevisibilidad de internet. **NO se menciona API, ni `fetch`, ni Promesa como objeto, ni se corre el lab:** mostrar `fetch` antes de tener el concepto de Promesa confunde. El orden es asincronía (M1) → Promesa (M2) → API + `fetch` (M3).

#### 1.1 Dinámica de apertura — pedir una pizza

**EN PANTALLA: NADA — dinámica conversada con el grupo (la pantalla entra recién en 1.3).**

> **Tu apertura:**
> *"Antes de tocar una sola línea de código, quiero que pensemos en algo cotidiano: pedir una pizza. Lo hacemos todos. Voy a ir paso a paso y ustedes me responden."*

> **Tu desarrollo de la dinámica (paso a paso, preguntando al grupo):**
> *"Paso 1: abro la app y hago el pedido. Listo, la pizzería ya lo recibió."*
>
> *"Paso 2 — y acá va la pregunta clave: mientras la pizza se prepara y viaja, ¿qué hago yo? ¿Me quedo parado en la puerta treinta minutos mirando el vacío hasta que llegue?"*
> *(Dejar que respondan. La respuesta natural: "no, sigo con mis cosas".)*
>
> *"Exacto. Pongo la mesa, sigo viendo la serie, contesto un mensaje. Hago otras cosas. No congelo mi vida esperando."*
>
> *"Paso 3: suena el timbre. Recién AHÍ dejo lo que estaba haciendo y bajo a recibir la pizza. El timbre es mi señal de que el pedido ya está."*

> **Tu cierre de la dinámica (nombrar el concepto):**
> *"Eso que acaban de describir tiene nombre en programación. Pedir algo que tarda, NO quedarse congelado esperándolo, seguir trabajando, y reaccionar cuando por fin llega: eso es la **asincronía**. Y es exactamente lo que hace JavaScript cuando pide datos por internet."*

---

#### 1.2 Qué es asincronía + situaciones asíncronas usuales

**EN PANTALLA: VS CODE — el editor a la vista para apoyar la explicación (todavía sin escribir el demo).**

> **Tu explicación teórica precisa:**
> *"La **asincronía** es la capacidad de ejecutar una tarea que **tarda** sin **bloquear** el resto del programa. Lanzo la tarea lenta, sigo ejecutando las líneas siguientes, y vuelvo a ocuparme del resultado cuando esté listo."*

> **Tu explicación — por qué JavaScript la necesita (single-thread):**
> *"Hay un dato técnico que lo explica todo: JavaScript es **single-thread**, hace **una sola cosa a la vez**. No tiene varios trabajadores en paralelo: tiene uno solo."*
> - *"Si ese único trabajador se quedara congelado esperando a que llegue la pizza —digo, los datos— toda la página se traba: no responde un clic, no se desplaza, nada. Se congela entera."*
> - *"Por eso JavaScript NO espera parado. Lanza lo que tarda, sigue atendiendo todo lo demás, y reacciona cuando el resultado llega. La asincronía es lo que mantiene la página fluida."*

> **Tu explicación — las situaciones asíncronas usuales:**
> *"Esto no es solo para pedir datos por internet. En programación hay varias situaciones que son asíncronas por naturaleza, y a algunas ya se enfrentaron sin saber el nombre:"*

| Situación asíncrona | Qué es | ¿Ya la usaron? |
|---|---|---|
| **Temporizadores** (`setTimeout`, `setInterval`) | Ejecutar algo *después* de un tiempo | La vemos en un minuto |
| **Eventos del DOM** (`click`, `input`) | El código "espera" una acción del usuario sin congelarse | Sí — el buscador con `input` de C09 |
| **Peticiones de red** (pedir datos a un servidor) | Traer datos que viven en internet | Es lo central de hoy (M3) |
| **Lectura de archivos / base de datos** | Operaciones de disco que tardan | Más adelante |

> - *"Todas comparten lo mismo: algo que tarda y que NO detiene el programa. Hoy nos enfocamos en las **peticiones de red** — pero el mecanismo que vamos a aprender sirve para todas."*

---

#### 1.3 `setTimeout` — la herramienta para "algo que tarda"

**EN PANTALLA: VS CODE — escribir un ejemplo mínimo de `setTimeout`.**

> **Tu apertura:**
> *"Para probar la asincronía en vivo necesito una tarea que tarde un tiempo, pero **controlado** —sin depender todavía de internet, que es impredecible—. JavaScript tiene la herramienta perfecta para eso: `setTimeout`. La conocemos primero, y en un minuto la usamos para ver el efecto."*

> **Tu explicación teórica precisa:**
> *"`setTimeout` ejecuta una función **una sola vez, después de un tiempo de espera**. Recibe dos cosas:"*
> ```javascript
> setTimeout(función, milisegundos);
> //          ↑          ↑
> //   qué ejecutar   cuánto esperar antes (1000 ms = 1 segundo)
> ```
> - *"Primer parámetro: la **función** que quiero correr más tarde."*
> - *"Segundo parámetro: **cuántos milisegundos** espera antes de correrla. Ojo: en milisegundos, así que 3 segundos son `3000`."*

> **Code-along — ejemplo mínimo:**
> ```javascript
> setTimeout(() => {
>   console.log("Pasaron 3 segundos");
> }, 3000);
> ```
> *(Correr y esperar: el mensaje aparece recién a los 3 segundos.)*

> **Tu explicación — por qué es la herramienta ideal para hoy (el puente a la demo):**
> - *"Lo importante de `setTimeout` no es solo que espera: es que **NO bloquea**. Programa la función para más tarde y deja que el programa siga ejecutando lo de abajo. Es asíncrono de manual."*
> - *"Por eso es ideal para demostrar la asincronía: yo controlo cuánto 'tarda', y vemos qué hace JavaScript mientras tanto."*
> - *(Mención al pasar, sin profundizar: `setTimeout` devuelve un id que sirve para cancelarlo con `clearTimeout` — herramienta para otro día.)*

---

#### 1.4 Demo determinística — el orden de ejecución

**EN PANTALLA: VS CODE + CONSOLA — escribir el demo en vivo y correrlo. (Apoyo: EXCALIDRAW — línea de tiempo `1 → 2 → 3`.)**

> **Tu apertura:**
> *"Ya sabemos qué hace `setTimeout`. Ahora lo usamos para ver la asincronía en acción: voy a rodear el `setTimeout` con mensajes que cuenten la historia de la pizza —no un '1, 2, 3' pelado— y vemos en qué orden salen."*

> **Code-along / demo en vivo:**
> 1. Escribir en `app.js` (o directo en la consola):
> ```javascript
> console.log("1. Hago el pedido: pido la pizza por la app");
>
> setTimeout(() => {
>   console.log("3. ¡Suena el timbre! La pizza llegó (pasaron 2 segundos)");
> }, 2000);
>
> console.log("2. Mientras espero: pongo la mesa y sigo con lo mío");
> ```
> 2. Correr y leer la consola **en voz alta**, en el orden en que aparece:
> ```text
> 1. Hago el pedido: pido la pizza por la app
> 2. Mientras espero: pongo la mesa y sigo con lo mío
> 3. ¡Suena el timbre! La pizza llegó (pasaron 2 segundos)
> ```

> **Tu explicación teórica precisa (el punto que más cuesta):**
> *"Miren bien: el mensaje **3** está escrito ANTES que el **2** en el código… pero en la consola sale ÚLTIMO. ¿Por qué?"*
> - *"Porque `setTimeout` es asíncrono: JavaScript no se queda esperando los 2 segundos. Lanza el temporizador, sigue de largo, ejecuta el `2`, y recién cuando el tiempo se cumple ejecuta el `3`."*
> - *"El `3` es el timbre de la pizza: corre cuando el pedido está listo, no cuando lo escribimos."*
> - *"Conclusión que se llevan de M1: **el código no siempre se ejecuta en el orden en que se lee.** Lo que tarda se aparta y se resuelve después."*

> **Pregunta de activación:**
> *"Si en vez de 2 segundos pongo 0 milisegundos —`setTimeout(..., 0)`—, ¿el mensaje 3 saldría antes o después del 2?"*
> *(Respuesta: igual sale después. Aunque el tiempo sea 0, la tarea asíncrona se aparta y se ejecuta cuando el trabajador terminó lo que tenía en mano. Sirve para romper la idea de que "es solo cuestión de que tarde poco".)*

> **Cierre del Momento + puente al siguiente:**
> *"Ya entendimos la asincronía: pedimos algo que tarda y no nos congelamos. Pero fíjense en algo —cuando una operación asíncrona arranca, todavía NO tenemos el resultado; tenemos la garantía de que llegará. Ese 'pedido en camino' es un objeto con nombre propio, con estados y reglas: se llama **Promesa**. En el próximo momento la abrimos por dentro, antes de pedir datos reales de internet."*

---

## MOMENTO 2 — Promesas: el ticket por un dato futuro

**Tiempo:** ~30 min
**Parte del lab:** — (momento teórico + demos en consola; el lab no crea promesas, solo las consume en M3+)

> **OBJETIVO:** El alumno entiende qué es una **Promesa** (objeto que representa un resultado futuro), sus **tres estados** (pendiente / cumplida / rechazada), cómo se **crea** con `new Promise(resolve, reject)` y cómo se **consume** con `.then` / `.catch` / `.finally`. Ve el ciclo de vida completo en una demo de consola —el ejemplo de **pedir comida**, que continúa el hilo de la pizza de M1— para que cuando consuma las promesas de `fetch` en M3 sepa exactamente qué está pasando.

> **Patrón pedagógico de M2:** es el **debate técnico** del día — teoría + una demo en consola que se construye y se corre, sin tocar el proyecto. Se usa **un solo ejemplo de punta a punta** (`pedirComida`): se crea en 2.2, se consume en 2.3. Se enseña la **creación** (`new Promise`) aunque el lab no la use, porque ver una promesa que uno mismo resuelve/rechaza hace transparente qué reciben `.then`/`.catch` después. Se cierra anclando que **`fetch` ya te devuelve una promesa hecha**: no la creás, la consumís.

#### 2.1 Qué es una Promesa + sus estados

**EN PANTALLA: VS CODE — el editor a la vista. (Apoyo: EXCALIDRAW — los tres estados de la Promesa.)**

> **Tu apertura (engancha con M1):**
> *"En M1 quedó algo abierto: cuando una operación asíncrona arranca, todavía no tenemos el resultado, tenemos la garantía de que llegará. Ese 'pedido en camino' es un objeto real de JavaScript, con nombre: la **Promesa**."*

> **Tu explicación teórica precisa:**
> *"Una **Promesa** es un objeto que representa el **resultado futuro** de una operación asíncrona: un 'vale' por un valor que **todavía no está, pero va a llegar** (o va a fallar). No te entrega el dato al instante; te entrega el compromiso de ese dato."*

> **Tu explicación — los tres estados:**
> *"Una promesa pasa por tres estados, y solo se define una vez:"*
> - **`pending` (pendiente):** *recién pedida, todavía sin resolverse.*
> - **`fulfilled` (cumplida):** *salió bien — se llamó a `resolve` con el valor.*
> - **`rejected` (rechazada):** *salió mal — se llamó a `reject` con el error.*
> - *"Una vez que pasa a cumplida o rechazada, queda fija: una promesa se resuelve **una sola vez**."*

> **Analogía (continúa el hilo de la pizza):**
> *"Es el pedido de la pizza de M1: cuando lo hacés por la app, te dan un comprobante con tu número de pedido. Ese comprobante NO es la pizza —es la promesa de que va a llegar—. Mientras la pizzería la prepara y la manda, el pedido está `pending`. Si llega a tu puerta, `fulfilled`. Si la pizzería te avisa que no puede entregarla, `rejected`. El comprobante representa algo que todavía no tenés, pero tendrás."*

---

#### 2.2 Creación de una Promesa — `new Promise(resolve, reject)`

**EN PANTALLA: VS CODE — construir `pedirComida` paso a paso.**

> **Tu apertura:**
> *"Para entender la promesa por dentro, vamos a CREAR una nosotros, con un ejemplo que ya nos resulta familiar: pedir comida a un restaurante. En el lab no van a crear promesas a mano —`fetch` las crea por ustedes—, pero crear una hoy hace que todo lo demás se vuelva obvio."*

> **Tu explicación teórica precisa:**
> *"Una promesa se crea con el constructor `new Promise(...)`, que recibe **una función** con dos parámetros que JavaScript te da hechos:"*
> - **`resolve(valor)`** → *se llama cuando la operación sale bien; el `valor` que le pases viaja al `.then`.*
> - **`reject(error)`** → *se llama cuando algo falla; el `error` viaja al `.catch`.*
> - *"Vos no definís esas dos funciones: las usás. Dentro va el código asíncrono (lo que tarda), y al final decidís si llamás a `resolve` o a `reject`."*

> **Code-along — construir `pedirComida` (en un archivo de prueba, no en el proyecto):**
> ```javascript
> function pedirComida(plato) {
>   return new Promise((resolve, reject) => {
>     console.log(`Pedido recibido: ${plato}. La cocina empieza…`);
>
>     // setTimeout (de M1) simula la demora de la cocina
>     setTimeout(() => {
>       const hayIngredientes = Math.random() > 0.3;   // ~70% de las veces sale bien
>
>       if (hayIngredientes) {
>         resolve(`Tu plato "${plato}" está listo! 🍲`);   // ÉXITO → va al .then
>       } else {
>         reject(`Lo sentimos, no hay ingredientes para "${plato}".`);   // FALLO → va al .catch
>       }
>     }, 2000);
>   });
> }
> ```

> **Tu explicación — qué hace cada pieza:**
> - *"El `setTimeout` de 2 segundos es la cocina trabajando: reusa lo de M1 para simular algo que tarda."*
> - *"El `Math.random()` simula la realidad: a veces el pedido sale, a veces no hay ingredientes. Así vemos los dos caminos."*
> - *"Si todo va bien, `resolve` con el plato listo. Si no, `reject` con el motivo. Ahí termina la promesa."*

> **Demo del estado pendiente:**
> ```javascript
> console.log(pedirComida("Pasta Alfredo"));
> // → Promise { <pending> }   ← el comprobante: todavía no hay plato, solo la promesa
> ```
> - *"Fíjense: imprime `Promise { <pending> }`, no el plato. Creamos la promesa, pero el resultado todavía no está. Para usarlo, hay que **consumirla** — y eso es lo que sigue."*

---

#### 2.3 Consumo — `.then` / `.catch` / `.finally`

**EN PANTALLA: VS CODE + CONSOLA — consumir `pedirComida` y correrlo varias veces.**

> **Tu apertura:**
> *"Ya tenemos la promesa creada. Consumirla es responder tres preguntas: ¿qué hago cuando sale bien?, ¿qué hago si falla?, y ¿qué hago siempre, pase lo que pase?"*

> **Tu explicación teórica precisa:**
> - **`.then(callback)`** → *corre cuando la promesa se **cumple** (`resolve`); recibe el valor del `resolve`.*
> - **`.catch(callback)`** → *corre cuando se **rechaza** (`reject`); recibe el error del `reject`.*
> - **`.finally(callback)`** → *corre **siempre**, se haya cumplido o rechazado. Ideal para lo que va sí o sí (cerrar un "Cargando…", por ejemplo).*

> **Code-along — consumir `pedirComida`:**
> ```javascript
> pedirComida("Pasta Alfredo")
>   .then(respuesta => console.log(respuesta))    // si resolve → muestra el plato listo
>   .catch(error => console.error(error))         // si reject  → muestra el motivo del fallo
>   .finally(() => console.log("Pedido finalizado. ¡Gracias por su visita!"));   // siempre
> ```

> **Demo — correrlo 3 o 4 veces:**
> - *"Como hay un `Math.random`, a veces verán el plato listo (entró por `.then`) y a veces el mensaje de sin ingredientes (entró por `.catch`). Pero el mensaje de 'Pedido finalizado' del `.finally` aparece **todas** las veces."*

> **Pregunta de activación:**
> *"Si el pedido falla y entra por el `.catch`, ¿el `.finally` igual se ejecuta?"*
> *(Respuesta: sí, siempre. `.finally` no distingue éxito de fallo — corre en ambos casos. Es lo que lo diferencia de `.then`/`.catch`.)*

---

#### 2.4 Cierre conceptual — certeza vs promesa, y `fetch` te la da hecha

**EN PANTALLA: VS CODE — dos líneas comparadas.**

> **Tu explicación teórica precisa:**
> *"Hay que tener claro cuándo un valor es una **certeza** y cuándo es una **promesa**:"*
> ```javascript
> const numero = 5;            // CERTEZA: el valor ya está, lo uso directo
> const pedido = pedirComida("Pasta");   // PROMESA: el valor llegará, hay que esperarlo con .then
> ```
> - *"La certeza la tenés ahora. La promesa hay que consumirla con `.then`/`.catch` para usar su resultado."*

> **Tu cierre del concepto:**
> *"Y esto es lo importante para el lab: **no van a escribir `new Promise` a mano.** Lo hicimos hoy para ver la promesa por dentro. En la práctica, herramientas como `fetch` ya **crean** la promesa por ustedes; el trabajo de ustedes es **consumirla** bien —con `.then`, `.catch`, `.finally`— exactamente como hicimos con `pedirComida`."*

> **Cierre del Momento + puente al siguiente (antes del receso):**
> *"Ya sabemos qué es una promesa y cómo consumirla. Después del receso dejamos los ejemplos de consola y vamos a lo real: ¿de dónde sacamos datos que vengan como promesa? De una **API**. Le vamos a pedir a la PokeAPI un Pokémon de verdad con `fetch` —que, como `pedirComida`, devuelve una promesa lista para consumir."*

---

## RECESO — 10 min

---

## MOMENTO 3 — API + fetch + Response + JSON: pedir datos de verdad

**Tiempo:** ~45 min
**Parte del lab:** Setup + HU1 (Checkpoint 1 ~15 min) + HU2 (Checkpoint 2 ~40 min)

> **OBJETIVO:** El alumno entiende qué es una **API** (servidor que entrega datos, modelo **cliente-servidor**) con PokeAPI como caso, usa **`fetch(url)`** para hacer la **petición HTTP** (devuelve una **Promesa de un objeto `Response`**), entiende por qué hacen falta **dos `.then`** (uno para `response.json()`, otro para los datos) y qué es **JSON** (y por qué su forma **no** es la de C09). Lo aplica: confirma el orden asíncrono con `fetch` (HU1) y trae un Pokémon real con "Cargando…" + `.catch` (HU2).

> **Patrón pedagógico de M3:** acá entra la **API** (recién ahora, no antes) y arranca el lab. Orden: concepto **API** (cliente-servidor) → concepto **JSON** (el formato en que responde) → **`fetch`** (cómo se pide) → **`Response` + dos `.then`** (cómo se extrae) → **demostración** (JSON real de PokeAPI en el navegador) → **lab** (HU1 confirma el `1→2→3` ahora con `fetch`; HU2 trae el dato). `fetch` ya **consume** una Promesa de las que se entendieron en M2 — no es un objeto nuevo, es la Promesa en acción. El objeto `Response` y `res.ok`/`status` se presentan como **teoría/buena práctica** (apuntes); el lab mantiene el `.catch` simple — el manejo robusto de errores (validar `res.ok`, 404/500) se profundiza en **C12**.

#### 3.1 ¿Qué es una API? (modelo cliente-servidor)

**EN PANTALLA: EXCALIDRAW — cliente → petición (URL) → servidor → respuesta (datos). (Apoyo: NAVEGADOR para abrir PokeAPI en 3.4.)**

> **Tu apertura (post-receso):**
> *"Hasta ahora la promesa la creamos nosotros con `pedirComida`. Pero los datos de verdad de una app no salen de nuestro código: salen de un servidor, por internet. A ese servidor que nos entrega datos se le llama **API**."*

> **Tu explicación teórica precisa:**
> *"Una **API** es un servidor que expone datos para que otros **programas** se los pidan. No es una página para mirar con los ojos: es una 'ventanilla' pensada para que el **código** le haga **pedidos** y reciba **datos**."*
> - *"El modelo se llama **cliente-servidor**: tu app es el **cliente**, hace una **petición** a una **URL** (que se llama **endpoint**), y el **servidor** (la API) responde con los datos."*
> - *"Hoy usamos la **PokeAPI**: una API gratuita, de solo lectura, sin registro ni clave. Le pedís un Pokémon por su URL y te devuelve sus datos."*

> **Analogía:**
> *"Una API es como el **mozo** de un restaurante. No entrás a la cocina a agarrar el plato: le pedís desde la carta —que es la lista de cosas que podés pedir—, el mozo lo lleva a la cocina, y te trae lo que pediste. La URL es tu pedido; la API es el mozo que te conecta con la cocina sin que tengas que saber cómo cocinan."*

> **Reconexión con M1 (por qué esto es asíncrono):**
> *"Y acá se cierra el círculo de hoy: ese servidor está **lejos, en internet**. Por eso la respuesta **tarda** —y por eso pedir datos a una API es una operación **asíncrona**, que se maneja con promesas, justo lo que vimos antes del receso."*

> **Pregunta de activación:**
> *"Cuando abren Spotify y aparece su música, o Mercado Libre y aparecen los productos, ¿de dónde creen que salen esos datos: están escritos dentro de la app, o los pide a un servidor?"*
> *(Respuesta: los pide a una API. Sirve para que vean que esto es cómo funcionan TODAS las apps que usan, no un caso de juguete.)*

---

#### 3.2 JSON — el formato en que viajan los datos

**EN PANTALLA: VS CODE — un ejemplo genérico de JSON.**

> **Tu apertura:**
> *"Antes de ir a buscar los datos, una pregunta: ¿en qué formato nos los entrega la API? Porque no nos manda un objeto JavaScript listo para usar — nos manda **texto**, en un formato estándar que se llama **JSON**."*

> **Tu explicación teórica precisa:**
> *"**JSON** (JavaScript Object Notation) es un formato de **texto** para representar datos. Es la forma universal en que los datos viajan por internet entre cualquier cliente y cualquier servidor, sin importar en qué lenguaje esté programado cada uno."*
> - *"Se PARECE a un objeto JavaScript —llaves, claves, valores— pero es **texto**, y tiene dos reglas propias: las claves van **siempre con comillas dobles**, y suele venir **anidado** (objetos y arrays dentro de otros)."*
> ```json
> {
>   "nombre": "texto entre comillas dobles",
>   "edad": 25,
>   "activo": true,
>   "direccion": { "ciudad": "Lima" },
>   "hobbies": ["leer", "correr"]
> }
> ```
> - *"Un valor puede ser texto, número, booleano, otro objeto (`direccion`) o un array (`hobbies`). Eso de objetos dentro de objetos es lo que llamamos **anidado** — guárdenlo, porque en un momento va a importar."*

> **Analogía:**
> *"JSON es como la **etiqueta estandarizada de una encomienda**: cualquier servicio de correo del mundo la sabe leer, sin importar el idioma de quien la mandó. Por eso lenguajes distintos —Python, Java, JavaScript— se entienden entre sí: JSON es el idioma común para intercambiar datos."*

---

#### 3.3 `fetch(url)` — la herramienta para pedir datos

**EN PANTALLA: VS CODE — escribir un `fetch` simple.**

> **Tu explicación teórica precisa:**
> *"Para hacer esa petición, JavaScript tiene `fetch`. **`fetch(url)`** hace la petición a la URL y **devuelve una Promesa** — exactamente como `pedirComida`, pero esta promesa la crea `fetch` por nosotros."*
> ```javascript
> fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
> // devuelve una Promesa (la respuesta llegará después)
> ```
> - *"Con solo pasarle la URL, `fetch` asume que querés **leer** datos (el método HTTP por defecto es **GET**)."*

> **Tu explicación — contexto (mención, no se practica hoy):**
> *"`fetch` puede hacer más que leer: con un segundo argumento `{ method, headers, body }` se usa para **crear** (POST), **modificar** (PUT/PATCH) o **borrar** (DELETE) datos en el servidor. Hoy solo leemos —GET—, pero quería que sepan que existe todo ese mundo."*

---

#### 3.4 El objeto `Response` + por qué hacen falta DOS `.then`

**EN PANTALLA: VS CODE — el patrón de los dos `.then`.**

> **Tu explicación teórica precisa (el punto técnico clave de M3):**
> *"Acá hay algo que sorprende: `fetch` NO te devuelve los datos directamente. Su promesa se resuelve en un objeto **`Response`** —la respuesta HTTP— que trae información (`status`, `ok`, `headers`) pero con el contenido **todavía sin leer**."*
> - *"Para sacar los datos de adentro, se usa **`response.json()`**, que lee el contenido y lo convierte de texto JSON a objeto JavaScript. Y como leer también puede tardar, `response.json()` **devuelve otra promesa**."*
> - *"Por eso el patrón tiene **dos `.then`**: el primero recibe la `response` y la convierte; el segundo recibe ya los datos listos."*
> ```javascript
> fetch(url)
>   .then(response => response.json())   // 1º: respuesta HTTP → la convierto a objeto JS
>   .then(data => console.log(data))     // 2º: ya tengo los datos reales
>   .catch(error => console.error(error));
> ```

> **Tu explicación — buena práctica (teoría):**
> *"Un detalle importante para el mundo real: `fetch` **no falla** automáticamente si el servidor responde 404 o 500 — la promesa se cumple igual. Por eso en producción se valida `if (!response.ok) throw ...` para detectar esos casos."*
> - *"Hoy, en el lab, usamos un `.catch` simple para no recargar. El manejo serio de errores —`res.ok`, códigos HTTP, reintentos— lo trabajamos a fondo en C12."*

> **Tu recordatorio (engancha con 3.2):**
> *"Y recuerden lo de JSON: `response.json()` toma ese **texto JSON anidado** que vimos y lo convierte en un objeto JavaScript de verdad. Ya con el objeto en mano, vamos a ver que su forma NO es la limpia de C09 — eso lo miramos ahora en vivo."*

---

#### 3.5 Demostración — el JSON real de PokeAPI

**EN PANTALLA: NAVEGADOR — abrir la URL y leer el JSON crudo. (Apoyo: EXCALIDRAW — JSON anidado vs forma limpia de C09.)**

> **Demostración en vivo:**
> 1. Abrir en el navegador: `https://pokeapi.co/api/v2/pokemon/pikachu`
> 2. Leer el JSON real y señalar las **tres diferencias** con la forma limpia de C09:

> **Tu explicación teórica precisa (sobre el JSON en pantalla):**
> - *"El nombre está en **`name`**, no en `nombre` — la API está en inglés."*
> - *"La imagen no está suelta: está escondida adentro de **`sprites.front_default`**."*
> - *"Y los tipos están doblemente anidados: **`types`** es un array de objetos, y el nombre del tipo está en `types[].type.name`."*
>
> ```text
>  API (anidado)                          C09 (forma limpia)
>  name: "pikachu"                        nombre: "pikachu"
>  sprites.front_default: "...25.png"     imagen: "...25.png"
>  types[].type.name: "electric"          tipos: ["electric"]
> ```
> - *"Nuestra `crearTarjeta` de C09 espera la columna de la derecha. La API nos da la de la izquierda. Esa distancia la vamos a salvar en el próximo momento — por ahora, retengan que **la API dicta su forma y nosotros nos adaptamos**."*

---

#### 3.6 Lab HU1 + HU2 — del experimento al primer dato real

**EN PANTALLA: VS CODE + NAVEGADOR (Live Server) — code-along sobre el proyecto.**

> **Setup:**
> 1. Sobre el repo `pokedex` de C09, crear la rama **`lab10-api`**.
> 2. Conservar `index.html` (la rejilla `#resultado` y el `#buscador`) y las funciones `crearTarjeta()` y `render()` de C09 **sin tocar**.
> 3. Dejar el array `pokemonLocal` **comentado** como referencia — desde hoy los datos vienen de la API.

> **Code-along — HU1 (el experimento, ahora con `fetch`):**
> *"Es el mismo `1 → 2 → 3` que vimos con `setTimeout` en M1, pero ahora con un `fetch` real. La diferencia: ya entendemos que `fetch` devuelve una promesa y que el `.then` reacciona cuando llega."*
> ```javascript
> console.log("1. Pido los datos a la PokeAPI…");
>
> fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
>   .then(function (response) {
>     console.log("3. ¡Los datos llegaron! (esto corre al final)");
>   });
>
> console.log("2. Sigo trabajando sin esperar a que lleguen");
> ```
> - *"Consola: `1 → 2 → 3`. El `3` corre al final porque la red tarda y JavaScript no se queda esperando — igualito a la pizza."*
> - **Checkpoint 1 (~15 min):** *la consola muestra `1 → 2 → 3`; el alumno explica por qué el `3` sale último.*

> **Code-along — HU2 (traer un Pokémon de verdad):**
> *"Ahora leemos los datos en serio: estado 'Cargando…' mientras llegan, los dos `.then` para convertir y usar, y un `.catch` por si falla."*
> ```javascript
> // `contenedor` (#resultado) ya existe desde C09 — solo lo usamos
> contenedor.innerHTML = `<p class="col-span-full text-center text-slate-500">Cargando…</p>`;
>
> fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
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
> - *"Para comprobar que es asíncrono: pongan un `console.log("sigo trabajando")` justo debajo del `fetch` — se imprime ANTES que los datos."*
> - **Checkpoint 2 (~45 min):** *se ve "Cargando…" y, un momento después, el objeto real de pikachu en consola (con `name`, `sprites`, `types`). Los datos vienen de la web y tardan.*

> **Cierre del Momento + puente al siguiente:**
> *"Ya traemos un Pokémon real de internet. Pero miren la consola: ese objeto tiene `name`, `sprites`, `types` anidados — NO es la forma limpia que `crearTarjeta` sabe pintar. Si se lo paso tal cual, la tarjeta no se arma. Necesitamos un **traductor** entre la forma de la API y la nuestra: la función adaptadora. Eso es lo primero del próximo momento."*

---

## MOMENTO 4 — Adaptar y mostrar + varios en paralelo

**Tiempo:** ~30 min
**Parte del lab:** HU3 (Checkpoint 3 ~70 min) + HU4 (Checkpoint 4 ~95 min) — **cierra el lab**

> **OBJETIVO:** El alumno escribe una **función adaptadora** que traduce la estructura anidada de la API a la forma limpia de C09 (reusando `?.`/`??`/`.map`), de modo que `render`/`crearTarjeta` se reusen **sin cambios**; y usa **`Promise.all`** para traer **varios Pokémon en paralelo** (por nombre) y llenar la rejilla, reconectando el buscador de C09 (solo cambia la fuente de datos). Con HU4 **se cierra el lab**: la Pokédex ya vive de la web.

> **Patrón pedagógico de M4:** dos ciclos concepto→lab seguidos. Adapter primero (resuelve el dolor de M3: la forma no calza) → HU3. Luego `Promise.all` (resuelve: ¿y si quiero 6, no 1?) → HU4. El **buscador no se reescribe**: se edita **una sola referencia** (`pokemonLocal` → `pokedex`), reforzando "los datos mandan, el render no cambia".

#### 4.1 Función adaptadora (concepto)

**EN PANTALLA: VS CODE — la consola de HU2 (objeto anidado) al lado del objeto limpio de C09. (Apoyo: EXCALIDRAW — API anidada → adapter → objeto limpio → tarjeta.)**

> **Tu apertura (engancha con el cierre de M3):**
> *"Quedamos en que los datos llegan, pero con la forma de la API: `name`, `sprites.front_default`, `types[].type.name`. Nuestra `crearTarjeta` de C09 espera otra cosa: `{ nombre, imagen, tipos }`. Tenemos dos caminos: reescribir `crearTarjeta` para que entienda la forma de la API… o poner un traductor en el medio. Vamos por el traductor, y ya van a ver por qué."*

> **Tu explicación teórica precisa:**
> *"Una **función adaptadora** recibe el dato como viene de la API y **devuelve** un objeto nuevo con la forma limpia que la app ya sabe usar. Concentra la traducción en un solo lugar: el resto del código —`render`, `crearTarjeta`— ni se entera de cómo viene la API."*
> - *"Esto tiene nombre en la industria: el **patrón Adapter**. Es lo que hace un dev real cada vez que conecta su app con una API que no controla."*

> **Tu explicación — qué reusa de C09:**
> - *"`?.` y `??`: si a un Pokémon le falta la imagen, en vez de romperse pone una imagen de respaldo."*
> - *"`.map`: para aplanar los tipos, que vienen doblemente anidados, a un array simple de textos."*

> **Analogía:**
> *"Es el **adaptador de enchufe** que llevás de viaje: el tomacorriente del hotel (la API) tiene una forma, tu cargador (tu app) tiene otra. No comprás un cargador nuevo en cada país —ponés un adaptador en el medio y listo. El adapter traduce la forma de la API a la tuya, sin que tengas que reescribir tu app."*

---

#### 4.2 Lab HU3 — adaptar y mostrar la tarjeta

**EN PANTALLA: VS CODE + NAVEGADOR (Live Server) — code-along.**

> **Code-along — escribir el adaptador:**
> ```javascript
> function adaptarPokemon(data) {
>   return {
>     nombre: data.name,
>     imagen: data.sprites?.front_default ?? "https://via.placeholder.com/96?text=?",
>     tipos:  data.types.map(t => t.type.name)   // [{type:{name:"electric"}}] → ["electric"]
>   };
> }
> ```
> - *"Línea por línea: `data.name` va a `nombre`. La imagen, escondida en `sprites.front_default`, con `??` un respaldo por si falta. Y los tipos: `.map` recorre el array anidado y se queda solo con el nombre de cada tipo."*

> **Code-along — usar el adaptador antes de renderizar:**
> ```javascript
> fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
>   .then(function (response) { return response.json(); })
>   .then(function (data) {
>     render([adaptarPokemon(data)]);   // adapta y reusa el render de C09 (espera una lista)
>   })
>   .catch(function () {
>     contenedor.innerHTML = `<p class="col-span-full text-center text-red-600">No se pudo cargar.</p>`;
>   });
> ```
> - *"Fíjense que `render` espera una **lista**, por eso va entre corchetes: `[adaptarPokemon(data)]`. Y `crearTarjeta` NO la tocamos: recibe la forma limpia y arma la tarjeta como siempre."*

> **Checkpoint 3 (~70 min):** *la tarjeta de un Pokémon real aparece en la rejilla, **idéntica en apariencia** a las de C09 — pero los datos vinieron de la web y pasaron por el adaptador.*

---

#### 4.3 `Promise.all` — traer varios a la vez (concepto clave)

**EN PANTALLA: VS CODE. (Apoyo: EXCALIDRAW — 6 pedidos en paralelo vs 6 en fila, con barra de tiempo.)**

> **Tu apertura (plantear el problema antes de la solución):**
> *"Ya traemos UN Pokémon. Pero una Pokédex tiene muchos: queremos 6 en la rejilla. Y acá aparece un problema nuevo de verdad, así que vamos despacio."*

> **Tu explicación — el problema, paso a paso:**
> - *"Cada Pokémon es **un `fetch`** independiente. Para 6 Pokémon, 6 `fetch`. Hasta ahí bien."*
> - *"Pero recuerden: cada `fetch` es **asíncrono** y devuelve una **promesa** — un pedido que llega 'más tarde'. Entonces, ¿cómo sé yo en qué momento llegaron **los 6** para recién ahí pintar la rejilla completa? Si pinto cuando llegó el primero, me faltan cinco. Necesito esperar a que **todos** terminen."*

> **Tu explicación — la salida lenta (para que valoren la buena):**
> - *"Una opción sería pedirlos **de a uno**: pido el 1, espero a que llegue, pido el 2, espero, pido el 3… Funciona, pero es **lento**: si cada pedido tarda 1 segundo, seis pedidos en fila son ~6 segundos. Y el código se vuelve una pila de `.then` adentro de `.then`."*

> **Tu explicación teórica precisa — `Promise.all`:**
> *"Para esto existe **`Promise.all`**. Le pasás un **array de promesas** y te devuelve **UNA sola promesa**, que se resuelve cuando **TODAS** las de adentro terminaron — y te entrega **un array con todos los resultados juntos**, en el mismo orden en que las pusiste."*
> ```javascript
> Promise.all([promesaA, promesaB, promesaC])
>   .then(function (resultados) {
>     // resultados = [resultadoA, resultadoB, resultadoC]  ← todos juntos, en orden
>   });
> ```
> - *"La clave: **array de promesas entra → array de resultados sale.** Y `.then` corre una sola vez, cuando ya llegaron todas. No tenés que andar contando cuántas terminaron: `Promise.all` lo hace por vos."*

> **Tu explicación — por qué es más rápido (paralelo vs secuencial):**
> - *"`Promise.all` **dispara los 6 `fetch` al mismo tiempo** y los deja viajar en paralelo. Como salen todos juntos, el total tarda lo que tarda **el más lento** —~1 segundo—, no la suma de los seis."*
> - *"De a uno: ~6 segundos. En paralelo con `Promise.all`: ~1 segundo. Misma cantidad de pedidos, muchísimo menos tiempo."*

> **Analogía (continúa el hilo de los pedidos):**
> *"Tenés que servir una mesa con pizzas de 6 pizzerías distintas. Si pedís de a una —esperás que llegue la primera para recién pedir la segunda— comés a medianoche. Lo que hacés en la vida real es **pedir las 6 al mismo tiempo**: se preparan en paralelo y llegan casi juntas. `Promise.all` es 'pedí las 6 a la vez y avisame cuando estén TODAS'."*

> **Tu nota (honesta, sin abrir tema nuevo):**
> *"Un detalle para tener en el radar: si **una** de las promesas falla, `Promise.all` falla entero —es todo o nada—. Hoy no nos preocupamos por eso; el manejo fino de fallos lo vemos en C12."*

> **Pregunta de activación:**
> *"Si tengo que cargar 20 Pokémon y cada `fetch` tarda 1 segundo: ¿cuánto tarda de a uno, y cuánto con `Promise.all`?"*
> *(Respuesta: de a uno ~20 segundos; con `Promise.all` ~1 segundo, porque salen todos en paralelo. Sirve para que el ahorro se sienta a escala.)*

---

#### 4.4 Lab HU4 — rejilla con `Promise.all` + reconectar buscador

**EN PANTALLA: VS CODE + NAVEGADOR (Live Server) — code-along.**

> **Code-along — armar el array de promesas y esperarlas todas:**
> ```javascript
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
> - *"Miren cómo se encadena todo lo del día: `.map` arma las 6 promesas, `Promise.all` las espera juntas, `.map` adapta los 6 crudos a la forma limpia, y `render` (intacto desde C09) los pinta."*

> **Code-along — reconectar el buscador de C09 (no escribir uno nuevo):**
> ```javascript
> buscador.addEventListener("input", function () {
>   const texto = buscador.value.toLowerCase();
>   const filtrados = pokedex.filter(p => p.nombre.includes(texto));   // antes: pokemonLocal
>   render(filtrados);
> });
> ```
> - *"El buscador de C09 sigue vivo: lo ÚNICO que cambia es la fuente —antes filtraba `pokemonLocal`, ahora `pokedex`—. No agreguen un listener nuevo ni vuelvan a declarar `buscador` o `pokedex`."*

> **Checkpoint 4 (~95 min) — cierra el lab:** *la rejilla muestra los 6 Pokémon reales de la API; al escribir en el buscador, filtra esa rejilla. **La Pokédex ya vive de la web.***

> **Cierre del Momento + puente al siguiente:**
> *"Logramos que la Pokédex cargue 6 Pokémon de internet y que el buscador siga funcionando. Pero miren cómo nos quedó el código: `fetch`, después `.then`, adentro otro `.then`… la cadena de promesas empieza a hacerse larga y a anidarse. Funciona, pero no se lee tan cómodo. ¿Se podrá escribir esto de forma que se lea de arriba abajo, como código normal? De eso —y del cierre del día— hablamos en el último momento."*

---

## MOMENTO 5 — Cierre: lo que se llevan + puente a C11

**Tiempo:** ~15 min
**Parte del lab:** — (cierre; el lab ya cerró con HU4 en M4)

> **OBJETIVO:** El alumno consolida el recorrido del día (asincronía → Promesa → API/`fetch`/JSON → adapter → `Promise.all`), entiende el arco del Módulo 3 y por qué C11 reformula este mismo código con `async/await`. Es el momento para que quienes terminaron antes encaren los **logros opcionales**.

> **Patrón pedagógico de M5:** momento de cierre, **sin código nuevo**. Se recapitula con una tabla, se nombra el **dolor que abre C11** (la cadena de `.then` funciona pero se hace larga/anidada) y se deja una ventana para los logros. El lab ya quedó cerrado en M4 (HU4 = última HU).

#### 5.1 Recapitulación — lo que se construyó hoy
- **Qué quedó resuelto:** la Pokédex carga sus datos de internet, maneja la espera sin congelarse, adapta la forma de la API a la propia y reusa `render`/`crearTarjeta`/buscador de C09 **sin tocarlos**.
- **Tabla resumen del día:** asincronía · Promesa (estados/`new Promise`/consumo) · API + JSON · `fetch`/`Response`/dos `.then` · función adaptadora · `Promise.all`.

#### 5.2 Logros opcionales (ventana para quienes terminaron)
- **Logro 1 — Spinner animado:** reemplazar el texto "Cargando…" por un spinner con `animate-spin` de Tailwind.
- **Logro 2 — Un Pokémon que no existe:** probar con un nombre inválido y evitar que rompa la rejilla (adelanto del manejo de errores de C12).

#### 5.3 Puente a C11
- **Nombrar el dolor:** *consumimos las promesas con `.then` encadenados — funciona, pero la cadena se hace larga y se anida.*
- **Puente:** *"¿Se puede escribir código asíncrono que se lea de arriba abajo, como código normal? → **`async/await`**, que en C11 reformula exactamente este mismo código de hoy."*
- **Arco del módulo:** C09 (render local) → **C10 (fetch/promesas)** → C11 (`async/await`) → C12 (errores + README, lab calificado).

---

## Notas de coordinación

- **Excalidraw:** los bloques **EN PANTALLA: EXCALIDRAW** se definirán en la `GUIA EXCALIDRAW - CLASE 10.md` al cerrar la Capa 2+3 (paneles candidatos: cliente→servidor, línea de tiempo `1→2→3`, estados de la Promesa, dos `.then`, JSON anidado vs forma limpia, adapter, `Promise.all` paralelo vs secuencial). Igual que C08/C09, el `.excalidraw` será **nativo** (flujos/anatomías), sin imágenes.
- **Apuntes incorporados:** `setTimeout` (M1.3), estados + creación + consumo de Promesas con `.finally` (M2), API + JSON (M3.1-3.2), objeto `Response` + `res.ok`/`status` + verbos HTTP (M3.3-3.4) — presentados como teoría; el lab aplica el subconjunto GET/consumo. El chequeo de `res.ok` y los códigos HTTP se profundizan en **C12**.
- **Pendiente C09 (módulo como bloque):** la tabla de arco del módulo en la Capa 0/guion de C09 marca C10 como "API simulada" y C11 como "datos reales" — desactualizado. La realidad (ya reflejada acá) es C10 = API real + promesas, C11 = `async/await`. Conviene alinear C09 cuando se cierre la pasada del módulo.
