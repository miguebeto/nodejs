let http = require('http'); //create a server object:
const { url } = require('inspector');
let myDate = require('./creandoModulos');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'}); //Text format of the request
res.write('La fecha actual es:' + myDate.tiempoActual()); //write a response to the client
res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

//Split the query string into readable parts:
var url = require('url'); //plits up a web address into readable parts.

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);

// used of upper-case

let http2 = require('http');
let mayus = require('upper-case');
http2.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(mayus.upperCase("Hello World!"));
  res.end();
}).listen(8080);