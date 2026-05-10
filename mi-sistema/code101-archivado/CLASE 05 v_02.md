# CLASE 05 v_02
> Esta versión refleja el orden y el contenido real de la clase dictada, basado en la transcripción `CLASE 5 PAST.txt`.
> Cubre los Momentos 1 al 5 (Momento 6: Cierre no cubre tiempo real significativo).

---

## MOMENTO 1: Bienvenida y Transición Módulo 1 → Módulo 2
**Tiempo:** ~20 min

> **OBJETIVO:** Validar el trabajo del Módulo 1 en una sola frase, establecer la brecha ("tu código no existe para nadie"), presentar el objetivo concreto de la clase (tener un link real al finalizar), y presentar el proyecto del módulo.

---

### 1.1 Apertura directa — Sin slides todavía

**EN PANTALLA: TEAMS — Solo cámara. Sin compartir pantalla.**

> *"Buenas noches, chicos. Ya estamos grabando. Vamos a empezar."*

- No hay celebración extensa. Ir directo al grano. El reconocimiento del Módulo 1 se hace en una sola oración:

> *"En el Módulo 1 vimos las tecnologías base para construir una página web: HTML para estructurar, CSS para dar estilos, Flexbox para el layout y animaciones con hover, box-shadow y transiciones. Construyeron algo real."*

- Hacer la transición inmediata al problema:

> *"Pero hay algo importante. Tu página web actualmente solamente existe en tu computadora. La construiste bien, la diseñaste bien... pero para qué, si nadie más puede verla."*

---

### 1.2 La pregunta de apertura — Activar el problema

**EN PANTALLA: Aún sin pantalla compartida. Pregunta al chat.**

> **Pregunta de activación:**
> *"Bien, antes de empezar: ¿cómo haría otra persona para ver la página web que construiste en el Módulo 1? Lo que sea que se les ocurra, me lo dicen en el chat ahora mismo."*

*(Dejar que el chat responda. Esperar al menos 5-6 respuestas. Las esperadas son: "le mando el archivo por WhatsApp", "le paso el código por correo", "subirlo a Google Drive", "GitHub Pages".)*

> *"Miren las respuestas. Tenemos: WhatsApp, correo, Google Drive... y algunos ya dijeron GitHub Pages, que es exactamente lo que vamos a hacer hoy.*
>
> *Pasar el archivo por WhatsApp o correo funciona para la universidad. No funciona si quieres mostrarle tu trabajo a un reclutador en Amazon, a tu equipo en una empresa, o simplemente a cualquier persona desde cualquier lugar del mundo."*

> **La declaración del objetivo de la clase:**
> *"El objetivo de hoy es uno solo: que al final de esta clase, tu página del Módulo 1 tenga un link de Internet real. Un link que puedas copiar, pegar en WhatsApp y que cualquier persona, con cualquier dispositivo, pueda abrir."*

---

### 1.3 El Módulo 2 — De construir a profesionalizar

**EN PANTALLA: PRESENTACIÓN (Slide de portada del Módulo 2 / Slide de transición).**

> *"Eso es de lo que trata el Módulo 2. El Módulo 1 fue construir. El Módulo 2 es profesionalizar.*
>
> *Las herramientas que vamos a ver en este módulo no son herramientas del bootcamp. Son las mismas herramientas que usan los ingenieros de Google, Spotify, Netflix, cualquier empresa de tecnología del mundo: Terminal, Git y GitHub."*

> **Pregunta de calibración:**
> *"¿Cuántos ya conocen la terminal? ¿Cuántos la han visto aunque sea una vez en la vida?"*
>
> *(Esperar respuestas en el chat. No importa el número — sirve para calibrar el grupo antes de entrar al Momento 2.)*

---

### 1.4 El Proyecto del Módulo 2 — MyLinks

**EN PANTALLA: NAVEGADOR — Mostrar el repositorio de ejemplo de MyLinks ya desplegado en Internet (o el Linktree del instructor si aplica).**

> *"A lo largo de estas 4 clases vamos a construir esto: MyLinks. Es un hub personal de enlaces, parecido a Linktree si lo conocen. Una página donde pones tu foto, tu nombre, y botones que llevan directamente a tu GitHub, tu WhatsApp, tu correo, tu LinkedIn — lo que tú quieras.*
>
> *Este es el proyecto del módulo. Hoy no vamos a diseñarlo todavía — hoy vamos a aprender las herramientas para que tu código pueda vivir en Internet y no solo en tu máquina.*
>
> *Les voy a compartir la plantilla. Ya la van a ver durante la clase."*

> **Nota táctica:** No profundizar en el proyecto aquí. El objetivo de este momento es únicamente encender la motivación y establecer el destino. Los detalles vienen cuando se hace el clone.

---

### 1.5 Instalar Git — Ahora, en vivo

**EN PANTALLA: NAVEGADOR — Sitio oficial de Git (git-scm.com).**

> **Por qué esto sucede en el Momento 1 y no después:**
> La instalación de Git toma tiempo variable por alumno (internet, antivirus, Windows Defender). Si se deja para después, bloquea el flujo en el momento crítico del commit. Se hace aquí, mientras el grupo todavía está en calor, para que ya esté listo cuando llegue el momento de usarlo.

> *"Para poder hacer todo lo que vamos a hacer hoy, necesitan una herramienta instalada: Git. Algunos ya lo tienen, perfecto, no tienen que hacer nada. Los que no, vamos a instalarlo juntos ahora — es rápido."*

> **La acción guiada (todos al mismo tiempo):**
> 1. Compartir el enlace directo a la descarga: `https://git-scm.com/download/win`
> 2. *"Le dan al enlace, les va a detectar el sistema operativo, les descarga el instalador solo."*
> 3. *"Abren el instalador y es puro Next, Next, Next, Next. No lean nada. La configuración por defecto es perfecta. Confíen."*
> 4. En la pantalla final: *"Si les aparece la opción 'Launch Git Bash', dejen ese check marcado. Si no, no importa, lo abrimos después."*
> 5. Verificación: *"Una vez termine, abran Git Bash — lo buscan como cualquier programa en Windows, escriben 'Git Bash' en el buscador. Cuando lo tengan abierto, ejecuten este comando:"*
>
> ```bash
> git -v
> ```
>
> *"Si les sale un número de versión como `git version 2.x.x`, está instalado correctamente. Eso es todo lo que necesito. Copien esa línea en el chat."*

