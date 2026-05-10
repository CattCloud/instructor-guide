# CAPA 0 — CLASE 09: Fundamentos de JavaScript

> Documento de uso exclusivo del instructor. Contiene los conceptos puros, analogías, contexto histórico y estrategia visual de cada bloque. Leer y practicar ANTES de planificar la clase.

---

## CONCEPTOS DEL BLOQUE 1: El Lenguaje y el Entorno

---

### CONCEPTO: JavaScript (El lenguaje)
JavaScript es un lenguaje de programación interpretado, de alto nivel y orientado a objetos, diseñado para ejecutarse directamente en el navegador web sin necesidad de compilación. Es el único lenguaje que los navegadores entienden nativamente para lógica dinámica. A diferencia de HTML (estructura) y CSS (estilo), JavaScript permite que una página web reaccione a las acciones del usuario, modifique contenido en tiempo real y procese lógica sin recargar la página.

**Dependencia técnica:** JavaScript se ejecuta DESPUÉS de que el HTML carga (por eso el `<script>` va antes de `</body>`). Si el script se carga antes que el elemento HTML que referencia, no encontrará el elemento y fallará.

### ANALOGÍA: El cerebro de la página
HTML es el esqueleto del cuerpo. CSS es la ropa y el aspecto físico. JavaScript es el sistema nervioso: sin él, el cuerpo puede verse bien pero no puede reaccionar, sentir ni moverse. Cuando haces clic en un botón y algo cambia sin recargar la página, eso es JavaScript ejecutándose en el cerebro del navegador.

### HISTORIA: Creado en 10 días
En mayo de 1995, **Brendan Eich** trabajaba en Netscape y recibió una orden de su jefe: en **10 días**, crear un lenguaje de programación para el navegador. El resultado fue un lenguaje funcional pero lleno de decisiones apresuradas que generarían bugs famosos durante décadas (la coerción de tipos, por ejemplo). El lenguaje se llamó primero **Mocha**, luego **LiveScript**, y finalmente **JavaScript**, nombre elegido por marketing para aprovechar la popularidad de Java de Sun Microsystems, aunque son lenguajes radicalmente diferentes. Hoy es el lenguaje más usado del mundo, según Stack Overflow, por más de 10 años consecutivos.

### ESTRATEGIA VISUAL: Historia en Timeline
Imagen estática de timeline horizontal: 1995 → Mocha → LiveScript → JavaScript → Node.js (2009) → #1 Stack Overflow (10+ años). Fondo blanco, línea negra, hitos en naranja.

---

### CONCEPTO: El tag `<script>` y el enlace HTML-JS
El tag `<script src="script.js"></script>` es la instrucción que le dice al navegador que debe descargar y ejecutar el archivo JavaScript especificado. Su posición en el HTML define el orden de ejecución. **Colocarlo antes de `</body>`** garantiza que todos los elementos HTML existen en el DOM antes de que el JavaScript intente interactuar con ellos.

**Dependencia técnica:** Si el `<script>` va en el `<head>` sin el atributo `defer`, el navegador pausará la carga del HTML para ejecutar el JS. Si el archivo JS no existe o tiene el nombre equivocado (case-sensitive en sistemas Linux/Mac), el browser lanzará un error 404 silencioso en la consola.

### ANALOGÍA: El plomero llega después del arquitecto
Cuando construyes una casa, primero el arquitecto levanta las paredes (`<body>` del HTML) y luego el plomero instala los tubos que conectan todo (el `<script>`). No tiene sentido que el plomero llegue antes de que existan las paredes donde anclarse. El `</body>` es el momento en que la "casa" está estructuralmente lista.

### ESTRATEGIA VISUAL: Diagrama de archivos
Imagen estática de dos archivos lado a lado: `index.html` y `script.js`, con una flecha de conexión que parte del tag `<script src="script.js">` hacia el archivo `.js`. Resaltar con color la posición del tag dentro del HTML (antes de `</body>`).

