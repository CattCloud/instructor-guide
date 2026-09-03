# Lab 17: Planifica tu Proyecto con la IA

> 🧭 **Nuevo formato de lab.** A partir de este módulo el lab ya no trae el código: trae la misión, los tiempos y los criterios. El código de tu app lo escribes tú, junto con la IA y con el instructor como mentor.

## 🎯 Objetivos

1. Descomponer el MVP de Mi Setlist en historias de usuario propias trabajando con la IA.
2. Planificar la distribución de las historias en dos sprints con dependencias justificadas.
3. Configurar el repositorio con la estructura ESM del contrato técnico y un primer commit funcional.

---

## 🔑 Conceptos Clave

- **Contrato técnico** - El bloque de stack + arquitectura + prohibiciones del enunciado. Es tu contexto para cada prompt.
- **Prompt estructurado** - Contexto + tarea + formato + restricciones. Sin las 4 partes, la IA inventa.
- **Historia de usuario (HU)** - "Como [rol] quiero [acción] para [beneficio]", con criterios de aceptación observables.
- **Sprint** - Ventana de trabajo con meta concreta. Sprint 1 = Clase 18, Sprint 2 = Clase 19.

---

## ⚙️ Setup Inicial

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | Leíste el [enunciado del proyecto](../project/) | Puedes decir qué es Mi Setlist en una línea |
| ☐ | Cuenta de GitHub activa y Git configurado | `git config user.name` retorna tu nombre |
| ☐ | VS Code con Live Server | Abre desde la terminal con `code .` |
| ☐ | Sesión iniciada en tu chat de IA | Puedes enviar un prompt y recibir respuesta |
| ☐ | Extensión **GitHub Copilot** instalada (plan Free) | El ícono de Copilot aparece en VS Code — la usarás desde la Clase 18 |

---

## Parte 1: Descompón el MVP en historias de usuario (45 min)

El enunciado te da 10 funcionalidades del MVP, pero **no te da las historias**. Vas a derivarlas con la IA y quedarte solo con lo que resista tu crítica.

### 1.1 Arma tu primer prompt con las 4 partes

```text
[CONTEXTO]  Pega aquí el contrato técnico del enunciado + la lista del MVP.
[TAREA]     Pídele descomponer el MVP en historias de usuario para UNA persona
            desarrollando en 2 sprints de una sesión cada uno.
[FORMATO]   Historia ("Como... quiero... para...") + 3-5 criterios de aceptación.
[RESTRICCIÓN] Los criterios describen RESULTADOS observables en pantalla,
            no implementación. Nada fuera del MVP.
```

### 1.2 Audita cada historia (la IA se equivoca con confianza)

Pasa cada HU por esta tabla. Si falla un check, **corrígela tú o re-promptea**:

| Check | ❌ Falla | ✅ Pasa |
|-------|---------|--------|
| ¿Resultado observable? | "La búsqueda usa fetch con async/await" | "Al buscar 'Soda Stereo' aparecen resultados con carátula y artista" |
| ¿Tamaño razonable? | 1 HU = "toda la gestión de playlists" | 1 HU = "crear una playlist con nombre" |
| ¿Dentro del MVP? | "Compartir en redes", "login de usuarios" | Solo las 10 funcionalidades del enunciado |
| ¿Cobertura completa? | Ninguna HU cubre los datos corruptos | Cada punto del MVP tiene una HU dueña |

Re-prompts útiles para corregir (cópialos y adáptalos):

```text
El criterio "___" describe implementación. Reescríbelo como algo
que un usuario pueda ver o probar en pantalla.
```

```text
La HU "___" es demasiado grande para una fracción de clase.
Divídela en dos historias independientes.
```

### 1.3 Registra tus prompts en `PROMPTS.md`

Crea el archivo en tu carpeta del proyecto y registra los prompts que usaste y para qué:

```markdown
## [Fecha] — Descomposición del MVP en HUs
**Para qué:** derivar mis historias de usuario.
**Prompt:** (el texto que enviaste)
**Resultado:** base de mis 8 HUs; ajusté criterios y alcance a mano.
```

✅ **Checkpoint (~min 105 de la clase):** Tienes tus **8 HUs (±1)** con criterios de aceptación en `HISTORIAS.md`, cubren las 10 funcionalidades del MVP, y `PROMPTS.md` registra los prompts que usaste.

---

## Parte 2: Planifica tus sprints (25 min)

### 2.1 Pide una propuesta de distribución a la IA

En el mismo chat (ya tiene tu contexto), pide el plan:

```text
Estas son mis 8 historias finales: [pega HISTORIAS.md]
Propón cómo distribuirlas en Sprint 1 y Sprint 2 (una clase cada uno).
Justifica cada asignación, señala las dependencias (qué necesito
tener antes de qué) y dime cuál historia es la más difícil técnicamente.
```

Audita la propuesta con estas tres preguntas:

