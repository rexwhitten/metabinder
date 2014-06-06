var NS = {};

// imports
RType = require('./api/Rtype/rtype').rtype;


var Controller = function (options) {
    var controller = new RType();


    return controller;
};


var BinderController = function () {
    var controller = new Controller({ binders : [] });

    
}


module.exports.Controller = new Controller({  
    enabled : true
});