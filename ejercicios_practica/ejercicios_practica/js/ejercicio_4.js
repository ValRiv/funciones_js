"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones

// function generarInvitados()

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada
Está función retorna una variable como retorno de salida

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán concatener en una sola variable
tipo texto

La función deberá retornar esta variable con los invitados concatenados
para que luego el sistema use esa variable "invidatos" para imprimir
en consola la lista

*/

// Definir y crear la función antes de esta llamada

function generarInvitados(){
    const invitado1=prompt("Ingrese el nombre del 1° invitado: ")
    const invitado2=prompt("Ingrese el nombre del 2° invitado: ")
    const invitado3=prompt("Ingrese el nombre del 3° invitado: ")
    const invitados=(`La lista de invitados es: el invitado 1: ${invitado1}, el invitado 2: ${invitado2} y el invitado 3: ${invitado3}`)
return invitados
}
const mis_invitados = generarInvitados();
console.log(`Bienvenidos ${mis_invitados}`);