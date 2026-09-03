# CLASE 09 — JavaScript Moderno y Render Dinámico (apertura de Módulo 3)

> **Curso:** Code 201 · **Módulo 3** — Clase 1 de 4 (apertura)
> **Proyecto víctima:** **Pokédex** (repo nuevo `pokedex`) — reemplaza al Gestor. Crece todo el módulo: hoy datos locales, en C11 la API real.
> **NO es lab calificado** (el calificado del M3 es C12) · **no pide README** todavía (C12, con Markdown).
> **Fuente de inputs:** `mi-sistema/class-09/README.md` + `lab/README.md` + `slides/README.md`.
> **Duración:** 3h reales · se prepara para 2h30 (≈150 min) · colchón 30 min · receso 10 min entre M2 y M3.

---

## Idea fuerza de la clase

**Los datos mandan; el HTML es su reflejo.** En vez de escribir el HTML de cada Pokémon a mano, se **genera desde los datos**: un array de objetos entra, una rejilla de tarjetas sale. La clase combina la **sintaxis moderna (ES6+)** que hace el código legible y seguro, con el **render dinámico del DOM** que convierte datos en interfaz. Todo se organiza en **Historias de Usuario** (la forma en que la industria define qué construir). Hoy sin internet: array local con **propiedades planas y simples** (`nombre`, `imagen`, `tipos`), a propósito fáciles para enfocarse en el render; en C11 los datos vendrán de la API real.

---

## Tabla de tiempos (preparado para 2h 30min)


| Momento    | Tema                                                                | Parte del lab | Tiempo  |
| ------------ | --------------------------------------------------------------------- | --------------- | --------- |
| **M1**     | Kahoot + apertura + Historia de Usuario + maqueta                   | Setup + HU1   | ~35 min |
| **M2**     | Template literals + el patrón render                               | HU2           | ~40 min |
| **RECESO** | —                                                                  | —            | 10 min  |
| **M3**     | Destructuring + badges (`.map`/`.join`) + acceso seguro (`?.`/`??`) | HU3           | ~45 min |
| **M4**     | Filtrado en vivo (HU4) + cierre + puente a C10                      | HU4 + Cierre  | ~30 min |

> Total preparado: ~150 min. El colchón de 30 min absorbe el trabajo autónomo en cada Checkpoint del lab.

---

## Cadena Problema → Solución de la clase

```
M1: "necesitamos definir QUÉ construir y a dónde llegar" → Historia de Usuario + maqueta de 1 tarjeta (HU1)
     ↓ (la tarjeta a mano está linda, pero son 6… o 1000)
M2: "no vamos a escribir el HTML de cada Pokémon a mano" → generar desde datos: template literals + patrón render (HU2)
     ↓ (las tarjetas salen, pero les faltan los tipos y se rompen si falta un dato)
M3: "el código es ruidoso y frágil" → sintaxis moderna: destructuring + badges (.map/.join) + acceso seguro (?./??)  (HU3)
     ↓ (las tarjetas salen y son robustas, pero la lista es estática: ¿cómo encuentro uno rápido?)
M4: "quiero filtrar la lista al instante" → re-render reactivo: el MISMO render con datos filtrados (HU4)
     ↓ (la UI reacciona… pero los datos siguen LOCALES y listos al instante)
M4 (cierre): "una API real TARDA en responder" → puente a C10 (asincronía y promesas)
```

---

## MOMENTO 1 — Kahoot + apertura + Historia de Usuario + maqueta

**Tiempo:** ~35 min
**Parte del lab:** Setup Inicial + HU1

> **OBJETIVO:** El alumno entra al M3 con un **Kahoot de repaso de M1-M2**, arranca el proyecto Pokédex, entiende la **Historia de Usuario** como forma de definir features, arma el setup (repo `pokedex`, `index.html` base, array local) y **maqueta UNA tarjeta con Tailwind** para ver a dónde quiere llegar. Al cerrar M1, tiene el proyecto montado y una tarjeta de ejemplo bien hecha.

> **Patrón pedagógico de M1:** apertura de módulo con **Kahoot** (ritual de entrada + repaso de lo previo) + **B0 (Historia de Usuario) antes del código**. **NO hay un punto de "refuerzo" suelto:** los conceptos previos (arrays de objetos de C06, DOM de C08) se **reactivan inline donde se usan** (ej. al recorrer con `.forEach` en M2, al tomar `#resultado` con `getElementById`) — no como bloque forzado al inicio. La maqueta (HU1) reusa Tailwind de C08 (solo se aplica) y funciona como "foto del destino" antes de generar nada con JS.

#### 1.1 Kahoot de apertura del módulo (10 preguntas, M1-M2)

**EN PANTALLA: KAHOOT — 10 preguntas de repaso de los Módulos 1 y 2.**

> **Tu apertura:**
> *"Antes de entrar al módulo nuevo, un Kahoot rápido: 10 preguntas de todo lo que vimos en los Módulos 1 y 2 — HTML, CSS, Flexbox, Grid, Tailwind, y JavaScript imperativo, funcional y objetos. Sirve para sacudir la memoria y arrancar parejos."*

> **Nota para Eric:** las 10 preguntas se arman aparte (ver punto pendiente). Acá solo queda reservado el momento de apertura. Es ritual de entrada + diagnóstico rápido de qué quedó — sin nota, solo para activar.

---

#### 1.2 Apertura — nuevo módulo, nuevo proyecto

**EN PANTALLA: EXCALIDRAW — Panel 1.1 (mapa del Módulo 3): la Pokédex que crece clase a clase (C09 render local → C10 promesas → C11 API real → C12 errores + README).**

