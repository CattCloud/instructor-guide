# CAPA 0 — CLASE 12: Manejo de Errores y Estados

> **Fuentes:** **_code201/class-12/README.md_** · **_code201/class-12/lab/README.md_** · **_code201/class-12/lab/rubric.md_** · **_code201/class-12/APUNTES PROPIOS.md.md_** *(inputs canónicos: README + lab; apuntes propios como apoyo conceptual; **sin slides** en C12)*
> **Módulo:** M3 — Clase 4 de 4 (**CIERRE del Módulo 3**)
> **Proyecto víctima:** **Pokédex** (repo **_pokedex_**, rama **_lab12-errores_**) — la MISMA app de C09/C10/C11. Hoy se **endurece**: lo que en C11 se rompía a propósito (buscar un nombre inexistente, sin red al abrir) hoy se atrapa, se comunica y deja la app **viva**.
> **Continuidad con C11:** el alumno llega con la Pokédex consumiendo la PokeAPI con `async/await`, búsqueda por nombre, captura al estado, exploración de stats y paginación (HU1-HU5 de C11). Hoy NADA de eso se tira: todo se **envuelve** con manejo de errores y se le agregan estados de UI. Las funciones de C11 (**_obtenerPokemon_**, **_buscarPokemon_**, **_mostrarBusqueda_**, **_mostrarResultado_**, **_capturar_**, **_cargarPokedex_**, **_cargarMas_**, **_adaptarPokemon_**, **_pokedex_**, **_render_**) se reusan, modificándose mínimo cuando hace falta atrapar el error o lanzar uno.
> **Esta clase ES lab CALIFICADO del Módulo 3.** Rúbrica de 5 criterios × 20 pts = 100 pts (HUs + calidad técnica + presentación en vivo + argumentación técnica + desafío con README/deploy). Escala A 90-100 · B 80-89 · C 70-79 · F <70.
> **Día con TEST DIAGNÓSTICO del M3** en los últimos 20 min — cubre lo de C09 a C12.
> **Hoy SÍ se exige README** por primera vez en el curso — porque hoy se enseña Markdown.
> **Requiere internet:** PokeAPI, gratuita, sin clave (igual que C10-C11). Para probar manejo de errores: provocar "sin red" desactivando el WiFi en vivo.

---

## Idea fuerza de la clase

**De una Pokédex frágil a una Pokédex robusta — y la primera vez que el alumno DOCUMENTA su proyecto.** Tres movimientos del lado de robustez + uno de documentación: (1) **atrapar fallos** con `try/catch` para que la app deje de morir ante un error de red (HU1); (2) **distinguir un fallo real de un "no encontrado"** detectando códigos HTTP con `response.ok` y refactorizando del `throw` único de HU2 al estado vacío con `return null` de HU4 — el aprendizaje pedagógico más fuerte del día: "no encontrado" NO es un error; (3) **comunicar el estado al usuario en todo momento** —cargando con spinner, error con mensaje, vacío con aviso neutro— usando `finally` como garante visual. Y para cerrar: el alumno escribe el **`README.md`** del proyecto en **Markdown** — la primera doc del curso, que desbloquea esa práctica para M4 y M5.

---

## BLOQUE 1 — Conceptos previos: errores en programación

*(Antes de aprender a manejar errores, el alumno tiene que saber QUÉ es un error y qué tipos hay. En C11 dejamos romper a propósito una búsqueda inexistente, pero nunca nombramos que JS tiene tipos de error nativos. Este bloque cierra ese hueco antes de meterse en `try/catch`. **Los códigos HTTP no se cubren acá** — entran naturalmente en B3 cuando aparece la pregunta "¿qué status devolvió el servidor?" al explicar `response.ok`.)*

---

### CONCEPTO: ¿Qué es un error en programación?

Un **error** es una situación que **interrumpe la ejecución normal** de un programa porque algo no se puede completar — sintaxis inválida, una variable que no existe, una operación inválida sobre un tipo, una conexión a internet que falla, datos del usuario en formato equivocado. Cuando JavaScript detecta un error, **detiene la ejecución del bloque actual** y, si nadie lo atrapa, **muere el script** y queda colgado en la consola del navegador.

**Sintaxis general — cómo se ve un error en consola:**
```
Uncaught ReferenceError: nombre is not defined
    at app.js:5:13
    at HTMLButtonElement.onclick (index.html:12:21)
```

**Dependencia técnica:** todo error en JS es una **instancia de la clase _Error_** —ya sea creada por el motor del navegador (errores nativos) o por nuestro propio código con **_throw new Error(...)_**—. Esa instancia tiene siempre tres propiedades: **_name_** (qué tipo de error), **_message_** (texto descriptivo), **_stack_** (la pila de llamadas, dónde se originó). Sin manejo, el error se **propaga hacia afuera** hasta llegar al tope del programa y romperlo entero. Con manejo (lo que aprendemos hoy con `try/catch`), el error queda **atrapado** y el programa decide qué hacer.

### ANALOGÍA: La cocina del restaurante

Un error es como un **percance en la cocina** mientras se prepara un plato — se quemó el aceite, falta un ingrediente, se cayó la olla. Si nadie reacciona (sin manejo de errores), la cocina se detiene, los clientes esperan eternamente y el restaurante cierra. Si el chef **atrapa** el percance —usa otro aceite, busca un sustituto, manda al mozo a avisar—, el restaurante sigue funcionando. **Atrapar el error** no significa que no pasó; significa que se decidió qué hacer cuando pasa.

### ETIMOLOGÍA / HISTORIA

La palabra **"bug"** (insecto) viene de un incidente real de 1947 en la computadora Mark II en Harvard: un técnico encontró una polilla atascada en un relé que causaba mal funcionamiento, y la pegó al log con la frase *"first actual case of bug being found"*. De ahí "debug" = "sacar el bicho". JavaScript hereda la convención de C++ y Java de tipar los errores: cada uno tiene su clase (_SyntaxError_, _ReferenceError_, _TypeError_, etc.) que extiende de la clase base **_Error_**, introducida en ECMAScript 3 (1999).

### ESTRATEGIA VISUAL: El flujo "con error" vs "sin error"

Mostrar dos secuencias de cajas apiladas verticalmente: a la izquierda **"SIN error"** —línea 1 verde, línea 2 verde, línea 3 verde, fin OK—; a la derecha **"CON error sin manejo"** —línea 1 verde, línea 2 ROJA (error generado), todo lo de abajo atenuado en gris ("nunca se ejecuta"), abajo el log de consola en rojo. Anclaje: *el error es un punto donde el código se DETIENE; sin manejo, todo lo que sigue se pierde.*

---

### CONCEPTO: Tipos de errores nativos en JavaScript

JavaScript tiene **7 categorías de error nativas** que el motor del navegador genera automáticamente cuando detecta el problema. No las inventa el programador — las dispara el lenguaje. Conocerlas permite **leer** los mensajes de consola y entender qué pasó, antes incluso de pensar en cómo manejarlas.

**Tabla de tipos nativos (las 4 más comunes en desarrollo web + 1 categoría adicional para redes):**

