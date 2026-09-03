# Guía del Facilitador - Clase 20: Demo Day

> Tiempo de lectura: 8 minutos | Prepárate antes de clase

Hoy no enseñas: **evalúas y celebras**. Tu trabajo pesado ya está hecho — las notas que tomaste en las rondas de C18-C19 (decisiones interesantes, HUs propias prometidas, quién acumuló deuda de comprensión) son tu material para un Q&A justo y personalizado. El Q&A es la pieza que sostiene todo el modelo del módulo: es donde "no pegues código que no puedas explicar" deja de ser un consejo y se vuelve nota.

---

## 🔑 Conceptos Clave

- **Q&A como auditoría**: 2 minutos preguntando sobre código concreto del repo del alumno. Distingue a quien dirigió a su copiloto de quien copió.
- **Argumentación con IA**: al menos 1 de las 2 decisiones debe involucrar a la IA (qué pidió, qué recibió, qué cambió y por qué).
- **Plan B sin drama**: una app que falla en vivo no anula la evaluación; un alumno que no puede explicar su código, sí la afecta.

---

## ⏱️ Logística (9-10 alumnos)

| Bloque | Tiempo | Detalle |
|--------|--------|---------|
| Setup + sorteo | 0-10 | Proyector, orden sorteado, recordar formato |
| Presentaciones | 10-130 | 10 × (10 min + 2 de transición) |
| Colchón | 130-160 | Absorbe demoras; si sobra, ver "Tiempo extra" abajo |
| Cierre del curso | 160-180 | Síntesis, feedback general, ruta a Code 301 |

**Tiempo extra (si el grupo fue puntual):** ronda de feedback de pares ("dile al presentador una cosa que te robarías de su app"), o Q&A extendido a 3 min para los últimos, o demo cruzada informal: cada quien usa la app de otro 5 minutos.

---

## ❓ Cómo elegir el fragmento para el Q&A

No preguntes al azar: llega con un plan por alumno, armado en 2 minutos mientras presenta.

1. **Abre su repo** en una pestaña durante su demo.
2. **Cruza con tus notas de C19**: ¿qué HU propia prometió? ¿dónde lo viste frágil en las rondas?
3. **Elige un fragmento con decisión adentro**: el adaptador de la API, el `eliminarCancion` inmutable, el cálculo de stats, su HU propia.
4. Preguntas que funcionan:
   - "Explícame esta función línea por línea."
   - "¿Qué parte de esto escribió la IA y cómo verificaste que estaba bien?"
   - "Si iTunes cambia el nombre de un campo, ¿qué archivos tocas?"
   - "¿Por qué esto usa spread y no push?"

**Señal de dominio:** responde desde las decisiones ("elegí X porque..."). **Señal de deuda:** describe el código leyéndolo ("aquí... eh... se hace un filter...") sin poder decir por qué.

---

## 🎭 Dinámicas de Clase

### Apertura

> "Diez personas construyeron la misma app y van a mostrar diez soluciones distintas. Eso es exactamente lo que pasa en un equipo real. Hoy no compiten entre ustedes: cada uno compite contra su rúbrica."

### Si una app falla en vivo

```
Facilitador: "Tranquilo. Plan B: muéstranos los screenshots y
cuéntanos qué estaríamos viendo."
[Después, en privado: la falla técnica no es lo que más pesa;
la argumentación y el Q&A siguen valiendo 40 puntos.]
```

### Si alguien no terminó el MVP

> "Muéstranos lo que SÍ funciona y cuéntanos qué te faltó y por qué." Evalúa lo demostrable con la rúbrica tal cual; el criterio de funcionalidades baja, los demás se evalúan normal.

### Cierre de las presentaciones

> "Hace 20 clases no sabían qué era una etiqueta HTML. Hoy tienen una app pública con API real, persistencia y un copiloto que aprendieron a dirigir. Eso no es un curso terminado: es una carrera empezada."

---

## ☑️ Aplicando la rúbrica (recordatorios del nuevo modelo)

| Criterio | En qué fijarte hoy |
|----------|--------------------|
| Funcionalidades del MVP | El flujo de demo cubre los 10 puntos; la recarga en vivo es obligatoria |
| Calidad técnica | Pide ver 30 segundos de código si dudas: ESM, estado→render, inmutabilidad |
| Uso responsable de IA + HU propia | `PROMPTS.md` con contexto real (10) + HU propia funcionando (10) |
| Presentación | Flujo completo en ≤10 min, sin leer código en vivo |
| Argumentación + Q&A | ≥1 decisión con IA bien contada; el Q&A confirma o desmiente |

**La regla de oro convertida en nota:** si la app es impecable pero el alumno no explica su código en el Q&A, los criterios de Argumentación (20) y Uso de IA (20) lo reflejan. Dilo sin rodeos en el feedback: es la lección más importante que se lleva a Code 301.

---

## ⚠️ Situaciones Comunes

| Situación | Qué hacer |
|-----------|-----------|
| El deploy murió 5 min antes | Plan B con screenshots; si trae la app local con Live Server, vale |
| Se pasa de los 10 min | Aviso a los 9; corte amable a los 11 — el tiempo es parte de la nota |
| Respuesta de Q&A claramente memorizada | Repregunta con una variación pequeña ("¿y si quisiera ordenar por artista?") |
| Nervios que bloquean | Pregunta puente: "cuéntame qué hace tu HU propia" — hablar de lo suyo destraba |
| La API de iTunes caída el día D | Aviso general: demos con datos ya persistidos + screenshots de búsqueda |

---

## 🔗 Cierre del curso y ruta a Code 301

- Feedback individual: 1 fortaleza específica + 1 área concreta para 301, por alumno.
- Recuérdales que el repo queda público: pulir el README post-curso suma a su portafolio.
- Menciona `admission.md` para quienes siguen a Code 301.

---

## 🪞 Reflexión Post-Clase (y post-módulo)

- ¿El Q&A distinguió comprensión real? Anota qué preguntas funcionaron mejor para la próxima cohorte.
- ¿Cuántos llegaron con HU propia funcionando? Si fueron pocos, C19 necesita más margen asíncrono.
- ¿El modelo IA (guía → copiloto → corrector) produjo mejores demos que el M5 anterior? Tu impresión honesta alimenta la retro del curso.
- ¿Qué app te sorprendió? Guárdala como ejemplo (con permiso) para inspirar a la siguiente cohorte.
