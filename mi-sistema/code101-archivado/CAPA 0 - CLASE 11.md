# CAPA 0 — CLASE 11: Funciones, DOM y Eventos

> **Contexto técnico:** Esta clase tiene dos bloques distintos pero relacionados. Primero: **funciones** — cómo organizar la lógica en bloques reutilizables con nombre. Segundo: **DOM + Eventos** — cómo JavaScript controla lo que el usuario ve en la página y responde a sus acciones. Ambos se aplican en la refactorización del juego Adivina el Número: de prompt/alert a una interfaz visual real.

---

## BLOQUE 1 — FUNCIONES

---

### CONCEPTO: Función
Una función es un bloque de código con nombre que ejecuta una tarea específica. Se declara una vez con la palabra clave `function` y se puede invocar (llamar) tantas veces como se necesite desde cualquier parte del programa. Evita la duplicación de código y permite que cada parte del programa tenga una responsabilidad clara.

**Sintaxis mínima:**
```js
function nombre(parámetro1, parámetro2) {
  // instrucciones
}
```

**Dependencia técnica:** Una función no se ejecuta al ser declarada — solo cuando es invocada por su nombre seguido de paréntesis: `nombre()`.

### ANALOGÍA: La máquina de café
Una máquina de café es una función: le das los ingredientes (parámetros), ejecuta el proceso interno, y produce un resultado. No necesitas saber cómo funciona por dentro — solo qué le das y qué recibes. Si quieres otro café, la vuelves a activar.

### ESTRATEGIA VISUAL: Excalidraw
Dibujar en vivo: una caja con nombre arriba, flechas de entrada (parámetros) por la izquierda, flechas de salida (return o efecto) por la derecha. Ejemplo concreto: `mostrarMensaje(texto, color)` → modifica el DOM.

---

### CONCEPTO: Parámetros y Argumentos
Los **parámetros** son las variables que una función declara para recibir datos. Los **argumentos** son los valores concretos que se pasan al invocar la función.

```js
// parámetros: texto, color
function mostrarMensaje(texto, color) {
  mensaje.textContent = texto;
  mensaje.style.color = color;
}

// argumentos: '¡Correcto!', '#00ff88'
mostrarMensaje('¡Correcto!', '#00ff88');
```

**Dependencia técnica:** El número de argumentos al llamar la función debe coincidir con el número de parámetros declarados. Si se pasan de más, los extras se ignoran. Si se pasan de menos, los faltantes son `undefined`.

### ESTRATEGIA VISUAL: Código en vivo (VS Code)
Demostrar ejecutando la misma función con tres argumentos diferentes. El alumno ve que el código no cambia — solo los datos de entrada.

---

### CONCEPTO: `return` — Valor de retorno
La palabra clave `return` finaliza la ejecución de una función y opcionalmente devuelve un valor al código que la invocó. Sin `return`, la función produce un efecto (ej: modifica el DOM) pero no entrega nada — devuelve `undefined` implícitamente.

```js
// Con return: devuelve un valor
function obtenerPista(intento, secreto) {
  let diferencia = Math.abs(intento - secreto);
  if (diferencia <= 5) return '🔥 ¡Muy cerca!';
  if (diferencia <= 15) return '♨️ Caliente';
  return '❄️ Frío';
}

let pista = obtenerPista(45, 50);  // pista = '🔥 ¡Muy cerca!'
```

**Dependencia técnica:** El `return` también actúa como **salida anticipada** — si se ejecuta dentro de un `if`, la función termina ahí y el código siguiente no se ejecuta. Útil para validaciones.

### ESTRATEGIA VISUAL: Código en vivo (VS Code)
Contrastar dos funciones lado a lado: una que usa `return` (y cuyo resultado se guarda en variable) y otra que solo ejecuta `console.log` (y cuyo "resultado" guardado es `undefined`).

---

### CONCEPTO: Refactorización
Refactorizar es reorganizar código existente para que sea más claro, mantenible o reutilizable, **sin cambiar su comportamiento externo**. El programa hace exactamente lo mismo — solo está mejor organizado. Es una habilidad profesional cotidiana.

**En el contexto del juego:** El código lineal de la Clase 10 (con `prompt`/`alert`) se mueve dentro de funciones nombradas (`verificarIntento`, `mostrarMensaje`, `reiniciarJuego`). La lógica no cambia — la estructura sí.

### ANALOGÍA: El closet reorganizado
Tienes la misma ropa. No compraste nada nuevo. Solo la organizaste: camisas juntas, pantalones juntos. Encuentras todo más rápido y no mezclas lo que no debe mezclarse.

### ESTRATEGIA VISUAL: Presentación Canva — "Antes / Después"
Dos bloques de código lado a lado: el script.js plano de Clase 10 vs. el mismo código dividido en funciones. Mismo resultado, diferente estructura.

---

## BLOQUE 2 — DOM (Document Object Model)

---

### CONCEPTO: El DOM
El DOM (Document Object Model) es la representación del HTML como un árbol de objetos que JavaScript puede leer y modificar. Cuando el navegador carga una página HTML, la convierte en este árbol. Cada etiqueta (`<p>`, `<div>`, `<button>`) se convierte en un objeto con propiedades y métodos accesibles desde JavaScript.

**Dependencia técnica:** El DOM no es parte de JavaScript — es una API del navegador. JavaScript accede a él a través del objeto global `document`.

### ANALOGÍA: El control remoto de la TV
El HTML es lo que se ve en pantalla (la TV). El DOM es la interfaz técnica que te permite modificarlo. `document` es el control remoto. Con él puedes cambiar el canal (`textContent`), ajustar el volumen (`style`) o apagar y prender elementos (`style.display`).

