# FLUJO DE PRESENTACION 08

## Momento 01: La Historia de la IA y los LLMs (~25 min)

### **1. La Historia no son Años ni Nombres — Es una Cadena de Problemas**

**EN PANTALLA: Imagen de la evolución de la IA (la tabla/diagrama del material de clase).**

> **Tu apertura:***"Antes de hablar de la IA, mis estimados, quiero hablar de su historia. Pero no les voy a dar años, no les voy a dar nombres de científicos, no voy a hablar de esto como si fuera clase de historia. Lo que quiero que vean en esta imagen es otra cosa: cada tecnología que ven aquí apareció porque la anterior tenía un problema que no podía resolver. Es una cadena de problemas resueltos — y hoy, en esta clase, vamos a usar la capa más reciente de esa cadena."*
> 

### **2. El Vuelo Rasante por las Eras**

**EN PANTALLA: La misma imagen — señalas cada era mientras explicas. El patrón para cada era es siempre el mismo: *"¿Qué problema tenía? → ¿Qué vino para resolverlo?"***

> **Programación Tradicional → Machine Learning:***"Todo empezó con la programación que ustedes ya conocen. Python, JavaScript — un programa es una serie de instrucciones. Tú le dices: si pasa A, haz esto; si pasa B, haz esto otro. El problema: el mundo no tiene patrones fijos. Si quieres que un programa reconozca un gato en una foto, tendrías que escribir una regla para cada pixel, para cada posición posible del gato. Millones de reglas. Imposible.*
> 
> 
> *¿Qué vino? Machine Learning. En lugar de escribir las reglas, le das ejemplos — datos — y el sistema aprende las reglas por sí solo. La palabra clave aquí es **datos**."*
> 

> **Machine Learning → Deep Learning:***"Bien, pero Machine Learning todavía fallaba en cosas complejas. Para reconocer un gato en una foto, un ingeniero humano todavía tenía que programarle manualmente cómo detectar bordes, texturas, cómo combinarlas. No era suficiente.*
> 
> 
> *¿Qué vino? Deep Learning — redes neuronales profundas. Le agregó capas de aprendizaje para que la máquina descubra esas características sola, sin el ingeniero. Pero esto costaba más: ya no CPUs, ahora GPUs. Máquinas más potentes. El costo computacional empezó a subir."*
> 

> **Deep Learning → Transformers:***"El problema con Deep Learning para texto: lo leía palabra por palabra, en orden secuencial. Si le dabas una tesis de 100 páginas y le preguntabas algo del final, tenía que leer desde la página 1 hasta llegar ahí. Y cuando llegaba, ya había olvidado la página 1. Memoria limitada, sin contexto entre palabras.*
> 
> 
> *¿Qué vino? Los Transformers — no es una herramienta, es una arquitectura. Le dio dos cosas: primero, procesar toda la frase a la vez en lugar de palabra por palabra. Segundo, el **mecanismo de atención**: saber qué palabras de la frase tienen relación entre sí. Si yo digo 'el cielo es azul', el Transformer entiende que 'cielo' y 'azul' están relacionados. Eso es contexto."*
> 

> **Transformers → LLMs:***"¿Qué problema tenían los Transformers? Que nadie sabía cómo usarlos. Era matemática pura, no había interfaz. Ahí es donde aparece OpenAI con ChatGPT — tomaron ese modelo matemático poderoso, lo entrenaron con miles de millones de datos de Internet, y le pusieron una interfaz de lenguaje natural. Tú ya no necesitas saber matemáticas: le hablas, y él te responde. Eso es un LLM."*
> 

> **LLMs → Agentes:***"Y el último paso — que es donde está el futuro hoy — son los Agentes. El LLM ya no solo vive en el chat: puede revisar tu Drive, tu Gmail, puede integrarse en aplicaciones, puede usar tu terminal. Ese es el próximo nivel y lo vamos a mencionar más adelante."*
> 

> **Cierre del vuelo rasante:***"Todo lo que ven en esa imagen no es la historia de una tecnología. Es la historia de un mismo problema que se fue resolviendo capa por capa. Y hoy, ustedes van a usar la capa más reciente: los LLMs."*
> 

### **3. ¿Qué ES un LLM? — La Analogía del Autocorrector**

**EN PANTALLA: Imagen con las siglas L — L — M.**

> **Tu explicación:***"Una definición más precisa. Porque tanto mencionamos LLM pero ¿qué significa exactamente? Nosotros ya tenemos algo muy similar a un LLM en nuestro celular. Ya lo tenemos. Es el autocorrector.*
> 
> 
> *¿Cuántos aquí usan el autocorrector? Todos, ya sea que lo quieran o no. Están escribiendo un mensaje en WhatsApp y el celular les sugiere la siguiente palabra antes de que la escriban. ¿Cómo sabe qué palabra darles? Analiza sus chats anteriores, detecta su patrón de escritura y predice qué palabra suele ir después.*
> 
> *Un LLM es exactamente eso. Pero en lugar de estar entrenado con sus chats de WhatsApp, está entrenado con toda la escritura de la humanidad: libros, artículos, código, foros, conversaciones de Internet. Hablamos de miles de millones de palabras. La palabra clave es **predecir**."*
> 

> **Tu explicación sigla por sigla:**
> 
> - **L — Large (Grande):** *"No son modelos pequeños de laboratorio. Entrenados con cantidades masivas de texto. El 'grande' no es el tamaño del programa — es la cantidad de datos con los que aprendió."*
> - **L — Language (Lenguaje):** *"Entrenados específicamente en lenguaje humano. No en imágenes, no en videos — en texto. Por eso se comunican contigo tan naturalmente."*
> - **M — Model (Modelo):** *"Un modelo matemático. Una función gigantesca que toma texto de entrada y produce texto de salida. Los data centers que mantienen eso son edificios enteros con servidores, electricidad, refrigeración. Cualquier empresa que quiera crear uno desde cero necesita una inversión millonaria."*

### **4. La Dinámica del "El cielo es..." — Predicción en Vivo**

**EN PANTALLA: Claude o ChatGPT abierto en el navegador. Escribes en el chat mientras hablas.**

> **Tu explicación antes de la demo:***"Los LLMs son motores de completado de texto. Predicen cuál será el siguiente token — la siguiente palabra o fragmento — basándose en el contexto previo. Vamos a demostrarlo en vivo ahora mismo."*
> 

**La demo en secuencia:**

1. Escribe: **`El cielo es`** — antes de enviar, pregunta al grupo:
    
    > *"Si ustedes fueran la IA entrenada con miles de millones de datos, ¿qué palabra predicen que va después? Escríbanlo en el chat."(Esperar: "azul", "celeste", "hermoso". Validarlos en voz alta.)*
    Envía el prompt. Muestra el resultado.
    *"Azul, celeste, o tal vez algo poético. Tiene sentido — el modelo ha visto 'el cielo es azul' millones de veces. Esa es la mayor probabilidad estadística."*
    > 
