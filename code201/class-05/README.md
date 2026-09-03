> 📦 **Módulo 2:** Clase 1 de 4

# Clase 05: Programación Imperativa + Arrays

## Resumen
En la Clase 05 exploramos el **paradigma imperativo** sobre el proyecto **Gestor de Presupuesto Personal**. Por primera vez en el curso vas a manejar **arrays** en JavaScript — la estructura de datos más usada del lenguaje. Aplicamos `if`/`else` para validar, `while` para repetir captura, `for` para recorrer arrays y organizamos todo en **funciones imperativas** que modifican estado global. El modelo de datos del proyecto son **2 arrays paralelos** (`nombres[]` + `valores[]`) — funcional pero frágil. Esa fragilidad se vuelve la motivación para los objetos que llegan en C07.

## Estructura sugerida

| **Fase**                  | **Duración** | **Descripción**                                                                                     |
|---------------------------|--------------|-----------------------------------------------------------------------------------------------------|
| **1. Introducción**       | 15 min       | Repaso de Code 101 (variables, if/else, funciones). Introducción al concepto de "estructura de datos" y por qué necesitamos algo más que variables sueltas. |
| **2. Demo Técnica**       | 20 min       | Demo en vivo: declarar array, `.push()`, `.length`, indexación, recorrer con `for`. |
| **3. Laboratorio (3 partes)** | 105 min  | P1 Arrays + `prompt` + validación (~30 min) · P2 `while` + `for` sobre array (~35 min) · P3 Funciones imperativas + reporte (~40 min). |
| **4. Cierre y Síntesis**  | 15 min       | Discusión: ¿qué pasa si olvidamos `push` en uno de los arrays paralelos? Semilla para C07. |


## Resultados esperados

Al concluir la Clase 05, los estudiantes manejarán arrays como estructura básica, recorrerán arrays con `for`, y organizarán el código en funciones imperativas. En detalle:

### Podrán hacer

1. **Declarar y manipular arrays** con `[]`, `.push()`, `.length` e indexación `arr[i]`.

2. **Controlar el flujo de un programa secuencialmente**
   Usar `if`/`else` para validar input del usuario, `while` para repetir captura, `for` para recorrer arrays.

3. **Organizar Tareas en Funciones Imperativas**
   Crear funciones que modifican estado global (`registrarMovimiento`, `calcularSaldo`, `mostrarResumen`).

### Podrán explicar

1. **Qué es un array y cómo se accede a sus elementos** — incluyendo que la indexación arranca en `0`.

2. **Cómo funciona el flujo imperativo**
   Describir cómo las instrucciones se ejecutan una tras otra, modificando variables globales.

3. **Por qué mantener 2 arrays paralelos es frágil**
   Identificar que si actualizas uno y olvidas el otro, el sistema se descalibra silenciosamente.

### Podrán implementar

1. **Funciones básicas para registro y cálculo**
   `registrarMovimiento()`, `calcularSaldo()` y `mostrarResumen()` con flujo `prompt` → `if` → `push`.

2. **Control de flujo y validaciones**
   `if` con falsy (`!nombre`), `isNaN()` para validar números, `tipo !== 'ingreso' && tipo !== 'gasto'` para opciones cerradas.

3. **Modelo de datos con 2 arrays paralelos**
   `nombres[]` (strings) + `valores[]` (números con signo: positivo = ingreso, negativo = gasto).

---

## 📌 Preparación para la clase

> Antes de llegar a clase, piensa en estas preguntas y conversa con tus compañeros si lo deseas:

#### 🧠 Preguntas para reflexionar

1. ¿Cómo guardarías 10 nombres de personas en una sola variable? ¿Y 10 números asociados a esos nombres?
2. Si quieres ejecutar el mismo bloque de código 5 veces, ¿cómo lo escribirías sin copy-paste?
3. Si una función modifica una variable que existe fuera de la función, ¿qué consecuencias podría traer en programas grandes?

#### 📚 Recursos sugeridos

- [Arrays — MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Arrays){:target="_blank"}
- [Bucles e iteración — MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration){:target="_blank"}
- [prompt() — MDN](https://developer.mozilla.org/es/docs/Web/API/Window/prompt){:target="_blank"}

---

## Glosario de Nuevos Términos

- **Array:** Lista ordenada de valores, declarada con `[]`. Se accede por **índice** que arranca en `0`.
- **`.push()`:** Método de array que agrega un elemento al final.
- **`.length`:** Propiedad de array que devuelve cuántos elementos contiene.
- **Indexación `arr[i]`:** Acceder al elemento en la posición `i`. `arr[0]` es el primero.
- **Arrays paralelos:** Dos o más arrays donde el índice `i` describe el mismo "registro" en cada uno (`nombres[i]` y `valores[i]` van juntos). Patrón frágil pero útil hasta conocer objetos.
- **Bucle `while`:** Estructura que repite mientras una condición sea verdadera. Útil cuando no sabes cuántas iteraciones harás.
- **Bucle `for` clásico:** `for (let i = 0; i < arr.length; i++)` — patrón estándar para recorrer un array completo.
- **`prompt()` / `alert()`:** APIs del navegador para pedir input y mostrar avisos.
- **`parseFloat()`:** Convierte un string en número decimal. Devuelve `NaN` si no se puede.
- **`isNaN()`:** Devuelve `true` si el valor no es un número válido.
- **Falsy:** Valores que `if` trata como `false`: `""`, `0`, `null`, `undefined`, `NaN`.
- **Variable Global:** Variable accesible desde cualquier función o parte del programa, común en programas imperativos pequeños.
- **Función Imperativa:** Función que modifica estado externo (variables globales) y/o produce efectos como `prompt`/`console.log`.
