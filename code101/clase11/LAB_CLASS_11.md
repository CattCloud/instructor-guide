# Lab 11: Funciones: Los Bloques de Construcción

> 🚀 **Proyecto del Módulo:** Adivina el Número - Juego Interactivo
>
> 📌 **Este lab:** Refactorizar el juego con funciones, DOM y eventos. El juego queda COMPLETO.

## 🎯 Objetivos del Lab

1. Crear la interfaz HTML del juego con input, botón y áreas de mensaje
2. Declarar funciones con parámetros y `return` para organizar la lógica
3. Conectar JavaScript con el DOM usando `getElementById()`, `textContent` y `style`
4. Usar `addEventListener('click')` para que el botón ejecute la verificación

---

## 🔑 Conceptos Clave

- **Función** - Bloque de código con nombre que realiza una tarea. Se declara una vez y se usa muchas veces
- **getElementById()** - Selecciona un elemento HTML por su `id` para manipularlo desde JavaScript
- **textContent** - Propiedad para cambiar el texto visible de un elemento
- **addEventListener()** - Conecta un evento (click) con una función que se ejecuta al ocurrir
- **Refactorización** - Reorganizar código existente para mejorarlo sin cambiar su comportamiento

---

## ⚙️ Tu Proyecto Hasta Ahora

Antes de comenzar, verifica que tienes de los Labs 09-10:

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | Repositorio `guess-number-js` | Existe en tu GitHub |
| ☐ | `Math.random()` genera número secreto | Número entre 1-100 en consola |
| ☐ | `if/else if/else` da pistas | Alto/bajo/correcto funciona |
| ☐ | Validación con `isNaN()` | Rechaza texto y fuera de rango |

---

## Parte 1: La Interfaz del Juego (30 min)

### 1.1 Actualiza el HTML

Abre `index.html` y reemplaza el contenido del `<body>` con la interfaz del juego:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Adivina el Número</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
      color: #eee;
      padding: 20px;
    }

    .game-card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(233, 69, 96, 0.3);
      border-radius: 20px;
      padding: 40px 30px;
      max-width: 420px;
      width: 100%;
      text-align: center;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
      transition: border-color 0.5s, box-shadow 0.5s;
    }

    h1 {
      color: #e94560;
      font-size: 1.8rem;
      margin-bottom: 8px;
    }

    .subtitle {
      color: #aaa;
      margin-bottom: 24px;
    }

    .controls {
      display: flex;
      gap: 10px;
      justify-content: center;
      margin-bottom: 20px;
    }

    input {
      padding: 12px;
      font-size: 18px;
      width: 100px;
      text-align: center;
      border: 2px solid rgba(233, 69, 96, 0.4);
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      color: #eee;
      outline: none;
      transition: border-color 0.3s, box-shadow 0.3s;
    }
    input:focus {
      border-color: #e94560;
      box-shadow: 0 0 12px rgba(233, 69, 96, 0.3);
    }
    /* Ocultar flechas del input numérico */
    input::-webkit-inner-spin-button,
    input::-webkit-outer-spin-button { -webkit-appearance: none; }
    input[type=number] { -moz-appearance: textfield; }

    button {
      padding: 12px 24px;
      font-size: 18px;
      background-color: #e94560;
      color: white;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      transition: transform 0.2s, background-color 0.3s;
    }
    button:hover {
      background-color: #d63d56;
      transform: translateY(-2px);
    }
    button:active { transform: translateY(1px); }
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }

    #mensaje {
      font-size: 24px;
      margin: 20px 0;
      min-height: 40px;
      transition: font-size 0.3s;
    }

    #historial {
      margin-top: 20px;
      font-size: 14px;
      color: #aaa;
    }

    #btnReiniciar {
      background-color: #0f3460;
      margin-top: 12px;
    }

    @media (max-width: 480px) {
      .game-card { padding: 30px 20px; }
      .controls { flex-direction: column; align-items: center; }
      input { width: 80%; }
      button { width: 80%; }
    }
  </style>
