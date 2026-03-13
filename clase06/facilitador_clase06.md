# Guía del Facilitador - Clase 06: Diseño Web Responsive + DevTools

> Tiempo de lectura: 8 minutos | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Responsive Design**: Diseño que se adapta automáticamente a diferentes tamaños de pantalla.
- **DevTools**: Herramientas de desarrollo integradas en el navegador para inspeccionar y modificar código en vivo.
- **Media Query**: Regla CSS que aplica estilos condicionalmente según características del dispositivo.
- **Unidades Relativas**: Valores que escalan proporcionalmente (`rem`, `%`, `vh/vw`) en lugar de ser fijos (`px`).
- **Mobile-First**: Estrategia de diseño que comienza por la versión móvil y escala hacia arriba.

---

## 🔗 Analogías Útiles

**DevTools <> Rayos X para sitios web:**
Así como un doctor usa rayos X para ver dentro del cuerpo sin abrirlo, DevTools te permite ver "dentro" de cualquier sitio web—su HTML, CSS, y cómo se comporta—sin tener acceso al código fuente original.

**Media Queries <> Termostato inteligente:**
Un termostato inteligente ajusta la temperatura según las condiciones: si hace frío, calienta; si hace calor, enfría. Una media query hace lo mismo con los estilos: si la pantalla es pequeña, aplica estos estilos; si es grande, aplica otros.

**Unidades relativas <> Recetas con proporciones:**
Cuando una receta dice "2 partes de harina por 1 de agua", funciona si haces un pan pequeño o uno grande. Las unidades relativas funcionan igual: `2rem` siempre será el doble del tamaño base, sin importar la pantalla.

**Mobile-first <> Empacar para un viaje:**
Es más fácil empacar lo esencial primero y agregar extras si tienes espacio, que llenar la maleta y luego sacar cosas. Mobile-first empieza con lo esencial (móvil) y agrega complejidad para pantallas más grandes.

---

## 📚 Contexto Histórico

### Responsive Web Design: El artículo que cambió la web

El 25 de mayo de 2010, Ethan Marcotte publicó un artículo en A List Apart que revolucionaría el desarrollo web para siempre.

Marcotte acuñó el término "responsive web design" tres semanas antes, en una conferencia llamada An Event Apart en Seattle. Su charla, titulada "A Dao of Flexibility", mostró cómo crear layouts que se adaptaban a cualquier dispositivo usando tres ingredientes: grids fluidos, imágenes flexibles y media queries.

Mandy Brown, editora de A List Apart, se acercó a él después de la charla y le dijo: "Eso necesita ser un artículo." Tres semanas después, el artículo estaba publicado y cambió la industria para siempre.

Lo que hizo especial al artículo fue que combinó teoría y práctica de forma elegante. Las media queries ya existían, pero Marcotte mostró código real que los desarrolladores podían copiar y adaptar inmediatamente.

> **Para contar en clase:** "Antes de 2010, las empresas creaban DOS sitios web: uno para desktop (www.sitio.com) y otro para móvil (m.sitio.com). Mantener dos sitios era costoso y propenso a errores. Un solo artículo cambió eso."

### CSS Media Queries: Una década en desarrollo

Las media queries fueron propuestas por primera vez en 1994 por Håkon Wium Lie en su propuesta inicial de CSS, pero no llegaron a CSS 1.

El primer borrador público se publicó en 2001. Once años después, el 19 de junio de 2012, CSS Media Queries Level 3 se convirtió en una recomendación oficial del W3C—solo el cuarto módulo de CSS3 en alcanzar ese estatus.

La especificación tardó tanto porque resolver el problema de múltiples dispositivos era complejo. Había dos enfoques compitiendo: CC/PP (centrado en el servidor) y media queries (centrado en el navegador). Las media queries ganaron porque eran más simples y no requerían configuración del servidor.

> **Para contar en clase:** "Las media queries tardaron 11 años desde el primer borrador hasta convertirse en estándar oficial. Hoy las usamos sin pensarlo, pero hubo años de debate sobre cómo deberían funcionar."

