# Clase 01: HTML5 Semántico, Accesibilidad y Formularios

* Primera piedra de la web accesible e inclusiva.
* Aprendemos a estructurar con sentido, no solo con `<div>`.
* Los formularios son la primera prueba real de A11y.

---

## 🎯 Objetivos de la Clase

**Al finalizar la clase, podrás:**

* Construir una página HTML con estructura semántica.
* Aplicar atributos de accesibilidad básicos (alt, roles ARIA).
* Construir un formulario accesible con `<form>`, `<label for>`, `<input>`.
* Justificar tus decisiones semánticas y de accesibilidad.

---

## 🔑 Conceptos Clave

* **HTML5 Semántico**: Estructura con etiquetas que tienen significado.
* **Accesibilidad (A11y)**: Inclusión de personas con distintas capacidades.
* **Alt text**: Descripción alternativa de imágenes.
* **ARIA**: Atributos que ayudan a lectoras de pantalla.
* **Formularios accesibles**: `<form>`, `<label for>`, `<input type>`, `<button type="submit">`.

---

## 📖 Debate Crítico

**Verdadero o Falso:**

* Usar `<div>` para cada sección es la mejor forma de estructurar una página.
* Un `placeholder` reemplaza al `<label>` cuando el campo es corto.
* El `alt` solo sirve para mejorar el SEO.
* Sitios accesibles benefician solo a personas con discapacidad visual.
* HTML5 semántico mejora la colaboración entre devs.

---

## 📝 Formularios accesibles — el patrón base

```html
<form>
  <label for="email">Correo</label>
  <input type="email" id="email" name="email">

  <button type="submit">Enviar</button>
</form>
```

* `for` del `<label>` apunta al `id` del `<input>` → el lector de pantalla anuncia el campo.
* `type="email"` activa validación nativa básica del navegador.
* `<button type="submit">` es explícito sobre su rol.

> "Si haces clic en el `<label>` y el cursor salta al `<input>`, la asociación está bien."

---

## 🧪 Laboratorio - Estructura Inicial

* Repositorio: `product-landing-page`

- Parte 1: Estructura base del proyecto recordando Git y Github.
- Parte 2: Estructura Semántica.
- Parte 3: Atributos de accesibilidad Básica.
- Parte 4: Formulario de contacto accesible.
- ✅ Checkpoint Tab nav (screenshot del foco visible).
- ⭐️ 2 Logros Adicionales.

---

## 🌟 Logros Extra

* **Dark Mode**: Variables CSS y toggle de modo oscuro
* **Microinteracciones**: Transiciones suaves en botones o links

---

## 🧠 Discusión Final

* ¿Qué rol tiene la semántica en el mantenimiento de un proyecto?
* ¿Quién se beneficia realmente de un sitio accesible?
* ¿Cómo cambia la experiencia de tu formulario con y sin `<label for>`?

> **Reflexiones:**

- ¿Qué curiosidades nuevas te llevas?
- ¿Qué concepto has podido aclarar mejor?
- ¿En qué aspecto sientes que tienes un mayor dominio ahora?
