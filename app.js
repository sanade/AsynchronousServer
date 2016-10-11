
var http = require('http');
var user = require('./src/user.js');
http.createServer(function(req, res){
  user.get("SANADE", function(id){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World' + id);
  });
}).listen(8080);