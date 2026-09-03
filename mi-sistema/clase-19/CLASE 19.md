# CLASE 19 — IA como Corrector + Sprint 2 (Módulo 5)

> **Curso:** Code 201 · **Módulo 5** — Clase 3 de 4 (**AUDITORÍA + SPRINT 2 + DEPLOY**)
> **Proyecto víctima:** **Mi Setlist** (repo **_mi-setlist_** de cada alumno) — hoy la app se audita, se completa (MVP entero) y se **publica** en GitHub Pages.
> **NO es lab calificado** (el calificado del M5 es el Proyecto Final en C20 — pasado mañana).
> **Tercer rol de la IA:** después de guía (C17) y copiloto (C18), hoy es **correctora** — encarnada en **GitHub Copilot** (`@workspace`, modo Ask): revisa el proyecto completo y diseña pruebas, pero el veredicto sale del navegador del alumno, no de su opinión.
> **Orden deliberado del día:** el MVP se protege primero, la creatividad (HUs propias) cierra. Timeboxes duros — el Demo Day no se mueve.
> **La clase NO cierra el proyecto:** el avance es asíncrono — tienen el miércoles y el jueves **hasta las 8pm** para terminar MVP, HU propia y segunda auditoría. La clase deja a cada uno lo más avanzado posible y con el camino claro; el deploy conviene activarlo HOY en clase (con apoyo para los errores de Pages), pero lo pendiente no es fracaso, es tarea asíncrona con fecha límite.
> **Fuente de inputs:** **_code201/class-19/_** (README + lab **actualizado 2026-07-20** + slides + **facilitator**) + **_code201/M5-ITINERARIOS-CLASES.md_** + contrato/MVP en `class-17/project/`.
> **Cambios del lab incorporados:** (1) la replanificación (Parte 2) es **condicional** — solo si la auditoría dejó mayores o se arrastran HUs del Sprint 1; si no, se confirma el plan original y se pasa directo a construir. (2) La entrega define **tarea asíncrona pre-Demo Day**: cerrar MVP + HU propia + **segunda pasada de auditoría** sobre los archivos del Sprint 2.
> **Estado:** Capa 2+3 **completa (M1-M6)** — pendiente validación de Eric.
> **Duración:** 3h reales · itinerario a 180 min · **sin receso formal** (convención M5).

---

## Idea fuerza de la clase

**De "funciona" a "resiste, está completa y es pública".** La clase con más piezas del módulo, en un orden que protege el MVP: primero la **auditoría** (Copilot revisa el proyecto completo contra el contrato y diseña pruebas de casos borde que el alumno ejecuta a mano), después el **Sprint 2** (estadísticas, orden inmutable, modal propio, robustez ante datos corruptos), al final la **firma personal** (2 HUs propias) y el **deploy**. Tesis del día: **(1) el review de la IA es una opinión — tu app corriendo es un hecho**: ningún hallazgo se acepta ni se descarta sin ejecutar la prueba en pantalla; **(2) la severidad se mide por impacto en el usuario** (crítico rompe la app / mayor confunde o endeuda / menor es pulido), no por incomodidad del programador — y dicta el orden: críticos ahora, mayores al plan, menores fuera.

> **Enfoque de la clase:** taller-conducido con timeboxes duros. Una sola exposición (el corrector en vivo, M2) y dos bloques de trabajo de naturaleza distinta — auditar (M3) y construir (M4) — más dos cierres cortos: HUs propias (M5) y deploy + cierre (M6). El rol del instructor cambia por bloque: QA lead en la auditoría ("nadie acepta un review sin ejecutar las pruebas"), mentor de ritual en el Sprint 2, coach de producto en las HUs propias. La replanificación ya NO es momento propio: es la primera decisión del briefing del M4, y solo aplica si hace falta.

---

## Tabla de tiempos (itinerario a 180 min)

| Momento | Tema                                                                       | Parte del lab              | Tiempo  |
| ------- | -------------------------------------------------------------------------- | -------------------------- | ------- |
| **M1**  | Apertura + estado real del grupo (por chat)                                 | Setup                      | ~10 min |
| **M2**  | **Demo: el corrector en vivo** — review + pruebas con Copilot `@workspace`  | — (guion en facilitator)   | ~20 min |
| **M3**  | Bloque de auditoría — review, pruebas ejecutadas a mano, triage             | Parte 1 (CP ~60)           | ~30 min |
| **M4**  | Bloque Sprint 2 — plan confirmado/ajustado + MVP completo                   | Partes 2+3 (CP ~150)       | ~90 min |
| **M5**  | Tus 2 HUs propias — brainstorm en chat web + redacción con criterios        | Parte 4 (CP ~160)          | ~10 min |
| **M6**  | Deploy en GitHub Pages + cierre contra el plan + tarea asíncrona            | Publica tu app + Entrega   | ~20 min |

