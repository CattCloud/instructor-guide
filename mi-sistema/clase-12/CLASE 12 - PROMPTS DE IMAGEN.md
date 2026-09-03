# Prompts de Imagen — CLASE 12: Manejo de Errores y Estados

> **Estilo canónico:** **_mi-sistema/DESARROLLO DE SLIDES.md_**.
> **Origen:** generado a partir de **_GUIA EXCALIDRAW - CLASE 12.md_** (estado: Paneles en Borrador — pendiente validación de Eric).
> **Cómo usar:**
> 1. Copiar cada prompt completo (el bloque entre las líneas `### [IMG-XX]:` y el siguiente `---`).
> 2. Pegar en la herramienta de imagen IA de elección (ChatGPT con generación de imagen, Sora, Gemini, DALL-E, Midjourney, etc.).
> 3. Descargar la imagen generada.
> 4. Abrir **_CLASE 12.excalidraw_** en excalidraw.com, arrastrar la imagen sobre el placeholder con el mismo `[IMG-XX]` ID y ajustar al rectángulo punteado.
>
> **Importante:** el bloque "Estilo visual" al final de cada prompt es INAMOVIBLE. No reescribirlo ni parafrasearlo. Si lo modificás, el estilo deja de coincidir con el resto del material visual del bootcamp.

---

## Prompts IA (3 imágenes)

---

### [IMG-01]: Flujo sin error vs Flujo con error (sin manejo)

- **Panel de origen:** Momento 1 — Panel 1.2
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón pedagógico:** Comparativa X vs Y — dos columnas verticales paralelas con código apilado y contraste visual de estado (verde / rojo / gris atenuado)
- **Usado en sub-punto:** 1.2 (¿Qué es un error en programación?)

**Prompt:**

> Infografía educativa minimalista sobre "El flujo de un programa — sin error vs con error sin manejo". Estilo diagrama técnico de libro de texto. Diseño en dos columnas paralelas verticales lado a lado, separadas por una franja vertical gris muy delgada en el centro.
>
> **Título superior centrado en negro:** "EL FLUJO DE UN PROGRAMA — SIN ERROR vs CON ERROR (SIN MANEJO)"
>
> **Subtítulo en gris oscuro debajo del título:** "Un error no atrapado MATA el script. Las líneas siguientes nunca se ejecutan."
>
> **Columna izquierda — FLUJO SIN ERROR:**
>
> - Borde de columna en verde `#2f9e44`.
> - Encabezado grande en verde con el símbolo de check al lado: "✓ FLUJO SIN ERROR".
> - Tres cajas apiladas verticalmente, fondo verde muy claro, con un check verde pequeño a la izquierda de cada caja:
>   - Caja 1 (monospace azul `#1971c2`): `console.log("paso 1");` — etiqueta a la derecha en verde: "corre".
>   - Caja 2 (monospace azul `#1971c2`): `console.log("paso 2");` — etiqueta a la derecha en verde: "corre".
>   - Caja 3 (monospace azul `#1971c2`): `console.log("paso 3");` — etiqueta a la derecha en verde: "corre".
> - Flecha vertical verde recta que conecta las 3 cajas de arriba abajo por la izquierda.
> - Etiqueta al pie de la columna en verde `#2f9e44`: "Las 3 líneas corren. La consola muestra paso 1, paso 2, paso 3."
>
> **Columna derecha — FLUJO CON ERROR SIN MANEJO:**
>
> - Borde de columna en rojo `#e03131`.
> - Encabezado grande en rojo con el símbolo de cruz al lado: "✗ FLUJO CON ERROR (SIN MANEJO)".
> - Tres cajas apiladas verticalmente:
>   - Caja 1 (fondo verde muy claro, monospace azul `#1971c2`): `console.log("paso 1");` — etiqueta verde a la derecha: "corre".
>   - Caja 2 (fondo rojo claro, borde rojo grueso, monospace en negro): `noExiste();` — un destello/rayo rojo grande al lado derecho de la caja simbolizando la explosión, y debajo de la caja una línea de texto en rojo monospace de tamaño pequeño: `ReferenceError: noExiste is not defined`.
>   - Caja 3 (fondo gris claro, opacidad 40%, monospace gris): `console.log("paso 3");` — etiqueta a la derecha en gris atenuado: "NUNCA SE EJECUTA".
> - Flecha vertical roja desde la caja 1 (paso 1) hasta la caja 2 (noExiste), que después continúa hacia arriba SALIENDO del panel por arriba, con la punta de la flecha apuntando hacia arriba y una etiqueta naranja al lado: "el error sube por el código".
> - Banner ancho al pie de la columna en rojo `#e03131` sobre fondo rojo muy claro: "El error subió hasta el tope del script y mató todo. Recargar es la única salida."
>
> **Aside inferior del panel, ancho completo, centrado, en gris oscuro:** "Esto es exactamente lo que pasó hace 2 minutos con `pikachuu` en C11."
>
> **Código de colores funcional:**
> - Verde `#2f9e44`: estado de éxito, código que corre, criterios cumplidos.
> - Rojo `#e03131`: estado de error, código que explota, advertencias.
> - Gris claro/atenuado: código que NUNCA se ejecuta por culpa del error.
> - Azul `#1971c2`: código en monospace.
> - Naranja `#f08c00`: etiqueta de proceso ("el error sube por el código").
> - Negro `#1e1e1e` y gris oscuro: textos descriptivos.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-02]: Diagrama TRY / CATCH / FINALLY — las 3 fases

