# Prompts de Imagen — CLASE 06: Programación Funcional + Arrow Functions

> **Estilo canónico:** **_mi-sistema/DESARROLLO DE SLIDES.md_**.
> **Origen:** generado a partir de **_GUIA EXCALIDRAW - CLASE 06.md_** (estado: Paneles en Borrador — pendiente validación de Eric).
> **Cómo usar:**
> 1. Copiar cada prompt completo (el bloque entre las líneas `### [IMG-XX]:` y el siguiente `---`).
> 2. Pegar en la herramienta de imagen IA de elección (ChatGPT con generación de imagen, Sora, Gemini, DALL-E, Midjourney, etc.).
> 3. Descargar la imagen generada.
> 4. Abrir **_CLASE 06.excalidraw_** en excalidraw.com (cuando esté generado), arrastrar la imagen sobre el placeholder con el mismo `[IMG-XX]` ID y ajustar al rectángulo punteado.
>
> **Importante:** el bloque "Estilo visual" al final de cada prompt es INAMOVIBLE. No reescribirlo ni parafrasearlo. Si lo modificás, el estilo deja de coincidir con el resto del material visual del bootcamp.

---

## Prompts IA (12 imágenes)

---

### [IMG-01]: Funciones como valores — el número y la función en paralelo

- **Panel de origen:** Momento 1 — Panel 1.1
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9)
- **Patrón pedagógico:** Comparativa X vs Y (número vs función en paralelo) + Anatomía de las 3 operaciones descompuestas
- **Usado en sub-punto:** 1.2 (¿Qué tipo de dato es una función? — iluminar concepto implícito)

**Prompt:**

> Infografía educativa minimalista sobre "Funciones como valores — una función es un dato más". Estilo diagrama técnico de libro de texto. Diseño en dos columnas paralelas alineadas fila por fila: un número a la izquierda, una función a la derecha, ambos con las MISMAS 3 operaciones.
>
> **Título superior centrado en negro:** "FUNCIONES COMO VALORES — UNA FUNCIÓN ES UN DATO MÁS"
>
> **Subtítulo en gris oscuro debajo del título:** "Lo que hacés con un número —guardar, copiar, pasar— lo hacés IGUAL con una función. Por eso se la puede pasar como argumento."
>
> **Columna izquierda — UN NÚMERO (borde azul):**
> - Encabezado en azul: "UN NÚMERO (lo que ya sabés)"
> - Fila 1, etiqueta verde "1. GUARDAR en una variable" + código monospace azul: `let edad = 25;`
> - Fila 2, etiqueta naranja "2. COPIAR / mover a otro lado" + código: `let otraEdad = edad;`
> - Fila 3, etiqueta azul "3. PASAR como argumento a otra función" + código: `console.log(edad);`
>
> **Columna derecha — UNA FUNCIÓN (borde verde):**
> - Encabezado en verde: "UNA FUNCIÓN (lo mismo, igual)"
> - Fila 1, etiqueta verde "1. GUARDAR en una variable" + código: `let saludar = function() { return 'Hola'; };`
> - Fila 2, etiqueta naranja "2. COPIAR a otra variable" + código: `let otraReferencia = saludar;`
> - Fila 3, etiqueta azul "3. PASAR como argumento a otra función" + código: `ejecutar(saludar);`
>
> **Líneas horizontales discretas en gris claro punteado** conectando cada operación de la izquierda con su gemela de la derecha (fila 1 con fila 1, fila 2 con fila 2, fila 3 con fila 3), reforzando que son la MISMA operación.
>
> **Recuadro destacado al pie con borde rojo grueso, ancho completo — la trampa del paréntesis:**
> - Encabezado en rojo: "FÍJATE: la función va SIN paréntesis de llamada"
> - Texto en negro: "En la columna derecha es `saludar`, NO `saludar()`. Con paréntesis la EJECUTÁS (la llamás). Sin paréntesis la MOVÉS como un valor. Acá la estamos moviendo, no llamando — por eso nunca lleva `()`."
>
> **Nota inferior en negro:** "El nombre técnico es 'funciones de primera clase'. Es la base de TODO lo de hoy: si una función se puede pasar como argumento, se la puede entregar a otra función para que la use. Eso son map, filter y reduce."
>
> **Código de colores funcional:**
> - Columna del número: borde azul `#1971c2`.
> - Columna de la función: borde verde `#2f9e44`.
> - Etiquetas de la operación GUARDAR: verde `#2f9e44`.
> - Etiquetas de la operación COPIAR: naranja `#f08c00`.
> - Etiquetas de la operación PASAR: azul `#1971c2`.
> - Líneas de conexión entre columnas: gris claro punteado.
> - Recuadro de la trampa del paréntesis al pie: borde rojo `#e03131`.
> - Bloques de código: azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-02]: Anatomía de la arrow function — 2 zonas + Tabla A + Tabla B

- **Panel de origen:** Momento 1 — Panel 1.2
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Anatomía de sintaxis (la arrow descompuesta en 2 zonas) + las 2 sub-tablas de reglas por zona
- **Usado en sub-punto:** 1.4 (Arrow functions — la forma corta)

**Prompt:**

