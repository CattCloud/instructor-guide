# CAPA 0 — CLASE 13: Modelado de Datos y Manipulación de Texto

> **Fuentes:** **_code201/class-13/README.md_** · **_code201/class-13/lab/README.md_** *(inputs canónicos: README de clase + lab. Se ignoran los assets de `lab/assets/` —`products.json`, imágenes retro, `vote_tracker_logo`— por decisión de Eric: no los referencia el lab de Plantillas WhatsApp.)*
> **Módulo:** M4 — Clase 1 de 4 (**ARRANQUE del Módulo 4**)
> **Proyecto víctima:** **Gestor de Plantillas para WhatsApp** (repo **_whatsapp-templates_**, rama **_main_**) — app NUEVA que acompaña C13-C16. Hoy se monta su base: modelo de datos + estado central + render + manipulación de texto.
> **Continuidad:** se reutilizan tres cosas ya vistas — la sintaxis de **clases** (`class`, `constructor`, `this`) del **M2 (POO)**; la **captura de formularios** (`input.value`, `addEventListener('submit', ...)`, `event.preventDefault()`) y el **DOM** (`createElement`, `appendChild`, `innerHTML`) del **M3**; y **Tailwind por CDN** del M2. Hoy NADA de eso se enseña de cero: se ensambla sobre un modelo de datos propio y se le suma el corazón del día, los **métodos de String**.
> **Sin lab calificado:** C13 es clase regular de M4 (el lab calificado del módulo llega en la última clase, C16).
> **Sin persistencia HOY:** todo vive en memoria. Si el alumno recarga, se pierde todo. Es **a propósito** — la persistencia con `localStorage` llega en C15. Conviene decirlo explícito para que nadie lo sienta como un bug.
> **Sin internet requerido:** la clase no consume APIs (a diferencia de C10-C12). Todo corre local con Live Server.

---

## Idea fuerza de la clase

**De datos sueltos a una app con estructura — y el día en que el alumno descubre que un texto es un objeto con superpoderes.** Dos movimientos grandes: (1) **dar estructura a los datos** — modelar cada plantilla con una `class`, centralizar todo en un **estado** único que es la verdad de la app, y dibujar la pantalla SIEMPRE desde ahí con el patrón `render()` (cambia el estado → se redibuja); (2) **manipular texto** — usar los métodos de String que un desarrollador toca a diario (`.trim()`, `.toLowerCase()`, `.replaceAll()`, `.slice()`, `.split()`) para limpiar lo que escribe el usuario, normalizarlo para que siempre quede igual, y transformar una plantilla con `{nombre}` en un mensaje final listo para enviar. El estado central y el patrón render son el **modelo mental que todo framework moderno da por sentado**; los métodos de String son la herramienta más usada y menos enseñada del lenguaje.

---

## BLOQUE 1 — Modelar datos: la clase como molde + el estado central

*(Antes de pintar nada en pantalla, el alumno tiene que decidir CÓMO se ven sus datos en memoria. Este bloque cierra la pregunta "¿dónde vive la información de mi app y con qué forma?". Reusa la sintaxis de clases del M2, pero le da un uso nuevo: modelar DATOS, no comportamiento. Y nombra por primera vez de forma explícita el concepto de "estado central", que en M3 ya se intuía con la lista de la Pokédex pero nunca se formalizó.)*

---

### CONCEPTO: Modelar datos con una `class` (la clase como molde)

Una **clase** es un **molde** que define qué propiedades tendrá cada objeto de un mismo tipo. En el M2 se usó para modelar comportamiento (objetos con métodos); hoy se usa para **modelar datos**: cada plantilla del usuario será un objeto **_Template_** con las mismas propiedades —título, mensaje, hashtag, fecha— creado desde un único molde. **Modelar** es decidir, antes de programar la lógica, qué campos describen a "una cosa" del dominio (una plantilla, un producto, un usuario).

**Sintaxis general:**
```javascript
class <Nombre> {
  constructor(<param1>, <param2>) {
    this.<propiedad1> = <param1>;
    this.<propiedad2> = <param2>;
    this.<propiedadAuto> = <valor calculado>;   // no todo viene por parámetro
  }
}
const objeto = new <Nombre>(<arg1>, <arg2>);
```

**Fórmula del lab (HU1 — el molde `Template`):**
```javascript
class Template {
  constructor(titulo, mensaje, hashtag) {
    this.titulo = titulo;
    this.mensaje = mensaje;
    this.hashtag = hashtag;
    this.fecha = new Date();   // ← se calcula sola, no viene como parámetro
  }
}
```

**Dependencia técnica:** **_new Template("Saludo", "Hola {nombre}", "ventas")_** ejecuta el `constructor` y devuelve un objeto con las cuatro propiedades. Detalle pedagógico clave: **_fecha_** NO es un parámetro — se calcula adentro del constructor con **_new Date()_**. Eso muestra que el constructor puede hacer trabajo, no solo copiar argumentos a propiedades. Por convención del proyecto el molde vive en su propio archivo **_js/models/Template.js_**, separado de la lógica (`app.js`) — primera vez que el alumno separa el modelo de datos del resto del código.

### ANALOGÍA: El molde de galletas

La clase es el **molde de galletas**; cada objeto creado con **_new_** es una **galleta**. Todas salen con la misma forma (las mismas propiedades), pero cada una lleva su propio relleno (sus propios valores). El molde no se come — no es una galleta real, es la forma que las produce.

### ETIMOLOGÍA / HISTORIA
El término **_class_** viene de la Programación Orientada a Objetos formalizada en **Simula (1967)** y popularizada por **Smalltalk (1980)** y **C++ (1985)**. JavaScript no tuvo la palabra `class` hasta **ES6 (2015)** — antes se modelaban objetos con funciones constructoras y prototipos. La `class` de JS es "azúcar sintáctica" sobre ese sistema de prototipos: por dentro sigue siendo lo mismo, pero se lee como en Java o C++.

