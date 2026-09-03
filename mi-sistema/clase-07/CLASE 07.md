# CLASE 07: Objetos + POO con `class`

> **Módulo:** M2 — Clase 3 de 4
> **Curso:** Code 201
> **Proyecto Víctima:** **Gestor de Presupuesto Personal** (continúa de C05/C06). Hoy se **resuelve el dolor de los 2 arrays paralelos** (→ 1 array de objetos) y se **cierra la lógica** del Gestor con POO. Se agrega **_oop-objects.js_** (las clases). Todo en consola — la interfaz visual es C08.
> **Estado:** Capa 1 — estructura de Momentos. Capa 2+3 pendiente.
> **Fecha:** 2026-05-28
> **Base teórica:** **_mi-sistema/clase-07/CAPA 0 - CLASE 07.md_**

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
| Conocimiento previo asumido | **C05/C06 cubiertos:** arrays + métodos funcionales (**_.map_**, **_.filter_**, **_.reduce_**, **_.forEach_**), funciones puras, composición, DRY, validación; modelo de 2 arrays paralelos (**_nombres[]_** + **_valores[]_**) con tipo codificado por signo. El alumno ya vio objetos con datos de forma implícita (el reporte de C06 devolvía datos), y usa **_new Date()_** desde C05 sin saber qué es **_new_**. |
| Conceptos JS nuevos | Objeto literal, propiedad + acceso con punto, leer/modificar/agregar propiedades, array de objetos, array vs objeto, **tipo explícito** vs codificado por signo, **paradigma POO**, **_class_** (molde), **_new_** + instancia, propiedad de instancia, **_constructor_**, **_this_**, método, encapsulación |
| Continuidad con C05/C06 | C07 es el **tercer paradigma del módulo** (imperativo C05 → funcional C06 → POO C07) sobre el MISMO proyecto. El modelo de arrays paralelos viene de C05; su fragilidad **NO se verbalizó antes** (Eric apostó a que el alumno la notara solo) — se **descubre y resuelve hoy**, con el error en vivo en M1.1. |
| Lección pedagógica clave | **Un mejor modelo de datos resuelve el dolor Y elimina código** (los arrays paralelos → array de objetos; `montosAbsolutos` se borra). Y **POO = otra forma de organizar lo mismo**: datos + comportamiento juntos en un objeto, no como reemplazo de los otros paradigmas sino como complemento. |
| Especial: introducción a POO | POO es un **paradigma nuevo**, no solo una sintaxis. M3 abre con una **introducción conceptual al paradigma** + una **dinámica participativa** ("el mundo es objetos") donde el alumno identifica propiedades y métodos en objetos cotidianos ANTES de ver la sintaxis de `class`. |
| Archivo de apoyo | **Ninguno** (decisión de Eric). Las demos de objetos y de `class` por capas se tipean en vivo en la consola del navegador (F12), con el código en el guion. |
| Decisión de alcance | Capa 0 generada primero. Herencia (**_extends_** / **_super_**), polimorfismo y prototipos quedan FUERA — solo mención en el cierre como "lo que viene en una unidad posterior de POO". |

---

## Tabla de tiempos

| # | Momento | Foco principal | Tiempo | Parte del lab |
|---|---|---|---|---|
| **M1** | Apertura + objetos básicos | Cobrar el dolor de arrays paralelos + objeto literal + acceso con punto + modificar/agregar + array de objetos + array vs objeto | **30 min** | Setup + P0 |
| **M2** | Refactor del modelo: arrays paralelos → array de objetos | **_{nombre,tipo,valor}_** con tipo explícito + las 3 correcciones de lógica (saldo, buscarPrimerGastoMayor, borrar montosAbsolutos) + imprimirReporte de 2 args a 1 | **30 min** | P1.1 → P1.5 |
| | **RECESO** | | **10 min** | — |
| **M3** | Introducción a POO + `class` por capas (`Movimiento`) | **¿Qué es POO? (paradigma) + dinámica "el mundo es objetos"** → ¿Qué es una clase? → las 3 capas (propiedades+new → constructor+this → métodos) → usar la clase en el proyecto | **50 min** | P2.1 → P2.5 |
| **M4** | `class Presupuesto` + encapsulación | Aplicar el patrón de capas a una 2ª clase que CONTIENE los movimientos + encapsulación + el salto del reporte posicional a **_resumen()_** nombrado | **20 min** | P3.1 → P3.2 |
| **M5** | Cierre + qué ganamos + puente a C08 | Tabla antes/después + los 3 paradigmas coexisten + puente a C08 (Tailwind) y M3 (DOM) | **10 min** | Cierre |
| | **Colchón** | Preguntas, retrasos, **_this_**/`class` suelen costar | **30 min** | — |
| | **Total preparado** | | **150 min** | |

> **Nota de tiempo:** C07 es densa (lab 120 min). M3 es el momento más largo (50 min) porque concentra la introducción al paradigma POO + la dinámica + la `class` por capas. M4 es corto (20 min) porque `Presupuesto` REUSA el patrón de capas ya aprendido en M3 — va rápido. Si el grupo se traba con `this`/`class`, el colchón de 30 min absorbe.

---

## Cadena problema → solución

```
M1: "En C05/C06 su modelo eran 2 arrays paralelos: nombres[] y valores[]. Funcionó, pero
     es frágil — borrás de uno y olvidás el otro, y todo se descalibra en silencio. Hoy
     lo arreglamos. Pero antes, la herramienta: los objetos, que guardan datos con NOMBRE."
          ↓ (objeto literal + acceso con punto + array de objetos + array vs objeto)
M2: "Ya saben objetos. Ahora migramos el proyecto: cada movimiento pasa de dos entradas
     sueltas a UN objeto { nombre, tipo, valor }. El tipo deja de ser un truco de signo y
     se vuelve explícito. Eso obliga a corregir lógica — y hasta a borrar una función."
          ↓ (refactor del modelo + 3 correcciones: saldo, buscar, borrar montosAbsolutos)
RECESO
M3: "Tienen el modelo con objetos literales escritos a mano. Pero escribir { nombre, tipo,
     valor } por cada movimiento es repetitivo, y los datos no SABEN hacer nada solos.
     ¿Y si tuviéramos un molde que fabrique movimientos Y les dé comportamiento? Eso es POO."
          ↓ (¿qué es POO? + dinámica "el mundo es objetos" → class Movimiento por capas)
M4: "Movimiento modela UN movimiento. Pero ¿quién gestiona TODOS — el array, el saldo, el
     agregar/eliminar? Hoy eso está suelto entre globales y functional-utils. Lo metemos
     todo en una cápsula: class Presupuesto."
          ↓ (class Presupuesto: array + métodos juntos = encapsulación + resumen() nombrado)
M5: "El Gestor está completo en lógica. Tres clases de código sobre el mismo proyecto:
     imperativo, funcional, POO. Falta darle cara — eso es C08 con Tailwind."
          ↓ (qué ganamos + los 3 paradigmas coexisten + puente a C08/M3)
```

**Notas sobre la cadena:**
- **M1 hace DESCUBRIR el problema de los arrays paralelos** (latente desde C05, nunca verbalizado): Eric muestra el error en vivo (borrar de un array y olvidar el otro → desalineamiento silencioso) y recién ahí lo nombra. No se le recuerda al alumno algo que nunca se le dijo — se le hace ver el problema ahora.
- **M2 aplica el patrón "refactor de modelo de datos"**: cambiar la estructura obliga a corregir lógica (3 trampas con ⚠️ en el lab) y hasta a BORRAR código (`montosAbsolutos`). Mensaje: un mejor modelo no solo agrega.
- **M3 introduce POO como paradigma, no como sintaxis** (pedido de Eric): abre con la pregunta "¿qué es POO?" + una dinámica participativa donde el alumno descubre propiedades/métodos en objetos cotidianos, ANTES de la sintaxis de `class`. Después, `class` por capas (el patrón del lab).
- **La `class` se construye POR CAPAS** (propiedades → constructor → métodos), cada capa nace del dolor de la anterior — cadena Problema→Solución dentro de un mismo concepto. Es el patrón estrella del día.
- **M4 reusa el patrón de M3** sobre una 2ª clase (Presupuesto) → momento corto. El `resumen()` nombrado cierra también el dolor del reporte posicional de C06.

---

## Estructura de Momentos

---

### MOMENTO 1 — Apertura + objetos básicos

**Tiempo:** ~30 min
**Parte del lab:** Setup Inicial + Parte 0

> **OBJETIVO:** El alumno **descubre el problema de los 2 arrays paralelos** (latente desde C05, nunca verbalizado — se ve hoy con el error en vivo), arma el setup (**_oop-objects.js_** + orden de scripts), y domina los objetos literales: declarar con **_{}_**, acceder con punto, modificar/agregar propiedades, leer un array de objetos, y distinguir cuándo conviene array vs objeto. Al cerrar M1, el alumno maneja objetos como estructura — la base para el refactor de M2.

> **Patrón pedagógico de M1:** apertura que hace DESCUBRIR el dolor (el error de los arrays paralelos ejecutado en vivo — gancho ejecutable + predecir antes de ejecutar) → concepto de objeto literal con demos en consola → array de objetos como la estructura que reemplaza los arrays paralelos. Todo en consola, sin tocar el proyecto todavía (eso es M2).

#### 1.1 Apertura — descubrir el problema de los arrays paralelos + agenda del día

