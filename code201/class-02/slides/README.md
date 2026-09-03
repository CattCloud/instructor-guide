# Clase 02 – CSS Flexbox y Layout Responsivo

## 🎯 Objetivo General

Organizar visualmente el contenido de una página web usando **CSS Flexbox**, asegurando accesibilidad y adaptabilidad en diferentes dispositivos.

---

## 💡 ¿Por qué aprender Flexbox?

* Es la herramienta moderna más utilizada para maquetar diseños responsivos.
* Permite controlar alineación, distribución y orden de los elementos con pocas líneas de código.
* Mejora la experiencia visual sin perder accesibilidad.

> "Flexbox es como tener una caja mágica que acomoda todo por ti... si sabes pedirle bien."

---

## 🧠 ¿Qué es Flexbox exactamente?

* Es un **modelo de caja unidimensional**: trabaja en una dirección (horizontal o vertical).
* Se aplica al contenedor (`display: flex`) y controla el comportamiento de sus hijos.
* Ideal para distribución flexible de espacio y alineación de contenido.

> "En lugar de decirle a cada elemento dónde ir, le dices al contenedor cómo acomodarlos."

---

## 🔧 Propiedades principales del contenedor Flex

```css
.container {
  display: flex;
  flex-direction: row;      /* fila o columna */
  justify-content: center;  /* eje principal */
  align-items: center;      /* eje secundario */
  flex-wrap: wrap;          /* salto de línea */
}
```

* **justify-content**: cómo se distribuyen horizontalmente.
* **align-items**: cómo se alinean verticalmente.
* **flex-wrap**: permite que los elementos bajen de línea si no hay espacio.

---

## 🧩 Propiedades comunes de los hijos (items)

```css
.item {
  flex-grow: 1;     /* ocupa espacio disponible */
  flex-shrink: 0;   /* evita que se reduzca */
  flex-basis: 200px;/* ancho base sugerido */
  align-self: flex-start; /* alineación individual */
}
```

* **flex-grow**: cuánto crece el ítem.
* **flex-shrink**: cuánto puede reducirse.
* **flex-basis**: tamaño base del ítem.
* **align-self**: sobreescribe `align-items` para un ítem específico.

---

## 🔢 Parte 1: Estilos Base y Buenas Prácticas

### Recomendaciones:

* Mantén una estructura clara de carpetas.
* Aplica `overflow` para evitar desbordes.
* Evita el uso excesivo de `<div>`, usa etiquetas semánticas.

```css
main {
  overflow-x: auto;
  font-family: sans-serif;
}
```

### Reto:

Agrega al `footer` una sección "Términos y Condiciones" ordenada con Flexbox.

---

## 🔢 Parte 2: Menú y Secciones con Flexbox

### Objetivo:

Aprender a distribuir elementos horizontalmente con `flex`.

```css
header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### Reto:

Convierte "Características" en tarjetas con título, descripción e ícono usando Flexbox.

---

## 🔢 Parte 3: Galería y Media Queries

### Objetivo:

Visualizar imágenes en grilla flexible adaptada a diferentes anchos de pantalla.

```css
.galeria {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
```

### Reto:

Agrega una descripción debajo de cada imagen, manteniendo el bloque unido incluso en pantallas pequeñas.

---

## 🌟 Logros Adicionales

### Testimonios

* Tarjetas de opiniones usando `flex-wrap`
* Adaptabilidad visual

### Microinteracciones

* `transition`, `hover`, `transform` en botones e imágenes
* Aportan dinamismo y profesionalismo

---

## 🧠 Discusión Final

* ¿Flexbox solo funciona para diseños horizontales?
* ¿Flexbox no funciona bien en navegadores antiguos?

> **Reflexiones:**

- ¿Qué curiosidades nuevas te llevas?
- ¿Qué concepto has podido aclarar mejor?
- ¿En qué aspecto sientes que tienes un mayor dominio ahora?