### ESTRATEGIA VISUAL: Molde → instancias
Un panel con un rectángulo grande a la izquierda etiquetado "molde **_Template_**" que lista las 4 propiedades vacías (`titulo: ___`, `mensaje: ___`, `hashtag: ___`, `fecha: ___`). A la derecha, tres tarjetas-galleta idénticas en forma pero con valores distintos rellenos. Una flecha **_new_** del molde a cada tarjeta. Anclaje: *un molde, muchos objetos con la misma forma y distinto contenido.*

---

### CONCEPTO: Estado central (la única fuente de verdad)

El **estado** es la representación de los **datos actuales** de una aplicación (o de una parte de ella) **en un momento específico**, que **cambia en respuesta a las interacciones o eventos** del usuario. El **estado central** lo reúne en un **único objeto** que contiene TODOS los datos vivos de la app. Tres propiedades lo definen: es la **fuente de verdad** (si algo no está en el estado, no existe en la pantalla), se **comparte** entre las distintas partes de la app (por eso se centraliza, para no tener copias sueltas que se contradigan), y **cambia en el tiempo** (cada acción del usuario lo modifica y la app reacciona redibujando). Centralizar evita el caos de datos repartidos en variables sueltas y nodos del DOM que se contradicen. Hoy el estado es un objeto con una lista adentro: **_const state = { plantillas: [] }_**.

**Tipos de estado (referencia, de los apuntes):** una app grande tiene estado **global** —compartido por toda la app (usuario logueado, tema claro/oscuro, carrito)— y estado **local** —solo relevante para una parte (si un menú está abierto, el texto de un buscador)—. La app de C13 tiene **un solo estado central y global**: la lista de plantillas.

**Cómo identificar el estado (método de 2 preguntas):** (1) *¿qué información tiene que recordar mi app?* → listar todos los datos; (2) *¿cada dato se usa en varias partes o en una sola?* → clasificarlo global o local. En clase se aplica primero a un ejemplo conocido (tienda en línea) y después a la app de plantillas.

**Sintaxis general:**
```javascript
const state = {
  <coleccion>: [],     // los datos vivos de la app
};
```

**Fórmula del lab (HU1):**
```javascript
const state = { plantillas: [] };   // ← la única verdad de la app

function agregarPlantilla(titulo, mensaje, hashtag) {
  const nueva = new Template(titulo, mensaje, hashtag);
  state.plantillas = [...state.plantillas, nueva];   // se SUMA al estado
}
```

**Dependencia técnica:** todo lo que pasa en la app es una de dos cosas: **leer el estado** (para pintarlo) o **cambiar el estado** (agregar/quitar/editar). Nunca se dibuja "a mano" un dato que no esté en **_state_**. Esa disciplina es la base de todo: cuando en C14-C16 se agreguen editar y borrar plantillas, también pasarán por modificar **_state.plantillas_** y volver a renderizar. El estado es el **centro**; la pantalla es un **reflejo**.

### ANALOGÍA: El tablero de control
El estado es el **tablero de control** de la app — un solo lugar donde está toda la información real. Las pantallas, botones y luces no inventan datos: muestran lo que dice el tablero. Si la pantalla y el tablero no coinciden, el tablero gana — porque es la fuente de verdad.

### ESTRATEGIA VISUAL: Estado al centro, pantalla como reflejo
Un objeto **_state_** dibujado en el centro con la lista de plantillas adentro. Una flecha **_render()_** que sale del estado hacia una maqueta de pantalla a la derecha (la lista pintada). Etiqueta sobre la flecha: *"la pantalla SIEMPRE se deriva del estado, nunca al revés"*. Anclaje: *un solo origen de datos → una pantalla que nunca miente.*

---

### CONCEPTO: CRUD — las 4 operaciones sobre el estado

**CRUD** es el acrónimo de las **cuatro operaciones básicas** que una aplicación realiza sobre sus datos: **C**rear (Create), **L**eer (Read), **A**ctualizar (Update) y **B**orrar (Delete). Es el vocabulario estándar de cualquier app que gestiona información —desde una agenda hasta una red social—. Toda interacción del usuario con los datos cae en una de esas cuatro categorías, y todas pasan por el **estado central**.

**Tabla — CRUD en el proyecto de plantillas:**

| Operación | Qué hace | En el proyecto | Cuándo |
|---|---|---|---|
| **C**reate (Crear) | Agrega un dato nuevo al estado | `agregarPlantilla(...)` suma una `Template` a la lista | **C13 (HU1)** |
| **R**ead (Leer) | Muestra los datos del estado | `render()` pinta la lista en pantalla | **C13 (HU2)** |
| **U**pdate (Actualizar) | Modifica un dato existente | Editar una plantilla | C14 |
| **D**elete (Borrar) | Quita un dato del estado | Eliminar una plantilla | C14 |

**Dependencia técnica:** hoy C13 cubre **solo C y R** (crear y leer) — son las dos operaciones que dan sentido a montar el estado y el render. **U y D (actualizar y borrar) llegan en C14**, reusando el mismo estado central y el mismo patrón render: cambias el estado (lo agregás, lo editás, lo quitás) → llamás `render()`. Nombrar CRUD hoy le da al alumno el mapa completo de hacia dónde va el módulo, aunque hoy solo se construyan las dos primeras letras.

### ESTRATEGIA VISUAL: El cuadrante CRUD
Un cuadrante 2×2 con las 4 letras (C-R-U-D), cada celda con su operación y un ícono. Las celdas **C** y **R** resaltadas en verde con etiqueta "HOY (C13)"; las celdas **U** y **D** atenuadas en gris con etiqueta "C14". En el centro del cuadrante, el objeto **_state_** —para mostrar que las 4 operan sobre el mismo estado—. Anclaje: *toda app maneja datos con estas 4 operaciones; hoy construimos las dos primeras.*

