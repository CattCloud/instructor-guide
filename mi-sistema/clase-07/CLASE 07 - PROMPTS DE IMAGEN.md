# Prompts de Imagen — CLASE 07: Objetos + POO con `class`

> **Estilo canónico:** **_mi-sistema/DESARROLLO DE SLIDES.md_**.
> **Origen:** generado a partir de **_GUIA EXCALIDRAW - CLASE 07.md_** (estado: Paneles en Borrador — pendiente validación de Eric).
> **Cómo usar:**
> 1. Copiar cada prompt completo (el bloque entre las líneas `### [IMG-XX]:` y el siguiente `---`).
> 2. Pegar en la herramienta de imagen IA de elección (ChatGPT con generación de imagen, Sora, Gemini, DALL-E, Midjourney, etc.).
> 3. Descargar la imagen generada.
> 4. Abrir **_CLASE 07.excalidraw_** en excalidraw.com (cuando esté generado), arrastrar la imagen sobre el placeholder con el mismo `[IMG-XX]` ID y ajustar al rectángulo punteado.
>
> **Importante:** el bloque "Estilo visual" al final de cada prompt es INAMOVIBLE. No reescribirlo ni parafrasearlo. Si lo modificás, el estilo deja de coincidir con el resto del material visual del bootcamp.
>
> **Enfoque code-forward (CLASE 07):** todas las imágenes son infografías técnicas de anatomía de código, tablas y comparativas de 2 columnas, estilo samanthaming.com. PROHIBIDO pedir dibujos de metáfora: nada de fichas/tarjetas de contacto, cortadores/moldes de galletas, teléfonos cartoon, televisores ni cápsulas-app. Los conceptos celular/molde/instancia/cápsula se transmiten por CÓDIGO real + etiquetas con flechas a las partes del código, nunca por ilustración. Convención semántica de color del día: datos/propiedades = azul `#1971c2`; métodos/acciones = verde `#2f9e44`; `this`/palabras a recordar/advertencias = rojo `#e03131`; etiquetas de proceso/flechas = naranja `#f08c00`; títulos = negro `#1e1e1e`; encabezado secundario = naranja oscuro `#e8590c`.

---

## Prompts IA (8 imágenes)

---

### [IMG-01]: El objeto literal — anatomía + acceso con punto + posición vs nombre

- **Panel de origen:** Momento 1 — Panel 1.1
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9)
- **Patrón pedagógico:** Anatomía de sintaxis (el objeto literal y el acceso con punto descompuestos con flechas) + Comparativa X vs Y al pie (array por posición vs objeto por nombre)
- **Usado en sub-punto:** 1.3 (El objeto literal: anatomía + acceso con punto + array por posición vs objeto por nombre)

**Prompt:**

