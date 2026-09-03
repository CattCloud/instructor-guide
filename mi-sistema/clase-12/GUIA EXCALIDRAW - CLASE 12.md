# GUÍA EXCALIDRAW — CLASE 12: Manejo de Errores y Estados

> **Curso:** Code 201
> **Módulo:** M3 — Clase 4 de 4 (CIERRE del Módulo 3)
> **Estado:** Paneles documentados — pendiente validación de Eric
> **Total Paneles:** 14 (4 M1 + 2 M2 + 4 M3 + 2 M4 + 1 M5 + 1 M5/lab + 1 M6)
> **Tipos:** **7 Hand-drawn nativos** (1.3, 1.4, 3.2, 3.4, 4.1, 5.1, 6.1) + **3 Imagen-slide** (1.2, 2.1, 3.5) + **4 Hand-drawn en vivo** (2.5, 3.6, 4.2, 5.2)
> **Fecha:** 2026-06-25
> **Fuente del guion:** `mi-sistema/clase-12/CODE 201 - FLUJO DE PRESENTACION 12.md` (guion final reducido por Eric)
> **Generador (nativo):** `mi-sistema/clase-12/gen.js` — ejecutar con `node gen.js "CLASE 12.excalidraw"` para regenerar.
> **Patrón visual común:** mismo molde que C09-C11 — code-forward, anatomía con flechas etiquetadas, comparativas de 2 lados, tablas técnicas. **PROHIBIDO** dibujo de metáfora ilustrada (no Pokémon dibujados, no chefs cartoon, no paracaidistas). Las analogías se dicen en voz y se anclan con mini-aside de texto en una esquina del panel.
> Convención semántica de colores: código/sintaxis = azul **_#1971c2_**; criterios/aciertos = verde **_#2f9e44_**; problema/dolor/advertencia = rojo **_#e03131_**; etiquetas de proceso, flechas, parámetros destacados = naranja **_#f08c00_**; títulos = negro **_#1e1e1e_**; encabezado secundario = naranja oscuro **_#e8590c_**. Código siempre monospace azul **_#1971c2_** extraído LITERAL del guion o del lab. Paleta restringida a los 6 colores canónicos.
> **Sin emojis** salvo el 🔍 del estado VACÍO (regla del lab — refuerza "búsqueda" y NO alarma; se respeta porque está fijado en el README del lab).
>
> **Sub-puntos SIN panel** (decisión explícita del guion):
> - **1.1** — Demo en vivo del fallo de C11 (NAVEGADOR + DEVTOOLS).
> - **2.4** — Setup del lab (VS CODE + Terminal integrada).
> - **3.1** — Demo en VS Code del status (VS CODE + Terminal — output de `ver(url)`).
> - **3.3** — `response.ok` (VS Code para el snippet de sintaxis general; no requiere panel propio).
> - **4.2** — el lab HU3 sí tiene panel `LIBRE` para que el instructor escriba pasos en vivo.
> - **6.2** — Code-along del README (VS CODE — archivo nuevo).

---

## Momento 1: El fallo de C11 + ¿qué es un error? + tipos nativos JS

> **Estado:** Borrador
> **Paneles del Momento:** 3 (1.2 Imagen-slide + 1.3 Hand-drawn + 1.4 Hand-drawn). El 1.1 es demo en navegador y NO lleva panel.

---

### Panel 1.2 — Flujo sin error vs Flujo con error (sin manejo)

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — flujo "SIN error" (3 líneas verdes consecutivas, todo OK) vs flujo "CON error sin manejo" (línea 1 verde, línea 2 roja con explosión, líneas 3-N atenuadas en gris con etiqueta "nunca se ejecuta").**`
- **Tipo:** Imagen-slide (comparativa estática X vs Y con efecto visual de "explosión" — mejor resuelta como infografía IA que hand-drawn).
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3 — dos columnas verticales lado a lado).
- **Patrón canónico de referencia:** Patrón 3 (Comparativa X vs Y).
- **Concepto pedagógico que visualiza:** anclar visualmente la idea "un error sin manejo MATA TODO lo que viene después". El alumno ve con sus ojos el contraste entre las 3 líneas verdes consecutivas y la línea 2 roja que apaga las líneas 3-N. Es la imagen del "por qué importa atrapar un error".

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_** 36px, centrado): "EL FLUJO DE UN PROGRAMA — SIN ERROR vs CON ERROR (SIN MANEJO)"
- **Subtítulo** (gris oscuro 16px, centrado): "Un error no atrapado MATA el script. Las líneas siguientes nunca se ejecutan."
- **Columna izquierda — FLUJO SIN ERROR** (borde verde **_#2f9e44_**, ~500×600 px):
  - **Encabezado** (verde **_#2f9e44_** 26px): "✓ FLUJO SIN ERROR"
  - 3 líneas de código apiladas verticalmente, cada una en una caja verde clara con check `✓` a la izquierda:
    1. **_console.log("paso 1")_** ✓ corre
    2. **_console.log("paso 2")_** ✓ corre
    3. **_console.log("paso 3")_** ✓ corre
  - **Flecha verde vertical** descendente conectando los 3 pasos.
  - **Etiqueta al pie** (verde **_#2f9e44_** 14px): "Las 3 líneas corren. La consola muestra paso 1, paso 2, paso 3."
- **Columna derecha — FLUJO CON ERROR SIN MANEJO** (borde rojo **_#e03131_**, ~500×600 px):
  - **Encabezado** (rojo **_#e03131_** 26px): "✗ FLUJO CON ERROR (SIN MANEJO)"
  - 3 líneas apiladas:
    1. **_console.log("paso 1")_** ✓ corre (caja verde clara)
    2. **_noExiste()_** 💥 EXPLOSIÓN (caja roja con ícono de explosión/destello — texto "ReferenceError: noExiste is not defined" en monospace rojo abajo)
    3. **_console.log("paso 3")_** ✗ NUNCA SE EJECUTA (caja gris atenuada, opacidad 40%)
  - **Flecha roja vertical** desde "paso 1" hasta "noExiste()" + **etiqueta naranja "el error sube por el código"** con punta de flecha hacia arriba afuera del panel.
  - **Banner rojo al pie** (rojo **_#e03131_** 14px, fondo rojo claro): "El error subió hasta el tope del script y mató todo. Recargar es la única salida."
- **Aside abajo del panel** (gris oscuro 12px, ancho completo, centrado): "Esto es exactamente lo que pasó hace 2 minutos con `pikachuu` en C11."

**Anchor pedagógico:** la imagen es más fuerte que mil palabras — el contraste de colores (verde / rojo / gris atenuado) imprime visualmente "qué pasa cuando no atrapo un error". Las 3 líneas verticales en paralelo permiten lectura inmediata.

**Notas para Eric:** el ícono de "explosión" puede ser un destello/rayo o solo el texto del error en rojo grande. Si el panel queda muy "cartoon" con la explosión, se puede sustituir por un signo `✗` rojo grande en la línea 2. Decisión visual al revisar el prompt IA.

---

### Panel 1.3 — Tabla de Tipos de errores nativos en JavaScript

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW**` (después de "Tabla de tipos de error nativos (proyectar en el panel)").
- **Tipo:** Hand-drawn (nativo en Excalidraw — tabla técnica de 5 filas × 3 columnas, exige precisión tipográfica monospace, ideal para gen.js).
- **Dimensiones objetivo:** N/A (hand-drawn — se ajusta al canvas).
- **Patrón canónico de referencia:** Patrón 2 (Tabla técnica con encabezados de color).
- **Concepto pedagógico que visualiza:** dar al alumno una lista compacta de los 4 tipos nativos de errores que va a encontrar en desarrollo web + la categoría adicional de errores de red. Permite que lea mensajes de consola con velocidad porque reconoce el nombre del tipo.

