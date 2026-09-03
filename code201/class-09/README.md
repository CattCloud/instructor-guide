> 📦 **Módulo 3:** Clase 09 de 12

# Clase 09: JavaScript Moderno y Render Dinámico

## Resumen

La Clase 09 abre el **Módulo 3 — JavaScript Moderno y Consumo de APIs**, cuyo proyecto integrador es una **Pokédex**. En esta primera sesión los estudiantes aprenden la **sintaxis moderna de JavaScript (ES6+)** que usa la industria y la habilidad central de toda app web: **generar HTML desde datos** (render dinámico del DOM).

Se trabaja con un **array local** de Pokémon con **propiedades claras y directas** (`nombre`, `imagen`, `tipos`) para aislar el aprendizaje del *render* del ruido de la red. Los estilos usan **Tailwind CSS**, que ya dominan de C08; aquí solo lo aplican.

Se utilizan dos recursos fundamentales:

1. **Guía de Lectura y Debate:** análisis crítico sobre la sintaxis moderna (template literals vs concatenación, destructuring) y cuándo el render dinámico supera al HTML escrito a mano.
2. **Guía de Laboratorio:** construcción de la base de la Pokédex renderizando tarjetas desde un array con `createElement`, template literals, destructuring, spread y optional chaining.

## Estructura Sugerida

| **Fase** | **Duración** | **Descripción** |
|---|---|---|
| **1. Refuerzo Inicial** | 15 min | Repaso de arrays de objetos (C06) y DOM básico. Conexión con el proyecto del módulo. |
| **2. Debate Técnico** | 30 min | Sintaxis moderna: ¿por qué template literals y destructuring? Render dinámico vs HTML estático. |
| **3. Demostración** | 15 min | Demo en vivo: de un array de objetos a tarjetas en pantalla. |
| **4. Laboratorio** | 100 min | Implementación guiada con checkpoints (30', 60', 90'). |
| **5. Cierre** | 20 min | Retroalimentación y conexión con la asincronía de C10. |

---

## Resultados Esperados

Al culminar esta clase, los estudiantes podrán escribir JavaScript con sintaxis moderna y generar interfaces a partir de datos, sin escribir el HTML elemento por elemento.

### Podrán hacer

- Escribir **template literals** con interpolación (`${...}`) y varias líneas.
- Extraer datos con **destructuring** de objetos y arrays.
- Generar nodos del DOM con `document.createElement()` y `appendChild()`.

### Podrán explicar

- La diferencia entre `innerHTML` (interpreta HTML) y `textContent` (texto plano).
- Por qué el **patrón render** (limpiar → recorrer → agregar) hace que la UI dependa de los datos.
- Cómo `optional chaining` (`?.`) evita errores con datos que pueden faltar.

### Podrán implementar

- Una rejilla de tarjetas de Pokémon **generada desde un array** con JavaScript.
- Badges de tipo construidos con `.map()` + `spread` + `.join()`.
- Acceso seguro a datos con `?.` y valor de respaldo con `??`.
- Un **filtro en vivo** que vuelve a renderizar la lista al escribir (la UI reacciona a los datos).

---

## 🧰 Sintaxis moderna — vocabulario de la clase

| Herramienta | Para qué |
|---|---|
| **Template literal** `` `...${x}...` `` | Construir strings de HTML legibles. |
| **Destructuring** `const { nombre } = pokemon` | Leer propiedades sin repetir `pokemon.`. |
| **Spread** `[...a, ...b]` | Expandir/combinar arrays. |
| **Optional chaining** `obj?.prop` | Acceso seguro a datos anidados. |
| **`createElement` / `appendChild`** | Crear e insertar nodos del DOM. |

> El proyecto Pokédex evoluciona durante todo el módulo: hoy con **datos locales** de propiedades claras; en C11 con datos **reales** traídos de la web, donde aprenderán a adaptar la estructura recibida a la suya.
