/*Crear una función que reciba un arreglo de números y devuelva en un objeto a los pares
e impares:*/

function miFuncion(arreglo) {
    let resultado = {
        pares: [],
        impares: []
    };

    for (let num of arreglo) {
        if (num % 2 === 0) {
            resultado.pares.push(num);
        } else {
            resultado.impares.push(num);
        }
    }

    return resultado;
}
let obj = miFuncion([1,2,3,4,5]);
console.log(obj); 
