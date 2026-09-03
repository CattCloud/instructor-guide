# Laboratorio 02: CSS Layout con Flexbox

¡Bienvenido al segundo laboratorio de la Landing Page de tu **producto**! En este paso, aplicarás **CSS Flexbox** para organizar visualmente la estructura de tu página, partiendo de lo básico (`display: flex`, `gap`, `justify-content`, `align-items`) y avanzando hacia herramientas profesionales (`flex-wrap`, `flex-grow`, `flex-basis`) que vas a usar en cada proyecto del curso.

> 🎯 **Continuidad del M1:** sigues trabajando sobre el **mismo producto** que elegiste en C01 (sub-paso 0). Adapta todos los textos, secciones y ejemplos de este lab a tu producto — los snippets de código son referenciales.

---

### 🌟 Objetivos de Aprendizaje

* Aplicar normalización CSS con `box-sizing: border-box` y reset de márgenes.
* Aplicar Flexbox básico (`display: flex`, `gap`, `justify-content`, `align-items`) a nav, hero y footer.
* Aplicar Flexbox avanzado (`flex-wrap`, `flex-grow`, `flex-basis`) para grillas de tarjetas y galerías.
* Construir un layout responsivo con **3 breakpoints** (móvil / tablet / escritorio) usando estrategia mobile-first.

### 🔑 Conceptos Clave

* **Normalización CSS**: reset universal con `* { margin: 0; padding: 0; box-sizing: border-box }`.
* **`box-sizing: border-box`**: padding y border NO suman al ancho declarado.
* **Flexbox básico**: `display: flex`, `gap`, `justify-content`, `align-items`.
* **Flexbox avanzado**: `flex-wrap`, `flex-grow`, `flex-basis`.
* **Mobile-first**: estilos base son móvil; las media queries crecen con `min-width`.

---

## Parte 1 – Estilos base + Flexbox básico aplicado a la landing (~50 min)

> Antes de meter Flexbox, dejamos el CSS base limpio. Después aplicamos Flexbox básico sobre los 3 elementos que ya tiene el landing de C01: **nav**, **hero** (con imagen) y **footer** (con iconos de redes sociales).

### 1.1 Normalización CSS y `box-sizing: border-box`

