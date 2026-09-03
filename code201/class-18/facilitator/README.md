# Guía del Facilitador - Clase 18: Sprint 1

> Tiempo de lectura: 9 minutos | Prepárate antes de clase

Hoy los alumnos codean contra su propio plan y cada app empezará a divergir: distintos nombres, distinta UI, distinto orden. Eso es diseño, no caos — el contrato técnico mantiene la arquitectura común, y tú validas con dos varas: **resultados observables** (checkpoints) y **comprensión** ("explícame esta línea"). Nunca contra un código esperado, porque ya no existe.

---

## 🔑 Conceptos Clave

- **Prompt de implementación con MODO interactivo**: la IA debe preguntar 2-3 decisiones estratégicas antes de codear; el alumno responde y ella implementa lo decidido.
- **Slice en vivo**: tú codeas el primer `fetch` a la API frente a todos para quemar el riesgo técnico (CORS, rate limit) en grupo.
- **Mínimo innegociable**: búsqueda con estados de UI + playlist persistida. Sin eso, la validación cruzada de C19 no funciona.
- **Divergencia acotada**: las apps difieren en el cómo; el contrato fija archivos, patrones y prohibiciones.

---

## 🔗 Analogías Útiles

**Modo interactivo <> mozo que pregunta el término de la carne:**
Un buen mozo no te trae la carne "como sea mejor": pregunta el término, la guarnición. Una IA bien dirigida pregunta el equivalente (¿botón o tecla? ¿qué muestro si está vacío?) porque esas decisiones son del cliente: el alumno.

**Rate limit <> puerta de discoteca:**
La API deja entrar ~20 solicitudes por minuto. Buscar en cada tecla es mandar a toda la fila de golpe: te rebotan con `403`. El botón de búsqueda es hacer fila con orden.

**Slice <> prueba de sonido antes del concierto:**
Nadie toca el show completo para probar el micrófono. Un slice (un fetch, una función) valida el canal antes de invertir la hora siguiente.

---

## 🎯 Momentos Clave de la Clase

### Demo Principal: el slice en vivo (min 10-30)

Es tu única exposición del día y fija el estándar del ritual. Codea con la IA, en modo interactivo, el primer `fetch` en `api.js`:

1. Pega el **prompt de implementación** (abajo, listo para usar).
2. La IA te hará preguntas — **respóndelas en voz alta razonando**: "¿botón o tecla? Botón, porque el contrato dice rate limit".
3. Pega la porción de código en `api.js`, pruébala en consola, muestra el JSON real de iTunes.
4. Commit en vivo: `feat: primer fetch a la API`.

**Script sugerido:**
```
Facilitador: "Fíjense que NO le pedí 'hazme la búsqueda'. Le pedí
UNA porción, y la obligué a preguntarme antes."
[La IA pregunta]
Facilitador: "Esta decisión es mía, no de ella. ¿Ustedes qué
responderían? ¿Por qué?"
```

**Plan B (si la API o la IA fallan en vivo):** captura del JSON de respuesta preparada + el código del slice ya escrito para narrarlo. Si la API está caída para todos, activa el fallback del módulo (TheAudioDB) y avisa que el enunciado se ajusta.

### Transición al Lab

```
Facilitador: "Ese ciclo que vieron — prompt, preguntas, decisión,
porción, prueba, commit — es una HU. Repítanlo hasta el checkpoint.
Una HU completa antes de abrir la siguiente."
```

---

## 💡 Prompts Listos para Usar

### El prompt del slice en vivo

```text
CONTEXTO: [contrato técnico]. Mi proyecto tiene la estructura ESM
con archivos vacíos: api.js, state.js, storage.js, ui.js, app.js.

TAREA: Implementemos SOLO la función de api.js que busca canciones
en https://itunes.apple.com/search y retorna un array limpio de
canciones (nombre, artista, carátula, duración, género).

MODO: Antes de codear, hazme 2 o 3 preguntas estratégicas que me
toque decidir a mí. Espera mis respuestas. Luego dame solo esa
función, explicada.

RESTRICCIONES: async/await con try/catch. No toques otros archivos.
```

### Para alumnos trabados en cómo responder a la IA

Si un alumno responde "como sea mejor" a las preguntas de la IA, dale esta muleta:

```text
Respondo tus preguntas: [decisión 1 + por qué], [decisión 2 + por qué].
Si alguna de mis decisiones contradice el contrato, adviérteme.
```

### Prompt de depuración (para las rondas)

```text
Este es el error completo de la consola: [pega el error]
Esta es la función sospechosa: [pega el código]
Explícame la CAUSA del error antes de darme cualquier solución.
```

**Tip de facilitación:** cuando un alumno te llame por un bug, primero pregúntale "¿qué te dijo la IA de la causa?". Si no le preguntó, que lo haga contigo al lado — estás enseñando el flujo, no resolviendo el bug.

---

## 🚨 Señales de Alerta en las Rondas

| Señal | Qué está pasando | Qué hacer |
|-------|------------------|-----------|
| Pegó un archivo de 100+ líneas generado de una | Modo expendedora: pidió la app, no la HU | Borrar no: auditar. "Explícame esta función" y re-encuadrar el ritual |
| Responde "lo que sea mejor" a las preguntas de la IA | Cede las decisiones de diseño | Recordar: esas respuestas son su argumentación del Demo Day |
| App funciona pero no explica su código | Deuda de comprensión acumulándose | Auditoría de 2 min: una función al azar; si no la explica, que se la haga explicar por la IA y te la re-explique |
| La IA le metió una librería o reescribió todo | Prompt sin contrato/restricciones | Pegar contrato + restricción "no toques otros archivos" |
| Min 90 sin búsqueda funcionando | En riesgo de no llegar al mínimo | Sentarse con él: slice juntos con el prompt del facilitator |

