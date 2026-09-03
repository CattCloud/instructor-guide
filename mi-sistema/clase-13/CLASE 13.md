# CLASE 13 — Modelado de Datos y Manipulación de Texto (Módulo 4)

> **Curso:** Code 201 · **Módulo 4** — Clase 1 de 4 (**ARRANQUE del M4**)
> **Proyecto víctima:** **Gestor de Plantillas para WhatsApp** (repo **_whatsapp-templates_**, rama **_main_**) — app NUEVA que acompaña C13-C16. Hoy se monta la base: modelo de datos + estado central + render + métodos de String.
> **NO es lab calificado** (el calificado del M4 es C16) · **no consume API** (todo local con Live Server).
> **Fuente de inputs:** **_code201/class-13/README.md_** + **_lab/README.md_**. *(Se ignoran los assets de `lab/assets/` por decisión de Eric.)*
> **Sin persistencia HOY:** todo vive en memoria; si el alumno recarga, se pierde. Es a propósito — `localStorage` llega en **C15**.
> **Duración:** 3h reales · se prepara para 2h30 (≈145 min) · colchón 30 min · receso 10 min entre M2 y M3.

---

## Idea fuerza de la clase

**De datos sueltos a una app con estructura — y el día en que el alumno descubre que un texto es un objeto con métodos.** Dos movimientos: (1) **dar estructura a los datos** — modelar cada plantilla con una `class`, centralizar todo en un **estado** único que es la verdad de la app, y dibujar la pantalla SIEMPRE desde ahí con el patrón `render()` (cambia el estado → se redibuja); (2) **manipular texto** — usar los métodos de String (`.trim()`, `.toLowerCase()`, `.replaceAll()`, `.slice()`, `.split()`) para limpiar lo que escribe el usuario, normalizarlo para que siempre quede igual, y transformar una plantilla con `{nombre}` en un mensaje final. El estado central y el patrón render son el modelo mental que todo framework moderno da por sentado; los métodos de String son la herramienta más usada y menos enseñada del lenguaje.

> **Enfoque de la clase:** lab-conducido de principio a fin. Se reusa sin re-explicar: la sintaxis de **clases** (`class`/`constructor`/`this`) del **M2 (POO)**, la **captura de formularios** y el **DOM** (`createElement`/`appendChild`/`innerHTML`) del **M3**, y **Tailwind por CDN**. Lo nuevo del día son los **métodos de String** y la formalización del par **estado central + patrón render**.

---

## Tabla de tiempos (preparado para 2h 30min)

| Momento    | Tema                                                                 | Parte del lab          | Tiempo  |
| ---------- | ------------------------------------------------------------------- | ---------------------- | ------- |
| **M1**     | Apertura M4 + setup del repo + **modelar** (clase `Template` + estado) | Setup + HU1 (CP1 ~30)  | ~35 min |
| **M2**     | Del estado a la pantalla: patrón **_render()_** + **_Date_**                 | HU2 (CP2 ~60)          | ~30 min |
| **RECESO** | —                                                                   | —                      | 10 min  |
| **M3**     | **Texto es un objeto**: limpiar, **normalizar** y validar                | HU3 (CP3 ~90)          | ~35 min |
| **M4**     | **Usar la plantilla**: generar el mensaje + copiar + cierre              | HU4 (CP4 ~110) + Cierre | ~30 min |

> Total preparado: ~130 min de momentos + 10 de receso. El colchón de 30 min absorbe el trabajo autónomo en cada Checkpoint del lab (CP1 ~30', CP2 ~60', CP3 ~90', CP4 ~110' de reloj de lab) y el setup inicial del repo nuevo.
>
> **Mapa de temas → momentos:** clase `Template` + estado central + reasignar (M1) · patrón `render()` + objeto `Date` (M2) · métodos de String / `.trim()`/`.toLowerCase()` / normalizar / validar con `.length` (M3) · generar mensaje con `.replaceAll()` + selector con `.map()` + copiar con `navigator.clipboard` + etiquetas con `.split().map().join()` (M4).
>
> **Concepto pedagógico clave (las 2 tesis):** (1) el estado es la única fuente de verdad; la pantalla se deriva del estado (*cambias el estado → `render()`*). (2) un texto es un objeto con métodos, y **normalizar la entrada del usuario es trabajo de la app, no del usuario**.

---

## Cadena Problema → Solución de la clase

```
M1: "tengo un formulario, pero al enviarlo no pasa nada — los datos no tienen forma ni casa"
     → modelar con clase Template (la forma) + estado central (la casa) + agregar reasignando (HU1)
     ↓ (los datos crecen en memoria… pero la pantalla sigue vacía: el usuario no los ve)
M2: "quiero ver mis plantillas apenas las agrego, sin recargar"
     → patrón render(): limpiar → recorrer estado → crear nodos; conectar el submit; mostrar la fecha con Date (HU2)
     ↓ (ya las veo… pero si escribo "  Ventas " o "#VENTAS" se guarda sucio y la misma categoría aparece de tres formas)
M3: "quiero que se guarden limpias y consistentes, y no dejar pasar campos vacíos"
     → métodos de String: trim/toLowerCase para limpiar, normalizar el hashtag, validar con length (HU3)
     ↓ (ya están limpias… pero una plantilla con {nombre} no sirve como mensaje real hasta rellenarla)
M4: "quiero USAR la plantilla: elegir una, poner un nombre real y obtener el mensaje listo para enviar"
     → zona generadora: select + Generar (replaceAll) → mensaje completo → Copiar (clipboard); etiquetas con split/map/join (HU4)
     ↓ (todo anda… pero si recargo, se pierde TODO)
M4 (cierre): "una app real recuerda" → puente a C15 (localStorage / persistencia) y al resto del M4
```

---

## MOMENTO 1 — Apertura del M4 + setup + Modelar la plantilla (HU1)

**Tiempo:** ~35 min
**Parte del lab:** Setup Inicial + HU1 (Checkpoint 1 ~30 min)

> **OBJETIVO:** El alumno entiende que arranca un **módulo nuevo** con un **proyecto nuevo** (Gestor de Plantillas para WhatsApp) y monta su repo con la estructura y el `index.html` base. Siente el problema de partida: *tengo un formulario, pero los datos no tienen forma ni un lugar donde vivir*. Lo resuelve modelando cada plantilla con la clase **_Template_** (reusando `class`/`constructor` del M2, ahora para **datos**), creando el **estado central** como única fuente de verdad, y agregando plantillas **reasignando** el array (`[...]`, no `.push`). Cierra comprobando desde consola que `state.plantillas` crece.

> **Patrón pedagógico de M1:** **apertura de módulo → setup como lectura guiada → problema → concepto → plan socrático → lab.** Se abre presentando el módulo y el proyecto nuevo (mapa del M4 + nota de "todo en memoria"). El setup **no es code-along**: el `index.html` viene pre-armado y se LEE —estructura de archivos, Tailwind CDN, convención de ids—; ahí se explica por qué el código se **separa en archivos** (el modelo en el suyo) y se nombra **CRUD** como el conjunto de operaciones que la app hará sobre el estado (hoy solo **C**rear y **L**eer; **A**ctualizar y **B**orrar llegan en C14). Recién después del gancho del problema entran los dos conceptos del día (modelar con clase + estado central), y HU1 se construye con **plan socrático ANTES del code-along**. **ES Modules (`import`/`export`) NO se toca hoy — se verá en C16;** el lab carga los scripts con etiquetas `<script>` en orden.

---

#### 1.1 Apertura del Módulo 4 — nuevo módulo, nuevo proyecto

**EN PANTALLA: EXCALIDRAW — Panel 1.1 (mapa del Módulo 4): el Gestor de Plantillas WhatsApp que crece clase a clase (C13 modelo + texto → C14 → C15 persistencia con localStorage → C16 lab calificado).**

> **Tu apertura:**
> *"Cerramos el Módulo 3 con la Pokédex —errores, estados, la app que no se rompe—. Hoy arranca el Módulo 4 con un proyecto nuevo: un **Gestor de Plantillas para WhatsApp**, una app para crear, guardar y reutilizar mensajes. Y no es una clase suelta: es una sola app que vamos a construir durante las próximas cuatro clases."*

> **Tu explicación teórica precisa (el mapa del módulo):**
> ```text
> C13  Modelado + Texto   → clase Template + estado + render + métodos de String   ← HOY
> C14  (M4)               → se construye sobre esta base
> C15  Persistencia       → localStorage: lo que hoy vive en memoria, se guarda
> C16  (M4)               → lab calificado del módulo
> ```
> - *"Hoy montamos la BASE: les damos forma a los datos, un lugar donde viven, y la pantalla que los muestra. Y aprendemos a manipular texto, que es de lo que más se ocupa una app real —nombres, mensajes, búsquedas, formularios—."*

