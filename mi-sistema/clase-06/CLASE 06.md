# CLASE 06: Programación Funcional + Arrow Functions

> **Módulo:** M2 — Clase 2 de 4
> **Curso:** Code 201
> **Proyecto Víctima:** **Gestor de Presupuesto Personal** (continúa de C05). Hoy se **refactoriza** con paradigma funcional: el **_for_** del saldo desaparece, reemplazado por métodos de array. Se agrega un archivo nuevo **_functional-utils.js_** (solo funciones puras). Modelo de datos sin cambios: 2 arrays paralelos (**_nombres[]_** + **_valores[]_**).
> **Estado:** Capa 1 — estructura de Momentos. Capa 2+3 pendiente.
> **Fecha:** 2026-05-28
> **Base teórica:** **_mi-sistema/clase-06/CAPA 0 - CLASE 06.md_** (integra los apuntes del instructor)

---

## Metadatos de la clase

| | |
|---|---|
| Duración real de clase | 3h (180 min) |
| Tiempo preparado | 2h 30min (150 min, incluye receso) |
| Receso | 10 min (entre M2 y M3) |
| Colchón invisible | 30 min |
| Total Momentos | 5 |
| Lab calificado | No (el calificado del M2 es C08) |
| Conocimiento previo asumido | **C05 cubierto:** arrays + **_.push()_** + **_.length_** + indexación, **_if_** + validación truthy/falsy, **_while_**, **_for_** clásico, funciones imperativas (sin parámetros, modifican estado global). |
| Conceptos JS nuevos | Funciones como valores (primera clase), expresión de función vs declaración, función anónima, **arrow function** (**_=>_**) + 4 reglas de sintaxis, **función pura** + efecto secundario + inmutabilidad, **función de orden superior**, **callback** + estructura universal **_(elemento, indice, array)_**, **_.map()_**, **_.filter()_**, **_.find()_**, **_.reduce()_** (acumulador + valor inicial), **_.forEach()_**, composición de funciones, principio DRY. *(El objeto implícito **_() => ({})_** NO se enseña — el lab reescribió **_generarReporte_** para devolver un array, no un objeto; objetos es tema de C07.)* |
| Apuntes del instructor integrados | `mis-apuntes/Funciones como expresión.md` (funciones como valores, expresión de función, arrow = expresión anónima, objeto implícito, buena práctica arrow vs function) + `mis-apuntes/Funciones de Array.md` (orden superior, callback universal, los 5 métodos). **_.some()_** / **_.every()_** de los apuntes NO entran al guion (ni siquiera como mención) — quedan disponibles como material extra del alumno. |
| Archivo de apoyo | **Ninguno.** Las demos de cada método (map/filter/find/reduce/forEach) se hacen **en vivo en la consola del navegador** (F12), con el código escrito en el guion sobre el array de prueba **_[5, 8, 12, 20, 7]_**. No se usa un **_apoyo-claseNN.html_** separado en esta clase. |
| Continuidad con C05 | C06 es el **contraste de paradigma** con C05. El **_for_** y las funciones imperativas de C05 se reescriben en estilo funcional. El proyecto y el modelo de datos (arrays paralelos) son los mismos. |
| Lección pedagógica clave | **El `for` de C05 muere en una línea de `.reduce`.** Y el contraste imperativo (C05, "cómo paso a paso") vs funcional (C06, "qué quiero"). Los dos paradigmas se complementan, no se reemplazan. |
| Decisión de alcance (confirmada con Eric) | Capa 0 generada primero. Marco teórico de los apuntes integrado (funciones como valores, orden superior, callback universal). **_.some()_**/**_.every()_** quedan 100% fuera del guion (no se mencionan). Cero objetos en C06. |

---

## Tabla de tiempos

| # | Momento | Foco principal | Tiempo | Parte del lab |
|---|---|---|---|---|
| **M1** | Apertura + funciones como valores + arrow functions | Hook (el **_for_** de C05, ¿y si fuera 1 línea?) + funciones como tipos de dato (fundamento de los apuntes) + arrow functions con sus 4 reglas + criterio arrow vs function | **30 min** | Setup + P0.1 + P0.2 |
| **M2** | Función pura + orden superior + callback universal | Función pura vs impura (efecto secundario integrado acá) + función de orden superior + estructura universal del callback **_(elemento, indice, array)_**. *(Inmutabilidad se ve en M3 con map/filter.)* | **25 min** | P0.3 |
| | **RECESO** | | **10 min** | — |
| **M3** | **_.map()_** / **_.filter()_** / **_.find()_** | Los 3 métodos de transformación y filtrado, cada uno con concepto + imagen + demo en vivo en consola + aplicación al lab (funciones puras en **_functional-utils.js_**) | **35 min** | P1.1 → P1.4 |
| **M4** | **_.reduce()_** / **_.forEach()_** + reporte | **_.reduce_** (el **_for_** de C05 muere acá) + **composición** (se nombra al verla en **_totalIngresos_**) + **_.forEach_** + refactor del reporte (cálculo puro vs output impuro) | **30 min** | P2.1 → P2.4 |
| **M5** | Aplicar (componer + reusar) + reconexión + cierre | Aplicar composición + DRY en **_promedioIngresos_** (ambas ya nombradas en M4) + conectar al **_app.js_** final + cierre del día (los 2 paradigmas se complementan) + puente a C07. *(Sin conceptos teóricos nuevos.)* | **20 min** | P3.1 → P3.3 + Cierre |
| | **Colchón** | Preguntas, retrasos, **_.reduce_** suele costar | **30 min** | — |
| | **Total preparado** | | **150 min** | |

> **Nota de tiempo:** C06 es la clase más densa del M2 — el lab solo son 120 min. M3 y M4 (los métodos de array) concentran el grueso del code-along. El patrón §6.4.4 (concepto → imagen → demo en vivo → lab) se usa en M3 y M4 para que el alumno no copie los métodos sin entenderlos; las demos se hacen en la consola del navegador (sin archivo de apoyo separado). Si el grupo se atrasa, el colchón de 30 min absorbe; en el peor caso, P3 (composición/DRY) es lo más comprimible porque es mayormente reuso.

---

## Cadena problema → solución

```
M1: "En C05 escribieron un for de 4 líneas para sumar el saldo, y funciones imperativas
     que tocan los arrays globales. Funcionó. Pero hoy les muestro que ese for entero
     se escribe en UNA línea — y que hay una forma de escribir funciones que no rompe
     nada externo. Para llegar ahí, primero algo que no les dijeron: en JavaScript,
     una función ES un dato. Se puede guardar, pasar y devolver."
          ↓ (funciones como valores → habilita pasarlas como argumento → arrow functions, la forma corta)
M2: "Ya saben escribir funciones cortas y pasarlas. Pero ¿qué hace a una función BUENA
     en este paradigma? Una que con la misma entrada da siempre lo mismo y no toca nada
     de afuera — lo OPUESTO a las imperativas de C05. Y para recorrer un array aplicando
     esa función, necesitan entender quién la recibe: las funciones de orden superior."
          ↓ (función pura + el marco: orden superior + callback universal (elemento, indice, array))
RECESO
M3: "Tienen el concepto. Ahora los 3 métodos que transforman y filtran sin un solo for:
     map transforma, filter selecciona, find busca el primero. Todos usan el mismo
     callback que acabamos de ver."
          ↓ (.map / .filter / .find — demo en vivo en consola, después al proyecto)
M4: "Falta el saldo. El for de C05 que sumaba todo el array — hoy lo matamos. Una línea
     de reduce. Y forEach para los efectos (imprimir el reporte) sin transformar nada."
          ↓ (.reduce mata el for de C05 + composición (al ver totalIngresos usar obtenerIngresos) + DRY (al ver generarValoresReporte reusar funciones) + .forEach + separar cálculo puro de output impuro)
M5: "Tienen 8 funciones puras chiquitas. Ya vieron componer y reusar (DRY) en M4. Lo último:
     aplicarlas una vez más en promedioIngresos, y reconectar todo al app.js real."
          ↓ (aplicar composición + DRY en promedioIngresos + app.js final + cierre: los 2 paradigmas se complementan + puente a C07: arrays paralelos → array de objetos)
```

**Notas sobre la cadena:**
- **M1 abre con gancho ejecutable** (SKILL §5.3.1): Eric muestra el **_for_** de C05 al lado del **_.reduce_** de 1 línea — el alumno VE la diferencia antes de entender cómo. Pero el `.reduce` no se explica aún (es el cierre de M4); en M1 solo se usa como anzuelo.
- **M1 ilumina un concepto implícito** (SKILL §6.4.6): antes de "funciones como valores", mostrar el **paralelismo** entre lo que el alumno ya hace con un número (guardar, copiar, pasar) y lo mismo aplicado a una función — vienen usando **_function_** desde C05 sin notar que se trata como un dato. (No se pregunta "¿qué tipo de dato es?" porque la respuesta es circular; se demuestra el paralelismo.)
- **M2 cierra el contraste sembrado en C05 M4.1**: las funciones imperativas de C05 eran el ejemplo de lo impuro; hoy se nombra formalmente la función pura como lo opuesto.
- **El callback universal `(elemento, indice, array)` se enseña en M2 ANTES de los métodos** — así en M3/M4 el alumno reconoce la misma firma en los 5 métodos, en vez de aprender 5 firmas.
- **M4 es el clímax**: el **_for_** de C05 "muere" en una línea de **_.reduce_**. Es el momento que da nombre a la clase.

---

## Estructura de Momentos

---

### MOMENTO 1 — Apertura + funciones como valores + arrow functions

**Tiempo:** ~30 min
**Parte del lab:** Setup Inicial + Parte 0.1 + Parte 0.2

> **OBJETIVO:** El alumno entiende el contraste de paradigma (imperativo C05 → funcional C06) mediante el gancho del **_for_** vs **_.reduce_**, descubre que en JavaScript las funciones son **valores** (se guardan, se pasan, se devuelven — fundamento de los apuntes), distingue declaración vs expresión de función, arma el setup del archivo **_functional-utils.js_**, aprende a escribir **arrow functions** con sus 4 reglas de simplificación, y conoce el criterio de cuándo usar arrow vs **_function_**. Al cerrar M1, el alumno lee y escribe arrow functions y entiende por qué se pueden pasar como argumento.

> **Patrón pedagógico de M1:** gancho ejecutable (mostrar el dolor del **_for_** de C05) → iluminar concepto implícito (funciones como dato, por demostración de paralelismo) → declaración vs expresión → arrow functions con transformación paso a paso → criterio arrow vs function. El **_.reduce_** del gancho NO se explica aún — es solo el anzuelo; se resuelve en M4. **El objeto implícito `() => ({})` NO se enseña**: requería objetos (tema de C07), pero además ya no hace falta — el lab reescribió **_generarReporte_** (P2.4) para devolver un array indexado en vez de un objeto. Cero objetos en C06.

#### 1.1 Apertura — el contraste de paradigma + el gancho del `for` vs `.reduce`

**EN PANTALLA: VS CODE — dos bloques de código lado a lado: a la izquierda el **_for_** de C05 que calcula el saldo (4 líneas), a la derecha una línea con **_.reduce_**. Ambos con un comentario **_// saldo: 3454.50_** abajo.**

> **Tu apertura:**
> *"Buenos días. La clase pasada cerraron C05 con su Gestor de Presupuesto funcionando: arrays, validación, bucles, funciones. Hoy NO agregamos features nuevos al proyecto — hoy lo vamos a REESCRIBIR. Mismo resultado, otra forma de pensar. Cambiamos de paradigma: del imperativo al funcional."*
>
> *"¿Qué significa eso? Miren esto."*

> **Tu explicación teórica precisa:**
> Mostrar los dos bloques lado a lado:
> ```javascript
> // C05 — imperativo: el for que escribieron para el saldo
> let saldo = 0;
> for (let i = 0; i < valores.length; i++) {
>   saldo = saldo + valores[i];
> }
>
> // C06 — funcional: lo mismo, en UNA línea
> const saldo = valores.reduce((acumulador, valor) => acumulador + valor, 0);
> ```
> *"Estos dos bloques hacen EXACTAMENTE lo mismo: suman todo el array y dan 3454.50. El de arriba lo escribieron ustedes la clase pasada — cuatro líneas, un contador, un índice. El de abajo es una sola línea. Hoy van a aprender a escribir así."*

> **Tu explicación del contraste — imperativo vs declarativo (despacio, que esto es la idea central del día):**
> *"La diferencia no es 'una línea es mejor que cuatro'. Es una forma DISTINTA de pensar el problema. Déjenme mostrarles qué hace cada bloque, palabra por palabra."*
>
> *"Miren el **_for_** de arriba. Yo, el programador, le doy al navegador instrucciones paso a paso:"*
> - *"'Creá una variable **_saldo_** en cero.'"*
> - *"'Creá un contador **_i_** en cero.'"*
> - *"'Fijate si **_i_** todavía es menor que el largo del array.'"*
> - *"'Andá a la posición **_i_**, agarrá ese valor y sumalo a saldo.'"*
> - *"'Subí el contador en uno. Y volvé a empezar.'"*
>
> *"Yo manejo TODO: el contador, el índice, cuándo parar, cómo avanzar. Le digo al navegador el **CÓMO** recorrer, instrucción por instrucción. Eso es **programación imperativa** — 'imperativo' viene de dar órdenes, como un imperativo en gramática: 'hacé esto, después esto, después esto'."*
>
> *"Ahora miren el **_.reduce_** de abajo. Yo no creo ningún contador. No escribo ningún índice. No digo cuándo parar. Solo digo: 'reducí este array a un solo número, sumando'. Le digo el **QUÉ** quiero — un número que es la suma — y el método se encarga del cómo: él recorre, él lleva la cuenta, él sabe cuándo terminar. Eso es **programación declarativa o funcional** — describo el resultado, no los pasos."*

> **Tu analogía (después de la definición técnica):**
> *"Piénsenlo como pedir un viaje. La forma imperativa es ir en el auto dándole indicaciones al chofer cuadra por cuadra: 'derecho dos cuadras, doblá a la izquierda, ahora a la derecha, pará acá'. Ustedes controlan cada giro. La forma declarativa es abrir la app, poner la dirección de destino y listo: 'llevame acá'. No les importa qué calles toma el chofer — solo el destino. El **_for_** es darle indicaciones cuadra por cuadra. El **_.reduce_** es poner el destino y dejar que el método maneje."*
>
> *"Las dos formas te llevan al mismo lugar — saldo 3454.50. Pero en la declarativa borrás todo el 'ruido' del cómo: el contador, el índice, el avance. Te queda solo la intención. Por eso es menos código, pero el punto real es que es más fácil de LEER: '**_reduce_** sumando' se entiende de un vistazo; el **_for_** hay que leerlo línea por línea para descubrir que suma."*

> **Aclaración importante (para no sobre-vender):**
> *"Y ojo: esto NO significa que el **_for_** esté mal ni que lo tiren a la basura. El imperativo sigue siendo necesario — hay cosas que se hacen mejor paso a paso. Lo que hacemos hoy es sumar una segunda forma de pensar a su caja de herramientas. Al final de la clase van a saber cuándo conviene cada una."*

> **(NO explicar `.reduce` acá — es solo el anzuelo. Se desarma en M4.1.)**

---

#### 1.2 ¿Qué tipo de dato es una función? — iluminar concepto implícito

**EN PANTALLA: VS CODE — a la izquierda, las tres cosas que se hacen con un número guardado en variable; a la derecha, las MISMAS tres cosas hechas con una función guardada en variable.**

> **Tu apertura — mostrar el paralelismo, no preguntar una definición:**
> *"Antes de seguir quiero que noten algo que vienen usando sin darse cuenta. No es una pregunta con trampa — es algo que ya saben hacer, aplicado a algo nuevo."*
>
> *"Desde Code 101 ustedes tratan a los números, textos y booleanos como **datos**. ¿Qué quiere decir 'tratarlos como datos'? Tres cosas concretas. Miren con un número:"*
> ```javascript
> let edad = 25;              // 1. lo GUARDO en una variable
> let otraEdad = edad;        // 2. lo COPIO / lo paso a otro lado
> console.log(edad);          // 3. lo PASO como argumento a otra función (console.log)
> ```
> *"Guardar, mover, pasar a otra función. Eso es lo que hacés con un dato. Hasta acá, nada nuevo."*

> **Tu explicación teórica precisa — la demostración del paralelismo:**
> *"Ahora viene lo importante. Esas tres cosas que hago con un número… las puedo hacer EXACTAMENTE IGUAL con una función. Miren la columna de la derecha:"*
> ```javascript
> let saludar = function() { return 'Hola'; };   // 1. GUARDO una función en una variable
> let otraReferencia = saludar;                   // 2. la COPIO a otra variable
> ejecutar(saludar);                              // 3. la PASO como argumento a otra función
> ```
> *"Guardé una función en una variable como si fuera un número. La copié. Y la pasé como argumento. Las mismas tres operaciones. Eso es lo que queremos decir con la frase clave de hoy:"*
>
> **En JavaScript, una función se trata como un dato más.** No es "solo un bloque de código que se ejecuta" — es un valor que se puede **guardar, mover y pasar**, igual que un número. El nombre técnico es "funciones de primera clase", y es la base de TODO lo que viene hoy.
>
> *"Fíjense que NO estoy ejecutando la función en los ejemplos de la derecha — no hay paréntesis de llamada al final. La estoy tratando como un valor que muevo de un lado a otro. Ejecutarla es otra cosa: eso es **_saludar()_** con paréntesis. Acá la estoy moviendo, no llamando."*

> **Por qué importa HOY:**
> *"Guárdense esta idea: de acá en adelante, las funciones que definamos las vamos a tratar como un tipo de dato más — guardándolas y pasándolas — no solo como un bloque que se ejecuta, que es como las usábamos hasta ahora."*

> **EN PANTALLA: EXCALIDRAW — Panel 1.1 (funciones como valores): a la izquierda un número en sus 3 operaciones (guardar / copiar / pasar), a la derecha una función en las MISMAS 3 operaciones, en paralelo. Resaltar que la función NO lleva paréntesis de llamada — se mueve, no se ejecuta.**

> **Pregunta de activación (esta sí tiene respuesta concreta):**
> *"Si puedo guardar una función en una variable igual que un número… ¿podría tener un array lleno de funciones? ¿O una función que reciba a otra función como parámetro?"*
> *(Respuesta esperada: sí a las dos — porque la función es un dato, va a cualquier lado donde vaya un dato. Y eso último, "una función que recibe otra función", es exactamente lo que hacen map/filter/reduce. Sembrar sin profundizar.)*

---

#### 1.3 Expresión de función vs declaración + setup del proyecto

**EN PANTALLA: VS CODE — la **_function duplicar()_** de C05 (declaración) vs **_const duplicar = function()_** (expresión), lado a lado.**

> **Tu explicación teórica precisa:**
> *"Hay dos formas de crear una función. Una ya la conocen de C05; la otra es nueva — y es la que conecta con lo que acabamos de ver de las funciones como dato."*
>
> **1. Declaración de función** (lo que usaron en C05) — la función nace con nombre propio.
> Sintaxis general:
> ```javascript
> function nombre(parametros) {
>   // código de la función
> }
> ```
>
> **2. Expresión de función** — la función se define dentro de una expresión y se **guarda en una variable**. La variable pasa a ser la referencia con la que la usás (es justo lo del sub-punto anterior: una función guardada como un dato).
> Sintaxis general:
> ```javascript
> let variable = function nombreOpcional(parametros) {
>   // código de la función
> };
> ```
> *(El nombre después de **_function_** es OPCIONAL. Si no lleva nombre, es una expresión de función **anónima** — el caso más común.)*

> **El ejemplo concreto (la misma `duplicar`, en las dos formas):**
> ```javascript
> // DECLARACIÓN (lo que usaron en C05) — nombre propio
> function duplicar(valor) {
>   return valor * 2;
> }
>
> // EXPRESIÓN — guardada en una variable, sin nombre propio (anónima)
> const duplicar = function(valor) {
>   return valor * 2;
> };
> ```
> - **Declaración:** la función nace con nombre propio (**_duplicar_**).
> - **Expresión:** la función se crea y se guarda en una variable; su "nombre" para usarla es la variable que la sostiene. Si la función no lleva nombre propio, es anónima.

> **La dependencia técnica que explica el setup del lab:**
> *"Hay una diferencia clave: una declaración la puedo usar ANTES de escribirla en el archivo — JavaScript la 'sube'. 
> Una expresión NO: solo existe a partir de la línea donde la guardo. 
> ¿Por qué les importa? Porque hoy creamos un archivo nuevo, **_functional-utils.js_**, lleno de funciones. Y se tiene que cargar ANTES que **_app.js_**, porque **_app.js_** las usa. Si cargan al revés, las funciones todavía no existen y todo explota."*

> **Code-along del lab — Setup Inicial:**
> 1. En el repo **_personal-budget_** de C05, crear el archivo **_functional-utils.js_**.
> 2. En **_index.html_**, enlazar PRIMERO el nuevo archivo, DESPUÉS **_app.js_**:
>    ```html
>    <script src="functional-utils.js"></script>
>    <script src="app.js"></script>
>    ```
> 3. *"El orden importa: **_functional-utils.js_** primero. Acá viven las funciones; en **_app.js_** las usamos. Regla del lab: **_functional-utils.js_** SOLO contiene funciones — nunca declaren **_nombres_** ni **_valores_** ahí, que ya viven en **_app.js_**."*

---

#### 1.4 Arrow functions — la forma corta (P0.1)

**EN PANTALLA: EXCALIDRAW — Panel 1.2 (anatomía y reglas de la arrow function). Arriba: la SINTAXIS GENERAL de una arrow señalando sus dos zonas separadas por la flecha — **_(parámetros) => { cuerpo }_** — con una etiqueta marcando "ZONA PARÁMETROS" a la izquierda de la **_=>_** y "ZONA CUERPO" a la derecha. Abajo: DOS tablas de reglas de simplificación, una por zona. Tabla A "Reglas de los PARÁMETROS" (según cuántos hay). Tabla B "Reglas del CUERPO" (según cuántas líneas). Mensaje central: "cada zona de la arrow se simplifica con SUS propias reglas — independientes entre sí".**

> **Tu explicación teórica precisa — la arrow tiene dos zonas:**
> *"Una arrow function es una expresión de función anónima escrita corta. La regla mecánica para armarla: sacás la palabra **_function_** y ponés una flecha **_=>_**. Pero lo importante para entenderla es esto: una arrow tiene DOS zonas, separadas por la flecha. A la IZQUIERDA, los parámetros. A la DERECHA, el cuerpo. Y cada zona se simplifica con SUS propias reglas, independientes una de la otra."*
>
> Sintaxis general (Panel 1.2):
> ```javascript
> (parámetros) => { cuerpo }
> //  ▲ zona izquierda      ▲ zona derecha
> //  (PARÁMETROS)          (CUERPO)
> ```

> **Tabla A — Reglas de la zona PARÁMETROS (izquierda de la flecha):**
>
> | Cuántos parámetros | Cómo se escribe |
> |---|---|
> | **0 parámetros** | paréntesis obligatorios: **_() => ..._** |
> | **1 parámetro** | paréntesis **opcionales**: **_valor => ..._** |
> | **2 o más** | paréntesis obligatorios: **_(a, b) => ..._** |

> **Tabla B — Reglas de la zona CUERPO (derecha de la flecha):**
>
> | Cómo es el cuerpo | Cómo se escribe |
> |---|---|
> | **1 sola expresión** | sin **_{}_** ni **_return_** → el valor se devuelve solo (return implícito): **_... => valor * 2_** |
> | **Varias líneas** | con **_{}_** y **_return_** explícito: **_... => { ...; return X; }_** |

> *"Las dos tablas son independientes y se combinan libremente: elegís una regla de cada una y armás cualquier arrow. Una de 2 parámetros con cuerpo de 1 línea → fila 3 de la Tabla A + fila 1 de la Tabla B → **_(a, b) => a + b_**. Una de 0 parámetros con cuerpo de varias líneas → **_() => { ...; return X; }_**."*

> **La transformación paso a paso (cómo se llega de `function` a la arrow más compacta):**
> ```javascript
> // 1. function normal
> const duplicar = function(valor) { return valor * 2; };
>
> // 2. saco "function", agrego => después de los parámetros
> const duplicar = (valor) => { return valor * 2; };
>
> // 3. ZONA CUERPO: 1 sola expresión → saco {} y return (Tabla B, fila 1)
> const duplicar = (valor) => valor * 2;
>
> // 4. ZONA PARÁMETROS: 1 solo parámetro → saco los paréntesis (Tabla A, fila 2)
> const duplicar = valor => valor * 2;
> ```
> *"Fíjense: el paso 3 simplifica la zona del CUERPO y el paso 4 la de los PARÁMETROS — son decisiones separadas, cada una con su tabla."*

> **Demo del error #1 con arrows (predecir antes de ejecutar):**
> *"Cuidado con esto: ¿qué creen que devuelve esta arrow?"*
> ```javascript
> const duplicar = valor => { valor * 2 };   // ¿qué devuelve?
> ```
> *(Esperar. Resultado: **_undefined_**. Porque pusieron las llaves pero olvidaron el **_return_** adentro. Con llaves, el return es obligatorio. Sin llaves, es implícito. Es el error #1 al empezar con arrows.)*

> **Code-along del lab — Parte 0.1:**
> 1. En **_functional-utils.js_**, escribir las 4 formas de **_duplicar_** del lab, una debajo de otra, y comentar cuál es cada paso.
> 2. Probar en consola que las 4 dan lo mismo: **_duplicar(5)_** → **_10_**.

> **Pregunta de activación:**
> *"¿Cómo escribirían **_function sumar(a, b) { return a + b; }_** como arrow compacta?"*
> *(Respuesta esperada: **_const sumar = (a, b) => a + b;_** — paréntesis obligatorios por ser 2 parámetros, sin llaves ni return por ser 1 expresión.)*

---

#### 1.5 Cuándo usar arrow vs `function` (P0.2)

**EN PANTALLA: EXCALIDRAW — Panel 1.3 (tabla de decisión arrow vs function): dos filas — "¿es corta / la voy a pasar como argumento a otra función?" → arrow; "¿es una función con nombre que llamo en varios lados?" → function.**

> **Tu apertura:**
> *"Ya saben escribir arrow functions. Última cosa del tema: NO todo se escribe con arrow. Hay un criterio simple para saber cuándo conviene cada una."*

> **Cuándo arrow vs function (la buena práctica de los apuntes):**
> - *"**`function` con nombre** → para las funciones de primer nivel que declarás una vez y llamás en varios lados."*
> ```javascript
> // función con nombre, declarada una vez, llamada en varios lados:
> function saludar(nombre) {
>   return 'Hola ' + nombre;
> }
> saludar('Ana');
> saludar('Luis');
> ```
> - *"**Arrow** → para funciones cortas, y sobre todo cuando se la pasás como argumento a otra función. Por ahora, el caso simple: una arrow corta guardada en una variable, como las que escribimos recién."*
> ```javascript
> // arrow corta, anónima, guardada en una variable:
> const duplicar = numero => numero * 2;
> duplicar(5);   // 10
> ```
> *"La regla en una frase: si la vas a llamar por nombre en varios lugares, **_function_**; si es corta, **arrow**. Y hay un caso donde la arrow se vuelve LA forma natural: cuando se la pasás como argumento a otra función. Ese caso —que es el 90% del uso real de las arrow— lo van a sentir en vivo después del receso, cuando lleguemos a los métodos de array. Por ahora quédense con el criterio."*
>


> **Code-along del lab — Parte 0.2:**
> 1. Leer juntos la tabla de "cuándo arrow vs function" del lab.
> 2. Identificar en el código de C05 una función que se queda como **_function_** (las de primer nivel) y anticipar cuáles van a ser arrow hoy (las que pasamos a los métodos).

> **Cierre del Momento + puente a M2 (SKILL §5.2 punto 11):**
> *"Ya saben tres cosas grandes: que las funciones son datos que se pueden pasar, que las arrow son la forma corta de escribirlas con sus dos zonas de reglas, y cuándo conviene cada una. Pero falta algo: ¿qué hace que una función sea BUENA para este paradigma? Porque las funciones que escribieron en C05 —las que tocaban los arrays globales— tienen un problema que hoy vamos a evitar. Vamos con función pura."*

---

### MOMENTO 2 — Función pura + orden superior + callback universal

**Tiempo:** ~25 min
**Parte del lab:** Parte 0.3

> **OBJETIVO:** El alumno distingue una **función pura** (misma entrada/misma salida, sin efectos secundarios) de una impura — el concepto de **efecto secundario** se integra acá, dentro de pura/impura — y aprende el marco que une todos los métodos de array: las **funciones de orden superior** reciben un **callback**, y ese callback tiene una **estructura universal** **_(elemento, indice, array)_**. Al cerrar M2, el alumno tiene el criterio de pureza y reconoce la firma del callback que verá en los 5 métodos.

> **Patrón pedagógico de M2:** función pura como cierre del contraste sembrado en C05 M4.1 (lo impuro era el ejemplo; hoy se nombra lo puro). El **efecto secundario** se enseña dentro de 2.1 (es lo que hace impura a una función — no merece sub-punto propio). La **inmutabilidad** NO se ve en M2: queda para M3, cuando **_.map_**/**_.filter_** devuelven arrays nuevos y el concepto tiene contexto real. Después, el marco de orden superior + callback universal de los apuntes — se enseña ANTES de los métodos concretos para que en M3/M4 el alumno reconozca UNA firma en vez de aprender 5.

