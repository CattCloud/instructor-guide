# CAPA 0 — CLASE 15: JSON y LocalStorage

> **Fuentes:** **_code201/class-15/README.md_** · **_code201/class-15/lab/README.md_** · **_code201/class-15/APUNTES.md.md_** *(inputs canónicos: README de clase + lab; los apuntes propios de Eric como apoyo conceptual para JSON y localStorage).*
> **Módulo:** M4 — Clase 3 de 4 (**el corazón del M4: persistencia**)
> **Proyecto víctima:** **Gestor de Plantillas para WhatsApp** (repo **_whatsapp-templates_**, rama **_lab15-localstorage_**) — la MISMA app de C13-C14. Hoy se resuelve, de raíz, el "se pierde al recargar": el estado se **guarda en el navegador** y **se recupera** al abrir.
> **Continuidad:** el alumno llega con el CRUD completo en memoria (C13-C14): la clase **_Template_**, el estado (`state = { plantillas: [] }`, más `state.filtro`), **_render()_**, y el `id` de texto (`crypto.randomUUID()`). Hoy NADA de eso se tira: se le agrega una capa de **persistencia** que se dispara desde `render()`.
> **Reactivación:** **_try/catch_** (visto en C12/M3), el **operador ternario**, la regla **cambias el estado → `render()`**, y **_new Date(...)_** (C13-C14). Además: en M3 el alumno solo **leía** JSON que venía de la PokeAPI; **hoy lo escribe él** para guardar sus propios datos.
> **Sin lab calificado:** C15 es clase regular de M4 (el calificado es C16, la próxima).
> **Requiere contexto seguro:** `localStorage` funciona en http(s)/localhost — con Live Server, sin problema.

---

## Idea fuerza de la clase

**De una app que olvida todo al recargar a una app que RECUERDA — y el día en que el alumno descubre el puente entre sus objetos y lo único que el navegador sabe guardar: texto.** Dos herramientas nuevas, encadenadas: **`localStorage`**, el pequeño almacén del navegador que sobrevive al cierre de la pestaña (pero que **solo guarda texto**); y **JSON**, el formato que convierte el estado (un array de objetos) en texto guardable con **_JSON.stringify_** y lo reconstruye con **_JSON.parse_**. El flujo del día: **guardar** en cada `render()` (todo cambio ya pasa por ahí), **cargar** al arrancar, **blindar** el parseo con `try/catch` por si los datos están corruptos, y afinar el borrado con `removeItem`. La tesis que atraviesa todo: **`localStorage` solo entiende texto; JSON es el traductor entre tus objetos y ese texto — y en la traducción se pierden los tipos complejos (como `Date`), que hay que reconstruir.**

---

## BLOQUE 1 — El problema de la persistencia + `localStorage`

*(Antes de guardar nada, el alumno tiene que entender POR QUÉ se perdían los datos y QUÉ herramienta lo resuelve. El estado vivía en memoria; hoy aparece un almacén que sobrevive a la recarga.)*

---

### CONCEPTO: Persistencia — por qué se pierde todo al recargar

Hasta C14, el estado (**_state.plantillas_**) vivía en la **memoria** del programa — variables de JavaScript que existen solo mientras la página está abierta. Al **recargar o cerrar** la pestaña, el programa arranca de cero: la memoria se vacía y el estado vuelve a `[]`. **Persistencia** es lograr que los datos **sobrevivan** a esa recarga o cierre, guardándolos en algún lugar que no se borre.

**Dependencia técnica:** en C13-C14 la app funcionaba perfecto… hasta que se recargaba. No era un bug: era que nunca se guardó nada fuera de la memoria. Persistir NO significa tener un servidor o una base de datos; para datos del propio usuario, alcanza con el **almacenamiento del navegador**. Esa es la pieza que falta y que se agrega hoy.

### ANALOGÍA: La pizarra vs el cuaderno
La memoria del programa es una **pizarra**: escribís, la usás, y al terminar el día (cerrar la pestaña) se borra. La persistencia es pasar lo importante a un **cuaderno** que queda guardado — mañana lo abrís y ahí está. `localStorage` es ese cuaderno del navegador.

