# CAPA 0 — CLASE 10: Datos desde la web — fetch, Promesas y JSON

> **Fuentes:** **_code201/class-10/README.md_** · **_code201/class-10/lab/README.md_** *(inputs canónicos: README + lab; **sin carpeta `slides/` esta vez**)*
> **Módulo:** M3 — Clase 2 de 4 ("JavaScript Moderno y Consumo de APIs")
> **Proyecto víctima:** **Pokédex** (repo `pokedex`, rama `lab10-api`) — la MISMA app de C09. Hoy deja de usar el array local `pokemonLocal` y empieza a traer sus datos de una **API real** (PokeAPI).
> **Continuidad con C09:** el alumno llega con el **patrón de render** ya hecho (**_render()_** + **_crearTarjeta()_**), el buscador con **_.filter_**, y los operadores **_?._**/**_??_** y **_.map_**. Hoy **NO se reescribe nada de eso**: `render`/`crearTarjeta` se reusan SIN cambios. Lo único nuevo es **de dónde** vienen los datos y **cómo** se los maneja mientras tardan.
> **Hoy SÍ se toca internet:** la clase requiere conexión. PokeAPI es gratuita, sin registro ni clave.
> **Esta clase NO es lab calificado** (el calificado del M3 es C12) y **no pide README** todavía (se agrega en C12).
> **Sin archivo de apoyo:** las demos (el JSON real en el navegador, el experimento `1→2→3`, un `fetch` en vivo) se tipean en VS Code + se abren URLs en el navegador, con el código en el guion.

---

## Idea fuerza de la clase

**Los datos ya no viven en tu código: viven en internet, y tardan en llegar.** Pedirlos no es como leer una variable —es como hacer un pedido por delivery: lo pedís, **no te quedás congelado esperando en la puerta**, seguís con tu vida, y **reaccionás cuando llega**. Esa es la **asincronía**, y es lo más conceptual y nuevo del día. Alrededor de esa idea se ordenan las herramientas: una **API** que entrega los datos, el formato **JSON** en que viajan, las **Promesas** (`fetch` + `.then`/`.catch`) para manejar la espera, y una **función adaptadora** que traduce la forma de la API a la forma limpia que la app ya sabe pintar.

> **Aviso de enfoque para el instructor:** esta clase tiene **dos capas que NO hay que mezclar**: la **conceptual** (qué es una API, qué es la asincronía, por qué los datos "tardan") y la **técnica** (`fetch`, `.then`, `json()`, `Promise.all`). El alumno puede teclear `fetch` sin entender por qué el `console.log` de abajo se imprime ANTES. La Capa 0 separa ambas a propósito: **primero el modelo mental, después la sintaxis.**

---

## BLOQUE 0 — CONCEPTUAL: ¿Qué es una API y qué es la asincronía?

*(El corazón conceptual del día. NO es sintaxis — es el modelo mental que tiene que quedar claro ANTES de tocar `fetch`. Si esto no se entiende, el código de hoy es magia que se copia. Dos ideas: de dónde vienen los datos (API / cliente-servidor) y por qué tardan (asincronía).)*

---

### CONCEPTO: API (y el modelo cliente–servidor)

Una **API** (Application Programming Interface) es un **servidor** que expone datos o servicios para que **otros programas** se los pidan. No es una página para mirar: es una "ventanilla" pensada para que el **código** —no una persona— le haga **pedidos** y reciba **respuestas** de datos. El modelo es **cliente–servidor**: tu app (el **cliente**) hace una **petición** a una **URL** (el **endpoint**), y el servidor responde con datos.

**Sintaxis general (la idea, todavía sin código):**
```text
CLIENTE (tu app)  ──petición a una URL──▶  SERVIDOR (la API)
CLIENTE (tu app)  ◀──respuesta (datos)──   SERVIDOR (la API)
```

**Caso del lab (PokeAPI):**
```text
GET  https://pokeapi.co/api/v2/pokemon/pikachu
        └ endpoint: "dame los datos del pokémon pikachu"
respuesta: los datos de pikachu en formato JSON
```

**Dependencia técnica:** una **URL de API** (endpoint) identifica QUÉ datos pedís (`/pokemon/pikachu` = "el pokémon pikachu"). El servidor vive en **otra máquina, en internet** — por eso la respuesta no es instantánea (de ahí la asincronía del siguiente concepto). PokeAPI es **pública y de solo lectura**: se piden datos, no se modifican. Una API NO es tu base de datos local ni una variable: es un servicio externo del que dependés.

### ANALOGÍA: El mozo de un restaurante

Una API es como el **mozo** de un restaurante. Vos (el cliente) no entrás a la cocina a agarrar la comida: le **pedís** al mozo desde una **carta** con opciones definidas ("quiero el plato 12"). El mozo lleva el pedido a la cocina (el servidor) y te **trae** lo que pediste. La carta es la lista de pedidos que la API entiende; el mozo es la interfaz que te conecta con la cocina sin que tengas que saber cómo cocinan. Vos pedís por la URL; la API te trae el plato (los datos).

### ETIMOLOGÍA / HISTORIA

**API** = *Application Programming Interface* — "interfaz de programación de aplicaciones". **Interfaz** = el punto de contacto entre dos partes (acá, entre tu programa y el de otro). Las APIs web explotaron con la **Web 2.0** (mediados de los 2000): empresas como Google, Twitter y Amazon empezaron a exponer sus datos para que otros construyeran sobre ellos. Hoy casi toda app moderna es, por dentro, un cliente que consume varias APIs (mapas, pagos, clima, login).

### ESTRATEGIA VISUAL: Cliente → URL → Servidor → datos

Diagrama de dos cajas: **CLIENTE (tu Pokédex)** a la izquierda, **SERVIDOR (PokeAPI)** a la derecha. Una flecha de ida rotulada **petición** (`GET /pokemon/pikachu`) y una de vuelta rotulada **respuesta (JSON)**. Resaltar que el servidor está "lejos / en internet" (un ícono de nube en el medio) para sembrar el "tarda" de la asincronía.

---

### CONCEPTO: Asincronía (operación no bloqueante)

Una operación **asincrónica** es una que **tarda** (pedir datos por red, leer un archivo) y que **no congela** el programa mientras espera: JavaScript **lanza** el pedido, **sigue ejecutando** las líneas siguientes, y **reacciona después**, cuando el resultado llega. Lo opuesto es **síncrono/bloqueante**: cada línea espera a que termine la anterior.

**Sintaxis general (el experimento que lo prueba):**
```javascript
console.log("1");          // sale primero
operacionQueTarda(() => {
  console.log("3");        // sale AL FINAL, cuando termina lo que tardaba
});
console.log("2");          // sale segundo, SIN esperar a la de arriba
```

**Caso del lab (HU1):**
```javascript
console.log("1. pido los datos…");
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(() => console.log("3. ¡los datos llegaron! (al final)"));
console.log("2. sigo trabajando sin esperar");
// consola: 1 → 2 → 3   (NO 1 → 3 → 2)
```

**Dependencia técnica:** el orden **`1 → 2 → 3`** es la demostración central de la clase. El `2` sale antes que el `3` **aunque su línea esté después**: JavaScript no se detiene en el `fetch` —lo deja "en marcha" y continúa—; el `3` corre recién cuando los datos llegan. Esto es contraintuitivo (el código se lee de arriba abajo, pero no se ejecuta así en lo asíncrono) y es **el punto que más cuesta** — hay que demostrarlo en vivo, no solo afirmarlo.

### ANALOGÍA: El pedido por delivery

Asincronía es pedir comida por delivery. Hacés el pedido por la app (lanzás la operación que tarda) y **no te quedás parado en la puerta esperando** —seguís lavando los platos, viendo la tele, lo que sea (las líneas siguientes del código corren)—. Cuando **suena el timbre** (los datos llegaron), **reaccionás**: bajás y recibís la comida (corre el `.then`). Lo síncrono sería quedarte plantado en la puerta sin hacer nada hasta que llegue: perderías todo ese tiempo. La cocina tarda; vos no te congelás.

### ETIMOLOGÍA / HISTORIA

**Asíncrono** = prefijo **a-** ("sin") + **síncrono** ("al mismo tiempo", del griego *syn* "junto" + *chronos* "tiempo"). Literalmente "no al mismo tiempo": el resultado no viene en el mismo instante en que lo pedís. JavaScript es **mono-hilo** (hace una cosa a la vez), así que NO puede darse el lujo de "congelarse" esperando la red —si lo hiciera, la página entera se trabaría—; por eso nació con un modelo asíncrono para todo lo que tarda.

### ESTRATEGIA VISUAL: Línea de tiempo 1 → 2 → 3

Una línea de tiempo horizontal con tres marcas: `1 (pido)` al inicio, `2 (sigo)` inmediatamente después, y `3 (llegó)` lejos a la derecha tras un tramo rotulado "la red tarda…". Una flecha curva muestra que el `.then` (el `3`) "salta" hasta el final. Contrastar arriba una versión **síncrona** imaginaria (`1 → 2 → 3` pegados, pero con la app **congelada** durante la espera). El ancla visual es: *el código no se ejecuta en el orden en que se lee.*

---

## BLOQUE 1 — JSON: el formato en que viajan los datos

*(El segundo concepto conceptual: los datos de la web viajan como TEXTO en un formato estándar, y su forma NO es la forma limpia que la app usa. Esto justifica el adapter del Bloque 3.)*

---

### CONCEPTO: JSON (JavaScript Object Notation)

**JSON** es un **formato de texto** estándar para representar datos estructurados (objetos y arrays). Es como se "empaquetan" los datos para viajar por internet entre cualquier cliente y cualquier servidor, sin importar el lenguaje de cada uno. Su forma **se parece** a un objeto JavaScript (llaves, claves, valores), pero es **texto**, y suele venir **anidado** (objetos dentro de objetos, arrays dentro de objetos).

**Sintaxis general:**
```json
{
  "clave": "valor en texto",
  "anidado": { "subclave": "otro valor" },
  "lista": [ { "x": 1 }, { "x": 2 } ]
}
```

**Caso del lab (lo que devuelve PokeAPI para pikachu):**
```json
{
  "name": "pikachu",
  "sprites": { "front_default": "https://.../25.png" },
  "types": [ { "type": { "name": "electric" } } ]
}
```

**Dependencia técnica:** **clave del día →** este JSON **NO es** el objeto limpio de C09. En C09 el alumno usaba `{ nombre, imagen, tipos: ["electric"] }`; la API usa **_name_** (no `nombre`), esconde la imagen en **_sprites.front_default_** y los tipos en un array **doblemente anidado** **_types[].type.name_**. JSON usa **comillas dobles obligatorias** en las claves y solo admite tipos básicos (texto, número, booleano, null, objeto, array) — no funciones. **La API dicta su estructura; la app se adapta a ella** (esto motiva el adapter).

### ANALOGÍA: La caja de encomienda con su etiqueta

JSON es como una **encomienda** que llega de otro país: viene en una **caja con etiqueta** que describe el contenido en un formato estándar, y a veces trae **cajas dentro de cajas** (la imagen está adentro de la caja "sprites"; el tipo, adentro de la caja "types", adentro de otra caja "type"). El paquete es válido y completo —pero **no está acomodado como vos lo guardás en tu casa**—. Por eso vas a tener que **desempacar y reordenar** (el adapter) para meterlo en tu estantería (tu objeto limpio).

### ETIMOLOGÍA / HISTORIA

**JSON** = *JavaScript Object Notation*. Lo popularizó **Douglas Crockford** a principios de los 2000 como alternativa **liviana** a XML (el formato pesado que se usaba antes). Aunque nació de la sintaxis de objetos de JavaScript, hoy es **independiente del lenguaje**: Python, Java, Go, todos lo leen y escriben. Es, de lejos, el formato de intercambio de datos más usado de la web.

### ESTRATEGIA VISUAL: JSON crudo (anidado) vs objeto limpio de C09

Dos columnas lado a lado. Izquierda: el JSON real de pikachu con **_name_**, **_sprites.front_default_**, **_types[].type.name_** resaltados y flechas que muestran lo profundo que está cada dato. Derecha: el objeto limpio **_{ nombre, imagen, tipos: ["electric"] }_** de C09. Flechas cruzadas que conectan `name → nombre`, `sprites.front_default → imagen`, `types[].type.name → tipos`. Es la foto que justifica el adapter.

---

### CONCEPTO: `response.json()` — de texto JSON a objeto JS

La respuesta de un `fetch` no son los datos directamente: es un objeto **_Response_** que envuelve el cuerpo (que llegó como **texto JSON**). **_response.json()_** **convierte** ese texto en un **objeto JavaScript** usable — y, como leer/parsear el cuerpo también puede tardar, **devuelve otra Promesa**.

**Sintaxis general:**
```javascript
.then(function (response) {
  return response.json();   // texto JSON → objeto JS (devuelve una Promesa)
})
```

**Dependencia técnica:** por eso el patrón del lab usa **dos `.then` encadenados**: el primero recibe la **_response_** y llama a **_response.json()_**; el segundo recibe ya los **datos como objeto** y trabaja con ellos. Es un error clásico esperar que `fetch(...).then(data => ...)` ya traiga los datos: el primer `.then` trae la **respuesta**, no el contenido — falta el paso `json()`.

### ANALOGÍA: Desempaquetar la encomienda

Si JSON es la encomienda, **_response.json()_** es **abrir la caja** y sacar el contenido a la mesa. Mientras está cerrada (la `response`) sabés que algo llegó, pero no podés usarlo; recién cuando la **desempaquetás** (`.json()`) tenés el objeto en la mano para trabajarlo. Y abrir cajas grandes también lleva un momento — por eso devuelve otra promesa.

### ETIMOLOGÍA / HISTORIA

El método se llama **_json()_** porque **parsea** (interpreta) el cuerpo de la respuesta asumiendo que es JSON, y lo transforma en valores nativos de JS. Es parte de la **Fetch API** (estándar de los navegadores modernos, ~2015). Su primo es **_JSON.parse()_**, que hace lo mismo pero sobre un string que ya tenés en memoria; `response.json()` es la versión que además espera a que el cuerpo termine de llegar.

### ESTRATEGIA VISUAL: Caja cerrada (Response) → abrir → objeto en la mesa

Tres pasos: la **_Response_** como caja cerrada → el método **_.json()_** como acción de abrir → el **objeto JS** ya desplegado con sus propiedades visibles. Marcar "esto también devuelve una Promesa" sobre el paso de abrir, para justificar el segundo `.then`.

---

## BLOQUE 2 — PROMESAS: manejar lo que tarda

*(Las herramientas concretas de la asincronía. La Promesa es el objeto que representa "datos que llegarán"; `fetch` la produce, `.then`/`.catch` reaccionan, `Promise.all` espera a varias. Todo se apoya en el modelo mental del Bloque 0.)*

---

### CONCEPTO: Promesa

Una **Promesa** es un objeto que representa el **resultado futuro** de una operación asincrónica: un "vale" por un dato que **todavía no está, pero llegará** (o fallará). Tiene tres estados: **pendiente** (esperando), **resuelta** (llegó el dato) o **rechazada** (falló). No te da el dato al instante — te da la *promesa* de él, y vos enganchás qué hacer cuando se cumpla.

**Sintaxis general:**
```javascript
const promesa = operacionQueTarda();   // devuelve una Promesa, no el dato
promesa.then(dato => { /* cuando se resuelve */ })
       .catch(error => { /* si se rechaza */ });