#### 2.1 Función pura vs impura (P0.3)

**EN PANTALLA: EXCALIDRAW — Panel 2.1 (función pura vs impura): a la izquierda "PURA" (fondo verde) con una arrow que solo depende de su parámetro y solo devuelve un valor; a la derecha "IMPURA" (fondo rojo) con dos casos — una que lee una variable de afuera y otra que hace **_console.log_**. Etiqueta al pie: "PURA = mismo input, mismo output + no toca nada de afuera".**

> **Tu apertura — cerrar el contraste de C05:**
> *"En C05 escribieron funciones imperativas: **_registrarMovimiento_**, **_calcularSaldo_**. Esas funciones tocaban los arrays globales **_nombres_** y **_valores_** — leían y modificaban cosas de afuera. Funcionaban, pero tienen un problema que recién hoy van a poder nombrar. Hoy aprendemos lo OPUESTO: la función pura."*

> **Tu explicación teórica precisa:**
> **Una función es pura si cumple DOS condiciones:**
> 1. *"**Mismo input, mismo output.** Si le doy los mismos datos, devuelve siempre lo mismo. Sin sorpresas, sin importar qué pasa alrededor."*
> 2. *"**No produce efectos secundarios.** Un **efecto secundario** es cualquier cosa que la función hace ADEMÁS de devolver su valor: tocar una variable de afuera, hacer **_console.log_**, cambiar el HTML, pedir datos a un servidor. Una función pura no hace nada de eso — recibe, calcula, devuelve. Punto."*
>
> Ejemplos (del lab):
> ```javascript
> // PURA — solo depende de su parámetro, solo devuelve un valor
> const cuadrado = valor => valor * valor;
>
> // IMPURA — lee una variable de afuera (depende del contexto)
> let factor = 10;
> const multiplicar = valor => valor * factor;   // si factor cambia, el resultado cambia
>
> // IMPURA — produce un efecto secundario (imprime)
> const imprimir = valor => console.log(valor);
> ```
> *"La primera es pura: le doy 5, me da 25, siempre. La segunda depende de **_factor_**, que vive afuera — si alguien cambia **_factor_**, la misma entrada da otro resultado. La tercera no devuelve nada útil: su trabajo es el efecto secundario de imprimir."*

