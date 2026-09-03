# Prompts de Imagen — CLASE 13: Modelado de Datos y Manipulación de Texto

> **Estilo canónico:** **_mi-sistema/DESARROLLO DE SLIDES.md_**.
> **Origen:** generado a partir de **_GUIA EXCALIDRAW - CLASE 13.md_** (paneles en Borrador — pendiente validación de Eric).
> **Cómo usar:**
> 1. Copiar cada prompt completo (el bloque entre `### [IMG-XX]:` y el siguiente `---`).
> 2. Pegarlo en la herramienta de imagen IA de elección (ChatGPT/DALL-E, Gemini, Sora, etc.).
> 3. Descargar la imagen.
> 4. Abrir **_CLASE 13.excalidraw_** en excalidraw.com y arrastrar cada imagen sobre el placeholder con el mismo `[IMG-XX]` ID (los 3 rectángulos punteados de 1.4).
>
> **Las tres imágenes son CONCEPTUALES y GENERALES** — NO usan el proyecto de plantillas (decisión de Eric).
> **Importante:** el bloque "Estilo visual" al final de cada prompt es INAMOVIBLE. No reescribirlo ni parafrasearlo.

---

## Prompts IA (3 imágenes — todas en el Momento 1, sub-punto 1.4)

---

### [IMG-01]: ¿Qué es el ESTADO?

- **Panel de origen:** Momento 1 — Panel 1.4-A
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3 — horizontal: estado a la izquierda, pantalla a la derecha)
- **Patrón pedagógico:** Flujo origen → reflejo (una caja de datos que se proyecta en una pantalla)
- **Usado en sub-punto:** 1.4 (El estado central — qué es)

**Prompt:**

> Infografía educativa minimalista sobre "Qué es el estado de una aplicación". Estilo diagrama técnico de libro de texto. Layout horizontal: a la izquierda una caja de datos, una flecha al centro, y a la derecha la pantalla de un dispositivo. Concepto general, sin referirse a ninguna app concreta.
>
> **Título superior centrado en negro:** "EL ESTADO — la fuente de verdad de la app"
>
> **Subtítulo en gris oscuro:** "Los datos actuales de la app. La pantalla se deriva de ellos."
>
> **Lado izquierdo — la caja del estado:**
> - Un rectángulo grande con borde azul `#1971c2`, fondo blanco, etiquetado arriba en monospace azul: `state`.
> - Adentro, 3 o 4 líneas genéricas de datos abstractos (sin nombres reales), en monospace gris, por ejemplo: `dato: ...`, `lista: [ ... ]`, `activo: true`.
> - Debajo de la caja, etiqueta en negro: "los datos actuales de la app".
>
> **Centro — la flecha:**
> - Una flecha gruesa horizontal naranja `#f08c00` que va de la caja `state` hacia la pantalla de la derecha, con la etiqueta en naranja encima: `render()`.
>
> **Lado derecho — la pantalla:**
> - El contorno simple de la pantalla de un dispositivo (monitor o celular), borde verde `#2f9e44`, fondo blanco, mostrando adentro una lista de elementos genéricos (rectángulos/filas) que representan los mismos datos de la caja.
> - Debajo, etiqueta en verde: "lo que ve el usuario".
>
> **Tres etiquetas de las ideas clave** (en una franja inferior, cada una con un punto de color):
> - Punto azul — "Es la fuente de verdad."
> - Punto naranja — "Se comparte entre las partes de la app."
> - Punto verde — "Cambia con cada acción del usuario."
>
> **Aside inferior centrado en gris oscuro:** "Si un dato no está en el estado, no existe en la pantalla."
>
> **Código de colores funcional:**
> - Azul `#1971c2`: la caja del estado y los datos en monospace.
> - Naranja `#f08c00`: la flecha `render()`, el flujo de estado a pantalla.
> - Verde `#2f9e44`: la pantalla, lo que ve el usuario.
> - Negro `#1e1e1e` y gris oscuro: títulos y textos descriptivos.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-02]: Tipos de estado — GLOBAL vs LOCAL

- **Panel de origen:** Momento 1 — Panel 1.4-B
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3 — dos columnas)
- **Patrón pedagógico:** Comparativa X vs Y (dos columnas paralelas)
- **Usado en sub-punto:** 1.4 (tipos de estado — global vs local)

**Prompt:**

