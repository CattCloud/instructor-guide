# CAPA 0 — CLASE 16: Módulos (ESM) y Cierre del Proyecto

> **Fuentes:** **_code201/class-16/README.md_** · **_code201/class-16/lab/README.md_** · **_code201/class-16/APUNTES.md.md_** *(inputs canónicos: README de clase + lab; los apuntes propios de Eric como apoyo para `.sort()` y para Módulos ESM).*
> **Módulo:** M4 — Clase 4 de 4 (**ÚLTIMA del módulo · LAB CALIFICADO · Proyecto Integrador**)
> **Proyecto víctima:** **Gestor de Plantillas para WhatsApp** (repo **_whatsapp-templates_**, rama **_lab16-cierre_**) — la MISMA app de C13-C15. Hoy se **pule** (modal, estados vacíos, orden) y, sobre todo, se **reorganiza como profesional** con módulos ESM.
> **Continuidad:** el alumno llega con la app completa de C15 (CRUD + filtro + persistencia). Se reusan `state`, `render()`, `guardar`/`cargar`, `plantillasVisibles`, `contarPorHashtag`, `normalizarHashtag`, la clase `Template`. Hoy ese código se **reparte en archivos** con `import`/`export`.
> **Reactivación:** funciones como valor (M2), `try/catch` (C12), operador ternario, `new Date` (C13-C15), la **inmutabilidad** (C14: no mutar el estado), estado→`render()`.
> **Requiere servidor local:** los módulos ESM NO funcionan abriendo el HTML con doble clic (`file://`) — hay que usar Live Server o `python -m http.server`. En GitHub Pages funcionan sin problema.
> **Es el LAB CALIFICADO del M4** (rúbrica 5 criterios × 20 pts = 100). El cierre de la clase es la **entrega del Proyecto Integrador** (2 HUs propias + README + deploy + demo).

---

## Idea fuerza de la clase

**De una app que funciona a una app que un profesional entregaría — pulida por fuera y ordenada por dentro.** Dos frentes: (1) **experiencia de usuario (UX)** —un **modal de confirmación propio** antes de borrar (no el cuadro feo del navegador) y **estados vacíos amigables** que guían en vez de mostrar una pantalla en blanco—; (2) **arquitectura** —repartir el código, que hasta hoy vivía en pocos archivos comunicándose por variables globales, en **módulos ESM** (`export`/`import`): cada archivo con su propia responsabilidad (estado, persistencia, interfaz) y su propio ámbito—. Y de yapa, ordenar la colección con **`.sort()`**. La tesis del día: **un código modular —cada pieza con una responsabilidad, comunicándose por `import`/`export`— es lo que separa un script que funciona de un proyecto mantenible.**

---

## BLOQUE 1 — UX: confirmar acciones destructivas (modal propio)

*(Antes de la arquitectura, dos mejoras de experiencia que separan un prototipo de una app real. La primera: no dejar que un clic accidental borre datos sin preguntar — pero con un cuadro propio, no el nativo.)*

---

### CONCEPTO: Modal de confirmación (mostrar/ocultar con una clase)

Un **modal** es una ventana propia —hecha con HTML + Tailwind— que se superpone a la app para pedir una confirmación, y que se **muestra u oculta alternando una clase** (`hidden`). Reemplaza al cuadro nativo del navegador (`confirm()`), que es feo y no se puede estilar.

**Sintaxis general — mostrar / ocultar:**
```javascript
<elemento>.classList.remove("hidden");   // mostrar
<elemento>.classList.add("hidden");      // ocultar
```

**Dependencia técnica:** el modal es un `<div id="modal" class="hidden ...">` que arranca oculto (con `hidden` de Tailwind, que hace `display:none`). Se posiciona fijo cubriendo la pantalla (`fixed inset-0`, fondo semitransparente). Mostrarlo/ocultarlo es solo agregar o quitar la clase `hidden` — la misma técnica de "clase que prende/apaga" que se usa para cualquier overlay. Adentro tiene un texto (`#modal-texto`), un botón **Cancelar** y uno **Confirmar**.

### ANALOGÍA: El "¿estás seguro?" del cajero
Un modal de confirmación es el **"¿confirma la operación?"** del cajero automático antes de retirar plata: te frena un segundo antes de una acción irreversible, y podés cancelar. Sin él, un botón mal apretado ejecuta sin vuelta atrás.

