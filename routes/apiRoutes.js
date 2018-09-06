
var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/foods", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/newListing", function(req, res) {
    db.listing.create(req.body).then( () => res.end()).catch(console.error);
    
  });


  //Test:
  app.get("/searchResults/:location/:food_type", function(req, res){
    db.listing.findAll({
      where:{
        serving_location: req.params.location,
        food_type: req.params.food_type
      }
    }).then( function(result){
      console.log(result);
      res.json(result);
    });
  });
};



