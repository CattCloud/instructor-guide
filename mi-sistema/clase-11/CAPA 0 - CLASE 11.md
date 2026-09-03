# CAPA 0 — CLASE 11: async/await y búsqueda en la API

> **Fuentes:** **_code201/class-11/README.md_** · **_code201/class-11/lab/README.md_** · **_code201/class-11/slides/README.md_** *(inputs canónicos: README + lab + slides)*
> **Módulo:** M3 — Clase 3 de 4 ("JavaScript Moderno y Consumo de APIs")
> **Proyecto víctima:** **Pokédex** (repo `pokedex`, rama `lab11-async`) — la MISMA app de C09/C10. Hoy se **reformula** el código asíncrono y el buscador **evoluciona** de filtrar a buscar en la API.
> **Continuidad con C10:** el alumno llega con la rejilla cargada desde la PokeAPI usando **_fetch_** + **_.then_** encadenado + **_Promise.all_**, con **_adaptarPokemon_**, **_crearTarjeta_**, **_render_** y el array **_pokedex_** ya en pie. Hoy NADA de eso se tira: se **reescribe** la carga con `async/await` (mismo resultado) y se reusan todas esas piezas.
> **Hoy SÍ se toca internet:** PokeAPI, gratuita, sin clave.
> **Esta clase NO es lab calificado** (el calificado del M3 es C12) y **no pide README** todavía (se agrega en C12).
> **Sin archivo de apoyo:** las demos (el mismo `fetch` con `.then` y con `async/await`, el JSON de stats en el navegador) se tipean en VS Code + se abren URLs, con el código en el guion.

---

## Idea fuerza de la clase

**El mismo código asíncrono, más legible — y una app que crece con lo que hace el usuario.** Dos movimientos: (1) lo que en C10 se escribió con `.then` encadenado se **reescribe con `async/await`**, que NO es tecnología nueva sino **la misma promesa leída de arriba abajo**, como una secuencia de pasos; (2) el buscador deja de **filtrar** la rejilla ya cargada y pasa a **buscar en la API** cualquier Pokémon, que el usuario puede **capturar** para sumarlo a su colección. Ahí aparece la idea central que acompaña al resto del curso: **`pokedex` es el estado de la app, y crece según lo que el usuario hace.**

---

## BLOQUE 1 — async/await: reformular lo de C10

*(El primer movimiento del día. No se aprende a hacer algo nuevo: se aprende a ESCRIBIR mejor lo que ya se hace. La clave pedagógica —y lo que repite el lab— es que `async/await` es **azúcar sobre las Promesas**, no un reemplazo.)*

---

### CONCEPTO: `async` / `await`

**_async_** marca una función como asíncrona; dentro de ella, **_await_** **pausa** la ejecución hasta que una promesa se resuelve y **entrega su valor directo** —sin `.then`—. El resultado es código asíncrono que se **lee como una secuencia de pasos**, de arriba abajo.

**Sintaxis general:**
```javascript
async function nombre() {
  const valor = await unaPromesa;   // pausa acá hasta que resuelva; valor = lo resuelto
  // sigue cuando 'valor' ya está listo
}
```

**Fórmula del lab (la misma carga de C10, reescrita):**
```javascript
// C10 — con .then encadenado
fetch(url).then(r => r.json()).then(data => { /* usar data */ });

// C11 — con async/await: mismo resultado, leído de arriba a abajo
const response = await fetch(url);
const data = await response.json();
```

**Dependencia técnica:** `await` **solo** se puede usar dentro de una función marcada con `async`, y **pausa solo dentro de esa función** (no congela todo el programa). Cada `await` espera la promesa y devuelve el valor que el `.then` recibía como argumento — por eso reemplaza al `.then`, no a la promesa. **La promesa NO desaparece:** `fetch` y `Promise.all` siguen devolviendo promesas; `await` solo cambia cómo las consumimos. **Una función `async` SIEMPRE devuelve una promesa** (aunque adentro hagas un `return` directo) — por eso para usar su resultado hay que `await`-earla o consumirla con `.then`. **Nombrar lo que ya existe:** el alumno YA escribió promesas en C10; hoy se le muestra que `async/await` es otra cara de lo mismo. *(Manejo de errores: el compañero de `async/await` es **`try/catch`** —el equivalente del `.catch`—. HOY NO se usa en el lab, que rompe a propósito si el nombre no existe; se desarrolla a fondo en C12.)*

