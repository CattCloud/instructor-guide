# GUÍA EXCALIDRAW — CLASE 07: Objetos + POO con `class`

> **Curso:** Code 201
> **Módulo:** M2 — Clase 3 de 4
> **Estado:** Paneles documentados — pendiente validación de Eric
> **Total Paneles:** 8 (2 M1 + 2 M3 + 1 M4 + 2 M5 — el M2 es 100% VS Code en vivo, sin paneles)
> **Fecha:** 2026-06-08
> **Fuente del guion:** mi-sistema/clase-07/CODE 201 - Flujo de Presentacion 07.md
> **Patrón visual común:** enfoque **code-forward / anatomía sin metáforas ilustradas**. El contenido de cada panel se construye con **código real + etiquetas con flechas a las partes del código (anatomía) + tablas + bloques comparativos**, estilo infografía técnica tipo samanthaming.com (§5.5.1). **PROHIBIDO** todo dibujo de metáfora: nada de fichas/tarjetas de contacto, cortadores/moldes de galletas, teléfonos cartoon, televisores con control, ni cápsulas-app. Los conceptos celular/molde/instancia/cápsula se transmiten por CÓDIGO y ESTRUCTURA (clase, instancias, propiedades listadas), no por ilustración. Convención semántica POO consistente en TODOS los paneles: datos/propiedades = azul **_#1971c2_**; métodos/acciones = verde **_#2f9e44_**; `this`/palabras a recordar/advertencias = rojo **_#e03131_**; etiquetas de proceso/flechas = naranja **_#f08c00_**; títulos = negro **_#1e1e1e_**; encabezado secundario = naranja oscuro **_#e8590c_** (opcional). Código siempre monospace azul **_#1971c2_**, extraído LITERAL del flujo de presentación de Eric (`Celular`/marca/modelo/bateria/estaCargado/describir para lo didáctico; `Movimiento`/`Presupuesto` para el proyecto). Sin emojis (el símbolo `⚠` en recuadros de advertencia está permitido). Paleta restringida a los 6 colores canónicos del §3. Todos los paneles son **Imagen-slide** porque exigen precisión geométrica: bloques de código alineados, flechas a fragmentos exactos del código, tablas de columnas y comparativas de 2 lados — más confiable con IA que dibujado a mano.

---

## Momento 1: Apertura + objetos básicos

> **Estado:** Borrador
> **Paneles del Momento:** 2 (Panel 1.1 da la anatomía del objeto literal —acceso con punto + comparativa array por posición vs objeto por nombre—; Panel 1.2 contrasta arrays paralelos vs array de objetos + la tabla array/objeto). El sub-punto 1.1 (apertura + descubrir el problema de los arrays paralelos con el error en vivo) y 1.2 (setup del proyecto) son **VS Code / consola en vivo** y NO llevan panel. El sub-punto 1.4 (leer/modificar/agregar propiedades + nota de `const`) también es **VS Code en vivo** y NO lleva panel.

---

