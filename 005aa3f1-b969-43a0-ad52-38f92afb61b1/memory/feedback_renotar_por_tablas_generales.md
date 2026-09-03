---
name: feedback_renotar_por_tablas_generales
description: "Clases que renotan algo ya enseñado (Tailwind sobre CSS) se presentan por familias de forma general con tablas, sin re-explicar el concepto subyacente"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 005aa3f1-b969-43a0-ad52-38f92afb61b1
---

Cuando una clase enseña una NUEVA NOTACIÓN de algo que el alumno ya aprendió (ej. Tailwind = el CSS de M1 escrito como clases utilitarias), cada familia de clases se presenta de forma **general, no a medida del proyecto**:

1. **Sintaxis general** (el molde: `{propiedad}{lado}-{tamaño}`, `justify-{valor}`, etc.).
2. **Formato de tabla preferido por Eric: tablas pequeñas POR PROPIEDAD con columnas `Clase · Valores · CSS equivalente`.** La columna Clase va GENERAL con placeholder (`justify-{v}`, `text-{tamaño}`), NUNCA con un valor fijo (`justify-between` está mal); los valores que puede tomar van en la columna "Valores" de esa misma fila (`start·center·end·between·around`), no en un bloque aparte. Una tabla chica por propiedad, no una tabla gigante mezclando todo.
3. **Valores = los más usados/estándar, no exhaustivos** (`{intensidad}` → 50·100·500·700·900; `{peso}` → normal·medium·semibold·bold; escala espaciado → 1·2·3·4·6·8). Sin decir CUÁLES son, un `{tamaño}` vacío no reduce el universo.
4. **Excepciones que van como tabla ENUMERADA** (una fila por valor, sin columna Valores): cuando cada "valor" es en realidad un prefijo distinto que mapea a algo distinto — prefijos de estado (`hover:`/`focus:`/`active:` → `:hover`/`:focus`/...) y breakpoints (`sm:`/`md:`/`lg:` → media queries). Ahí enumerar es más claro que `{v}`.
5. **Utilidades directas** (sin valor variable: `flex`, `grid`, `flex-1`) van en una mini-tabla aparte `Clase · CSS`.
6. **Uno o dos ejemplos**, no más. Recién DESPUÉS, aplicar al proyecto víctima (code-along específico).

**Prohibido re-explicar qué hace la propiedad CSS subyacente** (qué es `display:flex`, `justify-content`, `padding`): ya se enseñó hace tiempo (C02/C03/C04). Repetirlo es perder tiempo en algo que ya saben. El foco es solo "cómo se escribe ahora".

**Why:** el valor de estas clases no está en el concepto (ya lo dominan) sino en el mapeo notación↔CSS conocido. Re-enseñar el concepto aburre y diluye el foco.

**How to apply:** un sub-punto por familia (en C08 M2: 2.1 Flexbox, 2.2 Grid; cada uno su tabla↔CSS). El panel Excalidraw de cada familia ES su tabla, al estilo del doc `Espaciado Margin - Padding.md`. Formato de referencia validado por Eric. Relacionado con [[feedback_estilo_capa_2_3]] y el patrón [[feedback_patron_concepto_a_lab]] (acá el "concepto" se reduce a la tabla porque ya se enseñó antes).
