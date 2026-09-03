# CLASE 18 — Sprint 1: Construcción con Copiloto (Módulo 5)

> **Curso:** Code 201 · **Módulo 5** — Clase 2 de 4 (**SPRINT 1**)
> **Proyecto víctima:** **Mi Setlist** (repo **_mi-setlist_** de cada alumno, creado en C17) — hoy la app empieza a existir: búsqueda en la iTunes Search API con estados de UI + playlists persistidas.
> **NO es lab calificado** (el calificado del M5 es el Proyecto Final en C20).
> **Dinámica:** cada alumno ejecuta SU `SPRINTS.md` — las apps divergen (nombres, UI, orden) y eso es diseño, no caos. El contrato técnico mantiene la arquitectura común. Se valida con dos varas: **resultados observables** (checkpoints) y **comprensión** ("explícame esta línea") — nunca contra un código esperado, porque ya no existe.
> **Regla nueva del día:** el **modo interactivo** — la IA no puede codear sin preguntar primero. 2-3 preguntas estratégicas, el alumno decide, ella implementa lo decidido.
> **Mínimo innegociable del día:** búsqueda con estados de UI + playlist que sobrevive al recargar. Sin eso, la C19 (auditoría) no funciona. Lo pendiente se cierra asíncrono ANTES de C19.
> **Fuente de inputs:** **_mi-sistema/class-18/_** (README + lab + slides + **facilitator**) + **_code201/M5-ITINERARIOS-CLASES.md_** + contrato/MVP en `class-17/project/`.
> **Estado:** Capa 2+3 **completa (M1-M4)** — pendiente validación de Eric. *(Reestructura sobre el itinerario, por decisión de Eric: sin micro-standup de mitad de sprint, y los dos bloques de trabajo se fusionaron en UNO solo con briefing único al frente — el ritual es el mismo para cada HU. Las barras de min 90 y 155 viven dentro del bloque, validadas por chat.)*
> **Duración:** 3h reales · itinerario a 180 min · **sin receso formal** — los dos bloques de trabajo autónomo (60 min c/u) son pausa suficiente.

---

## Idea fuerza de la clase

**Se acabó la planificación: hoy el plan se ejecuta, HU por HU, con el ritual de implementación.** El ciclo que gobierna el día: **prompt interactivo → tus decisiones → código en porciones → probar contra criterios → commit → registrar**. La novedad respecto a C17 es el **MODO** dentro del prompt: la IA debe hacer 2-3 preguntas estratégicas ANTES de escribir código (¿búsqueda con botón o por tecla? ¿qué muestro si no hay resultados?) — y esas respuestas son decisiones de diseño del alumno, que además son su argumentación del Demo Day. Tesis del día: **(1) la IA teclea rápido, pero decidir sigue siendo tu trabajo** — quien responde "lo que sea mejor" cede el diseño de SU app; **(2) una HU completa vale más que cuatro empezadas** — cerrar (probar + commit + registrar) antes de abrir la siguiente.

> **Enfoque de la clase:** taller-conducido. Una sola exposición (el slice en vivo, M2: el primer `fetch` a la API codeado con la IA frente a todos — resuelve CORS y rate limit en grupo) y **un solo bloque largo de trabajo**: el ritual es el mismo para cada HU — cambia la historia, no el ciclo — así que el briefing se da completo al frente y el alumno administra su sprint. Dos barras comunes dentro del bloque (búsqueda viva ~min 90, playlist persistida ~min 155), validadas por chat sin cortar el trabajo. La revisión formal es una sola, al cierre: prometido (`SPRINTS.md`) vs demostrado (la app en pantalla).

---

## Tabla de tiempos (itinerario a 180 min)

| Momento | Tema                                                                     | Parte del lab               | Tiempo  |
| ------- | ------------------------------------------------------------------------ | --------------------------- | ------- |
| **M1**  | Apertura + arranque declarado (cada quien nombra su primera HU)           | Setup                       | ~10 min |
| **M2**  | **Demo: el slice en vivo** — prompt de implementación en modo interactivo | — (guion en facilitator)    | ~20 min |
| **M3**  | **Bloque de trabajo único** — el Sprint 1 completo, HU por HU con el ritual | Partes 1+2 (CP ~90 y ~155)  | ~130 min |
| **M4**  | Cierre contra el plan — prometido vs demostrado + entrega                 | Entrega                     | ~20 min |

