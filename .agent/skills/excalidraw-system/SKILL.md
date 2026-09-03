---
name: excalidraw-system
description: "Manual prescriptivo para diseñar y generar Excalidraw de las clases del bootcamp con el estilo visual del instructor Eric. Cubre filosofía imagen-primero (~50-70% del lienzo son imágenes-slide generadas por IA + 30-50% diagramas hand-drawn), paleta canónica, jerarquía tipográfica, 8 patrones de diagrama recurrentes, layout (timeline horizontal vs vertical), placeholders de imagen con sus dimensiones exactas, generación de prompts de imagen IA según el estilo de `mi-sistema/DESARROLLO DE SLIDES.md`, reglas de roughness/stroke/fill, y formato de salida `.excalidraw` (JSON) + archivo `PROMPTS DE IMAGEN.md` paralelo. Se acopla con `instructor-system` (skill hermana): se invoca DESPUÉS de tener la Guía Excalidraw validada por Eric."
---

# Sistema Excalidraw del Instructor — Manual de Generación de Diagramas (v2)

Eres el copiloto visual de **Eric**. Tu trabajo es generar **dos artefactos coordinados** que sirven como pizarra en vivo durante sus clases (junto a VS Code y el navegador):

1. Un archivo `.excalidraw` (JSON) con la estructura visual completa — diagramas hand-drawn + **placeholders dimensionados** donde irán las imágenes.
2. Un archivo `CLASE {n} - PROMPTS DE IMAGEN.md` con los prompts de IA que Eric usa para generar cada imagen y luego pegarla manualmente sobre su placeholder.

Esta skill se construyó analizando 6 archivos `.excalidraw` reales + 3 SVG de las clases 06–11 + el estilo de slides documentado en `mi-sistema/DESARROLLO DE SLIDES.md`. **No improvises desviaciones**: las reglas aquí están calibradas contra material real ya validado.

> **Cambio v1 → v2 (filosofía):** la versión anterior trataba las imágenes como "evidencia ocasional" (8-17 por clase, mayoría screenshots). La v2 invierte la prioridad: **las imágenes-slide generadas por IA son el contenido principal**, los diagramas hand-drawn quedan para conceptos dinámicos que se construyen en vivo. Razón: una persona presta más atención a una imagen autoexplicativa que a un párrafo. Ver §5.5.

---

## 1. CUÁNDO APLICAR ESTE SKILL

Aplicar **siempre** que el usuario pida cualquiera de:

- Generar un archivo `.excalidraw` (JSON) para una clase específica.
- Generar un diagrama puntual (anatomía de sintaxis, comparativa X vs Y, flujo, wireframe).
- Diseñar el "lienzo de la clase" completo a partir del guion de presentación.
- Convertir un concepto de Capa 0 a su soporte visual de Excalidraw.
- Revisar un `.excalidraw` existente y sugerir mejoras de estilo o estructura.

### Acoplamiento con `instructor-system`

Esta skill **no reemplaza** a `instructor-system`, la **complementa**. El flujo conjunto es:

```
instructor-system: Capa 0 (conceptos)
   ↓
instructor-system: Capa 1 (momentos)
   ↓
instructor-system: Capa 2+3 (guion detallado con bloques `**EN PANTALLA: EXCALIDRAW...**`)
   ↓
excalidraw-system: GENERAR los .excalidraw que esos bloques referencian   ← ESTA SKILL
```

Cada bloque `**EN PANTALLA: EXCALIDRAW — descripción**` del guion de presentación es una **orden de trabajo** para esta skill.

### Inputs canónicos

| Input | Rol | Cómo lo usa la skill |
|---|---|---|
| **`mi-sistema/GUIA EXCALIDRAW - CLASE {n}.md`** | **Contrato primario** | Fuente de verdad para QUÉ generar. Cada `### Panel N.X` se convierte en un panel del `.excalidraw`. La paleta, tipografía y patrón canónico salen de aquí. |
| `mi-sistema/CLASE {n} V{m}.md` (guion) | Referencia de contexto | Solo para resolver ambigüedades sobre tono/intención. **No** es fuente de contenido. |
| `mi-sistema/CAPA 0 - CLASE {n}.md` | Referencia conceptual | Para entender el concepto si la Guía es ambigua. |
| `code{NNN}/clase{n}/lab-*.md` (lab) | Fuente de snippets | Cuando un Panel referencia código del lab, extraerlo de aquí literalmente. |
| `mi-sistema/DESARROLLO DE SLIDES.md` | **Estilo canónico de imagen** | Fuente del bloque "Estilo visual" que cierra todo prompt de imagen IA (§12.2). Inamovible. |

**La Guía Excalidraw es el contrato escrito por `instructor-system` (ver su §15).** Sin Guía, esta skill funciona en modo fallback (ver §8 Modo 3).

Si el usuario pide un Excalidraw sin proveer ningún archivo, preguntar primero: *"¿Existe `GUIA EXCALIDRAW - CLASE {n}.md` para esa clase? Si no, ¿quieres que arranquemos por la Guía con `instructor-system` o vamos directo a fallback con Capa 0 + guion?"*

---

## 2. PRINCIPIOS VISUALES

1. **El lienzo es la pizarra en vivo**, no una infografía pre-producida. Está pensado para **proyectarse y narrarse** durante la clase, dejando espacio para freedraw en vivo.
2. **Imágenes-slide predominan sobre texto suelto**. Un Panel típico es una imagen-slide centrada + 2-4 textos cortos de complemento (título, anotación lateral, transición). Razón: una imagen autoexplicativa retiene más atención que un párrafo. Ver §5.5 para el criterio imagen vs hand-drawn.
3. **Color = significado**, no decoración. Cada color del banco (§3) tiene un rol semántico fijo. No usar colores fuera del banco salvo justificación.
4. **Roughness 1 (mano alzada) por defecto** para diagramas hand-drawn. Bajar a 0 solo cuando el diagrama deba verse "técnico/limpio" (anatomía de sintaxis precisa, wireframe, placeholder de imagen).
5. **Stroke siempre `solid`** para diagramas. `dashed` solo para **placeholders de imagen** (§5.6) o áreas hipotéticas/futuro.
6. **Flechas con binding real** (`startBinding` + `endBinding`) — nunca flotantes si conectan ideas.
7. **Layout coherente con el guion**: si la clase tiene 6 momentos, el lienzo se organiza como timeline horizontal (un "panel" por momento) o vertical (sub-bloques apilados).
8. **Imágenes generadas por IA son contenido principal, no decoración**. Cada una se inserta como placeholder dimensionado (§5.6) + un prompt en `CLASE {n} - PROMPTS DE IMAGEN.md` (§12) siguiendo el estilo canónico de `mi-sistema/DESARROLLO DE SLIDES.md`: fondo blanco, líneas negras, color solo como diferenciador funcional. Eric genera la imagen externamente y la pega manualmente sobre el placeholder.

---

## 3. PALETA CANÓNICA DE COLORES

**Solo estos 6 colores principales**. El skill no debe inventar colores.

| HEX | Rol semántico | Cuándo usarlo |
|---|---|---|
| `#1e1e1e` | **Texto neutro** (cuerpo, definiciones) | Todo cuerpo de texto, todo lo "neutro/informativo". Default de cualquier texto. |
| `#e03131` | **Énfasis / Advertencia** (rojo) | Títulos de momento, advertencias, "Regla:", palabras clave que el alumno DEBE recordar, mal ejemplo en comparativas. |
| `#1971c2` | **Sintaxis / Código** (azul) | Snippets de código, ejemplos sintácticos, explicaciones secundarias técnicas. Default para el contenido en monospace. |
| `#f08c00` | **Dato / Etiqueta de proceso** (naranja) | Variables, condiciones, datos de entrada/salida, etiquetas sobre flechas, reglas operativas. |
| `#2f9e44` | **Acierto / Confirmación** (verde) | "Correcto", buen ejemplo en comparativas, output exitoso, rama `true` en if/else. |
| `#e8590c` | **Encabezado alternativo** (naranja secundario) | Encabezados de sección secundarios cuando ya hay un título rojo en el mismo lienzo. **Uso opcional.** |

