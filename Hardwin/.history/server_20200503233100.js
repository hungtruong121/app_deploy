
var express = require('express');
var http = require('http');

var mongose = require('mongoose');

var config = require('./config');
mongose

var port = 3000;

var app = express();

app.get('/', (req, res)=>{
    res.send('Hello Node ok');
})

var server = http.createServer(app);
server.listen(port, ()=>{
    console.log('Server = ' + port);
});
