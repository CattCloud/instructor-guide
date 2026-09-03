# Prompts de Imagen — CLASE 05: Programación Imperativa + Arrays

> **Estilo canónico:** **_mi-sistema/DESARROLLO DE SLIDES.md_**.
> **Origen:** generado a partir de **_GUIA EXCALIDRAW - CLASE 05.md_** (estado: Paneles en Borrador — pendiente validación de Eric).
> **Cómo usar:**
> 1. Copiar cada prompt completo (el bloque entre las líneas `### [IMG-XX]:` y el siguiente `---`).
> 2. Pegar en la herramienta de imagen IA de elección (ChatGPT con generación de imagen, Sora, Gemini, DALL-E, Midjourney, etc.).
> 3. Descargar la imagen generada.
> 4. Abrir **_CLASE 05.excalidraw_** en excalidraw.com (cuando esté generado), arrastrar la imagen sobre el placeholder con el mismo `[IMG-XX]` ID y ajustar al rectángulo punteado.
>
> **Importante:** el bloque "Estilo visual" al final de cada prompt es INAMOVIBLE. No reescribirlo ni parafrasearlo. Si lo modificás, el estilo deja de coincidir con el resto del material visual del bootcamp.

---

## Prompts IA (10 imágenes)

---

### [IMG-01]: Anatomía de un array — 4 celdas indexadas + 4 verbos

- **Panel de origen:** Momento 1 — Panel 1.1
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Anatomía de un valor descompuesto (celdas + índices) + Sub-tabla de los 4 verbos esenciales
- **Usado en sub-punto:** 1.3 (¿Qué es un array? — concepto + 4 verbos)

**Prompt:**

> Infografía educativa minimalista sobre "Array — una lista ordenada e indexada desde 0". Estilo diagrama técnico de libro de texto. Diseño centrado: una caja horizontal de celdas en el medio, etiquetas con flechas a cada verbo alrededor, y una anotación destacada al pie sobre el índice 0.
>
> **Título superior centrado en negro:** "ARRAY — UNA LISTA ORDENADA E INDEXADA DESDE 0"
>
> **Subtítulo en gris oscuro debajo del título:** "Una sola variable que guarda muchos valores en orden. Cada valor tiene una posición numerada: el índice."
>
> **Sección central — la caja del array:**
>
> - Una caja horizontal con 4 celdas contiguas pegadas, con bordes grises, cada una con su valor en monospace azul: `'manzana'`, `'pera'`, `'uva'`, `'mango'`.
> - Debajo de cada celda, el índice en número grande rojo: `0`, `1`, `2`, `3`.
> - Etiqueta sobre la caja en monospace gris oscuro: `let frutas = ['manzana', 'pera', 'uva', 'mango'];`
>
> **Los 4 verbos alrededor de la caja, cada uno con su color funcional y una flecha hacia la parte que toca:**
>
> - Verbo CREAR (flecha verde apuntando a la caja completa) → etiqueta: "CREAR con `[]` — `let arr = []` vacío, o `[1, 2, 3]` con valores"
> - Verbo LEER por posición (flecha azul apuntando a la celda del índice 0) → etiqueta: "LEER con `arr[i]` — `frutas[0]` te da `'manzana'` (el primero)"
> - Verbo CONTAR (flecha naranja apuntando al borde derecho de la caja) → etiqueta: "CONTAR con `arr.length` — es PROPIEDAD (sin paréntesis) — acá da `4`"
> - Verbo AGREGAR al final (flecha naranja oscuro apuntando al final de la caja) → etiqueta: "AGREGAR con `arr.push(x)` — es MÉTODO (con paréntesis) — mete al final"
>
> **Recuadro lateral con borde gris claro — propiedad vs método:**
>
> - Encabezado en gris oscuro: "Vocabulario que importa:"
> - Texto en negro: "`.length` SIN paréntesis = propiedad (un dato del array). `.push()` CON paréntesis = método (una acción). Propiedad = dato · Método = acción."
>
> **Anotación destacada al pie en recuadro con borde rojo grueso, ancho completo:**
>
> - Encabezado en rojo: "EL ÍNDICE ARRANCA EN 0 — el bug #1 al empezar con arrays"
> - Texto en negro: "Hay 4 elementos, pero el último vive en la posición 3, no 4. `frutas[4]` no existe → devuelve `undefined`. La fórmula del último elemento que vas a usar toda tu carrera: `arr[arr.length - 1]`."
>
> **Nota inferior en negro:** "Estos 4 verbos —crear, leer, contar, agregar— son la base de TODO lo que viene del M2 en adelante. En una semana son instinto."
>
> **Código de colores funcional:**
> - Índices debajo de las celdas (0, 1, 2, 3): rojo `#e03131`.
> - Flecha y etiqueta del verbo CREAR: verde `#2f9e44`.
> - Flecha y etiqueta del verbo LEER: azul `#1971c2`.
> - Flecha y etiqueta del verbo CONTAR: naranja `#f08c00`.
> - Flecha y etiqueta del verbo AGREGAR: naranja oscuro `#e8590c`.
> - Contenido de las celdas y código: azul `#1971c2`.
> - Anotación del índice 0 al pie: borde rojo `#e03131`.
> - Textos descriptivos y notas: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-02]: Arrays paralelos del proyecto — `nombres[]` + `valores[]` alineados por índice

