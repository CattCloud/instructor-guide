# CAPA 0 — Clase 08: Vibe Coding con IA
> Archivo de estudio personal del instructor. Sin guion, sin pantallas. Solo conceptos, analogías e historia.

---

## CONCEPTO: LLM (Large Language Model)
Un LLM es un modelo de inteligencia artificial entrenado con enormes volúmenes de texto (libros, páginas web, código fuente, artículos) usando una arquitectura matemática llamada Transformer. A diferencia de la búsqueda web (que navega por páginas conocidas), un LLM genera texto nuevo prediciendo cuál es la palabra más probable según el contexto previo.
Depende técnicamente de: datos de entrenamiento (calidad y volumen), tamaño del modelo (medido en parámetros, ej. 7B, 70B), y el proceso de fine-tuning y RLHF (ajuste fino con retroalimentación humana).
Ejemplos reales: ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google), Llama (Meta).

### ANALOGÍA: El Autocompletado del Celular con Esteroides
¿Has notado cómo el teclado de tu celular te sugiere la siguiente palabra basándose en lo que sueles escribir? Un LLM hace exactamente lo mismo, pero en lugar de haber aprendido solo de tus chats, ha leído literalmente todo internet. No tiene "pensamientos", no razona; ejecuta un ensayo de probabilidad hiper-complejo para adivinar cuál es la palabra matemáticamente más probable que debe seguir a tu frase.

### HISTORIA: De los Transformers (2017) al ChatGPT (2022)
En 2017, investigadores de Google publicaron el paper "Attention is All You Need", introduciendo la arquitectura Transformer. En 2022, OpenAI lanzó ChatGPT al público masivo. En 6 días alcanzó 1 millón de usuarios (comparado: Instagram tardó 2.5 meses). Hoy la industria moviliza billones de dólares alrededor de esta tecnología.

### ESTRATEGIA VISUAL: Diagrama en Excalidraw
Dibuja en vivo el flujo: `Texto de entrada → LLM → predicción de siguiente token → texto generado`. Usa colores para diferenciar el input (azul), el modelo (caja negra) y el output (verde). Conecta con su experiencia directa con ChatGPT.

---

## CONCEPTO: Token
Un token NO es una palabra completa. Es una unidad subléxica que el modelo usa para procesar texto. En inglés, las palabras cortas suelen ser 1 token; palabras largas o raras se fragmentan. En español el tokenizado suele ser menos eficiente (más tokens por palabra). Regla práctica: **1 token ≈ 4 caracteres en inglés / ~3 caracteres en español**.
Los tokens son el "dinero" de la IA: los modelos tienen un límite de tokens por conversación (ventana de contexto, ej. 200k tokens en Claude 3.5 Sonnet).



### HISTORIA: La Economía del Token
Con GPT-3 (2020), OpenAI introdujo la API pública con precios por token (input + output). Esto creó toda una industria de optimización de prompts para gastar menos tokens sin perder calidad. Hoy plataformas de uso masivo como Claude tienen niveles gratuitos con límites mensuales de tokens.

### ESTRATEGIA VISUAL: Tiktoken en vivo
Abre en el proyector la página oficial **OpenAI Tokenizer** (`platform.openai.com/tokenizer`). Pega un texto en inglés y luego el mismo texto en español. Los alumnos verán en vivo, mediante colores, cómo la IA fragmenta las palabras (demostrando que el español consume más piezas/tokens). Esta visualización interactiva vale por mil explicaciones teóricas.

---

## CONCEPTO: Prompt
Un prompt es la instrucción textual que le das a un LLM para guiar su respuesta. No es una búsqueda en Google: es el inicio de un contexto conversacional. Existen técnicas estándar en la industria para mejorar su precisión:
- **Zero-shot:** Pedir la tarea directa sin ejemplos ("Hazme un código").
- **One/Few-shot:** Darle 1 o varios ejemplos previos para que imite el formato.
- **Role Prompting:** Asignarle una identidad antes de la orden ("Actúa como un Senior Developer experto en CSS").
Depende técnicamente de: la ventana de contexto del modelo y la jerarquía de instrucciones.

### ANALOGÍA: El Brief del Diseñador
Si un cliente le dice a un diseñador "hazme un logo bonito", el resultado será genérico. Si dice "logo para empresa de construcción sostenible, colores tierra, tipografía geométrica sin serifa, sin figuras humanas", el resultado es preciso. El prompt es el brief: a más contexto, menos suposiciones.

### HISTORIA: Del Click al Texto (2020-presente)
Históricamente, toda interacción con software fue estructurada: botones, formularios, menús. GPT-3 rompió eso al permitir lenguaje natural puro. En 2022-2023 emergió el "Prompt Engineering" como disciplina formal. Anthropic (creadores de Claude) publica guías de prompting que son usadas por ingenieros senior en toda la industria.

