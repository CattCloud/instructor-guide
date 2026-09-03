# CLASE 12 — Manejo de Errores y Estados (Cierre del Módulo 3)

> **Curso:** Code 201 · **Módulo 3** — Clase 4 de 4 (**CIERRE del Módulo**)
> **Proyecto víctima:** **Pokédex** (repo **_pokedex_**, rama **_lab12-errores_**) — la MISMA app de C09/C10/C11. Hoy se vuelve **robusta**: lo que en C11 se rompía a propósito (un nombre inexistente, una red caída) hoy se atrapa, se comunica y deja la app **viva**.
> **Es lab CALIFICADO del M3.** Rúbrica de 5 criterios × 20 pts = 100 pts (HUs · calidad técnica · presentación en vivo · argumentación · README/deploy). Escala A 90-100 / B 80-89 / C 70-79 / F <70.
> **Día con TEST DIAGNÓSTICO del M3** en los últimos 20 min (después del guion preparado; cubre C09-C12).
> **Hoy SÍ se exige README** por primera vez en el curso — porque hoy se enseña Markdown.
> **Fuente de inputs:** **_code201/class-12/README.md_** + **_lab/README.md_** + **_lab/rubric.md_** + **_APUNTES PROPIOS.md.md_** *(sin slides en C12)*.
> **Requiere internet:** PokeAPI, gratuita, sin clave. Para probar manejo de errores: el instructor desactiva el WiFi en vivo para mostrar el camino con red caída.
> **Duración:** 3h reales · se prepara para 2h30 (≈150 min) · colchón 30 min · receso 10 min entre M2 y M3 · test diagnóstico (20 min) fuera del guion preparado.

---

## Idea fuerza de la clase

**De una Pokédex frágil a una Pokédex robusta — y el primer README documentado del curso.** Cuatro movimientos del lado de robustez, uno de documentación: (1) atrapar fallos con **_try/catch_** para que la app no muera (HU1); (2) distinguir un fallo real de un "no encontrado" con **_response.ok_** + **_throw_** con mensaje específico (HU2); (3) comunicar el estado al usuario con un spinner garantizado por **_finally_** (HU3); (4) refactorizar el 404 — pasa de ser un `throw` a un **_return null_**, separando el caso "no encontrado" del caso "fallo real" (HU4 — el aprendizaje pedagógico más fuerte del día). Y para cerrar el módulo: el alumno escribe el **_README.md_** del proyecto en **Markdown**, primera doc del curso, desbloqueando esa práctica para M4 y M5.

> **Enfoque de la clase:** primera mitad **conceptual + debate técnico** (demo del fallo de C11 → qué es un error → tipos → códigos HTTP → `try/catch/finally`), segunda mitad **lab calificado** (4 HUs con plan socrático ancladas a los criterios de aceptación de la rúbrica). El día cierra con **README en Markdown + test diagnóstico del M3**.

---

## Tabla de tiempos (preparado para 2h 30min)

| Momento    | Tema                                                                                              | Parte del lab            | Tiempo  |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------------------ | ------- |
| **M1**     | El fallo de C11 + ¿qué es un error? + tipos nativos JS + objeto Error                              | Demo previa (sin tocar el lab) | ~30 min |
| **M2**     | **_try/catch/finally_** como estructura + HU1: atrapar errores                                     | Setup + HU1 (CP1 ~25)    | ~30 min |
| **RECESO** | —                                                                                                  | —                        | 10 min  |
| **M3**     | Códigos HTTP + **_response.ok_** + **_throw_** + HU2: mensaje específico ante 404                  | HU2 (CP2 ~50)            | ~25 min |
| **M4**     | **_finally_** + estado de carga + HU3: spinner garantizado + robustecer carga inicial              | HU3 (CP3 ~75)            | ~25 min |
| **M5**     | "No encontrado ≠ error" + 4 estados de UI + HU4: refactor del 404 a `return null`                  | HU4 (CP4 ~95)            | ~25 min |
| **M6**     | **Markdown + README** + cierre del módulo + apertura del test diagnóstico                          | README + entrega         | ~15 min |

> Total preparado: ~150 min (sin contar receso ni test). El colchón de 30 min absorbe el trabajo autónomo en cada Checkpoint del lab (CP1 ~25', CP2 ~50', CP3 ~75', CP4 ~95' de reloj de lab — el reloj arranca al iniciar el code-along de HU1 en M2).
> **Test diagnóstico del M3** (20 min, **fuera del guion preparado**) — se administra después del cierre de M6 cuando el día llega a las 3h reales. Cubre lo de C09 a C12.
>
> **Mapa de temas → momentos:** demo del fallo + qué es un error + tipos nativos + objeto Error (M1) · `try/catch/finally` + HU1 (M2) · códigos HTTP + `response.ok` + `throw` + HU2 (M3) · `finally` + estado de carga + HU3 (M4) · refactor 404→null + 4 estados de UI + HU4 (M5) · Markdown + README + cierre del módulo (M6).

---

## Cadena Problema → Solución de la clase

```
M1: "la app de C11 SE ROMPE si busco un nombre que no existe — ¿por qué?"
     → demo del fallo en vivo + nombrar qué es un error + tipos nativos JS + objeto Error
     ↓ (entendemos por qué se rompe… pero ¿cómo evitamos que muera?)
M2: "necesito una red de seguridad que ATRAPE el error sin matar la app"
     → try/catch/finally: la estructura del lenguaje para manejar errores (HU1)
     ↓ (la app ya no muere, pero el mensaje "Algo salió mal" es genérico y no ayuda al usuario)
M3: "quiero que el mensaje diga EXACTAMENTE qué pasó (que diga 404 si es 404)"
     → primero entender qué status devuelve la API (códigos HTTP) → response.ok lo detecta →
        throw new Error(...) con mensaje específico (HU2)
     ↓ (el mensaje ya es bueno, pero NO sé si la app está cargando o ya terminó)
M4: "necesito mostrar 'Cargando…' mientras espera, y que SIEMPRE desaparezca"
     → spinner con finally como garante + robustecer también la carga inicial (HU3)
     ↓ (la UX se siente mejor… pero un nombre mal escrito grita "ERROR" como si fuera grave)
M5: "no encontrado NO es un fallo — es un resultado vacío, merece su propio aviso"
     → refactor: 404 deja de ser throw, pasa a return null → estado VACÍO separado de ERROR (HU4)
     ↓ (la app está robusta y comunica bien… pero el repo no dice qué es ni cómo usarlo)
M6: "una app profesional siempre tiene README"
     → Markdown + README en la raíz del repo + entrega del lab calificado + apertura al test diagnóstico
```

---

## MOMENTO 1 — El fallo de C11 + ¿qué es un error? + tipos nativos JS

**Tiempo:** ~30 min
**Parte del lab:** Demo previa, sin tocar el lab todavía.

> **OBJETIVO:** El alumno **ve en vivo** que la Pokédex de C11 se rompe al buscar un nombre inexistente o sin internet, nombra lo que pasó (un **error** detuvo la ejecución), conoce los **tipos de error nativos** de JavaScript (SyntaxError, ReferenceError, **TypeError** —el que rompe la Pokédex—, RangeError, errores de red), y entiende qué es el **objeto Error** con sus tres propiedades (**_name_**, **_message_**, **_stack_**), reconociendo que **_error.message_** es la única que se muestra al usuario. Cierra el Momento con el vocabulario necesario para describir el problema antes de aprender a resolverlo en M2.

> **Patrón pedagógico de M1:** **demo del problema → nombrar lo que pasó → ampliar a los conceptos previos.** Es el Momento más conceptual del día —el único sin code-along sobre el proyecto—; el alumno NO toca código del lab acá. Estructura: 1.1 demo en vivo del fallo de C11 buscando "pikachuu" y mostrando el _TypeError_ en la consola del navegador (DevTools); 1.2 ¿qué es un error en programación? + analogía cocina del restaurante + flujo "sin error" vs "con error sin manejo"; 1.3 los 4 tipos nativos de JS + errores de red, con tabla y ejemplos cortos —se conecta el _TypeError_ visto en 1.1 con la tabla—; 1.4 el objeto **_Error_** con sus 3 propiedades y por qué **_error.message_** es la única que se muestra al usuario (siembra para HU2 — el mensaje específico del `throw`). Sin code-along porque la idea es **consolidar el vocabulario** ANTES de meterse al `try/catch`. La demo del fallo de C11 al principio es el **gancho ejecutable** (§5.3.1): el alumno acaba de ver el problema en vivo, ahora entiende el vocabulario para describirlo. **Códigos HTTP NO se ven acá** — se introducen en M3 cuando aparece naturalmente la pregunta "¿qué status devuelve la API en un 404?" al explicar `response.ok`.

#### 1.1 Demo en vivo del fallo de C11

**EN PANTALLA: NAVEGADOR + DEVTOOLS — abrir la Pokédex de C11 (deployada en GitHub Pages o corriendo en Live Server local). DevTools abierto en la pestaña **_Console_**.**

> **Tu apertura:**
> *"Antes de entrar al tema del día, abramos la Pokédex que dejamos al final de C11. La vamos a usar para hacer algo que ya hicimos a propósito en esa clase: buscar un nombre que NO existe. En C11 dejamos que rompiera adrede para abrir el tema de hoy. Hoy le ponemos nombre a lo que pasa."*

> **Tu demostración en vivo (paso a paso):**
> 1. Abrir la Pokédex de C11 en el navegador.
> 2. Abrir DevTools (F12 o clic derecho → Inspeccionar) y pasar a la pestaña **_Console_**.
> 3. En el buscador de la Pokédex, escribir **_pikachuu_** (con doble **_u_** — un nombre que NO existe en la PokeAPI).
> 4. Pulsar **Buscar** (o Enter).
> 5. Observar: la consola muestra un error rojo grande, la rejilla queda vacía o congelada, y la app deja de responder.

> **Tu lectura del error (en voz alta, señalando la consola):**
> *"Vean el texto en rojo. Dice algo así:"*
> ```
> Uncaught (in promise) SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON
>     at JSON.parse (<anonymous>)
>     at obtenerPokemon (app.js:18:21)
>     at async buscarPokemon (app.js:35:16)
>     ...
> ```
> - *"Tres cosas para fijar la mirada: la palabra **_Uncaught_** (no atrapado), la palabra **_SyntaxError_** (acá hay un tipo de error con nombre), y el archivo + función donde pasó (**_obtenerPokemon_**, justo en el **_response.json()_** porque el cuerpo que recibió NO era un JSON válido — era el texto plano 'Not Found' que devuelve la API cuando el Pokémon no existe)."*

> **Tu pregunta de gancho:**
> *"Esto que están viendo en consola — ¿qué es? Y más importante: ahora intenten buscar **_pikachu_** bien escrito. ¿Funciona, o tienen que recargar la página para que el buscador vuelva a responder?"*
> *(Respuesta esperada: el alumno tiene la noción de "es un error" o "algo se rompió" pero no el vocabulario formal. Y al probar "pikachu" bien escrito ve que la app NO RESPONDE — hay que recargar. Eso es porque el error mató el script entero, no solo la búsqueda particular.)*

> **Tu cierre del sub-punto:**
> *"Eso que ven en rojo se llama un **error** de JavaScript. Hoy le vamos a poner nombre exacto, ver qué tipos hay, y —lo más importante— aprender a evitar que mate la app entera. Pero antes de tocar código, vocabulario."*

---

#### 1.2 ¿Qué es un error en programación?

**EN PANTALLA: EXCALIDRAW — flujo "SIN error" (3 líneas verdes consecutivas, todo OK) vs flujo "CON error sin manejo" (línea 1 verde, línea 2 roja con explosión, líneas 3-N atenuadas en gris con etiqueta "nunca se ejecuta").**

> **Tu apertura:**
> *"Acaban de ver lo que pasa cuando un error rompe la app: el script muere y todo lo que iba a correr después, no corre. ¿Pero qué es un error técnicamente? Vamos por la definición."*

> **Tu explicación teórica precisa:**
> *"Un **error** es una situación que **interrumpe la ejecución normal** de un programa porque algo no se puede completar. Cuando JavaScript detecta un error, **detiene la ejecución del bloque actual**; si nadie lo atrapa, **muere el script** y queda colgado en la consola del navegador."*

> *"Las situaciones más comunes donde aparece un 'no se puede completar':"*
> - *"**Sintaxis inválida** — escribiste **_console.log("Hola"_** y te olvidaste el paréntesis de cierre."*
> - *"**Variable que no existe** — usás **_nombre_** sin haberla declarado."*
> - *"**Operación inválida para el tipo de dato** — hacés **_.push_** sobre un string, cuando solo los arrays tienen **_.push_**."*
> - *"**Conexión a internet que falla** — el WiFi se cayó mientras hacés un **_fetch_**."*
> - *"**Datos del usuario en formato equivocado** — esperabas un número, el usuario tipeó letras."*

> **Tu explicación — qué pasa SIN manejo (señalando el panel de Excalidraw):**
> - *"Mirá la columna izquierda — flujo SIN error. Línea 1 corre, línea 2 corre, línea 3 corre, todo OK."*
> - *"Mirá la columna derecha — flujo CON error sin manejo. Línea 1 corre. Línea 2 dispara un error → JavaScript DETIENE TODO en ese punto. Líneas 3 en adelante, atenuadas, nunca se ejecutan. El error sube por el código hasta llegar al tope, y todo el script muere."*
> - *"Eso fue lo que pasó hace 2 minutos cuando buscaron **_pikachuu_**: el error subió, mató el script entero, y por eso ni siquiera **_pikachu_** bien escrito vuelve a funcionar sin recargar."*

> **Analogía:** *"Es como un **percance en la cocina del restaurante** mientras se prepara un plato — se quemó el aceite, falta un ingrediente, se cayó la olla. Si nadie reacciona —si no hay manejo del percance—, la cocina se detiene, los clientes esperan eternamente, y al final el restaurante cierra. Si el chef **atrapa** el percance —usa otro aceite, busca un sustituto—, el restaurante sigue funcionando. **Atrapar el error** no significa que no pasó; significa que se decidió qué hacer cuando pasa. Eso es lo que vamos a aprender enseguida."*

> **Pregunta de activación:**
> *"En la demo de hace un rato, cuando apareció el error rojo y la app dejó de funcionar — ¿qué piezas del código DEJARON DE EJECUTARSE? ¿Solo la función que buscaba, o también el listener del botón, el botón "Cargar más", el render…?"*
> *(Respuesta esperada: TODO se detuvo, no solo la función puntual — el error subió hasta el tope del script y mató TODOS los listeners. Por eso recargar es la única salida. Esa idea de "subir por toda la pila" la formalizamos después del receso, cuando le dé contexto práctico.)*

---

#### 1.3 Tipos de errores nativos en JavaScript

**EN PANTALLA: EXCALIDRAW — 5 tarjetas alineadas, cada una con: nombre del tipo en bold (color del tipo), una línea de código mínima que lo dispara (monospace azul), y una etiqueta "se previene en VS Code" (verde) o "se maneja en tiempo de ejecución (M2)" (rojo). Las primeras 4 con etiqueta verde; la última (errores de red) con etiqueta roja destacada.**

> **Tu apertura:**
> *"JavaScript no genera 'un error' genérico — clasifica los errores en **categorías**, y cada categoría te dice qué tipo de problema hubo. Conocerlas permite leer los mensajes de consola con velocidad."*

> **Tu explicación teórica precisa:**
> *"Hay 7 tipos nativos en total, pero en desarrollo web nos cruzamos con 4 principales más una categoría adicional para problemas de red. Los 4 primeros vienen del lenguaje; el último depende de internet."*

