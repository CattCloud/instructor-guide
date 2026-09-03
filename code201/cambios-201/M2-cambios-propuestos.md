# Cambios Propuestos al Módulo 2 — Code 201

> **Repo destino:** `ncode-201-guide` (`C:\dev\entertechschool\ncode-201-guide\`)
> **Skill destino:** `/module-updater` (modo implementar) sobre el M2 = `curriculum/class-05` a `curriculum/class-08`.
> **Fecha:** 2026-05-10
> **Coordinado con:** `M1-cambios-propuestos.md` (algunos cambios del M2 dependen de que el M1 ya esté implementado).

---

## 1. Contexto y motivación

Auditoría del M2 detectó cuatro clases de problemas:

**(a) Conceptos huérfanos del módulo o del curso completo:**
- **`prompt()` / `alert()`:** se enseñan en C05-C06 pero NUNCA se reutilizan en M3-M5. M3 usa DOM/forms, M5 usa `<form>` HTML desde C18. Después del cambio del M1 (C01 ya enseña forms accesibles, C04 enseña validación nativa), `prompt()` puede reemplazarse por captura desde formularios reales.
- **Prototipos puros (`Constructor.prototype`, `instanceof` explícito):** enseñados en C08, pero M3-M5 usan exclusivamente `class` ES6. Quedan como referencia teórica/histórica.
- **Bootstrap en C08 P3:** el lab actual usa Bootstrap como capa de UI completa (no solo CDN). Acabamos de eliminar Bootstrap del M1. Reemplazo con **Tailwind** (que ya está en C09 según el plan del M1) — exposición pasiva en C08, formalización en C09.
- **`forEach`, `sort`, `hasOwnProperty`:** aparecen en glosario/slides del lab pero ningún sub-paso los aplica. Mismo patrón huérfano detectado en `flex-grow` del lab de C02 (M1).

**(b) Salto cognitivo no anclado:**
- M2 enseña funciones constructoras (C07-C08). M4 (C13) usa `class` ES6 sin transición sintáctica explícita. C13 hace "discusión crítica clase vs constructora" pero no enseña la traducción.

**(c) Code-along sub-paso por sub-paso:**
- **C05 vaga:** usa Historias de Usuario + Checkpoints sin sub-pasos `X.Y` con código verbatim. Las CA dicen *"Si los datos son inválidos, mostrar error"* sin código. La regla de la skill `instructor-system` exige sub-pasos hiperespecíficos para que el instructor lea verbatim.
- **C06-C08 hiperespecíficas pero copy-paste:** el alumno completa 10-15%, el resto está pre-escrito. AGENTS.md declara M2 = 80% código completo / 20% gaps; la realidad es 85-90% / 10-15%. Bandera para auditoría futura, NO se ataca en esta ronda.

**(d) Inconsistencias documentales:**
- AGENTS.md llama al M2 "JavaScript Básico + DOM"; el README sílabo y los slides lo llaman "Fundamentos de Programación". El contenido real es programación pura. **DOM aparece en M3.** AGENTS.md está obsoleto.
- AGENTS.md autonomy table dice M2 = "el estudiante completa funciones, constructores y event handlers" — falta mencionar **prototipos** (foco completo de C08).

---

## 2. Resumen ejecutivo de cambios

| Archivo | Tipo de cambio |
|---|---|
| `AGENTS.md` (raíz) | EDITAR — corregir nombre del M2 ("Fundamentos de Programación: imperativa, funcional, OOP, prototipos"); aclarar que M3 introduce DOM completo y M2 solo toca captura de input desde formulario |
| `README.md` (sílabo raíz) | EDITAR si la descripción del M2 difiere — alinear con AGENTS.md |
| `curriculum/class-05/README.md` | EDITAR — alinear con la nueva estructura del lab |
| `curriculum/class-05/lab/README.md` | REESCRIBIR — convertir HU vagas en Partes con sub-pasos `X.Y` hiperespecíficos al estilo C06-C08 |
| `curriculum/class-05/slides/README.md` | EDITAR — alinear |
| `curriculum/class-05/facilitator/README.md` | EDITAR — alinear |
| `curriculum/class-06/lab/README.md` | EDITAR — agregar sub-paso explícito de `forEach` aplicado al proyecto víctima |
| `curriculum/class-07/README.md` | EDITAR — incorporar bloque "Captura de input desde formulario" |
| `curriculum/class-07/lab/README.md` | EDITAR — agregar P3 (o ampliación de P2) con form HTML pre-armado + JS de captura usando los constructores |
| `curriculum/class-07/slides/README.md` | EDITAR — slide nueva del puente JS↔form |
| `curriculum/class-07/facilitator/README.md` | EDITAR — alinear |
| `curriculum/class-08/README.md` | EDITAR — incorporar exposición pasiva a Tailwind + bloque puente constructora→class |
| `curriculum/class-08/lab/README.md` | REESCRIBIR P3 — Bootstrap → Tailwind en el HTML del template; agregar bloque puente al cierre |
| `curriculum/class-08/slides/README.md` | EDITAR — slide del puente constructora→class |
| `curriculum/class-08/facilitator/README.md` | EDITAR — alinear |
| `curriculum/class-08/test/questions.md` | EDITAR — sacar Q sobre `hasOwnProperty` si no se aplica en ningún sub-paso del lab; mantener Q sobre prototipos solo si el alumno escribió `Constructor.prototype.metodo` desde cero (no copiado) |

---

## 3. Cambios por archivo

### 3.1 `AGENTS.md` (raíz)

**Edición 1 — Tabla de autonomía por módulo (línea ~161):**
- Antes: *"M2 — JavaScript Básico + DOM | 5-8 | 80% | 20% | JS guiado: el estudiante completa funciones, constructores y event handlers"*
- Después: *"M2 — Fundamentos de Programación (imperativa, funcional, OOP, prototipos) | 5-8 | 80% | 20% | JS guiado: el estudiante completa funciones imperativas, funciones puras, constructores, prototipos y captura de input desde formulario HTML pre-armado"*

**Edición 2 — Aclaración sobre DOM (sección "Densidad de Contenido" o nota nueva):**
- Agregar: *"DOM completo (manipulación dinámica, render, múltiples eventos) se introduce en M3. M2 solo toca captura de input desde formulario (`querySelector('#id').value` + `addEventListener('submit', ...)` + `event.preventDefault()`) como puente entre HTML aprendido en M1 y el JS del módulo."*

---

### 3.2 `curriculum/class-05/`

**Objetivo de la clase tras el cambio:** Programación imperativa (variables, condicionales, bucles, funciones imperativas) con sub-pasos hiperespecíficos al estilo del resto del módulo.

**Reescritura del lab:**

El lab actual usa Historias de Usuario (HU1, HU2, HU3) con Criterios de Aceptación vagos. Reescribir como **Parte 1 / Parte 2 / Parte 3 con sub-pasos `X.Y`** que tengan código verbatim (no necesariamente código completo — pueden tener `// TU CÓDIGO AQUÍ` en gaps específicos, pero los sub-pasos sin código deben ser instrucciones precisas, no descripciones).

**Estructura propuesta (3 partes, ~120 min):**

| Parte | Tiempo | Foco |
|---|---|---|
| **P1 — Variables y entrada con `prompt()`** | ~30 min | Declarar `let movimientos = []` global, capturar nombre/tipo/valor con `prompt()`, validar con `if (!nombre || valor <= 0)`, guardar en array. Sub-pasos hiperespecíficos: 1.1 declarar, 1.2 capturar, 1.3 validar, 1.4 push al array. |
| **P2 — Bucle de registro con `while`** | ~40 min | Loop `while (continuar === 'sí')` para registrar múltiples movimientos. Sub-pasos: 2.1 estructura del while, 2.2 prompt continuar, 2.3 condición de salida. |
| **P3 — Funciones imperativas + reporte** | ~45 min | Refactorizar a 3 funciones: `registrarMovimiento()`, `calcularTotalSaldo()`, `mostrarResumen()`. Sub-pasos: 3.1 declarar funciones vacías, 3.2 mover lógica, 3.3 invocar y verificar `console.log`. |

**Lo que NO cambia:**
- Conceptos centrales enseñados.
- Proyecto víctima (`personal-budget`).
- Tiempo total de la clase.

**Lo que SÍ cambia:**
- Estilo de redacción del lab — de HU vagas a Partes con sub-pasos hiperespecíficos.
- Cada sub-paso tiene código verbatim o instrucción concreta (no "validar datos"; sí "agregar `if (!nombre || valor <= 0) { alert('Datos inválidos'); return; }`").

---

### 3.3 `curriculum/class-06/`

**Cambio puntual al lab:** agregar sub-paso explícito de `forEach`.

`forEach` está mencionado en slides/glosario pero ningún sub-paso del lab lo aplica. Es huérfano intra-módulo, pero `forEach` SÍ se reutiliza en M3-M5 (varios labs lo usan). Por tanto, vale agregarlo.

**Edición concreta — agregar sub-paso 3.X en `## Parte 3` (después del actual):**

```markdown
3.X. Implementa una función `imprimirMovimientos(movimientos)` que use `forEach()` para mostrar cada movimiento por consola con formato:

```javascript
function imprimirMovimientos(movimientos) {
  movimientos.forEach((m, i) => {
    console.log(`${i + 1}. ${m.nombre} - ${m.tipo}: $${m.valor}`);
  });
}

imprimirMovimientos(movimientos);
```

Verifica que la consola muestre los movimientos numerados y formateados.
```

**Lo que NO cambia:** estructura de las 3 partes, conceptos centrales, código existente.

**Decisión sobre `sort` y `hasOwnProperty`:**
- `sort`: dejar como está en logros adicionales (no se reusa críticamente en M3-M5).
- `hasOwnProperty`: ver §3.5 (sale del test de C08 si sigue sin aplicarse).

---

### 3.4 `curriculum/class-07/`

**Objetivo de la clase tras el cambio:** OOP (constructores, `this`, `new`, métodos) **+ primer contacto con captura de input desde formulario HTML**.

**Edición principal — agregar bloque "Captura de input desde formulario":**

El alumno ya conoce de M1 el HTML del form (`<form>`, `<label>`, `<input>`, validación nativa). Aquí aprende **el puente JS↔form**: cómo capturar los valores y pasarlos al constructor.

**Reestructuración del lab (3 partes, ~90-120 min):**

| Parte | Tiempo | Foco |
|---|---|---|
| **P1 — Constructor `Movimiento`** | ~25 min | Igual al actual: function constructor + this.propiedad + this.metodo + new |
| **P2 — Constructor `Presupuesto`** | ~30 min | Igual al actual: array de movimientos, métodos calcularIngresos/Gastos/Balance |
| **P3 — Captura desde formulario** | ~35 min | **NUEVO.** HTML del form viene pre-armado en el template del lab (vanilla, sin frameworks aún). Alumno escribe el JS para capturar y construir instancias. |

**Detalle de P3:**

```markdown
## Parte 3 – Captura desde Formulario (~35 min)

> El template viene con un `<form id="form-movimiento">` pre-armado en `index.html` con campos: nombre (`<input type="text">`), tipo (`<select>` con ingreso/gasto), valor (`<input type="number" min="0.01" required>`).
> No modifiques el HTML — concéntrate en el JS.

3.1. En `app.js` selecciona el formulario:

```javascript
const form = document.querySelector('#form-movimiento');
```

3.2. Escucha el evento submit y previene el default:

```javascript
form.addEventListener('submit', function(event) {
  event.preventDefault();
  // captura aquí
});
```

3.3. Captura los valores de los inputs y construye una instancia:

```javascript
const nombre = document.querySelector('#nombre').value;
const tipo = document.querySelector('#tipo').value;
const valor = parseFloat(document.querySelector('#valor').value);

const movimiento = new Movimiento(nombre, tipo, valor);
miPresupuesto.agregarMovimiento(movimiento);
console.log('Agregado:', movimiento);
```

3.4. Verifica en DevTools (F12 → Console) que cada submit del form agregue un movimiento al array. Limpia el form con `form.reset()`.

✅ **Checkpoint visual:** Llenar el form 3 veces. La consola debe mostrar `miPresupuesto.movimientos` con 3 elementos.
```

**Restricción clave:** el alumno NO escribe HTML/CSS en P3 (el form ya está armado). Solo escribe ~5-8 líneas de JS. Esto preserva el foco "Fundamentos de Programación" del módulo.

**Renombrado:** este bloque se llama **"Captura de input desde formulario"** (NO "DOM básico"). Ver Edición 2 de §3.1.

---

### 3.5 `curriculum/class-08/`

**Objetivo de la clase tras el cambio:** Prototipos + herencia + integración con UI **vía Tailwind (exposición pasiva)** + **bloque puente constructora→class ES6** al cierre.

#### Cambio 1 — P3 con Tailwind en lugar de Bootstrap

(Coordinado con `M1-cambios-propuestos.md` §3.5.)

- Cambiar `<link href="...bootstrap...">` por `<script src="https://cdn.tailwindcss.com"></script>` (Play CDN).
- Reescribir clases del HTML del template a utility classes:
  - `container mt-4` → `max-w-4xl mx-auto mt-8 px-4`
  - `row` → `flex flex-col md:flex-row gap-4`
  - `col-md-6` → `flex-1`
  - `card card-body` → `bg-white rounded-lg shadow p-6`
  - `form-control` y `form-select` → `w-full border border-gray-300 rounded p-2 mb-3`
  - `btn btn-primary w-100` → `w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700`
  - `alert alert-success` → `bg-green-100 text-green-800 p-3 rounded mb-2`
  - `alert alert-danger` → `bg-red-100 text-red-800 p-3 rounded mb-2`
- El JS de la P3 (líneas 302-368 del lab actual) NO cambia.
- En el README de C08 agregar: *"El template usa Tailwind para los estilos. No necesitas modificar el HTML — concéntrate en el JS. En la próxima clase aprenderás Tailwind formalmente."*

#### Cambio 2 — Bloque puente "constructora → class ES6" al cierre

Agregar como sección final del lab (después de P3, antes de Logros Adicionales):

```markdown
## Cierre — De funciones constructoras a `class` (10 min)

> Este bloque NO es una nueva parte del lab. Es un puente sintáctico hacia la próxima evolución (M4).

Lo que escribiste en P1-P2 con función constructora + prototipos:

```javascript
function Movimiento(nombre, tipo, valor) {
  this.nombre = nombre;
  this.tipo = tipo;
  this.valor = valor;
}

Movimiento.prototype.formatear = function() {
  return `${this.nombre}: $${this.valor}`;
};
```

Es exactamente equivalente a esta sintaxis moderna con `class`:

```javascript
class Movimiento {
  constructor(nombre, tipo, valor) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.valor = valor;
  }

  formatear() {
    return `${this.nombre}: $${this.valor}`;
  }
}
```

**Lo que es importante entender:**
- `class` NO es un mecanismo nuevo en JavaScript — es **azúcar sintáctica** sobre prototipos. Por debajo, JS sigue usando la cadena de prototipos.
- Lo que escribes con `class` Movimiento { ... } se traduce internamente a una función constructora + métodos en el prototipo.
- En M4 vas a usar `class` como sintaxis principal porque es más legible. Pero ya entiendes qué pasa por debajo.

🏆 **Reto opcional (5 min):** Reescribe el constructor `Presupuesto` con sintaxis `class`. Verifica que sigue funcionando con tu UI de Tailwind sin tocar el HTML.
```