> **Nota importante a decir explícito (que no lo vivan como bug):**
> *"Una cosa desde ya: hoy TODO vive en memoria. Si recargan la página, se pierde todo. Es a propósito —no es un error—. Hacer que sobreviva a la recarga lo resolvemos en C15 con algo que se llama localStorage. Hoy nos concentramos en la estructura y el texto."*

---

#### 1.2 Setup del repo + lectura guiada del `index.html` (módulo)

**EN PANTALLA: VS CODE — el repo _whatsapp-templates_ con la estructura de archivos y el `index.html` base abierto. Apoyo: EXCALIDRAW — Panel 1.2 (árbol de archivos: `index.html` + `js/app.js` + `js/models/Template.js`, con la etiqueta "cada archivo = una responsabilidad").**

> **Tu apertura:**
> *"Montemos el proyecto. Repo nuevo en GitHub: _whatsapp-templates_, trabajamos sobre _main_. Y fíjense en la estructura de archivos, porque hoy aparece algo nuevo: NO metemos todo el JavaScript en un solo archivo."*

> **Tu explicación teórica precisa (separar el código en archivos):**
> En vez de amontonar todo el JavaScript en un solo archivo, lo **separamos por responsabilidad**: cada pieza en el suyo. Hoy el **modelo de datos** (la clase **_Template_**) va en su propio archivo, aparte de la lógica de la app.
> ```text
> whatsapp-templates/
> ├── index.html
> └── js/
>     ├── app.js              ← la lógica de la app (estado, render, eventos)
>     └── models/
>         └── Template.js     ← SOLO el modelo de datos (la clase Template)
> ```
> - *"¿Por qué separar? Tres razones: **organización** (cada cosa en su lugar), **reutilización** (puedo usar el modelo en otro lado), y **mantenibilidad** (si algo del modelo falla, sé en qué archivo mirar)."*
> - *"Los conectamos con dos etiquetas **_&lt;script&gt;_** en el HTML, en orden. Primero carga **_Template.js_**, después **_app.js_** —que lo usa—. El ORDEN importa: si **_app.js_** cargara primero, no conocería la clase **_Template_** todavía."*

> **Lectura guiada del `index.html` pre-armado (NO se escribe — se LEE):**
> *(Proyectar el `index.html` del lab y recorrerlo señalando cada parte; el alumno lo copia, acá entendemos qué hace.)*
> 1. **Tailwind por CDN** en el `&lt;head&gt;` — lo dominan de C08, solo lo aplicamos.
> 2. El **formulario** **_&lt;form id="form-plantilla"&gt;_** con tres **_&lt;input&gt;_** (título, mensaje, hashtag) y un botón.
> 3. El **contenedor vacío** **_&lt;ul id="listaPlantillas"&gt;_** — acá el JS pintará las plantillas. Empieza vacío.
> 4. Las dos etiquetas **_&lt;script&gt;_** al final, en orden: **_Template.js_** y después **_app.js_**.

> **Convención del proyecto (que la recuerden):**
> *"Dos ids son contrato del proyecto: el formulario es **_form-plantilla_** y la lista es **_listaPlantillas_**. No les cambien el nombre — los reusamos tal cual en C14, C15 y C16."*

---

#### 1.3 El problema: los datos no tienen forma ni casa

**EN PANTALLA: NAVEGADOR (Live Server) — el formulario ya se ve; se llena, se da "Agregar plantilla" y NO pasa nada (la lista sigue vacía).**

> **Tu apertura (gancho ejecutable):**
> *"Tenemos el formulario en pantalla. Lo lleno —título 'Saludo', mensaje 'Hola {nombre}'— y le doy Agregar. ¿Qué pasa?"* *(Dejar que prueben.)* *"Nada. La página ni se inmuta. ¿Por qué?"*

> **Pregunta de activación:**
> *"El formulario captura lo que escribo —eso ya lo sabemos hacer desde el M3—. Pero cuando le doy Agregar, ¿a DÓNDE iría ese dato? ¿Y con qué FORMA se guardaría?"*
> *(Respuesta guía: no hay ningún lugar donde guardarlo —ni lista ni variable— ni una forma definida de "qué es una plantilla". El dato no tiene ni casa ni forma. Eso montamos ahora.)*

> **Tu cierre del problema (puente al concepto):**
> *"Nos faltan dos cosas: la FORMA de una plantilla —eso es **modelar**, que ya saben del M2 y lo aplicamos al construir la HU— y la CASA donde viven todas juntas —eso es el **estado**, el concepto nuevo de hoy—. Empecemos por entender bien el estado, que es lo que no han visto."*

---

#### 1.4 El estado central — qué es y cómo identificarlo

**EN PANTALLA: EXCALIDRAW — Panel 1.3 (el estado al centro): el objeto _state_ con la lista de plantillas adentro y una flecha "render" hacia una maqueta de pantalla; al lado, el método de identificación en 2 preguntas (¿qué datos recuerda? · ¿global o local?).**

> **Tu apertura:**
> *"El concepto nuevo del día es el ESTADO. Modelar —darle forma a un dato con una clase— ya lo saben del M2, y lo aplicamos en un rato al construir la HU1. Lo que probablemente nunca nombraron es DÓNDE viven todos esos datos juntos. Eso es el estado, y es lo que vemos ahora."*

> **Tu explicación teórica precisa (qué es el estado, a fondo):**
> El **estado** es la representación de los **datos actuales** de una aplicación —o de una parte de ella— **en un momento específico**, y **cambia en respuesta a las interacciones o eventos** del usuario (agregar algo, borrarlo, loguearse). Tres ideas que lo definen:
> - **Es la fuente de verdad:** si un dato no está en el estado, no existe en la app. La pantalla se deriva de él, nunca al revés.
> - **Se comparte:** distintas partes de la app leen el MISMO estado; por eso se **centraliza** —para no tener copias sueltas que se contradigan—.
> - **Cambia en el tiempo:** no es fijo; cada acción del usuario lo modifica, y la app reacciona redibujando.
>
> *"Y ojo: una app grande no tiene un solo estado. Tiene estado **global** —el que se comparte en toda la app, como el usuario logueado o el tema claro/oscuro— y estado **local** —el que solo le importa a una parte, como si un menú está abierto—. Nuestra app de hoy es simple: tiene UN estado central y global, la lista de plantillas."*
>
> ```javascript
> /* Sintaxis general */
> const state = { <coleccion>: [] };   // la única verdad de la app
> ```

> **Cómo se identifica el estado — el método (de los apuntes), en dos preguntas:**
> 1. **¿Qué información tiene que recordar mi app?** → lluvia de ideas: listar TODOS los datos relevantes.
> 2. **¿Cada dato se usa en varias partes de la app, o en una sola?** → clasificarlo: global o local.

> **Ejemplo de identificación — LO HAGO YO PRIMERO (una tienda en línea):**
> *(Demostrarlo en vivo, listando en pizarra/Excalidraw. El alumno todavía NO participa — primero ve el método aplicado a algo que conoce.)*
> *"Antes de que lo hagan ustedes, lo hago yo con una app que todos conocen: una tienda en línea. Pregunta 1 — ¿qué datos tiene que recordar?"*
> - Usuario (nombre, si está logueado).
> - Catálogo de productos.
> - Carrito de compras.
> - Preferencias (idioma, tema claro/oscuro).
>
> *"Pregunta 2 — ¿cada uno es global o local?"*
> - Usuario, catálogo, carrito, preferencias → **globales**: se usan en varias páginas (el carrito aparece en la página de productos Y en el resumen de compra).
> - El texto del buscador de la barra, o si el modal de un producto está abierto → **locales**: solo le importan a esa parte.
>
> *"¿Notan el método? Listo los datos, y a cada uno le pregunto DÓNDE se usa. Eso me dice qué va al estado central. Ahora háganlo ustedes con NUESTRA app."*

> **Mini-dinámica — ahora ustedes, con la app de plantillas:**
> *(Preguntar al grupo, anclado a ESTA app. 2-3 min, sin código. Misma receta que recién.)*
> *"Pregunta 1: ¿qué información tiene que recordar nuestro gestor de plantillas?"*
> *(Respuesta guía: la lista de plantillas; cada una con título, mensaje, hashtag y fecha. Eso es TODO lo que la app necesita recordar.)*
> *"Pregunta 2: ¿es global o local?"*
> *(Respuesta guía: global — la lista de plantillas ES el corazón de la app, todo gira alrededor de ella. Hoy es el único estado, y es central.)*
> *"Conclusión: un solo estado central → **_const state = { plantillas: [] }_**. Eso es lo que montamos en código en la HU1."*