- **Panel de origen:** Momento 2 — Panel 2.1
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón pedagógico:** Flujo de control (if/else extendido) — caja superior, rombo de decisión, dos ramas que convergen en una caja final
- **Usado en sub-punto:** 2.1 (`try / catch / finally` — la estructura de control para errores)

**Prompt:**

> Infografía educativa minimalista sobre "`try / catch / finally` — las 3 fases de la estructura para manejo de errores". Estilo diagrama de flujo técnico de libro de texto. Layout vertical: caja superior, rombo de decisión, dos ramas laterales, caja final centrada.
>
> **Título superior centrado en negro:** "TRY / CATCH / FINALLY — LAS 3 FASES"
>
> **Subtítulo en gris oscuro debajo del título:** "Tres palabras, una sola estructura — análoga a `if/else` pero para errores."
>
> **Caja TRY (fase 1) — arriba, centrada:**
>
> - Rectángulo con borde grueso azul `#1971c2`, fondo blanco, dimensiones aproximadas 600×150 px.
> - Encabezado grande en azul (22px): "TRY — vigila".
> - Texto descriptivo en negro (14px): "Código que podría fallar".
> - Snippet en monospace azul `#1971c2` (14px) adentro de la caja: `await buscarPokemon(nombre);`
> - Una flecha vertical negra que baja desde el centro de la caja TRY hacia el rombo de decisión.
>
> **Rombo de decisión (centro):**
>
> - Forma de diamante con borde naranja `#f08c00`, fondo blanco, dimensiones aproximadas 300×150 px.
> - Texto adentro en negro (18px, centrado): "¿hubo error?"
> - Dos flechas salen del rombo:
>   - Una flecha a la **derecha** etiquetada **"NO"** en verde `#2f9e44`, que va hacia el lado derecho del panel.
>   - Una flecha a la **izquierda** etiquetada **"SÍ"** en rojo `#e03131`, que va hacia el lado izquierdo del panel.
>
> **Caja CATCH (fase 2) — lado izquierdo, debajo del rombo:**
>
> - Rectángulo con borde grueso rojo `#e03131`, fondo blanco, dimensiones aproximadas 500×150 px.
> - Encabezado grande en rojo (22px): "CATCH — atrapa si hubo error".
> - Texto descriptivo en negro (14px): "Recibe el objeto `error`".
> - Snippet en monospace azul `#1971c2` (14px): `catch (error) { mensaje.textContent = error.message }`
> - Una flecha vertical roja que sale del fondo de la caja CATCH hacia el centro inferior del panel.
>
> **Caja FINALLY (fase 3) — centrada al pie, debajo del rombo:**
>
> - Rectángulo con borde grueso verde `#2f9e44`, fondo blanco, dimensiones aproximadas 700×150 px.
> - Encabezado grande en verde (22px): "FINALLY — siempre corre".
> - Texto descriptivo en negro (14px): "Hubo error o no, FINALLY siempre se ejecuta".
> - Snippet en monospace azul `#1971c2` (14px): `finally { spinner.classList.add("hidden") }`
> - **Dos flechas convergen en la caja FINALLY:**
>   - Una flecha verde que viene desde la derecha del rombo (camino NO ERROR) y llega al lado superior derecho de la caja FINALLY.
>   - Una flecha roja que viene desde la caja CATCH y llega al lado superior izquierdo de la caja FINALLY.
> - Una flecha negra fina sale del fondo de la caja FINALLY apuntando hacia abajo, con la etiqueta gris "el código sigue normalmente" al lado.
>
> **Columna lateral derecha — aside con resumen de fases:**
>
> - Tres bloques de texto pequeño en columna vertical, alineados a la derecha del panel:
>   - **Fase 1 (try)** en azul `#1971c2` (16px): "Pone aquí lo que puede fallar."
>   - **Fase 2 (catch)** en rojo `#e03131` (16px): "Solo corre si el try explotó."
>   - **Fase 3 (finally)** en verde `#2f9e44` (16px): "Limpieza garantizada. Es donde va el `spinner.classList.add("hidden")`."
>
> **Código de colores funcional:**
> - Azul `#1971c2`: fase TRY, código en monospace.
> - Rojo `#e03131`: fase CATCH, rama con error, advertencia.
> - Verde `#2f9e44`: fase FINALLY, rama sin error, convergencia exitosa.
> - Naranja `#f08c00`: rombo de decisión, etiquetas de proceso.
> - Negro `#1e1e1e` y gris oscuro: títulos, textos descriptivos, flechas neutras.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-03]: Propagación del error — cómo sube por la pila de llamadas