> **Nota de tiempos:** sin receso formal (convención M5). Los checkpoints del lab quedan anclados a ~min 90 (búsqueda viva) y ~min 155 (playlist persistida), como en el itinerario oficial.
>
> **Mapa de temas → momentos:** meta del día + reglas de la API (M1) · prompt de implementación con MODO interactivo + ritual completo + slice en vivo con commit (M2) · briefing único (pieza→archivo, contrato, barras) + todo el Sprint 1 HU por HU: búsqueda con estados → playlists → persistencia, con checkpoints ~90 y ~155 dentro del bloque (M3) · prometido vs demostrado + tarea asíncrona + preview C19 (M4).
>
> **Concepto pedagógico clave (las 2 tesis):** (1) **la IA teclea, tú decides** — el modo interactivo convierte cada HU en 2-3 decisiones de diseño propias, registradas: son la argumentación del Demo Day. (2) **cerrar antes de abrir** — HU terminada = probada contra sus criterios + commit + entrada en `PROMPTS.md`. Cuatro historias a medias no se demuestran; dos cerradas sí.

---

## Cadena Problema → Solución de la clase

```
M1: "tienen el plan y el repo — ¿por donde se empieza un sprint?"
     → arranque declarado: cada quien nombra su primera HU (el orden lo manda SU
       SPRINTS.md) + reglas de la API en la mesa (boton, limit=10, 403 = esperar)
     ↓ (ya se cual HU va primero... ¿le pido a la IA que me la haga?)
M2: "pedirle 'hazme la busqueda' devuelve 80 lineas que no entienden — deuda directa
     para el Q&A" → el prompt de implementacion con MODO interactivo: la IA pregunta,
     tu decides, ella implementa EN PORCIONES; demostrado en vivo con el primer fetch
     a la API (slice que ademas des-riesga CORS y rate limit en grupo)
     ↓ (vieron el ritual completo, con decisiones en voz alta y commit)
M3: "ahora ustedes: SU sprint completo, con el ritual" → briefing unico (pieza→
     archivo, reglas API, contrato: randomUUID, inmutable, guardar()→render(),
     rehidratar fechas, cerrar antes de abrir) y un solo bloque de trabajo HU por HU;
     dos barras comunes adentro: busqueda viva (~90, con errores masivos resueltos
     al aire) y playlist que sobrevive al recargar (~155)
     ↓ (la app hace algo real — ¿cuanto de lo prometido?)
M4: cierre contra el plan: prometido vs demostrado + tarea asincrona declarada →
     preview C19: el codigo se audita — Sprint 1 cerrado antes de llegar
```

---

## MOMENTO 1 — Apertura + arranque declarado

**Tiempo:** ~10 min

> **OBJETIVO:** El grupo pasa de plan a ejecución sin perder tiempo: meta del día clara (al cierre se demuestra búsqueda con estados + playlist persistida contra el propio `SPRINTS.md`), reglas de la API en la mesa (buscar con botón, `limit=10`, `403` = esperar 1 min — rate limit ~20 req/min), y **cada alumno declara su primera HU** por chat o micro. Quien no cerró el pre-work de C17 queda identificado: su prioridad de arranque es resolverlo en los primeros 15 min con apoyo.

### 1.1 Meta del día + mínimo innegociable

**EN PANTALLA: SLIDES — Slides 1-2: portada "Clase 18: Sprint 1" + transición Clase 17 → Clase 18.**

> **Tu apertura:**
> *"Se acabó la planificación. Tienen sus historias, su plan de sprints y su repo corriendo — hoy se implementa. Al cierre de la clase cada uno demuestra su app contra lo que su propio `SPRINTS.md` prometió. No contra el mío. Contra el suyo."*

> **Tu explicación teórica precisa:**
> *"Dos cosas antes de arrancar. Primera: sus apps van a divergir — distintos nombres, distinta interfaz, distinto orden. Eso no es un problema: es diseño. Lo que NO diverge es la arquitectura, porque el contrato es el mismo para todos. Segunda: hay un mínimo innegociable hoy, la barra común del grupo:"*
>
> - **Búsqueda funcionando con sus estados de UI** — carga, error, sin-resultados
> - **Una playlist que sobrevive al recargar la página**
>
> *"¿Por qué innegociable? Porque en la Clase 19 su código se audita — y una auditoría sobre una app que no busca no audita nada. Lo que no cierre hoy en clase, se cierra asíncrono antes del jueves. Sin excepción."*

