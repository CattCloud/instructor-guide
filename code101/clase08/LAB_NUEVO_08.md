
# Lab 08: Vibe Coding — De idea a sitio publicado

> 🚀 **Proyecto del Módulo:** MyLinks — Tu hub personal en la web.
>
> 📌 **Este lab:** Convertir tu **Spec Sheet del Lab 07** en un sitio web real, usando **Prompt Scaffolding** sobre Claude, iterando con criterio, extrayendo a VS Code y publicando en GitHub Pages.
>
> ⚠️ **Lab Calificado:** Este lab será evaluado con la rúbrica del final.

## 🎯 Objetivos del Lab

1. Diferenciar un **prompt vago (V1)** de un **prompt scaffolded (V2)** observando el output real de cada uno.
2. Construir un Prompt Scaffolded usando tu Spec Sheet y mockups del Lab 07.
3. **Iterar con criterio** (código real, no instrucciones vagas) para personalizar componentes.
4. Extraer el código generado por la IA a tu proyecto local en VS Code.
5. Publicar tu MyLinks en GitHub Pages y obtener una **URL pública en vivo**.

---

## 🔑 Conceptos Clave

- **Prompt Scaffolding** — Construir una instrucción estructurada por bloques (Rol + Contexto + Tarea + Restricciones + Formato) para guiar a la IA hacia un resultado exacto.
- **Vibe Coding** — Programar describiendo en lenguaje natural lo que quieres y dejando que la IA genere el código. Tú supervisas, iteras y validas.
- **Artifact** — Panel renderizable de Claude donde el código se ejecuta en vivo a la derecha del chat.
- **Iterar con criterio** — Refinar el output de la IA con **referencias concretas** (CSS real de uiverse.io, valores hex específicos), no con caprichos vagos ("hazlo bonito").
- **GitHub Pages** — Hosting gratuito que convierte tu repositorio en una web pública con su propia URL.

---

## ⚙️ Setup Inicial (5 min)

### Prerrequisito obligatorio

Necesitas los **3 entregables del Lab 07** en una carpeta accesible:

| ✓ | Archivo | Para qué se usa |
|---|---------|-----------------|
| ☐ | `spec-sheet.txt` | Define el Rol, Contexto y Restricciones de tu prompt |
| ☐ | `mockup-mobile.png` | Adjuntas a Claude para que extraiga colores y proporciones móvil |
| ☐ | `mockup-desktop.png` | Adjuntas a Claude para que adapte el diseño a desktop |

