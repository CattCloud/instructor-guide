# CLASE 05: Programación Imperativa + Arrays

> **Módulo:** M2 — Clase 1 de 4 (apertura del Módulo 2)
> **Curso:** Code 201
> **Proyecto Víctima:** **Gestor de Presupuesto Personal** (NUEVO — proyecto del M2, no continúa el landing del M1). Script JavaScript que corre en la consola del navegador. Repo nuevo: **_personal-budget_**.
> **Estado:** Capa 1 — estructura de Momentos. Capa 2+3 pendiente. **Capa 0 omitida por autorización explícita de Eric esta vez.**
> **Fecha:** 2026-05-28

---

## Metadatos de la clase

| | |
|---|---|
| Duración real de clase | 3h (180 min) |
| Tiempo preparado | 2h 30min (150 min, incluye receso) |
| Receso | 10 min (entre M2 y M3) |
| Colchón invisible | 30 min |
| Total Momentos | 5 |
| Lab calificado | No (los calificados son las clases 4 de cada módulo — C08 será el calificado del M2) |
| Conocimiento previo asumido | **Code 101 M3 cubierto:** variables (**_let_** / **_const_**), tipos primitivos (string / number), operadores aritméticos y de comparación, **_console.log_**, **_if_** / **_else_** con comparación explícita (**_===_**, **_!==_**, **_&gt;_**, **_&lt;_**), funciones con **_function_** + parámetros + **_return_**, eventos **_click_** y **_input_** básicos (ver **_SYLABUS-CODE101.md_** M3). |
| Conceptos JS nuevos | **Array** + **_[]_** + **_.push()_** + **_.length_** + indexación **_arr[i]_** (índice 0), **arrays paralelos** como modelo de datos, APIs del navegador (**_prompt()_**, **_parseFloat()_**, **_isNaN()_**, **_alert()_**), **booleano** como tipo + **truthy/falsy**, validación combinada con **_&#124;&#124;_**, bucle **_while_**, bucle **_for_** clásico, **_.toFixed(2)_**, **función imperativa** (sin parámetros, modifica estado global), **_return_** sin valor (early exit), refactor de extracción (distinto del refactor aditivo de C04). |
| Continuidad con C01-C04 | Cambia el paradigma del curso: del CSS estático (M1) al JavaScript imperativo (M2). Repo nuevo, proyecto víctima nuevo, modelo mental nuevo (de "diseñar visualmente" a "pensar en flujo de ejecución + estado global"). |
| Lección pedagógica clave | **Los arrays paralelos son frágiles**: si actualizás uno y olvidás el otro, el sistema se descalibra silenciosamente. Esta fragilidad se ejecuta en vivo en el cierre (gancho ejecutable a C07 — objetos como solución). |
| Especial: apertura del M2 | Eric necesita un puente narrativo fuerte entre el cierre del M1 (landing CALIFICADO entregado) y el arranque del M2 (proyecto nuevo en consola). No es continuidad — es **reset intencional**. |

---

## Tabla de tiempos

| # | Momento | Foco principal | Tiempo | Parte del lab |
|---|---|---|---|---|
| **M1** | Apertura + ¿Qué es un array? + ejercicio autónomo + arrays paralelos | Puente M1→M2 + concepto de array + **ejercicio cerrado de 5-7 min para validar solo** + modelo de datos del proyecto | **30 min** | Setup + P1.1 + P1.2 |
| **M2** | APIs del navegador + booleano + truthy/falsy + validación | **_prompt_** / **_parseFloat_** / **_alert_** + concepto de booleano + qué cuenta como verdadero/falso en JS + los 3 niveles de validación del lab | **35 min** | P1.3 + P1.4 + P1.5 |
| | **RECESO** | | **10 min** | — |
| **M3** | Bucles **_while_** y **_for_** + cálculo del saldo | **_while_** para repetir captura (usuario decide) + **_for_** para recorrer array + **_.toFixed(2)_** + verificación con 3 movimientos | **40 min** | P2.1 + P2.2 + P2.3 |
| **M4** | Refactor a funciones imperativas | Concepto de función imperativa + refactor de extracción + 3 funciones (**_registrarMovimiento_**, **_calcularSaldo_**, **_mostrarResumen_**) + flujo final | **30 min** | P3.1 + P3.2 + P3.3 + P3.4 + P3.5 |
| **M5** | Cierre + dolor de arrays paralelos + puente a C06/C07 | **Gancho ejecutable**: ejecutar el desalineamiento de arrays paralelos en vivo → motivar C07 (objetos). Discusión + puente al M2.2 (C06 funcional). | **15 min** | Cierre + Logros |
| | **Colchón** | Preguntas, retrasos, alumnos rezagados con setup | **30 min** | — |
| | **Total preparado** | | **150 min** | |

---

## Cadena problema → solución

```
M1: "Cerraron el M1 con un landing entregado y calificado. Bien hecho — ese módulo
     se cerró. Hoy arranca el M2: JavaScript fundamentals. Proyecto nuevo, repo
     nuevo, modelo mental nuevo. El primer ladrillo del módulo: aprender la
     estructura de datos más usada de JavaScript — los arrays. Sin arrays no
     pueden guardar 10 movimientos del presupuesto. Sin arrays no pueden guardar
     una lista de cualquier cosa. Vamos."
          ↓ (concepto de array + arrays paralelos + setup del repo + ejercicio autónomo de validación)
M2: "Saben declarar el array y agregar elementos. Pero el array está vacío:
     necesitamos pedirle datos al usuario y validarlos antes de guardarlos.
     ¿Cómo le pedimos algo al usuario desde JavaScript? ¿Y cómo decide JavaScript
     si un dato está bien o mal? Spoiler: necesitamos entender qué es verdadero
     y falso para JavaScript — y no es lo que imaginan."
          ↓ (prompt/parseFloat/alert + booleano + truthy/falsy + validación combinada con || + code-along P1)
RECESO
M3: "Tenemos 1 movimiento capturado y validado. Pero el usuario quiere registrar
     muchos en una misma ejecución, y al final ver el saldo de los movimientos
     acumulados. Necesitamos REPETIR la captura (sin saber cuántas veces) y
     RECORRER el array para sumar los valores."
          ↓ (while para repetir captura indefinida + for para recorrer array + .toFixed(2) + saldo calculado)
M4: "El código de arriba funciona pero está todo suelto: variables globales, un
     while gigante, un for gigante. ¿Cómo lo organizamos como lo hace un equipo
     profesional? Lo dividimos en funciones — cada una con UNA responsabilidad."
          ↓ (función imperativa + refactor de extracción + 3 funciones + flujo final con while + 1 llamada al cierre)
M5: "Tenemos el Gestor funcionando. Pero hay un problema escondido en el modelo
     de datos. ¿Qué pasa si por accidente hago push en nombres pero olvido push
     en valores?"
          ↓ (ejecución en vivo del desalineamiento → todo se rompe silenciosamente → puente a C07 objetos)
```

**Notas sobre la cadena:**

- **M1→M2** es la transición más crítica del día. El alumno acaba de pasar 4 clases haciendo CSS — hoy arranca con JavaScript en un proyecto sin nada visual. El puente debe **nombrar explícitamente** el cierre del M1 + apertura del M2 (proyecto nuevo, paradigma nuevo) para que el alumno reorganice mentalmente.
- **M2 introduce booleano + truthy/falsy ANTES de la validación**. El alumno del 101 viene escribiendo **_if (variable === valor)_** pero probablemente nunca le explicaron qué hace **_if (variable)_** sin comparación. Es un descubrimiento conceptual: el **_if_** no compara — el **_if_** **evalúa la verdad del valor**. Sin este sub-punto, el **_!nombre_** del lab queda como magia.
- **M3 y M4 son code-along intensivo.** La teoría es mínima (concepto de while, concepto de for, concepto de función imperativa). El grueso es tipear el lab.
- **M5 es gancho ejecutable** (ver SKILL §5.3.1): el alumno ve el problema en vivo antes de que C07 ofrezca la solución (objetos). Es la apertura ejecutada de C07, no un teaser narrativo.

---

## Estructura de Momentos

---

### MOMENTO 1 — Apertura + ¿Qué es un array? + arrays paralelos + ejercicio autónomo

**Tiempo:** ~30 min
**Parte del lab:** Setup Inicial + Parte 1.1 + Parte 1.2

> **OBJETIVO:** El alumno cierra mentalmente el M1, entiende que hoy arranca un módulo nuevo con proyecto nuevo, declara el setup del repo **_personal-budget_** (HTML mínimo + **_app.js_** vinculado), aprende qué es un array y los 4 verbos esenciales (**_[]_**, **_.push()_**, **_.length_**, **_arr[i]_** con índice base 0), **valida solo con un ejercicio cerrado de 5-7 min** que entendió arrays como concepto puro, y recién entonces aplica el concepto al modelo de datos del proyecto víctima (2 arrays paralelos con convención de signos).

> **Patrón pedagógico de M1:** apertura como **reset narrativo** (no continuidad). Concepto teórico de array (con Panel Excalidraw de la anatomía + indexación) → **ejercicio autónomo de validación con captura de consola como evidencia** → aplicación al modelo de datos real del proyecto. El orden es deliberado: el alumno valida el array genérico ANTES de cargar la complejidad de los arrays paralelos del proyecto. El ejercicio autónomo es **cerrado y genérico** — NO usa el dominio del proyecto víctima (presupuesto/movimientos) para evitar dar las respuestas servidas; usa un dominio distinto (componentes de computadora) para validar **transferencia de criterio**, no recall (memoria `[[feedback-situaciones-interactivas-genericas]]`). El alumno lo resuelve **escribiendo código real en un archivo .js** (no tipeando en la consola interactiva); la consola solo muestra los **_console.log_**. **Eric NO resuelve el ejercicio en vivo con el código completo** — el alumno lo resuelve solo y entrega **captura de consola como evidencia**; Eric solo señala los 2 conceptos clave (índice 0, fórmula `length-1`) al revisar las capturas, sin servir la solución. La guía de salida esperada por punto está documentada como referencia de corrección del instructor.

---

#### 1.1 Apertura — cierre del M1 + arranque del M2 + agenda del día

**EN PANTALLA: PRESENTACIÓN — slide de portada del Módulo 2 con el nombre del proyecto víctima "Gestor de Presupuesto Personal" + tabla de los 5 momentos del día.**

> **Tu apertura:**
> *"Buenos días. La clase pasada cerraron el Módulo 1 — entregaron su landing multi-página, responsive, con formulario validado, deployado en GitHub Pages, y siguiendo el flujo Git profesional. Ese módulo está cerrado. Bien hecho."*
>
> *"Hoy arranca un módulo nuevo, y es un cambio grande. Hasta ayer todo lo que hicieron fue CSS — diseñar, maquetar, hacer que se vea bien. A partir de hoy entramos a JavaScript de verdad: programación. Vamos a hacer que el código PIENSE, no solo que se vea bien."*

