# Clase 03 – CSS Grid: esencial, intermedio y `grid-template-areas`

## 🎯 Objetivo General

Dominar CSS Grid en 3 niveles (esencial mobile-first + intermedio + areas) sobre 2 páginas nuevas de tu landing — y construir el criterio claro de cuándo usar Grid vs Flex.

---

## 💡 ¿Cuándo Grid? ¿Cuándo Flex?

* **Grid** → layouts **2D**: filas Y columnas controladas simultáneamente.
* **Flex** → layouts **1D**: una sola dirección a la vez.
* **Heurística memorable:** **"Grid 2D, Flex 1D"**.

> En C02 vieron Flex profundo. Hoy ven Grid en profundidad. Saldrán con criterio para decidir cualquier layout futuro.

---

## 🔗 Antes de Grid: nav multi-página + icono FAQ

Hoy tu landing pasa de ser **1 archivo** a ser **3 páginas** (`index.html`, `precios.html`, `faq.html`).

### Rutas relativas + icono para FAQ:

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

* **`href="precios.html"`** → archivo en la misma carpeta. Es la forma estándar.
* **Icono SVG + `aria-label`** → patrón moderno para enlaces utilitarios (FAQ, ayuda, perfil).
* Mismo nav, repetido en las 3 páginas (copy-paste consciente). Frameworks lo resuelven con componentes — ahí llegarás.

---

## 🧬 Parte 1: Grid básico mobile-first

### Móvil — solo `display: grid` (1 columna por defecto)

```css
.planes {
  display: grid;
  gap: 24px;
}
```

* Sin declarar `grid-template-columns`, **el grid usa 1 columna por defecto** — perfecto para móvil.
* No necesitas escribir nada para el caso móvil más allá de activar Grid.

### Desktop — media queries explícitas

```css
@media (min-width: 640px) {
  .planes { grid-template-columns: 1fr 1fr; }   /* tablet: 2 cols */
}

@media (min-width: 1024px) {
  .planes { grid-template-columns: 1fr 1fr 1fr 1fr; }  /* desktop: 4 cols */
}
```

* `1fr` = "1 fracción del espacio disponible".
* `1fr 1fr 1fr 1fr` → 4 columnas iguales (4 planes Free/Starter/Pro/Enterprise).

### Atajo con `repeat()`:

```css
grid-template-columns: repeat(4, 1fr);   /* equivale a 1fr 1fr 1fr 1fr */
```

`repeat()` es **azúcar sintáctica** — brilla con 5, 10, 12 columnas iguales.

**Aplicado a:** `precios.html` — 4 cards en grid responsive.

---

## 🧠 Parte 1.B: Grid intermedio — `auto-fit` + `minmax` (cantidad variable)

```css
.logos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
}
```

* **`auto-fit`** → "ajusta cuántas columnas caben SOLO".
* **`minmax(150px, 1fr)`** → mínimo 150px, máximo 1 fracción.

**Resultado:** el grid se adapta al ancho **SIN media queries**.

> 💡 **¿Cuándo cada uno?** Media queries explícitas cuando la cantidad es fija (4 planes). `auto-fit + minmax` cuando la cantidad puede variar (logos, items de DB).

**Aplicado a:** sección "Marcas que confían" de `precios.html` — 6+ logos donde la cantidad puede crecer.

---

## ⭐ Parte 2: `grid-template-areas` — el feature distintivo

```css
.faq-layout {
  display: grid;
  grid-template-areas:
    "header header"
    "nav    main"
    "footer footer";
  grid-template-columns: 200px 1fr;
}

.faq-layout header  { grid-area: header; }
.faq-nav            { grid-area: nav; }
.faq-main           { grid-area: main; }
.faq-layout footer  { grid-area: footer; }
```

* Dibujas el layout con NOMBRES como ASCII art.
* Cada string = una fila. Cada palabra = una columna.
* **Flex NO puede hacer esto.** Esto solo Grid.

**Aplicado a:** `faq.html` — sidebar de categorías + main de preguntas.

---

## 🔮 Parte 2.B: Mobile-first declarativo con areas

```css
/* BASE: móvil — todo apilado */
.faq-layout {
  display: grid;
  grid-template-areas:
    "header"
    "nav"
    "main"
    "footer";
  grid-template-columns: 1fr;
}

/* TABLET+ (≥640px): T invertida */
@media (min-width: 640px) {
  .faq-layout {
    grid-template-areas:
      "header header"
      "nav    main"
      "footer footer";
    grid-template-columns: 200px 1fr;
  }
}
```

> Cambiar el layout entre breakpoints es **declarativo** con `grid-template-areas`. Literalmente dibujas el nuevo layout.

---

## 📊 Tabla: Grid vs Flex

| Caso | Usa |
|---|---|
| Navbar (logo + enlaces) | Flex (1D) |
| Galería que envuelve | Flex con wrap, o Grid auto-fit |
| Grilla de cards con cantidad fija | Grid `repeat(N, 1fr)` con media queries |
| Grilla con cantidad variable | Grid `auto-fit + minmax` |
| Layout 2D con regiones nombradas | **Grid areas** (Flex no puede) |
| Un solo elemento distinto del resto | Flex `align-self` |

---

## ✨ Logros Adicionales

### WhatsApp con mensaje por plan

* Botón en `precios.html` que abre WhatsApp con el plan seleccionado pre-llenado.

### Grid muy avanzado (Code 301)

* `subgrid`, `grid-auto-flow: dense`, posicionamiento manual con `grid-column-start/end`.
* No lo aplicas hoy — solo conoces que existe.

---

## 🤔 Discusión Final

* ¿Cuál de los 3 niveles de Grid te resultó más útil?
* ¿En qué parte del landing decidirías usar `grid-template-areas`?
* ¿Cuándo prefieres media queries explícitas vs `auto-fit + minmax`?

> **Reflexión:**
>
> * "Grid 2D, Flex 1D" — repítela hasta que se vuelva instinto.
> * El próximo dev que vea tu código va a entender la decisión solo si TÚ la entiendes primero.
