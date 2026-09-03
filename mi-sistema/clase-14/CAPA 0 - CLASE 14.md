# CAPA 0 — CLASE 14: Interacción y Datos Derivados

> **Fuentes:** **_code201/class-14/README.md_** · **_code201/class-14/lab/README.md_** *(inputs canónicos: README de clase + lab. Sin assets relevantes.)*
> **Módulo:** M4 — Clase 2 de 4
> **Proyecto víctima:** **Gestor de Plantillas para WhatsApp** (repo **_whatsapp-templates_**, rama **_lab14-interaccion_**) — la MISMA app de C13. Hoy **se completa el CRUD**: a Crear y Leer (C13) se suman **Actualizar (editar)** y **Borrar (eliminar)**, y la app se vuelve interactiva de verdad.
> **Continuidad con C13:** el alumno llega con la clase **_Template_**, el **estado central** (`state = { plantillas: [] }`), el patrón **_render()_**, **_normalizarHashtag_** y los métodos de String. Todo se reusa. Hoy al **_Template_** se le agrega **_this.id = crypto.randomUUID()_** (id único de texto) y al `render()` se le suman botones, panel de stats, buscador y selector de orden.
> **Reactivación del M2:** **_.filter_**, **_.map_** y **_.reduce_** —vistos en el Módulo 2— vuelven hoy con un propósito nuevo.
> **Conceptos NUEVOS del día (NO estuvieron en C13):** la **inmutabilidad** (actualizar el estado sin mutarlo) y el **spread operator** (**_..._**) que la hace posible. Se introducen por primera vez acá.
> **Sin lab calificado:** C14 es clase regular de M4 (el calificado es C16).
> **Sin persistencia HOY:** todo vive en memoria; al recargar se pierde. `localStorage` llega en **C15**.
> **Sin internet requerido:** todo corre local con Live Server.

---

## Idea fuerza de la clase

**De "leer y agregar" a una app interactiva completa — y el día en que el alumno aprende a cambiar el estado SIN romperlo.** Tres movimientos: (1) hacer la app **interactiva** con **delegación de eventos** —un solo listener en el contenedor que atiende los clics de N tarjetas, en vez de uno por botón—; (2) completar el **CRUD** —eliminar y editar— **de forma inmutable**: en lugar de modificar el array o el objeto que ya existe, se genera uno nuevo con el cambio (el concepto central que se introduce hoy, con **_.filter_**, **_.map_** y spread); (3) tratar buena parte de la UI como **datos derivados** —total, conteo por hashtag, lista filtrada y ordenada— que NO se guardan: se **recalculan** en cada `render()` a partir del estado. La tesis que atraviesa todo: **la UI entera es una función del estado, y el estado se actualiza generando uno nuevo, nunca mutando el viejo.**

---

## BLOQUE 1 — Identidad de cada dato + delegación de eventos

*(Para actuar sobre una plantilla concreta —eliminarla, editarla— primero hay que poder IDENTIFICARLA. Por eso hoy cada plantilla gana un id. Y como las tarjetas se crean y destruyen en cada render, no sirve poner un listener por botón: entra la delegación de eventos, la forma en que las apps reales manejan listas.)*

---

### CONCEPTO: id único por plantilla (`this.id = crypto.randomUUID()`)

Para actuar sobre "esta" plantilla y no otra, cada una necesita un **identificador único**. Se lo damos en el constructor con **_crypto.randomUUID()_**, que genera un **UUID**: un texto largo único garantizado (tipo `"a1b2c3d4-e5f6-..."`), distinto en cada llamada.

**Sintaxis general:**
```javascript
this.id = crypto.randomUUID();   // texto (UUID) unico, distinto en cada creacion
```

**Fórmula del lab (setup — se agrega al `Template` de C13):**
```javascript
class Template {
  constructor(titulo, mensaje, hashtag) {
    this.id = crypto.randomUUID();   // ← id unico (un texto)
    this.titulo = titulo;
    this.mensaje = mensaje;
    this.hashtag = hashtag;
    this.fecha = new Date();
  }
}
```

**Dependencia técnica:** **_crypto.randomUUID()_** devuelve un **texto** (un UUID), no un número — por eso, al leerlo del `data-id`, NO hace falta convertirlo con `Number`: se usa tal cual. Ese id viaja al HTML como **_data-id_** de cada botón y de vuelta al JS para saber sobre qué plantilla actuar. A diferencia de un id basado en el tiempo (`Date.now()`), NO tiene riesgo de colisión aunque se creen dos plantillas en el mismo instante. **Comportamiento a advertir:** es una API del navegador que requiere **contexto seguro** (https o localhost — con Live Server funciona).