### ESTRATEGIA VISUAL: El overlay oscuro
Mockup de la app con el modal encima: un fondo oscurecido (semitransparente) sobre toda la pantalla, y al centro una tarjeta blanca con el mensaje ("¿Eliminar esta plantilla?") y dos botones (Cancelar gris / Eliminar rojo). Etiqueta: *se muestra/oculta con la clase `hidden`.* Anclaje: *el modal tapa la app hasta que el usuario decide.*

---

### CONCEPTO: Guardar la acción pendiente — un modal reutilizable

Para que el MISMO modal sirva para **cualquier** acción peligrosa (borrar una plantilla, vaciar todo), se guarda **qué hacer al confirmar** en una variable — y esa variable contiene una **función** (la acción a ejecutar si el usuario acepta). Es la idea de "funciones como valor" (M2) puesta a trabajar: guardo una acción ahora, la ejecuto después.

**Sintaxis general (fórmula del lab, HU1):**
```javascript
let accionPendiente = null;     // que ejecutar si el usuario acepta (una funcion)

function pedirConfirmacion(mensaje, accion) {
  modalTexto.textContent = mensaje;
  accionPendiente = accion;            // guardo la accion para despues
  modal.classList.remove("hidden");    // muestro el modal
}

// al confirmar:
if (accionPendiente) accionPendiente();   // ejecuto la accion guardada
modal.classList.add("hidden");
accionPendiente = null;
```

**Fórmula del lab — quién pide confirmación:**
```javascript
function eliminarPlantilla(id) {
  pedirConfirmacion("¿Eliminar esta plantilla?", function () {
    state.plantillas = state.plantillas.filter(p => p.id !== id);
    render();
  });
}
```

**Dependencia técnica:** **_accionPendiente_** guarda una **función** (el "qué hacer") que se define distinta en cada llamada — para borrar una, para vaciar todas—. Al confirmar, se ejecuta esa función (**_accionPendiente()_**); al cancelar, se descarta (`accionPendiente = null`) sin ejecutar nada. Es lo que hace al modal **reutilizable**: un solo cuadro para todas las acciones irreversibles. **Regla de uso:** las confirmaciones se piden SOLO para acciones **irreversibles** (borrar); NO al agregar o editar. Nota: `render()` ya persiste (C15), así que la acción no toca `localStorage` directamente.

### ANALOGÍA: La nota "hacer al confirmar"
`accionPendiente` es como una **nota que le dejás al cajero**: "si el cliente dice que sí, ejecutá ESTA operación". El cajero (el botón Confirmar) no sabe de antemano qué operación es — la lee de la nota. Cambiás la nota (la función) y el mismo cajero sirve para cualquier operación.

### ESTRATEGIA VISUAL: Una acción guardada que espera
Diagrama: `eliminar` / `vaciar` → llaman a **_pedirConfirmacion(msg, acción)_** → la **acción** (una cajita "función") queda guardada en `accionPendiente` mientras el modal está abierto → el botón **Confirmar** dispara esa cajita; **Cancelar** la tira. Anclaje: *el modal guarda la acción y la ejecuta solo si el usuario acepta.*

---

## BLOQUE 2 — UX: estados vacíos amigables

*(La segunda mejora de experiencia: cuando la lista no tiene nada que mostrar, no dejar una pantalla en blanco — y distinguir DOS vacíos distintos, porque el mensaje correcto depende de cuál sea.)*

---

### CONCEPTO: Los dos estados vacíos

Una lista puede estar vacía por **dos razones distintas**, y cada una necesita su propio mensaje: (1) **no hay nada creado** todavía → invitar a crear ("Aún no tienes plantillas. ¡Crea la primera!"); (2) **hay datos, pero el filtro no encontró coincidencias** → avisar de la búsqueda ("No se encontraron plantillas con ese filtro"). Confundirlas deja al usuario sin saber qué hacer.

**Sintaxis general (fórmula del lab, HU2 — decidir el mensaje en `render()`):**
```javascript
if (visibles.length === 0) {
  const vacio = state.plantillas.length === 0
    ? "Aún no tienes plantillas. ¡Crea la primera!"   // no hay NADA creado
    : "No se encontraron plantillas con ese filtro.";  // hay datos, el filtro no encontro
  // ... pintar ese mensaje en la lista
} else {
  // ... pintar las plantillas como siempre
}
```

