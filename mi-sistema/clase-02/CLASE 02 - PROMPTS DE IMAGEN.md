# Prompts de Imagen — CLASE 02: CSS Layout con Flexbox

> **Estilo canónico:** **_mi-sistema/DESARROLLO DE SLIDES.md_**.
> **Origen:** generado a partir de **_GUIA EXCALIDRAW - CLASE 02.md_** (estado: Paneles en Borrador — pendiente validación de Eric).
> **Cómo usar:**
> 1. Copiar cada prompt completo (el bloque entre las líneas `### [IMG-XX]:` y el siguiente `---`).
> 2. Pegar en la herramienta de imagen IA de elección (ChatGPT con generación de imagen, Sora, Gemini, DALL-E, Midjourney, etc.).
> 3. Descargar la imagen generada.
> 4. Abrir **_CLASE 02.excalidraw_** en excalidraw.com (cuando esté generado), arrastrar la imagen sobre el placeholder con el mismo `[IMG-XX]` ID y ajustar al rectángulo punteado.
>
> **Importante:** el bloque "Estilo visual" al final de cada prompt es INAMOVIBLE. No reescribirlo ni parafrasearlo. Si lo modificás, el estilo deja de coincidir con el resto del material visual del bootcamp.

---

## Prompts IA (6 imágenes)

---

### [IMG-01]: box-sizing — content-box vs border-box

- **Panel de origen:** Momento 2 — Panel 2.1
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón pedagógico:** Comparativa X vs Y (dos columnas paralelas)
- **Usado en sub-punto:** 2.1 (Reset universal y box-sizing)

**Prompt:**

> Infografía educativa minimalista sobre "box-sizing en CSS: content-box vs border-box". Estilo diagrama técnico de libro de texto. Diseño en dos columnas paralelas separadas solo por proximidad espacial (sin línea divisoria central).
>
> **Título superior centrado en negro:** "BOX-SIZING: CONTENT-BOX vs BORDER-BOX"
>
> **Subtítulo en gris oscuro debajo del título:** "Mismo CSS declarado, dos formas distintas de calcular el ancho real."
>
> **Columna izquierda — CONTENT-BOX (default del navegador):**
>
> - Encabezado en rojo: "CONTENT-BOX (default)"
> - Bloque de código en tipografía monospace, azul, con borde gris claro:
>   ```
>   width: 200px;
>   padding: 20px;
>   border: 5px solid;
>   ```
> - Diagrama de la caja debajo del código:
>   - Rectángulo exterior con borde rojo grueso — representa el ancho REAL del elemento.
>   - Rectángulo intermedio con relleno suave naranja claro — representa el padding.
>   - Rectángulo interior con relleno gris muy claro — representa el espacio del contenido de 200px.
>   - Anotaciones laterales con líneas/llaves indicando: "borde 5px", "padding 20px", "contenido 200px".
> - Fórmula visible debajo del diagrama en monospace:
>   ```
>   Ancho real = 200 + 20 + 20 + 5 + 5 = 250 px
>   (contenido + padding L+R + border L+R)
>   ```
> - Etiqueta de cierre en rojo: "El padding y el border SE SUMAN por fuera"
>
> **Columna derecha — BORDER-BOX:**
>
> - Encabezado en verde: "BORDER-BOX (lo que usamos)"
> - Bloque de código en tipografía monospace, azul, con borde gris claro:
>   ```
>   width: 200px;
>   padding: 20px;
>   border: 5px solid;
>   box-sizing: border-box;
>   ```
> - Diagrama de la caja debajo del código (del MISMO tamaño exterior que el de content-box pero etiquetado distinto):
>   - Rectángulo exterior con borde verde grueso — representa el ancho REAL del elemento, 200px exactos.
>   - Rectángulo intermedio con relleno suave verde claro — padding adentro del exterior.
>   - Rectángulo interior con relleno gris muy claro — contenido más pequeño que el de content-box.
>   - Anotaciones laterales con líneas/llaves indicando: "borde 5px (adentro)", "padding 20px (adentro)", "contenido 150px (lo que sobra)".
> - Fórmula visible debajo del diagrama en monospace:
>   ```
>   Ancho real = 200 px (declarado)
>   Contenido interno = 200 − 20 − 20 − 5 − 5 = 150 px
>   ```
> - Etiqueta de cierre en verde: "El padding y el border SE INCLUYEN por dentro"
>
> **Nota inferior al ancho completo, en negro, debajo de ambas columnas:** "Por eso el reset universal usa box-sizing: border-box: lo que declaras es lo que ocupa en pantalla."
>
> **Código de colores funcional:**
> - Bloques de código y sintaxis: azul.
> - Lado content-box (default no deseado): rojo para el borde y la etiqueta.
> - Lado border-box (el que se usa): verde para el borde y la etiqueta.
> - Padding ilustrado: naranja claro en content-box, verde claro en border-box.
> - Contenido ilustrado: gris muy claro.
> - Textos descriptivos y fórmulas: negro y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-02]: Los 4 verbos esenciales de Flexbox