### ANALOGÍA: La receta leída paso a paso

Con `.then` dejás instrucciones encadenadas, como notas pegadas: *"cuando hierva el agua, entonces echá la pasta; cuando esté lista, entonces colá"*. Con `async/await` leés la **receta de corrido**: *"poné el agua. **Esperá** a que hierva. Echá la pasta. **Esperá** 10 minutos. Colá."* El `await` es ese **"esperá a que esto termine antes de seguir"** — la receta se lee en el orden en que se cocina, sin notas anidadas.

### ETIMOLOGÍA / HISTORIA

Llegaron con **ES2017 (ES8)**, dos años después de las Promesas (ES6). **`await`** = "esperar" en inglés; **`async`** = asíncrono. Se construyeron **encima** de las Promesas precisamente para resolver el dolor del `.then().then().then()` anidado (el viejo "callback/then hell"). Hoy es la forma por defecto de escribir asincronía en JavaScript moderno y en frameworks como React.

### ESTRATEGIA VISUAL: El mismo fetch, dos columnas

Mostrar lado a lado el **mismo** pedido: izquierda con `.then` encadenado (flechas que "saltan" hacia adentro), derecha con `async/await` (pasos numerados de arriba abajo). Resaltar que producen **lo mismo** y marcar cada `await` como "pauso acá hasta que llegue". El ancla: *no es nuevo, es la misma promesa mejor escrita.*

---

## BLOQUE 2 — De filtrar a buscar: la app responde al usuario

*(El segundo movimiento. El buscador cambia de naturaleza: ya no mira lo local, sale a la API. Y lo que encuentra se puede **capturar** — ahí nace la idea de ESTADO que crece.)*

---

### CONCEPTO: Buscar en la API por nombre (parámetro de ruta)

**Filtrar** recorta una lista que **ya tenés** en memoria. **Buscar en la API** sale a internet a pedir un recurso **por nombre** que quizá **no tenías**. En C10 el buscador filtraba `pokedex`; hoy consulta la API y trae cualquier Pokémon. El nombre va en la URL como **parámetro de ruta** —`/pokemon/pikachu`— que dice **QUÉ recurso** se pide. En la notación de una API se escribe `/pokemon/:nombre` (la parte con `:` es la variable que se reemplaza por un valor); es una parte **estructural y obligatoria** de la URL *(en B3 se contrasta con los parámetros de consulta `?limit`/`?offset`, que son opcionales)*.

**Sintaxis general:**
```javascript
async function buscar(nombre) {
  const data = await obtenerPokemon(nombre.toLowerCase());   // va a la API
  return adaptarPokemon(data);
}
```

**Fórmula del lab (HU2):**
```javascript
boton.addEventListener("click", function () {
  const nombre = buscador.value.trim();
  if (nombre !== "") mostrarBusqueda(nombre);   // ignora búsqueda vacía
});
buscador.addEventListener("keydown", e => { if (e.key === "Enter") boton.click(); });
```

**Dependencia técnica:** la búsqueda se dispara con **clic o Enter**, NO en cada tecla (en C10 el filtro local sí corría en cada `input`) — porque cada búsqueda es una **petición de red**, y dispararla en cada letra saturaría la API. Reusa **_obtenerPokemon_** y **_adaptarPokemon_** de HU1/C10. Requiere agregar un **_&lt;button id="btn-buscar"&gt;_** junto al **_&lt;input id="buscador"&gt;_** de C09. *(Si el nombre no existe, la app rompe a propósito — se maneja en C12 con `try/catch`.)*

### ANALOGÍA: La agenda del celular vs el buscador de internet