**EN PANTALLA: VS CODE / CONSOLA — el modelo de C05/C06 a la vista: **_let nombres = [...]_** y **_let valores = [...]_** (los 2 arrays paralelos), con un par de movimientos cargados.**

> **Tu apertura:**
> *"Buenos días. Antes de aprender nada nuevo, quiero que MIREMOS el modelo de datos que venimos arrastrando desde C05 — y que descubran algo que tiene escondido. No se los conté antes a propósito: quería que lo vieran funcionar primero. Hoy le buscamos las costuras."*

> **Plantear el escenario (que el alumno piense, no que Eric lo diga):**
> *"Este es nuestro modelo. Dos arrays separados:"*
> ```javascript
> let nombres = ['Salario', 'Cena', 'Freelance'];
> let valores = [3000, -45.50, 500];
> ```
> *"El movimiento 'Cena' vive partido: su nombre en **_nombres[1]_**, su monto en **_valores[1]_**. Ahora les hago una pregunta y quiero que la piensen antes de que yo toque nada: si el usuario quiere BORRAR el movimiento 'Cena', ¿qué tengo que hacer?"*
> *(Esperar respuestas. Guiar hasta: "hay que borrarlo de los DOS arrays". Esa es la semilla del problema.)*

> **Predecir antes de ejecutar — el error en vivo (gancho ejecutable):**
> *"Exacto, hay que tocar dos arrays. ¿Y qué pasa si me olvido de uno? Predigan antes de que ejecute:"*
> ```javascript
> nombres.splice(1, 1);   // borro 'Cena' de nombres... pero ME OLVIDO de valores
>
> console.log(nombres);   // ['Salario', 'Freelance']
> console.log(valores);   // [3000, -45.50, 500]  ← ¡quedó el -45.50!
> ```
> *(Esperar predicciones. Después ejecutar y mostrar el desastre.)*
> *"Mírenlo. Borré 'Cena' de **_nombres_** pero su monto **_-45.50_** sigue en **_valores_**. Ahora los arrays están DESALINEADOS: **_nombres[1]_** es 'Freelance' pero **_valores[1]_** es **_-45.50_** (el monto de Cena). El Freelance perdió su monto, el saldo da cualquier cosa — y el código NO tiró ningún error. Está roto en silencio."*

> **Nombrar el problema:**
> *"Esto tiene nombre: el problema de los **arrays paralelos**. Dos (o más) arrays que tengo que mantener sincronizados a mano. Un olvido y todo se descalibra sin avisar. Y hay un segundo problema más chico: el tipo del movimiento —ingreso o gasto— está escondido en el SIGNO del número. Negativo = gasto. Un truco que hay que recordar siempre."*

> **Anuncio de la agenda:**
> *"Hoy resolvemos los dos problemas de raíz. Primero, los **objetos**: una estructura que guarda los datos de cada movimiento JUNTOS y con nombre — imposible de desincronizar. Después, **POO con clases**: moldes que fabrican esos objetos y les dan comportamiento propio. Al terminar, la lógica del Gestor queda COMPLETA, probada en consola. La cara visual llega en C08."*

---

#### 1.2 Setup del proyecto

**EN PANTALLA: VS CODE — explorador del repo **_personal-budget_** + **_index.html_**.**

> **Code-along del lab — Setup Inicial:**
> 1. En el repo **_personal-budget_** de C06, crear el archivo **_oop-objects.js_** (acá van a vivir las clases de hoy).
> 2. En **_index.html_**, dejar el orden de scripts así:
>    ```html
>    <script src="oop-objects.js"></script>
>    <script src="functional-utils.js"></script>
>    <script src="app.js"></script>
>    ```
> 3. *"Mismo criterio de orden que en C06: lo que se USA va primero. **_oop-objects.js_** define las clases, así que carga antes de **_functional-utils.js_** y **_app.js_**, que las van a usar."*

---

#### 1.3 ¿Qué es un objeto literal? (P0.1)

**EN PANTALLA: EXCALIDRAW — Panel 1.1 (el objeto como ficha): a la izquierda, el código **_const persona = { nombre: 'Ana', edad: 30, pais: 'Perú' }_**; a la derecha, una "ficha" con 3 campos etiquetados (Nombre: Ana · Edad: 30 · País: Perú). Flechas conectando cada **_key: value_** con su campo. Abajo, contraste con un array `['Ana', 30, 'Perú']` con la nota "mismos datos, SIN etiqueta — solo posición".**

> **Tu apertura:**
> *"La herramienta para resolver el dolor se llama **objeto**. Ya usaron objetos sin saberlo —un array es un objeto por debajo— pero hoy los usamos a propósito. Un objeto agrupa datos relacionados con NOMBRE."*

> **Tu explicación teórica precisa:**
> **¿Qué es un objeto literal?** Una estructura que agrupa valores relacionados como pares **_key: value_** (clave-valor), declarada con llaves **_{}_**. Cada par describe una característica del "algo" que el objeto representa.
>
> **Sintaxis general:**
> ```javascript
> const objeto = {
>   clave1: valor1,
>   clave2: valor2
> };
> ```
> - *"Cada par **_clave: valor_** se separa del siguiente con coma."*
> - *"La clave es el nombre de la propiedad; el valor puede ser cualquier cosa — texto, número, booleano, hasta otro objeto."*

> **Tu analogía (después de la definición):**
> *"Un objeto es como una ficha de contacto en la agenda: campos etiquetados — 'Nombre: Ana', 'Edad: 30'. No buscás el nombre diciendo 'el primer dato' — lo buscás por su etiqueta, 'el campo Nombre'. Eso es lo nuevo respecto a un array: los datos tienen NOMBRE, no posición."*

> **Demo en vivo (consola):**
> ```javascript
> const persona = {
>   nombre: 'Ana',
>   edad: 30,
>   pais: 'Perú'
> };
>
> console.log(persona.nombre);   // 'Ana'  → acceso con punto
> console.log(persona.edad);     // 30
> ```
> *"Para leer una propiedad: el objeto, un punto, y el nombre de la propiedad. **_persona.nombre_** = 'de la ficha persona, dame el campo nombre'. Es el mismo punto que ya usan en **_.push()_** o **_.length_** — esos también son propiedades del array."*

---

#### 1.4 Leer, modificar y agregar propiedades (P0.2)

**EN PANTALLA: CONSOLA DEL NAVEGADOR (F12) — Eric tipea sobre el mismo objeto `persona`.**

> **Tu explicación teórica precisa:**
> *"Con el punto hago tres cosas: leer (que ya vimos), modificar un valor existente, y agregar una propiedad nueva. Y lo loco: modificar y agregar usan la MISMA sintaxis."*

> **Demo en vivo (consola):**
> ```javascript
> persona.edad = 31;              // MODIFICAR una propiedad que ya existe
> persona.email = 'a@mail.com';   // AGREGAR una propiedad nueva
>
> console.log(persona.edad);      // 31
> console.log(persona.email);     // 'a@mail.com'
> ```
> *"**_persona.edad = 31_** pisa el valor viejo. **_persona.email = ..._** crea un campo que la ficha no tenía. JavaScript decide solo: si la propiedad existe la modifica, si no, la crea."*

> **Nota técnica (que sorprende):**
> *"Ojo con algo: **_persona_** está declarada con **_const_**, y ASÍ Y TODO le pude cambiar la edad y agregar el email. ¿Por qué? Porque **_const_** congela la VARIABLE —no podés hacer **_persona = otroObjeto_**— pero NO congela el contenido del objeto. Las propiedades se pueden tocar. Es una distinción que confunde al principio."*

---

#### 1.5 Array de objetos + array vs objeto (P0.3)

**EN PANTALLA: EXCALIDRAW — Panel 1.2 (mazo de fichas vs dos pilas): a la izquierda, los 2 arrays paralelos de C05 como DOS pilas separadas (una de nombres, otra de valores) unidas con flechas frágiles por posición; a la derecha, un array de objetos como UNA pila de fichas completas. Abajo, tabla array vs objeto (índice vs nombre).**

> **Tu explicación teórica precisa:**
> **¿Qué es un array de objetos?** Un array cuyos elementos son objetos: **_[{...}, {...}]_**. Combina lo mejor de las dos estructuras — el ORDEN del array + los NOMBRES descriptivos de los objetos.
>
> ```javascript
> const personas = [
>   { nombre: 'Ana', edad: 30 },
>   { nombre: 'Carlos', edad: 25 }
> ];
>
> console.log(personas[0].nombre);   // 'Ana'
> ```
> *"Fíjense en el acceso: **_personas[0]_** trae el primer objeto (por índice, como cualquier array), y **_.nombre_** trae su propiedad (por nombre). Encadenás las dos cosas."*

> **La conexión clave con el proyecto:**
> *"Esto es EXACTAMENTE lo que reemplaza a los arrays paralelos. En vez de **_nombres[i]_** + **_valores[i]_** —dos pilas que tengo que mantener alineadas— una sola pila de fichas, donde cada ficha trae todos sus datos juntos. Imposible desincronizar: no hay dos pilas que se puedan desfasar, hay una sola."*

> **Tu analogía:**
> *"Los arrays paralelos eran como tener los nombres en una pila de papeles y los montos en OTRA pila aparte, y rezar para que el papel número 3 de cada pila se corresponda. El array de objetos es UN mazo de fichas completas: la ficha 3 tiene su nombre Y su monto juntos. Una sola pila ordenada."*