| Tipo | Cuándo aparece | Ejemplo que lo dispara |
|---|---|---|
| **_SyntaxError_** | El parser no puede leer el código | **_console.log("Hola"_** *(falta el `)`)* |
| **_ReferenceError_** | Se usa una variable que NO está declarada | **_console.log(noExiste)_** |
| **_TypeError_** | Una operación inválida para el tipo del dato | **_"Hola".push("Mundo")_** *(strings no tienen `.push`)* |
| **_RangeError_** | Un número fuera del rango permitido | **_new Array(10**10)_** *(array imposible de crear)* |
| **Errores de red / API** | La conexión falla o el servidor responde mal | **_fetch("https://api.invalida.com")_** sin red |

**Sintaxis general — cómo el motor te lo muestra:**
```
NombreDelTipoDeError: Mensaje descriptivo
    at archivo.js:linea:columna
```

**Dependencia técnica:** los 4 primeros son errores de **código** —los disparás vos solo, sin internet ni nada—; el último (errores de red / API) depende de **factores externos** —el WiFi del alumno, el servidor de PokeAPI, una URL mal escrita—. La distinción importa para hoy: **los errores de red SON LOS QUE NOS INTERESAN ATRAPAR** con `try/catch`. Los otros (_SyntaxError_, _ReferenceError_) se atrapan con un **buen linter en VS Code antes de correr el código**, no en producción. *La regla pedagógica del día: `try/catch` se reserva para fallos que NO se pueden prevenir leyendo el código —sobre todo los que dependen de internet—.*

### ANALOGÍA: El control de calidad del coche

**_SyntaxError_** es como un coche que **NO arranca** porque le falta una tuerca —no se mueve, lo arreglás en el taller antes de salir—. **_ReferenceError_** es pedirle al GPS que te lleve a "Macarondia, Perú" —un lugar que NO existe en su base—. **_TypeError_** es echarle aceite de cocina al motor —es un líquido, pero NO el correcto—. **Errores de red** son como un pinchazo en la ruta —no podés evitarlo desde el taller, pero podés llevar la rueda de auxilio (eso es `try/catch`)—. Los 3 primeros se previenen ANTES de arrancar; el último, EN el camino.

### ETIMOLOGÍA / HISTORIA

Los nombres vienen del estándar ECMAScript: **_SyntaxError_** porque "syntax" = la gramática del lenguaje; **_ReferenceError_** porque "reference" = referencia a un identificador (variable, función); **_TypeError_** porque "type" = tipo de dato (number, string, array, object). La clase **_Error_** y sus subclases son parte del lenguaje desde ES3 (1999); cualquier librería o framework moderno (React, Vue, Node.js) las usa internamente cuando algo falla.

### ESTRATEGIA VISUAL: Cinco "tipos de error" como tarjetas

Cinco tarjetas alineadas horizontalmente, cada una con: nombre del tipo en bold (color del tipo), una línea de código mínima que lo dispara (monospace azul), y una etiqueta "se previene en VS Code" (verde) o "se atrapa con `try/catch`" (rojo). Las primeras 4 con etiqueta verde, la última (errores de red) con etiqueta roja destacada. Anclaje: *hoy nos importa la roja — el resto se previenen ANTES de hacer fetch.*

---

### CONCEPTO: El objeto `Error` (la "ficha técnica" de un error)

Cuando JavaScript genera un error —o cuando el programador lo lanza con **_throw new Error(...)_**—, lo que viaja es una **instancia de la clase _Error_**: un objeto con tres propiedades estándar que describen el problema. **_catch (error)_** recibe ese objeto como parámetro y permite leer esas propiedades para decidir qué hacer.

**Sintaxis general — las 3 propiedades del objeto _Error_:**
```javascript
try {
  noExiste();   // ReferenceError
} catch (error) {
  console.log(error.name);      // → "ReferenceError"
  console.log(error.message);   // → "noExiste is not defined"
  console.log(error.stack);     // → la traza completa de llamadas
}
```

**Tabla de propiedades:**

| Propiedad | Qué tiene | Para qué sirve hoy |
|---|---|---|
| **_error.name_** | El nombre del TIPO del error (`"ReferenceError"`, `"TypeError"`, `"Error"`...) | Decidir cómo manejar según el tipo. Hoy en el lab no se usa — se asume que cualquier fallo es de red. |
| **_error.message_** | El TEXTO descriptivo del error | **Lo que mostramos al usuario** en la UI. Es lo más usado del objeto. |
| **_error.stack_** | La pila de llamadas: archivo, línea, función | Debug en consola del navegador. **No se muestra al usuario** —es información para devs—. |

**Dependencia técnica:** cuando hacemos **_throw new Error("No se encontró 'pikachuu'")_**, ese string `"No se encontró 'pikachuu'"` queda en **_error.message_**. En el `catch`, leyendo **_error.message_** sacamos el texto exacto para pintarlo en pantalla — sin tener que duplicar el texto ni hacer condicionales. **Por eso un buen mensaje en el _throw_ es parte de una buena app**: el alumno deja de ver "Algo salió mal" y pasa a ver "No se encontró 'pikachuu'".

### ANALOGÍA: La hoja de incidencia del seguro

Cuando tenés un accidente en el coche, llamás al seguro y abrís una **hoja de incidencia** con tres campos obligatorios: **tipo de siniestro** (choque / robo / incendio — eso es **_error.name_**), **qué pasó exactamente** (texto libre con el detalle — eso es **_error.message_**) y **dónde y cuándo** (ubicación, hora — eso es **_error.stack_**). El seguro decide qué hacer leyendo esa ficha. **_catch (error)_** recibe esa ficha entera y el dev decide qué hacer con el cliente.

### ETIMOLOGÍA / HISTORIA

La convención _name_ / _message_ / _stack_ es estándar en lenguajes con manejo de excepciones desde C++ (1985) y Java (1995). En JS, **_error.stack_** NO está en el estándar ECMAScript — es una **extensión de facto** que TODOS los navegadores implementan, pero su formato exacto varía: Chrome y Firefox lo muestran distinto. Por eso nunca se confía en parsearlo a mano; solo se imprime para debug.

### ESTRATEGIA VISUAL: Tarjeta del objeto _Error_ con sus 3 campos

Un rectángulo grande con el título "objeto Error" arriba (rojo) y tres filas alineadas verticalmente: cada fila con el nombre de la propiedad en monospace azul, un ejemplo de valor entre comillas y una columna a la derecha con "para qué sirve" en negro. La fila de **_error.message_** queda destacada (borde naranja) porque es la única que SE MUESTRA al usuario. Anclaje: *cuando lanzamos un error con `throw`, el string del paréntesis termina en `error.message`.*

---

## BLOQUE 2 — `try / catch / finally` + el objeto Error en acción

*(Una vez que el alumno sabe QUÉ es un error y qué tipos hay, viene el mecanismo que JavaScript te da para atraparlos: `try/catch/finally`. Es la estructura central del día — todo el lab está basado en ella.)*

---

### CONCEPTO: `try / catch / finally` como estructura de control

**_try_** es un bloque que **vigila** un fragmento de código que **podría fallar**. **_catch_** es el bloque al que JavaScript **SALTA AUTOMÁTICAMENTE** si algún error se dispara dentro del `try` — interrumpe lo que estaba ejecutando y empieza a correr el `catch`, pasándole el objeto **_Error_** como argumento. **_finally_** es un bloque que **SIEMPRE corre**, haya error o no — es para limpieza, cierre de recursos, ocultar spinners, garantizar consistencia visual. Las tres palabras juntas forman **una sola estructura de control**, comparable a `if/else` pero para el flujo de errores.

**Sintaxis general:**
```javascript
try {
  // 1. Código que podría fallar
} catch (error) {
  // 2. Si algo en (1) falla, JS salta acá. 'error' es la instancia de Error.
} finally {
  // 3. SIEMPRE corre — al final de (1) sin error, O al final de (2).
}
```

**Fórmula del lab (HU1 — la base):**
```javascript
async function mostrarBusqueda(nombre) {
  mensaje.classList.add("hidden");                  // limpia errores anteriores
  try {
    const pokemon = await buscarPokemon(nombre);
    mostrarResultado(pokemon);                       // se ejecuta solo si no hubo error
  } catch (error) {
    mensaje.textContent = "Algo salió mal. Revisa tu conexión.";
    mensaje.classList.remove("hidden");
  }
}
```

**Dependencia técnica:** el `try` puede contener cualquier código — incluyendo **_await_** que falla, llamadas a funciones que tiran error, accesos a propiedades sobre `null`, etc. El `catch` SOLO se ejecuta si hubo error; si el `try` terminó bien, el `catch` se IGNORA por completo. El `finally` es opcional pero útil cuando hay que garantizar algo —típicamente un cambio de UI— **pase lo que pase**. Una propiedad clave: **`return` dentro del `try` NO salta el `finally`** — el `finally` corre IGUAL antes de que la función devuelva. Por eso es el lugar perfecto para ocultar el spinner (HU3): pase lo que pase con la búsqueda —éxito, error, no encontrado—, el spinner se va a ocultar.

### ANALOGÍA: El paracaidismo

**`try`** es el salto del avión — todo va a salir bien… o no. **`catch`** es el **paracaídas de emergencia** — si el principal falla, se activa solo y te salva. **`finally`** es **plegar las telas al aterrizar** — lo hacés SIEMPRE, hayas usado el paracaídas principal o el de emergencia, hayas caído suave o duro. Sin paracaídas → caés y te rompés (el script muere). Con paracaídas pero sin pliegue → caés bien pero dejás todo desordenado (la UI queda inconsistente, el spinner pegado, etc.).

### ETIMOLOGÍA / HISTORIA

**"try / catch / finally"** viene de **C++ (1985)** y **Java (1995)** — JS los adopta en ES3 (1999). La idea más vieja del concepto está en **Lisp (1972)** con su `condition system`, considerado el sistema de manejo de errores más sofisticado de la historia. La palabra clave **_finally_** es una innovación de Java sobre C++: en C++ no hay `finally` —se usan destructores—; Java lo agregó para hacerlo explícito, y JS lo heredó. Los lenguajes modernos (Python, Ruby, Swift, Rust, Go) toman el patrón con variaciones.

### ESTRATEGIA VISUAL: Diagrama de flujo de las 3 fases

Un diagrama con tres cajas grandes verticales, una flecha de entrada arriba y dos rutas de salida:

```
                    ┌────────────────┐
                    │     try        │ ← código que puede fallar
                    └───────┬────────┘
                            │
            ┌───────────────┴──────────────┐
            ↓ (si NO hubo error)           ↓ (si SÍ hubo error)
                                  ┌────────────────┐
                                  │     catch      │ ← recibe `error`
                                  └────────┬───────┘
                                           │
            ┌──────────────────────────────┘
            ↓
   ┌──────────────────┐
   │     finally      │ ← SIEMPRE se ejecuta
   └────────┬─────────┘
            ↓
       (fin del bloque)
```

Anclaje: *las dos rutas (con error y sin error) SIEMPRE convergen en `finally`. Por eso `finally` garantiza el cambio de UI.*

---

### CONCEPTO: Propagación de errores (qué pasa si NO hay `try / catch`)

Si un error se dispara dentro de una función y NO está envuelto por un `try / catch`, JavaScript **lo propaga hacia afuera** —al código que llamó a esa función—. Si ese código tampoco lo atrapa, sube otro nivel. Y así sucesivamente, **hasta llegar al tope del programa**. En ese punto, el script muere: queda colgado en la consola del navegador con el mensaje en rojo, **y todo el código que iba a ejecutarse después NUNCA corre**.

**Sintaxis general — el error sube hasta romper todo:**
```javascript
function nivelTres() {
  noExiste();                  // ← ReferenceError dispara acá
}
function nivelDos() {
  nivelTres();                  // ← el error sube
}
function nivelUno() {
  nivelDos();                   // ← sigue subiendo
}
nivelUno();                     // ← llega al tope → SCRIPT MUERE
console.log("Nunca sale");      // ← NO se ejecuta
```

**Dependencia técnica:** en C11 esto es **EXACTAMENTE LO QUE PASABA** cuando el alumno buscaba "pikachuu". El error de **_adaptarPokemon_** (no encuentra `.types` en un body de error 404) se disparaba ahí, subía a **_buscarPokemon_**, subía a **_mostrarBusqueda_**, subía hasta el listener de click — y la app moría. Hoy con `try/catch` en `mostrarBusqueda` el error se atrapa antes de llegar al tope y **la app sigue viva**. Esa es la diferencia entre frágil y robusta.

**Buena práctica que viene en B4:** no se mete TODA la app en un solo `try / catch` gigante — eso oculta los errores y los hace difíciles de debuggear. Se atrapan errores **cerca de donde se dispararon**, y se decide qué hacer con cada uno (mostrar mensaje, reintentar, propagar más arriba).

### ANALOGÍA: Las llamadas telefónicas que escalan a supervisor

Un error sin manejar es como una **queja del cliente** que el operador de call center NO sabe resolver: la pasa al supervisor. Si el supervisor tampoco —pasa al gerente. Si el gerente tampoco —cierra el call center entero por incapacidad. **Con manejo (`try/catch`)** = cada nivel atrapa el tipo de queja que sabe resolver, y solo escala las que realmente requieren ir más arriba. *Y a veces el "cliente" se va contento con un "no podemos resolverlo hoy, pero estamos viendo" — eso es lo que hace `catch` cuando muestra un mensaje al usuario.*

### ETIMOLOGÍA / HISTORIA

El término **"call stack"** (pila de llamadas) viene de la estructura de datos LIFO (last-in-first-out) — cada llamada se "apila" sobre la anterior, y al terminar se "desapila". Cuando un error sube, va **desapilando llamadas** hasta encontrar un `try/catch` que lo atrape o llegar al fondo. El `error.stack` que viste en B1 es **literalmente** esa pila — leída de adentro hacia afuera. En navegadores y Node.js modernos, cada función agrega su nombre al stack para que el debug sea legible.

### ESTRATEGIA VISUAL: La pila de llamadas y el error que sube

Un dibujo de "pila" vertical (estilo torre de cajas apiladas) con cuatro niveles: el listener click abajo (base), luego `mostrarBusqueda`, luego `buscarPokemon`, luego `adaptarPokemon` arriba. Una flecha **roja gruesa** que sale del nivel superior (adaptarPokemon) y va subiendo por toda la pila hasta arriba — etiqueta a la izquierda: *"sin manejo: el error sube hasta el tope y mata el script"*. Al lado, otra pila idéntica pero con un escudo verde **`try/catch`** en el nivel de `mostrarBusqueda` — la flecha roja se frena ahí, etiqueta a la izquierda: *"con manejo: el `catch` atrapa el error, la app sigue viva"*. Anclaje: *atrapamos errores cerca de donde nos importan, no en el tope.*

---

## BLOQUE 3 — Códigos HTTP + `response.ok` + `throw` — del fallo genérico al mensaje específico

*(Hasta ahora vimos cómo ATRAPAR errores que ya existen (B2). Ahora vemos qué nos manda la API y cómo distinguir un fallo real de un "no encontrado". Primero los códigos HTTP —que el alumno no conoce y le aparece al abrir DevTools en M3—, después `response.ok` que los lee, y por último `throw` para LANZAR errores propios con mensaje específico. Esto cubre la base de HU2 y prepara el refactor de HU4.)*

---

### CONCEPTO: Códigos HTTP más usuales

Cuando el navegador hace **_fetch_** a una URL, el servidor responde con **dos cosas**: los datos pedidos (el JSON) **y** un número de 3 dígitos llamado **código de estado HTTP** que dice si la petición salió bien o falló, y si falló, por qué. **En C11 nos rompía un 404 y nunca explicamos qué significaba**. Hoy en M3 el alumno abre **DevTools → Network**, busca "pikachuu" en su Pokédex y ve por primera vez ese `404` en pantalla — recién ahí cobra sentido aprender la tabla de códigos.

**Tabla de códigos HTTP más comunes en desarrollo web:**

| Código | Familia | Significado | Cuándo aparece en la Pokédex |
|---|---|---|---|
| **200** | 2xx — Éxito | OK — la respuesta fue exitosa | **_/pokemon/pikachu_** existe → 200 + JSON de pikachu |
| **201** | 2xx — Éxito | Created — recurso creado (típico de POST) | No aparece hoy (la Pokédex solo lee, no crea) |
| **301 / 302** | 3xx — Redirección | Redirección permanente / temporal | No aparece hoy |
| **400** | 4xx — Error del cliente | Bad Request — la petición está mal armada | URL mal formada (ej: `/pokemon/` sin nombre) |
| **401** | 4xx — Error del cliente | Unauthorized — falta autenticarse | APIs con clave (PokeAPI NO la necesita) |
| **403** | 4xx — Error del cliente | Forbidden — sí autenticado pero sin permiso | APIs con permisos por rol |
| **404** | 4xx — Error del cliente | **Not Found — el recurso NO existe** | **_/pokemon/pikachuu_** mal escrito → 404 |
| **500** | 5xx — Error del servidor | Internal Server Error — el servidor se rompió | El servidor de PokeAPI tiene un bug interno |
| **503** | 5xx — Error del servidor | Service Unavailable — el servidor está caído | Mantenimiento o sobrecarga del servidor |

**Sintaxis general — cómo lo lee el código:**
```javascript
const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
console.log(response.status);   // → 200 (o 404, o 500, etc.)
console.log(response.ok);       // → true si status está en 200-299; false en cualquier otro
```

**Dependencia técnica:** la regla pedagógica del día es leer la **familia**, no el número exacto:
- **2xx (200, 201, ...)** = éxito. **_response.ok_** devuelve **_true_**.
- **4xx (400, 401, 403, 404, ...)** = el cliente (nuestro código) hizo algo mal — la URL está mal escrita, falta autenticación, el recurso no existe. **_response.ok_** devuelve **_false_**.
- **5xx (500, 503, ...)** = el servidor falló — no es culpa nuestra, el server se rompió. **_response.ok_** devuelve **_false_**.

**Esto es lo que NO sabíamos en C11:** un 404 NO es un "error del programa" — es **la API contándonos que el recurso no existe**. El servidor respondió bien (la conexión funcionó), pero respondió "no hay nada". Por eso `fetch` **NO falla automáticamente** con un 404: el `fetch` sí completó su trabajo, los datos llegaron — solo que los datos dicen "404 + JSON con detalle del error". Tenemos que **leer el status** para saber si el contenido es lo que queríamos. Eso es lo que va a hacer **_response.ok_** en el próximo concepto.

### ANALOGÍA: El mensajero que SIEMPRE vuelve con algo

Pensá en **_fetch_** como un mensajero que mandás a buscar un libro a la biblioteca. El mensajero **siempre vuelve** —nunca se pierde—. Pero puede volver con:
- **200** — el libro que pediste, perfecto.
- **404** — un papelito que dice "ese libro no existe en la biblioteca" (la biblioteca SÍ está abierta y SÍ te atendió — solo no tiene el libro).
- **500** — un papelito que dice "se cayó el techo de la biblioteca, no pudieron buscar" (el problema es de ELLOS, no tuyo).

Como el mensajero siempre vuelve, **el código nunca explota solo** —vos tenés que revisar QUÉ TRAJO— y decidir cómo reaccionar. Eso es lo que hace **_response.ok_**: te dice rápidamente "el mensajero trajo lo que querías" (true) o "trajo un papelito de excusa" (false).

### ETIMOLOGÍA / HISTORIA

Los códigos HTTP están definidos en el **RFC 7231 (2014)**, que actualiza el RFC original 2616 (1999). La numeración por familias (1xx informacional, 2xx éxito, 3xx redirección, 4xx error cliente, 5xx error servidor) viene del estándar **HTTP/1.0** de 1996. El **404 es el código más famoso de internet** porque casi cualquier navegación rota lo muestra; tiene su propia página de Wikipedia y aparece en memes constantemente. Curiosidad: el número 404 **no tiene relación con una habitación real** del CERN (donde nació el web) como cuenta el mito — es solo un número arbitrario dentro de la familia 4xx.

### ESTRATEGIA VISUAL: Semáforo de familias HTTP

Un panel con tres "semáforos" horizontales: verde (2xx — éxito), amarillo (4xx — error del cliente) y rojo (5xx — error del servidor). Cada semáforo con: el rango numérico arriba, una caja en su color con 2-3 ejemplos representativos adentro (`200 OK`, `201 Created` en verde; `400`, `401`, `403`, `404 Not Found` en amarillo destacado; `500`, `503` en rojo), y debajo una etiqueta "**_response.ok = true_**" (verde) o "**_response.ok = false_**" (amarillo y rojo). El 404 va resaltado con un anillo extra porque es el del día. Anclaje: *no me importa memorizar números — me importa saber si la familia es de éxito o de error.*

---

### CONCEPTO: `response.ok` — por qué `fetch` NO falla con 404

Cuando hacés **_await fetch(url)_**, la promesa de `fetch` **se resuelve exitosamente** mientras la conexión funcionó — incluso si el servidor respondió con un error 404 o 500. Para `fetch`, "exitoso" significa "logré hablar con el servidor"; **NO significa "obtuve los datos que quería"**. Esta es la trampa más común de todas las APIs en JavaScript moderno, y la razón pedagógica más fuerte de C12.

**Sintaxis general:**
```javascript
const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachuu");
// response llegó OK aunque el servidor dijo 404
console.log(response.status);   // → 404
console.log(response.ok);       // → false  (false para cualquier 4xx o 5xx)
```

**Fórmula del lab (HU2 — el check obligatorio):**
```javascript
async function obtenerPokemon(idONombre) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idONombre}`);
  if (!response.ok) {                                    // ← chequeo OBLIGATORIO
    throw new Error(`No se encontró "${idONombre}"`);
  }
  return response.json();
}
```

**Dependencia técnica:** **_response.ok_** es un **booleano** —`true` si el status está en el rango 200-299; `false` en cualquier otro caso (300+, 400+, 500+)—. Por eso el chequeo idiomático es **_if (!response.ok)_** seguido de un `throw`. Si NO se chequea —como pasaba en C11—, la línea **_response.json()_** lee el body de la respuesta… pero ese body NO es el JSON de un Pokémon: es **_{ "detail": "Not Found." }_**. Cuando ese objeto llega a **_adaptarPokemon_**, intenta leer **_data.types_** que NO existe → _TypeError_ → app muere. Por eso `fetch` "parece" fallar en C11 — pero el verdadero fallo está río abajo en `adaptarPokemon`, no en `fetch`. **Hoy lo atajamos en la fuente.**

**Por qué `fetch` se diseñó así:** porque hay APIs que devuelven un 4xx con **información útil en el body** (por ejemplo, un 401 con `{ "needLogin": true }` para indicar al cliente que muestre el login). Si `fetch` rompiera automáticamente con 4xx, no podríamos leer ese body. La decisión del estándar es "te entrego la respuesta cruda, vos decidís cómo interpretarla". Esa decisión es **incómoda al principio** pero es la correcta para el ecosistema HTTP completo.

### ANALOGÍA: El cartero que entrega el sobre cerrado

**_fetch_** es como el **cartero** que te entrega un sobre. El sobre llegó —el cartero hizo su trabajo—. Pero adentro del sobre puede haber:
- La carta que esperabas (200 + JSON del Pokémon),
- Una nota del remitente que dice "ese contacto no existe" (404 + JSON con detalle),
- Una nota que dice "tuvimos un problema interno" (500).

El cartero NO abre los sobres ni decide cuáles son "buenos" o "malos" — solo entrega. **VOS abrís el sobre** (`response.ok` o `response.status`) y decidís qué hacer con cada contenido. El cartero solo falla si **el cartero NO PUDO LLEGAR** — eso sería un error de red real (`fetch` se rechaza), y ahí sí entra el `catch` de un `try`.

### ETIMOLOGÍA / HISTORIA

La **Fetch API** fue estandarizada en **2015** como reemplazo de `XMLHttpRequest` (XHR, de 1999). Tomó la convención "no fallar en 4xx/5xx" del propio XHR — que tampoco fallaba con códigos HTTP de error, solo con errores de red. La razón: en HTTP, un 4xx **NO es un fallo del protocolo** — es una respuesta válida que comunica algo (Not Found, Unauthorized, etc.). Por eso `fetch` la trata como una respuesta normal. **Librerías populares como `axios` envuelven `fetch` y SÍ fallan con 4xx por default** — invierten la convención para no tener que escribir `if (!response.ok)` en cada llamada. Pero el estándar nativo se mantiene fiel al espíritu de HTTP.

### ESTRATEGIA VISUAL: El "checkpoint" de `response.ok` entre `fetch` y `.json()`

Diagrama de flujo horizontal con tres etapas: a la izquierda **_fetch(url)_** en una caja azul → flecha → **_response_** en una caja amarilla destacada con dos sub-rectángulos adentro: `status: 200` (verde) o `status: 404/500` (rojo) — al medio un **rombo de decisión** con la pregunta `response.ok ?` → si verde, sigue a la derecha hacia **_response.json()_** + uso normal; si rojo, sigue hacia abajo a **_throw new Error(...)_** que cae en `catch`. Anclaje: *`response.ok` es el checkpoint entre "llegaron datos" y "llegaron los datos que quería".*

---

### CONCEPTO: `throw` — lanzar errores manualmente con mensaje específico

**_throw_** es la palabra clave para **disparar un error desde tu propio código**. Hasta ahora los errores los disparaba el motor de JS (cuando encontraba un _ReferenceError_ o un _TypeError_); con `throw` somos NOSOTROS los que decidimos: "esta situación es un error, hay que lanzarlo". Una vez lanzado, el flujo es idéntico al de un error nativo: **se propaga hacia afuera** hasta que algún `catch` lo atrape (o el script muera). En el contexto del día, `throw` es la consecuencia natural de `response.ok === false`: el chequeo detecta el problema, y `throw` lo reporta con un mensaje específico al usuario.

**Sintaxis general:**
```javascript
throw new Error("Mensaje descriptivo del error");
```

**Fórmula del lab (HU2 — la combinación `response.ok` + `throw`):**
```javascript
async function obtenerPokemon(idONombre) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idONombre}`);

  if (!response.ok) {                                    // detectado por response.ok
    throw new Error(`No se encontró "${idONombre}"`);    // reportado con throw + mensaje específico
  }
  return response.json();
}
```