> **Nota de tiempos:** sin receso (convención M5). Checkpoints anclados a ~min 60 (críticos corregidos), ~150 (MVP completo), ~160 (HUs propias definidas) y ~172 (deploy activado), como el itinerario. Los timeboxes de hoy NO se estiran: quien sigue puliendo el Sprint 1 al min 100 recibe timebox duro — lo que falta va a la tarea asíncrona.
>
> **Mapa de temas → momentos:** estado real + prioridades de quien no cerró Sprint 1 (M1) · code review con severidades + plan de pruebas + "los correctores también alucinan" (M2, demo) · auditoría propia: review `@workspace` → pruebas a mano → triage crítico/mayor/menor (M3) · decisión de plan (confirmar o v2, condicional) + Sprint 2 con el ritual: `[...].sort()`, modal `pedirConfirmacion` (C16), stats con función pura, robustez del JSON (M4) · HUs propias con valor de producción (M5) · Pages + prueba en URL pública + prometido vs demostrado + tarea asíncrona de 3 puntos (M6).
>
> **Concepto pedagógico clave (las 2 tesis):** (1) **el review es una opinión; la app corriendo es un hecho** — todo hallazgo se verifica en pantalla antes de aceptarlo o rebatirlo. (2) **severidad = impacto en el usuario** — y dicta el orden de trabajo: crítico → ahora; mayor → al plan; menor → se descarta hoy.

---

## Cadena Problema → Solución de la clase

```
M1: "el Sprint 1 'funciona'... ¿pero en que estado esta realmente cada app?"
     → estado real por chat; quien no cerro Sprint 1 recibe prioridad clara:
       hoy su meta es el MVP, sin HU propia (MVP > HU propia > pulido)
     ↓ (mi app funciona cuando YO la uso... ¿eso alcanza?)
M2: "si la IA reviso tu codigo y dice 'todo perfecto' — ¿le crees?"
     → demo del corrector en vivo: review con @workspace (hallazgos con severidad,
       sin soluciones) + plan de pruebas + ejecutar 2 en vivo (datos corruptos
       incluida) + verificar un hallazgo antes de aceptarlo: los correctores
       tambien alucinan
     ↓ (vieron el metodo — ahora sobre SU codigo)
M3: "tu app tiene bugs que no has visto — mejor encontrarlos hoy que en el Demo Day"
     → auditoria propia: review contra el contrato, pruebas de casos borde
       ejecutadas a mano, triage: criticos se arreglan YA (ritual C18), mayores
       se anotan, menores se sueltan
     ↓ (se que esta roto y que falta — ¿mi plan del Sprint 2 sigue vigente?)
M4: "un plan que ignora los hallazgos es un plan viejo" → decision condicional:
     ¿mayores o arrastre del Sprint 1? → SPRINTS.md v2; ¿limpio? → confirmar y
     construir. Sprint 2 con el ritual: stats, orden inmutable, modal propio,
     robustez — el MVP completo
     ↓ (el MVP esta — pero es identico al de los otros 9 companeros)
M5: "¿que hace que TU app sea tuya?" → 2 HUs propias con valor de produccion,
     criterios observables, 1 elegida para implementar antes del Demo Day
     ↓ (la app esta completa y con firma — pero solo existe en tu maquina)
M6: "una app que solo corre en localhost no se puede demostrar ni compartir"
     → GitHub Pages: deploy + flujo completo probado en la URL publica + cierre
       prometido vs demostrado + tarea asincrona de 3 puntos (MVP + HU propia +
       segunda pasada de auditoria) → Demo Day
```

---

## MOMENTO 1 — Apertura + estado real del grupo

**Tiempo:** ~10 min

> **OBJETIVO:** El instructor releva el estado real del Sprint 1 por chat (sin ronda de pantallas) y asigna prioridades sin ambigüedad: quien no cerró el Sprint 1 hoy trabaja SOLO en el MVP — sin HU propia (regla del módulo: MVP > HU propia > pulido; los 10 pts de la HU propia se sacrifican, el MVP no). El grupo conoce el plan del día con sus 4 fases y la regla de los timeboxes duros: el Demo Day es pasado mañana y no se mueve.

### 1.1 Estado real por chat

**EN PANTALLA: CHAT DE TEAMS — la pregunta fijada: "Sprint 1: ¿cerrado, o qué te falta?"**

> **Tu instrucción:**
> *"Antes de cualquier cosa, estado real. Todos al chat con este formato: 'Sprint 1: cerrado' o 'Sprint 1: me falta [X]'. Sin adornos. El lunes ya me mandaron su reporte — esto es la foto de hoy, después del trabajo asíncrono."*
>
> *(Leer las respuestas cruzando con los reportes del lunes. Triage inmediato y en voz alta:)*
>
> *"Los que están cerrados: hoy hacen la clase completa — auditoría, Sprint 2, sus HUs propias y deploy. Los que no: su día cambia. Auditoría express de 15 minutos y TODO lo demás al MVP. Sin HU propia — esos 10 puntos se sacrifican hoy, el MVP no. La regla del módulo es esa: MVP primero, HU propia después, pulido al final."*

