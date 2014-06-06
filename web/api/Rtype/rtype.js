var RType = function (obj){
    var self = {};

    if(obj){
        self = obj;
    }

    self.Events = {};

    return self;
};

module.exports.rtype = RType;