</head>
<body>
  <div class="game-card" id="game-card">
    <h1>🎯 Adivina el Número</h1>
    <p class="subtitle">Estoy pensando en un número del 1 al 100...</p>

    <div class="controls">
      <input type="number" id="inputIntento" min="1" max="100" placeholder="?">
      <button id="btnAdivinar">Adivinar</button>
    </div>

    <p id="mensaje"></p>
    <p id="contador">Intentos: 0</p>
    <p id="historial">Historial: </p>

    <button id="btnReiniciar" style="display: none;">
      🔄 Jugar de nuevo
    </button>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

Abre con Live Server. Deberías ver la interfaz del juego con un input, un botón y áreas para mensajes.

### 1.2 Conecta JS con el DOM

Ahora reemplaza el contenido de `script.js` con el inicio de la nueva versión:

```js
// === ADIVINA EL NÚMERO - Versión DOM ===

// --- Seleccionar elementos del HTML ---
const inputIntento = document.getElementById('inputIntento');
const btnAdivinar = document.getElementById('btnAdivinar');
const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');
const historial = document.getElementById('historial');
const btnReiniciar = document.getElementById('btnReiniciar');
const tarjeta = document.getElementById('game-card');

console.log('Elementos conectados:', inputIntento, btnAdivinar, mensaje);
```

Guarda y verifica en la consola que los elementos NO son `null`.

> 💡 **`getElementById('id')`** busca en el HTML un elemento con ese `id` y te lo devuelve como un objeto JavaScript. Si no encuentra nada, devuelve `null`.

### 1.3 Tu Primera Función

Agrega tu primera función al archivo:

```js
// --- Tu primera función ---
function mostrarMensaje(texto, color) {
  mensaje.textContent = texto;
  mensaje.style.color = color;
}

// Prueba la función
mostrarMensaje('¡Bienvenido al juego!', '#e94560');
```

Guarda y observa cómo el mensaje aparece en la página con el color indicado.

> 💡 **Anatomía de una función:**
> - `function` → palabra clave
> - `mostrarMensaje` → nombre de la función
> - `(texto, color)` → parámetros (datos que recibe)
> - `{ ... }` → cuerpo (código que ejecuta)

### 1.4 Commit

```bash
git add index.html script.js
git commit -m "feat: interfaz HTML del juego y conexión con DOM"
git push
```

✅ **Checkpoint:** La página muestra una tarjeta centrada con el juego (input, botón, áreas de mensaje). El input brilla al enfocarse y el botón sube en hover. `getElementById()` conecta los elementos. `mostrarMensaje()` cambia texto y color en la página.

---

## Parte 2: Lógica con Funciones y Eventos (35 min)

### 2.1 Variables del Juego

Agrega las variables del juego después de las referencias al DOM:

```js
// --- Variables del juego ---
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let historialIntentos = [];

console.log('(DEBUG) Número secreto:', numeroSecreto);
```

### 2.2 La Función Principal: verificarIntento()

Agrega la función que contiene toda la lógica:

```js
// --- Función principal ---
function verificarIntento() {
  let valor = Number(inputIntento.value);

  // Validar entrada
  if (isNaN(valor) || valor < 1 || valor > 100) {
    mostrarMensaje('⚠️ Ingresa un número del 1 al 100', 'orange');
    return;
  }

  // Incrementar contador
  intentos++;
  contador.textContent = 'Intentos: ' + intentos;

  // Agregar al historial
  historialIntentos.push(valor);
  historial.textContent = 'Historial: ' + historialIntentos.join(', ');

  // Comparar con el número secreto
  if (valor === numeroSecreto) {
    mostrarMensaje('🎉 ¡Correcto! Era el ' + numeroSecreto, '#00ff88');
    btnAdivinar.disabled = true;
    btnReiniciar.style.display = 'inline-block';
    // Celebración visual: la tarjeta brilla verde
    tarjeta.style.borderColor = '#00ff88';
    tarjeta.style.boxShadow = '0 0 40px rgba(0, 255, 136, 0.3)';
  } else if (valor > numeroSecreto) {
    mostrarMensaje('📈 Muy alto. Intenta más bajo.', '#ff6b6b');
  } else {
    mostrarMensaje('📉 Muy bajo. Intenta más alto.', '#4ecdc4');
  }

  // Limpiar input y enfocar
  inputIntento.value = '';
  inputIntento.focus();
}
```

