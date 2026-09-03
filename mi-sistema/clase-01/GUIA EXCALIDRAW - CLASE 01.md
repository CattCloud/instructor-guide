# Guía Excalidraw — CLASE 01: HTML5 Semántico, Accesibilidad y Formularios

> **Estado del archivo:** Listo para generar (todos los Momentos cerrados, paneles en Borrador pendientes de validación de Eric)
> **Layout sugerido:** Timeline horizontal (un panel por sub-punto conceptual)
> **Paneles totales:** 11 (M1: 1 · M2: 3 · M3: 3 · M4: 3 · M5: 1)
> **Última actualización:** Momento 5 cerrado (Capa 2+3) — 2026-05-13 · Guion de Clase 01 completo

---

## Momento 1: Setup del Proyecto Víctima (Parte 1 del lab)

> **Estado:** Borrador
> **Paneles del Momento:** 1

### Panel 1.1 — Git vs GitHub + 6 comandos básicos

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 1.1 "Git vs GitHub + 6 comandos básicos". Modo preparado de antemano con espacio en blanco a la derecha/abajo para anotar comentarios en vivo. Ver mi-sistema/clase-01/GUIA EXCALIDRAW - CLASE 01.md → Panel 1.1.**`
- **Patrón canónico:** **Híbrido — Patrón 3 (Comparativa X vs Y)** para Git ↔ GitHub + **Patrón 8 (Bloque de código con leyenda lateral)** para los 6 comandos. Ver `excalidraw-system/SKILL.md §6`.
- **Modo:** Preparado de antemano (base lista en pantalla) + zona libre para anotaciones en vivo (Eric va anotando comentarios del grupo o aclaraciones).
- **Concepto pedagógico que visualiza:**
  - (a) Que **Git** y **GitHub** son cosas distintas — uno es local, otro es la nube. No son sinónimos. Confusión típica del primer día.
  - (b) Los **6 comandos** que se van a usar hoy con su función en una sola línea, para que el alumno los tenga visibles mientras los ejecuta en la terminal.

---

**Contenido del panel:**

### Bloque A — Comparativa Git vs GitHub (Patrón 3)

Layout: dos columnas paralelas, sin divisor central. Separación por proximidad espacial.

- **Título superior del panel** (rojo `#e03131`, 36px): `"Git vs GitHub"`
- **Subtítulo / cierre técnico** (negro `#1e1e1e`, 20px): `"Control de versiones local + plataforma en la nube"`

**Columna izquierda — Git (local):**
- Etiqueta de columna (azul `#1971c2`, 28px, bold): `"Git"`
- Sub-etiqueta (negro, 18px): `"en tu computadora"`
- Icono/representación: rectángulo redondeado con label `"💻 local"` (o monitor estilizado).
- Dentro del rectángulo: serie de 3 commits representados como pequeñas cajas conectadas con flecha horizontal:
  - `[commit 1] → [commit 2] → [commit 3]`
  - Cada caja: stroke azul `#1971c2`, fill transparente, fontSize 14.
- Etiqueta debajo (negro, 16px): `"cada commit = una foto del proyecto"`

**Columna derecha — GitHub (nube):**
- Etiqueta de columna (naranja `#f08c00`, 28px, bold): `"GitHub"`
- Sub-etiqueta (negro, 18px): `"en la nube"`
- Icono/representación: nube estilizada o rectángulo redondeado con label `"☁️ remoto"`.
- Texto interno (negro, 16px): `"respaldo + compartir + portafolio"`

**Conexión Git ↔ GitHub (centro):**
- **Flecha superior** (azul `#1971c2`, fontSize 18): Git → GitHub, etiqueta `"git push"`.
- **Flecha inferior** (verde `#2f9e44`, fontSize 18): GitHub → Git, etiquetas `"git pull / git clone"`.

---

### Bloque B — Los 6 comandos básicos (Patrón 8)

Layout: bloque de código en rectángulo izquierdo, leyendas a la derecha con flechas binding.

- **Encabezado del bloque** (rojo `#e03131`, 24px): `"Los 6 comandos de hoy"`

**Rectángulo del bloque de comandos** (stroke azul `#1971c2`, fontSize 18 monospace, color de texto verde tipo terminal `#69db7c`):

```
git init
git status
git add .
git commit -m "mensaje"
git remote add origin <URL>
git push -u origin main
```

**Leyendas laterales (a la derecha, una por línea, fontSize 16, color `#1e1e1e`, con flecha `←` bound a su línea correspondiente):**

| Comando | Leyenda (en pantalla) |
|---|---|
| `git init` | `"Iniciar Git en la carpeta"` |
| `git status` | `"Ver qué cambió"` |
| `git add .` | `"Preparar cambios antes de guardar"` |
| `git commit -m "mensaje"` | `"Guardar"` |
| `git remote add origin <URL>` | `"Conectar local con GitHub"` |
| `git push -u origin main` | `"Subir el cambio a la nube"` |

---

### Bloque C — Zona libre para anotaciones en vivo

- Sección a la derecha del lienzo (o debajo del Bloque B) explícitamente vacía, marcada con un encabezado discreto (gris `#1e1e1e`, 14px): `"notas en vivo"`.
- Ahí Eric anota: dudas frecuentes del grupo, aclaraciones espontáneas, ejemplos puntuales. Freedraw permitido aquí; el resto del panel no se modifica.

---

**Snippets de código embebidos:** ninguno aparte de los 6 comandos (ya listados arriba). No agregar HTML/CSS/JS en este panel — es exclusivo de Git/GitHub.

**Imágenes embebidas:** ninguna. Los íconos `💻` y `☁️` se renderizan como text emojis dentro de las cajas (no son imágenes embebidas).

**Anchor pedagógico:** Visualizar que Git (local) y GitHub (nube) son herramientas distintas que trabajan juntas; mantener los 6 comandos visibles durante la ejecución en terminal — el alumno mira la pizarra cuando se pierde y vuelve al ritmo sin pedir repetición.

**Notas para Eric:**
- **Decisión de modo:** está marcado como "preparado de antemano + zona libre". Si prefieres dibujarlo en vivo desde cero (más participativo, pero come 3-4 min extra del Momento), cambiar modo a "En blanco para dibujar en vivo" y simplificar el contenido del panel a: solo los rótulos "Git" y "GitHub" + 6 cajitas vacías para llenar mientras explicas.
- **Paleta:** seguir la canónica de `excalidraw-system §3`. Azul `#1971c2` para Git (local), naranja `#f08c00` para GitHub (remoto), verde `#2f9e44` para acciones exitosas (pull/clone), rojo `#e03131` solo para títulos.
- **Tamaño del lienzo:** aproximadamente 2400×1400 px. El bloque Git vs GitHub en la mitad superior; los 6 comandos en la mitad inferior; zona libre a la derecha.
- Si después de la clase 1 detectas que el alumno se confundió con `origin` (el remoto), considerar agregar una micro-nota en el Panel: `"'origin' = nombre convencional del remoto principal, no es palabra reservada"`.

