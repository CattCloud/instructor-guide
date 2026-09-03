---
name: feedback-nombrar-concepto-donde-sucede
description: Conceptos que EMERGEN naturalmente del code-along (composición, DRY, etc.) se nombran inline justo después de que suceden, no en un sub-punto teórico aparte al final
metadata:
  type: feedback
---

Cuando un concepto **emerge naturalmente del código que ya se está escribiendo** en el code-along, se nombra **inline, justo después de que sucede** — NO se le dedica un sub-punto teórico separado (y mucho menos al final del momento/clase).

**Why:** un sub-punto teórico tardío ("ahora hablemos de composición/DRY") desconecta el concepto del momento donde el alumno lo vivió. El alumno aprende mucho mejor si el instructor para 10 segundos cuando el concepto acaba de aparecer en el código y dice "esto que acaba de pasar tiene nombre: X". El concepto queda anclado a un ejemplo concreto que el alumno acaba de ver suceder, no a una definición flotante.

**Cómo detectarlo:** si al planear un momento de cierre aparece un sub-punto tipo "Principio X" o "Concepto Y" cuya única función es definir algo que YA ocurrió en code-alongs anteriores → ese sub-punto sobra. El concepto debe moverse al lugar donde primero sucedió.

**Estructura del nombrado inline (en el sub-punto donde el concepto emerge):**
1. El code-along produce el ejemplo naturalmente (una función llama a otra, se reusa algo, etc.).
2. Bloque corto `> **{Concepto} — nombrar JUSTO cuando acaba de suceder:**` con la voz del instructor: *"paren un segundo, miren lo que acaba de pasar: {descripción de lo que el código hizo}. Eso tiene nombre: {Concepto}."*
3. Definición de 1-2 líneas + (opcional) Panel Excalidraw + analogía breve.
4. Después, en momentos posteriores, el concepto solo se APLICA — se menciona como "ya visto", sin re-teorizar.

**Casos calibrados (C06 — Programación Funcional):**
- **Composición** se nombró en M4.2, cuando `totalIngresos` llamó a `obtenerIngresos` adentro (primera vez que una función usa otra). NO como sub-punto teórico en M5.
- **DRY** se nombró en M4.4, cuando `generarValoresReporte` reusó `totalIngresos`/`totalGastos`/`calcularSaldo` en vez de reescribir las sumas. NO como sub-punto teórico en M5.
- Resultado: el momento de cierre (M5) quedó SIN sub-puntos teóricos — solo aplica composición+DRY una vez más (en `promedioIngresos`) y reconecta. Momento liviano, como corresponde a un cierre.

**Diferencia con `[[feedback-iluminar-concepto-implicito]]`:**
- *Iluminar concepto implícito* = un término que el alumno viene **usando como magia** desde clases pasadas (main, origin, function); se abre con pregunta ANTES de introducir el concepto hermano que contrasta.
- *Nombrar concepto donde sucede* (esta memoria) = un concepto **nuevo que el propio code-along produce** naturalmente; se nombra DESPUÉS de que el código lo materializó, sin pregunta previa.
- Los dos comparten la filosofía: el concepto se ancla a algo concreto (un término que ya tipean / un código que acaba de correr), no a una definición flotante en un sub-punto aislado.

**How to apply:** al diseñar la Capa 1/2+3, revisar los momentos de cierre. Si hay sub-puntos cuyo único objetivo es definir un concepto que ya ocurrió en code-alongs previos, eliminarlos y mover el nombrado del concepto al sub-punto donde ese concepto apareció por primera vez en código. El cierre queda para aplicar + reconectar + puente a la clase siguiente.
