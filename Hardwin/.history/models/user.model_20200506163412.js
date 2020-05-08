
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

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
        require: true
    }
});

var User = mongoose.model('User', userSchema);

User.addUser = function(user, callback){

    bcrypt.genSalt(10,(err, salt)=>{
        if(err){
            callback('server error');
        }else {
            bcrypt.hash(user.password, salt, (err, hash)=>{
                if(err){
                    callback('server error');
                }else{
                    user.password = hash;
                    user.save((err, result)=>{
                        if(err){
                            console.log(err);
                            return callback('Failed to add', null);
                        } else{
                            callback(null, 'user added');
                        }
                    });
                }
            });
        }
    });

};

User.login= function(username, password, callback){
    User.findOne({username: username}, (err, user)=>{
        if(err){
            console.log(err);
            callback('server error');
        }else if(user==undefined){
            callback('user not found');
        }else{
            bcrypt.compare(password, user.password,(err, isMatch)=>{
                if(err){
                    callback('server error');
                }else if(isMatch)
            })
            if(password == user.password){
                callback(null,'login ok');
            }else{
                callback('login not ok');
            }
        }
    });
}

module.exports = User;