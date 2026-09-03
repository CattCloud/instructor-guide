# CLASE 08 — Tailwind CSS: la interfaz del Gestor (cierre de Módulo 2)

> **Curso:** Code 201 · **Módulo 2** — Clase 4 de 4 (última del módulo)
> **Proyecto víctima:** Gestor de Presupuesto Personal — hoy pasa de consola a **app real con interfaz**, desplegada.
> **Lab CALIFICADO del módulo** (rúbrica 5 criterios × 20 = 100 pts · A 90-100 / B 80-89 / C 70-79 / F <70).
> **Fuente de inputs:** `code201/class-08/README.md` + `lab/README.md` + `lab/rubric.md` (sin carpeta `slides/`).
> **Duración:** 3h reales · se prepara para 2h30 (150 min) · colchón 30 min · receso 10 min entre M2 y M3.

---

## Idea fuerza de la clase

Tailwind **no es CSS nuevo** — es el **mismo CSS de M1** (Flexbox de C02, Grid de C03, espaciado/color/bordes/sombra/variables de C04) escrito como **clases utilitarias dentro del HTML**. Toda la clase es un ejercicio de **mapeo**: "esto que ya sabés escribir a mano, así se escribe en Tailwind". Se construye la UI **por capas** sobre un esqueleto sin estilos (layout → caja → estética → modificadores), y al final se **conecta con JavaScript** reusando las clases `Movimiento` y `Presupuesto` de C07. Cierra el arco del módulo: imperativo (C05) → funcional (C06) → OOP (C07) → **interfaz (C08)**.

---

## Tabla de tiempos (preparado para 2h 30min)

| Momento | Tema | Parte del lab | Tiempo |
|---|---|---|---|
| **M1** | Apertura + utility-first + instalación + esqueleto | P0 | ~30 min |
| **M2** | Grupo **Layout**: Flexbox + Grid | P1 | ~30 min |
| **RECESO** | — | — | 10 min |
| **M3** | Grupos **Caja** + **Estética** | P2 + P3 | ~40 min |
| **M4** | Grupo **Modificadores**: estados + responsive | P4 | ~25 min |
| **M5** | **Conectar el Gestor** (JS) + cierre del módulo | P5 + cierre | ~25 min |

> Total preparado: ~150 min. El colchón de 30 min absorbe el trabajo autónomo de los alumnos en cada Checkpoint del lab.

---

## Cadena Problema → Solución de la clase

```
M1: "el CSS a mano de M1 funciona, pero ¿y si viviera en el HTML como clases chicas?" → utility-first
     ↓ (ya instalado + esqueleto sin estilos: feo pero estructurado)
M2: "el esqueleto está apelmazado, sin disposición" → Layout (flex + grid)
     ↓ (ya hay disposición, pero sin aire)
M3: "está pegado y en blanco y negro" → Caja (espaciado) + Estética (color, que SIGNIFICA: verde/rojo)
     ↓ (se ve bien, pero el botón no reacciona y en móvil aprieta)
M4: "falta interacción y adaptarse a la pantalla" → Modificadores (hover/focus + md: responsive)
     ↓ (tiene cara y es responsivo, pero es una MAQUETA: no hace nada)
M5: "es una maqueta linda" → conectar con JS (reusa C07) → app real → cierre del módulo
```

---

## MOMENTO 1 — Apertura + utility-first + instalación + esqueleto

**Tiempo:** ~30 min
**Parte del lab:** Parte 0 (0.1 → 0.4)

> **OBJETIVO:** El alumno entiende **utility-first** como "el mismo CSS, otra notación" (no una herramienta nueva que reemplaza lo aprendido), instala Tailwind por CDN en una línea, distingue los **dos tipos de clase** (clase-propiedad vs prefijo-modificador) y pega el **esqueleto del Gestor sin estilos** — el lienzo sobre el que se pinta por capas. Al cerrar M1, ve el Gestor "feo pero estructurado" y tiene el mapa de grupos de la clase.

> **Patrón pedagógico de M1:**
> 1. **Anti-"bestia nueva":** abrir reconociendo el CSS a mano de M1 y presentar Tailwind como la MISMA cosa en otra notación. Baja la ansiedad de "otro lenguaje".
> 2. **No lanzar todo de golpe:** en M1 solo se presenta la **clase-propiedad** (con la que se construye el look en P1-P3). El segundo tipo de clase (los prefijos `hover:`/`md:`) NO se menciona acá — aparece en M4, cuando se necesita. Cada grupo de clases (layout/caja/estética) tampoco se adelanta: se ve en su momento.
> 3. **El esqueleto sin estilos** es el "antes" que hace visible cada capa que se agrega después (cadena problema→solución visual).

#### 1.1 Apertura — de CSS a mano a utility-first

**EN PANTALLA: EXCALIDRAW — Panel 1.1 (CSS a mano vs utility-first): dos columnas con el MISMO resultado. Izquierda "CSS A MANO (M1)": un bloque `.css` con la regla `.titulo { text-align: center; color: #2563eb; font-weight: bold; }` + el HTML `&lt;h1 class="titulo"&gt;`. Derecha "UTILITY-FIRST (Tailwind)": el HTML `&lt;h1 class="text-center text-blue-600 font-bold"&gt;` y NINGÚN archivo `.css`. Flechas conectando cada propiedad de la izquierda con su clase equivalente de la derecha (`text-align:center`→`text-center`, etc.).**

> **Tu apertura:**
> *"Última clase del módulo. En el Módulo 1 escribieron MUCHO CSS —Flexbox, Grid, variables, media queries— pero siempre igual: un archivo `styles.css` aparte, con selectores y reglas, saltando entre el HTML y el CSS todo el tiempo. Hoy van a escribir el MISMO CSS, pero de otra forma: como clases chiquitas, directo en el HTML. Eso es Tailwind."*

> **Tu explicación teórica precisa:**
> *"Miren el mismo título de las dos formas. A mano, como en M1:"*
> ```css
> /* styles.css */
> .titulo { text-align: center; color: #2563eb; font-weight: bold; }
> ```
> ```html
> <h1 class="titulo">Hola</h1>
> ```
> *"Y en Tailwind:"*
> ```html
> <h1 class="text-center text-blue-600 font-bold">Hola</h1>
> ```
> *"Es lo MISMO. El `text-align: center` se volvió la clase **_text-center_**. El color, **_text-blue-600_**. El bold, **_font-bold_**. No hay archivo `.css`, no hay selector, y no tuve que inventar el nombre 'titulo'. Las propiedades viven como clases en el propio elemento."*

