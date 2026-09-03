# Laboratorio 08: Tailwind CSS — el Gestor cobra vida

En M1 escribiste CSS **a mano** (Flexbox, Grid, variables, media queries). Hoy conoces **Tailwind CSS**: el **mismo CSS**, escrito como **clases utilitarias** directo en el HTML. No es una bestia nueva — es otra notación de lo que ya sabes. Lo aprenderás **por grupos de clases** y lo aplicarás para darle por fin una **interfaz visual moderna y responsiva** al **Gestor de Presupuesto** cuya lógica terminaste en C07.

> ⏱️ **Checkpoints**: 6 momentos de validación (~20, ~50, ~70, ~95, ~125, ~145 min).
>
> 🧠 **Nota:** en P0–P4 estilizas con Tailwind (datos de ejemplo, sin JS). En **P5** conectas el formulario con **JavaScript** —reusando tus clases de C07— para que el Gestor funcione, y con eso **cierras el proyecto del módulo**.

## 🎯 Objetivos de Aprendizaje

1. **Instalar** Tailwind por **CDN** y distinguir **clases-propiedad** de **prefijos-modificador**.
2. **Construir layout** con el grupo de **Flexbox + Grid** (mapeado a C02/C03).
3. **Aplicar** los grupos de **caja** (espaciado/tamaño) y **estética** (tipografía/color/bordes/sombra).
4. **Hacer la UI interactiva-visual y responsiva** con **prefijos** (`hover:`/`focus:` + `sm:`/`md:`/`lg:`), entendiendo **mobile-first**.
5. **Conectar el formulario** con JavaScript para que el Gestor **agregue movimientos y actualice el saldo en vivo**, reusando las clases de C07.

## 🔑 Conceptos Clave

| Concepto | Definición |
|---|---|
| **Utility-first** | Compones el diseño con **muchas clases pequeñas** en el HTML, en vez de escribir reglas en un `.css`. |
| **Clase-propiedad** | 1 clase = 1 propiedad CSS. `text-center` = `text-align: center`. Es el **vocabulario**. |
| **Prefijo-modificador** | Hace que **cualquier** clase se active bajo una condición. `hover:bg-blue-700` (al pasar el mouse), `md:flex` (desde tablet). Es la **gramática**. |
| **Play CDN** | Usar Tailwind con **un solo `<script>`**, sin instalar ni compilar. Ideal para un sitio estático. |
| **Mobile-first** | Las clases base aplican a móvil; los prefijos `md:`/`lg:` **agregan** estilos para pantallas grandes. |

---

## Parte 0 — Tailwind, instalación y el esqueleto (~20 min)

> **Objetivo:** instalar Tailwind, entender los 2 tipos de clase, y pegar el HTML del Gestor **sin estilos** — el lienzo sobre el que iremos pintando por grupos.

### 0.1 Instalación por CDN (1 línea)

