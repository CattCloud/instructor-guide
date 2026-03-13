# Lab 06: Diseño Web Responsive + DevTools

> 🚀 **Proyecto del Módulo:** MyLinks - Tu Hub Personal en la Web
>
> 📌 **Este lab:** Transformar MyLinks en un sitio que se adapta a cualquier pantalla.

## 🎯 Objetivos del Lab

1. Inspeccionar y modificar CSS en tiempo real con Chrome DevTools
2. Aplicar unidades relativas (`rem`, `%`, `vh/vw`) para crear layouts flexibles
3. Crear media queries para adaptar el diseño a móvil y desktop

---

## 🔑 Conceptos Clave

- **Responsive** - Diseño que se adapta automáticamente a diferentes tamaños de pantalla
- **Media Query** - Regla CSS que aplica estilos solo cuando se cumple una condición (ej: ancho mínimo)
- **rem** - Unidad relativa al tamaño de fuente del elemento raíz (generalmente 16px)
- **Viewport** - El área visible de una página web en el navegador

---

## ⚙️ Setup Inicial

Este lab continúa el trabajo de la Clase 05. Verifica que tengas todo listo:

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | Repositorio MyLinks clonado | Carpeta `mylinks` existe en tu computadora |
| ☐ | Al menos un commit hecho | `git log --oneline` muestra tu commit |
| ☐ | HTML personalizado | Tu nombre aparece en `index.html` |
| ☐ | Google Chrome instalado | Puedes abrir Chrome y presionar F12 |

> ⚠️ Si no completaste el lab anterior, hazlo antes de continuar.

**Para comenzar:**

```bash
cd ~/Documents/bootcamp/mylinks
code .
```

---

## Parte 1: Explorando Chrome DevTools (30 min)

### 1.1 Abre tu Proyecto con Live Server

1. En VS Code, haz clic derecho en `index.html`
2. Selecciona **"Open with Live Server"**
3. Tu navegador se abrirá mostrando tu MyLinks

### 1.2 Abre DevTools

Presiona `F12` (o `Ctrl+Shift+I` en Windows, `Cmd+Option+I` en Mac).

Se abrirá un panel con muchas pestañas. Por ahora nos interesan:

| Pestaña | Para qué sirve |
|---------|----------------|
| **Elements** | Ver y editar HTML y CSS en tiempo real |
| **Console** | Ver errores y mensajes (útil más adelante) |
| **Device Mode** | Simular diferentes dispositivos |

### 1.3 Inspecciona un Elemento

1. En DevTools, haz clic en el ícono de cursor (esquina superior izquierda del panel) o presiona `Ctrl+Shift+C`
2. Pasa el mouse sobre tu nombre en la página
3. Haz clic en él

Verás:
- A la izquierda: el HTML del elemento seleccionado
- A la derecha: los estilos CSS aplicados

### 1.4 Modifica CSS en Tiempo Real

Con tu nombre seleccionado, encuentra el panel de estilos (Styles) a la derecha.

Prueba agregar estilos directamente:
1. Haz clic en el espacio vacío dentro de `element.style {}`
2. Escribe: `color: red`
3. Presiona Enter

¡Tu nombre cambió de color! Estos cambios son **temporales**—al refrescar la página, desaparecen.

> 💡 **Tip:** DevTools es perfecto para experimentar con estilos antes de escribirlos en tu archivo CSS.

### 1.5 Activa el Modo Responsive

1. En DevTools, haz clic en el ícono de dispositivos (parece un teléfono y tablet juntos) o presiona `Ctrl+Shift+M`
2. Arriba de tu página verás un menú desplegable con dispositivos

Prueba seleccionar:
- **iPhone SE** - Pantalla pequeña (375px)
- **iPad Air** - Tablet (820px)
- **Responsive** - Puedes arrastrar los bordes para cualquier tamaño

### 1.6 Observa el Problema

Con tu MyLinks en vista de iPhone:

- ¿Se ve bien tu contenido?
- ¿Los textos son legibles?
- ¿Los enlaces son fáciles de tocar?

Probablemente hay cosas que mejorar. Eso haremos en las siguientes partes.

✅ **Checkpoint:** DevTools está abierto, puedes inspeccionar elementos, y ves tu página en modo móvil (iPhone SE).

---

## Parte 2: Unidades Relativas (35 min)

### 2.1 El Problema con Píxeles Fijos

Abre `styles.css` y observa los valores. Probablemente verás cosas como:

```css
/* Ejemplo de valores fijos (problemático) */
h1 {
    font-size: 48px;
    margin-bottom: 20px;
}

.container {
    width: 800px;
    padding: 40px;
}
```

Estos valores fijos funcionan en tu laptop, pero en un teléfono de 375px de ancho, un contenedor de 800px se sale de la pantalla.

### 2.2 Introduce `rem` para Tipografía

`rem` es relativo al tamaño de fuente raíz (por defecto 16px en la mayoría de navegadores).

| Valor en rem | Equivalente en px |
|--------------|-------------------|
| 1rem | 16px |
| 1.5rem | 24px |
| 2rem | 32px |
| 3rem | 48px |

Actualiza tu CSS para usar `rem`:

```css
h1 {
    font-size: 2.5rem;    /* Era: 48px, ahora ~40px pero escalable */
    margin-bottom: 1rem;  /* Era: 20px, ahora ~16px pero escalable */
}

.bio {
    font-size: 1rem;      /* Tamaño base legible */
    line-height: 1.5;     /* Espaciado entre líneas (sin unidad = relativo) */
}
```

> 💡 **¿Por qué rem?** Si el usuario cambia el tamaño de fuente en su navegador (accesibilidad), todo tu diseño escala proporcionalmente.

### 2.3 Introduce Porcentajes para Anchos

Para que el contenedor se adapte al ancho disponible:

```css
.container {
    width: 90%;           /* Ocupa 90% del ancho disponible */
    max-width: 600px;     /* Pero nunca más de 600px */
    margin: 0 auto;       /* Centrado horizontal */
    padding: 2rem;        /* Espacio interno en rem */
}
```

Esta combinación de `width: 90%` + `max-width` es un patrón muy común:
- En móvil: ocupa casi todo el ancho (90%)
- En desktop: se limita a 600px y queda centrado

### 2.4 Introduce `vh` para Altura

`vh` = viewport height (1vh = 1% de la altura de la ventana)

```css
.hero {
    min-height: 100vh;    /* Mínimo: toda la altura de la ventana */
    display: flex;
    flex-direction: column;
    justify-content: center;
}
```

> ⚠️ **Cuidado:** No uses `height: 100vh` en contenedores con mucho contenido—puede cortar el texto. Usa `min-height` en su lugar.

### 2.5 Actualiza tu CSS

Aplica estos cambios a tu `styles.css`. Aquí hay una estructura base:

```css
/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: /* tu fuente aquí */;
    font-size: 1rem;
    line-height: 1.6;
    /* tus colores aquí */
}

.container {
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    min-height: 100vh;

    /* Centra el contenido verticalmente */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.bio {
    font-size: 1rem;
    margin-bottom: 2rem;
    text-align: center;
}

.link {
    display: block;
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    text-decoration: none;
    text-align: center;
    border-radius: 0.5rem;
    /* tus colores aquí */
}
```

### 2.6 Prueba en DevTools

1. Guarda tu CSS (`Ctrl+S`)
2. En Chrome, el Live Server debería refrescar automáticamente
3. Abre DevTools (`F12`) y activa modo responsive
4. Arrastra el borde para cambiar el ancho

Tu diseño debería adaptarse suavemente sin "romperse".

✅ **Checkpoint:** Tu MyLinks usa `rem` para texto y `%` para anchos. El contenido se adapta al cambiar el tamaño de la ventana.

---

## Parte 3: Media Queries (35 min)

### 3.1 ¿Qué es una Media Query?

Una media query aplica estilos **solo cuando se cumple una condición**:

```css
/* Estos estilos SOLO se aplican si el ancho es 768px o más */
@media (min-width: 768px) {
    .container {
        /* estilos para pantallas más anchas */
    }
}
```

### 3.2 Mobile-First: La Estrategia

Hay dos enfoques:

| Enfoque | Estilos base para... | Media queries para... |
|---------|---------------------|----------------------|
| Desktop-first | Desktop | Pantallas más pequeñas (`max-width`) |
| **Mobile-first** | Móvil | Pantallas más grandes (`min-width`) |

**Usaremos mobile-first** porque:
- Es más fácil agregar complejidad que quitarla
- La mayoría del tráfico es móvil
- Te obliga a priorizar contenido

### 3.3 Breakpoints Comunes

| Breakpoint | Dispositivo típico |
|------------|-------------------|
| 576px | Teléfonos grandes (landscape) |
| 768px | Tablets |
| 992px | Laptops |
| 1200px | Desktops grandes |

