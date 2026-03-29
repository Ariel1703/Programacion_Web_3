/*Crear una función que invierta el orden de las palabras en una frase*/
function miFuncion(cadena) {
    return cadena.split('').reverse().join('');
}
let cad = miFuncion("abcd");
console.log(cad);