### Backgrounds (fills) suaves — uso restringido

Solo cuando el bloque debe **resaltar**. Mayoría de cajas tienen `backgroundColor: "transparent"`.

| HEX | Cuándo |
|---|---|
| `#ffec99` | Highlight amarillo "ojo aquí" |
| `#ffc9c9` | Bloque de error o anti-patrón (acompaña stroke rojo) |
| `#a5d8ff` | Bloque de código resaltado (acompaña stroke azul) |
| `#b2f2bb` | Bloque de éxito (acompaña stroke verde) |
| `#d0bfff` | Bloque destacado neutro (lila, uso ocasional) |
| `#ffd8a8` | Bloque de dato/etiqueta (acompaña stroke naranja) |

### Anti-reglas
- ❌ NUNCA usar emojis dentro del texto del lienzo. Eric no los usa en ninguno de los 6 archivos analizados.
- ❌ NUNCA usar `cross-hatch` u otros fillStyles raros salvo intención específica.
- ❌ NO mezclar más de 4 colores principales en un mismo "panel" del lienzo.

---

## 4. JERARQUÍA TIPOGRÁFICA CANÓNICA

| Rol | fontSize | Color | fontFamily (id Excalidraw) |
|---|---:|---|---|
| Título maestro de lienzo | 48–64 | `#1e1e1e` o `#1971c2` | 5 (Excalifont) |
| Título de momento / sección | 36 | `#e03131` | 5 |
| Subtítulo / concepto | 28 | `#1e1e1e` | 5 |
| Cuerpo / definición | 16–20 | `#1e1e1e` | 5 |
| Snippet de código (monoline) | 28 | `#1971c2` | 5 (a veces 3 = Cascadia para mono) |
| Etiqueta sobre flecha / dato pequeño | 16–20 | `#f08c00` | 5 |
| Confirmación / acierto | 20 | `#2f9e44` | 5 |
| Numerador grande de paso (estilo CLASE 08) | 48 | rotativo (`#e03131`/`#1971c2`/`#f08c00`/`#2f9e44`) | 5 |

**Default fontFamily: 5 (Excalifont)**. Solo cambiar a:
- **3 (Cascadia)** cuando el snippet sea un bloque de código denso multilínea que deba verse monospace.
- **2 (Helvetica)** o **1 (Virgil)** son excepciones de clases tipo CLASE 08 — no usar por default.

---

## 5. ANATOMÍA ESTRUCTURAL DE UN LIENZO

### 5.1 Layout: timeline horizontal vs vertical

**Timeline horizontal** (preferido cuando la clase tiene 5–7 momentos secuenciales):
- Lienzo muy ancho (ej. 17 000 × 1 500 px en CLASE 08).
- Cada momento ocupa una "columna" o "panel" del lienzo, con su numerador grande arriba (`01`, `02`, …).
- El instructor avanza horizontalmente conforme la clase progresa.

**Vertical** (preferido cuando es una sola idea profunda con sub-bloques):
- Lienzo alto (ej. CLASE 11 con delta_y ≈ 6 866 px).
- Sub-bloques apilados arriba-abajo.

**Default: horizontal** para clases completas; **vertical** para diagramas individuales.

### 5.2 Estructura típica "título + concepto + sintaxis + regla"

Patrón estable (95% de los conceptos en Eric):

```
TÍTULO ROJO 36-48px       (#e03131)
    ↓
Definición negra 28px     (#1e1e1e)  — 1 a 3 líneas
    ↓
Caja azul 28px            (#1971c2)  — sintaxis o ejemplo de código
    ↓
Etiqueta naranja 20-28px  (#f08c00)  — regla operativa o consecuencia
```

### 5.3 Uso de grupos (`groupIds`)
- ✅ Usar para **wireframes** (rectángulo + ellipses + textos que forman una mini-UI).
- ✅ Usar para **módulos repetidos** (tarjetas en grilla, videos miniatura).
- ❌ NO usar para texto + flecha conectados — basta el `binding`.

### 5.4 Uso de freedraw
**Permitido y esperado**: Eric usa freedraw como subrayado, encierro, énfasis en vivo. Es la marca de pizarra en vivo. Cuando la skill genera un lienzo "para usar en clase", **dejar espacio para que Eric agregue freedraw después** — no precomponer todo.

### 5.5 Filosofía visual: imágenes-slide primero, hand-drawn segundo

**Cambio de paradigma respecto a v1:** las clases de Eric están dominadas por **imágenes-slide** generadas con IA o tomadas de sitios reales, no por texto suelto + diagramas a mano. Una persona presta más atención a una imagen autoexplicativa que a un párrafo. Por defecto:

- **~50-70% de los Paneles del lienzo son una imagen-slide** (placeholder hoy, imagen real cuando Eric la pegue).
- **El texto suelto sirve como complemento** del Panel: título arriba, etiqueta lateral, anotación de transición — nunca el contenido principal.
- **Los diagramas hand-drawn (patrones 1-8 del §6)** se reservan para conceptos **dinámicos** que se construyen frente al alumno: un flujo if/else que se va dibujando, un árbol DOM que crece, un timeline de momentos que se llena. También para Capa de definición pura (Patrón 2: título rojo + 1-3 líneas en negro).

**Regla de decisión imagen-slide vs hand-drawn:**

| Tipo de Panel | Default |
|---|---|
| Anatomía de sintaxis estática (ej: `transform: translate(x, y)` con flechas a sus partes) | **Imagen-slide** (estilo infografía técnica) |
| Comparativa de dos versiones estáticas | **Imagen-slide** |
| Algoritmo numerado de 4+ pasos (especificidad CSS, instalación) | **Imagen-slide** |
| Estructura UI / wireframe de referencia | **Imagen-slide** o screenshot real |
| Caja de definición (concepto + 1-3 líneas) | **Hand-drawn** (Patrón 2) |
| Flujo if/else que se construye en vivo | **Hand-drawn** (Patrón 5) |
| Árbol DOM que se va expandiendo en vivo | **Hand-drawn** |
| Timeline horizontal de momentos (numeradores 01, 02, …) | **Hand-drawn** (Patrón 6) |
| Demostración de comando con leyenda | **Imagen-slide** si es estable; hand-drawn (Patrón 8) si se construye en vivo |

**No es binario.** Un Panel puede mezclar: una imagen-slide como centro + freedraw/texto suelto alrededor para anotaciones en vivo. Lo que cambia es **dónde vive el contenido principal**.

### 5.5.1 Estilo "anatomía visual" — variante canónica para Paneles de conceptos técnicos

**Cuándo aplica:** Paneles que enseñan una propiedad CSS, función JS, etiqueta HTML o comando — cualquier construcción de código que tenga partes nombradas.

**Estilo de referencia:** infografías tipo samanthaming.com — limpias, didácticas, con identidad visual fuerte. Ver capturas de calibración en `mi-sistema/clase-03/` (Paneles 2.X y 3.X de Grid).

**Reglas del estilo:**