> **Nombrar CRUD (concepto que se completa en C14):**
> *"Sobre ese estado, una app hace cuatro operaciones básicas, y tienen un nombre: **CRUD** — **C**rear, **L**eer, **A**ctualizar, **B**orrar (Create, Read, Update, Delete). Es el vocabulario estándar de cualquier app que maneja datos."*
> - *"HOY hacemos las dos primeras: **Crear** una plantilla (agregarla al estado, ahora mismo en HU1) y **Leer** (mostrarlas en pantalla, en el Momento 2)."*
> - *"**Actualizar** (editar) y **Borrar** una plantilla llegan en C14. Hoy plantamos la C y la R; el resto del CRUD viene en la próxima clase."*

---

#### 1.5 HU1 — modelar `Template`, crear el estado y agregar (lab)

**EN PANTALLA: VS CODE — `js/models/Template.js` y `js/app.js` vacíos, listos para escribir.**

> **Tu apertura:**
> *"Primera Historia de Usuario. Acá se juntan las dos piezas del momento: le damos FORMA a la plantilla —modelar con una clase, que ya saben del M2— y la guardamos en el ESTADO que acabamos de definir. Antes de tocar código, leemos qué cuenta como TERMINADO —los criterios—. Después armamos el plan en palabras, y recién ahí bajamos a código."*

> **Criterios de aceptación de HU1 (la Definición de Terminado — se leen ANTES de construir):**
> - Cada plantilla queda representada con su **título, mensaje y hashtag**.
> - Cada plantilla **registra su fecha de creación** automáticamente.
> - Existe una **única lista central** con todas las plantillas.
> - Agregar una plantilla la **suma a esa lista** (se puede comprobar que la lista creció).

> **Lo que la HU1 toca, en una mirada (antes del plan):**
> *"Esta historia es chica pero junta TODO lo del momento. Fíjense cómo cada criterio mapea a una pieza:"*
>
> | Criterio de la HU1 | Pieza que lo resuelve |
> |---|---|
> | Título, mensaje y hashtag | la clase **_Template_** (modelar la forma) |
> | Registra su fecha automáticamente | **_this.fecha = new Date()_** en el constructor |
> | Una única lista central | el estado **_state = { plantillas: [] }_** |
> | Agregar la suma a la lista | **_agregarPlantilla_** reasignando el array |
>
> *"Dos archivos: la FORMA (la clase) en **_Template.js_**; la CASA (el estado) y el agregar, en **_app.js_**."*

> **Plan de la solución — definir los pasos ANTES de escribir el código:**
> *(Conducirlo socráticamente. **Regla del juego: cada paso se responde leyendo la HU 1 y sus criterios** — no son decisiones abiertas.)*
>
> **Paso 1 · EL PROGRAMA define la FORMA de una plantilla**
> > 🔎 *Criterio textual: "cada plantilla queda representada con su título, mensaje y hashtag". ¿Qué herramienta del M2 usamos para definir la forma de un objeto con campos fijos?*
> > ✅ **Respuesta esperada:** una **clase** con su **constructor**. **_Template_** recibe título, mensaje y hashtag y los guarda en **_this_**.
> >
> ---
> **Paso 2 · EL PROGRAMA sella la fecha de creación SOLO**
> > 🔎 *Criterio: "registra su fecha de creación automáticamente". La fecha NO viene del formulario. ¿Dónde y cómo la conseguimos sin pedírsela al usuario?*
> > ✅ **Respuesta esperada:** adentro del constructor, **_this.fecha = new Date()_**. Se calcula sola en el instante de crear la plantilla. Es la propiedad que no viene por parámetro.
> >
> ---
> **Paso 3 · EL PROGRAMA decide DÓNDE viven todas las plantillas**
> > 🔎 *Criterio: "existe una única lista central". ¿Una variable suelta por cada plantilla, o una sola estructura que las contenga a todas?*
> > ✅ **Respuesta esperada:** un único objeto **_state_** con una lista **_plantillas: []_** adentro — la fuente de verdad. Empieza vacía.
> >
> ---
> **Paso 4 · EL USUARIO agrega una plantilla y la lista CRECE**
> > 🔎 *Criterio: "agregar la suma a la lista y se puede comprobar que creció". Creamos la plantilla con **_new Template(...)_**. Para sumarla, ¿modificamos el array que ya está, o lo reemplazamos por uno nuevo que la incluya?*
> > ✅ **Respuesta esperada:** la **reasignamos** con una copia que la incluye: **_state.plantillas = [...state.plantillas, nueva]_**. NO usamos **_.push_**. (Mismo hábito de inmutabilidad del M2; más adelante lo va a exigir un framework como React.)
> >
> ---
> **Paso 5 · EL PROGRAMA verifica que funcionó (sin pantalla todavía)**
> > 🔎 *Hoy la pantalla aún no muestra nada —eso es el Momento 2—. ¿Cómo comprobamos que la lista creció, sin interfaz?*
> > ✅ **Respuesta esperada:** desde la **consola del navegador**, llamar **_agregarPlantilla(...)_** y mirar **_state.plantillas_** — tiene que tener más elementos.

> **Tu cierre del plan (antes de bajar a código):**
> *"Cinco pasos, todos respondidos leyendo la HU. Dos archivos: la FORMA va en **_Template.js_**, la CASA y el agregar van en **_app.js_**. Bajamos a código — es casi una transcripción del plan."*

> **Code-along del lab — HU1 (Parte 1: el modelo, en `js/models/Template.js`):**
> ```javascript
> class Template {
>   constructor(titulo, mensaje, hashtag) {
>     this.titulo  = titulo;       // ← Paso 1
>     this.mensaje = mensaje;      // ← Paso 1
>     this.hashtag = hashtag;      // ← Paso 1
>     this.fecha   = new Date();   // ← Paso 2: se calcula sola, no viene por parámetro
>   }
> }
> ```

> **Tu explicación al escribir el modelo (modelar en acción — reactivación del M2):**
> *"Esto es modelar. La clase **_Template_** es el MOLDE: define que toda plantilla tiene cuatro campos, ni más ni menos. El **_constructor_** es la receta que corre cada vez que hacemos **_new Template(...)_** — recibe los datos y los guarda en **_this_**, que es el objeto nuevo que se está creando en ese momento."*
> - *"Tres campos vienen por parámetro —lo que escribió el usuario—; el cuarto, la fecha, lo pone el constructor solo con **_new Date()_**. No se la pedimos a nadie."*
> - *"Cada **_new Template(...)_** produce un objeto INDEPENDIENTE: mismo molde, distinto contenido. Diez plantillas son diez objetos con la misma forma y sus propios valores."*
> - *"Y ojo con esto: la clase NO es la plantilla — es el molde que las fabrica. La plantilla real recién nace cuando hacemos **_new_**."*

> **Mini-sección — qué es `new Date()` (lo venimos usando, ahora lo nombramos):**
> *"Apareció **_new Date()_** en el constructor y nunca lo explicamos. Hagámoslo rápido, porque lo van a usar siempre."*
> **_Date_** es el objeto nativo de JavaScript para representar un **momento en el tiempo** (fecha + hora). **_new Date()_** sin argumentos captura el **instante actual** y lo guarda como un **objeto** —no como texto—: por dentro tiene el año, el mes, el día, la hora, todo.
> ```javascript
> /* Sintaxis general */
> const ahora = new Date();   // el momento exacto en que se ejecuta esta línea
> ```
> - **Demo en consola (10 segundos):** *"Escriban **_new Date()_** en la consola y dénle Enter. Miran lo que devuelve: un objeto con la fecha y hora de AHORA mismo."*
> - *"En la plantilla lo usamos para **sellar cuándo se creó**: la fecha se calcula UNA vez, en el constructor, y queda fija — aunque la plantilla se redibuje mil veces, recuerda su momento de nacimiento."*
> - *"Un detalle para el Momento 2: ese objeto **_Date_** crudo es ilegible si lo mostramos tal cual (sale algo como `Mon Jun 29 2026 14:03:21...`). Cuando pintemos las plantillas en pantalla lo vamos a convertir a texto legible —`29/6/2026`—. Hoy basta con CREARLO; mostrarlo bonito es de la próxima HU."*

> **Code-along del lab — HU1 (Parte 2: el estado y agregar, en `js/app.js`):**
> ```javascript
> const state = { plantillas: [] };                         // ← Paso 3: la única fuente de verdad
>
> function agregarPlantilla(titulo, mensaje, hashtag) {
>   const nueva = new Template(titulo, mensaje, hashtag);   // crea la instancia
>   state.plantillas = [...state.plantillas, nueva];        // ← Paso 4: reasigna, NO muta
> }
> ```
> - *"Fíjense en el **_new Date()_** del constructor: no le pasamos la fecha, la pone él solo al nacer la plantilla. Cada plantilla recuerda CUÁNDO se creó."*
> - *"Y el agregar: **_[...state.plantillas, nueva]_** arma un array NUEVO con todo lo viejo más la nueva, y se lo asigna al estado. No tocamos el array anterior. Mismo hábito que vimos en el M2; más adelante van a entender por qué un framework lo exige."*