#### Cambio 3 — Test del módulo (`test/questions.md`)

- **Q7 sobre `hasOwnProperty`:** sacar o reformular. Hoy `hasOwnProperty` está mencionado en `Presupuesto.prototype.validarTipos()` (línea 202-208 del lab actual) pero no es centro de un sub-paso. Si tras la edición sigue siendo periférico, sacar la pregunta.
- **Mantener Q sobre prototipos** solo si los sub-pasos editados hacen que el alumno escriba `Constructor.prototype.metodo` con genuino entendimiento (no solo copia del código pre-armado). Si la edición no incrementa la autonomía, considerar reformular Q a algo más conceptual ("¿qué ventaja tiene mover métodos al prototipo vs al constructor?" en lugar de "escribe la sintaxis correcta").

---

## 4. Propagación: archivos de otros módulos afectados

| Archivo | Por qué se afecta | Cambio mínimo |
|---|---|---|
| `M1-cambios-propuestos.md` (este repo) | Coordinación: cambia la edición a C08 (Bootstrap → Tailwind, no → vanilla) y el framing de C09 (formalización en vez de introducción nueva). **Ya actualizado.** | Verificar coherencia antes de pasar al `/module-updater` |
| `class-09/README.md` + slides + lab (M3) | Tailwind ya no es nuevo en C09 — el alumno lo expuso pasivamente en C08. C09 lo formaliza. | Cambiar framing: *"recuerden las clases que vieron en el template de C08 — esto es Tailwind"*. Tabla de utility classes con referencia a las que ya usaron |
| `class-13/README.md` + lab + facilitator (M4) | Hoy hace "discusión teórica" funciones constructoras vs `class`. Ahora C08 ya cierra esa traducción al final. | Aliviar/eliminar el bloque de discusión teórica. C13 puede arrancar usando `class` directamente, asumiendo conocido |
| `class-18/README.md` + lab + facilitator (M5) | Forms ya se vieron en M1 (C01+C04) y se aplicaron en M2 (C07-C08). | Ajustar referencia: *"como vimos en C01 (sintaxis), C04 (validación), C07-C08 (captura desde JS)"* |
| `README.md` (sílabo raíz) | Resumen del M2 puede necesitar alineación con AGENTS.md corregido | Verificar coherencia |

