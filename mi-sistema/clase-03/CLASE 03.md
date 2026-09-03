# CLASE 03: CSS Grid (esencial, intermedio y `grid-template-areas`)

> **Módulo:** M1 — Clase 3 de 4
> **Curso:** Code 201
> **Proyecto Víctima:** Product Landing Page (continúa desde C01/C02) — hoy crece de 1 archivo a 3 páginas (**_index.html_** + nuevos **_precios.html_** y **_faq.html_**)
> **Estado:** Capa 2+3 en progreso — M1 cerrado (pendiente revisión de Eric); M2–M5 en formato Capa 1
> **Fecha:** 2026-05-26
> **Base teórica:** **_mi-sistema/clase-03/CAPA 0 - CLASE 03.md_**

---

## Metadatos de la clase

| | |
|---|---|
| Duración real de clase | 3h (180 min) |
| Tiempo preparado | 2h 30min (150 min, incluye receso) |
| Receso | 10 min (entre M2 y M3) |
| Colchón invisible | 30 min |
| Total Momentos | 5 |
| Herramientas nuevas | CSS Grid (básico + intermedio + areas) + DevTools Grid Inspector (badge "grid" en panel Styles) |
| Conceptos Grid | **_display: grid_** (con 1 columna por default), **_grid-template-columns_**, unidad **_fr_**, **_repeat(N, valor)_**, **_repeat(auto-fit, minmax(...))_**, **_minmax(min, max)_**, **_grid-template-areas_**, **_grid-area_**, **_gap_** en Grid |
| Conceptos complementarios | Rutas relativas + anchor (**_href="archivo.html#id"_**), enlace con icono SVG + **_aria-label_**, **_&lt;details&gt;_** / **_&lt;summary&gt;_** |
| Continuidad con C01/C02 | El alumno llega con: HTML semántico, normalización CSS, **_box-sizing: border-box_**, breakpoints mobile-first 640/1024, nav y footer estilizados con Flex. Hoy se agrega CSS nuevo de Grid sobre 2 páginas nuevas. El **_index.html_** solo cambia en el **_&lt;nav&gt;_** (rutas + icono FAQ). |
| Lección pedagógica clave | **Cantidad fija** (4 planes) → media queries explícitas. **Cantidad variable** (logos, items de DB) → **_auto-fit + minmax_** sin media queries. Las dos técnicas conviven en la misma página (**_precios.html_**). |

---

## Tabla de tiempos

| # | Momento | Foco principal | Tiempo | Parte del lab |
|---|---|---|---|---|
| **M1** | Hook + Prerequisito multi-página | Mostrar el problema del layout 2D que Flex no resuelve + actualizar nav del **_index.html_** con rutas relativas e icono SVG para FAQ | **20 min** | Parte 1.1 |
| **M2** | **_precios.html_** con Grid básico mobile-first | Crear la página, Grid en móvil (1 col por default), media queries para 2 cols y 4 cols con los 4 planes | **50 min** | Parte 1.2 + 1.3 + 1.4 |
| | **RECESO** | | **10 min** | — |
| **M3** | Grid intermedio para "Marcas que confían" | **_repeat(auto-fit, minmax(150px, 1fr))_** + lección clave: cantidad fija vs variable | **20 min** | Parte 1.5 |
| **M4** | **_faq.html_** con **_grid-template-areas_** | Layout 2D mobile-first + reorganización a T invertida con media query 640px | **35 min** | Parte 2 (2.1 → 2.3) |
| **M5** | Criterio Grid vs Flex + commit + GitHub Pages | Tabla de casos, heurística "Grid 2D, Flex 1D", cierre, deploy, puente a Clase 04 | **15 min** | Parte 3 + Logros + Entrega |
| | **Colchón** | Preguntas, retrasos, retos extendidos | **30 min** | — |
| | **Total preparado** | | **150 min** | |

---

## Cadena problema → solución

```
M1: "Sabemos Flex (C02). Pero hay layouts 2D — header + sidebar + main + footer al
     mismo tiempo — que Flex no resuelve limpio. Y además, hoy el landing pasa de
     1 archivo a 3 páginas, hay que conectar el nav antes de meterle Grid a algo."
          ↓ (prerequisito: actualizar nav del index con rutas relativas + icono SVG FAQ con aria-label)
M2: "Tenemos las páginas conectadas pero precios.html está sin layout — los 4 planes
     son una lista plana. Necesitamos Grid básico mobile-first."
          ↓ (display: grid solo en móvil + media queries explícitas para 2 cols y 4 cols)
RECESO
M3: "Los planes se ven bien porque la cantidad es fija (4). ¿Y la sección de logos
     de marcas, donde la cantidad puede variar (6 hoy, 12 mañana)?"
          ↓ (Grid intermedio: auto-fit + minmax sin media queries — el grid decide solo)
M4: "Bien con grids de columnas iguales. Pero faq.html necesita un layout 2D real
     con header arriba + sidebar a la izquierda + main a la derecha + footer abajo,
     todo al mismo tiempo. Flex no puede hacer esto limpio."
          ↓ (grid-template-areas — dibujar el layout con texto, reorganizable entre breakpoints)
M5: "Tienen las 2 páginas nuevas funcionando responsivas. Falta criterio para decidir
     qué herramienta usar en cada caso de su carrera."
          ↓ (tabla Grid vs Flex + heurística "Grid 2D, Flex 1D" + commit + GitHub Pages + puente a Clase 04)
```

Cadena natural: cada problema es demostrable en vivo, la solución del siguiente momento responde directamente al dolor que acaban de ver. Pasa el test de §5.3.

---

## Estructura de Momentos

---

### MOMENTO 1 — Hook + Prerequisito multi-página

**Tiempo:** ~20 min
**Parte del lab:** Parte 1.1 (Actualizar el nav — rutas relativas + icono para FAQ)

> **OBJETIVO:** El alumno conecta el aprendizaje de C02 (Flex 1D) con el problema que abre Grid (layouts 2D). Antes de tocar Grid, deja el nav del **_index.html_** apuntando a 3 páginas reales (**_index.html_**, **_precios.html_**, **_faq.html_**) y reemplaza el último enlace por un icono SVG accesible con **_aria-label_**. Al cerrar M1, el alumno tiene la infraestructura multi-página lista para construir **_precios.html_** y **_faq.html_** en los momentos siguientes.

---

#### 1.1 Repaso C02 + el problema del layout 2D — Hook

**EN PANTALLA: EXCALIDRAW — Panel comparativo "Flex anidado vs Grid limpio" para el mismo layout de dashboard. A la izquierda, el HTML/wireframe que Flex necesita (3 niveles de anidamiento de divs envoltorios). A la derecha, el HTML/wireframe que Grid permite (un solo contenedor padre con 4 hijos directos). En el centro, el wireframe del resultado visual idéntico en ambos casos.**

> **Tu apertura:**
> *"Buenos días. La semana pasada cerraron C02 con su landing responsive usando Flex. Bien hecho — Flex resuelve cualquier layout en una sola dirección a la vez: fila O columna. Hoy vamos a un escenario donde Flex empieza a quedar corto. Miren esta pantalla."*

> **Tu explicación teórica precisa:**
> *"Miren la imagen. Mismo dashboard, dos formas de construirlo. Una con lo que ya saben — Flex. Otra con lo que viene hoy — Grid."*
>
> **Flex sirve para una dirección a la vez.** Una fila o una columna , osea es unidimensional. Pero el dashboard tiene cosas arriba, abajo Y a los lados, todas al mismo tiempo. Eso es 2D.
>
> *"Para resolverlo con Flex hay que anidar. Un Flex vertical afuera con 3 hijos: header, una fila del medio, y footer. Y adentro de esa fila del medio, OTRO Flex horizontal para acomodar sidebar y main."*
>
> **El problema:** esos divs envoltorios no significan nada. Solo existen para forzar un layout 2D con una herramienta 1D. **El HTML queda contaminado por el layout.**
>
> *"Grid hace lo mismo sin anidar."* Un solo contenedor padre. 4 hijos directos. Cada hijo va a su área. El CSS dibuja el layout con texto.
>
> *"Esa parte de la derecha — **_grid-template-areas_** — es el feature único de Grid. Es lo que Flex no puede hacer limpio. Lo van a escribir ustedes en el Momento 4 con la página de FAQ. Por ahora se llevan una sola regla: **Flex 1D, Grid 2D**. Una dirección, Flex. Dos direcciones, Grid."*

> **Tu cierre:**
> *"Hoy su landing pasa de ser **1 archivo** a ser **3 páginas**. Index, precios y FAQ. Antes de meterle Grid a cualquier cosa, hay que dejar el nav del index apuntando a las páginas nuevas. Eso es el Momento 1."*

---

#### 1.2 Rutas relativas — los 3 tipos de enlace

**EN PANTALLA: VS CODE — abierto **_index.html_** del alumno, scrolleado al bloque del **_&lt;nav&gt;_** actual (con los **_href="#"_** placeholders de C02).**

