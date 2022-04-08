//HTTP
var http = require("http"); 
// File System para abrir ficheros
var fs   = require("fs"); 
// Creamos el servidor
http.createServer(function(request, response){ 
        // Contenido html
    response.writeHead(200, {'Content-Type': 'text/html'}); 
        // Comprobamos si el segmento de la URL es alguno de estos y en cada caso cargamos un html diferente
    switch(request.url){
        case '/':
            page = "home.html";
            break;
        case '/clientes':
            page = "clientes.html";
            break;
        case '/productos':
            page = "productos.html";
            break;
        default:
            page = "404.html";
            break;
    }     
        // Cargamos el fichero y lo mostramos
    fs.readFile("./pages/"+page, function(error, data){
        response.write(data);
        response.end();
    }); 
// Puerto 3002 en el servidor local
}).listen(3000, 'localhost'); 
// Mensaje en la consola
console.log("Servidor funcionando en http://localhost:3000");
