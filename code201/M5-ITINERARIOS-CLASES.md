# Módulo 5 — Itinerarios de clase (flujo instructor / alumno / materiales)

> Documento interno (`dev/` está excluido del build). Consolidación de los itinerarios definidos durante el rediseño de M5 (2026-07-11): qué hace el instructor, qué hace el alumno y qué material está en juego en cada momento de las clases 17-20.

---

## El modelo del módulo (aplica a las 4 clases)

- **Los labs no traen código.** Dan el brief: contrato técnico, MVP, timeboxes, plantillas de prompts y checkpoints por resultado observable. El código sale del alumno + la IA.
- **La IA en 3 roles:** guía (C17, planificación), copiloto (C18, modo interactivo: la IA pregunta, el alumno decide), correctora (C19, auditoría con Copilot `@workspace`).
- **Herramientas:** chat web gratuito (planificación, modo interactivo, brainstorms) + GitHub Copilot Free en VS Code (~50 chats/mes; se reserva para donde ver el código importa: porciones puntuales en C18 y la auditoría de C19).
- **Regla de oro:** no pegues código que no puedas explicar. Se audita en el Q&A del Demo Day.
- **El instructor no dicta:** demo corta al abrir → rondas de mentoría durante los bloques → standup de cierre.
- **Roles de los materiales en clase:** las **slides** marcan el ritmo y sincronizan (checkpoints); el **lab** es el mapa del alumno; el **project/README** es su documento de consulta permanente (contrato + MVP); el **facilitator** es el kit privado del instructor (guiones de demo, prompts listos, lista maestra, señales de alerta, tabla de checkpoints).

---

## Clase 17 — Ideación y Planificación con IA

| ⏱️ | Momento | Instructor | Alumno |
|---|---|---|---|
| 0-15 | Apertura del módulo | Presenta M5, sprints, Demo Day y rúbrica desde el día 1. *Slides 1-4.* | Escucha. Leyó el README de clase antes. |
| 15-35 | El enunciado | Presenta MVP, contrato técnico y limitaciones; dudas de alcance. *Slides 5-7 + project proyectado.* | Lectura activa del enunciado (SIN HUs pre-redactadas). |
| 35-60 | Demo: planificar CON IA | Ciclo prompt → crítica → re-prompt en vivo: prompt malo a propósito → prompt maestro (4 partes) → crítica del output. *Guion y prompts en facilitator. Plan B: capturas.* | Observa. Única "clase magistral" del módulo. |
| 60-105 | Bloque 1: HUs | Rondas con la **lista maestra de 8 HUs** (facilitator) y señales de alerta (HUs gigantes, criterios que describen código, alcance inflado). | Deriva sus ~8 HUs del MVP con la IA, las audita con la tabla de checks del lab, registra en `PROMPTS.md`. |
| 105-130 | Bloque 2: sprints | Rondas: valida dependencias ("¿favoritos antes de tener búsqueda?"). | Distribuye HUs en Sprint 1 / Sprint 2 con la IA → `SPRINTS.md` (metas, dependencias, reto técnico). |
| 130-165 | Bloque 3: repo | Destraba Git / Live Server. | Repo público + estructura ESM + "hola mundo" de módulos (único código dado) + README con SUS HUs + push. |
| 165-180 | Standup de cierre | Verifica entregable de cada uno (30 seg c/u). Anuncia C18. | Muestra repo + reto técnico. |

**Entregable C17:** repo con esqueleto ESM corriendo + `HISTORIAS.md` (~8 HUs con criterios) + `SPRINTS.md` + `PROMPTS.md` iniciado (≥2 entradas: prompt + para qué + resultado).

---

## Clase 18 — Sprint 1 (construcción con copiloto)

| ⏱️ | Momento | Instructor | Alumno |
|---|---|---|---|
| 0-10 | Apertura + standup de arranque | Meta del día; ronda relámpago: qué HU ataca cada quien primero. *Slides 1-2.* | Repo + `SPRINTS.md` + Live Server abiertos. Declara su primera HU. |
| 10-30 | Briefing + slice en vivo | (1) Modela el **prompt de implementación con MODO interactivo** (la IA hace 2-3 preguntas estratégicas antes de codear); (2) **des-riesga en vivo**: primer `fetch` a la API en `api.js` con la IA, respondiendo sus preguntas en voz alta, prueba, JSON real, commit. *Prompt del slice en facilitator.* | Observa el patrón que replicará. Anota reglas de la API (botón, `limit=10`, `403` = esperar). |
| 30-90 | Bloque de trabajo 1 (60 min) | Rondas: errores técnicos frecuentes + auditorías de comprensión ("explícame esta línea"). | Primera HU de SU plan con el ritual: prompt interactivo → sus decisiones → porciones → probar contra criterios → commit → registrar. |
| 90-100 | Sync de mitad de sprint | Proyecta **checkpoint 1** (barra común: búsqueda viva aunque el orden sea propio). Micro-standup en parejas. Resuelve errores masivos (403). | Muestra avance al vecino, anota lo que falta. |
| 100-160 | Bloque de trabajo 2 (60 min) | Rondas; prioriza a los trabados en la HU1; audita a los avanzados. | Siguientes HUs: crear playlist, agregar canciones, persistencia. Contrato: `randomUUID`, inmutable, guardar → render. |
| 160-180 | Cierre: standup contra el plan | **Checkpoint 2** (playlist sobrevive al recargar). Standup: prometido vs demostrado + tarea asíncrona. Preview C19. | Push final; ajusta `SPRINTS.md` a la realidad. |