### 1.2 Reglas de la API

**EN PANTALLA: SLIDES — tabla "Meta del día + reglas de la API".**

> **¿Qué es un rate limit?** Límite de solicitudes por minuto que impone una API. Excederlo devuelve error `403`.

> **Tu explicación teórica precisa:**
> *"La API de iTunes acepta más o menos 20 solicitudes por minuto. Ese número no es un dato decorativo — decide diseño:"*
>
> - **Buscar con botón (submit), nunca en cada tecla.** Un usuario tipeando "Soda Stereo" son 11 teclas — 11 solicitudes de una. Multipliquen por todos ustedes buscando a la vez.
> - **`limit=10`** en cada solicitud — respuestas rápidas, suficientes para elegir.
> - **`403` = te pasaste.** No es un bug de tu código. Espera un minuto y sigue.
>
> *"Estas tres reglas van también en sus prompts. Si la IA les propone búsqueda en vivo con `keyup`, ya saben qué responderle — y por qué."*

### 1.3 Arranque declarado

**EN PANTALLA: CHAT DE TEAMS — la pregunta fijada: "¿Cuál es tu primera HU?"**

> **Tu instrucción:**
> *"Ronda relámpago antes de tocar nada. Todos al chat: '¿cuál es tu primera HU?' Una línea. El orden lo manda SU `SPRINTS.md`, no el lab y no yo."*
>
> *(Leer las respuestas en voz alta mientras caen. Dos detecciones:)*
>
> - **Quien no tiene plan** (no cerró el pre-work de C17): su prioridad son los primeros 15 minutos — versión express con la lista maestra del facilitator de C17 como plan prestado, y arranca por búsqueda. Que no pierda la clase planificando lo ya planificado.
> - **Quien dejó la búsqueda al final:** pregunta guía en vivo — *"¿de dónde salen las canciones que vas a agregar a tu playlist?"* La búsqueda es la dependencia de casi todo: si tu plan la dejó al final, este es el momento de cuestionar tu plan.

> **Cierre del Momento + puente al siguiente:**
> *"Ya saben QUÉ atacan primero y contra qué se miden al cierre. Falta el CÓMO — porque hoy hay una regla nueva para pedirle código a la IA, y la vamos a estrenar juntos con la parte más riesgosa del día: el primer fetch a la API. Miren."*

---

## MOMENTO 2 — Demo: el slice en vivo

**Tiempo:** ~20 min

> **OBJETIVO:** El alumno ve el ritual de implementación completo, una vez, con el riesgo técnico del día quemado en grupo: el instructor codea con la IA el primer `fetch` a la API de iTunes en `api.js`, usando el **prompt de implementación con MODO interactivo**. La IA pregunta, el instructor responde en voz alta razonando ("¿botón o tecla? Botón — el contrato dice rate limit"), pega la porción, la prueba en consola mostrando el JSON real, y commitea. Al cerrar, el alumno puede repetir el ciclo: prompt → preguntas → decisión → porción → prueba → commit.

### 2.1 El prompt de implementación: las 4 partes + MODO

**EN PANTALLA: SLIDES — slide "El prompt de implementación" con las 4 partes y el MODO.**

> **Tu explicación teórica precisa:**
> *"En la Clase 17 aprendieron el prompt de 4 partes para planificar. Para implementar se agrega una pieza nueva — el MODO:"*
>
> - **CONTEXTO** — contrato técnico + lo que su proyecto YA tiene (qué hay en cada archivo de `js/`)
> - **TAREA** — UNA historia de usuario, con sus criterios. Una. No la app.
> - **MODO** — *"hazme 2 o 3 preguntas estratégicas ANTES de codear. Espera mis respuestas. Después dame el código en porciones pequeñas, explicando qué hace cada una y en qué archivo va."*
> - **RESTRICCIONES** — respeta el contrato; no reescribas archivos que no te pedí; si el contrato te impide algo, dímelo en vez de saltártelo