> Infografía educativa minimalista sobre "Arrow function — dos zonas, dos juegos de reglas". Estilo diagrama técnico de libro de texto. Diseño vertical: la sintaxis general con sus dos zonas marcadas arriba, dos tablas de reglas debajo, y la transformación paso a paso al pie.
>
> **Título superior centrado en negro:** "ARROW FUNCTION — DOS ZONAS, DOS JUEGOS DE REGLAS"
>
> **Subtítulo en gris oscuro debajo del título:** "Una expresión de función anónima escrita corta. Sacás `function`, ponés `=>`. La flecha parte la arrow en dos zonas que se simplifican por separado."
>
> **Sección 1 — la sintaxis general con las 2 zonas (arriba, centrada, grande):**
> - Bloque de código en monospace azul con borde gris claro: `(parámetros) => { cuerpo }`
> - Un corchete visual a la izquierda de la `=>`, etiquetado en azul: "ZONA PARÁMETROS — qué entra"
> - Un corchete visual a la derecha de la `=>`, etiquetado en verde: "ZONA CUERPO — qué hace / qué devuelve"
> - La flecha `=>` resaltada en el centro en naranja, con etiqueta: "la flecha separa las dos zonas"
>
> **Sección 2 — las 2 tablas de reglas, lado a lado:**
>
> **Tabla A — Parámetros (borde azul):**
> - Encabezado en azul: "TABLA A — Parámetros (según cuántos hay)"
> - Fila 1: "0 parámetros → paréntesis obligatorios: `() => ...`"
> - Fila 2: "1 parámetro → paréntesis OPCIONALES: `valor => ...`"
> - Fila 3: "2 o más → paréntesis obligatorios: `(a, b) => ...`"
>
> **Tabla B — Cuerpo (borde verde):**
> - Encabezado en verde: "TABLA B — Cuerpo (según cuántas líneas)"
> - Fila 1: "1 sola expresión → sin `{}` ni `return`, return implícito: `... => valor * 2`"
> - Fila 2: "Varias líneas → con `{}` y `return` explícito: `... => { ...; return X; }`"
>
> **Sección 3 — la transformación paso a paso en recuadro con borde gris claro:**
> - Encabezado en gris oscuro: "De `function` a la arrow más compacta — una zona por vez:"
> - Bloque de código en monospace azul:
>   ```
>   const duplicar = function(valor) { return valor * 2; };   // 1. function normal
>   const duplicar = (valor) => { return valor * 2; };        // 2. saco function, agrego =>
>   const duplicar = (valor) => valor * 2;                    // 3. CUERPO: 1 expresión (Tabla B f.1)
>   const duplicar = valor => valor * 2;                      // 4. PARÁMETROS: 1 param (Tabla A f.2)
>   ```
> - Texto en negro: "El paso 3 simplifica la zona CUERPO; el paso 4 la zona PARÁMETROS. Son decisiones separadas, cada una con su tabla."
>
> **Recuadro destacado al pie con borde rojo grueso, ancho completo — el error #1 con arrows:**
> - Encabezado en rojo: "El error #1: llaves SIN return"
> - Texto en negro: "`valor => { valor * 2 }` devuelve `undefined`. Pusiste las llaves pero olvidaste el `return` adentro. Con llaves, el `return` es obligatorio. Sin llaves, es implícito. Una cosa o la otra — nunca llaves sin return."
>
> **Código de colores funcional:**
> - Zona PARÁMETROS y Tabla A: azul `#1971c2`.
> - Zona CUERPO y Tabla B: verde `#2f9e44`.
> - Flecha `=>` resaltada en el centro: naranja `#f08c00`.
> - Recuadro del error #1 al pie: borde rojo `#e03131`.
> - Bloques de código: azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-03]: Tabla de decisión arrow vs function

- **Panel de origen:** Momento 1 — Panel 1.3
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9)
- **Patrón pedagógico:** Comparativa X vs Y (tabla de decisión de 2 filas) + cada criterio con su bloque de código de ejemplo
- **Usado en sub-punto:** 1.5 (Cuándo usar arrow vs `function`)

**Prompt:**

> Infografía educativa minimalista sobre "¿Arrow o function? — un criterio simple". Estilo diagrama técnico de libro de texto. Diseño en dos filas de decisión: cada fila con una pregunta disparador, un veredicto, y un bloque de código de ejemplo.
>
> **Título superior centrado en negro:** "¿ARROW O FUNCTION? — UN CRITERIO SIMPLE"
>
> **Subtítulo en gris oscuro debajo del título:** "No todo se escribe con arrow. Una pregunta decide cuál conviene en cada caso."
>
> **Fila 1 — ARROW (borde verde):**
> - Pregunta disparador en verde: "¿Es CORTA, o la voy a PASAR como argumento a otra función?"
> - Veredicto grande en verde: "→ ARROW"
> - Bloque de código de ejemplo en monospace azul:
>   ```
>   const duplicar = numero => numero * 2;
>   duplicar(5);   // 10
>   ```
> - Etiqueta en gris oscuro: "Corta, anónima, guardada en una variable. Y el caso estrella: cuando se la pasás a un método de array (lo verás después del receso)."
>
> **Fila 2 — FUNCTION (borde azul):**
> - Pregunta disparador en azul: "¿Es una función CON NOMBRE que llamo en VARIOS lados?"
> - Veredicto grande en azul: "→ FUNCTION"
> - Bloque de código de ejemplo en monospace azul:
>   ```
>   function saludar(nombre) {
>     return 'Hola ' + nombre;
>   }
>   saludar('Ana');
>   saludar('Luis');
>   ```
> - Etiqueta en gris oscuro: "Función de primer nivel, declarada una vez, llamada en varios lados."
>
> **Recuadro al pie con borde naranja — el caso estrella de la arrow:**
> - Encabezado en naranja: "El 90% del uso real de la arrow:"
> - Texto en negro: "Pasarla como argumento a otra función. Ese caso —que es donde la arrow se vuelve LA forma natural— lo van a sentir en vivo después del receso, con los métodos de array. Por ahora, quédense con el criterio."
>
> **Anotación destacada al pie en recuadro con borde negro grueso, ancho completo, texto centrado:**
> - Texto en negro: "Si la llamás por NOMBRE en varios lugares → `function`. Si es CORTA o la PASÁS → arrow."
>
> **Código de colores funcional:**
> - Fila ARROW: borde verde `#2f9e44`.
> - Fila FUNCTION: borde azul `#1971c2`.
> - Recuadro del caso estrella: borde naranja `#f08c00`.
> - Recuadro de la anotación al pie: borde negro `#1e1e1e`.
> - Bloques de código: azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-04]: Función pura vs impura