### ESTRATEGIA VISUAL: Comparación lado a lado
Proyecta dos interacciones con Claude en vivo:
1. Prompt vago: `"Hazme un Linktree"` → resultado genérico
2. Prompt scaffolded del lab → resultado personalizado
La diferencia visual es el mejor argumento.

---

## CONCEPTO: Prompt Scaffolding
El Prompt Scaffolding es una técnica de construcción incremental de prompts mediante preguntas guiadas (con opciones A/B/C/D) que eliminan la fricción de "no sé cómo pedir". El alumno responde decisiones de estilo, la herramienta ensambla el prompt técnicamente correcto.
Depende técnicamente de: que las preguntas cubran los parámetros críticos de la tarea (layout, colores, tipografía, comportamiento interactivo, requisitos técnicos). Sin cubrir todos los parámetros, el prompt resultante sigue siendo incompleto.

### ANALOGÍA: El Cuestionario del Doctor
No le dices al médico "me siento mal, cúrame". Él te hace preguntas sistemáticas: ¿dónde duele?, ¿desde cuándo?, ¿es constante?, ¿a qué hora empeora? Con todas las respuestas, puede diagnosticar. El scaffolding hace lo mismo: preguntas específicas → diagnóstico preciso → prescripción precisa.

### ESTRATEGIA VISUAL: Demostración guiada con voluntario
Pega el prompt de scaffolding en Gemini. Llama a un voluntario, haz las preguntas en voz alta frente a la clase. El resultado visible en pantalla es el prompt final. El resto de la clase lo verá en acción antes de hacerlo ellos.

---

## CONCEPTO: Artifact (Claude)
Un Artifact en Claude es un bloque de contenido autónomo (generalmente código) que se renderiza en un panel lateral separado del chat, permitiendo vista previa en tiempo real y edición interactiva. A diferencia de copiar texto del chat a un archivo, el Artifact es un entorno vivo donde el alumno puede ver el HTML/CSS renderizado mientras lo genera.
Depende técnicamente de: que el modelo identifique que el contenido es autónomo y ejecutable (código HTML, SVG, React, etc.). No todo output de Claude es un Artifact automáticamente; a veces hay que pedir explícitamente: `"genera el código en un artifact"`.

### ANALOGÍA: El Cuarto de Pruebas en Vivo
Es como tener al diseñador/desarrollador trabajando en tu pantalla en tiempo real. En lugar de que te mande el archivo por email (copiar texto del chat), ves el resultado evolucionar directamente. Cuando pides un cambio, se actualiza en segundos frente a tus ojos.

### ESTRATEGIA VISUAL: Demostración directa en Claude
Muestra en pantalla dividida: izquierda el chat con instrucciones, derecha el Artifact renderizado. Cambia algo en el prompt (ej. color de fondo) y muestra la actualización. Sin explicación teórica adicional: la demo habla por sí sola.

---

## CONCEPTO: Vibe Coding
Término acuñado por Andrej Karpathy (ex-director de IA de Tesla y cofundador de OpenAI) en febrero de 2025, que describe una metodología de desarrollo donde el programador delega casi completamente la escritura de código a la IA, interactuando en lenguaje natural, revisar resultados visualmente y pidiendo ajustes. El uso responsable implica iterar con criterio técnico; el uso irresponsable implica aceptar el primer output sin comprensión.
Depende técnicamente de: la calidad del prompt inicial, la capacidad de iteración crítica del usuario, y el conocimiento mínimo de HTML/CSS necesario para validar el resultado.

### ANALOGÍA: El Compositor con IA
Un compositor le dice a una IA "quiero una pieza melancólica en re menor con tempo lento y violines prominentes". La IA genera una partitura. Si el compositor no sabe leer música, no sabrá si la partitura está bien. Si lo sabe, puede pedir ajustes específicos: "los violines del compás 8 al 12 son demasiado agudos". El Vibe Coding funciona igual: el criterio técnico es el diferenciador entre un usuario consumidor y un profesional.

### HISTORIA: El Tweet que Cambió la Conversación
El 15 de febrero de 2025, Andrej Karpathy publicó un tweet describiendo cómo construyó una aplicación completa "sin escribir código", solo hablando con la IA. El término "Vibe Coding" se viralizó instantáneamente. Hoy existen herramientas especializadas: Cursor, GitHub Copilot, Replit Agent, Lovable, v0 (Vercel). El debate sobre si reemplazará a los desarrolladores es el más caliente de la industria en 2025.

### ESTRATEGIA VISUAL: Imagen comparativa o pregunta de apertura
Antes de definir el término, lanza la pregunta al chat: *"¿Qué peligros ven en desarrollar software completamente con IA sin entender el código?"*. Recoge 3-4 respuestas. Luego presenta el concepto y la anécdota de Karpathy. El debate precede a la definición.

---

