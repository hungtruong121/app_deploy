
var express = require('express');
var http = require('http');
var path = require('path');
var mongose = require('mongoose');
var bodyParser = require ('body-parser');


var config = require('./config');
var userRoute = require('')

mongose.connect(config.dbUrl);
mongose.connection.on('connected', ()=>{
    console.log('connected');
});

mongose.connection.on('error', err =>{
    console.log('err' + err);
});

var port = 3000;

var app = express();

app.get('/', (req, res)=>{
    res.send('Hello Node ok');
})

var server = http.createServer(app);
server.listen(port, ()=>{
    console.log('Server = ' + port);
});
