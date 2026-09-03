# GUÍA EXCALIDRAW — CLASE 11: async/await y búsqueda en la API

> **Curso:** Code 201
> **Módulo:** M3 — Clase 3 de 4
> **Estado:** Paneles documentados — pendiente validación de Eric
> **Total Paneles:** 9 (2 M1 + 2 M2 + 1 M3 + 2 M4 + 2 M5)
> **Tipos:** 5 Hand-drawn nativos (1.2, 1.3, 2.1, 4.1, 5.1) + 4 Hand-drawn en vivo (2.2, 3.2, 4.2, 5.2). **Sin imágenes IA** (decisión de Eric, 2026-06-23: "no serán imágenes, usa las herramientas nativas de Excalidraw").
> **Fecha:** 2026-06-23
> **Fuente del guion:** `mi-sistema/clase-11/CLASE 11.md`
> **Generador:** `mi-sistema/clase-11/gen.js` — ejecutar con `node gen.js "CLASE 11.excalidraw"` para regenerar.
> **Patrón visual común:** enfoque **code-forward / anatomía con flechas etiquetadas + comparativas de 2 lados + tablas técnicas**, mismo estilo que C07-C10 pero **100% dibujado con elementos nativos de Excalidraw** (rectángulos, texto, flechas, líneas, tablas — NO imágenes IA generadas externamente). **PROHIBIDO** todo dibujo de metáfora ilustrada (no pizzas, no Pokémon dibujados, no chefs cartoon). Las analogías cotidianas (álbum de figuritas, ficha técnica del electrodoméstico, Google paginado) **se dicen en voz** y se anclan con un mini-aside de texto en una esquina del panel; nunca con ilustración. Convención semántica de colores consistente: código/sintaxis = azul **_#1971c2_**; criterios/aciertos/lo nuevo = verde **_#2f9e44_**; problema/dolor/advertencia/lo que se va = rojo **_#e03131_**; etiquetas de proceso, flechas y parámetros destacados = naranja **_#f08c00_**; títulos = negro **_#1e1e1e_**; encabezado secundario = naranja oscuro **_#e8590c_**. Código siempre monospace azul **_#1971c2_**, extraído LITERAL del guion / lab. Paleta restringida a los 6 colores canónicos del §3 del SKILL. **Sin emojis** (regla §10 del SKILL) — se usan los strings literales "OK", "FAIL" para indicadores funcionales.
>
> **Sub-puntos SIN panel** (decisión explícita de Eric, 2026-06-23):
> - **1.1** — repaso de C10, se conduce desde VS Code.
> - **1.4** — demo de `await` con `prepararPizza`, se conduce desde VS Code + consola.
> - **1.5** — code-along HU1 sobre el proyecto.
> - **3.1** — capturar + duplicado, se conduce verbal con analogía del álbum (sin proyectar).
>
> **Pendiente de decisión:** Panel para **5.3 cierre de clase** (tabla resumen del día + arco C09→C10→C11→C12). El guion tiene trigger `**EN PANTALLA: EXCALIDRAW — tabla resumen del día...**` pero Eric no lo mencionó en su directiva. Si lo querés, se agrega como Panel 5.3 en una segunda pasada.

---

## Momento 1: Repaso de C10 + async/await — reformular la carga

> **Estado:** Borrador
> **Paneles del Momento:** 2 (Panel 1.2 = el reto del mini-ejercicio fijo en pantalla durante 5 min; Panel 1.3 = la comparativa lado a lado `.then` vs `async/await`). Los sub-puntos 1.1, 1.4 y 1.5 son **VS Code en vivo** y NO llevan panel.

---