> **Tu explicación del cambio de paradigma:**
> *"Tres cosas cambian hoy y quiero que las tengan claras:"*
>
> - *"**Proyecto nuevo.** El landing quedó atrás. El proyecto del Módulo 2 es un **Gestor de Presupuesto Personal** — un programa que registra ingresos y gastos y te dice tu saldo."*
> - *"**Repo nuevo.** No vamos a seguir sobre el landing. Hoy crean un repositorio desde cero: **_personal-budget_**."*
> - *"**Pantalla distinta.** Hoy NO vamos a trabajar mirando una página bonita. Vamos a trabajar en la **consola del navegador**. El 'look' del producto hoy no importa — importa la lógica. Esto les va a chocar al principio: van a sentir que retrocedimos visualmente. No retrocedimos — cambiamos de capa. Estamos aprendiendo a pensar como programadores."*

> **Tu agenda del día (los 5 momentos):**
> *"El plan de hoy, en 5 bloques:"*
>
> - *"**Ahora:** arrays — la estructura de datos más usada de JavaScript. Sin esto no guardan ni una lista."*
> - *"**Después del primer bloque:** cómo pedirle datos al usuario y validar que no metan basura."*
> - *"**Después del receso:** bucles — para repetir tareas y recorrer listas."*
> - *"**Luego:** funciones — para organizar todo el código como lo hace un equipo profesional."*
> - *"**Cierre:** les voy a mostrar un problema escondido en nuestro código que nos va a abrir la puerta a las próximas dos clases."*
>
> *"Arrancamos."*

---

#### 1.2 Setup del proyecto — repo + index.html + app.js

**EN PANTALLA: VS CODE DIVIDIDO CON LA TERMINAL — terminal abajo para los comandos Git, explorador de archivos a la izquierda.**

> **Tu apertura:**
> *"Primero el setup. Repo nuevo, dos archivos, y un detalle de cómo se conecta el JavaScript al HTML que hoy por fin van a entender. Vamos al code-along."*

> **Code-along del lab — Setup Inicial:**
> 1. Crear un repositorio nuevo en GitHub llamado **_personal-budget_**. Clonarlo en local (lo que aprendieron en C04).
> 2. Dentro de la carpeta, crear 2 archivos: **_index.html_** y **_app.js_**.
> 3. En **_index.html_**, escribir el HTML mínimo del lab:
>    ```html
>    <body>
>      <h1>Gestor de Presupuesto Personal</h1>
>      <p>Abre la consola del navegador (F12 → Console) para interactuar.</p>
>      <script src="app.js"></script>
>    </body>
>    ```
> 4. Dejar **_app.js_** vacío por ahora.

> **Tu explicación teórica precisa (el detalle del `<script>` — concepto que arrastran sin explicar desde Code 101):**
> **¿Qué hace **_&lt;script src="app.js"&gt;_**?** Carga y ejecuta el archivo JavaScript dentro de la página. Es el puente entre el HTML y el código.
>
> *"Fíjense DÓNDE lo pusimos: al final del **_&lt;body&gt;_**, justo antes de cerrarlo. Eso no es casualidad."*
>
> - *"El navegador lee el HTML de arriba hacia abajo. Si pongo el **_&lt;script&gt;_** al final, cuando el JavaScript empieza a correr, todo el HTML de arriba YA existe."*
> - *"Si lo pusiera arriba, el JavaScript correría antes de que el HTML exista, y al buscar elementos de la página no encontraría nada. Hoy no manipulamos la página todavía, pero es la costumbre profesional correcta."*
>
> *"Este es uno de esos detalles que en Code 101 escribieron sin que nadie les dijera por qué. Hoy ya lo saben: **_&lt;script&gt;_** al final del body para que el HTML exista primero."*

> **Pregunta de calibración:**
> *"Si pongo el **_&lt;script&gt;_** en el **_&lt;head&gt;_**, arriba de todo, ¿qué problema podría tener cuando el código intente leer un elemento de la página?"*
> *(Respuesta esperada: el HTML todavía no existe cuando corre el JS, entonces no encuentra el elemento y da error o `null`. Por eso va al final del body.)*

---

#### 1.3 ¿Qué es un array? — concepto + 4 verbos esenciales

**EN PANTALLA: EXCALIDRAW — Panel 1.1 (anatomía de un array): caja horizontal con 4 celdas contiguas que contienen 'manzana', 'pera', 'uva', 'mango'. Debajo de cada celda, el índice (0, 1, 2, 3) grande en rojo **_#e03131_**. Alrededor, 4 etiquetas conectadas con flechas a las operaciones: declaración con **_[]_**, acceso por índice **_arr[i]_**, longitud **_arr.length_**, agregar al final **_arr.push(x)_**. Anotación destacada al pie: "EL ÍNDICE ARRANCA EN 0 — el bug #1 al empezar con arrays."**

> **Tu apertura — el problema que el array resuelve:**
> *"Pregunta para arrancar. Imaginen que quiero guardar la temperatura de hoy. Fácil:"*
> ```javascript
> let temperatura = 22;
> ```
> *"Una caja, un valor. Eso es una variable, lo saben desde Code 101. Pero ahora quiero guardar la temperatura de los últimos 5 días. ¿Qué hago? ¿Cinco variables?"*
> ```javascript
> let temp1 = 22;
> let temp2 = 25;
> let temp3 = 18;
> let temp4 = 30;
> let temp5 = 27;
> ```
> *"Funciona... pero es horrible. ¿Y si son 100 días? ¿100 variables? ¿Y cómo las recorro todas? Imposible. Necesitamos una caja que guarde MUCHOS valores, no uno solo. Esa caja es el **array**."*

> **Tu explicación teórica precisa:**
> **¿Qué es un array?** Una **lista ordenada de valores**, guardada en una sola variable. Donde una variable normal guarda UN valor, un array guarda una colección entera — y mantiene el orden.
>
> *"La palabra clave es **ordenada**. Los valores tienen un orden fijo, y cada uno tiene una posición numerada. Esa posición se llama **índice**."*
>
> **Cómo se declara — con corchetes **_[]_**:**
> ```javascript
> let frutas = ['manzana', 'pera', 'uva'];
> ```
> *"Corchetes para abrir y cerrar, valores separados por coma. Esto es un array de 3 strings. También puede ser de números, o mezclado, pero por ahora pensémoslo como una lista."*

> **Tu explicación de la indexación (el punto más importante del día):**
> *"Acá viene lo que MÁS errores causa cuando uno empieza, así que préstenme toda la atención. Cada valor del array tiene una posición — un índice. Y los índices **NO arrancan en 1. Arrancan en 0.**"*
>
> Mostrar sobre el Panel 1.1:
> ```
>   índice:     0          1        2        3
>            ['manzana', 'pera', 'uva', 'mango']
> ```
>
> - *"La primera fruta, 'manzana', está en el índice **0**. No en el 1. En el CERO."*
> - *"La segunda, 'pera', en el índice **1**."*
> - *"'uva' en el **2**, 'mango' en el **3**."*
>
> *"Entonces, ¿cuántos elementos hay? Cuatro. Pero el último índice es 3, no 4. Esto es lo que confunde: **hay 4 elementos, pero el último está en la posición 3**, porque empezamos a contar desde 0. Repítanlo conmigo mentalmente: el primero es cero."*
>
> **La fórmula del último elemento:**
> *"Como el conteo arranca en 0, el último elemento NUNCA está en **_arr[cantidad]_**. Está en **_arr[cantidad - 1]_**. Si hay 4 elementos, el último está en el índice 3. Esta fórmula —**_arr[arr.length - 1]_**— la van a usar toda su carrera."*

> **Tu explicación de los 4 verbos esenciales:**
> *"Con los arrays vamos a hacer 4 cosas hoy. Solo 4. Les llamo los 4 verbos esenciales:"*
>
> - **1. Crear** → con corchetes. **_let arr = []_** crea un array vacío; **_let arr = [1, 2, 3]_** uno con valores.
> - **2. Leer por posición** → **_arr[i]_**, donde **_i_** es el índice. **_frutas[0]_** te da 'manzana'.
> - **3. Saber cuántos hay** → **_arr.length_**. Es una **propiedad** (sin paréntesis), no un método. **_frutas.length_** te da 3.
> - **4. Agregar al final** → **_arr.push(valor)_**. Es un **método** (con paréntesis). **_frutas.push('mango')_** mete 'mango' al final.
>
> *"Detalle de vocabulario que importa: **_.length_** va SIN paréntesis porque es una propiedad — un dato del array. **_.push()_** va CON paréntesis porque es un método — una acción que hace algo. Propiedad = dato. Método = acción. Lo van a ver en todos los objetos de JavaScript."*

> **Code-along de concepto (en consola del navegador, NO en el proyecto):**
> *"Vamos a probarlo en vivo. Abran la consola del navegador con F12, pestaña Console. Esto NO va en su **_app.js_** todavía — es un scratchpad para entender el concepto."*
> 1. Declarar el array:
>    ```javascript
>    let frutas = ['manzana', 'pera', 'uva'];
>    ```
> 2. Preguntar cuántos hay:
>    ```javascript
>    console.log(frutas.length);   // 3
>    ```
> 3. Leer por posición — mostrar que el 0 es el primero:
>    ```javascript
>    console.log(frutas[0]);        // 'manzana' — el PRIMERO
>    console.log(frutas[2]);        // 'uva' — el TERCERO, índice 2
>    ```
> 4. Agregar al final y verificar que cambió:
>    ```javascript
>    frutas.push('mango');
>    console.log(frutas);           // ['manzana', 'pera', 'uva', 'mango']
>    console.log(frutas.length);    // 4 — ahora son 4
>    ```
> 5. *"Miren lo que pasó: **_.length_** pasó de 3 a 4 solo porque hicimos **_push_**. El array sabe cuántos tiene en cada momento. No lo contamos a mano nunca."*

> **Predecir antes de ejecutar (fija el bug del índice 0):**
> *"Antes de que lo escriba — díganme en el chat: en el array de 4 frutas, ¿qué me devuelve **_frutas[4]_**?"*
> *(Esperar respuestas. Muchos dirán 'mango'. Resultado real: **_undefined_** — porque 'mango' está en el índice 3, no 4. El índice 4 no existe. Recién ahí explicar: "Esto es EXACTAMENTE el bug #1 con arrays. Pedir una posición que no existe porque uno cuenta desde 1. 'mango' es **_frutas[3]_**. **_frutas[4]_** está vacío — undefined.")*

> **Tu cierre del concepto:**
> *"Eso es el array: una lista ordenada, indexada desde 0, con 4 verbos — crear, leer, contar, agregar. Es la estructura MÁS usada de JavaScript. Todo lo que viene del Módulo 2 en adelante usa arrays. Estos 4 verbos van a ser instinto en una semana. Ahora quiero que lo prueben solos."*

---

#### 1.4 Ejercicio autónomo de arrays — 5-7 min en código + captura de consola como evidencia

**EN PANTALLA: PRESENTACIÓN — slide con el enunciado del ejercicio + recordatorio "Escribí el código en un archivo .js, mirá el resultado en la consola (F12)" + nota "📸 Al terminar, captura de pantalla de la consola con los resultados".**

