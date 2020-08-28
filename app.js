/* Requires */
//const fs = require('express'); -> externo a node
//const fs = require('./fs'); -> un archivo dentro del equipo
const argv = require('./configuraciones/yargs').argv;
const colors = require('colors');
const {crearArchivo, listarArchivo} = require('./multiplicar/multi');

let comando = argv._[0];

switch(comando){
    case 'listar':
        listarArchivo(argv.base,argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido.');
}



//console.log(argv);
//let argv2 = process.argv;

//console.log(argv.limite);
//console.log(argv2);

//let parametro = argv[2];
//let base = parametro.split('=')[1];

