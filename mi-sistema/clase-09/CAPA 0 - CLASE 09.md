# CAPA 0 — CLASE 09: JavaScript Moderno y Render Dinámico

> **Fuentes:** **_mi-sistema/class-09/README.md_** · **_mi-sistema/class-09/lab/README.md_** · **_mi-sistema/class-09/slides/README.md_** *(inputs canónicos: README + lab + slides)*
> **Módulo:** M3 — Clase 1 de 4 (apertura del módulo "JavaScript Moderno y Consumo de APIs")
> **Proyecto víctima:** **Pokédex** (repo nuevo `pokedex`) — REEMPLAZA al Gestor de Presupuesto. Crece durante todo el M3: hoy con **datos locales**, en C11 con la **API real** de PokeAPI.
> **Continuidad con M2:** el alumno llega con arrays de objetos + **_.map_**/**_.forEach_**/**_.join_** (C06), y con el **primer contacto con el DOM** de C08 M5 (**_getElementById_**, **_addEventListener_**, **_innerHTML_**, y —sin nombrarlas— **_template strings_** en la función **_liHTML_**). Tailwind (C08) se reusa: hoy solo se aplica, no se enseña.
> **Hoy NO se toca internet:** se trabaja con un **array local de 6 Pokémon** con **propiedades planas y claras** (**_nombre_**, **_imagen_**, **_tipos: [textos]_**) — a propósito simples, para enfocarse solo en lo nuevo (generar la interfaz desde datos) sin el ruido de la red ni de estructuras anidadas. *(En C11 los datos vienen de la API real, con forma anidada; lo que se reusa de hoy es el **patrón de render**, no la forma exacta del dato.)*
> **Esta clase NO es lab calificado** (el calificado del M3 es C12) y **no pide README** todavía (se agrega en C12 con Markdown).
> **Sin archivo de apoyo:** las demos (de un array a tarjetas en pantalla) se tipean en vivo en VS Code + navegador, con el código en el guion.

---

## Idea fuerza de la clase

**Los datos mandan; el HTML es su reflejo.** En vez de escribir el HTML de cada Pokémon a mano, se **genera desde los datos**: un array de objetos entra, una rejilla de tarjetas sale. Si los datos cambian, la UI cambia sola. Es la habilidad central de toda app web (un feed de red social es exactamente esto). La clase tiene dos mitades que se combinan: la **sintaxis moderna (ES6+)** que hace el código legible, y el **render dinámico del DOM** que convierte datos en interfaz.

---

## BLOQUE 0 — DISEÑO DE SOFTWARE: Historia de Usuario

*(Antes de tocar código: cómo se DEFINE qué construir. El lab de hoy está organizado en Historias de Usuario —HU1 a HU4—. Es un concepto NUEVO para el alumno (primera vez que lo ve formalmente) y de diseño/metodología, no de sintaxis.)*

---

### CONCEPTO: Historia de Usuario (HU)

Una **Historia de Usuario** describe una funcionalidad desde la perspectiva de **quién la usa**, en lenguaje no técnico: QUIÉN la necesita, QUÉ quiere hacer y PARA QUÉ le sirve. Define el "qué" y el "porqué" de una feature, no el "cómo" (eso es el código).

**Sintaxis general (la plantilla):**
```text
Como [rol/usuario], quiero [acción] para [beneficio].
```

**Fórmula del lab (HU1 de la Pokédex):**
```text
"Como usuario, quiero ver una rejilla de tarjetas de Pokémon,
 cada una con su imagen, nombre y tipos,
 para reconocerlos de un vistazo."
```

**Dependencia técnica:** una HU NO es código ni detalle técnico — es una frase orientada al valor. Cada HU se acompaña de **criterios de aceptación**: condiciones **observables y verificables** que definen **cuándo está terminada** (la "Definición de Terminado") — qué tiene que cumplirse para dar la historia por completada.

