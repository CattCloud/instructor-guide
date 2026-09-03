# CLASE 04: CSS Variables + Forms Validados + Git Workflow

> **Módulo:** M1 — Clase 4 de 4 (**Lab CALIFICADO** — única clase evaluada del M1)
> **Curso:** Code 201
> **Proyecto Víctima:** Product Landing Page (continúa desde C01/C02/C03) — hoy NO se agregan páginas; se refactoriza el CSS de las 3 páginas existentes (**_index.html_**, **_precios.html_**, **_faq.html_**) y se agrega validación al form de contacto del **_index.html_**.
> **Estado:** Capa 1 — estructura de Momentos. Capa 2+3 pendiente.
> **Fecha:** 2026-05-25
> **Base teórica:** **_mi-sistema/clase-04/CAPA 0 - CLASE 04.md_**

---

## Metadatos de la clase

| | |
|---|---|
| Duración real de clase | 3h (180 min) |
| Tiempo preparado | 2h 30min (150 min, incluye receso) |
| Receso | 10 min (entre M2 y M3) |
| Colchón invisible | 30 min |
| Total Momentos | 5 |
| Herramientas nuevas | CSS Variables (**_:root_** + **_var()_**), validación nativa HTML5, Git CLI con ramas + GitHub PRs |
| Conceptos CSS | **_:root_**, **_var(--token)_**, sistema de tokens semánticos (colores / tipografía / espacios / estética), **_box-shadow_**, **_transition_**, **_:hover_** + **_transform: translateY_**, refactor aditivo |
| Conceptos Forms | **_required_**, **_minlength_**, **_type="email"_**, **_type="tel"_** + **_pattern_** (regex), **_&lt;select&gt;_** con primera opción **_value=""_**, **_&lt;input type="checkbox" required&gt;_**, triple validación (nativa / JS / servidor) |
| Conceptos Git | Rama (branch), **_git branch_**, **_git checkout -b_**, **_git push -u_**, Pull Request, leer el diff, merge, **_git pull_** (= fetch + merge), **_git branch -d_**, GitFlow básico de 6 pasos |
| Continuidad con C01-C03 | El alumno llega con: HTML semántico, Flex, Grid, **_box-sizing: border-box_**, breakpoints mobile-first 640/1024, las 3 páginas funcionales. Hoy se refactoriza CSS hardcoded a tokens y se valida el form. **No** se crean páginas nuevas. |
| Lección pedagógica clave | **Refactor aditivo** (no reescribir reglas, solo agregar/reemplazar líneas con **_var()_**) + **Triple validación** (la nativa de hoy es solo la primera capa) + **GitFlow no negociable** (los 6 pasos en orden, saltar uno rompe el flujo). |
| Especial: clase calificada | Primera clase con rúbrica del curso — **5 criterios × 20 pts = 100 pts**. Escala A (90-100) / B (80-89) / C (70-79) / F (<70). 2 criterios son nuevos respecto a otras clases: **Presentación + argumentación técnica** (demo ≤3 min + explicar ≥2 decisiones técnicas + justificar uso de IA si aplica) y **HU adicionales** (≥2 historias de usuario más allá del lab base). El alumno debe saberlo desde el inicio para distribuir su tiempo. |

---

## Tabla de tiempos

| # | Momento | Foco principal | Tiempo | Parte del lab |
|---|---|---|---|---|
| **M1** | Apertura + CSS Variables + Estética nueva | Hook (problema del CSS hardcoded + sitio plano) + paleta en **_:root_** + refactor aditivo + box-shadow + microinteracción + commit a **_main_** | **45 min** | Parte 1 (1.1 + 1.2 + 1.3 + 1.4) |
| **M2** | Crear rama feature | Concepto de branch + GitFlow + **_git branch_** + **_git checkout -b feature/form-validado_** | **15 min** | Parte 2 |
| | **RECESO** | | **10 min** | — |
| **M3** | Formulario validado en la rama | Validación nativa HTML5 + 6 atributos clave + 3 escenarios de fallo + commit dentro de la rama | **35 min** | Parte 3 |
| **M4** | Cerrar el flujo Git | **_git push -u_** + abrir PR + leer diff + merge + **_git checkout main_** + **_git pull_** + (opcional) **_git branch -d_** | **30 min** | Parte 4 |
| **M5** | Deploy + entrega + rúbrica | Verificar GitHub Pages + actualizar README del repo + revisar rúbrica + discusión final (variables / validación / ramas) | **15 min** | Parte 5 + Entrega |
| | **Colchón** | Preguntas, retrasos, conflictos de Git imprevistos | **30 min** | — |
| | **Total preparado** | | **150 min** | |

---

## Cadena problema → solución

```
M1: "Su CSS de C03 tiene #1a1a1a, #e0e0e0 y 8px repetidos por todo el archivo.
     Si el cliente cambia el primary, tocan 20 lugares. Y el sitio se ve PLANO —
     cards sin profundidad, links sin feedback al pasar el mouse. Hoy se da identidad."
          ↓ (CSS Variables en :root + refactor aditivo + box-shadow + microinteracción + commit a main)
M2: "Ese commit que acabaron de hacer fue directo a main. Si esto fuera un equipo
     y alguien más estuviera trabajando en main, lo rompieron para todos. ¿Cómo
     trabajan los equipos profesionales?"
          ↓ (concepto de rama + git branch + git checkout -b feature/form-validado)
RECESO
M3: "Estamos parados en la rama feature, aislados del main. El form de contacto
     del index.html acepta cualquier basura — 'abc' como email, '12' como teléfono.
     ¿Cómo lo prevenimos sin escribir una línea de JavaScript?"
          ↓ (validación nativa: required + minlength + type=email + type=tel + pattern + select value="" + checkbox required + commit dentro de la rama)
M4: "Su rama feature tiene el form validado. Pero ese código está aislado en su
     PC — nadie del equipo lo ve. ¿Cómo lo integramos a main de forma profesional,
     con revisión, sin pisar trabajo de otros?"
          ↓ (git push -u + abrir PR en GitHub + leer el diff + merge + git checkout main + git pull + opcionalmente git branch -d)
M5: "Todo el feature está en main. El sitio público en GitHub Pages debería ya
     verse con los tokens y el form validado. Solo falta verificar y entregar."
          ↓ (verificar GitHub Pages + actualizar README del repo + presentar la rúbrica + discusión final)
```

Cadena natural: cada problema es demostrable en vivo y la solución del siguiente momento responde directamente al dolor que el alumno acaba de sentir. La transición M1→M2 (de commit a main → necesitamos ramas) es **el momento pedagógico crítico del día** — ese commit "incorrecto" a main es la apertura del bloque de Git.

---

## Estructura de Momentos

---

### MOMENTO 1 — Apertura + CSS Variables + Estética nueva

**Tiempo:** ~45 min
**Parte del lab:** Parte 1 (1.1 + 1.2 + 1.3 + 1.4)

> **OBJETIVO:** El alumno entiende qué problema resuelven las CSS Variables (eliminar hardcoded repetido + permitir cambios centralizados), declara la paleta del producto en **_:root_** con ≥10 tokens semánticos, refactoriza el CSS de C01-C03 con **método aditivo** (sin reescribir reglas — solo agrega/reemplaza líneas), y agrega estética NUEVA (**_box-shadow_** + **_transition_** + microinteracción **_:hover_** con **_translateY_**). Al cerrar M1, el sitio se ve con identidad visual, las cards "flotan" al pasar el mouse, y el alumno commitea TODO a **_main_** — el último commit del "viejo flujo" antes de aprender el profesional en M2.

> **Patrón pedagógico de M1:** primero se presenta cada concepto teórico nuevo con su Panel Excalidraw (anatomía visual) — Variables, **_:root_**, sistema de tokens, **_box-shadow_**, **_transition_**, microinteracción — y después se aplica al lab del alumno con **refactor aditivo**. La regla inamovible es: el alumno **NO reescribe reglas existentes**, solo **agrega o reemplaza** líneas con **_var(--token)_** dentro de la regla que ya existe. Eric va señalando "esta línea ya estaba, NO la borres" en cada paso del code-along.

---

