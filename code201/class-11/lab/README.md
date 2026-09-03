# Laboratorio 11: async/await y búsqueda en la API

En C10 tu Pokédex ya carga su rejilla desde la web, pero el código usa `.then` encadenado y el buscador solo **filtra** lo que ya tienes. Hoy: **reformulas** ese código con **`async/await`**, conviertes el buscador en una **búsqueda real contra la API** (y **capturas** lo que encuentras), **exploras** los datos ricos que devuelve la API (estadísticas) y aprendes a pedir páginas con **parámetros de consulta**.

> ⏱️ **Checkpoints**: 5 momentos de validación (~15, ~35, ~55, ~75, ~95 min).
>
> 🌐 Necesitas **conexión a internet** (PokeAPI). Reusas `crearTarjeta`, `render`, `adaptarPokemon` y el array `pokedex` de C10.

## 🎯 Objetivos de Aprendizaje

1. **Reformular** código de promesas (`.then`) a **`async/await`**, entendiendo que son lo mismo, más legible.
2. **Buscar** un recurso específico en una API por nombre con `fetch` + `await`.
3. Hacer **crecer** la Pokédex capturando el Pokémon buscado (botón en la tarjeta).
4. **Explorar** la respuesta de la API: navegar el JSON anidado para leer datos adicionales (estadísticas).
5. Usar **parámetros de consulta** (`?limit`, `?offset`) para pedir páginas de resultados.

## 🔑 Conceptos Clave

| Concepto | Definición |
|---|---|
| **`async` / `await`** | `async` marca una función asíncrona; `await` **pausa** hasta que una promesa resuelva y entrega el valor directo. |
| **Azúcar sintáctico** | `async/await` no reemplaza a las Promesas: es **otra forma de escribir lo mismo**, más parecida a código secuencial. |
| **Búsqueda por nombre** | Pedir a la API un recurso concreto (`/pokemon/{nombre}`), no una lista fija. |
| **Hacer crecer el estado** | Capturar el resultado (sumarlo al array `pokedex`) y volver a renderizar. |
| **Parámetro de ruta vs de consulta** | Ruta: `/pokemon/pikachu` (qué recurso). Consulta: `?limit=12&offset=0` (cómo paginar/filtrar). |
| **Explorar la respuesta** | La API devuelve mucho más de lo que usas; navegas el JSON (`data.stats[].base_stat`) y extraes lo que necesitas. |

## ⚙️ Setup Inicial

1. **Repositorio:** sigue en `pokedex`. Crea la rama `lab11-async`.
2. **Punto de partida:** tu app de C10 (carga la rejilla con `.then`/`Promise.all`, tiene `adaptarPokemon`, `crearTarjeta`, `render` y el array `pokedex`).
3. **Agrega un botón** de búsqueda junto a tu `<input id="buscador">`:

   ```html
   <div class="max-w-md mx-auto flex gap-2 mb-6">
     <input id="buscador" type="text" placeholder="Busca un Pokémon (ej. charizard)"
            class="flex-1 p-2 rounded-lg border border-slate-300">
     <button id="btn-buscar" class="px-4 py-2 bg-yellow-400 font-semibold rounded-lg hover:bg-yellow-500">
       Buscar
     </button>
   </div>
   ```

---

## 📋 Historias de Usuario

### HU1: Reformular la carga con `async/await`

> *"Como desarrollador, quiero reescribir la carga de la rejilla con `async/await`, para que el código se lea como una secuencia clara de pasos."*

**Criterios de Aceptación:**
- La rejilla sigue cargándose desde la API al abrir la página (mismo resultado que C10).
- El código de carga usa `async/await` en lugar de `.then` encadenado.

`async/await` es **azúcar sobre las promesas** de C10: `await` pausa la función hasta que la promesa resuelve y te entrega el valor directo, sin `.then`. Compara:

```javascript
// C10 (con .then)
fetch(url).then(r => r.json()).then(data => { ... });

// C11 (con async/await) — mismo resultado, se lee de arriba a abajo
const response = await fetch(url);
const data = await response.json();
```

Reescribe tu carga de C10 así:

```javascript
async function obtenerPokemon(idONombre) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idONombre}`);
  return response.json();
}

async function cargarPokedex() {
  const nombres = ["bulbasaur", "charmander", "squirtle", "pikachu", "jigglypuff", "gengar"];
  const datos = await Promise.all(nombres.map(obtenerPokemon));   // varios en paralelo, con await
  pokedex = datos.map(adaptarPokemon);
  render(pokedex);
}