> **Tabla array vs objeto (proyectar — Panel 1.2):**
>
> | Estructura | Se accede por | Ideal para |
> |---|---|---|
> | **Array** **_[a, b, c]_** | índice (posición): **_arr[0]_** | colección ordenada del mismo tipo |
> | **Objeto** **_{ k: v }_** | nombre: **_obj.k_** | un "algo" con características nombradas |
>
> *"Array para listas ordenadas; objeto para un registro con campos nombrados. Y se combinan: array de objetos."*

> **Pregunta de activación:**
> *"En el Gestor, ¿qué debería ser un array y qué un objeto: la lista completa de movimientos, y un movimiento individual?"*
> *(Respuesta esperada: la lista de movimientos = array (es una colección ordenada); cada movimiento = objeto (un registro con campos nombre/tipo/valor). Juntos: array de objetos. Es justo el modelo nuevo que armamos en M2.)*

> **Cierre del Momento + puente a M2 (SKILL §5.2 punto 11):**
> *"Ya tienen la herramienta: objetos con nombre, y arrays de objetos que reemplazan los arrays paralelos. Pero hasta ahora jugamos con personas de ejemplo en la consola. Después del próximo paso, vamos a meter esto al proyecto de verdad: migrar TODO el Gestor del modelo viejo de 2 arrays al modelo nuevo de objetos. Y van a ver que un modelo mejor no solo agrega — también obliga a corregir lógica y hasta a borrar código. Vamos."*

---

### MOMENTO 2 — Refactor del modelo: arrays paralelos → array de objetos

**Tiempo:** ~30 min
**Parte del lab:** Parte 1.1 → 1.5

> **OBJETIVO:** El alumno migra TODO el código de C06 al nuevo modelo: cada movimiento pasa de dos entradas en **_nombres[]_**/**_valores[]_** a UN objeto **_{ nombre, tipo, valor }_** con tipo explícito y valor positivo. Corrige **_registrarMovimiento_** (1 push de objeto), las funciones de **_functional-utils.js_** (filtran por propiedad), aplica las 3 correcciones de lógica que el cambio obliga, y simplifica **_imprimirReporte_** de 2 argumentos a 1. Al cerrar M2, el proyecto funciona con el modelo nuevo y es imposible desincronizar.

> **Patrón pedagógico de M2:** refactor de modelo de datos. El cambio de estructura (arrays paralelos → array de objetos) ROMPE lógica que dependía del signo — las 3 correcciones (⚠️ del lab) son momentos de oro: *"un mejor modelo obliga a corregir y hasta a borrar."* Code-along guiado parte por parte del lab.

#### 2.1 El antes y el después del modelo (P1.1)

**EN PANTALLA: EXCALIDRAW — Panel 2.1 (el refactor del modelo, antes/después): ARRIBA "ANTES (C05/C06)" con los 2 arrays paralelos **_nombres_** + **_valores_** y la nota "tipo escondido en el signo · 2 pilas a sincronizar". ABAJO "AHORA (C07)" con el array de objetos **_movimientos_** y la nota "tipo explícito · valor positivo · 1 sola pila". Flecha grande "refactor del modelo" entre los dos.**

> **Tu apertura:**
> *"Acabamos de ver el dolor en vivo y la herramienta para resolverlo. Ahora la aplicamos al proyecto de verdad. Este es el cambio central del día — miren los dos modelos lado a lado."*

> **Tu explicación teórica precisa:**
> ```javascript
> // ANTES (C05/C06) — 2 arrays paralelos; el TIPO se codifica con el SIGNO
> let nombres = ['Salario', 'Cena'];
> let valores = [3000, -45.50];          // +ingreso / -gasto
>
> // AHORA (C07) — 1 array de objetos; tipo EXPLÍCITO, valor SIEMPRE positivo
> let movimientos = [
>   { nombre: 'Salario', tipo: 'ingreso', valor: 3000 },
>   { nombre: 'Cena',    tipo: 'gasto',   valor: 45.50 }
> ];
> ```
> *"Dos cambios clave. Uno: cada movimiento es UN objeto con sus tres datos juntos — adiós a las dos pilas. Dos: el **_tipo_** ahora es una propiedad explícita (**_'ingreso'_** / **_'gasto'_**), y el **_valor_** es SIEMPRE positivo. Se acabó el truco del signo."*

> **Advertencia (sembrar las 3 trampas):**
> *"Ojo con esto, porque es la parte que más confunde: cambiar el modelo NO es solo cambiar cómo se guardan los datos. Varias funciones dependían del signo para funcionar. Al sacar el signo, esas funciones se ROMPEN si no las corregimos. Vamos a encontrar tres. Atentos."*

---

#### 2.2 Adaptar `registrarMovimiento` (P1.2)

**EN PANTALLA: VS CODE — **_app.js_**, la función **_registrarMovimiento_** de C06.**

> **Tu apertura:**
> *"Primera función a migrar: la captura. En C06 hacía DOS push —uno a nombres, otro a valores— y convertía el signo. Ahora: UN solo push de un objeto, sin tocar el signo."*

> **Code-along del lab — Parte 1.2:**
> ```javascript
> let movimientos = [];
>
> function registrarMovimiento() {
>   const nombre = prompt('Nombre del movimiento:');
>   const tipo = prompt('Tipo (ingreso / gasto):');
>   const valor = parseFloat(prompt('Monto:'));
>
>   if (!nombre || (tipo !== 'ingreso' && tipo !== 'gasto') || isNaN(valor) || valor <= 0) {
>     alert('Datos inválidos. Intenta de nuevo.');
>     return;
>   }
>
>   // 1 solo push de un objeto. valor SIEMPRE positivo.
>   movimientos.push({ nombre: nombre, tipo: tipo, valor: valor });
> }
> ```
> *"Comparen con C06: antes había **_let valor; if (tipo === 'ingreso') valor = monto; else valor = -monto;_** y después dos push. Todo eso DESAPARECE. Un push de un objeto, y el tipo se guarda tal cual lo dijo el usuario. La validación es la misma de C06 — eso no cambia."*

> **Nota — primera ganancia del modelo:**
> *"Fíjense que ya borramos código: la conversión de signo (**_valor = -monto_**) se fue. El tipo explícito la hizo innecesaria. Guarden esa idea — va a volver a pasar."*

---

#### 2.3 Corregir las funciones de `functional-utils.js` — las 3 trampas (P1.3)

**EN PANTALLA: EXCALIDRAW — Panel 2.2 (las 3 trampas del refactor): tres tarjetas, cada una con "antes (con signo)" vs "ahora (con tipo explícito)". (1) **_calcularSaldo_**: "sumar todo" → "ingresos − gastos". (2) **_buscarPrimerGastoMayor_**: **_valor < -monto_** → **_valor > monto_**. (3) **_montosAbsolutos_**: tachada — "se BORRA". Etiqueta: "un mejor modelo obliga a corregir lógica… y a borrar".**

> **Tu apertura:**
> *"Acá están las trampas que les anuncié. Las funciones de **_functional-utils.js_** ahora filtran y operan por PROPIEDAD —**_movimiento.tipo_**, **_movimiento.valor_**— en vez de por signo. La mayoría es un cambio mecánico, pero TRES esconden una corrección de lógica. Vamos una por una."*

> **Code-along del lab — Parte 1.3 (filtros y totales, cambio mecánico):**
> ```javascript
> const obtenerIngresos = movimientos =>
>   movimientos.filter(movimiento => movimiento.tipo === 'ingreso');
>
> const obtenerGastos = movimientos =>
>   movimientos.filter(movimiento => movimiento.tipo === 'gasto');
>
> const totalIngresos = movimientos =>
>   obtenerIngresos(movimientos).reduce((acumulador, movimiento) => acumulador + movimiento.valor, 0);
>
> const totalGastos = movimientos =>
>   obtenerGastos(movimientos).reduce((acumulador, movimiento) => acumulador + movimiento.valor, 0);
> ```
> *"Hasta acá, cambio mecánico: antes el callback recibía un número suelto, ahora recibe un objeto y leemos **_.tipo_** o **_.valor_**. La estructura (filter, reduce) es idéntica a C06. Ahora las trampas."*

> **Trampa 1 — `calcularSaldo` (cambia la lógica, no solo la sintaxis):**
> ```javascript
> // ⚠️ ANTES: los valores tenían signo → bastaba SUMAR todo.
> // AHORA: valor es positivo y el tipo es explícito → saldo = ingresos - gastos.
> const calcularSaldo = movimientos =>
>   totalIngresos(movimientos) - totalGastos(movimientos);
> ```
> *"Esta es la trampa más peligrosa. En C06, **_calcularSaldo_** sumaba TODO el array y el signo hacía la resta solo (los gastos eran negativos). Ahora los gastos son positivos — si sumáramos todo, ¡el gasto se SUMARÍA al saldo en vez de restarse! El saldo daría de más. La corrección: restar explícitamente, **_ingresos − gastos_**."*

> **Trampa 2 — `buscarPrimerGastoMayor` (el signo se invierte):**
> ```javascript
> // ⚠️ ANTES buscaba valor < -monto (gastos eran negativos). AHORA: valor > monto.
> const buscarPrimerGastoMayor = (movimientos, monto) =>
>   obtenerGastos(movimientos).find(movimiento => movimiento.valor > monto);
> ```
> *"En C06, un gasto de 50 se guardaba como **_-50_**, así que 'mayor a 40' se escribía **_valor < -40_** (más negativo). Ahora el gasto es **_50_** positivo, y filtramos primero los gastos con **_obtenerGastos_**; la comparación se vuelve natural: **_valor > monto_**. El signo se dio vuelta."*

> **Trampa 3 — `montosAbsolutos` SE BORRA:**
> *"Y la tercera trampa es la más linda: **_montosAbsolutos_** —la función que usaba **_Math.abs_** para quitar el signo— ya no sirve para nada. ¿Por qué? Porque el valor YA es positivo. La función existía solo para limpiar un problema que el modelo viejo creaba. Modelo mejor → la función sobra → la BORRAMOS."*
>
> ```javascript
> const generarValoresReporte = movimientos => [
>   movimientos.length,
>   totalIngresos(movimientos),
>   totalGastos(movimientos),
>   calcularSaldo(movimientos)
> ];
> ```

> **El mensaje del momento:**
> *"Quédense con esto: un mejor modelo de datos no solo AGREGA cosas. Corrige lógica que estaba forzada (el saldo, el signo invertido) y BORRA código que solo existía para tapar las fallas del modelo viejo (montosAbsolutos). Cuando el modelo es bueno, el código se vuelve más simple, no más complicado."*

---

#### 2.4 Corregir `imprimirReporte` — de 2 arrays a 1 (P1.4)

**EN PANTALLA: VS CODE — **_functional-utils.js_**, la función **_imprimirReporte_** de C06.**

> **Tu explicación teórica precisa:**
> *"En C06, **_imprimirReporte_** recibía DOS arrays (**_nombres, valores_**) y los cruzaba por índice — **_nombres[indice]_** con **_valores[indice]_**. Justo la fragilidad que vimos al inicio. Ahora recibe UN solo array de objetos, y cada movimiento trae su propio nombre y tipo."*

> **Code-along del lab — Parte 1.4:**
> ```javascript
> // ANTES: imprimirReporte(nombres, valores)  → cruzaba 2 arrays por índice (frágil)
> // AHORA: imprimirReporte(movimientos)        → 1 array; cada objeto trae todo
> const imprimirReporte = movimientos => {
>   console.log('--- Resumen Final ---');
>
>   movimientos.forEach((movimiento, indice) => {
>     console.log(`  ${indice + 1}. ${movimiento.nombre} (${movimiento.tipo}): $${movimiento.valor.toFixed(2)}`);
>   });
>
>   const reporte = generarValoresReporte(movimientos);
>   console.log('Total movimientos:', reporte[0]);
>   console.log('Total ingresos: $' + reporte[1].toFixed(2));
>   console.log('Total gastos: $' + reporte[2].toFixed(2));   // ya es positivo: sin Math.abs
>   console.log('Saldo: $' + reporte[3].toFixed(2));
> };
> ```
> *"Antes cruzábamos **_nombres[indice]_** con **_valores[indice]_** —y ahí estaba el riesgo de desalineamiento—. Ahora cada **_movimiento_** del forEach trae **_.nombre_**, **_.tipo_** y **_.valor_** juntos. Imposible desincronizar: el nombre y el monto del mismo movimiento viajan en la misma ficha. Y noten el **_total gastos_**: ya no necesita **_Math.abs_**, porque el valor es positivo."*

> **Nota sobre el reporte posicional (siembra M4):**
> *"El reporte todavía usa **_generarValoresReporte_** que devuelve un array posicional —**_reporte[0]_**, **_reporte[1]_**— como en C06. Funciona, pero hay que acordarse de qué hay en cada posición. En M4, cuando armemos la clase **_Presupuesto_**, eso se va a volver un objeto con nombres: **_resumen().saldo_**. Por ahora lo dejamos posicional."*

---

#### 2.5 Flujo final + probar (P1.5)

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — **_app.js_** + consola.**

> **Code-along del lab — Parte 1.5:**
> ```javascript
> let continuar = 'si';
> while (continuar === 'si') {
>   registrarMovimiento();
>   continuar = prompt('¿Registrar otro movimiento? (si/no):');
> }
>
> imprimirReporte(movimientos);   // un solo argumento
> ```
> *"El flujo es casi igual a C06 — el **_while_** que repite la captura. Lo único que cambió: **_imprimirReporte_** ahora recibe UN argumento (**_movimientos_**) en vez de dos."*

> **Verificar (Checkpoint 1 del lab):**
> Registrar 3 movimientos (2 ingresos, 1 gasto) → el reporte muestra el desglose con nombre/tipo/monto + el saldo correcto. Confirmar que **_calcularSaldo_** resta gastos (no suma signos) y que **_buscarPrimerGastoMayor_** usa **_valor > monto_**.

> **Reto autónomo:**
> *"**_agruparPorTipo(movimientos)_** que devuelva **_{ ingresos: [...], gastos: [...] }_** usando **_.reduce_**. Pista: el acumulador es un objeto con dos arrays, y según **_movimiento.tipo_** lo pusheás a uno u otro."*

> **Cierre del Momento + puente a M3 (SKILL §5.2 punto 11):**
> *"Listo: el Gestor ya corre con el modelo nuevo. Arrays paralelos, eliminados. Tipo por signo, eliminado. Y de paso borramos una función entera. Pero miren algo: cada movimiento lo seguimos escribiendo a mano —**_{ nombre: ..., tipo: ..., valor: ... }_**— y esos datos no SABEN hacer nada solos; toda la lógica (saldo, filtrar) vive afuera, en funciones sueltas. ¿Y si tuviéramos un molde que fabrique movimientos Y les dé comportamiento propio? Eso es Programación Orientada a Objetos. Después del receso. Vamos 10 minutos."*

---

### RECESO — 10 minutos

---

### MOMENTO 3 — Introducción a POO + `class` por capas (`Movimiento`)

**Tiempo:** ~50 min
**Parte del lab:** Parte 2.1 → 2.5

> **OBJETIVO:** El alumno entiende **POO como paradigma** (el tercero del módulo) mediante una introducción conceptual + una dinámica participativa donde descubre propiedades y métodos en objetos cotidianos. Después construye la clase **_Movimiento_** **por capas** — primero las propiedades (con **_new_**/instancia), luego el **_constructor_** (con **_this_**), luego los métodos — y la usa en el proyecto. Al cerrar M3, el alumno entiende qué es una clase, crea instancias con **_new_**, y cada movimiento es un **_Movimiento_** con comportamiento (**_formatear_**, **_esIngreso_**).