2. Escribe: **`El cielo de Marte es`** — pregunta:
    
    > *"Ahora cambié el contexto. ¿Qué cambia en las probabilidades? ¿Qué color predicen?"(Esperar: "rojo", "rojizo". Validar.)*
    Envía. Muestra el resultado.
    *"Rojizo, naranja, rojo. ¿Por qué cambió? Porque el contexto previo eliminó todas las probabilidades relacionadas con 'azul' y empujó las de 'rojo' al tope. Eso es estadística pura — no inteligencia, no razonamiento. Probabilidades."*
    > 

> **El remate — el puente al diseño de prompts:*"¿Qué aprendimos de esto?** Si le dan poco contexto a la IA, ella imprimirá los tokens estadísticamente más obvios, genéricos, aburridos. Eso es exactamente lo que pasa con el prompt vago que vamos a ver hoy.*
> 
> 
> *Si quieren un resultado de calidad— su MyLinks con su diseño específico, sus colores, su layout — tienen que forzar a la IA a escribir el 'cielo de Marte'. Eso lo hacen dándole contexto súper específico. Lo llamamos Prompt Scaffolding, y lo vamos a construir juntos."*
> 

### **5. Los 5 Mitos — Sombreros Ocultos, Reveal Uno por Uno**

**EN PANTALLA: Presentación con 5 bloques oscuros (sombreros) con signos de interrogación.**

> **Tu apertura:***"Ahora que ya saben qué ES un LLM, quiero ver si sus ideas previas coinciden con la realidad. Tengo 5 creencias muy comunes sobre la IA. Las voy a revelar una por una — ustedes me dicen primero: ¿verdad o mito?"*
> 

*(Revela un bloque a la vez. Primero pregunta al chat, espera 2-3 respuestas, luego revelas la realidad.)*

**Mito 1 — "Los LLMs piensan como humanos"**

> *"¿Verdad o mito?"* *(Esperar respuestas — casi todos dirán mito.)***La realidad:** *"Mito. Y ya lo demostramos. Los LLMs no razonan, no tienen conciencia, no tienen intención. Solamente predicen la siguiente palabra más probable. Si le pides a la IA sumar 2+2, te dice 4 — pero no porque haya hecho una operación aritmética. Te dice 4 porque ha visto miles de millones de veces que después de '2+2 =' viene '4'. Si sus datos dijeran que es 5, te lo afirmaría con total seguridad."*
> 

**Mito 2 — "Los LLMs buscan información en Internet en tiempo real"**

> *"¿Verdad o mito?"* *(Este genera debate — algunos dirán verdad, otros mito.)***La realidad:** *"Aquí hay que matizar. Antes de salir al mercado, un modelo pasa por un entrenamiento con datos de Internet hasta una fecha de corte. Cuando sale al mercado, se queda con esos datos — si le preguntas algo que pasó hace 10 minutos, no lo sabe.*
> 
> 
> *Sin embargo, hoy varios modelos sí tienen plugins de búsqueda en tiempo real integrados — Gemini, por ejemplo, puede buscar en Google mientras te responde. Por eso la respuesta depende: el modelo base no tiene internet, pero la aplicación sí puede tener esa funcionalidad agregada. La diferencia: el modelo vs la aplicación."*
> 

**Mito 3 — "Los LLMs siempre dicen la verdad"**

> *"¿Verdad o mito?"* *(Casi todos dirán mito inmediatamente.)***La realidad:** *"Mito. Los LLMs pueden alucinar — inventar datos, citas, links y personas que no existen, con total confianza. Y no lo hacen porque sean malos o quieran engañarlos. Lo hacen porque su función es completar el texto de forma coherente, aunque sea ficción.*
> 
> 
> *Ejemplo clásico: si le piden citas para una tesis, posiblemente redactará una cita perfectamente formateada en APA con autor, revista y año. Pero el autor puede no existir. Lo hizo porque sabe cómo se escribe una cita — lo ha visto miles de veces. Solo que el contenido específico lo inventó. En programación: a veces el código que genera tiene bugs o usa funciones que no existen. Por eso siempre hay que revisar."*
> 

**Mito 4 — "Los LLMs entienden lo que les escribes"**

> *"¿Verdad o mito? Cuidado — esta tiene trampa."* *(Esperar respuestas.)***La realidad:** *"Mito. Y esto es quizás lo más importante que tienen que entender hoy. Los LLMs no 'entienden' — reconocen patrones estadísticos. El significado no existe para ellos, solo la probabilidad.*
> 
> 
> *Si ustedes escriben 'Tengo hambre', la IA no siente empatía ni imagina comida. Lo que hace es detectar que después de 'tengo hambre' suelen venir frases como 'aquí tienes recetas' o 'lo lamento' — porque así está en sus datos de libros de psicología, artículos de nutrición, foros de conversación. Le responde así no porque entienda que tienen hambre, sino porque eso es lo estadísticamente más probable."*
> 

**Mito 5 — "La IA reemplazará a los programadores"**

> *"Este lo vamos a tratar diferente — aquí quiero su opinión real antes de decirles nada. ¿Verdad o mito? ¿Por qué?"(Esperar 3-4 respuestas. Dejar que el debate fluya 1-2 minutos. Validar cada perspectiva.)***La realidad:***"La IA sí codifica más rápido que nosotros. Puede leer un libro de buenas prácticas y aplicarlo inmediatamente. Pero — y aquí está el 'pero' — la IA no puede evaluar si el código que generó es correcto para TU problema específico. No puede detectar un error de lógica en TU arquitectura. No puede hacerse responsable de un bug en producción.*
> 
> 
> *La respuesta honesta: la IA no reemplazará programadores. Reemplazará a los programadores que no la usen. El que sabe pedirle bien — con contexto claro, restricciones precisas, criterio para evaluar el output — siempre tendrá ventaja. Ustedes hoy están aprendiendo exactamente eso."*
> 

### **6. Modelos del Mercado y ¿Por Qué Claude Hoy?**

**EN PANTALLA:** Logos de Claude, ChatGPT y Gemini.

> **Tu explicación:***"Hoy existen varios LLMs en el mercado. No son iguales — cada uno tiene un perfil, una fortaleza y un caso de uso donde brilla más. Como desarrolladores, su ventaja está en saber cuándo usar cuál."*
> 

| Modelo | Empresa | Mejor Para |
| --- | --- | --- |
| **ChatGPT (GPT-4o)** | OpenAI | Dudas rápidas, ideas creativas, snippets de código, debug rápido. |
| **Claude** | Anthropic | Documentos largos, explicaciones profundas, código completo con Artifacts renderizables. |
| **Gemini** | Google | Información actualizada en internet, integración con Google Docs/Drive, planificar antes de codear. |

> **Pregunta de calibración:*"Ustedes conocen algunos de estos modelos IA? Y en que lo usan hoy en dia?"(Esperar 3-4 respuestas del chat. El objetivo no es que acerten — es que razonen con criterio.)***
> 

