# CAPA 0 — CLASE 04: CSS Variables + Forms Validados + Git Workflow

> **Fuentes:** **_code201/class-04/README.md_** · **_code201/class-04/lab/README.md_** *(esta clase no tiene **_slides/_** — quedó eliminado; los inputs canónicos son solo README + lab)*
> **Módulo:** M1 — Clase 4 de 4 (**Lab CALIFICADO** — única clase evaluada del M1)
> **Proyecto víctima:** Mismo landing del producto que arrastran desde C01. Hoy se le da **identidad visual** (estética) y se profesionaliza el flujo Git. No se crean páginas nuevas — se trabaja sobre **_index.html_**, **_precios.html_** y **_faq.html_** existentes.
> **Continuidad con C01-C03:** se hereda el HTML semántico (C01), Flex (C02), Grid (C03), normalización CSS, **_box-sizing: border-box_** y breakpoints mobile-first 640/1024. Hoy se refactoriza el CSS hardcoded a variables y se agrega validación al **_&lt;section id="contacto"&gt;_**.
> **Método de refactor (inamovible — viene del lab):** el alumno **NO reescribe las reglas CSS existentes**. En cada regla de C01-C03 solo **agrega o reemplaza** propiedades específicas con **_var(--token)_**. El resto de la regla (padding, font, margin, etc.) **se queda como estaba**. Este patrón aditivo aplica a **_body_**, **_nav a_**, **_footer_**, **_#contacto input_**, **_#contacto button_**, **_.card_**, **_.plan_** y **_.logo-cliente_** — y debe reflejarse así en el code-along (Capa 2+3). Las únicas reglas que se agregan completas son **_nav a:hover_**, **_.card:hover_** / **_.plan:hover_** y **_h1_**.

---

## BLOQUE 1 — CSS VARIABLES (Custom Properties)

*(El primer tema del día: pasar de valores CSS hardcoded repetidos por todo el archivo a un sistema de tokens centralizados en **_:root_**. Es la base para tener identidad visual sin librerías.)*

---

### CONCEPTO: CSS Custom Property (Variable CSS)

Mecanismo nativo de CSS para guardar un valor con un nombre y reutilizarlo en múltiples reglas. Una vez declarada, la variable se puede usar en cualquier propiedad CSS. Si cambia el valor de la variable, todos los lugares donde se usa actualizan automáticamente.

**Sintaxis general — declaración:**
```css
selector {
  --nombre-token: <valor>;
}
```

**Sintaxis general — uso:**
```css
otro-selector {
  propiedad: var(--nombre-token);
}
```

**Fórmula del lab:**
```css
:root {
  --color-accent: #0066cc;
}

nav a:hover {
  color: var(--color-accent);
}
```

**Dependencia técnica:** las variables CSS son **case-sensitive** (`--Color-Accent` y `--color-accent` son distintas) y **deben empezar con doble guion** (`--`). No son variables JavaScript — el navegador las evalúa al renderizar.