**Dependencia técnica:** el string que va dentro de **_new Error("...")_** termina en **_error.message_** del objeto que recibe el `catch`. Por eso es importante: ese mensaje es lo que el usuario va a leer en pantalla. **"No se encontró 'pikachuu'"** es 10× mejor que **"Algo salió mal"**. Cuando `throw` dispara dentro de un `try`, JS **interrumpe inmediatamente** el resto del `try` y salta al `catch` — la línea **_return response.json()_** del ejemplo NUNCA se ejecuta si hubo `throw`. Es la misma semántica que `return`, pero hacia el `catch` en vez de hacia el caller.

**Detalle importante para la rúbrica:** un error con buen mensaje (criterio 2 — calidad técnica) es lo que diferencia un código profesional. La frase **_throw new Error("La API respondió con un error")_** es mediocre; **_throw new Error(`HTTP ${response.status} al pedir ${idONombre}`)_** es mucho mejor — incluye el código HTTP y el recurso pedido.

### ANALOGÍA: El detector de incendios manual

`throw` es como **romper el vidrio del detector de incendios manual** —el botón rojo que activa la alarma a propósito—. Los detectores automáticos (los errores nativos como _ReferenceError_) saltan solos cuando detectan humo. Pero a veces VOS ves humo antes que ellos —por ejemplo, al recibir un 404 que el detector automático de `fetch` no marca como incendio— y necesitás romper el vidrio para que el sistema reaccione. **`throw` es esa decisión consciente:** "esto que veo es un problema, hago sonar la alarma."