- **Panel de origen:** Momento 2 — Panel 2.1
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9)
- **Patrón pedagógico:** Comparativa X vs Y (pura vs impura) + cada función descompuesta con sus flechas de dependencia/efecto
- **Usado en sub-punto:** 2.1 (Función pura vs impura)

**Prompt:**

> Infografía educativa minimalista sobre "Función pura vs impura". Estilo diagrama técnico de libro de texto. Diseño en dos columnas: PURA a la izquierda sobre fondo verde claro, IMPURA a la derecha sobre fondo rojo claro con dos casos.
>
> **Título superior centrado en negro:** "FUNCIÓN PURA vs IMPURA"
>
> **Subtítulo en gris oscuro debajo del título:** "Pura = con la misma entrada da siempre lo mismo, y no toca nada de afuera. Recibe, calcula, devuelve. Punto."
>
> **Columna izquierda — PURA (fondo verde claro, borde verde):**
> - Encabezado grande en verde: "PURA"
> - Bloque de código en monospace azul: `const cuadrado = valor => valor * valor;`
> - Dos chequeos con tilde verde:
>   - "Mismo input, mismo output: le doy `5`, me da `25`, SIEMPRE."
>   - "No toca nada de afuera: solo usa su parámetro `valor` y devuelve."
> - Etiqueta en verde: "Predecible y fácil de probar: das una entrada, verificás la salida."
>
> **Columna derecha — IMPURA, dos casos (fondo rojo claro, borde rojo):**
> - Encabezado grande en rojo: "IMPURA (dos casos)"
> - Caso 1 — lee de afuera:
>   - Bloque de código en monospace azul:
>     ```
>     let factor = 10;
>     const multiplicar = valor => valor * factor;
>     ```
>   - Una flecha roja desde `factor` (dentro de la función) hacia la variable externa `factor`, con etiqueta: "Depende de una variable de AFUERA. Si `factor` cambia, la misma entrada da otro resultado."
> - Caso 2 — produce efecto:
>   - Bloque de código en monospace azul: `const imprimir = valor => console.log(valor);`
>   - Etiqueta en rojo: "Produce un EFECTO SECUNDARIO (imprime). No devuelve nada útil — su trabajo es el efecto."
>
> **Recuadro con borde naranja — qué es un efecto secundario:**
> - Encabezado en naranja: "Efecto secundario:"
> - Texto en negro: "Cualquier cosa que la función hace ADEMÁS de devolver su valor: tocar una variable de afuera, `console.log`, cambiar el HTML, pedir datos a un servidor. NO son malos —son necesarios— pero el paradigma funcional los SEPARA: cálculo en funciones puras, efectos juntos en pocos lugares."
>
> **Anotación destacada al pie en recuadro con borde negro grueso, ancho completo, texto centrado:**
> - Texto en negro: "PURA = mismo input, mismo output + no toca nada de afuera"
>
> **Código de colores funcional:**
> - Columna PURA: fondo verde claro con borde verde `#2f9e44`.
> - Columna IMPURA y la flecha hacia la variable externa: rojo `#e03131`.
> - Recuadro del efecto secundario: borde naranja `#f08c00`.
> - Recuadro de la anotación al pie: borde negro `#1e1e1e`.
> - Bloques de código: azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-05]: Anatomía de una función de orden superior + ejemplo `transformar`

- **Panel de origen:** Momento 2 — Panel 2.2
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Anatomía de sintaxis (la firma `funcion(dato, callback)`) + las 2 llamadas con distinto callback que dan resultados distintos
- **Usado en sub-punto:** 2.2 (Funciones de orden superior + callback)

**Prompt:**

> Infografía educativa minimalista sobre "Función de orden superior — recibe otra función". Estilo diagrama técnico de libro de texto. Diseño vertical: la anatomía de la firma con dos etiquetas arriba, el ejemplo concreto `transformar` con sus dos llamadas abajo.
>
> **Título superior centrado en negro:** "FUNCIÓN DE ORDEN SUPERIOR — RECIBE OTRA FUNCIÓN"
>
> **Subtítulo en gris oscuro debajo del título:** "Una función que recibe otra función como parámetro. Esa función que le pasás se llama callback. Es lo que habilita map, filter y reduce."
>
> **Sección 1 — la anatomía general de la firma (arriba, centrada):**
> - Bloque de código en monospace azul con borde gris claro:
>   ```
>   function funcion(dato, callback) {
>     return callback(dato);
>   }
>   ```
> - Flecha azul sobre el primer parámetro `dato` → etiqueta: "parámetro normal (un dato)"
> - Flecha verde sobre el segundo parámetro `callback` → etiqueta: "parámetro que ES una función (el CALLBACK)"
> - Flecha naranja entrando al cuerpo (a `callback(dato)`) → etiqueta: "adentro, EJECUTA el callback que recibió — vos no lo llamás, lo llama ella por vos"
>
> **Sección 2 — el ejemplo concreto `transformar` (abajo):**
> - Bloque de código en monospace azul:
>   ```
>   function transformar(valor, operacion) {
>     return operacion(valor);
>   }
>
>   transformar(5, n => n * 2);     // 10   → la operación fue duplicar
>   transformar(5, n => n + 100);   // 105  → la operación fue sumar 100
>   ```
> - Dos cajas de resultado resaltadas:
>   - Caja verde: "`transformar(5, n => n * 2)` → 10"
>   - Caja naranja: "`transformar(5, n => n + 100)` → 105"
> - Etiqueta entre las 2 cajas en negro: "MISMA función `transformar`, callbacks distintos → resultados distintos. `transformar` no sabe de antemano qué va a hacer; lo decide el callback que recibe."
>
> **Recuadro al pie con borde gris claro — quién decide qué:**
> - Encabezado en gris oscuro: "El reparto de tareas:"
> - Texto en negro: "La función de orden superior decide CUÁNDO ejecutar tu callback. Tu callback decide QUÉ hacer. Vos no lo llamás — se lo entregás, y ella lo llama adentro, por vos."
>
> **Código de colores funcional:**
> - Flecha y etiqueta del parámetro `dato`: azul `#1971c2`.
> - Flecha y etiqueta del parámetro `callback`: verde `#2f9e44`.
> - Flecha que entra al cuerpo (ejecuta el callback): naranja `#f08c00`.
> - Caja de resultado de `n => n * 2`: verde `#2f9e44`.
> - Caja de resultado de `n => n + 100`: naranja `#f08c00`.
> - Bloques de código: azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-06]: Las 5 funciones de array + la estructura general del callback

