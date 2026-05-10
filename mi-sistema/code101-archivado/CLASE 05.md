# CLASE 05

## Setup del Desarrollador Moderno: Terminal, Git y GitHub

---

## CAPA 1 — MOMENTOS DE LA CLASE

> La lógica del flujo: cada momento expone un problema que el siguiente resuelve.
> Terminal → "ok, pero cómo guardo mi trabajo" → Git → "ok, pero cómo lo comparto" → GitHub → flujo completo.

---

### Momento 1: Bienvenida y Transición Módulo 1 → Módulo 2

1. Celebración breve del Módulo 1 — dónde llegaron
2. El salto: de crear a profesionalizar
3. Quiz pre-lab: ¿cómo haría otra persona para ver tu perfil ahora mismo?
4. Presentación del proyecto del módulo: MyLinks (como Linktree, pero tuyo)

---

### Momento 2: La Terminal

1. El problema: hacer cosas con el mouse es lento y limitado
2. Qué es la Terminal — el control remoto universal
3. Demo en vivo: la magia de un comando vs muchos clics
4. Comandos básicos en vivo: `pwd`, `ls`, `cd`, `mkdir`
5. Code-along: navegar hasta `Documents` y crear la carpeta `bootcamp`

---

### Momento 3: Git Local — El Flujo y Las Áreas

1. El problema: `proyecto_FINAL_FINAL_AHORASI.html` — todos lo han vivido
2. Historia de Git: Linus Torvalds, 2005, 2 semanas
3. Iniciar la magia: `git init` (el camarógrafo llega a la sala)
4. Analogía del flujo de trabajo (Tomar una foto) + Code-along combinados:
   - **Untracked (Detrás de escena):** El camarógrafo (Git) no conoce tu presencia porque estás detrás de escena. Creas el archivo `index.html`. `git status` lo muestra en rojo.
   - **Working Directory (El escenario):** Estás preparándote para la foto (ajustando tu ropa, escribiendo código). Haces cambios en el archivo. Git sabe que estás ahí, pero aún no estás listo.
   - **Staging Area (Prepararse para la cámara):** Estás posando y esperando la captura. Comando: `git add .`. **Estás diciendo a Git que estás listo para la foto**. `git status` ahora está en verde.
   - **Repositorio Local (Tomar la Foto):** Foto tomada. Comando: `git commit -m "..."`. Guardas el estado en ese momento.
5. Las Ramas: Líneas de tiempo alternativas + Git Flow básico.

---

### RECESO (30 min)

---

### Momento 4: GitHub y Compartir el Código

1. El problema: Mis commits están en mi PC. ¿Cómo le muestro este avance a mi equipo, profesor o reclutador si no están en mi computadora?
2. GitHub = Git + nube. La diferencia (Git es el motor local, GitHub es el servidor social).
3. GitHub como plataforma colaborativa y portfolio profesional (El currículum del desarrollador).
4. Demo: Crear repositorio desde el template MyLinks en web.
5. Code-along: `git clone` — descargar una copia exacta de la nube a su PC local.

---

### Momento 5: El Flujo Completo (Local + Remoto)

1. El flujo de sincronización remota: cómo subimos los cambios nuevos.
   - Hacemos un cambio rápido en el index.html del proyecto recien clonado.
   - Guardado Local (`git status` → `git add .` → `git commit -m "..."`).
   - Sincronización a la nube (`git push`).
2. Verificar en GitHub: ver el commit y su foto de perfil aparecer en la web.

---

### Momento 6: Cierre

1. Reflexión: qué lograron hoy (terminal + git + githb + primer push)
2. Conexión: su código ya está en la nube — próxima clase lo hacemos responsive
3. Preguntas de cierre
4. Instrucciones del entregable

---

## MANEJO DEL TIEMPO

| Momento       | Foco Principal                            | Tiempo Estimado |
| ------------- | ----------------------------------------- | --------------- |
| **Momento 1** | Transición M1→M2, Quiz, MyLinks           | 15 min          |
| **Momento 2** | Terminal, comandos básicos, code-along    | 30 min          |
| **Momento 3** | Git, commits, ramas, git flow             | 25 min          |
| **RECESO**    | Descanso                                  | 30 min          |
| **Momento 4** | GitHub, clone, abrir proyecto             | 25 min          |
| **Momento 5** | Flujo git completo, primer push           | 30 min          |
| **Momento 6** | Cierre, entregable                        | 10 min          |
| **Colchón**   | _Autenticación, instalaciones, preguntas_ | _25 min_        |

**Total sin colchón:** 135 min · **Con colchón:** 160 min · **Clase real:** 180 min

---

### ¿Por qué esta distribución?

- **El Momento 2 (Terminal) va solo antes del receso** — los comandos son simples y la práctica es directa. Llegan al receso habiendo tocado la terminal por primera vez. Victoria temprana.
- **Git antes del receso, GitHub después** — separar los dos conceptos evita que se confundan. El receso actúa como separador mental.
- **El Momento 5 (Flujo completo) es el más largo** — es secuencial y dependiente: si un alumno se pierde en `git add`, no puede hacer `git commit`. Necesita tiempo real de espera y verificación.
- **El colchón está pensado para autenticación** — el punto de mayor fricción de esta clase es el primer `git push`. Siempre hay alumnos con problemas de credenciales. El colchón existe para eso.


# FLUJO DE PRESENTACION CLASE 05

## Momento 1: Bienvenida y Transición Módulo 1 → Módulo 2