> **🚨 Gestión de Riesgos — Instalación:**
> - **Windows Defender bloquea el instalador:** *"Si les sale una ventana de seguridad que dice que Windows no reconoce el programa, denle a 'Más información' y luego 'Ejecutar de todas formas'. Git es seguro, pero Windows es desconfiado con lo que no viene de su tienda."*
> - **Antivirus corporativo bloquea la instalación:** *"Si el instalador arroja un error rojo al final, ciérrenlo, busquen el ejecutable, dan clic derecho → 'Ejecutar como administrador' y lo instalan de nuevo."*
> - **El alumno ya lo tiene instalado pero no sabe:** *"Si no están seguros, abran Git Bash y corran `git -v`. Si les da versión, ya lo tienen. Si dice 'comando no reconocido', entonces sí instalamos."*
> - **Git Bash no aparece en la búsqueda:** *"Si no aparece Git Bash, intenten buscar 'bash' sólo. Si tampoco aparece, vayan a `C:\Program Files\Git\bin\` y abran `bash.exe` desde ahí."*

---

### 1.6 Configurar la identidad Git — El primer comando real

**EN PANTALLA: GIT BASH abierto. Pantalla dividida si es posible.**

> *"Perfecto. Ahora que já tienen Git instalado, hay 4 comandos de configuración que corren una sola vez en su vida — bueno, una vez por computadora. Son 4 líneas que le dicen a Git quién eres tú."*

> **¿Por qué configurar la identidad antes de cualquier commit?**
> *"Cada vez que tú guardes un cambio en Git — lo que se llama un commit — Git lo va a firmar con tu nombre y tu correo. Igual que cuando firmas un documento. Si no configuras tu identidad primero, Git simplemente te va a bloquear y te va a pedir que lo hagas antes de dejarte guardar nada."*

> **La acción guiada — los 4 comandos:**

**Comando 1 — Tu nombre:**
```bash
git config --global user.name "Tu Nombre Completo"
```
*"Cambien 'Tu Nombre Completo' por su nombre real. Si tiene espacio, tiene que ir entre comillas. Si lo ponen sin comillas y tiene espacio, Git solo va a tomar la primera palabra."*

**Comando 2 — Tu correo:**
```bash
git config --global user.email "tu@correo.com"
```
*"Pongan el mismo correo con el que se van a registrar en GitHub. No importa cuál, pero que sea el mismo. Los vamos a enlazar después y tiene que coincidir."*

**Comando 3 — Tu editor por defecto:**
```bash
git config --global core.editor "code --wait"
```
*"Esto le dice a Git que si necesita abrirte un editor de texto, que use VS Code. No cambien nada aquí, copienlo tal cual."*

**Comando 4 — Nombre de la rama principal:**
```bash
git config --global init.defaultBranch main
```
*"Esto es muy importante. Le estamos diciendo que cuando creen un repositorio nuevo, la rama principal se llame `main` y no `master`, que era el nombre antiguo. Cuando veamos GitHub, esto tiene que coincidir."*

> **Verificación — Confirmar que todo quedó bien:**
```bash
git config --global --list
```
*"Estén la lista que sale, que aparezcan al menos: `user.name`, `user.email` e `init.defaultbranch = main`. Me mandan por favor una captura de eso al WhatsApp del grupo."*

> **🚨 Gestión de Riesgos — Configuración:**
> - **El nombre salió mal (sin espacios o cortado):** *"No se preocupen, esto se puede pisar. Simplemente vuelvan a correr el mismo comando con el nombre correcto entre comillas. El último valor que pongan es el que queda."*
> - **`git config --list` muestra una lista infinita y no encuentran sus datos:** *"Busquen las líneas que dicen `user.name` y `user.email`. Si están ahí, listo. Pueden salir de esa vista con la tecla `q`."*
> - **El alumno no tiene correo listo:** *"Pueden poner cualquier correo por ahora. Lo importante es que después, cuando creen su cuenta de GitHub, lo registren con ese mismo correo."*

---

### Nota táctica del Momento 1

- **No hacer el flujo completo de Git aquí.** La instalación y configuración se hacen en este momento por razones logísticas, pero la explicación teórica de qué es Git y cómo funciona va en el Momento 3.
- **Ir rápido en la instalación.** Los alumnos que ya tienen Git instalado simplemente verifican con `git -v` y esperan. No los dejes sin hacer nada: pídeles que abran Git Bash y practiquen los comandos de terminal del Momento 2 mientras los demás terminan.
- **El objetivo de este momento es logístico y motivacional:** que estén instalados + que sepan hacia dónde van. La profundidad conceptual viene después.

---

## Resumen del Momento 1

| Punto | Contenido | Tiempo aprox. |
|---|---|---|
| 1.1 | Apertura directa — sin slides de bienvenida largos | 2 min |
| 1.2 | Pregunta de activación — ¿cómo compartes tu página? | 4 min |
| 1.3 | Módulo 2: de construir a profesionalizar | 3 min |
| 1.4 | Presentación del proyecto MyLinks | 3 min |
| 1.5 | Instalación de Git en vivo | 5 min |
| 1.6 | Configuración de identidad Git (4 comandos) | 5 min |
| **Total** | | **~22 min** |

---

## MOMENTO 2: La Terminal
**Tiempo:** ~35 min

> **OBJETIVO:** Romper el mito de que la terminal es difícil o exclusiva de hackers. Que cada alumno entienda qué es, por qué sigue siendo relevante en 2026, y que ejecute los 5 comandos básicos con confianza en su propia máquina.

---

### 2.1 ¿Qué es la Terminal? — El control remoto del sistema operativo

**EN PANTALLA: TEAMS — Mostrar capturas de distintas terminales (PowerShell azul, Git Bash negro, Ubuntu).**