> **Pregunta de activación:**
> *"En la versión a mano, si quiero un segundo título con otro color, ¿qué tengo que hacer?"*
> *(Guiar: crear otra clase en el `.css`, inventar otro nombre, volver al HTML. En Tailwind: solo cambio una clase ahí mismo. Sin saltar de archivo, sin nombrar nada.)*

---

#### 1.2 ¿Qué es utility-first?

**EN PANTALLA: EXCALIDRAW — Panel 1.2 (tabla de equivalencias clase-propiedad ↔ CSS): tabla de 2 columnas "Clase Tailwind" | "CSS que ya conocés", con filas: `text-center`→`text-align: center`, `font-bold`→`font-weight: bold`, `p-4`→`padding: 16px`, `flex`→`display: flex`, `bg-blue-600`→`background-color: #2563eb`, `rounded-xl`→`border-radius`. Título: "Tailwind no inventa diseño — renombra propiedades CSS".**

> **Tu explicación teórica precisa:**
> **¿Qué es utility-first?** Un enfoque donde el diseño se compone con **muchas clases pequeñas** —cada una de una sola función ("utilidad")— puestas en el HTML, en vez de escribir reglas en un archivo `.css`.
> - *"Cada clase es una utilidad: hace UNA cosa. **_p-4_** solo agrega padding. **_flex_** solo activa flexbox. Juntás varias para construir el look."*
> - *"Lo clave: Tailwind NO inventa diseño nuevo. Cada clase es una propiedad CSS que YA conocés, renombrada. Lo que aprendieron en M1 sigue valiendo entero — solo cambia cómo se escribe."*

> **Tu analogía:**
> *"Es como armar con piezas de Lego. Cada pieza hace una cosa mínima, y combinás muchas para construir lo que querés — en vez de encargar una pieza hecha a medida (la clase `.titulo` con todo adentro). Más piezas en la mano, sí, pero las combinás libre sin fabricar nada nuevo."*

---

#### 1.3 La clase-propiedad (continuación de 1.2)

**EN PANTALLA: EXCALIDRAW — Panel 1.3 (anatomía de una clase-propiedad): dos clases descompuestas con flechas a sus partes. `bg-blue-600` → `bg` (qué propiedad: background) · `blue` (qué color) · `600` (qué intensidad). Y `p-4` → `p` (padding) · `4` (valor de la escala = 16px). Nota: "el nombre de la clase TE DICE qué propiedad y qué valor".**

> **Tu apertura:**
> *"Ese tipo de clase —la que equivale a una propiedad— tiene nombre: **clase-propiedad**. Es el tipo con el que vamos a construir TODO el look de hoy. Y lo mejor: el nombre no es arbitrario, está armado por partes."*

> **Tu explicación teórica precisa:**
> *"Miren cómo se lee una clase-propiedad por dentro:"*
> ```text
> bg-blue-600   →   bg = background  ·  blue = color  ·  600 = intensidad
> p-4           →   p  = padding     ·  4 = valor de la escala (16px)
> ```
> - *"Una clase-propiedad = una propiedad CSS. **_text-center_** es `text-align: center`; **_flex_** es `display: flex`."*
> - *"El nombre te dice qué propiedad toca y con qué valor. No hay que memorizar cientos de clases sueltas: entendés el patrón y lo deducís."*

> **La sintaxis general (el patrón que se repite):**
> *"Casi toda clase-propiedad sigue el mismo molde. Por eso no se memorizan cientos: entendés el molde y las deducís."*
> ```text
> {propiedad}-{valor}                →  p-4 · text-center · w-full · flex
> {propiedad}-{color}-{intensidad}   →  bg-blue-600 · text-gray-800 · border-red-500
> ```
> - *"La primera parte dice QUÉ propiedad toca: **_p_** = padding, **_bg_** = background, **_text_** = color o tamaño de texto, **_border_** = borde."*
> - *"Lo que sigue es el VALOR: un número de la escala fija (`4`, `8`...) o un color con su intensidad (`50` clarito → `900` oscuro)."*
> *"Con el molde claro, una clase que nunca viste se lee sola: **_bg-green-100_** es un fondo verde muy claro, sin que nadie te lo diga."*

> **Nota (no abrir el otro tipo todavía):**
> *"Hay un segundo tipo de clase en Tailwind, pero no lo necesitamos para construir el look. Aparece más adelante, cuando lleguemos a los estados y al responsive. Por ahora, todo es clase-propiedad."*

---

#### 1.4 Instalación por CDN (P0.1)

**EN PANTALLA: VS CODE — `index.html` nuevo, en vivo.**

> **Tu apertura:**
> *"Para usar Tailwind solo hace falta UNA línea. No instalamos nada en la máquina."*

> **Code-along del lab — Setup:**
> 1. Crear `index.html` con el script de Tailwind en el `**_&lt;head&gt;_**`:
>    ```html
>    <head>
>      <meta charset="UTF-8">
>      <meta name="viewport" content="width=device-width, initial-scale=1.0">
>      <title>Gestor de Presupuesto</title>
>      <script src="https://cdn.tailwindcss.com"></script>
>    </head>
>    ```
> 2. Probar con un `**_&lt;h1&gt;_**` cualquiera y abrir con Live Server:
>    ```html
>    <h1 class="text-2xl font-bold text-center text-blue-600 mt-8">Hola Tailwind</h1>
>    ```
> *"Sale grande, negrita, centrado y azul — sin una sola línea de CSS escrita por nosotros."*

> **Tu explicación teórica precisa (breve — qué es CDN y qué trae):**
> - *"Un **CDN** es un servidor que sirve una librería ya lista: en vez de descargarla, la traés con un link. Ese `&lt;script&gt;` baja Tailwind al navegador cuando abrís la página."*
> - *"Este método se llama **Play CDN**, y lo elegimos a propósito: Tailwind funciona directo en el navegador, sin `npm`, sin archivo de configuración, sin compilar nada. Perfecto para un sitio estático como el nuestro."*

---

#### 1.5 Pegar el esqueleto sin estilos (P0.4)

**EN PANTALLA: VS CODE — `index.html`, pegar el `&lt;body&gt;` del lab.**

> **Tu apertura:**
> *"Antes de pintar, necesitamos el lienzo: la estructura del Gestor en HTML semántico, SIN una sola clase de estilo. Lo vamos a ir vistiendo por capas."*

> **Code-along del lab — Parte 0.4:**
> Reemplazar el `**_&lt;body&gt;_**` por la estructura semántica sin clases (header + sección resumen/formulario + sección de movimientos, con datos de ejemplo de C07). Cada `**_&lt;li&gt;_**` muestra el texto que produce `datosMovimiento()` de C07 ("Salario (ingreso): +$3000.00").

