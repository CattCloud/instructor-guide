<!-- .slide: data-background="#0A192F" -->
# Clase 19: IA como Corrector + Sprint 2
## De "funciona" a "resiste" 🛡️

---

## TRANSICIÓN: Clase 18 → Clase 19

### Ya tienen:
- Búsqueda en API real + playlists persistidas
- El ritual: la IA pregunta, ustedes deciden

### Hoy la IA cambia de rol:
- Guía (C17) → Copiloto (C18) → **Correctora (C19)**
- Audita SU código, diseña pruebas que USTEDES ejecutan

> "Construir fue la mitad. Hoy: resistir, completar y publicar."

---

## 🎯 Las fases de hoy

| Fase | Resultado |
|------|-----------|
| 1. Auditoría con Copilot (30 min) | Críticos arreglados |
| 2. Replanificar (10 min) | `SPRINTS.md` v2 |
| 3. Sprint 2 (75 min) | MVP completo |
| 4. Tus 2 HUs propias (10 min) | Tu firma en la app ✍️ |
| 5. Deploy (20 min) | URL pública 🌐 |

---

## 🔍 La auditoría con Copilot

- **`@workspace`** → el agente ve TODO tu proyecto (encuentra bugs ENTRE archivos)
- **Modo Ask** → hallazgos con severidad, NO ediciones
- **Plan de pruebas de casos borde** — el agente lo diseña...

> ...pero el veredicto sale de TU navegador. Las pruebas las ejecutas TÚ.

*Presupuesto Free: ~50 chats/mes. La auditoría cuesta 3-4.*

---

## QUIZ PRE-LAB 🤖

### Pregunta:

La IA revisó tu código y concluye: **"Todo se ve correcto ✅"**

**¿Le crees? ¿Qué harías para comprobarlo?**

*Toma 2-3 respuestas antes de continuar*

Note: Conducir hacia: los correctores también alucinan; la única verdad es la app corriendo — por eso el plan de pruebas se ejecuta a mano. Después viene la DEMO del corrector en vivo (guion en facilitator).

---

## COMPROBACIÓN

### ¿Cuál de estos hallazgos es CRÍTICO?

A. El botón de eliminar es gris y "se ve poco moderno"

B. Una función de render tiene 30 líneas y podría dividirse

C. Con localStorage corrupto, la app muere en pantalla blanca

D. Sería buena idea agregar modo oscuro

---

## COMPROBACIÓN - Respuesta

**Respuesta correcta:** C

- **A:** Menor — pulido visual, no afecta el funcionamiento.
- **B:** Mayor — deuda técnica real, pero la app funciona; entra a la replanificación.
- **C:** Crítico — rompe la app para el usuario. Se arregla HOY, antes que todo. ✅
- **D:** No es un hallazgo: es una idea de feature (quizá tu HU propia).

> **Clave:** Severidad = impacto en el usuario, no incomodidad del programador.

---

## CHECKPOINT Fase 1: Auditoría cerrada

### Verificar:
La prueba de datos corruptos, en vivo

**¿Qué debe verse?**
- Críticos corregidos: localStorage corrupto → "Empezar de cero", no pantalla blanca
- Mayores identificados, listos para el plan v2

**Problemas comunes:**
- "La IA dijo que todo está bien" → ¿ejecutaste las pruebas?
- Arregló primero un detalle visual → críticos primero, siempre

---

## CHECKPOINT Fase 3: MVP completo

### Verificar:
Eliminar una canción, de principio a fin

**¿Qué debe verse?**
- TU modal de confirmación (no el del navegador)
- Stats y duración se recalculan solas; el orden funciona

**Problemas comunes:**
- `confirm()` nativo → patrón `pedirConfirmacion` de C16
- El orden "desordena" el estado → falta copiar antes de ordenar

---

## REFLEXIÓN: La IA revisa, tú verificas

| Confiar a ciegas | Auditar con criterio |
|------------------|----------------------|
| "La IA dice que está bien" | Ejecuta las pruebas en SU app |
| Arregla lo primero que señale | Críticos → mayores → menores |
| Acepta severidades de la IA | Decide por impacto en el usuario |

> **Regla memorable:** "El review es una opinión. Tu app corriendo es un hecho."

---

## TRANSICIÓN: Preview Demo Day 🎤

### Hoy lograste:
- App auditada, completa y **pública**
- 2 HUs propias tuyas, con tu firma

### Clase 20 — Demo Day:
- 10 min: demo (5) + decisiones técnicas (3) + Q&A (2)
- El Q&A es sobre TU código: si lo escribiste con criterio, ya estás listo

> ⚠️ Lo pendiente se cierra asíncrono ANTES del Demo Day

---

## Entrega

- Link al repo + **link al deploy público funcionando**
- Críticos de la auditoría corregidos
- 2 HUs propias en `HISTORIAS.md` (≥1 implementada antes de C20)
- Standup: prometido vs demostrado + plan de cierre asíncrono

### Preguntas de cierre:
1. ¿Qué encontró la auditoría que tú no habías visto?
2. ¿Tu HU propia: por qué esa y no otra?

### Próxima clase: Demo Day 🎉