> **Tu apertura:**
> *"Antes de aplicar arrays al proyecto, paro. Quiero que ustedes solos prueben si entendieron arrays como concepto puro — no copiándome, sino resolviendo. 5 a 7 minutos."*
>
> *"Importante: esto lo hacen escribiendo **código de verdad**, no tipeando comandos sueltos en la consola. Creen un archivo aparte — **_practica.js_** — y en su **_index.html_** cambien temporalmente la línea del script a **_&lt;script src="practica.js"&gt;&lt;/script&gt;_**. Ahí escriben el código del ejercicio, usando **_console.log_** para mostrar cada resultado. Recargan la página, abren la consola (F12 → Console) y ahí VEN los resultados de sus **_console.log_**. Cuando terminen, me mandan una captura de la consola — y devuelven el script a **_app.js_** para seguir con el proyecto."*

> **Enunciado del ejercicio (proyectado — dominio distinto al del proyecto víctima):**
>
> *Una tienda de tecnología guarda en un array los componentes de una PC armada:*
>
> ```javascript
> let componentes = ['CPU', 'RAM', 'SSD', 'GPU'];
> ```
>
> *Escribí el código que resuelva cada punto y mostrá el resultado con **_console.log_**:*
>
> 1. *Mostrá cuántos componentes tiene la PC. Sin contar a mano.*
> 2. *Mostrá el PRIMER componente del array. (Ojo con el índice.)*
> 3. *La PC necesita refrigeración: agregá **_'Cooler'_** al final del array.*
> 4. *Mostrá de nuevo cuántos componentes hay, para verificar que ahora es uno más.*
> 5. *Mostrá el ÚLTIMO componente del array — sin escribir el número de la posición a mano. Tiene que seguir funcionando aunque agregues más componentes después.*
>
> *📸 Captura la consola con los 5 resultados visibles y mándamela.*

> **Guía de salida esperada en consola (referencia de corrección para Eric — NO se proyecta):**
>
> | Punto | Qué debe imprimir la consola | Concepto que valida |
> |---|---|---|
> | 1 | `4` | **_.length_** (no contar a mano) |
> | 2 | `CPU` | indexación desde 0 → **_componentes[0]_** |
> | 3 | *(no imprime nada por sí solo — el **_push_** modifica el array; aceptable si imprime el array completo `['CPU','RAM','SSD','GPU','Cooler']` para verificar)* | **_.push()_** |
> | 4 | `5` | **_.length_** después del push |
> | 5 | `Cooler` | fórmula del último → **_componentes[componentes.length - 1]_** |
>
> Errores diagnósticos a buscar en las capturas:
> - Punto 2 muestra `RAM` en vez de `CPU` → cayó en el bug del índice (usó 1 en vez de 0).
> - Punto 5 muestra `Cooler` pero el código tiene `componentes[4]` escrito a mano → resolvió hoy pero su código se rompe al agregar más; faltó usar **_.length - 1_**.

> **Manejo del ejercicio:**
> - Eric lee el enunciado en voz alta y deja UNA pista flotando sobre el punto 2: *"el primer componente — ¿en qué índice está el primero de cualquier array?"* (sin dar la respuesta).
> - *(Esperar 5-7 min. Eric circula por las pantallas / lee el chat. NO resolver en vivo — el objetivo es que lo resuelvan solos y manden la captura.)*

> **Cierre del ejercicio (sin dar el código completo — solo señalar los 2 conceptos clave):**
> *"Bien. Reviso las capturas. Dos cosas que separan al que entendió del que adivinó:"*
> - *"**Punto 2 — el primer componente.** Si su consola muestra **_RAM_** en vez de **_CPU_**, cayeron en el bug del índice: usaron 1 en vez de 0. El primero SIEMPRE es índice cero."*
> - *"**Punto 5 — el último.** Si escribieron **_componentes[4]_** a mano, resolvieron HOY pero su código se rompe mañana cuando agreguen otro componente. La forma profesional es **_componentes[componentes.length - 1]_** — funciona siempre, sin importar cuántos haya. Si no les salió, tranquilos: es la fórmula que más se usa con arrays y en una semana la tienen clavada."*
>
> *(Eric NO tipea la solución completa. El valor está en que lo intentaron solos y entregaron la captura como evidencia.)*

> **Mensaje pedagógico del ejercicio:**
> *"Los componentes de una PC no tienen NADA que ver con un presupuesto. Pero el criterio es exactamente el mismo. Si pudieron resolverlo con componentes, lo pueden resolver con cualquier cosa — eso significa que entendieron arrays como CONCEPTO, no como una receta de mi clase. Ahora que el concepto está firme, vamos a aplicarlo al modelo de datos real del Gestor."*

---

#### 1.5 Modelo de datos del proyecto — 2 arrays paralelos con convención de signos

**EN PANTALLA: EXCALIDRAW — Panel 1.2 (arrays paralelos del proyecto): dos arrays apilados verticalmente alineados por columna. Arriba: **_nombres_** con celdas 'Salario', 'Cena', 'Freelance'. Abajo: **_valores_** con celdas 3000, -45.50, 50. Líneas verticales discretas conectando los índices 0, 1, 2 entre ambos arrays. Anotación lateral: "**_nombres[i]_** y **_valores[i]_** describen el MISMO movimiento". Convención de signos al pie: **_+_** = ingreso, **_−_** = gasto.**

> **Tu apertura:**
> *"Lo del ejercicio era UN solo array — los componentes de una PC, una lista simple. Pero un movimiento del presupuesto tiene DOS datos al mismo tiempo: qué fue (un texto, 'Salario') y cuánto fue (un número, 3000). ¿Cómo guardamos los dos? Hay varias formas. La más elegante la van a ver en dos clases. Por ahora usamos la más simple: dos arrays que caminan en paralelo."*

> **Tu explicación teórica precisa:**
> **¿Qué son arrays paralelos?** Dos (o más) arrays donde el mismo índice **_i_** describe el mismo registro en cada uno. **_nombres[0]_** y **_valores[0]_** son el mismo movimiento, mirado desde dos arrays distintos.
>
> Mostrar sobre el Panel 1.2:
> ```
>   índice:      0          1         2
>   nombres:  ['Salario',  'Cena',  'Freelance']
>   valores:  [ 3000,      -45.50,   50        ]
> ```
> - *"El movimiento 0 es 'Salario' por 3000. Lo leo cruzando los dos arrays en el mismo índice: **_nombres[0]_** me dice qué fue, **_valores[0]_** me dice cuánto."*
> - *"El movimiento 1 es 'Cena' por -45.50. ¿Por qué negativo? Ahí viene la convención."*

> **Tu explicación de la convención de signos:**
> *"Truco clave del modelo. En vez de guardar en otro lado si un movimiento es ingreso o gasto, lo guardamos en el SIGNO del número:"*
>
> - *"**Positivo = ingreso.** Un salario de 3000 se guarda como **_3000_**."*
> - *"**Negativo = gasto.** Una cena de 45.50 se guarda como **_-45.50_**."*
>
> *"¿Por qué hacemos esto? Porque calcular el saldo total se vuelve trivial: solo sumo todo el array **_valores_**. Los ingresos suman, los gastos restan, el signo hace todo el trabajo. No necesito separar ingresos de gastos para calcular — la matemática lo hace sola."*

> **Code-along del lab — Parte 1.2 (al fin escribimos en el proyecto):**
> 1. Abrir **_app.js_** (que dejamos vacío en el setup).
> 2. Al inicio del archivo, declarar los dos arrays vacíos:
>    ```javascript
>    let nombres = [];
>    let valores = [];
>    ```
> 3. *"Vacíos por ahora — son la memoria del Gestor. A medida que el usuario registre movimientos, los vamos llenando con **_push_**. Siempre los dos juntos."*

> **Tu advertencia — sembrar el dolor que se ejecuta en M5:**
> *"Una cosa, y préstenle atención porque va a volver al final del día. Estos dos arrays son paralelos, lo que significa que dependen de MÍ para mantenerse sincronizados. Cada vez que registro un movimiento tengo que hacer push en los DOS — en **_nombres_** Y en **_valores_**. Si por error hago push en uno y me olvido del otro, el sistema se descalibra... y nada me avisa. El código no rompe, simplemente queda mal. Eso lo vamos a ver en acción al cierre de la clase — guárdenlo."*

> **Pregunta de activación:**
> *"Si **_nombres_** tiene 3 elementos y **_valores_** tiene 2, ¿qué movimiento quedó 'roto'? ¿Y cómo se daría cuenta el programa de que algo está mal?"*
> *(Respuesta esperada: el último movimiento de **_nombres_** quedó sin su valor. Y el programa NO se da cuenta solo — no hay nada que verifique que los dos arrays tengan el mismo largo. Por eso es frágil. Semilla directa para C07.)*

> **Cierre del Momento + puente a M2 (ver SKILL §5.2 punto 11):**
> *"Listo. Saben qué es un array, los 4 verbos esenciales, y lo validaron solos con el ejercicio de los componentes. Y ya tienen los dos arrays paralelos del proyecto declarados, vacíos, esperando datos. Pero están vacíos — y un Gestor de Presupuesto sin datos no sirve. La pregunta del siguiente bloque: ¿cómo le pedimos los datos al usuario? ¿Y cómo nos aseguramos de que no metan basura, como un monto que dice 'abc' en vez de un número? Después del bloque que viene, su Gestor va a capturar su primer movimiento de verdad. Vamos."*

---

### MOMENTO 2 — APIs del navegador + booleano + truthy/falsy + validación

**Tiempo:** ~35 min
**Parte del lab:** Parte 1.3 + Parte 1.4 + Parte 1.5

> **OBJETIVO:** El alumno aprende las 3 APIs del navegador del lab (**_prompt_**, **_alert_**, **_parseFloat_**), **descubre qué es un booleano** como tipo de dato (no como concepto abstracto), **descubre la distinción truthy/falsy de JavaScript** (qué cuenta como verdadero/falso cuando se evalúa en un **_if_** sin comparación explícita), aplica los 3 niveles de validación del lab (**_!nombre_** falsy, **_isNaN(monto)_** validación de conversión, **_tipo !== 'ingreso' && tipo !== 'gasto'_** opciones cerradas), captura el primer movimiento y lo guarda en los arrays paralelos.

> **Patrón pedagógico de M2:** orden estricto **booleano → truthy/falsy → validación aplicada**. El sub-punto sobre booleano + truthy/falsy es **iluminar concepto implícito** (ver SKILL §6.4.6): el alumno del 101 viene tipeando **_if (x === y)_** sin que nadie le haya explicado qué es **_true/false_** internamente. Hoy se entera de que el **_if_** evalúa la verdad de un valor, y de que JavaScript tiene reglas específicas sobre qué cuenta como "verdadero" sin que sea **_true_** literal.

---

#### 2.1 APIs del navegador — prompt, alert y parseFloat

