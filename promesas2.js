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
   

      const getusuario = id=>{ 
          return new Promise((resolve, reject) =>{
          if(empleados.find(empleado=> empleado.id === id))
          {
            resolve("Usuario si existe");
          }else{
            reject("Usuario no existe");
          }

      });
    };
      
    const getsalario = id=>{ 
        return new Promise((resolve, reject) =>{
        if(salario.find(salario=> salario.id === id))
        {
          resolve("salario si existe");
        }else{
          reject("salario no existe");
        }

    });
  };



      getusuario(2)
      .then(resolve=>{
          console.log(resolve);
      })

      .catch(reject=>{
        console.log(reject);
      });

      getsalario(2)
      .then(resolve=>{
          console.log(resolve);
      })

      .catch(reject=>{
        console.log(reject);
      });