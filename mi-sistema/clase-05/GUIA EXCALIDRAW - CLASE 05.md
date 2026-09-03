# GUÍA EXCALIDRAW — CLASE 05: Programación Imperativa + Arrays

> **Curso:** Code 201
> **Módulo:** M2 — Clase 1 de 4 (apertura del Módulo 2)
> **Estado:** Paneles documentados — pendiente validación de Eric
> **Total Paneles:** 10 (2 M1 + 4 M2 + 2 M3 + 2 M4 · M5 no tiene paneles)
> **Fecha:** 2026-05-28
> **Fuente del guion:** mi-sistema/clase-05/CLASE 05.md
> **Patrón visual común:** estilo "anatomía visual" tipo samanthaming.com — bloques con borde claro, etiquetas con flechas funcionales, código en monospace azul **_#1971c2_**, paleta canónica restringida a `#1e1e1e` negro / `#e03131` rojo / `#1971c2` azul / `#f08c00` naranja / `#2f9e44` verde / `#e8590c` naranja oscuro. Todos son Imagen-slide porque requieren precisión geométrica (anatomías de sintaxis, flechas de loop, comparativas X-vs-Y).

---

## Momento 1: Apertura + ¿Qué es un array? + arrays paralelos

> **Estado:** Borrador
> **Paneles del Momento:** 2 (Panel 1.1 establece la anatomía del array + los 4 verbos + el bug del índice 0; Panel 1.2 lleva el concepto al modelo de datos real del proyecto — 2 arrays paralelos con convención de signos). El sub-punto 1.1 (apertura, slide de portada), 1.2 (setup en VS Code) y 1.4 (ejercicio autónomo, slide de enunciado) no requieren Panel — son slide de presentación o ejecución en VS Code/consola.

---

### Panel 1.1 — Anatomía de un array: 4 celdas indexadas + 4 verbos + el bug del índice 0

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 1.1 (anatomía de un array): caja horizontal con 4 celdas contiguas que contienen 'manzana', 'pera', 'uva', 'mango'. Debajo de cada celda, el índice (0, 1, 2, 3) grande en rojo #e03131. Alrededor, 4 etiquetas conectadas con flechas a las operaciones: declaración con [], acceso por índice arr[i], longitud arr.length, agregar al final arr.push(x). Anotación destacada al pie: "EL ÍNDICE ARRANCA EN 0 — el bug #1 al empezar con arrays."**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para acomodar las 4 celdas + 4 etiquetas con flechas a cada verbo + la anotación del índice 0 al pie)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de un valor descompuesto — el array descompuesto en celdas + índices) + Patrón 2 (Sub-tabla de los 4 verbos esenciales).
- **Concepto pedagógico que visualiza:** la **estructura física del array** — que es una secuencia de celdas contiguas, cada una con un índice numerado que ARRANCA EN 0, no en 1. Sin ver las celdas con sus índices debajo, "índice 0" es una afirmación abstracta. Con la imagen, el alumno VE que 'manzana' está físicamente en la posición 0 y que el cuarto elemento ('mango') vive en la posición 3, no 4 — el bug #1 de todo principiante con arrays.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "ARRAY — UNA LISTA ORDENADA E INDEXADA DESDE 0"
- **Subtítulo** (gris oscuro, 20px): "Una sola variable que guarda muchos valores en orden. Cada valor tiene una posición numerada: el índice."
- **Sección central — la caja del array (centrada, horizontal):**
  - Una caja horizontal con 4 celdas contiguas pegadas (bordes grises), cada una con su valor en monospace azul **_#1971c2_**:
    - Celda 1: `'manzana'`
    - Celda 2: `'pera'`
    - Celda 3: `'uva'`
    - Celda 4: `'mango'`
  - Debajo de cada celda, el índice en número grande rojo **_#e03131_**: `0` · `1` · `2` · `3`
  - Etiqueta sobre la caja (gris oscuro 14px): `let frutas = ['manzana', 'pera', 'uva', 'mango'];`