- **Panel de origen:** Momento 1 — Panel 1.2
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Anatomía de un valor descompuesto (dos arrays apilados con índices compartidos) + Convención de signos al pie
- **Usado en sub-punto:** 1.5 (Modelo de datos del proyecto — 2 arrays paralelos)

**Prompt:**

> Infografía educativa minimalista sobre "Arrays paralelos — un movimiento en dos arrays". Estilo diagrama técnico de libro de texto. Diseño con dos arrays apilados verticalmente alineados por columna, conectados por líneas verticales, más una caja de convención de signos al pie.
>
> **Título superior centrado en negro:** "ARRAYS PARALELOS — UN MOVIMIENTO EN DOS ARRAYS"
>
> **Subtítulo en gris oscuro debajo del título:** "El mismo índice `i` describe el mismo registro en cada array. `nombres[i]` dice QUÉ fue, `valores[i]` dice CUÁNTO."
>
> **Sección central — los dos arrays apilados verticalmente, alineados por columna:**
>
> - Fila de índices arriba, en número grande rojo, alineados con las columnas: `0`, `1`, `2`.
> - Array `nombres` (arriba): etiqueta a la izquierda en azul `nombres`, caja horizontal de 3 celdas con bordes grises y contenido monospace azul: `'Salario'`, `'Cena'`, `'Freelance'`.
> - Array `valores` (abajo): etiqueta a la izquierda en naranja `valores`, caja horizontal de 3 celdas alineadas exactamente bajo las de `nombres`: `3000`, `-45.50`, `50`.
> - Líneas verticales discretas en gris claro punteado conectando cada celda de `nombres` con la celda de `valores` del mismo índice (columna 0, columna 1, columna 2).
>
> **Anotación lateral en recuadro con borde gris claro, a la derecha de los arrays:**
>
> - Encabezado en gris oscuro: "Cómo se lee un movimiento:"
> - Texto en negro: "El movimiento 0 es `'Salario'` por `3000`. Lo leés cruzando los dos arrays en el mismo índice: `nombres[0]` + `valores[0]`."
>
> **Sección de convención de signos en recuadro con borde verde:**
>
> - Encabezado en verde: "CONVENCIÓN DE SIGNOS — el signo guarda el tipo"
> - Dos sub-bloques en paralelo:
>   - Sub-bloque verde: "`+` POSITIVO = ingreso — un salario de 3000 se guarda como `3000`"
>   - Sub-bloque rojo: "`−` NEGATIVO = gasto — una cena de 45.50 se guarda como `-45.50`"
> - Texto al pie del recuadro en negro: "¿Por qué? Calcular el saldo se vuelve trivial: sumás todo el array `valores` y el signo hace el trabajo. Los ingresos suman, los gastos restan. No hay que separar nada."
>
> **Caja destacada al pie en recuadro con borde rojo grueso, ancho completo — la fragilidad:**
>
> - Encabezado en rojo: "FRÁGIL: dependen de VOS para mantenerse sincronizados"
> - Texto en negro: "Cada movimiento exige `push` en los DOS arrays, siempre juntos. Si hacés push en uno y olvidás el otro, el sistema se descalibra... y nada te avisa. El código no rompe — queda mal en silencio. Lo vas a ver ejecutado en vivo al cierre de la clase."
>
> **Código de colores funcional:**
> - Fila de índices (0, 1, 2): rojo `#e03131`.
> - Etiqueta y celdas del array `nombres`: azul `#1971c2`.
> - Etiqueta del array `valores`: naranja `#f08c00`.
> - Líneas verticales de conexión entre arrays: gris claro punteado.
> - Convención de signos — sub-bloque ingreso (+): verde `#2f9e44`.
> - Convención de signos — sub-bloque gasto (−): rojo `#e03131`.
> - Caja de fragilidad al pie: borde rojo `#e03131`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-03]: Las 3 APIs del navegador — WINDOW como caja madre + 3 hijas

- **Panel de origen:** Momento 2 — Panel 2.1
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9)
- **Patrón pedagógico:** Diagrama jerárquico de bifurcación (caja madre → cajas hijas) + Sub-tabla de qué devuelve cada API
- **Usado en sub-punto:** 2.1 (APIs del navegador — prompt, alert y parseFloat)

**Prompt:**