### 1.2 El plan del día: 4 fases con timebox

**EN PANTALLA: SLIDES — tabla "Las fases de hoy" (auditoría → plan → Sprint 2 → HUs propias → deploy).**

> **Tu explicación teórica precisa:**
> *"Hoy es la clase con más piezas del módulo. Cuatro fases, cada una con su tiempo:"*
>
> - **Auditoría (30 min)** — Copilot revisa su código, ustedes ejecutan las pruebas. Salen con los críticos arreglados
> - **Sprint 2 (90 min)** — primero deciden en 5 minutos si su plan sigue vigente o se ajusta; después construyen el MVP completo: stats, orden, modal, robustez
> - **HUs propias (10 min)** — la feature que ustedes eligen. Su firma en la app
> - **Deploy (20 min)** — la app queda en una URL pública. Nadie sale de hoy sin ella
>
> *"Y una regla que va en serio: los tiempos de hoy NO se estiran — lo que no entre en su timebox pasa a la tarea asíncrona. Ojo con esto: hoy NO tienen que terminar todo. Tienen mañana miércoles completo y el jueves hasta las 8pm para cerrar MVP, HU propia y la segunda auditoría. Lo que sí tiene que salir de hoy es el camino claro: saber exactamente qué les falta y cómo se hace. Por eso el deploy sí conviene activarlo hoy, conmigo disponible — los errores de Pages son más fáciles de resolver en clase que solos un miércoles a medianoche."*

### 1.3 El tercer rol de la IA: correctora

**EN PANTALLA: SLIDES — slide "La auditoría con Copilot" (@workspace + modo Ask + presupuesto).**

> **Tu explicación teórica precisa:**
> *"La IA cambia de rol por tercera vez. En la 17 fue guía — planificaron con ella. En la 18 fue copiloto — les preguntó y ustedes decidieron. Hoy es correctora: le entregan su código para que lo revise y les diseñe pruebas. Y hoy la herramienta cambia: la auditoría se hace con GitHub Copilot dentro de VS Code, no con el chat web. La razón es una sola:"*
>
> - **`@workspace`** — Copilot ve TODO su proyecto. Un chat web viendo un archivo suelto no puede encontrar el `render()` que nadie llama o el `export` que nadie importa. Copilot sí — los bugs de verdad viven ENTRE archivos
> - **Modo Ask, siempre** — pregunta y responde. No dejen que edite archivos: hoy la IA diagnostica, no opera
> - **Presupuesto** — el plan gratuito da ~50 mensajes al mes. La auditoría completa cuesta 3 o 4. Los brainstorms van al chat web, que es gratis. Pidan con intención
>
> *"Cada mensaje cuesta. Así funciona también en un equipo real: las herramientas tienen presupuesto. No es un estorbo — es parte de la lección."*

> **Pregunta de activación (QUIZ de los slides — el puente a la demo):**
> *"Pregunta antes de arrancar, respuestas en el chat: Copilot revisa tu código y concluye 'Todo se ve correcto ✅'. ¿Le crees? ¿Qué harías para comprobarlo?"*
> *(Tomar 2-3 respuestas sin corregir. Conducir hacia: los correctores también se equivocan — y se equivocan con confianza. La única verdad es la app corriendo; por eso el plan de pruebas se ejecuta a mano.)*

> **Cierre del Momento + puente al siguiente:**
> *"No les voy a responder yo. Lo vamos a comprobar en vivo: voy a hacer que Copilot revise un proyecto delante de ustedes — y vamos a ver qué encuentra, qué inventa, y cómo se le verifica. Miren."*

---

## MOMENTO 2 — Demo: el corrector en vivo

**Tiempo:** ~20 min

> **OBJETIVO:** El alumno ve el método completo de auditoría una vez: review con `@workspace` (hallazgos con archivo, línea y severidad — sin soluciones), plan de pruebas de casos borde, ejecución de 2 pruebas en vivo (la de datos corruptos incluida: editar el localStorage a `{malformado}` y recargar), y el momento clave — **verificar un hallazgo antes de aceptarlo**: "¿esto es cierto? Vamos a la app… aquí no aplica. Los correctores también alucinan". Al cerrar, distingue hallazgo de idea, y severidad por impacto.

### 2.1 El review en vivo

**EN PANTALLA: VS CODE — el proyecto `mi-setlist` del instructor abierto (con 2-3 defectos sembrados de antemano: una mutación directa del estado, un `getItem` sin `try/catch`); el chat de Copilot en modo Ask en el panel lateral.**

