# CAPA 0 — CLASE 07: Objetos + POO con `class`

> **Fuentes:** **_code201/class-07/README.md_** · **_code201/class-07/lab/README.md_** · **_code201/class-07/slides/README.md_** *(esta clase NO trae carpeta de apuntes del instructor — los inputs canónicos son README + lab + slides)*
> **Módulo:** M2 — Clase 3 de 4
> **Proyecto víctima:** **Gestor de Presupuesto Personal** (continúa de C05/C06). Hoy se **resuelve el dolor de los 2 arrays paralelos** migrando a UN array de objetos, y se **cierra la lógica** del Gestor con POO. Se agrega un archivo nuevo **_oop-objects.js_** (las clases). Todo en consola — la interfaz visual llega en C08.
> **Continuidad con C05/C06:** el alumno llega con arrays + métodos funcionales (**_.map_**, **_.filter_**, **_.reduce_**, **_.forEach_**), funciones puras, composición, DRY, y el modelo de **2 arrays paralelos** (**_nombres[]_** + **_valores[]_**) donde el tipo se codificaba con el signo. Hoy ese modelo se reemplaza.
> **Esta clase COBRA la deuda del módulo:** C05 sembró el dolor de arrays paralelos; C06 cerró prometiendo que "los objetos eliminarán la torpeza"; C07 lo cumple. El reporte posicional de C06 (**_reporte[0]_**, **_reporte[1]_**) también se mejora a un objeto nombrado (**_.saldo_**, **_.cantidad_**).
> **Sin archivo de apoyo (decisión de Eric):** las demos de objetos y de `class` por capas se tipean en vivo en la consola del navegador (F12), con el código en el guion. No se usa **_apoyo-claseNN.html_**.

---

## BLOQUE 1 — OBJETOS

*(El primer tema del día: antes de las clases, el alumno necesita manejar objetos literales — la estructura que reemplaza a los arrays paralelos. Un objeto agrupa datos con NOMBRE, no con posición.)*

---

### CONCEPTO: Objeto literal

Estructura de datos que agrupa valores relacionados como pares **_key: value_** (clave-valor), declarada con llaves **_{}_**. Cada par describe una característica del "algo" que el objeto representa.

**Sintaxis general:**
```javascript
const objeto = {
  clave1: valor1,
  clave2: valor2,
  clave3: valor3
};
```

**Fórmula del lab:**
```javascript
const persona = {
  nombre: 'Ana',
  edad: 30,
  pais: 'Perú'
};
```

**Dependencia técnica:** cada par **_key: value_** se separa del siguiente con **coma**. La clave (a la izquierda de los dos puntos) es el nombre de la propiedad; el valor (a la derecha) puede ser cualquier tipo — string, número, booleano, array, otro objeto, incluso una función. Se llama "literal" porque el objeto se escribe directo con su contenido, sin un molde previo (los moldes son las clases, Bloque 3).

### ANALOGÍA: La ficha de contacto

Un objeto literal es como una ficha de contacto en una agenda: tiene campos etiquetados — "Nombre: Ana", "Teléfono: 555-1234", "Email: ana@mail.com". No accedés al teléfono diciendo "el segundo dato" (eso sería un array por posición); accedés diciendo "el campo Teléfono" (por nombre). El objeto es la ficha; cada campo etiquetado es una propiedad.

### ETIMOLOGÍA / HISTORIA

El término "objeto" en programación viene de los años 60 (Simula, el primer lenguaje orientado a objetos) y se popularizó con Smalltalk en los 70. La idea: modelar cosas del mundo real como "objetos" que tienen características (datos) y comportamientos (acciones). En JavaScript, los objetos son la estructura central del lenguaje — tan central que arrays y funciones son, por debajo, objetos también.

### ESTRATEGIA VISUAL: La ficha con campos etiquetados