---

## 5. Reglas y restricciones que esto preserva

- **PROGRESSIVE_INTEGRATION:** el proyecto víctima (`personal-budget`) sigue evolucionando lab por lab — imperativa → funcional → OOP → prototipos + UI con Tailwind + sintaxis class. Cada lab parte del estado del anterior.
- **MAX_TWO_NEW_TOOLS:**
  - C05 con sub-pasos hiperespecíficos: variables + bucles + funciones imperativas. Las herramientas no aumentan, solo se redacta diferente.
  - C06 con `forEach`: agrega 1 utility (`forEach`) a las ya enseñadas. OK.
  - C07 con captura de input: agrega 2 (querySelector + addEventListener) a OOP. C07 sigue dentro del límite porque OOP es UN concepto unificado.
  - C08 con Tailwind exposición pasiva: NO cuenta como herramienta nueva (alumno solo lee, no aprende). Bloque puente constructora→class es 1 herramienta nueva. Total: 1 nueva (`class`).
- **VERIFIABLE_DELIVERABLE:** cada Parte tiene checkpoint observable (consola con array poblado, form que se limpia tras submit, instancia visible en DevTools).
- **EXPLICIT_DEPENDENCIES:** ningún sub-paso usa concepto sin explicación previa. Tailwind exposición pasiva está marcada como tal — el alumno sabe que lo verá formalmente en C09.
- **Regla de code-along** (`instructor-system` §6.4): cada concepto enseñado en C05-C08 tiene su sub-paso `X.Y` en el lab donde aplicarlo al proyecto víctima. C05 deja de tener HU vagas; los huérfanos `forEach` se cierran; el puente constructora→class se aplica concretamente.

