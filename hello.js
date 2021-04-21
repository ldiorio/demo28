var http = require('http');
var port = process.env.PORT || 3000;
//var port = 8080;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write ("<h2>Node js demo</h2>");
  res.write("Hello World - how's it going?<br>");
  res.write("This is working online!<br>");
  res.end();
}).listen(port);