> **¿Qué es un code review?** Revisión sistemática del código buscando problemas — no confirmación de que "funciona".

> **Tu apertura:**
> *"Este proyecto funciona. Lo abren, buscan, agregan canciones — todo bien. Ahora vamos a ver qué dice un corrector que puede leer TODOS los archivos a la vez. Fíjense en el prompt: le pido hallazgos, NO soluciones. Primero entiendo qué está mal y qué tan grave es. Arreglar sin entender es como tomar pastillas sin diagnóstico."*

> **Demo en vivo en la herramienta — el review:**
> 1. Abrir el chat de Copilot, verificar **modo Ask**. Comentar en una línea: *"este agente ve todo el proyecto — por eso puede encontrar el `render()` que nadie llama."*
> 2. Pegar el prompt de review (el mismo que usarán en el lab):
> ```text
> @workspace Haz un code review de mi proyecto contra este contrato:
> [contrato técnico]. Busca específicamente: mutaciones directas del
> estado, faltas de try/catch en storage.js, render olvidado tras
> cambios de estado, funciones exportadas que nadie importa, ids que
> no usan randomUUID y fechas sin rehidratar al cargar.
>
> FORMATO: Lista de hallazgos con archivo y línea, cada uno con
> severidad (crítico / mayor / menor) y por qué.
>
> RESTRICCIONES: NO edites ningún archivo ni me des código corregido
> todavía. Solo hallazgos.
> ```
> 3. Leer los hallazgos en voz alta. Verificar que citen **archivo y línea** — un hallazgo sin ubicación no es verificable.
> 4. Clasificar 2-3 en voz alta razonando por impacto: *"¿esto rompe la app para el usuario? Crítico. ¿Funciona pero es deuda? Mayor. ¿Es cosmético? Menor — y hoy los menores se sueltan."*

> **¿Qué es un hallazgo con severidad?** Un problema clasificado por impacto en el usuario: **crítico** (rompe la app) / **mayor** (flujo confuso o deuda) / **menor** (pulido). La severidad dicta el orden: crítico ahora, mayor al plan, menor fuera.

### 2.2 El plan de pruebas + 2 ejecutadas en vivo

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — Copilot a un lado; la app corriendo con DevTools (Application) al otro.**

> **¿Qué es un caso borde?** Situación extrema o rara — datos corruptos, lista vacía, texto con espacios — donde viven los bugs. Cualquier código funciona en el caso feliz.

> **Demo en vivo en la herramienta — el plan de pruebas:**
> 1. En el mismo chat, pedir el plan:
> ```text
> @workspace Ahora dame un plan de 6 a 8 pruebas manuales para mi app,
> priorizando casos borde: datos corruptos en localStorage, playlist
> vacía, búsqueda sin resultados, nombres duplicados o con espacios,
> recarga tras eliminar. Formato: paso a paso + resultado esperado.
> ```
> 2. Leer el plan. Elegir 2 y ejecutarlas EN VIVO — la primera, obligatoria, **datos corruptos**: DevTools → Application → LocalStorage → editar el valor a `{malformado}` → recargar. *"Miren: pantalla blanca. La app murió. Esto es un crítico — el usuario pierde todo. Se arregla antes que cualquier otra cosa."*
> 3. Ejecutar una segunda (playlist vacía o búsqueda sin resultados). Anotar en voz alta: pasó / falló.
> 4. **El momento clave — verificar un hallazgo antes de aceptarlo.** Tomar un hallazgo discutible del review y comprobarlo contra la app: *"¿Esto es cierto? Vamos a la app… no, aquí no aplica. Los correctores también alucinan. Por eso el veredicto sale de SU navegador, no de la opinión de la IA."*

> **Tu cierre:**
> *"La IA diseñó las pruebas en 30 segundos — eso es lo que sabe hacer. Pero ejecutarlas y decidir qué significa cada resultado, eso fue mío. El review es una opinión. Tu app corriendo es un hecho."*

### 2.3 Calibración + transición al lab

**EN PANTALLA: SLIDES — COMPROBACIÓN ("¿Cuál de estos hallazgos es CRÍTICO?").**

> **Pregunta de calibración (COMPROBACIÓN de los slides):**
> *"¿Cuál de estos hallazgos es CRÍTICO? A: el botón de eliminar es gris y 'se ve poco moderno'. B: una función de render tiene 30 líneas y podría dividirse. C: con localStorage corrupto, la app muere en pantalla blanca. D: sería buena idea agregar modo oscuro."*
> *(Respuesta: C — rompe la app para el usuario; se arregla HOY, antes que todo. A es menor: pulido. B es mayor: deuda real, pero la app funciona — entra al plan. D no es un hallazgo: es una idea de feature — quizá su HU propia. Rematar: severidad = impacto en el usuario, no incomodidad del programador.)*