> **OBJETIVO:** Validar el esfuerzo del Módulo 1, cambiar la mentalidad de “crear” a “profesionalizar”, e introducir el concepto de que el código debe vivir fuera de su propia PC.
> 

### 1. Celebración breve del Módulo 1 — dónde llegaron

       **EN PANTALLA:** TEAMS (Solo tu cámara, sin compartir pantalla aún).

- Te conectas y empiezas reconociendo el logro. El Módulo 1 es el filtro más difícil y ya lo pasaron.
- Mencionas lo rápido que pasaron de no saber qué era una etiqueta a tener una página web estructurada y estilizada. Que se den cuenta de su propio progreso.

> **Pregunta de calibración (Reflexión Módulo 1):** *"Chicos, antes de empezar, del 1 al 10, ¿cuánta diferencia hay entre la primera página web que hicieron en la Clase 01 y la que lograron terminar entregando en su proyecto final?"*
> 
> - **1:** Ninguna. Terminaste entregando exactamente lo poco que pensabas que serías capaz.
> - **5:** Intermedia. Superaste tus expectativas básicas, pero sabías que el HTML no era tan difícil.
> - **10:** Abismal. No tenías ni idea de que serías capaz de hacer flexbox, grid y un diseño tan profesional en solo unas semanas.

### 2. El salto: de crear a profesionalizar

       **EN PANTALLA:** SLIDES DE LA CLASE 05 - Slide 01 (Portada) y luego Slide 02 (Transición).

- Compartes pantalla. Haces el contraste claro:
    - El Módulo 1 fue sobre crear: HTML, CSS, Flexbox. Tu perfil ya existe, pero vive encerrado en tu computadora.
    - El Módulo 2 es el módulo de **profesionalizar**. A partir de hoy van a usar las herramientas exactas que un ingeniero usa en Amazon, Google o cualquier startup: Terminal, Git y GitHub.”

### 3. Quiz pre-lab

       **EN PANTALLA:** SLIDES DE LA CLASE 05 - Slide 03 (Quiz Pre-Lab).

- **PREGUNTA: Cómo haría otra persona para ver tu perfil ahora mismo?**
    
    Respuestas esperadas (o que puedes sugerir como chiste): *“Le mando la compu por correo”*, *“Le paso el archivo .html por WhatsApp”*, *“Le tomo captura de pantalla”*.
    
- **La revelación:** Tomas esas respuestas y las usas para plantear el problema:
    
    > “Pasar el archivo por WhatsApp funciona para un trabajo de la universidad, pero no para Netflix. Necesitamos un sistema que nos permita guardar el historial de cambios y colaborar con 10 o 1000 desarrolladores al mismo tiempo en el mismo código. Y luego, necesitamos subirlo a la nube. Eso es exactamente lo que aprenderemos hoy.”
    > 

### **4. Presentación del proyecto del módulo: MyLinks (como Linktree, pero tuyo)**

- **EN PANTALLA:** NAVEGADOR - Muestras un ejemplo visual (puedes mostrar tu propio MyLinks terminado en local o un Linktree real famoso).
- Conectas las herramientas con el proyecto final:
    
    > “Durante las próximas 4 clases no vamos a aprender herramientas en el aire. Vamos a construir esto: **MyLinks**. Un hub personal para todos sus enlaces. Hoy vamos a configurar la base del proyecto y subirlo a internet. 
    En la próxima clase lo haremos responsive para que se adapte al celular, y al final del módulo estará publicado en vivo con GitHub Pages para que pongan el link en su Instagram o LinkedIn.”
    
    Esto les da motivación: el código feo de la terminal de hoy resultará en un portafolio profesional publicado.
    > 

## **Momento 2: La Terminal**

> **OBJETIVO:** Romper el miedo a la interfaz de texto y lograr que cada alumno cree la carpeta física del bootcamp mediante comandos.
> 

### 1. El problema: hacer cosas con el mouse es lento y limitado

**EN PANTALLA:** ESCRITORIO DE WINDOWS/MAC + TERMINAL ABIERTA AL LADO.

> **Pregunta:
*"Chicos, una pregunta rápida: En pleno 2026 tenemos Inteligencia Artificial, pantallas táctiles y gafas de realidad virtual. Todo funciona con interfaces gráficas hermosas e intuitivas... entonces, ¿por qué creen que los ingenieros de Google, Netflix o Spotify siguen trabajando escribiendo comandos verdes en pantallas negras como si estuviéramos en 1980?"***
> 
- Plantea la situación realista:
    
    > Imagina que tu jefe te pide crear 10 carpetas, una por cada mes del año, y dentro de cada una un archivo `reporte.txt`. 
    Hacer clic derecho → Nueva Carpeta → Nombrar → Entrar → Clic derecho… te tomaría 5 minutos de clics repetitivos. Un desarrollador lo hace en 2 segundos.
    > 

### 2. Demo en vivo: la magia de un comando vs muchos clics (Demostración del problema en tiempo real)

**EN PANTALLA:** TERMINAL VS INTERFAZ GRÁFICA.

- **Acción:**
    1. Abre una carpeta en tu explorador de archivos para que todos vean qué pasa gráficamente.
    2. A un lado, ten la terminal apuntando a esa misma carpeta.
    3. Copia y pega este comando rápido en la terminal (no necesitas explicarlo, solo que vean la magia):
    `mkdir Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic` 
    4. **El Impacto:** Que vean cómo mágicamente aparecen 12 carpetas al instante en el explorador gráfico.

> La terminal no es una herramienta para “escribir código”, es una herramienta para **controlar el sistema operativo**. Todo lo que se hace con clics (crear carpetas, mover archivos, abrir programas), se puede hacer más rápido con comandos.
> 