### ETIMOLOGÍA / HISTORIA

`throw` viene del inglés "to throw an exception" (lanzar una excepción) — terminología de C++. La palabra **"excepción"** (vs "error") implica que es algo **fuera de lo normal**, no necesariamente catastrófico. Por eso el patrón clásico es: *"usá `throw` para situaciones excepcionales, no para flujo de control normal"*. **Este principio es la base del refactor de HU2 a HU4** que vamos a hacer hoy: un Pokémon que NO existe es un caso esperado del usuario (escribe mal el nombre), no una situación excepcional — por eso terminamos sacándolo del `throw` y manejándolo con `return null` (BLOQUE 4).

### ESTRATEGIA VISUAL: El flujo del `throw` interrumpiendo el `try`

Diagrama vertical: el bloque `try` con 3 líneas numeradas adentro. La línea 1 (verde) corre. La línea 2 contiene un **_throw_** (rojo grande con flecha que sale del `try` hacia el `catch`). La línea 3 está atenuada en gris con etiqueta "*nunca se ejecuta*". El `catch` recibe el objeto _Error_ con flecha hacia una caja que muestra `error.message` = "el string del throw". Anclaje: *cuando lanzo un error, el `try` se interrumpe igual que con un `return` — pero el destino es el `catch`, no el caller.*

