# Caso de Estudio 0 (Instructor) - Parte 1: Análisis e Inspiración

> **Objetivo de este documento:** Guion táctico para que el instructor realice la "Parte 1" del laboratorio en vivo. 
> - **Logro de la sesión:** Lograr que el alumno deje de ver "páginas bonitas" y empiece a ver **patrones estructurales** (jerarquía, organización y propósito).
> - **El éxito se mide cuando:** Los alumnos pueden redactar un "Objetivo de Rediseño" que justifique técnicamente sus futuras decisiones de diseño, usando las referencias como piezas de LEGO (piezas modulares) para crear algo propio.

---

### Preparación (Antes de compartir pantalla)
Ten abiertas tus 3 piezas de inspiración (`card-modern.jpeg`, `card_minimal.jpeg`, `card_rosa.jpeg`) para ir saltando entre ellas.

---

### Tu Guion en Vivo (Preguntas del Laboratorio)

#### 1. ¿Qué elementos visuales se repiten? 
*Objetivo: Enseñar el concepto de "Jerarquía Visual".*

> **Tu explicación en clase:**
> "Chicos, miren estas 3 referencias que yo elegí. A simple vista son mundos totalmente distintos en colores y estilo, pero si quitamos la pintura (el color), las 3 tienen **exactamente el mismo esqueleto**. 
> 
> 1. Primero, todas tienen una **imagen o avatar** en la parte superior.
> 2. Segundo, seguido de la foto vemos el **Nombre Propio resaltado** (tipografía grande y en negrita o *bold*).
> 3. Tercero, debajo del nombre, hay una **descripción corta** en texto normal (más pequeño y sin negrita).
> 4. Cuarto, los **botones de acción**. ¿Notan que nunca ven los botones por encima de la foto? Eso es jerarquía. Primero te presentas (quién eres) y luego ofreces la acción (a dónde ir). Entender esto es separar estructura de decoración.
> 5. Quinto y no menos importante, en el formato de escritorio de estas 3 referencias, observamos que **los enlaces están dispuestos en una fila (horizontal)**, no en columna. Sin embargo, aplicando lo que ya sabemos de diseño responsive, si abriéramos esto en un celular, esos mismos botones seguramente pasarían a apilarse en una columna (`flex-direction: column`)."

#### 2. ¿Cómo organizan la información?
*Objetivo: Enseñar el concepto de "Agrupación / Layout".*

> **Tu explicación en clase:**
> "Notemos la Organización Estructural o el famoso 'Layout'. Si se fijan en la `card-modern` y en la `card_rosa`, ambas agrupan todo el contenido en un solo contenedor visual (un gran rectángulo al centro del lienzo). Es como si estuvieran 'encerradas' en una caja.
> 
> Sin embargo, vean la `card_minimal`. Esta rompe esa regla; no hay una caja central que limite el contenido, parece que el contenido y el fondo se combinan y fluyen juntos, ocupando toda la pantalla. Es una distribución completamente libre."

#### 3. ¿Qué colores/estilos te gustan?
*Objetivo: Enseñar el concepto de "Decisión Consciente vs Casualidad".*

> **Tu explicación en clase:**
> "Aquí es donde empieza a jugar la personalidad de cada uno. Yo me inclino mucho por la distribución de la `card_minimal`: 
> - Su diseño **no está centrado**, sino alineado a la izquierda. Ese diseño asimétrico rompe lo tradicional y refleja mucho mi estilo minimalista.
> - Me gusta que **no usa 15 enlaces**. Yo no soy alguien de 10 redes sociales súper activas; solo me contactan por cosas puntuales (LinkedIn, GitHub, WhatsApp). Tener menos enlaces me sirve, evita saturar a mi usuario.
> - Noten también cómo **los enlaces están agrupados** en un solo bloque cohesivo. No hay botones sueltos por arriba o por abajo; están juntos para indicarle al usuario: "Este es el panel de contacto principal".
> - Y, visualmente, me gusta su **color de fondo plano**.
> 
> Sin embargo, respecto a la paleta de colores de los enlaces, me enamoraron los tonos vibrantes o 'caricaturescos' de la `card_rosa`, especialmente esas sombras marcadas (`box-shadow` dura y sólida sin difuminar) que les da un toque brutalista y muy moderno."

#### 4. ¿Qué harías diferente?
*Objetivo: Enseñar a "Robar inteligentemente" (Desensamblar las referencias como piezas LEGO).*

> **Tu explicación en clase:**
> "Listo, ya tengo mis referencias, pero no voy a copiarlas exactamente porque descubrí problemas en ellas. 
> 
> Por ejemplo, la `card_minimal` comete el error de mezclar el Nombre (título) y la Descripción en un solo bloque de texto continuo. **Yo no haré eso**. Voy a separar mi identidad de mi biografía para darle más respiración visual, tal como lo hacen las otras plantillas.
> 
> **En resumen, voy a construir mi Frankenstein:** 
> - Tomaré la alineación lateral izquierda y el fondo sólido de la `card_minimal`.
> - Destruiré sus botones redondeados pálidos, y en su lugar, me robaré el estilo sombreado 'caricaturesco' y los colores súper vivos de la `card_rosa` para mis propios botones.
>
> Así es como se diseña: tomando piezas funcionales que te sirven para armar una solución única."

