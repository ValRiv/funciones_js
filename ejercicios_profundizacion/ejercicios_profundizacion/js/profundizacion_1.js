
/**
 * @fileoverview Ejercitación de Funciones
 * @author       Inove coding School <alumnos@inove.com.ar>
 * @copyright    www.inove.com.ar
 *
 * Consignas:
 * Deberá enlazar este archivo javascript al documento HTML.
 * Del ejercicio visto en clase, realizar los cambios necesarios para que el sistema
 * admita:
 * 
 * 1. En la función promedio():
 *    Debe recibir 5 números como argumento y calcular el promedio.  Debe reportar por
 *    medio de alert(); y console.log(); el detalle de los datos recibidos.
*/
const numero1=10
const numero2= 5
const numero3=4
const numero4=10
const numero5=8

function promedio() {
    let resultado= numero1+numero2+numero3+numero4+numero5
    promedio= resultado/5
    console.log("Funcion promedio " + promedio)
    
    alert(`Se ha ingresado el número ${numero1} , el número ${numero2} y el número ${numero3} , el número ${numero4} y  el número ${numero5} `);
    console.log(`Se ha ingresado el número ${numero1} , el número ${numero2} y el número ${numero3} , el número ${numero4} y  el número ${numero5} `);
    
}

promedio(10, 5,4,10,8);