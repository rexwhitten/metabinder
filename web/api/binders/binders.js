
var Binders = function(options){
    var self = {};

    self.options = options;

    self.Create = function (obj, complete_callback){
        var binder = new self.options.type(obj);

        complete_callback(binder);
    };

    return self;
};

module.exports.Binders = Binders;