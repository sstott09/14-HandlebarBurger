//require Express
var express = require("express");
//requires burger.js                      
var burger = require("../models/burger.js");
//express routing           
var router = express.Router();

//GET REQUEST
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        //holds burger data                  
        var burgerBurger = {
            burgers: data
        };
        console.log(burgerBurger)
        //renders index.handlebars
        res.render("index", burgerBurger);
    });
});
//POST REQUEST - Create
router.post("/burger/create", function (req, res) {
    //passes data into HTML         
    //call it random name - avacado    
    burger.insertOne(req.body.burger_name, function (result) {
        //redirects it to main page
        console.log(result)
        res.redirect("/")
    });
});
//POST REQUEST - Update
router.put("/updateOne/:id", function (req, res) {
    // holds burgers being devoured 
    var condition = "id = " + req.params.id;
    burger.updateOne(req.params.id, function(result){

        res.sendStatus(200)
    });
});
//POST REQUEST - Delete
router.post("/deleteOne/:id", function (req, res) {
    // holds burger being deleted     
    var condition = "id = " + req.params.id;
    // Redirect to the homepage                 
    burger.deleteOne(condition, function () {
        res.redirect("/");
    });
});

module.exports = router;         
