
var express = require('express');
var http = require('http');

var MongoClient = require('mongoose');
.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
var bodyParser = require ('body-parser');


var config = require('./config');
var userRoute = require('./routes/user.route');

MongoClient.connect(config.dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});
MongoClient.connection.on('connected', ()=>{
    console.log('connected');
});

MongoClient.connection.on('error', err =>{
    console.log('err' + err);
});

var port = 3000;
var app = express();

//middle
app.use(bodyParser.json());
app.use('/user', userRoute);

app.get('/', (req, res)=>{
    res.send('Hello Node ok');
})

var server = http.createServer(app);
server.listen(port, ()=>{
    console.log('Server = ' + port);
});
