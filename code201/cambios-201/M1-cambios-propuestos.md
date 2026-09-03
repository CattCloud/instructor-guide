# Cambios Propuestos al Módulo 1 — Code 201

> **Repo destino:** `ncode-201-guide` (`C:\dev\entertechschool\ncode-201-guide\`)
> **Skill destino:** `/module-updater` (modo implementar) sobre el M1 = `curriculum/class-01` a `curriculum/class-04`.
> **Fecha:** 2026-05-10
> **Autor:** Eric (revisión metodológica con copiloto pedagógico)

---

## 1. Contexto y motivación

Auditoría del M1 detectó dos clases de problemas:

**(a) Conceptos huérfanos** — se enseñan en M1 pero no se reutilizan en el resto del curso (M2-M5):
- **Bootstrap:** aparece solo en C08 como check de CDN, nunca más. C18 lo declara opcional.
- **Tailwind:** requerido únicamente en C09 HU1, después opcional. No justifica enseñarlo entero en M1.
- **CSS Grid avanzado** (`grid-template-areas`, implicit grid, `auto-fit/auto-fill`): C03 dedica 60+ min, M2-M4 nunca lo usan, M5 lo lista como "alternativa opcional".
- **Bloque de IA / prompt engineering** en C01: tema fuera de la columna vertebral del módulo (HTML+CSS); inflado en una clase ya cargada.
- **Merge conflict resolution:** mencionado en C04 facilitator, no se practica hasta C15.

**(b) Faltantes críticos** — el proyecto final (C18, "Agenda de Gastos Compartidos") los exige sin haberse enseñado:
- **Formularios HTML accesibles** (`<form>`, `<label for>`, `<input type/required/pattern>`, `<select>`, `<checkbox>`): C18 los introduce como nuevos. M2-M4 evitan forms y usan `prompt()`.
- **CSS Variables** (`:root { --primary }`): C18 las muestra como boilerplate sin enseñanza previa.

**Otros problemas menores detectados:**
- Bug en lab C03: usa `repeat(auto-fit, minmax(...))` sin que el README lo explique.
- Violación de `MAX_TWO_NEW_TOOLS` declarado en AGENTS.md: C04 actual mete Bootstrap + Tailwind + Git branches + PRs + Merge en una sola clase (5 herramientas nuevas).
- A11y enseñada en C01 sin checkpoint verificable en el lab.
- Flexbox profundo (`flex-shrink`, `flex-basis`, `align-self`) está en slides de C02 pero nunca aparece en lab.
- Media queries: solo 1 de adorno en M1, ninguna verificable en DevTools.

---

## 2. Resumen ejecutivo de cambios

| Archivo | Tipo de cambio |
|---|---|
| `README.md` (sílabo raíz) | EDITAR — actualizar resumen del M1 |
| `MODULE-PLAN.md` del M1 (si existe) | EDITAR — alinear con los nuevos contenidos |
| `curriculum/class-01/README.md` | EDITAR — agregar formularios básicos, eliminar IA |
| `curriculum/class-01/slides/README.md` | EDITAR — agregar slide de forms, eliminar slides de IA |
| `curriculum/class-01/lab/README.md` | EDITAR — agregar parte de forms + checkpoint Tab nav |
| `curriculum/class-01/facilitator/README.md` | EDITAR — alinear con cambios |
| `curriculum/class-02/lab/README.md` | EDITAR — agregar sub-paso explícito de `flex-grow` y concretar el sub-paso de media queries |
| `curriculum/class-03/README.md` | EDITAR — recortar Grid a esencial |
| `curriculum/class-03/slides/README.md` | EDITAR — recortar Grid, expandir Flexbox profundo y media queries |
| `curriculum/class-03/lab/README.md` | REESCRIBIR — nueva estructura P1 Grid esencial / P2 Flex profundo / P3 media query |
| `curriculum/class-03/facilitator/README.md` | EDITAR — alinear |
| `curriculum/class-04/README.md` | REESCRIBIR — sin frameworks; CSS Variables + Forms validados + Git completo |
| `curriculum/class-04/slides/README.md` | REESCRIBIR — sin Bootstrap/Tailwind |
| `curriculum/class-04/lab/README.md` | REESCRIBIR — 5 partes (P1 Variables, P2 Forms validados, P3 Git workflow, P4 Desafío merge conflict, P5 deploy) |
| `curriculum/class-04/facilitator/README.md` | REESCRIBIR — alinear |
| `curriculum/class-04/test/questions.md` | EDITAR — Q sobre frameworks → Q sobre Variables/Forms |
| `curriculum/class-08/lab/README.md` | EDITAR — reemplazar Bootstrap CDN por Tailwind CDN; HTML del template adaptado a utility classes (exposición pasiva, ver §3.5) |
| `curriculum/class-09/README.md` | EDITAR — agregar bloque de **formalización** de Tailwind (el alumno ya lo expuso pasivamente en C08) |
| `curriculum/class-09/slides/README.md` | EDITAR — slide de Tailwind básico |
| `curriculum/class-09/lab/README.md` | EDITAR — paso de setup de Tailwind con instrucción mínima |
| `curriculum/class-18/README.md` | EDITAR — `<form>` y CSS Variables dejan de ser "nuevo" |
| `curriculum/class-18/lab/README.md` | EDITAR — referencia C01/C04 en vez de introducir |
| `curriculum/class-18/facilitator/README.md` | EDITAR — quitar nota "aquí presento `<form>` por primera vez" |

**C02 recibe una edición puntual al lab** (ver §3.2). El README, slides y facilitator quedan intactos.

---

## 3. Cambios por archivo

### 3.1 `curriculum/class-01/`

**Objetivo de la clase tras el cambio:** HTML5 semántico + accesibilidad básica + formularios accesibles. (Sin IA / prompt engineering.)

#### Lo que ENTRA
- **Bloque "Formularios accesibles"** (~25 min de demo + bloque de lab):
  - Conceptos: `<form>`, `<label for>`, `<input type="text/email">`, `<button type="submit">`, asociación `label↔input` vía `for/id`.
  - Aplicado al landing del proyecto víctima: agregar un formulario de contacto/suscripción a la Product Landing Page.
  - Justificación pedagógica: forms son la APLICACIÓN natural de A11y (labels, semántica). Encajan teóricamente aquí.
- **Checkpoint verificable de A11y al cierre del lab:**
  - Texto del checkpoint: *"Cierra el mouse. Navega tu landing solo con Tab. El orden de foco debe ser lógico (logo → menú → CTA → contenido → form). Sube screenshot mostrando el foco visible en al menos 3 elementos."*
  - Tiempo estimado: 5 min.
  - Verifica que `tabindex` y orden DOM son coherentes; obliga al alumno a usar A11y, no solo escribirla.

#### Lo que SALE
- **Bloque de IA / prompt engineering:** eliminar de README, slides y facilitator. Justificación: tema fuera de la columna vertebral del M1 (HTML+CSS), inflaba una clase ya cargada con 8 conceptos. No se reubica en M1; si se reincorpora en otro módulo, se discute en su auditoría.

#### Lo que QUEDA igual
- HTML5 semántico (header, nav, main, section, article, aside, footer).
- Atributos de accesibilidad (alt, aria-label, jerarquía de headings).
- Favicon (lab existente).

#### Restricciones
- **MAX_TWO_NEW_TOOLS:** la clase queda con HTML semántico + Forms básicos como herramientas principales. A11y es transversal (no cuenta como herramienta separada).
- **Continuidad del proyecto:** el form se agrega al MISMO `index.html` del landing; no se crea proyecto nuevo.

---

### 3.2 `curriculum/class-02/`

**Solo se edita el lab.** README, slides y facilitator quedan intactos. La densidad de la clase está bien y los conceptos centrales son los correctos.

**Razón del cambio:** auditoría sub-paso por sub-paso del lab detectó dos huecos que rompen la regla de code-along de la skill `instructor-system` (mismo patrón del problema de Clase 10 del Code 101 archivado: concepto enseñado sin sub-paso del lab donde aplicarlo al proyecto víctima).

| Concepto central | ¿Sub-paso específico en lab actual? | Estado actual |
|---|---|---|
| `display: flex` | P2.1 ✅ | OK |
| `justify-content` | P2.1 ✅ | OK |
| `align-items` | P2.1 ✅ | OK |
| `flex-wrap` | P3.2 ✅ | OK |
| **`flex-grow`** | **❌ Listado en "Conceptos Clave" pero ningún sub-paso lo aplica** | **HUÉRFANO** |
| **Media queries** | P3.3 dice *"aplica media queries para ajustar el número de columnas"* — sin código, sin breakpoint, sin propiedad | **VAGO** |
| `overflow` | P1.3 ✅ | OK |

#### Edición 1 — agregar sub-paso explícito de `flex-grow` en P2

Añadir un sub-paso 4 en `## Parte 2 – Flexbox en Navegación y Secciones` con caso de uso real (no inventado):

```markdown
4. Haz que el logo del nav empuje el resto del menú a la derecha usando `flex-grow`:

```css
header nav .logo {
  flex-grow: 1;
}
```

Verifica que el logo ocupe el espacio disponible y los enlaces queden alineados al borde derecho. Es el patrón estándar de navbars en producción.
```

#### Edición 2 — concretar el sub-paso de media queries en P3

Reemplazar el sub-paso 3 actual (*"Aplica media queries para ajustar el número de columnas según el ancho de la pantalla"*) por uno hiperespecífico:

```markdown
3. Agrega al final de `styles.css` un breakpoint para móviles:

```css
@media (max-width: 768px) {
  .galeria img {
    width: 100px;
  }
}
```

Verifica en DevTools modo responsive (F12 → ícono de dispositivo móvil) que las imágenes se reduzcan al pasar 768px de ancho. Sube screenshot del antes/después.
```

#### Lo que NO cambia
- Estructura de las 3 partes del lab.
- Conceptos centrales enseñados.
- Glosario, retos autónomos, logros adicionales.
- Tiempos sugeridos.

---

### 3.3 `curriculum/class-03/`

**Objetivo de la clase tras el cambio:** CSS Grid esencial + Flexbox profundo + responsividad real.

#### Reestructuración del lab (3 partes, ~60 min)

| Parte | Tiempo | Contenido |
|---|---|---|
| **P1 — Grid esencial** | ~20 min | `testimonios.html` con `display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem`. Lo mínimo para reconocer Grid y saber cuándo usarlo. |
| **P2 — Flexbox profundo** | ~20 min | `compra.html` refactorizada usando `flex-wrap`, `flex-basis`, `align-self`. Estos conceptos hoy están en slides pero nunca tocan el lab. |
| **P3 — Media query verificable** | ~20 min | Breakpoint a 768px que cambie el layout. Verificación obligatoria en DevTools modo responsive con screenshot. |

#### Lo que SALE de C03
- `grid-template-areas` con nombrado explícito.
- Implicit grid / explicit grid (concepto teórico).
- `auto-fit` / `auto-fill` con `minmax()` (resuelve el bug detectado: el lab los usaba sin que el README los explicara).

#### Lo que QUEDA en slides de C03 (referencia, no práctica)
- Mención de que Grid tiene capacidades 2D más avanzadas (`grid-template-areas`, `auto-fit`) que el alumno puede explorar si las necesita en M5.

#### Demo + debate (30 min antes del lab)
- Grid vs Flexbox: cuándo elegir cada uno (Grid = layout 2D, Flex = 1D).
- Demo del mismo layout resuelto con los dos.

---

### 3.4 `curriculum/class-04/`

**Objetivo de la clase tras el cambio:** CSS moderno (Variables) + Formularios validados + Git workflow profesional. **Sin frameworks CSS.**

Tipo de lab: **Calificado** (única clase calificada del M1). 5 partes incluyendo Desafío.

#### Nueva estructura del lab (~90 min)

| Parte | Tiempo | Contenido |
|---|---|---|
| **P1 — CSS Variables** | ~20 min | Refactorizar el landing: extraer colores, espacios y tipografías a `:root { --color-primary, --space-md, --font-base, ... }`. Aplicar `var(--...)` en componentes existentes. |
| **P2 — Formularios validados** | ~25 min | Sobre el form básico de C01, agregar validación nativa: `required`, `type="email"`, `pattern`, `minlength`, `<select>`, `<input type="checkbox">`. Probar errores en navegador. |
| **P3 — Git workflow** | ~20 min | Crear branch `feature/contacto-validado`, commit progresivo, push, abrir PR en GitHub, merge a main. |
| **P4 — Desafío: Merge conflict** | ~15 min | Resolver conflicto prefabricado entre dos ramas que tocan la misma sección del CSS. Requiere editar manualmente, eliminar marcadores `<<<< ==== >>>>`, hacer commit de resolución. |
| **P5 — Deploy** | ~10 min | Push a main, verificar GitHub Pages, sumar URL al README del proyecto. |

#### Lo que SALE de C04
- **Bootstrap completo.** Eliminar todo: rama `bootstrap`, intros, slides, glosario, retos relacionados.
- **Tailwind completo.** Se mueve a C09 just-in-time (ver §3.6).

#### Demo + debate (30 min)
- Por qué Variables CSS reemplazan al "modo framework" (consistencia sin librería).
- Por qué forms accesibles + validación nativa (sin JS) son crucial para M5.
- Por qué el flujo Git con branches/PRs es profesional (no solo `git push`).

#### Test del módulo (`test/questions.md`)
- Reemplazar las preguntas sobre Bootstrap/Tailwind por preguntas sobre:
  - Variables CSS (`:root`, scope, override).
  - Validación nativa de forms (`required`, `type=email`).
  - Merge conflict (cómo se identifica, cómo se resuelve).
- Mantener las preguntas existentes sobre HTML semántico, Flexbox, Grid esencial, Git workflow.

---

### 3.5 `curriculum/class-08/`

**Cambio coordinado con la auditoría del Módulo 2.** El lab actual de C08 P3 usa Bootstrap como capa de UI completa (no solo el CDN — `container`, `card`, `form-control`, `btn-primary`, `alert-success/danger`, etc., están dispersas en todo el HTML del template).

**Decisión coordinada con el M2:** reemplazar Bootstrap por **Tailwind** (no por CSS vanilla). Justificación:
- M2 es "Fundamentos de Programación" — el foco es JS, no escribir CSS desde cero.
- Tailwind ya estaba en el plan para C09 (M3); usarlo en C08 lo justifica más (deja de ser semi-huérfano de un solo uso).
- El alumno NO escribe HTML/CSS en C08 P3 — el template viene pre-armado con Tailwind. Solo escribe JS (captura submit, querySelector, instanceof, render). Esto es **exposición pasiva**: el alumno LEE Tailwind sin que se le enseñe formalmente todavía.

**Edición concreta:**
- Cambiar `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">` por `<script src="https://cdn.tailwindcss.com"></script>` (Play CDN).
- Reescribir las clases del HTML del template: `container mt-4` → `max-w-4xl mx-auto mt-8`, `row` → `flex gap-4`, `col-md-6` → `flex-1`, `card card-body` → `bg-white rounded-lg shadow p-6`, `form-control` → `w-full border rounded p-2 mb-3`, `btn btn-primary w-100` → `w-full bg-blue-600 text-white p-3 rounded`, `alert alert-success/danger` → `bg-green-100 text-green-800 p-3 rounded` / `bg-red-100 text-red-800 p-3 rounded`.
- El JS de la P3 NO cambia.
- En el README de C08 agregar una línea: *"El template usa Tailwind para los estilos. No necesitas modificar el HTML — concéntrate en el JS. En la próxima clase aprenderás Tailwind formalmente."*

---

### 3.6 `curriculum/class-09/`

**Cambio:** agregar bloque de **formalización de Tailwind**. El alumno ya lo expuso pasivamente en C08 P3 (template pre-armado); aquí se le explica formalmente y se le pide aplicarlo.

- Slide nueva: "Tailwind formalizado — utility-first CSS, qué pasaba en el template de C08".
- README: bloque explicando el modelo utility-first (vs. component classes de Bootstrap), referencia explícita al template de C08 (*"recuerden las clases que vieron en `class="bg-white rounded-lg shadow p-6"` — eso es Tailwind"*), tabla de las 8-10 utility classes más usadas (`flex`, `justify-*`, `items-*`, `p-*`, `m-*`, `bg-*`, `text-*`, `rounded-*`, `shadow-*`, `gap-*`).
- Lab: paso explícito *"Enlaza Tailwind por CDN según docs oficiales"* con el `<script>` exacto.
- HU1 ya no asume Tailwind conocido del M1 ni del agente, lo asume conocido pasivamente desde C08 (M2) y lo formaliza aquí.

---

### 3.7 `curriculum/class-18/`

**Cambios de framing, no de contenido del proyecto:**

- README de la clase: dejar de listar `<form>`, `<label>`, `<input>` y CSS Variables como conceptos nuevos.
- Lab: en lugar de explicar la sintaxis de forms desde cero, referenciar *"como vimos en C01 (forms accesibles) y C04 (validación nativa)"*.
- Facilitator: eliminar la nota "*nota cómo uso `<form>` y `<section>`*" si presenta esto como demo nueva — el alumno ya lo aplicó dos veces.
- El boilerplate `:root { --primary, --bg, --text, --danger, --success }` deja de aparecer como "template recibido"; ahora es construcción del alumno basada en C04.

---

### 3.8 `README.md` (sílabo raíz)

Actualizar el resumen del Módulo 1 para reflejar el nuevo contenido:
- Antes: "HTML5 + CSS (Flexbox, Grid) + Frameworks CSS (Bootstrap, Tailwind) + Git"
- Después: "HTML5 semántico + accesibilidad + Formularios accesibles + CSS moderno (Flexbox profundo, Grid esencial, responsividad, CSS Variables) + Git workflow profesional (branches, PRs, conflictos)"

Si existe `MODULE-PLAN.md` del M1, alinear sus objetivos y entregables con esta lista.

---

## 4. Propagación: archivos de otros módulos afectados

| Archivo | Por qué se afecta | Cambio mínimo |
|---|---|---|
| `class-08/lab/README.md` | M1 ya no enseña Bootstrap | Quitar mención de CDN |
| `class-09/README.md` + slides + lab | M1 ya no enseña Tailwind | Agregar intro corta in-context |
| `class-18/README.md` + lab + facilitator | C18 asumía que `<form>` y CSS Variables eran nuevas | Cambiar framing a "como vimos en C01/C04" |
| `README.md` (sílabo) | Estructura del M1 cambió | Actualizar resumen del M1 |

**No detectado pero a verificar:** si `class-15/facilitator/README.md` (que ya tenía 1h de merge conflicts según la auditoría) puede acortar ese bloque ahora que C04 cubre la mecánica básica. Decidir cuando se ejecute la edición.

---

## 5. Reglas y restricciones que esto preserva

- **MAX_TWO_NEW_TOOLS por clase** (declarado en `AGENTS.md`):
  - C01: HTML semántico + Forms básicos = 2 herramientas. ✅
  - C02: Flexbox + media queries = 2. ✅ (sin cambios)
  - C03: Grid esencial + Flex profundo + media query verificable. La media query es refuerzo de C02, no nueva. Grid + Flex = 2. ✅
  - C04: CSS Variables + Forms validados + Git workflow. Forms validados es refuerzo de C01. Variables + Git = 2 nuevas. ✅
- **PROGRESSIVE_INTEGRATION**: el proyecto víctima (Product Landing Page) sigue evolucionando lab por lab; el form de C01 se enriquece en C04 con validación; las Variables refactorizan el CSS escrito en C02-C03.
- **VERIFIABLE_DELIVERABLE**: cada nuevo bloque tiene checkpoint verificable (Tab nav screenshot en C01; layout responsive en DevTools en C03; merge conflict resuelto en C04).
- **EXPLICIT_DEPENDENCIES**: ningún archivo del lab usa concepto sin explicación previa (se elimina el bug de `auto-fit` en C03).
- **Regla de code-along** (skill `instructor-system` §6.4): cada concepto enseñado tiene su contraparte en el lab de la MISMA clase. Cuando el instructor explique Variables en C04, el lab le da P1 para hacer code-along inmediato; cuando explique forms validados, le da P2; etc. Ya no quedan conceptos huérfanos de aplicación.

---

## 6. Validación post-cambio (checklist para ejecutar después)

Ejecutar en este orden:

- [ ] Para cada clase modificada, verificar coherencia entre `README.md` (concepto), `slides/README.md` (presentación) y `lab/README.md` (práctica): cada concepto enseñado debe tener un paso de lab que lo aplique.
- [ ] Verificar que `class-04/test/questions.md` no evalúe nada que ya no se enseña (Bootstrap/Tailwind), y sí evalúe lo nuevo (Variables, validación, merge).
- [ ] Verificar continuidad del proyecto víctima entre labs: el archivo `index.html` del lab N debe ser el insumo del lab N+1.
- [ ] `lint-markdown` sobre todos los archivos modificados (enlaces internos del sílabo, enlaces externos a MDN/docs Tailwind/etc.).
- [ ] Lectura cruzada del facilitator de C18: confirmar que ya no presenta forms ni Variables como contenido nuevo.
- [ ] Validar `MAX_TWO_NEW_TOOLS` en cada clase modificada antes de cerrar.

---

## 7. Riesgos identificados

- **C03 con 3 partes de lab puede sentirse fragmentada** (Grid + Flex + media query). Mitigación: usar el mismo proyecto víctima como hilo conductor; las 3 partes refactorizan el mismo `compra.html` y `testimonios.html`.
- **El merge conflict prefabricado en C04 P4 requiere infraestructura** (dos branches en el repo template del curso con conflicto intencional). El skill `/module-updater` debe generar también ese setup, o documentar cómo el facilitator lo prepara antes de la clase.
- **C09 al recibir Tailwind just-in-time aumenta su carga.** Verificar después de implementar que C09 no viole MAX_TWO_NEW_TOOLS — si lo viola, revisar qué se le quita a C09 o si Tailwind queda como referencia (no obligatorio) en HU1.

---

## 8. Validación con la skill `instructor-system` (regla de code-along)

Este documento garantiza **paridad macro**: para cada clase del M1 post-cambio, cada bloque conceptual enseñado tiene una Parte del lab que lo aplica al proyecto víctima (Product Landing Page). Ningún concepto queda huérfano de aplicación como pasó con operadores de comparación en Clase 10 del Code 101 archivado.

**No garantiza paridad micro.** La skill `instructor-system` (§5.4 + §6.4.3) exige que cada Momento del guion tenga al menos un sub-paso `X.Y` del lab que el instructor pueda leer verbatim para hacer `code-along del lab`. Esa verificación solo es posible **cuando exista el guion** generado con `instructor-system`, y los guiones del Code 201 todavía no existen.

### Validación obligatoria a ejecutar antes de dictar cada clase del M1

Para C01, C02, C03 y C04, ANTES de dictar:

1. Generar `mi-sistema/CAPA 0 - CLASE {n}.md` con `instructor-system` desde el README + lab post-cambio + facilitator.
2. Generar `mi-sistema/CLASE {n}.md` (Capa 1 — momentos + tabla de tiempos).
3. **Antes de cerrar Capa 1**, validar paridad momento ↔ parte del lab:
   - Cada Momento que vaya a hacer code-along en VS Code debe poder citar una Parte específica del lab (P1, P2, P3, …) cuyos sub-pasos `X.Y` el instructor pueda leer verbatim.
   - Si un Momento no tiene Parte correspondiente: ajustar el lab agregando sub-paso, o rediseñar el Momento para hacer solo `code-along de concepto` en consola/archivo aislado (válido pero no preferido).
4. Validar granularidad:
   - 1 Parte del lab cubre 1-2 Momentos → OK.
   - 1 Momento necesita 2 Partes del lab → sobrecarga conceptual; dividir el Momento.
5. Validar especificidad de sub-pasos del lab:
   - Sub-pasos hiperespecíficos (*"2.3 — añadir `required` al input email y `pattern` al teléfono"*) → OK.
   - Sub-pasos vagos (*"agregar validación al formulario"*) → expandir el lab antes de dictar.

### Riesgos micro identificados (a confirmar al generar guiones)

- **C02 con edición puntual al lab:** los 2 huecos detectados (`flex-grow` y media queries vagas) se cierran con las ediciones de §3.2. Pero si el guion mete momentos adicionales sobre microinteracciones (`transform`, `transition`, `hover` están en logros adicionales del lab pero no en core), esos momentos quedarán solo con `code-along de concepto`. Decisión de Eric: no son tema central de C02, no merecen estatus de Momento — quedan como menciones rápidas o slides de cierre.
- **C03 P3 (media query verificable):** requiere DevTools modo responsive. Esto es una herramienta nueva implícita que el guion debería introducir como Momento dedicado.
- **C04 P4 (merge conflict):** el conflicto prefabricado debe estar en el repo template del curso ANTES de la clase. Si no, el Momento de Desafío no tiene `code-along del lab` posible.

---

## 9. Cómo alimentar este archivo al sistema de skills

Pasar este archivo como input al skill `/module-updater` del repo `ncode-201-guide` en modo **implementar**:

1. Skill lee este `.md`.
2. Skill audita el estado actual de cada archivo listado en §2.
3. Skill propone parches concretos (diffs) por cada archivo.
4. Eric aprueba parche por parche.
5. Skill aplica parches.
6. Ejecutar `/lint-markdown` sobre archivos modificados.
7. Ejecutar `/evaluation-class` sobre C01, C03, C04 para validación pedagógica final.
