// ============================================================
// CLASE 09 — JavaScript: El Lenguaje que Hace Cosas
// Archivo de práctica del instructor (demo en vivo)
// ============================================================


// ─────────────────────────────────────────────
// MOMENTO 1 · console.log — Primera salida
// ─────────────────────────────────────────────

console.log("Hola Mundo");          // string
console.log(42);                    // number — nota el color diferente en consola
console.log(true);                  // boolean

// console.log admite varios elementos separados por coma
console.log("Mi edad es:", 25);
console.log("Es verdad?", true);


// ─────────────────────────────────────────────
// MOMENTO 2 · Variables — let y const
// ─────────────────────────────────────────────

// let → el valor puede cambiar
let nombre = "Eric";
let edad   = 25;
let estaAprendiendo = true;

console.log(nombre);
console.log(edad);
console.log(estaAprendiendo);

// Reasignación con let — la caja cambia de contenido
nombre = "Jugador";
console.log(nombre);   // → "Jugador"

// const → la caja está sellada, no se puede reasignar
const NUMERO_SECRETO = 42;
const MAX_INTENTOS   = 10;
const CURSO          = "Code 101";

console.log(NUMERO_SECRETO);
console.log(MAX_INTENTOS);
console.log(CURSO);

// Demo del error de const — descomentar para provocarlo en vivo
// const CURSO = "otro curso";   // SyntaxError: Identifier already declared
// CURSO = "otro curso";         // TypeError: Assignment to constant variable


// ─────────────────────────────────────────────
// MOMENTO 3 · Tipos de dato — string, number, boolean
// ─────────────────────────────────────────────

// La regla: las comillas definen el tipo, no el contenido
let num1 = 42;       // number
let num2 = "42";     // string — ¡parecen iguales pero no lo son!
let activo = true;   // boolean
let inactivo = false;

// typeof — el detective de tipos
console.log("--- typeof ---");
console.log(typeof nombre);          // "string"
console.log(typeof edad);            // "number"
console.log(typeof estaAprendiendo); // "boolean"
console.log(typeof num1);            // "number"
console.log(typeof num2);            // "string"  ← mismo valor, diferente tipo

// Casos especiales
let sinValor;
console.log(sinValor);            // undefined
console.log(typeof sinValor);     // "undefined"

let vacioPropósito = null;
console.log(vacioPropósito);      // null
console.log(typeof vacioPropósito); // "object" ← bug histórico de JS, no es error tuyo


// ─────────────────────────────────────────────
// MOMENTO 4 · Operadores Aritméticos + Trampa del +
// ─────────────────────────────────────────────

// Operadores básicos
let a = 20;
let b = 7;

console.log("--- Aritméticos ---");
console.log(a + b);   // 27   suma
console.log(a - b);   // 13   resta
console.log(a * b);   // 140  multiplicación
console.log(a / 4);   // 5    división
console.log(a % b);   // 6    módulo (residuo)

// El módulo: ¿es par o impar?
console.log(20 % 2);   // 0 → par
console.log(15 % 2);   // 1 → impar

// ⚠️ LA TRAMPA DEL + — demo en vivo (la más importante del momento)
console.log("--- Trampa del + ---");
console.log(5 + 3);      // →  8    (suma — ambos son number)
console.log("5" + 3);    // → "53"  (concatena — hay un string)
console.log("5" + "3");  // → "53"  (concatena — ambos string)

// Los demás operadores no tienen doble comportamiento
console.log("5" - 3);    // →  2    (convierte el string a number)
console.log("5" * 2);    // → 10    (igual)
console.log("5" / 1);    // →  5    (igual)

// NaN — Not a Number
console.log("abc" * 2);  // → NaN  (no puede convertir "abc" a número)
console.log(typeof NaN); // → "number" — otro dato curioso de JS


// ─────────────────────────────────────────────
// MOMENTO 5 · prompt(), Conversión y Template Literals
// ─────────────────────────────────────────────

// prompt() siempre devuelve string — sin importar qué escribe el usuario
let nombreUsuario = prompt("¿Cómo te llamas?");
let edadUsuario   = prompt("¿Cuántos años tienes?");

console.log("Nombre:", nombreUsuario, "| Tipo:", typeof nombreUsuario);  // string
console.log("Edad:", edadUsuario,     "| Tipo:", typeof edadUsuario);    // string ← siempre

// Conversión explícita con Number()
let edadNumero = Number(edadUsuario);
console.log("Edad como número:", edadNumero, "| Tipo:", typeof edadNumero); // number

// El bug si no convertimos (concatena en lugar de restar)
let anioActual = 2026;
let anioNacimientoBug    = anioActual + edadUsuario;    // ← bug: concatena
let anioNacimientoCorrecto = anioActual - Number(edadUsuario);  // ← correcto

console.log("Con bug:", anioNacimientoBug);          // ej: "202625" → concatenó
console.log("Correcto:", anioNacimientoCorrecto);    // ej: 2001

// Template Literals — backtick + ${}
let saludo = `Hola ${nombreUsuario}, tienes ${edadNumero} años.`;
let nacimiento = `${nombreUsuario}, naciste aproximadamente en ${anioNacimientoCorrecto}.`;

console.log(saludo);
console.log(nacimiento);

// Expresiones dentro de ${}
console.log(`El próximo año tendrás ${edadNumero + 1} años.`);

// alert() para mostrar al usuario (visible fuera de la consola)
alert(saludo);
