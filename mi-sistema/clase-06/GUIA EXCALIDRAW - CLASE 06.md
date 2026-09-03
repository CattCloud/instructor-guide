# GUÍA EXCALIDRAW — CLASE 06: Programación Funcional + Arrow Functions

> **Curso:** Code 201
> **Módulo:** M2 — Clase 2 de 4
> **Estado:** Paneles documentados — pendiente validación de Eric
> **Total Paneles:** 12 (3 M1 + 3 M2 + 3 M3 + 3 M4 · M5 no tiene paneles, es code-along)
> **Fecha:** 2026-05-28
> **Fuente del guion:** mi-sistema/clase-06/CLASE 06.md
> **Patrón visual común:** estilo "anatomía visual" tipo samanthaming.com — bloques con borde claro, etiquetas con flechas funcionales, código en monospace azul **_#1971c2_**, paleta canónica restringida a `#1e1e1e` negro / `#e03131` rojo / `#1971c2` azul / `#f08c00` naranja / `#2f9e44` verde / `#e8590c` naranja oscuro. Todos son Imagen-slide porque requieren precisión geométrica (anatomías de sintaxis con flechas a cada zona, paralelismos de 2 columnas, líneas de producción, tablas de iteración).

---

## Momento 1: Apertura + funciones como valores + arrow functions

> **Estado:** Borrador
> **Paneles del Momento:** 3 (Panel 1.1 establece "funciones como valores" mediante el paralelismo número/función; Panel 1.2 da la anatomía de la arrow function con sus dos zonas y las dos tablas de reglas; Panel 1.3 da la tabla de decisión arrow vs function). El sub-punto 1.1 (apertura + gancho del **_for_** vs **_.reduce_**, se muestra en VS Code) y 1.3 (expresión vs declaración + setup, ejecución en VS Code) no requieren Panel.

---

