# Proyecto del Módulo 5

**Mi Setlist**

Este es el **Proyecto Integrador Final** del curso Code 201. Consolida todo lo aprendido en los Módulos 1 al 4 en una sola aplicación web: layout responsivo con HTML + CSS, lógica algorítmica en JavaScript, consumo de una API real con estados de carga y error, y estado complejo persistido con JSON + LocalStorage sobre una arquitectura de módulos ESM.

A diferencia de los proyectos anteriores, aquí **el código lo escribes tú, con la IA como copiloto**. El curso te da el enunciado, el contrato técnico y el acompañamiento del instructor; las historias de usuario, las decisiones de implementación y cada línea de código salen de ti y de tu conversación con la IA.

> 🔥 Cada estudiante presentará su proyecto en un **Demo Day** con **máximo 10 minutos**, donde debe demostrar funcionalidades clave, argumentar decisiones técnicas y explicar cómo usó (y validó) a la IA.

---

## 🎯 Objetivo del Proyecto

Construir una aplicación web que permita **buscar canciones en un catálogo real** (API de iTunes) y **organizarlas en playlists personales** que sobreviven al recargar la página. La app calcula la duración total de cada playlist y muestra estadísticas de tu música.

Inspiración: el "armador de playlists" de cualquier app de música, sin cuenta ni backend.

---

## 👤 Usuario Objetivo

Cualquier persona que arma listas de música con intención:

- El setlist de una banda o DJ para su próxima tocada.
- La playlist del viaje, la del gimnasio, la de estudiar.
- El "top 10" que le quieres compartir a alguien.

---

## 🧩 Secuencia de Clases

| Clase | Fase | Contribución al Proyecto |
|-------|------|--------------------------|
| **Clase 17: Ideación y Planificación con IA** | Planificación | Descomponer el MVP en historias de usuario CON la IA, planificar sprints y configurar el repositorio. |
| **Clase 18: Sprint 1** | Construcción base | Búsqueda en la API con estados de UI, playlists y persistencia base. |
| **Clase 19: IA como Corrector + Sprint 2** | Auditoría + cierre | Revisión de código y pruebas con la IA, HUs propias, estadísticas, orden, robustez y deploy. |
| **Clase 20: Demo Day** | Presentación | Demo en vivo, argumentación técnica y cierre del curso. |

---

## 🚀 Funcionalidad Esperada (MVP)

La aplicación debe permitir como mínimo:

1. **Buscar canciones** por artista o título en la API, mostrando carátula, nombre, artista y duración.
2. **Comunicar el estado de la búsqueda**: indicador de carga, mensaje de error si la API falla, mensaje amigable si no hay resultados.
3. **Crear playlists** con nombre propio (ej: "Road trip", "Ensayo sábado").
4. **Agregar canciones** desde los resultados de búsqueda a una playlist.
5. **Ver el contenido de una playlist** con los datos de cada canción y la fecha en que se agregó.
6. **Quitar canciones y eliminar playlists** con confirmación previa (modal propio).
7. **Ver la duración total** de la playlist en formato legible (ej: "1 h 23 min").
8. **Ver estadísticas** de la playlist: cantidad de canciones, género más frecuente, artista más repetido.
9. **Ordenar las canciones** de una playlist (recientes/antiguas, alfabético).
10. **Persistir todo** en LocalStorage y **restaurar** al recargar; si los datos están corruptos, la app no se rompe y ofrece "Empezar de cero".

> 📖 **Sobre las historias de usuario:** este proyecto NO trae historias pre-redactadas. En la Clase 17 tú derivas tus propias HUs desde este MVP **trabajando con la IA**, y el instructor las valida. Ese es el primer entregable del módulo.

---

## 🤖 La IA como copiloto (reglas del juego)

La IA es parte oficial del proyecto, con tres roles: **guía** en la planificación (C17), **copiloto** al codear (C18-C19) y **correctora** al revisar. Las reglas:

1. **Regla de oro: no pegues código que no puedas explicar.** En el Q&A del Demo Day el instructor te preguntará por fragmentos específicos de TU código.
2. **Tus prompts clave quedan registrados en `PROMPTS.md`**: qué pediste, para qué y qué hiciste con el resultado. Es parte de la entrega final.
3. **El contrato técnico viaja en tus prompts.** Cuando le pidas algo a la IA, dale el contexto del proyecto (stack, arquitectura, prohibiciones). Sin contexto, la IA te dará soluciones que no puedes usar.
4. **La IA propone, tú decides.** Su output es un borrador para criticar, no una respuesta para copiar.

**Herramientas del módulo:** un **chat de IA gratuito** (planificación, modo interactivo, brainstorms) + **GitHub Copilot Free en VS Code** (implementación puntual y la auditoría de la Clase 19, donde su acceso al proyecto completo con `@workspace` marca la diferencia). El plan gratuito de Copilot da ~50 mensajes de chat al mes: úsalo donde ver tu código importa, y el chat web para todo lo demás.

---

## ⚙️ Contrato Técnico

Este bloque es tu **contexto para la IA**: cópialo (o resúmelo) al inicio de tus conversaciones.