Crea `index.html` con el script de Tailwind en el `<head>`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gestor de Presupuesto</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <h1 class="text-2xl font-bold text-center text-blue-600 mt-8">Hola Tailwind 👋</h1>
</body>
</html>
```

Ábrelo: el `<h1>` ya sale grande, negrita, centrado y azul — sin escribir una línea de CSS.

> ⚠️ Usamos **Play CDN** a propósito: este curso es un sitio estático. NO necesitas `npm`, ni `tailwind.config`, ni compilar.

### 0.2 Las dos clases de Tailwind

Toda clase de Tailwind es de uno de **dos tipos**:

1. **Clase-propiedad** → 1 clase = 1 propiedad CSS. El **vocabulario** que construye el look: `text-lg`, `p-4`, `bg-blue-500`, `flex`.
2. **Prefijo-modificador** → hace que una clase-propiedad aplique **bajo una condición**: `hover:bg-blue-700`, `md:flex`. La **gramática**.

> 💡 **Primero el vocabulario, después la gramática.** Hoy: P1–P3 = clases-propiedad (construir el look). P4 = prefijos (estados + responsive). Por eso responsive va al final: necesitas un look base que adaptar.

### 0.3 El mapa de grupos (lo que ya sabes, en Tailwind)

Las partes de **estilado** (P1–P4) son cada una **un grupo de clases**, mapeado al CSS que ya viste (en **P5** conectarás todo con JavaScript):

| Parte | Grupo | Ejemplos |
|---|---|---|
| **P1** | Layout (flex + grid) | `flex`, `justify-between`, `grid`, `grid-cols-2`, `gap-6` |
| **P2** | Caja (espaciado + tamaño) | `p-6`, `mt-4`, `space-y-3`, `w-full`, `max-w-4xl` |
| **P3** | Estética (tipografía, color, bordes/sombra) | `text-lg`, `font-bold`, `bg-white`, `rounded-xl`, `shadow` |
| **P4** | Modificadores (estados + responsive) | `hover:`, `focus:`, `sm:`, `md:`, `lg:` |

### 0.4 Pega el esqueleto del Gestor (sin clases)

Reemplaza el `<body>` por esta estructura **semántica y sin estilos** (datos de ejemplo de C07):

```html
<body>
  <main>
    <header>
      <h1>💰 Gestor de Presupuesto</h1>
      <p>Tu dinero, bajo control.</p>
    </header>

    <section>
      <!-- Tarjeta resumen -->
      <div>
        <h2>Saldo total</h2>
        <p>$3454.50</p>
        <div>
          <div><p>Ingresos</p><p>$3500.00</p></div>
          <div><p>Gastos</p><p>$45.50</p></div>
        </div>
      </div>

      <!-- Tarjeta formulario -->
      <div>
        <h2>Agregar movimiento</h2>
        <form>
          <input type="text" placeholder="Nombre">
          <select><option>Ingreso</option><option>Gasto</option></select>
          <input type="number" placeholder="Monto">
          <button type="submit">Agregar</button>
        </form>
      </div>
    </section>

    <section>
      <h2>Movimientos</h2>
      <ul>
        <!-- datosMovimiento() → "Salario (ingreso): +$3000.00" -->
        <li><span>Salario <span>(ingreso)</span></span> <span>+$3000.00</span></li>
        <li><span>Cena <span>(gasto)</span></span> <span>-$45.50</span></li>
        <li><span>Freelance <span>(ingreso)</span></span> <span>+$500.00</span></li>
      </ul>
    </section>
  </main>
</body>
```

✅ **Checkpoint 0 (~20 min):** Tailwind carga por CDN, distingues clase-propiedad de prefijo-modificador, y ves el esqueleto del Gestor en negro sobre blanco — **feo pero estructurado**. Cada `<li>` muestra el texto que produce `datosMovimiento()` de C07.

---

## Parte 1 — Grupo Layout: Flexbox + Grid (~30 min)

> **Objetivo:** acomodar los bloques en la página. El grupo "pesado" — es C02 (Flexbox) y C03 (Grid), en notación Tailwind.

### 1.1 El grupo

| CSS que ya sabes | Tailwind |
|---|---|
| `display: flex` (C02) | `flex` |
| `justify-content` / `align-items` | `justify-between`, `items-center` |
| `display: grid` (C03) | `grid` |
| `grid-template-columns: 1fr 1fr` | `grid-cols-2` |
| `gap` | `gap-4`, `gap-6` |
| `max-width` + centrado | `max-w-4xl mx-auto` |

### 1.2 Aplícalo al Gestor

Este es tu `<body>` **completo**. Las clases nuevas de esta parte están marcadas con `← P1` — agrégalas solo a esos elementos:

```html
<body>
  <main class="max-w-4xl mx-auto">                          <!-- ← P1: contenedor centrado -->
    <header>
      <h1>💰 Gestor de Presupuesto</h1>
      <p>Tu dinero, bajo control.</p>
    </header>

    <section class="grid grid-cols-2 gap-6">                 <!-- ← P1: 2 columnas + gap -->
      <!-- Tarjeta resumen -->
      <div>
        <h2>Saldo total</h2>
        <p>$3454.50</p>
        <div class="flex gap-4">                             <!-- ← P1: fila ingresos/gastos -->
          <div class="flex-1"><p>Ingresos</p><p>$3500.00</p></div>   <!-- ← P1 -->
          <div class="flex-1"><p>Gastos</p><p>$45.50</p></div>       <!-- ← P1 -->
        </div>
      </div>

      <!-- Tarjeta formulario -->
      <div>
        <h2>Agregar movimiento</h2>
        <form>
          <input type="text" placeholder="Nombre">
          <select><option>Ingreso</option><option>Gasto</option></select>
          <input type="number" placeholder="Monto">
          <button type="submit">Agregar</button>
        </form>
      </div>
    </section>

    <section>
      <h2>Movimientos</h2>
      <ul>
        <li class="flex items-center justify-between"><span>Salario <span>(ingreso)</span></span> <span>+$3000.00</span></li>   <!-- ← P1 (igual en los 3) -->
        <li class="flex items-center justify-between"><span>Cena <span>(gasto)</span></span> <span>-$45.50</span></li>
        <li class="flex items-center justify-between"><span>Freelance <span>(ingreso)</span></span> <span>+$500.00</span></li>
      </ul>
    </section>
  </main>
