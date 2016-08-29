var express = require('express')
var app = express()

app.get('/api', function (req, res) {
  //res.send('Hello World')
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(req.headers, true, 2));
  res.end();
})

app.listen(9000)
