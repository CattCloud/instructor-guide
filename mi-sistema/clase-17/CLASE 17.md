# CLASE 17 — Ideación y Planificación con IA (Módulo 5)

> **Curso:** Code 201 · **Módulo 5** — Clase 1 de 4 (**ARRANQUE del M5 · Proyecto Final**)
> **Proyecto víctima:** **Mi Setlist** (repo nuevo **_mi-setlist_**, individual) — app que busca canciones en la iTunes Search API y las organiza en playlists persistidas. Acompaña C17-C20 y se presenta en el **Demo Day** (C20).
> **NO es lab calificado** (el calificado del M5 es el Proyecto Final completo, rúbrica 5×20 en C20 — pero se presenta desde HOY).
> **Dinámica nueva del módulo:** el lab NO trae código. El instructor no dicta: demo corta al abrir → rondas de mentoría → cierre verificable. La IA en rol de **guía** (C17); después copiloto (C18) y correctora (C19). *(En C17 el cierre es entrega por chat + preguntas — sin standup formal; ese formato se evalúa recién en C18/C19.)*
> **Hoy NO se codea el producto:** se planifica. Único código del día: el "hola mundo" ESM del repo.
> **Fuente de inputs:** **_mi-sistema/class-17/_** (README + lab + slides + **facilitator** + **project**) + **_code201/M5-ITINERARIOS-CLASES.md_**. *(Override M5: el facilitator SÍ es input — es el kit del instructor, con la demo guionada, la lista maestra de HUs y las señales de alerta.)*
> **Estado:** Capa 2+3 **completa (M1-M7)** — pendiente validación de Eric.
> **Duración:** 3h reales · itinerario definido a 180 min (los bloques de trabajo absorben el colchón en rondas) · **sin receso formal** — los bloques de trabajo autónomo (M4-M6) funcionan como pausas naturales: cada quien corta cuando su parte cierra.

---

## Idea fuerza de la clase

**Cambian las reglas del juego: el lab ya no da el código — da el enunciado, el contrato técnico y los tiempos; el código sale del alumno + la IA, con el instructor como mentor.** Hoy no se construye el producto: se aprende a **planificar con la IA** — estructurar prompts con las 4 partes (contexto, tarea, formato, restricciones), criticar el output contra el contrato y el MVP, y quedarse solo con lo que resiste la crítica. El alumno deriva sus ~8 historias de usuario del MVP, las distribuye en 2 sprints con dependencias justificadas, y deja el repo ESM corriendo. Tesis del día: **(1) la IA propone, tú decides** — su output es un borrador que se audita, no una respuesta que se acepta; **(2) los criterios de aceptación describen resultados observables en pantalla, nunca implementación.**

> **Enfoque de la clase:** taller-conducido (nuevo formato M5). Una sola exposición larga (la demo de planificación con IA, M3) y tres bloques de trabajo del alumno validados por checkpoint observable. No hay conceptos técnicos de código nuevos — el "concepto" del día es el método de trabajo con IA. Regla de oro del módulo, presentada hoy: **no pegues nada que no puedas explicar** (se convierte en nota en el Q&A del Demo Day).

---

## Tabla de tiempos (itinerario a 180 min)

| Momento    | Tema                                                                    | Parte del lab           | Tiempo  |
| ---------- | ----------------------------------------------------------------------- | ----------------------- | ------- |
| **M1**     | Apertura del módulo — cambio de reglas + Demo Day + rúbrica desde hoy    | —                       | ~15 min |
| **M2**     | El enunciado — Mi Setlist, MVP (10 puntos), contrato técnico, herramientas | — (project/README)      | ~20 min |
| **M3**     | **Demo: planificar CON la IA** (prompt malo → prompt maestro → crítica)  | — (guion en facilitator) | ~25 min |
| **M4**     | Bloque 1 — derivar y auditar las HUs con la IA                           | Parte 1 (CP ~105)       | ~45 min |
| **M5**     | Bloque 2 — plan de sprints con dependencias                              | Parte 2 (CP ~130)       | ~25 min |
| **M6**     | Bloque 3 — repo + estructura ESM + hola mundo + push                     | Parte 3 (CP ~165)       | ~35 min |
| **M7**     | Cierre — entrega por chat + preguntas de cierre (chat/micro) + preview C18 | Entrega                 | ~15 min |

> **Nota de tiempos:** sin receso formal (decisión de Eric, 2026-07-11) — los bloques de trabajo autónomo son pausa suficiente: cada quien corta cuando su parte cierra. Los checkpoints del lab quedan anclados a ~min 105 / 130 / 165 tal como están en el itinerario oficial.
>
> **Mapa de temas → momentos:** modelo del módulo + rúbrica (M1) · MVP + contrato técnico + reglas de la IA + herramientas chat web/Copilot (M2) · prompt de 4 partes + ciclo prompt→crítica→re-prompt (M3, demo) · HUs con criterios observables + auditoría + PROMPTS.md (M4) · sprints, dependencias y reto técnico (M5) · estructura ESM + hola mundo de módulos + README + push (M6) · standup (M7).
>
> **Concepto pedagógico clave (las 2 tesis):** (1) **la IA propone, tú decides** — el output es un borrador que se audita contra contrato + MVP; el rechazo con argumento vale más que la aceptación rápida. (2) **criterio de aceptación = resultado observable en pantalla** — nunca implementación ni nombres de funciones.

---

## Cadena Problema → Solución de la clase

