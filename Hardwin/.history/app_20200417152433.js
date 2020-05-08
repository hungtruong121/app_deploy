var express = require('express');
var bodyParser = require('body-parser')
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post('/api/dang-nhap',function(req,res){
    if(req.body.username =='abcd' &&)
})
app.listen(3000,function(){
    console.log('se lam duoc');
});