> **Aclaración importante sobre los efectos (que no se malinterprete):**
> *"Ojo: los efectos secundarios NO son malos — son necesarios. Sin efectos, un programa no muestra ni guarda nada. El punto del paradigma funcional no es eliminarlos, es **separarlos**: el cálculo en funciones puras, los efectos juntos en pocos lugares identificables. Lo van a ver hoy mismo en el reporte: una función pura calcula los totales, otra impura los imprime."*

> **El por qué (lo que el alumno se lleva):**
> *"¿Por qué nos importa la pureza? Porque una función pura es **predecible** y **fácil de probar**: le das una entrada, verificás la salida, listo — no tenés que preparar ningún contexto ni preocuparte por qué tocó. Las de C05 eran impuras: para probar **_calcularSaldo_** tenías que tener los arrays globales cargados. Hoy las vamos a reescribir puras: reciben el array por parámetro y devuelven el resultado."*

> **Code-along del lab — Parte 0.3:**
> 1. Leer las 3 funciones de ejemplo del lab.
> 2. Para cada una, aplicar el test de 2 preguntas: *"¿mismo input da mismo output?"* y *"¿toca algo de afuera (efecto secundario)?"*. Clasificar en pura / impura.
> 3. *"Este test mental de 2 preguntas es lo que van a usar todo el día para saber si una función es pura."*

