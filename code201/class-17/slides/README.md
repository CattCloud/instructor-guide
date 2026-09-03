<!-- .slide: data-background="#0A192F" -->
# Clase 17: Ideación y Planificación con IA
## Tu proyecto final empieza hoy: Mi Setlist 🎵

---

## TRANSICIÓN: Módulo 4 → Módulo 5

### Ya saben:
- Estado central + `render()`, CRUD inmutable, delegación
- `localStorage` + JSON + `try/catch`
- Módulos ESM (`import`/`export`)

### Hoy cambia el juego:
- El lab ya no trae el código
- Ustedes construyen, la IA acompaña, el instructor mentorea

> "En M1-M4 aprendieron las piezas. En M5 arman SU máquina."

---

## 🎵 El proyecto: Mi Setlist

- Buscar canciones en el **catálogo real de iTunes**
- Organizarlas en **playlists propias** que persisten
- Duración total, estadísticas y orden

**Hoy NO se codea el producto. Hoy se planifica.**

*Enunciado completo en `class-17/project/`*

---

## ⚙️ El contrato técnico

| Regla | Detalle |
|-------|---------|
| Stack | Vanilla JS + ESM, CSS propio o Tailwind |
| Arquitectura | Estado central + `render()`, CRUD inmutable |
| Persistencia | `localStorage` + JSON + `try/catch` |
| Prohibido | Frameworks, librerías de estado, backend |

> Este bloque viaja en **cada prompt** que le manden a la IA.

---

## QUIZ PRE-LAB 🤖

### Pregunta:

Le pido a la IA: *"hazme las historias de usuario de mi app de música"*.

**¿Qué me va a devolver y qué le faltó a mi pedido?**

*Toma 2-3 respuestas antes de continuar*

Note: Conducir hacia las 4 partes del prompt. Después de esta discusión viene la DEMO EN VIVO de planificación con IA (guion en facilitator).

---

## COMPROBACIÓN

### ¿Cuál es un buen criterio de aceptación para "buscar canciones"?

A. La búsqueda usa `fetch` con `async/await` y `try/catch`

B. La app permite buscar canciones fácilmente

C. Al buscar "Soda Stereo" aparecen resultados con carátula, nombre y artista

D. El input de búsqueda tiene un `addEventListener` de tipo submit

---

## COMPROBACIÓN - Respuesta

**Respuesta correcta:** C

- **A:** Describe implementación (el cómo), no resultado. Eso se decide al codear.
- **B:** "Fácilmente" no es verificable. ¿Cómo compruebas "fácil"?
- **C:** Observable y verificable en pantalla: cualquiera puede probarlo. ✅
- **D:** Detalle de código. Si mañana cambias el listener, la historia sigue válida.

> **Clave:** Los criterios describen lo que se VE, no lo que se ESCRIBE.

---

## CHECKPOINT Parte 1: Tus historias de usuario

### Verificar:
`HISTORIAS.md` con ~8 HUs + `PROMPTS.md` con ≥2 entradas

**¿Qué debe verse?**
- Cada HU con 3-5 criterios observables
- Las 10 funcionalidades del MVP cubiertas
- `PROMPTS.md` con los prompts que usaste

**Problemas comunes:**
- 15+ historias → alcance inflado, consolidar
- Criterios con nombres de funciones → re-escribir como resultados

---

## CHECKPOINT Parte 2: Plan de sprints

### Verificar:
`SPRINTS.md` completo

**¿Qué debe verse?**
- Meta de 1 línea por sprint
- ~4 HUs por sprint + 1 dependencia documentada
- Reto técnico personal identificado

**Problemas comunes:**
- Playlists en Sprint 1 sin búsqueda → ¿de dónde salen las canciones?

---

## CHECKPOINT Parte 3: Repositorio listo

### Verificar:
Live Server: "Módulos ESM funcionando ✅" sin errores en consola

**¿Qué debe verse?**
- Repo público con estructura del contrato
- `HISTORIAS.md`, `SPRINTS.md`, `PROMPTS.md` pusheados

**Problemas comunes:**
- Error de CORS/import → abrió con `file://`, usar Live Server

---

## REFLEXIÓN: La IA propone, tú decides

| Trabajar SIN criterio | Trabajar CON criterio |
|-----------------------|----------------------|
| Copia el primer output | Critica contra el contrato |
| 15 historias infladas | 8 historias que caben en 2 sprints |
| "La IA lo hizo" | "Yo decidí, la IA aceleró" |

> **Regla memorable:** "No pegues nada que no puedas explicar."

---

## TRANSICIÓN: Preview Clase 18

### Hoy lograste:
- Tus propias historias de usuario, criticadas y validadas
- Plan de 2 sprints con dependencias
- Repo con arquitectura ESM corriendo

### Próxima clase — Sprint 1:
- Búsqueda en la API de iTunes con estados de UI
- Tus primeras HUs funcionando, codeadas por ti + tu copiloto

---

## Entrega

- Link a tu repositorio público
- `HISTORIAS.md` + `SPRINTS.md` + `PROMPTS.md` visibles en GitHub
- Standup de cierre: 30 segundos, tu repo + tu reto técnico

### Preguntas de cierre:
1. ¿Qué le corregiste hoy al output de la IA?
2. ¿Cuál es tu reto técnico y cómo lo vas a atacar?

### Próxima clase: Sprint 1 — a construir 🔨