> **Tu apertura:**
> *"Cerramos el Gestor de Presupuesto: era el proyecto del Módulo 2 y quedó como app real. Hoy arranca el Módulo 3 con un proyecto nuevo: una **Pokédex**, una app que muestra y busca Pokémon. Y no es una clase suelta — es una sola app que va a crecer durante las próximas cuatro clases."*

> **Tu explicación teórica precisa (el mapa del módulo):**
>
> ```text
> C09  JS Moderno   → mostrar Pokémon desde datos LOCALES   ← HOY
> C10  Asincronía   → Promesas (API simulada)
> C11  fetch + JSON → datos REALES de la PokeAPI
> C12  Errores      → app robusta + README (Markdown)        ← lab calificado
> ```
>
> - *"Hoy trabajamos SIN internet: una lista local de 6 Pokémon, con datos planos y simples. Así nos concentramos en lo nuevo —generar la interfaz desde datos— sin el ruido de la red."*
> - *"La habilidad central de hoy es la base de todo lo que viene: cuando en C11 los datos lleguen de una API real, el render ya va a estar hecho."*

---

#### 1.3 Historia de Usuario (B0)

**EN PANTALLA: EXCALIDRAW — Panel 1.2 (plantilla Historia de Usuario): "Como ___ quiero ___ para ___" con los tres huecos resaltados + una checklist de criterios de aceptación.**

> **Tu apertura:**
> *"Antes de codear, una pregunta de diseño: ¿cómo se define QUÉ construir? En la industria no se arranca tirando código — se escribe una **Historia de Usuario**. Es la primera vez que la vemos, y es la forma estándar en que un equipo define una funcionalidad antes de programarla. Hoy la conocemos y la usamos para organizar todo el lab."*

> **Tu explicación teórica precisa:**
> Una **Historia de Usuario** describe una funcionalidad desde la perspectiva de quién la usa: QUIÉN la necesita, QUÉ quiere hacer y PARA QUÉ. Define el "qué" y el "porqué", no el "cómo".
>
> ```text
> Como [rol/usuario], quiero [acción] para [beneficio].
> ```
>
> - *"El lab de hoy está organizado en Historias de Usuario: HU1, HU2, HU3, HU4. Cada una es una funcionalidad con su frase y sus **criterios de aceptación**."*

> **Ejemplo completo — cómo se escribe una HU (modelo, con una app que ya conocen):**
> *Tomemos algo de una app de música (tipo Spotify) y desarmémoslo en sus tres partes:*
>
> ```text
> Como    usuario de la app de música                  ← ROL       (quién la necesita)
> quiero  marcar canciones como favoritas              ← ACCIÓN    (qué quiere hacer)
> para    encontrarlas rápido después                  ← BENEFICIO (para qué le sirve)
> ```
>
> *"Las tres partes siempre: rol, acción, beneficio. Si falta el 'para', no se sabe POR QUÉ vale la pena hacerlo."*
>
> *Y debajo, sus **criterios de aceptación** (la Definición de Terminado — escritos como resultados, no como código):*
>
> - ✓ Cada canción tiene un control para marcarla como favorita.
> - ✓ Las canciones marcadas aparecen en una sección "Favoritos".
> - ✓ Al quitar una de favoritos, desaparece de esa sección.
>
> *"Así se ve una HU bien definida: la frase dice el QUÉ y el PARA QUÉ; los criterios dicen cuándo está terminada, en términos de lo que el usuario VE o logra. Ninguno dice cómo programarlo — el cómo se decide al construir. En un rato leemos las HU reales de nuestro proyecto y trabajamos con ellas."*

> **El método a resaltar — el criterio define cuándo está TERMINADO, antes de construir:**
> *"Y acá está lo importante de cómo trabaja la industria: NO se arranca a codear y después se ve si quedó bien. Primero se escriben los **criterios de aceptación** —qué tiene que cumplirse para dar la historia por terminada— y RECIÉN AHÍ se construye, apuntando a cumplirlos. El criterio es la **Definición de Terminado**, y se fija antes."*
>
> - *"Por eso en el lab los criterios van JUSTO DEBAJO de cada HU, antes del código. El orden es: leo la HU → leo sus criterios → construyo para cumplirlos."*
> - *"Y ojo cómo están escritos: como RESULTADOS que el usuario ve («las tarjetas se muestran en rejilla», «se adapta a la pantalla»), no como instrucciones técnicas («usá grid de Tailwind»). El criterio dice el QUÉ; el cómo lo decidís vos al construir."*

> **Tu analogía:**
> *"Una HU es como el pedido a un sastre: «como invitado a una boda, quiero un traje azul entallado para verme formal». Le decís quién sos, qué querés y para qué — no cómo cortar la tela. Los criterios de aceptación son el probador: las mangas llegan a la muñeca, el saco cierra. Así sabés que está listo."*

---

#### 1.4 Setup del proyecto (lab — Setup)

**EN PANTALLA: VS CODE — crear el repo `pokedex` y los archivos base, en vivo.**

> **Tu apertura:**
> *"Montemos el proyecto. Tres cosas: el repo, el HTML base con el contenedor vacío, y los datos locales."*

> **Code-along del lab — Setup:**
>
> 1. Crear en GitHub el repo **_pokedex_**, clonarlo, trabajar sobre `main`. Estructura: `index.html` + `js/app.js`.
> 2. `index.html` base: Tailwind por CDN (ya lo dominan de C08) + el contenedor vacío donde el JS pintará las tarjetas:
>    ```html
>    <body class="bg-slate-100 min-h-screen p-6">
>      <h1 class="text-3xl font-bold text-center text-slate-800 mb-6">Pokédex</h1>
>      <div id="resultado" class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto"></div>
>      <script src="js/app.js"></script>
>    </body>
>    ```
> 3. Pegar el array local **_pokemonLocal_** al inicio de `js/app.js` — 6 Pokémon con propiedades planas (**_nombre_**, **_imagen_**, **_tipos_**).

