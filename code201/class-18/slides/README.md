<!-- .slide: data-background="#0A192F" -->
# Clase 18: Sprint 1
## De tu plan a tu app funcionando 🔨

---

## TRANSICIÓN: Clase 17 → Clase 18

### Ya tienen:
- Sus HUs con criterios + plan de sprints
- Repo con arquitectura ESM corriendo

### Hoy:
- Sprint 1: el código sale de ustedes + su copiloto
- Al cierre: demo contra su propio `SPRINTS.md`

> "El plan era el mapa. Hoy se camina."

---

## 🎯 Meta del día + reglas de la API

**Al cierre se demuestra:** búsqueda con estados de UI + playlist que sobrevive al recargar.

| Regla API | Por qué |
|-----------|---------|
| Buscar con botón | Rate limit ~20 req/min |
| `limit=10` | Respuestas rápidas |
| `403` = esperar 1 min | Te pasaste del límite |

---

## 🤝 El prompt de implementación

### Las 4 partes, ahora con MODO:

- **CONTEXTO** — contrato + lo que ya tiene tu proyecto
- **TAREA** — UNA HU con sus criterios
- **MODO** — "hazme 2-3 preguntas estratégicas ANTES de codear"
- **RESTRICCIONES** — porciones pequeñas, sin reescribir archivos ajenos

> La IA pregunta. **Tú decides.** Ella teclea.

---

## QUIZ PRE-LAB 🤖

### Pregunta:

Le pides a la IA la búsqueda y te pregunta:
*"¿Disparo la búsqueda con cada tecla o con un botón?"*

**¿Qué respondes y qué información necesitas para decidir?**

*Toma 2-3 respuestas antes de continuar*

Note: Conducir hacia: el contrato/la API deciden (rate limit → botón). Después viene el SLICE EN VIVO (guion en facilitator).

---

## COMPROBACIÓN

### La IA te entrega `api.js` completo con 80 líneas y te dice "listo". ¿Qué haces?

A. Lo pego: si lo escribió la IA, debe funcionar

B. Lo pego y lo pruebo; si funciona, sigo con la siguiente HU

C. Le pido la porción de UNA función, su explicación, y la pruebo contra los criterios

D. Lo borro y escribo todo yo sin IA para aprender de verdad

---

## COMPROBACIÓN - Respuesta

**Respuesta correcta:** C

- **A:** Código sin leer = deuda directa para el Q&A del Demo Day.
- **B:** "Funciona" no es el criterio: ¿lo puedes explicar y mantener?
- **C:** Porciones pequeñas + explicación + prueba contra criterios. ✅
- **D:** El péndulo opuesto: la IA es parte del flujo profesional; el punto es dirigirla.

> **Clave:** "Si no puedes explicarlo, no es tuyo todavía."

---

## CHECKPOINT 1 (mitad de sprint): Búsqueda viva

### Verificar:
Buscar "Soda Stereo" en tu app

**¿Qué debe verse?**
- Resultados con carátula, nombre y artista
- Indicador de carga al buscar; error sin WiFi; vacío con "zzzzz"

**Problemas comunes:**
- `403` → rate limit, esperar 1 min
- CORS/import → Live Server, no `file://`

---

## CHECKPOINT 2 (cierre): Playlist persistida

### Verificar:
Crear playlist → agregar 2 canciones → **recargar**

**¿Qué debe verse?**
- La playlist y sus canciones siguen ahí
- Consola sin errores

**Problemas comunes:**
- No persiste → falta `guardar()` tras cambiar estado
- Fecha rara al recargar → rehidratar con `new Date()`

---

## REFLEXIÓN: ¿Quién decidió tu app hoy?

| Delegar todo | Dirigir a la IA |
|--------------|-----------------|
| "Hazme la app de música" | Una HU por vez, con criterios |
| Responde "lo que sea mejor" | Decide y anota el porqué |
| Pega 80 líneas sin leer | Porciones + explicación + prueba |

> **Regla memorable:** "La IA teclea rápido. Decidir sigue siendo tu trabajo."

---

## TRANSICIÓN: Preview Clase 19

### Hoy lograste:
- Tu app busca en un catálogo real
- Tus playlists sobreviven al recargar
- Decisiones propias registradas

### Próxima clase:
- Un compañero **probará tu app** (validación cruzada)
- Sprint 2: estadísticas, orden y robustez

> ⚠️ Requisito para C19: Sprint 1 **cerrado** (termina asíncrono lo que falte)

---

## Entrega

- Link al repo con ≥3 commits nuevos (uno por HU)
- `PROMPTS.md` actualizado con prompts y decisiones
- Standup: qué prometió tu `SPRINTS.md` vs qué demostraste

### Preguntas de cierre:
1. ¿Qué decisión tomaste hoy que la IA no podía tomar por ti?
2. ¿Qué le falta a tu Sprint 1 y cuándo lo cierras?

### Próxima clase: User Validation + Sprint 2 🔍
