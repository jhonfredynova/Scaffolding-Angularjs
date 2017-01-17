process.env.NODE_ENV = 'production';

process.env.NODE_ENV = process.env.NODE_ENV  || 'development';
process.env.PORT = process.env.PORT || 3000;

var express = require('express');
var path = require('path');
var app = express();
var srcFolder = process.env.NODE_ENV === 'development' ? './' : './dist/';

app.use(express.static(srcFolder));
app.get('*', function (req, res, next) {
  res.sendFile('index.html', { root: path.join(__dirname, srcFolder) })
})

var server = require('http').createServer(app);
server.listen(process.env.PORT);
module.exports = app;
console.log('Running on the port ' + process.env.PORT);