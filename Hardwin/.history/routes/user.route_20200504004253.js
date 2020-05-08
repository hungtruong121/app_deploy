var express = require('express');
var router = express.Router();

router.post('/register', (req, res)=>{
    let user = new user({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    });

    user.addUser(user, (err, result)=>{
        if(err){
            return res.json({success: false, message: err});
        }
        return res.json({success: true, message: result});
    });
});

router.post('/login', (req,res))