> Infografía educativa minimalista sobre "El objeto literal — datos agrupados por nombre". Estilo diagrama técnico de libro de texto, code-forward (todo el contenido es código real con etiquetas y flechas, NADA de dibujos de fichas o tarjetas). Diseño vertical: la anatomía del objeto literal arriba, el acceso con punto en el medio, una comparativa de 2 columnas al pie.
>
> **Título superior centrado en negro:** "EL OBJETO LITERAL — DATOS AGRUPADOS POR NOMBRE"
>
> **Subtítulo en gris oscuro debajo del título:** "Una estructura que agrupa valores relacionados como pares `clave: valor`, declarada con llaves `{}`. Cada par describe una característica."
>
> **Sección 1 — anatomía del objeto literal (arriba, centrada):**
> - Bloque de código en monospace azul con borde gris claro y fondo blanco:
>   ```
>   const persona = {
>     nombre: 'Ana',
>     edad: 30,
>     pais: 'Perú'
>   };
>   ```
> - Flecha azul sobre las `{ }` → etiqueta en azul: "las llaves `{}` agrupan pares clave:valor"
> - Flecha azul sobre `nombre` → etiqueta en azul: "CLAVE — el nombre de la propiedad"
> - Flecha naranja sobre `'Ana'` → etiqueta en naranja: "VALOR — texto, número, booleano, hasta otro objeto"
> - Etiqueta al pie del bloque en negro: "Cada par `clave: valor` se separa del siguiente con coma."
>
> **Sección 2 — el acceso con punto (centro):**
> - Bloque de código en monospace azul:
>   ```
>   persona.nombre   // 'Ana'
>   persona.edad     // 30
>   ```
> - Flecha naranja descomponiendo `persona.nombre` en sus 3 partes → etiqueta en naranja: "`objeto` . `propiedad` — 'de persona, dame el campo nombre'"
> - Etiqueta en negro: "Es el mismo punto que ya usás en `.push()` o `.length` — esos también son propiedades del array."
>
> **Sección 3 — comparativa al pie: POSICIÓN vs NOMBRE (2 columnas):**
>
> **Columna izquierda — ARRAY por POSICIÓN (borde rojo):**
> - Encabezado en rojo: "MISMOS DATOS EN ARRAY — por POSICIÓN"
> - Bloque de código en monospace azul: `['Ana', 30, 'Perú']`
> - Acceso en monospace azul: `arr[0]` · `arr[1]` · `arr[2]`
> - Etiqueta en rojo: "Se accede por POSICIÓN: `arr[0]`. Si te confundís de índice, leés el dato equivocado y nadie te avisa."
>
> **Columna derecha — OBJETO por NOMBRE (borde verde):**
> - Encabezado en verde: "EN OBJETO — por NOMBRE"
> - Bloque de código en monospace azul: `{ nombre: 'Ana', edad: 30, pais: 'Perú' }`
> - Acceso en monospace azul: `obj.nombre` · `obj.edad` · `obj.pais`
> - Etiqueta en verde: "Se accede por NOMBRE: `obj.clave`. El nombre describe el dato — no hay índice que confundir."
>
> **Anotación destacada al pie en recuadro con borde negro grueso, ancho completo, texto centrado:**
> - Texto en negro: "Array = colección ordenada, se lee por POSICIÓN. Objeto = un registro con campos nombrados, se lee por NOMBRE."
>
> **Código de colores funcional:**
> - Flecha de las llaves `{}` y de la CLAVE: azul `#1971c2`.
> - Flecha del VALOR y del acceso con punto: naranja `#f08c00`.
> - Columna ARRAY por posición: borde rojo `#e03131`.
> - Columna OBJETO por nombre: borde verde `#2f9e44`.
> - Recuadro de la anotación al pie: borde negro `#1e1e1e`.
> - Bloques de código: azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-02]: Arrays paralelos vs array de objetos + tabla array/objeto

- **Panel de origen:** Momento 1 — Panel 1.2
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Comparativa X vs Y (2 arrays paralelos frágiles vs 1 array de objetos íntegro) + Transición de estados (modelo C05/C06 → modelo C07) + Tabla de decisión array/objeto
- **Usado en sub-punto:** 1.5 (Arrays paralelos vs array de objetos + tabla array/objeto)

**Prompt:**

