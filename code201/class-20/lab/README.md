# Lab 20: Demo Day — Presentación y Evaluación

## 🎯 Objetivos

1. Presentar tu Mi Setlist en 10 minutos con demo en vivo sobre tu URL pública.
2. Argumentar 2 decisiones técnicas, incluida al menos una sobre cómo usaste y validaste la IA.
3. Responder el Q&A sobre TU código sin abrir el chat de la IA.

---

## 🎤 Formato de tu presentación (10 min)

| Bloque | Tiempo | Qué hacer |
|--------|--------|-----------|
| **1. Demo en vivo** | 5 min | Buscar un artista → agregar canciones a una playlist → mostrar duración total y estadísticas → ordenar → eliminar con TU modal → **recargar** (persistencia) → cerrar con tu **HU propia** |
| **2. Argumentación técnica** | 3 min | 2 decisiones clave; al menos 1 sobre la IA: qué le pediste, qué te dio, qué cambiaste y por qué |
| **3. Q&A** | 2 min | El instructor abre TU repo y pregunta por fragmentos concretos |

> 💡 **Tip de demo:** llega con una playlist ya armada (para stats y orden con datos ricos) y construye OTRA en vivo. Así muestras el flujo completo sin depender de que la API esté rápida.

---

## ⚙️ Checklist Pre-Presentación (hacer HOY, antes de que empiece la clase)

| ✓ | Item | Verificación |
|---|------|--------------|
| ☐ | Deploy público responde | Abre la URL desde otro navegador o tu celular |
| ☐ | Flujo completo funciona EN el deploy | Buscar, agregar, recargar: todo en la URL pública |
| ☐ | Playlist de demo preparada | Con 5+ canciones variadas (que las stats digan algo) |
| ☐ | `README.md` del repo pulido | Descripción, stack, tus HUs (base + propias), decisiones, cómo correr |
| ☐ | `PROMPTS.md` al día | Es parte de tu rúbrica: prompts con contexto y decisiones |
| ☐ | 3 screenshots de respaldo | Búsqueda con resultados, playlist con stats, tu HU propia |
| ☐ | Ensayo hecho | Corriste el demo completo al menos 1 vez, solo, con reloj |

> ⚠️ Si tu deploy falla 30 minutos antes, avisa al instructor. Plan B: screenshots + explicación oral.

---

## 🗣️ Tu Argumentación Técnica (3 min)

Elige **2 decisiones**. Buenos candidatos:

- **Una decisión que tomaste respondiendo a la IA:** "me preguntó si la búsqueda iba con botón o por tecla; elegí botón por el rate limit".
- **Un output de la IA que corregiste o rechazaste:** qué te dio, qué estaba mal, cómo lo detectaste.
- **Tu HU propia:** por qué esa feature, qué alternativas descartaste.
- **Un hallazgo de la auditoría de la Clase 19:** qué encontró Copilot que tú no habías visto y cómo lo arreglaste.
- **Modelado:** cómo estructuraste el estado de playlists y canciones, y qué simplificaste.

**Fórmula sugerida:**
> "Decidí [X] porque [razón]. La IA proponía / la alternativa era [Y], pero [desventaja]. El resultado fue [Z]."

---

## ❓ Preguntas típicas del Q&A

El instructor elegirá 1-2, mirando TU código:

1. Explícame esta función: ¿qué hace línea por línea?
2. ¿Qué parte de este archivo escribió la IA y cómo verificaste que estaba bien?
3. Si iTunes cambiara el formato de su respuesta, ¿qué archivos tendrías que tocar y por qué?
4. ¿Por qué tu `eliminarCancion` usa `.filter` en vez de borrar con `splice`?
5. ¿Qué pasa si dos pestañas modifican la misma playlist? ¿Cómo lo resolverías?

> 💡 **Tip:** "No lo resolví en este MVP, pero lo atacaría con X" es una respuesta válida. Inventar, no.

---

## 📝 Entrega Final

- [ ] Link al repositorio público (quedará en tu portafolio).
- [ ] Link al deploy funcional.
- [ ] `README.md` con: descripción, stack, HUs implementadas (base + propias), 2 decisiones técnicas explicadas, instrucciones para correr.
- [ ] `PROMPTS.md` e `HISTORIAS.md` actualizados en el repo.

---

> ### 💡 Consejos finales
>
> - No leas código en vivo: la demo es tu app funcionando.
> - Si algo falla, respira y pasa al plan B sin disculparte de más.
> - En el Q&A, responde desde lo que TÚ decidiste. Ahí es donde se nota quién dirigió a su copiloto y quién solo copió.
> - Termina en los 10 minutos: excederte afecta tu evaluación de Presentación.

**Es el último lab del curso. Construiste una app real, con API, persistencia y un copiloto que aprendiste a dirigir. Disfrútalo.**