**Dependencia técnica:** la clave es comparar **dos longitudes**: **_visibles.length_** (lo que se MOSTRARÍA, ya filtrado) y **_state.plantillas.length_** (lo que HAY en total). Si `visibles` está vacío pero `state.plantillas` NO → el filtro es el culpable. Si ambos están vacíos → no hay nada creado. El **operador ternario** elige el mensaje. Todo ocurre dentro de `render()`, así que el estado vacío también se recalcula solo en cada cambio.

### ANALOGÍA: El estante vacío vs "no hay de esa marca"
Entrar a un almacén y ver un **estante totalmente vacío** ("todavía no surtimos") es distinto a preguntar por una marca y que te digan **"de esa no tenemos"** (hay productos, pero no el que buscás). El cartel correcto cambia según el caso — y al cliente le sirve saber cuál es.

### ESTRATEGIA VISUAL: Dos pantallas vacías distintas
Dos mockups de la lista vacía lado a lado: izquierda "Aún no tienes plantillas. ¡Crea la primera!" (con un ícono amistoso); derecha "No se encontraron plantillas con ese filtro." (con el buscador mostrando un texto). Etiqueta: *misma lista vacía, dos causas, dos mensajes.* Anclaje: *comparar `visibles` vs `state.plantillas` dice cuál mostrar.*

---

## BLOQUE 3 — Módulos ESM: repartir el código (CONCEPTO CENTRAL del día)

*(El tema nuevo grande de la clase. Hasta hoy el código vivía en pocos archivos que se hablaban por variables globales y dependían del orden de los `<script>`. Los módulos ESM resuelven eso: cada archivo con su ámbito, exponiendo solo lo que exporta.)*

---

### CONCEPTO: El problema — un solo ámbito global y el orden de los `<script>`

Hasta C15, los archivos JS (`Template.js`, `app.js`, `persistence.js`) se cargaban con varias etiquetas **_&lt;script&gt;_** en orden, y compartían todo por **variables globales**: cada uno veía las variables y funciones de los otros. Eso trae tres problemas: **el orden importa** (si `app.js` carga antes que `Template.js`, falla), **no hay encapsulamiento** (todo está en el ámbito global, con riesgo de choques de nombres), y a medida que la app crece, **un archivo lleno de todo es confuso de mantener**.

**Dependencia técnica:** esta es la **"modularización tradicional"** que el alumno vino usando sin nombrarla. Funciona en apps chicas, pero no escala. La solución que se estandarizó en **ES2015** son los **Módulos ES (ESM)**: cada archivo declara explícitamente qué comparte (`export`) y qué necesita (`import`), sin depender de variables globales ni del orden de carga.

### ESTRATEGIA VISUAL: Un solo cajón vs cajones rotulados
A la izquierda, "modularización tradicional": varios `<script>` volcando TODO en un mismo saco global (etiqueta roja: "orden importa · choques de nombres"). A la derecha, "ESM": archivos separados, cada uno una caja con una puerta rotulada `export`, conectados por flechas `import` (etiqueta verde: "cada uno su ámbito · orden no importa"). Anclaje: *de un ámbito global compartido a piezas con fronteras claras.*

---

### CONCEPTO: Qué es un módulo y por qué

Un **módulo** es un **archivo de JavaScript** que contiene código reutilizable (variables, funciones, clases) y que **expone** parte de él con `export` para que otros archivos lo **traigan** con `import`. Cada módulo tiene su **propio ámbito (scope)**: lo que no se exporta queda **privado** al archivo y no contamina el ámbito global.

**Por qué usar módulos (de los apuntes):**
- **Organización:** el proyecto se divide en piezas pequeñas, cada una con una responsabilidad clara.
- **Encapsulamiento:** cada módulo tiene su propio ámbito; sus variables NO chocan con las de otros.
- **Reutilización:** un módulo se puede usar en varios lugares.
- **Mantenibilidad:** más fácil de leer, depurar y escalar (clave para trabajar en equipo).

**Dependencia técnica:** un archivo JS **NO es un módulo** hasta que usa `export` (o se carga como módulo). Al volverse módulo, gana su ámbito propio: nada "se ve" desde afuera salvo lo exportado. Esta es la diferencia de fondo con los `<script>` tradicionales, donde todo era global.

### ETIMOLOGÍA / HISTORIA
Durante años JavaScript **no tuvo** sintaxis de módulos a nivel del lenguaje; se improvisaba con variables globales o patrones caseros (IIFE, y en Node.js, `require`/`module.exports`). En **ES2015 (ES6)** se introdujeron los **Módulos ES (ESM)** con `import`/`export` como estándar nativo. Hoy React, Vue, Vite y los navegadores modernos se basan en ESM — es el estándar profesional. Lo mencionamos en C13 y lo cumplimos hoy.

