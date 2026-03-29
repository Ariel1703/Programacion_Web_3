/*Proporcione un ejemplo para convertir un callback en una promesa. */
// tenemos un callback
function obtenerDatos(callback) {
    setTimeout(() => {
        let exito = true;

        if (exito) {
            callback(null, "Datos obtenidos");
        } else {
            callback("Error al obtener datos", null);
        }
    }, 2000);
}
// tenemos una funcion que convierte el callback en una promesa
function obtenerDatosPromesa() {
    return new Promise((resolve, reject) => {
        obtenerDatos((error, data) => {
            if (error) {
                reject(error);   //error
            } else {
                resolve(data);   //éxito
            }
        });
    });
}
// uso de la promesa
obtenerDatosPromesa()
    .then(res => console.log("Resultado:", res))
    .catch(err => console.log("Error:", err));
