var http = require("http"); 
var fs   = require("fs"); 
http.createServer(function(request, response){ 
    response.writeHead(200, {'Content-Type': 'text/html'}); 
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
    fs.readFile("./pages/"+page, function(error, data){
        response.write(data);
        response.end();
    }); 
}).listen(3000, 'localhost'); 
console.log("Servidor funcionando en http://localhost:3000");
