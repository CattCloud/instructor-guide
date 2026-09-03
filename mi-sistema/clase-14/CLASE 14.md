# CLASE 14 — Interacción y Datos Derivados (Módulo 4)

> **Curso:** Code 201 · **Módulo 4** — Clase 2 de 4
> **Proyecto víctima:** **Gestor de Plantillas para WhatsApp** (repo **_whatsapp-templates_**, rama **_lab14-interaccion_**) — la MISMA app de C13. Hoy **se completa el CRUD** (editar + eliminar) y la app se vuelve interactiva.
> **NO es lab calificado** (el calificado del M4 es C16) · **no consume API** (todo local con Live Server).
> **Fuente de inputs:** **_code201/class-14/README.md_** + **_lab/README.md_**.
> **Continuidad:** se reusa de C13 la clase **_Template_**, el estado, **_render()_**, **_normalizarHashtag_** y los métodos de String. Hoy al **_Template_** se le suma **_this.id = crypto.randomUUID()_** (un id de texto único).
> **Conceptos NUEVOS (no estuvieron en C13):** inmutabilidad + spread operator (`...`).
> **Sin persistencia HOY:** todo vive en memoria; `localStorage` llega en **C15**.
> **Duración:** 3h reales · se prepara para 2h30 (≈140 min de momentos) · colchón ~30 min · receso 10 min entre M2 y M3.

---

## Idea fuerza de la clase

**De "leer y agregar" a una app interactiva completa — y el día en que el alumno aprende a cambiar el estado SIN romperlo.** Tres movimientos: (1) hacer la app **interactiva** con **delegación de eventos** —un solo listener en el contenedor que atiende los clics de N tarjetas—; (2) completar el **CRUD** —eliminar y editar— **de forma inmutable**: en vez de modificar el array/objeto que ya existe, se genera uno nuevo con el cambio (concepto nuevo del día, con `.filter`, `.map` y el spread `...`); (3) tratar buena parte de la UI como **datos derivados** —total, conteo por hashtag, lista filtrada y ordenada— que NO se guardan: se recalculan en cada `render()`. Tesis que atraviesa todo: **la UI entera es una función del estado, y el estado se actualiza generando uno nuevo, nunca mutando el viejo.**

> **Concepto pedagógico clave (las 2 tesis):** (1) **inmutabilidad** — se actualiza el estado generando uno nuevo (editar `map`+spread, borrar `filter`, ordenar `[...]`); el `agregar` de C13 sigue con `.push` y no se refactoriza hoy. (2) **datos derivados** — total, conteos, lista visible NO se guardan; se calculan del estado en cada `render()`.

---

## Tabla de tiempos (preparado para 2h 30min)

| Momento    | Tema                                                                | Parte del lab            | Tiempo  |
| ---------- | ------------------------------------------------------------------- | ------------------------ | ------- |
| **M1**     | Apertura + **delegación de eventos** (a fondo) + eliminar             | HU1 (CP1 ~30)            | ~35 min |
| **M2**     | Editar en su lugar — **inmutabilidad + spread** (`find`/`map`/`...`)     | HU2 (CP2 ~55)            | ~30 min |
| **RECESO** | —                                                                   | —                        | 10 min  |
| **M3**     | **Datos derivados** con función pura (`reduce`)                        | HU3 (CP3 ~80)            | ~30 min |
| **M4**     | Filtrar por hashtag (la lista es derivada)                           | HU4 (CP4 ~100)           | ~20 min |
| **M5**     | Ordenar con **`.sort()` + comparador** + cierre                        | HU5 (CP5 ~115) + Cierre  | ~25 min |