> **Patrón pedagógico de M3 (el más importante del día):**
> 1. **Introducción conceptual a POO + dinámica** ANTES de la sintaxis (pedido de Eric) — POO es un paradigma, no solo `class`. La dinámica "el mundo es objetos" hace que el alumno descubra propiedades/métodos en objetos cotidianos antes de verlos en código.
> 2. **¿Qué es una clase?** — sub-punto de modelo (§6.4.5): clase/instancia/`new` antes de las propiedades.
> 3. **`class` por capas** (§6.4.4 adaptado): propiedades → constructor → métodos, **cada capa nace del dolor de la anterior**. Es la cadena Problema→Solución DENTRO de un concepto, y el lab ya viene estructurado así (P2.2 → P2.3 → P2.4).
> 4. **`new` se ilumina como concepto implícito** (§6.4.6): vienen usando **_new Date()_** desde C05.

#### 3.1 ¿Qué es POO? + dinámica "el mundo es objetos"

**EN PANTALLA: EXCALIDRAW — Panel 3.1 (un objeto = características + acciones): un objeto cotidiano (ej. un celular) dibujado como una ficha con DOS zonas — arriba "PROPIEDADES (cómo es): marca, modelo, batería, color"; abajo "MÉTODOS (qué hace): llamar(), sacarFoto(), vibrar()". Etiqueta central: "un objeto tiene características Y sabe hacer cosas con ellas".**

> **Tu apertura — POO como el tercer paradigma:**
> *"Volvimos del receso para el tema grande del día: Programación Orientada a Objetos, POO. Y antes de tocar una línea de código, quiero que entiendan QUÉ es como forma de pensar — porque es un paradigma, no solo una palabra clave."*
>
> *"Piensen dónde estamos parados. En C05 programamos de forma IMPERATIVA: instrucciones paso a paso. En C06, de forma FUNCIONAL: transformar datos con funciones puras. Hoy llega el tercero: ORIENTADO A OBJETOS. Tres formas distintas de organizar el MISMO programa. POO propone modelar el mundo como **objetos**: cosas que tienen características Y saben hacer cosas con ellas."*

> **Dinámica participativa "el mundo es objetos":**
> *"Hagamos una dinámica. Voy a tirar objetos cotidianos, y ustedes en el chat me dicen DOS cosas de cada uno: qué CARACTERÍSTICAS tiene (cómo es, cómo lo describirían) y qué ACCIONES sabe hacer. Vamos con el primero: un **celular**. ¿Cómo es? ¿Qué sabe hacer?"*
> *(Esperar respuestas en el chat. Anotar en pizarra/pantalla en dos columnas.)*
> - *Características que van a salir: marca, modelo, color, batería, número.*
> - *Acciones: llamar, sacar foto, mandar mensaje, vibrar.*
>
> *"Otro: un **perro**. Características: nombre, raza, edad, color. Acciones: ladrar, correr, comer. Otro: una **cuenta de banco**. Características: titular, número, saldo. Acciones: depositar, retirar, consultar saldo."*
> *(Hacer 2-3 objetos según el tiempo. Mantenerlos genéricos — cosas que todos conocen.)*

