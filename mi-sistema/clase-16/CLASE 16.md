# CLASE 16 — Módulos (ESM) y Cierre del Proyecto (Módulo 4)

> **Curso:** Code 201 · **Módulo 4** — Clase 4 de 4 (**ÚLTIMA · LAB CALIFICADO · Proyecto Integrador**)
> **Proyecto víctima:** **Gestor de Plantillas para WhatsApp** (repo **_whatsapp-templates_**, rama **_lab16-cierre_**) — la MISMA app de C13-C15. Hoy se pule (UX) y se reorganiza como profesional (ESM).
> **ES el lab calificado del M4** (rúbrica 5 criterios × 20 pts = 100). El cierre de la clase es la **entrega del Proyecto Integrador**.
> **Fuente de inputs:** **_code201/class-16/README.md_** + **_lab/README.md_** + **_APUNTES.md.md_** (apuntes propios de Eric: `.sort()` y Módulos ESM).
> **Continuidad:** se reusa toda la app de C15 (CRUD + filtro + persistencia): `state`, `render()`, `guardar`/`cargar`, `plantillasVisibles`, `contarPorHashtag`, `normalizarHashtag`, `Template`. Hoy ese código se **reparte en archivos** con `import`/`export`.
> **Conceptos NUEVOS:** modal de confirmación (`accionPendiente`), estados vacíos, **módulos ESM** (`export`/`import`, `type="module"`), **`.sort()`**.
> **Requiere servidor local:** los módulos ESM NO andan con `file://` (doble clic) — Live Server o `python -m http.server`. En GitHub Pages, sin problema.
> **Duración:** 3h reales · se prepara para 2h30 (≈135 min de momentos) · colchón ~30 min · receso 10 min entre M2 y M3.

---

## Idea fuerza de la clase

**De una app que funciona a una app que un profesional entregaría — pulida por fuera y ordenada por dentro.** Dos frentes: (1) **UX** —un **modal de confirmación propio** antes de borrar (no el cuadro feo del navegador) y **estados vacíos amigables** que guían en vez de mostrar una pantalla en blanco—; (2) **arquitectura** —repartir el código, que hasta hoy vivía en pocos archivos comunicándose por variables globales, en **módulos ESM** (`export`/`import`): cada archivo con su responsabilidad (estado, persistencia, interfaz) y su propio ámbito—. Y de yapa, ordenar la colección con **`.sort()`**. Tesis del día: **un código modular —cada pieza con una responsabilidad, comunicándose por `import`/`export`— es lo que separa un script que funciona de un proyecto mantenible.**

> **Enfoque de la clase:** lab-conducido, y es la **entrega calificada** del módulo. Los conceptos nuevos (modal, ESM, sort) se enseñan antes de aplicarlos; las HU se construyen **paso a paso, cada uno con su código y su porqué** (formato de C14-C15). El momento grande es **ESM (M3)**: reorganizar la app sin cambiar lo que hace. `try/catch`, ternario, `new Date` e **inmutabilidad** (C14) se reactivan.

---

## Tabla de tiempos (preparado para 2h 30min)

| Momento    | Tema                                                              | Parte del lab            | Tiempo  |
| ---------- | ---------------------------------------------------------------- | ------------------------ | ------- |
| **M1**     | Apertura + **modal de confirmación** propio                        | Setup + HU1 (CP1 ~25)    | ~30 min |
| **M2**     | **Estado vacío** amigable (dos vacíos)                             | HU2 (CP2 ~40)            | ~20 min |
| **RECESO** | —                                                                | —                        | 10 min  |
| **M3**     | **Modularizar con ESM** (`export`/`import`, `type="module"`)         | HU3 (CP3 ~90)            | ~50 min |
| **M4**     | Ordenar con **`.sort()`** + cierre del proyecto                     | HU4 (CP4 ~110) + Cierre  | ~25 min |

> Total: ~125 min de momentos + 10 de receso. El colchón (~30 min) absorbe el trabajo autónomo de cada Checkpoint (CP1 ~25', CP2 ~40', CP3 ~90', CP4 ~110'). El receso va antes de la modularización (M3), el bloque más largo y denso.
>
> **Mapa de temas → momentos:** modal + `accionPendiente` (M1) · estados vacíos (M2) · módulos ESM: problema del ámbito global, `export`/`import`, `type="module"`, repartir la app (M3) · `.sort()` + comparador por fecha, copiar con `[...]` (M4).
>
> **Concepto pedagógico clave (las 2 tesis):** (1) **un código modular es un código mantenible** — repartir por responsabilidad, comunicándose con `import`/`export`, cada módulo en su ámbito. (2) **los detalles de UX** (confirmar antes de borrar, estados vacíos claros) **separan un prototipo de una app real**.

---

## Cadena Problema → Solución de la clase

```
M1: "un clic accidental borra una plantilla sin preguntar — y el confirm del navegador es feo"
     → modal de confirmacion propio + accionPendiente (una funcion guardada) = reutilizable (HU1)
     ↓ (ya confirmo... pero cuando la lista queda vacia, el usuario ve una pantalla en blanco)
M2: "quiero un mensaje claro cuando no hay nada — y distinto si es que el filtro no encontro"
     → estado vacio amigable: comparar visibles vs total, dos mensajes (HU2)
     ↓ RECESO (antes del bloque grande)
M3: "el codigo vive en pocos archivos que se hablan por variables globales y dependen del
     orden de los <script> — no escala, es dificil de mantener"
     → modulos ESM: repartir por responsabilidad (state/storage/ui/app) con import/export (HU3)
     ↓ (ya es modular... y agregar algo nuevo ahora es limpio)
M4: "quiero ordenar por fecha: mas recientes o mas antiguas"
     → .sort() con comparador (new Date), sobre una copia [...]; logica en state.js, control en ui.js (HU4)
     ↓ (la app esta lista para mostrar y entregar)
M4 (cierre): "cerramos el proyecto" → entrega del Proyecto Integrador (2 HUs propias, README, deploy, demo)
```

---

## MOMENTO 1 — Apertura + modal de confirmación (HU1)

**Tiempo:** ~30 min
**Parte del lab:** Setup + HU1 (Checkpoint 1 ~25 min)

> **OBJETIVO:** El alumno entra a la **última clase** del módulo (y del curso): recap de la app de C15 y el plan del día —pulir la UX, ordenar el código con ESM, y entregar—. Siente el problema: un clic borra sin preguntar, y el `confirm()` nativo es feo. Construye un **modal de confirmación propio** (HTML + Tailwind, mostrar/ocultar con `hidden`) y lo hace **reutilizable** guardando la acción a ejecutar en una variable (**_accionPendiente_**, una función). Conecta eliminar y vaciar para que pidan confirmación. Cierra probando Cancelar (no borra) y Eliminar (borra y persiste).

**Sub-puntos:**

1.1 **Apertura — última clase + plan del día.** Recap corto de C15 (app completa: CRUD, filtro, persistencia). Hoy: pulir (UX), organizar (ESM) y **entregar** (es el lab calificado, Proyecto Integrador). Setup mínimo: rama `lab16-cierre`.

1.2 **El problema: un clic borra sin preguntar.** Eliminar (o vaciar) ejecuta al instante — un clic accidental y chau plantilla. Y el `confirm()` del navegador es feo y no se puede estilar. Gancho ejecutable.

1.3 **Modal de confirmación (concepto).** Una ventana propia (HTML + Tailwind) que se muestra/oculta alternando la clase `hidden`. Para que sirva para cualquier acción peligrosa, se guarda **qué hacer al confirmar** en una variable: **_accionPendiente_** (una **función** — funciones como valor, del M2). *(Concepto teórico + EN PANTALLA.)*

1.4 **HU1 — confirmar antes de borrar (lab).** Criterios → paso a paso: el modal en `index.html` (oculto con `hidden`); `pedirConfirmacion(mensaje, accion)` que setea el texto, guarda `accionPendiente` y muestra el modal; los botones Cancelar (oculta, descarta) y Confirmar (ejecuta `accionPendiente()`, oculta); y `eliminarPlantilla`/vaciar llamando a `pedirConfirmacion` con su acción. Checkpoint 1: eliminar → aparece el modal; Cancelar → sigue ahí; Eliminar → desaparece y no vuelve al recargar.

---

## MOMENTO 2 — Estado vacío amigable (HU2)

**Tiempo:** ~20 min
**Parte del lab:** HU2 (Checkpoint 2 ~40 min)

> **OBJETIVO:** El alumno distingue los **dos estados vacíos** de la lista —(1) no hay nada creado; (2) hay datos pero el filtro no encontró— y muestra un mensaje claro para cada uno, en vez de una pantalla en blanco. Lo resuelve dentro de `render()`, comparando lo que se MOSTRARÍA (`plantillasVisibles()`) con lo que HAY (`state.plantillas`), y eligiendo el mensaje con un ternario. Cierra viendo el mensaje de bienvenida (app vacía) y el de "no se encontraron" (filtro sin resultados).

**Sub-puntos:**

2.1 **El problema: la lista vacía es una pantalla en blanco.** Cuando no hay plantillas —o el filtro no encuentra nada— el usuario ve un vacío sin explicación, y peor: no distingue si es que no creó nada o si su búsqueda falló. Gancho.

