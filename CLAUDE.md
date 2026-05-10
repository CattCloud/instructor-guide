# CLAUDE.md — Contexto del Repositorio instructor-guide

> Este archivo es la fuente de verdad para cualquier agente AI que trabaje en este repositorio.
> Léelo completo antes de ejecutar cualquier acción.
>
> **Última actualización:** 2026-05-09

---

## 1. QUIÉN ES EL INSTRUCTOR

**Nombre:** Eric
**Rol:** Instructor de desarrollo web en **Enter Tech School**
**Idioma de trabajo:** Español (toda la comunicación, guiones y documentación en español)
**Estilo de comunicación preferido:**
- Directo, técnico y sin rodeos
- Sin lenguaje poético, florido o innecesariamente metafórico
- Analogías del mundo real están bien, pero después de la definición técnica, no antes
- Si algo no es correcto o es impreciso, prefiere que se le corrija de frente

---

## 2. EL CURSO

### Activo: Code 201
Eric está arrancando **Code 201**. Tecnologías, módulos, cantidad de clases, duración y Proyecto Víctima — **TBD** (Eric subirá el material a `code201/` y ahí se completará esta sección).

### Cerrado y archivado: Code 101
Bootcamp anterior, cerrado. Tres módulos × 4 clases (12 clases) — HTML+CSS, JavaScript fundamentals, JavaScript avanzado. Material de instructor archivado en `mi-sistema/code101-archivado/`. Entregables del alumno en `code101/`.

> **Importante:** salvo que se especifique lo contrario, todo nuevo material se genera para Code 201. Code 101 es solo referencia histórica.

---

## 3. ESTRUCTURA DEL REPOSITORIO

```
instructor-guide/
├── CLAUDE.md                            ← Este archivo
├── skills-lock.json                     ← Lock de skills instaladas
│
├── .agent/skills/
│   ├── instructor-system/SKILL.md       ← Metodología del instructor (LEER SIEMPRE)
│   ├── excalidraw-system/SKILL.md       ← Generación de diagramas .excalidraw (acoplada a instructor-system)
│   ├── skills-creator/                  ← Skill que crea otras skills
│   └── writing-skills/
│
├── .agents/skills/
│   └── skill-creator/                   ← Paquete oficial Anthropic (skill-creator con guion, distinto de skills-creator)
│
├── mi-sistema/                          ← Material del instructor (fuente de verdad de guiones)
│   ├── SISTEMA DE CLASES.md             ← Notas meta sobre la metodología
│   ├── DESARROLLO DE SLIDES.md          ← Guía de estilo para slides
│   ├── EJEMPLOS DE CAPA 0.md            ← Plantilla / referencia de Capa 0
│   ├── code101-archivado/               ← Material del 101 cerrado (capas, V2, prácticas, transcripciones)
│   │   ├── CAPA 0 - CLASE {n}.md
│   │   ├── CAPA 1 - CLASE {n}.md
│   │   ├── CLASE {n}.md / CLASE {n} V2.md / CLASE 03 v_03.md
│   │   ├── APUNTES DEL INSTRUCTOR - CLASE 09.md
│   │   ├── PRACTICA-CLASE-09.md
│   │   ├── mylinks-template/            ← Plantilla de la página de links
│   │   ├── practica_clase06/, practica_clase09/, practica_clase09_v2/
│   │   └── transcripciones/             ← *_PAST.txt, past *.txt (transcripciones reales del 101)
│   │
│   └── (cuando arranque 201: archivos CAPA 0, CAPA 1, CLASE {n} V{m}, GUIA EXCALIDRAW directamente aquí)
│
├── code101/                             ← Entregables del Code 101 (cerrado)
│   └── clase01/ … clase12/              ← Cada clase con facilitador, lab, slide, resumen, repaso
│
└── code201/                             ← Entregables del Code 201 (vacío — se llena cuando arranque)
```