```
M1: "llegan al proyecto final y el lab ya no trae el código — ¿de donde sale la app?"
     → nuevo modelo de trabajo: alumno construye + IA acompaña + instructor mentorea;
       Demo Day y rubrica presentados desde el dia 1 (sin sorpresas)
     ↓ (ok, construyo yo con la IA... pero ¿QUE construyo exactamente?)
M2: "no se puede dirigir a una IA sin saber que se esta construyendo"
     → el enunciado: Mi Setlist, las 10 funcionalidades del MVP, el contrato tecnico
       (que viaja en cada prompt) y las herramientas del modulo
     ↓ (ya se QUE construir... ¿le pido a la IA que me lo planifique y listo?)
M3: "pedirle a la IA sin contexto devuelve basura generica — demostrado en vivo"
     → demo del instructor: prompt malo a proposito (dolor visible: features inventadas,
       criterios vagos) → prompt maestro de 4 partes → critica y re-prompt del output
     ↓ (la unica exposicion larga quedo cerrada; ahora les toca a ellos)
M4: "el MVP son 10 funcionalidades — no son historias trabajables en clase"
     → derivar ~8 HUs propias con la IA y auditarlas (observable, tamaño, alcance,
       cobertura); registrar los prompts en PROMPTS.md
     ↓ (tengo 8 HUs... pero no caben todas juntas en una clase)
M5: "8 HUs sin orden no caben en 2 sprints de una sesion"
     → distribuir con dependencias justificadas (sin busqueda no hay canciones que
       agregar) + identificar el reto tecnico propio → SPRINTS.md
     ↓ (el plan existe... pero vive en un chat y en archivos sueltos)
M6: "un plan que vive en un chat no es un proyecto"
     → repo publico mi-setlist con estructura ESM del contrato + hola mundo de modulos
       corriendo en Live Server + HISTORIAS/SPRINTS/PROMPTS pusheados
     ↓ (el repo corre — en 48h esto deja de ser un plan)
M7: cierre: entrega del link por chat + preguntas de cierre (chat o micro) → preview del Sprint 1 (C18)
```

---

## MOMENTO 1 — Apertura del módulo: cambian las reglas

**Tiempo:** ~15 min

> **OBJETIVO:** El alumno entiende el nuevo modelo del módulo antes de tocar nada: el lab ya no trae código; él construye con la IA (guía → copiloto → correctora) y el instructor mentorea. Conoce el Demo Day (5+3+2) y la rúbrica (5×20) desde el día 1 — sin notas sorpresa. Queda plantada la regla de oro: **no pegues código que no puedas explicar** — en C20 se convierte en nota.

### 1.1 De M1-M4 a M5: qué cambia

**EN PANTALLA: SLIDES — Slides 1-2: portada de la Clase 17 + transición Módulo 4 → Módulo 5.**

> **Tu apertura:**
> *"Último módulo del curso. Recuento rápido de lo que ya tienen: layout con HTML y CSS, lógica en JavaScript, consumo de una API real con estados de carga y error, estado central con `render()`, persistencia con localStorage, y módulos ESM de la clase pasada. Esas son las piezas. En este módulo arman SU máquina."*

> **Tu explicación teórica precisa:**
> *"Hoy cambian las reglas del juego. En los módulos 1 al 4 el lab traía el código: ustedes seguían el paso a paso y al final todos teníamos la misma app. A partir de hoy el lab ya no trae el código. Trae tres cosas:"*
>
> - **La misión** — qué debe existir al final de cada clase
> - **El contrato técnico** — con qué stack y qué arquitectura se construye
> - **Los checkpoints** — cómo verificamos que llegaron
>
> *"El código sale de ustedes y de su asistente de IA. Y mi rol también cambia: dejo de dictar. Hago una demo corta al inicio de cada clase, y el resto del tiempo estoy rondando — destrabando, auditando, preguntando. Ustedes construyen. Yo mentoreo."*

> **Tu cierre:**
> *"Esto no es un experimento del curso — es como se trabaja hoy. Un desarrollador con asistente de IA no escribe menos software: decide más. Las preguntas de diseño siguen siendo humanas. Eso es lo que van a practicar estas cuatro clases."*

### 1.2 El arco del módulo: la IA en 3 roles

**EN PANTALLA: SLIDES — Slide de la secuencia C17-C20 con el rol de la IA en cada clase.**

> **Tu explicación teórica precisa:**
> *"El módulo son cuatro clases, y en cada una la IA cumple un rol distinto:"*
>
> - **C17 (hoy) — la IA como guía.** Planifican el proyecto CON ella: historias de usuario, sprints, repo. Hoy no se codea el producto.
> - **C18 — la IA como copiloto.** Sprint 1: la app empieza a existir. La IA teclea, ustedes deciden.
> - **C19 — la IA como correctora.** Audita SU código y diseña pruebas — que ustedes ejecutan. Después Sprint 2 y deploy.
> - **C20 — Demo Day.** La IA no presenta. Presentan ustedes.

> **¿Qué es un sprint?** Iteración de trabajo con una meta concreta y una fecha de cierre fija. El nombre viene del atletismo: carrera corta, a máxima intensidad, con línea de llegada visible. Aquí cada sprint dura una clase: Sprint 1 es la Clase 18, Sprint 2 es la Clase 19. La fecha no se mueve — se ajusta el alcance, no el calendario.

### 1.3 Demo Day y rúbrica desde hoy

**EN PANTALLA: NAVEGADOR — rúbrica del proyecto en `class-17/project/` (tabla de 5 criterios), proyectada.**

> **Tu explicación teórica precisa:**
> *"El proyecto se evalúa en el Demo Day, la Clase 20. Diez minutos cada uno: cinco de demo en vivo sobre su URL pública, tres argumentando dos decisiones técnicas, dos de preguntas mías sobre SU código. Y la rúbrica la conocen desde hoy — no hay notas sorpresa:"*
>
> | Criterio | Pts |
> |---|---|
> | Funcionalidades del MVP | 20 |
> | Calidad técnica (contrato respetado) | 20 |
> | Uso responsable de IA + HU propia | 20 |
> | Presentación en vivo | 20 |
> | Argumentación técnica + Q&A | 20 |
>
> *"Aprobación mínima: 70 de 100. Y este proyecto pesa el 30% de la nota final del curso. Es la entrega más importante que van a hacer."*

