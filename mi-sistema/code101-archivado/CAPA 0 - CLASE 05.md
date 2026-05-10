# CAPA 0 — CLASE 05

## Setup del Desarrollador Moderno: Terminal, Git y GitHub

---

### HISTORIA: El origen de Git

En 2005, Linus Torvalds (el mismo que creó Linux) necesitaba una herramienta para que miles de desarrolladores trabajaran en el mismo proyecto sin pisarse. La herramienta que usaban dejó de ser gratuita y las alternativas eran lentas. Lo construyó él solo en 2 semanas. Hoy el 93% de los desarrolladores del mundo lo usan. El nombre "Git" es slang británico para "persona desagradable" — lo eligió como broma.

---

### CONCEPTO: Terminal / CLI

Es una interfaz de texto donde le das órdenes a tu computadora escribiendo comandos. No necesitas mouse. Es más rápida y poderosa que hacer clic en carpetas para tareas repetitivas. Los desarrolladores profesionales viven en la terminal.

---

### ANALOGÍA: Terminal = Control remoto universal

Con las interfaces gráficas (Windows Explorer, Finder) necesitas un "control diferente" para cada app. Con la terminal, un solo lenguaje de comandos controla todo tu sistema.

---

### CONCEPTO: Comandos básicos de navegación

- `pwd` — print working directory. Te dice en qué carpeta estás parado ahora mismo.
- `ls` — list. Lista los archivos y carpetas que hay en tu ubicación actual.
- `cd` — change directory. Te mueve a otra carpeta. `cd ..` sube un nivel.
- `mkdir` — make directory. Crea una carpeta nueva.

---

### CONCEPTO: Git

Software que se instala en tu computadora y guarda el historial completo de cambios de un proyecto. Permite volver a cualquier versión anterior, trabajar en equipo sin conflictos y experimentar sin miedo.

---

### ANALOGÍA: Git = Máquina del tiempo

¿Borraste algo importante? ¿Rompiste el CSS? Git te deja viajar al momento en que todo funcionaba. Cada "foto" que tomas es un punto al que puedes volver.

---

### CONCEPTO: GitHub

Plataforma web donde se almacenan repositorios Git en la nube. Es como Google Drive pero para código: tu proyecto está ahí disponible desde cualquier computadora y cualquier persona puede clonarlo si es público.

**Diferencia clave:** Git es el software (vive en tu PC). GitHub es el servicio (vive en internet). Puedes usar Git sin GitHub, pero no GitHub sin Git.

---

### ANALOGÍA: Git vs GitHub = Word vs Google Drive

Git es como Word — el programa con el que trabajas. GitHub es como Google Drive — donde guardas y compartes el archivo en la nube.

---

### CONCEPTO: Repositorio

Carpeta de proyecto que contiene no solo los archivos sino también el historial completo de todos los cambios que se han hecho. Se reconoce porque tiene una carpeta oculta llamada `.git`. Un repositorio puede ser local (en tu PC) o remoto (en GitHub).

---

### CONCEPTO: Clone

Copiar un repositorio que existe en GitHub a tu computadora local con el comando `git clone <URL>`. Trae todos los archivos y todo el historial de commits. A diferencia de descargar un ZIP, el clone mantiene la conexión con GitHub para poder hacer push después.

---

### CONCEPTO: git init

El comando que inicializa un repositorio nuevo. Crea una carpeta oculta `.git` en tu directorio, lo que le indica a Git que empiece a observar y registrar los cambios en esa carpeta. (Analogía: El camarógrafo entra a la habitación).

---

### ANALOGÍA Y CONCEPTOS: Las 4 Áreas de Trabajo en Git

El flujo de trabajo técnico de Git pasa por 4 estados o áreas principales. Visualizarlo como una sesión de fotos ayuda a entender su propósito:

**1. Untracked (Sin rastrear):**

- **Concepto técnico:** Has creado un archivo nuevo en tu carpeta, pero Git no lo ha incluido en su sistema de seguimiento inicial. (Aparece en rojo en `git status`).
- **Analogía:** Detrás de escena. El camarógrafo sabe que estás ahí pero no te está apuntando con la cámara.

**2. Working Directory (Directorio de trabajo):**