Abre `styles.css` y al **inicio** del archivo agrega el bloque de normalización:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  line-height: 1.5;
  color: #1a1a1a;
}
```

> 💡 **¿Qué hace `box-sizing: border-box`?** Por defecto, el navegador suma `padding` y `border` al ancho que declaras. Si pones `width: 200px` con `padding: 20px`, el elemento mide 240px reales. Con `box-sizing: border-box`, el ancho declarado **incluye** padding y border — `width: 200px` siempre mide 200px. Es el "reset universal" del frontend moderno: simplifica TODO el cálculo de layouts.


### 1.2 Flexbox básico en el `<nav>`

Aplica los 4 verbos esenciales de Flexbox al nav:

```css
header nav {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
```

* **`display: flex`** activa Flexbox en el contenedor.
* **`gap: 1rem`** separa cada enlace.
* **`justify-content: space-between`** distribuye los enlaces horizontalmente.
* **`align-items: center`** los alinea verticalmente en el centro.

✅ **Checkpoint:** los enlaces del nav están alineados en una fila horizontal con espacio entre ellos.

### 1.3 Estilos a los enlaces del nav

Por defecto, el navegador subraya todos los `<a>` y los pinta de azul. En un nav profesional, queremos los enlaces **sin subrayado**, con color sólido del tema y un peso de letra que destaque:

```css
nav a {
  text-decoration: none;
  color: #1a1a1a;
  font-weight: 700;
}
```

* **`text-decoration: none`** quita el subrayado default.
* **`color: #1a1a1a`** usa el color de tu tema (mismo que el body).
* **`font-weight: 700`** los hace bold para que destaquen.

✅ **Checkpoint:** los enlaces del nav se ven como texto bold negro, sin subrayado, claramente clickeables.

### 1.4 Flexbox básico en el hero (con la imagen heredada de C01)

El hero ya tiene `<h1>`, `<p>` y `<img>` (lo agregaste en C01 P3.1). Hoy lo organizas con Flexbox.

> 💡 **Mobile-first**: vamos a empezar definiendo el estado **móvil** del hero (texto y imagen apilados verticalmente) como base. En la Parte 3 agregaremos un media query que lo cambie a horizontal en pantallas grandes. Es la estrategia profesional moderna.

```css
#hero {
  display: flex;
  flex-direction: column;     /* base: apilado en móvil */
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  text-align: center;
}

#hero img {
  max-width: 100%; /*Puedes medir lo que tú quieras (tu tamaño nativo), PERO tu tope máximo permitido es el 100% de tu padre*/
  height: auto;
}
```

✅ **Checkpoint:** el hero muestra el título, párrafo e imagen apilados verticalmente, centrados. Aunque tu pantalla sea ancha, por ahora se ve apilado — eso es el comportamiento móvil por defecto. En P3 lo haremos lado a lado en desktop.

### 1.5 Flexbox básico en el `<footer>` (con los iconos sociales heredados de C01)

El footer ahora tiene `<p>Contacto:...</p>` + 3 enlaces sociales con iconos SVG (Facebook, Instagram, LinkedIn — los agregaste en C01 P3.2). Hoy lo distribuyes con Flexbox: contacto a la izquierda, iconos a la derecha.

```css
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  gap: 1rem;
  background: #f5f5f5;
}

footer a {
  display: inline-flex;
  align-items: center;
}
```

> 💡 **`display: inline-flex` en los enlaces del footer**: hace que cada `<a>` se comporte como inline (en la línea del texto) pero internamente alinee su contenido con Flexbox. Útil cuando un enlace contiene un icono + texto, o solo un icono.

✅ **Checkpoint:** el footer muestra el contacto a la izquierda y los iconos a la derecha, con buen padding.

### 1.6 Flexbox aplicado al formulario de contacto (heredado de C01 P4)

En C01 P4 construiste un formulario accesible dentro de `<section id="contacto">` con campos `nombre`, `email`, `mensaje` y un botón Enviar. Hoy lo estilizas con Flexbox para que se vea profesional: labels e inputs apilados verticalmente, con espacio uniforme y centrado.

```css
#contacto {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

#contacto form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

#contacto label {
  font-weight: 600;
}

#contacto input {
  padding: 0.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font: inherit;
}

#contacto button {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #1a1a1a;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
}
```

Explicación de las decisiones Flexbox:

* **`#contacto` con `flex-direction: column; align-items: center`** centra el form horizontalmente en la página.
* **`#contacto form` con `flex-direction: column; gap: 0.5rem`** apila labels e inputs verticalmente con un espacio uniforme. **Sin Flexbox**, tendrías que usar `margin-bottom` en cada elemento — más código, menos consistente.
* **`max-width: 400px`** evita que el form se estire en pantallas anchas (legibilidad).
* **`font: inherit`** en el input hereda la tipografía del body (sin esto, los inputs usan la fuente fea del navegador).

✅ **Checkpoint Parte 1:** El landing se ve "ordenado" — el nav distribuido con enlaces sin subrayado, el hero apilado y centrado, el footer con contacto e iconos balanceados, y el formulario centrado con labels e inputs claramente apilados.

🏆 **Reto autónomo:**
- Agrega una segunda fila al footer con un mini-enlace "Términos y Condiciones" y "Política de Privacidad" usando Flexbox interno. Pista: convierte el footer en `flex-direction: column` o agrega una `<div>` debajo con su propio Flexbox.

---

## Parte 2 – Flexbox avanzado: `flex-wrap`, `flex-grow`, `flex-basis` (~40 min)

> Las 3 propiedades de los **hijos** del flex container que separan a un dev novato de uno sólido. Vas a aplicarlas para que el logo "empuje" al menú y para transformar la sección Características en una grilla profesional.

### 2.1 `flex-grow` aplicado al logo del nav

En C01 P2 creaste el nav con 3 enlaces: Inicio, Producto, Contacto. Ahora vas a **agregar un primer enlace al inicio** que actúe como logo (con el nombre de tu producto) y lo vas a marcar con `class="logo"`.

Modifica el `<nav>` de `index.html` agregando el logo como **primer enlace**:

```html
<nav>
  <a href="#" class="logo">Mi Producto</a>   <!-- NUEVO: nombre de tu producto -->
  <a href="#">Inicio</a>
  <a href="#">Producto</a>
  <a href="#">Contacto</a>
</nav>
```

> 💡 Reemplaza `"Mi Producto"` con el nombre real del producto que elegiste en C01 sub-paso 0.

Luego agrega la regla CSS:

```css
header nav .logo {
  flex-grow: 1;
}
```

* **`flex-grow: 1`** hace que el logo absorba todo el espacio sobrante del contenedor, empujando al resto del menú al borde derecho.
* Es el **patrón estándar de navbars en producción** — observa cualquier sitio profesional (GitHub, Notion, Spotify Web), el logo siempre está a la izquierda y el menú a la derecha.

✅ **Checkpoint:** el logo ocupa el espacio disponible, los demás enlaces quedan alineados al borde derecho.

### 2.2 Sección "Características" → grilla de tarjetas con `flex-wrap` + `flex-basis`

En C01, la sección Características era un `<ul>` con `<li>` simples. Hoy la transformas en una grilla de tarjetas con iconos — patrón que vas a usar en CADA landing page profesional.

**Paso A — HTML.** En `index.html`, ubica la sección Características de C01 (`<section><h2>Características</h2><ul>...</ul></section>`) y **modifícala así**:

1. Agrega `id="caracteristicas"` al `<section>`.
2. Reemplaza el `<ul>` con `<li>`s por un `<div class="cards">` con 3 `<article class="card">`.

Resultado final:

```html
<section id="caracteristicas">
  <h2>Características</h2>
  <div class="cards">
    <article class="card">
      <img src="img/icono-1.svg" alt="" width="48" height="48">
      <h3>Título de característica 1</h3>
      <p>Descripción breve adaptada a tu producto.</p>
    </article>
    <article class="card">
      <img src="img/icono-2.svg" alt="" width="48" height="48">
      <h3>Título de característica 2</h3>
      <p>Descripción breve adaptada a tu producto.</p>
    </article>
    <article class="card">
      <img src="img/icono-3.svg" alt="" width="48" height="48">
      <h3>Título de característica 3</h3>
      <p>Descripción breve adaptada a tu producto.</p>
    </article>
  </div>
</section>
```

**Paso B — Descarga 3 iconos SVG.** Ve a [SVG Repo](https://www.svgrepo.com){:target="_blank"} y descarga 3 iconos relevantes a tu producto (mismo patrón que aprendiste en C01 P3.2). Guárdalos como `img/icono-1.svg`, `img/icono-2.svg`, `img/icono-3.svg`.

**Paso C — CSS con `flex-wrap` + `flex-basis` + `flex-grow`:**

```css
#caracteristicas {
  padding: 2rem;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 16px;
}

.card {
  flex-basis: 280px;
  flex-grow: 1;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fff;
}
```

Explicación de cada propiedad nueva:

* **`flex-wrap: wrap`** → permite que las tarjetas **bajen a una nueva línea** cuando no caben en el contenedor. Sin esto, se aplastarían en una sola fila.
* **`flex-basis: 280px`** → cada tarjeta tiene un **tamaño base** de 280px. Si el contenedor mide 900px, caben 3 (3 × 280 = 840, más gaps). Si mide 600px, caben 2 (la tercera baja).
* **`flex-grow: 1`** → si después de colocar las tarjetas sobra espacio, las tarjetas **crecen para llenarlo** (no quedan huecos). Sin esto, quedaría hueco al borde derecho.

✅ **Checkpoint Parte 2:** 3 tarjetas alineadas en pantalla ancha; al achicar el viewport del navegador (sin DevTools todavía), las tarjetas se reorganizan: 3 → 2 → 1 columna.

🏆 **Reto autónomo:**
- Hacer que las tarjetas tengan un efecto sutil al pasar el mouse: `transform: translateY(-4px)` + `box-shadow`. Pista: usa `:hover` con `transition`.

---

## Parte 3 – Responsividad con 3 breakpoints: móvil / tablet / escritorio (~30 min)

> Vamos a hacer el landing **realmente responsivo** con la estrategia profesional moderna: **mobile-first**. Los estilos base son para móvil; las media queries añaden estilos al **crecer** la pantalla.

### 3.1 Galería de imágenes con `flex-wrap`

Agrega al final del `<main>` una sección galería:

```html
<section id="galeria">
  <h2>Galería</h2>
  <div class="galeria">
    <img src="img/g1.jpg" alt="Vista 1 del producto">
    <img src="img/g2.jpg" alt="Vista 2 del producto">
    <img src="img/g3.jpg" alt="Vista 3 del producto">
    <img src="img/g4.jpg" alt="Vista 4 del producto">
  </div>
</section>
```

Y el CSS base (móvil) usando `flex-wrap`:

```css
#galeria {
  padding: 2rem;
}

.galeria {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.galeria img {
  max-width: 100%;
  flex-grow: 1;
  height: auto;
  border-radius: 4px;
}
```

### 3.2 Mobile-first con 3 breakpoints

Tus estilos base (los que escribiste en Parte 1 y Parte 2) ya son el comportamiento **móvil**: hero apilado, tarjetas con `flex-basis: 280px` (que naturalmente caen a 1 columna en pantallas pequeñas), galería con `width: 100%`.

Ahora agregas al **final** de tu `styles.css` los media queries que **modifican** ese comportamiento al crecer la pantalla:

```css
/* ===== TABLET (640px en adelante) ===== */
@media (min-width: 640px) {
  .galeria img {
    width: 48%;   /* 2 imágenes por fila (el ~4% restante absorbe el gap) */
  }
}

/* ===== ESCRITORIO (1024px en adelante) ===== */
@media (min-width: 1024px) {
  #hero {
    flex-direction: row;       /* hero lado a lado (sobrescribe column de P1.4) */
    text-align: left;
  }
  #hero img {
    max-width: 50%;             /* la imagen no ocupa todo el ancho en desktop */
  }
  .galeria img {
    width: 23%;                  /* 4 imágenes por fila */
  }
}
```

> 💡 **¿Por qué mobile-first?** El 60%+ del tráfico web es móvil. Si tus estilos base son móvil y la pantalla CRECE, **agregar** estilos es natural. Si fuera al revés (desktop-first), tendrías que "quitar" estilos en cada media query — más complicado de mantener.


### 3.3 Verificación en DevTools — los 3 niveles

1. Abre DevTools (F12) y activa modo responsive (icono de móvil arriba a la izquierda de DevTools).
2. Arrastra el ancho del viewport para verificar los 3 niveles:

| Viewport | Qué debes ver |
|---|---|
| **<640px (móvil)** | Hero apilado (texto arriba, imagen abajo); tarjetas en 1 columna; galería en 1 columna |
| **640–1023px (tablet)** | Hero apilado todavía; tarjetas en 2 columnas; galería en 2 columnas |
| **≥1024px (escritorio)** | Hero lado a lado; tarjetas en 3 columnas; galería en 4 columnas |


✅ **Checkpoint Parte 3:** los 3 screenshots muestran transiciones limpias en cada breakpoint. Sin scroll horizontal en ningún tamaño.

🏆 **Reto autónomo:**
- Agrega una pequeña descripción textual (`<figcaption>` o `<p>`) debajo de cada imagen de la galería. Cada imagen + su texto deben mantenerse agrupados en una "tarjetita" usando Flexbox interno. Pista: envuelve cada `<img>` en una `<figure>` con `display: flex; flex-direction: column`.

---

## ⭐️ Logros adicionales

### 🏆 Logro 1: Sección de Testimonios

* Agrega una sección "Testimonios" con 2-3 opiniones en tarjetas.
* Usa `display: flex; flex-wrap: wrap` (mismo patrón que las tarjetas de Características).
* En desktop, los testimonios van en fila; en móvil, en columna.

### 🏆 Logro 2: Microinteracciones con CSS

* Agrega transiciones suaves en botones e imágenes.
* Usa `transform`, `transition` y `:hover` para crear microinteracciones (botón que sube ligeramente, imagen que crece al pasar mouse).

---

## 📝 Instrucciones de Entrega

* Publica la página en GitHub Pages.
* Entrega:
  * URL del repositorio
  * URL del despliegue en GitHub Pages

---

## 💡 Tips Finales

* **`gap` reemplaza al hack viejo de `margin`** — úsalo siempre en Flexbox moderno.
* **Comenta tus media queries** — `/* ===== TABLET ===== */` te salva tiempo cuando revisas en 6 meses.
* **`box-sizing: border-box` al inicio** — sin esto, los porcentajes + padding desbordan inesperadamente.
* Valida tu HTML en [W3C Validator](https://validator.w3.org/){:target="_blank"}.
* Prueba siempre en DevTools modo responsive ANTES de pushear.