---

### CONCEPTO: Separar el código en archivos (organización del proyecto)

En vez de amontonar todo el JavaScript en un solo archivo, el proyecto lo **separa por responsabilidad**: el **modelo de datos** (la clase **_Template_**) vive en **_js/models/Template.js_**, aparte de la lógica de la app (**_js/app.js_**). Beneficios: **organización** (cada cosa en su lugar), **reutilización** (el modelo se puede usar en otro archivo) y **mantenibilidad** (un fallo del modelo se busca en un solo archivo).

**Sintaxis general — cómo se cargan (con etiquetas `<script>` en orden):**
```html
<!-- El ORDEN importa: primero el que se define, después el que lo usa -->
<script src="js/models/Template.js"></script>   <!-- define Template -->
<script src="js/app.js"></script>               <!-- usa Template -->
```

**Dependencia técnica:** las dos etiquetas **_&lt;script&gt;_** se cargan **en orden** en el HTML y comparten el ámbito global. Si **_app.js_** se cargara antes que **_Template.js_**, fallaría: la clase no existiría todavía. *(La forma moderna de organizar archivos —**ES Modules** con `import`/`export`— NO se toca hoy: se ve en **C16**. Hoy basta con separar los archivos y cargarlos en orden.)*

### ANALOGÍA: Los cajones rotulados
Tener todo el código en un archivo es como un cajón único donde tirás documentos, llaves, cables y recibos: encontrar algo es una pelea. Separar es poner **cajones rotulados** —uno para cada tipo de cosa—: el modelo de datos en su cajón, la lógica en el suyo. Sabés exactamente dónde buscar.

---

### CONCEPTO: Reasignar en vez de mutar (`[...lista, nuevo]` y no `.push`)

Para agregar al estado, el lab usa **_state.plantillas = [...state.plantillas, nueva]_** — crea un array NUEVO con todo lo viejo más el elemento nuevo y lo reasigna — en lugar de **_state.plantillas.push(nueva)_**, que modifica el array existente. La diferencia es **mutar** (cambiar el array que ya existe) vs **reasignar** (crear uno nuevo y apuntar el estado a él). El resultado visible es el mismo; el hábito que se construye no.

**Sintaxis general:**
```javascript
// Reasignar (preferido en este patrón)
<lista> = [...<lista>, <nuevoElemento>];
// Mutar (evitado)
<lista>.push(<nuevoElemento>);
```

**Concepto pedagógico clave:** *cambiar el estado = reasignarlo con una copia que incluye el cambio.* Se construye el reflejo "para tocar el estado, lo reemplazo entero". No es por una regla mágica: es el mismo hábito de inmutabilidad que se nombró en el M2, y es exactamente lo que un framework como React exigirá después para detectar que el estado cambió. Hoy no hace falta justificarlo a fondo — basta dejar el patrón instalado y nombrarlo.

### ETIMOLOGÍA / HISTORIA
El operador **_..._** (spread) entró en **ES6 (2015)**. Antes había que copiar arrays con **_.concat()_** o **_.slice()_**. El estilo "no mutar, reasignar" se volvió dominante con **Redux (2015)** y React, que dependen de comparar referencias de objetos para saber si algo cambió: si mutás el mismo array, la referencia no cambia y el framework "no se entera".

### ESTRATEGIA VISUAL: Copiar-y-sumar vs empujar
Dos filas. Arriba (reasignar): el array viejo `[A, B]` con una flecha hacia un array NUEVO `[A, B, C]`, el viejo se descarta. Abajo (mutar): el mismo array `[A, B]` al que se le mete `C` adentro quedando `[A, B, C]` — misma caja, modificada. Anclaje: *mismo resultado en pantalla, distinto hábito: hoy elegimos crear una copia nueva.*

---

## BLOQUE 2 — Del estado a la pantalla: el patrón `render()` + `Date`

*(Ya hay datos con forma y un lugar donde viven. Falta el puente al usuario: cómo el estado se convierte en pantalla, y cómo se mantienen sincronizados sin recargar. Este bloque formaliza el patrón render —que en M3 se usó intuitivamente— como la regla central de la app. Y mete `Date`, que es donde se ve el primer dato "calculado" del modelo.)*

---

### CONCEPTO: El patrón `render()` (limpiar → recorrer → crear)

**_render()_** es la función que **dibuja toda la pantalla desde el estado**. Su contrato es siempre el mismo: **(1) limpia** el contenedor (`innerHTML = ""`), **(2) recorre** el estado con un bucle, **(3) crea y agrega** un nodo del DOM por cada dato. La regla de oro de toda la app: **cambias el estado → llamas `render()`**. Y `render()` siempre redibuja TODO de cero, no parchea lo que cambió.

**Sintaxis general:**
```javascript
function render() {
  <contenedor>.innerHTML = "";                 // 1. limpia lo anterior
  <estado>.<coleccion>.forEach(function (item) {
    const nodo = document.createElement("<tag>");
    nodo.innerHTML = `<contenido con ${item.<prop>}>`;
    <contenedor>.appendChild(nodo);            // 3. agrega un nodo por dato
  });
}
```

**Fórmula del lab (HU2):**
```javascript
const lista = document.getElementById("listaPlantillas");

function render() {
  lista.innerHTML = "";
  state.plantillas.forEach(function (p) {
    const fechaTexto = p.fecha.toLocaleDateString("es-PE");
    const li = document.createElement("li");
    li.className = "bg-white p-3 rounded-lg shadow";
    li.innerHTML = `<strong>${p.titulo}</strong>
      <span class="text-xs text-slate-400">${fechaTexto}</span>
      <br>${p.mensaje}`;
    lista.appendChild(li);
  });
}
```