> **Verificar (Checkpoint 0):**
> Tailwind carga por CDN, se distingue la clase-propiedad como unidad básica, y se ve el esqueleto del Gestor en negro sobre blanco — **feo pero estructurado**.

> **Cierre del Momento + puente a M2:**
> *"Ahí está el lienzo: todo el contenido del Gestor, ordenado pero amontonado —un bloque debajo del otro, sin disposición ni aire—. Ahora empezamos a pintar, y arrancamos por la capa más pesada: acomodar los bloques en la página. Eso es el grupo de layout, y es Flexbox y Grid de M1 en notación Tailwind."*

---

## MOMENTO 2 — Grupo Layout: Flexbox + Grid

**Tiempo:** ~30 min
**Parte del lab:** Parte 1 (1.1 → 1.2)

> **OBJETIVO:** El alumno acomoda los bloques de la página con el grupo de **layout** (Flexbox de C02 + Grid de C03) en notación Tailwind, mapeando cada utilidad al CSS que ya escribía a mano. Al cerrar M2, el Gestor tiene **disposición**: contenedor centrado, resumen y formulario en 2 columnas, cada movimiento con nombre y monto en extremos.

> **Patrón pedagógico de M2 (formato GENERAL, no a medida del Gestor):** cada familia de clases se presenta igual y de forma general — **sintaxis general + tabla de la familia con su equivalencia CSS + uno o dos ejemplos** (ver el formato de referencia en `Espaciado Margin - Padding.md`). **NO se re-explica qué hace la propiedad CSS**: `display:flex`, `justify-content`, `grid` ya se enseñaron en C02/C03; repetirlo es perder tiempo en algo que ya saben. El foco es solo "cómo se escribe ahora". Recién después de presentar las familias se aplica al Gestor. No se adelanta el responsive: el `grid-cols-2` va fijo y se vuelve responsive en M4.

#### 2.1 Clases de Flexbox (general)

**EN PANTALLA: EXCALIDRAW — Panel 2.1 (tabla de clases Flexbox ↔ CSS): tabla estilo doc margin/padding, columnas "Clase Tailwind | CSS equivalente | Ejemplo". Arriba la sintaxis general (`justify-{valor}` = eje principal, `items-{valor}` = eje cruzado). Filas: `flex`, `flex-row`/`flex-col`, `justify-*`, `items-*`, `gap-*`, `flex-1`.**

> **Tu apertura:**
> *"Primera capa de pintura: acomodar los bloques en la página. Empezamos con Flexbox. Aclaro de entrada: NO les voy a explicar qué hace flex ni para qué sirve `justify-content` — eso lo dominan desde C02. Hoy solo ven cómo se escribe lo mismo en Tailwind."*

> **Tu explicación teórica precisa (sintaxis general):**
> ```text
> justify-{valor}   →  eje principal   (justify-content)
> items-{valor}     →  eje cruzado     (align-items)
> flex-{dirección}  →  flex-direction
> ```

> **Tablas por propiedad (Clase · Valores · CSS equivalente):**
>
> `justify-{valor}` — eje principal:
> | Clase | Valores | CSS equivalente |
> |---|---|---|
> | `justify-{v}` | `start` · `center` · `end` · `between` · `around` | `justify-content: {v}` |
>
> `items-{valor}` — eje cruzado:
> | Clase | Valores | CSS equivalente |
> |---|---|---|
> | `items-{v}` | `start` · `center` · `end` · `stretch` | `align-items: {v}` |
>
> `flex-{dirección}` — dirección de los hijos:
> | Clase | Valores | CSS equivalente |
> |---|---|---|
> | `flex-{v}` | `row` (default) · `col` | `flex-direction: {v}` |
>
> Utilidades directas (sin valor variable):
> | Clase | CSS equivalente |
> |---|---|
> | `flex` | `display: flex` |
> | `gap-{n}` | `gap` (usa la escala de espaciado) |
> | `flex-1` | `flex: 1 1 0%` (el hijo ocupa el espacio libre) |

> **Ejemplo (uno):**
> *"`flex justify-between items-center` = una fila con los hijos pegados a los extremos y centrados verticalmente. Es el patrón de fila clásico que hicieron en C02 — ahora en tres clases."*

---

#### 2.2 Clases de Grid (general)

**EN PANTALLA: EXCALIDRAW — Panel 2.2 (tabla de clases Grid ↔ CSS): mismo formato. Arriba la sintaxis general (`grid-cols-{n}`). Filas: `grid`, `grid-cols-*`, `gap-*`, `col-span-*`.**

> **Tu apertura:**
> *"Segunda familia del layout: Grid. Igual que recién — qué es Grid y qué hacen las columnas ya es C03. Solo la notación."*

> **Tu explicación teórica precisa (sintaxis general):**
> ```text
> grid-cols-{n}   →  grid-template-columns: repeat(n, 1fr)
> ```

> **Tablas por propiedad (Clase · Valores · CSS equivalente):**
>
> `grid-cols-{n}` — número de columnas:
> | Clase | Valores | CSS equivalente |
> |---|---|---|
> | `grid-cols-{n}` | `1` · `2` · `3` · `4` (hasta 12, rara vez +4) | `grid-template-columns: repeat(n, 1fr)` |
>
> `col-span-{n}` — cuántas columnas ocupa una celda:
> | Clase | Valores | CSS equivalente |
> |---|---|---|
> | `col-span-{n}` | `1` · `2` · `3` | `grid-column: span n` |
>
> Utilidades directas (sin valor variable):
> | Clase | CSS equivalente |
> |---|---|
> | `grid` | `display: grid` |
> | `gap-{n}` | `gap` (usa la escala de espaciado: `2`, `4`, `6`, `8`) |

> **Ejemplo (uno):**
> *"`grid grid-cols-2 gap-6` = dos columnas iguales con 24px de separación. Lo mismo que el `grid-template-columns: 1fr 1fr` de C03."*

---

#### 2.3 Aplicar el layout al Gestor (P1.2) + Checkpoint 1

**EN PANTALLA: VS CODE — `index.html`, agregando clases al esqueleto sobre Live Server.**

> **Tu apertura:**
> *"Ahora sí, lo específico: bajamos estas clases al esqueleto del Gestor. Solo agrego clases de layout — nada más todavía."*