> **Clave de método (resaltar):** el criterio se define **ANTES de construir**, y se redacta como **RESULTADO** (qué ve o logra el usuario), no como implementación. Ej. de HU1: *"las tarjetas se muestran en rejilla, no apiladas"*, *"cada tarjeta deja ver imagen, nombre y tipos"*, *"la rejilla se adapta al tamaño de pantalla"* — y NO *"usa `grid` de Tailwind"* (eso es el *cómo*, no el *qué*). El flujo correcto es: **leer la HU → leer sus criterios (lo que cuenta como terminado) → recién ahí construir para cumplirlos.** Por eso en el lab los criterios van justo DEBAJO de cada HU, antes del código.

El lab está organizado así: **HU1-HU4**, cada una con su frase, sus criterios de aceptación justo debajo, y su checkpoint. En la rúbrica del módulo, escribir HU propias con sus criterios es un criterio calificado.

### ANALOGÍA: El pedido a un sastre (qué y para qué, no cómo)

Una HU es como el pedido a un sastre: *"Como invitado a una boda, quiero un traje azul entallado para verme formal"*. Le decís QUIÉN sos, QUÉ querés y PARA QUÉ — no le explicás cómo cortar la tela (ese es su trabajo, como el código es el tuyo). Los criterios de aceptación son el probador: *"las mangas llegan a la muñeca, el saco cierra bien"* — así sabés que el traje está listo.

### ETIMOLOGÍA / HISTORIA

Las "User Stories" nacen de las **metodologías ágiles** —Extreme Programming (XP) y luego Scrum— a fines de los 90 / principios de los 2000 (Kent Beck, Ron Jeffries). La idea: en vez de un documento de requisitos gigante, frases cortas centradas en el usuario. Se resumen en las **3 C**: *Card* (la tarjeta con la frase), *Conversation* (la charla que la aclara) y *Confirmation* (los criterios de aceptación). Es el estándar de cómo la industria define trabajo hoy.

### ESTRATEGIA VISUAL: La plantilla con los 3 huecos + checklist de aceptación

Mostrar la plantilla **"Como ___ quiero ___ para ___"** con los tres huecos resaltados (rol / acción / beneficio), y debajo una checklist de criterios de aceptación (✓ verificable). Usar la HU1 real de la Pokédex como ejemplo llenado. Contrastar con un "requisito" técnico mal escrito ("hacer un forEach que pinte tarjetas") para mostrar que la HU habla de VALOR, no de implementación.

---

## BLOQUE 1 — SINTAXIS MODERNA (ES6+)

*(El "vocabulario" nuevo que usa la industria. No son conceptos difíciles — son formas más cortas y seguras de escribir cosas que el alumno ya hace. Template literal lo vamos a "iluminar": ya lo usaron en C08 sin saber el nombre.)*

---

### CONCEPTO: Template literal

String delimitado por **backticks** (**_`...`_**) que permite **interpolar** valores con **_${...}_** y escribir en **varias líneas**. Reemplaza a la concatenación con **_+_**.

**Sintaxis general:**
```javascript
`texto fijo ${expresión} más texto`
```

**Fórmula del lab:**
```javascript
const nombre = "pikachu";
const a = "Hola, " + nombre + "!";   // antes: concatenación
const b = `Hola, ${nombre}!`;        // ahora: template literal
```

**Dependencia técnica:** los backticks (la tecla a la izquierda del `1`, no la comilla simple) abren y cierran el string. Dentro, **_${...}_** evalúa cualquier expresión JS (variable, operación, llamada a función) y la inserta como texto. Como respeta saltos de línea, es ideal para escribir bloques de **HTML legibles** en `innerHTML`. **Iluminar concepto implícito (§6.4.6):** en C08, la función **_liHTML_** ya devolvía un template literal con `${m.nombre}` — hoy se le pone nombre a lo que ya usaron.

### ANALOGÍA: La carta machote / formulario con espacios para rellenar