- **Sección de los 4 verbos (alrededor de la caja, cada verbo con su color funcional y una flecha hacia la parte que toca):**
  - **Verbo 1 — CREAR** (flecha verde **_#2f9e44_** apuntando a la caja completa) → etiqueta: "CREAR con `[]` — `let arr = []` vacío, o `[1, 2, 3]` con valores"
  - **Verbo 2 — LEER por posición** (flecha azul **_#1971c2_** apuntando a la celda del índice 0) → etiqueta: "LEER con `arr[i]` — `frutas[0]` te da `'manzana'` (el primero)"
  - **Verbo 3 — CONTAR** (flecha naranja **_#f08c00_** apuntando al borde derecho de la caja) → etiqueta: "CONTAR con `arr.length` — es PROPIEDAD (sin paréntesis) — acá da `4`"
  - **Verbo 4 — AGREGAR al final** (flecha naranja oscuro **_#e8590c_** apuntando al final de la caja) → etiqueta: "AGREGAR con `arr.push(x)` — es MÉTODO (con paréntesis) — mete al final"

- **Recuadro lateral — propiedad vs método** (borde gris claro):
  - Encabezado (gris oscuro 14px): "Vocabulario que importa:"
  - Texto (negro 13px): "`.length` SIN paréntesis = propiedad (un dato del array). `.push()` CON paréntesis = método (una acción). Propiedad = dato · Método = acción."

- **Anotación destacada al pie** (recuadro con borde rojo **_#e03131_** grueso, ancho completo):
  - Encabezado (rojo **_#e03131_** 20px): "⚠ EL ÍNDICE ARRANCA EN 0 — el bug #1 al empezar con arrays"
  - Texto (negro 14px): "Hay 4 elementos, pero el último vive en la posición 3, no 4. `frutas[4]` no existe → devuelve `undefined`. La fórmula del último elemento que vas a usar toda tu carrera: `arr[arr.length - 1]`."

- **Nota inferior** (negro **_#1e1e1e_**, 16px): "Estos 4 verbos —crear, leer, contar, agregar— son la base de TODO lo que viene del M2 en adelante. En una semana son instinto."

**Anchor pedagógico:** las celdas con los índices rojos debajo son la pieza central — convierten "el índice arranca en 0" de afirmación verbal a hecho visual. El recuadro rojo al pie ancla el bug #1 (pedir una posición que no existe) antes de que el alumno lo cometa en el ejercicio autónomo del sub-punto 1.4.

**Notas para Eric:** este es el primer Panel del día y del módulo. Se proyecta durante el sub-punto 1.3, justo cuando explicás la indexación. Podés señalar físicamente la celda del índice 0 mientras decís "el primero es CERO" y la celda del índice 3 mientras decís "hay 4 pero el último está en 3". La anotación roja al pie es el setup directo del ejercicio autónomo (1.4), donde el alumno valida solo que entendió `length - 1`.

---

### Panel 1.2 — Arrays paralelos del proyecto: `nombres[]` + `valores[]` alineados por índice

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 1.2 (arrays paralelos del proyecto): dos arrays apilados verticalmente alineados por columna. Arriba: nombres con celdas 'Salario', 'Cena', 'Freelance'. Abajo: valores con celdas 3000, -45.50, 50. Líneas verticales discretas conectando los índices 0, 1, 2 entre ambos arrays. Anotación lateral: "nombres[i] y valores[i] describen el MISMO movimiento". Convención de signos al pie: + = ingreso, − = gasto.**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para los 2 arrays apilados con líneas de alineación + anotación de fragilidad + convención de signos al pie)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de un valor descompuesto — dos arrays apilados con índices compartidos) + Patrón 2 (Convención de signos como tabla al pie).
- **Concepto pedagógico que visualiza:** el **modelo de datos del proyecto** — que un movimiento del presupuesto vive partido en dos arrays distintos, unidos por el índice. Sin las líneas verticales conectando el índice 0 de `nombres` con el índice 0 de `valores`, "arrays paralelos" no se entiende como relación. Con las líneas, el alumno VE que `nombres[0]` y `valores[0]` son el mismo movimiento mirado desde dos arrays — y que esa dependencia es lo que los hace frágiles (semilla que se ejecuta en M5).

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "ARRAYS PARALELOS — UN MOVIMIENTO EN DOS ARRAYS"
- **Subtítulo** (gris oscuro, 20px): "El mismo índice `i` describe el mismo registro en cada array. `nombres[i]` dice QUÉ fue, `valores[i]` dice CUÁNTO."
- **Sección central — los dos arrays apilados verticalmente, alineados por columna:**
  - Fila de índices arriba (número grande rojo **_#e03131_**): `0` · `1` · `2` (alineados con las columnas de abajo)
  - **Array `nombres` (arriba)** — etiqueta a la izquierda (azul **_#1971c2_** 18px): `nombres` — caja horizontal de 3 celdas (bordes grises, contenido monospace azul **_#1971c2_**):
    - `'Salario'` · `'Cena'` · `'Freelance'`
  - **Array `valores` (abajo)** — etiqueta a la izquierda (naranja **_#f08c00_** 18px): `valores` — caja horizontal de 3 celdas alineadas exactamente bajo las de `nombres`:
    - `3000` · `-45.50` · `50`
  - **Líneas verticales discretas** (gris claro punteado) conectando cada celda de `nombres` con la celda de `valores` del mismo índice (columna 0, columna 1, columna 2).

- **Anotación lateral** (recuadro borde gris claro, a la derecha de los arrays):
  - Encabezado (gris oscuro 14px): "Cómo se lee un movimiento:"
  - Texto (negro 13px): "El movimiento 0 es `'Salario'` por `3000`. Lo leés cruzando los dos arrays en el mismo índice: `nombres[0]` + `valores[0]`."

- **Sección — convención de signos al pie** (recuadro con borde verde **_#2f9e44_**):
  - Encabezado (verde **_#2f9e44_** 18px): "CONVENCIÓN DE SIGNOS — el signo guarda el tipo"
  - Dos sub-bloques en paralelo:
    - Sub-bloque verde **_#2f9e44_**: "`+` POSITIVO = ingreso — un salario de 3000 se guarda como `3000`"
    - Sub-bloque rojo **_#e03131_**: "`−` NEGATIVO = gasto — una cena de 45.50 se guarda como `-45.50`"
  - Texto al pie del recuadro (negro 13px): "¿Por qué? Calcular el saldo se vuelve trivial: sumás todo el array `valores` y el signo hace el trabajo. Los ingresos suman, los gastos restan. No hay que separar nada."

- **Caja destacada al pie — la fragilidad (recuadro con borde rojo **_#e03131_** grueso, ancho completo):**
  - Encabezado (rojo **_#e03131_** 18px): "⚠ FRÁGIL: dependen de VOS para mantenerse sincronizados"
  - Texto (negro 14px): "Cada movimiento exige `push` en los DOS arrays, siempre juntos. Si hacés push en uno y olvidás el otro, el sistema se descalibra... y nada te avisa. El código no rompe — queda mal en silencio. Lo vas a ver ejecutado en vivo al cierre de la clase."

**Anchor pedagógico:** las líneas verticales que conectan los índices son la pieza que hace clic — sin ellas son dos listas sueltas; con ellas son un solo modelo de datos partido en dos. La caja roja al pie siembra el dolor que el M5 cobra en vivo (gancho ejecutable a C07, donde los objetos resuelven la fragilidad).

**Notas para Eric:** este Panel se proyecta en el sub-punto 1.5, después del ejercicio autónomo. Podés señalar las líneas verticales mientras decís "el mismo índice, el mismo movimiento" y apuntar al recuadro rojo al pie cuando sembrás la advertencia ("guárdenlo para el final del día"). Es el primer Panel del curso que introduce la convención de signos — el alumno la va a necesitar para entender por qué el saldo del M3 es una simple suma.

---

## Momento 2: APIs del navegador + booleano + truthy/falsy + validación

> **Estado:** Borrador
> **Paneles del Momento:** 4 (Panel 2.1 establece las 3 APIs del navegador como hijas de WINDOW; Panel 2.2 ilumina el booleano + cómo decide el `if`; Panel 2.3 da las 2 columnas truthy/falsy; Panel 2.4 descompone el `if` de validación en 4 niveles). El sub-punto 2.5 (code-along de validar/guardar/probar) no requiere Panel — es ejecución en VS Code + consola.

---

### Panel 2.1 — Las 3 APIs del navegador: WINDOW como caja madre + 3 hijas

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 2.1 (anatomía de las 3 APIs del navegador): caja central grande etiquetada "WINDOW — el navegador". Tres flechas salen hacia 3 cajas hijas: prompt(mensaje) → "abre ventana de input · devuelve siempre STRING (o null si cancela)"; alert(mensaje) → "muestra ventana de aviso · no devuelve nada útil"; parseFloat(texto) → "convierte string a número decimal · devuelve NaN si no puede". Anotación al pie en rojo: "Estas 3 viven en el NAVEGADOR. No son JavaScript puro — un servidor con Node.js no las tiene."**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9, horizontal para acomodar la caja madre WINDOW con sus 3 hijas en abanico)
- **Patrón canónico de referencia:** Patrón 7 (Diagrama jerárquico de bifurcación — caja madre → cajas hijas) + Patrón 2 (Sub-tabla de qué devuelve cada API).
- **Concepto pedagógico que visualiza:** la **distinción API del navegador vs lenguaje puro** — que `prompt`/`alert`/`parseFloat` no son parte de JavaScript en sí, sino funcionalidades que el navegador presta. Sin ver la caja madre WINDOW conteniendo las 3 hijas, "API del navegador" es una etiqueta vacía. Con el diagrama, el alumno entiende por qué estas 3 NO existen en un servidor (Node.js) mientras que los verbos de array sí.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "LAS 3 APIS DEL NAVEGADOR — UN PRÉSTAMO, NO EL LENGUAJE"
- **Subtítulo** (gris oscuro, 20px): "Funcionalidades que el navegador le presta a tu JavaScript. No son parte del lenguaje en sí."
- **Sección central — diagrama jerárquico:**
  - **Caja madre (arriba, centrada, grande)** — fondo blanco, borde azul **_#1971c2_** grueso: "WINDOW — el navegador"
  - Tres flechas saliendo de la caja madre hacia abajo, en abanico, cada una hacia una caja hija con su color funcional:

  **Caja hija 1 — `prompt(mensaje)` (borde verde **_#2f9e44_**):**
  - Encabezado (verde **_#2f9e44_** 18px): `prompt(mensaje)`
  - Texto (negro 14px): "Abre una ventana de input — le pide algo al usuario."
  - Etiqueta destacada (verde 13px): "⚠ Devuelve SIEMPRE un STRING (aunque escriba un número). Si cancela → `null`."

  **Caja hija 2 — `alert(mensaje)` (borde naranja **_#f08c00_**):**
  - Encabezado (naranja **_#f08c00_** 18px): `alert(mensaje)`
  - Texto (negro 14px): "Muestra una ventana de aviso. Solo informa."
  - Etiqueta (gris oscuro 13px): "No devuelve nada útil."

  **Caja hija 3 — `parseFloat(texto)` (borde azul **_#1971c2_**):**
  - Encabezado (azul **_#1971c2_** 18px): `parseFloat(texto)`
  - Texto (negro 14px): "Convierte un string a número decimal. `parseFloat('45.50')` → `45.5`."
  - Etiqueta destacada (rojo **_#e03131_** 13px): "⚠ Si el texto no es número → devuelve `NaN` (no rompe). Ese detalle importa para validar."

- **Recuadro lateral — por qué parseFloat es necesario** (borde gris claro):
  - Encabezado (gris oscuro 14px): "Por qué convertir:"
  - Texto (negro 13px): "`prompt` siempre da texto. `'100' + '50'` da `'10050'` (concatena), no `150`. Para hacer matemática necesitás números de verdad. Por eso el monto va envuelto en `parseFloat`."

- **Anotación destacada al pie** (recuadro con borde rojo **_#e03131_** grueso, ancho completo):
  - Texto (rojo **_#e03131_** 16px): "Estas 3 viven en el NAVEGADOR. NO son JavaScript puro — un servidor con Node.js no las tiene. Los verbos de array (`push`, `length`) sí son del lenguaje y funcionan en cualquier lado."

**Anchor pedagógico:** la caja madre WINDOW conteniendo las 3 hijas ancla visualmente que las APIs "cuelgan" del navegador, no del lenguaje. Las 3 etiquetas de "qué devuelve cada una" (string / nada / NaN) son el setup directo de la validación del Panel 2.4 — el alumno necesita saber que `parseFloat` devuelve `NaN` antes de entender el `isNaN(monto)`.

**Notas para Eric:** se proyecta en el sub-punto 2.1, antes del code-along de las 3 capturas. La etiqueta roja de `parseFloat → NaN` es la que hay que dejar marcada — vuelve en el Panel 2.4 como Nivel 3 de validación. Podés señalar la caja madre mientras decís "esto es del navegador, no del lenguaje".

---

### Panel 2.2 — Anatomía del booleano + cómo decide el `if`

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 2.2 (anatomía del booleano + cómo decide el if): a la izquierda, una caja con SOLO dos celdas etiquetadas true (verde #2f9e44) y false (rojo #e03131) — leyenda "el booleano solo tiene 2 valores posibles". A la derecha, esquema del if: caja if ( CONDICIÓN ) con dos flechas saliendo — flecha verde hacia "ejecuta el bloque" etiquetada "si es true", flecha roja hacia "salta el bloque" etiquetada "si es false". Anotación grande al pie: "EL IF NO COMPARA. EL IF PREGUNTA: ¿ESTO ES TRUE O FALSE?"**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9, horizontal para las 2 mitades: el booleano a la izquierda, el flujo del `if` con sus 2 ramas a la derecha)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía del tipo — el booleano con sus 2 únicos valores) + Patrón 7 (Diagrama de bifurcación — el `if` con dos ramas según true/false).
- **Concepto pedagógico que visualiza:** la **mecánica oculta del `if`** — que el `if` no "compara", sino que evalúa la verdad de lo que tiene adentro. Iluminar concepto implícito (SKILL §6.4.6): el alumno del 101 escribió decenas de `if` sin que nadie le explicara qué es `true`/`false` técnicamente. Sin la imagen de las 2 ramas, "el if evalúa un booleano" es teoría. Con la imagen, el alumno ve que las comparaciones funcionan porque DEVUELVEN un booleano, y que el `if` solo ve ese booleano.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "BOOLEANO — EL TIPO DE 2 VALORES + CÓMO DECIDE EL IF"
- **Subtítulo** (gris oscuro, 20px): "Un tipo primitivo como string y number. La diferencia: solo tiene DOS valores posibles."
- **Mitad izquierda — el booleano:**
  - Encabezado (gris oscuro 18px): "El booleano solo tiene 2 valores"
  - Una caja con SOLO dos celdas (bordes gruesos):
    - Celda 1 (fondo/borde verde **_#2f9e44_**, monospace): `true`
    - Celda 2 (fondo/borde rojo **_#e03131_**, monospace): `false`
  - Etiqueta debajo (negro 14px): "Se escriben con esas palabras exactas, en minúscula, sin comillas. `typeof true` → `'boolean'`."

- **Mitad derecha — cómo decide el `if`:**
  - Caja central (borde azul **_#1971c2_**, monospace): `if ( CONDICIÓN )`
  - Dos flechas saliendo de la caja:
    - Flecha verde **_#2f9e44_** hacia una caja "EJECUTA el bloque" — etiqueta sobre la flecha: "si es `true`"
    - Flecha roja **_#e03131_** hacia una caja "SALTA el bloque" — etiqueta sobre la flecha: "si es `false`"

- **Recuadro al pie — por qué funcionan las comparaciones** (borde gris claro):
  - Encabezado (gris oscuro 14px): "¿Por qué funcionan los `if (edad > 18)`? Porque las comparaciones DEVUELVEN un booleano:"
  - Bloque de código (monospace azul **_#1971c2_**):
    - `3 > 1` → `true`
    - `5 === 5` → `true`
    - `"a" === "b"` → `false`
  - Texto (negro 13px): "Primero JS evalúa `edad > 18` y obtiene `true`/`false`. Recién con ese booleano en mano, el `if` decide. El `if` nunca vio la edad — solo vio el booleano que salió de la comparación."

- **Anotación destacada al pie** (recuadro con borde negro **_#1e1e1e_** grueso, ancho completo):
  - Texto (negro **_#1e1e1e_** 20px, centrado): "EL IF NO COMPARA. EL IF PREGUNTA: ¿ESTO ES TRUE O FALSE?"

**Anchor pedagógico:** las 2 ramas del `if` (verde = ejecuta, rojo = salta) hacen tangible que el `if` es un interruptor binario, no un comparador. El recuadro de las comparaciones que devuelven booleano cierra el descubrimiento: el alumno entiende que `edad > 18` es un paso PREVIO que produce el booleano que el `if` consume.

**Notas para Eric:** se proyecta en el sub-punto 2.2, después de la pregunta directa al alumno ("¿qué es `true` y `false` técnicamente?"). Es deliberadamente un Panel de "revelación" — el alumno cree que ya sabe qué es un `if` y descubre que nunca le explicaron la mecánica. La anotación negra al pie es la frase que querés que se lleven. Prepara el Panel 2.3 (truthy/falsy): si el `if` solo pregunta true/false, ¿qué pasa cuando le das un string?

---

### Panel 2.3 — Truthy / falsy: los 6 falsy vs todo lo demás truthy

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 2.3 (truthy/falsy): dos columnas. Izquierda con título "FALSY — los 6 únicos" sobre fondo rojo claro, listando false, 0, "" (string vacío), null, undefined, NaN. Derecha con título "TRUTHY — TODO lo demás" sobre fondo verde claro, con ejemplos: true, 1, -5, "hola" (cualquier texto con contenido), "0" (string con un cero ES truthy), [], {}. Anotación grande al pie: "if (variable) SIN comparación → el if pregunta: ¿esta variable es truthy?"**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9, comparativa horizontal densa de 2 columnas con listas + trampa del `"0"`)
- **Patrón canónico de referencia:** Patrón 3 (Comparativa X vs Y — los 6 falsy cerrados vs el universo abierto truthy).
- **Concepto pedagógico que visualiza:** la **regla truthy/falsy** — que JavaScript convierte cualquier valor a `true`/`false` cuando necesita un booleano, según una lista fija de 6 valores falsy. Sin las 2 columnas, "truthy/falsy" es jerga. Con las columnas (6 cerrados a la izquierda, todo lo demás a la derecha), el alumno ve que solo hay 6 cosas falsy y que TODO lo demás es truthy — incluido el string `"0"`, que es la trampa clásica.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "TRUTHY / FALSY — QUÉ CUENTA COMO VERDADERO SIN COMPARAR"
- **Subtítulo** (gris oscuro, 20px): "Cuando JS necesita un booleano pero le das otra cosa, la convierte. Los que se vuelven `false` se llaman falsy. Todo lo demás, truthy."
- **Layout en 2 columnas:**

  **Columna izquierda — FALSY (fondo rojo claro **_#ffc9c9_**, borde rojo **_#e03131_**):**
  - Encabezado (rojo **_#e03131_** 24px): "FALSY — los 6 únicos"
  - Sub-etiqueta (gris oscuro 12px): "Memorízalos — son solo 6, no hay más."
  - Lista (monospace, negro **_#1e1e1e_**):
    - `false` — el booleano false en sí
    - `0` — el número cero
    - `""` — string vacío (sin nada adentro)
    - `null`
    - `undefined`
    - `NaN` — Not a Number

  **Columna derecha — TRUTHY (fondo verde claro **_#b2f2bb_**, borde verde **_#2f9e44_**):**
  - Encabezado (verde **_#2f9e44_** 24px): "TRUTHY — TODO lo demás"
  - Sub-etiqueta (gris oscuro 12px): "Cualquier cosa que no esté en la lista de la izquierda."
  - Lista (monospace, negro **_#1e1e1e_**):
    - `true`
    - `1`
    - `-5` — cualquier número distinto de cero
    - `"hola"` — cualquier texto con contenido
    - `"0"` — ⚠ string con un cero ES truthy
    - `[]` — array vacío
    - `{}` — objeto vacío

- **Recuadro — la trampa clásica** (borde naranja **_#f08c00_**):
  - Encabezado (naranja **_#f08c00_** 16px): "⚠ La trampa: `"0"` es TRUTHY"
  - Texto (negro 13px): "El string `"0"` —cero entre comillas— es truthy porque NO está vacío: tiene un carácter adentro. Lo único falsy entre strings es el string totalmente vacío `""`."

- **Recuadro — aplicación al lab** (borde azul **_#1971c2_**):
  - Encabezado (azul **_#1971c2_** 16px): "Por qué `!nombre` detecta el campo vacío:"
  - Texto (negro 13px): "Si el usuario apretó OK sin escribir, `nombre` es `""` (falsy). El `!` lo invierte: `!falsy` es `true`. El `if` se ejecuta y muestra el error. Sin truthy/falsy, no se podría detectar el vacío con sintaxis tan corta."

- **Anotación destacada al pie** (recuadro con borde negro **_#1e1e1e_** grueso, ancho completo):
  - Texto (negro **_#1e1e1e_** 18px, centrado): "`if (variable)` SIN comparación → el if pregunta: ¿esta variable es TRUTHY?"

**Anchor pedagógico:** la oposición visual de las 2 columnas (6 cerrados / infinitos abiertos) ancla que falsy es una lista corta y memorizable, y truthy es "el resto". El recuadro del `"0"` aísla la trampa más común. El recuadro de aplicación al lab conecta la regla abstracta con el `!nombre` concreto que el alumno escribe en 2.5.

**Notas para Eric:** se proyecta en el sub-punto 2.3, después del Panel 2.2. El truco del `!!` del code-along (convertir cualquier valor a su booleano) se demuestra en consola junto a este Panel — podés ir tipeando `!!"0"` mientras señalás la celda `"0"` en la columna truthy. Prepara el Panel 2.4: ahora que saben qué es falsy, el `!nombre` del `if` de validación deja de ser magia.

---

### Panel 2.4 — El `if` de validación descompuesto: 4 niveles de defensa

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 2.4 (el if de validación descompuesto): bloque grande con el código if (!nombre || (tipo !== 'ingreso' && tipo !== 'gasto') || isNaN(monto) || monto <= 0). Cuatro flechas hacia 4 etiquetas numeradas: (1) !nombre → "FALSY: detecta nombre vacío"; (2) tipo !== 'ingreso' && tipo !== 'gasto' → "OPCIONES CERRADAS: solo acepta 2 valores válidos"; (3) isNaN(monto) → "CONVERSIÓN: detecta el NaN que dejó parseFloat"; (4) monto <= 0 → "REGLA DE NEGOCIO: no se acepta 0 ni negativo". Anotación lateral grande: "el || (OR): si CUALQUIERA es true → todo el if es true → datos inválidos".**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para el bloque de código largo + 4 flechas a 4 etiquetas numeradas + la anotación del `||`)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de sintaxis con 4 flechas a cada parte del valor) + Patrón 2 (Sub-tabla de los 4 niveles numerados).
- **Concepto pedagógico que visualiza:** la **descomposición de una línea de validación densa** en 4 defensas independientes unidas por `||`. Sin el Panel, `if (!nombre || (tipo !== 'ingreso' && ...) || isNaN(monto) || monto <= 0)` es una pared de símbolos. Con las 4 flechas numeradas, el alumno ve que es una lista de 4 chequeos distintos, cada uno atrapando un tipo de basura distinto, y que con UNO que dé `true` alcanza para rechazar.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "EL IF DE VALIDACIÓN — 4 NIVELES DE DEFENSA EN UNA LÍNEA"
- **Subtítulo** (gris oscuro, 20px): "El usuario puede meter basura: nombre vacío, tipo mal escrito, letras en el monto. Una sola línea hace las 4 validaciones a la vez."
- **Sección 1 — el bloque de código (arriba, centrado, grande):**
  - Bloque de código (monospace azul **_#1971c2_**, fondo blanco con borde gris claro):
    ```
    if (!nombre || (tipo !== 'ingreso' && tipo !== 'gasto') || isNaN(monto) || monto <= 0)
    ```

- **Sección 2 — las 4 flechas a 4 etiquetas numeradas (cada nivel con su color funcional):**
  - **Nivel 1** (flecha verde **_#2f9e44_** desde `!nombre`) → etiqueta: "1. FALSY — detecta nombre vacío (lo del Panel 2.3)"
  - **Nivel 2** (flecha naranja **_#f08c00_** desde `tipo !== 'ingreso' && tipo !== 'gasto'`) → etiqueta: "2. OPCIONES CERRADAS — solo acepta 2 valores válidos; un typo, mayúsculas o vacío se rechaza"
  - **Nivel 3** (flecha azul **_#1971c2_** desde `isNaN(monto)`) → etiqueta: "3. CONVERSIÓN — `isNaN` = 'is Not a Number?'; atrapa el `NaN` que dejó `parseFloat` cuando hay letras"
  - **Nivel 4** (flecha rojo **_#e03131_** desde `monto <= 0`) → etiqueta: "4. REGLA DE NEGOCIO — no se acepta 0 ni negativo; el signo lo manejamos nosotros, no el usuario"

- **Anotación lateral grande — el operador `||`** (recuadro borde negro **_#1e1e1e_** grueso):
  - Encabezado (negro **_#1e1e1e_** 18px): "El `||` (OR)"
  - Texto (negro 14px): "Devuelve `true` si AL MENOS UNA condición es true. Leído para validar: 'si pasa esto malo, O esto otro malo, O esto otro... rechazá'. Con un solo dato malo alcanza para rechazar todo el movimiento."

- **Recuadro al pie — panorama profesional** (borde gris claro):
  - Encabezado (gris oscuro 14px): "Para tener el mapa completo:"
  - Texto (negro 13px): "Todo esto es validación del lado del CLIENTE (en el navegador). Es la PRIMERA línea de defensa. En proyectos reales hay más capas: el backend valida otra vez, la base de datos una tercera. ¿Por qué tantas? Porque la del navegador se puede saltar. Hoy dominamos la primera, que es la que el usuario ve."

**Anchor pedagógico:** las 4 flechas con colores funcionales convierten una línea ilegible en 4 chequeos nombrados. La anotación del `||` es la pieza lógica: el alumno entiende que las 4 condiciones están en OR, así que CUALQUIERA que sea true dispara el rechazo. El recuadro de "X capas" da el panorama profesional sin abrir un tema de otro curso.

**Notas para Eric:** se proyecta en el sub-punto 2.4, leyendo el `if` en castellano sobre el Panel ("si el nombre está vacío, O el tipo no es ni ingreso ni gasto..."). Es el Panel donde se cobran los 3 conceptos previos del Momento: el Nivel 1 usa truthy/falsy (2.3), el Nivel 3 usa el `NaN` de `parseFloat` (2.1). Después de este Panel viene el code-along 2.5 donde el alumno tipea exactamente este `if`.

---

## Momento 3: Bucles while + for + cálculo del saldo

> **Estado:** Borrador
> **Paneles del Momento:** 2 (Panel 3.1 da la anatomía del `while` con el loop visual; Panel 3.2 da la anatomía del `for` clásico con el recuadro comparativo while vs for). El sub-punto 3.0 (hook en vivo del dolor), 3.2/3.4/3.6 (code-along) y 3.5 (`.toFixed(2)`, slide de presentación) no requieren Panel.

---

### Panel 3.1 — Anatomía del `while` + loop visual

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 3.1 (anatomía del while + loop visual): bloque while (condición) { bloque } con una flecha curva grande que sale del final del bloque y VUELVE al chequeo de la condición arriba, etiquetada "mientras la condición sea true, repetir". A un lado, recuadro con la regla de uso: "while = cuando NO sabés cuántas veces vas a repetir (lo decide algo externo: el usuario, un evento, un dato)". Al pie, el ejemplo del lab: let continuar = 'si'; while (continuar === 'si') { ... }.**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3 — anatomía atómica de un bucle: bloque + flecha de loop + regla + ejemplo)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de sintaxis) + Patrón 7 (Loop visual con flecha de retorno a la condición).
- **Concepto pedagógico que visualiza:** la **mecánica del bucle** — que el `while` chequea la condición ANTES de cada vuelta y repite el bloque mientras siga siendo true. Sin la flecha curva de retorno, "bucle" es una palabra. Con la flecha que sale del final del bloque y vuelve al chequeo, el alumno VE por qué se llama "bucle" (vuelve sobre sí mismo) y por qué un `while` mal escrito se vuelve infinito (la flecha nunca deja de girar).

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "WHILE — REPETIR MIENTRAS LA CONDICIÓN SEA TRUE"
- **Subtítulo** (gris oscuro, 20px): "Antes de cada vuelta evalúa la condición. Si es `true`, ejecuta el bloque y vuelve a chequear. Si es `false`, sale."
- **Sección central — anatomía con loop visual:**
  - Bloque de código (monospace azul **_#1971c2_**, fondo blanco con borde gris claro):
    ```
    while (condición) {
      bloque
    }
    ```
  - **Flecha curva grande** (negro **_#1e1e1e_**, gruesa) que sale del final del bloque (la llave de cierre) y VUELVE arriba al chequeo de la condición — etiqueta sobre la flecha (negro 16px): "mientras la condición sea `true`, repetir"
  - Anotación con flecha verde **_#2f9e44_** hacia `condición` → etiqueta: "se evalúa ANTES de cada vuelta (igual que un `if`, pero una y otra vez)"

- **Recuadro lateral — la regla de uso** (borde naranja **_#f08c00_**):
  - Encabezado (naranja **_#f08c00_** 16px): "Cuándo usar `while`"
  - Texto (negro 14px): "Cuando NO sabés cuántas veces vas a repetir — lo decide algo externo: el usuario, un evento, un dato. En el lab: ¿cuántos movimientos carga el usuario? Ni idea. Puede ser 1 o 30. El `while` se adapta."

- **Sección al pie — el `while` del lab (3 piezas)** (recuadro borde gris claro):
  - Bloque de código (monospace azul **_#1971c2_**):
    ```
    let continuar = 'si';
    while (continuar === 'si') {
      ...
      continuar = prompt('¿otro? (si/no)');
    }
    ```
  - 3 etiquetas con flechas a las piezas:
    - Flecha verde **_#2f9e44_** desde `let continuar = 'si'` → "VARIABLE DE CONTROL — declarada ANTES del bucle"
    - Flecha azul **_#1971c2_** desde `continuar === 'si'` → "LA CONDICIÓN — mientras siga `'si'`, repite"
    - Flecha rojo **_#e03131_** desde `continuar = prompt(...)` → "LA ACTUALIZACIÓN — adentro del bloque; si nunca cambia, el bucle es INFINITO"

- **Anotación destacada al pie** (recuadro con borde rojo **_#e03131_** grueso, ancho completo):
  - Texto (rojo **_#e03131_** 15px): "⚠ Bucle infinito: si la condición NUNCA pasa a `false`, el navegador se cuelga. Lo que evita el infinito acá es preguntarle al usuario '¿seguimos?' al final de cada vuelta. El usuario apaga el bucle."

**Anchor pedagógico:** la flecha curva de retorno es la pieza central — hace visible el "volver sobre sí mismo" que define un bucle. Las 3 etiquetas sobre el ejemplo del lab (control / condición / actualización) anclan que falta cualquiera de las 3 piezas (sobre todo la actualización) y el bucle se rompe o se vuelve infinito.

**Notas para Eric:** se proyecta en el sub-punto 3.1, después del hook en vivo del dolor (3.0, recargar la página a mano). Podés seguir la flecha curva con el dedo mientras explicás "repite, vuelve a chequear, repite". La anotación roja del bucle infinito prepara la pregunta de activación del code-along 3.2 ("¿qué pasa si te olvidás de la línea `continuar = prompt`?").

---

### Panel 3.2 — Anatomía del `for` clásico + recuadro comparativo while vs for

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 3.2 (anatomía del for clásico): bloque for (let i = 0; i < arr.length; i++) { bloque } con 3 flechas a 3 etiquetas. (1) let i = 0 → "INICIALIZACIÓN — corre UNA vez al arrancar. El contador parte en 0, el índice del primer elemento". (2) i < arr.length → "CONDICIÓN — se chequea antes de cada vuelta. Mientras sea true, repite". (3) i++ → "AVANCE — corre al final de cada vuelta. Suma 1 al contador". Recuadro lateral comparativo: "while = no sé cuántas (usuario decide) · for = sé cuántas (el array tiene N elementos)".**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para la anatomía de 3 partes + el recuadro comparativo while vs for + el detalle del `<` no `<=`)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de sintaxis con 3 flechas a las 3 partes del `for`) + Patrón 3 (Comparativa while vs for al costado).
- **Concepto pedagógico que visualiza:** las **3 partes del `for`** (init / condición / avance) y **cuándo usar `for` en vez de `while`**. Sin el Panel, `for (let i = 0; i < arr.length; i++)` es una fórmula que se copia. Con las 3 flechas, el alumno entiende qué hace cada parte y por qué la condición es `<` (no `<=`). El recuadro comparativo cierra la decisión: `while` = no sé cuántas, `for` = sí sé.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "FOR CLÁSICO — RECORRER UNA CANTIDAD DEFINIDA DE VECES"
- **Subtítulo** (gris oscuro, 20px): "El bucle estándar para recorrer un array de principio a fin. Controlado por un contador interno."
- **Sección 1 — anatomía del valor (arriba, centrada):**
  - Bloque de código grande (monospace azul **_#1971c2_**, fondo blanco con borde gris claro):
    ```
    for (let i = 0; i < arr.length; i++) {
      bloque
    }
    ```
  - 3 flechas con anotaciones (colores funcionales):
    - Flecha verde **_#2f9e44_** desde `let i = 0` → "1. INICIALIZACIÓN — corre UNA vez al arrancar. El contador parte en 0, el índice del primer elemento."
    - Flecha naranja **_#f08c00_** desde `i < arr.length` → "2. CONDICIÓN — se chequea antes de cada vuelta. Mientras sea `true`, repite."
    - Flecha azul **_#1971c2_** desde `i++` → "3. AVANCE — corre al final de cada vuelta. `i++` es la forma corta de `i = i + 1`."

- **Recuadro — el detalle del `<` (no `<=`)** (borde rojo **_#e03131_**):
  - Encabezado (rojo **_#e03131_** 16px): "⚠ Es MENOR que `length`, NO menor o igual"
  - Texto (negro 13px): "Si el array tiene 4 elementos, `length` es 4, y los índices válidos son 0, 1, 2, 3. Cuando `i` llega a 4 ya no es menor que 4 y paramos — justo después del último. Con `<=` te pasarías un índice (el `undefined` del Panel 1.1)."

- **Recuadro lateral comparativo — while vs for** (borde gris claro, 2 sub-bloques):
  - Encabezado (gris oscuro 16px): "¿`while` o `for`?"
  - Sub-bloque naranja **_#f08c00_**: "`while` = NO sé cuántas — lo decide el usuario / un evento / un dato"
  - Sub-bloque azul **_#1971c2_**: "`for` = SÍ sé cuántas — el array tiene N elementos (`valores.length`)"

- **Sección al pie — qué hace `i` en cada vuelta** (recuadro borde gris claro):
  - Texto (negro 13px): "En cada vuelta `i` vale algo distinto: primero 0, después 1, después 2... y eso te deja acceder a `arr[i]` — cada elemento, uno por uno. En el lab recorrés `valores` entero para sumar el saldo."

**Anchor pedagógico:** las 3 flechas separan el `for` en sus 3 responsabilidades (arrancar el contador / decidir cuándo parar / avanzar), desmitificando la fórmula. El recuadro del `<` vs `<=` conecta de vuelta con el bug del índice 0 del Panel 1.1. El recuadro comparativo while/for ancla la regla de decisión que el alumno usará toda su carrera.

**Notas para Eric:** se proyecta en el sub-punto 3.3, antes del code-along que recorre `valores` para calcular el saldo. El recuadro comparativo es el que cierra la pregunta implícita "¿por qué acá uso `for` y no `while`?". Podés señalar el sub-bloque azul mientras decís "acá SÍ sé cuántas: son `valores.length` vueltas". Conecta con la convención de signos del Panel 1.2 (sumar todo el array funciona porque los gastos ya son negativos).

---

## Momento 4: Refactor a funciones imperativas

> **Estado:** Borrador
> **Paneles del Momento:** 2 (Panel 4.1 contrasta función imperativa vs función pura — semilla a C06; Panel 4.2 muestra el refactor de extracción antes/después). Los sub-puntos 4.3, 4.4 y 4.5 (code-along del refactor) no requieren Panel — son ejecución en VS Code.

---

### Panel 4.1 — Función imperativa vs función pura (semilla a C06)

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 4.1 (función imperativa vs función pura, semilla a C06): dos columnas. Izquierda "FUNCIÓN IMPERATIVA (hoy)" con el mockup function registrarMovimiento() { ... nombres.push(...); valores.push(...); } + 2 flechas rojas que salen de la función hacia una caja externa "estado global: nombres, valores" — leyenda "no recibe nada por parámetros · modifica variables que viven AFUERA". Derecha "FUNCIÓN PURA (C06)" con el mockup function sumar(a, b) { return a + b; } + flecha verde hacia "valor de retorno" — leyenda "recibe todo por parámetros · devuelve UN valor · no toca nada afuera". Anotación grande al pie: "EL CÓDIGO DE HOY SE REFACTORIZA EN C06 — el dolor de hoy es la motivación del próximo módulo".**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9, comparativa horizontal X-vs-Y: imperativa a la izquierda con flechas al estado global, pura a la derecha con flecha al return)
- **Patrón canónico de referencia:** Patrón 3 (Comparativa X vs Y — imperativa vs pura) + Patrón 7 (flechas de efecto hacia el estado global externo).
- **Concepto pedagógico que visualiza:** el **contraste imperativa vs pura** — que una función imperativa no recibe parámetros y toca variables de afuera, mientras una función pura recibe todo y devuelve un valor sin tocar nada externo. Sin el Panel, "función imperativa" suena a etiqueta arbitraria. Con las 2 columnas (flechas rojas saliendo hacia el estado global vs flecha verde al return), el alumno VE la diferencia estructural y entiende que la imperativa de hoy es a propósito, para sentir sus límites antes de C06.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "FUNCIÓN IMPERATIVA vs FUNCIÓN PURA"
- **Subtítulo** (gris oscuro, 20px): "Hoy escribimos imperativo a propósito — para que SIENTAS sus límites antes de conocer la alternativa en C06."
- **Layout en 2 columnas:**

  **Columna izquierda — FUNCIÓN IMPERATIVA (HOY) (borde rojo **_#e03131_**):**
  - Encabezado (rojo **_#e03131_** 22px): "FUNCIÓN IMPERATIVA (hoy)"
  - Bloque de código (monospace azul **_#1971c2_**):
    ```
    function registrarMovimiento() {
      // ...
      nombres.push(nombre);
      valores.push(valor);
    }
    ```
  - 2 flechas rojas **_#e03131_** saliendo de la función hacia una caja externa (borde rojo **_#e03131_**): "ESTADO GLOBAL: nombres, valores"
  - Leyenda (negro 14px): "No recibe nada por parámetros (`()` vacíos). Lee y MODIFICA variables que viven AFUERA de ella."
  - Etiqueta (rojo **_#e03131_** 13px): "Produce efectos: `push`, `console.log`, `alert`. No solo calcula — cambia cosas del mundo."

  **Columna derecha — FUNCIÓN PURA (C06) (borde verde **_#2f9e44_**):**
  - Encabezado (verde **_#2f9e44_** 22px): "FUNCIÓN PURA (C06)"
  - Bloque de código (monospace azul **_#1971c2_**):
    ```
    function sumar(a, b) {
      return a + b;
    }
    ```
  - Flecha verde **_#2f9e44_** saliendo de la función hacia una caja: "VALOR DE RETORNO"
  - Leyenda (negro 14px): "Recibe TODO lo que necesita por parámetros. Devuelve UN valor. No toca nada de afuera."
  - Etiqueta (verde **_#2f9e44_** 13px): "`sumar(a, b)` solo conoce `a` y `b` — no le importa el resto del programa. Más robusta y fácil de testear."

- **Recuadro al pie — por qué muestro las dos** (borde gris claro):
  - Texto (negro 13px): "La imperativa es más fácil al principio (secuencia clara, paso a paso) pero a medida que el código crece se vuelve frágil: cualquier función puede tocar cualquier variable global, y rastrear quién rompió qué se complica."

- **Anotación destacada al pie** (recuadro con borde naranja **_#f08c00_** grueso, ancho completo):
  - Texto (naranja **_#f08c00_** 16px): "EL CÓDIGO DE HOY SE REFACTORIZA EN C06 — el dolor de hoy es la motivación del próximo módulo (programación funcional)."

**Anchor pedagógico:** las flechas rojas saliendo hacia el estado global (imperativa) vs la flecha verde al return (pura) hacen tangible la diferencia estructural. El alumno ve que "imperativa" significa literalmente "enchufada a variables de afuera". La anotación naranja al pie es la semilla narrativa a C06: hoy se hace imperativo a propósito.

**Notas para Eric:** se proyecta en el sub-punto 4.1, antes de tocar código. Es un Panel de "contraste de altitud" — el alumno aún no escribió una función pura, pero ve hacia dónde va el módulo. Podés señalar las flechas rojas mientras decís "las tres funciones están enchufadas al estado global" y la flecha verde de la derecha para "esto es lo que viene". No es para code-along — es para fijar el modelo mental del refactor que sigue (Panel 4.2).

---

### Panel 4.2 — Refactor de extracción antes/después: código suelto → organizado en funciones

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 4.2 (refactor de extracción, antes/después): izquierda "ANTES — todo suelto" con un bloque alto mostrando globales arriba, un while con 15 líneas de captura+validación adentro, y un for + saldo colgando al final. Derecha "DESPUÉS — organizado" con globales arriba, 3 funciones con nombre, y un while chiquito que adentro solo dice registrarMovimiento() + mostrarResumen() al final. Flecha grande entre ambos: "EXTRAEMOS la lógica a funciones — el código viejo DESAPARECE de su lugar". Anotación al pie en rojo: "≠ refactor aditivo de C04: allá NO borrábamos nada (solo agregábamos var()). Acá CORTAMOS de un lado y PEGAMOS en otro — el original se borra."**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para los 2 estados del archivo —antes alto y desordenado, después organizado— + flecha central + contraste con C04 al pie)
- **Patrón canónico de referencia:** Patrón 9 (Transición de estados / antes-después) + Patrón 3 (Comparativa del archivo desordenado vs organizado).
- **Concepto pedagógico que visualiza:** el **refactor de extracción** — que mover código suelto DENTRO de funciones hace que el original desaparezca de su lugar. Sin el Panel, "extraer" es abstracto y el alumno deja código duplicado (el error #1 del Momento). Con el antes/después, el alumno ve que el `while` gigante de la izquierda se convierte en un `while` de 2 líneas a la derecha, y que el código de captura ahora vive en una función. El contraste con el refactor ADITIVO de C04 evita que confunda las dos reglas opuestas.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "REFACTOR DE EXTRACCIÓN — DE CÓDIGO SUELTO A FUNCIONES"
- **Subtítulo** (gris oscuro, 20px): "Mover un bloque que ya funciona DENTRO de una función. El original deja de existir en su lugar; queda solo la llamada."
- **Layout en 2 columnas conectadas por una flecha central:**

  **Columna izquierda — ANTES (todo suelto) (borde rojo **_#e03131_**):**
  - Encabezado (rojo **_#e03131_** 22px): "ANTES — todo suelto"
  - Mockup de un archivo alto y apretado (representación esquemática, monospace gris):
    - Bloque arriba: `let nombres = []; let valores = [];` (etiqueta: "globales")
    - Bloque alto en el medio: `while (continuar === 'si') {` ... 15 líneas de captura + validación adentro ... `}` (etiqueta roja: "while GIGANTE con toda la lógica adentro")
    - Bloque colgando al final: `let saldo = 0; for (...) { ... }` + `console.log(saldo)` (etiqueta roja: "for + saldo colgando suelto")

  **Columna derecha — DESPUÉS (organizado) (borde verde **_#2f9e44_**):**
  - Encabezado (verde **_#2f9e44_** 22px): "DESPUÉS — organizado"
  - Mockup de un archivo ordenado (monospace, secciones claras):
    - Bloque arriba: `let nombres = []; let valores = [];` (etiqueta: "globales")
    - 3 funciones con nombre (cajas verdes): `registrarMovimiento()` · `calcularSaldo()` · `mostrarResumen()`
    - Bloque chico al final: `while (continuar === 'si') { registrarMovimiento(); ... }` + `mostrarResumen();` (etiqueta verde: "while chiquito: solo llama a la función")

  - **Flecha grande central** (negro **_#1e1e1e_**, gruesa) de izquierda a derecha — etiqueta sobre la flecha: "EXTRAEMOS la lógica a funciones — el código viejo DESAPARECE de su lugar"

- **Recuadro — la regla de oro** (borde rojo **_#e03131_**):
  - Encabezado (rojo **_#e03131_** 16px): "⚠ Si queda duplicado afuera, BÓRRALO"
  - Texto (negro 13px): "Después de mover el código no puede quedar NADA de captura/validación/saldo suelto fuera de las funciones. Si lo dejás duplicado en los dos lugares, el programa lo ejecuta dos veces y se rompe."

- **Anotación destacada al pie — contraste con C04** (recuadro con borde rojo **_#e03131_** grueso, ancho completo):
  - Encabezado (rojo **_#e03131_** 15px): "≠ refactor ADITIVO de C04"
  - Texto (negro 14px): "En C04 NO borrábamos nada — solo agregábamos líneas con `var()`. Hoy es lo OPUESTO: CORTÁS de un lado y PEGÁS en otro; el original se borra. Dos refactors, dos reglas opuestas. C04: agregar sin borrar. Hoy: mover y borrar el original."

**Anchor pedagógico:** la comparativa antes/después es la pieza central — el alumno ve físicamente cómo el `while` gigante se encoge a 2 líneas y el código migra a las funciones. El recuadro de la regla de oro y el contraste con C04 al pie atacan directamente el error #1 del Momento (dejar código duplicado afuera), que Eric repite 3 veces durante el code-along.

**Notas para Eric:** se proyecta en el sub-punto 4.2, después del Panel 4.1 y antes del code-along del refactor (4.3-4.5). El contraste con C04 es crítico: el alumno tiene fresco el refactor aditivo (no borrar nada) y este es el opuesto. Podés señalar el `while` gigante de la izquierda y el `while` chiquito de la derecha para mostrar la transformación. La regla de oro de este Panel es la que repetís 3 veces durante el code-along ("si queda duplicado afuera, bórrenlo").

---

## Momento 5: Cierre + dolor de arrays paralelos + puente a C06/C07

> **Sin paneles Excalidraw** (demo en consola en vivo + slides). El M5 es un **gancho ejecutable** (SKILL §5.3.1): Eric ejecuta el desalineamiento de los arrays paralelos EN VIVO en la consola del navegador para que el alumno VEA cómo el sistema se descalibra silenciosamente, motivando C07 (objetos como solución). El dolor ya quedó sembrado visualmente en el **Panel 1.2** (caja roja de fragilidad) — el M5 lo cobra ejecutándolo, no con un nuevo diagrama.

---

## Resumen de Paneles de la Clase 05

| Panel | Momento | Sub-punto | Tipo | Dimensiones | Estado |
|---|---|---|---|---|---|
| 1.1 — Anatomía de un array | M1 | 1.3 | Imagen-slide | 1400×1050 | Borrador |
| 1.2 — Arrays paralelos del proyecto | M1 | 1.5 | Imagen-slide | 1400×1050 | Borrador |
| 2.1 — Las 3 APIs del navegador | M2 | 2.1 | Imagen-slide | 1400×900 | Borrador |
| 2.2 — Booleano + cómo decide el `if` | M2 | 2.2 | Imagen-slide | 1400×900 | Borrador |
| 2.3 — Truthy / falsy | M2 | 2.3 | Imagen-slide | 1400×900 | Borrador |
| 2.4 — El `if` de validación (4 niveles) | M2 | 2.4 | Imagen-slide | 1400×1050 | Borrador |
| 3.1 — Anatomía del `while` + loop visual | M3 | 3.1 | Imagen-slide | 1200×900 | Borrador |
| 3.2 — Anatomía del `for` clásico | M3 | 3.3 | Imagen-slide | 1400×1050 | Borrador |
| 4.1 — Función imperativa vs pura | M4 | 4.1 | Imagen-slide | 1400×900 | Borrador |
| 4.2 — Refactor de extracción antes/después | M4 | 4.2 | Imagen-slide | 1400×1050 | Borrador |

**Total:** 10 Paneles (2 M1 + 4 M2 + 2 M3 + 2 M4 · M5 sin paneles).
