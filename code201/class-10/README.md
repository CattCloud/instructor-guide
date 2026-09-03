> 📦 **Módulo 3:** Clase 10 de 12

# Clase 10: Datos desde la web — fetch, Promesas y JSON

## Resumen

En la Clase 10 la Pokédex deja de usar un array local y empieza a **traer sus datos de una API real** (PokeAPI). Es el primer contacto de los estudiantes con la **asincronía** en su contexto natural: los datos de internet **tardan** en llegar, y JavaScript no se congela esperándolos.

Se introducen `fetch` (que devuelve una **Promesa**), el formato **JSON** en que viajan los datos, y el consumo de promesas con `.then`/`.catch`. Como la API entrega una estructura distinta a la forma limpia de C09, se escribe una **función adaptadora** que la traduce, para reusar `crearTarjeta`/`render` sin cambios. Finalmente, con **`Promise.all`** se cargan varios Pokémon en paralelo para llenar la rejilla, y el buscador de C09 sigue funcionando sobre esa rejilla cargada.

> 🔁 `async/await` **no** se ve hoy: hoy se consume con `.then`. En C11 se **reformula** ese código con `async/await`.

Se utilizan dos recursos fundamentales:

1. **Guía de Lectura y Debate:** qué es una API, por qué JSON es el formato universal, y por qué el código asíncrono no bloquea la interfaz.
2. **Guía de Laboratorio:** cargar la Pokédex desde la API con `fetch`, adaptar la estructura y traer varios Pokémon en paralelo con `Promise.all`.

## Estructura Sugerida

| **Fase** | **Duración** | **Descripción** |
|---|---|---|
| **1. Refuerzo Inicial** | 15 min | Repaso del render de C09. ¿Y si los datos no están en tu código sino en internet? |
| **2. Debate Técnico** | 30 min | API, JSON, asincronía: por qué los datos "tardan" y cómo se manejan con Promesas. |
| **3. Demostración** | 15 min | Demo en vivo: el JSON real de PokeAPI y un `fetch` que carga un Pokémon. |
| **4. Laboratorio** | 100 min | Implementación guiada con checkpoints (15', 40', 60', 80', 95'). |
| **5. Cierre** | 20 min | Síntesis + puente a `async/await` (C11). |

---

## Resultados Esperados

Al culminar esta clase, los estudiantes podrán consumir una API real, interpretar su respuesta JSON y mostrarla en la interfaz, entendiendo el carácter asíncrono de la red.

### Podrán hacer

- Pedir datos a una URL con `fetch` y consumirlos con `.then`/`.catch`.
- Convertir una respuesta JSON en objeto JavaScript con `response.json()`.
- Cargar varios recursos en paralelo con `Promise.all`.

### Podrán explicar

- Por qué los datos de una API "tardan" y qué significa que el código sea asíncrono.
- Qué es JSON y por qué su estructura no es igual a la forma limpia de la app.
- La ventaja de cargar en paralelo (`Promise.all`) frente a uno por uno.

### Podrán implementar

- Una Pokédex que carga su rejilla desde la PokeAPI.
- Una función adaptadora que traduce la estructura de la API a la del proyecto.
- La reconexión del buscador de C09 sobre la rejilla cargada de la web.

---

## 🌐 De los datos locales a los datos de la web

| C09 (local) | C10 (web) |
|---|---|
| `pokemonLocal` (array fijo en el código) | `fetch` a la PokeAPI |
| Listo al instante | Tarda → asincronía |
| Forma limpia `{ nombre, imagen, tipos }` | Estructura anidada → **adapter** |
| — | Varios a la vez → `Promise.all` |

> El `render` y el filtro de C09 **no cambian**: solo cambia de dónde vienen los datos. La rejilla ahora vive de la web — y así seguirá hasta el final del módulo.

## ⚠️ Nota sobre la red

Esta clase requiere **conexión a internet**. La PokeAPI es gratuita y no necesita clave. El manejo robusto de fallos (sin red, no encontrado) se profundiza en C12.
