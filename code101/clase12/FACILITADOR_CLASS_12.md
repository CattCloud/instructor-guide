# Guía del Facilitador - Clase 12: Demo Day

> Tiempo de lectura: 10 minutos | Prepárate antes de clase

---

## 🔑 Conceptos Clave

Esta clase NO introduce conceptos nuevos. Es evaluación, presentación y cierre. Los conceptos evaluados son:

- **Variables y tipos de datos** (Clase 9): `let`, `const`, `string`, `number`, `boolean`
- **Condicionales** (Clase 10): `if/else`, operadores de comparación y lógicos, `Math.random()`
- **Funciones y DOM** (Clase 11): declaración, parámetros, `return`, `getElementById()`, `addEventListener()`

---

## 📋 Logística de la Clase

### Flujo de la Sesión (180 min)

| Fase | Minutos | Actividad | Notas |
|------|---------|-----------|-------|
| 1 | 0-15 | Test diagnóstico | Canvas, 8 preguntas, individual |
| 2 | 15-30 | Preparación | Verificar juegos, practicar |
| 3 | 30-120 | Presentaciones | ~3 min por estudiante |
| 4 | 120-140 | Evaluación | Completar rúbricas |
| 5 | 140-160 | Reflexión grupal | Compartir aprendizajes |
| 6 | 160-180 | Cierre del curso | Celebración, próximos pasos |

### Cálculo de Tiempo para Presentaciones

| Estudiantes | Tiempo por persona | Total estimado |
|-------------|-------------------|----------------|
| 15 | 3 min + 1 min transición | ~60 min |
| 20 | 3 min + 1 min transición | ~80 min |
| 25 | 3 min + 1 min transición | ~100 min |
| 30 | 2.5 min + 0.5 min transición | ~90 min |

> Si hay más de 25 estudiantes, reducir a 2.5 minutos por presentación. Avisar al inicio.

---

## 🧠 Test Diagnóstico (15 min)

### Antes del Test

1. Abrir Canvas con el test listo
2. Recordar: "Este test es diagnóstico. NO afecta tu calificación. Nos ayuda a identificar qué temas reforzar."
3. Instrucciones: individual, a libro cerrado, 15 minutos

### Durante el Test

- No responder preguntas sobre contenido
- Sí aclarar preguntas sobre el formato ("¿puedo marcar más de una?")
- Dar aviso cuando queden 5 minutos y 1 minuto

### Después del Test

- "Gracias. Los resultados nos ayudan a mejorar el curso."
- NO revisar respuestas en este momento—pasar directamente a preparación
- Las preguntas están en `test/questions.md`

---

## 🎤 Gestión de Presentaciones

### Antes de Empezar

```
Facilitador: "Cada uno tiene 3 minutos. Yo les avisaré a los 2 minutos y a los 3."
Facilitador: "La estructura es: 1 minuto demo, 1 minuto código, 1 minuto reflexión."
Facilitador: "Si algo falla en la demo, no pasa nada—explica qué debería pasar."
Facilitador: "Después de cada presentación, una pregunta rápida del grupo o mía."
```

### Durante las Presentaciones

**Gestión del tiempo:**
- Cronómetro visible o en tu teléfono
- Aviso verbal a los 2 minutos ("un minuto más")
- Corte amable a los 3 minutos ("gracias, una última pregunta")

**Preguntas para hacer después de cada presentación:**
- "¿Qué hace tu función `verificarIntento()`?"
- "¿Cómo sabe tu programa si el número es muy alto o muy bajo?"
- "¿Qué pasa si el usuario escribe texto en lugar de un número?"
- "Si tuvieras que agregar un límite de intentos, ¿cómo lo harías?"
- "¿Qué fue lo más difícil de pasar de prompt/alert a DOM?"

> Elegir 1 pregunta por presentación. Variar entre técnicas y reflexivas.

### Si un Estudiante No Tiene el Juego Listo

```
Facilitador: "Puedes presentar lo que tienes hasta ahora."
Facilitador: "Muéstranos tu código y explica qué planeabas hacer."
```

Evaluar basándose en lo que tienen. Si no presentan en absoluto, calificar "Bajo" en el criterio de presentación pero evaluar el código en GitHub normalmente.

---

## 📊 Evaluación

### Rúbrica Rápida (4 × 25 = 100)

| Criterio | Excelente (25) | Bueno (20) | Satisfactorio (15) | Bajo (10) |
|----------|---------------|------------|-------------------|----------|
| **Funcionalidad** | Todo funciona: aleatorio, pistas, validación, acierto | Funciona con errores menores | Básico: compara pero sin pistas o validación | No funciona |
| **Interfaz** | Input, botón, colores, historial, reinicio | Input y botón, mensajes visibles | Interfaz parcial, algo de prompt/alert | Solo prompt/alert |
| **Código** | 3+ funciones, nombres claros, organizado | 2 funciones, legible | 1 función, desorganizado | Sin funciones |
| **Presentación** | Explica código, responde preguntas, reflexiona | Presenta bien, explica la mayoría | Presenta pero no explica | No presenta |

