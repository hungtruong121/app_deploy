var express = require('express');
var bodyParser = require('body-parser')
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post('/api/dang-nhap',function(req,res){
    if(req.body.username=='hung' && req.body.password=='11111'){
        res.send('Xin chao se lam tot' + req.body.username);
    }else{
        res.send('Dang Nhap khong dung nhung se lam duoc');
    }
});
app.listen(3000,function(){
    console.log('se lam duoc');
});