---

## 6. Validación post-cambio (checklist)

Ejecutar en este orden:

- [ ] Para cada clase modificada, verificar coherencia entre `README.md`, `slides/README.md` y `lab/README.md`: cada concepto enseñado debe tener un sub-paso del lab que lo aplique.
- [ ] Verificar que C05 lab ya no tenga HU vagas — todas las instrucciones son sub-pasos `X.Y` con código verbatim o instrucciones precisas.
- [ ] Verificar que C06 lab tenga sub-paso explícito de `forEach`.
- [ ] Verificar que C07 lab tenga P3 con form HTML pre-armado + JS de captura, y que el alumno escriba ~5-8 líneas de JS (no más).
- [ ] Verificar que C08 lab P3 use Tailwind (no Bootstrap), JS de la P3 intacto, README mencione exposición pasiva.
- [ ] Verificar que C08 cierre con bloque puente constructora→class.
- [ ] Verificar que `class-08/test/questions.md` no evalúe `hasOwnProperty` si sigue sin aplicarse.
- [ ] Verificar que AGENTS.md tabla autonomía describa M2 correctamente y que la nota de DOM esté presente.
- [ ] Continuidad del proyecto víctima entre labs (mismo repo `personal-budget` arrastrando estado).
- [ ] `lint-markdown` sobre todos los archivos modificados.
- [ ] Validar `MAX_TWO_NEW_TOOLS` en cada clase modificada antes de cerrar.
- [ ] Lectura cruzada de C09 (M3): confirmar que ya formaliza Tailwind en vez de introducirlo. Lectura cruzada de C13 (M4): confirmar que ya no hace "discusión teórica" innecesaria de class vs constructora.