---

## 🎯 Checkpoints de Validación

| Minuto | Checkpoint | Cómo validar | Si no cumple |
|--------|------------|--------------|--------------|
| 10 | Arranque declarado | Cada quien nombró su primera HU | Los sin plan: definirla con su `SPRINTS.md` en mano |
| 30 | Slice entendido | Pueden repetir el ciclo (prompt→preguntas→decisión→porción→prueba→commit) | Repetir el ciclo en 2 min con la slide del prompt |
| 90 | Búsqueda demostrable | "Soda Stereo" da resultados; carga/error/vacío visibles | Ronda intensiva con esos alumnos en el bloque 2 |
| 100 | Micro-standup en parejas | Cada quien mostró avance a su vecino | Detectar bloqueos comunes y resolverlos al aire |
| 155 | Playlist persistida | Agregar 2 canciones → recargar → siguen ahí | Diagnóstico rápido: ¿falta `guardar()` o falta `cargar()` al iniciar? |
| 180 | Standup de cierre | Prometido vs demostrado + tarea asíncrona declarada | Registrar quiénes deben cerrar Sprint 1 antes de C19 |

---

## ⚠️ Errores Comunes

| Señal | Qué está pasando | Qué hacer |
|-------|------------------|-----------|
| CORS / módulo no carga | Abrió con `file://` | Live Server. El clásico del módulo |
| `403` masivo en el aula | 25 alumnos buscando a la vez sin botón | Pausa general: verificar que todos disparan con submit, no con `keyup` |
| "Failed to resolve module specifier" | Import sin `./` o sin `.js` | Corregir rutas relativas |
| Agrega canción y la UI no cambia | Mutó estado sin `render()` | Reforzar el mantra: estado → guardar → render |
| Persiste pero la fecha se rompe al recargar | `Date` serializado como texto sin rehidratar | `new Date(texto)` al cargar (C15) |

---

## ✅ Señales de Comprensión

### El estudiante ENTIENDE cuando:
- Sus prompts llevan contrato + UNA HU, y responde a las preguntas de la IA con porqués.
- Puede explicar cualquier función de su código sin abrir el chat de la IA.
- Sus commits mapean a HUs terminadas, no a "avances" difusos.

### El estudiante NECESITA AYUDA cuando:
- Su código luce más avanzado que su capacidad de explicarlo.
- Lleva 40 minutos "conversando" con la IA sin una línea probada en el navegador.
- Saltó a estadísticas o modales (Sprint 2) sin cerrar la búsqueda.

---

## ❓ Preguntas Frecuentes

### P: ¿Y si un alumno le pide a la IA la app completa y la tiene "lista" en 30 minutos?
**R:** No la descalifiques: audítala. Pídele que explique 3 funciones al azar. Cuando no pueda (pasará), el trato es rehacer el ritual HU por HU: la app "terminada" que no puedes defender vale poco en la rúbrica (Q&A y argumentación son 40 pts).

### P: ¿Puedo mostrar MI código de referencia?
**R:** Evítalo en pantalla general: ancla a todos a una implementación y mata la divergencia. En rondas individuales, mejor pseudocódigo o preguntas guía.

### P: ¿Qué hago con el que no trajo el Sprint 1 planificado (faltó a C17)?
**R:** Versión express: dale la lista maestra de HUs del facilitator de C17 como plan prestado y que arranque por búsqueda. Que no pierda la clase planificando lo ya planificado por otros.

### P: ¿Vale que dos alumnos compartan prompts?
**R:** Compartir prompts sí (es aprendizaje de prompting); compartir código generado no — cada quien debe poder defender el suyo en Q&A.

---

## 🔗 Conexiones del Curriculum

### Esta clase construye sobre:

| Clase | Concepto | Cómo se conecta |
|-------|----------|-----------------|
| C10-C12 | fetch, async/await, estados de UI | La búsqueda de hoy es ese patrón sobre una API nueva |
| C13-C15 | Estado + render, localStorage | Las playlists son el mismo ciclo de M4 con dominio nuevo |
| C17 | HUs + plan + contrato | Hoy se ejecuta lo que ellos mismos planificaron |

### Conexión con la Próxima Clase

> "En la Clase 19 tu app deja de ser tuya por 15 minutos: un compañero la usará sin que le expliques nada. Lo que hoy no cierres, se nota ahí. Sprint 1 cerrado antes de llegar."

**Pre-work implícito:** cerrar asíncrono las HUs pendientes del Sprint 1.

---

## 🪞 Reflexión Post-Clase

- ¿Quiénes no llegaron al mínimo innegociable? Mensaje directo antes de C19 con el prompt del slice.
- ¿El modo interactivo prendió, o la mayoría siguió pidiendo código directo? Ajustar el briefing de C19.
- ¿La API aguantó al aula completa? Si hubo 403 masivos, documentar y considerar el fallback.
- ¿Qué decisiones interesantes tomaron los alumnos? Anótalas: son semillas para los Q&A del Demo Day.
