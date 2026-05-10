# Guía del Facilitador - Clase 05: Setup del Desarrollador Moderno

> Tiempo de lectura: 10 minutos | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Terminal/CLI**: Interfaz de texto para ejecutar comandos. Más rápida y poderosa que interfaces gráficas para tareas repetitivas.
- **Git**: Sistema de control de versiones distribuido creado por Linus Torvalds. Rastrea cambios y permite colaboración.
- **Repositorio**: Carpeta con historial de Git. Contiene todo el código y su evolución.
- **Clone**: Copiar un repositorio remoto (GitHub) a tu máquina local.
- **Commit**: Snapshot del proyecto en un momento específico con un mensaje descriptivo.
- **Push**: Sincronizar commits locales con el repositorio remoto.

---

## 🔗 Analogías Útiles

**Terminal <> Control remoto universal:**
La terminal es como un control remoto que funciona para TODO en tu computadora. Con la interfaz gráfica, necesitas un "control" diferente para cada app. Con la terminal, un lenguaje de comandos controla todo.

**Git <> Máquina del tiempo:**
Git te permite viajar al pasado de tu código. ¿Rompiste algo? Viaja a cuando funcionaba. ¿Quieres ver qué cambió? Compara dos momentos en el tiempo.

**Commit <> Foto Polaroid:**
Cada commit es como tomar una foto de tu proyecto. La foto (código) no cambia, pero puedes tomar muchas fotos a lo largo del tiempo y ver cómo evolucionó todo.

**Push <> Subir fotos a la nube:**
Tus commits son fotos locales en tu teléfono. Push es como sincronizarlas con iCloud o Google Photos—ahora están seguras en la nube y puedes acceder desde cualquier lugar.

---

## 📚 Contexto Histórico

### La Terminal: De teletipo a herramienta profesional

La terminal tiene sus raíces en los **teletipos** de los años 1960—máquinas de escribir conectadas a computadoras mainframe. Los usuarios escribían comandos y la máquina imprimía respuestas en papel.

Cuando las pantallas reemplazaron el papel (años 70), la metáfora se mantuvo: escribes comandos, ves resultados. El nombre "terminal" viene de ser el punto final ("terminus") donde el usuario interactúa con la computadora central.

**Bash** (Bourne Again SHell, 1989) se convirtió en el estándar para sistemas Unix y Linux. macOS usa Bash o Zsh. Windows usa PowerShell o Command Prompt, pero ahora incluye WSL (Windows Subsystem for Linux) para comandos Unix.

> **Para contar en clase:** "La terminal parece antigua, pero es tan poderosa que los desarrolladores senior la prefieren sobre interfaces gráficas. En Google, Facebook, Amazon—los ingenieros viven en la terminal. No es 'de hackers', es de profesionales."

### Git: El accidente de Linus Torvalds

En 2005, **Linus Torvalds** (creador de Linux) necesitaba un sistema de control de versiones para el kernel de Linux. El sistema anterior (BitKeeper) dejó de ser gratuito, y los existentes (CVS, Subversion) eran demasiado lentos y centralizados.

Torvalds escribió Git en **2 semanas**. Los objetivos de diseño eran:
- Velocidad extrema (Linux tiene millones de líneas de código)
- Diseño distribuido (cada desarrollador tiene una copia completa)
- Integridad de datos (imposible corromper el historial sin detectarlo)

El nombre "Git" es slang británico para "persona desagradable"—Torvalds lo eligió como broma auto-deprecativa.

> **Para contar en clase:** "Git fue creado en 2 semanas por frustración. Hoy lo usan el 93% de los desarrolladores del mundo. Es tan fundamental que no saber Git es como un contador que no sabe usar Excel."

### GitHub: De startup a Microsoft

**GitHub** fue fundada en 2008 por Tom Preston-Werner, Chris Wanstrath, y PJ Hyett. La idea: hacer Git accesible con una interfaz web bonita.

El logo del "Octocat" (gato-pulpo) se volvió icónico. GitHub creó la cultura de open source moderna—proyectos como React, Vue, TensorFlow viven ahí.

Microsoft compró GitHub por **$7.5 billones** en 2018. Muchos temían que Microsoft arruinaría GitHub, pero ha mantenido la cultura y agregado características como GitHub Actions y Copilot.

> **Para contar en clase:** "Cuando busques trabajo, lo primero que muchos reclutadores revisan es tu GitHub. Es tu portfolio como desarrollador. Cada commit que hagas a partir de hoy es evidencia de tu crecimiento."

