/*Almacenar el resto de los elementos de un arreglo sin tomar en cuenta los dos primeros
elementos de un arreglo, mediante desestructuración. */ 

let arreglo = [10, 20, 30, 40, 50];

let [a, b, ...resto] = arreglo;

console.log(a);      
console.log(b);      
console.log(resto); 