- **Panel de origen:** Momento 2 — Panel 2.3
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Sub-tabla de las 5 funciones de array con su rol + Anatomía de la plantilla universal del callback
- **Usado en sub-punto:** 2.3 (Las funciones de array y su estructura general)

**Prompt:**

> Infografía educativa minimalista sobre "Las 5 funciones de array — una sola firma de callback". Estilo diagrama técnico de libro de texto. Diseño vertical: las 5 funciones listadas como grupo arriba, la plantilla universal del callback resaltada en el centro, la excepción de reduce al pie.
>
> **Título superior centrado en negro:** "LAS 5 FUNCIONES DE ARRAY — UNA SOLA FIRMA DE CALLBACK"
>
> **Subtítulo en gris oscuro debajo del título:** "Vienen con JavaScript. Son funciones de orden superior para arrays. Todas reciben un callback con la MISMA estructura — no aprendés 5 firmas, aprendés UNA."
>
> **Sección 1 — las 5 funciones listadas como grupo, cada una con su color funcional:**
> - Etiqueta del grupo en gris oscuro: "vienen con JavaScript · son funciones de orden superior para arrays"
> - Lista en cajas, con el nombre del método en monospace azul:
>   - `.map` (caja borde azul) → "transforma CADA elemento"
>   - `.filter` (caja borde verde) → "se queda con los que cumplen una condición"
>   - `.find` (caja borde naranja) → "busca el PRIMERO que cumple"
>   - `.forEach` (caja borde naranja oscuro) → "hace algo con cada elemento (efecto)"
>   - `.reduce` (caja borde rojo) → "reduce TODO el array a un solo valor"
>
> **Sección 2 — la plantilla universal del callback (centrada, grande, resaltada con borde gris claro grueso):**
> - Bloque de código en monospace azul:
>   ```
>   array.funcionDeArray((elemento, indice, array) => {
>     // código
>   });
>   ```
> - 3 flechas a cada parámetro:
>   - Flecha verde sobre `elemento` → "1er parámetro — el elemento actual que se procesa"
>   - Flecha azul sobre `indice` → "2do, OPCIONAL — la posición de ese elemento"
>   - Flecha naranja sobre `array` → "3er, OPCIONAL — el array completo"
> - Etiqueta en negro: "Son opcionales de derecha a izquierda. Si solo necesitás el elemento: `valor => ...`. Si necesitás la posición: `(valor, indice) => ...`."
>
> **Recuadro destacado con borde rojo grueso — la única excepción:**
> - Encabezado en rojo: "La excepción: `.reduce`"
> - Texto en negro: "`reduce` agrega un parámetro EXTRA adelante, el acumulador: `(acumulador, elemento, indice, array)`. Es la única que rompe levemente la regla. Las 4 primeras usan `(elemento, indice, array)`; reduce suma el acumulador adelante. Lo verás en detalle en M4."
>
> **Nota inferior en negro:** "Esto es ORO: en vez de aprender 5 cosas, aprendés una firma y la reconocés en map, filter, find y forEach. Reduce es la excepción que confirma la regla."
>
> **Código de colores funcional:**
> - Caja de `.map` y parámetro `elemento`: para `.map` borde azul `#1971c2`; el `elemento` de la plantilla en verde `#2f9e44`.
> - Caja de `.filter`: borde verde `#2f9e44`.
> - Caja de `.find`: borde naranja `#f08c00`.
> - Caja de `.forEach`: borde naranja oscuro `#e8590c`.
> - Caja de `.reduce` y recuadro de la excepción: borde rojo `#e03131`.
> - Flecha del parámetro `indice`: azul `#1971c2`.
> - Flecha del parámetro `array`: naranja `#f08c00`.
> - Bloques de código: azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-07]: Anatomía de `.map` + ejemplo + inmutabilidad

- **Panel de origen:** Momento 3 — Panel 3.1
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Anatomía de sintaxis de `.map` + Transición de estados (array original → transformado mismo tamaño + original intacto)
- **Usado en sub-punto:** 3.1 (`.map()` — transformar cada elemento + inmutabilidad)

**Prompt:**

