# Prompts de Imagen — CLASE 14: Interacción y Datos Derivados

> **Estilo canónico:** **_mi-sistema/DESARROLLO DE SLIDES.md_**.
> **Origen:** generado a partir de **_GUIA EXCALIDRAW - CLASE 14.md_** (paneles en Borrador).
> **Cómo usar:** copiar cada prompt → pegarlo en la herramienta de imagen IA → descargar → abrir **_CLASE 14.excalidraw_** en excalidraw.com y arrastrar la imagen sobre el placeholder con el mismo `[IMG-XX]`.
> **Ambas imágenes son CONCEPTUALES y GENERALES** — no usan el proyecto de plantillas.
> **El bloque "Estilo visual" al final de cada prompt es INAMOVIBLE.**

---

### [IMG-01]: Delegación de eventos — la propagación (bubbling)

- **Panel de origen:** Momento 1 — Panel 1.3
- **Dimensiones objetivo:** 1000×1000 px (cuadrado — árbol DOM vertical)
- **Usado en sub-punto:** 1.3 (Delegación de eventos, cómo se propaga un evento)

**Prompt:**

> Infografía educativa minimalista sobre "Delegación de eventos: el clic burbujea hacia arriba por el árbol del DOM". Estilo diagrama técnico de libro de texto. Concepto general del DOM, sin ninguna app concreta.
>
> **Título superior centrado en negro:** "DELEGACIÓN DE EVENTOS — el clic 'burbujea' hacia arriba"
>
> **Subtítulo en gris oscuro:** "Un solo listener en el padre atiende los clics de todos los hijos."
>
> **Centro — un árbol DOM vertical de cajas anidadas** (una dentro de la otra, o apiladas de arriba a abajo con etiquetas de anidación):
> - Caja exterior/superior: **`<ul>`** (borde verde `#2f9e44`), con un pequeño **ícono de oído/oreja** al costado y la etiqueta en verde: "1 listener AQUÍ escucha a todos".
> - Caja intermedia: **`<li>`** (borde gris).
> - Caja interior/inferior: **`<button>`** (borde azul `#1971c2`), con un **símbolo de clic** (una manito o un destello) sobre él y la etiqueta en azul: "aquí se hizo el clic".
> - Una **flecha naranja `#f08c00` gruesa y curva** que SUBE desde el `<button>`, atraviesa el `<li>` y llega al `<ul>`, con la etiqueta a su lado: "el evento sube (bubbling)".
>
> **Aside inferior centrado en gris oscuro:** "Actuamos en el hijo (el button), pero escuchamos en el padre (el ul). Por eso un solo listener basta — y sobrevive aunque los hijos se recreen."
>
> **Código de colores funcional:**
> - Verde `#2f9e44`: el contenedor padre y su listener (lo que sobrevive).
> - Azul `#1971c2`: el elemento hijo donde se hizo el clic.
> - Naranja `#f08c00`: la flecha de propagación (el bubbling).
> - Negro `#1e1e1e` y gris oscuro: títulos y textos.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-02]: Inmutabilidad — mutar vs no-mutar

- **Panel de origen:** Momento 2 — Panel 2.3-A
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3 — dos columnas)
- **Usado en sub-punto:** 2.3 (Inmutabilidad — qué es y por qué)

**Prompt:**

> Infografía educativa minimalista sobre "El principio de inmutabilidad: crear una versión nueva en vez de modificar el original". Estilo diagrama técnico de libro de texto. Dos columnas paralelas separadas por una franja gris fina. Concepto general, sin ninguna app concreta.
>
> **Título superior centrado en negro:** "PRINCIPIO DE INMUTABILIDAD — nueva versión, no modificar el original"
>
> **Columna izquierda — MUTAR (rojo `#e03131`):**
> - Encabezado en rojo con una cruz: "✗ MUTAR".
> - Una caja/objeto original que se **tacha y reescribe encima** (con marcas de tachado, se ve "sucio").
> - Debajo, en monospace azul `#1971c2`: `obj.titulo = "nuevo";`  y  `arr.push(x);`
> - Etiqueta al pie en rojo: "Modifica el original. Imposible saber qué cambió respecto a antes."
>
> **Columna derecha — NO MUTAR (verde `#2f9e44`):**
> - Encabezado en verde con un check: "✓ NO MUTAR".
> - El objeto **original intacto** a un lado, y una **copia NUEVA** al otro con el cambio aplicado (una flecha del original a la copia).
> - Debajo, en monospace azul `#1971c2`: `{ ...obj, titulo: "nuevo" }`  y  `[...arr, x]`
> - Etiqueta al pie en verde: "Se crea una versión nueva. El original queda intacto."
>
> **Aside inferior centrado en gris oscuro:** "El estado se vuelve predecible: cada cambio es una versión nueva y comparable con la anterior."
>
> **Código de colores funcional:**
> - Rojo `#e03131`: mutar (modificar el original).
> - Verde `#2f9e44`: no mutar (versión nueva, original intacto).
> - Azul `#1971c2`: código en monospace.
> - Negro `#1e1e1e` y gris oscuro: títulos y textos.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

## Notas finales

- Los 2 prompts generan los paneles **1.3 [IMG-01]** y **2.3-A [IMG-02]**.
- Los otros 2 paneles (2.3-B tabla ¿muta o no muta?, 5.4 mapa del día) son **nativos** y salen de **_gen.js_**.
- Con las imágenes: abrir `CLASE 14.excalidraw`, localizar los rectángulos punteados `[IMG-01]` / `[IMG-02]`, arrastrar cada imagen a su marco.
