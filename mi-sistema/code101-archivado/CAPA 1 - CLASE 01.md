# CAPA 1 — CLASE 01: Setup y Web Moderna (v2)

> **Proyecto del Módulo:** `mi-perfil` — La primera página web del alumno. Se construye progresivamente a lo largo de las 4 clases del módulo. Al final de esta clase, el alumno tiene: su HTML base, su nombre, su foto, su bio y su lista de hobbies funcionando en el navegador con Live Server.

> **Contexto de inicio de cohorte:**
> Gabriela (coordinadora académica) conduce el Slide 00 completo antes de que el instructor entre. El instructor NO presenta la estructura del curso, las reglas, el sistema de evaluación ni las herramientas. Solo hace su propia presentación personal y la de los alumnos. Luego entra directo al contenido técnico.

> **Regla de cadena Problema-Solución de la clase:**
> `El alumno no tiene entorno configurado` → `VS Code + extensiones listas` → `HTML en blanco` → `Hola Mundo en el navegador` → `Estructura base del documento` → `Etiquetas de contenido` → `Primera página web personal funcionando`

---

## MOMENTO 1 — Arranque: Presentaciones y Puente al Código
**Tiempo:** 15 min
**Contexto:** Gabriela acaba de terminar el Slide 00. El instructor toma el control.

**Sub-momentos:**
- 1.1 **Presentación del instructor (2 min):** Nombre, background como desarrollador, por qué está aquí como instructor. Breve, directo, sin show. El tono que quieres que tenga el curso lo estableces en estos 2 minutos.
- 1.2 **Ronda de presentaciones de alumnos (8 min):** Estructura en el chat: *Nombre — ¿A qué te dedicas? — ¿Qué te trajo aquí?* Leer en voz alta las respuestas del chat o dar el paso por micrófono. Irlas conectando con el recorrido del módulo.
- 1.3 **Transición táctica: verificar Canvas (3 min):** Pedir a todos que abran Canvas y naveguen al Módulo 1 → Clase 01 → Laboratorio. Esto no es teoría, es logística — asegurarse de que todos tienen acceso antes de avanzar. Quien no tenga acceso lo resuelve con Gabriela en paralelo (mensaje por WhatsApp).
- 1.4 **El único objetivo del día (2 min):** EN PANTALLA: Excalidraw — mostrar el wireframe del proyecto final del módulo (perfil personal completo). *"Al final de esta clase tienen este punto de partida. En las próximas 3 clases lo vamos a escalar. Hoy arrancamos."*

> **Nota táctica:** No alargar las presentaciones. Si hay muchos alumnos, hacer que los que no hablen escriban en el chat. El objetivo real de este momento no es conocerse — es establecer el tono de trabajo activo.

---

## MOMENTO 2 — La Web: ¿Qué construimos y cómo funciona?
**Tiempo:** 20 min
**Objetivo:** El alumno entiende qué es una página web, el modelo cliente-servidor, y tiene una razón clara de por qué HTML es el punto de partida.

**Sub-momentos:**
- 2.1 **Quiz Pre-Lab — 2 preguntas (5 min):** EN PANTALLA: Excalidraw — las preguntas como texto. No es evaluación, es activación del pensamiento.
  - *Pregunta 1: ¿Qué crees que pasa cuando escribes `google.com` y presionas Enter?* → Llevar hacia el concepto de DNS y dominio.
  - *Pregunta 2: ¿Alguna vez has visto el código de una página web? ¿Cómo?* → Preparar el terreno para abrir DevTools en vivo.

- 2.2 **Diagrama cliente-servidor en Excalidraw (8 min):** EN PANTALLA: Excalidraw — dibujar en vivo (o mostrar el diagrama ya preparado). Elementos: Cliente (navegador), flecha de solicitud, Servidor, flecha de respuesta, documento HTML/CSS/JS. El DNS como "guía telefónica". La frase ancla: *"El cliente pide, el servidor sirve."*

- 2.3 **DevTools en vivo — ver el código de una página real (5 min):** EN PANTALLA: Navegador. Abrir una página conocida (Apple, Netflix, Coca-Cola). Clic derecho → Inspeccionar → mostrar el código HTML. Mensaje clave: *"Esto que ven es exactamente lo que van a aprender a escribir. Hoy no lo entenderán todo, pero para la Clase 04 sí."*

- 2.4 **Bienvenida oficial al Módulo 1 + qué significa HTML (2 min):** EN PANTALLA: Excalidraw — imagen de la trinidad HTML/CSS/JS (ya importada como imagen en el canvas). Los 3 roles: esqueleto (HTML), apariencia (CSS), comportamiento (JS). Hoy empieza el esqueleto.

> **Riesgo principal:** El diagrama de cliente-servidor tiende a alargarse con preguntas. Está bien profundizar hasta 2 preguntas espontáneas. Si hay más, decir: *"Esto lo vamos a entender mejor cuando construyamos la página — sigamos."*

---