> Infografía educativa minimalista sobre "`.map()` — transformar cada elemento". Estilo diagrama técnico de libro de texto. Diseño vertical: la anatomía con etiquetas arriba, el ejemplo array-entra/array-sale del mismo tamaño en el medio, una caja de inmutabilidad al costado.
>
> **Título superior centrado en negro:** "`.map()` — TRANSFORMAR CADA ELEMENTO"
>
> **Subtítulo en gris oscuro debajo del título:** "Recorre el array y crea un array NUEVO aplicando una transformación a cada elemento. Mismo tamaño, original intacto."
>
> **Sección 1 — la anatomía general (arriba, centrada):**
> - Bloque de código en monospace azul con borde gris claro: `const arrayNuevo = arrayOriginal.map(elemento => transformación);`
> - 3 etiquetas con flechas:
>   - Flecha azul desde `arrayOriginal` → "recorre CADA elemento"
>   - Flecha verde desde `transformación` → "el callback DEBE devolver el valor transformado"
>   - Flecha naranja desde `arrayNuevo` → "sale un array NUEVO del MISMO tamaño"
>
> **Sección 2 — el ejemplo concreto (array entra → array sale):**
> - Array de entrada: una caja horizontal de 5 celdas con bordes grises y contenido monospace azul: `5`, `8`, `12`, `20`, `7`.
> - Una flecha grande en naranja etiquetada: `.map(n => n * 2)`
> - Array de salida: una caja horizontal de 5 celdas alineadas bajo las de entrada, monospace azul: `10`, `16`, `24`, `40`, `14`.
> - Etiqueta en negro: "5 entran, 5 salen — cada uno transformado. El tamaño NO cambia."
>
> **Caja destacada al costado con borde verde grueso — INMUTABILIDAD:**
> - Encabezado en verde: "INMUTABILIDAD — el original no se toca"
> - El array original mostrado intacto en monospace azul: `[5, 8, 12, 20, 7]` con etiqueta "sigue igual tras el map"
> - Texto en negro: "`.map` saca una 'fotocopia' transformada y deja el original intacto. Es lo opuesto al `for` de C05, que podía pisar el array mientras lo recorría. Con map, tu array de partida siempre queda confiable."
>
> **Recuadro destacado al pie con borde rojo grueso, ancho completo — el error #1 con map:**
> - Encabezado en rojo: "El error #1: callback SIN return"
> - Texto en negro: "Si el callback no devuelve nada, sale un array del mismo tamaño pero lleno de `undefined` — porque map arma el nuevo array con lo que el callback devuelve. Con llaves, acordate del `return`."
>
> **Código de colores funcional:**
> - Flecha de "recorre cada elemento": azul `#1971c2`.
> - Flecha de "el callback devuelve transformado": verde `#2f9e44`.
> - Flecha de "array nuevo mismo tamaño" y la flecha grande de transformación: naranja `#f08c00`.
> - Caja de INMUTABILIDAD: borde verde `#2f9e44`.
> - Recuadro del error #1 al pie: borde rojo `#e03131`.
> - Contenido de las celdas y bloques de código: azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-08]: Anatomía de `.filter` + ejemplo

- **Panel de origen:** Momento 3 — Panel 3.2
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón pedagógico:** Anatomía de sintaxis de `.filter` + Transición de estados (array original → array menor con los que se caen)
- **Usado en sub-punto:** 3.2 (`.filter()` — conservar solo lo que cumple)

**Prompt:**

> Infografía educativa minimalista sobre "`.filter()` — conservar solo lo que cumple". Estilo diagrama técnico de libro de texto. Diseño vertical: la anatomía con etiquetas true/false arriba, el ejemplo array-entra/array-más-chico abajo con los elementos que se caen marcados.
>
> **Título superior centrado en negro:** "`.filter()` — CONSERVAR SOLO LO QUE CUMPLE"
>
> **Subtítulo en gris oscuro debajo del título:** "Recorre el array y crea un array NUEVO con SOLO los que cumplen una condición. El callback devuelve `true` (se queda) o `false` (se descarta)."
>
> **Sección 1 — la anatomía general (arriba, centrada):**
> - Bloque de código en monospace azul con borde gris claro: `const arrayFiltrado = arrayOriginal.filter(elemento => condición);`
> - Etiquetas con flechas:
>   - Flecha azul desde `condición` → "el callback devuelve `true` o `false` (como las del `if`)"
>   - Flecha verde → "`true` → el elemento SE QUEDA"
>   - Flecha roja → "`false` → el elemento SE DESCARTA"
>   - Flecha naranja desde `arrayFiltrado` → "sale un array MENOR o igual"
>
> **Sección 2 — el ejemplo concreto (array entra → array más chico):**
> - Array de entrada: una caja horizontal de 5 celdas en monospace azul: `5`, `8`, `12`, `20`, `7`.
>   - Las celdas que NO cumplen (`5`, `8`, `7`) marcadas con una X roja y etiqueta "se caen (`false`)".
>   - Las celdas que cumplen (`12`, `20`) marcadas con tilde verde.
> - Una flecha grande en naranja etiquetada: `.filter(n => n > 10)`
> - Array de salida: una caja horizontal de SOLO 2 celdas en monospace azul: `12`, `20`.
> - Etiqueta en negro: "5 entran, 2 salen. El callback dijo `true` para 12 y 20; `false` para 5, 8 y 7 — esos se cayeron."
>
> **Recuadro al pie con borde gris claro — contraste con map:**
> - Encabezado en gris oscuro: "map vs filter — misma firma, propósito distinto:"
> - Texto en negro: "`map` devuelve SIEMPRE el mismo tamaño porque transforma cada uno. `filter` puede devolver MENOS porque selecciona. Si ninguno cumple → array vacío `[]`. Y el original tampoco se toca."
>
> **Código de colores funcional:**
> - Flecha de la condición: azul `#1971c2`.
> - Etiqueta y tilde de "true → se queda": verde `#2f9e44`.
> - X y etiqueta de "false → se descarta / se caen": rojo `#e03131`.
> - Flecha de "array menor" y la flecha grande de filtrado: naranja `#f08c00`.
> - Contenido de las celdas y bloques de código: azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-09]: Anatomía de `.find` + ejemplo (find vs filter)