- **Panel de origen:** Momento 2 — Panel 2.3
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón pedagógico:** Anatomía de sintaxis (código central con flechas a etiquetas laterales)
- **Usado en sub-punto:** 2.2 (Modelo Flexbox + 4 verbos aplicados al nav)

**Prompt:**

> Infografía educativa minimalista sobre "Las 4 propiedades esenciales de Flexbox aplicadas a un nav". Estilo diagrama técnico de libro de texto. Diseño en una columna central: bloque de código grande arriba, flechas saliendo de cada propiedad hacia etiquetas descriptivas a la derecha.
>
> **Título superior centrado en negro:** "LOS 4 VERBOS ESENCIALES DE FLEXBOX"
>
> **Subtítulo en gris oscuro debajo del título:** "Las únicas 4 propiedades que vas a usar hoy en cada code-along."
>
> **Bloque de código central en tipografía monospace grande, fondo blanco con borde gris claro:**
>
> ```
> header nav {
>   display: flex;
>   gap: 1rem;
>   justify-content: space-between;
>   align-items: center;
> }
> ```
>
> **Cuatro flechas, cada una de un color distinto, saliendo del término correspondiente del código hacia una etiqueta descriptiva a la derecha:**
>
> - Flecha azul desde `display: flex` → etiqueta "Activa el modelo en el contenedor. Sin esto, gap y justify-content no funcionan."
> - Flecha naranja desde `gap: 1rem` → etiqueta "Separa los ítems entre sí. Reemplaza el viejo margin en hijos."
> - Flecha verde desde `justify-content: space-between` → etiqueta "Distribuye sobre el MAIN AXIS (horizontal por default). Otros valores: flex-start, center, space-around."
> - Flecha roja desde `align-items: center` → etiqueta "Alinea sobre el CROSS AXIS (perpendicular). Otros valores: flex-start, flex-end, stretch."
>
> **Recordatorio inferior, en negro debajo del bloque de código:** "Las 4 propiedades viven en el CONTENEDOR, no en los ítems. Los hijos heredan el comportamiento del padre."
>
> **Código de colores funcional:**
> - Bloque de código central: azul para la sintaxis.
> - Flecha y etiqueta de display: flex: azul.
> - Flecha y etiqueta de gap: naranja.
> - Flecha y etiqueta de justify-content: verde.
> - Flecha y etiqueta de align-items: rojo.
> - Texto descriptivo de las etiquetas: negro y gris oscuro.
> - Las palabras MAIN AXIS y CROSS AXIS dentro de las etiquetas resaltadas en mayúsculas.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-03]: flex-grow — el ítem que se estira

