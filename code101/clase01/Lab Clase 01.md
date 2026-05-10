# Lab 01: Mi Primera Página Web

## 🎯 Objetivos

1. Configurar VS Code con extensiones esenciales para desarrollo web
2. Crear la estructura base de un proyecto web con HTML válido
3. Implementar contenido personal usando etiquetas HTML básicas

---

## 🔑 Conceptos Clave

- **HTML** - Lenguaje de marcado que estructura el contenido de las páginas web
- **Etiquetas** - Elementos que definen el tipo de contenido (`<h1>`, `<p>`, `<img>`)
- **Live Server** - Extensión que muestra cambios en tiempo real al guardar

---

## ⚙️ Setup Inicial

Antes de comenzar, instala VS Code y las extensiones necesarias:

1. Descarga VS Code desde [code.visualstudio.com](https://code.visualstudio.com/){:target="_blank"}
2. Instala siguiendo las instrucciones de tu sistema operativo
3. En VS Code, ve a **Extensiones** (ícono de cuadrados en la barra lateral)
4. Busca e instala cada extensión de la tabla

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | VS Code instalado | Puedes abrir la aplicación |
| ☐ | Extensión **Live Server** | Aparece en lista de extensiones instaladas |
| ☐ | Extensión **Auto Rename Tag** | Aparece en lista de extensiones instaladas |
| ☐ | Extensión **Prettier** | Aparece en lista de extensiones instaladas |

---

## Parte 1: Crear Tu Proyecto (30 min)

### 1.1 Crear Estructura del Proyecto

1. Crea una carpeta en tu computadora llamada `mi-perfil`
2. En VS Code: **File → Open Folder** → selecciona `mi-perfil`
3. Crea un nuevo archivo: **File → New File** → guárdalo como `index.html`

### 1.2 Estructura HTML Base

Escribe el siguiente código en `index.html`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Perfil - <!-- Tu nombre aquí --></title>
</head>
<body>
    <!-- Tu contenido irá aquí -->
</body>
</html>
```

> 💡 **Tip:** Reemplaza el comentario en `<title>` con tu nombre real.

### 1.3 Activar Live Server

1. Haz clic derecho en `index.html` en el explorador de archivos
2. Selecciona **"Open with Live Server"**
3. Tu navegador se abrirá mostrando una página en blanco

✅ **Checkpoint:** Deberías ver tu página en el navegador con la URL `localhost:5500` o similar.

---

## Parte 2: Tu Contenido Personal (35 min)

### 2.1 Agregar Tu Nombre

Dentro de `<body>`, agrega un título con tu nombre:

```html
<body>
    <h1><!-- Escribe tu nombre completo aquí --></h1>
</body>
```

Guarda y verifica que tu nombre aparezca en el navegador.

### 2.2 Agregar Tu Foto

1. Copia una foto tuya (o avatar) a la carpeta `mi-perfil`
2. Renómbrala a algo simple como `foto.jpg`
3. Agrega la imagen debajo del `<h1>`:

```html
<h1>Tu Nombre</h1>
<img src="foto.jpg" alt="<!-- Describe tu foto brevemente -->">
```

> ⚠️ **Importante:** El atributo `alt` es obligatorio para accesibilidad. Escribe una descripción breve de la imagen.

### 2.3 Agregar Tu Bio

Debajo de la imagen, agrega un párrafo sobre ti:

```html
<img src="foto.jpg" alt="...">
<p>
    <!-- Escribe 2-3 oraciones sobre ti:
         - ¿Qué estudias o a qué te dedicas?
         - ¿De dónde eres?
         - ¿Qué te apasiona? -->
</p>
```

### 2.4 Agregar Lista de Hobbies

Después de tu bio, agrega una lista de tus intereses:

```html
<h2>Mis Hobbies</h2>
<ul>
    <!-- Agrega al menos 3 hobbies usando <li> -->
    <li><!-- Hobby 1 --></li>
    <li><!-- Hobby 2 --></li>
    <li><!-- Hobby 3 --></li>
</ul>
```

✅ **Checkpoint:** Tu página muestra tu nombre, foto, bio y lista de hobbies.

---

## Parte 3: Pulir y Personalizar (35 min)

### 3.1 Verificar Estructura Completa

Tu archivo `index.html` debería tener esta estructura:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Perfil - Tu Nombre</title>
</head>
<body>
    <h1><!-- Tu nombre --></h1>

    <img src="<!-- tu-foto.jpg -->" alt="<!-- descripción -->">

    <p>
        <!-- Tu bio personal -->
    </p>

    <h2>Mis Hobbies</h2>
    <ul>
        <li><!-- Hobby 1 --></li>
        <li><!-- Hobby 2 --></li>
        <li><!-- Hobby 3 --></li>
    </ul>
</body>
</html>
```

### 3.2 Agregar Más Contenido

Experimenta agregando más secciones a tu perfil:

```html
<h2><!-- Título de nueva sección --></h2>
<!-- Puedes usar:
     - <p> para párrafos
     - <ul> y <li> para listas sin orden
     - <ol> y <li> para listas numeradas
     - <img> para más imágenes -->
```

Ideas de secciones adicionales:
- Mis metas para este año
- Mi música favorita
- Películas que recomiendo

### 3.3 Verificación Final

Antes de entregar, verifica:

- [ ] Tu nombre aparece en el `<h1>`
- [ ] La imagen carga correctamente
- [ ] El atributo `alt` describe la imagen
- [ ] Tu bio tiene contenido real (no placeholder)
- [ ] Tienes al menos 3 hobbies en la lista

✅ **Checkpoint:** Tu página está completa con contenido personal real.

---

## Logros Adicionales (Opcional)

### 🟢 Texto con Énfasis
Investiga las etiquetas `<strong>` y `<em>`. Úsalas para resaltar palabras importantes en tu bio. (Veremos más sobre formato de texto en la Clase 02)

### 🟡 Enlaces Externos
Investiga la etiqueta `<a>` y agrega un enlace a tu red social favorita. (Profundizaremos en navegación en la Clase 02)

### 🔴 Múltiples Páginas
Crea un segundo archivo `hobbies.html` y enlázalo desde tu página principal. (Aprenderemos estructura de proyectos multi-página en el Módulo 2)

---

## 📝 Entrega

### Checklist

- [ ] VS Code instalado con extensiones (Live Server, Auto Rename Tag, Prettier)
- [ ] Archivo `index.html` con estructura HTML válida
- [ ] Tu nombre real en el `<h1>` y en el `<title>`

### Entregable

📸 **Screenshot** de tu página web en el navegador donde se vea claramente:
- Tu nombre en el `<h1>`
- La URL de Live Server (localhost:5500 o similar)

> ⚠️ El screenshot debe mostrar tu nombre real para verificar que es tu trabajo.
