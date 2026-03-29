/*Proporcione un ejemplo concreto donde el anidamiento de promesas se puede
reescribir mejor con async/await haciendo el código más limpio y mantenible.*/

function paso1() {
    return new Promise(resolve => {
        setTimeout(() => resolve(5), 1000);
    });
}

function paso2(valor) {
    return new Promise(resolve => {
        setTimeout(() => resolve(valor * 2), 1000);
    });
}

function paso3(valor) {
    return new Promise(resolve => {
        setTimeout(() => resolve(valor + 10), 1000);
    });
}
/*
// Anidamiento de promesas
paso1().then(res1 => {
    console.log("Paso 1:", res1);

    paso2(res1).then(res2 => {
        console.log("Paso 2:", res2);

        paso3(res2).then(res3 => {
            console.log("Paso 3:", res3);
            console.log("Resultado final:", res3);
        }).catch(err => console.log(err));

    }).catch(err => console.log(err));

}).catch(err => console.log(err));*/

// codigo mas limpio con async/await
async function ejecutar() {
    try {
        let res1 = await paso1();
        console.log("Paso 1:", res1);

        let res2 = await paso2(res1);
        console.log("Paso 2:", res2);

        let res3 = await paso3(res2);
        console.log("Paso 3:", res3);

        console.log("Resultado final:", res3);
    } catch (error) {
        console.log("Error:", error);
    }
}

ejecutar();
