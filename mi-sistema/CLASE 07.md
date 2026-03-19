# 📍 CLASE 07: Wireframing y Pensamiento Creativo

> **Documento Maestro de la Clase 07**
> Esta clase es eminentemente práctica. El instructor actúa como el "Caso de Estudio 0" en vivo (Efecto Espejo), donde explica la teoría mientras desarrolla su propio laboratorio a la par que los alumnos.

---

## ⏱️ TABLA DE TIEMPOS (120 Minutos o Tiempo Establecido)

| Momento | Título | Duración estimada | Core Técnico / Concepto Puro |
| :--- | :--- | :--- | :--- |
| **01** | Análisis y El Plano Low-Fi | ~ 25 min | Wireframe, Low-fi vs High-fi |
| **02** | Ideación y Design Thinking | ~ 25 min | Design Thinking, UX vs UI, Sesgo de Anclaje |
| **03** | Fundamentos de Figma (High-Fi) | ~ 45 min | Frame/Viewport, Formas, Textos, Estilos de Color, Efectos, Flexbox (Auto Layout) |
| **04** | Prototipado, Exportación y QA | ~ 25 min | Interactividad (Prototype), Exportación PNG, Resolución |

---

## 🗺️ CAPA 1: ESTRUCTURA DE MOMENTOS

### Momento 01: Análisis y El Plano Low-Fi (25 min)

> **Nota táctica de inicio:** Este momento rompe el hielo. Demuéstrales que "copiar una web bonita" no es diseñar. Enséñales a ver la matrix detrás del diseño: los cuadros y la estructura.

**1. El concepto de Wireframe (La Matrix del Diseño)**
**EN PANTALLA:** Comparación visual (Ejemplo: Un diseño real de Netflix vs. su Wireframe de cajas grises).

> **Tu explicación teórica precisa:**
> "Chicos, antes de poner colores o fuentes bonitas, toda aplicación web nace como un 'esqueleto'. A ese esqueleto le llamamos **Wireframe**. Su objetivo es uno solo: planificar la estructura y la jerarquía de la información, intencionalmente simplificado y sin belleza visual. Funciona exactamente igual que un plano arquitectónico: el plano no te dice de qué color es la pared de tu sala, solo indica estratégicamente dónde va para que la casa no se caiga. 
> 
> En este mundo existen dos polos: El **Low-Fi (Baja Fidelidad)** que es el rayón rápido en lápiz o Excalidraw, y el **High-Fi (Alta Fidelidad)** que es el diseño final pixel-perfect en herramientas como Figma."

> **Pregunta de calibración:**
> *"¿Alguien se anima a decirme por qué es peligroso diseñar la 'casa' (aplicar colores, bordes, imágenes) cruzándose de frente a Figma o HTML sin hacer el plano rápido (Low-Fi) antes?"*
> *(Esperar respuesta: Es más costoso y demorado borrar y rehacer en código o diseño final)*.

**2. Acción Guiada (Laboratorio Parte 1): Las 4 Preguntas Clave**
**EN PANTALLA:** Abre en tu navegador las 3 referencias de Carrd que guardaste (card-modern, card_minimal, card_rosa) en grande.

**Tu Acción Guiada (Caso de Estudio 0 en Vivo):**

> - **Logro de la sesión:** Lograr que el alumno deje de ver "páginas bonitas" y empiece a ver **patrones estructurales** (jerarquía, organización y propósito).
> - **El éxito se mide cuando:** Los alumnos pueden redactar un "Objetivo de Rediseño" que justifique técnicamente sus futuras decisiones de diseño, usando las referencias como piezas de LEGO (piezas modulares) para crear algo propio


1. **¿Qué elementos visuales se repiten? (Destapando el esqueleto)**
   > **Tu explicación:** "Vean estas 3 referencias. A simple vista parecen mundos distintos por el color. Al quitarles la pintura, tienen **exactamente el mismo esqueleto**. Primero todas tienen imagen arriba; segundo, el Nombre Propio en *bold*; tercero, una descripción; cuarto, los **botones de acción**. Nunca ven botones por encima de la foto, ¿verdad? Eso se llama **jerarquía vertical**. Quinto, los enlaces aquí en escritorio están en fila (horizontal), aunque en celular ya sabemos que pasarán a columna (`flex-direction: column`)."