- **Panel de origen:** Momento 3 — Panel 3.3
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón pedagógico:** Anatomía de sintaxis de `.find` + Comparativa find vs filter al pie (un elemento vs un array)
- **Usado en sub-punto:** 3.3 (`.find()` — encontrar el primero que cumple)

**Prompt:**

> Infografía educativa minimalista sobre "`.find()` — el primero que cumple". Estilo diagrama técnico de libro de texto. Diseño vertical: la anatomía arriba, el ejemplo con una flecha que recorre y se detiene en el primer match, la comparativa find vs filter al pie.
>
> **Título superior centrado en negro:** "`.find()` — EL PRIMERO QUE CUMPLE"
>
> **Subtítulo en gris oscuro debajo del título:** "Recorre el array y devuelve el PRIMER elemento que cumple la condición — el valor directo, NO un array. Se detiene apenas lo encuentra."
>
> **Sección 1 — la anatomía general (arriba, centrada):**
> - Bloque de código en monospace azul con borde gris claro: `const elemento = arrayOriginal.find(elemento => condición);`
> - Etiqueta con flecha verde desde el resultado → "devuelve UN elemento (o `undefined` si ninguno cumple)"
>
> **Sección 2 — el ejemplo concreto con la flecha que se detiene:**
> - Una caja horizontal de 5 celdas en monospace azul: `5`, `8`, `12`, `20`, `7`.
> - Una flecha de recorrido en azul que avanza de izquierda a derecha pasando por `5` (no cumple), `8` (no cumple), y SE DETIENE en `12` con un círculo verde alrededor — etiqueta sobre la parada: "primer match: se detiene acá, NO sigue al 20".
> - Una flecha grande en naranja etiquetada: `.find(n => n > 10)`
> - Resultado: una sola caja resaltada verde: `12` (NO `[12]`) — etiqueta: "el VALOR solo, no un array".
> - Sub-ejemplo en gris oscuro: "Si ninguno cumple → `.find(n => n > 100)` → `undefined`"
>
> **Recuadro destacado al pie con borde gris claro — find vs filter (2 sub-bloques):**
> - Encabezado en gris oscuro: "La confusión típica — misma condición `n > 10`, qué devuelve cada uno:"
> - Sub-bloque verde: "`.filter(n => n > 10)` → `[12, 20]` — un ARRAY con TODOS los que cumplen (puede estar vacío)"
> - Sub-bloque azul: "`.find(n => n > 10)` → `12` — UN solo elemento, el primero que cumple (o `undefined`)"
> - Texto al pie en negro: "Cuando solo necesitás uno, `find`. Cuando querés todos los que cumplen, `filter`."
>
> **Código de colores funcional:**
> - Flecha del resultado ("devuelve un elemento"): verde `#2f9e44`.
> - Flecha de recorrido del array y la parada en el primer match: azul `#1971c2`, con el círculo del match en verde `#2f9e44`.
> - Flecha grande de find: naranja `#f08c00`.
> - Caja del resultado `12`: verde `#2f9e44`.
> - Comparativa — sub-bloque filter: verde `#2f9e44`.
> - Comparativa — sub-bloque find: azul `#1971c2`.
> - Contenido de las celdas y bloques de código: azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-10]: Anatomía de `.reduce` + tabla de iteraciones

- **Panel de origen:** Momento 4 — Panel 4.1
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Anatomía de sintaxis de `.reduce` + Algoritmo numerado (la tabla de iteraciones como traza del acumulador)
- **Usado en sub-punto:** 4.1 (`.reduce()` — el `for` de C05 muere acá)

**Prompt:**

