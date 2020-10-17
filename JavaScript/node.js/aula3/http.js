var http = require('http')

http.createServer(function(req,res){
    res.end('ola bemvindo ao meu server')
}).listen(8084)

console.log('O servidor rodando')