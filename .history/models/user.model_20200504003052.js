
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name:{
        type: String
    },
    username:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        req
    }
});

var User = mongoose.model('User', userSchema);

User.addUser = function(user, callback){
    user.save((err, result)=>{
        if(err){
            console.log(err);
            return callback('Failed to add', null);
        } else{
            callback(null, 'user added');
        }
    });
};

User.login= function(username, password, callback){
    User.findOne({username: username}, (err, user)=>{
        if(err){
            console.log(err);
            callback('server error');
        }else if(user==)
    })
}