### Tips de Evaluación

- **Evaluar comprensión, no perfección.** Un estudiante que tiene un juego simple pero puede explicar cada línea merece más que uno con un juego complejo que no puede explicar.
- **Commits como evidencia.** Un historial de commits progresivo (`"feat: setup inicial"`, `"feat: if/else para pistas"`, `"feat: funciones y DOM"`) demuestra trabajo sostenido.
- **Presentaciones nerviosas.** Todos los estudiantes estarán nerviosos. Evaluar comprensión, no elocuencia. Si señalan una función y dicen "esto compara el número del jugador con el secreto", eso es suficiente.

---

## 🎉 Cierre del Curso

### Reflexión Grupal (20 min)

**Dinámica sugerida:**
```
Facilitador: "Antes de cerrar, quiero que cada uno comparta en una frase:"
Facilitador: "¿Qué es lo que más te sorprendió aprender en Code 101?"
(Ronda rápida, 15-20 segundos por persona)
```

Alternativa si el grupo es grande:
- Hacer la pregunta y pedir que 5-6 personas compartan
- O usar un formulario rápido (Google Forms, Mentimeter)

### Recapitulación del Curso

```
Facilitador: "Recordemos dónde empezaron:"
Facilitador: "Módulo 1: Muchos no sabían qué era HTML. Crearon su perfil personal."
Facilitador: "Módulo 2: Aprendieron terminal y Git—herramientas profesionales."
Facilitador: "Módulo 3: Programaron su primer juego interactivo con JavaScript."
Facilitador: "Eso es un camino increíble en 12 clases."
```

### Próximos Pasos

```
Facilitador: "Code 201 es el siguiente paso. Ahí van a:"
Facilitador: "- Dominar JavaScript con loops, arrays y objetos"
Facilitador: "- Crear aplicaciones web más complejas"
Facilitador: "- Trabajar en equipos con Git colaborativo"
Facilitador: "- Construir un portfolio profesional"
Facilitador: "Todo lo que aprendieron aquí es la base para lo que viene."
```

---

## 💬 Frases para Usar

**Al inicio del Demo Day:**
> "Hoy no hay contenido nuevo. Hoy es SU día. Van a mostrar lo que construyeron y lo que aprendieron. Disfrútenlo."

**Antes de las presentaciones:**
> "No importa si su juego es simple o complejo. Lo que importa es que lo construyeron USTEDES, que pueden explicar cómo funciona, y que hace tres semanas no sabían qué era JavaScript."

**Después de cada presentación buena:**
> "Excelente demo. Me gusta cómo explicaste [detalle específico]."

**Después de una presentación donde el estudiante está nervioso:**
> "Bien hecho. Se nota que entiendes cómo funciona tu código. Los nervios son normales—en la industria, todos los desarrolladores presentan demos."

**Al cerrar el curso:**
> "Empezaron sin experiencia en programación. Hoy presentaron un juego que escribieron ustedes mismos. Eso no es poco. Eso es el comienzo de una carrera en tecnología. Estoy orgulloso/a de cada uno de ustedes."

---

## 🚨 Plan de Contingencia

### Si un estudiante no tiene nada para presentar:

- Invitar a presentar lo que tengan (incluso si es solo el lab 09-10)
- Evaluar basándose en el repositorio de GitHub
- Ofrecer presentar en la siguiente sesión si existe esa posibilidad

### Si sobra tiempo:

- Sesión abierta de preguntas y respuestas
- Mostrar demos de proyectos de Code 201 para motivar
- Permitir que estudiantes mejoren sus juegos con ayuda del facilitador

### Si falta tiempo:

- Reducir presentaciones a 2 minutos
- Eliminar la pregunta después de cada presentación
- Priorizar que TODOS presenten aunque sea brevemente

### Si el test de Canvas falla:

- Tener las preguntas impresas o en pantalla como respaldo
- Hacer el test de forma oral con el grupo (formato quiz)
- Reprogramar el test para después si es necesario

---

## 🔗 Resultados del Test Diagnóstico

### Interpretación de Resultados

| Tema | Preguntas | Si < 60% acierta |
|------|-----------|-------------------|
| Variables y tipos | 1-2 | Reforzar `typeof`, `let` vs `const` |
| Condicionales | 3-4 | Reforzar `===`, flujo de `if/else` |
| Funciones | 5-6 | Reforzar parámetros y `return` |
| DOM/Eventos | 7 | Reforzar `getElementById`, `addEventListener` |
| Autoevaluación | 8 | No tiene respuesta correcta—usar para retroalimentación |

> Los resultados del test son para uso interno. Compartir tendencias generales con el grupo si es relevante, pero no exponer resultados individuales.