> **¿Qué es el modo interactivo?** Forma de trabajar en la que la IA pregunta antes de codear y tú decides. Lo contrario de usarla como máquina expendedora de código.

> **¿Qué es una pregunta estratégica?** Pregunta sobre una decisión que le corresponde al desarrollador: experiencia de usuario, casos borde, estructura de datos. La IA no puede responderla por ti — no conoce tu producto.

> **¿Qué es un slice?** Porción mínima probable de una historia. Se implementa, se prueba y se commitea antes de seguir.

> **Tu cierre:**
> *"La secuencia completa, que van a repetir todo el día: prompt interactivo → sus decisiones → código en porciones → probar contra criterios → commit → registrar. La IA pregunta. Ustedes deciden. Ella teclea."*

> **Pregunta de calibración (QUIZ de los slides):**
> *"Le piden la búsqueda a la IA y les pregunta: '¿disparo la búsqueda con cada tecla o con un botón?'. ¿Qué responden — y qué información necesitan para decidir?"*
> *(Tomar 2-3 respuestas. Conducir hacia: la decisión no es de gusto — el contrato y la API deciden: rate limit ~20 req/min → botón. Rematar: eso es una pregunta estratégica bien respondida — decisión + porqué. "Lo que sea mejor" no es una respuesta.)*

### 2.2 Slice en vivo — el primer fetch a la API

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — el repo `mi-setlist` del instructor con `api.js` vacío; el chat de IA en el panel lateral.**

> **Tu apertura:**
> *"Lo vemos una vez, juntos, con la parte más riesgosa del día — el primer fetch. Fíjense que NO le voy a pedir 'hazme la búsqueda'. Le voy a pedir UNA porción, y la voy a obligar a preguntarme antes."*

> **Demo en vivo en la herramienta — el slice:**
> 1. Pegar el prompt del slice, nombrando las partes en voz alta:
> ```text
> CONTEXTO: [contrato técnico]. Mi proyecto tiene la estructura ESM
> con archivos vacíos: api.js, state.js, storage.js, ui.js, app.js.
>
> TAREA: Implementemos SOLO la función de api.js que busca canciones
> en https://itunes.apple.com/search y retorna un array limpio de
> canciones (nombre, artista, carátula, duración, género).
>
> MODO: Antes de codear, hazme 2 o 3 preguntas estratégicas que me
> toque decidir a mí. Espera mis respuestas. Luego dame solo esa
> función, explicada.
>
> RESTRICCIONES: async/await con try/catch. No toques otros archivos.
> ```
> 2. La IA pregunta. **Responder en voz alta, razonando cada decisión:** *"¿Botón o tecla? Botón — el contrato dice rate limit. ¿Qué retorno si falla? Un error que la UI pueda mostrar — eso lo vimos en el Módulo 3."* Antes de responder, preguntar al grupo: *"¿ustedes qué responderían? ¿Por qué?"*
> 3. Pegar SOLO la porción en `api.js`. Leerla en voz alta: qué hace cada bloque.
> 4. Probarla en la consola del navegador: llamar la función con "Soda Stereo", mostrar el **JSON real de iTunes** y señalar los campos útiles: `trackName`, `artistName`, `artworkUrl100`, `trackTimeMillis`, `primaryGenreName`.
> 5. Commit en vivo: `feat: primer fetch a la API`.
> 6. Verificación: pedir en el chat que nombren los pasos del ciclo que acaban de ver.

> **Tu cierre:**
> *"Esta decisión es mía, no de ella. Eso es lo que cambia hoy: la IA teclea rápido — decidir sigue siendo su trabajo. Y de paso resolvimos juntos el punto técnico riesgoso del día: ya vieron el JSON real, ya saben qué campos trae, ya saben que la API responde."*

> **Plan B (si la API o la IA fallan en vivo):**
> Captura del JSON de respuesta + el código del slice ya escrito, para narrarlo paso a paso. Si la API está caída para todo el grupo: activar el fallback del módulo (TheAudioDB) y avisar que el enunciado se ajusta.

### 2.3 Transición al lab

**EN PANTALLA: SLIDES — COMPROBACIÓN ("la IA te entrega api.js completo con 80 líneas").**

