/*Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y
al revés). */

function miFuncion(cadena) {
    cadena = cadena.toLowerCase();
    let invertida = cadena.split('').reverse().join('');
    return cadena === invertida;
}

let entrada1 = "oruro";
let entrada2 = "hola";

console.log(entrada1 + " = " + miFuncion(entrada1)); 
console.log(entrada2 + " = " + miFuncion(entrada2));