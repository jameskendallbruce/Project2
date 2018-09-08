var db = require("../models");

module.exports = function (app) {

  //Render search page
  app.get("/", function (req, res) {
    console.log(req.cookies);
    res.render("searchFood");
  });

  // render search results
  app.get("/searchResults/:city/:food_type", function (req, res) {
    res.render("displayResults");
  });

  //Render new listing page
  app.get("/newListing/*", function (req, res) {
    res.render("newListing");
  });

  //image upload page
  app.get("/imageUpload", function (res, res) {
    res.render("imageUpload");
  });

  //Render login page
  app.get("/login", function (req, res) {
    res.render("loginpage");
  });

  //render user options page
  app.get("/userOptions", authenticationMiddleware(), function (req, res) {
    //console.log("yadhap adandj adna");
    //console.log(req.user + "Amazndnandan");
    console.log(req.isAuthenticated());

    res.render("userOptions");
  });

  app.get("/order/:id", function (req, res) {
    db.listing.findOne({ where: { id: req.params.id } }).then(function (item) {
      res.render("order", {
        listing: item
      });
    });
  });

  app.get("/orderConfirm", function (req, res) {
    res.render("orderConfirm");
  });

  app.get("/newUser", function (req, res) {
    res.render("newUser");
  });


  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

};


//page restriction
function authenticationMiddleware() {  
	return (req, res, next) => {
		console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);

	    if (req.isAuthenticated()) return next();
	    res.redirect('/login')
	}
}
