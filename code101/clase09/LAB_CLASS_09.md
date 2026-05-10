# Lab 09: Fundamentos de JavaScript

> 🚀 **Proyecto del Módulo:** Adivina el Número - Juego Interactivo
>
> 📌 **Este lab:** Crear tu primer programa interactivo con variables, tipos de datos y operadores.

## 🎯 Objetivos del Lab

1. Crear y enlazar correctamente archivos HTML y JavaScript
2. Declarar variables y trabajar con tipos de datos (`string`, `number`, `boolean`)
3. Utilizar operadores aritméticos y de concatenación para manipular datos

---

## 🔑 Conceptos Clave

- **Variable** - Espacio con nombre para guardar un dato que puede cambiar (`let`) o no (`const`)
- **Tipo de dato** - La naturaleza de un valor: texto (`string`), número (`number`) o lógico (`boolean`)
- **Operador** - Símbolo que realiza una operación: matemática (`+`, `-`, `*`, `/`, `%`) o de texto (concatenación)
- **console.log()** - Función que imprime valores en la consola del navegador para verificar tu código

---

## ⚙️ Setup Inicial

Antes de comenzar, verifica que tengas todo listo:

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | VS Code instalado | Puedes abrirlo sin errores |
| ☐ | Live Server instalado | Extensión visible en la barra lateral de VS Code |
| ☐ | Google Chrome | Puedes abrir DevTools con F12 |
| ☐ | Cuenta de GitHub | Puedes acceder a github.com |

---

## Parte 1: Setup del Proyecto (25 min)

### 1.1 Crea y Clona tu Repositorio

Crea un nuevo repositorio en [github.com/new](https://github.com/new){:target="_blank"} llamado `guess-number-js` (público, con README). Luego clona y abre en VS Code:

```bash
cd ~/Documents/bootcamp
git clone https://github.com/TU-USUARIO/guess-number-js.git
cd guess-number-js
code .
```

### 1.2 Crea los Archivos

En VS Code, crea dos archivos nuevos:

**`index.html`:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Adivina el Número</title>
</head>
<body>
  <h1>Mi primer programa en JavaScript</h1>
  <!-- Conecta tu archivo JS aquí -->
  <!-- Recuerda: la etiqueta <script> va antes de cerrar </body> -->
</body>
</html>
```

> 💡 **Tip:** La etiqueta `<script src="archivo.js"></script>` conecta un archivo JavaScript con tu HTML. Colócala justo antes de `</body>`.

**`script.js`:**

```js
console.log('¡Hola desde JavaScript!');
```

### 1.3 Verifica y Haz Commit

Abre `index.html` con Live Server, abre la consola de Chrome (`F12` → Console). Deberías ver: `¡Hola desde JavaScript!`

```bash
git add index.html script.js
git commit -m "feat: setup inicial con HTML y JS conectados"
git push
```

> 💡 Repite este patrón (`git add` → `commit` → `push`) al final de cada Parte.

✅ **Checkpoint:** Ves el mensaje "¡Hola desde JavaScript!" en la consola del navegador y tu commit está en GitHub.

---

## Parte 2: Variables y Tipos de Datos (35 min)

### 2.1 Variables y Tipos

Reemplaza el contenido de `script.js` con lo siguiente:

```js
// --- Variables con let (pueden cambiar) ---
let nombre = 'Tu Nombre';
// Declara una variable 'edad' con tu edad real (usa let)
// Declara una variable 'estaAprendiendo' con valor true (usa let)

// --- Imprime cada variable ---
console.log(nombre);
// Imprime las otras dos variables que declaraste

// --- Verifica los tipos de dato ---
console.log(typeof nombre);       // ¿Qué tipo es?
// Usa typeof para verificar el tipo de 'edad' y 'estaAprendiendo'
// ¿Qué esperas que diga? Escríbelo en un comentario antes de ejecutar
```

> 💡 `typeof` es un operador que te dice qué tipo de dato tiene una variable. Muy útil para depurar.

### 2.2 Variables con `const`

```js
// --- Variables con const (no pueden cambiar) ---
const curso = 'Code 101';
// Declara una constante 'maxIntentos' con valor 10

// Imprime ambas constantes con console.log()
```

Ahora intenta cambiar una constante:

```js
// Descomenta la siguiente línea y observa qué pasa:
// maxIntentos = 20;
```

> 💡 **¿`let` vs `const`?** Usa `const` cuando el valor no cambiará. Usa `let` cuando necesites reasignarlo. En la duda, empieza con `const`.

### 2.3 Interacción con el Usuario

```js
// --- Entrada del usuario ---
let nombreUsuario = prompt('¿Cómo te llamas?');
// Pide la edad al usuario con prompt() y guárdala en 'edadUsuario'

// --- Salida al usuario ---
// Muestra un alert que diga: "Hola [nombre], tienes [edad] años."
// Usa concatenación con + para unir las variables con el texto

// --- Verifica en consola ---
console.log('Nombre:', nombreUsuario);
// Imprime la edad y su tipo de dato (usa typeof)
// Pregúntate: ¿por qué el tipo no es "number"?
```

> 💡 Aunque escribas un número, `prompt()` siempre devuelve un `string`.

Commit sugerido: `"feat: variables, tipos de datos e interacción con usuario"`

✅ **Checkpoint:** Tu programa pide nombre y edad con `prompt()`, muestra un saludo con `alert()`, y en la consola puedes ver los valores y sus tipos.

---

## Parte 3: Operadores (30 min)

### 3.1 Operadores Aritméticos

```js
// --- Operadores aritméticos ---
let a = 20;
let b = 7;

console.log('Suma:', a + b);        // 27
console.log('Resta:', a - b);       // 13
// Completa las 3 operaciones que faltan:
// - Multiplicación (usa *)
// - División (usa /)
// - Módulo (usa % — devuelve el residuo de la división)
```

> 💡 El operador `%` (módulo) devuelve el residuo. Si `numero % 2` da `0`, es par.

### 3.2 Cuidado con los Strings y Números

```js
// --- ¿Qué resultado esperas? ---
console.log('5' + 3);    // ¿53 o 8?
console.log(5 + 3);      // ¿53 o 8?
console.log('5' - 3);    // ¿Qué pasa aquí?
```

El operador `+` con strings **concatena** (une textos). Con números, **suma**. Los demás operadores (`-`, `*`, `/`) convierten strings a números automáticamente.

### 3.3 Concatenación vs Template Literals

Hay dos formas de unir texto con variables:

```js
// Forma 1: Concatenación con +
let saludo1 = 'Hola ' + nombreUsuario + ', tienes ' + edadUsuario + ' años.';
console.log(saludo1);

// Forma 2: Template literals con `` (backticks)
// Escribe el mismo saludo usando backticks (`) y ${variable}
// let saludo2 = ...
// console.log(saludo2);
```

> 💡 **Template literals** usan backticks (`` ` ``) y `${variable}` para insertar valores. Son más fáciles de leer.

