# CAPA 0 — CLASE 06: Programación Funcional + Arrow Functions

> **Fuentes:** **_code201/class-06/README.md_** · **_code201/class-06/lab/README.md_** · **_code201/class-06/slides/README.md_** · **apuntes del instructor** (`code201/class-06/mis-apuntes/Funciones como expresión.md` + `Funciones de Array.md`)
> **Módulo:** M2 — Clase 2 de 4
> **Proyecto víctima:** **Gestor de Presupuesto Personal** (continúa de C05). Hoy se **refactoriza** con paradigma funcional — el **_for_** del saldo desaparece, reemplazado por métodos de array. Se agrega un archivo nuevo **_functional-utils.js_** (solo funciones puras). El modelo de datos sigue siendo los 2 arrays paralelos de C05 (**_nombres[]_** + **_valores[]_**).
> **Continuidad con C05:** el alumno llega con arrays, **_.push()_**, **_.length_**, indexación, **_if_** + validación con truthy/falsy, **_while_**, **_for_** clásico, funciones imperativas (sin parámetros, modifican estado global). Hoy se contrasta el paradigma imperativo (C05) con el funcional.
> **Nota sobre los apuntes del instructor:** Eric aportó 2 apuntes propios con el marco conceptual que el lab da por sentado. La Capa 0 los integra como **fundamento teórico**: funciones como valores, expresión de función, funciones de orden superior y la estructura universal del callback. Los métodos **_.some()_** y **_.every()_** de los apuntes quedan como **mención breve / logro extra** (no se enseñan como sub-punto — el lab no los usa).

---

## BLOQUE 1 — FUNCIONES COMO VALORES (el fundamento que el lab da por sentado)

*(Antes de las arrow functions: el alumno tiene que entender que en JavaScript una función no es solo "un bloque de código que se ejecuta" — es un DATO que se puede guardar, pasar y devolver. Sin este fundamento, las arrow functions y los métodos de array parecen magia. Este bloque viene directo de los apuntes del instructor.)*

---

### CONCEPTO: Funciones como tipos de datos (funciones de primera clase)

En JavaScript, las funciones son **tipos de datos**, igual que un número o un string. Eso significa que una función se puede tratar como cualquier otro valor: guardar en una variable, pasar como argumento a otra función, y devolver desde otra función.

**Las 3 capacidades (de los apuntes del instructor):**
- ✔️ Se pueden **asignar a variables** — `const saludar = function() { ... }`
- ✔️ Se pueden **pasar como argumentos** a otras funciones — `valores.map(miFuncion)`
- ✔️ Se pueden **retornar** desde otras funciones

**Por qué es el fundamento del día:** todo lo que viene hoy depende de esto. Las arrow functions son funciones guardadas en variables o pasadas como argumento. Los métodos **_.map_**, **_.filter_**, **_.reduce_** funcionan PORQUE reciben una función como argumento. Si la función no fuera un dato pasable, nada de esto existiría.

**Dependencia técnica:** en muchos lenguajes (C, Java clásico) una función NO es un valor que se pueda pasar libremente. En JavaScript sí — por eso el paradigma funcional es natural en el lenguaje. El término técnico es "funciones de primera clase" (first-class functions).

### ANALOGÍA: El contacto del celular que se puede reenviar

Pensá en un contacto guardado en tu celular. El contacto es un dato: lo podés guardar con un nombre ("Mamá"), se lo podés **reenviar** a un amigo por WhatsApp, y ese amigo lo puede usar para llamar. El contacto se mueve de un lado a otro como cualquier dato. Una función en JavaScript es igual: la guardás con un nombre, se la pasás a otra función, y esa otra función la usa cuando la necesita. La función "viaja" como un dato más.

### ETIMOLOGÍA / HISTORIA

El término "first-class citizen" (ciudadano de primera clase) lo acuñó el científico Christopher Strachey en los años 60 para describir valores que pueden usarse sin restricciones. Cuando un lenguaje trata a las funciones como "ciudadanos de primera clase", podés hacer con ellas todo lo que harías con un número. JavaScript fue diseñado así desde 1995 — es una de las razones por las que el estilo funcional encaja tan bien en el lenguaje.

### ESTRATEGIA VISUAL: La misma función en sus 3 roles

Mostrar en consola una sola función en sus 3 capacidades: (1) guardada en una variable (`const f = ...`), (2) pasada como argumento (`[1,2,3].map(f)`), (3) el resultado. El alumno ve que el nombre `f` es solo una etiqueta que apunta a la función, igual que una variable apunta a un número.

---

### CONCEPTO: Expresión de función vs declaración de función

Una **expresión de función** es una función definida **dentro de una expresión** — típicamente asignándola a una variable. Se diferencia de la **declaración de función** (la **_function nombre() {}_** que el alumno usó en C05) en cómo y cuándo se puede usar.

**Sintaxis general:**
```javascript
// Declaración de función (lo de C05)
function duplicar(valor) {
  return valor * 2;
}

// Expresión de función (asignada a una variable)
const duplicar = function(valor) {
  return valor * 2;
};
```

**Las 3 formas de expresión de función (de los apuntes del instructor):**
- **Asignada a una variable** — la variable actúa como referencia de la función para reutilizarla. Es la forma más común.
- **Nombrada** — se le pone nombre a la función cuando necesita referirse a sí misma (recursividad). Uso poco frecuente.
- **Anónima (sin nombre)** — se define para usarla una sola vez o de forma temporal. **Es la forma más usada como argumento de otras funciones** — y es la base de las arrow functions.

