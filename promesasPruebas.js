const p1 = Promise.resolve(4);

console.log(p1);
 p1
.then(resolve => console.log(resolve)) 
.catch(error => console.error(error))

//________________________________________________________

const p2 = Promise.resolve(6);

console.log(p2);

p2
.then(x => x + 5)
.then(x => console.log(x))
.catch(e => console.log(e))


//_________________________________________________________

const avaliable = 6;
   const orderTacos = order => new Promise((resolve, reject) => {
        for (i=0; i <= 1000 ; i++) {}
        if (order <= avaliable) {
            resolve('Biennn Sirvienedo los tacosss...');    
        }
        else {
            reject('Lo sentimos, no hay tacos disponibles.');
        }
    });

    

 orderTacos(4)
.then(Response => console.log(Response))
.catch(err => console.log(err));

function op(x,y) {
    console.log(x+y);
}

op(4 , 5);