> **Cierre del Momento + puente al siguiente:**
> *"Ahora ustedes, 30 minutos, sobre SU código. La meta es encontrar el bug que los iba a avergonzar en el Demo Day — encuéntrenlo hoy, que todavía es gratis. Críticos se arreglan ya. Mayores van al plan. Menores se sueltan."*

> **Plan B (si Copilot falla o el límite se agotó):**
> El método clásico — pegar `state.js` + `storage.js` en el chat web con el mismo prompt sin `@workspace`. Se pierde la vista entre archivos, pero la clase fluye. La prueba de datos corruptos se hace igual en vivo: no depende de la IA.

---

## MOMENTO 3 — Bloque de auditoría

**Tiempo:** ~30 min (checkpoint ~min 60)

> **OBJETIVO:** El alumno audita SU Sprint 1: pide el review contra el contrato (prompt del lab, modo Ask), pide el plan de 6-8 pruebas de casos borde, **ejecuta cada prueba a mano** anotando pasó/falló, y hace triage: críticos se arreglan AHORA con el ritual de C18 (un hallazgo → una porción → probar), mayores se anotan para el plan, menores se descartan. El instructor rondea como QA lead: nadie acepta un review sin haber ejecutado las pruebas — "corrompe tu localStorage ahora, delante de mí".

### 3.1 Briefing corto (~5 min)

**EN PANTALLA: NAVEGADOR — Lab 19, Parte 1 ("Auditoría con Copilot"), proyectado.**

> **Tu briefing:**
> *"Su turno. Treinta minutos, tres pasos, y los dos prompts los acaban de ver — están en el lab, palabra por palabra:"*
>
> - **Uno: el review.** Copilot en **modo Ask**, el prompt con su contrato pegado. Les cuesta 1 request. Verifiquen que cada hallazgo cite archivo y línea
> - **Dos: el plan de pruebas.** Mismo chat, 1 request más. Y las 6-8 pruebas las ejecutan USTEDES en su navegador, anotando pasó/falló — el veredicto no sale del chat
> - **Tres: el triage.** Críticos se arreglan AHORA, con el ritual de la 18: un hallazgo, una porción, probar. Mayores se anotan para el plan. Menores se sueltan — hoy no hay tiempo para cosmética
>
> *"La auditoría completa cuesta 3 o 4 requests de sus ~50. Y una advertencia: modo Ask, siempre. Si dejan a Copilot editar en modo agente, pierden el control del diagnóstico — y si no pueden explicar los cambios que hizo, los van a revertir conmigo al lado."*

### 3.2 Trabajo autónomo + rondas de QA lead (~20 min)

**EN PANTALLA: (del alumno) VS Code con Copilot + su app con DevTools. (del instructor) rondas.**

> **Tiempo del alumno (anunciarlo):** *"20 minutos: ~5 en pedir y leer el review, ~8 en ejecutar las pruebas a mano, ~7 en arreglar críticos. Si su auditoría sale limpia de verdad, avísenme — la verifico y arrancan el Sprint 2 antes que el resto."*

> **Señales de alerta y qué hacer (rondas — hoy eres QA lead):**
>
> | Señal | Qué está pasando | Intervención |
> |---|---|---|
> | Auditoría "lista" en 10 min, nada que arreglar | Aceptó el review sin ejecutar pruebas | *"Corrompe tu localStorage ahora, delante de mí."* Si la app muere, el "todo perfecto" queda desmentido en vivo |
> | Arregla menores antes que críticos | Prioriza lo cómodo | Regla: crítico → mayor → menor, en ese orden. Un botón bonito no compensa una app que muere al recargar |
> | Le pide a la IA que "arregle todo" tras el review | Volvió al modo expendedora | Ritual de C18: un hallazgo → una porción → probar |
> | Copilot en modo agente le editó medio repo | Perdió el control del diagnóstico | `git diff` juntos; si no explica los cambios, revertir y modo Ask |
> | Quemó sus ~50 requests del mes | Usó Copilot para brainstorms/charla | Plan B: chat web pegando `state.js` + `storage.js`; recordar la división de herramientas |
> | Hereda las severidades de la IA sin discutirlas | No está decidiendo | Pregunta: *"¿esto es mayor o crítico? ¿Por qué?"* — la severidad la decide él, por impacto |
>
> **Señal de comprensión (anotarla para el Q&A del jueves):** el alumno que **rebate** un hallazgo con evidencia — *"lo probé y no aplica, porque..."* — está haciendo exactamente lo que el módulo enseña. Eso vale más que un triage obediente.

### 3.3 Checkpoint de auditoría (~5 min)

**EN PANTALLA: SLIDES — "CHECKPOINT Fase 1: Auditoría cerrada" proyectado.**