> **Tabla de tipos de error nativos (proyectar en el panel):**
>
> | Tipo | Cuándo aparece | Ejemplo que lo dispara |
> |---|---|---|
> | **_SyntaxError_** | El parser no puede leer el texto recibido (código JS, JSON, etc.) | **_console.log("Hola"_** *(falta el paréntesis)* · **_JSON.parse("Hola")_** *(no es JSON válido)* |
> | **_ReferenceError_** | Se usa una variable que NO está declarada | **_console.log(noExiste)_** |
> | **_TypeError_** | Operación inválida para el tipo del dato | **_"Hola".push("Mundo")_** *(strings no tienen `.push`)* |
> | **_RangeError_** | Un número fuera del rango permitido | **_new Array(10**10)_** *(array imposible de crear)* |
> | **Errores de red / API** | La conexión falla o el servidor responde mal | **_fetch("https://api.invalida.com")_** sin red |

> **Tu explicación — la conexión con el SyntaxError de la demo:**
> *"Vuelvan al error que vimos al principio. Decía **_SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON_**. Sabiendo la tabla, eso dice **_SyntaxError_** — el parser de JavaScript se encontró con texto que NO tiene la sintaxis esperada. Acá hay un detalle importante: **_SyntaxError_** NO solo aparece cuando escribís código JavaScript mal. También aparece cuando una función como **_response.json()_** o **_JSON.parse()_** intenta parsear texto que NO es JSON válido. En la demo, la API respondió a 'pikachuu' con la cadena 'Not Found' —texto plano, no JSON—; cuando **_response.json()_** intentó parsearlo, falló con SyntaxError porque la letra 'N' no es un inicio válido para un JSON. Ese detalle lo cerramos después del receso."*

> **Tu explicación — la distinción crítica (señalando las etiquetas verde/roja del panel):**
> - *"**_ReferenceError_**, **_TypeError_** y **_RangeError_** son típicamente errores de **CÓDIGO** que disparás vos solo y se **atajan ANTES de correr** con un buen editor: VS Code marca cosas en rojo mientras tipeás; un linter detecta variables no definidas antes de ejecutar."*
> - *"**_SyntaxError_** tiene una **DUALIDAD** que importa hoy. Aparece por código mal escrito (un paréntesis faltante — eso se ataja en VS Code) **PERO TAMBIÉN** cuando una función como **_response.json()_** o **_JSON.parse()_** recibe texto que NO es JSON válido — como pasó en la demo del principio con 'Not Found'. En ese segundo caso, el error aparece EN TIEMPO DE EJECUCIÓN y depende de qué nos respondió el servidor."*
> - *"Los **errores de red / API** dependen de **factores externos**: el WiFi del alumno, el servidor de PokeAPI, una URL mal escrita. NO se pueden atajar en VS Code — son del mundo de afuera."*

> *"La regla pedagógica del día:"*
> - *"Para los errores típicos de código (ReferenceError, TypeError, RangeError, SyntaxError por código mal escrito), la herramienta es **VS Code + un linter** — los atajamos ANTES de correr."*
> - *"Para los errores que dependen de datos o respuestas externas —los de red, y también el SyntaxError de **_response.json()_** que vimos en la demo— hay una herramienta del lenguaje que aparece **EN TIEMPO DE EJECUCIÓN** para manejarlos. Esa herramienta es lo que arrancamos enseguida."*

> **Analogía:** *"Es como el control de calidad de un coche. **_SyntaxError_** es un coche que NO ARRANCA porque le falta una tuerca — lo arreglás en el taller antes de salir, no en la ruta. **_ReferenceError_** es pedirle al GPS que te lleve a 'Macarondia' — un lugar que NO existe en su base. **_TypeError_** es echarle aceite de cocina al motor — es un líquido, pero NO el correcto. Y los errores de red son como un **pinchazo en la ruta** — no podés evitarlo desde el taller, pero podés llevar la rueda de auxilio. Esa rueda de auxilio es la herramienta que aprendemos enseguida."*

> **Pregunta de activación:**
> *"Si yo escribo **_function ()_** sin nombre y trato de correr el archivo, ¿qué tipo de error me sale en consola? ¿Y si llamo a **_function2()_** sin haberla definido?"*
> *(Respuesta esperada: el primero es **_SyntaxError_** —el parser no entiende la sintaxis—; el segundo es **_ReferenceError_** —la función no existe en el scope—. Refuerza la lectura rápida de los tipos.)*

---

#### 1.4 El objeto Error con sus 3 propiedades

**EN PANTALLA: VS CODE — archivo de demo con el código de abajo + terminal de VS Code mostrando el output al ejecutarlo con Node. (Apoyo: EXCALIDRAW — tarjeta del objeto Error con 3 filas: name, message, stack — la fila de **_message_** destacada con borde naranja.)**

> **Tu apertura:**
> *"Cuando JavaScript genera un error, lo que viaja por el código es un **objeto** — una instancia de la clase **_Error_**. Tiene 3 propiedades estándar que vale la pena conocer porque vamos a usar una de ellas en el lab hoy."*

> **Tu explicación teórica precisa:**
> *"Todo error en JavaScript —el SyntaxError de la demo del principio, un ReferenceError cualquiera, o un error que vos mismo creés con **_new Error(...)_**— es un objeto con 3 propiedades: **_name_**, **_message_** y **_stack_**."*

> **Tabla de propiedades del objeto _Error_:**
>
> | Propiedad | Qué tiene | Para qué sirve hoy |
> |---|---|---|
> | **_error.name_** | El nombre del **TIPO** del error (**_"SyntaxError"_**, **_"TypeError"_**, **_"ReferenceError"_**, **_"Error"_**...) | Decidir el manejo según el tipo. **Hoy en el lab NO se usa** — se asume que cualquier fallo es de red o de parsear datos externos. |
> | **_error.message_** | El **TEXTO descriptivo** del error | **LO QUE MOSTRAMOS AL USUARIO** en la UI. Es la propiedad más usada del objeto. |
> | **_error.stack_** | La **pila de llamadas**: archivo, línea, función | Debug en consola del navegador. **NO se muestra al usuario** — es información para devs. |

> **Código de demo:**
> ```javascript
> const e = new Error("No se encontró 'pikachuu'");
> console.log("name:    ", e.name);
> console.log("message: ", e.message);
> console.log("stack:   ", e.stack);
> ```
>
> **Output esperado al ejecutarlo:**
> ```
> name:     Error
> message:  No se encontró 'pikachuu'
> stack:    Error: No se encontró 'pikachuu'
>     at ...
> ```
>
> *"Las mismas 3 propiedades estuvieron en el error rojo grande de la demo de hace un rato —el SyntaxError de C11— solo que ese lo creó JavaScript automáticamente cuando **_response.json()_** intentó parsear 'Not Found'. Acá lo creamos a mano para inspeccionarlo."*

> **Tu explicación — el detalle clave para lo que viene:**
> *"El que más nos importa hoy es **_error.message_**. ¿Por qué? Porque más adelante en el lab vamos a HACER nuestro propio error con **_new Error("texto del mensaje")_**, y ese texto que pongamos entre comillas va a quedar exactamente en **_error.message_**. Después aprendemos cómo agarrarlo y leerlo para pintarlo en la UI."*
> - *"Por eso un buen mensaje cuenta: **_'No se encontró pikachuu'_** es 10× mejor para el usuario que **_'Algo salió mal'_**. Esa diferencia es parte del criterio 2 de la rúbrica."*

> **Analogía:** *"Pensá en el objeto **_Error_** como la **hoja de incidencia del seguro** cuando tenés un accidente. Tres campos obligatorios: **TIPO de siniestro** (choque/robo/incendio — eso es **_name_**), **qué pasó exactamente** (texto libre con el detalle — eso es **_message_**), y **dónde y cuándo** (ubicación, hora — eso es **_stack_**). El seguro decide qué hacer leyendo esa ficha. Más adelante vamos a aprender cómo el código RECIBE esa ficha cuando un error se dispara."*

> **Cierre del Momento + puente al siguiente:**
> *"Listo, ya tenemos el vocabulario completo. Saben qué es un error, qué tipos hay, y qué propiedades trae el objeto **_Error_** cuando viaja por el código. Pero seguimos SIN saber cómo evitar que mate la app. Recuerden el SyntaxError de la demo del principio: en C11 lo dejamos suelto a propósito —se lo permitimos—; hoy lo vamos a ATRAPAR. La herramienta del lenguaje para hacerlo se llama **_try/catch/finally_**, y es lo que vemos enseguida. Vamos."*

---

## MOMENTO 2 — `try/catch/finally` + HU1: atrapar errores

**Tiempo:** ~30 min
**Parte del lab:** Setup del lab + HU1 (Checkpoint 1 ~25 min de reloj de lab).

> **OBJETIVO:** El alumno entiende **_try/catch/finally_** como una estructura de control —análoga a `if/else` pero para errores—, ve el flujo de las 3 fases (try → catch si error → finally siempre), define socráticamente los pasos de HU1, y envuelve la función **_mostrarBusqueda_** de C11 con `try/catch` agregando además las zonas de UI **_#spinner_** y **_#mensaje_**. **Recibe el mapa de los 4 estados de UI** (cargando/éxito/error/vacío) al hacer el Setup, sabiendo desde el principio del día dónde se va a activar cada uno. **En M2 activa el primero: el estado ERROR.** Al terminar, el alumno **prueba sin internet** y ve que la app sobrevive con un mensaje en pantalla.

> **Patrón pedagógico de M2:** **concepto + demo en VS Code → plan socrático → lab.** Estructura: 2.1 try/catch/finally como estructura de control (sintaxis general + diagrama de flujo de las 3 fases + analogía paracaidismo + mención breve a la pila de llamadas del SyntaxError de C11 como referencia, SIN entrar en propagación todavía); 2.2 demo en vivo aislada con dos snippets (SIN try/catch y CON try/catch) ejecutados con Node desde la terminal de VS Code (sin tocar el proyecto del lab); 2.3 Setup del lab (agregar **_#spinner_** y **_#mensaje_** al HTML, crear rama **_lab12-errores_**, **introducir el mapa de los 4 estados de UI** —cargando/éxito/error/vacío— como zoom-out conceptual justo cuando el alumno entiende POR QUÉ agregamos dos divs); 2.4 plan socrático + code-along HU1 anclado a los 2 criterios de la HU1 ("aparece mensaje claro" + "la app sigue viva") — acá se activa el **estado ERROR**. Reuso explícito: **_mostrarBusqueda_** de C11 NO se reescribe — se envuelve. El **_finally_** se nombra acá pero NO se usa todavía (se reserva para M4 con el spinner — pedagógicamente más fuerte cuando hay algo que ocultar). **La propagación NO se enseña acá** — se reserva para M3 (entre `throw` y HU2), donde el alumno ve la propagación EN ACCIÓN: `throw` en **_obtenerPokemon_** y catch en **_mostrarBusqueda_**, dos niveles separados. El Checkpoint 1 del lab cae justo al cerrar 2.4: el alumno desconecta el WiFi y prueba.

#### 2.1 `try / catch / finally` — la estructura de control para errores

**EN PANTALLA: EXCALIDRAW — diagrama de flujo de las 3 fases con dos rutas (con error y sin error) convergiendo en `finally`. Tres cajas verticales: `try` arriba, `catch` a la derecha (rama "si hubo error"), `finally` abajo en común.**

> **Tu apertura:**
> *"Acaban de ver qué es un error y qué partes tiene el objeto. Ahora la herramienta del lenguaje que nos deja **atrapar** ese error antes de que mate la app: **_try/catch/finally_**. Tres palabras clave que forman UNA sola estructura — análoga a **_if/else_** pero para errores."*

> **Tu explicación teórica precisa:**
> *"**_try_** es un bloque que **vigila** un fragmento de código que podría fallar. **_catch_** es el bloque al que JavaScript **SALTA AUTOMÁTICAMENTE** si algún error se dispara dentro del try — interrumpe lo que estaba ejecutando y empieza a correr el catch, pasándole el objeto **_Error_** que vimos antes como argumento. **_finally_** es un bloque que **SIEMPRE corre**, haya error o no."*

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

> **Tu desarrollo — las 3 fases una por una (señalando el panel):**
> - *"**Fase 1 — try:** ponés adentro el código que podría fallar. Una llamada a la red, un `JSON.parse`, una operación que asume que algo existe. JavaScript lo ejecuta normalmente."*
> - *"**Fase 2 — catch:** se ejecuta SOLO si hubo error dentro del try. Recibe como parámetro el objeto **_Error_** —el mismo objeto con `name`, `message` y `stack` que vimos en 1.4—. Acá decidís qué hacer: mostrar un mensaje, volver a intentar, logear en consola, lo que sea."*
> - *"**Fase 3 — finally:** corre SIEMPRE. Hubo error → corre después del catch. NO hubo error → corre después del try. Es para limpieza: ocultar un spinner, restaurar el cursor, cerrar un modal."*

> **Tu explicación — cómo conecta con M1:**
> - *"Recuerden el SyntaxError de la demo de C11. En C11 el error **subió** por la pila de llamadas (de **_obtenerPokemon_** —porque ahí se llama a **_response.json()_**— → **_buscarPokemon_** → **_mostrarBusqueda_** → listener del botón → tope del script) y mató todo. Por eso recargar era la única salida."*
> - *"Con **_try/catch_** ponemos una **red de seguridad** en algún nivel de esa pila. Cuando el error sube y se topa con un catch, el catch lo **atrapa** y el error NO sigue subiendo. La app sigue viva."*

> **Analogía:** *"**_try_** es el salto del avión — todo va a salir bien… o no. **_catch_** es el **paracaídas de emergencia** — si el principal falla, se activa solo y te salva. **_finally_** es **plegar las telas al aterrizar** — lo hacés SIEMPRE, hayas usado el principal o el de emergencia, hayas caído suave o duro. Sin paracaídas, caés y te rompés (el script muere). Con paracaídas pero sin pliegue, caés bien pero dejás todo desordenado (la UI queda inconsistente, el spinner pegado)."*

> **Tu nota sobre `finally` para HOY:**
> *"**_finally_** lo nombramos porque es parte de la estructura, pero en la primera actividad del lab NO lo vamos a usar — no tenemos nada que limpiar todavía. El spinner que sí va a necesitar `finally` aparece más adelante. Por ahora nos quedamos con **_try/catch_** pelado."*

> **Pregunta de activación:**
> *"En la demo de C11, el SyntaxError nació adentro de **_obtenerPokemon_** (en el **_response.json()_**) y subió hasta el tope. Si yo pongo un **_try/catch_** alrededor del cuerpo de **_mostrarBusqueda_** —2 niveles más arriba que obtenerPokemon—, ¿el catch va a atrapar el error o el error pasa de largo?"*
> *(Respuesta esperada: SÍ lo atrapa. El error sube por la pila buscando un catch que lo agarre; cuando encuentra uno, se detiene ahí. NO importa cuántos niveles abajo se haya disparado — mientras haya un catch en algún nivel superior, lo agarra. Por hoy alcanza con esta intuición — el nombre técnico de esto y el detalle paso a paso lo formalizamos después del receso, cuando lo vayamos a USAR en la práctica.)*

---

#### 2.2 Demo en vivo en VS Code — `try/catch` mínimo

**EN PANTALLA: VS CODE — dos archivos de demo (sin try/catch y con try/catch) + terminal de VS Code mostrando el output de cada uno al ejecutarlos con Node.**

> **Tu apertura:**
> *"Antes de meternos al lab, hagamos el `try/catch` más chico posible — solo para ver el cambio entre 'el script muere' y 'el script sobrevive'."*

> **Código de demo 1 — SIN `try/catch`:**
> ```javascript
> console.log("antes del error");
> noExiste();
> console.log("DESPUÉS del error");   // ← esto NUNCA se ejecuta
> ```
>
> **Output esperado:** aparece `"antes del error"`, después el `ReferenceError: noExiste is not defined` en rojo, y `"DESPUÉS del error"` **NO sale**. El script murió.

> **Código de demo 2 — CON `try/catch`:**
> ```javascript
> console.log("antes del error");
> try {
>   noExiste();
> } catch (error) {
>   console.log("atrapé el error:", error.message);
> }
> console.log("DESPUÉS del error");   // ← ahora SÍ se ejecuta
> ```
>
> **Output esperado:**
> ```
> antes del error
> atrapé el error: noExiste is not defined
> DESPUÉS del error
> ```

> **Tu explicación — lo que cambió:**
> - *"Sin `try/catch`: el error subió hasta el tope y mató el script. La línea de abajo nunca corrió."*
> - *"Con `try/catch`: el catch lo agarró, **_error.message_** —el mismo `error.message` del objeto Error que vimos antes— se imprimió, y la ejecución continuó normalmente. El script siguió vivo."*
> - *"Esa diferencia —de 'la app muere' a 'la app sigue'— es exactamente lo que vamos a aplicar al **_mostrarBusqueda_** de C11. Vamos al lab."*

---

#### 2.3 Setup del lab — rama nueva + HTML del `#spinner` y `#mensaje`

**EN PANTALLA: VS CODE + Terminal integrada — sobre el repo **_pokedex_**.**

> **Tu apertura:**
> *"Antes de tocar el JavaScript, dos cosas de Setup: una rama nueva y agregamos en el HTML las zonas donde van a aparecer los mensajes y el spinner."*

> **Code-along — Setup paso a paso:**
> 1. En la terminal del proyecto:
>    ```bash
>    git checkout -b lab12-errores
>    ```
> 2. En **_index.html_**, debajo del **_&lt;input id="buscador"&gt;_** y encima del **_&lt;div id="resultado"&gt;_**, agregar las dos zonas de estado:
>    ```html
>    <div id="spinner" class="hidden text-center text-slate-500 my-4">Cargando…</div>
>    <div id="mensaje" class="hidden text-center text-red-600 font-medium my-4"></div>
>    ```

> **Tu explicación — qué hace cada zona:**
> - *"**_#mensaje_** es donde vamos a pintar errores en rojo cuando la app NO pueda resolver la búsqueda. Empieza con la clase **_hidden_** de Tailwind (no se ve) hasta que el JS le saque la clase."*
> - *"**_#spinner_** es donde mostraremos 'Cargando…' mientras la búsqueda está en curso. **HOY lo agregamos al HTML pero NO lo usamos todavía** — lo prendemos más adelante cuando aprendamos `finally`. Lo dejamos preparado para no tocar el HTML dos veces."*

> **Tu zoom-out — el MAPA del día (qué vamos a tocar y dónde):**
> *"Antes de bajar a código, pausa de 30 segundos para mostrar el mapa. Toda app que pide datos a un servidor pasa por 4 estados posibles a lo largo de su vida. **No los vamos a estudiar todos ahora** — los vamos a ir descubriendo UNO POR MOMENTO, con su teoría completa, cuando los activemos. Pero quiero que vean el plano del día antes de entrar a la primera actividad."*
>
> | Estado | Zona del HTML | Cuándo lo vamos a activar y estudiar |
> |---|---|---|
> | **ÉXITO** | **_#resultado_** | Ya viene de C11 — lo damos por hecho |
> | **ERROR** | **_#mensaje_** | **Próxima actividad** (HU1) |
> | **CARGANDO** | **_#spinner_** | Después del receso, al ver **_finally_** (HU3) |
> | **VACÍO** | (lo decidimos al final del día) | Última actividad (HU4) |
>
> *"Los dos divs que acabamos de agregar son las zonas de **ERROR** y **CARGANDO**. Cada uno tiene su propia teoría —qué carácter visual le toca, cuándo se enciende, cómo se apaga— que vamos a desarrollar JUSTO cuando le toque el turno, no antes. Por ahora solo el mapa: para que sepan dónde estamos parados cada vez que entre uno."*

> **Tu nota — la convención del proyecto:**
> *"Las dos zonas usan la clase **_hidden_** de Tailwind para ocultarse. El JS las muestra con **_classList.remove("hidden")_** y las oculta con **_classList.add("hidden")_**. Es el patrón estándar para 'mostrar/ocultar' en Tailwind sin tocar estilos inline."*

---

#### 2.4 Lab HU1 — envolver la búsqueda con `try/catch`

**EN PANTALLA: EXCALIDRAW Panel 2.4 LIBRE — el instructor escribe los 7 pasos socráticos uno por uno mientras conduce el plan (sin contenido pre-escrito, solo el marco con el título "PLAN DE LA SOLUCIÓN — HU 1: ATRAPAR ERRORES"). Después: VS CODE + NAVEGADOR (Live Server) para el code-along.**

> **Tu apertura:**
> *"Mismo patrón que en C11: primero hablamos los pasos, después bajamos a código. La HU 1 es corta y tiene 2 criterios — vamos a ver cómo cada paso del plan sale de uno de esos criterios o del vocabulario que vimos al principio del día y hace un rato."*

> **Tu zoom-in — el estado ERROR (lo activamos en esta actividad):**
> *"Antes de los pasos, le ponemos nombre técnico al estado del mapa que entra en escena AHORA: el estado **ERROR**."*

> **Tu definición teórica precisa del estado ERROR:**
> *"El **estado ERROR** es la pantalla que mostramos cuando la app **intentó** hacer algo y NO LO LOGRÓ por una falla real: sin red, servidor caído, JSON corrupto, timeout. Es el estado donde la app dice 'esto no es lo que esperabas, pero TAMPOCO te dejo a oscuras'."*

> **Sus 3 propiedades visuales (las del lab):**
> - *"**Color rojo** — convención universal de la industria; el ojo del usuario lo lee como 'algo se rompió' sin necesidad de leer la palabra. En el HTML lo activamos con la clase Tailwind **_text-red-600_**."*
> - *"**Texto claro y accionable** — el mensaje DICE qué pasó. HOY usamos un mensaje genérico ("Algo salió mal. Revisa tu conexión.") porque todavía no sabemos distinguir tipos de error. Después del receso lo vamos a hacer específico."*
> - *"**Las demás zonas se ocultan** — cuando aparece ERROR, NO debería verse a la vez la tarjeta de ÉXITO ni el spinner de CARGANDO. Los estados son **mutuamente excluyentes** — solo uno visible a la vez."*

> **Cuándo se enciende y cuándo se apaga:**
> - *"**Se enciende** cuando un `throw` o un error nativo cae en un `catch`. El catch es el dispositivo que activa este estado."*
> - *"**Se apaga** al INICIO de la próxima acción del usuario (en este caso: la próxima búsqueda). No queda pegado de la pantalla anterior — se limpia al empezar de nuevo."*

> **Analogía:** *"El estado ERROR es el **cartelito rojo de 'Fuera de servicio'** sobre la puerta de un local. No es que el local desapareció — el local sigue ahí. Pero comunica claramente: ahora no se puede pasar. Cuando el problema se resuelve, alguien quita el cartel y el local vuelve a su estado normal."*

> **Plan de la solución — definir los pasos ANTES de escribir el código:**
> *(Conducirlo socráticamente. **Regla del juego: cada paso se responde leyendo la HU 1 y sus 2 criterios** — no son decisiones abiertas.)*
>
> **Paso 1 · EL USUARIO ya tiene la búsqueda de C11 funcionando con red OK**
>
> Punto de partida — sin pregunta socrática. El alumno acaba de hacer el Setup. La búsqueda de C11 (**_mostrarBusqueda_**) sigue tal cual.
>
> ---
>
> **Paso 2 · EL USUARIO busca SIN red — algo va a fallar adentro de la búsqueda**
>
> > 🔎 *Veamos la HU 1 textual: **"si algo falla al buscar, quiero ver un mensaje claro en vez de que la app se rompa"**. La HU está describiendo el problema que VIMOS al principio del día con el SyntaxError de C11 — el script muere. ¿Qué herramienta del lenguaje vimos hace un rato que sirve para evitar que ese error mate la app?*
>
> > ✅ **Respuesta esperada:** **_try/catch_**. La estructura del lenguaje que **atrapa** un error antes de que mate el script. Es la red de seguridad que vimos hace un rato.
>
> ---
>
> **Paso 3 · EL PROGRAMA decide QUÉ código va adentro del try**
>
> > 🔎 *La función **_mostrarBusqueda_** de C11 tiene varias líneas. ¿Envolvemos toda la función entera, o solo la parte que puede fallar?*
>
> > ✅ **Respuesta esperada:** solo la parte que puede fallar — la llamada `await buscarPokemon(nombre)` y el render del resultado. **El resto NO puede fallar** (asignar variables, manipular el DOM con `.classList`) y queda afuera del try.
> > **Principio:** el try es lo más pequeño posible — solo lo que realmente puede explotar.
>
> ---
>
> **Paso 4 · EL PROGRAMA muestra un mensaje cuando hay error**
>
> > 🔎 *La HU dice criterio textual: **"aparece un mensaje claro en vez de una pantalla rota"**. Tenemos el div **_#mensaje_** del Setup. ¿Qué dos cosas hacemos adentro del catch para que aparezca?*
>
> > ✅ **Respuesta esperada:** dos líneas.
> > (a) **_mensaje.textContent = "..."_** — pintar el texto.
> > (b) **_mensaje.classList.remove("hidden")_** — quitarle la clase que lo ocultaba.
> > Para HOY el texto es genérico: **_"Algo salió mal. Revisa tu conexión."_**. En HU2 vamos a hacer mensajes específicos usando **_error.message_**.
>
> ---
>
> **Paso 5 · EL PROGRAMA limpia el mensaje viejo al empezar una nueva búsqueda**
>
> > 🔎 *La HU dice criterio textual: **"la app sigue viva tras el fallo: puedes volver a buscar sin recargar"**. Si dejamos el **_#mensaje_** del fallo anterior visible cuando el usuario busca de nuevo, ¿qué pasa? ¿Dónde lo limpiamos y cuándo?*
>
> > ✅ **Respuesta esperada:** lo limpiamos al INICIO de **_mostrarBusqueda_**, ANTES del try. Con **_mensaje.classList.add("hidden")_** lo volvemos a ocultar para que el intento nuevo no arrastre el error viejo.
> > **Ubicación:** primera línea de la función, antes del try.
>
> ---
>
> **Paso 6 · EL PROGRAMA RECIBE el objeto _Error_ en el catch**
>
> > 🔎 *Al principio del día vimos que un error es un OBJETO con name, message, stack. ¿Cómo lo recibimos en el catch?*
>
> > ✅ **Respuesta esperada:** **_catch (error) { ... }_**. El parámetro entre paréntesis (lo llamamos `error` por convención) es la instancia del objeto **_Error_** que se disparó adentro del try.
> > **Para HOY no lo usamos** — el texto que pintamos es genérico. Pero ya lo tenemos disponible para más adelante, donde sí vamos a leer **_error.message_**.
>
> ---
>
> **Paso 7 · EL PROGRAMA cumple ambos criterios — verificación**
>
> > 🔎 *La HU exige dos cosas: (a) mensaje claro en vez de pantalla rota; (b) la app sigue viva. ¿Cómo probamos las dos en vivo?*
>
> > ✅ **Respuesta esperada:** desactivar el WiFi (o usar DevTools → Network → Offline) y buscar un Pokémon. Tiene que aparecer el mensaje rojo, **_NO_** el error en consola que mataba C11.
> > Después, reactivar el WiFi y buscar de nuevo (sin recargar la página) — la búsqueda funciona normal. Eso prueba que la app sigue viva.

> **Tu cierre del plan (antes de bajar a código):**
> *"Siete pasos. Casi todos respondidos leyendo la HU + los 2 criterios — no inventamos. El único que vino de afuera de la HU fue el Paso 6, que lo respondimos con el vocabulario del principio del día (el objeto Error). Ahora bajamos a código — van a ver que es casi una transcripción del plan."*

> **Code-along (HU1):**
> ```javascript
> // Referencia al div del mensaje (afuera de la función para no buscarlo cada vez)  ← Paso 4
> const mensaje = document.getElementById("mensaje");
>
> async function mostrarBusqueda(nombre) {
>   mensaje.classList.add("hidden");   // limpia errores anteriores                  ← Paso 5
>
>   try {
>     // SOLO lo que puede fallar va adentro                                          ← Paso 3
>     const pokemon = await buscarPokemon(nombre);
>     mostrarResultado(pokemon);
>   } catch (error) {                                                                 // ← Paso 6: recibe el objeto Error
>     // Mensaje genérico HOY — más adelante usaremos error.message específico        ← Paso 4
>     mensaje.textContent = "Algo salió mal. Revisa tu conexión.";
>     mensaje.classList.remove("hidden");
>   }
> }
> ```
> - *"Cuatro líneas de manejo de errores totales: el `try { ... }`, el `catch (error) { ... }` con sus 2 líneas de UI, y la limpieza de mensaje antes del try. Eso es todo lo que necesitábamos para que la app NO MUERA."*
> - *"Lo que NO está adentro del try es importante: **_mensaje.classList.add("hidden")_** del principio. Si lo metiéramos adentro, no se ejecutaría cuando hay error — quedaría el error anterior pegado. Por eso va AFUERA."*
> - *"Lo que NO tocamos: **_buscarPokemon_** sigue igual que C11; **_mostrarResultado_** sigue igual; **_obtenerPokemon_** sigue igual. SOLO envolvimos **_mostrarBusqueda_** con la red de seguridad."*

> **Checkpoint 1 (~25 min):** *(a) Con WiFi normal, buscar "charizard" → aparece la tarjeta con su botón Capturar (igual que C11); (b) abrir DevTools → Network y poner **Offline** (o simplemente desactivar el WiFi); buscar "pikachu" → aparece el mensaje rojo `"Algo salió mal. Revisa tu conexión."` y NO hay error en consola; (c) reactivar la red y buscar de nuevo SIN RECARGAR la página → la búsqueda funciona normal. La app está VIVA.*

> **Cierre del Momento + puente al siguiente:**
> *"Listo: con 4 líneas de `try/catch` la app pasó de 'muere ante cualquier fallo' a 'sobrevive con un mensaje'. Pero noten una cosa: el mensaje dice **'Algo salió mal'** — genérico. Si el usuario buscó 'pikachuu' mal escrito, ese mensaje le dice MENOS de lo que necesita. Para diferenciar un 'mal escrito' de un 'sin red' tenemos que mirar QUÉ STATUS nos devolvió la API. Eso es lo que vemos después del receso — y va a aparecer una palabrita nueva: 404."*

---

## MOMENTO 3 — Códigos HTTP + `response.ok` + `throw` + HU2: del mensaje genérico al específico

**Tiempo:** ~25 min (post-receso)
**Parte del lab:** HU2 (Checkpoint 2 ~50 min de reloj de lab).

> **OBJETIVO:** El alumno **abre DevTools → Network** y ve **qué status le devuelve la API** al buscar "pikachuu" — descubre que la respuesta es **_404 Not Found_** y no un error de `fetch`. Aprende a leer los **códigos HTTP por familia** (2xx éxito, 4xx error del cliente, 5xx error del servidor) con foco en **_404_**, entiende por qué **_fetch_** NO falla con 404 (el `fetch` se resuelve "exitosamente" porque la conexión funcionó —el body solo dice "no hay nada"—) y por qué **_response.ok_** es el chequeo idiomático obligatorio antes de leer el body. Después aprende **_throw new Error(...)_** como la forma de **lanzar errores propios** con un mensaje específico que va al **_error.message_** del catch. Entiende cómo se **propaga** un `throw` por la pila de llamadas hasta encontrar un `catch` —en el lab, el `throw` nace en **_obtenerPokemon_** y es atrapado en **_mostrarBusqueda_**, dos niveles más arriba—. Define socráticamente los pasos de HU2 y modifica **_obtenerPokemon_** de C11 para que detecte el 404 con `response.ok` y lance un error específico con el nombre buscado.

> **Patrón pedagógico de M3:** **demo en VS Code → concepto → propagación → plan socrático → lab.** Estructura: 3.1 demo con un script chico que hace **_fetch_** a `/pokemon/pikachu` y `/pokemon/pikachuu`, ejecutado con Node desde la terminal de VS Code — el alumno ve que el primero devuelve **_status: 200_** y **_ok: true_**, mientras que el segundo devuelve **_status: 404_** y **_ok: false_**, y que el `fetch` NO se rechazó (la promesa se resolvió OK en los dos casos); **acá es donde nace naturalmente la pregunta "¿qué es 404?"**; 3.2 códigos HTTP por familia (2xx/4xx/5xx) con foco en **_404_** + analogía del mensajero que siempre vuelve con algo (la carta pedida, una nota "no existe", o "se cayó la biblioteca"); 3.3 `response.ok` como el checkpoint entre `fetch` y `.json()` — la conexión OK ≠ datos OK; 3.4 `throw new Error(...)` como "detector de incendios manual" — el string del paréntesis termina en **_error.message_**, que va a la UI; 3.5 **propagación de errores** — dos pilas verticales en Excalidraw (con y sin try/catch) + las 2 reglas + caso concreto del lab (throw en **_obtenerPokemon_**, catch en **_mostrarBusqueda_**, 2 niveles de pila entre uno y otro) + código demo de 3 niveles con `nivelUno → nivelDos → nivelTres` ejecutado en Node — el alumno ve la propagación EN ACCIÓN justo antes de aplicarla; 3.6 plan socrático + code-along HU2 anclado a los 3 criterios ("mensaje específico" + "nombra lo que se buscó" + "un nombre válido sigue funcionando"). El refactor de **_obtenerPokemon_** se hace acá; el `catch` de **_mostrarBusqueda_** se ajusta para usar **_error.message_** del throw. Punto clave que se siembra para M5: en HU2 el 404 **es un error** (se lanza con throw); en HU4 ese mismo 404 va a dejar de ser error y pasar a ser un valor vacío. **No spoilear el refactor en M3** — el alumno debe sentir que HU2 está "bien" para que en M5 el refactor se sienta como una mejora consciente, no como una corrección de un error previo.

#### 3.1 Demo en VS Code — ¿qué status nos devolvió la API?

**EN PANTALLA: VS CODE — archivo de demo con el código de abajo + terminal de VS Code mostrando el output al ejecutarlo con Node (versión 18+ para **_fetch_** nativo).**

> **Tu apertura (post-receso):**
> *"Volvimos. Antes del receso dejamos la app sobreviviendo, pero con un mensaje genérico para todo. Ahora vamos a mirar QUÉ nos respondió el servidor exactamente cuando buscamos 'pikachu' bien escrito vs 'pikachuu' mal escrito. Para eso un script chico que pide a la API las dos URLs y nos imprime lo que viene."*

> **Código de demo:**
> ```javascript
> async function ver(url) {
>   const response = await fetch(url);
>   console.log("URL:    ", url);
>   console.log("status: ", response.status);
>   console.log("ok:     ", response.ok);
>   console.log("---");
> }
>
> await ver("https://pokeapi.co/api/v2/pokemon/pikachu");    // existe
> await ver("https://pokeapi.co/api/v2/pokemon/pikachuu");   // NO existe
> ```
>
> **Output esperado al ejecutarlo:**
> ```
> URL:     https://pokeapi.co/api/v2/pokemon/pikachu
> status:  200
> ok:      true
> ---
> URL:     https://pokeapi.co/api/v2/pokemon/pikachuu
> status:  404
> ok:      false
> ---
> ```

> **Tu lectura — el dato clave:**
> *"Miren los dos bloques lado a lado. El **_fetch_** del nombre bien escrito devolvió **_status: 200_** y **_ok: true_**; el del nombre mal escrito devolvió **_status: 404_** y **_ok: false_**. PERO el segundo NO disparó ningún error — el fetch se resolvió tranquilo, llegó al **_console.log_**, y el script siguió. La app de C11 no se rompía por el fetch — se rompía cuando **_response.json()_** intentaba parsear el body que vino con el 404 (la cadena 'Not Found'), porque eso NO es JSON válido — ese es el SyntaxError que vieron al principio."*

> **Tu pregunta de gancho:**
> *"Dos cosas que vamos a entender ahora: ¿qué es esa palabra **'404'**? ¿Y cómo usamos esa propiedad **_ok_** que ven en el output para decirle al código 'oíme, mirá el status antes de seguir'?"*

> **Tu cierre del sub-punto:**
> *"Esas dos preguntas las cerramos en los próximos dos puntos: primero el vocabulario de códigos HTTP, después **_response.ok_** como la herramienta del código para detectarlos."*

---

#### 3.2 Códigos HTTP — el "estado" de cada respuesta

**EN PANTALLA: EXCALIDRAW — semáforo de familias HTTP (verde 2xx, amarillo 4xx, rojo 5xx). Cada familia con 2-3 ejemplos representativos adentro de su caja; el **_404 Not Found_** resaltado con anillo extra porque es el del día.**

> **Tu apertura:**
> *"Esos números de 3 dígitos —**_200_**, **_404_**, **_500_**— son los **códigos de estado HTTP**. El servidor SIEMPRE devuelve uno con cada respuesta. Te dicen si la cosa salió bien o falló, y si falló, qué tipo de falla fue."*

> **Tu explicación teórica precisa:**
> *"Hay decenas de códigos posibles, pero NO hace falta memorizarlos. Solo hace falta saber leer la **PRIMERA cifra** — la familia."*

> **Tabla de familias HTTP (señalando el panel):**
>
> | Familia | Significado | Ejemplos | ¿`response.ok`? |
> |---|---|---|---|
> | **2xx** | **Éxito** — la respuesta salió bien | **_200 OK_**, **_201 Created_** | **_true_** |
> | **4xx** | **Error del CLIENTE** — nuestro código pidió mal | **_400_** Bad Request, **_401_** Unauthorized, **_403_** Forbidden, **_404_** Not Found | **_false_** |
> | **5xx** | **Error del SERVIDOR** — el servidor falló | **_500_** Internal Server Error, **_503_** Service Unavailable | **_false_** |

> **Tu explicación — el 404 específicamente:**
> - *"**_404 Not Found_** es de la familia 4xx — **error del cliente**. Significa: 'el recurso que pediste NO existe en este servidor'."*
> - *"En la Pokédex, cuando buscamos **_pikachuu_** (mal escrito), la API nos respondió: 'esa URL apunta a un recurso que no tengo'. Por eso el status fue 404."*
> - *"Otros 4xx que pueden aparecer en otras APIs: **_401_** (no autenticaste), **_403_** (autenticaste pero no tenés permiso), **_400_** (la petición estaba mal armada). HOY nos enfocamos en **_404_** porque es el que aparece en el lab — pero la lógica es la misma para todos los 4xx."*

> **Tu explicación — la trampa del `fetch`:**
> *"Acá viene el detalle que rompió C11. Para **_fetch_**, 'éxito' significa: 'logré HABLAR con el servidor'. NO significa 'obtuve los datos que quería'. Por eso el fetch de **_pikachuu_** se resolvió OK aunque el status fuese 404: el servidor SÍ contestó, solo que contestó 'no hay'. **_fetch_** entrega ESA respuesta sin distinguir si era buena o mala. Distinguir es nuestro trabajo, no del fetch."*

> **Analogía:** *"Pensá en **_fetch_** como el **mensajero** que mandás a buscar un libro a la biblioteca. El mensajero **siempre vuelve** — nunca se pierde. Pero puede volver con:"*
> - *"**_200_** — el libro que pediste, perfecto."*
> - *"**_404_** — un papelito que dice 'ese libro no existe en la biblioteca' (la biblioteca SÍ está abierta y SÍ te atendió — solo no tiene el libro)."*
> - *"**_500_** — un papelito que dice 'se cayó el techo de la biblioteca, no pudieron buscar' (el problema es de ELLOS, no tuyo)."*
>
> *"El mensajero NUNCA explota solo. VOS abrís el sobre y decidís qué hacer con cada caso."*

> **Pregunta de activación:**
> *"Si la PokeAPI estuviera caída por mantenimiento, ¿qué familia de código nos devolvería? ¿Y si nos olvidamos de poner el nombre y mandamos solo **_/pokemon/_**?"*
> *(Respuesta esperada: si está caída, **_5xx_** —tipicamente 503—; si la URL está mal armada, **_4xx_** —tipicamente 400 Bad Request—. Refuerza la lectura por familia.)*

---

#### 3.3 `response.ok` — el checkpoint entre el `fetch` y el `.json()`

**EN PANTALLA: EXCALIDRAW — diagrama de flujo con `fetch(url)` → `response` (caja con status: 200 verde o 404/500 rojo) → rombo de decisión `response.ok ?` → si sí, sigue a `response.json()` y uso normal; si no, sigue a "lanzar error" (rojo).**

> **Tu apertura:**
> *"OK, ya sabemos qué son los códigos HTTP. ¿Cómo le decimos al código que ANTES de leer el body, chequee si el status fue 2xx o no? La respuesta es una propiedad del objeto **_response_** llamada **_response.ok_**."*

> **Tu explicación teórica precisa:**
> *"**_response.ok_** es un **booleano** del objeto que **_fetch_** te devuelve. Es **_true_** si el status está en el rango 200-299 (familia 2xx); **_false_** en cualquier otro caso (3xx, 4xx, 5xx). Una sola línea de código resuelve la distinción."*

**Sintaxis general:**
```javascript
const response = await fetch(url);
if (!response.ok) {
  // status NO fue 2xx — algo salió mal
}
const data = await response.json();   // SOLO si llegó OK
```

> **Tu explicación — el patrón idiomático:**
> - *"Inmediatamente DESPUÉS del **_fetch_**, antes de cualquier **_.json()_**, va el chequeo **_if (!response.ok)_**."*
> - *"Si **_response.ok_** es **_false_**, hay que reaccionar (en HU2 vamos a lanzar un error). Si es **_true_**, sigue todo normal."*
> - *"En C11 NO chequeábamos esto — leíamos el body directamente con **_.json()_**. Por eso cuando llegaba un 404 con body 'Not Found' (texto plano, no JSON), **_.json()_** explotaba con SyntaxError ANTES de poder seguir hacia **_adaptarPokemon_**. Hoy lo atajamos en la fuente."*

> **Tu nota técnica:**
> *"**_response.ok_** es solo una conveniencia. También existe **_response.status_** que te da el número exacto (404, 500, etc.). Para 'sí/no es éxito' usamos **_response.ok_**; para 'qué número exacto' usamos **_response.status_**. Hoy nos basta con **_response.ok_**."*

---

#### 3.4 `throw new Error(...)` — lanzar errores propios

**EN PANTALLA: EXCALIDRAW — diagrama del flujo del `throw` interrumpiendo el `try`: bloque `try` con 3 líneas; la línea 2 contiene un **_throw_** (rojo grande con flecha hacia el `catch`); la línea 3 atenuada con etiqueta "nunca se ejecuta"; el `catch` recibe el objeto Error y muestra `error.message`.**

> **Tu apertura:**
> *"Tenemos el chequeo. Falta saber CÓMO lanzar un error propio cuando el chequeo dice 'esto está mal'. La palabra clave es **_throw_**."*

> **Tu explicación teórica precisa:**
> *"**_throw_** dispara un error desde tu propio código. Hasta ahora los errores los disparaba el motor de JavaScript (un ReferenceError, un TypeError); con **_throw_** somos NOSOTROS los que decidimos: 'esto es un problema, hay que lanzar un error'. Una vez lanzado, el flujo es idéntico al de un error nativo — sube por la pila hasta que algún catch lo atrape."*

**Sintaxis general:**
```javascript
throw new Error("Mensaje descriptivo del error");
```

> **Tu explicación — el detalle clave (el string es lo que el usuario va a ver):**
> - *"El string que va dentro de **_new Error("...")_** termina en **_error.message_** del objeto que recibe el catch. **Es exactamente la propiedad que vimos al principio del día.**"*
> - *"Por eso un buen mensaje cuenta: si pongo **_throw new Error("Algo salió mal")_**, el usuario ve 'Algo salió mal'. Si pongo **_throw new Error(`No se encontró "${nombre}"`)_**, el usuario ve 'No se encontró "pikachuu"'. La diferencia es HUGE — y la rúbrica lo evalúa."*

> **Tu explicación — cómo se comporta dentro del `try`:**
> - *"Cuando **_throw_** dispara dentro de un try, JS **INTERRUMPE INMEDIATAMENTE** el resto del try. Es como un **_return_** que se va al catch en vez de irse al caller. Las líneas que vienen abajo del throw NUNCA se ejecutan."*
> - *"En nuestro código, vamos a hacer **_throw new Error(...)_** cuando **_response.ok_** sea **_false_**. Inmediatamente después, la línea **_response.json()_** NO corre — saltamos al catch."*

> **Analogía:** *"**_throw_** es como **romper el vidrio del detector de incendios manual** —el botón rojo que activa la alarma a propósito—. Los detectores automáticos (los errores nativos como _ReferenceError_) saltan solos cuando detectan humo. Pero a veces VOS ves humo antes que ellos —por ejemplo, al recibir un 404 que el detector automático de **_fetch_** NO marca como incendio— y necesitás romper el vidrio para que el sistema reaccione."*

---

#### 3.5 Propagación de errores — cómo el `throw` sube por la pila

**EN PANTALLA: EXCALIDRAW — dos pilas verticales lado a lado. **Izquierda (SIN manejo):** 5 cajas apiladas de abajo hacia arriba —"tope del script" / "listener click" / "mostrarBusqueda" / "buscarPokemon" / "obtenerPokemon (throw acá)"—. Una flecha ROJA gruesa que sale de la caja inferior y recorre TODAS las cajas hasta llegar al tope, con etiqueta "script muere acá". **Derecha (CON try/catch en mostrarBusqueda):** la misma pila, pero la caja "mostrarBusqueda" tiene un escudo verde **_try/catch_** dibujado encima. La flecha roja sube desde **_obtenerPokemon_**, pasa por **_buscarPokemon_**, y se DETIENE en el escudo verde de **_mostrarBusqueda_**. Etiqueta verde: "atrapado — la app sigue viva".**

> **Tu apertura:**
> *"Frená un segundo antes del lab. Ya sabemos hacer **_throw_**, ya sabemos atrapar con **_try/catch_**. Pero cuando hagamos el lab vamos a hacer una cosa rarísima — el **_throw_** lo vamos a poner adentro de **_obtenerPokemon_**, y el **_try/catch_** que lo atrapa está en **_mostrarBusqueda_**. Son DOS funciones distintas, dos niveles separados de la pila. ¿Por qué eso funciona? Por una idea que está abajo de todo lo que hicimos hoy: la **propagación**."*

> **Tu explicación teórica precisa:**
> *"Cada vez que una función llama a otra función, JavaScript va **apilando** un registro de quién llamó a quién. Eso se llama la **PILA DE LLAMADAS**. Es la misma pila que aparece en **_error.stack_** —la que vimos al principio del día—. Cuando un error se dispara dentro de una función (sea por el motor o por un **_throw_** nuestro), JS NO lo deja ahí: lo hace **SUBIR** por esa pila, función por función, buscando un **_catch_** que lo atrape."*

> **Las 2 reglas de la propagación:**
> - *"**Si encuentra un catch en algún nivel superior** → se DETIENE ahí. El catch lo agarra, hace lo que tenga que hacer, y la ejecución continúa después del bloque **_try/catch_** como si nada hubiera pasado."*
> - *"**Si NO encuentra ningún catch en toda la pila** → llega al tope del script y el script **MUERE**. Eso es lo que pasó en C11: el SyntaxError salió de **_response.json()_** y NUNCA se topó con un catch — por eso recargar era la única salida."*

> **Tu desarrollo — el caso concreto que vamos a hacer en el lab (señalando la pila derecha del panel):**
> *"En el lab vamos a hacer **_throw new Error(\`No se encontró \"${nombre}\"\`)_** adentro de **_obtenerPokemon_** —cuando el **_response.ok_** sea **_false_**—. Sigamos su recorrido:"*
> - *"Nace en **_obtenerPokemon_**, donde escribimos el throw."*
> - *"**_obtenerPokemon_** no tiene try/catch propio — el error sube a **_buscarPokemon_**."*
> - *"**_buscarPokemon_** tampoco tiene try/catch — sube a **_mostrarBusqueda_**."*
> - *"Y AHÍ encuentra el try/catch que pusimos en la primera actividad. Lo agarra. La línea **_mensaje.textContent = error.message_** del catch lee el string que pusimos en el throw 3 niveles abajo y lo pinta en pantalla."*

> **El término técnico:**
> *"Este 'subir por la pila buscando un catch' tiene dos nombres en el mundo del software: **propagación** y **burbujeo**. La idea de 'burbuja' viene de imaginar al error como una burbuja en agua —siempre sube hasta encontrar la superficie—. Las dos palabras se usan; son intercambiables."*

> **Código de demo — propagación a través de 3 niveles de funciones:**
> *"Lo vemos en un caso mínimo, sin API ni nada — solo 3 funciones que se llaman entre sí. La idea es ver la propagación en estado puro."*
>
> **Demo 1 — SIN `try/catch`, el `throw` sube hasta el tope y mata el script:**
> ```javascript
> function nivelTres() {
>   throw new Error("explosión adentro del nivel más bajo");
> }
>
> function nivelDos() {
>   nivelTres();   // no tiene try/catch — el error sigue subiendo
> }
>
> function nivelUno() {
>   nivelDos();    // tampoco tiene try/catch — el error sigue subiendo
> }
>
> console.log("antes");
> nivelUno();
> console.log("DESPUÉS");   // ← NUNCA se ejecuta
> ```
>
> **Output esperado:**
> ```
> antes
> Error: explosión adentro del nivel más bajo
>     at nivelTres (...)
>     at nivelDos (...)
>     at nivelUno (...)
> ```
>
> *"Tres cosas importantes en ese output: (a) el mensaje del error fue el que pusimos en el `throw` adentro de `nivelTres`; (b) el `stack` muestra los 3 niveles que el error atravesó subiendo; (c) `DESPUÉS` NUNCA se imprime — el script murió."*
>
> **Demo 2 — CON `try/catch` en el nivel MÁS ARRIBA (nivelUno), atrapa el error que nació 2 niveles más abajo:**
> ```javascript
> function nivelTres() {
>   throw new Error("explosión adentro del nivel más bajo");
> }
>
> function nivelDos() {
>   nivelTres();   // sigue sin try/catch
> }
>
> function nivelUno() {
>   try {
>     nivelDos();   // el error sube de nivelTres → nivelDos y CAE acá
>   } catch (error) {
>     console.log("atrapé en nivelUno:", error.message);
>   }
> }
>
> console.log("antes");
> nivelUno();
> console.log("DESPUÉS");   // ← ahora SÍ se ejecuta
> ```
>
> **Output esperado:**
> ```
> antes
> atrapé en nivelUno: explosión adentro del nivel más bajo
> DESPUÉS
> ```
>
> *"Acá está la propagación en acción: el `throw` se disparó en `nivelTres`, no había catch ahí, subió a `nivelDos`, tampoco había catch, subió a `nivelUno` y AHÍ se topó con el catch. Lo atrapó. El script siguió. **El catch NO TIENE QUE ESTAR EN LA MISMA FUNCIÓN DONDE NACE EL ERROR** — puede estar varios niveles más arriba. Esto es exactamente la arquitectura que vamos a montar en el lab: **_throw_** en **_obtenerPokemon_**, **_catch_** en **_mostrarBusqueda_**."*

> **Tu cierre del sub-punto + puente al lab:**
> *"Con esta idea en la mano, el plan del lab se vuelve obvio: el throw va donde detectamos el problema (donde tenemos el **_response.ok_** falso, o sea **_obtenerPokemon_**) y el catch va donde la app necesita seguir viva (donde el usuario espera ver el resultado, o sea **_mostrarBusqueda_**). Bajamos al plan socrático."*

---

#### 3.6 Lab HU2 — refactor de `obtenerPokemon` con `response.ok` + `throw`

**EN PANTALLA: EXCALIDRAW Panel 3.6 LIBRE — el instructor escribe los 8 pasos socráticos uno por uno mientras conduce el plan (sin contenido pre-escrito, solo el marco con el título "PLAN DE LA SOLUCIÓN — HU 2: MENSAJE ESPECÍFICO"). Después: VS CODE + NAVEGADOR (Live Server) para el code-along.**

> **Tu apertura:**
> *"Vamos al lab. La HU 2 tiene 3 criterios y el plan socrático tiene 8 pasos. Mismo patrón: hablamos los pasos, después bajamos a código."*

> **Plan de la solución — definir los pasos ANTES de escribir el código:**
> *(Conducirlo socráticamente. **Regla del juego: cada paso se responde leyendo la HU 2 y sus 3 criterios** — no son decisiones abiertas.)*
>
> **Paso 1 · EL USUARIO ya tiene la búsqueda funcionando con mensaje genérico**
>
> Punto de partida — sin pregunta socrática. Con la HU 1 lista, una búsqueda fallida muestra "Algo salió mal." en rojo.
>
> ---
>
> **Paso 2 · EL USUARIO busca un nombre que NO existe (ej. "pikachuu")**
>
> > 🔎 *Veamos la HU 2 textual: **"si escribo un nombre que no existe, quiero un mensaje que diga exactamente eso"**. La demo de DevTools de hace un rato nos mostró QUÉ devuelve la API en este caso. ¿Qué status devolvió?*
>
> > ✅ **Respuesta esperada:** **_404 Not Found_**. La familia 4xx — el servidor entendió la URL pero NO tiene el recurso pedido.
>
> ---
>
> **Paso 3 · EL PROGRAMA detecta que el fetch trajo un status que NO es 2xx**
>
> > 🔎 *El **_fetch_** se resolvió OK aunque el status sea 404 — eso lo vimos. ¿Con qué propiedad del objeto **_response_** chequeamos rápido si el status fue 2xx o no?*
>
> > ✅ **Respuesta esperada:** **_response.ok_** — booleano. **_true_** si el status es 2xx; **_false_** en cualquier otro caso.
> > El chequeo idiomático: **_if (!response.ok) { ... }_** justo después del **_fetch_**, ANTES del **_.json()_**.
>
> ---
>
> **Paso 4 · EL PROGRAMA reacciona al `!response.ok` lanzando un error propio**
>
> > 🔎 *La HU criterio textual: **"El mensaje es específico (nombra lo que se buscó), no genérico"**. ¿Con qué palabra clave del lenguaje lanzamos un error propio desde nuestro código?*
>
> > ✅ **Respuesta esperada:** **_throw new Error("...")_**. El string que va adentro del paréntesis termina en **_error.message_** del catch que ya tenemos de la primera actividad.
>
> ---
>
> **Paso 5 · EL PROGRAMA arma el string específico con el nombre buscado**
>
> > 🔎 *La HU dice: **"muestra el mensaje 'No se encontró pikachuu'"** — el nombre escrito tiene que aparecer EN el mensaje. ¿Cómo metemos el valor de la variable **_idONombre_** adentro del string?*
>
> > ✅ **Respuesta esperada:** template literal (backticks + **_${...}_**).
> > **Sintaxis:** **_throw new Error(`No se encontró "${idONombre}"`)_**.
> > Las comillas dobles adentro hacen que el usuario vea literalmente: **_No se encontró "pikachuu"_** — más claro que sin comillas.
>
> ---
>
> **Paso 6 · EL PROGRAMA captura ese error en el catch que YA EXISTE**
>
> > 🔎 *El **_throw_** sube por la pila igual que un error nativo. ¿Dónde lo va a atrapar? Y una vez atrapado, ¿qué cambiamos en el catch para que el mensaje específico aparezca en pantalla en lugar del genérico?*
>
> > ✅ **Respuesta esperada:** lo atrapa el **_catch (error)_** que ya pusimos en **_mostrarBusqueda_** en la actividad anterior — sube de **_obtenerPokemon_** → **_buscarPokemon_** → **_mostrarBusqueda_** y ahí lo agarra.
> > **El cambio:** en lugar de **_mensaje.textContent = "Algo salió mal..."_**, usamos **_mensaje.textContent = error.message_**.
> > Lo demás del catch queda igual.
>
> ---
>
> **Paso 7 · EL USUARIO con nombre VÁLIDO sigue viendo la tarjeta normal**
>
> > 🔎 *La HU criterio textual: **"Un nombre válido sigue mostrándose con normalidad"**. ¿Qué garantiza que con "charizard" la app siga funcionando igual?*
>
> > ✅ **Respuesta esperada:** el chequeo **_if (!response.ok)_** SOLO dispara el throw cuando **_response.ok_** es **_false_**. Con "charizard" el status es 200, **_response.ok_** es **_true_**, el throw NO se ejecuta, y el código sigue al **_return response.json()_** normalmente.
>
> ---
>
> **Paso 8 · Verificación — los 3 criterios de la HU en vivo**
>
> > 🔎 *¿Cómo probamos los 3 criterios en la app?*
>
> > ✅ **Respuesta esperada:**
> > (a) Buscar **_pikachuu_** → debe aparecer **_No se encontró "pikachuu"_** (criterio 1 + criterio 2).
> > (b) Buscar **_charmander_** → debe aparecer la tarjeta del Pokémon (criterio 3).
> > (c) Buscar **_mewtwoo_** → debe aparecer **_No se encontró "mewtwoo"_** (criterio 2, distintos nombres → distintos mensajes).

> **Tu cierre del plan (antes de bajar a código):**
> *"Ocho pasos. Solo cambiamos UNA función —**_obtenerPokemon_**— y una línea del catch —**_error.message_** en vez del texto fijo—. El resto del código (la red de seguridad, el setup del lab, todo lo demás de la primera actividad) NO se toca. Es un cambio quirúrgico."*

> **Code-along (HU2):**
>
> **Cambio 1: refactor de `obtenerPokemon`**
> ```javascript
> async function obtenerPokemon(idONombre) {
>   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idONombre}`);
>
>   if (!response.ok) {                                       // ← Paso 3: chequeo idiomático
>     throw new Error(`No se encontró "${idONombre}"`);       // ← Paso 4 + 5: lanzar con mensaje específico
>   }
>
>   return response.json();                                    // ← solo si response.ok fue true (Paso 7)
> }
> ```
>
> **Cambio 2: en `mostrarBusqueda`, usar `error.message` en lugar del texto fijo**
> ```javascript
> } catch (error) {
>   mensaje.textContent = error.message;                       // ← Paso 6: el string del throw aparece acá
>   mensaje.classList.remove("hidden");
> }
> ```
> - *"Dos cambios chiquitos: en **_obtenerPokemon_** agregamos el chequeo + el throw; en el catch, cambiamos el texto genérico por **_error.message_**. Total: 3 líneas nuevas, 1 línea modificada."*
> - *"Lo que NO cambia: la estructura del **_try/catch_** sigue igual; **_buscarPokemon_** no se toca; **_mostrarResultado_** no se toca; el HTML del **_#mensaje_** no se toca."*

> **Checkpoint 2 (~50 min):** *(a) buscar "charizard" → la tarjeta sale normal con su botón Capturar; (b) buscar "pikachuu" → aparece el mensaje **_No se encontró "pikachuu"_** en rojo (NO el genérico anterior); (c) buscar "mewtwoo" → aparece **_No se encontró "mewtwoo"_** (mensaje específico cambia según el nombre); (d) verificar en DevTools → Console: NO hay error rojo, todo se atrapó limpiamente.*

> **Cierre del Momento + puente al siguiente:**
> *"Listo: el mensaje pasó de 'Algo salió mal' a 'No se encontró pikachuu'. La app comunica EXACTAMENTE qué pasó. Pero noten una cosa más sutil: cuando el usuario pulsa Buscar, ¿qué ve durante el tiempo que tarda la API? **Nada.** La pantalla se queda quieta y de repente aparece el resultado (o el mensaje). Si el WiFi está lento, parece que la app se colgó. Necesitamos un **'Cargando…'** que se vea mientras espera — y que SIEMPRE desaparezca al terminar, haya éxito o error. Eso es lo siguiente, y trae la tercera palabra de **_try/catch/finally_** que dejamos guardada."*

---

## MOMENTO 4 — `finally` + estado de carga + HU3: spinner garantizado

**Tiempo:** ~25 min
**Parte del lab:** HU3 (Checkpoint 3 ~75 min de reloj de lab).

> **OBJETIVO:** El alumno entiende **_finally_** como el bloque que se ejecuta **SIEMPRE** —éxito, error capturado, e incluso si hay `return` adentro del `try`— y por qué es **el lugar perfecto** para ocultar un spinner: garantiza que el indicador de carga nunca se quede pegado. **Activa el segundo estado del mapa de los 4 estados de UI: CARGANDO** (después de ERROR en M2; previo a VACÍO en M5). Define socráticamente los pasos de HU3, agrega el manejo del spinner en **_mostrarBusqueda_** usando `finally`, **y también** robustece la carga inicial **_cargarPokedex_** con su propio try/catch/finally (porque también puede fallar al abrir la página sin red). En el plan socrático del lab, **el alumno comete primero el error de poner `spinner.add("hidden")` al final del try** —el spinner queda pegado al buscar "pikachuu"— y solo después corrige usando `finally`. Esa secuencia "ver el dolor → aplicar el fix" deja el aprendizaje mucho más fijo que cualquier demo previa.

> **Patrón pedagógico de M4:** **concepto → plan socrático con error intencional → lab.** Estructura: 4.1 finally como garante visual (sintaxis general + analogía rutina de cierre del local + la línea del tiempo con y sin `finally` + recordatorio del mapa de estados — acá se activa el **estado CARGANDO**, el segundo del día); 4.2 plan socrático + code-along HU3 anclado a los 3 criterios ("aparece Cargando…" + "siempre desaparece" + "si la carga inicial falla, también se ve mensaje"). **El propio plan socrático del lab fuerza al alumno a ver el spinner pegado** —primero pone `spinner.add("hidden")` al final del try, prueba "pikachuu", observa que queda pegado, y solo después lo mueve al `finally`—. No hace falta una demo previa: el lab mismo es la demo. El code-along cubre las **DOS** funciones: **_mostrarBusqueda_** (spinner para búsqueda) **Y** **_cargarPokedex_** (spinner para carga inicial). Reuso explícito de **_buscarPokemon_** / **_obtenerPokemon_** de M2-M3 sin tocar.

#### 4.1 `finally` — el bloque que se ejecuta SIEMPRE

**EN PANTALLA: EXCALIDRAW — dos líneas del tiempo apiladas. **Camino feliz** (verde): muestra spinner → fetch OK → oculta spinner → fin. **Camino con error SIN finally** (rojo): muestra spinner → fetch FALLA → catch corre → spinner queda PEGADO (etiqueta "spinner sigue visible"). Debajo: la versión CORREGIDA con finally, donde ambos caminos convergen en "oculta spinner".**

> **Tu apertura:**
> *"El mensaje pasó de genérico a específico — la app comunica QUÉ pasó cuando hay error. Pero falta una cosa: feedback DURANTE la espera. Hoy, cuando el alumno pulsa Buscar, la pantalla se queda quieta hasta que aparece el resultado o el error. Si el WiFi está lento, parece que la app se colgó. Estamos a punto de activar el siguiente estado del mapa: **CARGANDO**. La tercera palabra de **_try/catch/finally_** que dejamos guardada al principio es la herramienta del lenguaje para esto."*

> **Tu zoom-in — el estado CARGANDO (lo activamos en esta actividad):**
> *"Antes de la sintaxis de **_finally_**, le ponemos nombre técnico al estado del mapa que entra en escena AHORA: el estado **CARGANDO**."*

> **Tu definición teórica precisa del estado CARGANDO:**
> *"El **estado CARGANDO** es la pantalla que mostramos **mientras** la app está esperando una respuesta del servidor (o de cualquier operación asíncrona). No es éxito —todavía no llegaron los datos—; no es error —todavía no falló nada—; es 'pedí, estoy esperando, no te vayas'. Es el estado **transitorio** por definición: dura solo lo que dura la espera."*

> **Sus 3 propiedades visuales (las del lab):**
> - *"**Color neutro / gris** — convención de la industria: el ojo lee 'esto es información de estado, no resultado'. En el HTML usamos **_text-slate-500_** de Tailwind, NO rojo (sería confundirlo con ERROR) ni verde (sería confundirlo con ÉXITO)."*
> - *"**Texto puramente informativo** — el contenido habitual es 'Cargando…' (con los 3 puntos suspensivos sugiriendo continuidad). NO comunica decisión —no dice 'esperá' ni 'no toques'—; solo describe lo que está pasando."*
> - *"**Las demás zonas se ocultan o conviven** — al encender CARGANDO, el ERROR del intento anterior se oculta (limpieza). El ÉXITO anterior puede quedarse abajo o irse, depende del UX; en nuestra Pokédex se queda."*

> **Cuándo se enciende y cuándo se apaga:**
> - *"**Se enciende** al INICIO de la función asíncrona, ANTES del **_try_** — porque el 'estoy esperando' empieza apenas el usuario pulsa Buscar."*
> - *"**Se apaga SIEMPRE** al terminar la operación, en cualquier camino — éxito O error. Por eso necesitamos **_finally_**: porque es el único bloque que el lenguaje GARANTIZA que va a correr en todos los caminos."*

> **Analogía:** *"El estado CARGANDO es la **rueda giratoria del cajero automático** mientras procesa tu transacción. No te dice 'el dinero está saliendo' (eso sería ÉXITO) ni 'rechazado' (eso sería ERROR) — solo te dice 'estoy trabajando, esperá'. Y se apaga **siempre** al terminar: si la transacción salió bien, si fue rechazada, o si el cajero se trabó. Si no se apagase, vos te quedarías parado pensando que sigue trabajando cuando en realidad ya terminó."*

> **Tu explicación teórica precisa:**
> *"**_finally_** es un bloque opcional de la estructura **_try/catch/finally_** que se ejecuta **SIEMPRE**, pase lo que pase:"*
> - *"Hubo éxito en el try → corre después del try."*
> - *"Hubo error → el catch corre primero, después finally."*
> - *"Hubo **_return_** adentro del try → finally corre ANTES de devolver el valor."*
> - *"Hubo otro error adentro del catch → finally corre antes de que ese error suba."*

**Sintaxis general:**
```javascript
try {
  // 1. Código que podría fallar
} catch (error) {
  // 2. Si falla, JS salta acá
} finally {
  // 3. SIEMPRE corre — éxito O error
}
```

> **Tu explicación — por qué es el lugar perfecto para el spinner:**
> *"El patrón que vamos a aplicar:"*
> - *"**_spinner.classList.remove("hidden")_** — al **principio** de la función, ANTES del try. Lo muestra."*
> - *"**_spinner.classList.add("hidden")_** — adentro del **_finally_**. Lo oculta SIEMPRE."*
> - *"Resultado: el alumno ve 'Cargando…' mientras espera, y desaparece pase lo que pase — éxito, error de red, o un 'no se encontró'. **NUNCA se queda pegado.**"*

> **Tu nota — qué pasa si NO ponemos finally:**
> *"Si pusiéramos **_spinner.classList.add("hidden")_** al FINAL del try (después del mostrarResultado), funcionaría en el camino feliz pero FALLARÍA en el camino con error. ¿Por qué? Porque cuando el try explota, JS salta al catch y NUNCA termina el try — la línea de ocultar nunca corre. El spinner queda pegado para siempre. Eso es lo que vamos a comprobar empíricamente en el próximo punto."*

> **Analogía:** *"**_finally_** es como **bajar la persiana, apagar las luces y cerrar la caja** al final del día en un local. Lo hacés SI vendiste mucho, SI no vendiste nada, SI hubo problemas con un cliente — siempre. Esa rutina no depende de lo que pasó durante el día; depende solo del momento (fin de día). Si te olvidás de bajar la persiana en algún caso particular, el local queda abierto toda la noche y a la mañana siguiente entra cualquiera. Por eso **_finally_** está separado del try y del catch — para que NO puedas olvidártelo en ninguna ruta."*

> **Pregunta de activación:**
> *"Si yo pongo un **_return_** adentro del try (por ejemplo, en el camino feliz, después del mostrarResultado), ¿el finally se ejecuta antes o NO se ejecuta porque ya hubo return?"*
> *(Respuesta esperada: SÍ se ejecuta — JS corre el finally ANTES de devolver. Esto importa para el refactor que viene más adelante, donde vamos a usar return dentro del try y necesitamos que el spinner se oculte igual.)*

---

#### 4.2 Lab HU3 — spinner garantizado + robustecer carga inicial

**EN PANTALLA: EXCALIDRAW Panel 4.2 LIBRE — el instructor escribe los 8 pasos socráticos uno por uno mientras conduce el plan (sin contenido pre-escrito, solo el marco con el título "PLAN DE LA SOLUCIÓN — HU 3: SPINNER GARANTIZADO"). Después: VS CODE + NAVEGADOR (Live Server) para el code-along.**

> **Tu apertura:**
> *"Vamos al lab. La HU 3 tiene 3 criterios y el plan socrático va a cubrir DOS funciones —no solo la búsqueda, también la carga inicial—. Eso da 8 pasos."*

> **Plan de la solución — definir los pasos ANTES de escribir el código:**
> *(Conducirlo socráticamente. **Regla del juego: cada paso se responde leyendo la HU 3 y sus 3 criterios** — no son decisiones abiertas.)*
>
> **Paso 1 · EL USUARIO ya tiene la búsqueda funcionando con mensajes específicos**
>
> Punto de partida — sin pregunta socrática. Con la actividad anterior cerrada, la búsqueda funciona con red y muestra "No se encontró 'X'" sin red.
>
> ---
>
> **Paso 2 · EL USUARIO pulsa Buscar y mientras espera, NO VE NADA**
>
> > 🔎 *Veamos la HU 3 textual: **"quiero ver 'Cargando…' mientras espera"**. Tenemos el **_&lt;div id="spinner"&gt;Cargando…&lt;/div&gt;_** que agregamos en el HTML al principio del lab. ¿Cómo lo mostramos? ¿Y cuándo exactamente?*
>
> > ✅ **Respuesta esperada:** lo mostramos con **_spinner.classList.remove("hidden")_**. **Cuándo:** al PRINCIPIO de **_mostrarBusqueda_**, ANTES del try — porque el "espera" empieza ahí.
>
> ---
>
> **Paso 3 · EL PROGRAMA intenta ocultar el spinner al final del `try` — y falla en vivo**
>
> > 🔎 *La HU dice criterio textual: **"El indicador SIEMPRE desaparece al terminar, haya éxito o error"**. La palabra **SIEMPRE** está en mayúscula a propósito. La intuición natural sería poner el ocultar AL FINAL del try, después de **_mostrarResultado(pokemon)_**. Hagámoslo así PRIMERO — antes de probar, ¿qué predicen que va a pasar con el spinner cuando busquen "pikachuu" (nombre que dispara error)?*
>
> > 🛠️ **Code-along intermedio (versión MAL a propósito):** agregar **_spinner.classList.remove("hidden")_** ANTES del try y **_spinner.classList.add("hidden")_** AL FINAL del try (después de **_mostrarResultado(pokemon)_**). Guardar y probar buscando **"pikachuu"**.
>
> > ✅ **Observación empírica:** aparece "Cargando…", después el mensaje rojo "No se encontró 'pikachuu'" sale, **PERO el 'Cargando…' queda PEGADO en pantalla**. El catch corrió —vemos el mensaje— pero **_spinner.classList.add("hidden")_** nunca corrió porque el try se interrumpió antes de llegar a esa línea.
> > **Conclusión:** poner el ocultar dentro del try NO garantiza que corra en el camino con error. Necesitamos un mecanismo que corra SIEMPRE, en los dos caminos.
>
> ---
>
> **Paso 4 · EL PROGRAMA mueve el ocultar a `finally` y verifica el fix**
>
> > 🔎 *Ya vimos el dolor empíricamente. ¿Qué bloque de la estructura **_try/catch/finally_** garantiza que una operación corra EN AMBOS CAMINOS — éxito y error?*
>
> > ✅ **Respuesta esperada:** **_finally_**. **Mover** la línea **_spinner.classList.add("hidden")_** del final del try a un nuevo bloque **_finally { ... }_** al final de la estructura. El try queda con SOLO el código que puede fallar; el catch queda igual; el finally queda con UNA línea: el ocultar.
> > **Verificación en vivo:** buscar "pikachuu" de nuevo → aparece el spinner, después el mensaje rojo, **Y el spinner DESAPARECE**. Buscar "charizard" → aparece el spinner, después la tarjeta, Y el spinner desaparece también. Los dos caminos cumplen.
>
> ---
>
> **Paso 5 · EL PROGRAMA limpia el mensaje rojo anterior al empezar nueva búsqueda**
>
> > 🔎 *Esto ya lo teníamos en la actividad anterior. Ahora con el spinner aparece una pregunta: ¿el **_mensaje.classList.add("hidden")_** del inicio se queda donde estaba, o lo movemos?*
>
> > ✅ **Respuesta esperada:** se queda donde estaba — ANTES del try, al principio de la función. Junto con la línea de mostrar spinner. Las dos operaciones de limpieza inicial van juntas: ocultar mensaje viejo + mostrar spinner.
>
> ---
>
> **Paso 6 · EL USUARIO abre la página con la red caída**
>
> > 🔎 *La HU dice criterio textual: **"Si la carga inicial de la rejilla falla, también se ve un mensaje (no una página en blanco)"**. ¿Qué función carga la rejilla al abrir? ¿Tiene try/catch hoy?*
>
> > ✅ **Respuesta esperada:** **_cargarPokedex_** (de C11). NO tiene try/catch hoy — si falla, mata el script igual que pasaba en la búsqueda antes. Hay que envolverla con try/catch/finally también.
>
> ---
>
> **Paso 7 · EL PROGRAMA aplica el MISMO patrón a `cargarPokedex`**
>
> > 🔎 *Mismo esqueleto que **_mostrarBusqueda_**. ¿Qué va en el try? ¿qué va en el catch? ¿qué va en el finally?*
>
> > ✅ **Respuesta esperada:**
> > - **try:** el cuerpo actual de **_cargarPokedex_** (el array de nombres + **_Promise.all_** + **_render_**).
> > - **catch:** mostrar mensaje en **_#mensaje_** ("No se pudo cargar la Pokédex." — texto genérico porque no hay un nombre buscado para personalizar).
> > - **finally:** **_spinner.classList.add("hidden")_** — mismo patrón.
> > Antes del try, también **_spinner.classList.remove("hidden")_** para que se vea mientras carga.
>
> ---
>
> **Paso 8 · Verificación — los 3 criterios de la HU en vivo**
>
> > 🔎 *¿Cómo probamos los 3 criterios en la app?*
>
> > ✅ **Respuesta esperada:**
> > (a) Recargar la página con red OK → el spinner aparece un instante mientras carga la rejilla y se va (criterio 1 + criterio 2).
> > (b) Buscar "charizard" → el spinner aparece durante el fetch y se va al pintar la tarjeta (criterios 1 y 2 en búsqueda).
> > (c) Buscar "pikachuu" → el spinner aparece y se va al mostrar el mensaje "No se encontró" (criterio 2 — el SIEMPRE desaparecer también funciona con error).
> > (d) Desactivar WiFi y recargar la página → el spinner aparece, se va, y aparece "No se pudo cargar la Pokédex." (criterio 3).

> **Tu cierre del plan (antes de bajar a código):**
> *"Ocho pasos. Aplicamos el MISMO patrón —try/catch/finally con spinner adentro del finally— a DOS funciones: la búsqueda y la carga inicial. La idea de fondo se repite: cualquier operación que pueda fallar Y tenga un spinner asociado, va envuelta así."*

> **Code-along (HU3):**
>
> **Cambio 1: agregar el spinner a `mostrarBusqueda`**
> ```javascript
> const spinner = document.getElementById("spinner");                  // ← Paso 2 (referencia)
>
> async function mostrarBusqueda(nombre) {
>   spinner.classList.remove("hidden");                                 // ← Paso 2: muestra Cargando
>   mensaje.classList.add("hidden");                                    // ← Paso 5: limpia mensaje viejo
>
>   try {
>     const pokemon = await buscarPokemon(nombre);
>     mostrarResultado(pokemon);
>   } catch (error) {
>     mensaje.textContent = error.message;
>     mensaje.classList.remove("hidden");
>   } finally {
>     spinner.classList.add("hidden");                                  // ← Paso 4: oculta SIEMPRE
>   }
> }
> ```
>
> **Cambio 2: robustecer `cargarPokedex`**
> ```javascript
> async function cargarPokedex() {
>   spinner.classList.remove("hidden");                                 // ← Paso 7: muestra Cargando
>   try {
>     const nombres = ["bulbasaur", "charmander", "squirtle", "pikachu", "jigglypuff", "gengar"];
>     const datos = await Promise.all(nombres.map(obtenerPokemon));
>     pokedex = datos.map(adaptarPokemon);
>     render(pokedex);
>   } catch (error) {
>     mensaje.textContent = "No se pudo cargar la Pokédex.";            // ← Paso 7: mensaje genérico
>     mensaje.classList.remove("hidden");
>   } finally {
>     spinner.classList.add("hidden");                                  // ← Paso 4 aplicado acá también
>   }
> }
> ```
> - *"Mismo esqueleto en las dos funciones: muestro spinner → try el código riesgoso → catch el error → finally oculto spinner. Una sola plantilla, dos aplicaciones."*
> - *"En **_cargarPokedex_** el texto del catch es genérico ('No se pudo cargar la Pokédex.') porque no hay un nombre buscado para personalizar. En **_mostrarBusqueda_** usamos **_error.message_** porque el throw lleva el nombre adentro."*
> - *"Lo que NO cambia: **_buscarPokemon_**, **_obtenerPokemon_**, **_mostrarResultado_**, el HTML — todo intacto."*

> **Checkpoint 3 (~75 min):** *(a) recargar la página con red OK → spinner aparece y se va, rejilla carga; (b) buscar "charizard" → spinner durante el fetch + tarjeta; (c) buscar "pikachuu" → spinner + mensaje "No se encontró"; (d) recargar con WiFi cortado → spinner aparece, se va, mensaje "No se pudo cargar la Pokédex.". En los 4 casos el spinner **siempre desaparece**.*

> **Cierre del Momento + puente al siguiente:**
> *"Listo: la app comunica EN TODO MOMENTO en qué estado está. Cargando, éxito, error específico, error de carga inicial — los cuatro escenarios cubiertos, y el spinner nunca queda pegado. Pero noten una cosa más sutil: cuando alguien escribe 'pikachuu' mal escrito, ve un mensaje **ROJO** de error. Como si fuera grave. Y técnicamente... no es tan grave — el usuario solo escribió mal. La app está PERFECTA, el servidor también — solo que el Pokémon no existe. Vale la pena distinguir 'algo se rompió de verdad' de 'no hay resultado'. Eso es lo que ajustamos a continuación."*

---

## MOMENTO 5 — "No encontrado ≠ error" + 4 estados de UI + HU4: refactor del 404

**Tiempo:** ~25 min
**Parte del lab:** HU4 (Checkpoint 4 ~95 min de reloj de lab).

> **OBJETIVO:** El alumno entiende el principio **"exceptions are for exceptions"** —los `throw` se reservan para fallos genuinos, no para resultados esperados— y refactoriza el código de M3 (HU2) para que un 404 deje de ser un error: **_obtenerPokemon_** ahora devuelve **_null_** ante un 404 y solo lanza `throw` para otros fallos HTTP. **_buscarPokemon_** y **_mostrarBusqueda_** propagan ese `null` y muestran un aviso neutro ("No se encontró 'X'") separado del mensaje rojo de error. **Activa el último estado del mapa: VACÍO** — la teoría del estado VACÍO se desarrolla AQUÍ, cuando entra en escena (definición + propiedades visuales + cuándo se enciende/apaga + analogía), siguiendo el mismo patrón con el que el día ya desarrolló ERROR (en M2) y CARGANDO (en M4). Al cerrarse este Momento, el alumno tiene activos los 4 estados (cargando/éxito/error/vacío) que conoció como mapa en M2.3.

> **Patrón pedagógico de M5:** **principio conceptual + activación del estado VACÍO → plan socrático → lab.** Es el Momento conceptual más rico del día. Estructura: 5.1 "no encontrado ≠ error" — el principio "exceptions are for exceptions" + analogía "no hay mesa libre vs hubo un incendio" + diagrama de refactor con el "antes vs después" del código de HU2 vs HU4 — **acá nace el estado VACÍO** como categoría distinta del error, con su definición teórica completa (qué es, propiedades visuales del lab —color azul/gris suave, ícono opcional, texto descriptivo no alarmante—, cuándo se enciende, cuándo se apaga, analogía); 5.2 plan socrático + code-along HU4 anclado a los 3 criterios ("aviso de no se encontró" + "menciona el nombre" + "se puede volver a buscar sin recargar"). El code-along refactoriza **_obtenerPokemon_** (404 → `return null`), propaga el null en **_buscarPokemon_**, y agrega el chequeo `if (pokemon === null)` en **_mostrarBusqueda_**. Punto clave: `return` adentro del `try` NO salta el `finally` — el spinner se oculta igual. **Cierre del momento (no es un sub-punto aparte sino el bloque de cierre):** vista de pájaro del mapa completo — una sola frase que pinta los 4 estados activos en la app terminada ("la Pokédex de hoy puede estar en 4 caras: pidiendo, mostrando, fallando, vacía — y cada cara tiene su zona del HTML y su disparador del JS"). NO se redesarrolla la teoría de los 4 — solo se nombra que ya están todos activos y el alumno los vivió uno por uno.

#### 5.1 "No encontrado ≠ error" — el principio + el estado VACÍO

**EN PANTALLA: EXCALIDRAW — dos columnas paralelas con el código de **_obtenerPokemon_** lado a lado: a la izquierda **HU2 — TODO error** (cuadro rojo arriba con el `throw` del 404), a la derecha **HU4 — 404 separado** (cuadro verde arriba con el `return null`, cuadro rojo más chico abajo con el `throw` para otros casos). Flecha grande naranja en el medio etiquetada **"refactor"** que va de izquierda a derecha. Debajo, etiqueta destacada: *"el catch queda LIMPIO — solo atrapa lo verdaderamente inesperado".***

> **Tu apertura:**
> *"Vamos a hacer algo que en el código se ve como un cambio chico pero en el SIGNIFICADO es enorme. Hoy buscamos 'pikachuu' mal escrito y el alumno ve un mensaje **ROJO** de error. La app comunica 'algo se rompió'. Pero técnicamente NADA se rompió — el servidor respondió perfecto, la red funcionó perfecto, el fetch llegó perfecto. Solo que el Pokémon no existe. Es como si Google, cuando buscás algo raro, te mostrara una pantalla con FUEGO. Sería absurdo. Vamos a arreglar ese matiz."*

> **Tu explicación teórica precisa — el principio "exceptions are for exceptions":**
> *"En el mundo del software hay una regla con nombre propio: **'exceptions are for exceptions'** —las excepciones son para situaciones excepcionales—. Está documentada en uno de los libros más influyentes de los últimos 25 años (*Effective Java*, de Joshua Bloch). La idea:"*
> - *"**_throw / catch_** es la herramienta del lenguaje para situaciones que NO deberían pasar en operación normal: el servidor se cayó, la red se cortó, el archivo se corrompió. Cosas excepcionales — fallos genuinos."*
> - *"Buscar un nombre mal escrito **NO es excepcional**. Pasa todos los días, cientos de veces por usuario. Es ESPERADO. Tratar lo esperado como excepción es usar la herramienta equivocada."*

> **Tu desarrollo — el patrón idiomático en JavaScript:**
> *"En JS la forma idiomática de 'esto no es un error, simplemente no hay nada' es **devolver _null_** (o un valor especial parecido). El **_null_** es JS diciendo 'la consulta funcionó OK, pero el resultado está vacío'. Y eso se chequea con un **_if_** simple, antes del render normal. El `throw` queda reservado SOLO para fallos de verdad — el `catch` queda LIMPIO."*

**Sintaxis del refactor — `obtenerPokemon` antes vs después (señalando el panel):**
```javascript
// HU2 — versión actual: TODO 4xx/5xx es error
if (!response.ok) {
  throw new Error(`No se encontró "${idONombre}"`);
}

