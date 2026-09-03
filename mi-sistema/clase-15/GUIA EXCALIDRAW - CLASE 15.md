# GUÍA EXCALIDRAW — CLASE 15: JSON y LocalStorage

> **Curso:** Code 201
> **Módulo:** M4 — Clase 3 de 4 (persistencia)
> **Estado:** Paneles documentados — pendiente validación de Eric
> **Total Paneles:** 9 — **4 Imagen-slide** (persistencia · dentro de localStorage · JSON traductor · deserialización) + **5 LIBRE en vivo** (HU1-HU5, un punto vacío por HU para desarrollarla)
> **Fecha:** 2026-07-04
> **Fuente del guion:** `mi-sistema/clase-15/CLASE 15.md`
> **Generador (nativo):** `mi-sistema/clase-15/gen.js` — `node gen.js "CLASE 15.excalidraw"`. Genera los 5 marcos LIBRE + los 4 placeholders de imagen.
> **Decisión de complejidad (spec de Eric):** 4 imágenes conceptuales (persistencia, localStorage, JSON como traductor, deserialización) + un **marco LIBRE por cada HU** (punto vacío donde el instructor desarrolla la HU en vivo — paso → código → porqué).
>
> **Convención de colores** (igual que C09-C14): código/sintaxis = azul **_#1971c2_**; aciertos/persiste = verde **_#2f9e44_**; problema/se-pierde = rojo **_#e03131_**; etiquetas/flechas = naranja **_#f08c00_**; títulos = negro **_#1e1e1e_**. **Sin emojis. Sin dibujos de metáfora ilustrada** (las imágenes son diagramas conceptuales/reales, no analogías).
>
> **Sub-puntos SIN panel Excalidraw** (VS Code / navegador / consola): 1.1 (demo recarga), 2.1 (navegador), 3.1 (consola), 4.1 (navegador), 5.1 (navegador), 5.3 (cierre).

---

## Momento 1

### Panel 1.2 — Persistencia (imagen conceptual) [IMG-01]

- **Trigger en el guion:** 1.2 (Persistencia, la META).
- **Tipo:** Imagen-slide (IA). **Conceptual/real, NO analogía.**
- **Concepto:** datos que sobreviven a la recarga — memoria (volátil) vs almacenamiento (persistente).
- **Contenido (para el prompt IA):** dos estados del dato en el tiempo: **MEMORIA (RAM)** —el estado vive mientras la pestaña está abierta; al recargar/cerrar se VACÍA (rojo, "datos perdidos")— vs **ALMACENAMIENTO PERSISTENTE** —una copia guardada que, al recargar, se RECUPERA (verde)—. Una flecha "recargar" en el medio mostrando el contraste. Título: "PERSISTENCIA — datos que sobreviven a la recarga".

### Panel 1.3 — Dentro de localStorage (imagen) [IMG-02]

- **Trigger en el guion:** 1.3 (localStorage, el MEDIO).
- **Tipo:** Imagen-slide (IA). **localStorage como medio de persistencia — cómo es por dentro.**
- **Concepto:** el almacén clave→valor (texto) del navegador.
- **Contenido (para el prompt IA):** una caja etiquetada **localStorage** (dentro del navegador, por origen), y adentro una **tabla de pares clave → valor**, todos los valores como TEXTO (ej. `whatsapp-templates` → `[{"titulo":...}]`, `whatsapp-templates-filtro` → `vent`). La app a un lado, con flechas **_setItem_** (entra) y **_getItem_** (sale). Etiquetas: "persiste al recargar/cerrar", "solo TEXTO". Título: "DENTRO DE localStorage — clave → valor (texto)".

### Panel 1.4 — JSON como traductor (imagen) [IMG-03]

- **Trigger en el guion:** 1.4 (el rol de JSON).
- **Tipo:** Imagen-slide (IA). **Diagrama de JSON como traductor entre localStorage y el objeto de datos.**
- **Concepto:** JSON es el puente objeto ↔ texto.
- **Contenido (para el prompt IA):** tres zonas horizontales. Izquierda: **OBJETO / ARRAY de datos** (objeto JS con colores). Centro: **JSON** (el traductor) con dos flechas — **_JSON.stringify_** (objeto → texto, hacia la derecha) y **_JSON.parse_** (texto → objeto, hacia la izquierda). Derecha: **localStorage** (el texto guardado). Título: "JSON — el traductor entre tus OBJETOS y el TEXTO de localStorage".

