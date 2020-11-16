//Requires
// cuando despues de un const o un let hay llaves es una destructuracion
// de esta forma llamamos a argv (todo el contenido de yargs.js) . argv llama a la funcion concreta .argv
const argv = require('./config/yargs').argv;
const colors = require('colors');
const colors = require('colors/safe');


const { crearArchivo, listarTabla } = require ('./multiplicar/multiplicar')

let comando = argv._[0];

switch( comando ) {

    // casos 
    case 'listar':
        listarTabla( argv.base, argv.limite );
    break; 

    case 'crear':
    crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log(`Archivo creado en`, colors.green(archivo)))
        .catch(err => console.log(err))

    break; 
    //en caso que no sea ninguno de estos comandos
    default:
        console.log('comando no reconocido')

}