### ESTRATEGIA VISUAL: El antes y después de recargar
Dos capturas de la misma app: **antes** (lista con 3 plantillas) → flecha "recargar" → **después SIN persistencia** (lista vacía, todo perdido) vs **después CON persistencia** (las 3 plantillas siguen ahí). Anclaje: *el estado en memoria muere al recargar; el guardado sobrevive.*

---

### CONCEPTO: `localStorage` — el almacén del navegador

**`localStorage`** es una **API de almacenamiento web** del navegador que guarda datos **de forma persistente**: no se borran al recargar la página ni al cerrar el navegador. Es un objeto **global** —está disponible en cualquier parte del código, sin importar ni instanciar nada— y guarda la información en pares **clave → valor**.

**Sintaxis general — los 3 métodos del día:**
```javascript
localStorage.setItem("<clave>", "<texto>");   // guarda (o sobreescribe) un valor bajo esa clave
localStorage.getItem("<clave>");              // devuelve el texto guardado, o null si no existe
localStorage.removeItem("<clave>");           // borra ese valor
```

**Tabla — métodos de `localStorage`:**

| Método | Qué hace |
|---|---|
| **_setItem(clave, valor)_** | Guarda un dato bajo una clave (si ya existía, lo sobreescribe) |
| **_getItem(clave)_** | Obtiene el valor de esa clave — o **_null_** si no hay nada |
| **_removeItem(clave)_** | Elimina el valor de esa clave |
| **_clear()_** | Borra TODO el localStorage (no se usa hoy; peligroso) |

**Dependencia técnica (lo más importante del día):** **_localStorage_ SOLO guarda TEXTO** (strings). No guarda objetos, arrays, números ni fechas directamente — todo lo que le pases se convierte a texto. Por eso, para guardar el estado (que es un array de objetos), primero hay que **convertirlo a texto** — ahí entra JSON (BLOQUE 2). Otros límites: es del **mismo origen** (dominio + protocolo + puerto — cada sitio tiene el suyo), capacidad de **~5-10 MB**, y es **síncrono**. *No se guardan datos críticos ni sensibles ahí* (cualquiera con acceso al navegador los ve).

### ANALOGÍA: El casillero con etiquetas
`localStorage` es como una fila de **casilleros con etiqueta**: en cada uno (una **clave**) guardás una hoja de papel (el **valor**, siempre texto). **_setItem_** mete la hoja, **_getItem_** la saca a leer, **_removeItem_** la tira. Pero solo entran hojas de papel — si querés guardar algo más complejo, primero lo tenés que escribir como texto en una hoja.

### ETIMOLOGÍA / HISTORIA
**`localStorage`** es parte de la **Web Storage API**, estandarizada con **HTML5 (~2009)** para reemplazar las viejas *cookies* (que eran chicas y viajaban en cada petición al servidor). "Local" porque los datos se quedan en el navegador del usuario (a diferencia de una base de datos, que vive en el servidor). Su hermano **`sessionStorage`** hace lo mismo pero se borra al cerrar la pestaña; `localStorage` persiste hasta que alguien lo borre.

### ESTRATEGIA VISUAL: DevTools → Application → Local Storage
Captura de las DevTools del navegador con la pestaña **Application → Local Storage** abierta, mostrando la clave **_whatsapp-templates_** y, a su lado, el valor como texto JSON (`[{"titulo":"Saludo",...}]`). Anclaje: *acá se VE lo guardado — clave a la izquierda, texto a la derecha.*

---

## BLOQUE 2 — JSON: el puente entre objetos y texto

*(Ya sabemos que `localStorage` solo guarda texto, pero el estado es un array de objetos. Falta el traductor: JSON. Este bloque es el corazón conceptual del día — qué es JSON, cómo convierte objeto→texto y texto→objeto, y qué se pierde en el camino.)*

---

### CONCEPTO: Qué es JSON