> **Tu explicación teórica precisa — la regla de oro:**
> *"Una sola regla gobierna todo el módulo: no peguen código que no puedan explicar. No es una sugerencia — es la regla que el Demo Day convierte en nota. En el Q&A yo abro SU repo y pregunto por fragmentos concretos. Fíjense en la rúbrica: argumentación más uso de IA suman 40 puntos. Casi la mitad de la nota no mide si la app funciona — mide si ustedes entienden lo que entregaron."*

> **Pregunta de activación:**
> *"Escenario: un compañero entrega una app impecable, generada casi completa por la IA en una tarde. En el Q&A le pregunto cómo funciona su función de guardar y no puede explicarla. ¿Cuánto saca?"*
> *(Respuesta esperada: MVP y calidad técnica pueden estar bien — pero argumentación + uso de IA son 40 pts que se caen. La app funciona; la nota mide comprensión. Rematar: la regla de oro no es un consejo moral, es estrategia de nota.)*

> **Cierre del Momento + puente al siguiente:**
> *"Ya saben cómo se juega y cómo se califica. Falta lo más importante: qué van a construir exactamente. Vamos al enunciado."*

---

## MOMENTO 2 — El enunciado: Mi Setlist, MVP y contrato técnico

**Tiempo:** ~20 min

> **OBJETIVO:** El alumno sabe QUÉ va a construir y bajo qué reglas: Mi Setlist (buscador iTunes + playlists persistidas), las 10 funcionalidades del MVP, el contrato técnico (stack, arquitectura, prohibiciones — el bloque que viaja en cada prompt) y las herramientas del módulo (chat web + Copilot Free con presupuesto). Dudas de alcance resueltas ANTES de trabajar. Nadie pregunta "¿qué vamos a construir?" después de este momento.

### 2.1 Mi Setlist y su MVP

**EN PANTALLA: NAVEGADOR — el enunciado oficial (`class-17/project/README.md`) proyectado: Objetivo del Proyecto + Funcionalidad Esperada (MVP).**

> **Tu apertura:**
> *"El proyecto se llama Mi Setlist. Un setlist es la lista de canciones que una banda toca en un show, en ese orden. La app hace dos cosas: busca canciones en el catálogo real de iTunes, y las organiza en playlists propias que sobreviven al recargar la página. Sin cuenta, sin backend — todo vive en su navegador."*

> **¿Qué es un MVP?** Minimum Viable Product: la versión más simple del producto que cumple el valor central prometido. Ni una feature más.

> **Tu explicación teórica precisa — lectura del MVP:**
> *"El enunciado define 10 funcionalidades. Las leemos juntos, porque este documento es su fuente de verdad las próximas cuatro clases. Fíjense en algo mientras las recorremos: ninguna es nueva para ustedes."*
>
> - **Búsqueda (puntos 1-2):** buscar en la API mostrando carátula, nombre, artista y duración; comunicar carga, error y sin-resultados. — *Es el patrón de la Pokédex (C10-C12) sobre una API nueva.*
> - **Playlists (puntos 3-6):** crear con nombre propio, agregar canciones desde los resultados, ver el contenido con fecha de agregado, quitar y eliminar con confirmación de modal propio. — *Es el CRUD del Gestor de Plantillas (C13-C14) con el modal de C16.*
> - **Datos derivados (puntos 7-9):** duración total legible ("1 h 23 min"), estadísticas (cantidad, género top, artista top), ordenar (recientes/antiguas, alfabético). — *Datos derivados de C14 + el `.sort()` de C16.*
> - **Persistencia (punto 10):** todo se guarda y se restaura al recargar; si los datos están corruptos, la app no muere — ofrece "Empezar de cero". — *localStorage + blindaje de C15.*
>
> *"La dificultad del módulo no está en lo técnico. Está en que esta vez lo arman ustedes, sin paso a paso."*

> **Tu explicación teórica precisa — el aviso clave:**
> *"Un detalle que cambia todo: este proyecto NO trae historias de usuario pre-redactadas. En los módulos anteriores las HU venían escritas en el lab. Hoy las derivan ustedes, de estas 10 funcionalidades, trabajando con la IA. Ese es el primer entregable del módulo — y es exactamente lo que hacemos en el primer bloque de hoy."*

> **Tu cierre — limitaciones conocidas:**
> *"Cuatro limitaciones que son parte del diseño, no defectos: la API es de solo lectura — consultan el catálogo, no publican nada. Las carátulas son de Apple — su app las consume, no las almacena. Sin backend ni cuentas — las playlists viven solo en su navegador. Y la cuarta: la IA se equivoca con confianza. Todo lo que les dé se valida contra el contrato y contra lo que ven en pantalla."*

### 2.2 El contrato técnico

**EN PANTALLA: NAVEGADOR — sección Contrato Técnico del enunciado + estructura de archivos.**

> **¿Qué es el contrato técnico?** Las reglas fijas de stack y arquitectura del proyecto. No se negocian — ni con la IA.