```

**Caso del lab (verlo en consola):**
```javascript
console.log(fetch("https://pokeapi.co/api/v2/pokemon/pikachu"));
// → Promise { <pending> }   ← el "vale", todavía sin los datos
```

**Dependencia técnica:** la Promesa es el **puente** entre "lo lancé" y "ya llegó". No se puede leer su valor directamente (`const x = promesa` NO te da el dato); hay que pasar por **_.then_**. Una promesa **pendiente** se resuelve **una sola vez**: o cumple (then) o falla (catch). Es el reemplazo moderno de los viejos *callbacks* anidados.

### ANALOGÍA: El ticket del pedido

Una Promesa es el **ticket** que te dan cuando pedís en una fonda con número: *"pedido #42"*. El ticket **no es la comida** —es el **comprobante de que va a llegar**—. Con el ticket en mano seguís sentado tranquilo; cuando llaman tu número (se resuelve), vas y retirás. Si la cocina se queda sin ese plato (se rechaza), te avisan y vas al plan B. El ticket representa algo que **todavía no tenés, pero tendrás**.

### ETIMOLOGÍA / HISTORIA

**Promise** = "promesa": una garantía de un valor futuro. Llegaron nativas a JavaScript con **ES6 (2015)**, la misma versión de `class` y los template literals de C09. Antes, la asincronía se manejaba con **callbacks** anidados que generaban el famoso *"callback hell"* (pirámides de funciones ilegibles). Las Promesas aplanaron eso con el encadenamiento `.then`, y son la base sobre la que C11 construye `async/await`.

### ESTRATEGIA VISUAL: Ticket → (espera) → dato o error

Un ticket "#42" en el centro, en estado **pendiente**. Dos flechas de salida: una verde rotulada **_.then_** ("llegó → usá el dato") y una roja rotulada **_.catch_** ("falló → plan B"). Reforzar que el ticket NO es el dato — es la promesa de él.

---

### CONCEPTO: `fetch(url)`

**_fetch(url)_** es la función del navegador que **hace la petición** a una URL de API y **devuelve una Promesa** por la respuesta. Es la herramienta concreta que materializa el modelo cliente–servidor del Bloque 0.

**Sintaxis general:**
```javascript
fetch("https://api.ejemplo.com/datos")
  .then(response => response.json())
  .then(datos => { /* usar los datos */ })
  .catch(() => { /* manejar el fallo */ });
