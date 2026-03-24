> 📦 **Módulo 3:** Clase 2 de 4

# Clase 10: Decisiones y Lógica Condicional

## Resumen

En la clase anterior aprendiste a guardar datos en variables y a interactuar con el usuario usando `prompt()` y `alert()`. Pero tu programa todavía no puede **tomar decisiones**. Hoy eso cambia.

En esta clase descubrirás cómo hacer que tu código elija entre diferentes caminos según las condiciones que se cumplan. Aprenderás a comparar valores, combinar condiciones, y a generar números aleatorios. Tu juego "Adivina el Número" empezará a cobrar vida: generará un número secreto, comparará el intento del jugador, y dará pistas de "muy alto" o "muy bajo".

**Proyecto del Módulo:** Adivina el Número - Juego Interactivo

---

## ¿Por qué te sirve?

- **Toda aplicación toma decisiones.** Cuando Netflix te recomienda una serie, cuando Google Maps elige una ruta, cuando un formulario te dice "contraseña incorrecta"—todo eso son condicionales. Es la estructura más usada en programación.

- **La lógica booleana está en todas partes.** No solo en código: filtros de búsqueda ("precio > $50 Y categoría = zapatos"), reglas de negocio ("si el cliente es premium, dar descuento"), decisiones cotidianas ("si llueve Y no tengo paraguas, tomar taxi").

- **Validar entrada del usuario es una habilidad profesional.** Los usuarios escriben cualquier cosa. Un buen programa no se rompe—verifica, corrige y responde con mensajes claros.

---

## 🎯 ¿Qué haremos en clase?

1. **Generaremos un número aleatorio** - Usarás `Math.random()` y `Math.floor()` para crear el número secreto que el jugador debe adivinar.

2. **Compararemos valores con operadores** - Aprenderás a usar `===`, `!==`, `>`, `<`, `>=`, `<=` para que tu programa sepa si un número es mayor, menor o igual.

3. **Crearemos caminos con if/else** - Tu programa decidirá si mostrar "¡Correcto!", "Muy alto" o "Muy bajo" según el intento del jugador.

4. **Validaremos la entrada del usuario** - Usarás `isNaN()` y operadores lógicos para rechazar datos inválidos antes de compararlos.

---

## Objetivos de Aprendizaje

Al finalizar esta clase, podrás:

1. **Generar** números aleatorios dentro de un rango específico usando `Math.random()` y `Math.floor()`
2. **Comparar** valores utilizando operadores de comparación (`===`, `!==`, `>`, `<`, `>=`, `<=`)
3. **Implementar** estructuras `if`, `else if` y `else` para crear flujos de decisión
4. **Combinar** condiciones con operadores lógicos (`&&`, `||`, `!`)
5. **Validar** entrada del usuario usando `isNaN()` y `Number()` para prevenir errores

---

## ✅ Preparación para la Clase

### Herramientas

- [ ] **VS Code** con Live Server
- [ ] **Google Chrome** con DevTools (F12)
- [ ] **Repositorio `guess-number-js`** con el código de la Clase 09

### Tu Proyecto Hasta Ahora

Verifica que tienes del lab anterior:

- [ ] Repositorio `guess-number-js` en GitHub
- [ ] `index.html` y `script.js` enlazados
- [ ] Variables declaradas con `let` y `const`
- [ ] `prompt()` y `alert()` funcionando
- [ ] Al menos 3 commits en el repositorio

### Reflexión Pre-Clase

Antes de llegar a clase, piensa en estas situaciones:

1. Tu celular tiene 5% de batería. ¿Qué decisión tomas? ¿Cambia si estás en casa vs en la calle?
2. Vas al supermercado y hay dos marcas de café. ¿Qué criterios usas para elegir? ¿Precio? ¿Marca? ¿Los dos?
3. Si una app te pide tu edad y escribes "veinticinco" en lugar de `25`, ¿qué debería hacer la app?
4. ¿Cómo le explicarías a una computadora las reglas del juego "Adivina el Número"?

> 💡 Estas preguntas conectan con cómo los programas toman decisiones y validan información.

---

## Glosario

| Término | Definición |
|---------|------------|
| **Condicional** | Estructura que ejecuta código diferente según si una condición es verdadera o falsa |
| **if/else** | Sentencia que evalúa una condición: si es `true` ejecuta un bloque, si es `false` ejecuta otro |
| **else if** | Permite evaluar múltiples condiciones en secuencia antes del `else` final |
| **Operador de comparación** | Compara dos valores y devuelve `true` o `false`: `===`, `!==`, `>`, `<`, `>=`, `<=` |
| **Operador lógico** | Combina condiciones: `&&` (ambas verdaderas), `||` (al menos una verdadera), `!` (invierte) |
| **Operador ternario** | Forma corta de if/else: `condición ? valorSiTrue : valorSiFalse` |
| **Math.random()** | Función que genera un número aleatorio entre 0 (inclusive) y 1 (exclusive) |
| **Math.floor()** | Función que redondea un número hacia abajo al entero más cercano |
| **isNaN()** | Función que devuelve `true` si el valor NO es un número válido |

---

## Recursos Adicionales

- [MDN: if...else](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else){:target="_blank"} - Documentación oficial de condicionales
- [MDN: Math.random()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random){:target="_blank"} - Cómo generar números aleatorios
- [JavaScript.info: Condicionales](https://es.javascript.info/ifelse){:target="_blank"} - Tutorial interactivo de if/else