</body>
```

> 💡 `flex-1` reparte las cajitas en partes iguales; `justify-between` empuja nombre y monto a los extremos — el patrón clásico de fila que hiciste en C02.
>
> ⚠️ Por ahora `grid-cols-2` es **fijo** (2 columnas siempre). En **P4** lo haremos **responsive** (apilado en móvil).

✅ **Checkpoint 1 (~50 min):** la página ya tiene su **disposición**: contenedor centrado, resumen y formulario en 2 columnas, y cada movimiento con el nombre a un lado y el monto al otro. Aún sin aire ni color.

---

## Parte 2 — Grupo Caja: espaciado + tamaño (~20 min)

> **Objetivo:** darle aire y dimensiones. Grupo fácil — 1:1 con el `padding`/`margin`/`width` de M1.

### 2.1 El grupo

| CSS que ya sabes | Tailwind |
|---|---|
| `padding` | `p-6`, `px-4`, `py-8` |
| `margin` | `mt-4`, `mb-6` |
| (separación entre hijos) | `space-y-3` |
| `width` | `w-full` |
| `max-width` / `min-height` | `max-w-4xl`, `min-h-screen` |

> 💡 La escala es fija: `p-2`=8px, `p-4`=16px, `p-6`=24px… No inventas valores, eliges de una escala.

### 2.2 Aplícalo al Gestor

Tu `<body>` completo, **con lo de P1 ya puesto** + las clases nuevas marcadas `← P2`:

```html
<body class="min-h-screen">                                 <!-- ← P2: alto mínimo de pantalla -->
  <main class="max-w-4xl mx-auto px-4 py-8">                 <!-- ← P2: px-4 py-8 -->
    <header class="mb-6">                                    <!-- ← P2: mb-6 -->
      <h1>💰 Gestor de Presupuesto</h1>
      <p>Tu dinero, bajo control.</p>
    </header>

    <section class="grid grid-cols-2 gap-6">
      <!-- Tarjeta resumen -->
      <div class="p-6">                                      <!-- ← P2: relleno de tarjeta -->
        <h2>Saldo total</h2>
        <p class="mt-1">$3454.50</p>                          <!-- ← P2: mt-1 -->
        <div class="flex gap-4 mt-4">                         <!-- ← P2: mt-4 -->
          <div class="flex-1 p-3"><p>Ingresos</p><p>$3500.00</p></div>   <!-- ← P2: p-3 -->
          <div class="flex-1 p-3"><p>Gastos</p><p>$45.50</p></div>       <!-- ← P2: p-3 -->
        </div>
      </div>

      <!-- Tarjeta formulario -->
      <div class="p-6">                                      <!-- ← P2: p-6 -->
        <h2 class="mb-4">Agregar movimiento</h2>             <!-- ← P2: mb-4 -->
        <form class="space-y-3">                              <!-- ← P2: separa los campos -->
          <input type="text" placeholder="Nombre" class="w-full p-2">          <!-- ← P2: w-full p-2 -->
          <select class="w-full p-2"><option>Ingreso</option><option>Gasto</option></select>
          <input type="number" placeholder="Monto" class="w-full p-2">
          <button type="submit" class="w-full p-3">Agregar</button>            <!-- ← P2: w-full p-3 -->
        </form>
      </div>
    </section>

    <section class="mt-6 p-6">                                <!-- ← P2: mt-6 p-6 -->
      <h2 class="mb-4">Movimientos</h2>                        <!-- ← P2: mb-4 -->
      <ul class="space-y-2">                                  <!-- ← P2: separa los <li> -->
        <li class="flex items-center justify-between p-3"><span>Salario <span>(ingreso)</span></span> <span>+$3000.00</span></li>   <!-- ← P2: p-3 (en los 3) -->
        <li class="flex items-center justify-between p-3"><span>Cena <span>(gasto)</span></span> <span>-$45.50</span></li>
        <li class="flex items-center justify-between p-3"><span>Freelance <span>(ingreso)</span></span> <span>+$500.00</span></li>
      </ul>
    </section>
  </main>