### ESTRATEGIA VISUAL: la etiqueta invisible
Una tarjeta de plantilla con una "etiqueta de identificación" pequeña en la esquina (como el número de serie de un producto): el resto de la tarjeta es lo que el usuario ve; el id es el dato interno que la app usa para reconocerla. Anclaje: *cada dato necesita un nombre propio para poder actuar sobre él.*

---

### CONCEPTO: Delegación de eventos (un listener en el padre)

**Delegación de eventos** es poner **UN solo listener** en el **contenedor padre** —en vez de uno por cada hijo— y decidir qué hacer según **dónde** se hizo clic. Funciona porque los eventos **burbujean**: un clic en un botón sube por el árbol del DOM hasta el contenedor, que lo escucha. Es la forma estándar de manejar listas con muchos elementos que aparecen y desaparecen.

**Sintaxis general:**
```javascript
<contenedor>.addEventListener("click", function (evento) {
  // evento.target = el elemento EXACTO donde se hizo clic
  if (evento.target.classList.contains("<clase-del-boton>")) {
    // ... actuar segun el boton
  }
});
```

**Fórmula del lab (HU1):**
```javascript
lista.addEventListener("click", function (evento) {
  if (evento.target.classList.contains("btn-eliminar")) {
    const id = evento.target.dataset.id;
    eliminarPlantilla(id);
  }
});
```

**Dependencia técnica:** el listener vive en **_lista_** (el `<ul>` contenedor), que **NO** se destruye al re-renderizar —solo se vacía su interior—. Por eso el listener sigue funcionando aunque las tarjetas de adentro cambien. **Este es el punto pedagógico clave:** con `render()` limpiando y recreando las tarjetas en cada cambio, un listener pegado a cada botón se perdería en cada redibujo; el del padre sobrevive. Un mismo listener puede atender varios botones distintos con varios `if` (eliminar, editar) leyendo la clase del `event.target`.

### ANALOGÍA: La recepcionista del edificio
En vez de poner un portero en la puerta de cada oficina (un listener por botón), hay **una sola recepcionista en la entrada del edificio** (un listener en el contenedor). Cuando llega alguien, ella mira **a qué oficina va** (`event.target` + la clase del botón) y lo deriva. Si abren o cierran oficinas adentro, la recepcionista sigue siendo la misma — no hay que contratar una nueva por cada oficina.

### ETIMOLOGÍA / HISTORIA
"Delegar" = encargar una tarea a otro. Acá el padre **delega** en sí mismo el trabajo de todos sus hijos. El mecanismo técnico se llama **event bubbling** (burbujeo), parte del estándar DOM desde los años 2000: un evento nace en el elemento más profundo y "sube como burbuja" por sus ancestros. Librerías como jQuery popularizaron la delegación (**_.on()_**) mucho antes de que fuera común en JS nativo.

### ESTRATEGIA VISUAL: Un listener vs N listeners
Dos mockups de una lista con 4 tarjetas, cada una con un botón. A la izquierda **"N listeners"**: una marca de "oído" pegada a CADA botón, con una nota roja "hay que reenganchar en cada render". A la derecha **"1 listener (delegación)"**: una sola marca de "oído" en el borde del contenedor `<ul>`, con flechas punteadas de cada botón subiendo (burbujeando) hacia ella, nota verde "sobrevive a cada render". Anclaje: *un solo oído en el padre escucha a todos los hijos.*

---

### CONCEPTO: `event.target`, `classList.contains()` y `dataset` — cómo el listener decide

Dentro del listener del padre, tres herramientas responden "¿dónde se hizo clic y sobre qué dato?": **_event.target_** es el elemento EXACTO donde ocurrió el clic; **_classList.contains("x")_** pregunta si ese elemento tiene la clase `x` (para distinguir el botón eliminar del editar); **_dataset.id_** lee el atributo **_data-id_** de ese elemento (el id de la plantilla).

**Sintaxis general:**
```html
<button class="<clase>" data-id="<valor>">...</button>
```
```javascript
evento.target                       // el elemento clickeado
evento.target.classList.contains("<clase>")   // true / false
evento.target.dataset.id            // el valor de data-id (siempre TEXTO)
```

