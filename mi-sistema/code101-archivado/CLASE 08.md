# FLUJO DE CLASE 08

## **Momento 01: La Historia de la IA y Conceptos**

> **Nota táctica de inicio:** Primero definimos el concepto real (LLM), y solo después atacamos los mitos. Sin la definición clara, hablar de un mito significa darlo por sentado.
> 

### **1.1 La Historia en Imagen**

**EN PANTALLA: Imagen de la Historia de la IA — mostrar el flujo completo.**

> **Instrucción:** NO expliques cada etapa en detalle técnico. El patrón es suficiente. La pregunta guía es: *“¿Qué problema había con la tecnología anterior y por qué fue necesario inventar la siguiente?”*
> 

| Era | El Problema Que Tenía | La Solución Que Vino |
| --- | --- | --- |
| Programación Tradicional | **El Problema que Resuelve:**
**Programación tradicional (antes):**
• Tú escribes reglas explícitas.
• La máquina solo ejecuta instrucciones."Si pasa A, haz B. Si pasa C, haz D."
Necesitabas escribir una regla para CADA situación
Imposible cubrir todos los casos | Machine Learning: 
En vez de programar reglas, programas el sistema para que **aprenda reglas desde datos**.
A**prende patrones de los datos** en lugar de seguir reglas explícitas.
**SÍ es:** Estadística avanzada + algoritmos de optimización |
| Machine Learning | Aprendía bien cosas simples, se perdía con datos complejos.
Para reconocer un gato en una foto, un ingeniero tenía que:
1. Programar manualmente cómo detectar bordes
2. Programar cómo detectar texturas
3. Programar cómo combinar esas features
4. Entrenar un modelo simple con esas features | Deep Learning: redes neuronales más profundas
Que la máquina aprenda representaciones internas por sí sola.
**Deep Learning es Machine Learning pero con redes neuronales muy profundas + muchísimos datos + GPUs poderosas**.
**¿Por qué “profundas”?** Porque tienen muchas **capas ocultas** que procesan información en etapas.
Para este punto : Deep Learning Necesita MUCHOS Datos y GPUs
• **ML Tradicional:** 10,000 ejemplos, 100 features, entrena en CPU (minutos)
• **Deep Learning (ImageNet):** 1.2 millones de imágenes, 60 millones de parámetros, entrena en GPUs (días) |
| Deep Learning | Difícil de entrenar, lento, necesitaba mucha data etiquetada
Antes de 2017, para procesar texto se  leían **palabra por palabra** en orden secuencial.
• **No paralelizable:** Tiene que procesar palabra por palabra ,  Procesa **lentamente** (no puede paralelizar: debe esperar a que termine palabra 1 antes de procesar palabra 2)
• **Memoria limitada:** **Olvida** información lejana (si la oración tiene 50 palabras, tiende a olvidar las primeras)
• **Relaciones de largo alcance:** No conecta bien palabras muy separadas
 | Transformers (2017, Google): atención paralela masiva
Procesa **toda la frase a la vez** y usa un mecanismo llamado **Attention** para decidir qué palabras son relevantes para cada contexto.
Imagina un editor de libro con superpoderes. No memoriza cada libro que lee, pero después de leer 100,000 libros, desarrolla una "intuición" sobre:
• Qué palabra suele seguir a otra
• Cómo se estructura una historia
• Qué estilo usa cada género
• Cómo se relacionan conceptos distantes en un texto |
| Transformers | El modelo existe pero nadie sabe cómo usarlo bien | LLMs: modelos gigantes con interfaz de lenguaje natural |
| LLMs | Solo responde en el chat, no actúa por sí solo | Agentes de IA: puede usar herramientas, navegar, escribir código |

> **Cierre del vuelo rasante:***“Todo lo que ven en la imagen no es la historia de una tecnología. Es la historia de un mismo problema que se fue resolviendo capa por capa. Y hoy, en esta clase, ustedes van a usar la capa más reciente: los LLMs y los Agentes.”*
> 

### **1.2 ¿Qué ES un LLM?**

**EN PANTALLA: Imagen generada con la frase L — L — M** 

> **La analogía del autocorrector (Conectar con algo que ya conocen):***“**¿Estimados creo que todos aqui conocemos el autocorrector cierto, estas escribiendo un mensaje en WhatsApp y el celular te sugiere la siguiente palabra antes de que la escribas?** 
Eso es un modelo de lenguaje. Ahora imagínate ese autocorrector… entrenado con toda la escritura de la humanidad, con miles de millones de parámetros, capaz de predecir no solo la siguiente palabra sino los siguientes 500 párrafos más el código HTML completo que necesitas. Eso es un LLM.”*

Los LLMs son **motores de completado de texto** (text completion engines). 
**Predicen** **cuál será el siguiente token (palabra o fragmento de palabra)** basándose en el contexto previo. Todo lo que hace un LLM —desde responder preguntas hasta escribir código— es **completado de texto iterativo.**
Su única tarea fundamental es:
> 
> - Leer un texto de entrada.
> - **Predecir cuál es el siguiente token más probable**.
> 
> Y luego repetir ese proceso **una y otra vez**.
> 

<aside>

**La dinámica rápida para demostrar prediccion ("El cielo es..."):**

