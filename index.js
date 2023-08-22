// const fs = require("fs");


// function suma (x1,x2)  {
//         return x1+x2;
// }

// // crear archivos
// fs.writeFile("./texto.txt","linea uno de prueba", function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log("archivo creado ")
// })

//console.log(suma(3,2))


 
const express = require('express');

 const server = express();

 server.get('/', function (req, res){
    res.send('<h1>hola mundo con express y node</h1>');
    res.end();
 });

 server.listen(4000,  function (){
    console.log(' on port 3000');
 });