**Fórmula del lab (el botón en el render + su lectura):**
```javascript
// en el innerHTML del <li>:
`<button class="btn-eliminar" data-id="${plantilla.id}">Eliminar</button>`

// en el listener:
const id = evento.target.dataset.id;   // el data-id ya es texto (nuestro id es un UUID)
```

**Dependencia técnica:** **_data-*_** son atributos HTML pensados para guardar datos propios de la app en el DOM; se leen con **_element.dataset.*_** (el `data-id` se lee como `dataset.id`). **Todo lo que sale del DOM es texto** — y como en este proyecto el id de la plantilla también es un **texto** (un UUID de **_crypto.randomUUID()_**), se usa tal cual, sin convertir: la comparación **_plantilla.id !== id_** es texto contra texto. *(Solo haría falta un **_Number(...)_** si el id fuera numérico — como el `Number(selector.value)` de C13.)*

### ESTRATEGIA VISUAL: La ficha del clic
Un clic representado como una "ficha" con tres campos que el listener lee: **target** (qué elemento), **classList** (qué tipo de botón: eliminar/editar), **dataset.id** (sobre qué plantilla). Una flecha de la ficha hacia la decisión (`if` eliminar / `if` editar). Anclaje: *un clic trae consigo qué se tocó y sobre qué dato — el listener solo lo lee.*

---

## BLOQUE 2 — Inmutabilidad: actualizar el estado sin mutarlo (CONCEPTO CLAVE del día)

*(El concepto central de la clase, que se introduce **por primera vez hoy** (NO estuvo en C13). Junto con él aparece el **spread operator** (**_..._**), la herramienta que hace posible la inmutabilidad. Eliminar y editar son las operaciones que faltaban del CRUD; la forma en que se hacen —generando un estado nuevo en vez de tocar el viejo— es lo que de verdad se enseña. Todo lo demás del día se apoya en esto.)*

---

### CONCEPTO: Mutar vs no-mutar — actualizar generando uno nuevo

**Mutar** es cambiar el array u objeto que **ya existe** (con **_.push_**, **_.splice_**, o **_obj.prop = x_**). **No-mutar** (inmutabilidad) es **crear uno NUEVO** con el cambio aplicado y reasignarlo, dejando el original intacto. El resultado visible puede ser el mismo; el hábito y sus consecuencias no. **Hoy las operaciones NUEVAS sobre el estado se hacen inmutables:** eliminar, editar y ordenar generan estructuras nuevas (el `agregar` de C13 sigue con `.push`; no se refactoriza hoy).

**Sintaxis general (el contraste):**
```javascript
// MUTAR (evitado)
lista.push(x);              lista.splice(i, 1);        obj.titulo = "nuevo";
// NO MUTAR (lo de hoy)
lista = [...lista, x];      lista = lista.filter(...);  obj = { ...obj, titulo: "nuevo" };
```

**El spread operator (`...`) — herramienta nueva del día:** el operador **_..._** "desparrama" los elementos de un array o las propiedades de un objeto dentro de otro NUEVO. Es lo que permite copiar-y-cambiar sin mutar. Se ve **por primera vez hoy**.
```javascript
[...<array>, <nuevo>]               // copia el array y agrega
{ ...<objeto>, <campo>: <valor> }   // copia el objeto y sobreescribe ese campo
```

**Concepto pedagógico clave del día — el Principio de Inmutabilidad:** *el estado debe tratarse como un objeto INMUTABLE: no se modifica directamente. Cada vez que hay un cambio, se crea una NUEVA VERSIÓN del estado (con el cambio aplicado) y se reemplaza — nunca se edita el original en el lugar.* **Por qué (una sola razón, la que importa):** hace que el estado sea **predecible** — como nunca se modifica "por detrás", en todo momento se sabe cuál es el estado actual y en qué se diferencia del anterior (son versiones distintas, comparables); si se mutara el original, el "antes" y el "después" serían el mismo objeto pisado, imposible de rastrear, y el estado dejaría de ser una fuente de verdad confiable. Es un concepto **nuevo** —se introduce hoy— y se aplica a las operaciones NUEVAS del estado: **editar** (`.map`+spread), **borrar** (`.filter`) y **ordenar** (`[...]`). *(El `agregar` viene de C13 con `.push` —muta— y hoy no se refactoriza; si algún alumno lo nota, se puede nombrar como pendiente.)*