1. Frase:  `El cielo es...`
2. Detente y pregunta al grupo: *"Si ustedes fueran la IA entrenada con billones de libros, ¿qué color predecirían que va a continuación con un 95% de seguridad?"* (Espera que griten "Azul").
3. Continúa y escribe en la misma línea: *"Exacto. 'Azul'. Pero, ¿qué pasa si le doy más piezas al rompecabezas previo? Si yo escribo: 'El cielo del planeta Marte es...', la probabilidad del token 'azul' cae a 0% de inmediato y la del token 'rojo' sube a la cima."*

> **El remate táctico (El puente al diseño de Prompts):***"Esa es la diferencia entre un amateur y un profesional de código hoy. Si le dan poco contexto previo a la IA, simplemente imprimirá los tokens estadísticamente más obvios, aburridos y genéricos. 
Deben reducir las posibilidades al resultado que ustedes realmente desean, recuerden que es pura estadistica
Si quieren resultados pro, tienen que forzar a la IA a escribir un 'cielo de Marte'. Eso lo haremos creando un contexto súper específico con Prompts Profesionales."*
> 
</aside>

> **Tu explicación (sigla por sigla):**
- **L — Large (Grande):** *“No son modelos pequeños de un laboratorio. Fueron entrenados con cantidades masivas de texto: libros, artículos, código, foros, conversaciones de internet. Hablamos de cientos de miles de millones de palabras.”*
- **L — Language (Lenguaje):** *“Están entrenados específicamente en lenguaje humano. No en imágenes, no en videos, no en señales. En texto. Por eso se comunican contigo tan bien.”* (aunque modelos multimodales ahora procesan imágenes/audio)
- **M — Model (Modelo):** *“Un modelo matemático. Una función gigantesca que toma texto de entrada y produce texto de salida. Nada más.”*
> 

### 1.2 Los 5 Mitos (Bloques Ocultos — Solo Reveal)

**EN PANTALLA: Presentación con 5 bloques ocultos/oscuros con signos de interrogación encima de cada uno.**

> **Tu apertura:** *“Ahora que ya saben qué ES un LLM, quiero ver si sus ideas previas coinciden con la realidad. Tengo 5 creencias muy comunes sobre la IA. Las voy a revelar una por una — ustedes me dicen: ¿verdad o mentira?”*
> 

Revela un bloque a la vez. **Primero pregunta al chat** quién lo creía cierto, espera 2-3 respuestas, y luego revelas la realidad.

| # | El Mito (Bloque Oculto) | La Realidad que revelas | EJEMPLO |
| --- | --- | --- | --- |
| 1 | ***“La IA piensa como un humano”*** | ❌ No razona. Predice la siguiente palabra más probable. No hay conciencia ni intención. | Si le pides a la IA sumar 2+2, no ejecuta una operación aritmética, sino que responde "4" porque es la secuencia de caracteres más probable según su entrenamiento; si sus datos dijeran que es "5", te lo afirmaría con la misma seguridad. |
| 2 | ***“La IA busca en Google en tiempo real”*** | ❌ Tiene conocimiento hasta una fecha de corte. No tiene internet (a menos que le integren esa herramienta por separado). | **Ejemplo:** Si le preguntas por una noticia que ocurrió hace diez minutos, la IA te dirá que no existe o inventará algo basado en eventos pasados, porque vive encerrada en una "cápsula del tiempo" de datos previa a su entrenamiento. |
| 3 | ***“La IA siempre dice la verdad”*** | ❌ Puede “alucinar”: inventarse datos, citas, links y personas que no existen, con total confianza. | **Ejemplo:** Si le pides citas para tu tesis,posiblemente la IA redactará un cita detallada con fechas y en formato APA, no por mentir, sino porque su función es completar el texto de forma coherente, aunque sea pura ficción, el sabe como redactar correctamente una cita. |
| 4 | ***“La IA entiende lo que le escribes”*** | ❌ No “entiende”. Reconoce patrones estadísticos. El significado no existe para ella, solo la probabilidad. | **Ejemplo:** Si le escribes "Tengo hambre", la IA no siente empatía ni imagina comida; simplemente detecta que esa frase suele ir seguida de "Aquí tienes recetas", operando como un teclado predictivo gigante, pero sin conciencia del hambre. |
| 5 | ***“La IA reemplazará a los programadores”*** | ⚠️ Reemplazará a quienes no la usen. El que sabe pedir bien siempre tendrá ventaja. | **Ejemplo:** La IA puede escribir el código de un login en segundos, pero si el programador no sabe explicarle la arquitectura de seguridad o corregir un error lógico complejo, el código resultante será un cascarón inútil y peligroso. |

> **Pregunta de calibración final (después del último bloque):***“¿Alguien tenía al menos 2 o 3 de estos como verdad? No hay vergüenza, la industria confunde a todo el mundo a propósito.”*
> 

### **1.3 Modelos del mercado**

**EN PANTALLA:** Logos de Claude, ChatGPT y  Gemini en pantalla.

> **Tu explicación:***“Hoy existen varios LLMs en el mercado. No son iguales. Cada uno tiene un perfil, una fortaleza y un caso de uso más recomendado. Como desarrolladores, su ventaja está en saber cuándo usar cuál.”*
> 