> Total: ~140 min de momentos + 10 de receso. El colchón (~30 min) absorbe el trabajo autónomo de cada Checkpoint (CP1 ~30', CP2 ~55', CP3 ~80', CP4 ~100', CP5 ~115' de reloj de lab) y el setup inicial (rama + id).
>
> **Mapa de temas → momentos:** id (`crypto.randomUUID()`) + delegación de eventos + eliminar con `.filter` (M1) · editar con `.find`/`.map`/spread + inmutabilidad (M2) · función pura + datos derivados + `.reduce` (M3) · filtrar (`plantillasVisibles`, `state.filtro`) (M4) · `.sort()` + comparador (`localeCompare`/`new Date`) + copiar con `[...]` (M5).

---

## Cadena Problema → Solución de la clase

```
M1: "tengo la lista, pero no puedo quitar una plantilla que ya no uso; y si pongo un botón por
     tarjeta, ¿cómo escucho todos los clics si las tarjetas se recrean en cada render?"
     → delegación de eventos (1 listener en el contenedor) + eliminar con .filter, sin mutar (HU1)
     ↓ (ya puedo borrar… pero para corregir una plantilla tengo que borrarla y crearla de nuevo)
M2: "quiero editar una plantilla en su lugar, sin duplicarla"
     → cargar al form (find) + actualizar con map + spread; el submit decide crear vs actualizar (HU2)
     ↓ (ya hago CRUD completo… pero no tengo idea de cuántas plantillas tengo ni cómo se reparten)
M3: "quiero ver de un vistazo el total y cuántas hay por hashtag"
     → datos derivados con una función pura: contarPorHashtag con reduce, panel que se recalcula (HU3)
     ↓ (con muchas plantillas, encontrar UNA es tedioso)
M4: "quiero filtrar por hashtag y que la lista reaccione al instante"
     → el filtro vive en el estado; render recorre plantillasVisibles() en vez del estado crudo (HU4)
     ↓ (ya filtro… pero el orden es el de creación; quiero elegir cómo se ven)
M5: "quiero ordenarlas: las más recientes primero, o alfabético"
     → .sort() con comparador (localeCompare / new Date), copiando con [...] porque sort muta (HU5)
     ↓ (todo anda… pero si recargo, se pierde TODO)
M5 (cierre): "una app real recuerda" → puente a C15 (localStorage) y a C16 (lab calificado del módulo)
```

---

## MOMENTO 1 — Apertura + delegación de eventos + eliminar (HU1)

**Tiempo:** ~35 min
**Parte del lab:** Setup Inicial + HU1 (Checkpoint 1 ~30 min)

> **OBJETIVO:** El alumno retoma el proyecto de C13 (crea la rama **_lab14-interaccion_**) y siente el problema: quiere eliminar una tarjeta, pero las tarjetas se crean y destruyen en cada `render()` —un listener por botón no escala—. Aprende **delegación de eventos a fondo** —cómo un evento se **propaga por el árbol DOM** (bubbling) y por qué por eso un listener en el padre atiende los clics de los hijos, la sintaxis y cada uno de sus elementos— y lo fija con un **code-along de un ejemplo distinto al lab**. Ya en HU1, le da a cada plantilla un **id único** (explicado ahí, porque es lo que el botón usa para saber sobre cuál actuar) y elimina con **_.filter_** (primer contacto con "no mutar"). Cierra comprobando que solo la plantilla elegida desaparece.

> **Patrón pedagógico de M1:** **apertura/recap → problema → concepto (delegación, a fondo) → lab.** Reusa de C13 el estado, `render()` y el DOM/eventos del M3. **Ya no hay setup aparte:** lo único previo es crear la rama; el `id` se agrega DENTRO de HU1, donde se explica su porqué. La **delegación de eventos** se enseña en detalle —propagación en el árbol DOM (bubbling, con una imagen de apoyo), la sintaxis y cada elemento— y se fija con un **code-along de un ejemplo distinto al lab** para entender la mecánica antes de aplicarla. La HU1 se presenta **paso a paso, cada uno con su código y su porqué** (no plan y código por separado). El `.filter` del eliminar es el primer contacto con "no mutar"; el concepto completo es M2.

---

#### 1.1 Apertura — C14 completa el CRUD

**EN PANTALLA: NAVEGADOR (Live Server) — la app de C13 corriendo: el formulario y la lista de plantillas ya funcionando.**

> **Tu apertura:**
> *"La clase pasada montamos el gestor de plantillas: podemos crear una plantilla y verla en la lista. Hoy la app se vuelve interactiva DE VERDAD: vamos a **eliminar** y **editar** plantillas, y a calcular datos del estado —cuántas tengo, cuántas por hashtag—. Es la clase donde se completa el CRUD."*

> **Tu recap de C13 (rápido, con preguntas al grupo — no re-explicar):**
> *"Repasemos lo que dejamos andando, porque sobre eso construimos:"*
> - *"El **estado** — **_state = { plantillas: [] }_** — ¿qué era? La única fuente de verdad: los datos de la app."*
> - *"El patrón **_render()_** — ¿qué hacía en tres pasos? Limpiar, recorrer el estado, crear un nodo por plantilla."*
> - *"Y la regla de oro: **cambias el estado → llamas `render()`**. Hoy la vamos a usar en cada operación nueva."*

> **Tu explicación teórica precisa (dónde estamos en el CRUD):**
> *"En C13 nombramos el **CRUD** — Crear, Leer, Actualizar, Borrar. Construimos las dos primeras: **Crear** (agregar) y **Leer** (render). Hoy cerramos las otras dos: **Borrar** (eliminar) y **Actualizar** (editar). Al terminar la clase, la app hace el CRUD completo."*
> - *"Y una nota que repetimos: todo sigue viviendo en memoria. Si recargan, se pierde. Eso lo resolvemos en C15 con `localStorage`. Hoy, interacción."*

> **Antes de arrancar (único setup):**
> *"Creamos la rama de trabajo —**_git checkout -b lab14-interaccion_**— y listo. No hay más setup: el resto lo armamos dentro de cada Historia de Usuario, empezando por darle un `id` a las plantillas en la HU1."*

---

#### 1.2 El problema: ¿un listener por cada botón?

**EN PANTALLA: VS CODE / NAVEGADOR — la lista con (imaginariamente) un botón "Eliminar" en cada tarjeta.**

> **Tu apertura (gancho, desde la reflexión previa):**
> *"Para eliminar, cada tarjeta va a tener su botón 'Eliminar'. La pregunta de diseño: si tuviera 500 plantillas, ¿pondría 500 'escuchadores' de clic, uno pegado a cada botón?"*

> **Pregunta de activación:**
> *"Y hay un problema peor que la cantidad. Acuérdense de qué hace **_render()_**: limpia la lista y RECREA todas las tarjetas de cero. Si yo enganché un listener a cada botón… ¿qué pasa con esos listeners la próxima vez que llamo `render()`?"*
> *(Respuesta guía: se pierden — los botones viejos ya no existen, son nodos nuevos. Habría que volver a enganchar TODOS los listeners en cada render. Insostenible y frágil.)*

> **Tu cierre del problema (puente al concepto):**
> *"Entonces necesitamos algo que NO dependa de los botones individuales —que sobreviva a que las tarjetas se creen y destruyan—. La solución tiene nombre: **delegación de eventos**. Un solo listener, en un lugar que no se borra."*

---

#### 1.3 Delegación de eventos (concepto)

**EN PANTALLA: EXCALIDRAW — imagen de la propagación (bubbling): el árbol DOM `<ul> → <li> → <button>`, con una flecha que sube desde el `<button>` clickeado hasta el `<ul>` que escucha. (Imagen de apoyo — ver Guía Excalidraw.)**

> **Tu apertura:**
> *"La solución al problema tiene nombre: **delegación de eventos**. Es poner **UN solo listener** en el contenedor padre —no uno por hijo— y decidir qué hacer según DÓNDE se hizo clic. Para entender por qué esto funciona, primero hay que ver cómo viaja un clic por la página."*

> **Tu explicación teórica precisa (1 — cómo se propaga un evento en el árbol DOM):**
> El HTML es un **árbol**: el `<ul>` contiene `<li>`, y cada `<li>` contiene un `<button>`. Cuando el usuario hace clic en el `<button>` —el elemento más profundo—, el evento **NO se queda ahí**: **"burbujea" hacia arriba** por sus ancestros, uno por uno — `button → li → ul → body → …` —. A esto se le llama **propagación** o **bubbling**.
> - *"La consecuencia es la clave del día: como el clic SUBE por el árbol, un listener puesto en el `<ul>` (el padre) SE ENTERA de un clic que ocurrió en un `<button>` (un hijo, varios niveles abajo). **Actuamos en el hijo, pero escuchamos en el padre** — y eso es exactamente lo que hace posible la delegación. (Lo vemos en la imagen: la flecha del clic sube desde el botón hasta el `<ul>`.)"*
> - *"Y por qué nos conviene: el `<ul>` NO se destruye cuando `render()` recrea las tarjetas —solo se vacía por dentro—. Así, el listener del padre sigue vivo aunque los botones hijos aparezcan y desaparezcan mil veces. Un solo oído en el padre escucha a todos los hijos, presentes y futuros."*

> **Tu explicación teórica precisa (2 — la sintaxis y sus elementos):**
> Un solo `addEventListener("click", …)` en el contenedor. Adentro, el objeto **_evento_** trae la información del clic, y usamos tres piezas para responder "¿dónde y sobre qué se hizo clic?":
> ```javascript
> /* Sintaxis general */
> contenedor.addEventListener("click", function (evento) {
>   evento.target                                 // (1) el elemento EXACTO donde nació el clic
>   evento.target.classList.contains("una-clase") // (2) ¿ese elemento tiene esa clase? -> true / false
>   evento.target.dataset.id                       // (3) lee su atributo data-id (SIEMPRE como texto)
> });
> ```
> - **(1) `evento.target`** — el elemento más profundo donde se originó el clic (el `<button>`, no el `<ul>`). *No confundir con `evento.currentTarget`, que es donde está PUESTO el listener (el `<ul>`).* `target` = dónde se hizo clic; `currentTarget` = quién escucha.
> - **(2) `classList.contains("clase")`** — devuelve `true`/`false` según si ese elemento tiene la clase. Es lo que nos deja **distinguir** en cuál de los varios hijos se hizo clic: el botón eliminar, el editar, o el texto de la tarjeta.
> - **(3) `dataset.id`** — lee el atributo **_data-id="..."_** del elemento clickeado. Los `data-*` son atributos HTML para guardar datos propios de la app; se leen con `.dataset.*`, y **siempre devuelven texto**. Como en este proyecto el id de la plantilla también es un texto (un UUID), lo usamos tal cual — solo haría falta convertirlo con **_Number(...)_** si el id fuera numérico.

> **Code-along — un ejemplo distinto al lab (para entender la mecánica):**
> *(Un demo aislado, NO el proyecto de plantillas — una listita de tareas de prueba. Se escribe en vivo y se abre la consola.)*
> ```html
> <ul id="demo">
>   <li>Tarea A <button class="borrar" data-id="1">x</button></li>
>   <li>Tarea B <button class="borrar" data-id="2">x</button></li>
>   <li>Tarea C <button class="borrar" data-id="3">x</button></li>
> </ul>
> ```
> ```javascript
> const ul = document.getElementById("demo");
> ul.addEventListener("click", function (evento) {          // UN solo listener, en el padre
>   console.log("Hiciste clic en:", evento.target);         // ver QUÉ elemento fue
>   if (evento.target.classList.contains("borrar")) {
>     console.log("Borrar la tarea", evento.target.dataset.id);
>   }
> });
> ```
> **Qué mostrar en vivo:**
> - *"Clic en un botón **x** → `evento.target` es ese `<button>`; entra el `if` y muestra su id. Clic en el TEXTO de la tarea → `evento.target` es el `<li>`/texto, NO tiene la clase `borrar`, así que el `if` da `false` y no pasa nada."*
> - *"Un solo listener en el `<ul>` atiende los clics de los tres botones — y de los que agregue después. Eso es delegar: el padre escucha por todos. Ahora lo llevamos al lab, a las plantillas de verdad."*

---

#### 1.4 HU1 — eliminar con delegación de eventos (lab)

**EN PANTALLA: VS CODE — `js/models/Template.js` y `js/app.js` (el `render()` de C13).**

> **Tu apertura:**
> *"Primera Historia de Usuario. Leemos los criterios y la construimos **paso a paso**: cada paso lo escribimos y explicamos por qué, en orden — nada de tirar todo el código junto."*

> **Criterios de aceptación de HU1 (la Definición de Terminado):**
> - Cada plantilla muestra un **botón eliminar**.
> - Al pulsarlo, **esa** plantilla desaparece y **las demás permanecen**.
> - La lista en pantalla sigue reflejando exactamente el estado.

---

> **Paso 1 · Darle un `id` único a cada plantilla**
> *Para eliminar ESTA plantilla y no otra, el botón necesita saber a cuál pertenece. Eso exige que cada plantilla tenga un identificador propio — por eso es lo primero.*
> ```javascript
> // js/models/Template.js
> class Template {
>   constructor(titulo, mensaje, hashtag) {
>     this.id = crypto.randomUUID();   // ← id unico (un texto)
>     this.titulo = titulo;
>     this.mensaje = mensaje;
>     this.hashtag = hashtag;
>     this.fecha = new Date();
>   }
> }
> ```
> **Por qué:** **_crypto.randomUUID()_** genera un **identificador único garantizado** — un texto largo (un UUID, tipo `"a1b2c3d4-..."`) distinto en cada llamada. Es más robusto que un id basado en el tiempo, que podría repetirse si dos plantillas se crean en el mismo instante. Ese id va a viajar al botón como `data-id` y volver para decirnos sobre qué plantilla actuar. *(Es una función del navegador; funciona en https o localhost — con Live Server, sin problema.)*

---

> **Paso 2 · Ponerle a cada tarjeta un botón eliminar (con el `data-id`)**
> *Cada `<li>` que dibuja el `render()` necesita su botón, y el botón tiene que llevar pegado el id de su plantilla.*
> ```javascript
> // dentro del innerHTML de cada <li>, en render():
> `<button class="btn-eliminar text-red-600 text-xs" data-id="${plantilla.id}">Eliminar</button>`
> ```
> **Por qué:** el atributo **_data-id="${plantilla.id}"_** "pega" el id de la plantilla al botón. Así, al hacer clic, podremos leer de ese botón sobre cuál plantilla actuar. *(Convención del proyecto: el botón eliminar es `class="btn-eliminar"`; en HU2 se suma `btn-editar`, ambos con `data-id`.)*

---

> **Paso 3 · Un solo listener en la lista (delegación)**
> *No enganchamos un listener por botón: ponemos UNO en el `<ul>` —que no se destruye al renderizar— y, al clic, distinguimos si fue en un botón eliminar y sobre qué plantilla.*
> ```javascript
> // UN listener en la lista, fuera de render():
> lista.addEventListener("click", function (evento) {
>   if (evento.target.classList.contains("btn-eliminar")) {   // ¿fue un boton eliminar?
>     const id = evento.target.dataset.id;                    // lee el data-id (ya es texto)
>     eliminarPlantilla(id);
>   }
> });
> ```
> **Por qué:** es la delegación que vimos recién. El listener vive en **_lista_** (el `<ul>`), que sobrevive a los re-render; **_classList.contains("btn-eliminar")_** filtra que el clic haya sido justo en un botón eliminar (no en el texto); y **_evento.target.dataset.id_** lee el `data-id` — que ya es un texto, igual que nuestro id (UUID), así que se compara tal cual, sin convertir.

---

> **Paso 4 · Eliminar del estado SIN mutar (`.filter`)**
> *Con el id en la mano, sacamos esa plantilla del estado — de forma que queden todas menos esa— y redibujamos.*
> ```javascript
> function eliminarPlantilla(id) {
>   state.plantillas = state.plantillas.filter(plantilla => plantilla.id !== id);  // todas menos esa
>   render();
> }
> ```
> **Por qué:** **_.filter_** recorre el array y devuelve uno **NUEVO** con las que cumplen `id !== id` —o sea, todas menos la eliminada— **sin tocar el original**. Ese "crear uno nuevo en vez de modificar el existente" es el **primer 'no mutar' del día**; le ponemos nombre completo (inmutabilidad) en el próximo momento. Y al final `render()`: cambió el estado → redibujamos, y la tarjeta desaparece sola.

---

> **Checkpoint 1 (~30 min):** *Agregar 3 plantillas y pulsar "Eliminar" en la del medio. Solo esa desaparece; las otras dos quedan intactas. La lista sigue reflejando exactamente el estado. HU1 terminada.*

> **Cierre del Momento + puente al siguiente:**
> *"Ya podemos **Borrar** —la D del CRUD— con un solo listener y sin mutar el estado. Pero noten algo: si me equivoqué en el texto de una plantilla, hoy la única forma de 'arreglarla' sería borrarla y crearla de nuevo. Absurdo. El próximo paso es **editar en su lugar** —la A del CRUD—: cargar la plantilla al formulario, cambiarla, y actualizarla sin duplicarla. Y ahí le ponemos por fin nombre a lo que venimos haciendo con `filter`: la **inmutabilidad**."*

---

## MOMENTO 2 — Editar en su lugar: inmutabilidad + spread (HU2)

**Tiempo:** ~30 min
**Parte del lab:** HU2 (Checkpoint 2 ~55 min)

> **OBJETIVO:** El alumno aprende **primero** el **spread operator** (`...`) —copiar y extender arrays y objetos— con su propio code-along, y **después** la **inmutabilidad**: qué es (actualizar generando uno nuevo, no mutando el viejo), por qué se usa el spread para lograrla, cómo se ve frente a la forma que SÍ muta, y por qué importa. Lo aplica editando una plantilla **en su lugar**: `.find` para localizar, `state.editandoId` como interruptor, y `.map` + spread en el `submit` (que se amplía respecto al de C13 para decidir crear vs actualizar). Cierra comprobando que la plantilla se actualiza sin duplicarse.

> **Patrón pedagógico de M2:** **problema → concepto 1 (spread operator) → concepto 2 (inmutabilidad) → lab.** Los dos conceptos van **SEPARADOS**: primero el **spread** bien explicado con su code-along propio (la herramienta), y recién después la **inmutabilidad** (qué es, por qué se usa el spread, cómo se ve vs cómo muta si se hace de otra forma, por qué importa). Ambos son nuevos hoy. Después, HU2 los aplica: `.find`, `state.editandoId`, y `.map` + spread en el `submit`. El listener de M1 NO se reescribe — se le agrega un `if`.

---

#### 2.1 El problema: corregir sin borrar y recrear

**EN PANTALLA: NAVEGADOR — una plantilla con un typo en el mensaje (ej. "Hloa {nombre}").**

> **Tu apertura (gancho):**
> *"Miren esta plantilla: dice 'Hloa' en vez de 'Hola'. Con lo que tenemos hoy, ¿cómo la arreglo? Tendría que ELIMINARLA y volver a crearla desde cero, escribiendo todo de nuevo. Para un typo. Absurdo."*

> **Pregunta de activación:**
> *"Lo que quiero es EDITARLA en su lugar: que sus datos vuelvan al formulario, los corrijo, guardo, y la misma plantilla se actualiza — sin que aparezca una copia nueva. ¿Qué necesita 'recordar' el programa para saber que estoy corrigiendo la N°X y no creando una nueva?"*
> *(Respuesta guía: necesita recordar CUÁL plantilla estoy editando —su id—. Ese pequeño dato es lo que convierte 'crear' en 'actualizar'. Y para actualizar sin romper el estado, entra el concepto del día.)*

---

#### 2.2 Spread operator (`...`) — la herramienta (concepto + code-along)

**EN PANTALLA: VS CODE / consola — copiar y extender arrays y objetos en vivo (demo aislada, todavía sin el proyecto).**

> **Tu apertura:**
> *"Antes de editar necesitamos una herramienta nueva: el **spread operator**, esos tres puntitos `...`. Lo vemos SOLO primero, porque es la pieza que después hace posible todo lo demás."*

> **Tu explicación teórica precisa:**
> El **spread operator** (**_..._**) "desparrama" los elementos de un array o las propiedades de un objeto **dentro de otro nuevo**. Sirve para dos cosas: **copiar** (una estructura nueva con el mismo contenido) y **extender** (copiar y de paso agregar o sobreescribir). Siempre produce una estructura **nueva** — no toca la original.
> ```javascript
> /* Sintaxis general */
> [ ...<array> ]                          // copia un array
> [ ...<array>, <nuevo> ]                 // copia y agrega al final
> { ...<objeto> }                         // copia un objeto
> { ...<objeto>, <campo>: <nuevoValor> }  // copia y sobreescribe ese campo
> ```

> **Code-along del spread (en consola — todavía sin el proyecto):**
> ```javascript
> // Con arrays:
> const nums = [1, 2, 3];
> const masNums = [...nums, 4];         // [1, 2, 3, 4]   (copia + agrega)
> // nums sigue [1, 2, 3]               (intacto)
>
> // Con objetos:
> const persona = { nombre: "Ana", edad: 30 };
> const copia = { ...persona };            // { nombre: "Ana", edad: 30 }   (copia)
> const mayor = { ...persona, edad: 31 };  // { nombre: "Ana", edad: 31 }   (copia + sobreescribe edad)
> // persona sigue { nombre: "Ana", edad: 30 }   (intacto)
> ```
> - *"**_[...nums, 4]_** arma un array NUEVO con todo lo de `nums` más el 4. Y **_{ ...persona, edad: 31 }_** arma un objeto NUEVO con todo lo de `persona`, pero pisando `edad`. El orden importa: lo que va DESPUÉS del spread gana."*
> - *"Lo que NO cambia nunca: el original. `nums` y `persona` quedan intactos — el spread siempre produce algo nuevo. Guarden ese detalle, porque es justo lo que usamos ahora."*

---

#### 2.3 Inmutabilidad — qué es y por qué (CONCEPTO CLAVE del día)

**EN PANTALLA: EXCALIDRAW — "mutar vs no-mutar": a un lado un objeto que se tacha y reescribe encima (mutar); al otro, una copia nueva con el cambio y el original intacto (no-mutar).**

> **Tu apertura:**
> *"Con el spread en la mano, ahora sí el concepto clave del día — y le ponemos nombre a algo que ya hicimos con `filter` en el momento anterior. Se llama **inmutabilidad**."*

> **Tu explicación teórica precisa — el Principio de Inmutabilidad:**
> El principio establece lo siguiente: **el estado de la aplicación debe tratarse como un objeto INMUTABLE** — no se modifica directamente. Lo que propone es trabajar con **nuevas versiones del estado**: en lugar de cambiar el estado existente, cada vez que hay un cambio se **crea una versión nueva** del estado (con el cambio aplicado) y se reemplaza por ella.
> - *"Y ahí es donde entra el spread: es la herramienta con la que fabricamos esa versión nueva. Por eso lo vimos primero — el spread es el CÓMO del principio."*

> **Cómo se ve — la MISMA operación, con y sin mutar:**
> ```javascript
> // Agregar al array:
> lista.push(x);                      // MUTA: modifica el array que ya existe
> lista = [...lista, x];              // NO MUTA: crea uno nuevo con el elemento agregado
>
> // Cambiar una propiedad:
> obj.titulo = "nuevo";               // MUTA: modifica el objeto que ya existe
> obj = { ...obj, titulo: "nuevo" };  // NO MUTA: crea un objeto nuevo con el cambio
> ```
> - *"En pantalla el resultado se ve igual. La diferencia es que la fila de arriba TOCA el original, y la de abajo crea uno nuevo y deja el original intacto. Con **_push_** o **_obj.prop = x_** mutás; con **spread** (o `filter`, o `map`) no."*

> **Demo en consola (la misma edición, mutando vs sin mutar):**
> ```javascript
> const original = { titulo: "Saludo", hashtag: "#ventas" };
> // Forma que MUTA:
> // original.titulo = "Hola";        // ahora 'original' quedo cambiado (perdimos el anterior)
> // Forma que NO muta:
> const copia = { ...original, titulo: "Hola" };
> // copia    -> { titulo: "Hola",   hashtag: "#ventas" }   (nuevo, con el cambio)
> // original -> { titulo: "Saludo", hashtag: "#ventas" }   (intacto)
> ```

> **Tu explicación — por qué este principio:**
> *"Una sola razón, y es la que importa: hace que el estado sea **predecible**. Como nunca se modifica 'por detrás' —cada cambio es una versión nueva y explícita que vos creás y reemplazás—, en todo momento sabés cuál es el estado actual y en qué se diferencia del anterior: son dos versiones distintas, que podés comparar. Si en cambio mutaras el original, el 'antes' y el 'después' serían el MISMO objeto pisado — no habría forma de saber qué cambió ni cuándo, y el estado dejaría de ser una fuente de verdad confiable."*

> **Tu analogía (corta):**
> *"Mutar es tachar y escribir encima del documento original — queda sucio y quien tenía el original ya no lo reconoce. No-mutar es sacar una fotocopia, corregir la copia, y quedarse con la copia como versión nueva. El original queda intacto por si hay que comparar."*

---

#### 2.4 HU2 — editar en su lugar (lab)

**EN PANTALLA: VS CODE — `js/app.js`: el `render()`, el listener de M1 y el `submit` de C13.**

> **Tu apertura:**
> *"Segunda Historia de Usuario. Con la inmutabilidad clara, editamos — paso a paso, cada uno con su código y su porqué. Leemos los criterios."*

> **Criterios de aceptación de HU2 (la Definición de Terminado):**
> - Cada plantilla muestra un **botón editar**.
> - Al pulsarlo, sus datos **se cargan en el formulario**.
> - Al guardar, la plantilla **se actualiza en su lugar** (no se crea una nueva) y la lista muestra el cambio.

---

> **Paso 1 · Botón editar en cada tarjeta (con `data-id`)**
> *Igual que el de eliminar: cada `<li>` suma un botón editar que lleva el id de su plantilla.*
> ```javascript
> // en el innerHTML de cada <li>, junto al de eliminar:
> `<button class="btn-editar text-blue-600 text-xs" data-id="${plantilla.id}">Editar</button>`
> ```
> **Por qué:** el `data-id` pega el id de la plantilla al botón; al hacer clic vamos a saber cuál cargar. Mismo patrón que el botón eliminar de HU1.

---

> **Paso 2 · Ampliar el MISMO listener (no crear otro)**
> *No hacemos un listener nuevo: al de la lista le sumamos un `if` para el caso editar.*
> ```javascript
> lista.addEventListener("click", function (evento) {
>   const id = evento.target.dataset.id;
>   if (evento.target.classList.contains("btn-eliminar")) eliminarPlantilla(id);
>   if (evento.target.classList.contains("btn-editar"))   cargarEnFormulario(id);
> });
> ```
> **Por qué:** es la delegación de siempre — un solo listener en el `<ul>` atiende los dos botones. **_classList.contains_** distingue cuál se clickeó, y el `id` se lee una sola vez arriba. Agregar features = agregar un `if`, no un listener nuevo.

---

> **Paso 3 · Cargar la plantilla al formulario y recordar que se edita**
> *Al clic en editar, traemos los datos de esa plantilla al formulario y anotamos que estamos editando.*
> ```javascript
> function cargarEnFormulario(id) {
>   const plantilla = state.plantillas.find(plantilla => plantilla.id === id);
>   titulo.value  = plantilla.titulo;
>   mensaje.value = plantilla.mensaje;
>   hashtag.value = plantilla.hashtag;
>   state.editandoId = id;          // interruptor: estoy editando, no creando
> }
> ```
> **Por qué:** **_.find_** localiza la plantilla por id (devuelve el primer match); copiamos sus campos a los inputs para que el usuario los corrija; y **_state.editandoId = id_** es el interruptor "estoy editando la N°X" — sin él, el `submit` no sabría distinguir editar de crear.

---

> **Paso 4 · Al guardar, decidir actualizar o crear — sin mutar**
> *El mismo `submit` de C13 ahora bifurca: si hay `editandoId`, actualiza esa plantilla; si no, crea una nueva.*
> ```javascript
> // en el submit (el de C13, con su trim y validacion):
> if (state.editandoId) {
>   state.plantillas = state.plantillas.map(plantilla =>
>     plantilla.id === state.editandoId
>       ? { ...plantilla, titulo: tituloTexto, mensaje: mensajeTexto, hashtag: normalizarHashtag(hashtag.value) }
>       : plantilla
>   );
>   state.editandoId = null;
> } else {
>   agregarPlantilla(tituloTexto, mensajeTexto, normalizarHashtag(hashtag.value));
> }
> render();
> form.reset();
> ```
> **Por qué:** **_.map_** recorre TODAS y devuelve un array del mismo largo; a la editada le devuelve **_{ ...plantilla, cambios }_** —objeto NUEVO con los campos sobreescritos (el spread de 2.2, aplicado)—, a las demás tal cual. Nunca toca el objeto viejo: es actualizar **sin mutar**, cumpliendo el principio. **_editandoId = null_** vuelve al modo crear; sin ese interruptor, cada guardado duplicaría la plantilla. *(El `submit` conserva el `trim`/validación de C13; `tituloTexto`/`mensajeTexto` son los valores ya limpios.)*

> **Checkpoint 2 (~55 min):** *Pulsar "Editar" en una plantilla, cambiar el mensaje y guardar. Se actualiza en su sitio; NO aparece una copia nueva. La lista muestra el cambio. HU2 terminada — el CRUD está completo (Crear, Leer, Actualizar, Borrar).*

> **Cierre del Momento + puente al receso:**
> *"Con esto el **CRUD está completo**: creamos, leemos, actualizamos y borramos — y las operaciones nuevas, sin mutar el estado. Después del receso la app da un salto distinto: en vez de solo guardar y modificar datos, va a **calcular** datos a partir del estado —cuántas plantillas tengo, cuántas por hashtag— sin guardarlos. Eso son los datos derivados. Receso de 10 minutos."*

---

## RECESO — 10 min

*(Punto medio del lab: CRUD completo (HU1 + HU2). Después del receso, la app deja de solo guardar/modificar y empieza a CALCULAR: datos derivados, filtro y orden.)*

---

## MOMENTO 3 — Datos derivados con función pura (HU3)

**Tiempo:** ~30 min
**Parte del lab:** HU3 (Checkpoint 3 ~80 min)

> **OBJETIVO:** El alumno construye el panel de estadísticas —total y conteo por hashtag— entendiendo que son **datos derivados**: se CALCULAN del estado, no se guardan, y se recalculan en cada `render()`. Los calcula con una **función pura** (**_contarPorHashtag_** con `.reduce`) —recibe la lista, devuelve el conteo, no toca nada; las funciones puras ya se vieron en el M2, acá solo se aplican—. Todo paso a paso, cada uno con su código y su porqué. Cierra viendo los números actualizarse solos al agregar/editar/eliminar.

> **Patrón pedagógico de M3:** **problema → lab (paso a paso, con los conceptos integrados donde surgen).** **No hay sub-punto de concepto aparte:** la **función pura** ya se vio en el M2 —se nombra brevemente al escribir `contarPorHashtag`— y **datos derivados** es la tesis, que se ancla al llamar el cálculo dentro de `render()`. **_.reduce_** se reactiva del M2; lo nuevo es acumular un OBJETO de conteos y que el cálculo viva dentro de `render()` para no quedar viejo. La HU3 sigue el formato paso → código → porqué.

---

#### 3.1 El problema: ¿cuántas tengo y cómo se reparten?

**EN PANTALLA: NAVEGADOR — la lista con varias plantillas y hashtags repetidos, sin ningún resumen arriba.**

> **Tu apertura (gancho, desde la reflexión previa):**
> *"Mi colección crece. Quiero ver de un vistazo: ¿cuántas plantillas tengo en total? ¿Cuántas hay de cada hashtag? Pero pensemos primero en una app que todos usan — el contador de mensajes no leídos de WhatsApp, ese numerito rojo. ¿Ese número se GUARDA en algún lado, o se CALCULA cada vez?"*

> **Pregunta de activación:**
> *(Dejar que respondan.)* *"Se calcula. Sale de contar los mensajes que todavía no abriste. Nadie guarda 'tengo 5 no leídos' en una caja — se cuenta de los datos que ya hay. Nuestro total y nuestro conteo por hashtag son lo mismo: no los vamos a GUARDAR en el estado; los vamos a CALCULAR de él."*

---

#### 3.2 HU3 — estadísticas: datos derivados con una función pura (lab)

**EN PANTALLA: VS CODE — `index.html` (el `<aside>`) y `js/app.js`.**

> **Tu apertura:**
> *"Tercera Historia de Usuario. Un apunte de enfoque antes de codear: el total y el conteo NO se guardan en el estado — son **datos derivados**, se CALCULAN del estado cada vez. Y para calcularlos usamos una **función pura**: recibe datos y devuelve un resultado sin tocar nada más — ya las vieron en el M2, así que acá solo la aplicamos. Lo armamos paso a paso."*

> **Criterios de aceptación de HU3 (la Definición de Terminado):**
> - Se muestra el **total** de plantillas.
> - Se muestra un **conteo por hashtag**.
> - Estos números **se actualizan solos** al agregar, editar o eliminar.

---

> **Paso 1 · Un lugar en pantalla para las stats**
> *Un contenedor encima de la lista donde van el total y los conteos.*
> ```html
> <!-- en index.html, encima de la lista: -->
> <aside id="panel-stats" class="mb-2 text-sm text-slate-600"></aside>
> ```
> **Por qué:** es la convención del proyecto; empieza vacío — lo llena el JS.

---

> **Paso 2 · Contar por hashtag con una función pura (`reduce`)**
> *Una función que recibe la lista y devuelve el conteo, sin tocar el estado.*
> ```javascript
> function contarPorHashtag(plantillas) {
>   return plantillas.reduce(function (conteo, plantilla) {
>     conteo[plantilla.hashtag] = (conteo[plantilla.hashtag] ?? 0) + 1;
>     return conteo;
>   }, {});   // acumulador inicial: objeto vacio
> }
> ```
> **Por qué:** **_contarPorHashtag_** es una **función pura** —entra la lista, sale un objeto de conteos, no modifica `state` ni el DOM; ya conocen las funciones puras del M2—. **_.reduce_** arranca con una bolsa vacía **_{}_** y por cada plantilla suma 1 a la casilla de su hashtag; el **_?? 0_** hace que un hashtag nuevo arranque en 0 (sin él, la primera suma sería `undefined + 1` = `NaN`).

---

> **Paso 3 · Dibujar el panel desde esa función**
> *Armar el texto del panel: el total y el detalle por hashtag.*
> ```javascript
> function renderStats() {
>   const total = state.plantillas.length;
>   const porTag = contarPorHashtag(state.plantillas);
>   const detalle = Object.entries(porTag)
>     .map(([hashtag, cantidad]) => `${hashtag}: ${cantidad}`)
>     .join(" · ");
>   document.getElementById("panel-stats").textContent = `Total: ${total}  |  ${detalle}`;
> }
> ```
> **Por qué:** el total es **_state.plantillas.length_**; **_Object.entries_** convierte el objeto de conteos **_{ '#ventas': 2 }_** en pares **_[['#ventas', 2]]_** para recorrerlos con `.map` (el `[hashtag, cantidad]` es destructuración de cada par) y unirlos con `.join(" · ")`.

---

> **Paso 4 · Mantener las stats al día — llamarla en `render()`**
> *Que se recalcule solo en cada cambio.*
> ```javascript
> // al final de render():
> renderStats();
> ```
> **Por qué:** acá se ve qué son los **datos derivados**. Como TODO cambio pasa por `render()`, y `render()` llama a `renderStats()`, el total y los conteos se **recalculan solos** en cada operación — nunca quedan viejos. No se guardan en el estado: se derivan de él. El estado guarda lo mínimo (la lista); todo lo demás sale de ahí.

> **Checkpoint 3 (~80 min):** *Agregar plantillas con hashtags repetidos (ej. dos `#ventas`) → el panel muestra `Total: 3 | #ventas: 2 · #soporte: 1`. Eliminar una → los números bajan solos, sin tocar el panel a mano. HU3 terminada.*

> **Cierre del Momento + puente al siguiente:**
> *"Ya tenemos números que se calculan solos del estado. Pero noten un detalle: la LISTA en pantalla sigue mostrando SIEMPRE todas las plantillas. Cuando tenga muchas, encontrar una va a ser tedioso. El próximo paso es filtrar por hashtag — y ahí vamos a descubrir que la lista que se muestra también es un dato derivado: no dibujamos el estado crudo, dibujamos lo que decidimos mostrar."*

---

## MOMENTO 4 — Filtrar por hashtag: la lista es derivada (HU4)

**Tiempo:** ~20 min
**Parte del lab:** HU4 (Checkpoint 4 ~100 min)

> **OBJETIVO:** El alumno entiende que la lista en pantalla también es un **dato derivado**: el `render()` deja de recorrer `state.plantillas` y pasa a recorrer una función **_plantillasVisibles()_** que aplica el filtro. El texto del filtro **vive en el estado** (`state.filtro`), y el filtrado ocurre al instante con el evento `input`. Cierra comprobando que escribir un hashtag deja solo las que coinciden, y borrar el texto las trae todas.

> **Patrón pedagógico de M4:** **problema → lab (paso a paso, con la idea integrada).** Momento corto. No hay concepto nuevo de sintaxis —reusa `.filter`/`.includes`/`.toLowerCase` de C13—; el aprendizaje es una **idea**, que se entrega DENTRO de la HU al escribir el cambio: **la lista que se muestra es un dato derivado**, igual que las stats. El `render()` deja de recorrer el estado crudo y pasa a recorrer `plantillasVisibles()`. El filtro **vive en el estado** (`state.filtro`), coherente con todo lo del día. La HU4 sigue el formato paso → código → porqué.

---

#### 4.1 El problema: encontrar una entre muchas

**EN PANTALLA: NAVEGADOR — una lista larga de plantillas con hashtags variados.**

> **Tu apertura (gancho):**
> *"La colección creció. Si quiero la plantilla de '#ventas' y tengo veinte, buscarla a ojo es tedioso. Quiero escribir un hashtag arriba y que la lista muestre SOLO las que coinciden — y que reaccione mientras escribo, letra por letra."*

> **Pregunta de activación:**
> *"Pregunta de diseño: cuando filtro, ¿estoy BORRANDO las que no coinciden del estado, o solo dejando de MOSTRARLAS?"*
> *(Respuesta guía: solo dejo de mostrarlas — el estado sigue completo. Lo que cambia es QUÉ dibujo, no qué guardo. La lista visible es un dato derivado del estado + el filtro.)*

---

#### 4.2 HU4 — filtrar por hashtag (lab)

**EN PANTALLA: VS CODE — `index.html` (el buscador) y `js/app.js` (el `render()`).**

> **Tu apertura:**
> *"Cuarta Historia de Usuario. Leemos los criterios y la armamos paso a paso."*

> **Criterios de aceptación de HU4 (la Definición de Terminado):**
> - Al escribir un hashtag en el buscador, la lista muestra **solo** las que coinciden.
> - Al borrar el texto, **vuelven todas**.
> - El filtrado ocurre **al instante** mientras se escribe.

---

> **Paso 1 · Un buscador donde escribir el filtro**
> *Un input encima de la lista.*
> ```html
> <!-- en index.html, encima de la lista: -->
> <input id="buscador" type="text" placeholder="Filtra por hashtag…"
>        class="max-w-md mx-auto block w-full p-2 mb-4 border border-slate-300 rounded">
> ```
> **Por qué:** es donde el usuario escribe el hashtag por el que quiere filtrar.

---

> **Paso 2 · Calcular QUÉ mostrar (`plantillasVisibles`)**
> *Una función que devuelve todas las plantillas, o solo las que coinciden con el filtro.*
> ```javascript
> function plantillasVisibles() {
>   const filtroTexto = (state.filtro ?? "").toLowerCase();
>   if (filtroTexto === "") return state.plantillas;
>   return state.plantillas.filter(p => p.hashtag.toLowerCase().includes(filtroTexto));
> }
> ```
> **Por qué:** reusa `.filter`/`.includes`/`.toLowerCase` de C13. Si el filtro está vacío, devuelve todas; si no, solo las que contienen el texto. Lee el filtro de **_state.filtro_** — o sea, del estado.

---

> **Paso 3 · Dibujar lo VISIBLE, no el estado crudo**
> *En `render()`, recorrer `plantillasVisibles()` en vez de `state.plantillas`.*
> ```javascript
> // en render(): plantillasVisibles().forEach(...)  en lugar de  state.plantillas.forEach(...)
> ```
> **Por qué:** es el cambio de UNA palabra en el `render()`. El render es el mismo; cambia QUÉ le damos para dibujar. Y acá la lista mostrada pasa a ser un **dato derivado** (estado + filtro), igual que las stats: no borramos nada del estado, solo dejamos de mostrar lo que no coincide.

---

> **Paso 4 · Conectar el buscador (el filtro vive en el estado)**
> *Guardar lo que se escribe en `state.filtro` y re-renderizar en cada tecla.*
> ```javascript
> document.getElementById("buscador").addEventListener("input", function (evento) {
>   state.filtro = evento.target.value;
>   render();
> });
> ```
> **Por qué:** el evento **_input_** dispara en cada tecla → filtrado al instante. El filtro es parte del **estado** (`state.filtro`), no una variable suelta, así que sigue la misma regla: cambia el estado → `render()`. *(Detalle: las **stats siguen contando el TOTAL real** —`state.plantillas`—, no lo filtrado. El filtro afecta lo que se MUESTRA, no lo que se guarda ni lo que se cuenta.)*

> **Checkpoint 4 (~100 min):** *Escribir `vent` en el buscador → quedan solo las `#ventas`; borrar el texto → vuelven todas. El total de las stats no cambia al filtrar. HU4 terminada.*

> **Cierre del Momento + puente al siguiente:**
> *"Ya filtro, y confirmamos que la lista mostrada es derivada. Pero el orden sigue siendo el de creación. Quiero elegir cómo se ven: las más recientes primero, o alfabético. Ese es el último paso — y trae un método nuevo, **_.sort()_**, que además nos va a obligar a recordar la inmutabilidad."*

---

## MOMENTO 5 — Ordenar con `.sort()` + comparador + cierre (HU5)

**Tiempo:** ~25 min
**Parte del lab:** HU5 (Checkpoint 5 ~115 min) + Cierre

> **OBJETIVO:** El alumno ordena la lista con **`.sort()` y un comparador** `(a, b)`: alfabético con **_localeCompare_** y por fecha con la resta de dos **_new Date(...)_** (recientes primero). Entiende que **`.sort()` muta** el array, y por eso copia con **_[...]_** antes (ata de vuelta con la inmutabilidad). El orden vive en `state.orden`, y se encadena **después** del filtro en el pipeline "qué mostrar". Cierra la clase con las 2 tesis, los logros opcionales y el puente a C15/C16.

> **Patrón pedagógico de M5:** **problema → concepto (`.sort()` + comparador, con code-along) → lab (paso a paso) → cierre.** El método nuevo (**_.sort()_**) se enseña en detalle —cómo funciona el comparador `(a,b)` y sus tres formas (número / texto / fecha)— con su propio code-along, ANTES del lab. **_.sort()_ muta**, así que ata de vuelta con la inmutabilidad (copiar con `[...]`). El orden se encadena DESPUÉS del filtro en `plantillasVisibles()`. La HU5 sigue el formato paso → código → porqué. El Momento cierra la clase: recap de las 2 tesis, CRUD completo, logros y puente. **C14 NO cierra módulo** — por eso hay cierre con recap y puente.

---

#### 5.1 El problema: el orden es el de creación

**EN PANTALLA: NAVEGADOR — la lista con las plantillas en el orden en que se crearon.**

> **Tu apertura (gancho):**
> *"Miren el orden de la lista: es el de creación, sin más. Quiero poder elegir cómo las veo — las más recientes arriba, o en orden alfabético por título — según lo que me convenga en el momento."*

---

#### 5.2 Método `.sort()` — ordenamiento de arrays (concepto + code-along)

**EN PANTALLA: VS CODE / consola — ordenar arrays en vivo (demo aislada, todavía sin el proyecto).**

> **Tu apertura:**
> *"El método nuevo es **_.sort()_**: organiza los elementos de un array según un criterio. Lo vemos solo primero, con ejemplos de prueba, antes de ordenar las plantillas."*

> **Tu explicación teórica precisa (propósito + sintaxis):**
> **_.sort()_** organiza los elementos de un array según el criterio que definas en un **callback comparador**. **Por defecto** —sin comparador— convierte los elementos a **texto** y los ordena **alfabéticamente**. Un detalle clave: **_.sort()_ MODIFICA el array original** (lo muta).
> ```javascript
> /* Sintaxis basica */
> array.sort(comparadorOpcional);   // el comparador es un callback que define el criterio de orden
> ```

> **Code-along — 1) Orden por defecto (alfabético, sin comparador):**
> *Sirve para palabras o nombres. NO lo uses con valores numéricos —los ordena como texto y da resultados raros—.*
> ```javascript
> const frutas = ['manzana', 'pera', 'uva', 'mango', 'sandía'];
> frutas.sort();
> // ['mango', 'manzana', 'pera', 'sandía', 'uva']
> ```

