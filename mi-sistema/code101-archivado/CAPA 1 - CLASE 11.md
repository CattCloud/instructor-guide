# CAPA 1 — CLASE 11: Funciones, DOM y Eventos

> **Proyecto Víctima:** `guess-number-js` — el repositorio del alumno. El `script.js` actual solo tiene los ejercicios de condicionales de Clase 10 (votación, temperatura, reto descuento). Hoy se construye el juego Adivina el Número completo desde cero: HTML, JS con funciones y DOM, eventos. Al final de la clase el juego debe funcionar por completo.

> **Regla de cadena Problema-Solución:**
> `Código lineal con prompt/alert (no profesional, no reutilizable)`
> → `Funciones` (organiza la lógica en bloques reutilizables)
> → `DOM` (conecta JS con la página visual)
> → `Eventos` (el usuario interactúa, el juego responde)

---

## MOMENTO 0 — Hook: El Antes y el Después
**Tiempo:** 10 min

**Sub-momentos:**
- 0.1 **DEMO "ANTES":** Abrir el `script.js` actual del alumno. Ejecutar el ejercicio de votación — aparece el `prompt`, aparece el `alert`. Preguntar: *"¿Esto se ve en apps profesionales?"*
- 0.2 **DEMO "DESPUÉS":** Mostrar la interfaz del proyecto final en código. Decir: *"Vamos a crear la interfaz, pero no solo eso, también vamos a adicionar interacción con JS."*
- 0.3 **Puente — diagrama + criterio de éxito:** Mostrar el gráfico de Excalidraw del proyecto. *"Vamos a plasmar este gráfico a una página web funcional. Al final de esta clase ese juego debe funcionar completo — ese es el único criterio que vale."*
- 0.4 **Concepto previo — `null`:** En la clase anterior hablamos de `undefined`. Hoy aparece un valor nuevo: `null`. A diferencia de `undefined` (el lenguaje lo asigna automáticamente cuando algo no tiene valor), `null` es una ausencia de valor **intencional** — la pone el programador o el navegador cuando busca algo y no lo encuentra. Ejemplo concreto: `document.getElementById('id-que-no-existe')` devuelve `null`. Conocerlo aquí es clave porque ocurrirá durante el Code-Along.

---

## MOMENTO 1 — Funciones: El Bloque Reutilizable
**Tiempo:** 20 min
**Objetivo:** El alumno entiende qué es una función, cómo declararla, qué son parámetros y argumentos, qué hace `return` (como salida de valor y como salida anticipada), y para qué sirven los parámetros por defecto.

**Sub-momentos:**
- 1.1 **CONCEPTO:** ¿Por qué existen las funciones? Mostrar código duplicado vs. código con función. El problema real: sin funciones, misma lógica repetida en 3 lugares → si cambia, hay que cambiarla en 3 lugares.
- 1.2 **SINTAXIS:** Declaración con `function`, paréntesis con parámetros, llaves con cuerpo. Diferencia entre declaración (define) e invocación (ejecuta). Demo en vivo: declarar `saludar(nombre)` y llamarla tres veces con distintos argumentos.
- 1.3 **`return`:** Dos roles: devolver un valor (que se puede guardar en variable) y salida anticipada (útil en validaciones). Demo contrastado: función CON `return` vs función SIN `return` — qué pasa cuando se intenta guardar el resultado de una sin `return` → `undefined`.
- 1.4 **Parámetros por defecto:** Si no se pasa un argumento, el parámetro queda `undefined`. Los valores por defecto evitan eso. Regla: `null` no activa el valor por defecto.
- 1.5 **Pregunta de calibración + transición:** *"Si una función tiene `return false` dentro de un `if`, ¿cuándo llega a ejecutarse el código que está debajo del `if`?"* → Conectar con la validación de entrada del juego.

---

## MOMENTO 2 — DOM: JavaScript Controla la Página
**Tiempo:** 15 min
**Objetivo:** El alumno entiende qué es el DOM, que `document` es el punto de entrada, y puede seleccionar elementos con `getElementById`, `getElementsByClassName` y `getElementsByTagName`. Sabe leer y modificar `textContent` y `style`.