> **Convención del módulo (que la recuerden):**
> *"El contenedor de resultados SIEMPRE es **_&lt;div id="resultado"&gt;_**. No le cambien el `id` — lo vamos a reusar en C10, C11 y C12. Es un contrato del proyecto."*

---

#### 1.5 HU1 — maqueta de UNA tarjeta (Tailwind)

**EN PANTALLA: EXCALIDRAW — Panel 1.3 (anatomía de la tarjeta + la forma del dato): la tarjeta (imagen / nombre / badges) y, al lado, el objeto Pokémon plano (`nombre`, `imagen`, `tipos`) con flechas dato → lugar en la tarjeta.**

> **Tu apertura:**
> *"Primera Historia de Usuario. Y antes de tocar nada, leemos qué cuenta como TERMINADO: los criterios de aceptación. Eso es lo que tiene que cumplirse — recién después construimos para lograrlo."*

> **Criterios de aceptación de HU1 (la Definición de Terminado — se leen ANTES de construir):**
>
> - Las tarjetas se muestran en **rejilla**, no apiladas en una sola columna.
> - Cada tarjeta deja ver de un vistazo la **imagen**, el **nombre** y el/los **tipo(s)**.
> - La rejilla se **adapta al tamaño de pantalla** (menos columnas en móvil, más en escritorio).
>
> *"Fíjense que ninguno dice 'usá grid de Tailwind' — dicen QUÉ tiene que verse. El cómo lo elegimos nosotros ahora."*

> **Code-along del lab — HU1 (construir para cumplir esos criterios):**
>
> 1. Pegar TEMPORALMENTE una tarjeta de ejemplo dentro de **_#resultado_** para verla:
>    ```html
>    <article class="bg-white rounded-xl shadow p-4 text-center">
>      <img src="...pokemon/25.png" alt="pikachu" class="w-24 h-24 mx-auto">
>      <h2 class="capitalize font-bold text-slate-800 mt-2">pikachu</h2>
>      <div class="flex gap-1 justify-center mt-2">
>        <span class="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded-full">electric</span>
>      </div>
>    </article>
>    ```
> 2. Confirmar la rejilla (`grid grid-cols-2 md:grid-cols-3` — ya viene en el HTML base) y que la tarjeta se ve: imagen centrada, nombre en negrita, badge de tipo.
> 3. **Borrar la tarjeta de prueba** — en HU2 la va a generar el JS.

> **Verificar (Checkpoint 1):**
> Se ve al menos una tarjeta de ejemplo bien maquetada dentro de la rejilla. La tarjeta de prueba queda BORRADA antes de seguir.

> **Cierre del Momento + puente a M2:**
> *"Tenemos la foto del destino y el proyecto montado. Pero esa tarjeta la escribí a mano… y son 6 Pokémon. ¿Y si fueran 600, como en la Pokédex real? Nadie escribe 600 tarjetas a mano. Lo que sigue es generarlas TODAS desde el array, con JavaScript."*

---

## MOMENTO 2 — Template literals + el patrón render

**Tiempo:** ~40 min
**Parte del lab:** HU2

> **OBJETIVO:** El alumno aprende a **generar HTML desde datos** — el corazón de la clase. Conoce los **template literals** (iluminados: ya los usó en C08), `createElement` + `appendChild`, la diferencia `innerHTML` vs `textContent`, y **el patrón render** (limpiar → recorrer → agregar). Al cerrar M2, las 6 tarjetas aparecen generadas por JS, no escritas a mano.

> **Patrón pedagógico de M2:** acá vive la habilidad central. Se integra el **debate "render dinámico vs HTML estático"** (¿qué pasa con 1000 Pokémon?). El template literal se **ilumina** (lo usaron en la función `liHTML` de C08 sin nombrarlo). Orden: las piezas (template literal, createElement, innerHTML) → el patrón que las une → aplicarlo al proyecto.

#### 2.1 Template literal

**EN PANTALLA: EXCALIDRAW — Panel 2.1 (concatenación vs template literal): la misma frase de las dos formas, con los `${...}` resaltados como "huecos que se rellenan".**

> **Tu apertura (resaltar el salto respecto a C08):**
>
> "Acá está el paso nuevo de verdad. En C08 tocamos el DOM por primera vez, pero SOLO para **modificar** elementos que YA existían en el HTML: les cambiábamos el contenido con `innerHTML`, leíamos un input. Nunca creamos uno. Hoy damos el salto: **crear elementos nuevos desde JavaScript**, desde cero, y meterlos en la página. Eso es lo que permite generar tarjetas que no existen en el HTML."

> *"Para generar HTML desde datos necesitamos armar strings de HTML largos y cómodos. La herramienta es el **template literal**. *

> **Tu explicación teórica precisa:**
>
> ```javascript
> const nombre = "pikachu";
> const a = "Hola, " + nombre + "!";   // antes: concatenación con +
> const b = `Hola, ${nombre}!`;        // ahora: template literal
> ```
>
> - *"Backticks (`` ` ``), no comillas. Dentro, `${...}` inserta cualquier valor."*
> - *"Y lo que lo hace ideal para HTML: respeta **varias líneas**. Podés escribir un bloque de HTML completo, legible, con los datos incrustados."**

---

