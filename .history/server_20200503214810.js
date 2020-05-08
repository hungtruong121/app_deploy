
var express = require('express');
var http = require('http');

var port = 3000;

var app = express();

var server = http.createServer(app);
server.listen(port, ()=>{
    console.log('Server = ' + port);
});