> **Tu explicación teórica precisa:**
> *"El contrato define con qué se construye:"*
>
> - **Stack:** HTML5 semántico + CSS propio o Tailwind + **JavaScript vanilla con módulos ESM**
> - **Arquitectura:** estado central plano + "cambias el estado → llamas `render()`" · CRUD **inmutable** (`.filter`/`.map`/spread) · delegación de eventos · ids con `crypto.randomUUID()`
> - **Persistencia:** `localStorage` + `JSON.stringify`/`parse` en `try/catch` · fechas rehidratadas al cargar
> - **UX:** confirmaciones con modal propio — nada de `confirm()` nativo · estados vacíos amigables
> - **API:** iTunes Search, solo lectura, sin key · rate limit ~20 solicitudes/minuto
> - **Prohibido:** frameworks, librerías de estado, backend, pegar código de la IA sin registrarlo
>
> *"Léanlo de nuevo con calma. Nada de esto es nuevo: estado más `render()` es C13, inmutabilidad es C14, el blindaje con `try/catch` es C15, ESM es C16, fetch con estados es el Módulo 3. El contrato es el resumen técnico del curso. Lo que cambia es su función: ahora es el contexto que viaja en CADA prompt que le manden a la IA. Sin contrato, la IA les propone React. Con contrato, propone soluciones que pueden usar. Punto."*

> **Pregunta de activación:**
> *"¿Por qué el contrato prohíbe `confirm()`? Ustedes ya trabajaron con esto."*
> *(Respuesta esperada: en C16 construyeron el modal propio — `confirm()` no se puede estilar, corta el flujo de la app y no es reutilizable. Señal adicional para el instructor: quien no sabe responder probablemente copió el contrato sin leerlo — señal de alerta del facilitator.)*

### 2.3 Las reglas de la IA + herramientas del módulo

**EN PANTALLA: NAVEGADOR — sección "La IA como copiloto (reglas del juego)" del enunciado.**

> **Tu explicación teórica precisa:**
> *"La IA es parte oficial del proyecto. Cuatro reglas:"*
>
> - **Uno — la regla de oro:** no peguen código que no puedan explicar. Ya saben cuánto vale en la rúbrica.
> - **Dos — los prompts clave quedan registrados en `PROMPTS.md`:** qué pidieron, para qué, y qué hicieron con el resultado. Es parte de la entrega final.
> - **Tres — el contrato viaja en sus prompts.** Sin contexto, la IA da soluciones que no pueden usar.
> - **Cuatro — la IA propone, ustedes deciden.** Su output es un borrador para criticar, no una respuesta para copiar.

> **¿Qué es `PROMPTS.md`?** La bitácora del trabajo con la IA: prompt, para qué, resultado. No se mide por cuántos prompts tiene — se mide por si otro desarrollador entendería cómo llegaron a sus decisiones.

> **Tu explicación teórica precisa — las dos herramientas:**
> *"Van a usar dos herramientas, y la división importa:"*
>
> - **Chat de IA gratuito (web):** planificación, brainstorms, modo interactivo. Es lo único que usamos HOY.
> - **GitHub Copilot Free en VS Code:** su plan gratuito da ~50 mensajes de chat al mes. Se reserva para donde ver el código del proyecto importa — porciones puntuales en C18 y la auditoría de C19. Hoy solo verifiquen que la extensión está instalada.
>
> *"Cincuenta mensajes al mes suena a poco. Es a propósito: cada request cuesta, igual que en un equipo real donde las herramientas tienen presupuesto. Pidan con intención."*

> **Cierre del Momento + puente al siguiente:**
> *"Ya saben qué construir, bajo qué reglas y con qué herramientas. Ahora la pregunta del millón — y quiero respuestas en el chat: si ahora mismo le pido a la IA 'hazme las historias de usuario de mi app de música', ¿qué me va a devolver? ¿Qué le faltó a mi pedido?"*
> *(Tomar 2-3 respuestas sin corregir. Después:)*
> *"No les voy a dar la respuesta con teoría. Lo vamos a comprobar en vivo: le voy a pedir mal a propósito, delante de ustedes. Miren lo que pasa."*

---

## MOMENTO 3 — Demo: planificar CON la IA en vivo

**Tiempo:** ~25 min

> **OBJETIVO:** El alumno ve el estándar de trabajo de las próximas 4 clases modelado en vivo: el ciclo **prompt → crítica → re-prompt**. Siente el dolor primero (prompt vago → output genérico con features inventadas), ve la corrección (prompt maestro de 4 partes: contexto + tarea + formato + restricciones) y ve que aun el buen output se critica (encontrar el defecto y re-promptear). Es la única "clase magistral" del módulo. Al cerrar, puede nombrar las 4 partes del prompt.

### 3.1 Ronda 1 — el prompt malo a propósito

**EN PANTALLA: NAVEGADOR (CHAT DE IA) — sesión nueva, chat en blanco, proyectado a pantalla completa.**

> **Tu apertura:**
> *"Les acabo de preguntar qué devuelve un pedido vago. No les voy a responder yo — le voy a pedir mal a propósito, y el resultado habla solo. Miren lo que pasa."*

> **Demo en vivo en la herramienta — Ronda 1:**
> 1. Escribir el prompt malo, literal y sin más:
> ```text
> hazme las historias de usuario de mi app de música
> ```
> 2. Enviar. Dejar que el output se genere completo, sin comentarlo mientras aparece.
> 3. Leer 2-3 historias en voz alta. Señalar en pantalla lo que trae: login de usuarios, compartir en redes, recomendaciones, criterios tipo "la búsqueda debe ser fácil e intuitiva".
> 4. Pregunta al grupo (respuestas en el chat): *"¿Qué inventó que NO está en el MVP? Búsquenlo en el enunciado — lo tienen abierto."*
> 5. Recoger 2-3 respuestas. Confirmar cada hallazgo señalando el MVP: ni login, ni social, ni recomendaciones existen en los 10 puntos.