> **Code-along — 2) Orden numérico (con función comparadora):**
> El comparador recibe dos elementos, **_a_** y **_b_**, y devuelve un **número**; el SIGNO decide el orden:
> - **Ascendente** (menor a mayor): **_a - b_** — si `a - b` es **negativo**, `a` va **antes**; si es **positivo**, `a` va **después**; si es `0`, no cambia.
> - **Descendente** (mayor a menor): **_b - a_**.
> ```javascript
> const numeros = [10, 5, 20, 1, 100];
> numeros.sort((a, b) => a - b);   // [1, 5, 10, 20, 100]   ascendente
> numeros.sort((a, b) => b - a);   // [100, 20, 10, 5, 1]   descendente
> ```

> **Code-along — 3) Orden de objetos (por una propiedad):**
> *Cuando los elementos son objetos, se ordena por una propiedad. Para propiedades numéricas: **_a.propiedad - b.propiedad_**. Caso de uso: precios, edades, puntuaciones.*
> ```javascript
> const productos = [
>   { nombre: 'Laptop',  precio: 1200 },
>   { nombre: 'Mouse',   precio: 25 },
>   { nombre: 'Teclado', precio: 45 },
> ];
> productos.sort((a, b) => a.precio - b.precio);
> // Mouse (25) -> Teclado (45) -> Laptop (1200)
> ```