**Dependencia técnica:** el paso **(1) limpiar es lo que evita duplicados**. Si no se vacía el contenedor antes de recorrer, cada `render()` apila las plantillas de nuevo sobre las que ya estaban — el bug clásico del principiante. Como `render()` redibuja todo desde el estado, la pantalla **nunca puede quedar desincronizada**: lo que se ve es exactamente lo que hay en **_state_**, ni más ni menos. El disparador es el `submit` del formulario: se agrega al estado, se llama `render()`, se resetea el form.

**Comportamiento por default a advertir:** un **_innerHTML = ""_** borra TODOS los hijos del contenedor de golpe — es la forma más simple de "limpiar". Recorrer con **_forEach_** un array vacío simplemente no dibuja nada (no es error): por eso al arrancar, con `state.plantillas = []`, la lista aparece vacía sin romperse.

### ANALOGÍA: La pizarra que se borra entera
`render()` es como una **pizarra que se borra completa y se reescribe** cada vez que cambia algo, en vez de tachar y corregir encima. Borrar y reescribir desde la fuente (el estado) garantiza que no queden restos viejos ni medias correcciones — la pizarra siempre refleja exactamente la lista actual.

### ETIMOLOGÍA / HISTORIA
**"Render"** (del inglés "representar/dibujar") viene de los gráficos por computadora. El patrón "vista = f(estado)" —la pantalla es una función pura del estado— se popularizó con **React (2013)**: en vez de manipular el DOM a mano en mil lugares, describís cómo se ve la UI para un estado dado y el framework redibuja. Este `render()` manual es la versión "a mano" de esa idea — entenderla acá hace trivial entender cualquier framework después.

### ESTRATEGIA VISUAL: El ciclo estado → render → pantalla
Un diagrama circular de tres nodos: **_state_** (datos) → flecha **_render()_** → **pantalla** (lista pintada) → flecha "el usuario agrega" → vuelve a **_state_**. En el nodo `render()`, tres mini-pasos numerados: 1 limpiar, 2 recorrer, 3 crear nodo. Anclaje: *un solo camino: el estado manda, render obedece, la pantalla refleja.*

---

### CONCEPTO: El objeto `Date` (registrar y mostrar la fecha)

**_Date_** es el objeto nativo de JavaScript para representar un **momento en el tiempo** (fecha + hora). **_new Date()_** sin argumentos captura el **instante actual**. Por dentro guarda muchísima información; hoy se usan solo dos cosas: crearlo (en el constructor, para sellar cuándo se creó la plantilla) y convertirlo a texto legible (en `render()`, para mostrarlo).

**Sintaxis general:**
```javascript
const ahora = new Date();                       // momento actual
ahora.toLocaleDateString("<locale>");           // → fecha como texto legible
```

**Fórmula del lab:**
```javascript
this.fecha = new Date();                         // HU1: sella el momento de creación
p.fecha.toLocaleDateString("es-PE");             // HU2: → "29/6/2026"
```

**Dependencia técnica:** **_new Date()_** guarda el instante como un objeto, NO como texto — por eso necesita **_.toLocaleDateString("es-PE")_** para volverse legible en formato peruano (día/mes/año). Otros métodos útiles que el alumno puede explorar: **_.getFullYear()_** (el año), **_.getDate()_** (el día del mes). Detalle clave: la fecha se guarda **una sola vez**, en el constructor, en el momento de crear la plantilla — no se recalcula en cada render. Así cada plantilla recuerda CUÁNDO nació, aunque se redibuje mil veces.

**Comportamiento por default a advertir:** si se imprime un **_Date_** directamente en el HTML sin convertirlo, sale un texto larguísimo e ilegible (`Mon Jun 29 2026 14:03:21 GMT-0500...`). Por eso SIEMPRE se formatea con **_.toLocaleDateString()_** antes de mostrarlo.

### ANALOGÍA: El sello de fecha del cajero
**_new Date()_** en el constructor es como el **sello fechador** que el cajero del banco estampa en un comprobante: marca el instante exacto de la operación y queda fijo para siempre en ese papel. No importa cuántas veces fotocopies el comprobante después — la fecha estampada no cambia.

### ETIMOLOGÍA / HISTORIA
El objeto **_Date_** de JS existe desde la primera versión del lenguaje (1995) y guarda el tiempo como milisegundos desde el **1 de enero de 1970** (el "epoch" de Unix). Es famoso por ser una de las APIs más incómodas del lenguaje (los meses van de 0 a 11, por ejemplo). Por eso en proyectos grandes se usan librerías como **date-fns** o el nuevo **Temporal**; pero para mostrar una fecha simple, **_toLocaleDateString_** alcanza y sobra.

### ESTRATEGIA VISUAL: El objeto Date vs su versión legible
Dos cajas conectadas por una flecha **_.toLocaleDateString("es-PE")_**: a la izquierda el objeto crudo con el texto larguísimo (`Mon Jun 29 2026 14:03:...`) tachado en gris con etiqueta "ilegible"; a la derecha `29/6/2026` en grande con etiqueta verde "lo que ve el usuario". Anclaje: *el Date guarda el instante; toLocaleDateString lo traduce a humano.*

---

## BLOQUE 3 — Texto es un objeto: métodos de String para limpiar, normalizar y validar

*(El corazón conceptual del día. El alumno viene tratando los strings como "texto plano" — pero un string es un objeto con métodos, igual que un array. Este bloque abre ese mundo: primero el panorama de métodos, después los de limpieza (trim, toLowerCase), después el concepto pedagógico fuerte —normalizar— y la validación de entrada. Todo aplicado a lo que escribe el usuario en el formulario.)*

---

### CONCEPTO: Un texto es un objeto con métodos