---

### CONCEPTO: console.log()
`console.log()` es una función de depuración que imprime valores en la **Consola del Navegador** (accesible con `F12 → Console`). No modifica la página visible para el usuario. Es la herramienta más usada por cualquier desarrollador JavaScript para inspeccionar valores, verificar que una función se ejecutó, o diagnosticar errores en tiempo real.

**Dependencia técnica:** El `console` es un objeto global del navegador (también disponible en Node.js). `log()` es uno de sus métodos. Existe también `console.error()`, `console.warn()`, `console.table()`, etc. El resultado visible en la consola es la representación en string del valor pasado como argumento.

### ANALOGÍA: La ventana de rayos X del código
Un médico no puede ver los huesos del paciente a simple vista; necesita una radiografía. Tú no puedes ver qué valor tiene una variable mientras el código corre; necesitas `console.log()`. Es la radiografía del estado interno de tu programa en cualquier momento.


### ESTRATEGIA VISUAL: Código en vivo en VS Code + Consola
No se necesita imagen. Demo en vivo: abrir VS Code con un `script.js` vacío, escribir `console.log('Hola mundo')`, abrir la consola del navegador con F12, guardar y ver el resultado. El contraste entre pantalla vacía (HTML) y output en consola es el punto de aprendizaje.

---

## CONCEPTOS DEL BLOQUE 2: Variables y Tipos de Dato

---

### CONCEPTO: Variable
Una variable es un espacio de memoria con nombre que guarda un dato que puede ser referenciado y potencialmente modificado durante la ejecución del programa. En JavaScript moderno se declaran con `let` (para valores que cambian) o `const` (para valores que no cambian). El nombre de la variable no es el dato; es la etiqueta que apunta a ese dato en memoria.

**Dependencia técnica:**
- `let x = 5` → Declara la variable en el scope del bloque donde se define. Puede ser reasignada.
- `const x = 5` → Declara una referencia constante. No puede reasignarse (pero sí puede mutar si es un objeto o array).
- `var` (evitar): declara en el scope de la función, no del bloque. Genera bugs históricos con hoisting. No usar en código nuevo.

**Regla de uso:** Preferir `const` por defecto. Cambiar a `let` solo cuando se necesite reasignar. Nunca usar `var`.

### ANALOGÍA: Caja con etiqueta
Una variable es como una caja física donde almacenas un objeto. La etiqueta en la caja es el nombre de la variable (`edad`). El contenido de la caja es el valor (`25`). Con `let`, puedes abrir la caja y cambiar lo que hay dentro. Con `const`, la caja viene sellada de fábrica: puedes ver su contenido pero no reemplazarlo.

### ESTRATEGIA VISUAL: Diagrama de cajas
Imagen estática: dos cajas dibujadas. La primera tiene etiqueta `let edad` y dentro el número `25`, con una flecha que muestra que el contenido puede cambiar a `26`. La segunda tiene etiqueta `const MAXIMO` y un candado en la tapa. Fondo blanco, trazo negro.

---

### CONCEPTO: Tipos de Dato Primitivos (string, number, boolean)
Un tipo de dato define la naturaleza del valor almacenado y determina qué operaciones son válidas sobre él. JavaScript tiene 3 tipos primitivos fundamentales:

- **`string`**: Texto. Siempre entre comillas simples `'hola'`, dobles `"hola"` o backticks `` `hola` ``. No importa si contiene números: `'42'` es string.
- **`number`**: Valor numérico entero o decimal. Sin comillas: `42`, `3.14`, `-7`. No hay tipos separados para entero y flotante.
- **`boolean`**: Solo dos valores posibles: `true` o `false`. Sin comillas. Fundamental para condiciones lógicas.

