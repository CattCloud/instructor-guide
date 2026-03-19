# Examen Anti-Impostor (Instructor) - Clase 07

> **Instrucciones:** Debes poder responder estas preguntas mentalmente con total seguridad antes de entrar a la sala. Si alguna te hace dudar, repasa los apuntes o la Capa 0.

---

### Módulo 1: Conceptos de UX/UI y Metodología (Capa 0)

1. **El alumno terco:** "Profe, mi aplicación tiene colores hermosos y animaciones en 3D impresionantes, no entiendo por qué los usuarios se quejan de que es confusa. ¡Tiene un UX perfecto!".
   - *¿Cómo corriges conceptualmente a este alumno diferenciando UI y UX? Usa un ejemplo.*
   Bien , tu diseño esta increible pero un detalle importante, no es lo mismo decir funcionalidad que estetica
   Tu aplicacion es buenisima a la vista y tiene un 10 en estetica , pero la funcionalidad lo miden los que lo van a usar , tus clientes ellos definen que tan bien funciona o es util y sencillo para su objetivo, si te dicen  de que es confusa, es porque tu interfaz (el brillo) estorba a la experiencia (el uso).

2. **La confusión de fidelidad:** "Profe, para avanzar rápido con mi proyecto final, voy a empezar haciendo el wireframe directamente en Figma metiéndole ya los colores de mi marca y buscando las fotos de internet para ver cómo queda".
   - *¿Dónde está el error de proceso aquí? ¿Por qué es peligroso saltar directo al High-fi sin pasar por el Low-fi estructural?*
   Contruir un diseño sigue un progreso, similar a construir una casa, primero debes tener en claro un plano , con eso pones la base y el esqueleto de fierros ahora si tienes claro cuantas paredes y muros ahi, sabes exactamente cuanto ladrillo y cemento usar.
   Yo te pregunto, tu quieres poner colores y buscar las fotos pero sabes en elemento poner los colores, conoces cuantas fotos necesitas y donde ira la foto o incluso la dimension de la foto? si construyes como tienes planeado surgiran muchas dudas que te haran perder el tiempo por eso debes empezar a definir un plano primero.

3. **Design Thinking Fase 1:** "Profe, ya tengo una súper idea para una App de pasear perros. Voy a empezar a codificar el HTML ahora mismo".
   - *Basándote en las 5 fases del Design Thinking, ¿qué fases se está saltando el alumno y cuál es el riesgo inminente de su estrategia?*
   Buen entusiasmo pero antes quiero preguntarte algo alumno
   Para quien sera tu app? Ya los entrevistaste y les pediste opinion sobre que quieres resolver? 
   O una practica mas sencilla, que problema resuelve tu app?
   Si no tienes esto claro mi estimado alumno,tu app fracasara porque no tiene identidad, no sabe para que existe o que quiere solucionar.

---

### Módulo 2: Dominio Técnico de Figma (Preparación Especial)

4. **El lienzo infinito:** Un alumno abre Figma por primera vez, dibuja un rectángulo, le pone texto y dice "Profe, ya hice mi botón de la web, pero no sé cómo ver si entra en la pantalla del celular, esto es gigante".
   - *¿Qué concepto fundamental y qué herramienta de Figma (atajo de teclado) olvidó crear el alumno antes de empezar a dibujar?*
   Oh ya veo,olvidaste un pequeño pero importante detalle, recuerdas que nosotros tenemos una ventana llamada Viewport donde dibujamos los elementos de nuestra web con HTML , pues Figma funciona igual, necesita una ventana donde tu pongas los elementos que quieres dibujar,lo que pasa es que tu dibujaste en el vacio , presiona F y selecciona un modelo de celular ahora coloca el boton dentro de esa ventana y notaras como se ve

5. **El caos del alineamiento:** Estás demostrando cómo hacer la tarjeta del proyecto MyLinks en vivo. Tienes la foto de perfil, el nombre y la bio. Al intentar moverlos juntos en Figma, se te desordenan o los márgenes no son consistentes.
   - *¿Qué comando de teclado (atajo) aplicas mágicamente tras seleccionar los tres elementos para convertirlos en un "Flexbox" visual, y cómo justificas esa herramienta relacionándola con código CSS?*
   Bien chicos ya colocamos los 3 elementos de nuestra tarjeta pero ahora queremos posicionarlos, recuerdan como se hacia en la web, exacto con FlexBox, pues les comento que Figma tiene una forma de agregarle ese mismo comportamiento, seleccionen los 3 elementos y presiones SHIFT + A
   Pum! Vean la magia, ahora estan agrupados , pero no solo eso, tambien en la barra derecha aparecen opciones similares a las propiedades Flex para posiciones los elementos que seleccionamos.

6. **Desafío en vivo (Mental):** Describe paso a paso (qué teclas presionar y dónde hacer clic) para crear el botón "GitHub" del proyecto MyLinks en Figma, de forma profesional (sin dibujar un rectángulo y tratar de centrar el texto" a ojo").
   - *(Pista: Involucra la tecla T, la combinación mágica Shift+A, y el panel de Fill y Corner Radius).*
1. Crear el texto: Presiona la tecla T, haz clic en el lienzo y escribe "GitHub".
2. Convertir a Auto Layout (La combinación mágica): Con el texto seleccionado, presiona Shift + A. Verás que aparece un marco (Frame) alrededor del texto. Esto hace que el botón crezca solo si cambias la palabra.
3. Añadir color de fondo: Ve al panel derecho, busca la sección Fill, haz clic en el icono + y selecciona el color (por ejemplo, negro o el gris de GitHub).
4. Ajustar el espaciado (Padding): En el mismo panel derecho, en la sección de Auto Layout, verás dos valores:
5. Horizontal padding: Haz clic y escribe 24 (o lo que prefieras).
Vertical padding: Haz clic y escribe 12.
6. Redondear las esquinas: Sube un poco en el panel derecho hasta encontrar Corner Radius (el icono de un ángulo curvo) y escribe 8 para un acabado moderno.
7. Centrar el contenido: Asegúrate de que en el cuadro de alineación de Auto Layout (el cuadrado con rayitas), el punto esté en el centro.

---

### Módulo 3: Flujo de la Sesión

7. **El puente de la clase:** ¿En qué momento exacto de la sesión ocurre la transición de la teoría (Capa 0) a la práctica (High-Fi), y qué herramienta "puente" usan los estudiantes para "Bocetar" antes de tocar Figma?
   - *(Pista: Revisar documentación del laboratorio de la clase 07).*
Ocurre en la Parte 2: Wireframe Low-Fi 
Ahi usaremos Papel y lápiz	 o Excalidraw para bocetar
---
> *Nota: Si pudiste explicar la Pregunta 6 sin tartamudear, estás 100% listo para dar el laboratorio de Figma sin que noten que no lo usas a diario. ¡Mucha suerte!*