Un template literal es como una carta machote: *"Estimado **____**, su pedido **____** está listo."* El texto fijo ya está escrito; vos solo rellenás los huecos (**_${...}_**) con el dato de cada caso. Una sola plantilla sirve para mil cartas distintas — cambia solo lo que va en los espacios.

### ETIMOLOGÍA / HISTORIA

Llegaron con **ES6 (2015)**, la gran actualización de JavaScript (la misma de `class`, arrow functions, `let`/`const`). "Template" viene de los motores de plantillas (templating) que ya hacían esto en el servidor; ES6 lo trajo nativo al lenguaje. El backtick se llama "acento grave" — antes casi no se usaba en programación.

### ESTRATEGIA VISUAL: Concatenación vs template literal, lado a lado

Mostrar la misma frase de las dos formas: arriba con **_+_** y comillas (frágil, fácil olvidar un espacio o un `+`), abajo con backticks y **_${}_** (legible). Resaltar los **_${...}_** como "huecos" que se rellenan. Conecta directo con el HTML multilínea del render.

---

### CONCEPTO: Destructuring

Sacar propiedades de un objeto (o ítems de un array) a variables **en una sola línea**, sin repetir el nombre del objeto.

**Sintaxis general:**
```javascript
const { propA, propB } = objeto;   // destructuring de OBJETO
const [primero, segundo] = array;  // destructuring de ARRAY
```

**Fórmula del lab:**
```javascript
// sin destructuring
const nombre = pokemon.nombre;
const tipos = pokemon.tipos;

// con destructuring (una línea)
const { nombre, imagen, tipos } = pokemon;
```

**Dependencia técnica:** en el destructuring de objeto, los nombres entre **_{ }_** deben coincidir EXACTO con las claves del objeto (`nombre`, no `name`). El de array va por **posición**, entre **_[ ]_** (el primer nombre toma el ítem 0). Si la propiedad/posición no existe, la variable queda **_undefined_** (no rompe). Es azúcar sintáctica: hace lo mismo que `pokemon.nombre`, pero más limpio cuando se usan varias propiedades.

### ANALOGÍA: Vaciar la bolsa del súper y nombrar lo que sacás

Sin destructuring, cada vez que querés algo decís "lo de la bolsa del súper: la leche; lo de la bolsa del súper: el pan". Con destructuring sacás todo de una y lo nombrás: "de esta bolsa saco leche, pan y huevos". A partir de ahí los usás por su nombre, sin volver a meter la mano en la bolsa cada vez.

### ETIMOLOGÍA / HISTORIA

"Destructuring assignment" — asignación por desestructuración. También de **ES6 (2015)**. La idea (extraer varios valores de una estructura de una vez) venía de lenguajes como Python (`a, b = tupla`) y se volvió estándar en JS moderno; hoy es omnipresente en React y en cualquier código profesional.

### ESTRATEGIA VISUAL: La caja que se abre en sus partes

Mostrar el objeto **_pokemon_** como una caja con sus propiedades, y flechas que "salen" hacia variables sueltas (`nombre`, `imagen`, `tipos`). Contrastar el "antes" (3 líneas con `pokemon.` repetido) vs el "después" (1 línea). El alumno ve que es la misma información, menos ruido.

---

### CONCEPTO: Spread (`...`)

Operador que **expande** los elementos de un array (o las propiedades de un objeto) dentro de otro.

**Sintaxis general:**
```javascript
const combinado = [...arrayA, ...arrayB];   // expande ambos en uno nuevo
```

**Fórmula del lab (Logro opcional — inmutabilidad):**
```javascript
const nuevo = { nombre: "mew", imagen: "...", tipos: ["psychic"] };
const ampliada = [...pokemonLocal, nuevo];   // array nuevo, sin mutar el original
```