**Entregable C18:** mínimo innegociable = búsqueda con estados de UI + playlist persistida. Ideal = las 4 HUs del Sprint 1. ≥3 commits, `PROMPTS.md` al día. Lo pendiente se cierra asíncrono antes de C19.

---

## Clase 19 — IA como Corrector + Sprint 2

Orden deliberado: **el MVP se protege primero, la creatividad (HUs propias) cierra.** Sin validación cruzada entre compañeros: la reemplaza la auditoría con IA. Sin `REVIEW.md`: el triage vive en la acción (críticos se arreglan ya, mayores van al plan, menores se descartan).

| ⏱️ | Momento | Instructor | Alumno |
|---|---|---|---|
| 0-10 | Standup de arranque | Releva estado real del Sprint 1. Quien no cerró: su prioridad es MVP, sin HU propia hoy. | Declara su estado. |
| 10-30 | Demo: el corrector en vivo | En VS Code, Copilot **modo Ask** con `@workspace` sobre su código (o uno con defectos sembrados): review "solo hallazgos, sin soluciones" → plan de pruebas → ejecuta 2 en vivo (incluida datos corruptos) → verifica un hallazgo antes de aceptarlo ("los correctores también alucinan"). *Prompts en facilitator. Plan B: chat web pegando archivos.* | Observa: la IA audita, pero el veredicto sale del navegador. |
| 30-60 | Bloque de auditoría | Rondas de QA lead: que nadie acepte un review sin ejecutar pruebas ("corrompe tu localStorage delante de mí"). | Review con `@workspace` + plan de pruebas ejecutado a mano + triage: críticos se arreglan YA (ritual C18), mayores anotados, menores fuera. |
| 60-75 | Replanificación (10 min) | Rondas: "¿qué construyes en la próxima hora?" | `SPRINTS.md` v2: MVP pendiente + hallazgos mayores. |
| 75-150 | Bloque Sprint 2 (75 min) | Rondas con el ritual de C18; timebox duro a quien sigue puliendo el Sprint 1. | HU5-HU8: estadísticas/duración, orden inmutable, modal propio, robustez ante datos corruptos. |
| 150-160 | 2 HUs propias (10 min) | Coach de producto: valida tamaño y valor ("¿por qué esa?"). | Brainstorm en **chat web** → 2 HUs con criterios en `HISTORIAS.md` → ≥1 se implementa asíncrona antes del Demo Day. |
| 160-180 | Deploy + standup | Guía GitHub Pages; standup final; registra riesgos para C20. | Pages activado, flujo probado en la URL pública, push, plan asíncrono declarado. |

**Entregable C19:** críticos corregidos (la prueba de datos corruptos pasa) + MVP completo (o plan de cierre asíncrono) + 2 HUs propias definidas + deploy público funcionando + ≥4 commits.

---

## Clase 20 — Demo Day

| ⏱️ | Momento | Instructor | Alumno |
|---|---|---|---|
| 0-10 | Setup + sorteo | Proyector, orden sorteado, formato 5+3+2 y plan B. *Slides 1-3.* | Última verificación: deploy, playlist de demo, screenshots. |
| 10-130 | Presentaciones (9-10 × ~12 min) | Evalúa con rúbrica en vivo. Para el **Q&A** abre el repo del alumno y cruza con sus notas de C18-C19: "explícame esta función", "¿qué te dio la IA aquí y qué cambiaste?". | **Demo 5 min** (URL pública: buscar → agregar → stats → ordenar → eliminar con SU modal → recargar → HU propia). **Argumentación 3 min** (2 decisiones, ≥1 con IA). **Q&A 2 min** sobre SU código. |
| 130-160 | Colchón | Absorbe demoras. Si sobra: feedback de pares, Q&A extendido o demo cruzada informal. | — |
| 160-180 | Cierre del curso | Síntesis del viaje, feedback individual (1 fortaleza + 1 área para 301), ruta a Code 301. | Entrega final: repo + deploy + README + `PROMPTS.md` + `HISTORIAS.md`. |

**La pieza que sostiene el módulo:** el Q&A convierte la regla de oro en nota — una app impecable que el alumno no puede explicar se refleja en los 40 pts de Argumentación + Uso de IA.

---

## Resumen transversal: entregables por clase

| Clase | Entregable verificable al cierre |
|---|---|
| C17 | Repo ESM corriendo + `HISTORIAS.md` + `SPRINTS.md` + `PROMPTS.md` |
| C18 | Búsqueda con estados + playlist persistida (mínimo) + commits por HU |
| C19 | Críticos corregidos + MVP completo + 2 HUs propias definidas + deploy público |
| C20 | Presentación 5+3+2 + entrega final (repo, deploy, README, PROMPTS, HISTORIAS) |