### ANALOGÍA: La fotocopia corregida
Mutar es como **tachar y escribir encima del documento original**: queda sucio y si alguien tenía una copia mental del original, ya no coincide. No-mutar es **sacar una fotocopia, corregir la copia, y quedarse con la copia como nueva versión** — el original queda intacto por si hace falta comparar. Los frameworks modernos trabajan comparando "¿esta es la misma hoja de antes o una nueva?"; por eso siempre entregamos una hoja nueva.

### ETIMOLOGÍA / HISTORIA
"Inmutable" = que no cambia. El estilo se volvió dominante con **Redux (2015)** y React, que dependen de la **igualdad por referencia** para saber si algo cambió: si mutás el mismo array, la referencia es la misma y el framework "no se entera". Lenguajes funcionales (Haskell, Clojure) llevan la inmutabilidad al extremo —los datos NUNCA cambian—. JavaScript no obliga, pero el patrón "copiar y reemplazar" es la versión idiomática y la que se espera en código profesional.

### ESTRATEGIA VISUAL: Original intacto vs copia nueva
Dos filas. Arriba (mutar): un array `[A, B, C]` al que se le tacha `B` en la misma caja, quedando `[A, C]` — misma caja, ensuciada. Abajo (no-mutar): el array `[A, B, C]` con una flecha hacia una caja NUEVA `[A, C]` (resultado de `filter`), el original se conserva al costado atenuado. Etiqueta: *"mismo resultado en pantalla, distinto origen: hoy siempre creamos una estructura nueva".* Anclaje: *cambiar el estado = reemplazarlo con una copia modificada.*

---

### CONCEPTO: Eliminar con `.filter()` (Borrar — la D del CRUD)

**_.filter(condicion)_** recorre un array y devuelve un **array NUEVO** solo con los elementos que cumplen la condición — sin tocar el original. Para eliminar, se conserva **todo menos** la plantilla del id clickeado.

**Sintaxis general:**
```javascript
<lista> = <lista>.filter(<elemento> => <condicion que deja fuera lo que se elimina>);
```

**Fórmula del lab (HU1):**
```javascript
function eliminarPlantilla(id) {
  state.plantillas = state.plantillas.filter(plantilla => plantilla.id !== id);  // deja todas MENOS esa
  render();
}
```

**Dependencia técnica:** **_.filter_** NO muta —devuelve un array nuevo—, por eso encaja con la inmutabilidad del día. La condición **_plantilla.id !== id_** significa "quedate con las que NO son la eliminada". Al terminar, **_render()_** redibuja desde el estado nuevo y la tarjeta desaparece sola. Es la misma regla de C13: **cambia el estado → `render()`**.

### ESTRATEGIA VISUAL: El colador
Un array de 4 plantillas cae por un "colador" etiquetado **_.filter(id !== X)_**; la plantilla X queda retenida (se descarta) y las otras 3 pasan a un array nuevo. Anclaje: *filter deja pasar lo que cumple la condición y descarta el resto — en un array nuevo.*

---

### CONCEPTO: Editar con `.find` + `.map` + spread (Actualizar — la U del CRUD)

Editar tiene dos pasos. Primero, **cargar** los datos de la plantilla en el formulario: **_.find_** la localiza por id y se copian sus campos a los inputs; se recuerda que estamos editando con **_state.editandoId_**. Segundo, al guardar, **actualizar** esa plantilla **en su lugar** con **_.map_**: se recorre el array y, para la del id que se edita, se devuelve un objeto NUEVO con los campos cambiados (**_{ ...plantilla, campos }_**); las demás se devuelven tal cual.

**Sintaxis general:**
```javascript
// encontrar uno por id
const x = <lista>.find(<el> => <el>.id === <id>);
// actualizar uno sin mutar: map + spread
<lista> = <lista>.map(<el> => <el>.id === <id> ? { ...<el>, <campo>: <nuevoValor> } : <el>);
```

**Fórmula del lab (HU2):**
```javascript
function cargarEnFormulario(id) {
  const plantilla = state.plantillas.find(plantilla => plantilla.id === id);
  titulo.value = plantilla.titulo;
  mensaje.value = plantilla.mensaje;
  hashtag.value = plantilla.hashtag;
  state.editandoId = id;        // recordamos que estamos editando, no creando
}

// en el submit, decide actualizar vs crear:
if (state.editandoId) {
  state.plantillas = state.plantillas.map(plantilla =>
    plantilla.id === state.editandoId
      ? { ...plantilla, titulo: tituloTexto, mensaje: mensajeTexto, hashtag: normalizarHashtag(hashtag.value) }
      : plantilla
  );
  state.editandoId = null;
} else {
  agregarPlantilla(tituloTexto, mensajeTexto, normalizarHashtag(hashtag.value));
}
```

