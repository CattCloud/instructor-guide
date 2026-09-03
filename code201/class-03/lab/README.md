# Laboratorio 03: CSS Grid — esencial, intermedio y `grid-template-areas`

En este laboratorio aprendes **CSS Grid en profundidad** sobre 2 páginas nuevas de tu landing: `precios.html` y `faq.html`. Todo **mobile-first real** (empiezas viendo en ~400px y agregas media queries inmediatamente después). Cubres 3 niveles de Grid: básico (móvil sin columnas + media query con `1fr 1fr 1fr 1fr`), intermedio (`auto-fit` + `minmax` para cantidades variables) y el feature distintivo: **`grid-template-areas`**.

> 🎯 **Continuidad del M1:** sigues sobre el **mismo producto** que elegiste en C01. En `index.html` solo actualizas el `<nav>` (P1.1) para apuntar a las páginas nuevas — no tocas el resto del contenido.

> 🔁 **Reuso de C02:** heredas la normalización CSS, `box-sizing: border-box`, los 3 breakpoints (640/1024 mobile-first) y los estilos de nav/footer.

---

### 🌟 Objetivos de Aprendizaje

* Aplicar **Grid básico mobile-first** — móvil con `display: grid` (1 columna por defecto) + media query desktop con `grid-template-columns`.
* Aplicar **Grid intermedio** (`repeat(auto-fit, minmax(...))`) cuando la cantidad de items puede variar.
* Aplicar **`grid-template-areas`** mobile-first — layouts 2D con regiones nombradas que Flex no puede hacer.
* Construir el **criterio Grid vs Flex** para cualquier proyecto futuro.

### 🔑 Conceptos Clave

* **Mobile-first con Grid**: en móvil basta `display: grid` — el navegador apila por defecto en 1 columna. Las media queries añaden columnas al crecer la pantalla.
* **`repeat(N, 1fr)`**: atajo (azúcar sintáctica) para N columnas iguales.
* **`repeat(auto-fit, minmax(150px, 1fr))`**: el grid decide solo cuántas columnas caben — ideal con cantidades variables.
* **`grid-template-areas`**: dibujas el layout con NOMBRES como ASCII art.
* **Heurística**: **Grid 2D, Flex 1D**.

---

## Parte 1 — `precios.html` con Grid básico + intermedio (~50 min)

> Vas a crear la página de **planes y precios** de tu producto. Empiezas en **móvil (~400px)** con la versión más simple, y agregas media queries para tablet/desktop **inmediatamente después**. Al final, una sección "Marcas que confían" donde brilla `auto-fit + minmax`.

### 1.1 Actualizar el nav — rutas relativas + icono para FAQ

Hasta ahora tu nav tenía `href="#"` (placeholders). Hoy lo conectas a las 3 páginas reales del landing y reemplazas el último enlace por un **icono SVG** (patrón moderno para enlaces utilitarios como FAQ, ayuda, perfil).

