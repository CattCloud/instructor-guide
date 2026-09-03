> 📦 **Módulo 1:** Clase 3 de 4

# Clase 03: CSS Grid — esencial, intermedio y `grid-template-areas`

## Resumen
En esta clase profundizas en **CSS Grid** sobre 2 páginas nuevas de tu landing (`precios.html` y `faq.html`), todo **mobile-first real** (arrancan en ~400px y agregan media queries inmediatamente). Cubres 3 niveles: Grid básico mobile-first (móvil con solo `display: grid` + media queries explícitas para tablet/desktop con `1fr 1fr 1fr 1fr`), Grid intermedio (`auto-fit` + `minmax` aplicado a la sección "Marcas que confían" donde la cantidad de items varía) y el feature distintivo de Grid: **`grid-template-areas`** (layouts 2D con regiones nombradas que Flex NO puede hacer). Cierra con un criterio claro de cuándo usar Grid vs Flex.

## Estructura sugerida

| **Fase** | **Duración** | **Descripción** |
| --- | --- | --- |
| **1. Introducción y contexto**  | 15 min  | Demo: el mismo layout 2D resuelto solo con Grid (areas) — Flex no puede limpio. |
| **2. Parte 1 – `precios.html` con Grid básico + intermedio** | 50 min  | Actualizar nav del `index.html` con rutas relativas (`href="precios.html"`, `href="faq.html"`) y reemplazar el último enlace por un **icono SVG** para FAQ. Crear `precios.html` con 4 planes (Free / Starter / Pro / Enterprise). Móvil con solo `display: grid` (1 col por defecto) + media queries para tablet (2 cols) y desktop (`1fr 1fr 1fr 1fr` → `repeat(4, 1fr)`). Sección final "Marcas que confían" con `auto-fit + minmax`. |
| **3. Parte 2 – `grid-template-areas` en `faq.html`** | 35 min  | Layout con áreas nombradas mobile-first: móvil apilado, media query 640px reorganiza en T invertida (header + sidebar nav + main + footer). |
| **4. Parte 3 – Criterio Grid vs Flex** | 15 min  | Tabla resumen + heurística "Grid 2D, Flex 1D" + verificación final con screenshots. |
| **5. Cierre y Síntesis** | 15 min  | Revisión de retos, validación visual, entrega. |


---

## 📌 Preparación para la clase

> Antes de llegar a clase, piensa en estas preguntas y conversa con tus compañeros si lo deseas:

#### 🧠 Lista de Mitos y Verdades para Analizar
1. "CSS Grid reemplaza totalmente la necesidad de Flexbox"
2. "Grid no es todavía una tecnología estable y confiable para proyectos en producción"
3. "Usar `display: grid;` garantiza automáticamente que tu sitio sea responsive"
4. "`repeat(auto-fit, minmax(...))` reemplaza completamente las media queries en cualquier caso"
5. "`grid-template-areas` es lo mismo que escribir `grid-template-columns` y `grid-template-rows`"
6. "Para layouts simples, Grid es demasiado complejo y no vale la pena"
7. "Combinar Grid y Flexbox en un mismo proyecto genera confusión y no es recomendable"

> **Identifica** cuáles crees que son mitos y cuáles son verdades. Prepárate para justificar tus respuestas con evidencia de lecturas o experiencias.

#### 📚 Recursos sugeridos

1. **"Guía Completa de CSS Grid" en CSS-Tricks**
   [https://css-tricks.com/snippets/css/complete-guide-grid/](https://css-tricks.com/snippets/css/complete-guide-grid/){:target="_blank"}

2. **"Aprendiendo CSS Grid" (MDN Web Docs)**
   [https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout){:target="_blank"}

3. **"Grid by Example" (Rachel Andrew)**
   [https://gridbyexample.com](https://gridbyexample.com){:target="_blank"}

---

## Resultados esperados

Al concluir la Clase 03, habrás construido 2 páginas reales de tu landing con CSS Grid en sus 3 niveles, y tendrás criterio claro para decidir entre Grid y Flex en cualquier proyecto.

### Podrán hacer
1. **Enlazar múltiples páginas HTML** con rutas relativas (`href="precios.html"`, `href="faq.html"`) y reemplazar enlaces utilitarios por iconos SVG con `aria-label`.
2. **Aplicar Grid básico mobile-first**: en móvil solo `display: grid` (1 columna por defecto) + media queries que añaden columnas (`1fr 1fr 1fr 1fr` y `repeat(4, 1fr)`).
3. **Aplicar Grid intermedio**: `repeat(auto-fit, minmax(150px, 1fr))` para grids con cantidades variables (logos, items de DB), sin media queries.
4. **Aplicar `grid-template-areas`** mobile-first: layouts 2D con regiones nombradas que cambian declarativamente entre breakpoints.

### Podrán explicar
1. **Cuándo usar Grid vs Flexbox**: la heurística "Grid 2D, Flex 1D" + tabla de casos.
2. **Por qué `grid-template-areas` es el feature distintivo de Grid**: Flex no puede definir regiones 2D nombradas.
3. **Cuándo usar media queries explícitas (`.planes`) vs `auto-fit + minmax` (`.logos`)** según si la cantidad de items es fija o variable.

### Podrán implementar
1. **`precios.html` con 4 planes** (Free / Starter / Pro / Enterprise) responsivos con 3 breakpoints (1 col → 2×2 → 4 cols), más una sección "Marcas que confían" con `auto-fit + minmax`.
2. **`faq.html` con layout 2D** (sidebar + main + header + footer) usando áreas nombradas.
3. **Reorganización del layout en breakpoints** con `grid-template-areas` distintas en móvil vs desktop.

## Glosario de Nuevos Términos

- **Ruta relativa**: enlace que apunta a otro archivo de tu proyecto (`href="precios.html"`) sin necesidad de URL completa.
- **`aria-label`**: atributo de accesibilidad que describe el propósito de un enlace o botón a los lectores de pantalla — esencial cuando el contenido visible es solo un icono.
- **Grid Container**: Elemento padre que establece el contexto de grid en sus elementos hijos.
- **Grid Item**: Cada elemento hijo directo dentro de un contenedor de grid.
- **Fraction (`fr`)**: Unidad de Grid que representa una fracción del espacio disponible.
- **`repeat(N, 1fr)`**: crea N columnas iguales.
- **`auto-fit`**: ajusta automáticamente cuántas columnas caben en el ancho disponible.
- **`minmax(min, max)`**: define el rango de tamaño de una columna (ej. `minmax(250px, 1fr)`).
- **`grid-template-areas`**: dibuja el layout con nombres como ASCII art. Cada string es una fila; cada palabra una columna.
- **`grid-area`**: asigna un elemento a un área nombrada del grid.