### Panel 1.2 — Mini-ejercicio: una sola tarjeta (tu Pokémon favorito)

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW Panel 1.2 (el reto del mini-ejercicio — enunciado, pistas estructurales, criterio de éxito, nota de revertir). Apoyo: VS CODE — el _app.js_ del repo _pokedex_ tal como quedó al cierre de C10 (con la carga por _Promise.all_ de los 6 Pokémon) para que cada alumno trabaje sobre el suyo.**`
- **Tipo:** Hand-drawn (nativo en Excalidraw) (consigna estática que se queda fija durante 5 minutos — exige precisión geométrica en las 4 cajas funcionales).
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3 — título arriba, 4 secciones apiladas: reto, pistas, criterio, revertir).
- **Patrón canónico de referencia:** Patrón 4 (Algoritmo jerárquico — 4 secciones funcionales con jerarquía de color).
- **Concepto pedagógico que visualiza:** dejar la consigna del mini-ejercicio proyectada toda la sesión para que el alumno trabaje autónomamente sin tener que recordar el enunciado ni preguntar al instructor. Las pistas estructurales aparecen "abajo" porque solo se señalan cuando un alumno se traba (no se leen en voz alta de entrada).

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (rojo **_#e03131_**, 36px, centrado): "MINI-EJERCICIO — UNA SOLA TARJETA (5 MIN)"
- **Subtítulo** (negro **_#1e1e1e_** 18px, centrado): "Sobre el MISMO **_app.js_** de C10. NO crees archivos nuevos. Hacé que la Pokédex muestre SOLO una tarjeta — la de tu Pokémon favorito."
- **Sección 1 — EL RETO** (caja con borde negro **_#1e1e1e_**, encabezado en rojo **_#e03131_** 22px "EL RETO"):
  - 4 pasos numerados (negro 16px):
    1. Elegí un Pokémon favorito (charizard, snorlax, mewtwo, lo que sea).
    2. Modificá **_app.js_** para que aparezca SOLO esa tarjeta, manteniendo el código de C10 con **_.then_** (NADA de **_async/await_** todavía).
    3. Pensá antes de tocar: ¿qué se comenta? ¿qué se reusa tal cual? ¿qué se modifica mínimamente?
    4. La tarjeta tiene que verse igual que las de C10 — imagen, nombre, tipos.
- **Sección 2 — PISTAS ESTRUCTURALES** (caja con borde naranja **_#f08c00_**, encabezado naranja 22px "PISTAS ESTRUCTURALES — solo si te trabás"):
  - Bullets (naranja oscuro **_#e8590c_** 15px, monospace donde aplique):
    - El array `nombres = [...6 Pokémon]` y todo el bloque **_Promise.all(...)_** → **COMENTAR** (no borrar).
    - **_fetch_** con dos **_.then_** SÍ aplica → escribir con UN solo nombre en la URL.
    - **_adaptarPokemon_** → **REUSAR** tal cual.
    - **_render(...)_** espera un **array** → pasarle un array de UN elemento: **_render([adaptarPokemon(data)])_**.
    - **_crearTarjeta_** → **NO se toca** (lo llama **_render_** por dentro).
- **Sección 3 — CRITERIO DE ÉXITO** (caja con borde verde **_#2f9e44_**, encabezado verde 22px "CRITERIO DE ÉXITO ✓"):
  - Bullets (verde 15px):
    - Al cargar la página aparece **UNA sola tarjeta** en la rejilla.
    - Con imagen, nombre y tipos del Pokémon elegido.
    - La consola NO muestra errores.
- **Sección 4 — AL CERRAR EL EJERCICIO** (caja con borde rojo **_#e03131_** + ícono `⚠`, encabezado rojo 22px "⚠ ANTES DE EMPEZAR HU 1"):
  - Bullets (rojo 15px):
    - NO commitear nada.
    - **_Ctrl+Z_** hasta volver al estado original de C10 (los 6 Pokémon cargando con **_Promise.all_**).
    - O descomentar lo comentado y borrar el bloque del favorito.
- **Timer pequeño en la esquina superior derecha:** "⏱ 5 min"

**Anchor pedagógico:** dejar la consigna proyectada toda la sesión libera al instructor de repetir el enunciado. El orden visual (reto → pistas → criterio → revertir) refleja el flujo cronológico del ejercicio. Las pistas en naranja y abajo refuerzan que NO se leen de entrada — el alumno las "descubre" cuando se traba.

**Notas para Eric:** el panel se queda fijo durante todo el mini-ejercicio. Cuando los alumnos circulen y te pregunten, podés señalar las pistas estructurales una por una sin tener que repetir todo el enunciado. Si querés que el timer cuente regresivo en vivo, eso es Hand-drawn en vivo (lo escribís encima); si no, podés omitir el "⏱ 5 min" del panel.

---

### Panel 1.3 — async/await: el MISMO fetch en dos columnas

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — el MISMO _fetch_ que acaban de escribir, en dos columnas: _.then_ encadenado (izq) vs _async/await_ de arriba abajo (der).**`
- **Tipo:** Hand-drawn (nativo en Excalidraw) (comparativa de 2 columnas con código alineado y etiquetas funcionales — exige precisión tipográfica monospace, mejor IA que hand-drawn).
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9, horizontal: dos columnas grandes + reglas al pie).
- **Patrón canónico de referencia:** Patrón 3 (Comparativa X vs Y — el MISMO código en dos formas, lado a lado).
- **Concepto pedagógico que visualiza:** anclar que **_async/await_** NO es una tecnología nueva — es la MISMA promesa, mismo **_fetch_**, mismo resultado, solo escrito distinto. La lectura "de arriba abajo" en la columna derecha coincide con el orden de ejecución, mientras que la lectura "hacia adentro" en la columna izquierda no.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_** 36px, centrado): "EL MISMO `fetch` — DOS FORMAS DE CONSUMIRLO"
- **Subtítulo** (gris oscuro 18px, centrado): "**_async/await_** NO reemplaza a las Promesas. Es la MISMA promesa, leída como pasos de arriba a abajo."
- **Columna izquierda — `.then` (borde rojo **_#e03131_**, ~600×450 px):**
  - **Encabezado** (rojo **_#e03131_** 24px): "C10 — `.then` encadenado"
  - **Bloque de código** (monospace azul **_#1971c2_**, fondo blanco):
    ```js
    fetch(url)
      .then(response => response.json())
      .then(data => {
        /* usar data */
      });
    ```
  - **Flecha curva roja a la izquierda del bloque** descendiendo y "envolviendo" cada `.then` → etiqueta (rojo 14px): "Se lee HACIA ADENTRO. Cada `.then` envuelve al siguiente."
  - **Etiqueta al pie** (rojo **_#e03131_** 14px): "El orden visual NO coincide con el orden de ejecución."
- **Columna derecha — `async/await` (borde verde **_#2f9e44_**, ~600×450 px):**
  - **Encabezado** (verde **_#2f9e44_** 24px): "C11 — `async/await`"
  - **Bloque de código** (monospace azul **_#1971c2_**, fondo blanco):
    ```js
    const response = await fetch(url);
    const data = await response.json();
    /* usar data */
    ```
  - **Flecha recta verde a la izquierda del bloque** descendiendo línea por línea → etiqueta (verde 14px): "Se lee DE ARRIBA A ABAJO. Línea 1, después línea 2, después línea 3."
  - **Etiqueta al pie** (verde **_#2f9e44_** 14px): "Lo que ves escrito es lo que pasa, en ese orden."
- **Flecha amarilla horizontal entre columnas** (naranja **_#f08c00_** 20px): "AZÚCAR SINTÁCTICO — misma lógica, distinta sintaxis"
- **Sección al pie — LAS 4 REGLAS** (caja con borde negro **_#1e1e1e_**, ancho completo, fondo blanco):
  - **Encabezado** (negro 20px): "REGLAS DE `await`"
  - 4 bullets en grid 2×2 (negro 15px):
    - **1.** **_await_** SOLO dentro de funciones marcadas como **_async_**.
    - **2.** **_await_** reemplaza al **_.then_** — **NO** a la promesa. La promesa sigue ahí (**_fetch_** y **_Promise.all_** siguen devolviendo promesas).
    - **3.** Una función **_async_** SIEMPRE devuelve una promesa, aunque adentro hagas un **_return 5_** directo.
    - **4.** **_await_** pausa **solo esa función** — el resto del programa sigue corriendo (la página no se traba).

**Anchor pedagógico:** la comparación lado a lado del MISMO **_fetch_** con sus dos consumos elimina la pregunta "¿qué es **_async/await_**?" — el alumno VE que es lo mismo escrito distinto. La frase "azúcar sintáctico" en el medio es el ancla a la idea fuerza del Momento 1.

**Notas para Eric:** podés ir alternando los punteros entre columnas mientras explicás las 4 reglas al pie. El bloque de código sale LITERAL del code-along de 1.3 — si cambia el ejemplo, hay que actualizar el panel.

---

## Momento 2: De filtrar a buscar — por nombre, contra la API

> **Estado:** Borrador
> **Paneles del Momento:** 2 (Panel 2.1 = concepto filtrar vs buscar + anatomía del parámetro de ruta; Panel 2.2 = marco LIBRE donde Eric escribe los 8 pasos del plan socrático en vivo).

---

### Panel 2.1 — Filtrar vs Buscar + parámetro de ruta

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — dos buscadores enfrentados: a la izquierda una lupa DENTRO del array **_pokedex_** (filtrar); a la derecha una lupa apuntando a la nube/API (buscar). (Apoyo: NAVEGADOR para la demo de la URL.)**`
- **Tipo:** Hand-drawn (nativo en Excalidraw) (denso — 3 secciones apiladas: comparativa 2 columnas + anatomía URL + tabla demo).
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3).
- **Patrón canónico de referencia:** Patrón 3 (Comparativa X vs Y, arriba) + Patrón 1 (Anatomía de sintaxis, medio) + Patrón 8 (Bloque comparativo con leyenda, pie).
- **Concepto pedagógico que visualiza:** distinguir filtrar local (recortar lo que ya tengo) de buscar API (pedir cualquier recurso por nombre) + introducir el parámetro de ruta como pieza estructural y obligatoria de la URL. El panel ancla los dos conceptos juntos porque el lab los aplica en un mismo paso (el buscador deja de filtrar y empieza a pedir a la API por nombre).

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_** 36px, centrado): "FILTRAR vs BUSCAR — Y EL PARÁMETRO DE RUTA"
- **Sección 1 — Comparativa filtrar vs buscar (arriba, 2 columnas):**
  - **Columna izquierda — FILTRAR (borde rojo **_#e03131_**, ~600×280 px):**
    - Encabezado (rojo 22px): "FILTRAR — local"
    - Dibujo: caja gris etiquetada **_pokedex_** con 6 ítems chiquitos (pikachu, bulbasaur, ...), una lupa DENTRO de la caja
    - Etiqueta (rojo 15px): "Recorre el array que ya tengo en memoria y devuelve los que matchean. Si NO está cargado, NUNCA aparece."
    - Código pequeño (monospace azul): `pokedex.filter(p => p.nombre.includes(texto))`
  - **Columna derecha — BUSCAR EN LA API (borde verde **_#2f9e44_**, ~600×280 px):**
    - Encabezado (verde 22px): "BUSCAR — contra la API"
    - Dibujo: lupa apuntando a una nube grande etiquetada "PokeAPI" — cualquier Pokémon
    - Etiqueta (verde 15px): "Sale a internet a pedir un recurso por nombre, esté o no en mi memoria. Encuentra CUALQUIERA."
    - Código pequeño (monospace azul): `fetch("https://pokeapi.co/api/v2/pokemon/" + nombre)`
  - **Aside al pie de la sección** (caja gris, negro 14px centrado): "Analogía: la agenda de tu celular vs el buscador de internet."
- **Sección 2 — Anatomía de la URL (centro, ancho completo):**
  - **Bloque grande de URL** (monospace azul **_#1971c2_** 26px, fondo blanco con borde gris claro):
    - `https://pokeapi.co/api/v2/pokemon/pikachu`
  - **Flechas descomponiendo la URL** (naranja **_#f08c00_**):
    - Flecha a `https://pokeapi.co` → etiqueta (naranja 14px): "host"
    - Flecha a `/api/v2/pokemon` → etiqueta (naranja 14px): "ruta base"
    - Flecha grande naranja a `/pikachu` → etiqueta destacada (naranja **_#f08c00_** 20px bold): "PARÁMETRO DE RUTA"
  - **Notación en docs** (caja con borde azul **_#1971c2_**, encabezado azul 16px): "Notación en documentación:"
    - Código (monospace azul 22px): `/pokemon/:nombre`
    - Etiqueta (azul 13px): "El `:` marca la parte variable que reemplazás por un valor real."
  - **Tres reglas a la derecha de la anatomía** (caja con borde naranja **_#f08c00_**, encabezado naranja 16px "Reglas"):
    - "Estructural" (naranja 14px)
    - "Obligatorio" (naranja 14px)
    - "Define QUÉ recurso pido" (naranja 14px)
- **Sección 3 — Demo de URLs (al pie, 3 columnas):**
  - **Columna 1 (verde, check ✓):**
    - URL (monospace azul): `/pokemon/pikachu`
    - Resultado: "JSON de pikachu" (verde 14px)
  - **Columna 2 (verde, check ✓):**
    - URL (monospace azul): `/pokemon/charizard`
    - Resultado: "JSON de charizard" (verde 14px)
  - **Columna 3 (rojo, X ✗):**
    - URL (monospace azul): `/pokemon/pikachuu`
    - Resultado: "404 Not Found" (rojo 14px)
    - Etiqueta extra (rojo 12px italic): "Se maneja en C12 con `try/catch`."

**Anchor pedagógico:** la comparativa arriba sostiene la distinción local vs API durante toda la explicación; la anatomía en el centro es el anclaje visual del concepto "parámetro de ruta" que reaparece en M5 contrastado con query params; la demo en 3 columnas al pie anticipa la demo en navegador y siembra el cliffhanger del 404.

**Notas para Eric:** durante la demo en navegador (sub-punto 2.1 paso 3 — los 3 cambios de URL en vivo), volvés al panel para mostrar que cada cambio corresponde a la parte "parámetro de ruta" del diagrama. En M5.1 vas a contrastar esta misma URL con el bloque `?limit/?offset` — el panel funciona como referencia visual del primer tipo.

---

### Panel 2.2 — Plan socrático HU 2: BUSCAR (LIBRE — Hand-drawn en vivo)

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW Panel 2.2 LIBRE — el instructor escribe los 8 pasos socráticos uno por uno mientras conduce el plan (sin contenido pre-escrito, solo el marco con el título "PLAN DE LA SOLUCIÓN — HU 2: BUSCAR"). Después: VS CODE + NAVEGADOR (Live Server) para el code-along.**`
- **Tipo:** Hand-drawn en vivo (Eric escribe los 8 pasos en tiempo real mientras conduce el plan socrático con el grupo).
- **Patrón canónico de referencia:** Patrón 6 (Timeline / lista construida paso a paso en vivo).
- **Concepto pedagógico que visualiza:** dejar que el alumno **VEA construirse el plan** en tiempo real refuerza que el plan SALE del enunciado de la HU + criterios — no de la cabeza del instructor. Cada paso aparece cuando el grupo lo responde.

**Contenido del panel (marco pre-impreso por excalidraw-system; el centro queda VACÍO para que Eric escriba en vivo):**

- **Título superior** (rojo **_#e03131_** 36px, centrado, FIJO): "PLAN DE LA SOLUCIÓN — HU 2: BUSCAR"
- **Caja con la HU textual** (borde gris claro, esquina superior izquierda, FIJA):
  - Encabezado (negro 14px bold): "HU 2"
  - Texto en italic 13px: "Como usuario, quiero escribir un nombre y traer ese Pokémon desde la API —aunque no esté en mi rejilla— para verlo, presionando Buscar o Enter."
- **Caja con los 3 criterios de aceptación** (borde gris claro, esquina superior derecha, FIJA):
  - Encabezado (negro 14px bold): "CRITERIOS"
  - 3 bullets (negro 12px):
    1. Pulsar Buscar o Enter muestra ese Pokémon, aunque no estuviera en la rejilla.
    2. El buscador ya NO filtra solo lo cargado: consulta la API.
    3. El buscador ignora una búsqueda vacía.
- **ÁREA CENTRAL (~75% del panel) VACÍA** — para que Eric escriba los 8 pasos uno por uno durante la conducción del plan. Sugerencia: dejar 8 líneas guía muy tenues (gris claro **#dee2e6**) numeradas 1–8 a la izquierda, sin texto, para que Eric tenga referencia de posición. Si Eric prefiere completamente libre sin guías, omitirlas.
- **Pie del panel** (gris pequeño 12px italic, centrado): "Cada paso se responde leyendo la HU literalmente y sus criterios — no son decisiones abiertas."

**Anchor pedagógico:** la HU + criterios FIJOS en la parte superior funcionan como "fuente de verdad" — los alumnos miran allá cuando intentan responder. El área central vacía hace que el plan se sienta **construido juntos**, no dictado. El pie refuerza la regla del juego que Eric establece en su apertura.

**Notas para Eric:** si preferís un panel completamente sin guías de posición (sin las 8 líneas tenues), decile a excalidraw-system que las omita. Lo importante es que la HU + criterios queden FIJOS arriba para que los alumnos las consulten en cualquier momento. Misma estructura para 3.2, 4.2 y 5.2.

---

## Momento 3: Capturar — el estado de la app crece

> **Estado:** Borrador
> **Paneles del Momento:** 1 (Panel 3.2 = marco LIBRE donde Eric escribe los 8 pasos del plan socrático HU 3 en vivo). El sub-punto 3.1 (capturar + duplicado + analogía del álbum) se conduce **VERBAL sin proyección** (decisión explícita de Eric).

---

### Panel 3.2 — Plan socrático HU 3: CAPTURAR (LIBRE — Hand-drawn en vivo)

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW Panel 3.2 LIBRE — el instructor escribe los 8 pasos socráticos uno por uno mientras conduce el plan (sin contenido pre-escrito, solo el marco con el título "PLAN DE LA SOLUCIÓN — HU 3: CAPTURAR"). Después: VS CODE + NAVEGADOR (Live Server) para el code-along.**`
- **Tipo:** Hand-drawn en vivo (misma estructura que Panel 2.2).
- **Patrón canónico de referencia:** Patrón 6.
- **Concepto pedagógico que visualiza:** igual que Panel 2.2 — el plan se construye juntos, anclado a la HU y sus criterios. **Detalle clave de M3:** el paso 6 (donde nace el concepto "estado") debería tener algo de tinta especial cuando Eric lo escriba en vivo — un destaque visual (puede dejar un asterisco al margen, o un color distinto) porque ahí ocurre el nombramiento conceptual del día.

**Contenido del panel (marco pre-impreso; centro VACÍO):**

- **Título superior** (rojo **_#e03131_** 36px, centrado, FIJO): "PLAN DE LA SOLUCIÓN — HU 3: CAPTURAR"
- **Caja con la HU textual** (borde gris claro, esquina superior izquierda, FIJA):
  - Encabezado (negro 14px bold): "HU 3"
  - Texto italic 13px: "Como usuario, quiero un botón Capturar en el Pokémon que busqué, para sumarlo a mi Pokédex cuando yo decida."
- **Caja con los 3 criterios** (borde gris claro, esquina superior derecha, FIJA):
  - Encabezado (negro 14px bold): "CRITERIOS"
  - 3 bullets (negro 12px):
    1. La tarjeta del Pokémon buscado tiene un botón "Capturar".
    2. Al pulsar Capturar, el Pokémon se agrega a la rejilla (no reemplaza a los demás).
    3. Si el Pokémon ya estaba en la Pokédex, no se duplica.
- **ÁREA CENTRAL (~75%) VACÍA** — 8 líneas guía tenues numeradas 1–8 (opcional, ver Notas).
- **Aside al margen izquierdo, a la altura aproximada del paso 6** (gris muy tenue 11px italic, FIJO): "*Acá aparece el concepto 'estado' — anotarlo aparte."
- **Pie del panel** (gris pequeño 12px italic, centrado, FIJO): "Cada paso se responde leyendo la HU literalmente y sus criterios — no son decisiones abiertas."

**Anchor pedagógico:** el aside al margen es un "pre-aviso" para Eric — recordarle que en el paso 6 hay un momento conceptual importante (el nombramiento de "estado"). Es la única diferencia respecto a Panel 2.2; el resto de la estructura es idéntica.

**Notas para Eric:** mismo formato que 2.2. El aside del paso 6 lo podés tapar o ignorar si te resulta distracción; está ahí solo como recordatorio visual del nombramiento conceptual. Si en su lugar querés que excalidraw-system marque la fila 6 con un color de fondo muy tenue (amarillo claro, p.ej.) para destacarla, eso también funciona.

---

## Momento 4: Explorar la respuesta — las estadísticas

> **Estado:** Borrador
> **Paneles del Momento:** 2 (Panel 4.1 = la API trae mucho más que lo que usamos, con el árbol del JSON y el zoom a `data.stats`; Panel 4.2 = marco LIBRE para los 7 pasos del plan socrático HU 4).

---

### Panel 4.1 — La API trae más de lo que usamos (JSON gordo → solo stats)

- **Trigger en el guion:** `**EN PANTALLA: NAVEGADOR — abrir **_https://pokeapi.co/api/v2/pokemon/charizard_** y ver el JSON completo. (Apoyo: EXCALIDRAW — el árbol del JSON con todas las ramas, resaltando **_stats[].stat.name_** / **_stats[].base_stat_**.)**`
- **Tipo:** Hand-drawn (nativo en Excalidraw) (precisión geométrica — árbol jerárquico con muchos hijos atenuados + uno destacado + zoom a anidación de 2 niveles + flecha a la forma aplanada).
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3 — árbol JSON a la izquierda, zoom a `data.stats[0]` a la derecha, forma aplanada al pie con la línea del `.map`).
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de sintaxis — descomposición de la estructura anidada con flechas) + Patrón 8 (Bloque comparativo con leyenda — el JSON anidado vs la forma limpia).
- **Concepto pedagógico que visualiza:** visualizar que la API devuelve UNA respuesta gigantesca y que nosotros nos quedamos con UNA rama (`stats`). Refuerza el rol del adaptador como filtro entre la forma de la API y la forma de la app. Conecta con la analogía cotidiana de la ficha técnica del electrodoméstico (30 datos, leés 3).

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_** 36px, centrado): "LA API TRAE MUCHO MÁS — NAVEGAR EL JSON"
- **Subtítulo** (gris oscuro 18px, centrado): "Las APIs REST devuelven la representación COMPLETA del recurso. El dev navega y extrae solo lo que necesita."
- **Sección 1 — Árbol del JSON (lado izquierdo, ~50% ancho):**
  - Encabezado (negro 18px): "JSON crudo de `/pokemon/charizard`"
  - Árbol jerárquico con indentación (monospace azul **_#1971c2_** 14px):
    - `data.name` — con **tilde verde ✓** al lado y etiqueta gris claro: "(usado desde C10)"
    - `data.sprites.front_default` — tilde verde ✓ "(usado desde C10)"
    - `data.types[ ]` — tilde verde ✓ "(usado desde C10)"
    - `data.height` — atenuado gris (sin tilde) "(ignorado)"
    - `data.weight` — atenuado gris "(ignorado)"
    - `data.abilities[ ]` — atenuado gris "(ignorado)"
    - `data.moves[ ]` — atenuado gris "(ignorado — MUY pesado)"
    - **`data.stats[ ]` — DESTACADO con borde rojo **_#e03131_**, etiqueta roja bold "LO QUE QUEREMOS HOY"**
    - `data.forms`, `data.held_items`, `data.species`, ... — atenuado gris pequeño "(... y más, todo ignorado)"
- **Sección 2 — Zoom en `data.stats[0]` (lado derecho, ~50% ancho):**
  - Encabezado (negro 18px): "Estructura de cada elemento de `data.stats`"
  - Bloque de código (monospace azul **_#1971c2_** 16px, fondo blanco con borde gris claro):
    ```js
    data.stats[0] = {
      base_stat: 78,
      effort: 0,
      stat: { name: "hp", url: "..." }
    }
    ```
  - Flecha naranja **_#f08c00_** sobre `stat: { name: "hp" }` → etiqueta (naranja 14px): "ANIDADO a 2 niveles"
  - Etiquetas con flechas (naranja **_#f08c00_** 14px):
    - `data.stats[i].base_stat` → "el número (78)"
    - `data.stats[i].stat.name` → "el nombre ('hp')"
- **Sección 3 — Forma aplanada con `.map` (al pie, ancho completo):**
  - **Flecha grande naranja** desde el JSON anidado a la forma limpia (etiqueta "ADAPTAR" en naranja 20px).
  - Lado izquierdo: forma cruda (monospace azul, fondo gris claro): `data.stats[0]` (anidado)
  - Lado derecho: forma limpia (monospace azul, fondo verde claro): `{ nombre: "hp", valor: 78 }`
  - Debajo, el código del `.map` (monospace azul **_#1971c2_** 15px, fondo blanco):
    ```js
    data.stats.map(s => ({
      nombre: s.stat.name,
      valor: s.base_stat
    }))
    ```
- **Aside lateral derecho** (caja gris pequeña, negro 13px italic): "Analogía: la ficha técnica del electrodoméstico. Vienen 30 datos. Leés solo los 2-3 que te importan."

**Anchor pedagógico:** la atenuación de los campos no usados + el destacado en `data.stats` hace **visible la decisión del dev**: "yo elijo qué pasa a mi forma limpia". Conecta con el concepto del adaptador como filtro entre la API neutral y la app específica. El zoom a la derecha y la forma aplanada al pie son la traducción visual del `.map` que escribirán en el code-along.

**Notas para Eric:** durante la demo en navegador (sub-punto 4.1 paso 2 — abrir charizard y hacer scroll por los campos), volvés al panel para mostrar que el JSON real coincide con la estructura del árbol — solo que el navegador muestra TODO y el panel atenúa lo que ignoramos. El zoom a `data.stats[0]` en la derecha conecta directo con la línea del `.map` del code-along. Si el aside de la analogía te queda chico, podés moverlo al pie (centrado) en vez del lateral.

---

### Panel 4.2 — Plan socrático HU 4: STATS (LIBRE — Hand-drawn en vivo)

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW Panel 4.2 LIBRE — el instructor escribe los 7 pasos socráticos uno por uno mientras conduce el plan (sin contenido pre-escrito, solo el marco con el título "PLAN DE LA SOLUCIÓN — HU 4: STATS"). Después: VS CODE + NAVEGADOR (Live Server) para el code-along.**`
- **Tipo:** Hand-drawn en vivo (misma estructura que Panel 2.2 y 3.2).
- **Patrón canónico de referencia:** Patrón 6.
- **Concepto pedagógico que visualiza:** igual que 2.2 y 3.2 — el plan se construye juntos. **Detalle particular de HU 4:** son 7 pasos (no 8), porque el cliffhanger del nombre inexistente NO aplica (HU 4 no se rompe a propósito — eso era de HU 2/M2). El paso 1 es "punto de partida sin pregunta", igual que los demás planes.

**Contenido del panel (marco pre-impreso; centro VACÍO):**

- **Título superior** (rojo **_#e03131_** 36px, centrado, FIJO): "PLAN DE LA SOLUCIÓN — HU 4: STATS"
- **Caja con la HU textual** (borde gris claro, esquina superior izquierda, FIJA):
  - Encabezado (negro 14px bold): "HU 4"
  - Texto italic 13px: "Como usuario, quiero ver las estadísticas (HP, ataque…) del Pokémon que busco, para decidir si lo capturo."
- **Caja con los 2 criterios** (borde gris claro, esquina superior derecha, FIJA):
  - Encabezado (negro 14px bold): "CRITERIOS"
  - 2 bullets (negro 12px):
    1. La tarjeta del Pokémon buscado muestra sus estadísticas (al menos HP, ataque, defensa).
    2. Las estadísticas salen de los datos que ya devuelve la API (no se inventan).
- **ÁREA CENTRAL (~75%) VACÍA** — 7 líneas guía tenues numeradas 1–7 (opcional).
- **Pie del panel** (gris pequeño 12px italic, centrado, FIJO): "Cada paso se responde leyendo la HU literalmente y sus criterios — no son decisiones abiertas."

**Anchor pedagógico:** misma lógica que 2.2 y 3.2. La diferencia es que son 7 pasos (no 8) — ajustar las guías numeradas si se usan.

**Notas para Eric:** ojo con la cantidad — son 7 pasos, no 8. El plan termina en "EL PROGRAMA cuelga el bloque de stats al nodo de la tarjeta" — no hay cliffhanger de "se rompe si..." porque HU 4 no tiene caso de error a propósito.

---

## Momento 5: Paginación + cierre — parámetros de consulta

> **Estado:** Borrador
> **Paneles del Momento:** 2 (Panel 5.1 = contraste ruta vs query + paginación visual; Panel 5.2 = marco LIBRE para los 8 pasos del plan socrático HU 5). **Panel 5.3 (cierre con tabla resumen)** queda PENDIENTE de decisión de Eric — ver intro de la Guía.

---

### Panel 5.1 — Parámetro de ruta vs parámetro de consulta + paginación

- **Trigger en el guion:** `**EN PANTALLA: NAVEGADOR — abrir las URLs reales para mostrar la diferencia (ver demo abajo). (Apoyo: EXCALIDRAW — dos URLs en paralelo etiquetadas RUTA y CONSULTA, con cada parte señalada; abajo, tres páginas (offset 0 / 12 / 24) y el botón "Cargar más" trayendo la siguiente.)**`
- **Tipo:** Hand-drawn (nativo en Excalidraw) (precisión geométrica — dos URLs alineadas con cada parte etiquetada + tabla comparativa + 3 páginas dibujadas con flujo de paginación).
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3 — URLs arriba, tabla en el medio, paginación al pie).
- **Patrón canónico de referencia:** Patrón 1 (Anatomía de sintaxis — descomposición de las dos URLs) + Patrón 3 (Comparativa X vs Y — tabla ruta vs query) + Patrón 6 (Timeline — las 3 páginas de paginación).
- **Concepto pedagógico que visualiza:** cerrar el contraste abierto en M2 — los dos tipos de parámetro en la URL, con sus roles distintos, y la paginación como caso de uso típico de query params. Conecta el "ruta" estructural (de M2) con el "consulta" decorativo (de M5) en una sola imagen.

**Contenido del panel (alimenta el prompt IA):**

- **Título superior** (negro **_#1e1e1e_** 36px, centrado): "PARÁMETRO DE RUTA vs PARÁMETRO DE CONSULTA"
- **Subtítulo** (gris oscuro 18px, centrado): "Los dos viven en la URL pero sirven para cosas distintas: **RUTA** dice **QUÉ recurso**; **CONSULTA** dice **CÓMO pedirlo**."
- **Sección 1 — Anatomía de las dos URLs (arriba, lado a lado):**
  - **URL izquierda — RUTA (borde rojo **_#e03131_**, ~600×280 px):**
    - Encabezado (rojo 22px): "PARÁMETRO DE RUTA — visto en M2"
    - Bloque grande de URL (monospace azul **_#1971c2_** 22px, fondo blanco):
      - `https://pokeapi.co/api/v2/pokemon/pikachu`
    - Flecha naranja **_#f08c00_** a `/pikachu` → etiqueta destacada (naranja 18px bold): "PARÁMETRO DE RUTA"
    - Caja roja al pie (negro 14px):
      - "QUÉ recurso" + "Estructural" + "Obligatorio"
  - **URL derecha — CONSULTA (borde verde **_#2f9e44_**, ~600×280 px):**
    - Encabezado (verde 22px): "PARÁMETROS DE CONSULTA — nuevo hoy"
    - Bloque grande de URL (monospace azul **_#1971c2_** 22px, fondo blanco):
      - `https://pokeapi.co/api/v2/pokemon?limit=12&offset=0`
    - Flechas naranjas **_#f08c00_** descomponiendo:
      - Flecha a `?` → etiqueta (naranja 14px): "abre los params"
      - Flecha a `limit=12` → etiqueta (naranja 14px): "cuántos por página"
      - Flecha a `&` → etiqueta (naranja 14px): "separa params"
      - Flecha a `offset=0` → etiqueta (naranja 14px): "desde qué número"
    - Caja verde al pie (negro 14px):
      - "CÓMO pedirlo" + "Después del `?`" + "Opcional" + "Filtrar / Ordenar / Buscar / Paginar"
- **Sección 2 — Tabla comparativa (centro, ancho completo):**
  - Encabezado (negro 18px): "Comparativa"
  - Tabla de 3 columnas (negro 14px, headers en bold):
    | Concepto | RUTA | CONSULTA |
    |---|---|---|
    | **Dónde va** | EN la ruta, separado con `/` | DESPUÉS del `?`, separado con `&` |
    | **Para qué** | qué recurso pido | cómo lo pido |
    | **Obligatorio** | sí (sin él, URL no sirve) | no (defaults si no se pone) |
    | **Ejemplo** | `/pokemon/pikachu` | `?limit=12&offset=0` |
- **Sección 3 — Paginación visual (al pie, ancho completo):**
  - Encabezado (negro 18px): "Paginación con `?limit` y `?offset`"
  - **3 cajas paginadas alineadas horizontalmente** (cada una ~250 px ancho):
    - **Caja 1:** Etiqueta encima "`?offset=0`" (azul 14px). Contenido: "12 Pokémon (#1–12)". Fondo azul claro.
    - **Caja 2:** Etiqueta encima "`?offset=12`" (azul 14px). Contenido: "12 Pokémon (#13–24)". Fondo azul claro.
    - **Caja 3:** Etiqueta encima "`?offset=24`" (azul 14px). Contenido: "12 Pokémon (#25–36)". Fondo azul claro.
    - **Botón grande** debajo de las cajas: "[ Cargar más ]" (estilo botón con fondo naranja **_#f08c00_** y texto blanco)
    - Flecha curva del botón hacia la rejilla principal con etiqueta (naranja 14px): "subir `offset += 12` → trae la siguiente página"
- **Aside lateral** (caja gris, negro 13px italic): "Analogía: Google paginado / scroll infinito de Instagram / lista de productos de Mercado Libre."

**Anchor pedagógico:** ver las dos URLs alineadas lado a lado hace **visible** que la sintaxis es distinta (separador `/` vs `?`) y la semántica es distinta (estructural vs opcional). La tabla comparativa consolida en 4 filas. La paginación visual al pie es la traducción visual directa del HU 5 — cuando el alumno la mire mientras escribe el código, va a entender que `offset += 12` es "pasar la página".

**Notas para Eric:** durante la demo en navegador (5.1 paso 3 — cambiar `offset=0` a `offset=12` y ver otro grupo), volvés al panel para mostrar cómo ese cambio corresponde a "pasar la página" del bloque inferior. El aside lateral con la analogía Google/Instagram baja el concepto a algo cotidiano. Si el panel queda muy alto, podés mover la sección de paginación a un panel aparte (Panel 5.1b) — pero pedagógicamente conviene tenerlas juntas porque el lab combina ambas ideas en HU 5.

---

### Panel 5.2 — Plan socrático HU 5: CARGAR MÁS (LIBRE — Hand-drawn en vivo)

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW Panel 5.2 LIBRE — el instructor escribe los 8 pasos socráticos uno por uno mientras conduce el plan (sin contenido pre-escrito, solo el marco con el título "PLAN DE LA SOLUCIÓN — HU 5: CARGAR MÁS"). Después: VS CODE + NAVEGADOR (Live Server) para el code-along.**`
- **Tipo:** Hand-drawn en vivo (misma estructura que 2.2, 3.2, 4.2).
- **Patrón canónico de referencia:** Patrón 6.
- **Concepto pedagógico que visualiza:** igual que los planes anteriores. **Detalle particular de HU 5:** los 8 pasos cubren un montón de reuso explícito (`Promise.all` de C10, `.some()` de HU 3, `render` de C10) — Eric puede ir marcando "← reusa M1/HU3/C10" al lado de cada paso reusado cuando lo escriba en vivo, para reforzar el patrón "cada clase suma una herramienta, las anteriores se reusan".

**Contenido del panel (marco pre-impreso; centro VACÍO):**

- **Título superior** (rojo **_#e03131_** 36px, centrado, FIJO): "PLAN DE LA SOLUCIÓN — HU 5: CARGAR MÁS"
- **Caja con la HU textual** (borde gris claro, esquina superior izquierda, FIJA):
  - Encabezado (negro 14px bold): "HU 5"
  - Texto italic 13px: "Como usuario, quiero un botón 'Cargar más' que traiga más Pokémon a la rejilla, para explorar la Pokédex sin escribir nombres."
- **Caja con los 3 criterios** (borde gris claro, esquina superior derecha, FIJA):
  - Encabezado (negro 14px bold): "CRITERIOS"
  - 3 bullets (negro 12px):
    1. Un botón "Cargar más" trae más Pokémon y los suma a la rejilla.
    2. Cada clic trae un grupo distinto (la siguiente página).
    3. Los Pokémon que ya estaban no se duplican.
- **ÁREA CENTRAL (~75%) VACÍA** — 8 líneas guía tenues numeradas 1–8 (opcional).
- **Aside al margen derecho, vertical** (gris muy tenue 11px italic, FIJO): "*Marcá los reusos (M1, HU3, C10) en cada paso que aplique — refuerza que NO hay conceptos nuevos hoy."
- **Pie del panel** (gris pequeño 12px italic, centrado, FIJO): "Cada paso se responde leyendo la HU literalmente y sus criterios — no son decisiones abiertas."

**Anchor pedagógico:** el aside lateral del reuso es el "pre-aviso" para Eric — recordatorio de que HU 5 es el momento más fuerte del módulo para mostrar acumulación de aprendizaje. La estructura del panel es idéntica a los planes anteriores; lo único nuevo es el aside.

**Notas para Eric:** mismo formato que 2.2/3.2/4.2. El aside del reuso es opcional — si te resulta distracción, decile a excalidraw-system que lo omita. Lo importante es que la HU + criterios queden FIJOS arriba.

---

## Notas finales para excalidraw-system

- **9 paneles Hand-drawn nativos** — todo el contenido se construye con elementos nativos de Excalidraw (rectángulos, texto, flechas, líneas, tablas, code-boxes con stroke azul). **NO se generan imágenes IA** ni capturas externas. Decisión de Eric (2026-06-23).
  - **5 paneles con contenido completo** (1.2, 1.3, 2.1, 4.1, 5.1): el `gen.js` los construye según la descripción de la sección "Contenido del panel" de cada Panel.
  - **4 paneles con marco vacío** (2.2, 3.2, 4.2, 5.2): solo el marco con título FIJO + cajas FIJAS (HU + criterios) + 7-8 líneas guía tenues numeradas. Eric escribe el contenido durante la clase en vivo.
- **Generador:** `gen.js` en la misma carpeta. Ejecutar con `node gen.js "CLASE 11.excalidraw"` (necesita Node ≥18). Si Eric quiere ajustar tamaños / colores / contenido, modifica las funciones `panel12()`, `panel13()`, `panel21()`, `panel41()`, `panel51()` o `marcoLibre()` y vuelve a correr.
- **Paleta de colores:** las 6 canónicas del §3 del SKILL de excalidraw-system. NO inventar colores.
- **Tipografía:** la jerarquía del §4 del SKILL. Código siempre monospace azul **_#1971c2_** (fontFamily 3 en Excalidraw).
- **Layout:** timeline horizontal con los 9 paneles en el orden M1→M2→M3→M4→M5, separación de 300 px entre paneles. El canvas final mide aproximadamente 14800×1316 px.
- **Validación pendiente:** este archivo está en estado **Borrador**. Eric debería abrir el `.excalidraw` en excalidraw.com, revisar cada panel, y marcar individualmente como "Validado por Eric ✓" en esta Guía cuando los apruebe.