---

## BLOQUE 4 — Estados de UI + el refactor pedagógico de HU2 → HU4

*(El bloque más rico pedagógicamente del día. Acá se nombra el concepto de "estado de UI" —un alumno acostumbrado a apps que NO se rompen ya lo intuye, pero nunca lo nombró—. Y acá pasa el refactor más importante del módulo: lo que en HU2 era un `throw` para 404, en HU4 deja de ser un error y pasa a ser un valor de retorno (`null`). Es el punto donde el alumno entiende que "no encontrado" NO es un error.)*

---

### CONCEPTO: Estados de UI (cargando / éxito / error / vacío)

Una aplicación que consume datos externos —API, base de datos, archivo— **NUNCA está en un solo estado**. En cada momento la pantalla está reflejando **uno de cuatro estados posibles**, y comunicarlos al usuario es la diferencia entre una app profesional y una app amateur:

| Estado | Cuándo aparece | Qué se muestra al usuario |
|---|---|---|
| **Loading** (cargando) | Mientras la petición está en curso | Spinner / "Cargando…" / skeleton |
| **Éxito** | La petición trajo datos válidos | El contenido real (tarjeta de Pokémon, lista, etc.) |
| **Error** | Algo falló (red caída, servidor 500) | Mensaje de error + opción de reintentar |
| **Vacío** (empty / not found) | La petición fue exitosa pero NO hay datos | Aviso neutro ("No se encontró X" / "No tienes elementos") |