Filtrar es buscar un contacto en **tu agenda**: solo aparece quien ya guardaste. Buscar en la API es usar el **buscador de internet**: encontrás a cualquiera, esté o no en tu agenda. El buscador del Pokédex pasó de revisar tu lista a salir a preguntarle al mundo.

### ETIMOLOGÍA / HISTORIA

"Filtrar" (de C06, **_.filter_**) recorta lo existente; "buscar/consultar" implica una **query** a un servidor. Es la diferencia entre trabajar con datos **en memoria** y consumir un **servicio remoto** — el salto que hace que una app pase de "lista estática" a "conectada al mundo".

### ESTRATEGIA VISUAL: Dos buscadores, dos alcances

Tabla/diagrama: a la izquierda "FILTRAR" (una caja `pokedex` con una lupa adentro: solo lo que ya está); a la derecha "BUSCAR" (la lupa apuntando a una nube/API: cualquier Pokémon). Una flecha del input al destino correcto en cada caso.

---

### CONCEPTO: Hacer crecer el estado (capturar sin duplicar)

El **estado** de la app son los datos que definen lo que muestra **ahora** — acá, el array **_pokedex_**. **Capturar** un Pokémon buscado lo **agrega** al estado y vuelve a renderizar; con **_.some()_** se evita duplicar.

**Sintaxis general:**
```javascript
function capturar(pokemon) {
  if (!pokedex.some(p => p.nombre === pokemon.nombre)) {   // ¿ya está?
    pokedex.push(pokemon);   // si no, lo suma → el estado crece
  }
  render(pokedex);           // la UI refleja el estado actualizado
}
```

**Fórmula del lab (HU3 — botón solo en el resultado):**
```javascript
const boton = document.createElement("button");
boton.textContent = "⚡ Capturar";
boton.addEventListener("click", () => capturar(pokemon));
tarjeta.appendChild(boton);   // se cuelga al NODO de crearTarjeta, sin tocar la función
```

**Dependencia técnica:** **_crearTarjeta_** (de C09) **no se toca**: devuelve un nodo, y al nodo del **resultado de búsqueda** se le cuelga el botón con **_appendChild_** (de C09) — así el botón aparece SOLO en el resultado, no en las tarjetas de la rejilla. **_.some()_** recorre el array y devuelve `true` si **alguno** cumple la condición (acá, mismo nombre) → es el guardia anti-duplicado. **Nombrar el concepto donde sucede:** `pokedex` existe como variable desde C10, pero recién acá —cuando el usuario la hace crecer— se le pone el nombre **estado**. *(Persistir el estado entre visitas es tema de M4.)*

### ANALOGÍA: El álbum de figuritas

`pokedex` es tu **álbum de figuritas**: el estado es qué figuritas tenés pegadas ahora. **Capturar** es pegar una nueva; el **_.some()_** es chequear *"¿ya la tengo?"* antes de pegar, para no repetir. Cada vez que pegás una, el álbum (la pantalla) refleja la colección actualizada.

### ETIMOLOGÍA / HISTORIA

**Estado** (*state*) es uno de los conceptos centrales de las interfaces modernas: el conjunto de datos que, al cambiar, hace que la vista cambie. En frameworks como React es **el** concepto organizador ("cuando el estado cambia, la vista se re-renderiza"). Hoy se vive a mano: `pokedex` cambia → se llama a `render`. **_.some_** es de los métodos de array de **ES5**, hermano de `.map`/`.filter`/`.forEach` de C06.

### ESTRATEGIA VISUAL: El array que crece → la rejilla que crece

Mostrar `pokedex` como una fila de cajas; al capturar, una caja nueva entra (con un check "¿ya está? no → entra"), y debajo la rejilla suma esa tarjeta. Si el Pokémon ya estaba, la caja nueva **rebota** (no se agrega). Ancla: *el estado manda; la UI lo refleja.*

---

## BLOQUE 3 — Sacar más de la API: explorar y paginar