**Comportamiento default si no existe la variable:** si el navegador encuentra **_var(--token-inexistente)_** y la variable no está declarada en ningún ancestro, la propiedad **se ignora silenciosamente** (cae al valor por defecto que el navegador tendría para esa propiedad). Por eso `var()` acepta un segundo argumento de fallback: **_var(--color, #000)_**.

### ANALOGÍA: El número de teléfono en la agenda del celular

Antes existían las agendas de papel: si tu amigo Juan cambiaba de número, tenías que ir página por página tachando el viejo y escribiendo el nuevo en cada lugar donde aparecía. La agenda del celular cambió eso — escribís "Juan" en cada lado y el celular sabe qué número marcar. Si Juan cambia el número, lo actualizás UNA vez en su contacto y todos los lugares que dicen "Juan" siguen funcionando. Las variables CSS son lo mismo: en vez de pegar **_#0066cc_** en 12 reglas, declarás **_--color-accent_** una vez y usás **_var(--color-accent)_** en las 12. Cuando el cliente diga "cambiá el azul a verde", tocás 1 línea, no 12.

### ETIMOLOGÍA / HISTORIA

Las CSS Custom Properties se estandarizaron en 2016 (CSS Custom Properties for Cascading Variables Module Level 1, W3C). Antes de eso, la única forma de tener "variables" era usar pre-procesadores como Sass o Less, que compilaban a CSS estático. Las custom properties son **dinámicas** (se evalúan en el navegador, no se compilan) — por eso JavaScript las puede leer y modificar en tiempo real con **_element.style.setProperty()_**. Hoy las soportan todos los navegadores modernos (Chrome 49+, Firefox 31+, Safari 9.1+).

### ESTRATEGIA VISUAL: DevTools — cambio en vivo de **_--color-accent_**

Abrir el sitio en el navegador, abrir DevTools (F12) → pestaña Elements → seleccionar **_:root_** o **_&lt;html&gt;_** → en el panel Styles editar el valor de **_--color-accent_** de **_#0066cc_** a **_#2f9e44_** (verde) o **_#e03131_** (rojo). El cambio aparece **instantáneo** en TODOS los hovers del nav, en TODOS los lugares donde se usa el token. Cero recargas. Eso es lo que ningún hardcoded permite.

---

### CONCEPTO: **_:root_** (selector raíz)

Pseudo-clase que apunta al **elemento raíz del documento** — en HTML siempre es **_&lt;html&gt;_**. Equivale a usar **_html_** como selector, pero con **mayor especificidad** (las variables declaradas en **_:root_** ganan sobre las declaradas en **_html_** si hay colisión). Es el lugar estándar para declarar variables CSS globales que deben estar disponibles en TODO el documento.

**Sintaxis general:**
```css
:root {
  /* Variables globales que cualquier regla del CSS puede usar */
  --token-1: <valor>;
  --token-2: <valor>;
}
```

**Dependencia técnica:** las variables CSS **se heredan** por la cascada del DOM (igual que **_color_** o **_font-family_**). Una variable declarada en **_:root_** está disponible en todos los descendientes — o sea, en TODO el documento. Si en lugar de **_:root_** se declara en **_.contenedor_**, la variable solo existe dentro de ese contenedor y sus hijos.

**Por qué _:root_ y no _body_:** **_body_** también es ancestro de todo el contenido visible, pero **_:root_** apunta a **_&lt;html&gt;_** que está un nivel arriba — incluye también pseudo-elementos globales y tiene la especificidad correcta. Es la **convención universal** en CSS moderno: cualquier librería, design system o framework declara sus tokens en **_:root_**.

### ANALOGÍA: El tablón de anuncios de la portería del edificio

**_:root_** es como el tablón de anuncios que está en la entrada del edificio, visible desde todos los pisos. Si pegás ahí "el ascensor está en reparación", todos los departamentos del edificio se enteran. Si lo pegás en la puerta de tu departamento, solo lo ven los que entran a tu departamento. Para variables que TODA la página debe poder usar, **_:root_** es la portería.

### ESTRATEGIA VISUAL: VS Code — orden del archivo CSS

Mostrar el **_styles.css_** del alumno y señalar el orden canónico:
1. Reset universal (**_* { margin: 0; padding: 0; box-sizing: border-box; }_**)
2. **_:root { ... }_** con los tokens (← lo que se agrega hoy)
3. Reglas globales (**_body_**, **_h1_**, **_a_**, etc.)
4. Reglas por sección (**_.card_**, **_.plan_**, **_#contacto_**, etc.)
5. Media queries

Las variables se declaran ANTES de ser usadas — pero el orden estricto importa poco porque CSS evalúa el archivo entero antes de aplicar. La convención es ponerlas arriba para que el dev las encuentre rápido.

---

### CONCEPTO: **_var(--token)_** — el uso de la variable

Función CSS que reemplaza, en tiempo de renderizado, el nombre del token por el valor declarado. Se puede usar en **cualquier propiedad CSS** que acepte ese tipo de valor (color, longitud, sombra, fuente, etc.).

**Sintaxis general:**
```css
propiedad: var(--token);

/* Con fallback */
propiedad: var(--token, <valor-default>);
```

**Fórmula del lab:**
```css
body {
  color: var(--color-text);
  background: var(--color-bg);
}

.card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
}
```

**Dependencia técnica:** **_var()_** se evalúa en cascada — busca el token desde el elemento actual hacia arriba en el árbol del DOM. Si el token está declarado en **_:root_**, todos los elementos lo encuentran. Si está declarado en **_.contenedor_**, solo los hijos de **_.contenedor_** lo encuentran.

### ESTRATEGIA VISUAL: Refactor aditivo en vivo

Tomar una regla del CSS actual del alumno con valores hardcoded — por ejemplo **_.card_** de C03:
```css
.card {
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}
```
Mostrar el refactor **aditivo** (lo que el lab pide): NO se reescribe la regla entera. Las propiedades que no usan tokens (**_padding_**) **se quedan igual**. Solo se cambian las que sí:
```css
.card {
  padding: 16px;                                  /* sin tocar */
  border: 1px solid var(--color-border);          /* refactorizado */
  border-radius: var(--radius);                   /* refactorizado */
}
```
Mostrar que el sitio se ve **idéntico** — el refactor no cambia el resultado visual, solo la fuente de los valores que SÍ se tokenizaron. Cambiar después un token en **_:root_** y mostrar cómo TODAS las cards se actualizan. **Mensaje táctico para el alumno:** los comentarios **_/* ...tus propiedades anteriores... */_** del lab indican exactamente esto — que dejes el resto de la regla intacto.

---

### CONCEPTO: Sistema de tokens (Design tokens)

Convención del mundo profesional para organizar las variables CSS por **categoría semántica**, no por valor literal. En vez de **_--azul: #0066cc_**, se usa **_--color-accent: #0066cc_** — el nombre dice el **propósito** del color, no su apariencia. Permite cambiar el valor sin romper el nombre.

**Categorías canónicas (las del lab):**

| Categoría | Tokens típicos |
|---|---|
| Colores | **_--color-primary_**, **_--color-accent_**, **_--color-text_**, **_--color-bg_**, **_--color-bg-soft_**, **_--color-border_** |
| Tipografía | **_--font-text_**, **_--font-size_**, **_--font-size-title_** |
| Espacios | **_--space-sm_**, **_--space-md_**, **_--space-lg_** |
| Estética | **_--radius_**, **_--shadow-sm_**, **_--shadow-md_** |

**Regla de nombrado:** semántico antes que descriptivo. **_--color-accent_** > **_--azul_** > **_--c2_**. Si el día de mañana el accent pasa a ser verde, el nombre **_--color-accent_** sigue teniendo sentido. **_--azul: #0a0_** no.

### ANALOGÍA: El menú del restaurante

Un menú no dice "huevo + harina + leche + sal" en cada plato — dice "panqueques", "torta de chocolate", "empanada criolla". Esos son los tokens semánticos: agrupan los ingredientes bajo un nombre que dice **qué propósito cumple**, no qué contiene. Si el chef cambia la receta del panqueque, el menú sigue diciendo "panqueque" — el cliente no nota el cambio. Lo mismo con **_--color-primary_**: si el branding cambia el primary de negro a azul oscuro, los archivos CSS no se reescriben — solo el valor del token.

### ESTRATEGIA VISUAL: Tabla proyectada

Proyectar la tabla de las 4 categorías con los tokens del lab. Recorrer cada uno explicando qué propósito cumple. Comparar contra un código sin tokens (con valores hardcoded repetidos) y contar visualmente cuántos lugares habría que tocar para cambiar un color.

---

## BLOQUE 2 — ESTÉTICA NUEVA: SHADOWS Y MICROINTERACCIONES

*(Las variables son la infraestructura. Hoy también se agrega estética que NO existía en C01-C03: profundidad con sombras y feedback visual al pasar el mouse. Esto convierte el sitio plano del C03 en algo que se siente moderno.)*

---

### CONCEPTO: **_box-shadow_** (sombra de caja)

Propiedad CSS que dibuja una sombra alrededor de un elemento, simulando profundidad. La sombra se controla con 4 valores: desplazamiento horizontal, desplazamiento vertical, blur (difuminado) y color (con transparencia).

**Sintaxis general:**
```css
box-shadow: <offset-x> <offset-y> <blur> <color>;
```

**Fórmula del lab:**
```css
:root {
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.12);
}
```

**Lectura del valor:**
- **_0_** → no se desplaza horizontalmente (sombra centrada en X).
- **_1px_** o **_4px_** → la sombra cae 1 o 4 pixeles hacia abajo (simulando luz desde arriba).
- **_3px_** o **_12px_** → cantidad de difuminado de los bordes de la sombra.
- **_rgba(0,0,0,0.08)_** → negro con 8% de opacidad. Sombras sutiles usan opacidades bajas; sombras agresivas, altas.

**Dependencia técnica:** **_box-shadow_** no afecta el layout (no empuja a los elementos vecinos), solo pinta encima/debajo. Por eso se puede animar sin reflow del layout — solo repintado.

### ANALOGÍA: La sombra del vaso sobre la mesa

Cuando ponés un vaso sobre la mesa con luz cenital, la sombra cae justo debajo (vertical) y se difumina hacia afuera. Si levantás el vaso un poco, la sombra crece y se difumina más. Eso es exactamente lo que hace **_box-shadow_**: **_--shadow-sm_** es el vaso apoyado en la mesa; **_--shadow-md_** es el vaso ligeramente levantado. Por eso al hacer hover se cambia de sm a md — el alumno "levanta" la card sutilmente.

### ESTRATEGIA VISUAL: Comparativa antes/después

Mostrar el sitio del alumno SIN sombras (estado actual desde C03) — todo es plano, las cards son rectángulos sin volumen. Aplicar **_--shadow-sm_** a una sola card y mostrar el cambio. Después aplicarlo a todas. La diferencia se siente: el sitio pasa de "plano" a "tarjetas con peso".

---

### CONCEPTO: **_transition_** (transición animada)

Propiedad CSS que **suaviza el cambio** de una propiedad de valor A a valor B. Sin transition, el cambio es instantáneo (1 frame); con transition, el cambio se reparte sobre un período de tiempo y queda visualmente fluido.

**Sintaxis general:**
```css
transition: <propiedad> <duración> <timing-function>;
```

**Fórmula del lab:**
```css
.card {
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.2s, transform 0.2s;
}

.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}
```

**Lectura:** *"el **_box-shadow_** y el **_transform_** de esta card, si cambian, animalo en 200 milisegundos"*. Cuando el alumno pasa el mouse, **_:hover_** dispara los nuevos valores y la transition los anima.

**Dependencia técnica:** **_transition_** vive en el **estado base** del elemento, no en el **_:hover_**. Si se pone en el hover, la animación solo se aplica al entrar — al salir vuelve instantáneo. Poniéndolo en el base, animan ambas direcciones (entrar y salir).

### ANALOGÍA: La puerta del horno con amortiguador

Una puerta de horno barato cae sola con un golpe seco (instantáneo). Una puerta con amortiguador hidráulico cae **suavemente** en 1 segundo — el cambio de posición es el mismo, pero la **percepción de calidad** sube radicalmente. **_transition_** es el amortiguador hidráulico del CSS: el cambio de A a B existía igual, pero hacerlo en 200ms en vez de 0ms es lo que separa una página barata de una página "que se siente bien".

### ESTRATEGIA VISUAL: Demo con timing extremo

Mostrar la card con **_transition: box-shadow 0.2s, transform 0.2s_** (lo normal). Después cambiar en vivo a **_transition: box-shadow 2s, transform 2s_** y mostrar la animación exagerada — el alumno entiende qué controla la duración. Volver a 0.2s y notar que es el sweet spot (lo suficiente para verse fluido, no tanto como para sentirse lento).

---

### CONCEPTO: Microinteracción (**_:hover_** + **_transform: translateY_**)

Patrón estándar de UI moderna: cuando el usuario pasa el mouse sobre un elemento interactivo, ese elemento da **feedback visual sutil** que confirma "esto se puede tocar / es clickeable". El patrón más común para cards es subirlas unos pixeles + intensificar la sombra (efecto de "flotación").

**Sintaxis general:**
```css
.elemento {
  transition: transform 0.2s, box-shadow 0.2s;
}

.elemento:hover {
  transform: translateY(<n>px);  /* negativo = sube */
  box-shadow: <sombra-más-grande>;
}
```

**Fórmula del lab:**
```css
.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}
```

**Lectura:** *"al hacer hover sobre **_.card_**, levantala 4 pixeles y poneles una sombra más marcada"*. Combinado con la **_transition_** del estado base, el efecto es suave.

**Dependencia técnica:** **_translateY(-4px)_** mueve el elemento sin recalcular el layout — los elementos vecinos no se enteran del cambio. Esto es crítico: si en lugar de **_transform_** se usara **_margin-top: -4px_**, los hermanos se moverían también (efecto rompe-layout).

### ESTRATEGIA VISUAL: Sitios de referencia

Abrir un sitio real con microinteracciones (Stripe, Linear, Vercel, Notion) y pasar el mouse por las cards — el alumno reconoce el patrón inmediatamente porque lo ha visto cientos de veces sin saber qué era. Después aplicarlo a SU sitio. La percepción de calidad sube un escalón.

---

## BLOQUE 3 — VALIDACIÓN NATIVA DE FORMULARIOS

*(El segundo gran tema del día. Los formularios del alumno hasta ahora aceptaban cualquier basura. Hoy se aprende a hacer que el navegador **rechace** datos inválidos antes de que el form se envíe — sin una sola línea de JavaScript.)*

---

### CONCEPTO: Validación nativa HTML5

Conjunto de atributos y tipos de **_&lt;input&gt;_** que el navegador valida **automáticamente** al hacer submit. Si algún campo no cumple las reglas declaradas, el navegador **bloquea el envío** y muestra un tooltip de error en el primer campo inválido. Toda esta lógica vive en el HTML — el dev no escribe nada en JavaScript para que funcione.

**Las 4 capas de validación:**
1. **Obligatoriedad** → **_required_**
2. **Formato del valor** → **_type="email"_**, **_type="tel"_**, **_type="number"_**, **_type="url"_**, **_type="date"_**
3. **Longitud** → **_minlength_**, **_maxlength_**
4. **Patrón custom** → **_pattern_** (regex)

**Dependencia técnica:** la validación nativa es **la primera línea de defensa**. NO reemplaza la validación de servidor (cualquier atacante puede saltarla deshabilitando JavaScript o cambiando el HTML con DevTools). Es **UX**, no seguridad: ayuda al usuario honesto a no cometer errores de tipeo. La validación de seguridad real vive siempre en el backend.

### ANALOGÍA: La balanza de la entrada del parque de diversiones

Antes de subirte a la montaña rusa, hay una balanza/altímetro a la entrada que **rechaza automáticamente** a los chicos bajo cierta altura. No es seguridad antibombas — es UX: filtra a los que no califican antes de que hagan toda la cola. Si alguien insiste en saltar la balanza, hay otra persona arriba (en el backend) que también va a controlar. La validación nativa es esa primera balanza: filtra rápido y barato.

### ESTRATEGIA VISUAL: Demo de los 3 escenarios de fallo

Mostrar el form completo (el del lab) y probar EN VIVO:
1. Click en "Enviar" con todo vacío → tooltip *"Completa este campo"* en el primer required.
2. Escribir **_abc_** en email + completar lo demás + Enviar → tooltip *"Incluye '@' en la dirección de correo. La dirección 'abc' no contiene '@'."*
3. Escribir **_12345_** en teléfono (menos de 9 dígitos) + Enviar → tooltip *"Coincide con el formato solicitado."* (mensaje del **_pattern_**).

El alumno ve que **el navegador hace todo solo**.

---

### CONCEPTO: **_required_**

Atributo booleano (existe o no existe — no lleva valor) que marca un campo como obligatorio. Si el campo está vacío al hacer submit, el navegador lo bloquea.

**Sintaxis general:**
```html
<input type="<tipo>" required>
<textarea required></textarea>
<select required> ... </select>
```

**Fórmula del lab:**
```html
<input type="text" id="nombre" name="nombre" required minlength="3">
```

**Dependencia técnica:** **_required_** se aplica a **_&lt;input&gt;_**, **_&lt;textarea&gt;_** y **_&lt;select&gt;_**. Para checkboxes/radios, **_required_** obliga a marcarlos. Para selects, **_required_** obliga a elegir una opción cuyo **_value_** no sea **_""_** (vacío) — por eso la primera **_&lt;option&gt;_** suele tener **_value=""_** (es el placeholder visual).

### ESTRATEGIA VISUAL: Inspector en DevTools

Inspeccionar un input con **_required_** en DevTools y mostrar la pseudo-clase **_:invalid_** que el navegador le aplica automáticamente cuando no cumple. CSS lo puede targetear con **_input:invalid { border-color: red; }_** — pero hoy no se enseña, solo se muestra que existe.

---

### CONCEPTO: **_minlength_** y **_maxlength_**

Atributos que controlan la **longitud del texto** que el usuario puede escribir. **_minlength_** valida en el submit (si el valor tiene menos caracteres, el navegador bloquea). **_maxlength_** **impide tipear** más caracteres en vivo (el input deja de aceptar input cuando se llega al máximo).

**Sintaxis general:**
```html
<input type="text" minlength="<n>" maxlength="<m>">
<textarea minlength="<n>"></textarea>
```

**Fórmula del lab:**
```html
<input type="text" id="nombre" name="nombre" required minlength="3">
<textarea id="mensaje" name="mensaje" rows="4" required minlength="10"></textarea>
```

**Dependencia técnica:** **_minlength_** sin **_required_** es ambiguo — si el campo está vacío, **_minlength_** lo deja pasar (porque "vacío" no es "demasiado corto"). Para forzar un mínimo real se combinan: **_required minlength="3"_**.

---

### CONCEPTO: **_type="email"_** — validación de formato de correo

Tipo de input que activa validación automática de formato de email. El navegador acepta solo valores que tienen al menos **_carácter@carácter.carácter_**. Es una validación **laxa** (acepta **_a@b.c_**) — pero filtra el 99% de los errores de tipeo (falta de @, falta de dominio).

**Sintaxis general:**
```html
<input type="email" required>
```

**Dependencia técnica:** **_type="email"_** no valida si el dominio **existe** ni si la cuenta es real. Para eso necesitarías un servidor que mande un email de verificación. La validación nativa solo chequea el **formato**.

**Bonus de mobile:** en celular, **_type="email"_** abre el teclado con la tecla **_@_** visible. Mismo HTML, mejor UX gratis.

### ESTRATEGIA VISUAL: Probar en celular o emulador

Si hay tiempo, abrir el form en el modo "Mobile" de DevTools (Toggle device toolbar) y mostrar el teclado emulado — **_type="text"_** muestra teclado normal; **_type="email"_** muestra teclado con **_@_** y **_.com_**. Ese detalle es lo que diferencia un form profesional de uno que no lo es.

---

### CONCEPTO: **_type="tel"_** + **_pattern_** (regex en HTML nativo)

**_type="tel"_** declara que el input recibe un número de teléfono — pero **no valida formato** (los formatos varían demasiado por país). La validación real la pone **_pattern_**, que recibe una **expresión regular** (regex) y obliga al valor a coincidir exactamente.

**Sintaxis general:**
```html
<input type="tel" pattern="<expresión-regex>" required>
```

**Fórmula del lab:**
```html
<input type="tel" id="telefono" name="telefono" pattern="[0-9]{9}" required>
```

**Lectura del pattern:**
- **_[0-9]_** → cualquier dígito del 0 al 9.
- **_{9}_** → exactamente 9 veces.
- Resultado: 9 dígitos numéricos seguidos, ni más ni menos, sin letras ni espacios.

**Dependencia técnica:** **_pattern_** se ancla automáticamente al inicio y fin del valor (es como si tuviera **_^_** y **_$_** invisibles). No hace falta escribirlos. **_pattern_** funciona en cualquier input de texto (no solo **_type="tel"_**).

**Bonus de mobile:** **_type="tel"_** abre el **teclado numérico** del celular — mismo HTML, otra mejora gratis.

### ANALOGÍA: El filtro de aceite del auto

El motor del auto tiene un filtro de aceite que solo deja pasar partículas de cierto tamaño. **_pattern_** es ese filtro para el input: solo deja pasar el patrón que vos definiste. Si el aceite tiene basura, el filtro lo retiene; si el input tiene letras donde van números, el **_pattern_** lo retiene.

### ETIMOLOGÍA / HISTORIA

Las **expresiones regulares** (regex) nacieron en los años 50 con el matemático Stephen Kleene. Llegaron a la programación en los 70 con Unix (**_grep_**, **_sed_**) y son hoy un estándar transversal: Python, JavaScript, HTML, editores de texto, todos las hablan. HTML5 las adoptó vía **_pattern_** en 2014.

---

### CONCEPTO: **_&lt;select&gt;_** con primera opción **_value=""_** + **_required_**

Patrón estándar para hacer que un dropdown sea obligatorio. El truco: la primera **_&lt;option&gt;_** funciona como **placeholder visual** (texto del tipo "Selecciona un motivo") y tiene **_value=""_** (vacío). Cuando se combina con **_required_** en el select, el navegador rechaza el submit si el usuario no eligió una opción real.

**Sintaxis general:**
```html
<select required>
  <option value="">Texto placeholder</option>
  <option value="<opción-real-1>">Etiqueta 1</option>
  <option value="<opción-real-2>">Etiqueta 2</option>
</select>
```

**Fórmula del lab:**
```html
<select id="motivo" name="motivo" required>
  <option value="">Selecciona un motivo</option>
  <option value="consulta">Consulta</option>
  <option value="reclamo">Reclamo</option>
  <option value="sugerencia">Sugerencia</option>
</select>
```

**Dependencia técnica:** sin el **_value=""_** en la primera opción, el select se considera siempre "elegido" (con la primera opción seleccionada por default), entonces **_required_** nunca falla. El **_value=""_** convierte la primera opción en "no elegido", que es lo que **_required_** detecta.

### ESTRATEGIA VISUAL: Demo del fallo silencioso

Mostrar dos versiones del **_&lt;select&gt;_** lado a lado:
1. Sin **_value=""_** en la primera opción → el submit pasa con "Selecciona un motivo" como valor (basura).
2. Con **_value=""_** → el submit se bloquea hasta que el usuario elige una opción real.

El alumno entiende que ese detalle de 2 caracteres (**_=""_**) es lo que activa la validación.

---

### CONCEPTO: **_&lt;input type="checkbox" required&gt;_**

Mismo patrón pero para checkboxes (típicamente "Acepto los términos y condiciones"). **_required_** en un checkbox obliga al usuario a marcarlo antes de enviar.

**Sintaxis general:**
```html
<label>
  <input type="checkbox" name="<nombre>" required>
  Texto descriptivo de qué acepta
</label>
```

**Fórmula del lab:**
```html
<label>
  <input type="checkbox" id="acepto" name="acepto" required>
  Acepto los términos y condiciones
</label>
```

**Dependencia técnica:** envolver el **_&lt;input&gt;_** dentro del **_&lt;label&gt;_** (sin **_for_**) hace que **todo el texto del label sea clickeable** — el usuario puede hacer click en "Acepto los términos..." y el checkbox se marca. Es UX nativa, sin JS.

---

### CONCEPTO: La triple validación de un form profesional

Un formulario robusto en producción tiene **tres capas** de validación. La validación nativa de hoy es solo la primera. El resto se ve en cursos posteriores:

| Capa | Dónde corre | Qué cubre | Lo de hoy |
|---|---|---|---|
| **Nativa (HTML)** | El navegador | Formato, obligatoriedad, longitud, patrón | ✅ Hoy |
| **JavaScript del cliente** | El navegador | Reglas de negocio del front (ej: "la fecha de salida debe ser después de la fecha de entrada") | M5 |
| **Servidor (backend)** | El servidor | Seguridad real (sanitización, autenticación, anti-inyección, verificar que el email existe en la DB) | Otro curso |

**Mensaje clave:** las 3 capas **se complementan**. Quitar la nativa porque "tengo JS" es desperdiciar UX. Quitar la del servidor porque "tengo nativa" es un agujero de seguridad. Las profesionales bien hechas tienen las 3.

---

## BLOQUE 4 — GIT WORKFLOW PROFESIONAL (BRANCHES + PULL REQUEST)

*(El tercer y último tema. Hasta C03 todos los commits del alumno fueron directo a **_main_**. Eso funciona cuando se trabaja solo. Hoy se aprende el flujo que cualquier equipo profesional exige desde el primer día: ramas, PR, merge, sincronización.)*

---

### CONCEPTO: **_main_** — la rama por default del repositorio

*(Conceptualmente este es el primer sub-tema de Git de hoy, aunque el alumno viene tipeando la palabra **_main_** desde C01. Hasta hoy fue una palabra mágica que aparecía en los comandos sin que nadie explicara qué era. Ahora que se introducen otras ramas, este concepto se ilumina solo.)*

**¿Qué es **_main_**?** La rama por default que Git crea automáticamente cuando se inicializa un repositorio con **_git init_**. Es **una rama más** — no es Git, no es GitHub, no es la nube. Es simplemente la **primera rama** del proyecto, y por convención de la industria, es la rama que contiene el **código estable y desplegado**.

**Datos técnicos clave:**

- **Convención del nombre (2020 en adelante):** **_main_** es el nombre por default desde 2020. Antes se llamaba **_master_**. Son lo mismo, solo cambió el nombre — repositorios viejos siguen usando **_master_**.
- **No es especial técnicamente:** **_main_** es una rama como cualquier otra desde la perspectiva de Git. Lo que la hace "especial" es la **convención del equipo**: "lo que está en main es lo que vale, lo que está deployado, lo que el cliente ve".
- **Es donde vivieron todos los commits del alumno hasta hoy:** desde el **_git init_** del C01, Git puso al alumno parado en **_main_** y todos sus commits fueron ahí. Por eso **_git push origin main_** y **_git checkout main_** funcionaron desde el día 1 sin explicación previa.

**Por qué se enseña recién hoy:** el concepto solo tiene sentido cuando existe el contraste con otras ramas. Antes de hoy, decir "es la rama por default" no significaba nada para el alumno porque solo había una rama. Hoy, al crear **_feature/form-validado_**, **_main_** se ilumina automáticamente como "la otra".

### ESTRATEGIA VISUAL: Pregunta interactiva al alumno antes de definir

Abrir el sub-bloque con una pregunta directa: *"Llevan 3 clases tipeando **_main_** — ¿alguien me puede explicar qué es?"*. Esperar 20-30 segundos. Recoger 2-3 respuestas en voz alta. Después dar la definición técnica. Esto convierte un concepto "olvidado" en un **descubrimiento** del alumno, no en otro dictado.

---

### CONCEPTO: Rama (Branch) — línea independiente de desarrollo

Línea paralela de commits en Git. Cuando se crea una rama a partir de **_main_**, todos los commits nuevos van a esa rama, no a **_main_** — quedan **aislados** hasta que se mergeen. Mientras tanto, **_main_** sigue estable.

**Modelo mental:**
```
main:               A───B───C─────────────────M  (← merge del PR aquí)
                              \              /
feature/form-validado:         D───E───F────/
```

**Dependencia técnica:** una rama en Git es **solo un puntero a un commit**. No es una copia del código. Crear una rama es instantáneo y barato — Git no copia archivos, solo crea un nombre que apunta a un commit existente. Por eso los equipos modernos crean ramas para CADA cambio, sin sobrepensar.

### ANALOGÍA: Líneas del tiempo paralelas — el multiverso Marvel

Las películas y series del multiverso Marvel (**_What If…?_**, **_Loki_**, **_Spider-Man No Way Home_**, **_Avengers Endgame_**) trabajan con una idea simple: existe una **línea del tiempo principal** donde pasan las cosas oficiales, y **líneas paralelas** donde pasan versiones alternativas. Si en una línea paralela Tony Stark toma una decisión distinta, eso **no afecta la línea principal** — son universos separados. Solo si dos líneas se **fusionan**, lo que pasó en la paralela termina entrando a la principal.

Las ramas Git son exactamente eso:

- **Línea principal (**_main_**)** = la realidad oficial del proyecto. Lo que está desplegado. Lo que el cliente ve.
- **Línea paralela (**_feature/form-validado_**)** = un universo alternativo donde experimentás. Si algo explota, la línea principal NO se entera. El cliente sigue viendo la versión estable.
- **Merge** = el momento en que las dos líneas se fusionan. Lo que probaste en la paralela y funcionó, se vuelve oficial.

La fuerza pedagógica de la analogía: el alumno ya entiende intuitivamente que en **_Endgame_** los Vengadores pueden cambiar cosas en líneas paralelas sin romper la principal. Esa intuición se transfiere 1-a-1 a Git. **No es un concepto nuevo — es un concepto que ya conocen, nombrado con palabras técnicas.**

### ETIMOLOGÍA / HISTORIA

Las **ramas** son uno de los aportes más importantes de Git al mundo del control de versiones. Sistemas anteriores (SVN, CVS) también tenían ramas pero eran caras y traumáticas — crearlas o mergearlas era una operación de horas. Git las hizo **gratis** (literal: una rama nueva pesa pocos bytes), lo que cambió el flujo de trabajo de la industria: hoy es estándar tener una rama por feature, una rama por bugfix, una rama por experimento.

---

### CONCEPTO: **_git branch_** — listar ramas locales

Comando que muestra todas las ramas locales del repo. La rama en la que estás parado tiene un **asterisco** delante.

**Sintaxis general:**
```bash
git branch
```

**Output típico (al empezar):**
```
* main
```

**Output después de crear una rama:**
```
* feature/form-validado
  main
```

El asterisco se movió a la rama nueva — eso significa que estás parado ahí. Todos los commits que hagas ahora van a esa rama, no a **_main_**.

### ESTRATEGIA VISUAL: Terminal de VS Code

Mostrar el comando en la terminal integrada de VS Code (no en una externa) — eso reduce el cambio de contexto del alumno. El nombre de la rama actual también aparece en la **barra inferior izquierda** de VS Code, con un ícono de bifurcación. Recorrer ambos lugares para que el alumno tenga 2 puntos de referencia.

---

### CONCEPTO: **_git checkout -b &lt;nombre&gt;_** — crear y cambiar a una rama nueva

Comando que **crea** una rama nueva Y **se cambia** a ella en una sola operación. Equivale a **_git branch &lt;nombre&gt;_** + **_git checkout &lt;nombre&gt;_**, dos comandos separados que históricamente se ejecutaban uno detrás del otro.

**Sintaxis general:**
```bash
git checkout -b <nombre-de-la-rama>
```

**Fórmula del lab:**
```bash
git checkout -b feature/form-validado
```

**Convención de nombres:** **_feature/&lt;descripción-corta&gt;_** para nuevas funcionalidades. Otros prefijos comunes:
- **_fix/&lt;descripción&gt;_** → bugfix.
- **_chore/&lt;descripción&gt;_** → tareas de mantenimiento (actualizar dependencias, renombrar archivos).
- **_docs/&lt;descripción&gt;_** → cambios en documentación.

**Dependencia técnica:** la rama nueva se crea **a partir del commit donde estás parado**. Si estás en **_main_** al ejecutar **_git checkout -b feature/x_**, la rama nueva arranca desde el último commit de **_main_**. Por eso es importante hacer **_git checkout main_** + **_git pull_** ANTES de crear una rama feature — para arrancar desde el **_main_** más reciente.

### ANALOGÍA: Tijeretazo al árbol genealógico

Si dibujás un árbol genealógico, cada rama de la familia nace de un ancestro común. **_git checkout -b_** es el corte que dice "desde acá empieza una rama nueva de la familia". Todos los commits anteriores son ancestros compartidos; los nuevos serán exclusivos de la rama feature hasta que se mergeen.

---

### CONCEPTO: **_origin_** — el nombre por default del repositorio remoto

*(Segundo concepto que se enseña recién hoy aunque el alumno viene tipeándolo desde C01 — mismo patrón que **_main_**. Hasta hoy fue una palabra mágica en los comandos **_git push origin main_** y **_git pull origin main_**. Al introducir **_git push -u origin feature/..._**, el alumno está listo para iluminarlo.)*

**¿Qué es **_origin_**?** Es el **nombre por convención** del repositorio remoto asociado al repositorio local. Cuando se hace **_git clone &lt;url&gt;_** o se vincula un repo local con **_git remote add origin &lt;url&gt;_**, Git guarda esa URL bajo el nombre **_origin_**. A partir de ahí, **_origin_** es un **alias** que apunta a la URL de GitHub del repo.

**Datos técnicos clave:**

- **No es Git, no es GitHub.** **_origin_** es un **nombre** que el alumno (o **_git clone_**) eligió para referirse al remoto.
- **Es convención, no obligación:** se podría llamar **_servidor_**, **_arriba_**, lo que sea — pero el estándar de la industria es **_origin_** para el primer remoto.
- **Puede haber más de uno:** un repo puede tener varios remotos (ej: **_origin_** apuntando a GitHub + **_backup_** apuntando a GitLab). Hoy el alumno tiene solo uno.

**Verificación en terminal:**
```bash
git remote -v
```
Output esperado:
```
origin  https://github.com/<usuario>/<repo>.git (fetch)
origin  https://github.com/<usuario>/<repo>.git (push)
```

**Por qué se enseña recién hoy:** el concepto solo tiene sentido cuando el alumno va a usar el remoto explícitamente. Antes de hoy, **_origin_** era una palabra que copiaba del lab. Ahora, al hacer **_git push -u origin feature/form-validado_**, el alumno **decide** a qué remoto subir y entiende qué es **_origin_** en contraste con su PC local.

### ESTRATEGIA VISUAL: Pregunta interactiva antes de pushear

Aplicar el mismo patrón de **_main_** en M2 (ver `[[feedback-iluminar-concepto-implicito]]`): abrir el primer sub-punto de M4 con la pregunta directa *"Llevan 3 clases tipeando **_git push origin main_** — ¿alguien me puede explicar qué es **_origin_**?"*. Esperar respuestas. Recoger 2-3 sin corregir. Después dar la definición. El concepto se ilumina por descubrimiento, no por dictado.

---

### CONCEPTO: **_git push -u origin &lt;rama&gt;_** — subir y vincular la rama al remoto

Comando que sube los commits de la rama local al repositorio remoto (GitHub) Y **vincula** la rama local con su contraparte remota. Después de hacer **_-u_** una vez, los siguientes **_git push_** ya no necesitan el flag — Git recuerda la vinculación.

**Sintaxis general:**
```bash
git push -u origin <nombre-de-la-rama>
```

**Fórmula del lab:**
```bash
git push -u origin feature/form-validado
```

**Lectura:**
- **_origin_** → nombre por defecto del remoto en GitHub (puede ser otro, pero **_origin_** es la convención).
- **_-u_** o **_--set-upstream_** → "establecé upstream", o sea "recordá que esta rama local trackea esta rama remota".

**Dependencia técnica:** la primera vez que se sube una rama nueva, hace falta **_-u_** porque la rama remota todavía no existe. Las siguientes veces que se trabaje en esa rama, **_git push_** (sin args) ya funciona — Git sabe a dónde ir.

### ESTRATEGIA VISUAL: GitHub muestra el link al PR

Después del **_git push -u_**, GitHub responde en la terminal con un mensaje que incluye un **link directo** para abrir el PR. Mostrar ese mensaje y hacer click — abre la pestaña de **Compare & pull request** en GitHub. El alumno ahorra el paso de buscar manualmente la rama en la web.

---

### CONCEPTO: Pull Request (PR)

Solicitud formal en GitHub para que los commits de una rama (típicamente **_feature/x_**) se mergeen a otra rama (típicamente **_main_**). Es **mucho más que un botón de merge**: es un espacio de revisión donde el equipo puede:
- **Ver el diff completo** (qué líneas cambiaron en qué archivos).
- **Comentar líneas específicas** del código.
- **Pedir cambios** antes de aprobar.
- **Aprobar y mergear** cuando todo está conforme.

**Dependencia técnica:** "Pull Request" es **terminología de GitHub** (y Bitbucket). GitLab lo llama "Merge Request" — es lo mismo. Git **nativo** no tiene PRs; los PRs son una capa de colaboración construida encima de Git.

### ANALOGÍA: El revisor del editorial antes de imprimir

Antes de que un libro se imprima, el editorial lo revisa palabra por palabra. Si el revisor encuentra un error o tiene una sugerencia, escribe un comentario al margen. El autor puede aceptar el comentario o discutirlo. Solo cuando ambos están de acuerdo, el libro va a imprenta. El PR es el espacio del revisor: nadie publica código en **_main_** sin pasar por ahí.

### ETIMOLOGÍA / HISTORIA

GitHub introdujo los Pull Requests en 2008 como mecanismo de colaboración para proyectos open source. El nombre viene del verbo **_git pull_** ("traé estos commits") — un PR es literalmente "te pido que pulles estos commits a tu rama". El concepto fue tan exitoso que cambió la forma de programar en equipo en toda la industria — hoy es estándar.

---

### CONCEPTO: Leer el diff

En la pestaña **Files changed** del PR, GitHub muestra el código que cambió en formato **diff**:
- Líneas en **verde** con **_+_** al inicio → **agregadas**.
- Líneas en **rojo** con **_-_** al inicio → **eliminadas**.
- Líneas blancas → contexto sin cambios (para entender qué hay alrededor).

**Por qué importa:** la revisión de PR es el momento donde se atajan errores que se filtraron al desarrollar. Leer el diff es **el** skill profesional de Git. En un equipo, cualquier persona del equipo va a abrir tus PRs y revisar tu diff — y tú vas a revisar los de tu compañera.

### ESTRATEGIA VISUAL: Hacer click en una línea verde

Mostrar que se puede hacer click en cualquier línea del diff para **comentar inline**. Cualquier discusión queda atada a una línea específica, no perdida en un chat general. Eso es lo que hace al PR mejor que pasarse archivos por Teams.

---

### CONCEPTO: Merge — fusionar el feature a main

Operación que combina los commits de la rama feature con los de **_main_** y los integra en **_main_**. GitHub crea un **commit de merge** automático que registra qué se mergeó, quién lo hizo y cuándo. Después del merge, los cambios viven en **_main_** y son parte del histórico oficial.

**Tipos de merge en GitHub (no hace falta enseñar hoy, solo nombrar):**
- **Merge commit** → crea un commit nuevo que une las dos ramas (default, se usa hoy).
- **Squash and merge** → aplasta todos los commits de la feature en uno solo en main.
- **Rebase and merge** → reaplica los commits del feature encima de main sin commit de merge.

**Dependencia técnica:** el merge solo es automático si **no hay conflictos**. Si dos personas modificaron la misma línea del mismo archivo, Git no sabe cuál preservar — pide resolución manual. Hoy no se ve resolución de conflictos.

---

### CONCEPTO: **_git pull_** — sincronizar la rama local con el remoto

Comando que descarga los commits nuevos del remoto y los aplica a la rama local. Es la operación inversa al **_git push_**: en lugar de "subir mis cambios", "bajá lo que cambió en el remoto".

**Sintaxis general:**
```bash
git pull
```

**Equivalencia:** **_git pull_** = **_git fetch_** (descargar commits sin aplicar) + **_git merge_** (aplicarlos a la rama local). Para el alumno de hoy, **_git pull_** alcanza.

**Fórmula del lab (paso post-merge del PR):**
```bash
git checkout main             # vuelve a la rama main local
git pull                      # baja el commit de merge que GitHub creó
git log --oneline             # confirma que el commit aparece en el log local
```

**Dependencia técnica:** después de mergear un PR en GitHub, **_main_** del remoto tiene el merge, pero **_main_** local todavía no. Hasta que el alumno haga **_git pull_**, su clon local está **desincronizado**. Olvidar este paso es uno de los errores más comunes de principiante — y produce que el alumno parta el siguiente feature desde un **_main_** viejo.

### ANALOGÍA: Bajar el correo del buzón

**_git push_** es mandar una carta por correo. **_git pull_** es ir al buzón a ver si llegó algo. Si no vas al buzón, las cartas se acumulan en el correo pero no las tenés en tu casa. Hacer **_git pull_** antes de empezar a trabajar cada día es como abrir el buzón al despertar: te ponés al día con lo que pasó mientras no estabas.

---

### CONCEPTO: **_git branch -d &lt;rama&gt;_** — borrar una rama local mergeada

Comando que borra la rama local especificada. Git protege la operación: **solo permite borrar si la rama ya está mergeada** a **_main_** (con **_-d_** minúscula). Para forzar el borrado de una rama no mergeada, hay que usar **_-D_** mayúscula — pero hoy no se enseña porque puede destruir trabajo no mergeado.

**Sintaxis general:**
```bash
git branch -d <nombre-de-la-rama>
```

**Fórmula del lab:**
```bash
git branch -d feature/form-validado
```

**Dependencia técnica:** borrar la rama **local** no borra la rama **remota** en GitHub — son objetos separados. Para borrar también la del remoto, **_git push origin --delete &lt;rama&gt;_** (no se ve hoy). GitHub generalmente ofrece borrar la rama remota automáticamente al mergear el PR (botón "Delete branch").

**Por qué borrar:** mantener ramas viejas mergeadas alrededor es ruido — confunde al equipo, ensucia el output de **_git branch_**. La convención: rama mergeada, rama borrada.

---

### CONCEPTO: GitFlow básico — el flujo completo de un feature

Convención simplificada del flujo profesional. 6 pasos secuenciales que se aplican a **cada cambio nuevo** del repo. Se internalizan con repetición — al final del curso el alumno los hace automáticamente.

```
1. git checkout -b feature/x      ← arranca el feature en una rama nueva
2. <cambiá código>                ← desarrollás
3. git add + git commit           ← commiteás dentro de la rama
4. git push -u origin feature/x   ← subís la rama al remoto
5. PR en GitHub → revisar → merge ← integrás a main
6. git checkout main + git pull   ← sincronizás main local
```

**Variante con borrado de rama (opcional, pero recomendado):**
```
7. git branch -d feature/x        ← limpiás
```

**Por qué este orden no es negociable:**
- Si saltás (1), todos tus commits del feature van a **_main_** y rompés el aislamiento.
- Si saltás (4), nadie en el equipo ve tu trabajo — el PR no se puede abrir.
- Si saltás (6), tu **_main_** local queda viejo y el próximo feature parte desde el commit equivocado.

### ESTRATEGIA VISUAL: Diagrama de los 6 pasos proyectado

Proyectar el flujo de 6 pasos como un loop visual (con flechas que vuelven al paso 1 después del 6). Cada paso con su comando exacto debajo. El alumno se lleva una **foto mental** del ciclo completo — después del lab, ese diagrama es su cheat sheet.

---

## CIERRE — RÚBRICA DEL LAB CALIFICADO

*(Esta es la primera clase calificada del módulo. La rúbrica vale como concepto que el alumno entienda **qué se evalúa**, antes de empezar.)*

---

### CONCEPTO: Rúbrica del Lab 04

Sistema de evaluación con **5 criterios independientes**, cada uno con un peso de **20 puntos** (total 100 puntos). Cada criterio tiene 4 niveles de calidad: **Excelente (20)**, **Bueno (15)**, **Satisfactorio (10)** y **Bajo (5)**. La rúbrica no evalúa solo "que el código corra" — evalúa también la **profesionalización del entregable**: presentación, argumentación, deploy y extensión más allá del lab base.

| # | Criterio | Excelente (20) | Bajo (5) |
|---|---|---|---|
| 1 | **CSS Variables y estética** | ≥10 tokens en **_:root_**, ≥6 reglas refactorizadas con **_var()_**, estética nueva aplicada coherentemente al producto | Hardcodes prevalecen, sin sistema de tokens reconocible |
| 2 | **Formulario validado** | Los 3 escenarios de fallo bloquean el submit, checkbox + select obligatorios, mensajes nativos visibles en todos los campos | No bloquea el submit o no hay atributos de validación |
| 3 | **Git workflow** | Rama **_feature/form-validado_** creada, commits atómicos descriptivos, push, PR abierto y mergeado, **_main_** sincronizado con **_git pull_** | Push directo a **_main_** o sin uso de ramas/PRs |
| 4 | **Presentación + argumentación técnica** | Demo de **≤3 min** del sitio en acción + explica con claridad **≥2 decisiones técnicas** (tokens, validación o flujo Git) + **justifica uso de IA** si aplica | No presenta o no justifica decisiones técnicas |
| 5 | **Desafío: HU adicionales + deploy** | **≥2 HU adicionales** implementadas con criterios de aceptación cumplidos + sitio público funcional en GitHub Pages con las 3 páginas + README documentado con tabla de tokens + validaciones | Sin deploy o sitio roto |

**Escala de notas:** A (90-100) / B (80-89) / C (70-79) / F (<70).

**Lo que cambió respecto al modelo anterior — 3 criterios nuevos que el alumno debe entender desde el inicio:**

1. **Criterios 1-3 (40% del antiguo modelo)** ahora valen **60 pts (3 × 20)** — el código sigue siendo el grueso de la nota, pero ya no es **todo**.
2. **Criterio 4 — Presentación + argumentación técnica (NUEVO, 20 pts):** el alumno debe poder **explicar oralmente** qué decisiones técnicas tomó y por qué. Si usó IA en alguna parte, debe justificarlo (qué le pidió, qué validó, qué cambió). Esto convierte al alumno de "el que copia código" a "el que entiende lo que escribe".
3. **Criterio 5 — HU adicionales + deploy (NUEVO, 20 pts):** el alumno debe implementar **≥2 historias de usuario adicionales** más allá del lab base. Esto premia al alumno que **estira el producto** (agrega features útiles a su landing) y no solo cumple el checklist mínimo.

**Mensaje del cierre:** el lab no es "haga el código y entregue". Es "demostre que entiende cada uno de los 3 temas del día, sepa **explicarlos oralmente**, **estire el producto** con HUs propias, y **entregue como profesional** (deploy + README documentado)".

---

## RESUMEN PEDAGÓGICO DE LA CLASE

| Bloque | Conceptos que vinculan |
|---|---|
| **B1 — CSS Variables** | Custom Property, **_:root_**, **_var()_**, sistema de tokens semánticos |
| **B2 — Estética nueva** | **_box-shadow_**, **_transition_**, microinteracción **_:hover_** + **_translateY_** |
| **B3 — Validación nativa** | **_required_**, **_minlength_**, **_type="email"_**, **_type="tel"_** + **_pattern_**, **_&lt;select&gt;_** con **_value=""_**, **_&lt;input type="checkbox"&gt;_** + **_required_**, triple validación nativa/JS/servidor |
| **B4 — Git workflow** | Rama (branch), **_git branch_**, **_git checkout -b_**, **_git push -u_**, PR, leer el diff, merge, **_git pull_**, **_git branch -d_**, GitFlow básico |
| **Cierre** | Rúbrica P1 30% / P2+P4 30% / P3 25% / P5 15% |

**Hilo conductor del día (la cadena Problema → Solución):**
1. *"Tu CSS de C03 tiene **_#1a1a1a_** y **_8px_** repetidos por todos lados. Si el cliente cambia el primary, te toca renombrar 20 lugares."* → **CSS Variables**.
2. *"El sitio se ve plano. Las cards son rectángulos sin volumen."* → **box-shadow + microinteracciones**.
3. *"Tu form acepta cualquier basura. Si alguien manda 'abc' en el email, lo aceptas."* → **Validación nativa**.
4. *"Hasta hoy todos tus commits van a **_main_**. En equipo eso es un desastre."* → **Git workflow profesional**.

Cada bloque resuelve un problema concreto del estado actual del proyecto del alumno. Ningún concepto se introduce porque "toca" — se introduce porque el problema del bloque anterior lo necesita.
