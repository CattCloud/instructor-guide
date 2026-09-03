# Guía del Facilitador - Clase 17: Ideación y Planificación con IA

> Tiempo de lectura: 9 minutos | Prepárate antes de clase

Esta clase inaugura un formato distinto: **tú dejas de dictar y pasas a mentorear**. El lab ya no trae código; el alumno construye con la IA como copiloto y contigo como criterio experto. Tu trabajo de hoy es modelar cómo se piensa con una IA, y después circular, detectar y destrabar.

---

## 🔑 Conceptos Clave

- **Prompt estructurado**: contexto + tarea + formato + restricciones. Las 4 partes o la IA inventa.
- **Contrato técnico**: el bloque del enunciado que el alumno pega en sus prompts para que la IA no proponga React ni backend.
- **HU con criterios orientados a resultado**: el criterio describe lo que se ve en pantalla, nunca el código.
- **Ciclo prompt → crítica → re-prompt**: el output de la IA es un borrador que se audita, no una respuesta que se acepta.

---

## 🔗 Analogías Útiles

**IA sin contexto <> practicante sin briefing:**
Un practicante brillante al que le dices "hazme un informe" te entrega algo genérico. Con briefing (contexto, formato, restricciones) te entrega algo usable. La IA es ese practicante: velocísima, pero solo tan buena como tu briefing.

**Criterio de aceptación <> prueba de sonido:**
Antes del concierto no preguntas "¿el técnico conectó bien los cables?" — pides "que suene la guitarra por los monitores". Verificas resultados observables, no implementación.

**PROMPTS.md <> bitácora de laboratorio:**
Un científico no anota solo qué funcionó: anota qué descartó y por qué. Eso es lo que convierte el uso de IA en evidencia de criterio.

---

## 🎯 Momentos Clave de la Clase

### Demo Principal: planificar CON la IA en vivo (min 35-60)

Es el momento más importante del módulo: aquí modelas el estándar de trabajo de las próximas 4 clases.

**Qué mostrar:** toma la funcionalidad 1 del MVP (buscar canciones) y conviértela en HUs con la IA, frente a todos, en tres rondas:

1. **Prompt malo a propósito:** "hazme las historias de usuario de una app de música". Muestra el resultado: historias genéricas, features inventadas (login, social), criterios vagos.
2. **Prompt estructurado:** pega el contrato técnico + MVP, pide formato HU con criterios observables, restringe al MVP. Compara la diferencia en voz alta.
3. **Crítica en vivo:** aun el buen output tendrá defectos. Encuentra al menos uno (un criterio que describe código, una historia gigante) y re-promptea o corrígelo a mano.

**Script sugerido:**
```
Facilitador: "Le voy a pedir mal a propósito. Miren lo que pasa..."
[Prompt vago → output genérico]
Facilitador: "¿Qué inventó que NO está en el MVP?"
[Escuchar 2-3 respuestas]
Facilitador: "Ahora con contrato y restricciones. Misma IA, otro resultado."
```

**Plan B (si la herramienta de IA falla en vivo):** ten capturas de las tres rondas preparadas de antemano y nárralas. El punto pedagógico se sostiene igual.

---

## 💡 Prompts Listos para Usar

### Ronda 1 de la demo — el prompt malo (a propósito)

```text
hazme las historias de usuario de mi app de música
```

**Tip de facilitación:** deja que el output genérico hable solo. Pregunta al grupo: "¿qué inventó que no está en el MVP?"

### Ronda 2 de la demo — el prompt maestro (el estándar a modelar)

```text
CONTEXTO: Estoy construyendo "Mi Setlist", una app web con JavaScript
vanilla y módulos ESM (sin frameworks, sin backend, sin librerías de
estado). Arquitectura: estado central + render(), CRUD inmutable,
localStorage con try/catch, API de iTunes solo lectura. Soy una sola
persona y tengo 2 sprints de una clase cada uno.
El MVP tiene estas 10 funcionalidades: [pegar la lista del enunciado]

TAREA: Descompón este MVP en unas 8 historias de usuario.

FORMATO: Cada historia con "Como... quiero... para..." + 3 a 5
criterios de aceptación.

RESTRICCIONES: Los criterios describen resultados observables en
pantalla, nunca código ni nombres de funciones. No agregues nada
que no esté en el MVP. No sugieras librerías externas.
```

