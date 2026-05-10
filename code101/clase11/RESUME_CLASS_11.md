> 📦 **Módulo 3:** Clase 3 de 4

# Clase 11: Funciones: Los Bloques de Construcción

## Resumen

En las clases anteriores creaste la lógica de tu juego: variables, números aleatorios, condicionales y validación. Pero tu código se repite, usa `prompt()`/`alert()` que no se ven profesionales, y todo está en un solo bloque largo. Hoy eso cambia.

En esta clase aprenderás a organizar tu código en **funciones**—bloques reutilizables con nombre que hacen UNA tarea. También darás el salto más importante del módulo: reemplazarás las ventanas emergentes por una **interfaz visual real** con tarjeta flotante, micro-interacciones, celebración de victoria y diseño responsive. Tu juego "Adivina el Número" quedará completo y con aspecto de app profesional, listo para mostrar desde el celular.

**Proyecto del Módulo:** Adivina el Número - Juego Interactivo

---

## ¿Por qué te sirve?

- **Las funciones son la base de todo programa real.** Cada app que usas está construida con miles de funciones. Cuando haces clic en "Me gusta" en Instagram, una función se ejecuta. Cuando envías un mensaje en WhatsApp, otra función lo procesa. Aprender funciones es aprender a pensar como programador profesional.

- **El DOM conecta JavaScript con lo que el usuario ve.** Hasta ahora tu JavaScript vivía en la consola y en ventanas emergentes. Hoy aprenderás a cambiar el contenido de la página, modificar colores y responder a clics. Es la diferencia entre un script y una aplicación web.

- **Refactorizar es una habilidad profesional clave.** En la vida real, los desarrolladores pasan más tiempo mejorando código existente que escribiendo código nuevo. Tomar código funcional y reorganizarlo en funciones es algo que harás todos los días.

---

## 🎯 ¿Qué haremos en clase?

1. **Crearemos la interfaz del juego** - Reemplazarás prompt/alert con una tarjeta flotante con glass-effect, input con glow, botón con micro-interacciones y diseño responsive.

2. **Aprenderemos funciones** - Declararás funciones con parámetros y `return`, y moverás tu lógica existente dentro de ellas.

3. **Conectaremos JS con el DOM** - Usarás `getElementById()`, `textContent` y `style` para mostrar mensajes, colores y efectos visuales en la página.

4. **Agregaremos eventos** - Un `addEventListener('click')` hará que el botón ejecute tu función de verificación cada vez que el jugador haga clic.

---

## Objetivos de Aprendizaje

Al finalizar esta clase, podrás:

1. **Declarar** funciones con nombre, parámetros y valor de retorno (`return`)
2. **Seleccionar** elementos HTML desde JavaScript usando `document.getElementById()`
3. **Modificar** el contenido y estilo de elementos con `textContent` y `style`
4. **Conectar** eventos del usuario (click) con funciones usando `addEventListener()`
5. **Refactorizar** código lineal en funciones organizadas y reutilizables

---

## ✅ Preparación para la Clase

### Herramientas

- [ ] **VS Code** con Live Server
- [ ] **Google Chrome** con DevTools (F12)
- [ ] **Repositorio `guess-number-js`** con el código de la Clase 10

### Tu Proyecto Hasta Ahora

Verifica que tienes de los labs anteriores:

- [ ] Repositorio `guess-number-js` en GitHub
- [ ] `Math.random()` genera número secreto entre 1 y 100
- [ ] `if/else if/else` da pistas alto/bajo/correcto
- [ ] Validación con `isNaN()` y rango 1-100
- [ ] Al menos 6 commits acumulados

### Reflexión Pre-Clase

Antes de llegar a clase, piensa en estas preguntas:

1. Si tuvieras que explicar las reglas de "Adivina el Número" a alguien, ¿cuántas "tareas" distintas identificas? (generar número, pedir intento, comparar, dar pista...)
2. ¿Qué diferencia hay entre un juego que usa ventanas emergentes y uno con una interfaz visual?
3. ¿Alguna vez reorganizaste algo (tu cuarto, tu mochila, tus archivos) sin cambiar el contenido? Eso es refactorizar.

> 💡 Hoy tu juego dará un salto visual enorme. De texto sobre fondo oscuro a una app que vas a querer mostrar desde tu celular. Ven preparado para verlo transformarse.

---

## Glosario

| Término | Definición |
|---------|------------|
| **Función** | Bloque de código reutilizable con nombre que realiza una tarea específica |
| **Parámetro** | Variable que recibe un valor cuando se llama a la función |
| **return** | Palabra clave que devuelve un valor desde una función al código que la llamó |
| **DOM** | Document Object Model: representación del HTML como objetos que JavaScript puede manipular |
| **getElementById()** | Método que selecciona un elemento HTML por su atributo `id` |
| **textContent** | Propiedad para leer o cambiar el texto visible de un elemento HTML |
| **style** | Propiedad para modificar los estilos CSS de un elemento desde JavaScript |
| **addEventListener()** | Método que conecta un evento (click, input, keypress) con una función |
| **Evento** | Acción del usuario (click, tecla, scroll) que el programa puede detectar y responder |
| **Refactorización** | Reorganizar código existente para mejorarlo sin cambiar lo que hace |

---

## Recursos Adicionales

- [MDN: Funciones](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions){:target="_blank"} - Guía oficial de funciones en JavaScript
- [MDN: Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction){:target="_blank"} - Qué es el DOM y cómo manipularlo
- [JavaScript.info: Eventos del DOM](https://es.javascript.info/events){:target="_blank"} - Tutorial de eventos y listeners