> 💡 **`return` sin valor** en la validación: si la entrada es inválida, `return` sale de la función inmediatamente sin ejecutar el resto del código. Es como decir "detente aquí".

### 2.3 Conecta el Evento Click

Agrega el evento que conecta el botón con la función:

```js
// --- Conectar eventos ---
btnAdivinar.addEventListener('click', verificarIntento);
```

Guarda y prueba: escribe un número en el input y haz clic en "Adivinar". El mensaje debería aparecer en la página con colores.

> 💡 **`addEventListener('click', verificarIntento)`** le dice al navegador: "Cuando el usuario haga clic en este botón, ejecuta la función `verificarIntento`". Nota que escribimos `verificarIntento` SIN paréntesis—pasamos la función como referencia, no la ejecutamos inmediatamente.

### 2.4 Agrega Enter para Adivinar

Para que el jugador pueda presionar Enter en lugar de hacer clic:

```js
// --- Enter también funciona ---
inputIntento.addEventListener('keypress', function(evento) {
  if (evento.key === 'Enter') {
    verificarIntento();
  }
});
```

### 2.5 Commit

```bash
git add script.js
git commit -m "feat: verificarIntento con DOM, eventos click y validación"
git push
```

✅ **Checkpoint:** El botón "Adivinar" ejecuta `verificarIntento()`. Los mensajes aparecen en la página con colores (verde para correcto, rojo para alto, turquesa para bajo). La validación funciona. El contador se incrementa.

---

## Parte 3: Historial, Reinicio y Juego Completo (25 min)

### 3.1 La Función de Reinicio

Agrega la función para reiniciar el juego:

```js
// --- Reiniciar juego ---
function reiniciarJuego() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  intentos = 0;
  historialIntentos = [];

  contador.textContent = 'Intentos: 0';
  historial.textContent = 'Historial: ';
  mostrarMensaje('🎯 ¡Nuevo juego! Adivina el número...', '#e94560');

  btnAdivinar.disabled = false;
  btnReiniciar.style.display = 'none';
  inputIntento.value = '';
  inputIntento.focus();

  // Resetear celebración visual
  tarjeta.style.borderColor = 'rgba(233, 69, 96, 0.3)';
  tarjeta.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';

  console.log('(DEBUG) Nuevo número secreto:', numeroSecreto);
}

// --- Conectar botón reiniciar ---
btnReiniciar.addEventListener('click', reiniciarJuego);
```

Prueba: juega hasta ganar, luego haz clic en "Jugar de nuevo". El juego debería reiniciarse completamente con un nuevo número secreto.

### 3.2 Función de Pista de Cercanía (Opcional pero recomendado)

Agrega una función que mejore las pistas:

```js
// --- Pista de cercanía ---
function obtenerPista(intento, secreto) {
  let diferencia = Math.abs(intento - secreto);

  if (diferencia <= 5) {
    return '🔥 ¡Muy cerca!';
  } else if (diferencia <= 15) {
    return '♨️ Caliente';
  } else if (diferencia <= 30) {
    return '🌤️ Tibio';
  } else {
    return '❄️ Frío';
  }
}
```

Ahora usa esta función dentro de `verificarIntento()`. Busca las líneas de "Muy alto" y "Muy bajo" y agrégales la pista:

```js
  // Dentro de verificarIntento(), reemplaza las pistas:
  } else if (valor > numeroSecreto) {
    let pista = obtenerPista(valor, numeroSecreto);
    mostrarMensaje('📈 Muy alto. ' + pista, '#ff6b6b');
  } else {
    let pista = obtenerPista(valor, numeroSecreto);
    mostrarMensaje('📉 Muy bajo. ' + pista, '#4ecdc4');
  }
```

> 💡 **`obtenerPista()` usa `return`** para devolver un valor. Cuando llamas `let pista = obtenerPista(valor, secreto)`, la variable `pista` recibe el string que la función retorna.

### 3.3 Verifica el Juego Completo

Prueba el flujo completo:
1. Escribe un número → aparece pista con color
2. Escribe otro → historial se actualiza
3. Escribe texto → mensaje de validación
4. Adivina el número → mensaje de victoria, botón reiniciar aparece
5. Clic en reiniciar → nuevo juego

### 3.4 Commit Final

```bash
git add index.html script.js
git commit -m "feat: juego completo con funciones, DOM, historial y reinicio"
git push
```

✅ **Checkpoint:** El juego "Adivina el Número" está COMPLETO. Tarjeta con glass-effect centrada en la pantalla. Input con glow al enfocarse, botón con micro-interacciones. Al ganar, la tarjeta brilla verde. Al reiniciar, todo vuelve al estado original. Funciones organizadas (`verificarIntento`, `reiniciarJuego`, `mostrarMensaje`, `obtenerPista`). Historial, contador y colores funcionan. Se ve bien en celular.

---

## Logros Adicionales (Opcional)

### 🟢 Historial con Pastillas de Color

Transforma el historial de texto plano en pastillas/badges de colores. Cada intento se muestra como una pastilla: rojo si fue alto, turquesa si fue bajo, verde si fue correcto.

En `index.html`, cambia el `<p>` del historial por un `<div>`:

```html
<div id="historial" class="historial"></div>
```

Agrega este CSS dentro del `<style>`:

```css
.historial {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
  margin-top: 20px;
  min-height: 30px;
}
.guess-pill {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: bold;
}
```

En `verificarIntento()`, reemplaza la línea del historial con:

```js
// Agregar pastilla de color al historial
let color = valor > numeroSecreto ? '#ff6b6b' : valor < numeroSecreto ? '#4ecdc4' : '#00ff88';
historial.innerHTML += '<span class="guess-pill" style="background:' + color + '30; color:' + color + '">' + valor + '</span>';
```

Y en `reiniciarJuego()`, cambia `historial.textContent` por:

```js
historial.innerHTML = '';
```

> 💡 **`innerHTML`** permite agregar HTML (no solo texto). Cada pastilla es un `<span>` con estilos en línea.

### 🟡 Límite de Intentos

Agrega un límite de 10 intentos. Si el jugador no adivina en 10 intentos, muestra "Game Over" y el número secreto. Usa una función `verificarGameOver()`.

### 🔴 Mejor Puntaje

Guarda el mejor puntaje (menor cantidad de intentos) usando una variable global. Muéstralo en la página.

---

## 📝 Entrega

### Checklist

- [ ] Interfaz HTML: tarjeta centrada, input con glow, botón con hover
- [ ] Funciones: `verificarIntento()`, `reiniciarJuego()`, `mostrarMensaje()`
- [ ] DOM: `getElementById()`, `textContent`, `style.color`, `style.borderColor`, `style.boxShadow`
- [ ] Evento click en botón con `addEventListener()`
- [ ] Al ganar: tarjeta brilla verde (celebración visual)
- [ ] Historial de intentos visible
- [ ] Botón reiniciar funciona y resetea la celebración
- [ ] Se ve bien en celular (responsive)
- [ ] Al menos 3 commits nuevos (9+ total acumulado)

### Entregable

📸 **Screenshot** del juego funcionando en el navegador mostrando:
- La tarjeta centrada con la interfaz visual
- Al menos 3 intentos en el historial
- Un mensaje de pista con color

> ⚠️ Tu screenshot debe mostrar el juego visual (NO prompt/alert). El historial debe tener intentos visibles.