#### 2.2 Crear elementos desde JS: `createElement` + `appendChild` (+ `innerHTML` vs `textContent`)

**EN PANTALLA: EXCALIDRAW — Panel 2.2 (flujo CREAR → LLENAR → INSERTAR): tres pasos en fila con una flecha entre cada uno, y debajo de cada paso el método/propiedad que lo ejecuta — CREAR: `createElement("article")` · LLENAR: `.className` + `.innerHTML` (o `.textContent`) · INSERTAR: `appendChild`. Etiqueta: "el nodo no se VE hasta el paso 3 (insertar)". + Panel 2.3 (`innerHTML` vs `textContent`: el mismo string, dos resultados).**

> **Tu explicación teórica precisa:**
>
> *"En C08 solo MODIFICÁBAMOS elementos que ya existían en el HTML. Hoy aprendemos a CREARLOS desde cero. Estos son los métodos y propiedades que vamos a usar:"*
>
>
> | Método / Propiedad             | Qué hace                                                                          |
> | --------------------------------- | ------------------------------------------------------------------------------------ |
> | `document.createElement("tag")` | **crea** un nodo nuevo (vive en memoria, todavía NO se ve)                        |
> | `elemento.className = "..."`    | le asigna sus**clases CSS** (las de Tailwind)                                      |
> | `elemento.innerHTML = "..."`    | define su**contenido como HTML** (interpreta y crea etiquetas) — ya visto en C08  |
> | `elemento.textContent = "..."`  | define su contenido como**texto plano** (sin interpretar etiquetas)                |
> | `contenedor.appendChild(nodo)`  | **inserta** el nodo como hijo del contenedor → recién ahí aparece en la página |
>
> *"Con esas piezas, crear una tarjeta son tres pasos: crear → llenar → insertar."*
>
> ```javascript
> const articulo = document.createElement("article");   // 1. CREA el nodo (en memoria)
> articulo.className = "bg-white rounded-xl shadow p-4 text-center";
> articulo.innerHTML = `<h2>${pokemon.nombre}</h2>`;     // 2. lo LLENA (innerHTML, ya visto en C08)
> contenedor.appendChild(articulo);                      // 3. lo INSERTA en la página
> ```
>
> - *"**_createElement_** crea el nodo, pero vive solo en memoria — todavía NO se ve."*
> - *"**_appendChild_** lo cuelga dentro de un elemento que ya está en la página (`#resultado`). Recién ahí aparece."*
> - *"**_innerHTML_** lo rellena interpretando el string como HTML (eso ya lo usaron en C08). Su par, **_textContent_**, pone el string como texto plano —sin interpretar etiquetas—; sirve cuando solo querés texto."*

---

#### 2.3 El patrón render (limpiar → recorrer → agregar)

**EN PANTALLA: EXCALIDRAW — Panel 2.4 (el patrón render): array de objetos → función render (3 pasos numerados) → rejilla de tarjetas, con la flecha "los datos mandan → el HTML es su reflejo".**

> **Tu apertura:**
> *"Ya sabemos crear UNA tarjeta. La receta para mostrar TODA la lista tiene tres pasos, y es la misma en cualquier app web: limpiar, recorrer, agregar."*

> **Tu explicación teórica precisa:**
>
> ```javascript
> function render(lista) {
>   contenedor.innerHTML = "";                 // 1. LIMPIA lo anterior
>   lista.forEach(function (pokemon) {
>     const tarjeta = crearTarjeta(pokemon);   // 2. CREA el nodo de cada uno
>     contenedor.appendChild(tarjeta);         // 3. lo AGREGA
>   });
> }
> ```
>
> - *"El paso 1 es clave: si no limpio primero, cada vez que renderizo se APILAN tarjetas duplicadas sobre las viejas."*
> - *"`forEach` (de C06) recorre el array; por cada Pokémon, crea su tarjeta y la inserta."*
> - *"Lo potente: `render` separa los DATOS (el array) de la PRESENTACIÓN. Cambia el array y volvé a renderizar → cambia la pantalla."*

> **Tu analogía:**
> *"Es la pizarra de «especiales del día» de un restaurante: cada mañana la borrás entera y la reescribís según lo que hay hoy. No tachás sobre lo de ayer (eso acumula desorden) — borrás y reflejás la lista actual. La pizarra siempre muestra lo que hay en la cocina; la UI siempre refleja los datos."*

---

#### 2.4 HU2 — generar las tarjetas desde el array

**EN PANTALLA: VS CODE — `js/app.js`, en vivo sobre el navegador.**

> **Tu apertura:**
> *"Segunda Historia de Usuario. Primero su Definición de Terminado, después construimos."*

> **Criterios de aceptación de HU2 (la Definición de Terminado — antes de construir):**
>
> - ✓ Todas las tarjetas de la lista aparecen en la rejilla, generadas por el JS (no escritas a mano).
> - ✓ Cada tarjeta muestra su imagen y su nombre.
> - ✓ Si la lista de datos cambia (agregar o quitar un Pokémon), la rejilla muestra exactamente esos, sin duplicados ni restos.

> **Code-along del lab — HU2 (construir para cumplir esos criterios):**
>
> 1. Tomar el contenedor: `const contenedor = document.getElementById("resultado");`.
> 2. `crearTarjeta(pokemon)`: `createElement("article")` + `className` + `innerHTML` con un template literal (imagen + nombre, usando `${pokemon.imagen}` y `${pokemon.nombre}`).
> 3. `render(lista)`: limpiar → `forEach` → crear → `appendChild`.
> 4. Llamar `render(pokemonLocal)` para pintar.