> **Nombrar los conceptos (cerrar la dinámica):**
> *"Lo que acaban de hacer ES pensar en objetos. Y los dos tipos de cosas que listaron tienen nombre técnico:"*
> - *"Las CARACTERÍSTICAS (marca, batería, saldo) son las **propiedades** del objeto — lo que ya vimos en el M1, los pares clave-valor."*
> - *"Las ACCIONES (llamar, depositar, ladrar) son los **métodos** del objeto — funciones que el objeto sabe ejecutar sobre sus propias propiedades."*
>
> *"Y acá está la conexión con la mañana: en el M1 vimos objetos que SOLO tenían características (propiedades). Lo nuevo de POO es que un objeto también tiene COMPORTAMIENTO — métodos.
- Un celular no solo guarda su marca, modelo o nivel de batería; también puede saber cómo tomarFoto o hacerLlamada. Características + acciones, juntos.
- Un perro no solo guarda su raza, edad o nombre; también sabe cómo ladrar o buscarLaPelota. Características + acciones, juntos

>La Programación Orientada a Objetos es una forma de organizar el código agrupando los datos y las funciones que los manipulan dentro de un mismo bloque independiente, ese bloque independiente es el OBJETO, pero que usamos para construirlo?
---

#### 3.2 ¿Qué es una clase? (el molde) — del celular al código

**EN PANTALLA: EXCALIDRAW — Panel 3.2 (la clase como molde): a la izquierda un molde/cortador con la forma "Celular"; a la derecha, varios celulares con la MISMA forma pero datos distintos (Samsung A14 · iPhone 13 · Xiaomi Note). Etiqueta: "una clase (molde) → muchas instancias (celulares reales)".**

> **Tu apertura (retomar la dinámica + entrar a clases):**
> *"Volvamos al celular de la dinámica. Todos los celulares comparten la MISMA forma: todos tienen marca, modelo, batería, y todos saben llamar y sacar foto. Lo que cambia es el contenido — el tuyo es un Samsung, el mío un iPhone."*
>
> *"Imaginen que estamos en las oficinas de diseño de Apple o Samsung. Antes de fabricar un celular, los ingenieros crean una plantilla para celulares. Esta plantilla no es un celular real: no puedes llamar a nadie con ella ni tomar fotos. Es solo un molde que dice: 'Todo celular que fabriquemos a partir de hoy debe tener una pantalla, una batería, una cámara, y debe poder hacer llamadas'. En POO, a esta plantilla o molde le llamamos **clase**. Es la plantilla conceptual: la descripción de cómo es cualquier celular, no un celular puntual."*
>
> *"Y fíjense en el salto: hasta ahora SIEMPRE usaron tipos de dato que JavaScript ya traía hechos — números, textos, arrays, objetos. Nunca pudieron decir 'quiero un tipo NUEVO, hecho por mí, que se llame Celular o Movimiento'. Eso es lo que desbloquea una clase: definir TU PROPIO tipo de dato, con las características y las acciones que vos decidas. ¿Cómo se escribe esa forma común, esa categoría, una sola vez? Con **_class_**."*

> **Tu explicación teórica precisa:**
> **¿Qué es una clase?** Un **molde** para crear muchos objetos con la misma forma (las mismas propiedades) y el mismo comportamiento (los mismos métodos). Se define una vez con **_class_**, y a partir de ella se fabrican objetos.


> **Sintaxis general:**
> ```javascript
> class NombreDeLaClase {
>   // el contenido del molde (lo armamos por capas)
> }
> ```

> - *"Por convención, el nombre de una clase va con Mayúscula inicial — **_Celular_**, **_Movimiento_**, **_Presupuesto_**. Distinto de variables y funciones, que van en minúscula."*
> - *"La clase NO es un objeto: es el molde. Los objetos concretos se crean con **_new_**, que vemos en un minuto."*

> **CODE ALONG:**
> ```javascript
> class Celular {
>   // el contenido del molde celular
> }
> ```

> - *"**_class Celular_** sería el molde 'celular en general'. Tu celular y el mío son dos **instancias** distintas hechas con ese molde."*

> **Puente al proyecto:**
> *"En el M2 escribieron **_{ nombre, tipo, valor }_** a mano por CADA movimiento — repitiendo la misma forma una y otra vez. Eso es exactamente lo que un molde resuelve. Así que el molde que vamos a construir hoy es **_class Movimiento_**: la 'forma común' de todo movimiento. Y lo vamos a armar por capas, usando el celular como ejemplo guía en cada paso."*

---

#### 3.3 Capa 1 — Propiedades + `new` / instancia (P2.2)

**EN PANTALLA: EXCALIDRAW — Panel 3.3 (capa 1, propiedades a mano): **_class Celular {}_** (molde vacío) → **_new Celular()_** crea una instancia (un celular en blanco) → se le asignan propiedades a mano una por una. Resaltar las líneas **_c.marca = ...; c.modelo = ...; c.bateria = ..._** con la nota "tedioso: una asignación por característica, cada vez".**

> **Tu apertura:**
> *"Vamos a construir clases EN CAPAS — no de golpe. Capa 1: la forma más básica, solo propiedades. Cada capa va a tener un problema que la siguiente resuelve. Empecemos con el celular, que ya conocemos."*

> **Tu explicación teórica precisa (ejemplo: el celular):**
> ```javascript
> class Celular {}                 // molde vacío — ya sirve como molde
>
> const c = new Celular();         // 'new' crea una INSTANCIA (un celular del molde)
> c.marca = 'Samsung';             // le agregás PROPIEDADES (las características) a mano
> c.modelo = 'A14';
> c.bateria = 80;
>
> console.log(c.marca);            // 'Samsung'
> ```
> - *"**_class Celular {}_** es el molde, todavía vacío."*
> - *"**_new Celular()_** crea una **instancia**: un celular concreto fabricado con el molde. Una clase, muchas instancias — cada una independiente. Las características de la dinámica (marca, modelo, batería) son las **propiedades**."*
> - *"Y a esa instancia le ponés propiedades con el punto, igual que en el M1."*

> **`new` — el operador que fabrica (concepto nuevo):**
> *"Acá aparece una palabra nueva: **_new_**. Volvamos a la fábrica: si la clase es la PLANTILLA del celular —el molde de Apple/Samsung—, **_new_** es la orden de FABRICAR a partir de ella: 'tomá esta plantilla y hacéme un celular real'. Con la plantilla sola no podés hacer nada; el celular que sale de **_new_** sí funciona. Y cada **_new Celular()_** produce un aparato nuevo e independiente de los demás."*
>
> *"Dato para más adelante: JavaScript ya trae varias clases hechas, y se crean igual, con **_new_**. Una que vamos a usar en un rato es **_Date_** — **_new Date()_** fabrica un objeto con la fecha actual. Misma mecánica: una clase, y **_new_** para crear un objeto concreto a partir de ella."*

> **Code-along del lab — Parte 2.2 (lo mismo, en el proyecto):**
> *"Ahora el mismo patrón con NUESTRA clase del proyecto, **_Movimiento_**. Sus propiedades son **_nombre_**, **_tipo_** y **_valor_**."*
> ```javascript
> class Movimiento {}              // molde vacío
>
> const m = new Movimiento();      // instancia
> m.nombre = 'Cena';
> m.tipo = 'gasto';
> m.valor = 45.5;
>
> console.log(m.nombre);           // 'Cena'
> ```

> **Cierre de la capa 1 — el dolor que abre la capa 2:**
> *"Pero miren el problema de esta capa, igual en el celular que en el movimiento: asignar las propiedades A MANO cada vez. Una línea por característica, y si me olvido una, el objeto queda incompleto. Tiene que haber una forma de que se pongan SOLAS al crear. La hay — se llama constructor. Capa 2."*

---

#### 3.4 Capa 2 — Constructor + `this` (P2.3)

**EN PANTALLA: EXCALIDRAW — Panel 3.4 (capa 2, constructor): a la izquierda la capa 1 del celular (3 asignaciones a mano, tachadas); a la derecha el constructor que las pone solas + **_new Celular('Samsung', 'A14', 80)_** en UNA línea. Resaltar **_this.marca = marca_** con la etiqueta "this = el objeto que se está creando".**

> **Tu apertura:**
> *"Capa 2: que las propiedades se pongan solas. Para eso existe un método especial llamado **_constructor_**. Seguimos con el celular."*

> **Tu explicación teórica precisa (ejemplo: el celular):**
> **¿Qué es el constructor?** Un método especial que se ejecuta automáticamente al hacer **_new_**. Su trabajo: recibir los datos como parámetros y guardarlos como propiedades de la instancia, usando **_this_**.
> Reemplaza el tener que asignar las propiedades a mano una por una.

> ```javascript
> class Celular {
>   constructor(marca, modelo, bateria) {
>     this.marca = marca;       // "guardá en ESTE celular la propiedad marca"
>     this.modelo = modelo;
>     this.bateria = bateria;
>   }
> }
>
> const miCel = new Celular('Samsung', 'A14', 80);   // 1 sola línea
> console.log(miCel.marca);     // 'Samsung'
> console.log(miCel.bateria);   // 80
> ```
> - *"El **_constructor_** corre solo al hacer **_new_** — ustedes nunca lo llaman a mano."*
> - *"Son las MISMAS 3 propiedades de la capa 1, pero ahora se ponen automáticamente al crear el objeto."*