**Paso A — Descarga el icono FAQ.** Ve a [SVG Repo](https://www.svgrepo.com){:target="_blank"}, busca "question mark" o "help circle" y descarga un SVG simple. Guárdalo como `img/faq.svg`.

**Paso B — Actualiza el `<nav>` de `index.html`** (reemplazas los 3 enlaces que tenías de C02):

```html
<nav>
  <a href="index.html" class="logo">Mi Producto</a>
  <a href="index.html">Inicio</a>
  <a href="precios.html">Precios</a>
  <a href="faq.html" id="icono-faq" aria-label="Preguntas frecuentes">
    <img src="img/faq.svg" alt="" width="24" height="24">
  </a>
</nav>
```

Explicación:

* **Rutas relativas (`href="precios.html"`)** apuntan a archivos en la misma carpeta — es la forma estándar dentro de un proyecto.
* **`aria-label="Preguntas frecuentes"`** describe el enlace para lectores de pantalla (el icono solo no comunica el significado).
* **`alt=""`** en el `<img>` es correcto cuando el `<a>` ya tiene `aria-label` — evita que el lector lo lea dos veces.

> 💡 Reemplaza `"Mi Producto"` con el nombre real del producto que elegiste en C01 sub-paso 0.

> ⚠️ **Aún no abras `precios.html` ni `faq.html`** — los enlaces darán 404 porque las páginas no existen todavía.

### 1.2 Crear `precios.html`

Crea `precios.html` al mismo nivel que `index.html`. **Copia el `<header>` y `<footer>` del `index.html`** — incluyendo el nav que acabas de actualizar. Dentro del `<main>`:

```html
<main>
  <div id="content-precios">
    <h1>Planes y precios</h1>
    <p>Elige el plan que mejor se ajuste a tu necesidad.</p>
  </div>
  <div class="planes">
    <article class="plan">
      <h2>Free</h2>
      <p class="precio">$0</p>
      <ul>
        <li>Feature básico 1</li>
        <li>Feature básico 2</li>
      </ul>
      <a href="#" class="btn">Empezar gratis</a>
    </article>

    <article class="plan">
      <h2>Starter</h2>
      <p class="precio">$9/mes</p>
      <ul>
        <li>Todo lo del Free</li>
        <li>Feature starter 1</li>
      </ul>
      <a href="#" class="btn">Probar Starter</a>
    </article>

    <article class="plan">
      <h2>Pro</h2>
      <p class="precio">$19/mes</p>
      <ul>
        <li>Todo lo del Free</li>
        <li>Feature pro 1</li>
        <li>Feature pro 2</li>
      </ul>
      <a href="#" class="btn">Probar 14 días</a>
    </article>

    <article class="plan">
      <h2>Enterprise</h2>
      <p class="precio">$99/mes</p>
      <ul>
        <li>Todo lo del Pro</li>
        <li>Feature enterprise 1</li>
        <li>Soporte dedicado</li>
      </ul>
      <a href="#" class="btn">Contactar ventas</a>
    </article>
  </div>
</main>
```

> 💡 Adapta los nombres de planes y features a TU producto.

### 1.3 Grid móvil — la base (1 columna, sin declarar columnas)

Abre `precios.html` en DevTools (F12) → modo responsive → **ancho ~400px** (simula un móvil). Vas a diseñar para móvil **primero**.

En `styles.css`, agrega:

```css
/* ========================= PRECIOS.HTML ========================= */
.planes {
  display: grid;
  gap: 24px;
  padding: 32px;
  margin: 0 auto;
}

.plan {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 24px;
  background: #fff;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.plan .precio {
  font-size: 32px;
  font-weight: 700;
  margin: 16px 0;
}

#content-precios {
  text-align: center;
}

.plan ul {
  list-style: none;
  text-align: center;
}


.plan a {
  color: #1a1a1a;
  text-decoration: none;
  border: #1a1a1a 1px solid;
  border-radius: 5px;
  padding: 4px 12px;
}


```

Explicación:

* **`display: grid`** activa Grid en `.planes`. **el grid usa 1 sola columna por defecto** — exactamente lo que queremos en móvil: las 4 cards apiladas verticalmente.
* **`gap: 24px`** separa las cards (mismo concepto que ya usaste en Flex en C02).


✅ **Checkpoint móvil (~400px):** las 4 cards aparecen apiladas verticalmente, una debajo de otra, ocupando todo el ancho disponible.

### 1.4 Grid desktop — media queries con `1fr 1fr 1fr 1fr` y `repeat(4, 1fr)`

Ahora que el móvil se ve bien, **arrastra DevTools a 640px y luego a 1024px** y agrega los media queries inmediatamente:

```css
/* TABLET+ (≥640px): 2 columnas */
@media (min-width: 640px) {
  .planes {
    grid-template-columns: 1fr 1fr;
  }
}

/* DESKTOP+ (≥1024px): 4 columnas */
@media (min-width: 1024px) {
  .planes {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
```

Explicación pieza por pieza:

* **`grid-template-columns: 1fr 1fr`** declara las columnas **explícitamente** — una columna por cada valor escrito. Con 2 valores, 2 columnas; con 4 valores, 4 columnas.
* **`1fr`** = "una unidad de **fracción** del espacio disponible". `1fr 1fr` reparte el ancho en mitades; `1fr 1fr 1fr 1fr` en cuartos. Si pusieras `2fr 1fr 1fr`, la primera ocuparía la mitad y las otras dos un cuarto cada una.

#### Atajo: `repeat()` cuando todas las columnas son iguales

Escribir `1fr 1fr 1fr 1fr` está bien con 4 columnas. ¿Y si quieres 10 iguales? `1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr` es ilegible. Para eso existe `repeat()` — **azúcar sintáctica** (atajo):

```css
@media (min-width: 1024px) {
  .planes {
    grid-template-columns: repeat(4, 1fr);   /* equivale a 1fr 1fr 1fr 1fr */
  }
}
```

`repeat(4, 1fr)` y `1fr 1fr 1fr 1fr` producen **exactamente el mismo resultado**. Reemplaza la regla por la versión con `repeat()` — vas a verlo en código real toda tu carrera.

✅ **Checkpoint los 3 niveles:** arrastra DevTools y verifica:

| Viewport | Qué debes ver |
|---|---|
| **~400px (móvil)** | 1 columna — las 4 cards apiladas |
| **≥640px (tablet)** | 2 columnas — 2 filas de 2 cards (2×2 perfecto) |
| **≥1024px (desktop)** | 4 columnas — las 4 cards lado a lado en una sola fila |

### 1.5 `auto-fit` + `minmax` — cuando la cantidad puede variar

Agregas una **nueva sección al final del `<main>` de `precios.html`**: "Marcas que confían en nosotros" — un patrón clásico de páginas de precios. Aquí la cantidad de logos puede variar (hoy 6, mañana 12), así que **media queries explícitas no sirven**: necesitas que el grid decida solo cuántas columnas caben.

**HTML** (al final del `<main>` de `precios.html`):

```html
<section class="clientes">
  <h2>Marcas que confían en nosotros</h2>
  <div class="logos">
    <div class="logo-cliente">ACME</div>
    <div class="logo-cliente">TechCo</div>
    <div class="logo-cliente">StartupX</div>
    <div class="logo-cliente">BigCorp</div>
    <div class="logo-cliente">GlobalInc</div>
    <div class="logo-cliente">FutureLab</div>
  </div>
</section>
```

**CSS** (mobile-first: la regla funciona en todos los anchos sin media queries):

```css
.clientes {
  padding: 32px;
  margin: 0 auto;
}

.logos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.logo-cliente {
  background: #f5f5f5;
  padding: 24px;
  text-align: center;
  font-weight: 700;
  border-radius: 8px;
}
```

Explicación pieza por pieza:

* **`auto-fit`** → "ajusta automáticamente cuántas columnas caben en el ancho disponible". No le dices cuántas — Grid lo calcula.
* **`minmax(150px, 1fr)`** → cada columna mide **mínimo 150px**, **máximo 1 fracción** (lo que sobre). Si caben 4 logos, pone 4. Si solo caben 2, baja a 2.

✅ **Checkpoint:** arrastra DevTools desde ~400px hasta ancho completo — los logos se reorganizan en 2, 3, 4, 6 columnas **sin un solo `@media`**.


🏆 **Reto autónomo:**
- Destaca el plan "Pro" como recomendado: agrega un border más grueso, fondo de color suave y un badge "Más popular" en la esquina superior derecha (pista: `position: relative` en `.plan` + `position: absolute` en el badge).

---

## Parte 2 — `faq.html` con `grid-template-areas` (~35 min)

> **El momento clave de la clase.** `grid-template-areas` es **el feature distintivo de Grid** — lo único que Flex NO puede hacer. Aplicación mobile-first: primero la versión móvil (apilado), inmediatamente después la versión desktop (T invertida).

### 2.1 Crear `faq.html`

Nuevo archivo `faq.html` al mismo nivel que `index.html` y `precios.html`. **Reusa el header del landing** (el que actualizaste en 1.1, con el icono FAQ) y dentro del header agrega `<h1>Preguntas Frecuentes</h1>`. Reusa también el footer.

Estructura del body:

```html
<body class="faq-layout">
  <header>
    <nav>
      <a href="index.html" class="logo">Mi Producto</a>
      <a href="index.html">Inicio</a>
      <a href="precios.html">Precios</a>
      <a href="faq.html" id="icono-faq" aria-label="Preguntas frecuentes">
        <img src="img/faq.svg" alt="" width="24" height="24">
      </a>
    </nav>
    <h1>Preguntas Frecuentes</h1>
  </header>

  <nav class="faq-nav">
    <h2>Categorías</h2>
    <ul>
      <li><a href="#general">General</a></li>
      <li><a href="#precios">Precios</a></li>
      <li><a href="#soporte">Soporte</a></li>
    </ul>
  </nav>

  <main class="faq-main">
    <section id="general">
      <h2>General</h2>
      <details>
        <summary>¿Qué es este producto?</summary>
        <p>Una descripción adaptada a tu producto.</p>
      </details>
      <details>
        <summary>¿Para quién está dirigido?</summary>
        <p>Otra pregunta y respuesta.</p>
      </details>
    </section>

    <section id="precios">
      <h2>Precios</h2>
      <details>
        <summary>¿Hay versión gratuita?</summary>
        <p>Sí, el plan Free incluye...</p>
      </details>
    </section>

    <section id="soporte">
      <h2>Soporte</h2>
      <details>
        <summary>¿Cómo contacto soporte?</summary>
        <p>Vía email o chat...</p>
      </details>
    </section>
  </main>

  <footer>
    <!-- Reusa el footer del index -->
  </footer>
</body>
```

> 💡 **Dos navs en una página, ¿se conflictúan?** No. El `<nav>` del header es el nav principal del sitio. El `<nav class="faq-nav">` es el nav local de la página. Son semánticamente distintos. La clase `.faq-nav` los diferencia para CSS.

> 💡 `<details>` con `<summary>` da el comportamiento "click para expandir" de FAQ **sin JavaScript** — HTML puro.

### 2.2 `grid-template-areas` móvil — todo apilado (1 columna)

Abre `faq.html` en DevTools modo responsive → **ancho ~400px**. Aquí defines la versión móvil (la base):

```css
/* ========================= FAQ.HTML ========================= */

/* BASE: móvil — todo apilado en 1 columna */
.faq-layout {
  display: grid;
  grid-template-areas:
    "header"
    "nav"
    "main"
    "footer";
  grid-template-columns: 1fr;
  gap: 16px;
  min-height: 100vh;

}

.faq-layout header {
  grid-area: header;
}

.faq-nav {
  grid-area: nav;


  padding: 16px;
  margin: 0px 16px;
  background: #f5f5f5;
  border-radius: 8px;
}

.faq-main {
  grid-area: main;

  padding: 16px;
}

.faq-layout footer {
  grid-area: footer;
}


.faq-nav ul {
  list-style: none;
  padding: 0;
}

.faq-main details {
  border-bottom: 1px solid #e0e0e0;
  padding: 16px 0;
}

.faq-main summary {
  font-weight: 600;
  cursor: pointer;
}

.faq-layout h1 {
   padding: 16px;
   text-align: center;
}

```

Explicación de `grid-template-areas` (móvil):

* Cada **string** es una fila de la grilla.
* Cada **palabra** dentro del string es una columna.
* En móvil: 1 columna × 4 filas → header → nav → main → footer apilados.
* **`grid-area: nav`** en cada elemento lo "engancha" al área del mismo nombre.

✅ **Checkpoint móvil (~400px):** todo apilado verticalmente — header arriba, nav (categorías), main (preguntas), footer abajo. Sin scroll horizontal.

### 2.3 `grid-template-areas` desktop — T invertida con sidebar (media query)

Inmediatamente después, arrastra DevTools a **≥640px** y agrega el media query que **redibuja el layout** en T invertida (sidebar + main):

```css
/* TABLET+ (≥640px): T invertida con sidebar + main */
@media (min-width: 640px) {
  .faq-layout {
    grid-template-areas:
      "header header"
      "nav    main"
      "footer footer";
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr auto;
  }
}
```

Explicación:

* En el media query **solo redefines `grid-template-areas` y `grid-template-columns`**. El resto (`display: grid`, `gap`, etc.) lo heredas del CSS base.
* **`"header header"`** ocupa las 2 columnas (header se extiende horizontal).
* **`"nav main"`** divide la fila central en sidebar (nav) + main.
* **`"footer footer"`** ocupa las 2 columnas (footer se extiende horizontal).
* **`grid-template-columns: 200px 1fr`** → sidebar fijo de 200px + main que ocupa el resto.

✅ **Checkpoint los 2 estados:** arrastra DevTools y verifica:

| Viewport | Qué debes ver |
|---|---|
| **<640px (móvil)** | Apilado: header → nav (categorías) → main (preguntas) → footer |
| **≥640px (tablet+)** | T invertida: header arriba, sidebar a la izquierda + main a la derecha, footer abajo |

> 💡 **Por qué este es el feature distintivo de Grid:** con Flexbox NO puedes hacer esto limpio. Flex es 1D (controla una dirección). Grid es 2D (filas Y columnas a la vez). Y con `grid-template-areas` reorganizar el layout entre breakpoints es DECLARATIVO: literalmente dibujas el nuevo layout.

🏆 **Reto autónomo:**
- Cambia el orden de `grid-template-areas` **solo en el media query desktop** para que el nav quede a la **derecha** del main, sin tocar el HTML:
  ```
  "header header"
  "main   nav"
  "footer footer"
  ```
  Demuestra que con Grid el orden visual es independiente del orden del DOM.

---

## Parte 3 — Criterio Grid vs Flex (~15 min)

> Ya dominas ambos. La pregunta del millón: **¿cuándo usar cada uno?** Esta tabla resuelve la duda en cualquier proyecto futuro.

| Caso de uso | Herramienta correcta |
|---|---|
| Navegación horizontal: logo + enlaces | **Flex** (1D, ya lo hiciste en C02) |
| Galería de imágenes que envuelven | **Flex** con `flex-wrap` (o Grid con `auto-fit`) |
| Grilla de tarjetas con cantidad fija (4 planes) | **Grid básico** con media queries (`1fr 1fr 1fr 1fr`) |
| Grilla con cantidad variable (logos, items de DB) | **Grid intermedio** (`auto-fit` + `minmax`) |
| Layout 2D con regiones nombradas (FAQ, dashboard) | **Grid avanzado** (`grid-template-areas`) — Flex NO puede |
| Alinear UN elemento distinto al resto | **Flex** (`align-self`) |

Heurística memorable: **"Grid 2D, Flex 1D"**.

✅ **Checkpoint final:** abres `precios.html` y `faq.html` en DevTools modo responsive. Verificas todos los breakpoints de cada uno. Toma screenshots para entregar.

🏆 **Reto autónomo:**
- Aplica `grid-template-areas` a tu `index.html` para reorganizar header/main/footer. Comprueba si en este caso Grid mejora algo sobre lo que ya hiciste con Flex en C02.

---

## ⭐ Logros Adicionales

### Logro 1: WhatsApp con mensaje predeterminado por plan

En `precios.html`, cambia los botones "Empezar" / "Probar" / "Contactar" por enlaces de WhatsApp con mensaje específico del plan:

```html
<a href="https://wa.me/51999999999?text=Hola,%20quiero%20el%20plan%20Pro" target="_blank">
  Probar 14 días
</a>
```

### Logro 2: Grid avanzado 

Investiga estos features (Opcional usarlo en el lab):
- **`subgrid`**: subdivide un área Grid en sub-grillas (Chrome 117+, Firefox 71+).
- **`grid-auto-flow: dense`**: rellena huecos de forma automática.
- **Posicionamiento manual** con `grid-column-start/end` y `grid-row-start/end`.


---

## 📝 Instrucciones de Entrega

* Publica tu sitio actualizado en GitHub Pages.
* Asegúrate que `precios.html` y `faq.html` están en el repo y son accesibles vía URL.
* Entrega:
  * URL del repositorio
  * URL del sitio en GitHub Pages

---

## 💡 Tips finales

* **Mobile-first con Grid es más simple que con Flex**: en móvil basta con `display: grid` (1 columna por defecto del navegador). No necesitas declarar `grid-template-columns` hasta el media query desktop.
* **`auto-fit` vs `auto-fill`**: ambos hacen wrap, pero `auto-fit` colapsa columnas vacías (las cards se estiran); `auto-fill` las deja visibles. Para landings usa `auto-fit`.
* **`minmax(100%, 1fr)` rompe el wrap** — no uses 100% como mínimo. Usa un valor en px como 150-280px.
* **DevTools tiene un inspector de Grid** — F12 → Elements → selecciona el contenedor grid → aparece un icono "grid" al lado, click → ve las líneas y áreas en pantalla.
* **`grid-template-areas` requiere que cada área sea un rectángulo** (no formas L o T). Si necesitas eso, usa `grid-column-start/end` manual.