> **¿Por qué Claude hoy?***"Claude tiene una función que los demás no ofrecen igual: los **Artifacts**. Un Artifact es un panel renderizable donde Claude no solo escribe el código — lo ejecuta en vivo al lado derecho del chat. Van a ver su MyLinks construirse en tiempo real mientras la IA escribe. Eso cambia todo."*
> 
> 
> *"Y Gemini tiene internet en tiempo real — por eso hoy lo vamos a usar como planificador: le vamos a dar su Spec Sheet del Lab 07 y él nos va a armar el prompt estructurado que luego le daremos a Claude para que construya. Cada herramienta en su rol."*
> 

## Momento 02: Tokens y el Arte del Prompt (~20 min)

> **Nota táctica de inicio:** La secuencia es deliberada: Token (la unidad) → Ventana de Contexto (el límite) → Prompt básico (la herramienta) → Técnicas de Prompting → Scaffolding (la técnica pro). Cada concepto justifica al siguiente. Al final de este momento el alumno tiene claro por qué el prompt vago que va a escribir en el Momento 03 no puede producir su diseño.
> 

### **1. ¿Qué es un Token? — Demo en Vivo**

**EN PANTALLA: Navegador abierto en platform.openai.com/tokenizer**

> **Tu apertura:***"Ahora hablemos de un concepto que no puede faltar cuando hablamos de LLMs: el token. **¿Alguien lo ha escuchado? ¿Qué sería un token para ustedes?"**(Esperar 2-3 respuestas del chat sin corregir. El silencio también es válido.)*
> 

> **Tu explicación:***"Todo empieza desde el momento en que tú interactúas con el LLM — con el prompt. Ya sabemos que es lenguaje natural: español, inglés, lo que sea. Pero aquí viene algo importante: cuando tú escribes en Claude, crees que le estás pasando palabras. No es así.*
> 
> 
> *Los LLMs son modelos matemáticos. La matemática no entiende palabras — entiende números. Entonces, lo que pasa por detrás antes de que tu mensaje llegue al modelo es un proceso llamado **tokenización**: convertir tu texto en fragmentos numéricos llamados tokens."*
> 

> **¿Qué ES un Token exactamente?***"Un token no es una palabra. Es un fragmento de información — puede ser una palabra completa, puede ser parte de una palabra, puede ser un símbolo, puede ser hasta un espacio. Lo que hace la tokenización es fragmentar lo que tú escribes y convertirlo en esos fragmentos. Vamos a verlo en tiempo real."*
> 

**La demo en vivo — Secuencia exacta:**

1. Escribe en el tokenizador: **Artificial intelligence is amazing**
Cuenta los tokens en voz alta: *"5 tokens. Ahora vamos a compararlo en español."*
2. Escribe: **La inteligencia artificial es asombrosa**
    
    > *"¿Cuántos tokens? Más. Misma idea, mismo significado — pero el español necesita más caracteres para construirla, y eso se traduce en más tokens. El inglés es estructuralmente más compacto y eso le cuesta menos tokens al modelo."*
    > 
3. Pega una frase más larga que uses en tu presentación. Muestra cómo el tokenizador colorea los fragmentos:
    
    > *"Miren cómo ha separado eso — una misma palabra a veces la divide en 3 fragmentos, otros los toma con su espacio incluido. Un signo de pregunta ya es un token por sí solo. Eso es la tokenización: fragmentar y convertir en números para que el modelo matemático lo entienda."*
    > 

### **2. La Ventana de Contexto — La RAM del Modelo**

**EN PANTALLA: Seccion 05 en Excalidraw**

> **Tu pregunta al chat:***"Una cosa: **¿por qué importa saber cuántos tokens usa su frase? ¿Por qué las empresas les dan un límite de cuántos tokens pueden usar?"**(Esperar respuestas: "costo", "capacidad del servidor", "memoria". Validar en voz alta.)*
> 

> **Tu explicación:***"Todos tienen razón — van por ahí. Los LLMs no tienen memoria infinita. Son data centers: edificios con servidores que tienen costo de electricidad, de mantenimiento, de cómputo. Millones de personas los usan al mismo tiempo. Si no hubiera límites, el costo para la empresa sería imposible.*
> 
> 
> *Pero hay una razón más técnica. Dentro de tu conversación, el modelo tiene lo que se llama una **Ventana de Contexto**: la cantidad máxima de texto que puede procesar en toda una interacción. Eso incluye todo — tu primer mensaje, las respuestas que te dio, tu segundo mensaje, las siguientes respuestas. Todo se suma."*
> 

> **El problema concreto:***"**¿Qué pasa cuando llegas al límite?** El modelo no se congela — empieza a **olvidar**. Va liberando espacio borrando lo que dijo al inicio del chat para darle lugar a lo que está pasando ahora mismo. Entonces si al inicio de la conversación le dieron información vital sobre su proyecto — su paleta, su layout, su objetivo — y han estado chateando mucho, puede que ya lo olvidó.*
> 
> 
> *Por eso cada token innecesario le roba espacio a su proyecto. Un prompt preciso y específico no es solo buena práctica — es literalmente eficiencia de memoria."*
> 

> **El truco del inglés:***"Una técnica que usan programadores avanzados: escribir el prompt en inglés y pedir la respuesta en español. El inglés consume menos tokens para la misma idea — así ahorran espacio en la ventana. No es obligatorio que lo hagan hoy, pero sí que entiendan por qué existe esa práctica."*
> 

> **Pregunta de calibración:***"Si el español cuesta más tokens que el inglés y la ventana de contexto es limitada — **¿cuándo tiene sentido promtear en inglés y cuándo en español?**"(Esperar 2-3 respuestas. La respuesta ideal: para código e instrucciones técnicas, inglés es más eficiente; para contexto cultural, nombres y texto de UI que irá en la página, español tiene sentido.)*
> 

### **3. El Prompt no es una Búsqueda de Google**

**EN PANTALLA: Dos columnas en slide o en pantalla — Google a la izquierda, Claude a la derecha.**

> **Tu explicación:***"Ahora hablemos del prompt. Cuando buscan en Google escriben palabras clave: 'responsive css tutorial 2024'. El motor interpreta esas palabras y busca páginas relevantes. Eso es navegar.*
> 
> 
> *Un Prompt es diferente. Es una **instrucción completa con contexto**. La IA no busca — produce. Y la calidad de lo que produce depende 100% de qué tan bien le explicaste qué necesitas. Hay técnicas para hacer eso bien — vamos a ver las más importantes."*
> 

### **4. Las 3 Técnicas de Prompting — Demos en Vivo**

**EN PANTALLA: Claude abierto. Ejecutas cada demo en tiempo real mientras explicas.**

> **Nota táctica:** No expliques cada técnica teóricamente y luego demuestras — hazlas en vivo directamente y explica qué hiciste después. El orden importa: de menor a mayor especificidad.
> 

**Técnica 1 — Zero-Shot:**

Ejecuta este prompt en Claude:

```
Explica qué son los nanobots.
```

> *(Mientras carga):* *"Zero-shot: petición directa, sin contexto extra. Ningún ejemplo, ninguna instrucción de formato, ningún rol. La IA tiene que adivinar absolutamente todo: el nivel de profundidad, el tono, el formato, a quién le habla."(Cuando aparece el resultado):* *"Miren la respuesta. Funciona. Pero es genérica — podría estar en Wikipedia. Es lo que esperaba: probabilidad pura, la respuesta más probable estadísticamente."*
> 