> Infografía educativa minimalista sobre "Arrays paralelos vs array de objetos". Estilo diagrama técnico de libro de texto, code-forward (los arrays se representan como bloques de código, NO como pilas o mazos dibujados). Diseño vertical: comparativa de 2 columnas arriba, el acceso encadenado en el medio, una tabla de 3 columnas al pie.
>
> **Título superior centrado en negro:** "ARRAYS PARALELOS vs ARRAY DE OBJETOS"
>
> **Subtítulo en gris oscuro debajo del título:** "Un array cuyos elementos son objetos: `[{...}, {...}]`. Combina el ORDEN del array + los NOMBRES descriptivos de los objetos."
>
> **Sección 1 — comparativa de 2 columnas:**
>
> **Columna izquierda — 2 ARRAYS PARALELOS (borde rojo, fondo rojo claro):**
> - Encabezado en rojo: "ANTES (C05/C06) — frágil"
> - Bloque de código en monospace azul:
>   ```
>   let nombres = ['Salario', 'Cena'];
>   let valores = [3000, -45.50];
>   ```
> - Flecha roja uniendo `nombres[1]` con `valores[1]` → etiqueta en rojo: "el dato 'Cena' vive PARTIDO: nombre en `nombres[1]`, monto en `valores[1]`"
> - Etiqueta en rojo: "Dos arrays que tengo que mantener alineados a mano. Borro de uno y me olvido del otro → se descalibra en silencio."
>
> **Columna derecha — 1 ARRAY DE OBJETOS (borde verde, fondo verde claro):**
> - Encabezado en verde: "AHORA (C07) — íntegro"
> - Bloque de código en monospace azul:
>   ```
>   let movimientos = [
>     { nombre: 'Salario', tipo: 'ingreso', valor: 3000 },
>     { nombre: 'Cena',    tipo: 'gasto',   valor: 45.50 }
>   ];
>   ```
> - Etiqueta en verde: "Cada dato viaja junto en su objeto. Imposible desincronizar: no hay dos puntos que se puedan desfasar, hay una sola fuente."
>
> **Flecha grande en naranja entre las 2 columnas, de izquierda a derecha**, con etiqueta en naranja: "un solo centro de datos"
>
> **Sección 2 — el acceso encadenado (centro):**
> - Bloque de código en monospace azul:
>   ```
>   movimientos[0].nombre   // 'Salario'
>   ```
> - Flecha naranja descomponiendo `movimientos[0].nombre` → etiqueta en naranja: "`[0]` trae el objeto por ÍNDICE (como cualquier array) + `.nombre` su PROPIEDAD por nombre — índice + propiedad encadenados"
>
> **Sección 3 — tabla array vs objeto al pie (3 columnas):**
> - Encabezados de tabla en negro: "Estructura" · "Se accede por" · "Ideal para"
> - Fila 1 (borde azul): "Array `[a, b, c]`" · "índice (posición): `arr[0]`" · "colección ordenada del mismo tipo"
> - Fila 2 (borde verde): "Objeto `{ k: v }`" · "nombre: `obj.k`" · "un 'algo' con características nombradas"
> - Etiqueta al pie de la tabla en negro: "Array para listas ordenadas; objeto para un registro con campos nombrados. Y se combinan: array de objetos."
>
> **Código de colores funcional:**
> - Columna de arrays paralelos y la flecha `nombres[1]`↔`valores[1]`: rojo `#e03131` (fondo rojo claro `#ffc9c9`).
> - Columna de array de objetos: verde `#2f9e44` (fondo verde claro `#b2f2bb`).
> - Flecha grande entre columnas y la descomposición del acceso encadenado: naranja `#f08c00`.
> - Fila Array de la tabla: borde azul `#1971c2`.
> - Fila Objeto de la tabla: borde verde `#2f9e44`.
> - Bloques de código: azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-03]: Un objeto POO = propiedades + métodos

- **Panel de origen:** Momento 3 — Panel 3.1
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9)
- **Patrón pedagógico:** Caja de definición de concepto (el objeto POO con dos zonas rotuladas) + Anatomía (propiedades vs métodos descompuestos)
- **Usado en sub-punto:** 3.1 (Un objeto POO = características (propiedades) + acciones (métodos))

**Prompt:**

> Infografía educativa minimalista sobre "Un objeto = características + acciones". Estilo diagrama técnico de libro de texto, code-forward. IMPORTANTE: el celular se representa SOLO como una lista estructurada de código (un pseudo-objeto con sus campos y acciones listados), NO como un dibujo de teléfono. Diseño: una caja central con borde negro dividida en DOS zonas separadas por una línea horizontal.
>
> **Título superior centrado en negro:** "UN OBJETO = CARACTERÍSTICAS + ACCIONES"
>
> **Subtítulo en gris oscuro debajo del título:** "POO modela el mundo como objetos: cosas que tienen características Y saben hacer cosas con ellas. Datos + las funciones que los manipulan, juntos."
>
> **Estructura central — una caja con borde negro grueso, encabezado de la caja centrado en negro: "Celular" (como pseudo-objeto listado, sin dibujo de teléfono). La caja está dividida en dos zonas:**
>
> **Zona superior — PROPIEDADES (fondo azul claro suave):**
> - Etiqueta de zona en azul: "PROPIEDADES (características)"
> - Lista en monospace azul:
>   ```
>   marca
>   modelo
>   bateria
>   ```
> - Etiqueta lateral en azul: "lo que el objeto ES / tiene — pares clave:valor, como los del M1"
>
> **Zona inferior — MÉTODOS (fondo verde claro suave):**
> - Etiqueta de zona en verde: "MÉTODOS (acciones)"
> - Lista en monospace verde (los paréntesis marcan que son acciones):
>   ```
>   llamar()
>   sacarFoto()
>   ```
> - Etiqueta lateral en verde: "lo que el objeto SABE HACER — funciones que operan sobre sus propias propiedades"
>
> **Etiqueta central destacada en recuadro con borde naranja, ancho completo, debajo de la caja, texto centrado:**
> - Texto en negro: "Un objeto agrupa DATOS + las FUNCIONES que los manipulan en un mismo bloque independiente."
>
> **Recuadro al pie con borde gris claro — la conexión con la mañana:**
> - Encabezado en gris oscuro: "Lo nuevo respecto al M1:"
> - Texto en negro: "En la mañana viste objetos que SOLO tenían propiedades (características). Lo nuevo de POO es que el objeto también tiene COMPORTAMIENTO: métodos. El celular no solo guarda su batería; también sabe DECIR si está cargado."
>
> **Código de colores funcional:**
> - Zona PROPIEDADES, su etiqueta y su lista: azul `#1971c2` (fondo azul claro suave).
> - Zona MÉTODOS, su etiqueta y su lista: verde `#2f9e44` (fondo verde claro suave).
> - Caja contenedora del objeto: borde negro `#1e1e1e`.
> - Recuadro de la definición central: borde naranja `#f08c00`.
> - Recuadro de la conexión con M1: borde gris claro.
> - Bloques de código: monospace; propiedades en azul `#1971c2`, métodos en verde `#2f9e44`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-04]: `class` — anatomía + 1 clase → N instancias

