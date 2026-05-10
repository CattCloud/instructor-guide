# CAPA 1 — ESTRUCTURA DE MOMENTOS CLASE 10
## "Decisiones y Lógica Condicional"

> **Duración total preparada:** 100 min de contenido + 30 min de receso = 130 min (colchón de 20 min)
> **Modo de trabajo:** Teoría → Demo en consola / Excalidraw → Code-along en el proyecto → Retos autónomos
> **Proyecto víctima:** `guess-number-js` (continúa desde Clase 09)
> **Entregable del lab:** Juego con número secreto aleatorio, pistas alto/bajo/correcto, validación de entrada y al menos 3 commits.

---

## VISTA GENERAL DE MOMENTOS

| Momento | Tema | Tipo | Tiempo |
|---|---|---|---|
| Momento 0 | Hook: "El programa que no puede decidir" | Apertura | 5 min |
| Momento 1 | Operadores de Comparación | Teoría + Demo consola | 15 min |
| Momento 2 | Operadores Lógicos (`&&`, `\|\|`, `!`) | Teoría + Demo consola | 10 min |
| Momento 3 | Flujo de Control + `if / else if / else` | Teoría + Excalidraw + Code-along | 20 min |
| **RECESO** | Descanso | — | **30 min** |
| Momento 4 | `Math.random()` y el Número Secreto | Teoría + Code-along | 15 min |
| Momento 5 | Validación con `isNaN()` + 2 Retos Autónomos | Teoría + Retos | 25 min |
| Momento 6 | Operador Ternario + Cierre + Preview C11 | Teoría + Commit | 10 min |
| **Colchón** | *Instalaciones, preguntas, retrasos* | — | *20 min* |

---

## MOMENTO 0: Hook — "El programa que no puede decidir"
**Tiempo:** 5 min
**Objetivo:** Anclar la necesidad de los condicionales antes de enseñar una sola línea de sintaxis.

**Sub-momentos:**
- 0.1 Recap de Clase 09 con pregunta al chat: *"¿Qué conceptos recuerdan de la clase pasada? Díganme uno."* Esperar respuestas. Consolidar: variables, tipos, `prompt()`, `Number()`, template literals.
- 0.2 La pregunta de enganche: mostrar en VS Code el `script.js` del lab anterior (el que captura nombre y edad). Señalar que el programa hace exactamente lo mismo sin importar lo que el usuario escriba — no compara, no decide. *"¿Cómo le decimos al programa que haga cosas diferentes según lo que recibe?"* Esperar respuestas del chat sin corregirlas.
- 0.3 Preview del objetivo del día: mostrar brevemente en código (no en ejecución) el bloque `if/else` con las tres ramas del juego —correcto, muy alto, muy bajo— como referencia visual de lo que van a construir hoy en el lab. Aclarar: *"Este es el checkpoint del lab de hoy, no el juego terminado. El juego completo lo van a entregar en la Clase 12 — nosotros hoy ponemos los cimientos de la lógica."*

---

## MOMENTO 1: Operadores de Comparación
**Tiempo:** 15 min
**Objetivo:** El alumno sabe que los operadores de comparación producen siempre `true` o `false`, conoce los 6 operadores disponibles, usa `===` como regla, y puede predecir el resultado de una comparación antes de ejecutarla.

**Sub-momentos:**
- 1.1 **TEORÍA:** ¿Qué es un operador de comparación? Produce siempre un booleano. Es el "ingrediente" que va dentro del `if`. Se puede usar solo o dentro de condiciones.
- 1.2 Los 6 operadores: `===`, `!==`, `>`, `<`, `>=`, `<=`. Tabla de referencia.
- 1.3 **DEMO en Consola:** Ejecutar línea por línea, pidiendo al chat que prediga antes de presionar Enter: `5 === 5`, `5 === '5'`, `10 > 5`, `3 < 1`, `10 >= 10`.
- 1.4 La regla del `===` estricto: valor Y tipo al mismo tiempo. ¿Por qué `5 === '5'` devuelve `false`? Conectar con la Clase 09 (tipos de dato).

**Nota de diseño:** Los operadores se enseñan aquí, solos, porque son independientes del `if`. Un alumno puede usar `console.log(5 > 3)` sin ningún `if` — el resultado es `true`. El `if` viene después y usa esta herramienta ya conocida.

---

