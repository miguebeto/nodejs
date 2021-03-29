require('colors');
 
// console.log('hello'.magenta); // outputs green text
// console.log('i like cake and pies'.underline.red) // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap); // Drops the bass

const {crearchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs')



//console.clear();


crearchivo(argv.b, argv.l)
.then(nombrearchivo => console.log(nombrearchivo.rainbow, 'creado'))
.catch(err=>console.log(err));








// console.log('base: yargs', argv.b );
// const[,,arg3= 'base=5'] = process.argv;
// const[,x=5] = arg3.split('=');
// console.log(x);