**Sintaxis general — los 3 elementos de UI que el lab usa:**
```html
<div id="spinner" class="hidden">Cargando…</div>      <!-- Loading -->
<div id="mensaje" class="hidden text-red-600"></div>  <!-- Error -->
<div id="resultado"></div>                             <!-- Éxito O Vacío -->
```

**Fórmula del lab (HU3 + HU4 — los 4 estados expresados en código):**
```javascript
async function mostrarBusqueda(nombre) {
  spinner.classList.remove("hidden");     // ← LOADING activo
  mensaje.classList.add("hidden");        // limpia errores anteriores

  try {
    const pokemon = await buscarPokemon(nombre);

    if (pokemon === null) {               // ← VACÍO: no se encontró
      contenedor.innerHTML = `<p>No se encontró "${nombre}"</p>`;
      return;
    }
    mostrarResultado(pokemon);            // ← ÉXITO
  } catch (error) {
    mensaje.textContent = "Algo salió mal."; // ← ERROR
    mensaje.classList.remove("hidden");
  } finally {
    spinner.classList.add("hidden");      // ← LOADING termina SIEMPRE
  }
}
```

**Dependencia técnica:** los 4 estados son **mutuamente excluyentes** en cada momento, pero **dinámicos en el tiempo**: una búsqueda típica pasa Loading → (Éxito O Error O Vacío). El error más común de un junior es **no apagar el Loading** cuando entra a Error o Vacío — por eso `finally` es indispensable. El criterio 1 de la rúbrica evalúa expresamente que los 4 estados sean visibles en la demo: éxito (búsqueda normal), error (sin internet), vacío ("pikachuu"), loading (spinner aparece y desaparece).

### ANALOGÍA: El semáforo de la cocina del restaurante (otra vez)

Cuando pedís un plato, la cocina puede estar en cuatro estados visibles para el mozo: **🟡 cocinando** (Loading — *"está en preparación"*), **🟢 listo** (Éxito — *"acá está su plato"*), **🔴 algo se rompió** (Error — *"se cayó la cocinera, no vamos a poder servir hoy"*), **🟤 no hay ingrediente** (Vacío — *"no nos queda mozzarella, ¿querés cambiar de pizza?"*). Lo importante: **el mozo te dice EN QUÉ estado está el pedido** — no te deja sentado mirando la mesa vacía sin información. Eso es manejar estados de UI.

### ETIMOLOGÍA / HISTORIA

El concepto "estado de la UI" se formaliza con **React (2013)** y se convierte en la base de la programación moderna de interfaces. La idea: la pantalla **es una función del estado** —vista = f(estado)—; si cambia el estado, la vista se actualiza. Los 4 estados (Loading, Success, Error, Empty) son el conjunto **mínimo viable** para apps con datos externos — están documentados en guías de UX como las de Google Material Design y de Apple Human Interface Guidelines. **C09-C11 prepararon al alumno para entender estado** (`pokedex` cambia, la rejilla refleja); hoy se cierra el ciclo agregando los otros 3 estados a la vista.

### ESTRATEGIA VISUAL: Los 4 estados como 4 mockups de la misma pantalla

Cuatro mockups chiquitos de la Pokédex alineados horizontalmente, cada uno mostrando un estado distinto:
1. **Loading** — fondo blanco con spinner centrado, etiqueta "*Mostrando 'Cargando…'*"
2. **Éxito** — la tarjeta de Pikachu con sus stats, etiqueta "*Datos llegaron — pintamos*"
3. **Error** — mensaje rojo *"Algo salió mal. Revisa tu conexión."*, etiqueta "*Catch atrapó la excepción*"
4. **Vacío** — aviso gris neutro *"No se encontró 'pikachuu'"*, etiqueta "*Resultado válido SIN datos*"

Cada mockup con su nombre arriba (Loading / Éxito / Error / Vacío) en su color funcional (azul / verde / rojo / gris). Anclaje: *la misma pantalla, 4 caras posibles. La app DEBE saber siempre cuál mostrar.*

---

### CONCEPTO: "No encontrado ≠ error" — el refactor pedagógico

En **HU2** el alumno escribe un `throw` cuando el 404 llega: "No se encontró 'pikachuu'" se LANZA como excepción, viaja al `catch`, se muestra en rojo como si fuera un fallo. **Funciona, pero es conceptualmente incorrecto.** En **HU4** el alumno refactoriza: cuando el status es 404, **_obtenerPokemon_** ya no lanza error — devuelve **_null_**. El `throw` se reserva para fallos de verdad (500, sin red); el "no encontrado" pasa a ser un **valor de retorno especial** que se chequea con un `if (pokemon === null)` antes de pintar.

**Sintaxis del refactor (HU4 vs HU2):**
```javascript
// HU2 — versión inicial: TODO error
async function obtenerPokemon(idONombre) {
  const response = await fetch(...);
  if (!response.ok) {
    throw new Error(`No se encontró "${idONombre}"`);
  }
  return response.json();
}

// HU4 — versión refactorizada: 404 ya NO es error
async function obtenerPokemon(idONombre) {
  const response = await fetch(...);
  if (response.status === 404) {
    return null;                                       // ← "no existe" = valor vacío, NO error
  }
  if (!response.ok) {
    throw new Error("La API respondió con un error");  // ← otros fallos HTTP SÍ son error
  }
  return response.json();
}
```

**Dependencia técnica:** el cambio impone propagar el **_null_** hacia arriba. **_buscarPokemon_** detecta el null y lo devuelve. **_mostrarBusqueda_** chequea con `if (pokemon === null)` ANTES del render normal — si es null, pinta el aviso neutro de "no se encontró" y hace `return` para salir limpio. **Detalle crítico: `return` dentro del `try` NO salta el `finally`** — el spinner se oculta igual que si hubiera habido éxito. Sin esa propiedad de `finally`, el alumno tendría que duplicar el `spinner.classList.add("hidden")` en cada rama, y se olvidaría una.