*(El tercer movimiento. La API entrega mucho más de lo que se usa, y permite pedir los datos por páginas. Dos habilidades de "exprimir" un servicio remoto.)*

---

### CONCEPTO: Explorar la respuesta (navegar el JSON anidado)

La respuesta de una API trae **mucho más** de lo que se muestra. **Explorar** la respuesta es navegar su JSON anidado para extraer datos adicionales — acá, las **estadísticas** (`data.stats`), que en C10 ni se miraban.

**Sintaxis general:**
```javascript
// data.stats = [ { base_stat: 35, stat: { name: "hp" } }, ... ]
const stats = data.stats.map(s => ({ nombre: s.stat.name, valor: s.base_stat }));
```

**Fórmula del lab (HU4 — extender el adapter):**
```javascript
function adaptarPokemon(data) {
  return {
    nombre: data.name,
    imagen: data.sprites?.front_default ?? "https://via.placeholder.com/96?text=?",
    tipos:  data.types.map(t => t.type.name),
    stats:  data.stats.map(s => ({ nombre: s.stat.name, valor: s.base_stat }))   // ← nuevo
  };
}
```

**Dependencia técnica:** se **extiende** el `adaptarPokemon` de C10 con un campo más, reusando **_.map_** para aplanar el array anidado `stats[].stat.name` / `stats[].base_stat`. Las stats se pintan **solo en el resultado de búsqueda** (se cuelgan al nodo, como el botón Capturar) porque `crearTarjeta` de C09 no las muestra. La PokeAPI también trae `height`, `weight`, `abilities`, `moves`… — el trabajo del dev es **elegir qué extraer**.

### ANALOGÍA: La ficha técnica completa del producto

Cuando comprás un electrodoméstico, la caja trae una **ficha técnica enorme**: consumo, medidas, voltaje, garantía, materiales… Vos no leés todo: buscás los **dos o tres datos** que te importan. La respuesta de la API es esa ficha: viene completísima, y vos navegás hasta el dato que necesitás (las stats) y dejás el resto.

### ETIMOLOGÍA / HISTORIA

Las APIs REST devuelven representaciones **completas** del recurso por diseño (para servir a muchos clientes distintos con una sola respuesta). Por eso "navegar el JSON" —bajar por `data.stats[0].base_stat`— es una habilidad diaria del dev: la respuesta es un árbol, y uno recorre las ramas hasta la hoja que busca.

### ESTRATEGIA VISUAL: El JSON gordo → solo lo que uso

Mostrar el JSON real de la API con MUCHAS claves (height, weight, abilities, stats, moves…) y resaltar **solo** `stats[].stat.name` y `stats[].base_stat`, con una flecha hacia las barras de stats en la tarjeta. El resto del JSON, atenuado. Ancla: *trae de todo; tomo lo que necesito.*

---

### CONCEPTO: Parámetro de ruta vs de consulta (paginación)

Un **parámetro de ruta** es parte de la URL que dice **qué recurso** (`/pokemon/pikachu`) — estructural y **obligatorio**. Un **parámetro de consulta** va después del **_?_**, es **opcional**, y dice **cómo** querés los datos (`?limit=12&offset=0`). Los query params sirven para varias cosas —**filtrar, ordenar, buscar, paginar**—; hoy usamos la **paginación**: `limit` cuántos, `offset` desde dónde, y subir el `offset` da la **siguiente página**.

**Sintaxis general:**
```text
/pokemon/pikachu              → parámetro de RUTA     (qué recurso)
/pokemon?limit=12&offset=0    → parámetros de CONSULTA (cómo: cuántos / desde dónde)
        ↑clave=valor & clave=valor
```

