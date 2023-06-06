
// const { argv } = require('process');
const {crearArchivoTabla} = require('./helpers/multiplicar')
const argv = require('./config/yargs');
const colors = require('./config/colors');
console.clear();
//console.log(process.argv);
//console.log(argv);
//console.log("base: yargs", argv.b);

// const [,,arg3] = process.argv;
// const [,base=5 ] = arg3.split('=');
// console.log(base)
// //const base = 2;
crearArchivoTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.red, 'creado'))
    .catch(err => console.log(err));



