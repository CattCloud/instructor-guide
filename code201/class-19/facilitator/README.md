# Guía del Facilitador - Clase 19: IA como Corrector + Sprint 2

> Tiempo de lectura: 9 minutos | Prepárate antes de clase

La clase con más piezas del módulo: auditoría, replanificación, Sprint 2, HUs propias y deploy — en ese orden: el MVP se protege primero y la creatividad cierra. Tu rol tiene dos caras: **QA lead** en la primera hora (que nadie acepte un review sin ejecutar las pruebas) y **coach de producto** al final (que las HUs propias sean de producción y de tamaño sano). El reloj es tu herramienta principal: los timeboxes de hoy no se estiran, porque el Demo Day no se mueve.

---

## 🔑 Conceptos Clave

- **IA como correctora**: tercer rol del módulo. Hoy encarnada en **GitHub Copilot** (plan Free) dentro de VS Code: con `@workspace` ve el proyecto completo y detecta problemas entre archivos. Siempre en modo Ask — revisa y diseña pruebas, pero el alumno ejecuta y decide.
- **Presupuesto de requests**: el plan gratuito da ~50 mensajes/mes. La auditoría cuesta 3-4; los brainstorms van al chat web. "Cada request cuesta" es lección, no estorbo.
- **Hallazgo con severidad**: crítico (rompe la app) / mayor (deuda, entra al plan) / menor (pulido, solo si sobra tiempo).
- **HU propia**: 2 se definen hoy con la IA; ≥1 se implementa antes del Demo Day (10 pts de rúbrica).
- **Deploy en Pages**: requisito duro de C20. Nadie sale hoy sin URL pública funcionando.

---

## 🔗 Analogías Útiles

**Review de IA <> corrector ortográfico:**
Marca cosas reales y cosas que no lo son, y no detecta que el párrafo entero sobra. Útil, rápido, jamás definitivo: por eso las pruebas se ejecutan en la app real.

**Casos borde <> probar la casa con lluvia:**
Cualquier techo funciona en verano. La calidad se ve con tormenta: datos corruptos, listas vacías, nombres raros. Hoy llueve a propósito.

**HU propia <> plato de autor:**
El MVP es el menú que todos sirven; la HU propia es el plato que lleva tu firma. En el Demo Day es lo que hace memorable una presentación entre 25 apps iguales.

---

## 🎯 Momentos Clave de la Clase

### Demo Principal: el corrector en vivo (min 10-30)

En VS Code, con tu proyecto del slice abierto (o uno con 2-3 defectos sembrados a propósito: una mutación directa, un `getItem` sin try/catch). Abre el chat de Copilot en **modo Ask** y deja claro el porqué: "este agente ve TODO el proyecto — por eso puede encontrar el render que nadie llama".

1. Pega el **prompt de revisión con `@workspace`** (abajo). Lee los hallazgos en voz alta, verifica que citen archivo y línea, y clasifícalos.
2. Pide el **plan de pruebas** y ejecuta 2 en vivo — incluida la de datos corruptos (Application → editar valor → `{malformado}` → recargar).
3. Muestra el momento clave: **verificar un hallazgo antes de aceptarlo**. Ideal si la IA marca algo discutible: "¿esto es cierto? Vamos a la app… no, aquí no aplica. Los correctores también alucinan".

**Script sugerido:**
```
Facilitador: "Le pedí hallazgos, NO soluciones. Primero entiendo
qué está mal y qué tan grave es. Arreglar sin entender es como
tomar pastillas sin diagnóstico."
[Ejecuta la prueba de datos corruptos]
Facilitador: "Esto es un crítico: el usuario pierde todo. Se
arregla antes que cualquier otra cosa."
```

**Plan B (si Copilot falla o el límite se agotó):** el método clásico — pegar `state.js` + `storage.js` en el chat web con el mismo prompt sin `@workspace`. Pierde la vista entre archivos, pero la clase fluye. La prueba de datos corruptos se hace igual en vivo — no depende de la IA.

### Transición al Lab

```
Facilitador: "30 minutos de auditoría. La meta es encontrar el bug
que los iba a avergonzar en el Demo Day. Encuéntrenlo hoy, que
todavía es gratis. Críticos se arreglan ya; mayores van al plan;
menores se sueltan."
```