## MOMENTO 3 — Setup: Entorno Listo para Codificar
**Tiempo:** 20 min
**Objetivo:** El 100% de los alumnos tiene VS Code abierto con Live Server instalado y la carpeta del proyecto creada. El Hola Mundo está visible en el navegador.

**Sub-momentos:**
- 3.1 **VS Code + extensiones (10 min):** EN PANTALLA: Navegador (descarga) → VS Code. Instalar en orden:
  1. **Live Server** — la crítica. Sin ella no hay servidor local.
  2. **Auto Rename Tag** — utilidad inmediata para HTML.
  3. **Prettier** — hábito de código limpio desde el día 1.
  
  Checkpoint: *"Cuando tengan el botón `Go Live` abajo en VS Code, mándenme un screenshot al WhatsApp."* No avanzar hasta que la mayoría confirme.

- 3.2 **Crear la carpeta y el archivo `index.html` (5 min):** EN PANTALLA: VS Code. Crear carpeta `mi-perfil` → abrir en VS Code → nuevo archivo `index.html`. Explicar por qué se llama `index` (es el archivo maestro, el punto de entrada estándar en la web).

- 3.3 **Hola Mundo con Live Server (5 min):** EN PANTALLA: PANTALLA DIVIDIDA — VS Code a la izquierda, navegador a la derecha. Escribir solo `Hola Mundo` en la línea 1 del archivo, guardar, activar Go Live. Ver el texto aparecer en el navegador.
  
  Mensaje de impacto: *"Acaban de escribir, guardar y ejecutar su primer código en vivo. Ya están programando."*
  
  Checkpoint: *"Mándenme el screenshot del navegador con su Hola Mundo."*

> **Nota táctica:** Este es el punto ideal de receso. Quien no tenga el Hola Mundo funcionando antes del break tiene que resolverlo ahora — no después. El Momento 4 depende de este punto.

---

## ⏸ RECESO — 30 min

> **Criterio de corte para el receso:** El alumno debe tener VS Code abierto, Live Server activo y algo visible en el navegador (aunque sea "Hola Mundo"). Si hay alguien que no lo tiene, el instructor o Gabriela lo atiende por WhatsApp antes de retomar.

---

## MOMENTO 4 — HTML I: Estructura Base y Primeras Etiquetas
**Tiempo:** 30 min
**Objetivo:** El alumno entiende qué es una etiqueta, escribe el boilerplate de HTML5, y agrega su nombre con `h1` y un párrafo con `p`.

**Sub-momentos:**
- 4.1 **¿Qué es una etiqueta? + cuántas hay (8 min):** EN PANTALLA: Excalidraw — imagen de anatomía de una etiqueta (`<etiqueta atributo="valor">contenido</etiqueta>`). Apertura, contenido, cierre. Los atributos modifican el comportamiento, no la función.
  
  Interacción con IA en vivo: preguntar a ChatGPT/Gemini *"¿Cuántas etiquetas tiene HTML? Responde solo el número."* → 114. Pausa dramática. Segunda pregunta: *"¿Cuántas necesito dominar para el mundo laboral?"* → ~25. Mensaje: *"El 20% que hace el 80% del trabajo. Esas son las que vemos hoy."*

- 4.2 **Boilerplate HTML5 — línea por línea (12 min):** EN PANTALLA: VS Code + Navegador. Borrar el "Hola Mundo". Escribir `!` + Enter para generar el boilerplate. Ir línea por línea con comentario para cada una:
  - `<!DOCTYPE html>` → "Le avisa al navegador que esto es HTML5 moderno"
  - `<html lang="es">` → "El contenedor raíz — cambiar de `en` a `es`"
  - `<head>` → "La configuración — el usuario no la ve"
  - `<meta charset="UTF-8">` → "Permite la ñ y las tildes"
  - `<meta name="viewport">` → "La responsividad — se ve bien en celular"
  - `<title>` → "El nombre de la pestaña — cambiar a tu nombre"
  - `<body>` → "Aquí va todo lo que SÍ ve el usuario"

- 4.3 **`h1` y `p` + intro a Lorem Ipsum (10 min):** EN PANTALLA: VS Code. Dentro del `<body>`, escribir `<h1>` con el nombre del instructor, luego `<p>` con Lorem Ipsum (truco de VS Code: escribir `lorem` + Enter). Ver en vivo el resultado en el navegador.
  
  Regla de oro de `h1`: *"Solo uno por página. No es para hacer la letra grande — es para decirle a Google y a los lectores de pantalla cuál es el título principal."*
  
  Checkpoint: *"Quiero ver su h1 con su nombre real en el chat. Screenshot al WhatsApp."*

> **Riesgo principal:** El boilerplate siempre tiene alguien que "borra sin querer" una línea. Ir despacio en la sección 4.2 y pedir confirmación en el chat después de escribir el esqueleto completo.

---

## MOMENTO 5 — HTML II: Imagen, Accesibilidad y Listas
**Tiempo:** 25 min
**Objetivo:** El alumno agrega su foto con `<img>` (incluyendo `alt`), su bio con `<p>` y su lista de hobbies con `<ul>` y `<li>`.