**JSON** (JavaScript Object Notation) es un **formato de texto** para representar datos, con una sintaxis **muy parecida a los objetos literales de JavaScript** (pares **clave: valor**). Es liviano, legible por humanos, y lo entienden casi todos los lenguajes — por eso es el idioma universal de los datos (APIs, archivos de configuración, almacenamiento). *La clave: aunque se parece a un objeto JS, JSON es **texto**.*

**Sintaxis general:**
```json
{
  "clave1": valor1,
  "clave2": valor2
}
```

**Tipos de valor que un JSON puede contener:** números, cadenas de texto, booleanos (`true`/`false`), arreglos (`[]`), objetos (`{}`) y `null`. **NO** puede contener funciones, ni fechas (`Date`), ni `undefined` — esos tipos no existen en JSON.

**Dependencia técnica:** en JSON las **claves van entre comillas dobles** (`"titulo"`, no `titulo`). El array de plantillas del proyecto, como JSON, se ve así: **_[{"titulo":"Saludo","mensaje":"Hola","id":"a1b2-..."}]_** — un texto. Punto de continuidad: en M3 (C10-C11) el alumno **leía** JSON que llegaba de la PokeAPI (lo parseaba para mostrar Pokémon); **hoy lo escribe él** para guardar su estado. Mismo formato, dirección inversa.

### ANALOGÍA: El idioma común de los datos
JSON es como el **inglés en un aeropuerto internacional**: cada lenguaje (JS, Python, un servidor, el navegador) habla lo suyo por dentro, pero para intercambiar datos usan un idioma común, simple y que todos entienden — ese es JSON. Y como todo idioma escrito, es **texto**.

### ETIMOLOGÍA / HISTORIA
**JSON** lo formalizó **Douglas Crockford a principios de los 2000**, tomando la notación de objetos de JavaScript. Reemplazó a **XML** como formato dominante de intercambio de datos por ser mucho más liviano y legible. Hoy es el estándar de facto de las APIs REST. El nombre es literal: *JavaScript Object Notation* — la notación de objetos de JS, convertida en formato universal.

### ESTRATEGIA VISUAL: Objeto JS vs su JSON
Dos cajas lado a lado: a la izquierda un **objeto JavaScript** (con colores de sintaxis, `titulo:` sin comillas, un método imaginado), a la derecha su **JSON** (todo texto gris, `"titulo":` con comillas dobles, sin métodos). Flecha entre ambos etiquetada "misma info, distinta forma: uno es objeto, el otro es TEXTO". Anclaje: *JSON se parece a un objeto, pero es una cadena de texto.*

---

### CONCEPTO: Serializar — `JSON.stringify()` (objeto → texto)

**Serializar** es convertir una estructura de datos de JavaScript (un objeto, un array) en una **cadena de texto JSON**. La herramienta: **_JSON.stringify(estructura)_**. Es lo que se usa para **guardar** en `localStorage` o **enviar** a un servidor.

**Sintaxis general:**
```javascript
const textoJSON = JSON.stringify(<estructura>);
```

**Fórmula del lab (HU1 — guardar el array de plantillas):**
```javascript
localStorage.setItem(CLAVE, JSON.stringify(state.plantillas));   // objeto -> texto -> navegador
```

**Dependencia técnica:** **_JSON.stringify_** convierte: arrays → **_[...]_**, objetos → **_{ "clave": "valor" }_** (con comillas dobles), strings entre comillas. **NO serializa funciones ni `undefined`** —los ignora—, y las fechas (`Date`) las convierte a **texto** (un string ISO). Por eso encaja perfecto con `localStorage`: le entregamos el texto que produce **_stringify_** y él lo guarda tal cual. Sin `stringify`, `localStorage` guardaría algo inútil como `"[object Object]"`.

### ESTRATEGIA VISUAL: La máquina de empaquetar
Un array de objetos (cajas coloridas) entra a una máquina etiquetada **_JSON.stringify_** y sale por el otro lado como una **tira de texto** (una etiqueta con `[{"...":"..."}]`). Debajo, la tira entra al casillero de `localStorage`. Anclaje: *stringify empaqueta tus objetos como texto para poder guardarlos.*

---

### CONCEPTO: Deserializar — `JSON.parse()` (texto → objeto)