> **Regla de trabajo:** Solo se edita material activo. Code 101 está congelado en `mi-sistema/code101-archivado/` y `code101/` — **no modificar** salvo que Eric lo pida explícitamente.

---

## 4. CONVENCIONES DE NOMENCLATURA DE ARCHIVOS

### Convención canónica

| Patrón | Significado |
|---|---|
| `CAPA 0 - CLASE {n}.md` | Recopilación de conceptos crudos (Fase 1) |
| `CAPA 1 - CLASE {n}.md` | Estructura de momentos solamente (Fase 3) |
| `CLASE {n}.md` | V1 del guion completo |
| **`CLASE {n} V{m}.md`** | **Versión `m` del guion (ej: `CLASE 06 V2.md`). Espacio, V mayúscula, sin underscore.** |
| `code{NNN}/clase{n}/` | Carpeta con entregables del alumno (`code201/clase01/`, etc.) |
| `*_PAST.txt`, `*-PAST.txt`, `past *.txt` | Transcripción real de clase dictada |
| `*.excalidraw` | Diagramas reutilizables de la clase (generados por `excalidraw-system`) |
| `GUIA EXCALIDRAW - CLASE {n}.md` | Contrato escrito por `instructor-system`, leído por `excalidraw-system`. Llenado progresivo, momento por momento (ver §5.2) |

> **La forma correcta es `CLASE 06 V2.md`** (con espacio, V mayúscula, sin guion bajo).
> Las variantes `Clase06_V2.md`, `CLASE 06 v2.md`, `CLASE 04 v_02.md` son **inconsistencias por migrar**: cuando toques uno de esos archivos, renómbralo a la forma canónica.

### Excepción viva
- **`mi-sistema/CLASE 03 v_03.md`**: aún en formato antiguo porque está en uso activo. Cuando se cierre, renombrar a `CLASE 03 V3.md`.

---

## 5. LA METODOLOGÍA DEL INSTRUCTOR

> **Siempre leer `.agent/skills/instructor-system/SKILL.md` antes de generar cualquier material de clase.**
> **Siempre leer `.agent/skills/excalidraw-system/SKILL.md` antes de generar diagramas Excalidraw.**

### 5.1 Diseño por Capas (orden obligatorio)

| Fase | Capa | Archivo de salida | Qué contiene |
|---|---|---|---|
| 1 | Capa 0 | `CAPA 0 - CLASE {n}.md` | Conceptos, analogías, historia, estrategia visual |
| 2 | Preparación | `code{NNN}/clase{n}/repaso-clase{n}/` | Apuntes, examen, script espejo |
| 3 | Capa 1 | `CLASE {n}.md` (inicio) | Momentos + tabla de tiempos |
| 4 | Capa 2+3 | `CLASE {n}.md` (continuación) | Flujo de presentación + guion detallado |
| 5 | Entregables | `code{NNN}/clase{n}/` | Cheat sheet, lab, slides, facilitador |

### 5.2 Coordinación `instructor-system` ↔ `excalidraw-system`

Las dos skills son complementarias y se coordinan por contrato escrito (no acoplamiento directo):

```
instructor-system (Capa 2+3 progresiva)
    │
    │ Al cerrar cada Momento que tenga bloques **EN PANTALLA: EXCALIDRAW**
    ↓
mi-sistema/GUIA EXCALIDRAW - CLASE {n}.md   ← Contrato (Borrador → Validado por Eric ✓)
    │
    │ Cuando la Guía está validada (parcial o completa)
    ↓
excalidraw-system  →  CLASE {n}.excalidraw  (JSON proyectable)
```

**Reglas:**
- `instructor-system` **NO** genera archivos `.excalidraw` directamente. Solo escribe la Guía.
- `excalidraw-system` lee la Guía como **input primario**. El guion y la Capa 0 son referencia de contexto.
- Eric valida cada Panel en la Guía (texto plano) antes de gastarse en JSON. Cambios visuales se discuten ahí.
- La Guía se llena momento por momento, no de golpe — refleja el ritmo natural de trabajo de Eric.
- Detalles del formato canónico de la Guía: `instructor-system/SKILL.md §15`. Modos de generación de excalidraw: `excalidraw-system/SKILL.md §8`.