**Tabla comparativa (mostrar en slides o en pantalla):**

| Modelo | Empresa | Mejor Para | Su papel en programación |
| --- | --- | --- | --- |
| **ChatGPT (GPT-4o)** | OpenAI | Resolver dudas rápidas, dar ideas creativas y escribir scripts generales. | Debug rápido, explicación de errores, generación de snippets. Tiene plugins de ejecución de código. |
| **Claude** | Anthropic | Explicar temas complejos y leer documentos muy largos sin perder el hilo. | Genera código completo, explica línea por línea, crea **Artifacts** renderizables. Ideal para laboratorios como el de hoy. |
| **Gemini** | Google | Buscar información actualizada en internet y conectar con herramientas de Google. | Analizar documentos grandes, generar prompts estructurados, trabajar con Google Docs/Drive. Excelente para planificar antes de codear. |

> **Pregunta de calibración:***“Si tuvieran que elegir uno ahora mismo para escribir su portafolio web completo desde cero, ¿cuál elegiría cada uno y por qué?”(Espera 3-4 respuestas rápidas del chat. El objetivo no es que acerten, es que razonen con criterio.)*
> 

> **¿Por qué Claude hoy?***“Excelente pregunta que me están respondiendo. Hoy usaremos Claude específicamente porque tiene una función que los demás no ofrecen igual: los **Artifacts**. Un Artifact es un panel renderizable donde Claude no solo escribe el código… sino que lo ejecuta en vivo al lado derecho del chat. Verán su página web construirse en tiempo real mientras la IA escribe. Eso cambia todo.”*
> 

## **Momento 02: Tokens y el Arte del Prompt**

> **Nota táctica de inicio:** La secuencia de este momento es deliberada: Token (el costo) → Prompt básico (la herramienta) → Scaffolding (la técnica pro). Cada concepto justifica al siguiente. El Scaffolding es donde el alumno fabrica el arma que disparará en el Momento 03.
> 

### **2.1 ¿Qué es un Token? (Demo en Vivo)**

**EN PANTALLA:** Navegador abierto en `platform.openai.com/tokenizer`

> **Tu explicación:**
Cuando escribes en ChatGPT, crees que le estás pasando palabras. En realidad, la máquina es ciega a tu texto. La **Tokenización** es el proceso de traducción que convierte tus palabras, imágenes o audios en **tokens**.
**TODO PARTE DE TU PROMPT : Explicas que es un prompt**
> 

> **¿Qué es un Token EXACTAMENTE?**
Un token es una unidad numérica que representa un fragmento de información.

Un token puede ser:
- Una palabra completa
- Parte de una palabra
- Un símbolo
- Un espacio

⚠️ **Un token NO es una palabra.**
 1 token ≈ 4 caracteres (inglés)
1 token ≈ 3.5 caracteres (español)

 **Vocabulario del modelo:** El “diccionario” fijo que tiene el modelo. GPT-4 tiene un vocabulario de aprox. 100,000 tokens únicos. Todo lo que digas debe formarse combinando esas piezas.
> 

**La demo en vivo (Secuencia exacta):**

1. Escribe en el tokenizador: **Hello, how are you?** → Cuenta los tokens en voz alta. *“4 palabras, 5 tokens.”*
2. Escribe la traducción: **¿Hola, cómo estás?** → *“La misma idea en español… ¿cuántos tokens? [pausa dramática] Más. El español, el portugués y el francés son estructuralmente más ricos, y eso le cuesta más tokens al modelo.”*

**Pregunta : PORQUE IMPORTA CONTAR LOS TOKENS?**

No creas que los LLMS tienen memoria infinita ,son datacenters , **PORQUE CREES QUE LOS LLM CHAT implementan limites para usar su modelo?**

> **¿Por qué importa esto?** *“Cada LLM tiene un límite máximo de tokens por conversación, llamado **Ventana de Contexto**.* 
El Context Window (Ventana de Contexto) es la cantidad máxima de texto que un LLM puede "ver" y procesar en una sola interacción.
**"Una interacción" es: **Todo el historial de la conversación hasta ese momento + Tu nueva pregunta.**
Es el límite de **cuánta información puede tener el modelo en su "memoria RAM" en el instante exacto en que va a generarte una respuesta.**
Es como la "memoria de trabajo" del modelo: todo lo que puede leer y recordar al mismo tiempo
> 
> - *Cuando se llena, el modelo empieza a ‘olvidar’ lo que dijeron al inicio del chat. Por eso los prompts deben ser precisos: cada token innecesario le roba espacio a tu proyecto.”*

> **Pregunta de calibración:***“Si el español cuesta más tokens que el inglés, ¿qué hacemos? ¿Siempre promtear en inglés aunque nuestro proyecto sea en español?”(Espera respuestas. La respuesta ideal: depende — para código, inglés es más eficiente; para contexto cultural o texto de UI, español tiene sentido.)*
> 

### 2.2 El Prompt No Es una Búsqueda de Google

**EN PANTALLA:** Dos columnas lado a lado — Google vs Claude.

> **Tu explicación:***“Cuando buscan en Google, usan palabras clave: **'responsive css tutorial 2024'**. El motor interpreta esas palabras y busca páginas relevantes. Eso es navegar. Un Prompt es diferente: es una **instrucción completa con contexto**. La IA no busca; produce. Y la calidad de lo que produce depende 100% de qué tan bien le explicaste qué necesitas.”*
> 