En JavaScript, **un string no es solo una cadena de caracteres: es un objeto que trae métodos** —funciones que se le llaman con punto, igual que a un array—. Esos métodos **no modifican el texto original** (los strings son inmutables): siempre **devuelven un texto nuevo** o un valor (un booleano, un número, un array). Conocer el catálogo es lo que separa "pelear con el texto a mano" de "transformarlo en una línea".

**Sintaxis general:**
```javascript
"<texto>".<metodo>(<argumentos>);   // devuelve un valor nuevo; NO toca el original
```

**Panorama — los métodos de String del día:**

| Método | Qué devuelve | Para qué hoy |
|---|---|---|
| **_.trim()_** | Texto sin espacios al inicio/final | Limpiar lo que escribe el usuario |
| **_.toLowerCase()_** | Texto todo en minúsculas | Unificar mayúsculas/minúsculas |
| **_.startsWith(`x`)_** | `true` / `false` si empieza con `x` | Asegurar que el hashtag empiece con `#` |
| **_.includes(`x`)_** | `true` / `false` si contiene `x` | Buscar una subcadena (búsquedas futuras) |
| **_.replaceAll(`a`, `b`)_** | Texto con TODAS las `a` cambiadas por `b` | Sustituir variables `{nombre}` |
| **_.slice(inicio, fin)_** | Un pedazo del texto | Recortar (logro opcional: vista previa) |
| **_.split(`sep`)_** | Un **array** partido por `sep` | Separar varios hashtags |
| **_.length_** | El número de caracteres (propiedad, sin `()`) | Validar campos vacíos / contar |

**Dependencia técnica:** como cada método **devuelve un valor nuevo sin tocar el original**, se pueden **encadenar**: **_texto.trim().toLowerCase()_** primero recorta espacios y sobre ese resultado pasa a minúsculas. Detalle a recalcar: **_.length_** NO lleva paréntesis (es una propiedad, no un método), mientras que **_.trim()_** sí (es un método). Es la confusión número uno del alumno principiante.

### ANALOGÍA: La navaja suiza del texto
Un string es como una **navaja suiza**: parece una simple hoja, pero trae herramientas plegadas adentro —tijera, lima, destornillador—. Cada método es una de esas herramientas: las desplegás con el punto (`.trim()`, `.split()`) según lo que necesites cortar, limpiar o partir. La navaja (el texto original) no se gasta: cada uso te entrega una copia trabajada.

### ETIMOLOGÍA / HISTORIA
La palabra **"string"** (literalmente "hilera/cuerda") viene de la idea de caracteres ensartados en fila, como cuentas en un hilo. La inmutabilidad de los strings es una decisión de diseño compartida con **Java** y **Python**: hace los textos seguros de compartir entre partes del programa, porque nadie los puede cambiar por debajo. Por eso todo método "transforma devolviendo una copia" en vez de editar en el lugar.

### ESTRATEGIA VISUAL: La navaja suiza de métodos
Una tarjeta por cada método (8 tarjetas en grilla), cada una con el nombre en monospace azul, un mini-ejemplo de entrada → salida (`"  Hola "` → `"Hola"` para trim), y un ícono del tipo de retorno (texto / booleano / array / número). La de **_.length_** marcada distinto (sin paréntesis) para recalcar que es propiedad. Anclaje: *un texto trae 8 herramientas plegadas; hoy las usamos todas.*

---

### CONCEPTO: Limpiar con `.trim()` y unificar con `.toLowerCase()`

**_.trim()_** elimina los **espacios en blanco al inicio y al final** de un texto (no los del medio). **_.toLowerCase()_** convierte **todo el texto a minúsculas**. Juntos son la base de la limpieza: lo que el usuario escribe viene "sucio" —con espacios accidentales, mayúsculas inconsistentes— y estos dos métodos lo dejan parejo antes de guardarlo.

**Sintaxis general:**
```javascript
"<texto>".trim();          // quita espacios de las puntas
"<texto>".toLowerCase();   // todo a minúscula
```

**Fórmula:**
```javascript
"  Ventas ".trim();              // → "Ventas"
"Ventas".toLowerCase();          // → "ventas"
"  Ventas ".trim().toLowerCase();// → "ventas"  (encadenados)
```

**Dependencia técnica:** **_.trim()_** NO toca los espacios internos —`"hola  mundo".trim()` sigue teniendo los dos espacios del medio—; solo limpia las puntas. Por eso sirve para entradas de formulario, donde el problema típico es el espacio accidental al final. Encadenar **_.trim().toLowerCase()_** funciona porque el primero devuelve un texto y el segundo opera sobre ese texto devuelto — el orden no importa para el resultado, pero por legibilidad se limpia primero.

### ANALOGÍA: Planchar la ropa antes de guardarla
Limpiar el texto es como **planchar y doblar la ropa antes de meterla al cajón**: la sacás de la lavadora arrugada y de cualquier forma (el input crudo), y la dejás pareja y uniforme antes de guardarla. Así, cuando la saques después, siempre está en el mismo estado prolijo.

### ESTRATEGIA VISUAL: La cinta de limpieza
Una "cinta transportadora" horizontal: entra `"  Ventas "` (con espacios y mayúscula, marcado en rojo) → pasa por la estación **_.trim()_** (caen los espacios) → pasa por **_.toLowerCase()_** (la V se vuelve v) → sale `"ventas"` limpio en verde. Anclaje: *la entrada del usuario entra cruda y sale uniforme.*

---

### CONCEPTO: Normalizar — que distintas variantes queden iguales

**Normalizar** es transformar una entrada para que **todas sus variantes razonables terminen idénticas**. Es un concepto, no un método: se construye combinando varios métodos de String. El caso del lab: el hashtag debe quedar siempre en minúscula y empezando con `#`, de modo que `Ventas`, ` ventas` y `#VENTAS` se guarden los tres como `#ventas`. Sin normalizar, la misma categoría aparecería escrita de tres formas y la app la trataría como tres cosas distintas.