> **Verificar (Checkpoint 2):**
> Las 6 tarjetas aparecen solas, generadas por JS. Borrar una entrada del array → recargar → esa tarjeta desaparece. (Demuestra el 3er criterio: la UI depende de los datos.)

> **Cierre del Momento + puente a M3:**
> *"Las tarjetas se generan solas — gran paso. Pero todavía les falta algo: no muestran los TIPOS de cada Pokémon, y si a alguno le faltara la imagen, la tarjeta se rompería. En el próximo bloque las completamos con los tipos y las blindamos contra datos incompletos — escribiéndolas con la sintaxis moderna que usa la industria."*

---

## RECESO — 10 minutos

---

## MOMENTO 3 — Destructuring + badges (`.map`/`.join`) + acceso seguro (`?.`/`??`)

**Tiempo:** ~45 min
**Parte del lab:** HU3

> **OBJETIVO:** El alumno completa y blinda `crearTarjeta` con tres herramientas modernas: **destructuring** (leer las propiedades de forma legible, declarando arriba qué usa la función), **`.map` + `.join`** (convertir el array `tipos` —textos— en badges HTML), y **acceso seguro `??` + `?.`** (respaldo para datos que faltan). Al cerrar M3, las tarjetas muestran todos sus tipos y no se rompen si falta un dato.

> **Patrón pedagógico de M3:** **refactor aditivo (§6.4.7)** sobre el `crearTarjeta` de M2 — pero ojo con el encuadre de cada herramienta: **destructuring NO arregla un problema, es estilo/legibilidad** (se presenta como la forma moderna de leer propiedades, no como "dejar de repetir `pokemon.`"); **`.map`/`.join`** agrega una feature que faltaba (los tipos); **`??`/`?.`** sí resuelve un dolor real (la tarjeta se rompía con datos faltantes). Patrón por concepto: **teórico + sintaxis → ejemplo en código DISTINTO al lab → aplicar al proyecto**. **Spread queda OPCIONAL** (Logro 2 del lab) — no es parte del cuerpo de la HU3.

#### 3.1 Destructuring

**EN PANTALLA: EXCALIDRAW — Panel 3.1 (destructuring): un objeto a la izquierda y flechas que "sacan" sus propiedades hacia variables sueltas a la derecha.**

> **Tu apertura:**
> *"Antes de agregar los tipos y blindar la tarjeta, una herramienta de estilo que usa todo el JavaScript moderno: el **destructuring**. Cuando una función va a usar varias propiedades de un objeto, lo prolijo es 'sacarlas' y nombrarlas al inicio. Logra dos cosas: el código de abajo queda más corto, y de un vistazo se ve QUÉ propiedades usa la función."*

> **Tu explicación teórica precisa (concepto + sintaxis):**
> El **destructuring** saca propiedades de un objeto (o ítems de un array) a variables en una sola línea. No cambia lo que el código hace — lo hace más legible.
>
> ```javascript
> const { propA, propB } = objeto;   // de OBJETO: por nombre de propiedad
> const [primero, segundo] = array;  // de ARRAY: por posición
> ```
>
> **REGLAS**
>
>> Se **usan llaves {}** a la izquierda del = para indicar qué propiedades quieres extraer.
>>
>
> * Adentro defines las variables
> * **Orden NO importa :** Las propiedades se extraen por**nombre** , no por orden.
> * **Nombre debe coincidir :** Debes usar el**mismo nombre** de la propiedad del objeto.

> **Ejemplo en código (distinto al lab):**
>
> ```javascript
> const usuario = { nombre: "Ana", edad: 30, pais: "Perú" };
>
> // sin destructuring
> const nombre = usuario.nombre;
> const edad   = usuario.edad;
>
> // con destructuring — una línea
> const { nombre, edad } = usuario;   // nombre = "Ana", edad = 30
> ```
>
> *"Los nombres entre llaves coinciden con las claves del objeto. Si la propiedad no existe, la variable queda `undefined` — no rompe."*

> **Aplicar al proyecto:**
> *"Al inicio de `crearTarjeta` declaramos las tres propiedades que la tarjeta va a usar:"*
>
> ```javascript
> const { nombre, imagen, tipos } = pokemon;   // queda claro qué usa la función; abajo: nombre, imagen, tipos directo
> ```
>
> *(El destructuring de array —`const [principal] = tipos`— queda como Logro opcional.)*

---

#### 3.2 Badges de tipo con `.map` + `.join`

**EN PANTALLA: EXCALIDRAW — Panel 3.2 (de array a string): array de textos → `.map` (un `<span>` por cada uno) → `.join("")` → un solo string de HTML.**

> **Tu apertura:**
> *"Cada Pokémon tiene un array de tipos (uno o varios). Necesito convertir ese array en HTML: un badge por tipo. Dos piezas: `.map` —que ya vieron en C06— y `.join`."*

> **Tu explicación teórica precisa (concepto + sintaxis):**
>
> - **`.map(fn)`** transforma cada elemento del array → devuelve un **array nuevo** del mismo tamaño.
> - **`.join("")`** une todos los elementos de un array en **un solo string** (con el separador que le pases(delimitador específico) — vacío, en este caso).
>
>   **Retorna:** Una cadena de texto que contiene todos los elementos del array, separados por el delimitador especificado.
>
>   ```jsx
>   const resultado = array.join(delimitador);
>   ```
>
> ```javascript
> array.map(elemento => /* algo con elemento */)   // → array transformado
> array.join("")                                    // → string
> ```