</body>
```

✅ **Checkpoint 2 (~70 min):** la página **respira** — las tarjetas tienen relleno, los campos del formulario están separados y la lista ya no está apelmazada. Sigue en blanco y negro.

---

## Parte 3 — Grupo Estética: tipografía + color + bordes/sombra (~25 min)

> **Objetivo:** que se vea bien y **signifique** algo (verde = ingreso, rojo = gasto). Son los conceptos **sencillos** (cada clase = 1 propiedad), por eso van juntos.

### 3.1 El grupo

| CSS que ya sabes | Tailwind |
|---|---|
| `font-size`, `font-weight`, `text-align` | `text-lg`, `text-4xl`, `font-bold`, `text-center` |
| `color` | `text-gray-800`, `text-green-700` |
| `background` (variables C04) | `bg-white`, `bg-green-50`, `bg-blue-600` |
| `border`, `border-radius` (C04) | `border`, `border-gray-300`, `rounded-xl` |
| `box-shadow` (C04) | `shadow`, `shadow-md` |

### 3.2 Aplícalo al Gestor

Tu `<body>` completo, **con lo de P1 y P2 ya puesto** + las clases de estética marcadas `← P3` (es la parte con más cambios, pero todos son del mismo tipo: tipografía, color, bordes, sombra):

```html
<body class="min-h-screen bg-gray-50">                       <!-- ← P3: bg-gray-50 -->
  <main class="max-w-4xl mx-auto px-4 py-8">
    <header class="mb-6">
      <h1 class="text-3xl font-bold text-gray-800">💰 Gestor de Presupuesto</h1>   <!-- ← P3 -->
      <p class="text-gray-500">Tu dinero, bajo control.</p>                         <!-- ← P3 -->
    </header>

    <section class="grid grid-cols-2 gap-6">
      <!-- Tarjeta resumen -->
      <div class="p-6 bg-white rounded-xl shadow">                                  <!-- ← P3: bg-white rounded-xl shadow -->
        <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wide">Saldo total</h2>   <!-- ← P3 -->
        <p class="mt-1 text-4xl font-bold text-gray-800">$3454.50</p>              <!-- ← P3 -->
        <div class="flex gap-4 mt-4">
          <div class="flex-1 p-3 bg-green-50 rounded-lg">                           <!-- ← P3: verde -->
            <p class="text-xs text-green-700">Ingresos</p>                          <!-- ← P3 -->
            <p class="text-lg font-semibold text-green-700">$3500.00</p>            <!-- ← P3 -->
          </div>
          <div class="flex-1 p-3 bg-red-50 rounded-lg">                             <!-- ← P3: rojo -->
            <p class="text-xs text-red-700">Gastos</p>
            <p class="text-lg font-semibold text-red-700">$45.50</p>
          </div>
        </div>
      </div>

      <!-- Tarjeta formulario -->
      <div class="p-6 bg-white rounded-xl shadow">                                  <!-- ← P3 -->
        <h2 class="mb-4 text-lg font-semibold text-gray-800">Agregar movimiento</h2>   <!-- ← P3 -->
        <form class="space-y-3">
          <input type="text" placeholder="Nombre" class="w-full p-2 border border-gray-300 rounded-lg">   <!-- ← P3: border rounded -->
          <select class="w-full p-2 border border-gray-300 rounded-lg"><option>Ingreso</option><option>Gasto</option></select>
          <input type="number" placeholder="Monto" class="w-full p-2 border border-gray-300 rounded-lg">
          <button type="submit" class="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg">Agregar</button>   <!-- ← P3: bg-blue-600 text-white rounded-lg -->
        </form>
      </div>
    </section>

    <section class="mt-6 p-6 bg-white rounded-xl shadow">                            <!-- ← P3 -->
      <h2 class="mb-4 text-lg font-semibold text-gray-800">Movimientos</h2>          <!-- ← P3 -->
      <ul class="space-y-2">
        <!-- ← P3: barrita verde (ingreso) / roja (gasto), texto y montos con color -->
        <li class="flex items-center justify-between p-3 bg-green-50 border-l-4 border-green-500 rounded">
          <span class="text-gray-800"><span class="font-medium">Salario</span> <span class="text-xs text-gray-500">(ingreso)</span></span>
          <span class="font-semibold text-green-700">+$3000.00</span>
        </li>
        <li class="flex items-center justify-between p-3 bg-red-50 border-l-4 border-red-500 rounded">
          <span class="text-gray-800"><span class="font-medium">Cena</span> <span class="text-xs text-gray-500">(gasto)</span></span>
          <span class="font-semibold text-red-700">-$45.50</span>
        </li>
        <li class="flex items-center justify-between p-3 bg-green-50 border-l-4 border-green-500 rounded">
          <span class="text-gray-800"><span class="font-medium">Freelance</span> <span class="text-xs text-gray-500">(ingreso)</span></span>
          <span class="font-semibold text-green-700">+$500.00</span>
        </li>
      </ul>
    </section>
  </main>