---

## Momento 2: HTML5 Semántico + Jerarquía de encabezados (Parte 2 del lab)

> **Estado:** Borrador
> **Paneles del Momento:** 3

### Panel 2.1 — El problema del `<div>`: cajas sin etiqueta + analogía de los frascos

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 2.1 "El problema del <div>: cajas sin etiqueta + analogía de los frascos". Modo preparado de antemano. Ver mi-sistema/clase-01/GUIA EXCALIDRAW - CLASE 01.md → Panel 2.1.**`
- **Patrón canónico:** **Patrón 2 (Caja de definición de concepto)** para el bloque del `<div>` + **Patrón 3 (Comparativa X vs Y)** para los frascos sin/con etiqueta. Ver `excalidraw-system/SKILL.md §6`.
- **Modo:** Preparado de antemano.
- **Concepto pedagógico que visualiza:**
  - (a) Que `<div>` es contenedor neutro sin rol semántico — caja invisible cuyo único trabajo es agrupar.
  - (b) El problema del div-soup ilustrado con la analogía universal de los frascos de despensa: 20 frascos idénticos sin etiqueta vs frascos con rótulo. Pregunta participativa: *"¿cómo distinguen la sal del azúcar?"*

---

**Contenido del panel:**

### Bloque A — `<div>` como caja sin etiqueta (Patrón 2)

Layout: bloque superior central. Caja de cartón estilizada (rectángulo redondeado con tapas tipo flap arriba) sin rótulo.

- **Título del panel** (rojo `#e03131`, 36px): `"El problema del <div>"`
- **Caja gráfica** (stroke `#1e1e1e`, fill transparente, roughness ligera, ~300×200 px): caja de cartón cerrada SIN ningún rótulo visible.
- **Etiqueta debajo de la caja** (monospace, 28px, color `#1971c2` azul): `"<div>"`
- **Sub-etiqueta** (16px, gris `#1e1e1e`): `"viene de 'division' — contenedor neutro, sin rol semántico"`

---

### Bloque B — Analogía de los frascos (Patrón 3)

Layout: dos columnas paralelas, sin divisor central. Separación por proximidad espacial.

**Columna izquierda — rojo `#e03131` (problema):**
- Encabezado (rojo, 24px bold): `"20 frascos sin etiqueta"`
- Grid de **16 círculos idénticos** (o rectángulos verticales tipo frasco) en 2 filas × 8 columnas:
  - Cada frasco: stroke `#1e1e1e`, fill transparente, roughness ligera.
  - Sin texto adentro.
- Pie de columna (rojo, 16px): `"Imposible saber qué hay adentro sin abrir cada uno"`

**Columna derecha — verde `#2f9e44` (solución):**
- Encabezado (verde, 24px bold): `"Cada frasco con su etiqueta"`
- Grid de **8 frascos rotulados** en 2 filas × 4 columnas:
  - Mismo stroke, pero con rótulo dentro de cada frasco (monospace, 14px, color `#1e1e1e`):
    - Fila 1: `SAL`, `AZÚCAR`, `HARINA`, `CAFÉ`
    - Fila 2: `PIMIENTA`, `COMINO`, `ORÉGANO`, `TÉ`
- Pie de columna (verde, 16px): `"De un vistazo sabes cuál es cuál"`

---

### Bloque C — Pregunta visible para el chat

Layout: banner inferior centrado debajo de los dos bloques de frascos.

- Texto centrado (negro `#1e1e1e`, 28px bold): `"¿Cómo distinguen sal de azúcar?"`
- Sub-texto opcional (gris, 14px): `"(en el chat — respondan en una palabra)"`

---

### Bloque D — Conexión con el código (debajo del Bloque C, ya cerca del cierre del panel)

Layout: texto en una sola línea, color de cierre.

- Texto (rojo `#e03131`, 22px bold): `"En HTML pasa lo mismo: todo <div> = todos los frascos sin etiqueta."`
- Sub-texto (negro, 16px): `"HTML5 (2014) trajo las cajas con etiqueta. Esas las vemos ahora →"`

---

**Snippets de código embebidos:** ninguno (el div-soup se pega en VS Code en vivo, no aparece en el panel).

**Imágenes embebidas:** ninguna. Los frascos y la caja de cartón se dibujan con primitivas (rectángulos, ellipses, líneas).

**Anchor pedagógico:** La analogía de los frascos es universal — todos los alumnos han experimentado la frustración de buscar algo en un frasco transparente sin etiqueta. La conexión "20 frascos sin etiqueta = código lleno de divs" es directa y memorable. El panel les deja la imagen mental que después conecta con el snippet de div-soup en VS Code.

**Notas para Eric:**
- Los frascos pueden dibujarse como rectángulos verticales redondeados (tipo botella) o como círculos simples. La forma exacta es estética — lo importante es que se vean idénticos en la columna izquierda y con rótulo claro en la derecha.
- Si después de la clase 1 detectas que la analogía se quedó corta para el grupo, considerar agregar un tercer bloque al panel con la consecuencia técnica: *"Google no entiende. Lectores de pantalla no entienden. SEO + A11y rotos."*
- Alternativa de paleta: si los frascos rojos se ven agresivos, usar gris oscuro `#495057` para los sin etiqueta (sigue siendo "negativo" pero más neutro).

---

### Panel 2.2 — Las 7 etiquetas semánticas + roles ARIA implícitos

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 2.2 "Las 7 etiquetas semánticas + roles ARIA implícitos". Modo preparado de antemano. Ver mi-sistema/clase-01/GUIA EXCALIDRAW - CLASE 01.md → Panel 2.2.**`
- **Patrón canónico:** **Patrón 7 (Wireframe miniatura)** como base + etiquetas/leyendas tipo **Patrón 8**. Ver `excalidraw-system/SKILL.md §6`.
- **Modo:** Preparado de antemano.
- **Concepto pedagógico que visualiza:**
  - (a) Cómo se distribuyen las 7 etiquetas semánticas en una página típica (wireframe de landing).
  - (b) El **rol ARIA implícito** que cada etiqueta aporta automáticamente (etimología + rol pegados).
  - (c) Diferenciar visualmente las 5 que se usan HOY (header, nav, main, section, footer) de las 2 que se mencionan para uso futuro (article, aside).

---

**Contenido del panel:**

### Bloque A — Wireframe de la página (Patrón 7)

Layout: una caja grande que representa la página completa (escala miniatura), con las etiquetas semánticas como sub-cajas etiquetadas dentro. Roughness 0 (limpio).

- **Título superior** (rojo `#e03131`, 36px): `"Anatomía semántica de una página"`