> **Pregunta de calibración (COMPROBACIÓN de los slides):**
> *"La IA les entrega `api.js` completo, 80 líneas, y dice 'listo'. ¿Qué hacen? A: lo pego — si lo escribió la IA, funciona. B: lo pego, lo pruebo, y si funciona sigo. C: le pido la porción de UNA función, su explicación, y la pruebo contra los criterios. D: lo borro y escribo todo yo, sin IA."*
> *(Respuesta: C. A es deuda directa para el Q&A. B confunde el criterio: "funciona" no es "lo puedo explicar y mantener". D es el extremo opuesto — la IA es parte del flujo de trabajo; el punto es dirigirla. Rematar: si no puedes explicarlo, no es tuyo todavía.)*

> **Cierre del Momento + puente al siguiente:**
> *"Ese ciclo que vieron — prompt, preguntas, decisión, porción, prueba, commit — es UNA historia de usuario. Ahora ustedes, con la suya: repítanlo hasta el checkpoint. Una HU completa antes de abrir la siguiente. Nos vemos en la barra común: a los 90 minutos, la búsqueda de todos tiene que estar viva."*

---

## MOMENTO 3 — Bloque de trabajo único: el Sprint 1 completo

**Tiempo:** ~130 min (barras comunes ~min 90 y ~min 155)

> **OBJETIVO:** El alumno ejecuta TODO su Sprint 1 con el mismo ritual, HU por HU, administrando su propio tiempo: típicamente búsqueda (`fetch` + JSON en `api.js`, `class Cancion` en `models/`, estados en `ui.js`, submit en `app.js`) y después playlists + persistencia (contrato: `randomUUID`, CRUD inmutable, `guardar()` → `render()`, fechas rehidratadas). Responde las preguntas de la IA como dueño del producto y anota las decisiones. El briefing se da completo al frente — después el instructor solo rondea. Dos barras comunes marcan el pulso sin cortar el trabajo: búsqueda viva (~90) y playlist persistida (~155).

### 3.1 Briefing único — todo lo que necesitan antes de trabajar (~8 min)

**EN PANTALLA: NAVEGADOR — Lab 18: la guía "qué pieza va en qué archivo" + los recordatorios del contrato.**

> **Tu briefing:**
> *"Ahora ustedes, con SU sprint completo. Es un solo bloque de trabajo — el ciclo es el mismo para cada historia, cambia la historia. Así que les digo todo lo que necesitan ahora, y después no los interrumpo más. Cinco cosas."*
>
> *"Uno — el orden lo manda su `SPRINTS.md`. Pero la búsqueda es la dependencia de casi todo: si su plan la dejó al final, cuestionen su plan ahora, no al minuto 80."*
>
> *"Dos — el contrato ya decidió dónde va cada pieza. Esto no se negocia con la IA:"*
>
> | Pieza | Archivo |
> |---|---|
> | `fetch` al endpoint + adaptación del JSON | `js/api.js` |
> | Modelo de canción (`class Cancion`) | `js/models/Cancion.js` |
> | Pintar resultados y estados carga/error/vacío | `js/ui.js` |
> | Conectar el formulario de búsqueda | `js/app.js` |
>
> *"Tres — reglas de la API en sus prompts: `entity=song&limit=10`, búsqueda con botón, `403` es esperar un minuto — no es un bug suyo."*
>
> *"Cuatro — recordatorios del contrato para cuando lleguen a playlists y persistencia:"*
>
> - **Ids con `crypto.randomUUID()`** — no contadores, no `Math.random()`
> - **Agregar y quitar es inmutable** — `.filter`/`.map`/spread. Nada de `push` sobre el estado
> - **Cada cambio de estado termina en `guardar()` → `render()`.** Siempre. En ese orden
> - **La fecha de agregado es un `Date`** — al cargar se rehidrata con `new Date()`, como en C15
>
> *"Cinco — cerrar antes de abrir: HU terminada significa probada contra SUS criterios, commit, y registrada en `PROMPTS.md`. Una historia completa se demuestra; cuatro empezadas no. Y hay dos barras comunes en el camino — a los 90 minutos la búsqueda de todos está viva, a los 155 la playlist sobrevive al recargar. Las valido por chat, sin detenerlos."*
>
> *"Cuando la IA les pregunte cosas de producto — ¿una canción puede repetirse? ¿guardo la duración en milisegundos o formateada? — no hay respuesta única: decidan con el contrato y su MVP, y anoten el porqué. A trabajar."*