> Windows 95 fue precisamente ese: **democratizar la computación**.
Antes de las interfaces gráficas (GUI), la computadora era una barrera de texto; con la interfaz visual, se convirtió en una herramienta de “apuntar y hacer clic”. 
Como desarrollador, es interesante notar que hoy vivimos en un equilibrio entre ambos mundos:  
- La GUI (Interfaz Gráfica): Es imbatible para la exploración y el aprendizaje inicial. Es intuitiva porque imita el mundo real (carpetas, papelera, ventanas).
La Terminal (CLI): Es imbatible para la automatización y la velocidad. Para un dev, escribir git push es mucho más rápido que abrir una ventana, buscar un botón, confirmar y hacer clic .
> 

> **PREGUNTA**: Hay un nicho de desarrolladores, administradores de sistemas y entusiastas de la eficiencia que viven en la **terminal (CLI) sin ningun GUI
Dime tu en un futuro posiblemente seguirias su pasos? Seria tema full terminal? O talvez ya estamos tan acostumbrados a ver esta interfaz que nos costaria cambiarlo.**
> 

### 3. El sistema de archivos: La jerarquía de carpetas

**EN PANTALLA:** EXPLORADOR DE ARCHIVOS DE WINDOWS/MAC.

- **Acción:**
    1. Abre cualquier carpeta en tu computadora. Señala la barra lateral donde se ve el árbol de carpetas.
    2. Haz clic en el espacio en blanco de la barra de direcciones superior para revelar la ruta completa (ej. `C:\Users\TuNombre\Documents`).
    
    > **Tu explicación:** “Nuestras computadoras organizan todo en un ‘Sistema de Archivos’, que es simplemente una jerarquía de carpetas padres e hijos. 
    Esta ruta que ven aquí arriba es la dirección exacta de donde estamos. La terminal nos permite movernos a través de estas mismas rutas y niveles de jerarquía, pero usando comandos en lugar de clics.”
    > 

### **4. Qué es la Terminal y los 5 comandos básicos**

**EN PANTALLA:** PRESENTACIÓN CANVA - Slide con la imagen generada de los 5 comandos.

- Presentar los comandos
    - `pwd` (Imprime en pantalla la ruta actual del directorio de trabajo)
    - `ls` (Lista los archivos y directorios contenidos en la ubicación actual)
    - `cd` (Cambia el directorio de trabajo activo a la ruta especificada)
    - `cd ..` (Sube un nivel en la jerarquía, volviendo al directorio padre)
    - `mkdir` (Crea un nuevo directorio en la ruta actual)
    - `touch` (Crea un nuevo archivo vacío)

<aside>

**NOTAS:**