> **Code-along — 4) ¿Y si la propiedad es TEXTO? `.localeCompare`:**
> *Con propiedades numéricas restamos (`a.precio - b.precio`). Pero si la propiedad es texto —como el título de una plantilla— NO se puede restar. Ahí entra **_.localeCompare_**, un método que tampoco habíamos visto.*
> **_.localeCompare_** es un método de String: compara DOS textos y devuelve un **número** —**negativo** si el primero va antes alfabéticamente, **positivo** si va después, `0` si son iguales—, respetando el idioma (tildes y mayúsculas/minúsculas). Es exactamente lo que `.sort()` necesita para ordenar texto.
> ```javascript
> const nombres = [{ titulo: 'Beta' }, { titulo: 'alfa' }, { titulo: 'Ángel' }];
> nombres.sort((a, b) => a.titulo.localeCompare(b.titulo));
> // alfa -> Ángel -> Beta   (A-Z, respetando tildes y mayus/minus)
> ```
> - *"**_a.titulo.localeCompare(b.titulo)_** hace para el texto lo que la resta hace para los números: devuelve negativo / positivo / cero. En el lab lo usamos para el orden alfabético por título."*

> **Advertencia clave (ata con la inmutabilidad):**
> *"Ya lo dijimos pero no se puede olvidar: **_.sort()_ MODIFICA el array original** —lo reordena en el lugar—. Si lo aplicáramos directo a **_state.plantillas_**, mutaríamos el estado, justo lo que evitamos todo el día."*
> ```javascript
> const nums = [3, 1, 2];
> const copia = [...nums].sort((a, b) => a - b);   // copia -> [1, 2, 3]
> // nums sigue [3, 1, 2]   (intacto: ordenamos la COPIA, no el original)
> ```
> - *"Por eso siempre **copiamos con _[...]_ antes de ordenar**, y ordenamos la copia. Inmutabilidad, otra vez — el spread de M2 vuelve a aparecer. En el lab lo usamos para ordenar las plantillas (objetos) por su **título** (con `localeCompare`) o por su **fecha** (restando)."*

