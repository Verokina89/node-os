//Sacar datos de red:-Interfaz. -Dentro de cada interfaz habrá que sacar la Familia, dirección e Interno.

const os = require('node:os');

function getNetInfo() {
    const interfacs = os.networkInterfaces();
    let infoNetwork = {};

    Object.entries(interfacs).forEach(([nombreInterfaz, direccionesInterfaz]) => {
        infoNetwork[nombreInterfaz] = direccionesInterfaz.map(direccion => ({
            Familia: direccion.family,
            Dirección: direccion.address,
            Interno: direccion.internal,

        }));

    });
    return infoNetwork;
}

const mostrarInfoNetwork = (infoNetwork) => {
    Object.entries(infoNetwork).forEach(([nombreInterfaz, direccionesInterfaz]) => {
        console.log(` Interfaz: ${nombreInterfaz}`);
        direccionesInterfaz.forEach(direccion => {
            console.log(` Familia: ${direccion.Familia}`);
            console.log(` Dirección: ${direccion.Direccion}`);
            console.log(` Interno: ${direccion.Interno}`);
        });
    });    
}

const infoNetwork = getNetInfo()
mostrarInfoNetwork(infoNetwork)

module.exports = {getNetInfo, mostrarInfoNetwork}