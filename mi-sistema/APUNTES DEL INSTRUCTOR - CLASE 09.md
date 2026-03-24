# APUNTES DEL INSTRUCTOR - CLASE 09

> Este documento es tu resumen táctico para repasar justo antes de dar la clase. Contiene las definiciones directas extraídas de tus propios apuntes ("APUNTES CLASE 09.md") y la CAPA 0, con un enfoque fuerte en ejemplos en vivo y demostraciones prácticas, minimizando las analogías para esta clase específica. Recuerda en la Capa 2/Capa 3 unir la teoría a la práctica de forma directa.

---

## 1. El Entorno y la Integración HTML-JS

### Teoría Directa
- **Dónde escribir JS:** 
  1. En línea (atributos HTML como `onclick` - No recomendado).
  2. Dentro del tag `<script>` al final del `<body>`.
  3. Archivo externo `.js` (Recomendado, usando `src`).

### Ejemplo en Vivo (Demostración)
- Mostrar qué pasa si ponemos el `<script>` en el `<head>` apuntando a un H1 que aún no existe vs ponerlo al final del `<body>`.

---

## 2. Salida y Entrada Básica

### Teoría Directa
- **`console.log()`:** Para salida. La ventana de "Rayos X" del desarrollador. Muestra datos en la consola (F12). No bloquea la página.
- **`prompt("mensaje")`:** Para entrada. Abre cuadro de diálogo. **CRÍTICO:** Siempre retorna un `string`.
- **`alert("mensaje")`:** Para salida. Bloquea la interacción hasta que el usuario acepta.

### Ejemplo en Vivo (Demostración)
- Armar un `let nombre = prompt("...")` seguido de un `console.log("Hola " + nombre)`. Contrastar cómo se ve un `.log` vs un `alert()`.

---

## 3. Variables y Ámbito (Scope)

### Teoría Directa
JS es de tipado dinámico. No se define el tipo en la variable, el motor lo deduce del dato.
- **`var`:** Ámbito de función o global. Se eleva (hoisting) con `undefined`. Permite redeclaración (fuente de bugs). **NO RECOMENDADO**.
- **`let`:** Ámbito de bloque `{}`. Permite reasignación. Uso recomendado para variables cambiantes (ej. contadores).
- **`const`:** Ámbito de bloque `{}`. No permite reasignación (en primitivos), pero en arrays/objetos su contenido sí puede mutar. Ideal por defecto.

### Ejemplo en Vivo (Demostración)
- Intentar reasignar un `const edad = 20; edad = 21;` y mostrar el `TypeError` en la consola en vivo. Explicar por qué el error es nuestro amigo para evitar bugs.

---

## 4. Tipos de Datos Primitivos

### Teoría Directa
No tienen métodos ni propiedades.
- **number:** 42, 3.14 (enteros y decimales son lo mismo).
- **string:** Comillas simples, dobles o backticks. `'42'` es string, no número.
- **boolean:** `true` o `false`.
- **undefined vs null:** `undefined` es "variable declarada sin valor asignado". `null` es "ausencia intencional de valor".

### Ejemplo en Vivo (Demostración)
- Usar el operador `typeof` en vivo en la consola: `typeof 42`, `typeof "42"`, `typeof undefined`.

---

## 5. Operadores y La Trampa del "+"

### Teoría Directa
- **Aritméticos:** `+`, `-`, `*`, `/`, `%` (módulo, excelente para saber si es par).
- **Asignación:** `=`, `+=`, `-=`.
- **Comparación (y Casting):**
  - `==`: Intenta convertir el tipo antes de comparar (`5 == "5"` es `true`).
  - `===`: Igualdad estricta de tipo y valor (`5 === "5"` es `false`). **Recomendado**.
- **La trampa del `+`:** El `+` es bilingüe. Si un operando es texto, concatena en lugar de sumar. Lo cual nos lleva a la conversión de tipos.

### Ejemplo en Vivo (Demostración)
- En la consola de Chrome: escribir `5 - "3"` (da 2) vs `5 + "3"` (da "53"). Mostrar luego cómo el `prompt()` causa este problema y la solución con `Number()`.

---

## 6. Conversión Explícita (Casting) y Template Literals

### Teoría Directa
- **Conversión a Número:** `Number()`, `parseInt()`, `parseFloat()`. (Recordar que si falla devuelve `NaN`).
- **Conversión a String:** `.toString()`. (¡Cuidado, `null` y `undefined` no tienen esto!).
- **Interpolación:** La concatenación con `+` es confusa. Hoy se usan **Template Literals** con backticks `` ` `` y `${variable}`.

### Ejemplo en Vivo (Demostración)
- Mostrar la refactorización rápida en VS Code: pasar de `"Tu edad es " + (Number(edad) + 10)` a un template literal `` `Tu edad será ${Number(edad) + 10}` `` y remarcar la legibilidad.

---


### Notas Tácticas
En esta clase la teoría y el lab van de la mano. Introduce el concepto, pruébalo en la consola o en VS Code, y luego deja que los alumnos lo repliquen en su ejercicio "Adivina el Número".