> **Ejemplo en código (distinto al lab):**
>
> ```javascript
> const frutas = ["manzana", "pera", "uva"];
> const lista = frutas
>   .map(fruta => `<li>${fruta}</li>`)   // ["<li>manzana</li>", "<li>pera</li>", "<li>uva</li>"]
>   .join("");                            // "<li>manzana</li><li>pera</li><li>uva</li>"
> ```
>
> *"`.map` me da un array de strings de HTML; `.join('')` los pega en uno solo, listo para meter en `innerHTML`."*

> **Aplicar al proyecto:**
>
> ```javascript
> const badges = tipos
>   .map(tipo => `<span class="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded-full">${tipo}</span>`)
>   .join("");
> ```

---

#### 3.3 Acceso seguro: `??` + `?.`

**EN PANTALLA: EXCALIDRAW — Panel 3.3 (acceso seguro): a la izquierda el acceso que ROMPE (error rojo); a la derecha `?.` (devuelve undefined, no rompe) + `??` (valor de respaldo).**

> **Tu apertura — el problema, demostrado en código (predecir → ejecutar):**
> *"PROBLEMA: Cuando le pido una propiedad a algo que NO existe, JavaScript no devuelve vacío: se ROMPE entero. Miren este objeto y predigan qué pasa al ejecutar:"*
> ```javascript
> const usuario = { nombre: "Ana" };       // este usuario NO tiene 'direccion'
> console.log(usuario.direccion.ciudad);   // ¿qué imprime?
> ```
> *(Ejecutar y mostrar el error.) "Error rojo: «Cannot read properties of undefined (reading 'ciudad')». Como `usuario.direccion` es `undefined`, pedirle `.ciudad` a undefined revienta — y frena TODO el script de ahí en adelante. En una app donde los datos pueden venir del exteriorS, donde un campo puede no venir, esto pasa todo el tiempo."*

> **La solución — dos operadores de acceso seguro (concepto + sintaxis):**
> - **`?.`** (optional chaining): accede de forma **segura** — si lo de la izquierda es `null`/`undefined`, corta y devuelve `undefined` en vez de romper.
> - **`??`** (nullish coalescing): da un **valor de respaldo** cuando lo de la izquierda es `null`/`undefined`.
> ```javascript
> objeto?.propiedad        // acceso seguro: no rompe
> valor ?? respaldo        // si valor es null/undefined, usa el respaldo
> ```

> **El mismo ejemplo, ahora blindado:**
> ```javascript
> usuario.direccion?.ciudad;                                   // ✓ undefined (no rompe)
> const ciudad = usuario.direccion?.ciudad ?? "Desconocida";   // "Desconocida"
> ```
> *"`?.` evita el corte; `??` pone el plan B. Juntos eliminan el clásico «cannot read properties of undefined»."*

> **Los dos se complementan:**
> *"Funcionan en equipo: `?.` evita que el acceso ROMPA (devuelve `undefined` en vez de reventar), y `??` reemplaza ese `undefined` por un valor útil. Uno protege el acceso, el otro pone el respaldo. Por eso casi siempre van juntos: `dato?.propiedad ?? respaldo`."*

> **Aplicar al proyecto:**
>
> ```javascript
> const img = imagen ?? "https://via.placeholder.com/96?text=?";   // respaldo si falta la imagen
> ```

---

#### 3.4 HU3 — `crearTarjeta` limpio y robusto

**EN PANTALLA: VS CODE — `js/app.js`, refactorizando `crearTarjeta`.**

> **Tu apertura:**
> *"Tercera Historia de Usuario. Su Definición de Terminado primero, y después juntamos las tres herramientas en `crearTarjeta`."*

> **Criterios de aceptación de HU3 (la Definición de Terminado — antes de construir):**
>
> - ✓ `crearTarjeta` usa **destructuring** para leer `nombre`, `imagen`, `tipos`.
> - ✓ Cada tarjeta muestra **todos** sus tipos como badges (bulbasaur y gengar tienen 2).
> - ✓ Si a un Pokémon le falta la propiedad `imagen`, la tarjeta **no se rompe** (muestra un placeholder).

> **Code-along del lab — HU3 (construir para cumplir esos criterios):**
>
> 1. Al inicio de `crearTarjeta`: `const { nombre, imagen, tipos } = pokemon;`.
> 2. Imagen segura: `const img = imagen ?? "https://via.placeholder.com/96?text=?";`.
> 3. Badges: `const badges = tipos.map(tipo => `<span ...>${tipo}</span>`).join("");`.
> 4. Armar el `innerHTML` con `${img}`, `${nombre}` y `${badges}` (los badges dentro de un `**_&lt;div&gt;_**` con `flex-wrap`).

> **Verificar (Checkpoint 3):**
> Las 6 tarjetas muestran sus badges (varios en bulbasaur/jigglypuff/gengar). Quitar la propiedad `imagen` de un Pokémon → la tarjeta sigue viva con el placeholder.

> **Logro opcional — Color por tipo (NO formal; solo si sobra tiempo):**
> *Para quien terminó la HU3 y le queda tiempo. Pintar cada badge según su tipo con un objeto que mapea tipo → color:*
> ```javascript
> // arriba en app.js (constante, fuera de crearTarjeta)
> const COLOR_TIPO = {
>   fire: "bg-red-200 text-red-800",      water: "bg-blue-200 text-blue-800",
>   grass: "bg-green-200 text-green-800", electric: "bg-yellow-200 text-yellow-800",
>   poison: "bg-purple-200 text-purple-800", ghost: "bg-indigo-200 text-indigo-800",
>   fairy: "bg-pink-200 text-pink-800",   normal: "bg-slate-200 text-slate-800",
> };
>
> // en crearTarjeta, el .map de badges usa el color del tipo:
> const badges = tipos.map(tipo => {
>   const color = COLOR_TIPO[tipo] ?? "bg-slate-200 text-slate-800";   // respaldo si el tipo no está
>   return `<span class="text-xs ${color} px-2 py-1 rounded-full">${tipo}</span>`;
> }).join("");
> ```
> *Gancho: el `COLOR_TIPO[tipo] ?? "..."` REUSA el `??` recién aprendido — buscar una clave que puede no estar y caer en un respaldo. "El mismo `??` de hace un rato, ahora para un color que falta."*
> *(Es un agregado posible, no parte del flujo obligatorio; si nadie llega, no pasa nada.)*

