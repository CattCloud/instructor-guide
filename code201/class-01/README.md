📦 **Módulo 1:** Clase 1 de 4

# Clase 01: HTML5 Semántico, Accesibilidad y Formularios

## Resumen

En esta clase se introducen los fundamentos de **HTML5 semántico**, **accesibilidad web (A11y)** y **formularios accesibles**, estableciendo las bases para construir interfaces inclusivas desde el inicio del desarrollo. A través de una guía de lectura y debate, los estudiantes confrontan mitos comunes sobre la semántica, exploran buenas prácticas de accesibilidad y aprenden a construir formularios accesibles que serán la base de cualquier app real.

Posteriormente, en el laboratorio, implementan una estructura web semántica accesible, utilizando etiquetas adecuadas, atributos ARIA, jerarquías de encabezado y un **formulario de contacto** correctamente etiquetado y navegable por teclado.

---

## Estructura sugerida

| **Fase**   | **Duración** | **Descripción** |
| --- | --- | --- |
| **1. Introducción y Contexto de la clase** | 15 min | Se plantea el objetivo de hacer accesible un sitio web. Se introduce el rol de los formularios como aplicación natural de la accesibilidad. |
| **2. Parte 1**   | 30 min | Crear la estructura base del proyecto recordando Git y Github. |
| **3. Parte 2**   | 40 min | Debate y ejercicios sobre aplicar estructura Semántica a la Landing Page. |
| **4. Parte 3**   | 25 min | Debate y ejercicios sobre Atributos de accesibilidad Básica. |
| **5. Parte 4**   | 35 min | Construcción de un formulario de contacto accesible (`<form>`, `<label for>`, `<input>`). |
| **6. Síntesis + Checkpoint Tab nav**  | 15 min | Verificación con navegación por teclado, feedback y reflexiones. |

---

## 📌 Preparación para la clase

> Antes de la clase, reflexiona sobre el rol que tiene la semántica y la accesibilidad desde la primera línea de código, y por qué los formularios son la primera prueba real de A11y. El objetivo es fomentar criterios, no repetir definiciones.

#### 🧠 Preguntas reflexivas

* ¿Por qué debería importarte la accesibilidad al comenzar un nuevo proyecto web?
* ¿Cómo crees que afecta la estructura semántica al posicionamiento y mantenimiento de una página?
* ¿Cuál es la diferencia entre etiquetar un `<input>` con `placeholder` y con `<label for>`?
* ¿A quién excluyes si ignoras buenas prácticas de accesibilidad?


#### 🧠 Lista de Mitos y Verdades para Analizar

1. Usar `<div>` para cada sección del sitio es la mejor forma de estructurar una página.
2. Un `placeholder` en un `<input>` reemplaza al `<label>` cuando el campo es corto.
3. Colocar texto alternativo (`alt`) en imágenes solo sirve para mejorar el resultado en la búsqueda de Google.
4. Solo las personas con discapacidad visual se benefician de los sitios accesibles.
5. Un buen uso de HTML5 semántico hace el proyecto más mantenible y promueve la colaboración entre desarrolladores.

> **Identifica** cuáles crees que son mitos y cuáles son verdades. Prepárate para justificar tus respuestas con evidencia de lecturas o experiencias.

#### 📚 Artículos sugeridos
- **HTML Semántico: Qué Es y Cómo Usarlo Correctamente**
  [https://es.semrush.com/blog/html-semantico/](https://es.semrush.com/blog/html-semantico/){:target="_blank"}

- **Introducción a la Accesibilidad (W3C)**
  [https://www.w3.org/WAI/fundamentals/accessibility-intro/es](https://www.w3.org/WAI/fundamentals/accessibility-intro/es){:target="_blank"}

- **Formularios accesibles (MDN)**
  [https://developer.mozilla.org/es/docs/Learn/Forms/Basic_native_form_controls](https://developer.mozilla.org/es/docs/Learn/Forms/Basic_native_form_controls){:target="_blank"}

---

## Resultados esperados

Al finalizar esta clase, el estudiante será capaz de:

* Construir una estructura HTML semántica básica.
* Implementar atributos y roles de accesibilidad fundamentales (ARIA).
* Redactar y aplicar texto alternativo en imágenes.
* Construir un formulario de contacto accesible con `<form>`, `<label for>`, `<input type="text/email">` y `<button type="submit">`.
* Organizar jerarquías de encabezado que favorezcan la navegación con lectores de pantalla.
* Verificar la accesibilidad de su landing navegando solo con la tecla `Tab`.

---

## Glosario de Nuevos Términos

* **A11y**: Abreviatura de "accessibility". Prácticas para que productos digitales sean utilizables por todos.
* **ARIA**: Atributos que mejoran la accesibilidad en aplicaciones web complejas.
* **Alt text**: Descripción textual de una imagen para usuarios con discapacidad visual.
* **Screen reader**: Software que convierte texto digital en audio para navegar sitios.
* **DOM**: Representación estructurada de una página web.
* **Role attribute**: Indica el rol de un elemento para las tecnologías asistivas.
* **Keyboard navigation**: Capacidad de moverse por un sitio solo con el teclado.
* **`<label for>`**: Atributo que asocia un `<label>` con un `<input>` específico mediante su `id`, esencial para lectores de pantalla.
* **`type` de `<input>`**: Atributo que define qué tipo de dato espera el campo (`text`, `email`, `password`, `number`, etc.) y habilita validación nativa básica del navegador.