**Dependencia técnica:** JavaScript es un lenguaje de **tipado dinámico**: una variable puede cambiar de tipo durante la ejecución (`let x = 5; x = 'hola'` es válido). Esto es fuente de muchos bugs. Se puede verificar el tipo con el operador `typeof`: `typeof 42` → `'number'`, `typeof 'hola'` → `'string'`.

**Regla crítica:** Las comillas definen el tipo. `42` es `number`. `'42'` es `string`. `true` es `boolean`. `'true'` es `string`.

### ANALOGÍA: Tipos de contenedor
No es lo mismo una botella de vidrio que una caja de cartón que una bolsa sellada herméticamente. Cada contenedor está diseñado para un tipo de contenido. Si metes agua en una caja de cartón, se destruye todo. Si intentas sumar un `string` y un `number` en JavaScript sin conversión, el resultado no será lo que esperas: el programa no se rompe, pero el comportamiento es incorrecto.

### ESTRATEGIA VISUAL: Tabla de tipos con ejemplos + trampa
Imagen estática con 3 columnas: Tipo | Ejemplo válido | Ejemplo trampa.
- `string` | `'Hola'` | `'42'` ← sigue siendo string aunque parezca número
- `number` | `42` | `42.0` ← igual que `42`
- `boolean` | `true` | `'true'` ← string, no booleano

---

## CONCEPTOS DEL BLOQUE 3: Operadores y Manejo de Datos

---

### CONCEPTO: Operadores Aritméticos y la Trampa del `+`
Los operadores aritméticos realizan cálculos matemáticos: `+` (suma), `-` (resta), `*` (multiplicación), `/` (división), `%` (módulo — devuelve el residuo de una división entera).

**La trampa del `+`:** El operador `+` tiene comportamiento dual. Con dos `number`, suma. Con un `string` y cualquier otro tipo, **concatena** (convierte todo a string y lo une). Los demás operadores (`-`, `*`, `/`, `%`) **sí convierten strings a number** automáticamente (coerción implícita).

**Dependencia técnica:**
```js
5 + 3       // → 8      (suma numérica)
'5' + 3     // → '53'   (concatenación: el number 3 se convierte a string)
'5' - 3     // → 2      (el string '5' se convierte a number)
'5' * '3'   // → 15     (ambos se convierten a number)
```

**Módulo (`%`):** Devuelve el residuo de dividir. `10 % 3` → `1`. Uso práctico: verificar si un número es par: `numero % 2 === 0`.



### ESTRATEGIA VISUAL: Código en vivo en Consola de Chrome
Demo directa en la consola del navegador (F12). No se necesita imagen previa. Escribir en la consola: `5+3` (→ 8), `'5'+3` (→ '53'), `'5'-3` (→ 2). El contraste visual en la consola es suficiente.

---

### CONCEPTO: prompt(), alert() y la Conversión de Tipos
`prompt('mensaje')` abre un diálogo nativo del navegador que le pide al usuario que escriba algo. **Devuelve SIEMPRE un string**, sin excepción, incluso si el usuario escribe un número.

`alert('mensaje')` muestra un diálogo de información al usuario. No devuelve nada útil.

Para convertir el string de `prompt()` a número se usa `Number(valor)`: convierte un string numérico a `number`. Si el string no es convertible, devuelve `NaN` (Not a Number).

**Dependencia técnica:**
```js
let edad = prompt('¿Cuántos años tienes?');
typeof edad              // 'string' ← siempre
edad + 10                // '2510' ← concatenación, bug
Number(edad) + 10        // 35 ← correcto
parseInt(edad) + 10      // 35 ← también válido (solo parte entera)
```


### ESTRATEGIA VISUAL: Diagrama de flujo
Imagen estática: `prompt()` → "el usuario escribe 25" → el valor llega como `'25'` (string) → `Number('25')` → `25` (number). Fondo blanco, flecha negra, warning en rojo naranja en el paso del string.

---

### CONCEPTO: Concatenación vs Template Literals
Existen dos formas de unir texto y variables en JavaScript:

