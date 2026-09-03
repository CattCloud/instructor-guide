# Laboratorio 10: Tu Pokédex, ahora desde la web (fetch, Promesas y JSON)

En C09 tu rejilla salía de un **array local**, listo al instante. Hoy esos datos dejan de vivir en tu código y empiezan a venir de una **API real** por internet. Eso trae dos cosas nuevas: (1) los datos **tardan** en llegar → **asincronía**; (2) llegan con **su propia estructura** → tendrás que adaptarla. Al terminar, tu Pokédex carga sus Pokémon de la web y el buscador de C09 sigue funcionando.

> ⏱️ **Checkpoints**: 4 momentos de validación (~15, ~45, ~70, ~95 min).
>
> 🌐 Necesitas **conexión a internet**. Usamos [PokeAPI](https://pokeapi.co/){:target="_blank"} — gratis, sin registro ni clave.
>
> 🧠 Reusas tu `render()` y `crearTarjeta()` de C09 **sin cambios**. Lo nuevo es **de dónde** vienen los datos y **cómo** los manejas.

## 🎯 Objetivos de Aprendizaje

1. Entender la **asincronía**: los datos de una API tardan, y JavaScript no se congela esperándolos.
2. Pedir datos con **`fetch`** y leerlos como **JSON** con **Promesas** (`.then` / `.catch`).
3. **Adaptar** la estructura de la API a la forma de tu app y cargar varios en paralelo con **`Promise.all`**.

## 🔑 Conceptos Clave

| Concepto | Definición |
|---|---|
| **Asincrónico** | Una operación **tarda** (como pedir datos por red) y el programa **sigue** sin congelarse. |
| **`fetch(url)`** | Pide datos a una URL. Devuelve una **Promesa**: un "ticket" por datos que llegarán. |
| **JSON** | Formato de texto en que viajan los datos. Su forma refleja objetos JS, pero **no** es igual a tu objeto limpio. |
| **`response.json()`** | Convierte el cuerpo (JSON) en un **objeto JavaScript**. |
| **`.then` / `.catch`** | `.then(cb)` corre cuando la promesa se resuelve; `.catch(cb)` cuando falla. |
| **`Promise.all`** | Espera a que **varias** promesas terminen y entrega todos los resultados juntos. |
| **Función adaptadora** | Traduce la estructura de la API a tu forma limpia (`{ nombre, imagen, tipos }`). |

## ⚙️ Setup Inicial

1. **Repositorio:** sigue en `pokedex`. Crea la rama `lab10-api`.
2. **Punto de partida:** conservas tu `index.html` (la rejilla `#resultado` y el `#buscador`) y tus funciones `crearTarjeta()` y `render()` de C09 **sin cambios**.
3. **El array `pokemonLocal` de C09 ya no manda los datos** — hoy vienen de la API. Puedes dejarlo comentado como referencia; lo reemplazaremos paso a paso.

---

## 🌐 Antes de empezar: ¿qué es una API y qué es JSON?

Una **API** es un servidor que te entrega datos. La **PokeAPI** te da datos de cualquier Pokémon. Le pides una URL y te responde con **texto en formato JSON**:

```json
{
  "name": "pikachu",
  "sprites": { "front_default": "https://.../25.png" },
  "types": [ { "type": { "name": "electric" } } ]
}
```

> ⚠️ **Fíjate: NO es tu objeto limpio de C09.** Tú usabas `{ nombre, imagen, tipos: ["electric"] }`. La API usa `name`, esconde la imagen en `sprites.front_default` y los tipos en un array anidado `types[].type.name`. **La API dicta su estructura; tú te adaptarás a ella** (HU3).

Abre en el navegador `https://pokeapi.co/api/v2/pokemon/pikachu` y mira el JSON real.

---

## 📋 Historias de Usuario

### HU1: Descubre la asincronía

> *"Como aprendiz, quiero entender por qué los datos de internet no llegan al instante, antes de usarlos en mi app."*

**Criterios de Aceptación:**
- Al correr el experimento, en consola aparece el orden `1 → 2 → 3` (no `1 → 3 → 2`).
- Puedes explicar por qué el mensaje "llegaron" aparece al final, aunque su línea esté antes en el código.

Antes de cargar nada, un experimento corto para **descubrir** cómo JavaScript maneja algo que tarda. Pega esto en `js/app.js` y mira la consola:

```javascript
console.log("1. pido los datos…");

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(function (response) {
    console.log("3. ¡los datos llegaron! (al final)");
  });

console.log("2. sigo trabajando sin esperar");
```

La consola imprime **1 → 2 → 3**, no `1 → 3 → 2`. De ahí salen tres ideas nuevas:

- **Asincronía:** pedir datos por red **tarda**, y JavaScript **no se detiene** a esperar — sigue con la línea siguiente (por eso el `2` sale antes que el `3`).
- **Promesa:** `fetch` devuelve una **Promesa** — un "ticket" por datos que **llegarán después**. No te da los datos al instante; te da la *promesa* de ellos.
- **`.then`:** es cómo **reaccionas** cuando los datos llegan. El código dentro del `.then` corre al final, cuando la promesa se resuelve.

> 💡 Cambia la línea del `fetch` por `console.log(fetch("..."))`: verás `Promise { <pending> }` — el "ticket", aún sin los datos.

- **Checkpoint 1 (~15 min):** la consola muestra `1`, `2`, `3` en ese orden. Puedes explicar que el `3` sale al final porque `fetch` es asíncrono: JavaScript no espera, y reacciona con `.then` cuando los datos llegan.

---

### HU2: Traer un Pokémon de la API

> *"Como usuario, quiero que la app traiga datos reales de un Pokémon desde internet, en vez de tenerlos fijos en el código — aunque tarden un momento en llegar."*

**Criterios de Aceptación:**
- Mientras los datos llegan, se ve un estado de **"Cargando…"**.
- Cuando llegan, aparecen en consola los **datos reales** de un Pokémon traídos de la web.
- La página **no se congela** durante la espera.

Ya viste en HU1 que `fetch` devuelve una promesa por datos que llegarán. Ahora **léelos de verdad**: usa **dos `.then`** — el primero convierte la respuesta a JSON, el segundo recibe los datos ya listos. Y muestra "Cargando…" mientras llegan:

```javascript
// `contenedor` (#resultado) ya existe desde C09 — solo lo usamos
contenedor.innerHTML = `<p class="col-span-full text-center text-slate-500">Cargando…</p>`;

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(function (response) {
    return response.json();   // convierte el JSON en objeto JS (también tarda → otra promesa)
  })
  .then(function (data) {
    console.log(data);        // los datos reales de la API (estructura anidada)
  })
  .catch(function () {
    contenedor.innerHTML = `<p class="col-span-full text-center text-red-600">No se pudo cargar.</p>`;
  });
```

> 💡 **¿Por qué no aparecen los datos al instante?** Porque **tardan**: la red no es inmediata. JavaScript **no se queda congelado** — sigue trabajando y reacciona cuando llegan (`.then`). **Eso es la asincronía.** Para comprobarlo, pon un `console.log("sigo trabajando")` justo después del `fetch`: se imprime **antes** que los datos.

- **Checkpoint 2 (~45 min):** ves "Cargando…" y, un momento después, en consola aparece el objeto real de pikachu (con `name`, `sprites`, `types`). Confirmas que los datos vienen de la web y que tardan.

---

### HU3: Adaptar la estructura y mostrar la tarjeta

> *"Como usuario, quiero ver el Pokémon como una tarjeta con su imagen, nombre y tipos, igual que en C09."*

**Criterios de Aceptación:**
- La tarjeta del Pokémon real aparece con su **imagen, nombre y tipos**.
- Se reusa el `render()` / `crearTarjeta()` de C09 sin reescribirlos.
- Si a la API le falta algún dato (p. ej. la imagen), la tarjeta **no se rompe**.

Tu `crearTarjeta` de C09 espera la forma limpia `{ nombre, imagen, tipos }`, pero la API da una estructura **anidada**. En vez de reescribir el render, escribes una **función adaptadora** que traduce de una forma a la otra (reusando el `?.` y el `??` de C09):

```javascript
function adaptarPokemon(data) {
  return {
    nombre: data.name,
    imagen: data.sprites?.front_default ?? "https://via.placeholder.com/96?text=?",
    tipos:  data.types.map(t => t.type.name)   // [{type:{name:"electric"}}] → ["electric"]
  };
}
```

Ahora adapta los datos antes de renderizar:

```javascript
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(function (response) { return response.json(); })
  .then(function (data) {
    render([adaptarPokemon(data)]);   // adapta y reusa el render de C09 (espera una lista)
  })
  .catch(function () {
    contenedor.innerHTML = `<p class="col-span-full text-center text-red-600">No se pudo cargar.</p>`;
  });
```

> 💡 El adapter traduce la forma de la API a la tuya, así tu `crearTarjeta` **no cambia** aunque la fuente de datos sí. Es exactamente lo que hace un dev real con cualquier API.

- **Checkpoint 3 (~70 min):** la tarjeta de un Pokémon real aparece en la rejilla, **idéntica en apariencia** a las de C09 — pero los datos vinieron de la web y pasaron por tu adaptador.

---

### HU4: Llenar la rejilla con varios Pokémon en paralelo

> *"Como usuario, quiero ver una rejilla de varios Pokémon traídos de la web, y poder filtrarlos como antes."*

**Criterios de Aceptación:**
- La rejilla muestra **varios** Pokémon reales (no uno solo).
- Los Pokémon se cargan **a la vez** (en paralelo), no esperando uno por uno.
- El **buscador sigue filtrando** la rejilla cargada.

Cada Pokémon es **un `fetch`**. Para traer varios **a la vez**, juntas sus promesas con **`Promise.all`**, que espera a que **todas** terminen y te entrega los resultados juntos:

```javascript
const nombres = ["bulbasaur", "charmander", "squirtle", "pikachu", "jigglypuff", "gengar"];
let pokedex = [];   // aquí guardamos la rejilla cargada

// un fetch por cada nombre → un array de promesas
const promesas = nombres.map(function (nombre) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`).then(r => r.json());
});