2.2 **HU2 — estado vacío (lab).** Criterios → paso a paso: en `render()`, si `plantillasVisibles()` está vacío, decidir el mensaje con un ternario comparando `state.plantillas.length` (¿hay algo creado?) → "Aún no tienes plantillas" o "No se encontraron plantillas con ese filtro"; si hay visibles, pintar la lista como siempre. Checkpoint 2: app vacía → mensaje de bienvenida; filtro inexistente → "No se encontraron…"; borrar filtro → vuelve la lista.

---

## RECESO — 10 min

*(Cerradas las dos mejoras de UX (HU1 + HU2). Después del receso, el bloque grande y nuevo del día: reorganizar toda la app con módulos ESM.)*

---

## MOMENTO 3 — Modularizar con ESM (HU3)

**Tiempo:** ~50 min
**Parte del lab:** HU3 (Checkpoint 3 ~90 min)

> **OBJETIVO:** El alumno entiende el problema que arrastraba sin nombrarlo —el código en pocos archivos, comunicándose por **variables globales** y dependiente del **orden de los `<script>`**— y aprende los **módulos ESM** como solución: cada archivo declara qué comparte con **_export_** y trae lo que necesita con **_import_**, con su propio ámbito, activados por **_&lt;script type="module"&gt;_**. Reparte la app en cinco archivos por responsabilidad (`Template`, `state`, `storage`, `ui`, `app`) y comprueba que **hace exactamente lo mismo** que antes. Cierra con la app modularizada y funcionando igual.

**Sub-puntos:**

3.1 **El problema: un ámbito global y el orden de los `<script>`.** Hasta C15 los archivos se hablaban por variables globales y el orden de carga importaba (si `app.js` cargaba antes que `Template.js`, fallaba). Gancho desde la reflexión previa: con cientos de líneas en pocos archivos globales, ¿cómo se mantiene esto? No escala.

3.2 **Módulos ESM (concepto).** Qué es un módulo (archivo con código reutilizable, su propio ámbito) y por qué (organización, encapsulamiento —sin choques de nombres—, mantenibilidad). `export` (compartir) / `import` (traer, por su ruta con `./` y `.js`); named export/import. `<script type="module">` activa ESM (ámbito propio + el orden ya no importa) y exige **servidor local**. *(Concepto teórico + EN PANTALLA; apoyo en los apuntes de Eric.)*

3.3 **HU3 — repartir la app (lab).** Criterios → paso a paso: la guía de **qué exporta cada archivo** (`Template.js` → la clase; `state.js` → estado + `plantillasVisibles`/`contarPorHashtag`/`normalizarHashtag`; `storage.js` → `CLAVE`/`guardar`/`cargar`; `ui.js` → `render`; `app.js` → solo importa y arranca); `export` sobre lo que se comparte, `import` de lo que se usa (arriba del archivo); un **solo** `<script type="module" src="js/app.js">`; reubicar el indicador `#estado` a `render()` (separar responsabilidades: `guardar()` solo persiste). Lo privado (listeners, `eliminarPlantilla`, el `submit`) NO se exporta. Checkpoint 3: tras modularizar, la app hace TODO lo de antes; si no carga, revisar servidor local y rutas `./…​.js`.

---

## MOMENTO 4 — Ordenar con `.sort()` + cierre del proyecto (HU4)

**Tiempo:** ~25 min
**Parte del lab:** HU4 (Checkpoint 4 ~110 min) + Cierre

> **OBJETIVO:** El alumno ordena la colección por fecha con **`.sort()`** y un comparador —recientes (`b - a`) o antiguas (`a - b`), restando dos `new Date`—, copiando el array con **_[...]_** antes porque `.sort()` muta (la inmutabilidad de C14). Ve la modularidad en acción: la lógica (`ordenar`) va en `state.js`, el control (el selector) en `ui.js`, sin tocar el resto. Cierra la clase con la **entrega del Proyecto Integrador**.

**Sub-puntos:**

4.1 **El problema: el orden es el de creación.** Quiero elegir cómo veo mis plantillas: las más recientes arriba, o las más antiguas. Gancho.

4.2 **`.sort()` con comparador (concepto nuevo).** `.sort()` ordena con un comparador `(a, b)` que devuelve un número (negativo → `a` antes; positivo → después). Por defecto ordena alfabético (texto); para números/objetos se usa la resta (`a - b` ascendente, `b - a` descendente). **`.sort()` muta** → copiar con `[...]` antes (inmutabilidad de C14). *(Concepto teórico + EN PANTALLA; apoyo en los apuntes de Eric.)*

4.3 **HU4 — ordenar (lab).** Criterios → paso a paso: en `state.js`, `ordenar()` que copia con `[...]` y ordena por fecha (`new Date(b.fecha) - new Date(a.fecha)` recientes / al revés antiguas) según `state.orden`; encadenar `ordenar(filtradas)` dentro de `plantillasVisibles()` (filtra → ordena); el selector en `index.html` y su listener en `ui.js` (cambia `state.orden` → `render()`). Checkpoint 4: cambiar a "Más antiguas" → sube la primera creada; "Más recientes" → la última; el orden se mantiene al filtrar.

4.4 **Cierre del proyecto (entrega del Proyecto Integrador).** *(Bloque de entrega, no cierre largo.)* Recap de las 2 tesis (código modular = mantenible / la UX separa prototipo de app real). Entrega calificada del M4: **2 Historias de Usuario propias** (cada una en rama → PR a `main`, con criterios orientados a resultado), **README** (describe la app, la arquitectura modular y la persistencia), **despliegue** en GitHub Pages, **demo en vivo** (máx. 10 min: flujo completo + argumentar 2 decisiones técnicas). Rúbrica oficial: 5 criterios × 20 pts. Cierre del curso: de la idea al producto.

---
---

# CAPA 2+3 — Flujo de presentación + guion detallado

---

## MOMENTO 1 — Apertura + modal de confirmación (HU1)

**Tiempo:** ~30 min · **Parte del lab:** Setup + HU1 (Checkpoint 1 ~25 min)

---

### 1.1 Apertura — última clase del módulo + plan del día

**EN PANTALLA: TEAMS — Diapositiva de portada "Clase 16 — Módulos (ESM) y Cierre del Proyecto". Debajo, la app Gestor de Plantillas de C15 corriendo en el navegador (con varias plantillas, filtro y persistencia).**

> **Tu apertura:**
> *"Llegamos a la última clase del módulo, y también la última del curso. Miren la pantalla: esa es la app que construimos entre la clase 13 y la 15. Crea, edita, filtra, y recuerda todo entre sesiones. Funciona. Pero 'funciona' no es lo mismo que 'está lista para entregar'. Hoy hacemos las dos cosas que separan un proyecto de práctica de uno profesional: la pulimos por fuera —la experiencia de usuario— y la ordenamos por dentro —la arquitectura—. Y como es la clase de cierre, hoy también se entrega: esta es la clase calificada del módulo, el Proyecto Integrador."*

> **Tu explicación teórica precisa:**
> *"El plan del día tiene tres frentes concretos. Uno: experiencia de usuario. Vamos a agregar un cuadro propio de confirmación antes de borrar, y mensajes claros cuando no hay nada que mostrar. Dos: arquitectura. Todo el código que hoy vive apretado en pocos archivos, comunicándose por variables globales, lo vamos a repartir en módulos con `import` y `export` — el estándar que usa cualquier frontend profesional. Tres: ordenar la colección por fecha. Y al final, la entrega: dos historias de usuario propias, un README, el deploy y una demo. Todo sobre el mismo repo `whatsapp-templates`."*

> **Code-along del lab — Setup:**
> 1. Abrir el repo `whatsapp-templates` en VS Code, con la app de C15 funcionando.
> 2. Crear la rama de trabajo del día: `git checkout -b lab16-cierre`.
> 3. Confirmar que la app levanta con **Live Server** (no con doble clic). Hoy es obligatorio el servidor local — más adelante van a ver por qué, cuando lleguemos a los módulos.

> **Pregunta de activación:**
> *"En la reflexión previa les dejé dos preguntas. Una: cuando una app tiene cientos de líneas en un solo archivo, ¿cómo encuentran el código que necesitan cambiar? Piénsenla, porque es exactamente el problema que vamos a resolver después del receso."*
> *(No esperar respuesta cerrada — es un gancho para el Momento 3. Dejarla flotando.)*

---

### 1.2 El problema: un clic borra sin preguntar

**EN PANTALLA: NAVEGADOR — la app de C15. El instructor pasa el mouse sobre el botón eliminar (🗑️) de una plantilla y hace clic: la plantilla desaparece al instante, sin ningún aviso.**

> **Tu apertura:**
> *"Miren esto. Tengo una plantilla que me costó escribir. Hago clic en el botón de borrar… y ya no está. Sin preguntarme nada. Un clic accidental —el mouse resbala, el trackpad es sensible— y perdí trabajo que no puedo recuperar."*

> **Tu explicación teórica precisa:**
> *"Esto no es un detalle estético, es una falla de usabilidad. Hay una regla de diseño de interfaces que dice que toda acción destructiva o importante —algo que el usuario no puede deshacer— tiene que pedir confirmación antes de ejecutarse. Se le llama prevención de errores: la interfaz frena al usuario un segundo antes de un paso irreversible y le da la oportunidad de arrepentirse. Por eso Gmail te pregunta antes de vaciar la papelera, WhatsApp antes de borrar un chat, y tu sistema operativo antes de eliminar un archivo. No es que desconfíen de vos: es que un botón sin red de seguridad convierte cualquier resbalón en una pérdida definitiva."*