Mostrar en consola un objeto **_persona_** y, al lado, dibujar/proyectar una "ficha" con sus 3 campos etiquetados (nombre / edad / país). Contrastar contra un array `['Ana', 30, 'Perú']` donde los mismos datos están sin etiqueta, solo por posición. El alumno ve que el objeto agrega NOMBRES a los datos.

---

### CONCEPTO: Propiedad y acceso con punto (`obj.prop`)

Una **propiedad** es cada par **_key: value_** del objeto. Se accede a su valor escribiendo el nombre del objeto, un punto, y el nombre de la propiedad.

**Sintaxis general:**
```javascript
objeto.nombreDeLaPropiedad
```

**Fórmula del lab:**
```javascript
console.log(persona.nombre);   // 'Ana'  → acceso con punto
console.log(persona.edad);     // 30
```

**Dependencia técnica:** el punto (**_._**) es el operador de acceso a propiedades. A la izquierda va el objeto, a la derecha el nombre exacto de la propiedad (sensible a mayúsculas). Si la propiedad no existe, JavaScript devuelve **_undefined_** (no rompe). Es el mismo tipo de acceso que ya usaron con métodos: **_.push()_**, **_.length_**, **_.toFixed()_** — todos son "propiedades" del objeto array/número, accedidas con punto.

### ANALOGÍA: Pedir un campo de la ficha por su nombre

Acceder con punto es como decirle a alguien "de la ficha de Ana, dame el Teléfono". No decís "dame el segundo renglón" — nombrás el campo. **_persona.nombre_** es "de la ficha persona, dame el campo nombre".

### ESTRATEGIA VISUAL: Señalar el campo en la ficha

Sobre la ficha proyectada, mostrar que **_persona.nombre_** "apunta" al campo nombre y trae su valor. Hacer 2-3 accesos en vivo en consola para que el alumno vea la correspondencia campo → valor.

---

### CONCEPTO: Leer, modificar y agregar propiedades

El acceso con punto sirve para las 3 operaciones: leer un valor, cambiar un valor existente, y crear una propiedad nueva que no existía.

**Sintaxis general:**
```javascript
objeto.prop;              // LEER
objeto.prop = nuevoValor; // MODIFICAR (si existe) o AGREGAR (si no existe)
```

**Fórmula del lab:**
```javascript
persona.edad = 31;              // MODIFICAR una propiedad existente
persona.email = 'a@mail.com';   // AGREGAR una propiedad nueva
```

**Dependencia técnica:** la misma sintaxis **_obj.prop = valor_** sirve para modificar y para agregar — JavaScript decide según si la propiedad ya existe. Si existe, la pisa; si no, la crea. Esto es distinto de las variables con **_const_**: aunque el objeto sea **_const_**, sus propiedades SÍ se pueden modificar (la constante es la referencia al objeto, no su contenido).

### ANALOGÍA: Editar la ficha con lápiz

Modificar es como borrar el dato viejo de un campo y escribir el nuevo ("Edad: 30" → "Edad: 31"). Agregar es como anotar un campo que la ficha no tenía ("Email: ..."). La ficha (el objeto) admite ediciones aunque la guardes en una variable fija.

### ESTRATEGIA VISUAL: Antes/después de la ficha

Mostrar la ficha con `edad: 30`, ejecutar **_persona.edad = 31_** y la modificación en vivo; después agregar **_email_** y ver el campo nuevo aparecer. El alumno ve que el objeto es editable.

---

### CONCEPTO: Array de objetos

Un array cuyos elementos son objetos: **_[{...}, {...}, {...}]_**. Combina lo mejor de las dos estructuras — el **orden** del array (recorrible, indexable) + los **nombres descriptivos** de los objetos (cada elemento se entiende solo).

**Sintaxis general:**
```javascript
const lista = [
  { clave1: valor1, clave2: valor2 },
  { clave1: valor1, clave2: valor2 }
];

lista[0].clave1;   // acceso: primero por índice, después por propiedad
```