**Por qué este refactor es el aprendizaje más fuerte del día:**
1. **Exceptions are for exceptions** — `throw`/`catch` se reserva para fallos genuinos (cosas que NO deberían pasar en operación normal). Buscar un nombre mal escrito es algo que pasa **todos los días** — no es excepcional, es esperado. Tratarlo como excepción es usar la herramienta equivocada.
2. **Cada estado merece su propio aviso.** El error rojo grita "algo se ROMPIÓ" — y al usuario que escribió "pikachuu" no se le rompió nada, simplemente escribió mal. Un aviso neutro gris ("no se encontró") es más apropiado y menos alarmista.
3. **El catch queda limpio.** Después del refactor, el `catch` SOLO atrapa cosas inesperadas — un timeout, un 500, una red caída. Si en algún momento aparece un error nuevo, queda más fácil de debuggear porque el `catch` no se "contamina" con casos esperados.

### ANALOGÍA: La diferencia entre "no hay mesa libre" y "hubo un incendio"

Cuando entrás a un restaurante, la recepcionista te puede decir tres cosas distintas: **(1) "pase, tenemos mesa"** (éxito), **(2) "todas las mesas están ocupadas, ¿quiere esperar?"** (vacío — un resultado válido, comunicado con calma), o **(3) "se incendió la cocina, no estamos atendiendo"** (error — un fallo de verdad, comunicado con urgencia). Tratar el caso (2) como si fuera (3) sería absurdo — la persona se asustaría sin razón. Igual de absurdo es tratar "no existe ese Pokémon" como un error rojo: es un caso (2), comunicado con calma.

### ETIMOLOGÍA / HISTORIA

El principio **"exceptions are for exceptions"** está documentado en *Effective Java* (Joshua Bloch, 2001) — uno de los libros de buenas prácticas más influyentes de los últimos 25 años. La idea: si una situación se da con frecuencia en operación normal, **NO es excepcional** y no se debe usar `throw`. En lenguajes modernos como **Rust** y **Go**, esta idea se llevó al extremo: NO hay excepciones — los errores se devuelven como valores explícitos (`Result<T, E>` en Rust, tuplas en Go). JS no llega tan lejos, pero el patrón **"`null` para 'no encontrado' + `throw` para fallos reales"** es la versión idiomática de la misma idea.

### ESTRATEGIA VISUAL: El "antes vs después" del refactor

Dos columnas paralelas con el código de **_obtenerPokemon_** y **_mostrarBusqueda_** lado a lado: a la izquierda **HU2 — TODO error** (cuadro rojo arriba con el throw del 404), a la derecha **HU4 — 404 separado** (cuadro verde arriba con el `return null`, cuadro rojo más chico abajo con el throw para otros casos). Una flecha grande naranja en el medio etiquetada **"refactor"** que va de izquierda a derecha. Debajo, una etiqueta destacada: *"el `catch` queda LIMPIO — solo atrapa lo verdaderamente inesperado".* Anclaje: *el código sigue funcionando igual, pero el SIGNIFICADO de cada rama cambia.*

---

### CONCEPTO: `finally` como garante visual del estado consistente

El bloque **_finally_** se ejecuta SIEMPRE — éxito, error capturado, error no capturado, e incluso si hay `return` adentro del `try` o del `catch`. Esa garantía es lo que lo hace **el lugar perfecto** para cambios de UI que deben pasar pase lo que pase: ocultar un spinner, restaurar el cursor, habilitar de nuevo un botón deshabilitado, cerrar un modal, liberar un lock.

**Sintaxis general:**
```javascript
spinner.classList.remove("hidden");   // mostrar Loading
try {
  await algo();
} catch (error) {
  mostrarError(error);
} finally {
  spinner.classList.add("hidden");    // ← garantizado: el Loading SIEMPRE termina
}
```

**Fórmula del lab (HU3 — la prueba pedagógica con el reto autónomo):**
> *"Mové **_spinner.classList.add("hidden")_** del `finally` al final del `try`. Buscá un nombre inexistente: el spinner se queda PEGADO."* — ese es el experimento de 5 min que cierra HU3. Demuestra empíricamente por qué `finally` no es opcional.

**Dependencia técnica:** una versión "ingenua" pondría el `spinner.add("hidden")` al final del `try` —después de `mostrarResultado()`—. Funciona en el camino feliz, pero **falla en el camino con error**: si `await buscarPokemon()` lanza, el código salta al `catch` y el `spinner.add` del `try` NUNCA se ejecuta — spinner pegado para siempre. Solución: mover esa línea a `finally`, que corre en ambas rutas. Eso es **garantizar consistencia de UI**: no importa qué pase, el usuario nunca queda mirando un spinner que no avanza.

**Casos donde `finally` SÍ se ejecuta y el alumno no lo espera:**
- Hubo error en el `try` → `catch` corre → `finally` corre.
- NO hubo error en el `try` → `catch` se ignora → `finally` corre.
- Hubo `return` dentro del `try` → `finally` corre ANTES de devolver el valor.
- Hubo `return` dentro del `catch` → `finally` corre ANTES de devolver el valor.
- Hubo un error en el `catch` (poco frecuente) → `finally` corre antes de que el error suba.

### ANALOGÍA: La rutina de cierre del local

`finally` es como **bajar la persiana, apagar las luces y cerrar la caja** al final del día en un local. Lo hacés SI vendiste mucho, SI no vendiste nada, SI hubo problemas con un cliente — siempre. Esa rutina no depende de lo que pasó durante el día; depende solo del momento (fin de día). Lo importante: **si te olvidás de bajar la persiana en algún caso particular**, el local queda abierto toda la noche y a la mañana siguiente entra cualquiera. Por eso `finally` está separado del `try` y del `catch` — para que NO puedas olvidártelo.

### ETIMOLOGÍA / HISTORIA

**_finally_** es una **innovación de Java sobre C++**. C++ no tiene `finally` — usa RAII (destructores automáticos que corren al salir de scope). Java decidió que un keyword explícito era más claro para el programador. JS heredó la decisión de Java. Lenguajes modernos como **Python** (`try / except / finally`), **C#** y **Swift** (`defer`) siguen el mismo patrón. El uso típico (limpieza de recursos / consistencia de UI) es **idéntico en todos los lenguajes**.

### ESTRATEGIA VISUAL: La línea del tiempo de una búsqueda con y sin `finally`

Dos cronologías horizontales apiladas verticalmente:

```
SIN finally (línea en `try`):
[mostrar spinner] → [fetch FALLA] → [catch corre] → ❌ spinner pegado para siempre

CON finally:
[mostrar spinner] → [fetch FALLA] → [catch corre] → [finally: oculta spinner] → ✅ UI consistente
```

Las dos cronologías con el mismo punto inicial (mostrar spinner) y mismo punto de fallo (fetch falla), pero rutas distintas después. Anclaje: *`finally` no agrega lógica nueva — agrega GARANTÍA de que la lógica de UI corre siempre.*

---

## BLOQUE 5 — Markdown + README — la primera doc del curso

*(Bloque chico, al final del día. No tiene la densidad conceptual de los anteriores, pero es estratégico porque desbloquea la práctica de documentar — que se va a exigir en M4, M5 y para siempre en la carrera del alumno. La rúbrica del lab evalúa el README en el criterio 5.)*

---

### CONCEPTO: Markdown — el formato universal de documentación