---

### CONCEPTO: `export` e `import` (named) + `<script type="module">`

**_export_** hace que algo de un archivo sea **accesible** para otros; **_import_** lo **trae** a otro archivo indicando su **ruta**. La forma que usamos hoy es la **nombrada** (named): se exporta con nombre y se importa con ese mismo nombre entre llaves `{}`.

**Sintaxis general (named export/import):**
```javascript
// en archivo.js  -> exportar (directo, sobre cada elemento)
export const CLAVE = "...";
export function guardar() { ... }
export class Template { ... }

// en otroArchivo.js -> importar lo que se necesita (por su ruta, con ./ y .js)
import { CLAVE, guardar } from "./archivo.js";
```

**Activar los módulos en el HTML — `type="module"`:**
```html
<script type="module" src="js/app.js"></script>
```

**Dependencia técnica:** para usar `import`/`export` en el navegador, el `<script>` debe llevar **_type="module"_** — eso le avisa al navegador que es un módulo (ámbito propio, y el orden de carga deja de importar: los `import` arman el rompecabezas solos). Las **rutas** de import llevan **_./_** y la **extensión .js** (`"./state.js"`, no `"state"`). Los `import` van **arriba del archivo** (el motor los resuelve antes de ejecutar). Solo se puede importar lo que el otro archivo **exportó explícitamente**. *(Existen otros tipos —`export default` para un único elemento principal, y mixto— pero el proyecto usa named exports.)*

### ANALOGÍA: La biblioteca con fichero de préstamos
Un módulo es como una **biblioteca**: en el mostrador (`export`) declara qué libros presta; los demás van con su carnet y piden prestado un libro específico (`import { libro }`). Lo que la biblioteca no pone en el mostrador queda en su depósito privado (no exportado). Y no importa en qué orden lleguen los lectores: cada uno pide lo que necesita.

### ESTRATEGIA VISUAL: Flechas import entre archivos
Diagrama de los archivos del proyecto como cajas, con flechas `import` entre ellos: `app.js` importa de `state.js`, `storage.js`, `ui.js`; `storage.js` importa `state`; `ui.js` importa de `storage.js` y `state.js`; `state.js` importa `Template`. Cada caja muestra arriba lo que `export`a. Anclaje: *las flechas `import` conectan las piezas; el navegador arma el orden solo.*

---

### CONCEPTO: Repartir la app en módulos — separar responsabilidades

Modularizar la app es repartir su código en archivos **por responsabilidad**, y que cada uno exporte lo que los demás necesitan. Es la aplicación concreta de ESM al proyecto.

**Fórmula del lab (HU3 — qué exporta cada archivo):**

| Archivo | Responsabilidad | Exporta |
|---|---|---|
| **_models/Template.js_** | el modelo de datos | `class Template` |
| **_state.js_** | el estado y su lógica | `state`, `contarPorHashtag`, `plantillasVisibles`, `normalizarHashtag` |
| **_storage.js_** | la persistencia | `CLAVE`, `CLAVE_FILTRO`, `guardar`, `cargar` |
| **_ui.js_** | la interfaz | `render` |
| **_app.js_** | el arranque | *(no exporta; solo importa y arranca)* |

**Dependencia técnica:** lo que se usa solo dentro de un archivo (los listeners, `eliminarPlantilla`, `cargarEnFormulario`, el `submit`) **NO** se exporta — vive en `ui.js` usando lo que importó. El `app.js` queda mínimo: importa `state`, `cargar` y `render`, y arranca (`state.plantillas = cargar(); render()`). **Reubicación con sentido:** el indicador `#estado` que en C15 vivía dentro de `guardar()`, ahora vive en `render()` (en `ui.js`) — `guardar()` solo persiste, la interfaz la toca `ui.js`. Eso es **separar responsabilidades**: cada módulo hace lo suyo. **Criterio del día:** la app debe hacer EXACTAMENTE lo mismo después de modularizar — la modularización no cambia el comportamiento, cambia la organización.

