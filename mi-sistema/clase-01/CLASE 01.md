# CLASE 01: HTML5 Semántico, Accesibilidad y Formularios

> **Módulo:** M1 — clase 1 de 4
> **Curso:** Code 201
> **Proyecto Víctima:** Product Landing Page (continúa en C02–C04)
> **Estado:** Capa 1 (estructura de Momentos) — pendiente revisión de Eric
> **Fecha:** 2026-05-13
> **Base teórica:** **_mi-sistema/clase-01/CAPA 0 - CLASE 01.md_**

---

## Metadatos de la clase

| | |
|---|---|
| Duración real de clase | 3h (180 min) |
| Tiempo preparado | 2h 30min (150 min) |
| Receso | 30 min (entre M2 y M3) |
| Colchón invisible | ≥30 min |
| Total Momentos | 5 |
| Herramientas nuevas | HTML semántico + Forms básicos (MAX_TWO_NEW_TOOLS ✓) |
| A11y | Transversal (no cuenta como herramienta nueva) |
| Git/GitHub | Repaso, no concepto nuevo (anexo del lab) |
| 🚨 Errores Comunes por Momento | **No se generan en C01** (decisión Eric). La gestión de errores se atiende en vivo según surjan, no como sección preparada del guion. |

---

## Tabla de tiempos

| # | Momento | Foco principal | Tiempo | Parte del lab |
|---|---|---|---|---|
| **M1** | Bienvenida + Setup del Proyecto Víctima | Crear repo, recordar Git, boilerplate del **_index.html_** | **30 min** | Parte 1 |
| **M2** | HTML5 Semántico + Jerarquía de encabezados | Estructurar la landing con **_<header>_**, **_<nav>_**, **_<main>_**, **_<section>_**, **_<footer>_** + jerarquía h1–h2 correcta | **35 min** | Parte 2 |
| | **RECESO** | | **30 min** | — |
| **M3** | Accesibilidad básica | **_alt_** en imágenes, **_aria-label_** y roles cuando hagan falta | **25 min** | Parte 3 |
| **M4** | Formularios accesibles | El elemento **_<form>_** como contenedor + label/input + type + submit | **40 min** | Parte 4 |
| **M5** | Checkpoint Tab Nav + Cierre | Navegación por teclado, screenshot del foco, commit final, entrega | **20 min** | Checkpoint A11y |
| | **Colchón** | Preguntas, retrasos, instalaciones, debate extendido | **≥30 min** | — |
| | **Total preparado** | | **150 min** | |

---

## Cadena problema → solución

```
M1: "No tenemos dónde construir"
        ↓ (creamos repo + boilerplate)
M2: "Tenemos un HTML que renderiza pero no comunica
     nada al navegador ni al lector de pantalla"
        ↓ (etiquetas semánticas dan rol a cada bloque)
RECESO
M3: "La estructura está, pero las imágenes y elementos
     sin texto siguen siendo invisibles para A11y"
        ↓ (alt + aria-label + role cuando hace falta)
M4: "La landing comunica e incluye, pero no captura
     ningún dato del visitante"
        ↓ (formulario accesible: <form> + label/input + submit)
M5: "Todo se ve bien — pero ¿es realmente accesible?"
        ↓ (prueba final con teclado: el alumno vive A11y, no la describe)
```

Cada problema está demostrado en vivo (no narrado abstracto) y la solución viene del siguiente momento. Pasa el test de §5.3.

---

## Mapeo Momentos ↔ Lab ↔ Conceptos de Capa 0

| Momento | Parte del lab | Conceptos de Capa 0 que toca |
|---|---|---|
| M1 | Parte 1 (Git + estructura de carpetas) | Anexo A (Git/GitHub repaso) — no concepto nuevo |
| M2 | Parte 2 (Estructura semántica) | 1 (HTML5 Semántico), 2 (Jerarquía de encabezados) |
| M3 | Parte 3 (A11y básica) | 3 (A11y transversal), 4 (**_alt_**), 5 (**_aria-label_** y roles ARIA) |
| M4 | Parte 4 (Formulario de contacto) | 6 (**_<form>_**), 7 (**_<label for>_** ↔ **_<input id>_**), 8 (**_<input type>_**), 9 (**_<button type="submit">_**) |
| M5 | Checkpoint Tab nav + Entrega | 10 (Navegación por teclado y orden de foco) |

**Validación de paridad Momento ↔ Parte del lab** (regla §8 de **_M1-cambios-propuestos.md_**):
- ✅ Cada Momento de code-along (M2, M3, M4) cita una Parte específica del lab cuyos sub-pasos **_X.Y_** Eric puede leer verbatim.
- ✅ Cada concepto enseñado en Capa 0 tiene su aplicación al proyecto víctima en una Parte del lab.
- ✅ Ningún concepto huérfano de aplicación.

---

## MOMENTO 1: Bienvenida + Setup del Proyecto Víctima

**Tiempo:** ~30 min
**Parte del lab:** Parte 1 (Crear estructura base del proyecto)

> **OBJETIVO:** Cada alumno tiene un repo de GitHub creado, un **_product-landing-page/_** con **_index.html_** boilerplate, y el primer commit subido.

> **Nota táctica de inicio: La bienvenida la hace Eric con slide propio**
> La bienvenida al curso, presentación del cohort y encuadre general del Code 201 los cubre Eric improvisando con un slide de bienvenida ANTES de entrar a este Momento. Este guion arranca cuando Eric pasa del slide a la pantalla técnica. El Momento 1 es la **Parte 1 del lab hecha en vivo con los alumnos** — no es repaso paralelo, es la práctica misma.

### Sub-puntos

1. **Encuadre del Proyecto Víctima del M1** (~3 min)
   - Sin saludo (ya lo dio Eric con su slide). Arranque técnico: presentar el **Product Landing Page** como el proyecto que crece durante las 4 clases del M1.
   - 1 frase de qué se hace hoy: estructura semántica, accesibilidad básica, formulario de contacto.
   - 1 frase de cómo crece en C02–C04 (Flexbox / responsivo / Variables + Forms validados).
   - **No se proyecta demo de referencia.** El demo del facilitator (**_facilitator/demo/product-landing-page/_**) solo tiene HTML sin CSS ni imágenes — se ve roto. El "destino" se construye en clase, no se proyecta antes.
   - Transición inmediata: *"Vamos a empezar montando el proyecto. Eso es la Parte 1 del lab."*

2. **Git + GitHub: explicación completa + crear repositorio + conectar local** (~15 min)
   - **Explicar Git y GitHub con detalle**, no como recordatorio express. Primer día del 201, mezcla de niveles. Vale la pena reexplicar:
     - **Git:** qué es (sistema de control de versiones), qué problema resuelve (poder volver atrás, ver historial, colaborar sin pisarse), por qué local.
     - **GitHub:** qué es (plataforma en la nube), qué problema resuelve (respaldo, compartir, portafolio público, colaboración).
   - Etimología (**_git_** ← jerga británica de Linus Torvalds, "tipo desagradable" — anécdota corta de origen).
   - Comandos uno por uno con qué hace cada uno: **_git init_**, **_git status_**, **_git add_**, **_git commit -m_**, **_git remote add origin_**, **_git push -u origin main_**. Anexo del lab disponible: **_git-and-github-basics-guide.md_**.
   - Cada alumno crea el repositorio **_product-landing-page_** en GitHub (Public, **sin** README/.gitignore/license marcados — lo arman localmente).
   - Conectar local con remoto vía **_git remote add origin_**.
   - **Checkpoint:** cada alumno pega la URL de su repo vacío en el chat antes de seguir.

3. **Estructura de carpetas + Boilerplate del **_index.html_** + primer commit** (~12 min)
   - Crear estructura: **_product-landing-page/_**, **_index.html_**, **_css/styles.css_** (vacío), **_img/_** (vacía).
   - Escribir el boilerplate del **_index.html_** (DOCTYPE, **_<html lang="es">_**, **_<meta charset>_**, **_<meta viewport>_**, **_<title>_**, **_<link>_** a CSS). **_<body>_** vacío por ahora.
   - Abrir con Live Server: pestaña dice "Mi Producto", body en blanco — es lo esperado.
   - **Reto autónomo del lab:** favicon con **_<link rel="icon">_** — se menciona como tarea, no se resuelve en clase.
   - Primer commit: **_git add . && git commit -m "feat: setup inicial del Product Landing Page" && git push -u origin main_**.
   - **Checkpoint físico de cierre:** cada alumno comparte URL del repo en GitHub (refrescada — ya con los archivos visibles en el sitio).

**Cadena hacia M2:** Tienen el esqueleto: repo, boilerplate, primer commit. El **_<body>_** está vacío. El primer instinto del alumno es llenar todo con **_<div>_** — vamos a ver por qué eso es un problema antes de escribir la primera etiqueta del cuerpo.

---

## MOMENTO 2: HTML5 Semántico + Jerarquía de encabezados

**Tiempo:** ~35 min
**Parte del lab:** Parte 2 (Estructura Semántica de la Landing Page)

> **OBJETIVO:** La landing tiene **_<header>_**, **_<nav>_**, **_<main>_**, **_<section>_** y **_<footer>_** correctamente anidados, con un único **_<h1>_** y **_<h2>_** por cada sección principal.

> **Nota táctica de inicio: Romper el sesgo del **_<div>_**-soup**
> Muchos alumnos llegan creyendo que HTML = "etiquetas para mostrar texto". Hoy descubren que cada etiqueta tiene un **rol semántico** que el navegador y el lector de pantalla leen distinto. Si alguno dice "ya sé HTML", repreguntar: *"¿qué rol tiene **_<header>_** que no tiene **_<div>_**? ¿qué hace un screen reader cuando llega a un **_<nav>_**?"*

### Sub-puntos

1. **Problema en vivo: **_<div>_**-soup vs etiquetas con significado** (~7 min)
   - Demo en vivo: dos versiones de la misma landing renderizadas idénticas — una con **_<div class="header">_**, **_<div class="nav">_**, etc., y otra con **_<header>_**, **_<nav>_**, etc.
   - Abrir DevTools → pestaña Accessibility en ambas. Mostrar el árbol de accesibilidad: la primera es un mar gris sin landmarks; la segunda tiene **_banner_**, **_navigation_**, **_main_**, **_contentinfo_** rotulados.
   - Debate corto del facilitator (mitos 1 y 3 del solucionario): *"Usar **_<div>_** para cada sección es la mejor forma de estructurar"* — falso. *"La semántica HTML no influye en SEO"* — falso.

2. **Las 7 etiquetas semánticas principales** (~8 min)
   - **_<header>_**, **_<nav>_**, **_<main>_**, **_<section>_**, **_<article>_**, **_<aside>_**, **_<footer>_**. Para cada una: rol semántico + cuándo usarla. Etimología pegada (header = encabezado, nav = navigation, aside = al costado, footer = pie).
   - **Estrategia visual:** Excalidraw vivo de una página dividida en cajas semánticas anidadas — Patrón 1 de **_excalidraw-system_** (Anatomía visual).
   - Decisión sobre **_<article>_** y **_<aside>_**: **pendiente** (Anexo B Capa 0) — el landing no los necesita; mencionar de pasada como "existen para blog y sidebar, los van a usar después".

3. **Jerarquía de encabezados h1–h6** (~5 min)
   - Un único **_<h1>_** por página (el título principal, el del hero). **_<h2>_** para cada sección principal. **_<h3>_** para subsecciones. Secuencial — no saltar niveles.
   - Demo con DevTools → pestaña Accessibility → vista de Headings: mostrar el índice navegable que genera un screen reader.
   - Mito 9 del solucionario (verdadero): *"Un orden lógico de encabezados facilita la navegación con lectores de pantalla."*

4. **Code-along del lab Parte 2** (~15 min)
   - Aplicar al **_index.html_** del Product Landing Page: **_<header>_** con **_<nav>_** de enlaces, **_<main>_** con **_<section id="hero">_** (h1), **_<section>_** con **_<h2>Características</h2>_**, **_<footer>_** con info de contacto.
   - Sub-pasos del lab 2.1 y 2.2 — leerlos verbatim.
   - **Checkpoint físico:** cada alumno pega en el chat un bloque de código de su **_<body>_** y abre la página con Live Server. Validar 2-3 casos al azar.

> **Decisión pendiente para Capa 2+3:** Roles ARIA redundantes en el solucionario (**_role="banner"_**, **_role="navigation"_**, **_role="main"_**, **_role="contentinfo"_**). Opciones: (a) replicar tal cual el solucionario para alinearse con el facilitator, (b) omitirlos siguiendo la regla #1 de ARIA, (c) mostrarlos como ejemplo y explicar por qué son redundantes (más pedagógico pero come tiempo). **Recomendación inicial:** opción (c) en M3, no en M2.

**Cadena hacia M3:** La estructura semántica ya da landmarks al navegador. Pero la landing tiene imágenes, íconos y enlaces sin texto descriptivo — el screen reader sigue ciego frente a ellos. Eso lo arreglamos en el siguiente bloque.

---

## RECESO — 30 min

Negociable con el grupo: *"Tomamos los 30 minutos completos o partimos en 20 + 10 al final?"* — patrón Eric §11.

---

## MOMENTO 3: Accesibilidad básica

**Tiempo:** ~25 min
**Parte del lab:** Parte 3 (Accesibilidad Básica)

