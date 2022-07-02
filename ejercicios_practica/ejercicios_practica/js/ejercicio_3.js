"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones

// function generarInvitados()

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán imprimir en consola
*/

// Definir y crear la función antes de esta llamada

function generarInvitados(){
    const invitado1=prompt("Ingrese el nombre del 1° invitado: ")
    const invitado2=prompt("Ingrese el nombre del 2° invitado: ")
    const invitado3=prompt("Ingrese el nombre del 3° invitado: ")

console.log( `Se ha ingresado el primer invitado ${invitado1}`);
console.log( `Se ha ingresado el segundo invitado ${invitado2}`);
console.log( `Se ha ingresado el tercer invitado ${invitado3}`);

}
const mis_invitados = generarInvitados();