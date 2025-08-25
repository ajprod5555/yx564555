
const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('[ .. ..2 !!!!! 0.0.2 ..2 GHA GHCR ETC .. ]');
  res.end();
}).listen(8080);