- **Panel de origen:** Momento 3 — Panel 3.5
- **Dimensiones objetivo:** 1400×900 px (ratio 14:9 — horizontal, dos pilas grandes lado a lado)
- **Patrón pedagógico:** Comparativa X vs Y con dos pilas verticales — sin manejo (izquierda, rojo) vs con manejo (derecha, verde)
- **Usado en sub-punto:** 3.5 (Propagación de errores — cómo el `throw` sube por la pila)

**Prompt:**

> Infografía educativa minimalista sobre "Propagación del error — cómo sube por la pila de llamadas". Estilo diagrama técnico de libro de texto. Layout horizontal: dos pilas verticales de cajas lado a lado, cada pila representa el mismo stack de llamadas pero con distinto manejo.
>
> **Título superior centrado en negro:** "PROPAGACIÓN DEL ERROR — CÓMO SUBE POR LA PILA DE LLAMADAS"
>
> **Subtítulo en gris oscuro debajo del título:** "Sin catch → muere el script. Con catch en algún nivel → atrapa y la app sigue."
>
> **Columna izquierda — SIN try/catch (el script muere):**
>
> - Borde de columna en rojo `#e03131`, fondo blanco, dimensiones aproximadas 600×700 px.
> - Encabezado centrado en rojo (24px): "✗ SIN try/catch — EL SCRIPT MUERE".
> - **Pila vertical de 5 cajas apiladas de ARRIBA hacia ABAJO** (la caja del fondo es donde nace el error, la del tope es el tope del script):
>   - Caja 1 (arriba) — fondo gris claro, borde gris, texto en negro: **"tope del script"**.
>   - Caja 2 — fondo gris claro, borde gris, texto en negro: **"listener del botón"**.
>   - Caja 3 — fondo gris claro, borde gris, texto en monospace azul `#1971c2`: **`mostrarBusqueda`**.
>   - Caja 4 — fondo gris claro, borde gris, texto en monospace azul `#1971c2`: **`buscarPokemon`**.
>   - Caja 5 (abajo, base) — fondo rojo claro, borde rojo grueso, texto en monospace azul `#1971c2`: **`obtenerPokemon`**, con una etiqueta pequeña debajo en rojo: "(response.json explota acá)".
> - **Flecha ROJA gruesa** que sale del lado izquierdo de la caja 5 (base) y sube atravesando TODAS las cajas hasta llegar AL TOPE del panel, saliendo del panel por arriba con la punta de flecha. La flecha tiene 4 etiquetas naranjas a su lado, una entre cada par de cajas: "sube", "sube", "sube", "llega al tope".
> - Banner ancho al tope de la columna (debajo del encabezado pero arriba de las cajas) en rojo `#e03131` sobre fondo rojo muy claro: "SCRIPT MUERE — recargar es la única salida".
>
> **Columna derecha — CON try/catch en mostrarBusqueda (la app sigue):**
>
> - Borde de columna en verde `#2f9e44`, fondo blanco, dimensiones aproximadas 600×700 px.
> - Encabezado centrado en verde (24px): "✓ CON try/catch en mostrarBusqueda — LA APP SIGUE".
> - **Pila vertical de 5 cajas** (misma estructura que la izquierda) pero con la **caja 3 (mostrarBusqueda) rodeada por un escudo verde grueso** (un rectángulo de borde verde `#2f9e44` muy grueso que envuelve esa caja) y una etiqueta encima del escudo en verde monospace: `try { } catch (error) { }`.
> - **Flecha ROJA gruesa** que sale del lado izquierdo de la caja 5 (base, `obtenerPokemon`) y sube atravesando la caja 4 (`buscarPokemon`), y **SE DETIENE chocando contra el escudo verde de la caja 3 (mostrarBusqueda)**. La flecha NO sigue subiendo más allá del escudo. Una etiqueta naranja al lado del punto de detención: "AQUÍ se atrapa".
> - Banner ancho al pie de la columna en verde `#2f9e44` sobre fondo verde muy claro: "✓ ERROR ATRAPADO — la app sigue viva".
>
> **Aside inferior central del panel, ancho completo, centrado, en gris oscuro:** "El catch NO TIENE QUE ESTAR donde nace el error. Puede estar varios niveles más arriba. Por eso `throw` en `obtenerPokemon` + `catch` en `mostrarBusqueda` FUNCIONA."
>
> **Código de colores funcional:**
> - Rojo `#e03131`: pila sin manejo, error que sube y mata, fallos de verdad.
> - Verde `#2f9e44`: pila con catch, escudo de protección, recuperación exitosa.
> - Gris claro: cajas neutras de la pila (frames de funciones intermedias sin catch propio).
> - Azul `#1971c2`: nombres de funciones en monospace.
> - Naranja `#f08c00`: etiquetas de proceso ("sube", "AQUÍ se atrapa").
> - Negro `#1e1e1e` y gris oscuro: títulos, textos descriptivos, banners de cierre.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

## Notas finales

- Los 3 prompts generan los paneles **1.2**, **2.1** y **3.5** de la Guía Excalidraw.
- Los otros 11 paneles (1.3, 1.4, 2.5, 3.2, 3.4, 3.6, 4.1, 4.2, 5.1, 5.2, 6.1) son **hand-drawn nativos** y se generan con **_mi-sistema/clase-12/gen.js_**.
- Una vez que tengas las 3 imágenes:
  1. Abrir **_CLASE 12.excalidraw_** en https://excalidraw.com.
  2. Localizar los rectángulos punteados con los IDs `[IMG-01]`, `[IMG-02]`, `[IMG-03]`.
  3. Arrastrar cada imagen al rectángulo correspondiente y ajustar al marco.
  4. Guardar como `CLASE 12.excalidraw`.
