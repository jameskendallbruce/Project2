var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/index", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  //Render search page
  app.get("/", function (req, res) {
    res.render("searchFood");
  });

  // render search results
  app.get("/searchResults/:city/:food_type", function (req, res) {
    res.render("displayResults");
  });

  //Render new listing page
  app.get("/newListing", function (req, res) {
    res.render("newListing");
  });

  //render the result page
  app.get("/results", function (req, res) {
    res.render("results");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