- **Stack:** HTML5 semántico + CSS3 (propio o Tailwind Play CDN, a tu criterio) + **JavaScript vanilla con módulos ESM** (`import`/`export`, `<script type="module">`).
- **Arquitectura:** estado central plano + patrón "cambias el estado → llamas `render()`". CRUD **inmutable** (`.filter`/`.map`/spread). **Delegación de eventos** para las listas. Ids con `crypto.randomUUID()`.
- **Persistencia:** `localStorage` + `JSON.stringify`/`parse` envueltos en `try/catch`; fechas rehidratadas al cargar.
- **UX:** confirmaciones con **modal propio** (nada de `confirm()` nativo); estados vacíos amigables.
- **API:** iTunes Search API (solo lectura, sin key).
- **Deploy:** GitHub Pages. ESM no corre con `file://` → usar Live Server.

> **No se permite:** frameworks JS (React, Vue...), librerías de manejo de estado, backend, copiar código de la IA sin registrarlo en `PROMPTS.md`.

### Estructura de archivos

```
mi-setlist/
├── index.html
├── css/styles.css
├── js/
│   ├── app.js             # Punto de entrada, inicialización
│   ├── models/Cancion.js  # Clase que modela una canción
│   ├── state.js           # Estado central (playlists)
│   ├── storage.js         # localStorage (guardar/cargar/limpiar)
│   ├── api.js             # fetch a la API de iTunes
│   └── ui.js              # render + eventos del DOM
├── PROMPTS.md             # Registro de trabajo con la IA
├── README.md              # Documentación del proyecto
└── .gitignore
```

---

## 🎵 La API

Endpoint de búsqueda (sin key, solo lectura):

```
https://itunes.apple.com/search?term=soda+stereo&entity=song&limit=10
```

Campos útiles de cada resultado: `trackName`, `artistName`, `collectionName`, `artworkUrl100`, `trackTimeMillis`, `primaryGenreName`.

> ⚠️ **Límites conocidos:** la API acepta ~20 solicitudes por minuto. Usa `limit=10`, busca con un botón (no en cada tecla) y no hagas búsquedas en loop. Si responde `403`, espera un minuto.

---

## 🏆 Tus HUs Propias (para puntaje)

Además del MVP, en la **Clase 19** definirás con la IA **2 historias de usuario propias** — features que TÚ decides — y debes **implementar al menos 1** antes del Demo Day. Ideas de inspiración, del tipo que verías en cualquier app de música en producción:

- **Favoritos** — botón ⭐ en cada canción y vista/filtro "solo favoritas", persistido.
- **Filtros** — filtrar la playlist por género, artista o texto, combinable con el orden.
- **Cargar más resultados** — paginar la búsqueda (siguientes 10) sin repetir los ya mostrados.
- **Deshacer eliminación** — al quitar una canción, aviso temporal con botón "Deshacer" (5 seg).
- **Modo oscuro** — toggle claro/oscuro que persiste y respeta la preferencia del sistema.
- **Compartir setlist** — exportar la playlist como texto listo para pegar en WhatsApp.

Puedes proponer otras, siempre dentro del contrato técnico (sin backend ni librerías).

---

## ☑️ Rúbrica de Evaluación

| Criterio | Pts | Qué evalúa |
|----------|-----|------------|
| **Funcionalidades del MVP** | 20 | Los 10 puntos del MVP implementados y funcionando |
| **Calidad técnica** | 20 | Contrato técnico respetado: ESM, estado + render, CRUD inmutable, try/catch, delegación |
| **Uso responsable de IA + HU propia** | 20 | `PROMPTS.md` completo, con prompts contextualizados (10) + ≥1 HU propia implementada (10) |
| **Presentación en vivo — Demo Day** | 20 | Demo clara en ≤10 min del flujo completo, sin errores en vivo |
| **Argumentación técnica + Q&A** | 20 | Justifica ≥2 decisiones (una debe involucrar a la IA) y explica fragmentos de su código |

**Total: 100 puntos · Aprobación mínima: 70/100.** Detalle por niveles en la rúbrica oficial del lab.

---

## 📣 Presentación — Demo Day (Clase 20)

Máximo **10 minutos** por estudiante:

1. **Demo en vivo (5 min):** buscar canciones, armar una playlist, mostrar duración y estadísticas, quitar una canción, recargar y demostrar persistencia.
2. **Argumentación técnica (3 min):** 2 decisiones clave; al menos una sobre cómo usaste la IA y cómo validaste lo que te dio.
3. **Q&A (2 min):** preguntas del instructor sobre fragmentos de TU código.

---

## 📝 Instrucciones de Envío

Al cierre del Demo Day, cada estudiante entrega:

- **Repositorio de GitHub** con commits frecuentes a lo largo de los sprints.
- **URL pública del deploy** (GitHub Pages).
- **`PROMPTS.md`** con el registro del trabajo con la IA.
- **`README.md` del proyecto**: descripción, stack, tus HUs implementadas (base + retos), decisiones técnicas, link al deploy, cómo correr localmente.

---

> ### ⚠️ Limitaciones conocidas (parte del diseño pedagógico)
>
> - La API es de solo lectura: no puedes publicar nada en iTunes, solo consultar su catálogo.
> - Los previews y carátulas pertenecen a Apple; tu app las consume, no las almacena.
> - Sin backend ni cuentas: tus playlists viven solo en tu navegador.
> - La IA se equivoca con confianza: valida todo contra el contrato técnico y contra lo que ves en pantalla.
>
> Estas limitaciones se discuten en la Clase 17 como parte del alcance del MVP.