### 5.3 Estructura de un Momento

Cada clase se divide en **Momentos** (bloques de 10+ min con temática propia). La clase dura **3h** pero se prepara para **2h 30min**, dejando 30min de colchón.

Ejemplo de distribución típica:
```
Momento 1: ~30 min (tema de apertura / deuda de clase anterior)
Momento 2: ~35 min (setup + puente conceptual)
RECESO: 30 min
Momento 3: ~30 min (concepto central)
Momento 4: ~40 min (identidad visual / práctica activa)
Momento 5: ~25 min (box model / herramienta avanzada)
Momento 6: ~20 min (detalles finales + cierre)
```

### 5.4 Cadena Problema → Solución
Cada momento expone un **problema** que el siguiente momento **resuelve**. Nunca introducir una solución sin que el alumno haya sentido el dolor del problema.

### 5.5 Orden pedagógico innegociable
```
1. Concepto teórico (bloque "> Tu explicación teórica precisa:")
2. Diagrama o demostración visual (Excalidraw / Canva / código aislado)
3. Code-along aplicado al Proyecto Víctima
```

---

## 6. ESTADO ACTUAL DE LOS GUIONES POR CLASE

### Code 201 (curso activo)
**Pendiente.** Sin guiones aún. Eric subirá el material a `code201/` cuando arranque y aquí se documentará la tabla de clases V{m} y transcripciones.

### Code 101 (cerrado, archivado)
Material completo en `mi-sistema/code101-archivado/`. La nomenclatura ahí no fue migrada a la convención canónica `CLASE {n} V{m}.md` — coexisten variantes históricas (`Clase06_V2.md`, `CLASE 04 v_02.md`, `CLASE 03 v_03.md`, etc.). **No se migran** salvo necesidad explícita: el curso está cerrado.

---

## 7. REFERENCIA METODOLÓGICA HISTÓRICA — CLASE 03 v_03 (Code 101 archivado)

`mi-sistema/code101-archivado/CLASE 03 v_03.md` es el ejemplo más maduro del flujo "transcripción real → nueva versión del guion". Sirve como referencia metodológica cuando se quiera entender cómo evoluciona un guion entre versiones.

Lo que añade respecto a su versión anterior (basado en transcripción real): Herencia CSS como sub-punto, selector por clase `.clase`, herramienta de contraste en vivo, demo del "borde rojo de rayos X", UX/UI intro + Efecto WOW (DevTools en vivo).

> **No editar** este archivo. Es referencia, no material activo.

---

## 8. HERRAMIENTAS DE CLASE

| Herramienta | Uso |
|---|---|
| **VS Code** | Editor principal. Code-alongs siempre aquí. |
| **Live Server** (extensión) | Preview en tiempo real en el navegador |
| **Excalidraw** | Diagramas en vivo, generados por la skill `excalidraw-system` a partir de `mi-sistema/GUIA EXCALIDRAW - CLASE {n}.md` (ver §5.2) |
| **Canva** | Slides con imágenes (bloque vs línea, anatomía CSS) |
| **Google Chrome DevTools** | Inspección de elementos, pestaña Computed |
| **Kahoot** | Quiz de repaso al inicio de clase |
| **Google Fonts** | Fuentes web — Poppins recomendada |
| **coolors.co / Adobe Color** | Generación de paletas de color |
| **Microsoft Teams** | Plataforma de clase |

---

## 9. FORMATO DEL GUION — BLOQUES ESTÁNDAR

Todos los guiones usan estos bloques. Respetarlos siempre:

```markdown
### {N.N} Título del sub-punto

**EN PANTALLA: {HERRAMIENTA} — Descripción de lo que se muestra.**

> **La acción guiada:**
> 1. Paso concreto e hiperespecífico
> 2. Paso concreto e hiperespecífico

> **Tu explicación teórica precisa:**
> *"Texto del guion entre comillas en cursiva. Así el instructor sabe exactamente qué decir."*

> **Pregunta de calibración:**
> *"Pregunta abierta, nunca Sí/No."*
> *(Respuesta esperada o guía de seguimiento para el instructor)*

> **Preguntas de Activación:**
> 1. {Pregunta contextualizada}
>    *(Respuesta esperada)*
> 2. {Pregunta de escenario}
>    *(Respuesta esperada)*

> **Nota táctica de transición:**<
>
> Breve puente hacia el siguiente bloque.
```

---

## 10. REGLAS DE REDACCIÓN (INAMOVIBLES)

1. **Tono:** Técnico, maduro, directo. Hablar como ingeniero senior explicando a un junior.
2. **PROHIBIDO:** Lenguaje poético, metáforas de cuento de hadas, términos como "el dictador azul", "la sanación", "tajadas de pastel", "kilométrico", "decapitar decimales".
3. **Analogías:** Siempre después de la definición técnica. Nunca como único recurso explicativo.
4. **El guion va entre comillas en cursiva:** `*"Texto que dice el instructor"*`
5. **Extensión mínima:** 300 líneas por archivo de clase completo.
6. **No inventar contenido del proyecto:** El laboratorio tiene su propia temática por clase. No mezclar con proyectos de otras clases.
7. **Preguntas de activación:** Nunca "¿Se entiende?" ni "¿Alguna duda?". Siempre preguntas de escenario, consecuencia o comparación.

---

## 11. CÓMO USAR LAS TRANSCRIPCIONES

Los archivos `*_PAST.txt`, `*-PAST.txt` y `past *.txt` son las transcripciones reales de clases dictadas. Su rol:

- **Fuente de verdad** sobre qué temas se cubrieron y cuáles quedaron pendientes
- **Fuente de cambios:** Lo que el instructor hizo diferente al guion se vuelve la nueva versión (`V2`, `V3`, etc.)
- **Detectar deuda pedagógica:** Si un momento no se alcanzó, pasa al inicio de la siguiente clase

### Code 201 (curso activo)
**Sin transcripciones aún.** Cuando arranque el dictado, las transcripciones se guardan junto al guion correspondiente (en `mi-sistema/`) o donde Eric defina.

### Code 101 (archivado)
Inventario completo de las 10 transcripciones del 101 en `mi-sistema/code101-archivado/transcripciones/` (excepto la de Clase 01 que vive en `code101/clase01/CLASE_PASADA Bienvenida-Clase01.txt`). Los nombres no fueron normalizados a la convención canónica `*_PAST.txt` — coexisten variantes (`past Code101-clase02.txt`, `clase03past.txt`, `Clase10_past.txt`, etc.). No tocar.

**Flujo:**
```
Transcripción de Clase N  →  Comparar con guion activo  →  Crear CLASE N V{m+1}.md con los cambios reales
Tema no cubierto en Clase N  →  Momento 1 de Clase N+1
```

---

## 12. PRÓXIMOS PASOS CONOCIDOS

- [ ] **Documentar Code 201** en §2 cuando Eric suba el material a `code201/` (tecnologías, módulos, número de clases, Proyecto Víctima).
- [ ] **Probar el flujo Guía Excalidraw end-to-end** con la primera clase del 201 (ver `~/.claude/plans/stateless-painting-peach.md`):
  - Modo progresivo: generar Capa 0 → Capa 1 → primer Momento → su entrada en `GUIA EXCALIDRAW - CLASE {n}.md` → validación → `.excalidraw` desde la Guía.
- [ ] **Confirmar el cambio masivo del Code 101 → archivado** con un commit de limpieza (muchos paths viejos aparecen como `D` en `git status`).