**Existen técnicas de diseño de Prompt para tener un prompt de calidad deacuerdo a lo que se quiere.**

> En IA, un “Shot” es un ejemplo de entrenamiento. Cuantos más ejemplos le des al modelo en el prompt, mejor entenderá el patrón.
> 

| Técnica | ¿Qué hace? | Ejemplo que ejecutare en el chat para demostrar como funcionan |
| --- | --- | --- |
| **Zero-shot** | Pedido directo, sin contexto extra | "Explica qué son los nanobots" |
| **One/Few-shot** | Le das un ejemplo del formato esperado
Los LLMs son excelentes imitadores. Al darles un ejemplo, no solo les dices *qué* hacer, sino *cómo* hacerlo. | "Sigue este formato de analogía para explicar un concepto técnico:**Ejemplo:** 'La Inteligencia Artificial es como un chef que ha leído todas las recetas del mundo y crea platos nuevos combinando lo que aprendió'.**Tarea:** Explica qué son los **nanobots** usando una analogía similar al ejemplo" |
| **Role Prompting** | Consiste en pedirle explícitamente a la IA que adopte una persona o función específica
Le asignas una identidad profesional
Los LLMs han sido entrenados con millones de documentos. Al asignar un rol, activas un subconjunto específico de ese conocimiento y vocabulario. Si le dices "Actúa como un médico", el modelo accederá a sus patrones estadísticos relacionados con terminología médica, empatía clínica y diagnóstico, ignorando patrones de lenguaje coloquial o irrelevante,. | Actúa como un **Ingeniero de Robótica** muy carismático y divertido. Explica los nanobots a jovenes de 15 años. |

> **Que es Prompt Scaffolding?**
> 
> 
> **El Prompt Scaffolding es la técnica de construir una instrucción estructurada por bloques lógicos (rol, contexto, tarea, restricciones y formato) para guiar a la IA hacia un resultado exacto sin que tenga que adivinar nada.**
> 
> Para explicárselo a tus alumnos de forma clara y directa, puedes usar esta analogía:
> 
> - “Chicos, imaginen que van a construir un edificio. No le dicen al maestro de obra ‘hazme una casa’ y se van a dormir; le entregan un plano estructurado con las bases, las columnas y los detalles. El Scaffolding (que literalmente significa ‘poner andamios’) es darle ese plano a la IA. En lugar de lanzarle una frase suelta, le armamos una estructura de información sólida para que construya la respuesta perfecta sin derrumbarse ni desviarse del tema.”
> 
> Estructura completa con Rol + Contexto + Tarea + Restricciones + Formato de salida*
> 

<aside>

**Ejemplo de Prompt Scaffolding**
“[ROL] Actúa como un experto en divulgación tecnologica especializado en niños. [CONTEXTO] Mi sobrino de 8 años tiene curiosidad por los nanobots porque vio el traje de Iron Man echo de nanobots. [TAREA] Explica qué son los nanobots. [RESTRICCIONES] Usa máximo 100 palabras, no uses palabras cientificamente complejas [FORMATO] Devuelve la respuesta en formato de cuento corto con un final motivador.”

</aside>

> **La clave:***“No son técnicas excluyentes. Un prompt pro las combina todas. El Role Prompting le da perspectiva, el Few-shot le da referencia, y el Scaffolding las ensambla todas en una estructura que el modelo puede seguir sin perderse.”*
> 

## **Momento 03: Laboratorio Guiado — Prompt Scaffolding + Vibe Coding — 40 min**

> **Nota táctica de inicio:** Modo “hagámoslo juntos”. El instructor ejecuta cada paso en vivo y los alumnos lo replican al mismo tiempo. Nadie espera para ver — todos construyen a la par. El instructor es el Caso de Estudio 0 que va un paso adelante.
> 

### **3.1 El Prompt Scaffolding en Acción (V1 vs V2)**

> **Nota táctica:** Este es el corazón del Momento 03. El alumno y el instructor construyen el prompt juntos paso a paso. El resultado de este bloque es el arma que disparará en el Momento 04.
> 

### **PASO 0 — Cuenta en Claude y Gemini, dales tiempo para que se creen su cuenta**

> Tiempo aproximado para que se creen su cuenta: 5 min
> 

### **PASO 1 — El Prompt Vago (V1 — Lo que NO debes hacer)**

**EN PANTALLA: Claude abierto en pestaña nueva.**

Escribe en vivo este prompt tal cual, sin modificar

- Comparteles el prompt
- Ellos tambien deben ejecutarlo en su Claude

```
Crea una aplicación web tipo linktree que tenga botones para mis redes sociales y una sección para mi información de perfil.
```

> Espera el resultado. Comenta en voz alta mientras carga:
*“Esto es Zero-shot puro. Le di exactamente cero contexto sobre quién soy, qué estilo quiero, qué colores, qué tecnología… La IA tendrá que adivinar absolutamente todo.”*
> 
> 
> Cuando aparezca el resultado: *“¿Ven? Funciona. Tiene HTML. Pero es completamente genérico. Sin mi nombre, sin mis colores, sin mi objetivo de diseño. Podría ser la página de cualquier persona.*
> 
>  *Talvez pueda ser un diseño bonito pero no es lo que quiero no es el diseño que construir en el laboratorio pasado”*
> 