> **`this` — el concepto que más confunde:**
> *"¿Qué es ese **_this_**? Apunta al objeto que se está creando en ese momento. Cuando hago **_new Celular('Samsung', ...)_**, dentro del constructor **_this_** es el celular-Samsung. Cuando hago **_new Celular('iPhone', ...)_**, **_this_** es el celular-iPhone. El mismo código del constructor sirve para todos, porque **_this_** siempre apunta a 'el que se está creando ahora'."*
Porque lo usamos dentro de la clase? 
Usamos this para acceder a propiedades internas del mismo objeto porque this hace referencia al objeto que lo contiene.
>



> **Demo del error sin `new` (gancho ejecutable):**
> *"Una trampa común. ¿Qué creen que pasa si me olvido el **_new_**?"*
> ```javascript
> const miCel = Celular('Samsung', 'A14', 80);   // SIN new — ¿qué pasa?
> ```
> *(Esperar predicción, después ejecutar.)*
> *"Error explícito: **_Class constructor Celular cannot be invoked without 'new'_**. Bien que sea explícito — la clase te avisa claramente que faltó el **_new_**. Mejor un error claro que un bug silencioso."*

> **Code-along del lab — Parte 2.3 (lo mismo, en el proyecto):**
> *"Mismo constructor, ahora en **_Movimiento_**."*
> ```javascript
> class Movimiento {
>   constructor(nombre, tipo, valor) {
>     this.nombre = nombre;
>     this.tipo = tipo;
>     this.valor = valor;
>   }
> }
>
> const cena = new Movimiento('Cena', 'gasto', 45.5);   // 1 línea
> console.log(cena.valor);   // 45.5
> ```

> **Cierre de la capa 2 — el dolor que abre la capa 3:**
> *"Ahora cada objeto nace en una línea, con sus propiedades puestas solas. Pero todavía les falta algo: los datos no SABEN hacer nada. El celular guarda su batería, pero no sabe DECIR si está cargado. El movimiento guarda su tipo, pero no sabe DECIR si es ingreso. ¿Y si el propio objeto supiera hacer esas cosas? Eso son los métodos. Capa 3."*

---

#### 3.5 Capa 3 — Métodos (P2.4)

**EN PANTALLA: EXCALIDRAW — Panel 3.5 (capa 3, métodos = la ficha con botones): la ficha del celular con arriba las propiedades (marca/modelo/bateria) y abajo los "botones" (estaCargado() · describir()). Flecha de **_describir_** hacia **_estaCargado_** con la nota "un método puede usar otro (this.estaCargado())".**

> **Tu apertura:**
> *"Capa 3, la última: darle COMPORTAMIENTO al objeto — las ACCIONES de la dinámica. Un método es una función dentro de la clase que usa las propiedades del propio objeto con **_this_**."*

> **Tu explicación teórica precisa (ejemplo: el celular):**
> ```javascript
> class Celular {
>   constructor(marca, modelo, bateria) {
>     this.marca = marca;
>     this.modelo = modelo;
>     this.bateria = bateria;
>   }
>
>   estaCargado() {
>     return this.bateria > 20;          // usa la propiedad 'bateria'
>   }
>
>   describir() {
>     const estado = this.estaCargado() ? 'cargado' : 'batería baja';
>     return `${this.marca} ${this.modelo} — ${estado}`;
>   }
> }
> ```
> - *"Los métodos se escriben DENTRO de la clase, sin la palabra **_function_** — solo el nombre y los paréntesis: **_estaCargado() {}_**."*
> - *"Usan las propiedades del objeto con **_this_**: **_estaCargado_** lee **_this.bateria_**."*
> - *"Un método puede usar OTRO método del mismo objeto: **_describir_** llama a **_this.estaCargado()_**. Composición dentro de la clase."*

> **Demo en vivo (consola):**
> ```javascript
> const miCel = new Celular('Samsung', 'A14', 80);
> console.log(miCel.estaCargado());  // true
> console.log(miCel.describir());    // 'Samsung A14 — cargado'
> ```
> *"Se invocan con punto + paréntesis, igual que **_.push()_** o **_.toFixed()_** que ya usan. **_miCel.describir()_** es apretar el botón 'describir' de ESE celular."*

> **Code-along del lab — Parte 2.4 (lo mismo, en el proyecto):**
> *"Mismos métodos, ahora en **_Movimiento_**: **_esIngreso_**/**_esGasto_** (como **_estaCargado_**) y **_formatear_** (como **_describir_**, que usa otro método)."*
> ```javascript
> class Movimiento {
>   constructor(nombre, tipo, valor) {
>     this.nombre = nombre;
>     this.tipo = tipo;
>     this.valor = valor;
>     this.fecha = new Date().toLocaleDateString();
>   }
>
>   esIngreso() {
>     return this.tipo === 'ingreso';
>   }
>
>   esGasto() {
>     return this.tipo === 'gasto';
>   }
>
>   formatear() {
>     const signo = this.esIngreso() ? '+' : '-';
>     return `${this.nombre}: ${signo}$${this.valor.toFixed(2)}`;
>   }
> }
> ```
> ```javascript
> const salario = new Movimiento('Salario', 'ingreso', 3000);
> console.log(salario.esIngreso());  // true
> console.log(salario.formatear());  // 'Salario: +$3000.00'
> ```

---

#### 3.6 Usar la clase en el proyecto (P2.5)

**EN PANTALLA: VS CODE — **_app.js_** y **_functional-utils.js_**.**

> **Tu apertura:**
> *"Tenemos la clase **_Movimiento_** completa, por capas. Ahora la metemos al proyecto: que cada movimiento sea una instancia de **_Movimiento_**, no un objeto literal escrito a mano."*

> **Code-along del lab — Parte 2.5:**
> 1. En **_registrarMovimiento_**, crear una instancia en vez de un objeto literal:
>    ```javascript
>    movimientos.push(new Movimiento(nombre, tipo, valor));
>    ```
>    *"Antes: **_movimientos.push({ nombre: nombre, tipo: tipo, valor: valor })_**. Ahora: **_new Movimiento(...)_**. El constructor arma el objeto por nosotros."*
> 2. Como cada movimiento ahora es un **_Movimiento_** (con métodos), **_imprimirReporte_** puede usar **_formatear()_**:
>    ```javascript
>    movimientos.forEach((movimiento, indice) => {
>      console.log(`  ${indice + 1}. ${movimiento.formatear()}`);
>    });
>    ```
>    *"Miren la ganancia: el formateo del texto ya no vive en **_imprimirReporte_** — vive DENTRO del movimiento, en su método **_formatear_**. La función de reporte solo lo invoca. El objeto sabe formatearse solo."*

> **Verificar (Checkpoint 2 del lab):**
> Construiste **_Movimiento_** por capas (propiedades → constructor → métodos); **_registrarMovimiento_** crea instancias y el reporte usa **_formatear()_**.

> **Reto autónomo:**
> *"Método **_antiguedadEnDias()_** que calcule cuántos días pasaron desde **_this.fecha_** hasta hoy. Pista: dos **_Date_**, restarlas, convertir milisegundos a días."*

> **Cierre del Momento + puente a M4 (SKILL §5.2 punto 11):**
> *"Cada movimiento ya es un objeto con datos Y comportamiento — una galleta hecha con el molde **_Movimiento_**. Pero falta algo grande: ¿quién gestiona TODOS los movimientos? El array, el saldo, el agregar y eliminar... todo eso sigue suelto, repartido entre variables globales y funciones en **_functional-utils.js_**. ¿Y si lo metiéramos TODO —el array Y sus operaciones— en una sola cápsula? Esa va a ser la segunda clase del día: **_Presupuesto_**. Pero antes de que la construyamos juntos, quiero asegurarme de que el patrón quedó: van a crear una clase ustedes solos, de cero."*

---

### MOMENTO 4 — Calentamiento (clase propia) + `class Presupuesto` + encapsulación

**Tiempo:** ~30 min (calentamiento ~10 + Presupuesto ~20)
**Parte del lab:** Calentamiento autónomo (dominio neutro) → Parte 3.1 → 3.2

> **OBJETIVO:** Primero el alumno **construye una clase completa solo** (constructor + método + crear instancias) a partir de un enunciado de dominio neutro — verificación activa de que el patrón de M3 quedó. Después aplica ese mismo patrón a la 2ª clase del proyecto, **_Presupuesto_**, que CONTIENE y gestiona el array de movimientos. Entiende la **encapsulación** (datos + métodos juntos en una cápsula) y ve cómo las funciones sueltas de C06 quedan absorbidas como métodos. Al cerrar M4, el Gestor está completo en lógica: **_resumen()_** devuelve un objeto nombrado y la clase gestiona todo el estado.

> **Patrón pedagógico de M4:** momento que REUSA el patrón de M3 (el alumno ya sabe construir clases por capas). Abre con un **ejercicio autónomo** para confirmar transferencia antes de avanzar. El foco conceptual nuevo es la **encapsulación**: pasar de "array suelto + funciones dispersas" a "todo junto en una cápsula". El **_resumen()_** nombrado cierra el dolor del reporte posicional de C06 (el mismo salto "posicional → nombrado" del modelo de datos).

---

#### 4.0 Calentamiento — Construí tu propia clase (ejercicio autónomo)

**EN PANTALLA: VS CODE — archivo en blanco (o la consola del navegador). Eric proyecta SOLO el enunciado, no la solución.**