**Estructura del wireframe** (caja exterior representa el `<body>`):

```
┌───────────────────────────────────────────────────────────────┐
│ <header>                              [rol implícito: banner] │ ← stroke #1971c2 azul
│   ┌─────────────────────────────────────────────────────────┐ │
│   │ <nav>                       [rol implícito: navigation] │ │ ← stroke #1971c2 azul
│   └─────────────────────────────────────────────────────────┘ │
├───────────────────────────────────────────────────────────────┤
│ <main>                                  [rol implícito: main] │ ← stroke #1971c2 azul (resaltado)
│   ┌─────────────────────────────────────────────────────────┐ │
│   │ <section id="hero">                                     │ │ ← stroke #1971c2 azul
│   │   <h1> Título principal                                 │ │
│   └─────────────────────────────────────────────────────────┘ │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │ <section>                                               │ │ ← stroke #1971c2 azul
│   │   <h2> Características                                  │ │
│   └─────────────────────────────────────────────────────────┘ │
├───────────────────────────────────────────────────────────────┤
│ <footer>                          [rol implícito: contentinfo]│ ← stroke #1971c2 azul
└───────────────────────────────────────────────────────────────┘
```

- **Etiquetas a la derecha de cada caja** (naranja `#f08c00`, 14px): el rol implícito ARIA (`banner`, `navigation`, `main`, `contentinfo`). `<section>` no tiene rol implícito relevante — sin etiqueta a la derecha.
- Texto de la etiqueta dentro de cada caja: monospace, fontSize 18, color `#1e1e1e`.

---

### Bloque B — Las 2 etiquetas mencionadas pero NO usadas hoy

Layout: cajas a un costado del wireframe, marcadas visualmente como "fuera del scope de hoy".

- **Encabezado del bloque** (gris `#1e1e1e`, 20px): `"Existen, pero no se usan en este landing"`

**Caja 1 — `<article>`:**
- Stroke gris `#1e1e1e` (no azul, para diferenciar) con dasharray (línea punteada) para indicar "fuera del scope".
- Texto: `"<article>"` arriba en monospace.
- Subtexto (14px gris): `"contenido independiente (post de blog, tarjeta)"`

**Caja 2 — `<aside>`:**
- Mismo estilo (stroke gris punteado).
- Texto: `"<aside>"` arriba.
- Subtexto (14px gris): `"info al costado (sidebar, widget)"`

---

### Bloque C — Etimologías rápidas (en una columna lateral o en pie del panel)

Tabla simple, fontSize 14, color `#1e1e1e`:

| Etiqueta | Viene de | Uso |
|---|---|---|
| `<header>` | header (encabezado) | arriba de la página |
| `<nav>` | navigation | barra de menú |
| `<main>` | main (principal) | contenido central, **uno solo** |
| `<section>` | section (sección) | bloque temático con `<h2>` |
| `<footer>` | footer (pie) | abajo de la página |
| `<article>` | article (artículo independiente) | blog, tarjeta reposteable |
| `<aside>` | aside (al costado) | sidebar, widget |

---

**Snippets de código embebidos:** ninguno aparte de los nombres de las etiquetas (ya en los rótulos del wireframe).

**Imágenes embebidas:** ninguna.

**Anchor pedagógico:** El alumno ve de un vistazo dónde va cada etiqueta dentro de una página real, y cómo cada una aporta un rol ARIA automático sin escribirlo a mano. Conecta la teoría con la práctica que viene en el code-along del sub-punto 2.4.

**Notas para Eric:**
- El wireframe sirve también como **referencia visual durante el code-along 2.4** — déjalo proyectado mientras los alumnos escriben su `<body>`. Pueden mirar la pizarra cuando dudan dónde anidar algo.
- Si quieres reforzar `<section>`, agregarle una etiqueta a la derecha también: `"rol implícito: region"` (técnicamente lo tiene cuando tiene `aria-labelledby` o un heading dentro). Decisión opcional.
- Si Eric prefiere dibujar el wireframe en vivo desde cero, se vuelve modo "En blanco" — pero la lista de etimologías del Bloque C conviene tenerla pre-armada para no perder tiempo escribiendo a mano.

---

### Panel 2.3 — Jerarquía de encabezados: correcta vs rota

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 2.3 "Jerarquía de encabezados: correcta vs rota". Modo preparado de antemano. Ver mi-sistema/clase-01/GUIA EXCALIDRAW - CLASE 01.md → Panel 2.3.**`
- **Patrón canónico:** **Patrón 3 (Comparativa X vs Y)** — dos árboles paralelos, uno correcto (verde), uno roto (rojo).
- **Modo:** Preparado de antemano.
- **Concepto pedagógico que visualiza:** Que la jerarquía de encabezados debe ser secuencial (h1 → h2 → h3, sin saltar) porque el lector de pantalla genera un índice navegable. Comparar visualmente un árbol correcto (limpio, secuencial) contra uno roto (con saltos h1 → h4 sin h2, h3) para fijar la regla.

---

**Contenido del panel:**

- **Título superior** (rojo `#e03131`, 36px): `"Jerarquía de encabezados — el índice del lector de pantalla"`

### Bloque A — Árbol correcto (verde)

- **Encabezado de columna** (verde `#2f9e44`, 24px): `"✓ Jerarquía secuencial"`
- Árbol vertical indentado, monospace, fontSize 18, color `#1e1e1e`:

```
<h1> Mi Producto                       ← UNO solo (título de página)
  <h2> Características                 ← sección 1
    <h3> Rendimiento                   ← subsección de Características
    <h3> Diseño                        ← subsección de Características
  <h2> Planes                          ← sección 2
    <h3> Plan Free
    <h3> Plan Pro
  <h2> Contacto                        ← sección 3
```

- Etiqueta inferior (verde `#2f9e44`, 16px): `"El lector de pantalla genera un índice limpio. El usuario salta a cualquier sección con un atajo."`

### Bloque B — Árbol roto (rojo)

- **Encabezado de columna** (rojo `#e03131`, 24px): `"✗ Jerarquía rota"`
- Árbol vertical indentado, monospace, fontSize 18:

```
<h1> Mi Producto
<h1> Otro título (?)                   ← DOS h1 — ya rompe
  <h4> Características                 ← salto de h1 a h4
    <h2> Rendimiento                   ← vuelve atrás a h2
  <h3> Planes                          ← desordenado
```

- Etiqueta inferior (rojo `#e03131`, 16px): `"El lector de pantalla muestra un índice incoherente. Usuario con discapacidad no puede navegar."`

### Bloque C — Regla técnica (banner inferior centrado)

- Banner horizontal abajo, stroke negro `#1e1e1e`, fondo transparente:
- Texto centrado (negro, 22px bold): `"Regla: nunca saltar niveles. h1 → h2 → h3 → h4. Secuencial."`

---