---

## 💡 Prompts Listos para Usar

### Review de código con Copilot (demo y rondas — modo Ask)

```text
@workspace Haz un code review de mi proyecto contra este contrato:
[contrato técnico]. Busca: mutaciones directas del estado, try/catch
faltante en storage.js, render olvidado tras cambios de estado,
funciones exportadas que nadie importa, ids sin randomUUID, fechas
sin rehidratar.
FORMATO: hallazgos con archivo y línea + severidad (crítico/mayor/menor).
RESTRICCIONES: NO edites archivos ni me des código corregido. Solo hallazgos.
```

### Plan de pruebas (mismo chat de Copilot)

```text
@workspace Dame un plan de 6-8 pruebas manuales para mi app,
priorizando casos borde: localStorage corrupto, playlist vacía,
búsqueda sin resultados, nombres duplicados o con espacios,
recarga tras eliminar. Formato: pasos + resultado esperado.
```

### Brainstorm de HUs propias (para la fase 2 — en el chat WEB, no en Copilot)

```text
Mi app hace: [resumen]. Propón 5 features pequeñas "de producción"
con valor real para el usuario, factibles con mi contrato (sin
backend ni librerías). Una línea cada una.
```

**Tip de facilitación:** cuando el alumno elija, pregúntale "¿por qué esa?". Si la respuesta es "era la más fácil", empújalo un nivel: la HU propia es su material de Demo Day.

---

## 🚨 Señales de Alerta en las Rondas

| Señal | Qué está pasando | Qué hacer |
|-------|------------------|-----------|
| Auditoría "lista" en 10 min, sin nada que arreglar | Aceptó el review sin ejecutar pruebas | "Corrompe tu localStorage ahora, delante de mí" |
| Arregla menores antes que críticos | Prioriza lo cómodo | Regla: crítico → mayor → menor, en ese orden |
| HU propia tipo "compartir con amigos en línea" | Fuera del contrato (backend) | Redirigir a la lista de inspiración del enunciado |
| Min 100 y sigue puliendo el Sprint 1 | No suelta; el MVP se le escapa | Timebox duro: "lo que falta va a REVIEW.md, sigue con el plan" |
| Pide a la IA que "arregle todo" tras el review | Vuelve al modo expendedora | Ritual de C18: un hallazgo → una porción → probar |
| Usó Copilot en modo agente y le editó medio repo | Perdió el control del diagnóstico | `git diff` juntos; si no explica los cambios, revertir y modo Ask |
| Quemó sus ~50 requests del mes | Usó Copilot para brainstorms/charla | Plan B: chat web pegando archivos; recordar la división de herramientas |

---

## 🎯 Checkpoints de Validación

| Minuto | Checkpoint | Cómo validar | Si no cumple |
|--------|------------|--------------|--------------|
| 10 | Estado real del grupo | Standup: quién cerró Sprint 1 | Los que no: su prioridad es MVP, sin HU propia hoy |
| 30 | Demo entendida | Distinguen hallazgo de idea; severidad por impacto | Repasar la COMPROBACIÓN de los slides |
| 60 | Auditoría cerrada | Críticos corregidos: prueba de corruptos pasa | Sentarse y correr las 2 pruebas clave juntos |
| 75 | Plan vigente | `SPRINTS.md` v2 (si hubo mayores/pendientes) o confirmado sin cambios | Pregunta guía: "¿qué construyes en la próxima hora?" |
| 150 | MVP completo | Modal propio + stats/orden funcionando + robustez | Anotar pendientes exactos para cierre asíncrono |
| 160 | 2 HUs propias definidas | En `HISTORIAS.md` con criterios, 1 marcada | Validar tamaño: "¿cabe en una sesión asíncrona?" |
| 172 | Deploy activado | URL pública con flujo completo probado | Diagnóstico: ¿build pendiente? ¿rutas sin `./`? |
| 180 | Standup final | Prometido vs demostrado + plan asíncrono declarado | Registrar quiénes quedan en riesgo para C20 |

---

## ⚠️ Errores Comunes

