# CLASE 11 — async/await y búsqueda en la API (Módulo 3)

> **Curso:** Code 201 · **Módulo 3** — Clase 3 de 4
> **Proyecto víctima:** **Pokédex** (repo **_pokedex_**, rama **_lab11-async_**) — la MISMA app de C09/C10. Hoy se **reformula** el código asíncrono con **_async/await_** y el buscador **evoluciona** de filtrar a buscar en la API.
> **NO es lab calificado** (el calificado del M3 es C12) · **no pide README** todavía (C12, con Markdown).
> **Fuente de inputs:** **_code201/class-11/README.md_** + **_lab/README.md_** + **_slides/README.md_** + **apuntes del instructor** (**_apuntes/_**: Promesas III async/await, fetch con async/await, parámetros de ruta vs consulta).
> **Requiere internet:** PokeAPI, gratuita, sin clave.
> **Duración:** 3h reales · se prepara para 2h30 (≈150 min) · colchón 30 min · receso 10 min entre M2 y M3.

---

## Idea fuerza de la clase

**El mismo código asíncrono, más legible — y una app que crece con lo que hace el usuario.** Dos movimientos: (1) lo que en C10 se escribió con **_.then_** encadenado se **reescribe con _async/await_**, que NO es tecnología nueva sino **la misma promesa leída de arriba abajo**; (2) el buscador deja de **filtrar** la rejilla cargada y pasa a **buscar en la API** cualquier Pokémon, que el usuario puede **capturar** para sumarlo a su colección. Ahí aparece la idea que acompaña al resto del curso: **_pokedex_ es el estado de la app, y crece según lo que el usuario hace.** Todo lo de C09/C10 (**_fetch_**, **_Promise.all_**, **_adaptarPokemon_**, **_crearTarjeta_**, **_render_**, **_pokedex_**) se reusa.

> **Enfoque de la clase:** la primera mitad es **debate técnico** (**_async/await_** como azúcar sobre Promesas) y la segunda es lab-conducido (buscar → capturar → stats → paginar). Los apuntes traen más teoría de la que el lab usa: **_try/catch_** (manejo de errores con **_async/await_**), que **_async_** **siempre devuelve una promesa**, y la teoría completa de **ruta vs consulta**. Se presentan como teoría; el lab aplica el subconjunto y el manejo de errores se desarrolla en **C12**.

---

## Tabla de tiempos (preparado para 2h 30min)

