process.env.NODE_ENV = process.env.NODE_ENV  || 'development';
process.env.PORT = process.env.PORT || 3000;

var express = require('./serverConfig');
var app = express();
var server = require('http').createServer(app);

server.listen(process.env.PORT);
module.exports = app;
console.log('Running on the port ' + process.env.PORT);