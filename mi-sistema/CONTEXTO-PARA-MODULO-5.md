# Contexto de traspaso — para arrancar el Módulo 5 (Code 201)

> **Qué es este archivo:** un puente de contexto entre conversaciones de Cowork. Las conversaciones no se comparten entre sí automáticamente; este documento (+ la memoria del proyecto) resume lo que quedó de la sesión donde se redactó el Módulo 4, para que una conversación nueva arranque el Módulo 5 sin perder contexto.
> **Última actualización:** 2026-07-11

---

## Cómo usar este archivo en una conversación nueva

1. La memoria del proyecto (`MEMORY.md` y sus archivos) se carga sola al inicio de cada conversación de este proyecto. Ahí ya está el estado del Módulo 4 y las convenciones vigentes.
2. Si algo falta, decile a Claude: *"Lee `mi-sistema/CONTEXTO-PARA-MODULO-5.md` y `CLAUDE.md` antes de empezar"*.
3. Antes de generar material, Claude debe leer `.agent/skills/instructor-system/SKILL.md` y `.agent/skills/excalidraw-system/SKILL.md` (regla del repo).

---

## Estado al cerrar el Módulo 4

**Módulo 4 (C13–C16) completo** — proyecto víctima: **Gestor de Plantillas para WhatsApp** (repo `whatsapp-templates`).

| Clase | Tema | Estado |
|---|---|---|
| C13 | Modelado de datos + manipulación de texto (clase `Template`, estado, render, String) | Completo |
| C14 | Interacción y datos derivados (CRUD, delegación, inmutabilidad + spread, datos derivados) | Completo |
| C15 | JSON y localStorage (persistencia, stringify/parse, objeto genérico, blindaje) | Completo |
| C16 | Módulos (ESM) + cierre. LAB CALIFICADO / Proyecto Integrador | Completo |

Cada clase en `mi-sistema/clase-{13..16}/` tiene: `CAPA 0`, `CLASE N.md` (Capa 1 + Capa 2+3), prompts de imagen, `gen.js`, `CLASE N.excalidraw`.

**Pendiente de C16:** generar 2 imágenes IA (IMG-01 ¿qué es un módulo?, IMG-02 export→import) y pegarlas en el `.excalidraw`; el panel 1.3 es imagen propia de Eric; entregables del alumno en `code201/class-16/` si se arman.

---

## Convenciones/feedback que se afinaron en la sesión del Módulo 4

**Estas reglas mandan sobre cualquier default. Detalle en las memorias enlazadas.**

1. **Formato de HU del lab (Capa 2+3): INTERCALADO paso → código → porqué.** Cada Historia de Usuario en pasos numerados; cada paso trae su `Code-along del lab — Parte N.M` seguido de `El porqué (Paso N)`. Abre con `Tu apertura` (cita la HU literal y sus criterios), cierra con `Checkpoint obligatorio` + `Cierre del Momento + puente`. (Vigente desde C14; reemplaza el "plan socrático" de M2–M3.)

2. **Conceptos grandes: estructurados en bloques, NO corridos.** Cuando un tema es denso (ej. ESM en C16), partirlo en bloques con encabezado (A/B/C/D/E), cada uno con definición + **sintaxis general** + code-along aislado (archivos de juguete) antes de aplicarlo al proyecto. Si un ejemplo depende de otro (export/import necesitan `type="module"`), la dependencia va primero.

3. **Analogías al mínimo** — solo cuando aportan lo que la definición técnica no puede (conceptos invisibles/sociales), y siempre DESPUÉS de la definición.

4. **Demos cortas dentro del sub-punto** — si es solo código + leer el output, va como bloque dentro del sub-punto teórico, no como sub-punto aparte con número propio.

5. **Cierre mínimo en clases que cierran módulo** — no redactar sub-puntos largos de "cierre del módulo/apertura del test"; el último Momento termina en su checkpoint (o en un bloque de entrega compacto, como el 4.4 de C16).

6. **El code-along matchea el lab** (`code{NNN}/class-{n}/lab/README.md`) casi byte-a-byte en nombres y orden.

7. **DevTools solo para VER** (localStorage), nunca para ejecutar acciones — esas van desde el código/consola.

8. **Tono** (de `CLAUDE.md`): técnico, directo, sin lenguaje poético. Todo en español. El guion va entre comillas en cursiva.

---

## Flujo de trabajo por clase (orden que seguimos)

```
Capa 0 (conceptos) → Capa 1 (momentos + tiempos) → Capa 2+3 (guion detallado, momento por momento,
esperando validación de Eric entre momentos) → Excalidraw (paneles: placeholders IA + tablas nativas +
marcos LIBRE por HU) → gen.js (genera el .excalidraw, se valida con re-parse JSON) → prompts de imagen IA
```

Eric valida momento por momento; no generar toda la Capa 2+3 de golpe sin su OK entre momentos.

---

## Lo que falta saber del Módulo 5 (C17–C20)

**TBD.** Los inputs (README de clase, lab, apuntes) aún no están en el repo. Cuando Eric los suba (probablemente en `code201/class-17/` etc.), arrancar por la Capa 0 de C17. Preguntar a Eric: tema/proyecto víctima del M5, y si continúa el mismo repo o arranca uno nuevo.