> **Code-along del lab — Parte 1.2:**
> 1. Contenedor centrado en el `**_&lt;main&gt;_**`: `max-w-4xl mx-auto`.
> 2. Resumen y formulario en 2 columnas en el `**_&lt;section&gt;_**`: `grid grid-cols-2 gap-6`.
> 3. Fila de ingresos/gastos dentro de la tarjeta resumen: `flex gap-4`, y `flex-1` en cada cajita para que se repartan iguales.
> 4. Cada `**_&lt;li&gt;_**` de movimiento: `flex items-center justify-between` — nombre a un lado, monto al otro.

> **Verificar (Checkpoint 1):**
> La página ya tiene **disposición**: contenedor centrado, resumen y formulario lado a lado en 2 columnas, y cada movimiento con el nombre a un extremo y el monto al otro. Aún sin aire ni color.

> **Cierre del Momento + puente a M3:**
> *"Ya hay estructura y disposición, pero miren cómo se ve: todo pegado, sin márgenes internos, y en blanco y negro. Le falta dos cosas — aire (que las tarjetas respiren) y color (que el verde y el rojo SIGNIFIQUEN ingreso y gasto). Eso son las próximas dos familias: caja y estética."*

---

## RECESO — 10 minutos

---

## MOMENTO 3 — Grupos Caja + Estética

**Tiempo:** ~40 min
**Parte del lab:** Parte 2 (2.1 → 2.2) + Parte 3 (3.1 → 3.2)

> **OBJETIVO:** El alumno le da **aire y dimensiones** (grupo caja: espaciado/tamaño, escala fija) y luego **estética con significado** (grupo estética: tipografía, color, bordes, sombra; verde=ingreso, rojo=gasto). Al cerrar M3, el Gestor se ve moderno y legible: tarjetas blancas con sombra, saldo grande, movimientos con color semántico.

> **Patrón pedagógico de M3 (mismo formato general que M2):** dos grupos presentados por familias — **sintaxis general + tabla ↔ CSS + uno o dos ejemplos**, sin re-explicar la propiedad (padding, color, borde, sombra son M1/C04). Lo único realmente nuevo es la **escala fija de espaciado** (`p-2`=8px…): eso SÍ se explica. El color semántico (verde ingreso / rojo gasto) se reconoce como continuidad de las variables de C04. Lo específico (aplicar al Gestor) va separado, después de presentar cada familia. Estructura espejo de M2: familia general → aplicar, dos veces (caja, estética).

#### 3.1 Clases de Caja: espaciado + tamaño (general)

**EN PANTALLA: EXCALIDRAW — Panel 3.1 (tabla de espaciado/tamaño ↔ CSS + la escala fija): tabla estilo doc margin/padding. Arriba la sintaxis general (`{propiedad}{lado}-{tamaño}`). Al costado, la escala fija visualizada (`1`=4px, `2`=8px, `4`=16px, `6`=24px, `8`=32px).**

> **Tu apertura:**
> *"Volvemos del receso. La página tiene disposición pero está apretada. Primera familia para darle aire: la caja —espaciado y tamaño—. Otra vez: qué es padding o margin ya es M1, no lo repito. Solo la notación, más una cosa nueva al final."*

> **Tu explicación teórica precisa (sintaxis general):**
> ```text
> {propiedad}{lado}-{tamaño}
>   propiedad → p (padding) · m (margin)
>   lado      → t/r/b/l (un lado) · x/y (horizontal/vertical) · (vacío = todos)
>   tamaño    → de la escala fija: 1 · 2 · 3 · 4 · 6 · 8 · 12 (los más usados: 4, 6, 8)
> ```

> **Tablas por propiedad (Clase · Valores · CSS equivalente):**
>
> Espaciado (`p`/`m` + lado + escala) — todas usan la misma escala:
> | Clase | Valores ({n}, escala) | CSS equivalente |
> |---|---|---|
> | `p-{n}` / `m-{n}` | `1`·`2`·`3`·`4`·`6`·`8`·`12` (×4px) | `padding` / `margin` (todos los lados) |
> | `px-{n}` / `py-{n}` | (misma escala) | padding/margin horizontal / vertical |
> | `pt`/`pr`/`pb`/`pl-{n}` (y `m`) | (misma escala) | un solo lado |
> | `space-y-{n}` | (misma escala) | separación vertical entre hijos |
>
> Tamaño:
> | Clase | Valores | CSS equivalente |
> |---|---|---|
> | `w-{valor}` | `full` · `1/2` · `1/3` · (escala) | `width` |
> | `max-w-{valor}` | `sm`·`md`·`lg`·`xl`·`2xl`…`7xl` | `max-width` (`max-w-4xl` → 56rem) |
> | `min-h-{valor}` | `screen` · `full` | `min-height` (`min-h-screen` → 100vh) |

> **Concepto nuevo (este SÍ se explica) — la escala fija:**
> *"Lo único nuevo acá: en Tailwind no inventás píxeles, elegís de una escala fija. Cada unidad son 4px: `p-1`=4px, `p-2`=8px, `p-3`=12px, `p-4`=16px, `p-6`=24px. ¿Por qué? Para que todo el espaciado del proyecto sea consistente — no termina uno con 13px y otro con 15px sin querer."*

> **Ejemplo (uno):**
> *"`p-6` = 24px de relleno en los cuatro lados; `space-y-3` = 12px de aire entre cada hijo. Dos clases y el bloque respira."*

---

#### 3.2 Aplicar caja al Gestor (P2.2) + Checkpoint 2

**EN PANTALLA: VS CODE — `index.html`, agregando espaciado sobre Live Server.**

> **Code-along del lab — Parte 2.2:**
> 1. `min-h-screen` en el `**_&lt;body&gt;_**`.
> 2. `px-4 py-8` en el `**_&lt;main&gt;_**` (ya tenía `max-w-4xl mx-auto`); `mb-6` en el `**_&lt;header&gt;_**`.
> 3. `p-6` en las dos tarjetas; `mt-1`/`mt-4` para separar el saldo y la fila; `p-3` en las cajitas ingresos/gastos.
> 4. En el formulario: `space-y-3` (separa los campos) y `w-full p-2` en inputs/select, `w-full p-3` en el botón.
> 5. Sección de movimientos: `mt-6 p-6`; `mb-4` en su título; `space-y-2` en el `**_&lt;ul&gt;_**`; `p-3` en cada `**_&lt;li&gt;_**`.

> **Verificar (Checkpoint 2):**
> La página **respira** — las tarjetas tienen relleno, los campos del formulario están separados y la lista ya no está apelmazada. Sigue en blanco y negro.

---

#### 3.3 Clases de Estética: tipografía + color + bordes/sombra (general)

