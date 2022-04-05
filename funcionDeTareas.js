let funcionDeTareas = function (accion, array) {

    switch (accion) {
        case "listar":
            console.log(array);
            break;
        case undefined:
            console.log("Atención - Tienes que pasar una acción.");
            break;
        default:
            console.log("No entiendo que queres hacer");
    }
}

module.exports = funcionDeTareas;