---

#### 5.3 HU5 — ordenar las plantillas (lab)

**EN PANTALLA: VS CODE — `index.html` (el selector) y `js/app.js` (`plantillasVisibles`).**

> **Tu apertura:**
> *"Quinta y última Historia de Usuario. Leemos los criterios y la armamos paso a paso."*

> **Criterios de aceptación de HU5 (la Definición de Terminado):**
> - La lista puede mostrarse con las plantillas **más recientes primero**.
> - La lista puede mostrarse en **orden alfabético** por título.
> - El orden elegido se mantiene al agregar, editar o filtrar.

---

> **Paso 1 · Un selector para elegir el orden**
> *Un `<select>` con las dos opciones; su elección vive en el estado.*
> ```html
> <!-- en index.html: -->
> <select id="orden" class="max-w-md mx-auto block mb-4 p-2 border border-slate-300 rounded">
>   <option value="fecha">Más recientes</option>
>   <option value="alfabetico">Alfabético (A-Z)</option>
> </select>
> ```
> **Por qué:** el orden es una elección del usuario y, como el filtro, es **parte del estado** (`state.orden`).

---

> **Paso 2 · La función `ordenar` — sobre una COPIA**
> *Ordena según `state.orden`, copiando primero porque `.sort()` muta.*
> ```javascript
> function ordenar(plantillas) {
>   const copia = [...plantillas];                 // copiamos: .sort() muta
>   if (state.orden === "alfabetico") {
>     return copia.sort((a, b) => a.titulo.localeCompare(b.titulo));
>   }
>   return copia.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));   // recientes primero
> }
> ```
> **Por qué:** **_[...plantillas]_** copia antes de ordenar, así **_.sort()_** no muta el estado (la inmutabilidad de M2, aplicada). Los comparadores son los que vimos: **_localeCompare_** para el texto, la resta de **_new Date(...)_** para la fecha (`b - a` = recientes primero).