> **Tu explicación teórica precisa (el porqué del modal propio):**
> *"'Fácil', pensarán, 'uso el `confirm()` del navegador y listo'. Y sí, `confirm()` existe y pregunta. Pero tiene dos problemas: es feo —ese cuadro gris del sistema que no combina con nada— y no se puede estilar ni una pizca. En una app cuidada, ese cuadro nativo rompe la experiencia. Un producto profesional pide confirmación con un cuadro propio, con su tipografía, sus colores y sus botones. Eso es lo que vamos a construir: un modal nuestro."*

> **Pregunta de activación:**
> *"¿Para qué acciones de nuestra app tiene sentido pedir confirmación, y para cuáles NO? Piensen: ¿pedirían confirmación al agregar una plantilla? ¿Al editarla?"*
> *(Respuesta guía: confirmación SOLO para lo irreversible — eliminar una plantilla, vaciar todas. Agregar y editar son reversibles / no destructivos, no se confirman. Pedir confirmación en todo cansa al usuario y le quita valor al aviso.)*

---

### 1.3 Modal de confirmación (concepto)

**EN PANTALLA: EXCALIDRAW — Mockup de la app con el modal encima: fondo oscurecido semitransparente sobre toda la pantalla, y al centro una tarjeta blanca con el mensaje "¿Eliminar esta plantilla?" y dos botones (Cancelar gris / Eliminar rojo).**

> **Tu explicación teórica precisa:**
> *"Un modal es una ventana propia —hecha con HTML y Tailwind— que se superpone a la app para pedir una decisión. La palabra clave es 'superpone': aparece por encima de todo lo demás, oscurece el fondo, y no deja seguir usando la app hasta que el usuario elige una de dos opciones: confirmar o cancelar. Esa es su razón de ser: frenar al usuario y obligarlo a una decisión consciente antes de una acción irreversible. No es una notificación que se ignora — es una puerta que hay que cruzar."*

> **Tu explicación teórica precisa (por qué uno solo):**
> *"Y una decisión de diseño desde ya: no vamos a hacer un modal para borrar y otro distinto para vaciar. Un solo modal, capaz de adaptarse a cualquier acción peligrosa. Cómo se logra eso lo construimos paso a paso en el laboratorio; por ahora quédense con la idea: un cuadro, muchas acciones."*

**EN PANTALLA: NAVEGADOR — recorrer en vivo 2 o 3 sitios reales que muestran un modal de confirmación ante una acción destructiva.**

> **Tu explicación teórica precisa (modales en la vida real):**
> *"Esto no es un invento del curso: es el estándar de toda app seria. A partir de hoy lo van a reconocer en todos lados. Miren."*

> **Demo en vivo — sitios recomendados (mostrar 2 o 3):**
> - **WhatsApp Web** — borrar un chat: salta "¿Eliminar chat?" con Cancelar / Eliminar. *(El mejor para abrir: es literalmente la app que le da nombre a nuestro proyecto.)*
> - **GitHub** — en un repo, Settings → "Delete this repository": el modal más estricto de todos, te obliga a **escribir el nombre del repo a mano** para habilitar el botón. *(Ya usan GitHub; perfecto para mostrar que la fricción crece con el peligro.)*
> - **Gmail** — "Vaciar la papelera ahora", o descartar un borrador: modal de confirmación clásico.
> - **Google Drive** — eliminar definitivamente un archivo desde la papelera.

> **Tu explicación teórica precisa (el patrón común):**
> *"Fíjense en lo que se repite en todos: siempre es una acción que NO se puede deshacer —borrar, vaciar, eliminar para siempre— y siempre el mismo esquema de un cuadro con dos salidas. GitHub incluso sube la apuesta: para borrar un repositorio te hace escribir su nombre a mano. ¿Por qué tanto? Porque cuanto más grave es la acción, más fricción conviene poner. Nuestro modal es la versión sencilla de esa misma idea profesional."*

> **Pregunta de activación:**
> *"De los sitios que acaban de ver, ¿cuáles les piden confirmación al CREAR o guardar algo, y cuáles solo al borrar? ¿Ven el patrón?"*
> *(Respuesta guía: prácticamente ninguno confirma al crear o guardar —son acciones reversibles—; la confirmación se reserva para lo destructivo e irreversible. Refuerza la regla del 1.2: se confirma solo lo que no tiene vuelta atrás.)*

---

### 1.4 HU1 — Confirmar antes de borrar (code-along del lab)

**EN PANTALLA: VS CODE — `index.html` y `js/app.js` lado a lado. Se construye el modal paso a paso; cada paso muestra su código y su porqué antes de pasar al siguiente.**

> **Tu apertura:**
> *"Vamos a la historia de usuario uno: 'Como usuario, quiero que me pregunten antes de eliminar, para no perder una plantilla por un clic accidental'. Los criterios de aceptación son tres: al eliminar aparece una ventana de confirmación; si cancelo no se borra nada; si acepto, se borra y queda guardado. Lo construimos en cuatro pasos, cada uno resolviendo una pieza."*

**Paso 1 — El modal en el HTML (la ventana, arrancando oculta).**

> **Code-along del lab — Parte 1.1:**
> 1. Al final de `index.html`, antes de cerrar `<body>`, pegar el modal:
> ```html
> <div id="modal" class="hidden fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
>   <div class="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full text-center">
>     <p id="modal-texto" class="text-slate-700 mb-5">¿Seguro?</p>
>     <div class="flex gap-2 justify-center">
>       <button id="modal-cancelar"  class="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition">Cancelar</button>
>       <button id="modal-confirmar" class="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition">Eliminar</button>
>     </div>
>   </div>
> </div>
> ```

> **El porqué (Paso 1):**
> *"Tres detalles importan. Uno: la clase `hidden` al inicio — el modal nace invisible, solo aparece cuando nosotros queramos. Dos: `fixed inset-0` — se fija cubriendo TODA la pantalla, y `bg-black/50` la oscurece a la mitad, ese fondo semitransparente que enfoca la atención en el cuadro. Tres: los `id` — `modal` para mostrar/ocultar, `modal-texto` para cambiar el mensaje, y los dos botones. Fíjense que el mensaje dice '¿Seguro?' de relleno: lo vamos a reemplazar por código según la acción."*

> **EN PANTALLA: VS CODE / CONSOLA — demostrar el mecanismo mostrar/ocultar antes de cablearlo.**
> ```javascript
> modal.classList.remove("hidden");   // mostrar (quito hidden → aparece)
> modal.classList.add("hidden");      // ocultar (pongo hidden → desaparece)
> ```
> *(Demostrar en vivo desde la consola: el modal arranca con `hidden` (Tailwind → `display:none`). Quitar la clase → aparece encima de la app. Agregarla → desaparece. Todo el modal se maneja con ese único interruptor: la misma técnica de "clase que prende/apaga" de cualquier overlay. Ese `remove`/`add` es exactamente lo que vamos a cablear en la función y en los botones que siguen.)*

**Paso 2 — Mostrar el modal guardando la acción (`pedirConfirmacion`).**

> **Code-along del lab — Parte 1.2:**
> 1. En `app.js`, referenciar el modal y declarar la variable que guarda la acción:
> ```javascript
> const modal = document.getElementById("modal");
> let accionPendiente = null;     // qué ejecutar si el usuario acepta (una función)
> ```
> 2. La función que abre el modal, recibiendo el mensaje y la acción:
> ```javascript
> function pedirConfirmacion(mensaje, accion) {
>   document.getElementById("modal-texto").textContent = mensaje;
>   accionPendiente = accion;            // guardo la acción para después
>   modal.classList.remove("hidden");    // muestro el modal
> }
> ```

> **El porqué (Paso 2):**
> *"`pedirConfirmacion` hace tres cosas y ninguna borra nada todavía: pone el mensaje en pantalla, guarda la acción en `accionPendiente`, y muestra el modal quitando `hidden` —el mismo interruptor que acabamos de probar—. Acá se cumple la promesa del 'un cuadro, muchas acciones': el truco es que `accionPendiente` guarda una FUNCIÓN, la acción a ejecutar si el usuario acepta. Es exactamente la idea de 'funciones como valor' del Módulo 2: una función se puede guardar en una variable, pasar como argumento y ejecutar más tarde. Guardo la acción ahora, cuando abro el modal; la ejecuto después, cuando aprieten Confirmar. Ojo: la acción NO se ejecuta acá, solo se guarda y espera. Por eso `accionPendiente` arranca en `null`: mientras el modal está cerrado, no hay nada pendiente."*

**Paso 3 — Los botones Cancelar y Confirmar.**

> **Code-along del lab — Parte 1.3:**
> 1. Cancelar: oculta el modal y descarta la acción, sin ejecutarla:
> ```javascript
> document.getElementById("modal-cancelar").addEventListener("click", function () {
>   modal.classList.add("hidden");        // ocultar, sin hacer nada
>   accionPendiente = null;
> });
> ```
> 2. Confirmar: ejecuta la acción guardada, oculta y limpia:
> ```javascript
> document.getElementById("modal-confirmar").addEventListener("click", function () {
>   if (accionPendiente) accionPendiente();   // ejecuta la acción guardada
>   modal.classList.add("hidden");
>   accionPendiente = null;
> });
> ```

