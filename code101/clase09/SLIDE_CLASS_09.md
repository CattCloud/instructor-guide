<!-- .slide: data-background="#0A192F" -->
# Clase 09: Fundamentos de JavaScript
## Variables, Tipos de Datos y Operadores

---

## 🔗 TRANSICIÓN: Módulo 2 → Módulo 3

### Módulo 2 completado:
- Dominaste la terminal y Git
- Hiciste diseños responsive con media queries
- Creaste wireframes y usaste IA para generar código
- **Tu MyLinks está publicado en internet**

### Módulo 3 comienza:
- **JavaScript** - El lenguaje que le da VIDA a la web
- **Variables, condicionales, funciones**
- **Al final: tu primer juego interactivo**

> "Dejamos de pintar la casa. Ahora le ponemos electricidad."

---

## 🧠 QUIZ PRE-LAB

### Pregunta:
Si tuvieras que explicarle a una computadora cómo preparar un café, ¿qué pasos le darías? ¿Cuántos necesitas?

*Toma 2-3 respuestas antes de continuar*

---

## 💡 ¿Qué es un Algoritmo?

### Tu receta de café = un algoritmo

```
1. Agarrar taza
2. Poner agua en la tetera
3. Calentar agua
4. Agregar café a la taza
5. Verter agua caliente
6. Revolver
```

**Un algoritmo es una secuencia de pasos precisos para resolver un problema.**

> JavaScript es el lenguaje que usamos para escribir esos pasos para la computadora.

---

## 🎯 COMPROBACIÓN

### Pregunta:
¿Cuál de estos es un tipo de dato válido en JavaScript?

- A. `text` - para guardar palabras
- B. `integer` - para guardar números enteros
- C. `string` - para guardar texto
- D. `letter` - para guardar caracteres

---

## 🎯 COMPROBACIÓN - Respuesta

**Respuesta:** C

En JavaScript, el texto se guarda como `string` (cadena de caracteres). Los números son `number` (incluye enteros y decimales). Y los valores de verdadero/falso son `boolean`.

---

## ✅ CHECKPOINT 1: Setup del Proyecto

### Verificar:

```bash
cd ~/Documents/bootcamp/guess-number-js
ls
```

**¿Qué debe funcionar?**
- [ ] Ves `index.html` y `script.js` en la carpeta
- [ ] Live Server muestra la página en el navegador
- [ ] La consola (F12) muestra "¡Hola desde JavaScript!"

---

## 💡 Variables: let vs const

| `let` | `const` |
|-------|---------|
| Puede cambiar | No puede cambiar |
| `let edad = 25;` | `const curso = 'Code 101';` |
| `edad = 26;` ✅ | `curso = 'Code 201';` ❌ |

### ¿Cuándo usar cada uno?

```js
const PI = 3.14159;      // Nunca cambia → const
let intentos = 0;        // Cambiará en el juego → let
```

> **Regla:** Empieza con `const`. Si necesitas reasignar, cámbialo a `let`.

---

## ✅ CHECKPOINT 2: Variables y Tipos

### Verificar en la consola:

```js
typeof nombreUsuario  // → "string"
typeof edadUsuario    // → "string"  ← ¡Sorpresa!
```

**¿Qué debe funcionar?**
- [ ] `prompt()` pide datos al usuario
- [ ] `alert()` muestra un saludo personalizado
- [ ] `console.log()` imprime los valores y sus tipos

**Pregunta al grupo:** ¿Por qué `typeof edadUsuario` dice "string" si escribimos un número?

---

## 💡 REFLEXIÓN: Operadores y la Trampa del +

| Expresión | Resultado | ¿Por qué? |
|-----------|-----------|------------|
| `5 + 3` | `8` | Suma de números |
| `'5' + 3` | `'53'` | Concatenación (uno es string) |
| `'5' - 3` | `2` | JS convierte el string a número |
| `'5' * '2'` | `10` | JS convierte ambos a número |

> **Regla:** El `+` es el único operador "confuso". Si hay un string, concatena. Los demás siempre convierten a número.

---

## ✅ CHECKPOINT 3: Operadores

### Verificar en la consola:

```js
console.log(`Hola ${nombre}, naciste en ${año}`);
```

**¿Qué debe funcionar?**
- [ ] Operaciones aritméticas muestran resultados correctos
- [ ] Sabes la diferencia entre `'5' + 3` y `5 + 3`
- [ ] Usas template literals con backticks y `${}`

---

## 🔗 TRANSICIÓN: Hacia Clase 10

### Hoy lograste:
- Conectar JavaScript con HTML
- Declarar variables con `let` y `const`
- Usar 3 tipos de datos: `string`, `number`, `boolean`
- Operar con `+`, `-`, `*`, `/`, `%`
- Depurar con `console.log()`

### Próxima clase:
- **Condicionales:** `if/else` para tomar decisiones
- Tu programa podrá decir "¡Correcto!" o "Intenta de nuevo"
- El juego "Adivina el Número" empieza a cobrar forma

> "Hoy tu programa solo habla. La próxima clase, aprenderá a pensar."

---

## ❓ Preguntas de Cierre

1. ¿Por qué es importante saber qué tipo de dato tiene una variable antes de operar con ella?

2. Si `prompt()` siempre devuelve un string, ¿cómo harías para sumar dos números que ingresa el usuario?

3. ¿Cómo se conecta lo que aprendimos hoy con un juego donde el usuario adivina un número?

---

## 📝 Entrega del Lab

**Entregable:**
- [ ] URL del repositorio `guess-number-js` en GitHub
- [ ] Screenshot de la consola con variables y operaciones
- [ ] Tu nombre visible en los mensajes de consola

**Próxima clase:**
- Traer el proyecto `guess-number-js` listo
- Repasar qué es `typeof` y por qué `prompt()` devuelve strings