</body>
```

> 💡 El **color semántico** (verde ingreso / rojo gasto) es lo mismo que decidiste con variables en C04 — aquí con `bg-green-50` / `text-red-700`.

✅ **Checkpoint 3 (~95 min):** el Gestor se ve **moderno y legible**: tarjetas blancas con sombra y bordes redondeados, saldo grande, y movimientos con color semántico verde/rojo. Pero el botón no reacciona y en móvil se ve apretado.

---

## Parte 4 — Grupo Modificadores: estados + responsive (~30 min)

> **Objetivo:** el concepto nuevo de Tailwind — un **prefijo** cambia **cuándo** aplica una clase. `hover:`/`focus:` según la interacción; `md:` según el ancho de pantalla.
>
> Sobre el `<body>` de P3 solo agregas prefijos en **3 lugares**: el botón (hover), los inputs (focus) y la sección de columnas (responsive).

### 4.1 Estados: `hover:` y `focus:`

Un prefijo de estado activa la clase solo en esa situación (es el `:hover` de C02-C03). Muestro la **clase completa** de cada elemento; lo que agregas en esta parte es solo el final marcado `← P4`:

```html
<!-- BOTÓN — agrega: hover:bg-blue-700 transition -->
<button type="submit" class="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">Agregar</button>

<!-- los 2 <input> y el <select> — agrega: focus:outline-none focus:ring-2 focus:ring-blue-500 -->
<input type="text" placeholder="Nombre" class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
```

* `hover:bg-blue-700` = al pasar el mouse cambia el fondo; `transition` lo hace suave.
* `focus:ring-2 focus:ring-blue-500` = anillo azul al enfocar (accesibilidad).

### 4.2 Responsive: `sm:` / `md:` / `lg:` (mobile-first)

Un prefijo responsive activa la clase **desde cierto ancho en adelante**. Es la media query de C02, en notación corta. La clave: **las clases SIN prefijo son la base (móvil); el prefijo AGREGA para pantallas grandes.**

```html
<!-- ANTES (P1): 2 columnas siempre, apretado en móvil -->
<section class="grid grid-cols-2 gap-6">

<!-- AHORA: base = 1 columna (móvil); desde tablet (md) = 2 columnas -->
<section class="grid grid-cols-1 md:grid-cols-2 gap-6">
```

> 💡 **Esto es mobile-first de verdad** (como C02/C03): la base `grid-cols-1` es el móvil; `md:grid-cols-2` mejora el desktop. El look que armaste en P1–P3 **ya era el móvil** — solo le agregas el desktop.

### 4.3 Verifica responsive

En DevTools (modo responsive):
- **Móvil (<768px):** resumen y formulario **apilados**, lista a ancho completo.
- **Escritorio (≥768px):** resumen y formulario **lado a lado**.

✅ **Checkpoint 4 (~125 min):** el botón reacciona al hover, los inputs muestran anillo de foco, y la página **se adapta**: apilada en móvil, en 2 columnas en escritorio. **El Gestor tiene cara y es responsivo.**

---

## Parte 5 — Conectar el Gestor (~20 min)

> **Objetivo:** que el formulario **funcione**. Hasta ahora la página es una maqueta estilizada; con unas líneas de JavaScript la conectas a tus clases `Movimiento` y `Presupuesto` de C07 y el Gestor cobra vida. Con esto **cierras el proyecto del módulo**.

### 5.1 Prepara el HTML

Agrega un `id` a los elementos que el JS va a leer/escribir, y `value` a las opciones del `<select>`. Y deja el `<ul>` de movimientos **vacío** (ahora lo llena el JS, así que borra las 3 filas de ejemplo):

```html
<!-- en la tarjeta resumen: agrega id al saldo -->
<p id="saldo" class="mt-1 text-4xl font-bold text-gray-800">$3454.50</p>

