# Laboratorio 01: HTML5 Semántico, Accesibilidad y Formularios

¡Bienvenido al primer laboratorio de la Landing Page de tu **producto**! En este paso inicial, vamos a construir la base de tu sitio web usando HTML5 semántico, buenas prácticas de accesibilidad y un formulario de contacto correctamente etiquetado.

### 🎯 Objetivos de Aprendizaje

* Construir una estructura semántica con etiquetas correctas.
* Aplicar principios básicos de accesibilidad.
* **Integrar imágenes e iconos SVG** en una página web descargados de bancos abiertos.
* Construir un formulario de contacto accesible con `<form>`, `<label for>` e `<input>`.
* Verificar la navegación por teclado de la landing.

### 🔑 Conceptos Clave

* **Etiquetas semánticas**: `<header>`, `<main>`, `<nav>`, `<section>`, `<footer>` y su función en la estructura de la página.
* **Accesibilidad (A11y)**: Texto alternativo (`alt`), jerarquía de encabezados, roles ARIA, `aria-label`.
* **Imágenes e iconos en web**: `<img>` con archivos `.jpg` (fotos) y `.svg` (iconos escalables). Bancos abiertos: [Unsplash](https://unsplash.com){:target="_blank"}, [Pexels](https://pexels.com){:target="_blank"}, [SVG Repo](https://www.svgrepo.com){:target="_blank"}.
* **Formularios accesibles**: `<form>`, `<label for>`, `<input type>`, `<button type="submit">`, asociación `label↔input` vía `for/id`.

## Parte 1 – Crear estructura base del proyecto

> **Requisitos previos:** Tener Git instalado y una cuenta en GitHub.

### 0. Elige tu producto

Antes de codear, define **sobre qué producto o servicio** va a ser tu landing page. Vas a trabajar sobre el mismo proyecto durante todo el Módulo 1 (4 clases), así que elige algo que te motive — cuanto más concreto, mejor.

Puede ser **real o ficticio**. Algunos ejemplos para destrabarte:

- Una **app** de tu propia idea (organizador de plantas, recetario familiar, agenda de torneos amateurs…).
- Un **negocio familiar** o de alguien cercano (panadería del barrio, taller mecánico, peluquería).
- Un **hobby que quieras monetizar** (clases de guitarra, fotografía de eventos, comida casera por encargo).
- Un **evento** real o ficticio (boda, hackathon, conferencia local, festival de cine).
- Un **servicio profesional** que conozcas (asesoría de impuestos, fisioterapia, diseño de interiores).

En un comentario o nota local, completa:

```
Producto/servicio: _____________
A quién va dirigido (público objetivo): _____________
Propuesta de valor en 1 línea: _____________
```

> 💡 **Por qué importa:** un landing genérico ("Mi producto") se siente plástico y dificulta saber qué describir en el `alt`, qué tono usar, qué imágenes elegir. Con un producto concreto, cada decisión se vuelve obvia. Y al final, lo subes a tu GitHub como portafolio real.

**A partir de este punto**, todos los `<h1>`, `<p>`, imágenes, hashtags y textos del lab los adaptas a tu producto. Las plantillas de código de abajo son **referenciales** — los textos los reemplazas con los tuyos.

---

### 1. Crear el repositorio y clonar localmente

```bash
git init # Si lo creas local
# o
git clone # Si lo creaste en la nube y quieres clonarlo en tu local
```

> 💡 **Tip Pro:** \
> Es una buena idea tener una carpeta `dev` en el home `~` de tu sistema operativo. \
> Dentro de la carpeta `dev` puedes crear una carpeta con el mismo nombre de tu usuario de github. Aquí puedes clonar tus repositorios.
>
> _**Ejemplo**: `~/dev/bdiazc90/product-landing/page`_



### 2. Estructura de carpetas sugerida

```
product-landing-page/
├── index.html
├── css/
│   └── styles.css
├── img/
└── README.md
```

### 3. Contenido base en `index.html`

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi producto</title>
</head>
<body>

</body>
</html>
```

🏆 **Reto autónomo:**
- Agrega un favicon (ícono del sitio) usando una etiqueta `<link>` en el `<head>`. Busca cómo hacerlo usando solo HTML.

---

## Parte 2 – Estructura Semántica de la Landing Page

1. Dentro de `<body>`, agrega las siguientes secciones:

```html
<header>
  <nav>
    <a href="#">Inicio</a>
    <a href="#">Producto</a>
    <a href="#">Contacto</a>
  </nav>
</header>
<main>
  <section id="hero">
    <h1>Nombre del producto</h1>
    <p>Una frase que describa su valor</p>
  </section>
  <section>
    <h2>Características</h2>
    <ul>
      <li>Característica 1</li>
      <li>Característica 2</li>
      <li>Característica 3</li>
    </ul>
  </section>
</main>
<footer>
  <p>Contacto: contacto@miempresa.com</p>
</footer>
```

2. Asegúrate de usar una jerarquía correcta: `<h1>` para el título principal, `<h2>` para subsecciones.

🏆 **Reto autónomo:**
- Agrega una nueva sección llamada “Preguntas Frecuentes” usando etiquetas semánticas. Incluye al menos dos preguntas con sus respuestas.

---

## Parte 3 – Accesibilidad Básica

Hasta ahora tu HTML tiene **texto y estructura**, pero los atributos de A11y (`alt`, `aria-label`) se notan más cuando hay **imágenes** e **iconos** que necesitan describirse para usuarios con lectores de pantalla. Vamos a agregar dos elementos al landing y aplicarles los atributos correspondientes.

### 3.1 Imagen del producto en el hero (con `alt` descriptivo)

Consigue una imagen representativa del producto (puedes descargarla de [Unsplash](https://unsplash.com){:target="_blank"} o [Pexels](https://pexels.com){:target="_blank"} — busca "product mockup" o algo relacionado a tu producto). Guárdala como `img/hero.jpg`.

Agrégala dentro de la sección hero, **debajo** del párrafo:

```html
<section id="hero">
  <h1>Nombre del producto</h1>
  <p>Una frase que describa su valor</p>
  <img src="img/hero.jpg" alt="Mockup del producto sobre un escritorio minimalista">
</section>
```

> 💡 **Regla del `alt`:** describe **lo que la imagen comunica**, no su descripción técnica. *"Mockup del producto sobre escritorio"* es mejor que *"imagen JPG 800x600"*. Si la imagen fuera puramente decorativa (sin información), usarías `alt=""` (vacío).

### 3.2 Iconos de redes sociales en el footer (con `aria-label`)

> 🎓 **Aprendizaje doble:** en este sub-paso aprendes (1) cómo integrar **iconos SVG** descargados de un banco abierto a tu página web — habilidad que vas a usar en cada proyecto del curso — y (2) cómo hacerlos accesibles con `aria-label`.

#### ¿Qué es un SVG y por qué se usa para iconos?

**SVG** (Scalable Vector Graphics) es un formato de imagen basado en código (no en píxeles). Sus ventajas para iconos:

- **Escalable sin perder calidad** — el mismo archivo se ve nítido a 16px o a 256px.
- **Liviano** — un icono SVG pesa menos de 1 KB, vs ~10 KB de un PNG equivalente.
- **Coloreable con CSS** — puedes cambiar su color con `fill` o `color`.

**SVG Repo** ([svgrepo.com](https://www.svgrepo.com){:target="_blank"}) es un banco gratuito de >500,000 iconos SVG con licencias permisivas. Es la fuente de la industria para iconos sin costo.

Los iconos SVG son visualmente claros, pero **no tienen texto** — por eso el lector de pantalla los anuncia como "enlace" sin contexto. Para resolverlo usamos `aria-label` en el `<a>` que los contiene.

#### Sub-pasos

1. Ve a [SVG Repo](https://www.svgrepo.com){:target="_blank"}, busca *"facebook"*, *"instagram"* y *"linkedin"*. Para cada uno: clic en el icono → botón **Download** → guarda como `facebook.svg`, `instagram.svg`, `linkedin.svg` dentro de `img/` de tu proyecto.

2. Agrega al `<footer>` los enlaces con sus iconos:

```html
<footer>
  <p>Contacto: contacto@miempresa.com</p>
  <a href="#" aria-label="Síguenos en Facebook">
    <img src="img/facebook.svg" alt="" width="32" height="32">
  </a>
  <a href="#" aria-label="Síguenos en Instagram">
    <img src="img/instagram.svg" alt="" width="32" height="32">
  </a>
  <a href="#" aria-label="Síguenos en LinkedIn">
    <img src="img/linkedin.svg" alt="" width="32" height="32">
  </a>
</footer>
```

> 💡 **Por qué `alt=""` en el SVG y `aria-label` en el `<a>`:** el icono es decorativo dentro del enlace, así que `alt=""` evita que el lector lo anuncie dos veces. El `aria-label` en el `<a>` es lo que el lector lee: *"Enlace: Síguenos en Facebook"*.

### 3.3 Verifica el orden lógico de tabulación

Cierra el mouse. Presiona `Tab` desde el inicio de la página. El foco debe recorrer en orden:

1. Enlaces del `<nav>` (Inicio, Producto, Contacto)
2. Enlaces sociales del `<footer>` (Facebook → Instagram → LinkedIn)

Si el orden NO es lógico, revisa el orden de los elementos en el HTML — el `tab` sigue el orden del DOM.

🏆 **Reto autónomo:**
- Agrega un 4to icono de red social (TikTok, YouTube o WhatsApp) desde SVG Repo, con su `aria-label` correspondiente.
- Prueba la landing con un lector de pantalla real ([NVDA](https://www.nvaccess.org/){:target="_blank"} en Windows, VoiceOver en Mac) y escucha cómo anuncia los enlaces sociales.

---

## Parte 4 – Formulario de contacto accesible

Vas a agregar a tu landing un **formulario de contacto** real. Es la primera aplicación práctica de A11y: los lectores de pantalla anuncian cada campo solo si está correctamente etiquetado.

1. Antes del `<footer>`, agrega una nueva sección con un formulario:

```html
<section id="contacto">
  <h2>Contáctanos</h2>
  <form>
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre">

    <label for="email">Correo electrónico</label>
    <input type="email" id="email" name="email">

    <label for="mensaje">Mensaje</label>
    <input type="text" id="mensaje" name="mensaje">

    <button type="submit">Enviar</button>
  </form>
</section>
```

2. **Regla de oro:** cada `<input>` tiene un `id` único y cada `<label>` apunta a ese `id` con `for`. Sin esa asociación, el lector de pantalla no anuncia el campo.

3. Verifica:
   - Al hacer clic en el texto del `<label>`, el cursor salta al `<input>` correspondiente (eso confirma que `for/id` están bien).
   - El `<button>` tiene `type="submit"` explícito.

> 💡 **Tip:** El atributo `placeholder` NO reemplaza al `<label>`. El placeholder desaparece al escribir; el label sigue ahí para el lector de pantalla.

🏆 **Reto autónomo:**
- Agrega un campo `<select>` para "Motivo del contacto" con opciones (Consulta, Reclamo, Sugerencia). No olvides su `<label for>`.

---

## ✅ Checkpoint A11y verificable — Navegación por teclado

> **Tiempo estimado: 5 minutos**

1. **Cierra el mouse** y trata de navegar tu landing solo con la tecla `Tab`.
2. El orden de foco debe ser lógico: logo → menú → CTA → secciones de contenido → campos del formulario → botón enviar.
3. En cada paso, debes **ver visualmente** qué elemento está enfocado (el navegador dibuja un contorno).
4. Toma un **screenshot** mostrando el foco visible en al menos 3 elementos distintos (incluyendo al menos un campo del form).

✅ **Listo cuando:** el screenshot muestra navegación por teclado funcional, el orden es lógico y los `<label>` están bien asociados.

---

## ⭐️ Logros adicionales

### 🏆 Logro 1: Modo Oscuro

* Usa variables CSS (`--bg-color`, `--text-color`).
* Agrega un botón que cambie entre modo claro y oscuro.

### 🏆 Logro 2: Microinteracciones

* Agrega transiciones en botones.
* Resalta enlaces al pasar el mouse.

---

## 📝 Instrucciones de Entrega

* README con explicación de estructura semántica y formulario accesible.
* Activar GitHub Pages.
* Entregar:
  * URL del repositorio
  * URL de GitHub Pages
  * Screenshot del checkpoint Tab nav

---

## 💡 Tips finales

* Valida tu HTML en [W3C Validator](https://validator.w3.org/){:target="_blank"}
* Revisa el contraste en [Contrast Checker](https://webaim.org/resources/contrastchecker/){:target="_blank"}
* Prueba tu página con lector de pantalla (VoiceOver, NVDA, ChromeVox)
* Cada `<input>` necesita su `<label for>`. Sin excepciones.