> **Tu explicación teórica precisa:**
> *"Fíjense qué hizo. No adivinó mal por mala suerte — rellenó los huecos con lo más probable estadísticamente: la app de música promedio de internet. No la suya. Sin contexto, la IA no puede saber que su app no tiene backend, ni cuentas, ni redes. Un practicante brillante sin briefing les entrega lo mismo: algo genérico que hay que tirar. La IA es ese practicante — velocísima, pero solo tan buena como el briefing que le den."*

### 3.2 Ronda 2 — el prompt maestro (las 4 partes)

**EN PANTALLA: NAVEGADOR (CHAT DE IA) — mismo chat; el prompt maestro pegado en grande antes de enviarlo.**

> **¿Qué es un prompt estructurado?** Un pedido con 4 partes: contexto, tarea, formato y restricciones. Sin las 4, la IA inventa.

> **Tu explicación teórica precisa:**
> *"Ahora el mismo pedido, bien hecho. Cuatro partes, y las voy nombrando mientras las pego:"*
>
> - **CONTEXTO** — quién soy, qué construyo, con qué reglas: el contrato técnico + los 10 puntos del MVP
> - **TAREA** — qué le pido exactamente: descomponer el MVP en ~8 historias de usuario
> - **FORMATO** — cómo quiero la respuesta: "Como… quiero… para…" + 3-5 criterios de aceptación
> - **RESTRICCIONES** — qué NO puede hacer: criterios observables en pantalla, nada fuera del MVP, sin librerías

> **Demo en vivo en la herramienta — Ronda 2:**
> 1. Pegar el prompt maestro (la plantilla que el alumno replica en el lab), nombrando cada parte en voz alta:
> ```text
> CONTEXTO: Estoy construyendo "Mi Setlist", una app web con JavaScript
> vanilla y módulos ESM (sin frameworks, sin backend, sin librerías de
> estado). Arquitectura: estado central + render(), CRUD inmutable,
> localStorage con try/catch, API de iTunes solo lectura. Soy una sola
> persona y tengo 2 sprints de una clase cada uno.
> El MVP tiene estas 10 funcionalidades: [pegar la lista del enunciado]
>
> TAREA: Descompón este MVP en unas 8 historias de usuario.
>
> FORMATO: Cada historia con "Como... quiero... para..." + 3 a 5
> criterios de aceptación.
>
> RESTRICCIONES: Los criterios describen resultados observables en
> pantalla, nunca código ni nombres de funciones. No agregues nada
> que no esté en el MVP. No sugieras librerías externas.
> ```
> 2. Enviar. Mientras genera: *"Misma IA. Mismo pedido de fondo. Otro briefing."*
> 3. Comparar contra la Ronda 1 en voz alta: historias ceñidas al MVP, formato correcto, sin features inventadas.
> 4. Verificación: pedir en el chat que nombren las 4 partes sin mirar la slide.

### 3.3 Ronda 3 — la crítica en vivo

**EN PANTALLA: NAVEGADOR (CHAT DE IA) — el output de la Ronda 2 en pantalla, para auditarlo línea por línea.**

> **Tu apertura:**
> *"¿Este output ya está listo para copiar a HISTORIAS.md? No. Y este es el punto más importante de la demo: aun el buen output se audita. La IA se equivoca con confianza — con el prompt bueno también."*

> **Demo en vivo en la herramienta — Ronda 3:**
> 1. Recorrer el output buscando defectos en voz alta. Encontrar al menos uno (casi siempre aparecen):
>    - Un **criterio que describe implementación**: "la búsqueda usa fetch con async/await"
>    - Una **HU gigante**: "estadísticas" que mezcla duración total + género top + orden en una sola historia
> 2. Corregir el primero con re-prompt:
> ```text
> El criterio "la búsqueda usa fetch con async/await" describe
> implementación. Reescríbelo como algo observable en pantalla.
> ```
> 3. Corregir el segundo con re-prompt:
> ```text
> La HU de estadísticas mezcla duración total, género top y orden.
> Es muy grande para una fracción de clase. Divídela.
> ```
> 4. Mostrar que la corrección a mano también vale: *"Si el defecto es chico, lo edito yo y listo. Re-promptear no es obligatorio — decidir sí."*

> **Pregunta de calibración (COMPROBACIÓN de los slides):**
> *"¿Cuál es un buen criterio de aceptación para 'buscar canciones'? A: la búsqueda usa fetch con async/await y try/catch. B: la app permite buscar canciones fácilmente. C: al buscar 'Soda Stereo' aparecen resultados con carátula, nombre y artista. D: el input tiene un addEventListener de tipo submit."*
> *(Respuesta: C. A y D describen implementación — si mañana cambia el código, la historia sigue válida. B no es verificable: ¿cómo compruebas "fácil"? C lo puede probar cualquiera en pantalla. Rematar: los criterios describen lo que se VE, no lo que se ESCRIBE.)*

> **Plan B (si la herramienta de IA falla en vivo):**
> Capturas de las tres rondas preparadas de antemano — narrarlas en el mismo orden. El punto pedagógico se sostiene igual.

> **Cierre del Momento + puente al siguiente:**
> *"Eso que acaban de ver — prompt, crítica, re-prompt — es el ciclo. No es 'pedir hasta que salga': es pedir con briefing, auditar contra el contrato y el MVP, y quedarse solo con lo que resiste. Ahora les toca: van a derivar SUS historias de este mismo MVP. Y les adelanto la meta del bloque, que no es la que creen."*

---

## MOMENTO 4 — Bloque 1: derivar y auditar las HUs (lab Parte 1)

**Tiempo:** ~45 min (checkpoint del lab ~min 105)