> **OBJETIVO:** Todas las imágenes del landing tienen **_alt_** apropiado (informativo o vacío según rol); los elementos sin texto visible (íconos sociales, botones de ícono si los hay) tienen **_aria-label_**; el alumno conoce la regla #1 de ARIA.

> **Nota táctica de inicio: A11y no es solo para discapacidad**
> Romper el mito de que A11y es "para invidentes" (mito 6 del solucionario). Cualquier persona en el metro con audífonos rotos, con una lesión temporal, o navegando rápido con teclado se beneficia. Conectar con el numeronym A11y para que se les pegue.

### Sub-puntos

1. **A11y como criterio transversal** (~5 min)
   - Definición concisa de A11y (estilo guion). Etimología del numeronym (A11y = accessibility con 11 letras intermedias; i18n, l10n del mismo patrón).
   - Mitos 4 y 6 del solucionario en debate corto: *"alt solo sirve para SEO de Google"* y *"solo personas con discapacidad visual se benefician"* — ambos falsos.
   - WCAG mencionado como estándar (1 frase) + implicación legal en varios países (1 frase). Sin profundizar.

2. **Texto alternativo (**_alt_**)** (~7 min)
   - Tres casos: informativa (**_alt="Logotipo del producto Mi Producto Estrella"_**), decorativa (**_alt=""_**), omisión (mala práctica — el lector anuncia "imagen" sin contexto).
   - Demo con DevTools → pestaña Accessibility o lector real (NVDA/VoiceOver si Eric lo tiene listo). Bonus: simular imagen rota cortando red en DevTools para que el **_alt_** se muestre en pantalla.

3. **ARIA: **_aria-label_** y roles** (~5 min)
   - **Regla #1 de ARIA:** *"No usar ARIA cuando una etiqueta HTML nativa hace el trabajo."*
   - **_aria-label_** cuando un elemento no tiene texto visible (ícono de redes sociales como en el demo del facilitator, botón con solo ícono).
   - Roles ARIA: existen, pero **_<nav>_** ya implica **_role="navigation"_** — no duplicar. Discutir el caso del solucionario que sí los duplica como decisión de diseño defensiva (compatibilidad con navegadores antiguos / explicitud).

4. **Code-along del lab Parte 3** (~8 min)
   - Agregar **_alt_** a todas las imágenes del landing (logo, íconos de características, imágenes de galería si las hay).
   - Agregar **_aria-label_** a los íconos de redes sociales del **_<footer>_** (caso real del demo del facilitator).
   - **Reto autónomo del lab:** ícono de red social accesible — resolver en clase como caso guiado.
   - **Checkpoint físico:** cada alumno corre Lighthouse (DevTools → Lighthouse → Accessibility) y comparte el score en el chat. Objetivo: ≥90.

**Cadena hacia M4:** La landing ahora comunica e incluye al lector de pantalla. Pero hasta aquí no captura ningún dato del visitante — el sitio es solo lectura. Para una landing real hay que poder convertir visitante en lead. Y la forma estándar de capturar datos en HTML es el formulario. Pero un formulario sin A11y es la primera prueba de fuego de todo lo que aprendimos — ahí lo van a comprobar.

---

## MOMENTO 4: Formularios accesibles

**Tiempo:** ~40 min ⚠️ momento más pesado de la clase
**Parte del lab:** Parte 4 (Formulario de contacto accesible)

> **OBJETIVO:** Cada alumno tiene un **_<form>_** de contacto en su landing con **_<label for>_** correctamente asociado a cada **_<input id>_**, **_<input type="text">_** y **_<input type="email">_** apropiados, y un **_<button type="submit">_** explícito.

> **Nota táctica de inicio: Forms son aplicación natural de A11y**
> Los formularios son la prueba de fuego de A11y. Un form sin **_<label for>_** no es "feo" — es **invisible** para el lector de pantalla. Aquí el alumno va a vivir en carne propia la importancia de lo que aprendió en M3. Si alguien dice *"y si solo uso placeholder?"* — es la pregunta perfecta, llevarla al sub-punto 4.2.

### Sub-puntos

1. **El elemento **_<form>_** como contenedor** (~8 min)
   - Definición de formulario web + el elemento **_<form>_** como contenedor. Etimología (**_form_** ← *formula* latín).
   - Atributos **_action_** y **_method_**: mencionados como existencia, sin profundizar. Default: GET, mismo URL.
   - Comportamiento default al hacer submit sin JS: recarga la página con datos en la URL (esperado, no bug). Mención forward a C07 donde se intercepta con JS.
   - **Estrategia visual:** Excalidraw vivo — **_<form>_** como caja contenedora con campos dentro y flecha al servidor, comparado con inputs huérfanos (Patrón a definir en Guía Excalidraw).

2. **Asociación **_<label for>_** ↔ **_<input id>_**** (~10 min) — núcleo del momento
   - Concepto: el **_for_** del label apunta al **_id_** del input. Sin esa asociación, el lector solo anuncia "edición de texto" sin contexto.
   - **Demo táctil obligatoria:** en VS Code escribir un par label/input con **_for/id_** correctos; hacer clic en el texto del label en el navegador → el cursor salta al input. *"Si el cursor salta, está bien. Si no salta, está mal."*
   - El placeholder NO reemplaza al label (mito 2 del solucionario). Demo: escribir algo en un input con placeholder → el placeholder desaparece y el contexto se pierde.

3. ****_<input type>_** y **_<button type="submit">_**** (~7 min)
   - **_type_** define qué dato se espera y activa validación nativa básica + cambia teclado móvil. En C01 solo **_text_** y **_email_**. Mención forward a C04 (**_required_**, **_pattern_**, validación enriquecida).
   - **_<button type="submit">_** envía el formulario; explicitar el type aunque el default funcione.
   - Demo rápida: cambiar **_type="text"_** por **_type="email"_** y mostrar el error nativo del navegador al escribir algo sin @.

4. **Code-along del lab Parte 4** (~15 min)
   - Construir la **_<section id="contacto">_** con **_<h2>Contáctanos</h2>_** y **_<form>_** adentro.
   - Campos: Nombre (**_type="text"_**), Correo electrónico (**_type="email"_**), Mensaje, más **_<button type="submit">Enviar</button>_**.
   - **Decisión pendiente para Capa 2+3:** Mensaje como **_<input type="text">_** (consistente con lab/solucionario) o como **_<textarea>_** (más realista). Recomendación inicial: respetar el lab como está y mencionar **_<textarea>_** como nota al margen — *"si quieren un campo grande, eso es **_<textarea>_**, lo van a ver más adelante."*
   - Sub-pasos del lab 4.1 a 4.3 — leerlos verbatim.
   - **Reto autónomo del lab:** **_<select>_** para "Motivo del contacto" — mencionar como tarea, no resolver en clase (entra en C04).
   - **Checkpoint físico:** cada alumno hace clic en el texto de cada **_<label>_** y verifica que el cursor salte al input correcto. Sube screenshot del form renderizado al chat.

**Cadena hacia M5:** El form está construido y los labels están asociados. Pero hasta aquí el alumno **describió** A11y — todavía no la **vivió**. El siguiente momento les pide cerrar el mouse y demostrar con teclado que su landing funciona. Ahí descubren si lo hicieron bien o no.

---

## MOMENTO 5: Checkpoint Tab Nav + Cierre

**Tiempo:** ~20 min
**Parte del lab:** Checkpoint A11y verificable + Entrega

> **OBJETIVO:** Cada alumno completó el checkpoint Tab nav con screenshot del foco visible en ≥3 elementos (incluido al menos uno del form), hizo commit final, activó GitHub Pages, y entregó las 3 URLs (repo, Pages, screenshot).

> **Nota táctica de inicio: Vivir A11y, no describirla**
> Este momento es la **prueba final**. El alumno cierra el mouse (físicamente o por compromiso público) y navega con **_Tab_**. Si su landing está bien hecha, el foco recorre logo → menú → form → submit en orden lógico y visible. Si no, descubren el bug en vivo y lo arreglan antes de entregar. Es la diferencia entre saber A11y y haberla hecho.

### Sub-puntos

1. **Navegación por teclado en vivo** (~7 min)
   - Concepto: Tab avanza, Shift+Tab retrocede, Enter/Space activa. El foco sigue el orden del DOM.
   - Eric demuestra primero en su propia landing: cierra el mouse, recorre con Tab y comenta en voz alta lo que ve. El alumno observa antes de replicar.
   - Mencionar que eliminar el **_outline_** del foco con **_outline: none_** sin reemplazarlo rompe A11y — bandera para C02 cuando entren en estilos.

2. **Checkpoint verificable del lab** (~8 min)
   - Cada alumno aleja el mouse y navega su propia landing con Tab.
   - Capturar screenshots del foco visible en al menos 3 elementos distintos: uno del menú, uno de una sección de contenido, uno del form (idealmente el submit).
   - **Si el foco se pierde o el orden es ilógico:** detectar el problema en vivo (probablemente label sin for, o un div con tabindex incorrecto), arreglarlo, recapturar.

3. **Commit final + entrega + cierre de clase** (~5 min)
   - **_git add . && git commit -m "feat: landing semántica accesible con form de contacto" && git push_**.
   - Activar GitHub Pages en el repo (Settings → Pages → Branch main).
   - Entrega en el LMS: URL del repo + URL de GitHub Pages + screenshot del Tab nav.
   - Cierre: 3 reflexiones del README del alumno: *"¿Qué curiosidades nuevas te llevas? ¿Qué concepto aclaraste? ¿En qué tienes más dominio ahora?"*
   - Adelanto C02: *"La próxima clase, esta misma landing recibe layout con Flexbox. El HTML ya está — vamos a darle forma."*

**Cierre de clase.** No hay cadena hacia "M6" — esta es la última. La cadena hacia C02 queda explicitada en el adelanto.

---

## Decisiones pendientes para Capa 2+3

Resumen consolidado de lo que está abierto y debe resolverse antes de escribir el guion:

| # | Decisión | Afecta a | Recomendación inicial |
|---|---|---|---|
| 1 | **_<article>_** y **_<aside>_**: ¿mencionar o no en M2? | M2 sub-punto 2 | Mencionar de pasada ("existen para blog/sidebar") sin code-along. |
| 2 | Roles ARIA redundantes (**_role="banner"_**, etc.) del solucionario | M2 sub-punto 4 / M3 sub-punto 3 | Discutirlos en M3.3 como decisión de diseño defensiva, no replicarlos automáticamente. |
| 3 | Campo Mensaje: **_<input type="text">_** (lab) vs **_<textarea>_** (realista) | M4 sub-punto 4 | Respetar el lab (**_<input type="text">_**); mencionar **_<textarea>_** como nota al margen. |
| 4 | **_<img>_** como pre-requisito conocido o concepto nuevo en Capa 0 | M3 sub-punto 2 | Asumir conocido (es HTML básico). Si en el aula el grupo declara no saber, ajustar en vivo con 2 min extra del colchón. |

---

## Validaciones del Checklist §14 (Capa 1)

- [x] La clase tiene 5–7 momentos → **5 momentos** ✓
- [x] Cada momento tiene mínimo 3 sub-puntos numerados → **3 a 4 sub-puntos por momento** ✓
- [x] La cadena problema → solución pasa el test de §5.3 → **cada problema demostrado en vivo, transición causal explícita** ✓
- [x] Total preparado ≤ 2h 30min con colchón ≥30min → **150 min preparados + 30 min colchón** ✓
- [x] Receso obligatorio → **30 min entre M2 y M3** ✓
- [x] Cada Momento técnico cita una Parte del lab → **M1↔P1, M2↔P2, M3↔P3, M4↔P4, M5↔Checkpoint** ✓
- [x] **_**Nota táctica de inicio**_** declarada para cada Momento → ✓

Pendiente para Capa 2+3:
- [ ] **_**EN PANTALLA:**_** por cada cambio de herramienta.
- [ ] **_> **Tu explicación teórica precisa:**_** por cada concepto nuevo, redactado con firma de tono Eric.
- [ ] **_> **Pregunta de calibración:**_** y **_> **Preguntas de Activación:**_** por cada sub-punto conceptual.
- [ ] **_> **Checkpoint obligatorio:**_** por sub-punto de code-along.
- [x] ~~**_### 🚨 Errores Comunes_** por cada Momento técnico~~ — **descartado para C01 por decisión Eric**. Los errores se atienden en vivo según surjan.
- [ ] **_> **Commit sugerido al terminar:**_** en M1, M2, M3, M4, M5.
- [ ] Actualizar **_mi-sistema/clase-01/GUIA EXCALIDRAW - CLASE 01.md_** momento por momento al cerrar bloques con **_**EN PANTALLA: EXCALIDRAW**_**.

---

## Próximo paso

Eric revisa Capa 1. Si aprueba (o corrige):
- Pasamos a **Capa 2+3 progresiva**: redactar guion **Momento por Momento**, no la clase entera de golpe.
- Al cerrar cada Momento con bloques EXCALIDRAW → crear/actualizar **_mi-sistema/clase-01/GUIA EXCALIDRAW - CLASE 01.md_**.
- Eric valida cada Momento antes de pasar al siguiente.

---
---

# CAPA 2+3 — GUION DETALLADO

> A partir de aquí va el guion completo, redactado con la firma de tono Eric. Cada Momento se construye y valida con Eric antes de pasar al siguiente.
>
> **Convención del guion:** lo que va **_*"entre comillas en cursiva"*_** es lo que el instructor dice en voz alta. Lo que va en **_> **Bloque interno:**_** sin cursiva son notas tácticas o instrucciones para el instructor (no se leen).