Para MyLinks, usaremos **un solo breakpoint: 768px** (suficiente para diferenciar móvil de desktop).

### 3.4 Crea tu Primera Media Query

Al final de tu `styles.css`, agrega:

```css
/* ========================================
   RESPONSIVE: Tablets y Desktop (768px+)
   ======================================== */

@media (min-width: 768px) {

    .container {
        /* En pantallas grandes, podemos usar más espacio */
        max-width: 500px;
    }

    h1 {
        /* Título más grande en desktop */
        font-size: 2.5rem;
    }

    .link {
        /* Efecto hover solo en desktop (móvil no tiene hover) */
        transition: transform 0.2s ease;
    }

    .link:hover {
        transform: scale(1.02);
    }
}
```

### 3.5 Entiende el Orden

Los estilos se aplican en orden:

1. Primero: tus estilos base (para móvil)
2. Después: los estilos dentro de `@media (min-width: 768px)` **sobrescriben** si la pantalla es 768px o más

```css
/* MÓVIL (base): */
h1 {
    font-size: 2rem;
}

/* DESKTOP (sobrescribe si >= 768px): */
@media (min-width: 768px) {
    h1 {
        font-size: 2.5rem;  /* Este gana en desktop */
    }
}
```

### 3.6 Verifica con DevTools

1. Abre DevTools y modo responsive
2. Pon el ancho en **600px** (móvil)
   - Inspecciona `h1` → debería ser `font-size: 2rem`
3. Cambia a **900px** (desktop)
   - Inspecciona `h1` → debería ser `font-size: 2.5rem`
4. Pasa el mouse sobre un enlace en desktop → debería escalar ligeramente

### 3.7 Personaliza tu Media Query

Piensa qué más podría cambiar entre móvil y desktop:

```css
@media (min-width: 768px) {

    /* ¿Más espacio entre elementos? */
    .link {
        margin-bottom: 1.25rem;
    }

    /* ¿Foto de perfil más grande? */
    .profile-img {
        width: 150px;
        height: 150px;
    }

    /* ¿Bio con ancho máximo para legibilidad? */
    .bio {
        max-width: 400px;
    }
}
```

### 3.8 Commit tu Progreso

¡Hiciste cambios importantes! Guárdalos en Git:

```bash
git add .
git status
git commit -m "feat: agregar diseño responsive con media queries"
git push
```

✅ **Checkpoint:** Tu MyLinks tiene una media query que cambia estilos en 768px. El hover funciona solo en desktop.

---

## Logros Adicionales (Opcional)

Si terminaste antes, intenta estos desafíos:

### 🟢 Segundo Breakpoint

Agrega otro breakpoint para pantallas muy grandes (1200px+). ¿Qué cambiarías?

```css
@media (min-width: 1200px) {
    /* Tu código aquí */
}
```

### 🟡 Orientación del Dispositivo

Investiga cómo detectar si el dispositivo está en landscape:

```css
@media (orientation: landscape) {
    /* Estilos para modo horizontal */
}
```

### 🔴 Tema Oscuro Automático

Investiga `prefers-color-scheme` para detectar si el usuario prefiere modo oscuro:

```css
@media (prefers-color-scheme: dark) {
    /* Estilos para modo oscuro */
}
```

---

## Resumen de Conceptos

### Unidades Relativas

| Unidad | Relativa a... | Uso común |
|--------|--------------|-----------|
| `rem` | Tamaño fuente raíz (16px) | Tipografía, espaciado |
| `%` | Elemento padre | Anchos de contenedor |
| `vh` | Altura del viewport | Secciones de altura completa |
| `vw` | Ancho del viewport | Elementos que escalan con pantalla |

### Media Queries (Mobile-First)

```css
/* Base: móvil */
.elemento {
    font-size: 1rem;
}

/* 768px+: tablet/desktop */
@media (min-width: 768px) {
    .elemento {
        font-size: 1.25rem;
    }
}
```

---

## 📝 Entrega

📦 **Entregable:**

1. **Screenshots** de tu MyLinks mostrando:
   - Vista móvil (375px) en DevTools
   - Vista desktop (1024px) en DevTools

2. **URL de tu repositorio** con el commit de diseño responsive

**Verificación rápida antes de entregar:**
- [ ] Usas `rem` para tamaños de texto
- [ ] Usas `%` o `max-width` para anchos
- [ ] Tienes al menos una media query funcionando
- [ ] El hover en enlaces solo aparece en desktop
- [ ] Commit "responsive" visible en GitHub