### ESTRATEGIA VISUAL: Excalidraw — árbol del DOM
Dibujar el árbol: `document` → `<html>` → `<body>` → `<div class="game-card">` → `<p id="mensaje">`. Mostrar que cada nodo es un objeto con propiedades.

---

### CONCEPTO: `document.getElementById()`
Método del objeto `document` que busca en el HTML un elemento con un atributo `id` específico y lo devuelve como un objeto JavaScript. Si encuentra el elemento, devuelve el objeto del nodo. Si no existe, devuelve `null`.

```js
const mensaje = document.getElementById('mensaje');
// mensaje es ahora el objeto que representa a <p id="mensaje">
```

**Dependencia técnica:** Los `id` son **case-sensitive** — `'mensaje'` y `'Mensaje'` son distintos. El `<script>` debe cargarse **después** del HTML que referencia, o encontrará `null`.

### ESTRATEGIA VISUAL: Demo en vivo — DevTools → Consola
Ejecutar `document.getElementById('mensaje')` en la consola del navegador. Ver el objeto retornado. Luego modificarlo en la consola y observar el cambio instantáneo en la página.

---

### CONCEPTO: `textContent` y `style`
Dos propiedades fundamentales de los elementos del DOM:

- **`textContent`**: lee o escribe el texto visible de un elemento. No interpreta HTML — solo texto plano.
- **`style`**: objeto con todas las propiedades CSS del elemento. Cada propiedad CSS se accede en camelCase: `background-color` → `style.backgroundColor`.

```js
const el = document.getElementById('mensaje');
el.textContent = '¡Correcto!';      // cambia el texto
el.style.color = '#00ff88';         // cambia el color
el.style.fontSize = '24px';         // cambia el tamaño
```

**Dependencia técnica:** Los valores de `style` se asignan siempre como **strings** — incluyendo las unidades (`'24px'`, `'red'`, `'none'`).

### ESTRATEGIA VISUAL: Demo en vivo — Consola del navegador
El instructor modifica `textContent` y `style.color` desde la consola. El alumno ve el cambio ocurrir en tiempo real en la página — ese es el momento "wow" del DOM.

---

## BLOQUE 3 — EVENTOS

---

### CONCEPTO: Evento
Un evento es una acción del usuario (o del navegador) que el programa puede detectar y responder. Ejemplos: `click` en un botón, `keypress` en el teclado, `scroll` en la página, `focus` en un input. Los eventos son la base de la interactividad en la web.

**Dependencia técnica:** Los eventos no se ejecutan automáticamente — el programa debe **registrar** que quiere escucharlos. Sin un listener, el evento ocurre pero el programa no reacciona.

### ANALOGÍA: El timbre de la puerta
`addEventListener('click', función)` es instalar un timbre. El timbre existe pero no hace nada hasta que alguien lo presiona. Cuando el usuario hace clic (presiona el timbre), la función se ejecuta (tú abres la puerta). Sin timbre instalado, nadie puede avisarte.

### ESTRATEGIA VISUAL: Excalidraw
Diagrama: Usuario → [hace clic] → Evento → Listener lo detecta → Función se ejecuta → DOM se modifica → Usuario ve el cambio.

---

### CONCEPTO: `addEventListener()`
Método que registra en un elemento del DOM la función que se debe ejecutar cuando ocurre un evento específico. Recibe dos argumentos: el nombre del evento (string) y la función a ejecutar (referencia, sin paréntesis).

```js
btnAdivinar.addEventListener('click', verificarIntento);
//                            ↑ evento   ↑ función (sin paréntesis)
```

**Dependencia técnica crítica:** Se pasa la **referencia** a la función, NO su ejecución. `verificarIntento` (sin paréntesis) es correcto — pasa la función. `verificarIntento()` (con paréntesis) es incorrecto — ejecuta la función inmediatamente y pasa su resultado (`undefined`).

### ESTRATEGIA VISUAL: Código en vivo (VS Code + Navegador)
Demostrar el error clásico: escribir `addEventListener('click', verificarIntento())` con paréntesis — se ejecuta inmediatamente, el botón nunca funciona. Luego corregir a `verificarIntento` sin paréntesis.

---

### CONCEPTO: Función Anónima en Evento
Una función anónima es una función sin nombre, definida directamente donde se usa. Es común pasarlas como argumento a `addEventListener` cuando la lógica es corta y no se reutiliza en otro lugar.

```js
inputIntento.addEventListener('keypress', function(evento) {
  if (evento.key === 'Enter') {
    verificarIntento();
  }
});
```

**Dependencia técnica:** El parámetro `evento` (o `e`) es el objeto que el navegador pasa automáticamente a la función cuando el evento ocurre. Contiene información del evento: `evento.key`, `evento.target`, `evento.type`, etc.

### ESTRATEGIA VISUAL: Código en vivo (VS Code)
Mostrar que la función anónima se define directamente en el argumento. Ejecutar y probar con la tecla Enter.

---

## TABLA RESUMEN DE CONCEPTOS

| Concepto | Dependencia técnica clave | Herramienta visual |
|---|---|---|
| Función | No se ejecuta hasta ser invocada | Excalidraw |
| Parámetros / Argumentos | Orden y cantidad deben coincidir | Código en vivo |
| `return` | Sale de la función, devuelve valor | Código lado a lado |
| Refactorización | Sin cambio de comportamiento | Canva Antes/Después |
| DOM | API del navegador, acceso vía `document` | Excalidraw árbol |
| `getElementById()` | Case-sensitive, script después del HTML | DevTools Consola |
| `textContent` / `style` | Strings con unidades en `style` | Consola en vivo |
| `addEventListener()` | Referencia sin paréntesis | Código + demo de error |
| Función anónima | El parámetro `evento` lo provee el navegador | Código en vivo |