### 3.2 Trabajo autónomo + rondas del instructor (~120 min, corrido)

**EN PANTALLA: (del alumno) VS Code + Live Server + chat de IA. (del instructor) nada proyectado — rondas.**

> **Tiempo del alumno (anunciarlo):** *"Dos horas de trabajo, administradas por ustedes. Referencia si les sirve: la búsqueda completa con estados suele tomar ~45 min con el ritual; playlists y persistencia, otros ~45; el resto es margen para commits, registro y lo que se complique. Levanten la mano o chat si se traban."*

> **Señales de alerta y qué hacer (rondas):**
>
> | Señal | Qué está pasando | Intervención |
> |---|---|---|
> | Pegó un archivo de 100+ líneas generado de una | Pidió la app, no la HU | No borrar: auditar. *"Explícame esta función."* Re-encuadrar el ritual |
> | Responde "lo que sea mejor" a la IA | Cede las decisiones de diseño | Recordar: esas respuestas son su argumentación del Demo Day. Darle la muleta: *"Respondo tus preguntas: [decisión + porqué]. Si contradigo el contrato, adviérteme."* |
> | La IA le metió una librería o reescribió archivos | Prompt sin contrato/restricciones | Pegar contrato + "no toques otros archivos" — es el ejemplo perfecto de por qué existe |
> | 40 min conversando con la IA sin una línea probada | Parálisis por chat | Cortar: pegar la porción que ya tiene, probarla en consola, seguir desde ahí |
> | Min 80 sin búsqueda funcionando | En riesgo del mínimo | Sentarse: slice juntos con el prompt del facilitator |
>
> **El flujo de las rondas de bugs:** cuando un alumno llame por un error, primero preguntarle *"¿qué te dijo la IA de la causa?"*. Si no le preguntó, que lo haga contigo al lado — con el prompt de depuración: error completo + función sospechosa + *"explícame la CAUSA antes de darme cualquier solución"*. Se enseña el flujo, no se resuelve el bug.
>
> **Compartir entre alumnos:** prompts sí (es aprendizaje de prompting); código generado no — cada quien defiende el suyo en el Q&A.

> **Errores técnicos esperables (rondas del tramo playlists/persistencia):**
>
> | Síntoma | Causa probable | Salida |
> |---|---|---|
> | Agrego canción y la UI no cambia | Cambió estado sin llamar `render()` | El mantra: estado → guardar → render |
> | Persiste, pero la fecha sale rara al recargar | `Date` serializado como texto sin rehidratar | `new Date(texto)` al cargar (C15) |
> | "Failed to resolve module" | Ruta de import sin `./` o sin `.js` | Rutas relativas completas |
> | La IA reescribió archivos que no le pidió | Prompt sin restricciones | Restricción "no toques otros archivos" + revisar el diff antes de aceptar |
>
> **Prioridades de ronda a lo largo del bloque:** primera hora, foco en los que no despegan la búsqueda (slice juntos con el prompt del facilitator); segunda hora, foco en los que no llegaron a la barra 1 + auditorías de comprensión a los avanzados — una función al azar, *"explícamela sin abrir el chat"*; si no puede, que se la haga explicar por la IA y te la re-explique.
>
> **Nota para el instructor:** evitar mostrar TU código de referencia en pantalla general — ancla a todos a una implementación y mata la divergencia. En rondas individuales: pseudocódigo o preguntas guía.

### 3.3 Barra común 1 — búsqueda viva (~min 90, validación por chat sin cortar el trabajo)

**EN PANTALLA: SLIDES — "CHECKPOINT 1: Búsqueda viva" proyectado 2 minutos; el grupo sigue trabajando.**

> **Checkpoint obligatorio (~min 90):**
> Sea cual sea el orden de su plan, aquí la **búsqueda está viva**: buscar "Soda Stereo" muestra resultados con carátula, nombre y artista; indicador mientras carga; mensaje de error sin WiFi; estado vacío amigable al buscar "zzzzz". Al menos una HU cerrada con commit.
>
> *(Validar por chat: "búsqueda viva: sí/no + screenshot" — sin detener a nadie. Única excepción: errores masivos se resuelven al aire AHORA — `403` colectivo → pausa general, verificar que todos disparan con submit y no con `keyup`; CORS → Live Server. Registrar quiénes no llegaron: ronda prioritaria de la segunda hora.)*