> **Checkpoint obligatorio (~min 60):**
> Los **críticos están corregidos** — la prueba de datos corruptos pasa: la app ofrece "Empezar de cero", no pantalla blanca — y los **mayores** están identificados y anotados, listos para la decisión de plan.
>
> *(Validar por chat: "auditoría: críticos corregidos sí/no + cuántos mayores anotados". A quien reporta cero hallazgos: verificarlo en ronda — correr la prueba de corruptos juntos.)*

> **Cierre del Momento + puente al siguiente:**
> *"Ya saben qué estaba roto y qué quedó anotado. Pregunta obligada antes de construir: ¿su plan del Sprint 2 sigue siendo válido, o la auditoría lo acaba de cambiar? Eso se decide en 5 minutos — y solo si hace falta cambiarlo. Vamos."*

---

## MOMENTO 4 — Bloque Sprint 2: plan vigente + MVP completo

**Tiempo:** ~90 min (checkpoint ~min 150)

> **OBJETIVO:** El alumno decide su plan en 5 minutos con la regla condicional del lab — ¿la auditoría dejó mayores o arrastro HUs del Sprint 1? Sí: `SPRINTS.md` v2 con la realidad; no: línea de confirmación ("Plan sin cambios — auditoría sin mayores") y directo a construir — y ejecuta el Sprint 2 con el ritual de C18, HU por HU: ordenar sobre copia (`[...canciones].sort()`), eliminar con el modal propio (patrón `pedirConfirmacion` de C16), duración y stats como funciones puras (`reduce`, ms → "1 h 23 min"), y robustez (validar la estructura del JSON al cargar → "Empezar de cero"). La meta es el MVP completo; lo que no llegue queda identificado con precisión en la tarea asíncrona (miércoles + jueves hasta las 8pm).

### 4.1 Briefing único — decisión de plan + recordatorios del contrato (~8 min)

**EN PANTALLA: NAVEGADOR — Lab 19, Parte 2 ("Replanifica tu Sprint 2 — solo si hace falta") + la tabla de recordatorios de la Parte 3.**

> **Tu briefing — primero, la decisión de plan (5 minutos, no más):**
> *"Antes de escribir una línea, decidan si su plan sigue vivo. Dos preguntas:"*
>
> - *"¿La auditoría les dejó hallazgos **mayores**? → entran al plan."*
> - *"¿Arrastran HUs pendientes del Sprint 1? → el plan debe reflejarlo."*
>
> *"Si alguna es sí: `SPRINTS.md` v2, con la realidad — qué construyen en la próxima hora y cuarto, en qué orden. Si las dos son no: su plan original sigue vigente. Agregan una línea — 'Plan sin cambios, auditoría sin mayores' — y arrancan a construir ya. Replanificar sin necesidad no es disciplina: es perder 10 minutos."*

> **Tu briefing — recordatorios del contrato para las HUs de hoy:**
> *"Las HUs típicas de este sprint ya las conocen — todo esto lo construyeron en el Módulo 4. Cuatro recordatorios:"*
>
> | Pieza | Recuerda |
> |---|---|
> | Ordenar | Copia antes de ordenar: `[...canciones].sort(...)` — nunca mutes el estado |
> | Confirmar eliminación | Modal PROPIO (patrón `pedirConfirmacion` de C16), nada de `confirm()` |
> | Duración total / stats | Función pura sobre el estado (`reduce`); milisegundos → "1 h 23 min" |
> | Robustez | Al cargar, valida la estructura del JSON; si es inválida → mensaje + "Empezar de cero" |
>
> *"Su propio repo del Módulo 4 es referencia válida — el modal y el sort ya los escribieron una vez. Consultarse a ustedes mismos es gratis y no gasta requests."*
>
> *"Reglas del bloque: mismo ritual de la 18 — una HU por vez, porciones, probar contra criterios, commit. La barra es el minuto 150. Lo que no llegue no se pierde: queda identificado con nombre y apellido en su tarea asíncrona — tienen el miércoles y el jueves hasta las 8pm. Pero identificado HOY, no el jueves a las 7."*

### 4.2 Trabajo autónomo + rondas del instructor (~75 min)

**EN PANTALLA: (del alumno) VS Code + Live Server + su herramienta de IA. (del instructor) rondas.**

> **Tiempo del alumno (anunciarlo):** *"Hora y cuarto. Referencia de reparto para el MVP restante: ~20 min stats y duración, ~15 el orden, ~20 modal + eliminar, ~15 robustez ante corruptos, y el resto es margen. El orden real lo manda su plan — el que acaban de confirmar o ajustar."*