> **El porqué (Paso 3):**
> *"Acá se ve el poder de haber guardado una función. El botón Confirmar no sabe —ni le importa— qué acción va a ejecutar: solo hace `accionPendiente()` y dispara lo que sea que se haya guardado. El mismo botón sirve para borrar una plantilla o para vaciar todas. Cancelar hace lo opuesto: oculta y pone `accionPendiente = null` sin ejecutar nada. Y el `if (accionPendiente)` es un seguro: solo ejecuta si de verdad hay algo guardado. Después de cada decisión, limpiamos la variable para dejar el modal listo para la próxima."*

> **EN PANTALLA: EXCALIDRAW — Diagrama del flujo: `eliminar` / `vaciar` → llaman a `pedirConfirmacion(msg, acción)` → la acción (una cajita "función") queda guardada en `accionPendiente` mientras el modal está abierto → el botón Confirmar dispara esa cajita; Cancelar la tira. Anclaje: "el modal guarda la acción y la ejecuta solo si el usuario acepta".**

> **Pregunta de activación:**
> *"Si el usuario aprieta Cancelar en vez de Confirmar… ¿qué tiene que pasar con `accionPendiente` para que la acción NO se ejecute?"*
> *(Respuesta esperada: se descarta —`accionPendiente = null`— y se oculta el modal, sin llamar a la función. La acción guardada solo corre si aprieta Confirmar.)*

**Paso 4 — Conectar eliminar y vaciar para que pidan confirmación.**

> **Code-along del lab — Parte 1.4:**
> 1. `eliminarPlantilla` ahora pasa su acción a `pedirConfirmacion` en vez de borrar directo:
> ```javascript
> function eliminarPlantilla(id) {
>   pedirConfirmacion("¿Eliminar esta plantilla?", function () {
>     state.plantillas = state.plantillas.filter(plantilla => plantilla.id !== id);
>     render();
>   });
> }
> ```
> 2. El botón "Vaciar todo", con su propio mensaje y su propia acción:
> ```javascript
> const btnVaciar = document.getElementById("btn-vaciar");
> btnVaciar.addEventListener("click", function () {
>   pedirConfirmacion("Esto borrará TODAS tus plantillas. ¿Continuar?", function () {
>     state.plantillas = [];
>     render();     // render → guardar(); como queda vacío, guardar() borra la clave
>   });
> });
> ```

> **El porqué (Paso 4):**
> *"Miren cómo la misma `pedirConfirmacion` sirve para dos casos distintos solo cambiando el mensaje y la acción: borrar una filtra por id, vaciar reemplaza el array por uno vacío. Cada una define SU propia función, y el modal la guarda y la ejecuta. Y un detalle que viene de C15: ninguna de las dos acciones toca `localStorage` a mano. Ambas terminan en `render()`, y `render()` ya llama a `guardar()` — la persistencia sigue siendo automática. Nosotros solo cambiamos el estado y pedimos redibujar."*

> **Checkpoint obligatorio 1 (~25 min):**
> *Pulsar eliminar en una plantilla → aparece el modal. Apretar "Cancelar" → la plantilla sigue ahí. Apretar eliminar de nuevo y "Eliminar" → desaparece; recargar la página → NO vuelve (se persistió). Probar "Vaciar todo" → el modal muestra el mensaje de vaciar; confirmar → lista vacía y persistida.*

> **Cierre del Momento + puente al siguiente:**
> *"Ya no se pierde nada por un clic: la app pregunta antes de borrar, con un cuadro propio y reutilizable. Pero acabamos de crear un escenario nuevo sin querer: si el usuario confirma vaciar todo… ¿qué ve ahora en la lista? Vayan a probarlo. Van a encontrarse con una pantalla en blanco, sin una sola pista de qué hacer. Y peor: esa misma pantalla vacía aparece también cuando el filtro no encuentra nada — pero por una razón completamente distinta. En el próximo momento resolvemos los dos vacíos, cada uno con su mensaje."*

---

## MOMENTO 2 — Estado vacío amigable (HU2)

**Tiempo:** ~20 min · **Parte del lab:** HU2 (Checkpoint 2 ~40 min)

---

### 2.1 El problema: la lista vacía es una pantalla en blanco

**EN PANTALLA: NAVEGADOR — la app tras vaciar todas las plantillas: el panel de la lista queda completamente vacío, sin texto, sin nada. Luego, con plantillas cargadas, escribir en el filtro algo que no existe (`#noexiste`): la lista también queda vacía, idéntica a la anterior.**

> **Tu apertura:**
> *"Miren las dos pantallas. La primera: vacié todas mis plantillas y quedó… nada. Un panel en blanco. La segunda: tengo diez plantillas pero busqué un hashtag que no existe, y quedó… exactamente lo mismo, nada. Dos situaciones completamente distintas que se ven idénticas. ¿Ustedes qué pensarían? ¿Se rompió la app? ¿Perdí mis datos? ¿Escribí mal el filtro? No hay forma de saberlo."*

> **Tu explicación teórica precisa:**
> *"Esto es lo que en diseño se llama un estado vacío mal manejado. Una lista puede quedar sin nada que mostrar, y una app profesional NUNCA deja una pantalla en blanco: siempre explica por qué está vacía y qué hacer al respecto. Y acá está el detalle fino: nuestra lista puede estar vacía por dos razones distintas, y cada una necesita un mensaje distinto. Una: el usuario todavía no creó ninguna plantilla — ahí lo que corresponde es invitarlo a crear la primera. Dos: sí hay plantillas, pero el filtro no encontró ninguna coincidencia — ahí lo que corresponde es avisarle que su búsqueda no dio resultados. Mostrar el mensaje equivocado es casi tan malo como no mostrar ninguno: si le digo 'crea tu primera plantilla' a alguien que tiene veinte pero filtró mal, lo confundo más."*

> **Pregunta de activación:**
> *"¿Cómo distingue el código entre 'no hay NADA creado' y 'hay cosas, pero el filtro no encontró'? Los dos casos terminan con cero elementos en pantalla — ¿qué otro dato tengo que mirar para saber cuál es cuál?"*
> *(Respuesta guía: comparar dos cantidades — cuántas plantillas se ven después del filtro vs. cuántas hay en total. Si las visibles son cero pero el total NO es cero → el filtro es el culpable. Si ambas son cero → no hay nada creado. Eso lo construimos en la HU.)*

---

### 2.2 HU2 — Estado vacío amigable (code-along del lab)

**EN PANTALLA: VS CODE — `js/app.js`, la función `render()`. Se agrega la rama del estado vacío paso a paso.**

> **Tu apertura:**
> *"Historia de usuario dos: 'Como usuario, quiero ver un mensaje claro cuando no tengo plantillas o cuando mi búsqueda no encuentra nada, en vez de una pantalla en blanco'. Los criterios: si no hay plantillas, mensaje de bienvenida; si el filtro no encuentra, mensaje de 'sin resultados'; y cuando sí hay algo que mostrar, la lista normal. Todo esto se resuelve en un solo lugar: `render()`, que es donde ya decidimos qué se dibuja."*

**Paso 1 — Detectar que no hay nada visible.**

> **Code-along del lab — Parte 2.1:**
> 1. En `render()`, después de calcular las visibles y limpiar la lista, preguntar si quedó vacía:
> ```javascript
> function render() {
>   const visibles = plantillasVisibles();
>   lista.innerHTML = "";
>
>   if (visibles.length === 0) {
>     // ...acá va el estado vacío (Paso 2)
>   } else {
>     visibles.forEach(/* ...crea cada <li> como siempre... */);
>   }
>
>   renderStats();
>   guardar();
> }
> ```

> **El porqué (Paso 1):**
> *"`plantillasVisibles()` ya nos da la lista final —filtrada— lista para dibujar. Si su longitud es cero, no hay nada que pintar y entramos al estado vacío. Si no, dibujamos la lista como siempre. Fíjense que es un simple `if/else` sobre lo que ya teníamos: no cambiamos cómo se calcula qué mostrar, solo agregamos qué hacer cuando eso da vacío."*

**Paso 2 — Elegir el mensaje correcto comparando dos longitudes.**

> **Code-along del lab — Parte 2.2:**
> 1. Dentro del `if`, decidir el texto con un ternario que compara el total:
> ```javascript
> if (visibles.length === 0) {
>   const vacio = state.plantillas.length === 0
>     ? "Aún no tienes plantillas. ¡Crea la primera!"    // no hay NADA creado
>     : "No se encontraron plantillas con ese filtro.";   // hay datos, el filtro no encontró
>   lista.innerHTML = `
>     <li class="sm:col-span-2 text-center text-slate-400 py-10">
>       <div class="text-4xl mb-2">📭</div>
>       ${vacio}
>     </li>`;
> } else {
>   visibles.forEach(/* ...crea cada <li> como siempre... */);
> }
> ```

> **El porqué (Paso 2):**
> *"Acá está la clave de toda la historia, y es comparar DOS longitudes distintas. `visibles.length` ya sabemos que es cero —por eso entramos al `if`—. La pregunta que desempata es `state.plantillas.length`: cuántas plantillas hay EN TOTAL, sin filtrar. Si el total también es cero, no hay nada creado → mensaje de bienvenida. Si el total NO es cero pero las visibles sí, entonces hay plantillas y el culpable es el filtro → mensaje de 'sin resultados'. El operador ternario elige el texto en una línea. Y como todo esto vive dentro de `render()`, el mensaje correcto se recalcula solo cada vez que el usuario agrega, borra o escribe en el filtro — sin que tengamos que llamarlo a mano."*