**Dependencia técnica:** **_.find_** devuelve el PRIMER elemento que cumple la condición (o `undefined`); **_.map_** devuelve un array del MISMO largo, transformando solo el que coincide. El spread **_{ ...plantilla, titulo: nuevo }_** copia todas las propiedades de la plantilla y **sobreescribe** las que se listan después —crea un objeto nuevo, no muta el viejo—. **_state.editandoId_** es un pequeño estado que convierte el mismo formulario en "crear" o "editar" según si está seteado: es el interruptor que evita duplicar la plantilla. Al terminar se pone en `null` para volver al modo crear.

### ANALOGÍA: Rellenar la ficha existente vs abrir una nueva
Editar es como cuando un trámite ya tiene tu ficha: en vez de **abrir una ficha nueva** (crear), el empleado **saca la tuya, la corrige y la vuelve a archivar en su lugar**. **_state.editandoId_** es la nota "estoy corrigiendo la ficha N°X, no abriendo una nueva". Sin esa nota, cada corrección crearía una ficha duplicada.

### ESTRATEGIA VISUAL: map que toca solo una
Un array de 4 plantillas pasando por **_.map_**; tres salen idénticas (flecha recta) y una —la del id editado— sale transformada (con un pequeño destello y `{...}` encima indicando "objeto nuevo con cambios"). El array resultante es nuevo, mismo largo. Anclaje: *map recorre todas y crea un array nuevo; solo la editada cambia, y cambia como copia.*

---

## BLOQUE 3 — Datos derivados y funciones puras

*(Hasta acá la app guarda y modifica datos. Ahora aparece una categoría nueva: información que NO se guarda —el total, el conteo por hashtag— sino que se CALCULA del estado cada vez. Y con ella, el concepto de función pura, que es la forma limpia de calcularla.)*

---

### CONCEPTO: Función pura

Una **función pura** recibe datos y **devuelve un resultado** sin modificar nada externo y sin efectos secundarios: mismo input → mismo output, siempre. No toca el estado, no escribe en el DOM, no depende de nada de afuera — solo de sus argumentos. Es la forma ideal de **calcular** cosas, porque es predecible y fácil de probar.

**Sintaxis general:**
```javascript
function <nombre>(<entrada>) {
  // usa SOLO <entrada>; no modifica nada de afuera
  return <resultado>;   // mismo input -> mismo output
}
```

**Dependencia técnica:** en el lab, **_contarPorHashtag(plantillas)_** es pura: recibe el array, devuelve un objeto de conteos, y **no toca `state` ni el DOM**. Lo opuesto es una función con **efecto secundario** —como **_render()_**, que SÍ escribe en el DOM—. La distinción importa: las funciones puras se usan para DERIVAR datos; las de efecto (como render) para MOSTRARLOS. Separarlas mantiene el código ordenado.

### ANALOGÍA: La máquina expendedora
Una función pura es como una **máquina expendedora**: metés la misma moneda y el mismo botón (la entrada) y siempre sale el mismo producto (la salida). No cambia el clima ni te cobra de más ni recuerda tu compra anterior — su resultado depende solo de lo que metiste. Una función con efecto secundario, en cambio, "toca el mundo": prende una luz, guarda un registro, cambia la pantalla.

### ESTRATEGIA VISUAL: Caja de entrada → salida
Una caja etiquetada **_contarPorHashtag_** con una flecha de entrada (el array de plantillas) y una de salida (el objeto `{ "#ventas": 2, "#soporte": 1 }`), y un candado sobre el estado al costado indicando "no lo toca". Anclaje: *entra un dato, sale un resultado; nada externo se modifica.*

---

### CONCEPTO: Datos derivados (se calculan, no se guardan)

Los **datos derivados** son información que se **calcula a partir del estado** —el total de plantillas, el conteo por hashtag, la lista filtrada u ordenada— y que **NO se guarda** en el estado: se **recalcula en cada `render()`**. Guardarlos sería duplicar la verdad y arriesgar que queden desactualizados; derivarlos garantiza que siempre reflejen el estado actual.

**Sintaxis general:**
```javascript
const <derivado> = <funcionPura>(<estado>);   // se calcula al vuelo, no se almacena
```