> Infografía educativa minimalista sobre "Las 3 APIs del navegador — un préstamo, no el lenguaje". Estilo diagrama técnico de libro de texto. Diseño jerárquico: una caja madre grande arriba ("WINDOW") con tres flechas en abanico hacia 3 cajas hijas debajo.
>
> **Título superior centrado en negro:** "LAS 3 APIS DEL NAVEGADOR — UN PRÉSTAMO, NO EL LENGUAJE"
>
> **Subtítulo en gris oscuro debajo del título:** "Funcionalidades que el navegador le presta a tu JavaScript. No son parte del lenguaje en sí."
>
> **Sección central — diagrama jerárquico:**
>
> - Caja madre arriba, centrada y grande, fondo blanco con borde azul grueso: "WINDOW — el navegador"
> - Tres flechas saliendo de la caja madre hacia abajo, en abanico, cada una hacia una caja hija con su color funcional:
>
> **Caja hija 1 — `prompt(mensaje)` (borde verde):**
> - Encabezado en verde: `prompt(mensaje)`
> - Texto en negro: "Abre una ventana de input — le pide algo al usuario."
> - Etiqueta destacada en verde: "Devuelve SIEMPRE un STRING (aunque escriba un número). Si cancela → `null`."
>
> **Caja hija 2 — `alert(mensaje)` (borde naranja):**
> - Encabezado en naranja: `alert(mensaje)`
> - Texto en negro: "Muestra una ventana de aviso. Solo informa."
> - Etiqueta en gris oscuro: "No devuelve nada útil."
>
> **Caja hija 3 — `parseFloat(texto)` (borde azul):**
> - Encabezado en azul: `parseFloat(texto)`
> - Texto en negro: "Convierte un string a número decimal. `parseFloat('45.50')` → `45.5`."
> - Etiqueta destacada en rojo: "Si el texto no es número → devuelve `NaN` (no rompe). Ese detalle importa para validar."
>
> **Recuadro lateral con borde gris claro — por qué parseFloat es necesario:**
>
> - Encabezado en gris oscuro: "Por qué convertir:"
> - Texto en negro: "`prompt` siempre da texto. `'100' + '50'` da `'10050'` (concatena), no `150`. Para hacer matemática necesitás números de verdad. Por eso el monto va envuelto en `parseFloat`."
>
> **Anotación destacada al pie en recuadro con borde rojo grueso, ancho completo:**
>
> - Texto en rojo: "Estas 3 viven en el NAVEGADOR. NO son JavaScript puro — un servidor con Node.js no las tiene. Los verbos de array (`push`, `length`) sí son del lenguaje y funcionan en cualquier lado."
>
> **Código de colores funcional:**
> - Caja madre WINDOW: borde azul `#1971c2`.
> - Caja hija `prompt`: borde verde `#2f9e44`.
> - Caja hija `alert`: borde naranja `#f08c00`.
> - Caja hija `parseFloat`: borde azul `#1971c2`.
> - Etiqueta del `NaN` en parseFloat: rojo `#e03131`.
> - Anotación al pie (navegador vs lenguaje): borde rojo `#e03131`.
> - Bloques de código y nombres de función: azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-04]: Anatomía del booleano + cómo decide el `if`

- **Panel de origen:** Momento 2 — Panel 2.2
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9)
- **Patrón pedagógico:** Anatomía del tipo (el booleano con sus 2 valores) + Diagrama de bifurcación (el `if` con dos ramas)
- **Usado en sub-punto:** 2.2 (¿Qué es un booleano? — el tipo true/false + cómo decide el if)

**Prompt:**

> Infografía educativa minimalista sobre "Booleano — el tipo de 2 valores + cómo decide el if". Estilo diagrama técnico de libro de texto. Diseño en dos mitades: el booleano con sus 2 valores a la izquierda, el flujo del `if` con sus dos ramas a la derecha.
>
> **Título superior centrado en negro:** "BOOLEANO — EL TIPO DE 2 VALORES + CÓMO DECIDE EL IF"
>
> **Subtítulo en gris oscuro debajo del título:** "Un tipo primitivo como string y number. La diferencia: solo tiene DOS valores posibles."
>
> **Mitad izquierda — el booleano:**
>
> - Encabezado en gris oscuro: "El booleano solo tiene 2 valores"
> - Una caja con SOLO dos celdas con bordes gruesos:
>   - Celda 1 con borde verde, en monospace: `true`
>   - Celda 2 con borde rojo, en monospace: `false`
> - Etiqueta debajo en negro: "Se escriben con esas palabras exactas, en minúscula, sin comillas. `typeof true` → `'boolean'`."
>
> **Mitad derecha — cómo decide el `if`:**
>
> - Caja central con borde azul, en monospace: `if ( CONDICIÓN )`
> - Dos flechas saliendo de la caja:
>   - Flecha verde hacia una caja "EJECUTA el bloque" — etiqueta sobre la flecha: "si es `true`"
>   - Flecha roja hacia una caja "SALTA el bloque" — etiqueta sobre la flecha: "si es `false`"
>
> **Recuadro al pie con borde gris claro — por qué funcionan las comparaciones:**
>
> - Encabezado en gris oscuro: "¿Por qué funcionan los `if (edad > 18)`? Porque las comparaciones DEVUELVEN un booleano:"
> - Bloque de código en monospace azul:
>   - `3 > 1` → `true`
>   - `5 === 5` → `true`
>   - `"a" === "b"` → `false`
> - Texto en negro: "Primero JS evalúa `edad > 18` y obtiene `true`/`false`. Recién con ese booleano en mano, el `if` decide. El `if` nunca vio la edad — solo vio el booleano que salió de la comparación."
>
> **Anotación destacada al pie en recuadro con borde negro grueso, ancho completo, texto centrado:**
>
> - Texto en negro grande: "EL IF NO COMPARA. EL IF PREGUNTA: ¿ESTO ES TRUE O FALSE?"
>
> **Código de colores funcional:**
> - Celda `true` y rama "ejecuta": verde `#2f9e44`.
> - Celda `false` y rama "salta": rojo `#e03131`.
> - Caja central `if ( CONDICIÓN )` y bloques de código: azul `#1971c2`.
> - Recuadro de la anotación al pie: borde negro `#1e1e1e`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-05]: Truthy / falsy — los 6 falsy vs todo lo demás truthy