## MOMENTO 2: Operadores Lógicos
**Tiempo:** 10 min
**Objetivo:** El alumno combina condiciones con `&&`, `||` y `!`, entiende cuándo una expresión compuesta es `true` o `false`, y puede leer una condición de validación como `edad >= 18 && tieneLicencia`.

**Sub-momentos:**
- 2.1 **TEORÍA:** `&&` (ambas deben ser `true`), `||` (al menos una debe ser `true`), `!` (invierte el valor). Tabla de verdad visual simplificada.
- 2.2 **DEMO en Consola:** Ejecutar y predecir:
  ```js
  18 >= 18 && true      // → true
  false && true          // → false
  false || true          // → true
  !false                 // → true
  ```
- 2.3 Conexión anticipada: *"Estos operadores solos producen `true` o `false`. Cuando lleguemos al `if`, van a entrar directamente como condición. Ya los conocen antes de usarlos."*

---

## MOMENTO 3: Flujo de Control + `if / else if / else`
**Tiempo:** 20 min
**Objetivo:** El alumno entiende el concepto de flujo de control, dibuja el diagrama de decisión, escribe la sintaxis correcta de `if/else if/else`, y tiene en su proyecto la primera versión del comparador del juego.

**Sub-momentos:**
- 3.1 **CONCEPTO:** Flujo de control — qué es, por qué el flujo secuencial tiene un límite. Demo visual: líneas de código que corren siempre vs. un rombo de decisión. Excalidraw en vivo.
- 3.2 **TEORÍA:** Sintaxis del `if`. Las llaves `{ }`. El `else`. El `else if`. El orden de evaluación: la primera condición `true` gana, el resto se ignora.
- 3.3 **Diagrama en Excalidraw:** Construir en vivo el árbol de decisión — condición → bloque SÍ → bloque NO. El alumno ve la lógica antes del código.
- 3.4 **CODE-ALONG Lab Parte 1 — El Verificador de Votación:**
  - El usuario ingresa su edad con `prompt()` + `Number()`.
  - `if/else` simple: si tiene 18 o más → `"Estás habilitado para votar."` / si no → `"Aún no puedes votar. Te faltan X años."`
  - El instructor codifica en vivo; los alumnos replican.
- 3.5 **CODE-ALONG Lab Parte 2 — El Clasificador de Temperatura:**
  - El usuario ingresa una temperatura en °C con `prompt()` + `Number()`.
  - `if/else if/else` con tres ramas: menos de 10° → frío / entre 10 y 25° → agradable / más de 25° → calor.
  - Introduce el `else if` como extensión natural del `if/else` que ya escribieron.

**Recursos:** VS Code dividido con Navegador. Consola abierta para verificar.

---

## ⏸ RECESO — 30 min

---

## MOMENTO 4: El Objeto `Math` y el Número Secreto
**Tiempo:** 15 min
**Objetivo:** El alumno entiende qué es un objeto en términos básicos, sabe cómo funciona la fórmula `Math.floor(Math.random() * 100) + 1` paso a paso, y reemplaza el número fijo del lab por uno aleatorio real.

**Sub-momentos:**
- 4.1 **CONCEPTO:** ¿Qué es un objeto? Agrupación de funcionalidad bajo un nombre. `Math` es un objeto nativo — ya existe, no hay que crearlo. Se usa con punto: `Math.método()`.
- 4.2 **TEORÍA:** `Math.random()` → decimal entre 0 y 0.999... `Math.floor()` → redondea hacia abajo. La fórmula completa paso a paso.
- 4.3 **DEMO en Consola:** Ejecutar cada paso de la fórmula por separado para que el alumno vea los valores intermedios:
  - `Math.random()` (ejecutar 5 veces, ver que cambia)
  - `Math.random() * 100`
  - `Math.floor(Math.random() * 100)`
  - `Math.floor(Math.random() * 100) + 1` ✅
- 4.4 **CODE-ALONG Lab:** Reemplazar `const numeroSecreto = 42` por `const numeroSecreto = Math.floor(Math.random() * 100) + 1`. Verificar con `console.log('(DEBUG):', numeroSecreto)`.
- 4.5 Verificación: recargar la página 3 veces y confirmar que el número secreto cambia en la consola.

---