**Deserializar** es el camino inverso: convertir una **cadena de texto JSON** de vuelta en un **objeto/array de JavaScript** que el código puede usar. La herramienta: **_JSON.parse(texto)_**. Es lo que se usa para **leer** lo guardado en `localStorage` o lo recibido de un servidor.

**Sintaxis general:**
```javascript
const estructura = JSON.parse(<textoJSON>);
```

**Fórmula del lab (HU2 — cargar al arrancar):**
```javascript
function cargar() {
  const guardado = localStorage.getItem(CLAVE);   // texto o null
  return guardado ? JSON.parse(guardado) : [];    // si hay -> parsea; si no -> lista vacia
}
```

**Dependencia técnica:** **_getItem_** devuelve **texto o `null`** (si la clave no existe). Por eso el **operador ternario** **_guardado ? JSON.parse(guardado) : []_**: si hay texto, lo reconstruye con **_parse_**; si es `null` (primera vez, nada guardado), arranca con un array vacío. **Cuidado:** **_JSON.parse_** **lanza un error** si el texto NO es JSON válido — eso se blinda con `try/catch` (BLOQUE 4).

### ESTRATEGIA VISUAL: La máquina de desempaquetar
La tira de texto sale del casillero de `localStorage`, entra a una máquina **_JSON.parse_**, y sale como el array de objetos original (las cajas coloridas de nuevo). Anclaje: *parse desempaqueta el texto y te devuelve tus objetos.*

---

### CONCEPTO: Deserializar devuelve un objeto GENÉRICO — se pierden los tipos (la lección de las fechas)

Cuando serializás con **_stringify_** y luego deserializás con **_parse_**, lo que vuelve es un **objeto genérico** de JavaScript — **perdió la clase original y los tipos complejos**. JSON es solo texto plano: no guarda información de clases, prototipos ni tipos como `Date`. Todo lo que era un `Date` vuelve como **texto**.

**Fórmula del lab (HU2 — reconstruir la fecha en el `render`):**
```javascript
// al cargar, plantilla.fecha ya NO es un Date, es un string.
// para que .toLocaleDateString siga funcionando, se reconstruye:
new Date(plantilla.fecha).toLocaleDateString("es-PE");
```

**Dependencia técnica:** en C13 la fecha era un **objeto `Date`** (**_new Date()_**). Al guardarla en JSON se volvió texto; al cargarla, **_plantilla.fecha_** es un **string**, y un string no tiene **_.toLocaleDateString()_**. La solución: envolverla de nuevo en **_new Date(plantilla.fecha)_** dentro del `render()` — reconstruir el tipo. *(Es exactamente por esto que en C14, en el `.sort()`, ya envolvíamos las fechas en `new Date(...)`: se anticipó este momento.)* En este proyecto el ÚNICO tipo que se pierde es la fecha; las plantillas quedan como objetos planos, y como solo **leemos** sus datos (no llamamos métodos), funcionan igual.

### ANALOGÍA: La foto de un objeto 3D
Serializar a JSON es como sacarle una **foto** a un objeto en 3D: la foto (el texto) conserva cómo se ve —los datos—, pero pierde el volumen, el peso, lo que el objeto *sabía hacer* (sus métodos, su tipo `Date`). Al recuperar la foto tenés la imagen, no el objeto original; si necesitás el volumen de vuelta (que la fecha vuelva a ser `Date`), lo tenés que **reconstruir**.

### ESTRATEGIA VISUAL: El viaje de la fecha
Una línea de tiempo de un dato `fecha`: **_new Date()_** (objeto, en C13) → **_JSON.stringify_** → `"2026-06-29T..."` (texto, en localStorage) → **_JSON.parse_** → `"2026-06-29T..."` (sigue texto) → **_new Date(...)_** → objeto de nuevo (utilizable). Resaltar que entre parse y el uso hace falta el `new Date`. Anclaje: *JSON no trae de vuelta el `Date`; hay que reconstruirlo.*

---

## BLOQUE 3 — Persistir el estado: guardar en cada cambio + cargar al arrancar

