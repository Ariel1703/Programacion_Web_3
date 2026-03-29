/*Crear una función que reciba un arreglo de números y devuelva el número mayor y el
menor, en un objeto. */

function miFuncion(arreglo) {
    let mayor = arreglo[0];
    let menor = arreglo[0];

    for (let num of arreglo) {
        if (num > mayor) {
            mayor = num;
        }
        if (num < menor) {
            menor = num;
        }
    }

    return {
        mayor: mayor,
        menor: menor
    };
}

let obj = miFuncion([3,1,5,4,2]);
console.log(obj); 