**Fórmula del lab (HU5 — "Cargar más"):**
```javascript
let offset = 0;
async function cargarMas() {
  const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`);
  const lista = await respuesta.json();   // { results: [{ name, url }, ...] }
  const datos = await Promise.all(lista.results.map(item => fetch(item.url).then(r => r.json())));
  datos.map(adaptarPokemon).forEach(p => {
    if (!pokedex.some(x => x.nombre === p.nombre)) pokedex.push(p);   // sin duplicar
  });
  offset += 12;   // la próxima, la siguiente página
  render(pokedex);
}
```

**Dependencia técnica:** los parámetros de consulta van `?clave=valor&clave=valor`. El endpoint de **lista** devuelve solo `name` + `url` por Pokémon, así que hace falta un segundo nivel: pedir el **detalle** de cada uno con **_Promise.all_** (de C10). Reusa **_.some()_** (HU3) para no duplicar. **_offset_** vive fuera de la función (estado) para recordar por dónde va. *(Este patrón lista→detalle es el que estaba en el lab de C10 y se movió acá.)*

### ANALOGÍA: Los resultados de Google por páginas

Cuando buscás en Google, no te da los millones de resultados de golpe: te da una **página** (los primeros 10) y un "Siguiente". `?limit` es cuántos por página; `?offset` es desde cuál arrancar. "Cargar más" es pedir la página siguiente — lo mismo que el scroll infinito de Instagram o las páginas de Mercado Libre.

### ETIMOLOGÍA / HISTORIA

La **paginación** existe porque devolver "todo" sería lentísimo e inmanejable. **`limit`/`offset`** (o `page`/`per_page`) son convención casi universal en APIs REST. El **_?_** y el **_&_** en las URLs vienen de la *query string* de HTTP: el `?` abre los parámetros, el `&` los separa.

### ESTRATEGIA VISUAL: Ruta vs consulta + páginas

Arriba: la misma URL base, una vez con `/pikachu` (rotulado RUTA = qué) y otra con `?limit=12&offset=0` (rotulado CONSULTA = cómo), con cada parte señalada. Abajo: tres "páginas" de 12 (offset 0, 12, 24) y el botón "Cargar más" trayendo la siguiente. Ancla: *ruta elige el recurso; la consulta ajusta cómo lo pido.*

---

## CIERRE — hilo conductor + qué se lleva el alumno

### El arco del Módulo 3 (Pokédex)
```
C09  JS Moderno      → render de datos LOCALES                        ← ya hecho
C10  fetch + JSON    → datos REALES de PokeAPI (Promesas, .then)      ← ya hecho
C11  async/await     → mismo código, legible + buscar/capturar/paginar ← HOY
C12  Errores         → try/catch (el nombre que no existe) + README   ← lab calificado
```
Una sola app que crece clase a clase. Hoy no se aprende a hacer algo nuevo con la red: se **escribe mejor** lo de C10 (`async/await`) y se hace que la app **responda al usuario** (buscar, capturar, paginar). Lo que queda hecho y se reusa todo es `obtenerPokemon` (async), `adaptarPokemon` (con stats) y la idea de `pokedex` como estado.

### Puente a C12
Hoy, si el usuario busca un nombre que **no existe** ("pikachuu"), la app **se rompe feo** — a propósito. Una app real no puede caerse así. C12 abre la pregunta: ¿cómo atrapamos ese error y mostramos algo digno? → **`try/catch`**, estados de carga, y el cierre del módulo (con README en Markdown). Es el **lab calificado**.

### Tabla resumen de conceptos

| Bloque | Conceptos |
|---|---|
| **B1 — async/await** | `async`/`await` como azúcar sobre Promesas (mismo resultado, leído de arriba abajo) |
| **B2 — De filtrar a buscar** | buscar en la API por nombre (vs filtrar local) · hacer crecer el **estado** (capturar con `.some`, sin duplicar) |
| **B3 — Sacar más de la API** | explorar la respuesta (navegar JSON anidado → stats) · parámetro de ruta vs de consulta + paginación (`?limit`/`?offset`) |

### Mensaje que se lleva el alumno
**`async/await` no es magia nueva: es la promesa de C10 escrita para leerse de corrido.** Y una app de verdad **responde al usuario**: busca lo que pide, lo guarda en su estado y lo hace crecer. Eso —el estado que cambia según lo que el usuario hace— es la base de toda app interactiva y de lo que viene en el curso.