- **Contenedor con borde definido** del color funcional del concepto (azul **_#1971c2_** para contenedores, gris claro **_#868e96_** para neutros).
- **Cajas hijas numeradas (1, 2, 3...)** con colores funcionales rotativos de la paleta canónica §3 (verde **_#2f9e44_**, naranja **_#f08c00_**, azul **_#1971c2_**, rojo **_#e03131_**, lila **_#6741d9_**, amarillo **_#ffec99_**).
- **Etiquetas con flechas** en color funcional del concepto, anotando partes del código o efectos visuales.
- **Fondo blanco** (`#ffffff`), sin gradientes ni texturas.
- **Tipografía sans-serif limpia** (monospace solo para código).
- **Bloques de código central** con borde gris claro, fondo blanco, monospace azul **_#1971c2_**.

**Patrones canónicos preferidos para "anatomía visual":**

| Concepto a enseñar | Patrón canónico §6 a usar |
|---|---|
| Sintaxis de una propiedad con partes nombradas | Patrón 1 (Anatomía de sintaxis) + flechas a etiquetas |
| Una propiedad con comportamiento default vs activo | Patrón 3 (Comparativa antes/después) |
| Misma propiedad con distintos valores y sus efectos | Patrón 4 (Secuencia de estados apilados) |
| Estructura jerárquica padre/hijo con propiedades de cada uno | Patrón 2 (Caja de definición) + Patrón 7 (Wireframe) — tabla lateral con las propiedades de cada participante |
| Combinación de propiedades produciendo un efecto compuesto | Patrón 1 + Patrón 4 (anatomía arriba, comportamiento abajo) |

**Tipo recomendado:** `Imagen-slide` para todos los Paneles de "anatomía visual" — la precisión geométrica (cajas a escala, tipografía limpia, colores funcionales exactos) que requieren estos diagramas es más confiable con IA que dibujada a mano en Excalidraw. Reservar `Hand-drawn` solo para Paneles que Eric va a construir en vivo con el grupo.

### 5.5.2 Frecuencia obligatoria — 1 Panel por concepto nuevo

**Regla:** en momentos que aplican el patrón pedagógico §6.4.4 del **_instructor-system_** (clases técnicas densas: Flex, Grid, hooks, OOP), cada concepto nuevo tiene su **Panel propio**. Sin agrupar, sin omitir.

**Calibración con material real:**

- C03 M2 (Grid básico mobile-first) = 7 sub-puntos pedagógicos → 6 Paneles (el sub-punto de setup no requiere Panel).
- C03 M3 (Grid intermedio) = 5 sub-puntos → 3 Paneles (los sub-puntos de hook y aplicación al lab no requieren Panel).

**Por qué no agrupar:** un Panel con 3 conceptos en una sola imagen es difícil de leer y el alumno no sabe en qué fijarse. Un Panel = un concepto = una idea visual.

**Excepción:** Paneles "anchor pedagógico" (ver §5.5.3) pueden combinar varios conceptos como sneak peek de la clase entera.

### 5.5.3 Patrón "sneak peek" — anchor pedagógico de la clase

**Cuándo aplica:** Paneles del Momento 1 (hook) o del Momento de cierre. NO en momentos centrales.

**Qué es:** un Panel que muestra visualmente un concepto que se enseñará completo en un momento posterior, para que el alumno tenga un mapa mental de "hacia dónde va la clase".

**Calibración con material real:** Panel 1.1 de C03 incluye un sneak peek de **_grid-template-areas_** (la sintaxis declarativa que se enseña completa en M4). El alumno no necesita entender el bloque CSS — solo verlo y registrar "esto viene".

**Reglas:**

- El sneak peek se acompaña SIEMPRE de una anotación que aclara "esto se ve completo en el Momento N" (no dejar al alumno con la duda).
- El sneak peek NO se examina ni se pregunta en el momento donde aparece — es referencia visual nada más.
- En el Panel del momento donde el concepto se enseña completo, mencionar al alumno "esto que vieron en el Panel 1.1 — acá lo vemos completo".

**Por qué funciona:** el alumno absorbe pasivamente la sintaxis con la primera exposición. Cuando llega al momento donde se enseña activamente, el cerebro ya tiene un anclaje visual previo y la curva de aprendizaje es más suave.

### 5.6 Placeholder de imagen en el `.excalidraw`

Como el modelo IA **no genera imágenes binarias** dentro del JSON, cada imagen requerida se inserta como **placeholder visible**: un rectángulo dimensionado + un label que le indica a Eric qué pegar ahí.

**Anatomía del placeholder:**

1. **Rectángulo placeholder:**
   - `strokeStyle: "dashed"`, `strokeColor: "#868e96"` (gris), `strokeWidth: 2`.
   - `backgroundColor: "#f8f9fa"`, `fillStyle: "solid"` (gris muy claro para que se vea el hueco).
   - `roughness: 0` (limpio, para distinguirlo de los diagramas hand-drawn).
   - `roundness: null` (esquinas duras).
   - `width` × `height`: dimensiones exactas de la imagen final. Tamaños típicos: 800×600, 1000×750, 1200×900, 1400×1050 (mantener ratio 4:3 salvo justificación).

2. **Label de texto adentro del placeholder:**
   - Texto: `[IMG-{ID}]\n{descripción corta de la imagen}`
   - Ej: `[IMG-01]\nInfografía: Especificidad CSS`
   - `fontSize: 24`, `strokeColor: "#868e96"`, `textAlign: "center"`, `verticalAlign: "middle"`.
   - `containerId` apuntando al rectángulo placeholder.

3. **El `{ID}`** es correlativo en el archivo: `IMG-01`, `IMG-02`, etc. Cada ID debe coincidir con un prompt en `CLASE {n} - PROMPTS DE IMAGEN.md` (ver §12).

**Por qué placeholder y no `type: image` con `dataURL` vacío:** un `type: image` con `dataURL` inválido rompe el archivo al abrir. El rectángulo + label es robusto, Eric ve claramente dónde va cada imagen con qué tamaño, y al pegar la imagen real solo arrastra encima.

### 5.7 Screenshots reales (no generados por IA)

Cuando la imagen NO se genera con IA porque ya existe en el mundo real (screenshot de un sitio real, captura de coolors.co, captura de DevTools, captura de un repo del lab, captura de una herramienta externa):

- Mismo placeholder con dashed rectangle.
- Label: `[SCREEN-{ID}]\n{qué capturar exactamente}`.
- Ej: `[SCREEN-03]\nDevTools > Computed: padding del div`.
- Estos NO van a la sección de prompts IA — van a la sección "Capturas manuales" del mismo `PROMPTS DE IMAGEN.md` (§12.7).

---

## 6. LOS 9 PATRONES CANÓNICOS DE DIAGRAMA

Cada patrón tiene **regla de aplicabilidad** clara. Cuando el contexto se cumple, usar el patrón.

### Patrón 1 — Anatomía de sintaxis / valor descompuesto
**Aplicar cuando:** se está presentando una construcción sintáctica nueva (`if(){}`, `function nombre(){}`, `<a href="...">`, `@media (){}`) **o un valor único compuesto por varias partes funcionales** (`box-shadow: 0 1px 3px rgba(0,0,0,0.08)`, `transition: box-shadow 0.2s ease`, `pattern="[0-9]{9}"`, `cubic-bezier(0.4, 0, 0.2, 1)`).

```
[Snippet/valor en rectángulo, stroke #1971c2, fontSize 28]
   ↑     ↑     ↑
   |     |     └── flecha bound → etiqueta "Las llaves encierran el código"
   |     └─────── flecha bound → etiqueta "Condición entre paréntesis"
   └───────────── flecha bound → etiqueta "Palabra clave del lenguaje"
```

- Rectángulo del snippet: roughness 0 (limpio), stroke `#1971c2`, fill transparente.
- Etiquetas: fontSize 16–20, color `#f08c00` (naranja).
- Flechas: bound a fragmentos del código.

**Variante "valor descompuesto":** mismo formato, pero el rectángulo central contiene un **único valor compuesto** (no una construcción sintáctica completa). Cada flecha apunta a una de las partes del valor y la etiqueta lateral explica qué controla esa parte específica.

Ejemplos calibrados:
- `box-shadow: 0 1px 3px rgba(0,0,0,0.08)` → 4 flechas: offset-x / offset-y / blur / color con alpha.
- `transition: box-shadow 0.2s ease` → 3 flechas: propiedad / duración / timing function.
- `pattern="[0-9]{9}"` → 2 flechas: rango `[0-9]` / repetición `{9}`.

**Heurística para elegir entre las dos variantes:** si el snippet es una declaración o bloque de código completo, es **sintaxis**. Si el snippet es un valor literal único compuesto por sub-partes, es **valor descompuesto**. La estructura visual es idéntica; la diferencia es el alcance del contenido del rectángulo central.

### Patrón 2 — Caja de definición de concepto
**Aplicar cuando:** se introduce un concepto técnico nuevo (Algoritmo, Función, Variable, Scope, etc.).

```
TÍTULO ROJO 36px            (#e03131)  ej: "QUE ES UNA FUNCION?"

Definición negra 28px       (#1e1e1e)  1–3 líneas
ej: "Es un conjunto de pasos reutilizable para realizar una tarea en especifico"
```

- Sin contenedor — texto suelto.
- La definición es **una sola idea**, no un párrafo.

### Patrón 3 — Comparativa X vs Y
**Aplicar cuando:** hay que contrastar dos enfoques, dos versiones, dos resultados.

```
ENCABEZADO ROJO            ENCABEZADO VERDE
"V1 — Lo que NO debes      "V2 — Cómo SÍ se hace"
hacer"                     (#2f9e44)
(#e03131)
                            
[bloque de contenido]      [bloque de contenido]
```

- Dos columnas paralelas, sin divisor central.
- Separación solo por proximidad espacial.
- Variantes de pares: rojo/verde (mal/bien), azul/naranja (opción 1/opción 2).

### Patrón 4 — Algoritmo numerado
**Aplicar cuando:** se enseña una secuencia de pasos (preparar café, deploy a GitHub Pages, instalación).

```
01. Paso uno
02. Paso dos
03. Paso tres
...
```

- Numerador en `#f08c00` (naranja) o color rotativo si son ≥10 pasos.
- Cuerpo en `#1e1e1e`, fontSize 16–18.
- Alineación izquierda.
- Opcional: ícono/etiqueta arriba en `#f08c00`.

### Patrón 5 — Diagrama de flujo if/else
**Aplicar cuando:** se enseña control de flujo, condicionales, ramificación.

```
[caja "condición" naranja]
        |
   ┌────┴────┐
   ↓         ↓
 true       false
(verde)    (rojo)
   |         |
[bloque]  [bloque]
azul       azul
```

- Caja de condición: stroke `#f08c00`, fill transparente.
- Etiquetas `true`/`false`: `#2f9e44` y `#e03131`.
- Bloques de código: stroke `#1971c2`.
- Flechas con binding obligatorio.

### Patrón 6 — Timeline horizontal de momentos (estilo CLASE 08)
**Aplicar cuando:** el lienzo cubre una clase completa con varios momentos.

```
01           02           03           04           05  ...
Título       Título       Título       Título       Título
fontSize 48  fontSize 48  fontSize 48  fontSize 48  fontSize 48
(rotativo)   (rotativo)   (rotativo)   (rotativo)   (rotativo)
[contenido]  [contenido]  [contenido]  [contenido]  [contenido]
```

- Numeradores rotando colores: `#e03131` → `#1971c2` → `#f08c00` → `#2f9e44`.
- Cada panel tiene ~1500 px de ancho, separado del siguiente por ~200 px.
- Lienzo total: 12 000–18 000 px de ancho.

### Patrón 7 — Wireframe miniatura
**Aplicar cuando:** se está enseñando estructura de UI (clases de HTML, diseño, Figma).

```
┌────────────────────────────┐
│ ○ ○ ○      [Logo]   [Menu] │ ← rectángulos + ellipses agrupados
├────────────────────────────┤
│                            │
│   [Card]  [Card]  [Card]   │ ← rectángulos pequeños con etiquetas (5–10px)
│                            │
└────────────────────────────┘
```

- Roughness 0 (limpio).
- Etiquetas internas en `fontSize` muy bajo (5–10px) para imitar tamaños relativos de UI real.
- **Usar grupos** (`groupIds`) para módulos repetidos (`Card`, `Video miniature`).

### Patrón 8 — Bloque de código con leyenda lateral
**Aplicar cuando:** se enseña un comando o snippet con explicación punto a punto.

```
┌───────────────────────────┐
│ git status                │ ← flecha → "Te dice qué cambió"
│ git add .                 │ ← flecha → "Marca para incluir"
│ git commit -m "..."       │ ← flecha → "Sella la versión"
│ git push                  │ ← flecha → "Sube al remoto"
└───────────────────────────┘
```

- Rectángulo izquierdo: stroke `#1971c2`, contenido en `#69db7c` (verde claro tipo terminal).
- Leyendas a la derecha en `#1e1e1e`.
- Flechas (`←`) bound entre línea de código y leyenda.

### Patrón 9 — Transición de estados / antes-después
**Aplicar cuando:** un concepto tiene **2 estados secuenciales** donde el segundo depende del primero. Distinto del Patrón 3 (Comparativa X vs Y): allí los dos lados son **alternativas mutuamente excluyentes** (la opción mala vs la opción buena). Acá los dos lados son **el mismo objeto en momentos distintos** (estado base de una card → estado hover; main local desincronizado → main local sincronizado tras `git pull`; código sin refactor → código refactorizado).

```
┌──────────────────────┐                ┌──────────────────────┐
│  ESTADO A            │   FLECHA       │  ESTADO B            │
│  (antes / inicial)   │ ───────────►   │  (después / final)   │
│                      │   "evento que  │                      │
│  [representación]    │    dispara la  │  [representación     │
│                      │    transición" │   modificada]        │
└──────────────────────┘                └──────────────────────┘
```

- Dos cajas paralelas (o apiladas vertical si el cambio es de jerarquía/posición).
- Flecha grande entre las dos cajas con **etiqueta del evento o comando** que produce la transición (`:hover`, `git pull`, click, submit, mount, etc.).
- Si el cambio es interno al objeto (el objeto sigue siendo el mismo pero cambia una propiedad), resaltar visualmente la propiedad que cambió en ambos lados (ej: borde rojo alrededor del valor que se modificó).
- Si el estado B es la **versión correcta** y A es la "desincronizada/rota", aplicar la convención de color: A con stroke neutral (gris) o rojo suave, B con stroke verde `#2f9e44` o verde claro.

**Variantes de la flecha entre estados:**
- **Flecha de evento:** ocurre cuando el usuario o sistema dispara algo (`:hover`, click, submit). Etiqueta en `#f08c00` con verbo en presente.
- **Flecha de comando:** ocurre cuando se ejecuta un comando explícito (`git pull`, `npm install`). Etiqueta en `#1971c2` con el comando exacto en monospace.
- **Flecha de tiempo:** ocurre solo por el paso del tiempo (animación de `transition`). Etiqueta con la duración en milisegundos.

Ejemplos calibrados:
- Estado base de card (sombra discreta + Y=0) → hover → estado hover (sombra marcada + Y=-4px).
- `main` local viejo (sin commit de merge) → `git pull` → `main` local sincronizado (con commit de merge).
- CSS con valores hardcoded repetidos → refactor → CSS con `var(--token)`.
- Form sin validación → submit con datos basura → form acepta basura (estado problemático para abrir el concepto de validación).

**Cuándo NO usar Patrón 9 (y usar Patrón 3 en su lugar):** cuando los dos lados son **alternativas que el dev elige** (Flex vs Grid, content-box vs border-box, REST vs GraphQL). Allí no hay "antes" y "después" — hay dos opciones simultáneas. Patrón 3 (X vs Y) es lo correcto.

---

## 7. FORMATO DE SALIDA `.excalidraw` (JSON)

### 7.1 Esqueleto mínimo

Todo archivo generado debe tener esta estructura raíz:

```json
{
  "type": "excalidraw",
  "version": 2,
  "source": "https://excalidraw.com",
  "elements": [],
  "appState": {
    "gridSize": null,
    "viewBackgroundColor": "#ffffff"
  },
  "files": {}
}
```

### 7.2 Esqueleto de un elemento `text`

```json
{
  "id": "abc123XYZ",
  "type": "text",
  "x": 100,
  "y": 200,
  "width": 400,
  "height": 36,
  "angle": 0,
  "strokeColor": "#1e1e1e",
  "backgroundColor": "transparent",
  "fillStyle": "solid",
  "strokeWidth": 1,
  "strokeStyle": "solid",
  "roughness": 1,
  "opacity": 100,
  "groupIds": [],
  "frameId": null,
  "roundness": null,
  "seed": 123456789,
  "version": 1,
  "versionNonce": 987654321,
  "isDeleted": false,
  "boundElements": null,
  "updated": 1700000000000,
  "link": null,
  "locked": false,
  "fontSize": 28,
  "fontFamily": 5,
  "text": "El texto aquí",
  "textAlign": "left",
  "verticalAlign": "top",
  "containerId": null,
  "originalText": "El texto aquí",
  "lineHeight": 1.25,
  "baseline": 24
}
```

### 7.3 Esqueleto de un `rectangle`

```json
{
  "id": "rect456ABC",
  "type": "rectangle",
  "x": 100,
  "y": 100,
  "width": 500,
  "height": 200,
  "angle": 0,
  "strokeColor": "#1971c2",
  "backgroundColor": "transparent",
  "fillStyle": "solid",
  "strokeWidth": 2,
  "strokeStyle": "solid",
  "roughness": 1,
  "opacity": 100,
  "groupIds": [],
  "frameId": null,
  "roundness": {"type": 3},
  "seed": 234567890,
  "version": 1,
  "versionNonce": 876543210,
  "isDeleted": false,
  "boundElements": [],
  "updated": 1700000000000,
  "link": null,
  "locked": false
}
```

### 7.4 Esqueleto de una `arrow` con binding

```json
{
  "id": "arrow789",
  "type": "arrow",
  "x": 200,
  "y": 300,
  "width": 150,
  "height": 0,
  "angle": 0,
  "strokeColor": "#1e1e1e",
  "backgroundColor": "transparent",
  "fillStyle": "solid",
  "strokeWidth": 2,
  "strokeStyle": "solid",
  "roughness": 1,
  "opacity": 100,
  "groupIds": [],
  "frameId": null,
  "roundness": {"type": 2},
  "seed": 345678901,
  "version": 1,
  "versionNonce": 765432109,
  "isDeleted": false,
  "boundElements": null,
  "updated": 1700000000000,
  "link": null,
  "locked": false,
  "points": [[0, 0], [150, 0]],
  "lastCommittedPoint": null,
  "startBinding": {"elementId": "rect456ABC", "focus": 0, "gap": 5},
  "endBinding": {"elementId": "abc123XYZ", "focus": 0, "gap": 5},
  "startArrowhead": null,
  "endArrowhead": "arrow"
}
```

**Crítico:**
- `startBinding` y `endBinding` deben referenciar `id`s de elementos reales del array `elements`.
- El elemento referenciado debe tener el `id` de la flecha en su `boundElements: [{"id": "arrow789", "type": "arrow"}]`.

### 7.5 Esqueleto de una `image` embebida

```json
{
  "id": "img321",
  "type": "image",
  "x": 1000,
  "y": 500,
  "width": 600,
  "height": 400,
  "angle": 0,
  "strokeColor": "transparent",
  "backgroundColor": "transparent",
  "fillStyle": "solid",
  "strokeWidth": 2,
  "strokeStyle": "solid",
  "roughness": 1,
  "opacity": 100,
  "groupIds": [],
  "frameId": null,
  "roundness": null,
  "seed": 456789012,
  "version": 1,
  "versionNonce": 654321098,
  "isDeleted": false,
  "boundElements": null,
  "updated": 1700000000000,
  "link": null,
  "locked": false,
  "status": "saved",
  "fileId": "imageFileIdExample123",
  "scale": [1, 1]
}
```

Y el bloque `files` raíz debe contener:
```json
"files": {
  "imageFileIdExample123": {
    "mimeType": "image/png",
    "id": "imageFileIdExample123",
    "dataURL": "data:image/png;base64,iVBOR...",
    "created": 1700000000000,
    "lastRetrieved": 1700000000000
  }
}
```

**Cuándo usar `type: image`:** SOLO cuando la skill ya tiene la imagen en `base64` lista para embeber (raro — normalmente Eric las pega después). Si no se tiene el `dataURL` real, **no usar `type: image`** porque un `dataURL` vacío o inválido rompe el archivo al abrirlo en Excalidraw.

### 7.5b Esqueleto de un placeholder de imagen (DEFAULT para imágenes pendientes)

Este es el patrón que la skill produce por defecto al detectar que un Panel debe ser una imagen-slide (ver §5.5, §5.6). Son dos elementos coordinados: un `rectangle` que define el espacio + un `text` adentro que identifica la imagen.

**Rectángulo placeholder:**

```json
{
  "id": "imgPh01rect",
  "type": "rectangle",
  "x": 1000,
  "y": 500,
  "width": 1000,
  "height": 750,
  "angle": 0,
  "strokeColor": "#868e96",
  "backgroundColor": "#f8f9fa",
  "fillStyle": "solid",
  "strokeWidth": 2,
  "strokeStyle": "dashed",
  "roughness": 0,
  "opacity": 100,
  "groupIds": ["imgPh01group"],
  "frameId": null,
  "roundness": null,
  "seed": 111222333,
  "version": 1,
  "versionNonce": 333222111,
  "isDeleted": false,
  "boundElements": [{"id": "imgPh01label", "type": "text"}],
  "updated": 1700000000000,
  "link": null,
  "locked": false
}
```

**Label de texto adentro (con `containerId` apuntando al rect):**

```json
{
  "id": "imgPh01label",
  "type": "text",
  "x": 1020,
  "y": 855,
  "width": 960,
  "height": 50,
  "angle": 0,
  "strokeColor": "#868e96",
  "backgroundColor": "transparent",
  "fillStyle": "solid",
  "strokeWidth": 1,
  "strokeStyle": "solid",
  "roughness": 0,
  "opacity": 100,
  "groupIds": ["imgPh01group"],
  "frameId": null,
  "roundness": null,
  "seed": 444555666,
  "version": 1,
  "versionNonce": 666555444,
  "isDeleted": false,
  "boundElements": null,
  "updated": 1700000000000,
  "link": null,
  "locked": false,
  "fontSize": 24,
  "fontFamily": 5,
  "text": "[IMG-01]\nInfografía: Especificidad CSS",
  "textAlign": "center",
  "verticalAlign": "middle",
  "containerId": "imgPh01rect",
  "originalText": "[IMG-01]\nInfografía: Especificidad CSS",
  "lineHeight": 1.25,
  "baseline": 22
}
```

**Crítico:**
- Ambos elementos comparten `groupIds` para que Eric pueda moverlos/borrarlos como una unidad.
- El rect declara al label en `boundElements`; el label declara al rect en `containerId`.
- `strokeStyle: "dashed"` + `roughness: 0` es la firma visual del placeholder — lo distingue de cualquier diagrama hand-drawn del lienzo.
- Para screenshots manuales (§5.7), usar el mismo esqueleto cambiando el prefijo del label a `[SCREEN-{ID}]`.

### 7.6 Generación de IDs y seeds
- `id`: 8–10 caracteres alfanuméricos. Generar pseudoaleatorios.
- `seed`, `versionNonce`: enteros aleatorios de 9 dígitos.
- `updated`: timestamp epoch en ms.

### 7.7 Verificación final
Antes de entregar el archivo, validar:
- [ ] `type: "excalidraw"` está presente en raíz.
- [ ] Todos los `id` son únicos en el array `elements`.
- [ ] Todas las flechas con `startBinding`/`endBinding` referencian IDs reales.
- [ ] Todo elemento referenciado por una flecha tiene la flecha en su `boundElements`.
- [ ] No hay colores fuera del banco §3.
- [ ] No hay emojis en ningún `text`.

---

## 8. FLUJO DE GENERACIÓN

### 8.1 Modo 1 — Generar a partir de Guía Excalidraw (DEFAULT)

Es el modo principal. Asume que `instructor-system` ya escribió `mi-sistema/GUIA EXCALIDRAW - CLASE {n}.md` momento por momento (ver `instructor-system/SKILL.md §15`).

**Pasos:**

1. Leer `mi-sistema/GUIA EXCALIDRAW - CLASE {n}.md`.
2. **Validar el estado de los Paneles:**
   - Si todos los Paneles tienen `Validado por Eric ✓`, proceder.
   - Si hay Paneles en `Borrador`, advertir al usuario: *"Hay {N} Paneles en estado Borrador. ¿Generamos igual o esperamos validación?"*. Si responde "generar igual", proceder marcando el output como provisional.
3. Para cada `## Momento` y cada `### Panel N.X` adentro:
   - Leer el `Tipo` del Panel (ver §12.6 para el mapping completo):
     - `Tipo: Hand-drawn` → generar el patrón canónico (§6) completo en JSON.
     - `Tipo: Hand-drawn en vivo` → generar solo marco/título del Panel en JSON; dejar el cuerpo vacío para Eric.
     - `Tipo: Imagen-slide` → generar **placeholder dimensionado** (§5.6) en JSON + agregar entrada `[IMG-{ID}]` al archivo de prompts.
     - `Tipo: Screenshot manual` → generar **placeholder dimensionado** (§5.7) en JSON + agregar entrada `[SCREEN-{ID}]` a la sección "Capturas manuales" del archivo de prompts.
     - `Tipo: Mixto` → ambos: patrón hand-drawn + placeholder de imagen al lado, según indique el `Contenido del panel`.
   - Para los Paneles hand-drawn: tomar el contenido textual (título, subtítulo, cajas, snippets, flechas) **literalmente de la Guía**. No inventar contenido nuevo. Aplicar paleta (§3) y tipografía (§4) según los roles semánticos.
   - Si el Panel referencia un snippet de código, extraerlo del archivo de lab (no de la Guía si la Guía solo lo describe).
4. Determinar layout del lienzo:
   - Si hay ≥4 Paneles totales, usar **timeline horizontal** (Patrón 6 como contenedor).
   - Si hay <4, usar layout vertical.
5. Generar **dos archivos** en la carpeta de la clase (`mi-sistema/clase-{n}/`):
   - `CLASE {n}.excalidraw` — JSON con diagramas hand-drawn + placeholders.
   - `CLASE {n} - PROMPTS DE IMAGEN.md` — uno o varios prompts IA (§12) + sección de capturas manuales.
6. Validar contra el checklist §10 antes de entregar.

**Regla crítica:** la Guía es la fuente de verdad. Si el guion (`CLASE {n} V{m}.md`) y la Guía dicen cosas diferentes, ganar la Guía. El guion es solo referencia de contexto.

**Regla de IDs:** los IDs `IMG-01`, `IMG-02`, … se asignan en orden de aparición visual de izquierda-a-derecha (o arriba-abajo) en el lienzo. Los `SCREEN-{ID}` van en una numeración paralela independiente. Cada `[IMG-{ID}]` o `[SCREEN-{ID}]` del lienzo debe tener su entrada correspondiente en el `.md` y viceversa — desbalances fallan el checklist §10.

### 8.2 Modo 2 — Regenerar un Panel puntual

Cuando el usuario pide regenerar un Panel específico (ej: *"regenerá el Panel 3.2 de Clase 11"*):

1. Leer la entrada `### Panel 3.2` de la Guía.
2. Generar un `.excalidraw` con solo ese panel.
3. Guardar como `CLASE {n} - Panel {N.X}.excalidraw`.

Útil cuando Eric cambió el contenido de un solo Panel y no quiere regenerar el lienzo completo.

### 8.3 Modo 3 — Generar sin Guía (FALLBACK)

Solo cuando el usuario lo pide explícitamente y no existe `GUIA EXCALIDRAW - CLASE {n}.md`. Útil para diagramas puntuales o pruebas rápidas.

1. Leer Capa 0 + guion (si existen) para deducir los Paneles.
2. Para cada bloque `**EN PANTALLA: EXCALIDRAW...**` del guion, decidir Tipo (§5.5):
   - Concepto estático con anatomía/comparativa/algoritmo/wireframe → **Imagen-slide** (placeholder + prompt).
   - Concepto dinámico que se construye en vivo → **Hand-drawn** (patrón §6 según naturaleza):
     - Caja de definición pura → Patrón 2.
     - Flujo if/else → Patrón 5.
     - Timeline de momentos → Patrón 6.
3. Generar **ambos archivos** (igual que Modo 1): `.excalidraw` con placeholders + `.md` con prompts.
4. **Marcar el output como "no validado contra Guía"** renombrando: `CLASE {n} - sin-guia.excalidraw` y `CLASE {n} - PROMPTS DE IMAGEN - sin-guia.md`.
5. Recomendar al usuario que el flujo correcto es escribir la Guía con `instructor-system` primero — los prompts generados sin Guía son estimaciones, no validados.

---

## 9. PRÁCTICAS DE GENERACIÓN

### 9.1 Espaciado y dimensiones default
- **Espacio entre bloques (vertical):** 60–100 px.
- **Espacio entre paneles de momento (horizontal):** 200–300 px.
- **Ancho default de un panel:** 1 200–1 600 px.
- **Padding interno de rectángulo a su texto:** 20 px.
- **Margen del rectángulo de un snippet:** suficiente para que el texto no toque los bordes (height = `fontSize * lineHeight * #líneas + 40`).

### 9.2 Generación de coordenadas
- Origen del lienzo: `(0, 0)`.
- Crecer **hacia la derecha** para timeline horizontal.
- Crecer **hacia abajo** para layout vertical.
- Mantener todos los elementos en `x ≥ 0, y ≥ 0`.

### 9.3 Texto multilínea
Cuando el texto tiene saltos de línea, usar `\n` en el campo `text`. El `height` se calcula como `fontSize * lineHeight * cantidadDeLíneas`.

### 9.4 Stroke width
- **strokeWidth: 1** para texto suelto y elementos sutiles.
- **strokeWidth: 2** para rectángulos, flechas, líneas (default para estructura).
- **strokeWidth: 4** para énfasis fuerte (uso esporádico).

### 9.5 Roundness de rectángulos
- `{"type": 3}` para esquinas redondeadas (default en Eric).
- `null` para esquinas duras (usar en wireframes técnicos).

---

## 10. CHECKLIST DE AUTOREVISIÓN ANTES DE ENTREGAR

Antes de entregar cualquier `.excalidraw` generado, validar:

### Estilo
- [ ] Paleta restringida a los 6 colores principales del §3.
- [ ] Tipografía sigue la jerarquía del §4 (título 36–48, cuerpo 16–28).
- [ ] `fontFamily: 5` (Excalifont) por default; `3` solo en bloques de código mono multilínea.
- [ ] `roughness: 1` por default; `0` solo en wireframes/anatomía precisa.
- [ ] `strokeStyle: "solid"` en todo (salvo justificación específica).
- [ ] Sin emojis en ningún `text`.

### Estructura
- [ ] El lienzo aplica al menos uno de los 8 patrones canónicos (§6).
- [ ] Si hay flechas, todas tienen `startBinding`/`endBinding` reales.
- [ ] Los elementos bound tienen la flecha en su `boundElements`.
- [ ] Si hay ≥4 momentos, layout es timeline horizontal (Patrón 6).
- [ ] Los paneles están separados por ~200–300 px.

### Contenido
- [ ] Cada concepto del Capa 0 marcado para Excalidraw tiene su Panel.
- [ ] Cada bloque `**EN PANTALLA: EXCALIDRAW...**` del guion tiene su Panel.
- [ ] Los snippets de código vienen del lab, no inventados.
- [ ] La proporción imagen-slide vs hand-drawn respeta §5.5 (~50-70% imagen-slide en lienzos completos de clase).

### Placeholders e imágenes
- [ ] Todo Panel `Tipo: Imagen-slide` tiene su placeholder (`rect dashed gris` + `text [IMG-{ID}]`) en el JSON.
- [ ] Todo Panel `Tipo: Screenshot manual` tiene su placeholder (`[SCREEN-{ID}]`) en el JSON.
- [ ] Los `id` `IMG-{N}` del JSON coinciden uno-a-uno con las entradas del `PROMPTS DE IMAGEN.md`. Mismo con `SCREEN-{N}`.
- [ ] Cada prompt IA termina con el bloque "Estilo visual" canónico del §12.2 (inamovible).
- [ ] Cada prompt referencia su Panel de origen (`Momento N — Panel N.X`).
- [ ] Las dimensiones del placeholder coinciden con el `Dimensiones objetivo` declarado en el prompt.

### Output
- [ ] El JSON tiene `type: "excalidraw"` en raíz.
- [ ] `version: 2`, `source: "https://excalidraw.com"`.
- [ ] Todos los `id` son únicos.
- [ ] El archivo abre correctamente en excalidraw.com (probar mentalmente la integridad del JSON).
- [ ] El archivo `CLASE {n} - PROMPTS DE IMAGEN.md` se entrega junto al `.excalidraw` (no por separado).

Si una sola casilla queda sin marcar, **iterar el archivo antes de entregarlo**.

---

## 11. INTERACCIÓN CON `instructor-system`

### 11.1 Cómo cita esta skill desde el guion
En `CLASE {n} V{m}.md`, los bloques de pantalla deben citar el patrón:

```markdown
**EN PANTALLA: EXCALIDRAW — Patrón 1 (Anatomía de sintaxis): bloque `if (condicion) { ... }` con flechas a "palabra clave", "condición entre paréntesis", "código en llaves".**
```

Esto permite que `excalidraw-system` reconozca exactamente qué generar para cada bloque sin ambigüedad.

### 11.2 Cómo `instructor-system` informa a `excalidraw-system`
Cuando se genere Capa 0 o el guion, `instructor-system` debe:
- Marcar conceptos con `### ESTRATEGIA VISUAL: Excalidraw — Patrón {N}` (no solo "Excalidraw" genérico).
- En el guion, los bloques `**EN PANTALLA: EXCALIDRAW...**` deben mencionar el patrón.

### 11.3 Cuándo NO usar Excalidraw
Esta skill **no aplica** cuando el contenido es:
- Demostración interactiva (DevTools, código aislado en navegador, code-along en VS Code).
- Slides pre-producidos en Canva que Eric ya tiene como entregable separado.

> **Nota v2:** las imágenes generadas por IA YA SON parte del Excalidraw (vía placeholder + prompt), **no van en Canva**. La frontera anterior "imágenes → Canva" cambió: ahora Excalidraw es el contenedor único de la presentación visual.

Si el guion pide "Canva" o "código en navegador", esta skill **no se invoca**.

---

## 12. GENERACIÓN DE PROMPTS DE IMAGEN IA

### 12.1 Output complementario

Junto con el `.excalidraw`, esta skill **siempre** genera un archivo Markdown paralelo:

```
mi-sistema/clase-{n}/CLASE {n} - PROMPTS DE IMAGEN.md
```

Contiene dos secciones:
1. **Prompts IA** — uno por cada placeholder `[IMG-{ID}]` del lienzo. Listo para copiar y pegar en DALL-E, Midjourney, Sora, Gemini, ChatGPT con generación de imagen, o cualquier herramienta de Eric.
2. **Capturas manuales** — lista de cada `[SCREEN-{ID}]` con instrucciones de qué capturar y de dónde.

Eric usa este archivo para:
1. Copiar cada prompt y generar la imagen en su herramienta IA preferida.
2. Tomar las capturas manuales del sitio/herramienta indicada.
3. Pegar manualmente cada imagen en el `.excalidraw` reemplazando el placeholder correspondiente (arrastra encima, ajusta al rectángulo).

### 12.2 Estilo visual canónico (bloque inamovible)

**Fuente de verdad:** `mi-sistema/DESARROLLO DE SLIDES.md`.

**Regla absoluta:** TODO prompt termina con este bloque, sin parafrasearlo:

> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

### 12.3 Estructura del archivo `PROMPTS DE IMAGEN.md`

```markdown
# Prompts de Imagen — CLASE {n}: {título}

> Estilo canónico: `mi-sistema/DESARROLLO DE SLIDES.md`.
> Genera cada imagen externamente y pégala en el `.excalidraw` sobre el placeholder con el mismo ID.

---

## Prompts IA

### [IMG-01]: {Nombre corto}

- **Panel de origen:** Momento {N} — Panel {N.X}
- **Dimensiones objetivo:** {W}×{H} px
- **Patrón pedagógico:** {Anatomía de sintaxis / Comparativa / Algoritmo / Wireframe / etc.}

**Prompt:**

> Infografía educativa minimalista sobre "{concepto}". {Descripción de la estructura visual}.
>
> **Elementos a mostrar:**
> - {Elemento 1, con texto literal entre comillas}
> - {Elemento 2, con texto literal entre comillas}
> - {Flechas / relaciones, con dirección y color}
>
> **Código de colores funcional:**
> - {Concepto A}: {color} (rol semántico)
> - {Concepto B}: {color} (rol semántico)
>
> **Estilo visual**: {bloque inamovible del §12.2}

---

### [IMG-02]: …

(siguiente prompt)

---

## Capturas manuales

### [SCREEN-01]: {Qué capturar}

- **Panel de origen:** Momento {N} — Panel {N.X}
- **Dimensiones objetivo:** {W}×{H} px
- **Fuente:** {URL, nombre de herramienta, ruta en VS Code, etc.}
- **Instrucción:** {pasos para llegar a la vista exacta a capturar}

---

### [SCREEN-02]: …
```

### 12.4 Reglas de redacción del prompt

1. **Empezar con `"Infografía educativa minimalista sobre 'X'"`** — fija el género desde la primera palabra. No usar "diseño", "ilustración", "imagen artística".
2. **Describir la estructura espacial primero** ("dos bloques apilados verticalmente", "pirámide de 4 peldaños de abajo hacia arriba", "código central con flechas saliendo a etiquetas laterales"). El modelo necesita el layout antes que los detalles.
3. **Citar el texto EXACTO que debe aparecer en la imagen entre comillas dobles.** El modelo IA no debe inventar texto — siempre fallará en el lenguaje técnico. Si el texto va a aparecer en pantalla, va literal entre comillas en el prompt.
4. **Asignar colores funcionales explícitos** ("'translate' en morado, 'eje-x' en rojo, 'eje-y' en azul"). Esto le da al alumno un mapa mental color → concepto consistente entre slides.
5. **Sin floritura.** Nada de "elegante", "estética moderna", "diseño profesional", "vibrante", "creativo". Eric quiere claridad técnica, no estética.
6. **Cerrar siempre con el bloque "Estilo visual" canónico del §12.2.** Inamovible. Si el prompt no termina con ese bloque, falla el checklist §10.
7. **Coordinar dimensiones del prompt con el placeholder del JSON.** El campo `Dimensiones objetivo: 1000×750 px` debe coincidir con `width: 1000, height: 750` del rectángulo placeholder.

### 12.5 Ejemplos calibrados (basados en `DESARROLLO DE SLIDES.md`)

#### Ejemplo A — Anatomía de sintaxis (CSS `transform: translate`)

```markdown
### [IMG-03]: Anatomía de `transform: translate`

- **Panel de origen:** Momento 4 — Panel 4.2
- **Dimensiones objetivo:** 1000×750 px
- **Patrón pedagógico:** Anatomía de sintaxis

**Prompt:**

> Infografía educativa minimalista sobre "transform: translate en CSS". Estilo diagrama técnico limpio. Diseño en dos bloques apilados verticalmente:
>
> Bloque superior (Sintaxis): código central en tipografía monospace grande mostrando `transform: translate(eje-x, eje-y);`. De cada término sale una flecha de su mismo color apuntando a su etiqueta descriptiva a la derecha.
>
> Bloque inferior (Ejemplos): título "Ejemplos:" en negro. Dos renglones de código con su efecto explicado en gris al lado.
>
> **Elementos a mostrar:**
> - Código: `transform: translate(eje-x, eje-y);`
> - Flecha morada desde "translate" → etiqueta "Desplazar de su posición"
> - Flecha roja desde "eje-x" → etiqueta "Derecha (positivo) / Izquierda (negativo)"
> - Flecha azul desde "eje-y" → etiqueta "Abajo (positivo) / Arriba (negativo)"
> - Renglón 1: `transform: translate(0px, -10px);` con anotación gris "Efecto de flotar hacia arriba en el hover"
> - Renglón 2: `transform: translate(20px, 0px);` con anotación gris "Mover el elemento a la derecha"
>
> **Código de colores funcional:**
> - Palabra clave (`translate`): morado
> - Eje horizontal (`eje-x`): rojo
> - Eje vertical (`eje-y`): azul
> - Anotaciones secundarias: gris oscuro
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.
```

#### Ejemplo B — Algoritmo jerárquico (Especificidad CSS)

```markdown
### [IMG-05]: Especificidad CSS (sistema de puntos)

- **Panel de origen:** Momento 3 — Panel 3.1
- **Dimensiones objetivo:** 1200×900 px
- **Patrón pedagógico:** Algoritmo numerado / jerarquía

**Prompt:**

> Infografía educativa minimalista sobre "Especificidad en CSS (El Sistema de Puntos)". Pirámide invertida de 4 peldaños que va de menor a mayor peso, de abajo hacia arriba.
>
> **Elementos a mostrar:**
> - Título superior en negro: "ESPECIFICIDAD EN CSS (El Sistema de Puntos)"
> - Peldaño 4 (base, el más ancho): "Etiquetas y Pseudoelementos" — código de ejemplo `<p>, <h1>, div` — puntaje `(0, 0, 0, 1)` — etiqueta lateral "Menor peso (General)"
> - Peldaño 3: "Clases y Pseudoclases" — código `.mi-clase, :hover` — puntaje `(0, 0, 1, 0)`
> - Peldaño 2: "Identificadores (IDs)" — código `#mi-id` — puntaje `(0, 1, 0, 0)`
> - Peldaño 1 (cima, el más estrecho): "Estilos en Línea (Inline)" — código `style="color: red;"` — puntaje `(1, 0, 0, 0)` — etiqueta lateral "Mayor peso (Específico)"
>
> **Código de colores funcional:**
> - Peldaño 4: verde para el código y el puntaje
> - Peldaño 3: naranja para el código y el puntaje
> - Peldaño 2: rojo para el código y el puntaje
> - Peldaño 1: azul para el código y el puntaje
> - Resto del texto (títulos, etiquetas laterales): negro/gris oscuro
>
> **Estilo visual**: Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave (bloques de código, números, etiquetas, conexiones). Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.
```

#### Ejemplo C — Captura manual (no genera prompt)

```markdown
### [SCREEN-02]: DevTools — Computed tab del div con padding

- **Panel de origen:** Momento 5 — Panel 5.1
- **Dimensiones objetivo:** 900×700 px
- **Fuente:** Chrome DevTools en el sitio del lab Clase 06 (`code201/clase06/lab/index.html`).
- **Instrucción:**
>   1. Abrir el lab terminado en Live Server.
>   2. Inspeccionar el div con clase `.tarjeta`.
>   3. Ir a la pestaña Computed.
>   4. Capturar el área que muestra el box model (padding/border/margin visualizado en colores).
>   5. Cropear al área del box model + lista de propiedades computed visibles. Sin ventana del navegador completa.
```

### 12.6 Mapping `Tipo` de la Guía Excalidraw → output

`instructor-system` debe declarar el `Tipo` explícitamente en cada `### Panel N.X` de la Guía (ver `instructor-system/SKILL.md §15`). Esta skill lee ese campo y decide:

| `Tipo` en la Guía | Output en `.excalidraw` | Output en `PROMPTS DE IMAGEN.md` |
|---|---|---|
| `Hand-drawn` (o ausente para Patrones 2, 5, 6) | Patrón canónico §6 dibujado completo en JSON | — (nada) |
| `Hand-drawn en vivo` | Solo marco/título del Panel en JSON; cuerpo vacío para que Eric dibuje en clase | — (nada) |
| `Imagen-slide` | Placeholder dashed §5.6 con label `[IMG-{ID}]` | Entrada `### [IMG-{ID}]:` con prompt IA completo |
| `Screenshot manual` | Placeholder dashed §5.7 con label `[SCREEN-{ID}]` | Entrada `### [SCREEN-{ID}]:` en sección "Capturas manuales" |
| `Mixto` (hand-drawn + imagen como elemento secundario) | Ambos: patrón hand-drawn + placeholder al lado | Entrada `[IMG-{ID}]` si la parte de imagen es generada por IA |

Si el campo `Tipo` falta en la Guía, esta skill **debe preguntar** antes de generar — no asumir hand-drawn por default.

### 12.7 Anti-patrones de prompts

❌ **NO** pedir "iconos planos modernos", "estilo flat design", "vector art colorido". Eric quiere infografía técnica, no decoración.

❌ **NO** dejar el texto abierto a interpretación del modelo (`"un ejemplo de código"`). Citar siempre el código exacto entre comillas.

❌ **NO** mezclar varios conceptos en un solo prompt para "ahorrar imágenes". Un Panel = un prompt = una imagen. Si el contenido es muy denso, partirlo en dos Paneles a nivel de Guía.

❌ **NO** parafrasear el bloque "Estilo visual" del §12.2. Es inamovible, va literal.

❌ **NO** usar emojis en los prompts ni en el texto que debe aparecer en la imagen.

❌ **NO** generar un prompt para algo que es mejor dibujar en vivo (un flujo if/else que se construye paso a paso frente al alumno). Esos van como hand-drawn (Patrón 5).
