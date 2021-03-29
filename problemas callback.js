const empleados = [
 {
    id: 1,
    nombre: "miguel"
},

{
    id: 2,
    nombre: "Angie"
},
{
    id: 3,
    nombre: "Francisco"
}

];

const salario = [
    {
       id: 1,
       salario: 1000
   },
   
   {
       id: 2,
       salario: 1500
   }
   
   ];


   const getempleado = (id, callback) => {
       const empleado = empleados.find ( e => e.id === id )
       
  

if (empleado) {
    callback (null, empleado);
   
}
else {
    callback (`Empleado con id ${id} no existe`);
}

}
getempleado( 1, (err, empleado) => {

    if(err){
        console.log("Error!")
        return console.log(err)
    }
    console.log("Empleado existe!")
    console.log(empleado);
})



const bookdb = [
{
    id: 1,
    title: "Principito",
    authorid: 1
},
{
    id: 2,
    title: "Buda blues",
    authorid: 2
},
{
    id: 3,
    title: "Inferno",
    authorid: 3
},]

const authorsdb = [
    {
        id: 1,
        name: "Antoine Saint"
    
    },
    {
        id: 2,
        title: "Daniel Mendoza"
    
    },
    {
        id: 3,
        title: "Dan Brown"
    
    },]

    function getbookbd (id, callback) {
        const book = bookdb.find(book => book.id === id);
        if (!book) {
            const error = new Error();
            error.message = "book no found";
            return callback(error);
        }
        callback(null, book)
    }


    function getauthorsbd (id, callback) {
        const authors = authorsdb.find(authors => authors   .id === id);
        if (!authors) {
            const error = new Error();
            error.message = "Authors no found";
            return callback(error);
        }
        callback(null, book)
    }


    getbookbd(2, (err, book) => {
        if (err){
            return console.log(err.message);
        }

        getauthorsbd(book.authorid, (err, authors) => {
            if (err){
                return console.log(err.message);
            }  
            console.log(`this book ${book.name} was written by ${authorsdb.name}`)
        })
        return console.log(book);
    });