# Clase 09 — JavaScript Moderno y Render Dinámico
### Code 201 · Módulo 3 (apertura) · Proyecto: Pokédex

---

## 🎯 Objetivo de la Clase

- Escribir JavaScript con **sintaxis moderna (ES6+)**.
- **Generar HTML desde datos** (render dinámico del DOM).
- Construir la base de la **Pokédex** desde un array local.

> Hoy sin internet: datos locales con la **forma** de la API real.

---

## 🗺️ El Módulo 3 — Pokédex

```
C09  JS Moderno     → render de datos locales
C10  Asincronía     → Promesas (API simulada)
C11  fetch + JSON   → datos REALES de PokeAPI
C12  Errores        → app robusta (+ Markdown)
```

> Una sola app que crece clase a clase.

---

## 📝 Template literals

```javascript
const nombre = "pikachu";

// antes: concatenación
const a = "Hola, " + nombre + "!";

// ahora: template literal
const b = `Hola, ${nombre}!`;
```

* Backticks `` ` `` en vez de comillas.
* `${...}` inserta valores.
* Permite **varias líneas** → ideal para HTML.

---

## 🧱 El patrón render

```javascript
const contenedor = document.getElementById("resultado");

function render(lista) {
  contenedor.innerHTML = "";               // 1. limpia
  lista.forEach(function (pokemon) {
    const tarjeta = crearTarjeta(pokemon);  // 2. crea
    contenedor.appendChild(tarjeta);        // 3. agrega
  });
}
```

> Limpiar → recorrer → agregar. La UI **depende de los datos**.

---

## 🏗️ createElement + innerHTML

```javascript
const articulo = document.createElement("article");
articulo.className = "bg-white rounded-xl shadow p-4";
articulo.innerHTML = `
  <img src="${pokemon.imagen}">
  <h2>${pokemon.nombre}</h2>
`;
```

* `createElement` → crea el nodo.
* `innerHTML` → interpreta el string como **HTML**.
* `textContent` → texto plano (sin etiquetas).

---

## 📦 Destructuring

```javascript
// sin destructuring
const nombre = pokemon.nombre;
const tipos = pokemon.tipos;

// con destructuring (una línea)
const { nombre, imagen, tipos } = pokemon;
```

> Sacas las propiedades que necesitas, sin repetir `pokemon.`.

---

## ✨ Spread + .map para los tipos

```javascript
const badges = tipos
  .map(tipo => `<span class="badge">${tipo}</span>`)
  .join("");
```

* `tipos` es un **array** de textos (uno o varios tipos).
* `.map()` → un badge por tipo · `.join("")` → un solo string.

---

## 🛡️ Optional chaining `?.`

```javascript
// ?? : respaldo si falta la imagen
const img = pokemon.imagen ?? "placeholder.png";

// ?. : acceso seguro si el dato no existe
const cuantos = pokemon.tipos?.length ?? 0;
```

* `?.` → devuelve `undefined` en vez de romper.
* `??` → valor de respaldo si es `null`/`undefined`.

> Adiós al *"cannot read property of undefined"*.

---

## ⚙️ Estructura del Lab

| HU | Tiempo | Contenido |
|---|---|---|
| **HU1** | ~30 min | Maqueta de la tarjeta con Tailwind |
| **HU2** | ~30 min | Render dinámico (template literals + createElement) |
| **HU3** | ~30 min | Destructuring + spread + optional chaining |
| **HU4** | ~10 min | Filtro en vivo: re-render al escribir |

> Datos: array local de 6 Pokémon (forma de la API).

---

## 🤔 Discusión

- ¿Por qué generar HTML desde datos es mejor que escribirlo a mano?
- ¿Qué pasa si la app tiene 1000 Pokémon en vez de 6?
- ¿En qué se parece esto a lo que hace cualquier red social con tu feed?

> **Idea clave:** los datos mandan; el HTML es solo su reflejo.

---

## ➡️ Lo que viene (C10)

Hoy los datos están **ahí, listos**. Pero una API real **tarda** en responder.

> En C10: ¿cómo maneja JavaScript algo que no llega al instante? → **Asincronía y Promesas**.

---

## ¡Gracias! 🙌
### Code 201 · Enter Tech School