> **Pregunta de activación:**
> *"¿Cuántos han visto esta ventana antes — aunque sea una vez, aunque no sepan qué era? Me responden en el chat, por favor."*

*(Esperar respuestas. Aprovechar para mencionar los contextos que ellos mismos traen: ver puertos de red, sistemas administrados, IT, etc.)*

> **Tu explicación teórica precisa:**
> *"La terminal no es una herramienta exclusiva de programadores. Es una herramienta que te permite comunicarte con tu sistema operativo — Windows, Mac, Linux — usando comandos de texto en lugar de clics.*
>
> *Todo lo que haces con el mouse — crear carpetas, mover archivos, abrir programas, instalar software — lo puedes hacer desde aquí. La diferencia: con el mouse te puedes tardar minutos. Con un comando, segundos."*

---

### 2.2 La Demo de Impacto — 12 carpetas en 2 segundos

**EN PANTALLA: PANTALLA DIVIDIDA — Explorador de archivos de Windows a un lado. Terminal al otro lado apuntando a la misma ruta.**

> *"Les voy a mostrar algo. Imaginen que su jefe les dice: 'Necesito 12 carpetas, una para cada mes del año'. El que no conoce la terminal va a hacer esto..."*

- Simular en vivo: clic derecho → Nueva carpeta → escribir "Enero" → repetir. Hacerlo lento y dramático 2 o 3 veces.

> *"Eso le tomaría 5 minutos. Ahora miren lo mismo desde la terminal."*

```bash
mkdir Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic
```

> *"Un comando. Las 12 carpetas aparecen instantáneamente en el explorador. Esa diferencia es exactamente por qué los ingenieros siguen usando la terminal en pleno 2026."*

---

### 2.3 Contexto Histórico — Windows 95 y el versus CLI vs GUI

**EN PANTALLA: Imagen o slide de Windows 95.**

> **Tu explicación teórica precisa:**
> *"Antes de Windows 95, cuando encendías una computadora no veías íconos ni escritorio ni nada gráfico. Aparecía directamente esta pantalla negra. Para hacer cualquier cosa tenías que saber comandos. Eso hacía que la computadora fuera una herramienta de especialistas.*
>
> *Windows 95 introdujo la interfaz gráfica — lo que ustedes conocen hoy: escritorio, íconos, ventanas, el mouse. Eso democratizó la computación. De repente cualquier persona podía usarla sin memorizar comandos.*
>
> *Pero lo que Windows no quitó fue la terminal. Hoy vivimos en un equilibrio: la interfaz gráfica es insuperable para explorar y aprender. La terminal es insuperable para la automatización, la velocidad y el control. Como desarrollador vas a vivir en los dos mundos."*

> **Pregunta de opinión — Para mantener el engagement:**
> *"Pregunta personal: hay programadores que son tan fans de la terminal que usan sistemas operativos sin ninguna interfaz gráfica. Solo texto negro. En un futuro, ¿tú serías capaz de dejar la interfaz de Windows y pasarte al mundo full terminal? ¿O el hábito de los íconos ya está muy arraigado? Me responden en el chat — no hay respuesta mala."*
>
> *(Dejar que respondan. Leer algunas en voz alta. Esto funciona como pausa natural antes de los comandos.)*

---

### 2.4 La Terminal que vamos a usar — PowerShell (y por qué no CMD)

**EN PANTALLA: Abrir en vivo PowerShell en Windows.**

> *"Los que están en Windows, vamos ahora mismo. Busquen en su buscador: PowerShell. Es esto — la ventana azul. Ábrela."*
>
> *"¿Por qué no usamos CMD, el terminal clásico de Windows? Porque CMD solo entiende comandos de Windows. Los comandos que voy a enseñar ahora vienen de Linux — son el estándar universal en el mundo del desarrollo. CMD los rechaza. PowerShell sí los acepta. Los que tienen Ubuntu o Mac ya están listos con su terminal nativa."*

> **Nota táctica:** Después de instalar Git (ver Momento 1), tenemos Git Bash disponible. En el Momento 3 (Git) haremos la transición a Git Bash como terminal definitiva. Por ahora practicamos en PowerShell para no saturar con herramientas nuevas al mismo tiempo.

---

### 2.5 El Sistema de Archivos — Entender las rutas antes de navegar

**EN PANTALLA: Explorador de archivos de Windows — Barra de dirección visible con la ruta completa.**

> *"Antes de los comandos, necesitan entender una cosa: la computadora organiza toda su información en un sistema de carpetas jerarquizadas. Es como un árbol genealógico — carpetas dentro de carpetas dentro de carpetas.*
>
> *Miren la barra de arriba en el explorador. Esa que dice `C:\Users\SuNombre\Documents` — eso se llama una ruta. Es la dirección exacta de donde estamos. La terminal trabaja con estas mismas rutas. En lugar de hacer clic para moverse entre carpetas, escribimos estas rutas en texto."*

---

### 2.6 Los 5 Comandos — Code-along completo

**EN PANTALLA: PRESENTACIÓN (Slide con tabla de los 5 comandos) → luego PowerShell.**

> *"Son 5 comandos. Nada más. Estos 5 son los que van a usar el 90% del tiempo en la terminal como desarrolladores."*

| Comando | Qué hace |
|---|---|
| `pwd` | Imprime la ruta exacta de donde estás actualmente |
| `ls` | Lista los archivos y carpetas en la ubicación actual |
| `cd [carpeta]` | Entra a una carpeta |
| `cd ..` | Sube un nivel — vuelve a la carpeta padre |
| `mkdir [nombre]` | Crea una carpeta nueva |

> **La acción guiada — uno por uno:**

**`pwd`:**
```bash
pwd
```
> *"Ejecútenlo. ¿Qué les sale? Esa es la ruta donde están parados ahora mismo. Cópienla y péguela en el chat para que veamos que todos estamos en diferentes rutas según su usuario."*

**`ls`:**
```bash
ls
```
> *"Ahora listan el contenido. Todo lo que ven ahí existe físicamente en esa carpeta. Encuéntrenle la carpeta que diga 'Documents' o 'Documentos'."*