// HU4 — versión refactorizada: 404 ya NO es error
if (response.status === 404) {
  return null;                                       // ← "no existe" = valor vacío, NO error
}
if (!response.ok) {
  throw new Error("La API respondió con un error");  // ← otros fallos HTTP SÍ son error
}
```

> **Tu explicación — qué se gana con el refactor (señalando el panel):**
> - *"**El catch queda LIMPIO.** Después del cambio, el catch SOLO atrapa cosas inesperadas: timeout, 500, red caída. Si algún día aparece un error nuevo en el catch, ya no se 'contamina' con los 404 esperados — es más fácil de debuggear."*
> - *"**Cada situación tiene su aviso.** El rojo de error grita 'algo se ROMPIÓ' — y el usuario que escribió mal el nombre no rompió nada. Un aviso neutro gris ('no se encontró') es más apropiado, menos alarmista, y técnicamente más correcto."*
> - *"**Es el patrón estándar de la industria.** En lenguajes modernos como Rust y Go, los errores se devuelven como valores explícitos —exactamente esto—. JS no llega tan lejos, pero el patrón '`null` para no encontrado + `throw` para fallos reales' es la versión idiomática."*

> **Analogía:** *"Cuando entrás a un restaurante, la recepcionista puede decirte tres cosas distintas:"*
> - *"**(1) 'pase, tenemos mesa'** — el caso éxito."*
> - *"**(2) 'todas las mesas están ocupadas, ¿quiere esperar?'** — un resultado válido, comunicado con calma. No pasó nada malo. Esto es el caso VACÍO."*
> - *"**(3) 'se incendió la cocina, no estamos atendiendo'** — un fallo de verdad, comunicado con urgencia. Esto es ERROR."*
>
> *"Tratar el caso (2) como si fuera (3) sería absurdo —la persona se asustaría sin razón—. Igual de absurdo es tratar 'no existe ese Pokémon' como un error rojo: es un caso (2), comunicado con calma."*

---

> **Tu zoom-in — el estado VACÍO (lo activamos en esta actividad):**
> *"Igual que hicimos con ERROR en la primera actividad y con CARGANDO después del receso, le ponemos nombre técnico al cuarto y último estado del mapa — el que entra en escena AHORA: el estado **VACÍO**."*

> **Tu definición teórica precisa del estado VACÍO:**
> *"El **estado VACÍO** es la pantalla que mostramos cuando la operación **terminó con éxito técnico** —la red OK, el servidor OK, el fetch OK— pero **el resultado no contiene datos**. No es éxito (no hay tarjeta que pintar); no es error (nada se rompió); es 'todo funcionó perfecto, simplemente no hay nada para mostrar'. Es el estado que confunde a los principiantes porque PARECE error pero técnicamente NO LO ES."*

> **Sus 3 propiedades visuales (las del lab):**
> - *"**Color neutro / gris suave** — convención de la industria: el ojo lo lee como 'información, no alarma'. En el HTML usamos **_text-slate-500_** (el mismo gris del spinner, NO el rojo del mensaje de error). Cuando un usuario lo ve, debe entender 'tranquilo, no se rompió nada' — solo que esta consulta no encontró resultado."*
> - *"**Texto descriptivo y orientador** — el contenido tiene que nombrar QUÉ no se encontró (el nombre buscado) y, opcionalmente, sugerir acción. En nuestro lab: **_'No se encontró ningún Pokémon llamado \"pikachuu\" 🔍'_** — el emoji 🔍 refuerza el carácter de 'búsqueda sin resultado', NO de fallo. NO usamos íconos de alerta (⚠️ ❌) ni colores de urgencia."*
> - *"**Las demás zonas se ocultan o quedan vacías** — el grid de **_#resultado_** se REEMPLAZA por el aviso (no se acumula con tarjetas viejas). El **_#mensaje_** rojo queda oculto. El spinner ya se fue gracias al **_finally_**. Una sola cara visible: el aviso neutro."*

> **Cuándo se enciende y cuándo se apaga:**
> - *"**Se enciende** cuando la función de búsqueda recibe **_null_** —el valor que devolvemos cuando el 404 ya no es error—. El disparador es un **_if (pokemon === null)_** dentro del `try`, ANTES del render normal."*
> - *"**Se apaga** al iniciar la próxima búsqueda — igual que ERROR. Cuando el usuario corrige el nombre y vuelve a buscar, el aviso desaparece y empieza el ciclo de nuevo: CARGANDO → ÉXITO / ERROR / VACÍO según corresponda."*

> **Analogía:** *"El estado VACÍO es el **'No se encontraron resultados para...'** de Google. La búsqueda fue técnicamente perfecta —los servidores respondieron, la red funcionó, la consulta llegó—. Solo que no hay nada que mostrar. Google NO te muestra una pantalla roja con 'ERROR'. Te dice con calma 'no hay resultados, ¿quizás quisiste decir...?' — exactamente la misma diferencia que estamos a punto de implementar."*

> **Tu cierre del sub-punto + puente al lab:**
> *"Listo: tenemos el principio (no encontrado ≠ error), el patrón técnico (`return null` + chequeo con `if`), y la definición visual del estado VACÍO. Ahora bajamos al plan socrático del refactor — vamos a tocar TRES funciones: **_obtenerPokemon_**, **_buscarPokemon_** y **_mostrarBusqueda_**."*

---

#### 5.2 Lab HU4 — refactor del 404: del `throw` al estado VACÍO

**EN PANTALLA: EXCALIDRAW Panel 5.2 LIBRE — el instructor escribe los 8 pasos socráticos uno por uno mientras conduce el plan (sin contenido pre-escrito, solo el marco con el título "PLAN DE LA SOLUCIÓN — HU 4: AVISO DE NO ENCONTRADO"). Después: VS CODE + NAVEGADOR (Live Server) para el code-along.**

> **Tu apertura:**
> *"Vamos al refactor. La HU 4 tiene 3 criterios y el plan socrático tiene 8 pasos. La diferencia con los labs anteriores: hoy tocamos TRES funciones, no una. **_obtenerPokemon_** cambia el throw del 404 por `return null`; **_buscarPokemon_** propaga ese null; **_mostrarBusqueda_** lo chequea y activa el estado VACÍO."*

> **Plan de la solución — definir los pasos ANTES de escribir el código:**
> *(Conducirlo socráticamente. **Regla del juego: cada paso se responde leyendo la HU 4 y sus 3 criterios** — no son decisiones abiertas.)*
>
> **Paso 1 · EL USUARIO ya tiene la búsqueda mostrando "No se encontró..." en rojo**
>
> Punto de partida — sin pregunta socrática. Con la actividad anterior cerrada, buscar "pikachuu" pinta el mensaje rojo de error, el spinner aparece y se va, todo funcional.
>
> ---
>
> **Paso 2 · EL PROGRAMA distingue un 404 de OTRO error HTTP**
>
> > 🔎 *Veamos la HU 4 textual: **"si busco un Pokémon que no existe, quiero un aviso de 'no se encontró', no un error rojo"**. ¿Cómo distinguimos un 404 (no encontrado) de otros fallos HTTP (500, red caída) ANTES de decidir si lanzar o no?*
>
> > ✅ **Respuesta esperada:** chequear **_response.status === 404_** ANTES del chequeo general **_!response.ok_**. El 404 deja de lanzar; los OTROS fallos HTTP siguen lanzando (con un mensaje genérico ahora — "La API respondió con un error" — porque ya no nombran el Pokémon buscado, ese caso ya no es error).
>
> ---
>
> **Paso 3 · EL PROGRAMA devuelve _null_ ante un 404 — el valor estándar de "no hay nada"**
>
> > 🔎 *Si el 404 ya no lanza, ¿qué tiene que devolver **_obtenerPokemon_** para que las funciones de arriba sepan 'no hay resultado'? ¿Y por qué `null` y no `undefined` u otra cosa?*
>
> > ✅ **Respuesta esperada:** **_return null_**. El **_null_** es la convención de JS para "valor vacío explícito" — distinto de **_undefined_** (que es "no se asignó"). Cualquier función puede chequear con **_=== null_** y saber que es el caso "no hay datos".
> > **Modificación:** en **_obtenerPokemon_**, agregar `if (response.status === 404) return null;` ANTES del `if (!response.ok)`.
>
> ---
>
> **Paso 4 · EL PROGRAMA propaga ese `null` hacia arriba en `buscarPokemon`**
>
> > 🔎 *Hoy **_buscarPokemon_** llama a **_obtenerPokemon_** y devuelve **_adaptarPokemon(data)_**. Si **_data_** es **_null_**, ¿qué pasa si lo pasamos por **_adaptarPokemon_**?*
>
> > ✅ **Respuesta esperada:** explota — **_adaptarPokemon_** asume **_data.types_**, **_data.sprites_**, etc., y un **_null_** no tiene esas propiedades. Es exactamente el TypeError de C11.
> > **Modificación:** en **_buscarPokemon_**, ANTES del **_adaptarPokemon_**, agregar `if (data === null) return null;`. El null sigue subiendo. La función pasa a tener dos retornos posibles: el objeto adaptado, o `null`.
>
> ---
>
> **Paso 5 · EL PROGRAMA chequea `null` en `mostrarBusqueda` ANTES del render normal**
>
> > 🔎 *Cuando **_mostrarBusqueda_** recibe el resultado de **_buscarPokemon_**, ¿qué tiene que chequear primero, antes de llamar a **_mostrarResultado_**?*
>
> > ✅ **Respuesta esperada:** chequear **_if (pokemon === null)_**. Si es null → activar el estado VACÍO y salir limpio con **_return_**. Si NO es null → seguir con **_mostrarResultado(pokemon)_** como siempre.
> > **Ubicación:** ADENTRO del **_try_**, después del **_await buscarPokemon(nombre)_** y ANTES del **_mostrarResultado_**.
>
> ---
>
> **Paso 6 · EL PROGRAMA activa el estado VACÍO — pinta el aviso neutro en `#resultado`**
>
> > 🔎 *La HU criterio textual: **"el aviso menciona el nombre que se buscó"**. La HU dice "no se encontró ese Pokémon". ¿Dónde pintamos ese aviso —en **_#mensaje_** o en otro lugar—? ¿Por qué?*
>
> > ✅ **Respuesta esperada:** NO en **_#mensaje_** —ese es rojo, es para errores reales—. Lo pintamos REEMPLAZANDO el contenido de **_#resultado_** (el grid donde van las tarjetas). El estado VACÍO se siente como un resultado de búsqueda, no como un error.
> > **Modificación:** **_contenedor.innerHTML = `<p class="col-span-full text-center text-slate-500 py-8">No se encontró ningún Pokémon llamado "${nombre}" 🔍</p>`_**. Color gris (text-slate-500), emoji 🔍 que comunica "búsqueda" y NO alarma.
>
> ---
>
> **Paso 7 · EL PROGRAMA hace `return` después de pintar el VACÍO — Y el spinner se oculta igual**
>
> > 🔎 *Después de pintar el aviso, hacemos **_return_** para no caer en el **_mostrarResultado_** de abajo. Pero hay un punto técnico que muchos olvidan: ese **_return_** está adentro del **_try_**. ¿El **_finally_** se ejecuta o NO porque ya hubo return?*
>
> > ✅ **Respuesta esperada:** SÍ se ejecuta. **_finally_** corre SIEMPRE — incluso después de un **_return_** adentro del **_try_** o del **_catch_**. JS lo corre ANTES de devolver el control. Por eso el spinner se oculta en los TRES caminos: éxito (return implícito), VACÍO (return explícito), error (catch). Sin esta propiedad, tendríamos que duplicar el **_spinner.classList.add("hidden")_** en cada rama. Esa pregunta de activación que dejamos al principio del Momento 4 — recién acá toma sentido pleno.
>
> ---
>
> **Paso 8 · Verificación — los 3 criterios de la HU + el estado VACÍO funcionando**
>
> > 🔎 *¿Cómo probamos los 3 criterios + el efecto visual del VACÍO?*
>
> > ✅ **Respuesta esperada:**
> > (a) Buscar **"pikachuu"** → spinner aparece, se va, aparece el aviso GRIS **_'No se encontró ningún Pokémon llamado "pikachuu" 🔍'_** en el grid. **NO** mensaje rojo. **NO** se rompe la app. (criterios 1 y 2).
> > (b) Buscar **"pikachu"** → spinner, después la tarjeta con su botón Capturar — normal, como en M3/M4 (criterio 3 + verificación de que no rompimos lo anterior).
> > (c) Cortar el WiFi y buscar **"charizard"** → spinner, se va, aparece el mensaje ROJO "Algo salió mal..." en **_#mensaje_** — el error de verdad sigue funcionando, no lo rompimos.
> > **Tres situaciones, tres respuestas distintas, una app robusta.**

