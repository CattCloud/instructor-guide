# Clase 1: HTML5 Semántico, Accesibilidad y Formularios

## ❄️ Previo a la clase:

### Estructura resumida

| **Fase** | **Descripción** |
| --- | --- |
| **[Intro](#1-intro-15-min)**<br>15min | Contextualización y activación de conocimientos previos.<br>🎯 Establecer conexiones con experiencias previas y motivar sobre la importancia del HTML semántico. |
| **[Debate Conceptual](#2-debate-conceptual-30-min)**<br>30min | Discusión guiada sobre evolución de HTML5, A11y y formularios.<br>🎯 Construcción colaborativa de conocimiento a través del análisis crítico y debate técnico. |
| **[Demo Técnica](#3-demostración-técnica-20-min)**<br>20 min | Demostración en vivo de implementación y formularios accesibles.<br>🎯 Modelar buenas prácticas de etiquetado y asociación `label↔input`. |
| **[Laboratorio](#4-laboratorio-y-checkpoints-100-min)**<br>100 min | Desarrollo de landing page con tres checkpoints:<br>- ☑️ [30'] Estructura básica<br>- ☑️ [60'] Accesibilidad básica<br>- ☑️ [100'] Formulario accesible + Tab nav<br>🎯 Práctica guiada con validación continua. |
| **[Cierre](#5-cierre-15-min)**<br>15 min | Retrospectiva de soluciones destacadas y conclusiones clave.<br>🎯 Consolidar aprendizajes y preparar para siguiente sesión. |

### Estrategias de Enseñanza y Aprendizaje
> 📕 Basado en Principios de Andragogía

1. **Conexión con la Experiencia Previa** \
Según Malcolm Knowles, los adultos aprenden mejor cuando pueden relacionar el nuevo contenido con experiencias pasadas. En este laboratorio, se estimula a los estudiantes a compartir ejemplos o proyectos previos, para así conectar la teoría de HTML semántico y accesibilidad con situaciones reales de su entorno laboral o personal.

2. **Resolución de Problemas Relevantes** \
Las personas adultas suelen preferir aprender algo que perciban como útil para resolver problemas concretos. Por ello, la actividad se centra en construir una landing page real, con un enfoque directo en la accesibilidad (que impacta de manera significativa en la calidad de un sitio web) y en formularios — que son la primera prueba real de A11y en cualquier app.

3. **Aprendizaje Colaborativo y Autonomía** \
Fomentar la colaboración entre pares (peer-learning) y la interacción con el instructor permite intercambio de perspectivas y refuerza la motivación intrínseca. A la vez, se promueve la autonomía para que cada estudiante investigue y explore las propiedades de los formularios accesibles.

4. **Retroalimentación Inmediata y Reflexión** \
La retroalimentación continua (tanto del instructor como de los compañeros) impulsa la autoevaluación y la mejora constante. Al final de la sesión, se reserva un espacio para reflexionar sobre los aciertos, dificultades y aprendizajes clave, lo cual refuerza la retención y la transferencia de conocimiento a otros contextos.

## 🔥 Durante la clase

### Estructura Detallada (180 min.)

#### 1. Intro (15 min)
##### 🎯 Objetivos de Aprendizaje:
> **1. Construir una Estructura semántica sólida:** \
> “Es importante aprender a usar etiquetas semánticas porque nos permite organizar el contenido de una página web de forma clara y coherente. Además de mejorar la lectura del código, esto facilita a los motores de búsqueda entender mejor nuestro contenido y a los lectores de pantalla brindar una experiencia más inclusiva. Si desde el principio construimos HTML con sentido, el proyecto se mantiene escalable y ordenado, lo cual nos ahorra tiempo en el futuro.”

> **2. Introducir Principios de Accesibilidad:** \
> “La accesibilidad es esencial porque buscamos que cualquier persona, independientemente de sus capacidades o limitaciones, pueda navegar y entender nuestro sitio. Utilizar atributos `alt` en imágenes, roles ARIA y un orden lógico del contenido, hace que nuestra aplicación sea inclusiva para usuarios con lectores de pantalla o con diferentes dispositivos de acceso. Con ello, estamos ampliando la audiencia y cumpliendo con buenas prácticas que incluso tienen implicaciones legales en algunos países.”

> **3. Formularios accesibles como aplicación de A11y:** \
> “Los formularios son la primera prueba real de accesibilidad en una app: un formulario sin `<label for>` es invisible para un lector de pantalla. Aprender a etiquetar correctamente desde la primera clase no es un detalle — es una habilidad que aplicarán en cada clase del curso (en C04 lo validarán con `required`/`type`/`pattern`, en C07 capturarán sus inputs con JS, en C18 lo orquestarán en una app real).”

##### 🔑 Conceptos Clave

> **1. HTML5 Semántico:** \
> HTML5 introdujo varias etiquetas que describen mejor la naturaleza del contenido (header, nav, main, section, article, aside, footer). Estas etiquetas semánticas facilitan la lectura y la mantenibilidad del código, además de mejorar la accesibilidad y el SEO. \
> **¿Por qué es Importante?**
Facilita que buscadores y lectores de pantalla (assistive technologies) comprendan la estructura del contenido.
Provee mayor legibilidad y mantenimiento a largo plazo.
> - Etiquetas clave: `<header>`, `<main>`, `<section>`, `<footer>`.
> - Jerarquía de encabezados (`<h1>`, `<h2>`, `<h3>`).



> **2. Accesibilidad en la Web (A11y)** \
> La accesibilidad web engloba las prácticas que permiten a usuarios con limitaciones (visuales, auditivas, motoras, cognitivas) interactuar correctamente con un sitio. Un sitio accesible respeta estándares de lectura secuencial, uso de etiquetas descriptivas y atributos que orientan a las tecnologías de asistencia.
> **¿Por qué es Importante?** \
Incrementa la audiencia potencial al eliminar barreras de interacción.
Cumplir con estándares de accesibilidad (WCAG, ARIA) es un requerimiento legal en muchos países y un factor de responsabilidad social.
> - Uso de `alt` en imágenes.
> - Roles de accesibilidad básicos (`role="navigation"`, etc.).
> - Atributos ARIA cuando sea pertinente.

> **3. Formularios accesibles** \
> Cada `<input>` debe tener un `<label>` asociado vía `for/id`. El atributo `type` (text, email, password, number) define el tipo de dato y habilita validación nativa básica. El `<button type="submit">` cierra el formulario semánticamente. \
> **Tips para el Instructor** \
Mostrar en vivo la diferencia entre un input con `<label for>` y uno solo con `placeholder`: hacer clic en el texto del label debe enfocar el input. Si no enfoca, el `for/id` está mal.
> - Patrón base: `<label for="x">Texto</label><input id="x" type="text">`.
> - El `placeholder` NO reemplaza al `<label>` — desaparece al escribir, el label sigue ahí para el lector de pantalla.
> - En la C04 se profundiza con `required`, `pattern`, `minlength`, `<select>`.

#### 2. Debate Conceptual (30 min)

> **1. HTML Semántico y Estructura**
> 1. ❌ *"Usar `<div>` para cada sección del sitio es la mejor forma de estructurar una página"*
> - Los elementos semánticos proporcionan significado y mejoran accesibilidad
> - Los `<div>` son neutros y no aportan valor semántico
>
> 3. ❌ *"La semántica HTML no influye en absoluto en el posicionamiento SEO de una página"*
> - Los motores de búsqueda utilizan la estructura semántica para entender el contenido
> - Una buena semántica mejora el ranking en resultados de búsqueda

> **2. Accesibilidad Web** \
> 6. ❌ *"Solo las personas con discapacidad visual se benefician de los sitios accesibles"*
> - La accesibilidad beneficia a usuarios con diferentes tipos de discapacidades
> - Un diseño accesible mejora la experiencia para todos los usuarios
>
> 15. ❌ *"La accesibilidad es un requerimiento opcional y solo aplica en organizaciones públicas"*
> - La accesibilidad es un derecho y una responsabilidad en todo tipo de sitios
> - Existen implicaciones legales en muchos países

> **3. Formularios accesibles** \
> 4. ❌ *"Un `placeholder` reemplaza al `<label>` cuando el campo es corto"*
> - El `placeholder` desaparece al escribir; el `<label>` queda visible y es leído por screen readers.
> - Sin `<label for>`, los lectores de pantalla anuncian el input como "campo de texto" sin contexto.
>
> 13. ❌ *"Asociar `<label>` con `<input>` solo importa para los formularios largos"*
> - Cualquier formulario sin `for/id` falla la prueba básica de A11y.
> - Un formulario de un solo campo sin label es igual de inaccesible que uno de diez.

#### 3. Demostración Técnica (20 min)
- Implementación de estructura semántica
- Uso de herramientas de validación
- Construcción en vivo de un formulario accesible: mostrar que al hacer clic en el `<label>` el cursor salta al `<input>` (asociación correcta)
- Aclaración de dudas técnicas
- Tips de implementación

#### 4. Laboratorio y Checkpoints (100 min)

> 💻 **Objetivo**: Crear una landing page semántica, accesible y con un formulario de contacto correctamente etiquetado.

> **1. Checkpoint 1: Estructura Básica [30']**
> - Desarrollo autónomo por 25 min.
> - Compartir código por slack (bloque de código).
> - Validación del instructor con 2-3 casos, (10 min.)
>   - ✅ Estructura general con etiquetas semánticas
>   - ✅ Jerarquía correcta de encabezados (h1-h6)
>   - ✅ Nav y elementos de navegación principales
>   - ✅ Secciones principales identificadas
>   - ❌ No usar divs innecesarios

> **2. Checkpoint 2: Accesibilidad básica [60']**
> - Aplicar `alt` a imágenes, `aria-label` donde aplique, orden lógico.
> - Validación del instructor (10 min.)
>   - ✅ `alt` en todas las imágenes (vacío si decorativas)
>   - ✅ Jerarquía coherente de headings
>   - ✅ Navegación principal con `<nav>` o `role="navigation"`

> **3. Checkpoint 3: Formulario accesible + Tab nav [100']**
> - Construir el formulario de contacto y verificar con teclado.
> - Validación del instructor (15 min.)
>   - ✅ Cada `<input>` tiene su `<label for>` con `id` correspondiente
>   - ✅ `<button type="submit">` explícito
>   - ✅ Hacer clic en el `<label>` enfoca el `<input>` correcto
>   - ✅ Navegación con `Tab` recorre logo → menú → contenido → form → submit en orden lógico
>   - ✅ Screenshot del foco visible en ≥3 elementos

#### 5. Cierre (15 min)

> 💡 **Objetivo**: Consolidar aprendizajes clave y preparar el camino para la siguiente sesión.

> 1. **"El HTML Semántico es UX"**
>  - La estructura semántica no solo es código limpio
>  - Impacta directamente en la experiencia del usuario
>  - Mejora la accesibilidad y el SEO simultáneamente

> 2. **"La Accesibilidad es ROI"**
>  - Amplía la audiencia potencial del sitio
>  - Reduce riesgos legales
>  - Mejora la reputación de marca y el SEO

> 3. **"Los formularios son la primera prueba real de A11y"**
>  - Un form sin `<label for>` es invisible para screen readers
>  - El patrón que aprendieron hoy lo aplicarán toda la carrera
>  - En C04 lo validarán con HTML nativo, en C07 lo capturarán con JS, en C18 lo orquestarán en una app real

> 4. **"El Código Limpio Paga Dividendos"**
>  - Facilita el mantenimiento futuro
>  - Reduce el tiempo de onboarding de nuevos devs
>  - Minimiza la deuda técnica

> 5. **"La Web es para Todos"**
>  - La inclusividad no es opcional
>  - Cada decisión de desarrollo impacta a usuarios reales
>  - El buen código construye una web más accesible


### Siguiente Paso ⏭
En el próximo laboratorio, los estudiantes aprenderán a aplicar CSS Layout con Flexbox para dar estilo y estructura visual a la landing page que han comenzado a construir. ¡Sigue fomentando la exploración y el aprendizaje continuo!

---

# Solucionario

## Lectura y Debate 01:
> Mitos y Verdades

1. ❌ *"Usar `<div>` para cada sección del sitio es la mejor forma de estructurar una página"*
   - Los elementos semánticos como `<section>`, `<article>`, `<nav>` proporcionan mejor estructura y significado al contenido.

2. ❌ *"Un `placeholder` reemplaza al `<label>` cuando el campo es corto"*
   - El placeholder desaparece al escribir; el lector de pantalla no lo anuncia consistentemente. Siempre se necesita `<label for>`.

3. ❌ *"La semántica HTML no influye en absoluto en el posicionamiento SEO de una página"*
   - El HTML semántico es un factor importante para el SEO y ayuda a los motores de búsqueda a entender el contenido.

4. ✅ *"Aplicar roles y atributos ARIA es imprescindible para mejorar la accesibilidad de un sitio"*
   - ARIA complementa HTML cuando la semántica nativa no es suficiente.

5. ❌ *"Colocar texto alternativo (`alt`) en imágenes solo sirve para mejorar el resultado en la búsqueda de Google"*
   - El atributo `alt` es crucial para usuarios con lectores de pantalla y cuando las imágenes no cargan.

6. ❌ *"Solo las personas con discapacidad visual se benefician de los sitios accesibles"*
   - La accesibilidad beneficia a usuarios con diferentes discapacidades, usuarios móviles y mejora la experiencia general.

7. ✅ *"Las etiquetas `<header>`, `<main>` y `<footer>` ordenan el contenido y facilitan su lectura"*
   - Estos elementos proporcionan una estructura clara y consistente al documento.

8. ✅ *"Incluso en proyectos pequeños, la accesibilidad y la semántica siguen siendo factores esenciales"*
   - El tamaño del proyecto no determina la importancia de las buenas prácticas.

9. ✅ *"Un orden lógico de encabezados (h1, h2, h3…) facilita la navegación con lectores de pantalla"*
   - La jerarquía correcta de encabezados mejora la navegación y comprensión del contenido.

10. ❌ *"Asociar `<label>` con `<input>` solo importa para los formularios largos"*
    - Cualquier `<input>` sin su `<label for>` correspondiente falla la prueba básica de A11y.

11. ✅ *"Implementar accesibilidad puede requerir ajustes de código, pero beneficia a todo tipo de usuarios a largo plazo"*
    - La inversión en accesibilidad mejora la experiencia general del sitio.

12. ✅ *"Un buen uso de HTML5 semántico hace el proyecto más mantenible y promueve la colaboración entre desarrolladores"*
    - El código semántico es más legible y facilita el mantenimiento.

13. ❌ *"La accesibilidad es un requerimiento opcional y solo aplica en organizaciones públicas o gubernamentales"*
    - La accesibilidad es una responsabilidad universal que beneficia a todos los usuarios.

## Laboratorio 01
> Product Landing Page - parte 1 de 4

A continuación se presenta un ejemplo de cómo podría lucir el código **HTML** que cumple con los requisitos del Laboratorio 1: HTML5 Semántico, Accesibilidad y Formularios. Este ejemplo es meramente ilustrativo, y los estudiantes pueden ajustarlo según el producto que elijan.

### index.html
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Mi Producto Estrella</title>
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
  <header role="banner">
    <h1>Mi Producto Estrella</h1>
    <p>El producto que cambiará tu forma de ver el mundo.</p>
    <img src="img/logo.png" alt="Logotipo de Mi Producto Estrella" />
  </header>

  <nav role="navigation" aria-label="Menú principal">
    <ul>
      <li><a href="#caracteristicas">Características</a></li>
      <li><a href="#planes">Planes</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
  </nav>

  <main role="main">
    <section id="caracteristicas">
      <h2>Características Principales</h2>
      <p>Explica de forma detallada las bondades de tu producto.</p>
    </section>

    <section id="planes">
      <h2>Planes y Precios</h2>
      <p>Describe los diferentes planes de compra o suscripción.</p>
    </section>

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
  </main>

  <footer role="contentinfo">
    <p>&copy; 2025 Mi Producto Estrella. Todos los derechos reservados.</p>
  </footer>
</body>
</html>
```

> **Nota:** En C04 el alumno enriquecerá este formulario con `required`, `type="email"`, `pattern`, `<select>` y `<input type="checkbox">`. Aquí solo se establece la base accesible.