**`cd` (navegar hacia adentro):**
```bash
cd Documents
```
> *"Atención: antes de escribir el nombre de la carpeta, usen la tecla TAB. Git Bash y PowerShell tienen autocompletado — Tab completa el nombre automáticamente para que no cometan errores de tipeo."*

**`pwd` de nuevo — verificar el movimiento:**
```bash
pwd
```
> *"¿Cambió la ruta? Si ahora dice `…/Documents`, lo lograron. Entraron a Documents con un comando."*

**`cd ..` (subir un nivel):**
```bash
cd ..
```
> *"Los regresa exactamente un nivel. Útil cuando se metieron a la carpeta equivocada."*

**`mkdir` — Crear la carpeta del bootcamp:**
```bash
mkdir bootcamp
```
> *"Creen esta carpeta aquí. Esta va a ser su carpeta centralizada para todos los proyectos del bootcamp. Los que ya la tienen en otro lado, no importa — créenla de práctica y ya saben cómo."*

```bash
cd bootcamp
pwd
```
> *"Entren a la carpeta que acaban de crear y verifiquen la ruta. Eso es lo que quiero que me manden en el chat: su ruta de bootcamp."*

---

### 2.7 Pregunta de Calibración Final — Trampa conceptual

**EN PANTALLA: PRESENTACIÓN — Slide con la pregunta.**

> **Pregunta de trampa (muy buena para fijar el concepto de `cd ..`):**
> *"Pregunta rapida — respuesta en el chat. Estás en esta ruta: `C:/Users/Maria/Documents`. ¿Qué comando te lleva directamente a `C:/Users/Maria`?"*
>
> *"Opciones: A) `cd Maria` — B) `cd ..` — C) `cd C:/Users/Maria` — D) `ls`"*

*(Dejar que respondan. La respuesta correcta son B y C — es una trampa.)*

> *"Respuesta: hay dos respuestas correctas. Tanto B como C te llevan ahí. La diferencia — ¿cuál cuesta menos escribir? La B. `cd ..` es el atajo cuando sabes que solo quieres subir un nivel. La C funciona si le das la ruta exacta. Ambas válidas, distintas situaciones."*

---

### 🚨 Gestión de Riesgos — Terminal

> 1. **`ls` da error en CMD:** *"Si les dice que `ls` no se reconoce, están en CMD y no en PowerShell. Cierren esa ventana y busquen PowerShell específicamente en el buscador de Windows."*
> 2. **`cd` a una carpeta con espacios en el nombre:** *"Si su carpeta se llama 'Mis Documentos' con espacio, la terminal interpreta eso como dos argumentos separados. La solución: pongan el nombre entre comillas: `cd 'Mis Documentos'`."*
> 3. **Pánico de 'no encuentro la carpeta':** *"Regla de oro: nunca hagan un `cd` sin haber hecho un `ls` primero. Si el nombre de la carpeta no aparece en la lista de `ls`, es que no están en el lugar donde la buscan."*
> 4. **`mkdir` crea la carpeta en el lugar equivocado:** *"La carpeta se crea siempre donde estás parado. Verifiquen con `pwd` antes de crear cualquier carpeta."*

---

## MOMENTO 3: Git Local — El Flujo y Las Áreas
**Tiempo:** ~40 min (incluye receso posterior)

> **OBJETIVO:** Que el alumno comprenda el problema que resuelve Git, inicialice un repositorio, y ejecute el ciclo completo `git status → git add → git commit → git log` al menos una vez con un archivo real.

---

### 3.1 El Problema — La carpeta del caos universitario

**EN PANTALLA: VS CODE — Crear en vivo una carpeta de proyecto con archivos duplicados.**

> *"¿Quién ha hecho esto?"*

- Crear en vivo y en directo dentro de una carpeta:
  - `index.html`
  - `index_v2.html`
  - `index_corregido.html`
  - `index_FINAL.html`
  - `index_AHORA_SI_FINAL.html`

> *"Yo lo hice en la universidad. Cada vez que quería probar algo nuevo pero no quería arruinar lo que ya tenía, hacía una copia. Y así quedaba esto.*
>
> *Esto es un sistema de control de versiones. Primitivo, manual, insostenible. Funciona para una persona en un proyecto pequeño. No funciona para un equipo de 50 programadores tocando el mismo código al mismo tiempo.*
>
> *Linus Torvalds — el creador de Linux — tenía este mismo problema, pero a escala enorme: miles de programadores colaborando. Y lo resolvió en dos semanas. Creó Git."*

---

### 3.2 ¿Qué es Git? — Los 3 pilares

**EN PANTALLA: PRESENTACIÓN — Slide de Git con los 3 características.**

> **Tu explicación teórica precisa:**
> *"Git es un Sistema de Control de Versiones. En términos simples: una máquina del tiempo para carpetas.*
>
> *Tiene tres características que lo definen:*
>
> *— Es **local**: vive en tu disco duro. No necesita internet para funcionar. Tus commits se guardan en tu máquina, no en la nube.*
> *— Está **basado en comandos**: no tiene botones ni mouse. Se maneja desde la terminal que acabamos de conocer.*
> *— Trabaja con **repositorios**: una carpeta normal es una carpeta. Un repositorio es una carpeta que Git vigila. Si creas, modificas o borras algo, Git lo sabe."*

> **La transición a Git Bash:**
> *"A partir de ahora vamos a dejar PowerShell y vamos a usar Git Bash. ¿Por qué? Porque Git Bash es una terminal con comandos de Linux instalada con Git. Nos da más compatibilidad y es la terminal estándar para trabajar con Git en Windows.*
>
> *Búsquenla: Git Bash. La abren. Es la ventana negra. Confirmen que tienen ahí el prompt con su ruta de usuario."*

---

### 3.3 Flujo de Git en Vivo — Del archivo al commit

**EN PANTALLA: PANTALLA DIVIDIDA — VS Code (izquierda) + Git Bash (derecha). Carpeta de proyecto abierta en ambos.**

> *"Van a seguirme comando a comando. No se adelanten."*