**Fórmula del lab:**
```javascript
const personas = [
  { nombre: 'Ana', edad: 30 },
  { nombre: 'Carlos', edad: 25 }
];

console.log(personas[0].nombre);   // 'Ana'
```

**Dependencia técnica:** el acceso encadena las dos operaciones: **_personas[0]_** trae el primer objeto (acceso por índice), y **_.nombre_** trae su propiedad (acceso por nombre). Esta combinación es lo que **reemplaza a los arrays paralelos**: en vez de **_nombres[i]_** + **_valores[i]_** (dos arrays cruzados por índice), un solo **_movimientos[i]_** donde cada objeto trae todos sus datos juntos.

### ANALOGÍA: El mazo de fichas de contacto

Un array de objetos es un mazo de fichas: el mazo tiene orden (la primera, la segunda...) y cada ficha tiene sus campos etiquetados. Para llegar al teléfono de la segunda persona: agarrás la segunda ficha del mazo (índice), después leés el campo Teléfono (propiedad). Una sola pila ordenada de fichas completas — no dos pilas separadas que hay que mantener alineadas (los arrays paralelos).

### ESTRATEGIA VISUAL: Mazo de fichas vs dos pilas

Comparar visualmente: a la izquierda, los 2 arrays paralelos de C05 como DOS pilas separadas (una de nombres, otra de valores) que hay que cruzar por posición; a la derecha, el array de objetos como UNA pila de fichas completas. El alumno ve por qué una sola pila no se puede "desincronizar".

---

### CONCEPTO: Array vs Objeto — cuándo cada uno

Las dos estructuras guardan colecciones de datos, pero se acceden distinto y sirven para distintos casos.

| Estructura | Se accede por | Ideal para |
|---|---|---|
| **Array** **_[a, b, c]_** | **índice** (posición): **_arr[0]_** | colección ordenada de cosas del mismo tipo (lista de números, de nombres) |
| **Objeto** **_{ k: v }_** | **nombre** de propiedad: **_obj.k_** | un "algo" con características nombradas (una persona, un movimiento, un producto) |

**Dependencia técnica:** la diferencia clave es **posición vs nombre**. En un array, el primer elemento es **_arr[0]_** — su identidad es la posición. En un objeto, **_persona.nombre_** — su identidad es el nombre. Por eso un array es frágil si el orden importa y se desordena; un objeto es robusto porque cada dato sabe quién es. Y se combinan: el **array de objetos** da orden (del array) + autodescripción (de los objetos).

### ANALOGÍA: Lista del súper vs formulario de inscripción

Un array es como la lista del súper: ítems en orden, los recorrés de arriba a abajo, importa la secuencia. Un objeto es como un formulario de inscripción: campos con nombre (Nombre, DNI, Email), no importa el orden en que los leas porque cada uno está etiquetado. Para datos sueltos homogéneos → lista (array). Para un "registro" con campos → formulario (objeto).

### ESTRATEGIA VISUAL: Tabla de decisión proyectada

Proyectar la tabla array vs objeto. Para cada caso del proyecto (la lista de movimientos = array; un movimiento individual = objeto), señalar cuál corresponde. Cerrar con "y los combinamos: array de objetos".

---

## BLOQUE 2 — EL MODELO DE DATOS: TIPO EXPLÍCITO

*(El puente conceptual entre objetos y el refactor del proyecto. No es un concepto de sintaxis nuevo — es el "por qué" del cambio de modelo: pasar de codificar el tipo en el signo a declararlo explícito.)*

---

### CONCEPTO: Tipo explícito vs codificado por signo

En C05/C06, el **tipo** de un movimiento (ingreso o gasto) no se guardaba como dato — se **codificaba en el signo** del número: positivo = ingreso, negativo = gasto. Hoy el tipo pasa a ser una **propiedad explícita** (**_tipo: 'ingreso'_**) y el **_valor_** es siempre positivo.