> **Checkpoint 1 (~30 min):** *Con Live Server corriendo, desde la consola del navegador llamar **_agregarPlantilla("Saludo", "Hola {nombre}", "ventas")_** dos veces. Escribir **_state.plantillas_** y dar Enter: la lista tiene 2 elementos, cada uno un objeto **_Template_** con sus 4 propiedades (incluida la fecha). La lista creció — HU1 terminada.*

> **Cierre del Momento + puente al siguiente:**
> *"Tenemos la FORMA (la clase **_Template_**) y la CASA (el estado), y ya podemos **Crear** —la C del CRUD—. Pero noten algo: para comprobarlo tuvimos que ir a la CONSOLA. El usuario común no abre la consola — necesita VER sus plantillas en la pantalla. Ahora mismo el estado crece a escondidas. El próximo paso es conectar ese estado con la pantalla: que cada plantilla que agrego APAREZCA sola en la lista. Esa es la **L** del CRUD —Leer— y se hace con el patrón **render**. Momento 2."*

---

## MOMENTO 2 — Del estado a la pantalla: `render()` + `Date` (HU2)

**Tiempo:** ~30 min
**Parte del lab:** HU2 (Checkpoint 2 ~60 min)

> **OBJETIVO:** El alumno conecta el estado con el DOM mediante el patrón **_render()_** (limpiar → recorrer → crear un nodo por dato) y fija la regla de oro de la app: *cambias el estado → llamas `render()`*. Conecta el `submit` del formulario para que la plantilla aparezca al instante sin recargar, y muestra la fecha de creación en formato legible con **_Date.toLocaleDateString("es-PE")_**. Cierra viendo aparecer la tarjeta sola, con la fecha de hoy, al darle "Agregar".

> **Patrón pedagógico de M2:** **problema → concepto (render) → concepto (Date legible) → plan socrático → lab.** Reusa el **DOM del M3** (**_getElementById_**, **_createElement_**, **_appendChild_**, **_innerHTML_**, **_addEventListener_**, **_preventDefault_**) sin re-enseñarlo —se reactiva inline donde se usa—. El `render()` se enseña como **PATRÓN** (limpiar → recorrer → crear) y como la **regla central** de la app (*cambias el estado → `render()`*). La fecha legible **paga la deuda sembrada en M1**: ahí creamos el `Date`, acá lo formateamos. El plan socrático cubre construir `render()` + conectar el `submit`; **_agregarPlantilla_** de la HU1 se reusa sin tocar. El bug de los duplicados se hace SENTIR (comentar el `innerHTML = ""` y ver la lista duplicarse) antes de explicar por qué se limpia.

---

#### 2.1 El problema: el estado crece, la pantalla no muestra nada

**EN PANTALLA: NAVEGADOR (Live Server) + consola — el estado tiene 2 plantillas (de CP1), pero el `<ul>` de la pantalla sigue vacío.**

> **Tu apertura (gancho):**
> *"En la HU1 agregamos plantillas y comprobamos EN LA CONSOLA que el estado creció. Pero miren la pantalla."* *(Señalar la lista vacía.)* *"Vacía. El estado tiene los datos, pero el usuario no ve nada. Y el usuario común no abre la consola — necesita ver sus plantillas en la página."*

> **Pregunta de activación:**
> *"El estado ya tiene la lista de objetos. ¿Qué tendría que pasar para que esos objetos se conviertan en elementos visibles dentro del **_&lt;ul&gt;_** vacío del HTML?"*
> *(Respuesta guía: recorrer la lista del estado y, por cada plantilla, crear un elemento en el DOM y meterlo en el **_&lt;ul&gt;_**. Eso —construir la pantalla a partir del estado— es el patrón render.)*

---

#### 2.2 El patrón `render()` — del estado a la pantalla

**EN PANTALLA: EXCALIDRAW — Panel 2.1 (el ciclo render): el objeto _state_ → flecha **_render()_** con 3 mini-pasos numerados (1 limpiar · 2 recorrer · 3 crear nodo) → la lista pintada; abajo, un loop "el usuario agrega → cambia _state_ → _render()_".**

> **Tu apertura:**
> *"La función que conecta el estado con la pantalla tiene un nombre y un patrón fijo: **_render_**. Es la pieza más importante del día, porque todo lo que viene —editar, borrar, filtrar— va a pasar por ella."*

> **Tu explicación teórica precisa:**
> **_render()_** es la función que **dibuja toda la pantalla a partir del estado**. Su contrato es siempre el mismo, en tres pasos:
> 1. **Limpiar** el contenedor (**_innerHTML = ""_**) — borra lo que había.
> 2. **Recorrer** el estado (**_forEach_**) — una vuelta por cada dato.
> 3. **Crear y agregar** un nodo del DOM por cada dato (**_createElement_** + **_appendChild_**).
>
> La **regla de oro** de toda la app: **cambias el estado → llamas `render()`**. Y `render()` **siempre redibuja TODO de cero** desde el estado — no parchea lo que cambió.
>
> ```javascript
> /* Sintaxis general */
> function render() {
>   <contenedor>.innerHTML = "";                  // 1. limpia
>   <estado>.<coleccion>.forEach(function (item) {
>     const nodo = document.createElement("<tag>");
>     nodo.innerHTML = `<contenido con ${item.<prop>}>`;
>     <contenedor>.appendChild(nodo);             // 3. agrega un nodo por dato
>   });
> }
> ```

> **Reactivación del M3 (no es nada nuevo):**
> *"Nada de esto es tecnología nueva: **_createElement_**, **_appendChild_** e **_innerHTML_** los usaron en el M3 para crear elementos desde JavaScript. Lo nuevo es el PATRÓN: usarlos siempre con la misma receta —limpiar, recorrer, crear— y atados a un estado."*

> **Por qué se limpia primero (lo van a SENTIR, no solo escuchar):**
> *"El paso 1, **_innerHTML = ""_**, parece de relleno y es el más importante. Si NO limpiamos antes de recorrer, cada vez que renderizamos apilamos las plantillas de nuevo sobre las que ya estaban: la lista se duplica, se triplica. Es el bug número uno del principiante. Lo van a comprobar en un rato: comenten esa línea, agreguen dos plantillas, y miren la lista repetirse."*

---

#### 2.3 La fecha legible con `Date` (pagamos la deuda de M1)

**EN PANTALLA: VS CODE / consola — comparar **_new Date()_** crudo vs **_.toLocaleDateString("es-PE")_**.**

> **Tu apertura:**
> *"En M1 creamos la fecha con **_new Date()_** y les dije que mostrarla bonita venía después. Es ahora — porque recién acá la vamos a pintar en la tarjeta."*

> **Tu explicación teórica precisa:**
> El objeto **_Date_** guarda el instante como un objeto, **no como texto** — por eso, mostrado tal cual, es ilegible. Para volverlo legible se usa **_.toLocaleDateString("&lt;locale&gt;")_**, que lo convierte a una fecha corta según la región. Con **_"es-PE"_** sale en formato peruano: día/mes/año.
> ```javascript
> /* Sintaxis general */
> <objetoDate>.toLocaleDateString("<locale>");
> /* Fórmula */
> new Date().toLocaleDateString("es-PE");   // → "29/6/2026"
> ```

> **Demo en consola (15 segundos):**
> *"Escriban **_new Date()_** → devuelve el objeto largo e ilegible (`Mon Jun 29 2026 14:03:...`). Ahora **_new Date().toLocaleDateString("es-PE")_** → `29/6/2026`. Mismo dato, dos vistas: la cruda y la legible. En el render usamos la legible."*
> - *"La fecha se SELLA una vez (en el constructor de M1) y se FORMATEA cada vez que se dibuja. Crear y mostrar son cosas distintas: el objeto se guarda una vez, el texto se arma en cada render."*

---

#### 2.4 HU2 — mostrar las plantillas y conectar el formulario (lab)

**EN PANTALLA: VS CODE — `js/app.js`, debajo de la HU1.**

> **Tu apertura:**
> *"Segunda Historia de Usuario. Lo de siempre: leemos los criterios, armamos el plan en palabras, y bajamos a código."*

> **Criterios de aceptación de HU2 (la Definición de Terminado):**
> - Todas las plantillas de la lista **aparecen en pantalla**.
> - Al agregar desde el formulario, la nueva **aparece al instante**, sin recargar.
> - Cada plantilla muestra su **fecha de creación en formato legible**.
> - La lista en pantalla refleja **exactamente** el estado: sin restos viejos ni duplicados.