> **Errores esperables en las rondas:**
>
> | Síntoma | Causa probable | Salida |
> |---|---|---|
> | El orden "desordena para siempre" | `.sort()` mutó el estado | `[...canciones].sort(...)` — copia primero |
> | Apareció el `confirm()` nativo | Olvidó el patrón de C16 | Señalar su propio código del Módulo 4 como referencia |
> | Stats no cuadran tras eliminar | Cálculo sobre copia vieja del estado | Función pura que recibe el estado actual en cada render |
> | La app muere con datos corruptos (aún) | Validación del JSON incompleta | No basta el `try/catch` del parse: validar también la estructura (¿es array? ¿tiene los campos?) |
> | Min 100 y sigue puliendo el Sprint 1 | No suelta; el MVP se le escapa | Timebox duro: lo que falta va a la tarea asíncrona, seguir con el plan |
>
> **Rondas de comprensión (seguir anotando para el Q&A):** a los que avanzan rápido, una función al azar — *"¿por qué esto usa spread y no push?"*, *"¿qué pasa si iTunes te manda una canción sin género?"*. Las respuestas con criterio son material del jueves.

### 4.3 Checkpoint del MVP (~7 min)

**EN PANTALLA: SLIDES — "CHECKPOINT Fase 3: MVP completo" proyectado.**

> **Checkpoint obligatorio (~min 150):**
> Eliminar una canción de principio a fin: aparece **TU modal** (no el del navegador); al confirmar, **stats y duración se recalculan solas**; el **orden** funciona sin corromper el estado; el localStorage corrupto muestra **"Empezar de cero"**. Consola limpia.
>
> *(Validar por chat: "MVP: completo / me falta [X]". Quien reporta pendientes los anota con precisión — HU exacta, no "me falta terminar" — porque eso ES su tarea asíncrona. Registrar la lista: es tu mapa de riesgo para el jueves.)*

> **Cierre del Momento + puente al siguiente:**
> *"El MVP está — o está claro qué falta y cuándo se cierra. Ahora un problema distinto: el jueves van a presentar diez apps que hacen exactamente lo mismo, porque el MVP es el mismo para todos. ¿Qué hace que la SUYA sea suya? Eso se decide ahora, en 10 minutos."*

---

## MOMENTO 5 — Tus 2 HUs propias

**Tiempo:** ~10 min (checkpoint ~min 160)

> **OBJETIVO:** Con la app completa, el alumno define la feature que lleva su firma: brainstorm en el **chat web** (no en Copilot — no necesita ver código y no gasta presupuesto), elige 2, las redacta como HU con criterios observables (la misma auditoría de C17: observables, tamaño sano, dentro del contrato) en `HISTORIAS.md`, y marca la que implementará asíncrona antes del Demo Day. El instructor hace de coach de producto: "¿por qué esa?" — si la respuesta es "era la más fácil", empujar un nivel.

### 5.1 Briefing + brainstorm (~4 min)

**EN PANTALLA: NAVEGADOR — Lab 19, Parte 4 + la lista de ideas de inspiración del enunciado.**

> **Tu briefing:**
> *"Diez minutos para decidir qué feature lleva SU firma. El brainstorm va en el chat web — no en Copilot: no necesita ver su código y no gasta su presupuesto. El prompt está en el lab:"*
>
> ```text
> Mi app hace: [resumen de tu MVP actual]. Propón 5 features pequeñas
> "de producción" que aporten valor real al usuario, factibles con mi
> contrato (sin backend ni librerías). Una línea cada una.
> ```
>
> *"Las ideas del enunciado son punto de partida válido: favoritos, filtros, cargar más resultados, deshacer eliminación, modo oscuro, compartir el setlist como texto. Pueden proponer otras — con un límite: dentro del contrato. 'Compartir con amigos en línea' es backend. Fuera."*

> **Nota de ronda (los que siguen en el MVP):** quien no cerró el M4 no está en esta fase — sigue construyendo. Su HU propia solo entra si el MVP queda cerrado asíncrono con margen real antes del jueves 8pm; si no, esos 10 pts se sacrifican. MVP > HU propia > pulido, también fuera de clase.

### 5.2 Elección + redacción (~4 min)

> **Tu instrucción:**
> *"Elijan 2. Redáctenlas como HU con criterios — la misma auditoría de la Clase 17: observables en pantalla, tamaño sano, dentro del contrato — y agréguenlas a `HISTORIAS.md`. Marquen la que van a implementar: al menos 1 antes del jueves 8pm."*
>
> *(Rondas de coach de producto — dos preguntas por alumno:)*
>
> - *"¿Por qué esa?"* — si la respuesta es "era la más fácil", empujar un nivel: la HU propia es su material de Demo Day, lo que hace memorable su presentación entre diez apps iguales
> - *"¿Cabe en una sesión asíncrona?"* — una HU propia que no cabe en una tarde es un riesgo, no una firma

### 5.3 Checkpoint de HUs propias (~2 min)