- **Panel de origen:** Momento 2 — Panel 2.3
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9)
- **Patrón pedagógico:** Comparativa X vs Y — los 6 falsy cerrados vs el universo abierto truthy
- **Usado en sub-punto:** 2.3 (Truthy / falsy — qué cuenta como verdadero o falso sin comparar)

**Prompt:**

> Infografía educativa minimalista sobre "Truthy / falsy — qué cuenta como verdadero sin comparar". Estilo diagrama técnico de libro de texto. Diseño en dos columnas: FALSY a la izquierda sobre fondo rojo claro, TRUTHY a la derecha sobre fondo verde claro.
>
> **Título superior centrado en negro:** "TRUTHY / FALSY — QUÉ CUENTA COMO VERDADERO SIN COMPARAR"
>
> **Subtítulo en gris oscuro debajo del título:** "Cuando JS necesita un booleano pero le das otra cosa, la convierte. Los que se vuelven `false` se llaman falsy. Todo lo demás, truthy."
>
> **Columna izquierda — FALSY (fondo rojo claro, borde rojo):**
> - Encabezado grande en rojo: "FALSY — los 6 únicos"
> - Sub-etiqueta en gris oscuro: "Memorízalos — son solo 6, no hay más."
> - Lista en monospace negro:
>   - `false` — el booleano false en sí
>   - `0` — el número cero
>   - `""` — string vacío (sin nada adentro)
>   - `null`
>   - `undefined`
>   - `NaN` — Not a Number
>
> **Columna derecha — TRUTHY (fondo verde claro, borde verde):**
> - Encabezado grande en verde: "TRUTHY — TODO lo demás"
> - Sub-etiqueta en gris oscuro: "Cualquier cosa que no esté en la lista de la izquierda."
> - Lista en monospace negro:
>   - `true`
>   - `1`
>   - `-5` — cualquier número distinto de cero
>   - `"hola"` — cualquier texto con contenido
>   - `"0"` — string con un cero ES truthy
>   - `[]` — array vacío
>   - `{}` — objeto vacío
>
> **Recuadro con borde naranja — la trampa clásica:**
> - Encabezado en naranja: "La trampa: `"0"` es TRUTHY"
> - Texto en negro: "El string `"0"` —cero entre comillas— es truthy porque NO está vacío: tiene un carácter adentro. Lo único falsy entre strings es el string totalmente vacío `""`."
>
> **Recuadro con borde azul — aplicación al lab:**
> - Encabezado en azul: "Por qué `!nombre` detecta el campo vacío:"
> - Texto en negro: "Si el usuario apretó OK sin escribir, `nombre` es `""` (falsy). El `!` lo invierte: `!falsy` es `true`. El `if` se ejecuta y muestra el error. Sin truthy/falsy, no se podría detectar el vacío con sintaxis tan corta."
>
> **Anotación destacada al pie en recuadro con borde negro grueso, ancho completo, texto centrado:**
> - Texto en negro: "`if (variable)` SIN comparación → el if pregunta: ¿esta variable es TRUTHY?"
>
> **Código de colores funcional:**
> - Columna FALSY: fondo rojo claro con borde rojo `#e03131`.
> - Columna TRUTHY: fondo verde claro con borde verde `#2f9e44`.
> - Recuadro de la trampa `"0"`: borde naranja `#f08c00`.
> - Recuadro de aplicación al lab: borde azul `#1971c2`.
> - Recuadro de la anotación al pie: borde negro `#1e1e1e`.
> - Valores en las listas y código: monospace negro `#1e1e1e`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-06]: El `if` de validación descompuesto — 4 niveles de defensa

- **Panel de origen:** Momento 2 — Panel 2.4
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Anatomía de sintaxis con 4 flechas a cada parte + Sub-tabla de los 4 niveles numerados
- **Usado en sub-punto:** 2.4 (Validación combinada con `||` — los 4 niveles de defensa del lab)