> **OBJETIVO:** El alumno deriva sus ~8 HUs (±1) del MVP con la IA usando el prompt de 4 partes, las **audita** con la tabla de checks del lab (¿resultado observable? ¿tamaño razonable? ¿dentro del MVP? ¿cobertura completa?), re-promptea o corrige a mano lo que falla, y registra sus prompts en `PROMPTS.md`. El instructor rondea con la **lista maestra de 8 HUs** (facilitator — vara de validación, NO se publica) y las señales de alerta. Meta declarada: rechazarle algo a la IA y saber por qué.

### 4.1 Briefing de transición al lab (~5 min)

**EN PANTALLA: NAVEGADOR — Lab 17, Parte 1 ("Descompón el MVP en historias de usuario"), proyectado.**

> **Tu briefing (la meta que no es la que creen):**
> *"Ahora ustedes. Y ojo con la meta del bloque: NO es tener historias rápido. Es rechazarle algo a la IA y saber por qué. Ese rechazo — documentado, con argumento — vale más que diez historias aceptadas sin leer. Si en veinte minutos me dicen 'ya terminé', lo primero que voy a hacer es pedirles que me expliquen una historia."*

> **Tu instrucción — el mecanismo del bloque:**
> *"El lab tiene el paso a paso. Tres cosas para hacer en estos 45 minutos:"*
>
> - **Uno:** armar su primer prompt con las 4 partes — la plantilla está en el lab, el contrato en el enunciado
> - **Dos:** auditar CADA historia con la tabla de checks: ¿resultado observable? ¿tamaño razonable? ¿dentro del MVP? ¿cobertura completa? Lo que falla se corrige a mano o se re-promptea
> - **Tres:** registrar los prompts en `PROMPTS.md` — hoy salen con ≥2 entradas; es entregable y parte de la rúbrica
>
> *"Las ocho historias van a `HISTORIAS.md`. Ocho, más menos una. Si la IA les da quince, no es más completo: es alcance inflado."*

### 4.2 Trabajo autónomo + rondas del instructor (~35 min)

**EN PANTALLA: (del alumno) chat de IA + VS Code con `HISTORIAS.md` y `PROMPTS.md`. (del instructor) nada proyectado — rondas de piso.**

> **Tiempo del alumno (anunciarlo al soltar el bloque):** *"35 minutos solos con su IA. Sugerencia de reparto: ~15 en derivar las historias, ~15 en auditarlas con la tabla, ~5 en registrar los prompts. Yo estoy rondando — levanten la mano o escriban en el chat si se traban."*

> **Vara de validación en las rondas — la lista maestra (facilitator, NO se publica):** el conjunto de HUs del alumno debe cubrir el MVP; no tiene que coincidir palabra por palabra con la lista de referencia (8 HUs: búsqueda con datos · estados de UI · crear playlist · agregar/ver/persistir · quitar y eliminar con modal · duración + stats · ordenar · restaurar y resistir corruptos). **Válido:** fusionar búsqueda+estados, partir stats en dos. **Inválido:** playlists sin búsqueda previa, persistencia "para el final", features fuera del MVP como historias base.

> **Señales de alerta y qué hacer (rondas):**
>
> | Señal | Qué está pasando | Intervención |
> |---|---|---|
> | 12+ historias | Aceptó el output inflado | *"¿Cuáles de estas caben en 2 clases? Fusiona o recorta."* |
> | Criterios tipo "usa fetch con try/catch" | Confunde criterio con implementación | Volver a la regla: ¿se VE en pantalla? |
> | HU "compartir en redes" / "login" | La IA inventó alcance y no lo filtró | Señalar el MVP: *"¿en qué punto está eso?"* |
> | HUs idénticas al output crudo (texto y orden) | Consume sin criticar | Auditar 2 HUs juntos con la tabla de checks |
> | `PROMPTS.md` vacío al min 100 | Usa la IA sin registrar | Recordar: es entregable y rúbrica |
> | Parálisis: no sabe qué pedirle | Nunca conversó con una IA | Sentarse 3 min y escribir el primer prompt juntos con la plantilla |
>
> **Para los que terminan rápido:** auditoría de 2 HUs contra la lista maestra (suele faltar cobertura del MVP — el punto 10 de datos corruptos casi nadie lo cubre). Si de verdad cerraron: logros del lab (🟢 wireframe ASCII con la IA · 🟡 fetch al endpoint desde consola · 🔴 semillas para las HUs propias de C19).

### 4.3 Checkpoint Parte 1 (~5 min)

**EN PANTALLA: SLIDES — "CHECKPOINT Parte 1: Tus historias de usuario" proyectado como barra común del grupo.**

> **Checkpoint obligatorio (~min 105):**
> `HISTORIAS.md` con ~8 HUs (±1), cada una con 3-5 criterios **observables**; las 10 funcionalidades del MVP cubiertas; `PROMPTS.md` con ≥2 entradas (prompt + para qué + resultado).
> *(Si un alumno no cumple: sentarse y criticar UNA historia juntos con la tabla de checks — no darle las historias. Un alumno con 6 HUs propias bien criticadas está mejor que uno con 8 copiadas.)*

> **Cierre del Momento + puente al siguiente:**
> *"Ya tienen sus historias — criticadas, no copiadas. Problema nuevo: son ocho, y el Sprint 1 es UNA clase. No entran todas, y el orden no es libre: ¿pueden armar playlists antes de tener búsqueda? ¿De dónde salen las canciones? Eso es lo que resolvemos ahora: el plan."*

---

## MOMENTO 5 — Bloque 2: plan de sprints (lab Parte 2)

**Tiempo:** ~25 min (checkpoint del lab ~min 130)

