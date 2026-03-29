/*Proporcione un ejemplo concreto de encadenamiento de promesas. */

function paso1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5);
        }, 1000);
    });
}

function paso2(valor) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(valor * 2);
        }, 1000);
    });
}

function paso3(valor) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(valor + 10);
        }, 1000);
    });
}

paso1()
    .then(res1 => {
        console.log("Paso 1:", res1); 
        return paso2(res1);
    })
    .then(res2 => {
        console.log("Paso 2:", res2); 
        return paso3(res2);
    })
    .then(res3 => {
        console.log("Paso 3:", res3);
    })
    .catch(error => {
        console.log("Error:", error);
    });