| Señal | Qué está pasando | Qué hacer |
|-------|------------------|-----------|
| Pages da 404 | Build aún corriendo o Pages sin activar | Esperar 2 min; verificar Settings → Pages |
| App en blanco en Pages pero funciona local | Rutas absolutas o sin `./` en imports | Corregir a rutas relativas |
| El orden reordena "para siempre" | `.sort()` mutó el estado | `[...canciones].sort(...)` — copia primero |
| `confirm()` nativo apareció | Olvidó el patrón de C16 | Señalar su propio código de M4 como referencia |
| Stats no cuadran tras eliminar | Cálculo sobre copia vieja del estado | Función pura que recibe el estado actual en cada render |

---

## ✅ Señales de Comprensión

### El estudiante ENTIENDE cuando:
- Rebate un hallazgo de la IA con evidencia ("lo probé y no aplica, porque...").
- Decide las severidades él mismo ("esto es mayor, no crítico, porque...") en vez de heredar las de la IA.
- Explica su HU propia en términos de usuario, no de código.

### El estudiante NECESITA AYUDA cuando:
- Su "auditoría" es el texto de la IA pegado sin resultados de pruebas.
- Al min 100 no ha tocado ninguna HU del Sprint 2.
- Su deploy falla y no distingue si es problema de build o de código.

---

## ❓ Preguntas Frecuentes

### P: ¿Y el que llegó sin Sprint 1 cerrado?
**R:** Triage: hoy hace auditoría express (15 min) y dedica todo lo demás al MVP. Sin HU propia — los 10 pts se sacrifican, el MVP no. Regla del módulo: MVP > HU propia > pulido.

### P: ¿La validación con humanos desapareció del todo?
**R:** Del lab, sí (la reemplaza la auditoría con IA). Si te sobra energía al cierre, un intercambio informal de 3 minutos en parejas ("usa la app del vecino sin que te explique") es un gran complemento — opcional, sin formato.

### P: ¿Qué hago si a un alumno la IA le "aprueba todo"?
**R:** Es el momento educativo de la clase: siéntate, corrompe su localStorage y recarga. Si la app muere, el review "todo perfecto" queda desmentido en vivo. Lección: verificar > confiar.

### P: ¿Y si un alumno agotó su límite gratuito de Copilot?
**R:** Método clásico: pegar los archivos relevantes en el chat web con el mismo prompt (sin `@workspace`). Si el problema es recurrente en la cohorte, el rescate es Cline o Continue (extensiones open source de VS Code) con API key gratuita de Gemini — pero solo como plan B: es fricción de setup que no queremos en clase.

### P: ¿Las 2 HUs propias pueden ser las mismas entre alumnos?
**R:** Pueden coincidir (favoritos será popular), pero cada quien la implementa y la defiende solo. En Q&A del Demo Day se nota de inmediato quién decidió y quién copió.

---

## 🔗 Conexiones del Curriculum

### Esta clase construye sobre:

| Clase | Concepto | Cómo se conecta |
|-------|----------|-----------------|
| C16 | Modal propio + `.sort()` inmutable | Hoy los reutilizan en su propia app |
| C14 | Datos derivados (funciones puras) | Stats y duración total son ese patrón |
| C12 | try/catch + estados de UI | La robustez ante datos corruptos los integra |
| C18 | Ritual de implementación | El Sprint 2 lo ejecuta sin cambios |

### Conexión con la Próxima Clase

> "Lo que tienen publicado hoy es lo que presentan en el Demo Day. De aquí a la Clase 20: cerrar pendientes, pulir el README y ensayar los 10 minutos una vez, solos, con reloj."

**Pre-work implícito:** cierre asíncrono de pendientes + README del repo completo + ensayo individual.

---

## 🪞 Reflexión Post-Clase

- ¿Quiénes quedaron sin deploy o sin MVP completo? Mensaje directo hoy mismo: son riesgo de Demo Day.
- ¿La auditoría encontró bugs reales o fue trámite? Anota los mejores hallazgos: sirven para abrir C20.
- ¿Qué HUs propias prometieron? Llévalas anotadas al Demo Day para el Q&A.
- ¿El timebox aguantó las 4 fases? Si el deploy quedó apretado, considera moverlo a min 150 la próxima cohorte.