### Panel 1.1 — Funciones como valores: el número y la función soportan las MISMAS 3 operaciones

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 1.1 (funciones como valores): a la izquierda un número en sus 3 operaciones (guardar / copiar / pasar), a la derecha una función en las MISMAS 3 operaciones, en paralelo. Resaltar que la función NO lleva paréntesis de llamada — se mueve, no se ejecuta.**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9, horizontal para las 2 columnas paralelas —número a la izquierda, función a la derecha— con las 3 operaciones alineadas fila por fila)
- **Patrón canónico de referencia:** Patrón 3 (Comparativa X vs Y — el número y la función en paralelo) + Patrón 1 (Anatomía de las 3 operaciones descompuestas).
- **Concepto pedagógico que visualiza:** las **funciones de primera clase** — que en JavaScript una función ES un dato, igual que un número: se guarda, se copia y se pasa. Sin el paralelismo visual lado a lado, "una función es un valor" es una afirmación abstracta. Con las dos columnas alineadas (las 3 mismas operaciones aplicadas al número y a la función), el alumno VE que las operaciones son idénticas — y que la clave es que la función va SIN paréntesis de llamada, porque se mueve, no se ejecuta.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "FUNCIONES COMO VALORES — UNA FUNCIÓN ES UN DATO MÁS"
- **Subtítulo** (gris oscuro, 20px): "Lo que hacés con un número —guardar, copiar, pasar— lo hacés IGUAL con una función. Por eso se la puede pasar como argumento."
- **Layout en 2 columnas paralelas, alineadas fila por fila por operación:**

  **Columna izquierda — UN NÚMERO (borde azul **_#1971c2_**):**
  - Encabezado (azul **_#1971c2_** 22px): "UN NÚMERO (lo que ya sabés)"
  - Fila 1 — GUARDAR (etiqueta verde **_#2f9e44_** "1. GUARDAR en una variable") + código monospace azul **_#1971c2_**: `let edad = 25;`
  - Fila 2 — COPIAR (etiqueta naranja **_#f08c00_** "2. COPIAR / mover a otro lado") + código: `let otraEdad = edad;`
  - Fila 3 — PASAR (etiqueta azul **_#1971c2_** "3. PASAR como argumento a otra función") + código: `console.log(edad);`

  **Columna derecha — UNA FUNCIÓN (borde verde **_#2f9e44_**):**
  - Encabezado (verde **_#2f9e44_** 22px): "UNA FUNCIÓN (lo mismo, igual)"
  - Fila 1 — GUARDAR (etiqueta verde **_#2f9e44_** "1. GUARDAR en una variable") + código: `let saludar = function() { return 'Hola'; };`
  - Fila 2 — COPIAR (etiqueta naranja **_#f08c00_** "2. COPIAR a otra variable") + código: `let otraReferencia = saludar;`
  - Fila 3 — PASAR (etiqueta azul **_#1971c2_** "3. PASAR como argumento a otra función") + código: `ejecutar(saludar);`

- **Líneas horizontales discretas** (gris claro punteado) conectando cada operación de la columna izquierda con su gemela en la columna derecha (fila 1 con fila 1, etc.), reforzando que son la MISMA operación.

- **Recuadro destacado al pie — la trampa del paréntesis** (recuadro con borde rojo **_#e03131_** grueso, ancho completo):
  - Encabezado (rojo **_#e03131_** 18px): "⚠ FÍJATE: la función va SIN paréntesis de llamada"
  - Texto (negro 14px): "En la columna derecha es `saludar`, NO `saludar()`. Con paréntesis la EJECUTÁS (la llamás). Sin paréntesis la MOVÉS como un valor. Acá la estamos moviendo, no llamando — por eso nunca lleva `()`."

- **Nota inferior** (negro **_#1e1e1e_**, 16px): "El nombre técnico es 'funciones de primera clase'. Es la base de TODO lo de hoy: si una función se puede pasar como argumento, se la puede entregar a otra función para que la use. Eso son map, filter y reduce."

**Anchor pedagógico:** las dos columnas alineadas fila por fila son la pieza central — convierten "una función es un dato" de afirmación verbal a hecho visual: el alumno ve las 3 mismas operaciones a ambos lados. El recuadro rojo del paréntesis ancla el error #1 (escribir `saludar()` cuando se quiere mover, no llamar) antes de que aparezca al pasar callbacks en M2/M3.

**Notas para Eric:** se proyecta en el sub-punto 1.2, después de mostrar el paralelismo en VS Code. Podés señalar la fila 1 de cada columna mientras decís "guardo un número / guardo una función, lo mismo", y apuntar al recuadro rojo cuando insistís en que la función va sin paréntesis. Es la base que habilita el "se pasa como argumento" que cobra M2 (orden superior).

---

### Panel 1.2 — Anatomía de la arrow function: 2 zonas (parámetros / cuerpo) + Tabla A + Tabla B

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 1.2 (anatomía y reglas de la arrow function). Arriba: la SINTAXIS GENERAL de una arrow señalando sus dos zonas separadas por la flecha — **_(parámetros) => { cuerpo }_** — con una etiqueta marcando "ZONA PARÁMETROS" a la izquierda de la **_=>_** y "ZONA CUERPO" a la derecha. Abajo: DOS tablas de reglas de simplificación, una por zona. Tabla A "Reglas de los PARÁMETROS" (según cuántos hay). Tabla B "Reglas del CUERPO" (según cuántas líneas). Mensaje central: "cada zona de la arrow se simplifica con SUS propias reglas — independientes entre sí".**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para la sintaxis general con las 2 zonas marcadas arriba + las 2 tablas de reglas debajo + la transformación paso a paso)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de sintaxis — la arrow descompuesta en 2 zonas señaladas por la flecha) + Patrón 2 (las dos sub-tablas A y B de reglas por zona).
- **Concepto pedagógico que visualiza:** la **estructura de dos zonas de la arrow function** — que los parámetros (izquierda de la **_=>_**) y el cuerpo (derecha) se simplifican con reglas INDEPENDIENTES. Sin el Panel, las 4 reglas de simplificación parecen un set arbitrario de excepciones. Con las 2 zonas marcadas y una tabla por zona, el alumno entiende que solo hay que decidir dos cosas por separado: "¿cuántos parámetros?" (Tabla A) y "¿cuántas líneas de cuerpo?" (Tabla B), y combinarlas libremente.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "ARROW FUNCTION — DOS ZONAS, DOS JUEGOS DE REGLAS"
- **Subtítulo** (gris oscuro, 20px): "Una expresión de función anónima escrita corta. Sacás `function`, ponés `=>`. La flecha parte la arrow en dos zonas que se simplifican por separado."
- **Sección 1 — la sintaxis general con las 2 zonas (arriba, centrada, grande):**
  - Bloque de código (monospace azul **_#1971c2_**, fondo blanco con borde gris claro):
    ```
    (parámetros) => { cuerpo }
    ```
  - Una **llave/corchete visual a la izquierda de la `=>`** etiquetada (azul **_#1971c2_** 18px): "ZONA PARÁMETROS — qué entra"
  - Una **llave/corchete visual a la derecha de la `=>`** etiquetada (verde **_#2f9e44_** 18px): "ZONA CUERPO — qué hace / qué devuelve"
  - La flecha **_=>_** resaltada en el centro (naranja **_#f08c00_**) con etiqueta: "la flecha separa las dos zonas"

- **Sección 2 — las 2 tablas de reglas, lado a lado:**

  **Tabla A — Reglas de la ZONA PARÁMETROS (borde azul **_#1971c2_**):**
  - Encabezado (azul **_#1971c2_** 18px): "TABLA A — Parámetros (según cuántos hay)"
  - Fila 1: "**0 parámetros** → paréntesis obligatorios: `() => ...`"
  - Fila 2: "**1 parámetro** → paréntesis OPCIONALES: `valor => ...`"
  - Fila 3: "**2 o más** → paréntesis obligatorios: `(a, b) => ...`"

  **Tabla B — Reglas de la ZONA CUERPO (borde verde **_#2f9e44_**):**
  - Encabezado (verde **_#2f9e44_** 18px): "TABLA B — Cuerpo (según cuántas líneas)"
  - Fila 1: "**1 sola expresión** → sin `{}` ni `return`, return implícito: `... => valor * 2`"
  - Fila 2: "**Varias líneas** → con `{}` y `return` explícito: `... => { ...; return X; }`"

- **Sección 3 — la transformación paso a paso (recuadro borde gris claro):**
  - Encabezado (gris oscuro 14px): "De `function` a la arrow más compacta — una zona por vez:"
  - Bloque de código (monospace azul **_#1971c2_**):
    ```
    const duplicar = function(valor) { return valor * 2; };   // 1. function normal
    const duplicar = (valor) => { return valor * 2; };        // 2. saco function, agrego =>
    const duplicar = (valor) => valor * 2;                    // 3. CUERPO: 1 expresión (Tabla B f.1)
    const duplicar = valor => valor * 2;                      // 4. PARÁMETROS: 1 param (Tabla A f.2)
    ```
  - Texto (negro 13px): "El paso 3 simplifica la zona CUERPO; el paso 4 la zona PARÁMETROS. Son decisiones separadas, cada una con su tabla."

- **Recuadro destacado al pie — el error #1 con arrows** (recuadro con borde rojo **_#e03131_** grueso, ancho completo):
  - Encabezado (rojo **_#e03131_** 16px): "⚠ El error #1: llaves SIN return"
  - Texto (negro 14px): "`valor => { valor * 2 }` devuelve `undefined`. Pusiste las llaves pero olvidaste el `return` adentro. Con llaves, el `return` es obligatorio. Sin llaves, es implícito. Una cosa o la otra — nunca llaves sin return."

**Anchor pedagógico:** las 2 zonas marcadas sobre la sintaxis general son la pieza central — separan visualmente "qué entra" de "qué devuelve" y anclan que cada zona tiene sus propias reglas. Las dos tablas (A y B) convierten las 4 reglas en dos decisiones independientes y combinables. El recuadro rojo del `{}` sin `return` ataca el error #1 que Eric demuestra en vivo justo antes del code-along.

**Notas para Eric:** se proyecta en el sub-punto 1.4, durante la explicación de las dos zonas y al recorrer la transformación paso a paso. Podés señalar la zona izquierda mientras leés la Tabla A y la zona derecha mientras leés la Tabla B, mostrando que se eligen por separado. El recuadro rojo prepara la demo del `undefined` (predecir antes de ejecutar) y la pregunta de activación (`sumar` como arrow compacta).

---

### Panel 1.3 — Tabla de decisión: ¿arrow o `function`?

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 1.3 (tabla de decisión arrow vs function): dos filas — "¿es corta / la voy a pasar como argumento a otra función?" → arrow; "¿es una función con nombre que llamo en varios lados?" → function.**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9, horizontal para las 2 filas de decisión con su ejemplo de código a cada lado + la regla en una frase al pie)
- **Patrón canónico de referencia:** Patrón 3 (Comparativa X vs Y — arrow vs function como tabla de decisión de 2 filas) + Patrón 8 (cada criterio con su bloque de código de ejemplo al costado).
- **Concepto pedagógico que visualiza:** el **criterio de cuándo usar cada forma** — que no todo se escribe arrow ni todo `function`. Sin el Panel, "usá arrow cuando conviene" es vago. Con la tabla de 2 filas (cada caso con su pregunta-disparador y su ejemplo de código), el alumno tiene un árbol de decisión binario: si la pasás como argumento o es corta → arrow; si la llamás por nombre en varios lados → function.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "¿ARROW O FUNCTION? — UN CRITERIO SIMPLE"
- **Subtítulo** (gris oscuro, 20px): "No todo se escribe con arrow. Una pregunta decide cuál conviene en cada caso."
- **Sección central — tabla de decisión de 2 filas:**

  **Fila 1 — ARROW (borde verde **_#2f9e44_**):**
  - Pregunta disparador (verde **_#2f9e44_** 18px): "¿Es CORTA, o la voy a PASAR como argumento a otra función?"
  - Veredicto (verde **_#2f9e44_** 22px): "→ ARROW"
  - Bloque de código de ejemplo (monospace azul **_#1971c2_**):
    ```
    const duplicar = numero => numero * 2;
    duplicar(5);   // 10
    ```
  - Etiqueta (gris oscuro 13px): "Corta, anónima, guardada en una variable. Y el caso estrella: cuando se la pasás a un método de array (lo verás después del receso)."

  **Fila 2 — FUNCTION (borde azul **_#1971c2_**):**
  - Pregunta disparador (azul **_#1971c2_** 18px): "¿Es una función CON NOMBRE que llamo en VARIOS lados?"
  - Veredicto (azul **_#1971c2_** 22px): "→ FUNCTION"
  - Bloque de código de ejemplo (monospace azul **_#1971c2_**):
    ```
    function saludar(nombre) {
      return 'Hola ' + nombre;
    }
    saludar('Ana');
    saludar('Luis');
    ```
  - Etiqueta (gris oscuro 13px): "Función de primer nivel, declarada una vez, llamada en varios lados."

- **Recuadro al pie — el caso estrella de la arrow** (borde naranja **_#f08c00_**):
  - Encabezado (naranja **_#f08c00_** 16px): "El 90% del uso real de la arrow:"
  - Texto (negro 13px): "Pasarla como argumento a otra función. Ese caso —que es donde la arrow se vuelve LA forma natural— lo van a sentir en vivo después del receso, con los métodos de array. Por ahora, quédense con el criterio."

- **Anotación destacada al pie** (recuadro con borde negro **_#1e1e1e_** grueso, ancho completo):
  - Texto (negro **_#1e1e1e_** 18px, centrado): "Si la llamás por NOMBRE en varios lugares → `function`. Si es CORTA o la PASÁS → arrow."

**Anchor pedagógico:** las 2 filas con su pregunta disparador convierten la decisión en un árbol binario, no en una regla de memoria. El recuadro naranja del "caso estrella" siembra el puente a M3/M4 (la arrow como callback de los métodos de array), que es donde el criterio cobra sentido pleno.

**Notas para Eric:** se proyecta en el sub-punto 1.5, leyendo la tabla junto al alumno. Podés apuntar al recuadro naranja al sembrar "esto lo van a sentir después del receso". Es el cierre del bloque arrow de M1: el alumno ya sabe escribirlas (Panel 1.2) y ahora sabe cuándo conviene cada forma.

---

## Momento 2: Función pura + orden superior + callback universal

> **Estado:** Borrador
> **Paneles del Momento:** 3 (Panel 2.1 contrasta función pura vs impura; Panel 2.2 da la anatomía de una función de orden superior con el ejemplo casero **_transformar_**; Panel 2.3 presenta las 5 funciones de array como grupo + la estructura general del callback **_(elemento, indice, array)_**). El sub-punto 2.1 incluye el code-along del test de pureza (ejecución), pero el concepto se ancla en su Panel.

---

### Panel 2.1 — Función pura vs impura

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 2.1 (función pura vs impura): a la izquierda "PURA" (fondo verde) con una arrow que solo depende de su parámetro y solo devuelve un valor; a la derecha "IMPURA" (fondo rojo) con dos casos — una que lee una variable de afuera y otra que hace **_console.log_**. Etiqueta al pie: "PURA = mismo input, mismo output + no toca nada de afuera".**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9, comparativa horizontal de 2 columnas: pura verde a la izquierda, impura roja con sus 2 casos a la derecha)
- **Patrón canónico de referencia:** Patrón 3 (Comparativa X vs Y — pura vs impura) + Patrón 1 (cada función descompuesta con sus flechas de dependencia/efecto).
- **Concepto pedagógico que visualiza:** las **2 condiciones de una función pura** (mismo input/mismo output + sin efectos secundarios) y su opuesto, la impura. Sin el Panel, "pura" es jerga. Con las 2 columnas (verde sin flechas hacia afuera vs roja con flechas que leen variables externas o producen `console.log`), el alumno VE que pura significa literalmente "no toca nada de afuera" — y cierra el contraste sembrado en C05 (las imperativas eran el ejemplo de lo impuro).

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "FUNCIÓN PURA vs IMPURA"
- **Subtítulo** (gris oscuro, 20px): "Pura = con la misma entrada da siempre lo mismo, y no toca nada de afuera. Recibe, calcula, devuelve. Punto."
- **Layout en 2 columnas:**

  **Columna izquierda — PURA (fondo verde claro **_#b2f2bb_**, borde verde **_#2f9e44_**):**
  - Encabezado (verde **_#2f9e44_** 24px): "PURA"
  - Bloque de código (monospace azul **_#1971c2_**):
    ```
    const cuadrado = valor => valor * valor;
    ```
  - 2 chequeos con tilde verde **_#2f9e44_**:
    - "✓ Mismo input, mismo output: le doy `5`, me da `25`, SIEMPRE."
    - "✓ No toca nada de afuera: solo usa su parámetro `valor` y devuelve."
  - Etiqueta (verde **_#2f9e44_** 13px): "Predecible y fácil de probar: das una entrada, verificás la salida."

  **Columna derecha — IMPURA (fondo rojo claro **_#ffc9c9_**, borde rojo **_#e03131_**):**
  - Encabezado (rojo **_#e03131_** 24px): "IMPURA (dos casos)"
  - **Caso 1 — lee de afuera:**
    - Bloque de código (monospace azul **_#1971c2_**):
      ```
      let factor = 10;
      const multiplicar = valor => valor * factor;
      ```
    - Flecha roja **_#e03131_** desde `factor` (dentro de la función) hacia la variable externa `factor` → etiqueta: "✗ Depende de una variable de AFUERA. Si `factor` cambia, la misma entrada da otro resultado."
  - **Caso 2 — produce efecto:**
    - Bloque de código (monospace azul **_#1971c2_**):
      ```
      const imprimir = valor => console.log(valor);
      ```
    - Etiqueta roja **_#e03131_**: "✗ Produce un EFECTO SECUNDARIO (imprime). No devuelve nada útil — su trabajo es el efecto."

- **Recuadro — qué es un efecto secundario** (borde naranja **_#f08c00_**):
  - Encabezado (naranja **_#f08c00_** 16px): "Efecto secundario:"
  - Texto (negro 13px): "Cualquier cosa que la función hace ADEMÁS de devolver su valor: tocar una variable de afuera, `console.log`, cambiar el HTML, pedir datos a un servidor. NO son malos —son necesarios— pero el paradigma funcional los SEPARA: cálculo en funciones puras, efectos juntos en pocos lugares."

- **Anotación destacada al pie** (recuadro con borde negro **_#1e1e1e_** grueso, ancho completo):
  - Texto (negro **_#1e1e1e_** 18px, centrado): "PURA = mismo input, mismo output + no toca nada de afuera"

**Anchor pedagógico:** la oposición visual de las 2 columnas (verde sin flechas externas vs roja con flechas que salen/leen afuera) hace tangible que pureza es "no enchufarse a nada externo". La flecha roja del caso 1 (leer `factor`) y la etiqueta del caso 2 (`console.log`) anclan las dos formas de impureza. El recuadro del efecto secundario evita que el alumno crea que los efectos son "malos".

**Notas para Eric:** se proyecta en el sub-punto 2.1, después de cerrar el contraste con C05 (las imperativas eran impuras). El test de 2 preguntas del code-along ("¿mismo input/output? ¿toca algo de afuera?") se aplica señalando cada columna. La anotación negra al pie es la frase que querés que se lleven. Prepara M2.2: ahora que saben qué es una función buena, ¿quién la recibe? Las de orden superior.

---

### Panel 2.2 — Anatomía de una función de orden superior + ejemplo `transformar`

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 2.2 (anatomía de una función de orden superior + ejemplo). ARRIBA, la anatomía general: la firma **_funcion(dato, callback)_** con dos etiquetas — "parámetro normal (un dato)" sobre el primer parámetro y "parámetro que ES una función (el callback)" sobre el segundo — y una flecha que entra al cuerpo mostrando "adentro, EJECUTA el callback que recibió". ABAJO, el ejemplo concreto **_transformar(valor, operacion)_** con dos llamadas: **_transformar(5, n => n*2)_** → 10 y **_transformar(5, n => n+100)_** → 105, resaltando que la MISMA función da resultados distintos según el callback que recibe. (NO usar **_.map_** acá — todavía no se vio; eso es M3.)**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para la anatomía de la firma con 2 etiquetas arriba + el ejemplo concreto con sus 2 llamadas y resultados abajo)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de sintaxis — la firma `funcion(dato, callback)` con flechas a cada parámetro) + Patrón 3 (las 2 llamadas con distinto callback que dan resultados distintos).
- **Concepto pedagógico que visualiza:** la **función de orden superior** (recibe otra función como parámetro) y el **callback** (la función que se le pasa). Sin el Panel, "función de orden superior" es una etiqueta intimidante. Con la firma `funcion(dato, callback)` señalada (uno es un dato, el otro ES una función) + el ejemplo `transformar` con 2 callbacks distintos dando 2 resultados, el alumno VE que la misma función cambia de comportamiento según el callback — el mecanismo exacto que usan map/filter/reduce.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "FUNCIÓN DE ORDEN SUPERIOR — RECIBE OTRA FUNCIÓN"
- **Subtítulo** (gris oscuro, 20px): "Una función que recibe otra función como parámetro. Esa función que le pasás se llama callback. Es lo que habilita map, filter y reduce."
- **Sección 1 — la anatomía general de la firma (arriba, centrada):**
  - Bloque de código (monospace azul **_#1971c2_**, fondo blanco con borde gris claro):
    ```
    function funcion(dato, callback) {
      return callback(dato);
    }
    ```
  - Flecha azul **_#1971c2_** sobre el primer parámetro `dato` → etiqueta: "parámetro normal (un dato)"
  - Flecha verde **_#2f9e44_** sobre el segundo parámetro `callback` → etiqueta: "parámetro que ES una función (el CALLBACK)"
  - Flecha naranja **_#f08c00_** entrando al cuerpo (a `callback(dato)`) → etiqueta: "adentro, EJECUTA el callback que recibió — vos no lo llamás, lo llama ella por vos"

- **Sección 2 — el ejemplo concreto `transformar` (abajo):**
  - Bloque de código (monospace azul **_#1971c2_**):
    ```
    function transformar(valor, operacion) {
      return operacion(valor);
    }

    transformar(5, n => n * 2);     // 10   → la operación fue duplicar
    transformar(5, n => n + 100);   // 105  → la operación fue sumar 100
    ```
  - Dos cajas de resultado resaltadas:
    - Caja verde **_#2f9e44_**: "`transformar(5, n => n * 2)` → **10**"
    - Caja naranja **_#f08c00_**: "`transformar(5, n => n + 100)` → **105**"
  - Etiqueta entre las 2 cajas (negro 14px): "MISMA función `transformar`, callbacks distintos → resultados distintos. `transformar` no sabe de antemano qué va a hacer; lo decide el callback que recibe."

- **Recuadro al pie — quién decide qué** (borde gris claro):
  - Encabezado (gris oscuro 14px): "El reparto de tareas:"
  - Texto (negro 13px): "La función de orden superior decide CUÁNDO ejecutar tu callback. Tu callback decide QUÉ hacer. Vos no lo llamás — se lo entregás, y ella lo llama adentro, por vos."

**Anchor pedagógico:** la firma `funcion(dato, callback)` con las 2 flechas (uno es dato, el otro ES función) desmitifica el término "orden superior". El ejemplo `transformar` con 2 callbacks dando 2 resultados es la pieza que hace clic: el alumno ve que la misma función se comporta distinto según lo que recibe — exactamente lo que harán los métodos de array en M3/M4.

**Notas para Eric:** se proyecta en el sub-punto 2.2, después de conectar con M1 ("dijimos que una función se puede pasar como argumento; ¿a quién?"). Es deliberadamente un ejemplo CASERO (`transformar`), no `.map` —ese es M3—. Podés señalar las 2 cajas de resultado mientras decís "misma función, distinto callback, distinto resultado". Prepara M2.3: ahora que entienden orden superior, JavaScript ya trae 5 funciones así para arrays.

---

### Panel 2.3 — Las 5 funciones de array + la estructura general del callback

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 2.3 (las funciones de array + su estructura general): arriba, las 5 funciones de array listadas como grupo (map, filter, find, forEach, reduce) con la nota "vienen con JavaScript · son funciones de orden superior para arrays"; debajo, la plantilla general del callback **_(elemento, indice, array) => { }_** que todas comparten. Marcar **_.reduce_** aparte: "agrega el acumulador adelante".**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para las 5 funciones listadas arriba + la plantilla universal del callback debajo + el callout de la excepción de reduce)
- **Patrón canónico de referencia:** Patrón 2 (Sub-tabla de las 5 funciones de array con su rol) + Patrón 1 (Anatomía de la plantilla universal del callback `(elemento, indice, array)`).
- **Concepto pedagógico que visualiza:** la **estructura universal del callback** que comparten los 5 métodos de array. Sin el Panel, el alumno teme aprender 5 firmas distintas. Con las 5 funciones listadas como grupo + UNA sola plantilla `(elemento, indice, array)` que todas usan, el alumno entiende que aprende UNA estructura, no cinco — y que reduce es la única excepción (suma el acumulador adelante).

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "LAS 5 FUNCIONES DE ARRAY — UNA SOLA FIRMA DE CALLBACK"
- **Subtítulo** (gris oscuro, 20px): "Vienen con JavaScript. Son funciones de orden superior para arrays. Todas reciben un callback con la MISMA estructura — no aprendés 5 firmas, aprendés UNA."
- **Sección 1 — las 5 funciones listadas como grupo (cada una con su color funcional):**
  - Etiqueta del grupo (gris oscuro 14px): "vienen con JavaScript · son funciones de orden superior para arrays"
  - Lista en cajas (monospace azul **_#1971c2_** para el nombre):
    - `.map` (caja borde azul **_#1971c2_**) → "transforma CADA elemento"
    - `.filter` (caja borde verde **_#2f9e44_**) → "se queda con los que cumplen una condición"
    - `.find` (caja borde naranja **_#f08c00_**) → "busca el PRIMERO que cumple"
    - `.forEach` (caja borde naranja oscuro **_#e8590c_**) → "hace algo con cada elemento (efecto)"
    - `.reduce` (caja borde rojo **_#e03131_**) → "reduce TODO el array a un solo valor"

- **Sección 2 — la plantilla universal del callback (centrada, grande, resaltada):**
  - Bloque de código (monospace azul **_#1971c2_**, fondo blanco con borde gris claro grueso):
    ```
    array.funcionDeArray((elemento, indice, array) => {
      // código
    });
    ```
  - 3 flechas a cada parámetro:
    - Flecha verde **_#2f9e44_** sobre `elemento` → "1er parámetro — el elemento actual que se procesa"
    - Flecha azul **_#1971c2_** sobre `indice` → "2do, OPCIONAL — la posición de ese elemento"
    - Flecha naranja **_#f08c00_** sobre `array` → "3er, OPCIONAL — el array completo"
  - Etiqueta (negro 14px): "Son opcionales de derecha a izquierda. Si solo necesitás el elemento: `valor => ...`. Si necesitás la posición: `(valor, indice) => ...`."

- **Recuadro destacado — la única excepción** (borde rojo **_#e03131_** grueso):
  - Encabezado (rojo **_#e03131_** 16px): "⚠ La excepción: `.reduce`"
  - Texto (negro 13px): "`reduce` agrega un parámetro EXTRA adelante, el acumulador: `(acumulador, elemento, indice, array)`. Es la única que rompe levemente la regla. Las 4 primeras usan `(elemento, indice, array)`; reduce suma el acumulador adelante. Lo verás en detalle en M4."

- **Nota inferior** (negro **_#1e1e1e_**, 16px): "Esto es ORO: en vez de aprender 5 cosas, aprendés una firma y la reconocés en map, filter, find y forEach. Reduce es la excepción que confirma la regla."

**Anchor pedagógico:** la plantilla única `(elemento, indice, array)` resaltada en el centro, con las 5 funciones arriba apuntando a ella, ancla que es UNA firma compartida. Las 3 flechas (opcionales de derecha a izquierda) preparan el cruce de arrays paralelos con `nombres[indice]` de M4.3. El callout rojo de reduce evita que el alumno se confunda cuando vea el acumulador extra en M4.

**Notas para Eric:** se proyecta en el sub-punto 2.3, presentando las 5 funciones como grupo por primera vez. NO se usan todavía —eso es post-receso—; acá solo se muestra la firma compartida. Podés señalar la plantilla central mientras decís "esta firma la vas a ver cinco veces". El callout de reduce siembra la excepción que se cobra en M4.1. La pregunta de activación (usar solo el índice) se ancla en las 3 flechas opcionales.

---

## Momento 3: `.map()` / `.filter()` / `.find()`

> **Estado:** Borrador
> **Paneles del Momento:** 3 (Panel 3.1 da la anatomía de **_.map_** + inmutabilidad; Panel 3.2 la de **_.filter_**; Panel 3.3 la de **_.find_** + el contraste con filter). El sub-punto 3.4 (aplicación al lab — las 4 funciones puras en **_functional-utils.js_**) no requiere Panel — es ejecución en VS Code + consola. Las demos de cada método se hacen en vivo en la consola del navegador (sin archivo de apoyo).

---

### Panel 3.1 — Anatomía de `.map` + ejemplo + inmutabilidad

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 3.1 (anatomía de `.map` + ejemplo + inmutabilidad). ARRIBA, la anatomía general: **_arrayOriginal.map(elemento => transformación)_** con etiquetas — "recorre CADA elemento", "el callback devuelve el valor transformado", "sale un array NUEVO del MISMO tamaño". ABAJO, ejemplo concreto: **_[5, 8, 12, 20, 7]_** entra → **_.map(n => n * 2)_** → **_[10, 16, 24, 40, 14]_** sale (4 entra, 4 sale — mismo tamaño). Al costado, una caja resaltada de INMUTABILIDAD: el array original **_[5, 8, 12, 20, 7]_** sigue intacto tras el map ("fotocopia: el original no se toca").**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para la anatomía con 3 etiquetas arriba + el ejemplo array-entra/array-sale + la caja de inmutabilidad al costado)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de sintaxis de `.map` con flechas a cada parte) + Patrón 9 (Transición de estados — array original → array transformado del mismo tamaño + el original intacto).
- **Concepto pedagógico que visualiza:** la **mecánica de `.map`** (transforma cada elemento → array nuevo del mismo tamaño) y la **inmutabilidad** (el original no se toca). Sin el Panel, "map transforma" es teoría. Con el ejemplo visual (5 celdas entran → 5 celdas transformadas salen) + la caja de inmutabilidad mostrando el original intacto, el alumno VE que map saca una "fotocopia" transformada y deja el array de partida confiable — lo opuesto al `for` de C05 que podía pisar el array.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "`.map()` — TRANSFORMAR CADA ELEMENTO"
- **Subtítulo** (gris oscuro, 20px): "Recorre el array y crea un array NUEVO aplicando una transformación a cada elemento. Mismo tamaño, original intacto."
- **Sección 1 — la anatomía general (arriba, centrada):**
  - Bloque de código (monospace azul **_#1971c2_**, fondo blanco con borde gris claro):
    ```
    const arrayNuevo = arrayOriginal.map(elemento => transformación);
    ```
  - 3 etiquetas con flechas (colores funcionales):
    - Flecha azul **_#1971c2_** desde `arrayOriginal` → "recorre CADA elemento"
    - Flecha verde **_#2f9e44_** desde `transformación` → "el callback DEBE devolver el valor transformado"
    - Flecha naranja **_#f08c00_** desde `arrayNuevo` → "sale un array NUEVO del MISMO tamaño"

- **Sección 2 — el ejemplo concreto (array entra → array sale):**
  - **Array de entrada** — caja horizontal de 5 celdas (bordes grises, monospace azul **_#1971c2_**): `5` · `8` · `12` · `20` · `7`
  - Flecha grande (naranja **_#f08c00_**) etiquetada: `.map(n => n * 2)`
  - **Array de salida** — caja horizontal de 5 celdas alineadas bajo las de entrada (monospace azul **_#1971c2_**): `10` · `16` · `24` · `40` · `14`
  - Etiqueta (negro 14px): "5 entran, 5 salen — cada uno transformado. El tamaño NO cambia."

- **Caja destacada al costado — INMUTABILIDAD** (borde verde **_#2f9e44_** grueso):
  - Encabezado (verde **_#2f9e44_** 18px): "INMUTABILIDAD — el original no se toca"
  - El array original mostrado intacto (monospace azul **_#1971c2_**): `[5, 8, 12, 20, 7]` con etiqueta "sigue igual tras el map"
  - Texto (negro 13px): "`.map` saca una 'fotocopia' transformada y deja el original intacto. Es lo opuesto al `for` de C05, que podía pisar el array mientras lo recorría. Con map, tu array de partida siempre queda confiable."

- **Recuadro destacado al pie — el error #1 con map** (recuadro con borde rojo **_#e03131_** grueso, ancho completo):
  - Encabezado (rojo **_#e03131_** 16px): "⚠ El error #1: callback SIN return"
  - Texto (negro 14px): "Si el callback no devuelve nada, sale un array del mismo tamaño pero lleno de `undefined` — porque map arma el nuevo array con lo que el callback devuelve. Con llaves, acordate del `return`."

**Anchor pedagógico:** el ejemplo array-entra/array-sale (5 celdas → 5 celdas transformadas) ancla que map preserva el tamaño y transforma uno a uno. La caja de inmutabilidad mostrando el original intacto al costado es la pieza que materializa "no muta" — un concepto que sin ver el original sobreviviendo queda abstracto. El recuadro rojo del `return` ataca el error #1 que Eric pregunta en la activación.

**Notas para Eric:** se proyecta en el sub-punto 3.1, al volver del receso, antes de la demo en vivo en consola. Podés señalar el array de salida mientras decís "mismo tamaño, cada uno transformado" y la caja de inmutabilidad al imprimir `numeros` después y mostrar que sigue igual. El recuadro rojo prepara la pregunta de activación (callback sin return → array de `undefined`).

---

### Panel 3.2 — Anatomía de `.filter` + ejemplo

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 3.2 (anatomía de `.filter` + ejemplo). ARRIBA, la anatomía general: **_arrayOriginal.filter(elemento => condición)_** con etiquetas — "el callback devuelve true o false", "true → el elemento SE QUEDA", "false → el elemento SE DESCARTA", "sale un array MENOR o igual". ABAJO, ejemplo concreto: **_[5, 8, 12, 20, 7]_** entra → **_.filter(n => n > 10)_** → **_[12, 20]_** sale (5 entran, 2 salen — los que no cumplen se cayeron). Contraste visual con el Panel 3.1: ahí salían 5, acá salen 2.**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3 — anatomía atómica de `.filter`: sintaxis + etiquetas true/false + ejemplo array-entra/array-más-chico)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de sintaxis de `.filter` con flechas a cada parte) + Patrón 9 (Transición de estados — array original → array menor con los elementos que se caen).
- **Concepto pedagógico que visualiza:** la **mecánica de `.filter`** (el callback devuelve un booleano; true conserva, false descarta; sale un array menor o igual). Sin el Panel, "filter selecciona" es teoría. Con el ejemplo (5 celdas entran → 2 salen, las 3 que no cumplen se caen visualmente), el alumno VE que filter elige, no transforma — y el contraste con map (mismo tamaño) queda claro.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "`.filter()` — CONSERVAR SOLO LO QUE CUMPLE"
- **Subtítulo** (gris oscuro, 20px): "Recorre el array y crea un array NUEVO con SOLO los que cumplen una condición. El callback devuelve `true` (se queda) o `false` (se descarta)."
- **Sección 1 — la anatomía general (arriba, centrada):**
  - Bloque de código (monospace azul **_#1971c2_**, fondo blanco con borde gris claro):
    ```
    const arrayFiltrado = arrayOriginal.filter(elemento => condición);
    ```
  - Etiquetas con flechas (colores funcionales):
    - Flecha azul **_#1971c2_** desde `condición` → "el callback devuelve `true` o `false` (como las del `if`)"
    - Flecha verde **_#2f9e44_** → "`true` → el elemento SE QUEDA"
    - Flecha roja **_#e03131_** → "`false` → el elemento SE DESCARTA"
    - Flecha naranja **_#f08c00_** desde `arrayFiltrado` → "sale un array MENOR o igual"

- **Sección 2 — el ejemplo concreto (array entra → array más chico):**
  - **Array de entrada** — caja horizontal de 5 celdas (monospace azul **_#1971c2_**): `5` · `8` · `12` · `20` · `7`
    - Las celdas que NO cumplen (`5`, `8`, `7`) marcadas con una X roja **_#e03131_** y etiqueta "se caen (`false`)"
    - Las celdas que cumplen (`12`, `20`) marcadas con tilde verde **_#2f9e44_**
  - Flecha grande (naranja **_#f08c00_**) etiquetada: `.filter(n => n > 10)`
  - **Array de salida** — caja horizontal de SOLO 2 celdas (monospace azul **_#1971c2_**): `12` · `20`
  - Etiqueta (negro 14px): "5 entran, 2 salen. El callback dijo `true` para 12 y 20; `false` para 5, 8 y 7 — esos se cayeron."

- **Recuadro al pie — contraste con map** (borde gris claro):
  - Encabezado (gris oscuro 14px): "map vs filter — misma firma, propósito distinto:"
  - Texto (negro 13px): "`map` devuelve SIEMPRE el mismo tamaño porque transforma cada uno. `filter` puede devolver MENOS porque selecciona. Si ninguno cumple → array vacío `[]`. Y el original tampoco se toca."

**Anchor pedagógico:** el ejemplo (5 celdas entran, 3 se caen con X roja, 2 salen) ancla que filter ELIGE, no transforma. El contraste directo con el Panel 3.1 (ahí salían 5, acá salen 2) fija la diferencia que más confunde. Las etiquetas true→queda / false→descarta anclan que el callback de filter devuelve un booleano, como las condiciones del `if` de C05.

**Notas para Eric:** se proyecta en el sub-punto 3.2, antes de la demo en vivo. Podés señalar las 3 celdas con X roja mientras decís "estos dieron false, se cayeron". El recuadro de contraste con map es el que cierra la confusión típica. Conecta con la convención de signos de C05: filter por `> 0` da ingresos, por `< 0` da gastos.

---

### Panel 3.3 — Anatomía de `.find` + ejemplo (find vs filter)

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 3.3 (anatomía de `.find` + ejemplo). ARRIBA, la anatomía general: **_arrayOriginal.find(elemento => condición)_** con una flecha recorriendo el array de izquierda a derecha que SE DETIENE en el primer elemento que cumple, y devuelve ESE elemento (no un array). Etiqueta: "devuelve UN elemento (o undefined si ninguno cumple)". ABAJO, ejemplo: **_[5, 8, 12, 20, 7]_** → **_.find(n => n > 10)_** → **_12_** (el primero que cumple; se detiene, no sigue). Comparativa al pie con filter: filter → **_[12, 20]_** (array) · find → **_12_** (el valor solo).**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3 — anatomía atómica de `.find`: sintaxis + flecha que se detiene + ejemplo + comparativa con filter al pie)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de sintaxis de `.find`) + Patrón 3 (Comparativa find vs filter al pie — un elemento vs un array).
- **Concepto pedagógico que visualiza:** la **mecánica de `.find`** (devuelve el PRIMER elemento que cumple, el valor directo, no un array; se detiene apenas lo encuentra). Sin el Panel, find y filter se confunden. Con la flecha que recorre y SE DETIENE en el primer match + la comparativa al pie (filter→`[12, 20]` array vs find→`12` valor solo), el alumno VE la diferencia exacta: find para uno, filter para todos.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "`.find()` — EL PRIMERO QUE CUMPLE"
- **Subtítulo** (gris oscuro, 20px): "Recorre el array y devuelve el PRIMER elemento que cumple la condición — el valor directo, NO un array. Se detiene apenas lo encuentra."
- **Sección 1 — la anatomía general (arriba, centrada):**
  - Bloque de código (monospace azul **_#1971c2_**, fondo blanco con borde gris claro):
    ```
    const elemento = arrayOriginal.find(elemento => condición);
    ```
  - Etiqueta con flecha verde **_#2f9e44_** desde el resultado → "devuelve UN elemento (o `undefined` si ninguno cumple)"

- **Sección 2 — el ejemplo concreto con la flecha que se detiene:**
  - **Array** — caja horizontal de 5 celdas (monospace azul **_#1971c2_**): `5` · `8` · `12` · `20` · `7`
  - Una **flecha de recorrido** (azul **_#1971c2_**) que avanza de izquierda a derecha pasando por `5` (no cumple), `8` (no cumple), y SE DETIENE en `12` con un círculo verde **_#2f9e44_** alrededor — etiqueta sobre la parada: "primer match: se detiene acá, NO sigue al 20"
  - Flecha grande (naranja **_#f08c00_**) etiquetada: `.find(n => n > 10)`
  - **Resultado** — una sola caja resaltada verde **_#2f9e44_**: `12` (NO `[12]`) — etiqueta: "el VALOR solo, no un array"
  - Sub-ejemplo (gris oscuro 13px): "Si ninguno cumple → `.find(n => n > 100)` → `undefined`"

- **Recuadro destacado al pie — find vs filter** (borde gris claro, 2 sub-bloques):
  - Encabezado (gris oscuro 16px): "La confusión típica — misma condición `n > 10`, qué devuelve cada uno:"
  - Sub-bloque verde **_#2f9e44_**: "`.filter(n => n > 10)` → `[12, 20]` — un ARRAY con TODOS los que cumplen (puede estar vacío)"
  - Sub-bloque azul **_#1971c2_**: "`.find(n => n > 10)` → `12` — UN solo elemento, el primero que cumple (o `undefined`)"
  - Texto al pie (negro 13px): "Cuando solo necesitás uno, `find`. Cuando querés todos los que cumplen, `filter`."

**Anchor pedagógico:** la flecha que recorre y SE DETIENE en el primer match (con el `20` que también cumpliría pero queda fuera) ancla que find no sigue después del primero. La comparativa al pie (`[12, 20]` vs `12`) con la MISMA condición aísla la diferencia exacta que confunde: filter devuelve array, find devuelve el valor solo.

**Notas para Eric:** se proyecta en el sub-punto 3.3, antes de la demo en vivo. Podés seguir la flecha de recorrido con el dedo y detenerte dramáticamente en el `12` ("acá para, no le importa el 20"). El recuadro de find vs filter al pie es el que cierra la confusión #1. Después de este Panel viene el cierre de los 3 métodos y la aplicación al lab (3.4, sin Panel).

---

## Momento 4: `.reduce()` / `.forEach()` + reporte

> **Estado:** Borrador
> **Paneles del Momento:** 3 (Panel 4.1 da la anatomía de **_.reduce_** + la tabla de iteraciones; Panel 4.2 muestra la composición como línea de producción; Panel 4.3 contrasta **_.map_** vs **_.forEach_**). Los sub-puntos 4.2 (funciones puras con reduce) y 4.4 (refactor del reporte) son code-along en VS Code; sus conceptos (composición en 4.2, DRY en 4.4) se anclan en el Panel 4.2 y en el guion respectivamente.

---

### Panel 4.1 — Anatomía de `.reduce` + tabla de iteraciones

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 4.1 (anatomía de `.reduce` + tabla de iteraciones). ARRIBA, la anatomía: **_array.reduce((acumulador, valor) => nuevoAcumulador, valorInicial)_** con etiquetas — "acumulador: el resultado parcial que se va construyendo", "valor: el elemento actual", "valorInicial: con qué arranca el acumulador". ABAJO, la TABLA DE ITERACIONES para **_[3000, -45.50, 500]_** con inicial 0: columnas (vuelta · acumulador · valor · nuevo acumulador), filas 1→3000, 2→2954.50, 3→3454.50. Resaltar que reduce es la ÚNICA función de array con un parámetro extra adelante (el acumulador).**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso para la anatomía con sus 3 etiquetas + la tabla de iteraciones de 4 columnas × 3 filas + el callout del acumulador extra)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de sintaxis de `.reduce` con flechas a cada pieza) + Patrón 4 (Algoritmo numerado — la tabla de iteraciones como traza paso a paso del acumulador).
- **Concepto pedagógico que visualiza:** la **mecánica de `.reduce`** (acumula el array en un solo valor; el acumulador arrastra el resultado parcial entre vueltas) y por qué tiene un parámetro extra adelante. Sin el Panel, reduce es el método más difícil y abstracto. Con la tabla de iteraciones (el acumulador viajando de fila en fila: 0 → 3000 → 2954.50 → 3454.50), el alumno VE cómo el acumulador "arrastra" el resultado — y por qué el `for` de C05 muere acá en una línea.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "`.reduce()` — REDUCIR TODO EL ARRAY A UN SOLO VALOR"
- **Subtítulo** (gris oscuro, 20px): "El acumulador va guardando el resultado parcial vuelta a vuelta. El método estrella de la clase: acá el `for` de C05 muere en una línea."
- **Sección 1 — la anatomía general (arriba, centrada):**
  - Bloque de código (monospace azul **_#1971c2_**, fondo blanco con borde gris claro):
    ```
    array.reduce((acumulador, valor) => nuevoAcumulador, valorInicial);
    ```
  - 3 etiquetas con flechas (colores funcionales):
    - Flecha verde **_#2f9e44_** desde `acumulador` → "el resultado parcial que se va construyendo; arranca en el valor inicial y se actualiza cada vuelta"
    - Flecha azul **_#1971c2_** desde `valor` → "el elemento actual de la vuelta (igual que el `elemento` de map/filter)"
    - Flecha naranja **_#f08c00_** desde `valorInicial` → "el último argumento, DESPUÉS del callback; con qué arranca el acumulador"
  - Etiqueta (negro 14px): "El acumulador aparece dos veces: entra como parámetro y SALE como lo que devuelve el callback. Eso es lo que lo hace 'arrastrar' el resultado de vuelta en vuelta."

- **Sección 2 — la tabla de iteraciones (llenada en vivo, para `[3000, -45.50, 500]` con inicial `0`):**
  - Encabezado (gris oscuro 16px): "Seguí el acumulador viajando de fila en fila:"
  - Tabla de 4 columnas (encabezados en negro **_#1e1e1e_**): "Vuelta" · "acumulador" · "valor" · "nuevo acumulador"
  - Fila 1: `1` · `0` · `3000` · `3000`
  - Fila 2: `2` · `3000` · `-45.50` · `2954.50`
  - Fila 3: `3` · `2954.50` · `500` · `3454.50`
  - La columna "nuevo acumulador" resaltada en verde **_#2f9e44_**, con flechas discretas mostrando que el "nuevo acumulador" de una fila pasa a ser el "acumulador" de la siguiente.
  - Etiqueta al pie de la tabla (negro 14px): "Arranca en 0, se le suma cada valor, lo que queda pasa a la vuelta siguiente. Al final: 3454.50 — el saldo."

- **Recuadro destacado — la única excepción** (borde rojo **_#e03131_** grueso):
  - Encabezado (rojo **_#e03131_** 16px): "⚠ reduce es la ÚNICA con un parámetro extra ADELANTE"
  - Texto (negro 14px): "map, filter y find usan `(elemento, ...)`. reduce suma el `acumulador` adelante: `(acumulador, valor, ...)`. Por eso necesita ese parámetro: arrastra un resultado parcial entre vueltas, mientras los otros procesan cada elemento de forma independiente."

- **Recuadro al pie — las 2 reglas que SÍ o SÍ recordar** (borde gris claro):
  - Texto (negro 13px): "1) El callback DEBE retornar el acumulador en cada vuelta — sin return, el acumulador se vuelve `undefined` y todo se rompe. 2) Poné SIEMPRE el valor inicial (el `, 0`): si lo omitís y el array está vacío, reduce da error."

**Anchor pedagógico:** la tabla de iteraciones es la pieza central — convierte el concepto más abstracto del día en una traza visible donde el acumulador viaja de fila en fila (el "nuevo acumulador" de una fila es el "acumulador" de la siguiente). El callout rojo del parámetro extra cierra la excepción sembrada en el Panel 2.3. El recuadro de las 2 reglas ataca los errores que rompen reduce.

**Notas para Eric:** se proyecta en el sub-punto 4.1, al cerrar el anzuelo del inicio del día (el `for` vs `.reduce`). Llená la tabla EN VIVO, fila por fila, siguiendo el acumulador con el dedo ("arranca en 0, ahora vale 3000, ahora 2954.50..."). Es el clímax de la clase. Conecta con la convención de signos de C05: el `-45.50` resta solo, sin separar gastos. Después viene el code-along (4.2) donde el `for` muere.

---

### Panel 4.2 — Composición como línea de producción

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 4.2 (composición como línea de producción): **_valores_** → [obtenerIngresos] → array de ingresos → [reduce] → total. Cada caja una función con UNA tarea; la salida de una es la entrada de la siguiente. Etiqueta: "funciones chicas combinadas → resuelven algo grande".**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9, horizontal para la línea de producción que fluye de izquierda a derecha: valores → estación → array intermedio → estación → total)
- **Patrón canónico de referencia:** Patrón 9 (Transición de estados — el dato fluye de estación en estación) + Patrón 1 (cada caja-función descompuesta con su tarea única).
- **Concepto pedagógico que visualiza:** la **composición de funciones** — combinar funciones pequeñas donde la salida de una alimenta a la siguiente. Sin el Panel, "composición" es una palabra. Con la línea de producción (valores → `obtenerIngresos` → array de ingresos → `reduce` → total), el alumno VE que cada función hace UNA tarea y que juntas resuelven algo grande — la contracara de la función imperativa gigante de C05 que hacía todo de una.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "COMPOSICIÓN — FUNCIONES CHICAS EN LÍNEA DE PRODUCCIÓN"
- **Subtítulo** (gris oscuro, 20px): "Combinar funciones pequeñas, donde la salida de una alimenta a la siguiente, para resolver algo más grande. Cada función hace UNA cosa."
- **Sección central — la línea de producción (fluye de izquierda a derecha):**
  - **Estación 0 — entrada** (caja borde azul **_#1971c2_**): `valores` — etiqueta: `[3000, -45.50, 500, -30]`
  - Flecha (negro **_#1e1e1e_**) →
  - **Estación 1 — función** (caja verde **_#2f9e44_**): `obtenerIngresos` — etiqueta debajo: "tarea única: FILTRA los positivos"
  - Flecha (negro **_#1e1e1e_**) →
  - **Producto intermedio** (caja borde gris): `[3000, 500]` — etiqueta: "array de ingresos"
  - Flecha (negro **_#1e1e1e_**) →
  - **Estación 2 — función** (caja naranja **_#f08c00_**): `.reduce(...)` — etiqueta debajo: "tarea única: SUMA todo a un valor"
  - Flecha (negro **_#1e1e1e_**) →
  - **Estación final — salida** (caja borde verde **_#2f9e44_** grueso): `total` — etiqueta: `3500`
  - Etiqueta sobre toda la línea (negro 16px): "funciones chicas combinadas → resuelven algo grande"

- **Sección — el código que produce esa línea** (recuadro borde gris claro):
  - Bloque de código (monospace azul **_#1971c2_**):
    ```
    const totalIngresos = valores =>
      obtenerIngresos(valores).reduce((acumulador, valor) => acumulador + valor, 0);
    ```
  - Texto (negro 13px): "`totalIngresos` NO escribió un filter — llamó a `obtenerIngresos` (que ya hicimos en M3) y le aplicó reduce. Una función usando OTRA función adentro: eso es composición."

- **Recuadro al pie — la analogía** (borde gris claro):
  - Encabezado (gris oscuro 14px): "Como una línea de producción:"
  - Texto (negro 13px): "Cada estación hace una sola tarea —lavar, cortar, empaquetar— y le pasa el resultado a la siguiente. Ninguna estación hace todo; el producto final sale de combinar pasos simples en orden. `obtenerIngresos` lava, `reduce` empaqueta. Es la contracara de la función imperativa gigante de C05 que hacía todo de una."

**Anchor pedagógico:** la línea de producción horizontal (entrada → estación → producto intermedio → estación → salida) es la pieza central — hace tangible que el dato FLUYE y que cada función es una estación con una tarea. El array intermedio visible (`[3000, 500]`) entre las dos estaciones ancla que "la salida de una es la entrada de la siguiente". La analogía cierra el concepto después de la definición técnica.

**Notas para Eric:** se proyecta en el sub-punto 4.2, JUSTO cuando `totalIngresos` acaba de usar `obtenerIngresos` (nombrar el concepto donde sucede). Podés seguir la línea de producción con el dedo de izquierda a derecha mientras decís "valores entran, obtenerIngresos filtra, reduce suma, sale el total". No interrumpe el code-along — lo ilumina en el momento exacto.

---

### Panel 4.3 — `.map` vs `.forEach` (retorna / no retorna)

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 4.3 (`.map` vs `.forEach`). Dos columnas: izquierda **_.map_** → "RETORNA un array transformado · para transformar"; derecha **_.forEach_** → "NO retorna nada (undefined) · para efectos (imprimir, llamar otras funciones)". Abajo, ejemplo de forEach usando el índice: **_(valor, indice) => ..._** para cruzar **_valores[indice]_** con **_nombres[indice]_**.**`
- **Tipo:** Imagen-slide
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9, comparativa horizontal de 2 columnas: map retorna a la izquierda, forEach no retorna a la derecha + el ejemplo del cruce de arrays paralelos al pie)
- **Patrón canónico de referencia:** Patrón 3 (Comparativa X vs Y — map vs forEach) + Patrón 8 (cada columna con su bloque de código de ejemplo).
- **Concepto pedagógico que visualiza:** la **diferencia map vs forEach** (map RETORNA un array transformado, para transformar; forEach NO retorna nada, para efectos). Sin el Panel, el alumno espera que forEach devuelva algo. Con las 2 columnas (map → array vs forEach → undefined) + el ejemplo del cruce de arrays paralelos con índice, el alumno VE cuándo usar cada uno: transformar y obtener un array → map; solo hacer algo en cada vuelta (imprimir) → forEach.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "`.map` vs `.forEach` — RETORNA / NO RETORNA"
- **Subtítulo** (gris oscuro, 20px): "Misma idea de recorrer el array. La diferencia es qué devuelven: map un array nuevo, forEach nada."
- **Layout en 2 columnas:**

  **Columna izquierda — `.map` (borde azul **_#1971c2_**):**
  - Encabezado (azul **_#1971c2_** 24px): "`.map` — RETORNA un array transformado"
  - Bloque de código (monospace azul **_#1971c2_**):
    ```
    const dobles = numeros.map(n => n * 2);
    console.log(dobles);   // [10, 16, 24, ...]
    ```
  - Etiqueta (azul **_#1971c2_** 14px): "PARA TRANSFORMAR — obtenés un array nuevo con el resultado."

  **Columna derecha — `.forEach` (borde naranja oscuro **_#e8590c_**):**
  - Encabezado (naranja oscuro **_#e8590c_** 24px): "`.forEach` — NO retorna nada (`undefined`)"
  - Bloque de código (monospace azul **_#1971c2_**):
    ```
    const resultado = valores.forEach(valor => valor * 2);
    console.log(resultado);   // undefined
    ```
  - Etiqueta (naranja oscuro **_#e8590c_** 14px): "PARA EFECTOS — imprimir, llamar otras funciones. No esperes un array de vuelta."

- **Sección al pie — forEach con índice (el cruce de arrays paralelos):**
  - Encabezado (gris oscuro 16px): "El uso real: cruzar los arrays paralelos con el `indice`"
  - Bloque de código (monospace azul **_#1971c2_**):
    ```
    valores.forEach((valor, indice) => {
      console.log(`${indice + 1}. ${nombres[indice]}: ${valor}`);
    });
    // 1. Salario: 3000   2. Cena: -45.5   3. Freelance: 500
    ```
  - Etiqueta (negro 14px): "El segundo parámetro `indice` (el de M2.3) cruza los dos arrays: `valores[indice]` da el monto, `nombres[indice]` el nombre del MISMO movimiento. Esta es la torpeza de los arrays paralelos que C07 resuelve con objetos."

- **Recuadro al pie — la regla** (borde gris claro):
  - Texto (negro 13px): "Detalle de los apuntes: forEach NO es funcional puro — su trabajo ES producir un efecto. Es la alternativa 'decente' al `for` de C05 cuando solo necesitás iterar para imprimir o llamar funciones. Si querés transformar y obtener un array, es `map`."

**Anchor pedagógico:** las 2 columnas con su resultado explícito (`[10, 16, ...]` vs `undefined`) anclan la diferencia que más sorprende: forEach no devuelve nada. El ejemplo del cruce de arrays paralelos con índice reaprovecha el segundo parámetro del callback (M2.3) y siembra el dolor que C07 resuelve con objetos.

**Notas para Eric:** se proyecta en el sub-punto 4.3, antes de la demo en vivo. Podés señalar el `undefined` de la columna derecha mientras decís "si esperaban un array, sorpresa". El ejemplo del índice conecta con el callback universal de M2.3 y con la siembra de C07 (arrays paralelos → objetos). Es el último Panel del día — M5 es code-along sin paneles.

---

## Momento 5: Aplicar (componer + reusar) + reconexión + cierre

> **Sin paneles Excalidraw** (code-along de `promedioIngresos` + reconexión del `app.js` final). El M5 es aplicación pura: no introduce conceptos teóricos nuevos —composición y DRY ya se nombraron donde sucedieron en M4 (composición en M4.2 con `totalIngresos`, anclada en el Panel 4.2; DRY en M4.4 con `generarValoresReporte`)—. Acá solo se APLICAN una vez más en `promedioIngresos` (sub-punto 5.1, en VS Code mostrando la versión NO-DRY vs la DRY) y se reconecta el flujo real al `app.js` (5.2). El cierre del día (los 2 paradigmas se complementan) y el puente a C07 (arrays paralelos → array de objetos) se hacen en voz + consola, sin diagrama nuevo.

---

## Resumen de Paneles de la Clase 06

| Panel | Momento | Sub-punto | Tipo | Dimensiones | Estado |
|---|---|---|---|---|---|
| 1.1 — Funciones como valores (número vs función) | M1 | 1.2 | Imagen-slide | 1400×900 | Borrador |
| 1.2 — Anatomía de la arrow function (2 zonas + tablas) | M1 | 1.4 | Imagen-slide | 1400×1050 | Borrador |
| 1.3 — Tabla de decisión arrow vs function | M1 | 1.5 | Imagen-slide | 1400×900 | Borrador |
| 2.1 — Función pura vs impura | M2 | 2.1 | Imagen-slide | 1400×900 | Borrador |
| 2.2 — Anatomía de orden superior + `transformar` | M2 | 2.2 | Imagen-slide | 1400×1050 | Borrador |
| 2.3 — Las 5 funciones de array + callback universal | M2 | 2.3 | Imagen-slide | 1400×1050 | Borrador |
| 3.1 — Anatomía de `.map` + inmutabilidad | M3 | 3.1 | Imagen-slide | 1400×1050 | Borrador |
| 3.2 — Anatomía de `.filter` | M3 | 3.2 | Imagen-slide | 1200×900 | Borrador |
| 3.3 — Anatomía de `.find` (find vs filter) | M3 | 3.3 | Imagen-slide | 1200×900 | Borrador |
| 4.1 — Anatomía de `.reduce` + tabla de iteraciones | M4 | 4.1 | Imagen-slide | 1400×1050 | Borrador |
| 4.2 — Composición como línea de producción | M4 | 4.2 | Imagen-slide | 1400×900 | Borrador |
| 4.3 — `.map` vs `.forEach` | M4 | 4.3 | Imagen-slide | 1400×900 | Borrador |

**Total:** 12 Paneles (3 M1 + 3 M2 + 3 M3 + 3 M4 · M5 sin paneles, es code-along).