- **Panel de origen:** Momento 3 — Panel 3.2
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9)
- **Patrón pedagógico:** Anatomía de sintaxis (`class NombreDeLaClase { }` con flechas a `class` y al PascalCase) + Transición de estados (un molde produce N instancias con `new`)
- **Usado en sub-punto:** 3.2 (¿Qué es una clase? Anatomía de `class` + 1 clase → N instancias)

**Prompt:**

> Infografía educativa minimalista sobre "class — el molde que fabrica objetos". Estilo diagrama técnico de libro de texto, code-forward. IMPORTANTE: las palabras "molde / plantilla / fábrica" aparecen SOLO como etiquetas de texto sobre el código, NUNCA como dibujos (nada de cortadores de galletas ni teléfonos). Diseño vertical: la anatomía de la sintaxis arriba, el concepto "1 clase → N instancias" abajo en código.
>
> **Título superior centrado en negro:** "`class` — EL MOLDE QUE FABRICA OBJETOS"
>
> **Subtítulo en gris oscuro debajo del título:** "Un molde para crear muchos objetos con la misma forma (propiedades) y el mismo comportamiento (métodos). Se define una vez; con él se fabrican objetos. Es definir TU PROPIO tipo de dato."
>
> **Sección 1 — anatomía de la sintaxis general (arriba, centrada):**
> - Bloque de código en monospace azul con borde gris claro y fondo blanco:
>   ```
>   class NombreDeLaClase {
>     // el contenido del molde (lo armamos por capas)
>   }
>   ```
> - Flecha roja sobre `class` → etiqueta en rojo: "palabra clave `class` — abre la definición del molde"
> - Flecha azul sobre `NombreDeLaClase` → etiqueta en azul: "Nombre en PascalCase — Mayúscula inicial (`Celular`, `Movimiento`, `Presupuesto`). Distinto de variables y funciones, que van en minúscula."
> - Etiqueta al pie en negro: "La clase NO es un objeto: es el molde. Los objetos concretos se crean con `new`."
>
> **Sección 2 — 1 clase → N instancias (abajo, en código):**
> - Bloque de código del molde en monospace azul con borde azul: `class Celular { }`
> - Etiqueta sobre el molde en naranja: "1 molde — la plantilla 'celular en general', se escribe UNA vez"
> - Flecha grande en naranja derivando hacia tres bloques de instancia:
>   - Caja 1 en monospace azul: `new Celular()` → etiqueta "instancia A"
>   - Caja 2 en monospace azul: `new Celular()` → etiqueta "instancia B"
>   - Caja 3 en monospace azul: `new Celular()` → etiqueta "instancia C"
> - Etiqueta destacada bajo las instancias en negro: "Una clase (molde) → muchas instancias (objetos creados con `new`), cada una independiente."
>
> **Sección 3 — el caso del proyecto (recuadro al pie con borde gris claro):**
> - Encabezado en gris oscuro: "En el proyecto:"
> - Bloque de código en monospace azul: `class Movimiento { }`
> - Texto en negro: "`class Movimiento` es el molde 'movimiento en general'. Cada movimiento del Gestor será una instancia hecha con `new Movimiento(...)`."
>
> **Código de colores funcional:**
> - Flecha y etiqueta de la palabra clave `class`: rojo `#e03131`.
> - Flecha y etiqueta del nombre PascalCase: azul `#1971c2`.
> - Etiqueta del molde y flecha grande hacia las instancias: naranja `#f08c00`.
> - Cajas de instancia (`new Celular()`) y bloque del molde: borde azul `#1971c2`.
> - Recuadro del caso del proyecto: borde gris claro.
> - Bloques de código: azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-05]: Capa 2 — Constructor + `this` (a mano → automatizado)

