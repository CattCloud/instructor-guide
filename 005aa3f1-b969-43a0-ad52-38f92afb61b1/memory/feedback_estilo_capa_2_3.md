---
name: feedback-estilo-capa-2-3
description: "El estilo de Eric para Capa 2+3 del guion recorta bloques canónicos del SKILL, prefiere bullets sobre prosa y solo deja preguntas donde aportan. Calibrado contra `Vista momento 2.md`."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 005aa3f1-b969-43a0-ad52-38f92afb61b1
---

Al generar Capa 2+3 (guion detallado) para una clase, aplicar el siguiente recorte del banco canónico §6 del `instructor-system/SKILL.md`:

**Bloques que Eric ELIMINA del momento por defecto:**

- **`> **Nota táctica de inicio:**`** del momento — el OBJETIVO al inicio basta.
- **`> **Checkpoint obligatorio N.N:**`** dentro de cada sub-punto — solo si aporta valor crítico de verificación.
- **`### 🚨 Errores Comunes — Momento N`** al cierre — eliminado.
- **`> **Nota táctica de transición:**`** al final del momento — eliminado.
- **`> **Criterio de éxito público:**`** — eliminado salvo práctica autónoma larga.
- **Pregunta de calibración** después de cada explicación teórica — solo donde mide algo real.
- **Pregunta de activación** en cada sub-punto — solo donde aporta.

**Bloques que Eric MANTIENE:**

- `OBJETIVO` al inicio del momento.
- `**EN PANTALLA: ...**` en cada cambio de contexto (tool/pantalla).
- `> **Tu apertura:**` / `> **Tu explicación teórica precisa:**`.
- `> **Demo del problema en vivo:**` / `> **Demo en vivo:**` cuando aplica.
- `> **Code-along del lab — Parte X.Y:**` con pasos numerados y bloque CSS.
- `> **Predecir antes de ejecutar:**` cuando el resultado sorprende.
- `> **Preguntas de Activación:**` 0–2 por sub-punto según necesidad.
- `> **Reto autónomo al cerrar M{N}:**` y `> **Commit sugerido al cerrar M{N}:**` al cierre del momento.

**Forma de redacción:**

- **Bullets > prosa** cuando hay enumeración natural (3 propiedades, 4 verbos, varios pasos conceptuales). Lista con guion `-` adentro de los blockquotes.
- **Definiciones tipo "¿Qué es X?: definición de una línea"** cuando vale la pena fijar el término técnico (ej: "¿Qué es el layout? Distribución y organización visual de los elementos en una página web.").
- **Recortar palabreo** de teoría: ir directo a la regla técnica, sin párrafos motivacionales ni adornos.
- **Mantener detalle** donde es necesario explicar mecánica (ej: cómo se calcula el ancho con **_box-sizing_**, qué pasa con la cascada CSS al combinar reglas).

**Why:** Eric calibró este estilo manualmente sobre el M2 generado de C02 (ver `Vista momento 2.md` del 2026-05-19 mientras vivía en la raíz del repo). La versión inicial seguía el banco canónico al pie y resultaba sobrecargada — Eric quitó ~30% del contenido manteniendo lo pedagógicamente útil. El SKILL §6 documenta el banco completo; este memo es el filtro de uso real.

**How to apply:** Cuando generes una Capa 2+3 de cualquier clase, aplicar este recorte desde el primer borrador. No reproducir todos los bloques del banco canónico. Si Eric pide específicamente un Checkpoint o Errores Comunes en un momento, agregarlo entonces.