**Prompt:**

> Infografía educativa minimalista sobre "El if de validación — 4 niveles de defensa en una línea". Estilo diagrama técnico de libro de texto. Diseño vertical: el bloque de código largo arriba, 4 flechas hacia 4 etiquetas numeradas en el medio, anotación lateral del operador OR.
>
> **Título superior centrado en negro:** "EL IF DE VALIDACIÓN — 4 NIVELES DE DEFENSA EN UNA LÍNEA"
>
> **Subtítulo en gris oscuro debajo del título:** "El usuario puede meter basura: nombre vacío, tipo mal escrito, letras en el monto. Una sola línea hace las 4 validaciones a la vez."
>
> **Sección 1 — el bloque de código (arriba, centrado, grande):**
>
> - Bloque de código en monospace azul con borde gris claro:
>   ```
>   if (!nombre || (tipo !== 'ingreso' && tipo !== 'gasto') || isNaN(monto) || monto <= 0)
>   ```
>
> **Sección 2 — las 4 flechas a 4 etiquetas numeradas, cada nivel con su color funcional:**
>
> - Nivel 1 (flecha verde desde `!nombre`) → etiqueta: "1. FALSY — detecta nombre vacío (lo del Panel anterior)"
> - Nivel 2 (flecha naranja desde `tipo !== 'ingreso' && tipo !== 'gasto'`) → etiqueta: "2. OPCIONES CERRADAS — solo acepta 2 valores válidos; un typo, mayúsculas o vacío se rechaza"
> - Nivel 3 (flecha azul desde `isNaN(monto)`) → etiqueta: "3. CONVERSIÓN — `isNaN` = 'is Not a Number?'; atrapa el `NaN` que dejó `parseFloat` cuando hay letras"
> - Nivel 4 (flecha roja desde `monto <= 0`) → etiqueta: "4. REGLA DE NEGOCIO — no se acepta 0 ni negativo; el signo lo manejamos nosotros, no el usuario"
>
> **Anotación lateral grande en recuadro con borde negro grueso — el operador `||`:**
>
> - Encabezado en negro: "El `||` (OR)"
> - Texto en negro: "Devuelve `true` si AL MENOS UNA condición es true. Leído para validar: 'si pasa esto malo, O esto otro malo, O esto otro... rechazá'. Con un solo dato malo alcanza para rechazar todo el movimiento."
>
> **Recuadro al pie con borde gris claro — panorama profesional:**
>
> - Encabezado en gris oscuro: "Para tener el mapa completo:"
> - Texto en negro: "Todo esto es validación del lado del CLIENTE (en el navegador). Es la PRIMERA línea de defensa. En proyectos reales hay más capas: el backend valida otra vez, la base de datos una tercera. ¿Por qué tantas? Porque la del navegador se puede saltar. Hoy dominamos la primera, que es la que el usuario ve."
>
> **Código de colores funcional:**
> - Flecha y etiqueta del Nivel 1 (`!nombre`): verde `#2f9e44`.
> - Flecha y etiqueta del Nivel 2 (opciones cerradas): naranja `#f08c00`.
> - Flecha y etiqueta del Nivel 3 (`isNaN`): azul `#1971c2`.
> - Flecha y etiqueta del Nivel 4 (`monto <= 0`): rojo `#e03131`.
> - Bloque de código central: azul `#1971c2`.
> - Anotación lateral del operador `||`: borde negro `#1e1e1e`.
> - Recuadro de panorama profesional: borde gris claro.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-07]: Anatomía del `while` + loop visual

- **Panel de origen:** Momento 3 — Panel 3.1
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón pedagógico:** Anatomía de sintaxis + Loop visual con flecha de retorno a la condición
- **Usado en sub-punto:** 3.1 (¿Qué es un bucle `while`? — repetición indefinida)

**Prompt:**