**Sintaxis general (composición de métodos):**
```javascript
function normalizar(<texto>) {
  const limpio = <texto>.trim().toLowerCase();
  return limpio.startsWith("<prefijo>") ? limpio : "<prefijo>" + limpio;
}
```

**Fórmula del lab (HU3):**
```javascript
function normalizarHashtag(texto) {
  const limpio = texto.trim().toLowerCase();              // sin espacios, en minúscula
  return limpio.startsWith("#") ? limpio : "#" + limpio;  // garantiza el #
}
// "Ventas"   → "#ventas"
// " ventas " → "#ventas"
// "#VENTAS"  → "#ventas"
```

**Concepto pedagógico clave:** *normalizar la entrada es responsabilidad de la app, no del usuario.* El usuario va a escribir distinto cada vez —con espacios, con mayúsculas, con o sin `#`—; pelear contra eso pidiéndole que escriba "bien" es perder. La app **acepta cualquier variante razonable y la deja consistente** antes de guardar. **_.startsWith("#")_** evita el bug de poner doble `#` (`##ventas`): solo agrega el `#` si todavía no está. El operador ternario **_condición ? siVerdadero : siFalso_** elige entre las dos ramas en una línea.

### ANALOGÍA: El control de aduana
Normalizar es como el **control de aduana de un aeropuerto**: no importa de qué país venga cada pasajero ni en qué formato traiga sus papeles, todos salen del control con el mismo sello y el mismo formato registrado en el sistema. La app hace lo mismo con cada texto que entra: lo deja en un formato único y predecible.

### ESTRATEGIA VISUAL: Tres entradas, una salida
Tres cajas de entrada apiladas a la izquierda (`Ventas`, ` ventas `, `#VENTAS`), todas con flechas que convergen en una caja-embudo etiquetada **_normalizarHashtag_** (que adentro muestra `trim → toLowerCase → asegura #`), y una sola salida a la derecha: `#ventas`. Anclaje: *cualquier variante entra; una sola forma canónica sale.*

---

### CONCEPTO: Validar la entrada con `.length` (cláusula de guarda)

**Validar** es rechazar datos inválidos ANTES de guardarlos. El lab exige no permitir plantillas con título o mensaje vacíos. La herramienta: **_.length_**, que da el número de caracteres de un texto — si es `0` (después de limpiar), el campo está vacío. El patrón se llama **cláusula de guarda**: un `if` al inicio que corta la ejecución y sale temprano (`return`) si algo no cumple.

**Sintaxis general:**
```javascript
if (<texto>.length === 0) {
  // avisar al usuario y cortar
  return;            // ← sale temprano, no sigue
}
// ... acá ya es seguro continuar
```

**Fórmula del lab (HU3):**
```javascript
const t = titulo.value.trim();
const m = mensaje.value.trim();

if (t.length === 0 || m.length === 0) {       // validación
  alert("Título y mensaje son obligatorios");
  return;                                       // corta: no agrega nada
}
agregarPlantilla(t, m, normalizarHashtag(hashtag.value));
```

**Dependencia técnica:** se valida **_.trim()_** primero y se mide la longitud después — si no, un campo con solo espacios (`"   "`) tendría `length > 0` y pasaría como válido siendo basura. El **_return_** dentro del manejador de `submit` es lo que evita que el código siga hasta **_agregarPlantilla_**: corta limpio. La cláusula de guarda es preferible a anidar todo dentro de un `if` gigante — saca los casos inválidos arriba y deja el camino feliz sin sangría.

### ANALOGÍA: El portero del local
La validación es el **portero en la puerta del local**: revisa antes de dejar entrar. Si no cumplís el código de vestimenta (campo vacío), te frena en la puerta y no pasás —el `return`—. Solo quien cumple los requisitos entra al local (se guarda en el estado). El portero filtra en la entrada, no adentro cuando ya es tarde.

### ESTRATEGIA VISUAL: El filtro de la cláusula de guarda
Un diagrama de flujo vertical: entra el submit → rombo de decisión `¿título o mensaje vacío?` → rama "SÍ" sale por la izquierda a una caja roja `alert + return` (cortado); rama "NO" sigue derecho hacia abajo a la caja verde `agregarPlantilla + render`. Anclaje: *los datos inválidos se cortan en la puerta; solo lo válido llega al estado.*

---

## BLOQUE 4 — Transformar texto: construir el mensaje final

*(El cierre del día y "lo jugoso", en palabras del lab: USAR una plantilla. Se construye una zona generadora —elegir una plantilla en un `<select>`, escribir un nombre real, **Generar** el mensaje COMPLETO con `replaceAll` y **Copiar**lo al portapapeles—, y se muestran los hashtags como etiquetas con `split+map+join`. El recorte con `slice` ya NO es core: pasó a **logro opcional** —el mensaje se muestra completo—. Es donde el alumno ve el pago de los métodos: una plantilla con `{nombre}` se vuelve un mensaje listo para enviar.)*

---

### CONCEPTO: Sustitución de variables con `.replaceAll()` (plantillas con marcadores)

Una **plantilla con marcadores** es un texto que contiene **huecos con nombre** —como **_{nombre}_**— que se rellenan después con valores reales. Sustituir esos marcadores es lo que hace WhatsApp Business y toda herramienta de mensajería masiva: un solo texto base, mil mensajes personalizados. La herramienta: **_.replaceAll(buscar, reemplazo)_**, que cambia **TODAS** las apariciones de un texto por otro.

**Sintaxis general:**
```javascript
"<texto con {marcador}>".replaceAll("<buscar>", "<reemplazo>");
```

**Fórmula del lab (HU4):**
```javascript
function generarMensajeFinal(plantilla, valorNombre) {
  return plantilla.mensaje.replaceAll("{nombre}", valorNombre);
}
// "Hola {nombre}, gracias {nombre}" + "Ana" → "Hola Ana, gracias Ana"
```

