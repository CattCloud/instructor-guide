// ============================================================
// MOMENTO 5 — prompt(), Conversión de Tipos y Template Literals
// ============================================================

// Descomentar de uno en uno durante la demo

// --- Demo 1: prompt() — captura del usuario ---
let intento = prompt("¿Cuál es el número secreto?");
console.log("Lo que ingresó el usuario:", intento);
console.log("Tipo de dato:", typeof intento);   // siempre 'string'

// --- Demo 2: La trampa de sumar sin convertir ---
// let suma = intento + 10;
// console.log("Suma sin convertir:", suma);   // "4210" si el usuario escribió 42

// --- Demo 3: Solución — conversión explícita con Number() ---
// let intentoNumero = Number(intento);
// console.log("Tipo después de Number():", typeof intentoNumero);  // 'number'

// --- Demo 4: ¿Qué pasa con entradas no numéricas? ---
// console.log(Number("hola"));     // NaN
// console.log(Number("5px"));      // NaN
// console.log(Number("5"));        // 5
// console.log(Number(""));         // 0  ← "gotcha" famoso

// --- Demo 5: parseInt vs Number ---
// console.log(parseInt("5px"));    // 5  (diferencia clave con Number)

// --- Demo 6: Template Literals — forma moderna ---
// const NUMERO_SECRETO = 42;
// let nombre = "Carlos";

// // Concatenación antigua (difícil de leer)
// console.log("Hola " + nombre + ", el número secreto es " + NUMERO_SECRETO);

// // Template Literal (moderno y legible)
// console.log(`Hola ${nombre}, el número secreto es ${NUMERO_SECRETO}`);

// // Expresiones dentro del ${}
// console.log(`El doble del secreto es ${NUMERO_SECRETO * 2}`);
