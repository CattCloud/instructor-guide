# Clase 11 — async/await y búsqueda en la API
### Code 201 · Módulo 3 · Proyecto: Pokédex

---

## 🎯 Objetivo de la Clase

- **Reformular** el `.then` de C10 con **`async/await`**.
- **Buscar** un Pokémon por nombre en la API.
- **Capturar** lo buscado en tu colección (`pokedex`).

> Misma lógica de C10, más legible — y el buscador ahora va a la API.

---

## 🔁 .then → async/await

```javascript
// C10
fetch(url).then(r => r.json()).then(data => { ... });

// C11 — mismo resultado
const response = await fetch(url);
const data     = await response.json();
```

> No es nuevo: es la **misma promesa**, escrita como pasos.

---

## 🔑 async / await

```javascript
async function obtenerPokemon(idONombre) {
  const response = await fetch(`.../pokemon/${idONombre}`);
  return response.json();
}
```

* `async` habilita `await` dentro.
* `await` **pausa** hasta que la promesa resuelve.
* Más legible que `.then` encadenado.

---

## ⚡ Reformular la carga

```javascript
async function cargarPokedex() {
  const datos = await Promise.all(ids.map(obtenerPokemon));
  pokedex = datos.map(adaptarPokemon);
  render(pokedex);
}
```

> El `Promise.all` de C10, ahora con `await`.

---

## 🔍 De filtrar a buscar

| C10 | C11 |
|---|---|
| filtra `pokedex` (lo que ya tienes) | consulta la **API** por nombre |
| solo lo de la rejilla | **cualquier** Pokémon |

```javascript
async function buscarPokemon(nombre) {
  const data = await obtenerPokemon(nombre.toLowerCase());
  return adaptarPokemon(data);
}
```

---

## ⚡ Capturar (botón en la tarjeta)

```javascript
// el resultado de búsqueda lleva un botón "Capturar"
boton.addEventListener("click", () => capturar(pokemon));

function capturar(pokemon) {
  if (!pokedex.some(p => p.nombre === pokemon.nombre)) {
    pokedex.push(pokemon);     // crece tu colección
  }
  render(pokedex);             // vuelve la colección, ya con el nuevo
}
```

> `crearTarjeta` es de C09 y devuelve un nodo → le añades el botón **solo** al resultado.

---

## 📊 Explorar la respuesta (stats)

```javascript
// la API trae MUCHO más: stats, height, weight, abilities…
stats: data.stats.map(s => ({ nombre: s.stat.name, valor: s.base_stat }))
```

* Hoy solo usabas `name`, `sprites`, `types`.
* Navegas el JSON anidado y extraes lo que importa.
* Las stats van **solo en el resultado** (no en `crearTarjeta`).

---

## 🔗 Parámetros: ruta vs consulta

```
/pokemon/pikachu            → parámetro de RUTA (qué recurso)
/pokemon?limit=12&offset=0  → parámetros de CONSULTA (cómo)
```

```javascript
fetch(`...pokemon?limit=12&offset=${offset}`);
offset += 12;   // siguiente página → paginación
```

> Subir `offset` = la siguiente "página". Está en casi toda API.

---

## ⚙️ Estructura del Lab

| HU | Tiempo | Contenido |
|---|---|---|
| **HU1** | ~15 min | Reformular la carga con `async/await` |
| **HU2** | ~20 min | Buscar y traer (mostrar el resultado) |
| **HU3** | ~20 min | Capturar (botón en la tarjeta, sin duplicar) |
| **HU4** | ~20 min | Estadísticas (explorar la respuesta) |
| **HU5** | ~20 min | Cargar más (`?limit`/`?offset`) |

---

## 🤔 Discusión

- ¿Por qué `async/await` se lee mejor que `.then` encadenado?
- ¿Qué diferencia hay entre filtrar lo local y buscar en la API?
- ¿Qué pasa si buscas un Pokémon que no existe? (👀 C12)

> **Idea clave:** el estado de tu app crece según lo que el usuario hace.

---

## ➡️ Lo que viene (C12)

Si buscas "pikachuu", la app **se rompe**. Una app real no puede.

> En C12: manejar errores con `try/catch`, estados de carga, y cerrar el módulo.

---

## ¡Gracias! 🙌
### Code 201 · Enter Tech School