> **Plan de la solución — definir los pasos ANTES de escribir el código:**
> *(Conducirlo socráticamente. **Cada paso se responde leyendo la HU 2 y sus criterios.**)*
>
> **Paso 1 · EL PROGRAMA toma el contenedor donde va la lista**
> > 🔎 *El HTML tiene **_&lt;ul id="listaPlantillas"&gt;_** vacío. ¿Cómo lo agarramos desde JS para escribir adentro?*
> > ✅ **Respuesta esperada:** **_document.getElementById("listaPlantillas")_** (DOM del M3). Lo guardamos en una constante para no buscarlo cada vez.
> >
> ---
> **Paso 2 · EL PROGRAMA limpia antes de dibujar**
> > 🔎 *Criterio: "sin restos viejos ni duplicados". Antes de recorrer el estado, ¿qué hacemos con lo que ya hay en la lista?*
> > ✅ **Respuesta esperada:** vaciarlo con **_lista.innerHTML = ""_**. Es lo que garantiza que la pantalla sea un reflejo EXACTO del estado, sin acumular.
> >
> ---
> **Paso 3 · EL PROGRAMA recorre el estado y crea un nodo por plantilla**
> > 🔎 *Criterio: "todas las plantillas aparecen". ¿Cómo pasamos de la lista de objetos a elementos en el DOM?*
> > ✅ **Respuesta esperada:** **_state.plantillas.forEach(...)_** y, por cada una, **_createElement("li")_** + su contenido + **_appendChild_** al **_&lt;ul&gt;_** (DOM del M3).
> >
> ---
> **Paso 4 · EL PROGRAMA muestra la fecha legible dentro del nodo**
> > 🔎 *Criterio: "fecha en formato legible". Tenemos **_p.fecha_** (un objeto Date). ¿Cómo lo metemos legible en la tarjeta?*
> > ✅ **Respuesta esperada:** **_p.fecha.toLocaleDateString("es-PE")_** → texto `29/6/2026`, y lo interpolamos en el HTML del nodo.
> >
> ---
> **Paso 5 · EL USUARIO agrega desde el formulario y la nueva aparece al instante**
> > 🔎 *Criterio: "aparece al instante, sin recargar". Ya tenemos **_agregarPlantilla_** de la HU1 (cambia el estado). ¿Qué hace falta para que el cambio se VEA, y cómo evitamos que el formulario recargue la página?*
> > ✅ **Respuesta esperada:** escuchar el **_submit_** del formulario → **_e.preventDefault()_** (que NO recargue, del M3) → **_agregarPlantilla(...)_** (cambia el estado) → **_render()_** (lo muestra) → **_form.reset()_** (limpia los campos). Ahí se materializa la regla **cambias el estado → render()**.
> >
> ---
> **Paso 6 · verificación de los 4 criterios**
> > 🔎 *¿Cómo probamos los cuatro de una?*
> > ✅ **Respuesta esperada:** llenar el form y agregar → aparece al instante con su fecha legible; agregar otra → se suma sin borrar la anterior NI duplicar (eso prueba el limpiar del Paso 2).

> **Tu cierre del plan (antes de bajar a código):**
> *"Seis pasos, casi todos del M3 (DOM y eventos). Lo nuevo es la receta del render y atarlo a la regla 'cambias el estado → render'. Bajamos a código."*

> **Code-along del lab — HU2 (en `js/app.js`):**
> ```javascript
> const lista = document.getElementById("listaPlantillas");   // ← Paso 1
> const form  = document.getElementById("form-plantilla");
>
> function render() {
>   lista.innerHTML = "";                                      // ← Paso 2: limpia (evita duplicados)
>   state.plantillas.forEach(function (p) {                    // ← Paso 3: recorre el estado
>     const fechaTexto = p.fecha.toLocaleDateString("es-PE");  // ← Paso 4: Date → texto legible
>     const li = document.createElement("li");                 // ← Paso 3: crea el nodo
>     li.className = "bg-white p-3 rounded-lg shadow";
>     li.innerHTML = `
>       <strong>${p.titulo}</strong>
>       <span class="text-xs text-slate-400">${fechaTexto}</span>
>       <br>${p.mensaje}`;
>     lista.appendChild(li);                                   // ← Paso 3: lo agrega al <ul>
>   });
> }
>
> form.addEventListener("submit", function (e) {               // ← Paso 5
>   e.preventDefault();                                        //    no recargar la página
>   agregarPlantilla(titulo.value, mensaje.value, hashtag.value);
>   render();                                                  //    el estado cambió → redibujamos
>   form.reset();                                              //    limpia los campos
> });
> ```
> - *"El **_render()_** es el patrón puro: limpia, recorre, crea. La fecha entra legible con **_toLocaleDateString_**. Y el **_&lt;li&gt;_** se arma con una plantilla de texto (las comillas invertidas) interpolando los datos de cada plantilla."*
> - *"El **_submit_** une todo: **_preventDefault_** para que el form no recargue, **_agregarPlantilla_** cambia el estado, **_render()_** lo refleja, **_reset()_** limpia. Esa es la regla del día en una línea: **tocás el estado, llamás render**."*
> - *"Lo que NO tocamos: **_agregarPlantilla_** y la clase **_Template_** de la HU1 siguen igual. Solo sumamos el render y la conexión del formulario."*

> **Demo del bug de duplicados (el dolor que prometimos):**
> *"Comenten la línea **_lista.innerHTML = ""_** y agreguen dos plantillas. Miren: la lista se repite, se acumula. Descoméntenla: vuelve a estar limpia. Eso es por qué render SIEMPRE limpia primero."*

> **Checkpoint 2 (~60 min):** *Llenar el formulario y dar "Agregar plantilla": la plantilla aparece sola en la lista, con la fecha de hoy en formato legible (`29/6/2026`). Agregar otra: se suma sin borrar la anterior y sin duplicar. La pantalla refleja exactamente el estado — HU2 terminada.*

> **Cierre del Momento + puente al receso:**
> *"Ya guardamos las plantillas (HU1) y las mostramos en pantalla, apareciendo al instante (HU2). La app respira. Pero prueben algo antes del receso: agreguen una plantilla con el hashtag escrito **_  Ventas_** —con espacios y mayúscula— y otra con **_#VENTAS_**. Se guardan tal cual, sucias y distintas, aunque son la misma categoría. Después del receso le enseñamos a la app a limpiar y unificar lo que el usuario escribe — y ahí descubrimos que un texto es un objeto con superpoderes. Receso de 10 minutos."*

---

## RECESO — 10 min

*(Punto medio del lab: HU1 y HU2 cerradas, la app ya guarda y muestra plantillas. Después del receso entra el corazón del día: la manipulación de texto.)*

---

## MOMENTO 3 — Texto es un objeto: limpiar, normalizar y validar (HU3)

**Tiempo:** ~35 min
**Parte del lab:** HU3 (Checkpoint 3 ~90 min)

> **OBJETIVO:** El alumno descubre que **un string es un objeto con métodos** (igual que un array), usa **_.trim()_** y **_.toLowerCase()_** para limpiar la entrada cruda, y construye **_normalizarHashtag_** componiendo métodos (+ **_.startsWith_** + operador ternario) para que `Ventas`, ` ventas` y `#VENTAS` queden los tres como `#ventas`. Valida con **_.length_** (cláusula de guarda) para impedir títulos o mensajes vacíos. Se lleva la tesis del día: *normalizar la entrada es trabajo de la app, no del usuario*. Cierra comprobando que `  Ventas ` se guarda como `#ventas` y que un mensaje vacío no deja agregar.