<!-- el formulario: id al form, a cada campo, y value en las opciones -->
<form id="form-mov" class="space-y-3">
  <input id="nombre" type="text" placeholder="Nombre" class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
  <select id="tipo" class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
    <option value="ingreso">Ingreso</option>
    <option value="gasto">Gasto</option>
  </select>
  <input id="monto" type="number" placeholder="Monto" class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
  <button type="submit" class="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">Agregar</button>
</form>

<!-- la lista: id y VACÍA (el JS la genera) -->
<ul id="lista" class="space-y-2"></ul>
```

Y antes de `</body>`, carga tus clases de C07 + un `app.js` nuevo:

```html
<script src="oop-objects.js"></script>   <!-- class Movimiento y Presupuesto, de C07 -->
<script src="app.js"></script>
```

### 5.2 Escribe `app.js`

```javascript
const form  = document.getElementById('form-mov');
const lista = document.getElementById('lista');
const presupuesto = new Presupuesto();

// Movimientos de ejemplo (antes estaban escritos a mano en el HTML)
presupuesto.agregar(new Movimiento('Salario', 'ingreso', 3000));
presupuesto.agregar(new Movimiento('Cena', 'gasto', 45.50));
presupuesto.agregar(new Movimiento('Freelance', 'ingreso', 500));

// Construye el <li> de un movimiento (mismo estilo que armaste en P3)
function liHTML(m) {
  const ingreso = m.esIngreso();
  const caja  = ingreso ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500';
  const texto = ingreso ? 'text-green-700' : 'text-red-700';
  const signo = ingreso ? '+' : '-';
  return `<li class="flex items-center justify-between p-3 border-l-4 rounded ${caja}">
            <span class="text-gray-800"><span class="font-medium">${m.nombre}</span> <span class="text-xs text-gray-500">(${m.tipo})</span></span>
            <span class="font-semibold ${texto}">${signo}$${m.valor.toFixed(2)}</span>
          </li>`;
}

// Pinta la lista y el saldo desde el Presupuesto
function render() {
  lista.innerHTML = presupuesto.movimientos.map(liHTML).join('');
  document.getElementById('saldo').textContent = '$' + presupuesto.saldo().toFixed(2);
}

// Al enviar el formulario: crea el movimiento, lo agrega y re-pinta
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const tipo   = document.getElementById('tipo').value;
  const valor  = parseFloat(document.getElementById('monto').value);
  presupuesto.agregar(new Movimiento(nombre, tipo, valor));
  render();
  e.target.reset();
});

render();   // pinta los ejemplos al cargar
```

> 💡 Fíjate que **reusas todo lo de C07**: `new Movimiento(...)`, `presupuesto.agregar(...)`, `m.esIngreso()`, `presupuesto.saldo()`. El JavaScript de hoy es solo el "cable" entre el formulario y tu modelo.

### 5.3 Pruébalo

1. Carga la página: ves los 3 movimientos de ejemplo y el saldo, **generados por el JS**.
2. Llena el formulario (ej. *Bono · Ingreso · 800*) y dale **Agregar**.
3. La fila aparece **al instante** con su color, el **saldo se actualiza** y el formulario se limpia.

✅ **Checkpoint 5 (~145 min):** cada envío del formulario crea una instancia de `Movimiento`, la suma al `Presupuesto`, y la lista + el saldo se actualizan solos. **El Gestor funciona — el módulo cierra con una app real.**

🏆 **Reto autónomo:** haz que las cajitas **Ingresos** y **Gastos** del resumen también se actualicen en cada `render()` (mismo patrón: `id` + `textContent` con `presupuesto.totalIngresos()` / `presupuesto.totalGastos()`).

---

## ⭐ Logros Adicionales

- **Logro 1 — Modo oscuro:** prefijo `dark:` (ej. `dark:bg-gray-800`). Otro modificador, como `hover:` y `md:`.
- **Logro 2 — Micro-animación:** `transition hover:scale-105` en las tarjetas.
- **Logro 3 — Badge de categoría:** a cada movimiento, `<span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">comida</span>`.

---

## 📝 Instrucciones de Entrega

1. **`index.html`** con el Gestor completo estilizado con Tailwind (CDN), construido por grupos.
2. **Entrega:** URL del repo + URL de GitHub Pages + captura en móvil y en escritorio.