---

## 7. Riesgos identificados

- **C05 reescrito puede sentirse muy "tutorial"** (sub-pasos hiperespecíficos eliminan la libertad de las HU). Mitigación: mantener Logros Adicionales como espacio de autonomía. Los sub-pasos hiperespecíficos son para code-along en vivo; los logros son para autonomía post-clase.
- **C07 P3 introduce DOM antes de M3.** Tensión documental con AGENTS.md. Mitigación: la edición a AGENTS.md (§3.1 Edición 2) aclara explícitamente que M2 toca solo "captura de input desde formulario", no DOM completo.
- **C08 con Tailwind exposición pasiva puede confundir al alumno** si quiere modificar el HTML. Mitigación: la P3 lo dice explícitamente (*"no modifiques el HTML — concéntrate en el JS"*). Si un alumno modifica el HTML y rompe el layout, el facilitator lo redirige.
- **El bloque puente constructora→class en C08** agrega 10 min al final de una clase ya larga. Si C08 se está pasando del tiempo, el bloque puente puede quedar como tarea autónoma post-clase con material claro.
- **`/module-updater` puede no saber generar el HTML del template del form para C07 P3.** Si genera HTML genérico que no encaje con la estética del proyecto víctima, Eric lo ajusta manualmente.

---

## 8. Validación con la skill `instructor-system` (regla de code-along)