**Técnica 2 — One-Shot / Few-Shot:**

Ejecuta este prompt en Claude:

```
Explica qué son los nanobots usando una analogía similar a este ejemplo:

Ejemplo: "La Inteligencia Artificial es como un chef que ha leído todas
las recetas del mundo y crea platos nuevos combinando lo que aprendió."

Tarea: Explica los nanobots con una analogía del mismo estilo.
```

> *(Mientras carga):* *"One-shot: le di un ejemplo del formato que quiero. Los LLMs son excelentes imitadores. Al darles un ejemplo, no solo les digo QUÉ hacer — les digo CÓMO hacerlo. El modelo va a imitar la estructura de esa analogía."(Cuando aparece):* *"¿Ven la diferencia? No me dio una definición técnica — me dio una analogía en el mismo formato del ejemplo. Eso es One-shot."*
> 

**Técnica 3 — Role Prompting:**

Ejecuta este prompt:

```
Actúa como un Ingeniero de Robótica muy carismático y divertido.
Explica los nanobots a jóvenes de 15 años.
```

> *(Mientras carga):* *"Role Prompting: le asigno una identidad profesional. Al decirle 'actúa como ingeniero de robótica', activo un subconjunto específico de todo su conocimiento — vocabulario técnico de robótica, pero también la energía de un comunicador que sabe llegar a adolescentes. El modelo filtra sus patrones estadísticos hacia ese perfil."(Cuando aparece):* *"Completamente diferente al Zero-shot. Mismo tema — nanobots — pero tono, vocabulario y energía totalmente distintos."*
> 

> **La clave de las 3 técnicas:***"No son excluyentes. Un prompt pro las combina todas. El Role Prompting le da perspectiva, el Few-shot le da referencia de formato, y ahora les voy a mostrar la técnica que las ensambla en una estructura completa: el Scaffolding."*
> 

### **5. Prompt Scaffolding — La Estructura Maestra**

**EN PANTALLA: Un slide con los 5 bloques del Scaffolding o lo escribes en Claude en vivo.**

> **La analogía del andamio:***"Scaffolding en español es 'andamio' — eso que ven en las construcciones cuando están levantando un edificio. Cuando construyes un edificio, no le dices al maestro de obra 'hazme una casa' y te vas a dormir. Le entregas un plano estructurado: las bases, las columnas, los detalles de cada piso. El Prompt Scaffolding es darle ese plano a la IA: en lugar de lanzarle una frase suelta, le armamos una estructura de información para que construya la respuesta exacta sin tener que adivinar nada."*
> 

**La estructura completa:**

```
[ROL]         → Quién debe ser la IA
[CONTEXTO]    → Quién eres tú, para qué es esto, quién lo va a usar
[TAREA]       → Qué debe hacer exactamente
[RESTRICCIONES] → Qué SÍ hacer y qué NO hacer
[FORMATO]     → Cómo quieres recibir el resultado
```

**Demo en vivo — Scaffolding completo con los nanobots:**

```
[ROL]
Actúa como un experto en divulgación tecnológica especializado en niños.

[CONTEXTO]
Mi sobrino de 8 años tiene curiosidad por los nanobots porque vio
el traje de Iron Man hecho de nanobots en una película de Marvel.

[TAREA]
Explica qué son los nanobots.

[RESTRICCIONES]
Usa máximo 100 palabras. No uses palabras científicamente complejas.

[FORMATO]
Devuelve la respuesta como un cuento corto con un final motivador.
```

> *(Ejecutas el prompt en Claude mientras los alumnos observan):"Miren qué pasó: le di Rol — ahora sabe quién debe ser. Contexto — sabe la situación exacta y por qué pregunta el niño. Tarea — sabe qué construir. Restricciones — sabe qué no puede hacer. Formato — sabe cómo entregarlo. La IA no tuvo que adivinar nada. Redujo las probabilidades exactamente al resultado que yo quería."*
> 

> **El puente al lab:***"Esto es exactamente lo que van a hacer en el Momento 04 con su MyLinks. Pero en lugar de nanobots, van a poner ahí su Objetivo de Rediseño, sus tokens de color, su layout. Y en lugar de armarlo a mano, van a usar Gemini para convertir su Spec Sheet del Lab 07 en un Scaffolding completo. Gemini construye el prompt — Claude construye el código. Cada herramienta en su rol."*
> 

## Momento 03: V1 — El Experimento del Prompt Vago (~15 min)

> 
> 
> 
> ⚠️ **Nota de setup:** Las cuentas de Claude y Gemini ya fueron asignadas como tarea previa al grupo. No se invierte tiempo en creación de cuentas aquí.
> 

### **1. El Prompt Vago Zero-Shot en Claude : PARTE 1 DEL LABORATORIO**

**EN PANTALLA: Claude abierto en pestaña nueva. Chat limpio, conversación nueva.**

> **Tu apertura:***"Antes de hacer las cosas bien, vamos a hacerlas mal a propósito — porque necesito que vean con sus propios ojos qué produce un prompt vago. Abran Claude, nueva conversación. Yo voy a ejecutar esto en vivo y ustedes lo replican al mismo tiempo."*
> 

Copia del laboratorio Comparte por el chat el prompt y ejecútalo en vivo:

```
Crea una aplicación web tipo linktree que tenga botones para
mis redes sociales y una sección para mi información de perfil.
```

> *(Mientras carga, comentas en voz alta):"Esto es Zero-shot puro. ¿Cuántos bloques de información le di? Ninguno. Sin nombre, sin colores, sin objetivo de diseño, sin layout, sin usuario objetivo. La IA tiene que adivinar absolutamente todo."*
> 

> *(Cuando aparece el Artifact en el panel derecho):"¿Lo ven? Funciona. Tiene botones, tiene una sección de perfil, tiene HTML completo. Pero miren: ¿aparece su nombre? ¿Sus colores? ¿El estilo que pasaron toda la Clase 07 definiendo en Figma?*
> 
> 
> *No. Podría ser la página de cualquier persona del planeta. Es lo que el modelo produce cuando no le damos contexto — la respuesta estadísticamente más genérica posible. No la que ustedes diseñaron."*
> 

> **La pregunta de reflexión:***"¿Cambiarían este código por el de un desconocido sin leerlo? Eso es exactamente lo que hace alguien que hace Vibe Coding irresponsable. Ustedes hoy tienen algo diferente: tienen un objetivo declarado, tienen una paleta, tienen mockups. Tienen criterio."*
> 

### **2. Vibe Coding — Definición y las Dos Caras**

**EN PANTALLA: Slide o texto en pantalla con la definición.**

> **Tu explicación:***"Lo que acaban de hacer — pedirle a la IA que genere código en lenguaje natural — tiene nombre. Se llama **Vibe Coding**. El término lo acuñó Andrej Karpathy en febrero de 2025 — es el creador del departamento de IA de Tesla, no es poca cosa. Y lo usó para describir exactamente esto: en lugar de escribir cada línea manualmente, le explicas a la IA lo que quieres y ella genera el código. Tú supervisas, iteras y validas."*
> 

