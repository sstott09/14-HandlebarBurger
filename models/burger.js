//require ORM
var orm = require("../config/orm.js");                                                                 

//burger variable and callback function 
var burger = {
    selectAll: function(callback) {                                         
        orm.all("burgers", function(res) {                            
            callback(res);
        });
    },  

    //insert function
    insertOne: function (name, cb) {
        orm.create("burgers", ["burger_name","devoured"], [name,false], cb);
    },

    //update function
    updateOne: function(id, cb) {
        var condition = "id=" +id;
        orm.update("burgers",{devoured: true},condition,cb);
    },

    //delete function
    deleteOne: function(id, callback) {
        orm.deleteOne(id, function(res) {
            callback(res);
        });
    }
};

module.exports = burger;