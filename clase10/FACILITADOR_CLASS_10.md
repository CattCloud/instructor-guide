# Guía del Facilitador - Clase 10: Decisiones y Lógica Condicional

> Tiempo de lectura: 10 minutos | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Condicional (if/else):** Estructura que ejecuta código diferente según una condición. Es la base del "pensamiento" de un programa.
- **Operadores de comparación:** `===` (igual estricto), `!==`, `>`, `<`, `>=`, `<=`. Siempre devuelven `true` o `false`.
- **Operadores lógicos:** `&&` (AND), `||` (OR), `!` (NOT). Combinan múltiples condiciones en una expresión.
- **Math.random():** Genera un número aleatorio entre 0 (inclusive) y 1 (exclusive). Combinado con `Math.floor()` y aritmética, produce enteros en cualquier rango.
- **isNaN():** Verifica si un valor no es un número. Fundamental para validar entrada de `prompt()`.

---

## 🔗 Analogías Útiles

**if/else <> Semáforo:**
Un semáforo toma una decisión basada en condiciones. Si está en verde, avanza. Si está en amarillo, precaución. Si está en rojo, detente. Un `if/else if/else` funciona igual: evalúa condiciones en orden y ejecuta la primera que sea verdadera.

**Operadores lógicos <> Filtros de búsqueda:**
Cuando buscas en una tienda online "precio < $50 Y marca = Nike", estás usando `&&`. Cuando buscas "envío gratis O descuento > 20%", estás usando `||`. Los operadores lógicos son los filtros del código.

**Validación <> Portero de discoteca:**
Un portero verifica condiciones antes de dejarte entrar: ¿tienes ID? ¿eres mayor de edad? ¿estás en la lista? Si alguna condición falla, no entras. La validación en código hace lo mismo: verifica antes de proceder.

**Math.random() <> Dado digital:**
`Math.random()` es como lanzar un dado con infinitas caras (entre 0 y 1). Para convertirlo en un dado de 6 caras: `Math.floor(Math.random() * 6) + 1`. Para un número del 1 al 100: `Math.floor(Math.random() * 100) + 1`.

---

## 📚 Contexto Histórico

### El flujo de control: El gran salto de la computación

En los años 1940, las primeras computadoras ejecutaban instrucciones en secuencia lineal—una tras otra, sin desviarse. El concepto de **salto condicional** (branch) fue introducido por **John von Neumann** en su arquitectura de 1945, y cambió todo. De repente, una máquina podía "decidir" qué hacer según los datos que procesaba.

El primer lenguaje en popularizar `if/else` como lo conocemos fue **ALGOL 60** (1960), creado por un comité internacional de científicos. Su sintaxis influyó directamente en C (1972), que a su vez influyó en Java, JavaScript, y prácticamente todos los lenguajes modernos. Cuando escribes `if (condición) { ... } else { ... }`, estás usando una estructura con más de 60 años de historia.

> **Para contar en clase:** "La capacidad de tomar decisiones es lo que separa a una calculadora de una computadora. Una calculadora solo sigue pasos. Una computadora puede elegir qué paso dar. Hoy van a enseñarle a su programa a elegir."

### Números aleatorios: Más difíciles de lo que parecen

Generar números verdaderamente aleatorios es uno de los problemas más difíciles en computación. Las computadoras son máquinas **deterministas**—siguen instrucciones exactas. Entonces, ¿cómo generan "aleatoriedad"? Usan algoritmos llamados **generadores pseudoaleatorios** que producen secuencias que parecen aleatorias pero son completamente predecibles si conoces la "semilla" (seed).

`Math.random()` en JavaScript usa uno de estos algoritmos internamente. Para juegos y aplicaciones normales es perfecto. Pero para criptografía (contraseñas, encriptación), se necesitan generadores mucho más sofisticados que usan datos del hardware (movimiento del mouse, timing del teclado) como fuente de aleatoriedad real.

> **Para contar en clase:** "Math.random() no es realmente aleatorio—es pseudoaleatorio. Para un juego es perfecto, pero nunca lo usarías para generar contraseñas o claves de encriptación."

