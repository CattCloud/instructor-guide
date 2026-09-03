# Lab 19: IA como Corrector + Sprint 2

> 🧭 Hoy la IA cambia de rol: deja de escribir contigo y pasa a **auditar lo que construiste**. Después replanificas, cierras el Sprint 2, defines tus HUs propias y publicas tu app.

## 🎯 Objetivos

1. Auditar tu Sprint 1 con la IA: revisión de código contra el contrato + plan de pruebas que TÚ ejecutas.
2. Implementar las HUs restantes del MVP con el plan replanificado y publicar en GitHub Pages.
3. Definir tus 2 HUs propias con criterios, para implementar antes del Demo Day.

---

## 🔑 Conceptos Clave

- **Code review** - Revisión sistemática del código buscando problemas, no confirmación de que "funciona".
- **Caso borde** - Situación extrema o rara (datos corruptos, lista vacía, texto con espacios) donde los bugs viven.
- **Hallazgo con severidad** - Problema clasificado: crítico (rompe la app) / mayor (flujo confuso o deuda) / menor (pulido).
- **HU propia** - Historia que TÚ propones más allá del MVP. Se define con la IA, se implementa al menos una.

---

## ⚙️ Setup Inicial

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | Sprint 1 cerrado | Búsqueda + playlists persistidas funcionan en Live Server |
| ☐ | Todo pusheado a `main` | `git status` limpio |
| ☐ | **GitHub Copilot** activo en VS Code | El chat responde a `@workspace ¿qué archivos tiene mi proyecto?` |
| ☐ | Chat web de IA con tu contrato | Para el brainstorm de HUs propias |
| ☐ | DevTools a la mano | Pestañas Console y Application |

> ⚠️ Si tu Sprint 1 no cerró, díselo al instructor AHORA: tu prioridad de hoy será el MVP, no las HUs propias.

---

## Parte 1: Auditoría con Copilot (30 min)

La auditoría se hace con **GitHub Copilot en VS Code**: como tiene acceso a TODO tu proyecto (`@workspace`), encuentra problemas entre archivos que un chat viendo un archivo suelto no ve. Úsalo en **modo Ask** (pregunta), nunca en modo que edite archivos.

> 💰 **Presupuesto:** el plan gratuito da ~50 mensajes de chat al mes. La auditoría completa debería costarte 3-4. Pide con intención.

### 1.1 Pide el code review

En el chat de Copilot (modo Ask):

```text
@workspace Haz un code review de mi proyecto contra este contrato:
[contrato técnico]. Busca específicamente: mutaciones directas del
estado, faltas de try/catch en storage.js, render olvidado tras
cambios de estado, funciones exportadas que nadie importa, ids que
no usan randomUUID y fechas sin rehidratar al cargar.

FORMATO: Lista de hallazgos con archivo y línea, cada uno con
severidad (crítico / mayor / menor) y por qué.

RESTRICCIONES: NO edites ningún archivo ni me des código corregido
todavía. Solo hallazgos.
```

### 1.2 Pide el plan de pruebas — y ejecútalo TÚ

En el mismo chat:

```text
@workspace Ahora dame un plan de 6 a 8 pruebas manuales para mi app,
priorizando casos borde: datos corruptos en localStorage, playlist
vacía, búsqueda sin resultados, nombres duplicados o con espacios,
recarga tras eliminar. Formato: paso a paso + resultado esperado.
```

Ejecuta cada prueba **en tu navegador, a mano**, y anota pasó/falló. La IA diseña las pruebas; el veredicto sale de tu pantalla, no de su opinión.

> 💡 Para la prueba de datos corruptos: DevTools → Application → LocalStorage → edita el valor a `{malformado}` → recarga. Tu app debe ofrecer "Empezar de cero", no morir.

### 1.3 Triage: arregla, anota o descarta (sin documentos nuevos)

- **Críticos** (rompen la app): se arreglan **AHORA**, con el ritual de C18 — un hallazgo, una porción, probar.
- **Mayores** (deuda, flujo confuso): se anotan como ítems del `SPRINTS.md` v2 en la siguiente parte.
- **Menores** (pulido): se descartan. Hoy no hay tiempo para cosmética.

✅ **Checkpoint (~min 60):** Los críticos están corregidos — la prueba de datos corruptos pasa ("Empezar de cero", no pantalla blanca) — y tienes claros tus mayores para el plan.

---

## Parte 2: Replanifica tu Sprint 2 — solo si hace falta (10 min)

Replanificar no es obligatorio. Pregúntate dos cosas:

