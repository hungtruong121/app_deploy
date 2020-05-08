var express = require('express');
var router = express.Router();

router.post('/register', (req, res)=>{
    let user = new user({
        name: req.body.name,
        username: req
    })
})