### Cuentas y herramientas

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | Cuenta en [Claude.ai](https://claude.ai/){:target="_blank"} | Login funcionando |
| ☐ | Cuenta en [Gemini](https://gemini.google.com/){:target="_blank"} | Login funcionando |
| ☐ | Repositorio MyLinks de la Clase 06 | `git status` corre sin errores |
| ☐ | VS Code con Live Server | Lo usaste en clases anteriores |

---

## 🚦 Antes de arrancar: ¿Qué tipo de Vibe Coder vas a ser hoy?

> 🎯 **Marco mental del lab.** Andrej Karpathy acuñó el término *Vibe Coding* en febrero de 2025 para describir cómo cambia la programación cuando dejas que la IA escriba el código. Pero hay 2 formas de hacerlo, y la diferencia define a un programador profesional:

| ❌ Vibe Coding Irresponsable | ✅ Vibe Coding Profesional |
|---|---|
| Prompt vago → acepta sin leer | Prompt scaffolded → evalúa el output |
| Copia y pega sin entender qué hace el código | Entiende la estructura, aunque no haya escrito cada línea |
| Si algo falla, no sabe por dónde empezar | Localiza el error y le da instrucción precisa a la IA |
| El código es una caja negra ("así me lo generó la IA") | El código es **su responsabilidad** — la IA es solo una herramienta |

> 💡 **Tu objetivo hoy:** salir de este lab sabiendo qué hace cada bloque del HTML/CSS que la IA generó por ti.

---

## Parte 1 · V1: El Prompt Vago (10 min)

> 🧪 **Idea clave:** Antes de hacer las cosas bien, vamos a hacerlas mal a propósito. Esto te da una vara de comparación real.

### 1.1 Abre Claude y pega este prompt zero-shot

Abre [claude.ai](https://claude.ai/){:target="_blank"} en una pestaña nueva y pega **literal** este prompt sin modificar nada:

```
Crea una aplicación web tipo linktree que tenga botones para
mis redes sociales y una sección para mi información de perfil.
```

### 1.2 Observa el resultado

Cuando Claude termine de generar:

- Mira el Artifact a la derecha. ¿Aparece tu nombre? ¿Tus colores? ¿Tu estilo?
- **No.** Es genérico. Podría ser de cualquier persona.

### 1.3 Reflexiona

Cero contexto → la IA adivinó **todo**. Eso es **Vibe Coding Irresponsable**: aceptar el primer output sin haber dado contexto.

✅ **Checkpoint:** Generaste un V1 vago y entendiste por qué no es lo que quieres. Ahora vamos a hacerlo bien.

---

## Parte 2 · V2: Prompt Scaffolded con Gemini (20 min)

> 🧠 **Idea clave:** Gemini es excelente razonando y organizando contexto largo. Lo usaremos como **planificador** para convertir tu Spec Sheet en un prompt estructurado. Claude es el **constructor** que ejecuta ese prompt.

### 2.1 Abre Gemini en otra pestaña

Ve a [gemini.google.com](https://gemini.google.com/){:target="_blank"}.

### 2.2 Pega esta plantilla de Scaffolding

Copia, pega y **NO ejecutes todavía** — vas a llenarla primero:

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

### 2.3 Llena la plantilla con tu Spec Sheet

Abre tu `spec-sheet.txt` del Lab 07, copia **todo el contenido**, y pégalo en el lugar marcado `[PEGA AQUÍ...]` de la plantilla.

### 2.4 Ejecuta en Gemini

Envía el prompt. Gemini te devolverá un **prompt estructurado** mucho más largo y específico que el original.

**Cópialo entero** (todo el bloque que Gemini generó).

### 2.5 Disparar el V2 en Claude (con tus mockups)

1. Vuelve a [claude.ai](https://claude.ai/){:target="_blank"} y abre **conversación nueva** (no la del V1).
2. **Antes de enviar el mensaje**, adjunta los 2 mockups del Lab 07:
   - Clic en el ícono de **clip 📎**.
   - Selecciona `mockup-mobile.png` Y `mockup-desktop.png`.
3. Pega el prompt scaffolded que te dio Gemini.
4. Envía.

> 💡 **Por qué adjuntas ambos mockups:** Claude lee ambas imágenes, extrae colores y proporciones, y construye un sitio **responsive real** que funciona desde móvil hasta desktop. Si solo subes uno, la IA tendrá que adivinar la otra vista.

### 2.6 Compara V1 vs V2

Abre las 2 conversaciones lado a lado. Mira el Artifact del V1 y el del V2.

- **V1:** genérico, podría ser de cualquiera.
- **V2:** tiene tu nombre, tus colores, tu estilo, tus links.

Esa es la diferencia entre Vibe Coding Irresponsable y Profesional.

✅ **Checkpoint:** Tienes tu MyLinks generado en Claude V2 con tus tokens, layout y mockups del Lab 07.

---

## Parte 3 · Itera con Código Real: Botones de uiverse.io (15 min)

> 🎨 **Idea clave:** El V2 ya está bien, pero los botones son los que generó Claude por defecto. Vamos a **personalizarlos con código real** de [uiverse.io](https://uiverse.io){:target="_blank"} — una librería open-source con cientos de componentes CSS listos. **No copiamos el botón tal cual** — le damos su código a Claude como referencia para que adapte los botones de TU MyLinks.

### 3.1 Encuentra un botón que te guste

1. Abre [uiverse.io/buttons](https://uiverse.io/buttons){:target="_blank"}.
2. Filtra/scrollea hasta encontrar un botón que combine con tu estilo (brutalista, minimalista, neón, etc.).
3. Clic en el botón → copia el **código CSS** completo (el sitio te separa HTML y CSS).

### 3.2 Pásale el código a Claude con instrucción precisa

En tu conversación V2 de Claude, pega esto sustituyendo el bloque entre corchetes:

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

### 3.3 Evalúa el resultado

Mira el nuevo Artifact. ¿Los botones se ven como esperabas? Si no:

- Si el efecto hover no funciona → "El hover no se aplica, asegúrate de incluir el `:hover` en el CSS final".
- Si los colores quedaron raros → "Los botones quedaron muy oscuros, usa el color `acento` que es #_______".

> ⚠️ **Esto es iterar con criterio.** Cero "hazlo más bonito". Siempre con instrucción específica que la IA pueda actuar.

✅ **Checkpoint:** Tus botones tienen estilo personalizado, generado por IA pero adaptado a tu paleta.

---

## Parte 4 · Extracción a VS Code + Live Server (10 min)

> 🛠 **Idea clave:** El código vive en Claude. Hay que sacarlo y ponerlo en tu máquina como un proyecto real.

### 4.1 Copia el Artifact final

1. En el Artifact de la última versión (con los botones personalizados), clic en el botón **"Copy"** (ícono arriba del código).

### 4.2 Crea el archivo en VS Code

1. Abre VS Code en tu repositorio MyLinks de la Clase 06.
2. Abre `index.html`.
3. **Reemplaza TODO el contenido** del archivo con lo que copiaste de Claude.
4. Guarda con `Ctrl+S`.

### 4.3 Verifica con Live Server

1. Clic derecho sobre `index.html` → **"Open with Live Server"**.
2. Tu navegador abre `http://127.0.0.1:5500/index.html`.
3. Coloca Claude a la izquierda y Live Server a la derecha. **¿Se ven iguales?**

Si hay diferencias visuales (una sombra que cambia, un color que se ve distinto), ajústalas directamente en VS Code — ya tienes el CSS suficiente de las clases anteriores.

### 4.4 Commit del progreso

En la terminal integrada de VS Code:

```bash
git add index.html
git commit -m "feat: generar MyLinks con IA y personalizar botones"
```

✅ **Checkpoint:** Tu MyLinks corre en localhost con tu diseño personalizado. Commit hecho.

---

## Parte 5 (Desafío Calificado) · Publicación en GitHub Pages (~30 min, post-clase)

> 🌍 **Idea clave:** Tu código existe solo en tu computadora. El mundo no puede verlo todavía. GitHub Pages convierte tu repo en una web pública gratuita.

### 5.1 Sube tu código

```bash
git push
```

Si es la primera vez que pusheas en este repo:

```bash
git push -u origin main
```

### 5.2 Activa GitHub Pages

1. Ve a tu repo en GitHub: `github.com/TU-USUARIO/mylinks`.
2. Pestaña **Settings** (arriba derecha).
3. Menú lateral izquierdo → **Pages**.
4. En `Source`: **Deploy from a branch**.
5. En `Branch`: **main** + **/ (root)**.
6. Clic en **Save**.

### 5.3 Espera el deploy (1-3 min)

Refresca la página de Settings → Pages. Cuando aparezca:

> ✅ **Your site is live at https://TU-USUARIO.github.io/mylinks/**

…tu sitio está publicado.

### 5.4 Prueba en tu celular

1. Copia la URL.
2. Envíatela por WhatsApp a ti mismo.
3. Ábrela en tu celular.
4. **Prueba todos los enlaces.**

### 5.5 Comparte en el chat de la clase

Pega tu URL pública en el chat. Mira las URLs de tus compañeros. Compara estilos.

> 💡 **Esto NO es show off.** Es validación social del trabajo de un módulo entero. Lleva tu URL al LinkedIn — ya tienes algo público para mostrar.

### 5.6 Troubleshooting rápido

| Problema | Solución |
|----------|----------|
| Error 404 al abrir la URL | Verifica que el archivo se llame exactamente `index.html` |
| Pages dice "site not built" | Espera 3-5 min más, GitHub está construyendo |
| Cambios no aparecen tras `git push` | El deploy tarda 1-2 min después del push |

✅ **Checkpoint final:** Tu MyLinks está vivo en internet con URL pública.

---

## 🟢 Bonus (Opcional, si te queda tiempo)

### Bonus 1 · Background con patrón sutil

Visita [patterncraft.fun](https://patterncraft.fun){:target="_blank"}. Elige un patrón, ajusta los colores a tu paleta, copia el CSS y pídele a Claude que lo aplique como background del body con la misma técnica de la Parte 3 (instrucción específica + código real adjunto).

### Bonus 2 · Iconos en los botones

Pídele a Claude que agregue iconos de [Font Awesome](https://fontawesome.com/){:target="_blank"} o [Lucide](https://lucide.dev/){:target="_blank"} junto al texto de cada botón.

---

## ✅ Cierre y Verificación

Antes de cerrar el lab, valida:

- [ ] Tu MyLinks corre en `localhost` con Live Server.
- [ ] Está publicado en GitHub Pages con URL pública funcionando.
- [ ] Diseño coherente con el `spec-sheet.txt` original.
- [ ] Mínimo 3 commits descriptivos en el historial.
- [ ] URL compartida en el chat de la clase.

---

## 📝 Entrega

📦 **Envía por la plataforma del curso:**

1. **URL de GitHub Pages:** `https://tu-usuario.github.io/mylinks/`
2. **URL del repositorio:** `https://github.com/tu-usuario/mylinks`

---

## 📊 Rúbrica de Evaluación (100 pts)

| Criterio | Excelente (25) | Bueno (20) | Satisfactorio (15) | Bajo (10) |
|----------|----------------|------------|--------------------|-----------|
| **Prompt Scaffolded y uso del Spec Sheet** | Prompt completo (Rol+Contexto+Tarea+Restricciones+Formato), Spec Sheet del Lab 07 incorporado, mockups adjuntos a Claude | Prompt estructurado básico, Spec Sheet usado parcialmente, 1 mockup adjunto | Prompt mediocre, contexto débil, sin mockups | Prompt vago tipo zero-shot, sin Spec Sheet |
| **Iteración con criterio** | Aplicó iteración con código real de uiverse.io adaptado a su paleta, instrucción específica a Claude | Aplicó iteración pero con instrucciones genéricas o copió el botón tal cual | Iteración mínima, botones casi sin cambios | No iteró o pegó código sin entender |
| **Extracción y Diseño Responsive** | Código en VS Code corre en Live Server, paridad visual con Claude, responsive verificado en móvil y desktop | Funciona en VS Code con problemas menores, responsive parcial | Funciona pero con problemas visibles, responsive roto en algún tamaño | No corre localmente o no es responsive |
| **Publicación y Coherencia** | GitHub Pages funcionando, URL pública sin errores, diseño coherente con Spec Sheet, 3+ commits descriptivos | Publicado con errores menores, 2-3 commits | Publicado con problemas visuales, 1-2 commits | No publicado o URL rota |

**Escala de calificación:**

| Rango | Nota | Descripción |
|-------|------|-------------|
| 90-100 | A | Excelente |
| 80-89 | B | Bueno |
| 70-79 | C | Satisfactorio |
| < 70 | F | Necesita mejora |

> Ver rúbrica detallada con evidencia a revisar en [rubric.md](rubric.md).