### ESTRATEGIA VISUAL: El antes y después de la arquitectura
Izquierda: la app de C15 como una pila de `<script>` con una nube "variables globales". Derecha: 5 cajas rotuladas (Template · state · storage · ui · app) conectadas por flechas `import`, cada una con su responsabilidad. Etiqueta: *mismo comportamiento, código repartido por responsabilidad.* Anclaje: *modularizar reorganiza, no cambia lo que la app hace.*

---

## BLOQUE 4 — Ordenar la colección con `.sort()`

*(Con la app ya modular, agregar una función nueva es limpio: se toca `state.js` (la lógica) y `ui.js` (el control). El método nuevo del bloque es `.sort()`, para ordenar las plantillas por fecha.)*

---

### CONCEPTO: `.sort()` con comparador

**_.sort()_** organiza los elementos de un array según el criterio que definas en un **callback comparador**. **Por defecto** —sin comparador— convierte los elementos a **texto** y los ordena **alfabéticamente** (útil para palabras; NO para números). Y **modifica el array original** (lo muta).

**Sintaxis general:**
```javascript
array.sort(comparadorOpcional);   // el comparador (a, b) define el criterio
```

**Ordenamiento por defecto (alfabético):**
```javascript
["manzana","pera","uva","mango"].sort();   // ["manzana","mango","pera","uva"]  (alfabetico)
```

**Ordenamiento numérico — con función `(a, b)`:** el comparador devuelve un **número** cuyo SIGNO decide el orden:
```javascript
[10,5,20,1].sort((a, b) => a - b);   // [1,5,10,20]   ascendente (a-b: negativo -> a antes)
[10,5,20,1].sort((a, b) => b - a);   // [20,10,5,1]   descendente
```
- Si `a - b` es **negativo**, `a` va **antes**; **positivo**, `a` va **después**; `0`, no cambia.

**Dependencia técnica:** para objetos se ordena por una **propiedad** —`sort((a, b) => a.propiedad - b.propiedad)` (precios, edades, fechas)—. **`.sort()` MUTA** el array; para no mutar el estado se copia con **_[...]_** antes de ordenar. *(Esa copia es la **inmutabilidad** que vimos en C14 al editar y eliminar: no tocar el original, trabajar sobre una copia.)*

### ANALOGÍA: El árbitro de a dos
`.sort()` no ordena la fila de un vistazo: va comparando **de a dos** y, para cada par, el comparador le dice "cuál va primero" (con el signo del número). Cambiando el comparador cambia el criterio, sin tocar los datos.

### ETIMOLOGÍA / HISTORIA
Que **_.sort()_** mute el array es herencia del JavaScript clásico (muchos métodos de array mutaban). Los métodos modernos como **_.toSorted()_** (ES2023) NO mutan, pero `.sort()` clásico sí — por eso el hábito de copiar con `[...]` antes. Ordenar con un comparador `(a, b)` es un patrón compartido con casi todos los lenguajes.

### ESTRATEGIA VISUAL: Copiar, después ordenar
El array del estado → **_[...]_** produce una copia (el original queda intacto al costado) → la copia pasa por **_.sort(comparador)_** y sale ordenada. Debajo, los dos comparadores del lab: "recientes (new Date b - a)" y "antiguas (new Date a - b)". Anclaje: *sort muta lo que toca; por eso tocamos una copia, no el estado.*

---

### CONCEPTO: Ordenar por fecha + encadenar después del filtro

En el proyecto, el orden es por **fecha**: se restan dos **_new Date(...)_** (recientes → `b - a`, antiguas → `a - b`), sobre una **copia**. El orden vive en `state.orden`, y se encadena **después** del filtro en el pipeline "qué mostrar".

**Fórmula del lab (HU4 — en `state.js`):**
```javascript
function ordenar(plantillas) {
  const copia = [...plantillas];   // copiamos: .sort() muta
  return state.orden === "antiguas"
    ? copia.sort((a, b) => new Date(a.fecha) - new Date(b.fecha))   // mas antiguas primero
    : copia.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));  // mas recientes primero
}

export function plantillasVisibles() {
  const filtradas = /* filtro por hashtag como en C14/C15 */;
  return ordenar(filtradas);       // primero filtra, luego ordena
}
```

**Dependencia técnica:** se envuelve cada fecha en **_new Date(...)_** —aunque venga como texto de `localStorage`— para que la resta dé un número (diferencia en ms). El pipeline **_plantillasVisibles_** queda: filtra → ordena; el `render()` recorre esa función, así que el orden se mantiene aunque se agregue, edite o filtre. El selector (`<select id="orden">`) cambia **_state.orden_** y llama a `render()`. **Modularidad en acción:** la lógica (`ordenar`) vive en `state.js`, el control (el listener del selector) en `ui.js` — sin tocar el resto.