> Infografía educativa minimalista sobre "`.reduce()` — reducir todo el array a un solo valor". Estilo diagrama técnico de libro de texto. Diseño vertical: la anatomía con 3 etiquetas arriba, una tabla de iteraciones de 4 columnas en el medio, el callout del acumulador extra al pie.
>
> **Título superior centrado en negro:** "`.reduce()` — REDUCIR TODO EL ARRAY A UN SOLO VALOR"
>
> **Subtítulo en gris oscuro debajo del título:** "El acumulador va guardando el resultado parcial vuelta a vuelta. El método estrella de la clase: acá el `for` de C05 muere en una línea."
>
> **Sección 1 — la anatomía general (arriba, centrada):**
> - Bloque de código en monospace azul con borde gris claro: `array.reduce((acumulador, valor) => nuevoAcumulador, valorInicial);`
> - 3 etiquetas con flechas:
>   - Flecha verde desde `acumulador` → "el resultado parcial que se va construyendo; arranca en el valor inicial y se actualiza cada vuelta"
>   - Flecha azul desde `valor` → "el elemento actual de la vuelta (igual que el `elemento` de map/filter)"
>   - Flecha naranja desde `valorInicial` → "el último argumento, DESPUÉS del callback; con qué arranca el acumulador"
> - Etiqueta en negro: "El acumulador aparece dos veces: entra como parámetro y SALE como lo que devuelve el callback. Eso es lo que lo hace 'arrastrar' el resultado de vuelta en vuelta."
>
> **Sección 2 — la tabla de iteraciones para `[3000, -45.50, 500]` con inicial `0`:**
> - Encabezado en gris oscuro: "Seguí el acumulador viajando de fila en fila:"
> - Tabla de 4 columnas con encabezados en negro: "Vuelta", "acumulador", "valor", "nuevo acumulador".
>   - Fila 1: `1`, `0`, `3000`, `3000`
>   - Fila 2: `2`, `3000`, `-45.50`, `2954.50`
>   - Fila 3: `3`, `2954.50`, `500`, `3454.50`
> - La columna "nuevo acumulador" resaltada en verde, con flechas discretas mostrando que el "nuevo acumulador" de una fila pasa a ser el "acumulador" de la fila siguiente.
> - Etiqueta al pie de la tabla en negro: "Arranca en 0, se le suma cada valor, lo que queda pasa a la vuelta siguiente. Al final: 3454.50 — el saldo."
>
> **Recuadro destacado con borde rojo grueso — la única excepción:**
> - Encabezado en rojo: "reduce es la ÚNICA con un parámetro extra ADELANTE"
> - Texto en negro: "map, filter y find usan `(elemento, ...)`. reduce suma el `acumulador` adelante: `(acumulador, valor, ...)`. Por eso necesita ese parámetro: arrastra un resultado parcial entre vueltas, mientras los otros procesan cada elemento de forma independiente."
>
> **Recuadro al pie con borde gris claro — las 2 reglas que SÍ o SÍ recordar:**
> - Texto en negro: "1) El callback DEBE retornar el acumulador en cada vuelta — sin return, el acumulador se vuelve `undefined` y todo se rompe. 2) Poné SIEMPRE el valor inicial (el `, 0`): si lo omitís y el array está vacío, reduce da error."
>
> **Código de colores funcional:**
> - Flecha y etiqueta del `acumulador`: verde `#2f9e44`.
> - Flecha y etiqueta del `valor`: azul `#1971c2`.
> - Flecha y etiqueta del `valorInicial`: naranja `#f08c00`.
> - Columna "nuevo acumulador" de la tabla resaltada: verde `#2f9e44`.
> - Recuadro de la excepción del acumulador extra: borde rojo `#e03131`.
> - Bloques de código: azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-11]: Composición como línea de producción

- **Panel de origen:** Momento 4 — Panel 4.2
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9)
- **Patrón pedagógico:** Transición de estados (el dato fluye de estación en estación) + cada caja-función descompuesta con su tarea única
- **Usado en sub-punto:** 4.2 (Funciones puras con `.reduce` — donde se nombra la composición)

**Prompt:**

> Infografía educativa minimalista sobre "Composición — funciones chicas en línea de producción". Estilo diagrama técnico de libro de texto. Diseño horizontal: una línea de producción que fluye de izquierda a derecha, con estaciones (funciones) y productos intermedios.
>
> **Título superior centrado en negro:** "COMPOSICIÓN — FUNCIONES CHICAS EN LÍNEA DE PRODUCCIÓN"
>
> **Subtítulo en gris oscuro debajo del título:** "Combinar funciones pequeñas, donde la salida de una alimenta a la siguiente, para resolver algo más grande. Cada función hace UNA cosa."
>
> **Sección central — la línea de producción (fluye de izquierda a derecha):**
> - Estación 0 — entrada (caja borde azul): `valores` — etiqueta: `[3000, -45.50, 500, -30]`
> - Flecha en negro →
> - Estación 1 — función (caja verde): `obtenerIngresos` — etiqueta debajo: "tarea única: FILTRA los positivos"
> - Flecha en negro →
> - Producto intermedio (caja borde gris): `[3000, 500]` — etiqueta: "array de ingresos"
> - Flecha en negro →
> - Estación 2 — función (caja naranja): `.reduce(...)` — etiqueta debajo: "tarea única: SUMA todo a un valor"
> - Flecha en negro →
> - Estación final — salida (caja borde verde grueso): `total` — etiqueta: `3500`
> - Etiqueta sobre toda la línea en negro: "funciones chicas combinadas → resuelven algo grande"
>
> **Sección — el código que produce esa línea, en recuadro con borde gris claro:**
> - Bloque de código en monospace azul:
>   ```
>   const totalIngresos = valores =>
>     obtenerIngresos(valores).reduce((acumulador, valor) => acumulador + valor, 0);
>   ```
> - Texto en negro: "`totalIngresos` NO escribió un filter — llamó a `obtenerIngresos` (que ya hicimos en M3) y le aplicó reduce. Una función usando OTRA función adentro: eso es composición."
>
> **Recuadro al pie con borde gris claro — la analogía:**
> - Encabezado en gris oscuro: "Como una línea de producción:"
> - Texto en negro: "Cada estación hace una sola tarea —lavar, cortar, empaquetar— y le pasa el resultado a la siguiente. Ninguna estación hace todo; el producto final sale de combinar pasos simples en orden. `obtenerIngresos` lava, `reduce` empaqueta. Es la contracara de la función imperativa gigante de C05 que hacía todo de una."
>
> **Código de colores funcional:**
> - Estación de entrada (`valores`): borde azul `#1971c2`.
> - Estación `obtenerIngresos` y estación final (`total`): borde verde `#2f9e44`.
> - Producto intermedio (`[3000, 500]`): borde gris claro.
> - Estación `.reduce`: borde naranja `#f08c00`.
> - Flechas del flujo entre estaciones: negro `#1e1e1e`.
> - Bloques de código: azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-12]: `.map` vs `.forEach` — retorna / no retorna

- **Panel de origen:** Momento 4 — Panel 4.3
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9)
- **Patrón pedagógico:** Comparativa X vs Y (map vs forEach) + cada columna con su bloque de código de ejemplo
- **Usado en sub-punto:** 4.3 (`.forEach()` — efecto sin retorno)

