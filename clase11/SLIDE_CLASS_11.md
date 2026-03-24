<!-- .slide: data-background="#0A192F" -->
# Clase 11: Funciones: Los Bloques de Construcción
## Del prompt/alert a una Interfaz Real

---

## 🔗 TRANSICIÓN: Clase 10 → Clase 11

### Clase 10 completada:
- `Math.random()` genera el número secreto
- `if/else if/else` da pistas alto/bajo/correcto
- Validación con `isNaN()` y rango 1-100
- Operadores lógicos (`&&`, `||`, `!`) y ternario

### ¿Qué le falta al juego?
- El código se **repite** para cada intento
- Usa `prompt()`/`alert()` que se ven **amateur**
- No tiene **historial** ni **contador** visible
- No se puede **reiniciar** sin recargar la página

### Hoy resolvemos TODO eso:
- **Funciones** para organizar y no repetir
- **DOM** para una interfaz visual con tarjeta flotante, glow y celebración
- **Eventos** para que el botón funcione
- **CSS** para micro-interacciones y diseño responsive

> "Hoy tu juego se transforma de prototipo a app que quieres mostrar."

---

## 🧠 QUIZ PRE-LAB

### Pregunta:
Si tuvieras que separar las tareas de tu juego en "cajas" independientes, ¿cuántas cajas identificas?

Piensa: generar número, pedir intento, validar, comparar, dar pista, contar intentos...

*Cada "caja" será una función.*

---

## 💡 ¿Qué es una Función?

### Un bloque de código con nombre que hace UNA tarea

```js
// Declarar la función
function saludar(nombre) {
  return 'Hola, ' + nombre + '!';
}

// Usar la función
let mensaje = saludar('Ana');
console.log(mensaje);  // "Hola, Ana!"
```

### Anatomía:

| Parte | Ejemplo | Qué hace |
|-------|---------|----------|
| `function` | palabra clave | Declara que esto es una función |
| nombre | `saludar` | Identifica la función |
| parámetros | `(nombre)` | Datos que recibe |
| `return` | `return 'Hola...'` | Valor que devuelve |

---

## 🎯 COMPROBACIÓN

### Pregunta:
¿Cuál es la diferencia entre estas dos líneas?

```js
btnAdivinar.addEventListener('click', verificar);
btnAdivinar.addEventListener('click', verificar());
```

---

## 🎯 COMPROBACIÓN - Respuesta

```js
// ✅ CORRECTO: pasa la función como referencia
btnAdivinar.addEventListener('click', verificar);

// ❌ ERROR: ejecuta la función INMEDIATAMENTE
btnAdivinar.addEventListener('click', verificar());
```

Sin paréntesis → "cuando hagan click, ejecuta esta función"

Con paréntesis → "ejecuta AHORA y pasa el resultado"

---

## ✅ CHECKPOINT 1: Interfaz HTML

### Verificar:

**¿Qué debe funcionar?**
- [ ] Tarjeta centrada con gradiente de fondo
- [ ] Input brilla al enfocarse (glow effect)
- [ ] Botón sube en hover, baja en click
- [ ] Áreas de mensaje, contador e historial
- [ ] `getElementById()` no devuelve `null`
- [ ] `mostrarMensaje()` cambia texto y color
- [ ] Se ve bien en celular (DevTools → responsive)

**Prueba en consola:**
```js
document.getElementById('game-card')  // No debe ser null
```

---

## 💡 DOM: Conectando JS con HTML

```js
// Seleccionar
const titulo = document.getElementById('mensaje');

// Leer
console.log(titulo.textContent);

// Escribir
titulo.textContent = '¡Nuevo mensaje!';

// Estilizar
titulo.style.color = '#00ff88';
titulo.style.fontSize = '24px';
```

### El DOM es un puente:

```
HTML ←→ DOM ←→ JavaScript
         ↕
    Lo que el
    usuario ve
```

> Cuando cambias el DOM desde JS, la página se actualiza automáticamente.

---