---

#### 2.2 Funciones de orden superior + callback

**EN PANTALLA: EXCALIDRAW — Panel 2.2 (anatomía de una función de orden superior + ejemplo). ARRIBA, la anatomía general: la firma **_funcion(dato, callback)_** con dos etiquetas — "parámetro normal (un dato)" sobre el primer parámetro y "parámetro que ES una función (el callback)" sobre el segundo — y una flecha que entra al cuerpo mostrando "adentro, EJECUTA el callback que recibió". ABAJO, el ejemplo concreto **_transformar(valor, operacion)_** con dos llamadas: **_transformar(5, n => n*2)_** → 10 y **_transformar(5, n => n+100)_** → 105, resaltando que la MISMA función da resultados distintos según el callback que recibe. (NO usar **_.map_** acá — todavía no se vio; eso es M3.)**

> **Tu apertura — conectar con M1:**
> *"Dijimos que una función se puede pasar como argumento. ¿A quién se la pasamos? A las **funciones de orden superior**."*

> **Tu explicación teórica precisa:**
> **Función de orden superior** = una función que **recibe otra función como parámetro** (de los apuntes).
>
> *"Antes de ver las que trae JavaScript, hagamos UNA nosotros, casera, para entender la idea:"*
> ```javascript
> // FUNCIÓN DE ORDEN SUPERIOR (casera): recibe un valor y una función,
> // y le aplica esa función al valor
> function transformar(valor, operacion) {
>   return operacion(valor);
> }
>
> // le paso distintas arrows como "instrucción":
> transformar(5, n => n * 2);     // 10   → la operación fue duplicar
> transformar(5, n => n + 100);   // 105  → la operación fue sumar 100
> ```
> *"Miren lo poderoso: la MISMA función **_transformar_** hace cosas distintas según la función que le paso. **_transformar_** no sabe de antemano qué va a hacer — eso lo decide la función que recibe. Eso es una función de orden superior: una función que trabaja CON otra función que le entregás."*
>
> **Callback** = la función que le pasás (acá, la arrow **_n => n * 2_**). *"**_transformar_** decide CUÁNDO ejecutar tu callback; tu callback decide QUÉ hacer. Vos no lo llamás — lo llama **_transformar_** adentro, por vos."*




---

#### 2.3 Las funciones de array y su estructura general

**EN PANTALLA: EXCALIDRAW — Panel 2.3 (las funciones de array + su estructura general): arriba, las 5 funciones de array listadas como grupo (map, filter, find, forEach, reduce) con la nota "vienen con JavaScript · son funciones de orden superior para arrays"; debajo, la plantilla general del callback **_(elemento, indice, array) => { }_** que todas comparten. Marcar **_.reduce_** aparte: "agrega el acumulador adelante".**

> **Tu apertura — presentar las funciones de array (recién acá se nombran como grupo):**
> *"La **_transformar_** que escribimos recién la hicimos nosotros. Pero JavaScript ya trae un conjunto de funciones de orden superior pensadas específicamente para trabajar con arrays. Se llaman **funciones de array** (o métodos de array). Son estas cinco, y son las protagonistas del resto de la clase:"*
> - *"**_map_** → transforma cada elemento."*
> - *"**_filter_** → se queda con los que cumplen una condición."*
> - *"**_find_** → busca el primero que cumple."*
> - *"**_forEach_** → hace algo con cada elemento."*
> - *"**_reduce_** → reduce todo el array a un solo valor."*
>
> *"No las vamos a usar todavía — eso es después del receso, una por una. Ahora solo quiero que vean algo que TODAS comparten, porque les va a facilitar enormemente aprenderlas."*

> **Tu explicación teórica precisa — la estructura general del callback (la regla que ahorra aprender 5 cosas):**
> *"Sale directo de mis apuntes. TODAS las funciones de array reciben un callback con la MISMA estructura de parámetros, siempre en este orden:"*
> ```javascript
> array.funcionDeArray((elemento, indice, array) => {
>   // código
> });
> ```
> - **`elemento`** *(1er parámetro)* → el elemento actual que se está procesando.
> - **`indice`** *(2do, opcional)* → la posición de ese elemento en el array.
> - **`array`** *(3er, opcional)* → el array completo.
>
> *"Esto es ORO: NO van a aprender 5 firmas distintas. Aprenden UNA estructura general, y la reconocen en map, en filter, en find, en forEach. Si solo necesitan el elemento, escriben **_valor => ..._**. Si necesitan la posición, agregan el segundo: **_(valor, indice) => ..._**. Son opcionales de derecha a izquierda."*

> **La única excepción — reduce:**
> *"Hay UNA función de array que rompe levemente la regla: **_reduce_**. Agrega un parámetro extra ADELANTE, el acumulador: **_(acumulador, elemento, indice, array)_**. Es la excepción que confirma la regla — la vemos en detalle en M4. Por ahora: las 4 primeras usan **_(elemento, indice, array)_**; reduce suma el acumulador adelante."*

> **Pregunta de activación:**
> *"Si en un método quiero usar SOLO la posición de cada elemento y no su valor… ¿igual tengo que escribir el primer parámetro?"*
> *(Respuesta esperada: sí — los parámetros son posicionales. Para llegar al **_indice_** (segundo) tengo que declarar el **_elemento_** (primero) aunque no lo use. Es exactamente lo que haremos al cruzar arrays paralelos con **_nombres[indice]_** en M4.)*

> **Cierre del Momento + puente a M3 / receso (SKILL §5.2 punto 11):**
> *"Repasemos lo que tienen ahora: saben qué es una función pura, saben que los métodos de array son funciones de orden superior que reciben un callback, y saben que ese callback tiene UNA firma universal. Con eso, los 5 métodos que vienen no son 5 cosas nuevas — son la misma idea aplicada cinco veces. Vamos al receso 10 minutos. Cuando volvemos, escribimos el primero: map."*

---

### RECESO — 10 minutos

---

### MOMENTO 3 — `.map()` / `.filter()` / `.find()`

**Tiempo:** ~35 min
**Parte del lab:** Parte 1.1 → 1.4

> **OBJETIVO:** El alumno aprende los 3 métodos de transformación y filtrado — **_.map()_** (transforma cada elemento → array del mismo tamaño), **_.filter()_** (conserva los que cumplen → array menor o igual), **_.find()_** (el primero que cumple → un elemento o undefined) — cada uno con su concepto + imagen + demo aislada en **_apoyo-clase06.html_**, y los aplica al proyecto creando funciones puras en **_functional-utils.js_**. Al cerrar M3, el alumno transforma y filtra arrays sin escribir un solo **_for_**, y verifica que el array original no se mutó.

> **Patrón pedagógico de M3 (§6.4.4):** cada método es un sub-punto con la misma estructura — concepto teórico + Panel Excalidraw (anatomía) + demo en vivo en la consola del navegador (sobre el array de prueba **_[5, 8, 12, 20, 7]_**, con el código en el guion) + aplicación al lab. **No se usa archivo de apoyo separado** — el código de cada demo va directo en el guion y Eric lo tipea en vivo. Los 3 usan el callback universal de M2.3 — reforzar que es la misma firma. La aplicación al proyecto (P1.4, las 4 funciones puras) va al final del Momento, junta. **Acá se enseña la inmutabilidad** (movida desde M2): al ver que **_.map_** devuelve un array nuevo sin tocar el original, el concepto tiene su contexto natural.