> Infografía educativa minimalista sobre "while — repetir mientras la condición sea true". Estilo diagrama técnico de libro de texto. Diseño centrado: el bloque del while con una flecha curva grande de retorno (el loop), un recuadro lateral con la regla de uso, y el ejemplo del lab al pie.
>
> **Título superior centrado en negro:** "WHILE — REPETIR MIENTRAS LA CONDICIÓN SEA TRUE"
>
> **Subtítulo en gris oscuro debajo del título:** "Antes de cada vuelta evalúa la condición. Si es `true`, ejecuta el bloque y vuelve a chequear. Si es `false`, sale."
>
> **Sección central — anatomía con loop visual:**
>
> - Bloque de código en monospace azul con borde gris claro:
>   ```
>   while (condición) {
>     bloque
>   }
>   ```
> - Una flecha curva grande en negro, gruesa, que sale del final del bloque (la llave de cierre) y VUELVE arriba al chequeo de la condición — etiqueta sobre la flecha: "mientras la condición sea `true`, repetir"
> - Anotación con flecha verde hacia `condición` → etiqueta: "se evalúa ANTES de cada vuelta (igual que un `if`, pero una y otra vez)"
>
> **Recuadro lateral con borde naranja — la regla de uso:**
>
> - Encabezado en naranja: "Cuándo usar `while`"
> - Texto en negro: "Cuando NO sabés cuántas veces vas a repetir — lo decide algo externo: el usuario, un evento, un dato. En el lab: ¿cuántos movimientos carga el usuario? Ni idea. Puede ser 1 o 30. El `while` se adapta."
>
> **Sección al pie — el `while` del lab (3 piezas) en recuadro con borde gris claro:**
>
> - Bloque de código en monospace azul:
>   ```
>   let continuar = 'si';
>   while (continuar === 'si') {
>     ...
>     continuar = prompt('¿otro? (si/no)');
>   }
>   ```
> - 3 etiquetas con flechas a las piezas:
>   - Flecha verde desde `let continuar = 'si'` → "VARIABLE DE CONTROL — declarada ANTES del bucle"
>   - Flecha azul desde `continuar === 'si'` → "LA CONDICIÓN — mientras siga `'si'`, repite"
>   - Flecha roja desde `continuar = prompt(...)` → "LA ACTUALIZACIÓN — adentro del bloque; si nunca cambia, el bucle es INFINITO"
>
> **Anotación destacada al pie en recuadro con borde rojo grueso, ancho completo:**
>
> - Texto en rojo: "Bucle infinito: si la condición NUNCA pasa a `false`, el navegador se cuelga. Lo que evita el infinito acá es preguntarle al usuario '¿seguimos?' al final de cada vuelta. El usuario apaga el bucle."
>
> **Código de colores funcional:**
> - Flecha curva de loop (retorno a la condición): negro `#1e1e1e` gruesa.
> - Flecha y etiqueta de la condición: verde `#2f9e44`.
> - Recuadro de la regla de uso: borde naranja `#f08c00`.
> - Flecha de la variable de control: verde `#2f9e44`.
> - Flecha de la condición del lab: azul `#1971c2`.
> - Flecha de la actualización: rojo `#e03131`.
> - Anotación del bucle infinito al pie: borde rojo `#e03131`.
> - Bloques de código: azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-08]: Anatomía del `for` clásico + recuadro comparativo while vs for

- **Panel de origen:** Momento 3 — Panel 3.2
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Anatomía de sintaxis con 3 flechas a las 3 partes del `for` + Comparativa while vs for al costado
- **Usado en sub-punto:** 3.3 (¿Qué es un bucle `for` clásico? — recorrido por contador)

**Prompt:**

> Infografía educativa minimalista sobre "for clásico — recorrer una cantidad definida de veces". Estilo diagrama técnico de libro de texto. Diseño vertical: la anatomía del for con 3 flechas arriba, el detalle del `<` no `<=`, y un recuadro comparativo while vs for al costado.
>
> **Título superior centrado en negro:** "FOR CLÁSICO — RECORRER UNA CANTIDAD DEFINIDA DE VECES"
>
> **Subtítulo en gris oscuro debajo del título:** "El bucle estándar para recorrer un array de principio a fin. Controlado por un contador interno."
>
> **Sección 1 — anatomía del valor (arriba, centrada):**
>
> - Bloque de código grande en monospace azul con borde gris claro:
>   ```
>   for (let i = 0; i < arr.length; i++) {
>     bloque
>   }
>   ```
> - 3 flechas con anotaciones, cada una de su color funcional:
>   - Flecha verde desde `let i = 0` → "1. INICIALIZACIÓN — corre UNA vez al arrancar. El contador parte en 0, el índice del primer elemento."
>   - Flecha naranja desde `i < arr.length` → "2. CONDICIÓN — se chequea antes de cada vuelta. Mientras sea `true`, repite."
>   - Flecha azul desde `i++` → "3. AVANCE — corre al final de cada vuelta. `i++` es la forma corta de `i = i + 1`."
>
> **Recuadro con borde rojo — el detalle del `<` (no `<=`):**
>
> - Encabezado en rojo: "Es MENOR que `length`, NO menor o igual"
> - Texto en negro: "Si el array tiene 4 elementos, `length` es 4, y los índices válidos son 0, 1, 2, 3. Cuando `i` llega a 4 ya no es menor que 4 y paramos — justo después del último. Con `<=` te pasarías un índice (el `undefined` del Panel del array)."
>
> **Recuadro lateral comparativo con borde gris claro — while vs for (2 sub-bloques):**
>
> - Encabezado en gris oscuro: "¿`while` o `for`?"
> - Sub-bloque naranja: "`while` = NO sé cuántas — lo decide el usuario / un evento / un dato"
> - Sub-bloque azul: "`for` = SÍ sé cuántas — el array tiene N elementos (`valores.length`)"
>
> **Sección al pie con borde gris claro — qué hace `i` en cada vuelta:**
>
> - Texto en negro: "En cada vuelta `i` vale algo distinto: primero 0, después 1, después 2... y eso te deja acceder a `arr[i]` — cada elemento, uno por uno. En el lab recorrés `valores` entero para sumar el saldo."
>
> **Código de colores funcional:**
> - Flecha y etiqueta de la inicialización: verde `#2f9e44`.
> - Flecha y etiqueta de la condición: naranja `#f08c00`.
> - Flecha y etiqueta del avance: azul `#1971c2`.
> - Recuadro del detalle `<` vs `<=`: borde rojo `#e03131`.
> - Comparativa — sub-bloque `while`: naranja `#f08c00`.
> - Comparativa — sub-bloque `for`: azul `#1971c2`.
> - Bloque de código central: azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-09]: Función imperativa vs función pura (semilla a C06)

