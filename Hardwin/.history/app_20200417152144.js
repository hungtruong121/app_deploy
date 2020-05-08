var express = require('express');
var bodyParser = require('body-parser')
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended.fasl}))
app.listen(3000,function(){
    console.log('se lam duoc');
});