- el punto seguido de una barra (`.\`) es un **atajo** que significa: **"en esta misma carpeta donde estoy ahora"**. Es una referencia al **directorio actual**.
- **EMPIEZA DESDE LA RAIZ :** la `\` inicial significa **"la raíz de la unidad actual"**.   →  **`cd \2022-1`**: Busca en la **raíz del disco** `C:\`
</aside>

### **5. Code-along: Navegar hasta Documents y crear la carpeta bootcamp**

- **EN PANTALLA:** VS CODE (Terminal integrada abajo, explorador arriba).
- Pide que todos abran VS Code y saquen la terminal.
- Hazlo **con ellos, comando a comando**:
    1. `pwd` → “¿Dónde estamos? Seguramente en su Usuario.”
        
        > **Pideles que:**
        Copien y peguen en el chat su ruta actual
        > 
    2. `ls` → “Busquen en esa lista la palabra ‘Documents’.”
    3. `cd Documents` → (¡Enséñales aquí a usar la tecla TAB para autocompletar!)
    4. `pwd` → Para validar que sí entraron.
    5. `mkdir bootcamp` → Crean la carpeta principal.
    6. `cd bootcamp` → Entran.
    7. `touch prueba.txt` → (Opcional) Crean un archivo solo para que vean que también funciona y luego hacen `ls` para verlo.

### **🚨 Gestión de Riesgos y Errores (Lo que va a fallar aquí)**

> 
> 
> 1. **El Problema del Espacio en Rutas:**
>     - *El error:* Alumno escribe `cd mis documentos` y la terminal lanza error porque cree que “mis” es un parámetro y “documentos” es otro.
>     - *Cómo actuar en vivo:* Advierte antes de que lo escriban. “La terminal no entiende de espacios, chicos. Si su carpeta tiene un espacio, la terminal lo lee como dos órdenes separadas. Si van a entrar a una carpeta con espacio, úsen comillas: `cd 'Mis Documentos'`”.
> 2. **“El comando ls no se reconoce” (Windows CMD):**
>     - *El error:* Un alumno en Windows abre `cmd` (Command Prompt) en vez de Git Bash. Para el sistema CMD `ls` da error porque su comando nativo es `dir`. Sin embargo, PowerShell **sí** acepta `ls`.
>     - *Cómo actuar en vivo:* “Ojo los de Windows. En VS Code, miren la esquina derecha de la terminal. Debe decir ‘bash’, ‘Git Bash’ o ‘powershell’. Si por error dice ‘cmd’, denle a la flechita hacia abajo y elíjan Bash o PowerShell que sí soportan estos comandos. CMD nos dará error.”
> 3. **El Pánico del `cd` a una carpeta inexistente:**
>     - *El error:* Escriben `cd Downloads` estando dentro de `Documents` y les da error porque Downloads no está *dentro* de Documents.
>     - *Cómo actuar en vivo:* Enseña la regla de oro: **“Nunca hagan un `cd` sin haber hecho un `ls` primero”**. Si el nombre de la carpeta a la que quieres entrar no aparece en la lista de `ls`, significa que no está ahí y no puedes entrar directamente. Hay que usar `cd ..` o escribir la ruta completa.

## **Momento 3: Git Local — El Flujo y Las Áreas**

> **OBJETIVO:** 
Enseñar el ciclo de vida local de Git conectando los conceptos técnicos exactos (Untracked, Staging, etc.) con la metáfora fotográfica, y entender cómo Git almacena las diferentes líneas de tiempo (Ramas).
> 

### 1. El problema: `proyecto_FINAL_FINAL_AHORASI.html`

 **EN PANTALLA:** EXPLORADOR DE ARCHIVOS CARPETA LOCAL.

- **Demostración en tiempo real:**
    
    > ***¿Quién de aquí ha hecho esto para un trabajo de la universidad?”***
    El objetivo es que se rían y reconozcan su propio dolor empírico.
    > 
    1. Abre una carpeta en vivo llamada `Entregable_01`.
    2. Duplica el archivo `index.html` varias veces frente a ellos y ponles nombres como: `index_v2.html`, `index_corregido.html`, `index_FINAL.html`, `index_AHORA_SI_FINAL.html`. explicandoles porque
    3. Pregúntales: 
    
    > 
    > 
    > 
    > Ese es nuestro sistema de versionamiento primitivo. 
    > **Que es un Sistema de Control de Versiones(SVC)?
    > Es un sistema que registra los cambios realizados sobre un archivo o conjunto de archivos a lo largo del tiempo.**
    > Linus Torvalds, el creador de Linux, necesitaba coordinar a miles de personas sin perder nada. Y ahi fue donde creo GIT , en solo dos semanas”
    > 

### **2. ¿Qué es Git y nuestro Entorno de Trabajo?**

**EN PANTALLA:** SLIDE GIT

- **Tu explicación teórica precisa (Los 3 Pilares):**
    
    > **QUE ES GIT?**
    > 
    > - Git es un **sistema de control de versiones** que registra los cambios en tus archivos a lo largo del tiempo, permitiéndote **regresar a versiones anteriores**
    
    > "¿Exactamente qué instalamos hoy? 
    **Git** es un software de control de versiones. 
    Tómenlo como una máquina del tiempo para carpetas. 
    Tiene tres características
    > 
    > - **Es Local:** A diferencia de Google Docs o Figma, Git vive 100% en tu propio disco duro. No necesita internet para guardar versiones (commits).
    > - **Está Basado en Comandos:** No tiene botoncitos ni mouse. Lo manejamos íntegramente desde la Terminal negra que acabamos de conocer.
    > - **Usa 'Repositorios':** Una carpeta normal es tonta, solo guarda archivos. Un **Repositorio** es una carpeta normal que Git vigila y rastrea mágicamente. Si creas o borras algo, el **Repositorio** lo sabe.
- **El parche en Windows (Git Bash):**
    
    > *"Aquellos que usamos Windows sufrimos porque nuestra consola de fábrica (CMD) no siempre entiende a Git igual que Mac o Linux. Por eso hemos instalado **Git Bash**, un emulador que nos da una terminal estilo Linux potente dentro de Windows para que todos los comandos nos funcionen igual."*
    **Git Bash** es una herramienta que permite a los usuarios de Windows usar Git desde una terminal con comandos al estilo de Unix/Linux.
    > 

<aside>

*"Técnicamente, el verdadero repositorio es solo la carpeta invisible **`.git`**. Esa es la base de datos que guarda las versiones. Tu carpeta externa (donde escribes el código) se llama **Working Directory (Directorio de Trabajo)**.*

*Sin embargo, en el día a día, todos los programadores le llamamos 'Repositorio' o 'Repo' a **la carpeta completa**. Así que si me escuchan decir 'abran su repositorio', me refiero a la carpeta entera que ya tiene un `.git` adentro."*

</aside>

### **3. Flujo en GIT: Las Áreas y Los Estados**

**EN PANTALLA:** PRESENTACIÓN CANVA (Slide Flujo de GIT) + VS CODE (Terminal integrada).

- **El guion teórico-práctico integrado:** Empezamos a explicar la teoría mientras la accionamos inmediatamente en la consola para no ser aburridos.
1. **`git init` (Inicialización del proyecto):**
    
    > *"Primero empezamos a rastrear el proyecto. Con el comando `git init` le estás diciendo a Git que convierta la carpeta actual en un repositorio, creando una base de datos oculta (`.git`) para empezar a rastrear y guardar el historial de todos tus cambios."*
    **Muestras en tu explorador de la carpeta de proyecto:** "Miren como aparecio una nueva carpeta llamada **.git**"
    > 
2. **Espacio de Trabajo (Working Space):**
    
    > *"Esta carpeta donde estamos parados y donde abrimos archivos en el VS Code se llama **Espacio de Trabajo**. Aquí es donde ustedes tocan cosas reales."* 
    **Muestras en VScode:** Creas un archivo `index.html`. 
    *"Al crear un archivo, este entra inmediatamente en estado **NUEVO (Untracked)**. 
    Git lo ve de reojo (en VS Code se ve una 'U'), pero no sabe qué hacer con él todavía."* *"¿Cómo sabemos exactamente cómo lo está viendo Git? Con nuestro radar de estado: `git status`."* (Muestra el estado actual y archivos modificados). 
    **Muestras en VScode:** Ejecutas `git status`. *"Efectivamente, está en rojo."*
    > 
3. **Área de Preparación (Staging Space):**
    
    > *"Git no guarda los cambios por defecto. Tú le tienes que decir qué archivos has cambiado
    Ese espacio es el **Área de Preparación :*** Es un área intermedia **donde colocas los cambios que deseas incluir en el próximo commit.
    Cada vez que se realiza un cambio se debe llevar el archivo al staging .**
    ****Muestras en VScode:** Ejecutas `git add .` 
    *"El comando `git add` toma tu código NUEVO o MODIFICADO y lo añade al área de espera de forma oficial."* 
    **Muestras en VScode:** Ejecutas `git status`. *"Noten el cambio. Las letras en la terminal ahora están verdes. El archivo ha pasado con éxito al estado **PREPARADO (Staged)**."*
    > 
4. **Repositorio Local (Local Repository):**
    
    > *"Los cambios  están listos y seleccionado. Ahora es momento de guardarlos, de lanzar la captura permanente a la base de datos interna: El **Repositorio Local**."*
    **Muestras en VScode:** Ejecutas `git commit -m "feat: estructura inicial del template"` *"El comando `git commit` crea una captura segura de tus cambios en el historial, sellándolos siempre con un mensaje descriptivo que cuenta la historia (no usen mensajes tontos como 'asd')."* 
    *"En este exacto segundo nuestro archivo llega a su meta: 
    El estado **CONFIRMADO (Committed)**.":* Es un archivo cuyos **cambios han sido confirmados** (commit) y están **registrados en el historial de Git, dentro del repositorio local.**
    > 
5. **El Historial del Proyecto:**
    
    > **Muestras en VScode:** Ejecutas `git log` o `git log --oneline`. *"Para ver nuestras capturas usamos `git log`. Verán la firma, el mensaje, la hora exacta, y un código extraño (Hash): la matrícula inquebrantable de ese commit."*
    > 

<aside>

- **`git status`**: Muestra el **estado actual** de tu carpeta, indicando qué archivos han sido modificados, cuáles están listos para guardarse y cuáles aún no están bajo el control de Git.
- **`git add`**: Prepara y **añade tus cambios al área de espera** (*staging area*), seleccionándolos oficialmente para que formen parte de tu próxima captura del historial.
- **`git commit`**: Crea una **captura permanente de tus cambios** en el historial, **guardándolos** con un mensaje descriptivo que funciona como un punto de control al que siempre podrás volver.
    - **git log** para ver los commits guardados

> **Las 3 Áreas de Git (Dónde guardamos las cosas): SON ESCENARIOS CONCEPTUALES**
> 
> 1. **Working Directory (El Escenario):** Es el directorio físico en tu disco duro donde actualmente estás trabajando y abriendo archivos en VS Code. Aquí se hacen los cambios.
> 2. **Staging Area / Index (La Tarima de Poses):** Es un área de preparación intermedia y virtual. Git usa este espacio para armar el paquete exacto de archivos que van a ser guardados en el siguiente commit.
> 3. **Local Repository (El Álbum Físico):** Es la base de datos segura (.git) donde Git almacena la historia permanente en forma de commits (fotos inmutables).
</aside>

### **4. Convención de mensajes de commit**

- **EN PANTALLA:** PRESENTACIÓN CANVA - Slide de Convención de Commits.
- **La Acción:** Explica que la foto necesita una firma y debe ser útil para el equipo, no `asdfgh` ni `cambios varios`. Muéstrales los prefijos. “Un commit cuenta una historia.”

### 5. Las Ramas y Git Flow Básico

**EN PANTALLA:** PRESENTACIÓN CANVA - Slide de Ramas y Git Flow.

> 
> 
> 
> Una rama o branch es una **línea independiente de desarrollo del codigo.**
> 
> - Cada rama **representa una línea de desarrollo de codigo** y puede **contener múltiples commits.**
> - Permite trabajar en c**ambios de forma aislada sin afectar la versión principal del código →**  sin afectar el código principal de producción (main).

> **Git Flow:** Es una convención o regla de los equipos profesionales donde se prohíbe tocar o romper ‘main’ directamente. En su lugar, todos sacan ramas extra para funcionalidades (ej. `feature/boton-nuevo`) y luego lo unen mediante `merge`.
**Git Flow** es un **modelo de trabajo (workflow)** que define una estructura estricta de ramas para organizar el desarrollo, las pruebas y el lanzamiento de software de manera ordenada y predecible.
**Analogía:** Imaginen que ‘main’ es la línea de tiempo oficial del Universo Marvel. Crear una rama es crear un multiverso alternativo donde puedes experimentar. Si allí construyes algo útil, abres un portal para fusionarlo (merge) y mejorar el mundo original; si explota y sale mal, simplemente borras ese multiverso y aquí en el original jamás pasó absolutamente nada malo.”
> 

### **🚨 Gestión de Riesgos y Errores (Lo que va a fallar aquí)**

> 
> 
> 1. **La Terminal pide `user.name` y `user.email` en el primer commit:**
>     - *El error:* Al escribir el primer `git commit`, la terminal arroja “Please tell me who you are” y dice que no se guardó el commit.
>     - *Cómo actuar en vivo:* “Tranquilos, no rompieron nada. Git detectó que son nuevos y les está pidiendo su identidad obligatoria para ponerle su firma de autor a su foto (commit). Escriban los comandos `git config --global user.name 'Su Nombre'` y luego con su email. Esto se requiere una sola vez por computadora en toda su vida. Posteriormente, repitan su commit con la flecha de arriba y enter.”
> 2. **Se les olvida el mensaje del commit o las comillas (`git commit` a secas):**
>     - *El error:* Ponen `git commit` sin `m` y la terminal abre un editor extraño de pantalla completa (Vim), o da error quedándose atorada esperando código (`>` en consola) si olvidan cerrar una comilla doble al final del mensaje.
>     - *Cómo actuar en vivo:* “Miren aquí chicos. Si olvidaron escribir `m` y se les abrió una pantalla negra horrible que parece imposible de salir (Vim), tecleen en minúsculas `:q!` (dos puntos, q y signo de exclamación cerrando) y presionen enter. O si por error la terminal se quedó pegada con este signo `=`, simplemente presionen el atajo asesino general de terminales: **`Ctrl + C`** para cancelar el comando fallido o incompleto. Su comando de guardado siempre es el `m` y la oración cerrada en comillas.”
> 3. **Pánico de ‘Mis carpetas han desaparecido’ o ‘La carpeta .git no existe’:**
>     - *El error:* “¿Profesor, hice `git init` pero no veo ninguna carpeta llamada `.git` por ningún lado y la terminal me lo confirmó, ¿dónde la encuentro?”
>     - *Cómo actuar en vivo:* Explica que Git es sigiloso. “En Windows y Mac, las carpetas que empiezan con simplemente un punto `.` están designadas bajo la estructura del SO a estar ocultas para proteger al usuario de dañarlas por accidente. Si su terminal tiró ‘Initialized blank Git repository…’ es porque todo el andamiaje invisible que cuida su código acaba de montarse con éxito.”

---

### **RECESO (30 min)**

---

## **Momento 4: GitHub y Compartir el Código**

> **OBJETIVO:** Entender qué es GitHub (La red social del código), crear un repositorio remoto desde la web, y usar `git clone` para traerlo a la máquina local listos para trabajar.
> 

### 1. El gran problema: El aislamiento y el riesgo local

**EN PANTALLA:** CONSOLA Y EXPLORADOR DE ARCHIVOS.

- **Demostración en tiempo real:**
    1. Muestra la carpeta del proyecto anterior (`Entregable_01`) donde hicieron sus commits locales.
    2. Diles en vivo: *“Perfecto, nuestro código está versionado en Git. Mañana tengo una entrevista de trabajo y el reclutador me pide visualizar el proyecto.”*
    3. Haz clic derecho en la carpeta -> Crear archivo `.zip`.
    4. Muestra cómo intentas adjuntar el `.zip` al chat de Teams. ***“Ningún ingeniero manda un Zip. Las empresas de tecnología asumen que tu código no existe si no está en un repositorio público o privado.”***
    5. Acto seguido (Drama opcional): Selecciona la carpeta y presiona `Shift + Supr` fingiendo borrarla permanentemente, simulando que se quema el disco duro. ***“Sin nube, el código local muere en la máquina local.”***

### 2. Concepto: Git ≠ GitHub (Diferencia Teórica)

**EN PANTALLA:** PRESENTACIÓN CANVA - Slide con la diferencia.

- **Tu explicación teórica precisa (Sin analogías):**
    
    > **Concepto Teórico de Git:** Es el software de Control de Versiones (VCS). Un programa ejecutable que instalas en el sistema operativo local (tu PC). Rastrea archivos, crea historia y versiones en la máquina gráfica a través de la Terminal (CLI). Funciona 100% offline sin necesidad de conexión a internet.”
    > 
    
    > “**Concepto Teórico de GitHub:** Es un servicio de alojamiento web (Hosting) en la nube para proyectos que usan Git. Es una interfaz gráfica online que proporciona servidores remotos gratuitos, herramientas sociales (issues, pull requests) y perfiles públicos para alojar el código de tu PC en la nube.”
    > 

### **3. Creación del Entorno: Su cuenta de GitHub**

**EN PANTALLA:** NAVEGADOR WEB (Página de registro de GitHub `github.com`).

- **La Acción Guiada:**
    1. "Antes de subir nada, necesitamos crear nuestro perfil oficial de programadores."
    2. Dales 3 minutos reloj en mano para que ingresen a GitHub, llenen su correo, verifiquen su cuenta con el código enviado por email y escojan un nombre de usuario profesional (sin apodos de videojuegos).
    3. Asegúrate de que todos hayan iniciado sesión y estén viendo el dashboard o panel principal antes de continuar.

### 4. Demo en vivo: Creando el Repositorio Remoto

**EN PANTALLA:** NAVEGADOR WEB (Tu cuenta de GitHub abierta).

- **La acción (Que solo miren, sin tocar aún):**
    1. Entra a tu perfil de GitHub.
    2. Crea un repositorio en blanco en vivo llamado `Mi-Primer-Repo`.
    3. Muéstrales la página vacía resultante de GitHub, que indica que el repositorio está inicializado en la base de datos de los servidores pero no tiene nada dentro.

### **5. Code-along: La descarga de la plantilla (git clone)**

- **EN PANTALLA:** NAVEGADOR (Arriba) + VS CODE (Terminal integrada abajo).
- **La acción guiada:**
    1. Que entren a sus propias cuentas de GitHub.
    2. Dales el enlace a la Plantilla Oficial del proyecto: `https://github.com/CattCloud/mylinks-template`.
    3. Indícales que busquen el botón verde grande que dice **Use this template -> Create a new repository** y le pongan por nombre `MyLinks` (Sin marcar la opción 'Include all branches').
    4. En su nueva página resultante, que hagan clic en el botón verde `<> Code` y copien el enlace `HTTPS`.
    5. En la terminal (fuera de toda carpeta previa de Git, oblígalos a usar el directorio `Documents` o la raíz del usuario `~`): `git clone [pegar-enlace-aqui]`
    6. `ls` → "Acaban de descargar de manera segura el esqueleto oficial del proyecto a su local."
    7. `cd MyLinks` (o el nombre de la carpeta que eligieron) → Y diles que desde ahora, toda la práctica será dentro de esa carpeta.

### 🚨 Gestión de Riesgos y Errores (Lo que va a fallar aquí)

> 
> 
> 1. **Clonar un repositorio Git DENTRO de otro repositorio Git:**
>     - *El error:* Un alumno clona estando ya dentro de una carpeta que tenía un `.git` (como la del ejercicio de la Fase Local). Esto crea un ‘Git Nested’ (Git anidado) destruyendo el rastreo de archivos.
>     - *Cómo actuar en vivo:* Prevención extrema. Antes de que ejecuten clone, oblígalos a hacer `pwd`. “Suban niveles con `cd ..` hasta llegar a su escritorio o documentos puros. Nunca clonamos una carpeta dentro de un proyecto técnico existente.”
> 2. **Error al pegar (‘Ctrl+V’ vs ‘Shift+Insert’ vs Clic Derecho):**
>     - *El error:* Algunos terminales antiguas como Gitbash en Windows clásico insertan caracteres ocultos o símbolos al usar `Ctrl+V`.
>     - *Cómo actuar en vivo:* “Atención Windows. Para pegar la URL en Git Bash, el método 100% seguro es dar Clic Derecho sobre la consola y elegir la opción directa ‘Paste’, o usar `Shift + Insert`.”

## Momento 5: El Flujo Completo (Local + Remoto)

> **OBJETIVO:** Dominar el ciclo diario real de un desarrollador de software: modificar localmente el proyecto clonado, guardarlo en la base Git, y enviarlo (push) a los servidores en la nube para sincronizar equipos.
> 

### **1. Flujo de Sincronización Remota (Code-along)**

**EN PANTALLA:** PRESENTACIÓN CANVA (Slide Flujo Local-Remoto: Working, Staging, Local, Remote) + VS CODE (Terminal).

- **El guion teórico-práctico integrado:** Nos basamos en la imagen de 4 áreas interconectadas y simulamos el día de trabajo usando su recién clonada plantilla.
    
    > **1. Working Directory (La carpeta física):** *"Abran el archivo `index.html` de MyLinks y cambien su nombre en la etiqueta `<title>`.
    Realicen las modificaciones propias 
    Al guardar  han modificado su código localmente."* 
    **Muestras en VScode:** Ejecutas `git status`. *"Otra vez en rojo. Git reconoce el cambio en el Espacio de Trabajo, pero aún no está embalado."*
    > 
    
    > **2. Staging Area (`git add`):** *"Pasemos a la zona de embalaje. El área de preparación."* 
    **Muestras en VScode:** Ejecutas `git add .` seguido de `git status`. 
    *"Nuestras modificaciones pasaron de rojo a verde. Están empaquetadas."*
    > 
    
    > **3. Local Repository (`git commit`):** *"Ahora, a sellar ese paquete en la base de datos exclusiva de esta PC."* 
    **Muestras en VScode:** Ejecutas `git commit -m "feat: personalizar titulo"`. 
    *"¡Completado! Pero miren la imagen: Hasta aquí, todo sigue viviendo solo en tu computadora"*
    > 
    
    > “Hemos visto que en nuestra máquina existen estos 3 escenarios. 
    **GITHUB** agrega una cuarta estación final: Un repositorio remoto
    Un **repositorio remoto** es una copia de tu proyecto  alojada en Internet, especificamente un servidor remoto
    > 
    
    ### **2. Verificar la Conexión (git remote)**
    
    **EN PANTALLA:** VS CODE (Terminal integrada).
    
    - **Tu explicación teórica precisa:**
        
        > 
        > 
        > 
        > “Antes de enviar nada, necesitamos saber a qué servidor estamos conectados. Cuando hicimos `git clone`, Git configuró automáticamente un puente de red invisible hacia GitHub. Por convención universal, a esa conexión principal se le llama `origin`.”
        > 
    - **La acción guiada:**
        1. Abran la terminal en su proyecto clonado y ejecuten: `git remote -v`
        2. “Esto lista las conexiones remotas configuradas para traer (fetch) y enviar (push) código. Verán la URL de su repositorio en GitHub. Es la confirmación visual de que su terminal local sabe exactamente a qué dirección de internet debe enviar el código.”
    
    > **4. Remote Repository / GitHub (`git push`):** *"La gran flecha azul de la imagen. Empujamos todo nuestro archivo de historia hacia los servidores de la nube. Eso lo hacemos con el comando Push."* 
    **SINCRONIZACION**
    El comando **`git push`** **sube tus confirmaciones (*commits*) locales al repositorio remoto en la nube, sincronizando los cambios para que otros puedan verlos**.
    **Muestras en VScode:** 
    Ejecutas `git push`. *"En este instante, el código de sus laptops acaba de cruzar el internet y está respaldado a prueba de incendios."*
    > 

### **3. Verificar en GitHub**

**EN PANTALLA:** NAVEGDOR WEB (Su repositorio en GitHub).

> **La Acción:** “Vayan a la URL de su repositorio y hagan F5 (Refrescar). Fíjense cómo apareció el archivo que alteraron y lo más importante, fíjense que apareció su mensaje semántico y hace cuántos segundos se hizo.”
> 

### 4. Subir a GITHUB el proyecto del modulo 1

**EN PANTALLA:** NAVEGDOR WEB (Su repositorio en GitHub).

> Si ya tienes los archivos, no usas `clone`; en su lugar, **vinculas** tu carpeta local con un repositorio vacío en la nube.
Este es el flujo paso a paso:
> 
> 1. **En GitHub/GitLab:** Crea un nuevo repositorio **vacío** (no marques la opción de añadir README o .gitignore para evitar conflictos).
> 2. **En tu terminal (dentro de tu carpeta):** Ejecuta estos comandos en orden:
> 
> **1. Convierte tu carpeta en un repositorio de Git**
> git init
> 
> **2. Selecciona todos tus archivos para el primer guardado**
> git add .
> 
> **3. Crea tu primer punto de control (primer commit)**
> git commit -m "Primer commit: archivos iniciales"
> 
> **4. Crea la rama principal (estándar moderno)**
> git branch -M main
> 
> Ya tienes una rama, pero por defecto Git suele crearla con el nombre **`master`**.
> 
> Al ejecutar `git branch -M main`, lo que estás haciendo es **renombrar a la fuerza** tu rama actual a **`main`**.
> 
> **5. Vincula tu carpeta local con la dirección de tu repositorio remoto**
> git remote add origin “ENLACE DEL REPOSITORIO REMOTO”
> 
> **6. Sube tus archivos por primera vez , esto crea un vinculo permanente rama a rama**
> git push -u origin main
> 

<aside>

**IMPORTANTE**
Si usas **`git clone`**, el flujo es mucho más sencillo porque Git hace casi todo el trabajo de configuración por ti (inicializa el repo, lo nombra y crea los vínculos remotos).

- **No necesitas `git init`**: El comando `clone` ya crea la base de datos oculta de Git.
- **No necesitas `git remote add`**: Git ya sabe de dónde vino el código y guarda esa dirección bajo el nombre de `origin`.
- **No necesitas `git push -u origin main`**: El vínculo entre ramas se configura automáticamente al descargar el repo.

Asi que es recomendable ya desde que tengas un proyecto y sepas que lo subiras a GITHUB, crear un repositorio , clonarlo y trabajar ahi

</aside>

### 🚨 Gestión de Riesgos y Errores (Lo que va a fallar aquí)

> 
> 
> 1. **GitHub bloquea el acceso en pantalla (Error 403 Forbidden o Authentication Failed):**
>     - *El error:* Al ejecutar `git push`, a la gran mayoría de la clase le puede reventar un error rojo que dice que el soporte para contraseñas tradicionales fue removido, o simplemente su computadora les niega el permiso porque tienen loggeada la cuenta de un hermano o antigua.
>     - *Cómo actuar en vivo:* Expectativa pura: diles *antes* de que hagan push que un error rojo gigante va a aparecer y que “es un error de seguridad normal y esperado del sistema operativo, yo les enseñaré a hackearlo”.
>     - *Solución:* A menos de que salte la ventana emergente blanca nativa de “Sign in with browser” (lo cual soluciona todo al instante), guía rápidamente a los estudiantes afectados a GitHub web:
>     > `Settings` -> (Del lado izquierdo, hasta abajo) `Developer settings` -> `Personal access tokens (Tokens classic)` -> Generar uno nuevo -> Marcar la casilla enorme `repo` -> Generar token y Copiar.
>     > De vuelta en la terminal: `git remote set-url origin https://<TU-TOKEN-AQUI>@github.com/TUsuario/TuRepo.git` y volver a hacer `git push`.
> 2. **“Everything up-to-date” sin subir nada:**
>     - *El error:* El alumno ejecuta `git push` pero no ve nada nuevo en la web, la consola simplemente dice *Everything up-to-date*.
>     - *Cómo actuar en vivo:* “Git es muy inteligente. Si dice eso significa que tu nube es idénticamente igual a tu disco duro local. Te saltaste un paso. Olvidaste hacer el `git add` y el `git commit` primero, por lo tanto, la terminal no encontró ninguna ‘foto nueva’ para enviarle a la nube.”

<aside>

**COMANDO**
Para que Git utilice **`main`** como nombre por defecto en todos tus proyectos futuros (y no tener que renombrarla cada vez)

```jsx
git config --global init.defaultBranch main
```

</aside>

## **Momento 6: Cierre**

> **OBJETIVO:** Consolidar el aprendizaje, conectar el esfuerzo técnico de hoy con el resultado del proyecto y preparar el terreno competitivo para la próxima clase.
> 

### 1. Reflexión (La victoria del día)

- **EN PANTALLA:** Su propio perfil de GitHub proyectado o el de un alumno voluntario.
- **Tu discurso de cierre:**
    
    > Miren lo que acaban de hacer. Empezaron el día dependiendo de un mouse para crear carpetas lentas. Ahora controlan su computadora profesionalmente con la Terminal, protegen su código con el motor de versiones más potente del mundo (Git), y han publicado su trabajo en la red social de los ingenieros (GitHub). Eso es subir de nivel.”
    > 

### 2. Conexión (El puente a la Clase 06)

- **El gancho:** “Su proyecto ahora vive en la nube. Ya existe para el mundo. Pero aún se ve rígido en teléfonos. En la próxima clase, tomaremos este mismo código de la nube y le aplicaremos **Responsive Design** para que MyLinks se adapte a cualquier pantalla. Su portafolio empezará a verse increíble.”

### 3. Cierre y Preguntas

- Cede los últimos minutos para preguntas finales sobre el flujo `add -> commit -> push`.
- (Opcional) Recuerda las instrucciones del entregable si hay tareas asíncronas agendadas.