## 💡 addEventListener: Respondiendo al Usuario

```js
const boton = document.getElementById('btnAdivinar');

boton.addEventListener('click', function() {
  console.log('¡Hicieron clic!');
});
```

### Flujo:

```
Usuario hace clic → Navegador detecta evento →
  → Ejecuta la función asociada →
    → La función modifica el DOM →
      → La página se actualiza
```

> Este "ciclo de eventos" es el corazón de toda aplicación web.

---

## ✅ CHECKPOINT 2: Lógica con Eventos

### Verificar:

**¿Qué debe funcionar?**
- [ ] Clic en "Adivinar" ejecuta `verificarIntento()`
- [ ] Mensajes aparecen EN LA PÁGINA (no en alert)
- [ ] Colores: verde (correcto), rojo (alto), turquesa (bajo)
- [ ] Contador se incrementa
- [ ] Enter en el input también funciona

**Pregunta al grupo:** ¿Notan cómo desapareció toda la repetición de código? Una sola función maneja TODOS los intentos.

---

## 💡 Funciones con return

```js
function obtenerPista(intento, secreto) {
  let diferencia = Math.abs(intento - secreto);

  if (diferencia <= 5) {
    return '🔥 ¡Muy cerca!';
  } else if (diferencia <= 15) {
    return '♨️ Caliente';
  } else {
    return '❄️ Frío';
  }
}

// Uso
let pista = obtenerPista(42, 50);
console.log(pista);  // "♨️ Caliente"
```

> `return` envía un valor de vuelta. Sin `return`, la función devuelve `undefined`.

---

## ✅ CHECKPOINT 3: Juego Completo

### Verificar el flujo completo:

1. ✅ Escribe un número → pista con color
2. ✅ Escribe otro → historial se actualiza
3. ✅ Escribe texto → validación muestra error
4. ✅ Adivina → tarjeta brilla verde + botón reiniciar aparece
5. ✅ Reiniciar → tarjeta vuelve a estado original, nuevo juego
6. ✅ En celular → controles apilados, touch-friendly

**Funciones creadas:**
- [ ] `verificarIntento()` - lógica principal + celebración visual
- [ ] `mostrarMensaje(texto, color)` - cambia mensaje
- [ ] `reiniciarJuego()` - reinicia todo + resetea celebración
- [ ] `obtenerPista(intento, secreto)` - cercanía

---

## 🔗 TRANSICIÓN: Hacia Clase 12

### Hoy lograste:
- Crear funciones con parámetros y `return`
- Conectar JavaScript con el DOM
- Responder a eventos del usuario (click, Enter)
- Refactorizar de prompt/alert a interfaz visual con glass-effect
- Agregar celebración visual de victoria con `style.borderColor` y `style.boxShadow`
- **Tu juego es una app que puedes mostrar desde el celular** 🎉

### Próxima clase - Demo Day:
- **Test diagnóstico** (15 min) - Variables, condicionales, funciones
- **Presentación** (3 min) - Muestras tu juego y explicas tu código
- **Celebración** - Completaste Code 101

> "Empezaste sin saber qué era una variable. Hoy tienes un juego interactivo funcionando. Eso es aprender a programar."

---

## ❓ Preguntas de Cierre

1. ¿Qué ventaja tiene usar funciones en vez de repetir código?

2. ¿Por qué `addEventListener` es mejor que poner código directamente en el HTML (como `onclick`)?

3. Si quisieras agregar un tablero de puntajes, ¿qué función crearías?

---

## 📝 Entrega del Lab

**Entregable:**
- [ ] Screenshot del juego visual (tarjeta centrada, colores, responsive)
- [ ] URL del repositorio `guess-number-js` en GitHub
- [ ] Al menos 3 commits nuevos de esta clase

**Próxima clase (Demo Day):**
- Traer el juego FUNCIONANDO y COMPLETO
- Probarlo desde el celular (se ve bien responsive)
- Preparar una presentación de 3 min
- Practicar explicar tu código (¿qué hace cada función?)