1. **Concatenación con `+`:** Une strings y variables usando el operador `+`.
   ```js
   'Hola ' + nombre + ', tienes ' + edad + ' años.'
   ```
   Problema: se vuelve ilegible con muchas variables.

2. **Template Literals (ES6):** Usa backticks (`` ` ``) y `${variable}` para insertar valores directamente dentro del string. Más legible, moderno y el estándar actual.
   ```js
   `Hola ${nombre}, tienes ${edad} años.`
   ```

**Dependencia técnica:** Los template literals permiten **multi-línea nativa** (retorno de carro dentro del string) y **expresiones evaluadas**: dentro de `${}` puedes poner cualquier expresión JavaScript válida, no solo variables.


### ESTRATEGIA VISUAL: Comparativa lado a lado (Código)
Imagen con dos bloques de código del mismo resultado: izquierda usa concatenación, derecha usa template literals. Resaltar con color la legibilidad del ${} vs el caos de las comillas y los `+`.

---

## CONCEPTO TRANSVERSAL: Algoritmo y Pensamiento Computacional

### CONCEPTO: Algoritmo
Un algoritmo es una secuencia finita, ordenada y precisa de instrucciones diseñada para resolver un problema o lograr un resultado. Cada instrucción debe ser **determinista** (siempre produce el mismo resultado dado el mismo input) y **ejecutable** (la computadora puede realizarla).

**Propiedades que debe cumplir:**
1. **Finito:** Debe terminar en algún momento.
2. **Preciso:** Cada paso debe ser inequívoco, sin ambigüedad.
3. **Con entrada(s):** Datos que recibe para trabajar.
4. **Con salida(s):** Al menos un resultado.

**Dependencia técnica:** Un programa de computadora es la implementación concreta de un algoritmo en un lenguaje de programación. La diferencia entre un buen desarrollador y uno regular es la capacidad de descomponer problemas en algoritmos claros ANTES de escribir código.



### ESTRATEGIA VISUAL: Diagrama de flujo de la Dinámica del Café
Esquema dibujado en **Excalidraw en vivo** durante clase: nodos de decisión y proceso que representan los pasos de preparar café. El instructor construye el diagrama EN VIVO mientras la clase aporta pasos. Si alguien dice "poner el café", el instructor pregunta: "¿en qué recipiente? ¿cuántos gramos? ¿con agua fría o caliente?". Eso ilustra el nivel de precisión que una computadora necesita.

---

## RESUMEN DE DEPENDENCIAS TÉCNICAS

| Concepto | Depende de |
|---|---|
| `<script>` al final del `<body>` | Que el DOM esté construido antes de ejecutar JS |
| `const` vs `let` | El scope donde se declara y si el valor se reasignará |
| `typeof` | El tipo de dato ACTUAL del valor en memoria |
| `'5' + 3 = '53'` | La prioridad de concatenación del `+` cuando hay un string |
| `prompt()` → siempre string | El API del navegador retorna DOMString siempre |
| `Number()` | Conversión explícita de coerción de string a number |
| Template literals | Sintaxis ES6+, backticks y evaluación de expresiones en `${}` |

---

## PREGUNTAS ANTI-IMPOSTOR (Para el instructor antes de la clase)

1. ¿Cuál es la diferencia entre `let`, `const` y `var`, y cuándo usarías cada uno hoy en 2025?
2. ¿Por qué `'5' + 3` da `'53'` pero `'5' - 3` da `2`? ¿Qué mecanismo interno de JS lo explica?
3. Si hago `prompt()` y el usuario escribe `"5"`, ¿qué devuelve `Number("5")`? ¿Y `Number("5px")`? ¿Y `Number("")`?
4. ¿Por qué el tag `<script>` va antes de `</body>` y no en el `<head>`?
5. ¿Qué diferencia hay entre `console.log(42)` y `console.log('42')`? ¿Se ve diferente en la consola?