**EN PANTALLA: EXCALIDRAW — Panel 3.2 (tabla de estética ↔ CSS + color semántico): tabla agrupada en tres mini-familias (tipografía / color / bordes-sombra) con su equivalencia CSS. Recuadro aparte: el color semántico verde=ingreso / rojo=gasto.**

> **Tu apertura:**
> *"Última familia para el look: la estética — tipografía, color, bordes y sombra. Todo esto es C04 (color, bordes, sombra los vieron con variables). Solo la notación. Y reusamos una decisión que ya tomaron: el verde y el rojo que SIGNIFICAN."*

> **Tablas por propiedad (Clase · Valores · CSS equivalente):**
>
> Tipografía:
> | Clase | Valores | CSS equivalente |
> |---|---|---|
> | `text-{tamaño}` | `sm`·`base`·`lg`·`xl`·`2xl`·`3xl`·`4xl` | `font-size` |
> | `font-{peso}` | `normal`·`medium`·`semibold`·`bold` | `font-weight` |
> | `text-{alineación}` | `left`·`center`·`right` | `text-align` |
> | `uppercase` | (sin valor) | `text-transform: uppercase` |
>
> Color (`text-` = texto, `bg-` = fondo):
> | Clase | Valores | CSS equivalente |
> |---|---|---|
> | `text-{color}-{int}` | color: `gray`·`red`·`green`·`blue` · intensidad: `50`·`100`·`500`·`700`·`900` (de 50 a 950) | `color` |
> | `bg-{color}-{int}` | (mismos color e intensidad) | `background-color` |
>
> Bordes / Sombra:
> | Clase | Valores | CSS equivalente |
> |---|---|---|
> | `border-{color}-{int}` | (color + intensidad) | `border-color` |
> | `border-{lado}-{grosor}` | lado: `t`·`r`·`b`·`l` · grosor: (1)·`2`·`4`·`8` | `border-{lado}-width` |
> | `rounded-{tamaño}` | `sm`·`md`·`lg`·`xl`·`full` (círculo) | `border-radius` |
> | `shadow-{tamaño}` | `sm`·(normal)·`md`·`lg` | `box-shadow` |

> **La intensidad del color (recordatorio del patrón):**
> *"La intensidad va de `50` (clarísimo) a `900` (casi negro): `bg-green-50` es un verde de fondo muy suave; `text-green-700` es un verde fuerte para texto."*

> **El color semántico (continuidad de C04):**
> *"Y acá no decidimos nada nuevo: verde = ingreso, rojo = gasto. Es la MISMA decisión que tomaron en C04 con variables CSS, ahora escrita como `bg-green-50` / `text-red-700`. El color comunica, no decora."*

> **Ejemplo (uno):**
> *"`bg-white rounded-xl shadow` = una tarjeta blanca con esquinas redondeadas y una sombra suave. Tres clases y ya parece una tarjeta de app."*

---

#### 3.4 Aplicar estética al Gestor (P3.2) + Checkpoint 3

**EN PANTALLA: VS CODE — `index.html`. Es la parte con más clases, pero todas del mismo tipo (tipografía/color/borde/sombra).**

> **Code-along del lab — Parte 3.2:**
> 1. Fondo general: `bg-gray-50` en el `**_&lt;body&gt;_**`.
> 2. Header: `text-3xl font-bold text-gray-800` en el `**_&lt;h1&gt;_**`; `text-gray-500` en el subtítulo.
> 3. Las dos tarjetas: `bg-white rounded-xl shadow`. Saldo grande: `text-4xl font-bold text-gray-800`.
> 4. Cajitas: ingresos `bg-green-50 rounded-lg` + texto `text-green-700`; gastos `bg-red-50 rounded-lg` + texto `text-red-700`.
> 5. Formulario: inputs/select `border border-gray-300 rounded-lg`; botón `bg-blue-600 text-white font-semibold rounded-lg`.
> 6. Cada `**_&lt;li&gt;_**` con barrita de color: ingreso `bg-green-50 border-l-4 border-green-500 rounded` + monto `text-green-700`; gasto en rojo equivalente.

> **Verificar (Checkpoint 3):**
> El Gestor se ve **moderno y legible**: tarjetas blancas con sombra y esquinas redondeadas, saldo grande, y movimientos con color semántico verde/rojo. Pero el botón no reacciona al mouse y en móvil se ve apretado.

> **Cierre del Momento + puente a M4:**
> *"Tiene cara: respira y comunica con color. Pero le falta comportamiento — pasen el mouse por el botón y no pasa nada, y en un celular las dos columnas se aplastan. Para eso necesitamos un tipo de clase que todavía no usamos: una que cambie CUÁNDO se aplica un estilo. Ese es el segundo tipo de clase de Tailwind, y es lo que viene."*

---

## MOMENTO 4 — Grupo Modificadores: estados + responsive

**Tiempo:** ~25 min
**Parte del lab:** Parte 4 (4.1 → 4.3)

> **OBJETIVO:** El alumno aprende el **segundo tipo de clase de Tailwind**: el **prefijo**, que cambia CUÁNDO aplica una clase. Y entiende que hay DOS familias de prefijos, presentadas por separado: (a) **prefijos de estado** (`hover:`/`focus:`) según la interacción —es el `:hover` de C02-C03— y (b) **prefijos de breakpoint** (`sm:`/`md:`/`lg:`...) según el ancho de pantalla, basados en media queries. Entiende **mobile-first** (base = móvil, prefijo = de cierto ancho hacia arriba) y por qué el responsive va al final. Al cerrar M4, el Gestor reacciona al hover/focus y se adapta: apilado en móvil, 2 columnas en escritorio.

> **Patrón pedagógico de M4:** acá aparece el segundo tipo de clase (el prefijo) — el único salto conceptual de la clase. Con los dos tipos a la vista se da el marco completo: clase-propiedad = el QUÉ (M1-M3), prefijo = el CUÁNDO. Las DOS familias de prefijos se presentan **separadas**, cada una con su tabla (formato general de M2/M3): primero los de estado (interacción), después los de breakpoint (tamaño de pantalla). Mobile-first se ancla como callback a C02/C03: el look de P1-P3 YA era el móvil; el breakpoint solo agrega el desktop.

#### 4.1 El segundo tipo de clase: el prefijo-modificador (concepto)

**EN PANTALLA: EXCALIDRAW — Panel 4.1 (anatomía `prefijo:clase`): `hover:bg-blue-700` descompuesto con flechas — `hover` (la CONDICIÓN: cuándo) · `:` (separador) · `bg-blue-700` (la clase-propiedad: qué). Contraste lateral: una clase-propiedad sola (`bg-blue-700`) aplica SIEMPRE; con prefijo, aplica SOLO en la condición.**