**Sub-momentos:**
- 5.1 **Etiqueta `<img>` y el atributo `alt` (8 min):** EN PANTALLA: Excalidraw — imagen de anatomía de `<img src="..." alt="...">`. Puntos clave:
  - Es una etiqueta que no se cierra (sin `</img>`).
  - `src` puede ser ruta relativa (`./foto.jpg`) o URL absoluta (`https://...`).
  - El `alt` no es opcional — pregunta de impacto: *"¿Cómo navega por la web una persona con ceguera total?"* → Lectores de pantalla. El `alt` es lo que oyen. Escribir un buen `alt` es la diferencia entre un desarrollador novato y uno profesional.
  
  Code-along: los alumnos descargan una foto (Unsplash/Pexels), la guardan en la carpeta `mi-perfil`, y agregan la etiqueta.

- 5.2 **Reto independiente — Bio con `<p>` (5 min):** EN PANTALLA: Canvas → Lab (punto 2.3). El instructor suelta el volante. Los alumnos escriben 2-3 oraciones sobre ellos usando `<p>`. Temporizador de 5 minutos. Los que terminan mandan screenshot al chat.

- 5.3 **Listas `<ul>` vs `<ol>` + truco Emmet (12 min):** EN PANTALLA: Excalidraw — imagen comparativa de lista desordenada (puntos) vs ordenada (números). Casos de uso: menú de navegación → `<ul>`, pasos de una receta → `<ol>`.
  
  Hack de productividad en VS Code: escribir `ul>li*3` + Enter → se genera la estructura entera al instante. Verán el Emmet y les cambiará la vida.
  
  Pregunta de participación: *"Una lista de control de asistencia, ¿desordenada u ordenada? ¿Y los pasos para armar un mueble?"*

> **Note táctica:** Si el tiempo aprieta, el punto 5.2 (reto) puede darse como tarea para completar el lab en casa. Lo crítico es que salgan de clase habiendo visto `<img>` y `<ul>` aunque sea en demo del instructor.

---

## MOMENTO 6 — Cierre
**Tiempo:** 10 min

**Sub-momentos:**
- 6.1 **Repaso anclaje (3 min):** Dos preguntas rápidas al grupo:
  - *"¿En qué se diferencia `<ul>` de `<ol>`?"*
  - *"Si el archivo de imagen está en tu carpeta del proyecto, ¿qué tipo de ruta usas en `src`?"*
- 6.2 **Preview Clase 02 (2 min):** En la siguiente clase llega CSS. La página que construyeron hoy se ve como "los huesos" — texto plano hacia abajo. En Clase 02 le ponen la ropa: colores, fuentes, layout.
- 6.3 **Instrucciones de entrega (3 min):** EN PANTALLA: Canvas → sección de entrega del Lab 01. Mostrar físicamente dónde hacer clic. Entregable: screenshot del navegador con el `<h1>` con su nombre real y la URL de `localhost` visible.
- 6.4 **Cierre humano (2 min):** Apagar pantalla compartida. Verlos. Agradecimiento breve. *"El primer día siempre es el más difícil porque todo es nuevo. Ya lo hicieron. Nos vemos en la Clase 02."*

---

## Tabla de Tiempos

| Momento | Foco Principal | Tiempo |
|---------|----------------|--------|
| 1 | Presentaciones + Canvas + objetivo del día | 15 min |
| 2 | Web: cliente-servidor + DevTools + trinidad HTML/CSS/JS | 20 min |
| 3 | Setup: VS Code + extensiones + Hola Mundo | 20 min |
| ⏸ | Receso | 30 min |
| 4 | HTML I: boilerplate + `h1` + `p` | 30 min |
| 5 | HTML II: `img` + accesibilidad + `ul`/`ol` | 25 min |
| 6 | Cierre, entrega y preview Clase 02 | 10 min |
| _Colchón_ | _Instalaciones tardías, preguntas, screenshots_ | _10 min_ |
| **Total** | | **160 min + 20 colchón** |

---

## Notas de Retroalimentación (clase pasada → ajustes v2)

| Qué pasó en la clase anterior | Ajuste en v2 |
|-------------------------------|--------------|
| Slide 00 se extendió a 27 min con Gabriela + instructor | Gabriela hace Slide 00 completo. El instructor entra solo a su presentación personal (2 min) |
| Alumnos sin VS Code instalado → delays en setup | Agregar checkpoint obligatorio de screenshot antes de avanzar en 3.1 |
| El diagrama cliente-servidor generó mucha participación | Conservar y usar Excalidraw (ya preparado) en lugar de dibujarlo desde cero |
| El "Hola Mundo" en Live Server fue el momento de mayor impacto | Conservar y marcar como punto de corte para el receso |
| Presentaciones se alargaron con alumnos que hablaron mucho | Estructura clara: chat primero, micrófono si hay tiempo |
| Canva como herramienta para presentaciones | Reemplazado totalmente por Excalidraw |