### ESTRATEGIA VISUAL: El pipeline "qué mostrar"
Una tubería: `state.plantillas` → **filtrar** (por hashtag) → **ordenar** (por fecha, sobre copia) → lista mostrada. El selector alimenta `state.orden` en la etapa de ordenar. Anclaje: *qué se muestra = estado, filtrado y ordenado; el render dibuja el resultado.*

---

## CIERRE — hilo conductor + qué se lleva el alumno

### El arco del Módulo 4 (Gestor de Plantillas WhatsApp) — completo
```
C13  Modelado + Texto      → clase Template + estado + render + metodos de String     ← hecho
C14  Interaccion + Datos    → CRUD inmutable + delegacion + datos derivados            ← hecho
C15  JSON + localStorage    → persistencia (guardar/cargar, blindaje)                  ← hecho
C16  Modulos (ESM) + Cierre → UX (modal, estados vacios) + arquitectura modular + sort ← HOY (calificado)
```
La app pasó de nada a un producto: datos con forma, CRUD, cálculos, memoria entre sesiones, buena UX y una arquitectura profesional. C16 la deja lista para mostrar y entregar.

### Concepto pedagógico clave del día (las 2 tesis)
1. **Un código modular es un código mantenible.** Repartir por responsabilidad (estado / persistencia / interfaz), comunicándose con `import`/`export`, con cada módulo en su ámbito, es el estándar profesional — y lo que permite que un proyecto crezca sin volverse un caos.
2. **Los detalles de UX separan un prototipo de una app real.** Confirmar antes de borrar y mostrar estados vacíos claros no son adornos: son lo que hace que la gente confíe en la app y sepa qué hacer.

### Mensaje que se lleva el alumno
**Terminar un proyecto no es solo que "funcione": es que sea usable y mantenible.** Hoy la app ganó las dos cosas — una experiencia que cuida al usuario (confirmaciones, mensajes claros) y una arquitectura que cuida al desarrollador (módulos con responsabilidades separadas). Con esto se cierra el Módulo 4 y se entrega el Proyecto Integrador: la prueba de que pueden llevar una app de la idea al producto.

### Cierre del proyecto (entrega del Proyecto Integrador — lab calificado)
1. **2 Historias de Usuario propias** — cada una en su rama → Pull Request a `main`, con criterios de aceptación orientados a resultado.
2. **README** — describir la app, la arquitectura modular (state/storage/ui) y cómo se persiste.
3. **Despliegue** en GitHub Pages.
4. **Demo en vivo (máx. 10 min)** — el flujo completo + argumentar 2 decisiones técnicas. Rúbrica oficial: 5 criterios × 20 pts.

### Conexiones a futuro
- **Módulos ESM** son la base de todo frontend moderno (React, Vue, Vite) y de Node.js — se usan para siempre.
- **Separar responsabilidades** (estado / persistencia / interfaz) es el germen de patrones de arquitectura que se profundizan en cursos posteriores.
- **Modal / accionPendiente** (guardar una acción para ejecutarla luego) es un patrón que reaparece en callbacks, promesas y manejo de eventos.
- **`.sort()`** se usa en cualquier lista ordenable, para siempre.

### Tabla resumen de conceptos

| Bloque | Conceptos |
|---|---|
| **B1 — Modal (UX)** | Modal (mostrar/ocultar con `hidden`) · `accionPendiente` (guardar una función y ejecutarla al confirmar) → modal reutilizable · confirmaciones solo para lo irreversible |
| **B2 — Estados vacíos (UX)** | Dos vacíos: sin datos creados vs filtro sin resultados · comparar `visibles.length` vs `state.plantillas.length` + ternario |
| **B3 — Módulos ESM (CENTRAL)** | Problema (ámbito global, orden de `<script>`) · qué es un módulo + por qué (ámbito propio, encapsulamiento) · `export`/`import` named + `<script type="module">` (rutas `./…​.js`) · repartir la app (Template/state/storage/ui/app) = separar responsabilidades |
| **B4 — Ordenar con `.sort()`** | `.sort()` + comparador (default alfabético · numérico `a-b`/`b-a` · objetos por propiedad) · por fecha con `new Date` · copiar con `[...]` (muta) · pipeline filtrar → ordenar |