## CONCEPTO: Agentes de Codificación (Coding Agents)
Un paso más allá del Chatbot conversacional (como la web de ChatGPT o Claude) está el **Agente de Codificación**. Mientras un chatbot te escupe texto en una pantalla web para que tú lo copies y lo pegues en tu editor, un Agente vive *dentro* de tu editor de código (o tiene el suyo propio). Tiene "manos y ojos": puede leer tus archivos, buscar bugs en todo tu repositorio entero, crear archivos nuevos y ejecutar comandos en tu terminal.
Depende técnicamente de: capacidades de LLMs, acceso y permisos al File System del usuario, y uso interno de herramientas (Tools/Function Calling). Ejemplos: Cursor, Windsurf, Devin.

### ANALOGÍA: El Arquitecto Asesor vs El Albañil Contratista
Un LLM estándar (ChatGPT web) es el Arquitecto Asesor: le muestras tus planos, te dice qué está mal, y te da la idea de cómo arreglar el concreto. Tú tienes que ir y arreglarlo. 
Un Agente de Codificación es el Albañil Contratista: le dices "la pared está chueca", él mismo va, mira todos tus planos, saca el martillo, rompe la pared, corrige el concreto y te dice "listo, compruébalo".

### ESTRATEGIA VISUAL: Demostración Rápida
Mostrar una captura o 10 segundos de la inferfaz de un IDE basado en agentes (como Cursor o Windsurf) donde el agente en una barra lateral selecciona solo los archivos relevantes de un gran árbol de carpetas y ejecuta cambios.

---

## CONCEPTO: Iteración con IA
Iterar con IA es el proceso de refinar progresivamente el resultado de un LLM a través de instrucciones de ajuste específicas. La iteración efectiva requiere feedback concreto y técnico ("aumenta el padding a 1.5rem entre botones") en lugar de evaluativo vago ("no me gusta"). Cada iteración consume tokens adicionales y reduce la ventana de contexto disponible.

### ANALOGÍA: El Sastre y el Cliente
El sastre hace un traje, el cliente lo prueba. "Las mangas están largas exactamente 3 cm" → el sastre ajusta. "No me gusta" → el sastre no sabe qué cambiar. En las iteraciones con IA, la especificidad del feedback es todo. Si el alumno no logra articular qué está mal visualmente, no podrá mejorar el resultado.

### ESTRATEGIA VISUAL: Dinámica en vivo
Pide a un alumno que diga algo vago sobre el resultado generado ("no me gusta el color"). Pregunta cómo haría el cambio específico. Guía la reformulación: "¿qué color específico? ¿en qué elemento?". Cuando el alumno formula el prompt correcto, ejecuta el cambio en vivo. El constraste es pedagógico.

---

## CONCEPTO: GitHub Pages
GitHub Pages es un servicio de hosting gratuito de GitHub que toma los archivos de un repositorio público (o privado en cuentas Pro) y los publica en una URL pública bajo el dominio `usuario.github.io`. Solo sirve sitios estáticos (HTML, CSS, JS), no procesa server-side. El deploy ocurre automáticamente tras cada `git push` a la branch configurada (generalmente `main`).
Depende técnicamente de: que el archivo principal se llame exactamente `index.html` (case-sensitive), que el repositorio esté configurado con Pages habilitado en Settings, y que el push esté completado antes de esperar la URL.

### ANALOGÍA: Instagram para tu Código
Tu foto existe en tu teléfono (local). Al subirla a Instagram, está en internet y cualquiera puede verla con el link. GitHub Pages hace lo mismo con tu `index.html`: está en tu computadora, haces `git push`, esperas 2 minutos, y aparece en una URL pública que cualquier persona con el link puede visitar desde cualquier dispositivo en el mundo.

### HISTORIA: Hosting Democratizado (2008-hoy)
Publicar un sitio web en el año 2000 requería: comprar un dominio, contratar un servidor, configurar DNS, subir archivos por FTP. Costaba decenas de dólares al mes. GitHub Pages (lanzado en 2008) eliminó todo eso. Hoy, la documentación de proyectos Open Source como Bootstrap, React, Vue y Angular usan GitHub Pages. Es el estándar gratuito de la industria para sitios estáticos.

### ESTRATEGIA VISUAL: Live demo desde cero
Proyecta el panel de Settings de tu repositorio personal. Navega hasta Pages, activa. Muestra el conteo de tiempo real (pone un cronómetro). Cuando la URL aparece, ábrela desde tu teléfono con la cámara encendida para que la clase vea la reacción. Este es el "momento wow" de la clase.

---

## Dependencias Técnicas Clave (Para no improvisar)

| Concepto | Depende de |
|----------|-----------|
| Token | Ventana de contexto del modelo (límite máximo) |
| Prompt Scaffolding | Que se cubran todos los parámetros críticos de la tarea |
| Artifact | Que Claude detecte contenido autónomo y ejecutable |
| GitHub Pages | `index.html` en root, Pages habilitado en Settings, push completado |
| Vibe Coding responsable | Criterio técnico mínimo para validar y corregir el output |