> **Tu apertura:**
> *"Antes de la segunda clase del proyecto, un ejercicio corto y lo hacen SOLOS. Les doy un problema en palabras; ustedes lo traducen a una clase. Sin mirar el código de **_Movimiento_** — la idea es que demuestren que el patrón les quedó. Diez minutos."*

> **Enunciado (leer en voz alta y dejarlo en pantalla):**
> *"Una tienda online necesita modelar sus productos. Cada **_Producto_** tiene tres datos: un **_nombre_**, un **_precio_** y un **_stock_** (unidades disponibles). Además, cada producto debe saber hacer dos cosas:"*
> 1. *"**_hayStock()_** → devuelve **_true_** si quedan unidades (stock mayor que cero), **_false_** si no."*
> 2. *"**_precioConDescuento()_** → devuelve el precio con un 20% de descuento aplicado (el precio de oferta)."*
>
> *"Su tarea: (1) escriban la clase **_Producto_** con su **_constructor_** y esos dos **_métodos_**; (2) creen DOS productos distintos con **_new_** —uno con stock y otro sin stock—; (3) llamen a los dos métodos de cada uno y muéstrenlo con **_console.log_**."*

> **Criterios de verificación (lo que Eric revisa al cerrar):**
> - La clase usa **_constructor(nombre, precio, stock)_** y guarda los tres con **_this_**.
> - Los métodos leen las propiedades con **_this_** (no parámetros sueltos).
> - Se crean instancias con **_new Producto(...)_** y se invocan los métodos con punto (**_p.hayStock()_**).
> - *(Activación, no en el enunciado escrito):* *"¿Por qué **_precioConDescuento_** no necesita recibir el precio por parámetro?"* → porque ya lo tiene en **_this.precio_**. Es la idea clave del día: el objeto trae sus propios datos.

> **Solución esperada (NO proyectar hasta que la mayoría termine):**
> ```javascript
> class Producto {
>   constructor(nombre, precio, stock) {
>     this.nombre = nombre;
>     this.precio = precio;
>     this.stock = stock;
>   }
>
>   hayStock() {
>     return this.stock > 0;
>   }
>
>   precioConDescuento() {
>     return this.precio * 0.8;   // 20% menos
>   }
> }
>
> const teclado = new Producto('Teclado mecánico', 120, 5);
> const mouse   = new Producto('Mouse gamer', 80, 0);
>
> console.log(teclado.hayStock());           // true
> console.log(teclado.precioConDescuento()); // 96
> console.log(mouse.hayStock());             // false
> console.log(mouse.precioConDescuento());   // 64
> ```

> **Cierre del calentamiento + puente a Presupuesto:**
> *"Si les salió, ya saben lo esencial de POO: definir un molde y fabricar objetos con él. Ahora apliquemos exactamente eso al proyecto, pero subiendo un nivel: una clase que no modela UNA cosa, sino que GESTIONA muchas. Esa es **_Presupuesto_**."*

---

#### 4.1 `class Presupuesto` — el molde que GESTIONA (P3.1)

**EN PANTALLA: EXCALIDRAW — Panel 4.1 (encapsulación: de suelto a cápsula): a la izquierda, el desorden de C06 — una variable global **_movimientos = []_** por un lado y, sueltas, las funciones **_totalIngresos_**, **_totalGastos_**, **_calcularSaldo_**, **_buscar..._** en **_functional-utils.js_**. A la derecha, una cápsula **_Presupuesto_** que contiene ADENTRO el array (**_this.movimientos_**) Y todos esos métodos. Flecha "encapsular = meter datos + operaciones en la misma cápsula".**

> **Tu apertura:**
> *"Hasta ahora cada **_Movimiento_** es un objeto que modela UNA cosa. Pero el array de movimientos sigue siendo una variable global suelta, y las operaciones —sumar ingresos, calcular saldo, buscar— viven aparte en **_functional-utils.js_**. Datos por un lado, operaciones por el otro. **_Presupuesto_** junta las dos cosas en una sola clase."*

> **Tu explicación teórica precisa — encapsulación:**
> **¿Qué es encapsular?** Agrupar en un mismo objeto los DATOS (propiedades) y las OPERACIONES que actúan sobre esos datos (métodos). En vez de "un array acá y funciones allá", todo vive dentro de una cápsula que se gobierna a sí misma.
> - *"**_Movimiento_** encapsulaba los datos de UN movimiento. **_Presupuesto_** encapsula la COLECCIÓN entera y todo lo que se hace con ella."*
> - *"Mismo patrón de capas de M3: una propiedad primero (el array), después los métodos."*

> **Tu analogía:**
> *"Piensen en la app del banco en el celular. No es solo 'la lista de tus movimientos' por un lado y 'la calculadora del saldo' por otro: es UNA app que guarda tus movimientos Y sabe calcular el saldo, buscar, filtrar. Todo adentro. Eso es **_Presupuesto_**: la cápsula que tiene los movimientos y sabe operarlos."*

> **Code-along del lab — Parte 3.1:**
> 1. La propiedad (capa 1): el array vive ADENTRO, en **_this.movimientos_**.
>    ```javascript
>    class Presupuesto {
>      constructor() {
>        this.movimientos = [];   // ya no es una global suelta
>      }
>    }
>    ```
>    *"El constructor no recibe parámetros: un presupuesto nace vacío y se va llenando. La propiedad es un array — un objeto puede tener arrays adentro."*
> 2. Los métodos que MODIFICAN la colección:
>    ```javascript
>      agregar(movimiento) {
>        this.movimientos.push(movimiento);
>      }
>
>      eliminar(nombre) {
>        this.movimientos = this.movimientos.filter(movimiento => movimiento.nombre !== nombre);
>      }
>    ```
>    *"**_agregar_** mete un movimiento al array propio. **_eliminar_** se queda con todos menos el del nombre dado, usando el **_.filter_** de C06 — pero ahora sobre **_this.movimientos_**."*
> 3. Los métodos que CALCULAN (las funciones de C06, ahora absorbidas):
>    ```javascript
>      totalIngresos() {
>        return this.movimientos
>          .filter(movimiento => movimiento.esIngreso())
>          .reduce((acumulador, movimiento) => acumulador + movimiento.valor, 0);
>      }
>
>      totalGastos() {
>        return this.movimientos
>          .filter(movimiento => movimiento.esGasto())
>          .reduce((acumulador, movimiento) => acumulador + movimiento.valor, 0);
>      }
>
>      saldo() {
>        return this.totalIngresos() - this.totalGastos();
>      }
>
>      buscarPorNombre(texto) {
>        return this.movimientos.find(movimiento =>
>          movimiento.nombre.toLowerCase().includes(texto.toLowerCase()));
>      }
>    ```
>    *"Estas son EXACTAMENTE las funciones de C06, pero ahora son métodos: leen **_this.movimientos_** en vez de recibir el array por parámetro. Y fíjense en el doble juego de **_this_**: **_saldo_** llama a **_this.totalIngresos()_** (un método usa otro), y el **_.filter_** pregunta **_movimiento.esIngreso()_** (un método del Movimiento). Las dos clases colaboran."*

> **El reporte nombrado — `resumen()` (cierra el dolor posicional de C06):**
> ```javascript
>   resumen() {
>     return {
>       cantidad: this.movimientos.length,
>       ingresos: this.totalIngresos(),
>       gastos: this.totalGastos(),
>       saldo: this.saldo()
>     };
>   }
> ```
> *"Acá pagamos una deuda vieja. En C06 el reporte era un array posicional: **_reporte[0]_**, **_reporte[1]_**... había que acordarse de qué había en cada posición. **_resumen()_** devuelve un OBJETO con nombres: **_.cantidad_**, **_.saldo_**. Es el mismo salto 'posicional → nombrado' que hicimos con el modelo en el M2, ahora en la salida."*

> **Nombrar la ganancia (dónde sucede, §6.4.8):**
> *"Y miren qué pasó con **_functional-utils.js_**: **_totalIngresos_**, **_totalGastos_**, **_calcularSaldo_**, **_buscar..._** ya no van sueltas ahí — son métodos de **_Presupuesto_**. Pueden borrarlas del archivo viejo. Eso es lo que da la encapsulación: el código que estaba disperso queda agrupado donde pertenece."*

---

#### 4.2 Probar el modelo completo en consola (P3.2)

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — el archivo de clases + la consola.**

> **Tu apertura:**
> *"Momento de la verdad: armemos un presupuesto real y veámoslo funcionar de punta a punta."*

> **Code-along del lab — Parte 3.2:**
> ```javascript
> const miPresupuesto = new Presupuesto();
> miPresupuesto.agregar(new Movimiento('Salario', 'ingreso', 3000));
> miPresupuesto.agregar(new Movimiento('Cena', 'gasto', 45.50));
> miPresupuesto.agregar(new Movimiento('Freelance', 'ingreso', 500));
>
> console.log(miPresupuesto.resumen());
> // { cantidad: 3, ingresos: 3500, gastos: 45.5, saldo: 3454.5 }
>
> miPresupuesto.eliminar('Cena');
> console.log(miPresupuesto.saldo());                              // 3500
> console.log(miPresupuesto.buscarPorNombre('free').formatear());  // 'Freelance: +$500.00'
> ```
> *"Miren la última línea, que junta TODO el día: **_buscarPorNombre_** (método de Presupuesto) devuelve un **_Movimiento_**, y a ese movimiento le encadenamos **_.formatear()_** (método de Movimiento). Dos clases colaborando en una sola línea. Eso es el modelo terminado."*

