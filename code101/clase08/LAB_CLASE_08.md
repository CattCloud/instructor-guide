Laboratorio 08: Vibe Coding responsable
🎯 Objetivos de Aprendizaje
🔑 Conceptos Clave
🔧 Setup inicial
💻 Actividades paso a paso
Paso 1: Redacta un prompt superficial
Paso 2: Genera la version 2 con un plan controlado
🏆 Retos
Reto 1: Refactoriza tu versión estable
Reto 2: Implementar botones personalizados
Reto 3: Agrega un patrón SVG al background
📝 Instrucciones de Entrega
Laboratorio 08: Vibe Coding responsable
En este laboratorio, pondrás a prueba el poder (y los límites) del Vibe Coding: generar código con inteligencia artificial a partir de prompts. El objetivo no es que la IA “lo haga todo”, sino que tú aprendas a dialogar con ella, revisar críticamente lo que te entrega y aplicar tu criterio como desarrollador en formación. Trabajaremos con Claude AI y artefactos interactivos para crear una segunda versión del proyecto MyLinks.

🎯 Objetivos de Aprendizaje
Reconocer el alcance y los límites del Vibe Coding.
Identificar errores o malas prácticas comunes en el código generado automáticamente.
Comprender la importancia de la redacción de un prompt con suficiente detalle técnico.
Estructurar un plan responsable de uso de IA para elaborar un prototipo con potencial de escalar.
🔑 Conceptos Clave
Prompt: Instrucción detallada que das a una IA para generar un resultado.
Tokens: Fragmentos de texto que la IA usa para procesar y limitar la respuesta.
Artefacto: Resultado interactivo generado por Claude, editable en tiempo real.
Vibe Coding: Prototipado rápido usando IA, útil para probar ideas, no para productos finales.
Contexto: Toda la información previa que la IA considera para responder. Si el contexto es claro, la IA responde mejor.
🔧 Setup inicial
Antes de comenzar:

Ingresa a claude.ai y asegúrate de tener una cuenta creada.
Abre tu proyecto my-links en github, en modo desarrollo del navegador (github.dev).
💻 Actividades paso a paso
Paso 1: Redacta un prompt superficial
Elabora un primer prototipo con baja precisión, utiliza este prompt en Claude:
Crea una aplicación web similar a linktree que tenga botones para mis redes sociales y una sección para mi información de perfil.
Crea una carpeta en tu repositorio llamada v1, y dentro 2 archivos: README.md e index.html
En el archivo index.html pega todo el código generado por la IA.
En el archivo README.md documenta todas las características perceptibles sobre los detalles que ha generado la IA en esta primera versión.
Para documentar, sigue esta plantilla:
Para estimar los tokens utilizados, cuenta la cantidad de caracteres generados por la IA (artefacto + respuesta en el chat), y dividelo entre 4. Por ejemplo: 2500 caracteres generados => 2500/4 = 625 tokens.
# MyLinks - v1 (vibe coding)
## Input - Prompt utilizado
(pega el prompt)

## Output
### Stack generado
(indica qué conjunto de tecnologías decidió utilizar la IA)

### Estilos
- Librería o CSS?
- Layout (Responsive? Centrado? Grid? Flexbox?)
- Colores (gradientes? solidos? cantidad de colores?)
- Animaciones

### Recursos
- Iconos utilizados?
- Emojis?
- Imagenes?

### Lógica
- Librería / Framework / Vanilla JS?

## Tokens
- Input (caracteres del prompt / 4)
- Output 1 (caracteres del artefacto / 4)
- Output 2 (caracteres de la respuesta en el chat / 4)
- Total: Input + Output 1 + Output 2
Realiza un commit y un minuto después, verifica que se ha generado el sitio público con github pages:
Ejemplo: https://miusuario.github.io/my-links/v1
Paso 2: Genera la version 2 con un plan controlado
Crea la carpeta v2 con los archivos: README.md e index.html
Repetiremos el paso 1 (prompt + analisis + documentacion)
Abre un nuevo chat y configuralo con Estilo Conciso de respuesta.
Ahora utiliza este primer prompt:
Crea una aplicación web con vanilla javascript y vanilla css, el objetivo es tener un hub de mis redes sociales, con una foto de perfil, una bio de 1 párrafo y 4 botones apuntando los links de mis redes sociales. El layout debe ser centrado y con soporte responsivo. El fondo debe ser una gradiente de colores neon.
Antes de generar el artefacto, dame un resumen del plan que seguirás para poder pulirlo si es necesario.
En este plan debes resumir cada detalle visual y lógico que has entendido y al final dame ideas sobre qué aspectos podría personalizar.
Luego, redacta un segundo prompt, con las personalizaciones que te gustaría tener e indicando que “genere el artefacto” (sé claro y conciso).
Recuerda documentar todo el nuevo chat dentro de la carpeta v2 de tu repositorio.
Agregale a tu documentación v2/README.md una sección: ## Mejoras Detectadas y escribe al menos 5 puntos de diferencia entre la versión 1 y 2.
🏆 Retos
Reto 1: Refactoriza tu versión estable
Edita los archivos de la raíz de tu repositorio: index.html y styles.css.
Aplica la estructura y/o los estilos que más te gustaron de la versión 1 y 2.
Corrige errores de ser necesario.
Realiza un commit con el mensaje: stable version after vibe coding
Reto 2: Implementar botones personalizados
Ingresa a una librería de botones como esta: https://uiverse.io/buttons?t=css
Escoge un botón atractivo, obtén el código y pegalo en tu prompt, con una indicación precisa para que replique este mismo estilo en los botones.
Corrige errores de ser necesario.
Realiza un commit con el mensaje: stable version: custom buttons
Reto 3: Agrega un patrón SVG al background
Ingresa a una librería de patrones SVG como esta: https://www.fffuel.co/
Escoge un patrón o textura atractiva, en formato SVG. Obtén el código y pegalo en tu prompt, con una indicación precisa para que utilice este patrón en el background de tu interface.
Corrige errores de ser necesario.
Realiza un commit con el mensaje: stable version: custom background
📝 Instrucciones de Entrega
Revisa que tu versión estable esté correctamente desplegada por github pages.
Responde en Canvas con:
Link a tu repositorio
Link al sitio desplegado
Captura del sitio desplegado
© Enter Tech School 2026


