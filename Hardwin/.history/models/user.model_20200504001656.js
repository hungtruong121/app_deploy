
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name:{
        type: String
    },
    username:{
        type: String,
        require: true,
        
    }
})