2. **¿Cómo organizan la información? (Layout)**
   > **Tu explicación:** "Noten el Layout. La `card-modern` y la `card_rosa` están encasilladas en un contenedor central. Pero la `card_minimal` fluye libremente en la pantalla, combinando contenido con fondo."

3. **¿Qué colores/estilos te gustan? (Decisión consciente)**
   > **Tu explicación:** "Acá juega la personalidad de cada uno. A mí me gusta mucho la distribución de la `card_minimal` porque es asimétrica y alineada a la izquierda, perfecta para mi estilo de no saturar al usuario, sin exceso de enlaces. Sin embargo, me enamoraron los tonos vibrantes o caricaturescos de la `card_rosa` y sus sombras marcadas de estilo brutalista."

4. **¿Qué harías diferente? (Robar como artista)**
   > **Tu explicación:** "Ninguna es perfecta. La `card_minimal` comete el error de mezclar Nombre y Descripción en un solo bloque continuo. Yo no haré eso, voy a darles respiración visual, los separaré. En resumen, **construiré mi Frankenstein**: Asimetría y alineación izquierda de la primera, pero robándole las sombras duras a la última."

**3. El Objetivo del Rediseño (Tu Declaración)**
**EN PANTALLA:** Blok de notas, Notion o Word abierto frente a ellos (Escribes en vivo).

> **Tu explicación teórica precisa:**
> "Con esto analizado, y para que mi cerebro no trate de cambiar el rumbo a mitad de camino, genero una pauta clara para el resto del laboratorio: Mi Objetivo de Rediseño."

**La acción guiada:**
1. Escribe en vivo frente a ellos: *"Mi MyLinks actual es un documento HTML genérico y centrado, pero quiero que sea un hub asimétrico (alineado a la izquierda), altamente minimalista en contenido pero con personalidad fuerte usando botones 'brutalistas' (colores vivos y sombras duras). Mi usuario ideal es un reclutador o colega técnico que no quiere leer 20 enlaces, sino ir directo a mi LinkedIn o mis proyectos personales en segundos."*
2. Insta a los alumnos: *"Esta es su **Parte 1**. Tienen 10 minutos para ver sus propias plantillas en Carrd y enviarme su propio 'Objetivo de Rediseño' justificado por el chat."* 

### Momento 02: Ideación y Design Thinking (25 min)

> **Nota táctica de inicio:** En esta fase, los obligas a salir de su zona de confort. Tienen que darse cuenta de que el diseño es un proceso iterativo, no una inspiración mágica del primer intento.

**1. Design Thinking y UX vs UI (La Empatía)**
**EN PANTALLA:** Video corto sobre Design Thinking o la imagen de las dos botellas de Heinz Ketchup (Vidrio vs Plástico invertido).

> **Tu explicación teórica precisa:**
> "Para crear nuestro plano (Wireframe) no basta con saber colocar cajas. Debemos usar el **Design Thinking**, que no es más que diseñar pensando en el problema del humano que lo va a usar, no en lo que a ti te parece bonito.
> 
> Miren la famosa imagen de la botella de Ketchup Heinz. La botella de vidrio clásica y hermosa es pura **UI (Interfaz de Usuario)**; se ve premium, pero tienes que golpearla frustrado para que salga la salsa. Luego sacaron la botella de plástico invertida: no es tan elegante, pero la salsa sale fácil y rápido. Eso es pura **UX (Experiencia de Usuario)**. Aquí no haremos diseños bonitos que no sirvan; haremos diseños que resuelvan el problema de nuestro usuario objetivo."

> **Pregunta de calibración:**
> *"Considerando el 'Objetivo de Rediseño' que acaban de escribir... ¿Quién es su 'usuario' y qué 'problema' le están resolviendo al entrar a su MyLinks?"*
> *(Esperar un par de respuestas rápidas en el chat).*

**2. Acción Guiada (Laboratorio Parte 2): Rompiendo el Sesgo de Anclaje**
**EN PANTALLA:** Pizarra de Excalidraw o una hoja de papel proyectada (cámara externa si la tienes preparada).

> **Logro de la sesión:** Forzar el paso del "diseño por inercia" al **diseño por intención**.

>*Objetivo: Demostrar que la primera idea rara vez debe ser la definitiva sin antes haber explorado otras vías, y que mover elementos de lugar cambia toda la experiencia de usuario.*

