# CLASE 15 — JSON y LocalStorage (Módulo 4)

> **Curso:** Code 201 · **Módulo 4** — Clase 3 de 4 (**el corazón del M4: persistencia**)
> **Proyecto víctima:** **Gestor de Plantillas para WhatsApp** (repo **_whatsapp-templates_**, rama **_lab15-localstorage_**) — la MISMA app de C13-C14. Hoy se resuelve el "se pierde al recargar": el estado se **guarda** en el navegador y se **recupera** al abrir.
> **NO es lab calificado** (el calificado del M4 es C16) · **no consume API** (todo local, con `localStorage` del navegador).
> **Fuente de inputs:** **_code201/class-15/README.md_** + **_lab/README.md_** + **_APUNTES.md.md_** (apuntes propios de Eric, apoyo para JSON y localStorage).
> **Continuidad:** se reusa de C13-C14 la clase **_Template_**, el estado (`state.plantillas` + `state.filtro`), **_render()_**, el `id` de texto (`crypto.randomUUID()`) y **_new Date_**. Hoy se le agrega una capa de **persistencia** que se dispara desde `render()`.
> **Conceptos NUEVOS:** `localStorage` (setItem/getItem/removeItem), JSON (`stringify`/`parse`), serializar/deserializar, persistencia.
> **Reactivación:** `try/catch` (C12), operador ternario, regla *cambias estado → render()*, `new Date`. En M3 solo LEÍAN JSON de una API; hoy lo ESCRIBEN.
> **Duración:** 3h reales · se prepara para 2h30 (≈140 min de momentos) · colchón ~30 min · receso 10 min entre M2 y M3.

---

## Idea fuerza de la clase

**De una app que olvida todo al recargar a una app que RECUERDA — y el día en que el alumno descubre el puente entre sus objetos y lo único que el navegador sabe guardar: texto.** Dos herramientas encadenadas: **`localStorage`**, el almacén del navegador que sobrevive al cierre de la pestaña (pero **solo guarda texto**); y **JSON**, el formato que convierte el estado (array de objetos) en texto con **_JSON.stringify_** y lo reconstruye con **_JSON.parse_**. El flujo: **guardar** en cada `render()`, **cargar** al arrancar, **blindar** el parseo con `try/catch`, y afinar el borrado con `removeItem`. Tesis del día: **`localStorage` solo entiende texto; JSON es el traductor entre tus objetos y ese texto — y en la traducción se pierden los tipos complejos (como `Date`), que hay que reconstruir.**

> **Enfoque de la clase:** lab-conducido. Los dos conceptos nuevos (localStorage y JSON) se enseñan antes de aplicarlos; las HU se construyen **paso a paso, cada uno con su código y su porqué** (mismo formato interlazado de C14). `try/catch` y el ternario se reactivan (no se re-enseñan de cero).

---

## Tabla de tiempos (preparado para 2h 30min)

| Momento    | Tema                                                                  | Parte del lab           | Tiempo  |
| ---------- | --------------------------------------------------------------------- | ----------------------- | ------- |
| **M1**     | Apertura + el problema + **localStorage** + **JSON `stringify`** + guardar | Setup + HU1 (CP1 ~30)   | ~35 min |
| **M2**     | **JSON `parse`** + cargar al arrancar + la lección de las **fechas**       | HU2 (CP2 ~55)           | ~30 min |
| **RECESO** | —                                                                     | —                       | 10 min  |
| **M3**     | Blindar con **`try/catch`** (datos corruptos)                             | HU3 (CP3 ~80)           | ~25 min |
| **M4**     | Vaciar con **`removeItem`** + ternario + indicador                        | HU4 (CP4 ~100)          | ~25 min |
| **M5**     | Persistir el **filtro** (texto vs array) + cierre                         | HU5 (CP5 ~115) + Cierre | ~25 min |

