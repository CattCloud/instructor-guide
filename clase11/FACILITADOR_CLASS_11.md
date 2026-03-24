# Guía del Facilitador - Clase 11: Funciones: Los Bloques de Construcción

> Tiempo de lectura: 10 minutos | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Función:** Bloque de código reutilizable con nombre. Recibe datos (parámetros), ejecuta lógica, y opcionalmente devuelve un resultado (`return`).
- **DOM (Document Object Model):** Representación del HTML como un árbol de objetos. JavaScript puede leer y modificar cualquier elemento de la página a través del DOM.
- **getElementById():** Método que busca un elemento por su `id`. Devuelve el elemento como objeto o `null` si no existe.
- **textContent/style:** Propiedades para cambiar el texto visible y los estilos CSS de un elemento desde JavaScript.
- **addEventListener():** Conecta un evento del usuario (click, keypress) con una función. Es el patrón estándar para manejar interactividad.
- **Refactorización:** Tomar código existente y reorganizarlo para que sea más claro, mantenible y reutilizable, sin cambiar su comportamiento externo.

---

## 🔗 Analogías Útiles

**Función <> Máquina de café:**
Una máquina de café es una función: le metes datos (agua, café, tipo de bebida) y te devuelve un resultado (tu café). No necesitas saber cómo funciona por dentro—solo qué le das y qué te devuelve. `mostrarMensaje('¡Hola!', 'verde')` es como presionar el botón de "latte" en la máquina.

**DOM <> Control remoto de la TV:**
El DOM es como un control remoto que te permite cambiar lo que se ve en la pantalla (la página web). `getElementById()` es presionar el botón del canal que quieres. `textContent` es cambiar el subtítulo. `style.color` es ajustar el brillo o contraste.

**addEventListener <> Timbre de la puerta:**
Un `addEventListener('click', función)` es como instalar un timbre: no haces nada hasta que alguien lo presiona. Cuando el usuario hace clic (presiona el timbre), la función se ejecuta (tú abres la puerta). Sin el timbre, nadie puede avisarte que llegó.

**Refactorización <> Reorganizar tu closet:**
Tienes la misma ropa (el código funciona igual), pero ahora está organizada: camisas juntas, pantalones juntos, cada cosa en su lugar. No compraste ropa nueva—solo la organizaste mejor. Eso es refactorizar.

---

## 📚 Contexto Histórico

### Funciones: De las matemáticas al código

El concepto de función viene de las matemáticas: f(x) = x² significa que si le das 3, devuelve 9. **Gottfried Leibniz** formalizó la notación de funciones en el siglo XVII, pero fue **Alonzo Church** quien en 1936 creó el **cálculo lambda**—una teoría matemática donde TODO es una función. Esta teoría es la base teórica de la programación funcional.

En los primeros lenguajes de programación (FORTRAN, 1957), las funciones se llamaban "subrutinas" y su propósito principal era evitar duplicar código. Si necesitabas hacer el mismo cálculo en 20 lugares, escribías una subrutina y la llamabas 20 veces. JavaScript heredó este concepto, pero las funciones en JS son especialmente poderosas porque son "ciudadanos de primera clase"—puedes pasarlas como argumentos, guardarlas en variables, y devolverlas desde otras funciones.

> **Para contar en clase:** "Las funciones son una idea de hace 300 años. Leibniz las inventó en matemáticas, los primeros programadores las adoptaron en los años 50, y hoy son la base de TODO el software que usas. Cuando defines `function verificarIntento()`, estás usando una de las ideas más importantes de la historia de la computación."

### El DOM: Cómo JavaScript conquistó el navegador

Cuando JavaScript nació en 1995, podía hacer muy poco con la página web. Podías cambiar algunos valores y poco más. El **DOM (Document Object Model)** fue estandarizado por el W3C en 1998 como una interfaz común para que los lenguajes de programación pudieran manipular documentos HTML y XML.

