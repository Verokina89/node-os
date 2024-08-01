//Sacar los siguientes datos:Nombre, Tipo, Versión, Arquitectura, CPUs, Memoria Total, Memoria Libre. - Memoria Total y Memoria Libre tendrá que estar en MB. Mira que dato dá y qué cáculo debes hacer.

const os = require('node:os');

function getInfoSistema() {
   
    const  infoSistema = {
        Nombre: os.hostname(),
        Tipo: os.platform(),
        Version: os.version(),
        Arquitectura: os.arch(),
        CPUs: os.cpus(),
        MemoriaTotal: os.totalmem(),
        MemoriaLibre: os.freemem(),
    };
   
    return infoSistema;
}


function mostrarInfoSistema (infoSistema) {
    console.log('Nombre:', infoSistema.Nombre);
    console.log('Tipo:', infoSistema.Tipo);
    console.log('Version:', infoSistema.Version);
    console.log('Arquitectura', infoSistema.Arquitectura);

    console.log('CPUs:');
    infoSistema.CPUs.forEach((CPU, index) => {
        console.log(`CPU${index + 1}`, CPU.model);
    });
    
    // console.log('Memoria total bytes:', infoSistema.MemoriaTotal);
    const totalmemoryMB = infoSistema.MemoriaTotal / (1024 * 1024);
    console.log('Memoria Total en MB:', totalmemoryMB.toFixed(2));

    // console.log('Memoria Libre en bytes:', infoSistema.MemoriaTotal);
    const freememoryMB = infoSistema.MemoriaLibre / (1024 * 1024);
    console.log('Memoria Libre  MB:', freememoryMB.toFixed(2));

}

const infoSistema = getInfoSistema()
mostrarInfoSistema(infoSistema)

module.exports = {getInfoSistema, mostrarInfoSistema}