> **Tu cierre del plan (antes de bajar a código):**
> *"Ocho pasos. Tocamos tres funciones — **_obtenerPokemon_**, **_buscarPokemon_**, **_mostrarBusqueda_**—. Cada una con un cambio pequeño y específico. El refactor en código son ~10 líneas; el SIGNIFICADO es enorme: estamos diciendo 'no encontrado no es un error, es un resultado válido vacío'."*

> **Code-along (HU4) — tres cambios coordinados:**
>
> **Cambio 1: `obtenerPokemon` — el 404 deja de lanzar**
> ```javascript
> async function obtenerPokemon(idONombre) {
>   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idONombre}`);
>
>   if (response.status === 404) {                                       // ← Paso 2 + 3
>     return null;                                                       // ← "no existe" = valor vacío, NO error
>   }
>   if (!response.ok) {                                                  // ← otros fallos HTTP siguen siendo error
>     throw new Error("La API respondió con un error");
>   }
>
>   return response.json();
> }
> ```
>
> **Cambio 2: `buscarPokemon` — propagar el `null` hacia arriba**
> ```javascript
> async function buscarPokemon(nombre) {
>   const data = await obtenerPokemon(nombre.toLowerCase());
>   if (data === null) return null;                                      // ← Paso 4: si vino null, sigue null
>   return adaptarPokemon(data);                                         // ← si hay data, se adapta como siempre
> }
> ```
>
> **Cambio 3: `mostrarBusqueda` — chequear `null` y activar el estado VACÍO**
> ```javascript
> async function mostrarBusqueda(nombre) {
>   spinner.classList.remove("hidden");
>   mensaje.classList.add("hidden");
>
>   try {
>     const pokemon = await buscarPokemon(nombre);
>
>     if (pokemon === null) {                                            // ← Paso 5: detecta el VACÍO
>       contenedor.innerHTML = `
>         <p class="col-span-full text-center text-slate-500 py-8">
>           No se encontró ningún Pokémon llamado "${nombre}" 🔍
>         </p>`;                                                         // ← Paso 6: pinta el aviso neutro en #resultado
>       return;                                                          // ← Paso 7: sale limpio (finally CORRE igual)
>     }
>
>     mostrarResultado(pokemon);                                         // ← se encontró: render normal
>   } catch (error) {                                                    // ← solo fallos REALES caen acá
>     mensaje.textContent = "Algo salió mal. Revisa tu conexión.";
>     mensaje.classList.remove("hidden");
>   } finally {
>     spinner.classList.add("hidden");                                   // ← se oculta SIEMPRE (incluso tras el return de arriba)
>   }
> }
> ```
> - *"Tres cambios, las tres funciones tocadas mínimo lo necesario. **_mostrarResultado_** intacto, **_capturar_** intacta, **_cargarPokedex_** intacta, **_adaptarPokemon_** intacta, el HTML intacto."*
> - *"Noten el catch: antes atrapaba el 404 disfrazado de error. Ahora atrapa SOLO lo verdaderamente inesperado — un timeout, un 500, una red caída. **El catch quedó LIMPIO** — eso es lo que el refactor compra."*
> - *"Y el detalle clave: el **_return_** del estado VACÍO está ADENTRO del **_try_**, pero el **_finally_** corre igual. El spinner se oculta en TODOS los caminos. Sin esto, tendríamos que repetir 3 veces el `spinner.classList.add("hidden")`."*

> **Checkpoint 4 (~95 min):** *(a) buscar "pikachu" → tarjeta normal con su botón Capturar; (b) buscar "pikachuu" → aviso GRIS en el grid **_'No se encontró ningún Pokémon llamado "pikachuu" 🔍'_** (NO mensaje rojo); (c) buscar "mewtwoo" → mismo aviso con el nombre correcto interpolado; (d) cortar WiFi y buscar "charizard" → mensaje ROJO "Algo salió mal..." (el error de verdad sigue funcionando); (e) reconectar WiFi sin recargar y buscar "pikachu" → tarjeta normal. **Tres situaciones, tres respuestas distintas, una app robusta.***

---

> **Cierre del Momento + puente al siguiente:**
> *"Acabamos de cerrar técnicamente el día. La Pokédex de hoy puede estar en 4 caras posibles: **CARGANDO** mientras pide datos, **ÉXITO** cuando los pinta, **ERROR** cuando algo se rompe de verdad, **VACÍO** cuando funcionó perfecto pero no hay nada que mostrar. Cada una con su propia zona en el HTML, su propio disparador en el JS, y su propia voz visual. Lo logramos sin reescribir nada de C09/C10/C11 — todo lo que tenían sigue ahí, ahora envuelto en una capa robusta. **Pero falta una cosa última:** el repositorio no sabe contar qué hace este proyecto. Si yo abro tu GitHub mañana, veo carpetas y archivos, pero no entiendo qué es esta Pokédex, cómo se usa, ni dónde está deployada. Eso lo arreglamos en el cierre — con la primera doc del curso: el **README.md**."*

---

## MOMENTO 6 — Markdown + README + cierre del módulo + apertura al test

**Tiempo:** ~15 min
**Parte del lab:** Documentación (README en raíz) + entrega final + cierre del módulo + mención del test diagnóstico que sigue.

> **OBJETIVO:** El alumno conoce **Markdown** como formato de documentación técnica (las 5 sintaxis más usadas: encabezados, énfasis, listas, código inline, enlaces), entiende que el **_README.md_** es la "portada" del repo —lo primero que ve quien lo abre—, escribe el README del proyecto Pokédex con los 5 elementos que exige la rúbrica (título, descripción, cómo usarlo, tecnologías, enlace al sitio desplegado), y entiende el arco completo del Módulo 3 antes del test diagnóstico que sigue.

> **Patrón pedagógico de M6:** **concepto corto + code-along express + cierre del módulo.** Estructura: 6.1 Markdown como formato (sintaxis general + tabla de las 5 sintaxis + analogía "portada del libro" + por qué hoy es la primera vez del curso); 6.2 code-along express del README del proyecto Pokédex —el alumno crea **_README.md_** en la raíz y lo llena con los 5 elementos pedidos por la rúbrica; el instructor lo va dictando rápido porque es texto, no lógica—; 6.3 cierre del Módulo 3 — tabla resumen del arco C09→C10→C11→**C12**, mensaje "una app profesional no es la que no falla, es la que sabe qué hacer cuando falla"; 6.4 apertura del test diagnóstico — el instructor anuncia que sigue el test del M3 (20 min, fuera del guion), explica el formato general y cierra el guion. **El test en sí NO se redacta acá** — su contenido se administra después de cerrar M6 y vive en otro documento.

#### 6.1 Markdown — el formato de la documentación técnica

**EN PANTALLA: EXCALIDRAW — dos columnas paralelas con el MISMO contenido: a la izquierda el archivo **_.md_** en VS Code (monospace, texto plano con `#`, `**`, `-`, etc.); a la derecha el mismo archivo renderizado en GitHub (página web con títulos grandes, negritas, lista con bullets, links azules). Flecha grande naranja en el medio etiquetada **"GitHub Pages / GitHub.com renderiza automáticamente"**. Anclaje: *el mismo texto, dos vistas. La izquierda es lo que VOS escribís; la derecha es lo que VE quien abre tu repo.***