- **Panel de origen:** Momento 4 — Panel 4.1
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9)
- **Patrón pedagógico:** Comparativa X vs Y (imperativa vs pura) + flechas de efecto hacia el estado global externo
- **Usado en sub-punto:** 4.1 (¿Qué es una función imperativa? — concepto + contraste con función pura)

**Prompt:**

> Infografía educativa minimalista sobre "Función imperativa vs función pura". Estilo diagrama técnico de libro de texto. Diseño en dos columnas: la imperativa a la izquierda con flechas hacia una caja de estado global externo, la pura a la derecha con una flecha hacia su valor de retorno.
>
> **Título superior centrado en negro:** "FUNCIÓN IMPERATIVA vs FUNCIÓN PURA"
>
> **Subtítulo en gris oscuro debajo del título:** "Hoy escribimos imperativo a propósito — para que SIENTAS sus límites antes de conocer la alternativa en C06."
>
> **Columna izquierda — FUNCIÓN IMPERATIVA (HOY) (borde rojo):**
>
> - Encabezado en rojo: "FUNCIÓN IMPERATIVA (hoy)"
> - Bloque de código en monospace azul:
>   ```
>   function registrarMovimiento() {
>     // ...
>     nombres.push(nombre);
>     valores.push(valor);
>   }
>   ```
> - 2 flechas rojas saliendo de la función hacia una caja externa con borde rojo: "ESTADO GLOBAL: nombres, valores"
> - Leyenda en negro: "No recibe nada por parámetros (`()` vacíos). Lee y MODIFICA variables que viven AFUERA de ella."
> - Etiqueta en rojo: "Produce efectos: `push`, `console.log`, `alert`. No solo calcula — cambia cosas del mundo."
>
> **Columna derecha — FUNCIÓN PURA (C06) (borde verde):**
>
> - Encabezado en verde: "FUNCIÓN PURA (C06)"
> - Bloque de código en monospace azul:
>   ```
>   function sumar(a, b) {
>     return a + b;
>   }
>   ```
> - Flecha verde saliendo de la función hacia una caja: "VALOR DE RETORNO"
> - Leyenda en negro: "Recibe TODO lo que necesita por parámetros. Devuelve UN valor. No toca nada de afuera."
> - Etiqueta en verde: "`sumar(a, b)` solo conoce `a` y `b` — no le importa el resto del programa. Más robusta y fácil de testear."
>
> **Recuadro al pie con borde gris claro — por qué muestro las dos:**
>
> - Texto en negro: "La imperativa es más fácil al principio (secuencia clara, paso a paso) pero a medida que el código crece se vuelve frágil: cualquier función puede tocar cualquier variable global, y rastrear quién rompió qué se complica."
>
> **Anotación destacada al pie en recuadro con borde naranja grueso, ancho completo:**
>
> - Texto en naranja: "EL CÓDIGO DE HOY SE REFACTORIZA EN C06 — el dolor de hoy es la motivación del próximo módulo (programación funcional)."
>
> **Código de colores funcional:**
> - Columna de la función imperativa y sus flechas al estado global: rojo `#e03131`.
> - Caja del estado global externo: borde rojo `#e03131`.
> - Columna de la función pura y su flecha al return: verde `#2f9e44`.
> - Bloques de código: azul `#1971c2`.
> - Anotación al pie (semilla a C06): borde naranja `#f08c00`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-10]: Refactor de extracción antes/después — código suelto → organizado en funciones

- **Panel de origen:** Momento 4 — Panel 4.2
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Transición de estados / antes-después + Comparativa del archivo desordenado vs organizado
- **Usado en sub-punto:** 4.2 (Refactor de extracción — distinto del refactor aditivo de C04)

**Prompt:**

