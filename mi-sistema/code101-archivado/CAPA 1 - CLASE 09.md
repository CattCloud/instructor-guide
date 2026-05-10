# CAPA 1 — ESTRUCTURA DE MOMENTOS CLASE 09
## "JavaScript: El Lenguaje que Hace Cosas"

> **Duración:** 120 minutos (clase formal)  
> **Modo de trabajo:** Teoría a la par del laboratorio (Teoría → Demostración en vivo → Alumno lo replica)  
> **Entregable del lab:** Proyecto `guess-number-js` con `index.html` + `script.js` configurados, variables declaradas, entrada con `prompt()`, tipos verificados con `typeof`, operadores operativos y salida con `console.log()`  
> **Proyecto de práctica del instructor:** `practica_clase09/` — Archivo JS con ejemplos activables para demostrar en vivo (referencia: patrón practica_clase06)

---

## VISTA GENERAL DE MOMENTOS

| Momento | Tema | Tipo | Tiempo |
|---|---|---|---|
| Momento 0 | Bienvenida al Módulo 3 + Hook: "La Web Pensa" | Apertura | 5 min |
| Momento 1 | El Entorno: HTML + JS, conocidos pero separados | Teoría + Demo | 20 min |
| Momento 2 | Variables: `let` y `const` | Teoría + Lab | 20 min |
| Momento 3 | Tipos de Dato: `string`, `number`, `boolean` y `typeof` | Teoría + Lab | 20 min |
| Momento 4 | Operadores y la Trampa del `+` | Teoría + Demo | 15 min |
| Momento 5 | `prompt()` + Conversión de Tipos (`Number()`) + Template Literals | Teoría + Lab | 25 min |
| Momento 6 | Cierre: "`console.log` como testigo" + Retrospectiva del Módulo | Cierre | 15 min |

**Total: 120 minutos**

---

## MOMENTO 0: Bienvenida al Módulo 3
**Tiempo:** 5 min  
**Objetivo:** Marcar el inicio del nuevo módulo con impacto, conectar lo que ya saben (HTML + CSS) con el problema que JavaScript resuelve.

**Bloques:** Bienvenida, pregunta de calibración inicial, hook narrativo.

---

## MOMENTO 1: El Entorno — HTML conoce a JS
**Tiempo:** 20 min  
**Objetivo:** El alumno sabe crear un `script.js`, enlazarlo a su `index.html`, confirmar que el navegador lo ejecuta, y usa `console.log()` como primera herramienta de observación.

**Sub-momentos:**
- 1.1 Bienvenida y transición al Módulo 3 (hook: "La página web que piensa")
- 1.2 Tres formas de escribir JS en HTML — cuál usar
- 1.3 Crear `script.js` y enlazarlo con el tag `<script>`
- 1.4 Primera línea: `console.log("Hola Mundo")` — verificación visual en consola (F12)
- 1.5 ¿Por qué el `<script>` va antes de `</body>`? (Demo en vivo de error)

**Recursos:**  `practica_clase09/` → Archivo `script.js` comentado listo para descomentar en vivo.

---

## MOMENTO 2: Variables — `let` y `const`
**Tiempo:** 20 min  
**Objetivo:** El alumno declara variables con `let` y `const`, entiende cuándo usar cada una, evita `var`, y puede guardar el número secreto de su proyecto.

**Sub-momentos:**
- 2.1 **TEORÍA:** ¿Qué es una variable? (Declaración e inicialización)
- 2.2 `let` vs `const` — regla de uso (default: `const`, mutar: `let`)
- 2.3 Demo en vivo: intentar reasignar un `const` → ver el `TypeError` (Error como maestro)
- 2.4 LAB: El alumno declara `let intentos = 0` y `const NUMERO_SECRETO = 42` en su `script.js`

**Recursos:** `practica_clase09/` → Sección de variables con ejemplos comentados.

---