- **Panel de origen:** Momento 3 — Panel 3.4
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Transición de estados / antes-después (asignar propiedades a mano → constructor que lo automatiza) + Anatomía (el constructor con `this` resaltado) + recuadro de advertencia del error sin `new`
- **Usado en sub-punto:** 3.4 (Capa 2: Constructor + `this`)

**Prompt:**

> Infografía educativa minimalista sobre "Capa 2 — el constructor pone las propiedades solas". Estilo diagrama técnico de libro de texto, code-forward, denso. Diseño: comparativa de 2 columnas antes/después con una flecha en el medio arriba, el resaltado de `this` en el centro, un recuadro de advertencia al pie.
>
> **Título superior centrado en negro:** "CAPA 2 — EL CONSTRUCTOR PONE LAS PROPIEDADES SOLAS"
>
> **Subtítulo en gris oscuro debajo del título:** "Un método especial que se ejecuta automáticamente al hacer `new`. Recibe los datos como parámetros y los guarda como propiedades de la instancia, con `this`. Reemplaza asignar a mano una por una."
>
> **Sección 1 — comparativa antes/después (2 columnas con flecha en el medio):**
>
> **Columna izquierda — CAPA 1: a mano (borde rojo suave):**
> - Encabezado en rojo: "CAPA 1 — tedioso"
> - Bloque de código en monospace azul:
>   ```
>   const c = new Celular();
>   c.marca = 'Samsung';
>   c.modelo = 'A14';
>   c.bateria = 80;
>   ```
> - Etiqueta en rojo: "Una línea por característica. Si me olvido una, el objeto queda incompleto."
>
> **Flecha grande en naranja, horizontal entre columnas → etiqueta en naranja: "el constructor lo automatiza"**
>
> **Columna derecha — CAPA 2: constructor (borde verde):**
> - Encabezado en verde: "CAPA 2 — automático"
> - Bloque de código en monospace azul:
>   ```
>   class Celular {
>     constructor(marca, modelo, bateria) {
>       this.marca = marca;
>       this.modelo = modelo;
>       this.bateria = bateria;
>     }
>   }
>
>   const miCel = new Celular('Samsung', 'A14', 80);
>   ```
> - Etiqueta en verde: "Las MISMAS 3 propiedades, pero se ponen solas al crear. `new Celular(...)` en 1 línea. El constructor corre solo — nunca lo llamás a mano."
>
> **Sección 2 — el resaltado de `this` (centro, destacado):**
> - La línea `this.marca = marca` resaltada con fondo amarillo.
> - Flecha roja apuntando a `this` → etiqueta destacada en rojo: "`this` = el objeto que se está creando AHORA"
> - Texto en negro: "Al hacer `new Celular('Samsung', ...)`, dentro del constructor `this` es el celular-Samsung. Al hacer `new Celular('iPhone', ...)`, `this` es el celular-iPhone. El mismo código sirve para todos, porque `this` siempre apunta al que se está creando."
>
> **Recuadro de advertencia al pie con borde rojo grueso, fondo rojo claro, ancho completo — el error sin `new`:**
> - Encabezado en rojo: "⚠ El error si te olvidás el `new`"
> - Bloque de código en monospace azul: `const miCel = Celular('Samsung', 'A14', 80);   // SIN new`
> - Texto en negro: "`Class constructor Celular cannot be invoked without 'new'`. Bien que sea explícito: la clase te avisa claro que faltó el `new`. Mejor un error claro que un bug silencioso."
>
> **Código de colores funcional:**
> - Columna de la Capa 1 a mano: borde rojo suave `#e03131`.
> - Flecha grande entre columnas: naranja `#f08c00`.
> - Columna de la Capa 2 constructor: borde verde `#2f9e44`.
> - Resaltado de la línea `this.marca = marca`: fondo amarillo `#ffec99`; flecha y etiqueta de `this`: rojo `#e03131`.
> - Recuadro de advertencia del error sin `new`: borde rojo `#e03131`, fondo rojo claro `#ffc9c9`.
> - Bloques de código: azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-06]: Encapsulación — de suelto (C06) a cápsula (`class Presupuesto`)