**Fórmula del lab (HU3 — el panel de stats):**
```javascript
function renderStats() {
  const total = state.plantillas.length;                 // derivado: cantidad
  const porTag = contarPorHashtag(state.plantillas);     // derivado: conteo
  const detalle = Object.entries(porTag)
    .map(([hashtag, cantidad]) => `${hashtag}: ${cantidad}`)
    .join(" · ");
  document.getElementById("panel-stats").textContent = `Total: ${total}  |  ${detalle}`;
}
// renderStats() se llama al final de render()
```

**Dependencia técnica:** **_renderStats_** se llama **dentro de `render()`**, así que cada cambio del estado (agregar, editar, eliminar) recalcula las stats automáticamente — nunca quedan viejas. **_Object.entries(objeto)_** convierte **_{ "#ventas": 2 }_** en pares **_[["#ventas", 2]]_** para poder recorrerlos con **_.map_** (destructurando cada par como `[hashtag, cantidad]`). Punto pedagógico: el total y los conteos **no viven en el estado** — el estado solo tiene la lista de plantillas; todo lo demás se deriva.

### ESTRATEGIA VISUAL: El estado y sus reflejos
El objeto **_state_** al centro (solo la lista de plantillas), y alrededor tres "reflejos" derivados que salen de él por flechas de cálculo: el panel de stats, la lista visible (filtrada/ordenada) y el conteo por hashtag. Etiqueta: *"el estado guarda lo mínimo; todo lo demás se calcula de él en cada render".* Anclaje: *no guardes lo que puedas calcular.*

---

### CONCEPTO: `contarPorHashtag` con `.reduce` (+ `??` y `Object.entries`)

**_.reduce_** —visto en el M2— recorre un array y lo **acumula en un solo valor**. Acá el acumulador es un **objeto de conteos**: por cada plantilla, suma 1 a la clave de su hashtag. El operador **_??_** (nullish) da el valor inicial cuando la clave todavía no existe.

**Sintaxis general:**
```javascript
<array>.reduce(function (<acumulador>, <elemento>) {
  // actualiza <acumulador> con <elemento>
  return <acumulador>;
}, <valorInicial>);
```

**Fórmula del lab (HU3):**
```javascript
function contarPorHashtag(plantillas) {
  return plantillas.reduce(function (conteo, plantilla) {
    conteo[plantilla.hashtag] = (conteo[plantilla.hashtag] ?? 0) + 1;   // si no existe, arranca en 0
    return conteo;
  }, {});   // acumulador inicial: objeto vacio
}
// { "#ventas": 2, "#soporte": 1 }
```

**Dependencia técnica:** el valor inicial **_{}_** es el acumulador que se va llenando. **_conteo[plantilla.hashtag] ?? 0_**: si la clave del hashtag aún no existe en el objeto, **_??_** devuelve `0` para empezar a contar; si ya existe, devuelve su valor actual. Sin el **_?? 0_**, la primera suma sería **_undefined + 1_** = `NaN`. **Importante:** **_reduce_** acá construye un objeto nuevo sin tocar el array original — sigue siendo pura e inmutable.

### ETIMOLOGÍA / HISTORIA
**_reduce_** ("reducir") viene de la programación funcional: reduce una colección a un único valor (una suma, un objeto, un texto). Existe en casi todo lenguaje (**_fold_** en Haskell/Scala, **_reduce_** en Python). El operador **_??_** (nullish coalescing) es reciente en JS (**ES2020**): devuelve el lado derecho solo si el izquierdo es `null` o `undefined` — más preciso que **_||_**, que también se dispara con `0` o `""`.

### ESTRATEGIA VISUAL: La bolsa que se va llenando
Una fila de plantillas entrando de a una a una "bolsa" (el acumulador `{}`); por cada una, se marca una rayita en la casilla de su hashtag. Al final, la bolsa muestra `#ventas: 2 · #soporte: 1`. Anclaje: *reduce arranca con una bolsa vacía y la va llenando elemento por elemento.*

---

## BLOQUE 4 — La lista que se muestra también es derivada: filtrar y ordenar

*(La lista en pantalla deja de ser el estado crudo. Ahora es un dato derivado: se filtra por hashtag y se ordena, y ese pipeline vive en una función que el render usa. Aquí entra el otro concepto ancla del día: `.sort()` con comparador — que además obliga a copiar antes, atando de vuelta con la inmutabilidad.)*

---

### CONCEPTO: Filtrar — `plantillasVisibles` y el filtro en el estado

