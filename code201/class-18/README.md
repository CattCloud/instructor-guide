> **Módulo 5:** Clase 2 de 4

# Clase 18: Sprint 1 — Construcción del proyecto

## Resumen

Se acabó la planificación: hoy tu Mi Setlist empieza a existir. En esta clase implementas las historias de tu Sprint 1 — típicamente la búsqueda de canciones en la API de iTunes con sus estados de carga, error y vacío, y las primeras playlists persistidas — trabajando con la IA como copiloto y con el instructor como mentor de piso.

Hay una regla nueva en cómo le pides código a la IA: **no te puede codear sin preguntarte primero**. Le exigirás que, antes de escribir una línea, te haga preguntas estratégicas — ¿búsqueda con botón o en vivo? ¿qué pasa si no hay resultados? — y esas respuestas son tuyas. Cada decisión que tomes hoy es un argumento para tu Demo Day. Al cierre, tu app se demuestra en pantalla contra lo que tu propio `SPRINTS.md` prometió.

---

## ¿Por qué te sirve?

- **Así se trabaja hoy en la industria.** Un desarrollador con copiloto de IA no escribe menos software: decide más. Las preguntas de diseño (UX, casos borde, datos) siguen siendo humanas, y son las que se evalúan en las entrevistas.
- **Integrar API + estado + persistencia es el corazón de casi toda app real.** Buscar datos afuera, transformarlos y guardar lo que el usuario construye encima: ese patrón lo repetirás toda tu carrera.
- **Un sprint que cierra genera confianza.** Aprender a prometer 4 historias y demostrar lo que realmente lograste — ajustando el plan sin drama — es práctica ágil auténtica.

---

## 🎯 ¿Qué haremos en clase?

1. **Veremos el primer slice en vivo** - El instructor codeará con la IA el primer `fetch` a la API, frente a todos.
2. **Implementarás tu primera HU** - La búsqueda con estados de UI, siguiendo el ritual de implementación.
3. **Construirás tus playlists** - Crear, agregar canciones y persistir en LocalStorage.
4. **Cerrarás con standup** - Demostrarás tu avance contra tu propio plan de sprint.

---

## Objetivos de Aprendizaje

Al finalizar esta clase, podrás:

1. **Implementar** historias de usuario con la IA en modo interactivo, tomando las decisiones de diseño tú.
2. **Consumir** una API real con `fetch`, `async/await` y estados de carga, error y vacío.
3. **Persistir** el estado de tu aplicación en LocalStorage respetando el contrato técnico.
4. **Evaluar** tu avance real contra lo planificado y ajustar el alcance del sprint.

---

## ✅ Preparación para la Clase

### De clases anteriores

- Clase 17 cerrada: repo con estructura ESM corriendo, `HISTORIAS.md`, `SPRINTS.md` y `PROMPTS.md` pusheados.
- Frescos de M3 y M4: `fetch` + `async/await` + estados de UI (C10-C12), estado central + `render()`, LocalStorage con `try/catch` (C13-C15).

### Reflexión previa

Antes de llegar a clase, reflexiona sobre:

- Si la IA te pregunta "¿la búsqueda se dispara con cada tecla o con un botón?", ¿qué responderías sabiendo que la API acepta ~20 solicitudes por minuto?
- ¿Qué prefieres demostrar al cierre: 4 historias a medias o 2 completamente terminadas? ¿Por qué?

### Herramientas

- [ ] **VS Code + Live Server** - Tu repo de C17 abierto y corriendo.
- [ ] **Herramienta de IA** - Sesión activa, con tu contrato técnico a la mano para pegarlo.
- [ ] **Navegador con DevTools** - Pestañas Console, Network y Application a la vista.

### Lectura sugerida

- [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html){:target="_blank"} - Parámetros y campos de la API que consumirás.
- [Documento del proyecto](../class-17/project/){:target="_blank"} - Contrato técnico y MVP, tus fuentes de verdad.

---

## Glosario

| Término | Definición |
|---------|------------|
| **Modo interactivo** | Forma de trabajar con la IA en la que ella pregunta antes de codear y tú decides. Lo contrario de "máquina expendedora de código". |
| **Pregunta estratégica** | Pregunta de la IA sobre una decisión que le corresponde al desarrollador: UX, casos borde, estructura de datos. |
| **Slice** | Porción mínima probable de una historia. Se implementa, se prueba y se commitea antes de seguir. |
| **Rate limit** | Límite de solicitudes por minuto que impone una API. Excederlo devuelve error `403`. |
| **Standup** | Reunión breve donde cada quien reporta avance real contra lo planificado. |

---

## Recursos Adicionales

- [Proyecto Integrador del Módulo 5](../class-17/project/){:target="_blank"} - Enunciado completo y rúbrica.
- [Async/await en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function){:target="_blank"} - Referencia del patrón que usará tu búsqueda.
- [LocalStorage API](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage){:target="_blank"} - Referencia rápida de `setItem`, `getItem`, `removeItem`.
