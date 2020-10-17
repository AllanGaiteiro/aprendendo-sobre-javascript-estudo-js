var http = require('http')

http.createServer(function(red,res){
    res.end('gerenciador')
}).listen(1010)