**Tip de facilitación:** nombra las 4 partes en voz alta mientras lo pegas. Es la plantilla que el alumno replica en el lab.

### Ronda 3 de la demo — re-prompts de crítica

```text
El criterio "la búsqueda usa fetch con async/await" describe
implementación. Reescríbelo como algo observable en pantalla.
```

```text
La HU de estadísticas mezcla duración total, género top y orden.
Es muy grande para una fracción de clase. Divídela.
```

### Para las rondas de la Parte 2 — distribución de sprints

Si un alumno está trabado, muéstrale este pedido:

```text
Estas son mis 8 historias finales: [pega HISTORIAS.md]
Propón cómo distribuirlas en Sprint 1 y Sprint 2 (una clase cada uno).
Justifica cada asignación, señala las dependencias y dime cuál
historia es la más difícil técnicamente.
```

**Tip de facilitación:** después del output, pregúntale al ALUMNO (no a la IA): "¿tu Sprint 1 termina en algo demostrable?"

### Transición al Lab

**Momento crítico:** el alumno pasa de ver a hacer, y la tentación es aceptar el primer output.

```
Facilitador: "Ahora ustedes. La meta NO es tener historias rápido:
es rechazarle algo a la IA y saber por qué. Ese rechazo vale más
que 10 historias aceptadas."
```

---

## 📋 Lista Maestra de HUs (NO pública — tu vara de validación)

El alumno deriva sus propias HUs; no tienen que coincidir palabra por palabra con estas, pero **el conjunto debe cubrir el MVP**. Usa esta tabla en las rondas:

| # | HU de referencia | Sprint | Cubre MVP |
|---|------------------|--------|-----------|
| 1 | Buscar canciones por artista/título y ver resultados (carátula, nombre, artista, duración) | 1 | 1 |
| 2 | Ver estados de carga, error y "sin resultados" en la búsqueda | 1 | 2 |
| 3 | Crear una playlist con nombre propio | 1 | 3 |
| 4 | Agregar canciones de los resultados a una playlist, verlas listadas y persistidas | 1 | 4, 5, 10 (parcial) |
| 5 | Quitar canciones y eliminar playlists con modal de confirmación | 2 | 6 |
| 6 | Ver duración total formateada y estadísticas (canciones, género top, artista top) | 2 | 7, 8 |
| 7 | Ordenar canciones (recientes/antiguas, alfabético) | 2 | 9 |
| 8 | Restaurar todo al recargar y resistir datos corruptos ("Empezar de cero") | 2 | 10 |

**Válido también:** fusionar 1+2, separar 6 en dos, mover 5 al Sprint 1. **Inválido:** playlists sin búsqueda previa, persistencia "para el final del Sprint 2", features fuera del MVP como historias base.

---

## 🚨 Señales de Alerta en las Rondas

| Señal | Qué está pasando | Qué hacer |
|-------|------------------|-----------|
| 12+ historias | Aceptó el output inflado de la IA | "¿Cuáles de estas caben en 2 clases? Fusiona o recorta" |
| Criterios tipo "usa fetch con try/catch" | Confunde criterio con implementación | Volver a la regla: ¿se VE en pantalla? |
| HU "compartir en redes" o "login" | La IA inventó alcance y no lo filtró | Señalar el MVP: ¿en qué punto está eso? |
| PROMPTS.md vacío al min 100 | Usa la IA sin registrar nada | Recordar que es entregable y parte de la rúbrica |
| Sus HUs son el output crudo de la IA (mismo texto y orden) | No está criticando, solo consumiendo | Auditar 2 HUs juntos con la tabla de checks del lab |
| Copió el contrato pero no lo lee | Ritual sin comprensión | Pregunta: "¿por qué el contrato prohíbe confirm()?" |

---

## 🎯 Checkpoints de Validación

| Minuto | Checkpoint | Cómo validar | Si no cumple |
|--------|------------|--------------|--------------|
| 15 | Módulo presentado | Entienden que el lab ya no trae código | Reforzar: "el código sale de ustedes + IA" |
| 35 | Enunciado claro | Nadie pregunta "¿qué vamos a construir?" | Releer MVP en voz alta, resolver dudas de alcance |
| 60 | Demo cerrada | Pueden nombrar las 4 partes del prompt | Repetir ronda 2 vs ronda 1 en 3 minutos |
| 105 | HUs listas | `HISTORIAS.md` ~8 HUs + `PROMPTS.md` con ≥2 entradas | Sentarse con el alumno y criticar 1 HU juntos |
| 130 | Sprints planificados | `SPRINTS.md` con metas y dependencias | Pregunta guía: "¿qué necesitas ANTES de poder hacer X?" |
| 165 | Repo corriendo | "Módulos ESM funcionando ✅" en Live Server | Verificar `file://` vs Live Server, orden de imports |
| 180 | Standup cerrado | Todos mostraron repo + reto en 30 seg | Los que falten lo mandan por el canal de entrega |