**Dependencia técnica clave (de los apuntes):** una expresión de función **NO puede invocarse antes de su declaración**. A diferencia de la declaración de función (que JavaScript "sube" — hoisting), la expresión solo existe a partir de la línea donde se asigna. Por eso **_functional-utils.js_** se carga ANTES de **_app.js_** en el lab: las funciones tienen que existir antes de usarlas.

### ANALOGÍA: Recetas con nombre vs receta escrita en una nota suelta

Una **declaración** de función es como una receta en el índice de un libro de cocina: está catalogada con nombre, y la podés buscar y usar desde cualquier página, incluso desde una página anterior al índice. Una **expresión** es como una receta que anotás en una nota suelta en el momento: solo existe a partir del momento en que la escribiste, y normalmente la usás ahí mismo y la tirás. Las anónimas son las notas que escribís para un solo uso y no les ponés ni título.

### ESTRATEGIA VISUAL: Comparativa declaración vs expresión + el error de invocar antes

Mostrar en VS Code las dos formas lado a lado. Después, demo del error: invocar una expresión de función ANTES de su línea de declaración → **_ReferenceError_** / **_undefined_**. Hacer lo mismo con una declaración → funciona (hoisting). El alumno ve por qué el orden de carga de los archivos importa.

---

## BLOQUE 2 — ARROW FUNCTIONS

*(El primer tema visible del lab. Una vez que el alumno entiende que las funciones son valores y que existen las expresiones anónimas, la arrow function deja de ser magia: es simplemente la forma corta de escribir una expresión de función anónima.)*

---

### CONCEPTO: Arrow function (función flecha)

Sintaxis corta para escribir funciones, introducida en ES6 (2015). Técnicamente, **una arrow function es una expresión de función anónima** (de los apuntes del instructor) — no tiene nombre propio, se define dentro de una expresión, y se suele asignar a una variable o pasar como argumento.

**La regla de transformación (de los apuntes):** *"reemplazar/eliminar la palabra **_function_** y añadir **_=>_** antes de abrir las llaves."*

**Sintaxis general — de `function` a arrow, paso a paso:**
```javascript
// 1. Forma function (la de C05)
const duplicar = function(valor) {
  return valor * 2;
};

// 2. Reemplazo function por => después de los parámetros
const duplicar = (valor) => {
  return valor * 2;
};

// 3. Si el cuerpo es UNA sola expresión, omito {} y return
const duplicar = (valor) => valor * 2;

// 4. Si hay UN solo parámetro, omito los paréntesis
const duplicar = valor => valor * 2;
```

**Las 4 reglas de simplificación de sintaxis (lab + apuntes):**

| Caso | Sintaxis |
|---|---|
| 0 parámetros | **_() => ..._** (paréntesis obligatorios) |
| 1 parámetro | **_valor => ..._** (paréntesis opcionales) |
| 2+ parámetros | **_(a, b) => ..._** (paréntesis obligatorios) |
| Cuerpo de 1 expresión | omite **_{}_** y **_return_** (return implícito) |
| Cuerpo de varias líneas | **_{ ...; return X; }_** (llaves y return explícitos) |

**Dependencia técnica:** cuando el cuerpo es una sola expresión y se omiten las llaves, el valor de esa expresión **se devuelve automáticamente** (return implícito). Es la fuente del error #1 con arrows: poner llaves **_{}_** pero olvidar el **_return_** adentro → la función no devuelve nada (**_undefined_**).

### ANALOGÍA: Abreviaturas al escribir un mensaje

Cuando escribís un mensaje rápido, abreviás: "porque" → "xq", "que" → "q", "por favor" → "xfa". El significado es idéntico, solo más corto. La arrow function es la abreviatura de la expresión de función: **_function(x) { return x*2 }_** dice exactamente lo mismo que **_x => x*2_**, solo que más corto. No es una función "distinta" — es la misma idea escrita en taquigrafía.

### ETIMOLOGÍA / HISTORIA

Las arrow functions llegaron con **ES6 / ECMAScript 2015**, la actualización más grande de la historia de JavaScript. El símbolo **_=>_** ("fat arrow") viene de lenguajes anteriores como CoffeeScript. Hoy son omnipresentes: React, Node, y prácticamente toda librería moderna las usan como forma por defecto de pasar funciones. Por eso el lab insiste: *"la sintaxis que vas a ver en TODO código JS moderno."*

### ESTRATEGIA VISUAL: La transformación animada en 4 pasos

Mostrar en pantalla la misma función transformándose paso a paso de **_function_** a arrow compacta (los 4 pasos de la sintaxis general). En cada paso, resaltar en color lo que se elimina (la palabra **_function_**, las llaves, el **_return_**, los paréntesis). El alumno ve que no se "pierde" lógica — solo se quita ruido sintáctico.

---

### CONCEPTO: Caso excepción — retorno de objeto implícito `() => ({...})`

Cuando una arrow function de una sola línea necesita **devolver un objeto literal**, hay que envolver el objeto en paréntesis: **_() => ({...})_**. Sin los paréntesis, JavaScript confunde las llaves del objeto con las llaves del cuerpo de la función.