- **Panel de origen:** Momento 3 — Panel 3.1
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón pedagógico:** Caja de definición + comparativa visual antes/después
- **Usado en sub-punto:** 3.1 (flex-grow en el logo del nav)

**Prompt:**

> Infografía educativa minimalista sobre "flex-grow: el ítem que absorbe el espacio sobrante". Estilo diagrama técnico de libro de texto. Diseño vertical: título arriba, regla central, diagramas antes/después abajo.
>
> **Título superior centrado en negro:** "FLEX-GROW: EL ÍTEM QUE SE ESTIRA"
>
> **Definición debajo del título, en negro:** "Propiedad del ÍTEM. Define cuánto del espacio sobrante absorbe ese ítem."
>
> **Bloque de regla centrado en un recuadro con borde naranja:**
>
> - "Default: flex-grow: 0 (no crece)"
> - "Si solo UN ítem tiene flex-grow: 1 → absorbe TODO el espacio libre"
> - "Si DOS ítems tienen flex-grow: 1 → se reparten el espacio en partes iguales"
>
> **Diagrama central — comparativa de un nav con 4 enlaces, en dos estados apilados verticalmente:**
>
> **Estado 1 — Sin flex-grow (default):**
>
> - Encabezado pequeño en gris oscuro: "Sin flex-grow — los 4 enlaces al mismo nivel:"
> - Rectángulo contenedor con borde gris claro: 4 sub-rectángulos del MISMO tamaño etiquetados "Mi Producto" (logo), "Inicio", "Producto", "Contacto", distribuidos con espacio uniforme entre ellos (space-between).
>
> **Estado 2 — Con flex-grow: 1 en el logo:**
>
> - Encabezado pequeño en gris oscuro: "Con flex-grow: 1 solo en .logo — el logo empuja al menú:"
> - Rectángulo contenedor con borde gris claro: mismo ancho que arriba. El primer rectángulo (logo "Mi Producto") es ANCHO — ocupa más de la mitad del contenedor. Los otros tres ("Inicio", "Producto", "Contacto") quedan apretados al borde derecho, todos pequeños.
> - Flecha curva en naranja apuntando al logo expandido con la anotación: "flex-grow: 1 → absorbe todo el espacio libre"
>
> **Bloque CSS de referencia debajo del diagrama, en monospace azul:**
>
> ```
> header nav .logo {
>   flex-grow: 1;
> }
> ```
>
> **Nota inferior en negro:** "Patrón estándar de navbars en producción: GitHub, Notion, Spotify. Logo a la izquierda, menú a la derecha — siempre con flex-grow en el logo."
>
> **Código de colores funcional:**
> - Recuadro de regla y flecha del logo expandido: naranja.
> - Bloque de código CSS: azul.
> - Logo expandido (Estado 2): destacado con borde naranja más visible que los otros rectángulos.
> - Rectángulos del nav: borde gris claro, sin relleno.
> - Textos: negro y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-04]: flex-wrap — nowrap vs wrap

- **Panel de origen:** Momento 3 — Panel 3.2
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón pedagógico:** Caja de definición + comparativa visual de dos estados
- **Usado en sub-punto:** 3.2 (flex-wrap concepto)

**Prompt:**