**Snippets de código embebidos:** los dos árboles (correcto y roto) ya están en monospace dentro del panel. No agregar más.

**Imágenes embebidas:** ninguna.

**Anchor pedagógico:** El contraste visual entre los dos árboles (verde limpio vs rojo desordenado) fija la regla sin necesidad de explicación adicional. El alumno ve la diferencia y la entiende.

**Notas para Eric:**
- Después de proyectar este panel, ir directo al **demo en DevTools del `demo-semantica.html`** para mostrar el índice navegable real. La pizarra es el concepto; DevTools es la prueba.
- Si quieres ampliar el panel, agregar una micro-nota al pie: `"h4-h5-h6 existen pero rara vez se usan en landing pages — se ven más en docs técnicas"`.

---

## Momento 3: Accesibilidad básica (Parte 3 del lab)

> **Estado:** Borrador
> **Paneles del Momento:** 3

### Panel 3.1 — A11y: la rampa del edificio

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 3.1 "A11y: la rampa del edificio". Modo preparado de antemano. Ver mi-sistema/clase-01/GUIA EXCALIDRAW - CLASE 01.md → Panel 3.1.**`
- **Patrón canónico:** **Patrón 2 (Caja de definición de concepto)** para la cabecera + **Patrón 7 (Wireframe miniatura)** para la escena del edificio con personas usando la rampa.
- **Modo:** Preparado de antemano.
- **Concepto pedagógico que visualiza:** Que A11y no es solo para personas con discapacidad — la rampa del edificio público beneficia a múltiples perfiles cotidianos (papás con coche, repartidores, personas con maletas, lesionados temporales). Ancla A11y en una imagen visual universal.

---

**Contenido del panel:**

### Bloque A — Definición técnica (cabecera del panel, Patrón 2)

- **Título** (rojo `#e03131`, 36px): `"A11y — Accesibilidad Web"`
- **Definición** (negro `#1e1e1e`, 22px): `"Construir el sitio para que personas con diferentes capacidades puedan usarlo"`
- **Numeronym** (gris `#1e1e1e`, 14px, debajo del título): `"a-11-y = 'accessibility' (11 letras entre A y y) · primo del i18n y l10n"`

---

### Bloque B — Escena del edificio (Patrón 7, simplificado)

Layout: escena horizontal centrada en el panel. Wireframe de un edificio público (rectángulo grande con entrada) con escaleras a la izquierda y rampa al lado derecho.

- **Fachada del edificio:** rectángulo grande stroke `#1e1e1e`, fill transparente. Etiqueta arriba (16px): `"Entrada del edificio"`.
- **Escaleras** (lado izquierdo): zigzag o escalones dibujados con stroke `#1e1e1e`.
- **Rampa** (lado derecho): línea inclinada gruesa, stroke `#1971c2` azul (resaltar como elemento "A11y").

**Personas usando la rampa** (5 ilustraciones simples tipo stick figure o iconos):
- 👤 con silla de ruedas
- 👨‍👶 papá con coche de bebé
- 🧳 persona con maleta grande
- 📦 repartidor con caja
- 🦽 persona con muleta (lesión temporal)

Cada persona con una etiqueta corta abajo (fontSize 12, gris):
- `"silla de ruedas"`
- `"coche de bebé"`
- `"maleta de viaje"`
- `"reparto"`
- `"lesión temporal"`

> **Nota visual:** Si Excalidraw no puede dibujar stick figures limpios, usar los emojis directamente como text (Excalidraw los renderiza). El mensaje pedagógico no necesita ilustración exacta — necesita variedad de personas.

---

### Bloque C — Conexión con código (pie del panel)

Layout: banner horizontal abajo.

- Texto centrado (rojo `#e03131`, 22px bold): `"Lo que construyen como rampa, todos lo usan."`
- Sub-texto (negro, 14px): `"Lectores de pantalla, navegación por teclado, alt en imágenes, aria-label en íconos — todas son rampas en el código."`

---

**Snippets de código embebidos:** ninguno (el panel es conceptual, sin código).

**Imágenes embebidas:** ninguna. Las "personas" son emojis renderizados como text.

**Anchor pedagógico:** El alumno conecta A11y con algo que ve todos los días — la rampa del edificio. La memoria visual queda anclada en algo cotidiano, no en un concepto técnico abstracto.

**Notas para Eric:**
- Si quieres reforzar la idea legal, agregar una micro-nota al pie: `"Requerimiento legal en muchos países (incluyendo Perú para sitios públicos y empresas grandes)"`.
- Si la lista de personas se ve muy cargada, reducir a 3: silla de ruedas + coche de bebé + maleta. Esos tres son suficientes para vender el mensaje "no solo para discapacidad".

---

### Panel 3.2 — El atributo `alt`: tres casos

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 3.2 "El atributo alt: tres casos". Modo preparado de antemano. Ver mi-sistema/clase-01/GUIA EXCALIDRAW - CLASE 01.md → Panel 3.2.**`
- **Patrón canónico:** **Patrón 3 (Comparativa)** extendido a tres columnas (Caso 1 ✓ / Caso 2 ✓ / Caso 3 ✗).
- **Modo:** Preparado de antemano.
- **Concepto pedagógico que visualiza:** Los tres usos del atributo `alt` — informativa, decorativa, omisión — con consecuencias claras de cada uno. El alumno ve los tres lado a lado y entiende cuándo aplica cada uno.

---

**Contenido del panel:**

- **Título superior** (rojo `#e03131`, 36px): `"alt: el texto cuando la imagen no carga"`
- **Sub-título** (negro `#1e1e1e`, 18px): `"'alt' viene de 'alternate' — texto alternativo a la imagen"`
- **Frase ancla** (gris `#1e1e1e`, 16px, italic): `"Imaginen mandar una foto por WhatsApp que no carga — ¿qué texto debe aparecer?"`

### Bloque A — Caso 1: Imagen informativa (✓ verde)

- **Encabezado** (verde `#2f9e44`, 24px bold): `"✓ Informativa"`
- **Visualización:**
  - Caja gris (placeholder de imagen que no cargó), stroke `#1e1e1e`, dentro un texto naranja `#f08c00` (14px): `"Logotipo del Producto"`.
- **Snippet de código** (monospace 14px, color verde tipo terminal `#69db7c` sobre fondo claro):
  ```
  <img src="logo.png"
       alt="Logotipo del Producto">
  ```
- **Pie de columna** (verde, 14px): `"Aporta información → describir contenido"`

### Bloque B — Caso 2: Imagen decorativa (✓ verde)

- **Encabezado** (verde `#2f9e44`, 24px bold): `"✓ Decorativa"`
- **Visualización:**
  - Caja gris vacía (imagen rota sin texto adentro), stroke `#1e1e1e`. Etiqueta abajo (12px): `"el lector la ignora limpiamente"`.
