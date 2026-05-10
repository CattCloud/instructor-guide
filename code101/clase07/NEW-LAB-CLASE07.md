# Lab 07: Diseña tu MyLinks con Intención

> 🚀 **Proyecto del Módulo:** MyLinks — Tu hub personal en la web.
>
> 📌 **Este lab:** Producir 3 entregables que la Clase 08 va a consumir directamente para generar tu sitio con IA: una **Spec Sheet** (decisiones de diseño), un **mockup móvil** y un **mockup escritorio** (ambos en Figma). Trabajas en un solo archivo Figma que evoluciona de wireframe low-fi a diseño high-fi.

## 🎯 Objetivos del Lab

1. Analizar referencias reales y extraer patrones estructurales (no solo "cosas bonitas").
2. Redactar tu **Objetivo de Rediseño** justificado por tu usuario, no por tu gusto.
3. Armar tu **wireframe low-fi en Figma** usando un kit de cajas grises pre-armadas.
4. Convertir ese wireframe en **high-fi** aplicando tokens y contenido real, en móvil y escritorio.
5. Exportar las mockups PNG listas para alimentar el prompt de Clase 08.

---

## 🔑 Conceptos Clave

- **Wireframe** — Esqueleto del diseño sin pintura. Define jerarquía y posición.
- **Low-Fi vs High-Fi** — Cajas grises sin estilo vs diseño pixel-perfect con colores reales. **En este lab vas de low-fi a high-fi en el mismo archivo Figma.**
- **Design Thinking** — Diseñar para resolver el problema del usuario, no para impresionar.
- **UX vs UI** — Experiencia (Heinz: botella invertida) vs Estética (Heinz: botella vidrio).
- **Token de diseño** — Variable reutilizable de color, sombra o tipografía. En Figma se llaman **Styles**.
- **Auto Layout** — El `display: flex` de Figma. Hace que los componentes crezcan y se acomoden solos.
- **Componente** — Pieza reutilizable. La plantilla viene con cajas grises ya preparadas como componentes para que tú solo las arrastres.

---