> **Tu apertura:**
> *"Última pieza del día. Tu Pokédex funciona perfecto y es robusta — pero si yo abro tu repositorio en GitHub mañana sin conocerte, veo carpetas y archivos, no entiendo qué es. Necesitás una **portada del proyecto** que diga 'esto es una Pokédex, así se usa, acá está el sitio'. Eso es el **README**. Y el formato en que se escribe se llama **Markdown**."*

> **Tu explicación teórica precisa:**
> *"**Markdown** es un formato de **texto plano con sintaxis mínima** que se renderiza automáticamente como texto formateado: títulos, listas, links, código. Lo lee GitHub, GitLab, Notion, Obsidian, VS Code, Discord, Slack — es **el formato estándar de documentación técnica del software libre**. La idea clave: el archivo se ve **legible incluso sin renderizar**, porque es texto plano, pero al renderizarlo se ve estructurado y bonito."*

> **Las 5 sintaxis que vas a usar HOY (señalando el panel):**
>
> | Sintaxis | Resultado |
> |---|---|
> | **_# Título_** / **_## Subtítulo_** | Encabezados (H1, H2, H3...) |
> | **_\*\*negrita\*\*_** · **_\*cursiva\*_** | Énfasis |
> | **_- item_** | Lista con viñetas |
> | **_\`código\`_** | Código en línea (monospace) |
> | **_[texto](url)_** | Enlace clickeable |

> **Tu nota técnica:**
> *"GitHub **renderiza automáticamente** cualquier **_README.md_** que esté en la raíz del repo — lo muestra como página principal cuando alguien abre el repo. Esa es la razón por la que TODO repo profesional tiene README: es la **primera impresión** del proyecto. La rúbrica del lab de hoy lo evalúa en el criterio 5 — 20 puntos."*

> **Analogía:** *"El README es la **portada del libro** — lo primero que ves al abrir el repo. Sin portada, el libro es un montón de hojas anónimas; con portada, sabés de qué se trata, quién lo escribió, cómo se usa. Un repo sin README en GitHub se ve **abandonado** — nadie lo va a leer ni usar. Es opcional técnicamente, pero socialmente es obligatorio."*

> **Tu nota — por qué Markdown HOY y no antes:**
> *"Hasta hoy no exigimos README porque los proyectos eran chicos y el código se explicaba solo. A partir del M4 los proyectos van a tener más piezas y va a ser imposible entenderlos sin doc. Por eso aprendemos Markdown HOY — para tenerlo como herramienta default de acá en adelante. Es la primera vez del curso; a partir de mañana, todo lab lleva README."*

---

#### 6.2 Code-along express — el `README.md` del proyecto Pokédex

**EN PANTALLA: VS CODE — archivo nuevo **_README.md_** en la raíz del repo (al mismo nivel que **_index.html_** y **_app.js_**). El instructor dicta las secciones rápido y va guardando para que GitHub Pages las muestre al final.**

> **Tu apertura:**
> *"Vamos a escribir el README en 5 minutos. Cinco secciones, una por elemento de la rúbrica: título, descripción, cómo usarlo, tecnologías, enlace al deploy. Es texto, no lógica — lo dictamos rápido."*

> **Code-along — paso a paso:**
> 1. En la raíz del repo (al mismo nivel de **_index.html_**), crear un archivo nuevo llamado **_README.md_** (con mayúsculas en README, extensión **_.md_** en minúsculas — convención universal).
> 2. Dictar las 5 secciones una por una:
>
> ```markdown
> # Pokédex
>
> Buscador de Pokémon que consume la PokeAPI. Permite buscar por nombre, capturar Pokémon al estado local y explorar tarjetas con stats e imágenes.
>
> ## Cómo usarlo
>
> 1. Abre el sitio desplegado.
> 2. Escribe el nombre de un Pokémon en el buscador y presiona **Buscar**.
> 3. Cuando aparezca la tarjeta, presiona **Capturar** para agregarlo a tu Pokédex local.
> 4. Usa el botón **Cargar más** para seguir explorando la rejilla inicial.
>
> ## Tecnologías
>
> - JavaScript moderno: `fetch`, `async/await`, `Promise.all`, `try/catch/finally`
> - HTML semántico + Tailwind CSS para estilos
> - [PokeAPI](https://pokeapi.co/) como fuente de datos
>
> ## Demo
>
> 🔗 [Ver en GitHub Pages](https://tu-usuario.github.io/pokedex/)
> ```

> **Tu lectura — qué hace cada sección y por qué (señalando):**
> - *"**_# Pokédex_** — el H1 grande. Es el título principal del repo. GitHub lo muestra al tope."*
> - *"**Descripción** (párrafo suelto) — UNA o DOS frases que digan QUÉ ES y QUÉ HACE. No empieces con 'este proyecto es...'; empezá con la cosa directamente: 'Buscador de Pokémon...'."*
> - *"**## Cómo usarlo** — lista numerada. Pasos concretos de USUARIO, no de programador. Quien lee esto quiere saber 'qué hago para verlo funcionar'."*
> - *"**## Tecnologías** — lista con bullets. Acá usás backticks (**_\`código\`_**) para nombres de funciones/herramientas — se ve en monospace. Y un link a la API externa con **_[texto](url)_**."*
> - *"**## Demo** — el enlace al sitio desplegado en GitHub Pages. **Este es el más importante para la rúbrica.** Reemplazá **_tu-usuario_** por tu username real de GitHub."*

> **Tu nota tras dictarlo:**
> *"Cinco minutos, cinco secciones, los 5 puntos de la rúbrica cubiertos. Después de guardar y pushear, abrí tu repo en GitHub.com y refrescá — vas a ver el README renderizado bonito en la portada del proyecto. Esa página renderizada **es** la primera impresión que cualquiera va a tener de tu trabajo."*

> **Checkpoint final del lab (~5 min):**
> *(a) El archivo **_README.md_** existe en la raíz del repo, junto a **_index.html_** y **_app.js_**; (b) abierto en GitHub.com se ve renderizado con título grande, secciones, lista, links clickeables; (c) el enlace al deploy funciona y abre la Pokédex en GitHub Pages; (d) Pull Request **_lab12-errores_** → **_main_** fusionado.*

---

#### 6.3 Cierre del Módulo 3 — el arco completo

**EN PANTALLA: EXCALIDRAW — tabla resumen del arco C09→C10→C11→C12 con cuatro filas, cada una con: clase, tema, dependencia técnica nueva, qué se agregó a la Pokédex. La última fila (C12) destacada con borde naranja porque es la que cierra.**

> **Tu apertura:**
> *"Listo. Lab terminado, README publicado. Antes del test, una pausa de 2 minutos para mirar atrás y ver el arco completo de lo que construimos en estas 4 clases."*

> **El arco del Módulo 3 (señalando la tabla):**
>
> | Clase | Tema | Lo que sumó a la Pokédex |
> |---|---|---|
> | **C09** | JS moderno + render de datos LOCALES | Renderizar tarjetas desde un array de Pokémon en duro |
> | **C10** | **_fetch_** + Promesas + JSON | Mismas tarjetas pero con datos REALES de la PokeAPI |
> | **C11** | **_async/await_** + búsqueda + paginación | Buscar por nombre, capturar al estado, "Cargar más" |
> | **C12** | **Errores + 4 estados UI + README** | App robusta + comunica QUÉ pasa + documentada |

> **Tu lectura — el principio del módulo:**
> *"Una sola app, construida clase a clase, **sumando — nunca tirando** lo anterior. Lo que escribieron en C09 sigue corriendo en la app de hoy; lo de C10 sigue ahí; lo de C11 sigue ahí. Hoy NO aprendieron a hacer algo nuevo grande — aprendieron a hacer que **lo que ya tenían no se rompa** y a **comunicar al usuario qué está pasando**. Y por primera vez, lo **documentaron**."*

> **El mensaje que se llevan del módulo:**
> *"Una app profesional **NO es la que no falla** — es la que **SABE qué hacer cuando falla**. Esa diferencia —entre código frágil y código robusto— es lo que separa un proyecto de portafolio de un proyecto profesional. Y es exactamente lo que la rúbrica del lab calificado evalúa hoy."*

> **Conexiones a futuro:**
> - *"**_try/catch/finally_** vuelve en TODO módulo de acá en adelante — cualquier código que toque red, base de datos, archivos, parsing — va a usarlo."*
> - *"**Los 4 estados de UI** son la base de cualquier framework moderno (React, Vue, Svelte). En el M4 vamos a profundizar este patrón con state management — ahí van a ver los mismos cargando/éxito/error/vacío manejados de forma declarativa."*
> - *"**Markdown / README** se exige en TODOS los labs del M4 y M5. Hoy fue la primera vez; a partir de mañana es el default — todos los proyectos llevan portada."*

---

#### 6.4 Apertura del test diagnóstico del M3

**EN PANTALLA: SIN PANEL — el instructor habla a cámara/al aula. Solo se ve la app de la Pokédex terminada al fondo en una pestaña del navegador.**

> **Tu apertura:**
> *"Antes de cerrar, dos minutos para anunciar lo que sigue después de este guion: el **test diagnóstico del Módulo 3**."*

> **Tu explicación — qué es y qué NO es:**
> - *"Es un **test diagnóstico**, no calificado. **No suma ni resta** a la nota del lab calificado de hoy. Sirve para que YO sepa dónde está cada uno parado al cierre del módulo, y para que VOS sepas qué temas necesitás reforzar antes del M4."*
> - *"**Cubre las 4 clases del M3**: C09 (JS moderno), C10 (fetch + promesas), C11 (async/await + búsqueda), C12 (errores + estados). No es solo lo de hoy."*
> - *"**Duración:** 20 minutos. Preguntas de opción múltiple + uno o dos casos de código corto para leer e identificar qué hace."*

> **Tu nota — qué hacer con el resultado:**
> *"Cuando termines, vas a poder ver inmediatamente qué acertaste y qué no. Los temas donde fallés — anotalos. **No los repases recién en el M5 cuando empiece el test del cierre del bootcamp**. Repasalos ahora, mientras el contexto está fresco."*

> **Tu cierre del día — la frase final del guion:**
> *"Eso es todo lo del Módulo 3. La Pokédex que arrancaron como un array en duro hace 4 clases hoy es una app web robusta, deployada, documentada, que sobrevive sin red y le habla al usuario en todo momento. **Felicitaciones — cerraron el módulo más denso del curso.** Cuando estén listos, abran el test."*

---

- **Excalidraw:** los bloques `**EN PANTALLA: EXCALIDRAW**` se definen en la `GUIA EXCALIDRAW - CLASE 12.md` al cerrar la Capa 2+3. Paneles candidatos identificados desde Capa 0: M1 — tabla de los 4 tipos nativos de JS (SyntaxError, ReferenceError, TypeError, errores de red) + objeto Error con sus 3 propiedades · M2 — diagrama de flujo `try/catch/finally` con sus 3 fases · M3 — semáforo de familias HTTP (2xx/4xx/5xx con foco 404) + anatomía de `response.ok` con el checkpoint entre `fetch` y `.json()` + propagación en la pila de llamadas (dos pilas verticales: con y sin try/catch — caso concreto del lab con throw en obtenerPokemon y catch en mostrarBusqueda) · M4 — línea del tiempo de búsqueda con vs sin `finally` · M5 — los 4 estados de UI como 4 mockups + el "antes vs después" del refactor HU2/HU4 · M6 — README renderizado vs `.md` plano lado a lado.
- **Apuntes incorporados:** tabla de tipos de error nativos de JS (M1) · objeto _Error_ con propiedades name/message/stack (M1) · `try/catch/finally` con tabla de las 3 fases y flujo interno (M2) · códigos HTTP por familia (M3) · `response.ok` como checkpoint (M3) · errores personalizados con `throw new Error(...)` (M3) · propagación de errores en la pila de llamadas (M3 — entre `throw` y HU2, donde se aplica) · taxonomía de los 4 estados de UI (M5). Los apuntes traen también la idea de **clase ErrorPersonalizado extends Error** —no se usa en el lab, solo se menciona como "mundo más allá" en M3 si hay tiempo del colchón.
- **Reuso de C11:** **_obtenerPokemon_** (se modifica en HU2 y HU4) · **_buscarPokemon_** (se modifica en HU4 para propagar null) · **_mostrarBusqueda_** (se envuelve con try/catch en HU1, se ajusta en HU2/HU3/HU4) · **_mostrarResultado_** (intacta — viene de C11 con botón Capturar y stats) · **_capturar_** (intacta) · **_cargarPokedex_** (se envuelve en try/catch/finally en HU3) · **_cargarMas_** (NO se toca hoy — fuera de scope del lab) · **_adaptarPokemon_** (intacta — el `data.types` que rompía con 404 ya no se ejecuta porque `obtenerPokemon` corta antes) · **_render_** / **_crearTarjeta_** (intactas desde C09).
- **Arco del módulo:** C09 (render local) → C10 (fetch/promesas) → C11 (async/await + buscar/capturar/paginar) → **C12 (errores + estados + README, lab calificado)** → FIN DEL M3 → C13 abre M4.
- **Lab calificado — rúbrica 5×20 = 100:** (1) HUs implementadas · (2) calidad técnica (async + fetch + manejo de errores) · (3) presentación en vivo (5 min, muestra los 3 estados: éxito + no encontrado + error) · (4) argumentación técnica (justifica `response.ok`, `finally`, flujo async) · (5) desafío (explica fragmento + deploy + README en Markdown). Escala A/B/C/F. El test diagnóstico del M3 es independiente del lab calificado y se administra después del cierre de M6.
- **Cosas que NO se cubren hoy:** la clase `ErrorPersonalizado extends Error` (mención en M3 como "mundo más allá", no se practica) · `try/catch` anidados (no aparece en el lab) · errores asíncronos en `Promise.all` (queda como tema fino post-curso) · pruebas automatizadas (no es el alcance del curso).
