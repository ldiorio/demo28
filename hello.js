var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write ("<h2>Node js demo</h2>");
  res.write("Hello World - how's it going?<br>");
  res.end();
}).listen(8080);