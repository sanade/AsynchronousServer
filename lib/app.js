// Generated by CoffeeScript 1.11.1
(function() {
  var http, user;

  http = require('http');

  user = require('./user.coffee');

  http.createServer((function(_this) {
    return function(req, res) {
      return user.get("SANADE", function(id) {
        res.writeHead(200, {
          'Content-Type': 'text/plain'
        });
        return res.end("Hello World " + id);
      });
    };
  })(this)).listen(1337, '127.0.0.1');

}).call(this);
