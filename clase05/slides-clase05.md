<!-- .slide: data-background="#0A192F" -->
# Clase 05: Setup del Desarrollador Moderno
## Terminal, Git y tu Primer Push

---

## 🔗 TRANSICIÓN: Módulo 1 → Módulo 2

### Módulo 1 completado:
- Creaste tu primera página web
- Aprendiste HTML semántico y CSS
- Dominaste Flexbox y hover states
- **Tu perfil vive en tu computadora**

### Módulo 2 comienza:
- **Terminal** - El control remoto de tu PC
- **Git** - Control de versiones
- **GitHub** - Tu código en la nube
- **Al final: tu proyecto estará EN INTERNET**

> "Del archivo local al mundo"

---

## 🧠 QUIZ PRE-LAB

### Pregunta:
¿Cómo harías para que otra persona pueda ver tu perfil personal que creaste en el Módulo 1?

*Toma 2-3 respuestas antes de continuar*

---

## 🎯 COMPROBACIÓN

### Pregunta:
Estás en `/Users/maria/Documents`. ¿Qué comando te lleva a `/Users/maria`?

A. `cd Documents`
B. `cd /Users/maria`
C. `cd ..`
D. `pwd`

---

## 🎯 COMPROBACIÓN - Respuesta

**Respuesta:** C

`cd ..` sube un nivel al directorio padre.

---

## 💡 ¿Qué es la Terminal?

### La interfaz gráfica (GUI):
```
📁 Clic → Abrir carpeta → Clic → Archivo → Clic...
```

### La terminal (CLI):
```bash
cd Documents && code proyecto.html
```

**Una línea. Mismo resultado. 10x más rápido.**

> Los desarrolladores profesionales viven en la terminal

---

## 💡 Los Comandos Básicos

| Comando | Significado | Qué hace |
|---------|-------------|----------|
| `pwd` | print working directory | ¿Dónde estoy? |
| `ls` | list | ¿Qué hay aquí? |
| `cd` | change directory | Ir a otra carpeta |
| `mkdir` | make directory | Crear carpeta |

### Demo en vivo:
```bash
pwd           # Estoy en /Users/facilitador
ls            # Veo Desktop, Documents, Downloads...
cd Documents  # Entro a Documents
mkdir demo    # Creo carpeta 'demo'
```

---

## ✅ CHECKPOINT 1: Terminal Básica

### Verificar en tu terminal:

```bash
pwd                    # Ver ubicación actual
cd Documents           # Ir a Documents
mkdir bootcamp         # Crear carpeta
cd bootcamp           # Entrar a bootcamp
pwd                    # Verificar
```

**¿Qué debe funcionar?**
- [ ] `pwd` muestra `/Users/tu-nombre/Documents/bootcamp`
- [ ] Estás dentro de la carpeta bootcamp
- [ ] No hubo errores en los comandos

---

## 💡 ¿Qué es Git?

### El problema:
```
proyecto_v1.html
proyecto_v2.html
proyecto_FINAL.html
proyecto_FINAL_FINAL.html
proyecto_AHORA_SI.html  😫
```

### La solución: Git
```
proyecto/
└── .git/  ← Todo el historial está aquí
    ├── commit 1: "crear estructura"
    ├── commit 2: "agregar estilos"
    └── commit 3: "corregir bug"
```

> Git guarda CADA versión. Puedes volver a cualquier punto.

---

## 💡 Git vs GitHub

| Git | GitHub |
|-----|--------|
| Software en tu PC | Sitio web en la nube |
| Guarda historial local | Almacena en internet |
| Funciona sin internet | Necesita conexión |
| Herramienta | Servicio |

### Analogía:
- **Git** = Word (programa para escribir)
- **GitHub** = Google Drive (donde guardas en la nube)

---

## ✅ CHECKPOINT 2: Git Configurado

### Verificar tu configuración:

```bash
git config --global user.name
git config --global user.email
```

**¿Qué debe funcionar?**
- [ ] Tu nombre aparece correctamente
- [ ] Tu email es el mismo de GitHub
- [ ] Git está instalado (`git --version` funciona)

---

## 💡 El Flujo de Git

```
┌─────────────┐     git add     ┌─────────────┐
│  Modificas  │ ──────────────► │   Staging   │
│   archivo   │                 │    Area     │
└─────────────┘                 └──────┬──────┘
                                       │
                               git commit
                                       │
                                       ▼
┌─────────────┐    git push    ┌─────────────┐
│   GitHub    │ ◄───────────── │   Commit    │
│   (remoto)  │                │   (local)   │
└─────────────┘                └─────────────┘
```

1. **Editas** archivos
2. **git add** → Preparas cambios
3. **git commit** → Guardas en historial local
4. **git push** → Subes a GitHub

---

## ✅ CHECKPOINT 3: Repositorio Clonado

### Verificar el clone:

```bash
cd ~/Documents/bootcamp/mylinks
ls
```

**¿Qué debe funcionar?**
- [ ] Estás dentro de la carpeta `mylinks`
- [ ] Ves archivos: `index.html`, `styles.css`, `README.md`
- [ ] VS Code puede abrirlo con `code .`

---

## 💡 REFLEXIÓN: ¿Por qué Git?

| Situación | Sin Git | Con Git |
|-----------|---------|---------|
| Rompiste el CSS | 😱 Pánico, empezar de cero | `git checkout -- .` |
| Quieres experimentar | Copiar carpeta entera | Crear una rama |
| Trabajo en equipo | Emails con archivos adjuntos | `git pull` y `git push` |

> **Regla**: Cada commit es un "save point" al que puedes volver

---

## ✅ CHECKPOINT 4: Primer Push

### Verificar en GitHub:

1. Ve a `github.com/TU-USUARIO/mylinks`
2. Actualiza la página
3. Busca tu commit más reciente

**¿Qué debe funcionar?**
- [ ] Tu commit aparece en la lista
- [ ] El mensaje describe los cambios
- [ ] Los archivos modificados se ven en GitHub

---

## 💡 REFLEXIÓN: Buenos Mensajes de Commit

### ❌ Mensajes malos:
```
"cambios"
"fix"
"asdfgh"
"actualizar archivo"
```

### ✅ Mensajes buenos:
```
"feat: agregar sección de contacto"
"fix: corregir enlace roto en nav"
"style: cambiar color primario a azul"
```

> Tu yo del futuro te lo agradecerá

---

## 🔗 TRANSICIÓN: Hacia Clase 06

### Hoy lograste:
- Navegar con la terminal (`pwd`, `ls`, `cd`)
- Configurar Git con tu identidad
- Clonar un repositorio de GitHub
- Hacer tu primer commit y push

### Próxima clase:
- **Diseño Responsive** con media queries
- **Chrome DevTools** para debugging
- MyLinks que se ve bien en móvil Y desktop

> "Tu código ya está en la nube. Ahora hagamos que se vea bien en cualquier pantalla."

---

## ❓ Preguntas de Cierre

1. ¿Por qué la terminal es más eficiente que hacer clic en carpetas, aunque al principio parezca más difícil?

2. ¿Cuál es la diferencia entre `git commit` y `git push`? ¿Por qué necesitamos ambos?

3. Imagina que mañana borras accidentalmente todo tu CSS. ¿Cómo te salvaría Git?

---

## 📝 Entrega del Lab

**Entregable:**
- [ ] URL de tu repositorio en GitHub
- [ ] Screenshot de `git log --oneline` mostrando tu commit

**Próxima clase:**
- Traer tu laptop con el proyecto MyLinks listo
- Tener Chrome instalado (usaremos DevTools)
