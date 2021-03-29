const fs = require('fs');
const colors = require('colors');
const crearchivo = async(x = 5, listar = false)=>{

    

let salida = '';
for(i=0;i<=10;i++){
    salida +=`${x}  ${'x'.green}  ${i} ${'='.green}  ${x * i}\n `;

}
try {
    if (listar) {
        console.log('====================='.blue);
        console.log('Tabla del:'.rainbow, colors.yellow(`${x}`));
        console.log('====================='.blue);
        console.log(salida);    
    }

    fs.writeFileSync(`tabla-${x}.txt`, salida);

    return `tabla-${x}.txt`;
        
    } catch (err) {
        throw err;
    }


}

module.exports = {
    crearchivo
}