**Tu Acción Guiada (Caso de Estudio 0 en Vivo):**

1. **Sesión de Ideación (Tus 3 Variantes):**
   > **Tu explicación:** "Muchos de ustedes ya tienen en su cabeza el diseño ganador. Eso en psicología es el *sesgo de anclaje*: enamorarse de la primera idea y rehusarnos a soltarla. En UX, esto es un error fatal. Vamos a forzarnos a hacer algo incómodo: generar 3 variantes de wireframe muy crudas (Low-Fi) sobre nuestro objetivo de rediseño."
    > *Ojo: para no perder mi objetivo principal, mantendré el flujo alineado a la izquierda en todas las variantes.*
    > 
    > 1. **Variante A (La Segura):** Esta es la idea que estructuré en mi cabeza en la Parte 1. Tengo mi foto circular a la izquierda, a la derecha mi nombre gigantesco ('Hola soy Erick'), seguido de mi biografía corta. Debajo, alineados ordenadamente, mis 4 botones de contacto (LinkedIn, Correo, etc.) con sus sombras duras brutalistas. Es asimétrica y limpia.
    > 2. **Variante B (La Loca/Creativa):** Aquí me forcé a cambiar la posición y romper el flujo clásico. ¿Qué pasa si no pongo mi foto arriba, sino en *fila* con el contenedor de presentación? Tendría mi avatar circular aislado y, al costado en una columna, mi nombre, biografía y mis íconos de redes aglutinados.
    > 3. **Variante C (La Súper Minimalista):** Aquí me fui al extremo radical. Quité mi foto de perfil. Literalmente mi rostro no importa ahora. Dejo únicamente mi Nombre como una tipografía masiva en pantalla, una única frase de subtítulo sobre lo que hago, y mis enlaces siguen siendo solo puros iconos minimalistas."

2. **Evalúa y Elige (Tu decisión justificada):**
   > **Tu explicación:** "¿Con cuál me quedo? No elijo por 'gusto'. Vuelvo a mi objetivo: *'Reclutador técnico sin tiempo'*. 
   > - La Variante C (Minimalista) falla porque la ausencia de foto me quita 'humanidad'; los reclutadores conectan con rostros. 
   > - La Variante B (La Loca) agrupa mis enlaces escondiéndolos, obligando al reclutador a escanear horizontal y verticalmente al mismo tiempo.
   > - Por tanto, mi ganadora absoluta es la **Variante A** (La Segura). La foto genera anclaje humano, se lee rapidísimo de un vistazo (vertical-asimétrico), y abajo los botones masivos le gritan 'haz clic'. ¡El reclutador no tiene que adivinar nada!"

**3. Ejecución del Alumno (10 minutos exactos)**
**EN PANTALLA:** Un cronómetro gigante de 10:00 (YouTube o Google Timer).

**La acción guiada:**
1. Da la orden de ejecución: *"Esta es su **Parte 2**. Entiendo perfectamente la pereza de dibujar lo mismo 3 veces, pero es el núcleo de esta clase. A partir de ahora tienen **10 MINUTOS EXACTOS**. Tomen Excalidraw o papel. Prohibido usar colores. Dibujen 3 variantes estructurales (Layouts) de su MyLinks. Elijan la ganadora basándose estrictamente en su Objetivo del chat."*
2. *(Mutear micrófono. Mantente atento al chat para destrabar a alguien con "dudas creativas" recordándole su Objetivo).*

### Momento 03: Fundamentos de Figma y Tokens (High-Fi) (45 min)

> **Nota táctica de inicio:** Figma es un ecosistema inmenso que suele asustar. Tu misión es desmitificarlo anclando cada herramienta a lo que ellos ya dominan: HTML y CSS. Si dominan divs y flexbox, ya dominan Figma. Haz que lo vean así.

**1. El Lienzo infinito y el Viewport (5 min)**
**EN PANTALLA:** Navegador abierto en Figma con un archivo Draft totalmente en blanco.

> **Tu explicación teórica precisa:**
> "Bienvenidos al lienzo infinito de diseño. Los Wireframes (Low-Fi) los hicimos en papel y lápiz, pero nuestra versión **High-Fi (Alta fidelidad)** necesita medidas exactas, colores reales y proporciones reales. Figma es el estándar absoluto de la industria, y hoy lo dominaremos.
>
> Sin embargo, no podemos aventar cajas sueltas en este universo gris estático. Necesitamos un contenedor límite, un esqueleto maestro que en la web llamamos **Viewport** (la pantalla física del celular). En el mundo de Figma, ese contenedor maestro que recorta el contenido se llama **Frame**."