**Dependencia técnica:** **_.replaceAll_** cambia **todas** las ocurrencias; su pariente **_.replace_** cambia **solo la primera**. Por eso si el mensaje usa `{nombre}` dos veces, **_.replaceAll_** es el correcto. Importante distinguir esto de las **plantillas literales** del propio JS (las comillas invertidas con **_${...}_**): aquéllas las resuelve JavaScript en el momento de escribir el código; los marcadores **_{nombre}_** del lab son **texto plano** que la app reemplaza en tiempo de ejecución con el valor que elija. Son dos mecanismos parecidos en apariencia y distintos en naturaleza: uno es del lenguaje, el otro es una convención de la app.

### ANALOGÍA: El formulario con espacios en blanco
Una plantilla con `{nombre}` es como un **formulario impreso con líneas en blanco**: "Estimado ______, su pedido ______ está listo". El texto fijo ya está; los espacios se rellenan con cada cliente. **_.replaceAll_** es la mano que escribe el mismo nombre en todos los blancos que digan `{nombre}`.

### ETIMOLOGÍA / HISTORIA
**_.replaceAll_** es relativamente nuevo: llegó en **ES2021**. Antes, reemplazar todas las apariciones obligaba a usar expresiones regulares con la bandera global (`.replace(/x/g, ...)`), algo intimidante para principiantes. La idea de "plantilla con variables" es antiquísima en software —el "mail merge" de los procesadores de texto de los años 80 ya lo hacía— y es la base de todos los sistemas de envío masivo modernos.

### ESTRATEGIA VISUAL: El sello que reemplaza
Una plantilla `"Hola {nombre}, gracias {nombre}"` arriba con los dos `{nombre}` resaltados en amarillo. Una flecha **_.replaceAll("{nombre}", "Ana")_** hacia abajo. Resultado: `"Hola Ana, gracias Ana"` con los dos "Ana" resaltados en verde. Anclaje: *un molde de texto + un valor = un mensaje personalizado; replaceAll rellena TODOS los huecos.*

---

### CONCEPTO: Generar y copiar el mensaje (`Number` + `navigator.clipboard`)

La zona generadora del lab arma el mensaje final y lo copia. Dos piezas nuevas además de **_replaceAll_**: el **_&lt;select&gt;_** entrega su opción elegida como **texto** en **_selector.value_** —se convierte a número con **_Number(...)_** para usarlo como índice del array de plantillas—; y **_navigator.clipboard.writeText(texto)_** escribe un texto en el portapapeles del sistema.

**Sintaxis general:**
```javascript
const elegida = state.plantillas[Number(selector.value)];   // value (texto) → índice del array
navigator.clipboard.writeText(textoFinal);                   // copia al portapapeles
```

**Dependencia técnica:** el **_&lt;select&gt;_** se llena con **_.map_** (una **_&lt;option value="i"&gt;_** por plantilla, donde `i` es el índice), dentro de un **_renderSelector()_** que se llama al final de **_render()_** para mantenerlo al día. Todo lo que viene de un input/select es **string**, por eso **_Number()_** antes de indexar. **_navigator.clipboard_** es una API del navegador (no de JS puro) y requiere **contexto seguro** (https o localhost) — con Live Server funciona.

---

### CONCEPTO: Recortar con `.slice()` (logro opcional — vista previa)

> *(En esta versión del lab el mensaje se muestra COMPLETO en el generador; el recorte con `.slice()` quedó como **logro opcional** —recortar el mensaje largo en la tarjeta para que la rejilla quede pareja—. Se documenta igual porque es un método de String del repertorio y aparece en el logro.)*

**_.slice(inicio, fin)_** devuelve **un pedazo del texto** entre dos posiciones (índices). Sirve para mostrar una **vista previa** de mensajes largos sin que ocupen toda la pantalla: se corta a los primeros N caracteres y se le agrega `…` para indicar que sigue.

**Sintaxis general:**
```javascript
"<texto>".slice(<inicio>, <fin>);   // del índice inicio hasta fin (sin incluir fin)
```

**Fórmula del lab (HU4):**
```javascript
function vistaPrevia(texto) {
  return texto.length > 40 ? texto.slice(0, 40) + "…" : texto;
}
// texto de 12 chars  → se muestra completo
// texto de 80 chars  → primeros 40 + "…"
```

**Dependencia técnica:** **_.slice(0, 40)_** toma desde el índice 0 hasta el 40 (sin incluir el 40) — los primeros 40 caracteres. Se combina con **_.length_** en un ternario: si el texto **NO es largo** (`length <= 40`), se muestra entero sin tocarlo; solo si supera el límite se recorta. Así los mensajes cortos no quedan con un `…` innecesario. **_.slice_** no modifica el original — devuelve un pedazo nuevo.

### ANALOGÍA: El tráiler de la película
La vista previa es el **tráiler**: muestra los primeros segundos para dar una idea, no la película entera. Los `…` son el "continuará" que avisa que hay más. Una película corta (un mensaje corto) no necesita tráiler — se ve completa.

### ESTRATEGIA VISUAL: Regla y tijera
Una barra de texto larga con una marca en el carácter 40 y una tijera cortando ahí; lo que queda a la derecha se desvanece y se reemplaza por `…`. Al lado, un texto corto intacto con etiqueta "no se recorta". Anclaje: *largo → recortado con …; corto → tal cual.*

---

### CONCEPTO: De texto a etiquetas con `.split()` + `.map()` + `.join()`

**_.split(separador)_** parte un texto en un **array**, cortando en cada aparición del separador. Encadenado con **_.map()_** (transforma cada pedazo, ya visto en el M2) y **_.join("")_** (vuelve a unir el array en un texto), permite convertir un string de varios hashtags separados por espacio en una fila de etiquetas HTML.