**Sintaxis general:**
```javascript
// ❌ MAL: JavaScript cree que {} es el cuerpo de la función, no un objeto
const crearMovimiento = (nombre, valor) => { nombre: nombre, valor: valor };

// ✅ BIEN: los paréntesis le dicen "esto es un objeto que estoy devolviendo"
const crearMovimiento = (nombre, valor) => ({ nombre: nombre, valor: valor });
```

**Por qué importa en este lab:** la Parte 2.4 del lab usa exactamente este patrón en **_generarReporte_**:
```javascript
const generarReporte = valores => ({
  cantidad: valores.length,
  totalIngresos: totalIngresos(valores),
  // ...
});
```
Sin los paréntesis alrededor del **_{}_**, esa función devuelve **_undefined_**. Es un detalle que el lab usa sin explicar — los apuntes del instructor sí lo documentan.

**Dependencia técnica:** este es el único caso donde el return implícito necesita ayuda sintáctica. La ambigüedad existe porque **_{_** puede significar dos cosas en JavaScript: inicio de un bloque de código, o inicio de un objeto literal. Los paréntesis resuelven la ambigüedad a favor del objeto.

### ESTRATEGIA VISUAL: El mismo código con y sin paréntesis

Demo en consola: la arrow que devuelve objeto SIN paréntesis → **_undefined_**. Agregar los paréntesis → devuelve el objeto correcto. El alumno ve el bug y la corrección en vivo, fijando que `=> ({...})` es el patrón para devolver objetos.

---

### CONCEPTO: Cuándo usar arrow vs `function` (criterio profesional)

No todo se escribe con arrow. La buena práctica (de los apuntes del instructor) define cuándo usar cada una.

**La regla (apuntes + lab):**
- **Arrow function** → cuando la pasás como **argumento** a otra función (es el 90% de su uso). Ej: **_valores.map(valor => valor * 2)_**.
- **`function` (o expresión con nombre)** → para las funciones de **primer nivel** que declarás con nombre y vas a llamar varias veces.

**Cita textual del apunte del instructor:** *"Una buena práctica es utilizar funciones tradicionales como las funciones de primer nivel y, luego, en su interior o en métodos como **_map_**, **_filter_** y **_reduce_**, utilizar funciones flecha."*

**Dependencia técnica (para mencionar, no profundizar hoy):** las arrow functions tienen diferencias técnicas con **_function_** más allá de la sintaxis (manejo de **_this_**, no tienen **_arguments_**). Hoy NO se profundiza — el alumno todavía no vio **_this_**. Solo se enseña arrow como "forma corta para pasar como argumento". El resto llega cuando se vea POO (C07) y objetos con métodos.

### ESTRATEGIA VISUAL: Tabla de decisión arrow vs function

Proyectar una tabla de 2 filas: "¿la paso como argumento de map/filter/reduce?" → arrow; "¿es una función con nombre que llamo en varios lados?" → function. Reforzar con el código del lab: las funciones de **_functional-utils.js_** son arrows asignadas a const; las arrows internas de los métodos son anónimas.

---

## BLOQUE 3 — FUNCIÓN PURA

*(El concepto que define el paradigma funcional. El alumno ya escribió funciones imperativas en C05 — funciones que tocan estado global. Hoy aprende lo opuesto: funciones que no tocan nada externo. Es el contraste explícito que se sembró en C05 M4.1.)*

---

### CONCEPTO: Función pura

Una función es **pura** si cumple 2 condiciones (lab + slides):
1. **Misma entrada → misma salida**, siempre, sin importar el contexto.
2. **No produce efectos secundarios** — no toca variables externas, no hace **_console.log_**, no muta arrays externos.

**Sintaxis general — pura vs impura (del lab):**
```javascript
// PURA — solo depende de su parámetro, solo devuelve un valor
const cuadrado = valor => valor * valor;

// IMPURA — lee una variable externa (depende del contexto)
let factor = 10;
const multiplicar = valor => valor * factor;   // si factor cambia, el resultado cambia

// IMPURA — produce un efecto (imprime)
const imprimir = valor => console.log(valor);   // el efecto es imprimir
```

**Dependencia técnica:** una función pura es **predecible** (siempre hace lo mismo) y **aislada** (no afecta nada fuera de sí). Eso la hace fácil de testear: le das una entrada, verificás la salida, sin preparar ningún contexto. Las funciones de C05 (**_registrarMovimiento_**, **_calcularSaldo_**) eran impuras — leían/modificaban los arrays globales. Hoy se reescriben como puras: reciben el array por parámetro y devuelven un valor.

### ANALOGÍA: La máquina expendedora vs el cocinero distraído

Una **función pura** es como una máquina expendedora: metés el código B4, sale el mismo producto siempre, y la máquina no toca nada más del local. Mismo input, mismo output, sin efectos. Una **función impura** es como un cocinero que, además de cocinar tu plato, depende de qué ingredientes sobraron hoy (lee estado externo) y de paso deja la cocina sucia (efecto secundario). El plato puede salir distinto según el día, y el cocinero cambió cosas a su alrededor. Las puras son confiables justamente porque son aburridas: hacen una sola cosa y siempre igual.

### ESTRATEGIA VISUAL: Test mental de pureza

Mostrar 4 funciones en pantalla y para cada una hacer 2 preguntas: "¿con la misma entrada da siempre lo mismo?" y "¿toca algo de afuera?". Si las respuestas son SÍ y NO → pura. El alumno aplica el criterio en vivo, en lugar de memorizar una definición.

---

### CONCEPTO: Efecto secundario (side effect)

Cualquier acción de una función fuera de su valor de retorno: **_console.log_**, modificar una variable externa, mutar un array, hacer una petición de red (**_fetch_**), tocar el DOM. Una función con efectos secundarios es impura.

**Dependencia técnica:** los efectos secundarios NO son malos — son necesarios (sin efectos, un programa no muestra nada ni guarda nada). El punto del paradigma funcional es **separarlos**: mantener el **cálculo** en funciones puras, y concentrar los **efectos** en pocos lugares identificables. El lab lo aplica en P2.4: **_generarReporte_** es pura (calcula y devuelve un objeto), **_imprimirReporte_** es impura (hace **_console.log_**). Separar cálculo de output es la buena práctica.

### ANALOGÍA: Pensar en voz alta vs escribir el resultado

Resolver una cuenta mentalmente y decir solo el resultado = función pura (devolvés un valor, no afectás nada). Resolver la cuenta y además anotarla en la pizarra del aula, mandar un mensaje y mover una silla = efectos secundarios. El resultado es el mismo, pero en el segundo caso cambiaste cosas del mundo alrededor.

---

### CONCEPTO: Inmutabilidad

Principio de **no modificar** los datos existentes — en lugar de cambiar un array, se crea una versión nueva transformada. Los métodos funcionales (**_.map_**, **_.filter_**) respetan esto: devuelven **arrays nuevos** y dejan el original intacto.

**Sintaxis general:**
```javascript
const valores = [3000, -45.50, 500, -30];
const enDolares = valores.map(valor => valor / 4);   // array NUEVO

console.log(enDolares);   // [750, -11.375, 125, -7.5]
console.log(valores);     // [3000, -45.50, 500, -30] — el original NO cambió
```

**Dependencia técnica:** la inmutabilidad evita una clase entera de bugs — "alguien modificó el array que yo estaba usando". Si cada transformación produce un array nuevo, el original siempre es confiable. Contraste con C05: el **_for_** clásico podía modificar el array original mientras lo recorría; **_.map_** nunca lo hace.

**Excepción a marcar:** **_.forEach_** SÍ puede mutar el array original si se lo hace explícitamente (referenciando el array dentro del callback). Por eso **_.forEach_** no es funcional puro — se ve en el Bloque 5.

### ANALOGÍA: La fotocopia vs el original

Inmutabilidad es como trabajar siempre sobre **fotocopias**, nunca sobre el documento original. Si necesitás un documento con cambios, sacás una fotocopia y la modificás — el original queda guardado, intacto, por si lo necesitás de nuevo. **_.map_** y **_.filter_** sacan una fotocopia transformada; tu array original nunca se toca.

### ESTRATEGIA VISUAL: Antes/después mostrando que el original sobrevive

Demo en consola: aplicar **_.map_** a **_valores_**, guardar el resultado en **_enDolares_**, y después imprimir AMBOS — mostrar que **_valores_** sigue idéntico. El alumno ve que la transformación no destruyó el original.

---

## BLOQUE 4 — FUNCIONES DE ORDEN SUPERIOR Y EL CALLBACK UNIVERSAL

*(El marco teórico que une todo — viene de los apuntes del instructor. Los métodos de array no son recetas sueltas: todos son "funciones de orden superior" que reciben un "callback" con la misma estructura. Entender este marco hace que los 5 métodos se aprendan como UNO con variaciones, no como 5 cosas distintas.)*

---

### CONCEPTO: Función de orden superior (Higher-Order Function)

Una función que **recibe otra función como parámetro** y/o **retorna una función como resultado** (de los apuntes del instructor). Los métodos **_.map_**, **_.filter_**, **_.find_**, **_.reduce_**, **_.forEach_** son todas funciones de orden superior: reciben una función (el callback) y la aplican a los elementos del array.

**Dependencia técnica:** las funciones de orden superior solo son posibles porque las funciones son valores de primera clase (Bloque 1). **_.map_** puede recibir una función como argumento por la misma razón que una variable puede guardar un número. Este es el cierre del círculo: el fundamento del Bloque 1 habilita todo el paradigma.

### ANALOGÍA: El gerente que delega una instrucción

Una función de orden superior es como un gerente que recibe una **instrucción** (otra función) y la aplica a cada empleado: "a cada uno, dale esta tarea". El gerente (**_.map_**) sabe recorrer la lista de empleados; la instrucción (el callback) define qué hacer con cada uno. El gerente no sabe la tarea de antemano — se la pasás vos. Por eso el mismo **_.map_** sirve para duplicar números, formatear precios o convertir monedas: vos le das la instrucción.

### ETIMOLOGÍA / HISTORIA

El concepto viene de la matemática y la programación funcional de los años 50-60 (Lisp). "Orden superior" significa que opera sobre funciones, no solo sobre datos simples — un nivel más arriba. Lenguajes funcionales puros (Haskell, Lisp) se construyen enteros sobre esta idea. JavaScript la adoptó y la hizo accesible con los métodos de array, que son el primer contacto de la mayoría de los devs con el concepto.

### ESTRATEGIA VISUAL: El método como "caja" que recibe una función

Diagrama: una caja etiquetada **_.map()_** con dos entradas — el array (datos) y la función-instrucción (el callback) — y una salida (array nuevo). Resaltar que la instrucción "entra" a la caja como un parámetro más. Repetir el diagrama para **_.filter_** y **_.reduce_**: misma estructura, distinta caja.

---

### CONCEPTO: Callback

La función que se le **pasa como argumento** a una función de orden superior, para que esta la ejecute. En **_valores.map(valor => valor * 2)_**, el callback es **_valor => valor * 2_**. El método decide CUÁNDO y CUÁNTAS veces ejecutar el callback; el callback decide QUÉ hacer en cada ejecución.

**Dependencia técnica:** el callback se ejecuta una vez por cada elemento del array (en **_.map_**, **_.filter_**, **_.forEach_**) o se acumula (en **_.reduce_**). El alumno no llama al callback directamente — lo "entrega" al método, y el método lo invoca por él. Esto confunde al principio: *"¿dónde se llama esta función?"* — la respuesta es: la llama el método, internamente, por cada elemento.

### ANALOGÍA: La instrucción que dejás en una nota

Cuando le dejás a alguien una nota — "a cada planta del balcón, ponele un vaso de agua" — vos no regás: definís la instrucción y la otra persona la ejecuta por cada planta. El callback es esa nota. **_.forEach_** es la persona que recorre las plantas y aplica tu instrucción a cada una.

---

### CONCEPTO: Estructura universal del callback `(elemento, indice, array)`

La regla más potente de los apuntes del instructor: **todos** los métodos de array siguen la misma estructura de parámetros en su callback. El callback recibe hasta 3 parámetros, siempre en este orden:

```javascript
array.metodo((elemento, indice, array) => {
  // código
});
```

- **`elemento`** (1er parámetro) — el elemento actual que se está procesando.
- **`indice`** (2do parámetro, opcional) — la posición del elemento en el array.
- **`array`** (3er parámetro, opcional) — el array completo.

**Por qué es tan valioso pedagógicamente:** el alumno NO tiene que aprender 5 firmas distintas. Aprende UNA estructura y la aplica a **_.map_**, **_.filter_**, **_.find_**, **_.forEach_** igual. Solo **_.reduce_** agrega un parámetro extra al inicio (el acumulador) — la excepción que confirma la regla.

**Dependencia técnica:** los parámetros son posicionales y opcionales de derecha a izquierda. Si solo necesitás el elemento, escribís **_valor => ..._**. Si necesitás el índice, agregás el segundo: **_(valor, indice) => ..._**. El lab usa el índice en **_.forEach_** de P2.3 (**_(valor, indice) => ..._**) para cruzar **_valores[indice]_** con **_nombres[indice]_** — exactamente el caso de los arrays paralelos.

### ESTRATEGIA VISUAL: Una sola plantilla, cinco métodos

Proyectar la plantilla **_(elemento, indice, array) => {}_** grande arriba. Debajo, los 5 métodos usándola con la misma forma. Resaltar que solo cambia el NOMBRE del método y QUÉ se hace adentro — la firma del callback es idéntica. Marcar **_.reduce_** aparte como "el que agrega el acumulador adelante".

---

## BLOQUE 5 — LOS MÉTODOS FUNCIONALES DE ARRAY

*(Los 5 métodos del lab. Cada uno es una función de orden superior con el callback universal del Bloque 4. Se enseñan en el orden del lab: map/filter/find primero (P1), reduce/forEach después (P2). Se aplican al array **_valores_** del proyecto — números puros, ideal para demos limpias.)*

---

### CONCEPTO: `.map()` — transformar cada elemento

Crea un **array nuevo** aplicando una transformación a cada elemento del original. El callback recibe cada elemento y **debe devolver** el valor transformado.

**Sintaxis general:**
```javascript
const nuevoArray = array.map((elemento, indice, array) => {
  return /* valor transformado */;
});

// Forma compacta (1 expresión)
const nuevoArray = array.map(elemento => /* transformación */);
```

**Fórmula del lab:**
```javascript
const enDolares = valores.map(valor => valor / 4);   // [750, -11.375, 125, -7.5]
```

**Reglas (lab + apuntes):**
- Devuelve un array del **mismo tamaño** que el original.
- El callback **debe retornar** un valor (sin return → array de **_undefined_**).
- El array original **no se modifica** (inmutabilidad).

### ANALOGÍA: La fotocopiadora que modifica cada hoja

**_.map_** es una fotocopiadora con un filtro: le metés un fajo de hojas y sale OTRO fajo, del mismo tamaño, con cada hoja transformada (en blanco y negro, reducida, con marca de agua). Las hojas originales salen intactas; las copias salen transformadas. Una entrada, una salida transformada, mismo tamaño.

### ESTRATEGIA VISUAL: Array entra → array transformado sale (mismo tamaño)

Diagrama: array de 4 números arriba, flecha **_.map(v => v/4)_**, array de 4 números transformados abajo. Resaltar que la cantidad de elementos es idéntica (4 → 4). Contraste visual con **_.filter_** (donde la cantidad puede bajar).

---

### CONCEPTO: `.filter()` — conservar solo lo que cumple

Crea un **array nuevo** con solo los elementos que cumplen una condición. El callback **debe devolver un booleano**: **_true_** conserva el elemento, **_false_** lo descarta.

**Sintaxis general:**
```javascript
const nuevoArray = array.filter((elemento, indice, array) => {
  return /* condición true/false */;
});
```

**Fórmula del lab:**
```javascript
const ingresos = valores.filter(valor => valor > 0);   // [3000, 500]
const gastos = valores.filter(valor => valor < 0);     // [-45.50, -30]
```

**Reglas (lab + apuntes):**
- Devuelve un array **menor o igual** al original.
- El callback retorna **_true_** (conservar) o **_false_** (descartar).
- Si ningún elemento cumple → array vacío **_[]_**.
- El original no se modifica.

### ANALOGÍA: El colador / filtro de café

**_.filter_** es un colador: pasás el contenido y solo cae lo que cumple el criterio del colador (lo fino pasa, lo grueso queda retenido — o al revés). El café molido queda arriba, el líquido pasa. Vos definís el criterio (la condición del callback); el colador deja pasar solo lo que lo cumple.

### ESTRATEGIA VISUAL: Array entra → array más chico sale

Diagrama: array de 4 números arriba, flecha **_.filter(v => v > 0)_**, array de 2 números abajo. Resaltar que 2 elementos "se cayeron" porque no cumplieron la condición. Contraste directo con el diagrama de **_.map_** (mismo tamaño).

---

### CONCEPTO: `.find()` — encontrar el primero que cumple

Devuelve el **primer elemento** que cumple la condición (no un array — el valor directo). Si ninguno cumple, devuelve **_undefined_**.

**Sintaxis general:**
```javascript
const elemento = array.find((elemento, indice, array) => {
  return /* condición true/false */;
});
```

**Fórmula del lab:**
```javascript
const primerGasto = valores.find(valor => valor < 0);        // -45.50 (el valor, no un array)
const gigante = valores.find(valor => valor > 100000);       // undefined
```

**Diferencia clave con `.filter` (lab):**
- **_.filter_** → un array (puede estar vacío).
- **_.find_** → un solo elemento (o **_undefined_**).

**Dependencia técnica:** **_.find_** se detiene en cuanto encuentra el primero que cumple — no recorre el resto. Más eficiente que **_.filter_** cuando solo necesitás uno.

### ANALOGÍA: Buscar la primera media que combina en el cajón

**_.find_** es revolver el cajón de medias buscando UNA negra. Apenas encontrás la primera negra, parás — no seguís buscando todas las negras. Devolvés esa media (un elemento), no un cajón de medias (un array). Y si no hay ninguna negra, volvés con las manos vacías (**_undefined_**).

### ESTRATEGIA VISUAL: La flecha que se detiene en el primer match

Diagrama: array recorriéndose de izquierda a derecha, con una flecha que se DETIENE en el primer elemento que cumple, devolviéndolo. Contraste con **_.filter_** (que recorre todo y junta varios).

---

### CONCEPTO: `.reduce()` — acumular en un solo valor

El método más poderoso: recorre el array y lo **reduce a un único valor** (un número, un objeto, un string, otro array). El callback recibe un **acumulador** extra al inicio, y **debe devolverlo** actualizado en cada vuelta.

**Sintaxis general (de los apuntes del instructor):**
```javascript
const resultado = array.reduce((acumulador, elemento, indice, array) => {
  return /* nuevo acumulador */;
}, valorInicial);
```

- **`acumulador`** → el resultado parcial que se va construyendo vuelta a vuelta.
- **`elemento`** → el elemento actual.
- **`valorInicial`** (2do argumento del método, después del callback) → con qué arranca el acumulador.

**Fórmula del lab (el `for` de C05 en una línea):**
```javascript
// C05 imperativo
let saldo = 0;
for (let i = 0; i < valores.length; i++) { saldo = saldo + valores[i]; }

// C06 funcional
const saldo = valores.reduce((acumulador, valor) => acumulador + valor, 0);
```

**Paso a paso para `[3000, -45.50, 500]` con inicial `0`:**

| Vuelta | acumulador | valor | nuevo acumulador |
|---|---|---|---|
| 1 | 0 | 3000 | 3000 |
| 2 | 3000 | -45.50 | 2954.50 |
| 3 | 2954.50 | 500 | 3454.50 |

**Dependencia técnica clave (de los apuntes):** el callback **DEBE retornar el acumulador** en cada vuelta — si no, el acumulador se vuelve **_undefined_** y se rompe. Sobre el **valor inicial**: si se omite, el acumulador arranca con el primer elemento y la iteración empieza desde el segundo; si el array está vacío y no hay valor inicial, **da error**. Por eso el lab siempre pasa el inicial (**_, 0_**).

### ANALOGÍA: La licuadora / sumar el ticket del supermercado

**_.reduce_** es la licuadora: metés muchas frutas (el array) y sale UN solo batido (un valor). O más simple: sumar el ticket del supermercado — vas acumulando ("llevo 30… 75… 120…") hasta tener un solo total. El acumulador es el subtotal que llevás en la cabeza; cada producto que escaneás lo suma; al final, un solo número. Por eso **_.reduce_** sirve para sumar, contar, encontrar el máximo: siempre es "muchos → uno".

### ETIMOLOGÍA / HISTORIA

"Reduce" (también llamado "fold" en otros lenguajes) es una de las operaciones más antiguas de la programación funcional. La idea es "plegar" una lista entera sobre sí misma hasta dejar un solo valor. Es tan fundamental que **_.map_** y **_.filter_** se pueden construir USANDO **_.reduce_** — por eso el lab lo llama "el más poderoso": los otros son casos especiales más legibles de lo que reduce puede hacer.

### ESTRATEGIA VISUAL: La tabla de iteraciones en vivo

Proyectar la tabla de iteraciones (acumulador / valor / nuevo acumulador) y llenarla fila por fila en vivo mientras se explica. El alumno ve cómo el acumulador "viaja" de una vuelta a la siguiente. Es la mejor forma de desmitificar **_.reduce_**, que es el concepto más difícil del día.

---

### CONCEPTO: `.forEach()` — ejecutar un efecto por cada elemento

Recorre el array y ejecuta el callback en cada elemento, **sin devolver nada**. Se usa cuando solo querés HACER algo con cada elemento (imprimir, registrar) sin transformar el array.

**Sintaxis general:**
```javascript
array.forEach((elemento, indice, array) => {
  // efecto: console.log, etc. — NO se retorna nada
});
```

**Fórmula del lab:**
```javascript
valores.forEach((valor, indice) => {
  console.log(`Movimiento ${indice + 1}: ${valor}`);
});
```

**Diferencia con `.map` (lab + apuntes):**
- **_.map_** → **retorna** un array transformado. Para transformar.
- **_.forEach_** → **no retorna nada** (**_undefined_**). Para efectos.

**Dependencia técnica (de los apuntes):** **_.forEach_** NO es funcional puro — su propósito es ejecutar efectos secundarios. Un detalle de los apuntes: si dentro del callback se modifica el array **explícitamente** (referenciando **_arr[indice]_**), SÍ se muta el original — pero reasignar el parámetro **_elemento_** NO modifica nada (es una copia del valor). Es la alternativa "decente" al **_for_** clásico cuando solo se itera para imprimir o llamar otras funciones.

### ANALOGÍA: Pasar lista en el aula

**_.forEach_** es pasar lista: recorrés la lista nombre por nombre y hacés algo con cada uno (decir "presente", marcar una cruz) — pero no transformás la lista ni generás una lista nueva. Solo ejecutás una acción por cada uno. Comparalo con **_.map_**, que sería "por cada alumno, generá un carnet nuevo" → ahí sí sale algo nuevo.

### ESTRATEGIA VISUAL: map vs forEach lado a lado

Tabla de 2 columnas: **_.map_** (retorna array, para transformar) vs **_.forEach_** (no retorna, para efectos). Demo: hacer **_const x = valores.forEach(...)_** y mostrar que **_x_** es **_undefined_** — el alumno ve que forEach no devuelve nada.

---

### MENCIÓN BREVE: `.some()` y `.every()` (no se enseñan hoy — logro extra)

Los apuntes del instructor incluyen 2 métodos más que **no entran en el lab de hoy** pero conviene nombrar para que el alumno sepa que existen:
- **_.some()_** → devuelve **_true_** si **al menos un** elemento cumple la condición ("¿hay algún gasto mayor a 1000?").
- **_.every()_** → devuelve **_true_** si **todos** los elementos cumplen ("¿todos los movimientos son válidos?").

Ambos devuelven un booleano y tienen **evaluación corta** (se detienen apenas pueden decidir). Se mencionan al cierre como herramienta extra o candidato a logro adicional. **No tienen sub-punto propio en el guion** — el lab no los usa.

---

## BLOQUE 6 — COMPOSICIÓN Y DRY

*(El cierre conceptual del paradigma. Una vez que el alumno tiene funciones puras pequeñas, las combina para resolver problemas grandes — y evita repetir código reusando las que ya tiene.)*

---

### CONCEPTO: Composición de funciones

Combinar funciones pequeñas para resolver un problema grande. Cada función hace UNA cosa; se encadenan o se llaman entre sí para lograr algo complejo. Es la contracara funcional de la "función imperativa gigante que hace todo".

**Sintaxis general (del lab):**
```javascript
// Función pequeña 1
const obtenerIngresos = valores => valores.filter(valor => valor > 0);

// Función grande que COMPONE la anterior con reduce
const totalIngresos = valores =>
  obtenerIngresos(valores).reduce((acumulador, valor) => acumulador + valor, 0);
```

**Dependencia técnica:** la composición depende de que cada función sea pura y devuelva un valor usable por la siguiente. **_totalIngresos_** funciona porque **_obtenerIngresos_** devuelve un array limpio que **_.reduce_** puede procesar. Si **_obtenerIngresos_** tuviera efectos secundarios, componer sería peligroso.

### ANALOGÍA: La línea de producción

Componer funciones es como una línea de producción: cada estación hace una sola tarea (lavar, cortar, empaquetar) y le pasa el resultado a la siguiente. Ninguna estación hace todo; el producto final sale de combinar pasos simples en orden. **_obtenerIngresos_** lava (filtra), **_.reduce_** empaqueta (suma) — juntas dan el total de ingresos.

### ESTRATEGIA VISUAL: Funciones encadenadas como flechas

Diagrama: **_valores_** → [obtenerIngresos] → array de ingresos → [reduce] → total. Cada función una caja, las flechas el flujo del dato. El alumno ve que el resultado de una es la entrada de la otra.

---

### CONCEPTO: Principio DRY (Don't Repeat Yourself)

"No te repitas": evitar escribir el mismo código dos veces. Si ya existe una función que hace algo, se reusa en lugar de reescribir la lógica.

**Sintaxis general — el refactor DRY del lab:**
```javascript
// ❌ NO-DRY: reescribe el .reduce que ya existe en totalIngresos
const promedioIngresos = valores => {
  const ingresos = obtenerIngresos(valores);
  if (ingresos.length === 0) return 0;
  return ingresos.reduce((acc, v) => acc + v, 0) / ingresos.length;   // repetido
};

// ✅ DRY: reusa totalIngresos que ya hace ese reduce
const promedioIngresos = valores => {
  const ingresos = obtenerIngresos(valores);
  if (ingresos.length === 0) return 0;
  return totalIngresos(valores) / ingresos.length;   // reusa
};
```

**Dependencia técnica:** DRY no es solo "menos código" — es **una sola fuente de verdad**. Si la lógica de "sumar ingresos" vive en un solo lugar (**_totalIngresos_**) y mañana cambia, se corrige en UN lugar. Si está copiada en 3 funciones, hay que corregir las 3 y es fácil olvidarse de una. Conecta con la lección de CSS Variables de C04 (un cambio, un lugar).

### ANALOGÍA: La receta que referencia otra receta

Un libro de cocina bien hecho no reescribe "cómo hacer masa" en cada receta que la usa — dice "preparar la masa base (pág. 12)". DRY es eso: la masa base se escribe una vez, y todas las recetas la referencian. Si mejorás la masa, mejorás todas las recetas de golpe. **_promedioIngresos_** referencia **_totalIngresos_** en vez de reescribir la suma.

### ESTRATEGIA VISUAL: El mismo `.reduce` copiado 3 veces vs referenciado 1 vez

Mostrar el código con el **_.reduce_** de suma copiado en 3 funciones (resaltado en rojo, repetido) vs el código DRY donde vive en **_totalIngresos_** y las otras lo llaman. El alumno ve visualmente la repetición y su eliminación.

---

## CIERRE — HILO CONDUCTOR Y RESUMEN PEDAGÓGICO

### La cadena del día (imperativo C05 → funcional C06)

```
C05 cerró con: el for que suma el saldo + funciones imperativas que tocan estado global.
                    ↓ (¿y si ese for fuera UNA línea? ¿y si las funciones no tocaran nada externo?)
B1: Las funciones son VALORES — se pueden guardar, pasar, devolver. (fundamento)
                    ↓ (si son valores, puedo escribirlas cortas y pasarlas como argumento)
B2: Arrow functions — la forma corta de la expresión de función anónima.
                    ↓ (¿qué hace a una función "buena" en este paradigma?)
B3: Función pura — misma entrada/misma salida, sin efectos. Lo opuesto a las imperativas de C05.
                    ↓ (¿cómo le paso mi función pura a algo que recorra el array?)
B4: Funciones de orden superior + callback universal (elemento, indice, array).
                    ↓ (los 5 métodos concretos que usan ese callback)
B5: .map / .filter / .find / .reduce / .forEach — el for de C05 muere en .reduce.
                    ↓ (¿cómo armo cosas grandes con funciones chicas sin repetir?)
B6: Composición + DRY.
                    ↓
C07 (próxima): los 2 arrays paralelos → UN array de objetos. Tus funciones funcionales siguen sirviendo.
```

### Tabla resumen de conceptos

| Bloque | Conceptos | Origen |
|---|---|---|
| **B1 — Funciones como valores** | Funciones de primera clase, expresión vs declaración, función anónima | Apuntes del instructor |
| **B2 — Arrow functions** | Sintaxis **_=>_** + 4 reglas, objeto implícito **_() => ({})_**, arrow vs function | Lab + apuntes |
| **B3 — Función pura** | Pureza (2 reglas), efecto secundario, inmutabilidad | Lab + slides |
| **B4 — Orden superior** | Función de orden superior, callback, estructura universal **_(elemento, indice, array)_** | Apuntes del instructor |
| **B5 — Métodos de array** | **_.map_**, **_.filter_**, **_.find_**, **_.reduce_**, **_.forEach_** (+ mención **_.some_**/**_.every_**) | Lab + apuntes |
| **B6 — Composición + DRY** | Composición de funciones, principio DRY | Lab |

**El gran contraste del día (para tener presente al redactar la Capa 2+3):**
- C05 = imperativo = "CÓMO hacerlo paso a paso" (el **_for_**, el estado global, los efectos).
- C06 = funcional = "QUÉ quiero" (transformá, filtrá, acumulá — el cómo lo resuelve el método).
- No es que uno reemplace al otro. Se complementan. El cierre del lab lo dice: *"programación funcional NO reemplaza imperativa — la complementa. La clave es saber cuándo."*

**Decisión de alcance (confirmada con Eric):** se integra el marco teórico de los apuntes (B1 funciones como valores, B4 orden superior + callback universal) como fundamento. **_.some()_** y **_.every()_** quedan como mención breve (Bloque 5) / candidato a logro extra — NO se enseñan como sub-punto porque el lab no los usa.