**El antes y el después (del lab):**
```javascript
// ANTES (C05/C06) — 2 arrays paralelos; el TIPO se codifica con el SIGNO
let nombres = ['Salario', 'Cena'];
let valores = [3000, -45.50];          // +ingreso / -gasto

// AHORA (C07) — 1 array de objetos; tipo EXPLÍCITO, valor SIEMPRE positivo
let movimientos = [
  { nombre: 'Salario', tipo: 'ingreso', valor: 3000 },
  { nombre: 'Cena',    tipo: 'gasto',   valor: 45.50 }
];
```

**Dependencia técnica — qué obliga a cambiar (las 3 trampas del refactor):** el cambio de modelo no es solo cosmético; **rompe lógica** que dependía del signo. Tres funciones cambian:
- **_calcularSaldo_** ya NO puede "sumar todo" (antes el signo lo hacía automático). Ahora: **_totalIngresos − totalGastos_**.
- **_buscarPrimerGastoMayor_** invierte la comparación: antes **_valor < -monto_**, ahora **_valor > monto_** (porque el valor ya es positivo).
- **_montosAbsolutos_** **se borra**: existía solo para quitar el signo con **_Math.abs_**; como el valor ya es positivo, sobra. *(Un mejor modelo no solo agrega código — también lo elimina.)*

### ANALOGÍA: Etiqueta vs truco de memoria

Codificar el tipo con el signo es como acordarse "los números rojos del extracto son gastos" — un truco mental que funciona pero hay que recordarlo, y si te confundís de signo, todo se descalibra. El tipo explícito es ponerle una **etiqueta literal** a cada movimiento: "esto es un gasto". No hay que interpretar nada — lo dice la ficha. Más claro, imposible de malinterpretar.

### ESTRATEGIA VISUAL: El mismo dato, dos modelos

Mostrar lado a lado un movimiento en los dos modelos: a la izquierda `valores: [-45.50]` con la nota "¿gasto? hay que mirar el signo"; a la derecha `{ tipo: 'gasto', valor: 45.50 }` con la nota "lo dice la propiedad". El alumno ve que el tipo explícito elimina la interpretación.

---

## BLOQUE 3 — POO CON `class`

*(El segundo gran tema. Una vez que el alumno modela cada movimiento como objeto, aprende a fabricar esos objetos en serie con un molde — la clase — y a darles comportamiento propio. Se construye por capas: propiedades → constructor → métodos.)*

---

### CONCEPTO: Clase (el molde)

Una **clase** es un molde para crear muchos objetos con la misma forma (las mismas propiedades) y el mismo comportamiento (los mismos métodos). En vez de escribir **_{ nombre, tipo, valor }_** a mano por cada movimiento, se define UNA vez la clase y se fabrican objetos a partir de ella.

**Sintaxis general:**
```javascript
class NombreDeLaClase {
  // contenido del molde: constructor + métodos
}
```

**Dependencia técnica:** por convención, los nombres de clase van en **PascalCase** (primera letra mayúscula): **_Movimiento_**, **_Presupuesto_** — a diferencia de variables y funciones que van en camelCase. La clase por sí sola no es un objeto: es el molde. Los objetos concretos se crean con **_new_** (siguiente concepto). Una clase vacía (**_class Movimiento {}_**) ya sirve como molde, aunque todavía no haga nada útil.

### ANALOGÍA: El molde de galletas

Una clase es el cortador/molde de galletas: define la forma (estrella, corazón) una sola vez. Con ese molde hacés decenas de galletas idénticas en forma. El molde NO es una galleta — no te lo comés. Es la herramienta para fabricar galletas. **_class Movimiento_** es el molde; cada movimiento concreto es una galleta hecha con él.

### ETIMOLOGÍA / HISTORIA