> Infografía educativa minimalista sobre "flex-wrap: ¿los ítems pueden bajar a una nueva línea?". Estilo diagrama técnico de libro de texto. Diseño vertical: título arriba, valores en bloque, comparativa de dos contenedores idénticos lado a lado.
>
> **Título superior centrado en negro:** "FLEX-WRAP: ¿LOS ÍTEMS PUEDEN BAJAR A LÍNEA NUEVA?"
>
> **Definición debajo del título, en negro:** "Propiedad del CONTENEDOR. Decide si los ítems se acomodan en una sola línea o saltan a una nueva cuando no caben."
>
> **Bloque de valores centrado en un recuadro con borde naranja:**
>
> - "nowrap (default) → una sola línea, los ítems se aplastan si no caben"
> - "wrap → los ítems que no caben bajan a una nueva línea"
> - "wrap-reverse → igual que wrap, en dirección inversa (raro)"
>
> **Diagrama central — comparativa de dos contenedores idénticos lado a lado:**
>
> **Estado A — flex-wrap: nowrap (default):**
>
> - Encabezado pequeño en rojo: "Sin flex-wrap — los 5 ítems aplastados en una línea:"
> - Contenedor rectangular angosto con borde gris claro. Adentro 5 sub-rectángulos angostos comprimidos en una sola fila, casi tocándose, mostrando que el contenido se aplasta.
> - Etiqueta lateral en gris oscuro debajo del contenedor: "Los ítems pierden ancho mínimo, el contenido se aplasta."
>
> **Estado B — flex-wrap: wrap:**
>
> - Encabezado pequeño en verde: "Con flex-wrap: wrap — los que no caben bajan:"
> - Contenedor rectangular angosto del MISMO ancho que el de la izquierda, con borde gris claro. Adentro 3 sub-rectángulos en la primera fila (a su tamaño cómodo), 2 sub-rectángulos en la segunda fila.
> - Etiqueta lateral en gris oscuro debajo del contenedor: "Cada ítem mantiene su tamaño; la fila se reorganiza sola."
>
> **Bloque CSS de referencia debajo de los dos estados, en monospace azul:**
>
> ```
> .cards {
>   display: flex;
>   flex-wrap: wrap;
> }
> ```
>
> **Nota inferior en negro:** "Por default es nowrap. Para responsividad, casi siempre lo cambias a wrap."
>
> **Código de colores funcional:**
> - Recuadro de valores: naranja.
> - Encabezado del Estado A (nowrap): rojo.
> - Encabezado del Estado B (wrap): verde.
> - Sub-rectángulos del Estado A: borde rojo claro, mostrando compresión.
> - Sub-rectángulos del Estado B: borde verde claro, mostrando acomodo cómodo.
> - Bloque de código CSS: azul.
> - Textos descriptivos: negro y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-05]: flex-basis — el tamaño base del ítem

- **Panel de origen:** Momento 3 — Panel 3.3
- **Dimensiones objetivo:** 1200×900 px (ratio 4:3)
- **Patrón pedagógico:** Caja de definición + secuencia visual del mismo CSS en 3 anchos de contenedor
- **Usado en sub-punto:** 3.3 (flex-basis concepto)

**Prompt:**

