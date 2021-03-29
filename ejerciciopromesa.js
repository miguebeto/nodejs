let numero = new Promise((resolver, rechazar) => {
    console.log('Inicial');

    resolver();
});
.then(() => {
    
    console.log('Haz esto');
})
.catch(() => {
    console.log('Haz aquello');
})
.then(() => {
    console.log('Haz esto sin que importe lo que sucedió antes');
});