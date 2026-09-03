# CAPA 0 — CLASE 01: HTML5 Semántico, Accesibilidad y Formularios

> **Módulo:** M1 (clase 1 de 4)
> **Curso:** Code 201
> **Fecha de cosecha:** 2026-05-13
> **Proyecto Víctima:** Product Landing Page (continúa en C02–C04)
> **Estado:** Borrador inicial — pendiente revisión de Eric

## Inputs canónicos

| Rol | Archivo |
|---|---|
| Archivo de clase | `code201/class-01/README.md` |
| Archivo de lab | `code201/class-01/lab/README.md` |
| Archivo de facilitador | `code201/class-01/facilitator/README.md` |
| Referencias | `code201/class-01/git-and-github-basics-guide.md`, `code201/class-01/facilitator/demo/product-landing-page/index.html`, `code201/cambios-201/M1-cambios-propuestos.md §3.1` |

## Restricciones de diseño (heredadas de M1-cambios-propuestos §3.1, §5)

- **MAX_TWO_NEW_TOOLS:** HTML semántico + Forms básicos como herramientas nuevas. A11y es transversal (no cuenta como herramienta separada).
- **Continuidad del proyecto:** el formulario se agrega al MISMO `index.html` del landing. No se crea proyecto nuevo.
- **Sin bloque de IA / prompt engineering** (eliminado del 201 original).
- **Checkpoint verificable obligatorio al cierre:** navegación por teclado con `Tab` + screenshot del foco visible en ≥3 elementos.
- **Forms en C01 = base mínima accesible.** La validación nativa (`required`, `pattern`, `minlength`, `<select>`, `<checkbox>`) se introduce en C04, no aquí.

## Mapa de dependencias entre conceptos

```
HTML5 Semántico ──┬─→ Jerarquía de encabezados
                  ├─→ Texto alternativo (alt)
                  └─→ ARIA / aria-label (complemento, no reemplazo)

Formularios HTML (<form>) ──┬─→ <label for> ↔ <input id>
   [concepto raíz nuevo]    ├─→ <input type>
                            └─→ <button type="submit">

A11y (transversal) ─── depende de TODO lo anterior

Navegación por teclado ─── verifica la calidad de todo lo anterior
```

> **Nota:** `<form>` es un concepto raíz independiente del HTML semántico de páginas (header/nav/main/...). El alumno llega a C01 sin haber visto forms (la auditoría del M1 confirma que C18 los trataba como nuevos antes del rediseño). En C01 son **herramienta nueva** junto al HTML semántico — esos son los dos MAX_TWO_NEW_TOOLS de la clase.

---

# Banco de conceptos

## CONCEPTO 1: HTML5 Semántico