## ⚙️ Setup Inicial

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | MyLinks responsive funcionando | Abre en DevTools y cambia tamaños sin que se rompa |
| ☐ | Cuenta en [Figma](https://www.figma.com/){:target="_blank"} | Login funcionando |
| ☐ | Plantilla Starter duplicada | Ver paso 0 abajo |
| ☐ | Editor de texto disponible | Bloc de notas, VS Code, Word, Notion — lo que tengas |

### Paso 0 · Duplica la plantilla Figma starter (3 min)

El instructor compartirá un link al archivo **MyLinks Starter Kit** en Figma. Debes **duplicarlo a tu cuenta** antes de empezar:

1. Abre el link que envió el instructor por el chat.
2. Esquina superior derecha → clic en el ícono de **Duplicate** (📄 con flecha).
3. El archivo se copia a tus *Drafts*. Ábrelo desde tu Figma.
4. Renómbralo: `MyLinks - [Tu Nombre]`.

> 💡 La plantilla ya trae:
>
> - **2 Frames vacíos** lado a lado: `Móvil` (390×844) y `Escritorio` (1440×900) — las dimensiones más comunes de la industria.
> - **Kit de cajas grises** (componentes low-fi): `foto`, `titulo`, `bio`, `boton`.
> - **3 Color Styles** (`bg-principal`, `acento`, `texto`) con valores por defecto que vas a personalizar.
> - **1 Effect Style `sombra`** con preset brutalista que también puedes personalizar.
> - **1 Botón Maestro high-fi** con Auto Layout, listo para duplicar.
>
> Tu trabajo es **arrastrar las cajas para definir tu layout (Parte 3)** y luego **rellenarlas con color y contenido (Parte 4)**. No construyes nada desde cero.

---

## Parte 1 · Análisis e Inspiración (20 min)

### 1.1 Elige 2 referencias

Visita [Carrd Templates](https://carrd.co/build){:target="_blank"} y abre **2 plantillas** que te gusten en pestañas separadas. Mira con ojo de **diseñador**, no de admirador.

> 💡 **Por qué solo 2:** con 2 referencias ya puedes detectar patrones que se repiten (lo estructural) y diferencias claras (decisiones de estilo). Más de 2 te dispersa.

### 1.2 Responde las 4 preguntas clave

Escribe respuestas concretas (1-2 frases cada una) en tu bloc de notas. La columna **Ejemplo** muestra cómo respondió el instructor en su Caso de Estudio 0 — úsala como modelo de profundidad, no como respuesta a copiar.

| # | Pregunta | Ejemplo del instructor | Tu respuesta |
|---|----------|------------------------|--------------|
| 1 | ¿Qué elementos visuales se **repiten** entre las 2 referencias? (jerarquía vertical) | "Las 2 tienen foto arriba, nombre en bold, descripción corta y botones de acción al final. Nunca al revés. Eso es **jerarquía vertical** clásica." | |
| 2 | ¿Cómo organizan la información? (centrado, asimétrico, flujo libre) | "La `card-modern` está encasillada en un contenedor central; la `card_minimal` fluye libre y alineada a la izquierda. Son enfoques opuestos." | |
| 3 | ¿Qué colores/estilos te gustan y por qué? | "Me gusta la asimetría minimalista de la primera porque no satura, y los tonos vibrantes con sombras duras de la segunda porque transmiten personalidad." | |
| 4 | ¿Qué harías diferente? Toma prestado lo mejor de cada referencia y combínalo. | "Voy a tomar la asimetría alineada-izquierda de la primera y combinarla con las sombras brutalistas de la segunda. Mi Frankenstein." | |

> 🪄 **Frase plantilla para arrancar la respuesta 4:**
> *"Voy a tomar **\[característica X\]** de la referencia 1 y combinarla con **\[característica Y\]** de la referencia 2, porque mi usuario necesita **\[razón funcional\]**."*

### 1.3 Define tu Objetivo de Rediseño

Completa esta plantilla, **escrita pensando en tu usuario, no en ti**:

> "Mi MyLinks actual es **\[estado actual\]**, pero quiero que sea **\[3-4 adjetivos de personalidad\]** usando **\[recurso visual concreto: sombras, asimetría, paleta\]**. Mi usuario ideal es **\[reclutador, colega técnico, cliente potencial\]** que necesita **\[acción específica en X segundos\]**."

> 💡 **Ejemplo del instructor (Caso de Estudio 0):**
> *"Mi MyLinks actual es **un documento HTML genérico y centrado**, pero quiero que sea **un hub asimétrico, minimalista y con personalidad fuerte** usando **alineación a la izquierda y botones brutalistas con sombras duras**. Mi usuario ideal es **un reclutador técnico** que necesita **encontrar mi LinkedIn o mis proyectos en menos de 3 segundos sin leer 20 enlaces**."*

✅ **Checkpoint:** Tienes 4 respuestas + un Objetivo de Rediseño. Compártelo en el chat.

---

## Parte 2 · Entendiendo Figma (10 min)

> 🧭 **Idea clave:** Antes de arrastrar cajas, necesitas un mapa básico de Figma. Si ya manejas VS Code, esto te va a sonar familiar — Figma usa los mismos conceptos visuales pero con otros nombres.

### 2.1 Las 3 zonas que vas a usar

Cuando abras tu archivo Figma, te encontrarás con 3 paneles principales:

| Panel | Ubicación | Para qué sirve | Equivalente en código |
|-------|-----------|----------------|------------------------|
| **Capas (Layers)** | Izquierda | Lista jerárquica de tus elementos (lo de arriba tapa lo de abajo) | DOM Tree de Chrome / explorador de archivos |
| **Lienzo (Canvas)** | Centro | Espacio infinito donde dibujas y mueves cosas | Tu navegador con Live Server |
| **Propiedades (Inspector)** | Derecha | Tamaño, color, fuente, sombra del elemento seleccionado | DevTools → pestaña Styles |

> 💡 **Atajo mental:** Lo que ves en el centro es tu "página", lo de la izquierda es tu "HTML" y lo de la derecha es tu "CSS".

### 2.2 Las 5 herramientas que vas a usar hoy

No necesitas dominar Figma entero — solo estas 5 teclas:

| Tecla | Herramienta | Para qué la usas hoy |
|-------|-------------|------------------------|
| `V` | Mover (Move) | Seleccionar y mover elementos |
| `F` | Frame | Crear el lienzo de una pantalla (móvil o escritorio) |
| `R` | Rectángulo | Cajas para botones, contenedores |
| `O` | Elipse | Círculo para foto de perfil |
| `T` | Texto | Cualquier texto: nombre, bio, etiqueta de botón |

### 2.3 3 atajos que te ahorran tiempo

| Atajo | Qué hace |
|-------|----------|
| `Ctrl+D` (Cmd+D) | Duplica el elemento seleccionado |
| `Ctrl+0` (Cmd+0) | Encaja todo el lienzo en pantalla |
| `Shift + A` | Activa Auto Layout (el `display: flex` de Figma) |

### 2.4 Practica 2 minutos antes de arrancar

En tu archivo Figma:

1. Selecciona el Frame `Móvil` con la herramienta `V` y muévelo para ubicarlo cómodamente.
2. Crea un rectángulo cualquiera (`R`) en el lienzo, fuera del Frame.
3. Cámbiale el color desde el panel derecho.
4. Bórralo (`Delete`).

Si pudiste hacer eso, **ya tienes lo necesario** para arrancar la Parte 3.

✅ **Checkpoint:** Identificas las 3 zonas y conoces las 5 teclas básicas.

---

## Parte 3 · Low-Fi en Figma — Arma tu Layout con Cajas Grises (15 min)

> 🧠 **Idea clave:** Así trabajan los diseñadores reales. Empiezan con cajas grises sin pintura para decidir **dónde va cada cosa**, y solo después le inyectan color, fotos y contenido. Esa es exactamente la transición que vas a hacer entre la Parte 3 (low-fi) y la Parte 4 (high-fi) — sobre el **mismo Frame**.

### 3.1 Abre el Frame Móvil y el Kit de Cajas Grises (3 min)

En tu archivo Figma duplicado, encontrarás dos zonas:

- **Zona izquierda:** los **Frames vacíos** `Móvil` y `Escritorio` — aquí armarás tu diseño. **En esta Parte 3 trabajas solo en el Frame `Móvil`** (mobile-first); el Frame `Escritorio` lo adaptarás en la Parte 4.
- **Zona derecha (fuera de los Frames):** el **Kit de Cajas Grises** con 4 componentes pre-armados:

| Componente | Para qué sirve | Tamaño aprox |
|------------|----------------|--------------|
| `foto` | Círculo gris para tu foto de perfil | 100×100 |
| `titulo` | Caja gris alta para el nombre | 240×40 |
| `bio` | Caja gris baja para la descripción | 280×20 |
| `boton` | Caja gris ancha para representar un botón | 320×50 |

### 3.2 Arrastra cajas al Frame Móvil y arma tu Layout (10 min)

1. Mira tus referencias de la Parte 1 y vuelve a tu **Objetivo de Rediseño**.
2. Arrastra las cajas grises del kit dentro del Frame `Móvil` — **una por una** — y posiciónalas.
3. Decide los grandes temas:
   - ¿Foto arriba, a la izquierda, o ausente?
   - ¿Nombre grande dominante, o pequeño?
   - ¿Botones en columna ordenada, o en grid 2×2?
   - ¿Contenido centrado, o alineado a la izquierda?
4. Duplica `boton` con `Ctrl+D` hasta tener 4 a 6 botones.

> ⚠️ **Regla estricta:** En esta parte **no toques colores, ni fuentes, ni contenido real**. Solo cajas grises. Tu único trabajo es decidir **jerarquía y posición**.

### 3.3 Valida tu wireframe con 2 preguntas (2 min)

Aléjate (Ctrl+0 para ver el Frame completo) y responde:

1. **¿Lo más grande y lo más arriba corresponde a lo más importante para tu usuario?** (jerarquía visual = prioridad real)
2. **¿Una persona que nunca te conoció entendería en 3 segundos de qué trata esta página?** (claridad inmediata)

Si la respuesta a ambas es sí, **estás listo para la Parte 4**. Si no, ajusta antes de seguir.

✅ **Checkpoint:** Tu Frame `Móvil` tiene un layout armado con cajas grises. Cero colores, cero textos reales. Captura screenshot del Frame para tu propio registro.

---

## Parte 4 · High-Fi — Píntale Vida a tus Cajas (50 min)

> 🎨 **El instructor demuestra cada paso en vivo en SU Frame. Tú replicas en el tuyo.** Aquí ocurre la magia: las mismas cajas grises de la Parte 3 se convierten en tu diseño final aplicando tokens, contenido y un botón maestro estilizado. Trabajas primero en `Móvil`, después adaptas a `Escritorio`.

### 4.1 Define tus tokens (5 min)

Antes de tocar Figma, abre [imagecolorpicker.com](https://imagecolorpicker.com/){:target="_blank"} y saca los hex de la referencia de Carrd que más te gustó. Anota tus 4 tokens:

| Token | Valor | Uso |
|-------|-------|-----|
| `bg-principal` | `#______` | Fondo de la página |
| `acento` | `#______` | Color de los botones |
| `texto` | `#______` | Color del texto principal |
| `sombra` | X: __ Y: __ Blur: __ Color: `#______` | Estilo de sombra para botones y tarjetas |

> 💡 **Sobre la sombra:** la plantilla viene con un preset **brutalista** (X:4 Y:4 Blur:0 #000) que define el sello del Caso de Estudio. Puedes mantenerlo, o cambiarlo a algo más suave (Ej: X:0 Y:8 Blur:24 con opacidad 20%) si tu estilo es más minimalista. Tu decisión.

### 4.2 Inyecta tus tokens en los Styles de Figma (10 min)

La plantilla tiene 3 Color Styles y 1 Effect Style preparados con valores por defecto. Vas a personalizarlos.

**Color Styles:**

1. En el panel derecho, abre la pestaña **Local Styles**.
2. Clic derecho sobre `bg-principal` → **Edit Style** → cambia el hex al valor de tu tabla.
3. Repite con `acento` y `texto`.
4. Selecciona el Frame `Móvil` → en `Fill`, clic en los 4 puntitos → asigna el Style `bg-principal`. **El fondo se pinta de inmediato.**
5. Repite el paso anterior para el Frame `Escritorio` (ambos comparten el mismo fondo).

**Effect Style (sombra):**

6. En el mismo panel **Local Styles**, busca el Effect Style llamado `sombra`.
7. Clic derecho → **Edit Style** → ajusta `X`, `Y`, `Blur` y color según tu decisión de la Parte 4.1.
8. Si dejas el preset brutalista, no toques nada — pero ya entiendes que es **tu** decisión, no algo impuesto.

> 💡 **La magia de los tokens:** un solo cambio en el Style se propaga a todos los elementos que usen esa variable. Igual que las variables CSS. El Botón Maestro ya está conectado al Effect Style `sombra`, así que cualquier ajuste se refleja en todos los botones automáticamente.

### 4.3 Convierte cada caja gris en su versión final (Móvil) (15 min)

Ahora vas a recorrer tus cajas grises **una por una** en el Frame `Móvil` y reemplazarlas por su versión high-fi:

| Caja gris | Reemplazo high-fi |
|-----------|-------------------|
| `foto` | Selecciona el círculo → en `Fill`, clic en `Image` → sube tu foto. Figma la recorta al círculo. |
| `titulo` | Bórrala. Inserta texto (`T`), escribe tu nombre, tamaño 36-48px, color = Style `texto`. |
| `bio` | Bórrala. Inserta texto (`T`), escribe una frase corta (máx 80 caracteres), tamaño 14-16px. |
| `boton` | Bórrala. **Trae el Botón Maestro high-fi** del kit (zona derecha) y arrástralo al lugar exacto. |

### 4.4 Personaliza el Botón Maestro y duplícalo (10 min)

El **Botón Maestro high-fi** del kit ya viene con Auto Layout activo, color de acento, padding 16/24, border-radius y la sombra brutalista aplicada.

1. Selecciona el botón en el Frame `Móvil`.
2. Cambia el texto a `LinkedIn` (o tu primer enlace real).
3. **Duplica con `Ctrl+D`** → cambia el texto al siguiente enlace. Repite hasta tener 4 a 6 botones.

> ⚠️ **Prueba de resistencia:** Edita un botón y escribe un texto largo a propósito (`Mi canal de YouTube y Twitch`). El botón debe **crecer solo** sin romperse. Esa es la fuerza del Auto Layout.

### 4.5 Adapta el diseño al Frame Escritorio (8 min)

Ahora el Frame `Escritorio`. **No empieces de cero** — toma lo que ya tienes en `Móvil` y adáptalo:

1. En el Frame `Móvil`, selecciona TODO el contenido (foto + título + bio + botones) con `Ctrl+A` (estando dentro del Frame).
2. Cópialo (`Ctrl+C`) y pégalo dentro del Frame `Escritorio` (`Ctrl+V`).
3. Reorganiza para aprovechar el ancho:
   - Considera poner la foto y los textos **lado a lado** (en lugar de uno encima del otro).
   - Aumenta los tamaños de fuente (nombre puede ir a 56-72px en escritorio).
   - Limita el ancho del contenido a unos ~700px centrados — no estires todo a 1440px.
4. Verifica que los botones siguen funcionando: el Auto Layout se adapta solo.

> 💡 **Idea clave:** No es un diseño nuevo, es **el mismo diseño respirando con más espacio**.

### 4.6 Ajustes finales libres (2 min)

Dale tu sello personal en ambos Frames:

- ¿Quieres iconos en los botones? Búscalos en el plugin **Iconify** (instalado en la plantilla).
- ¿Quieres más espacio entre botones? Selecciona el contenedor de botones → ajusta el `gap` del Auto Layout.
- ¿Algo no se ve como esperabas? Acuérdate: la Clase 08 te da otra oportunidad de iterar con IA.

> 💡 **Regla de oro:** Si pasas más de 5 minutos peleando con una decisión, déjala como está.

✅ **Checkpoint:** Ambos Frames (`Móvil` y `Escritorio`) tienen tu foto, tu nombre, tu bio y entre 4 y 6 botones high-fi, con tus tokens aplicados. **Las cajas grises desaparecieron — fueron reemplazadas por su versión final.**

---

## Parte 5 · Exporta y arma tu Spec Sheet (10 min)

### 5.1 Exporta los 2 Frames como PNG

Vas a exportar ambas vistas — son insumo directo para Clase 08.

**Para el Frame `Móvil`:**

1. Selecciona el Frame `Móvil` en el panel izquierdo de capas (el Frame padre, no un elemento interno).
2. Panel derecho → sección **Export** → clic en `+`.
3. Formato: **PNG**, escala **2x**.
4. Clic en **Export Móvil** y guárdalo como `mockup-mobile.png`.

**Para el Frame `Escritorio`:**

5. Repite el proceso con el Frame `Escritorio`.
6. Guárdalo como `mockup-desktop.png`.

### 5.2 Arma tu Spec Sheet

Descarga la plantilla y rellénala con tu información:

📥 **[Descargar plantilla `spec-sheet-template.txt`](spec-sheet-template.md)**

Renómbrala como `spec-sheet.txt` (o `spec-sheet.md` si prefieres ver formato Markdown) y ábrela con cualquier editor de texto (Bloc de notas, VS Code, Word, Notion, lo que tengas a mano).

La plantilla tiene 4 secciones que debes llenar:

1. **Objetivo de Rediseño** — pega aquí tu frase de la Parte 1.3.
2. **Estilo en una frase** — ej: "Brutalista minimalista alineado a la izquierda".
3. **Tokens de Diseño** — los hex y valores de tu sombra (Parte 4.1).
4. **Enlaces** — entre 3 y 6 enlaces máximo, cada uno con su URL.

> 💡 **Por qué no exigimos Markdown:** lo que importa es el **contenido**, no el formato. Lo único requerido es que sea legible en cualquier editor de texto.

✅ **Checkpoint:** Tienes `mockup-mobile.png`, `mockup-desktop.png` y `spec-sheet.txt` (o `.md`). Estos tres archivos son lo que vas a llevar a Clase 08.

---

## 🟢 Bonus (Opcional, si te queda tiempo)

Si terminaste antes y quieres profundizar en Figma, prueba alguno de estos retos. **No son obligatorios** y no afectan tu entrega.

### Bonus 1 · Convierte tu botón en un Componente Maestro

En Figma, un **Componente** es como una clase en programación: si modificas el original, todas las copias se actualizan automáticamente.

1. Selecciona tu Botón Maestro personalizado.
2. `Ctrl+Alt+K` (Cmd+Opt+K en Mac) → o clic derecho → **"Create component"**.
3. Verás que el botón ahora tiene un ícono morado de diamante (◆). Es el "padre".
4. Duplica el componente con `Ctrl+D` y verás los hijos con el mismo diamante en blanco (◇).
5. **Prueba la magia:** cambia el color del componente padre. Todos los hijos cambian.

### Bonus 2 · Prototipo Interactivo

Convierte tu mockup estático en un prototipo navegable que parece una app real.

1. En el panel derecho, cambia de la pestaña `Design` a `Prototype`.
2. Selecciona el nombre del Frame `Móvil` en el panel izquierdo de capas.
3. Clic en el ícono de **▶️ Play** (esquina superior derecha de Figma).
4. Figma abre tu diseño dentro de un marco de pantalla móvil real, con scroll funcional.
5. Comparte ese link con un amigo para que vea tu MyLinks como si fuera una app.

---

## ✅ Cierre y Verificación (5 min)

Antes de salir, valida en voz alta o por chat:

- [ ] Tengo `mockup-mobile.png` exportado del Frame `Móvil` (escala 2x).
- [ ] Tengo `mockup-desktop.png` exportado del Frame `Escritorio` (escala 2x).
- [ ] Tengo mi `spec-sheet` rellenado (en `.txt`, `.md` o cualquier formato de texto legible).
- [ ] Sé qué objetivo voy a perseguir en la Clase 08.

---

## 📝 Entrega

📁 **Una carpeta** con:

1. `spec-sheet.txt` (o `.md`) — Tu hoja de especificación rellenada desde la plantilla.
2. `mockup-mobile.png` — Tu Frame `Móvil` exportado de Figma (high-fi).
3. `mockup-desktop.png` — Tu Frame `Escritorio` exportado de Figma (high-fi).

**Opcional:** Link a tu archivo de Figma con permiso "Anyone with the link can view".

> 💡 **Próxima clase:** Tus mockups se adjuntan directamente al chat de Claude para que extraiga colores, layout y proporciones. Tu `spec-sheet` da el contexto que las imágenes no pueden dar (nombre, links, usuario objetivo). **Las tres piezas juntas producen el mejor resultado posible.**