> **La definición técnica:***"Vibe Coding es una forma de programar donde el usuario describe en lenguaje natural lo que quiere, y la IA se encarga de escribir el código técnico. El programador se enfoca en la visión y el criterio — no en el tipeo."*
> 

**La tabla de las dos caras — explicas fila a fila:**

| ❌ Vibe Coding Irresponsable | ✅ Vibe Coding Profesional |
| --- | --- |
| Prompt vago → acepta sin leer | Prompt scaffolded → evalúa el output |
| Copia y pega sin entender qué hace el código | Entiende la estructura aunque no haya escrito cada línea |
| Si algo falla, no sabe por dónde empezar | Localiza el error y le da instrucción precisa a la IA |
| El código es una caja negra ("así me lo generó la IA") | El código es su responsabilidad — la IA es solo una herramienta |

> **Tu cierre de la tabla:***"La IA codifica más rápido que nosotros — eso es verdad. Puede leer un libro de buenas prácticas y aplicarlo inmediatamente. Pero la IA no puede evaluar si el código que generó es correcto para TU problema específico, con TU arquitectura, TU usuario objetivo, TU diseño. Ahí estás tú.*
> 
> 
> *El que sabe pedirle bien — con contexto claro, restricciones precisas, criterio para evaluar el output — siempre tendrá ventaja. Eso es exactamente lo que están aprendiendo hoy.*
> 
> *El objetivo de este lab es que salgan sabiendo qué hace cada bloque del HTML/CSS que la IA generó por ustedes. No para que lo copien a ciegas — para que puedan defenderlo."*
> 

### **3. Los Agentes de Codificación — El Siguiente Nivel**

**EN PANTALLA: Búsqueda rápida a tu propio VS Code con el agente visible.**

> **Tu explicación:***"El Vibe Coding con Claude hoy — escribir en el chat y recibir código — es el primer nivel. Un paso más allá está el **Agente de Codificación**.*
> 
> 
> *Un chatbot como Claude web te da texto en una pantalla para que tú lo copies y lo pegues en tu editor. Un Agente vive **dentro** de tu editor de código. Tiene 'manos y ojos': puede leer tus archivos, buscar bugs en todo tu repositorio, crear archivos nuevos, ejecutar comandos en tu terminal — sin que tú los abras manualmente.*
> 
> *Herramientas como **Cursor** **o Claude Code , Antigravity** son agentes de codificación. Le dices 'crea la carpeta del proyecto, instala las dependencias y levanta el servidor' — y el Agente lo hace solo. Es Vibe Coding con superpoderes. Visual Studio Code ya tiene uno integrado: **GitHub Copilot**. Eso va a ser una parte importante de su rol como desarrolladores modernos."*
> 

> **Pregunta de calibración:***"**¿Alguien ya usó Cursor, Copilot, o vio un video de estos agentes?** **¿Cuál fue su primera impresión?**"(Esperar 2-3 respuestas. El objetivo: conectar emocionalmente con la herramienta. No se profundiza — es un gancho para el futuro.)*
> 

### **4. Cierre del Momento y Puente al Receso**

> **Tu cierre:***"Bien. Tienen su V1 generado — y ya saben exactamente por qué no sirve para lo que ustedes quieren. Saben la diferencia entre Vibe Coding irresponsable y profesional. Y saben que lo que viene después del receso va a usar todo lo que construyeron en la Clase 07.*
> 
> 
> *Después del receso van a abrir Gemini, van a pegar su Spec Sheet, y Gemini va a construirles el prompt scaffolded que luego van a disparar en Claude — esta vez con sus dos mockups adjuntos. El resultado va a ser irreconociblemente mejor que lo que acaban de ver. Descansen."*
> 

## Momento 04: V2 — Prompt Scaffolded con Spec Sheet + Mockups (~25 min)

**📋 Corresponde a: Lab Nuevo 08 — Parte 2 (V2: Prompt Scaffolded con Gemini)**

> **Nota táctica de inicio:** Este es el corazón de la clase. El V1 que generaron antes del receso fue el "mal ejemplo" — ahora viene la versión que sí usa su trabajo del Lab 07 como insumo. El instructor sigue siendo Caso de Estudio 0: rellena la plantilla con su propio Spec Sheet, adjunta sus mockups y dispara V2 en Claude mientras los alumnos replican. La comparación V1 vs V2 es el momento de mayor impacto visual de la clase.
> 

### **1. Los 3 Entregables del Lab 07 y su Rol en el Prompt**

**EN PANTALLA: Mostrar la carpeta con los 3 archivos del Lab 07.**

> **Tu explicación:***"¿Recuerdan el trabajo de la Clase 07? Definieron un Objetivo de Rediseño, editaron tokens en Figma, armaron el wireframe con cajas grises y lo convirtieron a High-Fi con foto, nombre, bio y botones reales. Y al final exportaron 3 archivos. Esos 3 archivos son exactamente lo que la IA necesita para hacer lo que ustedes ya diseñaron.*
> 
> 
> *Miren lo que cada uno aporta:*"
> 

| Archivo | Para qué sirve en el prompt |
| --- | --- |
| spec-sheet.txt | Define Rol, Contexto y Restricciones — lo que la IA no puede ver en una imagen |
| mockup-mobile.png | Claude extrae colores, proporciones y layout del diseño móvil |
| mockup-desktop.png | Claude adapta el diseño a desktop sin tener que adivinar la distribución |

> *"Las imágenes le dicen a la IA cómo se ve su diseño. El Spec Sheet le dice quién eres, para quién es la página y qué reglas seguir. Las tres piezas juntas producen el resultado más cercano a lo que ustedes diseñaron. Si llegan con solo una, la IA tiene que adivinar las otras dos."*
> 

### **2. Gemini como Planificador — Construir el Prompt Scaffolded📋 Corresponde a: Parte 2 — Pasos 2.1 al 2.4**

**EN PANTALLA: Gemini abierto en una pestaña nueva.**

> **Tu explicación:***"¿Por qué usamos Gemini aquí y no Claude directamente? Porque Gemini es excelente razonando y organizando contexto largo — lo usamos como planificador para convertir su Spec Sheet en un prompt estructurado. Claude es el constructor que ejecuta ese prompt. Cada herramienta en su rol."*
> 

Comparte por el chat la plantilla de Scaffolding y ejecútala en vivo con tu propio Spec Sheet:

```
Actúa como un experto en Prompt Engineering para desarrollo web.

Necesito que conviertas mi Spec Sheet en un prompt scaffolded
profesional para que Claude genere mi sitio MyLinks.

Estructura el prompt con esta arquitectura:

[ROL] - Asignar identidad de desarrollador frontend senior
[CONTEXTO] - Quién soy, para qué es el sitio, quién lo usará
[TAREA] - Qué debe construir
[RESTRICCIONES TÉCNICAS] - Stack y reglas técnicas
[RESTRICCIONES DE DISEÑO] - Tokens y estilo
[FORMATO DE SALIDA] - Cómo entregar el resultado

Aquí mi Spec Sheet:
---
[PEGA AQUÍ TODO EL CONTENIDO DE TU spec-sheet.txt]
---

Genera el prompt estructurado listo para pegar en Claude.
Al final del prompt, agrega esta instrucción literal:
"Genera el código completo en un Artifact renderizable
para que pueda ver el resultado visual en tiempo real."
```