### **PASO 2 — Construir el Prompt Scaffolded (V2)**

**EN PANTALLA: Gemini abierto en otra pestaña.**

> *“Ahora lo hacemos bien. Usaremos Gemini como planificador para armar el prompt estructurado que le daremos a Claude. Gemini es excelente para razonar y organizar contexto largo; Claude es nuestro constructor. Cada herramienta en su rol.”*
> 

> **Instrucción al instructor (ANTES de compartir la plantilla):***“**¿Recuerdan el trabajo de la clase pasada?** Definieron un Objetivo de Rediseño, eligieron una variante de layout, y crearon sus paletas de color en Figma. Toda esa información ya existe. Lo que vamos a hacer ahora es convertir ESE trabajo en el contexto que la IA necesita para generar su código. Sin esa información, la IA adivina. Con esa información, la IA construye exactamente lo que ustedes diseñaron.”*
> 

**Comparte la plantilla de prompt por el chat para que cada alumno la llene con SU información**

> **Mientras los alumnos llenan la plantilla (3-4 minutos):**
Tú llenas la tuya EN VIVO proyectando tu pantalla. Esto les da el ritmo y elimina la parálisis del “no sé qué poner”. Usa tu propia información del Caso de Estudio 0:
> 
> - *Nombre:* Erick
> - *Rol:* Desarrollador web
> - *Estilo:* Brutalista (colores vivos + sombras duras)
> - *Usuario:* Reclutador técnico que necesita encontrar mis links en menos de 3 segundos
> - *Layout:* Asimétrico alineado a la izquierda, foto a la izquierda, nombre masivo, botones debajo
> - *Tokens:* Fondo #F5F5F5, Acción #FF6B35, Sombra dura 4px sin blur

> **Verificación en vivo:***“Antes de que nadie le dé Enter a Gemini: **¿todos tienen su Objetivo de Rediseño copiado de la clase pasada?** Si no lo tienen, saquen su chat anterior o la foto de su wireframe y lo redactan ahora. SIN ESO, el prompt no sirve.”*
> 

Cuando cada alumno envía su plantilla llena a Gemini y recibe el prompt estructurado, el instructor explica las partes del resultado:

- **Rol:** *“Le dijimos quién es. La IA adopta esa perspectiva.”*
- **Contexto del proyecto:** *“Le dijimos para qué es y quién lo usará.”*
- **Especificaciones técnicas:** *“Le dijimos el stack: HTML puro, CSS en el mismo archivo, mobile-first.”*
- **Restricciones de diseño:** *“Le dijimos qué SÍ hacer y qué NO hacer, basado en SUS propios tokens y estilo.”*
- **Formato de salida:** *“Le dijimos cómo queremos recibir el resultado: en un Artifact renderizable.”*

### **🆘 PLAN DE RESCATE — Para el alumno que no hizo el Lab 07:**

Si un alumno no tiene su Objetivo, Layout ni Tokens del lab anterior, dale estos valores predeterminados para que pueda continuar sin atrasarse. Son neutrales y funcionales, no personalizados, pero sirven para el ejercicio de hoy.

**Comparte la plantilla de prompt por el chat para que cada alumno la llene con SU información**

### **📸 VARIANTE: ¿Tienes tu imagen High-Fi de Figma? Úsala directamente.**

> Si un alumno exportó su diseño de Figma en la Clase 07 (PNG del Frame del iPhone), puede **omitir las secciones de Layout y Tokens y adjuntar esa imagen directamente en Claude en lugar de llenar esos campos.**
En Claude, las imágenes se pueden adjuntar al chat usando el ícono de clip (📎) antes de enviar el mensaje.
> 

**El párrafo adicional que el alumno incluirá en su prompt al adjuntar la imagen**

**Nota del instructor:** Esta es la ruta más poderosa para alumnos que terminaron el Lab 07 en Figma. La IA lee la imagen, extrae colores, layout y proporciones, y los traduce a código. El prompt scaffolded agrega el contexto que la imagen no puede dar (nombre, links, usuario objetivo). Ambas piezas juntas producen el resultado más cercano a lo que el alumno diseñó.

### **PASO 3 — Disparar V2 en Claude y comparar**

**EN PANTALLA: Vuelves a Claude. Nueva conversación.**

Pega el prompt scaffolded completo. **Agrega al final obligatoriamente:**

```
Genera el código completo en un Artifact renderizable
para que pueda ver el resultado visual en tiempo real.
```

> Mientras carga: *“Esta vez Claude tiene todo lo que necesita. Rol, contexto, estilo, restricciones, y formato de salida. Va a trabajar diferente.”*
> 

Cuando aparezca el Artifact: abre ambas versiones lado a lado (V1 y V2).

> **La pregunta de cierre de este bloque:***“¿Cuántos cambiarían su código por el de un desconocido sin leerlo? Eso es exactamente lo que hace alguien que hace Vibe Coding irresponsable. Ustedes hoy tienen algo diferente: tienen criterio de diseño, tienen un objetivo declarado, y saben evaluar el output.”*
> 