```

**Caso del lab (HU2):**
```javascript
contenedor.innerHTML = `<p class="...">Cargando…</p>`;   // estado de espera
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(response => response.json())   // 1º then: respuesta → JSON
  .then(data => console.log(data))     // 2º then: datos reales
  .catch(() => { /* "No se pudo cargar." */ });
```

**Dependencia técnica:** `fetch` **no devuelve los datos** — devuelve una Promesa de una **_Response_** (de ahí el paso `response.json()`). Como la red tarda, conviene mostrar un estado **"Cargando…"** ANTES del `fetch` y reemplazarlo cuando llegan los datos. `fetch` solo necesita la URL para un GET simple (pedir datos); enviar/modificar datos requiere opciones adicionales que NO se ven hoy.

### ANALOGÍA: Tocar el timbre de la ventanilla

`fetch(url)` es **tocar el timbre de la ventanilla** del servidor con un pedido concreto (la URL). En el momento de tocar no te dan nada en la mano —te dan el **ticket** (la Promesa)— y la atención se procesa "atrás". Vos te apartás de la ventanilla y esperás tu turno sin bloquear la fila (asincronía).

### ETIMOLOGÍA / HISTORIA

**fetch** = "buscar / ir a traer" en inglés. La **Fetch API** llegó a los navegadores alrededor de **2015** para reemplazar al viejo y engorroso **_XMLHttpRequest_** (`XHR`), que hacía lo mismo pero con muchísimo más código y sin Promesas. `fetch` es hoy la forma estándar de pedir datos en el navegador.

### ESTRATEGIA VISUAL: fetch en el diagrama cliente–servidor

Reusar el diagrama del Bloque 0 (CLIENTE → URL → SERVIDOR) pero ahora rotulando la flecha de ida con **_fetch(url)_** y la de vuelta con **_Promise → Response → .json() → datos_**. Conecta el modelo conceptual con la herramienta concreta.

---

### CONCEPTO: `.then` / `.catch` (reaccionar y encadenar)

**_.then(callback)_** registra qué hacer **cuando** la Promesa se **resuelve** (llega el dato). **_.catch(callback)_** registra qué hacer si se **rechaza** (falla). Se pueden **encadenar** varios `.then`: lo que un `.then` **retorna** pasa al siguiente.

**Sintaxis general:**
```javascript
promesa
  .then(paso1 => siguienteValor)   // lo que retorna…
  .then(siguienteValor => ...)     // …entra acá
  .catch(error => ...);            // captura cualquier fallo de la cadena