> **Checkpoint obligatorio (~min 160):**
> 2 HUs propias con criterios en `HISTORIAS.md`, con la elegida para implementar marcada.
>
> *(Validar por chat: "mis 2 HUs: [nombre] y [nombre], implemento [X]". Anotar las promesas — van al Q&A del jueves: "¿tu HU propia: por qué esa y no otra?")*

> **Cierre del Momento + puente al siguiente:**
> *"La app está completa y tiene firma. Un solo problema: existe únicamente en su máquina. El jueves no pueden presentar un localhost — y un reclutador tampoco puede abrirlo. Últimos 20 minutos: su app sale a internet."*

---

## MOMENTO 6 — Deploy + cierre contra el plan

**Tiempo:** ~20 min

> **OBJETIVO:** La app deja de vivir solo en su máquina: Settings → Pages → deploy from branch `main`/root, esperar el build, y probar el **flujo completo en la URL pública** (buscar, agregar, recargar). El deploy se activa HOY aunque el MVP no esté completo — Pages publica lo que haya, y los errores de rutas se resuelven mejor en clase que solos. Cierre por chat: prometido vs demostrado + la **tarea asíncrona de 3 puntos** declarada con su fecha límite (**jueves 8pm**): cerrar MVP pendiente + implementar la HU propia + segunda pasada de auditoría sobre los archivos del Sprint 2. Preview C20: el Demo Day y qué preparar.

### 6.1 Deploy guiado (~10 min)

**EN PANTALLA: NAVEGADOR — GitHub del instructor: Settings → Pages, paso a paso; después la URL pública de su app.**

> **Tu instrucción (todos a la vez, tú guiando en pantalla):**
> 1. *"GitHub, su repo: **Settings → Pages → Deploy from a branch → `main` / root → Save**."*
> 2. *"El build tarda 1 o 2 minutos. Mientras corre: la URL va a ser `https://SU_USUARIO.github.io/mi-setlist/`."*
> 3. *"Cuando cargue: prueben el flujo completo EN la URL pública — buscar, agregar, recargar. No en localhost. En la URL."*
>
> *"Y sí: se deploya aunque el MVP no esté completo. Pages publica lo que haya en `main` — cada push de su trabajo asíncrono actualiza la URL solo. Activarlo hoy significa que el jueves no hay sorpresas de configuración."*

> **Diagnóstico de fallas (rondas):**
>
> | Síntoma | Causa | Salida |
> |---|---|---|
> | Pages da 404 | Build aún corriendo o Pages sin activar | Esperar 2 min; verificar Settings → Pages |
> | En blanco en Pages, pero funciona local | Rutas absolutas o imports sin `./` | Corregir a rutas relativas |
>
> *"ESM en Pages funciona sin cambios — es `https://`, no `file://`. Si algo no carga, son las rutas. Siempre son las rutas."*

### 6.2 Cierre por chat: prometido vs demostrado + entrega (~5 min)

**EN PANTALLA: CHAT DE TEAMS — el formato de cierre fijado.**

> **Tu instrucción:**
> *"Cierre en el chat, formato: link al repo + link al deploy + 'prometido [X], demostrado [Y], cierro asíncrono [Z]'. Reviso que el deploy cargue — voy a abrir varios."*
>
> *(Abrir 3-4 deploys al azar en vivo. Registrar el mapa de riesgo: sin deploy o sin MVP → mensaje directo hoy mismo, no esperar al jueves. Verificar ≥4 commits nuevos y `PROMPTS.md` al día en los que abras.)*

### 6.3 Tarea asíncrona + preview C20 (~5 min)

**EN PANTALLA: SLIDES — slide de Entrega con los 3 puntos de la tarea asíncrona.**

> **Tu cierre:**
> *"Lo que queda entre hoy y el jueves a las 8pm — tres puntos, en este orden:"*
>
> - **Uno: cierren el MVP pendiente.** Lo que anotaron en el checkpoint, con nombre exacto
> - **Dos: implementen su HU propia elegida.** La que marcaron hace 20 minutos
> - **Tres: segunda pasada de auditoría.** El mismo prompt de review de Copilot sobre los archivos que tocaron en el Sprint 2 — unos 3 requests — y arreglen cualquier crítico. Así llegan al Demo Day con TODO su código auditado
>
> *"Tienen el miércoles completo y el jueves hasta las 8pm. Si algo los frena el miércoles, me escriben — no lleguen al jueves con el problema guardado."*
>
> *"Y para el Demo Day: playlist de demo ya armada con 5+ canciones variadas — que las stats digan algo —, 3 screenshots de respaldo por si la API falla, README del repo pulido, y al menos un ensayo de sus 10 minutos, solos, con reloj. El jueves no se construye: se presenta."*
>
> *(Cierre mínimo — la clase termina aquí.)*
