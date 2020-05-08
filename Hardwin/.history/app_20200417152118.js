var express = require('express');
var bodyParser = require('body-parser')
var app = express();


app.use(bodyParser.json());
app.use(body)
app.listen(3000,function(){
    console.log('se lam duoc');
});