Promise.all(promesas)
  .then(function (datos) {                 // datos = array con los 6 Pokémon crudos
    pokedex = datos.map(adaptarPokemon);   // adapta todos a tu forma limpia
    render(pokedex);
  })
  .catch(function () {
    contenedor.innerHTML = `<p class="col-span-full text-center text-red-600">No se pudo cargar la Pokédex.</p>`;
  });
```

> 💡 `Promise.all` recibe un **array de promesas** y se resuelve cuando **todas** terminan. Si pidieras los Pokémon uno por uno (esperando cada uno antes del siguiente), tardaría mucho más; **en paralelo** tardan lo que el más lento.

**Reconecta el buscador de C09.** No agregues un listener nuevo: **edita el que ya tienes** y cambia esa única referencia de `pokemonLocal` a `pokedex`. Tu listener queda así:

```javascript
buscador.addEventListener("input", function () {
  const texto = buscador.value.toLowerCase();
  const filtrados = pokedex.filter(p => p.nombre.includes(texto));   // antes: pokemonLocal
  render(filtrados);
});
```

> ⚠️ `buscador` y `pokedex` ya están declarados (`buscador` desde C09; `pokedex` con `let pokedex = []` al inicio de tu `app.js`). No los vuelvas a declarar aquí.

> 💡 El buscador de C09 **sigue vivo**: solo cambia la fuente. Antes filtraba un array local; ahora filtra la rejilla que cargaste de la API.

- **Checkpoint 4 (~95 min):** la rejilla muestra los 6 Pokémon reales de la API; escribes en el buscador y filtra esa rejilla. **Tu Pokédex ya vive de la web.**

---

## 🌟 Logros Adicionales (Opcionales)

- **Logro 1 — Spinner animado:** reemplaza el texto "Cargando…" por un spinner con `animate-spin` de Tailwind.
- **Logro 2 — Un ID que no existe:** prueba con un ID inválido y evita que rompa la rejilla (adelanto del manejo de errores de C12).

## 📝 Instrucciones de Entrega

1. **Despliegue:** publica en GitHub Pages y comparte el enlace.
2. **Entrega Final:** URL del repositorio + URL del sitio desplegado.

> ℹ️ Sin README todavía — lo agregarás en C12.