#### 3.1 `.map()` — transformar cada elemento (+ inmutabilidad) (P1.1)

**EN PANTALLA: EXCALIDRAW — Panel 3.1 (anatomía de `.map` + ejemplo + inmutabilidad). ARRIBA, la anatomía general: **_arrayOriginal.map(elemento => transformación)_** con etiquetas — "recorre CADA elemento", "el callback devuelve el valor transformado", "sale un array NUEVO del MISMO tamaño". ABAJO, ejemplo concreto: **_[5, 8, 12, 20, 7]_** entra → **_.map(n => n * 2)_** → **_[10, 16, 24, 40, 14]_** sale (4 entra, 4 sale — mismo tamaño). Al costado, una caja resaltada de INMUTABILIDAD: el array original **_[5, 8, 12, 20, 7]_** sigue intacto tras el map ("fotocopia: el original no se toca").**

> **Tu apertura — volvemos del receso con el primer método:**
> *"Volvimos. Tienen el marco: las funciones de array reciben un callback con la estructura **_(elemento, indice, array)_**. Ahora aplicamos ese marco al primer método, el más usado: **_.map_**."*

> **Tu explicación teórica precisa:**
> **¿Qué hace **_.map()_**?** Recorre un array y crea un **array nuevo** aplicando una transformación a CADA elemento. El callback recibe cada elemento y **debe devolver** el valor transformado.
>
> **Las 3 reglas de **_.map_**:**
> - *"Devuelve un array del **MISMO tamaño** que el original (4 entran, 4 salen)."*
> - *"El callback **DEBE retornar** un valor — ese valor es la transformación. Sin return, sale un array de **_undefined_**."*
> - *"El array original **NO se toca**."*

> **Sintaxis general:**
> ```javascript
> const arrayNuevo = arrayOriginal.map(elemento => /* valor transformado */);
> ```

> **Inmutabilidad (el concepto que cae natural acá):**
> *"Acá aparece una palabra nueva: **inmutabilidad**. Significa que **_.map_** NO modifica el array original — saca una 'fotocopia' transformada y deja el original intacto. Es lo opuesto al **_for_** de C05, que podía pisar el array mientras lo recorría. Con map, su array de partida siempre queda confiable. Lo van a comprobar en vivo en un segundo."*

> **EN PANTALLA: CONSOLA DEL NAVEGADOR (F12 → Console) — Eric tipea el código en vivo y muestra el resultado.**

> **Demo en vivo (sobre el array de prueba de los apuntes):**
> ```javascript
> const numeros = [5, 8, 12, 20, 7];
>
> const dobles = numeros.map(n => n * 2);
> console.log(dobles);    // [10, 16, 24, 40, 14]  — mismo tamaño, cada uno transformado
>
> // INMUTABILIDAD: el array original no se tocó
> console.log(numeros);   // [5, 8, 12, 20, 7]  — intacto
> ```
> *"Mismo tamaño: 5 entran, 5 salen, cada uno transformado. Y al imprimir **_numeros_** después, sigue igual — el original ni se enteró. Eso es inmutabilidad: map sacó una fotocopia transformada y dejó el original en paz."*