> **Cierre del Momento + puente a M4:**
> *"Las tarjetas salen, muestran todos sus tipos y son robustas. Pero la lista es estática: para encontrar un Pokémon hay que recorrerla con la vista. ¿Y si fueran 600? Lo que falta es poder filtrarla al instante."*

---

## MOMENTO 4 — Filtrado en vivo (HU4) + cierre + puente a C10

**Tiempo:** ~30 min
**Parte del lab:** HU4 + Cierre + Logros

> **OBJETIVO:** El alumno comprueba que **el render es reutilizable**: agrega un buscador que filtra la lista en vivo llamando al MISMO `render` con datos filtrados — la prueba de que la UI reacciona a los datos. Después consolida la idea central (los datos mandan; el HTML es su reflejo), ve el arco del módulo y entiende el puente a C10 (asincronía). Conoce la entrega (GitHub Pages, sin README aún) y los logros opcionales.

> **Patrón pedagógico de M4:** HU4 es el **pago de la inversión del patrón render** — no se reescribe `render` ni `crearTarjeta`, solo se les pasa otra lista. Es la demostración en vivo de la idea fuerza del día, por eso va justo antes del cierre (lo abre). Reactiva inline el evento (`addEventListener`, C08) y `.filter` (C06), sin enseñarlos de nuevo.

#### 4.1 HU4 — filtrar la lista en vivo

**EN PANTALLA: EXCALIDRAW — Panel 4.1 (filtrado en vivo): el usuario escribe en el buscador → `.filter` deja los que coinciden → `render(filtrados)` repinta. Etiqueta: "el MISMO render, con otra lista".**

> **Tu apertura:**
> *"Cuarta y última Historia de Usuario. La lista funciona, pero es estática: para encontrar un Pokémon hay que buscarlo con la vista. Vamos a filtrarla al instante. Y lo interesante: no vamos a reescribir nada de lo que ya hicimos — el truco está en que `render` es una función, y una función se puede llamar las veces que quieras, con datos distintos."*

> **Criterios de aceptación de HU4 (la Definición de Terminado — antes de construir):**
> - ✓ Hay un campo de búsqueda encima de la rejilla.
> - ✓ Al escribir, la rejilla muestra **solo** los Pokémon cuyo nombre coincide.
> - ✓ Al borrar el texto, vuelven a aparecer todos.

> **Tu explicación teórica precisa (re-render):**
> *"La idea nueva no es un operador, es un cambio de mentalidad: hasta ahora llamamos `render(pokemonLocal)` UNA vez. Pero podemos llamar `render` cada vez que los datos cambian, con OTRA lista, y la pantalla se actualiza sola."*
> - *"Para reaccionar a lo que el usuario escribe, usamos un **evento**: `addEventListener("input", ...)` — primer contacto fue en C08; el evento `input` se dispara en cada tecla."*
> - *"Para quedarnos con los que coinciden, `.filter` —de C06—: devuelve un array nuevo con los que cumplen la condición."*

> **Code-along del lab — HU4 (construir para cumplir esos criterios):**
> 1. Agregar el campo encima de `**_&lt;div id="resultado"&gt;_**`:
>    ```html
>    <input id="buscador" type="text" placeholder="Filtra por nombre…"
>           class="w-full max-w-md mx-auto block mb-6 p-2 rounded-lg border border-slate-300">
>    ```
> 2. En `js/app.js`, escuchar y re-renderizar:
>    ```javascript
>    const buscador = document.getElementById("buscador");
>    buscador.addEventListener("input", function () {
>      const texto = buscador.value.toLowerCase();
>      const filtrados = pokemonLocal.filter(p => p.nombre.includes(texto));
>      render(filtrados);   // ← el MISMO render, con otra lista
>    });
>    ```
> *"Miren lo que NO hicimos: no tocamos `render` ni `crearTarjeta`. Solo les dimos otra lista. Esa es la prueba de que la UI es un reflejo de los datos — cambian los datos, cambia la pantalla."*

> **Verificar (Checkpoint 4):**
> Escribir "pi" → queda solo Pikachu; borrar el texto → vuelven los 6. La lista **reacciona** a lo que se escribe.

> **Semilla de C11:**
> *"Guarden esto: hoy el buscador filtra una lista que YA tenemos. En C11 le vamos a cambiar la lógica para que, en vez de filtrar lo local, traiga Pokémon nuevos desde una API real."*

---

#### 4.2 Qué ganamos + discusión

**EN PANTALLA: EXCALIDRAW — Panel 4.2 (los datos mandan → el HTML es su reflejo): array de datos → render → UI, con la UI cambiando cuando cambian los datos (borrar / filtrar).**

> **Tu cierre de la idea:**
> *"Recorramos lo que hicimos: en vez de escribir el HTML de cada Pokémon a mano, lo GENERAMOS desde los datos. Y con el buscador lo comprobaron: cambian los datos, cambia la pantalla, sin tocar el render. Los datos mandan; el HTML es su reflejo."*