cargarPokedex();
```

> 💡 `await Promise.all(...)` espera a que **todas** terminen — es el `Promise.all` de C10, ahora con `await`. El `.then` no desapareció: `async/await` lo escribe distinto.

- **Checkpoint 1 (~15 min):** la rejilla carga igual que en C10, pero tu código de carga ahora usa `async/await`. Funcionalmente idéntico, más legible.

---

### HU2: Buscar y traer el Pokémon

> *"Como usuario, quiero escribir un nombre y traer ese Pokémon desde la API —aunque no esté en mi rejilla— para verlo, presionando Buscar o Enter."*

**Criterios de Aceptación:**
- Escribir un nombre y pulsar **Buscar** (o **Enter**) muestra ese Pokémon, aunque no estuviera en la rejilla.
- El buscador ya **no filtra** solo lo cargado: ahora **consulta la API**.
- El buscador ignora una búsqueda vacía.

En C10 el buscador filtraba `pokedex` (lo que ya tenías). Ahora consulta la API por nombre y **muestra** el resultado. **Reemplaza el listener de filtro de C10** por una búsqueda:

```javascript
const boton = document.getElementById("btn-buscar");   // el #buscador ya lo tienes de C09

async function buscarPokemon(nombre) {
  const data = await obtenerPokemon(nombre.toLowerCase());   // reusa obtenerPokemon de HU1
  return adaptarPokemon(data);
}

// muestra la tarjeta del Pokémon encontrado
function mostrarResultado(pokemon) {
  contenedor.innerHTML = "";
  contenedor.appendChild(crearTarjeta(pokemon));
}

async function mostrarBusqueda(nombre) {
  const pokemon = await buscarPokemon(nombre);
  mostrarResultado(pokemon);
}

boton.addEventListener("click", function () {
  const nombre = buscador.value.trim();
  if (nombre !== "") mostrarBusqueda(nombre);
});

// Buscar también con Enter
buscador.addEventListener("keydown", function (event) {
  if (event.key === "Enter") boton.click();
});
```

> 💡 Mismo buscador, otra fuente: antes filtraba lo que **ya tenías**; ahora trae de la **API** y lo muestra. Se dispara con clic/Enter (no en cada tecla) para no saturar la API.

- **Checkpoint 2 (~35 min):** escribes "charizard" (que no estaba en la rejilla), presionas Enter y aparece su tarjeta, traída de la API.

---

### HU3: Capturar el Pokémon

> *"Como usuario, quiero un botón **Capturar** en el Pokémon que busqué, para sumarlo a mi Pokédex cuando yo decida."*

**Criterios de Aceptación:**
- La tarjeta del Pokémon buscado tiene un botón **"Capturar"**.
- Al pulsar **Capturar**, el Pokémon se **agrega** a la rejilla (no reemplaza a los demás).
- Si el Pokémon ya estaba en la Pokédex, **no se duplica**.

Dale al resultado un botón **Capturar** que lo sume a tu colección. `crearTarjeta` es de C09 (no la tocamos), pero **devuelve un nodo**, así que le agregas el botón a ese nodo — y así el botón aparece **solo** en el resultado de búsqueda, no en las tarjetas de la rejilla.

Agrega `capturar` y modifica `mostrarResultado` para que la tarjeta lleve el botón:

```javascript
function capturar(pokemon) {
  if (!pokedex.some(p => p.nombre === pokemon.nombre)) {
    pokedex.push(pokemon);   // hace crecer tu colección
  }
  render(pokedex);           // vuelve la colección completa, ya con el nuevo
  buscador.value = "";
}