- **Concepto técnico:** Es el estado de los archivos que estás modificando actualmente en tu editor de código. Aún no le has dicho a Git que quieres guardar temporalmente estos cambios.
- **Analogía:** El escenario. Estás acomodándote la ropa y practicando la postura frente a la cámara, haciendo pruebas.

**3. Staging Area (Área de preparación - `git add`):**

- **Concepto técnico:** Un área intermedia (el 'índice' de Git) donde colocas _específicamente_ los archivos modificados que deseas incluir en el próximo commit. (Aparece en verde en `git status`).
- **Analogía:** Prepararse y posar frente a la cámara. Te has quedado quieto y le dices al camarógrafo: "Estoy listo, sácame exactamente así".

**4. Repositorio Local (Historial - `git commit`):**

- **Concepto técnico:** El comando que guarda de forma permanente una copia exacta de los archivos del Staging Area en la base de datos de Git (.git), junto con un mensaje y un identificador único (hash).
- **Analogía:** ¡Click! La cámara toma la foto Polaroid. El momento quedó capturado e inmutable en el historial.

---

### CONCEPTO: Commit

Una foto del estado del proyecto en un momento específico. Incluye los cambios realizados y un mensaje descriptivo que explica qué se hizo. El historial de commits es la línea del tiempo del proyecto. No se sube a GitHub automáticamente — primero vive en tu PC.

---

### ANALOGÍA: Commit = Foto Polaroid

Cada commit es una foto instantánea de tu código. La foto no cambia con el tiempo, pero puedes tomar muchas fotos a lo largo del proyecto y ver cómo evolucionó.

---

### CONCEPTO: Staging Area (git add)

Zona intermedia antes de hacer un commit. Con `git add` le dices a Git exactamente qué cambios quieres incluir en la próxima foto. Te permite ser preciso: puedes haber modificado 5 archivos pero commitear solo 2.

---

### CONCEPTO: Push

Subir los commits que tienes guardados localmente al repositorio remoto en GitHub. Hasta que no haces push, los cambios solo existen en tu computadora. Si se daña tu PC sin haber hecho push, pierdes esos commits.

---

### ANALOGÍA: Push = Subir fotos a la nube

Tus commits son fotos guardadas en tu teléfono. Push es sincronizarlas con Google Photos — ahora están seguras y accesibles desde cualquier lugar.

---

### CONCEPTO: git status

Comando que muestra el estado actual del repositorio: qué archivos fueron modificados, cuáles están en staging y cuáles aún no están rastreados por Git. El primer comando que corres cuando quieres saber "qué está pasando" en tu proyecto.

---

### CONCEPTO: Rama (Branch)

Una línea de trabajo paralela dentro del mismo repositorio. La rama principal se llama `main` y contiene el código estable. Puedes crear una rama nueva para desarrollar una funcionalidad sin afectar `main`. Cuando terminas, unes los cambios de vuelta (merge). Git es en esencia un sistema de ramas — cada commit es un nodo que se conecta con el anterior formando un árbol de versiones.

---

### ANALOGÍA: Ramas = Líneas de tiempo alternativas

Imagina que `main` es la línea de tiempo principal de tu proyecto. Crear una rama es como abrir una línea de tiempo paralela donde puedes experimentar. Si funciona, la vuelves a unir con la principal. Si no, simplemente la eliminas sin haber tocado nada de la versión estable.

---

### CONCEPTO: Git Flow

Convención de trabajo en equipo que define cómo usar las ramas de forma organizada. Establece ramas con roles específicos:

- `main` — código en producción, siempre estable
- `develop` — integración del trabajo en curso
- `feature/nombre` — cada nueva funcionalidad en su propia rama
- `fix/nombre` — corrección de errores

No es una herramienta sino un acuerdo entre el equipo sobre cómo nombrar y usar las ramas. En esta clase solo necesitas entender que existe y que el flujo básico que aprenderás (main + commits) es la base sobre la que git flow se construye.

---

### CONCEPTO: Convención de mensajes de commit

Los mensajes de commit deben describir qué cambiaste, no cómo lo hiciste. Convención común:

- `feat:` para nueva funcionalidad
- `fix:` para corrección de error
- `style:` para cambios visuales sin afectar lógica

❌ Malo: `"cambios"`, `"fix"`, `"asdfgh"`
✅ Bueno: `"feat: agregar sección de contacto"`, `"fix: corregir enlace roto"`
