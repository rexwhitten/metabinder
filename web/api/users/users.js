
var Users = function (options){
    var self = {};
    var redis = require("redis");
    self.redis = redis.createClient();

    self.options = options;

    self.redis.on("/error/redis", function (err) {
        console.log("Error " + err);
    });

    self.getAll = function ( fn) {
        self.redis.get("users", function (err, result) {
           console.log('sys:// - getting all users.');
           if(err){
               console.log(err);
           }
           fn(result);
        });
    }

    self.findById = function (id, fn) {
        self.redis.get("users", function (err, result) {
           console.log('sys:// - finding user by id');
           var users = JSON.parse(result);
           var idx = id - 1;
              if (users[idx]) {
                fn(null, users[idx]);
              } else {
                fn(new Error('User ' + id + ' does not exist'));
              } 
        });
    }

    self.findByUsername = function(username, fn) {
     self.redis.get("users", function (err, result) {
         console.log('sys:// - finding user by user name');
         console.log('sys:// - ' + err);
         console.log('sys:// - ' + JSON.parse(result));
          var users = JSON.parse(result);
          for (var i = 0, len = users.length; i < len; i++) {
            var user = users[i];
            if (user.username === username) {
              return fn(null, user);
            }
          }
          return fn(null, null);
     });
    }

    self.register = function (user_data) {
         var user = new self.type(user_data);

         self.redis.hmset("user:" + user.id);
    };

    self.test_register = function(){
        var user = new self.type();
        user.id = 5000;
        user.email = "rex.whitten@gmail.com";
        user.password = "password";
        user.username = "rex.whitten"

        self.register(user);
    };

    self.type = function (obj){
        var user = {};
                        
        user.id = new number();
        user.username = new String();
        user.password = new String(); // Secure string;
        user.email = new String();
                        
        if(obj){
            user.id = obj.id;
            user.username = obj.username;
            user.password = obj.password; // Secure string;
            user.email =obj.email;
        }

        return user;
    }

    return self;
}
    
    
module.exports.Users = new Users({ 
    security_enabled : true
});