> **Tu explicación teórica precisa:**
> **¿Qué es una ruta relativa?** Forma de declarar un **_href_** que apunta a un archivo del mismo proyecto, sin URL completa (sin **_http://..._**, sin dominio). El navegador resuelve la ruta tomando como referencia la ubicación del archivo HTML actual.
>
> Existen **3 tipos** de enlace que vamos a usar hoy:
>
> - **_href="precios.html"_** → **ruta relativa**. Apunta a un archivo en la **misma carpeta** que el HTML actual.
> - **_href="#contacto"_** → **anchor / ancla**. NO carga otra página: scrollea a una sección con **_id="contacto"_** dentro de la página actual.
> - **_href="index.html#contacto"_** → **combinación**. Carga **_index.html_** Y después scrollea a la sección **_id="contacto"_**.
>
> *"En el nav que vamos a escribir hoy usamos las primeras dos formas. Si en un futuro quieren que desde **_precios.html_** el botón 'Contacto' lleve al alumno al formulario del index, la tercera forma es la respuesta."*

> **Pregunta de calibración:**
> *"Si en el nav escribo **_href="precios.html"_** y abro el landing desde **_https://misitio.com/_** — ¿a qué URL me lleva el navegador al hacer click?"*
> *(Respuesta esperada: **_https://misitio.com/precios.html_**. El navegador toma la URL actual como base y le pega la ruta relativa. No hay dominio explícito en el **_href_** porque el dominio se hereda del contexto.)*

---

#### 1.3 Code-along del lab — Parte 1.1 (actualizar el nav del index)

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — **_index.html_** a la izquierda en el bloque del **_&lt;nav&gt;_**, Live Server a la derecha mostrando el landing actual.**

> **Tu apertura:**
> *"Vamos al code-along. Dos partes: primero descargamos un icono SVG para el enlace FAQ, después reescribimos el nav. El patrón del icono con **_aria-label_** ya lo vieron en C02 cuando estilizaron el footer con los iconos sociales — hoy lo aplican al FAQ del nav. Mismo patrón, distinto lugar."*

> **Code-along del lab — Parte 1.1 (Paso A — Descargar el icono FAQ):**
> 1. Abrir [svgrepo.com](https://www.svgrepo.com) en el navegador.
> 2. Buscar **_"question mark"_** o **_"help circle"_** en el buscador de SVG Repo.
> 3. Elegir un icono simple (línea o sólido — sin colores extra).
> 4. Descargar el SVG. Guardarlo en la carpeta **_img/_** del proyecto como **_faq.svg_**.
> 5. Verificar en VS Code que el archivo **_img/faq.svg_** está creado.

> **Code-along del lab — Parte 1.1 (Paso B — Reescribir el _&lt;nav&gt;_ del _index.html_):**
> 1. En **_index.html_**, ubicar el bloque del **_&lt;nav&gt;_** actual.
> 2. Reemplazar el contenido por los 4 enlaces nuevos del lab:
> ```html
> <nav>
>   <a href="index.html" class="logo">Mi Producto</a>
>   <a href="index.html">Inicio</a>
>   <a href="precios.html">Precios</a>
>   <a href="faq.html" id="icono-faq" aria-label="Preguntas frecuentes">
>     <img src="img/faq.svg" alt="" width="24" height="24">
>   </a>
> </nav>
> ```
> 3. Mencionar mientras se escribe (el patrón ya conocido de C02):
>    - **_aria-label="Preguntas frecuentes"_** en el **_&lt;a&gt;_** → le dice al lector de pantalla qué hace el enlace, porque el icono solo no comunica.
>    - **_alt=""_** en el **_&lt;img&gt;_** → vacío intencional. Si el **_&lt;a&gt;_** ya tiene **_aria-label_**, el lector lo lee. Si el **_&lt;img&gt;_** también tuviera **_alt_** descriptivo, lo leería dos veces.
> 4. Guardar. Live Server recarga.
> 5. Verificar en navegador: el nav muestra los 3 enlaces de texto (logo, Inicio, Precios) y al final el icono FAQ.

> **Predecir antes de ejecutar:**
> *"Antes de hacer click en 'Precios' — ¿qué creen que va a pasar?"*
> *(Esperar respuestas. Resultado real: error 404, porque **_precios.html_** no existe todavía. Después del click, mostrar el 404 y aclarar: "Esto es lo esperado. Las páginas precios y FAQ las creamos en los momentos siguientes. Ahora mismo el nav apunta a archivos que vamos a construir en M2 y M4.")*

> **Reto autónomo al cerrar M1:**
> El logo del nav tiene **_class="logo"_**. Si en su CSS de C02 el **_.logo_** ocupaba todo el ancho con **_flex-grow: 1_**, asegurate que sigue funcionando ahora que cambiaste el HTML. Pista: el selector sigue siendo válido si la clase no cambió.

---

### MOMENTO 2 — **_precios.html_** con Grid básico mobile-first

**Tiempo:** ~50 min
**Parte del lab:** Parte 1 (1.2 + 1.3 + 1.4) — crear página, Grid en móvil, media queries para tablet/desktop

> **OBJETIVO:** El alumno aprende **primero el modelo Grid** (qué es, qué permite, contenedor vs ítem) y después los **5 conceptos esenciales de Grid básico** (**_display: grid_**, **_gap_**, **_grid-template-columns_**, unidad **_fr_**, **_repeat()_**) cada uno por separado — teoría con imagen + sintaxis + demo en archivo de apoyo aislado. Al final aplica todo junto al lab. Al cerrar M2, **_precios.html_** está completamente responsive con 4 planes Free/Starter/Pro/Enterprise en 3 breakpoints (1 col móvil → 2 cols tablet → 4 cols desktop).

> **Patrón pedagógico de M2 (importante):** primero se presenta el modelo Grid como concepto (sub-punto 2.2: qué es, contenedor vs ítem) — análogo a lo que se hizo con Flex en C02. Después, cada propiedad CSS de Grid es un sub-punto separado con la misma estructura — explicación teórica + imagen Excalidraw (anatomía visual estilo cajas numeradas) + sintaxis general + demo en **_apoyo-clase03.html_** aislado. La aplicación al lab del alumno se hace al final (sub-punto 2.8), cuando los conceptos ya están fijados. Esto evita que el alumno copie el bloque CSS sin entender qué hace cada propiedad.

---

#### 2.1 Crear **_precios.html_** — la página base sin layout — Parte 1.2 del lab

**EN PANTALLA: VS CODE — explorador del proyecto a la izquierda, **_index.html_** abierto a la derecha.**

> **Tu apertura:**
> *"Antes de meterle Grid a nada, necesitamos la página. Vamos al code-along de la Parte 1.2 del lab. Crean **_precios.html_** al mismo nivel del index, reusan el header y el footer del index, y agregan los 4 planes adentro del main. Sin estilos por ahora — solo el HTML."*

> **Code-along del lab — Parte 1.2:**
> 1. Crear archivo nuevo **_precios.html_** al mismo nivel que **_index.html_**.
> 2. Copiar el **_&lt;!DOCTYPE&gt;_**, **_&lt;head&gt;_**, **_&lt;header&gt;_** y **_&lt;footer&gt;_** del **_index.html_** (incluye el nav actualizado en M1).
> 3. Adentro del **_&lt;main&gt;_**, pegar el bloque del lab con el título, el subtítulo dentro de **_&lt;div id="content-precios"&gt;_** y el bloque **_&lt;div class="planes"&gt;_** con los 4 **_&lt;article class="plan"&gt;_** (Free / Starter / Pro / Enterprise).
> 4. Guardar. Abrir **_precios.html_** en navegador.
> 5. *"Lo ven sin estructura — 4 planes apilados, sin distinción visual. Eso es lo que vamos a arreglar. Antes de hacerlo en este archivo, los conceptos los aprendemos por separado."*

---

#### 2.2 ¿Qué es CSS Grid? El modelo y sus elementos

**EN PANTALLA: EXCALIDRAW — Panel 2.1 (anatomía del modelo Grid): un contenedor grande con borde definido, 6 cajas hijas numeradas (1-6) distribuidas en una grilla 3×2 con líneas punteadas marcando filas Y columnas. Etiqueta "Grid Container" apuntando al contenedor exterior, etiqueta "Grid Items" apuntando a las cajas hijas. Al lado, dos columnas listando las propiedades que viven en cada uno (CONTENEDOR: display:grid, grid-template-columns, gap, grid-template-areas / ÍTEM: grid-area).**

> **Tu explicación teórica precisa:**
> **¿Qué es CSS Grid?** Es el segundo modelo de layout de CSS — el primero fue Flex (lo aprendieron en C02). La diferencia clave: Flex es **unidimensional** (controla un eje a la vez: fila O columna). Grid es **bidimensional** (controla filas Y columnas al mismo tiempo). Cuando el layout necesita las dos dimensiones simultáneas, Grid es la herramienta.
>
> **Sus dos elementos (igual jerarquía que Flex — esto ya lo conocen):**
>
> - **Grid Container:** el elemento PADRE que recibe **_display: grid_**. Acá viven las propiedades que definen la grilla — cuántas columnas, cuántas filas, espacio entre celdas, áreas nombradas.
> - **Grid Items:** los hijos DIRECTOS del contenedor. Cada uno se acomoda en una celda de la grilla. Acá viven las propiedades que controlan a cada hijo individualmente — a qué área pertenece, cuánto se estira.
>
> *"Misma idea que vieron con Flex en C02 — un padre que decide las reglas del juego, hijos directos que obedecen. La diferencia es que ahora el juego es 2D, no 1D."*
>
> **Qué propiedades vamos a usar hoy:**
>
> - **En el contenedor** (M2 y M4): **_display: grid_**, **_grid-template-columns_**, **_gap_**, **_grid-template-areas_** (M4).
> - **En el ítem** (M4): **_grid-area_**.

**Sintaxis general (dónde va cada propiedad):**
```css
.contenedor {
  display: grid;
  /* PROPIEDADES DEL CONTENEDOR aquí */
  grid-template-columns: <valores>;
  gap: <valor>;
}

.contenedor > .hijo {
  /* PROPIEDADES DEL ÍTEM aquí (en cada hijo directo) */
  grid-area: <nombre-area>;
}
```

> **Tu cierre:**
> *"Eso es Grid: padre con **_display: grid_**, hijos directos que obedecen. Ahora veamos qué hace cada propiedad — una por una. Arrancamos con la que activa el modelo."*

---

#### 2.3 **_display: grid_** — activar el modelo

**EN PANTALLA: EXCALIDRAW — Panel 2.2 (anatomía visual de **_display: grid_**): comparativa de un contenedor sin Grid (3 cajas como bloques apilados, estilo flujo normal) vs el mismo contenedor con **_display: grid_** sin más declaraciones (3 cajas apiladas en 1 columna por default, ancho 100%). Cajas numeradas 1, 2, 3 con colores funcionales.**

> **Tu explicación teórica precisa:**
> **¿Qué es **_display: grid_**?** Propiedad que activa el modelo Grid en un elemento. Después de declararla, los hijos directos se vuelven **grid items** y obedecen las reglas de la grilla.
>
> **Comportamiento por default (sin más declaraciones):**
> - Grid crea **1 sola columna** que ocupa el 100% del ancho.
> - Cada hijo va en su propia fila — Grid genera filas implícitas automáticas.
> - **Visualmente es idéntico al flujo normal block.** La diferencia se nota cuando agregás otras propiedades de Grid.
>
> **Comparativa con _display: flex_:** Flex por default acomoda los hijos en una fila horizontal. Grid por default los apila en columna vertical. Por eso Grid es más natural para mobile-first — el estado base (móvil) ya es una columna sin necesidad de declarar nada más.

**Sintaxis general:**
```css
.contenedor {
  display: grid;
}
```

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — abrir **_mi-sistema/clase-03/apoyo-clase03.html_** y descomentar la sección **_DEMO M2.3_**. Guardar; Live Server recarga con 3 cajas apiladas en 1 columna.**

> **Demo en vivo:**
> 1. Mostrar las 3 cajas SIN **_display: grid_** primero — apiladas como bloques normales.
> 2. Agregar **_display: grid_** al contenedor. Guardar.
> 3. *"Mismo resultado visual. Pero ahora abro DevTools..."* Abrir DevTools → seleccionar el contenedor → click en el badge "grid" que aparece al lado de **_display: grid_** en el panel Styles.
> 4. Mostrar las líneas de la grilla en pantalla: 1 columna, 3 filas implícitas.
> 5. *"Eso es lo que activó **_display: grid_**. Ahora el contenedor sabe que es una grilla. Las reglas de Grid se aplican a sus hijos directos."*

> **Al cerrar el sub-punto:** volver a comentar la sección **_DEMO M2.3_** en **_apoyo-clase03.html_** antes de pasar al siguiente bloque.

---

#### 2.4 **_gap_** en Grid — separar las celdas sin **_margin_**

**EN PANTALLA: EXCALIDRAW — Panel 2.3 (anatomía visual de **_gap_** en Grid): contenedor de 3×2 con cajas numeradas pegadas (gap 0), al lado el mismo contenedor con **_gap: 24px_** mostrando la separación uniforme entre filas y columnas. Anotaciones rojas marcando dónde aplica el gap.**

> **Tu explicación teórica precisa:**
> **¿Qué es **_gap_**?** Propiedad del contenedor que agrega espacio fijo entre las celdas de la grilla. Reemplaza el viejo hack de poner **_margin_** en cada hijo. Mismo concepto que ya usaron en Flex (C02).
>
> **Diferencia con Flex:** en Grid, **_gap_** separa filas **Y** columnas a la vez (Flex solo en una dirección). Acepta uno o dos valores.

**Sintaxis general:**
```css
.contenedor {
  display: grid;
  gap: <valor>;                       /* mismo valor entre filas y entre columnas */
  gap: <valor-filas> <valor-cols>;    /* dos valores distintos */
}
```

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — abrir **_apoyo-clase03.html_** y descomentar la sección **_DEMO M2.4_**. Guardar; Live Server recarga con un contenedor 3×2 de cajas separadas.**

> **Demo en vivo:**
> 1. Mostrar las cajas con **_gap: 24px_** aplicado.
> 2. Cambiar a **_gap: 0_** en vivo. Las cajas se pegan.
> 3. Cambiar a **_gap: 8px 32px_**. Las filas con 8px de separación, las columnas con 32px.
> 4. *"Sin **_margin_** en ningún hijo. El espacio lo decide el contenedor — un solo lugar para tocar."*

> **Al cerrar el sub-punto:** volver a comentar la sección **_DEMO M2.4_** en **_apoyo-clase03.html_**.

---

#### 2.5 **_grid-template-columns_** — declarar las columnas explícitamente

**EN PANTALLA: EXCALIDRAW — Panel 2.4 (anatomía visual de **_grid-template-columns_**): mismo contenedor en 3 estados apilados — **_1fr 1fr 1fr_** (3 columnas iguales) / **_200px 1fr 1fr_** (primera fija, dos comparten el resto) / **_2fr 1fr_** (proporción 2:1). Cajas numeradas con tamaños proporcionales al valor de cada columna.**

> **Tu explicación teórica precisa:**
> **¿Qué es **_grid-template-columns_**?** Propiedad del contenedor que declara las columnas de la grilla de forma explícita. Recibe una lista de valores separados por espacio — **un valor por cada columna** que se quiera definir.
>
> - **3 valores** = 3 columnas.
> - **4 valores** = 4 columnas.
> - Cada valor puede ser una longitud (**_px_**, **_rem_**, **_%_**), una unidad **_fr_** (siguiente sub-punto), o una función (**_minmax()_**, **_repeat()_**).

**Sintaxis general:**
```css
.contenedor {
  display: grid;
  grid-template-columns: <valor-col1> <valor-col2> ... <valor-colN>;
}
```

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — abrir **_apoyo-clase03.html_** y descomentar la sección **_DEMO M2.5_**. Guardar; Live Server recarga con un contenedor de 3 cajas en 3 columnas iguales.**

> **Demo en vivo:**
> 1. Mostrar el estado inicial: **_grid-template-columns: 1fr 1fr 1fr_** → 3 columnas iguales.
> 2. Cambiar a **_grid-template-columns: 200px 1fr 1fr_**. La primera columna se vuelve fija de 200px; las otras dos se reparten el resto.
> 3. Cambiar a **_grid-template-columns: 2fr 1fr_**. Solo quedan 2 columnas. La primera ocupa el doble de la segunda. La tercera caja baja a una fila implícita nueva.
> 4. *"La cantidad de columnas la decide cuántos valores le pasen. Tres valores, tres columnas. Cuatro valores, cuatro columnas. Sin contar nada aparte."*

> **Al cerrar el sub-punto:** volver a comentar la sección **_DEMO M2.5_** en **_apoyo-clase03.html_**.

---

#### 2.6 Unidad **_fr_** — la fracción del espacio disponible

**EN PANTALLA: EXCALIDRAW — Panel 2.5 (anatomía visual de la unidad **_fr_**): una barra horizontal de 900px etiquetada como "espacio disponible". Debajo, 3 ejemplos visualizando la repartición: **_1fr 1fr_** (dos cajas mitad y mitad) / **_2fr 1fr_** (caja grande ocupa 2/3, chica 1/3) / **_200px 1fr_** (caja fija de 200px + el resto en una sola caja **_fr_**). Cada caja con su proporción anotada arriba.**

> **Tu explicación teórica precisa:**
> **¿Qué es la unidad **_fr_**?** Unidad de Grid que representa **una fracción del espacio disponible** después de haber asignado las dimensiones fijas (px, rem) y los **_gap_**. Es exclusiva de Grid — no funciona fuera del modelo.
>
> - **_1fr 1fr_** → dos columnas iguales (cada una toma 1/2 del espacio).
> - **_2fr 1fr_** → dos columnas en proporción 2:1 (primera 2/3, segunda 1/3).
> - **_200px 1fr_** → primera fija 200px; **_1fr_** toma TODO el espacio sobrante.
>
> **Diferencia con porcentajes (importante):** los **_%_** se calculan sobre el contenedor SIN restar **_gap_** ni columnas fijas — por eso pueden desbordar. La unidad **_fr_** se calcula sobre lo que **realmente queda libre** — nunca desborda.

**Sintaxis general:**
```css
grid-template-columns: <N>fr;          /* 1 columna que toma todo el espacio */
grid-template-columns: <N1>fr <N2>fr;  /* 2 columnas en proporción N1:N2 */
```

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — abrir **_apoyo-clase03.html_** y descomentar la sección **_DEMO M2.6_**. Guardar; Live Server recarga con 3 ejemplos lado a lado mostrando distintas combinaciones de **_fr_**.**

> **Demo en vivo:**
> 1. Mostrar los 3 estados del demo: **_1fr 1fr_**, **_2fr 1fr_**, **_200px 1fr_**.
> 2. Cambiar **_2fr 1fr_** a **_3fr 1fr_** en vivo. La primera caja crece a 3/4 del ancho.
> 3. Demostrar el problema de los porcentajes: cambiar **_1fr 1fr_** por **_50% 50%_** con **_gap: 16px_**. La segunda columna desborda porque 50%+50%+gap > 100%.
> 4. Volver a **_1fr 1fr_**: ya no desborda. *"Esa es la magia de **_fr_** — siempre se reparte lo que queda libre, descontando los gaps."*

> **Al cerrar el sub-punto:** volver a comentar la sección **_DEMO M2.6_** en **_apoyo-clase03.html_**.

---

#### 2.7 **_repeat(N, valor)_** — azúcar sintáctica

**EN PANTALLA: EXCALIDRAW — Panel 2.6 (anatomía visual de **_repeat()_**): comparativa "antes/después" mostrando que **_repeat(4, 1fr)_** y **_1fr 1fr 1fr 1fr_** producen exactamente la misma grilla de 4 columnas iguales. Flecha de equivalencia entre las dos sintaxis. Debajo, un ejemplo extremo con **_repeat(10, 1fr)_** mostrando que la forma larga sería ilegible.**

> **Tu explicación teórica precisa:**
> **¿Qué es **_repeat(N, valor)_**?** Función CSS que **repite el mismo valor N veces** en **_grid-template-columns_** (o **_-rows_**). No agrega funcionalidad — solo evita escribir lo mismo muchas veces. Es **azúcar sintáctica**: forma corta de escribir lo que ya funciona, sin cambiar el resultado.
>
> - **_repeat(4, 1fr)_** ≡ **_1fr 1fr 1fr 1fr_** (exactamente lo mismo).
> - **_repeat(10, 1fr)_** ≡ 10 **_1fr_** seguidos (ilegible sin **_repeat()_**).
>
> **Etimología:** "azúcar sintáctica" es un término clásico de programación — significa una forma más corta o más legible que produce **exactamente el mismo resultado** que la forma larga. El término lo acuñó el matemático Peter Landin en 1964.

**Sintaxis general:**
```css
grid-template-columns: repeat(<cantidad>, <valor-o-patrón>);
```

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — abrir **_apoyo-clase03.html_** y descomentar la sección **_DEMO M2.7_**. Guardar; Live Server recarga con dos contenedores idénticos lado a lado — uno usando la forma larga y otro **_repeat()_**.**

> **Demo en vivo:**
> 1. Mostrar los dos contenedores: arriba **_1fr 1fr 1fr 1fr_**, abajo **_repeat(4, 1fr)_**. Ambos se ven idénticos.
> 2. Cambiar el de arriba a **_1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr_** (8 columnas). El código se hace largo y feo.
> 3. Cambiar el de abajo a **_repeat(8, 1fr)_**. Mismo resultado, código limpio.
> 4. *"Vas a ver **_repeat()_** en código real toda tu carrera. Adelantamos el patrón ahora."*

> **Al cerrar el sub-punto:** volver a comentar la sección **_DEMO M2.7_** en **_apoyo-clase03.html_**.

---

#### 2.8 Aplicación al lab — Grid mobile-first en **_.planes_** + media queries — Parte 1.3 + 1.4

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — **_styles.css_** del proyecto víctima abierto, navegador a la derecha en **_precios.html_** modo responsive a ~400px.**

> **Tu apertura:**
> *"Bien. Ya conocen los 5 conceptos: **_display: grid_**, **_gap_**, **_grid-template-columns_**, **_fr_** y **_repeat()_**. Ahora los aplicamos los 5 juntos al lab. Misma página de precios. Mismo enfoque mobile-first que vieron en C02: arrancamos viendo el móvil primero — DevTools a 400px — y vamos agregando media queries hacia desktop."*

> **Code-along del lab — Parte 1.3 (Grid base móvil):**
> 1. Asegurarse de que DevTools modo responsive está a ~400px.
> 2. En **_styles.css_**, después de las reglas existentes, agregar el bloque base del lab:
> ```css
> .planes {
>   display: grid;
>   gap: 24px;
>   padding: 32px;
>   margin: 0 auto;
> }
> /* + estilos visuales de .plan (border, padding, background, Flex interno) */
> ```
> 3. Guardar. *"Cuatro cards apiladas en 1 columna. **_display: grid_** + **_gap_**, nada más. Eso es Grid mobile-first."*

> **Code-along del lab — Parte 1.4 (Tablet con 2 columnas):**
> 1. Arrastrar DevTools a 640px.
> 2. Al final de **_styles.css_** agregar:
> ```css
> @media (min-width: 640px) {
>   .planes {
>     grid-template-columns: 1fr 1fr;
>   }
> }
> ```
> 3. Guardar. Las 4 cards se reorganizan en 2×2. *"Dos valores **_1fr 1fr_** = dos columnas iguales. Los 4 planes en 2 filas de 2."*

> **Code-along del lab — Parte 1.4 (Desktop con 4 columnas + el atajo _repeat()_):**
> 1. Arrastrar DevTools a 1024px.
> 2. Agregar el segundo media query:
> ```css
> @media (min-width: 1024px) {
>   .planes {
>     grid-template-columns: 1fr 1fr 1fr 1fr;
>   }
> }
> ```
> 3. Guardar. Las 4 cards lado a lado. *"Cuatro **_1fr_** = cuatro columnas. Pero esto se puede escribir más corto."*
> 4. Reemplazar por **_grid-template-columns: repeat(4, 1fr)_**. Guardar. Mismo resultado. *"Vas a verlo así en todo el código real."*

> **Verificación final — los 3 niveles:**
> Arrastrar DevTools desde 400px hasta ancho completo. Confirmar la tabla del lab:
>
> | Viewport | Qué se ve |
> |---|---|
> | ~400px (móvil) | 4 cards apiladas en 1 columna |
> | ≥640px (tablet) | 2 cards arriba, 2 abajo |
> | ≥1024px (desktop) | 4 cards lado a lado en 1 fila |

> **Reto autónomo al cerrar M2:**
> Destacar el plan "Pro" como recomendado: border más grueso, fondo de color suave y un badge "Más popular" en la esquina superior derecha. Pista: **_position: relative_** en **_.plan.recomendado_** + **_position: absolute_** en el **_.badge_**.

> **Commit sugerido al cerrar M2:**
> ```bash
> git add .
> git commit -m "feat: precios.html con Grid básico mobile-first (1/2/4 columnas)"
> git push
> ```

---

### RECESO — 10 min

---

### MOMENTO 3 — Grid intermedio: "Marcas que confían" con **_auto-fit + minmax_**

**Tiempo:** ~20 min
**Parte del lab:** Parte 1.5 (auto-fit + minmax aplicado a la sección de logos)

> **OBJETIVO:** El alumno aprende los 2 conceptos nuevos de Grid intermedio (**_auto-fit_** y **_minmax_**) cada uno por separado, después la combinación canónica **_repeat(auto-fit, minmax(150px, 1fr))_**, y finalmente los aplica a la sección "Marcas que confían" de **_precios.html_**. Al cerrar M3, el alumno tiene clara la **lección pedagógica clave de la clase**: cuándo usar media queries explícitas (cantidad fija) vs **_auto-fit + minmax_** (cantidad variable). Las dos técnicas conviven en la misma página.

> **Patrón pedagógico de M3:** mismo enfoque que M2. Primero el hook que motiva el bloque (el problema de la cantidad variable). Después cada concepto nuevo por separado — teoría + imagen Excalidraw + sintaxis + demo en **_apoyo-clase03.html_**. Al final la aplicación al lab + el cierre con la lección clave que contrasta lo de M2 (planes con cantidad fija) con lo de M3 (logos con cantidad variable).

---

#### 3.1 El problema: ¿y si la cantidad de items puede variar?

**EN PANTALLA: NAVEGADOR a pantalla completa — abrir Mercado Libre (o Amazon, Falabella, lo que Eric prefiera). Hacer una búsqueda real: por ejemplo "zapatillas running". Mostrar la página de resultados con el grid de productos. Después hacer click en algún filtro lateral (marca, precio, talla) y mostrar cómo el grid se reorganiza con menos productos. Hacer otra búsqueda con resultados muy distintos en cantidad (ej: "iPhone 15" vs "auriculares"). Foco visual en cómo el LAYOUT se adapta sin importar cuántos productos haya.**

> **Tu apertura:**
> *"Listo, volvimos del receso. Antes de seguir, quiero que miren algo. Esto que ven en pantalla es Mercado Libre — una tienda online cualquiera. Pero les voy a hacer notar algo que pasa por delante de ustedes cada vez que entran a comprar online y nunca le prestaron atención."*
>
> *(Hacer una búsqueda. Mostrar el grid de resultados. Aplicar un filtro. Mostrar el nuevo grid con menos productos. Cambiar la búsqueda a algo con más resultados.)*
>
> *"Fíjense — cuando aplico un filtro, los productos cambian de cantidad. Eran 200, ahora son 24. El grid se reacomoda solo. No hay parpadeo, no se rompe, no aparecen huecos enormes ni se aplastan las tarjetas. **¿Cómo carajos sabe el navegador cuántas columnas hacer si la cantidad de productos cambia todo el tiempo?**"*

**EN PANTALLA: EXCALIDRAW — Panel 3.1 (cantidad fija vs cantidad variable): comparativa lateral. Lado izquierdo verde = cantidad fija (Planes Free/Starter/Pro/Enterprise — 4 cards alineadas). Lado derecho rojo = cantidad variable (tienda online, blog, dashboard — wireframes mostrando que la cantidad cambia con cada filtro/búsqueda/contenido). Texto inferior con la regla.**

> **Tu explicación teórica precisa:**
> *"En el momento 2 — los planes — la cosa fue fácil. ¿Por qué? Porque **el número de planes es fijo**. Free, Starter, Pro, Enterprise. Siempre van a ser 4. El cliente no se levanta un día y dice 'sumemos 7 planes nuevos'. Eso me permitió escribir media queries explícitas: **_1fr 1fr_** en tablet, **_repeat(4, 1fr)_** en desktop. Cada breakpoint sabe exactamente cuántas columnas dibujar."*
>
> *"Pero salgan del caso de los planes y miren cuánto del internet real funciona distinto."*
>
> **Casos del mundo real donde la cantidad NO la controlás:**
>
> - **Productos en una tienda online** — el grid de Mercado Libre que acabamos de ver. Hoy filtras "zapatillas Nike", salen 47. Mañana entran 20 modelos nuevos al catálogo y salen 67. La semana que viene aplicas un filtro distinto y salen 12. **El dev no controla cuántos productos hay.**
> - **Posts en una red social** — Instagram, Pinterest. El grid se llena con lo que el usuario subió. Cada cuenta tiene una cantidad distinta.
> - **Resultados de una búsqueda** — YouTube, Google Images. Cada query devuelve un número distinto.
> - **Items que vienen de una base de datos** — un blog donde el equipo de contenido sube artículos cuando quiere. Un dashboard donde la API trae datos en tiempo real. Una galería de fotos donde el usuario sube cuántas le da la gana.
> - **Logos de clientes en una página corporativa** — el que vamos a hacer en el lab dentro de un rato. Hoy son 6 marcas, en 3 meses cuando crezca la empresa van a ser 15. Y el dev no debería tocar nada.
>
> **El problema técnico:** ¿Cómo escribes media queries para un layout donde no sabés cuántos items van a haber? **No podés.**
>
> - No podés anticipar el breakpoint correcto si la cantidad cambia.
> - Cada vez que se agrega un item, el dev tendría que volver a recalcular y reescribir el CSS.
> - El cliente que sube productos a su tienda no debería depender del dev para que el layout no se rompa.
> - Y si se te ocurre escribir **_repeat(20, 1fr)_** "por si acaso" — en una pantalla chica vas a tener 20 columnas microscópicas. Tampoco sirve.
>
> **Lo que necesitamos** es una herramienta donde **el navegador decida solo** cuántas columnas caben en cada momento. Vos le decís "cada item mide al menos X, máximo se estira a Y" y él calcula el resto. Que el dev se desentienda del número.
>
> *"Eso existe en Grid. Se llama **_auto-fit_** y **_minmax_**. Dos palabras nuevas que se combinan en una fórmula. Y cuando las junten, van a tener un grid que se reorganiza solo — sin un solo **_@media_** — y que funciona igual con 6 items o con 60. Vamos por partes: primero **_auto-fit_**."*

> **Tu cierre:**
> *"En el lab vamos a aplicar esto a una sección chica del **_precios.html_** — los logos de marcas que confían en el producto. Pero la regla que están aprendiendo es la regla del internet real: cuando la cantidad la controla el contenido y no el diseñador, usás esta otra herramienta."*

---

#### 3.2 **_auto-fit_** — el grid decide cuántas columnas caben

**EN PANTALLA: EXCALIDRAW — Panel 3.2 (anatomía visual de **_auto-fit_**): mismo contenedor en 3 anchos distintos (1200px, 800px, 400px) con **_repeat(auto-fit, 200px)_**. En 1200px caben 6 cajas; en 800px caben 4; en 400px caben 2. Espacio vacío visible al final de cada fila (porque solo auto-fit, sin minmax, no estira las cajas). Cajas numeradas con colores funcionales.**

> **Tu explicación teórica precisa:**
> **¿Qué es **_auto-fit_**?** Palabra clave que se usa **dentro de _repeat()_** en lugar de un número de columnas fijo. Le dice a Grid "ajustá automáticamente cuántas columnas caben en el ancho disponible — vos calculá".
>
> **Comparativa rápida:**
> - **_repeat(4, 1fr)_** → siempre 4 columnas, sin importar el ancho.
> - **_repeat(auto-fit, 200px)_** → tantas columnas de 200px como quepan.
>
> **Limitación crítica:** **_auto-fit_** **por sí solo no es suficiente**. Si le pasás un valor fijo como **_200px_**, las columnas siempre miden 200px y el sobrante queda como espacio vacío al final de la fila — feo. Para que las columnas se estiren al espacio sobrante hay que combinarlo con **_minmax_** (siguiente sub-punto).

**Sintaxis general:**
```css
grid-template-columns: repeat(auto-fit, <ancho-de-columna>);
```

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — abrir **_apoyo-clase03.html_** y descomentar la sección **_DEMO M3.2_**. Guardar; Live Server recarga con un contenedor de 6 cajas usando **_repeat(auto-fit, 200px)_**.**

> **Demo en vivo:**
> 1. Mostrar las 6 cajas en el contenedor a ancho completo: caben 5-6 columnas con espacio vacío al final.
> 2. Achicar la ventana del navegador lentamente. Mostrar cómo el número de columnas baja a 4, 3, 2, 1.
> 3. *"El navegador está calculando solo cuántas columnas de 200px caben. Eso es **_auto-fit_**."*
> 4. Llamar la atención al espacio vacío al final de la fila: *"Pero miren — siempre sobra espacio al borde derecho porque las cajas son rígidas de 200px. Para que se estiren y llenen el ancho, necesitamos minmax."*

> **Al cerrar el sub-punto:** volver a comentar la sección **_DEMO M3.2_** en **_apoyo-clase03.html_**.

---

#### 3.3 **_minmax(min, max)_** — un rango de tamaño para la columna

**EN PANTALLA: EXCALIDRAW — Panel 3.3 (anatomía visual de **_minmax_**): tres ejemplos apilados mostrando el mismo contenedor con una sola columna en 3 anchos distintos. Estado 1: **_minmax(150px, 1fr)_** → la columna mide 150px en pantalla angosta, 1fr (todo el ancho) en pantalla amplia. Estado 2: **_minmax(100px, 300px)_** → rango cerrado, la columna nunca pasa de 300px aunque sobre espacio. Estado 3: explicación visual de "mínimo / máximo / rango permitido".**

> **Tu explicación teórica precisa:**
> **¿Qué es **_minmax(min, max)_**?** Función CSS que define un **rango de tamaño** para una columna (o fila): un valor mínimo que la columna nunca puede ser menor, y un valor máximo que nunca puede superar. Grid acomoda la columna dentro de ese rango según el espacio disponible.
>
> **Ejemplos típicos:**
> - **_minmax(150px, 1fr)_** → mínimo 150px, máximo 1 fracción del espacio sobrante. **Esta es la combinación que se usa con _auto-fit_** para que las columnas se estiren al ancho disponible.
> - **_minmax(100px, 300px)_** → rango cerrado en ambos extremos. La columna nunca pasa de 300px aunque sobre espacio.
>
> **Por qué lo necesitamos:** porque **_auto-fit_** solo calcula cuántas columnas caben con un tamaño FIJO. **_minmax_** le da el rango para que las columnas se estiren cuando sobra espacio.

**Sintaxis general:**
```css
grid-template-columns: minmax(<min>, <max>);
```
`<min>` y `<max>` pueden ser cualquier longitud (**_px_**, **_rem_**, **_%_**) o **_1fr_**. El primer argumento siempre es el menor; el segundo el mayor.

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — abrir **_apoyo-clase03.html_** y descomentar la sección **_DEMO M3.3_**. Guardar; Live Server recarga con una sola columna mostrando cómo se estira/encoge con **_minmax_**.**

> **Demo en vivo:**
> 1. Mostrar el contenedor con una sola columna en **_minmax(150px, 1fr)_**. La caja toma todo el ancho disponible (porque **_1fr_** la estira).
> 2. Achicar la ventana del navegador hasta menos de 150px. La caja se queda en 150px mínimo (puede generar scroll horizontal, ese es el comportamiento esperado del mínimo).
> 3. Cambiar a **_minmax(100px, 300px)_**. La caja nunca pasa de 300px aunque sobre espacio. Mostrar cómo queda chica en pantalla ancha.
> 4. Volver a **_minmax(150px, 1fr)_**. *"Esta combinación — un mínimo en píxeles y un máximo en **_1fr_** — es la que vamos a usar junto con auto-fit."*

> **Al cerrar el sub-punto:** volver a comentar la sección **_DEMO M3.3_** en **_apoyo-clase03.html_**.

---

#### 3.4 **_repeat(auto-fit, minmax(...))_** — el patrón canónico que junta todo

**EN PANTALLA: EXCALIDRAW — Panel 3.4 (anatomía visual de la combinación): la fórmula canónica **_repeat(auto-fit, minmax(150px, 1fr))_** descompuesta visualmente. Arriba, la fórmula con flechas anotadas señalando cada parte (auto-fit = "tantas como quepan" / 150px = "mínimo de cada columna" / 1fr = "se estira al sobrar espacio"). Abajo, el comportamiento en 3 viewports apilados (400px → 2 cols / 700px → 4 cols / 1200px → 6 cols). 6 cajas numeradas que se reorganizan SIN media queries.**

> **Tu explicación teórica precisa:**
> **La combinación canónica:** **_repeat(auto-fit, minmax(<min>, 1fr))_**. Esta es la fórmula que vas a ver en TODO código real cuando alguien quiere una grilla responsive automática.
>
> **Lectura literal:**
> - **_repeat(auto-fit, ...)_** → "tantas columnas como quepan".
> - **_minmax(150px, 1fr)_** → "cada columna mide al menos 150px y como mucho una fracción del espacio sobrante".
>
> **Resultado:** una grilla que cambia el número de columnas según el ancho del contenedor SIN que el desarrollador escriba media queries. Si la pantalla es chica, caben menos columnas y se estiran al ancho. Si la pantalla es grande, caben más columnas y se estiran al ancho. El grid hace todo el cálculo.

**Sintaxis general:**
```css
.contenedor {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(<min>, <max>));
  gap: <valor>;
}
```

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — abrir **_apoyo-clase03.html_** y descomentar la sección **_DEMO M3.4_**. Guardar; Live Server recarga con 6 cajas usando la combinación canónica.**

> **Demo en vivo:**
> 1. Mostrar las 6 cajas con **_repeat(auto-fit, minmax(150px, 1fr))_** en ancho completo: caben las 6 estiradas al ancho.
> 2. Achicar la ventana lentamente. Las cajas se reorganizan: 6 → 5 → 4 → 3 → 2 → 1 columnas. Siempre llenan el ancho sin huecos.
> 3. *"Cero media queries en el CSS. La grilla se reorganiza sola según el ancho disponible. **Esta es la magia de Grid intermedio.**"*
> 4. Abrir DevTools → click en el badge "grid" del contenedor. Mostrar las líneas de la grilla cambiando en tiempo real al cambiar el ancho.

> **Al cerrar el sub-punto:** volver a comentar la sección **_DEMO M3.4_** en **_apoyo-clase03.html_**.

---

#### 3.5 Aplicación al lab + cierre con la lección clave — Parte 1.5

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — **_precios.html_** del proyecto víctima abierto, **_styles.css_** abierto, navegador a la derecha en **_precios.html_** modo responsive a ancho completo.**

> **Tu apertura:**
> *"Bien. Ya conocen la combinación. Ahora la aplicamos al lab. Agregan una sección nueva al final de **_precios.html_** — 'Marcas que confían en nosotros' — con 6 logos. Y le aplican **_auto-fit + minmax_** sin media queries."*

> **Code-along del lab — Parte 1.5 (HTML de la sección):**
> 1. Abrir **_precios.html_**.
> 2. Al final del **_&lt;main&gt;_** (después de la sección de planes), agregar:
> ```html
> <section class="clientes">
>   <h2>Marcas que confían en nosotros</h2>
>   <div class="logos">
>     <div class="logo-cliente">ACME</div>
>     <div class="logo-cliente">TechCo</div>
>     <div class="logo-cliente">StartupX</div>
>     <div class="logo-cliente">BigCorp</div>
>     <div class="logo-cliente">GlobalInc</div>
>     <div class="logo-cliente">FutureLab</div>
>   </div>
> </section>
> ```
> 3. Guardar. Verificar en navegador: los logos aparecen apilados en una columna (sin estilos todavía).

> **Code-along del lab — Parte 1.5 (CSS con auto-fit + minmax):**
> 1. En **_styles.css_**, después de las reglas de **_.planes_**, agregar:
> ```css
> .clientes {
>   padding: 32px;
>   margin: 0 auto;
> }
>
> .logos {
>   display: grid;
>   grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
>   gap: 16px;
>   margin-top: 16px;
> }
>
> .logo-cliente {
>   background: #f5f5f5;
>   padding: 24px;
>   text-align: center;
>   font-weight: 700;
>   border-radius: 8px;
> }
> ```
> 2. Guardar. *"Una sola declaración: **_repeat(auto-fit, minmax(150px, 1fr))_**. Sin media queries. Listo."*

> **Verificación final — el grid se adapta solo:**
> Arrastrar DevTools desde ~400px hasta ancho completo. Los 6 logos se reorganizan automáticamente en 2 → 3 → 4 → 6 columnas. **Cero media queries en el CSS para esta sección.**

> **Cierre con la lección clave de la clase (LO IMPORTANTE):**
>
> *"Antes de cerrar M3, quiero que vean algo. Su **_precios.html_** ahora tiene DOS técnicas distintas de Grid responsive conviviendo en la misma página."*
>
> Scrollear hasta la sección de planes:
> - *"Acá arriba — los planes — usé `1fr 1fr` en 640px y `repeat(4, 1fr)` en 1024px. Media queries explícitas porque la cantidad es FIJA: siempre van a ser 4 planes."*
>
> Scrollear hasta la sección de logos:
> - *"Acá abajo — los logos — usé `repeat(auto-fit, minmax(150px, 1fr))` sin una sola media query. Porque la cantidad es VARIABLE: hoy 6, mañana 12, el dev no lo controla."*
>
> **La regla que se llevan:**
>
> | Caso | Técnica |
> |---|---|
> | **Cantidad fija** (planes Free/Starter/Pro/Enterprise) | Media queries explícitas con **_grid-template-columns: 1fr 1fr_** → **_repeat(4, 1fr)_** |
> | **Cantidad variable** (logos, items de una base de datos, tags) | **_repeat(auto-fit, minmax(<min>, 1fr))_** sin media queries |
>
> *"Esa es la decisión que van a tomar en cada layout que construyan en su carrera: ¿la cantidad es fija o variable? La respuesta les dice qué herramienta usar. Punto."*

> **Commit sugerido al cerrar M3:**
> ```bash
> git add .
> git commit -m "feat: sección 'Marcas que confían' con auto-fit + minmax (cantidad variable)"
> git push
> ```

---

### MOMENTO 4 — **_faq.html_** con **_grid-template-areas_** (el feature distintivo de Grid)

**Tiempo:** ~35 min
**Parte del lab:** Parte 2 (2.1 → 2.3) — crear faq.html, layout móvil apilado, media query desktop con T invertida

> **OBJETIVO:** El alumno aprende **_grid-template-areas_** y **_grid-area_** cada uno por separado, después la reorganización entre breakpoints como patrón mobile-first declarativo, y finalmente los aplica a **_faq.html_** con un layout 2D real (header + sidebar nav de categorías + main de preguntas + footer). Al cerrar M4, el alumno entiende por qué este es **el feature distintivo de Grid** — la única cosa que Flex no puede hacer limpio — y completa la trilogía de la clase: Grid básico (M2) + Grid intermedio (M3) + Grid avanzado (M4).

> **Patrón pedagógico de M4:** mismo enfoque que M2 y M3. Primero el setup HTML (crear faq.html con todos sus elementos, incluyendo **_&lt;details&gt;_** + **_&lt;summary&gt;_** como bonus de HTML puro). Después cada concepto técnico por separado — teoría + imagen Excalidraw + sintaxis + demo en **_apoyo-clase03.html_** aislado. Al final aplicación al lab. Diferencia clave con M2/M3: este momento cierra la trilogía y conecta con el cierre de la clase (M5) — el alumno sale sabiendo cuándo usar cada nivel de Grid.

---

#### 4.1 Crear **_faq.html_** con doble nav y FAQ expandible (HTML) — Parte 2.1 del lab

**EN PANTALLA: VS CODE — explorador del proyecto, **_precios.html_** abierto a la izquierda como referencia del header reusable.**

> **Tu apertura:**
> *"Volvimos. Cerramos **_precios.html_** completo con dos técnicas de Grid responsive. Ahora vamos a la segunda página nueva del día: **_faq.html_** — preguntas frecuentes. Acá entra el feature más potente de Grid, el único que Flex no puede imitar. Pero antes de meterle Grid, armamos el HTML."*

> **Code-along del lab — Parte 2.1:**
> 1. Crear archivo nuevo **_faq.html_** al mismo nivel que **_index.html_** y **_precios.html_**.
> 2. Copiar el **_&lt;!DOCTYPE&gt;_**, **_&lt;head&gt;_** y **_&lt;header&gt;_** del **_index.html_** (con el nav actualizado en M1).
> 3. **Dentro del **_&lt;header&gt;_**, agregar el título de la página:** **_&lt;h1&gt;Preguntas Frecuentes&lt;/h1&gt;_**.
> 4. **Aplicar la clase al body:** **_&lt;body class="faq-layout"&gt;_** — esto es lo que va a recibir **_display: grid_** en los siguientes sub-puntos.
> 5. Pegar el bloque completo del lab: un segundo **_&lt;nav class="faq-nav"&gt;_** (categorías General / Precios / Soporte), un **_&lt;main class="faq-main"&gt;_** con 3 **_&lt;section&gt;_** que contienen **_&lt;details&gt;_** y **_&lt;summary&gt;_** para cada pregunta, y el footer reusado del landing.

> **Aclaración 1 — Dos navs en una página, ¿se conflictúan?**
> *"Pueden notar que hay 2 elementos **_&lt;nav&gt;_** en la página. ¿Es eso un error? **No.** El **_&lt;nav&gt;_** del header es el nav PRINCIPAL del sitio — para moverse entre páginas (Inicio / Precios / FAQ). El **_&lt;nav class="faq-nav"&gt;_** que está debajo es un nav LOCAL — para moverse dentro de las categorías de esta página. Semánticamente son distintos. La clase **_.faq-nav_** los diferencia en el CSS."*

> **Aclaración 2 — `<details>` + `<summary>` da expandible sin JavaScript:**
> *"Otra cosa que vale la pena que noten: ese **_&lt;details&gt;_** con **_&lt;summary&gt;_** adentro. Click en el summary → la pregunta se expande. Click de nuevo → se cierra. **Sin JavaScript.** HTML puro. Es un elemento que existe en el estándar desde 2014 y la mayoría de los devs no lo conoce. Cualquier accordion / dropdown / FAQ que hayan visto se hace típicamente con JS — pero para casos simples como este, HTML resuelve solo."*
>
> Demo rápido en el navegador: abrir **_faq.html_**. Click en una pregunta. Expande. Click de nuevo. Cierra. *"No hay un solo evento de JavaScript en juego. Eso es **_&lt;details&gt;_**."*

> **Verificación al cerrar 4.1:**
> Abrir **_faq.html_** en navegador. Sin estilos de layout: el alumno ve header + h1 + nav-categorías + main con preguntas expandibles + footer, todo apilado verticalmente como flujo block normal. No hay grid todavía. Las preguntas expanden al click — eso confirma que **_&lt;details&gt;_** funciona.

---

#### 4.2 **_grid-template-areas_** — dibujar el layout con texto

**EN PANTALLA: EXCALIDRAW — Panel 4.1 (anatomía visual de **_grid-template-areas_**): a la izquierda, el bloque CSS con 3 strings entre comillas (header, nav main, footer footer). A la derecha, el wireframe resultado del layout 2D con cada área etiquetada y coloreada. Flechas que conectan cada palabra del CSS con su área visual.**

> **Tu explicación teórica precisa:**
> **¿Qué es **_grid-template-areas_**?** Propiedad del contenedor Grid que **dibuja el layout con texto** — usando nombres de regiones en strings. Es la única propiedad de Grid que **literalmente se lee como un mapa**.
>
> **Cómo funciona la sintaxis:**
> - Cada **string entre comillas** es una **fila** de la grilla.
> - Cada **palabra** dentro del string es una **columna** de esa fila.
> - Las **palabras nombran las áreas** del grid. Esos nombres después se asignan a cada elemento con **_grid-area_** (sub-punto 4.3).
>
> *"Es como dibujar el plano de una casa con palabras. 'Acá va el dormitorio, acá la cocina, acá el living'. El plano es el CSS. Después con **_grid-area_** decís 'la mesa va en la cocina'."*
>
> **Regla obligatoria:** cada área nombrada debe formar un **rectángulo**. No se pueden hacer formas en L o T. Si una palabra aparece en 2 celdas no adyacentes, el CSS es inválido y el navegador ignora la regla.
>
> **Por qué es EL feature distintivo de Grid:** **Flex no puede hacer esto.** Flex es unidimensional — solo controla un eje. Para conseguir un layout 2D con Flex hay que anidar contenedores (lo vieron en el Panel 1.1 del Momento 1). Con **_grid-template-areas_** el layout es **declarativo**: literalmente se dibuja con texto, en un solo contenedor padre.

**Sintaxis general:**
```css
.contenedor {
  display: grid;
  grid-template-areas:
    "<area-f1c1> <area-f1c2> ... <area-f1cN>"
    "<area-f2c1> <area-f2c2> ... <area-f2cN>"
    ...
    "<area-fMc1> <area-fMc2> ... <area-fMcN>";
  grid-template-columns: <col1> <col2> ... <colN>;
}
```
- `<area-XYZ>` es un nombre arbitrario que vos elegís (header, nav, main, footer, sidebar, etc.).
- Usar `.` (un punto solo) para dejar una celda **vacía** sin área asignada.
- `grid-template-columns` define los anchos de cada columna (puede usar `fr`, `px`, etc.).

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — abrir **_apoyo-clase03.html_** y descomentar la sección **_DEMO M4.2_**. Guardar; Live Server recarga con un contenedor con 3 áreas (header, main, footer) en 1 columna.**

> **Demo en vivo:**
> 1. Mostrar el contenedor inicial: 3 áreas apiladas verticalmente (1 columna). Las palabras del **_grid-template-areas_** son **_"header"_**, **_"main"_**, **_"footer"_**.
> 2. Cambiar el **_grid-template-areas_** a 2 columnas:
>    ```css
>    grid-template-areas:
>      "header header"
>      "nav    main"
>      "footer footer";
>    grid-template-columns: 200px 1fr;
>    ```
> 3. Guardar. *"Miren. Cambié el CSS — literalmente redibujé el plano — y el layout se reorganizó. Sin tocar HTML. Sin tocar los elementos individuales."*
> 4. Mostrar también el comportamiento con un área vacía: cambiar una palabra por **_._** (punto). Esa celda queda vacía.
> 5. *"Esto es **_grid-template-areas_**. Una propiedad que dibuja el layout 2D con texto. El paso que falta es decirle a cada elemento HTML a qué área pertenece — eso es **_grid-area_**, siguiente sub-punto."*

> **Al cerrar el sub-punto:** volver a comentar la sección **_DEMO M4.2_** en **_apoyo-clase03.html_**.

---

#### 4.3 **_grid-area_** — asignar cada elemento a su área

**EN PANTALLA: EXCALIDRAW — Panel 4.2 (anatomía visual de **_grid-area_**): a la izquierda, lista de elementos HTML (header, .faq-nav, .faq-main, footer). En el centro, las áreas nombradas del grid (rectángulos coloreados con el nombre dentro). A la derecha, las reglas CSS de **_grid-area_** conectando cada elemento HTML con su área del grid. Flechas que muestran "este elemento → esta área".**

> **Tu explicación teórica precisa:**
> **¿Qué es **_grid-area_**?** Propiedad del **ítem** (no del contenedor). Asigna ese elemento a una de las áreas nombradas en el **_grid-template-areas_** del padre. El valor de **_grid-area_** debe coincidir EXACTAMENTE con uno de los nombres usados en el padre.
>
> **Cómo funciona:** si el padre tiene **_grid-template-areas: "header" "nav" "main" "footer"_**, entonces cada hijo declara a qué área pertenece:
> - Elemento **_&lt;header&gt;_** → **_grid-area: header_**
> - Elemento **_&lt;nav&gt;_** → **_grid-area: nav_**
> - Y así para cada uno.
>
> **Consecuencia visual importante (esto sorprende a todos):** el **orden visual** del layout depende de **_grid-template-areas_** en el padre — **NO** del orden del HTML. Podés tener el **_&lt;footer&gt;_** primero en el HTML y aparecer último en pantalla, si el padre dice que **_footer_** va abajo. Esto es lo que hace a Grid **declarativo**: el layout se decide en el CSS, no en la estructura del HTML.

**Sintaxis general:**
```css
.elemento-hijo {
  grid-area: <nombre-area>;
}
```
- `<nombre-area>` debe coincidir literalmente con alguna palabra usada en el **_grid-template-areas_** del padre.
- Los nombres son arbitrarios — pueden ser cualquier identificador válido (sin espacios, sin caracteres especiales). Lo importante es la **consistencia** entre el padre y los hijos.

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — abrir **_apoyo-clase03.html_** y descomentar la sección **_DEMO M4.3_**. Guardar; Live Server recarga con 4 elementos HTML asignados a las áreas del grid de 2.2.**

> **Demo en vivo:**
> 1. Mostrar el HTML del demo: 4 elementos (un header, un nav, un main, un footer) con sus respectivas reglas **_grid-area_**.
> 2. *"Cada elemento sabe a qué área pertenece. El padre define las áreas, el hijo las usa."*
> 3. **Demo del poder declarativo:** en el HTML, mover el **_&lt;footer&gt;_** al PRINCIPIO (antes del header). Guardar.
> 4. *"¿Y qué ven? El layout NO cambió. El footer sigue abajo. Porque el orden visual lo decide el CSS (**_grid-template-areas_**), no el HTML. Eso es lo que hace a Grid declarativo: separás completamente la estructura del documento del layout visual."*
> 5. Volver a poner el HTML en orden normal.

> **Al cerrar el sub-punto:** volver a comentar la sección **_DEMO M4.3_** en **_apoyo-clase03.html_**.

---

#### 4.4 Reorganización entre breakpoints — el poder declarativo mobile-first

**EN PANTALLA: EXCALIDRAW — Panel 4.3 (reorganización entre breakpoints): dos estados lado a lado del mismo contenedor con los mismos 4 elementos HTML. Estado A (móvil ~400px): **_grid-template-areas_** de 4 filas × 1 columna — header / nav / main / footer apilados. Estado B (tablet ≥640px): **_grid-template-areas_** de 3 filas × 2 columnas con T invertida — "header header" / "nav main" / "footer footer". Misma cantidad de elementos HTML, layouts completamente distintos por el cambio de la regla dentro de un media query.**

> **Tu explicación teórica precisa:**
> **El patrón canónico mobile-first con **_grid-template-areas_**:** definir el layout móvil en el CSS base (todo apilado en 1 columna), y dentro de una media query **_@media (min-width: ...)_** **REDEFINIR** el **_grid-template-areas_** para reorganizar el layout en pantallas grandes.
>
> **Por qué es declarativo:** en el media query NO tocás los elementos HTML, NO cambiás el HTML, NO modificás las clases. **Solo redibujás el mapa**. Le decís al grid "ahora el plano es este otro" y el navegador reorganiza todos los elementos a sus nuevas posiciones.
>
> *"Comparen con la alternativa: si tuvieran que hacer esto con Flex anidado, tendrían que cambiar la estructura del HTML, agregar clases nuevas, o calcular **_flex-basis_** a mano para cada elemento. Con Grid, redefinís 4 líneas de strings y listo."*

**Sintaxis general:**
```css
/* CSS base — móvil (1 columna apilada) */
.contenedor {
  display: grid;
  grid-template-areas:
    "<area-1>"
    "<area-2>"
    "<area-3>"
    "<area-4>";
  grid-template-columns: 1fr;
}

/* TABLET+ (≥640px) — reorganización a 2 columnas */
@media (min-width: 640px) {
  .contenedor {
    grid-template-areas:
      "<area-1> <area-1>"
      "<area-2> <area-3>"
      "<area-4> <area-4>";
    grid-template-columns: <col1> <col2>;
  }
}
```
- En el media query **solo redefinís** **_grid-template-areas_** y **_grid-template-columns_**. El resto (**_display: grid_**, **_gap_**, **_grid-area_** de cada hijo) lo heredás del CSS base.
- Los nombres de las áreas son los MISMOS en los dos breakpoints. Lo que cambia es CÓMO se distribuyen en filas y columnas.

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — abrir **_apoyo-clase03.html_** y descomentar la sección **_DEMO M4.4_**. Guardar; Live Server recarga con un layout que cambia de apilado (móvil) a T invertida (tablet) al cruzar 640px.**

> **Demo en vivo:**
> 1. Abrir DevTools modo responsive a ~400px. Mostrar el layout móvil: 4 elementos apilados verticalmente.
> 2. Arrastrar el viewport lentamente hacia la derecha. Al cruzar 640px, **el layout se reorganiza solo**: header y footer ocupan el ancho completo (2 columnas cada uno), nav y main se ubican lado a lado en la fila del medio.
> 3. Mostrar el CSS al alumno: *"Acá arriba está el CSS base — el móvil. Acá abajo está el media query — el desktop. Lo único que cambia entre los dos son las strings del **_grid-template-areas_** y la cantidad de **_grid-template-columns_**. Nada más. El HTML es el mismo en los dos casos."*
> 4. Volver al ancho ≥640px y mostrar la T invertida formada.
> 5. *"Eso es lo que hace a **_grid-template-areas_** el feature distintivo: redibujar el layout entre breakpoints es declarativo. Literalmente dibujás el nuevo mapa con texto."*

> **Al cerrar el sub-punto:** volver a comentar la sección **_DEMO M4.4_** en **_apoyo-clase03.html_**.

---

#### 4.5 Aplicación al lab — **_faq.html_** con T invertida mobile-first — Parte 2.2 + 2.3

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — **_faq.html_** y **_styles.css_** del proyecto víctima abiertos, navegador a la derecha en **_faq.html_** modo responsive a ~400px.**

> **Tu apertura:**
> *"Ya conocen las 3 piezas: **_grid-template-areas_** dibuja el layout, **_grid-area_** asigna cada elemento a su área, y la reorganización entre breakpoints se hace redefiniendo el **_grid-template-areas_** dentro de un media query. Ahora aplicamos todo junto a **_faq.html_**."*

> **Code-along del lab — Parte 2.2 (CSS base móvil):**
> 1. Asegurarse de que DevTools modo responsive está a ~400px.
> 2. En **_styles.css_**, después de las reglas del **_precios.html_**, agregar el bloque base del lab:
> ```css
> /* ========================= FAQ.HTML ========================= */
>
> /* BASE: móvil — todo apilado en 1 columna */
> .faq-layout {
>   display: grid;
>   grid-template-areas:
>     "header"
>     "nav"
>     "main"
>     "footer";
>   grid-template-columns: 1fr;
>   gap: 16px;
>   min-height: 100vh;
> }
>
> .faq-layout header { grid-area: header; }
> .faq-nav           { grid-area: nav; padding: 16px; margin: 0 16px; background: #f5f5f5; border-radius: 8px; }
> .faq-main          { grid-area: main; padding: 16px; }
> .faq-layout footer { grid-area: footer; }
>
> /* Estilos de las preguntas (details) */
> .faq-nav ul { list-style: none; padding: 0; }
> .faq-main details { border-bottom: 1px solid #e0e0e0; padding: 16px 0; }
> .faq-main summary { font-weight: 600; cursor: pointer; }
>
> /* Centrar el h1 del header */
> .faq-layout h1 { padding: 16px; text-align: center; }
> ```
> 3. Guardar. *"En móvil: header arriba, categorías abajo, preguntas abajo, footer al final. Todo apilado, en una sola columna. Eso es la base."*

> **Code-along del lab — Parte 2.3 (Media query desktop — T invertida):**
> 1. Arrastrar DevTools a ≥640px.
> 2. Al final de **_styles.css_**, agregar:
> ```css
> /* TABLET+ (≥640px): T invertida con sidebar + main */
> @media (min-width: 640px) {
>   .faq-layout {
>     grid-template-areas:
>       "header header"
>       "nav    main"
>       "footer footer";
>     grid-template-columns: 200px 1fr;
>     grid-template-rows: auto 1fr auto;
>   }
> }
> ```
> 3. Guardar. *"En desktop: header ocupa todo el ancho arriba. La fila del medio se divide en sidebar (200px) + main (el resto). Footer ocupa todo el ancho abajo. Eso es la T invertida."*

> **Verificación final — los 2 estados:**
> Arrastrar DevTools desde ~400px hasta ancho completo. Confirmar la tabla del lab:
>
> | Viewport | Qué se ve |
> |---|---|
> | **<640px (móvil)** | Apilado: header → nav (categorías) → main (preguntas) → footer |
> | **≥640px (tablet+)** | T invertida: header arriba, sidebar a la izquierda + main a la derecha, footer abajo |

> **Cierre del momento — lo que acaban de aprender es único:**
>
> *"Antes de cerrar M4, quiero que se queden con esto: lo que acaban de hacer — un layout 2D que cambia de apilado en móvil a T invertida en desktop — **Flex NO lo puede hacer limpio.** Con Flex tendrías que anidar al menos 2 contenedores, calcular **_flex-basis_**, y reescribir el HTML cuando cambies entre breakpoints. Con Grid, redefiniste 4 strings de texto y cambió el layout entero."*
>
> *"**_grid-template-areas_** es el feature único de Grid. No hay equivalente en Flex. Cualquier dashboard, cualquier layout 2D que vean en su carrera — desde un panel admin hasta un app móvil con grid de imágenes — la herramienta correcta es esta."*

> **Reto autónomo al cerrar M4:**
> Cambiar el orden de **_grid-template-areas_** en el media query desktop para que el nav quede a la **derecha** del main (no a la izquierda), sin tocar el HTML. La regla sería:
> ```
> "header header"
> "main   nav"
> "footer footer"
> ```
> Esto demuestra que con Grid el orden visual es independiente del orden del DOM.

> **Commit sugerido al cerrar M4:**
> ```bash
> git add .
> git commit -m "feat: faq.html con grid-template-areas (mobile-first + T invertida en tablet+)"
> git push
> ```

---

### MOMENTO 5 — Criterio Grid vs Flex + commit + GitHub Pages

**Tiempo:** ~15 min
**Parte del lab:** Parte 3 + Logros adicionales + Entrega

> **OBJETIVO:** El alumno cierra la sesión con el código versionado y publicado en GitHub Pages. Sale con un criterio claro para decidir Grid vs Flex en cualquier proyecto futuro, y con un puente hacia la Clase 04 (frameworks CSS).

---

#### 5.1 Grid o Flex — situaciones reales, ustedes deciden

**EN PANTALLA: PRESENTACIÓN / EXCALIDRAW — Diapositiva con el título "GRID O FLEX — ¿CUÁL USÁS?" y 4 cajas numeradas 1-4 con una IMAGEN reconocible de cada situación adentro (no jerga, no nombres técnicos — la imagen lo dice todo). Las 4 cajas son visibles desde el inicio.**

> **Tu apertura:**
> *"Llegamos al cierre. Hoy aprendieron las 4 herramientas: Flex, Grid básico, Grid con auto-fit y Grid con areas. La pregunta de toda su carrera va a ser: ante una situación nueva, ¿cuál uso? Para fijar el criterio les muestro 4 imágenes de cosas que ya conocen, y ustedes me dicen, en el chat, **cuál usarían y por qué**. Después validamos."*
>
> *"No les voy a leer texto técnico — miren la imagen y respondan."*

*(Apuntar al wireframe correspondiente al presentar cada situación. Esperar 30–60 segundos para 3+ respuestas en el chat, leer 1-2 en voz alta, después dar la respuesta.)*

---

**Situación 1 — Apuntar a la Caja 1: un cuadrito que aparece sobre la pantalla con la pregunta "¿Eliminar archivo?" y abajo 2 botones, uno gris que dice "Cancelar" y uno azul que dice "Aceptar".**

> *"Esos 2 botones que ven abajo del cuadro — ¿Grid o Flex?"*
>
> **La respuesta:** *"Flex. Son 2 elementos en una fila — una sola dirección. **_display: flex_** + **_gap_** y listo."*

---

**Situación 2 — Apuntar a la Caja 2: los 3 planes de Spotify lado a lado — Free, Premium y Familiar. La empresa siempre tiene exactamente 3 planes, nunca un cuarto.**

> *"Esas 3 cards de planes — ¿Grid o Flex? Si es Grid, ¿cuál variante?"*
>
> **La respuesta:** *"Grid básico con media queries. La cantidad es **FIJA** → el dev controla cuántas columnas hay en cada breakpoint. **_grid-template-columns: repeat(3, 1fr)_** en desktop, **_1fr_** apilados en mobile."*

---

**Situación 3 — Apuntar a la Caja 3: la pantalla de Mercado Libre con muchas cards de productos. Hoy son 24, mañana pueden ser 200, depende de lo que el usuario busque.**

> *"Esa grilla de productos — ¿Grid o Flex? Si es Grid, ¿cuál variante?"*
>
> **La respuesta:** *"Grid intermedio: **_repeat(auto-fit, minmax(200px, 1fr))_**. La cantidad es **VARIABLE** → el grid decide solo cuántas columnas caben. Sin media queries. **Esta es la lección clave: cantidad fija → media queries; cantidad variable → _auto-fit_ + _minmax_.**"*

---

**Situación 4 — Apuntar a la Caja 4: la pantalla de Gmail. Arriba la barra de búsqueda, a la izquierda los botones de Recibidos / Enviados / Borradores, en el centro la lista de correos, abajo el pie de página — todo se ve al mismo tiempo en la pantalla.**

> *"Esa pantalla con 4 zonas distintas — ¿Grid o Flex? Si es Grid, ¿cuál variante?"*
>
> **La respuesta:** *"Grid avanzado: **_grid-template-areas_**. Layout **bidimensional** — controla filas Y columnas al mismo tiempo, con zonas nombradas. Flex tendría que anidar 2 contenedores; con Grid lo escribís en 4 strings de texto. **Este es el feature único de Grid — el que Flex no puede imitar.**"*

---

> **Tabla resumen (proyectar al final, como referencia visual — NO leerla otra vez):**
>
> | Caso de uso | Herramienta correcta |
> |---|---|
> | Pocos elementos en una fila (botones, nav, íconos) | **Flex** (1D) |
> | Grilla con cantidad **fija** (planes de SaaS) | **Grid básico** con media queries |
> | Grilla con cantidad **variable** (catálogo de productos) | **Grid intermedio** (**_auto-fit + minmax_**) |
> | Layout 2D con regiones nombradas (Gmail, dashboard) | **Grid avanzado** (**_grid-template-areas_**) |

> **Tu cierre con la heurística memorable:**
>
> *"Si se llevan una sola cosa de esta clase, llévense esta frase: **Grid 2D, Flex 1D**. Una sola dirección, Flex. Dos direcciones, Grid. Repítanla hasta que se vuelva instinto. La próxima vez que el cliente les diga 'quiero que mi sitio se vea como Notion' o 'como Mercado Libre', no van a pensar en propiedades CSS — van a pensar primero '¿esto es 1D o 2D?'. Y la respuesta les dice qué herramienta agarrar."*
>
> *"Y una última cosa: Grid y Flex **se complementan**, no se reemplazan. En proyectos reales lo más común es usar Grid para el layout macro de la página y Flex adentro de cada celda del grid para alinear contenido interno. Las dos en el mismo proyecto, cada una en lo suyo."*

#### 5.2 Logros adicionales — opcionales

Presentar los 2 logros del lab: Logro 1 — WhatsApp con mensaje predeterminado por plan en **_precios.html_** (cambio simple del **_href_** del botón). Logro 2 — Grid avanzado para investigación (**_subgrid_**, **_grid-auto-flow: dense_**, posicionamiento manual). No hacer code-along — el alumno los aborda solo si termina antes.

#### 5.3 Commit final + GitHub Pages + puente a Clase 04

Hacer el commit del estado completo del día. Push al remoto. Verificar que GitHub Pages muestra las 3 páginas (**_index.html_**, **_precios.html_**, **_faq.html_**) accesibles vía URL. Criterio de entrega: URL del repositorio + URL de GitHub Pages en el canal de Teams. Puente a Clase 04: con HTML semántico (C01) + Flex (C02) + Grid (C03) tienen las herramientas nativas para construir cualquier landing. En C04 ven cómo los **frameworks CSS** (Tailwind, Bootstrap) usan estos mismos conceptos por debajo pero acelerados con utilidades pre-construidas.

---

## Mapeo Momentos ↔ Lab ↔ Conceptos de Capa 0

| Momento | Parte del lab | Conceptos de Capa 0 que toca |
|---|---|---|
| M1 | Parte 1.1 | Rutas relativas, Anchor / Ancla, Ruta relativa + anchor combinados, Enlace utilitario con icono SVG + **_aria-label_** |
| M2 | Parte 1.2 + 1.3 + 1.4 | CSS Grid (modelo bidimensional), Grid Container vs Grid Item, **_display: grid_** (mobile-first con 1 col por default), **_grid-template-columns_**, unidad **_fr_**, **_repeat(N, valor)_**, **_gap_** en Grid |
| M3 | Parte 1.5 | **_auto-fit_**, **_minmax(min, max)_**, **_repeat(auto-fit, minmax(...))_**, **CONCEPTO CLAVE: cuándo usar media queries explícitas vs _auto-fit + minmax_** |
| M4 | Parte 2 (2.1 → 2.3) | **_&lt;details&gt;_** / **_&lt;summary&gt;_**, **_grid-template-areas_**, **_grid-area_**, Reorganización de áreas entre breakpoints |
| M5 | Parte 3 + Logros + Entrega | Heurística "Grid 2D, Flex 1D", Tabla de casos Grid vs Flex |

**Validación de paridad Momento ↔ Parte del lab:**
- ✅ Cada Momento de code-along (M1, M2, M3, M4) cita una Parte específica del lab cuyos sub-pasos Eric puede leer verbatim.
- ✅ Cada concepto de Capa 0 tiene su aplicación al proyecto víctima en alguna Parte del lab.
- ✅ Sin conceptos huérfanos: **_subgrid_**, **_grid-auto-flow: dense_** son referencia de Logros, no se aplican en código.
- ✅ La distinción "cantidad fija vs variable" (la lección pedagógica clave) se cierra en M3 después de que el alumno ha visto los dos casos en código (planes en M2 y logos en M3).
- ✅ El feature distintivo de Grid (**_grid-template-areas_**) tiene su momento dedicado (M4) y se contrasta explícitamente contra Flex.