> *(Mientras pegas tu Spec Sheet en vivo):"¿Ven cómo la plantilla ya tiene los 5 bloques del Scaffolding que vimos? Yo solo tengo que rellenar el espacio marcado con mi Spec Sheet. Gemini va a leer mi objetivo de rediseño, mis colores, mi layout, mis enlaces — y va a construir un prompt completo y estructurado que yo pueda disparar directamente en Claude."*
> 

> **Ejecución del alumno (4 min):***"Abran su **spec-sheet.txt** del Lab 07. Copien TODO el contenido y péguenlo en el lugar marcado de la plantilla. Luego envíen a Gemini. Yo hago lo mismo con el mío en vivo."*
> 

> *(Cuando Gemini devuelve el prompt estructurado):"¿Ven la diferencia de longitud y especificidad? Gemini tomó mis 4 secciones del Spec Sheet y las convirtió en un prompt con Rol, Contexto, Tarea, Restricciones Técnicas, Restricciones de Diseño y Formato de Salida. Copien todo ese bloque — es el arma que van a disparar en Claude."*
> 

### **3. Claude como Constructor — Adjuntar los 2 Mockups y Disparar V2📋 Corresponde a: Parte 2 — Paso 2.5**

**EN PANTALLA: Claude abierto en una conversación nueva (no la del V1).**

> **Tu instrucción en voz alta:***"Abran Claude — nueva conversación, no la del prompt vago. Importante: antes de enviar el mensaje, vamos a adjuntar los 2 mockups."*
> 

**La secuencia exacta (la haces en vivo mientras dicts):**

1. Clic en el ícono de **clip 📎** en Claude.
2. Selecciona mockup-mobile.png — confirma que aparece el preview de la imagen.
3. Clic de nuevo en el **clip 📎** y selecciona mockup-desktop.png.
    
    > *(Voz alta):* *"Dos imágenes adjuntas — el diseño móvil y el de escritorio. Claude va a leer ambas, extraer los colores, las proporciones y el layout de cada vista, y construir un sitio responsive real que funcione desde móvil hasta desktop. Si solo suben una imagen, tiene que adivinar la otra vista."*
    > 
4. Pega el prompt scaffolded completo que generó Gemini.
5. Envía.

> *(Mientras Claude genera el Artifact):"Esta vez Claude tiene todo lo que necesita: Rol, quién soy, para quién es, restricciones de diseño, los dos mockups como referencia visual. Va a trabajar diferente."*
> 

### **4. Comparar V1 vs V2 — El Momento de Mayor Impacto📋 Corresponde a: Parte 2 — Paso 2.6**

**EN PANTALLA: Ambas conversaciones de Claude abiertas — V1 a la izquierda, V2 a la derecha.**

> **Tu pregunta al chat:***"**¿Cuántos están viendo una diferencia real? Descríbanla en el chat."(Esperar respuestas. Mientras lees en voz alta: "tiene mis colores", "aparece mi nombre", "el layout es como mi Figma".)***
> 

> **Tu análisis en voz alta:***"V1: genérico. Cualquier persona del planeta podría haberlo generado. Cero contexto → resultado estadísticamente promedio.*
> 
> 
> *V2: tiene su nombre, sus colores del Spec Sheet, su layout del mockup, sus enlaces reales. ¿Por qué? Porque Claude no tuvo que adivinar nada — le dimos Rol, Contexto, Restricciones y dos imágenes de referencia. Redujimos las probabilidades exactamente al resultado que querían.*
> 
> *Eso es la diferencia entre Vibe Coding irresponsable y profesional. Y eso es Prompt Scaffolding en acción."*
> 

### **5. Plan de Rescate — Para Alumnos sin los Entregables del Lab 07**

> **Nota táctica:** Identifica rápido quién no tiene Spec Sheet o mockups. No los dejes atrasados — dales la ruta alternativa en paralelo mientras los demás trabajan.
> 

**Ruta A — Tienen Spec Sheet y Mockups:**
→ Siguieron el flujo completo de los pasos anteriores. ✅

**Ruta B — Solo tienen imagen de Figma (sin Spec Sheet): POSIBLEMENTE SI NO LO TIENEN DEBE SACAR CAPTURA DE SU INSPIRACION**
→ Adjuntan las imágenes a Claude directamente con este prompt simplificado y rellenan los corchetes:

```
[ROL]
Actúa como un Experto Desarrollador Frontend Senior.

[CONTEXTO]
Te adjunto una captura de mi diseño High-Fi para mi página
personal "MyLinks". Convierte este diseño en código real.

[MI INFORMACIÓN]
- Nombre completo: [___]
- Rol o presentación: [___]
- Biografía: [___]

[MIS ENLACES]
1. [Nombre] → [URL]
2. [Nombre] → [URL]
3. [Nombre] → [URL]
4. [Nombre] → [URL]

[TAREA]
Genera el código HTML5 y CSS3 completo (en un solo archivo)
que replique EXACTAMENTE el diseño de las imágenes adjuntas.

[RESTRICCIONES TÉCNICAS]
- Mobile-First y responsive
- CSS puro sin frameworks externos
- Google Fonts para tipografía

[FORMATO DE SALIDA]
Genera el código en un Artifact renderizable.
```

> *"La Ruta A produce el mejor resultado porque combina el contexto escrito del Spec Sheet con el contexto visual de los mockups. La Ruta B es excelente si tienen buenas imágenes del Figma. La Ruta C funciona, pero Claude tiene que adivinar más — el resultado va a ser más genérico. Si están en Ruta C, lo más importante es que pongan su información real: su nombre, sus colores reales, sus enlaces reales."*
> 

## Momento 05: Iteración con Criterio + Extracción a VS Code (~20 min)

**📋 Corresponde a: Lab Nuevo 08 — Parte 3 (Iteración) + Parte 4 (Extracción)**

> **Nota táctica de inicio:** La generación V2 raramente sale perfecta al primer intento — y eso es exactamente el punto. Aquí el alumno aprende la diferencia entre "hazlo más bonito" (irresponsable) y una instrucción específica con código real (profesional). Luego viene la extracción: el código sale de Claude y entra a VS Code. La mecánica sigue siendo Caso de Estudio 0 — instructor itera primero, alumno replica.
> 

### **1. Por qué Iterar — Cero "hazlo más bonito"**

**EN PANTALLA: El Artifact V2 de Claude con el resultado en pantalla.**

> **Tu apertura:***"El resultado del V2 ya tiene sus colores, su nombre, su layout — pero seguramente hay algo que no quedó exacto. Tal vez el fondo tiene un color incorrecto, o hay más botones de los que diseñaron, o el contenido está centrado cuando querían pegado a la izquierda.*
> 
> 
> *Aquí viene el criterio. La diferencia entre el Vibe Coder irresponsable y el profesional está exactamente en cómo reacciona ante un output imperfecto."*
> 