```

**Caso del lab (los dos `.then` encadenados):**
```javascript
fetch(url)
  .then(function (response) { return response.json(); })  // retorna una Promesa
  .then(function (data) { render([adaptarPokemon(data)]); })
  .catch(function () { /* mostrar error */ });
```

**Dependencia técnica:** el encadenamiento es clave: el **primer `.then`** retorna `response.json()` (otra Promesa), y el **segundo `.then`** recibe su resultado ya resuelto. Un solo **_.catch_** al final atrapa el fallo de **cualquier** eslabón de la cadena (red caída, JSON inválido). El `.then` es **el "cuando llegue, hacé esto"** del modelo de delivery.

### ANALOGÍA: La instrucción al repartidor

`.then` es la **instrucción que dejás al repartidor**: *"cuando llegues, tocá el timbre y dejá el paquete en la puerta"*. No la ejecutás ahora —la dejás lista para **cuando** ocurra el evento—. Encadenar `.then` es dar instrucciones en secuencia: *"primero abrí el paquete (`json`), después acomodalo en la estantería (`render`)"*. `.catch` es el aviso para cuando algo sale mal: *"si no podés entregar, llamame"*.

### ETIMOLOGÍA / HISTORIA

**then** = "entonces / luego": *"cuando esto se cumpla, **entonces** hacé aquello"*. **catch** = "atrapar": atrapa el error que "cae" de cualquier punto de la cadena. Son los métodos que toda Promesa expone desde **ES6**. La legibilidad del encadenamiento `.then().then().catch()` fue justamente lo que mató al *callback hell*.

### ESTRATEGIA VISUAL: Cadena de eslabones

Tres eslabones en fila rotulados **_fetch_** → **_.then (json)_** → **_.then (render)_**, con una flecha que muestra "lo que retorna pasa al siguiente". Debajo, un eslabón rojo **_.catch_** conectado a toda la cadena con la nota "atrapa el fallo de cualquier paso".

---

### CONCEPTO: `Promise.all` (varias en paralelo)

**_Promise.all(arrayDePromesas)_** toma un **array de Promesas** y devuelve **una sola Promesa** que se resuelve cuando **TODAS** terminan, entregando un **array con todos los resultados** juntos (en el mismo orden). Sirve para lanzar **muchos pedidos a la vez** en vez de uno por uno.

**Sintaxis general:**
```javascript
const promesas = [fetch(a), fetch(b), fetch(c)];
Promise.all(promesas).then(resultados => { /* array con a, b, c */ });
```

**Caso del lab (HU4):**
```javascript
const ids = [1, 4, 7, 25, 39, 94];
const promesas = ids.map(id => fetch(`.../pokemon/${id}`).then(r => r.json()));
Promise.all(promesas).then(datos => {
  pokedex = datos.map(adaptarPokemon);   // los 6 ya adaptados
  render(pokedex);
});
```

**Dependencia técnica:** se arma el array de Promesas con **_.map_** (un `fetch` por id) y se lo pasa a `Promise.all`. En **paralelo** los 6 pedidos tardan lo que **el más lento**; uno por uno (esperando cada uno antes del siguiente) tardaría la **suma** de todos. `Promise.all` **falla entero si una sola** promesa se rechaza (todo-o-nada) — el manejo fino de eso queda para C12.

### ANALOGÍA: Pedir a varios locales a la vez para una mesa

Tenés que servir una mesa con comida de **6 locales** distintos. Si pedís de a uno —esperás que llegue el primero, recién entonces pedís el segundo— la mesa come a medianoche. `Promise.all` es **mandar los 6 pedidos al mismo tiempo** y esperar a que **lleguen todos** para servir junto: tardás lo que tarda el local **más lento**, no la suma de los seis.

### ETIMOLOGÍA / HISTORIA

**Promise.all** = "todas las promesas". Es un método **estático** de `Promise` (se llama sobre `Promise`, no sobre una instancia), también de **ES6**. Tiene primos para otras estrategias: **_Promise.race_** (la primera que termine), **_Promise.allSettled_** (espera a todas, fallen o no) — útiles cuando el "todo-o-nada" de `all` no alcanza, pero fuera del alcance de hoy.

### ESTRATEGIA VISUAL: 6 flechas en paralelo vs 6 en fila

Arriba: **secuencial** — 6 pedidos uno tras otro en fila, barra de tiempo larga. Abajo: **paralelo** con `Promise.all` — 6 pedidos saliendo al mismo tiempo, barra de tiempo corta (lo que tarda el más lento). El punto de unión: `Promise.all` espera a que las 6 flechas vuelvan y recién ahí dispara el `render`.

---

## BLOQUE 3 — ADAPTAR + REUSAR: conectar la API con la app de C09

*(El puente con C09. La API da una forma anidada; la app sabe pintar la forma limpia. La función adaptadora traduce entre las dos, y así `render`/`crearTarjeta` se reusan SIN cambios. Es exactamente lo que hace un dev real con cualquier API.)*

---

### CONCEPTO: Función adaptadora

Una **función adaptadora** recibe un dato con la estructura de la API (anidada) y **devuelve** un objeto con la **forma limpia** que la app ya sabe consumir (`{ nombre, imagen, tipos }`). Aísla en un solo lugar la "traducción", de modo que el resto del código (el `render`, las tarjetas) **no se entere** de cómo viene la API.

**Sintaxis general:**
```javascript
function adaptar(datoDeLaApi) {
  return {
    campoA: datoDeLaApi.otroNombre,
    campoB: datoDeLaApi.algo?.profundo ?? respaldo,
  };
}
```

**Caso del lab (HU3):**
```javascript
function adaptarPokemon(data) {
  return {
    nombre: data.name,
    imagen: data.sprites?.front_default ?? "https://via.placeholder.com/96?text=?",
    tipos:  data.types.map(t => t.type.name)   // [{type:{name:"electric"}}] → ["electric"]
  };
}
```

**Dependencia técnica:** el adapter es donde **se paga** lo de C09: **_?._** y **_??_** dan el respaldo si la API no trae la imagen, y **_.map_** aplana `types[].type.name` al array de textos que `crearTarjeta` espera. Gracias al adapter, **_render_** y **_crearTarjeta_** se reusan **sin tocar una línea** — solo cambia de dónde sale el dato. Es el patrón **anti-corrupción**: el código de la app no se "contamina" con la forma de la API.

### ANALOGÍA: El adaptador de enchufe de viaje

Viajás a otro país y tu cargador **no entra** en el tomacorriente: la pared (la API) tiene una forma; tu enchufe (tu app) tiene otra. No reemplazás todos tus aparatos —ponés un **adaptador de enchufe** en el medio y todo funciona igual—. La función adaptadora es ese adaptador: traduce la forma de la API a la forma de tu app, sin que tengas que reescribir la app.

### ETIMOLOGÍA / HISTORIA

"Adaptar" = ajustar algo para que encaje con otra cosa. En diseño de software se conoce como el **patrón Adapter** (uno de los patrones clásicos de la *Gang of Four*): un objeto/función que convierte la interfaz que tenés en la interfaz que tu código necesita. Es uno de los patrones más usados al integrar sistemas que no fueron pensados para hablarse entre sí — exactamente el caso de tu app y una API externa.

### ESTRATEGIA VISUAL: API anidada → adaptador → objeto limpio → tarjeta

Flujo de izquierda a derecha: el **JSON anidado** de pikachu → caja **_adaptarPokemon_** (con `name→nombre`, `sprites.front_default→imagen`, `types[].type.name→tipos` adentro) → el **objeto limpio** `{ nombre, imagen, tipos }` → la **tarjeta** ya renderizada por el `crearTarjeta` de C09 (intacto). El mensaje: *un solo punto de traducción, el resto de la app no cambia.*

---

## CIERRE — hilo conductor + qué se lleva el alumno

### El arco del Módulo 3 (Pokédex)
```
C09  JS Moderno      → render de datos LOCALES (array fijo)        ← ya hecho
C10  fetch + JSON    → datos REALES de PokeAPI (Promesas, .then)   ← HOY
C11  async/await     → se REFORMULA el código de hoy, más legible
C12  Errores         → app robusta + README (Markdown)            ← lab calificado
```
Una sola app que crece clase a clase. Hoy el `render` y el buscador de C09 **no cambian**: solo cambia **de dónde** vienen los datos (de un array local → de la web) y se aprende a **manejar la espera**. Lo que queda hecho y se reusa es el patrón `fetch → adaptar → render`.

### Puente a C11
Hoy se consume la asincronía con **`.then` encadenados** — funciona, pero la cadena se hace larga y anidada. C11 abre la pregunta: ¿se puede escribir código asíncrono que **se lea como código normal**, de arriba abajo? → **`async/await`**, que reformula EXACTAMENTE este mismo código de hoy.

### Tabla resumen de conceptos

| Bloque | Conceptos |
|---|---|
| **B0 — Conceptual: API + asincronía** | API (cliente–servidor, endpoint/URL) · asincronía (no bloqueante, el orden `1→2→3`) |
| **B1 — JSON** | JSON (formato de texto, anidado, ≠ forma limpia) · `response.json()` (texto → objeto JS) |
| **B2 — Promesas** | Promesa (el "ticket") · `fetch(url)` · `.then` / `.catch` (reaccionar y encadenar) · `Promise.all` (paralelo) |
| **B3 — Adaptar + reusar** | función adaptadora (API anidada → forma limpia; reusa `?.`/`??`/`.map`; `render`/`crearTarjeta` intactos) |

### Mensaje que se lleva el alumno
**Los datos de una app de verdad viven en internet, tardan, y se piden sin congelar la página.** Pedís (`fetch`), te dan un comprobante (Promesa), reaccionás cuando llega (`.then`), traducís la forma de la API a la tuya (adapter) y reusás todo lo que ya tenías (`render`). Esa es la mecánica de cualquier app conectada del mundo real.