**Tu Acción Guiada en Funciones Básicas:**
1. Haz énfasis en tu teclado y presiona la letra `F`.
2. *(Voz alta)*: "Con una simple letra 'F', activo el menú de resoluciones a la derecha. Escojamos *iPhone 14 & 15 Pro*. Listo, ha nacido nuestro móvil virtual. Tienen frente a ustedes su nuevo `<body />`."
3. Invita al estudiante: *"Tienen 1 minuto. Abran su Figma, creen un Draft en blanco y pongan su Frame de iPhone."*

**2. Sistema de Diseño Menor: Tokens y Estilos (15 min)**
**EN PANTALLA:** Creas una gran caja en el lienzo gris, fuera de tu Frame (iPhone), con el texto gigante "Sistema de Tokens".

> **Tu explicación teórica precisa:**
> "Un desarrollador pro no codifica poniendo el Hexadecimal de un color veinte veces, porque el día que le pidan que el azul ahora sea rojo, tendrá que reescribir 20 archivos CSS. Usamos Variables. Aquí en Figma, a esa genialidad matemática de separar el diseño le llamamos **Sistema de Estilos o Tokens**. Hoy crearemos el nuestro antes siquiera de diseñar una letra de nuestro MyLinks."

**Tu Acción Guiada (Creando variables):**
1. Dibuja un círculo rápido usando la elipse (`O` + `Shift`).
2. Asígnale el "color de fondo" de tu Variante A (Ej: un Off-white `#F5F5F5`).
3. *(Voz alta)*: "Miren a la derecha. En 'Fill' no lo dejo así suelto, hago click en los 4 puntitos (Style), luego en el '+' y lo bautizo como **'Bg Principal'**. Acabamos de crear nuestra primera variable CSS en Figma."
4. Repite el proceso para crear un color adicional agresivo que definiste en tu rediseño, bautízalo como **'Color Acción Brutalista'**.
5. Finalmente, crea un cuadrado pequeño con la letra `R`.
6. Ve a 'Effects' a la derecha, agrega un `Drop Shadow`. Edítalo para quitarle el difuminado (`Blur = 0`) y colócalo sólido y duro (`X = 4, Y = 4`). Guárdalo de la misma manera con el nombre **'Sombra Brutalista Dura'**.

> **Ejecución del Alumno (5 minutos exactos):**
> *"No den un paso en falso sin su paleta. Tienen **5 MINUTOS** para crear 3 círculos y 1 cuadrado fuera de su celular. Quiero que saquen su paleta base a partir de esas inspiraciones de Carrd, las configuren como colores personalizados de Style, y claven ese efecto Drop Shadow. ¡Empiecen!"*

**3. Geometría Web (Dibujando el Skeleton) (5 min)**
**EN PANTALLA:** Te acercas al Frame de tu iPhone. Borras todo lo que sobró.

> **Tu explicación teórica precisa:**
> "Para hacer realidad nuestra Variante ganadora (la A), solo usaremos la geometría más básica, igual que en HTML.
> - Si necesito el Contenedor principal de la foto: La **letra O (Elipse)** equivale a nuestra queridísima etiqueta `<img>`.
> - Si necesito bloques o botones: La **letra R (Rectángulo)** equivale a nuestro mítico `<div>`.
> - Para letras: La **letra T (Texto)** para escribir nuestro `<h1>` y las `<p>`."

**Tu Acción Guiada:**
1. Traes tu foto de perfil desde el explorador y la arrastras dentro de un círculo.
2. Agregas texto ("Hola soy Pato") aplicando peso Bold y tamaño a 32px.
3. Agregas tu biografía en tamaño 14px Regular.

> **Pregunta de calibración rápida:**
> *"¿Alguien notó dónde se agrupan estas cosas que estoy dibujando? Si miran el lado izquierdo, hay un panel de 'Capas'. ¡Es exactamente el inspector de Elementos (DOM Tree) de Chrome! Las cosas que están más arriba en la lista de capas, tapan a las de abajo (z-index)."*