**La trampa del prompt vago de corrección:**

> *"El irresponsable escribe: 'hazlo más bonito'. ¿Qué le está diciendo a la IA con eso? Nada — le está dando una probabilidad abierta de hacer cualquier cosa. La IA puede arruinar lo que sí estaba bien mientras arregla lo que estaba mal.*
> 
> 
> *El profesional identifica exactamente qué no está correcto y le da una instrucción específica que la IA pueda actuar. Por ejemplo: 'El fondo principal debe ser color blanco. Los botones en la parte inferior — los últimos 3 íconos — elimínalos y deja solo los primeros 4 enlaces'.*
> 
> *¿Ven la diferencia? Una instrucción vaga versus una instrucción quirúrgica."*
> 

### **2. Iteración 1 — Corrección de Ajustes del V2📋 Corresponde a: Parte 3 — Evaluación del resultado**

**EN PANTALLA: Artifact de Claude abierto. Muestras el output e identificas en vivo qué ajustar.**

> **Tu demostración en vivo:***"Yo veo en mi V2 que el contenido está centrado y quería que estuviera pegado a la izquierda. Voy a enviar una corrección específica — no vaga."*
> 

Ejecuta en la misma conversación de Claude:

```
Corrección específica:
- Mi contenido principal está centrado. Quiero que esté
  alineado a la izquierda (padding-left: 2rem en el contenedor).
- Elimina los íconos duplicados que aparecen en la parte inferior.
  Deja únicamente los 4 botones de enlace principales.

Genera el código completo actualizado en un nuevo Artifact.
```

> *(Mientras Claude actualiza el Artifact en tiempo real):"¿Ven? Le di exactamente qué cambiar y dónde. El resultado debería ser solo ese cambio — nada más roto, nada más alterado. Eso es iterar con criterio."*
> 

> **Ejecución del alumno (3 min):***"Revisen su propio Artifact V2. Identifiquen una cosa específica que no quedó como lo diseñaron. Escríbanla como instrucción quirúrgica — no 'hazlo mejor', sino qué exactamente y cómo. Ejecútenla."*
> 

### **3. Iteración 2 — Botones Personalizados con [uiverse.io](http://uiverse.io/)📋 Corresponde a: Parte 3 — Pasos 3.1, 3.2 y 3.3**

