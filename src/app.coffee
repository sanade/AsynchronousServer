http = require 'http'
user = require './user.coffee'
http.createServer (req, res) =>
  user.get "SANADE", (id) =>
    res.writeHead 200, 'Content-Type': 'text/plain'
    res.end "Hello World #{id}"
.listen 1337, '127.0.0.1'