> **Pregunta de activación:**
> *"Tengo cinco plantillas y filtro por `#promo`, que no existe en ninguna. En ese instante, ¿cuánto vale `visibles.length` y cuánto `state.plantillas.length`? ¿Y qué mensaje elige el ternario?"*
> *(Respuesta esperada: `visibles.length` es 0 —el filtro no encontró—, `state.plantillas.length` es 5 —siguen ahí—. Como el total no es cero, el ternario elige "No se encontraron plantillas con ese filtro". Las plantillas no se borraron, solo no coinciden.)*

> **Checkpoint obligatorio 2 (~40 min):**
> *App recién vaciada (o sin crear nada) → se ve "Aún no tienes plantillas. ¡Crea la primera!". Con plantillas cargadas, escribir un filtro inexistente → se ve "No se encontraron plantillas con ese filtro". Borrar el filtro → vuelve la lista completa. Confirmar que crear una plantilla nueva hace desaparecer el mensaje de bienvenida.*

> **Cierre del Momento + puente al siguiente:**
> *"Con esto cerramos las dos mejoras de experiencia de usuario: la app pregunta antes de borrar y nunca deja una pantalla muda — siempre dice qué pasa y qué hacer. La app se ve como un producto de verdad. Pero por dentro sigue siendo la misma de C15: todo el código apretado en pocos archivos, hablándose por variables globales. Después del receso atacamos eso, que es el tema grande del día: vamos a repartir el código en módulos profesionales. Tomen sus diez minutos."*

> **RECESO — 10 min.**

---

## MOMENTO 3 — Modularizar con ESM (HU3)

**Tiempo:** ~50 min · **Parte del lab:** HU3 (Checkpoint 3 ~90 min)

> *(Momento central y más importante del día. Se enseña el concepto con code-alongs AISLADOS —archivos de juguete, fuera del proyecto— y recién después se aplica al Gestor de Plantillas. Apoyo directo en `APUNTES.md`.)*

---

### 3.1 El problema: un solo ámbito global y el orden de los `<script>`

**EN PANTALLA: VS CODE — dos archivos de juguete (`utils.js` y `main.js`) y un `index.html` que los carga. Demo en vivo del problema, no del proyecto.**

> **Tu apertura:**
> *"Antes del receso les dejé una pregunta: cuando una app tiene cientos de líneas en pocos archivos, ¿cómo encuentran lo que hay que cambiar? Y hay un problema todavía más silencioso que arrastramos desde la clase 13 sin nombrarlo. Se los voy a mostrar con dos archivos de juguete, no con nuestro proyecto, para que se vea limpio."*

> **Code-along AISLADO — reproducir el problema del orden:**
> 1. Crear `utils.js` con una función:
> ```javascript
> // utils.js
> function saludar(nombre) {
>   return "Hola, " + nombre;
> }
> ```
> 2. Crear `main.js` que la usa:
> ```javascript
> // main.js
> console.log(saludar("Eric"));
> ```
> 3. En el `index.html`, cargarlos **en el orden equivocado** a propósito:
> ```html
> <script src="main.js"></script>   <!-- se carga PRIMERO -->
> <script src="utils.js"></script>  <!-- se carga DESPUÉS -->
> ```
> 4. Abrir la consola → **`Uncaught ReferenceError: saludar is not defined`**. Invertir el orden (`utils.js` antes que `main.js`) → ahora sí funciona.

> **Tu explicación teórica precisa:**
> *"Ahí está el problema, en carne viva. Con la modularización tradicional —varios `<script>` cargados por orden— los archivos se comunican por variables globales: `main.js` esperaba encontrar `saludar` flotando en el ámbito global, pero se cargó antes de que `utils.js` la definiera, y explotó. Esto trae tres dolores. Uno: el orden de carga es crítico — si te equivocás, se rompe. Dos: no hay encapsulamiento — TODO vive en el mismo ámbito global, así que si dos archivos definen una variable con el mismo nombre, se pisan sin avisar. Tres: a medida que la app crece, un puñado de archivos globales llenos de todo se vuelve imposible de mantener. Nuestro Gestor de Plantillas ya sufre esto: `Template.js`, la lógica, la persistencia, todo conectado por variables globales y por el orden de los scripts."*

> **Tu explicación teórica precisa (el nombre y la solución):**
> *"Esto que venían usando sin saber su nombre se llama modularización tradicional. Funciona en apps chicas, pero no escala. La solución llegó en 2015, con ES2015, cuando JavaScript por fin tuvo módulos nativos a nivel del lenguaje: los Módulos ES, o ESM. Con ellos cada archivo declara explícitamente qué comparte y qué necesita, sin depender de variables globales ni del orden de carga. Eso es lo que vamos a aprender y aplicar hoy."*

> **EN PANTALLA: EXCALIDRAW — Un solo cajón vs cajones rotulados. Izquierda "tradicional": varios `<script>` volcando todo en un mismo saco global (etiqueta roja: "orden importa · choques de nombres"). Derecha "ESM": archivos separados, cada uno una caja con una puerta rotulada `export`, conectados por flechas `import` (etiqueta verde: "cada uno su ámbito · orden no importa").**

---

### 3.2 Módulos ESM: qué son, por qué y cómo (concepto)

> *(Bloque conceptual grande. Se enseña en cinco partes claras y en este orden: A) qué es un módulo, B) por qué usarlos, C) cómo se activan en el navegador (`type="module"`) — necesario para que los ejemplos que siguen funcionen, D) qué es exportar, E) qué es importar. Recién en la 3.3 se aplica al proyecto.)*

---

#### A) ¿Qué es un módulo?

**EN PANTALLA: EXCALIDRAW — un archivo `.js` dibujado como una caja cerrada, con una sola "ventanilla" rotulada `export` hacia afuera; adentro, varias piezas (variables, funciones, una clase), algunas marcadas "privado". Anclaje: "un módulo comparte solo lo que asoma por la ventanilla".**

> **Tu explicación teórica precisa:**
> *"Un módulo es un archivo de JavaScript que contiene código reutilizable —variables, funciones, clases— pensado para ser usado desde otros archivos. Eso es todo: un módulo es, literalmente, un archivo. Pero un archivo con una propiedad nueva y muy importante: tiene su propio ámbito, su propio scope. Lo que está adentro de un módulo NO se ve automáticamente desde afuera. Es lo contrario de los `<script>` de recién, donde todo caía al ámbito global y todos veían todo. En un módulo, cada cosa nace privada, encerrada en su archivo, y solo sale al exterior lo que el módulo decida compartir explícitamente."*

> **Tu explicación teórica precisa (encapsular):**
> *"La idea de fondo se llama encapsulamiento: cada módulo encapsula una funcionalidad específica —una clase, un grupo de funciones relacionadas— y expone solo su 'cara pública'. El resto queda protegido adentro. Esto es lo que evita que, en un proyecto grande, dos archivos que por casualidad usan una variable con el mismo nombre se pisen entre sí: como cada uno vive en su propio ámbito, no chocan."*

> **Analogía (después de la definición):**
> *"Un módulo es como una biblioteca. Tiene un mostrador de préstamos donde declara qué libros presta al público, y un depósito privado al que nadie más entra. Lo que pone en el mostrador, cualquiera con carnet lo puede pedir; lo del depósito, no sale. En un ratito veremos que el mostrador es el `export` y pedir prestado es el `import`."*

---

#### B) ¿Por qué usar módulos?

**EN PANTALLA: EXCALIDRAW — un archivo gigante lleno de todo (etiqueta: "difícil de mantener") vs. cuatro archivos chicos rotulados por responsabilidad conectados por flechas (etiqueta: "cada uno una tarea").**

> **Tu explicación teórica precisa (las 4 razones de los apuntes):**
> *"Cuatro razones concretas, directo de los apuntes. Uno, organización: un módulo es una unidad de organización — divide un proyecto grande en piezas chicas, cada una con una responsabilidad clara, en vez de un archivo enorme donde no encontrás nada. Dos, encapsulamiento: cada módulo tiene su propio ámbito, así que sus variables no contaminan el ámbito global ni chocan con las de otros archivos. Tres, reutilización: un mismo módulo se puede usar en varios lugares del proyecto, o incluso en otros proyectos. Y cuatro, mantenibilidad: el código se vuelve más fácil de leer, depurar y escalar — que es clave cuando trabajás en equipo y varias personas tocan el mismo proyecto."*

> **Tu explicación teórica precisa (la tesis):**
> *"Si tuviera que resumir las cuatro en una frase, es la tesis del día: un código modular es un código mantenible. No es que la app funcione mejor —funciona igual—; es que se vuelve sostenible en el tiempo."*

---

#### C) Activar los módulos en el navegador: `type="module"`

**EN PANTALLA: VS CODE — el `index.html` con el `<script type="module">`, antes de escribir los archivos de ejemplo.**

> **Tu explicación teórica precisa:**
> *"Antes de escribir una sola línea de `export` o `import`, hay que habilitarlos — si no, los ejemplos que siguen no correrían. Por defecto, un `<script>` común NO entiende `import` ni `export`; si los usás en un script normal, el navegador tira error. Para habilitarlos hay que avisarle al navegador que ese archivo es un módulo, con el atributo `type='module'`."*
> ```html
> <script type="module" src="principal.js"></script>
> ```
> *"Al ponerle `type='module'` pasan dos cosas: el archivo gana su ámbito propio —deja de ser global—, y el navegador se encarga solo del orden de carga siguiendo los `import`. Adiós al problema del principio del momento. Con esto puesto, ya podemos escribir nuestros módulos de ejemplo y que funcionen."*

