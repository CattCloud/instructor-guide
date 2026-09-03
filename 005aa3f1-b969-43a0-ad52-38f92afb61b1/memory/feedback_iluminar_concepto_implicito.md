---
name: feedback-iluminar-concepto-implicito
description: "Cuando se introduce un concepto X que contrasta con un concepto Y que viene apareciendo implícito desde clases pasadas, aprovechar para iluminar Y con una pregunta directa al alumno antes de definir X"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 005aa3f1-b969-43a0-ad52-38f92afb61b1
---

Cuando una clase introduce un concepto nuevo (X) que **contrasta naturalmente** con otro concepto (Y) que el alumno viene **usando sin que se lo hayan explicado** desde clases pasadas, aprovechar el momento de introducir X para **iluminar Y primero** — abriendo con una pregunta directa al alumno, no con una definición.

**Patrón concreto:**
1. Abrir el sub-bloque con la pregunta: *"Llevan N clases tipeando/usando &lt;Y&gt;. ¿Alguien me puede explicar qué es?"*
2. Esperar 20-30 segundos. Recoger 2-3 respuestas en voz alta sin corregir.
3. Después dar la definición técnica de Y.
4. **Recién entonces** introducir X — porque ahora el alumno tiene el contraste que necesita para entenderlo.

**Why:** sin este paso, el alumno aprende X cargando un concepto Y que nunca terminó de procesar. Genera deuda conceptual silenciosa: "creo que entiendo X, pero hay algo de Y que no me cierra". La pregunta abierta convierte a Y de "palabra mágica que tipeé sin pensar" a "concepto descubierto por mí" — fija el conocimiento mucho mejor que un dictado tardío.

**Casos donde aplica:**
- Clase 04, sub-punto 2.1 — antes de enseñar **ramas**, preguntar qué es **_main_** (el alumno viene tipeando **_git push origin main_** desde C01 sin que nadie le haya explicado que main es una rama).
- Cuando se enseñe **arrow functions** en JS, aprovechar para preguntar qué es **_function_** (que vienen usando desde el primer code-along).
- Cuando se enseñe **flexbox `align-items`**, preguntar qué eran los **ejes (main/cross)** que se mencionaron en pasada.
- Cuando se enseñe **`useEffect`** en React, preguntar qué es un **hook** (palabra que vienen escuchando sin definición).
- En general: cualquier término técnico que el alumno **viene tipeando o escuchando como mágico** y ahora se va a contrastar con un concepto hermano.

**How to apply:**
- Identificar en la Capa 0 los conceptos "implícitos" — palabras técnicas que aparecen en code-alongs o comandos de clases anteriores sin haber tenido un sub-bloque propio.
- Cuando se planee introducir un concepto contrastante en una nueva clase, anotar en la Capa 1 un sub-punto adicional al inicio del Momento dedicado a "iluminar" el concepto implícito con la pregunta.
- En Capa 2+3, redactar el sub-punto con la **pregunta directa al alumno** como primer movimiento, antes de cualquier definición.
- En Capa 0, agregar una nota de contexto al CONCEPTO implícito indicando que "se enseña recién acá porque solo tiene sentido cuando existe el contraste con X".
