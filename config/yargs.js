const { describe } = require('yargs');

const argv = require('yargs')
    .option('b',{
       alias: 'base',
       type: 'number', 
       demandOption: true,
       default: false,
       describe: 'Es la base de la tabla multiplicar'
    })

    .option('l',{
        alias: 'listar',
        type: 'boolean', 
        default: false,
        describe: 'Muestra la tabla en consola'
     })

.check ((argv, option)=>{
    if (isNaN(argv.b)) {
        throw 'La base tiene que ser un numero'
    } else {
        return true
    }
})
.argv;

module.exports = argv;