> **Tu explicación teórica precisa (servidor local — obligatorio):**
> *"Y una advertencia práctica con la que van a chocar sí o sí: los módulos NO funcionan abriendo el HTML con doble clic, con `file://`. El navegador, por seguridad, se niega a cargar módulos desde el sistema de archivos directo. Necesitan un servidor local: Live Server en VS Code, o `python -m http.server`. En GitHub Pages, cuando desplieguen, funciona sin problema porque ya es un servidor. Por eso hoy el setup pedía servidor local desde el arranque. Si ven un módulo que 'no hace nada', lo primero a revisar es esto."*

---

#### D) ¿Qué es EXPORTAR (`export`)?

**EN PANTALLA: VS CODE — un archivo `matematica.js` vacío; se le van agregando `export` en vivo.**

> **Tu explicación teórica precisa (definición):**
> *"Exportar es hacer que parte del contenido de un archivo —una variable, una función, una clase— sea accesible para que otros módulos la puedan usar. Es abrir la ventanilla de la biblioteca y poner un libro en el mostrador. Y hay una regla que es la clave del encapsulamiento: todo lo que NO se exporta permanece privado dentro del archivo. Exportás solo lo necesario, y el resto queda protegido adentro."*

> **Tu explicación teórica precisa (un archivo se vuelve módulo al exportar):**
> *"Un detalle importante de los apuntes: un archivo JavaScript NO es un módulo hasta que usa la palabra `export`. En el momento en que escribís tu primer `export`, ese archivo se convierte en un módulo de exportación y puede compartir datos con otros. Antes de eso, es un archivo común."*

> **Sintaxis general — exportación nombrada (directa):**
> *"Se coloca la palabra `export` delante de cada elemento que se quiere compartir:"*
> ```javascript
> export const NOMBRE = valor;
> export function nombre(parametros) { /* ... */ }
> export class Nombre { /* ... */ }
> ```
> *(Cada elemento con `export` pasa a formar parte del "módulo de exportación" del archivo. Lo que se declara sin `export` queda privado.)*

> **Code-along AISLADO — exportar (named, directo):**
> 1. Crear `matematica.js` y poner `export` delante de cada elemento que se quiere compartir:
> ```javascript
> // matematica.js  → se vuelve MÓDULO en cuanto aparece el primer export
> export const PI = 3.1416;
> export function sumar(a, b) { return a + b; }
>
> const SECRETO = 42;   // SIN export → queda privado a este archivo
> ```

> **El porqué (code-along de export):**
> *"Le puse `export` a `PI` y a `sumar`: esos dos ya están en el mostrador, disponibles para otros archivos. Pero a `SECRETO` NO le puse `export` a propósito — ese se queda adentro, en el depósito privado. Ningún otro archivo va a poder verlo. Esto es exactamente compartir solo lo necesario."*

---

#### E) ¿Qué es IMPORTAR (`import`)?

**EN PANTALLA: VS CODE — un segundo archivo `principal.js` que trae lo de `matematica.js`.**

> **Tu explicación teórica precisa (definición):**
> *"Importar es lo inverso: es traer a tu archivo lo que otro módulo exportó, para poder usarlo. Es ir con el carnet y pedir prestado un libro del mostrador. Dos reglas de los apuntes. Una: solo podés importar lo que el otro archivo exportó explícitamente — si no está en el mostrador, no lo podés pedir. Dos: al importar indicás DE QUÉ archivo viene, por su ruta."*

> **Sintaxis general — importación nombrada:**
> *"Se usan llaves `{}` con los nombres exactos de lo que se exportó, y `from` con la ruta del archivo (con `./` y la extensión `.js`):"*
> ```javascript
> import { nombre1, nombre2 } from "./archivo.js";
> ```
> *(Los nombres entre llaves deben COINCIDIR con los nombres exportados. Opcionalmente se puede renombrar con `as`: `import { nombre1 as otroNombre } from "./archivo.js"` — pero hoy no lo necesitamos.)*

> **Code-along AISLADO — importar (named):**
> 1. Crear `principal.js` y traer por nombre lo que se exportó, entre llaves y con la ruta:
> ```javascript
> // principal.js
> import { PI, sumar } from "./matematica.js";
>
> console.log(PI);          // 3.1416
> console.log(sumar(2, 3)); // 5
> ```
> 2. Probar en vivo que lo privado NO se puede traer:
> ```javascript
> import { SECRETO } from "./matematica.js";   // ❌ SECRETO no fue exportado
> console.log(SECRETO);                         // undefined / error
> ```

> **El porqué (code-along de import):**
> *"`principal.js` pide `PI` y `sumar`, que sí estaban exportados, y los usa como si los hubiera escrito él. Pero cuando intento traer `SECRETO`, no funciona: nunca se exportó, así que no existe para el mundo exterior. Ahí ven el encapsulamiento cerrando el círculo — export decide qué sale, import solo puede tomar de eso."*

> **Tu explicación teórica precisa (imports arriba del archivo):**
> *"Y una regla de forma que viene de cómo funciona el motor: los `import` van SIEMPRE en la parte superior del archivo. No pueden ir adentro de una función, de un `if`, ni de ningún bloque. ¿Por qué? Porque el motor de JavaScript analiza y resuelve todas las importaciones ANTES de ejecutar la primera línea de código. Primero arma el rompecabezas de qué archivo necesita qué, y recién después ejecuta."*

---

> **Tu explicación teórica precisa (los tipos — solo usamos nombrada):**
> *"Última aclaración antes de ir al proyecto. Existen tres tipos de exportación e importación: la nombrada, la por defecto y la mixta. Hoy vamos a usar SOLO la nombrada, la 'named' — la que acaban de ver, con `export` sobre cada elemento y `import` entre llaves `{}`, donde los nombres tienen que coincidir. ¿Por qué la nombrada? Porque es la que sirve cuando un archivo comparte VARIOS elementos, que es justo nuestro caso: `state.js` va a exportar el estado y varias funciones. La 'por defecto' es para cuando un archivo tiene un único elemento principal, y la 'mixta' combina las dos — las menciono para que sepan que existen, pero no las usamos hoy."*

> **Pregunta de activación:**
> *"Recapitulemos con un caso. En `matematica.js` exporté `PI` y `sumar`, pero dejé `SECRETO` sin exportar. Si en `principal.js` escribo `import { PI, SECRETO } from "./matematica.js"`… ¿qué de esos dos llega, y qué no? ¿Y por qué?"*
> *(Respuesta esperada: llega `PI` —fue exportado—; `SECRETO` no llega, porque nunca se exportó y quedó privado a su módulo. Refuerza: import solo puede tomar lo que export puso en el mostrador.)*

---

### 3.3 HU3 — Repartir la app en módulos (code-along del lab)

**EN PANTALLA: VS CODE — la app del Gestor de Plantillas. Se crea la carpeta `js/` con los cinco archivos y se reparte el código pieza por pieza.**

> **Tu apertura:**
> *"Ahora sí, al proyecto. Historia de usuario tres, esta vez desde el rol de desarrollador: 'Como desarrollador, quiero separar mi código en módulos que se comuniquen con import y export, para que sea más mantenible y fácil de entender'. Los criterios: el estado, la persistencia y la interfaz viven en archivos distintos; se comunican con export/import, sin variables globales; y —clave— la app tiene que seguir funcionando EXACTAMENTE igual que antes. Ojo con esto último: modularizar NO cambia lo que la app hace, cambia cómo está organizada por dentro."*

> **Tu explicación teórica precisa (el plan de reparto):**
> *"Vamos a repartir el código en cinco archivos, cada uno con UNA responsabilidad. Esta es la guía de qué exporta cada uno; lo que no está en la lista, queda privado a su archivo."*

> **EN PANTALLA: VS CODE — mostrar la tabla de reparto antes de escribir.**
>
> | Archivo | Responsabilidad | Exporta |
> |---|---|---|
> | `models/Template.js` | el modelo de datos | `class Template` |
> | `state.js` | el estado y su lógica | `state`, `contarPorHashtag`, `plantillasVisibles`, `normalizarHashtag` |
> | `storage.js` | la persistencia | `CLAVE`, `CLAVE_FILTRO`, `guardar`, `cargar` |
> | `ui.js` | la interfaz | `render` |
> | `app.js` | el arranque | *(no exporta; solo importa y arranca)* |

**Paso 1 — `models/Template.js`: el modelo, exportado.**

> **Code-along del lab — Parte 3.1:**
> 1. Mover la clase `Template` a su archivo y exportarla:
> ```javascript
> // js/models/Template.js
> export class Template {
>   constructor(titulo, cuerpo, hashtag) {
>     this.id = crypto.randomUUID();
>     this.titulo = titulo;
>     this.cuerpo = cuerpo;
>     this.hashtag = hashtag;
>     this.fecha = new Date().toISOString();
>   }
> }
> ```

> **El porqué (Paso 1):**
> *"El modelo de datos va solo, en su propia carpeta `models/`. Un `export` directo sobre la clase y listo: cualquier archivo que necesite crear plantillas la importará. Es la pieza más independiente — no depende de nadie, todos dependen de ella."*

