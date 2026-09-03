# Lab 18: Sprint 1 — Construye con tu Copiloto

> 🧭 Este lab no trae el código de tu app. Trae el **ritual de implementación**: cómo convertir cada HU en código funcionando, con la IA preguntándote antes de codear y tú tomando las decisiones.

## 🎯 Objetivos

1. Implementar las HUs de tu Sprint 1 usando el prompt de implementación en modo interactivo.
2. Tomar y registrar decisiones propias (UX, casos borde, datos) respondiendo las preguntas de la IA.
3. Cerrar cada HU contra sus criterios de aceptación, con un commit por historia.

---

## 🔑 Conceptos Clave

- **Prompt de implementación** - Contexto + HU + modo + restricciones. Pide código en porciones, no la app entera.
- **Modo interactivo** - Le exiges a la IA que te haga 2-3 preguntas estratégicas ANTES de darte código. Tú respondes, ella implementa lo que TÚ decidiste.
- **Slice** - Porción mínima probable de una HU. Se implementa, se prueba, se commitea.
- **Rate limit** - La API acepta ~20 solicitudes/minuto. Búsqueda con botón, nunca en cada tecla.

---

## ⚙️ Setup Inicial

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | Repo de C17 corriendo | Live Server muestra tu hola mundo ESM sin errores |
| ☐ | `SPRINTS.md` a la vista | Sabes qué HU atacas primero |
| ☐ | `HISTORIAS.md` con criterios | Cada HU del Sprint 1 tiene sus criterios claros |
| ☐ | Sesión de IA activa | Con el contrato técnico ya pegado en el chat |

> ⚠️ Si no cerraste el checkpoint de C17, resuélvelo en los primeros 15 minutos con apoyo del instructor.

---

## 🔁 El ritual de implementación (tu referencia — aquí no se codea aún)

Esta sección no produce código: es el **ciclo que repetirás con cada HU** en las Partes 1 y 2. Léela después de la demo del instructor y vuelve a ella cada vez que abras una HU nueva:

> **prompt interactivo → tus decisiones → código en porciones → probar contra criterios → commit → registrar**

### El prompt de implementación (modo interactivo)

```text
CONTEXTO: [contrato técnico] Mi proyecto ya tiene: [describe qué hay
en cada archivo js/ o pega el código relevante].

TAREA: Implementemos JUNTOS esta historia:
[pega la HU con sus criterios de aceptación]

MODO: Antes de escribir código, hazme 2 o 3 preguntas estratégicas
sobre decisiones que me corresponden a mí (experiencia de usuario,
casos borde, estructura de datos). Espera mis respuestas. Después
dame el código en porciones pequeñas, explicando qué hace cada una
y en qué archivo va.

RESTRICCIONES: Respeta el contrato. No reescribas archivos que no
te pedí. Si el contrato te impide algo, dímelo en vez de saltártelo.
```

### Responde como dueño del producto

Las preguntas de la IA serán del estilo: *¿la búsqueda se dispara con botón o al tipear? ¿qué muestro si no hay resultados? ¿una canción puede repetirse en la playlist? ¿guardo la duración en milisegundos o formateada?*

No hay respuesta única — **tu respuesta es una decisión de diseño**. Decide con dos criterios: el contrato (ej: rate limit → botón) y tu MVP. Anota las decisiones importantes: son tu argumentación del Demo Day.

### Prueba, commitea, registra

- Prueba la porción contra los **criterios de la HU** (no contra "se ve bien").
- HU terminada = commit: `feat: HU búsqueda con estados de UI`.
- Registra en `PROMPTS.md` el prompt clave de la HU y las decisiones que tomaste.

> 💡 **Tip:** Si la IA te da un archivo entero de 100 líneas, no lo pegues: pídele la porción de UNA función y su explicación. Código que no entiendes = deuda para el Q&A.
>
> 💰 **Herramientas hoy:** el modo interactivo vive bien en el **chat web** (gratis, ilimitado en la práctica). Usa **Copilot** en VS Code solo para porciones puntuales sobre tu código — su plan gratuito da ~50 mensajes/mes y la auditoría de la Clase 19 los necesita.

---

## Parte 1: Bloque de trabajo 1 — tu primera HU (60 min)