**Dependencia técnica:** los tres puntos (**_..._**) "desarman" el array en sus elementos sueltos. Sirve para combinar arrays, copiarlos sin mutar el original, o pasar un array como argumentos. **En esta clase es contenido OPCIONAL (Logro 2 del lab):** el cuerpo del lab arma los badges con **_.map_** + **_.join_** de C06, NO con spread. El spread se usa solo en el logro de agregar un Pokémon sin mutar el array. *(Nota: el mismo `...` cumple un rol inverso —"rest"— cuando junta varios argumentos en un array; eso queda para más adelante.)*

### ANALOGÍA: Volcar el contenido de una caja en otra

Spread es como volcar dos cajas de juguetes en un mismo cajón: no metés "la caja A y la caja B" como bultos, sino que **desparramás su contenido** y queda todo junto y suelto en el cajón nuevo. `[...a, ...b]` vuelca los elementos de `a` y de `b` en un array nuevo.

### ETIMOLOGÍA / HISTORIA

"Spread operator", de **ES6 (2015)**. El símbolo **_..._** (elipsis) se eligió para sugerir "y lo que sigue / lo de adentro expandido". Su gemelo "rest" usa el mismo símbolo para la operación contraria. Es de lo más usado en el JS moderno para trabajar de forma inmutable (sin pisar el dato original).

### ESTRATEGIA VISUAL: Dos cajas que se vuelcan en una

Dibujar `a = [1,2]` y `b = [3,4]` como dos cajitas, y el spread como su contenido cayendo dentro de una caja nueva `[1,2,3,4]`. Énfasis en que los corchetes externos son el array nuevo y los `...` "abren" cada caja.

---

### CONCEPTO: Optional chaining (`?.`) + nullish coalescing (`??`)

**_?._** accede a una propiedad anidada de forma **segura**: si algo en la cadena no existe, devuelve **_undefined_** en vez de **romper** el programa. **_??_** da un **valor de respaldo** cuando lo de la izquierda es **_null_** o **_undefined_**.

**Sintaxis general:**
```javascript
objeto?.prop?.subProp          // acceso seguro
valorPosibleNulo ?? respaldo   // si es null/undefined, usa el respaldo
```

**Fórmula del lab:**
```javascript
const img = imagen ?? "https://via.placeholder.com/96?text=?";   // ?? : respaldo si falta la imagen
const cuantos = tipos?.length ?? 0;                              // ?. : si 'tipos' faltara, no rompe (da undefined)
```