## MOMENTO 5: Validación con `isNaN()` + 2 Retos Autónomos
**Tiempo:** 25 min
**Objetivo:** El alumno valida la entrada del usuario antes de procesarla, y aplica de forma autónoma los condicionales a dos problemas nuevos sin andamiaje de código.

**Sub-momentos:**
- 5.1 **TEORÍA:** `isNaN()` — qué verifica, cómo funciona, el gotcha del string vacío. Validación combinada con rango `|| intento < 1 || intento > 100`.
- 5.2 **CODE-ALONG Lab Parte 3:** Agregar la validación al inicio de la cadena `if/else if/else` en el juego.

---

### RETO 1 — La Calculadora de Descuento (8 min)
**Tipo:** Autónomo individual
**Herramienta:** Consola del navegador o un archivo separado

**Enunciado (dictado en pantalla o chat):**
> Una tienda online aplica descuentos según el total de la compra. El usuario ingresa el precio total con `prompt()`. El programa calcula el precio final con `alert()`:
> - Si el total es mayor a $100: aplica 20% de descuento.
> - Si el total está entre $50 y $100 (ambos incluidos): aplica 10% de descuento.
> - Si el total es menor a $50: sin descuento.
> Mostrar el precio final con un mensaje como: `"Tu precio final es: $XX"`

**Criterio de éxito público:** *"El éxito se mide cuando al ingresar 120 vean un precio final de 96, con 80 vean 72, y con 30 vean 30. Sin eso, no está listo."*

---

### RETO 2 — El Clasificador de Nota (8 min)
**Tipo:** Autónomo individual
**Herramienta:** Consola del navegador o un archivo separado

**Enunciado (dictado en pantalla o chat):**
> Un sistema escolar clasifica las notas de sus estudiantes. El usuario ingresa una nota entre 0 y 100 con `prompt()`. El programa responde con `alert()`:
> - 90 o más: `"Excelente"`
> - Entre 70 y 89: `"Aprobado"`
> - Entre 50 y 69: `"Regular"`
> - Menos de 50: `"Reprobado"`

**Criterio de éxito público:** *"El éxito se mide cuando al ingresar 95, 75, 60 y 40 obtengan los cuatro mensajes distintos. Sin eso, no está listo."*

> **Nota de diseño:** Estos retos usan exactamente lo visto en clase — `prompt()`, `Number()`, operadores de comparación y `if/else if/else` — con escenarios distintos a los code-alongs. El alumno traduce un problema en lenguaje natural a código sin andamiaje preexistente.

---

## MOMENTO 6: Operador Ternario + Commit Final + Preview Clase 11
**Tiempo:** 10 min
**Objetivo:** El alumno conoce el ternario como herramienta compacta, lo aplica en el juego para elegir la palabra de la pista, hace el commit final del lab y entiende hacia dónde va la Clase 11.

**Sub-momentos:**
- 6.1 **TEORÍA:** Ternario — sintaxis, cuándo usarlo y cuándo no. Comparativa lado a lado con `if/else`.
- 6.2 **CODE-ALONG:** Reemplazar una asignación en el juego con ternario:
  ```js
  let pista = intento > numeroSecreto ? 'alto' : 'bajo';
  ```
- 6.3 **Commit final del lab:**
  ```bash
  git add script.js
  git commit -m "feat: condicionales, Math.random(), validación y ternario"
  git push
  ```
- 6.4 **Preview Clase 11:** Mostrar el momento donde el código comienza a repetirse (el segundo intento tiene el mismo `if/else` que el primero). *"¿Notaron que estamos copiando el mismo bloque? Hay un principio en programación: DRY — Don't Repeat Yourself. La Clase 11 nos da la herramienta para resolverlo: las funciones."*

---

## NOTAS DE DISEÑO

| Decisión | Razón |
|---|---|
| Operadores antes del `if` | Los operadores son independientes. El alumno los conoce como herramienta antes de ver dónde se usan. |
| 2 retos autónomos | El lab del bootcamp es guiado — el código ya existe. Los retos fuerzan aplicación autónoma con escenarios distintos. |
| Ternario al final | Es una herramienta de sintaxis, no un concepto nuevo. Va último para no saturar. |
| `Math` en Momento 4 (post-receso) | El número secreto aleatorio es el "wow" de la clase — funciona mejor como apertura del segundo bloque. |
| `==` no se menciona en clase | Solo se usa `===`. El `==` se excluye del flujo de la clase para no generar confusión. |