- ¿El Sprint 1 termina en algo **demostrable**, o es puro setup?
- ¿Las dependencias son reales? (sin búsqueda no hay canciones que agregar a nada)
- ¿La IA mandó todo lo difícil al Sprint 2? Si tu reto revienta en la Clase 19, ya no hay margen.

### 2.2 Decide tú y escríbelo en `SPRINTS.md`

La decisión final es tuya — la defenderás en el checkpoint. Crea `SPRINTS.md`:

```markdown
## Sprint 1 (Clase 18) — Meta: [qué se ve funcionando al final, en 1 línea]
- HU__: ______ (por qué va primero)
...

## Sprint 2 (Clase 19) — Meta: [1 línea]
- HU__: ______
...

## Dependencias detectadas
- Para HU__ necesito antes HU__ porque ______.

## Mi reto técnico principal
La HU que más me intimida es ______ porque ______.
```

✅ **Checkpoint (~min 130):** `SPRINTS.md` completo: metas por sprint, 4 HUs (±1) por sprint, ≥1 dependencia documentada y tu reto técnico identificado.

---

## Parte 3: Configura tu repositorio (35 min)

### 3.1 Repo + estructura del contrato

Crea en GitHub el repo público `mi-setlist` (README + .gitignore Node), clónalo y crea la estructura de archivos del enunciado (los `.js` vacíos por ahora, excepto los dos de abajo).

### 3.2 "Hola mundo" de módulos

Este es el único código que te da el curso hoy — valida que tu entorno corre ESM:

```html
<!-- index.html (dentro de <body>) -->
<h1>🎵 Mi Setlist</h1>
<p id="app"></p>
<script type="module" src="js/app.js"></script>
```

```javascript
// js/state.js
export const mensaje = 'Módulos ESM funcionando ✅';

// js/app.js
import { mensaje } from './state.js';
document.querySelector('#app').textContent = mensaje;
```

> ⚠️ ESM no corre abriendo el archivo con doble clic (`file://`). Usa **Live Server**.

### 3.3 README del repo + primer push

Escribe el `README.md` con: una línea de descripción, stack, **tus HUs** (pega `HISTORIAS.md` o enlázalo) y cómo correr localmente. Luego:

```bash
git add .
git commit -m "chore: setup inicial con estructura ESM y plan del proyecto"
git push origin main
```

✅ **Checkpoint (~min 165):** Tu repo en GitHub muestra la estructura completa + `HISTORIAS.md`, `SPRINTS.md` y `PROMPTS.md`; al abrir con Live Server ves "Módulos ESM funcionando ✅" sin errores en consola.

---

## 📁 Estructura Final del Proyecto

```
mi-setlist/
├── index.html          # Título + hola mundo ESM
├── css/styles.css      # Vacío, listo para Sprint 1
├── js/                 # app.js y state.js con el hola mundo;
│   ├── models/         # el resto vacíos
│   ├── api.js  state.js  storage.js  ui.js  app.js
├── HISTORIAS.md        # Tus 8 HUs con criterios
├── SPRINTS.md          # Tu plan de 2 sprints
├── PROMPTS.md          # Registro del trabajo con la IA
├── README.md
└── .gitignore
```

---

## 🏆 Logros Adicionales (Opcional)

### 🟢 Bosqueja tu UI con la IA
Pídele a la IA un wireframe en ASCII de tu app y critícalo: ¿dónde va la búsqueda y dónde la playlist? Guárdalo en `HISTORIAS.md`.

### 🟡 Prueba la API desde la consola
En la consola del navegador, haz un `fetch` al endpoint del enunciado y explora el JSON que responde (lo usarás en la Clase 18).

### 🔴 Semillas para tus HUs propias
Pídele a la IA 3 ideas de features "de producción" para tu app (tipo favoritos o filtros) y guárdalas al final de `HISTORIAS.md` — en la Clase 19 definirás 2 HUs propias y esto te dará ventaja.

---

## 📝 Entrega

### Checklist

- [ ] Repo público con la estructura ESM y el hola mundo corriendo sin errores.
- [ ] `HISTORIAS.md` con tus 8 HUs (±1) cubriendo todo el MVP.
- [ ] `SPRINTS.md` con metas, distribución y dependencias.
- [ ] `PROMPTS.md` con ≥2 entradas (prompt + para qué + resultado).
- [ ] Commit y push realizados.

### Qué entregar

- **Link a tu repositorio** por el canal habitual.
- Participar en el **standup de cierre**: 30 segundos mostrando tu repo y tu reto técnico.

---

> ### 💡 Consejos
>
> - Hoy no se codea el producto. Salir con un plan claro ES el entregable.
> - Si la IA te da 15 historias, no es más completo: es alcance inflado. Menos historias, mejor definidas.
> - La calidad de tu `PROMPTS.md` no se mide por cuántos prompts tiene, sino por si otro dev entendería cómo llegaste a tu plan.