> **OBJETIVO:** El alumno pide a la IA una propuesta de distribución de sus 8 HUs en Sprint 1 / Sprint 2, la audita con las 3 preguntas del lab (¿el Sprint 1 termina en algo demostrable? ¿las dependencias son reales? ¿mandó todo lo difícil al Sprint 2?) y decide él — la defenderá en el checkpoint. Escribe `SPRINTS.md`: meta de 1 línea por sprint, ~4 HUs por sprint, ≥1 dependencia documentada y su reto técnico identificado.

### 5.1 Briefing corto (~4 min)

**EN PANTALLA: NAVEGADOR — Lab 17, Parte 2 ("Planifica tus sprints"), proyectado.**

> **Tu briefing:**
> *"Veinticinco minutos. El mismo chat de antes ya tiene su contexto — no abran uno nuevo. Le pegan sus 8 historias finales y le piden la distribución en Sprint 1 y Sprint 2, con tres cosas: la justificación de cada asignación, las dependencias — qué necesitan tener ANTES de qué — y cuál historia es la más difícil técnicamente. Y después la auditan con tres preguntas:"*
>
> - *"¿El Sprint 1 termina en algo **demostrable**, o es puro setup?"*
> - *"¿Las dependencias son reales? Sin búsqueda no hay canciones que agregar a nada."*
> - *"¿La IA mandó todo lo difícil al Sprint 2? Si su reto revienta en la Clase 19, ya no hay margen."*
>
> *"La decisión final es de ustedes — la van a defender en el checkpoint. Todo a `SPRINTS.md`: meta de una línea por sprint, las historias con su porqué, las dependencias, y su reto técnico principal. Esa última parte es personal: la historia que más los intimida y por qué."*

> **Tu instrucción — ejemplo corto de `SPRINTS.md` (proyectar; los nombres de HU son ilustrativos — cada quien usa los SUYOS):**
>
> ```markdown
> ## Sprint 1 (Clase 18) — Meta: busco una canción y la agrego a una playlist que sobrevive al recargar
> - HU1: Buscar canciones en la API (va primero: casi todo depende de tener resultados)
> - HU2: Estados de carga, error y sin-resultados (pegada a la HU1, es la misma pantalla)
> - HU3: Crear playlist con nombre propio
> - HU4: Agregar canciones a la playlist y persistirlas
>
> ## Sprint 2 (Clase 19) — Meta: la playlist se gestiona completa: quitar, ordenar, stats y robustez
> - HU5: Quitar canciones y eliminar playlists con modal propio
> - HU6: Duración total y estadísticas
> - HU7: Ordenar la playlist
> - HU8: Restaurar al recargar y resistir datos corruptos
>
> ## Dependencias detectadas
> - Para HU4 (agregar canciones) necesito antes HU1 (búsqueda) porque sin resultados no hay qué agregar.
>
> ## Mi reto técnico principal
> La HU que más me intimida es la HU8 porque nunca he validado un JSON corrupto a mano.
> ```
>
> *"Fíjense en dos cosas del ejemplo. La meta no dice 'configurar' ni 'avanzar' — dice qué se VE funcionando al final. Y cada historia del Sprint 1 tiene un porqué de orden. Si su `SPRINTS.md` no puede responder esas dos cosas, no está listo."*

### 5.2 Trabajo autónomo + rondas del instructor (~16 min)

> **Tiempo del alumno (anunciarlo):** *"16 minutos: ~5 en pedir y leer la propuesta de la IA, ~5 en auditarla con las tres preguntas, ~6 en escribir su `SPRINTS.md`. La decisión es de ustedes, no de ella."*

> **Preguntas guía en las rondas (no dar el plan — preguntarlo):**
>
> - *"¿Tu Sprint 1 termina en algo que se puede mostrar en pantalla?"*
> - *"¿Qué necesitas ANTES de poder hacer X?"* — la pregunta que destraba a cualquiera
> - *"¿Por qué esa historia va primero?"* — si no puede responder, heredó el plan de la IA sin decidir
>
> **Señales de alerta:** playlists en Sprint 1 sin búsqueda previa (¿de dónde salen las canciones?) · todo lo difícil apilado en Sprint 2 · metas de sprint que describen tareas ("configurar cosas") en vez de resultados demostrables.

### 5.3 Checkpoint Parte 2 (~5 min)

**EN PANTALLA: SLIDES — "CHECKPOINT Parte 2: Plan de sprints" proyectado.**

> **Checkpoint obligatorio (~min 130):**
> `SPRINTS.md` completo: meta de 1 línea por sprint · 4 HUs (±1) por sprint · ≥1 dependencia documentada · reto técnico personal identificado.
> *(Si no cumple: pregunta guía de dependencias en ronda individual — no entregar la distribución hecha.)*

> **Cierre del Momento + puente al siguiente:**
> *"Ya saben qué construyen en cada sprint y en qué orden. Pero ahora mismo ese plan vive en un chat y en archivos sueltos de su máquina. Un plan que vive en un chat no es un proyecto. Lo que falta es la casa: el repositorio, con la estructura del contrato, corriendo. Vamos."*

---

## MOMENTO 6 — Bloque 3: repo con estructura ESM (lab Parte 3)

**Tiempo:** ~35 min (checkpoint del lab ~min 165)

> **OBJETIVO:** El plan se vuelve proyecto: repo público `mi-setlist` con la estructura de archivos del contrato (`js/` con `api/state/storage/ui/app` + `models/`), el **"hola mundo" de módulos** corriendo (único código que da el curso hoy — valida que el entorno corre ESM con Live Server), README con SUS HUs, y `HISTORIAS.md` + `SPRINTS.md` + `PROMPTS.md` pusheados. Reactiva C16: ESM no corre con `file://`.

### 6.1 Briefing corto (~5 min)

**EN PANTALLA: NAVEGADOR — Lab 17, Parte 3 ("Configura tu repositorio") + la estructura de archivos del contrato.**

