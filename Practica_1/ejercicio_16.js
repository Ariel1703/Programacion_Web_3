/* Proporcione un ejemplo para migrar una función con promesas a async/await */

function obtenerUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Juan");
        }, 1000);
    });
}
//version con promesas
function obtenerDatos() {
    obtenerUsuario()
        .then(usuario => {
            console.log("Usuario:", usuario);
            return usuario + " - datos cargados";
        })
        .then(resultado => {
            console.log("Resultado:", resultado);
        })
        .catch(error => {
            console.log("Error:", error);
        });
}

obtenerDatos();
/*
// version con async/await
async function obtenerDatos() {
    try {
        let usuario = await obtenerUsuario();
        console.log("Usuario:", usuario);

        let resultado = usuario + " - datos cargados";
        console.log("Resultado:", resultado);

    } catch (error) {
        console.log("Error:", error);
    }
}

obtenerDatos();*/