- **Snippet de código:**
  ```
  <img src="separador.png"
       alt="">
  ```
- **Pie de columna** (verde, 14px): `"No aporta información → alt vacío (el lector salta)"`

### Bloque C — Caso 3: Sin atributo `alt` (✗ rojo)

- **Encabezado** (rojo `#e03131`, 24px bold): `"✗ Sin alt"`
- **Visualización:**
  - Caja gris (placeholder de imagen rota), stroke `#1e1e1e` punteado, con un signo de interrogación adentro (rojo, 24px): `"?"`.
- **Snippet de código:**
  ```
  <img src="foto.jpg">
  ```
- **Pie de columna** (rojo, 14px): `"Lector anuncia 'imagen' sin contexto · evitar siempre"`

---

**Snippets de código embebidos:** los 3 snippets ya en cada bloque. No agregar más.

**Imágenes embebidas:** ninguna. Las "imágenes rotas" se dibujan como rectángulos con stroke (algunas con un texto adentro, otras vacías, otra con `?`).

**Anchor pedagógico:** Los tres casos lado a lado le dan al alumno una regla de decisión clara: ¿la imagen aporta info? → `alt` con texto. ¿Es decoración? → `alt=""`. ¿No sé qué es? → siempre `alt`, nunca omitir.

**Notas para Eric:**
- El bloque del WhatsApp se queda como frase ancla escrita en el panel (la analogía la dices tú al presentar). No necesita ilustración del WhatsApp.
- Si quieres añadir un caso 4 — `alt` mal escrito ("imagen" como texto, "foto1.jpg" como texto) — agregar como sub-fila debajo. Decisión opcional.

---

### Panel 3.3 — `aria-label`: cuando el elemento no habla solo

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 3.3 "aria-label: cuando el elemento no habla solo". Modo preparado de antemano. Ver mi-sistema/clase-01/GUIA EXCALIDRAW - CLASE 01.md → Panel 3.3.**`
- **Patrón canónico:** **Patrón 2 (Caja de definición)** para la regla #1 + ejemplos prácticos lado a lado.
- **Modo:** Preparado de antemano.
- **Concepto pedagógico que visualiza:** Cuándo se necesita `aria-label` (elementos con ícono y sin texto visible) y la regla #1 de ARIA (no duplicar lo que HTML nativo ya hace). Anclado en la analogía del control remoto.

---

**Contenido del panel:**

- **Título superior** (rojo `#e03131`, 36px): `"aria-label: la etiqueta para los íconos sin palabras"`

### Bloque A — Analogía del control remoto (anclaje visual)

Layout: dibujo simple de un control remoto rectangular con 4 botones visibles.

- **Botones reconocibles** (con stroke verde `#2f9e44`):
  - ▶ (Play)
  - ⏸ (Pausa)
  - ⏻ (Apagar)
- **Botón ambiguo** (con stroke rojo `#e03131`):
  - Un símbolo raro (ej: ⏣ o ⚙ o un cuadrado raro) — sin etiqueta visible.
  - Etiqueta abajo (gris, 12px): `"¿qué hace?"`

- **Conexión textual** (debajo del control, gris `#1e1e1e`, 16px italic): `"Los botones obvios no necesitan etiqueta. Los ambiguos sí."`

### Bloque B — Regla #1 de ARIA (cierre absoluto)

- Banner horizontal en el centro, stroke negro grueso.
- Texto centrado (negro `#1e1e1e`, 24px bold): `"Regla #1: No usar ARIA cuando HTML nativo hace el trabajo."`
- Sub-texto (gris, 14px): `"`<button>Enviar</button>` no necesita `aria-label`. La X de cerrar un modal sí."`

### Bloque C — Tres casos prácticos (Patrón 8 simplificado)

Layout: tres ejemplos verticales con código + leyenda lateral.

**Ejemplo 1 — Ícono de búsqueda:**
- Ícono visible: 🔍
- Código (monospace 14px):
  ```html
  <button aria-label="Buscar">
    🔍
  </button>
  ```
- Leyenda (verde): `"✓ ícono sin texto → aria-label"`

**Ejemplo 2 — Enlace de red social:**
- Ícono visible: ícono de Instagram (o letra "f" para FB)
- Código:
  ```html
  <a href="..." aria-label="Síguenos en Instagram">
    <img src="ig.png" alt="">
  </a>
  ```
- Leyenda (verde): `"✓ <img> con alt vacío para evitar duplicación"`

**Ejemplo 3 — Botón con texto (NO usar `aria-label`):**
- Botón visible: `[ Enviar ]`
- Código (con marca de tachado o "✗" al lado):
  ```html
  <button aria-label="Enviar">Enviar</button>
  ```
- Leyenda (rojo): `"✗ texto duplicado · el lector lo anuncia dos veces"`

---

**Snippets de código embebidos:** los 3 ejemplos ya en el panel. No agregar más.

**Imágenes embebidas:** ninguna. El control remoto, los íconos y el botón se dibujan con primitivas + text emojis.

**Anchor pedagógico:** El control remoto es la imagen mental que el alumno se lleva: botón obvio = no necesita etiqueta, botón raro = necesita etiqueta. Aplica la regla técnica de ARIA #1.

**Notas para Eric:**
- Si quieres mencionar `role="navigation"`, `role="banner"` y los redundantes — agregar una mini-nota al pie: `"Los `role=*` de HTML5 nativo (nav, header, footer) son redundantes. No los escribimos."` Decisión opcional, ya está en el guion 3.3.
- El ejemplo de Instagram tiene el `aria-label` en el `<a>` y `alt=""` en el `<img>`. Si Eric prefiere usar `alt="Instagram"` directamente (sin `aria-label` envolvente), simplificar el ejemplo. Las dos formas son válidas — la diferencia es flexibilidad cuando hay variantes del logo.

---

## Momento 4: Formularios accesibles (Parte 4 del lab)

> **Estado:** Borrador
> **Paneles del Momento:** 3

### Panel 4.1 — El `<form>`: el sobre que agrupa y envía

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 4.1 "El <form>: el sobre que agrupa y envía". Modo preparado de antemano. Ver mi-sistema/clase-01/GUIA EXCALIDRAW - CLASE 01.md → Panel 4.1.**`
- **Patrón canónico:** **Patrón 2 (Caja de definición)** para la cabecera + **Patrón 7 (Wireframe miniatura)** para el formulario de papel + **Patrón 3 (Comparativa)** para inputs huérfanos vs con form.
- **Modo:** Preparado de antemano.
- **Concepto pedagógico que visualiza:**
  - (a) El `<form>` es contenedor — agrupa campos relacionados bajo una unidad de envío.
  - (b) Mapeo directo entre formulario de papel (banco, migraciones, gimnasio) y elementos HTML: hoja → `<form>`, casilla → `<input>`, texto al lado → `<label>`, casilla "Firmar/Enviar" → `<button type="submit">`.
  - (c) Sin `<form>` envolvente, un `<input>` funciona en pantalla pero no se envía a ningún lado.

---

**Contenido del panel:**

### Bloque A — Cabecera (Patrón 2)

- **Título** (rojo `#e03131`, 36px): `"El elemento <form>"`
- **Definición técnica** (negro `#1e1e1e`, 22px): `"Contenedor que agrupa campos para enviarlos como una sola unidad"`
- **Etimología** (gris, 14px, italic): `"form ← latín 'formula' = molde con espacios para rellenar"`

