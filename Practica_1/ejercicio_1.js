/*Crear una función que cuente cuántas veces aparece cada vocal en un texto y devuelva el
resultado en un objeto.*/
function miFuncion(texto) {
    let resultado = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };

    texto = texto.toLowerCase();

    for (let letra of texto) {
        if (resultado.hasOwnProperty(letra)) {
            resultado[letra]++;
        }
    }

    return resultado;
}
let obj = miFuncion("euforia");
console.log(obj); 
