---
name: feedback_criterios_definen_done
description: "En labs organizados por Historias de Usuario, los criterios de aceptación van después de la HU y antes del código — definen cuándo está terminado (Definición de Terminado, NO 'done') y se redactan como resultados, no implementación"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 005aa3f1-b969-43a0-ad52-38f92afb61b1
---

En las clases organizadas por **Historias de Usuario** (M3 del Code 201: Pokédex, C09+), los **criterios de aceptación** van **inmediatamente después del enunciado de la HU y ANTES del código/implementación**.

El método a enseñar y resaltar: **el criterio define cuándo está TERMINADO antes de construir** — usar el término español **"Definición de Terminado"**, NO "done". Primero se lee la HU → se leen sus criterios (qué tiene que cumplirse) → recién ahí se desarrolla, apuntando a cumplirlos. No se codea y después se ve si quedó bien.

Los criterios se redactan como **RESULTADOS observables** (qué ve/logra el usuario), NO como implementación:
- ✅ "las tarjetas se muestran en rejilla, no apiladas" · "se adapta al tamaño de pantalla"
- ❌ "usá `grid` de Tailwind" (eso es el *cómo*, lo decide quien construye)

**Why:** así trabaja la industria; separar el QUÉ (criterio) del CÓMO (código) enseña diseño antes que sintaxis, y da un objetivo verificable.

**How to apply:** en la Capa 2+3 de cada HU, poner un bloque "Criterios de aceptación (la Definición de Terminado)" entre la apertura/enunciado y el code-along; framear el code-along como "construir para cumplir esos criterios". Conecta con el concepto [[feedback... ]] de Historia de Usuario (Capa 0 B0 de C09). Aplica a todas las HU de las clases del M3.
