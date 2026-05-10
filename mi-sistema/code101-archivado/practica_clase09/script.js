// ============================================================
// JS
// ============================================================


/* 
Lo que admite el console.log
- Variables o constante
- Valores directamente
- Expresiones (es todo lo que arroja un resultado) -> funciones,operaciones

*/


console.log(5 > 8) ; // false
console.log(7<=7) ; //true
console.log(10!==10); //false  
console.log(26===12); //false  


console.log("IGUALDAD ESTRICTA");   
console.log(5===5);  
console.log("5"===5);  //Por el "5" es tipo de dato texto , mientras que el 5 es un numero 

console.log("5"==5); // true

console.log("COMPARACION EN TEXTOS");   
console.log("HOLA"==="adios"); 
console.log("HOLA"==="HOLA"); 
console.log("HOLA"==="hola"); //Sensible a mayusculas
console.log("Hola"!=="HOLA"); //Son diferentes, da true


console.log("OPERADORES LOGICOS");
console.log(15>=18 && true); // false && true -> false   
console.log(false || true); // true 
console.log(!("Hola"==="HOLA")); //  true


console.log("CONDICIONALES");
 


/* const PUNTAJE = Number(prompt("Ingresa tu nota del 0 al 20"));
//PUNTAJE 17

if(PUNTAJE>=18) {
  // Lineas de codigo que se ejecutan si la condicion cumple 
  alert("Excelente nota");
}
else if(PUNTAJE>=11){
   alert("Nota regular") 
}
else{
   // Lineas de codigo que se ejecutan si la condicion NO cumple 
  alert("Nota desaprobatoria")
}

console.log("Debajo del if"); */


console.log("PRUEBA UNDEFINED");


let prueba;

console.log(prueba);


console.log("PRUEBA NAN");

console.log("ab"*2);
console.log(Number("87a"));