Filtrar es mostrar **solo** las plantillas que coinciden con lo que el usuario escribe. La clave: el `render()` deja de recorrer **_state.plantillas_** y pasa a recorrer una función derivada **_plantillasVisibles()_**, que aplica el filtro. El texto del filtro **vive en el estado** (**_state.filtro_**), igual que cualquier otro dato de la app.

**Sintaxis general:**
```javascript
function plantillasVisibles() {
  if (<sin filtro>) return <lista completa>;
  return <lista>.filter(<el> => <el coincide con el filtro>);
}
```

**Fórmula del lab (HU4):**
```javascript
function plantillasVisibles() {
  const filtroTexto = (state.filtro ?? "").toLowerCase();
  if (filtroTexto === "") return state.plantillas;
  return state.plantillas.filter(p => p.hashtag.toLowerCase().includes(filtroTexto));
}

document.getElementById("buscador").addEventListener("input", function (evento) {
  state.filtro = evento.target.value;   // el filtro vive en el estado
  render();                             // mismo render, datos distintos
});
```

**Dependencia técnica:** reusa **_.includes_** y **_.toLowerCase_** de C13 para comparar sin importar mayúsculas. El evento **_input_** dispara en cada tecla → filtrado **al instante**. El patrón sigue siendo el mismo: cambia el estado (**_state.filtro_**) → `render()` → pero ahora `render()` recorre **_plantillasVisibles()_**. **Detalle:** las **stats siguen contando el estado completo**, no lo filtrado —el total es el real—; solo la lista mostrada se filtra.

### ESTRATEGIA VISUAL: El mismo render, dos entradas
El `render()` en el centro con un "conmutador" de entrada: sin filtro entra `state.plantillas` (todas); con filtro entra `plantillasVisibles()` (subconjunto). La salida (la lista pintada) cambia, pero el render es el mismo. Anclaje: *no cambiamos cómo se dibuja, cambiamos QUÉ se le da para dibujar.*

---

### CONCEPTO: `.sort()` con comparador (fecha y alfabético) — y por qué copiar antes

**_.sort()_** ordena un array usando un **comparador**: una función **_(a, b)_** que devuelve un número **negativo** si `a` va antes, **positivo** si `a` va después, `0` si da igual. Para texto se usa **_localeCompare_** (respeta tildes y mayúsculas); para fechas, la resta de dos **_new Date(...)_**. **_.sort()_ MUTA** el array sobre el que actúa — por eso se copia con **_[...]_** antes de ordenar, para no alterar el estado (inmutabilidad, otra vez).

**Sintaxis general:**
```javascript
<array>.sort((a, b) => <negativo si a va antes, positivo si despues>);
// texto:  a.localeCompare(b)
// numero/fecha:  valorDeA - valorDeB
```

**Fórmula del lab (HU5):**
```javascript
function ordenar(plantillas) {
  const copia = [...plantillas];              // .sort() muta -> copiamos primero
  if (state.orden === "alfabetico") {
    return copia.sort((a, b) => a.titulo.localeCompare(b.titulo));       // A-Z
  }
  return copia.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));    // recientes primero
}
```

**Dependencia técnica:** **_localeCompare_** devuelve negativo/positivo comparando dos textos según el idioma —por eso ordena bien "á" y mayúsculas, cosa que comparar con **_<_** no logra—. La resta **_new Date(b.fecha) - new Date(a.fecha)_** da un número (milisegundos de diferencia): con `b - a` las más **recientes** quedan primero. Se envuelve cada fecha en **_new Date(...)_** para que funcione **aunque `p.fecha` sea texto** —clave para C15, cuando los datos guardados vuelvan como string—. **El detalle inmutable:** como **_.sort()_** cambia el array original, copiar con **_[...plantillas]_** antes es lo que evita mutar el estado. El orden elegido vive en **_state.orden_**.

**Pipeline "qué mostrar" (filtrar → ordenar):**
```javascript
function plantillasVisibles() {
  const filtradas = <filtro aplicado a state.plantillas>;
  return ordenar(filtradas);   // primero filtra, luego ordena
}
```

### ANALOGÍA: El comparador como árbitro de a dos
**_.sort()_** no ordena mirando toda la fila de golpe: va **comparando de a dos** y preguntándole al comparador "de estos dos, ¿cuál va primero?". El comparador es el **árbitro**: responde con un signo (antes/después) y `.sort()` acomoda según esas respuestas. Cambiando el árbitro (por título o por fecha) cambia el criterio sin tocar los datos.

