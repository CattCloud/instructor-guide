---
name: analog-as-cotidianas-reales-y-universales-no-ejemplos-t-cnicos-complejos
description: "Para enseñar conceptos en clase, usar analogías de la vida diaria que cualquiera entienda. Evitar tecnicismos, demos con preparación pesada, jerga."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: f29ccf7e-158c-4c49-9173-0483d2ad48ae
---

Cuando hay que explicar un concepto técnico en el guion (Capa 2+3) o en un panel de Excalidraw, usar **analogías cotidianas, reales y universales**. Cosas que cualquier alumno haya vivido en su día a día. NO usar ejemplos técnicos complejos, demos con preparación pesada, o jerga.

**Why:** Eric lo enunció explícito al cerrar M3 de Clase 01 del Code 201 (2026-05-13): *"recuerda hacer que los alumnos entiendan, no necesariamente necesita ejemplos complejos, cosas cotidianas de la vida, reales y usuales pueden hacerlo"*. Antes lo había aplicado al rechazar la propuesta de M2.1 con dos HTMLs preparados + DevTools Accessibility Tree (muy complejo, mucha jerga) y reemplazarla por la analogía de los frascos en la despensa. La preferencia de analogías cotidianas también es coherente con el principio de instructor-system §2.4 (analogía DESPUÉS de la definición técnica) y con la guía DESARROLLO DE SLIDES.md ("imágenes simples pero precisas y autoexplicativas").

**How to apply:**
- **Primero preguntar: ¿este concepto NECESITA analogía?** No todo concepto la necesita. Las analogías son recurso opcional para conceptos abstractos, contraintuitivos o invisibles. Conceptos concretos (cómo funciona una tecla, qué hace un comando, sintaxis básica) se explican mejor con definición directa + demo en vivo. **Forzar una analogía donde no aplica diluye la explicación y se siente decorativa.**
- Si la analogía SÍ aplica: preguntarse "¿es algo que el alumno haya vivido en casa, en la calle, en el celular, en el supermercado?". Si sí, usar eso.
- Ejemplos de analogías que SÍ funcionaron en Code 201 C01 (concepto abstracto que necesita ancla visual):
  - `<div>`-soup vs semántica → 20 frascos idénticos sin etiqueta en la despensa (no usar "mudanza con cajas" porque ya se usó en Code 101 C02).
  - A11y transversal → rampa del edificio público (la usa el de silla de ruedas, el papá con coche, el repartidor, el lesionado temporal).
  - Texto `alt` → "imaginen una foto por WhatsApp que no carga — ¿qué texto debería aparecer?".
  - `aria-label` → control remoto: los botones obvios (Play, Pausa) no necesitan etiqueta; los raros sí.
  - `<form>` como contenedor → formulario de papel (banco, migraciones, gimnasio) con casillas, textos al lado y casilla "Firmar".
- Ejemplos de conceptos donde Eric RECHAZÓ analogía (suficientemente concretos):
  - **Navegación por teclado / Tab** (Code 201 C01 M5.1, 2026-05-13): Eric dijo *"siento que no debe haber una analogía allí sino una explicación no técnica sino clara y detallada de lo que hace tab y listo, no es tan dificil de entender como otros metodos que si lo necesitan"*. Se reemplazó la propuesta de "linterna en casa a oscuras" por explicación directa de los 3 comandos (Tab/Shift+Tab/Enter) + demo en vivo de Eric navegando su landing con teclado.
- **Evitar:** demos con dos HTMLs preparados antes de clase, abrir DevTools → Accessibility Tree para mostrar landmarks ARIA, jerga sin ancla visual, ejemplos solo de programación (no conectan con vida real).
- **Verificar en cada concepto:** la analogía (cuando aplica) va DESPUÉS de la definición técnica, no antes. Patrón Eric §2.4 de instructor-system.
- **Memorias relacionadas:** [[feedback_presentaciones_son_excalidraw]] (las analogías se visualizan en paneles Excalidraw, no en slides).
