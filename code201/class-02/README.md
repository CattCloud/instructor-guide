> 📦 **Módulo 1:** Clase 2 de 4

# Clase 02: CSS Layout con Flexbox

## Resumen

En esta clase integramos tres recursos esenciales para consolidar los fundamentos de CSS Layout con Flexbox, manteniendo el enfoque en buenas prácticas de diseño y estructura visual accesible. Nos enfocamos en comprender los principios fundamentales de Flexbox y su impacto en el diseño responsivo y la accesibilidad.

## Estructura sugerida

| **Fase** | **Duración** | **Descripción** |
| --- | --- | --- |
| **1. Introducción y Contexto de la clase** | 15 min | Se plantea el objetivo de hacer accesible un sitio web. Se discuten ejemplos del alcance y poder de la IA en el desarrollo de código. |
| **2. Parte 1 – Configuración del Proyecto y Estilos Base** | 30 min | Organizar carpetas, preparar `styles.css`, aplicar `overflow` si es necesario. Reto: Agregar sección "Términos y Condiciones" en el `footer` usando Flexbox. |
| **3. Parte 2 – Flexbox en Navegación y Secciones** | 60 min | Aplicar `display: flex`, `justify-content`, `align-items`. Organizar menú de navegación y secciones principales. Reto: transformar “Características” en tarjetas con íconos. |
| **4. Parte 3 – Galería de Imágenes y Media Queries** | 60 min | Crear sección “Galería de Imágenes” con `flex-wrap` y `media queries`. Reto: Añadir descripción a cada imagen, agrupando con Flexbox. |
| **5. Síntesis y Cierre** | 15 min | Feedback grupal, revisión de avances y reflexiones finales sobre Flexbox e impacto visual. |

---

## 📌 Preparación para la clase

> Antes de llegar a clase, piensa en estas preguntas y conversa con tus compañeros o una IA si lo deseas:

#### 🧠 Lista de Mitos y Verdades para Analizar

1. Flexbox solo funciona para diseños horizontales.
2. `flex-wrap` permite que los elementos se ajusten automáticamente en múltiples líneas.
3. Con Flexbox, ya no es necesario usar media queries.
4. `justify-content: space-between` distribuye los elementos dejando espacios iguales entre ellos.
5. Flexbox no es adecuado para crear layouts completos.
6. La IA puede generar ejemplos de Flexbox, pero siempre deben validarse.
7. `flex-grow` permite que los elementos crezcan para ocupar espacio adicional.
8. Usar demasiados `<div>` afecta la semántica del documento.
9. Flexbox no funciona bien en navegadores antiguos.
10. La propiedad `align-items` controla la alineación vertical de los elementos.

> **Identifica** cuáles crees que son mitos y cuáles son verdades. Prepárate para justificar tus respuestas con evidencia de lecturas o experiencias.

#### 📚 Artículos sugeridos

- **CSS Flexbox: La Guía Definitiva para Principiantes** 
 [https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Flexbox](https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Flexbox){:target="_blank"}

- **Diseño Web Responsivo con CSS Flexbox** 
 [https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/){:target="_blank"}

---

## Resultados esperados

Al finalizar esta clase, los estudiantes habrán adquirido competencias esenciales para crear layouts flexibles y visualmente coherentes, manteniendo la semántica y accesibilidad del contenido.

### Podrán hacer
1. **Diseñar Layouts Responsivos:** Utilizar Flexbox para organizar contenido, asegurando una visualización adaptativa y ordenada.
2. **Alinear y Distribuir Elementos:** Aplicar propiedades de Flexbox para alinear elementos horizontal y verticalmente.
3. **Mantener la Accesibilidad Visual:** Garantizar el contraste, legibilidad y jerarquía visual en diferentes tamaños de pantalla.

### Podrán explicar
1. **Ventajas de Flexbox:** Justificar por qué Flexbox es una solución eficiente para layouts modernos.
2. **Propiedades Clave:** Describir el uso de propiedades como `justify-content`, `align-items`, `flex-wrap` y `flex-grow`.
3. **Impacto en UX:** Explicar cómo un diseño visual ordenado y adaptable mejora la experiencia del usuario.

### Podrán implementar
1. **Estructura de Contenedores Flexibles:** Aplicar la propiedad `display: flex` para organizar elementos.
2. **Distribución y Alineación:** Utilizar `justify-content` y `align-items` para distribuir espacio y alinear elementos.
3. **Diseños Responsivos:** Adaptar el layout mediante `flex-wrap` y media queries.
4. **Optimización con IA:** Solicitar a la IA ejemplos de estructuras con Flexbox, evaluando y ajustando las sugerencias según las buenas prácticas.

## Glosario de Nuevos Términos
- **Flexbox:** Modelo de diseño de CSS que permite distribuir espacio y alinear elementos en un contenedor de manera flexible.
- **Main axis:** Eje principal definido por la dirección del contenedor (horizontal o vertical).
- **Cross axis:** Eje perpendicular al main axis.
- **justify-content:** Propiedad para alinear elementos a lo largo del main axis.
- **align-items:** Propiedad para alinear elementos a lo largo del cross axis.
- **flex-wrap:** Controla si los elementos deben ajustarse en una sola línea o pueden envolver en múltiples líneas.
- **flex-grow:** Define la capacidad de un elemento para crecer y ocupar espacio adicional.
- **media queries:** Reglas de CSS que permiten aplicar estilos según el tamaño y características del dispositivo.
- **overflow:** Propiedad CSS que controla el comportamiento del contenido que excede los límites de su contenedor.
- **wrapper:** Elemento contenedor utilizado para agrupar otros elementos y facilitar su manipulación y diseño.