---

> **Paso 3 · Encadenar el orden DESPUÉS del filtro**
> *Dentro de `plantillasVisibles()`: primero filtra, luego ordena.*
> ```javascript
> function plantillasVisibles() {
>   const filtroTexto = (state.filtro ?? "").toLowerCase();
>   const filtradas = filtroTexto === ""
>     ? state.plantillas
>     : state.plantillas.filter(p => p.hashtag.toLowerCase().includes(filtroTexto));
>   return ordenar(filtradas);   // primero filtra, luego ordena
> }
> ```
> **Por qué:** el pipeline "qué mostrar" queda completo: **filtra → ordena**. Así el orden elegido se mantiene aunque el usuario agregue, edite o filtre. El `render()` sigue recorriendo `plantillasVisibles()` — no se toca.

---

> **Paso 4 · Conectar el selector (`state.orden` → `render()`)**
> *Guardar la elección y re-renderizar.*
> ```javascript
> document.getElementById("orden").addEventListener("change", function (evento) {
>   state.orden = evento.target.value;
>   render();
> });
> ```
> **Por qué:** la misma regla del día: cambia el estado (`state.orden`) → `render()`. El evento **_change_** dispara al elegir una opción del `<select>`.

> **Checkpoint 5 (~115 min):** *Cambiar el selector a "Alfabético" → la lista se reordena A-Z; volver a "Más recientes" → aparece arriba la última plantilla creada. El orden se mantiene al filtrar. HU5 terminada — el lab está completo.*