### ETIMOLOGÍA / HISTORIA
**_localeCompare_** viene de "locale" (la configuración regional: idioma, tildes, orden alfabético de cada lengua). Ordenar texto "a mano" con **_<_** compara por código de carácter —y ahí "Z" va antes que "a", y "ñ" queda fuera de lugar—; **_localeCompare_** usa las reglas del idioma. Que **_.sort()_** mute es una herencia de JavaScript viejo (muchos métodos de array mutaban); los métodos modernos como **_.toSorted()_** (ES2023) NO mutan, pero **_.sort()_** clásico sí — por eso el hábito de copiar antes.

### ESTRATEGIA VISUAL: Copiar, después ordenar
Tres pasos horizontales: el array del estado → **_[...]_** produce una copia al costado (el original queda intacto, atenuado) → la copia pasa por **_.sort(comparador)_** y sale ordenada. Debajo, dos comparadores intercambiables: "A-Z (localeCompare)" y "recientes (new Date b - a)". Anclaje: *sort muta lo que toca; por eso tocamos una copia, no el estado.*

---

## CIERRE — hilo conductor + qué se lleva el alumno

### El arco del Módulo 4 (Gestor de Plantillas WhatsApp)
```
C13  Modelado + Texto    → clase Template + estado + render + metodos de String   ← hecho
C14  Interaccion + Datos → CRUD completo (editar/eliminar) inmutable + delegacion  ← HOY
     derivados             de eventos + datos derivados + filtrar/ordenar
C15  Persistencia        → localStorage: lo que vive en memoria, se guarda
C16  (M4)                → lab calificado del modulo
```
La misma app crece: C13 la montó (crear/leer); hoy se completa el CRUD (editar/borrar) y se vuelve interactiva, calculando datos derivados. El "se pierde al recargar" sigue siendo deuda a propósito → C15.

### Concepto pedagógico clave del día (las 2 tesis)
1. **Se actualiza el estado generando uno NUEVO, nunca mutando el viejo (inmutabilidad).** Eliminar con `.filter`, editar con `.map` + spread, ordenar copiando con `[...]`. Es el hábito que exige cualquier framework moderno.
2. **La UI entera es un dato DERIVADO del estado.** El total, los conteos, la lista filtrada y ordenada NO se guardan: se recalculan en cada `render()`. El estado guarda lo mínimo; todo lo demás se deriva.

### Mensaje que se lleva el alumno
**Una app interactiva no es "muchos listeners y datos guardados por todos lados": es un estado mínimo, actualizado sin mutar, del que se DERIVA todo lo que se ve.** Con un solo listener (delegación), operaciones inmutables (filter/map/spread) y funciones puras que calculan (reduce/sort), la app hace CRUD completo, cuenta, filtra y ordena — y nunca se desincroniza, porque todo pasa por `render()`.

### Conexiones a futuro
- **Delegación de eventos** se usa en cualquier lista interactiva (feeds, carritos, bandejas) para siempre.
- **Inmutabilidad** es la base directa de React/Redux y de todo manejo de estado moderno.
- **Datos derivados / funciones puras** son el patrón "vista = f(estado)" de los frameworks.
- **`.sort()` copiando + `new Date(...)`** prepara C15: cuando los datos vuelvan de `localStorage` como texto, el orden por fecha seguirá funcionando.

### Tabla resumen de conceptos

| Bloque | Conceptos |
|---|---|
| **B1 — Identidad + delegación** | id único (`crypto.randomUUID()`, un texto) · Delegación de eventos (1 listener en el padre, bubbling) · `event.target` / `classList.contains` / `dataset` |
| **B2 — Inmutabilidad (CLAVE)** | Mutar vs no-mutar (reemplazar con copia) · Eliminar con `.filter` (Borrar) · Editar con `.find` + `.map` + spread + `state.editandoId` (Actualizar) |
| **B3 — Datos derivados** | Función pura ((entrada)→resultado) · Datos derivados (se calculan, no se guardan) · `contarPorHashtag` con `.reduce` (+ `??` + `Object.entries`) |
| **B4 — Filtrar y ordenar** | `plantillasVisibles` (filtro en el estado, `.filter`/`.includes`) · `.sort()` + comparador (`localeCompare` / `new Date`) · copiar con `[...]` porque `.sort()` muta · pipeline filtrar → ordenar |