**EN PANTALLA: EXCALIDRAW — Panel 2.1 (anatomía de las 3 APIs del navegador): caja central grande etiquetada "WINDOW — el navegador". Tres flechas salen hacia 3 cajas hijas: **_prompt(mensaje)_** → "abre ventana de input · devuelve siempre STRING (o null si cancela)"; **_alert(mensaje)_** → "muestra ventana de aviso · no devuelve nada útil"; **_parseFloat(texto)_** → "convierte string a número decimal · devuelve NaN si no puede". Anotación al pie en rojo: "Estas 3 viven en el NAVEGADOR. No son JavaScript puro — un servidor con Node.js no las tiene."**

> **Tu apertura:**
> *"Tienen los arrays vacíos. Para llenarlos necesitamos dos cosas: pedirle datos al usuario, y convertir esos datos a un formato usable. Para eso usamos tres herramientas del navegador. Atención a una distinción que casi nadie les explica."*

> **Tu explicación teórica precisa:**
> **¿Qué es una API del navegador?** Una funcionalidad que el **navegador** le presta a tu JavaScript. No es parte del lenguaje JavaScript en sí — es algo que el navegador agrega.
>
> *"Esto es importante: los 4 verbos de array que vimos —**_push_**, **_length_**— son de JavaScript puro, funcionan en cualquier lado. Pero **_prompt_** y **_alert_** son del NAVEGADOR. Por eso solo funcionan dentro de una página web. Si algún día corren JavaScript en un servidor (Node.js), **_prompt_** no existe. Es un préstamo del navegador, no del lenguaje."*
>
> **Las 3 APIs de hoy:**
>
> - **_prompt(mensaje)_** → abre una ventanita que le pide algo al usuario. **Devuelve siempre un string** — aunque el usuario escriba un número, llega como texto. Si el usuario cancela, devuelve **_null_**.
> - **_alert(mensaje)_** → muestra una ventanita de aviso. No devuelve nada útil — solo informa.
> - **_parseFloat(texto)_** → agarra un string y lo convierte a número decimal. **_parseFloat("45.50")_** da el número **_45.5_**. Y ojo con esto: si el texto no es un número, **_parseFloat("abc")_** NO rompe — devuelve **_NaN_** (Not a Number). Ese detalle nos importa para la validación en un rato.

> **Por qué parseFloat es necesario (el problema que resuelve):**
> *"¿Por qué convertir? Porque **_prompt_** SIEMPRE devuelve texto. Si pido un monto y el usuario escribe 100, me llega el string **_'100'_**, no el número **_100_**. Y si sumo strings, JavaScript los pega en vez de sumarlos: **_'100' + '50'_** da **_'10050'_**, no 150. Para hacer matemática necesito números de verdad. Por eso envuelvo el prompt del monto en parseFloat."*

> **Code-along del lab — Parte 1.3 (capturar el primer movimiento):**
> 1. En **_app.js_**, debajo de los dos arrays, escribir las 3 capturas del lab:
>    ```javascript
>    const nombre = prompt('Nombre del movimiento:');
>    const tipo = prompt('Tipo (ingreso / gasto):');
>    const monto = parseFloat(prompt('Monto:'));
>    ```
> 2. Recargar la página → aparecen los 3 prompts en secuencia.
> 3. Verificar el tipo de dato en consola:
>    ```javascript
>    console.log(typeof nombre);   // "string"
>    console.log(typeof monto);    // "number" — gracias a parseFloat
>    ```
>    *"Miren: **_nombre_** es string, pero **_monto_** es number. Si no hubiera usado parseFloat, monto también sería string y no podría sumarlo después."*

---

#### 2.2 ¿Qué es un booleano? — el tipo true/false + cómo decide el if

