> 📦 **Módulo 3:** Clase 11 de 12

# Clase 11: async/await y búsqueda en la API

## Resumen

En la Clase 11 los estudiantes **reformulan** el código asíncrono de C10: lo que escribieron con `.then` encadenado lo reescriben con **`async/await`**, la sintaxis moderna que hace que el código asíncrono se lea como una secuencia de pasos. Es la misma lógica de promesas de C10, más legible.

Además, el buscador **evoluciona**: en C10 filtraba la rejilla que ya estaba cargada; aquí pasa a **consultar la API por nombre** y mostrar el Pokémon encontrado con un botón **Capturar**. Al capturarlo, se suma a la colección (`pokedex`), haciendo crecer el estado de la app. Es el primer contacto con la idea de "el estado de mi app crece según lo que el usuario hace" —que se formaliza en M4.

> 🔁 `async/await` se enseña como **azúcar sobre las Promesas** de C10, no como una tecnología distinta.

Se utilizan dos recursos fundamentales:

1. **Guía de Lectura y Debate:** `async/await` vs `.then`, y qué significa "buscar en una API" frente a "filtrar lo local".
2. **Guía de Laboratorio:** reformular la carga con `async/await`, buscar por nombre en la API y capturar el resultado en la Pokédex con un botón.

## Estructura Sugerida

| **Fase** | **Duración** | **Descripción** |
|---|---|---|
| **1. Refuerzo Inicial** | 15 min | Repaso del `.then` de C10. ¿Se puede leer más claro? |
| **2. Debate Técnico** | 30 min | `async/await` como azúcar sobre promesas; buscar vs filtrar. |
| **3. Demostración** | 15 min | Demo: el mismo `fetch` con `.then` y con `async/await`. |
| **4. Laboratorio** | 100 min | Implementación guiada con checkpoints (15', 35', 55', 75', 95'). |
| **5. Cierre** | 20 min | Síntesis + el error de "no existe" → C12. |

---

## Resultados Esperados

Al culminar esta clase, los estudiantes escribirán código asíncrono legible con `async/await` y consumirán una API para buscar recursos específicos.

### Podrán hacer

- Reescribir cadenas `.then` como funciones `async` con `await`.
- Buscar un recurso por nombre en una API con `fetch` + `await`.
- Capturar el resultado (botón en la tarjeta) y sumarlo al estado (`pokedex`).
- Navegar el JSON de la respuesta para leer datos adicionales (estadísticas).
- Pedir páginas de resultados con parámetros de consulta (`?limit`, `?offset`).

### Podrán explicar

- Que `async/await` es otra forma de escribir promesas, más legible.
- La diferencia entre **filtrar** lo que ya tienes y **buscar** en la API.
- La diferencia entre un parámetro de **ruta** (`/pokemon/pikachu`) y de **consulta** (`?limit=12`).
- Que la respuesta de una API trae más de lo que se usa, y cómo extraer lo necesario.

### Podrán implementar

- Una carga de la rejilla reformulada con `async/await`.
- Un buscador que consulta la API por nombre y muestra el detalle (stats) del resultado.
- El botón **Capturar** que suma a la Pokédex sin duplicar.
- Un botón **"Cargar más"** que pagina la lista con `?limit`/`?offset`.

---

## 🔁 De `.then` a `async/await`

```javascript
// C10
fetch(url).then(r => r.json()).then(data => { ... });

// C11 — mismo resultado, se lee de arriba a abajo
const response = await fetch(url);
const data = await response.json();
```

> No es una tecnología nueva: es la **misma promesa**, escrita como pasos secuenciales.

## 🔍 De filtrar a buscar

| C10 | C11 |
|---|---|
| El buscador **filtra** `pokedex` (lo que ya cargaste) | El buscador **consulta la API** por nombre |
| Solo encuentra lo que está en la rejilla | Encuentra **cualquier** Pokémon |
| — | El resultado se **agrega** a tu colección |

## ⚠️ Nota sobre la red

Requiere internet. Si el nombre no existe, la app falla — eso se maneja en C12 con `try/catch`.