**4. El Clímax: El Botón Maestro, Flexbox y Auto Layout (20 min)**
**EN PANTALLA:** Un simple texto que dice "LinkedIn" flotando solitario de manera patética en el lienzo.

> **Nota táctica:** Este es el momento de volarles la cabeza y revelar la falacia del "Agrupado (Ctrl+G)".

> **Tu explicación teórica precisa:**
> "Chicos, muchos tutoriales viejos de diseño te dicen que para hacer un botón dibujes un rectángulo azul, escribas un texto blanco encima, lo selecciones todo y aprietes el temible `Ctrl+G` (Agrupar). **Eso es falso y un crimen en UX.**
> Si agrupo esto y el cliente mañana me dice que el botón no dice 'LinkedIn' sino 'Suscríbete a mi Patreon y Spotify y Twitch', mi botón se rompe, el texto se desborda horriblemente y la caja azul se queda inerte. Los agrupados estáticos no son web... la web tiene que estirarse orgánicamente. 
> 
> En CSS, para darle inteligencia y adaptación a los bloques, usamos `display: flex;`. Figma copió esa tecnología y nos la regaló bajo el nombre de **Auto Layout**. Miren."

**Tu Acción Guiada (Dominando el Auto Layout):**
1. Toma tu palabra "LinkedIn" (que acabas de crear con la `T`).
2. Sé dramático. Presiona: **`Shift + A`**.
3. *(Voz alta)*: "Observen qué belleza. A la derecha acaba de nacer el panel de Flexbox (Auto Layout). El texto ya no está flotando inútil, acaba de ganar un 'Frame contenedor' invisible que lo abraza mecánicamente y responde a dimensiones relativas. Ahora configuremos nuestro CSS visual."
4. Tira estas propiedades en voz alta en Figma mientras las vinculas con CSS:
   - "Donde Figma pone un borde espaciado arriba y abajo, eso es nuestro **´padding-top / bottom´**. Pondremos `16px`."
   - "En el espaciado izquierdo/derecho: nuestro **´padding-left / right´**. Pongamos `24px`."
   - "Hacemos click en los 4 puntitos de llenado (`Fill`) y le inyectamos nuestro Token **Color Acción Brutalista** que guardamos hace rato."
   - "Hacemos lo mismo para el **Color** del Texto."
   - "Hacemos click en las esquinas redondas y le ponemos un **´border-radius´** de `10px`."
   - "Le aplicamos a todo el bloque nuestra **Sombra Brutalista Dura** desde el panel de Effects."

**La Prueba de Resistencia:**
**EN PANTALLA:** Con un poco de zoom, ingresa al modo texto dentro de ese nuevo magistral botón hiper configurado.
> Empieza a tipear cosas sin sentido rápido ("LinkedIn y mi Instagram y Hola Mundo"). El botón debe crecer a lo ancho abrazando el texto orgánicamente sin soltar el padding ni la sombra. Los alumnos deben ver la magia de adaptar tamaños relativos en el diseño.
> *(Voz alta)*: "Eso, desarrolladores, es hacer un diseño pensando como alguien que después tendrá que codearlo. Mantenimiento bajo."

**5. Ejecución del Alumno (15 minutos exactos)**
**EN PANTALLA:** Cronómetro YouTube o Timer oficial de 15:00 en pantalla.

> **La acción guiada:**
> "Silencio absoluto. Es su turno. Su objetivo aquí es ensamblar **SU Variante escogida**, pero aplicando el rigor técnico.
> 1. Tráiganse su foto o pongan un color sólido temporal.
> 2. Pongan título y presentación.
> 3. Hagan **un solo** botón con su Auto Layout y estilos vinculados (`Shift + A`). 
> 4. Copien (`Ctrl+C`, `Ctrl+V`) ese súper botón Flexbox 3 o 4 veces y cámbienle el texto. Van a ver que nunca se romperá y las cajas se estirarán solas.
> ¡Los veo en el chat por cualquier consulta, el tiempo corre desde ya!"

### Momento 04: Prototipado, Exportación y QA (25 min)

> **Nota táctica de inicio:** Un diseño estático en un lienzo gris no impresiona ni vende. El objetivo final de Figma es simular un producto funcional para enviárselo al cliente o a los desarrolladores.