**Paso 1 — Inicializar el repositorio:**
> *"Primero tienen que ubicarse en la carpeta de su proyecto. Yo uso `cd` para llegar ahí. Una vez dentro:"*
```bash
git init
```
> *"Esto transforma su carpeta en un repositorio. Git crea una carpeta oculta llamada `.git` — es la base de datos donde va a guardar toda la historia del proyecto. Para verla: en Windows, activen 'Mostrar archivos ocultos' en el explorador.*
>
> *Cuando lo ejecuten, su terminal va a mostrar el nombre de la rama — `(main)` — junto a la ruta. Eso confirma que ya es un repositorio. Si ven `(main)`, lo lograron."*

**Paso 2 — El radar: `git status`:**
```bash
git status
```
> *"Este comando es el radar. Les dice exactamente qué está viendo Git en este momento. Úsenlo siempre. Antes de hacer un `git add`, para saber qué cambió. Antes de hacer un commit, para confirmar que prepararon todo. Es su mejor aliado.*
>
> *Si la carpeta está recién inicializada y vacía, les va a decir que no hay nada que rastrear. Normal."*

**Paso 3 — Crear un archivo y ver cómo reacciona Git:**
> *"Creen un archivo `index.html` en VS Code. Guárdenlo. Ahora vuelvan al Git Bash y corran `git status`."*
```bash
git status
```
> *"¿Qué dice? Que hay un archivo en rojo — 'Untracked'. En rojo significa que Git lo detectó, pero ustedes no le han dicho qué hacer con él. Git no toma decisiones por ustedes. Tú le avisas, él actúa."*

**Paso 4 — El área de preparación: `git add`:**
```bash
git add .
```
> *"El punto significa 'todos los archivos que detectaste'. Le están diciendo a Git: estos cambios que ves, los quiero incluir en el próximo guardado.*
>
> *Corran `git status` otra vez."*
```bash
git status
```
> *"¿Cambió el color? Ahora está en verde. Verde significa 'listo para guardar'. No lo guardaron todavía — lo prepararon. Hay una diferencia."*

**Paso 5 — El guardado definitivo: `git commit`:**
```bash
git commit -m "feat: estructura inicial del proyecto"
```
> *"Este es el guardado. El `-m` es el mensaje — obligatorio, tiene que ir entre comillas. Este mensaje es para el historial: cuando en 6 meses vean sus commits, ese mensaje tiene que explicar qué hicieron.*
>
> *Corran `git status` una vez más."*
```bash
git status
```
> *"Ahora les dice que no hay nada pendiente. Está limpio — exactamente como debería quedar después de cada ciclo de trabajo."*

**Paso 6 — El historial: `git log`:**
```bash
git log --oneline
```
> *"Este es el álbum de fotos. Cada commit es una foto permanente del estado de su proyecto en ese momento. El `--oneline` lo muestra resumido — una línea por commit. Ahí ven el hash (el DNI del commit), la rama y su mensaje.*
>
> *¿Por qué es importante el mensaje? Porque en un proyecto real, este log puede tener 500 commits. El mensaje es lo único que les dice qué pasó en cada uno."*

---

### 3.4 Convención de Mensajes de Commit

**EN PANTALLA: PRESENTACIÓN — Slide con la tabla de prefijos.**

> *"Un commit mal nombrado es inútil. `asdfgh`, `cambios`, `versión final` — no le sirven a nadie. Hay una convención que casi toda la industria sigue:"*

| Prefijo | Cuándo se usa | Ejemplo |
|---|---|---|
| `feat:` | Característica nueva | `feat: agregar sección de contacto` |
| `fix:` | Corrección de un error | `fix: corregir enlace roto del menú` |
| `style:` | Cambios solo de CSS/visual | `style: cambiar color del header` |
| `refactor:` | Reorganizar código sin cambiar funcionalidad | `refactor: simplificar el CSS del footer` |
| `docs:` | Cambios en documentación | `docs: actualizar README` |

> *"El verbo va en infinitivo — 'agregar', 'corregir', 'cambiar'. No 'agregué', no 'corregí'. Es una orden, no un relato."*

---

### 3.5 Las Ramas — Líneas de Tiempo Alternativas

**EN PANTALLA: EXCALIDRAW — Dibujar en vivo la línea de tiempo con commits y una rama alterna.**

> *"¿Vieron Volver al Futuro?"*

*(Breve sondeo en el chat. La mayoría la conoce.)*

> *"Perfecto. En Volver al Futuro hay una línea del tiempo principal. Cuando viajan al pasado y cambian algo, crean una línea alterna. Si lo que cambiaron fue bueno, esa línea alterna mejora el futuro original. Si fue mal, esa línea alterna existe en paralelo sin afectar la principal.*
>
> *Las ramas de Git funcionan igual. Tienen una rama principal — `main` — que es su línea del tiempo oficial. Sus commits son los eventos de esa línea.*
>
> *Si quieren agregar una funcionalidad nueva sin arriesgar el código que ya funciona, crean una rama paralela. Trabajan ahí. Si salió bien, la unen a main — eso se llama merge. Si salió mal, la borran. Main nunca se enteró."*

> **Git Flow — El patrón profesional:**
> *"En las empresas esto tiene una estructura formal que se llama Git Flow. Define qué nombres tienen las ramas y para qué sirve cada una:*
>
> *— `main`: el código de producción. Lo que está vivo en Internet. Nadie toca main directamente.*
> *— `develop`: la rama de los desarrolladores. Donde se integra todo antes de subir a main.*
> *— `feature/nombre`: ramas para características nuevas.*
> *— `hotfix/nombre`: ramas para corregir errores urgentes en producción.*
>
> *En este bootcamp van a trabajar con main principalmente. Pero van a escuchar Git Flow en cualquier entrevista técnica — ya saben de qué hablan."*

> **Nota táctica:** No profundizar en los comandos de ramas (`git branch`, `git checkout`). Mencionarlos brevemente solo para que los alumnos los reconozcan. La práctica real de ramas no es parte del laboratorio de esta clase.

---

### 🚨 Gestión de Riesgos — Git Local