**El orden lo manda TU `SPRINTS.md`**, no este lab. Eso sí: la búsqueda en la API es la dependencia de casi todo (sin ella no hay canciones que agregar), así que si tu plan la dejó para el final, este es el momento de cuestionar tu plan.

Guía de dónde va cada cosa cuando trabajes cada pieza (tu contrato lo exige):

| Pieza | Archivo |
|-------|---------|
| `fetch` al endpoint + adaptación del JSON | `js/api.js` |
| Modelo de canción (`class Cancion`) | `js/models/Cancion.js` |
| Pintar resultados y estados carga/error/vacío | `js/ui.js` |
| Conectar el formulario de búsqueda | `js/app.js` |

Reglas de la API (van también en tus prompts):

- Endpoint: `https://itunes.apple.com/search?term=PALABRAS&entity=song&limit=10`
- Buscar con **botón** (submit), nunca en cada tecla.
- Respuesta `403` = te pasaste del límite → espera un minuto.
- Campos útiles: `trackName`, `artistName`, `artworkUrl100`, `trackTimeMillis`, `primaryGenreName`.

✅ **Checkpoint mitad de sprint (~min 90):** Sea cual sea tu orden, aquí la **búsqueda debe estar viva** (es la barra común del grupo): buscas "Soda Stereo" y ves resultados con carátula, nombre y artista; indicador mientras carga, mensaje de error sin WiFi, estado vacío con "zzzzz". Además, al menos una HU tuya cerrada con commit.

---

## Parte 2: Bloque de trabajo 2 — el resto de tu Sprint 1 (60 min)

Continúa con tu plan: **mismo ritual, HU por HU**, cerrando cada una antes de abrir la siguiente.

Recordatorios del contrato para tus decisiones y tus prompts:

- Ids con `crypto.randomUUID()`; agregar/quitar **inmutable** (`.filter`/`.map`/spread).
- Cada cambio de estado termina en `guardar()` → `render()`. Siempre ese orden.
- `storage.js` envuelve `localStorage` + `JSON.parse` en `try/catch`.
- La fecha de agregado es un `Date` → recuerda rehidratarla al cargar (lo viste en C15).

✅ **Checkpoint de cierre (~min 155):** Creas la playlist "Road trip", le agregas 2 canciones desde los resultados, **recargas la página** y siguen ahí. Consola sin errores.

---

## 🛠️ Errores frecuentes

| Síntoma | Causa probable | Salida |
|---------|----------------|--------|
| Error CORS o import falla | Abriste con `file://` | Live Server |
| `403` de la API | Rate limit (buscaste demasiado) | Espera 1 min; verifica que buscas con botón |
| "Failed to resolve module" | Ruta de import mal escrita | Rutas relativas con `./` y extensión `.js` |
| Agrego canción y no se ve | Cambiaste estado sin llamar `render()` | Revisa el ciclo guardar → render |
| Al recargar, la fecha sale rara | No rehidrataste el `Date` | `new Date(texto)` al cargar |

> 💡 **Prompt de depuración:** pega el error COMPLETO + el código de la función sospechosa y pide: "explícame la causa antes de darme la solución".

---

## 📝 Entrega

### Checklist

- [ ] **Mínimo innegociable:** búsqueda con estados de UI + agregar canciones a una playlist que sobrevive al recargar.
- [ ] Ideal: todas las HUs de tu Sprint 1 demostrables.
- [ ] ≥3 commits nuevos pusheados (uno por HU).
- [ ] `PROMPTS.md` actualizado con prompts y decisiones del día.
- [ ] `SPRINTS.md` ajustado si tu alcance real cambió.

### Qué entregar

- **Link a tu repositorio** con los commits del Sprint 1.
- Participar en el **standup de cierre**: qué prometió tu `SPRINTS.md` vs qué demuestras, y qué te llevas de tarea asíncrona.

> ⚠️ Lo que no cierres hoy se termina **antes de la Clase 19**: la validación cruzada necesita tu Sprint 1 completo.

---

> ### 💡 Consejos
>
> - Una HU completa vale más que cuatro empezadas. Cierra antes de abrir.
> - Cuando la IA te pregunte, no respondas "lo que sea mejor": esa decisión es tuya y te la preguntarán en el Demo Day.
> - `console.log(state)` sigue siendo tu mejor amigo, con o sin IA.