**Fuentes:** [Wikipedia - ALGOL 60](https://en.wikipedia.org/wiki/ALGOL_60){:target="_blank"}, [MDN - Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random){:target="_blank"}

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "Si llueve..."

Actividad de apertura para conectar con las preguntas de reflexión pre-clase.

**Dinámica sugerida:**
```
Facilitador: "Levanten la mano quienes tomaron una decisión esta mañana basada en alguna condición."
(Todos levantan la mano, aunque algunos no se den cuenta)
Facilitador: "¿Alguien decidió qué ponerse basado en el clima?"
Facilitador: "Si hace frío → chaqueta. Si hace calor → camiseta. Si llueve → paraguas."
Facilitador: "Eso es EXACTAMENTE un if/else if/else:"

if (haceFrío) {
  ponerse('chaqueta');
} else if (llueve) {
  llevar('paraguas');
} else {
  ponerse('camiseta');
}

Facilitador: "Las computadoras toman decisiones de la misma forma, pero necesitan que les digamos EXACTAMENTE cuáles son las condiciones."
```

### Dinámica 2: "Adivina mi Número" (en vivo)

Antes de empezar el lab, juega una ronda en vivo con el grupo.

**Dinámica sugerida:**
```
Facilitador: "Pensé un número del 1 al 100. Adivínenlo."
(Alguien dice "50")
Facilitador: "Muy alto."
(Alguien dice "25")
Facilitador: "Muy bajo."
(Alguien dice "37")
Facilitador: "¡Correcto!"
Facilitador: "¿Notaron la estrategia? Empezar por la mitad y dividir. Eso se llama BÚSQUEDA BINARIA."
Facilitador: "Ahora vamos a programar exactamente este juego."
```

> Esta dinámica tiene un efecto poderoso: los estudiantes entienden la mecánica del juego ANTES de programarlo.

### Dinámica 3: "=== vs == en la vida real"

Después de explicar operadores de comparación.

**Dinámica sugerida:**
```
Facilitador: "¿'5' es igual a 5?"
(Debate en el grupo)
Facilitador: "Depende de qué tan estricto seas."
Facilitador: "== es como preguntar '¿son parecidos?' → '5' == 5 es true"
Facilitador: "=== es como preguntar '¿son EXACTAMENTE iguales?' → '5' === 5 es false"
Facilitador: "En código, siempre queremos ser exactos. Usa ===."
Facilitador: (Escribe en consola) "Miren esto: '' == false → true. ¿Les parece lógico?"
Facilitador: "Por eso == es peligroso. === nunca miente."
```

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: Math.random() Paso a Paso

**Cuándo usarlo:** Demo en vivo antes de la Parte 1 del lab.

```js
// Ejecuta cada línea por separado en la consola
Math.random()                    // 0.7342... (diferente cada vez)
Math.random() * 100              // 73.42...
Math.floor(Math.random() * 100)  // 73
Math.floor(Math.random() * 100) + 1  // 74 (rango 1-100)
```

**Tip de facilitación:** Ejecuta `Math.random()` varias veces para que vean que cambia. Luego construye la fórmula paso a paso, mostrando el resultado de cada operación.

### Ejemplo 2: if/else if/else con el Juego

**Cuándo usarlo:** Demo antes de la Parte 2.

```js
const secreto = 42;
let intento = Number(prompt('¿Cuál es el número?'));

if (intento === secreto) {
  console.log('🎉 ¡Correcto!');
} else if (intento > secreto) {
  console.log('📈 Muy alto');
} else {
  console.log('📉 Muy bajo');
}
```

**Tip de facilitación:** Muestra el número secreto en la consola primero. Luego haz que el grupo te diga qué número ingresar para probar cada rama del `if`. Esto refuerza que las condiciones se evalúan en orden.

### Ejemplo 3: Validación Progresiva

**Cuándo usarlo:** Demo antes de la Parte 3.

```js
let entrada = prompt('Dame un número:');
let numero = Number(entrada);

console.log('Entrada original:', entrada);
console.log('Convertida:', numero);
console.log('¿Es NaN?', isNaN(numero));
```

**Tip de facilitación:** Prueba con "hola" (da NaN), "42" (da 42), "" (da 0), y " " (da 0). La cadena vacía y el espacio son casos curiosos que generan buena discusión.

### Ejemplo 4: Ternario en Contexto

**Cuándo usarlo:** Al final de la Parte 3.

```js
let edad = 17;

// Forma larga
let acceso;
if (edad >= 18) {
  acceso = 'Permitido';
} else {
  acceso = 'Denegado';
}

// Forma corta (ternario)
let acceso2 = edad >= 18 ? 'Permitido' : 'Denegado';

console.log(acceso2); // "Denegado"
```

**Tip de facilitación:** Muestra ambas formas y pregunta cuál prefieren. El ternario es útil para asignaciones simples, pero `if/else` es mejor para lógica compleja.

---

## ⚠️ Errores Comunes

| Señal | Qué está pasando | Qué hacer |
|-------|------------------|-----------|
| `=` en lugar de `===` dentro del if | Asignación en vez de comparación. `if (x = 5)` siempre es true | Explicar: `=` asigna, `===` compara. Truco: "Si pregunto, tres signos" |
| `prompt()` devuelve string, comparación falla | Olvidaron `Number()` antes de comparar | Recordar: `Number(prompt(...))` o `parseInt(prompt(...))` |
| `else if` sin espacio → `elseif` | Error de sintaxis | Son DOS palabras: `else if` (con espacio) |
| Llaves mal cerradas `{ }` | El bloque de código no termina donde debería | Usar indentación consistente. VS Code ayuda con el resaltado de llaves |
| `isNaN('5')` devuelve `false` | `isNaN()` convierte antes de evaluar. `'5'` se convierte a `5`, que sí es número | Explicar que `isNaN()` intenta convertir primero |
| Rango incorrecto en Math.random() | Fórmula mal aplicada. Ej: `Math.random() * 100` da 0-99, no 1-100 | Revisar paso a paso: `* rango` → `Math.floor()` → `+ mínimo` |

### Troubleshooting Rápido

**Si el número secreto siempre parece el mismo:**
- Verificar que recargan la página (no solo guardan el archivo). Live Server debería recargar automáticamente.

**Si las comparaciones no funcionan:**
- Verificar con `typeof intento` que sea `number`, no `string`
- Agregar `console.log(intento, typeof intento)` antes del `if`

---

## 🎯 Checkpoints de Validación

| Minuto | Checkpoint | Cómo validar |
|--------|------------|--------------|
| 0-15 | Intro + Transición C09→C10 + "Si llueve..." | Quiz pre-lab respondido, grupo conectado con el tema |
| 15-40 | Número secreto generado | Consola muestra número diferente cada recarga |
| 40-75 | Pistas alto/bajo/correcto | Tres ramas del if/else if/else probadas |
| 75-110 | Validación y ternario | isNaN() rechaza texto, rango funciona, ternario usado |
| 110-130 | Logros adicionales + commit final | Al menos 3 commits, código validando entrada |
| 130-150 | Cierre + reflexión + preview Clase 11 | Preguntas de cierre respondidas |

---

## 🚨 Plan de Contingencia

### Si Math.random() confunde al grupo:

**Solución:** Dibujar la "tubería" en el pizarrón:
1. Dibuja un grifo que gotea decimales: `0.xxxxx`
2. Dibuja un multiplicador: `× 100`
3. Dibuja una tijera que corta decimales: `Math.floor()`
4. Dibuja un sumador: `+ 1`
5. Resultado: número entero del 1 al 100

### Si muchos no entienden la diferencia entre = y ===:

**Solución:** Analogía directa:
- `=` es como decir "tú eres Pedro" (le pones un nombre)
- `===` es como preguntar "¿eres Pedro?" (verificas si es verdad)
- Regla mnemotécnica: "Si pregunto, tres signos"

### Si el lab avanza más lento de lo esperado:

Priorizar en este orden:
1. **Mínimo:** Math.random() + if/else básico (Correcto/Incorrecto)
2. **Ideal:** Pistas alto/bajo + validación básica
3. **Completo:** Validación completa + ternario + segundo intento

---

## 🔗 Conexión con el Resto del Módulo

### Clase 09 (anterior): Fundamentos de JavaScript
Los estudiantes ya manejan variables, tipos de datos, prompt/alert y console.log. La Clase 10 CONSTRUYE sobre eso agregando la capacidad de comparar valores y tomar decisiones.

### Clase 11 (siguiente): Funciones
La repetición de código que los estudiantes notan hoy (copiar/pegar el if/else para cada intento) es intencional. En la Clase 11, aprenderán funciones para resolver exactamente ese problema. Si alguien pregunta "¿no hay forma de no repetir?", responde: "¡Excelente pregunta! Eso es exactamente lo que veremos la próxima clase."

### Clase 12: Demo Day
La lógica condicional de hoy es el corazón del juego. Sin if/else, el juego no puede dar pistas ni detectar el acierto.

---

## 💬 Frases para Usar

**Al inicio:**
> "La clase pasada tu programa aprendió a hablar con prompt y alert. Hoy le vamos a enseñar a PENSAR. Después de hoy, tu programa podrá decir '¡Correcto!' o 'Intenta de nuevo' dependiendo de lo que escriba el jugador."

**Cuando descubren === vs ==:**
> "En JavaScript hay una regla de oro: siempre usa triple igual. Doble igual es como un amigo que te dice lo que quieres escuchar. Triple igual te dice la verdad."

**Cuando el código se empieza a repetir:**
> "¿Notaron que estamos copiando y pegando el mismo if/else para cada intento? Eso se siente mal, ¿verdad? En programación hay un principio: DRY—Don't Repeat Yourself. La próxima clase aprenderemos la herramienta que resuelve esto: funciones."

**Al cerrar:**
> "Hoy su programa tomó sus primeras decisiones. Puede comparar, validar y responder de forma inteligente. La próxima clase va a dar un salto visual enorme: de ventanas emergentes a una interfaz real con botones y colores."