> 1. **Git pide nombre y email en el primer commit:** *"Tranquilos, no rompieron nada. Git detectó que no configuraron la identidad. Corran los comandos `git config --global user.name` y `git config --global user.email` que ya hicimos. Luego repitan el commit."*
> 2. **`git commit` sin el `-m` abre Vim:** *"Si la terminal se abrió en una pantalla negra rara llena de texto y no pueden escribir ni salir, cayeron en Vim. Escriban `:q!` y presionen Enter. Siempre pongan el `-m` y el mensaje entre comillas."*
> 3. **El alumno hizo `git add` pero olvidó el `git commit`:** *"Si corren `git push` más adelante y les dice 'Everything up-to-date' sin que haya subido nada, es porque olvidaron el commit. El add prepara, el commit guarda. Sin commit no hay nada que subir."*
> 4. **`git init` dentro de otra carpeta con `.git`:** *"Si ya tienen una carpeta que es repositorio y hacen `git init` adentro, crean un repo dentro de otro repo. Eso rompe el rastreo. Siempre verifiquen con `pwd` que están en la carpeta correcta antes de `git init`."*

---

### RECESO — 20 a 30 minutos

> **Nota táctica:** El receso se hace luego de entender el flujo local de Git. Es el separador mental entre "Git local" y "GitHub". Los alumnos llegan al receso habiendo guardado su primer commit — una victoria concreta antes del descanso.

---

## MOMENTO 4: GitHub — El Repositorio Remoto
**Tiempo:** ~35 min

> **OBJETIVO:** Que cada alumno cree su cuenta de GitHub, entienda la diferencia entre Git y GitHub, clone la plantilla de MyLinks en su máquina local, y comprenda que el clone configura automáticamente el link remoto.

---

### 4.1 El Problema — Tu código no sobrevive si tu máquina muere

**EN PANTALLA: EXPLORADOR DE ARCHIVOS — Carpeta del proyecto local del ejercicio anterior.**

> *"Hasta aquí todo lo que hicieron vive solo en esta máquina. Mañana hay una entrevista de trabajo y el reclutador me pide que le comparta el producto. Yo mando un .zip por correo... ¿qué tan profesional suena eso?"*

*(Pausa dramática.)*

> *"Ningún ingeniero manda un zip. Y si tu disco duro muere mañana, ese proyecto desaparece para siempre. Necesitamos que el código viva en otro lugar — en la nube — y es ahí donde entra GitHub."*

---

### 4.2 Git ≠ GitHub — La diferencia más importante

**EN PANTALLA: PRESENTACIÓN — Slide con la comparación.**

> **Tu explicación teórica precisa:**

| | Git | GitHub |
|---|---|---|
| **Qué es** | Software de control de versiones | Servicio web de alojamiento |
| **Dónde vive** | En tu computadora local | En los servidores de Microsoft (nube) |
| **Necesita internet** | No — funciona offline | Sí |
| **Para qué sirve** | Rastrear y guardar cambios localmente | Compartir, colaborar y publicar proyectos |
| **Quién lo creó** | Linus Torvalds (2005) | Tom Preston-Werner (2008) |

> *"Git es el motor. GitHub es la plataforma social. Puedes usar Git sin GitHub. Pero GitHub sin Git no existe — GitHub simplemente aloja lo que Git produce.*
>
> *GitHub es también el currículum del desarrollador moderno. Los reclutadores de tecnología lo revisan antes de cualquier entrevista. Lo que suban ahí va a ser parte de su perfil profesional."*

---

### 4.3 Crear la cuenta de GitHub

**EN PANTALLA: NAVEGADOR — github.com**

> *"Los que no tienen cuenta, van a github.com ahora. Tres formas de registrarse: con cuenta de Google, con Apple, o con su correo. La más rápida es con Google si tienen Gmail.*
>
> *Importante: el correo que usen aquí tiene que ser el mismo que configuraron en `git config --global user.email`. Eso los va a conectar."*

> **Les doy 3 minutos reloj en mano:**
- Que todos creen su cuenta y lleguen al dashboard principal de GitHub.
- Pedir confirmación en el chat: *"Si ya tienen dashboard, me mandan un check en el chat."*

> **Nota táctica sobre el nombre de usuario:**
> *"Elijan un nombre de usuario profesional. Sin apodos de videojuegos, sin números aleatorios. Este perfil lo van a poner en su LinkedIn. Si ya tienen cuenta, no cambien nada."*

---

### 4.4 Clonar la Plantilla de MyLinks

**EN PANTALLA: NAVEGADOR — Repositorio plantilla de MyLinks (github.com/CattCloud/mylinks-template).**

> *"Este es el repositorio plantilla del proyecto. Está en mi GitHub público — cualquiera puede verlo y usarlo como punto de partida."*

> **La acción guiada (paso a paso):**
> 1. Entrar al enlace compartido por chat.
> 2. Hacer clic en el botón verde: **Use this template → Create a new repository**.
> 3. En los campos:
>    - **Repository name:** `MyLinks`
>    - **Description:** `Mi hub personal de enlaces`
>    - **Visibility:** Público
> 4. Clic en **Create repository**.
> 5. *"Ya tienen su propio repositorio de MyLinks en su cuenta de GitHub. Compruébenlo — ven su nombre de usuario en la URL. Copien esa URL y mándenla al chat."*

---

### 4.5 `git clone` — Bajar el proyecto a su máquina

**EN PANTALLA: NAVEGADOR (GitHub) arriba + GIT BASH abajo.**

> *"Ahora está en Internet pero no en su máquina. No pueden editar código directamente en GitHub. Tienen que bajarlo. Eso se llama clonar."*

> **La acción guiada:**
> 1. En su repositorio de MyLinks, hacer clic en el botón verde **<> Code**.
> 2. Copiar la URL HTTPS que aparece.
> 3. En Git Bash — primero ir a la carpeta correcta:
> ```bash
> cd Documents
> cd bootcamp
> ```
> *"Clonamos dentro de la carpeta bootcamp que creamos en el Momento 2. Así sus proyectos están centralizados."*
> 4. Ejecutar el clone:
> ```bash
> git clone [URL-copiada]
> ```
> *"No usen Ctrl+V en Git Bash — puede insertar caracteres extraños. Usen clic derecho → Paste."*
> 5. Verificar:
> ```bash
> ls
> cd MyLinks
> ```
> *"¿Ven la carpeta MyLinks? Entren. Ejecuten `git status`. ¿Ven `(main)`? Eso confirma que ya es un repositorio Git. El clone hizo git init, conectó el remoto y descargó los archivos — todo en un solo comando."*