- **Panel de origen:** Momento 4 — Panel 4.1
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Transición de estados (datos/funciones dispersos → encapsulados en una clase) + Comparativa X vs Y (suelto vs cápsula) + recuadro reporte posicional → nombrado
- **Usado en sub-punto:** 4.1 (Encapsulación: de suelto a cápsula `class Presupuesto`)

**Prompt:**

> Infografía educativa minimalista sobre "Encapsular — datos + operaciones en la misma cápsula". Estilo diagrama técnico de libro de texto, code-forward. IMPORTANTE: la cápsula se representa como un bloque de clase con borde, NUNCA como un dibujo de cápsula o de app. Diseño: comparativa de 2 columnas arriba (suelto vs encapsulado), un recuadro de reporte posicional vs nombrado al pie.
>
> **Título superior centrado en negro:** "ENCAPSULAR — DATOS + OPERACIONES EN LA MISMA CÁPSULA"
>
> **Subtítulo en gris oscuro debajo del título:** "En vez de 'un array acá y funciones allá', todo vive dentro de una clase que se gobierna a sí misma. `Movimiento` encapsula UN movimiento; `Presupuesto` encapsula la COLECCIÓN entera y todo lo que se hace con ella."
>
> **Sección 1 — comparativa de 2 columnas:**
>
> **Columna izquierda — SUELTO (C06) (borde rojo, fondo rojo claro):**
> - Encabezado en rojo: "ANTES (C06) — disperso"
> - Bloque de código en monospace azul:
>   ```
>   // global suelta
>   let movimientos = [];
>
>   // functional-utils.js — funciones sueltas
>   totalIngresos(movimientos)
>   totalGastos(movimientos)
>   calcularSaldo(movimientos)
>   buscarPorNombre(movimientos, texto)
>   ```
> - Etiqueta en rojo: "Datos por un lado (global), operaciones por el otro (otro archivo). Hay que pasarles el array por parámetro cada vez."
>
> **Columna derecha — CÁPSULA (C07) (borde verde, fondo verde claro):**
> - Encabezado en verde: "AHORA (C07) — encapsulado"
> - Bloque de código en monospace azul (los nombres de método en verde):
>   ```
>   class Presupuesto {
>     constructor() {
>       this.movimientos = [];   // el dato, ADENTRO
>     }
>     agregar(movimiento) { ... }
>     totalIngresos() { ... }    // leen this.movimientos
>     totalGastos() { ... }
>     saldo() { ... }
>     buscarPorNombre(texto) { ... }
>     resumen() { ... }
>   }
>   ```
> - Etiqueta en verde: "El array es `this.movimientos`. Las funciones de C06 ahora son métodos: leen `this.movimientos` en vez de recibirlo por parámetro. Todo gobernado desde adentro."
>
> **Flecha grande en naranja, horizontal entre columnas → etiqueta destacada en naranja: "encapsular = datos (`this.movimientos`) + operaciones (métodos) en la misma cápsula"**
>
> **Sección 2 — el reporte posicional → nombrado (recuadro al pie, 2 sub-bloques):**
> - Encabezado en gris oscuro: "La ganancia extra — `resumen()` devuelve un OBJETO nombrado:"
> - Sub-bloque rojo suave: "C06: array posicional `reporte[0]`, `reporte[1]`... — hay que acordarse de qué hay en cada posición"
> - Sub-bloque verde, bloque de código en monospace azul:
>   ```
>   resumen() {
>     return {
>       cantidad: this.movimientos.length,
>       ingresos: this.totalIngresos(),
>       gastos: this.totalGastos(),
>       saldo: this.saldo()
>     };
>   }
>   // se lee: resumen().saldo  ← por NOMBRE
>   ```
> - Texto al pie en negro: "Mismo salto 'posicional → nombrado' del M2 (modelo), ahora en la salida."
>
> **Código de colores funcional:**
> - Columna SUELTO (C06): borde rojo `#e03131`, fondo rojo claro `#ffc9c9`.
> - Columna CÁPSULA (C07): borde verde `#2f9e44`, fondo verde claro `#b2f2bb`; nombres de método en verde `#2f9e44`.
> - Flecha grande entre columnas: naranja `#f08c00`.
> - Sub-bloque del reporte posicional: rojo suave `#e03131`.
> - Sub-bloque del reporte nombrado: verde `#2f9e44`.
> - Bloques de código: azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-07]: Tabla antes/después — el viaje del modelo (C05/C06 → C07)