- ¿La auditoría dejó hallazgos **mayores**? → entran al plan.
- ¿Arrastras HUs pendientes del Sprint 1? → el plan debe reflejarlo.

Si ambas respuestas son "no" (Sprint 1 cerrado y auditoría limpia), tu `SPRINTS.md` original sigue vigente: agrega una línea de confirmación ("Plan sin cambios — auditoría sin mayores") y pasa directo al bloque de trabajo. Ganaste 10 minutos.

✅ **Checkpoint (~min 75):** Tu plan del Sprint 2 está vigente (v2 o confirmado): sabes exactamente qué construyes en la próxima hora y cuarto.

---

## Parte 3: Bloque de trabajo — Sprint 2 (75 min)

Mismo **ritual de implementación** de la Clase 18, HU por HU según TU plan. Recordatorios del contrato para las HUs típicas de este sprint:

| Pieza | Recuerda |
|-------|----------|
| Ordenar | Copia antes de ordenar: `[...canciones].sort(...)` — nunca mutes el estado |
| Confirmar eliminación | Modal PROPIO (patrón `pedirConfirmacion` de C16), nada de `confirm()` |
| Duración total / stats | Función pura sobre el estado (`reduce`); milisegundos → "1 h 23 min" |
| Robustez | Al cargar, valida la estructura del JSON; si es inválida → mensaje + "Empezar de cero" |

✅ **Checkpoint (~min 150):** Eliminas una canción y aparece TU modal; al confirmar, stats y duración se actualizan solas; el orden funciona; el localStorage corrupto muestra "Empezar de cero". Consola limpia.

---

## Parte 4: Define tus 2 HUs propias (10 min)

Ahora que tu app está completa, decide qué feature lleva TU firma. Pide ideas en el **chat web** (no en Copilot: no necesita ver código y no gasta tu presupuesto):

```text
Mi app hace: [resumen de tu MVP actual]. Propón 5 features pequeñas
"de producción" que aporten valor real al usuario, factibles con mi
contrato (sin backend ni librerías). Una línea cada una.
```

Elige 2, redáctalas como HU con criterios (misma auditoría de la Clase 17: observables, tamaño sano, dentro del contrato) y agrégalas a `HISTORIAS.md`. **Implementarás al menos 1 de forma asíncrona antes del Demo Day** (las de inspiración del enunciado: favoritos, filtros, deshacer...).

✅ **Checkpoint (~min 160):** 2 HUs propias con criterios en `HISTORIAS.md`, con la elegida para implementar marcada.

---

## 🚀 Publica tu app (últimos 20 min)

1. En GitHub: **Settings → Pages → Deploy from a branch → `main` / root → Save**.
2. Espera el build (~1-2 min) y abre la URL `https://TU_USUARIO.github.io/mi-setlist/`.
3. Prueba el flujo completo EN la URL pública (busca, agrega, recarga).

> 💡 ESM funciona en Pages sin cambios (es `https://`). Si algo no carga, revisa que las rutas de import sean relativas (`./`).

✅ **Checkpoint final:** Tu app vive en una URL pública y el flujo completo funciona ahí.

---

## 📝 Entrega

### Checklist

- [ ] Auditoría ejecutada: críticos corregidos (datos corruptos no rompen la app).
- [ ] MVP completo o con plan concreto de cierre asíncrono antes del Demo Day.
- [ ] 2 HUs propias definidas en `HISTORIAS.md` (≥1 implementada antes del Demo Day).
- [ ] Deploy público funcionando.
- [ ] ≥4 commits nuevos + `PROMPTS.md` actualizado.

### Qué entregar

- **Link al repositorio** y **link al deploy público**.
- Standup de cierre: prometido vs demostrado + qué cierras asíncrono.

> ⚠️ **Tarea asíncrona antes del Demo Day (Clase 20):**
>
> 1. Cierra lo que quedó pendiente del MVP.
> 2. Implementa tu HU propia elegida.
> 3. **Segunda pasada de auditoría:** corre el mismo prompt de review de Copilot (`@workspace`, modo Ask) sobre los archivos que tocaste en el Sprint 2 (~3 requests) y arregla cualquier crítico. Así llegas al Demo Day con TODO tu código auditado.

---

> ### 💡 Consejos
>
> - No "arregles" nada que la IA señale sin comprobarlo antes en tu app: los correctores también alucinan.
> - Críticos primero, siempre. Un modo oscuro precioso no compensa una app que muere al recargar.
> - Tu HU propia es tu momento de brillar en el Demo Day: elige algo que TÚ usarías, no lo más fácil.