**Markdown** es un formato de **texto plano con sintaxis mínima** que se renderiza como texto formateado (títulos, listas, links, código). Lo lee GitHub, GitLab, Notion, Obsidian, VS Code, Discord, Slack — es **el formato estándar de documentación técnica del software libre**. La idea: el archivo se ve **legible incluso sin renderizar** (es texto plano), pero al renderizarlo se ve estructurado.

**Sintaxis general — las 6 piezas esenciales que el README usa:**
```markdown
# Título principal               (H1)
## Subtítulo                     (H2)

Párrafo normal con **negrita** y *cursiva*.

- Item de lista 1
- Item de lista 2

`código inline` para nombres de funciones, archivos, comandos.

```javascript
const code = "bloque de código multilinea";
```

[Texto del enlace](https://url-destino.com)
```

**Tabla — las 5 sintaxis más usadas:**

| Sintaxis | Resultado |
|---|---|
| `# Título` / `## Subtítulo` | Encabezados (H1, H2, H3...) |
| `**negrita**` · `*cursiva*` | Énfasis |
| `- item` | Lista con viñetas |
| `` `código` `` | Código en línea (monospace) |
| `[texto](url)` | Enlace clickeable |

**Dependencia técnica:** GitHub Pages **renderiza automáticamente** el `README.md` que esté en la raíz del repo — se ve como página principal del proyecto cuando alguien lo abre en GitHub.com. Esa es la razón por la que TODO repo profesional tiene un README: es la **primera impresión** del proyecto. La rúbrica de hoy (criterio 5, 20 pts) exige título, descripción, instrucciones de uso, tecnologías usadas y enlace al sitio desplegado.

### ANALOGÍA: La portada del libro

El README es la **portada del libro** — lo primero que ves cuando abrís el repo. Sin portada, el libro es un montón de hojas anónimas; con portada, sabés de qué se trata, quién lo escribió, qué temas cubre. **Un repo profesional siempre tiene README**, igual que un libro profesional siempre tiene portada. Es opcional técnicamente, pero socialmente es obligatorio: un repo sin README en GitHub se ve **abandonado** y nadie lo va a leer ni usar.

### ETIMOLOGÍA / HISTORIA

**Markdown** lo inventó **John Gruber en 2004** como un formato más simple que HTML para escribir entradas de blog. La idea era que el archivo de texto plano se viera **legible incluso sin renderizar** — de ahí la sintaxis intuitiva (`#` para títulos, `*` para énfasis). En 2014 se estandarizó como **CommonMark** después de años de variantes incompatibles. **GitHub adoptó Markdown como su formato estándar de README en 2007** y eso lo consolidó como el estándar de facto del open source.

**El nombre "README"** —en mayúsculas, sin extensión originalmente— viene de la convención Unix de los años 70 de poner un archivo de instrucciones al principio del directorio que **el usuario DEBÍA LEER antes de instalar**. Literalmente: "READ ME" — "leéme". El nombre se mantuvo cuando los proyectos pasaron a Git/GitHub.

### ESTRATEGIA VISUAL: El README renderizado vs el código fuente

Dos versiones del MISMO archivo, una al lado de la otra:

A la izquierda — **archivo `.md` en VS Code** (monospace, texto plano):
```markdown
# Pokédex
Buscador de Pokémon que consume la PokeAPI.
## Tecnologías
- JavaScript (`fetch`, `async/await`)
- [PokeAPI](https://pokeapi.co/)
```

A la derecha — **el mismo renderizado en GitHub** (página web bonita): título grande "Pokédex", párrafo normal, sección "Tecnologías" con lista bullet, el link "PokeAPI" en azul subrayado, `fetch` y `async/await` en monospace gris.

Anclaje: *el mismo texto, dos vistas. La izquierda es lo que VOS escribís; la derecha es lo que VE quien abre tu repo.*

---

## CIERRE — hilo conductor + qué se lleva el alumno

### El arco del Módulo 3 (Pokédex)
```
C09  JS Moderno      → render de datos LOCALES                            ← ya hecho
C10  fetch + JSON    → datos REALES de PokeAPI (Promesas, .then)          ← ya hecho
C11  async/await     → mismo código legible + buscar/capturar/paginar     ← ya hecho
C12  Errores + UI    → app robusta + 4 estados de UI + README             ← HOY (lab calificado)
```

Una sola app que se construyó **clase a clase, agregando** —nunca tirando lo anterior—. Hoy NO se aprende a hacer algo nuevo grande; se aprende a hacer que **lo que ya hay no se rompa** y a **comunicar al usuario qué está pasando**. Todo el código de C11 sigue corriendo; le envolvemos `try/catch`, le agregamos `response.ok`, le ponemos spinner con `finally`, le refactorizamos el throw del 404 a un return null. Y al final del día, **documentamos el proyecto entero** con un README en Markdown — desbloqueando esa práctica para los módulos que vienen.

### Mensaje que se lleva el alumno
**Una app profesional NO es la que no falla — es la que SABE qué hacer cuando falla.** Hoy la Pokédex pasa de "se rompe ante cualquier hueco" a "siempre comunica al usuario en qué estado está". Esa diferencia —entre código frágil y código robusto— es lo que separa un proyecto de portafolio de un proyecto profesional. Y es lo que la rúbrica del lab calificado va a evaluar.

### Conexiones a futuro
- **`try/catch/finally`** vuelve en todo módulo de aquí en adelante. Se usa en cualquier código que toque red, base de datos, archivos, parsing de JSON externo.
- **Estados de UI** son la base de cualquier framework moderno (React, Vue, Svelte). En M4 vamos a profundizar este patrón con state management.
- **Markdown / README** se exige en TODOS los labs de M4 y M5. Hoy es la primera vez; a partir de mañana es el default.

### Cierre del Módulo 3 — qué pasa al final del día
1. **Lab calificado entregado** — código en `lab12-errores`, mergeado a `main` vía PR, deployado en GitHub Pages, README presente.
2. **Test diagnóstico del M3** — últimos 20 min del día. Cubre lo de C09 a C12 (render local, fetch, Promesas, async/await, búsqueda en API, captura, paginación, manejo de errores, estados de UI). Se evalúa el módulo entero, no solo C12.
3. **Apertura a C13 — Módulo 4.** Mañana arrancamos otro módulo. Hoy es el último día del M3.

### Tabla resumen de conceptos

| Bloque | Conceptos |
|---|---|
| **B1 — Conceptos previos** | Qué es un error · Tipos nativos de JS (SyntaxError/ReferenceError/TypeError/RangeError/red) · El objeto _Error_ (name/message/stack) |
| **B2 — `try / catch / finally`** | Estructura de control · Propagación de errores en la pila de llamadas · Por qué C11 rompía y C12 no |
| **B3 — Códigos HTTP + `response.ok` + `throw`** | Códigos HTTP por familia (2xx/4xx/5xx con foco en 404) · Por qué `fetch` NO falla con 404 · El check obligatorio `if (!response.ok)` · Lanzar errores propios con mensaje específico |
| **B4 — Estados UI + refactor** | Los 4 estados (cargando/éxito/error/vacío) · "No encontrado ≠ error" → refactor HU2 a HU4 (throw → return null) · `finally` como garante visual |
| **B5 — Markdown + README** | Sintaxis mínima de Markdown · El README como portada del repo · Lo que exige la rúbrica del lab calificado |