### **3.2 ¿Qué Hicimos? — Vibe Coding y los Agentes de Codificación**

**EN PANTALLA: Slides o búsqueda rápida: tweet/post de Andrej Karpathy, Febrero 2025.**

> **Definición:***“El término **Vibe Coding** se acuño en Febrero de 2025.  Es una descripción real de cómo está cambiando la programación: en lugar de escribir cada línea manualmente, le explicas a la IA lo que quieres y dejas que ella genere el código. Tú supervisas, iteras y validas.”*
> 
> 
> **TEORIA**: La **vibe coding** es una **forma de programar donde el usuario describe lo que quiere en lenguaje natural y la IA se encarga de escribir todo el código técnico**, permitiendo que la persona se enfoque solo en la **visión y el diseño** del proyecto
> 
> Depende técnicamente de: la calidad del prompt inicial, la capacidad de iteración crítica del usuario, y el conocimiento mínimo de HTML/CSS necesario para validar el resultado.
> 

**Las dos caras:** 

| Vibe Coding Irresponsable | Vibe Coding Profesional |
| --- | --- |
| Prompt vago → acepta sin leer
Lanza una instrucción pobre o genérica (ej. *"hazme un navbar"*) y confía ciegamente en la primera respuesta. Acepta el código sin leerlo, asumiendo que la IA no se equivoca. | Prompt scaffolded → evalúa el output
Aplica **Prompt Scaffolding** (le da rol, contexto, restricciones y formato). Cuando recibe el código, no lo pega de inmediato; lo evalúa críticamente para asegurarse de que sea óptimo y seguro. |
| Copia y pega sin entender
Su método es copiar y pegar bloques de código a ciegas. Si le preguntas qué hace la función de la línea 45, no sabrá responderte porque no leyó la lógica. | Entiende la estructura, aunque no haya escrito cada línea
Domina la arquitectura del proyecto. Sabe exactamente qué está haciendo el código, aunque la IA haya sido la que tipeó los cientos de líneas. Usa a la IA como un "teclado rápido", pero el cerebro de la estructura es suyo. |
| Si algo falla, no sabe por dónde empezar
Entra en pánico cuando la consola tira un error. Su única "técnica" es copiar todo el error, pegarlo en la IA y decirle *"no funciona, arréglalo"*, lo que suele romper más cosas al perder el contexto. | Puede localizar el error y darle instrucción precisa a la IA
Actúa como un cirujano. Lee el log de errores, localiza exactamente dónde está la falla y guía a la IA con precisión quirúrgica: *"El componente está fallando porque pasaste el prop como string y esperaba un array, corrige esa línea"* |
| El código es una caja negra
Trata su propio proyecto como una caja negra incomprensible. Si la página se cae o tiene una brecha de seguridad en producción, su excusa mental es *"así me lo generó la IA"*. | El código es su responsabilidad
Asume la responsabilidad absoluta. Entiende que la IA es solo una herramienta de asistencia; el autor final, el dueño del proyecto y quien da la cara por la calidad de ese código, es él mismo. |

> **La conexión con los Agentes:***“El Vibe Coding en chat (como Claude hoy) es el primer nivel.* 
Un paso más allá del Chatbot conversacional (como la web de ChatGPT o Claude) está el ****Agente de Codificación****. Mientras un chatbot te da texto en una pantalla web para que tú lo copies y lo pegues en tu editor, un Agente vive **dentro** de tu editor de código (o tiene el suyo propio). Tiene "manos y ojos": puede leer tus archivos, buscar bugs en todo tu repositorio entero, crear archivos nuevos y ejecutar comandos en tu terminal.

*El siguiente nivel son los **Agentes de Codificación**: herramientas como **Cursor** o **Windsurf** que no solo generan código, sino que tienen acceso a tu sistema de archivos, tu terminal, y tu repositorio. Le dices ‘crea la carpeta del proyecto, instala las dependencias y levanta el servidor’, y el Agente lo hace solo. Es Vibe Coding con superpoderes.”*
> 

> **Pregunta de calibración de cierre:***“**Levanten la mano en el chat: ¿alguien ya usó Cursor o vio algún video de esos agentes? ¿Cuál fue su primera impresión?**”(Espera respuestas. El objetivo: conectar emocionalmente con la herramienta antes de que la usen por su cuenta.)*
> 

> **Puente al Momento 03:***“Bien. Tienen su prompt listo, saben la diferencia entre uno vago y uno scaffolded, y entienden qué significa iterar con criterio. Después del receso, ese prompt que construyeron con Gemini se convierte en su MyLinks real en Claude. Descansen.”*
> 

---

### ⏸ RECESO — 30 min

---

## **Momento 04: Iteración Controlada + Extracción a VS Code**

> **Nota táctica de inicio:** El alumno ya tiene su MyLinks generado en Claude desde el Momento 03. Ahora lo va a personalizar con dos iteraciones concretas usando recursos externos reales (no instrucciones vagas). Cada iteración sigue el mismo patrón: buscar → copiar código → pegar en Claude con instrucción precisa.
> 

### **4.1 Iteración 1 — Botones Personalizados (uiverse.io)**

**EN PANTALLA: Navegador abierto con el link de los codigos de botones**