---

## MOMENTO 1 — Setup del Proyecto Víctima (Parte 1 del lab)

**Tiempo:** ~30 min
**Parte del lab:** Parte 1 (Crear estructura base del proyecto)

> **OBJETIVO:** Al cierre del Momento, cada alumno tiene un repo **_product-landing-page_** en GitHub, un **_index.html_** con boilerplate funcionando con Live Server, y el primer commit pusheado a **_main_**.

> **Nota táctica de inicio:**
> Eric ya hizo la bienvenida del cohort con su slide propio antes de este Momento. El guion arranca cuando Eric cierra el slide y pasa a VS Code y la terminal. Este Momento ES la Parte 1 del lab — no es paralelo, es el code-along principal. Git y GitHub se explican con detalle desde cero porque es primer día del 201 y el grupo es heterogéneo.

---

### 1.1 Encuadre del Proyecto Víctima

**Tiempo:** ~3 min

**EN PANTALLA: CÁMARAS Y CHAT DE TEAMS — Eric en cámara después de cerrar el slide de bienvenida.**

> **Tu apertura:**
> *"Listo. Cerramos el slide. Lo que vamos a hacer hoy y las próximas tres clases es construir un solo proyecto. Se llama Product Landing Page."*
>
> *"Hoy lo armamos: estructura, accesibilidad y un formulario de contacto. La próxima clase le damos layout con Flexbox. La siguiente, responsive. La cuarta, validación del formulario y workflow profesional de Git. Cuatro clases, un solo proyecto que crece."*
>
> *"Empecemos. Esto es la Parte 1 del lab."*

> **Nota táctica:**
> No mostrar demo de referencia. Lo que están construyendo se ve cuando lo terminen. Hablar máximo 2 minutos en este sub-punto — la inercia tiene que ir al setup técnico, no al discurso.

---

### 1.2 Git y GitHub: qué son, comandos básicos, crear el repositorio

**Tiempo:** ~15 min

**EN PANTALLA: EXCALIDRAW — Panel 1.1 "Git vs GitHub + 6 comandos básicos". Modo preparado de antemano con espacio en blanco a la derecha/abajo para anotar comentarios en vivo. Ver **_mi-sistema/clase-01/GUIA EXCALIDRAW - CLASE 01.md_** → Panel 1.1.**

> **Tu instrucción inicial (con el panel ya proyectado):**
> *"Antes de tocar la terminal, miren la pizarra. Quiero que vean dos cosas: la diferencia entre Git y GitHub, y los seis comandos que vamos a usar hoy. Después de la pizarra, los ejecutamos."*

> **Tu explicación teórica precisa — Git:**
> *"Antes de escribir código necesitamos un sistema que guarde cada cambio. Eso es Git."*
>
> *"Git es un sistema de control de versiones. Local. Funciona en su computadora. Cada vez que ustedes le dicen 'guarda este estado del proyecto', toma una foto y la archiva. Esa foto se llama commit."*
>
>
> *"¿Para qué sirve Git en la práctica? Tres cosas: volver atrás si algo se rompe, ver el historial de qué cambió y cuándo, y trabajar en equipo sin pisarse el código."*

> **Tu explicación teórica precisa — GitHub:**
> *"GitHub es distinto. GitHub es una plataforma en la nube — un sitio web — donde subimos esas fotos para tenerlas respaldadas y compartidas. Si su laptop se rompe, sus commits siguen en GitHub. Si quieren mostrar su código a alguien, mandan el link de GitHub."*
>
> *"Git y GitHub no son lo mismo. Git es la herramienta local; GitHub es el servidor remoto. Uno funciona sin el otro — pero juntos arman el flujo profesional que usa toda la industria."*

> **Pregunta de calibración:**
> *"En el chat, en una palabra: ¿alguno de ustedes recuerda los comandos de Git del pre-trabajo? Pongan 'sí' o 'no'."*
> *(Esperar 45 segundos. Contar. Si >30% pone 'no', anunciar al grupo: "vamos paso a paso, sin asumir nada". Si la mayoría pone 'sí', mantener ritmo pero igual escribir los comandos en pantalla — no asumir memoria perfecta.)*

**EN PANTALLA: TERMINAL / GIT BASH — terminal abierta en una carpeta limpia del usuario, ej. **_~/dev/<usuario>/_**. Eric escribe los comandos uno por uno; los alumnos siguen en sus máquinas.**

> **Tu instrucción:**
> *"Los seis comandos que vamos a usar hoy son estos. Los escribo, los explico, ustedes los siguen."*

> **Code-along de concepto — los 6 comandos de Git:**
> 1. **_mkdir product-landing-page_** → crea la carpeta del proyecto.
>    *"Es comando de terminal, no de Git todavía. Crea la carpeta."*
> 2. **_cd product-landing-page_** → entra a la carpeta.
> 3. **_git init_** → inicializa Git en esta carpeta.
>    *"Crea una carpeta oculta **_.git_** que registra todo. Solo se hace UNA vez por proyecto. Si lo corren dos veces, no se rompe nada, pero no hace falta."*
> 4. **_git status_** → muestra qué archivos cambiaron y cuáles no están trackeados.
>    *"Este comando lo van a usar todo el tiempo. Cada vez que duden 'qué tengo pendiente de guardar', **_git status_** se los dice."*
> 5. **_git add <archivo>_** o **_git add ._** → agrega archivos al staging.
>    *"**_add_** NO guarda nada todavía. Solo prepara qué va a entrar en la próxima foto. El punto significa 'todo lo del directorio actual'."*
> 6. **_git commit -m "mensaje"_** → toma la foto.
>    *"Esto sí guarda. El **_-m_** es para escribir el mensaje en la misma línea. Si lo olvidan, se les abre Vim y no van a saber salir — lo voy a explicar en errores comunes."*

> **Tu instrucción:**
> *"Ahora vamos a GitHub a crear el repositorio remoto."*

**EN PANTALLA: NAVEGADOR — github.com, logueado en la cuenta del instructor (para demo). Ir al botón "+" arriba a la derecha → "New repository".**

> **La acción guiada — crear el repo en GitHub:**
> 1. Nombre del repo: **_product-landing-page_**.
> 2. Visibilidad: **Public**. *"Lo van a querer mostrar después como portafolio."*
> 3. **NO** marcar "Add a README". **NO** marcar **_.gitignore_**. **NO** marcar licencia. *"Si marcan esto, GitHub crea archivos en remoto que su local no tiene — y después no van a poder hacer push limpio. Dejémoslo vacío."*
> 4. Clic en "Create repository".
> 5. En la página siguiente, copiar la línea que empieza con **_git remote add origin https://github.com/..._**.

**EN PANTALLA: TERMINAL / GIT BASH — volver a la terminal local.**

> **La acción guiada — conectar local con remoto:**
> 1. Pegar el comando copiado: **_git remote add origin https://github.com/<tu-usuario>/product-landing-page.git_**.
>    *"**_origin_** es el nombre por convención del remoto principal. No es palabra mágica — es nombre."*
> 2. Verificar: **_git remote -v_** → debe mostrar **_origin_** apuntando a la URL de GitHub.
> 3. *"Listo. Local y nube conectados. Ahora cuando hagamos push, va a saber a dónde mandar la foto."*