### 3.4 Barra común 2 — playlist persistida (~min 155)

**EN PANTALLA: SLIDES — "CHECKPOINT 2: Playlist persistida" proyectado.**

> **Checkpoint obligatorio (~min 155):**
> Crear la playlist "Road trip", agregarle 2 canciones desde los resultados, **recargar la página** — la playlist y sus canciones siguen ahí. Consola sin errores.
>
> *(Validar por chat: "persistencia: sí/no". Diagnóstico rápido para los que fallan — es una de dos: ¿falta `guardar()` tras cambiar el estado, o falta `cargar()` al iniciar la app? Application → LocalStorage responde en 10 segundos: si la clave existe, el problema es cargar; si no existe, es guardar.)*

> **Cierre del Momento + puente al siguiente:**
> *"Su app busca en un catálogo real y guarda lo que el usuario arma encima. Eso es el corazón de casi cualquier aplicación que vayan a construir en su carrera. Cerramos el sprint como se cierra en un equipo: contra lo prometido."*

---

## MOMENTO 4 — Cierre contra el plan

**Tiempo:** ~20 min

> **OBJETIVO:** El sprint se cierra como en un equipo real: cada alumno reporta **prometido vs demostrado** (qué decía su `SPRINTS.md` vs qué corre en su pantalla) por chat o micro, declara su tarea asíncrona (lo que falta se termina ANTES de C19 — la validación de la próxima clase necesita el Sprint 1 completo), ajusta `SPRINTS.md` a la realidad y pushea. Entrega: link al repo con ≥3 commits nuevos (uno por HU) + `PROMPTS.md` actualizado. Preview C19: la IA cambia de rol — de copiloto a correctora.

### 4.1 Prometido vs demostrado (~10 min)

**EN PANTALLA: CHAT DE TEAMS — el formato de la ronda fijado en el chat.**

> **Tu instrucción:**
> *"Cerramos contra el plan. Todos al chat, o micro si prefieren, con este formato: 'Mi Sprint 1 prometía [X]. Demuestro [Y]. Me falta [Z] y lo cierro el [día].' Sin drama con lo que faltó — ajustar el alcance es práctica normal de un sprint. Ocultarlo no."*
>
> *(Leer 3-4 en voz alta. Registrar: quiénes no llegaron al mínimo innegociable — mensaje directo después de clase con el prompt del slice; y las decisiones interesantes que aparezcan — son semillas para los Q&A del Demo Day.)*

### 4.2 Entrega + push final (~5 min)

**EN PANTALLA: SLIDES — slide de Entrega con el checklist.**

> **Tu instrucción:**
> *"Antes de cerrar sesión: push. La entrega de hoy es el link al repo con al menos 3 commits nuevos — uno por HU, no un 'avances' gigante —, `PROMPTS.md` actualizado con los prompts y decisiones del día, y `SPRINTS.md` ajustado si su alcance real cambió. Peguen el link en el chat."*

### 4.3 Preview C19 + preguntas de cierre (~5 min)

> **Preguntas de Activación (chat o micro, 2-3 respuestas en voz alta):**
> 1. *"¿Qué decisión tomaste hoy que la IA no podía tomar por ti?"*
> *(Guía: se busca decisión + porqué — "botón y no tecla, por el rate limit"; "las canciones sí pueden repetirse, porque un setlist real repite temas". Quien no encuentra ninguna, dejó que la IA diseñara su app — anotarlo.)*
> 2. *"¿Qué le falta a tu Sprint 1 y cuándo lo cierras?"*
> *(Guía: respuesta con fecha. "Nada" también vale — se le audita en C19.)*

> **Tu cierre:**
> *"Lo que quedó pendiente se termina asíncrono ANTES de la Clase 19 — no es opcional: la próxima clase su código se audita, y una auditoría sobre una app incompleta no sirve de nada. En C19 la IA cambia de rol por tercera vez: deja de escribir con ustedes y pasa a revisar lo que escribieron. Copilot va a leer su proyecto completo y a buscarle los problemas — y las pruebas las van a ejecutar ustedes, no ella. Traigan el Sprint 1 cerrado."*
>
> *(Cierre mínimo — la clase termina aquí.)*
