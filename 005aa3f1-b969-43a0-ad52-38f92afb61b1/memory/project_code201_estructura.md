---
name: Estructura del Code 201 y repo ncode-201-guide
description: El contenido fuente del Code 201 (clases, labs, slides, facilitator) vive en otro repo. Mapeo de módulos, sistema de skills propio y diferencia con instructor-guide.
type: project
originSessionId: ca33dbe4-9df1-4a96-8ef2-53b456ca0e2e
---
El contenido del curso Code 201 que dicta Eric **no vive en `instructor-guide`**. Vive en `C:\dev\entertechschool\ncode-201-guide\`, principalmente en `curriculum/class-00/` a `curriculum/class-20/`.

**Estructura del curso:**
- 10 semanas, 5 módulos × 4 clases = 20 clases (más class-00 de bienvenida).
- Cada clase: 3h reales — Intro 15m + Demo/Debate 30m + Lab 120m + Cierre 15m. **El lab pesa el 67% de la clase.**
- Cada módulo desarrolla un proyecto integrador progresivamente en los 4 labs y termina con presentación + defensa técnica.

**Mapeo módulo → clases:**
- M1 (Fundamentos Web Moderna: HTML5, Flexbox, Grid, frameworks CSS) = class-01 a 04
- M2 (Fundamentos de Programación: imperativa, funcional, OOP) = class-05 a 08
- M3 (Apps Web con Objetos: prototipos, callbacks, DOM) = class-09 a 12
- M4 (Eventos y Persistencia: events, state, JSON, LocalStorage) = class-13 a 16
- M5 (Proyecto Real) = class-17 a 20

**Sistema de skills del repo `ncode-201-guide`** (línea de ensamblaje, distinto al de `instructor-guide`):
1. Setup: `AGENTS.md` (Paso 0, fundacional) + `CLAUDE.md` (secundario).
2. `/module-planner` → produce `MODULE-PLAN.md`.
3. Por clase: `/class-readme` → `/class-lab` → `/class-slides` → `/class-facilitator`.
4. Validación: `/evaluation-class` + `/lint-markdown`.
5. Extras: `/class-infographic`, `/module-test`.
6. Mantenimiento: `/module-updater` (audita + edita un módulo de 4 clases contra reglas vigentes).
Ver `C:\dev\entertechschool\ncode-201-guide\flujo_creacion_cursos.md` para el flujo completo.

**Why:** Saber esto evita perder tiempo buscando material del 201 dentro de `instructor-guide` (donde NO está) y evita confundir el sistema de skills del 201 con `instructor-system`/`excalidraw-system` de este repo (que generan guion del instructor, no entregables del alumno).

**How to apply:** Cuando Eric pida "revisar/editar contenido del Code 201", trabajar contra `C:\dev\entertechschool\ncode-201-guide\curriculum\`. Cuando pida "guion de clase / Capa 0 / Capa 1 / Guía Excalidraw", trabajar contra `C:\dev\entertechschool\instructor-guide\mi-sistema\` con las skills `instructor-system` y `excalidraw-system`. Los dos sistemas son complementarios: el 201 produce el material entregable del alumno; instructor-guide produce el guion narrado para Eric.
