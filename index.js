// write your code here
var http = require('http');

http.createServer (function(req,res) {
    res.writeHead(200, {'content-Type':'text/html'});
    res.end('Hello World\n');
}).listen(8080,'127.0.0.1');
console.log('server running at http://127.0.0.1:8080/');




npm text