---

#### 5.4 Cierre de la clase — qué se llevan y qué viene

**EN PANTALLA: EXCALIDRAW — mapa del día (CRUD completo + datos derivados) y el arco del M4: C13 → C14 → C15 (persistencia) → C16 (lab calificado).**

> **Recap — las 2 tesis del día:**
> *"Dos ideas que se llevan, más allá de esta app:"*
> 1. *"**Se actualiza el estado generando uno NUEVO, nunca mutando el viejo.** Borrar con `.filter`, editar con `.map` + spread, ordenar copiando con `[...]`. Es el hábito que exige cualquier framework moderno — hoy le pusimos nombre: inmutabilidad."*
> 2. *"**La UI entera es un dato DERIVADO del estado.** El total, los conteos, la lista filtrada y ordenada NO se guardan: se recalculan en cada `render()`. El estado guarda lo mínimo; todo lo demás sale de él."*

> **Dónde quedamos en el CRUD:**
> *"Hoy cerramos el CRUD completo: **C**rear y **L**eer venían de C13; hoy sumamos **A**ctualizar (editar) y **B**orrar (eliminar) — las cuatro operaciones, y las nuevas sin mutar."*

> **Logros adicionales (opcionales — si sobra tiempo o para casa):**
> - 🟢 **Cancelar edición:** un botón "Cancelar" que limpia el formulario y pone `state.editandoId = null`.
> - 🟡 **Hashtag más usado:** con `contarPorHashtag`, calcular y mostrar cuál hashtag tiene más plantillas.
> - 🔴 **Confirmar al eliminar:** un aviso simple antes de borrar (en C16 se convierte en un modal propio).

> **Cierre + puente al resto del M4:**
> *"Hoy la app se volvió interactiva y completa: hace el CRUD entero, cuenta, filtra y ordena — y nunca se desincroniza, porque todo pasa por `render()`. Falta una sola cosa, y es a propósito: si recargan, se pierde todo, porque vive en memoria. La próxima clase, C15, hacemos que SOBREVIVA con `localStorage` — y ahí van a agradecer haber envuelto las fechas en `new Date(...)`. C16 cierra el módulo con el lab calificado."*