**EN PANTALLA: EXCALIDRAW — Panel 2.2 (anatomía del booleano + cómo decide el if): a la izquierda, una caja con SOLO dos celdas etiquetadas **_true_** (verde **_#2f9e44_**) y **_false_** (rojo **_#e03131_**) — leyenda "el booleano solo tiene 2 valores posibles". A la derecha, esquema del if: caja **_if ( CONDICIÓN )_** con dos flechas saliendo — flecha verde hacia "ejecuta el bloque" etiquetada "si es true", flecha roja hacia "salta el bloque" etiquetada "si es false". Anotación grande al pie: "EL IF NO COMPARA. EL IF PREGUNTA: ¿ESTO ES TRUE O FALSE?"**

> **Tu apertura — pregunta directa al alumno (iluminar concepto implícito, SKILL §6.4.6):**
> *"Vamos a validar los datos. Pero antes, una pregunta que va a sonar tonta y no lo es. En Code 101 ustedes escribieron decenas de **_if_** — **_if (edad === 18)_**, **_if (precio &gt; 100)_**. Mi pregunta: ¿qué es **_true_** y qué es **_false_**, técnicamente? ¿Qué tipo de dato son?"*
> *(Esperar 20-30 segundos. Recoger 2-3 respuestas del chat sin corregir — van a decir cosas como "es cuando algo se cumple", "es verdadero o falso". Validar lo rescatable y dar la definición.)*

> **Tu explicación teórica precisa:**
> **¿Qué es un booleano?** Es uno de los tipos de dato primitivos de JavaScript — como el string y el number que ya conocen. La diferencia: el booleano **solo tiene DOS valores posibles**: **_true_** y **_false_**. Nada más. Se escriben con esas palabras exactas, en minúscula, sin comillas.
>
> **Cómo decide el **_if_** (esto es lo que nadie les explicó):**
> *"El **_if_** no 'compara'. El **_if_** mira lo que hay adentro de los paréntesis y se pregunta UNA cosa: ¿esto es **_true_** o **_false_**? Si es **_true_**, ejecuta el bloque. Si es **_false_**, lo salta. Punto."*
>
> **Entonces, ¿por qué funcionan las comparaciones?** Porque los operadores de comparación **DEVUELVEN un booleano**:
> - **_3 &gt; 1_** se evalúa y devuelve **_true_**.
> - **_5 === 5_** devuelve **_true_**.
> - **_"a" === "b"_** devuelve **_false_**.
>
> *"Cuando ustedes escriben **_if (edad &gt; 18)_**, pasa esto en 2 pasos: primero JavaScript evalúa **_edad &gt; 18_** y obtiene **_true_** o **_false_**. Recién con ese booleano en mano, el **_if_** decide. El **_if_** nunca vio la edad — solo vio el **_true_** o **_false_** que salió de la comparación."*

> **Code-along de concepto (en consola):**
> *"Compruébenlo. Abran la consola y tipeen esto:"*
> ```javascript
> console.log(3 > 1);          // true
> console.log(5 === 5);        // true
> console.log("a" === "b");    // false
> console.log(typeof true);    // "boolean" — es un tipo, como string o number
> ```
> *"Esa última línea es la prueba: **_typeof true_** dice **_'boolean'_**. Es un tipo de dato real, no una idea abstracta."*

---

#### 2.3 Truthy / falsy — qué cuenta como verdadero o falso sin comparar

**EN PANTALLA: EXCALIDRAW — Panel 2.3 (truthy/falsy): dos columnas. Izquierda con título "FALSY — los 6 únicos" sobre fondo rojo claro, listando **_false_**, **_0_**, **_""_** (string vacío), **_null_**, **_undefined_**, **_NaN_**. Derecha con título "TRUTHY — TODO lo demás" sobre fondo verde claro, con ejemplos: **_true_**, **_1_**, **_-5_**, **_"hola"_** (cualquier texto con contenido), **_"0"_** (string con un cero ES truthy), **_[]_**, **_{}_**. Anotación grande al pie: "**_if (variable)_** SIN comparación → el if pregunta: ¿esta variable es truthy?"**

> **Tu apertura:**
> *"Acabamos de ver que el **_if_** evalúa true o false. Pero a veces van a ver código así: **_if (nombre)_**, sin ningún **_===_**, sin ningún **_&gt;_**. Solo la variable. ¿Qué evalúa el **_if_** ahí? La variable no es **_true_** ni **_false_** — es un texto. Acá entra una de las reglas más importantes de JavaScript."*

> **Tu explicación teórica precisa:**
> **La regla truthy/falsy:** cuando JavaScript necesita un booleano pero le das otra cosa (un string, un número, lo que sea), la convierte automáticamente a **_true_** o **_false_** según una regla fija. A los valores que se convierten en **_false_** los llamamos **falsy**. A todos los demás, **truthy**.
>
> **Los 6 valores falsy de JavaScript (memorícenlos — son solo 6):**
> - **_false_** (el booleano false en sí)
> - **_0_** (el número cero)
> - **_""_** (string vacío — sin nada adentro)
> - **_null_**
> - **_undefined_**
> - **_NaN_** (Not a Number)
>
> *"Esos 6 son TODO lo falsy que existe en JavaScript. Cualquier otra cosa es truthy: cualquier número que no sea cero, cualquier texto que tenga aunque sea un carácter, cualquier array, cualquier objeto."*
>
> **Una trampa clásica para que la tengan presente:**
> *"El string **_"0"_** —cero entre comillas— ES truthy. Porque no está vacío: tiene un carácter adentro. Lo único falsy entre los strings es el string totalmente vacío, **_""_**. Que no los agarre desprevenidos."*

> **Aplicación directa al lab — por qué `!nombre` detecta el campo vacío:**
> *"Ahora entienden el truco del lab. Cuando validemos el nombre, vamos a escribir **_if (!nombre)_**. ¿Qué pasa? Si el usuario apretó OK sin escribir nada, **_nombre_** es **_""_** — string vacío — que es FALSY. El **_!_** lo invierte: **_!falsy_** es **_true_**. Entonces el **_if_** se ejecuta y mostramos el error. Sin la regla truthy/falsy, no podríamos detectar el campo vacío con esta sintaxis tan corta."*

> **Code-along de concepto (en consola — el truco del `!!`):**
> *"Para VER el booleano que se esconde en cualquier valor, usen doble exclamación **_!!_** — convierte cualquier cosa a su booleano equivalente:"*
> ```javascript
> console.log(!!"hola");   // true  — texto con contenido
> console.log(!!"");       // false — string vacío
> console.log(!!0);        // false — el cero
> console.log(!!42);       // true  — cualquier número distinto de cero
> console.log(!!"0");      // true  — ¡OJO! string con un cero ES truthy
> ```
> *"Esa última es la trampa que les dije. **_!!"0"_** es true porque es un string con contenido."*

---

#### 2.4 Validación combinada con `||` — los 4 niveles de defensa del lab

**EN PANTALLA: EXCALIDRAW — Panel 2.4 (el if de validación descompuesto): bloque grande con el código **_if (!nombre || (tipo !== 'ingreso' && tipo !== 'gasto') || isNaN(monto) || monto &lt;= 0)_**. Cuatro flechas hacia 4 etiquetas numeradas: (1) **_!nombre_** → "FALSY: detecta nombre vacío"; (2) **_tipo !== 'ingreso' && tipo !== 'gasto'_** → "OPCIONES CERRADAS: solo acepta 2 valores válidos"; (3) **_isNaN(monto)_** → "CONVERSIÓN: detecta el NaN que dejó parseFloat"; (4) **_monto &lt;= 0_** → "REGLA DE NEGOCIO: no se acepta 0 ni negativo". Anotación lateral grande: "el **_||_** (OR): si CUALQUIERA es true → todo el if es true → datos inválidos".**

> **Tu apertura:**
> *"Ahora juntamos todo. **_prompt_** nos da los datos, pero el usuario puede meter basura: dejar el nombre vacío, escribir 'gastoo' mal, poner letras en el monto. Tenemos que rechazar todo eso ANTES de guardar. Una sola línea de **_if_** hace las 4 validaciones a la vez."*

> **Tu explicación del operador `||` (OR):**
> **¿Qué es **_||_**?** El operador OR (se lee "o"). Combina condiciones, y devuelve **_true_** si **AL MENOS UNA** es true. *"Pensándolo para validación: 'si pasa ESTO malo, O esto otro malo, O esto otro... entonces rechazá'. Con un solo dato malo alcanza para rechazar todo el movimiento."*

> **Tu lectura del if completo (los 4 niveles, leídos en voz alta sobre el Panel):**
> *"Leamos el **_if_** en castellano: 'Si el nombre está vacío, O el tipo no es ni ingreso ni gasto, O el monto no es un número, O el monto es cero o negativo... entonces, datos inválidos.' Son 4 defensas distintas:"*
>
> - **Nivel 1 — Falsy** (**_!nombre_**): detecta el nombre vacío. Lo que vimos en 2.3.
> - **Nivel 2 — Opciones cerradas** (**_tipo !== 'ingreso' && tipo !== 'gasto'_**): el tipo solo puede ser una de dos palabras. Cualquier otra cosa —un typo, mayúsculas, vacío— se rechaza.
> - **Nivel 3 — Validación de conversión** (**_isNaN(monto)_**): *"**_isNaN_** se lee literal: 'is Not a Number?' — ¿NO es un número? Devuelve true si el valor NO es número. Acá atrapamos el **_NaN_** que deja **_parseFloat_** cuando el usuario escribió letras en el monto."*
> - **Nivel 4 — Regla de negocio** (**_monto &lt;= 0_**): no aceptamos monto cero ni negativo. Un movimiento de $0 no aporta; el signo de ingreso/gasto lo manejamos nosotros con la convención, no el usuario.

> **Panorama profesional (patrón "X capas", SKILL §3.5):**
> *"Una aclaración para que tengan el mapa completo: todo esto es validación del lado del CLIENTE, en el navegador. Es la primera línea de defensa. En proyectos reales hay más capas: cuando conecten a un servidor (más adelante en su carrera) van a validar OTRA vez en el backend, y la base de datos valida una tercera vez. ¿Por qué tantas? Porque la del navegador se puede saltar. Pero eso es tema de otro curso — hoy dominamos la primera capa, que es la que el usuario ve."*

---

#### 2.5 Code-along del lab — Parte 1.4 + 1.5 (validar, guardar, probar)

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — **_app.js_** a la izquierda, consola del navegador a la derecha.**

> **Tu apertura:**
> *"Vamos al code-along. Escribimos el **_if_** de validación, y en el **_else_** —cuando los datos SÍ son válidos— calculamos el signo y guardamos en los dos arrays. Acá se junta todo lo del Momento."*

> **Code-along del lab — Parte 1.4 (validar + guardar):**
> 1. Después de las 3 capturas, escribir el **_if_** de validación con los 4 niveles:
>    ```javascript
>    if (!nombre || (tipo !== 'ingreso' && tipo !== 'gasto') || isNaN(monto) || monto <= 0) {
>      alert('Datos inválidos. Intenta de nuevo.');
>    } else {
>      // calcular el valor con signo según el tipo
>      let valor;
>      if (tipo === 'ingreso') {
>        valor = monto;
>      } else {
>        valor = -monto;
>      }
>      // guardar en AMBOS arrays — SIEMPRE juntos
>      nombres.push(nombre);
>      valores.push(valor);
>      console.log('Movimiento registrado.');
>      console.log('Nombres:', nombres);
>      console.log('Valores:', valores);
>    }
>    ```
> 2. *"Fíjense en el **_else_**: primero calculo el signo —ingreso positivo, gasto negativo— y recién después hago los dos **_push_**. Y subráyense esto:"* (señalar) *"los dos push van JUNTOS. **_nombres_** y **_valores_**, siempre los dos. Esto va a volver al final del día."*

> **Code-along del lab — Parte 1.5 (probar los dos caminos):**
> 3. Recargar y probar el camino VÁLIDO: nombre `Cena`, tipo `gasto`, monto `45.50`. → consola muestra los arrays con 1 elemento cada uno, **_valores_** con **_-45.5_** (negativo, porque es gasto).
> 4. Recargar y probar un camino INVÁLIDO: monto `abc`. → salta el **_alert_** de datos inválidos, los arrays quedan vacíos.
> 5. Probar otro inválido: tipo `gastoo` (con typo). → también rechazado por el Nivel 2.

> **Pregunta de activación:**
> *"Si escribo el monto como **_-50_** y el tipo como **_gasto_**, ¿lo acepta o lo rechaza? ¿Por qué?"*
> *(Respuesta esperada: lo RECHAZA, por el Nivel 4 — **_monto &lt;= 0_**. El usuario nunca escribe el signo; pone el monto en positivo y nosotros lo volvemos negativo si es gasto. Un monto negativo en el prompt es un error de input.)*

> **Cierre del Momento + puente a M3 (ver SKILL §5.2 punto 11):**
> *"Tienen el primer movimiento capturado, validado contra basura, y guardado en los dos arrays paralelos. Funciona. Pero hay un problema obvio: el usuario real va a querer cargar 10 movimientos en una sesión, no recargar la página 10 veces. Y al final va a querer ver su saldo. Eso son dos problemas nuevos: cómo REPETIR la captura sin recargar, y cómo RECORRER el array para sumar todo. Esos son los dos bucles que vemos después del receso. 10 minutos y volvemos."*

---

### RECESO — 10 minutos

---

### MOMENTO 3 — Bucles while + for + cálculo del saldo

**Tiempo:** ~40 min
**Parte del lab:** Parte 2.1 + Parte 2.2 + Parte 2.3
Per
> **OBJETIVO:** El alumno entiende qué es un bucle **_while_** (repetición indefinida controlada por condición) y un bucle **_for_** clásico (recorrido finito controlado por contador), aplica **_while_** para repetir la captura de movimientos hasta que el usuario diga "no", aplica **_for_** para recorrer **_valores_** y calcular el saldo total, formatea el resultado con **_.toFixed(2)_** y verifica con 3 movimientos que el saldo es correcto.

> **Patrón pedagógico de M3:** abrir con el **dolor demostrado en vivo** (sub-punto 3.0) antes de cualquier concepto — el alumno tiene que SENTIR por qué hace falta un bucle antes de aprender la sintaxis. Después, concepto teórico de cada bucle (con Panel Excalidraw de anatomía) → code-along inmediato al lab. No hay archivo de apoyo separado — el lab mismo es el ámbito del code-along. Énfasis en cuándo usar cada uno (regla: **_while_** = no sabés cuántas, **_for_** = sí sabés).

---

#### 3.0 El problema — ¿por qué necesitamos bucles? (hook en vivo)

**EN PANTALLA: NAVEGADOR + VS CODE — el Gestor tal como quedó al cerrar el M2: captura UN movimiento y termina. Eric lo ejecuta en vivo.**

> **Tu apertura — demostrar el dolor #1 (repetir a mano es insoportable):**
> *"Volvimos del receso. Antes de aprender nada nuevo, quiero que VEAN el problema con el código que ya tienen. Miren: recargo la página, cargo un movimiento... y se terminó. El programa registró UNO solo y murió. ¿Y si quiero cargar un segundo? Tengo que recargar la página entera otra vez."*
> *(Eric recarga, carga un movimiento, recarga de nuevo, carga otro — exagerando lo tedioso.)*
> *"¿Se imaginan a alguien cargando sus 30 gastos del mes recargando la página 30 veces? Es insoportable. Necesito que el programa me pregunte '¿otro?' y repita la captura sin recargar nada. Ese es el problema número uno."*

> **Tu apertura — demostrar el dolor #2 (no hay saldo todavía):**
> *"Problema número dos. Aunque cargara varios movimientos, hoy el programa no me dice lo más importante: ¿cuánto tengo? No hay saldo. Los números están guardados en el array **_valores_**, pero nadie los suma. Y sumarlos a mano —**_valores[0]_** más **_valores[1]_** más **_valores[2]_**...— sería ridículo: ¿y si hay 30? No voy a escribir 30 sumas."*

> **Tu explicación — los bucles como solución a los 2 dolores:**
> *"Los dos problemas tienen la misma raíz: necesito REPETIR algo sin escribirlo muchas veces. Para eso existen los **bucles**. Hoy ven dos, y cada uno resuelve uno de los dolores:"*
>
> - *"El **_while_** → resuelve el dolor #1: repetir la captura mientras el usuario quiera seguir cargando."*
> - *"El **_for_** → resuelve el dolor #2: recorrer el array **_valores_** y sumar todo para sacar el saldo, sin importar cuántos haya."*
>
> *"Empecemos por el primero."*

---

#### 3.1 ¿Qué es un bucle `while`? — repetición indefinida

**EN PANTALLA: EXCALIDRAW — Panel 3.1 (anatomía del while + loop visual): bloque **_while (condición) { bloque }_** con una flecha curva grande que sale del final del bloque y VUELVE al chequeo de la condición arriba, etiquetada "mientras la condición sea true, repetir". A un lado, recuadro con la regla de uso: "**_while_** = cuando NO sabés cuántas veces vas a repetir (lo decide algo externo: el usuario, un evento, un dato)". Al pie, el ejemplo del lab: **_let continuar = 'si'; while (continuar === 'si') { ... }_**.**

> **Tu apertura:**
> *"Arrancamos con el bucle que resuelve el dolor #1 — repetir la captura. Se llama **_while_**, que en inglés es 'mientras'. El nombre ya dice qué hace: repite MIENTRAS algo se cumpla."*

> **Tu explicación teórica precisa:**
> **¿Qué es un bucle **_while_**?** Una estructura que repite un bloque de código MIENTRAS una condición sea verdadera. Antes de cada vuelta, evalúa la condición: si es **_true_**, ejecuta el bloque y vuelve a chequear; si es **_false_**, sale del bucle y sigue con el resto del programa.
>
> *"Fíjense que la condición se evalúa ANTES de cada vuelta — igual que un **_if_**, pero el **_if_** decide una sola vez y el **_while_** decide una y otra vez. Por eso lo llaman 'bucle': vuelve sobre sí mismo."*
>
> **Anatomía del **_while_** del lab (3 piezas):**
> - **Variable de control** — **_let continuar = 'si'_**, declarada ANTES del bucle. Es la que la condición va a mirar.
> - **La condición** — **_continuar === 'si'_**. Mientras siga siendo `'si'`, repite.
> - **La actualización** — DENTRO del bloque, en algún momento **_continuar_** tiene que poder cambiar. Si nunca cambia, la condición es eterna y el bucle es infinito.

> **Cuándo usar **_while_** (la regla):**
> *"**_while_** se usa cuando NO sabés cuántas veces vas a repetir. En el lab: ¿cuántos movimientos va a cargar el usuario? Ni idea. Puede ser 1, pueden ser 30. El **_while_** se adapta — repite hasta que el usuario diga 'basta'."*

> **Advertencia técnica (el bucle infinito):**
> *"Cuidado con esto: si la condición NUNCA pasa a **_false_**, el bucle no termina nunca y el navegador se cuelga. En nuestro caso, lo que evita el infinito es que al final de cada vuelta le preguntamos al usuario '¿seguimos?' y guardamos su respuesta en **_continuar_**. El día que diga 'no', la condición se rompe y salimos. El usuario es el que apaga el bucle."*

---

#### 3.2 Code-along del lab — Parte 2.1 (envolver la captura en `while`)

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — **_app.js_** a la izquierda, consola a la derecha.**

> **Tu apertura:**
> *"Vamos al code-along. Lo que ya tenemos —la captura y la validación de un movimiento— lo vamos a envolver dentro de un **_while_** para que se repita. Y al final de cada vuelta, le preguntamos al usuario si quiere seguir."*

> **Code-along del lab — Parte 2.1:**
> 1. ANTES de toda la captura, declarar la variable de control:
>    ```javascript
>    let continuar = 'si';
>    ```
> 2. Envolver TODA la captura + validación de M2.5 (las 3 capturas con prompt + el **_if/else_**) dentro de un **_while_**:
>    ```javascript
>    while (continuar === 'si') {
>      // (acá adentro va toda la captura + validación que ya escribimos)
>
>      continuar = prompt('¿Registrar otro movimiento? (si/no):');
>    }
>    ```
> 3. *"La última línea del bloque es la clave: le pregunta al usuario si sigue, y guarda la respuesta en **_continuar_**. Si responde `'si'`, la condición vuelve a dar true y repite. Cualquier otra cosa, salimos."*
> 4. Después del **_while_**, verificar cuántos cargó:
>    ```javascript
>    console.log('Total movimientos:', nombres.length);
>    ```
> 5. Recargar y probar: cargar 2-3 movimientos seguidos respondiendo `'si'`, y terminar con `'no'`. → la consola muestra el total.

> **Pregunta de activación:**
> *"¿Qué pasa si me olvido de poner la línea **_continuar = prompt(...)_** dentro del bloque? El bucle, ¿termina alguna vez?"*
> *(Respuesta esperada: NO termina — **_continuar_** se queda en `'si'` para siempre, la condición nunca se rompe, bucle infinito, el navegador se cuelga. Esa línea es el "freno" del bucle.)*

---

#### 3.3 ¿Qué es un bucle `for` clásico? — recorrido por contador

**EN PANTALLA: EXCALIDRAW — Panel 3.2 (anatomía del for clásico): bloque **_for (let i = 0; i &lt; arr.length; i++) { bloque }_** con 3 flechas a 3 etiquetas. (1) **_let i = 0_** → "INICIALIZACIÓN — corre UNA vez al arrancar. El contador parte en 0, el índice del primer elemento". (2) **_i &lt; arr.length_** → "CONDICIÓN — se chequea antes de cada vuelta. Mientras sea true, repite". (3) **_i++_** → "AVANCE — corre al final de cada vuelta. Suma 1 al contador". Recuadro lateral comparativo: "**_while_** = no sé cuántas (usuario decide) · **_for_** = sé cuántas (el array tiene N elementos)".**

> **Tu apertura:**
> *"Ya tenemos los movimientos cargados en los arrays. Segundo problema: calcular el saldo. Para eso necesito RECORRER el array **_valores_** y sumar todos sus números. Acá el **_while_** no es la mejor herramienta — uso el otro bucle, el **_for_**."*

> **Tu explicación teórica precisa:**
> **¿Qué es un bucle **_for_** clásico?** Una estructura que repite un bloque una cantidad DEFINIDA de veces, controlada por un contador interno. Es el bucle estándar para recorrer un array de principio a fin.
>
> **Las 3 partes del **_for_** (van entre los paréntesis, separadas por punto y coma):**
> - **Inicialización** — **_let i = 0_**. Crea el contador y lo arranca en 0. *"¿Por qué en 0? Porque es el índice del primer elemento del array. Volvemos a lo del M1: los arrays arrancan en cero."*
> - **Condición** — **_i &lt; valores.length_**. Mientras el contador sea menor que la cantidad de elementos, repite. *"Ojo: es MENOR que length, no menor o igual. Si el array tiene 4 elementos, length es 4, y los índices válidos son 0, 1, 2, 3. Cuando i llega a 4, ya no es menor que 4, y paramos — justo después del último."*
> - **Avance** — **_i++_**. Suma 1 al contador al final de cada vuelta. *"**_i++_** es la forma corta de **_i = i + 1_**."*
>
> *"En cada vuelta, **_i_** vale algo distinto: primero 0, después 1, después 2... y eso me deja acceder a **_valores[i]_** — cada elemento, uno por uno."*

> **Cuándo usar **_for_** en vez de **_while_**:**
> *"La regla: **_for_** cuando SÍ sabés cuántas veces. Y acá lo sé — quiero recorrer **_valores_** entero, son **_valores.length_** vueltas. No le pregunto al usuario nada; el array ya tiene una cantidad fija de elementos. Por eso **_for_**, no **_while_**."*

---

#### 3.4 Code-along del lab — Parte 2.2 (recorrer `valores` y calcular el saldo)

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR.**

> **Tu apertura:**
> *"Vamos a recorrer **_valores_** con un **_for_** y sumar todo en una variable acumuladora. Acá se ve por qué la convención de signos del M1 fue tan inteligente."*

> **Code-along del lab — Parte 2.2:**
> 1. Después del **_while_** (afuera, cuando ya terminó la captura), declarar el acumulador:
>    ```javascript
>    let saldo = 0;
>    ```
> 2. Escribir el **_for_** que recorre **_valores_** y va sumando:
>    ```javascript
>    for (let i = 0; i < valores.length; i++) {
>      saldo = saldo + valores[i];
>    }
>    ```
> 3. *"Sigan la lógica conmigo: **_saldo_** arranca en 0. En la vuelta 0, le sumo **_valores[0]_**. En la vuelta 1, le sumo **_valores[1]_**. Y así hasta el último. Al final, **_saldo_** tiene la suma de todo el array."*

> **Tu explicación — por qué sumar alcanza (el pago de la convención de signos):**
> *"Acá se cobra lo que hicimos en el M1. Los ingresos son positivos, los gastos son negativos. Entonces cuando sumo TODO el array, los ingresos suman hacia arriba y los gastos restan hacia abajo, automáticamente. No tengo que preguntar '¿este es ingreso o gasto?' en ningún lado — el signo de cada número ya hace ese trabajo. Por eso elegimos guardar los gastos en negativo: para que el saldo sea una simple suma."*

---

#### 3.5 `.toFixed(2)` — formatear el saldo a 2 decimales

**EN PANTALLA: PRESENTACIÓN — slide con **_console.log('Saldo total: $' + saldo.toFixed(2))_** + tabla de 3 ejemplos: **_(104.5).toFixed(2)_** → `"104.50"`, **_(3000).toFixed(2)_** → `"3000.00"`, **_(45.789).toFixed(2)_** → `"45.79"` (redondea).**

> **Tu explicación teórica precisa:**
> **¿Qué es **_.toFixed(N)_**?** Un método del tipo **_number_** que devuelve el número formateado con exactamente **_N_** decimales. Si el número tiene más decimales, redondea. Si tiene menos, completa con ceros.
>
> *"Para plata siempre queremos 2 decimales: **_$104.50_**, no **_$104.5_** ni **_$104.4999_**. **_.toFixed(2)_** nos da eso."*
>
> **El detalle técnico importante — devuelve un STRING, no un número:**
> *"Ojo con esto: **_.toFixed(2)_** NO devuelve un número, devuelve un **texto**. **_(104.5).toFixed(2)_** da el string **_'104.50'_**, con comillas. ¿Por qué importa? Porque si después intentan hacer matemática con eso, JavaScript lo trata como texto. Regla práctica: usen **_.toFixed_** solo al FINAL, para MOSTRAR. Si todavía necesitan operar con el valor, usen el número crudo."*

> **Code-along (cerrar el cálculo del saldo):**
> ```javascript
> console.log('Saldo total: $' + saldo.toFixed(2));
> ```
> *"El **_+_** acá no suma — concatena, porque los dos lados son texto. Pega el **_'Saldo total: $'_** con el **_'104.50'_** y queda **_'Saldo total: $104.50'_**."*

---

#### 3.6 Code-along del lab — Parte 2.3 (probar con 3 movimientos)

**EN PANTALLA: NAVEGADOR (consola).**

> **Code-along del lab — Parte 2.3:**
> 1. Recargar la página. Registrar los 3 movimientos del lab respondiendo `'si'` entre cada uno:
>    - `Salario` · `ingreso` · `3000`
>    - `Cena` · `gasto` · `45.50`
>    - `Freelance` · `ingreso` · `500`
> 2. Responder `'no'` para terminar.
> 3. Verificar en consola: **_Total movimientos: 3_** y **_Saldo total: $3454.50_**.
> 4. *"Saquen la cuenta a mano: 3000 más 500 de ingresos, menos 45.50 del gasto. 3500 menos 45.50 es 3454.50. El bucle hizo la suma sola, con el signo trabajando a favor."*

> **Pregunta de activación:**
> *"Si ahora cargo un cuarto movimiento, un gasto de 1000, ¿tengo que tocar el **_for_**? ¿Por qué?"*
> *(Respuesta esperada: NO. El **_for_** usa **_valores.length_** como límite — se adapta solo a cualquier cantidad de elementos. Recorrer 3 o 30 es el mismo código. Esa es la potencia de recorrer con length en vez de un número fijo.)*

> **Cierre del Momento + puente a M4 (ver SKILL §5.2 punto 11):**
> *"Tienen el Gestor funcionando de punta a punta: pide datos, los valida, los repite, calcula el saldo y lo muestra. Como script, ya sirve. Pero mírense el **_app.js_** — está todo suelto y en fila: las variables arriba, un **_while_** gigante en el medio, un **_for_** colgando al final. Funciona, pero ningún equipo profesional entrega código así. ¿Cómo lo organizamos? Lo partimos en funciones, cada una con UNA tarea. Ese es el último bloque antes del cierre. Vamos."*

---

### MOMENTO 4 — Refactor a funciones imperativas
     
**Tiempo:** ~30 min
**Parte del lab:** Parte 3.1 + 3.2 + 3.3 + 3.4 + 3.5

> **OBJETIVO:** El alumno entiende qué es una **función imperativa** (función sin parámetros que modifica/lee estado global) en contraste con la noción de "función pura" que llegará en C06, ejecuta un **refactor de extracción** (distinto del refactor aditivo de C04 — acá se EXTRAE código suelto hacia funciones nuevas), crea las 3 funciones del lab (**_registrarMovimiento_**, **_calcularSaldo_**, **_mostrarResumen_**), conecta el flujo final y entrega el código organizado.

> **Patrón pedagógico de M4:** primero la teoría del refactor + el concepto de función imperativa, después code-along intenso siguiendo el lab paso por paso. Eric debe enfatizar en cada paso del lab: *"lo que tipean ahora va DENTRO de la función — lo que tienen suelto, BÓRRENLO al final"*. El lab tiene una advertencia explícita en P3.5 sobre código duplicado — el Momento debe respetarla.

---

#### 4.1 ¿Qué es una función imperativa? — concepto + contraste con función pura (semilla a C06)

**EN PANTALLA: EXCALIDRAW — Panel 4.1 (función imperativa vs función pura, semilla a C06): dos columnas. Izquierda "FUNCIÓN IMPERATIVA (hoy)" con el mockup **_function registrarMovimiento() { ... nombres.push(...); valores.push(...); }_** + 2 flechas rojas que salen de la función hacia una caja externa "estado global: nombres, valores" — leyenda "no recibe nada por parámetros · modifica variables que viven AFUERA". Derecha "FUNCIÓN PURA (C06)" con el mockup **_function sumar(a, b) { return a + b; }_** + flecha verde hacia "valor de retorno" — leyenda "recibe todo por parámetros · devuelve UN valor · no toca nada afuera". Anotación grande al pie: "EL CÓDIGO DE HOY SE REFACTORIZA EN C06 — el dolor de hoy es la motivación del próximo módulo".**

> **Tu apertura:**
> *"Antes de tocar el código, una idea. En Code 101 ya escribieron funciones — con **_function_**, con parámetros, con **_return_**. Hoy vamos a escribir funciones, pero de un tipo particular: funciones **imperativas**. Quiero que entiendan qué las hace distintas, porque eso va a ser el hilo de las próximas dos clases."*

> **Tu explicación teórica precisa:**
> **¿Qué es una función imperativa?** Una función que **no recibe parámetros** y que trabaja directamente sobre el **estado global** del programa — lee y modifica las variables que viven afuera de ella.
>
> *"Miren las 3 funciones que vamos a escribir: **_registrarMovimiento_**, **_calcularSaldo_**, **_mostrarResumen_**. Ninguna recibe parámetros — los paréntesis van vacíos. ¿De dónde sacan los datos entonces? De los arrays globales **_nombres_** y **_valores_**, que están afuera. **_registrarMovimiento_** les hace **_push_**; **_calcularSaldo_** los lee para sumar. Las tres están 'enchufadas' al estado global."*
>
> **Las 2 marcas de una función imperativa:**
> - **Lee o modifica variables globales** (no recibe lo que necesita por parámetro — lo agarra de afuera).
> - **Produce efectos** — **_push_**, **_console.log_**, **_alert_**. No solo calcula y devuelve; cambia cosas del mundo.

> **Contraste con la función pura (semilla directa a C06):**
> *"En la columna de la derecha está lo contrario: una función **pura**. Recibe TODO lo que necesita por parámetros, devuelve UN valor, y no toca nada de afuera. **_sumar(a, b)_** solo conoce **_a_** y **_b_** — no le importa el resto del programa."*
>
> *"¿Por qué les muestro las dos? Porque la imperativa es más fácil de entender al principio —sigue una secuencia clara, paso a paso— pero a medida que el código crece se vuelve frágil: cualquier función puede tocar cualquier variable global, y rastrear quién rompió qué se complica. La función pura es más robusta y más fácil de testear. En C06 (la próxima clase) van a aprender a escribir así. Hoy hacemos imperativo a propósito, para que SIENTAN sus límites antes de conocer la alternativa."*

---

#### 4.2 Refactor de extracción — distinto del refactor aditivo de C04

**EN PANTALLA: EXCALIDRAW — Panel 4.2 (refactor de extracción, antes/después): izquierda "ANTES — todo suelto" con un bloque alto mostrando globales arriba, un **_while_** con 15 líneas de captura+validación adentro, y un **_for_** + saldo colgando al final. Derecha "DESPUÉS — organizado" con globales arriba, 3 funciones con nombre, y un **_while_** chiquito que adentro solo dice **_registrarMovimiento()_** + **_mostrarResumen()_** al final. Flecha grande entre ambos: "EXTRAEMOS la lógica a funciones — el código viejo DESAPARECE de su lugar". Anotación al pie en rojo: "≠ refactor aditivo de C04: allá NO borrábamos nada (solo agregábamos var()). Acá CORTAMOS de un lado y PEGAMOS en otro — el original se borra."**

> **Tu apertura:**
> *"Lo que vamos a hacer ahora se llama **refactorizar** — reorganizar código que ya funciona sin cambiar lo que hace. Y ojo, porque es un tipo de refactor DISTINTO al que hicieron en C04."*

> **Tu explicación teórica precisa:**
> **¿Qué es un refactor de extracción?** Tomar un bloque de código que está suelto y **moverlo dentro de una función**. El código original deja de existir en su lugar; en su lugar queda **una sola línea**: la llamada a la función.
>
> **El contraste con C04 (que el alumno tiene fresco):**
> *"En C04, cuando refactorizamos el CSS a variables, la regla era sagrada: NO borren nada, solo agreguen líneas con **_var()_**. Refactor ADITIVO. Hoy es lo OPUESTO: vamos a CORTAR código de un lado y PEGARLO en otro. El original se borra. Si lo dejan duplicado en los dos lugares, el programa lo ejecuta dos veces y se rompe."*
>
> *"Dos refactors, dos reglas opuestas. C04: agregar sin borrar. Hoy: mover y borrar el original. No los confundan."*

> **La regla de oro del Momento (del lab P3.5):**
> *"Al final de este bloque, su **_app.js_** tiene que quedar limpio: NADA de captura o validación suelta fuera de las funciones, NINGÚN **_for_** ni **_console.log_** de saldo colgando afuera. Si después de mover el código les queda algo duplicado afuera, BÓRRENLO. Lo voy a repetir 3 veces durante el code-along porque es el error más común de esta parte."*

---

#### 4.3 Code-along del lab — Parte 3.1 + 3.2 (funciones vacías + `registrarMovimiento`)

**EN PANTALLA: VS CODE — **_app.js_** completo a la vista para ver la reorganización.**

> **Tu apertura:**
> *"Arrancamos el refactor. Primero declaramos las 3 funciones vacías, después movemos el código adentro, una por una. Vamos."*

> **Code-along del lab — Parte 3.1 (esqueleto de las 3 funciones):**
> 1. Justo después de los arrays globales **_nombres_** y **_valores_**, declarar las 3 funciones vacías:
>    ```javascript
>    function registrarMovimiento() {
>      // captura + validación (la movemos en 3.2)
>    }
>    function calcularSaldo() {
>      // el for que suma (lo movemos en 3.3)
>    }
>    function mostrarResumen() {
>      // mostrar cantidad + saldo (lo armamos en 3.4)
>    }
>    ```
> 2. *"Son los 3 cajones donde vamos a guardar el código que hoy está tirado por el piso. Cada cajón, una tarea."*

> **Code-along del lab — Parte 3.2 (mover la captura a `registrarMovimiento`):**
> 3. **CORTAR** toda la captura + validación que está DENTRO del **_while_** (las 3 capturas con prompt + el **_if/else_**) y **PEGARLA** dentro de **_registrarMovimiento_**.
> 4. *"Ahora miren el **_while_**: su cuerpo quedó VACÍO (solo la línea de **_continuar = prompt_**). Bien. El código de captura ya no está ahí — está en la función. Esto es la extracción de la que hablábamos: cortamos del while, pegamos en la función."* **(1ª repetición de la regla de oro: el while quedó sin la captura.)**
> 5. Mejorar la validación con **_return_** temprano: en vez del **_if/else_** grande, usar **_return_** en el caso de error:
>    ```javascript
>    function registrarMovimiento() {
>      const nombre = prompt('Nombre del movimiento:');
>      const tipo = prompt('Tipo (ingreso / gasto):');
>      const monto = parseFloat(prompt('Monto:'));
>
>      if (!nombre || (tipo !== 'ingreso' && tipo !== 'gasto') || isNaN(monto) || monto <= 0) {
>        alert('Datos inválidos. Intenta de nuevo.');
>        return;   // sale de la función sin guardar
>      }
>
>      let valor;
>      if (tipo === 'ingreso') { valor = monto; } else { valor = -monto; }
>      nombres.push(nombre);
>      valores.push(valor);
>    }
>    ```

> **Mini-concepto: `return` sin valor (early exit):**
> *"Fíjense en el **_return_** solito, sin nada al lado. ¿Qué hace? Sale de la función inmediatamente. Si los datos son inválidos, mostramos el alert y nos vamos — no seguimos al **_push_**. Esto se llama 'validación temprana' o 'early return': resolvés el caso malo primero y te vas, así el resto de la función asume que los datos son buenos. Más limpio que envolver todo en un **_else_** gigante."*

---

#### 4.4 Code-along del lab — Parte 3.3 + 3.4 (`calcularSaldo` + `mostrarResumen`)

**EN PANTALLA: VS CODE.**

> **Code-along del lab — Parte 3.3 (mover el saldo a `calcularSaldo`):**
> 1. **CORTAR** el **_let saldo = 0_** + el **_for_** que estaban sueltos al final (de M3.4) y **PEGARLOS** dentro de **_calcularSaldo_**.
> 2. Al final de la función, agregar **_return saldo_**:
>    ```javascript
>    function calcularSaldo() {
>      let saldo = 0;
>      for (let i = 0; i < valores.length; i++) {
>        saldo = saldo + valores[i];
>      }
>      return saldo;
>    }
>    ```
> 3. *"El **_for_** ya no está colgando al final del archivo — está en su cajón. **(2ª repetición de la regla de oro: no debe quedar ningún for suelto afuera.)** Y agregamos **_return saldo_**: antes el saldo se calculaba y se imprimía ahí mismo; ahora la función solo lo CALCULA y lo DEVUELVE. Quién lo muestra es otra función — el **_console.log_** del saldo NO va acá."*

> **Code-along del lab — Parte 3.4 (`mostrarResumen`):**
> 4. Implementar **_mostrarResumen_** con el reporte final:
>    ```javascript
>    function mostrarResumen() {
>      console.log('--- Resumen Final ---');
>      console.log('Total de movimientos:', nombres.length);
>      console.log('Saldo total: $' + calcularSaldo().toFixed(2));
>    }
>    ```

> **Mini-concepto: composición de funciones:**
> *"Miren la última línea de **_mostrarResumen_**: llama a **_calcularSaldo()_**. Una función llamando a otra. Esto se llama **componer**: **_mostrarResumen_** no sabe sumar —no tiene ningún **_for_**— le pide el número a **_calcularSaldo_** y solo se encarga de mostrarlo. Cada función hace UNA cosa, y se apoyan entre sí. Esa división de tareas es la mitad del valor de usar funciones."*

---

#### 4.5 Code-along del lab — Parte 3.5 (conectar el flujo final + verificar)

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR.**

> **Tu apertura:**
> *"Último paso: conectar todo. El **_while_** quedó con el cuerpo vacío en 3.2 — ahora le ponemos la llamada a la función, y agregamos el resumen al final."*

> **Code-along del lab — Parte 3.5:**
> 1. En el cuerpo del **_while_** (que quedó vacío), poner UNA sola llamada:
>    ```javascript
>    let continuar = 'si';
>    while (continuar === 'si') {
>      registrarMovimiento();
>      continuar = prompt('¿Registrar otro movimiento? (si/no):');
>    }
>    mostrarResumen();
>    ```
> 2. *"Mírenlo: el **_while_** ahora se lee como una frase — 'mientras el usuario quiera, registrá un movimiento'. Y al salir, mostrá el resumen. No hay lógica de validación ni de suma a la vista: están guardadas en las funciones."* **(3ª repetición de la regla de oro: revisar que no quede nada suelto.)**

> **Verificación de la estructura final (el orden del lab):**
> *"Su **_app.js_** completo tiene que tener exactamente 3 secciones, en este orden:"*
> ```javascript
> // 1) GLOBALES
> let nombres = [];
> let valores = [];
>
> // 2) FUNCIONES
> function registrarMovimiento() { /* ... */ }
> function calcularSaldo() { /* ... */ }
> function mostrarResumen() { /* ... */ }
>
> // 3) FLUJO DE EJECUCIÓN
> let continuar = 'si';
> while (continuar === 'si') {
>   registrarMovimiento();
>   continuar = prompt('¿Registrar otro movimiento? (si/no):');
> }
> mostrarResumen();
> ```
> *"Globales, funciones, flujo. Nada de captura ni for sueltos. Si les quedó algo afuera de las funciones, ese es el bug — bórrenlo."*

> **Code-along — probar (Checkpoint 3 del lab):**
> 3. Recargar. Registrar 2 movimientos: ingreso `150` + gasto `45.50`. Responder `'no'`.
> 4. Verificar en consola:
>    ```
>    --- Resumen Final ---
>    Total de movimientos: 2
>    Saldo total: $104.50
>    ```
> 5. *"150 menos 45.50 es 104.50. Mismo resultado que antes del refactor — porque refactorizar NO cambia lo que el programa hace, solo cómo está organizado por dentro. El usuario no nota nada; el código quedó profesional."*

> **Pregunta de activación:**
> *"Si mañana les pido agregar una función **_borrarUltimoMovimiento_**, ¿dónde la escribirían y a qué arrays tendría que tocar? Pensando en lo que vimos de arrays paralelos..."*
> *(Respuesta esperada: en la sección de funciones; y tendría que hacer algo en **_nombres_** Y en **_valores_** —los dos, para no desincronizarlos—. Esto reactiva la fragilidad de los arrays paralelos justo antes del cierre del M5.)*

> **Cierre del Momento + puente a M5 (ver SKILL §5.2 punto 11):**
> *"Tienen el Gestor terminado: organizado en funciones, cada una con su tarea, listo para crecer. Como proyecto del día, está completo. PERO —y esto se los anuncié al inicio de la clase— hay un problema escondido en el modelo de datos. Un problema que el código NO detecta solo. Se los voy a mostrar en vivo, y ese problema es la puerta de entrada a las próximas dos clases. Último bloque. Vamos."*

---

### MOMENTO 5 — Cierre + gancho ejecutable a C06/C07

**Tiempo:** ~15 min
**Parte del lab:** Cierre + Logros Adicionales

> **OBJETIVO:** El alumno **ejecuta en vivo el dolor de los arrays paralelos** (hacer un **_push_** solo en **_nombres_** y olvidar **_valores_**, ver el saldo desalineado en consola), entiende los trade-offs del paradigma imperativo (estado global compartido, fragilidad, dificultad de testeo), conoce el puente narrativo a C06 (programación funcional) y C07 (objetos), y participa de la discusión final.

> **Patrón pedagógico de M5:** **gancho ejecutable** (SKILL §5.3.1) aplicado a nivel cross-clase. El alumno NO escucha "los arrays paralelos son frágiles" como teoría — ejecuta la fragilidad en consola, ve el saldo equivocado, y eso abre directamente la motivación de C06 (programación funcional para evitar bugs por estado global) y C07 (objetos como solución estructural al problema de sincronización).

---

#### 5.1 Gancho ejecutable — el dolor de los arrays paralelos en vivo

**Visual:** Navegador (consola) — Eric ejecuta.

Demo guiada (NO code-along — el alumno mira):
- En consola del navegador, en el contexto del Gestor que acaban de armar, Eric tipea:
  ```javascript
  nombres.push('Bonus');  // agrego nombre pero olvido el valor
  console.log('Cantidad de nombres:', nombres.length);
  console.log('Cantidad de valores:', valores.length);
  console.log('Saldo:', calcularSaldo());
  ```
- Resultado: **_nombres.length_** dice 3, **_valores.length_** dice 2, el saldo se calcula sobre solo 2 valores. **El sistema está descalibrado y el código no lo detecta.**
- Mensaje pedagógico de Eric: *"Mírense esto. El código no rompió. No tiró un error. Simplemente está MAL. Si esto fuera la app de un banco, el cliente perdería plata. Esto pasa porque los 2 arrays paralelos dependen de que YO, el dev, me acuerde de hacer los 2 push siempre. Un olvido y nada me avisa."*

---

#### 5.2 Trade-offs del paradigma imperativo + puente a C06 y C07

**Visual:** PRESENTACIÓN — slide con la tabla de trade-offs de los slides del lab + dos slides finales con anticipo de C06 y C07.

Bullets a cubrir:
- Recap de los slides finales del lab: ventajas (fácil de entender, ideal para scripts pequeños) vs limitaciones (estado global compartido → bugs, arrays paralelos frágiles, difícil testeo).
- **Puente a C06 — Programación funcional:**
  - *"El **_for_** que escribieron hoy DESAPARECE."* Se reemplaza por **_.map()_**, **_.filter()_**, **_.reduce()_** — una línea por operación.
  - Conocerán **arrow functions** — sintaxis más corta de función.
  - El concepto de **función pura** que sembramos en M4.1 se vuelve central.
- **Puente a C07 — Programación Orientada a Objetos:**
  - Los 2 arrays paralelos → **UN array de objetos**.
  - Cada movimiento será **_{ nombre: 'Salario', tipo: 'ingreso', valor: 3000 }_** — todo junto, imposible olvidar un push.
  - Eric muestra brevemente cómo se vería el array refactorizado a objetos (sin escribir código real, solo mostrar la estructura) — el alumno ve que el dolor de hoy desaparece.

---

#### 5.3 Discusión final + cierre del día

**Visual:** PRESENTACIÓN — 3 preguntas de discusión del lab.

Las 3 preguntas para discutir (del README + slides):
1. *"¿Qué pasa si olvido un push en uno de los arrays paralelos?"* (Ya lo vivimos en 5.1 — fijación).
2. *"¿Es fácil detectar ese error?"* (No — el código no rompe, solo está mal silenciosamente).
3. *"¿Qué te imaginas que haría una 'función pura' en este proyecto?"* (Semilla para C06).

Cierre final del día: *"Cerramos C05. Llegaron sabiendo lo de Code 101 — variables, if, funciones. Hoy aprendieron arrays, bucles, APIs del navegador, validación con truthy/falsy, y a refactorizar código suelto a funciones imperativas. Tienen el primer ladrillo del M2 puesto. El próximo día (C06) atacamos las limitaciones del paradigma imperativo con funcional. Vamos a hacer cosas en 1 línea que hoy nos costaron 10. Bien hecho. Hasta la próxima."*

---

## Mapeo Momentos ↔ Lab ↔ Conceptos nuevos

| Momento | Parte del lab | Conceptos nuevos que cubre |
|---|---|---|
| **M1** | Setup + P1.1 + P1.2 | Array, **_[]_**, **_.push()_**, **_.length_**, indexación con índice base 0, arrays paralelos como modelo de datos, convención de signos |
| **M2** | P1.3 + P1.4 + P1.5 | APIs del navegador (**_prompt_**, **_alert_**, **_parseFloat_**), booleano como tipo, truthy/falsy con los 6 falsy de JS, operador **_||_** (OR), validación combinada con 4 niveles |
| **M3** | P2.1 + P2.2 + P2.3 | Bucle **_while_** (repetición indefinida), bucle **_for_** clásico (recorrido por contador), **_.toFixed(2)_** (string formateado) |
| **M4** | P3.1 → P3.5 | Función imperativa (sin parámetros, modifica estado global), refactor de extracción (distinto del aditivo de C04), **_return_** sin valor (early exit), composición de funciones |
| **M5** | Cierre + Logros | Trade-offs del paradigma imperativo; gancho ejecutable a C06 (funcional) y C07 (objetos) |

**Validación de paridad Momento ↔ Parte del lab:**
- ✅ Cada Momento de code-along (M1, M2, M3, M4) cita una Parte específica del lab cuyos sub-pasos Eric puede leer verbatim.
- ✅ Los conceptos teóricos nuevos están agrupados al inicio de cada Momento; el code-along viene después (orden pedagógico innegociable §5.5).
- ✅ El **patrón "iluminar concepto implícito"** (SKILL §6.4.6) se aplica en M2.2 con la pregunta inicial sobre qué es **_true_** y **_false_** técnicamente.
- ✅ El **gancho ejecutable** (SKILL §5.3.1) se aplica en M5.1 a nivel cross-clase (abre C07).
- ✅ El **cierre de Momento con puente al siguiente** (SKILL §5.2 punto 11) está documentado al final de M1, M2, M3 y M4.
- ✅ El **ejercicio autónomo del cierre de M1** (sub-punto 1.4) usa dominio genérico (componentes de computadora) — NO el dominio del proyecto víctima (presupuesto) — para validar transferencia de criterio, no recall (memoria `[[feedback-situaciones-interactivas-genericas]]`). El alumno lo resuelve en código y entrega captura de consola como evidencia.
- ✅ Distinción explícita entre **refactor de extracción de C05** (M4.2) y **refactor aditivo de C04** (mencionado como contraste) — el alumno no confunde las dos técnicas.

## Decisiones pedagógicas

1. ✅ **Inconsistencia del lab P2.3 vs Ejemplo Final — RESUELTA.** El lab usaba Freelance 50 en P2.3 pero Freelance 500 en el Ejemplo Final / Checkpoint 2. Se adoptó **Freelance 500 → saldo $3454.50** en M3.6 para coincidir con el Ejemplo Final y los Checkpoints del lab. (Sugerir a Eric corregir el "50" de P2.3 del lab para que sea consistente.)

2. **Tiempo del ejercicio autónomo de M1.4:** quedó en 5-7 min. Si Eric quiere más profundo, se extiende a 10 min y M1 sube a 35 min — pero entonces hay que recortar 5 min de otro Momento (probablemente M2).

3. **Demo de objetos en M5.2:** propuse mostrar brevemente cómo se vería el array refactorizado a objetos. Si Eric prefiere dejarlo 100% como teaser narrativo sin código, lo ajustamos.

**Estado de redacción Capa 2+3:** M1 ✅ · M2 ✅ · M3 ✅ · M4 ✅ · M5 pendiente.