> **Tu briefing:**
> *"Última parte, 35 minutos, y aquí no hay IA — esto es Git y estructura, lo saben hacer desde el Módulo 1. Tres pasos: repo público `mi-setlist` en GitHub, la estructura de archivos del contrato — los `.js` vacíos por ahora — y el único código que el curso les da hoy: el hola mundo de módulos. Tres líneas para validar que su entorno corre ESM antes de que el Sprint 1 dependa de eso."*

> **Tu instrucción — el hola mundo ESM (del lab, literal):**
>
> ```html
> <!-- index.html (dentro de <body>) -->
> <h1>🎵 Mi Setlist</h1>
> <p id="app"></p>
> <script type="module" src="js/app.js"></script>
> ```
> ```javascript
> // js/state.js
> export const mensaje = 'Módulos ESM funcionando ✅';
>
> // js/app.js
> import { mensaje } from './state.js';
> document.querySelector('#app').textContent = mensaje;
> ```
>
> *"Y el clásico de la Clase 16, antes de que pase: ESM no corre abriendo el archivo con doble clic. `file://` no ejecuta módulos. Live Server. Siempre."*
>
> *"Cierran con el README — descripción de una línea, stack, SUS historias, cómo correr local — y el push: `HISTORIAS.md`, `SPRINTS.md` y `PROMPTS.md` tienen que quedar visibles en GitHub."*

### 6.2 Trabajo autónomo + rondas del instructor (~25 min)

> **Tiempo del alumno (anunciarlo):** *"25 minutos: ~8 en el repo y la estructura, ~7 en el hola mundo ESM corriendo, ~10 en README + push. El que termine antes, me avisa: le tengo tarea."*

> **Errores esperables en las rondas (todos vistos en C16 — destrabar, no re-enseñar):**
>
> | Síntoma | Causa | Salida |
> |---|---|---|
> | Error CORS o el import falla | Abrió con `file://` | Live Server |
> | "Failed to resolve module specifier" | Import sin `./` o sin `.js` | Rutas relativas completas |
> | `git push` rechazado / pide credenciales | Git local sin conectar a GitHub | `git config` + verificar sesión |
>
> **Para los que terminan rápido:** los logros del lab (🟢 wireframe ASCII · 🟡 explorar el JSON de la API desde consola — ventaja directa para C18 · 🔴 semillas de HUs propias para C19).

### 6.3 Checkpoint Parte 3 (~5 min)

**EN PANTALLA: SLIDES — "CHECKPOINT Parte 3: Repositorio listo" proyectado.**

> **Checkpoint obligatorio (~min 165):**
> El repo en GitHub muestra la estructura completa + los 3 `.md` del plan; al abrir con Live Server se ve **"Módulos ESM funcionando ✅"** sin errores en consola.
> **Commit sugerido:** `chore: setup inicial con estructura ESM y plan del proyecto`

> **Cierre del Momento + puente al siguiente:**
> *"El plan tiene casa: repo público, arquitectura del contrato, módulos corriendo. Eso es todo lo que el Sprint 1 necesita para arrancar. Cerramos: me dejan su link en el chat y les hago dos preguntas."*

---

## MOMENTO 7 — Cierre: entrega + preguntas

**Tiempo:** ~15 min

> **OBJETIVO:** Cada alumno deja el link de su repo en el chat (entrega verificable, sin ronda de pantallas). El instructor lanza las dos preguntas de cierre y recoge respuestas por chat o con micro abierto; registra a quiénes les faltó cerrar el checkpoint (pre-work obligatorio antes de C18) y deja el puente: en 48 horas esto deja de ser un plan — C18 es Sprint 1.

### 7.1 Entrega por chat (~5 min)

**EN PANTALLA: SLIDES — slide de Entrega, con el checklist visible.**

> **Tu instrucción:**
> *"Todos, ahora: peguen en el chat el link a su repositorio. Reviso que estén los tres archivos — `HISTORIAS.md`, `SPRINTS.md`, `PROMPTS.md` — visibles en GitHub. El que no llegó al checkpoint del repo lo dice ahí mismo, sin drama: queda como cierre asíncrono, y tiene que estar resuelto ANTES de la Clase 18 — el Sprint 1 arranca sobre ese repo."*
>
> *(Mientras caen los links, abrir 2-3 al azar y verificar los archivos en voz alta. Registrar quiénes quedan con pre-work pendiente.)*

### 7.2 Preguntas de cierre — chat o micro (~8 min)

> **Preguntas de Activación (las dos del cierre de los slides — responden por chat o prendiendo el micro; recoger 3-4 respuestas en voz alta):**
> 1. *"¿Qué le corregiste hoy al output de la IA? Concreto: qué te dio, qué estaba mal, qué hiciste."*
> *(Guía: la respuesta valiosa nombra el defecto Y el porqué — "me dio un criterio con fetch adentro y lo reescribí como resultado". Quien no corrigió nada hoy consumió sin criticar — anotarlo: es foco de rondas en C18.)*
> 2. *"¿Cuál es tu reto técnico y cómo lo vas a atacar?"*
> *(Guía: sin respuesta única — el objetivo es que el plan de ataque exista: "lo pongo primero en el sprint", "le pido a la IA que me explique el concepto antes de codear". No hay respuesta mala.)*

### 7.3 Preview C18 (~2 min)

> **Tu cierre:**
> *"En 48 horas esto deja de ser un plan. La Clase 18 es Sprint 1: la búsqueda en la API de iTunes funcionando, con ustedes al teclado y la IA de copiloto — con una regla nueva que les va a gustar: la IA no puede codear sin preguntarles primero. Traigan el repo listo y las historias frescas."*
>
> *(Cierre mínimo — la clase termina aquí, sin bloque de despedida elaborado.)*