---

## ⚠️ Errores Comunes

| Señal | Qué está pasando | Qué hacer |
|-------|------------------|-----------|
| "CORS policy" o import falla | Abrió `index.html` con doble clic | Live Server; ESM no corre en `file://` |
| La IA le respondió con React | No incluyó el contrato en el prompt | Pegar contrato + re-prompt; es el ejemplo perfecto de por qué existe |
| "Ya terminé" en 20 min | Aceptó todo sin criticar | Auditar 2 HUs con la lista maestra; suele faltar cobertura del MVP |
| Parálisis: no sabe qué pedirle a la IA | Nunca conversó con una IA | Sentarse 3 min, escribir el primer prompt juntos con la plantilla del lab |
| Quiere empezar a codear la app | Ansiedad de producto | "El Sprint 1 es en 48h. Hoy planificar ES avanzar" |

---

## ✅ Señales de Comprensión

### El estudiante ENTIENDE cuando:
- Sus HUs difieren del output crudo de la IA y puede decir qué cambió y por qué.
- Puede explicar por qué una HU va en Sprint 1 y no en Sprint 2.
- Re-promptea con restricciones nuevas en lugar de aceptar el segundo intento.

### El estudiante NECESITA AYUDA cuando:
- Sus HUs son idénticas al output crudo de la IA (mismos textos, mismo orden).
- No puede decir qué funcionalidad del MVP cubre una de sus historias.
- Su plan pone todo lo difícil en el Sprint 2.

---

## ❓ Preguntas Frecuentes

### P: ¿Y si un alumno no tiene cuenta en la herramienta de IA?
**R:** La versión gratuita basta. Si hay bloqueo (correo, teléfono), que trabaje en pareja esta clase y resuelva la cuenta antes de C18 — en Sprint 1 es indispensable.

### P: ¿Puedo darles yo las historias si van muy lento?
**R:** No las entregues: valida contra la lista maestra y guía con preguntas. Un alumno con 6 HUs propias bien criticadas está mejor parado que uno con 8 copiadas. El mínimo para C18 es tener el Sprint 1 definido.

### P: ¿Qué herramienta de IA usamos?
**R:** La que defina la coordinación (pendiente). La clase funciona igual con cualquier chat de IA generalista; lo que se enseña es el método, no la herramienta.

### P: ¿La rúbrica evalúa "usar mucho la IA"?
**R:** No: evalúa **criterio**. Un PROMPTS.md corto y honesto, más la capacidad de explicar su código en el Q&A, vale más que 20 prompts pegados sin análisis.

---

## 🔗 Conexiones del Curriculum

### Esta clase construye sobre:

| Clase | Concepto | Cómo se conecta |
|-------|----------|-----------------|
| C16 | Módulos ESM | La estructura del repo de hoy es la arquitectura con la que cerraron M4 |
| C13-C15 | Estado + render, localStorage | El contrato técnico exige exactamente esos patrones |
| C12 | try/catch, estados de UI | Aparecerán como criterios en las HUs de búsqueda |

### Conexión con la Próxima Clase

> "En 48 horas esto deja de ser un plan. La Clase 18 es Sprint 1: búsqueda en la API de iTunes funcionando, con ustedes al teclado y la IA de copiloto. Traigan el repo listo y las HUs frescas."

**Pre-work implícito:** si algún alumno no cerró el checkpoint del repo, debe llegarlo resuelto a C18.

---

## 🪞 Reflexión Post-Clase

- ¿Quiénes aceptaron el output de la IA sin criticar? Son tu foco de rondas en C18.
- ¿El grupo entendió el formato nuevo, o hubo ansiedad por "no recibir código"? Ajustar el briefing de C18.
- ¿La demo en vivo funcionó o el Plan B fue necesario? Documentar para la próxima cohorte.
- ¿Algún plan de sprints quedó tan frágil que amerita mensaje antes de C18?