*(Con JSON y localStorage entendidos, se arma el flujo real: una función guardar() que corre en cada render, y una cargar() que reconstruye el estado al abrir la app. El hilo: todo pasa por render, así que guardar ahí lo persiste todo.)*

---

### CONCEPTO: Guardar el estado — `guardar()` dentro de `render()`

Para que los datos se persistan **solos** (sin un botón "guardar"), se define una función **_guardar()_** que serializa el estado y lo mete en `localStorage`, y se la **llama dentro de `render()`**. Como en esta app **todo cambio termina en un `render()`** (agregar, editar, eliminar, filtrar), poner el guardado ahí garantiza que cada cambio quede persistido.

**Sintaxis general (fórmula del lab, HU1):**
```javascript
// en js/persistence.js
const CLAVE = "whatsapp-templates";   // la "etiqueta" bajo la que se guarda

function guardar() {
  localStorage.setItem(CLAVE, JSON.stringify(state.plantillas));
}

// en render(), al final:
function render() {
  // ...dibuja lista y stats como en C14...
  guardar();          // el estado ya cambio -> persistir
}
```

**Dependencia técnica:** la **_CLAVE_** es una constante única (convención del proyecto: toda la persistencia vive en **_persistence.js_**, cargado en el HTML **antes** de `app.js`). Poner **_guardar()_** al final de `render()` es la aplicación directa de la regla del módulo: **cambias el estado → `render()`** — y ahora `render()` además persiste. Es el patrón más limpio: un solo lugar que guarda, imposible de olvidar en alguna operación.

### ESTRATEGIA VISUAL: render como centro que también guarda
El ciclo de siempre —acción del usuario → cambia `state` → `render()` → pantalla— pero ahora del nodo `render()` sale una flecha extra hacia el casillero de `localStorage` etiquetada **_guardar()_**. Anclaje: *render dibuja Y guarda; por eso nada queda sin persistir.*

---

### CONCEPTO: Cargar el estado al arrancar

Al abrir (o recargar) la app, hay que **reconstruir el estado** desde lo guardado: leer el texto con **_getItem_**, reconstruirlo con **_JSON.parse_**, y renderizar **una vez**. Si no hay nada guardado, arrancar con la lista vacía.

**Fórmula del lab (HU2 — en `app.js`, al arrancar):**
```javascript
state.plantillas = cargar();   // cargar() = getItem + parse (con el ternario del BLOQUE 2)
render();                      // dibuja lo recuperado
```

**Dependencia técnica:** **_cargar()_** se llama **una sola vez**, al iniciar — no en cada render (eso sería leer del disco constantemente y pisaría los cambios). El flujo completo del día queda cerrado: **al arrancar** se carga (parse), **en cada cambio** se guarda (stringify dentro de render). Guardar y cargar son las dos mitades simétricas de la persistencia.

### ESTRATEGIA VISUAL: El ciclo completo de persistencia
Un diagrama circular: **abrir app** → **_cargar()_** (localStorage → parse → `state`) → **_render()_** → usuario hace cambios → **_render()_** → **_guardar()_** (`state` → stringify → localStorage) → … y al reabrir, vuelve a `cargar()`. Anclaje: *cargar al abrir, guardar en cada cambio — el estado va y vuelve del casillero.*

---

## BLOQUE 4 — Robustez, limpieza y persistir el filtro

*(La persistencia básica ya anda. Faltan tres detalles que separan un ejercicio de un producto: que un dato corrupto no rompa la app, que "vaciar" deje el almacén realmente limpio, y que el filtro también sobreviva — mostrando el contraste array vs texto.)*

---

### CONCEPTO: Blindar la carga con `try/catch` (datos corruptos)

**_JSON.parse_** **lanza un error** si el texto que recibe NO es JSON válido (por ejemplo, si alguien editó a mano el localStorage y lo dejó dañado). Sin protección, ese error rompería la carga y dejaría la pantalla rota. La solución es la de C12: envolver el `parse` en **_try/catch_** — si falla, no romper: arrancar con la lista vacía y avisar.

