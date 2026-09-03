---
name: feedback-patron-concepto-a-lab
description: "Para clases técnicas densas (Grid, JS avanzado, etc.), cada concepto nuevo se enseña aislado primero (teoría + imagen Excalidraw + sintaxis + demo en apoyo-claseNN.html), y SOLO al final se aplica al lab del alumno. No copiar el lab y agregar teoría — invertir el orden."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 005aa3f1-b969-43a0-ad52-38f92afb61b1
---

Cuando un Momento introduce **varios conceptos técnicos nuevos** (3 o más propiedades CSS de un mismo modelo, varias funciones JS relacionadas, etc.), NO se agrupan en un solo sub-punto "teoría general + code-along del lab". Se separan así:

**Patrón obligatorio — 1 sub-punto por concepto nuevo:**

Cada concepto recibe su propio sub-punto con esta estructura:

1. **EN PANTALLA: EXCALIDRAW** — Panel propio con anatomía visual del concepto (cajas numeradas con colores funcionales, etiquetas con flechas, comparativas antes/después). Estilo "infografía técnica" tipo samanthaming.com pero con la paleta canónica de **_excalidraw-system_** §3.
2. **Tu explicación teórica precisa** — definición concisa, comportamiento, comparativa con alternativas si aplica.
3. **Sintaxis general** — bloque de código con placeholders `<...>` (ver §7.1 del SKILL).
4. **EN PANTALLA: VS CODE DIVIDIDO CON EL NAVEGADOR** — abrir **_apoyo-claseNN.html_**, descomentar la sección **_DEMO MX.Y_** del concepto, demostrar en vivo.
5. **Al cerrar el sub-punto:** comentar la sección del demo antes de pasar al siguiente concepto.

**Aplicación al lab:** se hace en **un sub-punto separado al final del Momento**, después de que TODOS los conceptos están enseñados. Ahí el alumno aplica todo junto al proyecto víctima.

**Why:** sin este patrón, el alumno copia el bloque CSS del lab sin entender qué hace cada propiedad. Confunde **_display: grid_** con **_grid-template-columns_** con **_repeat()_** porque las ve todas juntas por primera vez. Eric pidió este cambio explícitamente al revisar el Momento 2 de Clase 03 (Grid) — la versión inicial estaba estructurada desde los pasos del lab, no desde los conceptos. El cambio: "centrarnos en explicar primero de forma teórica, cada concepto nuevo como un punto".

**How to apply:**

- **Aplica a:** clases que introducen 3+ conceptos técnicos nuevos del mismo modelo (Grid básico, Grid intermedio, OOP, hooks de React, etc.).
- **NO aplica a:** clases con un solo concepto central (ej: explicación de una sola propiedad nueva), o conceptos que el alumno ya domina y solo se reaplican en un caso nuevo.
- **Archivo de apoyo obligatorio:** todo Momento que enseñe conceptos antes de aplicar al lab necesita **_apoyo-claseNN.html_** (§17 del SKILL) con secciones DEMO comentadas, una por cada concepto.
- **Imágenes Excalidraw obligatorias:** una por cada concepto. Tipo Imagen-slide (no hand-drawn) porque requieren precisión geométrica. Estilo común: contenedor con borde definido, cajas numeradas con colores funcionales (verde **_#2f9e44_**, naranja **_#f08c00_**, azul **_#1971c2_**, rojo **_#e03131_**), etiquetas con flechas, fondo blanco.

**Ejemplo de la estructura aplicada (M2 de Clase 03 — Grid básico):**

- 2.1 Crear página base (setup, sin teoría)
- 2.2 Concepto 1 (display: grid) — teoría + imagen + sintaxis + demo apoyo
- 2.3 Concepto 2 (gap) — teoría + imagen + sintaxis + demo apoyo
- 2.4 Concepto 3 (grid-template-columns) — teoría + imagen + sintaxis + demo apoyo
- 2.5 Concepto 4 (fr) — teoría + imagen + sintaxis + demo apoyo
- 2.6 Concepto 5 (repeat) — teoría + imagen + sintaxis + demo apoyo
- 2.7 **Aplicación al lab** — code-along de la Parte del lab que junta todos los conceptos en el proyecto víctima

**Trade-off conocido:** un Momento con 7 sub-puntos es más largo de planear que uno con 3. Pero la densidad por sub-punto baja (cada uno se enfoca en una sola cosa), el alumno entiende mejor, y la aplicación al lab al final es rápida porque los conceptos ya están internalizados.
