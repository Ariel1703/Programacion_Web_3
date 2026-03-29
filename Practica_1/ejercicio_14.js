/*Proporcione un ejemplo para convertir una promesa en un callback. */
// tenemos una promesa 
function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Datos obtenidos");
        }, 2000);
    });
}
// tenemos una funcion que convierte la promesa en un callback
function usarConCallback(callback) {
    obtenerDatos()
        .then(resultado => {
            callback(null, resultado); // éxito
        })
        .catch(error => {
            callback(error, null); // error
        });
}
//uso del callback
usarConCallback((error, data) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Resultado:", data);
    }
});