> **Por qué el clone es superior a crear manualmente:**
> *"Cuando clonamos, Git configuró automáticamente el enlace al repositorio remoto. No tienen que hacer `git remote add` ni nada extra. El puente entre su máquina y GitHub ya existe."*

---

### 4.6 Abrir el Proyecto en VS Code

```bash
code .
```
> *"Este comando abre VS Code directamente en la carpeta donde están parados. El punto es 'aquí mismo'. Desde ahora su flujo de trabajo va a ser: abrir Git Bash en la carpeta del proyecto, ejecutar `code .`, y trabajar."*

---

### 🚨 Gestión de Riesgos — GitHub y Clone

> 1. **Clonar estando dentro de otro repositorio Git:** *"Antes de ejecutar git clone, hagan `pwd` para confirmar que están en su carpeta bootcamp o Documents — no dentro de una carpeta que ya tenga `.git`. Clonar dentro de otro repo rompe el rastreo."*
> 2. **Error con Ctrl+V al pegar la URL:** *"En Git Bash, Ctrl+V no pega. Usen clic derecho → Paste. Si pegaron mal y ven caracteres raros en el comando, Ctrl+C para cancelar y vuelvan a intentarlo."*
> 3. **Error al crear el repositorio desde la plantilla — nombre duplicado:** *"Si GitHub les dice que el nombre ya existe, es porque ya tienen un repositorio llamado MyLinks. Cambien el nombre a `MyLinks-v2` o borren el anterior desde Settings → Danger Zone → Delete repository."*
> 4. **La verificación de cuenta de GitHub no avanza:** *"Si les pide resolver un puzzle de verificación y no carga, prueben en otro navegador (Edge si están en Chrome, o viceversa)."*

---

## MOMENTO 5: El Flujo Completo — Local + Remoto + GitHub Pages
**Tiempo:** ~40 min

> **OBJETIVO:** Ejecutar el ciclo completo diario del desarrollador: modificar código → `git add` → `git commit` → `git push`. Luego subir el proyecto del Módulo 1 a GitHub y desplegarlo con GitHub Pages para tener un link real de Internet.

---

### 5.1 El Cuarto Escenario — El Repositorio Remoto

**EN PANTALLA: PRESENTACIÓN — Slide del flujo de las 4 áreas (Working, Staging, Local, Remote).**

> *"Hasta ahora trabajamos con Git en 3 áreas: Working Directory (donde escribes el código), Staging Area (donde preparas los cambios con `git add`) y Local Repository (donde los guardas con `git commit`).*
>
> *GitHub agrega un cuarto escenario: el Repositorio Remoto. Es una copia de tu repositorio local alojada en los servidores de GitHub. Los commits que haces en local van a ese cuarto escenario con un comando: `git push`."*

---

### 5.2 Hacer el Primer Cambio y Subirlo

**EN PANTALLA: PANTALLA DIVIDIDA — VS Code (izquierda) + Git Bash (derecha). Proyecto MyLinks abierto.**

> **La acción guiada:**

**Paso 1 — Modificar el proyecto:**
> *"Abran el `index.html` de MyLinks. Busquen la etiqueta con el nombre placeholder y cambien el nombre por el suyo. Guarden."*

**Paso 2 — Verificar el estado:**
```bash
git status
```
> *"¿Qué dice? Rojo. Git detectó el cambio. Bien."*

**Paso 3 — Preparar:**
```bash
git add .
git status
```
> *"Verde. Listo para guardar."*

**Paso 4 — Commit:**
```bash
git commit -m "feat: personalizar nombre en index"
```
> *"Commit hecho. Pero miren su repositorio en GitHub — abran el navegador, vayan a su repo y recarguen. ¿Cambió algo? No. El commit solo existe en su máquina local."*

**Paso 5 — `git push` — La gran flecha a la nube:**
```bash
git push
```
> *"Este comando empuja todos sus commits locales al repositorio remoto en GitHub. Ejecuten y observen."*

> *"Ahora recarguen su repositorio en GitHub. ¿Ven el commit con el mensaje que pusieron? ¿Ven que el archivo cambió? Eso es sincronización. Lo que estaba solo en su máquina ahora está respaldado en Internet."*

---

### 5.3 Verificar la Conexión Remota

```bash
git remote -v
```
> *"Este comando les muestra a qué servidor está conectado su repositorio local. Ahí deben ver la URL de su repositorio en GitHub. Cuando clonaron, Git configuró ese puente automáticamente y lo nombró `origin` — ese es el nombre estándar para el remoto principal."*

---

### 🚨 Gestión de Riesgos — git push

> 1. **Error 403 / Authentication Failed:** *"GitHub eliminó el soporte para contraseñas tradicionales. Si les pide credenciales y no acepta su contraseña normal, tienen dos opciones: esperan que aparezca una ventana del navegador pidiendo que inicien sesión (esto lo resuelve solo), o generan un Personal Access Token desde: GitHub → Settings → Developer Settings → Personal Access Tokens → Generate new token → marcar la casilla 'repo' → copiar el token y usarlo como contraseña."*
> 2. **'Everything up-to-date' sin haber subido nada:** *"Git les está diciendo que su nube ya tiene todo lo que tienen en local. Olvidaron hacer el commit antes del push. No hay fotos nuevas que enviar."*
> 3. **Error: 'src refspec main does not match any':** *"Esto pasa cuando la rama local se llama diferente al remoto. Corran `git branch` para ver el nombre. Si dice `master`, corran `git branch -M main` para renombrarlo y vuelvan a intentar el push."*

---

### 5.4 Subir el Proyecto del Módulo 1 a GitHub

**EN PANTALLA: EXPLORADOR DE ARCHIVOS — Carpeta "mi-perfil" del proyecto del Módulo 1.**

