# Lab 05: Setup del Desarrollador Moderno

> 🚀 **Proyecto del Módulo:** MyLinks - Tu Hub Personal en la Web
>
> 📌 **Este lab:** Configurar tu entorno de desarrollo y clonar el proyecto base.

## 🎯 Objetivos del Lab

1. Navegar por el sistema de archivos usando la terminal
2. Configurar Git con tu identidad
3. Clonar el repositorio template de MyLinks
4. Hacer tu primer commit y push a GitHub

---

## 🔑 Conceptos Clave

- **Terminal** - Interfaz de texto para controlar tu computadora con comandos
- **Git** - Sistema de control de versiones que guarda el historial de tu código
- **Clone** - Copiar un repositorio de GitHub a tu computadora
- **Commit** - Guardar cambios con un mensaje descriptivo
- **Push** - Subir tus commits al repositorio remoto

---

## ⚙️ Setup Inicial

Antes de comenzar, verifica que tengas todo listo:

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | VS Code instalado | Puedes abrirlo sin errores |
| ☐ | Terminal accesible | Ctrl+` (o Cmd+`) abre terminal en VS Code |
| ☐ | Git instalado | `git --version` muestra versión |
| ☐ | Cuenta de GitHub | Puedes iniciar sesión en github.com |

> ⚠️ Si Git no está instalado, descárgalo de [git-scm.com](https://git-scm.com/downloads){:target="_blank"} antes de continuar.

---

## Parte 1: Conociendo la Terminal (30 min)

### 1.1 Abre la Terminal

En VS Code, presiona `Ctrl+`` (Windows/Linux) o `Cmd+`` (Mac) para abrir la terminal integrada.

Verás algo como esto:

```
usuario@computadora ~ %
```

Este es el **prompt**—la terminal está esperando tus comandos.

### 1.2 Tu Primer Comando: ¿Dónde estoy?

Escribe `pwd` (print working directory) y presiona Enter:

```bash
pwd
```

**Resultado esperado:**
```
/Users/tunombre
```

Este es tu **directorio actual**—la carpeta donde estás "parado".

### 1.3 ¿Qué hay aquí?

Escribe `ls` (list) para ver el contenido de la carpeta actual:

```bash
ls
```

**Resultado esperado:**
```
Desktop    Documents    Downloads    Pictures    ...
```

Verás las carpetas y archivos que existen en tu ubicación actual.

### 1.4 Navegando con `cd`

Usa `cd` (change directory) para moverte entre carpetas:

```bash
cd Documents
```

Ahora estás dentro de Documents. Verifica con `pwd`:

```bash
pwd
```

**Resultado esperado:**
```
/Users/tunombre/Documents
```

### 1.5 Volver atrás

Para subir un nivel (ir a la carpeta padre), usa `cd ..`:

```bash
cd ..
pwd
```

**Resultado esperado:**
```
/Users/tunombre
```

### 1.6 Crear una Carpeta para Proyectos

Vamos a crear una carpeta donde guardarás todos tus proyectos del bootcamp:

```bash
cd Documents
mkdir bootcamp
cd bootcamp
pwd
```

**Resultado esperado:**
```
/Users/tunombre/Documents/bootcamp
```

> 💡 **Tip:** `mkdir` significa "make directory" (crear directorio/carpeta).

### 1.7 Comandos que acabas de aprender

| Comando | Significado | Qué hace |
|---------|-------------|----------|
| `pwd` | print working directory | Muestra dónde estás |
| `ls` | list | Lista archivos y carpetas |
| `cd` | change directory | Cambia de carpeta |
| `cd ..` | change directory (parent) | Sube un nivel |
| `mkdir` | make directory | Crea una carpeta |

✅ **Checkpoint:** Tu terminal está en la carpeta `Documents/bootcamp` que acabas de crear.

---

## Parte 2: Configurando Git (25 min)

### 2.1 Verifica Git

Confirma que Git está instalado:

```bash
git --version
```

**Resultado esperado:**
```
git version 2.39.0
```

(El número de versión puede variar, pero debe mostrar una versión.)

### 2.2 Configura tu Identidad

Git necesita saber quién eres para firmar tus commits. Ejecuta estos comandos con TU información:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

> ⚠️ **Importante:** Usa el MISMO email que registraste en GitHub.

### 2.3 Verifica la Configuración

```bash
git config --global user.name
git config --global user.email
```

**Resultado esperado:**
```
Tu Nombre
tu@email.com
```

### 2.4 Configura el Editor por Defecto

Para que Git use VS Code como editor:

```bash
git config --global core.editor "code --wait"
```

### 2.5 Configura el Nombre de Rama por Defecto

Git usa `main` como rama principal. Asegúrate de que esté configurado:

```bash
git config --global init.defaultBranch main
```

### 2.6 Tu configuración completa

Para ver toda tu configuración:

```bash
git config --list
```

Busca estas líneas en el resultado:
```
user.name=Tu Nombre
user.email=tu@email.com
core.editor=code --wait
init.defaultBranch=main
```

✅ **Checkpoint:** Git está configurado con tu nombre, email, y VS Code como editor.

---

## Parte 3: Clonando MyLinks (35 min)

### 3.1 Crea tu Repositorio desde el Template

1. Ve a [github.com/entertechschool/mylinks-template](https://github.com/entertechschool/mylinks-template){:target="_blank"}

2. Haz clic en el botón verde **"Use this template"** → **"Create a new repository"**

3. Configura tu nuevo repositorio:
   - **Repository name:** `mylinks`
   - **Description:** "Mi hub personal de enlaces"
   - **Visibility:** Public
   - Haz clic en **"Create repository"**

4. GitHub te redirigirá a TU nuevo repositorio: `github.com/TU-USUARIO/mylinks`

### 3.2 Copia la URL de tu Repositorio

En la página de tu repositorio:

1. Haz clic en el botón verde **"Code"**
2. Asegúrate de que esté seleccionado **HTTPS**
3. Copia la URL (se ve como `https://github.com/TU-USUARIO/mylinks.git`)

### 3.3 Clona el Repositorio

En tu terminal (asegúrate de estar en `Documents/bootcamp`):

```bash
pwd
```

Si no estás ahí:
```bash
cd ~/Documents/bootcamp
```

Ahora clona tu repositorio:

```bash
git clone https://github.com/TU-USUARIO/mylinks.git
```

**Resultado esperado:**
```
Cloning into 'mylinks'...
remote: Enumerating objects: 10, done.
remote: Counting objects: 100% (10/10), done.
remote: Compressing objects: 100% (8/8), done.
Receiving objects: 100% (10/10), done.
```

### 3.4 Entra al Proyecto

```bash
cd mylinks
ls
```

**Resultado esperado:**
```
index.html    styles.css    README.md
```

¡Tienes el proyecto en tu computadora!

### 3.5 Abre en VS Code

```bash
code .
```

> 💡 El punto (`.`) significa "la carpeta actual".

VS Code se abrirá con tu proyecto MyLinks listo para editar.

✅ **Checkpoint:** Tienes el repositorio MyLinks clonado y abierto en VS Code.

---

## Parte 4: Tu Primer Commit y Push (30 min)

### 4.1 Explora los Archivos

En VS Code, abre `index.html`. Verás una estructura básica con placeholders.

### 4.2 Personaliza tu MyLinks

Edita `index.html` y cambia:

1. **Tu nombre** - Busca `Tu Nombre` y reemplázalo con tu nombre real
2. **Tu bio** - Busca el placeholder de bio y escribe una línea sobre ti
3. **Un enlace** - Cambia uno de los enlaces placeholder por uno real (tu GitHub, LinkedIn, etc.)

Ejemplo de cómo debe quedar:

```html
<h1>María García</h1>
<p class="bio">Estudiante de desarrollo web | Entusiasta de la tecnología</p>

<a href="https://github.com/mariagarcia" class="link">
    GitHub
</a>
```

### 4.3 Guarda los Cambios

Presiona `Ctrl+S` (o `Cmd+S` en Mac) para guardar el archivo.

### 4.4 Verifica el Estado con Git

En la terminal (asegúrate de estar dentro de `mylinks`):

```bash
git status
```

**Resultado esperado:**
```
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)

        modified:   index.html
```

Git detectó que modificaste `index.html`.

### 4.5 Prepara los Cambios (Stage)

Agrega los cambios al "área de staging":

```bash
git add index.html
```

Verifica de nuevo:

```bash
git status
```

**Resultado esperado:**
```
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)

        modified:   index.html
```

El archivo ahora está listo para el commit (en verde).

### 4.6 Crea el Commit

Guarda los cambios en el historial con un mensaje descriptivo:

```bash
git commit -m "feat: personalizar nombre, bio y primer enlace"
```

**Resultado esperado:**
```
[main abc1234] feat: personalizar nombre, bio y primer enlace
 1 file changed, 3 insertions(+), 3 deletions(-)
```

> 💡 **Tip:** Buenos mensajes de commit empiezan con verbos: "agregar", "corregir", "actualizar", "eliminar".

### 4.7 Sube los Cambios a GitHub

Envía tu commit al repositorio remoto:

```bash
git push
```

**Resultado esperado:**
```
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 350 bytes | 350.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0)
To https://github.com/TU-USUARIO/mylinks.git
   abc1234..def5678  main -> main
```

### 4.8 Verifica en GitHub

1. Ve a tu repositorio en GitHub: `github.com/TU-USUARIO/mylinks`
2. Actualiza la página (F5)
3. Deberías ver tu commit más reciente con el mensaje que escribiste

✅ **Checkpoint:** Tu primer commit está visible en GitHub con tus cambios personalizados.

---

## Logros Adicionales (Opcional)

Si terminaste antes, intenta estos desafíos:

### 🟢 Segundo Commit
Edita `styles.css` para cambiar el color de fondo. Haz commit y push de los cambios.

### 🟡 Ver el Historial
Usa `git log` para ver el historial de commits. Prueba `git log --oneline` para una vista compacta.

### 🔴 README Personal
Edita el archivo `README.md` con información sobre tu proyecto. (Aprenderás Markdown en profundidad más adelante)

---

## Resumen de Comandos Aprendidos

### Terminal
| Comando | Qué hace |
|---------|----------|
| `pwd` | Muestra directorio actual |
| `ls` | Lista contenido de carpeta |
| `cd carpeta` | Entra a una carpeta |
| `cd ..` | Sube un nivel |
| `mkdir nombre` | Crea una carpeta |
| `code .` | Abre VS Code aquí |

### Git
| Comando | Qué hace |
|---------|----------|
| `git clone URL` | Copia repositorio a tu PC |
| `git status` | Muestra estado de cambios |
| `git add archivo` | Prepara archivo para commit |
| `git commit -m "msg"` | Guarda cambios con mensaje |
| `git push` | Sube commits a GitHub |

---

## 📝 Entrega

📦 **Entregable:**

1. **URL de tu repositorio** en GitHub (ejemplo: `https://github.com/tu-usuario/mylinks`)

2. **Screenshot** de tu terminal mostrando:
   - El comando `git log --oneline`
   - Al menos 1 commit tuyo visible

**Verificación rápida antes de entregar:**
- [ ] Tu nombre aparece en `index.html`
- [ ] Al menos un enlace funciona
- [ ] El commit está visible en GitHub