**1. El Prototipo Funcional interactivo (5 min)**
**EN PANTALLA:** Figma mostrando tu MyLinks ya terminado, estático dentro del Frame del iPhone.

> **Tu explicación teórica precisa:**
> "Diseñar es solo la primera mitad del trabajo. Si le mandas una foto estática a tu gerente, te pedirá 20 cambios. Si le mandas un link interactivo que parece una app real en su celular, te lo aprobará. A esa simulación jugable le llamamos **Prototipo**. Vamos a darle vida a nuestro plano."

**Tu Acción Guiada:**
1. Ve al panel derecho y cambia de la pestaña `"Design"` a `"Prototype"`.
2. *(Voz alta)*: "Con esto activamos la matrix interactiva. Seleccionen el nombre de su Frame (iPhone 14) en la lista de capas, para asegurarnos de que toda la pantalla será interactiva."
3. Dirígete a la parte superior derecha de Figma y presiona el ícono gigante de 'Play' (Present).
4. Mientras carga la nueva pestaña, comenta: *"Figma levantará un servidor virtual y montará nuestro diseño dentro del marco físico de un iPhone real. Es magia pura para los portafolios."*
5. Muestra el resultado final navegando el prototipo con el scroll.

**2. Exportación Final Limpia (5 min)**
**EN PANTALLA:** Regreso a la pestaña "Design" en Figma.

> **Tu explicación teórica precisa:**
> "El archivo de Figma no es el entregable final directo de hoy; para el Laboratorio necesito la evidencia plana, una foto de alta calidad (PNG) de su diseño. Muchos cometen el error de primerizos de exportar todo el lienzo gris, o piezas sueltas de fondo transparente. Yo quiero el 'celular completo'."

**Tu Acción Guiada:**
1. Selecciona explícitamente el nombre del Frame maestro en las capas ("iPhone 14 - Variante A").
2. *(Voz alta)*: "Tengan muchísimo cuidado. Deben seleccionar el FRAME padre, no un rectángulo de adentro. Bajen hasta el fondo del panel derecho donde dice **'Export'** y den en el '+'."
3. Muestra el selector de formato: *"Asegúrense de que esté en PNG. Un truco ninja: si notan que su exportación sale pixelada cuando la mandan por WhatsApp o Slack, cambien el multiplicador de tamaño de `1x` a `2x`. Escalará matemáticamente al doble sin perder calidad. Clic en 'Export iPhone...'."*

**3. Ejecución y Sesión de Debug Intensiva (QA) (15 min)**
**EN PANTALLA:** Una diapositiva fija que diga: "EJECUCIÓN FINAL 15 MIN: Tu Misión" con los requisitos del laboratorio (Exportado PNG).

> **La acción guiada:**
> "Se acabó la teoría. Tienen **15 Minutos Finales**. Deben agarrar los Legos (sus variables de color, el Auto Layout de los botones, su foto, su Layout planificado) y terminar de pulir su Frankenstein. Luego pruébenlo en el botón Play y expórtenlo. Súbanlo al repositorio de la clase."

*(Mantente monitoreando activamente el chat/audio. Figma es frustrante al principio. Aquí inicia tu sesión de Bug Fixing Técnico):*

> **Tus repuestas preparadas a Bugs Clásicos:**
> - *"Profe, muevo un botón y se me salen todas las letras volando y la sombra se queda atrás."* -> **Respuesta:** "Porque aplicaste Auto Layout (`Shift+A`) a los textos, pero los agrupaste erróneamente con rectángulos detrás. Borra los rectángulos, selecciona solo el texto pelado, y vuelve a hacer `Shift+A`, luego ponle color de 'Fill' a ese mismo bloque, no le pongas fondos atrás."
> - *"Profe, pongo la foto encima pero queda como por detrás del celular gris."* -> **Respuesta:** "Problema de Z-Index (Capas). Arrastraste la foto al lienzo, no al Frame. Mírala en el panel izquierdo de capas; tómala y arrástrala hacia ADENTRO del contenedor 'iPhone 14'."
> - *"Profe, intento bajar mi diseño en PNG, pero descargó solo la foto de mi cara recortada de fondo transparente."* -> **Respuesta:** "No seleccionaste el Frame maestro desde arriba. Clic exactamente arriba donde dice el nombre del celular ("iPhone 14"), y dale a exportar nuevamente abajito."