> *"MyLinks ya está en GitHub. Ahora vamos a subir también su proyecto del Módulo 1 — la página de perfil que construyeron en las últimas cuatro clases.*
>
> *La diferencia: MyLinks lo clonamos desde GitHub hacia nuestra máquina. Este proyecto existe en nuestra máquina y todavía no existe en GitHub. El flujo es el inverso."*

> **La acción guiada — Los 6 pasos para subir un proyecto existente:**

**En GitHub (crear el repositorio vacío):**
1. En GitHub: botón `+` → **New repository**.
2. Nombre: `mi-perfil`
3. Descripción: `Página web personal — Módulo 1`
4. Visibilidad: Público
5. **No marcar ningún checkbox** (no README, no .gitignore — debe quedar vacío).
6. Crear repositorio.

**En Git Bash — dentro de la carpeta del proyecto de Módulo 1:**
```bash
# 1. Convertir la carpeta en repositorio
git init

# 2. Preparar todos los archivos
git add .

# 3. Primer commit
git commit -m "feat: subir proyecto modulo 1"

# 4. Renombrar la rama a main (estándar moderno)
git branch -M main

# 5. Enlazar con el repositorio remoto vacío que creamos
git remote add origin [URL-del-repositorio-vacío]

# 6. Primera subida — este formato establece el vínculo permanente rama a rama
git push -u origin main
```

> *"El `-u` en el primer push le dice a Git: 'de ahora en adelante, cuando yo escriba `git push` a secas, sé que quiero mandarlo a `origin/main`'. Los pushes siguientes serán solo `git push`."*

> **Verificar:**
> *"Vayan a su repositorio en GitHub y recarguen. ¿Aparecen sus archivos `index.html` y `styles.css`? Si la respuesta es sí: felicidades, su proyecto está en la nube."*

---

### 5.5 GitHub Pages — El Link Real de Internet

**EN PANTALLA: NAVEGADOR — Repositorio de mi-perfil en GitHub → pestaña Settings.**

> *"Último paso y el más emocionante. Sus archivos ya están en GitHub. Pero GitHub Pages lo que hace es tomar esos archivos y convertirlos en una página web accesible desde cualquier navegador del mundo. Gratis. Con un link real."*

> **La acción guiada:**
> 1. Estando en el repositorio de `mi-perfil`, ir a la pestaña **Settings**.
> 2. En el menú izquierdo, buscar y hacer clic en **Pages**.
> 3. En _Source_, seleccionar la rama **main** (o `main` en el selector de branch).
> 4. Dejar la carpeta en `/ (root)`.
> 5. Clic en **Save**.

> *"Ahora esperen. GitHub está procesando el despliegue. Tarda entre 30 segundos y 2 minutos. Recarguen la página de Settings → Pages cada minuto."*

> *"Cuando aparezca un recuadro verde que dice: 'Your site is live at https://[su-usuario].github.io/mi-perfil/', hicieron historia. Ese es su link. Abran ese link. ¿Ven su página web corriendo en Internet? Eso es su trabajo. Vivo. Para todos."*

> **Tip final — Agregar el link al perfil de GitHub:**
> *"Vayan a su perfil de GitHub. En el panel de la derecha hay una sección 'About'. Edítenla. Hay un campo 'Website' — peguen ahí el link de GitHub Pages. Ahora cualquier reclutador que visite su perfil de GitHub tiene acceso directo a su portafolio vivo. Así se construye una presencia profesional."*

---

### 🚨 Gestión de Riesgos — GitHub Pages

> 1. **La página no aparece después de 2 minutos:** *"Verifiquen que el repositorio es público. Un repositorio privado no puede usar GitHub Pages en la cuenta gratuita. Si era privado, vayan a Settings → Danger Zone → Change visibility → Public."*
> 2. **La página carga pero sin estilos (HTML puro sin CSS):** *"El `href` en su `<link>` de CSS apunta a una ruta que no existe en el servidor. Verifiquen que el archivo `styles.css` está en la raíz del repositorio — al mismo nivel que `index.html`, no dentro de una subcarpeta. Si está en subfolder, ajusten la ruta en el `href`."*
> 3. **Sale un error 404 al abrir el link:** *"GitHub Pages esperaba encontrar un `index.html` en la raíz del repositorio. Confirmen que el archivo se llama exactamente `index.html` — no `Index.html`, no `home.html`."*

---

## MOMENTO 6: Cierre
**Tiempo:** ~5 min

> **EN PANTALLA: NAVEGADOR — La página de un alumno en vivo.**

> *"Miren lo que hicieron hoy. Empezaron la noche dependiendo del mouse para crear carpetas. Ahora controlan su sistema operativo con comandos, rastrean cambios de código con el motor que usa el mundo entero, y publicaron su primer trabajo en Internet.*
>
> *Eso no es un ejercicio del bootcamp. Es el flujo de trabajo real de cualquier desarrollador en cualquier empresa del mundo."*

**El puente a la Clase 06:**
> *"Su proyecto ya vive en la nube. En la siguiente clase vamos a tomar ese mismo proyecto y aplicarle Responsive Design para que se adapte perfectamente a cualquier pantalla — celular, tablet, escritorio. Su portafolio va a empezar a verse de verdad profesional."*

**Entregable del Lab 05:**
- URL del repositorio de MyLinks en GitHub
- Screenshot de la terminal mostrando `git log --oneline` con al menos un commit

---

## Resumen de Cambios vs. Guion v1

| Momento | Cambio principal |
|---|---|
| **M1** | Instalación y configuración de Git integradas aquí (no en M3) |
| **M2** | Se usa PowerShell primero (no Git Bash). Discusión real de "team terminal vs GUI". Quiz de trampa al final |
| **M3** | Analogía de videojuegos + Volver al Futuro (no metáfora de foto/camarágrafo). Transición a Git Bash desde aquí |
| **M4** | Creación de cuenta en vivo durante la clase. `code .` para abrir VS Code desde terminal |
| **M5** | **Momento enteramente nuevo en v_02**: subida manual del Módulo 1 (`git remote add`) + despliegue con GitHub Pages. No estaba en el guion v1 |
| **M6** | Sin cambios estructurales. Más corto — el tiempo real lo consumieron los momentos anteriores |