---

### Bloque B — Mapeo formulario de papel → HTML (Patrón 7)

Layout: dos columnas paralelas con título central "Mapeo".

**Columna izquierda — Formulario de papel** (wireframe miniatura, stroke `#1e1e1e`):
- Encabezado de columna (azul `#1971c2`, 20px bold): `"Formulario de papel"`
- Wireframe de una hoja A4 con:
  - Título arriba (texto): `"Inscripción al Gimnasio"`
  - Tres casillas (rectángulos con línea inferior larga) con texto al lado:
    - `Nombre: ___________________`
    - `Correo: ___________________`
    - `Mensaje: __________________`
  - Casilla pequeña abajo con texto: `[ Firmar ]`

**Columna derecha — Mismo formulario en HTML** (mismo wireframe etiquetado con código):
- Encabezado de columna (naranja `#f08c00`, 20px bold): `"Mismo formulario en HTML"`
- Wireframe idéntico pero cada elemento etiquetado en monospace con su etiqueta HTML:
  - Toda la hoja → label flotante `"<form>"`
  - Texto al lado de cada casilla → label flotante `"<label>"`
  - Cada línea de input → label flotante `"<input>"`
  - Casilla "Firmar" → label flotante `"<button type='submit'>"`

**Flechas de conexión** entre cada elemento de papel y su contraparte HTML, stroke `#2f9e44` verde, fontSize 12.

---

### Bloque C — Comparativa inputs huérfanos vs inputs con form (Patrón 3)

Layout: dos sub-bloques debajo del Bloque B.

**Izquierda — Inputs sin `<form>` (rojo `#e03131`):**
- Encabezado (rojo, 18px bold): `"❌ Inputs sueltos"`
- Tres líneas de input dibujadas SIN ningún contenedor alrededor.
- Etiqueta debajo (rojo, 14px): `"Funcionan en pantalla, pero no se envían a ningún lado"`
- Pequeño icono de papel cayéndose al piso (text emoji 📄 + flecha cayendo).

**Derecha — Inputs con `<form>` (verde `#2f9e44`):**
- Encabezado (verde, 18px bold): `"✓ Inputs en <form>"`
- Tres líneas de input dibujadas DENTRO de un rectángulo grande etiquetado `<form>`.
- Flecha grande saliendo del rectángulo hacia la derecha con etiqueta: `"→ envío al action"`
- Etiqueta debajo (verde, 14px): `"Agrupados, listos para enviarse al servidor"`

---

**Snippets de código embebidos:** las etiquetas HTML del Bloque B se renderizan como text en monospace dentro del panel. No agregar snippets adicionales.

**Imágenes embebidas:** ninguna. El wireframe del formulario de papel se dibuja con primitivas (rectángulos, líneas).

**Anchor pedagógico:** El alumno conecta `<form>` con un objeto físico que ya conoce — formulario de papel — y ve uno a uno cómo cada elemento del papel se mapea a una etiqueta HTML. La memoria visual queda anclada.

**Notas para Eric:**
- Si quieres un formulario de papel específico que el alumno reconozca instantáneamente, usar uno de los tres más comunes en Perú: solicitud bancaria, ficha de migraciones, inscripción al gimnasio/curso. Elegí "Inscripción al Gimnasio" arriba por simpleza — pero cualquiera funciona.
- El Bloque C (comparativa huérfanos vs con form) puede mostrarse al final como cierre dramático: *"Sin form, los datos quedan sueltos. Con form, los datos viajan."* Decisión opcional.

---

### Panel 4.2 — Asociación `<label for>` ↔ `<input id>`

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 4.2 "Asociación <label for> ↔ <input id>". Modo preparado de antemano. Ver mi-sistema/clase-01/GUIA EXCALIDRAW - CLASE 01.md → Panel 4.2.**`
- **Patrón canónico:** **Patrón 1 (Anatomía de sintaxis)** para el snippet con flechas binding + **Patrón 3 (Comparativa)** para el caso con/sin asociación + caja de definición para regla del placeholder.
- **Modo:** Preparado de antemano.
- **Concepto pedagógico que visualiza:**
  - (a) Cómo `for` del label apunta al `id` del input — coincidencia exacta de valor.
  - (b) Qué anuncia el lector de pantalla con vs sin la asociación.
  - (c) Regla absoluta: placeholder NO reemplaza al label.

---

**Contenido del panel:**

### Bloque A — Cabecera

- **Título** (rojo `#e03131`, 36px): `"<label for> ↔ <input id>"`
- **Subtítulo** (negro, 20px): `"La asociación que vuelve accesibles los inputs"`

---

### Bloque B — Anatomía de la asociación (Patrón 1)

Layout: snippet de código en el centro con flecha curva conectando los dos atributos.

```html
<label for="email">Correo electrónico</label>
<input  type="email"  id="email"  name="email">
```

- **Snippet** (rectángulo stroke `#1971c2`, fontSize 22 monospace).
- **Flecha curva** (stroke `#f08c00` naranja, grosor 3) conectando `for="email"` con `id="email"`. Ambos valores resaltados en naranja.
- **Etiqueta sobre la flecha** (naranja, 16px bold): `"mismo valor — coincidencia exacta"`
- **Sub-etiqueta inferior** (gris `#1e1e1e`, 14px): `"label ← francés 'rótulo' · id = identificador único · name = nombre del campo al enviar"`

---

### Bloque C — Qué anuncia el lector de pantalla (Patrón 3)

Layout: dos sub-bloques paralelos.

**Izquierda — Con asociación (verde `#2f9e44`):**
- Encabezado (verde, 20px bold): `"✓ Con for/id correctos"`
- Ícono de orejas / lector de pantalla.
- Globo de habla del lector (rectángulo con cola, stroke `#1e1e1e`): `"Correo electrónico, edición de texto"`
- Pie (verde, 12px): `"El usuario sabe qué meter"`

**Derecha — Sin asociación (rojo `#e03131`):**
- Encabezado (rojo, 20px bold): `"❌ Sin label, solo placeholder"`
- Ícono de orejas / lector de pantalla.
- Globo de habla del lector: `"edición de texto"`
- Pie (rojo, 12px): `"Sin contexto · campo ambiguo"`

---