**Fuentes:** [Git History](https://git-scm.com/book/en/v2/Getting-Started-A-Short-History-of-Git){:target="_blank"}, [GitHub Octoverse](https://octoverse.github.com/){:target="_blank"}

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "La Magia de la Terminal"

Demostrar el poder de la terminal vs interfaz gráfica.

**Preparación:**
1. Tener una carpeta con 10+ archivos
2. Tener la misma tarea lista para hacer con GUI

**Dinámica sugerida:**
```
Facilitador: "Necesito renombrar 10 archivos agregando '_backup' al final."
Facilitador: (Empieza con GUI, clic derecho, renombrar, escribir...)
Facilitador: "Esto tomará un rato..."
Facilitador: (Para a los 3 archivos)
Facilitador: "Ahora con terminal:"
Facilitador: for f in *.txt; do mv "$f" "${f%.txt}_backup.txt"; done
Facilitador: (Todos los archivos se renombran instantáneamente)
Facilitador: "Una línea. Todos los archivos. Un segundo."
```

> ⚠️ **Nota:** Este comando es avanzado. El punto no es que lo entiendan ahora, sino que vean el potencial.

### Dinámica 2: "Git en Acción"

Mostrar visualmente cómo Git rastrea cambios.

**Preparación:**
1. Tener un archivo de texto simple
2. VS Code abierto con GitLens o similar

**Dinámica sugerida:**
```
Facilitador: (Crea archivo con una línea)
Facilitador: git add . && git commit -m "versión 1"
Facilitador: (Agrega segunda línea)
Facilitador: git diff  ← "Miren, Git sabe EXACTAMENTE qué cambié"
Facilitador: git commit -am "versión 2"
Facilitador: (Borra todo el contenido)
Facilitador: "Ups, borré todo. ¿Pánico?"
Facilitador: git checkout -- archivo.txt
Facilitador: (El contenido vuelve)
Facilitador: "Git NUNCA olvida."
```

### Dinámica 3: "Setup Guiado Paso a Paso"

Para el clone y primer push, ir TODOS JUNTOS.

**Preparación:**
1. Tener el template repository listo
2. Proyector mostrando tu terminal

**Dinámica sugerida:**
```
Facilitador: "Nadie hace nada hasta que yo lo diga."
Facilitador: "Paso 1: Abran github.com/entertechschool/mylinks-template"
Facilitador: (Espera, verifica que todos llegaron)
Facilitador: "Paso 2: Clic en 'Use this template'"
Facilitador: (Espera, verifica)
...
Facilitador: "Ahora TODOS deberían ver 'Cloning into mylinks...'"
(Continuar paso a paso hasta que todos tengan el repo clonado)
```

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: Navegación Básica

**Cuándo usarlo:** Inicio del lab, parte 1.

```bash
# ¿Dónde estoy?
pwd
# Resultado: /Users/facilitador

# ¿Qué hay aquí?
ls
# Resultado: Desktop  Documents  Downloads  Pictures

# Entrar a Documents
cd Documents

# Verificar
pwd
# Resultado: /Users/facilitador/Documents

# Crear carpeta para el bootcamp
mkdir bootcamp

# Entrar y verificar
cd bootcamp
pwd
# Resultado: /Users/facilitador/Documents/bootcamp
```

**Tip de facilitación:** Escribe cada comando, explica qué hace, LUEGO presiona Enter.

### Ejemplo 2: Configuración de Git

**Cuándo usarlo:** Parte 2 del lab.

```bash
# Configurar nombre (REEMPLAZAR con el tuyo)
git config --global user.name "Nombre Apellido"

# Configurar email (el MISMO de GitHub)
git config --global user.email "correo@ejemplo.com"

# Configurar VS Code como editor
git config --global core.editor "code --wait"

# Configurar rama principal
git config --global init.defaultBranch main

# Verificar todo
git config --list | grep user
# Resultado:
# user.name=Nombre Apellido
# user.email=correo@ejemplo.com
```

**Tip de facilitación:** Explica por qué el email debe coincidir con GitHub (para que los commits se vinculen a su perfil).

### Ejemplo 3: Clone y Push

**Cuándo usarlo:** Partes 3 y 4 del lab.

```bash
# Asegurarse de estar en la carpeta correcta
cd ~/Documents/bootcamp

# Clonar el repositorio (REEMPLAZAR URL)
git clone https://github.com/USUARIO/mylinks.git

# Entrar al proyecto
cd mylinks

# Ver archivos
ls
# Resultado: index.html  styles.css  README.md

# Abrir en VS Code
code .

# (Después de editar index.html...)

# Ver qué cambió
git status
# Resultado: modified: index.html

# Preparar cambios
git add index.html

# Crear commit
git commit -m "feat: personalizar nombre y bio"

# Subir a GitHub
git push
```

**Tip de facilitación:** Haz una pausa en cada paso para que todos estén sincronizados.

---

## ⚠️ Errores Comunes

| Señal | Qué está pasando | Qué hacer |
|-------|------------------|-----------|
| `command not found: git` | Git no instalado | Instalar desde git-scm.com |
| `fatal: not a git repository` | No están en carpeta con Git | `cd` a la carpeta correcta |
| `Permission denied` | Problemas de autenticación | Configurar SSH o usar HTTPS con token |
| `error: failed to push` | Cambios remotos no sincronizados | `git pull` primero, luego `git push` |
| `Your branch is ahead of 'origin/main'` | Commits locales no subidos | Ejecutar `git push` |
| Terminal no abre en VS Code | Extensión o config faltante | Ir a View → Terminal |
| `cd: no such file or directory` | Carpeta no existe o typo | Verificar con `ls`, corregir nombre |

### Troubleshooting de Autenticación

Si hay problemas de push por autenticación:

**Opción 1: HTTPS con Token (Más fácil)**
1. GitHub → Settings → Developer Settings → Personal Access Tokens
2. Generate new token (classic)
3. Marcar "repo" como scope
4. Usar el token como contraseña al hacer push

**Opción 2: SSH (Más avanzado)**
```bash
ssh-keygen -t ed25519 -C "correo@ejemplo.com"
cat ~/.ssh/id_ed25519.pub
# Copiar output y agregar en GitHub → Settings → SSH Keys
```

> 💡 **Recomendación:** Usar HTTPS para esta clase. SSH puede esperar a clase más avanzada.

---

## 🎯 Checkpoints de Validación

| Minuto | Checkpoint | Cómo validar |
|--------|------------|--------------|
| 0-10 | Intro + Transición M1→M2 | Quiz pre-lab respondido |
| 10-40 | Terminal navegación | `pwd` muestra `Documents/bootcamp` |
| 40-65 | Git configurado | `git config user.name` muestra nombre |
| 65-100 | Repo clonado | `ls` en `mylinks` muestra archivos |
| 100-130 | Primer push | Commit visible en github.com |
| 130-150 | Cierre + Logros adicionales | Preguntas respondidas |

---

## 🚨 Plan de Contingencia

### Si Git no está instalado en varias máquinas:

**Opción A:** Usar GitHub Codespaces
1. En el repo template, clic en "Code" → "Codespaces" → "Create codespace"
2. Se abre VS Code en el navegador con todo configurado
3. Pueden hacer commits desde ahí

**Opción B:** Instalación en vivo
1. Proyectar el proceso de instalación
2. Los que ya tienen Git ayudan a los que no
3. Ajustar tiempo del lab

### Si hay problemas de autenticación masivos:

**Solución rápida:** GitHub Desktop
1. Descargar de desktop.github.com
2. Iniciar sesión con GitHub
3. Clone y push funcionan con interfaz gráfica

> Después de clase, pueden migrar a terminal.

---

## 🔗 Conexión con el Resto del Módulo

### Clase 06: Diseño Responsive + DevTools
El proyecto MyLinks que clonaron hoy será el que hagan responsive. El flujo de Git se reforzará: cada cambio de CSS → commit → push.

### Clase 07: Wireframing
Usarán Git para guardar diferentes versiones de su diseño. Introducir branches sería ideal aquí (si hay tiempo).

### Clase 08: Lab Calificado
El entregable final requiere el proyecto en GitHub Pages. Todo el módulo construye hacia publicar el sitio.

---

## 💬 Frases para Usar

**Al inicio:**
> "El Módulo 1 fue crear. El Módulo 2 es profesionalizar. Las herramientas que veremos hoy las usan en Google, en Amazon, en cualquier empresa tech del mundo."

**Cuando alguien se frustra con la terminal:**
> "La terminal parece hostil al principio, pero es como aprender a manejar. Incómodo las primeras veces, después no puedes vivir sin ella."

**Cuando el clone funciona:**
> "Acaban de hacer algo que parecía magia hace unas semanas. Copiaron código de internet a su computadora con un comando."

**Al cerrar:**
> "Hoy dieron su primer paso hacia trabajar como profesionales. La próxima vez que vean una película de hackers con terminales, van a entender qué está pasando."
