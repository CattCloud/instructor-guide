# Cambios Propuestos al Módulo 3 — Code 201

> **Repo destino:** `ncode-201-guide` (`C:\dev\entertechschool\ncode-201-guide\`)
> **Skill destino:** `/module-updater` (modo implementar) sobre el M3 = `curriculum/class-09` a `curriculum/class-12`.
> **Fecha:** 2026-05-10
> **Coordinado con:** `M1-cambios-propuestos.md` y `M2-cambios-propuestos.md` (algunos cambios del M3 dependen de que M1 y M2 ya estén implementados).

---

## 1. Contexto y motivación

Auditoría del M3 detectó cuatro clases de problemas:

**(a) Huérfanos confirmados:**
- **`finally` (C12):** README+slides lo enseñan, ningún sub-paso del lab lo aplica. **Crítico** — M5 HU8 lo necesita para `try { JSON.parse(localStorage.getItem(...)) } catch { ... } finally { ... }`.
- **`event.preventDefault()`:** se usa implícitamente en C11 pero nunca se enseña como concepto formal. M5 lo necesita en submit de formularios.
- **Jerarquía DOM** (`parentNode`, `children`, siblings): DISCUSSION.md de C09 lo enfatiza; lab solo usa selectores CSS planos. Marginal — tampoco se usa en M4-M5.
- **`event.key`, `event.type`, `removeEventListener`, errores personalizados:** marginales, no causan daño, se dejan como están.
- **Regex / Marked.js:** específicos del proyecto Editor Markdown del M3, no se reutilizan en M4-M5. **Huérfanos justificados** — pertenecen a la naturaleza del proyecto víctima, no son problema curricular.

**(b) Faltante crítico para M5:**
- **Manipulación dinámica del DOM** (`createElement` + `appendChild` para listas dinámicas): el editor Markdown del M3 trabaja con `textContent`/`innerHTML` sobre un `<div id="preview">` único. NUNCA usa createElement/appendChild para listas. Pero M5 (Agenda de Gastos) lo necesita masivamente (lista de personas, lista de gastos, lista de transferencias). C18 actualmente asume el dominio sin enseñarlo.

**(c) Sub-pasos vagos / framing incorrecto:**
- **C10 modularización vaga:** setup pide crear `format.js`, `lists.js`, `blocks.js` pero las HUs no especifican qué función va en cuál archivo. Mismo patrón VAGO detectado en C02 (M1) y C05 (M2).
- **C09 introduce Tailwind como nuevo:** *"Revisa la documentación de TailwindCSS"*. Después del M2 post-cambio (C08 expone Tailwind pasivamente), C09 debería **formalizar** lo ya visto. Esto ya está documentado en `M1-cambios-propuestos.md` task #4 — solo verificar que se aplique.

**(d) Violación a regla del repo:**
- **C09 MAX_TWO_NEW_TOOLS:** introduce 4-5 herramientas (`querySelector`, `querySelectorAll`, Regex, `.classList`, `.style`). Son inseparables del proyecto Editor Markdown. **Decisión:** documentar la excepción en AGENTS.md (no reorganizar).

---

## 2. Resumen ejecutivo de cambios

| Archivo | Tipo de cambio |
|---|---|
| `AGENTS.md` (raíz) | EDITAR — documentar excepción de C09 a MAX_TWO_NEW_TOOLS (primer contacto con DOM requiere familia de APIs relacionadas) |
| `curriculum/class-09/README.md` | Confirmar coordinación con M1 (Tailwind formalizado, no introducido) — sin trabajo nuevo más allá de lo ya documentado en M1 task #4 |
| `curriculum/class-09/lab/README.md` | Confirmar coordinación con M1 — sin trabajo nuevo |
| `curriculum/class-10/lab/README.md` | EDITAR — especificar en cada HU el archivo destino (`format.js`, `lists.js`, `blocks.js`) |
| `curriculum/class-11/README.md` | EDITAR — agregar `event.preventDefault()` como concepto enseñado |
| `curriculum/class-11/lab/README.md` | EDITAR — agregar sub-paso explícito que use `event.preventDefault()` |
| `curriculum/class-11/slides/README.md` | EDITAR — slide nueva de preventDefault |
| `curriculum/class-12/README.md` | EDITAR — incorporar `finally` como sub-paso obligatorio + bonus de renderizado dinámico |
| `curriculum/class-12/lab/README.md` | EDITAR — agregar HU4 con `finally` + bloque "Bonus: renderizado dinámico de listas" (createElement + appendChild) al cierre |
| `curriculum/class-12/slides/README.md` | EDITAR — slide de finally aplicado + slide del bonus |
| `curriculum/class-12/facilitator/README.md` | EDITAR — alinear |
| `curriculum/class-12/test/questions.md` | Sin cambios obligatorios; opcional: agregar Q sobre `finally` |

---

## 3. Cambios por archivo

### 3.1 `AGENTS.md` (raíz)

**Edición — documentar excepción a MAX_TWO_NEW_TOOLS:**

Agregar en la sección "Densidad de Contenido" (o crear nota nueva):

> **Excepción documentada — C09 (M3):** la primera clase de DOM introduce 4-5 APIs relacionadas (`querySelector`, `querySelectorAll`, `.classList`, `.style`, Regex con `.replace()`) que son inseparables del primer contacto del alumno con el modelo DOM y la transformación Markdown→HTML. Esta excepción a MAX_TWO_NEW_TOOLS está justificada porque las APIs son una **familia coherente** (todas son maneras de leer/modificar nodos del DOM), no herramientas independientes. Es la única clase del curso con esta excepción documentada.

---

### 3.2 `curriculum/class-09/`

**Sin trabajo nuevo.** El cambio principal (Tailwind como formalización en lugar de introducción) ya está documentado en `M1-cambios-propuestos.md` §3.6 y task #4.

**Verificación al ejecutar `/module-updater`:**
- README de C09: cambia framing de *"Revisa la documentación de TailwindCSS"* a *"Continúa usando Tailwind (que viste pasivamente en C08), aquí lo formalizo"*.
- Lab de C09: el setup ya no asume Tailwind como nuevo.
- Tabla de utility classes referenciando las que ya usaron en C08.

---

### 3.3 `curriculum/class-10/`

**Cambio puntual al lab — concretar la modularización vaga.**

El setup actual pide crear `format.js`, `lists.js`, `blocks.js` pero las HUs no especifican qué función va en cuál archivo.

**Edición concreta — agregar al inicio de cada HU una línea de "Archivo destino":**

```markdown
## HU1 — Formato de texto (negrita/cursiva)
> **Archivo destino:** `js/format.js`
... (resto de la HU sin cambios)

## HU2 — Generación automática de listas <ol>
> **Archivo destino:** `js/lists.js`
... (resto de la HU sin cambios)

## HU3 — Resaltado de código entre triple backticks
> **Archivo destino:** `js/blocks.js`
... (resto de la HU sin cambios)
```

Y en el setup, agregar:

```markdown
**Estructura del repositorio (post-Lab 10):**
```
markdown-editor/
├── index.html
├── css/styles.css
└── js/
    ├── format.js   ← Funciones de formato (HU1)
    ├── lists.js    ← Conversión de listas (HU2)
    ├── blocks.js   ← Resaltado de código (HU3)
    └── app.js      ← Coordina todo (importa o invoca las anteriores)
```

Luego cada `<script>` en `index.html` debe enlazar los 4 archivos en este orden (o usar `type="module"` si el alumno ya conoce módulos ES).
```

**Lo que NO cambia:** estructura de las 3 HUs, conceptos centrales, tiempo del lab.

---

### 3.4 `curriculum/class-11/`

**Cambio — agregar `event.preventDefault()` como concepto formal y aplicado.**

#### Edición 1 — README + slides

Agregar `event.preventDefault()` a la lista de conceptos enseñados. Slide nueva: "Cuando el evento por default rompe lo que quieres — preventDefault".

#### Edición 2 — Lab: agregar sub-paso explícito

Agregar en HU1 (o como HU adicional corta) un sub-paso que aplique `preventDefault()`. Como el editor Markdown trabaja con `<textarea>`, el caso más natural es **prevenir el comportamiento default de Tab** (que cambia foco) para que el alumno pueda indentar dentro del editor:

```markdown
### HU1.X — Prevenir Tab default en el textarea

El default del navegador es que la tecla Tab cambie el foco al siguiente elemento. En un editor de Markdown queremos que Tab inserte 2 espacios sin perder el foco del textarea.

```javascript
const textarea = document.querySelector('#editor');

textarea.addEventListener('keydown', function(event) {
  if (event.key === 'Tab') {
    event.preventDefault();  // detiene el comportamiento default del navegador
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    textarea.value = textarea.value.substring(0, start) + '  ' + textarea.value.substring(end);
    textarea.selectionStart = textarea.selectionEnd = start + 2;
  }
});
```

✅ **Checkpoint visual:** presiona Tab dentro del textarea. Se insertan 2 espacios. El foco no se pierde.
```

Esto cubre dos huérfanos al mismo tiempo: `event.preventDefault()` (formal) + `event.key` (uso real, no solo en slides).

---

### 3.5 `curriculum/class-12/`

**Dos cambios:** (1) `finally` aplicado en el lab; (2) bloque "Bonus: renderizado dinámico de listas" al cierre.

#### Cambio 1 — Agregar HU4 con `finally`

Agregar como cuarta historia de usuario (o expandir HU3) un caso donde `finally` sea genuinamente necesario:

```markdown
### HU4 — Indicador de procesamiento con `finally`

Cuando la conversión Markdown→HTML toma tiempo (textos largos), el usuario debe ver un spinner. El spinner aparece antes de procesar, se oculta cuando termina — **incluso si la conversión falla con un error**. Para garantizar que el spinner se oculte sin importar qué pase, se usa `finally`.

#### Sub-pasos

4.1. Agrega al `index.html` un spinner oculto:

```html
<div id="spinner" class="hidden">Procesando...</div>
```

4.2. En `app.js`, modifica la función que procesa el Markdown para mostrar y ocultar el spinner usando `try/catch/finally`:

```javascript
function procesarMarkdown(texto) {
  document.getElementById('spinner').classList.remove('hidden');

  try {
    if (!texto || texto.trim() === '') {
      throw new Error('El editor está vacío');
    }
    const html = marked.parse(texto);
    document.getElementById('preview').innerHTML = html;
  } catch (error) {
    mostrarError(error.message);
  } finally {
    document.getElementById('spinner').classList.add('hidden');
  }
}
```

4.3. Verifica los 3 escenarios:
- Editor con texto válido → spinner aparece y desaparece, preview se actualiza.
- Editor vacío → spinner aparece, error se muestra, spinner desaparece.
- Markdown malformado (provoca excepción de `marked.parse`) → spinner aparece, error se muestra, spinner desaparece.

✅ **Checkpoint:** en los 3 casos, el spinner termina oculto. Esa es la garantía de `finally`.

🏆 **Reto autónomo (5 min):** ¿Qué pasaría si pones el `classList.add('hidden')` dentro del `try` en lugar del `finally`? Pruébalo y observa qué ocurre cuando hay un error.
```

**Justificación pedagógica:** este caso muestra el valor real de `finally` (limpieza de UI que debe ocurrir SIEMPRE), y prepara directamente para M5 HU8 (try/catch alrededor de `JSON.parse(localStorage)` con cleanup en finally).

#### Cambio 2 — Bloque "Bonus: renderizado dinámico de listas" al cierre

Agregar como sección final del lab (después de HU4, antes de Logros Adicionales):

```markdown
## Cierre — Bonus: Renderizado dinámico de listas (15 min)

> Este bloque NO es una nueva HU del lab. Es una herramienta crítica que vas a necesitar en M5 (Proyecto Final). El editor Markdown trabaja con un único `<div id="preview">`, pero las apps reales necesitan generar listas dinámicas (un `<li>` por cada elemento de un array).

### Patrón base

Hasta ahora actualizaste el DOM con `.innerHTML` o `.textContent` sobre un nodo existente. Para crear nodos nuevos desde JS:

```javascript
const items = ['Manzana', 'Pera', 'Plátano'];
const lista = document.querySelector('#mi-lista');

items.forEach(function(item) {
  const li = document.createElement('li');     // crea el nodo
  li.textContent = item;                        // le da contenido
  lista.appendChild(li);                        // lo inserta en el DOM
});
```

### Aplicación al editor: lista de errores

Si el alumno escribe Markdown malformado y la validación detecta varios errores, podemos mostrar la **lista** de errores en vez de uno solo.

#### Sub-pasos

C.1. Agrega al `index.html`:

```html
<ul id="lista-errores"></ul>
```

C.2. En `app.js`, escribe una función que reciba un array de errores y los renderice como `<li>`:

```javascript
function renderizarErrores(errores) {
  const lista = document.querySelector('#lista-errores');
  lista.innerHTML = '';  // limpia errores previos

  errores.forEach(function(error) {
    const li = document.createElement('li');
    li.textContent = error;
    li.classList.add('error-item');
    lista.appendChild(li);
  });
}

// Prueba
renderizarErrores([
  'Línea 3: encabezado mal cerrado',
  'Línea 7: lista sin guion inicial',
  'Línea 12: bloque de código sin triple backtick de cierre'
]);
```

C.3. Verifica que aparezcan los 3 `<li>` en el DOM.

✅ **Checkpoint:** abre DevTools (F12 → Elements) y observa cómo `<ul>` tiene 3 `<li>` que NO están en el HTML estático — son creados por JS.

### Por qué importa para M5

En M5 el alumno construye una Agenda de Gastos. Cada vez que se agregue una persona, un gasto o una transferencia sugerida, debe aparecer un nuevo `<li>` (o `<tr>`, o `<div>`) en el DOM **sin recargar la página**. El patrón `createElement` + `appendChild` es exactamente eso. Hoy lo viste con errores; en M5 lo aplicarás a personas, gastos y balances.
```

**Tiempo:** 15 min al cierre del lab. Si C12 se está pasando del tiempo, este bloque puede quedar como tarea autónoma post-clase con material claro.

---

## 4. Propagación: archivos de otros módulos afectados

| Archivo | Por qué se afecta | Cambio mínimo |
|---|---|---|
| `M1-cambios-propuestos.md` (este repo) | El cambio a C09 (Tailwind formalización) ya está allí coordinado. **Sin cambios adicionales.** | Verificar coherencia |
| `M2-cambios-propuestos.md` (este repo) | El cambio a C08 (Tailwind exposición pasiva) habilita la formalización en C09. **Sin cambios adicionales.** | Verificar coherencia |
| `class-13/lab/README.md` (M4) | El bonus de renderizado dinámico de C12 se reutiliza si C13-C16 manipulan el DOM | Cuando se audite M4: referenciar *"como vimos en el bonus de C12"* |
| `class-18/lab/README.md` (M5) | C18 (Sprint 1) puede asumir que el alumno ya conoce createElement+appendChild | Cuando se audite M5: cambiar framing — referenciar *"como vimos en el bonus de C12"* en lugar de tutorial nuevo |

---

## 5. Reglas y restricciones que esto preserva

- **PROGRESSIVE_INTEGRATION:** el proyecto víctima (`markdown-editor`) sigue evolucionando lab por lab. El bonus de C12 NO es un proyecto nuevo — es una mini-aplicación del patrón al mismo editor (lista de errores).
- **MAX_TWO_NEW_TOOLS:** C09 documentada como excepción justificada. C10-C11-C12 dentro del límite (preventDefault y createElement/appendChild son APIs hermanas de event y DOM ya conocidos).
- **VERIFIABLE_DELIVERABLE:** cada nuevo sub-paso tiene checkpoint observable (spinner que se oculta siempre, lista de 3 `<li>` en DevTools).
- **EXPLICIT_DEPENDENCIES:** ningún sub-paso usa concepto sin enseñanza previa. Tailwind asumido como pasivamente expuesto en C08; preventDefault enseñado formalmente antes de aplicarlo.
- **Regla de code-along** (`instructor-system` §6.4): cada concepto enseñado en C09-C12 tiene su sub-paso `X.Y` en el lab. Los huérfanos críticos (`finally`, preventDefault) se cierran. Los marginales (event.key/type, removeEventListener, errores personalizados) se dejan documentados como "menciones" — no causan daño y no inflan el lab.

---

## 6. Validación post-cambio (checklist)

Ejecutar en este orden:

- [ ] Para cada clase modificada, verificar coherencia entre `README.md`, `slides/README.md` y `lab/README.md`.
- [ ] Verificar que C10 lab tenga "Archivo destino" en cada HU.
- [ ] Verificar que C11 lab tenga sub-paso explícito de preventDefault con caso real (Tab en textarea).
- [ ] Verificar que C12 lab tenga HU4 con `finally` aplicado al spinner del editor.
- [ ] Verificar que C12 lab tenga bloque "Bonus: renderizado dinámico de listas" al cierre.
- [ ] Verificar que AGENTS.md tenga la excepción de C09 a MAX_TWO_NEW_TOOLS documentada.
- [ ] Continuidad del proyecto víctima entre labs (mismo repo `markdown-editor` arrastrando estado).
- [ ] `lint-markdown` sobre todos los archivos modificados.
- [ ] Validar `MAX_TWO_NEW_TOOLS` en cada clase modificada (excepto C09 que tiene excepción documentada).
- [ ] Lectura cruzada con M1 y M2 .md: confirmar que C09 (Tailwind) se aplicó como formalización, no introducción.

---

## 7. Riesgos identificados

- **C12 con HU4 + bonus puede sentirse largo.** Mitigación: el bonus está marcado como "no es HU obligatoria" — si la clase se está pasando, queda como tarea autónoma post-clase con instrucciones claras (ya están en el bloque del .md).
- **El bonus de renderizado dinámico cambia el alcance de C12** (que originalmente era solo try/catch/throw). Mitigación: el bonus está justificado pedagógicamente (preparación para M5) y se mantiene en el mismo proyecto víctima — no agrega nuevo proyecto.
- **`/module-updater` puede generar el bonus de manera distinta a la propuesta.** Mitigación: el `.md` da código verbatim como referencia; verificar al aplicar.
- **La excepción de C09 a MAX_TWO_NEW_TOOLS sienta precedente.** Mitigación: documentarla explícitamente como única excepción del curso. Si en futuras auditorías otra clase lo viola, no se invoca esta excepción automáticamente — se discute caso por caso.

---

## 8. Validación con la skill `instructor-system` (regla de code-along)

Igual que en M1 y M2: este documento garantiza **paridad macro** (cada bloque conceptual del M3 post-cambio tiene una Parte/HU del lab que lo aplica al proyecto víctima). No garantiza paridad micro — esa solo se verifica cuando exista el guion generado con `instructor-system`.

### Validación obligatoria a ejecutar antes de dictar cada clase del M3

Para C09, C10, C11, C12, ANTES de dictar:

1. Generar `mi-sistema/CAPA 0 - CLASE {n}.md` con `instructor-system`.
2. Generar `mi-sistema/CLASE {n}.md` (Capa 1).
3. Validar paridad momento ↔ HU/sub-paso del lab.
4. Validar especificidad de los nuevos sub-pasos (HU4 finally, preventDefault Tab, bonus renderizado).

### Riesgos micro identificados

- **C09:** los 4-5 conceptos nuevos pueden requerir 5-6 momentos del guion. Verificar que cada uno tenga su HU correspondiente. Si un Momento queda sin HU, ajustar (agregar mini-paso al lab) o degradarlo a `code-along de concepto` aislado.
- **C12 HU4 (finally):** asegurar que el guion presente finally como "garantía sin importar qué pase", no como "tercer caso del try/catch". Es un cambio de mindset, no una sintaxis adicional.
- **C12 Bonus de renderizado dinámico:** si el guion lo trata como Momento principal, el código-along del lab fluye. Si lo trata como "extra al final", el alumno puede perderlo.

---

## 9. Cómo alimentar este archivo al sistema de skills

**Importante:** procesar `M1-cambios-propuestos.md` y `M2-cambios-propuestos.md` ANTES que este. Algunos cambios del M3 dependen de que los anteriores estén implementados (ej: C09 formalizando Tailwind asume que C08 ya hace exposición pasiva).

Pasar este archivo como input al skill `/module-updater` del repo `ncode-201-guide` en modo **implementar**:

1. Skill lee este `.md`.
2. Skill audita el estado actual de cada archivo listado en §2.
3. Skill propone parches concretos (diffs) por cada archivo.
4. Eric aprueba parche por parche.
5. Skill aplica parches.
6. Ejecutar `/lint-markdown` sobre archivos modificados.
7. Ejecutar `/evaluation-class` sobre C10, C11, C12 para validación pedagógica final.
8. **Verificación cruzada con M1 y M2:**
   - C08 (M2) usa Tailwind, C09 (M3) lo formaliza.
   - El bonus de C12 (M3) será referenciado por C18 (M5) cuando se audite ese módulo.