### Bloque D — Regla del placeholder

Layout: banner horizontal con caja de definición.

- Banner stroke `#1e1e1e`, fill transparente.
- Texto centrado (negro, 22px bold): `"placeholder ≠ label"`
- Sub-texto (gris, 16px): `"El placeholder desaparece al escribir. El label se queda visible siempre. Y el lector no anuncia placeholder de forma confiable."`

---

### Bloque E — Cierre absoluto (Patrón C de Eric §3.1)

Banner inferior centrado, stroke negro `#1e1e1e` grueso:
- Texto (rojo `#e03131`, 26px bold): `"Si haces clic en el label y el cursor salta al input, está bien. Si no salta, está mal."`

---

**Snippets de código embebidos:** el snippet del Bloque B. No agregar más.

**Imágenes embebidas:** ninguna. Las "orejas" y "globos de habla" son emojis (👂, 💬) o primitivas (rectángulos con cola dibujada).

**Anchor pedagógico:** El Panel 4.2 es la columna vertebral del Momento 4. Después de la demo táctil en vivo, el alumno vuelve mentalmente a este panel — el snippet con la flecha entre `for` y `id` se queda como imagen de referencia.

**Notas para Eric:**
- El Bloque E (cierre absoluto) es la frase que el alumno se debe llevar tatuada. Está deliberadamente destacado.
- Si quieres reforzar el caso del lector de pantalla, podemos usar paletas de notas musicales o emojis (🔊) — pero los globos de habla son suficientes.
- Sobre la elección de nombre `"email"` (vs `"correo"`, `"mail"`): mencionar en clase que es arbitrario. La regla es coincidencia, no nombre específico.

---

### Panel 4.3 — `<input type>` + `<button type="submit">`: el dato esperado y el envío

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 4.3 "<input type> + <button type=\"submit\">: el dato esperado y el envío". Modo preparado de antemano. Ver mi-sistema/clase-01/GUIA EXCALIDRAW - CLASE 01.md → Panel 4.3.**`
- **Patrón canónico:** **Patrón 2 (Caja de definición)** para los dos conceptos + **Patrón 8 (Bloque de código con leyenda lateral)** para la tabla de `type`.
- **Modo:** Preparado de antemano.
- **Concepto pedagógico que visualiza:**
  - (a) `type` declara qué dato esperar — cambia el teclado móvil y activa validación nativa básica.
  - (b) Comparativa visual `<input>` (un renglón) vs `<textarea>` (múltiples líneas).
  - (c) `<button type="submit">` dispara la validación nativa + el envío. Por defecto recarga la página con los datos.

---

**Contenido del panel:**

### Bloque A — Cabecera

- **Título** (rojo `#e03131`, 36px): `"<input type> + <button type=\"submit\">"`
- **Subtítulo** (negro, 20px): `"El dato esperado y el botón que envía"`

---

### Bloque B — `<input type>` con analogía del teclado (Patrón 2 + Patrón 8)

- **Sub-título** (azul `#1971c2`, 24px bold): `"<input type=\"...\">"`
- **Definición técnica** (negro, 16px): `"Declara qué tipo de dato esperar. Cambia el teclado móvil + activa validación nativa básica."`
- **Etimología** (gris, 12px italic): `"input = entrada de datos"`

**Analogía visual — dos celulares lado a lado:**
- Izquierda: celular mostrando teclado QWERTY normal (etiqueta: `type="text"`).
- Derecha: celular mostrando teclado con `@` y `.` visibles (etiqueta: `type="email"`).
- Pie centrado (gris, 14px): `"El campo le declara al sistema qué teclado mostrar"`

**Tabla de los 5 type comunes** (formato Patrón 8):

| `type` | Teclado en móvil | Validación nativa |
|---|---|---|
| `text` | Teclado normal | Ninguna |
| `email` | Teclado con `@` accesible | Bloquea envío si no tiene `@` |
| `password` | Teclado normal, oculta caracteres | Ninguna |
| `number` | Numpad numérico | Solo acepta números |
| `tel` | Numpad telefónico | Ninguna (solo cambia teclado) |

- Tabla con stroke `#1971c2`, fontSize 14 monospace.
- Cabecera de tabla con fondo suave azul `#a5d8ff`.

---

### Bloque C — `<input>` vs `<textarea>` (Patrón 3)

Layout: dos sub-cajas paralelas.

**Izquierda — `<input type="text">`:**
- Encabezado: monospace `<input type="text">`
- Visualización: caja delgada (1 renglón), stroke `#1e1e1e`.
- Pie (azul, 12px): `"Un solo renglón · short text"`

**Derecha — `<textarea>`:**
- Encabezado: monospace `<textarea>`
- Visualización: caja grande (5 renglones), stroke `#1e1e1e`, con ícono de "redimensionar" en la esquina inferior derecha.
- Pie (azul, 12px): `"Múltiples líneas, redimensionable · long text"`

- Etiqueta general debajo de los dos (gris, 14px italic): `"En C01 seguimos el lab con <input>. En producción, Mensaje real = <textarea>."`

---

### Bloque D — `<button type="submit">` (Patrón 2)

- **Sub-título** (azul `#1971c2`, 24px bold): `"<button type=\"submit\">"`
- **Definición técnica** (negro, 16px): `"Dispara la validación nativa + el envío del formulario"`
- **Etimología** (gris, 12px italic): `"submit ← latín 'submittere' = someter para procesamiento"`

**Visualización — botón estilo navegador:**
- Rectángulo redondeado con fill suave azul `#a5d8ff`, stroke `#1971c2`, texto `Enviar` adentro en negro.

**Flujo del submit** (diagrama horizontal con 3 cajas + flechas, Patrón 4 simplificado):
```
[ 1. Validar inputs (type, required, pattern) ]
              ↓
[ 2. Recopilar datos (URL si GET, body si POST) ]
              ↓
[ 3. Recargar al action (default = misma página) ]
```

- Las 3 cajas con stroke `#1e1e1e`, números en `#f08c00` naranja.
- Flechas verticales conectando.

---

### Bloque E — Forward-references (pie del panel)

- Texto centrado (gris `#1e1e1e`, 14px italic):
  - `"En C04 → validación enriquecida: required, pattern, minlength, <select>, <checkbox>."`
  - `"En C07 → interceptar submit con JavaScript (event.preventDefault())."`

---

**Snippets de código embebidos:** los nombres de atributos y etiquetas se renderizan en monospace dentro del panel. No agregar snippets adicionales aparte del visual del botón Enviar.

**Imágenes embebidas:** ninguna. Los celulares se dibujan con rectángulos redondeados + grilla de teclado simplificada (rectángulos pequeños representando teclas).

**Anchor pedagógico:** El alumno se lleva tres imágenes mentales: (1) el teclado del celular que cambia según `type`, (2) la diferencia visual `<input>` vs `<textarea>`, (3) la cadena de 3 pasos al apretar submit.