El verdadero cambio llegó en 2005 con **AJAX** (Asynchronous JavaScript and XML), que permitió actualizar partes de la página sin recargarla. Google Maps fue una de las primeras aplicaciones en demostrar el poder de esta técnica, y cambió la percepción de lo que era posible en un navegador. Hoy, frameworks como React, Vue y Angular se basan enteramente en la manipulación del DOM.

> **Para contar en clase:** "Cuando usan `getElementById` y cambian `textContent`, están usando una tecnología que tiene más de 25 años y que sigue siendo la base de toda la web moderna. React, Vue, Angular—todos hacen lo mismo que ustedes hoy, solo que a mayor escala."

**Fuentes:** [W3C DOM Specification](https://www.w3.org/DOM/){:target="_blank"}, [Wikipedia - Lambda Calculus](https://en.wikipedia.org/wiki/Lambda_calculus){:target="_blank"}

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "La Función Humana"

Actividad kinestésica para entender funciones antes de programar.

**Dinámica sugerida:**
```
Facilitador: "Necesito un voluntario. Tú vas a ser la función 'saludar'."
Facilitador: "Cuando yo te diga un nombre, tú dices 'Hola, [nombre]!'"
Facilitador: "saludar('Ana')"
Voluntario: "¡Hola, Ana!"
Facilitador: "saludar('Carlos')"
Voluntario: "¡Hola, Carlos!"
Facilitador: "Perfecto. Ana y Carlos son los PARÁMETROS. El saludo es el RETURN."
Facilitador: "Ahora necesito otra función: 'esMayorDeEdad'. Recibe una edad y devuelve true o false."
(Otro voluntario)
Facilitador: "esMayorDeEdad(15)"
Voluntario: "False"
Facilitador: "esMayorDeEdad(21)"
Voluntario: "True"
```

> Esta dinámica hace tangible el concepto abstracto de función. Los parámetros son lo que les dices, el return es lo que responden.

### Dinámica 2: "Antes y Después"

Mostrar la transformación del juego de prompt/alert a DOM.

**Dinámica sugerida:**
```
Facilitador: (Abre la versión con prompt/alert de la clase 10)
Facilitador: "Este es su juego actual. Funciona, pero..."
Facilitador: (Hace clic, aparece prompt, escribe, aparece alert)
Facilitador: "¿Se ven estas ventanas emergentes en apps profesionales?"
(Grupo: "No")
Facilitador: (Abre la versión DOM terminada)
Facilitador: "Este es el mismo juego después de hoy."
Facilitador: (Muestra la tarjeta flotante, hace clic en el input y muestra el glow)
Facilitador: (Pasa el mouse sobre el botón y muestra cómo sube)
Facilitador: (Hace clic, mensaje aparece con colores, historial se actualiza)
Facilitador: (Adivina el número, la tarjeta brilla verde)
Facilitador: "¿Alguien sacaría el celular para mostrarle esto a un amigo?"
Facilitador: "Mismo código, misma lógica. Solo reorganizado, conectado al DOM, y con CSS que hace el 90% del trabajo visual."
Facilitador: "Eso es refactorizar."
```

> Este "antes/después" visual es muy motivador. Los estudiantes ven a dónde van ANTES de empezar.

### Dinámica 3: "getElementById en Vivo"

Demo interactiva del DOM en la consola.

**Dinámica sugerida:**
```
Facilitador: (Abre la página del juego, abre DevTools)
Facilitador: (En la consola) "document.getElementById('mensaje')"
(Muestra el elemento)
Facilitador: "document.getElementById('mensaje').textContent = 'Cambiado desde la consola!'"
(El texto cambia en la página)
Facilitador: "document.getElementById('mensaje').style.color = 'red'"
(El color cambia)
Facilitador: "document.getElementById('mensaje').style.fontSize = '40px'"
(El tamaño cambia)
Facilitador: "JavaScript controla TODO lo que ven en la página. ESTO es el poder del DOM."
```

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: Función Básica con Return

**Cuándo usarlo:** Demo antes de la Parte 1, para explicar funciones.

```js
// Función que calcula el doble
function doble(numero) {
  return numero * 2;
}

console.log(doble(5));   // 10
console.log(doble(15));  // 30

// Sin return
function saludar(nombre) {
  console.log('Hola, ' + nombre);
  // no tiene return
}

let resultado = saludar('Ana');
console.log(resultado); // undefined (no hay return)
```

**Tip de facilitación:** Enfatiza la diferencia entre funciones que HACEN algo (saludar) y funciones que DEVUELVEN algo (doble). `mostrarMensaje` hace algo, `obtenerPista` devuelve algo.

### Ejemplo 2: getElementById y textContent

**Cuándo usarlo:** Demo en vivo antes de la Parte 1.

```js
// Si tenemos en HTML: <p id="demo">Texto original</p>
const elemento = document.getElementById('demo');

// Leer
console.log(elemento.textContent); // "Texto original"

// Escribir
elemento.textContent = '¡Cambié el texto!';

// Estilizar
elemento.style.color = 'blue';
elemento.style.backgroundColor = 'yellow';
```

**Tip de facilitación:** Haz esto en vivo en la consola de la página del juego. Que vean el cambio instantáneo en la página es el momento "wow" de la clase.

### Ejemplo 3: addEventListener

**Cuándo usarlo:** Demo antes de la Parte 2.

```js
const boton = document.getElementById('btnAdivinar');

// Forma 1: función con nombre
function alHacerClic() {
  console.log('¡Clic detectado!');
}
boton.addEventListener('click', alHacerClic);

// Forma 2: función anónima (inline)
boton.addEventListener('click', function() {
  console.log('¡También detectado!');
});
```

**Tip de facilitación:** Muestra ambas formas pero recomienda la forma con nombre para principiantes. Es más fácil de depurar y entender.

---

## ⚠️ Errores Comunes

| Señal | Qué está pasando | Qué hacer |
|-------|------------------|-----------|
| `null` al usar getElementById | El `id` en JS no coincide con el `id` en HTML, o el script carga antes que el HTML | Verificar nombres exactos. Asegurar `<script>` al final del body |
| `verificar()` en addEventListener | Ejecuta la función inmediatamente en lugar de esperar el click | Quitar paréntesis: `addEventListener('click', verificar)` |
| `textContent` no cambia nada | Seleccionaron el elemento equivocado o el id no existe | Verificar con `console.log(elemento)` que no sea `null` |
| Variables no accesibles dentro de función | Problema de scope: variable declarada dentro de otra función | Declarar variables del juego FUERA de las funciones (scope global) |
| El input no se limpia después del intento | Olvidaron `inputIntento.value = ''` | Agregar al final de `verificarIntento()` |
| El botón reiniciar no aparece | `style.display` no se está cambiando | Verificar `btnReiniciar.style.display = 'inline-block'` |

### Troubleshooting Rápido

**Si `getElementById` devuelve `null`:**
1. Abrir el HTML y verificar que el `id` existe y está bien escrito
2. Verificar que el `<script>` está DESPUÉS de los elementos (antes de `</body>`)
3. Los `id` son case-sensitive: `btnAdivinar` ≠ `btnadivinar`

**Si el juego no responde al click:**
1. Abrir consola y verificar que no hay errores
2. Verificar que `addEventListener` está escrito correctamente
3. Verificar que la función existe y no tiene errores de sintaxis

---

## 🎯 Checkpoints de Validación

| Minuto | Checkpoint | Cómo validar |
|--------|------------|--------------|
| 0-15 | Intro + Transición C10→C11 + "Función Humana" | Grupo entiende qué es una función y por qué la necesitan |
| 15-45 | Interfaz HTML + tarjeta flotante + getElementById | Tarjeta centrada, input brilla en focus, botón sube en hover, consola confirma elementos no-null |
| 45-80 | verificarIntento + addEventListener + celebración | Click en botón muestra mensajes con colores. Al ganar, tarjeta brilla verde (momento "wow") |
| 80-105 | Reinicio + historial + juego completo | Flujo completo funciona, reiniciar resetea celebración y genera nuevo juego |
| 105-130 | Logros adicionales + prueba en celular + commits | Pista de cercanía, responsive en DevTools, commits descriptivos |
| 130-150 | Cierre + preview Demo Day + reflexión | Juego completo y presentable, estudiantes saben qué preparar para clase 12 |

---

## 🚨 Plan de Contingencia

### Si getElementById confunde al grupo:

**Solución:** Usar la analogía del control remoto.
1. "El HTML es la TV. JavaScript es el control remoto."
2. "getElementById es el botón del canal—selecciona QUÉ quieres controlar."
3. "textContent es el volumen—cambia lo que ves/escuchas."
4. Demostrar en la consola del navegador en vivo.

### Si las funciones confunden:

Priorizar entendimiento sobre completitud:
1. **Mínimo:** Una función `verificarIntento()` que haga todo
2. **Ideal:** `verificarIntento()` + `mostrarMensaje()` + `reiniciarJuego()`
3. **Completo:** + `obtenerPista()` con return

### Si el lab avanza más lento de lo esperado:

Priorizar en este orden:
1. **Mínimo:** HTML + getElementById + verificarIntento con click → mensajes en página
2. **Ideal:** + reiniciarJuego() + historial + colores
3. **Completo:** + obtenerPista() con return + pista de cercanía

> Si no se completa todo, los estudiantes pueden terminar en casa. Lo importante es que entiendan funciones + DOM + eventos.

---

## 🔗 Conexión con el Resto del Módulo

### Clase 10 (anterior): Decisiones y Lógica Condicional
La lógica de if/else, validación y Math.random() se REUTILIZA en la Clase 11. La diferencia es que ahora esa lógica vive dentro de funciones y se conecta al DOM en lugar de usar prompt/alert.

### Clase 12 (siguiente): Demo Day
El juego debe estar COMPLETO después de hoy. La Clase 12 es para test diagnóstico y presentaciones. Si un estudiante no termina, tiene tiempo antes de la Clase 12 para completar.

### Preparar para Demo Day:
Al cerrar la clase, informar claramente:
- "Su juego debe funcionar para la próxima clase"
- "Preparen una presentación de 3 minutos"
- "Deben poder explicar qué hace cada función de su código"

---

## 💬 Frases para Usar

**Al inicio:**
> "Hoy es el día de la transformación. Van a tomar su juego de ventanas emergentes y convertirlo en una aplicación web real con interfaz visual. El código es el mismo—solo lo van a organizar mejor."

**Cuando ven el DOM en acción por primera vez:**
> "¿Vieron eso? Escribieron una línea de JavaScript y la página cambió. Eso es el poder del DOM. Cada app que usan—Instagram, WhatsApp, Google—funciona así. JavaScript cambiando lo que ven en pantalla."

**Cuando la tarjeta brilla verde al ganar (el "wow moment"):**
> "Miren eso. Dos líneas de JavaScript: `style.borderColor` y `style.boxShadow`. Y la tarjeta se transformó. Esas mismas dos propiedades son las que usan las apps profesionales para dar feedback visual. Y el CSS hizo el 90% del trabajo—la `transition` que ya estaba en el template es lo que hace la animación suave."

**Cuando alguien se frustra con null:**
> "Si getElementById devuelve null, hay tres cosas que revisar: ¿el id existe en el HTML? ¿está bien escrito? ¿el script carga después del HTML? Siempre son una de las tres."

**Al cerrar:**
> "Miren su pantalla. Tienen un juego con tarjeta flotante, micro-interacciones, celebración de victoria y que se ve perfecto en el celular. Hace tres clases no sabían qué era una variable. ¿Alguien le quiere mostrar esto a alguien? Eso es lo que lograron. La próxima clase lo presentan al mundo."