> **Tu apertura:**
> *"El Gestor ya tiene look completo. Pero fíjense en algo: TODO lo que pusimos aplica siempre, de entrada. No tenemos forma de decir 'esto solo CUANDO pasás el mouse' o 'esto solo en pantalla grande'. Para eso existe el segundo tipo de clase de Tailwind, el que les anuncié al inicio y no usamos hasta ahora: el prefijo."*

> **Tu explicación teórica precisa:**
> *"Un prefijo no es una clase nueva — es una condición que le ponés ADELANTE a una clase-propiedad para decidir CUÁNDO aplica:"*
> ```text
> hover:bg-blue-700
> └─┬─┘ └────┬────┘
>   │        └── la clase-propiedad (QUÉ): fondo azul oscuro
>   └── el prefijo (CUÁNDO): solo al pasar el mouse
> ```
> - *"La clase-propiedad de M1-M3 (`bg-blue-700`) aplica siempre. El prefijo la CONDICIONA: `hover:bg-blue-700` aplica ese fondo solo al pasar el mouse."*
> - *"Hay dos familias de prefijos, y las vemos una por una: los de **estado** (dependen de la interacción) y los de **breakpoint** (dependen del ancho de pantalla)."*

---

#### 4.2 Prefijos de ESTADO: `hover:` / `focus:` (P4.1)

**EN PANTALLA: EXCALIDRAW — Panel 4.2 (tabla de prefijos de estado ↔ pseudo-clases CSS): columnas "Prefijo Tailwind | Pseudo-clase CSS | Cuándo aplica".**

> **Tu apertura:**
> *"Primera familia: los prefijos de estado. Dependen de lo que hace el usuario. Y no son nuevos en concepto — son las pseudo-clases que vieron en C02, como `:hover`. Solo la notación."*

> **Tu explicación teórica precisa (sintaxis general):**
> ```text
> estado:clase   →  la clase-propiedad aplica solo en ese estado
> ```

> **Tabla de prefijos de estado (Prefijo · Pseudo-clase CSS · Cuándo aplica):**
> Cada estado es un prefijo distinto (no es un valor intercambiable): se enumeran, como los breakpoints.
> | Prefijo (`{estado}:`) | Pseudo-clase CSS | Cuándo aplica |
> |---|---|---|
> | `hover:` | `:hover` | al pasar el mouse por encima |
> | `focus:` | `:focus` | al enfocar (click o tab en un campo) |
> | `active:` | `:active` | mientras se mantiene presionado |
> | `disabled:` | `:disabled` | cuando el elemento está deshabilitado |

> **Ejemplo (uno):**
> *"`hover:bg-blue-700` = el fondo se pone azul más oscuro solo mientras el mouse está encima. Es el `:hover` de C02, escrito como prefijo."*

> **Code-along del lab — Parte 4.1 (aplicar al Gestor, solo 2 lugares):**
> 1. El botón `**_&lt;button&gt;_**`: agregar `hover:bg-blue-700 transition` (cambia de color al pasar el mouse; `transition` lo hace suave).
> 2. Los `**_&lt;input&gt;_**` y el `**_&lt;select&gt;_**`: agregar `focus:outline-none focus:ring-2 focus:ring-blue-500` (anillo azul al enfocar — accesibilidad).

---

#### 4.3 Prefijos de RESPONSIVIDAD: breakpoints (P4.2, P4.3)

**EN PANTALLA: EXCALIDRAW — Panel 4.3 (tabla de breakpoints + mobile-first): la tabla de los 5 breakpoints con su ancho, media query y dispositivo + el esquema mobile-first (base = móvil → cada prefijo agrega de ese ancho hacia arriba).**

> **Tu apertura:**
> *"Segunda familia: los breakpoints. En vez de depender de la interacción, dependen del ANCHO de la pantalla. Por dentro son las media queries de C02 — pero escritas como prefijo, sin salir del HTML."*

> **Tu explicación teórica precisa:**
> Los **breakpoints** permiten aplicar estilos según el ancho de la pantalla. Se basan en **media queries** y sirven para construir interfaces responsivas sin escribir CSS aparte. Tailwind trae cinco por defecto:
> | Prefijo | Ancho | Media query | Dispositivo |
> |---|---|---|---|
> | (sin prefijo) | < 640px | — | celulares |
> | `sm:` | ≥ 640px | `@media (min-width: 640px)` | celular horizontal · tablet chica |
> | `md:` | ≥ 768px | `@media (min-width: 768px)` | tablet estándar |
> | `lg:` | ≥ 1024px | `@media (min-width: 1024px)` | laptop · monitor estándar |
> | `xl:` | ≥ 1280px | `@media (min-width: 1280px)` | monitor grande |
> | `2xl:` | ≥ 1536px | `@media (min-width: 1536px)` | monitor muy grande |

> **Sintaxis general:**
> ```text
> breakpoint:clase   →  la clase aplica de ese ancho hacia arriba
> ```
> ```html
> <!-- base w-16; cambia a w-32 desde md; a w-48 desde lg -->
> <img class="w-16 md:w-32 lg:w-48" src="imagen.jpg">
> ```

> **Reglas clave — mobile-first:**
> - *"Las clases SIN prefijo son la base, y la base es el MÓVIL."*
> - *"El prefijo (`sm`, `md`, `lg`...) aplica de ese ancho HACIA ARRIBA, no solo en ese tamaño."*
> - *"Se puede condicionar cualquier propiedad: `display`, `width`, `padding`, lo que sea."*
> *"Por esto el responsive va al final: el look que armamos en M1-M3 YA es el del móvil; ahora solo le AGREGAMOS el desktop."*

> **Code-along del lab — Parte 4.2 (aplicar al Gestor, 1 lugar):**
> En el `**_&lt;section&gt;_**` de resumen + formulario, cambiar `grid-cols-2` por `grid-cols-1 md:grid-cols-2`:
> ```html
> <!-- antes: 2 columnas siempre (apretado en móvil) -->
> <section class="grid grid-cols-2 gap-6">
> <!-- ahora: base 1 columna (móvil); desde md, 2 columnas -->
> <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
> ```

> **Verificar en DevTools (Parte 4.3) + Checkpoint 4:**
> En modo responsive: **móvil (<768px)** → resumen y formulario apilados, lista a ancho completo; **escritorio (≥768px)** → resumen y formulario lado a lado. Checkpoint 4: el botón reacciona al hover, los inputs muestran anillo de foco, y la página se adapta. **El Gestor tiene cara y es responsivo.**