### Panel 1.5 — LIBRE para desarrollar la HU1

- **Trigger en el guion:** 1.5 (HU1 — guardar).
- **Tipo:** LIBRE en vivo — marco con la HU + criterios + espacio para escribir los pasos/código en vivo.
- **Marco mínimo:** Título "HU1 — GUARDAR LAS PLANTILLAS". HU: *"Como usuario, quiero que mis plantillas se guarden automáticamente, para no perderlas al recargar."* Criterios: al agregar/editar/eliminar se guarda · guardado automático (sin botón) · se comprueba en DevTools. 3 líneas para los pasos.

---

## Momento 2

### Panel 2.2 — Deserialización: diagrama de flujo (imagen) [IMG-04]

- **Trigger en el guion:** 2.2 (`JSON.parse` + el objeto genérico).
- **Tipo:** Imagen-slide (IA). **Diagrama general del flujo de deserialización.**
- **Concepto:** de texto a objeto — y qué se pierde (los tipos).
- **Contenido (para el prompt IA):** flujo horizontal: **[texto JSON]** → **_JSON.parse_** → **[objeto GENÉRICO]** (etiqueta: "los datos SÍ, la clase/los tipos NO") → **reconstruir** (`new Date(...)` / `new Clase(...)`) → **[objeto completo/utilizable]**. Resaltar que `parse` devuelve un objeto plano y que los tipos complejos (Date) se reconstruyen. Título: "DESERIALIZACIÓN — de texto a objeto (y qué se reconstruye)".

### Panel 2.3 — LIBRE para desarrollar la HU2

- **Tipo:** LIBRE en vivo.
- **Marco mínimo:** Título "HU2 — CARGAR AL ABRIR". HU: *"Como usuario, quiero ver mis plantillas guardadas apenas abro la app."* Criterios: al abrir aparecen las guardadas · si no hay nada, vacía sin errores · las fechas se muestran bien. 3 líneas.

---

## Momento 3

### Panel 3.2 — LIBRE para desarrollar la HU3

- **Tipo:** LIBRE en vivo.
- **Marco mínimo:** Título "HU3 — NO ROMPER CON DATOS CORRUPTOS". HU: *"Como usuario, quiero que la app funcione aunque los datos guardados estén dañados."* Criterios: si el guardado está corrupto, no se cuelga · arranca vacía y usable. 2 líneas.

---

## Momento 4

### Panel 4.2 — LIBRE para desarrollar la HU4

- **Tipo:** LIBRE en vivo.
- **Marco mínimo:** Título "HU4 — VACIAR TODO + INDICADOR". HU: *"Como usuario, quiero borrar todas mis plantillas de golpe y saber que la app guardó."* Criterios: acción para vaciar todas · lista y almacenamiento limpios · indicador de estado. 3 líneas.

---

## Momento 5

### Panel 5.2 — LIBRE para desarrollar la HU5

- **Tipo:** LIBRE en vivo.
- **Marco mínimo:** Título "HU5 — RECORDAR EL FILTRO". HU: *"Como usuario, quiero que el filtro que escribí siga aplicado si recargo."* Criterios: al recargar el filtro sigue aplicado y el buscador muestra el texto · si no había, arranca vacío. 3 líneas.

---

## Tabla resumen de paneles

| Panel | Momento | Tipo | Contenido | Generación |
|---|---|---|---|---|
| 1.2 [IMG-01] | M1 | Imagen | Persistencia (conceptual/real) | Prompt IA |
| 1.3 [IMG-02] | M1 | Imagen | Dentro de localStorage | Prompt IA |
| 1.4 [IMG-03] | M1 | Imagen | JSON como traductor | Prompt IA |
| 1.5 | M1 | LIBRE | HU1 guardar | gen.js |
| 2.2 [IMG-04] | M2 | Imagen | Deserialización (flujo) | Prompt IA |
| 2.3 | M2 | LIBRE | HU2 cargar | gen.js |
| 3.2 | M3 | LIBRE | HU3 try/catch | gen.js |
| 4.2 | M4 | LIBRE | HU4 vaciar | gen.js |
| 5.2 | M5 | LIBRE | HU5 filtro | gen.js |

## Próximos pasos

1. **Eric valida** esta Guía.
2. **Prompts IA** para las 4 imágenes → `CLASE 15 - PROMPTS DE IMAGEN.md`.
3. **`gen.js`** genera los 5 marcos LIBRE + los 4 placeholders → `CLASE 15.excalidraw`.
