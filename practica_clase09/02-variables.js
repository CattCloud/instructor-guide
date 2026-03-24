// ============================================================
// MOMENTO 2 — VARIABLES: let y const
// ============================================================

// Descomentar de uno en uno durante la demo

// --- Demo 1: Declaración e inicialización ---

let edad; 
edad=28;

console.log("Mi edad:",edad);

// --- Demo 2: Reasignar un let (esto SÍ funciona) ---
// intentos = 1;
// console.log("Intentos actualizados:", intentos);

// --- Demo 3: Intentar reasignar un const (ERROR EN VIVO) ---
// NUMERO_SECRETO = 99;
// console.log(NUMERO_SECRETO);
// → TypeError: Assignment to constant variable.

// --- Demo 4: Tipado dinámico (la variable no tiene tipo fijo) ---
// let dato = 42;
// console.log(dato, typeof dato);   // 42 'number'
// dato = "ahora soy texto";
// console.log(dato, typeof dato);   // "ahora soy texto" 'string'

// NOTA INSTRUCTOR: Mencionar brevemente que var existe, pero no usaremos var.
// "hay una tercera forma llamada var que es antigua, nunca la usen en código nuevo"