**Fórmula del lab (HU3):**
```javascript
function cargar() {
  const guardado = localStorage.getItem(CLAVE);
  if (!guardado) return [];
  try {
    return JSON.parse(guardado);          // intenta reconstruir
  } catch (error) {
    console.warn("Datos corruptos, empiezo de cero:", error);
    return [];                            // si falla, no rompas: lista vacia
  }
}
```

**Dependencia técnica:** es la **reactivación de `try/catch` de C12**, ahora en un contexto nuevo: no una API de red, sino el parseo de datos locales. El `catch` recibe el objeto `error` (como en C12) y decide: en vez de dejar morir la app, devuelve `[]` y registra un aviso con **_console.warn_**. Es "exceptions are for exceptions" aplicado: un dato corrupto es raro, pero si pasa, la app no puede colgarse.

### ANALOGÍA: El cinturón de seguridad
El `try/catch` alrededor del `parse` es el **cinturón de seguridad**: el 99% de las veces no pasa nada, pero el día que los datos guardados están dañados, evita que la app se estrelle. Mejor arrancar vacío que con la pantalla rota.

### ESTRATEGIA VISUAL: parse con red de seguridad
El texto de `localStorage` entra a **_JSON.parse_**; dos salidas: si es válido → array reconstruido (verde); si es inválido → un `catch` (escudo) que devuelve `[]` (gris) + un aviso en consola. Anclaje: *un dato corrupto cae en el catch, no en la pantalla del usuario.*

---

### CONCEPTO: Vaciar con `removeItem` — el ternario que borra la clave

Para "vaciar todo" no alcanza con guardar un array vacío: si **_guardar()_** siempre hiciera `setItem`, la clave quedaría con **_[]_** en vez de desaparecer. La solución: dentro de `guardar()`, un **ternario** que decide — si el estado quedó vacío, **_removeItem_** (borra la clave); si hay datos, **_setItem_**. Así el almacenamiento queda **realmente** limpio.

**Fórmula del lab (HU4):**
```javascript
function guardar() {
  state.plantillas.length === 0
    ? localStorage.removeItem(CLAVE)                               // vacio -> borra la clave
    : localStorage.setItem(CLAVE, JSON.stringify(state.plantillas)); // hay datos -> guarda
  document.getElementById("estado").textContent =
    state.plantillas.length > 0 ? "Guardado ✓" : "Vacío";         // indicador
}

// el boton vaciar:
document.getElementById("btn-vaciar").addEventListener("click", function () {
  state.plantillas = [];
  render();   // render -> guardar(); como no queda nada, se borra la clave
});
```

**Dependencia técnica:** el botón vaciar solo hace **_state.plantillas = []_** y **_render()_** — no toca `localStorage` directamente, porque `render()` ya llama a `guardar()`, y `guardar()` (con el ternario) hace el `removeItem`. Coherencia total con el patrón del módulo. El **operador ternario** se reactiva acá para dos decisiones cortas: qué método usar y qué texto mostrar en el indicador.

### ESTRATEGIA VISUAL: Guardar bifurcado
Un rombo de decisión dentro de `guardar()`: **¿estado vacío?** → sí → **_removeItem_** (el casillero queda vacío); → no → **_setItem_** (el casillero guarda el texto). Al lado, el indicador "Guardado ✓" / "Vacío". Anclaje: *vaciar de verdad = borrar la clave, no dejarla con `[]`.*

---

### CONCEPTO: Persistir el filtro — texto directo (sin `stringify`)

**_state.filtro_** también es parte del estado, así que también se persiste — pero con una diferencia clave: el filtro **ya es un texto**, así que **NO necesita `JSON.stringify`**, se guarda directo. Se usa una segunda clave, y al arrancar se recupera y se refleja en el buscador.

**Fórmula del lab (HU5):**
```javascript
const CLAVE_FILTRO = "whatsapp-templates-filtro";

// en guardar(): el filtro es texto, va sin stringify
localStorage.setItem(CLAVE_FILTRO, state.filtro ?? "");

// al arrancar (app.js):
state.plantillas = cargar();
state.filtro = localStorage.getItem(CLAVE_FILTRO) ?? "";   // recupera el filtro (o vacio)
document.getElementById("buscador").value = state.filtro;  // lo muestra en el input
render();
```