function mostrarResultado(pokemon) {
  const tarjeta = crearTarjeta(pokemon);            // la tarjeta de C09 (un nodo)

  const boton = document.createElement("button");
  boton.textContent = "⚡ Capturar";
  boton.className = "mt-2 w-full bg-yellow-400 font-semibold rounded-lg py-1 hover:bg-yellow-500";
  boton.addEventListener("click", () => capturar(pokemon));
  tarjeta.appendChild(boton);                       // el botón SOLO en el resultado

  contenedor.innerHTML = "";
  contenedor.appendChild(tarjeta);
}
```

> 💡 `pokedex` es el **estado** de tu app: la lista de lo que tienes. Capturar la hace **crecer** (sin duplicar, gracias a `.some()`), y `render(pokedex)` refleja ese estado. (Persistir la colección entre visitas es M4.)

- **Checkpoint 3 (~55 min):** buscas "charizard" → su tarjeta con el botón **Capturar**; al pulsarlo, charizard **se une** a la rejilla; lo buscas otra vez y al capturar **no se duplica**.

---

### HU4: Mostrar las estadísticas (explorar la respuesta)

> *"Como usuario, quiero ver las estadísticas (HP, ataque…) del Pokémon que busco, para decidir si lo capturo."*

**Criterios de Aceptación:**
- La tarjeta del Pokémon buscado muestra sus **estadísticas** (al menos HP, ataque, defensa).
- Las estadísticas salen de los **datos que ya devuelve la API** (no se inventan).

La API devuelve **mucho más** de lo que muestras: en `data.stats` vienen las estadísticas. Hoy solo usabas `name`, `sprites` y `types` — vamos a **explorar** la respuesta y sacar también las stats.

Primero, extiende `adaptarPokemon` para incluirlas (navegando el array anidado):

```javascript
function adaptarPokemon(data) {
  return {
    nombre: data.name,
    imagen: data.sprites?.front_default ?? "https://via.placeholder.com/96?text=?",
    tipos:  data.types.map(t => t.type.name),
    stats:  data.stats.map(s => ({ nombre: s.stat.name, valor: s.base_stat }))   // ← nuevo
    // data.stats = [{ base_stat: 35, stat: { name: "hp" } }, ...]
  };
}
```

Luego, en `mostrarResultado`, agrega las barras de stats **al nodo del resultado** (igual que el botón Capturar, sin tocar `crearTarjeta`):

```javascript
function mostrarResultado(pokemon) {
  const tarjeta = crearTarjeta(pokemon);

  // estadísticas (solo en el resultado de búsqueda)
  const stats = document.createElement("div");
  stats.className = "mt-2 text-left text-xs space-y-1";
  stats.innerHTML = pokemon.stats.map(s => `
    <div class="flex justify-between"><span class="capitalize">${s.nombre}</span><span class="font-semibold">${s.valor}</span></div>
  `).join("");
  tarjeta.appendChild(stats);

  const boton = document.createElement("button");
  boton.textContent = "⚡ Capturar";
  boton.className = "mt-2 w-full bg-yellow-400 font-semibold rounded-lg py-1 hover:bg-yellow-500";
  boton.addEventListener("click", () => capturar(pokemon));
  tarjeta.appendChild(boton);

  contenedor.innerHTML = "";
  contenedor.appendChild(tarjeta);
}
```

> 💡 La respuesta de una API casi siempre trae **más de lo que necesitas** (la PokeAPI también da `height`, `weight`, `abilities`, `moves`…). El trabajo del dev es **navegar el JSON** y extraer lo que importa. Las stats van solo en el resultado (la rejilla usa `crearTarjeta` de C09, que no las muestra).

- **Checkpoint 4 (~75 min):** buscas un Pokémon y su tarjeta muestra las estadísticas (HP, ataque, defensa…) además de imagen y tipos.

---

### HU5: Cargar más con parámetros de consulta

> *"Como usuario, quiero un botón 'Cargar más' que traiga más Pokémon a la rejilla, para explorar la Pokédex sin escribir nombres."*

**Criterios de Aceptación:**
- Un botón **"Cargar más"** trae más Pokémon y los suma a la rejilla.
- Cada clic trae un grupo **distinto** (la siguiente página).
- Los Pokémon que ya estaban **no se duplican**.

En HU2 pediste un Pokémon con un **parámetro de ruta**: `/pokemon/pikachu` (dice *qué* recurso). Ahora pides una **lista** con **parámetros de consulta** — lo que va después del `?`:

```
https://pokeapi.co/api/v2/pokemon ? limit=12 & offset=0
                                  ↑    ↑           ↑
                                  ?    cuántos     desde dónde
```

Agrega un botón **debajo** de tu rejilla en el `index.html`:

```html
<div class="text-center my-6">
  <button id="cargar-mas" class="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800">
    Cargar más
  </button>
</div>
```

Y en `app.js`:

```javascript
let offset = 0;   // desde qué Pokémon empezamos

async function cargarMas() {
  // ?limit (cuántos) y ?offset (desde dónde) = parámetros de consulta
  const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`);
  const lista = await respuesta.json();   // { results: [{ name, url }, ...] }

  // cada item trae solo name + url → pide el detalle de cada uno en paralelo
  const datos = await Promise.all(
    lista.results.map(item => fetch(item.url).then(r => r.json()))
  );

  datos.map(adaptarPokemon).forEach(function (pokemon) {
    if (!pokedex.some(p => p.nombre === pokemon.nombre)) {
      pokedex.push(pokemon);   // sin duplicar
    }
  });

  offset += 12;     // la próxima vez, la siguiente página
  render(pokedex);
}

document.getElementById("cargar-mas").addEventListener("click", cargarMas);
```

> 💡 Los **parámetros de consulta** (`?clave=valor&clave=valor`) le dicen a la API *cómo* quieres los datos: `limit` cuántos, `offset` desde dónde. Subir `offset` te da la siguiente "página" — eso es **paginación**, y está en casi toda API. Reusas `Promise.all` (C10) y el `.some()` (HU3) para no duplicar.

- **Checkpoint 5 (~95 min):** pulsas "Cargar más" y la rejilla **crece** con más Pokémon; al volver a pulsar, llegan otros distintos; los que ya tenías no se duplican.

---

## 🌟 Logros Adicionales (Opcionales)

- **Logro 1 — Buscar por número:** la API acepta IDs (`/pokemon/25`). Permite buscar por nombre **o** número.
- **Logro 2 — Quitar de la Pokédex:** un botón en cada tarjeta que la saque de `pokedex` y re-renderice.

## 📝 Instrucciones de Entrega

1. **Despliegue:** publica en GitHub Pages y comparte el enlace.
2. **Entrega Final:** URL del repositorio + URL del sitio desplegado.

> ⚠️ Si buscas un nombre que **no existe** (ej. "pikachuu"), la app fallará feo. **Eso es a propósito** — en C12 lo manejas con `try/catch`.
>
> ℹ️ Sin README todavía — lo agregarás en C12, la última clase del módulo.
