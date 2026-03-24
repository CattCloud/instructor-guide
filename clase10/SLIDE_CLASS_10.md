<!-- .slide: data-background="#0A192F" -->
# Clase 10: Decisiones y Lógica Condicional
## if/else, Operadores y Math.random()

---

## 🔗 TRANSICIÓN: Clase 09 → Clase 10

### Clase 09 completada:
- Creaste tu repositorio `guess-number-js`
- Declaraste variables con `let` y `const`
- Trabajaste con `string`, `number` y `boolean`
- Usaste `prompt()`, `alert()` y `console.log()`
- Descubriste que `prompt()` SIEMPRE devuelve un string

### Hoy en Clase 10:
- **Math.random()** para generar el número secreto
- **if/else** para dar pistas al jugador
- **Validación** para que el programa no se rompa

> "Tu programa aprendió a hablar. Hoy aprenderá a PENSAR."

---

## 🧠 QUIZ PRE-LAB

### Pregunta:
Tu celular tiene 5% de batería y estás en la calle. ¿Qué decides hacer? ¿Cambiaría tu decisión si estuvieras en casa?

*¿Qué información necesitas para tomar esa decisión?*

**Eso es exactamente lo que hace `if/else`:** evalúa una condición y elige un camino.

---

## 💡 ¿Cómo genera el número secreto?

```js
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
```

### Paso a paso:

| Paso | Resultado | Ejemplo |
|------|-----------|---------|
| `Math.random()` | 0 a 0.999... | `0.7342` |
| `* 100` | 0 a 99.999... | `73.42` |
| `Math.floor()` | 0 a 99 | `73` |
| `+ 1` | **1 a 100** | **74** |

> Recarga la página varias veces y observa cómo cambia el número.

---

## 🎯 COMPROBACIÓN

### Pregunta:
¿Cuál es la diferencia entre `===` y `==`?

```js
5 === '5'   // ¿true o false?
5 == '5'    // ¿true o false?
```

---

## 🎯 COMPROBACIÓN - Respuesta

```js
5 === '5'   // false → diferente tipo (number vs string)
5 == '5'    // true  → convierte tipo automáticamente
```

**Regla:** Siempre usa `===` (igualdad estricta).

`==` puede dar resultados inesperados:
```js
'' == false   // true 😱
0 == ''       // true 😱
null == undefined // true 😱
```

---

## ✅ CHECKPOINT 1: Número Secreto

### Verificar en la consola:

```js
console.log('(DEBUG) Número secreto:', numeroSecreto);
```

**¿Qué debe funcionar?**
- [ ] El número cambia cada vez que recargas la página
- [ ] Siempre es un entero entre 1 y 100
- [ ] `prompt()` pide un intento al jugador
- [ ] `if/else` dice "Correcto" o "Incorrecto"

---

## 💡 if / else if / else

```js
if (intento === numeroSecreto) {
  alert('🎉 ¡Correcto!');
} else if (intento > numeroSecreto) {
  alert('📈 Muy alto');
} else {
  alert('📉 Muy bajo');
}
```

### El flujo:

```
¿intento === secreto?
    ├── SÍ → "¡Correcto!" (termina)
    └── NO → ¿intento > secreto?
                ├── SÍ → "Muy alto"
                └── NO → "Muy bajo"
```

> Las condiciones se evalúan **en orden**. La primera que sea `true` gana.

---

## 💡 Operadores Lógicos

| Operador | Nombre | Ejemplo | Resultado |
|----------|--------|---------|-----------|
| `&&` | AND | `edad >= 18 && tieneLicencia` | Ambas deben ser `true` |
| `\|\|` | OR | `esFeriado \|\| esDomingo` | Al menos una `true` |
| `!` | NOT | `!lloviendo` | Invierte el valor |

```js
// Validar que sea número Y esté en rango
if (!isNaN(intento) && intento >= 1 && intento <= 100) {
  // entrada válida
}
```

---

## ✅ CHECKPOINT 2: Pistas Alto/Bajo

### Verificar:

**¿Qué debe funcionar?**
- [ ] Número mayor al secreto → "Muy alto"
- [ ] Número menor al secreto → "Muy bajo"
- [ ] Número exacto → "¡Correcto!"
- [ ] El programa permite un segundo intento

**Pregunta al grupo:** ¿Notan que estamos repitiendo código para cada intento? ¿Cómo lo resolverían?

---

## 💡 Validación: isNaN() y Rango

```js
if (isNaN(intento)) {
  alert('⚠️ Eso no es un número.');
} else if (intento < 1 || intento > 100) {
  alert('⚠️ Debe estar entre 1 y 100.');
} else {
  // Aquí va la lógica del juego
}
```

### ¿Por qué validar?

| El usuario escribe | Sin validación | Con validación |
|-------------------|----------------|----------------|
| `"hola"` | `NaN === 42` → bug silencioso | "Eso no es un número" |
| `0` | Compara fuera de rango | "Debe estar entre 1 y 100" |
| `150` | Compara fuera de rango | "Debe estar entre 1 y 100" |
| `42` | Funciona ✅ | Funciona ✅ |

---

## 💡 El Operador Ternario

### if/else corto en una línea:

```js
// if/else normal
let mensaje;
if (intento > numeroSecreto) {
  mensaje = 'alto';
} else {
  mensaje = 'bajo';
}

// Ternario: condición ? siTrue : siFalse
let mensaje2 = intento > numeroSecreto ? 'alto' : 'bajo';
```

> **Úsalo** para asignaciones simples. **No lo uses** para lógica compleja.

---

## ✅ CHECKPOINT 3: Validación Completa

### Verificar:

**¿Qué debe funcionar?**
- [ ] Escribir "hola" → mensaje de error (no un bug)
- [ ] Escribir `0` o `150` → mensaje de rango
- [ ] Escribir número válido → pista alto/bajo/correcto
- [ ] Ternario usado en al menos un lugar
- [ ] Al menos 3 commits en GitHub

---

## 🔗 TRANSICIÓN: Hacia Clase 11

### Hoy lograste:
- Generar números aleatorios con `Math.random()`
- Tomar decisiones con `if/else if/else`
- Comparar con `===`, `>`, `<`, `>=`, `<=`
- Combinar condiciones con `&&`, `||`, `!`
- Validar entrada con `isNaN()` y rango
- Usar el operador ternario

### ¿Notaste algo?
El código se repite mucho para cada intento. Y `prompt()`/`alert()` no se ven muy profesionales...

### Próxima clase:
- **Funciones** para evitar repetir código
- **DOM** para reemplazar prompt/alert con una interfaz real
- **Eventos** para que el botón ejecute la verificación
- El juego se transforma de ventanas emergentes a interfaz visual

> "Hoy tu programa piensa. La próxima clase, aprenderá a organizarse y verse profesional."

---

## ❓ Preguntas de Cierre

1. ¿Qué pasa si usas `=` en lugar de `===` dentro de un `if`? ¿Por qué es un error peligroso?

2. ¿Por qué validamos la entrada ANTES de compararla con el número secreto?

3. Si quisieras dar 5 intentos al jugador, ¿cómo lo harías con el código actual? ¿Qué problema tendrías?

---

## 📝 Entrega del Lab

**Entregable:**
- [ ] Screenshot de la consola mostrando el juego funcionando
- [ ] URL del repositorio `guess-number-js` en GitHub
- [ ] Al menos 3 commits descriptivos

**Próxima clase:**
- Traer `guess-number-js` actualizado
- Pensar: ¿cómo se vería el juego con botones y una interfaz real?
