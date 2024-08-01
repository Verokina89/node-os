
import {getInfoSistema, mostrarInfoSistema} from './osModule.js';
import {getNetInfo, mostrarInfoNetwork} from './networkModule.js';

console.log(osModule(getInfoSistema, mostrarInfoSistema));
console.log(networkModule(getNetInfo, mostrarInfoNetwork));