**Contenido del panel (para gen.js):**

- **Título superior** (negro **_#1e1e1e_** 32px): "TIPOS DE ERRORES NATIVOS EN JAVASCRIPT"
- **Subtítulo** (gris oscuro 14px): "4 nativos del lenguaje + 1 categoría adicional para problemas de red. Saber el TIPO acelera leer la consola."
- **Tabla 3 columnas × 6 filas** (header + 5 datos), bordes grises **_#ced4da_**:

| Tipo (rojo bold) | Cuándo aparece | Ejemplo que lo dispara (monospace azul) |
|---|---|---|
| **SyntaxError** | El parser no puede leer el texto recibido (código JS, JSON, etc.) | **_console.log("Hola"_** *(falta paréntesis)* · **_JSON.parse("Hola")_** *(no es JSON válido)* |
| **ReferenceError** | Se usa una variable que NO está declarada | **_console.log(noExiste)_** |
| **TypeError** | Operación inválida para el tipo del dato | **_"Hola".push("Mundo")_** *(strings no tienen `.push`)* |
| **RangeError** | Un número fuera del rango permitido | **_const precio = 19.99; precio.toFixed(200);_** *(toFixed solo permite 0-100)* |
| **Errores de red / API** | La conexión falla o el servidor responde mal | **_fetch("https://api.invalida.com")_** *(sin red)* |

- **Etiqueta lateral** (a la derecha de la tabla, vertical o como aside):
  - **Cuadro verde** (verde **_#2f9e44_** texto 13px): "ATAJABLES en VS Code / Linter (ESLint) → ReferenceError · TypeError · RangeError · SyntaxError por código mal escrito"
  - **Cuadro naranja** (naranja **_#e8590c_** texto 13px): "EN TIEMPO DE EJECUCIÓN, dependen del afuera → Errores de red · SyntaxError de `JSON.parse` / `response.json()`"
- **Aside al pie** (gris 12px, centrado): "El SyntaxError del demo del principio cae en el cuadro naranja — apareció en runtime porque `response.json()` recibió `'Not Found'` (no es JSON válido)."

**Anchor pedagógico:** tabla densa porque es vocabulario que se consulta — el alumno la va a volver a mirar en cada lab. El split verde / naranja al lado refuerza la regla pedagógica del día: "para algunos errores la herramienta es VS Code; para otros, la herramienta del lenguaje en tiempo de ejecución (= try/catch)".

**Notas para Eric:** la tabla tiene 5 filas — si el canvas se ve apretado, sacar la columna "Ejemplo" o moverla debajo de cada fila como aside chico. La etiqueta verde/naranja puede ir como una columna extra a la derecha o como un par de cajas debajo de la tabla.

---

### Panel 1.4 — Objeto Error y sus 3 propiedades

- **Trigger en el guion:** `**EN PANTALLA: VS CODE — archivo de demo con el código de abajo + terminal de VS Code mostrando el output al ejecutarlo con Node.**` (el guion combina VS Code en vivo + un panel Excalidraw de apoyo con la tabla de propiedades).
- **Tipo:** Hand-drawn (nativo en Excalidraw — tabla de 3 filas × 3 columnas + caja izquierda con la "anatomía" del objeto).
- **Dimensiones objetivo:** N/A (hand-drawn).
- **Patrón canónico de referencia:** Patrón 2 (Tabla técnica) + Patrón 1 (Anatomía de objeto).
- **Concepto pedagógico que visualiza:** mostrar visualmente que **Error es un OBJETO** —no un string ni un código— con 3 propiedades estándar. Aclara cuál se va a usar en el lab (message) y cuáles solo son para debug (stack) o decisión interna (name).

**Contenido del panel (para gen.js):**

- **Título superior** (negro **_#1e1e1e_** 32px): "EL OBJETO `Error` Y SUS 3 PROPIEDADES"
- **Subtítulo** (gris oscuro 14px): "Todo error en JS —nativo o creado con `throw new Error(...)`— es un objeto con esta forma."
- **Columna izquierda — ANATOMÍA del objeto** (caja con borde negro, ~400×400):
  - Texto monospace azul **_#1971c2_** representando el objeto:
    ```
    Error {
      name: "TypeError",
      message: "edad is not a function",
      stack: "TypeError: edad is...
              at file.js:5:7
              at Module._compile..."
    }
    ```
  - Flecha naranja desde cada propiedad apuntando a la tabla de la derecha (3 flechas: `name →`, `message →`, `stack →`).
- **Columna derecha — TABLA de las 3 propiedades** (3 filas × 3 columnas, bordes grises):

| Propiedad (azul monospace) | Qué tiene | Para qué sirve hoy |
|---|---|---|
| **_error.name_** | El nombre del TIPO del error (`"SyntaxError"`, `"TypeError"`, `"ReferenceError"`, `"Error"`...) | Decidir el manejo según el tipo. **Hoy en el lab NO se usa.** |
| **_error.message_** | El TEXTO descriptivo del error | **LO QUE MOSTRAMOS AL USUARIO** en la UI. La propiedad más usada. *(verde — destacar)* |
| **_error.stack_** | La PILA de llamadas: archivo, línea, función | Debug en consola del navegador. **NO se muestra al usuario.** |

- **Aside abajo** (gris 12px, centrado): "Hoy en el lab usaremos solo `error.message`. El `stack` se ve en consola para depurar; el `name` queda para clases más avanzadas."

**Anchor pedagógico:** la imagen del objeto a la izquierda + tabla a la derecha permite que el alumno entienda "error es un objeto que se ABRE y tiene partes". Sin la anatomía visual, el alumno trata `error` como un string opaco.

**Notas para Eric:** la fila de `error.message` resaltada en verde claro (background) — es la única que el alumno usará HOY. Si el panel queda muy ancho, mover la tabla debajo de la anatomía (vertical en lugar de horizontal).

---

## Momento 2: try/catch/finally + HU1

> **Estado:** Borrador
> **Paneles del Momento:** 2 (Panel 2.1 Imagen-slide del diagrama try/catch/finally + Panel 2.5 Hand-drawn en vivo para HU1). El sub-punto 2.4 (Setup) es VS Code y NO lleva panel.

---

### Panel 2.1 — Diagrama TRY/CATCH/FINALLY

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW**` (después de "Acaban de ver qué es un error...").
- **Tipo:** Imagen-slide (diagrama de flujo con 3 cajas + 2 rutas convergentes — Eric decidió que este vaya como imagen IA, mejor resuelta visualmente que hand-drawn).
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3).
- **Patrón canónico de referencia:** Patrón 5 (Flujo if/else / control flow).
- **Concepto pedagógico que visualiza:** el flujo de control de `try/catch/finally`. El alumno necesita ver QUE el flujo se ramifica en función de si hay error o no, Y QUE el `finally` siempre converge al final.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_** 36px, centrado): "TRY / CATCH / FINALLY — LAS 3 FASES"
- **Diagrama de 3 cajas con flechas**, layout vertical:
  - **Caja TRY** (arriba, borde azul **_#1971c2_** grueso, ~600×150):
    - Encabezado (azul 22px): "TRY — vigila"
    - Texto adentro (negro 14px): "Código que podría fallar"
    - Snippet (monospace azul 14px): `await buscarPokemon(nombre);`
  - **Rombo de decisión naranja** (~300×150 abajo de TRY): "¿hubo error?"
    - Flecha **NO** verde hacia la derecha
    - Flecha **SÍ** roja hacia la izquierda (gira y baja)
  - **Caja CATCH** (izquierda, debajo del rombo, borde rojo **_#e03131_** grueso, ~500×150):
    - Encabezado (rojo 22px): "CATCH — atrapa si hubo error"
    - Texto (negro 14px): "Recibe el objeto `error`"
    - Snippet (monospace 14px): `catch (error) { mensaje.textContent = error.message }`
  - **Caja FINALLY** (centrada al pie, debajo del rombo, borde verde **_#2f9e44_** grueso, ~700×150):
    - Encabezado (verde 22px): "FINALLY — siempre corre"
    - Texto (negro 14px): "Hubo error o no, FINALLY siempre se ejecuta"
    - Snippet (monospace 14px): `finally { spinner.classList.add("hidden") }`
  - **Dos flechas que convergen en FINALLY:**
    - Desde TRY (camino sin error) → flecha verde
    - Desde CATCH → flecha roja
  - **Flecha negra abajo de FINALLY** que apunta hacia "FIN" (etiqueta gris): "el código sigue normalmente"
- **Aside a la derecha del diagrama** (gris 12px, columna lateral):
  - **Fase 1 (try):** "Pone aquí lo que puede fallar."
  - **Fase 2 (catch):** "Solo corre si el try explotó."
  - **Fase 3 (finally):** "Limpieza garantizada. Es donde va el `spinner.classList.add("hidden")`."

**Anchor pedagógico:** el alumno ve la analogía con `if/else` (rombo de decisión naranja en el medio) pero entiende que el `finally` se sale del patrón normal — converge SIEMPRE. Esa convergencia visual es lo que justifica por qué el spinner va en `finally` y no en cada rama.

**Notas para Eric:** si el diagrama queda muy denso con los 3 snippets, sacar los snippets del diagrama y dejarlos como aside al pie — el panel se mantiene como flujo puro. Decisión a tomar al revisar el prompt.

---

### Panel 2.5 — Panel LIBRE para HU1 (Lab — atrapar errores)

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW**` (al iniciar 2.5 Lab HU1).
- **Tipo:** Hand-drawn en vivo — marco vacío para que el instructor escriba los pasos socráticos uno por uno frente al grupo.
- **Dimensiones objetivo:** N/A (hand-drawn — marco grande para que el instructor escriba 7 pasos).
- **Patrón canónico de referencia:** Patrón "Plan socrático LIBRE" (marco con título + caja HU + caja CRITERIOS + 7 líneas numeradas vacías).
- **Concepto pedagógico que visualiza:** el instructor conduce el plan socrático de HU1 escribiendo cada paso a medida que el grupo responde la pregunta. El panel arranca casi vacío y se llena durante la conversación.

**Contenido del panel (marco mínimo a renderizar antes de la clase):**

- **Título superior** (rojo **_#e03131_** 32px, centrado): "PLAN DE LA SOLUCIÓN — HU 1: ATRAPAR ERRORES"
- **Caja HU** (caja con borde gris, ~600×140, arriba izquierda): encabezado "HU" (negro 14px) + texto literal del HU del lab:
  > "Como usuario, si algo falla al buscar, quiero ver un mensaje claro en vez de que la app se rompa."
- **Caja CRITERIOS** (caja con borde gris, ~600×140, arriba derecha): encabezado "CRITERIOS" + 2 bullets:
  - "Si la búsqueda falla, aparece un MENSAJE CLARO."
  - "La APP SIGUE VIVA tras el fallo (puedes volver a buscar sin recargar)."
- **7 líneas numeradas** debajo (espaciado generoso para que el instructor escriba), líneas punteadas grises **_#dee2e6_** con número grande en gris claro a la izquierda (1., 2., 3., 4., 5., 6., 7.).
- **Aside al pie** (gris 12px, centrado): "Cada paso se responde leyendo la HU literalmente y sus criterios — no son decisiones abiertas."

**Anchor pedagógico:** el marco fuerza al instructor a respetar el límite de 7 pasos y a no improvisar contenido — cada paso DEBE poderse anclar al HU o a los criterios. El alumno ve el panel llenándose en tiempo real y entiende que el plan emerge del HU.

**Notas para Eric:** las 7 líneas son punteadas y largas — usar marcador rojo (Procreate / Surface Pen) para escribir. El número grande a la izquierda funciona como contador visual: "vamos por el paso 4 de 7".

---

## Momento 3: Códigos HTTP + response.ok + throw + propagación + HU2

> **Estado:** Borrador
> **Paneles del Momento:** 4 (3.2 Hand-drawn tablas HTTP + 3.4 Hand-drawn throw + 3.5 Imagen-slide pila + 3.6 LIBRE para HU2). Los sub-puntos 3.1 (demo VS Code) y 3.3 (response.ok sintaxis general) NO llevan panel.

---

### Panel 3.2 — 2 Tablas de Códigos HTTP (Familias + Tabla detallada)

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW**` (después de "Esos números de 3 dígitos —200, 404, 500—...").
- **Tipo:** Hand-drawn (nativo en Excalidraw — 2 tablas técnicas apiladas, ideal para gen.js).
- **Dimensiones objetivo:** N/A (hand-drawn — 2 tablas con paleta verde/amarillo/rojo).
- **Patrón canónico de referencia:** Patrón 2 (Tabla técnica) ×2.
- **Concepto pedagógico que visualiza:** Eric pidió DOS tablas: (a) una **tabla compacta de familias** (2xx/4xx/5xx con su comportamiento de `response.ok`) — vista rápida; (b) una **tabla detallada por código** específico con la columna "Cuándo aparece en la Pokédex" para anclar cada código al lab.

**Contenido del panel (para gen.js):**

- **Título superior** (negro **_#1e1e1e_** 32px): "CÓDIGOS HTTP — FAMILIAS Y EJEMPLOS"
- **Subtítulo** (gris 14px): "El servidor SIEMPRE devuelve un código. La PRIMERA cifra define la familia."

**TABLA 1 — FAMILIAS** (compacta, 4 columnas × 4 filas):

| Familia (bold) | Significado | Ejemplos | ¿`response.ok`? |
|---|---|---|---|
| **2xx** *(fondo verde claro)* | **Éxito** — la respuesta salió bien | **_200 OK_**, **_201 Created_** | **_true_** (verde) |
| **4xx** *(fondo amarillo claro)* | **Error del CLIENTE** — nuestro código pidió mal | **_400_**, **_401_**, **_403_**, **_404_** | **_false_** (rojo) |
| **5xx** *(fondo rojo claro)* | **Error del SERVIDOR** — el servidor falló | **_500_**, **_503_** | **_false_** (rojo) |

**Separador horizontal (línea gris).**

**TABLA 2 — DETALLE POR CÓDIGO** (4 columnas × 10 filas, header + 9 códigos):

| Código (bold) | Familia | Significado | Cuándo aparece en la Pokédex |
|---|---|---|---|
| **200** *(verde)* | 2xx — Éxito | OK — la respuesta fue exitosa | **_/pokemon/pikachu_** existe → 200 + JSON |
| **201** *(verde)* | 2xx — Éxito | Created — recurso creado (típico de POST) | No aparece hoy (la Pokédex solo lee) |
| **301 / 302** *(gris)* | 3xx — Redirección | Redirección permanente / temporal | No aparece hoy |
| **400** *(amarillo)* | 4xx — Error del cliente | Bad Request — la petición está mal armada | URL mal formada (ej: `/pokemon/` sin nombre) |
| **401** *(amarillo)* | 4xx — Error del cliente | Unauthorized — falta autenticarse | APIs con clave (PokeAPI NO la necesita) |
| **403** *(amarillo)* | 4xx — Error del cliente | Forbidden — autenticado pero sin permiso | APIs con permisos por rol |
| **404** *(amarillo + borde rojo grueso)* | 4xx — Error del cliente | **Not Found — el recurso NO existe** | **_/pokemon/pikachuu_** mal escrito → 404 *(EL DEL LAB DE HOY)* |
| **500** *(rojo claro)* | 5xx — Error del servidor | Internal Server Error — el servidor se rompió | El servidor de PokeAPI tiene un bug interno |
| **503** *(rojo claro)* | 5xx — Error del servidor | Service Unavailable — el servidor está caído | Mantenimiento o sobrecarga |

- **Highlight visual:** la fila del **404** con borde rojo grueso + flecha naranja en la izquierda etiquetada "EL DEL LAB DE HOY".
- **Aside al pie** (gris 12px, centrado): "Solo hace falta saber leer la PRIMERA cifra. La tabla detallada es referencia."

**Anchor pedagógico:** dos niveles de zoom. La tabla 1 es la lectura "por familia" que Eric quiere que el alumno se lleve grabada. La tabla 2 es referencia para que el alumno vea POR QUÉ las familias se llaman así y cuándo aparecería cada código en el día a día. La fila del 404 destacada conecta la teoría con el lab inmediato.

**Notas para Eric:** las dos tablas suman 14 filas. Si queda muy alto, dejar la tabla 1 arriba ocupando 1/3 del canvas y la tabla 2 abajo ocupando 2/3. Las celdas con fondos de color (verde claro, amarillo claro, rojo claro) son CLAVE — son el semáforo visual que ancla las familias en la memoria.

---

### Panel 3.4 — `throw new Error(...)` — lanzar errores propios

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW**` (después de "Tenemos el chequeo. Falta saber CÓMO lanzar un error propio...").
- **Tipo:** Hand-drawn (nativo en Excalidraw — anatomía del `throw` + diagrama de "lo que va al usuario").
- **Dimensiones objetivo:** N/A (hand-drawn).
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de sintaxis) + Patrón 5 (Flujo de control).
- **Concepto pedagógico que visualiza:** mostrar que el STRING que va dentro de `new Error("...")` es exactamente lo que termina en `error.message` del catch — y por ende lo que el usuario ve en pantalla. Es la línea de oro que conecta lo que el dev escribe con lo que el usuario lee.

**Contenido del panel (para gen.js):**

- **Título superior** (negro **_#1e1e1e_** 32px): "`throw new Error(...)` — LANZAR ERRORES PROPIOS"
- **Subtítulo** (gris 14px): "El string del paréntesis termina en `error.message` del catch — y de ahí va a la UI."
- **Bloque 1 — SINTAXIS** (caja con borde azul, ~700×100):
  - Código monospace azul tamaño grande (24px):
    ```
    throw new Error("Mensaje descriptivo del error");
    ```
  - Flecha naranja que sale del `"Mensaje descriptivo..."` y va hasta la caja de abajo
- **Bloque 2 — RECORRIDO** (3 cajas conectadas con flechas naranjas, layout horizontal):
  - **Caja 1 (azul, ~280×100):** "El DEV escribe" + snippet:
    ```
    throw new Error(`No se encontró "${nombre}"`);
    ```
  - **Flecha naranja** etiquetada "sube por la pila → `catch (error)`"
  - **Caja 2 (rojo, ~280×100):** "JS atrapa en CATCH" + snippet:
    ```
    catch (error) {
      mensaje.textContent = error.message;
    }
    ```
  - **Flecha naranja** etiquetada "pinta en `#mensaje`"
  - **Caja 3 (verde, ~280×100):** "El USUARIO ve" + texto grande:
    ```
    "No se encontró 'pikachuu'"
    ```
- **Bloque 3 — REGLA** (caja sin borde, fondo verde claro, ancho completo):
  - **Texto grande** (verde **_#2f9e44_** 18px, centrado): "Un buen `throw` cuenta. El string es la voz de la app cuando algo falla."
- **Aside al pie** (gris 12px): "`throw` interrumpe el try y salta directo al catch. Las líneas debajo del throw NUNCA se ejecutan."

**Anchor pedagógico:** el panel hace VISIBLE la cadena `dev escribe → JS atrapa → usuario lee`. Sin este panel, el alumno trata `throw` como una orden mágica y no entiende POR QUÉ el string del `new Error(...)` es importante. Con el panel, entiende que ESE string es exactamente lo que el usuario va a leer.

**Notas para Eric:** el bloque 2 (las 3 cajas con flechas) es lo más importante — si hay que recortar, sacar el bloque 3 (la "regla") y dejar solo sintaxis + recorrido. Los 3 colores (azul / rojo / verde) marcan los 3 actores: dev / JS / usuario.

---

### Panel 3.5 — Pila de llamadas + Propagación de errores

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW**` (después de "Frená un segundo antes del lab...").
- **Tipo:** Imagen-slide (dos pilas verticales lado a lado con flechas curvas — mejor resuelta como infografía IA que hand-drawn).
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9, horizontal: dos pilas grandes lado a lado).
- **Patrón canónico de referencia:** Patrón 3 (Comparativa X vs Y) + Patrón 5 (Flujo).
- **Concepto pedagógico que visualiza:** el alumno DEBE ver con sus ojos que un error sube por la pila de llamadas función por función hasta encontrar un catch que lo atrape (o muere el script). Las dos pilas lado a lado (SIN catch vs CON catch) hacen explícita la diferencia.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_** 36px, centrado): "PROPAGACIÓN DEL ERROR — CÓMO SUBE POR LA PILA DE LLAMADAS"
- **Subtítulo** (gris oscuro 16px, centrado): "Sin catch → muere el script. Con catch en algún nivel → atrapa y la app sigue."
- **Columna izquierda — SIN try/catch** (borde rojo **_#e03131_**, ~600×700 px):
  - **Encabezado** (rojo 24px, centrado): "✗ SIN try/catch — EL SCRIPT MUERE"
  - **Pila vertical de 5 cajas** (de abajo hacia arriba, monospace azul para los nombres de función):
    1. **(arriba)** "tope del script" (caja gris)
    2. "listener del botón" (caja gris)
    3. **_mostrarBusqueda_** (caja gris)
    4. **_buscarPokemon_** (caja gris)
    5. **(abajo, base)** **_obtenerPokemon_** *(response.json explota acá)* (caja roja con icono de explosión)
  - **Flecha ROJA gruesa** que sale de la caja base y sube atravesando TODAS las cajas hasta llegar al tope. Con etiquetas pequeñas en cada nivel: "sigue subiendo" (entre buscarPokemon y mostrarBusqueda), "sigue subiendo" (entre mostrarBusqueda y listener), "llega al tope" arriba.
  - **Banner al tope** (rojo **_#e03131_** 18px, centrado): "💥 SCRIPT MUERE — recargar es la única salida"
- **Columna derecha — CON try/catch en mostrarBusqueda** (borde verde **_#2f9e44_**, ~600×700 px):
  - **Encabezado** (verde 24px, centrado): "✓ CON try/catch en mostrarBusqueda — LA APP SIGUE"
  - **Pila vertical de 5 cajas** (misma estructura que la izquierda) pero con la caja **_mostrarBusqueda_** rodeada por un **escudo verde grueso** y la etiqueta "try { } catch (error) { }".
  - **Flecha ROJA gruesa** desde **_obtenerPokemon_** sube atravesando **_buscarPokemon_**, y **SE DETIENE** chocando contra el escudo verde de **_mostrarBusqueda_**. Etiqueta naranja: "AQUÍ se atrapa".
  - **Banner al pie** (verde **_#2f9e44_** 18px, centrado): "✓ ERROR ATRAPADO — la app sigue viva"
- **Aside al pie central** (gris 12px, ancho completo, centrado): "El catch NO TIENE QUE ESTAR donde nace el error. Puede estar varios niveles más arriba. Por eso `throw` en `obtenerPokemon` + `catch` en `mostrarBusqueda` FUNCIONA."

**Anchor pedagógico:** las pilas son la metáfora visual estándar de "stack trace" — el alumno ya las vio en `error.stack`. La columna izquierda comunica el dolor (script muerto); la derecha comunica la solución (escudo). El escudo verde sobre `mostrarBusqueda` es el ancla visual de la decisión arquitectónica del lab: `throw` abajo, `catch` arriba.

**Notas para Eric:** las pilas pueden invertirse si Eric prefiere "arriba = más alto en la pila" en lugar de "abajo = donde nace el error" — la convención de stack varía por lenguaje. La versión que propongo (`obtenerPokemon` abajo) replica cómo se ve un stack trace impreso (con el frame del error al fondo). Si Eric prefiere la otra, lo notamos al revisar el prompt.

---

### Panel 3.6 — Panel LIBRE para HU2 (Lab — mensaje específico)

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW**` (al iniciar 3.6 Lab HU2).
- **Tipo:** Hand-drawn en vivo — marco vacío para que el instructor escriba los pasos socráticos de HU2.
- **Dimensiones objetivo:** N/A (hand-drawn — marco grande para 8 pasos).
- **Patrón canónico de referencia:** Patrón "Plan socrático LIBRE".
- **Concepto pedagógico que visualiza:** plan socrático del refactor HU2 (response.ok + throw) anclado al HU y sus 3 criterios.

**Contenido del panel (marco mínimo):**

- **Título superior** (rojo **_#e03131_** 32px, centrado): "PLAN DE LA SOLUCIÓN — HU 2: MENSAJE ESPECÍFICO"
- **Caja HU** (~600×140, arriba izquierda):
  > "Como usuario, si escribo un nombre que no existe, quiero un mensaje que diga exactamente eso."
- **Caja CRITERIOS** (~600×140, arriba derecha):
  - "Buscar nombre que no existe → muestra 'No se encontró pikachuu'."
  - "El mensaje es ESPECÍFICO (nombra lo que se buscó), no genérico."
  - "Un nombre VÁLIDO sigue mostrándose con normalidad."
- **8 líneas numeradas** debajo (punteadas grises, número grande 1.-8. a la izquierda).
- **Aside al pie:** "Cada paso se responde leyendo la HU literalmente y sus criterios."

**Anchor pedagógico:** mismo molde que Panel 2.5 — fuerza al instructor a anclar cada paso a la HU + criterios.

**Notas para Eric:** consistente visualmente con Panel 2.5 para que el alumno reconozca el patrón "estamos en plan socrático" sin necesidad de explicarlo cada vez.

---

## Momento 4: estado de carga + HU3 — spinner garantizado

> **Estado:** Borrador
> **Paneles del Momento:** 2 (4.1 Hand-drawn del estado CARGANDO + 4.2 LIBRE para HU3).

---

### Panel 4.1 — ESTADO CARGANDO

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW**` (al iniciar 4.1 ESTADO CARGANDO).
- **Tipo:** Hand-drawn (nativo en Excalidraw — anatomía conceptual del estado + propiedades visuales + cuándo enciende/apaga).
- **Dimensiones objetivo:** N/A (hand-drawn — caja central con definición + 3 ramas).
- **Patrón canónico de referencia:** Patrón 2 (Tabla de propiedades) + Patrón 1 (Anatomía).
- **Concepto pedagógico que visualiza:** dar al estado CARGANDO la misma estructura que se usa para los otros estados de UI: definición + 3 propiedades visuales + cuándo se enciende y se apaga. Una "ficha técnica" del estado.

**Contenido del panel (para gen.js):**

- **Título superior** (negro **_#1e1e1e_** 32px): "ESTADO CARGANDO — LA APP ESTÁ TRABAJANDO"
- **Subtítulo** (gris 14px): "El estado TRANSITORIO por definición: dura solo lo que dura la espera."
- **Bloque 1 — DEFINICIÓN** (caja con borde gris, ancho completo, ~900×100):
  - Texto (negro 16px): "Pantalla que mostramos MIENTRAS la app espera la respuesta del servidor. No es éxito (no llegaron datos), no es error (nada falló) — es 'pedí, estoy esperando, no te vayas'."
- **Bloque 2 — PROPÓSITO** (caja con borde naranja, ~900×120):
  - Encabezado (naranja **_#e8590c_** 18px): "PROPÓSITO"
  - 3 bullets (naranja oscuro 13px):
    - Comunicar al usuario que la app está trabajando (no congelada).
    - Cancelar solicitudes si el componente se desmonta (en apps reactivas como React).
    - Evitar que el usuario interactúe con contenido incompleto.
- **Bloque 3 — 3 PROPIEDADES VISUALES** (3 cajas pequeñas en fila, ~280×180 cada una):
  - **Caja COLOR** (borde gris, encabezado azul 16px "COLOR"):
    - Texto: "Neutro / gris — convención: 'información, no resultado'."
    - Snippet: **_text-slate-500_** (Tailwind)
    - Nota roja: "NO rojo (ERROR) ni verde (ÉXITO)"
  - **Caja TEXTO** (borde gris, encabezado azul 16px "TEXTO"):
    - Texto: "Informativo, no decisión."
    - Ejemplo grande: "Cargando…"
    - Nota: "Los 3 puntos sugieren continuidad."
  - **Caja COEXISTENCIA** (borde gris, encabezado azul 16px "COEXISTENCIA"):
    - Texto: "Al encender CARGANDO, el ERROR del intento anterior se oculta."
    - "El ÉXITO previo puede quedarse o irse (depende del UX)."
- **Bloque 4 — ENCIENDE / APAGA** (2 columnas, ~450 cada una):
  - **Columna ENCIENDE** (borde verde 16px "🟢 SE ENCIENDE"):
    - "Al INICIO de la función asíncrona, ANTES del `try`."
    - Snippet: **_spinner.classList.remove("hidden")_**
  - **Columna APAGA** (borde rojo 16px "🔴 SE APAGA"):
    - "SIEMPRE al terminar, en cualquier camino (éxito O error)."
    - "Por eso necesitamos `finally` — el único bloque que JS GARANTIZA que corre en todos los caminos."
    - Snippet: **_finally { spinner.classList.add("hidden") }_**
- **Aside al pie** (gris 12px, centrado): "El `#spinner` del HTML ya está preparado desde el Setup de HU1. Acá lo prendemos por primera vez."

**Anchor pedagógico:** ficha técnica completa del estado en UN panel. El alumno se la lleva como referencia y puede mapearla 1:1 cuando el M4/M5 hablen de state management. Las 4 secciones (definición / propósito / 3 propiedades / enciende-apaga) son las mismas que se aplicarían a CUALQUIER estado de UI en cualquier framework moderno.

**Notas para Eric:** los 4 bloques caben verticalmente si el canvas es alto. Si queda muy comprimido, dividir en dos columnas (bloques 1-2 izquierda, bloques 3-4 derecha). La emoji 🟢/🔴 del bloque 4 puede sustituirse por palabras "ON" / "OFF" si Eric prefiere mantener la regla "sin emojis" (excepción que ya tenía permiso el 🔍 del estado VACÍO).

---

### Panel 4.2 — Panel LIBRE para HU3 (Lab — spinner garantizado)

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW**` (al iniciar 4.2 Lab HU3).
- **Tipo:** Hand-drawn en vivo — marco vacío.
- **Dimensiones objetivo:** N/A (hand-drawn — marco grande para 8 pasos).
- **Patrón canónico de referencia:** Patrón "Plan socrático LIBRE".
- **Concepto pedagógico que visualiza:** plan socrático de HU3 + el "paso de error intencional" donde el alumno pone el `spinner.add("hidden")` mal al final del try y lo ve pegado en vivo.

**Contenido del panel (marco mínimo):**

- **Título superior** (rojo **_#e03131_** 32px, centrado): "PLAN DE LA SOLUCIÓN — HU 3: SPINNER GARANTIZADO"
- **Caja HU** (~600×140):
  > "Como usuario, quiero ver 'Cargando…' mientras espera y que desaparezca SIEMPRE, tenga éxito o falle."
- **Caja CRITERIOS** (~600×140):
  - "Mientras la búsqueda está en curso, se ve 'Cargando…'."
  - "El indicador SIEMPRE desaparece al terminar."
  - "Si la carga inicial de la rejilla falla, también se ve un mensaje."
- **8 líneas numeradas** (punteadas, 1.-8.).
- **Aside especial al pie**, fondo amarillo claro: "⚠ Paso 3 = poner `spinner.add('hidden')` MAL a propósito al final del try y ver el bug en vivo. Paso 4 = mover a `finally` y verificar el fix."

**Anchor pedagógico:** mismo molde que 2.5 y 3.6. El aside especial al pie le recuerda al instructor que en este lab hay un paso de "error intencional" que cambia el ritmo respecto a los planes socráticos anteriores.

**Notas para Eric:** el aside al pie es decorativo — si te resulta ruidoso, sacarlo y mantener solo las 8 líneas vacías como en los demás.

---

## Momento 5: "No encontrado ≠ error" + HU4 — refactor del 404

> **Estado:** Borrador
> **Paneles del Momento:** 2 (5.1 Hand-drawn del principio + 5.2 LIBRE para HU4).

---

### Panel 5.1 — El principio "exceptions are for exceptions"

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW**` (al iniciar 5.1).
- **Tipo:** Hand-drawn (nativo en Excalidraw — comparativa MAL USO vs BUEN USO + diagrama de "qué va al catch vs qué va al if").
- **Dimensiones objetivo:** N/A (hand-drawn — dos columnas de código + caja superior con el principio).
- **Patrón canónico de referencia:** Patrón 3 (Comparativa X vs Y) + Patrón 1 (Anatomía de regla).
- **Concepto pedagógico que visualiza:** la regla de oro: `try/catch` es para situaciones INESPERADAS. Lo predecible (un usuario que no existe en un array, un nombre mal escrito en una búsqueda) se maneja con `if` — no con `throw`. Las dos columnas paralelas hacen explícito qué se ve como código MAL vs código BIEN, sobre un caso simple sin API.

**Contenido del panel (para gen.js):**

- **Título superior** (negro **_#1e1e1e_** 32px): "'EXCEPTIONS ARE FOR EXCEPTIONS' — LA REGLA DE ORO"
- **Subtítulo / Definición** (caja sin borde, fondo gris claro, ancho completo, ~900×80):
  - Texto (negro 15px, centrado): "Los bloques `try/catch` solo deben usarse para manejar situaciones VERDADERAMENTE INESPERADAS, ANÓMALAS o FUERA DEL CONTROL de tu código. NUNCA para controlar el flujo normal y predecible."
- **Bloque 1 — Qué SÍ es excepción** (caja con borde rojo, ~440×130, izquierda):
  - Encabezado (rojo **_#e03131_** 18px): "✓ SÍ es excepción → usar `throw`/`catch`"
  - 3 bullets (negro 13px):
    - El servidor se cayó (500).
    - La red se cortó.
    - El JSON está corrupto.
- **Bloque 2 — Qué NO es excepción** (caja con borde verde, ~440×130, derecha):
  - Encabezado (verde **_#2f9e44_** 18px): "✗ NO es excepción → usar `if`"
  - 3 bullets (negro 13px):
    - El usuario buscó un nombre mal escrito.
    - No hay resultado para la consulta (404).
    - El array no contiene al ítem buscado.
- **Separador horizontal con título** (naranja oscuro **_#e8590c_** 18px, centrado): "EJEMPLO — buscar un usuario en un array"
- **Bloque 3 — MAL uso** (caja con borde rojo, ~440×280, izquierda):
  - Encabezado (rojo 16px): "❌ MAL USO: controlar lógica común con excepciones"
  - Snippet monospace 11px (azul + comentarios grises):
    ```js
    const listaUsuarios = ["Erick", "Mhitzy", "Gefferson"];

    try {
      const usuario = listaUsuarios.find(
        u => u === "Erick"
      );
      if (!usuario) {
        throw new Error("No existe");   // ← forzar throw
      }
      console.log("Encontrado:", usuario);
    } catch (error) {
      console.log("No existe, mostrar registro.");
    }
    ```
- **Bloque 4 — BUEN uso** (caja con borde verde, ~440×280, derecha):
  - Encabezado (verde 16px): "✅ BUEN USO: lógica para lo predecible, catch para lo impredecible"
  - Snippet monospace 11px:
    ```js
    const listaUsuarios = ["Erick", "Mhitzy", "Gefferson"];

    const usuario = listaUsuarios.find(
      u => u === "Erick"
    );

    if (usuario) {
      console.log("Encontrado:", usuario);
    } else {
      console.log("No existe, mostrar registro.");
    }
    ```
- **Aside al pie** (gris 12px, centrado): "Esto es exactamente el refactor de HU4 — el 404 del lab pasa de `throw` (mal uso) a `if + return null` (buen uso)."

**Anchor pedagógico:** el ejemplo del array de usuarios es SIN API — pura lógica de JS — para que el alumno entienda el principio en un caso simple antes de aplicarlo al refactor del 404. La conexión con el lab (aside al pie) cierra el lazo.

**Notas para Eric:** los snippets son los que vienen LITERAL del guion final (no inventar). Si los dos bloques de código quedan apretados, sacar los comentarios `// ← forzar throw` y `// ← lógica simple` y dejar solo el código puro — los comentarios pueden ir como aside de cada caja.

---

### Panel 5.2 — Panel LIBRE para HU4 (Lab — refactor del 404)

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW Panel 5.2 LIBRE**`.
- **Tipo:** Hand-drawn en vivo — marco vacío.
- **Dimensiones objetivo:** N/A (hand-drawn — marco grande para 8 pasos + diagrama paralelo).
- **Patrón canónico de referencia:** Patrón "Plan socrático LIBRE".
- **Concepto pedagógico que visualiza:** plan socrático del refactor HU4 — toca 3 funciones (`obtenerPokemon`, `buscarPokemon`, `mostrarBusqueda`).

**Contenido del panel (marco mínimo):**

- **Título superior** (rojo **_#e03131_** 32px, centrado): "PLAN DE LA SOLUCIÓN — HU 4: AVISO DE NO ENCONTRADO"
- **Caja HU** (~600×140):
  > "Como entrenador, cuando busco un Pokémon que no existe (o escribí mal el nombre), quiero que la app me avise que no se encontró, para corregir el nombre y volver a intentar."
- **Caja CRITERIOS** (~600×140):
  - "Buscar nombre que no existe → aviso de 'no se encontró'."
  - "El aviso menciona el NOMBRE BUSCADO."
  - "Tras el aviso, se puede corregir y buscar de nuevo sin recargar."
- **8 líneas numeradas** (punteadas, 1.-8.).
- **Aside lateral derecho** (gris 12px, columna lateral): "FUNCIONES QUE TOCAR: 1) **_obtenerPokemon_** · 2) **_buscarPokemon_** · 3) **_mostrarBusqueda_**"
- **Aside al pie:** "El `return` adentro del try NO salta el `finally`. El spinner se oculta igual."

**Anchor pedagógico:** mismo molde que 2.5 / 3.6 / 4.2. El aside lateral con "3 funciones a tocar" le recuerda al instructor el alcance del refactor y al alumno que este es un lab más extenso.

**Notas para Eric:** la nota del `return + finally` al pie es lo que conecta con la pregunta de activación que se sembró en M4. Si te resulta excesivo, sacar.

---

## Momento 6: Markdown + README

> **Estado:** Borrador
> **Paneles del Momento:** 1 (6.1 Hand-drawn tabla de sintaxis Markdown). El sub-punto 6.2 es VS Code y NO lleva panel.

---

### Panel 6.1 — Tabla de sintaxis de elementos Markdown

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW**` (al iniciar 6.1 Markdown).
- **Tipo:** Hand-drawn (nativo en Excalidraw — tabla de 5 filas × 2 columnas).
- **Dimensiones objetivo:** N/A (hand-drawn — tabla compacta).
- **Patrón canónico de referencia:** Patrón 2 (Tabla técnica).
- **Concepto pedagógico que visualiza:** las 5 sintaxis de Markdown que el alumno va a usar HOY al escribir el README. Cada fila muestra el ANTES (lo que escribís) y el DESPUÉS (lo que se ve renderizado).

**Contenido del panel (para gen.js):**

- **Título superior** (negro **_#1e1e1e_** 32px): "MARKDOWN — LAS 5 SINTAXIS PARA EL README"
- **Subtítulo** (gris 14px): "Texto plano legible que se renderiza automáticamente en GitHub."
- **Tabla 2 columnas × 6 filas** (header + 5 datos), bordes grises:

| Sintaxis (lo que ESCRIBÍS — monospace azul) | Resultado (lo que se VE — renderizado) |
|---|---|
| **_# Título_** / **_## Subtítulo_** | **Título grande** (H1) / **Subtítulo** (H2) *(rendered: tipografía grande sin asterisco)* |
| **_\*\*negrita\*\*_** · **_\*cursiva\*_** | **negrita** · *cursiva* |
| **_- item_** | • item *(bullet)* |
| **_\`código\`_** | `código` *(monospace gris fondo)* |
| **_[texto](url)_** | [texto](https://...) *(link azul subrayado clickeable)* |

- **Aside abajo** (gris 12px, centrado): "GitHub renderiza automáticamente cualquier `README.md` en la raíz del repo. Ese render es la PRIMERA IMPRESIÓN del proyecto — la rúbrica del lab lo evalúa en el criterio 5 (20 pts)."
- **Mini-aside lateral** (caja chica con borde negro, esquina derecha): "Markdown lo inventó John Gruber en 2004. GitHub lo adoptó en 2007 — desde entonces es el estándar de facto del open source."

**Anchor pedagógico:** dos columnas — "lo que escribís" vs "lo que se ve" — para que el alumno tenga un mapeo 1:1 que puede consultar mientras dicta el README en VS Code. El mini-aside histórico es ancla cultural.

**Notas para Eric:** el mini-aside histórico es opcional. Si Eric prefiere mantener el panel limpio (5 filas + nada más), sacarlo y dejar solo la tabla + el aside del pie. La columna "Resultado" requiere que la imagen renderice una negrita real, una cursiva real, un bullet, un código monospace y un link azul — son ejemplos en vivo del propio Markdown.

---

## Resumen de tipos y orden de generación

| Panel | Tipo | Sub-tipo | Acción |
|---|---|---|---|
| 1.2 | Imagen-slide | Flujo sin/con error | Generar prompt IA en `CLASE 12 - PROMPTS DE IMAGEN.md` |
| 1.3 | Hand-drawn | Tabla tipos de error | Agregar a `gen.js` |
| 1.4 | Hand-drawn | Objeto Error + propiedades | Agregar a `gen.js` |
| 2.1 | Imagen-slide | Diagrama TRY/CATCH/FINALLY | Generar prompt IA |
| 2.5 | Hand-drawn en vivo | LIBRE HU1 | Agregar a `gen.js` (solo marco) |
| 3.2 | Hand-drawn | 2 tablas HTTP | Agregar a `gen.js` |
| 3.4 | Hand-drawn | throw | Agregar a `gen.js` |
| 3.5 | Imagen-slide | Pila + propagación | Generar prompt IA |
| 3.6 | Hand-drawn en vivo | LIBRE HU2 | Agregar a `gen.js` (solo marco) |
| 4.1 | Hand-drawn | ESTADO CARGANDO | Agregar a `gen.js` |
| 4.2 | Hand-drawn en vivo | LIBRE HU3 | Agregar a `gen.js` (solo marco) |
| 5.1 | Hand-drawn | exceptions are for exceptions | Agregar a `gen.js` |
| 5.2 | Hand-drawn en vivo | LIBRE HU4 | Agregar a `gen.js` (solo marco) |
| 6.1 | Hand-drawn | Tabla sintaxis Markdown | Agregar a `gen.js` |

**Total para `gen.js`:** 11 paneles (7 hand-drawn con contenido + 4 hand-drawn en vivo con solo marco).
**Total para prompts IA:** 3 paneles (1.2, 2.1, 3.5).

**Siguiente paso sugerido (cuando Eric valide):**
1. Generar prompts IA para 1.2, 2.1, 3.5 en `CLASE 12 - PROMPTS DE IMAGEN.md`.
2. Adaptar `gen.js` para producir los 11 paneles hand-drawn.
3. Combinar todo en `CLASE 12.excalidraw`.