**EN PANTALLA: Navegador abierto en [uiverse.io](https://uiverse.io/) → sección Buttons.**

> **Tu explicación:***"Ahora la iteración más visible: los botones de sus enlaces. Claude generó botones funcionales — pero genéricos. Vamos a reemplazarlos con un estilo específico de una librería de componentes de código abierto: [uiverse.io](http://uiverse.io/).*
> 
> 
> *¿Por qué uiverse y no pedirle a Claude que 'haga botones más bonitos'? Porque en uiverse tenemos código real, probado, con hover effects, sombras, animaciones — y se lo pasamos a Claude como referencia exacta. Eso es usar la IA con criterio: le das código real, no intenciones vagas."*
> 

**La demo en vivo — secuencia exacta:**

1. Navega a uiverse.io → menú **Buttons**.
2. Filtra por el estilo que encaje con su paleta (minimal, neon, glass — elige uno en vivo).
3. Clic en el botón que elegiste → **"Get CSS"** o **"Copy"**.
    
    > *"Copien el bloque CSS completo — no el HTML, solo el CSS. Este código define exactamente el estilo visual del botón."*
    > 
4. Vuelve a Claude — misma conversación del V2. Pega el prompt de iteración:

```
Quiero modificar los botones de enlace de mi MyLinks usando
como referencia el estilo CSS de este botón que encontré
en uiverse.io:

[PEGAR AQUÍ EL CÓDIGO CSS DEL BOTÓN ELEGIDO]

Instrucciones:
- Aplica este estilo visual (sombras, bordes, hover effects)
  a TODOS los botones de enlace.
- Adapta los colores del botón a mi paleta existente
  (no uses los colores originales del snippet tal cual).
- Mantén la estructura HTML que ya tienes.
- Genera el código completo actualizado en un nuevo Artifact.
```

> *(Cuando aparece el nuevo Artifact):"¿Ven la diferencia? Los mismos botones, pero ahora con animación de hover, sombra, transición. Y lo más importante: adaptados a su paleta de colores — no son los colores originales del snippet, son los suyos. Eso es criterio."*
> 

> **Pregunta de calibración:***"¿Alguien encontró un botón en uiverse que quiera usar y no sabe si encaja con su paleta? Muéstrenme cual encontraron."(Leer 1-2 respuestas, dar feedback rápido sobre compatibilidad de estilo.)*
> 

### **4. Extracción: Claude → VS Code → Live Server📋 Corresponde a: Parte 4 — Pasos 4.1, 4.2 y 4.3**

**EN PANTALLA: El Artifact final de Claude — botón "Copy" visible arriba.**

> **Tu explicación del concepto:***"Hasta ahora su MyLinks vive únicamente dentro de Claude — es un preview en el navegador, no un archivo real en su computadora. Para que exista como proyecto real, hay que extraerlo. Este paso es el puente entre el chat de IA y su entorno de trabajo como desarrolladores."*
> 

**La secuencia exacta en vivo:**

**PASO 1 — Copiar del Artifact:**

> *"En el Artifact de la última versión — ya con los botones personalizados — clic en el botón **Copy** que aparece arriba del código."*
> 

**PASO 2 — Abrir el repo de Clase 06 en VS Code:**

> *"Abran VS Code. Naveguen a su carpeta del repositorio mylinks de la Clase 06 — no crean una carpeta nueva. Este es el mismo repo que ya existe, ya tiene su URL pública en GitHub. Solo van a actualizar el index.html."*
> 

**PASO 3 — Reemplazar index.html:**

> *"Abran index.html. Seleccionen TODO el contenido (Ctrl+A) y péguenlo (Ctrl+V). Guarden (Ctrl+S).*
> 
> 
> *Una sola pregunta: ¿cuántas líneas de HTML y CSS escribieron ustedes? Ninguna. Pero saben exactamente qué hay ahí — Rol, Contexto, Restricciones, mockups, iteraciones. Eso es Vibe Coding profesional."*
> 

**PASO 4 — Verificar con Live Server:**

> *"Clic derecho sobre index.html → **Open with Live Server**. Su navegador abre 127.0.0.1:5500/index.html. Comparen: Artifact de Claude a la izquierda — Live Server a la derecha. ¿Se ven iguales?"*
> 
> 
> *(Si hay diferencias menores de color o sombra):"Si hay pequeñas diferencias visuales — un color que se ve ligeramente distinto, una sombra que cambia — esas las ajustan directamente en VS Code. Ya tienen el CSS necesario de las clases anteriores. La IA construyó el 95%, ustedes afinan el 5% con criterio."*
> 

### **5. Commit del Progreso📋 Corresponde a: Parte 4 — Paso 4.4**

**EN PANTALLA: Terminal integrada de VS Code abierta.**

> **Tu explicación rápida:***"Antes de publicar, guardamos el estado actual con un commit. Dos comandos — los mismos de siempre:"*
> 

```bash
git add index.html
git commit -m "feat: generar MyLinks con IA y personalizar botones"
```

> *"El mensaje del commit describe exactamente qué hicieron. No 'cambios varios', no 'update' — un mensaje que dentro de 6 meses les cuente la historia de este archivo. Eso es un hábito de desarrollador profesional."*
> 

**6. Bonus — Background con patterncraft.fun📋 Corresponde a: Lab Nuevo 08 — Bonus 1 (Opcional)**

> **Nota táctica:** Solo si hay tiempo sobrante. No sacrifiques el Momento 06 por este bonus.
> 

**EN PANTALLA:** Navegador en [patterncraft.fun](https://patterncraft.fun/).

> *"Si ya tienen su commit hecho y les sobra tiempo antes de la publicación, hay un extra rápido. patterncraft.fun es un generador de fondos con patrón — colores ajustables, estilos de mosaico, todo en código CSS listo para copiar.*
> 
> 
> *La mecánica es idéntica a lo que hicieron con uiverse: eligen un patrón, ajustan los colores a su paleta, copian el CSS y le piden a Claude que lo aplique al background del body con una instrucción específica. Mismo proceso, diferente resultado visual.*
> 
> *Lo hacen igual que los botones — código real adjunto + instrucción quirúrgica. No 'agrega un fondo bonito' — 'aplica este código CSS como background del body, adapta los colores a mi paleta existente'."*
> 

## Momento 06: Publicación en GitHub Pages (~20 min)

**📋 Corresponde a: Lab Nuevo 08 — Parte 5 (Desafío Calificado)**

> **Nota táctica de inicio:** Este es el momento de mayor impacto emocional de toda la clase. El alumno pasó el módulo construyendo en local — aquí su trabajo sale al mundo con una URL pública real. El rol del instructor es hacer el proceso en vivo, esperar a que todos lleguen al mismo punto, y crear el momento colectivo de compartir URLs. El celular físico es protagonista aquí.
> 
> 
> ⚠️ **Importante:** El lab marca esta parte como "Desafío Calificado". Asegúrate de que todos copien su URL antes de cerrar — es la entrega del módulo.
> 

### **1. Push al Repositorio Existente📋 Corresponde a: Parte 5 — Paso 5.1**

**EN PANTALLA: Terminal integrada de VS Code abierta.**

> **Tu apertura:***"Tienen su código en local, tienen un commit. Ahora viene el último paso: subirlo a GitHub para que el mundo pueda verlo. Como ya trabajamos en el repo mylinks de la Clase 06, este proceso es simple — ya existe la conexión remota. Son dos posibles escenarios:"*
> 

**Si ya hicieron push antes en este repo:**

```bash
git push
```

**Si es la primera vez que pushean en este repo:**

```bash
git push -u origin main
```

> *(Ejecutas en vivo mientras el grupo replica):"Vean el output de la terminal — les muestra cuántos objetos subió y a qué URL. Si les pide credenciales, usen su usuario y token de GitHub que ya configuraron antes."*
> 

> **Para quienes usaron Gemini Canvas en lugar de Claude:***"Si extrajeron desde Gemini Canvas: mismo proceso — copiaron el código, reemplazaron el index.html en el repo de Clase 06, hicieron el commit y ahora hacen el push. La herramienta que usaron para generar no cambia cómo se publica."*
> 

### **2. Activar GitHub Pages📋 Corresponde a: Parte 5 — Pasos 5.2 y 5.3**

**EN PANTALLA: Navegador en github.com/TU-USUARIO/mylinks → pestaña Settings.**

**La secuencia exacta en vivo (dicts mientras navegas):**

1. Ve a tu repo: github.com/[tu-usuario]/mylinks
2. Clic en **Settings** (pestaña arriba a la derecha del repo).
3. Menú lateral izquierdo → **Pages**.
4. En Source: selecciona **Deploy from a branch**.
5. En Branch: selecciona **main** + **/ (root)**.
6. Clic en **Save**.

> *(Después de guardar):"GitHub va a construir su sitio — tarda entre 1 y 3 minutos. Refresquen la página de Settings → Pages hasta que aparezca el banner verde que dice 'Your site is live at...' con su URL. Mientras esperan, una cosa más."*
> 

> **El tip del About — enlace visible en el repo:***"En la página principal de su repositorio, vean el panel 'About' a la derecha. Hay un engranaje ⚙️ — denle clic. Ahí hay un campo 'Website'. Peguen su URL de GitHub Pages ahí y guarden. Esto hace que cualquier persona que visite su repositorio vea el enlace directamente sin tener que buscarlo. Háganlo ahora mientras esperan el deploy."*
> 

### **3. El Momento Wow — Celular Físico📋 Corresponde a: Parte 5 — Pasos 5.4 y 5.5**

**EN PANTALLA: El banner verde de GitHub Pages con la URL activa.**

> *(Cuando aparece la URL):"Ahí está. Copien esa URL — https://[su-usuario].github.io/mylinks/ — y envíensela a ustedes mismos por WhatsApp ahora mismo. Ábrela en su celular físico."*
> 

*(Esperar 1-2 minutos a que todos abran la URL en su celular.)*

> *"¿La ven funcionando en su celular? ¿Los botones redirigen? ¿El diseño se ve responsive?*
> 
> 
> *Hace menos de dos horas diseñaron en Figma. Hace una hora le dieron un prompt vago a Claude y salió algo genérico. Ahora mismo tienen su propio sitio — con su nombre, sus colores, sus enlaces — funcionando en el navegador de su celular, accesible desde cualquier lugar del mundo con una URL pública.*
> 
> *Eso hicieron hoy."*
> 

> **Compartir en el chat — validación colectiva:***"Peguen su URL en el chat ahora mismo. No es show off — es evidencia. Recorran las URLs de sus compañeros. Vean los estilos. Cada uno llegó con el mismo laboratorio y con el mismo set de herramientas — y miren la variedad de resultados. Eso es criterio individual, no la IA."*
> 

*(Leer 2-3 URLs en voz alta. Comentar brevemente el estilo de cada una — "este tiene un enfoque minimalista", "este usó bien el contraste oscuro de su paleta".)*

### **4. Instrucciones de Entrega**

> **Tu explicación:***"Para la entrega formal del proyecto, necesitan enviar 3 cosas por la plataforma del curso:"*
> 
1. **URL del repositorio:** https://github.com/[tu-usuario]/mylinks
2. **URL del sitio publicado:** https://[tu-usuario].github.io/mylinks/
3. **Screenshot del sitio desplegado** — captura de pantalla de cómo se ve tu MyLinks publicado.

> *"Al insertar los enlaces en la plataforma, usen la opción 'Enlace externo' — no peguen la URL como texto plano. Ahí les va a pedir el enlace y un texto descriptivo: 'Repositorio MyLinks' y 'Sitio publicado MyLinks'. Así queda clickeable y yo puedo revisarlo directamente desde la entrega."*
>