> Total: ~140 min de momentos + 10 de receso. El colchón (~30 min) absorbe el trabajo autónomo de cada Checkpoint (CP1 ~30', CP2 ~55', CP3 ~80', CP4 ~100', CP5 ~115' de reloj de lab).
>
> **Mapa de temas → momentos:** localStorage + JSON + `stringify` + `guardar()` en render (M1) · `parse` + `cargar()` al arrancar + reconstruir la fecha con `new Date` (M2) · `try/catch` sobre `parse` (M3) · `removeItem` + ternario + indicador (M4) · persistir el filtro (texto sin stringify) (M5).
>
> **Concepto pedagógico clave (las 2 tesis):** (1) **`localStorage` solo guarda texto; JSON es el traductor** (`stringify` guardar / `parse` leer). (2) **En la traducción a JSON se pierden los tipos complejos** (la `Date` vuelve como texto) → se reconstruyen (`new Date(...)`).

---

## Cadena Problema → Solución de la clase

```
M1: "la app funciona, pero al recargar la pestaña se pierde TODO — el estado vive en memoria"
     → localStorage (almacen del navegador, pero solo guarda TEXTO) + JSON.stringify (objeto → texto)
     → guardar() dentro de render(): cada cambio se persiste solo (HU1)
     ↓ (ya guardo... pero al abrir la app, la lista sigue vacia: nadie lee lo guardado)
M2: "quiero ver mis plantillas apenas abro la app"
     → cargar() al arrancar: getItem + JSON.parse (texto → objeto); ojo, la fecha volvio como texto
     → reconstruir con new Date(p.fecha) en el render (HU2)
     ↓ (todo anda... pero si el texto guardado esta corrupto, JSON.parse explota y rompe la pantalla)
M3: "quiero que la app no se cuelgue aunque los datos guardados esten dañados"
     → envolver JSON.parse en try/catch: si falla, arranca con [] y avisa (HU3)
     ↓ (funciona... pero si 'vacio todo', la clave queda con [] en vez de desaparecer)
M4: "quiero borrar todo de golpe y que el almacen quede realmente limpio"
     → guardar() con un ternario: si vacio -> removeItem; si hay -> setItem; + indicador de estado (HU4)
     ↓ (persisto las plantillas... pero el filtro que escribi tambien se pierde al recargar)
M5: "quiero que el filtro siga aplicado si recargo"
     → persistir state.filtro; como YA es texto, va directo (sin stringify) — el contraste array vs texto (HU5)
     ↓ (la app recuerda todo... y ya esta lista para el proyecto integrador)
M5 (cierre): "una app profesional recuerda" → puente a C16 (lab calificado del modulo)
```

---

## MOMENTO 1 — Persistencia + localStorage + JSON + guardar (HU1)

**Tiempo:** ~35 min
**Parte del lab:** Setup + HU1 (Checkpoint 1 ~30 min)

> **OBJETIVO:** El alumno ve EN VIVO cómo una recarga borra todo y entiende **persistencia** —que los datos sobrevivan a la recarga—. Conoce el **medio** para lograrla del lado del navegador, **`localStorage`** (almacén clave→**texto**), y el papel de **JSON** en esta clase: como `localStorage` solo guarda texto y el estado es un array de objetos, JSON es el **traductor** — y hoy se usan por primera vez sus **métodos**, empezando por **_JSON.stringify_** (objeto→texto). Monta la persistencia: **_persistence.js_** con una **_CLAVE_**, **_guardar()_** (`stringify` + `setItem`) llamada **dentro de `render()`**. Cierra viendo en DevTools la clave guardada.

> **Patrón pedagógico de M1:** **apertura/problema → concepto (persistencia) → concepto (localStorage, el medio) → rol de JSON + `stringify` → lab.** Se separa la **META** (persistencia) del **MEDIO** (localStorage): primero QUÉ queremos, después CON QUÉ. **JSON NO se re-enseña como concepto** —ya se vio en M3 con las APIs, solo el concepto y solo leyéndolo—; acá se enmarca su **ROL** (el traductor objeto↔texto que `localStorage` exige) y se introducen sus **métodos**, que sí son nuevos. HU1 usa solo `stringify` (guardar); `parse` es M2. La HU sigue el formato paso → código → porqué.

---

#### 1.1 Apertura + el problema: al recargar, se pierde todo

**EN PANTALLA: NAVEGADOR (Live Server) — la app de C14 con varias plantillas; se recarga y desaparecen todas.**

> **Tu apertura:**
> *"En C13 y C14 armamos el gestor completo: crear, leer, editar, borrar, filtrar, ordenar. Funciona precioso. Pero hagamos una prueba."* *(Agregar 2-3 plantillas.)* *"Ahora recargo la página… y miren: no queda NADA. Todo el trabajo, perdido. Hoy resolvemos eso de raíz — es el corazón del módulo."*

> **Pregunta de activación:**
> *"¿Por qué se borró todo con solo recargar? ¿Dónde vivían esas plantillas?"*
> *(Respuesta guía: vivían en la **memoria** del programa —variables de JavaScript—, que existe solo mientras la página está abierta. Al recargar, el programa arranca de cero y la memoria se vacía. Nunca guardamos nada fuera de ahí.)*

> **Setup mínimo:**
> *"Un solo paso de setup: creamos la rama **_lab15-localstorage_**. El resto lo armamos dentro de las Historias de Usuario."*

---

#### 1.2 Persistencia (concepto) — la META

**EN PANTALLA: EXCALIDRAW — la pizarra (memoria, se borra al recargar) vs el cuaderno (guardado, sobrevive).**

> **Tu explicación teórica precisa:**
> **Persistencia** es lograr que los datos **sobrevivan** a la recarga o al cierre del navegador — que no se pierdan cuando el programa arranca de cero. Es lo que le falta a nuestra app: hasta hoy, el estado vivía solo en memoria (se borra); persistir es guardarlo en un lugar que NO se borre.
> - *"Ojo: persistir NO significa necesariamente un servidor o una base de datos. Para los datos del propio usuario en su navegador, alcanza con el **almacenamiento del navegador**. Eso es lo que vamos a usar. La persistencia es la META; en el próximo punto vemos el MEDIO."*

> **Tu analogía (corta):**
> *"La memoria del programa es una **pizarra**: escribís, la usás, y al final del día (cerrar la pestaña) se borra. Persistir es pasar lo importante a un **cuaderno** que queda guardado — mañana lo abrís y ahí está."*

---

#### 1.3 `localStorage` (concepto) — el MEDIO

**EN PANTALLA: NAVEGADOR — la consola y DevTools → Application → Local Storage, lado a lado (para escribir en vivo y ver aparecer/desaparecer las claves).**

> **Tu apertura:**
> *"El medio para persistir del lado del navegador se llama **localStorage** — un pequeño almacén que el navegador le presta a cada sitio."*

> **Tu explicación teórica precisa:**
> **`localStorage`** es una **API de almacenamiento web** del navegador que guarda datos de forma **persistente** (no se borran al recargar ni al cerrar). Es un objeto **global** —está disponible en todo el código, sin importar ni instanciar nada— y guarda pares **clave → valor**.
> ```javascript
> /* Sintaxis general — los 3 metodos del dia */
> localStorage.setItem("<clave>", "<texto>");   // guarda (o sobreescribe) un valor
> localStorage.getItem("<clave>");              // devuelve el texto guardado, o null
> localStorage.removeItem("<clave>");           // borra ese valor
> ```
> - *"El límite MÁS importante, y el que define toda la clase: **`localStorage` SOLO guarda TEXTO** (strings). No guarda objetos, arrays ni fechas directamente. Nuestro estado es un array de objetos… así que hay un problema, y su solución es el próximo punto."*
> - *"Otros detalles: es del mismo sitio (mismo origen), guarda unos ~5-10 MB, y NO se usa para datos sensibles —cualquiera con acceso al navegador los ve—."*

> **Code-along — `localStorage` en vivo (consola + DevTools, con un ejemplo simple):**
> *(Abrir la consola del navegador y, al lado, DevTools → Application → Local Storage. Ejemplo de prueba, NO el proyecto.)*
> ```javascript
> // 1) Guardar un dato y verlo aparecer en DevTools:
> localStorage.setItem("curso", "Code 201");
> localStorage.getItem("curso");     // -> "Code 201"
> //    En Application -> Local Storage aparece la fila:   curso | Code 201
>
> // 2) La prueba de la persistencia: RECARGAR la pagina y volver a leer:
> localStorage.getItem("curso");     // -> "Code 201"   (¡sobrevivio a la recarga!)
>
> // 3) Borrar el dato:
> localStorage.removeItem("curso");
> localStorage.getItem("curso");     // -> null
> ```
> - *"Eso es la persistencia en acción: guardé, RECARGUÉ, y el dato seguía ahí. Con una variable de JavaScript, recargar la borra; con localStorage, no. Y en DevTools lo ven aparecer y desaparecer en tiempo real."*

> **Demo del límite — `localStorage` SOLO guarda texto (esto motiva el próximo punto):**
> ```javascript
> localStorage.setItem("edad", 25);          // le paso un NUMERO
> typeof localStorage.getItem("edad");       // -> "string"   (lo guardo como texto "25")
>
> localStorage.setItem("obj", { a: 1 });     // le paso un OBJETO
> localStorage.getItem("obj");               // -> "[object Object]"   (¡basura! lo convirtio mal a texto)
> ```
> - *"Ahí está el problema del día: un número lo guarda como texto (zafa), pero un OBJETO lo arruina — sale `[object Object]`, inservible. Y nuestro estado es un array de objetos. Necesitamos convertirlo a texto BIEN antes de guardarlo. Ese traductor es JSON — el próximo punto."*

> **Tu analogía (corta):**
> *"Un casillero con etiqueta: en cada casillero (una **clave**) guardás una hoja de papel (el **valor**, siempre texto). Solo entran hojas de papel — si querés guardar algo más complejo, primero lo tenés que escribir como texto."*

---

#### 1.4 El rol de JSON acá + `JSON.stringify` (objeto → texto)

**EN PANTALLA: VS CODE / consola — `JSON.stringify` sobre un objeto, en vivo.**

> **Tu apertura (enmarcar, no re-enseñar):**
> *"JSON no es nuevo: lo vimos en el M3, cuando consumíamos la PokeAPI — los datos llegaban en formato JSON y los leíamos. Pero ahí solo vimos QUÉ es. Hoy JSON cumple un rol central, y por primera vez usamos sus MÉTODOS."*

> **Tu explicación teórica precisa (el rol):**
> Recordemos: **JSON** es un formato de **texto** para representar datos (pares clave-valor, muy parecido a un objeto de JavaScript). ¿Por qué importa HOY? Porque **`localStorage` solo guarda texto**, pero nuestro estado es un **array de objetos**. Falta un traductor entre ambos — y ese traductor es JSON: convierte objetos ↔ texto en las dos direcciones.
> - *"Lo NUEVO de hoy son sus dos métodos: **_JSON.stringify_** (objeto → texto, para GUARDAR) y **_JSON.parse_** (texto → objeto, para LEER). Hoy usamos el primero; el segundo, en el próximo momento."*

> **`JSON.stringify` — serializar (objeto → texto):**
> **_JSON.stringify(estructura)_** convierte un objeto o array de JS en una **cadena de texto JSON**. Es lo que produce el texto que `localStorage` puede guardar.
> ```javascript
> /* Sintaxis general */
> const textoJSON = JSON.stringify(<estructura>);
> ```

> **Demo en consola (30 segundos):**
> ```javascript
> const plantillas = [{ titulo: "Saludo", hashtag: "#ventas" }];
> JSON.stringify(plantillas);
> // -> '[{"titulo":"Saludo","hashtag":"#ventas"}]'   (¡es TEXTO! - claves con comillas dobles)
> ```
> - *"Fíjense: el array de objetos salió como una **tira de texto**. Eso —y solo eso— es lo que `localStorage` sabe guardar. Sin `stringify`, guardaría algo inútil como `\"[object Object]\"`."*

---

#### 1.5 HU1 — guardar las plantillas en el navegador (lab)

**EN PANTALLA: VS CODE — nuevo archivo `js/persistence.js` + el `render()` de C14.**

> **Tu apertura:**
> *"Primera Historia de Usuario. Con localStorage y stringify en la mano, montamos el guardado — paso a paso, cada uno con su código y su porqué."*

> **Criterios de aceptación de HU1 (la Definición de Terminado):**
> - Al **agregar, editar o eliminar**, los datos quedan guardados en el navegador.
> - El guardado ocurre **solo** (sin un botón "guardar").
> - Se puede comprobar en *DevTools → Application → Local Storage* que los datos están ahí.

---

> **Paso 1 · Un archivo para la persistencia + una clave**
> *Toda la persistencia vive en su propio archivo, con una etiqueta única bajo la que se guarda.*
> ```javascript
> // js/persistence.js  (cargarlo en index.html ANTES de app.js)
> const CLAVE = "whatsapp-templates";   // la "etiqueta" del casillero
> ```
> **Por qué:** convención del proyecto — separar la persistencia en **_persistence.js_** la mantiene ordenada, y usar SIEMPRE la misma **_CLAVE_** garantiza que guardamos y leemos del mismo lugar. Se carga antes de `app.js` para que `guardar()`/`cargar()` existan cuando la app las use.

---

> **Paso 2 · La función `guardar()` — serializar y guardar**
> *Convierte el estado a texto con `stringify` y lo mete en `localStorage`.*
> ```javascript
> function guardar() {
>   localStorage.setItem(CLAVE, JSON.stringify(state.plantillas));   // objeto -> texto -> navegador
> }
> ```
> **Por qué:** **_JSON.stringify(state.plantillas)_** vuelve el array de objetos una tira de texto (el único formato que `localStorage` entiende), y **_setItem_** la guarda bajo la `CLAVE`. Una línea que resume el día: traducir con JSON, guardar con localStorage.

---

> **Paso 3 · Llamar `guardar()` en cada cambio → dentro de `render()`**
> *Como todo cambio termina en un `render()`, guardar ahí persiste todo — sin botón.*
> ```javascript
> function render() {
>   // ...dibuja la lista y las stats como en C14...
>   guardar();          // ← el estado ya cambio, persistirlo
> }
> ```
> **Por qué:** es la regla del módulo llevada un paso más: **cambias el estado → `render()`** — y ahora `render()` además **guarda**. Poner `guardar()` en un solo lugar (el final del render) hace imposible olvidarse de persistir en alguna operación: agregar, editar, eliminar y filtrar ya pasan todos por ahí.

---

> **Checkpoint 1 (~30 min):** *Agregar una plantilla y abrir **DevTools → Application → Local Storage**: aparece la clave **_whatsapp-templates_** con los datos en texto (`[{"titulo":...}]`). HU1 terminada — la app ya guarda.*

> **Cierre del Momento + puente al siguiente:**
> *"Ya guardamos: cada cambio queda persistido en el navegador, y lo comprobamos en DevTools. Pero prueben algo: recarguen la página."* *(Recargar.)* *"La lista sigue vacía. ¿Cómo? Si los datos están guardados… Claro: los GUARDAMOS, pero nadie los LEE al abrir la app. Falta la otra mitad — cargar el estado al arrancar. Y ahí vamos a usar el otro método de JSON, `parse`, y nos vamos a topar con una sorpresa: las fechas."*

---

## MOMENTO 2 — JSON.parse + cargar al arrancar + las fechas (HU2)

**Tiempo:** ~30 min
**Parte del lab:** HU2 (Checkpoint 2 ~55 min)

> **OBJETIVO:** El alumno cierra la otra mitad de la persistencia: **cargar** el estado al abrir la app con **_JSON.parse_** (texto → objeto), usando un **operador ternario** para el caso "no hay nada guardado" (→ `[]`). Descubre la lección real del día: **JSON no guarda tipos complejos** — la `fecha`, que era un `Date`, vuelve como **texto** —, y la reconstruye con **_new Date(plantilla.fecha)_** en el `render()`. Cierra recargando la página y viendo que las plantillas (y su fecha) siguen ahí.

> **Patrón pedagógico de M2:** **problema → concepto (`parse` + el objeto genérico) → lab.** Cierra la simetría de la persistencia: si M1 fue GUARDAR (`stringify`), M2 es LEER (`parse`). El concepto trae la sorpresa del día —al deserializar, JSON devuelve un objeto **genérico** y se pierden los tipos complejos (la `Date` vuelve como texto)—, que se demuestra en consola antes de toparse con ella en el lab. HU2 se construye paso a paso; el **ternario** y **_new Date_** se reactivan (no se re-enseñan). Guiño: el `new Date(...)` del `.sort()` de C14 anticipó justo esto.

---

#### 2.1 El problema: guardo, pero al abrir la app no aparece nada

**EN PANTALLA: NAVEGADOR — recargar la app: la lista está vacía, aunque en DevTools → Local Storage la clave SÍ tiene datos.**

> **Tu apertura (gancho, retomado del cierre de M1):**
> *"Recién vimos algo raro: guardamos las plantillas —están en DevTools, las vemos— pero al recargar la app, la lista aparece VACÍA. Los datos están, pero la pantalla no los muestra."*

> **Pregunta de activación:**
> *"Si los datos están guardados en localStorage… ¿por qué la app arranca vacía? ¿Qué le falta hacer al abrir?"*
> *(Respuesta guía: la app GUARDA en cada cambio, pero al arrancar nunca LEE lo guardado — arranca con `state.plantillas = []` como siempre. Falta la mitad simétrica: cargar el estado desde localStorage al iniciar.)*

> **Tu cierre del problema (puente):**
> *"Nos falta el camino de vuelta: leer el texto guardado y reconstruirlo en objetos. Para eso está el otro método de JSON — `parse`."*

---

#### 2.2 `JSON.parse` + el objeto genérico (concepto)

**EN PANTALLA: VS CODE / consola — tres demos en vivo: `parse` funciona → el objeto genérico (una clase pierde su método) → cómo reconstruirlo.**

> **Tu explicación teórica precisa:**
> **_JSON.parse(texto)_** hace lo inverso de `stringify`: toma una **cadena de texto JSON** y la reconstruye en un **objeto/array** de JavaScript, listo para usar. Es lo que se usa para LEER lo guardado en `localStorage` (o lo recibido de una API).
> ```javascript
> /* Sintaxis general */
> const estructura = JSON.parse(<textoJSON>);
> ```

> **Code-along 1 — `parse` funciona (la ida y vuelta):**
> *Primero, que se vea que hace bien su trabajo: un objeto → texto → objeto de nuevo, usable.*
> ```javascript
> const original = { nombre: "Ana", edad: 30 };
> const texto  = JSON.stringify(original);   // '{"nombre":"Ana","edad":30}'   (TEXTO)
> const vuelta = JSON.parse(texto);          // { nombre: "Ana", edad: 30 }    (objeto de nuevo)
> vuelta.edad + 1;   // 31   -> es un objeto real, funciona
> ```
> - *"`stringify` lo volvió texto; `parse` lo reconstruyó como objeto. Perfecto para datos simples."*

> **Code-along 2 — el problema: deserializar devuelve un objeto GENÉRICO:**
> *Ahora un caso con una clase que tiene un método — para ver qué se pierde en el viaje.*
> ```javascript
> class Usuario {
>   constructor(nombre) { this.nombre = nombre; }
>   saludar() { return `Hola, soy ${this.nombre}`; }
> }
>
> const ana = new Usuario("Ana");
> ana.saludar();   // "Hola, soy Ana"   -> funciona (es una instancia de Usuario)
>
> const texto = JSON.stringify(ana);   // '{"nombre":"Ana"}'   -> guardo solo los DATOS, no el metodo
> const copia = JSON.parse(texto);     // { nombre: "Ana" }    -> objeto GENERICO (plano)
> copia.saludar();   // ❌ TypeError: copia.saludar is not a function
> ```
> - *"El `copia` tiene el dato (`nombre`), pero perdió el método `saludar` — ya NO es un `Usuario`, es un objeto plano cualquiera."*

> **Tu explicación teórica precisa (el porqué):**
> Cuando serializás y luego deserializás, lo que vuelve es un **objeto genérico**: JSON es solo **texto plano**, no guarda información de **clases**, **prototipos** ni **tipos complejos**. Por eso `copia` perdió su método, y por eso —el caso que nos toca hoy— un **_Date_** vuelve como **texto** (pierde su "tipo fecha"). *"Regla que se llevan: JSON solo guarda **datos simples** (números, textos, booleanos, arrays, objetos planos, `null`); todo lo demás hay que **reconstruirlo** después de parsear."*

> **Code-along 3 — cómo se corrige (reconstruir el tipo):**
> *La solución es volver a construir el objeto en su tipo, pasándole los datos deserializados.*
> ```javascript
> // partiendo de 'copia' (el objeto generico del demo anterior):
> const restaurado = new Usuario(copia.nombre);   // reconstruyo la instancia con sus datos
> restaurado.saludar();          // "Hola, soy Ana"   -> vuelve a funcionar
> restaurado instanceof Usuario; // true             -> es un Usuario de verdad otra vez
> ```
> - *"Ese es el patrón: `parse` te devuelve los datos pelados; vos reconstruís el tipo que necesites pasándole esos datos. Con un `Usuario`, `new Usuario(...)`; con una fecha, `new Date(...)`."*

> **Conexión con el lab (lo que viene en la HU2):**
> *"En nuestra app el único tipo que perdemos es la **fecha**: al cargar, `plantilla.fecha` vuelve como texto. No reconstruimos las plantillas enteras a `Template` —porque solo LEEMOS sus datos, no llamamos métodos—; pero la fecha SÍ la reconstruimos con **_new Date(plantilla.fecha)_** para poder formatearla. Mismo principio que el `Usuario`, aplicado justo donde hace falta."*

---

#### 2.3 HU2 — recuperar las plantillas al abrir la app (lab)

**EN PANTALLA: VS CODE — `js/persistence.js` (la función `cargar`) y `js/app.js` (el arranque) + el `render()`.**

> **Tu apertura:**
> *"Segunda Historia de Usuario. Ya guardamos; ahora leemos al arrancar. Paso a paso, con su porqué."*

> **Criterios de aceptación de HU2 (la Definición de Terminado):**
> - Al abrir (o recargar) la app, aparecen las plantillas **guardadas antes**.
> - Si **no hay nada** guardado, la lista aparece vacía y sin errores.
> - Las fechas se siguen mostrando correctamente tras recargar.

---

> **Paso 1 · La función `cargar()` — leer y reconstruir**
> *Lee el texto de localStorage y lo reconstruye con `parse`; si no hay nada, devuelve una lista vacía.*
> ```javascript
> // en js/persistence.js
> function cargar() {
>   const guardado = localStorage.getItem(CLAVE);     // texto o null
>   return guardado ? JSON.parse(guardado) : [];      // si hay -> parsea; si no -> lista vacia
> }
> ```
> **Por qué:** **_getItem_** devuelve **texto o `null`** (si la clave no existe todavía). El **operador ternario** cubre los dos casos: si hay texto, **_JSON.parse_** lo reconstruye en el array de objetos; si es `null` (primera vez), arranca con **_[]_**. Sin ese ternario, `JSON.parse(null)` daría problemas.

---

> **Paso 2 · Cargar el estado al arrancar la app**
> *Al iniciar, poner en el estado lo cargado y renderizar UNA vez.*
> ```javascript
> // en app.js, al arrancar:
> state.plantillas = cargar();
> render();
> ```
> **Por qué:** **_cargar()_** se llama **una sola vez**, al iniciar — no en cada render (eso leería del almacén constantemente y pisaría los cambios). Queda cerrado el ciclo del día: **al arrancar** se carga (`parse`), **en cada cambio** se guarda (`stringify`, dentro de render). Dos mitades simétricas.

---

> **Paso 3 · Reconstruir la fecha en el `render()`**
> *Como la fecha volvió como texto, se la vuelve `Date` para poder formatearla.*
> ```javascript
> // en render(), al mostrar la fecha de cada plantilla:
> new Date(plantilla.fecha).toLocaleDateString("es-PE");
> ```
> **Por qué:** tras cargar, **_plantilla.fecha_** es un **string** (JSON no guardó el `Date`), y un string no tiene **_.toLocaleDateString()_**. Envolverla en **_new Date(plantilla.fecha)_** la reconstruye como fecha y el formateo vuelve a funcionar. *(Justo por esto en C14, en el `.sort()`, ya envolvíamos las fechas en `new Date(...)` — se anticipó este momento.)*

---

> **Checkpoint 2 (~55 min):** *Crear 2 plantillas y **recargar la página**: siguen ahí, con su fecha correcta. Esa es la diferencia con C13-C14 — la app ya recuerda entre sesiones.*

> **Cierre del Momento + puente al receso:**
> *"Ya tenemos la persistencia completa: guardamos en cada cambio, cargamos al arrancar, y aprendimos que JSON pierde los tipos —la fecha— que hay que reconstruir. Pero falta blindarla: ¿qué pasa si el texto guardado se corrompe? `JSON.parse` es delicado — con un texto inválido, explota. Después del receso lo protegemos. Receso de 10 minutos."*

---

## RECESO — 10 min

*(Punto medio del lab: guardar (HU1) y cargar (HU2) cerrados — la app ya recuerda. Después del receso, los tres detalles que la vuelven robusta: blindaje, borrado limpio y el filtro.)*

---

## MOMENTO 3 — Blindar la carga con try/catch (HU3)

**Tiempo:** ~25 min
**Parte del lab:** HU3 (Checkpoint 3 ~80 min)

> **OBJETIVO:** El alumno entiende que **_JSON.parse_** **lanza un error** si el texto guardado no es JSON válido (datos corruptos), y que sin protección eso rompería la app al arrancar. Reactiva el **`try/catch` de C12** en un contexto nuevo —parsear datos locales, no una API— envolviendo el `parse`: si falla, no rompe, devuelve `[]` y avisa con `console.warn`. Cierra corrompiendo el valor **desde la consola** (código) y comprobando que la app no explota: arranca vacía y usable.

> **Patrón pedagógico de M3:** **problema (con demo) → lab.** Momento corto. **No hay concepto nuevo:** `try/catch` se vio en C12 —se reactiva, no se re-enseña—; lo nuevo es el contexto (parsear datos LOCALES corruptos, no una API de red). El problema se hace SENTIR primero (ver `JSON.parse` explotar con texto inválido) y después se blinda. La HU sigue el formato paso → código → porqué.

---

#### 3.1 El problema: ¿y si los datos guardados están corruptos?

**EN PANTALLA: NAVEGADOR — la consola: probar `JSON.parse` con texto inválido y corromper la clave con `setItem`. (DevTools → Local Storage solo si se quiere VER el valor dañado.)**

> **Tu apertura (gancho, hacer SENTIR el problema):**
> *"`JSON.parse` tiene una parte delicada. Hasta ahora le dimos texto JSON válido y todo bien. ¿Pero qué pasa si el texto NO es JSON válido? Probemos en la consola."*
> ```javascript
> JSON.parse("[{titulo");     // Uncaught SyntaxError: ... in JSON
> ```
> *"No devuelve `null`, no devuelve `[]` — LANZA UN ERROR. Y un error sin atrapar mata lo que estaba corriendo."*

> **Pregunta de activación:**
> *"Ahora simulemos que los datos guardados se corrompen. Lo forzamos desde la consola —o pudo ser un bug—:"*
> ```javascript
> localStorage.setItem(CLAVE, "[{titulo");   // dejamos un texto invalido bajo nuestra clave
> ```
> *"Al recargar, `cargar()` le pasaría esa basura a `JSON.parse`. ¿Qué le pasa a la app?"*
> *(Respuesta guía: `JSON.parse` lanza el error, `cargar()` explota, el estado nunca se arma y la app arranca ROTA —pantalla en blanco o colgada—. Un solo dato corrupto tira toda la app.)*

> **Tu cierre del problema (puente):**
> *"No podemos dejar que un dato dañado rompa todo. Necesitamos atrapar ese error — y esa herramienta ya la conocen desde C12."*

---

#### 3.2 HU3 — que la app no se rompa con datos corruptos (lab)

**EN PANTALLA: VS CODE — la función `cargar()` de HU2, para blindarla.**

> **Tu apertura (reactivar C12):**
> *"En C12 usamos **_try/catch_** para que un error de la API no matara la Pokédex. Es exactamente lo que necesitamos ahora, en un contexto nuevo: atrapar el error de `JSON.parse` al leer datos locales corruptos. Vamos a blindar el `cargar()`."*

> **Criterios de aceptación de HU3 (la Definición de Terminado):**
> - Si el contenido guardado está **corrupto** (texto ilegible), la app **no se cuelga**.
> - En ese caso, arranca con la lista **vacía** y sigue usable.

---

> **Paso 1 · Envolver el `parse` en `try/catch`**
> *Tomamos el `cargar()` de HU2 y protegemos el punto que puede fallar: el `JSON.parse`.*
> ```javascript
> function cargar() {
>   const guardado = localStorage.getItem(CLAVE);
>   if (!guardado) return [];               // no hay nada -> lista vacia
>   try {
>     return JSON.parse(guardado);          // intenta reconstruir
>   } catch (error) {
>     console.warn("Datos corruptos, empiezo de cero:", error);
>     return [];                            // si falla, no rompas: lista vacia
>   }
> }
> ```
> **Por qué:** es el **_try/catch_** de C12, aplicado acá. El **_try_** envuelve lo único que puede explotar (**_JSON.parse_**); si el texto es válido, devuelve el array normal. Si NO es válido, el error salta al **_catch_** —que recibe el objeto `error`— y ahí decidimos **no romper**: avisamos con **_console.warn_** (para el dev) y devolvemos **_[]_** (la app arranca vacía pero viva). El **_if (!guardado) return []_** saca antes el caso "no hay nada guardado", así el `try` se ocupa solo del parseo.

---

> **Checkpoint 3 (~80 min):** *Desde la consola, corromper el valor: **_localStorage.setItem(CLAVE, "[{titulo")_**. Recargar: la app **NO explota** — arranca vacía y usable, y en la consola aparece el aviso `"Datos corruptos, empiezo de cero"`. (Si quieren, en DevTools → Local Storage ven el valor dañado antes de recargar.) HU3 terminada.*

> **Cierre del Momento + puente al siguiente:**
> *"Ahora la app aguanta datos corruptos sin romperse. Pero probemos otra cosa: borren todas las plantillas una por una… y miren la clave en DevTools. Sigue ahí, con un `[]` adentro. El almacén no quedó realmente limpio. El próximo paso es 'vaciar todo' de golpe y que la clave DESAPAREZCA — con un detalle fino sobre cuándo guardar y cuándo borrar."*

---

## MOMENTO 4 — Vaciar con removeItem + indicador (HU4)

**Tiempo:** ~25 min
**Parte del lab:** HU4 (Checkpoint 4 ~100 min)

> **OBJETIVO:** El alumno agrega la acción "vaciar todo" y un indicador de estado, entendiendo un detalle fino: si `guardar()` siempre hiciera `setItem`, "vaciar" dejaría la clave con `[]` en vez de borrarla. Lo resuelve con un **ternario** dentro de `guardar()` — si el estado quedó vacío, **_removeItem_** (borra la clave); si hay datos, **_setItem_** —. El botón vaciar solo hace `state.plantillas = []` + `render()` (que ya persiste). Cierra viendo la clave desaparecer del Local Storage al vaciar y volver al agregar.

> **Patrón pedagógico de M4:** **problema → lab.** Momento corto, sin concepto nuevo: **_removeItem_** ya se nombró en 1.3 (uno de los 3 métodos) y el **ternario** se reactiva. El aprendizaje es un **detalle fino** de robustez —vaciar de verdad = borrar la clave, no dejarla con `[]`—, entregado dentro de la HU. La HU sigue el formato paso → código → porqué; se apoya en la regla del módulo: el botón solo cambia el estado y renderiza, y `render()` → `guardar()` se ocupa de persistir (o borrar).

---

#### 4.1 El problema: "vaciar" deja la clave con `[]`

**EN PANTALLA: NAVEGADOR — borrar todas las plantillas una por una y ver, en DevTools, que la clave sigue ahí con `[]` adentro.**

> **Tu apertura (gancho, retomado de M3):**
> *"Borren todas las plantillas, una por una, y miren la clave en DevTools."* *(Hacerlo.)* *"La clave **_whatsapp-templates_** sigue ahí — con un `[]` adentro. La lista se ve vacía, sí, pero el almacén NO quedó realmente limpio."*

> **Pregunta de activación:**
> *"¿Por qué queda ese `[]` en vez de desaparecer la clave? Piensen en qué hace `guardar()` en cada `render()`."*
> *(Respuesta guía: `guardar()` SIEMPRE hace `setItem` — y `setItem(CLAVE, "[]")` guarda el texto `[]`. Como `guardar()` corre en cada render, aunque el estado esté vacío, igual escribe `[]`. Para vaciar DE VERDAD hay que **borrar la clave**, no guardar una lista vacía.)*

---

#### 4.2 HU4 — vaciar todo + indicador de estado (lab)

**EN PANTALLA: VS CODE — `index.html` (botón + indicador) y `js/persistence.js` (`guardar`) / `js/app.js`.**

> **Tu apertura:**
> *"Cuarta Historia de Usuario. Agregamos 'vaciar todo' y un indicador, y de paso afinamos `guardar()` para que borre la clave cuando corresponde. Paso a paso."*

> **Criterios de aceptación de HU4 (la Definición de Terminado):**
> - Existe una acción para **vaciar todas** las plantillas.
> - Al vaciar, la lista y el almacenamiento quedan **limpios**.
> - Un pequeño indicador muestra el estado (ej. "Guardado").

---

> **Paso 1 · Botón "vaciar" + indicador en el HTML**
> *Un botón para vaciar y un texto donde mostrar el estado del guardado.*
> ```html
> <button id="btn-vaciar" class="text-xs text-red-600">Vaciar todo</button>
> <p id="estado" class="text-xs text-slate-400">Listo</p>
> ```
> **Por qué:** el botón dispara la acción de vaciar; el `<p id="estado">` es donde el indicador dirá "Guardado ✓" o "Vacío".

---

> **Paso 2 · El botón vaciar: limpiar el estado y renderizar**
> *Vaciar es simplemente dejar el estado sin plantillas y volver a dibujar.*
> ```javascript
> document.getElementById("btn-vaciar").addEventListener("click", function () {
>   state.plantillas = [];
>   render();     // render -> guardar(); como no queda nada, se borra la clave
> });
> ```
> **Por qué:** el botón **NO toca `localStorage` directamente** — solo cambia el estado (`[]`) y llama a `render()`. Coherente con el módulo: `render()` ya persiste por nosotros. Toda la lógica de "guardar o borrar" vive en un solo lugar: `guardar()`.

---

> **Paso 3 · Afinar `guardar()`: un ternario que borra o guarda + el indicador**
> *Si el estado quedó vacío, borramos la clave; si hay datos, la guardamos. Y mostramos el estado.*
> ```javascript
> function guardar() {
>   state.plantillas.length === 0
>     ? localStorage.removeItem(CLAVE)                                  // vacio -> borra la clave
>     : localStorage.setItem(CLAVE, JSON.stringify(state.plantillas));  // hay datos -> guarda
>
>   document.getElementById("estado").textContent =
>     state.plantillas.length > 0 ? "Guardado ✓" : "Vacío";            // indicador
> }
> ```
> **Por qué:** el **ternario** decide qué método usar: con el estado vacío, **_removeItem_** hace que la clave **desaparezca** de verdad (no queda `[]`); con datos, **_setItem_** guarda como siempre. Si `guardar()` siempre hiciera `setItem`, "vaciar" dejaría el `[]` que vimos en el problema. El segundo ternario arma el texto del indicador. *(El ternario se reactiva acá para dos decisiones cortas.)*

---

> **Checkpoint 4 (~100 min):** *Pulsar "Vaciar todo" → la lista se vacía y la **clave `whatsapp-templates` DESAPARECE** del Local Storage; el indicador dice "Vacío". Agregar una plantilla → la clave vuelve y el indicador dice "Guardado ✓". HU4 terminada.*

> **Cierre del Momento + puente al siguiente:**
> *"Ya persistimos las plantillas y las borramos bien. Pero falta un detalle: escriban algo en el buscador y recarguen. El filtro se perdió — el buscador arranca vacío. El filtro también es parte del estado; también debería sobrevivir. El último paso lo persiste — y trae el contraste que resume todo el día: array vs texto."*

---

## MOMENTO 5 — Persistir el filtro + cierre (HU5)

**Tiempo:** ~25 min
**Parte del lab:** HU5 (Checkpoint 5 ~115 min) + Cierre

> **OBJETIVO:** El alumno persiste también **_state.filtro_**, y en el proceso fija el contraste que resume el día: las **plantillas** (array de objetos) necesitan `JSON.stringify`/`parse`; el **filtro** (un texto) va **directo, sin stringify**. Usa una segunda clave, lo guarda en `guardar()` y lo recupera al arrancar, reflejándolo en el buscador. Cierra la clase con las 2 tesis, los logros opcionales y el puente a C16.

> **Patrón pedagógico de M5:** **problema → lab → cierre.** Sin concepto nuevo: se aplica lo del día a otro dato del estado (el filtro), y en el contraste aparece el **remate** —array (objetos) necesita `JSON`; texto va directo—. La HU sigue el formato paso → código → porqué. El Momento cierra la clase con recap, logros y puente. **C15 NO cierra módulo** (lo hace C16) — por eso hay cierre con recap y puente.

---

#### 5.1 El problema: el filtro también se pierde

**EN PANTALLA: NAVEGADOR — escribir un filtro en el buscador, recargar, y ver que el buscador arranca vacío (el filtro se perdió).**

> **Tu apertura (gancho, retomado de M4):**
> *"Escriban `vent` en el buscador — la lista se filtra. Ahora recarguen."* *(Hacerlo.)* *"El buscador arrancó vacío: el filtro se perdió. Pero el filtro (`state.filtro`) también es parte del estado… y ya sabemos persistir el estado. Debería sobrevivir igual que las plantillas."*

> **Pregunta de activación:**
> *"El filtro también hay que guardarlo. Pero una diferencia clave con las plantillas: el filtro, ¿qué TIPO de dato es?"*
> *(Respuesta guía: es un **texto** —lo que el usuario escribió—. Las plantillas eran un array de objetos, por eso necesitaban `JSON.stringify`/`parse`. El filtro ya es texto… así que va directo. Ese es el remate del día.)*

---

#### 5.2 HU5 — recordar también el filtro (lab)

**EN PANTALLA: VS CODE — `js/persistence.js` (`guardar`) y `js/app.js` (el arranque).**

> **Tu apertura:**
> *"Quinta y última Historia de Usuario. Persistimos el filtro — y de paso fijamos la diferencia entre guardar un objeto y guardar un texto. Paso a paso."*

> **Criterios de aceptación de HU5 (la Definición de Terminado):**
> - Al escribir un filtro y **recargar**, el filtro **sigue aplicado** y el buscador muestra el texto.
> - Si no había filtro guardado, el buscador arranca **vacío**.

---

> **Paso 1 · Una segunda clave para el filtro**
> *El filtro se guarda aparte de las plantillas, bajo su propia clave.*
> ```javascript
> // en js/persistence.js
> const CLAVE_FILTRO = "whatsapp-templates-filtro";
> ```
> **Por qué:** son dos datos distintos (la lista y el texto del filtro) → dos claves distintas en el mismo `localStorage`.

---

> **Paso 2 · Guardar el filtro en `guardar()` — SIN `stringify`**
> *El filtro ya es texto, así que va directo al almacén.*
> ```javascript
> function guardar() {
>   // ...lo de las plantillas (removeItem/setItem) de HU4...
>   localStorage.setItem(CLAVE_FILTRO, state.filtro ?? "");   // el filtro es TEXTO: sin stringify
> }
> ```
> **Por qué (el remate del día):** las **plantillas** son un **array de objetos** → hay que traducirlas con **_JSON.stringify_** antes de guardar (y `parse` al leer). El **filtro** es un **texto** → se guarda **tal cual**, sin traducir. La regla que se llevan: **`localStorage` siempre guarda texto; cuando tu dato YA es texto, no hay nada que convertir.** El **_?? ""_** da un valor vacío por defecto si el filtro es `null`/`undefined`.

---

> **Paso 3 · Recuperar el filtro al arrancar + reflejarlo en el buscador**
> *Al iniciar, leer el filtro guardado, ponerlo en el estado y mostrarlo en el input.*
> ```javascript
> // en app.js, al arrancar (junto a lo de las plantillas):
> state.plantillas = cargar();
> state.filtro = localStorage.getItem(CLAVE_FILTRO) ?? "";     // recupera el filtro (o vacio)
> document.getElementById("buscador").value = state.filtro;    // muestralo en el input
> render();
> ```
> **Por qué:** al leer el filtro tampoco hace falta `JSON.parse` —ya es texto—. Se pone en **_state.filtro_** (para que el `render()` filtre) y en **_buscador.value_** (para que el usuario VEA el texto en el input). El **_?? ""_** cubre el caso "no había filtro guardado" → buscador vacío.

---

> **Checkpoint 5 (~115 min):** *Escribir `vent` en el buscador y **recargar** → el filtro sigue aplicado (solo se ven las `#ventas`) y el buscador muestra `vent`. HU5 terminada — el lab está completo.*

---

#### 5.3 Cierre de la clase — qué se llevan y qué viene

**EN PANTALLA: EXCALIDRAW — el ciclo de persistencia (cargar al abrir / guardar en cada cambio) + el arco del M4: C13 → C14 → C15 → C16 (Proyecto Integrador).**

> **Recap — las 2 tesis del día:**
> *"Dos ideas que se llevan, más allá de esta app:"*
> 1. *"**`localStorage` solo guarda TEXTO; JSON es el traductor** entre tus objetos y ese texto. `stringify` para guardar (objeto→texto), `parse` para leer (texto→objeto). Todo el día giró alrededor de ese puente."*
> 2. *"**En la traducción a JSON se pierden los tipos complejos.** La fecha `Date` volvió como texto; lo que necesiten como tipo original, lo reconstruyen (`new Date(...)`). Y cuando el dato YA es texto —el filtro—, no hay nada que traducir."*

> **Dónde quedamos:**
> *"Hoy cerramos la deuda que arrastramos desde C13: la app ya no olvida. Guarda en cada cambio, carga al arrancar, aguanta datos corruptos, borra limpio y recuerda hasta el filtro. Pasó de 'ejercicio de clase' a 'algo que la gente usaría'."*

> **Logros adicionales (opcionales — si sobra tiempo o para casa):**
> - 🟢 **Exportar:** mostrar en consola **_JSON.stringify(state.plantillas, null, 2)_** (con sangría) para ver los datos ordenados y legibles.
> - 🟡 **Contador persistente:** guardar en otra clave cuántas veces se abrió la app.
> - 🔴 **Fecha de edición:** al editar una plantilla, actualizar un campo `editadaEl` con `new Date()` y persistirlo.

> **Cierre + puente al M4:**
> *"Con la persistencia resuelta, tienen la base completa de una app real: datos con forma, CRUD, cálculos derivados y memoria entre sesiones. La próxima clase, **C16**, es el **lab calificado** que cierra el módulo —el Proyecto Integrador—, y todo lo de hoy es su cimiento. Una app profesional recuerda; la suya ya lo hace."*