### Definición técnica
HTML5 incorporó etiquetas con significado estructural propio (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`). Cada una declara **qué rol cumple ese bloque dentro del documento**, no cómo se ve. Visualmente, `<header>` y `<div>` son idénticos por defecto — la diferencia está en el árbol de accesibilidad y en lo que entienden los buscadores.

### Dependencia técnica
El navegador construye el "árbol de accesibilidad" a partir del HTML. Las etiquetas semánticas aparecen en ese árbol con su rol (`<nav>` → role="navigation", `<header>` → role="banner"). Un `<div>` no tiene rol — es invisible para la navegación asistida. Los lectores de pantalla, los motores de búsqueda y las herramientas de testing leen ese árbol.

### Analogía
Como los carteles de una biblioteca. Un `<div>` es una caja sin etiqueta apilada en el almacén; un `<header>` es la sección con cartel "Bienvenida". El bibliotecario (navegador + screen reader) sabe dónde está parado.

### Etimología
- **HTML** = HyperText Markup Language (lenguaje de marcado de hipertexto).
- **Semántico** del griego *sēmantikós* = "que tiene significado". En HTML5, "semántico" significa que la etiqueta marca el rol del contenido, no su apariencia.

### Estrategia visual
**Excalidraw vivo.** Diagrama de cajas anidadas mostrando la misma página renderizada dos veces: a la izquierda con `<div>`-soup (todas las cajas grises sin rótulo); a la derecha con etiquetas semánticas (header, nav, main, section, footer rotulados con colores semánticos). Sirve para fijar que el navegador "ve" cosas distintas aunque al ojo humano se vean iguales.

---

## CONCEPTO 2: Jerarquía de encabezados

### Definición técnica
Las etiquetas `<h1>` a `<h6>` son encabezados con jerarquía decreciente. `<h1>` declara el título principal de la página (uno solo por documento); `<h2>` cada sección principal; `<h3>` subsecciones; y así. La jerarquía debe ser **secuencial** — no se salta de `<h2>` a `<h4>`.

### Dependencia técnica
Los lectores de pantalla generan un **índice navegable de encabezados** que el usuario invoca con un atajo (en NVDA: `H` para saltar al siguiente heading). Si la jerarquía está rota, ese índice queda inservible. Google también usa la jerarquía para entender la estructura del contenido — es un señal SEO directa, no decorativa.

### Analogía
Como el índice de un libro técnico. Capítulo (`h1`) → secciones (`h2`) → subsecciones (`h3`). Saltar de capítulo 1 a sub-subsección sin pasar por la sección rompe la lectura tanto en papel como con lector de pantalla.

### Etimología
`<h>` viene de **heading** = encabezado. El número indica el nivel (1 = más importante, 6 = menos).

### Estrategia visual
**Canva estático.** Anatomía de página con árbol de encabezados (h1 → h2 → h2 → h3, h3 → h2): a la izquierda un árbol correcto, a la derecha uno roto (h1 → h4 → h2). Anotar a un costado lo que "ve" un lector de pantalla en cada caso.

---

## CONCEPTO 3: Accesibilidad Web (A11y)

### Definición técnica
A11y es el conjunto de prácticas de marcado, diseño y código que permite a personas con diferentes capacidades (visuales, auditivas, motoras, cognitivas) usar un sitio web. Es **transversal**: aplica a estructura semántica, contenido alternativo, navegación por teclado, contraste, foco visible, jerarquía. No es un atributo, es un criterio.

### Dependencia técnica
A11y depende de que el HTML esté bien marcado de base. Sin semántica no hay roles que anunciar, sin `<label for>` los formularios son invisibles, sin `alt` las imágenes son ruido. Las normas WCAG (Web Content Accessibility Guidelines) son el estándar; en muchos países (EE.UU., UE, Argentina, Chile, Perú) el cumplimiento es **requerimiento legal** para sitios públicos y corporativos grandes.

### Analogía
Como las rampas, elevadores y semáforos sonoros en un edificio público. No solo benefician a personas con discapacidad — todos los usan (carritos de compras, equipaje pesado, una lesión temporal, una mano ocupada con un café).

### Etimología
**A11y** es un *numeronym*: "accessibility" tiene 11 letras entre la A inicial y la y final. Es la convención corta en código y docs. Otros ejemplos del mismo patrón: **i18n** = internationalization, **l10n** = localization.

### Estrategia visual
**Canva estático.** Lista visual de "quién se beneficia de cada práctica A11y": persona con baja visión usando lector de pantalla, persona con motora limitada usando solo teclado, persona en el metro con audífonos rotos viendo subtítulos, persona buscando rápido con Tab en una compra apurada. El mensaje: A11y mejora la experiencia de todos, no solo de unos pocos.

---

## CONCEPTO 4: Texto alternativo (`alt`)

### Definición técnica
Atributo del `<img>` que provee una **descripción textual de la imagen**. El lector de pantalla lo anuncia cuando el foco llega a la imagen. Si la imagen no carga (URL rota, sin conexión), el navegador muestra el texto del `alt` en su lugar. Para imágenes **decorativas** (no aportan información — separadores, fondos, adornos), se usa `alt=""` (string vacío): le dice al lector "ignora esta imagen". **Omitir el atributo `alt` por completo es distinto:** el lector la anuncia como "imagen" sin contexto.

### Dependencia técnica
Cada `<img>` debe tener `alt`. La regla práctica:
- Imagen informativa → `alt` describe lo que comunica la imagen.
- Imagen decorativa → `alt=""`.
- Nunca omitir el atributo.

### Analogía
Como la placa descriptiva al lado de un cuadro en un museo. Una persona ciega no ve el cuadro, pero al leer la placa entiende qué representa. Sin placa, solo sabe que "hay algo colgado en la pared".

### Etimología
`alt` viene de **alternate** = alternativa (texto alternativo a la imagen).

### Estrategia visual
**Código aislado en navegador + DevTools.** Tres imágenes en una página: una con buen `alt`, una con `alt=""`, una sin `alt`. Abrir la pestaña Accessibility de DevTools (o ejecutar el lector real si el aula lo permite) y mostrar cómo se anuncia cada una. Bonus: cortar la red en DevTools (Network → Offline) para que las imágenes no carguen — verán el `alt` directamente en pantalla.

---

## CONCEPTO 5: `aria-label` y roles ARIA

### Definición técnica
ARIA es un conjunto de atributos HTML que **aportan información de accesibilidad cuando la semántica nativa no alcanza**. `aria-label` agrega una etiqueta accesible a un elemento que no tiene texto visible (un botón solo con ícono de lupa, un enlace solo con imagen de Instagram). Los **roles ARIA** (`role="navigation"`, `role="banner"`, `role="contentinfo"`) declaran explícitamente la función de un elemento.

### Dependencia técnica
ARIA es **complemento, no reemplazo** del HTML semántico. La **regla #1 de ARIA**: *"No usar ARIA cuando una etiqueta HTML nativa hace el trabajo."* Un `<nav>` ya implica `role="navigation"`; agregarle `role="navigation"` es ruido. ARIA se usa cuando construyes un patrón que HTML no cubre (un menú desplegable custom, un dialog modal, un slider). Para C01, el alumno casi no debería necesitar ARIA — la semántica nativa cubre la landing.

### Analogía
Como una etiqueta engomada que pegas a un botón sin nombre. Si el botón ya viene rotulado de fábrica (`<button>Enviar</button>`), no le pegues otra etiqueta encima — el lector anunciaría dos veces.

### Etimología
**ARIA** = Accessible Rich Internet Applications. Especificación de la W3C creada para aplicaciones web complejas (cuando el HTML simple de los 90s no alcanzaba para describir widgets dinámicos).

### Estrategia visual
**Excalidraw vivo.** Un botón con ícono de lupa sin texto. A la izquierda, cómo lo anuncia el lector (`"botón"` — sin contexto). A la derecha, el mismo botón con `aria-label="Buscar"` (`"Buscar, botón"`). Flecha del atributo al elemento. Nota al pie: *"si tuviera un `<span>Buscar</span>` visible al lado, no necesitarías `aria-label`."*

---

## CONCEPTO 6: Formularios HTML — el elemento `<form>`

### Definición técnica
Un **formulario web** es el mecanismo estándar de HTML para **recolectar datos del usuario y enviarlos a un destino**. El elemento `<form>` es el contenedor que agrupa los campos relacionados (`<input>`, `<select>`, `<textarea>`, `<button>`) bajo una sola unidad lógica de envío. Sin un `<form>` envolvente, un `<input>` funciona visualmente (el usuario puede escribir en él), pero no forma parte de ningún paquete de datos que se pueda enviar — es una caja huérfana.

Atributos principales del `<form>`:
- **`action="URL"`** — adónde se envían los datos al hacer submit. Si se omite, los datos se envían a la misma URL de la página actual.
- **`method="GET"` o `method="POST"`** — cómo se envían. `GET` = como parámetros en la URL (visible, limitado en tamaño). `POST` = en el cuerpo de la petición (oculto, para formularios largos o con datos sensibles). Default: `GET`.

En **C01** no se profundiza en `action` ni `method`. Lo importante es entender que el `<form>` es el **contenedor que da contexto** a labels, inputs y botones. El envío real al servidor es de backend; en este curso, en **C07** se intercepta el submit con JavaScript (`event.preventDefault()`) para procesar los datos del lado del cliente sin recargar la página.

### Dependencia técnica
- El `<form>` agrupa elementos de captura: `<input>`, `<select>`, `<textarea>`. Estos elementos **dependen del `<form>` como contexto** — un `<input>` fuera de un `<form>` no participa de ningún envío.
- El `<input>` es la **unidad básica de captura**: una caja de un solo renglón donde el usuario escribe (o selecciona, dependiendo del `type`).
- El **comportamiento default** al hacer submit sin JavaScript es **recargar la página** con los datos como parámetros en la URL (si `method="GET"`). El alumno verá esto al hacer su primera prueba en el lab — es esperado, no es bug.
- La validación nativa (`required`, `pattern`, `minlength`) que vendrá en C04 se ejecuta automáticamente **al hacer submit**, antes del envío.

### Analogía
Como un sobre de correo postal con varias casillas a completar (nombre del remitente, dirección, motivo del envío). Cada casilla (`<input>`, `<select>`, `<textarea>`) es un campo del sobre; el `<form>` es el sobre mismo con la dirección de destino impresa. Sin sobre, los datos están sueltos sobre la mesa y no llegan a ningún lado.

### Etimología
- **`form`** = formulario. Viene del latín *formula* = molde, plantilla con espacios a rellenar. Los formularios en papel preceden por siglos a la web.
- **`input`** = entrada (de datos del usuario hacia el sistema).
- **`action`** = acción (qué hacer con los datos: a qué URL llevarlos).
- **`method`** = método (cómo llevarlos: GET vs POST).

### Estrategia visual
**Excalidraw vivo.** Diagrama de un `<form>` como caja contenedora rotulada con su atributo `action`. Dentro, tres campos (Nombre, Email, Mensaje) cada uno con su par `<label>` + `<input>`, más un `<button type="submit">` al final. Una flecha sale del botón hacia un cuadro a la derecha rotulado "URL de destino (servidor)". A un costado, mostrar la escena rota: tres `<input>` huérfanos sin `<form>` envolvente, con flechas tachadas hacia ningún destino. Mensaje pedagógico al pie: *"El `<form>` es lo que convierte campos sueltos en un paquete de datos que se puede enviar."*

---

## CONCEPTO 7: Asociación `<label for>` ↔ `<input id>`

### Definición técnica
El atributo `for` del `<label>` debe coincidir **exactamente** con el `id` del `<input>` correspondiente. Esa coincidencia es lo que permite al lector de pantalla anunciar *"Correo electrónico, edición de texto"* al llegar al input. Sin la asociación, el lector solo anuncia *"edición de texto"* sin contexto. Además, hacer clic en el texto del `<label>` mueve el foco al `<input>` asociado — esto es la **prueba táctil** de que la asociación está bien.

### Dependencia técnica
- Cada `<input>` necesita su `<label>` con `for` apuntando a su `id`.
- El `id` debe ser único en toda la página.
- El `placeholder` **NO reemplaza al `<label>`**: desaparece al escribir; el lector de pantalla no lo anuncia consistentemente entre navegadores; deja al usuario sin contexto cuando ya escribió algo.
- Alternativa válida: envolver el input dentro del label (`<label>Correo <input type="email"></label>`) — no necesita `for/id` pero pierde flexibilidad de estilos. La práctica estándar es `for/id`.

### Analogía
Como pegar el nombre de cada llave a su llave en un manojo. Sin etiqueta sabes que hay llaves pero no cuál abre qué. El `placeholder` sería escribir el nombre con lápiz sobre la llave: al usarla, se borra.

### Etimología
- `<label>` = etiqueta (del francés *label* = rótulo).
- `for` = "para qué input es esta etiqueta".
- `id` = identifier (identificador único).

### Estrategia visual
**Excalidraw vivo + demo táctil.** Diagrama con dos `<label>` y dos `<input>`; flechas curvas que conectan `for="email"` con `id="email"` y `for="mensaje"` con `id="mensaje"`. Al costado, un `<input placeholder="Correo">` solitario con flecha rota hacia *"lector de pantalla = ???"*. Verificación táctil en vivo: en el navegador, hacer clic en el texto del label y mostrar que el cursor salta al input — *"si el cursor no salta, está mal el `for/id`."*

---

## CONCEPTO 8: `<input type>`

### Definición técnica
El atributo `type` del `<input>` declara **qué tipo de dato se espera** (`text`, `email`, `password`, `number`, `tel`, `url`, etc.). Activa validación nativa básica del navegador (un `type="email"` bloquea el envío si el valor no contiene `@`) y, en móvil, **cambia el teclado virtual** que aparece (un `type="email"` muestra teclado con `@` accesible; un `type="tel"` muestra el numpad).

### Dependencia técnica
- El navegador lee el `type` y aplica la validación al enviar el formulario.
- En C01 se usan solamente `text` y `email`. Los demás (`password`, `number`, `tel`, `url`) son referencia.
- En **C04** se enriquece con `required`, `pattern`, `minlength` — no en C01.
- El default es `type="text"` si se omite. Aun así, **siempre declarar el `type` explícito** — buena práctica de claridad.

### Analogía
Como el tipo de ranura en un buzón. La ranura para cartas es delgada; la de paquetes, ancha. El buzón (navegador) rechaza lo que no encaja con el tipo de ranura declarado.

### Etimología
- `input` = entrada (de datos del usuario).
- `type` = tipo (del dato esperado).

### Estrategia visual
**Canva estático.** Tabla de 5 inputs (text, email, password, number, tel) con dos columnas a la derecha: "qué teclado virtual aparece en móvil" y "qué validación aplica el navegador". Refuerza que el `type` es decisión funcional, no estética.

---

## CONCEPTO 9: `<button type="submit">`

### Definición técnica
El atributo `type` del `<button>` declara su rol dentro del formulario:
- `submit` → envía el formulario (valida y dispara el envío).
- `reset` → limpia todos los campos del formulario.
- `button` → no hace nada por defecto; se conecta a JavaScript.

Por compatibilidad histórica, un `<button>` sin `type` dentro de un `<form>` se comporta como `submit` — pero **declararlo explícito es la buena práctica** (claridad para el siguiente dev que toque el código).

### Dependencia técnica
- El `<button>` debe estar dentro del `<form>` para que el `submit` funcione sin JavaScript.
- Al hacer clic, dispara primero la **validación nativa** de todos los inputs (verifica `required`, `type`, `pattern` cuando existan). Si alguno falla, el envío se bloquea y el navegador muestra el error nativo.
- El lector de pantalla lo anuncia como *"botón Enviar"* — el texto del botón se vuelve parte del anuncio.

### Analogía
Como el botón de "enviar" en una máquina de fax. Tiene un solo trabajo. Sin él, escribiste el documento pero no lo mandaste.

### Etimología
- `button` = botón.
- `submit` viene del latín *submittere* = someter, presentar para procesamiento.

### Estrategia visual
**Snippet en VS Code + demo en vivo.** Mostrar un formulario con tres botones (`submit`, `reset`, `button`) y hacer clic en cada uno. El primero recarga la página con los datos en la URL (envío default); el segundo limpia los campos; el tercero no hace nada. Cierre: *"En esta clase usamos submit. Reset casi no se usa en producción. Button se conecta a JS — eso viene en C07."*

---

## CONCEPTO 10: Navegación por teclado y orden de foco

### Definición técnica
Todos los elementos interactivos (links, botones, inputs, selects, textareas) deben ser **alcanzables y operables solo con el teclado**. La tecla `Tab` avanza al siguiente elemento focusable; `Shift+Tab` retrocede; `Enter`/`Space` activan. El orden de foco lo define **la posición en el DOM**, no en CSS. El navegador dibuja un contorno (focus ring) sobre el elemento enfocado.

### Dependencia técnica
- El orden de foco sigue el DOM, no el orden visual. Si en CSS reordenas elementos con Flexbox (`order`, `flex-direction: row-reverse`) o Grid, el orden visual cambia pero el foco sigue al DOM — puede crear desconexión visual/funcional. **Regla práctica:** mantener orden visual ≈ orden DOM.
- Eliminar el focus ring con `outline: none` sin reemplazarlo por un foco visible custom **rompe A11y** — el usuario que navega con teclado pierde de vista dónde está parado.
- Elementos no-interactivos (`<div>`, `<span>`) no son focusables por defecto. Hacerlos focusables con `tabindex="0"` es una bandera roja si pudo haber sido un `<button>` o un `<a>`.

### Analogía
Como recorrer las habitaciones de una casa en oscuridad con linterna. Cada `Tab` mueve la linterna a la siguiente habitación. Si una habitación está cerrada con llave (elemento no-focusable) o saltas de la cocina al ático sin pasar por las plantas intermedias (orden ilógico), pierdes.

### Etimología
- **Foco** = el elemento activo en ese momento.
- **Tab** = tabulador, viene de la tecla original de máquinas de escribir (alineaba el carro a columnas predefinidas).

### Estrategia visual
**Demo en vivo en el navegador.** Cerrar el mouse (físicamente alejarlo del aula o anunciar la regla "manos fuera del trackpad"). Navegar con `Tab` por la landing terminada y mostrar cómo el contorno azul del foco recorre cada elemento. **Verificación tangible:** capturar screenshots con el foco visible en logo → menú → form input → submit. Esto es **exactamente** lo que pide el checkpoint del lab — el alumno cierra la clase con ese artefacto.

---

# Anexo A: Git / GitHub (no concepto nuevo de Capa 0)

Git y GitHub se tratan como **recordatorio + hook** en Momento 1, no como concepto nuevo del Code 201. Supuesto pedagógico: el alumno los vio en pre-trabajo o en formación previa.

- **Material de apoyo del alumno:** `code201/class-01/git-and-github-basics-guide.md` (anexo del lab).
- **Comandos que recordamos en vivo:** `git init`, `git status`, `git add <archivo>`, `git commit -m "mensaje"`, `git remote add origin`, `git push -u origin main`.
- **Plan de contingencia:** si en el chequeo inicial del Momento 1 el grupo declara no conocer Git, ampliar el bloque de Momento 1 (gastar más del colchón) y dejar la Parte 1 del lab como tarea guiada extendida. El Momento 2 (estructura semántica) puede comenzar 10 min más tarde sin comprometer el resto de la clase.

---

# Anexo B: Notas internas sobre fuentes y decisiones

- **Por qué `<article>` y `<aside>` están en HTML5 Semántico pero no se enfatizan:** la Product Landing Page del proyecto víctima no los necesita (el demo `facilitator/demo/product-landing-page/index.html` usa solo `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`). Mencionar `<article>` y `<aside>` en el guion como "existen, los van a usar cuando armen un blog o un sidebar". No code-along sobre ellos.
- **Por qué el solucionario del facilitator usa `role="banner"`, `role="navigation"`, `role="main"`, `role="contentinfo"` redundantes:** decisión del facilitator. Eric debe decidir si replicarlo en el guion (refuerza el concepto de ARIA-rol = nombre del rol nativo) o eliminarlo (cumple la regla #1 de ARIA: no agregar ARIA cuando HTML nativo basta). **Pendiente decisión.**
- **`<input type="text">` para mensaje vs. `<textarea>`:** el solucionario y el lab usan `<input type="text">` para el campo Mensaje. En la práctica real, un campo "Mensaje" suele ser `<textarea>`. **Pendiente decisión:** ¿lo respetamos como está (consistencia con materiales) o lo mejoramos a `<textarea>` y dejamos `<input type="text">` como contraste pedagógico?
- **El draft del facilitator (`facilitator/draft.md`) está descartado:** habla de Canvas, lab-01a, gist. No alineado con el flujo de Enter. No es input.

---

# Próximo paso

Una vez Eric apruebe / corrija esta Capa 0, pasar a **Capa 1** (`mi-sistema/clase-01/CLASE 01.md`): estructura de 5–7 Momentos con tabla de tiempos.

Hipótesis inicial de partición en Momentos (a confirmar en Capa 1):

| Momento | Foco | Tiempo aprox |
|---|---|---|
| M1 | Bienvenida + Hook + Git/GitHub repaso + crear repo del Product Landing Page | ~30 min |
| M2 | HTML5 Semántico + Jerarquía de encabezados (Parte 2 del lab) | ~40 min |
| RECESO | | 30 min |
| M3 | A11y básica: `alt`, `aria-label`, `role` (Parte 3 del lab) | ~30 min |
| M4 | Formularios accesibles: `<form>`, `<label for>`/`<input id>`, `<input type>`, `<button type="submit">` (Parte 4 del lab) | ~40 min |
| M5 | Cierre: checkpoint Tab nav + verificación con teclado + commit final + entrega | ~20 min |
| Colchón | | ≥30 min |

Total preparado: ~2h 30min + 30min colchón. ✅