> **Pregunta de Activación:**
> *"Si yo cierro la laptop ahora y mañana abro otra computadora — ¿qué necesito hacer para seguir trabajando en este mismo proyecto?"*
> *(Respuesta esperada: **_git clone https://github.com/.../product-landing-page.git_**. Si responden "abrir GitHub", repreguntar: "¿en GitHub puedes escribir código directo? Técnicamente sí, pero nadie trabaja así. Lo que hacemos es clonar a la máquina nueva.")*

> **Checkpoint obligatorio 1.2:**
> *"En el chat: peguen la URL de su repositorio en GitHub. La URL completa, la que copiarían en un navegador. Esperamos a que pegue la mayoría."*
> *(Esperar 2 minutos. NO avanzar hasta que ≥80% del grupo haya pegado URL. A los rezagados: TA o breakout. El resto de la clase depende de esto.)*

---

### 1.3 Estructura de carpetas + Boilerplate del **_index.html_** + primer commit

**Tiempo:** ~12 min

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — VS Code a la izquierda con el explorador abierto en **_product-landing-page/_**, navegador a la derecha (en blanco por ahora).**

> **Tu instrucción:**
> *"Abrimos la carpeta en VS Code. File → Open Folder → seleccionan **_product-landing-page_**. Si tienen la extensión Live Server, perfecto. Si no, la instalan ahora: marketplace, buscan 'Live Server' del autor Ritwick Dey, icono de círculo naranja."*
>
> *(Esperar 1 minuto. No avanzar hasta que el grupo confirme Live Server instalado en el chat.)*

> **Code-along del lab — Parte 1.2 (Estructura de carpetas):**
> 1. En VS Code, dentro de **_product-landing-page/_**, crear:
>    - Archivo **_index.html_** (en la raíz).
>    - Carpeta **_css/_** y dentro un archivo **_styles.css_** vacío.
>    - Carpeta **_img/_** (vacía por ahora).
> 2. La estructura queda así:
>
> ```
> product-landing-page/
> ├── index.html
> ├── css/
> │   └── styles.css
> └── img/
> ```
>
> *"El archivo **_index.html_** siempre va en la raíz del proyecto. Por convención, cualquier servidor que apunte a esta carpeta lo va a abrir por defecto. Como el índice de un libro: si no le dicen qué página, abre el índice."*

> **Tu explicación teórica precisa:**
> *"**_html_** viene de HyperText Markup Language. 'Markup' significa marcado: marcamos el contenido con etiquetas que dicen qué es cada cosa. No es un lenguaje de programación — es un lenguaje de marcado."*

> **Code-along del lab — Parte 1.3 (Boilerplate del **_index.html_**):**
> En **_index.html_**, escribir línea por línea:
>
> ```html
> <!DOCTYPE html>
> <html lang="es">
> <head>
>   <meta charset="UTF-8">
>   <meta name="viewport" content="width=device-width, initial-scale=1.0">
>   <title>Mi Producto</title>
>   <link rel="stylesheet" href="css/styles.css">
> </head>
> <body>
>
> </body>
> </html>
> ```

> **Tu explicación teórica precisa (línea por línea mientras escriben):**
> *"**_<!DOCTYPE html>_** le dice al navegador 'esto es HTML versión 5'. Sin esto el navegador entra en modo legacy y muchas cosas modernas dejan de funcionar."*
>
> *"**_<html lang="es">_** declara el idioma del documento. Los lectores de pantalla lo usan para elegir la voz correcta. Si pusieran **_lang="en"_**, leería todo con pronunciación gringa."*
>
> *"**_<meta charset="UTF-8">_** declara la codificación de caracteres. Sin esto, las tildes y la ñ se rompen."*
>
> *"**_<meta name="viewport">_** le dice al navegador móvil cómo escalar la página. Sin esta línea, en celular su página se ve diminuta."*
>
> *"**_<title>_** es lo que aparece en la pestaña del navegador y en los resultados de Google."*
>
> *"**_<link rel="stylesheet">_** enlaza la hoja de estilos. El archivo está vacío por ahora — empezamos a usarlo en la próxima clase con Flexbox."*

> **Tu instrucción:**
> *"Guardan con Control+S. Click derecho sobre **_index.html_** en el explorador → 'Open with Live Server'. Se abre el navegador con la página."*

> **Predecir antes de ejecutar:**
> *"Antes de abrir Live Server — en el chat: ¿qué creen que se va a ver en pantalla?"*
> *(Esperar 20 segundos. Respuestas esperadas: "nada", "una página en blanco", "el título en la pestaña". Cualquiera está bien. Confirmar: "exactamente. El body está vacío. Pero fíjense en la pestaña — dice 'Mi Producto'. Eso es el **_<title>_** funcionando.")*

> **Nota táctica — reto autónomo del lab (mencionar, no resolver):**
> *"En el lab tienen como reto autónomo agregar el favicon — el iconito de la pestaña. Búsquenlo después de clase. Pista: es otro **_<link>_** en el **_<head>_**, con **_rel='icon'_**."*

> **La acción guiada — primer commit y push:**
> 1. Volver a la terminal (la del sistema o la integrada de VS Code: Ctrl+ñ o Ver → Terminal).
> 2. **_git status_** → muestra los archivos nuevos sin trackear.
> 3. **_git add ._** → agrega todo al staging.
> 4. **_git status_** otra vez → ahora aparecen en verde.
> 5. **_git commit -m "feat: setup inicial del Product Landing Page"_**.
> 6. **_git branch -M main_** → asegura que la rama se llame **_main_** (no **_master_**). *"Convención moderna. Algunos Git viejos crean **_master_** por defecto; lo renombramos."*
> 7. **_git push -u origin main_** → sube el commit a GitHub.
>    *"El **_-u_** es para que la próxima vez baste con **_git push_**, sin tener que repetir **_origin main_**."*
> 8. Abrir el repo en GitHub (refrescar) → ya aparecen **_index.html_**, **_css/_**, **_img/_**.

> **Checkpoint obligatorio 1.3:**
> *"En el chat: peguen la URL de su repo de nuevo — pero ahora con los archivos visibles dentro. Si todavía les sale la pantalla de 'Quick setup' significa que el push no llegó."*
> *(Esperar 2 minutos. Validar 2-3 al azar: hacer clic en sus URLs y verificar que se ve **_index.html_**, **_css/_**, **_img/_**. Avanzar cuando ≥80% confirme.)*


### Checklist de cierre del Momento 1

| ✅ | Criterio |
|---|---|
| ☐ | El repositorio **_product-landing-page_** existe en GitHub con visibilidad pública. |
| ☐ | El repo local tiene la estructura: **_index.html_**, **_css/styles.css_**, **_img/_** (vacía). |
| ☐ | El boilerplate del **_index.html_** está completo (DOCTYPE, html lang, charset, viewport, title, link a CSS). |
| ☐ | El primer commit (**_feat: setup inicial del Product Landing Page_**) está pusheado a **_main_**. |
| ☐ | Live Server abrió la página: pestaña dice "Mi Producto", body en blanco. |
| ☐ | La URL del repo (con archivos visibles) está pegada en el chat por ≥80% del grupo. |

---

> **Commit sugerido al terminar:**
> ```bash
> git add .
> git commit -m "feat: setup inicial del Product Landing Page"
> git branch -M main
> git push -u origin main
> ```

---

> **Nota táctica de transición → Momento 2:**
> El alumno tiene el esqueleto: repo creado, boilerplate listo, primer commit subido. El **_<body>_** está vacío. Aquí viene el primer dilema real: el instinto natural es llenar todo con **_<div>_**. En el Momento 2 vamos a mostrar **por qué eso es un problema** antes de corregirlo — el alumno tiene que sentir la limitación, no recibirla narrada.

---
- Cuando la Guía Excalidraw esté validada (parcial o total), invocamos **_excalidraw-system_** para generar los **_.excalidraw_** proyectables.

---



## RECESO — 30 min

---
## MOMENTO 2 — HTML5 Semántico + Jerarquía de encabezados (Parte 2 del lab)

> **OBJETIVO:** Al cierre del Momento, cada alumno tiene su <body> lleno con <header>, <nav>, <main>, <section> y <footer> correctamente anidados, con un único <h1> (hero) y <h2> en cada sección principal.
> 

### 2.1 El problema del <div>: cajas sin etiqueta

**EN PANTALLA: EXCALIDRAW — Panel 2.1 "El problema del <div>: cajas sin etiqueta + analogía de los frascos".** 

> **Tu apertura:***"Antes de llenar el **<body>** de su landing, quiero que vean un problema. Un problema que aparece cuando uno usa **<div>** para todo."*
> 

> **Tu explicación teórica precisa — qué es <div>:*"<div>** viene de 'division'. Es una caja invisible cuyo único trabajo es agrupar elementos. No tiene rol semántico, no tiene significado, no le dice nada al navegador sobre qué hay adentro. Es contenedor neutro y nada más."*
> 
> 
> *(Señalar en el panel la caja de cartón sin rótulo.)*
> 

> **Tu instrucción — analogía de los frascos:***"Hagan este ejercicio mental conmigo. Abren la despensa de su casa y se encuentran con esto."*
> 
> 
> *(Señalar el bloque B, izquierda — 16 frascos idénticos sin etiqueta.)*
> 
> *"Veinte frascos. Todos del mismo vidrio. Todos del mismo tamaño. Ninguno tiene etiqueta. Adentro hay sal, azúcar, harina, café, pimienta, comino, orégano, té. Pero por fuera no hay forma de saber cuál es cuál."*
> 

> **Pregunta de participación:***"En el chat: ¿cómo distinguen la sal del azúcar en esa despensa?"(Esperar 30 segundos. Respuestas esperadas: "abriendo el frasco", "probando", "oliendo", "metiendo el dedo". Confirmar: "exacto. Solo se puede abriendo cada frasco y revisando uno por uno. Es ineficiente y propenso a errores — un día le ponen sal al café.")*
> 

> **Tu instrucción — versión con etiquetas:***"Ahora miren la versión con etiquetas."*
> 
> 
> *(Señalar el bloque B, derecha — frascos con rótulo SAL, AZÚCAR, HARINA, CAFÉ, etc.)*
> 
> *"Mismos frascos. Mismo contenido. Pero cada uno con su rótulo. Cualquier persona — ustedes, su familia, el panadero que viene a hacer pan — sabe qué hay adentro sin abrir nada."*
> 

> **Tu conexión con el código:***"En HTML pasa exactamente lo mismo. Cuando todo es **<div>**, todo es un frasco idéntico sin etiqueta. Miren esto."*
> 

**EN PANTALLA: VS CODE — abrir un archivo nuevo en blanco (prueba.html , NO en el proyecto del alumno — es descartable). Pegar el siguiente snippet en vivo:**

```html
<div>
  <div>
    <div>Mi Producto</div>
    <div>
      <div>Inicio</div>
      <div>Producto</div>
      <div>Contacto</div>
    </div>
  </div>
  <div>
    <div>Bienvenido a mi landing</div>
  </div>
</div>
```

> **Tu instrucción:***"Esto se llama 'div soup' — sopa de divs. Miren el código y díganme — sin leer el contenido de adentro, solo viendo las etiquetas: ¿cuál es el encabezado? ¿Cuál el menú? ¿Cuál el footer?"*
> 
> 
> *(Pausa breve. No responder. Que vean.)*
> 
> *"No se puede saber. Son frascos idénticos sin rótulo. Si abren este código dos semanas después, tienen que abrir cada **<div>** para entender qué hay adentro."*
> 

**EN PANTALLA: EXCALIDRAW — volver al Panel 2.1.**

> **Tu cierre:***"Y el problema serio no es solo que sea difícil para ustedes leerlo. El problema serio es que Google tampoco lo entiende. Los lectores de pantalla tampoco. Para el navegador, todo es un frasco gris idéntico. La página queda invisible para SEO y para personas que usan tecnología asistiva."*
> 
> 
> *"En 2014, HTML5 trajo las cajas con etiqueta. Esas las vemos ahora."*
> 

> **Nota táctica de transición interna:**
El alumno ya sintió el problema (frascos sin etiqueta / div-soup). Toca dar la solución: las 7 etiquetas semánticas.
> 

### 2.2 Las 7 etiquetas semánticas principales

**EN PANTALLA: EXCALIDRAW — Panel 2.2 "Las 7 etiquetas semánticas + roles ARIA implícitos".** 

> **Tu instrucción inicial (con el panel ya proyectado):***"Las etiquetas semánticas que vamos a usar son siete. Tres las usan en cada página sí o sí: **<header>, <main>, <footer>.** Otras dos las usan casi siempre: **<nav> y <section>**. Y dos las van a usar más adelante cuando tengan blog o sidebar: **<article> y <aside>.**"*
> 

> **Tu explicación teórica precisa — las 5 de hoy:***"**<header>** — viene de 'encabezado'. Va arriba de la página, contiene el logo y el título principal. Rol implícito: banner."*
> 
> 
> *"**<nav>** — viene de 'navigation'. Es la barra de navegación. "*
> 
> *"**<main>** — el contenido principal de la página. Una sola por página. "*
> 
> *"**<section>** — una sección temática dentro del <main>. Tienen varias. Cada una con su propio <h2> que la titula."*
> 
> *"**<footer>** — viene de 'pie'. Va abajo. Contiene info de contacto, créditos, redes. ."*
> 

> **Tu instrucción — las 2 que se mencionan pero no se usan hoy:***"**<article> y <aside>** existen, pero el landing de hoy no las necesita. <article> se usa para un bloque que tiene sentido por sí solo — un post de blog, una tarjeta de producto que puede repostearse. **<aside>** es información al costado del contenido principal — un sidebar, un widget. Los van a usar cuando armen un blog o una página con sidebar."*
> 

### 2.3 Jerarquía de encabezados h1–h6

**EN PANTALLA: EXCALIDRAW — Panel 2.3 "Jerarquía de encabezados: correcta vs rota".** 

> **Tu explicación teórica precisa:***"Las etiquetas <h1> a <h6> son encabezados. Tienen jerarquía. <h1> es el título principal de la página — uno solo. <h2> cada sección principal. <h3> subsecciones. Y así."*
> 
> 
> *"<h> viene de 'heading' — encabezado. El número indica el nivel. 1 más importante, 6 menos."*
> 
> *"Regla técnica: no saltar niveles. No se va de <h1> a <h3> sin pasar por <h2>. Si lo hacen, el lector de pantalla muestra el índice de la página roto."*
> 

**EN PANTALLA: NAVEGADOR (DevTools) — en prueba.html,** 

**abrir DevTools → Accessibility → vista de Headings (o usar la extensión headingsMap si está instalada).**

> **Tu instrucción:***"Esto es el índice navegable que genera un lector de pantalla. Es como el índice de un libro técnico. Si el alumno con discapacidad visual quiere saltar a la sección 'Características' de su landing, presiona una tecla y ve esta lista. Salta directo al <h2> que quiere."*
> 

> **Pregunta de Activación:***"Si una página de noticias tiene 10 artículos en la misma pantalla, cada uno con su título — ¿cuántos <h1> debería tener la página?"(Respuesta esperada: uno solo — el título de la página o sección principal. Cada artículo lleva **<h2> o <h3>**. 
Si responden 10, repreguntar: "¿qué le dice eso a Google sobre cuál es el tema principal?")*
> 

> **Nota táctica de transición interna:**
Ya tienen las 7 etiquetas + jerarquía. Toca aplicarlas al proyecto. Vamos al code-along.
> 

### 2.4 Code-along del lab — Parte 2 (Estructura Semántica de la Landing)

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — abrir index.html del Product Landing Page**

> **Tu instrucción:***"Vamos a llenar el **<body>** con lo que aprendimos. Sigan conmigo. El código exacto está en la Parte 2 del lab — pueden copiarlo o escribirlo. Yo lo escribo en vivo."*
> 

> **Code-along del lab — Parte 2.1 (Estructura semántica):**
Dentro del <body> del index.html, escribir paso a paso:
> 
> 
> ```html
> <header>
>   <nav>
>     <a href="#">Inicio</a>
>     <a href="#">Producto</a>
>     <a href="#">Contacto</a>
>   </nav>
> </header>
> 
> <main>
>   <section id="hero">
>     <h1>Nombre del producto</h1>
>     <p>Una frase que describa su valor</p>
>   </section>
> 
>   <section>
>     <h2>Características</h2>
>     <ul>
>       <li>Característica 1</li>
>       <li>Característica 2</li>
>       <li>Característica 3</li>
>     </ul>
>   </section>
> </main>
> 
> <footer>
>   <p>Contacto: contacto@miempresa.com</p>
> </footer>
> ```
> 

> **Tu explicación durante el code-along (líneas clave):***"**<header>** arriba. Dentro va el **<nav>** con los tres enlaces. Por ahora los href son # — placeholder, después conectan."*
> 
> 
> *"**<main>** envuelve el contenido principal. 
> Dentro tienen dos <section> — el hero y las características. El hero tiene el <h1> único de la página. Las características tienen <h2>."*
> 
> *"**<footer>** al final con la info de contacto. Una sola línea por ahora."*
> 

> **Predecir antes de ver:***"Antes de mirar el navegador: ¿se va a ver bonito?"(Esperar 15 segundos. Respuesta esperada: no, va a verse como texto plano sin estilos. Confirmar: "exactamente. El HTML define estructura, no estilo. El estilo es la próxima clase con CSS. Hoy estamos en estructura.")*
> 

> **Code-along del lab — Parte 2.2 (Jerarquía correcta):***"Revisen su HTML: deberían tener UN `<h1>` (el del hero) y DOS `<h2>` (uno por sección). Si tienen dos `<h1>`, los unifican. Si saltaron de `<h1>` a `<h3>` sin `<h2>`, lo corrigen."*
>

---

## MOMENTO 3 — Accesibilidad básica (Parte 3 del lab)

**Tiempo:** ~25 min
**Parte del lab:** Parte 3 (Accesibilidad Básica)

> **OBJETIVO:** Al cierre del Momento, todas las imágenes del landing tienen **_alt_** apropiado (informativo o vacío según corresponda); los íconos sin texto visible tienen **_aria-label_**; el alumno entiende la regla #1 de ARIA (no duplicar lo que HTML nativo ya da).

> **Nota táctica de inicio: A11y no es solo para personas con discapacidad**
>
> El alumno llega con el mito de que "accesibilidad = para invidentes". La forma de cambiarlo es con una imagen cotidiana: la rampa de un edificio. La usa el de silla de ruedas, sí — pero también el que trae carrito de bebé, el que carga equipaje, el repartidor con caja pesada, la persona con una pierna lesionada. A11y aplica el mismo principio: lo que parece "para unos pocos" termina mejorando la experiencia de todos.

---

### 3.1 ¿Qué es A11y y a quién beneficia?

**Tiempo:** ~5 min

**EN PANTALLA: EXCALIDRAW — Panel 3.1 "A11y: la rampa del edificio". Modo preparado de antemano. Ver **_mi-sistema/clase-01/GUIA EXCALIDRAW - CLASE 01.md_** → Panel 3.1.**

> **Tu apertura:**
> *"Volvemos del receso. Su landing ya tiene estructura semántica — **_<header>_**, **_<nav>_**, **_<main>_**, **_<footer>_**. Bien. Pero hay cosas que la estructura no resuelve sola: las imágenes, los íconos, los enlaces sin texto. Eso es lo que arregla la accesibilidad. Vamos a ver qué significa eso."*

> **Tu explicación teórica precisa:**
> *"Accesibilidad web — o A11y — es el conjunto de prácticas para que personas con diferentes capacidades puedan usar un sitio. Visuales, auditivas, motoras, cognitivas. No es una etiqueta, no es un atributo: es un criterio que cruza todo el código que escriben."*
>
> *"Se escribe A11y porque la palabra 'accessibility' tiene once letras entre la A inicial y la y final. A-once-y. Es la convención corta. Hay otras parecidas: i18n para 'internationalization' — i-dieciocho-n. l10n para 'localization'. No es jerga inútil, es lo que van a leer en cualquier blog técnico o doc."*

> **Tu instrucción — la analogía de la rampa:**
> *(Señalar el Panel 3.1, la imagen del edificio con rampa.)*
>
> *"Piensen en la entrada de un edificio público. Tiene escaleras y al costado una rampa. La rampa la construyeron para personas en silla de ruedas — ese fue el motivo original. Pero ¿quién más la usa? Vean."*
>
> *(Pausa breve. Dejar que el chat empiece a responder.)*

> **Pregunta de participación:**
> *"En el chat: ¿qué personas — además del usuario de silla de ruedas — usan la rampa en su vida cotidiana?"*
> *(Esperar 45 segundos. Respuestas esperadas: padres con coche de bebé, repartidores con cajas, personas con maletas en el aeropuerto, alguien con una pierna lesionada, adultos mayores. Leer 2-3 en voz alta y conectar: "exacto. La rampa la construyeron para uno, pero la usan todos. A11y es lo mismo en código.")*

> **Tu cierre:**
> *"Eso es A11y. Construir el sitio pensando en quienes no pueden usar el flujo principal — y al hacerlo, mejoran la experiencia de todos. Los lectores de pantalla son rampas. El navegar con teclado es rampa. Las imágenes con **_alt_** son rampas. Lo que hagan hoy en su landing son rampas que muchos van a usar sin saber que existen."*
>
> *"Además: la accesibilidad es un requerimiento legal en muchos países — Perú incluido, para sitios públicos y empresas grandes. No es opcional cuando van a la industria."*

> **Pregunta de calibración:**
> *"Mito o realidad: 'A11y solo beneficia a personas ciegas'."*
> *(Respuesta esperada: mito. La A11y cubre múltiples discapacidades — auditivas, motoras, cognitivas — y además beneficia a usuarios "temporalmente limitados" como el caso del audio roto, una mano ocupada, ruido en el ambiente. Si responden "realidad", repreguntar: "¿alguien aquí ha visto un video en silencio leyendo subtítulos? — eso es A11y para auditivos beneficiando a videntes.")*

---

### 3.2 Texto alternativo (**_alt_**)

**Tiempo:** ~7 min

**EN PANTALLA: EXCALIDRAW — Panel 3.2 "El atributo **_alt_**: tres casos". Modo preparado de antemano. Ver **_mi-sistema/clase-01/GUIA EXCALIDRAW - CLASE 01.md_** → Panel 3.2.**

> **Tu instrucción — analogía del WhatsApp:**
> *"Imagínense esto. Le mandan a su mamá una foto por WhatsApp: ustedes en la playa con su hermana. Pero la foto no carga — falla la conexión, la imagen sale como un cuadrado gris con un símbolo de imagen rota. ¿Qué texto preferirían que apareciera en su lugar?"*
>
> *(Esperar respuestas. Esperado: 'yo en la playa con mi hermana', 'foto en la playa'. Si dicen 'imagen', repreguntar: "¿eso le dice a tu mamá qué hay en la foto? No. 'Imagen' es ruido — necesita el contenido.")*
>
> *"Eso es exactamente el **_alt_**. Es el texto que aparece cuando la imagen no carga. Y es lo que lee el lector de pantalla cuando llega a la imagen — porque el lector no puede ver."*

> **Tu explicación teórica precisa:**
> *"**_alt_** viene de 'alternate' — alternativa. Es atributo de la etiqueta **_<img>_**, y describe en texto lo que muestra la imagen. Tiene tres casos. Vamos a verlos."*

> **Caso 1 — Imagen informativa** (señalar bloque A del Panel 3.2):
> *"Imagen que aporta información. Logo del producto, foto de un cliente, gráfico de datos. El **_alt_** describe lo que muestra. Si la imagen no carga o el lector la lee — el **_alt_** reemplaza la información perdida."*
>
> ```html
> <img src="logo.png" alt="Logotipo de Mi Producto Estrella">
> ```

> **Caso 2 — Imagen decorativa** (señalar bloque B del Panel 3.2):
> *"Imagen puramente decorativa. Un separador visual, un fondo, un ícono que acompaña texto que ya dice lo mismo. En este caso el **_alt_** va vacío — **_alt=""_**. Eso le dice al lector: 'ignora esta imagen, no aporta nada'. Si la omiten — sin atributo **_alt_** — el lector la anuncia como 'imagen' sin contexto. Eso es ruido."*
>
> ```html
> <img src="separador.png" alt="">
> ```

> **Caso 3 — Imagen sin **_alt_**** (señalar bloque C del Panel 3.2 — el caso "rojo"):
> *"Y este es el caso que tienen que evitar. La imagen sin atributo **_alt_**."*
>
> ```html
> <img src="foto.jpg">
> ```
>
> *"El lector de pantalla dice 'imagen'. Nada más. Sin contexto. Si era informativa, perdieron información. Si era decorativa, perdieron tiempo del usuario. Cualquiera de los dos: error."*

> **Demo en vivo — imagen rota:**
> *"Vamos a verlo en pantalla. Voy a abrir un HTML con tres imágenes y voy a desconectarle la red para que no carguen."*

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — abrir **_mi-sistema/clase-01/apoyo-clase01.html_** y descomentar la sección **_DEMO M3.2_**. Guardar; Live Server recarga con las 3 imágenes visibles. Activar offline: DevTools (F12) → Network → Throttling: Offline → Ctrl+R.**

> **Preparación previa del Momento:**
> Antes de abrir la pestaña con el alumno, asegurarse de haber cargado **_apoyo-clase01.html_** UNA vez online para que las imágenes de **_placehold.co_** queden en caché (por si el modo Offline las bloquea de inicio).

> **Tu instrucción:**
> *(Las 3 imágenes "rotas". La primera muestra su texto alt en pantalla — 'Logotipo del Producto, texto blanco sobre fondo azul'. La segunda no muestra nada — alt vacío. La tercera muestra el placeholder roto sin texto.)*
>
> *"La primera les comunica qué era. La segunda desaparece limpiamente — no estorba. La tercera es lo que queremos evitar."*

> **Al cerrar el sub-punto:** volver a comentar la sección **_DEMO M3.2_** en **_apoyo-clase01.html_** para que no quede colgada al pasar a 3.3.

> **Pregunta de calibración:**
> *"Si en su landing pusieran un ícono decorativo de un palomo al lado del título 'Características' — ¿qué **_alt_** le ponen?"*
> *(Respuesta esperada: **_alt=""_** porque el texto 'Características' ya dice lo que la sección es; el palomo no aporta información. Si responden **_alt="palomo"_**, repreguntar: "¿el usuario que no ve la imagen pierde algo si solo lee 'Características'? No. Entonces el **_alt_** debe estar vacío.")*

---

### 3.3 ARIA: **_aria-label_** y roles

**Tiempo:** ~5 min

**EN PANTALLA: EXCALIDRAW — Panel 3.3 "aria-label: cuando el elemento no habla solo". Modo preparado de antemano. Ver **_mi-sistema/clase-01/GUIA EXCALIDRAW - CLASE 01.md_** → Panel 3.3.**

> **Tu instrucción — analogía del control remoto:**
> *"Imaginen el control remoto de su televisor. Algunos botones tienen un símbolo claro — el triángulo de Play, las dos rayitas de Pausa, la X o el círculo de apagado. Esos los reconoce cualquiera sin texto. Pero hay otros botones con símbolos raros — uno que parece una flecha curva, otro con tres puntitos verticales. Si no tienen una palabra abajo que diga 'Modo' o 'Menú', no sabemos qué hacen."*
>
> *"**_aria-label_** es esa palabrita debajo del botón. Solo para los casos donde el elemento no se explica solo."*

> **Tu explicación teórica precisa:**
> *"ARIA es un conjunto de atributos HTML que aportan información de accesibilidad cuando la semántica nativa no alcanza. ARIA significa 'Accessible Rich Internet Applications' — fue creado por la W3C para aplicaciones web complejas. Lo van a usar poquito en este curso. Pero hay una regla que recordar siempre."*

> **La regla #1 de ARIA (cierre absoluto):**
> *"No usar ARIA cuando una etiqueta HTML nativa hace el trabajo."*
>
> *(Pausa breve. Repetir.)*
>
> *"Si ya tienen un **_<button>Enviar</button>_** con texto visible, no le pongan **_aria-label="Enviar"_**. El lector lo anuncia dos veces — duplica el ruido. ARIA es para los casos donde no hay texto visible. Punto."*

> **Casos válidos de **_aria-label_**:**
> *(Señalar el Panel 3.3 — ejemplos reales.)*
>
> *"Ícono de búsqueda — una lupa sin la palabra 'Buscar' al lado. **_aria-label="Buscar"_**."*
>
> *"Ícono de red social — Facebook, Instagram, Twitter — solo el logo, sin texto. **_aria-label="Facebook"_** o **_aria-label="Síguenos en Instagram"_**."*
>
> *"Botón con ícono de cerrar — la X arriba a la derecha de un modal. **_aria-label="Cerrar"_**."*
>
> ```html
> <a href="#" aria-label="Síguenos en Instagram">
>   <img src="instagram.png" alt="">
> </a>
> ```
>
> *(Notar que el **_<img>_** dentro va con **_alt=""_** porque la imagen es decorativa — el **_aria-label_** del enlace ya provee el contexto. Si pusieran **_alt="Instagram"_**, el lector anunciaría 'Síguenos en Instagram, Instagram' — duplicado.)*

> **Sobre roles ARIA (**_role="banner"_**, **_role="navigation"_**, etc.):**
> *"Hay otro grupo de atributos ARIA: los **_role_**. Le dicen al navegador qué rol cumple un elemento. Y aquí aplica la regla #1 en su forma más clara: **_<nav>_** ya tiene **_role="navigation"_** implícito. No hace falta escribirlo."*
>
> *"Si encuentran código de internet con **_<nav role="navigation">_** — no es error, es decisión defensiva del que lo escribió para soportar navegadores muy viejos. Hoy en día, con etiquetas HTML5, esos roles son redundantes. Nosotros no los vamos a escribir."*

> **Pregunta de Activación:**
> *"En su landing, supongan que en el footer ponen un ícono de Facebook sin texto al lado — solo la 'f' azul. ¿Cómo lo escriben para que un lector de pantalla pueda anunciarlo?"*
> *(Respuesta esperada: un **_<a href="..." aria-label="Facebook">_** envolviendo un **_<img src="..." alt="">_**. Si responden solo **_<a><img src="facebook.png" alt="Facebook"></a>_**, eso también es válido — pero menos flexible cuando hay variantes del logo. Cualquiera de las dos funciona. Si responden con **_aria-label_** adentro del **_<img>_**, aclarar: "**_aria-label_** en **_<img>_** no es la práctica estándar — el **_alt_** lo cubre. **_aria-label_** se usa en enlaces y botones.")*

---

### 3.4 Code-along del lab — Parte 3 (Accesibilidad básica)

**Tiempo:** ~8 min

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — abrir **_index.html_** del Product Landing Page. Live Server activo a la derecha.**

> **Tu instrucción:**
> *"Vamos a aplicar A11y a su landing. Tres cosas: agregar una imagen al hero con **_alt_** apropiado, agregar íconos de redes sociales al footer con **_aria-label_**, y revisar el orden lógico del DOM."*

> **Code-along del lab — Parte 3.1 (Imagen con **_alt_**):**
> 1. Buscar una imagen que sirva como logo o producto (Google Images, Unsplash, o simplemente usar un placeholder **_https://via.placeholder.com/150_**).
> 2. Descargarla al folder **_img/_** del proyecto (o usar URL directa).
> 3. Dentro del **_<section id="hero">_**, agregar la imagen después del **_<h1>_**:
>
> ```html
> <img src="img/producto.jpg" alt="Foto del Producto Estrella mostrado desde un ángulo frontal">
> ```
>
> 4. Recargar el navegador con Live Server. Verificar que la imagen carga y que si la cortan en DevTools (Network → Offline + Reload) aparece el texto del **_alt_**.

> **Tu explicación durante el code-along:**
> *"El **_alt_** no es 'descripción literal de píxeles' — es 'qué información comunica la imagen'. Si en su landing es el producto, el **_alt_** debe decir qué producto es y cómo se ve."*

> **Code-along del lab — Parte 3.2 (Íconos de redes sociales con **_aria-label_**):**
> 1. Dentro del **_<footer>_**, agregar un bloque de íconos sociales:
>
> ```html
> <footer>
>   <p>Contacto: contacto@miempresa.com</p>
>   <a href="#" aria-label="Síguenos en Facebook">
>     <img src="img/facebook.png" alt="">
>   </a>
>   <a href="#" aria-label="Síguenos en Instagram">
>     <img src="img/instagram.png" alt="">
>   </a>
> </footer>
> ```
>
> 2. Buscar 2 íconos de redes sociales (placeholder o reales del demo). Guardar en **_img/_**.
> 3. Guardar y recargar.

> **Tu instrucción — orden lógico del DOM:**
> *"Lo tercero del lab es 'asegurar orden lógico'. Eso significa: el orden en que escriben sus etiquetas debe coincidir con el orden visual. Si visualmente el menú está arriba, el **_<nav>_** va antes del **_<main>_** en el código. Si los íconos sociales están abajo, van al final del **_<footer>_**. Eso lo van a validar en M5 con la navegación por teclado."*

> **Checkpoint obligatorio 3.4 — Lighthouse Accessibility:**
> *"En DevTools tienen una pestaña llamada Lighthouse. Vamos a usarla. Es la auditoría que usa Google para evaluar páginas — incluyendo accesibilidad."*
>
> 1. Abrir DevTools (F12).
> 2. Pestaña Lighthouse.
> 3. Marcar solo "Accessibility" en las categorías. Dejar Desktop. Click "Analyze page load".
> 4. Esperar el reporte (10-15 segundos).
> 5. Anotar el score (de 0 a 100).
>
> *"En el chat: peguen su score de Accessibility. Mínimo esperado: 90."*
> *(Esperar 3 minutos. Validar al azar. Si alguno tiene <90, revisar qué falta — probablemente una imagen sin **_alt_** o un enlace sin **_aria-label_**. Corregir en vivo el caso para todos.)*

---

> **Commit sugerido al terminar:**
> ```bash
> git add .
> git commit -m "feat: accesibilidad básica (alt en imágenes, aria-label en redes sociales)"
> git push
> ```

---

> **Nota táctica de transición → Momento 4:**
> La landing ya comunica e incluye al lector de pantalla. Tienen **_alt_** en imágenes, **_aria-label_** en íconos sociales, estructura semántica con landmarks. Bien. Pero hasta aquí su landing es **solo lectura** — el visitante mira y se va. Para una landing real hay que **capturar** datos: nombre, correo, mensaje. La forma estándar de capturar datos en HTML es el **formulario**. Y un formulario sin A11y es la primera prueba de fuego de todo lo que aprendieron — eso lo van a ver ahora.

---

## MOMENTO 4 — Formularios accesibles (Parte 4 del lab)

**Tiempo:** ~40 min
**Parte del lab:** Parte 4 (Formulario de contacto accesible)

> **OBJETIVO:** Al cierre del Momento, cada alumno tiene un **_<form>_** de contacto dentro de su landing, con **_<label for>_** correctamente asociado a cada **_<input id>_**, tipos apropiados (**_text_**, **_email_**) y un **_<button type="submit">_** explícito. La prueba táctil (clic en label → cursor al input) pasa en todos los campos.

> **Nota táctica de inicio: El sub-punto 4.2 es el corazón del Momento**
>
> Forms es el bloque más pesado de la clase y la herramienta nueva más densa del día. La asociación **_<label for>_** ↔ **_<input id>_** es donde el alumno aprende la primera regla A11y aplicada a algo tangible — Eric DEBE hacer la demo táctil en vivo (clic en label, cursor salta al input). Esa demo es lo que les fija el concepto: si el cursor salta, está bien; si no salta, está mal. Sin esa demo, el sub-punto pierde el 80% de su efecto.

---

### 4.1 El elemento **_<form>_** como contenedor

**Tiempo:** ~7 min

**EN PANTALLA: EXCALIDRAW — Panel 4.1 "El **_<form>_**: el sobre que agrupa y envía". Modo preparado de antemano. Ver **_mi-sistema/clase-01/GUIA EXCALIDRAW - CLASE 01.md_** → Panel 4.1.**

> **Tu apertura:**
> *"Para capturar datos en HTML necesitamos un formulario. Y la etiqueta que arma el formulario se llama **_<form>_**. Vamos a ver para qué sirve antes de escribir el primer campo."*

> **Tu instrucción — analogía del formulario de papel:**
> *"Piensen en cualquier formulario de papel que hayan llenado en la vida: el del banco para abrir cuenta, el de migraciones, el de inscripción al gimnasio. Todos tienen la misma estructura: una hoja con casillas, cada casilla con un texto al lado que dice qué meter, y al final una casilla para firmar o un cuadrito que dice 'Enviar'."*
>
> *(Señalar el Panel 4.1 — wireframe del formulario de papel.)*
>
> *"La hoja completa es el **_<form>_**. Cada casilla es un **_<input>_**. El texto al lado de cada casilla es un **_<label>_**. Y la casilla de 'firmar/enviar' es el **_<button type=\"submit\">_**. Hoy esos cuatro elementos construyen el formulario de contacto de su landing."*

> **Tu explicación teórica precisa:**
> *"**_form_** viene del latín 'formula' — molde, plantilla con espacios para rellenar. Los formularios en papel preceden por siglos a la web; HTML solo los digitalizó."*
>
> *"El elemento **_<form>_** es un **contenedor**. Su trabajo es agrupar campos relacionados bajo una sola unidad lógica de envío. Es decir: todo lo que vaya adentro de un mismo **_<form>_** se envía junto cuando el usuario presiona el botón submit."*

> **Tu cierre — la consecuencia de no usar **_<form>_**:**
> *(Señalar el Panel 4.1, bloque comparativo: inputs huérfanos vs inputs con form.)*
>
> *"Si escriben un **_<input>_** solo, sin un **_<form>_** que lo envuelva, el campo funciona en pantalla — el usuario puede escribir adentro. Pero no se envía a ningún lado. Es una casilla suelta sobre la mesa, sin sobre que la lleve. Para enviar datos, el **_<form>_** es obligatorio."*

> **Tu instrucción — atributos del **_<form>_** (mencionar sin profundizar):**
> *"El **_<form>_** tiene dos atributos importantes que en C01 solo vamos a mencionar: **_action_** dice a qué URL se envían los datos, y **_method_** dice cómo (GET o POST). Si los omiten, el comportamiento default es recargar la misma página con los datos en la URL. En C07 — cuando entren a JavaScript — van a interceptar el submit antes de que recargue para procesarlo del lado del cliente. Hoy nos quedamos con la estructura; el envío real lo verán más adelante."*

> **Pregunta de calibración:**
> *"En el chat: si yo escribo **_<input type=\"text\">_** solo en mi HTML, sin un **_<form>_** alrededor — ¿el campo se ve en la página?"*
> *(Respuesta esperada: sí, se ve y se puede escribir adentro. Pero NO se envía. Si responden "no se ve", aclarar: "se ve. Lo que no funciona es el envío. Visualmente es idéntico — la diferencia es funcional.")*

---

### 4.2 Asociación **_<label for>_** ↔ **_<input id>_** — el corazón del Momento

**Tiempo:** ~10 min

**EN PANTALLA: EXCALIDRAW — Panel 4.2 "Asociación **_<label for>_** ↔ **_<input id>_**". Modo preparado de antemano. Ver **_mi-sistema/clase-01/GUIA EXCALIDRAW - CLASE 01.md_** → Panel 4.2.**

> **Tu apertura — sigue la analogía del formulario de papel:**
> *"Vuelvan al formulario de papel del banco. Imaginen que les entregan una hoja con tres casillas vacías — sin ningún texto al lado. Solo tres líneas en blanco. ¿Saben qué meter en cada una?"*
>
> *(Pausa. Esperar respuestas. Esperado: "no", "imposible".)*
>
> *"Exacto. En papel necesitan la etiqueta al lado de la casilla para saber qué va: 'Nombre completo', 'Correo electrónico', 'Mensaje'. Sin la etiqueta, la casilla es ambigua."*

> **Tu explicación teórica precisa:**
> *"En HTML pasa lo mismo. Cada **_<input>_** necesita un **_<label>_** que diga qué dato va adentro. Y los dos elementos se conectan con dos atributos: **_for_** en el label, **_id_** en el input. Los dos deben tener el mismo valor."*
>
> *"**_label_** viene del francés *label* — rótulo, etiqueta. **_for_** dice 'esta etiqueta es para qué input'. **_id_** es el identificador único del input."*
>
> *(Señalar el Panel 4.2, bloque del snippet de código con la flecha curva.)*

```html
<label for="email">Correo electrónico</label>
<input type="email" id="email" name="email">
```

> *"Vean la flecha: **_for=\"email\"_** apunta al **_id=\"email\"_**. Misma palabra. Y **_email_** es un nombre arbitrario — yo lo elegí. Podría ser **_correo_**, **_mail_**, **_usuario_email_**, lo que quieran. Solo importa que coincida exactamente entre el **_for_** del label y el **_id_** del input."*

> **Tu instrucción — qué pasa con y sin la asociación (señalar bloque B del Panel 4.2):**
> *"Para una persona vidente, los dos casos se ven iguales: aparece 'Correo electrónico' arriba y una caja para escribir abajo. Pero para un lector de pantalla, la diferencia es enorme."*
>
> *"Con la asociación correcta, el lector anuncia: 'Correo electrónico, edición de texto'. El usuario sabe qué meter."*
>
> *"Sin la asociación — si solo escriben el **_<input>_** sin un **_<label>_** que apunte a él — el lector anuncia: 'edición de texto'. Eso es todo. Sin contexto. El usuario no sabe qué se le está pidiendo."*

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — abrir **_mi-sistema/clase-01/apoyo-clase01.html_** y descomentar la sección **_DEMO M4.2_**. Guardar; Live Server recarga con los 3 casos (A: con for/id correctos · B: con for typo · C: solo placeholder).**

> **Demo táctil obligatoria — la prueba del clic:**
> *"Esto es lo más importante de todo el Momento. Miren."*
>
> 1. **Caso A** (ya está en pantalla): hacer clic en la palabra "Correo" del primer label.
> 2. *(El cursor parpadeante salta al input asociado. Confirmar en voz alta:)* *"Vieron eso? Hice clic en el label y el cursor saltó al input. Eso confirma que **_for_** y **_id_** están bien conectados."*
> 3. **Caso B**: hacer clic en "Correo (con typo en el for)" del segundo bloque.
> 4. *(El cursor NO salta porque el **_for="corre"_** no coincide con el **_id="correo-typo"_**.)*
> 5. *"Ahora no salta. El **_for_** dice 'corre' y el **_id_** dice 'correo-typo'. Cambié una letra y se rompió. La regla es esta:"*

> **Demo del placeholder (mismo Caso C de la sección **_DEMO M4.2_**):**
> 6. Hacer clic en el input del Caso C (solo placeholder, sin label).
> 7. Empezar a escribir cualquier cosa.
> 8. *(El placeholder desaparece al teclear la primera letra.)*
> 9. *"El placeholder desapareció. Si el usuario se distrae y vuelve, no sabe qué campo estaba llenando. Y el lector de pantalla NO anuncia el placeholder de forma consistente — depende del navegador. Por eso **_placeholder_** NO reemplaza al **_<label>_**."*

> **Cierre absoluto (Patrón C de §3.1):**
> *"Si el cursor salta al hacer clic en el label, está bien. Si no salta, está mal."*

> **Al cerrar el sub-punto:** volver a comentar la sección **_DEMO M4.2_** en **_apoyo-clase01.html_** antes de abrir M4.3.

> **Pregunta de Activación:**
> *"En el chat: si yo tengo un formulario con un solo campo — solo Email — ¿necesito **_<label>_** o puedo usar solo **_placeholder_**?"*
> *(Respuesta esperada: necesita label. La cantidad de campos no cambia la regla. Un campo sin label es invisible para A11y igual que diez. Si responden "puedo usar placeholder", repreguntar: "¿el lector de pantalla anunciaría el placeholder? La respuesta correcta es 'a veces, depende del navegador, no es confiable'. El label siempre se anuncia. Por eso siempre label.")*

---

### 4.3 **_<input type>_** y **_<button type="submit">_**

**Tiempo:** ~8 min

**EN PANTALLA: EXCALIDRAW — Panel 4.3 "**_<input type>_** + **_<button type=\"submit\">_**: el dato esperado y el envío". Modo preparado de antemano. Ver **_mi-sistema/clase-01/GUIA EXCALIDRAW - CLASE 01.md_** → Panel 4.3.**

> **Tu apertura — analogía del teclado del celular:**
> *"Cuando ustedes abren WhatsApp y tocan el campo de mensaje, aparece el teclado normal con letras. Pero cuando abren la app del banco y tocan el campo de número de tarjeta, aparece directamente el teclado numérico. ¿Por qué el celular sabe?"*
>
> *(Pausa breve. Dejar que el chat responda.)*
>
> *"Porque el campo le declara al sistema 'aquí esperamos un número, no letras'. Eso es lo que hace el atributo **_type_** en un **_<input>_**. Declara qué tipo de dato se espera."*

> **Tu explicación teórica precisa — **_type_**:**
> *"**_input_** viene de 'entrada' — entrada de datos. El atributo **_type_** declara qué tipo de dato esperamos. Tiene varios valores; los más comunes son cinco."*
>
> *(Señalar el Panel 4.3, bloque B — tabla de los 5 type.)*

> **Tabla en pantalla:**
> | type | Qué teclado en móvil | Qué validación nativa |
> |---|---|---|
> | **_text_** | Teclado normal | Ninguna |
> | **_email_** | Teclado con **_@_** accesible | Bloquea envío si no tiene **_@_** |
> | **_password_** | Teclado normal, oculta caracteres | Ninguna |
> | **_number_** | Numpad numérico | Solo acepta números |
> | **_tel_** | Numpad telefónico | Ninguna (solo cambia teclado) |

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — abrir **_mi-sistema/clase-01/apoyo-clase01.html_** y descomentar la sección **_DEMO M4.3_**. Guardar; Live Server recarga con la comparativa input vs textarea + el form de validación.**

> **Demo en vivo — validación nativa con **_type="email"_**:**
> 1. En el form del Caso "Validación nativa con type=\"email\"" de la sección descomentada, escribir en el campo: **_eric_** (sin **_@_**).
> 2. Hacer clic en Enviar.
> 3. *(El navegador muestra error nativo: "Please include an '@' in the email address. 'eric' is missing an '@'.")*
> 4. *"Eso lo hace el navegador solo. No escribimos ni una línea de JavaScript. Es validación nativa básica que viene con **_type=\"email\"_**. En C04 van a enriquecer esto con **_required_**, **_pattern_**, **_minlength_** — pero ya hoy con solo cambiar el **_type_** tienen validación gratis."*

> **Demo rápida — **_<input>_** vs **_<textarea>_** para el campo Mensaje:**
> *"Una nota sobre el campo 'Mensaje'. En el lab que vamos a hacer ahora usamos **_<input type=\"text\">_**. Pero quiero que vean otra etiqueta que existe para esto."*
>
> 1. Señalar los dos campos del Caso "Comparativa" de la sección descomentada: el primero es **_<input type="text">_** y el segundo es **_<textarea>_**.
> 2. Mostrar visualmente: el primero es una caja de un solo renglón. El segundo es una caja grande que el usuario puede redimensionar arrastrando la esquina inferior derecha.
> 3. *"Para un mensaje real de contacto, en producción siempre usarían **_<textarea>_** — porque la gente escribe varias líneas. Hoy seguimos el lab con **_<input type=\"text\">_** porque enseña la asociación label-input igual. Cuando enriquezcan este formulario en C04, pueden cambiarlo a **_<textarea>_** sin tocar el label ni el **_for/id_**."*

> **Al cerrar el sub-punto:** volver a comentar la sección **_DEMO M4.3_** en **_apoyo-clase01.html_** antes de pasar al code-along del lab en 4.4.

> **Tu explicación teórica precisa — **_<button type="submit">_**:**
> *"El botón que cierra el formulario es **_<button>_**, y debe tener **_type=\"submit\"_** declarado explícitamente."*
>
> *"**_submit_** viene del latín *submittere* — someter, presentar para procesamiento. Eso hace el botón: somete los datos del formulario para que el navegador los envíe."*
>
> *"**_<button>_** tiene tres **_type_** posibles: **_submit_** envía el form, **_reset_** lo limpia, **_button_** no hace nada por defecto (se conecta a JS después). Por compatibilidad histórica, un **_<button>_** sin **_type_** dentro de un **_<form>_** se comporta como **_submit_** — pero la buena práctica es declararlo explícito siempre. Claridad para el siguiente dev que toque el código."*

> **Tu cierre — qué pasa al apretar Enviar:**
> *"Cuando el usuario aprieta **_<button type=\"submit\">_**, pasan tres cosas en orden:*
>
> *Una — el navegador valida todos los inputs (verifica **_type=\"email\"_**, y en C04 también **_required_**, **_pattern_**). Si algún campo falla, bloquea el envío y muestra el error nativo.*
>
> *Dos — si todo está bien, recopila los datos en una URL o en el cuerpo de la petición según **_method_**.*
>
> *Tres — recarga la página enviando los datos al **_action_**. Por default, recarga la misma URL con los datos como parámetros.*
>
> *Eso es el comportamiento por defecto sin JavaScript. En C07 lo interceptan."*

---

### 4.4 Code-along del lab — Parte 4 (Formulario de contacto accesible)

**Tiempo:** ~15 min

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — abrir **_index.html_** del Product Landing Page de cada alumno (Eric en el suyo como referencia). Live Server activo a la derecha.**

> **Tu instrucción:**
> *"Vamos a construir el formulario de contacto de su landing. Sigan conmigo. El código está en la Parte 4 del lab; pueden copiarlo o escribirlo en vivo. Recomiendo escribirlo — ahí se memoriza la estructura."*

> **Code-along del lab — Parte 4.1 (Construir la sección de contacto):**
> 1. En el **_index.html_**, antes del **_<footer>_**, agregar la sección de contacto:

```html
<section id="contacto">
  <h2>Contáctanos</h2>
  <form>
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre">

    <label for="email">Correo electrónico</label>
    <input type="email" id="email" name="email">

    <label for="mensaje">Mensaje</label>
    <input type="text" id="mensaje" name="mensaje">

    <button type="submit">Enviar</button>
  </form>
</section>
```

> **Tu explicación durante el code-along (línea por línea):**
> *"**_<section id=\"contacto\">_** envuelve todo el bloque y le da un identificador para que un menú pueda enlazar a esta sección con **_href=\"#contacto\"_** después."*
>
> *"**_<h2>Contáctanos</h2>_** es el título de la sección. Sigue la jerarquía: el **_<h1>_** está en el hero, el **_<h2>_** está aquí. Coherente."*
>
> *"**_<form>_** envuelve los tres campos y el botón. Sin atributos **_action_** ni **_method_** — el comportamiento default ya nos sirve para hoy."*
>
> *"Cada par **_<label for=\"X\">_** + **_<input id=\"X\">_** con el mismo valor. Nombre/nombre, email/email, mensaje/mensaje. Pueden poner los nombres que quieran — yo elegí los obvios."*
>
> *"**_type=\"text\"_** para Nombre y Mensaje. **_type=\"email\"_** para Correo — eso activa la validación de **_@_** que ya vieron."*
>
> *"**_name=\"...\"_** en cada input — es el nombre del campo cuando se envía. Para C01 lo escribimos igual al **_id_** por simplicidad."*
>
> *"**_<button type=\"submit\">Enviar</button>_** cierra el form. **_type_** explícito."*

> **Tu instrucción — guardar y recargar:**
> *"Guarden con Control+S. Live Server recarga. Miren el form en el navegador."*

> **Demo táctil — repetir la prueba del clic con cada label:**
> *"Vayan a su navegador. Hagan clic en la palabra 'Nombre' del label. El cursor debe saltar al input de Nombre. Hagan lo mismo con 'Correo electrónico' y 'Mensaje'. Los tres deberían saltar."*
>
> *(Esperar 1 minuto. Que prueben en vivo.)*

> **Pregunta de calibración:**
> *"En el chat: ¿a alguno NO le saltó el cursor en alguno de los tres labels? Si pasó, díganmelo, lo revisamos en vivo."*
> *(Si alguno reporta problema, abrir su código compartido y verificar **_for/id_**. El bug típico es typo: **_for="emai"_** vs **_id="email"_**. Eric corrige en vivo — sirve a todos.)*

> **Demo de validación en vivo con el form completo:**
> 1. *"Voy a apretar Enviar SIN llenar nada. Miren."* → Sin **_required_**, el form envía vacío. La página recarga con **_?nombre=&email=&mensaje=_** en la URL.
> 2. *"Vean la URL — los datos vacíos se mandaron como parámetros. Eso es el comportamiento default que les mencioné."*
> 3. *"Ahora pongo solo letras sin **_@_** en el campo de Correo y aprieto Enviar."* → El navegador bloquea el envío y muestra el error nativo de **_type="email"_**.
> 4. *"Eso es lo que viene gratis con el **_type_**. En C04 le van a agregar **_required_** para que tampoco se envíe vacío, y otros validadores. Hoy ya tienen la base."*

> **Nota táctica — reto autónomo del lab (mencionar, no resolver):**
> *"El lab les pide como reto autónomo agregar un campo **_<select>_** para 'Motivo del contacto' con opciones Consulta, Reclamo, Sugerencia. No lo resolvemos en clase — queda como tarea. Pista: **_<select>_** es como un **_<input>_** pero con opciones predefinidas. Y también necesita su **_<label for>_** correspondiente. En C04 van a profundizar."*

> **Checkpoint obligatorio 4.4:**
> *"Dos cosas en el chat:*
>
> *1. Screenshot de su formulario renderizado en el navegador. Quiero ver los tres labels, los tres inputs y el botón.*
>
> *2. Confirmen con un '✓' si los tres labels les funcionaron con el clic (cursor saltó al input correspondiente).*
>
> *Esperamos a que pegue la mayoría."*
> *(Esperar 3 minutos. Validar al azar 2-3 screenshots:*
> *- ✅ Form dentro de **_<section id="contacto">_** con **_<h2>_**.*
> *- ✅ Tres **_<label>_** con **_for_** apuntando a **_id_** correspondiente.*
> *- ✅ Los 3 inputs tienen **_id_** único.*
> *- ✅ **_<input type="email">_** en correo (no **_type="text"_**).*
> *- ✅ **_<button type="submit">Enviar</button>_** con type explícito.*
> *- ✅ Test de clic en label pasa en los 3 campos.*
> *Si algún caso falla, corregir en vivo — sirve a todos.)*

---

> **Commit sugerido al terminar:**
> ```bash
> git add .
> git commit -m "feat: formulario de contacto accesible (label, input, button submit)"
> git push
> ```

---

> **Nota táctica de transición → Momento 5:**
> El alumno tiene el form construido y los labels asociados. Bien. **Pero hasta aquí el alumno describió A11y — no la vivió todavía.** El Momento 5 es la prueba de fuego: cerrar el mouse y navegar la landing con **_Tab_**. Ahí descubren si los **_for/id_** que escribieron están bien o no — porque si están bien, el foco recorre logo → menú → form → submit en orden lógico. Si están mal, el orden se rompe y lo van a sentir.

---

## MOMENTO 5 — Checkpoint Tab Nav + Cierre de Clase

**Tiempo:** ~20 min
**Parte del lab:** Checkpoint A11y verificable + Entrega

> **OBJETIVO:** Al cierre del Momento (y de la clase), cada alumno tiene: (1) screenshot del foco visible en ≥3 elementos navegados con **_Tab_** (incluyendo al menos uno del form), (2) commit final pusheado, (3) GitHub Pages activado con URL pública, (4) entrega completa en el LMS (URL repo + URL Pages + screenshot).

> **Nota táctica de inicio: De describir A11y a vivirla**
>
> Este Momento NO enseña concepto nuevo — pone a prueba todo lo de la clase. El alumno cierra el mouse y descubre en carne propia si su HTML está bien hecho. Si está bien, el foco fluye limpio y la satisfacción es inmediata. Si está mal, lo descubre EN VIVO antes de entregar — y eso es exactamente lo que queremos. El M5 convierte la teoría de A11y en experiencia personal. Eric debe demostrar primero en su landing antes de pedírselo al alumno.

---

### 5.1 Navegación por teclado: concepto + demo de Eric

**Tiempo:** ~7 min

**EN PANTALLA: EXCALIDRAW — Panel 5.1 "Navegación por teclado: orden del foco según el DOM". Modo preparado de antemano. Ver **_mi-sistema/clase-01/GUIA EXCALIDRAW - CLASE 01.md_** → Panel 5.1.**

> **Tu apertura:**
> *"Hicieron toda la estructura: semántica, accesibilidad, formulario. Ahora vamos a probar si funciona de verdad. Y para probarlo, lo vamos a hacer como lo hace una persona que no puede usar el mouse — solo con teclado."*

> **Tu explicación teórica precisa:**
> *"Hay mucha gente que no puede usar mouse: personas con motora limitada, usuarios con tendinitis, gente que prefiere teclado por velocidad, usuarios de lectores de pantalla. Todos ellos navegan con la tecla **_Tab_**."*
>
> *"**_Tab_** avanza al siguiente elemento interactivo: el siguiente enlace, botón, input. **_Shift+Tab_** retrocede. **_Enter_** o **_Space_** activan el elemento enfocado — siguen el link, presionan el botón, marcan el checkbox."*
>
> *"**_Tab_** viene de 'tabulador'. Es la misma tecla que en las máquinas de escribir hacía saltar el carro a la siguiente columna. En la web hace lo mismo: salta al siguiente elemento."*

> **Tu explicación teórica precisa — el orden del foco:**
> *"El foco recorre los elementos en el orden en que ustedes los escribieron en el HTML — no en el orden visual. A eso se le llama **orden del DOM**: la posición en el código fuente."*
>
> *"En una landing bien hecha eso significa: el foco va logo → menú → contenido principal → formulario → botón enviar. Cada **_Tab_** salta al siguiente elemento interactivo en ese orden."*
>
> *"En la próxima clase, cuando usen CSS con Flexbox o Grid, van a poder reordenar elementos visualmente sin tocar el HTML. Cuidado con eso: el foco sigue al código, no a lo que se ve. Si visualmente el botón está arriba pero en el código está abajo, el **_Tab_** lo encuentra al final. Regla práctica de hoy: **mantengan el orden visual coincidiendo con el orden del HTML.**"*

> **Tu instrucción — demo de Eric en su landing:**
> *"Voy a mostrarles cómo se ve. Cierro mi mouse — lo aparto físicamente — y navego con **_Tab_** solamente. Miren la pantalla."*

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — Eric en SU landing terminada, navegador a la derecha. Mover el mouse fuera de la pantalla o anunciar "mano fuera del trackpad".**

> **La demo:**
> 1. Hacer clic en cualquier parte vacía de la página para "limpiar" el foco. Luego apartar el mouse.
> 2. Presionar **_Tab_**. *"Primer Tab — el foco entra al primer enlace del menú. ¿Lo ven? Aparece un contorno azul. Eso es el focus ring que dibuja el navegador."*
> 3. Tab. *"Segundo enlace del menú."*
> 4. Tab. *"Tercer enlace del menú."*
> 5. Tab. *"Ahora salta al primer input del formulario. Nombre."*
> 6. Tab. *"Correo electrónico."*
> 7. Tab. *"Mensaje."*
> 8. Tab. *"Botón Enviar."*
> 9. *"Vieron eso? El foco recorrió: menú → form → submit. Orden lógico. Si quisiera retroceder uso **_Shift+Tab_**."*

> **Tu nota anticipada — anti-regla para C02:**
> *"Una cosa importante para que recuerden cuando entren a CSS la próxima clase: el contorno azul que ven es el **focus ring**. El navegador lo dibuja para que el usuario sepa dónde está parado. **Nunca lo eliminen con **_outline: none_** sin reemplazarlo por otro indicador visual.** Eso rompe A11y inmediatamente. Si no quieren el azul, dibujen otro — pero el foco DEBE ser visible. Es la única regla absoluta de hoy hacia C02."*

> **Pregunta de calibración:**
> *"En el chat: si yo escribo CSS y pongo **_*{ outline: none }_** para que ningún elemento muestre contorno — ¿qué pasa con la accesibilidad?"*
> *(Respuesta esperada: se rompe completamente. El usuario que navega con teclado pierde la referencia visual de dónde está. Si responden "queda más limpio visualmente", repreguntar: "más limpio para quien ve. ¿Y para quien navega con teclado? Quedó sin pista. Esa decisión visual los excluye.")*

---

### 5.2 Checkpoint del lab — el alumno navega su propia landing

**Tiempo:** ~8 min

**EN PANTALLA: CÁMARAS Y CHAT DE TEAMS — Eric en cámara, chat abierto. Los alumnos en su propia pantalla compartida si Eric quiere observar.**

> **Tu instrucción — la regla del mouse:**
> *"Ahora les toca a ustedes. La regla del próximo bloque es una sola: **mano fuera del mouse, fuera del trackpad**. Lo aparten físicamente o se comprometen a no tocarlo. Solo teclado."*
>
> *(Pausa breve. Tono firme.)*
>
> *"Vayan a su landing en el navegador. Hagan clic en la barra de URL para 'limpiar' el foco — eso lo pueden hacer con mouse, es lo último. Después, mano afuera."*

> **La acción guiada — checkpoint Tab nav:**
> 1. *"Presionen **_Tab_** la primera vez. ¿Ven el contorno azul en algún elemento? Bien. Ese es el primer paso de su navegación."*
> 2. *"Sigan presionando **_Tab_** y vayan capturando screenshots conforme el foco avanza. Necesitan al menos TRES screenshots, cada uno con el foco visible en un elemento distinto. UNO de los tres tiene que ser un campo del formulario o el botón Enviar."*
> 3. *"Mientras avanzan, observen el orden. ¿Va: logo → menú → contenido → form → submit? Si va en orden lógico, perfecto. Si salta — por ejemplo, va del menú directo al submit y después vuelve al form — algo está raro."*
> 4. *"Tienen 5 minutos. Manos al teclado."*

> **Notas de observación durante el reto (para el instructor):**
> - **Señal de buen progreso:** alumno comparte screenshots mostrando foco en menú, después en input del form, después en submit.
> - **Señal de problema:** alumno reporta "no veo el contorno azul" → probablemente tienen **_outline: none_** heredado de un CSS reset, o el navegador no está enfocando porque no es elemento interactivo. Revisar.
> - **Señal de orden ilógico:** el foco va **_menú → submit → input nombre → input correo_** (saltó el form completo y volvió). Causa probable: el botón submit está antes del form en el código, o hay un **_tabindex_** mal puesto. Revisar el orden DOM.
> - **Pista mínima a dar:** *"Revisen el orden de su HTML. El foco sigue el orden del código."*
> - **Pista NUNCA dar:** la solución completa al orden — déjenlos descubrirlo.

> **Si alguien reporta problema (revisar EN VIVO):**
> - Abrir su código compartido. Buscar:
>   - ¿Tiene **_outline: none_** en algún lado? Quitarlo.
>   - ¿El orden de **_<section>_** en el DOM coincide con el orden visual? Reordenar si no.
>   - ¿Algún **_<input>_** sin **_<label for>_** correspondiente? Corregir.
> - Corregir en vivo. Sirve a todos.

> **Checkpoint obligatorio 5.2:**
> *"En el chat: peguen sus tres screenshots. Uno debe mostrar el foco en un campo del form o en el botón Enviar. Esperamos a que pegue la mayoría."*
> *(Esperar 5 minutos. Validar al azar 2-3 sets de screenshots:*
> *- ✅ Tres screenshots distintos.*
> *- ✅ Foco visible (contorno azul u otro indicador) en cada uno.*
> *- ✅ Al menos uno muestra foco en input del form o botón submit.*
> *- ✅ El orden implícito de los screenshots es coherente con la estructura de la landing.*
> *Si algún caso falla, corregir y pedir recaptura.)*

---

### 5.3 Commit final + GitHub Pages + entrega + cierre

**Tiempo:** ~5 min

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — terminal integrada visible para los comandos finales, navegador en GitHub para activar Pages.**

> **Tu instrucción — commit final:**
> *"Vamos a cerrar la clase con un commit que marque que terminaron la Clase 01. Tres líneas en la terminal."*

> **La acción guiada — commit final:**
> 1. **_git add ._**
> 2. **_git commit -m "feat: clase 01 cerrada — landing semántica accesible con form de contacto"_**
> 3. **_git push_**

> **Tu instrucción — activar GitHub Pages:**
> *"Ahora activamos GitHub Pages para que la landing tenga URL pública. Eso lo hacen una sola vez por proyecto."*

**EN PANTALLA: NAVEGADOR — repositorio del alumno en GitHub.**

> **La acción guiada — activar GitHub Pages:**
> 1. En su repo de GitHub, ir a **Settings** (la pestaña arriba a la derecha).
> 2. En la columna izquierda, hacer clic en **Pages**.
> 3. En "Source", seleccionar **Deploy from a branch**.
> 4. En "Branch", seleccionar **main** y carpeta **/ (root)**. Save.
> 5. Esperar 1-2 minutos. Refrescar la página de Pages. Aparece la URL pública: **_https://<tu-usuario>.github.io/product-landing-page/_**.
> 6. *"Esa URL es su landing en vivo. La pueden compartir con quien quieran — su mamá, su hermano, un reclutador. Esta semana, esta URL es su primer entregable público del Code 201."*

> **Tu instrucción — entrega en el LMS:**
> *"En el LMS de la clase suben tres cosas para cerrar la entrega:"*
>
> 1. **URL del repositorio en GitHub** (el repo con todo el código).
> 2. **URL de GitHub Pages** (la landing en vivo).
> 3. **Screenshots del checkpoint Tab nav** (los tres que pegaron en el chat).

> **Cierre de clase — 3 reflexiones del README del alumno:**
> *"Antes de cerrar, quiero que respondan tres cosas en el chat — una sola línea cada una. No es para nota, es para que cierren el día con conciencia de lo que aprendieron."*
>
> 1. *"¿Qué curiosidad nueva se llevan?"* — algo que no sabían y descubrieron hoy.
> 2. *"¿Qué concepto pudieron aclarar mejor?"* — algo que ya habían oído pero hoy hizo clic.
> 3. *"¿En qué aspecto sienten que tienen más dominio ahora?"* — qué pueden hacer hoy que no podían en la mañana.
>
> *(Esperar 3 minutos. Leer 3-4 respuestas en voz alta y comentar brevemente. Cierre afectivo, no técnico.)*

> **Adelanto de la próxima clase (C02):**
> *"La próxima clase, esta misma landing recibe layout con CSS y Flexbox. El HTML ya está hecho — eso no lo vuelven a tocar mucho. Lo que viene es darle forma visual: columnas, espaciado, alineación, jerarquía visible. Vienen con la landing terminada — y la transforman en algo que se ve profesional."*

> **Cierre absoluto de la clase (Patrón C de §3.1):**
> *"Hoy hicieron tres cosas: estructuraron HTML con semántica, hicieron la landing accesible, y construyeron su primer formulario con label-input. Esa es la base de todo lo que viene. Nos vemos la próxima clase."*

---

### Checklist de cierre del Momento 5 (y de la Clase 01)

| ✅ | Criterio |
|---|---|
| ☐ | Cada alumno ejecutó la navegación con **_Tab_** en su landing. |
| ☐ | Cada alumno capturó ≥3 screenshots del foco visible. |
| ☐ | Al menos uno de los screenshots muestra el foco en un campo del form o en el botón submit. |
| ☐ | El orden del foco recorre logo → menú → contenido → form → submit (o equivalente lógico). |
| ☐ | Commit final pusheado a **_main_**. |
| ☐ | GitHub Pages activado, URL pública funcionando. |
| ☐ | Entrega completa en el LMS: URL repo + URL Pages + screenshots. |
| ☐ | Las 3 reflexiones de cierre respondidas en el chat por ≥80% del grupo. |

---

> **Commit sugerido al terminar:**
> ```bash
> git add .
> git commit -m "feat: clase 01 cerrada — landing semántica accesible con form de contacto"
> git push
> ```

---

# CIERRE DE LA CLASE 01

**Estado del guion:** Capa 2+3 completa (5 Momentos cerrados).
**Total tiempo preparado:** 150 min + 30 min de colchón.
**Próximo paso pedagógico:** Clase 02 — CSS Layout con Flexbox sobre la misma landing.

## Checklist global de la Clase 01

### Cobertura conceptual (Capa 0 → Capa 2+3)

| # | Concepto Capa 0 | Momento donde se cubre | Validado |
|---|---|---|---|
| 1 | HTML5 Semántico | M2 (sub-puntos 2.1, 2.2, 2.4) | ✓ |
| 2 | Jerarquía de encabezados | M2 (sub-punto 2.3, 2.4) | ✓ |
| 3 | A11y transversal | M3 (sub-punto 3.1) | ✓ |
| 4 | Texto alternativo **_alt_** | M3 (sub-puntos 3.2, 3.4) | ✓ |
| 5 | **_aria-label_** y roles ARIA | M3 (sub-puntos 3.3, 3.4) | ✓ |
| 6 | **_<form>_** como contenedor | M4 (sub-punto 4.1) | ✓ |
| 7 | **_<label for>_** ↔ **_<input id>_** | M4 (sub-puntos 4.2, 4.4) | ✓ |
| 8 | **_<input type>_** | M4 (sub-puntos 4.3, 4.4) | ✓ |
| 9 | **_<button type="submit">_** | M4 (sub-puntos 4.3, 4.4) | ✓ |
| 10 | Navegación por teclado | M5 (sub-puntos 5.1, 5.2) | ✓ |

### Cobertura del lab

| Parte del lab | Momento | Validado |
|---|---|---|
| Parte 1 (Setup Git + boilerplate) | M1 | ✓ |
| Parte 2 (Estructura semántica) | M2 (sub-punto 2.4) | ✓ |
| Parte 3 (A11y básica) | M3 (sub-punto 3.4) | ✓ |
| Parte 4 (Formulario de contacto) | M4 (sub-punto 4.4) | ✓ |
| Checkpoint A11y verificable | M5 (sub-punto 5.2) | ✓ |

### Paneles Excalidraw (pendientes de validar por Eric en la Guía)

| Panel | Momento | Estado |
|---|---|---|
| Panel 1.1 — Git vs GitHub + 6 comandos | M1 | Borrador |
| Panel 2.1 — Problema del **_<div>_** + frascos | M2 | Borrador |
| Panel 2.2 — Las 7 etiquetas semánticas + roles ARIA implícitos | M2 | Borrador |
| Panel 2.3 — Jerarquía de encabezados correcta vs rota | M2 | Borrador |
| Panel 3.1 — A11y: la rampa del edificio | M3 | Borrador |
| Panel 3.2 — **_alt_**: tres casos | M3 | Borrador |
| Panel 3.3 — **_aria-label_**: cuando el elemento no habla solo | M3 | Borrador |
| Panel 4.1 — El **_<form>_**: el sobre que agrupa y envía | M4 | Borrador |
| Panel 4.2 — Asociación **_<label for>_** ↔ **_<input id>_** | M4 | Borrador |
| Panel 4.3 — **_<input type>_** + **_<button submit>_** | M4 | Borrador |
| Panel 5.1 — Navegación por teclado: orden del foco según el DOM | M5 | Borrador |

**Total:** 11 paneles. Cuando Eric valide cada uno en **_mi-sistema/clase-01/GUIA EXCALIDRAW - CLASE 01.md_** (cambiar Estado a "Validado ✓"), **_excalidraw-system_** puede generar los **_.excalidraw_** proyectables.

### Decisiones de la Clase 01 (referencia)

- 🚨 Errores Comunes por Momento: **descartados para C01** — se atienden en vivo según surjan.
- Roles ARIA redundantes del solucionario (**_role="banner"_**, etc.): **NO replicados** en el code-along. Explicados como decisión defensiva en M3.3.
- Campo Mensaje del formulario: **_<input type="text">_** en code-along + demo **_<input>_** vs **_<textarea>_** en M4.3 (referencia forward a C04).
- **_<article>_** y **_<aside>_**: mencionados de pasada en M2.2, sin code-along.
- **_<img>_** como pre-requisito conocido: asumido. Plan de contingencia si el grupo declara no saber.
- Bienvenida del cohort: Eric la cubre con slide propio ANTES del Momento 1 (el guion no la incluye).

---