### Panel 1.1 — El objeto literal: anatomía + acceso con punto + array por posición vs objeto por nombre

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 1.1 (el objeto como ficha)*}***`
- **Tipo:** Imagen-slide (precisión geométrica: anatomía con flechas a `{}`, clave y valor + descomposición del acceso `objeto . propiedad` + comparativa de 2 columnas alineadas — más confiable con IA que a mano).
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9, horizontal: anatomía del objeto arriba + el acceso con punto en el medio + la comparativa array/objeto al pie en 2 columnas)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de sintaxis — el objeto literal descompuesto con flechas a `{}`, clave y valor; el acceso `persona.nombre` descompuesto en `objeto . propiedad`) + Patrón 3 (Comparativa X vs Y al pie — los mismos datos en array por posición vs objeto por nombre).
- **Concepto pedagógico que visualiza:** qué es un **objeto literal** (estructura de pares clave:valor declarada con `{}`) y por qué **acceder por NOMBRE** (objeto) es más seguro que **acceder por POSICIÓN** (array). Sin el panel, "objeto" y "punto" son jerga. Con la anatomía del código (flechas a cada parte) + la comparativa al pie (`['Ana', 30, 'Perú']` con índices frágiles vs `{nombre, edad, pais}` con nombres), el alumno VE que el objeto etiqueta cada dato — imposible leer el dato equivocado por confundirse de índice. NO se ilustra ninguna ficha/tarjeta: el concepto vive en el código anotado.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "EL OBJETO LITERAL — DATOS AGRUPADOS POR NOMBRE"
- **Subtítulo** (gris oscuro, 20px): "Una estructura que agrupa valores relacionados como pares `clave: valor`, declarada con llaves `{}`. Cada par describe una característica."
- **Sección 1 — anatomía del objeto literal (arriba, centrada):**
  - Bloque de código (monospace azul **_#1971c2_**, fondo blanco con borde gris claro):
    ```
    const persona = {
      nombre: 'Ana',
      edad: 30,
      pais: 'Perú'
    };
    ```
  - Flecha azul **_#1971c2_** sobre las `{ }` → etiqueta (azul 18px): "las llaves `{}` agrupan pares clave:valor"
  - Flecha azul **_#1971c2_** sobre `nombre` → etiqueta (azul 16px): "CLAVE — el nombre de la propiedad"
  - Flecha naranja **_#f08c00_** sobre `'Ana'` → etiqueta (naranja 16px): "VALOR — texto, número, booleano, hasta otro objeto"
  - Etiqueta al pie del bloque (negro 14px): "Cada par `clave: valor` se separa del siguiente con coma."
- **Sección 2 — el acceso con punto (centro):**
  - Bloque de código (monospace azul **_#1971c2_**):
    ```
    persona.nombre   // 'Ana'
    persona.edad     // 30
    ```
  - Flecha naranja **_#f08c00_** descomponiendo `persona.nombre` en sus 3 partes → etiqueta (naranja 18px): "`objeto` . `propiedad` — 'de persona, dame el campo nombre'"
  - Etiqueta (negro 13px): "Es el mismo punto que ya usás en `.push()` o `.length` — esos también son propiedades del array."
- **Sección 3 — comparativa al pie: POSICIÓN vs NOMBRE (2 columnas):**

  **Columna izquierda — ARRAY (borde rojo **_#e03131_**):**
  - Encabezado (rojo **_#e03131_** 18px): "MISMOS DATOS EN ARRAY — por POSICIÓN"
  - Bloque de código (monospace azul **_#1971c2_**): `['Ana', 30, 'Perú']`
  - Acceso (monospace azul): `arr[0]` · `arr[1]` · `arr[2]`
  - Etiqueta roja **_#e03131_** (14px): "Se accede por POSICIÓN: `arr[0]`. Si te confundís de índice, leés el dato equivocado y nadie te avisa."

  **Columna derecha — OBJETO (borde verde **_#2f9e44_**):**
  - Encabezado (verde **_#2f9e44_** 18px): "EN OBJETO — por NOMBRE"
  - Bloque de código (monospace azul **_#1971c2_**): `{ nombre: 'Ana', edad: 30, pais: 'Perú' }`
  - Acceso (monospace azul): `obj.nombre` · `obj.edad` · `obj.pais`
  - Etiqueta verde **_#2f9e44_** (14px): "Se accede por NOMBRE: `obj.clave`. El nombre describe el dato — no hay índice que confundir."

- **Anotación destacada al pie** (recuadro con borde negro **_#1e1e1e_** grueso, ancho completo):
  - Texto (negro **_#1e1e1e_** 18px, centrado): "Array = colección ordenada, se lee por POSICIÓN. Objeto = un registro con campos nombrados, se lee por NOMBRE."

**Anchor pedagógico:** la anatomía del código con flechas a `{}`, clave y valor convierte "objeto literal" de jerga a estructura visible. La comparativa al pie (array por posición rojo vs objeto por nombre verde) ancla la ventaja del nombre sobre el índice — la semilla del refactor de M2 (arrays paralelos → array de objetos). Sin ningún dibujo de ficha: todo el peso lo lleva el código anotado.

**Notas para Eric:** se proyecta en el sub-punto 1.3, después de la apertura. Podés señalar las flechas de la anatomía mientras leés "llaves, clave, valor" y bajar a la comparativa cuando insistís en "por nombre, no por posición". El acceso con punto conecta con `.push()`/`.length` que ya usan. El sub-punto 1.4 (modificar/agregar + la nota de `const`) lo hacés en VS Code en vivo, sin panel.

---

### Panel 1.2 — Arrays paralelos vs array de objetos + tabla array/objeto

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 1.2 (mazo de fichas vs dos pilas)**`
- **Tipo:** Imagen-slide (precisión geométrica: 2 bloques de código alineados con flecha de desincronización, descomposición del acceso encadenado y tabla de 3 columnas — más confiable con IA que a mano).
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso: comparativa de 2 columnas arriba —arrays paralelos frágiles vs array de objetos— + el acceso encadenado en el medio + la tabla array/objeto de 3 columnas al pie)
- **Patrón canónico de referencia:** Patrón 3 (Comparativa X vs Y — 2 arrays paralelos vs 1 array de objetos) + Patrón 9 (Transición de estados — el modelo frágil de C05/C06 → el modelo íntegro de C07) + Patrón 2 (la tabla array/objeto como cuadro de decisión).
- **Concepto pedagógico que visualiza:** por qué el **array de objetos** reemplaza a los **arrays paralelos**. Sin el panel, "imposible desincronizar" es una afirmación. Con los 2 arrays paralelos mostrados como dos bloques de código que hay que mantener alineados a mano vs el array de objetos donde cada dato viaja junto, el alumno VE que en el segundo modelo no existen dos puntos de datos que se puedan desfasar. La tabla al pie cierra el criterio array vs objeto. Code-forward: los arrays se representan como bloques de código, no como pilas/mazos dibujados.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "ARRAYS PARALELOS vs ARRAY DE OBJETOS"
- **Subtítulo** (gris oscuro, 20px): "Un array cuyos elementos son objetos: `[{...}, {...}]`. Combina el ORDEN del array + los NOMBRES descriptivos de los objetos."
- **Sección 1 — comparativa de 2 columnas:**

  **Columna izquierda — 2 ARRAYS PARALELOS (borde rojo **_#e03131_**, fondo rojo claro **_#ffc9c9_**):**
  - Encabezado (rojo **_#e03131_** 22px): "ANTES (C05/C06) — frágil"
  - Bloque de código (monospace azul **_#1971c2_**):
    ```
    let nombres = ['Salario', 'Cena'];
    let valores = [3000, -45.50];
    ```
  - Flecha roja **_#e03131_** uniendo `nombres[1]` con `valores[1]` → etiqueta roja (14px): "el dato 'Cena' vive PARTIDO: nombre en `nombres[1]`, monto en `valores[1]`"
  - Etiqueta roja **_#e03131_** (14px): "Dos arrays que tengo que mantener alineados a mano. Borro de uno y me olvido del otro → se descalibra en silencio."

  **Columna derecha — 1 ARRAY DE OBJETOS (borde verde **_#2f9e44_**, fondo verde claro **_#b2f2bb_**):**
  - Encabezado (verde **_#2f9e44_** 22px): "AHORA (C07) — íntegro"
  - Bloque de código (monospace azul **_#1971c2_**):
    ```
    let movimientos = [
      { nombre: 'Salario', tipo: 'ingreso', valor: 3000 },
      { nombre: 'Cena',    tipo: 'gasto',   valor: 45.50 }
    ];
    ```
  - Etiqueta verde **_#2f9e44_** (14px): "Cada dato viaja junto en su objeto. Imposible desincronizar: no hay dos puntos que se puedan desfasar, hay una sola fuente."

- **Flecha grande** (naranja **_#f08c00_**) entre las 2 columnas, de izquierda a derecha, con etiqueta (naranja 16px): "un solo centro de datos"

- **Sección 2 — el acceso encadenado (centro):**
  - Bloque de código (monospace azul **_#1971c2_**):
    ```
    movimientos[0].nombre   // 'Salario'
    ```
  - Flecha naranja **_#f08c00_** descomponiendo `movimientos[0].nombre` → etiqueta (naranja 16px): "`[0]` trae el objeto por ÍNDICE (como cualquier array) + `.nombre` su PROPIEDAD por nombre — índice + propiedad encadenados"

- **Sección 3 — tabla array vs objeto al pie (3 columnas, igual al flujo de Eric):**
  - Encabezado de tabla (negro **_#1e1e1e_** 16px): columnas "Estructura" · "Se accede por" · "Ideal para"
  - Fila 1 (borde azul **_#1971c2_**): "**Array** `[a, b, c]`" · "índice (posición): `arr[0]`" · "colección ordenada del mismo tipo"
  - Fila 2 (borde verde **_#2f9e44_**): "**Objeto** `{ k: v }`" · "nombre: `obj.k`" · "un 'algo' con características nombradas"
  - Etiqueta al pie de la tabla (negro 14px): "Array para listas ordenadas; objeto para un registro con campos nombrados. Y se combinan: array de objetos."

**Anchor pedagógico:** las 2 columnas (rojo frágil vs verde íntegro) hacen tangible la fragilidad de mantener dos arrays alineados a mano frente a la integridad del array de objetos. La flecha de `nombres[1]`↔`valores[1]` ancla EXACTAMENTE el dolor que el alumno sintió con el error en vivo del sub-punto 1.1. El acceso encadenado `movimientos[0].nombre` prepara los métodos de M3, y la tabla cierra el criterio de cuándo usar cada estructura.

**Notas para Eric:** se proyecta en el sub-punto 1.5, al cerrar M1. Es el panel que conecta la teoría del objeto (Panel 1.1) con el refactor del proyecto que arranca en M2. Podés señalar la flecha roja `nombres[1]`↔`valores[1]` mientras recordás el desastre del inicio, y la columna verde al decir "esto es lo que lo reemplaza". La tabla la recorrés en voz, una fila por vez. Todo M2 (el refactor real al proyecto) es VS Code en vivo — sin paneles.

---

## Momento 2: Refactor del modelo (arrays paralelos → array de objetos)

> **Sin paneles Excalidraw.** Todo el M2 es **VS Code en vivo**: el antes/después del modelo (2.1), adaptar `registrarMovimiento` (2.2), corregir las funciones de `functional-utils.js` con las 3 trampas (2.3), corregir `imprimirReporte` (2.4) y el flujo final + checkpoint (2.5) se hacen tipeando y ejecutando en el editor y la consola. No hay diagrama: el refactor se VE en el código real, no en un panel. La comparativa conceptual del modelo ya quedó anclada en el Panel 1.2 de M1.

---

## Momento 3: Introducción a POO + `class` por capas (`Movimiento`)

> **Estado:** Borrador
> **Paneles del Momento:** 2 (Panel 3.1 define el objeto POO como características + acciones —propiedades + métodos—; Panel 3.2 da la anatomía de `class` + el concepto 1 clase → N instancias, todo en código). El sub-punto 3.3 (Capa 1 — propiedades + `new`/instancia, LAB 2.2) y el sub-punto 3.5 (Capa 3 — métodos, LAB 2.4) son **VS Code en vivo** y NO llevan panel. El sub-punto 3.4 (Capa 2 — constructor + `this`) SÍ lleva panel (3.4). El sub-punto 3.6 (usar la clase en el proyecto, LAB 2.5) es VS Code en vivo, sin panel.

---

### Panel 3.1 — Un objeto POO = características (propiedades) + acciones (métodos)

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 3.1 (un objeto = características + acciones)**`
- **Tipo:** Imagen-slide (precisión geométrica: una caja con dos zonas separadas, listas de código alineadas y etiquetas de zona — más confiable con IA que a mano).
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9, horizontal: una estructura central con dos zonas claramente separadas —PROPIEDADES arriba, MÉTODOS abajo— + la etiqueta central de definición)
- **Patrón canónico de referencia:** Patrón 2 (Caja de definición de concepto — el objeto POO definido visualmente) + Patrón 1 (anatomía: las dos zonas del objeto rotuladas y descompuestas).
- **Concepto pedagógico que visualiza:** la **definición de objeto en POO** — un bloque que agrupa DATOS (propiedades = características) + las FUNCIONES que los manipulan (métodos = acciones). Sin el panel, "objeto POO" se confunde con el objeto literal de M1 (que solo tenía propiedades). Con la estructura de dos zonas (azul propiedades / verde métodos) usando el celular como ejemplo en forma de pseudo-objeto listado, el alumno VE que lo NUEVO de POO es el comportamiento. NO se dibuja ningún teléfono: el celular se representa como lista estructurada de características + acciones.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "UN OBJETO = CARACTERÍSTICAS + ACCIONES"
- **Subtítulo** (gris oscuro, 20px): "POO modela el mundo como objetos: cosas que tienen características Y saben hacer cosas con ellas. Datos + las funciones que los manipulan, juntos."
- **Estructura central — un bloque/caja con borde negro **_#1e1e1e_** dividido en DOS zonas separadas por una línea horizontal. Encabezado del bloque (negro 22px, centrado): "Celular"** (como ejemplo, en forma de pseudo-objeto, NO dibujo de teléfono):

  **Zona superior — PROPIEDADES (fondo azul claro suave, etiqueta de zona azul **_#1971c2_** 22px): "PROPIEDADES (características)"**
  - Lista en monospace azul **_#1971c2_**:
    ```
    marca
    modelo
    bateria
    ```
  - Etiqueta lateral azul **_#1971c2_** (14px): "lo que el objeto ES / tiene — pares clave:valor, como los del M1"

  **Zona inferior — MÉTODOS (fondo verde claro suave, etiqueta de zona verde **_#2f9e44_** 22px): "MÉTODOS (acciones)"**
  - Lista en monospace verde **_#2f9e44_** (los paréntesis marcan que son acciones):
    ```
    llamar()
    sacarFoto()
    ```
  - Etiqueta lateral verde **_#2f9e44_** (14px): "lo que el objeto SABE HACER — funciones que operan sobre sus propias propiedades"

- **Etiqueta central destacada** (recuadro con borde naranja **_#f08c00_**, ancho completo, debajo del bloque):
  - Texto (negro **_#1e1e1e_** 18px, centrado): "Un objeto agrupa DATOS + las FUNCIONES que los manipulan en un mismo bloque independiente."

- **Recuadro al pie — la conexión con la mañana** (borde gris claro):
  - Encabezado (gris oscuro 14px): "Lo nuevo respecto al M1:"
  - Texto (negro 13px): "En la mañana viste objetos que SOLO tenían propiedades (características). Lo nuevo de POO es que el objeto también tiene COMPORTAMIENTO: métodos. El celular no solo guarda su batería; también sabe DECIR si está cargado."

**Anchor pedagógico:** las dos zonas separadas (azul propiedades / verde métodos) anclan la convención semántica de color del día entero y hacen visible que un objeto POO es la suma de características + acciones. Usar el celular como pseudo-objeto listado (no dibujo) mantiene el foco en la estructura del código. El recuadro de conexión con M1 cierra el contraste "solo datos → datos + comportamiento".

**Notas para Eric:** se proyecta en el sub-punto 3.1, durante/después de la dinámica "el mundo es objetos" (la dinámica la hacés en el chat; este panel ordena lo que el grupo listó en dos columnas). Podés señalar la zona azul al decir "esto son las propiedades, ya las vimos" y la zona verde al introducir "esto es lo nuevo: los métodos". El celular acá es solo ejemplo estructural — el mismo molde se aplica a perro/cuenta de banco en voz.

---

### Panel 3.2 — ¿Qué es una clase? Anatomía de `class` + 1 clase → N instancias

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 3.2 (la clase como molde)**`
- **Tipo:** Imagen-slide (precisión geométrica: anatomía de la sintaxis con flechas a `class` y al PascalCase + diagrama molde→N instancias en código — más confiable con IA que a mano).
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9, horizontal: anatomía de la sintaxis `class { }` arriba con etiquetas + el concepto "1 clase → N instancias" abajo, todo en código)
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de sintaxis — `class NombreDeLaClase { }` con flechas a `class` y al nombre PascalCase) + Patrón 9 (Transición de estados — una clase/molde produce N instancias con `new`).
- **Concepto pedagógico que visualiza:** qué es una **clase** (un molde para crear muchos objetos con la misma forma) y la relación **1 clase → N instancias**, mostrada COMO CÓDIGO. Sin el panel, "molde" es metáfora vacía. Con la anatomía de la sintaxis + el código `class Celular {}` produciendo varias `new Celular()` distintas, el alumno VE que la clase se escribe UNA vez y fabrica objetos independientes. NADA de cortador de galletas ni teléfonos: las palabras "plantilla/fábrica/molde" aparecen SOLO como texto-etiqueta sobre el código.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "`class` — EL MOLDE QUE FABRICA OBJETOS"
- **Subtítulo** (gris oscuro, 20px): "Un molde para crear muchos objetos con la misma forma (propiedades) y el mismo comportamiento (métodos). Se define una vez; con él se fabrican objetos. Es definir TU PROPIO tipo de dato."
- **Sección 1 — anatomía de la sintaxis general (arriba, centrada):**
  - Bloque de código (monospace azul **_#1971c2_**, fondo blanco con borde gris claro):
    ```
    class NombreDeLaClase {
      // el contenido del molde (lo armamos por capas)
    }
    ```
  - Flecha roja **_#e03131_** sobre `class` → etiqueta (rojo 18px): "palabra clave `class` — abre la definición del molde"
  - Flecha azul **_#1971c2_** sobre `NombreDeLaClase` → etiqueta (azul 16px): "Nombre en PascalCase — Mayúscula inicial (`Celular`, `Movimiento`, `Presupuesto`). Distinto de variables y funciones, que van en minúscula."
  - Etiqueta al pie (negro 13px): "La clase NO es un objeto: es el molde. Los objetos concretos se crean con `new`."
- **Sección 2 — 1 clase → N instancias (abajo, en código):**
  - Bloque de código del molde (monospace azul **_#1971c2_**, borde azul): `class Celular { }`
  - Etiqueta sobre el molde (naranja **_#f08c00_** 16px): "1 molde — la plantilla 'celular en general', se escribe UNA vez"
  - Flecha grande (naranja **_#f08c00_**) bajando/derivando hacia tres bloques de instancia:
    - Caja 1 (monospace azul **_#1971c2_**): `new Celular()` → etiqueta "instancia A"
    - Caja 2 (monospace azul **_#1971c2_**): `new Celular()` → etiqueta "instancia B"
    - Caja 3 (monospace azul **_#1971c2_**): `new Celular()` → etiqueta "instancia C"
  - Etiqueta destacada bajo las instancias (negro **_#1e1e1e_** 16px): "Una clase (molde) → muchas instancias (objetos creados con `new`), cada una independiente."
- **Sección 3 — el caso del proyecto (recuadro al pie, borde gris claro):**
  - Encabezado (gris oscuro 14px): "En el proyecto:"
  - Bloque de código (monospace azul **_#1971c2_**): `class Movimiento { }`
  - Texto (negro 13px): "`class Movimiento` es el molde 'movimiento en general'. Cada movimiento del Gestor será una instancia hecha con `new Movimiento(...)`."

**Anchor pedagógico:** la anatomía de `class NombreDeLaClase { }` con las flechas a `class` y al PascalCase ancla la sintaxis exacta. El bloque "1 clase → N instancias" en código (un molde, tres `new`) materializa la relación molde/instancia SIN ninguna ilustración — la palabra "molde" queda como etiqueta sobre el código, no como dibujo. Prepara el `new` que se ilumina como concepto en el sub-punto 3.3 (en vivo).

**Notas para Eric:** se proyecta en el sub-punto 3.2, después de la dinámica y del Panel 3.1. Podés señalar la flecha del PascalCase al insistir "Mayúscula inicial" y bajar al bloque "1 molde → 3 instancias" cuando decís "tu celular y el mío son dos instancias del mismo molde". El recuadro del proyecto conecta con `Movimiento`. La Capa 1 (propiedades + `new` a mano, sub-punto 3.3) la construís en VS Code en vivo, sin panel.

---

### Panel 3.4 — Capa 2: Constructor + `this` (asignar a mano → automatizado)

- **Trigger en el guion:** `**EN PANTALLA:  VSCODE - EXCALIDRAW CON DIAGRAMA GENERADO**`
- **Tipo:** Imagen-slide (precisión geométrica: 2 columnas de código antes/después con flecha, resaltado del `this` y recuadro de advertencia con el error exacto — más confiable con IA que a mano). Es el panel más denso del día.
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso: capa 1 a la izquierda + flecha + capa 2 con el constructor a la derecha + el resaltado de `this` + el recuadro de advertencia del error sin `new`)
- **Patrón canónico de referencia:** Patrón 9 (Transición de estados / antes-después — asignar propiedades a mano → constructor que lo automatiza) + Patrón 1 (anatomía del constructor con `this` resaltado).
- **Concepto pedagógico que visualiza:** qué hace el **constructor** (se ejecuta solo al hacer `new`, recibe datos y los guarda como propiedades con `this`) y qué es **`this`** (el objeto que se está creando AHORA). Sin el panel, el constructor parece magia y `this` es el concepto que más confunde. Con el antes (asignar a mano, una línea por propiedad) frente al después (un constructor + `new` en una línea) y `this.marca = marca` resaltado con su etiqueta, el alumno VE que el constructor automatiza la asignación manual de la capa 1. Code-forward, sin ilustración.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "CAPA 2 — EL CONSTRUCTOR PONE LAS PROPIEDADES SOLAS"
- **Subtítulo** (gris oscuro, 20px): "Un método especial que se ejecuta automáticamente al hacer `new`. Recibe los datos como parámetros y los guarda como propiedades de la instancia, con `this`. Reemplaza asignar a mano una por una."
- **Sección 1 — comparativa antes/después (2 columnas con flecha en el medio):**

  **Columna izquierda — CAPA 1: a mano (borde rojo suave **_#e03131_**):**
  - Encabezado (rojo **_#e03131_** 20px): "CAPA 1 — tedioso"
  - Bloque de código (monospace azul **_#1971c2_**):
    ```
    const c = new Celular();
    c.marca = 'Samsung';
    c.modelo = 'A14';
    c.bateria = 80;
    ```
  - Etiqueta roja **_#e03131_** (14px): "Una línea por característica. Si me olvido una, el objeto queda incompleto."

  **Flecha grande** (naranja **_#f08c00_**, horizontal entre columnas) → etiqueta (naranja 16px): "el constructor lo automatiza"

  **Columna derecha — CAPA 2: constructor (borde verde **_#2f9e44_**):**
  - Encabezado (verde **_#2f9e44_** 20px): "CAPA 2 — automático"
  - Bloque de código (monospace azul **_#1971c2_**):
    ```
    class Celular {
      constructor(marca, modelo, bateria) {
        this.marca = marca;
        this.modelo = modelo;
        this.bateria = bateria;
      }
    }

    const miCel = new Celular('Samsung', 'A14', 80);
    ```
  - Etiqueta verde **_#2f9e44_** (14px): "Las MISMAS 3 propiedades, pero se ponen solas al crear. `new Celular(...)` en 1 línea. El constructor corre solo — nunca lo llamás a mano."

- **Sección 2 — el resaltado de `this` (centro, destacado):**
  - La línea `this.marca = marca` resaltada (fondo amarillo **_#ffec99_** o borde rojo grueso)
  - Flecha roja **_#e03131_** apuntando a `this` → etiqueta destacada (rojo **_#e03131_** 18px): "`this` = el objeto que se está creando AHORA"
  - Texto (negro 13px): "Al hacer `new Celular('Samsung', ...)`, dentro del constructor `this` es el celular-Samsung. Al hacer `new Celular('iPhone', ...)`, `this` es el celular-iPhone. El mismo código sirve para todos, porque `this` siempre apunta al que se está creando."

- **Recuadro de advertencia al pie — el error sin `new`** (recuadro con borde rojo **_#e03131_** grueso, fondo rojo claro **_#ffc9c9_**, ancho completo):
  - Encabezado (rojo **_#e03131_** 16px): "⚠ El error si te olvidás el `new`"
  - Bloque de código (monospace azul **_#1971c2_**): `const miCel = Celular('Samsung', 'A14', 80);   // SIN new`
  - Texto (negro 14px): "`Class constructor Celular cannot be invoked without 'new'`. Bien que sea explícito: la clase te avisa claro que faltó el `new`. Mejor un error claro que un bug silencioso."

**Anchor pedagógico:** la transición antes/después (a mano rojo → constructor verde) ancla que el constructor automatiza la asignación manual de la capa 1 — la cadena Problema→Solución dentro del concepto. El resaltado de `this.marca = marca` con su etiqueta roja ataca de frente el concepto que más confunde. El recuadro del error sin `new` prepara la demo en vivo (predecir antes de ejecutar).

**Notas para Eric:** se proyecta en el sub-punto 3.4, mientras tipeás el constructor en VS Code (el trigger es "VSCODE + EXCALIDRAW con diagrama generado" — el panel acompaña tu code-along). Podés señalar la columna izquierda al recordar "esto era la capa 1" y la derecha al mostrar el `new` en una línea. El resaltado de `this` es donde te detenés más. El recuadro rojo prepara la demo del error sin `new`. La Capa 3 (métodos, sub-punto 3.5) y la migración a `Movimiento` en el proyecto (3.6) son VS Code en vivo, sin panel.

---

## Momento 4: Calentamiento + `class Presupuesto` + encapsulación

> **Estado:** Borrador
> **Paneles del Momento:** 1 (Panel 4.1 visualiza la encapsulación: de funciones/datos sueltos de C06 a la cápsula `class Presupuesto`). El sub-punto 4.0 (calentamiento — el alumno construye `class Producto` solo) proyecta SOLO el enunciado en texto, no requiere panel-diagrama. El sub-punto 4.2 (probar el modelo completo en consola, LAB 3.2) es **VS Code en vivo**, sin panel.

---

### Panel 4.1 — Encapsulación: de suelto (C06) a cápsula (`class Presupuesto`)

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 4.1 (encapsulación: de suelto a cápsula)**`
- **Tipo:** Imagen-slide (precisión geométrica: 2 columnas de código dispersas vs encapsuladas + 2 sub-bloques del reporte posicional vs nombrado — más confiable con IA que a mano).
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3, denso: a la izquierda el desorden de C06 —global suelta + funciones sueltas listadas—, a la derecha la cápsula `class Presupuesto` con todo adentro + la comparativa del reporte posicional vs nombrado)
- **Patrón canónico de referencia:** Patrón 9 (Transición de estados — datos/funciones dispersos → encapsulados en una clase) + Patrón 3 (Comparativa X vs Y — suelto vs cápsula).
- **Concepto pedagógico que visualiza:** qué es **encapsular** — agrupar en un mismo objeto los DATOS (propiedades) y las OPERACIONES que actúan sobre ellos (métodos). Sin el panel, "encapsulación" es palabra de manual. Con el contraste (a la izquierda el array global suelto + las funciones sueltas de `functional-utils.js`; a la derecha la `class Presupuesto` que tiene el array adentro como `this.movimientos` y todas las operaciones como métodos), el alumno VE el código disperso quedando agrupado donde pertenece. La cápsula se representa como un bloque de clase con borde, NO como dibujo de cápsula/app.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "ENCAPSULAR — DATOS + OPERACIONES EN LA MISMA CÁPSULA"
- **Subtítulo** (gris oscuro, 20px): "En vez de 'un array acá y funciones allá', todo vive dentro de una clase que se gobierna a sí misma. `Movimiento` encapsula UN movimiento; `Presupuesto` encapsula la COLECCIÓN entera y todo lo que se hace con ella."
- **Sección 1 — comparativa de 2 columnas:**

  **Columna izquierda — SUELTO (C06) (borde rojo **_#e03131_**, fondo rojo claro **_#ffc9c9_**):**
  - Encabezado (rojo **_#e03131_** 20px): "ANTES (C06) — disperso"
  - Bloque de código (monospace azul **_#1971c2_**):
    ```
    // global suelta
    let movimientos = [];

    // functional-utils.js — funciones sueltas
    totalIngresos(movimientos)
    totalGastos(movimientos)
    calcularSaldo(movimientos)
    buscarPorNombre(movimientos, texto)
    ```
  - Etiqueta roja **_#e03131_** (14px): "Datos por un lado (global), operaciones por el otro (otro archivo). Hay que pasarles el array por parámetro cada vez."

  **Columna derecha — CÁPSULA (C07) (borde verde **_#2f9e44_**, fondo verde claro **_#b2f2bb_**):**
  - Encabezado (verde **_#2f9e44_** 20px): "AHORA (C07) — encapsulado"
  - Bloque de código (monospace azul **_#1971c2_**, los nombres de método en verde **_#2f9e44_**):
    ```
    class Presupuesto {
      constructor() {
        this.movimientos = [];   // el dato, ADENTRO
      }
      agregar(movimiento) { ... }
      totalIngresos() { ... }    // leen this.movimientos
      totalGastos() { ... }
      saldo() { ... }
      buscarPorNombre(texto) { ... }
      resumen() { ... }
    }
    ```
  - Etiqueta verde **_#2f9e44_** (14px): "El array es `this.movimientos`. Las funciones de C06 ahora son métodos: leen `this.movimientos` en vez de recibirlo por parámetro. Todo gobernado desde adentro."

- **Flecha grande** (naranja **_#f08c00_**, horizontal entre columnas) → etiqueta destacada (naranja 16px): "encapsular = datos (`this.movimientos`) + operaciones (métodos) en la misma cápsula"

- **Sección 2 — el reporte: posicional → nombrado (recuadro al pie, 2 sub-bloques):**
  - Encabezado (gris oscuro 16px): "La ganancia extra — `resumen()` devuelve un OBJETO nombrado:"
  - Sub-bloque rojo suave **_#e03131_**: "C06: array posicional `reporte[0]`, `reporte[1]`... — hay que acordarse de qué hay en cada posición"
  - Sub-bloque verde **_#2f9e44_**:
    ```
    resumen() {
      return {
        cantidad: this.movimientos.length,
        ingresos: this.totalIngresos(),
        gastos: this.totalGastos(),
        saldo: this.saldo()
      };
    }
    // se lee: resumen().saldo  ← por NOMBRE
    ```
  - Texto al pie (negro 13px): "Mismo salto 'posicional → nombrado' del M2 (modelo), ahora en la salida."

**Anchor pedagógico:** las 2 columnas (suelto rojo vs cápsula verde) hacen visible que encapsular es juntar lo que estaba disperso. El bloque de la derecha mostrando `this.movimientos` + los métodos adentro ancla la convención del día (datos azul / acciones verde / `this` como pegamento). El recuadro `resumen()` cierra el dolor posicional de C06 (reporte por índice → reporte por nombre). La cápsula es un bloque de clase con borde, sin dibujo de app.

**Notas para Eric:** se proyecta en el sub-punto 4.1, antes/durante el code-along de `Presupuesto`. Podés señalar la columna izquierda al recordar "esto era C06: datos acá, funciones allá" y la derecha al mostrar todo adentro de la clase. El recuadro `resumen()` lo usás cuando pagás la deuda del reporte posicional. El calentamiento previo (4.0, `class Producto`) lo proyectás como enunciado de texto, no con este panel. El sub-punto 4.2 (probar en consola) es VS Code en vivo.

---

## Momento 5: Cierre

> **Estado:** Borrador
> **Paneles del Momento:** 2 (Panel 5.1 da la tabla antes/después del viaje del modelo; Panel 5.2 muestra los tres paradigmas coexistiendo en el mismo Gestor). Ambos sub-puntos (5.1 y 5.2) tienen panel. El puente a C08 (Tailwind / interfaz) se hace en voz, sin diagrama.

---

### Panel 5.1 — Tabla antes/después: el viaje del modelo (C05/C06 → C07)

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW / VSCODE**` (sub-punto 5.1 — "Recorrer la tabla")
- **Tipo:** Imagen-slide (precisión geométrica: tabla de 2 columnas × 6 filas con celdas de código alineadas y flechas por fila — más confiable con IA que a mano).
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9, horizontal: tabla de 2 columnas × 6 filas, columna roja "Antes" / columna verde "Ahora")
- **Patrón canónico de referencia:** Patrón 3 (Comparativa X vs Y — el modelo antes vs el modelo ahora, fila por fila) + Patrón 9 (Transición de estados — el mismo programa en dos momentos de su evolución).
- **Concepto pedagógico que visualiza:** el **recorrido completo del modelo** en tres clases, fila por fila. Sin el panel, "mejoramos el código" es vago. Con la tabla de 6 filas (cada una un dolor concreto resuelto), el alumno VE que no cambió lo que el programa HACE, sino cómo está ORGANIZADO — y eso es lo que lo hace mantenible. Tabla pura, code-forward.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "EL VIAJE DEL MODELO — C05/C06 → C07"
- **Subtítulo** (gris oscuro, 20px): "El mismo programa de siempre, pero mirá cómo cambió su esqueleto en tres clases. Cada fila resolvió un dolor que ustedes mismos sintieron."
- **Tabla de 2 columnas × 6 filas:**
  - Encabezado columna izquierda (rojo **_#e03131_** 22px, fondo rojo claro suave **_#ffc9c9_**): "ANTES (C05 / C06)"
  - Encabezado columna derecha (verde **_#2f9e44_** 22px, fondo verde claro suave **_#b2f2bb_**): "AHORA (C07)"
  - Las celdas con código en monospace azul **_#1971c2_**; el resto en negro **_#1e1e1e_** 16px:

  | Antes (C05 / C06) — rojo | Ahora (C07) — verde |
  |---|---|
  | 2 arrays paralelos | 1 array de objetos |
  | Tipo codificado en el signo | Tipo explícito (`'ingreso'` / `'gasto'`) |
  | Funciones sueltas en otro archivo | Métodos dentro del objeto |
  | Estado en variables globales | Estado encapsulado en `Presupuesto` |
  | Reporte posicional (`reporte[0]`) | Reporte nombrado (`resumen().saldo`) |
  | Frágil: desincronizar era fácil | Íntegro: los datos viajan juntos |

  - Una flecha naranja **_#f08c00_** discreta por fila, de la celda roja a la verde, reforzando "esto se transformó en aquello".

- **Anotación destacada al pie** (recuadro con borde negro **_#1e1e1e_** grueso, ancho completo):
  - Texto (negro **_#1e1e1e_** 18px, centrado): "No cambiamos lo que el programa HACE; cambiamos cómo está ORGANIZADO — y eso es lo que lo hace mantenible."

**Anchor pedagógico:** la tabla de 6 filas con la convención de color (rojo dolor viejo / verde solución actual) condensa todo el arco del Módulo 2 en una sola vista. Cada fila reconecta con un momento que el alumno vivió (arrays paralelos del error en vivo, signo, funciones sueltas, globales, reporte posicional, fragilidad). La anotación al pie fija el mensaje central: organización, no funcionalidad.

**Notas para Eric:** se proyecta en el sub-punto 5.1. Recorrés una fila por vez sin detenerte demasiado — el alumno ya vivió cada una. Podés apuntar a la fila "reporte posicional → nombrado" como ejemplo del patrón que se repitió (modelo en M2, salida en M4). La anotación negra al pie es la frase que querés que se lleven.

---

### Panel 5.2 — Los tres paradigmas coexisten en el mismo Gestor

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW / VSCODE**` (sub-punto 5.2 — "Los tres paradigmas coexisten + puente a C08")
- **Tipo:** Imagen-slide (precisión geométrica: tres bloques de código rotulados + caja central + tres flechas convergentes — más confiable con IA que a mano).
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3: tres bloques de código etiquetados —imperativo, funcional, POO— apuntando con flechas al mismo Gestor central)
- **Patrón canónico de referencia:** Patrón 3 (Comparativa de los tres paradigmas como bloques de código en paralelo) + Patrón 1 (cada bloque rotulado con su paradigma).
- **Concepto pedagógico que visualiza:** que los **tres paradigmas no compiten, se combinan**. Sin el panel, el alumno cree que POO reemplaza a lo anterior. Con tres bloques de código reales (un `while` imperativo, un `.filter().reduce()` funcional, un método de clase POO) apuntando los tres al mismo "Gestor de Presupuesto", el alumno VE que en el código real conviven: un método POO por dentro usa filter/reduce (funcional) y while (imperativo). Code-forward, sin diagrama abstracto.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_**, 36px): "LOS TRES PARADIGMAS COEXISTEN"
- **Subtítulo** (gris oscuro, 20px): "POO no reemplaza lo anterior: es otra forma de organizar lo mismo. Viste el MISMO proyecto escrito de tres maneras — y en el código real los tres conviven."
- **Tres bloques de código etiquetados (en fila o en abanico, cada uno con su color de borde):**

  **Bloque 1 — IMPERATIVO (borde naranja oscuro **_#e8590c_**):**
  - Etiqueta (naranja oscuro **_#e8590c_** 20px): "IMPERATIVO (C05) — paso a paso"
  - Bloque de código (monospace azul **_#1971c2_**):
    ```
    while (continuar === 'si') {
      registrarMovimiento();
    }
    ```

  **Bloque 2 — FUNCIONAL (borde azul **_#1971c2_**):**
  - Etiqueta (azul **_#1971c2_** 20px): "FUNCIONAL (C06) — transformar datos"
  - Bloque de código (monospace azul **_#1971c2_**):
    ```
    this.movimientos
      .filter(m => m.esIngreso())
      .reduce((acc, m) => acc + m.valor, 0);
    ```

  **Bloque 3 — POO (borde verde **_#2f9e44_**):**
  - Etiqueta (verde **_#2f9e44_** 20px): "POO (C07) — modelar con objetos"
  - Bloque de código (monospace azul **_#1971c2_**, nombre de método en verde):
    ```
    saldo() {
      return this.totalIngresos() - this.totalGastos();
    }
    ```

- **Centro — el Gestor** (caja central con borde negro **_#1e1e1e_** grueso): texto (negro **_#1e1e1e_** 22px, centrado): "el mismo Gestor de Presupuesto"
- **Tres flechas naranjas **_#f08c00_**** desde cada bloque de código hacia la caja central del Gestor.

- **Anotación destacada al pie** (recuadro con borde naranja **_#f08c00_** grueso, ancho completo):
  - Texto (negro **_#1e1e1e_** 18px, centrado): "No compiten, se combinan: un método (POO) por dentro usa `.filter`/`.reduce` (funcional) y un `while` (imperativo)."

**Anchor pedagógico:** los tres bloques de código real apuntando al mismo Gestor central hacen tangible que los paradigmas son capas del mismo programa, no rivales. La anotación al pie ancla el mensaje exacto: un método POO contiene funcional contiene imperativo. Code-forward — cada paradigma se reconoce por su construcción característica (`while` / `.filter().reduce()` / método de clase), no por un símbolo abstracto.

**Notas para Eric:** se proyecta en el sub-punto 5.2, el cierre conceptual del día. Podés señalar cada bloque mientras nombrás su paradigma y las tres flechas al decir "los tres apuntan al mismo proyecto". La anotación al pie es la idea que querés que se lleven. El puente a C08 (Tailwind, darle cara a la consola) lo hacés en voz, sin panel nuevo.

---

## Resumen de Paneles de la Clase 07

| Panel | Momento | Sub-punto | Tipo | Dimensiones | Estado |
|---|---|---|---|---|---|
| 1.1 — El objeto literal (anatomía + posición vs nombre) | M1 | 1.3 | Imagen-slide | 1400×900 | Borrador |
| 1.2 — Arrays paralelos vs array de objetos + tabla | M1 | 1.5 | Imagen-slide | 1400×1050 | Borrador |
| 3.1 — Objeto POO = propiedades + métodos | M3 | 3.1 | Imagen-slide | 1400×900 | Borrador |
| 3.2 — `class` (anatomía) + 1 clase → N instancias | M3 | 3.2 | Imagen-slide | 1400×900 | Borrador |
| 3.4 — Constructor + `this` (a mano → automatizado) | M3 | 3.4 | Imagen-slide | 1400×1050 | Borrador |
| 4.1 — Encapsulación: suelto → cápsula `Presupuesto` | M4 | 4.1 | Imagen-slide | 1400×1050 | Borrador |
| 5.1 — Tabla antes/después (el viaje del modelo) | M5 | 5.1 | Imagen-slide | 1400×900 | Borrador |
| 5.2 — Los tres paradigmas coexisten | M5 | 5.2 | Imagen-slide | 1200×900 | Borrador |

**Total:** 8 Paneles (2 M1 + 2 M3 + 1 M4 + 2 M5 — el M2 es 100% VS Code en vivo, sin paneles). Sub-puntos VS Code en vivo / sin panel: 1.1, 1.2, 1.4, todo el M2 (2.1–2.5), 3.3, 3.5, 3.6, 4.0 (enunciado de texto), 4.2.