---

### Tu Objetivo de Rediseño (Tu Declaración en Vivo)

*(Este es el clímax de la Parte 1. Se lo dices a los alumnos o lo escribes en pantalla para que vean qué deben generar ellos).*

> **"Mi MyLinks actual es un documento HTML genérico y centrado, pero quiero que sea un hub asimétrico (alineado a la izquierda), altamente minimalista en contenido pero con personalidad fuerte usando botones 'brutalistas' (colores vivos y sombras duras). Mi usuario ideal es un reclutador o colega técnico que no quiere leer 20 enlaces, sino ir directo a mi LinkedIn o mis proyectos personales en segundos."**

---

## Parte 2: Wireframe Low-Fi (Ideación y Evaluación)

> **Logro de esta parte:** Forzar el paso del "diseño por inercia" al **diseño por intención**.  
> **¿Qué tienen que notar los alumnos?** Que el simple acomodo (layout) cambia radicalmente el flujo de información y la jerarquía, sin necesidad de usar colores o imágenes.  
> **El éxito se mide cuando:** Los alumnos superan el "enamoramiento de la primera idea" (sesgo de anclaje) y comprenden que la estructura ganadora se elige porque cumple el objetivo técnico establecido en la Parte 1, no por un simple gusto estético o "suerte".

---

### 2.3 Sesión de Ideación (Tus 3 Variantes en Vivo)
*Objetivo: Demostrar que la primera idea rara vez debe ser la definitiva sin antes haber explorado otras vías, y que mover elementos de lugar cambia toda la experiencia de usuario.*

> **Tu explicación en clase:**
> "Chicos, muchos de ustedes ya tienen en su cabeza el diseño ganador. Eso en psicología se llama el *sesgo de anclaje*: nos enamoramos de la primera idea y nos rehusamos a soltarla. En la vida real analizando UX, esto es un error fatal. Vamos a forzarnos a hacer algo incómodo: generar 3 ideas totalmente distintas.  
> *Ojo: para no perder mi objetivo principal, mantendré el flujo alineado a la izquierda en todas las variantes.*
> 
> 1. **Variante A (La Segura):** Esta es la idea que estructuré en mi cabeza en la Parte 1. Tengo mi foto circular a la izquierda, a la derecha mi nombre gigantesco ('Hola soy Erick'), seguido de mi biografía corta. Debajo, alineados ordenadamente, mis 4 botones de contacto (LinkedIn, Correo, etc.) con sus sombras duras brutalistas. Es asimétrica y limpia.
> 2. **Variante B (La Loca/Creativa):** Aquí me forcé a cambiar la posición y romper el flujo clásico. ¿Qué pasa si no pongo mi foto arriba, sino en *fila* con el contenedor de presentación? Tendría mi avatar circular aislado y, al costado en una columna, mi nombre, biografía y mis íconos de redes aglutinados.
> 3. **Variante C (La Súper Minimalista):** Aquí me fui al extremo radical. Quité mi foto de perfil. Literalmente mi rostro no importa ahora. Dejo únicamente mi Nombre como una tipografía masiva en pantalla, una única frase de subtítulo sobre lo que hago, y mis enlaces siguen siendo solo puros iconos minimalistas."

### 2.4 Evalúa y Elige (Tu decisión justificada)
*Objetivo: Enseñarles a tomar decisiones profesionales basadas en el usuario (UX), no en el capricho estético UI.*

> **Tu explicación en clase:**
> "De las tres iteraciones, ¿con cuál me quedo? Si fuera solo por 'gusto', tal vez elegiría la Variante B porque se ve genial en mi cabeza. Pero **no diseñamos por gusto, diseñamos por objetivos.** 
> 
> ¿Cuál era mi objetivo técnico que redactamos hace 10 minutos? *'Mi usuario ideal es un reclutador técnico sin tiempo'*.
> 
> - La **Variante C** (Súper Minimalista) falla porque la ausencia de foto me quita 'humanidad'; los reclutadores conectan con rostros, no solo con nombres grandes.
> - La **Variante B** (La Loca) agrupa mis enlaces en forma de pequeños íconos y rompe la estructura habitual. Un reclutador apurado puede pasar por alto mis proyectos porque está forzado a escanear horizontal y verticalmente al mismo tiempo.
> - Por tanto, **mi ganadora absoluta es la Variante A**. ¿Por qué? Porque mi foto genera anclaje humano, el esquema vertical-asimétrico es fácil de leer de un vistazo, y debajo, 4 botones masivos estilo brutalista gritan: '¡Haz clic en mí!'. El reclutador no tiene que adivinar dónde está el botón de mi portafolio, está servido en bandeja.
> 
> *Esto, señores, es diseñar basándose puramente en UX*."
