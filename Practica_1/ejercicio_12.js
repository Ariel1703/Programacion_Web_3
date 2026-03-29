/*Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede
reescribir mejor con async/await haciendo el código más limpio y mantenible. */

function paso1(callback) {
    setTimeout(() => {
        console.log("Paso 1");
        callback(5);
    }, 1000);
}

function paso2(valor, callback) {
    setTimeout(() => {
        console.log("Paso 2");
        callback(valor * 2);
    }, 1000);
}

function paso3(valor, callback) {
    setTimeout(() => {
        console.log("Paso 3");
        callback(valor + 10);
    }, 1000);
}

// Anidamiento de callbacks
paso1((res1) => {
    paso2(res1, (res2) => {
        paso3(res2, (res3) => {
            console.log("Resultado final:", res3);
        });
    });
});


/*Codigo mas limpio con async/await
function paso1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 1");
            resolve(5);
        }, 1000);
    });
}

function paso2(valor) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 2");
            resolve(valor * 2);
        }, 1000);
    });
}

function paso3(valor) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 3");
            resolve(valor + 10);
        }, 1000);
    });
}

async function ejecutar() {
    try {
        let res1 = await paso1();
        let res2 = await paso2(res1);
        let res3 = await paso3(res2);

        console.log("Resultado final:", res3);
    } catch (error) {
        console.log("Error:", error);
    }
}

ejecutar();*/