> **Cierre del Momento + puente a M5:**
> *"El Gestor tiene cara y se adapta a cualquier pantalla. Pero el formulario todavía no hace nada: lleno los campos, le doy a Agregar... y no pasa nada. La interfaz y la lógica de C07 —las clases `Movimiento` y `Presupuesto`— están las dos listas, pero por separado. Lo último de la clase, y del módulo, es conectarlas con JavaScript."*

---

## MOMENTO 5 — Conectar el Gestor (JS) + cierre del módulo

**Tiempo:** ~25 min
**Parte del lab:** Parte 5 (5.1 → 5.3) + cierre

> **OBJETIVO:** El alumno conecta el formulario con JavaScript reusando `Movimiento` y `Presupuesto` de C07: al enviar el form se crea una instancia, se agrega al presupuesto y se re-pinta la lista + el saldo en vivo. Con eso el Gestor funciona como app real y **cierra el proyecto del módulo**. Antes del code-along, un repaso de los conceptos que se usan. Cierre del arco M2 + entrega/deploy (lab calificado).

> **Patrón pedagógico de M5:** arranca con un **repaso/intro de los conceptos** necesarios para P5 (no se entra en frío al código), y recién después el code-along. El JS no agrega lógica nueva: reutiliza las clases de C07 (`new Movimiento`, `presupuesto.agregar`, `m.esIngreso()`, `presupuesto.saldo()`) — paga la inversión de la clase anterior. Lo único realmente nuevo es el primer contacto con eventos del formulario (el DOM a fondo es M3). Cierra con el arco completo del módulo y el recordatorio de entrega (rúbrica).

#### 5.1 Repaso/intro — qué vamos a usar para conectar

**EN PANTALLA: EXCALIDRAW — Panel 5.1 (los conceptos para conectar): dos bloques. Izquierda "YA LO TIENEN (de C07)": los métodos de `Movimiento`/`Presupuesto`. Derecha "LO NUEVO MÍNIMO": leer input, escuchar submit, preventDefault, pintar HTML. Etiqueta: "el formulario lee → crea con C07 → re-pinta".**

> **Tu apertura:**
> *"Antes de escribir una línea, veamos qué vamos a necesitar para que el formulario funcione. No es mucho, y la mitad ya la tienen hecha desde C07."*

> **Bloque A — lo que YA tienen (repaso de C07):**
> *"Esto no lo tocamos, lo USAMOS tal cual:"*
> | De C07 | Para qué |
> |---|---|
> | `new Movimiento(nombre, tipo, valor)` | crear un movimiento |
> | `presupuesto.agregar(movimiento)` | sumarlo a la colección |
> | `presupuesto.saldo()` | obtener el saldo actual |
> | `presupuesto.movimientos` / `m.esIngreso()` | recorrer y formatear la lista |

> **Bloque B — lo nuevo mínimo: primer contacto con DOM y eventos.**
> *"Acá aparecen dos conceptos nuevos. Los vemos BREVEMENTE —su módulo completo es el M3—; hoy, solo lo justo para conectar:"*
> - *"El **DOM**: la página vista como una estructura que JavaScript puede leer y modificar — agarrar un elemento por su `id`, leer su valor, cambiar su contenido."*
> - *"Un **evento**: algo que pasa en la página (un click, enviar un formulario) y al que reaccionamos ejecutando una función."*
>
> *"Con esos dos conceptos, las piezas concretas que vamos a usar:"*
> | Necesito… | Cómo |
> |---|---|
> | tomar un elemento de la página | `document.getElementById('id')` |
> | leer lo que el usuario escribió | `campo.value` |
> | reaccionar cuando envían el form | `form.addEventListener('submit', función)` |
> | que la página NO se recargue al enviar | `event.preventDefault()` |
> | pintar HTML desde JS | `elemento.innerHTML = ...` (con template strings `` `...` ``) |

> *"El flujo completo es: el formulario LEE los campos, CREA un `Movimiento` y lo AGREGA al presupuesto (eso es C07), y vuelve a PINTAR la lista y el saldo. Nada de lógica nueva — leer, reusar C07, re-pintar."*

---

#### 5.2 Preparar el HTML (P5.1)

**EN PANTALLA: VS CODE — `index.html`, sobre la interfaz ya estilizada.**

> **Tu apertura:**
> *"Para que el JS pueda leer y escribir en la página, hay que marcar los elementos con `id` y dejar la lista  vacía para que él la llene."*

> **Code-along del lab — Parte 5.1:**
> 1. `id` al saldo: `**_&lt;p id="saldo"&gt;_**`.
> 2. `id` al formulario y a cada campo: `**_&lt;form id="form-mov"&gt;_**`, `id="nombre"`, `id="tipo"`, `id="monto"`.
> 3. `value` a las opciones del `**_&lt;select&gt;_**`: `**_&lt;option value="ingreso"&gt;_**`, `**_&lt;option value="gasto"&gt;_**`.
> 4. La lista: `**_&lt;ul id="lista"&gt;_**` y **vaciarla** (borrar las 3 filas de ejemplo — ahora las genera el JS).
> 5. Antes de `**_&lt;/body&gt;_**`, cargar las clases de C07 + el `app.js` nuevo:
>    ```html
>    <script src="oop-objects.js"></script>   <!-- class Movimiento y Presupuesto, de C07 -->
>    <script src="app.js"></script>
>    ```

---

#### 5.3 Escribir `app.js` (P5.2)

**EN PANTALLA: VS CODE — `app.js` nuevo, en vivo.**

> **Tu apertura:**
> *"Acá está todo junto. Fíjense cuánto es de C07 (casi todo) y cuán poco es nuevo (leer el form y re-pintar)."*