### Chrome DevTools: De Firebug al estándar

Antes de que existieran las herramientas de desarrollo integradas, los desarrolladores dependían de Firebug, una extensión de Firefox creada en 2006 por Joe Hewitt.

Firebug fue revolucionario: permitió por primera vez inspeccionar, editar y depurar el DOM directamente en el navegador. Fue tan influyente que todos los navegadores modernos terminaron integrando funcionalidades similares.

Chrome lanzó con DevTools integradas desde el primer día en 2008, basándose en las herramientas de WebKit (el motor de Safari). En 2017, Mozilla discontinuó Firebug en favor de sus propias herramientas integradas.

> **Para contar en clase:** "Firebug cambió la forma en que desarrollamos para la web. Antes, depurar CSS era un infierno de `alert()` y prueba-error. Hoy damos por sentado poder inspeccionar cualquier elemento."

**Fuentes:** [10 Years of Chrome DevTools](https://blog.chromium.org/2018/09/10-years-of-chrome-devtools.html){:target="_blank"}, [Responsive Web Design - A List Apart](https://alistapart.com/article/responsive-web-design/){:target="_blank"}, [Media Queries - W3C](https://www.w3.org/standards/history/mediaqueries-3/){:target="_blank"}

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "El teléfono de un extraño"

Abre cualquier sitio popular (Amazon, Wikipedia) en tu laptop y muéstralo en pantalla. Luego abre el mismo sitio en tu teléfono y pásalo por el salón.

> "Miren este sitio en mi laptop. Ahora miren el mismo sitio en mi teléfono. ¿Es el mismo HTML? ¿El mismo CSS? ¿Cómo sabe el sitio que estoy en un teléfono?"

**Dinámica sugerida:**
```
Facilitador: "¿Alguien quiere adivinar cómo lo hace?"
(Dejar que especulen)
Facilitador: "El navegador le dice al CSS el tamaño de la pantalla. Y el CSS tiene reglas que dicen: 'si la pantalla es pequeña, haz esto'. Esas reglas se llaman media queries."
```

### Dinámica 2: "Inspecciona tu sitio favorito"

Pide a los estudiantes que abran su sitio web favorito y usen DevTools para cambiar algo visible (color de fondo, tamaño de texto).

> "Tienen 2 minutos. Abran cualquier sitio, presionen F12, y cambien algo. El color del logo, el tamaño del título, lo que sea. El que haga el cambio más gracioso gana."

Esta dinámica logra dos cosas: pierden el miedo a DevTools, y entienden que los cambios son temporales.

### Dinámica 3: "El viewport challenge"

Proyecta MyLinks de un estudiante voluntario. Activa el modo responsive y ve reduciendo el ancho mientras el grupo observa.

> "Vamos a reducir la pantalla poco a poco. Griten '¡ROTO!' cuando algo se vea mal."

```
Facilitador: (reduciendo de 1200px a 375px lentamente)
Estudiantes: "¡ROTO!" (cuando algo se sale o se ve mal)
Facilitador: "¿Qué se rompió? ¿Por qué? ¿Cómo lo arreglarían?"
```

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: El problema de los píxeles fijos

**Cuándo usarlo:** Al explicar por qué necesitamos unidades relativas.

```css
/* MAL: Valores fijos */
.container {
    width: 800px;    /* Se sale en pantallas de 375px */
    font-size: 24px; /* Demasiado grande en móvil */
    padding: 40px;   /* Desperdicia espacio en móvil */
}

/* BIEN: Valores relativos */
.container {
    width: 90%;
    max-width: 600px;
    font-size: 1rem;
    padding: 2rem;
}
```

**Tip de facilitación:** Muestra esto EN VIVO con DevTools. Pon `width: 800px`, activa modo móvil, y deja que vean el scroll horizontal. Luego cambia a `width: 90%` y observa cómo se adapta.

### Ejemplo 2: Media query mobile-first

**Cuándo usarlo:** Al introducir media queries por primera vez.

```css
/* PASO 1: Estilos base (móvil) */
h1 {
    font-size: 1.5rem;
}

/* PASO 2: Estilos para pantallas más grandes */
@media (min-width: 768px) {
    h1 {
        font-size: 2.5rem;
    }
}
```

**Tip de facilitación:** Escribe esto en vivo. Primero solo el `h1` base, guarda, muestra en móvil. Luego agrega la media query, guarda, y muestra cómo cambia al pasar de 767px a 768px.

### Ejemplo 3: El patrón ancho flexible

**Cuándo usarlo:** Al explicar `width` + `max-width`.

```css
.container {
    width: 90%;       /* Flexible: ocupa 90% del espacio disponible */
    max-width: 600px; /* Pero nunca más de 600px */
    margin: 0 auto;   /* Centrado cuando hay espacio sobrante */
}
```

**Tip de facilitación:** Dibuja en el pizarrón dos rectángulos: uno de 375px (móvil) y uno de 1200px (desktop). Muestra cómo el contenedor ocupa 90% en móvil pero se limita a 600px en desktop.

### Ejemplo 4: Hover solo en desktop

**Cuándo usarlo:** Para explicar por qué mobile-first importa para interacciones.

```css
.link {
    background: blue;
    transition: transform 0.2s;
}

/* El hover SOLO tiene sentido en desktop */
@media (min-width: 768px) {
    .link:hover {
        transform: scale(1.05);
    }
}
```

**Tip de facilitación:** Pregunta: "¿Qué pasa si ponemos hover en móvil?" Respuesta: nada útil, porque en móvil no hay cursor. Los estados hover son para mouse.

---

## ⚠️ Errores Comunes

| Señal | Qué está pasando | Qué hacer |
|-------|------------------|-----------|
| "F12 no hace nada" | Probablemente en Mac | Usar `Cmd + Option + I` en Mac |
| "Mis cambios desaparecieron" | Refrescó la página | Explicar que DevTools es temporal. Cambios reales van en el archivo CSS |
| Scroll horizontal en móvil | Elemento con ancho fijo mayor que viewport | Buscar `width: XXXpx` y cambiar a `%` o `max-width` |
| Media query no funciona | Orden incorrecto o breakpoint mal escrito | Verificar sintaxis: `@media (min-width: 768px)` con paréntesis |
| "rem no cambia nada" | Confusión sobre el valor base | Explicar que `1rem = 16px` por defecto. `2rem = 32px`. |
| Estilos se sobrescriben raro | Media query antes de estilos base | En mobile-first, la media query va AL FINAL del archivo |

---

## 🎯 Checkpoints de Validación

| Minuto | Checkpoint | Cómo validar |
|--------|------------|--------------|
| 20 | DevTools abierto | Todos tienen F12/DevTools visible con modo responsive activo |
| 45 | Inspección funcionando | Pueden seleccionar un elemento y ver su CSS en el panel derecho |
| 70 | Unidades relativas aplicadas | Su CSS usa `rem` para texto y `%` para anchos |
| 100 | Media query funcionando | Al cambiar de 600px a 900px en DevTools, algo visible cambia |
| 120 | Commit subido | `git log --oneline` muestra commit con "responsive" en el mensaje |

---

## 🔗 Conexión con la Próxima Clase

Al cerrar, planta la semilla para wireframing:

> "Hoy hicieron que su código se adapte a cualquier pantalla. Pero... ¿cómo deciden QUÉ debe cambiar? ¿Cómo planifican un diseño antes de escribir código? La próxima clase aprenderemos a DIBUJAR antes de codear. Se llama wireframing, y es cómo los diseñadores profesionales piensan antes de abrir VS Code."

**Tarea implícita:** Pídeles que durante la semana observen sitios que usan mucho (Instagram, YouTube, su banco) en móvil Y desktop. ¿Qué cambia? ¿Qué desaparece? ¿Qué se reorganiza?
