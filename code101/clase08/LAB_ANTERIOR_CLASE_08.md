# Lab 08: Vibe Coding con IA

> 🚀 **Proyecto del Módulo:** MyLinks - Tu Hub Personal en la Web
>
> 📌 **Este lab:** Usar IA para generar tu MyLinks y publicarlo en GitHub Pages.
>
> ⚠️ **Lab Calificado:** Este lab será evaluado. Ver rúbrica al final.

## 🎯 Objetivos del Lab

1. Aplicar la técnica **Prompt Scaffolding** para construir un prompt efectivo
2. Generar código HTML/CSS usando Claude.ai
3. Verificar diseño responsive con DevTools
4. Publicar en GitHub Pages con URL pública

---

## 🔑 Conceptos Clave

- **Prompt Scaffolding** - Técnica de construir prompts paso a paso con preguntas clarificadoras
- **Artifact** - Código generado por Claude que puedes copiar directamente
- **GitHub Pages** - Hosting gratuito para tu sitio web
- **Iteración** - Refinar resultados de IA cuando no son exactamente lo que querías

---

## ⚙️ Setup Inicial

Verifica que tengas todo listo:

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | Repositorio MyLinks | `git status` funciona sin errores |
| ☐ | Wireframe disponible | Tienes imagen, Excalidraw o link de Figma |
| ☐ | Cuenta en Claude.ai | Puedes acceder a [claude.ai](https://claude.ai/){:target="_blank"} |
| ☐ | Chrome instalado | DevTools se abre con F12 |

---

## Parte 1: Prompt Scaffolding (35 min)

### 1.1 ¿Qué es Prompt Scaffolding?

**Prompt Scaffolding** es una técnica para construir prompts efectivos sin tener que escribirlos desde cero. Funciona así:

```
┌─────────────────────────────────────────────┐
│  PASO 1: Responder preguntas simples        │
│  (con opciones predefinidas)                │
│                                             │
│  "¿Qué estilo visual?" → Minimalista        │
│  "¿Qué colores?" → Oscuro con acentos neón  │
│  "¿Forma de botones?" → Redondeados         │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│  PASO 2: Se genera el prompt final          │
│  (automáticamente, listo para usar)         │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│  PASO 3: Usar prompt en Claude              │
│  → Obtener código funcional                 │
└─────────────────────────────────────────────┘
```

### 1.2 Abre Gemini

Ve a [gemini.google.com](https://gemini.google.com/){:target="_blank"} e inicia sesión.

### 1.3 Usa el Prompt Scaffolding

Copia y pega este prompt en Gemini:

```
Eres un asistente que ayuda a construir prompts para generar páginas web tipo Linktree.

Tu trabajo es hacerme 5 preguntas para entender qué quiero, y luego generar un prompt final que pueda usar en otra IA.

Las preguntas deben ser:

**Pregunta 0 (opcional):** "¿Tienes un wireframe o boceto de tu diseño? Si es así, descríbelo brevemente o pega el link. Si no tienes, escribe 'No tengo' y continuamos."

**Pregunta 1:** "¿Qué estilo visual prefieres?"
- A) Minimalista y limpio
- B) Colorido y llamativo
- C) Oscuro y moderno
- D) Profesional y corporativo

**Pregunta 2:** "¿Qué tipo de paleta de colores?"
- A) Tonos neutros (blancos, grises, negros)
- B) Colores vibrantes (azul, rosa, naranja)
- C) Modo oscuro con acentos neón
- D) Colores tierra y naturales

**Pregunta 3:** "¿Cómo prefieres los botones de enlaces?"
- A) Rectangulares con bordes marcados
- B) Redondeados (pill buttons)
- C) Con sombras y efecto 3D
- D) Minimalistas, solo texto con hover

**Pregunta 4:** "¿Qué efecto de hover quieres en los botones?"
- A) Cambio de color suave
- B) Escala (se agranda ligeramente)
- C) Sombra que aparece
- D) Cambio de fondo + escala combinados

Hazme las preguntas UNA POR UNA. Espera mi respuesta antes de hacer la siguiente.

Cuando tenga todas las respuestas, genera un prompt final con este formato:

---
**PROMPT PARA CLAUDE:**

Crea una página web tipo Linktree con las siguientes características:

[Incluir todas mis respuestas organizadas]

Requisitos técnicos:
- HTML semántico en un solo archivo
- CSS incluido en un tag <style> dentro del HTML
- Diseño responsive (mobile-first)
- Debe verse bien en 375px y 768px+
- Incluir al menos 5 enlaces de ejemplo
- Foto de perfil circular como placeholder
- Nombre y bio debajo de la foto

Genera el código completo listo para usar.
---
```

### 1.4 Responde las Preguntas

Gemini te hará las preguntas una por una. Responde con la letra (A, B, C, o D) o con tu propia descripción si ninguna opción te convence.

**Para la Pregunta 0 (wireframe):**
- Si tienes wireframe en Figma: pega el link
- Si tienes imagen: describe los elementos principales
- Si no tienes: escribe "No tengo" y continúa

### 1.5 Obtén tu Prompt Final

Cuando termines las 5 preguntas, Gemini generará un prompt listo para usar.

**Copia el prompt final** (la parte que dice "PROMPT PARA CLAUDE").

✅ **Checkpoint:** Tienes un prompt personalizado generado por Gemini, listo para usar en Claude.

---

## Parte 2: Generación con IA (25 min)

### 2.1 Abre Claude

Ve a [claude.ai](https://claude.ai/){:target="_blank"} e inicia sesión.

### 2.2 Pega tu Prompt

Pega el prompt que generaste con Gemini en el chat de Claude.

Si tienes una imagen de tu wireframe, puedes adjuntarla junto con el prompt (Claude acepta imágenes).

### 2.3 Revisa el Artifact

Claude generará un **artifact** con el código HTML/CSS completo.

En el panel derecho verás una vista previa de cómo se ve tu página.

**Revisa que incluya:**
- [ ] Foto de perfil (placeholder circular)
- [ ] Tu nombre y bio
- [ ] Al menos 5 botones de enlaces
- [ ] Estilos aplicados según tus preferencias

### 2.4 Itera si es Necesario

Si algo no se ve como esperabas, **pide ajustes**. Ejemplos:

```
"Hazlo más oscuro, el fondo debería ser casi negro"
```

```
"Los botones están muy juntos, agrega más espacio entre ellos"
```

```
"Cambia la fuente del título a algo más bold"
```

> 💡 **Tip:** Sé específico. "No me gusta" no ayuda. "El color del botón debería ser más azul" sí ayuda.

### 2.5 Copia el Código a tu Proyecto

1. En el artifact, haz clic en **"Copy"** o selecciona todo el código
2. Abre VS Code con tu proyecto MyLinks
3. Abre `index.html`
4. **Reemplaza todo el contenido** con el código de Claude
5. Guarda (`Ctrl+S`)

### 2.6 Personaliza el Contenido

Edita `index.html` para poner TU información real:

1. **Tu nombre** - Reemplaza el placeholder
2. **Tu bio** - Una línea sobre ti
3. **Tus enlaces** - Reemplaza los 5 enlaces de ejemplo con los tuyos:
   - GitHub
   - LinkedIn
   - Portfolio (si tienes)
   - Email
   - Otro que quieras

### 2.7 Commit #1

Guarda tu progreso en Git:

```bash
git add index.html
git commit -m "feat: generar MyLinks con IA y personalizar contenido"
```

✅ **Checkpoint:** Tu código generado por IA está en tu proyecto local con tu información personalizada. Commit #1 hecho.

---

## Parte 3: Verificación Responsive (20 min)

### 3.1 Abre en Live Server

1. En VS Code, click derecho en `index.html`
2. Selecciona **"Open with Live Server"**

### 3.2 Abre DevTools

Presiona `F12` (o `Ctrl+Shift+I`) para abrir Chrome DevTools.

### 3.3 Activa Modo Responsive

1. Haz clic en el ícono de dispositivos (📱💻) o presiona `Ctrl+Shift+M`
2. Verás tu página en modo responsive

### 3.4 Prueba en Móvil (375px)

1. En el menú de dispositivos, selecciona **"iPhone SE"** (o cualquier ~375px)
2. Verifica:

| Verificar | ✓ |
|-----------|---|
| El contenido no se corta ni sale de la pantalla | ☐ |
| El texto es legible (no muy pequeño) | ☐ |
| Los botones son fáciles de tocar (altura suficiente) | ☐ |
| No hay scroll horizontal | ☐ |

### 3.5 Prueba en Desktop (768px+)

1. Cambia a **"iPad"** o arrastra el ancho a 768px+
2. Verifica:

| Verificar | ✓ |
|-----------|---|
| El contenido está centrado | ☐ |
| Los botones tienen un ancho máximo (no se estiran infinito) | ☐ |
| El hover funciona al pasar el mouse | ☐ |
| El espaciado se ve proporcional | ☐ |

### 3.6 Ajusta si es Necesario

Si algo no funciona bien en algún tamaño:

1. Vuelve a Claude.ai
2. Describe el problema específico:
   ```
   "En móvil (375px) los botones se ven muy pequeños.
   Aumenta el padding a 1rem y el font-size a 1.1rem"
   ```
3. Copia el código corregido a tu proyecto

### 3.7 Commit #2

Guarda los ajustes responsive:

```bash
git add index.html
git commit -m "fix: ajustar diseño responsive para móvil y desktop"
```

✅ **Checkpoint:** Tu MyLinks funciona correctamente en 375px y 768px+. Commit #2 hecho.

---

## Parte 4: Publicación en GitHub Pages (20 min)

### 4.1 Push a GitHub

Primero, sube tus cambios:

```bash
git push
```

### 4.2 Activa GitHub Pages

1. Ve a tu repositorio en GitHub: `github.com/TU-USUARIO/mylinks`
2. Haz clic en **"Settings"** (pestaña, arriba a la derecha)
3. En el menú lateral izquierdo, busca **"Pages"**
4. En **"Source"**, selecciona:
   - Branch: **main**
   - Folder: **/ (root)**
5. Haz clic en **"Save"**

### 4.3 Espera el Deploy

GitHub Pages tarda 1-3 minutos en publicar tu sitio.

1. Actualiza la página de Settings → Pages
2. Verás un mensaje: **"Your site is live at https://TU-USUARIO.github.io/mylinks/"**

### 4.4 Verifica tu Sitio

1. Haz clic en el link o cópialo en una nueva pestaña
2. ¡Tu sitio está en internet! 🎉

**Prueba en tu teléfono real:**
1. Copia la URL
2. Envíatela por WhatsApp o email
3. Ábrela en tu celular
4. Verifica que se ve bien

### 4.5 Troubleshooting

Si ves un error 404:

| Problema | Solución |
|----------|----------|
| Archivo no se llama `index.html` | Renómbralo exactamente a `index.html` |
| Branch incorrecto | Verifica que seleccionaste `main` |
| No has hecho push | Ejecuta `git push` y espera 2 min |
| Acabas de activar Pages | Espera 3-5 minutos y refresca |

✅ **Checkpoint:** Tu MyLinks está publicado con URL pública funcionando.

---

## Parte 5: Refinamiento Final (35 min - Post-clase)

> Esta parte la completas después de clase, antes de la entrega.

### 5.1 Mejoras de Contenido

- [ ] Verifica que todos tus enlaces funcionan (haz clic en cada uno)
- [ ] Agrega una foto de perfil real (opcional pero recomendado)
- [ ] Revisa ortografía en nombre y bio
- [ ] Asegúrate de tener al menos 5 enlaces

### 5.2 Mejoras de Estilo

Opciones para mejorar tu diseño:

```
"Agrega un degradado sutil al fondo"
"Incluye iconos de Font Awesome en los botones de redes sociales"
"Agrega una animación suave cuando aparece la página"
```

### 5.3 Commits Finales

Haz commits mientras trabajas:

```bash
# Commit #3
git add .
git commit -m "style: mejorar diseño visual y agregar iconos"

# Commit #4 (final)
git add .
git commit -m "feat: agregar enlaces finales y foto de perfil"

# No olvides push
git push
```

### 5.4 Verifica el Deploy Final

Después de cada push, espera 1-2 minutos y verifica que los cambios se reflejen en tu URL de GitHub Pages.

---

## 📝 Entrega

### Checklist Final

- [ ] MyLinks publicado en GitHub Pages con URL funcionando
- [ ] 5+ enlaces personalizados
- [ ] Diseño responsive (verificado en 375px y 768px)
- [ ] 4+ commits descriptivos en el historial
- [ ] Paleta de colores coherente
- [ ] Nombre y bio personalizados

### Entregable

📦 **Envía:**

1. **URL de GitHub Pages:** `https://tu-usuario.github.io/mylinks/`
2. **URL del repositorio:** `https://github.com/tu-usuario/mylinks`

### Rúbrica de Evaluación

| Criterio | Excelente (25) | Bueno (20) | Satisfactorio (15) | Bajo (10) |
|----------|----------------|------------|-------------------|-----------|
| **Estructura y Git** | 4+ commits descriptivos, estructura clara de archivos | 3 commits, estructura organizada | 2 commits, estructura básica | 1 commit o estructura desordenada |
| **Diseño Responsive** | Funciona perfectamente en móvil y desktop | Funciona bien en ambos tamaños | Funciona en uno, problemas en otro | No responsive o roto en múltiples tamaños |
| **Contenido y Estilo** | 5+ enlaces, paleta coherente, tipografía personalizada | 4 enlaces, estilos aplicados | 3 enlaces, estilos básicos | Menos de 3 enlaces o sin estilos |
| **Publicación** | GitHub Pages funcionando, URL pública, sin errores | URL funciona con errores menores | URL funciona pero con problemas visuales | No publicado o URL rota |

**Escala de calificación:**
- A (90-100): Excelente
- B (80-89): Bueno
- C (70-79): Satisfactorio
- F (<70): Necesita mejora