> Infografía educativa minimalista sobre "flex-basis: el tamaño base del ítem en Flexbox". Estilo diagrama técnico de libro de texto. Diseño vertical: título arriba, regla central, 3 contenedores apilados verticalmente mostrando el mismo CSS produciendo 3 layouts distintos según el ancho del contenedor.
>
> **Título superior centrado en negro:** "FLEX-BASIS: EL TAMAÑO BASE DEL ÍTEM"
>
> **Definición debajo del título, en negro:** "Propiedad del ÍTEM. Define el tamaño inicial del ítem ANTES de que flex-grow lo estire o flex-wrap lo mueva de línea."
>
> **Bloque de regla centrado en un recuadro con borde verde:**
>
> - "Funciona como width dentro del flex container."
> - "Ejemplo: flex-basis: 280px → el ítem arranca midiendo 280px."
> - "Si el contenedor no tiene espacio para todos los ítems a su flex-basis, flex-wrap decide qué hacer."
>
> **Diagrama central — el mismo CSS en 3 anchos de contenedor, apilados verticalmente:**
>
> **Estado A — Contenedor de 900px:**
>
> - Rectángulo contenedor ancho con borde gris claro, etiquetado arriba "900px".
> - Adentro: 3 ítems de relleno verde, cada uno con label "flex-basis: 280px", equiespaciados en una sola fila.
> - Cálculo visible debajo en monospace: "3 × 280px = 840px + gaps → CABEN los 3 en una fila."
>
> **Estado B — Contenedor de 600px:**
>
> - Rectángulo contenedor medio con borde gris claro, etiquetado arriba "600px".
> - Adentro: 2 ítems verdes de 280px en la primera fila; 1 ítem verde estirado al ancho completo en la segunda fila.
> - Cálculo visible debajo en monospace: "2 × 280px = 560px + gap → caben 2; el tercero baja por flex-wrap."
>
> **Estado C — Contenedor de 320px:**
>
> - Rectángulo contenedor angosto con borde gris claro, etiquetado arriba "320px".
> - Adentro: 3 ítems verdes apilados verticalmente, cada uno al ancho del contenedor.
> - Cálculo visible debajo en monospace: "1 × 280px = 280px → cabe solo 1 por fila."
>
> **Bloque CSS de referencia debajo de los 3 estados, en monospace azul:**
>
> ```
> .card {
>   flex-basis: 280px;
> }
> ```
>
> **Nota inferior en negro:** "flex-basis marca el tamaño deseado. flex-wrap decide si los que no caben bajan. flex-grow estira los que quedan."
>
> **Código de colores funcional:**
> - Recuadro de regla: verde.
> - Ítems (cajas adentro de los contenedores): verde con relleno suave.
> - Etiquetas de ancho de los contenedores (900px, 600px, 320px): negro grande arriba de cada contenedor.
> - Cálculos numéricos: monospace negro.
> - Bloque de código CSS: azul.
> - Textos descriptivos: negro y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

### [IMG-06]: @media (min-width) — anatomía + 3 breakpoints

- **Panel de origen:** Momento 4 — Panel 4.1
- **Dimensiones objetivo:** 1400×1050 px (ratio 4:3)
- **Patrón pedagógico:** Anatomía de sintaxis + secuencia visual de 3 dispositivos
- **Usado en sub-punto:** 4.2 (Media queries con breakpoints 640px y 1024px)

**Prompt:**

> Infografía educativa minimalista sobre "Media queries mobile-first: @media (min-width)". Estilo diagrama técnico de libro de texto. Diseño en dos columnas: izquierda anatomía de la sintaxis CSS, derecha secuencia visual de 3 dispositivos (móvil, tablet, escritorio).
>
> **Título superior al ancho completo, en negro:** "MEDIA QUERIES MOBILE-FIRST: @MEDIA (MIN-WIDTH)"
>
> **Subtítulo debajo en gris oscuro:** "CSS condicional: estos estilos aplican solo cuando la pantalla cumple la condición."
>
> **Columna izquierda — Anatomía de la sintaxis:**
>
> - Bloque de código central en monospace, azul, con borde gris claro:
>   ```
>   @media (min-width: 640px) {
>     .galeria img {
>       width: 48%;
>     }
>   }
>   ```
> - Tres flechas en color funcional salen del término correspondiente del código hacia una etiqueta a la derecha del bloque:
>   - Flecha roja desde `@media` → etiqueta "Palabra clave que abre un bloque de CSS condicional."
>   - Flecha naranja desde `(min-width: 640px)` → etiqueta "Condición: aplica los estilos de adentro cuando el viewport mide AL MENOS 640px."
>   - Flecha azul desde las llaves `{ ... }` → etiqueta "Estilos que se aplican solo si la condición se cumple. Aquí dentro: cualquier regla CSS normal."
> - Nota debajo del bloque, en negro: "Mobile-first siempre usa min-width. Nunca max-width (eso es desktop-first)."
>
> **Columna derecha — Los 3 breakpoints del lab (3 dispositivos apilados verticalmente):**
>
> **Estado A — Móvil (menos de 640px):**
>
> - Pequeño dispositivo móvil ilustrado: rectángulo angosto vertical con marco gris simulando un teléfono.
> - Adentro: 4 imágenes verdes APILADAS verticalmente, una columna.
> - Etiqueta lateral en negro: "1 columna — solo CSS base. Ninguna media query aplica."
>
> **Estado B — Tablet (640 a 1023px):**
>
> - Dispositivo tablet ilustrado: rectángulo medio con marco gris simulando una tablet.
> - Adentro: 4 imágenes verdes acomodadas en 2 filas de 2 columnas.
> - Etiqueta lateral en negro: "2 columnas — primer @media activo: .galeria img { width: 48% }"
>
> **Estado C — Escritorio (1024px o más):**
>
> - Dispositivo desktop ilustrado: rectángulo ancho con marco gris simulando un monitor.
> - Arriba del rectángulo del desktop, dentro del marco, un indicador de hero LADO A LADO (texto a la izquierda, imagen a la derecha).
> - Debajo del hero: 4 imágenes verdes en 1 fila de 4 columnas.
> - Etiqueta lateral en negro: "4 columnas + hero horizontal — segundo @media activo: .galeria img { width: 23% } + #hero { flex-direction: row }"
>
> **Nota inferior al ancho completo, en negro:** "Los estilos base son móvil. Las @media queries AGREGAN cosas al crecer la pantalla. Nunca QUITAN."
>
> **Código de colores funcional:**
> - Bloque de código CSS y flecha de las llaves: azul.
> - Flecha y etiqueta de @media: rojo.
> - Flecha y etiqueta de la condición (min-width): naranja.
> - Imágenes ilustradas dentro de los dispositivos: verde con relleno suave.
> - Marcos de los dispositivos (móvil, tablet, desktop): gris.
> - Las palabras AL MENOS, AGREGAN, QUITAN, mobile-first, max-width, min-width destacadas (mayúsculas o énfasis tipográfico).
> - Textos descriptivos: negro y gris oscuro.
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