**Sub-momentos:**
- 2.1 **CONCEPTO:** El DOM como árbol de objetos — dibujar en Excalidraw en vivo: `document` → `html` → `body` → `div.game-card` → `p#mensaje`. Cada nodo es un objeto con propiedades y métodos.
- 2.2 **`document` como puerta de entrada:** Todo acceso al DOM pasa por `document`. Es el nodo raíz.
- 2.3 **Métodos de selección:**
  - `getElementById("id")` → devuelve un solo elemento o `null`. Es el más usado.
  - `getElementsByClassName("clase")` → devuelve un `HTMLCollection` (múltiples elementos).
  - `getElementsByTagName("etiqueta")` → devuelve todos los `<p>`, `<div>`, etc.
  - En el lab solo usarán `getElementById` — los otros dos se muestran para conocimiento de contexto.
- 2.4 **`textContent` y `style`:** Demo en vivo desde la consola del navegador — modificar el texto de un elemento y cambiar su color. El alumno ve el cambio en tiempo real. Es el momento "wow" del DOM.

---

## MOMENTO 3 — CODE-ALONG Lab Parte 1: HTML + DOM en el Proyecto Real
**Tiempo:** 25 min
**Objetivo:** El alumno reemplaza el `script.js` de condicionales por la nueva versión del juego. Tiene la interfaz HTML en el navegador, los elementos conectados en JS, y su primera función (`mostrarMensaje`) funcionando.

**Sub-momentos:**
- 3.1 **Preparación:** El alumno abre su repositorio `guess-number-js`. Verificar que Live Server está activo.
- 3.2 **Actualizar `index.html`:** Reemplazar el `<body>` con la tarjeta del juego (template ya preparado). Verificar que la interfaz visual aparece en el navegador: tarjeta centrada, input con glow, botón con hover.
- 3.3 **Conectar el DOM en `script.js`:** Reemplazar el contenido actual del `script.js` con las referencias DOM usando `getElementById`. Verificar en consola que ningún elemento devuelve `null`.
- 3.4 **Primera función `mostrarMensaje(texto, color)`:** Declararla, llamarla con `'¡Bienvenido al juego!'` y verificar que el texto aparece en la página con el color indicado.
- 3.5 **Commit:** `git commit -m "feat: interfaz HTML del juego y conexión con DOM"`

**Recursos:** VS Code dividido con Navegador. Consola abierta para verificar.

---

## ⏸ RECESO — 30 min

> **Nota táctica de receso:** Aprovechar para verificar quién tiene errores de `null` no resueltos. Asegurarse de que todos tienen Live Server mostrando la tarjeta visual antes de continuar. El Momento 4 avanza rápido — si alguien está atrasado en el Lab Parte 1, es el momento de nivelarlo.

---

## MOMENTO 4 — Eventos: El Código Escucha al Usuario
**Tiempo:** 10 min
**Objetivo:** El alumno entiende qué es un evento, cómo registrar un listener con `addEventListener`, la diferencia entre pasar la función como referencia (sin `()`) vs ejecutarla (con `()`), y qué es el objeto `event`.

**Sub-momentos:**
- 4.1 **CONCEPTO:** Un evento es una señal — algo ocurrió. Sin un listener, el programa no se entera. Analogía del timbre.
- 4.2 **`addEventListener(evento, manejador)`:** Demo en vivo del error clásico: pasar `verificarIntento()` con paréntesis → se ejecuta inmediatamente. Corregir a `verificarIntento` sin paréntesis.
- 4.3 **Función anónima como manejador:** Cuándo usarla (una sola vez, lógica corta). El parámetro `event` lo provee el navegador automáticamente.

---

## MOMENTO 5 — CODE-ALONG Lab Parte 2: Lógica, Funciones y Eventos
**Tiempo:** 30 min
**Objetivo:** El alumno codifica `verificarIntento()` con toda la lógica del juego, conecta el botón y el Enter con eventos, y ve los mensajes aparecer en la página con colores.