La palabra clave **_class_** llegó a JavaScript en ES6 (2015) — la misma actualización de las arrow functions. Antes, la "programación orientada a objetos" en JS se hacía con funciones constructoras y prototipos (más enrevesado). **_class_** es "azúcar sintáctica": por debajo sigue usando prototipos, pero la sintaxis es mucho más clara y parecida a la de otros lenguajes (Java, Python, C#). Hoy es la forma estándar de hacer POO en JavaScript.

### ESTRATEGIA VISUAL: Un molde, muchas galletas

Proyectar un molde de galletas y varias galletas idénticas saliendo de él, etiquetadas con datos distintos (Cena $45, Salario $3000) pero la misma forma. El alumno ve "un molde → muchos objetos de la misma forma, distinto contenido".

---

### CONCEPTO: `new` + instancia

El operador **_new_** crea un objeto concreto a partir de una clase. Ese objeto creado se llama **instancia**. La clase es el molde; la instancia es cada objeto fabricado con él.

**Sintaxis general:**
```javascript
const instancia = new NombreDeLaClase(argumentos);
```

**Fórmula del lab:**
```javascript
class Movimiento {}              // molde vacío
const m = new Movimiento();      // 'new' crea una INSTANCIA (objeto del molde)
m.nombre = 'Cena';               // se le ponen propiedades
```

**Dependencia técnica:** **_new_** hace dos cosas: crea un objeto vacío nuevo y (cuando hay constructor, siguiente concepto) lo inicializa. Si se olvida **_new_** al usar una clase, JavaScript lanza un error explícito: **_Class constructor Movimiento cannot be invoked without 'new'_** — un error claro, que ayuda a no equivocarse. La diferencia clase/instancia es central: una clase, muchas instancias; cada instancia es independiente (cambiar una no afecta a las otras).

### ANALOGÍA: Cada galleta hecha con el molde

Si la clase es el molde, **_new Movimiento()_** es estampar el molde una vez y sacar UNA galleta. Cada galleta (instancia) es independiente: le podés poner chispas a una sin afectar las demás. El molde es uno; las galletas, muchas.

### ESTRATEGIA VISUAL: Iluminar concepto implícito — `new Date()`

**Pregunta directa al alumno (patrón iluminar concepto implícito):** *"Vienen usando **_new Date()_** desde C05 para la fecha. ¿Qué hace ese **_new_**?"* Esperar respuestas, recoger 2-3 sin corregir, después revelar: *"**_Date_** es una clase que ya trae JavaScript, y **_new Date()_** crea una instancia — un objeto fecha. Hoy van a escribir SUS propias clases y usar **_new_** con ellas, igual que vienen usándolo con Date sin saberlo."* Conecta lo conocido (new Date) con lo nuevo (sus clases).

---

### CONCEPTO: Propiedad de instancia (`this.prop = ...`)

Una **propiedad de instancia** es un dato guardado dentro de un objeto concreto. Se asigna con **_this.propiedad = valor_** (dentro de la clase) o **_objeto.propiedad = valor_** (desde afuera). Cada instancia tiene sus propias propiedades con sus propios valores.

**Sintaxis general:**
```javascript
this.propiedad = valor;   // dentro de la clase (lo habitual)
```

**Dependencia técnica:** son las mismas propiedades que un objeto literal (**_nombre_**, **_tipo_**, **_valor_**), pero en una clase se asignan a través de **_this_** (siguiente concepto) en el constructor, para que TODAS las instancias las reciban automáticamente. La diferencia con el objeto literal: en el literal escribís las propiedades a mano cada vez; en la clase, el molde se las da a cada instancia.

### ESTRATEGIA VISUAL: Las mismas propiedades del Bloque 1

Mostrar que **_m.nombre_**, **_m.tipo_**, **_m.valor_** son las mismas 3 propiedades que el objeto literal **_{ nombre, tipo, valor }_** de la P1 — solo que ahora viven en una instancia de clase. Continuidad visual con el Bloque 1.

---

### CONCEPTO: `constructor`

Método especial de la clase que se ejecuta automáticamente al hacer **_new_**. Su trabajo: recibir los datos como parámetros y guardarlos como propiedades de la instancia (con **_this_**). Reemplaza el tener que asignar las propiedades a mano una por una.

**Sintaxis general:**
```javascript
class NombreDeLaClase {
  constructor(param1, param2) {
    this.propiedad1 = param1;
    this.propiedad2 = param2;
  }
}
```

**Fórmula del lab:**
```javascript
class Movimiento {
  constructor(nombre, tipo, valor) {
    this.nombre = nombre;   // "guarda en ESTE objeto la propiedad nombre"
    this.tipo = tipo;
    this.valor = valor;
  }
}

const cena = new Movimiento('Cena', 'gasto', 45.5);   // 1 sola línea
console.log(cena.nombre);   // 'Cena'
```

**Dependencia técnica:** el constructor se llama UNA vez por cada **_new_**, automáticamente — el alumno nunca escribe **_cena.constructor(...)_**; lo dispara **_new Movimiento('Cena', 'gasto', 45.5)_**. Los parámetros del constructor son los datos que cada instancia necesita para nacer. Sin constructor, hay que asignar las propiedades a mano (la "capa 1" tediosa); con constructor, nacen solas. El nombre **_constructor_** es obligatorio y reservado — no se puede cambiar.

### ANALOGÍA: La máquina que rellena la ficha al crearla

El constructor es como la máquina de la mesa de entrada que, al darte una ficha en blanco, automáticamente te pregunta nombre/tipo/monto y los escribe en los campos. Vos no rellenás la ficha a mano cada vez — le das los 3 datos a la máquina (**_new Movimiento('Cena', 'gasto', 45.5)_**) y te devuelve la ficha ya completa. "Cada vez que nace un movimiento, ponele estas propiedades."

### ESTRATEGIA VISUAL: A mano (capa 1) vs automático (capa 2)

Comparar lado a lado: la capa 1 (3 líneas **_m.nombre = ...; m.tipo = ...; m.valor = ..._** a mano) vs la capa 2 (1 línea **_new Movimiento('Cena', 'gasto', 45.5)_**). El alumno ve que el constructor comprime las 3 asignaciones en una sola llamada.

---

### CONCEPTO: `this`

Dentro de una clase, **_this_** apunta al objeto que se está creando o usando en ese momento — "este objeto de acá". Es lo que permite que el constructor y los métodos trabajen sobre las propiedades de la instancia correcta.

**Sintaxis general:**
```javascript
this.propiedad        // accede a la propiedad de ESTA instancia
```

**Dependencia técnica:** cuando hacés **_new Movimiento('Cena', ...)_**, dentro del constructor **_this_** es la galleta-Cena; cuando hacés **_new Movimiento('Salario', ...)_**, **_this_** es la galleta-Salario. El mismo código del constructor sirve para todas las instancias porque **_this_** siempre apunta a "la que se está creando ahora". En los métodos pasa igual: **_salario.esIngreso()_** ejecuta el método con **_this_** = salario. Sin **_this_**, el método no sabría sobre qué objeto operar.

### ANALOGÍA: "Este formulario" cuando tenés varios

Imaginá que sos el de la mesa de entrada rellenando fichas. **_this_** es decir "ESTE formulario que tengo enfrente ahora". Cuando atendés a Ana, "este formulario" es el de Ana; cuando atendés a Carlos, es el de Carlos. La instrucción "escribí el nombre en este formulario" funciona para todos porque "este" siempre se refiere al que estás llenando en el momento.

### ESTRATEGIA VISUAL: `this` cambiando de instancia

Mostrar dos **_new Movimiento(...)_** y resaltar que el MISMO **_this.nombre = nombre_** del constructor guardó 'Cena' en una instancia y 'Salario' en la otra — porque **_this_** apuntó a una distinta cada vez.

---

### CONCEPTO: Método

Función definida dentro de una clase que opera sobre las propiedades del propio objeto (usando **_this_**). Le da **comportamiento** a las instancias: además de guardar datos, saben hacer cosas con ellos.

**Sintaxis general:**
```javascript
class NombreDeLaClase {
  constructor(...) { ... }

  nombreDelMetodo() {
    return /* algo que usa this.propiedad */;
  }
}

instancia.nombreDelMetodo();   // se invoca con punto + paréntesis
```

**Fórmula del lab:**
```javascript
class Movimiento {
  constructor(nombre, tipo, valor) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.valor = valor;
  }

  esIngreso() {
    return this.tipo === 'ingreso';   // usa la propiedad 'tipo'
  }

  formatear() {
    const signo = this.esIngreso() ? '+' : '-';
    return `${this.nombre}: ${signo}$${this.valor.toFixed(2)}`;
  }
}

const salario = new Movimiento('Salario', 'ingreso', 3000);
console.log(salario.esIngreso());  // true
console.log(salario.formatear());  // 'Salario: +$3000.00'
```

**Dependencia técnica:** los métodos se definen DENTRO de la clase, sin la palabra **_function_** (solo **_nombre() {}_**). Se invocan con punto + paréntesis: **_salario.formatear()_**. Un método puede usar otros métodos del mismo objeto (**_formatear_** llama a **_esIngreso_** vía **_this.esIngreso()_**) — composición dentro de la clase. Es la misma idea que los métodos de array que ya usaron (**_.push()_**, **_.map()_**): un comportamiento que el objeto trae consigo.

### ANALOGÍA: El control remoto del televisor

Un objeto con métodos es como un televisor con su control: el tele guarda datos (canal actual, volumen) y el control tiene botones que actúan sobre ESOS datos (subir volumen, cambiar canal). Los métodos son los botones: acciones que el objeto sabe hacer sobre sus propias propiedades. **_salario.formatear()_** es apretar el botón "formatear" del movimiento salario.

### ESTRATEGIA VISUAL: Datos + botones en la misma ficha

Sobre la ficha del movimiento, mostrar arriba los datos (nombre, tipo, valor) y abajo los "botones" (esIngreso, esGasto, formatear). El alumno ve que el objeto ahora tiene datos Y acciones juntos — preludio de la encapsulación.

---

### CONCEPTO: Encapsulación

Principio de agrupar **datos (propiedades) + comportamientos (métodos) relacionados dentro de un mismo objeto**. En vez de tener el array de movimientos suelto en una variable global y las funciones aparte en otro archivo, todo vive junto dentro de una clase (**_Presupuesto_**).

**Sintaxis general (el patrón del lab):**
```javascript
class Presupuesto {
  constructor() {
    this.movimientos = [];          // DATO: el array (propiedad)
  }
  agregar(movimiento) { ... }       // COMPORTAMIENTO: métodos que operan
  saldo() { ... }                   //   sobre ese dato
  resumen() { ... }
}
```

**Dependencia técnica:** la encapsulación cierra el círculo del módulo. En C05 el estado vivía en globales (**_nombres_**, **_valores_**) y las funciones lo tocaban desde afuera. En C06 las funciones eran puras pero el array seguía suelto. En C07, **_Presupuesto_** mete el array Y sus métodos en una sola "cápsula": para usar el Gestor, creás **_new Presupuesto()_** y todo está adentro. Las funciones sueltas de C06 (**_totalIngresos_**, **_calcularSaldo_**) quedan absorbidas como **métodos** de la clase. Mejora extra: **_resumen()_** devuelve un objeto nombrado (**_.cantidad_**, **_.saldo_**) en vez del array posicional **_generarValoresReporte_** (**_reporte[0]_**, **_reporte[1]_**) de C06 — el mismo salto "posicional → nombrado" que se hizo con el modelo de datos.

### ANALOGÍA: El celular como cápsula

Encapsulación es como un celular: guarda tus datos (contactos, fotos) Y trae las apps para usarlos (la app de teléfono para llamar a un contacto, la galería para ver fotos), todo en un solo aparato. No tenés los contactos en una caja y el teléfono para llamar en otra habitación. **_Presupuesto_** es el celular: adentro están los movimientos (datos) y los métodos para gestionarlos (saldo, agregar, resumen).

### ESTRATEGIA VISUAL: De suelto a encapsulado

Mostrar el "antes" (array global suelto + funciones en functional-utils.js, dispersas con flechas que las conectan a duras penas) vs el "después" (una caja **_Presupuesto_** con el array adentro y los métodos adentro, todo junto). El alumno ve la diferencia entre "piezas sueltas" y "cápsula".

---

## CIERRE — HILO CONDUCTOR Y RESUMEN PEDAGÓGICO

### La cadena del módulo (C05 → C06 → C07 → C08)

```
C05 sembró el dolor: 2 arrays paralelos (nombres[] + valores[]), tipo codificado por signo.
                    ↓ (frágil: borrar de uno y no del otro = desastre silencioso)
C06 cerró prometiendo: "los objetos van a eliminar esta torpeza" (y dejó el reporte posicional reporte[0]).
                    ↓
C07 (hoy) lo CUMPLE:
   B1: objetos — datos con NOMBRE, no con posición.
                    ↓ (un movimiento = un objeto { nombre, tipo, valor })
   B2: array de objetos reemplaza los arrays paralelos — tipo explícito, imposible desincronizar.
                    ↓ (¿y si fabricamos esos objetos en serie, con comportamiento propio?)
   B3: class — molde (propiedades → constructor → métodos) + encapsulación en Presupuesto.
                    ↓ (resumen() devuelve objeto nombrado: cierra también el dolor posicional de C06)
C08 (próxima): el modelo está completo en consola → se le da INTERFAZ visual con Tailwind.
   (Conectar esa UI a estas clases — clicks, formulario en vivo — es M3 con el DOM.)
```

### Tabla resumen de conceptos

| Bloque | Conceptos |
|---|---|
| **B1 — Objetos** | Objeto literal, propiedad + acceso con punto, leer/modificar/agregar, array de objetos, array vs objeto |
| **B2 — Modelo** | Tipo explícito vs codificado por signo (+ las 3 correcciones de lógica que obliga el refactor) |
| **B3 — POO con `class`** | Clase (molde), **_new_** + instancia, propiedad de instancia, **_constructor_**, **_this_**, método, encapsulación |

### Tabla "qué ganamos" (antes/después — del slide)

| Antes (C05/C06) | Ahora (C07) |
|---|---|
| 2 arrays paralelos | 1 array de objetos |
| Tipo como signo | Tipo explícito (**_tipo: 'ingreso'_**) |
| Funciones sueltas en functional-utils.js | Métodos dentro del objeto |
| Estado en variables globales | Estado encapsulado en **_Presupuesto_** |
| Reporte posicional (**_reporte[0]_**) | Reporte nombrado (**_resumen().saldo_**) |
| Fragilidad sincronizada | Integridad garantizada |

**Patrón pedagógico clave del día (para la Capa 1/2+3):** la `class` se construye **POR CAPAS** — propiedades (a mano, tedioso) → constructor (las pone solas) → métodos (comportamiento). **Cada capa nace del dolor de la anterior** (la cadena Problema→Solución DENTRO de un mismo concepto). El lab ya viene estructurado así (P2.2 → P2.3 → P2.4); el guion debe respetarlo.

**Lo que NO entra hoy (queda para unidad posterior de POO):** herencia (**_extends_** / **_super_**), polimorfismo, prototipos por debajo. Solo se mencionan en el cierre como "lo que viene". Hoy: propiedades, constructor, métodos, encapsulación.

**El gran mensaje del día (del slide):** POO no es "lo siguiente que reemplaza a lo anterior" — es **otra forma de organizar lo mismo**. Imperativo (C05), funcional (C06) y POO (C07) coexisten en código real. El alumno ya vio los tres paradigmas sobre EL MISMO proyecto.