Igual que en el `M1-cambios-propuestos.md`: este documento garantiza **paridad macro** (cada bloque conceptual del M2 post-cambio tiene una Parte del lab que lo aplica al proyecto víctima). No garantiza paridad micro (Momento del guion ↔ sub-paso del lab) — esa solo se verifica cuando exista el guion generado con `instructor-system`.

### Validación obligatoria a ejecutar antes de dictar cada clase del M2

Para C05, C06, C07 y C08, ANTES de dictar:

1. Generar `mi-sistema/CAPA 0 - CLASE {n}.md` con `instructor-system` desde el README + lab post-cambio + facilitator.
2. Generar `mi-sistema/CLASE {n}.md` (Capa 1 — momentos + tabla de tiempos).
3. Validar paridad momento ↔ parte del lab antes de cerrar Capa 1 (mismo procedimiento que M1).
4. Validar especificidad de sub-pasos del lab — los nuevos sub-pasos de C05 reescritos deben ser hiperespecíficos.

### Riesgos micro identificados (a confirmar al generar guiones)

- **C05 reescrita:** asumir que el guion va a tener 5-7 momentos. Verificar que las 3 Partes del lab cubran todos los momentos sin huérfanos.
- **C07 P3 (captura desde form):** requiere VS Code dividido con navegador para code-along. Asegurar que el guion lo declare.
- **C08 P3 con Tailwind:** el guion NO debe tratar Tailwind como concepto enseñado en C08. Tratarlo como herramienta cuyo template viene pre-armado, igual que cuando se usaba Bootstrap en el lab original.
- **C08 cierre constructora→class:** el guion debe declararlo como "Bloque puente" (Momento corto, no Momento principal) para que no compita con prototipos por tiempo.

---

## 9. Cómo alimentar este archivo al sistema de skills

**Importante:** procesar el `M1-cambios-propuestos.md` ANTES que este. Algunos cambios del M2 dependen de que el M1 ya esté implementado (ej: el reemplazo Bootstrap → Tailwind en C08 asume que C09 ya tiene la formalización de Tailwind preparada, y eso viene del M1).

Pasar este archivo como input al skill `/module-updater` del repo `ncode-201-guide` en modo **implementar**:

1. Skill lee este `.md`.
2. Skill audita el estado actual de cada archivo listado en §2.
3. Skill propone parches concretos (diffs) por cada archivo.
4. Eric aprueba parche por parche.
5. Skill aplica parches.
6. Ejecutar `/lint-markdown` sobre archivos modificados.
7. Ejecutar `/evaluation-class` sobre C05, C06, C07, C08 para validación pedagógica final.
8. **Verificación cruzada con M1:** confirmar que la edición del M1 a C08 (Bootstrap → Tailwind) se aplicó coherentemente con la edición del M2 a C08 (estructura de la P3).