> **Pregunta de activación:**
> *"Si el callback que le paso a **_.map_** NO tiene **_return_**… ¿qué creen que sale en el array nuevo?"*
> *(Respuesta esperada: un array del mismo tamaño pero lleno de **_undefined_** — porque map arma el nuevo array con lo que el callback devuelve, y sin return no devuelve nada. Es el error #1 con map.)*

---

#### 3.2 `.filter()` — conservar solo lo que cumple (P1.2)

**EN PANTALLA: EXCALIDRAW — Panel 3.2 (anatomía de `.filter` + ejemplo). ARRIBA, la anatomía general: **_arrayOriginal.filter(elemento => condición)_** con etiquetas — "el callback devuelve true o false", "true → el elemento SE QUEDA", "false → el elemento SE DESCARTA", "sale un array MENOR o igual". ABAJO, ejemplo concreto: **_[5, 8, 12, 20, 7]_** entra → **_.filter(n => n > 10)_** → **_[12, 20]_** sale (5 entran, 2 salen — los que no cumplen se cayeron). Contraste visual con el Panel 3.1: ahí salían 5, acá salen 2.**

> **Tu explicación teórica precisa:**
> **¿Qué hace **_.filter()_**?** Recorre un array y crea un **array nuevo** con SOLO los elementos que cumplen una condición. El callback **debe devolver un booleano**: **_true_** conserva el elemento, **_false_** lo descarta.
>
> **Las reglas de **_.filter_**:**
> - *"El callback devuelve **_true_** o **_false_** (una condición, como las del **_if_**)."*
> - *"Devuelve un array **MENOR o igual** al original — solo entran los que dieron **_true_**."*
> - *"Si ninguno cumple → array vacío **_[]_**. Y el original tampoco se toca."*

> **Sintaxis general:**
> ```javascript
> const arrayFiltrado = arrayOriginal.filter(elemento => /* condición true/false */);
> ```

> **EN PANTALLA: CONSOLA DEL NAVEGADOR (F12 → Console) — Eric tipea el código en vivo.**

> **Demo en vivo (sobre el mismo array de la demo anterior):**
> ```javascript
> const numeros = [5, 8, 12, 20, 7];
>
> const mayores = numeros.filter(n => n > 10);
> console.log(mayores);   // [12, 20]  — solo los que cumplieron n > 10
> ```
> *"5 entraron, 2 salieron. El callback dijo **_true_** para 12 y 20; **_false_** para 5, 8 y 7 — esos se cayeron."*
>
> *"Contraste con map: map devuelve SIEMPRE el mismo tamaño porque transforma cada uno; filter puede devolver menos porque selecciona. Misma estructura de callback **_(n => ...)_**, propósito distinto — uno transforma, el otro elige."*

---

#### 3.3 `.find()` — encontrar el primero que cumple (P1.3)

**EN PANTALLA: EXCALIDRAW — Panel 3.3 (anatomía de `.find` + ejemplo). ARRIBA, la anatomía general: **_arrayOriginal.find(elemento => condición)_** con una flecha recorriendo el array de izquierda a derecha que SE DETIENE en el primer elemento que cumple, y devuelve ESE elemento (no un array). Etiqueta: "devuelve UN elemento (o undefined si ninguno cumple)". ABAJO, ejemplo: **_[5, 8, 12, 20, 7]_** → **_.find(n => n > 10)_** → **_12_** (el primero que cumple; se detiene, no sigue). Comparativa al pie con filter: filter → **_[12, 20]_** (array) · find → **_12_** (el valor solo).**

> **Tu explicación teórica precisa:**
> **¿Qué hace **_.find()_**?** Recorre el array y devuelve el **primer elemento** que cumple la condición — el valor directo, NO un array. Si ninguno cumple, devuelve **_undefined_**. Se detiene apenas encuentra el primero.
>
> **La diferencia clave con **_.filter_** (la confusión típica):**
> - *"**_.filter_** → te devuelve un **array** con TODOS los que cumplen (puede estar vacío)."*
> - *"**_.find_** → te devuelve UN solo **elemento**, el primero que cumple (o **_undefined_**)."*

> **Sintaxis general:**
> ```javascript
> const elemento = arrayOriginal.find(elemento => /* condición true/false */);
> ```

> **EN PANTALLA: CONSOLA DEL NAVEGADOR (F12 → Console) — Eric tipea el código en vivo.**

> **Demo en vivo (sobre el mismo array):**
> ```javascript
> const numeros = [5, 8, 12, 20, 7];
>
> const primero = numeros.find(n => n > 10);
> console.log(primero);   // 12  — el VALOR solo, no [12]
>
> // si ninguno cumple:
> const gigante = numeros.find(n => n > 100);
> console.log(gigante);   // undefined
> ```
> *"Ojo al resultado: **_12_**, no **_[12]_**. find devuelve el valor solo, no un array. Y si nadie cumple, **_undefined_**."*
>
> *"filter y find usan la MISMA condición **_n > 10_**. La diferencia es qué devuelven: filter el array **_[12, 20]_**, find el valor **_12_**. Cuando solo necesitás uno, find."*

> **Cierre del bloque de los 3 métodos:**
> *"Tienen los 3: map transforma, filter selecciona, find busca uno. Los tres reciben el mismo tipo de callback. Ahora los aplicamos al proyecto de verdad."*

---

#### 3.4 Aplicación al lab — las 4 funciones puras (P1.4)

**EN PANTALLA: VS CODE — **_functional-utils.js_** (vacío salvo lo de P0) + **_app.js_** para probar.**

> **Tu apertura:**
> *"Bien. Ya conocen map, filter y find sobre números sueltos. Ahora los aplicamos al Gestor: vamos a escribir 4 funciones PURAS en **_functional-utils.js_** que usan estos métodos sobre el array **_valores_**."*

> **Nota sobre los datos de prueba (del lab):**
> *"Para probar sin escribir prompts cada vez, en **_app.js_** reemplacen temporalmente **_let valores = []_** por el array de ejemplo del lab: **_let valores = [3000, -45.50, 500, -30]_**. Así los resultados coinciden con los comentarios. En P3 lo volvemos a vaciar para reconectar los prompts. Y recuerden: **_functional-utils.js_** SOLO tiene funciones — nunca declaren **_valores_** ahí."*

> **Code-along del lab — Parte 1.4 (las 4 funciones puras en `functional-utils.js`):**
> ```javascript
> // filter → solo positivos (ingresos)
> const obtenerIngresos = valores => valores.filter(valor => valor > 0);
>
> // filter → solo negativos (gastos)
> const obtenerGastos = valores => valores.filter(valor => valor < 0);
>
> // map → cada valor sin signo
> const montosAbsolutos = valores => valores.map(valor => Math.abs(valor));
>
> // find → el primer gasto que supera cierto monto
> const buscarPrimerGastoMayor = (valores, monto) =>
>   valores.find(valor => valor < -monto);
> ```
> *"Cada una es PURA: recibe **_valores_** por parámetro, devuelve un resultado, no toca nada de afuera. Y cada una es de una línea gracias a las arrow + el método. Comparen con el **_for_** que habrían escrito en C05 para cada una."*

> **Probar en `app.js`:**
> ```javascript
> console.log('Ingresos:', obtenerIngresos(valores));            // [3000, 500]
> console.log('Gastos:', obtenerGastos(valores));                // [-45.5, -30]
> console.log('Montos sin signo:', montosAbsolutos(valores));    // [3000, 45.5, 500, 30]
> console.log('Primer gasto > $40:', buscarPrimerGastoMayor(valores, 40));  // -45.5
> ```

> **Verificar inmutabilidad (cierra el concepto de 3.1):**
> *"Última comprobación: impriman **_valores_** después de TODO esto. Sigue **_[3000, -45.50, 500, -30]_**, intacto. Aplicamos map, filter, find — y el original nunca cambió. Eso es inmutabilidad en acción."*

> **Reto autónomo:**
> *"**_contarGastos(valores)_** que devuelva CUÁNTOS gastos hay. Pista: filter para quedarte con los negativos, después **_.length_**."*

> **Cierre del Momento + puente a M4 (SKILL §5.2 punto 11):**
> *"Transformaron, filtraron y buscaron sin escribir un solo **_for_**. Pero falta lo más importante del Gestor: el SALDO. Ese número que en C05 calcularon con un for de 4 líneas. ¿Se acuerdan del anzuelo del principio del día —ese **_.reduce_** de una línea que les mostré y no expliqué? Llegó el momento. Después de esto, el for de C05 muere. Vamos."*

---

### MOMENTO 4 — `.reduce()` / `.forEach()` + reporte

**Tiempo:** ~30 min
**Parte del lab:** Parte 2.1 → 2.4

> **OBJETIVO:** El alumno aprende **_.reduce()_** (acumular el array en un solo valor — y acá el **_for_** de C05 muere en una línea), entiende el acumulador y el valor inicial con la tabla de iteraciones, aprende **_.forEach()_** (ejecutar un efecto por elemento, sin retorno), y refactoriza el reporte separando el cálculo puro (**_generarValoresReporte_**, que devuelve un array indexado) del output impuro (**_imprimirReporte_**). Al cerrar M4, el saldo del proyecto se calcula con **_.reduce_** y el reporte completo se imprime con **_.forEach_**.

> **Patrón pedagógico de M4:** **_.reduce_** es el clímax de la clase y el concepto más difícil — se enseña con la tabla de iteraciones llenada en vivo (Panel 4.1) y el contraste directo con el **_for_** de C05. **_.forEach_** se enseña por contraste con **_.map_** (retorna vs no retorna). Las demos van en vivo en la consola (sin archivo de apoyo). El cierre del momento materializa la lección clave del día: el **_for_** muere.

---

#### 4.1 `.reduce()` — el `for` de C05 muere acá (P2.1)

**EN PANTALLA: EXCALIDRAW — Panel 4.1 (anatomía de `.reduce` + tabla de iteraciones). ARRIBA, la anatomía: **_array.reduce((acumulador, valor) => nuevoAcumulador, valorInicial)_** con etiquetas — "acumulador: el resultado parcial que se va construyendo", "valor: el elemento actual", "valorInicial: con qué arranca el acumulador". ABAJO, la TABLA DE ITERACIONES para **_[3000, -45.50, 500]_** con inicial 0: columnas (vuelta · acumulador · valor · nuevo acumulador), filas 1→3000, 2→2954.50, 3→3454.50. Resaltar que reduce es la ÚNICA función de array con un parámetro extra adelante (el acumulador).**

> **Tu apertura — cerrar el anzuelo del inicio del día:**
> *"Llegó el momento que prometí en la primera diapositiva. ¿Se acuerdan del **_for_** de C05 que sumaba el saldo, y al lado ese **_.reduce_** de una línea que les mostré y no expliqué? Hoy lo desarmamos. Este es el método estrella de la clase."*

> **Tu explicación teórica precisa:**
> **¿Qué hace **_.reduce()_**?** Recorre el array y lo **reduce a un único valor** — un número, normalmente. A diferencia de map/filter/find, el callback recibe un parámetro EXTRA adelante: el **acumulador**, que va guardando el resultado parcial vuelta a vuelta.

> **Sintaxis general + sus piezas:**
> ```javascript
> array.reduce((acumulador, valor) => nuevoAcumulador, valorInicial);
> ```
> - *"**acumulador** → el resultado parcial que se va construyendo. Arranca en el valor inicial y se actualiza en cada vuelta."*
> - *"**valor** → el elemento actual de la vuelta (igual que el **_elemento_** de map/filter)."*
> - *"**nuevoAcumulador** → lo que el callback DEVUELVE en cada vuelta; será el acumulador de la vuelta siguiente."*
> - *"**valorInicial** → el último argumento, DESPUÉS del callback (separado por coma). Con qué empieza el acumulador."*
>
> *"Fíjense que el acumulador aparece dos veces en la idea: entra como parámetro y sale como lo que devuelve el callback. Eso es lo que lo hace 'arrastrar' el resultado de vuelta en vuelta."*

> **La similitud con el `for` de C05 (ahora que ya vimos la sintaxis):**
> ```javascript
> // C05 — imperativo (4 líneas)
> let saldo = 0;
> for (let i = 0; i < valores.length; i++) {
>   saldo = saldo + valores[i];
> }
>
> // C06 — funcional (1 línea)
> const saldo = valores.reduce((acumulador, valor) => acumulador + valor, 0);
> ```
> *"Las dos hacen lo mismo, y ahora pueden mapear pieza por pieza. El **_let saldo = 0_** del for es el **valor inicial** del reduce — el **_, 0_** del final. El **_saldo_** que se va acumulando es el **acumulador**. El **_valores[i]_** es el **valor**. Y el **_saldo = saldo + valores[i]_** es el **_acumulador + valor_** que devuelve el callback. Es el MISMO razonamiento, comprimido en una línea."*

> **Tabla de iteraciones (llenar EN VIVO, fila por fila — Panel 4.1):**
> Para **_[3000, -45.50, 500]_** con inicial **_0_**:
>
> | Vuelta | acumulador | valor | nuevo acumulador |
> |---|---|---|---|
> | 1 | 0 | 3000 | 3000 |
> | 2 | 3000 | -45.50 | 2954.50 |
> | 3 | 2954.50 | 500 | 3454.50 |
>
> *"Sigan el acumulador viajando de fila en fila: arranca en 0, se le suma cada valor, y lo que queda pasa a la vuelta siguiente. Al final, 3454.50 — el saldo."*

> **La dependencia técnica clave (de los apuntes):**
> *"Dos cosas que SÍ o SÍ tienen que recordar de reduce:"*
> - *"El callback **DEBE retornar el acumulador** en cada vuelta. Si se olvidan el return, el acumulador se vuelve **_undefined_** y todo se rompe."*
> - *"El **valor inicial** (el **_, 0_**) no es opcional en la práctica: si lo omiten y el array está vacío, reduce da error. Siempre pónganlo."*

> **EN PANTALLA: CONSOLA DEL NAVEGADOR (F12) — Eric tipea en vivo.**

> **Demo en vivo (con el array de prueba de los apuntes):**
> ```javascript
> const numeros = [5, 8, 12, 20, 7];
>
> const suma = numeros.reduce((acumulador, n) => acumulador + n, 0);
> console.log(suma);   // 52
> ```
> *"Mismo patrón: arranca en 0, va sumando 5, 8, 12, 20, 7 — termina en 52. Una línea reemplazó al for entero."*

> **Pregunta de activación:**
> *"¿Por qué el primer parámetro del callback de reduce es distinto al de map o filter?"*
> *(Respuesta esperada: porque reduce necesita ARRASTRAR un resultado parcial entre vueltas — el acumulador. map y filter procesan cada elemento de forma independiente; reduce va construyendo UN valor que depende de las vueltas anteriores. Por eso el parámetro extra adelante.)*

---

#### 4.2 Funciones puras con `.reduce` (P2.2)

**EN PANTALLA: VS CODE — **_functional-utils.js_**.**

> **Tu apertura:**
> *"Ahora aplicamos reduce al proyecto. Cuatro funciones puras nuevas en **_functional-utils.js_**, todas con reduce."*

> **Code-along del lab — Parte 2.2:**
> ```javascript
> // el saldo: suma todo (el for de C05, ahora pura y en 1 línea)
> const calcularSaldo = valores =>
>   valores.reduce((acumulador, valor) => acumulador + valor, 0);
>
> // total de ingresos: primero filtra positivos, después suma
> const totalIngresos = valores =>
>   obtenerIngresos(valores).reduce((acumulador, valor) => acumulador + valor, 0);
>
> // total de gastos: primero filtra negativos, después suma
> const totalGastos = valores =>
>   obtenerGastos(valores).reduce((acumulador, valor) => acumulador + valor, 0);
>
> // el valor más alto: el acumulador guarda el máximo hasta ahora
> const valorMaximo = valores =>
>   valores.reduce((maximo, valor) => valor > maximo ? valor : maximo, valores[0]);
> ```

> **Composición — nombrar el concepto JUSTO cuando acaba de suceder:**
> **EN PANTALLA: EXCALIDRAW — Panel 4.2 (composición como línea de producción): **_valores_** → [obtenerIngresos] → array de ingresos → [reduce] → total. Cada caja una función con UNA tarea; la salida de una es la entrada de la siguiente. Etiqueta: "funciones chicas combinadas → resuelven algo grande".**
>
> *"Paren un segundo en **_totalIngresos_**. Miren lo que acaba de pasar: NO escribió un filter — llamó a **_obtenerIngresos_** (que ya hicimos en M3) y le aplicó reduce. Una función usando OTRA función adentro. Eso tiene nombre: se llama **composición**."*
>
> **¿Qué es la composición?** Combinar funciones pequeñas, donde la salida de una alimenta a la siguiente, para resolver algo más grande. Cada función hace UNA cosa; juntas resuelven algo complejo.
>
> *"**_totalIngresos_** compone dos pasos: **_obtenerIngresos_** filtra, reduce suma. Es la contracara de la función imperativa gigante de C05 que hacía todo de una. Acá cada parte tiene una sola responsabilidad y se combinan."*

> **Analogía (después de la definición):**
> *"Componer funciones es como una línea de producción: cada estación hace una sola tarea —lavar, cortar, empaquetar— y le pasa el resultado a la siguiente. Ninguna estación hace todo; el producto final sale de combinar pasos simples en orden. **_obtenerIngresos_** lava, reduce empaqueta."*

> **Nota sobre `valorMaximo`:**
> *"**_valorMaximo_** muestra que reduce no es solo para sumar: acá el acumulador guarda 'el máximo hasta ahora', y en cada vuelta se queda con el mayor entre el máximo actual y el valor nuevo. Suma, máximo, contar… reduce hace cualquier 'muchos → uno'."*

---

#### 4.3 `.forEach()` — efecto sin retorno (P2.3)

**EN PANTALLA: EXCALIDRAW — Panel 4.3 (`.map` vs `.forEach`). Dos columnas: izquierda **_.map_** → "RETORNA un array transformado · para transformar"; derecha **_.forEach_** → "NO retorna nada (undefined) · para efectos (imprimir, llamar otras funciones)". Abajo, ejemplo de forEach usando el índice: **_(valor, indice) => ..._** para cruzar **_valores[indice]_** con **_nombres[indice]_**.**

> **Tu explicación teórica precisa:**
> **¿Qué hace **_.forEach()_**?** Recorre el array y ejecuta el callback en cada elemento, pero **NO devuelve nada**. Se usa cuando solo querés HACER algo con cada elemento (imprimir, registrar), no transformarlo.
>
> **La diferencia con **_.map_** (el contraste que fija el concepto):**
> - *"**_.map_** → RETORNA un array nuevo. Para transformar."*
> - *"**_.forEach_** → NO retorna nada (**_undefined_**). Para efectos."*
>
> *"Detalle de mis apuntes: forEach NO es funcional puro — su trabajo ES producir un efecto (el **_console.log_**). Es la alternativa 'decente' al **_for_** de C05 cuando solo necesitás iterar para imprimir o llamar otras funciones."*

> **EN PANTALLA: CONSOLA DEL NAVEGADOR (F12) — Eric tipea en vivo.**

> **Demo en vivo (forEach con índice — el cruce de arrays paralelos):**
> ```javascript
> const nombres = ['Salario', 'Cena', 'Freelance'];
> const valores = [3000, -45.50, 500];
>
> valores.forEach((valor, indice) => {
>   console.log(`${indice + 1}. ${nombres[indice]}: ${valor}`);
> });
> // 1. Salario: 3000
> // 2. Cena: -45.5
> // 3. Freelance: 500
> ```
> *"Acá se ve para qué sirve el segundo parámetro del callback, el **_indice_** —el que vimos en M2.3—. Lo uso para cruzar los dos arrays paralelos: **_valores[indice]_** me da el monto, **_nombres[indice]_** el nombre del mismo movimiento. Esto es exactamente la torpeza de los arrays paralelos que C07 va a resolver con objetos."*

> **Demo del contraste (que forEach no retorna):**
> ```javascript
> const resultado = valores.forEach(valor => valor * 2);
> console.log(resultado);   // undefined  — forEach NO devuelve nada
> ```
> *"Si esperaban un array, sorpresa: **_undefined_**. Para transformar y obtener un array, es map. Para solo hacer algo en cada vuelta, forEach."*

---

#### 4.4 Refactor del reporte — cálculo puro vs output impuro (P2.4)

**EN PANTALLA: VS CODE — **_functional-utils.js_** + **_app.js_** para probar.**

> **Tu apertura — la buena práctica del día:**
> *"Último code-along del momento. Armamos el reporte final separando DOS responsabilidades: una función que CALCULA los datos (pura) y otra que los MUESTRA (impura). Es la separación que mencioné en M2: el cálculo limpio por un lado, los efectos por el otro."*

> **Code-along del lab — Parte 2.4 (las 2 funciones del reporte):**
> ```javascript
> // PURA: calcula y devuelve los 4 valores en un array indexado
> // Retorna: [cantidad, totalIngresos, totalGastos, saldo]
> const generarValoresReporte = valores => [
>   valores.length,
>   totalIngresos(valores),
>   totalGastos(valores),
>   calcularSaldo(valores)
> ];
>
> // IMPURA: imprime (su trabajo ES el efecto console.log)
> const imprimirReporte = (nombres, valores) => {
>   console.log('--- Resumen Final ---');
>
>   valores.forEach((valor, indice) => {
>     const tipo = valor > 0 ? 'ingreso' : 'gasto';
>     console.log(`  ${indice + 1}. ${nombres[indice]} (${tipo}): $${Math.abs(valor).toFixed(2)}`);
>   });
>
>   const reporte = generarValoresReporte(valores);
>   console.log('Total movimientos:', reporte[0]);
>   console.log('Total ingresos: $' + reporte[1].toFixed(2));
>   console.log('Total gastos: $' + Math.abs(reporte[2]).toFixed(2));
>   console.log('Saldo: $' + reporte[3].toFixed(2));
> };
> ```

> **Tu explicación — por qué este diseño:**
> - *"**_generarValoresReporte_** es PURA: recibe **_valores_**, devuelve un array con los 4 números **_[cantidad, totalIngresos, totalGastos, saldo]_**, y no imprime nada. La podría probar sin que muestre nada en pantalla."*
> - *"**_imprimirReporte_** es IMPURA: su trabajo ES imprimir (efecto). Le pide los números a **_generarValoresReporte_** y los muestra."*
> - *"¿Por qué un array y no escribir cada total suelto? Para devolver los 4 valores juntos desde una sola función. Accedemos por índice: **_reporte[0]_** es la cantidad, **_reporte[1]_** los ingresos, etc. — es la indexación de arrays que ya dominan desde C05."*

> **DRY — nombrar el principio JUSTO cuando acaba de suceder:**
> *"Y miren una cosa importante de **_generarValoresReporte_**: para los totales NO reescribió ninguna suma — llamó a **_totalIngresos_**, **_totalGastos_** y **_calcularSaldo_**, que YA hicimos. Reusó funciones en vez de copiar la lógica. Eso también tiene nombre: **DRY**, de **_Don't Repeat Yourself_** — 'no te repitas'."*
>
> **¿Qué es DRY?** Si ya existe una función que hace algo, se **reusa** en lugar de reescribir la lógica. Una sola fuente de verdad: si mañana cambia cómo se suman los ingresos, se corrige en UN lugar (**_totalIngresos_**), no en cada función que sume.
>
> *"Esto no es nuevo en concepto: en C04, con CSS Variables, un color vivía en un solo token —**_:root_**— y se cambiaba en un lugar para todos lados. DRY es lo mismo, pero para la lógica."*

> **Nota honesta sobre el modelo (siembra C07):**
> *"Acceder con **_reporte[0]_**, **_reporte[1]_**, **_reporte[2]_** funciona, pero tienen que ACORDARSE de qué hay en cada posición. Sería más claro poder escribir **_reporte.saldo_** o **_reporte.totalIngresos_**. Eso —ponerle NOMBRE a cada dato en vez de una posición— es lo que resuelven los objetos, que ven en C07. Hoy, con arrays, lo dejamos indexado."*

> **Probar en `app.js`:**
> Registrar movimientos (o usar el array de prueba) y llamar **_imprimirReporte(nombres, valores)_** → ver el resumen completo: lista de movimientos con nombre/tipo/monto + totales + saldo.

> **Reto autónomo:**
> *"**_promedioMovimiento(valores)_** que devuelva el promedio absoluto de los movimientos. Pista: reduce para sumar los valores absolutos, dividido por **_.length_**."*

> **Cierre del Momento + puente a M5 (SKILL §5.2 punto 11):**
> *"El **_for_** de C05 murió: hoy el saldo es una línea de reduce. Tienen el reporte completo armado con funciones puras + forEach. Y ya vieron en acción las dos ideas grandes del paradigma: composición (**_totalIngresos_** usa **_obtenerIngresos_**) y DRY (**_generarValoresReporte_** reusa en vez de reescribir). Lo que queda es aplicarlas una vez más, reconectar el flujo real y cerrar. Vamos."*

---

### MOMENTO 5 — Aplicar (componer + reusar) + reconexión + cierre

**Tiempo:** ~20 min
**Parte del lab:** Parte 3.1 → 3.3 + Cierre

> **OBJETIVO:** El alumno aplica composición y DRY (ambas ya nombradas en M4) escribiendo **_promedioIngresos_**, reconecta todo al flujo real de **_app.js_** (captura imperativa de C05 + reporte funcional de C06), y cierra el día entendiendo que los dos paradigmas se complementan + el puente a C07. Al cerrar M5, el proyecto funciona de punta a punta con ≥8 funciones puras en **_functional-utils.js_**.

> **Patrón pedagógico de M5:** momento corto, 2 sub-puntos, **sin conceptos teóricos nuevos** — los dos del cierre del lab (composición y DRY) ya se nombraron donde sucedieron en M4 (composición en M4.2 con **_totalIngresos_**; DRY en M4.4 con **_generarValoresReporte_**). Acá solo se APLICAN una vez más en **_promedioIngresos_**, sin reintroducirlos. El cierre del día va integrado al final del 5.2: los dos paradigmas se complementan + siembra C07.

---

#### 5.1 `promedioIngresos` — componer y reusar en acción (P3.1 + P3.2)

**EN PANTALLA: VS CODE — **_promedioIngresos_** en dos versiones: la que reescribe el reduce (NO-DRY, resaltada en rojo) vs la que reusa **_totalIngresos_** (DRY).**

> **Tu apertura:**
> *"Última parte del día, liviana — no hay concepto nuevo. Escribimos una función más, **_promedioIngresos_**, y de paso vemos cómo aplica las dos ideas que ya nombramos en M4: componer y no repetir (DRY)."*

> **Primer intento — `promedioIngresos` (compone, como ya vimos en M4):**
> ```javascript
> const promedioIngresos = valores => {
>   const ingresos = obtenerIngresos(valores);            // 1. filtra los positivos
>   if (ingresos.length === 0) return 0;                  // 2. evita dividir por cero
>   return ingresos.reduce((acc, v) => acc + v, 0) / ingresos.length;  // 3. suma y divide
> };
> ```
> *"Esta función COMPONE —igual que **_totalIngresos_** en M4—: usa **_obtenerIngresos_** para filtrar y reduce para sumar. Pero paren en la línea 3: ese reduce que suma… ya lo tenemos hecho en **_totalIngresos_**. Lo estamos reescribiendo. Y acá aplica lo que vimos en el reporte: DRY, no repetir."*

> **Refactor DRY — reusar en vez de reescribir:**
> ```javascript
> // reusa totalIngresos, que YA hace ese reduce
> const promedioIngresos = valores => {
>   const ingresos = obtenerIngresos(valores);
>   if (ingresos.length === 0) return 0;
>   return totalIngresos(valores) / ingresos.length;   // reusa, no reescribe
> };
> ```
> *"Mismo resultado, pero la segunda NO reescribe el reduce — llama a **_totalIngresos_**. Es el mismo DRY que vieron en **_generarValoresReporte_**: si ya tienen una función que hace algo, úsenla. Componer + reusar: las dos ideas del paradigma aplicadas en una función de tres líneas."*

---

#### 5.2 Conectar al `app.js` final + cierre del día (P3.3)

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — **_app.js_** completo + consola.**

> **Tu apertura:**
> *"Cerramos armando el flujo real. En las pruebas usamos un array de datos fijo; ahora reconectamos la captura por prompt de C05 con el reporte funcional de hoy."*

> **Code-along del lab — Parte 3.3 (el `app.js` final):**
> 1. Volver a vaciar los arrays: **_let nombres = []_** y **_let valores = []_** (en P1-P2 usaban el array de prueba).
> 2. Mantener la **captura imperativa de C05** — **_registrarMovimiento()_** con prompt + validación + el **_while_** que repite.
> 3. Después del **_while_**, en vez del reporte viejo de C05, llamar al **reporte funcional de hoy**:
>    ```javascript
>    imprimirReporte(nombres, valores);
>    console.log('Promedio de ingresos: $' + promedioIngresos(valores).toFixed(2));
>    ```
> 4. *"Miren lo que quedó: la captura sigue siendo imperativa (prompt, while — eso está bien para pedir datos). Pero TODO el cálculo y el reporte ahora son funciones puras + métodos de array. Cada parte en su estilo."*

> **Verificar (Checkpoint 3 del lab):**
> Registrar 4 movimientos (2 ingresos, 2 gastos) → el reporte muestra cantidad, ingresos totales, gastos totales, saldo y promedio de ingresos. Confirmar que **_functional-utils.js_** tiene **≥8 funciones puras**.

> **Cierre del día — los dos paradigmas se complementan (lección final):**
> *"Repasen lo que pasó hoy. El **_for_** de C05 que sumaba el saldo: murió, hoy es una línea de reduce. Pero ojo con la conclusión: NO es que 'lo funcional reemplaza a lo imperativo'. Miren su propio **_app.js_** — la CAPTURA sigue siendo imperativa (prompt, while), porque pedir datos al usuario paso a paso se hace bien así. El CÁLCULO es funcional, porque transformar y resumir datos se hace mejor con funciones puras. Los dos paradigmas conviven en el mismo archivo, cada uno donde brilla. Esa es la lección del día: no es funcional VS imperativo, es saber CUÁNDO usar cada uno."*     

> **Puente a C07 (siembra):**
> *"¿Se acuerdan de la nota del reporte? Acceder con **_reporte[0]_**, **_reporte[1]_** funciona pero hay que acordarse de las posiciones. Y todo el día arrastramos los dos arrays paralelos —**_nombres_** y **_valores_**— cruzándolos por índice. En C07 eso desaparece: los dos arrays se vuelven UN solo array de objetos, donde cada movimiento es **_{ nombre, tipo, valor }_** — con NOMBRE, no con posición. Y lo mejor: todas las funciones funcionales que escribieron hoy (map, filter, reduce) van a seguir sirviendo igual sobre ese array de objetos. Lo que aprendieron hoy es la base de lo que viene."*

> **Discusión final (preguntas del lab):**
> - *"¿Qué función pura nueva crearon hoy que más les gustó?"*
> - *"¿Les costó más entender **_.reduce_** o aceptar que **_.map_** no muta el original?"*
> - *"¿En qué les cambia el código saber que ahora pueden filtrar y transformar sin escribir un solo **_for_**?"*

---

## Mapeo Momentos ↔ Lab ↔ Conceptos de Capa 0

| Momento | Parte del lab | Conceptos de Capa 0 |
|---|---|---|
| **M1** | Setup + P0.1 + P0.2 | B1 (funciones como valores, expresión vs declaración, anónima) + B2 (arrow functions, 4 reglas, arrow vs function). **Objeto implícito `() => ({})` fuera** — el lab ya no usa objetos (P2.4 reescrito a array) |
| **M2** | P0.3 | B3 (función pura + efecto secundario integrado) + B4 (orden superior, callback, estructura universal). *(Inmutabilidad → M3.)* |
| **M3** | P1.1 → P1.4 | B5 parcial: **_.map_** (+ **inmutabilidad**, movida desde B3), **_.filter_**, **_.find_** |
| **M4** | P2.1 → P2.4 | B5: **_.reduce_**, **_.forEach_** + **B6 composición** (se nombra en M4.2 al ver **_totalIngresos_** usar **_obtenerIngresos_**) + **B6 DRY** (se nombra en M4.4 al ver **_generarValoresReporte_** reusar funciones) |
| **M5** | P3.1 → P3.3 + Cierre | Aplicar composición + DRY en **_promedioIngresos_** (ambas ya vistas en M4) + cierre del día (los 2 paradigmas se complementan) + puente C07. *(some/every NO se mencionan.)* |

**Validación de paridad Momento ↔ Parte del lab:**
- ✅ Cada Momento cita una Parte específica del lab cuyos sub-pasos Eric puede leer verbatim.
- ✅ El marco teórico de los apuntes (funciones como valores en M1, orden superior + callback universal en M2) se enseña ANTES de los métodos concretos (M3/M4).
- ✅ El **callback universal `(elemento, indice, array)`** (M2.3) se reaprovecha en los 5 métodos de M3/M4 — el alumno aprende una firma, no cinco.
- ✅ **Efecto secundario** se integra en 2.1 (no es sub-punto propio — es lo que define a una función impura). **Inmutabilidad** se movió de M2 a M3.1, donde **_.map_** le da contexto real (el primer método que devuelve array nuevo).
- ✅ El **patrón §6.4.4** (concepto → imagen → demo en vivo → lab) se aplica en M3 y M4 (los métodos densos). Las demos se hacen en vivo en la consola del navegador, con el código en el guion — **sin archivo de apoyo separado** (decisión de Eric para esta clase).
- ✅ El **gancho ejecutable** (§5.3.1) abre M1 (el **_for_** vs **_.reduce_**) y se cierra en M4.1 (reduce se explica y el for muere).
- ✅ El **patrón iluminar concepto implícito** (§6.4.6) se aplica en M1.2 — por **demostración de paralelismo** (un número y una función soportan las mismas 3 operaciones: guardar, copiar, pasar), no por la pregunta circular "¿qué tipo de dato es?".
- ✅ El **cierre de Momento con puente** (§5.2 punto 11) se documenta al final de M1-M4.
- ✅ **Cero objetos en C06.** El **caso objeto implícito `() => ({})`** no se enseña (es de C07). El lab reescribió **_generarReporte_** (P2.4) para devolver un **array indexado** **_[cantidad, totalIngresos, totalGastos, saldo]_** en vez de un objeto, así que el tema de objetos queda 100% fuera hasta C07. (Decisión #4 resuelta — opción B.)
- ✅ **_.some_**/**_.every_** quedan 100% fuera del guion — no se mencionan (decisión de Eric).
- ✅ **Composición y DRY se enseñan donde suceden en el code-along, no como sub-puntos teóricos aparte** (decisión de Eric: "mencionar el concepto donde corresponde, luego de que sucedió"). Composición se nombra en **M4.2** (cuando **_totalIngresos_** llama a **_obtenerIngresos_**); DRY se nombra en **M4.4** (cuando **_generarValoresReporte_** reusa funciones en vez de reescribir). M5 NO tiene sub-puntos teóricos — sus 2 sub-puntos solo APLICAN lo visto: 5.1 escribe **_promedioIngresos_** (componer + reusar) y 5.2 conecta el app.js + cierre del día integrado.

## Decisiones pedagógicas a confirmar con Eric

1. **Datos de prueba del lab (P1-P3):** el lab pide reemplazar temporalmente **_let valores = []_** por **_[3000, -45.50, 500, -30]_** para probar sin prompts, y volver a vaciarlos en P3.3. El guion sigue esta indicación. ¿OK mantener ese flujo de "datos de prueba temporales"?
2. ✅ **Archivo de apoyo — RESUELTO.** No se usa **_apoyo-claseNN.html_** en esta clase. Las demos de cada método se hacen en vivo en la consola del navegador, con el código directamente en el guion, sobre el array de prueba **_[5, 8, 12, 20, 7]_**.
3. **Tiempo de M4 (reduce):** **_.reduce_** es el concepto más difícil y M4 quedó en 30 min. Si el grupo histórico se traba con reduce, podemos subir M4 a 35 y bajar M5 a 15 (composición/DRY es liviano). ¿Preferencia?
4. ✅ **El objeto de P2.4 — RESUELTO (opción B).** Eric reescribió el lab: **_generarValoresReporte_** ahora devuelve un **array indexado** **_[cantidad, totalIngresos, totalGastos, saldo]_** en vez de un objeto, y **_imprimirReporte_** accede por índice (**_reporte[0]_**, **_reporte[1]_**…). No se usan objetos en C06 — el tema queda íntegro para C07. M4.4 se redacta con este código nuevo, sin sneak peek de objetos.

**Estado de redacción:** Capa 0 ✅ · Capa 1 ✅ · Capa 2+3: M1 ✅ · M2 ✅ · M3 ✅ · M4 ✅ · M5 ✅ · Guía Excalidraw pendiente. (Sin archivo de apoyo — demos en vivo en consola. Cero objetos, sin some/every.)