**Sub-momentos:**
- 5.1 **Variables del juego:** `numeroSecreto`, `intentos`, `historialIntentos[]`. Explicar por qué van fuera de las funciones (scope global — accesibles desde cualquier función).
- 5.2 **`verificarIntento()`:** La función principal. Incluye: leer el valor del input, validar con `isNaN` y rango, incrementar contador, actualizar historial, comparar con el número secreto, aplicar celebración visual si gana.
- 5.3 **Evento `click` en el botón:** `btnAdivinar.addEventListener('click', verificarIntento)`. Probar en navegador.
- 5.4 **Evento `keypress` + Enter:** Función anónima que llama a `verificarIntento()` cuando `event.key === 'Enter'`. Probar que funciona desde el teclado.
- 5.5 **Commit:** `git commit -m "feat: verificarIntento con DOM, eventos click y validación"`

---

## MOMENTO 6 — CODE-ALONG Lab Parte 3: Historial, Reinicio y Juego Completo
**Tiempo:** 20 min
**Objetivo:** El alumno codifica `reiniciarJuego()` y `obtenerPista()` (con `return`), conecta el botón de reinicio, y verifica el flujo completo del juego.

**Sub-momentos:**
- 6.1 **`reiniciarJuego()`:** Genera nuevo número secreto, resetea contadores y DOM, muestra botón de reinicio, resetea la celebración visual (borde y sombra de la tarjeta). Conectar con `addEventListener`.
- 6.2 **`obtenerPista(intento, secreto)`:** Función con `return` — calcula la diferencia y devuelve un string con la pista de cercanía (🔥 muy cerca, ♨️ caliente, 🌤️ tibio, ❄️ frío). Integrarla dentro de `verificarIntento()`. Este es el ejemplo de `return` que devuelve un valor en el contexto real del proyecto.
- 6.3 **Verificación del flujo completo:** Probar los 5 pasos: escribir número → pista con color → historial actualizado → texto inválido → ganar → reiniciar.
- 6.4 **Responsividad:** Abrir DevTools → simulador de celular. Verificar que la tarjeta se ve bien.
- 6.5 **Commit final:** `git commit -m "feat: juego completo con funciones, DOM, historial y reinicio"`

---

## MOMENTO 7 — Cierre: Demo, Commit y Preview Demo Day
**Tiempo:** 10 min

**Sub-momentos:**
- 7.1 **Pausa de orgullo:** Proyectar el juego en pantalla completa. Preguntar: *"¿Alguien le cambia el juego? ¿Alguien quiere mostrarlo desde su celular?"*
- 7.2 **Reflexión técnica rápida:** *"¿Qué función usaron más? ¿Cuál fue la más difícil de entender?"*
- 7.3 **Preview Demo Day (Clase 12):** Informar claramente: el juego debe funcionar. Se prepara una presentación de 3 minutos donde explicarán qué hace cada función de su código. No es solo mostrar — es explicar.
- 7.4 **Verificación de commits acumulados:** Deben tener al menos 9 commits en total. Revisar en GitHub.

---

## Tabla de Tiempos

| Momento | Foco Principal | Tiempo |
|---------|---------------|--------|
| 0 | Hook — Antes vs. Después | 10 min |
| 1 | Funciones: concepto, params, return, default | 20 min |
| 2 | DOM: árbol, document, getElementById, textContent | 15 min |
| 3 | CODE-ALONG Lab Parte 1 — HTML + DOM + mostrarMensaje | 25 min |
| ⏸ | Receso | 30 min |
| 4 | Eventos: addEventListener, función anónima, objeto evento | 10 min |
| 5 | CODE-ALONG Lab Parte 2 — verificarIntento + click + Enter | 30 min |
| 6 | CODE-ALONG Lab Parte 3 — reiniciarJuego + obtenerPista | 20 min |
| 7 | Cierre — Demo, commit, preview Demo Day | 10 min |
| _Colchón_ | _Preguntas, null debugging, instalaciones_ | _10 min_ |
| **Total** | | **180 min** |