**Paso 2 — `state.js`: el estado y su lógica.**

> **Code-along del lab — Parte 3.2:**
> 1. El estado y las funciones que lo consultan/derivan, exportando lo que otros usarán:
> ```javascript
> // js/state.js
> import { Template } from "./models/Template.js";
>
> export const state = {
>   plantillas: [],
>   filtro: "",
>   orden: "recientes",
> };
>
> export function normalizarHashtag(texto) { /* ...igual que C14/C15... */ }
> export function contarPorHashtag() { /* ...datos derivados... */ }
> export function plantillasVisibles() { /* ...filtra el estado... */ }
> ```

> **El porqué (Paso 2):**
> *"`state.js` es el corazón: guarda los datos y la lógica que los consulta. Importa `Template` porque lo necesita para tipar/crear plantillas, y exporta el `state` y las funciones que la interfaz va a llamar. Fíjense el patrón que ya vimos en la demo aislada: arriba el `import`, y `export` sobre cada cosa que se comparte."*

**Paso 3 — `storage.js`: la persistencia.**

> **Code-along del lab — Parte 3.3:**
> 1. La persistencia de C15, ahora en su archivo, importando el `state` que necesita:
> ```javascript
> // js/storage.js
> import { state } from "./state.js";
>
> export const CLAVE = "whatsapp-templates";
> export const CLAVE_FILTRO = "whatsapp-templates-filtro";
>
> export function guardar() {
>   state.plantillas.length === 0
>     ? localStorage.removeItem(CLAVE)
>     : localStorage.setItem(CLAVE, JSON.stringify(state.plantillas));
>   localStorage.setItem(CLAVE_FILTRO, state.filtro ?? "");
> }
>
> export function cargar() {
>   const guardado = localStorage.getItem(CLAVE);
>   if (!guardado) return [];
>   try { return JSON.parse(guardado); }
>   catch { return []; }
> }
> ```

> **El porqué (Paso 3):**
> *"La persistencia es una responsabilidad aparte, así que va en su archivo. Importa `state` para saber qué guardar, y exporta `guardar`, `cargar` y las claves. Todo el blindaje de C15 —el `removeItem` cuando queda vacío, el `try/catch` al leer— sigue idéntico. Lo único que cambia es que ahora vive encapsulado acá, y quien lo quiera usar lo importa."*

**Paso 4 — `ui.js`: la interfaz (y reubicar el indicador `#estado`).**

> **Code-along del lab — Parte 3.4:**
> 1. La interfaz importa lo que necesita de los otros módulos y exporta `render`:
> ```javascript
> // js/ui.js
> import { guardar } from "./storage.js";
> import { state, contarPorHashtag, plantillasVisibles } from "./state.js";
>
> export function render() {
>   const visibles = plantillasVisibles();
>   // ...pinta la lista (incluye el estado vacío de la HU2)...
>   renderStats();
>   actualizarIndicador();   // el #estado ahora vive acá (antes estaba en guardar)
>   guardar();
> }
>
> // listeners, eliminarPlantilla, cargarEnFormulario, el submit del form... viven acá y NO se exportan
> ```

> **El porqué (Paso 4):**
> *"`ui.js` es todo lo que toca la pantalla: el `render`, los listeners, `eliminarPlantilla`, el submit del formulario. Importa el estado y la persistencia que necesita, y exporta solo `render`, porque es lo único que otro archivo —`app.js`— va a llamar. Todo lo demás queda PRIVADO a `ui.js`: no se exporta, porque nadie de afuera lo usa. Y una reubicación con sentido: el indicador `#estado` que en C15 vivía DENTRO de `guardar()`, ahora lo movemos a `render()`. ¿Por qué? Separar responsabilidades: `guardar()` solo debe persistir, tocar la pantalla es tarea de la interfaz. Cada módulo hace lo suyo y nada más."*

**Paso 5 — `app.js`: el arranque, mínimo.**

> **Code-along del lab — Parte 3.5:**
> 1. `app.js` solo importa y arranca; no exporta nada:
> ```javascript
> // js/app.js
> import { state } from "./state.js";
> import { cargar } from "./storage.js";
> import { render } from "./ui.js";
>
> state.plantillas = cargar();
> render();
> ```

> **El porqué (Paso 5):**
> *"`app.js` es el director de orquesta: no tiene lógica propia, solo importa las piezas y da la orden de arranque —cargar lo guardado y pintar—. Es el único archivo que no exporta nada, porque nadie importa DE él; él es el punto de entrada."*

**Paso 6 — `index.html`: un solo `<script type="module">`.**

> **Code-along del lab — Parte 3.6:**
> 1. Borrar TODOS los `<script>` viejos y dejar uno solo, el punto de entrada, como módulo:
> ```html
> <script type="module" src="js/app.js"></script>
> ```

> **El porqué (Paso 6):**
> *"Antes teníamos varios `<script>` cuidando el orden. Ahora, uno solo: `app.js`, con `type='module'`. El navegador lee sus `import`, sigue la cadena —`app` importa de `state`, `storage`, `ui`; `ui` importa de `state` y `storage`; `storage` de `state`; `state` de `Template`— y arma el orden de carga solo. Se acabó el problema del principio del momento. Y como cada archivo es un módulo con su propio ámbito, se acabaron también los choques de variables globales."*

> **Checkpoint obligatorio 3 (~90 min):**
> *Tras modularizar, la app hace TODO lo de antes: crear, editar, eliminar (con el modal), filtrar, ordenar los estados vacíos, y persistir al recargar. Si algo no carga: (1) confirmar que se abre con servidor local, NO con `file://`; (2) revisar que cada ruta de `import` lleve `./` y la extensión `.js`; (3) revisar en la consola qué nombre "no está definido" — suele ser algo que faltó exportar o importar.*

> **Cierre del Momento + puente al siguiente:**
> *"La app hace exactamente lo mismo que antes del receso, pero por dentro es otra cosa: cinco piezas, cada una con su responsabilidad, comunicándose por import y export, sin una sola variable global. Eso es código profesional, el que usan React, Vue y cualquier proyecto serio. Y ahora viene la prueba de que valió la pena: en el último momento vamos a agregar una función nueva —ordenar las plantillas por fecha—. Van a ver lo limpio que es sumar algo cuando el código está bien repartido: tocamos un archivo para la lógica, otro para el control, y nada más se entera."*

---

## MOMENTO 4 — Ordenar con `.sort()` + cierre del proyecto (HU4)

**Tiempo:** ~25 min · **Parte del lab:** HU4 (Checkpoint 4 ~110 min) + Cierre

---

### 4.1 El problema: el orden es siempre el de creación

**EN PANTALLA: NAVEGADOR — la app modular funcionando; las plantillas siempre aparecen en el orden en que se crearon, sin forma de cambiarlo.**

> **Tu apertura:**
> *"Ya tenemos la app pulida y modular. Pero hay algo que el usuario no puede hacer: elegir cómo ve sus plantillas. Ahora mismo siempre aparecen en el orden en que las creó, y punto. ¿Y si tiene cincuenta y quiere ver primero las más recientes? ¿O revisar las más viejas para limpiar? No tiene manera."*

> **Tu explicación teórica precisa:**
> *"Lo que falta es ordenar la colección. Y ordenar es una operación tan común —listas de precios, de fechas, de nombres— que JavaScript trae un método dedicado en los arrays: `.sort()`. Vamos a conocerlo primero con ejemplos sueltos, y después lo aplicamos para que el usuario elija entre 'más recientes' y 'más antiguas'."*

---

### 4.2 `.sort()` con comparador (concepto nuevo)

> *(Método nuevo. Se enseña con code-alongs AISLADOS en la consola, siguiendo los apuntes: primero el orden por defecto, después el numérico con comparador, después objetos por propiedad, y por último el detalle de que muta.)*

**EN PANTALLA: VS CODE / CONSOLA — arrays de juguete para probar `.sort()` en vivo.**

> **Tu explicación teórica precisa (propósito):**
> *"`.sort()` organiza los elementos de un array según un criterio. Tiene dos comportamientos que hay que tener clarísimos desde el arranque. Uno: por defecto, sin decirle nada, convierte los elementos a texto y los ordena alfabéticamente. Dos, y muy importante: `.sort()` MODIFICA el array original — lo muta, no devuelve una copia."*

> **Sintaxis general:**
> ```javascript
> array.sort(comparadorOpcional);   // el comparador (a, b) define el criterio
> ```

> **Code-along AISLADO — orden por defecto (alfabético):**
> ```javascript
> const frutas = ["manzana", "pera", "uva", "mango", "sandía"];
> frutas.sort();
> console.log(frutas);
> // ["mango", "manzana", "pera", "sandía", "uva"]  → alfabético
> ```
> *(Recalcar: sirve para palabras y nombres. NO usarlo tal cual con números — como ordena por texto, `[10, 5, 100]` daría `[10, 100, 5]`, mal. Para números hace falta un comparador.)*

> **Tu explicación teórica precisa (el comparador numérico):**
> *"Para ordenar de verdad —números, o cualquier cosa que no sea texto— le pasamos a `.sort()` una función comparadora de dos elementos, `(a, b)`. Esa función devuelve un NÚMERO, y el signo de ese número decide el orden: si es negativo, `a` va antes que `b`; si es positivo, `a` va después; si es cero, quedan igual. El truco que van a usar siempre: restar. `a - b` ordena de menor a mayor; `b - a`, de mayor a menor."*