**Dependencia técnica (el contraste que fija el concepto):** las **plantillas** son un **array de objetos** → necesitan `JSON.stringify` para guardar y `JSON.parse` para leer. El **filtro** es un **texto** → va directo, sin traducir. La regla general: **`localStorage` siempre guarda texto; cuando tu dato YA es texto, no hay nada que convertir.** El **_?? ""_** (nullish) da un valor por defecto vacío si el filtro es `null`/`undefined`.

### ESTRATEGIA VISUAL: Dos datos, dos caminos
Dos flechas hacia `localStorage`: la de **plantillas** (array) pasa por una caja **_JSON.stringify_** antes de entrar; la de **filtro** (texto) entra **directo**, sin caja. Anclaje: *objeto → hay que traducir con JSON; texto → va tal cual.*

---

## CIERRE — hilo conductor + qué se lleva el alumno

### El arco del Módulo 4 (Gestor de Plantillas WhatsApp)
```
C13  Modelado + Texto      → clase Template + estado + render + metodos de String   ← hecho
C14  Interaccion + Datos    → CRUD completo (inmutable) + delegacion + derivados     ← hecho
C15  JSON + localStorage    → PERSISTENCIA: guardar/cargar el estado; blindar        ← HOY
C16  (M4)                   → lab calificado del modulo (Proyecto Integrador)
```
Hoy se cierra la deuda que venía desde C13: la app deja de olvidar. Lo que se construye —guardar, cargar y proteger el estado— es la base directa del proyecto integrador de C16.

### Concepto pedagógico clave del día (las 2 tesis)
1. **`localStorage` solo guarda TEXTO; JSON es el traductor** entre tus objetos y ese texto (`stringify` para guardar, `parse` para leer). Todo el día gira alrededor de ese puente.
2. **En la traducción a JSON se pierden los tipos complejos** (la fecha `Date` vuelve como texto). Lo que necesites como tipo original, lo **reconstruís** (`new Date(...)`).

### Mensaje que se lleva el alumno
**Una app profesional recuerda.** La diferencia entre un ejercicio de clase y un producto real es que el segundo no pierde los datos del usuario. Con dos herramientas —`localStorage` (el almacén) y JSON (el traductor)— y el mismo patrón de siempre (guardar en `render()`, cargar al arrancar), la app pasa de "olvida todo al recargar" a "recuerda entre sesiones". Y aprendieron una verdad que los va a acompañar: **el almacenamiento y las APIs hablan en texto; convertir objetos ↔ texto con JSON es pan de cada día.**

### Conexiones a futuro
- **JSON** se usa para siempre: APIs (leer, como en M3, y escribir), configuración, bases de datos.
- **`localStorage`** aparece en casi toda app web (carrito, tema oscuro, borradores, sesión).
- **Serializar/deserializar** es la base de guardar en cualquier lado (archivos, BD, red).
- **Reconstruir tipos tras deserializar** (hoy la fecha) es un problema real que reaparece con cualquier dato complejo.

### Tabla resumen de conceptos

| Bloque | Conceptos |
|---|---|
| **B1 — Persistencia + localStorage** | Por qué se pierde todo al recargar (estado en memoria) · `localStorage` (almacén del navegador, clave→**texto**, persiste) · `setItem` / `getItem` / `removeItem` |
| **B2 — JSON (el puente)** | Qué es JSON (texto clave-valor; tipos válidos; NO funciones/Date) · Serializar con `JSON.stringify` (objeto→texto) · Deserializar con `JSON.parse` (texto→objeto) · Objeto genérico: se pierden los tipos → reconstruir la fecha con `new Date(...)` |
| **B3 — Persistir el estado** | `guardar()` (stringify + setItem) dentro de `render()` · `cargar()` (getItem + parse + ternario) al arrancar · guardar en cada cambio / cargar una vez |
| **B4 — Robustez + filtro** | Blindar `parse` con `try/catch` (datos corruptos → `[]`) · Vaciar con `removeItem` + ternario (borrar la clave, no dejar `[]`) + indicador · Persistir el filtro (texto → **sin** stringify): array vs texto |