> **Patrón pedagógico de M3:** **problema → concepto (string es objeto) → demo de métodos → plan socrático → lab.** El concepto nuevo y fuerte del día es que **un texto es un objeto con métodos** —igual que un array—; se abre con una **demo aislada en consola** (distinta del lab) para ver los métodos en acción antes de aplicarlos. Después, HU3 refactoriza el **_submit_** de HU2 sumándole tres cosas: limpiar (**_trim_**/**_toLowerCase_**), **normalizar** el hashtag (el concepto pedagógico clave del día) y validar (**_length_** + cláusula de guarda). La tesis a fijar: **normalizar la entrada es trabajo de la app, no del usuario.** El `submit` de HU2 NO se reescribe de cero — se le agregan las piezas.

---

#### 3.1 El problema: el usuario escribe sucio

**EN PANTALLA: NAVEGADOR — agregar dos plantillas con el hashtag `  Ventas` y `#VENTAS`; verlas guardadas distintas aunque son la misma categoría.**

> **Tu apertura (retoma el gancho de antes del receso):**
> *"Antes del receso vimos esto: agrego una plantilla con hashtag **_  Ventas_** —espacios y mayúscula— y otra con **_#VENTAS_**, y se guardan tal cual, distintas. Pero para el usuario son LA MISMA categoría. Si después quiere filtrar por '#ventas', le van a aparecer separadas. La app está guardando basura."*

> **Pregunta de activación:**
> *"El problema no es del usuario —él escribe como cualquiera escribe, con apuros y mayúsculas—. ¿De quién es la responsabilidad de dejar ese texto limpio y parejo antes de guardarlo?"*
> *(Respuesta guía: de la APP. El usuario escribe libre; la app acepta cualquier variante razonable y la deja consistente. Esa es la tesis del momento.)*

---

#### 3.2 Un texto es un objeto con métodos

**EN PANTALLA: VS CODE / consola — ejecutar métodos sobre un string de prueba, en vivo (demo aislada, NO el proyecto).**

> **Tu apertura:**
> *"Para limpiar texto necesitan saber algo que cambia todo: un string NO es solo una cadena de letras. Es un objeto, y trae métodos —funciones que le llamás con punto—, igual que un array."*

> **Tu explicación teórica precisa:**
> En JavaScript, un **string es un objeto con métodos**. Esos métodos **no modifican el texto original** (los strings son inmutables): siempre **devuelven un valor nuevo** —otro texto, un booleano, un número o un array—. Por eso se pueden **encadenar**: el resultado de uno alimenta al siguiente.
> ```javascript
> /* Sintaxis general */
> "<texto>".<metodo>(<argumentos>);   // devuelve un valor nuevo; NO toca el original
> ```
>
> **Panorama — los métodos de String que tocamos en el curso:**
>
> | Método | Devuelve | Para qué |
> |---|---|---|
> | **_.trim()_** | Texto sin espacios en las puntas | Limpiar la entrada |
> | **_.toLowerCase()_** | Texto en minúsculas | Unificar mayúsculas |
> | **_.startsWith("x")_** | `true` / `false` si empieza con `x` | Asegurar el `#` del hashtag |
> | **_.replaceAll("a","b")_** | Texto con todas las `a` cambiadas | Sustituir variables (M4) |
> | **_.slice(ini, fin)_** | Un pedazo del texto | Vista previa (M4) |
> | **_.split("sep")_** | Un **array** partido | Separar hashtags (M4) |
> | **_.length_** | Número de caracteres (propiedad, sin `()`) | Validar campos vacíos |

> **Demo aislada en consola (90 segundos — NO es el proyecto, es para ver los métodos):**
> *"Tomemos un texto sucio y juguemos en la consola:"*
> ```javascript
> "  Hola Mundo  ".trim();            // → "Hola Mundo"     (sin espacios en las puntas)
> "Hola Mundo".toLowerCase();         // → "hola mundo"
> "#ventas".startsWith("#");          // → true
> "ventas".startsWith("#");           // → false
> "Hola Mundo".length;                // → 10              (¡sin paréntesis!)
> "  Hola  ".trim().toLowerCase();    // → "hola"          (encadenados)
> ```
> - *"Fíjense en dos cosas: ninguno cambió el texto original —cada uno DEVOLVIÓ uno nuevo—; y **_.length_** va SIN paréntesis porque es una propiedad, no un método. Esa es la confusión número uno: **_.trim()_** lleva paréntesis, **_.length_** no."*

---

#### 3.3 Limpiar y unificar: `.trim()` + `.toLowerCase()`

**EN PANTALLA: EXCALIDRAW — Panel 3.1 (la cinta de limpieza): entra `"  Ventas "` → estación **_.trim()_** (caen los espacios) → estación **_.toLowerCase()_** (la V baja a v) → sale `"ventas"`.**

> **Tu explicación teórica precisa:**
> **_.trim()_** elimina los espacios en blanco **al inicio y al final** (no los del medio). **_.toLowerCase()_** pasa **todo el texto a minúsculas**. Juntos son la base de la limpieza: lo que el usuario escribe viene "sucio" —con espacios accidentales y mayúsculas inconsistentes— y estos dos lo dejan parejo antes de guardarlo.
> ```javascript
> /* Sintaxis general */
> "<texto>".trim();          // quita espacios de las puntas
> "<texto>".toLowerCase();   // todo a minúscula
> ```
> - *"**_.trim()_** NO toca los espacios del MEDIO: `\"hola  mundo\".trim()` sigue teniendo los dos espacios internos. Solo limpia las puntas — que es justo el problema típico de un formulario: el espacio accidental al final."*
> - *"Encadenados, **_.trim().toLowerCase()_** primero recorta y sobre ese resultado pasa a minúscula. Por legibilidad limpiamos primero."*

---

#### 3.4 HU3 — normalizar, validar y refactorizar el `submit` (lab)

**EN PANTALLA: VS CODE — `js/app.js`, sobre el `submit` que escribimos en HU2.**

> **Tu apertura:**
> *"Tercera Historia de Usuario. No escribimos un `submit` nuevo: tomamos el de HU2 y le AGREGAMOS tres cosas —limpiar, normalizar y validar—. Leemos los criterios y armamos el plan."*

> **Criterios de aceptación de HU3 (la Definición de Terminado):**
> - Los **espacios sobrantes** al inicio y final de cada campo se eliminan.
> - El **hashtag se ve siempre igual**: en minúsculas y empezando con `#` (que `Ventas`, ` ventas` y `#VENTAS` queden iguales).
> - **No se puede guardar** una plantilla con título o mensaje vacíos.

> **Plan de la solución — definir los pasos ANTES de escribir el código:**
> *(Conducirlo socráticamente. **Cada paso se responde leyendo la HU 3 y sus criterios.**)*
>
> **Paso 1 · EL USUARIO ya tiene el form de HU2, pero guarda texto sucio**
> > Punto de partida — sin pregunta. El `submit` de HU2 toma **_titulo.value_** y lo manda crudo. Vamos a interceptar ANTES de agregar.
> >
> ---
> **Paso 2 · EL PROGRAMA limpia cada campo apenas lo recibe**
> > 🔎 *Criterio: "se eliminan los espacios sobrantes". Apenas leemos **_titulo.value_** y **_mensaje.value_**, ¿qué método les aplicamos?*
> > ✅ **Respuesta esperada:** **_.trim()_** a cada uno, y guardamos el resultado en variables (`t`, `m`). Trabajamos con el texto YA limpio de ahí en adelante.
> >
> ---
> **Paso 3 · EL PROGRAMA unifica el hashtag (normalizar)**
> > 🔎 *Criterio: "el hashtag se ve siempre igual: minúscula y con #". Son varias operaciones juntas. ¿Las metemos sueltas en el submit, o las encapsulamos?*
> > ✅ **Respuesta esperada:** una función aparte, **_normalizarHashtag_**: limpia (**_trim().toLowerCase()_**) y asegura el `#` **sin duplicarlo** (con **_.startsWith("#")_** y un ternario). Encapsular la deja reutilizable y legible.
> >
> ---
> **Paso 4 · EL PROGRAMA rechaza título o mensaje vacíos (validar)**
> > 🔎 *Criterio: "no se puede guardar con título o mensaje vacío". Después de limpiar con trim, ¿cómo sabemos si un campo quedó vacío, y qué hacemos?*
> > ✅ **Respuesta esperada:** medir con **_.length_**: si **_t.length === 0_** o **_m.length === 0_**, avisamos (**_alert_**) y cortamos con **_return_** —cláusula de guarda— antes de agregar.
> >
> ---
> **Paso 5 · EL PROGRAMA arma el `submit` con todo en orden**
> > 🔎 *¿En qué ORDEN van las tres piezas dentro del submit?*
> > ✅ **Respuesta esperada:** (1) limpiar con trim → (2) validar (si vacío, cortar) → (3) agregar con el hashtag normalizado → render → reset. Validar va DESPUÉS de trim (si no, un campo de solo espacios pasaría como válido).
> >
> ---
> **Paso 6 · verificación de los criterios**
> > 🔎 *¿Cómo probamos los tres de una?*
> > ✅ **Respuesta esperada:** hashtag **_  Ventas_** → se guarda `#ventas`; **_#VENTAS_** → también `#ventas`; mensaje vacío → no deja agregar y avisa.

> **Tu explicación al escribir `normalizarHashtag` (CONCEPTO CLAVE — normalizar):**
> *"Acá está la tesis del día. **Normalizar** es transformar la entrada para que TODAS sus variantes razonables terminen idénticas. No es un método: es una idea que se arma combinando métodos."*
> - *"**_.startsWith(\"#\")_** evita el bug de poner doble `#`: solo agregamos el `#` si todavía NO está. Si ya empieza con `#`, lo dejamos."*
> - *"El **operador ternario** —**_condición ? siVerdadero : siFalso_**— elige entre las dos ramas en una línea. Acá: si ya tiene `#`, devolvemos el texto limpio; si no, le anteponemos el `#`."*

> **Code-along del lab — HU3 (en `js/app.js`):**
> ```javascript
> // Encapsulamos la normalización en su propia función                  ← Paso 3
> function normalizarHashtag(texto) {
>   const limpio = texto.trim().toLowerCase();             // sin espacios, en minúscula
>   return limpio.startsWith("#") ? limpio : "#" + limpio; // asegura el # sin duplicarlo
> }
>
> // El submit de HU2, ahora con limpieza + validación
> form.addEventListener("submit", function (e) {
>   e.preventDefault();
>   const t = titulo.value.trim();                         // ← Paso 2: limpia
>   const m = mensaje.value.trim();                        // ← Paso 2: limpia
>
>   if (t.length === 0 || m.length === 0) {                // ← Paso 4: cláusula de guarda
>     alert("Título y mensaje son obligatorios");
>     return;                                              //    corta: no agrega nada
>   }
>
>   agregarPlantilla(t, m, normalizarHashtag(hashtag.value)); // ← Paso 5: ya limpio y normalizado
>   render();
>   form.reset();
> });
> ```

> **Tu explicación de la validación (CONCEPTO — cláusula de guarda):**
> *"La validación es una **cláusula de guarda**: un `if` al inicio que, si algo no cumple, avisa y SALE temprano con **_return_**. El `return` corta el submit: el código de abajo —agregar, render— nunca corre si el campo estaba vacío."*
> - *"Ojo el ORDEN: validamos DESPUÉS de **_trim()_**. Si midiéramos antes, un campo con solo espacios (`\"   \"`) tendría **_length_** mayor que cero y pasaría como válido siendo basura."*
> - *"Salir temprano es más limpio que anidar todo dentro de un `if` gigante: sacamos el caso malo arriba y dejamos el camino feliz sin sangría."*

> **Checkpoint 3 (~90 min):** *(a) Escribir el hashtag **_  Ventas_** con espacios y mayúscula → se guarda y se verá como `#ventas`. (b) Escribir **_#VENTAS_** → también queda `#ventas` (no `##ventas`). (c) Dejar el mensaje vacío y dar Agregar → aparece el aviso y NO se agrega nada. HU3 terminada.*

> **Cierre del Momento + puente al siguiente:**
> *"Ahora la app guarda limpio y parejo: nada de espacios sueltos ni categorías repetidas, y nada de plantillas vacías. Pero noten algo: una plantilla dice `Hola {nombre}` — con ese `{nombre}` literal, tal cual. Eso no es un mensaje real todavía; es un molde con un hueco. El último paso del día es jugoso: convertir esa plantilla en un mensaje LISTO para enviar, reemplazando el `{nombre}` por un valor real y recortándolo para una vista previa. Ahí los métodos de String muestran todo su poder."*

---

## MOMENTO 4 — Usar la plantilla: generar y copiar el mensaje (HU4)

**Tiempo:** ~30 min
**Parte del lab:** HU4 (Checkpoint 4 ~110 min) + Cierre

> **OBJETIVO:** El alumno construye una **zona para USAR las plantillas** (aparte de la lista que solo las muestra): un **_&lt;select&gt;_** para elegir una plantilla, un input para el **nombre real**, un botón **Generar** que produce el mensaje **completo** con **_{nombre}_** reemplazado por **_.replaceAll()_**, y un botón **Copiar** que lo lleva al portapapeles con **_navigator.clipboard_**. Llena el selector con **_.map()_** (reusado del M2) y muestra los hashtags como etiquetas separadas con **_.split().map().join()_** en cada tarjeta. Cierra el día —y el arranque del módulo— con las 2 tesis, los logros opcionales y el puente a C15 (persistencia).

> **Patrón pedagógico de M4:** **problema → plan socrático → lab (cada método se explica al escribirlo) → cierre.** Los métodos se conocen **DENTRO de la HU, cuando cada uno se escribe** (nombrar el concepto donde sucede, con su demo corta): **_replaceAll_** (mensaje real), **_map_** (llenar el selector + las etiquetas, reusa el M2), **_split/join_** (etiquetas), más **_Number_** (convertir el valor del select a índice) y **_navigator.clipboard.writeText_** (copiar). HU4 **no reescribe** el `render()`: le agrega una zona generadora aparte y le suma las etiquetas a cada **_&lt;li&gt;_**. **Cambió respecto a la versión previa del lab:** el mensaje se muestra **completo** (ya no recortado en la tarjeta) — el recorte con **_.slice()_** pasó a ser un **logro opcional**. El Momento cierra la clase: recap de las 2 tesis, logros opcionales y puente a C14/C15. **C13 ABRE el módulo, no lo cierra** — por eso sí hay cierre con recap y puente.

---

#### 4.1 El problema: la plantilla tiene `{nombre}` literal

**EN PANTALLA: NAVEGADOR — una plantilla guardada muestra el mensaje `Hola {nombre}` con el `{nombre}` tal cual, literal.**

> **Tu apertura (gancho):**
> *"Miren una plantilla guardada: dice **_Hola {nombre}_**. Con ese **_{nombre}_** literal, entre llaves. Eso NO es un mensaje que le mandarías a alguien — es un molde con un hueco. Falta el último paso: convertirlo en un mensaje real, con un nombre de verdad adentro."*

> **Pregunta de activación:**
> *"Tengo el texto **_'Hola {nombre}, gracias {nombre}'_** y quiero cambiar **_{nombre}_** por **_'Ana'_** — las DOS veces que aparece. ¿Qué método de string creen que sirve para reemplazar un pedazo de texto por otro?"*
> *(Respuesta guía: uno que reemplace. Acá nace **_.replaceAll_** — y la sutileza de "todas las apariciones", que abre el sub-punto.)*

---

#### 4.2 HU4 — generar el mensaje y copiarlo (lab)

**EN PANTALLA: VS CODE — `index.html` (nueva sección "Usar plantilla") y `js/app.js`.**

> **Tu apertura:**
> *"Cuarta y última Historia de Usuario, y la más vistosa. Hasta ahora las tarjetas solo MUESTRAN las plantillas. Ahora construimos una zona aparte para USARLAS: elegís una, escribís un nombre real, y obtenés el mensaje final listo para copiar y pegar en WhatsApp. Leemos criterios y armamos el plan."*

> **Setup — la sección "Usar plantilla" (lectura guiada del HTML, debajo del formulario):**
> *(El alumno la copia del lab; acá entendemos qué pieza es cada una.)*
> - **_&lt;select id="selector"&gt;_** — el desplegable para elegir una plantilla (lo llena el JS).
> - **_&lt;input id="valorNombre"&gt;_** — donde el usuario escribe el nombre real (ej. "Ana").
> - **_&lt;button id="btn-generar"&gt;_** — dispara la generación del mensaje.
> - **_&lt;p id="mensaje-final"&gt;_** — donde aparece el mensaje completo.
> - **_&lt;button id="btn-copiar"&gt;_** — copia ese mensaje al portapapeles.

> **Criterios de aceptación de HU4 (la Definición de Terminado):**
> - Puedo **elegir** una de mis plantillas y escribir un **nombre real**.
> - Al generar, veo el **mensaje completo** con `{nombre}` ya reemplazado.
> - Un botón **"Copiar"** lleva ese mensaje al portapapeles.
> - En la lista, cada tarjeta muestra sus **hashtags como etiquetas** separadas.

> **Plan de la solución — definir los pasos ANTES de escribir el código:**
> *(Conducirlo socráticamente. **Cada paso se responde leyendo la HU 4 y sus criterios.**)*
>
> **Paso 1 · EL PROGRAMA convierte el molde en mensaje real**
> > 🔎 *Criterio: "{nombre} reemplazado por un valor real". ¿Qué método y dónde?*
> > ✅ **Respuesta esperada:** una función **_generarMensajeFinal(plantilla, valor)_** con **_plantilla.mensaje.replaceAll("{nombre}", valor)_**.
> >
> ---
> **Paso 2 · EL PROGRAMA ofrece elegir una plantilla**
> > 🔎 *Criterio: "puedo elegir una de mis plantillas". El **_&lt;select&gt;_** empieza vacío. ¿Cómo lo llenamos con las plantillas del estado, y cómo lo mantenemos al día?*
> > ✅ **Respuesta esperada:** una función **_renderSelector_** que con **_.map_** arma un **_&lt;option&gt;_** por plantilla (con **_value_** = su posición en el array) y se llama al final de **_render()_** para que esté siempre actualizado.
> >
> ---
> **Paso 3 · EL USUARIO elige, escribe un nombre y genera**
> > 🔎 *Criterio: "veo el mensaje completo". Al pulsar Generar, ¿de dónde sale la plantilla elegida y el nombre?*
> > ✅ **Respuesta esperada:** del **_selector.value_** (la posición, que convertimos a número con **_Number_**) sacamos la plantilla; del input **_valorNombre_** sacamos el nombre (con **_.trim()_**); generamos con **_generarMensajeFinal_** y lo pintamos en **_#mensaje-final_**. Completo, sin recortar.
> >
> ---
> **Paso 4 · EL USUARIO copia el mensaje**
> > 🔎 *Criterio: "un botón Copiar lo lleva al portapapeles". ¿Con qué?*
> > ✅ **Respuesta esperada:** **_navigator.clipboard.writeText(...)_** con el texto del **_#mensaje-final_**.
> >
> ---
> **Paso 5 · EL PROGRAMA muestra los hashtags como etiquetas en cada tarjeta**
> > 🔎 *Criterio: "hashtags como etiquetas separadas". El hashtag puede traer varios separados por espacio. ¿Cómo los volvemos píldoras?*
> > ✅ **Respuesta esperada:** **_hashtag.split(" ")_** → **_.map_** envuelve cada uno en un **_&lt;span&gt;_** → **_.join("")_**, dentro del **_render()_**.
> >
> ---
> **Paso 6 · verificación de los criterios**
> > 🔎 *¿Cómo probamos todo?*
> > ✅ **Respuesta esperada:** elegir una plantilla con **_{nombre}_**, escribir "Ana", Generar → mensaje completo con "Ana"; Copiar → queda en el portapapeles; las tarjetas muestran los hashtags como píldoras.

> **Tu cierre del plan (antes de bajar a código):**
> *"Seis pasos. Bajamos a código y a cada método lo conocemos justo cuando lo escribimos."*

> **Code-along — pieza 1: el mensaje real con `.replaceAll()` (Paso 1):**
> ```javascript
> function generarMensajeFinal(plantilla, valorNombre) {
>   return plantilla.mensaje.replaceAll("{nombre}", valorNombre);
> }
> ```
> *"Acá conocemos **_.replaceAll(buscar, reemplazo)_**: cambia TODAS las apariciones de un texto por otro. Nuestro **_{nombre}_** es un marcador de texto plano que rellenamos con un valor real."*
> - **Demo en consola (20 s):** *"**_\"Hola {nombre}, gracias {nombre}\".replaceAll(\"{nombre}\", \"Ana\")_** → **_\"Hola Ana, gracias Ana\"_**. Con **_.replace_** (sin 'All') solo cambiaría la PRIMERA."*
> - *"No confundir con los template literals (las comillas invertidas con **_${...}_**): eso lo resuelve JS al escribir el código; nuestro **_{nombre}_** lo reemplazamos NOSOTROS en tiempo de ejecución."*

> **Code-along — pieza 2: llenar el selector con `.map()` (Paso 2):**
> ```javascript
> const selector = document.getElementById("selector");
>
> function renderSelector() {
>   selector.innerHTML = state.plantillas
>     .map((p, i) => `<option value="${i}">${p.titulo}</option>`)   // value = posición en el array
>     .join("");
> }
> ```
> *"Acá reusamos **_.map_** del M2, ahora para construir HTML: una **_&lt;option&gt;_** por plantilla. El **_value_** de cada opción es su POSICIÓN en el array (el índice `i`) — eso nos sirve para recuperar la plantilla elegida en el Paso 3."*
> - *"**_renderSelector()_** se llama al FINAL de **_render()_**, junto a lo demás: así, cada vez que cambia el estado, el desplegable se actualiza solo. Misma regla de siempre: cambia el estado → se redibuja todo, incluido el selector."*

> **Code-along — pieza 3: el botón Generar (Paso 3):**
> ```javascript
> const salida = document.getElementById("mensaje-final");
>
> document.getElementById("btn-generar").addEventListener("click", function () {
>   const plantilla = state.plantillas[Number(selector.value)];   // la elegida en el select
>   const nombre = document.getElementById("valorNombre").value.trim();
>   salida.textContent = generarMensajeFinal(plantilla, nombre);  // mensaje COMPLETO
> });
> ```
> *"El **_selector.value_** llega como TEXTO (todo lo de un input es texto). Lo convertimos a número con **_Number(...)_** para usarlo como índice del array y recuperar la plantilla elegida. El nombre lo limpiamos con **_.trim()_** —ya sabemos por qué—. Y mostramos el mensaje COMPLETO, sin recortar."*

> **Code-along — pieza 4: el botón Copiar (Paso 4):**
> ```javascript
> document.getElementById("btn-copiar").addEventListener("click", function () {
>   navigator.clipboard.writeText(salida.textContent);
> });
> ```
> *"**_navigator.clipboard.writeText(...)_** es la API del navegador para escribir en el portapapeles. Le pasamos el texto del mensaje final y queda listo para pegar donde sea — WhatsApp, un correo, lo que sea."*

> **Code-along — pieza 5: los hashtags como etiquetas con `.split().map().join()` (Paso 5), dentro del `render()`:**
> *(EN PANTALLA apoyo: EXCALIDRAW — Panel 4.2 (la tubería): `"#ventas #urgente"` → split → array → map → spans → join → etiquetas pintadas.)*
> ```javascript
> // dentro del forEach del render() de HU2, en el innerHTML de cada <li>:
> const etiquetas = p.hashtag.split(" ")                 // separa varios hashtags
>   .map(h => `<span class="text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full">${h}</span>`)
>   .join("");
> // y en el innerHTML del <li>:  <div class="flex gap-1 mt-2 flex-wrap">${etiquetas}</div>
> ```
> *"Acá conocemos el trío: **_.split(\" \")_** PICA el hashtag en un array por los espacios; **_.map_** envuelve cada uno en un **_&lt;span&gt;_** píldora; **_.join(\"\")_** los EMPLATA en un solo string para **_innerHTML_**. Picar, condimentar, emplatar."*
> - **Demo en consola (15 s):** *"**_\"#ventas #urgente\".split(\" \")_** → **_[\"#ventas\", \"#urgente\"]_**."*
> - *"El **_render()_** sigue siendo el MISMO patrón —limpia, recorre, crea—: solo cambió que cada tarjeta ahora lleva las etiquetas, y que al final llama a **_renderSelector()_**."*

> **Checkpoint 4 (~110 min):** *Crear una plantilla con mensaje **_Hola {nombre}, gracias por tu compra_**. En "Usar plantilla", elegirla, escribir **_Ana_** y dar **Generar** → aparece **_Hola Ana, gracias por tu compra_** completo. Pulsar **Copiar** y pegarlo en cualquier lado. Las tarjetas muestran los hashtags como etiquetas separadas. HU4 terminada — el lab está completo.*

---

#### 4.3 Cierre de la clase — qué se llevan y qué viene

**EN PANTALLA: EXCALIDRAW — Panel 4.3 (mapa del día + arco del M4): el flujo estado → render → texto, y debajo C13 → C14 (editar/borrar) → C15 (persistencia) → C16 (lab calificado).**

> **Recap — las 2 tesis del día:**
> *"Dos ideas que se llevan, más allá de esta app:"*
> 1. *"**El estado es la única fuente de verdad; la pantalla se deriva del estado.** Cambian el estado → llaman `render()`. Nunca dibujan un dato que no esté en `state`. Ese es el modelo mental que todo framework moderno da por sentado."*
> 2. *"**Un texto es un objeto con métodos, y normalizar la entrada del usuario es trabajo de la app.** El usuario escribe de mil formas; la app acepta cualquier variante razonable y la deja consistente."*

> **Dónde quedamos en el CRUD:**
> *"Hoy construimos la **C** y la **R**: Crear plantillas (agregar al estado) y Leer (mostrarlas con render). **Actualizar** y **Borrar** —editar y eliminar— son la próxima clase, C14, sobre este mismo estado y este mismo render."*

> **Logros adicionales (opcionales — si sobra tiempo o para casa):**
> - 🟢 **Contador de caracteres:** mostrar **_p.mensaje.length_** en cada tarjeta (útil para WhatsApp).
> - 🟡 **Recortar en la tarjeta:** si el mensaje es muy largo, mostrarlo recortado con **_.slice()_** (ej. **_texto.slice(0, 60) + "…"_**) para que la rejilla quede pareja.
> - 🔴 **Más variables:** soportar **_{nombre}_** y **_{producto}_** encadenando **_.replaceAll()_**.

> **Cierre + puente al resto del M4:**
> *"Hoy montamos la base de toda app que maneja datos: un modelo con forma, un estado que es la verdad, una pantalla que se deriva de él, y las herramientas para limpiar y transformar texto. Una sola cosa queda pendiente, y es a propósito: si recargan la página, se pierde todo —porque vive en memoria—. La próxima clase agregamos editar y borrar (la U y la D del CRUD); y en C15 hacemos que todo SOBREVIVA a la recarga con `localStorage`. El módulo recién empieza, y ya tienen la base sobre la que se construye el resto."*