> **Code-along AISLADO — numérico ascendente y descendente:**
> ```javascript
> const numeros = [10, 5, 20, 1, 100];
>
> numeros.sort((a, b) => a - b);
> console.log(numeros);   // [1, 5, 10, 20, 100]   ascendente (menor → mayor)
>
> numeros.sort((a, b) => b - a);
> console.log(numeros);   // [100, 20, 10, 5, 1]   descendente (mayor → menor)
> ```
> *(Mostrar en vivo cómo cambiar `a - b` por `b - a` invierte todo. Es lo único que cambia entre ascendente y descendente.)*

> **Tu explicación teórica precisa (objetos por propiedad):**
> *"Casi nunca ordenamos números sueltos: ordenamos objetos. Un array de productos, de usuarios, de plantillas. En ese caso ordenamos por una PROPIEDAD del objeto — el precio, la edad, la fecha—. La fórmula es la misma resta, pero sobre la propiedad: `a.propiedad - b.propiedad`."*

> **Code-along AISLADO — objetos por propiedad:**
> ```javascript
> const productos = [
>   { nombre: "Laptop",  precio: 1200 },
>   { nombre: "Mouse",   precio: 25 },
>   { nombre: "Teclado", precio: 45 },
> ];
>
> productos.sort((a, b) => a.precio - b.precio);
> console.log(productos);   // Mouse (25) → Teclado (45) → Laptop (1200)
> ```
> *(Ordenó los objetos de menor a mayor precio. Cambiar `a.precio - b.precio` por `b.precio - a.precio` los pondría del más caro al más barato.)*

> **Tu explicación teórica precisa (muta → copiar con `[...]`):**
> *"Y volvemos al punto peligroso: `.sort()` muta el array original. Si ordeno directamente el array del estado, estoy modificando mis datos de verdad, no una vista de ellos. Eso rompe el principio de inmutabilidad que trabajamos en la clase 14: nunca tocamos el estado directamente, siempre trabajamos sobre una copia. Entonces, la regla de oro con `.sort()`: copiar primero con el spread `[...]`, y ordenar la copia. El original queda intacto."*
> ```javascript
> const copia = [...productos];        // copia primero
> copia.sort((a, b) => a.precio - b.precio);   // ordeno la COPIA, no el original
> ```

> **Pregunta de activación:**
> *"Tengo `const precios = [30, 5, 12]` y hago `precios.sort()` SIN comparador. ¿Qué me devuelve, y por qué probablemente no es lo que esperaba?"*
> *(Respuesta esperada: los ordena como TEXTO → `[12, 30, 5]`, porque "12" y "30" empiezan con 1 y 3, y "5" con 5. Sin comparador, `.sort()` compara caracteres, no valores numéricos. Para números hay que pasar `(a, b) => a - b`.)*

---

### 4.3 HU4 — Ordenar la colección por fecha (code-along del lab)

**EN PANTALLA: VS CODE — `state.js` (la lógica), `index.html` y `ui.js` (el control). Se agrega el orden sin tocar el resto de la app.**

> **Tu apertura:**
> *"Historia de usuario cuatro: 'Como usuario, quiero ordenar mis plantillas por fecha —más recientes o más antiguas—, para revisarlas como me convenga'. Criterios: un selector para elegir entre las dos opciones; la lista se reordena al instante; y el orden se mantiene aunque agregue, edite o filtre. Y acá se va a ver la ventaja de haber modularizado: la lógica de ordenar va a `state.js`, el control del selector a `ui.js`, y el resto de la app ni se entera."*

**Paso 1 — La función `ordenar` en `state.js` (sobre una copia).**

> **Code-along del lab — Parte 4.1:**
> 1. En `state.js`, una función que copia y ordena por fecha según `state.orden`:
> ```javascript
> function ordenar(plantillas) {
>   const copia = [...plantillas];   // copiamos: .sort() muta el array original
>   return state.orden === "antiguas"
>     ? copia.sort((a, b) => new Date(a.fecha) - new Date(b.fecha))   // más antiguas primero
>     : copia.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));  // más recientes primero
> }
> ```

> **El porqué (Paso 1):**
> *"Tres cosas de este paso. Uno: copiamos con `[...]` antes de ordenar, por lo que acabamos de ver — no tocamos el estado original. Dos: la fecha viene como texto (la guardamos con `toISOString`), así que la envolvemos en `new Date(...)` para que la resta dé un número —la diferencia en milisegundos— y se pueda comparar. Tres: el criterio depende de `state.orden`: si es 'antiguas', `a - b` (ascendente, las viejas primero); si no, `b - a` (descendente, las recientes primero). El orden vive en el estado, como todo lo demás."*

**Paso 2 — Encadenar el orden después del filtro.**

> **Code-along del lab — Parte 4.2:**
> 1. En `plantillasVisibles()`, ordenar el resultado del filtro:
> ```javascript
> export function plantillasVisibles() {
>   const filtroTexto = (state.filtro ?? "").toLowerCase();
>   const filtradas = filtroTexto === ""
>     ? state.plantillas
>     : state.plantillas.filter(plantilla => plantilla.hashtag.toLowerCase().includes(filtroTexto));
>   return ordenar(filtradas);       // primero filtra, luego ordena
> }
> ```

> **El porqué (Paso 2):**
> *"`plantillasVisibles()` ya era la fuente única de 'qué se muestra': ahí vivía el filtro. Ahora le encadenamos el orden al final: primero filtra, después ordena lo filtrado. Como `render()` siempre dibuja lo que devuelve esta función, el orden se aplica solo en cada redibujado — al agregar, al editar, al filtrar—. No hay que llamarlo a mano en ningún lado. Ese es el valor de tener un único pipeline de 'qué mostrar'."*

**Paso 3 — El selector en el HTML y su listener en `ui.js`.**

> **Code-along del lab — Parte 4.3:**
> 1. El selector en `index.html`:
> ```html
> <select id="orden" class="w-full p-2 border border-slate-300 rounded-lg">
>   <option value="recientes">Más recientes</option>
>   <option value="antiguas">Más antiguas</option>
> </select>
> ```
> 2. El listener en `ui.js`, que actualiza el estado y redibuja:
> ```javascript
> document.getElementById("orden").addEventListener("change", function (evento) {
>   state.orden = evento.target.value;   // el orden vive en el estado
>   render();
> });
> ```

> **El porqué (Paso 3):**
> *"El selector no ordena nada por sí mismo: solo cambia `state.orden` y pide `render()`. El resto ya está armado — `render()` llama a `plantillasVisibles()`, que ahora ordena. Fíjense en el reparto limpio que nos dio la modularidad: la LÓGICA de ordenar quedó en `state.js`, el CONTROL —el selector y su listener— en `ui.js`, y no tocamos ni `storage.js` ni `Template.js` ni `app.js`. Agregar una feature nueva fue quirúrgico. Eso es lo que compra modularizar."*

> **Checkpoint obligatorio 4 (~110 min):**
> *Cambiar el selector a "Más antiguas" → la primera plantilla que se creó sube al tope. Volver a "Más recientes" → la última creada aparece primera. Con un filtro activo, cambiar el orden → se mantiene el filtro Y se aplica el orden sobre lo filtrado. Recargar → el orden elegido persiste si se guardó en el estado.*

> **Cierre del Momento:**
> *"Con esto la app quedó completa: crea, edita, filtra, ordena, confirma antes de borrar, avisa cuando está vacía, recuerda todo entre sesiones, y por dentro está repartida en módulos profesionales. Pasó de una idea a un producto entregable. Y eso es justo lo que sigue: la entrega."*

---

### 4.4 Cierre del proyecto — entrega del Proyecto Integrador

> *(Bloque de entrega, no cierre extenso. Es la clase calificada del módulo.)*

**EN PANTALLA: TEAMS — diapositiva con los cuatro requisitos de la entrega y la rúbrica (5 criterios × 20 pts).**

> **Tu explicación teórica precisa (las 2 tesis del módulo):**
> *"Antes de la entrega, dos ideas que se lleven de todo el módulo. Una: un código modular es un código mantenible — repartir por responsabilidad no cambia lo que la app hace, pero cambia todo respecto a poder crecerla y trabajarla en equipo. Dos: los detalles de experiencia de usuario —confirmar antes de borrar, mostrar estados vacíos claros— son lo que separa un prototipo de una app de verdad. Hoy la app ganó las dos cosas."*

> **La entrega — Proyecto Integrador del Módulo 4 (calificado):**
> 1. **Dos Historias de Usuario propias:** implementar al menos 2 HU adicionales, cada una en su rama → Pull Request a `main`, con criterios de aceptación orientados a resultado.
> 2. **README:** describir la app, la arquitectura modular con ESM (`state` / `storage` / `ui`) y cómo se persisten los datos.
> 3. **Despliegue:** publicar en GitHub Pages (donde los módulos funcionan sin servidor local extra).
> 4. **Demo en vivo (máx. 10 min):** mostrar el flujo completo y argumentar 2 decisiones técnicas.
>
> *Evaluación: rúbrica oficial, 5 criterios × 20 pts = 100.*

> **Cierre del curso:**
> *"Empezamos el módulo con una clase que solo modelaba datos. Lo cerramos con un producto usable, mantenible y desplegado, que ustedes pueden mostrar. Eso es ser desarrollador: llevar una idea de principio a fin. Nos vemos en la demo."*

---
