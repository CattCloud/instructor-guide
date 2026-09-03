> 📦 **Módulo 4:** Clase 14 de 16

# Clase 14: Interacción y Datos Derivados

## Resumen

En la Clase 13 montaste el estado central de tu Gestor de Plantillas y lo dibujaste en pantalla con `render()`. Hoy tu app deja de ser solo "leer y agregar": se vuelve **interactiva de verdad**. Vas a **eliminar** y **editar** plantillas, y a calcular **datos derivados** —como el total y el conteo por hashtag— a partir del mismo estado.

La pieza nueva es la **delegación de eventos**: en lugar de enganchar un listener a cada botón (que desaparece cada vez que re-renderizas), pones **uno solo** en el contenedor y, según dónde se hizo clic, decides qué hacer. Cerrarás con `.sort()` para ordenar la lista por fecha o alfabéticamente.

Seguimos sin persistencia: todo vive en memoria. En la próxima clase le pondrás `localStorage` para que tus datos sobrevivan al recargar.

---

## ¿Por qué te sirve?

- **La delegación de eventos es como casi toda app real maneja listas.** Cuando tienes cientos de filas que aparecen y desaparecen (un feed, un carrito, una bandeja de correo), poner un listener por elemento es inviable. Un solo listener en el padre escala sin esfuerzo.
- **WhatsApp, Trello y Gmail muestran "datos derivados" todo el tiempo.** El contador de no leídos, el total de tarjetas por columna, el número junto a cada etiqueta: ninguno se guarda, todos se **calculan** del estado. Eso es exactamente lo que harás hoy.
- **El CRUD completo es la base de cualquier aplicación con datos.** Crear, leer, actualizar y borrar: dominar las cuatro operaciones —y hacerlo de forma inmutable— es una habilidad transferible a cualquier stack profesional.

---

## 🎯 ¿Qué haremos en clase?

1. **Implementaremos la delegación de eventos** - Un solo listener en la lista que atiende los clics de todas las tarjetas.
2. **Completarás el CRUD** - Eliminarás y editarás plantillas sin mutar el estado, con `.filter` y `.map`.
3. **Calcularás datos derivados** - Total y conteo por hashtag con una función pura.
4. **Ordenarás la lista con `.sort()`** - Por fecha (más recientes primero) o alfabéticamente.

---

## Objetivos de Aprendizaje

Al finalizar esta clase, podrás:

1. **Implementar** la delegación de eventos: un único listener que usa `event.target`, `classList.contains` y `data-id` para atender N elementos.
2. **Construir** las operaciones de editar y eliminar de forma inmutable (`.filter`, `.map` + spread).
3. **Escribir** funciones puras que derivan datos del estado (`contarPorHashtag` con `.reduce`).
4. **Ordenar** un array con `.sort()` y un comparador, sin mutar el estado original.

---

## ✅ Preparación para la Clase

### De clases anteriores

- Tu proyecto `whatsapp-templates` de C13, con la clase `Template`, el estado central y `render()` funcionando.
- El patrón **estado → `render()`**: toda la UI se redibuja a partir del estado.
- `.filter`, `.map` y `.reduce` (los viste en el Módulo 2) y el spread (`...`) para copiar sin mutar.

### Reflexión previa

Antes de llegar a clase, reflexiona sobre:

- Si tu lista tuviera 500 plantillas, ¿tendría sentido poner 500 "escuchadores" de clic, uno por botón? ¿Qué problema traería?
- El contador de mensajes no leídos de WhatsApp, ¿crees que se guarda en algún lado o se calcula cada vez? ¿De qué dato saldría?

### Herramientas

- [ ] **VS Code** con Live Server, como en clases anteriores.
- [ ] **Tu repositorio** `whatsapp-templates` con lo de C13 funcionando.

### Lectura sugerida

- [MDN: Delegación de eventos](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events#delegaci%C3%B3n_de_eventos){:target="_blank"} - Qué es y por qué un solo listener basta.
- [MDN: Array.prototype.sort()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort){:target="_blank"} - Cómo funciona el comparador `(a, b)`.

---

## Glosario

| Término | Definición |
|---------|------------|
| **Delegación de eventos** | Un solo listener en el contenedor padre que, según en qué hijo se hizo clic (`event.target`), decide qué hacer. |
| **`data-id`** | Atributo HTML (`data-id="..."`) que guarda el id de un elemento para saber sobre cuál se actuó (se lee con `dataset.id`). |
| **CRUD** | Las cuatro operaciones sobre datos: Crear, Leer, Actualizar (editar) y Borrar (eliminar). |
| **Función pura** | Función que recibe datos y devuelve un resultado sin modificar nada externo: `(estado) → resultado`. |
| **Datos derivados** | Información calculada a partir del estado (total, conteos), que no se guarda: se recalcula en cada `render()`. |
| **Comparador** | Función `(a, b)` que `.sort()` usa para ordenar: devuelve negativo si `a` va antes, positivo si va después. |

---

## Recursos Adicionales

- [MDN: classList](https://developer.mozilla.org/es/docs/Web/API/Element/classList){:target="_blank"} - Cómo `contains()` detecta en qué botón se hizo clic.
- [MDN: String.prototype.localeCompare()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare){:target="_blank"} - Ordenar texto respetando tildes y mayúsculas.