> Infografía educativa minimalista sobre "Tipos de estado: global vs local". Estilo diagrama técnico de libro de texto. Diseño en dos columnas paralelas verticales separadas por una franja gris fina. Concepto general, ejemplos de cualquier app (sin referirse a una app concreta).
>
> **Título superior centrado en negro:** "TIPOS DE ESTADO"
>
> **Subtítulo en gris oscuro:** "Según en cuántas partes de la app se usa el dato."
>
> **Columna izquierda — GLOBAL:**
> - Borde de columna verde `#2f9e44`, fondo blanco.
> - Encabezado grande en verde: "GLOBAL".
> - Un ícono simple de "app completa" (el contorno de una ventana de app con varias secciones marcadas).
> - Tres ejemplos genéricos en cajas pequeñas, texto en negro:
>   - "usuario logueado"
>   - "tema claro / oscuro"
>   - "carrito de compras"
> - Etiqueta al pie en verde: "Lo usa TODA la app (varias pantallas)."
>
> **Columna derecha — LOCAL:**
> - Borde de columna azul `#1971c2`, fondo blanco.
> - Encabezado grande en azul: "LOCAL".
> - Un ícono simple de "un solo componente" (un recuadro pequeño resaltado dentro de una ventana atenuada).
> - Dos ejemplos genéricos en cajas pequeñas, texto en negro:
>   - "si un menú está abierto o cerrado"
>   - "el texto que se escribe en un buscador"
> - Etiqueta al pie en azul: "Solo le importa a UNA parte."
>
> **Aside inferior centrado en gris oscuro:** "Mismo principio en ambos: un lugar central que es la verdad. Cambia el alcance."
>
> **Código de colores funcional:**
> - Verde `#2f9e44`: estado global, lo compartido por toda la app.
> - Azul `#1971c2`: estado local, acotado a una parte.
> - Negro `#1e1e1e` y gris oscuro: títulos y textos descriptivos.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-03]: ¿Qué es CRUD?

- **Panel de origen:** Momento 1 — Panel 1.4-C
- **Dimensiones objetivo:** 1000×1000 px (cuadrado — cuadrante 2×2)
- **Patrón pedagógico:** Cuadrante 2×2 con un núcleo central
- **Usado en sub-punto:** 1.4 (nombrar CRUD)

**Prompt:**

> Infografía educativa minimalista sobre "CRUD — las 4 operaciones sobre los datos". Estilo diagrama técnico de libro de texto. Layout de cuadrante 2×2 con una caja central de la que salen las 4 operaciones. Concepto general, cualquier app que maneja datos.
>
> **Título superior centrado en negro:** "CRUD — las 4 operaciones sobre los datos"
>
> **Caja central:** un rectángulo pequeño con borde azul `#1971c2`, etiquetado en monospace azul: `state` (los datos), del que salen 4 flechas finas grises hacia las 4 celdas del cuadrante.
>
> **Cuadrante 2×2** (cuatro celdas alrededor del centro), cada celda con una letra grande, el verbo en español y en inglés, y un ícono simple:
> - **C — Crear** (Create): ícono de un "+" / agregar. Celda con borde y fondo verde muy claro `#2f9e44`. Etiqueta extra abajo: "HOY".
> - **R — Leer** (Read): ícono de un ojo / lista visible. Celda con borde y fondo verde muy claro `#2f9e44`. Etiqueta extra abajo: "HOY".
> - **U — Actualizar** (Update): ícono de un lápiz / editar. Celda en gris claro atenuada. Etiqueta extra abajo: "después".
> - **D — Borrar** (Delete): ícono de un tacho de basura. Celda en gris claro atenuada. Etiqueta extra abajo: "después".
>
> **Aside inferior centrado en gris oscuro:** "Toda app que maneja datos hace estas 4 operaciones, y todas pasan por el estado."
>
> **Código de colores funcional:**
> - Verde `#2f9e44`: las operaciones que se construyen primero (Crear y Leer).
> - Gris claro atenuado: las operaciones que llegan después (Actualizar y Borrar).
> - Azul `#1971c2`: la caja central `state`.
> - Negro `#1e1e1e` y gris oscuro: título, letras CRUD y textos descriptivos.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

## Notas finales

- Los 3 prompts generan los paneles **1.4-A**, **1.4-B** y **1.4-C** de la Guía Excalidraw.
- Los otros 5 paneles (1.5, 2, 3, 3.4, 4.2) son **nativos** (Panel 3 tabla) o **LIBRE** (los 4 marcos de HU) y se generan con **_mi-sistema/clase-13/gen.js_**.
- Una vez que tengas las 3 imágenes:
  1. Abrir **_CLASE 13.excalidraw_** en https://excalidraw.com.
  2. Localizar los rectángulos punteados con los IDs `[IMG-01]`, `[IMG-02]`, `[IMG-03]` (los tres de 1.4).
  3. Arrastrar cada imagen al rectángulo correspondiente y ajustar al marco.
  4. Guardar como `CLASE 13.excalidraw`.