> **Tu explicación:***“Su MyLinks ya funciona, pero los botones son genéricos. Vamos a personalizarlos con un recurso increíble: uiverse.io. Es una librería open-source con cientos de componentes CSS listos para usar. No vamos a copiar el botón tal cual — vamos a darle ese código a Claude como referencia para que adapte los botones de nuestro MyLinks.”*
> 

**La acción guiada (Caso de Estudio 0 en vivo):**

1. Navega por la galería de botones en la pagina. Filtra por estilos que se acerquen al diseño de tu MyLinks (brutalista, minimalista, neón, etc.).
2. Elige un botón que te guste. Haz clic en él para ver el detalle.
3. Copia el código CSS del botón (el sitio te da HTML + CSS separados).
4. Vuelve a tu chat de Claude donde está tu MyLinks renderizado.
5. Pega esta instrucción junto con el código copiado:

```
Quiero que modifiques los botones de enlace de mi
MyLinks usando como referencia el estilo CSS de este
botón que encontré en uiverse.io:

[PEGAR AQUÍ EL CÓDIGO CSS DEL BOTÓN ELEGIDO]

Instrucciones:
- Aplica este estilo visual (colores, sombras, bordes,
  hover effects) a TODOS mis botones de enlace.
- Adapta los colores del botón a mi paleta existente,
  no uses los colores originales del snippet tal cual.
- Mantén la estructura HTML que ya tienes, solo
  modifica el CSS de los botones.
- Genera el código completo actualizado en un nuevo
  Artifact renderizable.
```

> *“¿Ven lo que estamos haciendo? No le dijimos ‘hazme un botón bonito’. Le dimos código real como referencia y le pedimos que lo adapte a nuestra paleta. Eso es iterar con criterio.”*
> 

**Ejecución del alumno (3-4 minutos):**
> *“Vayan a uiverse.io, busquen un botón que combine con su estilo, copien el CSS y péguenlo en Claude con la instrucción que les compartí. Si el resultado no les convence, tienen permiso de iterar una vez más.”*

### **4.2 Iteración 2 — Background Personalizado**

**EN PANTALLA: Navegador abierto en la pagina de backgrounds**

> **Tu explicación:***“Ahora el fondo. Un fondo blanco plano funciona, pero un patrón sutil le da personalidad sin saturar. patterncraft.fun genera patrones CSS puros — sin imágenes, sin descargas. Solo código CSS que pesa casi nada.”*
> 

**La acción guiada (Caso de Estudio 0 en vivo):**

1. Explora los patrones disponibles en patterncraft.fun. Elige uno que combine con tu estilo.
2. Ajusta los colores del patrón directamente en la herramienta para que se acerquen a tu paleta.
3. Copia el código CSS generado.
4. Vuelve a tu chat de Claude y pega esta instrucción:

```
Quiero agregar un fondo con patrón sutil a mi MyLinks.
Aquí está el código CSS del patrón que elegí en
patterncraft.fun:

[PEGAR AQUÍ EL CÓDIGO CSS DEL PATRÓN]

Instrucciones:
- Implementa este patrón como background del body o
  del contenedor principal de mi página.
- Adapta los colores del patrón a mi paleta existente
  para que se integre con el diseño actual.
- El patrón debe ser sutil, no debe competir con el
  contenido principal (nombre, foto, botones).
- Genera el código completo actualizado en un nuevo
  Artifact renderizable.
```

> *“Dos iteraciones. Dos recursos externos reales. Cero instrucciones vagas. Así se hace Vibe Coding profesional: con referencias concretas y restricciones claras.”*
> 

**Ejecución del alumno (3-4 minutos):**
*“Mismo proceso: patterncraft.fun, eligen un patrón, copian el CSS, lo pegan en Claude con la instrucción. Si quieren ajustar los colores, pueden hacerlo directamente en la página antes de copiar.”*

### **4.3 Extracción del Código a VS Code**

**EN PANTALLA: VS Code abierto con terminal integrada visible.**

> **Tu explicación:***“Ya tienen su MyLinks personalizado en Claude con botones custom y fondo con patrón. Ahora lo sacamos del chat y lo convertimos en un archivo real en su máquina.”*
> 

**La acción guiada (paso a paso, dictando):**

1. En Claude, haz clic en el Artifact renderizado final (la última versión con todos los cambios).
2. Haz clic en el botón **“Copy”** (ícono de copiar) que aparece arriba del código.
3. En VS Code, crea una carpeta nueva llamada **mylinks** en tu workspace.
4. Dentro de **mylinks**, crea un archivo llamado **index.html**.
5. Pega todo el código copiado dentro de **index.html.**
6. Clic derecho sobre **index.html** → **“Open with Live Server”**.
7. El navegador debe mostrar tu MyLinks **idéntico** al Artifact de Claude.

> **Verificación en vivo:***“Comparen pantalla con pantalla: Claude a la izquierda, Live Server a la derecha. ¿Se ven iguales? Si algo cambió (una sombra, un color, un margen), es porque Claude usa su propio renderizador interno. En ese caso, ajústenlo directamente en VS Code — ya saben CSS suficiente para eso.”*
> 

> **Criterio de Éxito:** El alumno tiene su **index.html** corriendo en localhost con un diseño personalizado generado por IA, con botones custom y background con patrón.
> 