## Capturas manuales

> Sin capturas manuales en esta clase. Todas las imágenes se generan con IA.

---

## Tabla resumen — mapeo IMG → Panel → Sub-punto del guion

| ID | Panel | Momento | Sub-punto | Dimensiones |
|---|---|---|---|---|
| `[IMG-01]` | Panel 2.1 — box-sizing comparativa | M2 | 2.1 | 1200×900 |
| `[IMG-02]` | Panel 2.3 — 4 verbos esenciales | M2 | 2.2 | 1200×900 |
| `[IMG-03]` | Panel 3.1 — flex-grow en acción | M3 | 3.1 | 1200×900 |
| `[IMG-04]` | Panel 3.2 — flex-wrap nowrap vs wrap | M3 | 3.2 | 1200×900 |
| `[IMG-05]` | Panel 3.3 — flex-basis en 3 anchos | M3 | 3.3 | 1200×900 |
| `[IMG-06]` | Panel 4.1 — @media + 3 breakpoints | M4 | 4.2 | 1400×1050 |

**Nota:** Panel 2.2 (El modelo Flexbox — contenedor, ítems y ejes) NO está en esta lista porque es **Hand-drawn** — se va a dibujar directamente en el JSON del **_CLASE 02.excalidraw_** cuando se genere ese archivo. No requiere imagen IA.

---

## Checklist de generación

- [ ] Las 6 imágenes IA se generaron y descargaron en una carpeta accesible.
- [ ] Cada imagen revisada visualmente — el texto en pantalla coincide con lo que pidió el prompt (ojo: las IAs frecuentemente deforman textos largos o números; si una imagen sale con texto mal escrito, re-generar el prompt enfatizando la cita literal entre comillas).
- [ ] Las 6 imágenes están guardadas con nombres claros (ej: **_img-01-box-sizing.png_**, **_img-02-4-verbos.png_**...).
- [ ] El **_CLASE 02.excalidraw_** está listo (con los 6 placeholders + el Panel 2.2 hand-drawn) → arrastrar cada imagen sobre su placeholder.