> **Verificar (Checkpoint 3 del lab — el Gestor está completo en lógica):**
> **_resumen()_** devuelve cantidad/ingresos/gastos/saldo correctos; **_eliminar_** y **_buscarPorNombre_** funcionan. Es la entrega: **_oop-objects.js_** con las dos clases + captura de consola del **_resumen()_** con 3 movimientos.

> **Reto autónomo:**
> *"Método **_topGastos(n)_** que devuelva los **_n_** gastos más grandes. Pista: filtrá los gastos, ordenalos por **_valor_** de mayor a menor, y cortá los primeros **_n_**."*

> **Cierre del Momento + puente a M5 (SKILL §5.2 punto 11):**
> *"Listo: el Gestor de Presupuesto está COMPLETO en lógica. Empezó en C05 como dos arrays paralelos frágiles, pasó por funciones en C06, y hoy es un modelo de objetos que se gobierna solo. Lo único que le falta es CARA — sigue viviendo en la consola. En el cierre vemos qué ganamos exactamente en el camino, y hacia dónde va esto."*

---

### MOMENTO 5 — Cierre + qué ganamos + puente a C08

**Tiempo:** ~10 min
**Parte del lab:** Cierre + Logros

> **OBJETIVO:** El alumno consolida qué ganó con objetos + POO (tabla antes/después), entiende que los tres paradigmas del módulo coexisten (imperativo/funcional/POO sobre el mismo proyecto), y conoce el puente a C08 (interfaz visual con Tailwind) y a M3 (conexión UI↔lógica con el DOM).

> **Patrón pedagógico de M5:** cierre corto. Sin conceptos nuevos — consolida y proyecta. El mensaje grande: POO no reemplaza a los otros paradigmas, los complementa.

#### 5.1 Qué ganamos — el viaje del modelo

**EN PANTALLA: EXCALIDRAW / SLIDE — Panel 5.1 (tabla antes/después): dos columnas, "C05/C06 (antes)" vs "C07 (ahora)", fila por fila.**

> **Tu apertura:**
> *"Cerremos viendo el camino completo. El Gestor es el mismo programa de siempre, pero miren cómo cambió su esqueleto en tres clases."*

> **Recorrer la tabla (una línea por fila, sin detenerse demasiado):**
>
> | Antes (C05 / C06) | Ahora (C07) |
> |---|---|
> | 2 arrays paralelos | 1 array de objetos |
> | Tipo codificado en el signo | Tipo explícito (**_'ingreso'_** / **_'gasto'_**) |
> | Funciones sueltas en otro archivo | Métodos dentro del objeto |
> | Estado en variables globales | Estado encapsulado en **_Presupuesto_** |
> | Reporte posicional (**_reporte[0]_**) | Reporte nombrado (**_resumen().saldo_**) |
> | Frágil: desincronizar era fácil | Íntegro: los datos viajan juntos |
>
> *"Cada fila resolvió un dolor concreto que ustedes mismos sintieron. No cambiamos lo que el programa HACE; cambiamos cómo está ORGANIZADO — y eso es lo que lo hace mantenible."*

---

#### 5.2 Los tres paradigmas coexisten + puente a C08

**EN PANTALLA: EXCALIDRAW / SLIDE — Panel 5.2 (los 3 paradigmas sobre el mismo proyecto): tres etiquetas — Imperativo (C05) · Funcional (C06) · POO (C07) — apuntando todas al mismo Gestor de Presupuesto.**

> **Tu explicación de cierre:**
> *"Una idea que quiero que se lleven: POO NO es 'lo que reemplaza a lo anterior'. Es otra forma de organizar lo mismo. Vieron el MISMO proyecto escrito de tres maneras: imperativo paso a paso en C05, transformando datos con funciones en C06, y modelado con objetos hoy. En el código real los tres conviven — un método (POO) por dentro usa **_.filter_** y **_.reduce_** (funcional) y un **_while_** (imperativo). No compiten; se combinan."*

> **Lo que viene en POO (mención breve, NO desarrollar):**
> *"Lo de hoy es la base: propiedades, constructor, métodos, encapsulación. Más adelante, en una unidad de POO, van a ver cómo una clase puede HEREDAR de otra —**_extends_** y **_super_**— para no repetir código entre clases parecidas, y los prototipos que **_class_** usa por debajo. Hoy no; hoy quedaron sólidos en lo esencial."*

> **Puente a C08:**
> *"El Gestor está completo en lógica, pero solo corre en la consola — no tiene cara. En C08 aprenden **Tailwind CSS** y por fin le dan una interfaz visual, moderna y responsiva. Y conectar esa interfaz con estas clases —que un click en un botón llame a **_miPresupuesto.agregar(...)_**— es el Módulo 3, cuando entremos al DOM. Lo que construyeron hoy es el motor; lo que viene es la carrocería y el volante."*

> **Discusión final (las 3 preguntas del slide):**
> - *"¿Qué cambió al pasar de arrays paralelos a un array de objetos?"*
> - *"¿Por qué **_tipo: 'ingreso'_** es mejor que codificar el tipo con el signo?"*
> - *"¿Notaron cómo el constructor 'pone' las propiedades y los métodos las 'usan'?"*

> **Cierre de la clase:**
> *"Hoy cerraron el motor del Gestor con las tres formas de programar que existen. La próxima le ponemos cara. Nos vemos en C08."*

---

## Mapeo Momentos ↔ Lab ↔ Conceptos de Capa 0

| Momento | Parte del lab | Conceptos de Capa 0 |
|---|---|---|
| **M1** | Setup + P0 | B1 (objeto literal, propiedad + acceso con punto, leer/modificar/agregar, array de objetos, array vs objeto) |
| **M2** | P1.1 → P1.5 | B2 (tipo explícito vs codificado por signo + las 3 correcciones del refactor) |
| **M3** | P2.1 → P2.5 | Paradigma POO (intro + dinámica) + B3 parcial (clase, **_new_**/instancia, propiedad de instancia, **_constructor_**, **_this_**, método) |
| **M4** | Calentamiento (Producto) + P3.1 → P3.2 | B3 parcial: encapsulación (en **_Presupuesto_**) + **_resumen()_** nombrado |
| **M5** | Cierre + Logros | Síntesis: los 3 paradigmas coexisten + puente C08/M3 |

**Validación de paridad Momento ↔ Parte del lab:**
- ✅ Cada Momento cita una Parte específica del lab cuyos sub-pasos Eric puede leer verbatim.
- ✅ **M3 abre con introducción conceptual a POO + dinámica participativa** ANTES de la sintaxis de `class` (pedido de Eric) — POO se enseña como paradigma, no solo como sintaxis.
- ✅ La **`class` se construye por capas** (§6.4.4 adaptado): propiedades → constructor → métodos, cada capa motivada por el dolor de la anterior. El lab ya viene así (P2.2 → P2.3 → P2.4).
- ✅ **`class` es un modelo nuevo** → §6.4.5: sub-punto "¿Qué es una clase?" antes de las propiedades.
- ✅ **`new` se introduce como operador nuevo** en M3.3 (atado a la analogía de fábrica: la clase es la plantilla, **_new_** la orden de fabricar). NO se usó **_new_** en C05/C06, así que NO aplica "iluminar concepto implícito" — **_new Date()_** queda como mención hacia adelante.
- ✅ **Calentamiento autónomo** al inicio del M4 (4.0): el alumno construye una clase de dominio neutro (**_Producto_**) solo —constructor + métodos + instancias— antes de **_Presupuesto_**. Verificación activa de transferencia.
- ✅ El **gancho ejecutable** del error sin **_new_** (`Class constructor cannot be invoked without 'new'`) se usa en M3.4.
- ✅ El **refactor de modelo de datos** (M2) marca las 3 correcciones de lógica + el borrado de `montosAbsolutos` — "un mejor modelo obliga a corregir y hasta a borrar".
- ✅ El **`resumen()` nombrado** (M4) cierra el dolor del reporte posicional de C06 — mismo salto "posicional → nombrado" del modelo.
- ✅ Sin archivo de apoyo — demos en vivo en consola (decisión de Eric).
- ✅ Herencia/`extends`/prototipos quedan fuera, solo mención en el cierre.

## Decisiones pedagógicas a confirmar con Eric

1. **La dinámica "el mundo es objetos" (M3.1):** propuse objetos cotidianos (celular, perro, auto, cuenta de banco) donde el alumno lista propiedades + métodos en el chat (~5-7 min). ¿Te gustan esos objetos, o preferís otros? ¿El formato (chat) o querés algo más estructurado (grupos, pizarra)?
2. **Tiempo de M3 (50 min):** es el momento más largo por la intro a POO + dinámica + class por capas. Si lo ves muy cargado, se puede mover la dinámica a M1 (como parte de la apertura del día) y dejar M3 más enfocado en `class`. ¿Preferencia?
3. **`resumen()` nombrado vs `generarValoresReporte` posicional:** en M4 el lab introduce `resumen()` (objeto nombrado) y deja `generarValoresReporte` (array posicional) como obsoleto. ¿Lo borramos explícitamente en el code-along o lo dejamos conviviendo?

**Estado de redacción:** Capa 0 ✅ · Capa 1 ✅ · Capa 2+3 pendiente · Guía Excalidraw pendiente. (Sin archivo de apoyo — demos en consola.)
