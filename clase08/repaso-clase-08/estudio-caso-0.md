# INSTRUCTOR: Script Espejo (Caso de Estudio 0) - Clase 08
> Este archivo es el flujo técnico que el instructor debe ejecutar en vivo. NO es para los alumnos, es tu "partitura" de código y clicks.

---

## 1. Entorno de Vuelo (Ventanas Pre-abiertas)
Asegúrate de tener esto configurado ANTES de que comience la clase:
- **Navegador Pestaña 1:** `platform.openai.com/tokenizer` (Limpiar todo el texto).
- **Navegador Pestaña 2:** Claude.ai (Login activo, abrir un chat nuevo y vacío).
- **Navegador Pestaña 3:** Gemini.google.com (Login activo, chat vacío).
- **Navegador Pestaña 4:** GitHub (Login activo).
- **VS Code:** Abierto con una carpeta local vacía llamada `clase08-mylinks`.

---

## 2. Demo Rápida: El "Sabor" (2 Minutos)
> **Objetivo:** Mostrar que el español es más "caro" que el inglés computacionalmente y asentar el concepto de Token.

1. Ve a la Pestaña 1 (Tiktoken).
2. Pega este texto exacto en **inglés**:
   `The quick brown fox jumps over the lazy dog`
   👉 **Resultado a mencionar:** "10 caracteres, pero miren cómo casi cada palabra es 1 solo bloque de color (1 token). Gasta 9 tokens".
3. Ahora borra y pega lo mismo en **español**:
   `El rápido zorro marrón salta sobre el perro perezoso`
   👉 **Resultado a mencionar:** "Misma idea, pero miren cómo 'rápido', 'marrón', 'perezoso' se parten en dos o tres colores. Gasta 16 tokens. Hablarle a la IA en español gasta más de su 'memoria' que hablarle en inglés".

---

## 3. Laboratorio Principal: Paso a Paso (El "Cómo")
> Vamos a simular el ciclo completo: Vibe Coding irresponsable -> Prompt Scaffolding -> Artifacts -> GitHub Pages.

### Paso A: Generando el Desastre (V1)
1. Ve a la Pestaña 2 (Claude).
2. Envía este prompt vago (cero esfuerzo):
   **Prompt:** `"Eres un desarrollador web. Crea el codigo de un clon de linktree de color negro"`
3. **Acción del Instructor:** Claude generará el código. Seguramente no tendrá Artifact automático, o si lo tiene, será muy feo.
   👉 *Comentario:* "Esto es Vibe Coding irresponsable. Sin brief, la IA alucina el diseño. Este prompt gasta pocos tokens en la entrada (Input) pero genera mucha basura en la salida (Output)".

### Paso B: El Prompt Scaffolding (V2)
1. Ve a la Pestaña 3 (Gemini).
2. Pega el Prompt Scaffolded (plantilla):
   **Prompt a copiar:**
   ```text
   Actúa como un diseñador UI/UX experto y ayúdame a crear el layout para mi aplicación web de Links.
   Necesito que apliques las siguientes configuraciones:
   - Tema General: Minimalista y elegante.
   - Colores Principales: Fondo oscuro profundo (ej. #121212), colores de acento en tonos neón sutiles (ej. #00FFCC para hover).
   - Tipografía: Fuente moderna sans-serif (ej. Inter o Roboto).
   ... [Pega el prompt completo del LAB_ACTUAL]
   Por favor, utiliza HTML5 semántico y Tailwind CSS (vía CDN) para el diseño. 
   ```
3. Copia la salida detallada que te dio Gemini.

### Paso C: Generación Real con Claude (Artifact)
1. Regresa a la Pestaña 2 (Claude). Abre un **Chat Nuevo**.
2. Pega el prompt detallado que te devolvió Gemini.
   **Añade esta instrucción crucial al final:** `"Genera el resultado en un Artifact renderizable."`
3. **Acción del Instructor:** Espera que Claude dibuje la UI perfecta en el panel derecho.
   👉 *Comentario:* "Este es el poder del rol y del contexto detallado. Demoramos 1 minuto más pensando en el prompt, y nos ahorramos horas de CSS".

### Paso D: Extracción y Vuelo Local
1. En el Artifact de Claude, haz click en "Copy Code" (esquina superior derecha).
2. Ve a VS Code (carpeta `clase08-mylinks`).
3. Crea el archivo `index.html`. Pega el código.
4. (Opcional) Si Claude separó el CSS, crea `style.css` y conéctalos.
5. Clic derecho en `index.html` -> "Open with Live Server". Confirmar que se ve igual que en el Artifact.

### Paso E: El Gran Final (GitHub Pages)
1. Ve a VS Code / Terminal. Ejecuta en vivo:
   ```bash
   git init
   git add .
   git commit -m "feat: mylinks final"
   ```
2. Ve a la Pestaña 4 (GitHub). Crea repo público llamado `mylinks-clase08`.
3. Copia el comando `git remote add origin...` y haz el `git push -u origin main`.
4. En GitHub, ve a **Settings > Pages**.
5. Source: `Deploy from a branch`. Branch: `main` -> Save.
6. Espera 1 minuto recargando. Cuando salga el link, cópialo y mándalo al chat de Slack/Zoom de los alumnos pidiendo que lo abran en sus celulares.

---

## 4. Zonas de Fricción Frecuentes (Qué fallará en los alumnos)

| El Alumno Dice... | El Problema Real | Cómo Resolverlo en 10 Seg. |
| :--- | :--- | :--- |
| *"Claude me dio solo código plano en el chat negro, no veo la UI"* | Claude a veces asume que solo quieres copiar el texto, falla en leer el "intento de preview". | Dile: "Dile a Claude: *'Por favor, pon este mismo código en un Artifact para poder previsualizarlo'*." |
| *"Mi página de GitHub dice Error 404 Site Not Found"* | Pueden ser 3 cosas: 1. No esperó los 2 mins. 2. Su archivo se llama `Index.html` (mayúscula). 3. Está en otra branch. | Dile: "Revisa Minúsculas en tu archivo principal, y asegúrate que la branch seleccionada sea 'main' (no 'none'). Si todo está bien, cuenta hasta 60 y refresca." |
| *"En mi celular la página se ve cortada"* | Claude probablemente olvidó la meta tag del viewport en su generación de HTML. | Dile: "Vuelve a tu IDE y pega justo debajo de `<head>` esto: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`". |
| *"Me quedé sin mensajes en Claude"* | Claude tiene restricciones estrictas. Iterar a cada rato por un color agota el saldo rápido. | Dile: "Para eso era el Vibe Coding responsable. Pasa a Gemini o ChatGPT y pídeles el código final con el prompt estructurado". |