| Momento    | Tema                                                                          | Parte del lab        | Tiempo  |
| ---------- | ----------------------------------------------------------------------------- | -------------------- | ------- |
| **M1**     | Repaso **_.then_** de C10 + **_async/await_** (azúcar) + reformular la carga           | HU1 (CP1 ~15)        | ~30 min |
| **M2**     | De filtrar a **buscar** por nombre (parámetro de **ruta**) + mostrar resultado | HU2 (CP2 ~35)        | ~30 min |
| **RECESO** | —                                                                             | —                    | 10 min  |
| **M3**     | **Capturar** + el **estado** (**_pokedex_**) crece sin duplicar (**_.some_**)          | HU3 (CP3 ~55)        | ~30 min |
| **M4**     | **Explorar la respuesta**: navegar el JSON anidado → **_stats_**                   | HU4 (CP4 ~75)        | ~30 min |
| **M5**     | **Paginación**: ruta vs **consulta** (**_?limit_**/**_?offset_**) + cierre + puente C12 | HU5 (CP5 ~95) + Cierre | ~30 min |

> Total preparado: ~150 min (sin contar el receso). El colchón de 30 min absorbe el trabajo autónomo en cada Checkpoint del lab (CP1 ~15', CP2 ~35', CP3 ~55', CP4 ~75', CP5 ~95' de reloj de lab).
>
> **Mapa de temas → momentos:** async/await como azúcar + reformular **_.then_** (M1) · búsqueda por nombre / parámetro de ruta (M2) · capturar / estado con **_.some_** (M3) · explorar la respuesta / **_data.stats_** (M4) · parámetros de consulta **_?limit_**/**_?offset_** + paginación (M5).

---

## Cadena Problema → Solución de la clase

```
M1: "el código de C10 con .then encadenado se lee mal, salta hacia adentro"
     → async/await: la MISMA promesa, leída de arriba abajo como pasos (HU1)
     ↓ (ya se lee claro… pero el buscador solo encuentra lo que YA cargué)
M2: "quiero encontrar CUALQUIER Pokémon, no solo los de la rejilla"
     → buscar en la API por nombre — parámetro de RUTA /pokemon/{nombre} (HU2)
     ↓ (lo encontré y lo muestro… pero al mostrarlo se va lo demás; no queda en mi colección)
M3: "quiero quedarme con el que encontré"
     → Capturar: sumar al ESTADO (pokedex) sin duplicar con .some() (HU3)
     ↓ (lo capturo, pero la tarjeta muestra poco para decidir si vale la pena)
M4: "quiero ver sus estadísticas antes de capturar"
     → Explorar la respuesta: la API trae mucho más → navegar el JSON → stats (HU4)
     ↓ (buscar de a uno es tedioso; quiero traer más de golpe)
M5: "quiero explorar la Pokédex sin escribir nombres"
     → Paginación: parámetros de consulta ?limit/?offset + "Cargar más" (HU5)
     ↓ (todo anda… pero si busco un nombre que NO existe, la app se rompe)
M5 (cierre): "una app real no puede caerse así" → puente a C12 (try/catch + README, lab calificado)
```

---

## MOMENTO 1 — Repaso de C10 + async/await: reformular la carga

**Tiempo:** ~30 min
**Parte del lab:** Setup + HU1 (Checkpoint 1 ~15 min)

> **OBJETIVO:** El alumno reactiva en voz alta los conceptos de C10 (asincronía, promesa, dos **_.then_**, **_Promise.all_**), los **fija** modificando el **_app.js_** de C10 para que la Pokédex muestre UNA sola tarjeta —la de su Pokémon favorito—, decidiendo qué comentar y qué reusar, entiende **_async/await_** como **una forma distinta de consumir la MISMA promesa** —donde el orden en que se lee coincide con el orden en que se ejecuta—, lo ve en una demo controlada con **_await_** secuencial y **reescribe** la carga del lab con **_async/await_** sin cambiar el resultado. Conoce además que **_async_** **siempre devuelve una promesa** y que el manejo de errores se hace con **_try/catch_** (mención; se profundiza en C12).

> **Patrón pedagógico de M1:** **repaso → ejercicio → debate técnico → demo → lab.** Se abre con el repaso conversado de C10 (paso a paso, con preguntas al grupo, sin re-explicar nada nuevo). Sigue un mini-ejercicio de 5-7 min sobre el MISMO **_app.js_** de C10: cada alumno modifica el código para que la Pokédex muestre UNA sola tarjeta (su Pokémon favorito), decidiendo qué comentar (array de 6 + **_Promise.all_**) y qué reusar tal cual (**_adaptarPokemon_**, **_crearTarjeta_**, **_render_**, **_pokedex_**). Antes de HU1 se revierte (Ctrl+Z) para volver al estado de C10. Recién después se compara el MISMO **_fetch_** en sus dos formas (**_.then_** vs **_async/await_**) y se nombra el dolor concreto que resuelve **_async/await_**: con **_.then_** el código se leía en un orden y se ejecutaba en otro; con **_async/await_** ambos órdenes coinciden. NO se entra a búsqueda/captura/stats/paginación —eso es de M2 en adelante—; M1 cierra con la reescritura de la carga (HU1) y el puente al buscador.

#### 1.1 Repaso flash de la carga de C10

**EN PANTALLA: VS CODE — abierto el _app.js_ del repo _pokedex_ tal como quedó al cierre de C10 (carga con _fetch_/_.then_/_Promise.all_).**

> **Tu apertura:**
> *"En C10 dejamos la Pokédex cargando su rejilla desde la PokeAPI. Funciona, se ve, los Pokémon están ahí. Hoy NO vamos a cambiar lo que hace — vamos a cambiar cómo se escribe. Pero antes, repasamos en voz alta lo que dejamos andando, porque sobre eso vamos a construir."*

> **Tu desarrollo del repaso (paso a paso, señalando líneas del _app.js_ y preguntando al grupo):**
>
> *"Paso 1 — la asincronía. ¿Por qué un **_fetch_** no congela la página mientras los datos llegan?"*
> *(Respuesta esperada: porque JavaScript no se queda esperando — lanza la petición y sigue ejecutando lo de abajo. La asincronía mantiene la página fluida.)*
>
> *"Paso 2 — la promesa. Cuando hacemos **_fetch(url)_**, ¿qué nos devuelve en ese instante: los datos del Pokémon, o algo más?"*
> *(Respuesta esperada: una **promesa** — un 'vale' por los datos que van a llegar. Reforzar los 3 estados: pending → fulfilled / rejected, una sola vez.)*
>
> *"Paso 3 — los dos **_.then_**. En el código tenemos **_fetch(...).then(r => r.json()).then(data => ...)_**. ¿Por qué DOS **_.then_** y no uno solo?"*
> *(Respuesta esperada: el primero recibe el objeto **_Response_** y llama a **_.json()_** para convertir el body — que ES otra promesa porque leer también tarda —; el segundo **_.then_** ya recibe los datos reales en formato objeto JS.)*
>
> *"Paso 4 — **_Promise.all_**. Para traer 6 Pokémon en paralelo usamos **_Promise.all(...)_**. ¿Qué le entra y qué le sale?"*
> *(Respuesta esperada: ENTRA un array de promesas; SALE una sola promesa que se resuelve cuando TODAS terminaron, con un array de resultados en el mismo orden. Mucho más rápido que pedirlos uno por uno.)*
>
> *"Paso 5 — lo que reutilizamos. **_pokedex_** es nuestro array de Pokémon listos para pintar; **_adaptarPokemon_** traduce la forma de la API a la nuestra; **_crearTarjeta_** y **_render_** (de C09) pintan en la rejilla. Hoy NADA de eso se tira — todo se reusa."*

> **Tu cierre del repaso (nombrar lo que viene):**
> *"Esto que acabamos de repasar —fetch, promesa, dos **_.then_**, **_Promise.all_**— es lo que hoy vamos a **escribir distinto**. La promesa NO desaparece; el **_fetch_** NO desaparece; **_Promise.all_** NO desaparece. Lo único que cambia es la forma en que lo CONSUMIMOS. Pero antes de ver la forma nueva, quiero que toquen el **_app.js_** que tienen abierto: háganlo mostrar UNA sola tarjeta — la de su Pokémon favorito —. Van a tener que decidir qué se comenta y qué se reusa. Eso fija el reflejo de C10 antes de meterle **_async/await_**."*

---

#### 1.2 Mini-ejercicio — la Pokédex con UNA sola tarjeta (su favorito)

**EN PANTALLA: EXCALIDRAW Panel 1.2 (el reto del mini-ejercicio — enunciado, pistas estructurales, criterio de éxito, nota de revertir). Apoyo: VS CODE — el _app.js_ del repo _pokedex_ tal como quedó al cierre de C10 (con la carga por _Promise.all_ de los 6 Pokémon) para que cada alumno trabaje sobre el suyo.**

> **Tu apertura:**
> *"Cinco minutos. NO creamos archivos nuevos: trabajamos sobre el MISMO **_app.js_** que tienen abierto. La consigna es simple en palabras, pero exige decidir: hagan que la Pokédex muestre UNA sola tarjeta — la de su Pokémon favorito. Eso te obliga a mirar cada parte del código y preguntarte: ¿esto lo comento, lo modifico, o lo reuso tal cual?"*

> **El reto (lo dictás o lo proyectás):**
> 1. Elegir un Pokémon favorito (charizard, snorlax, mewtwo, lo que sea).
> 2. Modificar **_app.js_** para que en la rejilla aparezca **SOLO esa tarjeta**, manteniendo el código de C10 funcionando con **_.then_** (NADA de **_async/await_** todavía).
> 3. **Pensar antes de tocar:** ¿qué partes ya no aplican y se comentan? ¿qué partes se reusan tal cual? ¿qué partes hay que modificar mínimamente?
> 4. La tarjeta tiene que verse en la rejilla con la MISMA apariencia de C10 (imagen, nombre, tipos).
> 5. Cuando termines, NO commitees — vamos a revertir todo antes de empezar HU1.

> **Pistas estructurales (las dejás caer si se traban, no antes):**
> - El array **_nombres = ["bulbasaur", ...]_** y todo el bloque de **_Promise.all(...)_** ya no aplican para un solo Pokémon → **se comentan**.
> - **_fetch_** con dos **_.then_** SÍ aplica → se escribe con UN solo nombre en la URL.
> - **_adaptarPokemon_** SÍ se reusa tal cual.
> - **_render_** espera un **array** → hay que pasarle un array de UN elemento: **_render([adaptarPokemon(data)])_**.
> - **_crearTarjeta_** ni se toca (lo llama **_render_** por dentro).

> **Criterio de éxito:**
> Al cargar la página aparece **una sola tarjeta** en la rejilla, con la imagen, el nombre y los tipos del Pokémon elegido — idéntica en apariencia a las de C10. La consola NO debe mostrar errores.

> **Tu nota — qué buscar mientras circulan (5 min):**
> - Que comenten (no borren) el array de 6 + el **_Promise.all_**. Si lo borran, va a costar más revertir.
> - El error más común va a ser pasarle el objeto pelado a **_render_**: **_render(adaptarPokemon(data))_** en lugar de **_render([adaptarPokemon(data)])_**. La rejilla queda vacía o tira error porque **_render_** itera con **_.map_**/**_forEach_**.
> - Que NO se olviden del **_return_** en el primer **_.then_** (sin **_return_**, **_data_** llega como **_undefined_** y rompe **_adaptarPokemon_**).
> - Que reusen el "Cargando…" si lo tenían en C10 — no hace falta tocarlo.

> **Código solución (proyectar SOLO al cerrar el ejercicio, para que comparen con el suyo):**
> ```javascript
> // app.js — modificado para mostrar SOLO el favorito
>
> // const nombres = ["bulbasaur", "charmander", "squirtle", "pikachu", "jigglypuff", "gengar"];
> //                                                                                                ← COMENTADO
> // const promesas = nombres.map(function (nombre) {                                                ← COMENTADO
> //   return fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`).then(r => r.json());              ← COMENTADO
> // });                                                                                              ← COMENTADO
> //                                                                                                  ← COMENTADO
> // Promise.all(promesas).then(function (datos) { ... });                                            ← COMENTADO
>
> // ↓ El reemplazo: UN solo fetch para mi favorito (charizard, por ejemplo)
> contenedor.innerHTML = `<p class="col-span-full text-center text-slate-500">Cargando…</p>`;
>
> fetch("https://pokeapi.co/api/v2/pokemon/charizard")
>   .then(function (response) {
>     return response.json();                        // ← el return es OBLIGATORIO
>   })
>   .then(function (data) {
>     pokedex = [adaptarPokemon(data)];              // ← array de UN elemento
>     render(pokedex);                                // ← render espera un array; le doy uno con 1
>   })
>   .catch(function (error) {
>     contenedor.innerHTML = `<p class="col-span-full text-center text-red-600">No se pudo cargar.</p>`;
>   });
> ```
> - *"Miren las decisiones: COMENTÉ el array de 6 y el **_Promise.all_** —ya no aplican—. REUSÉ **_adaptarPokemon_**, **_crearTarjeta_**, **_render_** y el array **_pokedex_** —no los toqué—. Y MODIFIQUÉ una sola cosa: lo que se le pasa a **_render_**, que ahora es un array con un único elemento. Eso es lo que hace un dev todos los días: leer código existente y decidir qué piezas siguen sirviendo."*

> **Tu cierre del ejercicio (cuando empiecen a terminar):**
> *"Bien. Los que terminaron, miren su propio código y díganme una cosa: cuando lo leen en voz alta, ¿lo leen de arriba abajo, o se les va el ojo 'hacia adentro' siguiendo cada **_.then_**?"*
> *(La respuesta natural: hacia adentro. Esa es la puerta directa a 1.3.)*
>
> *"Antes de cerrar 1.2: háganle **Ctrl+Z** hasta volver al estado original de C10 (los 6 Pokémon cargando con **_Promise.all_**), o **descomenten** lo que comentaron y borren el bloque del favorito. NO commiteen nada. En 1.5 vamos a partir del estado limpio de C10 para reescribirlo con **_async/await_**."*

---

#### 1.3 **_async_** / **_await_** — la misma promesa, leída de arriba abajo

**EN PANTALLA: EXCALIDRAW — el MISMO _fetch_ que acaban de escribir, en dos columnas: _.then_ encadenado (izq) vs _async/await_ de arriba abajo (der).**

> **Tu apertura (engancha con el ejercicio que acaban de hacer):**
> *"Acaban de tocar un **_fetch_** con dos **_.then_** en su propio **_app.js_**. Funciona. La tarjeta apareció. Pero noten algo cuando leen ese bloque: el código se LEE en un orden, pero se EJECUTA en otro. Ahí está el problema concreto que vamos a resolver con **_async/await_**."*

> **Tu explicación — el dolor concreto de _.then_/_.catch_:**
> *"Con **_.then_** encadenado, el orden en que el código se lee y el orden en que se ejecuta NO coinciden:"*
> - *"El código va escrito en cadena: **_fetch(...).then(...).then(...)_**. Para entender el flujo, el ojo tiene que ir saltando de un **_.then_** al siguiente, cada uno 'envolviendo' al anterior."*
> - *"Cuando agregás manejo de errores con **_.catch_**, o cuando son 3-4 pasos, terminás con un bloque que se lee **de afuera hacia adentro** — no de arriba abajo como el resto del código."*
> - *"Y el orden de EJECUCIÓN tampoco es el orden visual: un **_console.log_** escrito ANTES del **_fetch_** puede correr DESPUÉS de lo que está adentro del **_.then_**. Lo vivieron en C10 con el ejemplo de la pizza."*
> - *"Resultado: el código con **_.then_**/**_.catch_** **parecía desordenado**, porque NO se ejecutaba en el mismo orden en que se leía. Multiplicalo por 4-5 pasos y un **_try/catch_** real y se vuelve un nido."*

> **Tu explicación teórica precisa:**
> *"**_async_** y **_await_** son dos palabras clave para escribir EL MISMO código asíncrono —las MISMAS Promesas— pero de forma que el orden de lectura coincide con el orden de ejecución. Línea por línea, de arriba abajo, como código común."*
> - *"**_async_** se coloca delante de una función y la marca como **función asíncrona**."*
> - *"**_await_** se coloca delante de una promesa, DENTRO de una función **_async_**, y **pausa esa función** hasta que la promesa se resuelve. Cuando se resuelve, te entrega el **valor directo** — el mismo valor que el **_.then_** recibía como argumento."*

**Sintaxis general:**
```javascript
async function nombre() {
  const valor = await unaPromesa;   // pausa acá; cuando llega, 'valor' = lo resuelto
  // recién acá sigue, con 'valor' ya disponible
}
```

> **Code-along — el MISMO _fetch_ del ejercicio, dos formas:**
> ```javascript
> // Lo que acaban de escribir — .then encadenado (se lee "hacia adentro")
> fetch(url)
>   .then(response => response.json())
>   .then(data => { /* usar data */ });
>
> // Con async/await — se lee de arriba abajo, en el orden en que se ejecuta
> const response = await fetch(url);     // PAUSA acá hasta que llega la respuesta
> const data = await response.json();    // PAUSA acá hasta que el JSON se convierte
> // usar data — recién acá, con los datos ya en mano
> ```

> **Tu explicación — qué cambió en el flujo de lectura:**
> - *"Columna izquierda: cada **_.then_** envuelve al siguiente. Para entender qué pasa, el ojo va abriendo capas hacia adentro."*
> - *"Columna derecha: el código se lee LÍNEA POR LÍNEA. La línea 1 corre, después la línea 2, después la línea 3. **Lo que ves escrito es lo que pasa**, en ese orden."*
> - *"El **_await_** reemplaza al **_.then_** — **no a la promesa**. La promesa sigue ahí adentro: **_fetch_** sigue devolviendo una promesa, **_Promise.all_** también. Solo cambia cómo la consumimos."*

> **Tu explicación — las reglas que hay que tener claras:**
> - *"**_await_** SOLO se puede usar dentro de una función marcada con **_async_**. Por fuera, error de sintaxis."*
> - *"**_await_** pausa **solo esa función** **_async_**, NO congela todo el programa. El resto del código —botones, animaciones, otros fetchs— sigue corriendo. La página no se traba."*
> - *"Una función **_async_** **SIEMPRE devuelve una promesa**, aunque adentro hagas un **_return 5_** directo. Por eso, para usar lo que devuelve, hay que **_await_**-earla o consumirla con **_.then_**. Si no, te queda una promesa pendiente en la mano, no el valor."*

> **Mención (no se practica hoy):**
> *"¿Y si la promesa falla? Con **_.then_** usábamos **_.catch_**. Con **_async/await_** se usa **_try/catch_** —el equivalente directo—. HOY el lab se va a romper a propósito si buscan un nombre que no existe; el manejo serio de errores es justo el tema de C12."*

> **Pregunta de activación:**
> *"Si una función **_async_** siempre devuelve una promesa, y dentro hago **_return 5_**, ¿qué obtengo cuando la llamo SIN **_await_** ni **_.then_**?"*
> *(Respuesta esperada: una promesa pendiente, no el 5. Para sacar el 5, hay que **_await_** o **_.then_**. Refuerza la idea de que **_async_** envuelve TODO en una promesa.)*

---

#### 1.4 Demo de **_await_** — la misma promesa de C10, leída como pasos

**EN PANTALLA: VS CODE + CONSOLA — reusar _prepararPizza_ (la promesa que crearon en C10) y consumirla con _await_ en un archivo de prueba fuera del repo del lab.**

> **Tu apertura:**
> *"Antes de tocar el proyecto del lab, hagamos el ejercicio con la promesa que USTEDES MISMOS crearon en C10: **_prepararPizza_** —la del chef con el **_setTimeout_** de 3 segundos—. En C10 la consumíamos con **_.then/.catch/.finally_**. Hagámoslo con **_await_** y miremos en consola el orden en que salen los **_console.log_**."*

> **Recordatorio — la promesa de C10 (re-crearla en un archivo de prueba; copiar tal cual desde el material de C10):**
> ```javascript
> const prepararPizza = new Promise((resolve, reject) => {
>   console.log("🍕 Pedido recibido: el chef está preparando la pizza...");
>   setTimeout(() => {
>     const hayIngredientes = true;   // cambiar a false para probar el reject
>     if (hayIngredientes) {
>       resolve("¡Pizza lista y recién hecha! Disfruta tu comida. 😋");
>     } else {
>       reject("Lo sentimos, se nos acabó el queso. Pedido cancelado.");
>     }
>   }, 3000);
> });
> ```
> - *"Hay que re-crearla en un archivo de prueba porque una promesa se resuelve UNA SOLA VEZ —si reusan la **_prepararPizza_** ya consumida de C10, el **_await_** va a devolver el valor cacheado al instante y no se va a ver la pausa—. Re-creándola, el **_setTimeout_** vuelve a contar los 3 segundos."*

> **Code-along — consumir la MISMA promesa, dos formas:**
> ```javascript
> // C10 — con .then (lo que ya conocen)
> // prepararPizza.then(mensaje => console.log(mensaje));
>
> // C11 — con async/await: se lee como una secuencia de pasos
> async function recibirPedido() {
>   console.log("1. Hago el pedido");
>   const mensaje = await prepararPizza;   // PAUSA acá hasta que la cocina termine (3 seg)
>   console.log("2. Llegó:", mensaje);     // recién corre cuando 'mensaje' YA está
>   console.log("3. Sirvo en la mesa");
> }
> recibirPedido();
> ```
>
> **Salida esperada en consola (con 3 seg de pausa entre líneas 1-2 y 2-3):**
> ```
> 🍕 Pedido recibido: el chef está preparando la pizza...
> 1. Hago el pedido
> (... espera 3 segundos ...)
> 2. Llegó: ¡Pizza lista y recién hecha! Disfruta tu comida. 😋
> 3. Sirvo en la mesa
> ```

> **Tu explicación teórica precisa:**
> - *"El **_await_** pausa la función en la línea del pedido. El **_2_** y el **_3_** NO corren hasta que el mensaje llega —tres segundos después, cuando el **_setTimeout_** dispara el **_resolve_**—. Se lee igual que se ejecuta: pido, espero, sirvo."*
> - *"Comparen con la columna **_.then_** de arriba: en C10, el **_console.log(mensaje)_** estaba ADENTRO del **_.then_**, 'envuelto'. Acá está AFUERA, en la línea siguiente del **_await_**, como código normal de arriba abajo."*
> - *"Pausa SOLO esta función **_async_**. Si afuera hubiera más código (otros listeners, animaciones), seguirían corriendo — la página no se congela."*
> - *"Es la MISMA promesa de C10. No cambió lo que hace; cambió cómo escribimos el código que la consume."*

---

#### 1.5 Lab HU1 — reescribir la carga con async/await

**EN PANTALLA: VS CODE + NAVEGADOR (Live Server) — code-along sobre el proyecto.**

> **Setup:**
> 1. Sobre el repo **_pokedex_** de C10, crear la rama **_lab11-async_**.
> 2. Partir de la app de C10 (carga con **_.then_**/**_Promise.all_**, ya con **_adaptarPokemon_**, **_crearTarjeta_**, **_render_** y el array **_pokedex_**).

> **Code-along — reescribir la carga:**
> ```javascript
> async function obtenerPokemon(idONombre) {
>   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idONombre}`);
>   return response.json();
> }
>
> async function cargarPokedex() {
>   const nombres = ["bulbasaur", "charmander", "squirtle", "pikachu", "jigglypuff", "gengar"];
>   const datos = await Promise.all(nombres.map(obtenerPokemon));   // varios en paralelo, con await
>   pokedex = datos.map(adaptarPokemon);
>   render(pokedex);
> }
>
> cargarPokedex();
> ```
> - *"**_obtenerPokemon_** es la reescritura de aquel **_fetch(...).then(r => r.json())_**: ahora con dos pasos en línea (bueno, uno y un **_return_**)."*
> - *"**_await Promise.all(...)_** es el **mismo _Promise.all_ de C10**, ahora esperado con **_await_**: espera a que terminen los 6 y devuelve el array de resultados. El **_.then_** no desapareció — lo estamos escribiendo distinto."*

> **Checkpoint 1 (~15 min):** *la rejilla carga igual que en C10, pero el código de carga ahora usa **_async/await_**. Funcionalmente idéntico, más legible.*

> **Cierre del Momento + puente al siguiente:**
> *"Ya se lee claro. Pero el buscador de C10 sigue mirando solo hacia adentro: filtra lo que YA cargamos en la rejilla. ¿Y si quiero un Pokémon que no está ahí —digamos, charizard? Para eso el buscador tiene que dejar de mirar la rejilla y salir a preguntarle a la API. Eso es lo primero del próximo momento."*

---

## MOMENTO 2 — De filtrar a buscar: por nombre, contra la API

**Tiempo:** ~30 min
**Parte del lab:** HU2 (Checkpoint 2 ~35 min)

> **OBJETIVO:** El alumno distingue **filtrar** (recortar lo local) de **buscar en la API** (pedir por nombre cualquier recurso), nombra el **parámetro de ruta** (**_/pokemon/:nombre_**, estructural y obligatorio), define socráticamente los pasos de la búsqueda ANTES de codearlos, y convierte el buscador de C10 en una búsqueda real que muestra UNA tarjeta del Pokémon encontrado (disparada con clic o Enter).

> **Patrón pedagógico de M2:** **concepto + demo en navegador → plan socrático → lab.** Antes del code-along, el grupo "construye" la solución hablada: el instructor dicta cada paso (`EL USUARIO escribe...` / `EL PROGRAMA captura...`) y pregunta qué función/método aplicar; los alumnos responden, y SOLO después se baja a código. Clave de diseño: la búsqueda se dispara con **clic/Enter**, NO en cada tecla (en C10 el filtro sí corría en cada **_input_**), porque ahora cada búsqueda es una petición de red. Se REUSA **_obtenerPokemon_**/**_adaptarPokemon_** de M1; se REEMPLAZA el listener de filtro de C10; se crea una función nueva **_mostrarResultado(pokemon)_** (no se reusa **_render([pokemon])_** de 1.2) porque queremos tener el nodo del resultado en la mano para extenderlo más adelante.

#### 2.1 Filtrar vs buscar — el parámetro de ruta

**EN PANTALLA: EXCALIDRAW — dos buscadores enfrentados: a la izquierda una lupa DENTRO del array **_pokedex_** (filtrar); a la derecha una lupa apuntando a la nube/API (buscar). (Apoyo: NAVEGADOR para la demo de la URL.)**

> **Tu apertura (engancha con el cierre de M1):**
> *"En M1 dejamos la carga escrita más legible con **_async/await_**. Pero el buscador de C10 sigue haciendo lo mismo: filtra la rejilla que YA cargamos. Si escribo 'charizard' y charizard no está en los 6 cargados, NO aparece —porque el buscador solo mira hacia adentro—. Hoy lo cambiamos: que salga a la API y pida CUALQUIER Pokémon por nombre."*

> **Tu explicación teórica precisa — filtrar vs buscar:**
> *"Son dos operaciones que se parecen porque ambas tienen una lupa, pero hacen cosas opuestas:"*
> - *"**Filtrar** recorta una lista que YA tenés en memoria. El buscador de C10 recorre **_pokedex_** (los 6 cargados) y devuelve los que matchean. Si el Pokémon NO estaba en el array, nunca aparece."*
> - *"**Buscar en la API** sale a internet a pedir un recurso por nombre, esté o no en tu memoria. Le decís al servidor 'dame charizard' y el servidor te lo devuelve."*

> **Analogía:** *"Es la diferencia entre buscar un contacto en TU agenda del celular —solo encontrás a quien guardaste— y usar el buscador de internet —encontrás a cualquiera, esté en tu agenda o no—. El buscador de la Pokédex pasa de revisar tu lista a preguntarle al mundo."*

> **Tu explicación teórica precisa — el parámetro de ruta:**
> *"Para que la API sepa QUÉ Pokémon queremos, el nombre tiene que ir EN la URL. ¿Y dónde dentro de la URL? Eso depende del tipo de parámetro."*
> - *"Lo que va incrustado en la ruta —**_/pokemon/pikachu_**— se llama **parámetro de ruta**. Define **QUÉ recurso** estás pidiendo. Es **estructural** y **obligatorio**: si no lo ponés, la URL no sirve."*
> - *"En la documentación de una API se escribe con dos puntos: **_/pokemon/:nombre_**. Esa parte con **_:_** es la variable que vos reemplazás por un valor real al hacer la llamada."*
> - *"En M5 vamos a ver el OTRO tipo de parámetro —los que van DESPUÉS del **_?_**—. Esos son opcionales y sirven para otra cosa. Hoy nos quedamos con los de ruta."*

> **Demostración en vivo (navegador):**
> 1. Abrir: **_https://pokeapi.co/api/v2/pokemon/pikachu_** → JSON de pikachu.
> 2. Cambiar **_pikachu_** por **_charizard_** en la URL → JSON DISTINTO, el de charizard.
> 3. Cambiar a **_pikachuu_** (mal escrito) → respuesta **_Not Found_** con status 404.
>
> *"Lo único que cambiamos fue el parámetro de ruta —la parte después de **_/pokemon/_**—. Eso fue suficiente para que el servidor nos devuelva un recurso distinto. Y si el nombre no existe, la API responde con un error; ese caso lo manejamos en C12."*

> **Pregunta de activación:**
> *"Si el buscador de C10 filtra los 6 Pokémon que cargué, y yo escribo 'mewtwo' (que no está entre los 6), ¿qué muestra hoy la rejilla y por qué?"*
> *(Respuesta esperada: la rejilla queda vacía — porque **_pokedex.filter(...)_** no encuentra match. Eso es lo que vamos a corregir: ahora el buscador va a salir a la API, así que cualquier Pokémon válido aparece, esté o no en la rejilla.)*

---

#### 2.2 Lab HU2 — buscar por nombre y mostrar el resultado

**EN PANTALLA: EXCALIDRAW Panel 2.2 LIBRE — el instructor escribe los 8 pasos socráticos uno por uno mientras conduce el plan (sin contenido pre-escrito, solo el marco con el título "PLAN DE LA SOLUCIÓN — HU 2: BUSCAR"). Después: VS CODE + NAVEGADOR (Live Server) para el code-along.**

> **Tu apertura:**
> *"Vamos al lab. Pero antes de tocar una línea de código, vamos a CONSTRUIR la solución hablada — pasos en voz alta, ustedes me dicen qué función o método usar en cada paso. Cuando el plan esté claro, recién bajamos a código. Verán que el código termina siendo casi una transcripción del plan."*

> **Setup del lab (HTML):**
> Agregar un botón "Buscar" junto al **_&lt;input id="buscador"&gt;_** de C09. En el HTML del proyecto:
> ```html
> <input id="buscador" type="text" placeholder="Buscar Pokémon..." />
> <button id="btn-buscar">Buscar</button>
> ```

> **Plan de la solución — definir los pasos ANTES de escribir el código:**
> *(Conducirlo socráticamente: dictás cada paso, hacés la pregunta, esperás respuesta del grupo, recién entonces avanzás al siguiente. NO proyectes el código hasta terminar el plan. **Regla del juego: cada paso se responde leyendo lo que dice la HU literalmente y sus criterios** — no son decisiones abiertas de diseño.)*
>
> **Paso 1 · EL USUARIO escribe un nombre**
>
> En el **_&lt;input id="buscador"&gt;_** que ya existe desde C09 (el **_&lt;button id="btn-buscar"&gt;_** se agregó en Setup). Punto de partida — sin pregunta socrática.
>
> ---
>
> **Paso 2 · EL USUARIO dispara la búsqueda**
>
> > 🔎 *Veamos la HU 2: dice textual **"presionando Buscar o Enter"**. La HU es explícita en los dos disparadores — no es decisión nuestra. ¿Qué eventos del DOM tenemos que escuchar para cubrirlos?*
>
> > ✅ **Respuesta esperada:** dos listeners — **_click_** sobre **_#btn-buscar_** y **_keydown_** sobre **_#buscador_** verificando **_event.key === "Enter"_**.
> > **Patrón limpio:** el listener de Enter llama a **_boton.click()_** para disparar el mismo flujo del clic — así la lógica vive en UN solo lugar.
>
> ---
>
> **Paso 3 · EL PROGRAMA lee el texto del input**
>
> > 🔎 *La HU dice: **"el buscador ignora una búsqueda vacía"**. ¿Cómo cumplimos ese criterio?*
>
> > ✅ **Respuesta esperada:** leer **_buscador.value_**, aplicar **_.trim()_** para descartar espacios accidentales — un usuario que solo apretó la barra espaciadora no quiere buscar. Si queda cadena vacía, salir sin tocar la API:
> > **_const nombre = buscador.value.trim(); if (nombre !== "") { ... }_**.
> > El **_.toLowerCase()_** lo aplicamos más adentro (en **_buscarPokemon_**) porque eso es contrato técnico con la API, no criterio del usuario.
>
> ---
>
> **Paso 4 · EL PROGRAMA le pide a la API el Pokémon con ese nombre**
>
> > 🔎 *La HU dice **"consulta la API"** (ya no filtra local). El nombre tipeado tiene que ir EN la URL. ¿Cómo se llama esa parte de la URL y cómo se arma la URL completa?*
>
> > ✅ **Respuesta esperada:** parámetro de ruta (**_/pokemon/:nombre_**, lo que vimos en 2.1).
> > URL completa: **_https://pokeapi.co/api/v2/pokemon/{nombre}_**.
> > Se arma con template literal: backticks + **_${nombre}_**.
>
> ---
>
> **Paso 5 · EL PROGRAMA maneja el fetch**
>
> > 🔎 *La HU1 ya nos dejó funcionando **_obtenerPokemon(idONombre)_** — una función **_async_** que hace exactamente ese **_fetch_** con **_await_**. ¿La reusamos o escribimos otra desde cero?*
>
> > ✅ **Respuesta esperada:** REUSAR. La envolvemos en una función nueva **_buscarPokemon(nombre)_** marcada como **_async_**, que llama a **_obtenerPokemon(nombre.toLowerCase())_** y devuelve el resultado adaptado.
> > El **_.toLowerCase()_** va acá porque es el contrato técnico con la API — minúsculas obligatorias.
>
> ---
>
> **Paso 6 · EL PROGRAMA convierte la respuesta cruda a la forma limpia**
>
> > 🔎 *Para usar **_crearTarjeta_** (de C09), la HU implica que el Pokémon traído tiene que tener la misma forma que los de la rejilla. ¿Con qué pieza traducimos y dónde está?*
>
> > ✅ **Respuesta esperada:** **_adaptarPokemon(data)_** — ya existe desde C10, traduce **_name_**/**_sprites.front_default_**/**_types[].type.name_** a **_{nombre, imagen, tipos}_**. NO se toca.
>
> ---
>
> **Paso 7 · EL PROGRAMA muestra el Pokémon encontrado**
>
> > 🔎 *La HU dice **"muestra ese Pokémon"** (singular). Si reusamos **_render([pokemon])_** lo pintaríamos como una rejilla de 1 — técnicamente funciona. ¿Pero el criterio pide una rejilla, o pide UNA tarjeta?*
>
> > ✅ **Respuesta esperada:** una tarjeta — la HU lo dice en singular ("ese Pokémon"). Función nueva **_mostrarResultado(pokemon)_** con dos líneas:
> > (a) **_contenedor.innerHTML = ""_** para limpiar lo anterior;
> > (b) **_contenedor.appendChild(crearTarjeta(pokemon))_** para colgar SOLO esa tarjeta.
> > Reusa **_crearTarjeta_** de C09 sin tocarla.
>
> ---
>
> **Paso 8 · EL PROGRAMA se rompe si el nombre no existe**
>
> > 🔎 *La sección "Instrucciones de Entrega" del lab dice textual: **"Si buscas un nombre que no existe (ej. 'pikachuu'), la app fallará feo. Eso es a propósito — en C12 lo manejas con try/catch"**. ¿Hoy hacemos algo al respecto?*
>
> > ✅ **Respuesta esperada:** NADA. La API devuelve 404; **_adaptarPokemon_** falla porque no encuentra **_.types_** en el body de error.
> > Es el cliffhanger pedagógico que abre C12 — el alumno TIENE que ver que se rompe para apreciar la solución con **_try/catch_**.

> **Tu cierre del plan (antes de bajar a código):**
> *"Ocho pasos. Casi todos se respondieron leyendo la HU o un criterio —no inventamos decisiones de diseño—. Ese reflejo lo van a usar siempre que les llegue una tarea: el código sale del enunciado del trabajo, no de la cabeza del programador. Ahora bajamos esto a código."*

> **Code-along (HU2):**
> ```javascript
> const boton = document.getElementById("btn-buscar");
>
> // 1. Centraliza la búsqueda — reusa obtenerPokemon de HU1            ← pasos 4 + 5 + 6
> async function buscarPokemon(nombre) {
>   const data = await obtenerPokemon(nombre.toLowerCase());   // .toLowerCase: contrato con la API
>   return adaptarPokemon(data);
> }
>
> // 2. Muestra UNA tarjeta en el contenedor                            ← paso 7
> function mostrarResultado(pokemon) {
>   contenedor.innerHTML = "";
>   contenedor.appendChild(crearTarjeta(pokemon));   // reusa C09, sin tocar
> }
>
> // 3. Orquesta: trae el Pokémon y lo muestra                          ← unión de 5 + 6 + 7
> async function mostrarBusqueda(nombre) {
>   const pokemon = await buscarPokemon(nombre);
>   mostrarResultado(pokemon);
> }
>
> // 4. Listener del clic en "Buscar" — cubre el criterio "pulsar Buscar" ← paso 2 + 3
> boton.addEventListener("click", function () {
>   const nombre = buscador.value.trim();
>   if (nombre !== "") mostrarBusqueda(nombre);     // paso 3: ignorar vacío
> });
>
> // 5. Listener de Enter — cubre el criterio "presionando Enter"         ← paso 2
> buscador.addEventListener("keydown", function (event) {
>   if (event.key === "Enter") boton.click();        // delega al mismo flujo del clic
> });
> ```
> - *"Cada bloque cubre un grupo de pasos del plan —está anotado a la derecha—, y cada listener corresponde a uno de los dos disparadores que pide la HU. El de Enter llama a **_boton.click()_** para que TODA la lógica viva en un solo lugar: el listener de **_click_**."*
> - *"Importante: el listener de filtro de C10 (**_buscador.addEventListener('input', ...)_**) **se va**. Pueden dejarlo comentado si quieren mirarlo, pero ya no aplica — el criterio de la HU cambió de 'filtrar' a 'consultar la API'."*

> **Checkpoint 2 (~35 min):** *escribir "charizard" (que NO estaba entre los 6 de la rejilla), pulsar Buscar o Enter → la rejilla se reemplaza por la tarjeta de charizard, traída en vivo de la API. Verificar también el cliffhanger: escribir "pikachuu" (mal escrito) → la consola tira error; eso queda así a propósito.*

> **Cierre del Momento + puente al siguiente:**
> *"Listo: el buscador ya pide a la API y muestra lo que encuentra. Pero noten dos cosas que pasaron: la rejilla de 6 desapareció al mostrar el resultado, y el Pokémon nuevo que encontré tampoco se sumó a ningún lado —si busco otro, vuelvo a perderlo—. Yo quiero **quedarme** con los Pokémon que voy encontrando. Quiero CAPTURARLOS. Eso es lo primero del siguiente Momento."*

---

## MOMENTO 3 — Capturar: el estado de la app crece

**Tiempo:** ~30 min (POST-RECESO)
**Parte del lab:** HU3 (Checkpoint 3 ~55 min)

> **OBJETIVO:** El alumno agrega un botón **Capturar** al resultado de búsqueda que **suma** el Pokémon al array **_pokedex_** (con guardia anti-duplicado usando **_.some()_**) y re-renderiza la rejilla con el nuevo elemento. Distingue "lo que se ve" (DOM) de "lo que está guardado" (array), y nombra ese array como **estado** justo en el paso donde el usuario lo hace crecer.

> **Patrón pedagógico de M3:** **concepto + analogía → plan socrático → lab.** Misma estructura que M2. Acá hay un giro clave: el concepto **estado** NO se introduce en un sub-punto teórico aparte — se nombra DENTRO del plan socrático, en el paso donde **_pokedex.push(pokemon)_** lo hace crecer, porque ese es el momento donde el alumno SIENTE el concepto (un array que cambia → una vista que se actualiza). Otras decisiones de diseño: **_crearTarjeta_** (C09) NO se toca; el botón Capturar se **cuelga** al nodo del resultado con **_appendChild_** —así aparece SOLO en la búsqueda, NUNCA en las tarjetas de la rejilla—. El método para chequear duplicados es **_.some()_** (booleano), no **_.find()_** (devuelve el elemento) ni **_.filter()_** (devuelve array) — el alumno tiene que repasar el banco de métodos de C06 y elegir el correcto.

#### 3.1 La acción de capturar y el problema del duplicado

**EN PANTALLA: NADA proyectado en Excalidraw — la explicación de "capturar + duplicado" se conduce verbal con la analogía del álbum de figuritas. El instructor puede señalar VS CODE para anclar el código del lab (el array _pokedex_ y la rejilla actual) mientras explica.**

> **Tu apertura (post-receso, engancha con el cierre de M2):**
> *"Volvemos. Recapitulemos rápido lo que dejamos antes del receso: el buscador encuentra Pokémon en la API y muestra una tarjeta. Pero pasaron dos cosas que no nos sirven: al mostrar el resultado, la rejilla original desapareció; y si busco OTRO Pokémon, pierdo el primero. Eso NO es una Pokédex — es un display de búsqueda. Queremos lo que pasa en el juego: que el alumno **capture** al Pokémon que encontró y lo sume a SU colección. Eso es M3."*

> **Tu explicación teórica precisa — qué significa capturar acá:**
> *"Capturar es una acción del usuario que tiene un efecto concreto en la app: tomar el Pokémon que está viendo en el resultado de búsqueda y **agregarlo** al array que pinta la rejilla."*
> - *"Cuando eso pasa, el array crece: de 6 a 7. Vuelvo a buscar otro y capturarlo: crece de 7 a 8. Y así sucesivamente."*
> - *"Hay un detalle a resolver: si ya capturé charizard, lo busco otra vez y le doy capturar de nuevo, NO quiero verlo dos veces. El programa tiene que verificar 'ya está, no agrego' antes de sumarlo. Esa verificación es lo que llamaremos **guardia anti-duplicado**."*

> **Analogía:** *"Es exactamente lo del álbum de figuritas. Cuando comprás un sobre y sale una figurita, antes de pegarla en el álbum te fijás: '¿ya la tengo?'. Si NO la tenés, la pegás. Si YA la tenés, la guardás en repetidas (o la tirás). Lo que NO hacés es pegar dos veces la misma. Hoy programamos esa misma lógica — el **_.some()_** de JavaScript es nuestro '¿ya la tengo?'."*

> **Pregunta de activación:**
> *"En M2, cada vez que mostramos un resultado hacemos **_contenedor.innerHTML = ""_** para limpiar la rejilla. Pregunta: ¿eso también borra el array **_pokedex_** que tenemos en memoria desde C10, o solo borra lo que se ve?"*
> *(Respuesta esperada: SOLO borra lo que se ve. El array **_pokedex_** sigue intacto en memoria — **_innerHTML_** toca el DOM, no las variables JS. Esa distinción entre "lo que se ve" (vista) y "lo que está guardado" (array/estado) es lo que vamos a aprovechar acá: como el array sigue ahí, podemos agregarle el Pokémon nuevo y volver a pintar todo desde cero con **_render_**.)*

---

#### 3.2 Lab HU3 — capturar sin duplicar

**EN PANTALLA: EXCALIDRAW Panel 3.2 LIBRE — el instructor escribe los 8 pasos socráticos uno por uno mientras conduce el plan (sin contenido pre-escrito, solo el marco con el título "PLAN DE LA SOLUCIÓN — HU 3: CAPTURAR"). Después: VS CODE + NAVEGADOR (Live Server) para el code-along.**

> **Tu apertura:**
> *"Mismo patrón de M2: primero hablamos los pasos, después bajamos a código. Hoy hay un concepto que se les va a aparecer en uno de los pasos y lo voy a nombrar JUSTO ahí —no antes—. Quiero que vean dónde nace antes de ponerle nombre."*

> **Plan de la solución — definir los pasos ANTES de escribir el código:**
> *(Conducirlo socráticamente: dictás cada paso, hacés la pregunta, esperás respuesta del grupo, recién entonces avanzás. NO proyectes el código hasta terminar el plan. **Regla del juego: cada paso se responde leyendo la HU 3 literalmente y sus tres criterios** — no son decisiones abiertas.)*
>
> **Paso 1 · EL USUARIO ya tiene el resultado de búsqueda en pantalla**
>
> La tarjeta del Pokémon buscado en M2 / HU2 está visible. Punto de partida — sin pregunta socrática.
>
> ---
>
> **Paso 2 · EL USUARIO ve un botón "Capturar" en esa tarjeta**
>
> > 🔎 *Veamos la HU 3: dice textual **"La tarjeta del Pokémon buscado tiene un botón Capturar"**. La HU es explícita en el "buscado" — no dice "todas las tarjetas". ¿Dónde concretamente metemos el botón en el código: dentro de **_crearTarjeta_** (que la usan AMBAS, rejilla y búsqueda) o solo en la tarjeta del resultado?*
>
> > ✅ **Respuesta esperada:** SOLO en la del resultado. Si lo metemos en **_crearTarjeta_**, las 6 tarjetas de la rejilla también lo tendrían — y la HU dice "del Pokémon **buscado**".
> > **Implicación:** NO se toca **_crearTarjeta_**. Se crea el botón aparte y se cuelga con **_appendChild_** al nodo que devuelve **_crearTarjeta(pokemon)_** en **_mostrarResultado_**.
>
> ---
>
> **Paso 3 · EL PROGRAMA crea el botón desde JavaScript**
>
> > 🔎 *¿Con qué función nativa del DOM creamos un **_&lt;button&gt;_** desde JS? ¿Qué le ponemos como texto?*
>
> > ✅ **Respuesta esperada:** **_document.createElement("button")_** —patrón de C09—, luego **_boton.textContent = "⚡ Capturar"_**, opcionalmente **_boton.className = "..."_** para estilo.
>
> ---
>
> **Paso 4 · EL PROGRAMA escucha el clic en ese botón**
>
> > 🔎 *¿Con qué función? ¿Qué hace adentro del callback?*
>
> > ✅ **Respuesta esperada:** **_boton.addEventListener("click", () => capturar(pokemon))_**. Adentro llama a **_capturar(pokemon)_** —función nueva que escribiremos abajo—, pasándole el **_pokemon_** del resultado.
> > **Detalle:** la función recibe el objeto, no lo vuelve a buscar.
>
> ---
>
> **Paso 5 · EL PROGRAMA chequea si el Pokémon YA está en pokedex**
>
> > 🔎 *La HU dice criterio textual: **"Si el Pokémon ya estaba en la Pokédex, no se duplica"**. Repasemos C06: **_.map_** (transforma), **_.filter_** (recorta), **_.forEach_** (recorre), **_.find_** (devuelve el elemento), **_.some_** (devuelve true/false). ¿Cuál cumple el criterio con menos gasto?*
>
> > ✅ **Respuesta esperada:** **_.some()_**. La HU solo pide saber SI ESTÁ —respuesta booleana—; no pide el elemento ni una sublista.
> > **_.find_** devolvería el objeto (gasto innecesario); **_.filter_** devolvería un array (peor).
> > **Sintaxis:** **_pokedex.some(p => p.nombre === pokemon.nombre)_**.
>
> ---
>
> **Paso 6 · EL PROGRAMA agrega el Pokémon al array si pasó la guardia**
>
> > 🔎 *¿Con qué método del array?*
>
> > ✅ **Respuesta esperada:** **_pokedex.push(pokemon)_** adentro del **_if_**.
> > **⚡ Acá nombramos algo importante:** este array **_pokedex_** que viene desde C10 ya no es "una variable más". Pasó a ser el **ESTADO** de la app — el conjunto de datos que define lo que se ve en este momento.
> > Cuando el usuario captura, el estado crece; la vista lo reflejará en el paso 7. Esa idea —estado cambia, vista se actualiza— es la columna vertebral de toda app interactiva y la base de frameworks como React. **Lo nombramos acá porque acá nace.**
>
> ---
>
> **Paso 7 · EL PROGRAMA vuelve a pintar la rejilla**
>
> > 🔎 *La HU dice criterio: **"el Pokémon se agrega a la rejilla (no reemplaza a los demás)"**. ¿Cómo cumplimos eso?*
>
> > ✅ **Respuesta esperada:** llamar a **_render(pokedex)_** —reusa C10— DESPUÉS del **_if_**.
> > Como **_pokedex_** ya tiene el nuevo elemento, la rejilla se pinta completa con TODOS los previos + el capturado. NO usamos funciones que reemplacen un nodo específico — usar **_render(pokedex)_** garantiza el "agregar a la rejilla" del criterio.
>
> ---
>
> **Paso 8 · EL PROGRAMA limpia el input para la próxima búsqueda**
>
> > 🔎 *No es criterio explícito de la HU, pero es detalle de UX: el usuario ya capturó, la búsqueda cumplió su función. ¿Qué hacemos con el texto que dejó en el input?*
>
> > ✅ **Respuesta esperada:** limpiarlo con **_buscador.value = ""_**. Al final de **_capturar_**, fuera del **_if_** — siempre se limpia, haya o no agregado. Deja la app lista para la siguiente búsqueda.

> **Tu cierre del plan (antes de bajar a código):**
> *"Ocho pasos. Casi todos respondidos leyendo la HU y sus tres criterios —no inventamos decisiones de diseño—. Y notaron lo que apareció en el paso 6: el array **_pokedex_** pasó a tener un nombre, **estado**. No lo introduje en un sub-punto teórico aparte porque no se siente igual: se siente cuando ven el array crecer y la rejilla actualizarse sola. Ahora sí, bajemos esto a código."*

> **Code-along (HU3):**
> ```javascript
> // 1. La función nueva: capturar — guardia + push + render + limpiar input   ← pasos 5 + 6 + 7 + 8
> function capturar(pokemon) {
>   if (!pokedex.some(p => p.nombre === pokemon.nombre)) {   // paso 5: guardia anti-duplicado
>     pokedex.push(pokemon);                                  // paso 6: estado crece
>   }
>   render(pokedex);                                          // paso 7: vista refleja
>   buscador.value = "";                                      // paso 8: input listo para la siguiente
> }
>
> // 2. Extendemos mostrarResultado (de HU2) para incluir el botón Capturar    ← pasos 2 + 3 + 4
> function mostrarResultado(pokemon) {
>   const tarjeta = crearTarjeta(pokemon);              // reusa C09 sin tocarla
>
>   const boton = document.createElement("button");      // paso 3: crear nodo
>   boton.textContent = "⚡ Capturar";
>   boton.className = "mt-2 w-full bg-yellow-400 font-semibold rounded-lg py-1 hover:bg-yellow-500";
>   boton.addEventListener("click", () => capturar(pokemon));    // paso 4: escuchar clic
>   tarjeta.appendChild(boton);                          // paso 2: cuelga al NODO del resultado
>
>   contenedor.innerHTML = "";                           // limpia DESPUÉS de armar el nodo
>   contenedor.appendChild(tarjeta);                     // (orden anti-flicker)
> }
> ```
> - *"**_capturar_** cumple los criterios de la HU línea por línea: la guardia con **_.some()_** para el 'no se duplica', el **_push_** para 'se agrega', el **_render(pokedex)_** para 'no reemplaza a los demás' (pinta TODA la rejilla con el nuevo), y el **_buscador.value = ""_** como detalle de UX."*
> - *"**_mostrarResultado_** ya existía desde HU2; la EXTENDEMOS. Ojo al orden nuevo: ahora armamos el nodo COMPLETO primero (tarjeta + botón colgado), y RECIÉN AHÍ limpiamos el contenedor y lo metemos. Eso evita que la pantalla parpadee entre la limpieza y el render del nuevo nodo."*
> - *"Punto clave del diseño: el botón se cuelga a **_tarjeta_**, NO a **_contenedor_**. Así el botón viaja CON la tarjeta y nunca contamina las tarjetas de la rejilla — que es exactamente lo que pide la HU con su 'del Pokémon buscado'."*

> **Checkpoint 3 (~55 min):** *(a) buscar "charizard" → aparece la tarjeta con botón "Capturar"; (b) clic en Capturar → la tarjeta de búsqueda se reemplaza por la rejilla, que ahora incluye charizard junto a los 6 originales; (c) buscar "charizard" otra vez y darle Capturar de nuevo → la rejilla NO se duplica, charizard sigue una sola vez.*

> **Cierre del Momento + puente al siguiente:**
> *"Listo: ya capturo, no duplico, y la rejilla refleja mi estado actual. Pero noten algo cuando aparece la tarjeta del resultado de búsqueda: solo vemos la foto, el nombre y los tipos. Eso es lo que nos da **_adaptarPokemon_**. Pero la API en realidad nos manda muchísimo más: altura, peso, habilidades, **estadísticas** (HP, ataque, defensa). Si voy a CAPTURAR un Pokémon a mi Pokédex, quiero ver sus stats antes de decidir. Vamos a exprimir más la respuesta de la API. Eso es M4."*

---

## MOMENTO 4 — Explorar la respuesta: las estadísticas

**Tiempo:** ~30 min
**Parte del lab:** HU4 (Checkpoint 4 ~75 min)

> **OBJETIVO:** El alumno entiende que la respuesta de la API trae **mucho más** de lo que muestra hoy, **navega el JSON anidado** para extraer las estadísticas (**_data.stats_**), **extiende** **_adaptarPokemon_** con un campo **_stats_**, y agrega las stats al nodo del resultado de búsqueda (sin tocar **_crearTarjeta_**).

> **Patrón pedagógico de M4:** **concepto + demo en navegador → plan socrático → lab.** Misma estructura que M2 y M3. La demo del JSON crudo en el navegador es **central**: el alumno tiene que VER que la respuesta de la API es enorme antes de creer que las stats están ahí gratis. Decisión técnica clave: las stats se agregan en **_adaptarPokemon_** (extender, no crear función nueva) y se renderizan **colgadas al nodo del resultado**, igual que el botón Capturar de M3 — **_crearTarjeta_** (C09) sigue intacta porque la rejilla NO muestra stats.

#### 4.1 Explorar la respuesta — la API trae más de lo que usamos

**EN PANTALLA: NAVEGADOR — abrir **_https://pokeapi.co/api/v2/pokemon/charizard_** y ver el JSON completo. (Apoyo: EXCALIDRAW — el árbol del JSON con todas las ramas, resaltando **_stats[].stat.name_** / **_stats[].base_stat_**.)**

> **Tu apertura (engancha con el cierre de M3):**
> *"Quedamos en que ya capturo Pokémon, pero la tarjeta del resultado de búsqueda muestra solo imagen, nombre y tipos —tres datos—. Si voy a meter un Pokémon a mi Pokédex, quiero ver sus stats para decidir si vale la pena. ¿De dónde saco esas stats? De la propia API: lo que pasa es que las venimos ignorando."*

> **Tu explicación teórica precisa:**
> *"Cada vez que llamamos a la PokeAPI con **_/pokemon/{nombre}_**, el servidor nos devuelve una **ficha completa** del Pokémon — no solo lo que usamos. Hasta ahora extraíamos **_name_**, **_sprites.front_default_** y **_types[].type.name_**. Eso es como leer la primera línea de un libro de 300 páginas."*
> - *"En esa misma respuesta vienen también **_height_**, **_weight_**, **_abilities_**, **_moves_**, **_stats_**, **_forms_**, **_held_items_**... decenas de campos."*
> - *"Esto NO es accidente: las APIs REST devuelven la representación completa del recurso por diseño, para servir a muchos clientes distintos con una sola respuesta. El que SIRVE muchos a la vez gana en eficiencia; el que CONSUME (nosotros) navega el JSON y se queda con lo que necesita."*
> - *"Hoy nos llevamos las **stats** —HP, ataque, defensa, etcétera—, porque la HU las pide para decidir si capturar."*

> **Demostración en vivo (navegador):**
> 1. Abrir **_https://pokeapi.co/api/v2/pokemon/charizard_** → JSON pelado.
> 2. Hacer scroll y nombrar en voz alta los campos: *"name acá; sprites acá; types acá... pero también height (altura), weight (peso), abilities (habilidades), moves (movimientos)... y acá: stats."*
> 3. Hacer zoom en **_data.stats_**: es un **array** de 6 elementos. Abrir el primero: **_{ base_stat: 78, effort: 0, stat: { name: "hp", url: "..." } }_**.
> - *"Miren la estructura: array de objetos. Cada objeto tiene **_base_stat_** (el número) y **_stat.name_** (el nombre — anidado un nivel más). Esa forma anidada es lo que vamos a aplanar."*

> **Analogía:** *"Cuando compran un electrodoméstico —una heladera, un celular—, la caja trae una **ficha técnica gigante**: voltaje, dimensiones, consumo, materiales, garantía... 30 datos. ¿Leen los 30? No: agarran los dos o tres que les importan. La respuesta de la API es esa ficha; el dev es el comprador que sabe qué dato buscar."*

> **Pregunta de activación:**
> *"Si la API devuelve 30 campos por Pokémon y nosotros usamos 4 (nombre, imagen, tipos, y ahora stats), ¿quién decide qué se muestra en la app: la API o nuestro código?"*
> *(Respuesta esperada: el código. La API ofrece TODO, neutral; nuestro **_adaptarPokemon_** es el filtro que decide qué entra al objeto limpio que usa la app. Por eso adaptarPokemon es el lugar correcto para agregar el campo **_stats_** — es donde decidimos qué pasa de la API a nuestra forma.)*

---

#### 4.2 Lab HU4 — stats en el resultado de búsqueda

**EN PANTALLA: EXCALIDRAW Panel 4.2 LIBRE — el instructor escribe los 7 pasos socráticos uno por uno mientras conduce el plan (sin contenido pre-escrito, solo el marco con el título "PLAN DE LA SOLUCIÓN — HU 4: STATS"). Después: VS CODE + NAVEGADOR (Live Server) para el code-along.**

> **Tu apertura:**
> *"Mismo patrón: plan socrático primero, código después. La HU 4 es corta y tiene dos criterios — vamos a ver cómo cada paso del plan sale de uno de esos criterios."*

> **Plan de la solución — definir los pasos ANTES de escribir el código:**
> *(Conducirlo socráticamente. **Regla del juego: cada paso se responde leyendo la HU 4 y sus dos criterios** — no son decisiones abiertas.)*
>
> **Paso 1 · EL USUARIO busca un Pokémon (HU2) y ve aparecer la tarjeta del resultado (HU2/HU3)**
>
> Ahora con stats abajo. Punto de partida — sin pregunta socrática.
>
> ---
>
> **Paso 2 · EL PROGRAMA ya recibe el JSON crudo de la API**
>
> > 🔎 *La HU 4 dice criterio: **"Las estadísticas salen de los datos que ya devuelve la API (no se inventan)"**. Entonces no necesitamos hacer otro fetch — los datos están en la respuesta que ya manejamos. ¿Dónde concretamente, dentro del objeto que la API devuelve?*
>
> > ✅ **Respuesta esperada:** en **_data.stats_** — un array de objetos con la forma **_{ base_stat: N, stat: { name: "hp" }, effort: 0 }_**. La vimos en la demo.
> > **Acceso anidado:** **_data.stats[0].stat.name_** / **_data.stats[0].base_stat_**.
>
> ---
>
> **Paso 3 · EL PROGRAMA traduce esos datos crudos a la forma limpia**
>
> > 🔎 *Ya tenemos **_adaptarPokemon_** que traduce **_name_**/**_sprites_**/**_types_**. ¿Extendemos esa función con un campo **_stats_**, o creamos una función aparte solo para las stats?*
>
> > ✅ **Respuesta esperada:** EXTENDER **_adaptarPokemon_**. Es el único lugar donde decidimos qué viene de la API hacia nuestra forma limpia — separar las stats en otra función rompería esa coherencia. Solo se agrega una línea más al objeto que devuelve.
>
> ---
>
> **Paso 4 · EL PROGRAMA aplana el array anidado data.stats**
>
> > 🔎 *Cada elemento viene con **_base_stat_** y **_stat.name_**. Queremos un array más simple: **_[{ nombre: "hp", valor: 78 }, ...]_**. ¿Qué método de array de C06 convierte cada elemento en otro?*
>
> > ✅ **Respuesta esperada:** **_.map()_**. Cada **_s_** del array se transforma en **_{ nombre: s.stat.name, valor: s.base_stat }_**.
> > Mismo patrón que usamos en C10 con **_types[].type.name_**.
>
> ---
>
> **Paso 5 · EL PROGRAMA muestra las stats en pantalla**
>
> > 🔎 *La HU 4 dice criterio: **"La tarjeta del Pokémon buscado muestra sus estadísticas"**. Igual que el botón Capturar de HU3: ¿metemos las stats dentro de **_crearTarjeta_** (que pinta también las de la rejilla) o las colgamos solo al nodo del resultado?*
>
> > ✅ **Respuesta esperada:** SOLO al nodo del resultado. La HU dice "del Pokémon **buscado**" —no "de todas las tarjetas"—.
> > **Mismo patrón que en HU3:** **_crearTarjeta_** NO se toca; las stats se cuelgan con **_appendChild_** al nodo que devuelve, en **_mostrarResultado_**.
>
> ---
>
> **Paso 6 · EL PROGRAMA arma el HTML de la lista de stats**
>
> > 🔎 *Tenemos un array de objetos (**_pokemon.stats_**); queremos un bloque HTML con UNA línea por stat. ¿Cómo combinamos **_.map_** para generar las líneas con **_.join_** para concatenarlas?*
>
> > ✅ **Respuesta esperada:** **_pokemon.stats.map(s => "&lt;div&gt;...${s.nombre}...${s.valor}...&lt;/div&gt;").join("")_**.
> > El **_.map_** transforma cada stat en su string HTML; el **_.join("")_** los pega sin separador. El resultado va a **_stats.innerHTML_**.
>
> ---
>
> **Paso 7 · EL PROGRAMA cuelga el bloque de stats al nodo de la tarjeta**
>
> > 🔎 *¿Con qué función del DOM, y en qué orden relativo al botón Capturar de HU3?*
>
> > ✅ **Respuesta esperada:** **_appendChild_**. **Orden:** PRIMERO se cuelgan las stats, DESPUÉS el botón Capturar.
> > Visualmente la tarjeta queda: imagen → tipos → stats → botón. Es lo natural: ver primero los datos, decidir, después capturar.

> **Tu cierre del plan (antes de bajar a código):**
> *"Siete pasos. Los criterios de la HU 4 nos dieron las dos decisiones grandes: 'salen de los datos que ya devuelve la API' nos llevó a extender **_adaptarPokemon_**; 'del Pokémon buscado' nos llevó a colgar las stats al nodo del resultado, no a **_crearTarjeta_**. El resto es navegación de JSON y **_.map_** — cosas que ya saben."*

> **Code-along (HU4):**
> ```javascript
> // 1. Extender adaptarPokemon con el campo stats                       ← pasos 2 + 3 + 4
> function adaptarPokemon(data) {
>   return {
>     nombre: data.name,
>     imagen: data.sprites?.front_default ?? "https://via.placeholder.com/96?text=?",
>     tipos:  data.types.map(t => t.type.name),
>     stats:  data.stats.map(s => ({ nombre: s.stat.name, valor: s.base_stat }))   // ← nuevo
>     // data.stats = [{ base_stat: 35, stat: { name: "hp" } }, ...]
>   };
> }
>
> // 2. Extender mostrarResultado para pintar las stats antes del botón  ← pasos 5 + 6 + 7
> function mostrarResultado(pokemon) {
>   const tarjeta = crearTarjeta(pokemon);
>
>   // bloque de stats — solo en el resultado de búsqueda
>   const stats = document.createElement("div");
>   stats.className = "mt-2 text-left text-xs space-y-1";
>   stats.innerHTML = pokemon.stats.map(s => `
>     <div class="flex justify-between"><span class="capitalize">${s.nombre}</span><span class="font-semibold">${s.valor}</span></div>
>   `).join("");
>   tarjeta.appendChild(stats);                       // PRIMERO las stats
>
>   const boton = document.createElement("button");
>   boton.textContent = "⚡ Capturar";
>   boton.className = "mt-2 w-full bg-yellow-400 font-semibold rounded-lg py-1 hover:bg-yellow-500";
>   boton.addEventListener("click", () => capturar(pokemon));
>   tarjeta.appendChild(boton);                       // DESPUÉS el botón
>
>   contenedor.innerHTML = "";
>   contenedor.appendChild(tarjeta);
> }
> ```
> - *"Una línea nueva en **_adaptarPokemon_** —**_stats: data.stats.map(...)_**— y todo el bloque del adapter sigue siendo el ÚNICO lugar donde traducimos de la forma de la API a la nuestra."*
> - *"En **_mostrarResultado_**, las stats se cuelgan ANTES que el botón: queremos que el alumno vea imagen → tipos → stats → botón. El botón es la última cosa porque es la acción que toma después de leer las stats."*
> - *"**_crearTarjeta_** de C09: intacta. Sigue armando la tarjeta sin stats, así la rejilla queda igual que antes y SOLO el resultado de búsqueda muestra el detalle."*

> **Checkpoint 4 (~75 min):** *buscar "charizard" → su tarjeta muestra imagen + nombre + tipos + **bloque de stats** (hp, attack, defense, special-attack, special-defense, speed) + botón Capturar. Capturar a charizard → vuelve la rejilla con charizard incluido, **sin stats** (es lo correcto — la rejilla usa **_crearTarjeta_** sin extensiones).*

> **Cierre del Momento + puente al siguiente:**
> *"Listo: ahora veo las stats antes de decidir si capturo. Pero noten un detalle: para meter cada Pokémon a la Pokédex tengo que tipear su nombre y buscarlo uno por uno. Si quiero explorar la Pokédex en serio —digamos, ver los primeros 50 sin escribir 50 nombres— necesito otra forma de pedir datos: NO de a uno, sino de a páginas. Y para eso, otro tipo de parámetro en la URL. Eso es lo último del día."*

---

## MOMENTO 5 — Paginación + cierre: parámetros de consulta

**Tiempo:** ~30 min (último Momento — no hay puente al siguiente, pero sí puente a **C12**)
**Parte del lab:** HU5 (Checkpoint 5 ~95 min) + Cierre de clase

> **OBJETIVO:** El alumno distingue **parámetro de ruta** (**_/pokemon/pikachu_** — QUÉ recurso, obligatorio, visto en M2) de **parámetros de consulta** (**_?limit=12&offset=0_** — CÓMO pedir, opcionales), implementa un botón **"Cargar más"** que pagina la lista (subiendo **_offset_**) sin duplicar, y cierra la clase con la tabla resumen del día y el cliffhanger explícito que abre C12 (el error del nombre inexistente que **_try/catch_** resolverá).

> **Patrón pedagógico de M5:** **concepto + demo en navegador → plan socrático → lab → cierre de clase.** La demo es crucial: el alumno tiene que VER en el navegador cómo la misma URL base devuelve cosas distintas según los query params. HU5 reusa todo lo aprendido: **_Promise.all_** (C10), **_.some()_** (HU3), **_async/await_** (HU1), **_adaptarPokemon_** (HU4-extendido). Para el cierre, no se aprende nada nuevo: se nombra el arco del módulo y el cliffhanger (404 = **_try/catch_** = C12).

#### 5.1 Parámetro de ruta vs parámetro de consulta

**EN PANTALLA: NAVEGADOR — abrir las URLs reales para mostrar la diferencia (ver demo abajo). (Apoyo: EXCALIDRAW — dos URLs en paralelo etiquetadas RUTA y CONSULTA, con cada parte señalada; abajo, tres páginas (offset 0 / 12 / 24) y el botón "Cargar más" trayendo la siguiente.)**

> **Tu apertura (engancha con el cierre de M4):**
> *"En M2 buscamos UN Pokémon por nombre con **_/pokemon/pikachu_**. Eso fue un parámetro de **ruta**: define QUÉ recurso. Hoy queremos otra cosa: pedir una **lista** de Pokémon sin escribir cada nombre. Para eso aparece otro tipo de parámetro: el de **consulta**, lo que va DESPUÉS del **_?_** en la URL."*

> **Tu explicación teórica precisa:**
> *"Los dos tipos de parámetro viven en la URL pero sirven para cosas distintas:"*
> - *"**Parámetro de ruta** — va INCRUSTADO en la ruta: **_/pokemon/pikachu_**. Define **QUÉ recurso** estás pidiendo. Es **estructural** y **obligatorio**: sin él, la URL no apunta a nada. Lo vimos en M2."*
> - *"**Parámetro de consulta** (query param) — va DESPUÉS del **_?_**: **_/pokemon?limit=12_**. Tiene la forma **_clave=valor_** y se pueden encadenar con **_&_**: **_?limit=12&offset=0_**. Es **opcional**: si no lo ponés, la API usa defaults. Sirve para **filtrar, ordenar, buscar o paginar**."*
>
> ```
> /pokemon/pikachu              → parámetro de RUTA       (QUÉ recurso)
> /pokemon?limit=12&offset=0    → parámetros de CONSULTA  (CÓMO pedirlo)
>          ↑clave=valor & clave=valor
> ```

> **Demostración en vivo (navegador) — la misma URL base, tres respuestas distintas:**
> 1. Abrir **_https://pokeapi.co/api/v2/pokemon_** (sin nada después) → JSON con un campo **_results_** que tiene un array de 20 Pokémon (default de la API), cada uno con **_{ name, url }_**.
> 2. Cambiar a **_https://pokeapi.co/api/v2/pokemon?limit=12&offset=0_** → ahora solo 12, los primeros.
> 3. Cambiar a **_https://pokeapi.co/api/v2/pokemon?limit=12&offset=12_** → otros 12, los que siguen.
> - *"Misma URL base, mismo endpoint. Lo único que cambia son los query params, y el servidor nos devuelve un grupo distinto. Eso es **paginación**: **_limit_** dice cuántos por página, **_offset_** dice desde qué número arrancar. Subir el **_offset_** da la siguiente página."*

> **Detalle técnico (al hacer la demo):**
> *"Noten que el endpoint de **lista** (**_/pokemon_**) devuelve solo **_name_** + **_url_** de cada Pokémon — NO los datos completos. Si queremos pintar la tarjeta de cada uno, vamos a tener que pedir el detalle por separado. Eso lo vamos a resolver con **_Promise.all_**, que ya conocen de C10."*

> **Analogía:** *"Cuando buscan en Google, no les muestra los millones de resultados de golpe: les da una **página** —los primeros 10— y un botón 'Siguiente'. Eso es paginación con query params: **_?page=2_** o **_?start=10_**. El scroll infinito de Instagram, el feed de Mercado Libre, la lista de productos de Amazon — todos hacen exactamente lo mismo por dentro."*

> **Pregunta de activación:**
> *"Si la URL **_/pokemon/pikachu_** tiene un parámetro de ruta obligatorio, ¿qué pasaría si pongo **_/pokemon_** sin nada y sin query params? ¿Error o respuesta?"*
> *(Respuesta esperada: respuesta. **_/pokemon_** SÍ es un endpoint válido —el endpoint de lista—; la API responde con los defaults (los primeros 20). Refuerza la idea de que la ruta lleva al recurso, los query son ajustes opcionales sobre ese recurso.)*

---

#### 5.2 Lab HU5 — botón "Cargar más" con paginación

**EN PANTALLA: EXCALIDRAW Panel 5.2 LIBRE — el instructor escribe los 8 pasos socráticos uno por uno mientras conduce el plan (sin contenido pre-escrito, solo el marco con el título "PLAN DE LA SOLUCIÓN — HU 5: CARGAR MÁS"). Después: VS CODE + NAVEGADOR (Live Server) para el code-along.**

> **Tu apertura:**
> *"Última HU del día. Y la que más cosas reusa: vamos a usar **_async/await_** (HU1), **_Promise.all_** (C10), **_adaptarPokemon_** extendido (HU4) y **_.some()_** (HU3). Nada nuevo conceptual — solo armar las piezas con paginación. Plan primero."*

> **Setup del lab (HTML):**
> Agregar el botón "Cargar más" **debajo** de la rejilla en **_index.html_**:
> ```html
> <div class="text-center my-6">
>   <button id="cargar-mas" class="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800">
>     Cargar más
>   </button>
> </div>
> ```

> **Plan de la solución — definir los pasos ANTES de escribir el código:**
> *(Conducirlo socráticamente. **Regla del juego: cada paso se responde leyendo la HU 5 y sus tres criterios** — no son decisiones abiertas.)*
>
> **Paso 1 · EL USUARIO ve un botón "Cargar más" debajo de la rejilla**
>
> Criterio textual de la HU 5: *"Un botón 'Cargar más' trae más Pokémon y los suma a la rejilla."* Punto de partida — sin pregunta socrática.
>
> ---
>
> **Paso 2 · EL USUARIO hace clic en el botón**
>
> > 🔎 *¿Qué evento del DOM escuchamos?*
>
> > ✅ **Respuesta esperada:** **_click_**. → **_cargarMas.addEventListener("click", cargarMas)_**.
>
> ---
>
> **Paso 3 · EL PROGRAMA le pide datos a la API**
>
> > 🔎 *La HU dice **"traer más Pokémon... explorar la Pokédex sin escribir nombres"**. Ya no pedimos UN Pokémon por nombre como en M2. ¿Qué endpoint usamos: el de detalle (**_/pokemon/{nombre}_**) o uno distinto? Y para decirle a la API "doce desde el cero", "doce desde el doce"..., ¿qué tipo de parámetro usamos: ruta o consulta?*
>
> > ✅ **Respuesta esperada:** endpoint de LISTA (**_/pokemon_**, sin nombre). Y query params para paginar: **_?limit=12&offset=N_**.
> > **URL completa:** **_https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}_**.
> > Se arma con template literal — **_${offset}_** se reemplaza por el valor actual.
>
> ---
>
> **Paso 4 · EL PROGRAMA recibe la lista**
>
> > 🔎 *Mostramos en 5.1 que la respuesta del endpoint de lista trae **_{ count, next, previous, results }_**, y **_results_** es un array de **_{ name, url }_** —solo nombre y URL, no los datos completos—. ¿Podemos pintar la tarjeta con eso solo, o falta info?*
>
> > ✅ **Respuesta esperada:** NO alcanza. Para pintar la tarjeta con imagen, tipos y stats necesitamos los datos completos.
> > Entonces tenemos que pedir el **detalle** de cada uno por separado, usando la **_url_** que vino en cada **_result_**.
>
> ---
>
> **Paso 5 · EL PROGRAMA pide el detalle de los 12 Pokémon**
>
> > 🔎 *Doce fetchs nuevos. ¿Los hacemos uno por uno con **_await_** —12 esperas en serie— o reusamos algo de C10 para hacerlos en paralelo?*
>
> > ✅ **Respuesta esperada:** REUSAMOS **_Promise.all_** de C10. Le pasamos un array de promesas y nos devuelve el array de resultados cuando todos terminan.
> > **Sintaxis:** **_await Promise.all(lista.results.map(item => fetch(item.url).then(r => r.json())))_**.
> > → 12 en paralelo = tarda lo que tarda el más lento, no la suma de 12.
>
> ---
>
> **Paso 6 · EL PROGRAMA agrega cada Pokémon nuevo al estado sin duplicar**
>
> > 🔎 *La HU dice criterio textual: **"Los Pokémon que ya estaban no se duplican"**. ¿Qué reusamos de HU3 y cómo lo aplicamos a 12 elementos?*
>
> > ✅ **Respuesta esperada:** el mismo **_.some()_** de HU3, dentro de un **_.forEach_**.
> > Antes adaptamos los 12 con **_.map(adaptarPokemon)_**, después recorremos: si **_pokedex.some(p => p.nombre === ...)_** devuelve **_false_**, **_pokedex.push(pokemon)_**.
> > Es la lógica de HU3 aplicada a varios.
>
> ---
>
> **Paso 7 · EL PROGRAMA prepara la próxima página**
>
> > 🔎 *La HU dice criterio textual: **"Cada clic trae un grupo distinto (la siguiente página)"**. Si el **_offset_** queda en 0 forever, el próximo clic traería los MISMOS 12. ¿Qué actualizamos y dónde vive esa variable?*
>
> > ✅ **Respuesta esperada:** **_offset += 12_** al final de cargarMas, antes de renderizar.
> > La variable **_offset_** vive FUERA de la función, en el scope del módulo (**_let offset = 0;_**), para que sobreviva entre clics — si fuera local, se reiniciaría cada vez.
>
> ---
>
> **Paso 8 · EL PROGRAMA vuelve a pintar la rejilla**
>
> > 🔎 *La HU dice **"los suma a la rejilla"**. ¿Qué función reusamos?*
>
> > ✅ **Respuesta esperada:** **_render(pokedex)_** de C10. Como **_pokedex_** ahora tiene los 12 nuevos sumados, la rejilla se pinta con TODOS — los que estaban + los nuevos.
> > El "suma" del criterio se cumple porque **_pokedex_** creció, no porque hicimos algo especial al DOM.

> **Tu cierre del plan (antes de bajar a código):**
> *"Ocho pasos. CERO conceptos nuevos: query params (5.1), **_Promise.all_** (C10), **_.some()_** (HU3), **_render_** (C10), **_addEventListener_** (C09). Lo único que aprendimos hoy nuevo del lado del código fue **_async/await_**, y todo lo demás venía con ustedes. Esa es la idea del módulo entero: cada clase suma una herramienta, las anteriores se reusan. Ahora sí, código."*

> **Code-along (HU5):**
> ```javascript
> let offset = 0;   // ← vive fuera de la función para sobrevivir entre clics
>
> async function cargarMas() {
>   // 1. Pedir la lista paginada                                          ← paso 3
>   const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`);
>   const lista = await respuesta.json();   // { results: [{ name, url }, ...] }
>
>   // 2. Pedir el detalle de cada uno en paralelo                         ← pasos 4 + 5
>   const datos = await Promise.all(
>     lista.results.map(item => fetch(item.url).then(r => r.json()))
>   );
>
>   // 3. Adaptar y agregar al estado sin duplicar                          ← paso 6
>   datos.map(adaptarPokemon).forEach(function (pokemon) {
>     if (!pokedex.some(p => p.nombre === pokemon.nombre)) {
>       pokedex.push(pokemon);
>     }
>   });
>
>   // 4. Preparar la próxima página + re-render                            ← pasos 7 + 8
>   offset += 12;
>   render(pokedex);
> }
>
> document.getElementById("cargar-mas").addEventListener("click", cargarMas);  // ← paso 2
> ```
> - *"**_cargarMas_** es UNA función **_async_** que orquesta los pasos 3 al 8. Léanla de arriba abajo: pide la lista paginada → pide el detalle de cada uno en paralelo → adapta y agrega al estado con guardia → sube el offset → re-render. Cada bloque está anotado con el paso del plan."*
> - *"El detalle de mezclar **_await_** con **_.then_**: en el **_Promise.all_** usamos **_.then(r => r.json())_** como one-liner. Con **_await_** quedaría más verboso (dos líneas por item). Las dos formas son válidas — recordá que **_async/await_** es azúcar, no reemplazo. Para promesas anidadas cortas, **_.then_** sigue siendo más limpio."*
> - *"**_offset_** vive AFUERA de **_cargarMas_**: si lo declarara adentro con **_let offset = 0_**, cada clic lo reiniciaría a 0 y la siguiente página nunca llegaría. Vive en el scope del módulo para que el valor persista entre llamadas."*

> **Checkpoint 5 (~95 min):** *(a) Pulsar "Cargar más" → la rejilla crece con 12 Pokémon nuevos sumados a los anteriores; (b) volver a pulsar → llegan OTROS 12 distintos (no los mismos); (c) si alguno de los nuevos ya estaba (porque lo capturé antes), NO se duplica en la rejilla.*

---

#### 5.3 Cierre de clase + puente a C12

**EN PANTALLA: EXCALIDRAW — tabla resumen del día (las tres-cuatro filas grandes) + el arco del módulo 3 (C09 → C10 → C11 → C12) con C11 marcada como "hoy" y C12 como "lab calificado, error handling".**

> **Tu cierre — lo que se llevan del día:**
> *"Pongan pausa al editor un segundo. Hagamos una mirada panorámica de lo que la Pokédex hace AHORA vs cómo la dejamos en C10."*
>
> | Antes (C10) | Hoy (C11) |
> | --- | --- |
> | Código asíncrono con **_.then_** encadenado | El mismo código con **_async/await_** — se lee de arriba abajo |
> | Buscador filtraba SOLO lo cargado | El buscador **consulta la API** por nombre (HU2) |
> | Una rejilla fija de 6 Pokémon | El usuario **captura** lo que encuentra → el estado crece (HU3) |
> | Tarjeta mostraba imagen + nombre + tipos | El resultado de búsqueda muestra también **estadísticas** (HU4) |
> | Sin forma de pedir muchos de golpe | Botón "**Cargar más**" con paginación por **_?limit_**/**_?offset_** (HU5) |

> **Mensaje que se llevan:**
> *"Hoy NO aprendieron una tecnología nueva grande. Aprendieron a ESCRIBIR MEJOR lo de C10 (**_async/await_**) y a hacer que la app **responda al usuario** (busca, captura, explora, pagina). Esa idea —el estado cambia según lo que el usuario hace, la vista lo refleja— es la columna vertebral de toda app interactiva moderna y la base de React, Vue, Angular y todo lo que viene en el curso."*

> **Logros opcionales (si sobra tiempo del checkpoint):**
> - **Logro 1 — Buscar por número:** la PokeAPI acepta IDs además de nombres (**_/pokemon/25_** = pikachu). Permitir buscar por nombre **o** número.
> - **Logro 2 — Quitar de la Pokédex:** un botón en cada tarjeta de la rejilla que la saque de **_pokedex_** (usando **_.filter_**) y re-renderice.

> **Puente a C12 — el cliffhanger explícito:**
> *"Una cosa que dejamos rota a propósito durante TODO el día: si en el buscador escriben 'pikachuu' —cualquier nombre que no existe— la app se cae feo en consola. No agregamos un **_.catch_** ni un **_try/catch_** adrede. ¿Por qué? Porque una app real no se puede caer así, y MANEJAR ese error es justamente el corazón de la próxima clase."*
>
> *"En C12 cierran el módulo:"*
> - *"**_try/catch_** — el equivalente del **_.catch_** para **_async/await_**, que mencionamos en M1 pero no usamos. Atrapar el 404 y mostrar un mensaje digno."*
> - *"**Estados de carga** — un 'Buscando…' mientras la API responde, en lugar de pantalla congelada."*
> - *"**README en Markdown** — primer documento técnico del curso. Lo van a entregar como parte de la calificación."*
> - *"**Es el lab calificado del Módulo 3.** La rúbrica de 5 criterios × 20 pts = 100. A 90+, B 80+, C 70+, F debajo. Lo que vienen haciendo desde C09 se evalúa allá."*
>
> *"Pueden cerrar el editor. Buena clase."*

---

## Notas de coordinación

- **Excalidraw:** los bloques **EN PANTALLA: EXCALIDRAW** se definirán en la **_GUIA EXCALIDRAW - CLASE 11.md_** al cerrar la Capa 2+3 (paneles candidatos: dos columnas **_.then_** vs **_async/await_**; filtrar vs buscar; el estado que crece al capturar; JSON gordo → solo **_stats_**; ruta vs consulta + páginas). Igual que C08/C09/C10, el **_.excalidraw_** será **nativo** (flujos/anatomías), sin imágenes.
- **Apuntes incorporados:** **_async/await_** como azúcar + **_await_** secuencial (M1.2-1.3), **_async_** siempre devuelve una promesa (M1.2), **_try/catch_** como manejo de errores —mención, se profundiza en C12— (M1.2 / cierre), parámetro de ruta con notación **_:param_** y obligatorio vs query opcional (M2.1 / M5.1), query params más allá de paginar — filtrar/ordenar/buscar (M5.1). Presentados como teoría; el lab aplica el subconjunto.
- **Reuso de C09/C10:** **_fetch_**, **_Promise.all_**, **_adaptarPokemon_** (se extiende con **_stats_**), **_crearTarjeta_** (intacta), **_render_**, **_pokedex_** (ahora "estado"), **_?._**/**_??_**, **_.map_**, **_.some_**.
- **Arco del módulo:** C09 (render local) → C10 (fetch/promesas) → **C11 (async/await + buscar/capturar/paginar)** → C12 (try/catch + README, lab calificado).