## Momento 05: Publicación en GitHub Pages (El Cierre del Círculo)

> **Nota táctica de inicio:** En este momento conectamos la Clase 05 (Git) con la Clase 08. El código local no sirve de nada si el mundo no puede verlo. Esta fase debe ser milimétrica: todos al mismo ritmo en la terminal.
> 

### **1. Acción Guiada — Iniciar el Repositorio**

**EN PANTALLA: VS Code con el archivo index.html abierto y la terminal visible abajo.**

> **Tu explicación:***“Su código existe solo en su computadora. Si la apagan, el mundo pierde acceso. Vamos a subirlo a GitHub como aprendimos en la Clase 05. Abran todos su terminal en VS Code”*
> 

Dicta los comandos en voz alta, uno por uno. No avances hasta que todos confirmen en el chat.
1. Escribe: **git init** → *“Iniciamos el motor de seguimiento.”*
2. Escribe: **git add .** → *“Preparamos nuestro index para la foto.”*
3. Escribe: **git commit -m "feat: mylinks finalizado"** → *“Tomamos la foto final de nuestro proyecto.”*

### **2. Acción Guiada — Conectar a la Nube (10 min)EN PANTALLA:** Navegador en **github.com.**

1. Crea el repositorio en vivo: *“Clic en ‘+’ -> ‘New repository’. Nombre:* **mylinks_v2***. Debe ser Público.”*
2. Deja el repo vacío y copia la URL.
3. Vuelve a VS Code y dicta: **git remote add origin [TU_URL]** → *“Conectamos nuestra PC con ese servidor vacío en la nube.”*
4. Dicta el envío: **git push -u origin main** (o `master` dependiendo de la consola).

> **Verificación en vivo:***“Actualicen la página de GitHub. Si su **index.html** aparece ahí, ¡felicidades!, ya está en la nube. Envíenme un ‘👍’ por el chat. El que no lo tenga, hable ahora.”*
> 

### **3. Activando el Hosting Gratuito (5 min)**

**EN PANTALLA: Pestaña Settings del repositorio en GitHub.**

> **Tu explicación:***“GitHub no es solo, un disco duro. Tiene un servicio llamado ‘Pages’ que toma tu código HTML y lo convierte en una página web viva con su propia URL.”*
> 
1. Ve a **Settings** → menú izquierdo **Pages**.
2. En *Source*, verifica que esté **"Deploy from a branch"**.
3. En *Branch*, elige **main** (o la que subiste) y clic en **Save**.
4. *“Ahora GitHub está construyendo su servidor. Toma exactamente 2 minutos. No toquen nada.”*

### **4. El Momento Wow (5 min)**

> **El remate táctico:**
Una vez que la URL aparece en la configuración de Pages:
> 
1. **Tu Acción:** Toma tu celular FÍSICO, enciende tu cámara de Zoom/Meet, escribe tu URL en el navegador del teléfono y muéstralo a la cámara.
2. *“Miren mi pantalla. No estoy en VS Code. Estoy en mi celular, leyendo una web que generé con IA y que está alojada gratis en servidores de nivel mundial. Ese es el poder de lo que acaban de aprender.”*
3. **La Instrucción final:** *“Entren al chat de la clase AHORA y peguen su URL. Abran las de sus compañeros desde sus celulares. Comparen los diseños, comparen los fondos.”*

> **Criterio de Éxito Público:** El chat debe llenarse de URLs funcionales. El alumno experimenta la validación social y la dopamina de ver su diseño publicado.
> 

## **Momento 06: Cierre y Retrospectiva (Módulo 02 Completo) — 10 min**

**EN PANTALLA:** Ninguna. Apagas compartir pantalla para que todos se vean las caras.

> **1. Reflexión del aprendizaje (Calibración)**
> 
> 
> . Hoy le delegaron decenas de líneas de código a una Inteligencia Artificial, evaluaron 3 diseños diferentes en Figma, y lo publicaron usando Git. En una escala del 1 al 10, ¿cuánto sienten que cambió hoy su comprensión de lo que significa ser un desarrollador moderno?“(Lee las respuestas del chat, comenta sobre 2 o 3)*.
> 

> **2. El Resumen del Módulo***“Chicos, con esto cerramos oficialmente el Módulo 02. Empezamos perdiéndonos en etiquetas `<nav>` y `<footer>` (HTML Semántico), entendimos cómo pintar cajas con CSS y volverlas elásticas con Flexbox. Luego aprendimos a planificar (Firma y UI/UX), y hoy hicimos trampa legal: aprendimos a comandar a la IA (Vibe Coding) para que escriba ese HTML y CSS por nosotros sin cometer errores tontos. Y cerramos publicando en Pages.”*
> 

> **3. Qué viene (El gancho para el Módulo 03)***“Miren sus MyLinks. Están hermosos y publicados. Pero tienen un problema: si hacen clic en un botón, no pasa mucho. Si quieren subir una foto, tienen que abrir VS Code y reescribir HTML. Sus páginas son **estáticas**. Son posters digitales. En el Módulo 03 entraremos al núcleo duro de la programación: Javascript. Le daremos cerebro, memoria y lógica a esas páginas para que dejen de ser un póster y se conviertan en una aplicación real. Descansen, celebren sus links, y nos vemos en la próxima clase.”*
>