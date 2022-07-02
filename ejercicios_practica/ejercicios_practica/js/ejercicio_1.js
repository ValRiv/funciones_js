"use strict";

/* Inove Coding School
 * Ejercicios de funciones
 */

// Ejercicios con funciones
// console.log("Funcion imprimir mayor")
    // En esta función debe determinar cual de los dos
    // números ingresados por parámetro es mayor
    // y luego imprimir dicho valor en consola
    
let numero1=2
let numero2= 10
 function imprimirMayor(numero1, numero2) {
    
    if (numero1>numero2 ) {
        console.log("Funcion imprimir mayor " + numero1)
    } else {
        console.log("Funcion imprimir mayor " + numero2)
    }
   
}

imprimirMayor(2, 10);