- **Panel de origen:** Momento 5 — Panel 5.1
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9)
- **Patrón pedagógico:** Comparativa X vs Y (modelo antes vs ahora, fila por fila) + Transición de estados (el mismo programa en dos momentos de su evolución)
- **Usado en sub-punto:** 5.1 (Recorrer la tabla — el viaje del modelo)

**Prompt:**

> Infografía educativa minimalista sobre "El viaje del modelo — C05/C06 → C07". Estilo diagrama técnico de libro de texto, code-forward. Diseño: una tabla de 2 columnas × 6 filas, columna roja "Antes" a la izquierda, columna verde "Ahora" a la derecha, una anotación destacada al pie.
>
> **Título superior centrado en negro:** "EL VIAJE DEL MODELO — C05/C06 → C07"
>
> **Subtítulo en gris oscuro debajo del título:** "El mismo programa de siempre, pero mirá cómo cambió su esqueleto en tres clases. Cada fila resolvió un dolor que ustedes mismos sintieron."
>
> **Tabla de 2 columnas × 6 filas:**
> - Encabezado columna izquierda en rojo, fondo rojo claro suave: "ANTES (C05 / C06)"
> - Encabezado columna derecha en verde, fondo verde claro suave: "AHORA (C07)"
> - Las celdas con código en monospace azul; el resto del texto en negro:
>
>   | ANTES (C05 / C06) | AHORA (C07) |
>   |---|---|
>   | 2 arrays paralelos | 1 array de objetos |
>   | Tipo codificado en el signo | Tipo explícito (`'ingreso'` / `'gasto'`) |
>   | Funciones sueltas en otro archivo | Métodos dentro del objeto |
>   | Estado en variables globales | Estado encapsulado en `Presupuesto` |
>   | Reporte posicional (`reporte[0]`) | Reporte nombrado (`resumen().saldo`) |
>   | Frágil: desincronizar era fácil | Íntegro: los datos viajan juntos |
>
> - Una flecha naranja discreta por fila, de la celda roja a la verde, reforzando "esto se transformó en aquello".
>
> **Anotación destacada al pie en recuadro con borde negro grueso, ancho completo, texto centrado:**
> - Texto en negro: "No cambiamos lo que el programa HACE; cambiamos cómo está ORGANIZADO — y eso es lo que lo hace mantenible."
>
> **Código de colores funcional:**
> - Columna ANTES: rojo `#e03131`, fondo rojo claro suave `#ffc9c9`.
> - Columna AHORA: verde `#2f9e44`, fondo verde claro suave `#b2f2bb`.
> - Flechas discretas por fila: naranja `#f08c00`.
> - Recuadro de la anotación al pie: borde negro `#1e1e1e`.
> - Celdas con código: azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-08]: Los tres paradigmas coexisten en el mismo Gestor

- **Panel de origen:** Momento 5 — Panel 5.2
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón pedagógico:** Comparativa de los tres paradigmas como bloques de código en paralelo + Anatomía (cada bloque rotulado con su paradigma) apuntando con flechas al mismo Gestor central
- **Usado en sub-punto:** 5.2 (Los tres paradigmas coexisten + puente a C08)

**Prompt:**