**Notas para Eric:**
- Si los celulares se ven complicados de dibujar, simplificar a dos rectángulos con etiqueta `"QWERTY"` y `"QWERTY + @"` adentro. La analogía sirve igual.
- El Bloque E (forward-references) es deliberadamente pequeño — no queremos que distraiga. Solo siembra que esto crece en C04 y C07.
- Si Eric prefiere mostrar la tabla de `type` como cajas separadas en lugar de tabla, se puede convertir en Patrón 8 estricto (un bloque por type). La tabla es más compacta y cabe mejor en el panel.

---

## Momento 5: Checkpoint Tab Nav + Cierre de Clase

> **Estado:** Borrador
> **Paneles del Momento:** 1

### Panel 5.1 — Navegación por teclado: orden del foco según el DOM

- **Trigger en el guion:** `**EN PANTALLA: EXCALIDRAW — Panel 5.1 "Navegación por teclado: orden del foco según el DOM". Modo preparado de antemano. Ver mi-sistema/clase-01/GUIA EXCALIDRAW - CLASE 01.md → Panel 5.1.**`
- **Patrón canónico:** **Patrón 2 (Caja de definición)** para la cabecera con los 3 comandos + **Patrón 3 (Comparativa)** para orden correcto vs roto + caja de anti-regla `outline: none`.
- **Modo:** Preparado de antemano.
- **Concepto pedagógico que visualiza:**
  - (a) Los 3 comandos de teclado y qué hace cada uno (Tab avanza, Shift+Tab retrocede, Enter/Space activa).
  - (b) El foco sigue el orden del DOM, no el orden visual — comparativa correcto vs roto.
  - (c) Anti-regla absoluta para C02: `outline: none` rompe A11y.
- **Sin analogía:** Tab es un concepto suficientemente concreto y la demo en vivo de Eric en su landing es la mejor "prueba" que existe. No forzar metáfora.

---

**Contenido del panel:**

### Bloque A — Cabecera + los 3 comandos (Patrón 2)

- **Título** (rojo `#e03131`, 36px): `"Navegación por teclado"`
- **Subtítulo** (negro `#1e1e1e`, 22px): `"El foco recorre los elementos en el orden del DOM"`
- **Etimología** (gris, 14px italic): `"Tab ← tabulador (máquinas de escribir: saltar a la siguiente columna)"`

**Tabla de los 3 comandos** (formato Patrón 8 compacto):

| Tecla | Qué hace |
|---|---|
| `Tab` | Avanza al siguiente elemento interactivo |
| `Shift + Tab` | Retrocede al anterior |
| `Enter` / `Space` | Activa el elemento enfocado (sigue link, presiona botón) |

- Tabla con stroke azul `#1971c2`, fontSize 16 monospace en la columna de teclas, fontSize 14 negro en la columna de "Qué hace".

---

### Bloque B — Comparativa: orden correcto vs orden roto (Patrón 3)

Layout: dos sub-bloques paralelos, cada uno con un mini-wireframe de landing.

**Izquierda — Orden correcto (verde `#2f9e44`):**
- Encabezado (verde, 20px bold): `"✓ Orden lógico"`
- Mini-wireframe vertical de landing con 5 elementos:
  - `1` logo
  - `2` menú (3 enlaces)
  - `3` contenido principal
  - `4` campos del form
  - `5` botón submit
- Flechas naranjas numeradas conectando cada elemento en orden secuencial.
- Pie (verde, 12px): `"El usuario con teclado recorre la página sin perderse"`

**Derecha — Orden roto (rojo `#e03131`):**
- Encabezado (rojo, 20px bold): `"❌ Orden ilógico"`
- Mismo wireframe pero las flechas saltan:
  - Va `menú → submit → input nombre → input correo → logo`.
- Las flechas cruzan visualmente entre sí (desorden gráfico).
- Pie (rojo, 12px): `"El usuario queda perdido · A11y rota"`

**Mensaje central debajo de ambas columnas** (negro, 16px italic): `"El foco sigue el orden del HTML, no el orden visual. Mantén orden DOM = orden visual."`

---

### Bloque C — Anti-regla absoluta para C02

Layout: banner inferior con caja de advertencia.

- Banner stroke `#e03131` rojo, grosor 3, fill transparente.
- Símbolo de advertencia ⚠️ a la izquierda del texto.
- Texto principal (rojo, 22px bold): `"NUNCA: outline: none sin reemplazar"`
- Sub-texto (negro, 14px): `"Si no quieren el contorno azul, dibujen otro indicador. El foco SIEMPRE debe ser visible. Sin foco visible, A11y rota."`

---

**Snippets de código embebidos:** solo `outline: none` en el Bloque C.

**Imágenes embebidas:** ninguna. Los wireframes del Bloque B son rectángulos con label.

**Anchor pedagógico:** El panel es deliberadamente técnico y compacto. Los 3 comandos están en pantalla mientras Eric explica, la comparativa correcto/roto visualiza la regla del orden DOM, y la anti-regla `outline: none` siembra la advertencia para C02. La demo en vivo de Eric en su landing es la prueba que cierra el sub-punto — no hace falta metáfora intermedia.

**Notas para Eric:**
- El Bloque B (comparativa) se puede dejar muy minimalista — wireframes pequeños con números. Lo importante son las flechas: ordenadas (verde) vs cruzadas (rojo). El contraste visual habla solo.
- Si quieres reforzar la regla del DOM, agregar un mini-snippet en el Bloque B derecho mostrando un CSS con `flex-direction: row-reverse` o `order: -1` que cambia el orden visual SIN cambiar el DOM — pero esto puede sobrecargar el panel y es contenido de C02 estricto. Decisión opcional.
- Si encuentras que el Bloque C (anti-regla) se ve muy chico al fondo, puede subirse al medio del panel — la advertencia se merece prominencia.

---

# CIERRE DE LA GUÍA — CLASE 01

**Estado:** Todos los Momentos cerrados con sus paneles documentados.
**Total paneles:** 11.
**Pendiente:** validación de Eric panel por panel (cambiar `> **Estado:** Borrador` por `> **Estado:** Validado ✓` en cada uno).

Una vez todos validados, invocar `excalidraw-system` para generar los archivos `.excalidraw` proyectables:
- `mi-sistema/CLASE 01 - Panel 1.1.excalidraw`
- `mi-sistema/CLASE 01 - Panel 2.1.excalidraw`
- ... (uno por panel, o un único archivo con todos los paneles en timeline horizontal según prefiera Eric — ver `excalidraw-system/SKILL.md §8`).

**Recordatorio:** `instructor-system` NO genera los `.excalidraw` directamente. Esa responsabilidad es de `excalidraw-system` invocado por separado cuando la Guía esté validada (parcial o totalmente).