> **Discusión (las 3 preguntas del slide):**
> - *"¿Por qué generar el HTML desde los datos es mejor que escribirlo a mano?"*
> - *"¿Qué pasaría si la app tuviera 1000 Pokémon en vez de 6?"*
> - *"¿En qué se parece esto a lo que hace cualquier red social con tu feed?"*
> *(Guiar: el feed de Instagram/TikTok es exactamente esto — una plantilla de tarjeta + un render sobre una lista de datos que llega del servidor.)*

---

#### 4.3 El arco del M3 + puente a C10

**EN PANTALLA: EXCALIDRAW — Panel 1.1 (el mapa del Módulo 3, de vuelta): marcar C09 como hecho y señalar C10.**

> **Tu cierre del día:**
> *"Hoy construimos la base de la Pokédex: render dinámico + sintaxis moderna, todo con datos LOCALES. Y esa base se reusa: en C11, cuando los datos lleguen de la API real, el render ya está hecho — solo cambia de dónde vienen."*

> **Puente a C10:**
> *"Pero hay un detalle. Hoy los datos estaban ahí, listos al instante. Una API real NO responde al instante: tarda. ¿Cómo maneja JavaScript algo que no llega de inmediato, sin congelar la página? Eso es lo que vemos la próxima clase: **asincronía y promesas**."*

> **Entrega y logros:**
> - Entrega: publicar en **GitHub Pages** + compartir URL del repo y del sitio. *(Esta clase NO pide README todavía — se agrega en C12.)*
> - Logros opcionales: color por tipo · **spread e inmutabilidad** (`[...pokemonLocal, nuevo]`) · destructuring de array (`const [principal] = tipos`).

---

## Paneles Excalidraw candidatos (para la Guía)


| Panel | Momento | Qué visualiza                                                                                                  |
| ------- | --------- | ----------------------------------------------------------------------------------------------------------------- |
| 1.1   | M1      | Mapa del Módulo 3 (C09→C10→C11→C12, una app que crece)                                                      |
| 1.2   | M1      | Plantilla Historia de Usuario (Como/quiero/para) + checklist de criterios                                       |
| 1.3   | M1      | Anatomía de la tarjeta + la forma del dato Pokémon                                                            |
| 2.1   | M2      | Concatenación vs template literal                                                                              |
| 2.2   | M2      | Flujo CREAR → LLENAR → INSERTAR (con el método de cada paso debajo: createElement / innerHTML / appendChild) |
| 2.3   | M2      | `innerHTML` vs `textContent` (mismo string, dos resultados)                                                     |
| 2.4   | M2      | El patrón render: array → render (limpiar/recorrer/agregar) → rejilla                                        |
| 3.1   | M3      | Destructuring (objeto → variables sueltas)                                                                     |
| 3.2   | M3      | Badges: array de tipos →`.map` → `.join` → string                                                            |
| 3.3   | M3      | Acceso seguro:`??` (respaldo) + `?.` (cadena que no se rompe)                                                   |
| 4.1   | M4      | Filtrado en vivo: input →`.filter` → `render(filtrados)` (mismo render, otra lista)                           |
| 4.2   | M4      | Los datos mandan → el HTML es su reflejo                                                                       |

> Selección final (Excalidraw nativo vs VS Code en vivo) se define en la Capa 2+3 y la Guía. Dado que C09 es conceptual + diagramas de flujo (no tablas como C08), probablemente convivan hand-drawn nativos (flujos, anatomías) y algún diagrama generado.

---

## Mapeo Momentos ↔ Lab ↔ Capa 0


| Momento | Parte del lab         | Conceptos de Capa 0                                                                                |
| --------- | ----------------------- | ---------------------------------------------------------------------------------------------------- |
| **M1**  | Setup + HU1           | Kahoot de repaso M1-M2 + B0 (Historia de Usuario). C06/C08 se reactivan inline, no como bloque     |
| **M2**  | HU2                   | B1 (template literal) + B2 (createElement/appendChild, innerHTML/textContent, patrón render)      |
| **M3**  | HU3                   | B1 (destructuring, badges con`.map`/`.join`, acceso seguro `?.` + `??`) · spread = Logro opcional |
| **M4**  | HU4 + Cierre + Logros | B2 (re-render reactivo: filtrado en vivo) + síntesis ("los datos mandan") + puente a C10          |

**Validación de paridad Momento ↔ Lab:**

- ✅ Cada Momento cita una parte específica del lab (Setup/HU1, HU2, HU3, HU4+Cierre).
- ✅ **Historia de Usuario se enseña en M1** (B0) antes de codear — el lab está organizado en HU.
- ✅ **Template literal se ilumina** (§6.4.6) en M2.1 — ya usado en `liHTML` de C08.
- ✅ **El patrón render** (limpiar→recorrer→agregar) es el ancla de M2; se reusa idéntico en C11 con datos reales.
- ✅ **HU4 (filtrado en vivo) es el pago del patrón render** en M4: se llama al MISMO `render` con datos filtrados — la UI reacciona. El buscador es la semilla del fetch de C11.
- ✅ **M3 es refactor aditivo** (§6.4.7): cada herramienta moderna resuelve un dolor del `crearTarjeta` de M2.
- ✅ **Dato local plano y simple** (`nombre`/`imagen`/`tipos:[textos]`) — a propósito sin la forma anidada de la API, para enfocar el render. Lo que se reusa en C11 es el **patrón de render**, no la forma del dato.
- ✅ **Spread es Logro opcional** (no cuerpo de HU3): los badges se arman con `.map`/`.join`. El cuerpo del lab usa destructuring + `.map`/`.join` + `??`/`?.`.