## MOMENTO 3: Tipos de Dato — `string`, `number`, `boolean`
**Tiempo:** 20 min  
**Objetivo:** El alumno distingue los 3 tipos primitivos principales, sabe que las comillas definen el tipo, y usa `typeof` como herramienta de diagnóstico en la consola.

**Sub-momentos:**
- 3.1 **TEORÍA:** number, string, boolean — los 3 básicos
- 3.2 La regla de las comillas: `42` (number) vs `'42'` (string)
- 3.3 Demo en vivo: `typeof` en la consola de Chrome — colores diferentes para cada tipo
- 3.4 LAB: El alumno usa `typeof` sobre sus propias variables del lab (verifican el tipo del `NUMERO_SECRETO`)

**Recursos:** `practica_clase09/` → Sección de tipos con ejemplos.

---

## MOMENTO 4: Operadores y La Trampa del `+`
**Tiempo:** 15 min  
**Objetivo:** El alumno usa operadores aritméticos correctamente, entiende por qué `'5' + 3` da `'53'` y detecta el riesgo real de trabajar con datos sin convertir.

**Sub-momentos:**
- 4.1 **TEORÍA:** Operadores aritméticos — `+`, `-`, `*`, `/`, `%`
- 4.2 Demo en la consola de Chrome: `5+3` vs `'5'+3` vs `'5'-3`
- 4.3 La Trampa: El problema del `+` con strings — conexión directa con `prompt()`

**Recursos:** Demo pura en consola del navegador (sin archivo, directo en DevTools).

---

## MOMENTO 5: `prompt()`, Conversión y Template Literals
**Tiempo:** 25 min  
**Objetivo:** El alumno captura datos del usuario con `prompt()`, convierte con `Number()`, y construye mensajes legibles con Template Literals. Su proyecto ya tiene interacción real.

**Sub-momentos:**
- 5.1 **TEORÍA:** `prompt()` — función que pide datos. SIEMPRE retorna string
- 5.2 Demo: `let entrada = prompt("Adivina:"); typeof entrada` → string, aunque escribas números
- 5.3 Solución: `Number(entrada)` — conversión explícita. Demo con `Number("5px")` → `NaN`
- 5.4 **TEORÍA:** Template Literals — de `"Hola " + nombre` a `` `Hola ${nombre}` ``
- 5.5 LAB: El alumno integra `prompt()` en su proyecto, convierte con `Number()` y muestra el resultado con `console.log()` usando Template Literal

**Recursos:** `practica_clase09/` → Sección de prompt y conversión.

---

## MOMENTO 6: Cierre — "El Console.log como Testigo"
**Tiempo:** 15 min  
**Objetivo:** Consolidar el aprendizaje, conectar el trabajo de hoy con lo que viene en Clase 10 (condicionales), y dejar a los alumnos con una reflexión real sobre el rol de JavaScript.

**Sub-momentos:**
- 6.1 Revisión del estado final del `script.js` de cada alumno (checkpoint visual)
- 6.2 Pregunta de calibración final: Retrospectiva de la sesión
- 6.3 Hook hacia Clase 10: "Hoy le preguntamos al usuario cuál es su número. ¿Pero qué pasa si el número que ingresó es correcto? ¿Cómo le decimos a la computadora que compare?" → Condicionales
- 6.4 Commit del proyecto al repositorio `guess-number-js` en GitHub

**Criterio de Éxito Público:**  
Al final del momento, todos deben tener en consola algo similar a: `Número ingresado: 42 (type: number)` generado por su propio código.

---

## NOTAS DE DISEÑO DE CLASE

| Regla | Decisión |
|---|---|
| Analogías | Mínimas. Teoría directa + ejemplo en código |
| `var` | Se menciona brevemente que existe, se recomienda no usar. Jamás se demuestra |
| `defer`/`async` | No se menciona |
| Modo Teoría-Lab | Cada momento incluye un bloque TEORÍA seguido de acción inmediata en código |
| Herramienta principal | Consola de Chrome (F12) + VS Code + Live Server |
| Proyecto en vivo del instructor | `practica_clase09/` (referencia: patrón practica_clase06) |