> **Code-along del lab — Parte 5.2:**
> 1. Referencias + crear el presupuesto (reusando C07) y cargar ejemplos:
>    ```javascript
>    const form  = document.getElementById('form-mov');
>    const lista = document.getElementById('lista');
>    const presupuesto = new Presupuesto();
>
>    presupuesto.agregar(new Movimiento('Salario', 'ingreso', 3000));
>    presupuesto.agregar(new Movimiento('Cena', 'gasto', 45.50));
>    presupuesto.agregar(new Movimiento('Freelance', 'ingreso', 500));
>    ```
> 2. `render()` — pinta la lista y el saldo desde el presupuesto (las mismas clases de Tailwind que armaron en P3, ahora en un template string):
>    ```javascript
>    function liHTML(m) {
>      const caja  = m.esIngreso() ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500';
>      const texto = m.esIngreso() ? 'text-green-700' : 'text-red-700';
>      const signo = m.esIngreso() ? '+' : '-';
>      return `<li class="flex items-center justify-between p-3 border-l-4 rounded ${caja}">
>                <span class="text-gray-800"><span class="font-medium">${m.nombre}</span> <span class="text-xs text-gray-500">(${m.tipo})</span></span>
>                <span class="font-semibold ${texto}">${signo}$${m.valor.toFixed(2)}</span>
>              </li>`;
>    }
>
>    function render() {
>      lista.innerHTML = presupuesto.movimientos.map(liHTML).join('');
>      document.getElementById('saldo').textContent = '$' + presupuesto.saldo().toFixed(2);
>    }
>    ```
> 3. El listener del `submit` — leer, crear con C07, agregar, re-pintar:
>    ```javascript
>    form.addEventListener('submit', function (e) {
>      e.preventDefault();
>      const nombre = document.getElementById('nombre').value;
>      const tipo   = document.getElementById('tipo').value;
>      const valor  = parseFloat(document.getElementById('monto').value);
>      presupuesto.agregar(new Movimiento(nombre, tipo, valor));
>      render();
>      e.target.reset();
>    });
>
>    render();   // pinta los ejemplos al cargar
>    ```
> *"Miren las piezas: `new Movimiento`, `presupuesto.agregar`, `m.esIngreso()`, `presupuesto.saldo()` — todo es C07. Lo nuevo es solo el `addEventListener('submit')`, leer los `.value` y el `render()` con `innerHTML`."*

---

#### 5.4 Probar + Checkpoint 5 + reto (P5.3)

**EN PANTALLA: NAVEGADOR — el Gestor funcionando, con DevTools al lado.**

> **Probar:**
> 1. Cargar la página: aparecen los 3 movimientos de ejemplo y el saldo, **generados por el JS**.
> 2. Llenar el formulario (ej. *Bono · Ingreso · 800*) y dar **Agregar**.
> 3. La fila aparece **al instante** con su color, el **saldo se actualiza** y el formulario se limpia.

> **Verificar (Checkpoint 5):**
> Cada envío del formulario crea una instancia de `Movimiento`, la suma al `Presupuesto`, y la lista + el saldo se actualizan solos. **El Gestor funciona — el módulo cierra con una app real.**

> **Reto autónomo:**
> *"Que las cajitas **Ingresos** y **Gastos** del resumen también se actualicen en cada `render()` — mismo patrón: `id` + `textContent` con `presupuesto.totalIngresos()` / `presupuesto.totalGastos()`."*

---

#### 5.5 Cierre del Módulo 2 + entrega

**EN PANTALLA: EXCALIDRAW — Panel 5.2 (arco del Módulo 2): cuatro etiquetas en secuencia — Imperativo (C05) · Funcional (C06) · OOP (C07) · Interfaz (C08) — apuntando al mismo Gestor, que pasa de consola a app real desplegada.**

> **Tu cierre del módulo:**
> *"Miren el camino completo del módulo. El Gestor es el mismo proyecto desde C05, y lo construyeron con las cuatro piezas: lo pensaron paso a paso (imperativo, C05), lo transformaron con funciones (funcional, C06), lo modelaron con objetos (OOP, C07), y hoy le dieron interfaz (Tailwind, C08). Pasó de correr en la consola a ser una aplicación real que cualquiera puede usar en el navegador."*

> **Entrega (lab calificado del módulo):**
> *"Esta es la entrega que cierra el M2 y se califica:"*
> - `index.html` con el Gestor completo estilizado con Tailwind, construido por grupos.
> - Repo público en GitHub + sitio desplegado en **GitHub Pages**.
> - Capturas en móvil y en escritorio (que se vea el responsive).
> *"Se evalúa con la rúbrica de 5 criterios: historias de usuario propias, calidad técnica (lógica + interfaz integradas), demo en vivo, argumentación técnica, y explicar un fragmento de código a pedido. El uso de IA está permitido, pero tienen que poder explicar lo que entregan."*

> **Cierre de la clase:**
> *"Cerraron el módulo de fundamentos de programación con un proyecto real, de punta a punta. Lo que viene —el Módulo 3— es el DOM: conectar de verdad la interfaz con la lógica, más allá de esta primera conexión de hoy. Felicitaciones por el Gestor."*

---

## Paneles Excalidraw candidatos (para la Guía)

| Panel | Momento | Qué visualiza |
|---|---|---|
| 1.1 | M1 | CSS a mano (archivo `.css`) vs utility-first (clases en el HTML) |
| 1.2 | M1 | Tabla de equivalencias: clase-propiedad Tailwind ↔ propiedad CSS |
| 1.3 | M1 | Anatomía de una clase-propiedad (cómo el nombre codifica propiedad + valor) |
| 2.1 | M2 | Tabla de clases Flexbox ↔ CSS (estilo doc margin/padding) |
| 2.2 | M2 | Tabla de clases Grid ↔ CSS |
| 3.1 | M3 | Tabla de clases de espaciado/tamaño ↔ CSS + escala fija |
| 3.2 | M3 | Tabla de clases de estética ↔ CSS + color semántico |
| 4.1 | M4 | Anatomía del prefijo-modificador (`prefijo:clase`) |
| 4.2 | M4 | Tabla de prefijos de estado (hover/focus) ↔ pseudo-clases CSS |
| 4.3 | M4 | Tabla de breakpoints (sm/md/lg/xl/2xl) + mobile-first |
| 5.1 | M5 | Conceptos para conectar: lo de C07 (repaso) + lo nuevo mínimo (input.value, submit, preventDefault, render) |
| 5.2 | M5 | Arco del Módulo 2 (imperativo → funcional → OOP → interfaz) |

> Selección final de paneles (cuáles son Excalidraw vs VS Code en vivo) se define al escribir la Capa 2+3 y la Guía, igual que en C07.

---

## Mapeo Momentos ↔ Lab ↔ Clases previas

| Momento | Parte del lab | Mapea a clases previas |
|---|---|---|
| **M1** | P0 | — (concepto nuevo: utility-first) |
| **M2** | P1 | C02 (Flexbox) + C03 (Grid) |
| **M3** | P2 + P3 | M1 (padding/margin/width) + C04 (color, bordes, sombra, variables) |
| **M4** | P4 | C02 (`:hover`, media queries / mobile-first) |
| **M5** | P5 | C07 (`Movimiento` / `Presupuesto`) + C05/C06 (lógica del Gestor) |
