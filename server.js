var http = require('http'),
    fs = require('fs'),
    httpProxy = require('http-proxy');


var express = require('express');
var app = express();

var proxy = httpProxy.createProxyServer({});

app.use(express.static('./'));

// app.get('/', function(req, res) {
//     //res.send('Hello World')

//     fs.readFile("./index.html", function(error, content) {
//         res.writeHead(200, { 'Content-Type': "text/html" });
//         res.write(content, 'utf-8');
//         res.end();
//     })
// });

app.get(/api/, function(req, res) {
    proxy.web(req, res, { target: 'http://localhost:9000' });
});

app.listen(3000)

console.log('Server running at http://127.0.0.1:3000/');