### 3.4 Aplica lo Aprendido

```js
// --- Calculadora de edad ---
let anioActual = 2026;
let anioNacimiento = anioActual - Number(edadUsuario);

// Completa el mensaje usando template literals:
// Debe decir: "Hola [nombre], naciste aproximadamente en [año]"
// Tu código aquí...
```

Commit sugerido: `"feat: operadores aritméticos, concatenación y template literals"`

✅ **Checkpoint:** Tu consola muestra resultados de operaciones matemáticas, la diferencia entre concatenación y suma, y un mensaje personalizado usando template literals.

---

## Logros Adicionales (Opcional)

### 🟢 Agrega una Tercera Variable

Declara una variable `ciudad` con `prompt()` y muestra un mensaje completo con nombre, edad y ciudad usando template literals. (Refuerza lo aprendido hoy)

### 🟡 Convierte String a Número

Investiga `Number()` y `parseInt()`. Usa una de estas funciones para convertir la edad del usuario a número y hacer una operación matemática real (como calcular en qué año cumplirá 100 años).

### 🔴 Experimenta con Condicionales (Preview)

Investiga qué hace `if/else` en JavaScript. Intenta mostrar un mensaje diferente si la edad es mayor o menor a 18. (Lo veremos en detalle en la Clase 10)

---

## 📝 Entrega

### Checklist

- [ ] Repositorio `guess-number-js` creado en GitHub
- [ ] `index.html` y `script.js` enlazados correctamente
- [ ] Variables declaradas con `let` y `const`
- [ ] Interacción con `prompt()` y `alert()`
- [ ] Operadores aritméticos probados en consola
- [ ] Al menos 3 commits descriptivos

### Entregable

📸 **Screenshot** de tu consola del navegador mostrando:
- Resultados de `console.log()` con variables y operaciones
- Tu nombre visible en alguno de los mensajes

> ⚠️ El screenshot debe mostrar tu nombre en los mensajes para verificar que es tu trabajo.