> Infografía educativa minimalista sobre "Los tres paradigmas coexisten". Estilo diagrama técnico de libro de texto, code-forward. IMPORTANTE: cada paradigma se reconoce por su construcción de código característica (`while` / `.filter().reduce()` / método de clase), NO por símbolos abstractos ni iconos. Diseño: tres bloques de código etiquetados apuntando con flechas a una caja central, una anotación al pie.
>
> **Título superior centrado en negro:** "LOS TRES PARADIGMAS COEXISTEN"
>
> **Subtítulo en gris oscuro debajo del título:** "POO no reemplaza lo anterior: es otra forma de organizar lo mismo. Viste el MISMO proyecto escrito de tres maneras — y en el código real los tres conviven."
>
> **Tres bloques de código etiquetados (en fila o en abanico, cada uno con su color de borde):**
>
> **Bloque 1 — IMPERATIVO (borde naranja oscuro):**
> - Etiqueta en naranja oscuro: "IMPERATIVO (C05) — paso a paso"
> - Bloque de código en monospace azul:
>   ```
>   while (continuar === 'si') {
>     registrarMovimiento();
>   }
>   ```
>
> **Bloque 2 — FUNCIONAL (borde azul):**
> - Etiqueta en azul: "FUNCIONAL (C06) — transformar datos"
> - Bloque de código en monospace azul:
>   ```
>   this.movimientos
>     .filter(m => m.esIngreso())
>     .reduce((acc, m) => acc + m.valor, 0);
>   ```
>
> **Bloque 3 — POO (borde verde):**
> - Etiqueta en verde: "POO (C07) — modelar con objetos"
> - Bloque de código en monospace azul (nombre de método en verde):
>   ```
>   saldo() {
>     return this.totalIngresos() - this.totalGastos();
>   }
>   ```
>
> **Centro — el Gestor (caja central con borde negro grueso):** texto centrado en negro: "el mismo Gestor de Presupuesto"
>
> **Tres flechas naranjas desde cada bloque de código hacia la caja central del Gestor.**
>
> **Anotación destacada al pie en recuadro con borde naranja grueso, ancho completo, texto centrado:**
> - Texto en negro: "No compiten, se combinan: un método (POO) por dentro usa `.filter`/`.reduce` (funcional) y un `while` (imperativo)."
>
> **Código de colores funcional:**
> - Bloque IMPERATIVO: borde naranja oscuro `#e8590c`.
> - Bloque FUNCIONAL: borde azul `#1971c2`.
> - Bloque POO: borde verde `#2f9e44`; nombre de método en verde `#2f9e44`.
> - Caja central del Gestor: borde negro `#1e1e1e`.
> - Las tres flechas convergentes hacia el Gestor y el recuadro de la anotación al pie: naranja `#f08c00`.
> - Bloques de código: azul `#1971c2`.
> - Textos descriptivos: negro `#1e1e1e` y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

## Capturas manuales

> Sin capturas manuales en esta clase. Todas las imágenes se generan con IA. (El M2 es 100% VS Code en vivo, sin paneles ni screenshots.)

---

## Tabla resumen — mapeo IMG → Panel → Sub-punto del guion

| ID | Panel | Momento | Sub-punto | Dimensiones |
|---|---|---|---|---|
| `[IMG-01]` | Panel 1.1 — El objeto literal (anatomía + posición vs nombre) | M1 | 1.3 | 1400×900 |
| `[IMG-02]` | Panel 1.2 — Arrays paralelos vs array de objetos + tabla | M1 | 1.5 | 1400×1050 |
| `[IMG-03]` | Panel 3.1 — Objeto POO = propiedades + métodos | M3 | 3.1 | 1400×900 |
| `[IMG-04]` | Panel 3.2 — `class` (anatomía) + 1 clase → N instancias | M3 | 3.2 | 1400×900 |
| `[IMG-05]` | Panel 3.4 — Constructor + `this` (a mano → automatizado) | M3 | 3.4 | 1400×1050 |
| `[IMG-06]` | Panel 4.1 — Encapsulación: suelto → cápsula `Presupuesto` | M4 | 4.1 | 1400×1050 |
| `[IMG-07]` | Panel 5.1 — Tabla antes/después (el viaje del modelo) | M5 | 5.1 | 1400×900 |
| `[IMG-08]` | Panel 5.2 — Los tres paradigmas coexisten | M5 | 5.2 | 1200×900 |

---

## Checklist de generación

- [ ] Las 8 imágenes IA se generaron y descargaron en una carpeta accesible.
- [ ] Cada imagen revisada visualmente — el texto en pantalla coincide con lo que pidió el prompt (ojo: las IAs frecuentemente deforman textos largos, código o tablas; si una imagen sale con texto mal escrito —sobre todo la tabla de 6 filas de `[IMG-07]` o el constructor de `[IMG-05]`— re-generar el prompt enfatizando la cita literal del código entre comillas).
- [ ] Verificar que NINGUNA imagen incluyó dibujos de metáfora (teléfonos, fichas/tarjetas, cortadores de galletas, cápsulas-app). Si aparecen, re-generar insistiendo "code-forward, solo código y etiquetas, sin ilustraciones".
- [ ] Las 8 imágenes están guardadas con nombres claros (ej: **_img-01-objeto-literal.png_**, **_img-04-class-anatomia.png_**, **_img-05-constructor-this.png_**, etc).
- [ ] El **_CLASE 07.excalidraw_** está listo (con los 8 placeholders) → arrastrar cada imagen sobre su placeholder.