**Dependencia técnica:** el **_?._** se pone ANTES del punto/propiedad que podría no existir. Si la parte izquierda es **_null_** o **_undefined_**, la expresión corta ahí y devuelve **_undefined_** (no sigue accediendo). El **_??_** se diferencia de **_||_** en que solo reacciona a **_null_**/**_undefined_** (no a `0`, `""` o `false`, que son valores válidos). Juntos eliminan el clásico error **_"cannot read property of undefined"_**.

### ANALOGÍA: Preguntar antes de entrar, con plan B

`?.` es como preguntar antes de avanzar: *"¿tenés cochera? ¿y en la cochera hay auto?"*. Si no hay cochera, parás ahí sin tropezar — no asumís que existe. `??` es el plan B: *"si no hay auto, voy en bici"*. El programa nunca se cae por buscar algo que no está; toma la alternativa.

### ETIMOLOGÍA / HISTORIA

Ambos llegaron juntos en **ES2020** — bastante recientes. "Optional chaining" (encadenamiento opcional) y "nullish coalescing" (fusión de nulos). Resolvieron un dolor histórico de JS: acceder a datos de APIs donde un campo puede venir o no. Por eso son centrales en una clase de consumo de APIs.

### ESTRATEGIA VISUAL: La cadena que se corta sin romper

Mostrar el caso del respaldo: un Pokémon sin la propiedad `imagen` → `imagen ?? "placeholder"` saca el placeholder en vez de una imagen rota. Y el del acceso seguro: `tipos?.length` no rompe aunque `tipos` faltara (da `undefined`), frente a `tipos.length` que tiraría el clásico error rojo en consola. El contraste "se rompe / no se rompe" es el ancla.

---

## BLOQUE 2 — RENDER DINÁMICO DEL DOM

*(La habilidad central del día: convertir datos en interfaz. Profundiza el "primer contacto" con el DOM de C08 M5. Acá se introduce el patrón que se repite en TODA app web.)*

---

### CONCEPTO: `createElement` + `appendChild`

**_document.createElement(tag)_** crea un nodo del DOM (ej. un **_&lt;article&gt;_**) en memoria; **_contenedor.appendChild(nodo)_** lo inserta como hijo dentro de un elemento de la página.

**Sintaxis general:**
```javascript
const nodo = document.createElement("article");
contenedor.appendChild(nodo);
```

**Fórmula del lab:**
```javascript
const articulo = document.createElement("article");
articulo.className = "bg-white rounded-xl shadow p-4 text-center";
articulo.innerHTML = `<h2>${pokemon.nombre}</h2>`;
contenedor.appendChild(articulo);
```

**Dependencia técnica:** **_createElement_** devuelve un nodo que existe SOLO en memoria — no se ve hasta que se inserta con **_appendChild_** en un elemento que ya está en la página (en el lab, **_&lt;div id="resultado"&gt;_**). Las clases de Tailwind se asignan con **_.className_**. Es DOM clásico (no ES6): existe desde siempre, y es lo que C08 M5 rozó con **_getElementById_**.

### ANALOGÍA: Fabricar un ladrillo y después pegarlo a la pared

**_createElement_** es fabricar una pieza —una tarjeta— en el taller: ya existe, pero todavía no está en la pared. **_appendChild_** es pegarla al tablero a la vista de todos. Por eso son dos pasos: primero armás el nodo (y le ponés su contenido y sus clases), después lo colgás en la página.

### ETIMOLOGÍA / HISTORIA

Parte de la **DOM API** (Document Object Model), el estándar del W3C que representa la página como un **árbol de nodos**. "appendChild" = "agregar hijo": el DOM es jerárquico (padres e hijos), y agregar un nodo es colgarlo de un padre. Es de las APIs más viejas y estables de la web.

### ESTRATEGIA VISUAL: Taller → pared

Dos zonas: "en memoria" (el nodo recién creado, flotando) y "en la página" (el contenedor `#resultado`). Una flecha **_appendChild_** mueve el nodo de una zona a la otra. El alumno ve que crear ≠ mostrar.

---

### CONCEPTO: `innerHTML` vs `textContent`

Dos formas de poner contenido dentro de un elemento. **_innerHTML_** interpreta el string como **HTML** (crea etiquetas reales). **_textContent_** lo pone como **texto plano** (las etiquetas se ven como texto, no se interpretan).

**Sintaxis general:**
```javascript
elemento.innerHTML = "<b>hola</b>";    // renderiza: hola (en negrita)
elemento.textContent = "<b>hola</b>";  // muestra literal: <b>hola</b>
```

**Fórmula del lab:**
```javascript
articulo.innerHTML = `
  <img src="${img}" alt="${nombre}" class="w-24 h-24 mx-auto">
  <h2 class="capitalize font-bold mt-2">${nombre}</h2>
`;
```

**Dependencia técnica:** se usa **_innerHTML_** cuando el string ES HTML que debe convertirse en etiquetas (las tarjetas). Se usa **_textContent_** cuando solo se quiere texto, sin riesgo de que se interprete como HTML. En C08 ya usaron **_innerHTML_** (la lista del Gestor) y **_textContent_** (el saldo) — hoy se nombra la diferencia. *(Nota de seguridad para más adelante: `innerHTML` con datos de un usuario puede ser riesgoso; con datos propios/controlados, como acá, es seguro.)*

### ANALOGÍA: Receta que se cocina vs cartel que se lee literal

**_innerHTML_** es darle al navegador una **receta** que ejecuta: "armá una imagen, armá un título" → aparecen los elementos. **_textContent_** es escribir en un **cartel**: lo que pongas se muestra tal cual, letra por letra, sin cocinar nada. Si escribís `<b>hola</b>` en el cartel, se lee `<b>hola</b>`; en la receta, se vuelve **hola** en negrita.

### ETIMOLOGÍA / HISTORIA

**_innerHTML_** lo inventó Microsoft en Internet Explorer en los 90; era tan práctico que el resto de los navegadores lo adoptaron y terminó estandarizado. **_textContent_** llegó después como la alternativa "segura y de solo texto". El nombre es literal: "el HTML interno" vs "el contenido de texto".

### ESTRATEGIA VISUAL: El mismo string, dos resultados

Mostrar `<b>hola</b>` puesto con **_innerHTML_** (se ve **hola** en negrita) y con **_textContent_** (se ve el texto `<b>hola</b>`). El contraste visual fija cuándo usar cada uno.

---

### CONCEPTO: El patrón render (limpiar → recorrer → agregar)

La receta universal para mostrar una lista de datos como UI: **limpiar** el contenedor, **recorrer** los datos, **crear y agregar** un nodo por cada uno. Si se vuelve a llamar con otros datos, la UI se actualiza sola.

**Sintaxis general:**
```javascript
function render(lista) {
  contenedor.innerHTML = "";              // 1. limpia lo anterior
  lista.forEach(function (item) {
    const nodo = crearNodo(item);         // 2. crea el nodo del item
    contenedor.appendChild(nodo);         // 3. lo inserta
  });
}
```

**Fórmula del lab:**
```javascript
function render(lista) {
  contenedor.innerHTML = "";
  lista.forEach(function (pokemon) {
    const tarjeta = crearTarjeta(pokemon);
    contenedor.appendChild(tarjeta);
  });
}
render(pokemonLocal);   // ¡píntalo!
```

**Dependencia técnica:** el paso 1 (**_innerHTML = ""_**) es clave: sin limpiar, cada llamada APILA tarjetas duplicadas. **_forEach_** (de C06) recorre el array; por cada item llama a una función que arma su nodo (**_crearTarjeta_**), y lo inserta. El render **separa** los datos (el array) de la presentación (las tarjetas): cambiar el array y volver a renderizar basta para cambiar la pantalla. Es la base de la reactividad de C11 (datos de API → mismo render).

### ANALOGÍA: Rehacer la pizarra de especiales del día

El patrón render es como el pizarrón de "especiales del día" de un restaurante: cada mañana lo **borrás entero** y lo **reescribís según lo que hay hoy**. No tachás y encimás sobre lo de ayer (eso acumula desorden) — borrás y reflejás la lista actual. La pizarra siempre muestra exactamente lo que hay en la cocina: la pizarra **depende de** la cocina, igual que la UI depende de los datos.

### ETIMOLOGÍA / HISTORIA

"Render" = "representar/dibujar" — el término que usa toda la industria (y frameworks como React) para "convertir datos en interfaz". El patrón limpiar→recorrer→agregar es la versión manual y explícita de lo que los frameworks hacen automático por debajo. Entenderlo a mano hoy es entender qué hace React mañana.

### ESTRATEGIA VISUAL: Array → función render → rejilla

Diagrama de flujo: a la izquierda el **array de objetos**, en el medio la **función render** (con sus 3 pasos numerados), a la derecha la **rejilla de tarjetas**. Una flecha grande "los datos mandan → el HTML es su reflejo". Mostrar en vivo: borrar un Pokémon del array → recargar → desaparece su tarjeta.

---

### CONCEPTO: Re-render — la UI reacciona a los datos (filtrado en vivo)

**_render(lista)_** es una función: se puede llamar **muchas veces, con datos distintos** cada vez. Si se le pasa una lista filtrada, la pantalla se actualiza sola — sin reescribir **_render_** ni **_crearTarjeta_**. Es la prueba en vivo de "los datos mandan".

**Sintaxis general:**
```javascript
elemento.addEventListener("input", function () {
  const filtrados = lista.filter(/* condición */);
  render(filtrados);   // el MISMO render, con otra lista
});
```

**Fórmula del lab (HU4):**
```javascript
const buscador = document.getElementById("buscador");
buscador.addEventListener("input", function () {
  const texto = buscador.value.toLowerCase();
  const filtrados = pokemonLocal.filter(p => p.nombre.includes(texto));
  render(filtrados);
});
```

**Dependencia técnica:** no se toca el patrón render; se le pasa **otra lista**. Combina tres cosas conocidas: el patrón render (recién visto), un **evento** (**_addEventListener_**, primer contacto en C08 M5) y **_.filter_** (C06). El evento **_input_** se dispara en cada tecla. **Semilla de C11:** este mismo buscador, en vez de filtrar la lista local, va a **traer Pokémon nuevos desde la API**.

### ANALOGÍA: El buscador de contactos del celular

Cuando escribís en el buscador de tus contactos, la lista se recorta en cada letra. No reconstruís la app del teléfono — le das **otra lista** (los que coinciden) a la **misma pantalla**. El re-render es eso: misma vista, datos distintos.

### ETIMOLOGÍA / HISTORIA

Es la idea de UI **reactiva** / *event-driven*: la interfaz responde a eventos cambiando los datos y re-renderizando. Es la semilla de lo que los frameworks (React y compañía) automatizan: "estado cambia → la vista se re-renderiza sola". Hoy se hace a mano, llamando **_render_** uno mismo.

### ESTRATEGIA VISUAL: Escribir "pi" → solo Pikachu

Mostrar el flujo: el usuario escribe **_pi_** en el buscador → **_.filter_** deja solo los que coinciden → **_render(filtrados)_** repinta → queda solo Pikachu. Borrar el texto → vuelven los 6. Énfasis: es el MISMO **_render_**, con otra lista.

---

## CIERRE — hilo conductor + qué se lleva el alumno

### El arco del Módulo 3 (Pokédex)
```
C09  JS Moderno     → render de datos LOCALES        ← HOY
C10  Asincronía     → Promesas (API simulada)
C11  fetch + JSON   → datos REALES de PokeAPI
C12  Errores        → app robusta + README (Markdown) ← lab calificado
```
Una sola app que crece clase a clase. Hoy se construye la base de render con datos locales **planos y simples** (para enfocarse en el render); en C11 los datos vienen de la API real (anidados) y se adaptan. Lo que queda hecho y se reusa es el **patrón de render**.

### Puente a C10
Hoy los datos están **ahí, listos** (array local). Pero una API real **tarda** en responder. C10 abre la pregunta: ¿cómo maneja JavaScript algo que no llega al instante? → **Asincronía y Promesas**.

### Tabla resumen de conceptos

| Bloque | Conceptos |
|---|---|
| **B0 — Diseño de software** | Historia de Usuario (formato "Como… quiero… para…") + criterios de aceptación |
| **B1 — Sintaxis moderna (ES6+)** | template literal · destructuring (objeto/array) · spread `...` · optional chaining `?.` + nullish `??` |
| **B2 — Render dinámico del DOM** | `createElement` + `appendChild` · `innerHTML` vs `textContent` · el patrón render (limpiar→recorrer→agregar) · re-render reactivo (filtrado en vivo) |

### Mensaje que se lleva el alumno
**No se escribe el HTML de cada Pokémon a mano: se genera desde los datos.** Los datos mandan, el HTML es su reflejo. Es lo que hace cualquier red social con tu feed — y es la base de todo lo que viene en el módulo.