#### 1.1 Hook — el problema del CSS hardcoded + el sitio plano

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — **_styles.css_** del alumno (estado al cierre de C03) a la izquierda, scrolleado para que se vean 5-6 reglas distintas con los mismos valores repetidos (**_#1a1a1a_**, **_#e0e0e0_**, **_8px_**). Live Server a la derecha mostrando el landing con cards planas, sin sombras, sin hover.**

> **Tu apertura:**
> *"Buenos días. Hoy cerramos el M1 — última clase del módulo. La buena noticia: con HTML semántico, Flex y Grid ya tienen las herramientas nativas para construir cualquier landing. La pregunta de hoy es: ¿cómo lo dejamos con identidad visual y entregado como profesional?"*
>
> *"Antes de tocar nada, mírense esto."* Recorrer con el cursor 5-6 lugares del CSS donde aparece **_#1a1a1a_** o **_#e0e0e0_** o **_8px_**. *"Mismo valor, en 6 lugares distintos. Mi pregunta es: el día de mañana el cliente les dice 'el primary va a ser azul, no negro' — ¿cuántos lugares tocan?"*

> **Pregunta de calibración:**
> *(Esperar 15 segundos. Escuchar respuestas. Contar en pantalla los lugares con Ctrl+F sobre **_#1a1a1a_** — típicamente salen 8-12 ocurrencias.)*

> **Tu segundo gancho — el sitio plano:**
> *"Y mírense el sitio. Las cards de Características, los planes de precios — ¿qué tienen en común? Son rectángulos planos. No tienen volumen. Los links del nav no responden cuando paso el mouse. Esto funciona, pero no se siente moderno. Comparen con cualquier sitio que usen todos los días — Notion, Spotify, Mercado Libre — y van a ver microinteracciones, sombras, feedback al pasar el mouse. Hoy le damos eso a su producto."*

> **Anuncio del día:**
> *"Hoy aprenden 3 cosas. **Una:** CSS Variables — para que cambiar el primary sea UN lugar, no 12. **Dos:** estética nueva — sombras y microinteracciones para que el sitio se sienta moderno. **Tres:** el flujo Git profesional que cualquier equipo les va a pedir desde el primer día — ramas, Pull Requests, merge, sincronización. Hoy es lab CALIFICADO con 5 criterios — la rúbrica la vemos al cierre. Vamos."*

---

#### 1.2 ¿Qué es una CSS Variable? El modelo de declaración + uso

**EN PANTALLA: EXCALIDRAW — Panel 1.1 (anatomía de una Custom Property): diagrama lado a lado. Izquierda con título "DECLARACIÓN": un selector (**_:root_** resaltado) y adentro **_--color-accent: #0066cc;_** con etiquetas "nombre del token (siempre `--`)" y "valor". Derecha con título "USO": otra regla con **_color: var(--color-accent);_** y la palabra **_var_** resaltada. Flecha curva conectando el token de la izquierda con el **_var()_** de la derecha.**

> **Tu explicación teórica precisa:**
> **¿Qué es una CSS Variable?** Mecanismo nativo de CSS para guardar un valor con un nombre y reutilizarlo en múltiples reglas. Una vez declarada, la variable se puede usar en cualquier propiedad CSS que acepte ese tipo de valor.
>
> **Dos partes de su uso:**
>
> - **Declaración:** dentro de un selector — típicamente **_:root_**, lo vemos en el siguiente sub-punto — se escribe **_--nombre-token: valor;_**. El doble guion al inicio es **obligatorio** — eso es lo que le dice a CSS "esto no es una propiedad nativa, es una variable mía".
> - **Uso:** en cualquier otra regla, en lugar de escribir el valor literal, se escribe **_var(--nombre-token)_**. CSS reemplaza el nombre por el valor al renderizar.
>
> **Reglas técnicas inamovibles:**
> - **Case-sensitive:** **_--Color-Accent_** y **_--color-accent_** son variables distintas. Eric usa siempre minúsculas con guiones.
> - **Doble guion al inicio:** no es decorativo. Sin él, CSS lo interpreta como propiedad inválida y la ignora.
> - **NO son variables de JavaScript:** son tokens del navegador que se evalúan al pintar. Distinto de **_let_**, **_const_** y **_var_** de JS.
>
> **Comportamiento default si el token no existe:** si el navegador encuentra **_var(--token-que-no-existe)_** y nadie declaró ese token, la propiedad **se ignora silenciosamente** — la propiedad cae al valor default que tendría el navegador. Por eso **_var()_** acepta un segundo argumento como **fallback**: **_var(--color-accent, #000)_** = "si no existe el token, usá negro".

**Sintaxis general:**
```css
/* DECLARACIÓN */
selector {
  --nombre-token: <valor>;
}

/* USO */
otro-selector {
  propiedad: var(--nombre-token);

  /* Con fallback opcional */
  propiedad: var(--nombre-token, <valor-default>);
}
```

> **Tu analogía rápida:**
> *"Piensen en la agenda del celular. Antes con las agendas de papel, si tu amigo Juan cambiaba de número tenías que ir tachando página por página. La agenda del celular cambió eso — escribís 'Juan' en cada lado y el celular sabe qué número marcar. Si Juan cambia, lo actualizás en su contacto UNA vez y todo sigue funcionando. **_--color-accent_** es 'Juan'. **_var(--color-accent)_** es escribir 'Juan' en cada lugar."*

---

#### 1.3 **_:root_** — el selector raíz del documento

**EN PANTALLA: EXCALIDRAW — Panel 1.2 (anatomía de **_:root_**): esquema del DOM en árbol. **_&lt;html&gt;_** como nodo raíz arriba, **_&lt;body&gt;_** debajo, dentro del body el contenido habitual (header, main, footer). Anotación resaltada "**_:root_** apunta acá → **_&lt;html&gt;_**". Flecha mostrando cómo las variables declaradas en **_:root_** caen en cascada hacia TODOS los descendientes.**

> **Tu explicación teórica precisa:**
> **¿Qué es **_:root_**?** Pseudo-clase que apunta al **elemento raíz del documento**. En HTML, ese elemento es siempre **_&lt;html&gt;_**. Equivale a usar **_html_** como selector, pero con **mayor especificidad** (las declaraciones de **_:root_** ganan sobre las de **_html_** si hay colisión).
>
> **Por qué se usa **_:root_** y no otro selector para declarar las variables globales:**
> - Las variables CSS **se heredan** por la cascada del DOM, igual que **_color_** o **_font-family_**. Declarar el token en el nodo más alto del árbol lo hace disponible en **todo** el documento.
> - **_:root_** es **_&lt;html&gt;_** — el ancestro de todo lo que existe en la página.
> - Si en lugar de **_:root_** declarás el token en **_.contenedor_**, solo los descendientes de **_.contenedor_** lo encuentran. El resto del documento no.
>
> **Por qué no **_body_**:**
> - **_body_** también es ancestro de todo el contenido visible, pero **_:root_** está un nivel arriba — incluye pseudo-elementos globales y tiene la especificidad correcta.
> - **Es la convención universal del mundo profesional.** Cualquier design system (Material Design, Bootstrap 5, Tailwind), cualquier librería, cualquier framework declara sus tokens en **_:root_**. Aprenderlo de otra forma genera fricción cuando el alumno se cruza con código real.

**Sintaxis general:**
```css
:root {
  --token-1: <valor>;
  --token-2: <valor>;
  /* ... todas las variables globales del documento ... */
}
```

> **Tu analogía rápida:**
> *"**_:root_** es como el tablón de anuncios de la portería del edificio. Si pegás ahí 'el ascensor está en reparación', se enteran todos los pisos. Si lo pegás en la puerta de tu departamento, solo los que entran a tu departamento. Las variables globales viven en la portería — **_:root_**."*

---

#### 1.4 Code-along — Parte 1.1 del lab (declarar la paleta del producto)

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — **_styles.css_** del alumno a la izquierda, Live Server a la derecha.**

> **Tu apertura:**
> *"Vamos al primer code-along del día. La Parte 1.1 del lab pide declarar la paleta del producto en **_:root_** — 13 tokens repartidos en 4 categorías: colores, tipografía, espacios, estética. Lo escriben al inicio del archivo, después del reset universal **_*_** y antes del **_body_**. Vamos."*

> **Code-along del lab — Parte 1.1:**
> 1. Abrir **_styles.css_**. Ubicar el reset universal del C01 (**_* { margin: 0; padding: 0; box-sizing: border-box; }_**).
> 2. Inmediatamente debajo del reset, agregar el bloque **_:root { ... }_** con los 13 tokens del lab agrupados en 4 categorías separadas por comentarios (`/* Colores */`, `/* Tipografía */`, `/* Espacios */`, `/* Estética */`).
> 3. Mencionar mientras se escribe (token por token, breve):
>    - **_--color-primary: #1a1a1a;_** → botones, nav, borders sólidos.
>    - **_--color-accent: #0066cc;_** → color de marca para destacar (hovers, badges).
>    - **_--color-text_**, **_--color-bg_**, **_--color-bg-soft_**, **_--color-border_** → resto de roles del producto.
>    - **_--font-text_**, **_--font-size_**, **_--font-size-title_** → tipografía base + tamaño de títulos destacados (28px, unifica h1 y precios).
>    - **_--space-sm/md/lg_** → escala de espacios (8 / 16 / 32 px).
>    - **_--radius_**, **_--shadow-sm_**, **_--shadow-md_** → estética visual; las sombras las explicamos en 1.7.
> 4. Guardar. Live Server recarga.
> 5. *"Y… el sitio NO cambió visualmente. ¿Por qué? Porque declaramos los tokens, pero ninguna regla los usa todavía. El cambio visual viene en los próximos 2 sub-puntos cuando refactoricemos."*

> **Adapta a tu producto:**
> *"Lo que escribieron son los valores que vienen del lab. Si su marca personal es verde, cambien **_--color-accent_** a su verde. La paleta es el ADN visual de su producto — el lab les da una base coherente; ustedes la adaptan."*

---

#### 1.5 Sistema de tokens — nombrado semántico

**EN PANTALLA: EXCALIDRAW — Panel 1.3 (sistema de tokens, 4 categorías): tabla visual de 4 columnas. Columna 1 "Colores" con los 6 tokens del lab. Columna 2 "Tipografía" con 3 tokens. Columna 3 "Espacios" con 3 tokens. Columna 4 "Estética" con 3 tokens. Cada columna con un color funcional distinto. Al pie, una caja destacada en rojo con la comparativa "**_--color-accent_** ✅ vs **_--azul_** ❌ vs **_--c2_** ❌".**

> **Tu explicación teórica precisa:**
> **¿Qué es un sistema de tokens?** Convención del mundo profesional para organizar las variables CSS por **categoría semántica**, no por su valor literal.
>
> **La regla de nombrado:** el nombre del token dice el **propósito**, no la **apariencia**.
>
> - **_--color-accent_** ✅ — el token "accent" sobrevive cualquier cambio futuro de color. Si mañana pasa de azul a verde, el nombre sigue siendo correcto.
> - **_--azul_** ❌ — el token "azul" muere apenas el cliente diga "ya no es azul, es verde". Hay que renombrar todo.
> - **_--c2_** ❌ — el token "c2" no dice nada. Otro dev que abra el código no sabe qué es. Tampoco vos en 6 meses.
>
> **Las 4 categorías canónicas (las del lab):**
>
> | Categoría | Para qué sirve |
> |---|---|
> | **Colores** — `--color-*` | Paleta del producto (primary, accent, text, bg, etc.) |
> | **Tipografía** — `--font-*` | Familia de fuente, tamaños base y de títulos |
> | **Espacios** — `--space-*` | Escala de spacing (sm/md/lg) para padding, margin, gap |
> | **Estética** — `--radius`, `--shadow-*` | Border-radius, sombras, otros detalles visuales |
>
> *"Esa estructura es la mínima profesional. Design systems grandes (Material Design, Tailwind, Spotify) tienen 200-300 tokens organizados en más categorías. La idea es la misma: nombre semántico + categoría clara."*

> **Tu analogía rápida:**
> *"Un menú de restaurante no dice 'huevo + harina + leche + sal' en cada plato. Dice 'panqueques'. El cliente entiende qué pide; el chef puede cambiar la receta sin renombrar el menú. **_--color-primary_** es 'panqueques'. **_#1a1a1a_** es 'huevo + harina + leche + sal'."*

---

#### 1.6 Code-along — Parte 1.2 + 1.3 del lab (refactor aditivo)

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — **_styles.css_** del alumno con las reglas que vienen desde C01-C03. Recorrer regla por regla aplicando el patrón aditivo.**

> **Tu apertura — la regla inamovible del día:**
> *"Atención. Lo que viene es CRÍTICO. NO vamos a reescribir las reglas. NO vamos a borrar el CSS que ya tienen. Solo vamos a **agregar o reemplazar** las líneas específicas que se conectan con un token. El resto de cada regla — el **_padding_**, el **_margin_**, el **_font-weight_**, lo que sea — se queda exactamente como estaba. Esto se llama **refactor aditivo** y es como se hace en proyectos reales: nunca tocan más de lo necesario."*
>
> *"Vamos uno por uno. Yo les digo qué línea agregar; ustedes lo agregan."*

> **Code-along del lab — Parte 1.2 (body / nav / footer):**
>
> 1. **_body_** — buscar la regla. Agregar o reemplazar SOLO 2 líneas:
>    ```css
>    body {
>      /* ...tus propiedades anteriores... */
>      font-family: var(--font-text);
>      color: var(--color-text);
>    }
>    ```
>    *"Su **_font-family_** anterior pasa a usar el token. Su **_color_** anterior pasa a usar el token. El resto de la regla — **_line-height_**, **_background_**, lo que sea — se queda."*
>
> 2. **_nav a_** — buscar. Solo reemplazar el **_color_**:
>    ```css
>    nav a {
>      /* ...tus propiedades anteriores... */
>      color: var(--color-text);
>    }
>    ```
>
> 3. **_nav a:hover_** — **regla NUEVA completa** (esta no existía en C02/C03). Agregarla:
>    ```css
>    nav a:hover {
>      color: var(--color-accent);
>    }
>    ```
>    *"Esta es estética nueva. Antes los links del nav no tenían feedback al pasar el mouse — ahora cambian a su color de acento. Es UX gratis."*
>
> 4. **_footer_** — solo reemplazar **_background_**:
>    ```css
>    footer {
>      /* ...tus propiedades anteriores... */
>      background: var(--color-bg-soft);
>    }
>    ```
>    *"Si quieren probar un look más premium, pueden usar **_var(--color-primary)_** acá — footer oscuro. Depende del estilo de su producto."*

> **Code-along del lab — Parte 1.3 (inputs / botones / cards / planes / logos):**
>
> 5. **_#contacto input, #contacto textarea_** — solo border + radius:
>    ```css
>    #contacto input,
>    #contacto textarea {
>      /* ...tus propiedades anteriores... */
>      border: 1px solid var(--color-border);
>      border-radius: var(--radius);
>    }
>    ```
>
> 6. **_#contacto button_** — background + color + radius:
>    ```css
>    #contacto button {
>      /* ...tus propiedades anteriores... */
>      background: var(--color-primary);
>      color: var(--color-bg);
>      border-radius: var(--radius);
>    }
>    ```
>
> 7. **_.card_** — border + radius:
>    ```css
>    .card {
>      /* ...tus propiedades anteriores... */
>      border: 1px solid var(--color-border);
>      border-radius: var(--radius);
>    }
>    ```
>
> 8. **_.plan_** — border + radius + background:
>    ```css
>    .plan {
>      /* ...tus propiedades anteriores... */
>      border: 1px solid var(--color-border);
>      border-radius: var(--radius);
>      background: var(--color-bg);
>    }
>    ```
>
> 9. **_.logo-cliente_** — background + radius:
>    ```css
>    .logo-cliente {
>      /* ...tus propiedades anteriores... */
>      background: var(--color-bg-soft);
>      border-radius: var(--radius);
>    }
>    ```

> **Resultado al guardar:**
> Live Server recarga. *"Mírense el sitio. Se ve **idéntico** que antes. Eso es lo que queríamos — el refactor no cambia el resultado visual, solo cambia de dónde viene el valor. Lo único nuevo que SÍ ven es el hover del nav: pasen el mouse por 'Inicio', 'Precios', etc. — los links cambian al accent. Esa fue la única regla nueva que escribieron en este bloque."*

> **Demo del poder de las variables — DevTools cambio en vivo:**
> 1. Abrir DevTools (F12) → pestaña Elements.
> 2. Seleccionar **_:root_** o **_&lt;html&gt;_** en el árbol.
> 3. En el panel Styles, editar el valor de **_--color-accent_** de **_#0066cc_** a **_#2f9e44_** (verde).
> 4. *"Mírense el nav. TODOS los hovers cambiaron a verde, instantáneo. Cero recargas, cero cambios en el archivo. Eso es lo que ningún hardcoded permite."*
> 5. Restaurar a **_#0066cc_** antes de pasar al siguiente sub-punto.

> **Pregunta de activación:**
> *"Si mañana el cliente me dice 'cambiá el primary a morado', ¿cuántas líneas del **_styles.css_** tengo que tocar?"*
> *(Respuesta esperada: 1 — el valor del token **_--color-primary_** en **_:root_**.)*

---

#### 1.7 **_box-shadow_** — agregar profundidad

**EN PANTALLA: EXCALIDRAW — Panel 1.4 (anatomía de **_box-shadow_**): bloque grande con el valor **_0 4px 12px rgba(0,0,0,0.12)_** y 4 flechas saliendo de cada parte hacia etiquetas: "offset-x: desplazamiento horizontal", "offset-y: desplazamiento vertical", "blur: difuminado del borde", "color con alpha: color + opacidad". Al lado, dos cards de muestra: una sin sombra (rectángulo plano) vs otra con **_--shadow-sm_** aplicado, mostrando la profundidad sutil.**

> **Tu explicación teórica precisa:**
> **¿Qué es **_box-shadow_**?** Propiedad CSS que dibuja una sombra alrededor del elemento, simulando profundidad. La sombra se controla con 4 valores en orden: desplazamiento horizontal, desplazamiento vertical, blur (cuán difuminado está el borde) y color (con transparencia).
>
> **Lectura del valor del lab (**_--shadow-sm_**):**
>
> ```css
> --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
> ```
>
> - **_0_** → no se desplaza horizontalmente. La sombra queda centrada en X.
> - **_1px_** → cae 1 pixel hacia abajo. Simula luz cenital (de arriba).
> - **_3px_** → cantidad de difuminado del borde de la sombra. Más blur = sombra más suave y dispersa.
> - **_rgba(0,0,0,0.08)_** → negro con **8% de opacidad**. Sombras sutiles usan opacidades bajas (5-15%); sombras agresivas, altas (30-50%).
>
> **Las 2 sombras del lab:**
>
> | Token | Valor | Cuándo se usa |
> |---|---|---|
> | `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.08)` | Estado base de cards y planes — sombra discreta |
> | `--shadow-md` | `0 4px 12px rgba(0,0,0,0.12)` | Estado hover — sombra más marcada, "card levantada" |
>
> **Regla técnica clave:** **_box-shadow_** **NO afecta el layout** — no empuja a elementos vecinos. Solo pinta encima o debajo. Por eso animarlo es barato (solo repintado, sin recalcular posiciones) y se puede combinar con **_transition_** sin problema, lo veremos en el siguiente sub-punto.

**Sintaxis general:**
```css
selector {
  box-shadow: <offset-x> <offset-y> <blur> <color>;
}
```

> **Tu analogía rápida:**
> *"La sombra del vaso sobre la mesa. Si el vaso está apoyado, la sombra cae justo debajo, pequeña y nítida. Si lo levantás un poco, la sombra se hace más grande y más difuminada. **_--shadow-sm_** es el vaso apoyado. **_--shadow-md_** es el vaso levantado. Por eso al hacer hover cambiamos de sm a md — la card 'se levanta' sutilmente."*

---

#### 1.8 **_transition_** — suavizar el cambio

**EN PANTALLA: EXCALIDRAW — Panel 1.5 (anatomía de **_transition_**): bloque con el valor **_transition: box-shadow 0.2s, transform 0.2s_** y 3 flechas a etiquetas: "propiedades a animar (lista separada por coma)", "duración (200 milisegundos)", "timing (default: ease)". Al lado, diagrama de la diferencia entre `0s` (cambio instantáneo, frame único) vs `0.2s` (cambio gradual sobre 12 frames a 60fps). Anotación destacada en rojo: "**_transition_** vive en la regla BASE, NO en **_:hover_**".**

> **Tu explicación teórica precisa:**
> **¿Qué es **_transition_**?** Propiedad CSS que **suaviza el cambio** de una propiedad de valor A a valor B. Sin transition, el cambio es **instantáneo** (en un frame); con transition, el cambio se reparte sobre un período de tiempo (típicamente 150-300 milisegundos) y queda visualmente fluido.
>
> **Sintaxis del lab:**
>
> ```css
> transition: box-shadow 0.2s, transform 0.2s;
> ```
>
> Lectura: *"el **_box-shadow_** y el **_transform_** de este elemento, si en algún momento cambian, animá el cambio en 200 milisegundos cada uno"*. Cuando el alumno pase el mouse, **_:hover_** dispara nuevos valores → la transition los anima.
>
> **Regla técnica inamovible:** **_transition_** vive en el **estado base** del elemento, NO en **_:hover_**.
>
> - **Correcto:** transition en **_.card_**, cambio en **_.card:hover_**. → Anima al entrar Y al salir el mouse.
> - **Incorrecto:** transition en **_.card:hover_**. → Solo anima al entrar; al salir, vuelve instantáneo (efecto raro, parece roto).
>
> *"Piensen la transition como un seguro permanente: 'cualquier cambio que sufra esta propiedad, anímalo'. Si lo ponen en hover, el seguro solo está activo cuando el mouse está encima."*

**Sintaxis general:**
```css
selector {
  transition: <propiedad> <duración> <timing-function>;
}

/* Múltiples propiedades a la vez */
selector {
  transition: <prop1> <dur1>, <prop2> <dur2>;
}
```

> **Tu analogía rápida:**
> *"Una puerta de horno barata cae sola con un golpe seco — eso es **_0s_**, cambio instantáneo. Una puerta con amortiguador hidráulico cae suavemente en 1 segundo — eso es **_transition_**. El cambio de posición es el mismo, pero la **percepción de calidad** sube radicalmente. 200 milisegundos en CSS es la diferencia entre 'página barata' y 'página que se siente bien'."*

---

#### 1.9 Microinteracción **_:hover_** + **_transform: translateY_**

**EN PANTALLA: EXCALIDRAW — Panel 1.6 (anatomía de la microinteracción): card de muestra en estado base abajo (con **_--shadow-sm_**) y la misma card en estado hover arriba (con **_--shadow-md_** + desplazada 4px hacia arriba). Flecha curva conectando los dos estados etiquetada "**_:hover_** dispara → **_transform: translateY(-4px)_** + **_box-shadow_** más marcada". Recuadro destacado al pie: "Patrón estándar de UI moderna — Stripe, Notion, Linear, Vercel".**

> **Tu explicación teórica precisa:**
> **¿Qué es una microinteracción?** Patrón estándar de UI moderna donde un elemento clickeable da **feedback visual sutil** al pasar el mouse, confirmando "esto se puede tocar". Sin microinteracción, el usuario duda si la card es clickeable; con microinteracción, lo confirma en milisegundos.
>
> **El patrón canónico para cards (el del lab):**
>
> - **Estado base:** **_box-shadow: var(--shadow-sm)_** + **_transition: box-shadow 0.2s, transform 0.2s_**.
> - **Estado hover:** **_box-shadow: var(--shadow-md)_** (sombra más marcada) + **_transform: translateY(-4px)_** (sube 4px).
>
> Combinado con la **_transition_** del estado base, el efecto resulta una "flotación" sutil de la card.
>
> **Regla técnica clave — por qué **_transform_** y no **_margin_**:**
> - **_transform: translateY(-4px)_** mueve el elemento **sin afectar el layout**. Los elementos vecinos no se enteran del cambio. La grilla queda intacta.
> - **_margin-top: -4px_** SÍ afectaría el layout. Los vecinos se moverían también, generando un efecto de "rompimiento" donde toda la grilla salta.
> - Misma regla que **_box-shadow_** del sub-punto anterior: **_transform_** no recalcula posiciones, solo repinta. Por eso animarlo es barato.

**Sintaxis general:**
```css
.elemento {
  /* Estado base */
  box-shadow: <sombra-discreta>;
  transition: transform 0.2s, box-shadow 0.2s;
}

.elemento:hover {
  /* Estado hover — al pasar el mouse */
  transform: translateY(<n>px);  /* negativo = sube */
  box-shadow: <sombra-más-marcada>;
}
```

> **Tu cierre + referencia visual:**
> *"Este patrón lo ven cientos de veces al día sin saber qué era. Spotify, Notion, Mercado Libre, cualquier landing moderno — las cards siempre 'flotan' al pasar el mouse. Hoy se lo agregan al suyo. Y NO es 30 líneas de JavaScript — son 4 líneas de CSS."*

---

#### 1.10 Code-along — Parte 1.4 del lab (shadows + microinteracción + h1)

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — **_styles.css_** del alumno, scrolleado a las reglas **_.card_**, **_.plan_** y **_.plan .precio_**.**

> **Tu apertura:**
> *"Último code-along del Momento. Aplican lo que acabamos de ver — sombras + transition + microinteracción — al CSS del lab. Mismo patrón aditivo: agregar líneas a las reglas existentes, NO reescribir nada. Vamos."*

> **Code-along del lab — Parte 1.4:**
>
> 1. **_.card_** — agregar **_box-shadow_** + **_transition_** a la regla existente:
>    ```css
>    .card {
>      /* ...tus propiedades anteriores (border, border-radius del bloque anterior)... */
>      box-shadow: var(--shadow-sm);
>      transition: box-shadow 0.2s, transform 0.2s;
>    }
>    ```
>
> 2. **_.plan_** — mismo agregado:
>    ```css
>    .plan {
>      /* ...tus propiedades anteriores... */
>      box-shadow: var(--shadow-sm);
>      transition: box-shadow 0.2s, transform 0.2s;
>    }
>    ```
>
> 3. **_.card:hover, .plan:hover_** — **regla NUEVA completa** (selector agrupado para no repetir):
>    ```css
>    .card:hover,
>    .plan:hover {
>      box-shadow: var(--shadow-md);
>      transform: translateY(-4px);
>    }
>    ```
>
> 4. **_.plan .precio_** — reemplazar el **_font-size_** hardcoded por el token:
>    ```css
>    .plan .precio {
>      /* ...tus propiedades anteriores... */
>      font-size: var(--font-size-title);   /* reemplaza el 32px de C03 */
>    }
>    ```
>    *"El precio antes era 32px hardcoded. Ahora usa el token de título destacado, que es 28px. Lo unificamos con h1 en el siguiente paso."*
>
> 5. **_h1_** — **regla NUEVA completa**:
>    ```css
>    h1 {
>      font-size: var(--font-size-title);
>    }
>    ```
>    *"Esto unifica el tamaño de TODOS los h1 del sitio (Características, Planes, FAQ, Marcas) con el del precio. Misma fuente, mismo peso visual — coherencia."*
>
> 6. Guardar. Live Server recarga.

> **Verificar visualmente en el navegador (las 3 páginas):**
> - Las cards de Características (index) y los planes (precios) tienen sombra suave.
> - Al pasar el mouse sobre cualquier card/plan: la card sube 4px Y la sombra se intensifica — efecto "flotación".
> - Los links del nav cambian al **_--color-accent_** al pasar el mouse (lo del sub-punto 1.6).
> - h1 de Características, Planes, FAQ y .precio: todos del mismo tamaño (28px).
> - El resto del sitio se ve **idéntico** que antes.

> **Pregunta de activación:**
> *"¿Qué pasa si pongo la **_transition_** dentro de **_.card:hover_** en vez de en **_.card_**?"*
> *(Esperar respuestas. Respuesta esperada: solo anima al entrar el mouse, no al salir. Al sacar el cursor, la card cae instantáneamente — efecto raro, parece roto. La transition vive en el estado base.)*

> **Reto autónomo (opcional, mencionar al cierre):**
> *"Si terminaron y les quedaron minutos: abran DevTools, vayan a **_:root_**, y cambien **_--color-accent_** a otro color (verde, morado, naranja). Observen cómo TODOS los hovers cambian a la vez. Eso es el reto autónomo de la P1."*

---

#### 1.11 Commit + push del refactor a **_main_** — el último commit del viejo flujo

**EN PANTALLA: Terminal integrada de VS Code.**

> **Tu apertura:**
> *"Cerramos el Momento 1. Acabamos de hacer 3 cosas grandes: declaramos la paleta de tokens, refactorizamos el CSS de C01-C03 con var(), y agregamos estética nueva con sombras + microinteracciones. Todo eso va a un commit que va directo a main — como vienen haciendo desde C01."*

> **Code-along del lab — cierre de la Parte 1:**
> 1. Verificar el estado:
>    ```bash
>    git status
>    ```
>    *"Tiene que aparecer **_styles.css_** modificado. Si aparece algún otro archivo que no tocaron hoy, revisen — probablemente es ruido (.DS_Store, archivos temporales). Hoy solo cambia **_styles.css_**."*
>
> 2. Stage + commit:
>    ```bash
>    git add styles.css
>    git commit -m "feat: agrega paleta de tokens CSS y estetica de cards"
>    ```
>    *"Mensaje del commit en imperativo y descriptivo — 'feat: agrega ...' es la convención. El mensaje cuenta lo QUE hicieron, no el cómo."*
>
> 3. Push al remoto:
>    ```bash
>    git push origin main
>    ```

> **Cierre estratégico — el gancho a M2:**
> *"Listo. Acaban de pushear directo a main. Esto es lo que vienen haciendo desde C01 — ustedes trabajan solos en su repo, nadie más toca el código, push directo a main funciona. Pero ahora la pregunta es: **¿qué pasa cuando trabajan en equipo?** ¿Qué pasa cuando hay otra persona escribiendo código en main mientras ustedes empujan el suyo? Pista: es un desastre. Vamos al receso. Cuando volvamos, aprenden el flujo que cualquier equipo profesional les va a pedir desde el primer día — y lo van a usar para implementar el formulario validado."*

---

### MOMENTO 2 — Crear rama feature

**Tiempo:** ~15 min
**Parte del lab:** Parte 2

> **OBJETIVO:** El alumno cierra el concepto pendiente desde C01 (qué es **_main_** y por qué siempre estaba ahí), entiende qué es una rama Git como **línea del tiempo paralela** a la principal, internaliza las 4 reglas de GitFlow básico y crea su primera rama feature (**_feature/form-validado_**) con **_git checkout -b_**. Al cerrar M2, el alumno está parado en la rama feature, aislado de **_main_**, listo para implementar el formulario validado de M3.

> **Patrón pedagógico de M2:** se aprovecha el momento de introducir ramas para **cerrar un concepto que quedó implícito desde C01** — qué es **_main_**. Los alumnos vienen tipeando **_git push origin main_** y **_git checkout main_** durante 3 clases sin que nadie les haya explicado qué es esa palabra. El sub-punto 2.1 abre con esa pregunta en formato interactivo (no como dictado), porque ahora el concepto se ilumina solo al verlo contrastado contra una rama feature.

---

#### 2.1 La pregunta pendiente — ¿qué era **_main_** todo este tiempo?

**EN PANTALLA: Terminal integrada de VS Code — output de **_git branch_** desde M1 visible: **_* main_**.**

> **Tu apertura — pregunta directa al alumno:**
> *"Antes de meternos en ramas: pregunta para ustedes. Llevan 3 clases tipeando **_git push origin main_** y **_git checkout main_**. Mi pregunta es: ¿qué es **_main_**? ¿Alguien me lo puede explicar?"*

> **Manejo de la pregunta:**
> *(Esperar 20-30 segundos. Es normal que el alumno dude o dé respuestas vagas: "es donde se guarda el código", "es la rama principal", "es Github". Recoger 2-3 respuestas en voz alta sin corregir. Después validar lo correcto de cada una y dar la definición técnica.)*

> **Tu explicación teórica precisa:**
> **¿Qué es **_main_**?** Es la **rama por default** que Git crea cuando inicializan un repositorio. Es **una rama más** — no es Git, no es GitHub, no es la nube. Es simplemente la primera rama del proyecto, y por convención de la industria, es la rama que contiene el **código estable y desplegado**.
>
> **Datos técnicos clave:**
>
> - El nombre **_main_** es **convención reciente** (2020). Antes se llamaba **_master_** — pueden encontrar proyectos viejos donde sigue siendo **_master_**. Son lo mismo, solo cambió el nombre.
> - Cuando ejecutaron **_git init_** en C01, Git creó automáticamente la rama **_main_** y los puso parados en ella. Por eso TODOS sus commits desde C01 viven en **_main_**.
> - **_main_** no es especial técnicamente — es una rama como cualquier otra. Lo que la hace "especial" es la **convención del equipo**: "lo que está en main es lo que vale, lo que está deployado, lo que el cliente ve".
>
> *"Es por eso que hoy aprenden a NO tocar **_main_** directamente. Si **_main_** es lo que el cliente ve, cualquier código roto que pusheen ahí, lo ve el cliente. Lo correcto es trabajar en otra rama y solo mergear a **_main_** cuando el código está validado."*

> **Cierre del sub-punto:**
> *"Listo. Hasta acá, **_main_** era una palabra que tipeaban sin saber qué era. Ahora saben: es la rama por default + la rama estable de su proyecto. En el siguiente sub-punto vemos qué es una rama 'no por default' — una rama paralela donde van a trabajar el feature de hoy."*

---

#### 2.2 ¿Qué es una rama? — La analogía de las líneas del tiempo

**EN PANTALLA: EXCALIDRAW — Panel 2.1 (líneas del tiempo paralelas): dos líneas horizontales. Arriba, etiquetada "**_main_** — LÍNEA DEL TIEMPO PRINCIPAL", con commits A → B → C → ... → M (donde M es un punto de merge). Desde el commit C, una segunda línea **se ramifica hacia abajo** etiquetada "**_feature/form-validado_** — LÍNEA DEL TIEMPO PARALELA" con commits D → E → F, que vuelve a unirse a la principal en el punto M. Anotaciones: "Si algo sale mal acá abajo, la línea principal NO se entera"; "El merge fusiona las dos líneas: lo que aprendimos en la paralela se vuelve oficial en la principal".**

> **Tu apertura — analogía del multiverso:**
> *"Imaginen las películas o series de Marvel. **_What If…?_**, **_Loki_**, **_Spider-Man No Way Home_** — todas juegan con la idea del multiverso: hay una línea del tiempo principal donde pasan las cosas oficiales, y líneas paralelas donde pasan versiones alternativas. Si en una línea paralela Tony Stark hace algo distinto, eso no afecta la línea principal — son universos separados. Solo si dos líneas se 'fusionan', lo que pasó en la paralela termina entrando a la principal."*
>
> *"Eso es exactamente una rama Git."*

> **Tu explicación teórica precisa:**
> **¿Qué es una rama?** Una **línea del tiempo paralela** dentro de tu repositorio. Cuando creás una rama a partir de **_main_**, Git crea una bifurcación del tiempo: todos los commits que hagas a partir de ese momento van a la rama paralela, no a **_main_**. Mientras tanto, **_main_** sigue avanzando con su realidad oficial.
>
> **El modelo mental de las 2 líneas del tiempo:**
>
> - **Línea principal (**_main_**)** — la realidad oficial del proyecto. Lo que está desplegado. Lo que el cliente ve. Avanza solo con código validado.
> - **Línea paralela (**_feature/form-validado_**)** — un universo alternativo donde experimentás con el form validado. Hacés cambios, probás, te equivocás, los corregís. **Si algo explota acá, la línea principal NO se entera**. El cliente sigue viendo la versión estable mientras vos trabajás tranquilo.
> - **Merge** — el momento en que las dos líneas se **fusionan**. Lo que probaste en la paralela y funcionó, se vuelve oficial. La paralela "se reabsorbe" en la principal.
>
> *"Por eso los equipos profesionales tienen 10, 50, 200 ramas paralelas activas al mismo tiempo — cada dev en la suya, sin pisarse, sin romper la realidad oficial del proyecto. Solo cuando algo se valida, se mergea."*
>
> **Dato técnico (para que el alumno no se confunda):** una rama en Git **NO es una copia del código**. Es solo un **puntero a un commit**. Crear una rama es instantáneo — Git no duplica archivos, solo crea un nombre nuevo que apunta al commit donde estaban parados. Por eso crear ramas es **gratis** y los equipos las crean para CUALQUIER cosa (feature, fix, experimento de 5 minutos).

> **Aplicación inmediata al lab:**
> *"Hoy van a crear UNA rama paralela: **_feature/form-validado_**. Ahí van a hacer todo el trabajo de M3 — agregar la validación nativa al form de contacto. Si algo sale mal en esa rama, no pasa nada — **_main_** sigue con la estética de M1, intacto. Cuando el form esté listo y funcione, lo mergean a **_main_** (eso es M4)."*

---

#### 2.3 GitFlow básico — las 4 reglas del flujo profesional

**EN PANTALLA: EXCALIDRAW — Panel 2.2 (las 4 reglas de GitFlow básico): caja grande con título "GITFLOW BÁSICO", 4 reglas numeradas en columna vertical: (1) **_main_** siempre tiene código estable y desplegado, (2) Para cada feature creás una rama aparte (**_feature/..._**), (3) Cuando el feature está listo, abrís un **Pull Request** (PR) en GitHub, (4) El PR se mergea a **_main_** después de revisión. Al pie, un loop visual con flecha que indica que el ciclo se repite por cada feature nueva.**

> **Tu explicación teórica precisa:**
> **¿Qué es GitFlow básico?** Convención simplificada del flujo de trabajo profesional con Git. No es una ley física — es una **regla del equipo** que todos cumplen para no pisarse. Las 4 reglas son:
>
> | # | Regla | Por qué |
> |---|---|---|
> | 1 | **_main_** siempre tiene código estable y desplegado | El cliente lo ve. Si está roto, hay un incidente. |
> | 2 | Cada feature se desarrolla en su propia rama (**_feature/&lt;descripción&gt;_**) | Aislamiento — un dev no rompe el trabajo de otro. |
> | 3 | Cuando el feature está listo, se abre un **Pull Request** en GitHub | Pide revisión antes de integrar. Otra persona del equipo mira el código. |
> | 4 | El PR se mergea a **_main_** solo después de revisión | El código que entra a la realidad oficial pasó por al menos 2 pares de ojos. |
>
> *"Esto es el mínimo. Equipos más grandes tienen variantes — GitFlow completo (con ramas develop / release / hotfix), trunk-based development, GitHub Flow — pero TODOS arrancan con las 4 reglas que acabo de mostrar. Aprenderlas hoy les sirve para cualquier equipo que se crucen en su carrera."*
>
> **El ciclo:** una rama nace, vive mientras se desarrolla el feature, muere cuando se mergea. Cada feature nuevo es una rama nueva. **_main_** nunca muere — es el río principal.

> **Tu cierre + puente:**
> *"Esa es la teoría. Ahora vamos al lab — vamos a hacer las dos primeras cosas que pide la Parte 2: ver qué ramas tenemos (que ya sabemos: solo **_main_**), y crear la rama paralela donde haremos el feature."*

---

#### 2.4 **_git branch_** — listar las ramas locales

**EN PANTALLA: Terminal integrada de VS Code.**

> **Code-along del lab — Parte 2.2:**
> 1. Ejecutar:
>    ```bash
>    git branch
>    ```
> 2. Leer el output juntos:
>    ```
>    * main
>    ```
> 3. *"El asterisco delante de **_main_** significa **'estás parado acá'**. Si tuvieran 5 ramas, el asterisco indicaría en cuál están trabajando ahora mismo. Hoy tienen solo una porque nunca crearon otra."*

> **Segundo punto de referencia visual:**
> Eric señala la **barra inferior izquierda de VS Code** donde aparece el nombre de la rama actual con un ícono de bifurcación (🔀). *"Misma información que da **_git branch_**, pero siempre visible — no hace falta tipear el comando cada vez. Dos lugares donde mirar: terminal o barra inferior."*

---

#### 2.5 Code-along — Parte 2.3 del lab (crear y cambiar a la rama feature)

**EN PANTALLA: Terminal integrada.**

> **Tu apertura:**
> *"Vamos a crear la primera rama paralela de su carrera. Una sola línea de comando hace 2 cosas: crear la rama Y cambiarse a ella. Vamos."*

> **Code-along del lab — Parte 2.3:**
> 1. Ejecutar:
>    ```bash
>    git checkout -b feature/form-validado
>    ```
>    *"Lo que acaban de hacer: **_git checkout_** = 'cambiate de rama'; **_-b_** = 'créala si no existe'; **_feature/form-validado_** = el nombre de la rama nueva. Git la creó **a partir del commit donde estaban parados** — o sea, a partir del último commit de **_main_** (el de la estética que hicieron en M1)."*
>
> 2. Verificar que el asterisco se movió:
>    ```bash
>    git branch
>    ```
>    Output:
>    ```
>      main
>    * feature/form-validado
>    ```
>    *"El asterisco se movió. Ahora están parados en la rama paralela. Cualquier commit que hagan a partir de ahora, va a esta rama, NO a **_main_**."*

> **Convención de nombres de ramas (datos del lab):**
> - **_feature/&lt;descripción-corta&gt;_** → nuevas funcionalidades (lo de hoy).
> - **_fix/&lt;descripción&gt;_** → bugfixes.
> - **_chore/&lt;descripción&gt;_** → mantenimiento (actualizar dependencias, renombrar).
> - **_docs/&lt;descripción&gt;_** → cambios en documentación.
>
> *"GitHub agrupa visualmente las ramas que comparten prefijo — todas las **_feature/*_** se ven juntas en el panel de ramas. Por eso conviene seguir la convención: para ustedes mismos, para el equipo, para el día de mañana cuando tengan 50 ramas activas."*

> **⚠️ Advertencia crítica del lab:**
> *"Importante. La estética que hicieron en M1 (variables + sombras + hover) tiene que estar **YA commiteada y pusheada a main** ANTES de haber creado esta rama. Si por alguna razón olvidaron hacer el commit final de M1 antes del **_git checkout -b_** — porque la rama nueva arranca desde donde están parados. Si están parados en código no commiteado, ese código se 'lleva' a la rama nueva y deja main desactualizado."*
>
> *"Si les pasó: la solución es **_git checkout main_** → commit + push → **_git checkout feature/form-validado_** otra vez. Pero hoy todos hicieron el commit en M1, así que estamos bien."*

> **Pregunta de activación:**
> *"Pregunta: si ahora yo hago **_git status_**, modifico un archivo y hago **_git commit_** — ¿a qué línea del tiempo se va ese commit, a **_main_** o a **_feature/form-validado_**?"*
> *(Respuesta esperada: a **_feature/form-validado_**, porque el asterisco está ahí. Eso es lo que vamos a aprovechar en M3 — todo el form validado va a esa línea paralela, sin tocar main.)*

> **Cierre de M2 + receso:**
> *"Listo. Están parados en su primera rama paralela. **_main_** sigue intacto con la estética. Acá, en la rama, vamos a construir el form validado después del receso. Vamos 10 minutos al café."*

---

### RECESO — 10 minutos

---

### MOMENTO 3 — Formulario validado en la rama

**Tiempo:** ~35 min
**Parte del lab:** Parte 3

> **OBJETIVO:** El alumno entiende qué es la **validación nativa HTML5** y dónde se ubica en el panorama de las 3 capas de validación (nativa / JS / servidor), aprende los 6 atributos clave del lab (**_required_**, **_minlength_**, **_type="email"_**, **_type="tel"_** + **_pattern_**, **_&lt;select&gt;_** con **_value=""_**, **_&lt;input type="checkbox" required&gt;_**), reemplaza el form de contacto del **_index.html_** por el form completo del lab, verifica los 3 escenarios de fallo en vivo y commitea el cambio **dentro de la rama feature** (no en main). Al cerrar M3, el form rechaza datos basura **sin una sola línea de JavaScript**.

> **Patrón pedagógico de M3:** primero el concepto general (qué es la validación nativa + las 3 capas), después la vista panorámica del form (tabla de los 6 atributos del lab), después los 2 atributos que requieren explicación técnica más profunda (**_pattern_** y el truco del **_&lt;select&gt;_** con **_value=""_**), después el code-along largo de reemplazar el form, y finalmente la demo en vivo de los 3 escenarios de fallo + commit. La regla del Momento: **cero líneas de JavaScript**. Todo se resuelve con atributos HTML.

---

#### 3.1 ¿Qué es la validación nativa HTML5? — Concepto + las 3 capas

**EN PANTALLA: EXCALIDRAW — Panel 3.1 (las 3 capas de validación + las 4 capas de la nativa): diagrama de 3 cajas verticales — **NAVEGADOR (HTML nativo)** arriba con fondo verde, **NAVEGADOR (JS del cliente)** en el medio con fondo amarillo, **SERVIDOR (backend)** abajo con fondo rojo. Flechas mostrando que el dato pasa por las 3 capas en orden. Al lado de la caja nativa, una sub-lista con las 4 capas internas de la validación HTML: (1) Obligatoriedad → **_required_**, (2) Formato → **_type="email" / "tel" / "url" / "date"_**, (3) Longitud → **_minlength / maxlength_**, (4) Patrón → **_pattern_**.**

> **Tu apertura:**
> *"Estamos parados en la rama feature, aislados de main. Ahora vamos al feature en sí: validación nativa de formularios. La regla del Momento es radical — vamos a hacer que el navegador rechace email malos, teléfonos inválidos y campos vacíos, todo **sin escribir una sola línea de JavaScript**. Solo HTML. Vamos."*

> **Tu explicación teórica precisa:**
> **¿Qué es la validación nativa HTML5?** Conjunto de **atributos y tipos de &lt;input&gt;** que el navegador valida **automáticamente** al hacer submit del formulario. Si algún campo no cumple las reglas declaradas, el navegador **bloquea el envío** y muestra un tooltip de error en el primer campo inválido. Toda la lógica vive en el HTML — el dev no escribe nada en JavaScript para que funcione.
>
> **Las 4 capas internas de la validación nativa:**
>
> | Capa | Atributo / tipo | Qué controla |
> |---|---|---|
> | **1. Obligatoriedad** | **_required_** | El campo no puede estar vacío |
> | **2. Formato del valor** | **_type="email" / "tel" / "number" / "url" / "date"_** | El valor debe tener el formato del tipo declarado |
> | **3. Longitud** | **_minlength / maxlength_** | Mínimo y máximo de caracteres permitidos |
> | **4. Patrón custom** | **_pattern_** (regex) | El valor debe coincidir con una expresión regular |
>
> **La regla crítica que el alumno debe entender:** la validación nativa es la **primera línea de defensa**, **NO reemplaza al servidor**. Cualquier atacante puede saltarla deshabilitando JavaScript en el navegador, o cambiando el HTML con DevTools. La validación nativa es **UX, no seguridad**: ayuda al usuario honesto a no cometer errores de tipeo. La seguridad real vive siempre en el backend.

> **Las 3 capas de validación de un form profesional:**
>
> | Capa | Dónde corre | Qué cubre | Cuándo se ve |
> |---|---|---|---|
> | **Nativa (HTML)** | El navegador | Formato, obligatoriedad, longitud, patrón | ✅ Hoy |
> | **JavaScript del cliente** | El navegador | Reglas de negocio del front (ej: "la fecha de fin debe ser después de la fecha de inicio") | M5 |
> | **Servidor (backend)** | El servidor | Seguridad real (sanitización, anti-inyección, "el email existe en mi DB") | Otro curso |
>
> *"Las 3 capas **se complementan**, no compiten. Quitar la nativa porque 'tengo JS' es desperdiciar UX. Quitar la del servidor porque 'tengo nativa' es un agujero de seguridad. Las profesionales bien hechas tienen las 3. Hoy se llevan la primera."*

> **Tu analogía rápida:**
> *"La balanza de la entrada del parque de diversiones. Antes de subir a la montaña rusa hay un altímetro: si no llegás a la altura mínima, no pasás. No es seguridad antibombas — es filtro rápido y barato para usuarios honestos. Si alguien insiste y se salta la balanza, hay otra persona arriba (en el backend) que también va a controlar. La validación nativa es la balanza de la entrada."*

---

#### 3.2 Los 6 atributos del lab — vista panorámica del form

**EN PANTALLA: EXCALIDRAW — Panel 3.2 (anatomía del form del lab): mockup del form con 6 campos en columna vertical (nombre, email, teléfono, motivo, mensaje, checkbox), cada campo con una flecha lateral apuntando al atributo de validación que aplica + breve descripción. Colores funcionales: verde para los atributos del lado del lab, azul para los tipos de input, rojo para el **_pattern_** y el **_value=""_** (los 2 que requieren explicación técnica adicional).**

> **Tu explicación teórica precisa:**
> El form que vamos a construir en este Momento tiene **6 campos** y usa **6 atributos** distintos de validación nativa. Esta es la vista panorámica:
>
> | # | Campo | Atributo | Qué hace |
> |---|---|---|---|
> | 1 | **_nombre_** | **_required minlength="3"_** | No puede estar vacío + mínimo 3 caracteres |
> | 2 | **_email_** | **_type="email" required_** | Debe tener formato de email + no vacío |
> | 3 | **_telefono_** | **_type="tel" pattern="[0-9]{9}" required_** | Exactamente 9 dígitos numéricos |
> | 4 | **_motivo_** | **_&lt;select&gt;_** con primera opción **_value=""_** + **_required_** | Obliga a elegir una opción real |
> | 5 | **_mensaje_** | **_required minlength="10"_** | No vacío + mínimo 10 caracteres |
> | 6 | **_acepto términos_** | **_&lt;input type="checkbox" required&gt;_** | Obliga a marcar el checkbox |
>
> *"De los 6 atributos, 4 son intuitivos — **_required_**, **_minlength_**, **_type="email"_**, **_checkbox required_**. Los otros 2 requieren explicación: el **_pattern_** del teléfono y el truco del **_&lt;select&gt;_** con **_value=""_**. Esos 2 los vemos por separado en los siguientes sub-puntos."*

> **Bonus mobile (mencionar al pasar):**
> *"Dato extra de los tipos especiales: en celular, **_type="email"_** abre el teclado con la tecla **_@_** visible y **_type="tel"_** abre el teclado numérico. Mismo HTML, mejor UX gratis para mobile. Si fueran a producción, esto les ahorra que los usuarios mobile se quejen de que el teclado no es práctico."*

---

#### 3.3 **_pattern_** — regex en HTML nativo

**EN PANTALLA: EXCALIDRAW — Panel 3.3 (anatomía del **_pattern="[0-9]{9}"_**): bloque grande con el valor descompuesto. Flechas a 2 partes: **_[0-9]_** etiquetado "rango de caracteres permitidos: cualquier dígito del 0 al 9", **_{9}_** etiquetado "repetición exacta: exactamente 9 veces, ni más ni menos". Al pie, comparativa de 4 valores de prueba: `987654321` ✅ (válido), `12345` ❌ (5 dígitos), `9876543210` ❌ (10 dígitos), `abc123456` ❌ (tiene letras).**

> **Tu explicación teórica precisa:**
> **¿Qué es **_pattern_**?** Atributo de **_&lt;input&gt;_** que recibe una **expresión regular** (regex) y obliga al valor a coincidir **exactamente** con ese patrón. Si el valor no matchea, el navegador bloquea el submit.
>
> **Combinación con **_type="tel"_** (la del lab):**
>
> ```html
> <input type="tel" pattern="[0-9]{9}" required>
> ```
>
> - **_type="tel"_** declara que el input es un teléfono (abre teclado numérico en mobile), pero **no valida formato** (los formatos varían por país).
> - **_pattern="[0-9]{9}"_** es lo que pone la regla real de validación.
>
> **Lectura del pattern:**
> - **_[0-9]_** → **rango de caracteres** permitidos: cualquier dígito del 0 al 9. Equivalente a **_\d_** en regex completa.
> - **_{9}_** → **repetición exacta**: exactamente 9 veces, ni más ni menos.
> - Resultado: 9 dígitos numéricos seguidos, sin letras, sin espacios, sin guiones.
>
> **Regla técnica importante:** **_pattern_** se ancla automáticamente al inicio y fin del valor — es como si tuviera **_^_** y **_$_** invisibles. No hace falta escribirlos. El valor entero del input debe matchear, no solo una parte.
>
> **_pattern_** funciona en cualquier input de texto, no solo **_type="tel"_**. Podrías usarlo en **_type="text"_** para validar un DNI peruano, una placa de auto, un código postal — cualquier patrón con regla fija.

> **Tu analogía rápida:**
> *"Piensen en el filtro de aceite del motor del auto. El filtro solo deja pasar partículas de cierto tamaño — más grandes, las retiene. **_pattern_** es ese filtro para el input: solo deja pasar el patrón que ustedes definieron. Cualquier otra cosa, el navegador la retiene."*

> **Dato cultural — etimología:**
> *"Las expresiones regulares (regex) las inventó un matemático llamado Stephen Kleene en los años 50. Llegaron a la programación en los 70 con Unix, y hoy las hablan Python, JavaScript, HTML, todos los editores de texto, los logs de los servidores. Es un lenguaje transversal — el que aprende regex, lo usa toda la carrera."*

---

#### 3.4 El truco del **_&lt;select&gt;_** con **_value=""_** + **_required_**

**EN PANTALLA: EXCALIDRAW — Panel 3.4 (comparativa **_&lt;select&gt;_** con vs sin **_value=""_**): dos columnas. Izquierda "❌ SIN value=`""`": código del select con la primera opción **_&lt;option&gt;Selecciona&lt;/option&gt;_**, debajo una caja con el form submiteado pasando el valor "Selecciona" como motivo (texto basura). Derecha "✅ CON value=`""`": mismo select pero con **_&lt;option value=""&gt;Selecciona&lt;/option&gt;_**, debajo el navegador bloqueando el submit con tooltip "Selecciona un elemento de la lista". Resaltar visualmente en rojo los 2 caracteres **_=""_** en el lado correcto.**

> **Tu explicación teórica precisa:**
> **El problema:** **_required_** en un **_&lt;select&gt;_** chequea si la opción elegida tiene un **_value_** distinto de **_""_** (vacío). Pero por default, un **_&lt;select&gt;_** **siempre tiene una opción "elegida"** — la primera. Entonces si la primera opción dice "Selecciona un motivo" y no le ponen **_value=""_**, el navegador la considera "una opción válida" y el **_required_** nunca falla.
>
> **El truco:** la primera **_&lt;option&gt;_** funciona como **placeholder visual** (texto del tipo "Selecciona un motivo") pero le declarás **_value=""_** (vacío). Esto convierte la primera opción en "no elegido" desde el punto de vista del navegador. Combinado con **_required_** en el select, ahora el submit se bloquea hasta que el usuario elija una opción real.
>
> **Lectura del HTML:**
>
> ```html
> <select required>
>   <option value="">Selecciona un motivo</option>  <!-- placeholder (value vacío) -->
>   <option value="consulta">Consulta</option>      <!-- opción real -->
>   <option value="reclamo">Reclamo</option>        <!-- opción real -->
>   <option value="sugerencia">Sugerencia</option>  <!-- opción real -->
> </select>
> ```
>
> *"Dos caracteres — **_=""_** — son lo que activa toda la validación del select. Sin eso, el form acepta 'Selecciona un motivo' como motivo válido y guarda esa basura en la base de datos. Lo mismo aplica a cualquier dropdown obligatorio: día de nacimiento, país, categoría, lo que sea."*

---

#### 3.5 Code-along — Parte 3.1 del lab (reemplazar el form completo)

**EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR — **_index.html_** del alumno, scrolleado a la **_&lt;section id="contacto"&gt;_**. Live Server a la derecha mostrando el form actual de C01 (con nombre + email + mensaje + botón Enviar).**

> **Tu apertura:**
> *"Code-along más largo del día. Vamos a **reemplazar el form completo** que tienen desde C01 por el del lab — con 6 campos, todos validados. NO refactor aditivo acá; el form viejo era simple y el nuevo tiene 3 campos nuevos que no existían (teléfono, motivo, checkbox). Es más limpio reemplazar todo el bloque que ir parche por parche. Tipo de cambio que en proyectos reales también se hace así — cuando el cambio es estructural, se rehace el bloque."*
>
> *"Vamos uno por uno. Yo les digo qué tipear, qué atributo agregar y por qué. Vamos."*

> **Code-along del lab — Parte 3.1:**
>
> 1. Abrir **_index.html_**. Ubicar la **_&lt;section id="contacto"&gt;_** y el **_&lt;form&gt;_** actual adentro.
> 2. Borrar el **_&lt;form&gt;_** completo (de **_&lt;form&gt;_** hasta **_&lt;/form&gt;_**).
> 3. Reemplazar por el form del lab, campo por campo. Eric va dictando + señalando los atributos:
>
>    **Campo 1 — Nombre (required + minlength):**
>    ```html
>    <label for="nombre">Nombre (mín. 3 caracteres)</label>
>    <input type="text" id="nombre" name="nombre" required minlength="3">
>    ```
>    *"Atributos: **_required_** = no vacío. **_minlength="3"_** = al menos 3 caracteres. Combinados, fuerzan que el alumno escriba algo de mínimo 3 letras."*
>
>    **Campo 2 — Email (type="email" + required):**
>    ```html
>    <label for="email">Correo electrónico</label>
>    <input type="email" id="email" name="email" required>
>    ```
>    *"**_type="email"_** activa la validación de formato — el navegador exige al menos un **_@_** y un dominio. Si el alumno escribe **_abc_**, lo rechaza."*
>
>    **Campo 3 — Teléfono (type="tel" + pattern + required):**
>    ```html
>    <label for="telefono">Teléfono (9 dígitos)</label>
>    <input type="tel" id="telefono" name="telefono" pattern="[0-9]{9}" required>
>    ```
>    *"Acá entra el **_pattern_** que vimos en 3.3. **_[0-9]{9}_** = exactamente 9 dígitos. Cualquier otra cosa, rechazado."*
>
>    **Campo 4 — Motivo (&lt;select&gt; con value="" + required):**
>    ```html
>    <label for="motivo">Motivo del contacto</label>
>    <select id="motivo" name="motivo" required>
>      <option value="">Selecciona un motivo</option>
>      <option value="consulta">Consulta</option>
>      <option value="reclamo">Reclamo</option>
>      <option value="sugerencia">Sugerencia</option>
>    </select>
>    ```
>    *"Atención al **_value=""_** en la primera opción — son los 2 caracteres que activan la validación del select. Si lo olvidan, el form acepta 'Selecciona un motivo' como motivo válido."*
>
>    **Campo 5 — Mensaje (textarea + required + minlength):**
>    ```html
>    <label for="mensaje">Mensaje</label>
>    <textarea id="mensaje" name="mensaje" rows="4" required minlength="10"></textarea>
>    ```
>    *"Mismo patrón que el campo nombre — **_required_** + **_minlength="10"_**. Forzamos un mensaje real, no 'hola'. Y sí: **_minlength_** funciona en **_&lt;textarea&gt;_** igual que en **_&lt;input&gt;_**."*
>
>    **Campo 6 — Checkbox de términos (label envolvente + required):**
>    ```html
>    <label>
>      <input type="checkbox" id="acepto" name="acepto" required>
>      Acepto los términos y condiciones
>    </label>
>    ```
>    *"Dos cosas a notar. Una: el **_&lt;input type="checkbox" required&gt;_** obliga a marcar la casilla. Dos: el **_&lt;input&gt;_** está envuelto **dentro** del **_&lt;label&gt;_** sin **_for_** — esto hace que todo el texto 'Acepto los términos...' sea clickeable. UX gratis sin JS."*
>
>    **Botón submit:**
>    ```html
>    <button type="submit">Enviar</button>
>    ```
>
> 4. Guardar. Live Server recarga.
> 5. Verificar en el navegador: el form muestra los 6 campos en orden, con sus labels, y el botón Enviar al final. Aún no se prueba la validación — eso es el siguiente sub-punto.

---

#### 3.6 Demo en vivo — los 3 escenarios de fallo del lab

**EN PANTALLA: Navegador con el form recién implementado.**

> **Tu apertura:**
> *"Atención. Esto NO es code-along — ustedes miran. Voy a probar el form con datos malos y ver cómo el navegador lo bloquea. Tres escenarios, los mismos que pide el lab para el Checkpoint P3."*

> **Demo guiada (Eric ejecuta, alumno mira):**
>
> 1. **Escenario 1 — Form vacío:**
>    - Sin tocar ningún campo, click directo en "Enviar".
>    - Resultado: el navegador bloquea el submit y muestra un tooltip *"Completa este campo"* sobre el primer campo **_required_** vacío (el nombre).
>    - *"Eso lo hace **_required_**. Sin escribir nada de JS, el navegador se planta."*
>
> 2. **Escenario 2 — Email mal formado:**
>    - Escribir un nombre válido + completar los otros campos válidos + en email escribir **_abc_**.
>    - Click Enviar.
>    - Resultado: tooltip sobre el campo email — *"Incluye '@' en la dirección de correo. La dirección 'abc' no contiene '@'."*
>    - Cambiar el email a **_eric@_** (sin dominio). Click Enviar.
>    - Resultado: tooltip — *"Por favor, especifica una parte después del '@'..."*.
>    - *"Validaciones distintas del mismo **_type="email"_** según el error. El navegador es bastante específico con el feedback."*
>
> 3. **Escenario 3 — Teléfono inválido por **_pattern_**:**
>    - Email válido (**_eric@gmail.com_**) + en teléfono escribir **_12345_** (5 dígitos).
>    - Click Enviar.
>    - Resultado: tooltip sobre teléfono — *"Coincide con el formato solicitado"* o equivalente del navegador.
>    - *"El **_pattern_** lo rechaza porque no son 9 dígitos exactos. Si escribo letras tampoco, si escribo 11 dígitos tampoco."*

> **Submit exitoso (cierre de la demo):**
> - Completar TODOS los campos con datos válidos + marcar el checkbox.
> - Click Enviar.
> - Resultado: el navegador **pasa el submit** — la página intenta navegar (típicamente refresca el form).
> - *"Sin un backend conectado, esto no hace nada útil — solo confirma que la validación **NO bloquea**. En un proyecto real, el form mandaría los datos al servidor. Hoy solo verificamos que el navegador deja pasar el submit cuando los datos cumplen las reglas."*

> **Pregunta de activación:**
> *"Pregunta: ¿cuántas líneas de JavaScript escribimos para implementar TODO lo que acabamos de ver — 3 tipos distintos de validación, mensajes específicos por error, bloqueo del submit?"*
> *(Respuesta esperada: cero. Todo es HTML nativo. Eso es lo que hace que la validación nativa sea el primer reflejo profesional — gratis, robusta, sin dependencias.)*

---

#### 3.7 Code-along — Parte 3.3 del lab (commit dentro de la rama feature)

**EN PANTALLA: Terminal integrada de VS Code.**

> **Tu apertura:**
> *"Última cosa de M3. Acabamos de implementar todo el feature en la rama paralela. Ahora lo commiteamos — pero atención: el commit va a la rama feature, NO a main. Recuerden que el asterisco de **_git branch_** está en **_feature/form-validado_**, y todos los commits van a donde apunta el asterisco."*

> **Code-along del lab — Parte 3.3:**
>
> 1. Verificar el estado:
>    ```bash
>    git status
>    ```
>    *"Tiene que aparecer **_index.html_** modificado. **_styles.css_** NO debería aparecer — esa parte ya está commiteada en main desde M1. Si aparece, revisen que no la hayan tocado por accidente."*
>
> 2. Stage + commit:
>    ```bash
>    git add index.html
>    git commit -m "feat: agrega validacion nativa al formulario de contacto"
>    ```
>    *"Mensaje en imperativo, descriptivo del feature. Recuerden la convención **_feat:_** = nueva funcionalidad."*
>
> 3. Verificar dónde se guardó el commit:
>    ```bash
>    git log --oneline
>    ```
>    Output esperado:
>    ```
>    abc1234 (HEAD -> feature/form-validado) feat: agrega validacion nativa al formulario de contacto
>    def5678 (main) feat: agrega paleta de tokens CSS y estetica de cards
>    ...commits viejos de C01-C03...
>    ```
>    *"Mírense bien esto. El commit nuevo (**_HEAD -> feature/form-validado_**) está en la línea paralela. El commit de M1 (la estética en **_main_**) está en la línea principal. Las dos líneas existen al mismo tiempo, separadas. Eso es lo que la analogía del multiverso describe — dos universos paralelos."*

> **Cierre de M3 + puente a M4:**
> *"El feature está terminado en su rama. Pero ese código vive solo en su PC local — nadie del equipo lo ve, nadie lo puede revisar, no está integrado a main. Si su disco duro explota hoy, perdieron todo. En M4 cerramos el ciclo: subimos la rama al remoto, abrimos un Pull Request, mergeamos a main, y sincronizamos. Vamos."*

---

### MOMENTO 4 — Cerrar el flujo Git

**Tiempo:** ~30 min
**Parte del lab:** Parte 4

> **OBJETIVO:** El alumno cierra otro concepto pendiente desde C01 (qué es **_origin_** — la otra palabra mágica que viene tipeando sin explicación), sube su rama feature al remoto con **_git push -u_**, entiende qué es un **Pull Request** como espacio de revisión profesional, abre el PR del lab en GitHub, **lee el diff**, mergea a **_main_**, sincroniza su **_main_** local con **_git pull_** y opcionalmente borra la rama feature ya mergeada. Al cerrar M4, el alumno completó el ciclo Git profesional de 6 pasos por primera vez en su carrera — los cambios del feature viven oficialmente en **_main_**, las dos líneas del tiempo se fusionaron.

> **Patrón pedagógico de M4:** se aplica el mismo patrón que en M2 — **iluminar un concepto implícito antes de seguir**. M2 reveló qué era **_main_**; M4 abre revelando qué es **_origin_**. El alumno viene tipeando **_git push origin main_** desde C01 sin saber qué es **_origin_**. Recién hoy lo entiende porque va a hacer **_git push -u origin feature/form-validado_** y el contraste con la rama local lo ilumina.

---

#### 4.1 La otra palabra mágica — ¿qué es **_origin_**?

**EN PANTALLA: Terminal integrada con un comando de referencia visible, por ejemplo el **_git push origin main_** del cierre de M1.**

> **Tu apertura — segunda pregunta directa al alumno:**
> *"Antes de pushear. Pregunta para ustedes — y va a sonar familiar a la de M2. Llevan 3 clases tipeando **_git push origin main_** y **_git pull origin main_**. ¿Qué es **_origin_**? ¿Alguien me lo puede explicar?"*

> **Manejo de la pregunta:**
> *(Esperar 20-30 segundos. Las respuestas típicas: "es GitHub", "es el repositorio en la nube", "es la otra rama". Recoger 2-3 en voz alta sin corregir. Después dar la definición técnica.)*

> **Tu explicación teórica precisa:**
> **¿Qué es **_origin_**?** Es el **nombre por convención** del repositorio remoto que se asocia a tu repositorio local. Cuando hicieron **_git clone &lt;url&gt;_** en C01, o cuando vincularon el repo local con **_git remote add origin &lt;url&gt;_**, Git guardó esa URL bajo el nombre **_origin_**. A partir de ese momento, **_origin_** es un **alias** que apunta a la URL de GitHub del repo.
>
> **Datos técnicos clave:**
>
> - **No es Git, no es GitHub.** **_origin_** es solo un **nombre** que ustedes (o el comando **_git clone_**) eligieron para referirse al remoto.
> - **Es convención, no obligación.** Se podría llamar **_arriba_**, **_servidor_**, **_pepito_** — funcionaría igual. Pero por estandar de la industria, el primer remoto siempre se llama **_origin_**.
> - **Puede haber más de uno.** Un repo puede tener varios remotos (ej: **_origin_** apuntando a GitHub + **_backup_** apuntando a GitLab). Hoy solo tienen uno: **_origin_** = GitHub.
>
> **Verificación en vivo:**
> ```bash
> git remote -v
> ```
> Output típico:
> ```
> origin  https://github.com/<usuario>/<repo>.git (fetch)
> origin  https://github.com/<usuario>/<repo>.git (push)
> ```
> *"Eso es **_origin_**: un alias para la URL del repo en GitHub. Cuando tipean **_git push origin main_** están diciendo 'mandá main al repo que está en esa URL'. Sin el alias, tendrían que tipear la URL completa cada vez."*

> **Tu cierre + puente:**
> *"Listo. Segunda palabra mágica desmagificada — **_main_** es la rama por default, **_origin_** es el remoto por default. Ahora sí tienen el vocabulario completo para el primer comando del Momento: **_git push -u origin feature/form-validado_** — 'mandá la rama feature al remoto origin Y vinculá las dos para que en el futuro me alcance con `git push`'. Vamos."*

---

#### 4.2 Code-along — Parte 4.1 del lab (push de la rama feature con `-u`)

**EN PANTALLA: Terminal integrada de VS Code.**

> **Code-along del lab — Parte 4.1:**
> 1. Verificar que están parados en la rama feature:
>    ```bash
>    git branch
>    ```
>    Output esperado: `* feature/form-validado` + `main`.
>
> 2. Pushear la rama al remoto:
>    ```bash
>    git push -u origin feature/form-validado
>    ```
>    *"Tres partes: **_origin_** = el remoto (lo que vimos en 4.1). **_feature/form-validado_** = el nombre de la rama. **_-u_** = `--set-upstream`, 'establecé el vínculo'."*
>
> 3. *"El flag **_-u_** es CRÍTICO la primera vez. Le dice a Git: 'recordá que esta rama local trackea esta rama remota'. La próxima vez que trabajen en esta misma rama y quieran pushear, alcanza con **_git push_** (sin args) — Git ya sabe a dónde."*

> **Output esperado de GitHub en la terminal:**
> ```
> remote: Create a pull request for 'feature/form-validado' on GitHub by visiting:
> remote:      https://github.com/<usuario>/<repo>/pull/new/feature/form-validado
> ```
> *"Mírense esto. GitHub les responde con un **link directo** al PR. Cmd/Ctrl + click sobre el link y se abre la pestaña de **Compare & pull request** sin tener que buscar nada en la web. Es un detalle de UX de GitHub que les ahorra 3 clicks."*

> **Verificación en GitHub (paso intermedio):**
> Abrir el repo en GitHub. Confirmar que en el dropdown de ramas aparece **_feature/form-validado_** (antes solo estaba **_main_**). *"La rama paralela que crearon en sus PCs ya existe también en el servidor. Esa es la diferencia entre 'feature local en mi PC' y 'feature subido al remoto, visible para el equipo'."*

---

#### 4.3 ¿Qué es un Pull Request? — Concepto + analogía

**EN PANTALLA: EXCALIDRAW — Panel 4.1 (anatomía de un Pull Request en GitHub): captura/mockup de la página de un PR con 3 zonas resaltadas con colores funcionales. (1) Zona superior verde — **título + descripción** del PR (qué se cambió y por qué). (2) Zona media azul — **Conversation** (comentarios, aprobaciones, checks de CI). (3) Zona inferior naranja — **Files changed** (el diff completo línea por línea). Etiqueta destacada al pie: "El PR es DONDE el equipo se reúne a revisar antes de mergear".**

> **Tu explicación teórica precisa:**
> **¿Qué es un Pull Request (PR)?** Solicitud formal en GitHub para que los commits de una rama (típicamente **_feature/x_**) se mergeen a otra rama (típicamente **_main_**). Es **mucho más que un botón de merge** — es un **espacio de revisión** donde el equipo puede:
>
> | Capacidad | Para qué sirve |
> |---|---|
> | **Ver el diff completo** | Qué líneas cambiaron en qué archivos — vista lado a lado o unificada |
> | **Comentar líneas específicas** | Cualquier persona del equipo puede dejar un comentario inline en una línea concreta del código |
> | **Pedir cambios** | El revisor puede marcar el PR como "Request changes" — el autor debe corregir antes de mergear |
> | **Aprobar y mergear** | Cuando todo está conforme, el PR se mergea y los commits entran a **_main_** |
>
> **Dato técnico crítico:** "Pull Request" es **terminología de GitHub** (y Bitbucket). Git **nativo** no tiene PRs — los PRs son una **capa de colaboración construida encima de Git**. GitLab los llama "Merge Requests" — es exactamente lo mismo. Lo importante es entender el concepto: una zona de revisión antes de integrar.

> **Tu analogía rápida:**
> *"Piensen en una editorial antes de imprimir un libro. El autor escribe el manuscrito y se lo manda al revisor. El revisor lo lee palabra por palabra y, si encuentra errores o tiene sugerencias, escribe comentarios al margen. El autor responde, ajusta lo que corresponda, y solo cuando los dos están de acuerdo, el libro va a imprenta. El PR es exactamente eso: nadie publica código en **_main_** sin pasar por el revisor."*

> **Dato cultural — etimología:**
> *"El nombre 'Pull Request' viene del verbo **_git pull_**. Cuando abrís un PR, literalmente le estás pidiendo a alguien que 'pulle' tus commits a su rama — 'te pido que traés estos commits y los integres'. GitHub lo introdujo en 2008 para colaboración en open source. Funcionó tan bien que hoy es estándar en toda la industria — desde startups hasta Microsoft, todos usan PRs."*

> **El detalle clave para el alumno (modo solitario hoy):**
> *"En equipo, el PR siempre lo revisa **otra persona** — nunca el autor. Hoy ustedes están trabajando solos, así que van a revisar su propio PR. El ejercicio mental que pide el lab es: **'¿qué le diría yo a alguien si me mandara este código?'**. Léanlo con ojos críticos, como si fuera de otra persona."*

---

#### 4.4 Code-along — Parte 4.2 del lab (abrir el PR en GitHub)

**EN PANTALLA: NAVEGADOR — repo del alumno en GitHub.**

> **Code-along del lab — Parte 4.2:**
> 1. **Opción A (rápida):** clickear el link directo que GitHub mostró en la terminal después del **_git push -u_**.
>    **Opción B (manual):** entrar al repo en GitHub → pestaña **Pull requests** → botón **New pull request**.
>
> 2. Si entraron por la Opción B: GitHub muestra el banner amarillo *"feature/form-validado had recent pushes — Compare & pull request"* → click.
>
> 3. Llenar el **Título** del PR:
>    ```
>    Agrega validación nativa al formulario de contacto
>    ```
>    *"Título corto, descriptivo, en presente. Eviten títulos genéricos como 'cambios' o 'update' — el título es lo primero que el revisor lee."*
>
> 4. Llenar la **Descripción** del PR (Eric muestra el ejemplo proyectado):
>    ```markdown
>    Implementa validación nativa HTML5 en el formulario de contacto del index.html.
>
>    Cambios:
>    - Nombre: required + minlength="3"
>    - Email: type="email" + required
>    - Teléfono (nuevo): type="tel" + pattern="[0-9]{9}" + required
>    - Motivo (nuevo): <select> con value="" + required
>    - Mensaje: required + minlength="10"
>    - Checkbox de términos (nuevo): required
>
>    Sin JavaScript — todo es HTML nativo.
>    ```
>    *"La descripción es la documentación del PR. Si en 6 meses alguien busca 'cuándo se agregó la validación del teléfono', va a llegar a este PR y leer esta descripción. Inviertan tiempo acá — 2 minutos de descripción ahorran 30 minutos de búsqueda futura."*
>
> 5. Click **Create pull request**.
>
> 6. *"Felicitaciones — abrieron su primer Pull Request de su carrera. En un equipo real, en este momento les llegaría un email/Slack al revisor asignado para que entre a revisar. Hoy el revisor son ustedes mismos."*

---

#### 4.5 Leer el diff — el skill profesional de Git

**EN PANTALLA: NAVEGADOR — pestaña **Files changed** del PR recién abierto. Mostrar el diff de **_index.html_** con el form viejo en rojo (eliminado) y el form nuevo en verde (agregado).**

**EN PANTALLA: EXCALIDRAW — Panel 4.2 (anatomía de un diff de GitHub): bloque grande mostrando 6 líneas de código en formato diff. Líneas con **_+_** y fondo verde claro etiquetadas "AGREGADAS". Líneas con **_-_** y fondo rojo claro etiquetadas "ELIMINADAS". Líneas en blanco etiquetadas "CONTEXTO (no cambió)". Anotación lateral: "Click en cualquier línea → comentario inline atado a esa línea específica".**

> **Tu explicación teórica precisa:**
> En la pestaña **Files changed** del PR, GitHub muestra el código que cambió en formato **diff**. Es una vista estándar de la industria — la misma que muestra **_git diff_** en la terminal, pero con UI.
>
> **Las 3 categorías de línea:**
>
> | Color | Símbolo | Significado |
> |---|---|---|
> | **Verde** | **_+_** al inicio | Línea AGREGADA en este PR |
> | **Rojo** | **_-_** al inicio | Línea ELIMINADA en este PR |
> | **Blanco** | (sin símbolo) | Línea de CONTEXTO — no cambió, está para que entiendas qué hay alrededor |
>
> **Capacidades del diff de GitHub (no presentes en `git diff` de terminal):**
> - **Comentario inline:** click en cualquier línea verde o roja → se abre un cuadro de texto. Cualquier cosa que escribas queda **atada a esa línea específica** del archivo. Eso es lo que hace al PR mejor que pasar archivos por Slack o Teams.
> - **Vista unificada o lado a lado:** botón arriba del diff. Lado a lado se ve más natural para revisiones largas.
> - **Marcar archivos como revisados:** checkbox arriba de cada archivo. Útil cuando el PR toca 20 archivos y querés ir tachando los que ya leíste.

> **Demo en vivo — comentar una línea:**
> 1. Eric pasa el mouse por una de las líneas verdes del diff (ej: la del **_&lt;input type="tel" pattern="[0-9]{9}"&gt;_**).
> 2. Aparece un **+** azul al lado del número de línea.
> 3. Click → se abre un cuadro de comentario.
> 4. Eric escribe un comentario de muestra: *"Considerar agregar **_maxlength="9"_** también para evitar que el usuario escriba 15 dígitos en vez de mostrar el error después del submit."*
> 5. Click **Add single comment**.
> 6. *"El comentario queda atado a esa línea para siempre. Si después alguien lee el PR en 6 meses, ve el comentario en su contexto."*

> **Mensaje pedagógico del sub-punto:**
> *"Leer el diff es **EL** skill profesional de Git. En un equipo real, ustedes van a revisar más PRs ajenos que los que abren ustedes mismos. Los primeros 6 meses como junior van a leer diffs todos los días — y la calidad con que los lean es lo que va a separar al junior 'que entiende lo que hace su equipo' del que está perdido. Hoy es la primera práctica. Léanlo con ojos críticos."*

---

#### 4.6 Code-along — Parte 4.3 del lab (mergear el PR)

**EN PANTALLA: NAVEGADOR — pestaña Conversation del PR.**

> **Code-along del lab — Parte 4.3:**
> 1. Volver a la pestaña **Conversation** del PR (la que se abre por default).
> 2. Scrollear hasta el final — ahí está el botón verde **Merge pull request**.
> 3. *"Verde = listo para mergear. Si hubiera conflictos de merge, GitHub mostraría un cartel rojo y no dejaría mergear hasta resolver. Hoy no hay conflictos porque ustedes son los únicos que tocaron **_main_** desde que crearon la rama."*
> 4. Click **Merge pull request** → click **Confirm merge** (GitHub pide confirmación de 2 pasos).
> 5. **Resultado:** la página se actualiza y muestra el banner morado *"Pull request successfully merged and closed"*. GitHub creó automáticamente un **commit de merge** que registra: quién mergeó, cuándo, qué se mergeó.
> 6. Eric señala el commit de merge en la pestaña **Commits**: aparece como *"Merge pull request #1 from &lt;usuario&gt;/feature/form-validado"*.

> **El momento de la analogía — fusión de líneas del tiempo:**
> *"Mírense esto. Lo que acaba de pasar es lo que dije en M2 con la analogía del multiverso: las dos líneas del tiempo se fusionaron. La línea paralela (**_feature/form-validado_**) trajo todos sus commits a la línea principal (**_main_**). En **_main_** ahora existe oficialmente el formulario validado. La línea paralela, técnicamente, ya cumplió su función — su trabajo está absorbido en la principal."*

> **Tipos de merge en GitHub (mencionar al pasar, no profundizar):**
>
> | Tipo | Qué hace |
> |---|---|
> | **Merge commit** (default, hoy) | Crea un commit nuevo que une las dos ramas — el historial muestra la bifurcación y la fusión |
> | **Squash and merge** | Aplasta todos los commits del feature en uno solo en main — historial más limpio |
> | **Rebase and merge** | Reaplica los commits del feature encima de main, sin commit de merge — historial 100% lineal |
>
> *"Las 3 funcionan; cada equipo elige una convención. Hoy usamos el default (Merge commit). En el M2 del Code 201 (cuando vean JavaScript) van a aprender la diferencia y por qué cada equipo elige una."*

> **(Opcional) Borrar la rama remota desde GitHub:**
> Después del merge, GitHub ofrece un botón **Delete branch** debajo del banner de merge. Click → la rama remota **_feature/form-validado_** se borra del servidor.
> *"Esto solo borra la rama **en GitHub**, no en su PC local. La rama local todavía existe — la borramos en el siguiente sub-punto desde la terminal."*

---

#### 4.7 **_git pull_** — sincronizar **_main_** local con el remoto

**EN PANTALLA: EXCALIDRAW — Panel 4.3 (qué pasa después del merge — desincronización local vs remota): dos cajas. **REMOTO (GitHub)** a la izquierda con etiqueta "main contiene: commit estética + commit form validado (merge)". **LOCAL (PC)** a la derecha con etiqueta "main contiene: commit estética solamente (FALTA EL MERGE)". Flecha roja gigante en el medio etiquetada "DESINCRONIZADO". Debajo, segunda escena: comando **_git pull_** ejecutándose → ambas cajas iguales con commit de merge → etiqueta verde "SINCRONIZADO".**

> **Tu apertura — el problema invisible:**
> *"Atención. Aunque acabamos de mergear el PR en GitHub, **su `main` local sigue sin esos cambios**. El merge sucedió en el servidor, no en su PC. Si ahora abren VS Code, hacen **_git checkout main_** y miran el código, NO van a ver el form validado en main local. Esto es lo más confuso de Git al principio — su PC y el servidor son universos separados."*

> **Tu explicación teórica precisa:**
> **¿Qué es **_git pull_**?** Comando que **descarga los commits nuevos** del remoto y los aplica a la rama local actual. Es la operación inversa a **_git push_**: en lugar de "subir mis cambios al remoto", "bajá los cambios del remoto a mi local".
>
> **Equivalencia técnica:** **_git pull_** = **_git fetch_** + **_git merge_** en una sola operación.
> - **_git fetch_** = descarga los commits del remoto pero NO los aplica (los deja "en espera" para revisión).
> - **_git merge_** = aplica los commits descargados a tu rama actual.
>
> Para el alumno de hoy, **_git pull_** alcanza. **_git fetch_** lo van a usar en proyectos más complejos cuando quieran revisar cambios antes de aplicarlos.

> **Tu analogía rápida:**
> *"Imaginen el correo postal. **_git push_** es mandar una carta. **_git pull_** es ir al buzón a ver si llegó algo. Si no van al buzón, las cartas se acumulan en el correo central pero ustedes no las tienen en su casa. **_git pull_** antes de empezar a trabajar cada día es como abrir el buzón al despertar: te ponés al día con lo que pasó mientras no estabas."*

> **Mensaje pedagógico crítico:**
> *"Olvidar este paso es **el error más común del principiante con Git**. Si no hacen **_git pull_** después de mergear el PR, su **_main_** local queda viejo. Cuando arranquen el próximo feature, **_git checkout -b feature/proximo_** va a partir desde un **_main_** desactualizado — y cuando intenten mergear ese feature, va a haber conflictos. La regla simple: cada vez que mergean un PR, hacen **_git pull_** inmediatamente."*

---

#### 4.8 Code-along — Parte 4.4 + 4.5 del lab (sincronizar local + borrar rama)

**EN PANTALLA: Terminal integrada de VS Code.**

> **Code-along del lab — Parte 4.4:**
> 1. Volver a la rama main local:
>    ```bash
>    git checkout main
>    ```
>    *"El asterisco de **_git branch_** se va a mover a **_main_**. Estamos parados en la línea principal otra vez."*
>
> 2. Descargar los commits del remoto:
>    ```bash
>    git pull
>    ```
>    Output esperado:
>    ```
>    Updating abc1234..def5678
>    Fast-forward
>     index.html | 30 ++++++++++++++++++++++++++---
>     1 file changed, 27 insertions(+), 3 deletions(-)
>    ```
>    *"Git dice 'Updating' + el rango de commits que bajó + 'Fast-forward' (significa que el merge fue limpio, sin conflictos). El cambio se aplicó."*
>
> 3. Verificar el log:
>    ```bash
>    git log --oneline
>    ```
>    Output esperado:
>    ```
>    def5678 (HEAD -> main, origin/main) Merge pull request #1 from <usuario>/feature/form-validado
>    abc1234 feat: agrega validacion nativa al formulario de contacto
>    789abcd feat: agrega paleta de tokens CSS y estetica de cards
>    ...commits viejos...
>    ```
>    *"Mírense el primer commit: 'Merge pull request #1'. Ese es el commit de merge que GitHub creó. Ahora existe también en main local. El segundo commit (el del form validado) también está en main — ya no vive solo en la rama feature."*

> **Code-along del lab — Parte 4.5 (opcional, recomendado):**
> 4. Borrar la rama feature local (ya cumplió su función):
>    ```bash
>    git branch -d feature/form-validado
>    ```
>    *"**_-d_** = delete. Git solo permite borrar con **_-d_** minúscula si la rama ya está mergeada — si intentaran borrar una rama no mergeada, Git los protege y exige **_-D_** mayúscula para forzarlo. Hoy estamos mergeados, así que **_-d_** funciona."*
>
> 5. Confirmar:
>    ```bash
>    git branch
>    ```
>    Output:
>    ```
>    * main
>    ```
>    *"Volvimos al estado del comienzo del día — solo **_main_**. Pero ahora **_main_** tiene la estética + el form validado, todo integrado oficialmente. El ciclo de un feature está completo."*

> **Detalle sobre rama remota:**
> *"Si en M4.6 hicieron click en 'Delete branch' en GitHub, la rama remota también está borrada. Si no lo hicieron, sigue existiendo en el servidor. Para borrarla manualmente: **_git push origin --delete feature/form-validado_** (no se ve hoy en detalle, pero queda como dato)."*

---

#### 4.9 GitFlow básico — el ciclo completo de 6 pasos

**EN PANTALLA: EXCALIDRAW — Panel 4.4 (loop visual del GitFlow): diagrama circular de 6 pasos con flechas que vuelven al paso 1 después del 6. Cada paso con su comando exacto debajo y un ícono distintivo. Colores funcionales por paso. Etiqueta destacada al pie: "CHEAT SHEET PARA EL RESTO DEL CURSO".**

> **Tu cierre conceptual:**
> *"Lo que acaban de hacer son **los 6 pasos del GitFlow básico** — el ciclo que cualquier equipo profesional les va a pedir desde el primer día. No es exclusivo del Code 201 — es lo que se hace en cualquier empresa de tech del mundo. Llévenselos como cheat sheet para el resto del curso."*

```
1. git checkout -b feature/x      ← arranca una rama paralela
2. <cambiá código>                ← desarrollás el feature
3. git add + git commit           ← commiteás dentro de la rama
4. git push -u origin feature/x   ← subís la rama al remoto
5. PR en GitHub → review → merge  ← integrás a main (revisión incluida)
6. git checkout main + git pull   ← sincronizás main local
```

> **Variante opcional (paso 7):**
> ```
> 7. git branch -d feature/x        ← limpiás la rama mergeada
> ```

> **Por qué este orden no es negociable:**
>
> - **Si saltás el paso 1** (no crean rama) → todos los commits van a **_main_** directo, rompen el aislamiento.
> - **Si saltás el paso 4** (no pushean) → el feature vive solo en su PC, nadie del equipo lo ve, no pueden abrir PR.
> - **Si saltás el paso 6** (no hacen pull) → su **_main_** local queda viejo, el próximo feature parte de un commit desactualizado y va a tener conflictos.

> **Pregunta de activación:**
> *"Pregunta: ¿qué pasa si saltan el paso 6 y empiezan otro feature haciendo **_git checkout -b feature/proximo_** directamente, sin **_git pull_** primero?"*
> *(Respuesta esperada: la nueva rama va a partir del **_main_** local viejo — sin el feature que acabamos de mergear. Cuando intenten mergear el nuevo feature, GitHub va a marcar conflictos porque **_main_** del remoto ya avanzó pero su local arrancó atrás.)*

> **Cierre de M4 + puente a M5:**
> *"Listo. Cerraron su primer ciclo completo de Git profesional. Si miran su repo en GitHub ahora mismo, ven todo el historial: PR mergeado, rama borrada, **_main_** con la estética + el form. Falta una sola cosa: verificar que GitHub Pages refleja los cambios y entregar. Vamos a M5 para cerrar la clase."*

---

### MOMENTO 5 — Deploy + entrega + rúbrica (5 criterios)

**Tiempo:** ~15 min
**Parte del lab:** Parte 5 + Entrega

> **OBJETIVO:** El alumno verifica que GitHub Pages muestra el sitio con la estética nueva y el form validado, actualiza el **_README.md_** del repo con la tabla de tokens y la lista de validaciones, conoce los **5 criterios de la rúbrica** (incluidos los 2 nuevos: **presentación oral con argumentación técnica** y **HU adicionales**), y cierra la clase con la discusión final.

---

#### 5.1 Code-along P5.1 — Verificar GitHub Pages

**EN PANTALLA: Navegador con la URL pública del sitio en GitHub Pages.**

Code-along guiado:
- Si quedó algo pendiente: `git push origin main`.
- Abrir la URL de GitHub Pages que el alumno configuró en C01 P5.
- Verificar las 3 páginas (`index.html`, `precios.html`, `faq.html`) — todas deben mostrar la nueva estética (sombras, hovers, paleta) + el form validado en `index.html`.

> **Pregunta de calibración:** *"¿Su sitio público se ve igual que el local?"* — esperar 30 segundos, atender los que no.

---

#### 5.2 Code-along P5.2 — Actualizar el **_README.md_** del repo

**EN PANTALLA: VS Code con el **_README.md_** del repo del alumno.**

Code-along guiado: agregar al README:
- URL del despliegue en GitHub Pages.
- **Tabla de tokens CSS** definidos (nombre + valor + dónde se usa).
- **Lista de validaciones aplicadas** al formulario (campo + atributo + descripción del error nativo).

Eric muestra el formato esperado proyectando un ejemplo bien hecho.

---

#### 5.3 Revisión de la rúbrica — 5 criterios × 20 pts

**EN PANTALLA: PRESENTACIÓN — Tabla de la rúbrica con los 5 criterios y los 4 niveles (Excelente 20 / Bueno 15 / Satisfactorio 10 / Bajo 5). Resaltar visualmente los 2 criterios nuevos (C4 + C5).**

Recorrer los 5 criterios:
1. **CSS Variables y estética** (20 pts) — ≥10 tokens, ≥6 reglas refactorizadas, estética nueva coherente.
2. **Formulario validado** (20 pts) — los 3 escenarios de fallo bloquean el submit + checkbox/select obligatorios.
3. **Git workflow** (20 pts) — rama feature + commits atómicos + push + PR mergeado + `git pull` post-merge.
4. **Presentación + argumentación técnica** (20 pts) — ⭐ NUEVO — demo ≤3 min del sitio + explicar ≥2 decisiones técnicas + justificar uso de IA si aplica.
5. **HU adicionales + deploy** (20 pts) — ⭐ NUEVO — ≥2 HUs más allá del lab base + GitHub Pages funcional + README documentado.

**Escala de notas:** A (90-100) / B (80-89) / C (70-79) / F (<70).

Mensajes pedagógicos clave:
- *"No alcanza con que el código corra. Los criterios 4 y 5 son nuevos: además de programar, tienen que poder **explicar** lo que hicieron y **estirar** el producto con HUs propias."*
- *"Si pushean directo a main por costumbre, perdieron el criterio 3 aunque el sitio funcione."*
- *"Sobre el uso de IA: pueden usarla, pero tienen que justificarlo — qué le pidieron, qué cambió, qué validaron ustedes. El criterio 4 evalúa ESO, no si usaron IA o no."*

Entregables a Blackboard: URL del repo, URL de GitHub Pages, screenshot del PR mergeado. Entregables en el repo: README actualizado.

---

#### 5.4 Explicar los 2 criterios nuevos en detalle — Presentación + HUs

**EN PANTALLA: PRESENTACIÓN — Dos diapositivas separadas, una por criterio nuevo.**

**Sobre la presentación (Criterio 4):**
- Demo de **≤3 minutos** del sitio en acción (Eric aclara: NO se hace en clase hoy — el alumno la graba o presenta en la sesión de entrega).
- Debe **explicar ≥2 decisiones técnicas** elegidas por el alumno. Ejemplos:
  - *"Elegí estos 3 colores en mi paleta porque mi producto es una app de salud — verde para confianza, gris claro para limpieza, naranja como accent para destacar el botón principal."*
  - *"Validé el teléfono con **_pattern="[0-9]{9}"_** porque mi producto es solo para Perú, donde todos los móviles tienen 9 dígitos."*
- Si usó IA: **justificar qué le pidió, qué validó, qué cambió manualmente**. El criterio NO penaliza usar IA — penaliza no entender lo que la IA generó.

**Sobre las HU adicionales (Criterio 5):**
- Las HU del lab base son las que se hicieron hoy (refactor + form + git flow). Para el criterio 5, el alumno debe agregar **≥2 historias de usuario adicionales** que estiren el producto.
- Ejemplos de HUs adicionales válidas:
  - *"Como visitante, quiero ver testimonios de clientes en el landing para confiar en el producto antes de contratarlo."* → agregar sección `.testimonios` con cards.
  - *"Como visitante, quiero ver un chat de WhatsApp flotante para contactar rápido."* → agregar botón flotante con `position: fixed`.
  - *"Como visitante, quiero un modo oscuro."* → agregar toggle + duplicar paleta con `[data-theme="dark"]`.
- Cada HU adicional debe tener **criterio de aceptación cumplido** (no basta con "lo intenté").

> **Pregunta de activación:** *"¿Qué 2 HUs adicionales se les ocurren para SU producto específicamente? Pensad qué le falta para sentirse 'profesional'."* (15 segundos de pensamiento, recoger 2-3 ejemplos en voz alta).

---

#### 5.5 Cierre + discusión final + puente al M2

**EN PANTALLA: PRESENTACIÓN — 3 preguntas de discusión final.**

Las 3 preguntas del README de la clase:
1. *"¿Cuándo las Variables CSS reemplazan a un framework completo? ¿Cuándo no?"*
2. *"¿Qué tipo de validación necesita JS? ¿Cuáles bastan con HTML nativo?"*
3. *"¿Qué les parece el flujo branch + PR + merge comparado con pushear directo a main?"*

Cierre del módulo M1: *"Con esto cierran el M1. Llegaron sabiendo nada de web; hoy entregan un landing multi-página, responsive, con identidad visual, con form validado, deployado en GitHub Pages, y siguiendo el flujo Git profesional. Y van a presentar oralmente lo que hicieron — eso es lo que separa al programador del que ENTIENDE lo que programa. En el M2 arrancamos con JavaScript fundamentals — y van a usar TODO lo de hoy. Bien hecho."*

---

## Mapeo Momentos ↔ Lab ↔ Conceptos de Capa 0

| Momento | Parte del lab | Conceptos de Capa 0 que toca |
|---|---|---|
| M1 | Parte 1 (1.1 + 1.2 + 1.3 + 1.4) | CSS Custom Property, **_:root_**, **_var(--token)_**, sistema de tokens (Design tokens), **_box-shadow_**, **_transition_**, microinteracción **_:hover_** + **_translateY_**, refactor aditivo |
| M2 | Parte 2 | Rama (Branch), **_git branch_**, **_git checkout -b_**, GitFlow básico |
| M3 | Parte 3 | Validación nativa HTML5, **_required_**, **_minlength_**, **_type="email"_**, **_type="tel"_** + **_pattern_**, **_&lt;select&gt;_** con **_value=""_**, **_&lt;input type="checkbox" required&gt;_**, triple validación |
| M4 | Parte 4 | **_git push -u_**, Pull Request, leer el diff, merge, **_git pull_**, **_git branch -d_**, GitFlow básico (los 6 pasos del ciclo) |
| M5 | Parte 5 + Entrega | Rúbrica del Lab 04 (5 criterios × 20 pts) — incluye los 2 criterios nuevos: Presentación + argumentación técnica, y HU adicionales + deploy |

**Validación de paridad Momento ↔ Parte del lab:**
- ✅ Cada Momento de code-along (M1, M2, M3, M4, M5) cita una Parte específica del lab cuyos sub-pasos Eric puede leer verbatim.
- ✅ Cada concepto de Capa 0 tiene su aplicación al proyecto víctima en alguna Parte del lab.
- ✅ El **método aditivo** (clave de M1) se respeta en cada sub-punto de code-along: las reglas no se reescriben.
- ✅ El **commit incorrecto a main** al final de M1 es el gancho intencional que abre M2 — sin ese commit, el problema de las ramas se vuelve abstracto.
- ✅ Los 6 pasos del GitFlow básico aparecen distribuidos exactamente en orden: M1 (paso "commit"), M2 (paso 1: checkout -b), M3 (paso 2-3: cambios + commit), M4 (pasos 4-6: push + PR + pull), opcional 7 (branch -d).
- ✅ La rúbrica se introduce al cierre (M5) — el alumno ya hizo el lab y entiende qué se evalúa retroactivamente, lo cual es pedagógicamente correcto (no se enseña antes para evitar que el alumno optimice por puntos en vez de aprender).
- ✅ Los **2 criterios nuevos de la rúbrica** (Presentación + argumentación + HU adicionales) se introducen explícitamente en M5.3 y M5.4 — el alumno los conoce ANTES de salir de la clase, para que sepa que el lab no termina con el merge del PR sino con la presentación oral y las HUs adicionales que va a desarrollar por su cuenta antes de entregar.