**Prompt:**

> Infografía educativa minimalista sobre "`.map` vs `.forEach` — retorna / no retorna". Estilo diagrama técnico de libro de texto. Diseño en dos columnas: map a la izquierda, forEach a la derecha, más el ejemplo del cruce de arrays paralelos al pie.
>
> **Título superior centrado en negro:** "`.map` vs `.forEach` — RETORNA / NO RETORNA"
>
> **Subtítulo en gris oscuro debajo del título:** "Misma idea de recorrer el array. La diferencia es qué devuelven: map un array nuevo, forEach nada."
>
> **Columna izquierda — `.map` (borde azul):**
> - Encabezado en azul: "`.map` — RETORNA un array transformado"
> - Bloque de código en monospace azul:
>   ```
>   const dobles = numeros.map(n => n * 2);
>   console.log(dobles);   // [10, 16, 24, ...]
>   ```
> - Etiqueta en azul: "PARA TRANSFORMAR — obtenés un array nuevo con el resultado."
>
> **Columna derecha — `.forEach` (borde naranja oscuro):**
> - Encabezado en naranja oscuro: "`.forEach` — NO retorna nada (`undefined`)"
> - Bloque de código en monospace azul:
>   ```
>   const resultado = valores.forEach(valor => valor * 2);
>   console.log(resultado);   // undefined
>   ```
> - Etiqueta en naranja oscuro: "PARA EFECTOS — imprimir, llamar otras funciones. No esperes un array de vuelta."
>
> **Sección al pie — forEach con índice (el cruce de arrays paralelos):**
> - Encabezado en gris oscuro: "El uso real: cruzar los arrays paralelos con el `indice`"
> - Bloque de código en monospace azul:
>   ```
>   valores.forEach((valor, indice) => {
>     console.log(`${indice + 1}. ${nombres[indice]}: ${valor}`);
>   });
>   // 1. Salario: 3000   2. Cena: -45.5   3. Freelance: 500
>   ```
> - Etiqueta en negro: "El segundo parámetro `indice` (el de M2.3) cruza los dos arrays: `valores[indice]` da el monto, `nombres[indice]` el nombre del MISMO movimiento. Esta es la torpeza de los arrays paralelos que C07 resuelve con objetos."
>
> **Recuadro al pie con borde gris claro — la regla:**
> - Texto en negro: "Detalle de los apuntes: forEach NO es funcional puro — su trabajo ES producir un efecto. Es la alternativa 'decente' al `for` de C05 cuando solo necesitás iterar para imprimir o llamar funciones. Si querés transformar y obtener un array, es `map`."
>
> **Código de colores funcional:**
> - Columna `.map`: borde azul `#1971c2`.
> - Columna `.forEach`: borde naranja oscuro `#e8590c`.
> - Bloques de código: azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

## Capturas manuales

> Sin capturas manuales en esta clase. Todas las imágenes se generan con IA.

---

## Tabla resumen — mapeo IMG → Panel → Sub-punto del guion

| ID | Panel | Momento | Sub-punto | Dimensiones |
|---|---|---|---|---|
| `[IMG-01]` | Panel 1.1 — Funciones como valores (número vs función) | M1 | 1.2 | 1400×900 |
| `[IMG-02]` | Panel 1.2 — Anatomía de la arrow function (2 zonas + tablas) | M1 | 1.4 | 1400×1050 |
| `[IMG-03]` | Panel 1.3 — Tabla de decisión arrow vs function | M1 | 1.5 | 1400×900 |
| `[IMG-04]` | Panel 2.1 — Función pura vs impura | M2 | 2.1 | 1400×900 |
| `[IMG-05]` | Panel 2.2 — Anatomía de orden superior + `transformar` | M2 | 2.2 | 1400×1050 |
| `[IMG-06]` | Panel 2.3 — Las 5 funciones de array + callback universal | M2 | 2.3 | 1400×1050 |
| `[IMG-07]` | Panel 3.1 — Anatomía de `.map` + inmutabilidad | M3 | 3.1 | 1400×1050 |
| `[IMG-08]` | Panel 3.2 — Anatomía de `.filter` | M3 | 3.2 | 1200×900 |
| `[IMG-09]` | Panel 3.3 — Anatomía de `.find` (find vs filter) | M3 | 3.3 | 1200×900 |
| `[IMG-10]` | Panel 4.1 — Anatomía de `.reduce` + tabla de iteraciones | M4 | 4.1 | 1400×1050 |
| `[IMG-11]` | Panel 4.2 — Composición como línea de producción | M4 | 4.2 | 1400×900 |
| `[IMG-12]` | Panel 4.3 — `.map` vs `.forEach` | M4 | 4.3 | 1400×900 |

---

## Checklist de generación

- [ ] Las 12 imágenes IA se generaron y descargaron en una carpeta accesible.
- [ ] Cada imagen revisada visualmente — el texto en pantalla coincide con lo que pidió el prompt (ojo: las IAs frecuentemente deforman textos largos, números o tablas; si una imagen sale con texto mal escrito —sobre todo la tabla de iteraciones de `[IMG-10]`— re-generar el prompt enfatizando la cita literal entre comillas).
- [ ] Las 12 imágenes están guardadas con nombres claros (ej: **_img-01-funciones-como-valores.png_**, **_img-02-anatomia-arrow.png_**, **_img-10-anatomia-reduce.png_**, etc).
- [ ] El **_CLASE 06.excalidraw_** está listo (con los 12 placeholders) → arrastrar cada imagen sobre su placeholder.