**Sintaxis general:**
```javascript
"<texto>".split("<separador>")          // texto → array de pedazos
  .map(<pedazo> => `<html con ${pedazo}>`) // array de pedazos → array de HTML
  .join("");                            // array → un solo texto
```

**Fórmula del lab (HU4):**
```javascript
const etiquetas = p.hashtag.split(" ")
  .map(h => `<span class="text-xs bg-slate-200 px-2 py-1 rounded-full">${h}</span>`)
  .join("");
// "#ventas #urgente" → dos <span> pegados, listos para innerHTML
```

**Dependencia técnica:** **_.split(" ")_** corta por espacios → `["#ventas", "#urgente"]`. **_.map_** envuelve cada uno en un `<span>` con estilos de "píldora" (esto reusa el `.map` del M2 sobre el array recién creado). **_.join("")_** pega los `<span>` en un solo string sin separador, listo para meter en **_innerHTML_**. El trío **split → map → join** es el camino estándar "de un texto a varios elementos visuales" y aparece en cualquier app que muestre tags, listas separadas por comas, etc.

### ANALOGÍA: Picar, condimentar y emplatar
El trío es como cocinar: **_.split_** **pica** el ingrediente en trozos (un array), **_.map_** **condimenta** cada trozo igual (lo envuelve en HTML), y **_.join_** **emplata** todo junto en un solo plato (el string final). Un proceso, tres pasos, de la materia prima al resultado servible.

### ETIMOLOGÍA / HISTORIA
**_split_** y **_join_** son operaciones inversas clásicas presentes en casi todo lenguaje (Python, Java, Ruby) bajo los mismos nombres — la dupla "partir por un separador / unir con un separador" es uno de los patrones de manipulación de texto más viejos de la programación. Encadenarlos con **_map_** es estilo **funcional**, el mismo que se trabajó en el M2 con las funciones de array.

### ESTRATEGIA VISUAL: La tubería split → map → join
Una tubería horizontal de tres estaciones. Entra `"#ventas #urgente"` → estación **_split(" ")_** sale `["#ventas", "#urgente"]` (dos cajitas) → estación **_map_** cada cajita se envuelve en un `<span>` estilizado → estación **_join("")_** las dos píldoras salen pegadas como un bloque HTML → render las pinta como dos etiquetas. Anclaje: *un texto entra; dos etiquetas visuales salen.*

---

## CIERRE — hilo conductor + qué se lleva el alumno

### El arco del Módulo 4 (Gestor de Plantillas WhatsApp)
```
C13  Modelado + Texto    → clase Template + estado + render + métodos de String   ← HOY
C14  (TBD M4)            → se construye sobre esta base
C15  Persistencia        → localStorage: lo que hoy vive en memoria, se guarda    ← resuelve el "se pierde al recargar"
C16  (TBD M4)            → lab calificado del módulo
```
Una sola app que se construye clase a clase. Hoy se monta la base —datos con forma, un estado central, una pantalla que se deriva del estado, y las herramientas para limpiar y transformar texto—. El "se pierde al recargar" de hoy NO es un defecto: es la deuda que C15 paga con `localStorage`. Nombrarlo así evita que el alumno lo viva como un bug.

### Concepto pedagógico clave del día (las 2 tesis)
1. **El estado es la única fuente de verdad; la pantalla se deriva del estado.** Cambias el estado → llamas `render()`. Nunca se dibuja un dato que no esté en `state`. Es el modelo mental que todo framework moderno da por sentado.
2. **Un texto es un objeto con métodos, y normalizar la entrada del usuario es trabajo de la app.** El usuario escribe de mil formas; la app acepta cualquier variante razonable y la deja consistente con `.trim()`, `.toLowerCase()` y compañía.

### Mensaje que se lleva el alumno
**Antes de aprender un framework, hay que tener el modelo mental correcto: datos con estructura, un estado que manda, una pantalla que obedece.** Y la herramienta más usada y menos glamorosa del oficio —manipular texto— es la que convierte lo que el usuario escribe en algo que la app puede guardar, mostrar y enviar. Hoy se montan las dos cosas sobre una app real.

### Conexiones a futuro
- **Estado central + patrón render** vuelven en C14-C16 (editar, borrar, filtrar plantillas pasan por modificar el estado y re-renderizar) y son la base directa de React/Vue.
- **Métodos de String** se usan para siempre: búsquedas, validaciones, formateo, slugs, normalización de datos.
- **Reasignar en vez de mutar** es el hábito que React exige para detectar cambios de estado.
- **`localStorage`** (C15) recibirá este mismo `state` para persistirlo entre recargas.

### Tabla resumen de conceptos

| Bloque | Conceptos |
|---|---|
| **B1 — Modelar datos** | Clase como molde (`class`/`constructor`, modelar DATOS) · Estado central (única fuente de verdad) · **CRUD** (C+R hoy, U+D en C14) · Separar el código en archivos (ES Modules → C16) · Reasignar vs mutar (`[...lista, x]` y no `.push`) |
| **B2 — Estado → pantalla** | Patrón `render()` (limpiar → recorrer → crear) · Objeto `Date` (`new Date()`, `.toLocaleDateString("es-PE")`) |
| **B3 — Texto es un objeto** | String como objeto con métodos · `.trim()` + `.toLowerCase()` · Normalizar (composición + `.startsWith` + ternario) · Validar con `.length` (cláusula de guarda) |
| **B4 — Usar la plantilla** | Sustitución de variables con `.replaceAll()` (vs template literals `${}`) · Generar + copiar: selector con `.map()`, `Number()` para el índice, `navigator.clipboard` · `.split()` + `.map()` + `.join()` (texto → etiquetas) · *(logro: recortar con `.slice()`)* |