> Infografía educativa minimalista sobre "Refactor de extracción — de código suelto a funciones". Estilo diagrama técnico de libro de texto. Diseño en dos columnas conectadas por una flecha central: ANTES (todo suelto) a la izquierda, DESPUÉS (organizado) a la derecha.
>
> **Título superior centrado en negro:** "REFACTOR DE EXTRACCIÓN — DE CÓDIGO SUELTO A FUNCIONES"
>
> **Subtítulo en gris oscuro debajo del título:** "Mover un bloque que ya funciona DENTRO de una función. El original deja de existir en su lugar; queda solo la llamada."
>
> **Columna izquierda — ANTES (todo suelto) (borde rojo):**
>
> - Encabezado en rojo: "ANTES — todo suelto"
> - Mockup de un archivo alto y apretado (representación esquemática, monospace gris):
>   - Bloque arriba: `let nombres = []; let valores = [];` (etiqueta: "globales")
>   - Bloque alto en el medio: `while (continuar === 'si') {` ... 15 líneas de captura + validación adentro ... `}` (etiqueta roja: "while GIGANTE con toda la lógica adentro")
>   - Bloque colgando al final: `let saldo = 0; for (...) { ... }` + `console.log(saldo)` (etiqueta roja: "for + saldo colgando suelto")
>
> **Columna derecha — DESPUÉS (organizado) (borde verde):**
>
> - Encabezado en verde: "DESPUÉS — organizado"
> - Mockup de un archivo ordenado (monospace, secciones claras):
>   - Bloque arriba: `let nombres = []; let valores = [];` (etiqueta: "globales")
>   - 3 funciones con nombre en cajas verdes: `registrarMovimiento()`, `calcularSaldo()`, `mostrarResumen()`
>   - Bloque chico al final: `while (continuar === 'si') { registrarMovimiento(); ... }` + `mostrarResumen();` (etiqueta verde: "while chiquito: solo llama a la función")
>
> **Flecha grande central en negro, gruesa, de izquierda a derecha** — etiqueta sobre la flecha: "EXTRAEMOS la lógica a funciones — el código viejo DESAPARECE de su lugar"
>
> **Recuadro con borde rojo — la regla de oro:**
>
> - Encabezado en rojo: "Si queda duplicado afuera, BÓRRALO"
> - Texto en negro: "Después de mover el código no puede quedar NADA de captura/validación/saldo suelto fuera de las funciones. Si lo dejás duplicado en los dos lugares, el programa lo ejecuta dos veces y se rompe."
>
> **Anotación destacada al pie en recuadro con borde rojo grueso, ancho completo — contraste con C04:**
>
> - Encabezado en rojo: "≠ refactor ADITIVO de C04"
> - Texto en negro: "En C04 NO borrábamos nada — solo agregábamos líneas con `var()`. Hoy es lo OPUESTO: CORTÁS de un lado y PEGÁS en otro; el original se borra. Dos refactors, dos reglas opuestas. C04: agregar sin borrar. Hoy: mover y borrar el original."
>
> **Código de colores funcional:**
> - Columna ANTES (todo suelto) y sus etiquetas de problema: borde rojo `#e03131`.
> - Columna DESPUÉS (organizado) y sus cajas de funciones: borde verde `#2f9e44`.
> - Flecha central de transformación: negro `#1e1e1e` gruesa.
> - Recuadro de la regla de oro: borde rojo `#e03131`.
> - Anotación al pie (contraste con C04): borde rojo `#e03131`.
> - Mockups de código: monospace gris y azul `#1971c2`.
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
| `[IMG-01]` | Panel 1.1 — Anatomía de un array | M1 | 1.3 | 1400×1050 |
| `[IMG-02]` | Panel 1.2 — Arrays paralelos del proyecto | M1 | 1.5 | 1400×1050 |
| `[IMG-03]` | Panel 2.1 — Las 3 APIs del navegador | M2 | 2.1 | 1400×900 |
| `[IMG-04]` | Panel 2.2 — Booleano + cómo decide el `if` | M2 | 2.2 | 1400×900 |
| `[IMG-05]` | Panel 2.3 — Truthy / falsy | M2 | 2.3 | 1400×900 |
| `[IMG-06]` | Panel 2.4 — El `if` de validación (4 niveles) | M2 | 2.4 | 1400×1050 |
| `[IMG-07]` | Panel 3.1 — Anatomía del `while` + loop visual | M3 | 3.1 | 1200×900 |
| `[IMG-08]` | Panel 3.2 — Anatomía del `for` clásico | M3 | 3.3 | 1400×1050 |
| `[IMG-09]` | Panel 4.1 — Función imperativa vs pura | M4 | 4.1 | 1400×900 |
| `[IMG-10]` | Panel 4.2 — Refactor de extracción antes/después | M4 | 4.2 | 1400×1050 |

---

## Checklist de generación

- [ ] Las 10 imágenes IA se generaron y descargaron en una carpeta accesible.
- [ ] Cada imagen revisada visualmente — el texto en pantalla coincide con lo que pidió el prompt (ojo: las IAs frecuentemente deforman textos largos o números; si una imagen sale con texto mal escrito, re-generar el prompt enfatizando la cita literal entre comillas).
- [ ] Las 10 imágenes están guardadas con nombres claros (ej: **_img-01-anatomia-array.png_**, **_img-02-arrays-paralelos.png_**, etc).
- [ ] El **_CLASE 05.excalidraw_** está listo (con los 10 placeholders) → arrastrar cada imagen sobre su placeholder.
