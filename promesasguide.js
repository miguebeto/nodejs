function exitoCallback(resultado) {
    console.log("Archivo de audio disponible en la URL " + resultado);
  }
  
  function falloCallback(error) {
    console.log("Error generando archivo de audio " + error);
  }
  
  crearArchivoAudioAsync(audioConfig, exitoCallback, falloCallback);

  //Si crearArchivoAudioAsync fuera escrita de manera tal que devuelva un objeto promise, usarla sería tan simple como esto:

  crearArchivoAudioAsync(audioConfig).then(exitoCallback, falloCallback);

  //Lo cuál es la versión corta de:
  const promesa = crearArchivoAudioAsync(audioConfig);
  promesa.then(exitoCallback, falloCallback);

  //encademiento

  const promesa = hazAlgo();
  const promesa2 = promesa.then(exitoCallback, falloCallback);

  //o

  let promesa2 = hazAlgo().then(exitoCallback, falloCallback);

  //En el pasado, hacer varias operaciones asíncronas en fila conduciría a la clásica pirámide de funciones callback:

  hazAlgo(function(resultado) {
    hazAlgoMas(resultado, function(nuevoResultado) {
      hazLaTerceraCosa(nuevoResultado, function(resultadoFinal) {
        console.log('Obtenido el resultado final: ' + resultadoFinal)
      }, falloCallback);
    }, falloCallback);
  }, falloCallback);

//Con las funciones modernas, adjuntamos nuestras functiones callback a las promesas devueltas, formando una cadena de promesa:

hazAlgo()
.then(function(resultado) {
  return hazAlgoMas(resultado);
})
.then(function(nuevoResultado) {
  return hazLaTerceraCosa(nuevoResultado);
})
.then(function(resultadoFinal) {
  console.log('Obtenido el resultado final: ' + resultadoFinal);
})
.catch(falloCallback);

//Los argumentos a then son opcionales, y catch(falloCallBack) es un atajo para then(null, falloCallBack). Es posible que veas esto expresado con funciones de flecha :

hazAlgo()
.then(resultado => hazAlgoMas(resultado))
.then(nuevoResultado => hazLaTerceraCosa(nuevoResultado))
.then(resultadoFinal => {
  console.log(`Obtenido el resultado final: ${resultadoFinal}`);
})
.catch(falloCallback);

//Importante: Devuelve siempre resultados, de otra forma las funciones callback no se encadenarán, y los errores no serán capturados.

//Es posible encadenar después de un fallo - por ejemplo: un catch- lo que es útil para lograr nuevas acciones incluso después de una acción fallida en la cadena. Lea el siguiente ejemplo:

new Promise((resolver, rechazar) => {
    console.log('Inicial');

    resolver();
})
.then(() => {
    throw new Error('Algo falló');

    console.log('Haz esto');
})
.catch(() => {
    console.log('Haz aquello');
})
.then(() => {
    console.log('Haz esto sin que importe lo que sucedió antes');
});